#!/usr/bin/env python3
"""Korean accuracy audit for aussie-mate.

The repo is multilingual: one line often carries <En>, <Ja>, <Zh> and <Ko> siblings, or an object with
`en:`/`ja:`/`zh:`/`ko:` fields. The previous version of this audit scanned whole LINES and flagged any
CJK character it found next to Hangul - which meant every Japanese and Chinese translation on the same
line was reported as Korean drift. Measured on 2026-10-28 it produced dozens of hits like

    app/cost-of-living/page.tsx:208  UNKNOWN_CJK=买,便,品,...
        ..."than Woolies/Coles</En><Ja>• 食料品はAldiで...</Ja><Zh>• 在Aldi买食品...</Zh>...

where the Korean text was correct and the characters belonged to the Japanese and Chinese siblings.
An audit that cries wolf on correct copy is worse than none: it trains the reader to skim.

So this version extracts the KOREAN SEGMENTS ONLY - the body of each <Ko> block and the value of each
ko:/koTitle:/koDesc: field - and checks those. Japanese and Chinese text is out of scope by
construction, not by allowlist.

Run from the repo root:
    bash scripts/korean-accuracy-audit.sh              # whole app/
    bash scripts/korean-accuracy-audit.sh app/tourist   # scoped after an edit

Exit 0 = clean, 1 = at least one hit.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

# A handful of Hanja are legitimate in Korean copy (호주境内, NSW州). Kept deliberately narrow: an
# allowlisted character inside a real Korean sentence is now invisible to this audit, so add only what
# has been checked by eye.
ALLOWED_HANJA = {"境", "内", "外", "州"}

# Compounds that are wrong in modern Korean even when each character looks plausible - they leaked in
# from a Japanese or Chinese source.
KNOWN_BAD = re.compile(r"(仕組み|便利|体系|電腦|網絡|國家|經濟|關係|應用|影響|證明|工作|随身)")

CJK = re.compile(r"[\u4e00-\u9fff\u3400-\u4dbf]")
HANGUL = re.compile(r"[\uac00-\ud7a3\u1100-\u11ff\u3130-\u318f]")

# <Ko>...</Ko>, allowing anything inside except another <Ko>.
KO_BLOCK = re.compile(r"<Ko>(.*?)</Ko>", re.S)
# ko: "..." / ko: '...' and the koTitle:/koDesc:/koBlurb:/koLabel: family.
KO_FIELD = re.compile(r"\bko[A-Za-z]*:\s*(\"(?:[^\"\\]|\\.)*\"|'(?:[^'\\]|\\.)*')")


def strip_comments(text: str) -> str:
    """Blank out comments, keeping every newline so line numbers still line up.

    Comments in this repo quote markup examples ("...the <Ko> block...") which the segment regexes
    would otherwise match across half a file - that is how the first run of this audit reported two
    hits whose "Korean" content was an English comment.
    """
    out = []
    i, n = 0, len(text)
    quote = None
    while i < n:
        ch = text[i]
        if quote:
            out.append(ch)
            if ch == "\\":
                if i + 1 < n:
                    out.append(text[i + 1])
                    i += 1
            elif ch == quote:
                quote = None
            i += 1
        elif ch in "\"'`":
            quote = ch
            out.append(ch)
            i += 1
        elif ch == "/" and i + 1 < n and text[i + 1] == "/":
            while i < n and text[i] != "\n":
                out.append(" ")
                i += 1
        elif ch == "/" and i + 1 < n and text[i + 1] == "*":
            while i < n and not (text[i] == "*" and i + 1 < n and text[i + 1] == "/"):
                out.append("\n" if text[i] == "\n" else " ")
                i += 1
            for _ in range(2):
                if i < n:
                    out.append(" ")
                    i += 1
        else:
            out.append(ch)
            i += 1
    return "".join(out)


def segments(text: str):
    """Yield (offset, korean_text) for every Korean segment in the file."""
    for m in KO_BLOCK.finditer(text):
        yield m.start(1), m.group(1)
    for m in KO_FIELD.finditer(text):
        raw = m.group(1)
        yield m.start(1) + 1, raw[1:-1]


def audit(path: Path):
    hits = []
    try:
        raw = path.read_text(encoding="utf-8")
    except (OSError, UnicodeDecodeError):
        return hits
    text = strip_comments(raw)

    for offset, korean in segments(text):
        # An empty or Latin-only field is a different defect (missing translation), not drift. But a
        # segment made entirely of CJK is the worst case, so it must NOT be skipped for having no
        # Hangul in it - that is how the first version of this audit missed <Ko>便利</Ko>.
        if not korean.strip() or not (HANGUL.search(korean) or CJK.search(korean)):
            continue
        bad_words = KNOWN_BAD.findall(korean)
        chars = [c for c in CJK.findall(korean) if c not in ALLOWED_HANJA]
        if not bad_words and not chars:
            continue
        line_no = text.count("\n", 0, offset) + 1
        snippet = re.sub(r"\s+", " ", korean.strip())[:110]
        hits.append((str(path), line_no, snippet, bad_words, chars))
    return hits


def main() -> int:
    scope = Path(sys.argv[1] if len(sys.argv) > 1 else "app")
    if not scope.exists():
        print(f"korean-accuracy-audit: no such path {scope}")
        return 0

    files = sorted(
        p
        for p in scope.rglob("*")
        if p.suffix in (".ts", ".tsx") and "node_modules" not in p.parts and ".next" not in p.parts
    )
    if not files:
        print(f"korean-accuracy-audit: no files matching {scope}")
        return 0

    hits = [h for f in files for h in audit(f)]
    if not hits:
        print(f"korean-accuracy-audit: OK - 0 hits across {len(files)} files "
              f"(Korean segments only; ja/zh text is out of scope)")
        return 0

    print(f"korean-accuracy-audit: FAIL - {len(hits)} hit(s) in {len({h[0] for h in hits})} files")
    for path, line_no, snippet, bad, chars in hits:
        flags = []
        if bad:
            flags.append("KNOWN_BAD=" + ",".join(sorted(set(bad))))
        if chars:
            flags.append("UNKNOWN_CJK=" + ",".join(sorted(set(chars))))
        print(f"  {path}:{line_no}  {' '.join(flags)}")
        print(f"      ...{snippet}...")
    print()
    print("A hit is a real defect: rewrite the Korean using Hangul.")
    print("A hit is a valid Hanja: add it to ALLOWED_HANJA in scripts/korean_accuracy_audit.py, by eye.")
    return 1


if __name__ == "__main__":
    sys.exit(main())

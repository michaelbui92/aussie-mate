#!/usr/bin/env bash
# korean-accuracy-audit.sh — catches CJK-character drift in Korean .tsx/.ts strings.
#
# The aussie-mate repo is bilingual (English / 한국어). The Korean side of every
# string lives inside `ko: "..."` blocks. Korean is normally written in
# Hangul (U+AC00–U+D7A3, U+1100–U+11FF, U+3130–U+318F). A handful of Hanja
# (Chinese-derived single characters used in formal Korean, e.g. 境 in
# 호주境内, 米 in 미, 日 in 일) are valid and stay.
#
# Common drift vectors the audit catches:
#   - Wrong-script single characters inside Korean text (便利, 便利, 便利
#     instead of 편의)
#   - Japanese kanji words slipping in (仕組み, 体制 instead of 체계)
#   - Full CJK word blocks imported from ja/zh-CN references
#
# Allowlist (true positives that stay on purpose):
#   - 境 in `호주境内`  (mixed-script formal Korean, reads as 'kyeong')
#   - 自 in `임의` etc (rare; case-by-case)
#   - The top-level metadata strings about `한국어` (we *want* the
#     word 한국어 spelled with Hanja in some places for SEO copy)
#
# Run from repo root:
#   bash scripts/korean-accuracy-audit.sh
#   bash scripts/korean-accuracy-audit.sh app/tourist  # scoped scan after an edit
#
# Exit code 0 = clean. Non-zero = at least one CJK drift hit.

set -uo pipefail
shopt -s globstar nullglob

# Scope = repo root by default, or first positional arg
SCOPE="${1:-app}"

# Allowed Hanja: 境 (境), and inside specific words known to be correct.
# Whole programme is word-aware: a hit is "this CJK char inside a hangul
# word boundary" — pure Korean sentence should never contain any of these.
ALLOWED_HANJA_REGEX='(境)'

# CJK ranges to flag (Japanese kanji + Chinese-only CJK blocks):
#   U+4E00–U+9FFF  Common CJK ideographs (Chinese Simplified/Traditional + Japanese Kanji)
#   U+3400–U+4DBF  CJK Extension A
# We DO NOT scan U+F900–U+FAFF (CJK Compatibility) — those rare.
FLAG_RANGE='[一-鿿㐀-䶿]'

# Words we know are wrong in modern Korean copy even when CJK looks plausible:
KNOWN_WRONG_REGEX='(仕組み|便利|体系|制度|工作|電腦|網絡|國家|經濟|關係|應用|影響|證明)'

# Universal Hanja usage in formal Korean <-> the audit must distinguish
# ONE-character Hanja from words that look like CJK. We allowlist the
# ones that genuinely appear in modern Korean and that we want to keep.

# Files to scan: .tsx and .ts under the scope
FILES=$(find "$SCOPE" -type f \( -name "*.tsx" -o -name "*.ts" \) ! -path "*/node_modules/*" ! -path "*/.next/*")

if [ -z "$FILES" ]; then
  echo "korean-accuracy-audit: no files matching $SCOPE"
  exit 0
fi

# python helper does the actual scanning — bash regex on Unicode katakana
# CJK is too easy to get wrong. Same logic, just portable.
python3 - "$FILES" <<'PY'
import sys, re, os

FILES = sys.argv[1].split('\n')
FILES = [f for f in FILES if f]

CJK_RE = re.compile(r'[一-鿿㐀-䶿]')
# A line is a CJK-Korean sentence: when a source line has both Hangul and a CJK char
HANGUL_RE = re.compile(r'[가-힣ㄱ-ㅎㅏ-ㅣ]')
# Known-valid Hanja (mixed-script Korean) we keep on purpose:
#   境 — used in 호주境内 (inside Australia) and 호주境外 (outside Australia)
#         reads as 'kyeong/nae' — standard Korean use.
#   内 — pairs with 境 inside 호주境内 ("inside Australia")
#   外 — pairs with 境 inside 호주境外 ("outside Australia")
#   州 — abbreviation for 호주 NSW州 (Australian state) in PRD/comment copy.
#   身 — used in 随身携带 (carry-on). NOTE: 随身 as a compound is a real
#         defect (Chinese-origin), so the script flags the compound and we
#         fix the underlying Korean copy.
ALLOWED_HANJA = {'境', '内', '外', '州'}

# Words we know are wrong in modern Korean copy even when the underlying
# CJK character is Hanja-allowed. These are non-Korean compounds that
# leaked in from a Japanese/Chinese source.
KNOWN_BAD = re.compile(
    r'(仕組み|便利|体系|電腦|網絡|國家|經濟|關係|應用|影響|證明|工作|随身)'
)
hits = []

for path in FILES:
    try:
        text = open(path, encoding='utf-8').read()
    except (OSError, UnicodeDecodeError):
        continue
    for n, line in enumerate(text.splitlines(), start=1):
        if not CJK_RE.search(line):
            continue
        # Skip lines that are pure CJK with no Korean context (e.g. console logs)
        if not HANGUL_RE.search(line):
            continue
        # Allowed line: every CJK char is on the Hanja allowlist AND no known-bad word
        cjk_chars = CJK_RE.findall(line)
        bad_words = KNOWN_BAD.findall(line)
        if not bad_words and all(c in ALLOWED_HANJA for c in cjk_chars):
            continue
        # Reduce the line to the hit context
        m = CJK_RE.search(line)
        before = max(0, m.start() - 30)
        after = min(len(line), m.end() + 30)
        ctx = line[before:after].replace('\n', '\\n')
        hits.append((path, n, ctx, bad_words, cjk_chars))

if not hits:
    print("korean-accuracy-audit: ✓ 0 CJK drift hits across {} files".format(len(FILES)))
    sys.exit(0)

print("korean-accuracy-audit: ✗ {} potential CJK drift hit(s) in {} files".format(
    len(hits), len(set(p for p, *_ in hits))
))
for path, lineno, ctx, bad, chars in hits:
    flag = []
    if bad: flag.append("KNOWN_BAD=" + ",".join(sorted(set(bad))))
    if chars:
        unknown = [c for c in chars if c not in ALLOWED_HANJA]
        if unknown: flag.append("UNKNOWN_CJK=" + ",".join(sorted(set(unknown))))
    print(f"  {path}:{lineno}  {' '.join(flag)}")
    print(f"      ...{ctx}...")
print()
print("If the hit is a real defect: rewrite the Korean copy using Hangul.")
print("If the hit is a known-valid Hanja (境 in 호주境内, etc), add to ALLOWED_HANJA.")
sys.exit(1)
PY

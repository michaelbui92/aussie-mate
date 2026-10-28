// Sentence and paragraph shaping, shared by the client reading components and by the server pages
// that render long body copy.
//
// The repo carries four languages inline and the Korean must not be re-authored, so nothing here
// writes or rephrases text: it only decides where one sentence ends and the next begins, and how many
// sentences a paragraph holds. Boundaries are language-aware - CJK ends on full-width punctuation,
// English and Korean on . ! ? with decimals and abbreviations protected, because "$5.60" is not a
// sentence and "e.g." is not the end of one.

export type ShapeLang = "en" | "ko" | "ja" | "zh";

const ABBREVIATIONS = ["e.g.", "i.e.", "etc.", "vs.", "Mr.", "Mrs.", "Dr.", "St.", "approx."];

export function splitSentences(text: string, lang: ShapeLang): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];

  if (lang === "ja" || lang === "zh") {
    const parts = trimmed.match(/[^。！？!?]+[。！？!?]+|[^。！？!?]+$/g);
    return (parts ?? [trimmed]).map((s) => s.trim()).filter(Boolean);
  }

  // Latin and Korean. The NUL is a placeholder so the decimal guard survives the split.
  const guarded = trimmed.replace(/(\d)\.(\d)/g, "$1\u0000$2");
  const parts = guarded.match(/[^.!?]+[.!?]+["')\]]?\s*|[^.!?]+$/g);
  return (parts ?? [guarded])
    .map((s) => s.replace(/\u0000/g, ".").trim())
    .filter(Boolean)
    .filter((s) => !ABBREVIATIONS.includes(s.toLowerCase()));
}

/** Words for spaced languages, characters for CJK - the two need different thresholds. */
export function bulk(s: string, lang: ShapeLang): number {
  return lang === "ja" || lang === "zh" ? s.length : s.split(/\s+/).filter(Boolean).length;
}

/**
 * Group sentences into paragraphs of roughly `limit` units, never leaving a trailing fragment of a
 * few words alone.
 */
export function groupParagraphs(text: string, lang: ShapeLang, limit?: number): string[] {
  const sentences = splitSentences(text, lang);
  if (sentences.length < 2) return sentences.length ? [sentences[0]] : [];

  const target = limit ?? (lang === "ja" || lang === "zh" ? 45 : 26);
  const chunks: string[] = [];
  let current = "";
  for (const s of sentences) {
    current = current ? `${current} ${s}` : s;
    if (bulk(current, lang) >= target) {
      chunks.push(current);
      current = "";
    }
  }
  if (current) {
    if (chunks.length && bulk(current, lang) < 12) chunks[chunks.length - 1] += ` ${current}`;
    else chunks.push(current);
  }
  return chunks;
}

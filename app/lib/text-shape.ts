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

  const protectedDots = new Set<number>();
  const abbreviationPattern = new RegExp(`\\b(?:${ABBREVIATIONS.map((s) => s.replace(/\./g, "\\.")).join("|")})`, "gi");
  for (const match of trimmed.matchAll(abbreviationPattern)) {
    for (let i = 0; i < match[0].length; i++) {
      if (match[0][i] !== ".") continue;
      // "etc." can also end a sentence; a following capital is a useful
      // signal, though this is inherently ambiguous without full language parsing.
      const sentenceFinalEtc = match[0].toLowerCase() === "etc." && i === match[0].length - 1 &&
        /^["')\]\u2019\u201d]*\s+[A-Z]/.test(trimmed.slice(match.index + i + 1));
      if (!sentenceFinalEtc) protectedDots.add(match.index + i);
    }
  }

  // A question mark inside a URL starts or continues a query, not a sentence.
  // A trailing question mark remains a sentence boundary.
  const protectedQuestions = new Set<number>();
  const urlPattern = /\b(?:https?:\/\/|www\.|(?:[a-z0-9-]+\.)+[a-z]{2,}(?=[:/?#]))[^\s<>"']*/gi;
  for (const match of trimmed.matchAll(urlPattern)) {
    for (let i = 0; i < match[0].length - 1; i++) {
      if (match[0][i] === "?" && /[a-z0-9%_~/#&=+-]/i.test(match[0][i + 1])) {
        protectedQuestions.add(match.index + i);
      }
    }
  }

  const parts: string[] = [];
  let start = 0;
  for (let i = 0; i < trimmed.length; i++) {
    const char = trimmed[i];
    if (!(lang === "ja" || lang === "zh" ? ".!?。！？" : ".!?").includes(char)) continue;
    // A dot followed by an ASCII letter or digit is internal to a token (domain,
    // email, decimal, etc.), not a sentence boundary.
    if (char === "." && (protectedDots.has(i) || /[A-Za-z0-9]/.test(trimmed[i + 1] ?? ""))) continue;
    if (char === "?" && protectedQuestions.has(i)) continue;
    while (i + 1 < trimmed.length && /[.!?。！？"')\]\u2019\u201d\u300d\u300f\u3011\uff09]/.test(trimmed[i + 1])) i++;
    parts.push(trimmed.slice(start, i + 1).trim());
    start = i + 1;
  }
  const rest = trimmed.slice(start).trim();
  if (rest) parts.push(rest);
  return parts.filter(Boolean);
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
  let offset = 0;
  let chunkSeparator = "";
  for (const s of sentences) {
    const position = text.indexOf(s, offset);
    const separator = text.slice(offset, position);
    offset = position + s.length;
    if (current) current += separator + s;
    else {
      current = s;
      chunkSeparator = separator;
    }
    if (bulk(current, lang) >= target) {
      chunks.push(current);
      current = "";
    }
  }
  if (current) {
    if (chunks.length && bulk(current, lang) < 12) chunks[chunks.length - 1] += chunkSeparator + current;
    else chunks.push(current);
  }
  return chunks;
}

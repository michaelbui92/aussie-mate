// Server-safe locale helpers.
//
// Deliberately NOT in LangBlocks.tsx: that module is "use client", so every export
// is a client reference and a server component may only render it, never call it.
// Calling pickLocale() from a server component threw
// "Attempted to call pickLocale() from the server but pickLocale is on the client",
// which took out every content page. Pure functions belong here, where both server
// and client modules can import them.

export type Lang = "en" | "ko" | "ja" | "zh";

/** A data object carrying one field per language. */
export type Localized = { en: string; ko?: string; ja?: string; zh?: string };

/** Pick the field for the active language, falling back to English.
 *
 *  A missing translation renders the English field rather than an empty string, so
 *  ja/zh can be adopted before every row has one. */
export function pickLocale(lang: Lang, fields: Localized): string {
  return fields[lang] ?? fields.en;
}

/** Drop a trailing bracketed gloss from a curated label.
 *
 *  Some labels carry a Korean gloss in brackets ("Medicare (메디케어)"). It helps a
 *  Korean reader and is noise — a foreign script — on every other locale, so the
 *  Korean page keeps it and the rest drop it. Server-safe: used inside <En>/<Ja>/
 *  <Zh> blocks, which resolve the language on the client.
 *
 *  Labels are typed as ReactNode in places, so anything that is not a plain string
 *  passes through untouched. */
export function stripGloss<T>(label: T): T | string {
  if (typeof label !== "string") return label;
  return label.replace(/\s*\([^()]*\)\s*$/, "").trim();
}

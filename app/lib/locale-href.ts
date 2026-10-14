// Locale-aware internal links, in one place.
//
// The site serves four languages from ONE set of routes: English is unprefixed at
// "/travel" and Korean, Japanese and Chinese carry a path prefix ("/ko/travel").
// proxy.ts rewrites inbound "/ko/travel" to "/travel" and sets x-am-locale, so the
// page components render the locale -- but the anchors they emit are written as the
// unprefixed path, which meant every link on a /ja page dropped the visitor (and the
// crawler) back into English: losing the language, the URL and the canonical in one
// click, and leaving the /ja, /ko and /zh trees reachable only from sitemap.xml.
//
// Every internal href now goes through localeHref(lang, path). Server-safe and pure:
// server components pass the locale they read from x-am-locale, client components
// pass the one from useLang(), and there is no second copy of the rule to drift.

import type { Lang } from "./locale";

/** Languages that carry a URL prefix. English is the default and is never prefixed. */
export const PREFIXED_LOCALES: readonly Lang[] = ["ko", "zh", "ja"];

const PREFIX_RE = /^\/(ko|zh|ja)(?=\/|$)/;

/**
 * Prefix an internal path with its locale, leaving everything that is not a
 * site-internal path untouched.
 *
 *   localeHref("ja", "/transport")  -> "/ja/transport"
 *   localeHref("ja", "/")           -> "/ja"
 *   localeHref("en", "/transport")  -> "/transport"      (English is unprefixed)
 *   localeHref("ja", "/ja/transport") -> "/ja/transport" (never double-prefixed)
 *   localeHref("ja", "https://x.com") -> unchanged
 *   localeHref("ja", "#section")    -> unchanged
 *   localeHref("ja", "?q=x")        -> unchanged
 *   localeHref("ja", "mailto:a@b")  -> unchanged
 */
export function localeHref(lang: Lang, path: string): string {
  if (!path) return path;
  // Absolute URLs and non-http schemes: http(s), mailto:, tel:, and protocol-relative.
  if (/^[a-z][a-z0-9+.-]*:/i.test(path)) return path;
  if (path.startsWith("//")) return path;
  // Same-page anchors and query-only hrefs are not paths to prefix.
  if (path.startsWith("#") || path.startsWith("?")) return path;

  // Normalise a bare "about" to "/about" so a caller cannot produce "/jaabout".
  const normalised = path.startsWith("/") ? path : `/${path}`;

  // Already carrying a locale prefix (this one or another): leave it exactly as it
  // is. Idempotent, and never "/ja/ko/x".
  if (PREFIX_RE.test(normalised)) return normalised;

  if (lang === "en") return normalised;
  if (normalised === "/") return `/${lang}`;
  return `/${lang}${normalised}`;
}

/**
 * Strip a locale prefix from a PUBLIC path ("/ja/transport" -> "/transport").
 * The counterpart of localeHref: usePathname() and the URL in the address bar are
 * prefixed, while route maps (breadcrumb labels, nav hrefs, sitemap entries) are
 * keyed on the unprefixed path. "/ja" strips to "/" -- the homepage, not "".
 */
export function stripLocale(path: string): string {
  const bare = path.replace(PREFIX_RE, "");
  return bare === "" ? "/" : bare;
}

/** The locale a public path carries, or null when it carries none (English). */
export function localeOf(path: string): Lang | null {
  const m = path.match(PREFIX_RE);
  return (m?.[1] as Lang) ?? null;
}

// app/lib/seo.ts — shared SEO helpers. Import seoFor in every page's
// `metadata` export to get canonical URLs + hreflang + OG image + Twitter card
// in one line:
//
//   export const metadata = {
//     ...seoFor("/visa"),
//     title: "Australian Visa Guide",
//     description: "..."
//   };
//
// Why a helper:
//  - Next.js needs consistent canonical URLs so Google doesn't split
//    ranking power across the old vercel.app host and the new domain.
//  - Bilingual KR/EN pages MUST emit `hreflang` or Google will pick the
//    wrong language for each user (and lose ranking for the other).
//  - One OG image route, one canonical pattern, one place to update copy.

import type { Metadata } from "next";
import { SITE_URL, SITE_AUTHOR } from "./site";

/**
 * Person/Organization schema for the site's named author.
 * Surface on every page so search engines can attribute content to a real
 * human + organisation (E-E-A-T signal). Used by the `author` field of
 * articleLdJson and by the layout-level metadata block.
 */
/** The locales the site serves, and the tags each maps to. */
export type Locale = "en" | "ko" | "ja" | "zh";

/** Open Graph locale tags. Australia for English, the standard region for the others. */
export const OG_LOCALE: Record<Locale, string> = {
  en: "en_AU",
  ko: "ko_KR",
  ja: "ja_JP",
  zh: "zh_CN",
};

/** hreflang values. Simplified Chinese must be zh-Hans; a bare "zh" leaves the script unresolved. */
export const HREFLANG: Record<Locale, string> = {
  en: "en",
  ko: "ko",
  ja: "ja",
  zh: "zh-Hans",
};

/** The URL prefix a locale's pages live under. */
export function localePrefix(locale: Locale): string {
  return locale === "en" ? "" : `/${locale}`;
}

export const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_AUTHOR.name,
  url: SITE_AUTHOR.url,
  jobTitle: SITE_AUTHOR.role,
  knowsAbout: [
    "Australian visas",
    "Multilingual community support in NSW",
    "Sydney daily life",
    "Public transport in NSW",
    "Tax and superannuation in Australia",
  ],
  worksFor: {
    "@type": "Organization",
    name: "AussieGuides",
    url: SITE_URL,
  },
} as const;

export const publisherSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AussieGuides",
  url: SITE_URL,
  founder: {
    "@type": "Person",
    name: SITE_AUTHOR.name,
    url: SITE_AUTHOR.url,
  },
  inLanguage: ["en", "ko", "ja", "zh-Hans"],
  description:
    "Australian-life guide in four languages (English, \uD55C\uAD6D\uC5B4, \u65E5\u672C\u8A9E, \u7B80\u4F53\u4E2D\u6587), written by a single named editor.",
} as const;

/**
 * Merge canonical + hreflang into an existing metadata object.
 * Used as a wrapper when a page wants explicit control over the path
 * (vs spreading seoFor which embeds both).
 *
 *   export const metadata: Metadata = withSeo(
 *     { title: "...", description: "..." },
 *     "/path"
 *   );
 */
/**
 * Absolute URL for a path, with the join collapsed.
 *
 * Every caller passes a leading slash even though this module's own docs say not to, so building
 * `${SITE_URL}/${path}` produced `https://youraussieguides.com//destinations` and the page then
 * canonicalised to a URL that does not exist. Normalising here rather than at 26 call sites means the
 * next caller cannot reintroduce it.
 *
 * The scheme's `//` is preserved on purpose: a blanket `replace(/\/+/g, "/")` would turn `https://`
 * into `https:/` and break every canonical on the site.
 */
function absoluteUrl(path?: string): string {
  const trimmed = (path ?? "").trim();
  if (!trimmed) return SITE_URL;
  const joined = `${SITE_URL}/${trimmed}`;
  const scheme = joined.indexOf("://") + 3;
  return joined.slice(0, scheme) + joined.slice(scheme).replace(/\/{2,}/g, "/").replace(/\/+$/, "");
}

/**
 * Strip a trailing brand from a title, because the layout template appends one.
 *
 * `app/layout.tsx` sets `template: "%s · AussieGuides"` and 26 page titles already end in
 * `| AussieGuides`, so the rendered title read "… | AussieGuides · AussieGuides" and ran past 60
 * characters. Only the brand is removed — every keyword the CTR rewrite added is untouched.
 */
export function pageTitle(title: string): string {
  return title
    .replace(/(?:\s*[·|\u2013\u2014-]\s*AussieGuides)+\s*$/i, "")
    .trim();
}

// ── length discipline ────────────────────────────────────────────────────────
// A search result shows roughly 60 characters of title and 155 of description; past
// that it is cut mid-sentence and reads as noise. Both limits are enforced here
// rather than at 49 call sites, so a page cannot be authored past them by accident.
//
// The brand is added to a title only when it fits, and dropped rather than allowed to
// push the descriptive part over the limit: the keywords are what earn the click, and
// a title that ends in an ellipsis loses them anyway.
export const TITLE_MAX = 60;
export const DESC_MAX = 155;
const BRAND = "AussieGuides";

/** Cut text to `max` characters at a boundary a person would have chosen. */
export function clip(text: string, max: number): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const window = t.slice(0, max);
  // Prefer a sentence end, so the result reads as a whole thought...
  let cut = -1;
  for (const ch of [".", "!", "?", "。"]) cut = Math.max(cut, window.lastIndexOf(ch));
  if (cut >= 40) return window.slice(0, cut + 1).trim();
  // ...then a word boundary, with any trailing punctuation removed.
  const space = window.lastIndexOf(" ");
  return (space > 0 ? window.slice(0, space) : window).replace(/[\s,;:—–-]+$/, "").trim();
}

/** The title as a result should show it: descriptive first, brand only if it fits. */
export function fitTitle(title: string): string {
  const base = pageTitle(title);
  // A title that already names the brand keeps it exactly once. The Chinese and Korean
  // homepages lead with it, and appending the suffix produced
  // "AussieGuides — … · AussieGuides" in a search result.
  if (base.includes(BRAND)) return clip(base, TITLE_MAX);
  const withBrand = `${base} · ${BRAND}`;
  return withBrand.length <= TITLE_MAX ? withBrand : clip(base, TITLE_MAX);
}

/** A description that will not be truncated mid-sentence in a result. */
export function fitDescription(text: string): string {
  return clip(text, DESC_MAX);
}

export function withSeo<T extends Metadata>(base: T, path: string): Metadata {
  const url = absoluteUrl(path);
  void url;
  // `alternates` is deliberately NOT set here: a static metadata export cannot know whether it is
  // serving /destinations or /ko/destinations, and three hreflang tags pointing at one URL -- which is
  // what this used to emit -- express nothing. The root layout's generateMetadata supplies them per
  // request. Next merges per FIELD, so leaving them out here is what lets that survive.
  //
  // `title` is emitted as an absolute object: the root layout's "%s · AussieGuides" template would
  // otherwise append the brand on top of a title that already carries it, and the length cap has to
  // see the final string to know whether the brand fits.
  const title =
    typeof base.title === "string"
      ? { absolute: fitTitle(base.title) }
      : base.title;
  const description =
    typeof base.description === "string" ? fitDescription(base.description) : base.description;
  return { ...base, ...(title ? { title } : {}), ...(description ? { description } : {}) };
}

/**
 * Build the standard SEO metadata fields for a page.
 *
 * @param path  Path WITHOUT leading slash. Empty string = homepage.
 *              E.g. "visa" or "visa/417".
 */
export function seoFor(
  path: string,
  locale: Locale = "en"
): Pick<Metadata, "openGraph" | "twitter"> {
  // The path carries no locale prefix, so it has to be added for the social URL: without it every
  // translated page advertises its English twin.
  const url = absoluteUrl(`${localePrefix(locale)}/${path}`.replace(/\/+$/, ""));


  return {
    openGraph: {
      type: "website",
      url,
      siteName: "AussieGuides",
      locale: OG_LOCALE[locale],
      // Per-page title/description are filled in by the page's own metadata.
      // We provide a fallback image here so social previews always work.
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "AussieGuides \u2014 practical guides to living and travelling in Australia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD builders. Render via <script type="application/ld+json">
// inside the page component, e.g.:
//
//   <script type="application/ld+json"
//     dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLdJson(...)) }}
//   />
// ---------------------------------------------------------------------------

/** FAQPage schema — Q&A rich results in Google search.
 * `ko` is optional because some callers (visa pages, tourist EN-only entries)
 * only carry English. The function only serialises `en` — Korean stays in
 * the visible Kaq block, not the JSON-LD payload. */
export function faqLdJson(
  faqs: ReadonlyArray<{ q: { en: string; ko?: string; ja?: string; zh?: string }; a: { en: string; ko?: string; ja?: string; zh?: string } }>,
  pagePath: string,
  locale: Locale = "en"
) {
  const url = pagePath
    ? absoluteUrl(`${localePrefix(locale)}/${pagePath}`.replace(/\/+$/, ""))
    : absoluteUrl(localePrefix(locale));
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    inLanguage: [HREFLANG[locale]],
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q[locale] ?? f.q.en,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a[locale] ?? f.a.en,
        inLanguage: HREFLANG[locale],
      },
    })),
  };
}

/** BreadcrumbList schema — shows a path under the page title in Google. */
export function breadcrumbLdJson(
  crumbs: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** Article schema for editorial / evergreen content pages. */
export function articleLdJson(opts: {
  path: string;
  headline: string;
  description: string;
  imagePath?: string;
  datePublished?: string;
  dateModified?: string;
  locale?: Locale;
}) {
  const url = absoluteUrl(`${localePrefix(opts.locale ?? "en")}/${opts.path}`.replace(/\/+$/, ""));
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": url,
    url,
    headline: opts.headline,
    description: opts.description,
    inLanguage: [HREFLANG[opts.locale ?? "en"]],
    image: `${SITE_URL}${opts.imagePath ?? "/opengraph-image"}`,
    datePublished: opts.datePublished ?? "2026-01-01",
    dateModified: opts.dateModified ?? new Date().toISOString().slice(0, 10),
    // Named-author attribution: every Article block points back at the
    // same Person schema, so Google can attribute content to a real human
    // rather than treating each page as anonymous text. E-E-A-T signal.
    author: { ...authorSchema, "@id": `${SITE_AUTHOR.url}#author` },
    publisher: {
      ...publisherSchema,
      "@id": `${SITE_URL}#publisher`,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

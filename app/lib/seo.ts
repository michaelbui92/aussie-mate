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
  inLanguage: ["en", "ko"],
  description:
    "Bilingual (English / 한국어) Australian-life guide written by a single named editor.",
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

export function withSeo<T extends Metadata>(base: T, path: string): T {
  const url = absoluteUrl(path);
  const title = typeof base.title === "string" ? pageTitle(base.title) : base.title;
  return {
    ...base,
    ...(typeof base.title === "string" ? { title } : {}),
    alternates: {
      ...(base.alternates ?? {}),
      canonical: url,
      languages: {
        en: url,
        ko: url,
        "x-default": url,
      },
    },
  };
}

/**
 * Build the standard SEO metadata fields for a page.
 *
 * @param path  Path WITHOUT leading slash. Empty string = homepage.
 *              E.g. "visa" or "visa/417".
 */
export function seoFor(path: string): Pick<
  Metadata,
  "alternates" | "openGraph" | "twitter"
> {
  const url = absoluteUrl(path);

  // English and Korean currently share one URL — the page renders both
  // languages via the En/Ko blocks, and the user's chosen language is
  // stored client-side. We tell Google about both via hreflang so it
  // knows the same URL serves both locales.
  const languages: Record<string, string> = {
    en: url,
    ko: url,
    "x-default": url,
  };

  return {
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      url,
      siteName: "AussieGuides",
      locale: "en_AU",
      // Per-page title/description are filled in by the page's own metadata.
      // We provide a fallback image here so social previews always work.
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "AussieGuides — 호주 생활 가이드 (한국어 / English)",
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
  faqs: ReadonlyArray<{ q: { en: string; ko?: string }; a: { en: string; ko?: string } }>,
  pagePath: string
) {
  const url = pagePath
    ? absoluteUrl(pagePath)
  : SITE_URL;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    inLanguage: ["en", "ko"],
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q.en,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a.en,
        inLanguage: "en",
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
}) {
  const url = absoluteUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": url,
    url,
    headline: opts.headline,
    description: opts.description,
    inLanguage: ["en", "ko"],
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

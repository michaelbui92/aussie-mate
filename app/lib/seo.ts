// app/lib/seo.ts — shared SEO helpers. Import seoFor in every page's
// `metadata` export to get canonical URLs + hreflang + OG image + Twitter card
// in one line:
//
//   export const metadata = {
//     ...seoFor("/visa"),
//     title: "Australian Visa Guide for Koreans",
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
    "Korean-Australian community",
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
export function withSeo<T extends Metadata>(base: T, path: string): T {
  const url = path
    ? `${SITE_URL}/${path}`.replace(/\/+$/, "")
    : SITE_URL;
  return {
    ...base,
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
  const url = path
    ? `${SITE_URL}/${path}`.replace(/\/+$/, "")
    : SITE_URL;

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

/** FAQPage schema — Q&A rich results in Google search. */
export function faqLdJson(
  faqs: Array<{ q: { en: string }; a: { en: string } }>,
  pagePath: string
) {
  const url = pagePath
    ? `${SITE_URL}/${pagePath}`.replace(/\/+$/, "")
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
      item: c.path
        ? `${SITE_URL}/${c.path}`.replace(/\/+$/, "")
        : SITE_URL,
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
  const url = opts.path
    ? `${SITE_URL}/${opts.path}`.replace(/\/+$/, "")
    : SITE_URL;
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

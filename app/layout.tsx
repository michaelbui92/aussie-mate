import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { headers } from "next/headers";
import { LangProvider, type Lang } from "@/components/LangBlocks";
import { SearchProvider } from "@/components/SearchModal";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { geistSans, fraunces } from "@/lib/fonts";
import { SITE_URL, SITE_AUTHOR } from "@/lib/site";
import { authorSchema, publisherSchema } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";
import PageTransition from "@/components/PageTransition";
import { SearchModal } from "@/components/SearchModal";
import ScrollAnimations from "@/components/ScrollAnimations";
import Breadcrumbs from "@/components/Breadcrumbs";
import BackToTop from "@/components/BackToTop";

// Site-wide metadata. Deliberately NOT exported as `metadata`: Next refuses to have both `metadata`
// and `generateMetadata` in one file, and the per-request one below is the one that can state a
// canonical and hreflang for the URL actually being served. Everything here (title template,
// metadataBase, OG, Twitter, icons, verification) is folded in and still applies to every page.
const staticMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Title flipped to English-first per the 2026-06-28 audience review:
  // Vercel analytics showed significant American traffic and the prior
  // Korean-led title was a soft signal to Google that the page was for
  // Korean readers only. English-first here, with 한국어 as the alt.
  title: {
    default: "AussieGuides — Travel & Living Guide for Sydney and NSW (English / 한국어)",
    template: "%s · AussieGuides",
  },
  description:
    "A travel and living guide for anyone visiting, studying, working, or starting fresh in Australia — international students, working-holiday makers, expats, English-first travellers, Australians returning home. Opal cards, TFN, super, apartments, Aussie slang, and destinations around Sydney and NSW.",
  keywords: [
    "Australia travel guide",
    "Sydney travel guide",
    "Sydney for international visitors",
    "moving to Sydney",
    "Australia for beginners",
    "Aussie English slang",
    "Australian slang explained",
    "Sydney destinations",
    "Blue Mountains day trip",
    "Byron Bay guide",
    "Australian visa guide",
    "Australian working holiday",
    "Sydney living costs",
    "Opal card Sydney",
    "TFN Australia",
    "Sydney guide for Koreans",
    "호주 여행",
    "시드니 가이드",
    "호주 유학",
    "호주 워홀",
    "호주 영어",
    "호주 슬랭",
    "오팔 카드",
    "호주 세금 신고",
    "TFN 신청",
    "호주 퇴직연금",
    "Superannuation",
    "시드니 부동산",
    "PTE IELTS",
    "Australia guide Korean",
    "Sydney living for newcomers",
  ],
  authors: [{ name: SITE_AUTHOR.name, url: SITE_AUTHOR.url }],
  creator: SITE_AUTHOR.name,
  publisher: SITE_AUTHOR.name,
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "AussieGuides",
    title: "AussieGuides — Travel & Living Guide for Sydney and NSW (English / 한국어)",
    description:
      "A guide to Australian daily life — for anyone new here, written by an Australian-born Sydneysider.",
    // images is auto-populated by app/opengraph-image.tsx (1200x630 PNG
    // generated at build time). No need to set it explicitly.
  },
  twitter: {
    card: "summary_large_image",
    title: "AussieGuides — Travel & Living Guide for Sydney and NSW",
    description: "A guide to Australian daily life.",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Canonical URL + hreflang are set below, per request, in generateMetadata
  // (see lib/seo.ts). Bilingual site with content in both languages on
  // the same URL — Google needs explicit signals to serve the right
  // version to the right audience and to consolidate duplicate-URL signals.
  // Favicon handled by app/icon.tsx (renders 🇦🇺 via Next/og ImageResponse).
};

// Viewport + theme color — required for proper mobile rendering.
// Next.js 13+ uses a separate `viewport` export (typed) instead of a
// raw <meta name="viewport"> tag. Without this, mobile browsers fall
// back to 980px viewport then scale the page down, making text tiny
// even on a responsive layout.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover", // allows safe-area-inset on notched devices
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#0f0e0c" }, // darkbg
  ],
};

// Blocking script: apply stored theme + language before first paint
// to prevent flash of light theme / English content (issue #5).
//
// Language auto-detect (2026-06-28 review): a first-time visitor with no
// localStorage entry is shown Korean ONLY if their browser reports ko as
// the primary language. Anyone else (EN-first visitors, Americans,
// Europeans, expats) lands on English immediately. The lang blocks then
// render that language without a flash on hydration.
const themeInitScript = `
(function() {
  try {
    var t = localStorage.getItem('am-theme');
    var d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (d) document.documentElement.classList.add('dark');
    var l = localStorage.getItem('aussiemate-lang');
    if (!l) {
      // Check both navigator.language (string) and navigator.languages
      // (priority list) so a bilingual browser with ko anywhere in the
      // list picks Korean, not English.
      var langs = (navigator.languages && navigator.languages.length)
        ? navigator.languages
        : [navigator.language];
      var detected = 'en';
      for (var i = 0; i < langs.length; i++) {
        if (langs[i] && langs[i].indexOf('ko') === 0) { detected = 'ko'; break; }
        if (langs[i] && langs[i].indexOf('zh') === 0) { detected = 'zh'; break; }
        if (langs[i] && langs[i].indexOf('ja') === 0) { detected = 'ja'; break; }
      }
      l = detected;
      localStorage.setItem('aussiemate-lang', l);
    }
    if (l !== 'en') document.documentElement.lang = l;
  } catch (e) {}
})();
`;

// Google AdSense — Auto Ads. Google picks placements; we just load the script.
// Publisher ID is hardcoded from the user's AdSense account (ca-pub-7794121496618493).
//
// To disable AdSense, leave the env var UNSET in Vercel. Setting it to an empty
// string does NOT disable — we previously used `|| HARDCODED`, which falls
// through on falsy values, and `""` is falsy, so empty env vars silently kept
// ads live. The first condition below explicitly checks for `_IS_SET` by
// looking for the env var in process.env rather than reading its value: any
// presence (including empty string) means "user wants to control this
// manually," and absence means "fall back to the hardcoded AdSense ID."
const HAS_ADSENSE_ENV = Object.prototype.hasOwnProperty.call(
  process.env,
  "NEXT_PUBLIC_ADSENSE_ID"
);
function resolveAdsenseId(): string | undefined {
  if (!HAS_ADSENSE_ENV) return "ca-pub-7794121496618493"; // default ON
  const env = process.env.NEXT_PUBLIC_ADSENSE_ID;
  return env && env.length > 0 ? env : undefined; // env-present + non-empty = custom; env-present + empty = OFF
}
const ADSENSE_PUBLISHER_ID = resolveAdsenseId();

// Canonical and hreflang, per request.
//
// These cannot live in the pages: a page's `metadata` export is static, so it cannot know whether it is
// serving /destinations or /ko/destinations, and three hreflang tags pointing at one URL express
// nothing. The middleware supplies the public path and the locale; this turns them into the real thing.
//
// Every page has both languages -- the components carry <En> and <Ko> blocks for every string -- so
// each URL can honestly declare the other, and /ko is reachable for all of them rather than a subset.
export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const locale = h.get("x-am-locale") ?? "en";
  const path = h.get("x-am-path") ?? "/";
  const bare = path === "/" ? "" : path;
  const site = SITE_URL.replace(/\/$/, "");

  return {
    ...staticMetadata,
    alternates: {
      canonical: `${site}${locale === "en" ? "" : `/${locale}`}${bare}`,
      languages: {
        en: `${site}${bare}`,
        ko: `${site}/ko${bare}`,
        "x-default": `${site}${bare}`,
      },
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // The locale comes from the URL, so the SERVER renders the right language -- which is what a crawler
  // that does not run JavaScript sees.
  const locale = (await headers()).get("x-am-locale") ?? "en";
  return (
    <html lang={locale} suppressHydrationWarning className={`${geistSans.variable} ${fraunces.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Preload hero image for instant LCP */}
        <link rel="preload" href="/images/unsplash-1506973035872-a4ec16b8e8d9.jpg" as="image" />
        {/* AdSense Auto Ads — loads when env-on; ungated by truthy check now */}
        {ADSENSE_PUBLISHER_ID ? (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
            crossOrigin="anonymous"
          />
        ) : null}
        {/* JSON-LD: Person (author) + Organization (publisher) + WebSite structured data
            for Google rich results. The Person block gives Google an explicit named
            human it can attribute this content to (E-E-A-T signal). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                authorSchema,
                publisherSchema,
                {
                  "@type": "WebSite",
                  name: "AussieGuides",
                  url: SITE_URL,
                  inLanguage: ["en", "ko"],
                  potentialAction: {
                    "@type": "SearchAction",
                    target: `${SITE_URL}/search?q={search_term_string}`,
                    "query-input": "required name=search_term_string",
                  },
                  publisher: publisherSchema,
                },
              ],
            }),
          }}
        />
        {/* <meta name="author"> — duplicate of the Person schema in plain HTML,
            so even crawlers that don't execute JSON-LD see a human author. */}
        <meta name="author" content={SITE_AUTHOR.name} />
        <link rel="author" href={SITE_AUTHOR.url} />
      </head>
      <body className={`${geistSans.className} bg-stone-50 dark:bg-darkbg text-stone-800 dark:text-stone-200 antialiased`}>
        <ThemeProvider>
          <LangProvider initial={locale as Lang}>
            <SearchProvider>
              <div id="content-root" className="flex flex-col min-h-screen">
                <Nav />
                <main className="flex-1">
                  <Breadcrumbs />
                  <PageTransition>{children}</PageTransition>
                  <SearchModal />
                </main>
                <Footer />
              </div>
              <ScrollAnimations />
              <BackToTop />
            </SearchProvider>
          </LangProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
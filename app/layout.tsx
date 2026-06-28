import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LangProvider } from "@/components/LangBlocks";
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

export const metadata: Metadata = {
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
    "A bilingual travel and living guide for anyone visiting, studying, working, or starting fresh in Australia — Korean students, working-holiday makers, expats, and English-first travellers. Opal cards, TFN, super, apartments, Aussie slang, and destinations around Sydney and NSW in English and 한국어.",
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
    "Sydney for Koreans",
  ],
  authors: [{ name: SITE_AUTHOR.name, url: SITE_AUTHOR.url }],
  creator: SITE_AUTHOR.name,
  publisher: SITE_AUTHOR.name,
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "AussieGuides",
    title: "AussieGuides — 호주 생활 가이드 (한국어/English)",
    description:
      "한국인을 위한 호주 생활 가이드 — 은행, 세금, 직장, 부동산, 호주 영어 슬랭까지.",
    // images is auto-populated by app/opengraph-image.tsx (1200x630 PNG
    // generated at build time). No need to set it explicitly.
  },
  twitter: {
    card: "summary_large_image",
    title: "AussieGuides — 호주 생활 가이드",
    description: "한국인을 위한 호주 생활 가이드. 한국어/English.",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Per-page canonical URL + hreflang EN/KO alternates are set per page
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
      }
      l = detected;
      localStorage.setItem('aussiemate-lang', l);
    }
    if (l === 'ko') document.documentElement.lang = 'ko';
  } catch (e) {}
})();
`;

// Google AdSense — Auto Ads. Google picks placements; we just load the script.
// Publisher ID is hardcoded from the user's AdSense account (ca-pub-7794121496618493).
// To disable AdSense, set NEXT_PUBLIC_ADSENSE_ID="" in Vercel env vars — the
// env var wins over the hardcoded value.
const HARDCODED_ADSENSE_ID = "ca-pub-7794121496618493";
const ADSENSE_PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || HARDCODED_ADSENSE_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${fraunces.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* AdSense Auto Ads — only loads when NEXT_PUBLIC_ADSENSE_ID is set */}
        {ADSENSE_PUBLISHER_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
            crossOrigin="anonymous"
          />
        )}
        {/* JSON-LD: Person (author) + Organization (publisher) + WebSite structured data
            for Google rich results. The Person block gives Google an explicit named
            human it can attribute this content to (E-E-A-T signal). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...authorSchema,
              "@graph": [
                authorSchema,
                publisherSchema,
                {
                  "@context": "https://schema.org",
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
          <LangProvider>
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
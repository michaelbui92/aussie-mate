import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LangProvider } from "@/components/LangBlocks";
import { SearchProvider } from "@/components/SearchModal";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { geistSans, fraunces } from "@/lib/fonts";
import PageTransition from "@/components/PageTransition";
import { SearchModal } from "@/components/SearchModal";
import ScrollAnimations from "@/components/ScrollAnimations";
import Breadcrumbs from "@/components/Breadcrumbs";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "AussieMate — Helpful tips for Sydney",
  description: "A friendly guide to Aussie English, renting, working, studying, and settling in Australia.",
  // Favicon handled by app/icon.tsx (renders 🇦🇺 via Next/og ImageResponse).
};

// Blocking script: apply stored theme + language before first paint
// to prevent flash of light theme / English content (issue #5)
const themeInitScript = `
(function() {
  try {
    var t = localStorage.getItem('am-theme');
    var d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (d) document.documentElement.classList.add('dark');
    var l = localStorage.getItem('aussiemate-lang');
    if (!l && navigator.language && navigator.language.indexOf('ko') === 0) l = 'ko';
    if (l === 'ko') document.documentElement.lang = 'ko';
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${fraunces.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
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
      </body>
    </html>
  );
}

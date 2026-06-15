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
  icons: {
    icon: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23e07830%22%3E%3Cpath%20d%3D%22M7%204c-1%200-2%201-2%203v4c0%202%202%204%205%205l2-2-2-2%204-3c0-3-2-5-5-5z%22/%3E%3Ccircle%20cx%3D%2215%22%20cy%3D%225%22%20r%3D%223%22/%3E%3Cellipse%20cx%3D%2216%22%20cy%3D%2216%22%20rx%3D%224%22%20ry%3D%225%22/%3E%3Cpath%20d%3D%22M14%2014l-2%203M18%2020l-2-3%22/%3E%3C/svg%3E",
  },
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

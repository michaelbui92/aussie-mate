import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LangProvider } from "@/components/LangBlocks";
import { SearchProvider } from "@/components/SearchModal";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { geistSans } from "@/lib/fonts";
import PageTransition from "@/components/PageTransition";
import { SearchModal } from "@/components/SearchModal";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "AussieMate — Your Australian Survival Guide",
  description: "A friendly guide to Aussie English, renting, working, studying, and settling in Australia.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦘</text></svg>",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${geistSans.className} bg-cream dark:bg-darkbg text-eucalypt dark:text-dark-muted transition-colors duration-300`}>
        <ThemeProvider>
          <LangProvider>
            <SearchProvider>
              <div id="content-root" className="flex flex-col min-h-screen">
                <Nav />
                <main className="flex-1">
                  <PageTransition>{children}</PageTransition>
                  <SearchModal />
                </main>
                <Footer />
              </div>
              <ScrollAnimations />
            </SearchProvider>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
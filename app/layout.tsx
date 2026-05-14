import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LangProvider } from "@/components/LangBlocks";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { geistSans } from "@/lib/fonts";
import PageTransition from "@/components/PageTransition";
import { SearchModal } from "@/components/SearchModal";

export const metadata: Metadata = {
  title: "AussieMate — Your Australian Survival Guide",
  description: "A friendly guide to Aussie English, renting, working, studying, and settling in Australia.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦘</text></svg>",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} bg-cream dark:bg-darkbg text-eucalypt dark:text-dark-muted transition-colors duration-300`}>
        <ThemeProvider>
          <LangProvider>
            <Nav />
            <main className="min-h-screen">
              <PageTransition>{children}</PageTransition>
            <SearchModal />
            </main>
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
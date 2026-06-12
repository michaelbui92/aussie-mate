"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLang, En, Ko } from "@/components/LangBlocks";
import { useSearch } from "@/components/SearchModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/aussie-english", label: "Aussie English" },
  { href: "/sport", label: "Sport" },
  { href: "/finance", label: "Finance" },
  { href: "/apartment", label: "Apartment" },
  { href: "/workplace", label: "Workplace" },
  { href: "/study", label: "Study" },
  { href: "/transport", label: "Transport" },
  { href: "/resources", label: "Resources" },
];

const testLinks = [
  { href: "/test-homepage-1", label: "T1: Editorial" },
  { href: "/test-homepage-2", label: "T2: Premium Dark" },
  { href: "/test-homepage-3", label: "T3: Neo-Brutalist" },
  { href: "/test-homepage-4", label: "T4: Bento Grid" },
  { href: "/test-homepage-5", label: "T5: Minimal" },
  { href: "/test-homepage-6", label: "T6: Earthy Editorial" },
  { href: "/test-homepage-7", label: "T7: Sky Coast" },
  { href: "/test-homepage-8", label: "T8: Magazine" },
  { href: "/test-homepage-9", label: "T9: Bold Dark" },
  { href: "/test-homepage-10", label: "T10: Warm Sage" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const { openSearch } = useSearch();

  return (
    <nav className="sticky top-0 z-50 glass-nav border-b border-sand/30 dark:border-dark-border/50">
      <div className="w-full px-4 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sunset to-sunset-light flex items-center justify-center text-base transition-transform group-hover:scale-110 btn-press">
            <span className="text-white">🦘</span>
          </div>
          <span className="font-bold text-sunset text-lg hidden sm:block">AussieMate</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all btn-press ${
                  isActive
                    ? "text-sunset dark:text-sunset active"
                    : "text-eucalypt/70 dark:text-dark-muted/70 hover:text-sunset dark:hover:text-sunset hover:bg-sand dark:hover:bg-dark-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <span className="text-eucalypt/20 dark:text-dark-muted/20 mx-1">|</span>
          {testLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all btn-press ${
                pathname === link.href
                  ? "text-violet-600 dark:text-violet-400 active"
                  : "text-eucalypt/40 dark:text-dark-muted/40 hover:text-violet-500 dark:hover:text-violet-400 hover:bg-sand dark:hover:bg-dark-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={openSearch}
            className="shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-sand/50 dark:bg-dark-surface hover:bg-sunset/20 text-eucalypt/60 dark:text-dark-muted/60 hover:text-sunset transition-all btn-press"
            aria-label="Search"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <En><span className="text-xs font-semibold">Search</span></En>
            <Ko><span className="text-xs font-semibold">검색</span></Ko>
          </button>

          <button
            onClick={() => setLang(lang === "en" ? "ko" : "en")}
            className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-sage/20 text-sage hover:bg-sage/30 transition-colors shrink-0"
            aria-label="Toggle language"
          >
            <span key={lang} className="lang-flip">
              {lang === "en" ? "EN" : "🇰🇷"}
            </span>
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden shrink-0 p-2 rounded-lg bg-sand dark:bg-dark-surface hover:bg-sunset/20 transition-all btn-press"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden glass-nav border-t border-sand/30 dark:border-dark-border/50 animate-scale-in rounded-b-2xl">
          <div className="w-full px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all btn-press ${
                    isActive
                      ? "text-sunset bg-sunset/10"
                      : "text-eucalypt/80 dark:text-dark-muted/80 hover:text-sunset hover:bg-sand dark:hover:bg-dark-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="border-t border-eucalypt/10 dark:border-dark-border/50 my-2" />
            {testLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all btn-press ${
                  pathname === link.href
                    ? "text-violet-600 bg-violet-50"
                    : "text-eucalypt/40 dark:text-dark-muted/40 hover:text-violet-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
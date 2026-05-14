"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/components/LangBlocks";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/aussie-english", label: "Aussie English" },
  { href: "/apartment", label: "Apartment" },
  { href: "/workplace", label: "Workplace" },
  { href: "/study", label: "Study" },
  { href: "/tourist", label: "Tourist" },
  { href: "/resources", label: "Resources" },
  { href: "/other-tools", label: "Other Tools" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLang();

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 dark:bg-darkbg/90 backdrop-blur-md border-b border-sand dark:border-dark-border">
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
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ko" : "en")}
            className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-sage/20 text-sage hover:bg-sage/30 transition-colors shrink-0"
            aria-label="Toggle language"
          >
            {lang === "en" ? "EN" : "🇰🇷"}
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
        <div className="md:hidden bg-cream dark:bg-darkbg border-t border-sand dark:border-dark-border animate-scale-in">
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
          </div>
        </div>
      )}
    </nav>
  );
}
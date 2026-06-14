"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { En, Ko, useLang } from "./LangBlocks";
import { useTheme } from "./ThemeProvider";
import { useSearch } from "@/components/SearchModal";
const FLAG_EMOJI = "🇦🇺";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/aussie-english", label: "Aussie English" },
  { href: "/sport", label: "Sport" },
  { href: "/finance", label: "Finance" },
  { href: "/apartment", label: "Apartment" },
  { href: "/workplace", label: "Workplace" },
  { href: "/transport", label: "Transport" },
  { href: "/weather", label: "Weather" },
  { href: "/destinations", label: "Destinations" },
  { href: "/study", label: "Study" },
  { href: "/tourist", label: "Tourist" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

function NavPill({
  children,
  onClick,
  ariaLabel,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel: string;
  className?: string;
}) {
  return (
    <button type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`h-9 px-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-stone-100 dark:bg-dark-surface text-stone-700 dark:text-stone-200 hover:bg-sunset hover:text-white transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const { lang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const { openSearch } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-darkbg/90 backdrop-blur-md border-b border-stone-200/60 dark:border-dark-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 group"
          aria-label="AussieMate home"
        >
          <div className="w-9 h-9 rounded-full bg-stone-100 dark:bg-dark-surface flex items-center justify-center text-xl ring-1 ring-stone-200/60 dark:ring-dark-border transition-transform group-hover:scale-105">
            {FLAG_EMOJI}
          </div>
          <span className="font-serif text-xl text-stone-900 dark:text-stone-100 group-hover:text-sunset transition-colors hidden sm:inline">
            AussieMate
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 flex-1 min-w-0 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-white bg-sunset"
                    : "text-stone-600 dark:text-stone-300 hover:text-sunset hover:bg-sunset/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="ml-auto flex items-center gap-2 shrink-0">
          <NavPill onClick={openSearch} ariaLabel="Search">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="hidden lg:inline text-xs font-semibold">
              <En>Search</En>
              <Ko>검색</Ko>
            </span>
          </NavPill>

          <NavPill
            onClick={() => {
              const next = lang === "en" ? "ko" : "en";
              if (typeof document !== "undefined") {
                document.documentElement.lang = next;
                try { localStorage.setItem("aussiemate-lang", next); } catch {}
              }
            }}
            ariaLabel="Toggle language"
          >
            <span key={lang} className="text-xs font-bold tracking-wide">
              {lang === "en" ? "EN" : "한국어"}
            </span>
          </NavPill>

          <NavPill
            onClick={toggleTheme}
            ariaLabel={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="!w-9 !px-0"
          >
            <span
              className="w-4 h-4 flex items-center justify-center text-base leading-none"
              aria-hidden="true"
            >
              {theme === "light" ? "☽" : "☀"}
            </span>
          </NavPill>

          {/* Hamburger (mobile only) */}
          <button type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-full bg-stone-100 dark:bg-dark-surface text-stone-700 dark:text-stone-200 hover:bg-sunset hover:text-white transition-colors"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200/60 dark:border-dark-border/60 bg-white dark:bg-darkbg">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                    isActive
                      ? "text-white bg-sunset"
                      : "text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-dark-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

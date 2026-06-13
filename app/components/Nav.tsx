"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLang, En, Ko } from "@/components/LangBlocks";
import { useTheme } from "@/components/ThemeProvider";
import { ICONS } from "@/destinations/icons";
import { useSearch } from "@/components/SearchModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/aussie-english", label: "Aussie English" },
  { href: "/sport", label: "Sport" },
  { href: "/finance", label: "Finance" },
  { href: "/apartment", label: "Apartment" },
  { href: "/workplace", label: "Workplace" },
  { href: "/weather", label: "Weather" },
  { href: "/faq", label: "FAQ" },
  { href: "/transport", label: "Transport" },
  { href: "/resources", label: "Resources" },
];

// Pill-style action button — matches the rest of the editorial system
function NavPill({
  onClick,
  children,
  ariaLabel,
  className = "",
}: {
  onClick: () => void;
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`shrink-0 inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-full text-sm font-medium text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-dark-surface hover:bg-sunset hover:text-white dark:hover:bg-sunset dark:hover:text-white transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const { toggle: toggleTheme, theme } = useTheme();
  const { openSearch } = useSearch();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-darkbg/90 backdrop-blur-md border-b border-stone-200 dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 group"
          aria-label="AussieMate home"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sunset to-sunset-light flex items-center justify-center text-white transition-transform group-hover:scale-105">
            <span
              className="w-5 h-5"
              dangerouslySetInnerHTML={{ __html: ICONS.kangaroo }}
            />
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
            onClick={() => setLang(lang === "en" ? "ko" : "en")}
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
              className="w-4 h-4"
              dangerouslySetInnerHTML={{
                __html: theme === "light" ? ICONS.moon : ICONS.sun,
              }}
            />
          </NavPill>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-dark-surface hover:bg-sunset hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
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

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-darkbg border-t border-stone-200 dark:border-dark-border shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white bg-sunset"
                      : "text-stone-700 dark:text-stone-300 hover:text-sunset hover:bg-sunset/10"
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

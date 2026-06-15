"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { En, Ko, useLang } from "./LangBlocks";
import { useTheme } from "./ThemeProvider";
import { useSearch } from "@/components/SearchModal";
import { ChevronDown } from "@/components/Icons";
const FLAG_EMOJI = "🇦🇺";

type NavGroup = {
  label: string;
  items: { href: string; label: string }[];
};

const navGroups: NavGroup[] = [
  {
    label: "Living",
    items: [
      { href: "/apartment", label: "Apartment" },
      { href: "/finance", label: "Finance" },
      { href: "/transport", label: "Transport" },
      { href: "/weather", label: "Weather" },
      { href: "/study", label: "Study" },
      { href: "/workplace", label: "Workplace" },
    ],
  },
  {
    label: "Explore",
    items: [
      { href: "/destinations", label: "Destinations" },
      { href: "/tourist", label: "Tourist" },
      { href: "/sport", label: "Sport" },
      { href: "/beyond-sydney", label: "Beyond Sydney" },
    ],
  },
  {
    label: "Learn",
    items: [
      { href: "/aussie-english", label: "Aussie English" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    label: "More",
    items: [
      { href: "/resources", label: "Resources" },
      { href: "/other-tools", label: "My Projects" },
      { href: "/about", label: "About AussieMate" },
    ],
  },
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

function isActiveInGroup(pathname: string, items: { href: string }[]) {
  return items.some((it) => pathname === it.href);
}

export default function Nav() {
  const pathname = usePathname();
  const { lang, toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const { openSearch } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on ESC
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/90 dark:bg-darkbg/90 backdrop-blur-md border-b border-stone-200/60 dark:border-dark-border/60"
    >
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

        {/* Desktop nav — Home + grouped dropdowns */}
        <div className="hidden md:flex items-center gap-1 flex-1 min-w-0">
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              pathname === "/"
                ? "text-white bg-sunset"
                : "text-stone-600 dark:text-stone-300 hover:text-sunset hover:bg-sunset/10"
            }`}
          >
            Home
          </Link>

          {navGroups.map((group) => {
            const isOpen = openDropdown === group.label;
            const isActive = isActiveInGroup(pathname, group.items);
            return (
              <div key={group.label} className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(isOpen ? null : group.label)
                  }
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  aria-label={`${group.label} menu`}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors inline-flex items-center gap-1 ${
                    isOpen || isActive
                      ? "text-sunset bg-sunset/10"
                      : "text-stone-600 dark:text-stone-300 hover:text-sunset hover:bg-sunset/10"
                  }`}
                >
                  {group.label}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    role="menu"
                    className="absolute top-full left-0 mt-2 min-w-[180px] bg-white dark:bg-darkbg border border-stone-200/60 dark:border-dark-border rounded-xl shadow-lg py-1.5 z-50"
                  >
                    {group.items.map((item) => {
                      const itemActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          className={`block px-4 py-2 text-sm transition-colors ${
                            itemActive
                              ? "text-white bg-sunset"
                              : "text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-dark-surface"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
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

          <NavPill onClick={toggleLang} ariaLabel="Toggle language">
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

      {/* Mobile menu — grouped */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200/60 dark:border-dark-border/60 bg-white dark:bg-darkbg">
          <nav className="max-w-6xl mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-1.5 rounded-full text-sm font-medium w-fit ${
                pathname === "/"
                  ? "text-white bg-sunset"
                  : "text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-dark-surface"
              }`}
            >
              Home
            </Link>

            {navGroups.map((group) => (
              <div key={group.label} className="space-y-1.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 px-3">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-1 pl-3">
                  {group.items.map((item) => {
                    const itemActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                          itemActive
                            ? "text-white bg-sunset"
                            : "text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-dark-surface"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

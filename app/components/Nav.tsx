"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { En, Ko, useLang } from "./LangBlocks";
import { useTheme } from "./ThemeProvider";
import { useSearch } from "@/components/SearchModal";
import { ChevronDown } from "@/components/Icons";
import { destinations, type TripLength } from "@/destinations/data";

type NavItem = { href: string; label: string };

type NavGroup = {
  label: string;
  /** Flat item list (used by Living/Explore/Learn/More). */
  items?: NavItem[];
  /** Grouped sub-sections (used by Destinations). Mutually exclusive with items. */
  sections?: { heading: string; items: NavItem[] }[];
  /** Optional trailing link rendered after sections, e.g. a "View all" CTA. */
  trailing?: NavItem;
};

// Build the Destinations group from the data file so adding/removing a
// destination auto-updates the nav. Ordering: items keep the order they
// appear in `destinations`, grouped by tripLength.
const TRIP_LENGTH_ORDER: TripLength[] = ["day", "weekend", "longer"];
const TRIP_LENGTH_HEADING: Record<TripLength, string> = {
  day: "Day trips",
  weekend: "Weekends",
  longer: "Multi-day",
  far: "Further afield",
};
const destinationsGroup: NavGroup = {
  label: "Destinations",
  sections: TRIP_LENGTH_ORDER.map((tl) => ({
    heading: TRIP_LENGTH_HEADING[tl],
    items: destinations
      .filter((d) => d.tripLength === tl)
      .map((d) => ({ href: `/destinations/${d.slug}`, label: d.name.en })),
  })).filter((s) => s.items.length > 0),
  trailing: { href: "/destinations", label: "View all destinations" },
};

const navGroups: NavGroup[] = [
  {
    label: "Aussie English",
    items: [
      { href: "/aussie-english", label: "Learn Aussie Slang" },
    ],
  },
  {
    label: "The Journey",
    items: [
      { href: "/journey", label: "All Stages" },
      { href: "/journey/visiting", label: "I'm visiting" },
      { href: "/journey/arrived", label: "I just got here" },
      { href: "/journey/home", label: "I call this home" },
    ],
  },
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
  destinationsGroup,
  {
    label: "Experiences",
    items: [
      { href: "/experiences/beaches", label: "Beaches" },
      { href: "/experiences/wildlife", label: "Wildlife" },
      { href: "/experiences/food", label: "Food & Wine" },
      { href: "/experiences/adventure", label: "Adventure" },
      { href: "/experiences/culture", label: "Culture" },
      { href: "/experiences/road-trips", label: "Road Trips" },
    ],
    trailing: { href: "/experiences", label: "View all experiences" },
  },
  { label: "Learn", items: [
    { href: "/visa", label: "Visa Guide" },
    { href: "/faq", label: "FAQ" },
  ],
},
  {
    label: "More",
    items: [
      { href: "/resources", label: "Resources" },
      { href: "/other-tools", label: "My Projects" },
      { href: "/about", label: "About AussieGuides" },
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
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`h-11 px-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-stone-100 dark:bg-dark-surface text-stone-700 dark:text-stone-200 hover:bg-sunset hover:text-white transition-all duration-200 ease-out active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}

function isActiveInGroup(pathname: string, group: NavGroup) {
  const allItems = [
    ...(group.items ?? []),
    ...(group.sections?.flatMap((s) => s.items) ?? []),
    ...(group.trailing ? [group.trailing] : []),
  ];
  return allItems.some((it) => pathname === it.href);
}

export default function Nav() {
  const pathname = usePathname();
  const { lang, toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const { openSearch } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);
  // Single source of truth for which dropdown is open. null = none.
  // Set by hover or click; cleared by leave-with-grace, ESC, route change, outside click.
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  // Hover-leave grace timer — when the mouse leaves a group button, give the
  // user 120ms to cross the gap into the dropdown panel without it closing.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  }, [cancelClose]);

  const openGroup = useCallback(
    (label: string) => {
      cancelClose();
      setOpenDropdown(label);
    },
    [cancelClose]
  );

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        cancelClose();
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [cancelClose]);

  // Close on ESC
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        cancelClose();
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [cancelClose]);

  // Close on route change
  useEffect(() => {
    cancelClose();
    setOpenDropdown(null);
    setMenuOpen(false);
  }, [pathname, cancelClose]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => cancelClose();
  }, [cancelClose]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/85 dark:bg-darkbg/85 backdrop-blur-md border-b border-stone-200/60 dark:border-dark-border/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
        {/* Logo — clicking goes home; no separate Home pill */}
        <Link
          href="/"
          className="flex items-center shrink-0 group relative"
          aria-label="AussieGuides home"
        >
          <span className="font-serif text-xl text-stone-900 dark:text-stone-100 transition-colors duration-300 group-hover:text-sunset">
            AussieGuides
          </span>
          {/* Animated underline on hover */}
          <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-sunset origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
        </Link>

        {/* Desktop nav — hover-to-open grouped dropdowns */}
        <div
          className="hidden md:flex items-center gap-1 flex-1 min-w-0"
          onMouseLeave={scheduleClose}
        >
          {navGroups.map((group) => {
            const isOpen = openDropdown === group.label;
            const isActive = isActiveInGroup(pathname, group);
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => openGroup(group.label)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(isOpen ? null : group.label)
                  }
                  onFocus={() => openGroup(group.label)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  aria-label={`${group.label} menu`}
                  className={`group relative px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap inline-flex items-center gap-1 transition-colors duration-200 ${
                    isOpen || isActive
                      ? "text-sunset"
                      : "text-stone-600 dark:text-stone-300 hover:text-sunset"
                  }`}
                >
                  {group.label}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-180 text-sunset" : ""
                    }`}
                  />
                  {/* Active/hover underline */}
                  <span
                    className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] bg-sunset rounded-full origin-center transition-transform duration-300 ease-out ${
                      isOpen || isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>

                {/* Dropdown panel — always rendered so entry/exit can animate */}
                <div
                  role="menu"
                  aria-label={`${group.label} submenu`}
                  onMouseEnter={() => openGroup(group.label)}
                  onMouseLeave={scheduleClose}
                  className={`absolute top-full left-0 mt-2 min-w-[200px] bg-white dark:bg-darkbg border border-stone-200/60 dark:border-dark-border rounded-xl shadow-lg py-1.5 z-50 origin-top transition-all duration-200 ease-out ${
                    isOpen
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 -translate-y-1 scale-[0.98] pointer-events-none"
                  }`}
                >
                  {group.sections
                    ? group.sections.map((section) => (
                        <div key={section.heading} className="px-1">
                          <p className="px-3 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500">
                            {section.heading}
                          </p>
                          {section.items.map((item) => {
                            const itemActive = pathname === item.href;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                role="menuitem"
                                tabIndex={isOpen ? 0 : -1}
                                className={`group/item relative block px-4 py-1.5 text-sm transition-all duration-200 ${
                                  itemActive
                                    ? "text-sunset font-medium"
                                    : "text-stone-600 dark:text-stone-300 hover:text-sunset hover:pl-5"
                                }`}
                              >
                                <span
                                  className={`absolute left-1.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-sunset transition-all duration-200 ${
                                    itemActive
                                      ? "opacity-100 scale-100"
                                      : "opacity-0 scale-0 group-hover/item:opacity-100 group-hover/item:scale-100"
                                  }`}
                                />
                                {item.label}
                              </Link>
                            );
                          })}
                        </div>
                      ))
                    : group.items?.map((item, i) => {
                        const itemActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            tabIndex={isOpen ? 0 : -1}
                            style={{ transitionDelay: isOpen ? `${i * 25}ms` : "0ms" }}
                            className={`group/item relative block px-4 py-2 text-sm transition-all duration-200 ${
                              itemActive
                                ? "text-sunset font-medium"
                                : "text-stone-600 dark:text-stone-300 hover:text-sunset hover:pl-5"
                            }`}
                          >
                            <span
                              className={`absolute left-1.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-sunset transition-all duration-200 ${
                                itemActive
                                  ? "opacity-100 scale-100"
                                  : "opacity-0 scale-0 group-hover/item:opacity-100 group-hover/item:scale-100"
                              }`}
                            />
                            {item.label}
                          </Link>
                        );
                      })}
                  {group.trailing && (
                    <>
                      <div className="my-1 mx-3 border-t border-stone-200/60 dark:border-dark-border/60" />
                      <Link
                        href={group.trailing.href}
                        role="menuitem"
                        tabIndex={isOpen ? 0 : -1}
                        onClick={() => {
                          cancelClose();
                          setOpenDropdown(null);
                        }}
                        className="group/item relative block px-4 py-2 text-sm font-medium text-sunset hover:text-sunset-dark transition-all duration-200"
                      >
                        {group.trailing.label} →
                      </Link>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="ml-auto flex items-center gap-2 shrink-0">
          <NavPill onClick={openSearch} ariaLabel="Search">
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:scale-110"
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
              className="w-4 h-4 flex items-center justify-center text-base leading-none transition-transform duration-500 ease-out hover:rotate-45"
              aria-hidden="true"
            >
              {theme === "light" ? "☽" : "☀"}
            </span>
          </NavPill>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden h-11 w-11 inline-flex items-center justify-center rounded-full bg-stone-100 dark:bg-dark-surface text-stone-700 dark:text-stone-200 hover:bg-sunset hover:text-white transition-all duration-200 active:scale-90"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <div className="relative w-4 h-4">
              <span
                className={`absolute left-0 right-0 h-[2px] bg-current rounded-full transition-all duration-300 ease-out ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-[2px] bg-current rounded-full transition-all duration-300 ease-out ${
                  menuOpen ? "opacity-0" : "top-1/2 -translate-y-1/2 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-[2px] bg-current rounded-full transition-all duration-300 ease-out ${
                  menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-1"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu — grouped (no Home link; logo serves that) */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200/60 dark:border-dark-border/60 bg-white dark:bg-darkbg animate-in slide-in-from-top-2 duration-200">
          <nav className="max-w-6xl mx-auto px-4 py-4 space-y-4">
            {navGroups.map((group, gi) => (
              <div
                key={group.label}
                className="space-y-1.5"
                style={{
                  animation: `fadeSlideIn 300ms ease-out ${gi * 60}ms both`,
                }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 px-3">
                  {group.label}
                </p>
                {group.sections
                  ? group.sections.map((section) => (
                      <div key={section.heading} className="space-y-1 pl-3">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500 px-3">
                          {section.heading}
                        </p>
                        <div className="flex flex-wrap gap-1 pl-3">
                          {section.items.map((item) => {
                            const itemActive = pathname === item.href;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className={`min-h-[44px] inline-flex items-center px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 ${
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
                    ))
                  : (
                    <div className="flex flex-wrap gap-1 pl-3">
                      {(group.items ?? []).map((item) => {
                        const itemActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className={`min-h-[44px] inline-flex items-center px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 ${
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
                {group.trailing && (
                  <div className="pl-3 pt-1">
                    <Link
                      href={group.trailing.href}
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-sunset hover:underline"
                    >
                      {group.trailing.label} →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Keyframes for mobile menu stagger animation (Tailwind doesn't define these) */}
      <style jsx global>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}

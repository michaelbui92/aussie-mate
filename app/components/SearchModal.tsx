"use client";
import { createContext, useContext, useState, useEffect, useRef, useCallback, useMemo, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { En, Ko } from "@/components/LangBlocks";
import type { SearchResult } from "@/lib/searchIndex";

// --- Context ---


// --- Context ---
interface SearchContextValue {
  open: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}

const SearchContext = createContext<SearchContextValue>({ open: false, openSearch: () => {}, closeSearch: () => {} });

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openSearch = useCallback(() => setOpen(true), []);
  const closeSearch = useCallback(() => setOpen(false), []);
  return (
    <SearchContext.Provider value={{ open, openSearch, closeSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

// --- Modal ---
export function SearchModal() {
  const { open, openSearch, closeSearch } = useSearch();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when opened + lazy-load the search index on first open
  const [index, setIndex] = useState<SearchResult[] | null>(null);
  useEffect(() => {
    if (open && !index) {
      import("@/lib/searchIndex").then((m) => setIndex(m.searchIndex));
    }
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open, index]);

  // Derived: filter + group in a single pass (issue #3 — was 3 setStates/keystroke)
  const { flat, grouped } = useMemo(() => {
    if (!query.trim() || !index) return { flat: [] as SearchResult[], grouped: {} as Record<string, SearchResult[]> };
    const q = query.toLowerCase();
    const flat = index.filter((item) => {
      return item.matches.en.toLowerCase().includes(q) || item.matches.ko.toLowerCase().includes(q);
    });
    const grouped: Record<string, SearchResult[]> = {};
    for (const r of flat) (grouped[r.page] ??= []).push(r);
    return { flat, grouped };
  }, [query]);

  // Reset active index when results change
  useEffect(() => { setActiveIndex(0); }, [query]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeSearch();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && flat.length > 0) {
      const selected = flat[activeIndex];
      if (selected) {
        closeSearch();
        router.push(selected.href);
      }
    }
  }, [flat, activeIndex, router, closeSearch]);

  // Global keyboard shortcut — Ctrl+K only
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        openSearch();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openSearch]);

  const allResults = Object.entries(grouped);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4"
      style={{ display: open ? "flex" : "none" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-eucalypt/30 dark:bg-black/50 backdrop-blur-sm cursor-pointer backdrop-in"
        onClick={closeSearch}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-white dark:bg-dark-surface border border-sand dark:border-dark-border rounded-2xl shadow-2xl overflow-hidden modal-in"
      >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-sand dark:border-dark-border">
              <svg className="w-5 h-5 text-sunset shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Search AussieMate... try "visa", "bond", "medicare"'
                className="flex-1 text-base text-eucalypt dark:text-dark-muted placeholder:text-eucalypt/30 dark:placeholder:text-dark-muted/30 bg-transparent outline-none"
              />
              <button
                onClick={closeSearch}
                className="text-xs text-eucalypt/40 hover:text-eucalypt dark:text-dark-muted/40 dark:hover:text-dark-muted px-1.5 py-0.5 border border-sand dark:border-dark-border rounded"
              >
                Esc
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {!query && (
                <div className="px-4 py-8 text-center">
                  <p className="text-sm text-eucalypt/40 dark:text-dark-muted/40">
                    <En>Try &quot;visa&quot;, &quot;bond&quot;, &quot;medicare&quot;, &quot;group work&quot;</En>
                    <Ko>&quot;비자&quot;, &quot;보증금&quot;, &quot;메디케어&quot;, &quot;그룹&quot; 검색</Ko>
                  </p>
                </div>
              )}

              {query && flat.length === 0 && (
                <div className="px-4 py-8 text-center">
                  <p className="text-sm text-eucalypt/40 dark:text-dark-muted/40">
                    <En>No results for &quot;{query}&quot;</En>
                    <Ko>&quot;{query}&quot;에 대한 결과가 없습니다</Ko>
                  </p>
                </div>
              )}

              {allResults.map(([page, items]) => (
                <div key={page}>
                  <div className="px-4 py-2 bg-sand/30 dark:bg-dark-surface/80 border-b border-sand dark:border-dark-border">
                    <p className="text-xs font-semibold text-eucalypt/50 dark:text-dark-muted/50 uppercase tracking-wider">
                      <En>{page}</En>
                      <Ko>{items[0].pageKo}</Ko>
                    </p>
                  </div>
                  {items.map((item) => {
                    const globalIdx = flat.indexOf(item);
                    const isActive = globalIdx === activeIndex;
                    return (
                      <button
                        key={`${item.page}-${item.section || "page"}`}
                        onClick={() => { closeSearch(); router.push(item.href); }}
                        onMouseEnter={() => setActiveIndex(globalIdx)}
                        className={`w-full text-left px-4 py-3 flex items-start gap-3 border-b border-sand/50 dark:border-dark-border/50 last:border-0 transition-colors ${
                          isActive ? "bg-sunset/5 dark:bg-sunset/10" : "hover:bg-sand/30 dark:hover:bg-dark-surface/50"
                        }`}
                      >
                        <svg className="w-4 h-4 text-sunset/60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-eucalypt dark:text-dark-muted leading-snug">
                            <En>{item.section || page}</En>
                            <Ko>{item.section ? item.sectionKo : item.pageKo}</Ko>
                          </p>
                          {item.section && (
                            <p className="text-xs text-eucalypt/40 dark:text-dark-muted/40 mt-0.5 italic line-clamp-1">
                              <En>in {page}</En>
                              <Ko>{item.pageKo}</Ko>
                            </p>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Footer hints */}
            {flat.length > 0 && (
              <div className="px-4 py-2 border-t border-sand dark:border-dark-border bg-sand/20 dark:bg-dark-surface/50 flex items-center gap-3 text-xs text-eucalypt/40 dark:text-dark-muted/40">
                <span>↑↓ navigate</span>
                <span>↵ open</span>
                <span>Esc close</span>
              </div>
            )}
      </div>
    </div>
  );
}
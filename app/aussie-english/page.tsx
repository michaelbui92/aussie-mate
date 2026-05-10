"use client";
import { useState, useMemo } from "react";
import { phrases, type Phrase } from "@/lib/phrases";
import Quokka from "@/components/Quokka";

const categories: { value: Phrase["category"] | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "daily-life", label: "Daily Life" },
  { value: "work", label: "Work" },
  { value: "social", label: "Social" },
  { value: "media", label: "Media" },
];

export default function AussieEnglishPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Phrase["category"] | "all">("all");

  const filtered = useMemo(() => {
    return phrases.filter(p => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        p.phrase.toLowerCase().includes(q) ||
        p.meaning.toLowerCase().includes(q) ||
        p.korean.includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <Quokka scene="desk" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-eucalypt dark:text-white mb-2">
            Aussie English 🗣️
          </h1>
          <p className="text-sm md:text-base text-eucalypt/60 dark:text-dark-muted/60">
            120+ Aussie phrases, decoded in English and Korean
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-5">
        {/* Search */}
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sunset"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search phrases..."
            className="w-full pl-11 pr-11 py-3 bg-white dark:bg-dark-surface border border-sand dark:border-dark-border rounded-2xl text-base text-eucalypt dark:text-dark-muted placeholder:text-eucalypt/30 dark:placeholder:text-dark-muted/30 focus:outline-none focus:ring-2 focus:ring-sunset/50 transition-all"
            style={{ fontSize: '16px' }}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-eucalypt/40 hover:text-sunset p-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Category tabs — scrollable, touch-friendly */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-all min-h-[44px] ${
                activeCategory === cat.value
                  ? "bg-sunset text-white shadow-sm"
                  : "bg-sand dark:bg-dark-surface text-eucalypt/60 dark:text-dark-muted/60 hover:text-sunset"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-xs text-eucalypt/40 dark:text-dark-muted/40 font-medium">
          {filtered.length} phrase{filtered.length !== 1 ? "s" : ""}
          {search ? ` for "${search}"` : ""}
        </p>

        {/* Phrase cards */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-3">🤔</div>
            <p className="text-eucalypt/50 dark:text-dark-muted/50 font-medium">No phrases found</p>
            <p className="text-sm text-eucalypt/30 dark:text-dark-muted/30 mt-1">Try a different search</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="bg-white dark:bg-dark-card border border-sand dark:border-dark-border rounded-2xl p-5 hover:shadow-md transition-all animate-fade-up"
                style={{ animationDelay: `${i * 0.03}s` }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-base md:text-lg text-sunset leading-snug">{p.phrase}</h3>
                  <span className="shrink-0 text-xs font-semibold bg-sand dark:bg-dark-surface text-eucalypt/50 dark:text-dark-muted/50 px-2 py-0.5 rounded-full">
                    {categories.find(c => c.value === p.category)?.label}
                  </span>
                </div>
                <p className="text-sm text-eucalypt/80 dark:text-dark-muted/80 mb-2 leading-relaxed">
                  <span className="font-semibold">🇬🇧 {p.meaning}</span>
                </p>
                <p className="text-sm text-sage font-medium mb-3 leading-relaxed">🇰🇷 {p.korean}</p>
                <div className="bg-sand dark:bg-dark-surface rounded-xl px-4 py-2.5 text-sm text-eucalypt/60 dark:text-dark-muted/60 italic">
                  "{p.example}"
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

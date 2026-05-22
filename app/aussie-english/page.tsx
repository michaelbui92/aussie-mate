"use client";
import { useState, useMemo, useCallback } from "react";
import { phrases, type Phrase } from "@/lib/phrases";
import { En, Ko } from "@/components/LangBlocks";

const categories: { value: Phrase["category"] | "all"; label: string; enLabel?: string; koLabel?: string }[] = [
  { value: "all", label: "All" },
  { value: "daily-life", label: "Daily Life", enLabel: "Daily Life", koLabel: "일상" },
  { value: "work", label: "Work", enLabel: "Work", koLabel: "직장" },
  { value: "food", label: "Food", enLabel: "Food & Drinks", koLabel: "음식" },
  { value: "sports", label: "Sports", enLabel: "Sports", koLabel: "스포츠" },
  { value: "social", label: "Social", enLabel: "Social", koLabel: "사교" },
  { value: "media", label: "Media", enLabel: "Media", koLabel: "미디어" },
];

const REVIEW_COUNT = 20;

const top20Phrases = new Set([
  "G'day",
  "No worries",
  "Arvo",
  "Brekkie",
  "Barbie",
  "Bottle-o",
  "Dunny",
  "Esky",
  "Flat out",
  "Goon",
  "Maccas",
  "Ripper",
  "Servo",
  "Sanger",
  "Smoko",
  "Stubby holder",
  "Ta",
  "Thongs",
  "Cuppa",
  "Bludge",
]);

// Simple flashcard review state
interface ReviewCard {
  phrase: string;
  meaning: string;
  korean: string;
  example: string;
}

export default function AussieEnglishPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Phrase["category"] | "all">("all");
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewCards, setReviewCards] = useState<ReviewCard[]>([]);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewFlipped, setReviewFlipped] = useState(false);

  const filtered = useMemo(() => {
    return phrases.filter((p) => {
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

  const startReview = useCallback(() => {
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, REVIEW_COUNT);
    setReviewCards(shuffled);
    setReviewIndex(0);
    setReviewFlipped(false);
    setReviewMode(true);
  }, [filtered]);

  const nextCard = () => {
    if (reviewIndex < reviewCards.length - 1) {
      setReviewIndex((i) => i + 1);
      setReviewFlipped(false);
    } else {
      setReviewMode(false);
    }
  };

  const prevCard = () => {
    if (reviewIndex > 0) {
      setReviewIndex((i) => i - 1);
      setReviewFlipped(false);
    }
  };

  if (reviewMode && reviewCards.length > 0) {
    const card = reviewCards[reviewIndex];
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-8 px-4">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs text-eucalypt/50 dark:text-dark-muted/50 mb-1">
              Flashcard Review
            </p>
            <h1 className="text-2xl font-bold text-eucalypt dark:text-white mb-0.5">
              Aussie English 🗣️
            </h1>
            <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60">
              Card {reviewIndex + 1} of {reviewCards.length}
            </p>
          </div>
        </section>

        <div className="max-w-xl mx-auto px-4 py-10 flex flex-col items-center gap-4">
          {/* Progress bar */}
          <div className="w-full bg-sand dark:bg-dark-surface rounded-full h-1.5">
            <div
              className="bg-sunset h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${((reviewIndex + 1) / reviewCards.length) * 100}%` }}
            />
          </div>

          {/* Flashcard */}
          <button
            onClick={() => setReviewFlipped(!reviewFlipped)}
            className="w-full max-w-sm bg-white dark:bg-dark-card border border-sand dark:border-dark-border rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all cursor-pointer min-h-[220px] flex flex-col items-center justify-center gap-3"
          >
            {!reviewFlipped ? (
              <>
                <p className="text-3xl font-bold text-sunset">{card.phrase}</p>
                <p className="text-sm text-eucalypt/40 dark:text-dark-muted/40">Tap to reveal meaning</p>
              </>
            ) : (
              <>
                <p className="text-xl font-bold text-sunset mb-2">{card.phrase}</p>
                <p className="text-base text-eucalypt dark:text-white font-semibold mb-1">
                  🇦🇺 {card.meaning}
                </p>
                <p className="text-base text-sage font-medium mb-3">🇰🇷 {card.korean}</p>
                <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60 italic">
                  "{card.example}"
                </p>
              </>
            )}
          </button>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={prevCard}
              disabled={reviewIndex === 0}
              className="px-5 py-2 rounded-full text-sm font-medium border border-sand dark:border-dark-border text-eucalypt/70 dark:text-dark-muted/70 hover:bg-sand dark:hover:bg-dark-surface disabled:opacity-30 transition-all"
            >
              ← Previous
            </button>
            <button
              onClick={nextCard}
              className="px-5 py-2 rounded-full text-sm font-semibold bg-sunset text-white hover:bg-sunset-light transition-all shadow-sm"
            >
              {reviewIndex < reviewCards.length - 1 ? "Next →" : "Finish 🎉"}
            </button>
          </div>

          <button
            onClick={() => setReviewMode(false)}
            className="text-xs text-eucalypt/40 dark:text-dark-muted/40 hover:text-sunset transition-colors mt-2"
          >
            Exit review
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-eucalypt dark:text-white mb-2">
            <En>Aussie English 🗣️</En>
            <Ko>호주 영어 🗣️</Ko>
          </h1>
          <p className="text-sm md:text-base text-eucalypt/60 dark:text-dark-muted/60">
            <En>{phrases.length} Aussie phrases, decoded in English and Korean</En>
            <Ko>{phrases.length}개의 호주 표현, 영어와 한국어로 해석</Ko>
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-5">
        {/* Search + Review button row */}
        <div className="flex gap-3 items-center">
          <div className="relative flex-1">
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
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search phrases..."
              className="w-full pl-11 pr-11 py-3 bg-white dark:bg-dark-surface border border-sand dark:border-dark-border rounded-2xl text-base text-eucalypt dark:text-dark-muted placeholder:text-eucalypt/30 dark:placeholder:text-dark-muted/30 focus:outline-none focus:ring-2 focus:ring-sunset/50 transition-all"
              style={{ fontSize: "16px" }}
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

          <button
            onClick={startReview}
            disabled={filtered.length === 0}
            className="shrink-0 px-4 py-3 rounded-2xl bg-sunset text-white text-sm font-semibold hover:bg-sunset-light transition-all shadow-sm disabled:opacity-40 flex items-center gap-1.5 min-h-[50px]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Review
          </button>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          {categories.map((cat) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((p, i) => (
              <div className="bg-white dark:bg-dark-card border border-sand dark:border-dark-border rounded-2xl p-5 hover:shadow-md transition-all" style={{ animationDelay: `${(i % 4) * 0.07}s` }}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base sm:text-lg text-sunset leading-snug">{p.phrase}</h3>
                  <div className="shrink-0 flex items-center gap-1.5">
                    {top20Phrases.has(p.phrase) && (
                      <span className="text-xs font-bold bg-sunset text-white px-2 py-0.5 rounded-full">
                        ⭐ Top 20
                      </span>
                    )}
                    <span className="text-xs font-semibold bg-sand dark:bg-dark-surface text-eucalypt/50 dark:text-dark-muted/50 px-2 py-0.5 rounded-full">
                      {categories.find((c) => c.value === p.category)?.label}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-eucalypt/80 dark:text-dark-muted/80 mb-2 leading-relaxed">
                  <span className="font-semibold">🇦🇺 {p.meaning}</span>
                </p>
                <p className="text-sm text-sage font-medium mb-3 leading-relaxed">🇰🇷 {p.korean}</p>
                <div className="bg-sand dark:bg-dark-surface rounded-xl px-3 sm:px-4 py-2 text-sm phrase-example text-eucalypt/60 dark:text-dark-muted/60 italic">
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
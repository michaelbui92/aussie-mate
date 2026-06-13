"use client";
// Aussie-english interactive island. Owns search + category filter +
// flashcard review state. The page (a server component) passes the phrase
// data + category metadata, this component handles all interactivity.
//
// Design: editorial travel-magazine style — serif headlines, soft white
// cards, stone-50/cream palette, sunset-orange accents. Matches the
// site-wide design language.

import { useState, useMemo, useCallback } from "react";
import type { Phrase } from "@/lib/phrases";
import { En, Ko } from "@/components/LangBlocks";

export interface PhraseCategory {
  value: Phrase["category"] | "all";
  label: string;
  enLabel?: string;
  koLabel?: string;
}

interface PhraseExplorerProps {
  phrases: Phrase[];
  categories: PhraseCategory[];
  /** Number of cards in a review session. */
  reviewSize?: number;
}

export default function PhraseExplorer({
  phrases,
  categories,
  reviewSize = 20,
}: PhraseExplorerProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Phrase["category"] | "all">("all");
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewCards, setReviewCards] = useState<Phrase[]>([]);
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
  }, [search, activeCategory, phrases]);

  const startReview = useCallback(() => {
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, reviewSize);
    setReviewCards(shuffled);
    setReviewIndex(0);
    setReviewFlipped(false);
    setReviewMode(true);
  }, [filtered, reviewSize]);

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

  // --- Review mode (fullscreen flashcard) ---
  if (reviewMode && reviewCards.length > 0) {
    const card = reviewCards[reviewIndex];
    const progress = ((reviewIndex + 1) / reviewCards.length) * 100;
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-darkbg">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 md:py-16">
          <div className="flex items-center justify-between mb-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500">
              <En>Flashcard review</En>
              <Ko>플래시카드 복습</Ko>
            </p>
            <p className="text-xs text-stone-500 dark:text-stone-400 tabular-nums">
              {reviewIndex + 1} / {reviewCards.length}
            </p>
          </div>

          <div className="w-full bg-stone-200/60 dark:bg-dark-surface rounded-full h-1 mb-8 overflow-hidden">
            <div
              className="bg-sunset h-1 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <button
            onClick={() => setReviewFlipped(!reviewFlipped)}
            className="w-full bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border rounded-3xl p-8 md:p-12 text-center hover:shadow-lg hover:border-sunset/30 transition-all min-h-[320px] flex flex-col items-center justify-center gap-5"
            aria-label={reviewFlipped ? "Hide meaning" : "Reveal meaning"}
          >
            {!reviewFlipped ? (
              <>
                <p className="font-serif text-3xl md:text-5xl text-sunset leading-tight">
                  {card.phrase}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mt-4">
                  <En>Tap to reveal</En>
                  <Ko>탭하여 뜻 보기</Ko>
                </p>
              </>
            ) : (
              <>
                <p className="font-serif text-2xl md:text-3xl text-sunset leading-tight mb-2">
                  {card.phrase}
                </p>
                <div className="space-y-2 max-w-md w-full">
                  <div className="flex items-baseline gap-2 text-left">
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 shrink-0 mt-0.5">EN</span>
                    <span className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">{card.meaning}</span>
                  </div>
                  <div className="flex items-baseline gap-2 text-left">
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 shrink-0 mt-0.5">KO</span>
                    <span className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">{card.korean}</span>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-2 border-sunset/60 pl-3 text-sm italic text-stone-500 dark:text-stone-400 max-w-md text-left">
                  &ldquo;{card.example}&rdquo;
                </blockquote>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prevCard}
              disabled={reviewIndex === 0}
              className="px-5 py-2.5 rounded-full text-sm font-medium border border-stone-200 dark:border-dark-border text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-dark-surface disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <En>← Previous</En>
              <Ko>← 이전</Ko>
            </button>
            <button
              onClick={nextCard}
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-sunset text-white hover:bg-sunset-light transition-all shadow-sm"
            >
              {reviewIndex < reviewCards.length - 1 ? (
                <><En>Next →</En><Ko>다음 →</Ko></>
              ) : (
                <><En>Finish ✓</En><Ko>완료 ✓</Ko></>
              )}
            </button>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => setReviewMode(false)}
              className="text-xs text-stone-400 dark:text-stone-500 hover:text-sunset transition-colors"
            >
              <En>Exit review</En>
              <Ko>복습 나가기</Ko>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Browse mode (search + filter + grid) ---
  return (
    <div className="space-y-6">
      {/* Search + Review row */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <div className="relative flex-1">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 dark:text-stone-500 pointer-events-none"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search phrases…"
            className="w-full pl-11 pr-11 py-3 bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border rounded-full text-base text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-sunset/30 focus:border-sunset transition-all"
            style={{ fontSize: "16px" }}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-sunset p-2 min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <button
          onClick={startReview}
          disabled={filtered.length === 0}
          className="shrink-0 px-5 py-3 rounded-full bg-stone-900 dark:bg-sunset text-white dark:text-white text-sm font-medium hover:bg-sunset dark:hover:bg-sunset-light transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <En>Review flashcards</En>
          <Ko>플래시카드 복습</Ko>
        </button>
      </div>

      {/* Category pills */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                isActive
                  ? "bg-sunset text-white shadow-sm"
                  : "bg-stone-100 dark:bg-dark-surface text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-dark-border hover:text-sunset dark:hover:text-sunset"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Results count */}
      <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">
        <En>{filtered.length} {filtered.length === 1 ? "phrase" : "phrases"}</En>
        <Ko>{filtered.length}개 표현</Ko>
        {search && (
          <>
            <En> for &ldquo;{search}&rdquo;</En>
            <Ko> (&ldquo;{search}&rdquo; 검색)</Ko>
          </>
        )}
      </p>

      {/* Phrase cards grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 px-4">
          <div className="text-5xl mb-4" aria-hidden="true">🔎</div>
          <p className="font-serif text-xl text-stone-700 dark:text-stone-200 mb-1">
            <En>No matches</En>
            <Ko>검색 결과 없음</Ko>
          </p>
          <p className="text-sm text-stone-500 dark:text-stone-400 mb-5">
            <En>Try a different word or clear the filters.</En>
            <Ko>다른 단어를 입력하거나 필터를 해제해 보세요.</Ko>
          </p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("all");
            }}
            className="text-sm text-sunset hover:text-sunset-light font-medium underline underline-offset-4"
          >
            <En>Reset filters</En>
            <Ko>필터 초기화</Ko>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((p, i) => {
            const catLabel = categories.find((c) => c.value === p.category)?.label ?? "";
            return (
              <article
                key={p.phrase}
                className="bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border rounded-2xl p-5 md:p-6 hover:border-sunset/40 hover:shadow-md transition-all"
                style={{ animationDelay: `${(i % 8) * 0.04}s` }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-serif text-xl md:text-2xl text-sunset leading-tight min-w-0">
                    {p.phrase}
                  </h3>
                  <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-darkbg px-2.5 py-1 rounded-full">
                    {catLabel}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 shrink-0">EN</span>
                    <span className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">{p.meaning}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 shrink-0">KO</span>
                    <span className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">{p.korean}</span>
                  </div>
                </div>
                <blockquote className="border-l-2 border-sunset/60 pl-3 text-sm italic text-stone-500 dark:text-stone-400 leading-relaxed">
                  &ldquo;{p.example}&rdquo;
                </blockquote>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

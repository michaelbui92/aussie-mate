"use client";
// Beyond-sydney destinations client island.
// Owns the vibe filter pills AND the per-destination accordion state, so the
// page itself can be a server component. The destinations data + icon keys
// + vibe metadata all pass as serializable props.
//
// Editorial styling: clean cards on stone-50 page, soft borders, serif
// destination names, sunset accent for filter pills and labels.

import { useState, ReactNode, ComponentType } from "react";
import { Icons } from "./Icons";
import { En, Ko } from "./LangBlocks";

export interface BeyondSydneyDestination {
  id: string;
  iconKey: string;
  name: string;
  state: string;
  distance: string;
  desc: string;
  koDesc: string;
  highlights: string[];
  koHighlights: string[];
  transport: string;
  koTransport: string;
  bestTime: string;
  koBestTime: string;
  vibe: string;
}

export interface VibeLabel {
  en: string;
  ko: string;
}

interface FilteredAccordionProps {
  destinations: BeyondSydneyDestination[];
  iconKeys: string[];
  /** Tailwind classes applied to each card's outer container, keyed by vibe. */
  vibeColors: Record<string, string>;
  vibeLabels: Record<string, VibeLabel>;
  /** Display order for the filter pills (must include "all" first if wanted). */
  vibeOrder: string[];
  /** Optional CTA shown below the list. Pass null to omit. */
  bottomNote?: { en: ReactNode; ko: ReactNode } | null;
}

export default function FilteredAccordion({
  destinations,
  iconKeys,
  vibeColors,
  vibeLabels,
  vibeOrder,
  bottomNote,
}: FilteredAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const icons: Record<string, ComponentType<{ className?: string }>> = {};
  for (const k of iconKeys) {
    icons[k] = (Icons as unknown as Record<string, ComponentType<{ className?: string }>>)[k];
  }

  const filtered = filter === "all" ? destinations : destinations.filter(d => d.vibe === filter);

  return (
    <>
      {/* Filter pills */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {vibeOrder.map((vibe) => {
            const isActive = filter === vibe;
            const label: ReactNode = vibe === "all" ? (
              <><En>All</En><Ko>전체</Ko></>
            ) : (
              <><En>{vibeLabels[vibe].en}</En><Ko>{vibeLabels[vibe].ko}</Ko></>
            );
            return (
              <button type="button"
                key={vibe}
                onClick={() => setFilter(vibe)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all min-h-[40px] ${
                  isActive
                    ? "bg-sunset text-white shadow-sm"
                    : "bg-stone-100 dark:bg-dark-surface text-stone-600 dark:text-stone-300 hover:bg-sunset/10 hover:text-sunset"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Destination list */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-8 space-y-3">
        {filtered.map((dest, i) => {
          const isOpen = openId === dest.id;
          const Icon = icons[dest.iconKey];
          const vibePill = (() => {
            switch (dest.vibe) {
              case "beach":   return "bg-coast/15 text-coast";
              case "city":    return "bg-purple-500/15 text-purple-600 dark:text-purple-400";
              case "nature":  return "bg-sage/15 text-sage";
              case "food":    return "bg-sunset/15 text-sunset";
              default:        return "bg-stone-100 dark:bg-dark-surface text-stone-500";
            }
          })();
          return (
            <div
              key={dest.id}
              className={`reveal reveal-delay-${(i % 5) + 1} bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border rounded-2xl overflow-hidden hover:border-sunset/40 transition-all`}
            >
              <button type="button"
                onClick={() => setOpenId(isOpen ? null : dest.id)}
                className="w-full text-left px-5 md:px-6 py-4 md:py-5 flex items-center gap-4 hover:bg-stone-50 dark:hover:bg-darkbg/50 transition-colors"
                aria-expanded={isOpen}
              >
                {Icon && (
                  <span className="shrink-0 w-10 h-10 rounded-full bg-sunset/10 text-sunset flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </span>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h2 className="font-serif text-lg text-stone-900 dark:text-stone-100">{dest.name}</h2>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500">{dest.state}</span>
                    <span className={`shrink-0 text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full font-medium ${vibePill}`}>
                      <En>{vibeLabels[dest.vibe]?.en}</En>
                      <Ko>{vibeLabels[dest.vibe]?.ko}</Ko>
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    <En>{dest.distance}</En>
                    <Ko>{dest.distance}</Ko>
                  </p>
                </div>
                <svg
                  className={`w-4 h-4 text-sunset shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <div className="px-5 md:px-6 pb-5 border-t border-stone-200/60 dark:border-dark-border pt-5 space-y-4">
                  <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
                    <En>{dest.desc}</En>
                    <Ko>{dest.koDesc}</Ko>
                  </p>

                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
                      <En>Highlights</En><Ko>주요 포인트</Ko>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center text-xs bg-stone-100 dark:bg-darkbg text-stone-700 dark:text-stone-300 px-3 py-1.5 rounded-full"
                        >
                          <En>{h}</En><Ko>{dest.koHighlights[i]}</Ko>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="rounded-xl bg-stone-50 dark:bg-darkbg p-4">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 mb-1">
                        <En>Getting there</En><Ko>가는 방법</Ko>
                      </p>
                      <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                        <En>{dest.transport}</En>
                        <Ko>{dest.koTransport}</Ko>
                      </p>
                    </div>
                    <div className="rounded-xl bg-stone-50 dark:bg-darkbg p-4">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 mb-1">
                        <En>Best time to visit</En><Ko>방문 최적기</Ko>
                      </p>
                      <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                        <En>{dest.bestTime}</En>
                        <Ko>{dest.koBestTime}</Ko>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-3">🔍</div>
            <p className="text-stone-500 dark:text-stone-400 font-medium">
              <En>No destinations match that filter</En>
              <Ko>해당 필터에 맞는 목적지가 없습니다</Ko>
            </p>
          </div>
        )}
      </div>

      {bottomNote && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
          <div className="rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 text-center">
            <p className="text-sm text-stone-300 leading-relaxed">
              {bottomNote.en}
              {bottomNote.ko}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

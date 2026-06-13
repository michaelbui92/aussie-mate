"use client";
// Beyond-sydney destinations client island.
// Owns the vibe filter pills AND the per-destination accordion state, so the
// page itself can be a server component. The destinations data + icon keys
// + vibe metadata all pass as serializable props.

import { useState, ReactNode, ComponentType } from "react";
import { Icons } from "./Icons";
import { Car, MapPin } from "@/components/Icons";
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
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {vibeOrder.map((vibe) => {
            const isActive = filter === vibe;
            const label: ReactNode = vibe === "all" ? (
              <><En>All</En><Ko>전체</Ko></>
            ) : (
              <><En>{vibeLabels[vibe].en}</En><Ko>{vibeLabels[vibe].ko}</Ko></>
            );
            return (
              <button
                key={vibe}
                onClick={() => setFilter(vibe)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all min-h-[40px] ${
                  isActive
                    ? "bg-sunset text-white"
                    : "bg-sand dark:bg-dark-surface text-eucalypt/60 dark:text-dark-muted/60 hover:text-sunset"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Destination list */}
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        {filtered.map((dest) => {
          const isOpen = openId === dest.id;
          const Icon = icons[dest.iconKey];
          const vibePill = (() => {
            switch (dest.vibe) {
              case "beach":   return "bg-coast/20 text-coast";
              case "city":    return "bg-purple-500/20 text-purple-600";
              case "nature":  return "bg-sage/20 text-sage";
              case "food":    return "bg-sunset/20 text-sunset";
              default:        return "bg-sand dark:bg-dark-surface text-eucalypt/60";
            }
          })();
          return (
            <div
              key={dest.id}
              className={`bg-white dark:bg-dark-card border rounded-2xl overflow-hidden ${vibeColors[dest.vibe] || ""}`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : dest.id)}
                className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-sunset shrink-0">
                  {Icon ? <Icon className="w-7 h-7" /> : null}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <h2 className="font-bold text-base text-eucalypt dark:text-white">{dest.name}</h2>
                    <span className="text-xs text-eucalypt/50 dark:text-dark-muted/50">{dest.state}</span>
                    <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${vibePill}`}>
                      <En>{vibeLabels[dest.vibe]?.en}</En>
                      <Ko>{vibeLabels[dest.vibe]?.ko}</Ko>
                    </span>
                  </div>
                  <p className="text-xs text-eucalypt/50 dark:text-dark-muted/50">
                    <MapPin className="inline w-3 h-3" /> <En>{dest.distance}</En>
                    <Ko>{dest.distance}</Ko>
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 text-sunset shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 border-t border-sand dark:border-dark-border pt-4">
                  <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 mb-4 leading-relaxed">
                    <En>{dest.desc}</En>
                    <Ko>{dest.koDesc}</Ko>
                  </p>

                  <h3 className="font-semibold text-sm text-sunset mb-2">
                    <En>Highlights</En><Ko>주요 포인트</Ko>
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dest.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-xs bg-sand dark:bg-dark-surface text-eucalypt/70 dark:text-dark-muted/70 px-3 py-1.5 rounded-full"
                      >
                        <En>{h}</En><Ko>{dest.koHighlights[i]}</Ko>
                      </span>
                    ))}
                  </div>

                  <div className="bg-sand/50 dark:bg-dark-surface rounded-xl p-4 mb-3">
                    <p className="text-xs font-semibold text-eucalypt/50 dark:text-dark-muted/50 mb-1">
                      <En><Car className="inline-block w-3 h-3" /> How to get there</En><Ko><Car className="inline-block w-3 h-3" /> 가는 방법</Ko>
                    </p>
                    <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70">
                      <En>{dest.transport}</En>
                      <Ko>{dest.koTransport}</Ko>
                    </p>
                  </div>

                  <div className="bg-sand/50 dark:bg-dark-surface rounded-xl p-4">
                    <p className="text-xs font-semibold text-eucalypt/50 dark:text-dark-muted/50 mb-1">
                      <En>📅 Best time to visit</En><Ko>📅 방문 최적기</Ko>
                    </p>
                    <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70">
                      <En>{dest.bestTime}</En>
                      <Ko>{dest.koBestTime}</Ko>
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-3">🔍</div>
            <p className="text-eucalypt/50 dark:text-dark-muted/50 font-medium">
              <En>No destinations match that filter</En>
              <Ko>해당 필터에 맞는 목적지가 없습니다</Ko>
            </p>
          </div>
        )}
      </div>

      {bottomNote && (
        <div className="max-w-4xl mx-auto px-4 pb-10">
          <div className="bg-sunset/5 border border-sunset/20 rounded-2xl p-5 text-center">
            <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60">
              {bottomNote.en}
              {bottomNote.ko}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

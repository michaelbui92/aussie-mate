"use client";
// Generic accordion client island. Each page passes a `sections` array with
// bilingual strings; this component owns the open/close state and renders
// the open/close animation. Pages become server components (the page tree
// is HTML in the first paint, only the accordion hydrate on the client).
//
// Editorial styling: clean white cards on stone-50 page, serif headings,
// no glass effects, soft borders that warm to sunset on hover.

import { useState, ReactNode, ComponentType } from "react";
import { ChevronDown, Icons } from "./Icons";
import { En, Ko } from "./LangBlocks";

export interface AccordionItem {
  label: ReactNode;
  en: string;
  ko: string;
  // Optional metadata preserved from source pages; not rendered by default.
  url?: string;
  urlLabel?: string;
  [key: string]: unknown;
}

export interface AccordionSection {
  id: string;
  iconKey: string;
  title: string;
  koTitle?: string;
  desc?: string;
  koDesc?: string;
  items: AccordionItem[];
}

type AccordionTheme = "sunset" | "wattle";

interface AccordionProps {
  sections: AccordionSection[];
  /** List of icon keys that the section.iconKey values must be drawn from.
   *  Listing them here keeps Icons.tsx tree-shakable across the server→client
   *  boundary — only the icons in this list are included in the client bundle. */
  iconKeys: string[];
  /** Per-section stagger animation delay in seconds (0 = no delay). */
  itemDelayS?: number;
  /** Accent color: "sunset" (default, warm orange) or "wattle" (Australian gold,
   *  used for tourist page). Controls icon, chevron, and item-label colors. */
  theme?: AccordionTheme;
}

export default function Accordion({
  sections,
  iconKeys,
  itemDelayS = 0,
  theme = "sunset",
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const icons: Record<string, ComponentType<{ className?: string }>> = {};
  for (const k of iconKeys) {
    icons[k] = (Icons as unknown as Record<string, ComponentType<{ className?: string }>>)[k];
  }
  const accentText = theme === "wattle" ? "text-wattle" : "text-sunset";
  const accentBg = theme === "wattle" ? "bg-wattle/10" : "bg-sunset/10";
  return (
    <div className="space-y-3">
      {sections.map((section, si) => {
        const isOpen = openId === section.id;
        const Icon = icons[section.iconKey];
        return (
          <div
            key={section.id}
            className={`reveal reveal-delay-${(si % 5) + 1} rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border overflow-hidden hover:border-sunset/40 transition-all`}
            style={itemDelayS > 0 ? { animationDelay: `${si * itemDelayS}s` } : undefined}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : section.id)}
              className="w-full text-left px-5 md:px-6 py-4 md:py-5 min-h-[64px] flex items-center gap-4 hover:bg-stone-50 dark:hover:bg-darkbg/50 transition-colors"
              aria-expanded={isOpen}
            >
              {Icon && (
                <span className={`shrink-0 w-10 h-10 rounded-full ${accentBg} flex items-center justify-center ${accentText}`}>
                  <Icon className="w-4 h-4" />
                </span>
              )}
              <div className="flex-1 min-w-0 pr-2">
                <h2 className="font-serif text-base md:text-lg text-stone-900 dark:text-stone-100 leading-snug">
                  <En>{section.title}</En>
                  <Ko>{section.koTitle || section.title}</Ko>
                </h2>
                {section.desc && (
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                    <En>{section.desc}</En>
                    <Ko>{section.koDesc || section.desc}</Ko>
                  </p>
                )}
              </div>
              <ChevronDown
                className={`w-4 h-4 ${accentText} shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="divide-y divide-stone-200/60 dark:divide-dark-border/60 border-t border-stone-200/60 dark:border-dark-border/60">
                {section.items.map((item, ii) => (
                  <div key={ii} className="px-5 md:px-6 py-4">
                    <p className={`font-medium text-sm ${accentText} mb-1.5`}>{item.label}</p>
                    <En>
                      <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
                        {item.en}
                      </p>
                    </En>
                    <Ko>
                      <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                        {item.ko}
                      </p>
                    </Ko>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

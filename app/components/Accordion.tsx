"use client";
// Generic accordion client island. Each page passes a `sections` array with
// bilingual strings; this component owns the open/close state and renders
// the open/close animation. Pages become server components (the page tree
// is HTML in the first paint, only the accordion hydrate on the client).
//
// The icons prop is now a string[] of icon names (tree-shakable named imports
// from Icons.tsx). The component looks up each icon from the Icons module so
// the data sent across the server→client boundary stays serializable.

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
  const accent = theme === "wattle" ? "text-wattle" : "text-sunset";
  return (
    <div className="space-y-4">
      {sections.map((section, si) => {
        const isOpen = openId === section.id;
        const Icon = icons[section.iconKey];
        return (
          <div
            key={section.id}
            className={`glass-card rounded-2xl overflow-hidden`}
            style={itemDelayS > 0 ? { animationDelay: `${si * itemDelayS}s` } : undefined}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : section.id)}
              className="w-full text-left px-4 md:px-5 py-4 min-h-[60px] flex items-center gap-3 hover:bg-sand/50 dark:hover:bg-dark-surface/50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className={`${accent} shrink-0`}>
                {Icon ? <Icon className="w-5 h-5" /> : null}
              </span>
              <div className="flex-1 min-w-0 pr-2">
                <h2 className="font-bold text-sm md:text-base text-eucalypt dark:text-white leading-snug">
                  <En>{section.title}</En>
                  <Ko>{section.koTitle || section.title}</Ko>
                </h2>
                {section.desc && (
                  <p className="text-xs text-eucalypt/50 dark:text-dark-muted/50 mt-0.5">
                    <En>{section.desc}</En>
                    <Ko>{section.koDesc || section.desc}</Ko>
                  </p>
                )}
              </div>
              <ChevronDown
                className={`w-5 h-5 ${accent} shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="glass-section divide-y divide-sand/50 dark:divide-dark-border/50 border-t border-sand/30 dark:border-dark-border/30">
                {section.items.map((item, ii) => (
                  <div key={ii} className="px-5 py-4">
                    <p className={`font-semibold text-sm ${accent} mb-1.5`}>{item.label}</p>
                    <En>
                      <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed mb-2">
                        {item.en}
                      </p>
                    </En>
                    <Ko>
                      <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed">
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

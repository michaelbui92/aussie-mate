import type { ReactNode } from "react";
import { En, Ko } from "./LangBlocks";
import * as Icons from "./Icons";

/**
 * EditorialSection — the editorial-style section block used by the
 * 7 content pages (apartment, workplace, transport, study, tourist,
 * sports, finance). Mirrors the destination detail layout:
 *   - Eyebrow label (uppercase tracking, accent color)
 *   - Title (font-serif, large)
 *   - Description (muted)
 *   - Items in a 2-col grid, each item is a small card
 *
 * Color tokens are theme-aware (sunset, sage, coast, amber, etc.) and
 * passed in via the `accent` prop. The icon is looked up from the
 * shared Icons registry.
 */

export type EditorialItem = {
  label: string;
  en: string;
  ko: string;
  url?: string;
};

export type EditorialSectionData = {
  id: string;
  iconKey: keyof typeof Icons | string;
  accent: "sunset" | "sage" | "coast" | "amber" | "rose" | "sky" | "stone";
  title: string;
  koTitle?: string;
  desc: string;
  koDesc?: string;
  items: EditorialItem[];
  /** Optional override: render the items body yourself (e.g. for a stat grid). */
  customBody?: ReactNode;
};

const ACCENT_MAP: Record<NonNullable<EditorialSectionData["accent"]>, {
  eyebrow: string;
  ring: string;
  dot: string;
  chip: string;
}> = {
  sunset: {
    eyebrow: "text-sunset",
    ring: "hover:border-sunset/40",
    dot: "bg-sunset",
    chip: "bg-sunset/10 text-sunset",
  },
  sage: {
    eyebrow: "text-sage",
    ring: "hover:border-sage/40",
    dot: "bg-sage",
    chip: "bg-sage/10 text-sage",
  },
  coast: {
    eyebrow: "text-coast",
    ring: "hover:border-coast/40",
    dot: "bg-coast",
    chip: "bg-coast/10 text-coast",
  },
  amber: {
    eyebrow: "text-amber-600 dark:text-amber-400",
    ring: "hover:border-amber-400/40",
    dot: "bg-amber-500",
    chip: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  },
  rose: {
    eyebrow: "text-rose-600 dark:text-rose-400",
    ring: "hover:border-rose-400/40",
    dot: "bg-rose-500",
    chip: "bg-rose-500/10 text-rose-700 dark:text-rose-400",
  },
  sky: {
    eyebrow: "text-sky-600 dark:text-sky-400",
    ring: "hover:border-sky-400/40",
    dot: "bg-sky-500",
    chip: "bg-sky-500/10 text-sky-700 dark:text-sky-400",
  },
  stone: {
    eyebrow: "text-stone-500 dark:text-stone-400",
    ring: "hover:border-stone-400/40",
    dot: "bg-stone-500",
    chip: "bg-stone-500/10 text-stone-700 dark:text-stone-300",
  },
};

export default function EditorialSection({
  data,
  index = 0,
  cols = 2,
}: {
  data: EditorialSectionData;
  index?: number;
  cols?: 2 | 3;
}) {
  const accent = ACCENT_MAP[data.accent];
  // Resolve icon from registry; fall back to a generic circle if missing.
  // The Icons module has some non-standard exports, so we cast to any.
  const IconComp = (Icons as any)[data.iconKey] as React.ComponentType<{ className?: string; strokeWidth?: number }> | undefined ?? (() => null);

  return (
    <section
      id={data.id}
      className={`reveal reveal-delay-${(index % 5) + 1} scroll-mt-24`}
    >
      {/* Header */}
      <div className="mb-5">
        <div className="flex items-center gap-3 mb-1.5">
          <span
            className={`shrink-0 w-8 h-8 rounded-xl ${accent.chip} flex items-center justify-center`}
          >
            <IconComp className="w-4 h-4" />
          </span>
          <p
            className={`text-[11px] font-medium uppercase tracking-[0.3em] ${accent.eyebrow}`}
          >
            <En>{data.title}</En>
            <Ko>{data.koTitle || data.title}</Ko>
          </p>
        </div>
        <p className="text-sm text-stone-500 dark:text-stone-400 pl-11 max-w-2xl">
          <En>{data.desc}</En>
          <Ko>{data.koDesc || data.desc}</Ko>
        </p>
      </div>

      {/* Body */}
      {data.customBody ?? (
        <div
          className={`grid grid-cols-1 ${cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"} gap-3`}
        >
          {data.items.map((item, i) => (
            <div
              key={item.label}
              className={`reveal reveal-delay-${((index + i) % 5) + 1} p-4 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border ${accent.ring} hover:shadow-md transition-all`}
            >
              <p className={`font-medium text-sm ${accent.eyebrow} mb-1.5 leading-snug`}>
                {item.label}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-stone-400 hover:text-sunset text-xs font-normal"
                    aria-label={`${item.label} (opens in new tab)`}
                  >
                    ↗
                  </a>
                )}
              </p>
              <En>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
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
      )}
    </section>
  );
}

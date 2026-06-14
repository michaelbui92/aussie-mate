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
  /** Optional banner image. When set, the section header is rendered as an
   *  overlay on top of this image (editorial style). A gradient sits
   *  underneath as a fallback if the image fails to load. */
  img?: string;
};

const ACCENT_MAP: Record<NonNullable<EditorialSectionData["accent"]>, {
  eyebrow: string;
  ring: string;
  dot: string;
  chip: string;
  banner: string;
}> = {
  sunset: {
    eyebrow: "text-sunset",
    ring: "hover:border-sunset/40",
    dot: "bg-sunset",
    chip: "bg-sunset/10 text-sunset",
    banner: "from-orange-500 to-amber-600",
  },
  sage: {
    eyebrow: "text-sage",
    ring: "hover:border-sage/40",
    dot: "bg-sage",
    chip: "bg-sage/10 text-sage",
    banner: "from-emerald-500 to-green-600",
  },
  coast: {
    eyebrow: "text-coast",
    ring: "hover:border-coast/40",
    dot: "bg-coast",
    chip: "bg-coast/10 text-coast",
    banner: "from-cyan-500 to-sky-600",
  },
  amber: {
    eyebrow: "text-amber-600 dark:text-amber-400",
    ring: "hover:border-amber-400/40",
    dot: "bg-amber-500",
    chip: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
    banner: "from-amber-500 to-yellow-600",
  },
  rose: {
    eyebrow: "text-rose-600 dark:text-rose-400",
    ring: "hover:border-rose-400/40",
    dot: "bg-rose-500",
    chip: "bg-rose-500/10 text-rose-700 dark:text-rose-400",
    banner: "from-rose-500 to-pink-600",
  },
  sky: {
    eyebrow: "text-sky-600 dark:text-sky-400",
    ring: "hover:border-sky-400/40",
    dot: "bg-sky-500",
    chip: "bg-sky-500/10 text-sky-700 dark:text-sky-400",
    banner: "from-sky-500 to-blue-600",
  },
  stone: {
    eyebrow: "text-stone-500 dark:text-stone-400",
    ring: "hover:border-stone-400/40",
    dot: "bg-stone-500",
    chip: "bg-stone-500/10 text-stone-700 dark:text-stone-300",
    banner: "from-stone-600 to-stone-800",
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
      {data.img ? (
        // Image-banner header (editorial style): header overlaid on a photo,
        // with an accent gradient underneath as a fallback.
        <div className="relative overflow-hidden rounded-2xl mb-5 shadow-md">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${accent.banner}`}
            aria-hidden="true"
          />
          <img
            src={data.img}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20"
            aria-hidden="true"
          />
          <div className="relative p-6 md:p-8 min-h-[180px] md:min-h-[220px] flex flex-col justify-end text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="shrink-0 w-8 h-8 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                <IconComp className="w-4 h-4" />
              </span>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/80">
                <En>{data.title}</En>
                <Ko>{data.koTitle || data.title}</Ko>
              </p>
            </div>
            <p className="text-sm text-white/85 max-w-2xl leading-relaxed">
              <En>{data.desc}</En>
              <Ko>{data.koDesc || data.desc}</Ko>
            </p>
          </div>
        </div>
      ) : (
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
      )}

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

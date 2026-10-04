"use client";
// Active-pill indicator for the /destinations hub trip-length filter.
// Highlights the pill whose destination section is currently in view,
// driven by a lightweight IntersectionObserver that also handles the
// sticky-top behavior of the existing parent <nav>.
import { useEffect, useState } from "react";
import { En, Ja, Ko, Zh, pickLocale} from "@/components/LangBlocks";

export type FilterKey = "day" | "weekend" | "longer" | "far";

type Label = { en: string; ko: string; ja?: string; zh?: string; hint: { en: string; ko: string; ja?: string; zh?: string } };

const ORDER: FilterKey[] = ["day", "weekend", "longer", "far"];
const LABELS: Record<FilterKey, Label> = {
  weekend: { en: "Weekend trip", ko: "주말 여행", hint: { en: "2–3 hours from Sydney", ja: "シドニーから2–3時間", zh: "距悉尼2–3小时", ko: "시드니에서 2~3시간" } },
  day:     { en: "Day trip",     ko: "당일치기",   hint: { en: "Under 2 hours from Sydney", ja: "シドニーから2時間以内", zh: "距悉尼2小时以内", ko: "시드니에서 2시간 이내" } },
  longer:  { en: "3+ days",      ko: "3일 이상",   hint: { en: "Worth a longer stay", ja: "ゆっくり滞在する価値あり", zh: "值得多住几天", ko: "여유 있는 일정 추천" } },
  far:     { en: "Big trip",     ko: "장거리",     hint: { en: "5+ hours or fly", ja: "5時間以上または飛行機", zh: "5小时以上或乘飞机", ko: "5시간 이상 또는 항공" } },
};

export default function TripLengthFilter() {
  const [active, setActive] = useState<FilterKey>("day");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = ORDER.map((k) => document.getElementById(k)).filter(
      Boolean
    ) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the section whose top is closest to the sticky-filter band.
        // We pick the *last* entry that intersects so scroll-up restores
        // the previous section's pill.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id as FilterKey);
        }
      },
      {
        // Trigger when the section's top reaches just under the sticky
        // filter band (~80px gap).
        rootMargin: "-80px 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 overflow-x-auto">
      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400 shrink-0 mr-1">
        <En translated>Trip</En>
        <Ja>旅行</Ja>
        <Zh>行程</Zh>
        <Ko>일정</Ko>
      </span>
      {ORDER.map((key) => {
        const isActive = active === key;
        return (
          <a
            key={key}
            href={`#${key}`}
            aria-current={isActive ? "true" : undefined}
            className={`shrink-0 inline-flex items-center gap-1.5 px-3 h-9 rounded-full text-xs font-medium transition-colors ${
              isActive
                ? "bg-sunset text-white shadow-md"
                : "bg-stone-100 dark:bg-darkbg text-stone-700 dark:text-stone-300 hover:bg-sunset hover:text-white"
            }`}
          >
            <En translated>{LABELS[key].en}</En>
            <Ja>{pickLocale("ja", LABELS[key])}</Ja>
            <Zh>{pickLocale("zh", LABELS[key])}</Zh>
            <Ko>{LABELS[key].ko}</Ko>
          </a>
        );
      })}
    </div>
  );
}

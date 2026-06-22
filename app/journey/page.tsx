// The Journey — hub page for the three stages of being in Australia.
// Each card routes to its own page; the persona content lives there.
//
// Why it's a separate page (not a homepage tab):
//   - Homepage should be aspirational + visual, not a "where are you in life?" quiz
//   - Each stage gets its own SEO-optimised URL (Google: "TFN 한국어" → /journey/arrived)
//   - Persona content is reference material, not landing material
//   - The existing VisitingContent/ArrivedContent/HomeContent components are reused as-is
//
// Image rule: no new external images. Card design uses typography + accent color.
// If you want hero images per stage, drop them into /public and tell me the filenames.

import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import { withSeo, seoFor } from "@/lib/seo";

export const metadata = withSeo(
  {
    ...seoFor("/journey"),
    title: "The Journey — 호주 여정 (Visiting / Arrived / Home)",
    description:
      "호주에서의 여정을 세 단계로 정리: 여행 중 (워홀, 단기 체류), 방금 도착 (은행·TFN·SIM 셋업), 장기 정착 (직장·생활·재무). 단계별로 필요한 가이드를 골라 보세요.",
  },
  "/journey"
);

type Stage = {
  num: string;
  href: string;
  title: string;
  koTitle: string;
  subtitle: string;
  koSubtitle: string;
  /** Tailwind accent classes — each stage gets its own hue so they read as distinct phases. */
  accent: {
    ring: string;       // ring color for the card border
    ringActive: string; // ring color on hover
    number: string;     // text color for the "01" number
    pill: string;       // bg for the small stage-pill in the corner
    pillText: string;   // text color for the pill
    cta: string;        // text color for the CTA arrow
  };
};

const stages: Stage[] = [
  {
    num: "01",
    href: "/journey/visiting",
    title: "I'm visiting",
    koTitle: "여행 중이에요",
    subtitle: "Holiday, working holiday, or just passing through",
    koSubtitle: "휴가, 워홀, 또는 잠시 들른 경우",
    accent: {
      ring: "ring-sky-200 dark:ring-sky-900/40",
      ringActive: "hover:ring-sky-400 dark:hover:ring-sky-500",
      number: "text-sky-600 dark:text-sky-400",
      pill: "bg-sky-50 dark:bg-sky-950/40",
      pillText: "text-sky-700 dark:text-sky-300",
      cta: "text-sky-600 dark:text-sky-400 group-hover:text-sky-700",
    },
  },
  {
    num: "02",
    href: "/journey/arrived",
    title: "I just got here",
    koTitle: "방금 도착했어요",
    subtitle: "First month sorted: bank, TFN, SIM, place to live",
    koSubtitle: "첫 달 셋업: 은행, TFN, SIM, 거주지",
    accent: {
      ring: "ring-amber-200 dark:ring-amber-900/40",
      ringActive: "hover:ring-amber-400 dark:hover:ring-amber-500",
      number: "text-amber-600 dark:text-amber-400",
      pill: "bg-amber-50 dark:bg-amber-950/40",
      pillText: "text-amber-700 dark:text-amber-300",
      cta: "text-amber-600 dark:text-amber-400 group-hover:text-amber-700",
    },
  },
  {
    num: "03",
    href: "/journey/home",
    title: "I call this home",
    koTitle: "여기가 내 집이에요",
    subtitle: "Long-term Australian — work, lifestyle, finances",
    koSubtitle: "장기 호주 거주 — 직장, 생활, 재무",
    accent: {
      ring: "ring-teal-200 dark:ring-teal-900/40",
      ringActive: "hover:ring-teal-400 dark:hover:ring-teal-500",
      number: "text-teal-600 dark:text-teal-400",
      pill: "bg-teal-50 dark:bg-teal-950/40",
      pillText: "text-teal-700 dark:text-teal-300",
      cta: "text-teal-600 dark:text-teal-400 group-hover:text-teal-700",
    },
  },
];

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-darkbg">
      {/* Header */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-10 md:pb-14">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En>The Journey</En>
          <Ko>여정</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
          <En>Where are you in the journey?</En>
          <Ko>여정의 어디에 있나요?</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>
            Three stages, one guide. Pick the one that matches where you are right now — each one links to the practical steps for that phase.
          </En>
          <Ko>
            세 단계, 하나의 가이드. 지금 있는 단계에 맞는 항목을 골라보세요 — 각 단계에 해당하는 실용적인 정리로 연결됩니다.
          </Ko>
        </p>
      </header>

      {/* Stage cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {stages.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className={`reveal reveal-delay-${i + 1} group relative flex flex-col p-6 md:p-7 rounded-2xl bg-white dark:bg-dark-surface ring-1 ${s.accent.ring} ${s.accent.ringActive} shadow-sm hover:shadow-xl transition-all duration-300`}
            >
              {/* Top row: stage pill + number */}
              <div className="flex items-start justify-between mb-5">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest ${s.accent.pill} ${s.accent.pillText}`}
                >
                  <En>Stage</En>
                  <Ko>단계</Ko>
                </span>
                <span
                  className={`font-mono text-xs ${s.accent.number}`}
                  aria-hidden="true"
                >
                  {s.num}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight mb-2">
                <En>{s.title}</En>
                <Ko>{s.koTitle}</Ko>
              </h2>

              {/* Subtitle */}
              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-6 flex-1">
                <En>{s.subtitle}</En>
                <Ko>{s.koSubtitle}</Ko>
              </p>

              {/* CTA */}
              <div
                className={`inline-flex items-center gap-1.5 text-sm font-medium ${s.accent.cta} transition-colors`}
              >
                <En>Open this stage</En>
                <Ko>이 단계 열기</Ko>
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

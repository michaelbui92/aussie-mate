// /experiences — the new hub for theme pages.
// Replaces the experience tiles at the bottom of /destinations/page.tsx.
// All 6 theme pages (beaches, wildlife, food, culture, road-trips, adventure)
// live at /experiences/{theme}. /destinations/{theme} 301s here for SEO.

import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import { seoFor, withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";
import { experienceThemes as themes } from "./data";

// Single source of truth for the experiments hub — fetched from
// app/experiences/data.ts which also feeds the homepage top-3 row.

export const metadata = withSeo(
  {

  ...seoFor("/experiences"),
  title: "Experiences — AussieGuides",
  description: "Find experiences, not just places — beaches, wildlife, food, adventure, culture, and road trips across Sydney and NSW.",
  },
  "/experiences"
);

export default function ExperiencesPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Header */}
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>Experiences</En><Ko>경험</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En>Find the trip that fits</En>
            <Ko>맞는 여행을 찾으세요</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En>Not sure where to start? Pick the kind of day you want, and we&apos;ll show you where to go. Six themes covering everything from Bondi&apos;s surf to the Snowy Mountains.</En>
            <Ko>어디서부터 시작할지 모르겠다면, 원하는 하루의 종류를 선택하세요. 본다이 서핑부터 스노위 마운틴까지 여섯 가지 테마가 모두 다룹니다.</Ko>
          </p>
        </div>
      </header>

      {/* Experience grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {themes.map((t, i) => (
            <Link
              key={t.title}
              href={t.href}
              className={`reveal reveal-delay-${(i % 5) + 1} group relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-900 shadow-md hover:shadow-2xl transition-shadow`}
            >
              <img
                src={t.heroImg}
                alt={t.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70 mb-2">
                  <En>Experience</En><Ko>경험</Ko>
                </p>
                <h2 className="font-serif text-3xl md:text-4xl mb-2 leading-tight">
                  <En>{t.title}</En>
                  <Ko>{t.koTitle}</Ko>
                </h2>
                <p className="text-white/80 text-sm leading-relaxed max-w-md">
                  <En>{t.blurb}</En>
                  <Ko>{t.koBlurb}</Ko>
                </p>
                <span className="mt-4 text-white/80 text-xs font-medium uppercase tracking-widest group-hover:text-white transition-colors">
                  <En>Explore</En><Ko>둘러보기</Ko>
                  <span className="ml-2 transition-transform group-hover:translate-x-1 inline-block">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Internal-link context — experiences → trip planning */}
      <RelatedContent
        items={[
          {
            href: "/destinations",
            title: { en: "Pick a destination", ko: "여행지 선택" },
            description: {
              en: "From white-sand beaches to world-class wine country — every spot in our destinations guide is reachable from Sydney.",
              ko: "하얀 모래 해변부터 세계적 와인 산지까지 — 시드니에서 갈 수 있는 모든 여행지.",
            },
          },
          {
            href: "/tourist",
            title: { en: "Plan your trip", ko: "여행 계획" },
            description: {
              en: "Itineraries, transport passes, and the best weeks to visit.",
              ko: "여행 일정, 교통 패스, 그리고 방문 최적 주간.",
            },
          },
          {
            href: "/finance",
            title: { en: "Budgeting", ko: "예산" },
            description: {
              en: "Daily costs, weekend trip totals, and where to splurge vs save.",
              ko: "일일 비용, 주말 여행 총액, 그리고 어디에 쓰고 어디에 아낄지.",
            },
          },
        ]}
      />
    </div>
  );
}

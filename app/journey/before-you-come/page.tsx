// /journey/before-you-come — Stage 01 of The Journey.
// Pre-arrival planning checklist. Replaces the old /journey/visiting
// page (which was a half-tourist, half-newcomer mismatch).
//
// Server component: sets the SEO metadata, renders the persona content
// (BeforeContent) inside a card. The persona component supplies all
// the structure; the page just provides layout + metadata.

import { En, Ko } from "@/components/LangBlocks";
import { withSeo } from "@/lib/seo";
import BeforeContent from "@/components/personas/BeforeContent";

export const metadata = withSeo(
  {
    title: "Before you come to Australia — 호주 출발 전 준비 (한국어/English)",
    description:
      "호주 출발 전 4-6주 동안 해야 할 일: 비자, 은행, 돈, 통신, 앱, 짐, 숙소, 건강보험, 공항 교통 — 출발 전 체크리스트를 한국어와 영어로 정리했습니다.",
  },
  "journey/before-you-come"
);

export default function BeforeYouComePage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg">
      <section className="bg-white dark:bg-dark-surface border-b border-stone-200 dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-6 pt-8 md:pt-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sky-600">
            <En>The Journey · Stage 01</En>
            <Ko>호주 여정 · 1단계</Ko>
          </p>
        </div>
      </section>
      <section className="bg-stone-50 dark:bg-darkbg">
        <div className="max-w-4xl mx-auto px-6 py-10 md:py-14">
          <div className="bg-white dark:bg-dark-surface rounded-3xl shadow-xl shadow-stone-900/5 dark:shadow-black/30 p-6 md:p-10 border border-stone-100 dark:border-dark-border">
            <BeforeContent />
          </div>
        </div>
      </section>
    </div>
  );
}

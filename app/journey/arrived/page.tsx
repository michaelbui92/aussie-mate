// Journey > Arrived — wraps the existing ArrivedContent persona component.
// See /journey/visiting/page.tsx for the pattern.

import { En, Ko } from "@/components/LangBlocks";
import ArrivedContent from "@/components/personas/ArrivedContent";
import { withSeo, seoFor } from "@/lib/seo";

export const metadata = withSeo(
  {
    ...seoFor("/journey/arrived"),
    title: "I just got here — 방금 도착했어요 (첫 한 달 가이드)",
    description:
      "호주에 방금 도착했나요? 첫 한 달 셋업 가이드 — 은행 계좌, TFN 세금번호, SIM 카드, 집 구하기까지 순서대로 정리.",
  },
  "/journey/arrived"
);

export default function Page() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-darkbg">
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 md:pt-16 pb-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400 mb-3">
          <En>Stage 02 — The Journey</En>
          <Ko>단계 02 — 여정</Ko>
        </p>
        <h1 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-3">
          <En>I just got here</En>
          <Ko>방금 도착했어요</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base md:text-lg max-w-2xl">
          <En>First month sorted: bank, TFN, SIM, place to live.</En>
          <Ko>첫 달 셋업: 은행, TFN, SIM, 거주지.</Ko>
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 md:pb-24">
        <div className="bg-white dark:bg-dark-surface rounded-3xl shadow-xl shadow-stone-900/5 dark:shadow-black/30 p-6 md:p-10 border border-stone-100 dark:border-dark-border">
          <ArrivedContent />
        </div>
      </section>
    </div>
  );
}

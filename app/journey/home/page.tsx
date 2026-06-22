// Journey > Home — wraps the existing HomeContent persona component.
// See /journey/visiting/page.tsx for the pattern.

import { En, Ko } from "@/components/LangBlocks";
import HomeContent from "@/components/personas/HomeContent";
import { withSeo, seoFor } from "@/lib/seo";

export const metadata = withSeo(
  {
    ...seoFor("/journey/home"),
    title: "I call this home — 여기가 내 집이에요 (장기 정착 가이드)",
    description:
      "장기 호주 거주자를 위한 가이드. 직장, 생활, 재무, 호주 영어, 문화 적응까지 — 적응이 아니라 소속감을 만드는 단계.",
  },
  "/journey/home"
);

export default function Page() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-darkbg">
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 md:pt-16 pb-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400 mb-3">
          <En>Stage 03 — The Journey</En>
          <Ko>단계 03 — 여정</Ko>
        </p>
        <h1 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-3">
          <En>I call this home</En>
          <Ko>여기가 내 집이에요</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base md:text-lg max-w-2xl">
          <En>Long-term Australian — work, lifestyle, finances.</En>
          <Ko>장기 호주 거주 — 직장, 생활, 재무.</Ko>
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 md:pb-24">
        <div className="bg-white dark:bg-dark-surface rounded-3xl shadow-xl shadow-stone-900/5 dark:shadow-black/30 p-6 md:p-10 border border-stone-100 dark:border-dark-border">
          <HomeContent />
        </div>
      </section>
    </div>
  );
}

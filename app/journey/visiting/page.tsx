// Journey > Visiting — wraps the existing VisitingContent persona component
// in a stage-header shell. Persona content is reference material; this
// gives it its own URL (/journey/visiting) and SEO title.

import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import { withSeo, seoFor } from "@/lib/seo";

export const metadata = withSeo(
  {
    ...seoFor("/journey/visiting"),
    title: "I'm visiting — 여행 중 가이드 (호주 첫 방문)",
    description:
      "호주에 처음 오셨나요? 워홀, 단기 여행, 첫 주 정리를 위한 가이드. 자외선 차단, 오팔 카드, 시드니 첫 주 동선까지.",
  },
  "/journey/visiting"
);

export default function Page() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-darkbg">
      {/* Stage header */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 md:pt-16 pb-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400 mb-3">
          <En>Stage 01 — The Journey</En>
          <Ko>단계 01 — 여정</Ko>
        </p>
        <h1 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-3">
          <En>I'm visiting</En>
          <Ko>여행 중이에요</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base md:text-lg max-w-2xl">
          <En>Holiday, working holiday, or just passing through.</En>
          <Ko>휴가, 워홀, 또는 잠시 들른 경우.</Ko>
        </p>
      </header>

      {/* Persona content — reuses the existing component as-is */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 md:pb-24">
        <div className="bg-white dark:bg-dark-surface rounded-3xl shadow-xl shadow-stone-900/5 dark:shadow-black/30 p-6 md:p-10 border border-stone-100 dark:border-dark-border">
          <VisitingContent />
        </div>
      </section>
    </div>
  );
}

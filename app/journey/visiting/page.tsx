// /journey/visiting — re-uses the existing VisitingContent component.
// Metadata is set here (server component) so the page gets its own
// SEO title, description, canonical URL, and hreflang.

import { En, Ko } from "@/components/LangBlocks";
import { withSeo } from "@/lib/seo";
import VisitingContent from "@/components/personas/VisitingContent";

export const metadata = withSeo(
  {
    title: "I'm visiting Australia — 호주 첫 방문 가이드 (한국어/English)",
    description:
      "호주에 처음 오신 한국인을 위한 가이드. SPF 50+, 오팔 카드, GST, 팁 문화, 자외선, 대중교통 시간, 콘센트 — 여행 가이드에 없는 호주의 기본 규칙을 한국어와 영어로 정리했습니다.",
  },
  "journey/visiting"
);

export default function VisitingPage() {
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
            <VisitingContent />
          </div>
        </div>
      </section>
    </div>
  );
}

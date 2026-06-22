// /journey/home — re-uses the existing HomeContent component.

import { En, Ko } from "@/components/LangBlocks";
import { withSeo } from "@/lib/seo";
import HomeContent from "@/components/personas/HomeContent";

export const metadata = withSeo(
  {
    title: "I call Australia home — 장기 호주 거주 가이드 (한국어/English)",
    description:
      "오래 호주에 거주하는 한국인을 위한 가이드. 퇴직연금(Super), 임차인 권리, 영주권, 시민권, 신용점수, 소속감 — 장기 관점의 호주 생활을 한국어와 영어로 정리했습니다.",
  },
  "journey/home"
);

export default function HomePage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg">
      <section className="bg-white dark:bg-dark-surface border-b border-stone-200 dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-6 pt-8 md:pt-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-teal-600">
            <En>The Journey · Stage 03</En>
            <Ko>호주 여정 · 3단계</Ko>
          </p>
        </div>
      </section>
      <section className="bg-stone-50 dark:bg-darkbg">
        <div className="max-w-4xl mx-auto px-6 py-10 md:py-14">
          <div className="bg-white dark:bg-dark-surface rounded-3xl shadow-xl shadow-stone-900/5 dark:shadow-black/30 p-6 md:p-10 border border-stone-100 dark:border-dark-border">
            <HomeContent />
          </div>
        </div>
      </section>
    </div>
  );
}

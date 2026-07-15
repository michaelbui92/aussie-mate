// /journey/home — re-uses the existing HomeContent component.

import { En, Ko } from "@/components/LangBlocks";
import { withSeo } from "@/lib/seo";
import HomeContent from "@/components/personas/HomeContent";

export const metadata = withSeo(
  {
    title: "Long-Term Australia Guide — Super, Tenancy Rights, PR, Citizenship & Settling In | AussieGuides",
    description:
      "Long-term Australia guide for established residents — superannuation, tenancy rights, permanent residency, citizenship, credit scores, and building a sense of belonging.",
  },
  "journey/home"
);

export default function HomePage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg">
      <section className="bg-white dark:bg-dark-surface border-b border-stone-200 dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-6 pt-8 md:pt-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-teal-600">
            <En>The Journey · Stage 03</En>
            <Ko>호주 여정 · 3단계</Ko>
          </p>
        </div>
      </section>
      <section className="bg-stone-50 dark:bg-darkbg">
        <div className="max-w-5xl mx-auto px-6 py-10 md:py-14">
          <div className="bg-white dark:bg-dark-surface rounded-3xl shadow-xl shadow-stone-900/5 dark:shadow-black/30 p-6 md:p-10 border border-stone-100 dark:border-dark-border">
            <HomeContent />
          </div>
        </div>
      </section>
    </div>
  );
}

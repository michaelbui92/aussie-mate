// /journey/arrived — re-uses the existing ArrivedContent component.

import { En, Ko } from "@/components/LangBlocks";
import { withSeo } from "@/lib/seo";
import ArrivedContent from "@/components/personas/ArrivedContent";

export const metadata = withSeo(
  {
    title: "Just Arrived in Australia? First Month Setup Guide — SIM, Bank, TFN, Medicare | AussieGuides",
    description:
      "Just arrived in Australia? Your first month checklist — SIM card, bank account, Opal card, TFN, Medicare, MyGov. What to do in your first week and common mistakes to avoid.",
  },
  "journey/arrived"
);

export default function ArrivedPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg">
      <section className="bg-white dark:bg-dark-surface border-b border-stone-200 dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-6 pt-8 md:pt-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-emerald-600">
            <En>The Journey · Stage 02</En>
            <Ko>호주 여정 · 2단계</Ko>
          </p>
        </div>
      </section>
      <section className="bg-stone-50 dark:bg-darkbg">
        <div className="max-w-5xl mx-auto px-6 py-10 md:py-14">
          <div className="bg-white dark:bg-dark-surface rounded-3xl shadow-xl shadow-stone-900/5 dark:shadow-black/30 p-6 md:p-10 border border-stone-100 dark:border-dark-border">
            <ArrivedContent />
          </div>
        </div>
      </section>
    </div>
  );
}

// /journey/arrived — re-uses the existing ArrivedContent component.

import type { Metadata } from "next";
import { headers } from "next/headers";
import { pageMeta } from "@/lib/page-meta";
import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import { withSeo } from "@/lib/seo";
import ArrivedContent from "@/components/personas/ArrivedContent";

export async function generateMetadata(): Promise<Metadata> {
  // Per request, so the tab title and the search-result headline are in the reader's
  // language. The canonical and hreflang come from the root layout, which reads the same
  // header. `Metadata` is imported by every page that uses withSeo.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return withSeo({
    title: pageMeta("journey/arrived", locale).title,
    description: pageMeta("journey/arrived", locale).description,
  },
  "journey/arrived"
);
}


export default function ArrivedPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg">
      <section className="bg-white dark:bg-dark-surface border-b border-stone-200 dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-6 pt-8 md:pt-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-emerald-600">
            <En translated>The Journey · Stage 02</En>
            <Ja>ジャーニー · ステージ02</Ja>
            <Zh>旅程 · 第02阶段</Zh>
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

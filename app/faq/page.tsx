import type { Metadata } from "next";
import { headers } from "next/headers";
import { pageMeta } from "@/lib/page-meta";
import {En, Ja, Ko, Zh} from "@/components/LangBlocks";
import { FaqAnswer } from "@/components/Readable";
import RelatedContent from "@/components/RelatedContent";
import { relatedFromMeta } from "@/lib/related";
import { pickLocale } from "@/lib/locale";
import { faqLdJson, seoFor, withSeo } from "@/lib/seo";
import { faqs } from "@/lib/faqs";

export async function generateMetadata(): Promise<Metadata> {
  // Per request, so the tab title and the search-result headline are in the reader's
  // language. The canonical and hreflang come from the root layout, which reads the same
  // header. `Metadata` is imported by every page that uses withSeo.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return withSeo({
    ...seoFor("/faq", locale),
    title: pageMeta("/faq", locale).title,
    description: pageMeta("/faq", locale).description,
  },
  "/faq"
);
}

export default async function FAQPage() {
  // Per request, so the FAQPage schema carries the reader's language: without this the
  // Japanese and Chinese pages emitted inLanguage ["en"] with English questions.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* FAQPage JSON-LD — surfaces Q&A in Google search as rich results.
          Emitted once: the page previously carried two identical blocks. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLdJson(faqs, "/faq", locale)),
        }}
      />
      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset-ink mb-3">
        <En translated>Common questions</En>
        <Ja>よくある質問</Ja>
        <Zh>常见问题</Zh>
        <Ko>자주 묻는 질문</Ko>
      </p>
      <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
        <En translated>FAQ</En>
        <Ja>よくある質問</Ja>
        <Zh>常见问题</Zh>
        <Ko>자주 묻는 질문</Ko>
      </h1>
      <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl mb-8">
        <En translated>Common questions from Koreans visiting and living in Australia — answered in both languages.</En>
        <Ja>オーストラリアを訪れ、暮らす韓国の方々からよくある質問 — 両言語で回答。</Ja>
        <Zh>来澳大利亚旅游和生活的韩国人常见问题 — 双语解答。</Zh>
        <Ko>호주를 방문하고 거주하는 한국인분들이 자주 묻는 질문 — 두 언어로 답변.</Ko>
      </p>

      {/* A map before the answers: ten questions is a long scroll on a phone, and the reader usually
          arrives with one already in mind. The chips are the questions themselves, so no new copy. */}
      <nav aria-label="Questions on this page" className="mb-8 flex flex-wrap gap-2">
        {faqs.map((faq, i) => (
          <a
            key={i}
            href={`#faq-${i}`}
            className="rounded-full border border-stone-300 dark:border-dark-border bg-white dark:bg-dark-surface px-3 py-1.5 text-xs text-stone-600 dark:text-stone-300 hover:border-sunset hover:text-sunset-ink transition-colors"
          >
            <En translated>{faq.q.en}</En>
            <Ja>{pickLocale("ja", faq.q)}</Ja>
            <Zh>{pickLocale("zh", faq.q)}</Zh>
            <Ko>{faq.q.ko}</Ko>
          </a>
        ))}
      </nav>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          // <details> rather than a client accordion: the answer is in the HTML for a crawler and for
          // anyone with JavaScript off, the open state is native, and there is no hydration.
          <details
            key={i}
            id={`faq-${i}`}
            open={i === 0}
            className="group scroll-mt-24 p-5 md:p-6 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sunset/40 transition-colors"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h2 className="font-serif text-lg md:text-xl text-stone-900 dark:text-stone-100 leading-snug">
                <En translated>{faq.q.en}</En>
                <Ja>{pickLocale("ja", faq.q)}</Ja>
                <Zh>{pickLocale("zh", faq.q)}</Zh>
                <Ko>{faq.q.ko}</Ko>
              </h2>
              <svg
                className="mt-1 h-4 w-4 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            {/* The answer arrives as a lead sentence plus one fact per line - the 108-word block at the
                top of this page was the densest text on the site. Same words, different shape. */}
            <div className="mt-3 text-sm md:text-base leading-relaxed">
              <FaqAnswer
                en={faq.a.en}
                ja={faq.a.ja}
                zh={faq.a.zh}
                ko={faq.a.ko}
                className="text-stone-600 dark:text-stone-400"
              />
            </div>
          </details>
        ))}
      </div>

      <div className="mt-10 p-5 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white">
        <p className="text-sm text-stone-300 leading-relaxed">
          <En translated>Can&apos;t find your question? Email us at </En>
          <Ja>お探しの質問が見つかりませんか？ メールはこちらへ</Ja>
          <Zh>找不到你的问题？请发邮件至</Zh>
          <Ko>원하는 답변이 없으세요? </Ko>
          <span className="font-medium text-sunset-light">michaelbui@outlook.com.au</span>
          <En translated> and we&apos;ll add it.</En>
          <Ja>お送りいただければ、追記いたします。</Ja>
          <Zh>我们会把它加进去。</Zh>
          <Ko>으로 이메일을 보내주세요.</Ko>
        </p>
      </div>

      <RelatedContent items={relatedFromMeta(["visa", "cost-of-living", "transport"])} />

    </div>
  );
}

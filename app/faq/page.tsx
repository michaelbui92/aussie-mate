import { En, Ko } from "@/components/LangBlocks";
import { breadcrumbLdJson, faqLdJson, seoFor, withSeo } from "@/lib/seo";
import { faqs } from "@/lib/faqs";

export const metadata = withSeo(
  {
    ...seoFor("/faq"),
    title: "FAQ — 호주 유학/워홀 자주 묻는 질문",
    description:
      "호주 유학, 워홀, 이민에 관한 자주 묻는 질문 — 비자, 은행, 세금, 직장, 부동산, 의료까지. 한국인을 위한 호주 생활 FAQ 모음.",
  },
  "/faq"
);

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* FAQPage JSON-LD — surfaces Q&A in Google search as rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLdJson(faqs, "/faq")),
        }}
      />
      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
        <En>Common questions</En>
        <Ko>자주 묻는 질문</Ko>
      </p>
      <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
        <En>FAQ</En>
        <Ko>자주 묻는 질문</Ko>
      </h1>
      <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl mb-12">
        <En>Common questions from Koreans visiting and living in Australia — answered in both languages.</En>
        <Ko>호주를 방문하고 거주하는 한국인분들이 자주 묻는 질문 — 두 언어로 답변.</Ko>
      </p>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`reveal reveal-delay-${(i % 5) + 1} p-5 md:p-6 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sunset/40 hover:shadow-md transition-all`}
          >
            <h2 className="font-serif text-lg md:text-xl text-stone-900 dark:text-stone-100 mb-2.5 leading-snug">
              <En>{faq.q.en}</En>
              <Ko>{faq.q.ko}</Ko>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed">
              <En>{faq.a.en}</En>
              <Ko>{faq.a.ko}</Ko>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 p-5 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white">
        <p className="text-sm text-stone-300 leading-relaxed">
          <En>Can&apos;t find your question? Email us at </En>
          <Ko>원하는 답변이 없으세요? </Ko>
          <span className="font-medium text-sunset">hello@aussiemate.com.au</span>
          <En> and we&apos;ll add it.</En>
          <Ko>으로 이메일을 보내주세요.</Ko>
        </p>
      </div>

      {/* FAQPage schema — Google rich result (expandable Q&A in SERP). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLdJson(faqs, "faq")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLdJson([{ name: "Home", path: "" }, { name: "FAQ", path: "faq" }])
          ),
        }}
      />
    </div>
  );
}

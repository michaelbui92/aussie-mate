import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";

export type RelatedItem = {
  href: string;
  title: { en: string; ko: string };
  description: { en: string; ko: string };
};

/**
 * Contextual "Related guides" section — placed at the bottom of content pages.
 *
 * Why this matters:
 *   - Google's PageRank flows through internal links. Right now 26 pages are
 *     only connected via the Nav bar, so most pages have 0 contextual
 *     inbound links. This is the single biggest SEO graph fix you can make.
 *   - Users spend more time on the site when they see relevant next steps.
 *
 * Usage at the bottom of a page (before the closing </div>):
 *   <RelatedContent items={[
 *     { href: "/apartment", title: { en: "Apartment", ko: "부동산" }, description: { en: "...", ko: "..." } },
 *   ]} />
 */
export default function RelatedContent({ items }: { items: RelatedItem[] }) {
  if (!items.length) return null;

  return (
    <section className="border-t border-stone-200 dark:border-dark-border bg-stone-50 dark:bg-darkbg">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En>Keep reading</En>
          <Ko>더 알아보기</Ko>
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-6">
          <En>Related guides</En>
          <Ko>관련 가이드</Ko>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col bg-white dark:bg-dark-surface hover:bg-sunset hover:text-white p-5 rounded-2xl border border-stone-200 dark:border-dark-border transition-all duration-300 hover:border-sunset hover:shadow-xl"
            >
              <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 group-hover:text-white transition-colors mb-1.5">
                <En>{item.title.en}</En>
                <Ko>{item.title.ko}</Ko>
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 group-hover:text-white/80 leading-relaxed transition-colors">
                <En>{item.description.en}</En>
                <Ko>{item.description.ko}</Ko>
              </p>
              <span className="mt-3 text-xs font-medium text-sunset group-hover:text-white transition-colors">
                <En>Read guide →</En>
                <Ko>가이드 보기 →</Ko>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
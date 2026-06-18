import Link from "next/link";
import { notFound } from "next/navigation";
import { En, Ko } from "@/components/LangBlocks";
import { visas, getVisa } from "../data";
import { seoFor, faqLdJson, breadcrumbLdJson } from "@/lib/seo";

export async function generateStaticParams() {
  return visas.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVisa(slug);
  if (!v) return {};
  return {
    ...seoFor(`/visa/${slug}`),
    title: `${v.name.en} — AussieGuides`,
    description: v.tagline.en,
  };
}

function Section({
  eyebrowEn,
  eyebrowKo,
  children,
}: {
  eyebrowEn: string;
  eyebrowKo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="reveal">
      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-4">
        <En>{eyebrowEn}</En>
        <Ko>{eyebrowKo}</Ko>
      </p>
      {children}
    </section>
  );
}

export default async function VisaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVisa(slug);
  if (!v) notFound();

  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-sunset/15 via-stone-50 to-amber-50 dark:from-sunset/20 dark:via-darkbg dark:to-amber-950/20 border-b border-stone-200/60 dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <Link
            href="/visa"
            className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-sunset text-xs uppercase tracking-[0.3em] mb-6 transition-colors"
          >
            ← <En>All visas</En>
            <Ko>전체 비자</Ko>
          </Link>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sunset mb-3">
            {v.code}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 leading-[1.05] mb-4">
            <En>{v.name.en}</En>
            <Ko>{v.name.ko}</Ko>
          </h1>
          <p className="font-serif text-lg md:text-xl text-stone-700 dark:text-stone-300 max-w-2xl leading-relaxed">
            <En>{v.tagline.en}</En>
            <Ko>{v.tagline.ko}</Ko>
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <Section eyebrowEn="Overview" eyebrowKo="개요">
              <p className="font-serif text-lg text-stone-800 dark:text-stone-200 leading-relaxed">
                <En>{v.audience.en}</En>
                <Ko>{v.audience.ko}</Ko>
              </p>
            </Section>

            <Section eyebrowEn="Key requirements" eyebrowKo="주요 요건">
              <ul className="space-y-3">
                {v.keyRequirements.map((r) => (
                  <li
                    key={r.en}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border"
                  >
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-sunset mt-2.5" />
                    <p className="font-serif text-base text-stone-900 dark:text-stone-100 leading-snug">
                      <En>{r.en}</En>
                      <Ko>{r.ko}</Ko>
                    </p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section eyebrowEn="Step by step" eyebrowKo="단계별 안내">
              <ol className="space-y-3">
                {v.steps.map((s, i) => (
                  <li
                    key={s.en}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border"
                  >
                    <span className="shrink-0 w-7 h-7 rounded-full bg-sunset text-white text-sm font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="font-serif text-base text-stone-900 dark:text-stone-100 leading-snug">
                      <En>{s.en}</En>
                      <Ko>{s.ko}</Ko>
                    </p>
                  </li>
                ))}
              </ol>
            </Section>

            <Section eyebrowEn="Tips from experience" eyebrowKo="경험에서 나온 팁">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {v.tips.map((t) => (
                  <div
                    key={t.en}
                    className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100/60 dark:border-amber-900/30"
                  >
                    <p className="font-serif text-base text-stone-800 dark:text-stone-200 leading-snug">
                      <En>{t.en}</En>
                      <Ko>{t.ko}</Ko>
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section eyebrowEn="Pros & cons" eyebrowKo="장단점">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100/60 dark:border-emerald-900/30">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-400 mb-3">
                    <En>Pros</En>
                    <Ko>장점</Ko>
                  </p>
                  <ul className="space-y-2">
                    {v.pros.map((p) => (
                      <li
                        key={p.en}
                        className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-200"
                      >
                        <span className="text-emerald-600 dark:text-emerald-400">
                          +
                        </span>
                        <span>
                          <En>{p.en}</En>
                          <Ko>{p.ko}</Ko>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-100/60 dark:border-rose-900/30">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-rose-700 dark:text-rose-400 mb-3">
                    <En>Cons</En>
                    <Ko>단점</Ko>
                  </p>
                  <ul className="space-y-2">
                    {v.cons.map((c) => (
                      <li
                        key={c.en}
                        className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-200"
                      >
                        <span className="text-rose-600 dark:text-rose-400">
                          −
                        </span>
                        <span>
                          <En>{c.en}</En>
                          <Ko>{c.ko}</Ko>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
                <En>Duration</En>
                <Ko>체류 기간</Ko>
              </p>
              <p className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
                <En>{v.duration.en}</En>
                <Ko>{v.duration.ko}</Ko>
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
                <En>Work rights</En>
                <Ko>근무 권한</Ko>
              </p>
              <p className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
                <En>{v.workRights.en}</En>
                <Ko>{v.workRights.ko}</Ko>
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
                <En>Study rights</En>
                <Ko>수학 권한</Ko>
              </p>
              <p className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
                <En>{v.studyRights.en}</En>
                <Ko>{v.studyRights.ko}</Ko>
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
                <En>Cost</En>
                <Ko>비용</Ko>
              </p>
              <p className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
                <En>{v.cost.en}</En>
                <Ko>{v.cost.ko}</Ko>
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
                <En>Processing time</En>
                <Ko>처리 기간</Ko>
              </p>
              <p className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed">
                <En>{v.processingTime.en}</En>
                <Ko>{v.processingTime.ko}</Ko>
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white border border-stone-800">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-3">
                <En>Next steps</En>
                <Ko>다음 단계</Ko>
              </p>
              <p className="text-sm text-stone-200 leading-relaxed mb-4">
                <En>{v.nextSteps.en}</En>
                <Ko>{v.nextSteps.ko}</Ko>
              </p>
              <ul className="space-y-2">
                {v.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-sunset hover:underline"
                    >
                      <En>{l.label.en} →</En>
                      <Ko>{l.label.ko} →</Ko>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Other visas */}
        <section className="mt-16 pt-12 border-t border-stone-200/60 dark:border-dark-border">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-6">
            <En>Compare other visas</En>
            <Ko>다른 비자 비교</Ko>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {visas
              .filter((x) => x.slug !== v.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/visa/${other.slug}`}
                  className="group block p-4 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sunset/40 hover:shadow-md transition-all"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sunset mb-1.5">
                    {other.code}
                  </p>
                  <p className="font-serif text-sm text-stone-900 dark:text-stone-100 group-hover:text-sunset transition-colors leading-tight">
                    <En>{other.name.en}</En>
                    <Ko>{other.name.ko}</Ko>
                  </p>
                </Link>
              ))}
          </div>
        </section>
      </div>

      {/* Structured data for Google rich results.
          - FAQPage schema: questions auto-derived from the visa's own fields
            (duration / workRights / studyRights / cost / processingTime). Zero
            new content needed; rich-result eligible immediately.
          - BreadcrumbList: shows "Home › Visa Guide › Working Holiday (417)"
            path under the page title in SERP. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqLdJson(
              [
                {
                  q: { en: `How long is the ${v.name.en} valid?` },
                  a: { en: v.duration.en },
                },
                {
                  q: { en: `Can I work on the ${v.name.en}?` },
                  a: { en: v.workRights.en },
                },
                {
                  q: { en: `Can I study on the ${v.name.en}?` },
                  a: { en: v.studyRights.en },
                },
                {
                  q: { en: `How much does the ${v.name.en} cost?` },
                  a: { en: v.cost.en },
                },
                {
                  q: { en: `How long does ${v.name.en} processing take?` },
                  a: { en: v.processingTime.en },
                },
                {
                  q: { en: `Who is the ${v.name.en} for?` },
                  a: { en: v.audience.en },
                },
              ],
              `visa/${slug}`
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLdJson([
              { name: "Home", path: "" },
              { name: "Visa Guide", path: "visa" },
              { name: v.name.en, path: `visa/${slug}` },
            ])
          ),
        }}
      />
    </div>
  );
}

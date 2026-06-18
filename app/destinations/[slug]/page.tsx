import Link from "next/link";
import { notFound } from "next/navigation";
import { En, Ko } from "@/components/LangBlocks";
import { destinations, getDestination } from "../data";
import { seoFor, breadcrumbLdJson, faqLdJson, articleLdJson } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  return {
    ...seoFor(`/destinations/${slug}`),
    title: `${d.name.en} — AussieGuides`,
    description: d.description.en,
  };
}

// Per-destination FAQs — common visitor questions. Surfaced as Google rich
// results (Q&A expandables in SERP) and as visible Q&A at the bottom of
// the page for users who scroll that far.
function buildFaqs(d: ReturnType<typeof getDestination> & {}) {
  if (!d) return [];
  return [
    {
      q: { en: `How many days do I need in ${d.name.en}?`, ko: `${d.name.ko}에는 며칠이 필요한가요?` },
      a: { en: d.suggestedDays.en, ko: d.suggestedDays.ko },
    },
    {
      q: { en: `When is the best time to visit ${d.name.en}?`, ko: `${d.name.ko}的最佳 방문 시기는 언제인가요?` },
      a: { en: d.bestTime.en, ko: d.bestTime.ko },
    },
    {
      q: { en: `How do I get to ${d.name.en} from Sydney?`, ko: `시드니에서 ${d.name.ko}까지 어떻게 가나요?` },
      a: { en: d.gettingThere.en, ko: d.gettingThere.ko },
    },
  ];
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();
  const faqs = buildFaqs(d);

  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={d.heroImg}
          alt={d.name.en}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-stone-900/20" />
        <div className="absolute inset-0 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs uppercase tracking-[0.3em] mb-6 transition-colors"
          >
            ← <En>All destinations</En><Ko>전체 여행지</Ko>
          </Link>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            {d.region}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.95] mb-4">
            <En>{d.name.en}</En>
            <Ko>{d.name.ko}</Ko>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            <En>{d.tagline.en}</En>
            <Ko>{d.tagline.ko}</Ko>
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <section className="reveal">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-3">
                <En>About this place</En>
                <Ko>이곳에 대해</Ko>
              </p>
              <p className="font-serif text-xl md:text-2xl text-stone-800 dark:text-stone-200 leading-relaxed">
                <En>{d.description.en}</En>
                <Ko>{d.description.ko}</Ko>
              </p>
            </section>

            {/* Highlights */}
            <section className="reveal">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-5">
                <En>Highlights</En>
                <Ko>하이라이트</Ko>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {d.highlights.map((h, i) => (
                  <div
                    key={h.en}
                    className={`reveal reveal-delay-${(i % 5) + 1} flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sunset/40 hover:shadow-md transition-all`}
                  >
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-sunset mt-2.5" />
                    <p className="font-serif text-base text-stone-900 dark:text-stone-100 leading-snug">
                      <En>{h.en}</En>
                      <Ko>{h.ko}</Ko>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Attractions — deeper dive with time + cost. Renders only when
                the destination has the optional `attractions` field populated,
                so older entries without it are unaffected. */}
            {d.attractions && d.attractions.length > 0 && (
              <section className="reveal">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
                  <En>Attractions</En>
                  <Ko>주요 명소</Ko>
                </p>
                <p className="text-sm text-stone-500 dark:text-stone-400 mb-5 max-w-2xl">
                  <En>What to see, how long to spend, and roughly what it costs.</En>
                  <Ko>볼 거리, 머무를 시간, 대략적인 비용.</Ko>
                </p>
                <div className="space-y-3">
                  {d.attractions.map((a, i) => (
                    <div
                      key={a.name.en}
                      className={`reveal reveal-delay-${(i % 5) + 1} p-5 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sunset/40 hover:shadow-md transition-all`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-serif text-lg md:text-xl text-stone-900 dark:text-stone-100 leading-snug">
                          <En>{a.name.en}</En>
                          <Ko>{a.name.ko}</Ko>
                        </h3>
                        <div className="shrink-0 flex flex-col items-end gap-0.5 text-[11px] uppercase tracking-wider">
                          <span className="text-sunset font-semibold">
                            <En>{a.time.en}</En>
                            <Ko>{a.time.ko}</Ko>
                          </span>
                          <span className="text-stone-500 dark:text-stone-400 font-medium">
                            <En>{a.cost.en}</En>
                            <Ko>{a.cost.ko}</Ko>
                          </span>
                        </div>
                      </div>
                      <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                        <En>{a.blurb.en}</En>
                        <Ko>{a.blurb.ko}</Ko>
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ — answers the three most-asked visitor questions */}
            <section className="reveal">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-5">
                <En>Plan your trip</En>
                <Ko>여행 계획</Ko>
              </p>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`reveal reveal-delay-${(i % 5) + 1} p-5 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border`}
                  >
                    <h2 className="font-serif text-base md:text-lg text-stone-900 dark:text-stone-100 mb-2 leading-snug">
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
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="reveal p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20 border border-amber-100/60 dark:border-amber-900/30">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-amber-700 dark:text-amber-400 mb-2">
                <En>Best time to visit</En>
                <Ko>방문 최적기</Ko>
              </p>
              <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                <En>{d.bestTime.en}</En>
                <Ko>{d.bestTime.ko}</Ko>
              </p>
            </div>

            <div className="reveal p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20 border border-emerald-100/60 dark:border-emerald-900/30">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400 mb-2">
                <En>Suggested stay</En>
                <Ko>권장 일정</Ko>
              </p>
              <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                <En>{d.suggestedDays.en}</En>
                <Ko>{d.suggestedDays.ko}</Ko>
              </p>
            </div>

            <div className="reveal p-5 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white border border-stone-800">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-2">
                <En>Getting there</En>
                <Ko>가는 방법</Ko>
              </p>
              <p className="text-stone-200 text-sm leading-relaxed">
                <En>{d.gettingThere.en}</En>
                <Ko>{d.gettingThere.ko}</Ko>
              </p>
            </div>
          </div>
        </div>

        {/* Other destinations */}
        <section className="mt-16 pt-12 border-t border-stone-200/60 dark:border-dark-border">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-6">
            <En>More places to explore</En>
            <Ko>더 많은 여행지</Ko>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {destinations.filter(x => x.slug !== d.slug).map((other, i) => (
              <Link
                key={other.slug}
                href={`/destinations/${other.slug}`}
                className={`reveal reveal-delay-${(i % 5) + 1} group block`}
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-900 shadow-sm group-hover:shadow-xl transition-shadow">
                  <img
                    src={other.cardImg}
                    alt={other.name.en}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <p className="font-serif text-sm leading-tight">
                      <En>{other.name.en}</En>
                      <Ko>{other.name.ko}</Ko>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Internal-link context — destination → trip planning */}
      <RelatedContent
        items={[
          {
            href: "/tourist",
            title: { en: "Plan your Sydney trip", ko: "시드니 여행 계획" },
            description: {
              en: `Use ${d.name.en} as a day trip or weekend escape from a longer Sydney base.`,
              ko: `${d.name.ko}을(를) 시드니 베이스에서의 당일치기 또는 주말 여행으로 활용하세요.`,
            },
          },
          {
            href: "/transport",
            title: { en: "Getting around", ko: "이동 수단" },
            description: {
              en: "Opal cards, train timetables, and car-hire tips for regional trips.",
              ko: "오팔 카드, 기차 시간표, 지방 여행을 위한 자동차 렌탈 팁.",
            },
          },
          {
            href: "/finance",
            title: { en: "Budget for the trip", ko: "여행 예산" },
            description: {
              en: "Daily costs for couples, solo travellers, and families across NSW.",
              ko: "커플, 1인 여행자, 가족의 NSW 일일 비용.",
            },
          },
        ]}
      />

      {/* JSON-LD: Article + FAQPage + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleLdJson({
              path: `destinations/${d.slug}`,
              headline: `${d.name.en} — ${d.tagline.en}`,
              description: d.description.en,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLdJson(faqs.map(f => ({ q: f.q, a: f.a })), `destinations/${d.slug}`)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLdJson([
              { name: "Home", path: "" },
              { name: "Destinations", path: "destinations" },
              { name: d.name.en, path: `destinations/${d.slug}` },
            ])
          ),
        }}
      />
    </div>
  );
}
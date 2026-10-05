import Link from "next/link";
import { pickLocale } from "@/lib/locale";
import { notFound } from "next/navigation";
import {En, Ja, Ko, Zh} from "@/components/LangBlocks";
import { destinations, getDestination } from "../data";
import { seoFor, fitTitle, fitDescription, breadcrumbLdJson, faqLdJson, articleLdJson } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";
import * as Icons from "@/components/Icons";

// Map highlight.icon string -> Icon component. Falls back to a small
// sunset bullet via `null` so adding a new highlight icon doesn't break
// the page. Strings outside the map render the original bullet — safe
// backward-compatible change.
type IconCmp = React.ComponentType<{ className?: string; strokeWidth?: number }>;
const HIGHLIGHT_ICON_MAP: Record<string, IconCmp> = {
  mountain: Icons.Mountain,
  hiking: Icons.Mountain,
  swim: Icons.Waves,
  museum: Icons.Building2,
  wine: Icons.Wine,
  sun: Icons.Sunrise,
  utensils: Icons.ReceiptAlt,
  beach: Icons.Beach,
  whale: Icons.Waves,
  ski: Icons.Mountain,
  wheat: Icons.Tree,
  car: Icons.Car,
};

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

// Unknown slugs must 404 rather than render a 200 shell with no canonical: with
// generateStaticParams present, `dynamicParams = false` makes Next return a real 404 for any
// param it did not generate, instead of streaming a soft-404 that search engines index.
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  // Extract drive time from gettingThere for the title
  const driveTime = d.gettingThere.en.match(/(\d+(?:[–-]\d+)?\s*(?:hrs?|hours?|min))/i);
  const timePrefix = driveTime ? `${driveTime[0]} from Sydney — ` : "";
  // Build a search-friendly description that front-loads the answer, then cap it: the
  // three parts together ran to 428 characters on Kiama, and Google shows about 155.
  // Split on a full stop followed by a space or the end, so "1–1.5 days" and "~2.5hrs"
  // are not cut at the decimal point -- the old split(".") produced "(1–1." live.
  const firstSentence = (s: string) =>
    s.replace(/\s+/g, " ").trim().split(/\.(?=\s|$)/)[0].replace(/\.$/, "");
  const shortDesc =
    d.description.en.length > 160 ? firstSentence(d.description.en) + "." : d.description.en;
  return {
    ...seoFor(`/destinations/${slug}`),
    title: fitTitle(`${d.name.en}${timePrefix ? `: ${timePrefix}` : " — "}Beaches, Walks & Things to Do`),
    description: fitDescription(
      `${firstSentence(d.gettingThere.en)}. ${firstSentence(d.suggestedDays.en)}. ${shortDesc}`
    ),
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
      q: { en: `When is the best time to visit ${d.name.en}?`, ko: `${d.name.ko}의 최적 방문 시기는 언제인가요?` },
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
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-stone-900/20" />
        <div className="absolute inset-0 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs uppercase tracking-[0.3em] mb-6 transition-colors"
          >
            ← <En translated>All destinations</En><Ja>すべての目的地</Ja><Zh>全部目的地</Zh><Ko>전체 여행지</Ko>
          </Link>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            {d.region}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.95] mb-4">
            <En translated>{d.name.en}</En>
            <Ja>{pickLocale("ja", d.name)}</Ja>
            <Zh>{pickLocale("zh", d.name)}</Zh>
            <Ko>{d.name.ko}</Ko>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            <En translated>{d.tagline.en}</En>
            <Ja>{pickLocale("ja", d.tagline)}</Ja>
            <Zh>{pickLocale("zh", d.tagline)}</Zh>
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
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500">
                  <En translated>About this place</En>
                  <Ja>この場所について</Ja>
                  <Zh>关于这个地方</Zh>
                  <Ko>이곳에 대해</Ko>
                </p>
                {d && d.lastUpdated && (
                  <p className="text-[10px] text-stone-500 dark:text-stone-400">
                    <En translated>Last updated: {new Date(d.lastUpdated).toLocaleDateString('en-AU')}</En>
                    <Ja>最終更新日：{new Date(d.lastUpdated).toLocaleDateString('en-AU')}</Ja>
                    <Zh>最后更新：{new Date(d.lastUpdated).toLocaleDateString('en-AU')}</Zh>
                    <Ko>최종 업데이트: {new Date(d.lastUpdated).toLocaleDateString('ko-KR')}</Ko>
                  </p>
                )}
              </div>
              <p className="font-serif text-xl md:text-2xl text-stone-800 dark:text-stone-200 leading-relaxed">
                <En translated>{d.description.en}</En>
                <Ja>{pickLocale("ja", d.description)}</Ja>
                <Zh>{pickLocale("zh", d.description)}</Zh>
                <Ko>{d.description.ko}</Ko>
              </p>
            </section>

            {/* Highlights */}
            <section className="reveal">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-5">
                <En translated>Highlights</En>
                <Ja>ハイライト</Ja>
                <Zh>亮点</Zh>
                <Ko>하이라이트</Ko>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {d.highlights.map((h, i) => {
                  const Icon = h.icon && HIGHLIGHT_ICON_MAP[h.icon];
                  return (
                    <div
                      key={h.en}
                      className={`reveal reveal-delay-${(i % 5) + 1} flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sunset/40 hover:shadow-md transition-all`}
                    >
                      {Icon ? (
                        <Icon className="shrink-0 w-5 h-5 text-sunset mt-0.5" strokeWidth={2} />
                      ) : (
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-sunset mt-2.5" />
                      )}
                      <p className="font-serif text-base text-stone-900 dark:text-stone-100 leading-snug">
                        <En translated>{h.en}</En>
                        <Ja>{pickLocale("ja", h)}</Ja>
                        <Zh>{pickLocale("zh", h)}</Zh>
                        <Ko>{h.ko}</Ko>
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Attractions — deeper dive with time + cost. Renders only when
                the destination has the optional `attractions` field populated,
                so older entries without it are unaffected. */}
            {d.attractions && d.attractions.length > 0 && (
              <section className="reveal">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
                  <En translated>Attractions</En>
                  <Ja>見どころ</Ja>
                  <Zh>景点</Zh>
                  <Ko>주요 명소</Ko>
                </p>
                <p className="text-sm text-stone-500 dark:text-stone-400 mb-5 max-w-2xl">
                  <En translated>What to see, how long to spend, and roughly what it costs.</En>
                  <Ja>何を見るか、どのくらい滞在するか、おおよその費用。</Ja>
                  <Zh>看什么、待多久，以及大致的花费。</Zh>
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
                          <En translated>{a.name.en}</En>
                          <Ja>{pickLocale("ja", a.name)}</Ja>
                          <Zh>{pickLocale("zh", a.name)}</Zh>
                          <Ko>{a.name.ko}</Ko>
                        </h3>
                        <div className="shrink-0 flex flex-col items-end gap-0.5 text-[11px] uppercase tracking-wider">
                          <span className="text-sunset font-semibold">
                            <En translated>{a.time.en}</En>
                            <Ja>{pickLocale("ja", a.time)}</Ja>
                            <Zh>{pickLocale("zh", a.time)}</Zh>
                            <Ko>{a.time.ko}</Ko>
                          </span>
                          <span className="text-stone-500 dark:text-stone-400 font-medium">
                            <En translated>{a.cost.en}</En>
                            <Ja>{pickLocale("ja", a.cost)}</Ja>
                            <Zh>{pickLocale("zh", a.cost)}</Zh>
                            <Ko>{a.cost.ko}</Ko>
                          </span>
                        </div>
                      </div>
                      <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                        <En translated>{a.blurb.en}</En>
                        <Ja>{pickLocale("ja", a.blurb)}</Ja>
                        <Zh>{pickLocale("zh", a.blurb)}</Zh>
                        <Ko>{a.blurb.ko}</Ko>
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            {/* How to get there — detailed. Expands on the sidebar summary. */}
            {d.howToGetThere && (
              <section className="reveal">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-3">
                  <En translated>How to get there</En>
                  <Ja>行き方</Ja>
                  <Zh>如何到达</Zh>
                  <Ko>가는 방법</Ko>
                </p>
                <div className="p-5 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
                  <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                    <En translated>{d.howToGetThere.en}</En>
                    <Ja>{pickLocale("ja", d.howToGetThere)}</Ja>
                    <Zh>{pickLocale("zh", d.howToGetThere)}</Zh>
                    <Ko>{d.howToGetThere.ko}</Ko>
                  </p>
                </div>
              </section>
            )}

            {/* Best time to visit — detailed season breakdown */}
            {d.bestTimeDetailed && (
              <section className="reveal">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-3">
                  <En translated>Best time to visit</En>
                  <Ja>訪れるのに最適な時期</Ja>
                  <Zh>最佳游览时间</Zh>
                  <Ko>방문 최적기</Ko>
                </p>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20 border border-amber-100/60 dark:border-amber-900/30">
                  <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                    <En translated>{d.bestTimeDetailed.en}</En>
                    <Ja>{pickLocale("ja", d.bestTimeDetailed)}</Ja>
                    <Zh>{pickLocale("zh", d.bestTimeDetailed)}</Zh>
                    <Ko>{d.bestTimeDetailed.ko}</Ko>
                  </p>
                </div>
              </section>
            )}

            {/* Top things to do — curated 5-10 picks */}
            {d.topThingsToDo && d.topThingsToDo.en.length > 0 && (() => {
              const ttd = d.topThingsToDo!;
              return (
              <section className="reveal">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-5">
                  <En translated>Top things to do</En>
                  <Ja>おすすめのアクティビティ</Ja>
                  <Zh>必做之事</Zh>
                  <Ko>추천 활동</Ko>
                </p>
                <div className="space-y-4">
                  {ttd.en.map((item, i) => (
                    <div
                      key={item.title}
                      className={`reveal reveal-delay-${(i % 5) + 1} p-5 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sunset/40 hover:shadow-md transition-all`}
                    >
                      <h3 className="font-serif text-base md:text-lg text-stone-900 dark:text-stone-100 mb-2 leading-snug">
                        <En>{i + 1}. {item.title}</En>
                        <Ko>{ttd.ko[i]?.title}</Ko>
                      </h3>
                      <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                        <En>{item.description}</En>
                        <Ko>{ttd.ko[i]?.description}</Ko>
                      </p>
                    </div>
                  ))}
                </div>
              </section>
              );
            })()}

            {/* Pro tips — insider knowledge */}
            {d.proTips && d.proTips.en.length > 0 && (() => {
              const pt = d.proTips!;
              return (
              <section className="reveal">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-5">
                  <En translated>Pro tips</En>
                  <Ja>プロのヒント</Ja>
                  <Zh>内行贴士</Zh>
                  <Ko>전문가 팁</Ko>
                </p>
                <div className="space-y-4">
                  {pt.en.map((item, i) => (
                    <div
                      key={item.tip}
                      className={`reveal reveal-delay-${(i % 5) + 1} p-5 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border`}
                    >
                      <h3 className="font-serif text-base md:text-lg text-stone-900 dark:text-stone-100 mb-2 leading-snug">
                        <En>{item.tip}</En>
                        <Ko>{pt.ko[i]?.tip}</Ko>
                      </h3>
                      <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                        <En>{item.detail}</En>
                        <Ko>{pt.ko[i]?.detail}</Ko>
                      </p>
                    </div>
                  ))}
                </div>
              </section>
              );
            })()}

            {/* FAQ — answers the three most-asked visitor questions */}
            <section className="reveal">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-5">
                <En translated>Plan your trip</En>
                <Ja>旅の計画</Ja>
                <Zh>规划你的行程</Zh>
                <Ko>여행 계획</Ko>
              </p>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`reveal reveal-delay-${(i % 5) + 1} p-5 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border`}
                  >
                    <h2 className="font-serif text-base md:text-lg text-stone-900 dark:text-stone-100 mb-2 leading-snug">
                      <En translated>{faq.q.en}</En>
                      <Ja>{pickLocale("ja", faq.q)}</Ja>
                      <Zh>{pickLocale("zh", faq.q)}</Zh>
                      <Ko>{faq.q.ko}</Ko>
                    </h2>
                    <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed">
                      <En translated>{faq.a.en}</En>
                      <Ja>{pickLocale("ja", faq.a)}</Ja>
                      <Zh>{pickLocale("zh", faq.a)}</Zh>
                      <Ko>{faq.a.ko}</Ko>
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar — logistics first (Getting there is the first implicit
              question after choosing a destination). Best time + suggested
              stay follow as day-planning details. */}
          <div className="space-y-5">
            <div className="reveal p-5 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white border border-stone-800">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-2">
                <En translated>Getting there</En>
                <Ja>アクセス</Ja>
                <Zh>如何前往</Zh>
                <Ko>가는 방법</Ko>
              </p>
              <p className="text-stone-200 text-sm leading-relaxed">
                <En translated>{d.gettingThere.en}</En>
                <Ja>{pickLocale("ja", d.gettingThere)}</Ja>
                <Zh>{pickLocale("zh", d.gettingThere)}</Zh>
                <Ko>{d.gettingThere.ko}</Ko>
              </p>
            </div>

            <div className="reveal p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20 border border-amber-100/60 dark:border-amber-900/30">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-amber-700 dark:text-amber-400 mb-2">
                <En translated>Best time to visit</En>
                <Ja>訪れるのに最適な時期</Ja>
                <Zh>最佳游览时间</Zh>
                <Ko>방문 최적기</Ko>
              </p>
              <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                <En translated>{d.bestTime.en}</En>
                <Ja>{pickLocale("ja", d.bestTime)}</Ja>
                <Zh>{pickLocale("zh", d.bestTime)}</Zh>
                <Ko>{d.bestTime.ko}</Ko>
              </p>
            </div>

            <div className="reveal p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20 border border-emerald-100/60 dark:border-emerald-900/30">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400 mb-2">
                <En translated>Suggested stay</En>
                <Ja>おすすめの滞在期間</Ja>
                <Zh>建议停留时间</Zh>
                <Ko>권장 일정</Ko>
              </p>
              <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                <En translated>{d.suggestedDays.en}</En>
                <Ja>{pickLocale("ja", d.suggestedDays)}</Ja>
                <Zh>{pickLocale("zh", d.suggestedDays)}</Zh>
                <Ko>{d.suggestedDays.ko}</Ko>
              </p>
            </div>
          </div>
        </div>

        {/* Other destinations */}
        <section className="mt-16 pt-12 border-t border-stone-200/60 dark:border-dark-border">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-6">
            <En translated>More places to explore</En>
            <Ja>もっと探せる場所</Ja>
            <Zh>更多值得探索的地方</Zh>
            <Ko>더 많은 여행지</Ko>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {(d && d.relatedDestinations 
              ? d.relatedDestinations.map(slug => destinations.find(dest => dest.slug === slug)).filter(Boolean)
              : destinations.filter(x => x.slug !== d?.slug).slice(0, 5)
            ).map((other, i) => (
              other && (
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
                        <En translated>{other.name.en}</En>
                        <Ja>{pickLocale("ja", other.name)}</Ja>
                        <Zh>{pickLocale("zh", other.name)}</Zh>
                        <Ko>{other.name.ko}</Ko>
                      </p>
                    </div>
                  </div>
                </Link>
              )
            ))}
          </div>
        </section>
      </div>

      {/* Internal-link context — destination → trip planning */}
      <RelatedContent
        items={[
          {
            href: "/tourist",
            title: { en: "Plan your Sydney trip", ja: "シドニー旅行を計画する", zh: "规划你的悉尼之行", ko: "시드니 여행 계획" },
            // Personalise by trip length: day/weekend copy reads as a
            // specific invitation, not a generic "use X as a trip".
            // Korean copy mirrors the same intent.
            description: {
              en: (() => {
                if (d.tripLength === "day") {
                  return `Build a ${d.name.en} day trip out of a Sydney base — pick the train, pick the morning, pick the lookout.`;
                }
                if (d.tripLength === "weekend") {
                  return `Plan a ${d.name.en} weekend from Sydney — overnight, two meals, the main thing you came for, and a Sunday-morning walk back.`;
                }
                if (d.tripLength === "longer") {
                  return `${d.name.en} is worth 3+ days — a longer stay lets you catch the second-day-favourite spots that day-trippers miss.`;
                }
                return `${d.name.en} is a real trip — fly or drive, give it a week, and slow down enough to actually enjoy the place.`;
              })(),
              ko: (() => {
                if (d.tripLength === "day") {
                  return `시드니 베이스에서 ${d.name.ko} 당일치기 — 기차, 아침 일정, 주요 전망대까지 짜보세요.`;
                }
                if (d.tripLength === "weekend") {
                  return `시드니에서 ${d.name.ko} 주말 여행 — 1박, 두 끼, 핵심 장소, 그리고 일요일 아침 산책.`;
                }
                if (d.tripLength === "longer") {
                  return `${d.name.ko}은 3일 이상 충분 — 긴 일정에서만 보이는 명소가 있습니다.`;
                }
                return `${d.name.ko}은 진짜 여행 — 항공 또는 운전으로, 일주일을 잡고 천천히 즐기세요.`;
              })(),
            },
          },
          {
            href: "/transport",
            title: { en: "Getting around", ja: "移動手段", zh: "出行交通", ko: "이동 수단" },
            description: {
              en: "Opal cards, train timetables, and car-hire tips for regional trips.", ja: "Opalカード、電車の時刻表、地方旅行のためのレンタカーのヒント。", zh: "Opal卡、火车时刻表，以及地区旅行的租车建议。",
              ko: "오팔 카드, 기차 시간표, 지방 여행을 위한 자동차 렌탈 팁.",
            },
          },
          {
            href: "/finance",
            title: { en: "Budget for the trip", ja: "旅行の予算", zh: "旅行预算", ko: "여행 예산" },
            description: {
              en: "Daily costs for couples, solo travellers, and families across NSW.", ja: "カップル、単身旅行者、家族のNSW各地での1日あたりの費用。", zh: "情侣、独行旅客和家庭在新南威尔士州各地的每日开销。",
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
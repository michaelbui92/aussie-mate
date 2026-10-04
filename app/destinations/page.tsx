import Link from "next/link";
import { pickLocale } from "@/lib/locale";
import { destinations } from "./data";
import {En, Ja, Ko, Zh} from "@/components/LangBlocks";
import { seoFor, withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";
import TripLengthFilter from "@/components/TripLengthFilter";

// Trip-length filter — picked from data shape + sticky nav layout.
// Mirrors the order used by the new TripLengthFilter client component
// (which highlights the active pill as the user scrolls).
type TripLength = "weekend" | "day" | "longer" | "far";
const TRIP_LABELS: Record<TripLength, { en: string; ko: string; ja?: string; zh?: string; hint: { en: string; ko: string; ja?: string; zh?: string } }> = {
  weekend: { en: "Weekend trip", ko: "주말 여행", hint: { en: "2–3 hours from Sydney", ja: "シドニーから2–3時間", zh: "距悉尼2–3小时", ko: "시드니에서 2~3시간" } },
  day:     { en: "Day trip",     ko: "당일치기",   hint: { en: "Under 2 hours from Sydney", ja: "シドニーから2時間以内", zh: "距悉尼2小时以内", ko: "시드니에서 2시간 이내" } },
  longer:  { en: "3+ days",      ko: "3일 이상",   hint: { en: "Worth a longer stay", ja: "ゆっくり滞在する価値あり", zh: "值得多住几天", ko: "여유 있는 일정 추천" } },
  far:     { en: "Big trip",     ko: "장거리",     hint: { en: "5+ hours or fly", ja: "5時間以上または飛行機", zh: "5小时以上或乘飞机", ko: "5시간 이상 또는 항공" } },
};

const TRIP_ORDER: TripLength[] = ["day", "weekend", "longer", "far"];

export const metadata = withSeo(
  {

  ...seoFor("/destinations"),
  title: "Places to Go in NSW — Best Destinations, Beaches, Mountains & Wine Country | AussieGuides",
  description: "Discover the best places to visit in NSW — from Sydney Harbour to the Blue Mountains, Hunter Valley wine country, Jervis Bay beaches, and Byron Bay. Travel tips, drive times, and day trip guides.",
  },
  "/destinations"
);

export default function DestinationsPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Header */}
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Destinations</En>
            <Ja>目的地</Ja>
            <Zh>目的地</Zh>
            <Ko>주요 여행지</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En translated>Places to go</En>
            <Ja>行くべき場所</Ja>
            <Zh>值得去的地方</Zh>
            <Ko>가볼 만한 곳</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En translated>From white-sand beaches two hours south to world-class wine country and ancient mountains. Every destination here is reachable from Sydney — pick one that fits your trip.</En>
            <Ja>南へ2時間の白砂のビーチから、世界級のワイン産地、古き山々まで。ここにあるすべての目的地はシドニーから行けます — 旅程に合う場所を選びましょう。</Ja>
            <Zh>从南边两小时车程的白沙滩，到世界级葡萄酒产区和古老山脉。这里的每个目的地都能从悉尼到达——挑一个适合你行程的吧。</Zh>
            <Ko>남쪽 2시간 거리의 하얀 모래 해변부터 세계적 와인 산지와 고산맥까지. 이곳의 모든 여행지는 시드니에서 갈 수 있습니다 — 일정에 맞는 곳을 골라보세요.</Ko>
          </p>
        </div>
      </header>

      {/* Trip-count + destination count band — sets expectation for the
          scroll time ahead. */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-2">
        <p className="text-xs text-stone-500 dark:text-stone-400">
          <En translated>{destinations.length} places to explore — scroll or use the filter above.</En>
          <Ja>{destinations.length} か所の見どころ — スクロールするか、上のフィルターをご利用ください。</Ja>
          <Zh>{destinations.length} 个目的地 — 滚动浏览或使用上方的筛选器。</Zh>
          <Ko>{destinations.length}곳의 여행지 — 스크롤하거나 위 필터를 사용하세요.</Ko>
        </p>
      </div>

      {/* Trip-length filter chips — sticky, with active-pill indicator
          driven by IntersectionObserver (see TripLengthFilter.tsx). */}
      <nav
        aria-label="Filter destinations by trip length"
        className="border-y border-stone-200/60 dark:border-dark-border bg-white/60 dark:bg-dark-surface/60 backdrop-blur sticky top-0 z-10"
      >
        <TripLengthFilter />
      </nav>

      {/* Destination grid — grouped by trip length */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-14">
        {TRIP_ORDER.map((len) => {
          const items = destinations.filter((d) => d.tripLength === len);
          if (!items.length) return null;
          return (
            <section key={len} id={len} className="scroll-mt-20">
              <div className="mb-5 md:mb-7 reveal">
                <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100">
                  <En translated>{TRIP_LABELS[len].en}</En>
                  <Ja>{pickLocale("ja", TRIP_LABELS[len])}</Ja>
                  <Zh>{pickLocale("zh", TRIP_LABELS[len])}</Zh>
                  <Ko>{TRIP_LABELS[len].ko}</Ko>
                </h2>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                  <En translated>{TRIP_LABELS[len].hint.en}</En>
                  <Ja>{pickLocale("ja", TRIP_LABELS[len].hint)}</Ja>
                  <Zh>{pickLocale("zh", TRIP_LABELS[len].hint)}</Zh>
                  <Ko>{TRIP_LABELS[len].hint.ko}</Ko>
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
                {items.map((d, i) => (
                  <Link
                    key={d.slug}
                    href={`/destinations/${d.slug}`}
                    className={`reveal reveal-delay-${(i % 5) + 1} group block relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-900 shadow-md hover:shadow-2xl transition-shadow`}
                  >
                    <img
                      src={d.cardImg}
                      alt={d.name.en}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/80" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70 mb-2">
                        {d.region}
                      </p>
                      <h3 className="font-serif text-2xl mb-1.5 leading-tight">
                        <En translated>{d.name.en}</En>
                        <Ja>{pickLocale("ja", d.name)}</Ja>
                        <Zh>{pickLocale("zh", d.name)}</Zh>
                        <Ko>{d.name.ko}</Ko>
                      </h3>
                      <p className="text-white/75 text-xs leading-relaxed">
                        <En translated>{d.tagline.en}</En>
                        <Ja>{pickLocale("ja", d.tagline)}</Ja>
                        <Zh>{pickLocale("zh", d.tagline)}</Zh>
                        <Ko>{d.tagline.ko}</Ko>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Contextual next-steps — internal link graph */}
      <RelatedContent
        items={[
          {
            href: "/tourist",
            title: { en: "Plan your trip", ja: "旅行を計画する", zh: "规划你的行程", ko: "여행 계획" },
            description: {
              en: "Itineraries, transport passes, and the best weeks to visit.", ja: "旅程、交通パス、そして訪れるのに最適な週。", zh: "行程安排、交通通票，以及最佳到访周次。",
              ko: "여행 일정, 교통 패스, 그리고 방문 최적 주간.",
            },
          },
          {
            href: "/transport",
            title: { en: "Getting around", ja: "移動手段", zh: "出行交通", ko: "이동 수단" },
            description: {
              en: "Opal cards, train tickets, and how to reach each destination cheaply.", ja: "オパールカード、電車の切符、そして各目的地へ安く行く方法。", zh: "澳宝卡、火车票，以及如何省钱地抵达各个目的地。",
              ko: "오팔 카드, 기차표, 그리고 각 여행지까지 저렴하게 가는 법.",
            },
          },
          {
            href: "/finance",
            title: { en: "Budgeting", ja: "予算", zh: "预算", ko: "예산" },
            description: {
              en: "Daily costs, weekend trip totals, and where to splurge vs save.", ja: "1日の費用、週末旅行の総額、そして贅沢すべきところと節約すべきところ。", zh: "每日开销、周末旅行总花费，以及在哪些地方值得花钱、哪些地方可以省。",
              ko: "일일 비용, 주말 여행 총액, 그리고 어디에 쓰고 어디에 아낄지.",
            },
          },
        ]}
      />
    </div>
  );
}
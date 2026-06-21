import Link from "next/link";
import { destinations } from "./data";
import { En, Ko } from "@/components/LangBlocks";
import { seoFor, withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";

// How far / how long — the user's #1 question after "where?". Drives the
// filter pills below.
type TripLength = "weekend" | "day" | "longer" | "far";
const TRIP_LABELS: Record<TripLength, { en: string; ko: string; hint: { en: string; ko: string } }> = {
  weekend: { en: "Weekend trip", ko: "주말 여행", hint: { en: "2–3 hours from Sydney", ko: "시드니에서 2~3시간" } },
  day:     { en: "Day trip",     ko: "당일치기",   hint: { en: "Under 2 hours from Sydney", ko: "시드니에서 2시간 이내" } },
  longer:  { en: "3+ days",      ko: "3일 이상",   hint: { en: "Worth a longer stay", ko: "여유 있는 일정 추천" } },
  far:     { en: "Big trip",     ko: "장거리",     hint: { en: "5+ hours or fly", ko: "5시간 이상 또는 항공" } },
};

const TRIP_ORDER: TripLength[] = ["day", "weekend", "longer", "far"];

export const metadata = withSeo(
  {

  ...seoFor("/destinations"),
  title: "Places to Go — AussieGuides",
  description: "Discover the best places to visit across NSW — beaches, mountains, wine country, and coastal towns. Pick one and start planning.",
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
            <En>Destinations</En>
            <Ko>주요 여행지</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En>Places to go</En>
            <Ko>가볼 만한 곳</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En>From white-sand beaches two hours south to world-class wine country and ancient mountains. Every destination here is reachable from Sydney — pick one that fits your trip.</En>
            <Ko>남쪽 2시간 거리의 하얀 모래 해변부터 세계적 와인 산지와 고산맥까지. 이곳의 모든 여행지는 시드니에서 갈 수 있습니다 — 일정에 맞는 곳을 골라보세요.</Ko>
          </p>
        </div>
      </header>

      {/* Trip-length filter chips — links to anchors below for quick scanning */}
      <nav
        aria-label="Filter destinations by trip length"
        className="border-b border-stone-200/60 dark:border-dark-border bg-white/60 dark:bg-dark-surface/60 backdrop-blur sticky top-0 z-10"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 overflow-x-auto">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400 shrink-0 mr-1">
            <En>Trip</En>
            <Ko>일정</Ko>
          </span>
          {TRIP_ORDER.map((len) => (
            <a
              key={len}
              href={`#${len}`}
              className="shrink-0 inline-flex items-center gap-1.5 px-3 h-9 rounded-full bg-stone-100 dark:bg-darkbg text-stone-700 dark:text-stone-300 text-xs font-medium hover:bg-sunset hover:text-white transition-colors"
            >
              <En>{TRIP_LABELS[len].en}</En>
              <Ko>{TRIP_LABELS[len].ko}</Ko>
            </a>
          ))}
        </div>
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
                  <En>{TRIP_LABELS[len].en}</En>
                  <Ko>{TRIP_LABELS[len].ko}</Ko>
                </h2>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                  <En>{TRIP_LABELS[len].hint.en}</En>
                  <Ko>{TRIP_LABELS[len].hint.ko}</Ko>
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
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
                        <En>{d.name.en}</En>
                        <Ko>{d.name.ko}</Ko>
                      </h3>
                      <p className="text-white/75 text-xs leading-relaxed">
                        <En>{d.tagline.en}</En>
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

      {/* Experiences — what kind of trip are you after */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="text-center mb-8 reveal">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset mb-2">
            <En>Find experiences, not just places</En>
            <Ko>장소가 아닌 경험을 찾아서</Ko>
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100">
            <En>Make memories, not itineraries</En>
            <Ko>일정표가 아닌 추억을</Ko>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Beaches", koTitle: "해변", blurb: "Bondi, Manly, ocean pools & coastal walks.", koBlurb: "본다이, 맨리, 오션풀, 해안 산책로까지.", href: "/experiences/beaches", accent: "from-cyan-500 to-sky-600" },
            { title: "Wildlife", koTitle: "야생동물", blurb: "Taronga Zoo, national parks & wild encounters.", koBlurb: "타롱가 동물원, 국립공원, 야생 동물 만남.", href: "/experiences/wildlife", accent: "from-emerald-500 to-teal-600" },
            { title: "Food & Wine", koTitle: "식음료", blurb: "Newtown eats, diverse cuisines & Sydney's best bites.", koBlurb: "뉴타운 맛집, 다양한 음식 문화, 시드니 최고의 맛.", href: "/experiences/food", accent: "from-rose-500 to-orange-500" },
            { title: "Adventure", koTitle: "어드벤처", blurb: "Hiking, mountain biking & coastal cliff walks.", koBlurb: "하이킹, 산악자전거, 해안 절벽 산책.", href: "/experiences/adventure", accent: "from-sky-500 to-indigo-600" },
            { title: "Culture", koTitle: "문화", blurb: "Chinatown, Cabramatta, Burwood, Strathfield — Sydney's multicultural soul.", koBlurb: "차이나타운, 카브라마타, 버우드, 스트라스필드 — 다문화 시드니의 영혼.", href: "/experiences/culture", accent: "from-amber-500 to-yellow-600" },
            { title: "Road Trips", koTitle: "로드트립", blurb: "Wollongong, Newcastle, Blue Mountains — plan your escape.", koBlurb: "울런공, 뉴캐슬, 블루마운틴 — 탈출 계획을 세우세요.", href: "/experiences/road-trips", accent: "from-stone-500 to-stone-700" },
          ].map((t, i) => (
            <Link
              key={t.title}
              href={t.href}
              className={`reveal reveal-delay-${(i % 5) + 1} group relative overflow-hidden rounded-2xl p-6 md:p-7 min-h-[200px] flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300 shadow-lg hover:shadow-2xl`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.accent} opacity-90 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <h3 className="font-serif text-2xl mb-2 text-white">
                  <En>{t.title}</En>
                  <Ko>{t.koTitle}</Ko>
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  <En>{t.blurb}</En>
                  <Ko>{t.koBlurb}</Ko>
                </p>
              </div>
              <span className="relative mt-4 text-white/80 text-xs font-medium uppercase tracking-widest group-hover:text-white transition-colors">
                <En>Explore</En>
                <Ko>둘러보기</Ko>
                <span className="ml-2 transition-transform group-hover:translate-x-1 inline-block">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Contextual next-steps — internal link graph */}
      <RelatedContent
        items={[
          {
            href: "/tourist",
            title: { en: "Plan your trip", ko: "여행 계획" },
            description: {
              en: "Itineraries, transport passes, and the best weeks to visit.",
              ko: "여행 일정, 교통 패스, 그리고 방문 최적 주간.",
            },
          },
          {
            href: "/transport",
            title: { en: "Getting around", ko: "이동 수단" },
            description: {
              en: "Opal cards, train tickets, and how to reach each destination cheaply.",
              ko: "오팔 카드, 기차표, 그리고 각 여행지까지 저렴하게 가는 법.",
            },
          },
          {
            href: "/finance",
            title: { en: "Budgeting", ko: "예산" },
            description: {
              en: "Daily costs, weekend trip totals, and where to splurge vs save.",
              ko: "일일 비용, 주말 여행 총액, 그리고 어디에 쓰고 어디에 아낄지.",
            },
          },
        ]}
      />
    </div>
  );
}
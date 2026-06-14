import Link from "next/link";
import { destinations } from "./data";
import { En, Ko } from "@/components/LangBlocks";

export const metadata = {
  title: "Places to Go — AussieMate",
  description: "Discover the best places to visit across Australia — from the Blue Mountains to Sydney Harbour.",
};

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
            <En>Six iconic Australian destinations, from world-class beaches to mountain adventures. Pick one and start planning.</En>
            <Ko>세계적 해변에서 산악 어드벤처까지 — 6개의 호주 상징 여행지. 하나를 선택하고 계획하세요.</Ko>
          </p>
        </div>
      </header>

      {/* Destination grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {destinations.map((d, i) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className={`reveal reveal-delay-${(i % 5) + 1} group block relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-900 shadow-md hover:shadow-2xl transition-shadow`}
            >
              <img
                src={d.cardImg}
                alt={d.name.en}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/80" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70 mb-2">
                  <En>{d.region}</En>
                  <Ko>{d.region}</Ko>
                </p>
                <h2 className="font-serif text-2xl mb-1.5 leading-tight">
                  <En>{d.name.en}</En>
                  <Ko>{d.name.ko}</Ko>
                </h2>
                <p className="text-white/75 text-xs leading-relaxed">
                  <En>{d.tagline.en}</En>
                  <Ko>{d.tagline.ko}</Ko>
                </p>
              </div>
            </Link>
          ))}
        </div>
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
            { title: "Beaches", koTitle: "해변", blurb: "Bondi, Manly, ocean pools & coastal walks.", koBlurb: "본다이, 맨리, 오션풀, 해안 산책로까지.", href: "/destinations/beaches", accent: "from-cyan-500 to-sky-600" },
            { title: "Wildlife", koTitle: "야생동물", blurb: "Taronga Zoo, national parks & wild encounters.", koBlurb: "타롱가 동물원, 국립공원, 야생 동물 만남.", href: "/destinations/wildlife", accent: "from-emerald-500 to-teal-600" },
            { title: "Food & Wine", koTitle: "식음료", blurb: "Newtown eats, diverse cuisines & Sydney's best bites.", koBlurb: "뉴타운 맛집, 다양한 음식 문화, 시드니 최고의 맛.", href: "/destinations/food", accent: "from-rose-500 to-orange-500" },
            { title: "Adventure", koTitle: "어드벤처", blurb: "Ski fields, mountain bikes, ocean swims.", koBlurb: "스키장, 산악자전거, 바다 수영.", href: "/destinations/snowy-mountains", accent: "from-sky-500 to-indigo-600" },
            { title: "Culture", koTitle: "문화", blurb: "Indigenous heritage, galleries, festivals.", koBlurb: "원주민 유산, 미술관, 축제.", href: "/resources", accent: "from-amber-500 to-yellow-600" },
            { title: "Road Trips", koTitle: "로드트립", blurb: "Pacific Coast, Great Ocean Road, outback.", koBlurb: "태평양 해안, 그레이트오션로드, 아웃백.", href: "/destinations/south-coast", accent: "from-stone-500 to-stone-700" },
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
    </div>
  );
}

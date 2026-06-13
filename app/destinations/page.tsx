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
    </div>
  );
}

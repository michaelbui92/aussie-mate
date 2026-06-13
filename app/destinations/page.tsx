import Link from "next/link";
import { destinations } from "./data";
import { ICONS } from "./icons";
import { En, Ko } from "@/components/LangBlocks";

export const metadata = {
  title: "Places to Go — AussieMate",
  description: "Discover the best places to visit across Australia — from the Blue Mountains to Sydney Harbour.",
};

export default function DestinationsPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <div className="bg-stone-900 border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <p className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-2">
            <En>Destinations</En>
            <Ko>주요 여행지</Ko>
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            <En>Places to go</En>
            <Ko>가볼 만한 곳</Ko>
          </h1>
          <p className="text-stone-400 max-w-lg">
            <En>Six iconic Australian destinations, from world-class beaches to mountain adventures. Pick one and start planning.</En>
            <Ko>세계적 해변에서 산악 어드벤처까지 — 6개의 호주 상징 여행지. 하나를 선택하고 계획하세요.</Ko>
          </p>
        </div>
      </div>

      {/* Destination cards */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group block bg-white border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] overflow-hidden hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.cardImg}
                  alt={d.name.en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className={`absolute top-3 right-3 w-3 h-3 ${d.accentColor} border-2 border-white rounded-full`} />
                <div className="absolute bottom-3 left-3">
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/70">
                    <En>{d.region}</En>
                    <Ko>{d.region}</Ko>
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="font-black text-lg text-stone-900 mb-1">
                  <En>{d.name.en}</En>
                  <Ko>{d.name.ko}</Ko>
                </h2>
                <p className="text-stone-500 text-sm leading-snug">
                  <En>{d.tagline.en}</En>
                  <Ko>{d.tagline.ko}</Ko>
                </p>
                <div className="flex items-center gap-1 mt-3 text-amber-600 font-black text-xs group-hover:translate-x-1 transition-transform">
                  <En>Explore →</En>
                  <Ko>둘러보기 →</Ko>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";
import { notFound } from "next/navigation";
import { En, Ko } from "@/components/LangBlocks";
import { destinations, getDestination } from "../data";

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  return {
    title: `${d.name.en} — AussieMate`,
    description: d.description.en,
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  return (
    <div className="bg-stone-900 min-h-screen">
      {/* Back */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <Link href="/destinations" className="inline-flex items-center gap-2 text-stone-500 hover:text-amber-400 font-black text-sm transition-colors">
          ← <En>All destinations</En><Ko>전체 여행지</Ko>
        </Link>
      </div>

      {/* Hero */}
      <div className="relative min-h-[420px] overflow-hidden mt-4">
        <img src={d.heroImg} alt={d.name.en} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/50 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 pt-8 pb-10">
          <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-3">
            <En>{d.region}</En>
            <Ko>{d.region}</Ko>
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-none mb-3 drop-shadow-lg">
            <En>{d.name.en}</En>
            <Ko>{d.name.ko}</Ko>
          </h1>
          <p className="text-white/60 text-sm font-medium">
            <En>{d.tagline.en}</En>
            <Ko>{d.tagline.ko}</Ko>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-6">
              <h2 className="text-xs font-black uppercase tracking-widest text-stone-500 mb-3">
                <En>About this place</En>
                <Ko>이곳에 대해</Ko>
              </h2>
              <p className="text-stone-700 leading-relaxed text-sm">
                <En>{d.description.en}</En>
                <Ko>{d.description.ko}</Ko>
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-6">
              <h2 className="text-xs font-black uppercase tracking-widest text-stone-500 mb-4">
                <En>Highlights</En>
                <Ko>하이라이트</Ko>
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {d.highlights.map((h) => (
                  <div key={h.en} className="p-3 bg-stone-50 border-4 border-black">
                    <p className="font-black text-xs text-stone-900 leading-tight">
                      <En>{h.en}</En>
                      <Ko>{h.ko}</Ko>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Best time */}
            <div className="bg-amber-50 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-5">
              <h3 className="text-xs font-black uppercase tracking-widest text-amber-600 mb-3">
                <En>Best time to visit</En>
                <Ko>방문 최적기</Ko>
              </h3>
              <p className="text-sm text-stone-700 font-medium">
                <En>{d.bestTime.en}</En>
                <Ko>{d.bestTime.ko}</Ko>
              </p>
            </div>

            {/* Getting there */}
            <div className="bg-stone-800 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-5">
              <h3 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-3">
                <En>Getting there</En>
                <Ko>가는 방법</Ko>
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                <En>{d.gettingThere.en}</En>
                <Ko>{d.gettingThere.ko}</Ko>
              </p>
            </div>

            {/* Other destinations */}
            <div className="bg-stone-800 border-4 border-black p-5">
              <h3 className="text-xs font-black uppercase tracking-widest text-stone-500 mb-3">
                <En>More places</En>
                <Ko>다른 여행지</Ko>
              </h3>
              <div className="space-y-2">
                {destinations.filter(x => x.slug !== d.slug).map(other => (
                  <Link
                    key={other.slug}
                    href={`/destinations/${other.slug}`}
                    className="flex items-center gap-3 group"
                  >
                    <img
                      src={other.cardImg}
                      alt={other.name.en}
                      className="w-12 h-12 object-cover border-2 border-black shrink-0"
                    />
                    <div>
                      <p className="font-black text-sm text-white group-hover:text-amber-400 transition-colors">
                        <En>{other.name.en}</En>
                        <Ko>{other.name.ko}</Ko>
                      </p>
                      <p className="text-stone-500 text-[10px]">
                        <En>{other.tagline.en}</En>
                        <Ko>{other.tagline.ko}</Ko>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link href="/destinations" className="inline-flex items-center gap-2 bg-stone-700 border-4 border-black px-6 py-3 font-black text-sm text-white hover:bg-amber-500 hover:text-stone-900 transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            ← <En>View all destinations</En><Ko>전체 여행지 보기</Ko>
          </Link>
        </div>
      </div>
    </div>
  );
}
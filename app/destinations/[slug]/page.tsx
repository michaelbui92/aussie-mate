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
    title: `${d.name.en} — AussieGuides`,
    description: d.description.en,
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={d.heroImg}
          alt={d.name.en}
          className="absolute inset-0 w-full h-full object-cover"
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
            <En>{d.region}</En>
            <Ko>{d.region}</Ko>
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
    </div>
  );
}

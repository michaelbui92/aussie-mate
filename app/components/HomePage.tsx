"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { En, Ko } from "@/components/LangBlocks";
import { SearchModal } from "@/components/SearchModal";
import AdSlot from "@/components/AdSlot";
import { destinations } from "@/destinations/data";

// Homepage restructured: persona selector moved to /journey (now a
// dedicated page with three sub-routes). The homepage is now: hero →
// two CTA cards (Journey + Aussie English) → destinations → experiences.
// Goal: less text, more visual scroll, lower friction for first-time
// visitors.

export default function HomePage() {
  // Subtle hero parallax — image moves at 40% of scroll speed
  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector(".hero-parallax") as HTMLElement | null;
      if (hero) {
        hero.style.transform = `translate3d(0, ${window.scrollY * 0.4}px, 0) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Editorial palette
  const heroImg = "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=2400&q=85"; // Sydney Opera House at dusk
  const remainingDestinations = destinations.filter(
    (d) => d.slug === "blue-mountains" || d.slug === "south-coast" || d.slug === "jervis-bay"
  );
  // Top 3 experiences to surface on the homepage. Mirrors the cards in
  // app/experiences/page.tsx — keep these in sync if the home row changes.
  const topExperiences = [
    {
      slug: "beaches",
      title: "Beaches",
      koTitle: "해변",
      blurb: "Bondi, Manly, ocean pools & coastal walks.",
      koBlurb: "본다이, 맨리, 오션풀, 해안 산책로까지.",
      cardImg: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
      href: "/experiences/beaches",
    },
    {
      slug: "wildlife",
      title: "Wildlife",
      koTitle: "야생동물",
      blurb: "Taronga Zoo, national parks & wild encounters.",
      koBlurb: "타롱가 동물원, 국립공원, 야생 동물 만남.",
      cardImg: "/kangaroo.jpg",
      href: "/experiences/wildlife",
    },
    {
      slug: "food",
      title: "Food & Wine",
      koTitle: "식음료",
      blurb: "Newtown eats, diverse cuisines & Sydney's best bites.",
      koBlurb: "뉴타운 맛집, 다양한 음식 문화, 시드니 최고의 맛.",
      cardImg: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
      href: "/experiences/food",
    },
  ];

  return (
    <div className="bg-stone-50 dark:bg-darkbg">
      {/* ============================ HERO ============================ */}
      <section className="relative h-[100svh] min-h-[680px] max-h-[1000px] overflow-hidden">
        {/* LCP hero — priority + fetchPriority="high" preloads the image so
            the largest contentful paint lands within ~1s instead of 3-4s.
            Next/Image also auto-generates srcset for different viewports. */}
        <Image
          src={heroImg}
          alt="Sydney Opera House at dusk"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={85}
          className="hero-parallax object-cover object-left md:object-center scale-105 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-7 max-w-5xl">
            <span className="block">
              <En>Aussie Guides to Sydney and beyond</En>
              <Ko>시드니와 그 너머의 Aussie Guides</Ko>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed font-light">
            <En>안녕하세요 I&apos;m Michael and I created this bilingual guide to the most beautiful places, the best experiences, and the smartest way to travel in Sydney.</En>
            <Ko>안녕하세요, 마이클입니다. 시드니에서 가장 아름다운 곳, 최고의 경험, 그리고 가장 현명한 여행법을 알려드리는 bilingual 가이드를 직접 만들었습니다.</Ko>
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/destinations"
              className="group inline-flex items-center justify-center gap-2 bg-sunset hover:bg-sunset-light text-white px-7 py-3.5 text-sm font-semibold tracking-wide transition-all rounded-full shadow-lg shadow-sunset/30 hover:shadow-xl hover:shadow-sunset/40"
            >
              <En>Explore Destinations</En>
              <Ko>여행지 둘러보기</Ko>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="/tourist"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-7 py-3.5 text-sm font-semibold tracking-wide transition-all rounded-full"
            >
              <En>Plan Your Trip</En>
              <Ko>여행 계획 세우기</Ko>
            </Link>
          </div>
        </div>
        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            <En>Scroll</En>
            <Ko>스크롤</Ko>
          </span>
          <div className="w-px h-10 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ============================ PRIMARY CTAs (Journey + Aussie English) ============================
          Two cards that surface the site's two highest-value content lanes
          for newcomers. Replaces the old persona-selector strip — the
          persona content is now on /journey with its own URLs. The CTAs
          here are small (one row on desktop, stacked on mobile) so the
          homepage stays visual. */}
      <section className="bg-white dark:bg-dark-surface border-b border-stone-200 dark:border-dark-border">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* Card 1: Journey */}
            <Link
              href="/journey"
              className="reveal reveal-delay-1 group flex items-center gap-4 p-5 md:p-6 rounded-2xl border border-stone-200 dark:border-dark-border bg-gradient-to-br from-sunset/5 via-sunset/5 to-sunset/10 dark:from-sunset/10 dark:via-sunset/5 dark:to-transparent hover:border-sunset/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-sunset/10 dark:bg-sunset/20 flex items-center justify-center text-2xl md:text-3xl">
                ✈️
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-serif text-lg md:text-xl text-stone-900 dark:text-stone-100 leading-tight mb-1">
                  <En>New to Australia?</En>
                  <Ko>호주에 처음 오셨나요?</Ko>
                </p>
                <p className="text-sm font-semibold text-sunset">
                  <En>Start here →</En>
                  <Ko>여기서 시작 →</Ko>
                </p>
              </div>
              <span className="shrink-0 text-stone-300 dark:text-stone-600 group-hover:text-sunset transition-colors text-2xl">
                →
              </span>
            </Link>

            {/* Card 2: Aussie English */}
            <Link
              href="/aussie-english"
              className="reveal reveal-delay-2 group flex items-center gap-4 p-5 md:p-6 rounded-2xl border border-stone-200 dark:border-dark-border bg-gradient-to-br from-sky-500/5 via-sky-500/5 to-sky-500/10 dark:from-sky-500/10 dark:via-sky-500/5 dark:to-transparent hover:border-sky-500/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-sky-500/10 dark:bg-sky-500/20 flex items-center justify-center text-2xl md:text-3xl">
                🗣️
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-serif text-lg md:text-xl text-stone-900 dark:text-stone-100 leading-tight mb-1">
                  <En>Stuck with English slang?</En>
                  <Ko>호주식 영어가 안 통하나요?</Ko>
                </p>
                <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                  <En>Check here →</En>
                  <Ko>여기 확인 →</Ko>
                </p>
              </div>
              <span className="shrink-0 text-stone-300 dark:text-stone-600 group-hover:text-sky-500 transition-colors text-2xl">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================ MORE DESTINATIONS ============================ */}
      <section className="bg-stone-50 dark:bg-darkbg">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-end justify-between mb-8 reveal">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset mb-2">
                <En>Destinations</En>
                <Ko>여행지</Ko>
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100">
                <En>Where to go next</En>
                <Ko>다음 여행지는?</Ko>
              </h2>
            </div>
            <Link
              href="/destinations"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-sunset hover:text-sunset-light transition-colors"
            >
              <En>View all</En>
              <Ko>전체 보기</Ko>
              <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {remainingDestinations.map((d, i) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className={`reveal reveal-delay-${(i % 5) + 1} group relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-900 shadow-md hover:shadow-2xl transition-shadow`}
              >
                <img
                  src={d.cardImg}
                  alt={d.name.en}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/80" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-white/60 mb-1.5">
                    {d.region}
                  </p>
                  <h3 className="font-serif text-2xl mb-1 leading-tight">
                    <En>{d.name.en}</En>
                    <Ko>{d.name.ko}</Ko>
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed">
                    <En>{d.tagline.en}</En>
                    <Ko>{d.tagline.ko}</Ko>
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-sunset hover:text-sunset-light transition-colors"
            >
              <En>See more destinations</En>
              <Ko>더 많은 여행지 보기</Ko>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================ TOP EXPERIENCES ============================ */}
      <section className="bg-white dark:bg-dark-surface border-y border-stone-200 dark:border-dark-border">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-end justify-between mb-8 reveal">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset mb-2">
                <En>Experiences</En>
                <Ko>경험</Ko>
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100">
                <En>Top experiences</En>
                <Ko>추천 경험</Ko>
              </h2>
            </div>
            <Link
              href="/experiences"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-sunset hover:text-sunset-light transition-colors"
            >
              <En>View all</En>
              <Ko>전체 보기</Ko>
              <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {topExperiences.map((e, i) => (
              <Link
                key={e.slug}
                href={e.href}
                className={`reveal reveal-delay-${(i % 5) + 1} group relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-900 shadow-md hover:shadow-2xl transition-shadow`}
              >
                <img
                  src={e.cardImg}
                  alt={e.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-white/60 mb-1.5">
                    <En>Experience</En>
                    <Ko>경험</Ko>
                  </p>
                  <h3 className="font-serif text-2xl mb-1 leading-tight">
                    <En>{e.title}</En>
                    <Ko>{e.koTitle}</Ko>
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed">
                    <En>{e.blurb}</En>
                    <Ko>{e.koBlurb}</Ko>
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/experiences"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-sunset hover:text-sunset-light transition-colors"
            >
              <En>See more experiences</En>
              <Ko>더 많은 경험 보기</Ko>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <AdSlot format="horizontal" />

      <SearchModal />
    </div>
  );
}

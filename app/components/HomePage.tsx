"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { En, Ko } from "@/components/LangBlocks";
import { SearchModal } from "@/components/SearchModal";
import AdSlot from "@/components/AdSlot";
import { destinations } from "@/destinations/data";

// Homepage — revamped 2026-06-22.
// Changes:
//   - Removed the persona selector + persona content card (the three stages
//     of "I'm visiting / I just got here / I call this home" used to live
//     here as a tab interface, but it was too much text near the top and
//     competed with destinations/experiences for attention).
//   - Stages now live at /journey with their own URLs and SEO.
//   - Added a slim 2-card CTA banner pointing to /journey and /aussie-english
//     so the deep content is still discoverable from the homepage.

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

      {/* ============================ ENTRY-POINT CTAs ============================
          Slim 2-card banner that surfaces the two non-obvious-but-valuable
          entry points: /journey (for people planning/relocating) and
          /aussie-english (for anyone who's heard "she'll be right" and
          wondered what just happened). Sits between hero and destinations
          so the homepage reads as: see pretty things → if you live here,
          click here. */}
      <section className="bg-stone-50 dark:bg-darkbg border-b border-stone-200/60 dark:border-dark-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* Journey CTA */}
            <Link
              href="/journey"
              className="reveal reveal-delay-1 group flex items-center justify-between gap-4 p-5 md:p-6 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sunset/40 hover:shadow-md transition-all"
            >
              <div className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset mb-1.5">
                  <En>The Journey</En>
                  <Ko>여정</Ko>
                </p>
                <h2 className="font-serif text-lg md:text-xl text-stone-900 dark:text-stone-100 leading-tight mb-1">
                  <En>New to Australia?</En>
                  <Ko>호주에 처음 오셨나요?</Ko>
                </h2>
                <p className="text-xs md:text-sm text-stone-500 dark:text-stone-400 leading-snug">
                  <En>Start here → three stages, one guide</En>
                  <Ko>여정 시작하기 → 세 단계, 하나의 가이드</Ko>
                </p>
              </div>
              <span
                aria-hidden="true"
                className="shrink-0 w-10 h-10 rounded-full bg-sunset/10 dark:bg-sunset/20 text-sunset inline-flex items-center justify-center text-lg transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>

            {/* Aussie English CTA */}
            <Link
              href="/aussie-english"
              className="reveal reveal-delay-2 group flex items-center justify-between gap-4 p-5 md:p-6 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sunset/40 hover:shadow-md transition-all"
            >
              <div className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset mb-1.5">
                  <En>Aussie English</En>
                  <Ko>호주 영어</Ko>
                </p>
                <h2 className="font-serif text-lg md:text-xl text-stone-900 dark:text-stone-100 leading-tight mb-1">
                  <En>Stuck with English slang?</En>
                  <Ko>호주 영어 슬랭이 어렵다면?</Ko>
                </h2>
                <p className="text-xs md:text-sm text-stone-500 dark:text-stone-400 leading-snug">
                  <En>Check here → 209 phrases decoded</En>
                  <Ko>확인하기 → 209개 표현 해설집</Ko>
                </p>
              </div>
              <span
                aria-hidden="true"
                className="shrink-0 w-10 h-10 rounded-full bg-sunset/10 dark:bg-sunset/20 text-sunset inline-flex items-center justify-center text-lg transition-transform group-hover:translate-x-0.5"
              >
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

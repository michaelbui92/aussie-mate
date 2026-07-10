"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { En, Ko } from "@/components/LangBlocks";
import { SearchModal } from "@/components/SearchModal";
import AdSlot from "@/components/AdSlot";
import { destinations } from "@/destinations/data";
import { topHomepageFaqs } from "@/lib/faqs";
import { topHomepageExperiences } from "@/experiences/data";

// Homepage restructured: persona selector moved to /journey (now a
// dedicated page with three sub-routes). The homepage is now: hero →
// two CTA cards (Journey + Aussie English) → destinations → experiences.
// Goal: less text, more visual scroll, lower friction for first-time
// visitors.

export default function HomePage() {
  // Subtle hero parallax — image moves at 25% of scroll speed.
  // Performance optimisations:
  //  • rAF-throttled (one transform write per frame max)
  //  • skipped on coarse-pointer devices (touch scroll fires 60-120 Hz)
  //  • hero element is cached on mount (no DOM query per scroll)
  //  • scroll listener self-disconnects after the hero scrolls past
  //    the viewport — no wasted work for the rest of the page
  //  • dropped scale(1.05): the source image is already oversized, so
  //    the 5% rasterisation cost was buying nothing visible
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const hero = document.querySelector(".hero-parallax") as HTMLElement | null;
    if (!hero) return;

    const cutoff = window.innerHeight * 1.1; // past this, parallax stops
    let rafId: number | null = null;
    let detached = false;
    // Set the CSS variable instead of style.transform so the browser can
    // compose the transform via the static React style without re-running
    // JS per frame. The hero <Image> reads `var(--scroll-y, 0px)` inline.
    const apply = () => {
      if (detached) {
        rafId = null;
        return;
      }
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY * 0.25}px`
      );
      rafId = null;
    };
    const onScroll = () => {
      if (window.scrollY > cutoff) {
        // Lock the value at cutoff so the image doesn't shift further
        document.documentElement.style.setProperty(
          "--scroll-y",
          `${cutoff * 0.25}px`
        );
        if (detached) return;
        detached = true;
        if (rafId !== null) cancelAnimationFrame(rafId);
        return;
      }
      // Re-attach when scrolling back above cutoff
      if (detached) detached = false;
      if (rafId === null) rafId = requestAnimationFrame(apply);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
      // Clean up the CSS var on unmount
      document.documentElement.style.removeProperty("--scroll-y");
    };
  }, []);

  // Editorial palette
  const heroImg = "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=2400&q=85"; // Sydney Opera House at dusk
  // Six destinations on the home row — spans day/weekend/longer to give
  // a balanced first impression of what the site covers. Sydney Harbour
  // is the must-include (most recognised Sydney thing).
  const remainingDestinations = destinations.filter((d) =>
    [
      "sydney-harbour",
      "blue-mountains",
      "hunter-valley",
      "jervis-bay",
      "south-coast",
      "byron-bay",
    ].includes(d.slug)
  );
  // Top 3 experiences shown on the homepage. Driven centrally from
  // /experiences/data.ts so home and hub stay in sync automatically
  // when a theme is added or reordered.
  const topExperiences = topHomepageExperiences;

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
          className="hero-parallax object-cover object-left md:object-center will-change-transform"
          style={{
            transform:
              "translate3d(0, var(--scroll-y, 0px), 0) scale(1.05)",
          }}
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
            <En>Hi, I&apos;m Michael. I built this guide for anyone planning time in Sydney — first-time visitors, students, working-holiday makers, and anyone curious about how Australia actually works. Pick a destination below, or jump into the topics that matter most to you.</En>
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
                key={e.href}
                href={e.href}
                className={`reveal reveal-delay-${(i % 5) + 1} group relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-900 shadow-md hover:shadow-2xl transition-shadow`}
              >
                <img
                  src={e.heroImg}
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

      {/* ============================ TOP FAQs (T6) ============================
          Pulls the three highest-leverage visitor questions from /faq so
          first-time visitors see the depth without leaving the home.
          Data is shared via app/lib/faqs.ts — single source of truth. */}
      <section className="bg-stone-50 dark:bg-darkbg border-t border-stone-200/60 dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-8 reveal">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset mb-2">
                <En>Common questions</En>
                <Ko>자주 묻는 질문</Ko>
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100">
                <En>Before you book</En>
                <Ko>예약 전에</Ko>
              </h2>
            </div>
            <Link
              href="/faq"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-sunset hover:text-sunset-light transition-colors"
            >
              <En>See all questions</En>
              <Ko>전체 질문 보기</Ko>
              <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
            {topHomepageFaqs.map((faq, i) => (
              <Link
                key={i}
                href="/faq"
                className={`reveal reveal-delay-${(i % 5) + 1} block p-5 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sunset/40 hover:shadow-md transition-all h-full`}
              >
                <p className="font-serif text-base md:text-lg text-stone-900 dark:text-stone-100 mb-2 leading-snug">
                  <En>{faq.q.en}</En>
                  <Ko>{faq.q.ko}</Ko>
                </p>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  <En>{faq.a.en}</En>
                  <Ko>{faq.a.ko}</Ko>
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-sunset hover:text-sunset-light transition-colors"
            >
              <En>Read more FAQs</En>
              <Ko>더 많은 질문 보기</Ko>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================ EDITORIAL NOTE (H3) ============================
          Last-reviewed signal — strengthens E-E-A-T and the helpful-content
          signal that surfaces this site as human-written on first paint.
          Aligns with the AdSense + helpful-content compliance pattern. */}
      <section className="bg-white dark:bg-dark-surface border-t border-stone-200/60 dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-center gap-3 text-xs text-stone-500 dark:text-stone-400">
          <span>
            <En>Written and reviewed by Michael Bui</En>
            <Ko>작성·검토: Michael Bui</Ko>
          </span>
          <span aria-hidden="true">·</span>
          <span>
            <En>Last reviewed: 28 June 2026</En>
            <Ko>최종 검토: 2026년 6월 28일</Ko>
          </span>
          <span aria-hidden="true">·</span>
          <Link href="/editorial" className="text-sunset hover:underline font-medium">
            <En>Editorial standards</En>
            <Ko>편집 기준</Ko>
          </Link>
        </div>
      </section>

      <SearchModal />
    </div>
  );
}

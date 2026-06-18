"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";
import { destinations } from "@/destinations/data";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; subtitle: string; koSubtitle: string; img: string }[] = [
  { 
    key: "visiting", 
    title: "I'm visiting", 
    koTitle: "여행 중이에요", 
    subtitle: "Holiday, working holiday, or just passing through",
    koSubtitle: "휴가, 워홀, 또는 잠시 들른 경우",
    img: "https://images.unsplash.com/photo-1523428096881-5bd79d043006?w=1200&q=80",
  },
  { 
    key: "arrived", 
    title: "I just got here", 
    koTitle: "방금 도착했어요", 
    subtitle: "First month sorted: bank, TFN, SIM, place to live",
    koSubtitle: "첫 달 셋업: 은행, TFN, SIM,거주지",
    img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80",
  },
  { 
    key: "home", 
    title: "I call this home", 
    koTitle: "여기가 내 집이에요", 
    subtitle: "Long-term Australian — work, lifestyle, finances",
    koSubtitle: "장기 호주 거주 — 직장, 생활, 재무",
    img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80",
  },
];

const topics = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", tagline: "Lease, bond, flatmates", taglineKo: "임대, 보증금, 쉐어하우스" },
  { href: "/finance", title: "Finance", titleKo: "금융", tagline: "Bank, TFN, super — first week", taglineKo: "은행, 세금, 퇴직연금" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", tagline: "Arvo, ta, no worries — decoded", taglineKo: "호주 속어 해독" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", tagline: "NRL, AFL, cricket obsession", taglineKo: "호주 스포츠의 모든 것" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", tagline: "Award wages, your rights", taglineKo: "노동자 권리와 직장 문화" },
  { href: "/weather", title: "Weather", titleKo: "날씨", tagline: "Seasons, UV, Aussie quirks", taglineKo: "계절, 자외선, 호주 날씨 특징" },
  { href: "/transport", title: "Transport", titleKo: "교통", tagline: "Opal, trains, ferries, rideshare", taglineKo: "오팔, 기차, 버스, 페리" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", tagline: "Sydney, coast, Blue Mountains", taglineKo: "시드니와 NSW 필수 명소" },
  { href: "/resources", title: "Resources", titleKo: "자료", tagline: "Medicare, Centrelink, community", taglineKo: "Medicare, TFN, 커뮤니티" },
  { href: "/visa", title: "Visa Guide", titleKo: "비자 가이드", tagline: "417, 500, 189/190, 820, 600", taglineKo: "워홀·유학·기술·파트너·방문" },
];

export default function HomePage() {
  const [active, setActive] = useState<StageKey>("visiting");

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
  const featured = destinations[4]; // Sydney Harbour
  const remainingDestinations = destinations.filter((d) => d.slug !== featured.slug);

  return (
    <div className="bg-stone-50 dark:bg-darkbg">
      {/* ============================ HERO ============================ */}
      <section className="relative h-[100svh] min-h-[680px] max-h-[1000px] overflow-hidden">
        <img
          src={heroImg}
          alt="Sydney Opera House at dusk"
          className="hero-parallax absolute inset-0 w-full h-full object-cover scale-105 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.35em] text-white/85 mb-6">
            <En>AussieGuides · Bilingual · AU/KO</En>
            <Ko>호주 메이트 · 호주 한인을 위한</Ko>
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-7 max-w-5xl">
            <span className="block">
              <En>Your Australian life guide</En>
              <Ko>호주 생활 가이드</Ko>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed font-light">
            <En>Your bilingual guide to the most beautiful places, the best experiences, and the smartest way to travel Down Under.</En>
            <Ko>호주의 가장 아름다운 곳, 최고의 경험, 그리고 가장 현명한 여행법을 알려드립니다.</Ko>
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

      {/* ============================ PERSONA SELECTOR ============================ */}
      <section className="bg-white dark:bg-dark-surface border-b border-stone-200 dark:border-dark-border">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <div className="text-center mb-8 reveal">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset mb-2">
              <En>Where are you in the journey?</En>
              <Ko>여정의 어디에 있나요?</Ko>
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100">
              <En>Choose your stage</En>
              <Ko>단계별 가이드</Ko>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {stages.map((s, i) => {
              const isActive = active === s.key;
              return (
                <button type="button"
                  key={s.key}
                  onClick={() => setActive(s.key)}
                  className={`reveal reveal-delay-${i + 1} group text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-sunset text-white border-sunset shadow-2xl scale-[1.02] ring-4 ring-sunset/30 [&_*]:!text-white"
                      : "bg-white dark:bg-dark-surface border-stone-200 dark:border-dark-border text-stone-900 dark:text-stone-100 hover:border-sunset/50 hover:shadow-lg"
                  }`}
                  style={isActive ? { color: "#ffffff" } : undefined}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`font-mono text-xs ${isActive ? "text-white/70" : "text-stone-400 dark:text-stone-500"}`}>
                      0{i + 1}
                    </span>
                    <span className={`w-2 h-2 rounded-full transition-colors ${isActive ? "bg-white" : "bg-stone-300 dark:bg-stone-700 group-hover:bg-sunset"}`} />
                  </div>
                  <h3 className={`font-serif text-2xl mb-1.5 ${isActive ? "text-white" : "text-stone-900 dark:text-stone-100"}`}>
                    <En>{s.title}</En>
                    <Ko>{s.koTitle}</Ko>
                  </h3>
                  <p className={`text-sm leading-relaxed ${isActive ? "text-white/90" : "text-stone-500 dark:text-stone-400"}`}>
                    <En>{s.subtitle}</En>
                    <Ko>{s.koSubtitle}</Ko>
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ PERSONA CONTENT ============================ */}
      <section className="bg-stone-50 dark:bg-darkbg">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <div className="bg-white dark:bg-dark-surface rounded-3xl shadow-xl shadow-stone-900/5 dark:shadow-black/30 p-6 md:p-10 border border-stone-100 dark:border-dark-border">
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>
      </section>

      {/* ============================ FEATURED DESTINATION ============================ */}
      <section className="bg-white dark:bg-dark-surface border-y border-stone-200 dark:border-dark-border">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-end justify-between mb-8 reveal">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset mb-2">
                <En>Featured this week</En>
                <Ko>이번 주 추천</Ko>
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100">
                <En>The harbour of harbours</En>
                <Ko>세계에서 가장 아름다운 항구</Ko>
              </h2>
            </div>
          </div>
          <Link
            href={`/destinations/${featured.slug}`}
            className="reveal group block relative overflow-hidden rounded-3xl aspect-[16/9] md:aspect-[21/9] shadow-2xl bg-stone-900"
          >
            <img
              src={featured.heroImg}
              alt={featured.name.en}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70 mb-3">
                {featured.region}
              </p>
              <h3 className="font-serif text-4xl md:text-6xl mb-3 leading-none">
                <En>{featured.name.en}</En>
                <Ko>{featured.name.ko}</Ko>
              </h3>
              <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed mb-5">
                <En>{featured.tagline.en}</En>
                <Ko>{featured.tagline.ko}</Ko>
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">
                <En>Read the guide</En>
                <Ko>가이드 읽기</Ko>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-1 text-sm font-medium text-sunset"
            >
              <En>View all destinations</En>
              <Ko>전체 여행지 보기</Ko>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================ TOPICS ============================ */}
      <section className="bg-stone-50 dark:bg-darkbg">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-10 reveal">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset mb-2">
              <En>All guides</En>
              <Ko>전체 가이드</Ko>
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100">
              <En>Everything you need</En>
              <Ko>필요한 모든 것</Ko>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {topics.map((t, i) => (
              <Link
                key={t.href}
                href={t.href}
                className={`reveal reveal-delay-${(i % 5) + 1} group flex items-center justify-between bg-white dark:bg-dark-surface hover:bg-sunset hover:text-white p-5 rounded-2xl border border-stone-200 dark:border-dark-border transition-all duration-300 hover:border-sunset hover:shadow-xl`}
              >
                <div>
                  <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100 group-hover:text-white transition-colors">
                    <En>{t.title}</En>
                    <Ko>{t.titleKo}</Ko>
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 group-hover:text-white/80 mt-1 transition-colors">
                    <En>{t.tagline}</En>
                    <Ko>{t.taglineKo}</Ko>
                  </p>
                </div>
                <span className="w-8 h-8 rounded-full bg-stone-100 dark:bg-darkbg group-hover:bg-white/20 flex items-center justify-center transition-colors shrink-0 ml-3">
                  <span className="text-stone-400 group-hover:text-white transition-all group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SearchModal />
    </div>
  );
}

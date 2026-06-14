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
type SeasonKey = "winter" | "spring" | "summer" | "autumn";

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

const thingsToDo: { title: string; koTitle: string; blurb: string; koBlurb: string; href: string; accent: string }[] = [
  { title: "Beaches", koTitle: "해변", blurb: "From Bondi to Hyams — find your stretch of sand.", koBlurb: "본다이에서 하임스까지 — 나만의 해변을 찾으세요.", href: "/destinations/south-coast", accent: "from-cyan-500 to-sky-600" },
  { title: "Wildlife", koTitle: "야생동물", blurb: "Kangaroos at sunrise, whales from the coast.", koBlurb: "일출의 캥거루, 해안의 고래.", href: "/destinations/blue-mountains", accent: "from-emerald-500 to-teal-600" },
  { title: "Food & Wine", koTitle: "식음료", blurb: "Hunter Valley vintages, laneway brunches.", koBlurb: "헌터밸리 와인, 골목 브런치.", href: "/destinations/hunter-valley", accent: "from-rose-500 to-orange-500" },
  { title: "Adventure", koTitle: "어드벤처", blurb: "Ski fields, mountain bikes, ocean swims.", koBlurb: "스키장, 산악자전거, 바다 수영.", href: "/destinations/snowy-mountains", accent: "from-sky-500 to-indigo-600" },
  { title: "Culture", koTitle: "문화", blurb: "Indigenous heritage, galleries, festivals.", koBlurb: "원주민 유산, 미술관, 축제.", href: "/resources", accent: "from-amber-500 to-yellow-600" },
  { title: "Road Trips", koTitle: "로드트립", blurb: "Pacific Coast, Great Ocean Road, outback.", koBlurb: "태평양 해안, 그레이트오션로드, 아웃백.", href: "/destinations/south-coast", accent: "from-stone-500 to-stone-700" },
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
];

const seasonOrder: SeasonKey[] = ["winter", "spring", "summer", "autumn"];
const seasonAccent: Record<SeasonKey, { bg: string; text: string; img: string }> = {
  winter: { bg: "bg-sky-100 dark:bg-sky-950/50", text: "text-sky-900 dark:text-sky-200", img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80" },
  spring: { bg: "bg-emerald-100 dark:bg-emerald-950/50", text: "text-emerald-900 dark:text-emerald-200", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80" },
  summer: { bg: "bg-amber-100 dark:bg-amber-950/50", text: "text-amber-900 dark:text-amber-200", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80" },
  autumn: { bg: "bg-orange-100 dark:bg-orange-950/50", text: "text-orange-900 dark:text-orange-200", img: "https://images.unsplash.com/photo-1507371341162-763b5e419408?w=800&q=80" },
};
const seasons: { key: SeasonKey; title: { en: string; ko: string }; months: string; blurb: { en: string; ko: string } }[] = [
  { key: "winter", title: { en: "Winter", ko: "겨울" }, months: "Jun · Jul · Aug", blurb: { en: "Ski season, cosy pubs, whale watching starts.", ko: "스키시즌, 아늑한 퍼브, 고래관찰 시작." } },
  { key: "spring", title: { en: "Spring", ko: "봄" }, months: "Sep · Oct · Nov", blurb: { en: "Wildflowers, baby animals, perfect hiking weather.", ko: "야생화, 새끼동물, 최적의 트레킹 날씨." } },
  { key: "summer", title: { en: "Summer", ko: "여름" }, months: "Dec · Jan · Feb", blurb: { en: "Beach every weekend, sunset ferries, festivals.", ko: "매주 해변, 일몰 페리, 축제." } },
  { key: "autumn", title: { en: "Autumn", ko: "가을" }, months: "Mar · Apr · May", blurb: { en: "Gold and red mountains, wine harvest, mild days.", ko: "금빛과 적빛 산, 와인 수확, 온화한 날." } },
];

export default function HomePage() {
  const [active, setActive] = useState<StageKey>("visiting");
  const [season, setSeason] = useState<SeasonKey>("summer");
  const activeIdx = stages.findIndex((s) => s.key === active);

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
            <En>AussieMate · Bilingual · AU/KO</En>
            <Ko>호주 메이트 · 호주 한인을 위한</Ko>
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-7 max-w-5xl">
            <span className="block">
              <En>Discover Sydney</En>
              <Ko>시드니를 발견하다</Ko>
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

      {/* ============================ THINGS TO DO ============================ */}
      <section className="bg-stone-900 dark:bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12 reveal">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset-light mb-2">
              <En>What to do</En>
              <Ko>즐길 거리</Ko>
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              <En>Make memories, not itineraries</En>
              <Ko>일정표가 아닌 추억을</Ko>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              <En>Six ways to fall in love with Australia. Pick what calls to you.</En>
              <Ko>호주에 빠지는 여섯 가지 방법. 마음이 끌리는 것을 선택하세요.</Ko>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {thingsToDo.map((t, i) => (
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
                <div className="relative mt-4 text-white/80 text-xs font-medium uppercase tracking-widest group-hover:text-white transition-colors">
                  <En>Explore</En>
                  <Ko>둘러보기</Ko>
                  <span className="ml-2 transition-transform group-hover:translate-x-1 inline-block">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ SEASONS ============================ */}
      <section className="bg-white dark:bg-dark-surface border-y border-stone-200 dark:border-dark-border">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-10 reveal">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset mb-2">
              <En>Plan around the year</En>
              <Ko>연중 계획</Ko>
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100">
              <En>When to come</En>
              <Ko>언제 방문할까</Ko>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {seasonOrder.map((key, i) => {
              const s = seasons.find((x) => x.key === key)!;
              const a = seasonAccent[key];
              const isActive = season === key;
              return (
                <button type="button"
                  key={key}
                  onClick={() => setSeason(key)}
                  className={`reveal reveal-delay-${i + 1} group text-left rounded-2xl overflow-hidden transition-all duration-300 ${
                    isActive ? "shadow-2xl scale-[1.02] ring-2 ring-sunset" : "shadow-md hover:shadow-xl"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={a.img}
                      alt={s.title.en}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute top-3 left-3 text-[9px] font-mono uppercase tracking-widest text-white/80 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                      {s.months}
                    </div>
                  </div>
                  <div className={`${a.bg} ${a.text} p-4 md:p-5`}>
                    <h3 className="font-serif text-xl md:text-2xl mb-1">
                      <En>{s.title.en}</En>
                      <Ko>{s.title.ko}</Ko>
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed opacity-80">
                      <En>{s.blurb.en}</En>
                      <Ko>{s.blurb.ko}</Ko>
                    </p>
                  </div>
                </button>
              );
            })}
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

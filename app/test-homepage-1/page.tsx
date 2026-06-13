"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; numBg: string; numColor: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", numBg: "bg-amber-400", numColor: "text-amber-900" },
  { key: "arrived", title: "I just got here", koTitle: "방금 도착했어요", numBg: "bg-emerald-400", numColor: "text-emerald-900" },
  { key: "home", title: "I call this home", koTitle: "여기가 내 집이에요", numBg: "bg-sky-400", numColor: "text-sky-900" },
];

const topics = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", tagline: "Lease, bond, flatmates", taglineKo: "임대, 보증금, 쉐어하우스", color: "bg-amber-50", accent: "text-amber-600" },
  { href: "/finance", title: "Finance", titleKo: "금융", tagline: "Bank, TFN, super — first week", taglineKo: "은행, 세금, 퇴직연금", color: "bg-emerald-50", accent: "text-emerald-600" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", tagline: "Arvo, ta, no worries — decoded", taglineKo: "호주 속어 해독", color: "bg-sky-50", accent: "text-sky-600" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", tagline: "NRL, AFL, cricket obsession", taglineKo: "호주 스포츠의 모든 것", color: "bg-orange-50", accent: "text-orange-600" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", tagline: "Award wages, your rights", taglineKo: "노동자 권리와 직장 문화", color: "bg-teal-50", accent: "text-teal-600" },
  { href: "/weather", title: "Weather", titleKo: "날씨", tagline: "Seasons, UV, Aussie quirks", taglineKo: "계절, 자외선, 호주 날씨 특징", color: "bg-indigo-50", accent: "text-indigo-600" },
  { href: "/transport", title: "Transport", titleKo: "교통", tagline: "Opal, trains, ferries, rideshare", taglineKo: "오팔, 기차, 버스, 페리", color: "bg-cyan-50", accent: "text-cyan-600" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", tagline: "Sydney, coast, Blue Mountains", taglineKo: "시드니와 NSW 필수 명소", color: "bg-amber-50", accent: "text-amber-600" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", tagline: "Weekend drives and road trips", taglineKo: "주말 드라이브와 여행", color: "bg-emerald-50", accent: "text-emerald-600" },
  { href: "/resources", title: "Resources", titleKo: "자료", tagline: "Medicare, Centrelink, community", taglineKo: "Medicare, TFN, 커뮤니티", color: "bg-stone-50", accent: "text-stone-600" },
];

// Visit NSW-style destination cards
const destinations = [
  {
    name: { en: "Blue Mountains", ko: "블루마운틴" },
    tagline: { en: "A World Heritage site with fabulous views", ko: "유네스코 세계유산, 숨멊이는 절경" },
    img: "https://images.unsplash.com/photo-1589855619221-0731a8994c38?w=800&q=80",
    href: "/beyond-sydney",
    accent: "bg-emerald-500",
  },
  {
    name: { en: "Hunter Valley", ko: "헌터 밸리" },
    tagline: { en: "World-class wines & gourmet getaways", ko: "세계적 와인과 미식 여행지" },
    img: "https://images.unsplash.com/photo-1474623809196-78d8e5f1c2e7?w=800&q=80",
    href: "/beyond-sydney",
    accent: "bg-rose-500",
  },
  {
    name: { en: "South Coast", ko: "사우스 코스트" },
    tagline: { en: "Brilliant beaches & pretty coastal towns", ko: "수려한 해변과 아담한 해안 마을" },
    img: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    href: "/beyond-sydney",
    accent: "bg-sky-500",
  },
  {
    name: { en: "Snowy Mountains", ko: "스노이 마운틴" },
    tagline: { en: "Snow adventures & Australia's highest peak", ko: "스노보드, 스키와 호주 최고봉" },
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    href: "/beyond-sydney",
    accent: "bg-sky-600",
  },
  {
    name: { en: "Sydney Harbour", ko: "시드니 하버" },
    tagline: { en: "Icons, ferries & that glorious harbour", ko: "시드니 아이콘과 하버의 스플렌더" },
    img: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=800&q=80",
    href: "/tourist",
    accent: "bg-amber-500",
  },
  {
    name: { en: "Central Coast", ko: "센트럴 코스트" },
    tagline: { en: "Eco-certified beaches & outdoor adventures", ko: "생태인증 해변과 아웃도어 어드벤처" },
    img: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&q=80",
    href: "/beyond-sydney",
    accent: "bg-teal-500",
  },
];

// Season tabs
type SeasonKey = "winter" | "spring" | "summer" | "autumn";
const seasonOrder: SeasonKey[] = ["winter", "spring", "summer", "autumn"];
const seasonColors: Record<SeasonKey, { bg: string; text: string; border: string }> = {
  winter: { bg: "bg-sky-400", text: "text-sky-900", border: "border-t-sky-400" },
  spring: { bg: "bg-emerald-400", text: "text-emerald-900", border: "border-t-emerald-400" },
  summer: { bg: "bg-amber-400", text: "text-amber-900", border: "border-t-amber-400" },
  autumn: { bg: "bg-orange-400", text: "text-orange-900", border: "border-t-orange-400" },
};

const seasons: { key: SeasonKey; title: { en: string; ko: string }; icon: string; months: string }[] = [
  { key: "winter", title: { en: "Winter", ko: "겨울" }, icon: "❄️", months: "Jun · Jul · Aug" },
  { key: "spring", title: { en: "Spring", ko: "봄" }, icon: "🌸", months: "Sep · Oct · Nov" },
  { key: "summer", title: { en: "Summer", ko: "여름" }, icon: "☀️", months: "Dec · Jan · Feb" },
  { key: "autumn", title: { en: "Autumn", ko: "가을" }, icon: "🍂", months: "Mar · Apr · May" },
];

const seasonContent: Record<SeasonKey, { en: string; ko: string; activities: { en: string; ko: string; icon: string }[] }> = {
  winter: {
    en: "Cold nights, mild days. Perfect for indoor pleasures — winery dinners, museum visits, and cosy pub meals. Up in the Snowy Mountains, it's ski season.",
    ko: "찬 밤, 온화한 낮. 실내에서 즐기는 활동에 최적 — 와이너리 디너, 박물관 방문, 아늑한 퍼브 식사. 스노이 마운틴에서는 스키 시즌.",
    activities: [
      { en: "Skiing at Perisher", ko: "Perisher 스키", icon: "⛷️" },
      { en: "Winery dinners", ko: "와이너리 디너", icon: "🍷" },
      { en: "Cosy pub meals", ko: "아늑한 퍼브", icon: "🍖" },
      { en: "Museum hopping", ko: "박물관 투어", icon: "🏛️" },
    ],
  },
  spring: {
    en: "Wildflowers bloom, baby animals appear, warmth returns. The best time to visit the outback. Windy in some areas — check the forecast.",
    ko: "야생화 피고, 새끼 동물들이 나타나고, 따뜻함이 돌아옵니다. 아웃백 방문 최적기. 일부 지역엔 바람 — 예보 확인하세요.",
    activities: [
      { en: "Wildflower drives", ko: "야생화 드라이브", icon: "🌾" },
      { en: "Coastal walks", ko: "해안 산책", icon: "🥾" },
      { en: "Blue Mountains day trip", ko: "블루마운틴 당일치기", icon: "🏔️" },
      { en: "Pick your own fruit", ko: "과일 따기", icon: "🍓" },
    ],
  },
  summer: {
    en: "Hot, humid, beach season. Christmas at the beach is completely normal. Afternoon thunderstorms are common — they pass quickly. Sun protection is essential every day.",
    ko: "덥고 습한 해변 시즌. 해변에서 크리스마스는 완전히 정상. 오후 뇌우는 흔함 — 빠르게 지나감. 자외선 차단은 매일 필수.",
    activities: [
      { en: "Beach every weekend", ko: "매주 해변", icon: "🏖️" },
      { en: "Harbour swimming", ko: "하버 수영", icon: "🏊" },
      { en: "Outdoor festivals", ko: "야외 축제", icon: "🎶" },
      { en: "Road trips", ko: "로드트리", icon: "🚗" },
    ],
  },
  autumn: {
    en: "Mild and pleasant. Prime walking weather. The Blue Mountains turn gold and red. Easter brings extra crowds — plan ahead for long weekends.",
    ko: "온화하고 쾌적. 산책 최적기. 블루마운틴이 금빛과 적금빛으로. 부활절에는 인파 증가 — 긴 연휴는 미리 계획.",
    activities: [
      { en: "Blue Mountains walks", ko: "블루마운틴 트레킹", icon: "🥾" },
      { en: "Hunter Valley wine tours", ko: "헌터 밸리 와인 투어", icon: "🍷" },
      { en: "Food & wine festivals", ko: "푸드 & 와인 축제", icon: "🍽️" },
      { en: "Whale watching", ko: "고래 관찰", icon: "🐋" },
    ],
  },
};

export default function TestHomepage1() {
  const [active, setActive] = useState<StageKey>("visiting");
  const [season, setSeason] = useState<SeasonKey>("summer");
  const activeIdx = stages.findIndex((s) => s.key === active);
  const seasonData = seasonContent[season];
  const seasonStyle = seasonColors[season];

  return (
    <>
      <div className="bg-stone-900 min-h-screen">
        {/* Full-bleed hero with Bondi surf image */}
        <div className="relative min-h-[520px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1800&q=85"
            alt="Bondi Beach, Sydney"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-stone-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-transparent to-transparent" />

          <div className="relative max-w-5xl mx-auto px-4 pt-10 pb-12">
            <div className="mb-6">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-400 mb-4">
                <En>AussieMate · Bilingual · AU/KO</En>
                <Ko>호주 메이트 · 바이링구얼 · 호주 한인</Ko>
              </p>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-3 drop-shadow-lg">
                <En>G&apos;day.<br/>Welcome<br/>home 🦘</En>
                <Ko>호주에<br/>오신 것을<br/>환영합니다</Ko>
              </h1>
              <p className="text-stone-300 text-sm font-medium max-w-sm">
                <En>Your bilingual guide to Aussie life — landing, working, living.</En>
                <Ko>호주 생활의 바이링구얼 동반자.</Ko>
              </p>
            </div>
          </div>
        </div>

        {/* Stage selector */}
        <div className="bg-amber-500 border-b-4 border-black">
          <div className="max-w-5xl mx-auto px-4 pb-6">
            <div className="grid grid-cols-3 gap-3">
              {stages.map((s, i) => {
                const isActive = active === s.key;
                return (
                  <button
                    key={s.key}
                    onClick={() => setActive(s.key)}
                    className={`flex items-center gap-3 p-4 border-4 border-black font-black text-sm transition-all ${
                      isActive
                        ? `${s.numBg} shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] -translate-y-1`
                        : "bg-amber-600 text-amber-200 hover:bg-amber-500 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                    }`}
                  >
                    <div className={`${s.numBg} ${s.numColor} font-mono text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shrink-0`}>
                      {i + 1}
                    </div>
                    <span>
                      <En>{s.title}</En>
                      <Ko>{s.koTitle}</Ko>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className={`bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 mb-8 border-t-8 ${["border-t-amber-400","border-t-emerald-400","border-t-sky-400"][activeIdx]}`}>
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>

        {/* Places to go — Visit NSW style */}
        <div className="max-w-5xl mx-auto px-4 pb-8">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-1">
                <En>Destinations</En>
                <Ko>주요 여행지</Ko>
              </p>
              <h2 className="text-2xl font-black text-white">
                <En>Places to go</En>
                <Ko>가볼 만한 곳</Ko>
              </h2>
            </div>
            <Link href="/beyond-sydney" className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
              <En>View all</En>
              <Ko>전체 보기</Ko>
              <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {destinations.map((d) => (
              <Link
                key={d.name.en}
                href={d.href}
                className="group relative overflow-hidden border-4 border-black block aspect-[4/3] hover:-translate-y-0.5 transition-all"
              >
                <img
                  src={d.img}
                  alt={d.name.en}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className={`absolute top-3 right-3 w-3 h-3 ${d.accent} border-2 border-white rounded-full`} />
                  <h3 className="font-black text-white text-sm leading-tight">
                    <En>{d.name.en}</En>
                    <Ko>{d.name.ko}</Ko>
                  </h3>
                  <p className="text-white/70 text-[10px] font-medium leading-tight mt-0.5">
                    <En>{d.tagline.en}</En>
                    <Ko>{d.tagline.ko}</Ko>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Choose your season */}
        <div className="max-w-5xl mx-auto px-4 pb-8">
          <div className="bg-stone-800 border-4 border-black">
            {/* Season header */}
            <div className="border-b-4 border-black px-5 pt-5 pb-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-stone-500 mb-1">
                <En>Plan your trip</En>
                <Ko>여행 계획</Ko>
              </p>
              <h2 className="text-2xl font-black text-white">
                <En>Choose your season</En>
                <Ko>계절별 추천</Ko>
              </h2>
            </div>

            {/* Season tabs */}
            <div className="flex border-b-4 border-black">
              {seasons.map((s) => {
                const isActive = season === s.key;
                const style = seasonColors[s.key];
                return (
                  <button
                    key={s.key}
                    onClick={() => setSeason(s.key)}
                    className={`flex-1 flex flex-col items-center py-3 px-2 border-r-4 border-black last:border-r-0 font-black text-xs transition-all ${
                      isActive
                        ? `${style.bg} ${style.text}`
                        : "bg-stone-800 text-stone-500 hover:bg-stone-700 hover:text-stone-300"
                    }`}
                  >
                    <span className="text-lg mb-0.5">{s.icon}</span>
                    <span><En>{s.title.en}</En><Ko>{s.title.ko}</Ko></span>
                    <span className="text-[9px] font-mono opacity-50">{s.months}</span>
                  </button>
                );
              })}
            </div>

            {/* Season content */}
            <div className="p-5">
              <div className={`border-l-4 ${seasonStyle.border} pl-4 mb-4`}>
                <p className="text-sm text-stone-300 leading-relaxed">
                  <En>{seasonData.en}</En>
                  <Ko>{seasonData.ko}</Ko>
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {seasonData.activities.map((a) => (
                  <div key={a.en} className={`${seasonStyle.bg} border-4 border-black p-3 flex flex-col items-center text-center gap-1`}>
                    <span className="text-xl">{a.icon}</span>
                    <span className={`font-black text-xs ${seasonStyle.text}`}>
                      <En>{a.en}</En>
                      <Ko>{a.ko}</Ko>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Topic grid */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {topics.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className={`group block ${t.color} border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`font-black text-lg ${t.accent}`}>
                    <En>{t.title}</En>
                    <Ko>{t.titleKo}</Ko>
                  </h3>
                  <svg className="w-4 h-4 text-black/30 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <p className={`text-sm font-medium ${t.accent} opacity-70`}>
                  <En>{t.tagline}</En>
                  <Ko>{t.taglineKo}</Ko>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <SearchModal />
    </>
  );
}

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
  { href: "/apartment", title: "Apartment", titleKo: "부동산", tagline: "Lease, bond, flatmates", taglineKo: "임대, 보증금, 쉐어하우스", color: "bg-amber-50", accent: "text-amber-600", border: "border-l-amber-400" },
  { href: "/finance", title: "Finance", titleKo: "금융", tagline: "Bank, TFN, super — first week", taglineKo: "은행, 세금, 퇴직연금", color: "bg-emerald-50", accent: "text-emerald-600", border: "border-l-emerald-400" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", tagline: "Arvo, ta, no worries — decoded", taglineKo: "호주 속어 해독", color: "bg-sky-50", accent: "text-sky-600", border: "border-l-sky-400" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", tagline: "NRL, AFL, cricket obsession", taglineKo: "호주 스포츠의 모든 것", color: "bg-orange-50", accent: "text-orange-600", border: "border-l-orange-400" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", tagline: "Award wages, your rights", taglineKo: "노동자 권리와 직장 문화", color: "bg-teal-50", accent: "text-teal-600", border: "border-l-teal-400" },
  { href: "/study", title: "Study", titleKo: "학습", tagline: "Uni, VET, English courses", taglineKo: "대학과 학업", color: "bg-indigo-50", accent: "text-indigo-600", border: "border-l-indigo-400" },
  { href: "/transport", title: "Transport", titleKo: "교통", tagline: "Opal, trains, ferries, rideshare", taglineKo: "오팔, 기차, 버스, 페리", color: "bg-cyan-50", accent: "text-cyan-600", border: "border-l-cyan-400" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", tagline: "Sydney, coast, Blue Mountains", taglineKo: "시드니와 NSW 필수 명소", color: "bg-amber-50", accent: "text-amber-600", border: "border-l-amber-400" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", tagline: "Weekend drives and road trips", taglineKo: "주말 드라이브와 여행", color: "bg-emerald-50", accent: "text-emerald-600", border: "border-l-emerald-400" },
  { href: "/resources", title: "Resources", titleKo: "자료", tagline: "Medicare, Centrelink, community", taglineKo: "Medicare, TFN, 커뮤니티", color: "bg-stone-50", accent: "text-stone-600", border: "border-l-stone-400" },
];

export default function TestHomepage6() {
  const [active, setActive] = useState<StageKey>("visiting");
  const activeStage = stages.find((s) => s.key === active)!;
  const activeIdx = stages.findIndex((s) => s.key === active);

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
          {/* Hard gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-stone-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-transparent to-transparent" />
          
          {/* Content over image */}
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
                    <span className={isActive ? "text-inherit" : ""}>
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

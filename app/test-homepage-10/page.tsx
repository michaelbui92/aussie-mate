"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; color: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", color: "bg-orange-400" },
  { key: "arrived", title: "I just got here", koTitle: "방금 도착했어요", color: "bg-emerald-400" },
  { key: "home", title: "I call this home", koTitle: "여기가 내 집이에요", color: "bg-sky-400" },
];

const topics = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", tagline: "Lease, bond, flatmates", taglineKo: "임대, 보증금", icon: "🏠", bg: "bg-orange-50" },
  { href: "/finance", title: "Finance", titleKo: "금융", tagline: "Bank, TFN, super", taglineKo: "은행, 세금", icon: "💰", bg: "bg-emerald-50" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", tagline: "Ta, arvo, no worries", taglineKo: "호주 속어", icon: "🗣️", bg: "bg-sky-50" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", tagline: "NRL, AFL, cricket", taglineKo: "호주 스포츠", icon: "🏉", bg: "bg-amber-50" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", tagline: "Award wages, your rights", taglineKo: "노동 권리", icon: "⚖️", bg: "bg-orange-50" },
  { href: "/study", title: "Study", titleKo: "학습", tagline: "Uni, VET, English", taglineKo: "대학, 교육", icon: "🎓", bg: "bg-indigo-50" },
  { href: "/transport", title: "Transport", titleKo: "교통", tagline: "Opal, trains, ferries", taglineKo: "오팔, 기차", icon: "🚆", bg: "bg-cyan-50" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", tagline: "Sydney, coast, mountains", taglineKo: "시드니 명소", icon: "🌊", bg: "bg-teal-50" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", tagline: "Weekend road trips", taglineKo: "주말 여행", icon: "🚗", bg: "bg-emerald-50" },
  { href: "/resources", title: "Resources", titleKo: "자료", tagline: "Medicare, community", taglineKo: "의료, 커뮤니티", icon: "🔗", bg: "bg-stone-50" },
];

export default function TestHomepage10() {
  const [active, setActive] = useState<StageKey>("visiting");
  const activeIdx = stages.findIndex((s) => s.key === active);

  return (
    <>
      <div className="bg-stone-50 min-h-screen">
        {/* Full-bleed hero — Bondi ocean pool */}
        <div className="relative min-h-[520px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=1800&q=85"
            alt="Bondi Icebergs, Sydney"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-stone-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-transparent to-transparent" />
          
          <div className="relative max-w-5xl mx-auto px-4 pt-10 pb-12">
            <p className="text-amber-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
              <En>Bilingual Guide · 호주 한인 동반자</En>
              <Ko>バイリンガル ガイド · 호주 한인 가이드</Ko>
            </p>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-4 drop-shadow-lg">
              <En>G&apos;day,<br/><span className="text-amber-400">mate.</span></En>
              <Ko>호주에<br/><span className="text-amber-400">오신 것을</span><br/>환영합니다</Ko>
            </h1>
            <p className="text-stone-300 font-medium text-sm">
              <En>Everything you need to live like a local — bilingual, no fluff.</En>
              <Ko>현지인처럼 호주 생활하기 — 바이링구얼 가이드.</Ko>
            </p>
          </div>
        </div>

        {/* Dark top band */}
        <div className="bg-stone-900 border-b-4 border-black">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-stone-500">
              <En>AussieMate · AU/KO · 10 guides · 209 phrases</En>
              <Ko>호주 메이트 · 10개 가이드 · 209개 표현</Ko>
            </p>
          </div>
        </div>

        {/* Stage selector */}
        <div className="bg-stone-900 border-b-4 border-black">
          <div className="max-w-5xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 gap-2">
              {stages.map((s, i) => (
                <button
                  key={s.key}
                  onClick={() => setActive(s.key)}
                  className={`w-full text-left px-5 py-4 border-4 border-black font-black text-sm transition-all flex items-center gap-3 ${
                    active === s.key
                      ? `${s.color} text-stone-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5`
                      : "bg-stone-800 text-stone-300 hover:bg-stone-700 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  }`}
                >
                  <span className="font-mono text-xs opacity-50">{String(i + 1).padStart(2, "0")}</span>
                  <En>{s.title}</En>
                  <Ko>{s.koTitle}</Ko>
                  <span className="ml-auto opacity-30">→</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content card */}
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className={`bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 mb-8 border-t-8 ${["border-t-orange-400","border-t-emerald-400","border-t-sky-400"][activeIdx]}`}>
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>

        {/* Topic grid */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <div className="mb-4 pb-3 border-b-3 border-black flex items-center justify-between">
            <h2 className="text-sm font-black uppercase tracking-widest text-stone-500">
              <En>All Guides</En>
              <Ko>모든 가이드</Ko>
            </h2>
            <span className="text-xs font-mono font-black text-stone-400">10 topics</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {topics.map((t, i) => (
              <Link
                key={t.href}
                href={t.href}
                className={`${t.bg} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 flex flex-col justify-between hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{t.icon}</span>
                  <span className="font-mono text-[9px] font-black text-stone-400">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <div className="font-black text-sm text-stone-800 mb-0.5">
                    <En>{t.title}</En>
                    <Ko>{t.titleKo}</Ko>
                  </div>
                  <div className="text-[10px] font-medium text-stone-500 leading-tight">
                    <En>{t.tagline}</En>
                    <Ko>{t.taglineKo}</Ko>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <SearchModal />
    </>
  );
}

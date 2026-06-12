"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; bg: string; textColor: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", bg: "bg-sky-500", textColor: "text-white" },
  { key: "arrived", title: "I just got here", koTitle: "방금 도착했어요", bg: "bg-emerald-500", textColor: "text-white" },
  { key: "home", title: "I call this home", koTitle: "여기가 내 집이에요", bg: "bg-teal-500", textColor: "text-white" },
];

const topics = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", tagline: "Lease agreements, bonds, flatmates", taglineKo: "임대 계약, 보증금, 쉐어하우스", bg: "bg-sky-500", textColor: "text-white" },
  { href: "/finance", title: "Finance", titleKo: "금융", tagline: "Banking, super, tax file number", taglineKo: "은행, 퇴직연금, 세금번호", bg: "bg-emerald-500", textColor: "text-white" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", tagline: "Arvo, servo, AM vs PM — sorted", taglineKo: "호주 영어 표현의 모든 것", bg: "bg-teal-500", textColor: "text-white" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", tagline: "NRL, AFL, the Summer of Cricket", taglineKo: "호주 스포츠의 모든 것", bg: "bg-indigo-500", textColor: "text-white" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", tagline: "Award wages, Fair Work, your rights", taglineKo: "임금等级, 공정노동, 권리", bg: "bg-sky-600", textColor: "text-white" },
  { href: "/study", title: "Study", titleKo: "학습", tagline: "University, VET, English courses", taglineKo: "대학, 직업교육, 영어과정", bg: "bg-emerald-600", textColor: "text-white" },
  { href: "/transport", title: "Transport", titleKo: "교통", tagline: "Opal card, trains, ferries, rideshare", taglineKo: "오팔 카드, 기차, 페리", bg: "bg-amber-500", textColor: "text-white" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", tagline: "Harbour, Opera House, Bondi, Blue Mountains", taglineKo: "시드니 필수 명소", bg: "bg-cyan-500", textColor: "text-white" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", tagline: "South Coast, Hunter Valley, Blue Mountains", taglineKo: "주말 여행과 드라이브", bg: "bg-violet-500", textColor: "text-white" },
  { href: "/resources", title: "Resources", titleKo: "자료", tagline: "Medicare, Centrelink, community groups", taglineKo: "Medicare, 지역사회", bg: "bg-slate-500", textColor: "text-white" },
];

export default function TestHomepage7() {
  const [active, setActive] = useState<StageKey>("visiting");
  const activeIdx = stages.findIndex((s) => s.key === active);

  return (
    <>
      <div className="bg-stone-100 min-h-screen">
        {/* Full-bleed hero — Great Ocean Road */}
        <div className="relative min-h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1800&q=85"
            alt="Great Ocean Road, Victoria"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/50 to-stone-900/70" />
          
          <div className="relative max-w-5xl mx-auto px-4 pt-10 pb-12">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-sky-300 mb-4">
              <En>AussieMate · Bilingual · AU/KO</En>
              <Ko>호주 메이트 · 바이링구얼 · 호주 한인</Ko>
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-3 drop-shadow-lg">
              <En>G&apos;day.<br/>Welcome to<br/><span className="text-sky-300">Australia</span></En>
              <Ko>호주에<br/><span className="text-sky-300">오신 것을</span><br/>환영합니다</Ko>
            </h1>
            <p className="text-white/70 font-semibold text-base max-w-sm">
              <En>Everything you need to know about Aussie life — bilingual, no fluff.</En>
              <Ko>호주 생활에 필요한 모든 것 — 바이링구얼, 헛소리 없이.</Ko>
            </p>
          </div>
        </div>

        {/* Stage selector */}
        <div className="bg-stone-900 border-b-4 border-black">
          <div className="max-w-5xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {stages.map((s, i) => {
                const isActive = active === s.key;
                return (
                  <button
                    key={s.key}
                    onClick={() => setActive(s.key)}
                    className={`relative p-5 text-left border-4 border-black font-black transition-all ${
                      isActive
                        ? `${s.bg} ${s.textColor} shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] -translate-y-1`
                        : "bg-stone-800 text-stone-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
                    }`}
                  >
                    <div className={`font-mono text-xs mb-2 ${isActive ? "text-white/50" : "text-stone-600"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <En>{s.title}</En>
                    <Ko>{s.koTitle}</Ko>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className={`bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 mb-8 border-t-8 ${["border-t-sky-400","border-t-emerald-400","border-t-teal-400"][activeIdx]}`}>
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>

        {/* Topic cards */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {topics.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className={`${t.bg} ${t.textColor} border-4 border-black p-4 flex flex-col justify-between hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div />
                <div>
                  <div className="font-black text-sm mb-1">
                    <En>{t.title}</En>
                    <Ko>{t.titleKo}</Ko>
                  </div>
                  <div className="text-[10px] font-semibold opacity-70 leading-tight">
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

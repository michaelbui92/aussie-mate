"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; num: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", num: "01" },
  { key: "arrived", title: "I just got here", koTitle: "방금 도착했어요", num: "02" },
  { key: "home", title: "I call this home", koTitle: "여기가 내 집이에요", num: "03" },
];

const topics = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", tagline: "Lease, bond, flatmates", taglineKo: "임대 계약과 보증금", color: "bg-white", text: "text-stone-800", border: "border-stone-300" },
  { href: "/finance", title: "Finance", titleKo: "금융", tagline: "Bank, TFN, super", taglineKo: "은행과 세금", color: "bg-white", text: "text-stone-800", border: "border-stone-300" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", tagline: "Arvo, ta, no worries", taglineKo: "호주 속어", color: "bg-white", text: "text-stone-800", border: "border-stone-300" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", tagline: "Footy, cricket, surf", taglineKo: "호주 스포츠", color: "bg-white", text: "text-stone-800", border: "border-stone-300" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", tagline: "Award wages, rights", taglineKo: "노동자 권리", color: "bg-white", text: "text-stone-800", border: "border-stone-300" },
  { href: "/study", title: "Study", titleKo: "학습", tagline: "Uni, VET, English", taglineKo: "대학과 교육", color: "bg-white", text: "text-stone-800", border: "border-stone-300" },
  { href: "/transport", title: "Transport", titleKo: "교통", tagline: "Opal, trains, ferries", taglineKo: "오팔과 교통", color: "bg-white", text: "text-stone-800", border: "border-stone-300" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", tagline: "Sydney, coast, mountains", taglineKo: "시드니와 여행", color: "bg-white", text: "text-stone-800", border: "border-stone-300" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", tagline: "Weekend road trips", taglineKo: "주말 여행", color: "bg-white", text: "text-stone-800", border: "border-stone-300" },
  { href: "/resources", title: "Resources", titleKo: "자료", tagline: "Medicare, community", taglineKo: "의료와 커뮤니티", color: "bg-white", text: "text-stone-800", border: "border-stone-300" },
];

const palette = ["bg-amber-400", "bg-emerald-500", "bg-teal-500", "bg-sky-500", "bg-indigo-500", "bg-orange-400", "bg-violet-500", "bg-cyan-500", "bg-lime-500", "bg-rose-400"];

export default function TestHomepage9() {
  const [active, setActive] = useState<StageKey>("visiting");
  const activeIdx = stages.findIndex((s) => s.key === active);

  return (
    <>
      <div className="bg-stone-200 min-h-screen">
        {/* Full-bleed hero — Sydney night skyline */}
        <div className="relative min-h-[480px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1800&q=85"
            alt="Sydney at night"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-stone-900/40" />
          <div className="absolute inset-0 bg-gradient-to-l from-stone-900/80 via-transparent to-transparent" />
          
          <div className="relative max-w-5xl mx-auto px-4 pt-10 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
              <div className="md:col-span-3">
                <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                  <En>AussieMate · Bilingual · AU/KO</En>
                  <Ko>호주 메이트 · 바이링구얼 · 호주 한인</Ko>
                </p>
                <h1 className="text-5xl md:text-6xl font-black text-white leading-none mb-3 drop-shadow-lg">
                  <En>G&apos;day,<br/>Aussie<br/>Mate 🦘</En>
                  <Ko>호주에<br/>오신 것을<br/>환영합니다</Ko>
                </h1>
                <p className="text-stone-300 font-medium text-sm max-w-xs">
                  <En>Bilingual guide for Koreans in Australia — everything you need, nothing you don&apos;t.</En>
                  <Ko>호주 한인을 위한 바이링구얼 동반자.</Ko>
                </p>
              </div>
              <div className="md:col-span-2 grid grid-cols-3 gap-2">
                {stages.map((s, i) => (
                  <button
                    key={s.key}
                    onClick={() => setActive(s.key)}
                    className={`p-3 text-left border-3 border-black transition-all ${
                      active === s.key
                        ? `${palette[i]} text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1`
                        : "bg-stone-900/80 text-stone-300 hover:bg-stone-800"
                    }`}
                  >
                    <div className="font-mono text-[9px] font-black opacity-50 mb-0.5">{s.num}</div>
                    <div className="font-black text-[10px] leading-tight">
                      <En>{s.title}</En>
                      <Ko>{s.koTitle}</Ko>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className={`bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 mb-8 border-t-8 ${["border-t-amber-400","border-t-emerald-500","border-t-teal-500"][activeIdx]}`}>
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>

        {/* Topic grid */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {topics.map((t, i) => (
              <Link
                key={t.href}
                href={t.href}
                className={`${t.color} ${t.text} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-5 flex flex-col justify-between hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="font-black text-sm">
                    <En>{t.title}</En>
                    <Ko>{t.titleKo}</Ko>
                  </div>
                  <div className={`w-3 h-3 ${palette[i]} border border-black shrink-0`} />
                </div>
                <div className="text-[10px] font-semibold text-stone-500 leading-tight">
                  <En>{t.tagline}</En>
                  <Ko>{t.taglineKo}</Ko>
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

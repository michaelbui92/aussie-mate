"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; bg: string; accent: string; numBg: string; numColor: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", bg: "bg-amber-400 hover:bg-amber-500", accent: "text-white", numBg: "bg-white/20", numColor: "text-white" },
  { key: "arrived", title: "I just got here", koTitle: "방금 도착했어요", bg: "bg-emerald-500 hover:bg-emerald-600", accent: "text-white", numBg: "bg-white/20", numColor: "text-white" },
  { key: "home", title: "I call this home", koTitle: "여기가 내 집이에요", bg: "bg-sky-500 hover:bg-sky-600", accent: "text-white", numBg: "bg-white/20", numColor: "text-white" },
];

const topics = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", desc: "Renting in NSW", descKo: "NSW 임대", accent: "bg-amber-400", text: "text-white" },
  { href: "/finance", title: "Finance", titleKo: "금융", desc: "Banking, tax, super", descKo: "은행, 세금, 연금", accent: "bg-amber-500", text: "text-white" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", desc: "Slang & phrases", descKo: "호주 속어", accent: "bg-emerald-500", text: "text-white" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", desc: "NRL, AFL, cricket", descKo: "호주 스포츠", accent: "bg-emerald-600", text: "text-white" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", desc: "Culture & rights", descKo: "직장 문화", accent: "bg-sky-500", text: "text-white" },
  { href: "/study", title: "Study", titleKo: "학습", desc: "University life", descKo: "대학 생활", accent: "bg-sky-600", text: "text-white" },
  { href: "/transport", title: "Transport", titleKo: "교통", desc: "Opal, trains, ferries", descKo: "오팔, 기차", accent: "bg-orange-400", text: "text-white" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", desc: "Sydney & NSW", descKo: "시드니 & NSW", accent: "bg-orange-500", text: "text-white" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", desc: "Weekend & road trips", descKo: "주말, 드라이브", accent: "bg-violet-500", text: "text-white" },
  { href: "/resources", title: "Resources", titleKo: "자료", desc: "Gov & community", descKo: "정부, 커뮤니티", accent: "bg-stone-500", text: "text-white" },
];

export default function TestHomepage9() {
  const [active, setActive] = useState<StageKey>("visiting");
  const theme = stages.find((s) => s.key === active)!;

  return (
    <>
      <div className="bg-stone-50 min-h-screen">
        {/* Hero — bold typographic */}
        <div className="bg-stone-900 text-white">
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-semibold mb-6">
                  <En>The Aussie Companion for Koreans</En>
                  <Ko>호주 한인을 위한 동반자</Ko>
                </p>
                <h1 className="text-5xl md:text-7xl font-black leading-none mb-4">
                  <span className="text-amber-400">G&apos;day</span>,<br/>welcome 🦘
                </h1>
                <p className="text-stone-400 text-base">
                  <En>From landing to living like a local — everything you need.</En>
                  <Ko>착륙에서 현지인처럼 — 필요한 모든 것을 한눈에.</Ko>
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {stages.map((s, i) => (
                  <button
                    key={s.key}
                    onClick={() => setActive(s.key)}
                    className={`p-4 rounded-xl transition-all duration-200 ${active === s.key ? s.bg : "bg-stone-800 hover:bg-stone-700"}`}
                  >
                    <div className={`${s.numBg} ${s.numColor} text-xs font-black rounded-full w-6 h-6 flex items-center justify-center mb-2 mx-auto`}>{i + 1}</div>
                    <p className={`text-xs font-bold text-center ${s.accent}`}>
                      <En>{s.title}</En>
                      <Ko>{s.koTitle}</Ko>
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stage content — white card */}
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border-t-4 mb-8" style={{ borderTopColor: theme.bg.split(" ")[0].replace("bg-", "") === "amber-400" ? "#f59e0b" : theme.bg.includes("emerald") ? "#10b981" : "#0ea5e9" }}>
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>

        {/* Topic cards — solid color blocks */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {topics.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className={`${t.accent} ${t.text} rounded-xl p-4 flex flex-col justify-between h-28 hover:scale-105 hover:-translate-y-1 transition-all duration-200 shadow-sm`}
              >
                <div className="text-xs font-semibold opacity-70">
                  <En>{t.desc}</En>
                  <Ko>{t.descKo}</Ko>
                </div>
                <div className="font-black text-sm mt-auto">
                  <En>{t.title}</En>
                  <Ko>{t.titleKo}</Ko>
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

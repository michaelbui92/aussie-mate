"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; color: string; border: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", color: "text-amber-600", border: "border-t-amber-400" },
  { key: "arrived", title: "I just got here", koTitle: "방금 도착했어요", color: "text-emerald-600", border: "border-t-emerald-400" },
  { key: "home", title: "I call this home", koTitle: "여기가 내 집이에요", color: "text-teal-600", border: "border-t-teal-400" },
];

const categories = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", color: "bg-amber-50 border-amber-200 text-amber-700", icon: "🏠" },
  { href: "/finance", title: "Finance", titleKo: "금융", color: "bg-amber-50 border-amber-200 text-amber-700", icon: "💰" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", color: "bg-emerald-50 border-emerald-200 text-emerald-700", icon: "💬" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", color: "bg-emerald-50 border-emerald-200 text-emerald-700", icon: "🏉" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", color: "bg-teal-50 border-teal-200 text-teal-700", icon: "💼" },
  { href: "/study", title: "Study", titleKo: "학습", color: "bg-teal-50 border-teal-200 text-teal-700", icon: "🎓" },
  { href: "/transport", title: "Transport", titleKo: "교통", color: "bg-orange-50 border-orange-200 text-orange-700", icon: "🚆" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", color: "bg-orange-50 border-orange-200 text-orange-700", icon: "✈️" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", color: "bg-orange-50 border-orange-200 text-orange-700", icon: "🛣️" },
  { href: "/resources", title: "Resources", titleKo: "자료", color: "bg-stone-50 border-stone-200 text-stone-700", icon: "🔗" },
];

export default function TestHomepage8() {
  const [active, setActive] = useState<StageKey>("visiting");

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Magazine header */}
        <div className="bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white">
          <div className="max-w-5xl mx-auto px-4 py-14 md:py-20">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-stone-400 mb-3">Volume 01 · Korea · Australia</p>
                <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
                  <En>Aussie<br/><span className="text-amber-400">Mate</span></En>
                  <Ko>호주<br/><span className="text-amber-400">메이트</span></Ko>
                </h1>
              </div>
              <div className="hidden md:block text-right">
                <p className="text-xs text-stone-500 mb-1">호주 한인들을 위한</p>
                <p className="text-xs text-stone-500">바이링구얼 생활 가이드</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-stone-400">
              <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full font-semibold">10 Guides</span>
              <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-semibold">209 Phrases</span>
              <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full font-semibold">Bilingual EN/KO</span>
            </div>
          </div>
        </div>

        {/* Stages — horizontal magazine cards */}
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {stages.map((s, i) => {
              const isActive = active === s.key;
              return (
                <button
                  key={s.key}
                  onClick={() => setActive(s.key)}
                  className={`text-left p-5 border-t-4 transition-all duration-200 ${
                    isActive
                      ? `${s.border} bg-white shadow-lg -mt-1`
                      : `${s.border} bg-stone-50 hover:bg-white border-stone-200 opacity-60 hover:opacity-100`
                  }`}
                >
                  <div className="text-[10px] font-mono font-black tracking-widest text-stone-300 mb-3">0{i + 1}</div>
                  <h2 className={`text-lg font-black tracking-tight ${isActive ? s.color : "text-stone-700"}`}>
                    <En>{s.title}</En>
                    <Ko>{s.koTitle}</Ko>
                  </h2>
                </button>
              );
            })}
          </div>

          <div className="border border-stone-100 rounded-2xl p-6 md:p-8">
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>

        {/* Category cards with icons */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`group flex flex-col items-center text-center p-4 rounded-2xl border transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${cat.color}`}
              >
                <span className="text-2xl mb-2">{cat.icon}</span>
                <span className="font-bold text-sm leading-tight">
                  <En>{cat.title}</En>
                  <Ko>{cat.titleKo}</Ko>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <SearchModal />
    </>
  );
}

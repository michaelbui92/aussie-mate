"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; pill: string; pillText: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", pill: "bg-sky-100 text-sky-700", pillText: "text-sky-500" },
  { key: "arrived", title: "I just got here", koTitle: "방금 도착했어요", pill: "bg-teal-100 text-teal-700", pillText: "text-teal-500" },
  { key: "home", title: "I call this home", koTitle: "여기가 내 집이에요", pill: "bg-indigo-100 text-indigo-700", pillText: "text-indigo-500" },
];

const categories = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", bg: "bg-sky-500" },
  { href: "/finance", title: "Finance", titleKo: "금융", bg: "bg-teal-500" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", bg: "bg-indigo-500" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", bg: "bg-rose-500" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", bg: "bg-orange-500" },
  { href: "/study", title: "Study", titleKo: "학습", bg: "bg-amber-500" },
  { href: "/transport", title: "Transport", titleKo: "교통", bg: "bg-emerald-600" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", bg: "bg-cyan-500" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", bg: "bg-violet-500" },
  { href: "/resources", title: "Resources", titleKo: "자료", bg: "bg-stone-500" },
];

export default function TestHomepage7() {
  const [active, setActive] = useState<StageKey>("visiting");

  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-sky-50 via-white to-teal-50 border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 py-14 md:py-20">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-6">
              <En>Bilingual · For Koreans in Australia</En>
              <Ko>바이링구얼 · 호주 한인</Ko>
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 leading-tight">
              <En>Your guide to<br/><span className="text-sky-600">Australia</span></En>
              <Ko>호주 생활<br/><span className="text-sky-600">가이드</span></Ko>
            </h1>
            <p className="text-lg text-slate-500 max-w-sm">
              <En>Everything you need, from landing to feeling at home.</En>
              <Ko>착륙에서 정착까지 — 호주 생활에 필요한 모든 것.</Ko>
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-3 mb-8">
            {stages.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-200 ${
                  active === s.key
                    ? `${s.pill} border-transparent shadow-md`
                    : "bg-white border-slate-200 hover:border-slate-300 text-slate-600"
                }`}
              >
                <span className={`text-xs font-mono font-bold ${s.pillText}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className="font-semibold text-sm">
                  <En>{s.title}</En>
                  <Ko>{s.koTitle}</Ko>
                </span>
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 md:p-8 mb-8">
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 pb-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-5">
            <En>All guides</En>
            <Ko>전체 가이드</Ko>
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`${cat.bg} text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:opacity-90 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 shadow-sm`}
              >
                <En>{cat.title}</En>
                <Ko>{cat.titleKo}</Ko>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <SearchModal />
    </>
  );
}

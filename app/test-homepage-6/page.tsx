"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; bg: string; text: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", bg: "bg-sky-400", text: "text-white" },
  { key: "arrived", title: "I just got here", koTitle: "방금 도착했어요", bg: "bg-teal-400", text: "text-white" },
  { key: "home", title: "I call this home", koTitle: "여기가 내 집이에요", bg: "bg-indigo-400", text: "text-white" },
];

const cats = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", bg: "bg-sky-100", titleColor: "text-sky-700" },
  { href: "/finance", title: "Finance", titleKo: "금융", bg: "bg-teal-100", titleColor: "text-teal-700" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", bg: "bg-indigo-100", titleColor: "text-indigo-700" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", bg: "bg-cyan-100", titleColor: "text-cyan-700" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", bg: "bg-sky-100", titleColor: "text-sky-700" },
  { href: "/study", title: "Study", titleKo: "학습", bg: "bg-teal-100", titleColor: "text-teal-700" },
  { href: "/transport", title: "Transport", titleKo: "교통", bg: "bg-amber-100", titleColor: "text-amber-700" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", bg: "bg-cyan-100", titleColor: "text-cyan-700" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", bg: "bg-indigo-100", titleColor: "text-indigo-700" },
  { href: "/resources", title: "Resources", titleKo: "자료", bg: "bg-stone-100", titleColor: "text-stone-700" },
];

export default function TestHomepage6() {
  const [active, setActive] = useState<StageKey>("visiting");

  return (
    <>
      <div className="bg-slate-50 min-h-screen">
        {/* Header bar */}
        <div className="bg-slate-900 border-b-4 border-black">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold mb-4">AU · KO · EN</p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-3">
              <En>Welcome to<br/><span className="text-sky-400">Australia</span></En>
              <Ko>호주에<br/><span className="text-sky-400">오신 것을</span></Ko>
            </h1>
            <p className="text-slate-400 text-base mt-2">
              <En>Your bilingual guide to Aussie life</En>
              <Ko>호주 생활의 바이링구얼 가이드</Ko>
            </p>
          </div>
        </div>

        {/* Stage selector */}
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {stages.map((s, i) => {
              const isActive = active === s.key;
              return (
                <button
                  key={s.key}
                  onClick={() => setActive(s.key)}
                  className={`relative font-black text-lg p-5 transition-all ${
                    isActive
                      ? `${s.bg} ${s.text} border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -translate-y-1 -translate-x-1`
                      : "bg-white border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-slate-800 hover:-translate-y-0.5 hover:-translate-x-0.5"
                  }`}
                >
                  <span className="font-mono text-xs opacity-50 block mb-1">#{i + 1}</span>
                  <En>{s.title}</En>
                  <Ko>{s.koTitle}</Ko>
                </button>
              );
            })}
          </div>

          {/* Content card */}
          <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8">
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>

        {/* Category grid */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {cats.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`${cat.bg} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 flex flex-col justify-between hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div className="text-2xl mb-2" />
                <div className={`${cat.titleColor} font-black text-sm leading-tight`}>
                  <En>{cat.title}</En>
                  <Ko>{cat.titleKo}</Ko>
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

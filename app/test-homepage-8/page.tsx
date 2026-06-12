"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; bg: string; border: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", bg: "bg-sky-100", border: "border-t-sky-500" },
  { key: "arrived", title: "I just got here", koTitle: "방금 도착했어요", bg: "bg-teal-100", border: "border-t-teal-500" },
  { key: "home", title: "I call this home", koTitle: "여기가 내 집이에요", bg: "bg-indigo-100", border: "border-t-indigo-500" },
];

const cats = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", bg: "bg-sky-400", text: "text-white" },
  { href: "/finance", title: "Finance", titleKo: "금융", bg: "bg-teal-500", text: "text-white" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", bg: "bg-indigo-400", text: "text-white" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", bg: "bg-emerald-500", text: "text-white" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", bg: "bg-sky-500", text: "text-white" },
  { href: "/study", title: "Study", titleKo: "학습", bg: "bg-teal-600", text: "text-white" },
  { href: "/transport", title: "Transport", titleKo: "교통", bg: "bg-amber-500", text: "text-white" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", bg: "bg-cyan-500", text: "text-white" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", bg: "bg-violet-500", text: "text-white" },
  { href: "/resources", title: "Resources", titleKo: "자료", bg: "bg-slate-500", text: "text-white" },
];

export default function TestHomepage8() {
  const [active, setActive] = useState<StageKey>("visiting");

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Hero strip */}
        <div className="bg-indigo-500 border-b-4 border-black">
          <div className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-2">
              <En>AussieMate<br/><span className="text-sky-200">Your Aussie Guide</span></En>
              <Ko>호주 메이트<br/><span className="text-sky-200">호주 생활 가이드</span></Ko>
            </h1>
            <p className="text-indigo-200 text-sm font-semibold">
              <En>10 guides · 209 phrases · For Koreans in Australia</En>
              <Ko>10개 가이드 · 209개 표현 · 호주 한인 대상</Ko>
            </p>
          </div>
        </div>

        {/* 3 stage columns */}
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stages.map((s, i) => {
              const isActive = active === s.key;
              return (
                <div key={s.key} className="flex flex-col gap-2">
                  <button
                    onClick={() => setActive(s.key)}
                    className={`w-full text-left p-4 border-4 border-black font-black transition-all ${
                      isActive
                        ? `${s.bg} ${s.border} border-t-[6px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5`
                        : "bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
                    }`}
                  >
                    <span className="font-mono text-xs block mb-1 opacity-50">{String(i + 1).padStart(2, "0")}</span>
                    <En>{s.title}</En>
                    <Ko>{s.koTitle}</Ko>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Content — fills full width */}
          <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8">
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>

        {/* Topic grid */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {cats.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`${cat.bg} border-4 border-black p-5 flex flex-col justify-end hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div className="font-black text-white text-sm">
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

"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; bg: string; border: string; label: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", bg: "bg-amber-100", border: "border-t-amber-400", label: "text-amber-600" },
  { key: "arrived", title: "I just got here", koTitle: "방금 도착했어요", bg: "bg-emerald-100", border: "border-t-emerald-400", label: "text-emerald-600" },
  { key: "home", title: "I call this home", koTitle: "여기가 내 집이에요", bg: "bg-teal-100", border: "border-t-teal-400", label: "text-teal-600" },
];

const cats = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", bg: "bg-amber-400", text: "text-white" },
  { href: "/finance", title: "Finance", titleKo: "금융", bg: "bg-amber-500", text: "text-white" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", bg: "bg-emerald-500", text: "text-white" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", bg: "bg-emerald-600", text: "text-white" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", bg: "bg-teal-500", text: "text-white" },
  { href: "/study", title: "Study", titleKo: "학습", bg: "bg-teal-600", text: "text-white" },
  { href: "/transport", title: "Transport", titleKo: "교통", bg: "bg-orange-400", text: "text-white" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", bg: "bg-orange-500", text: "text-white" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", bg: "bg-violet-500", text: "text-white" },
  { href: "resources", title: "Resources", titleKo: "자료", bg: "bg-slate-500", text: "text-white" },
];

export default function TestHomepage9() {
  const [active, setActive] = useState<StageKey>("visiting");
  const activeStage = stages.find((s) => s.key === active)!;

  return (
    <>
      <div className="bg-stone-50 min-h-screen">
        {/* Hero with stat bar */}
        <div className="bg-white border-b-4 border-black">
          <div className="max-w-5xl mx-auto px-4 pt-10 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-4">
                  <En>New in Australia? We&apos;ve got you.</En>
                  <Ko>호주에 처음 오셨나요? 우리가 도와드릴게요.</Ko>
                </p>
                <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
                  <En>Welcome to<br/><span className="text-amber-500">Australia</span> 🦘</En>
                  <Ko>호주에<br/><span className="text-amber-500">오신 것을</span> 환영합니다</Ko>
                </h1>
                <p className="text-stone-500 mt-3 text-sm max-w-sm">
                  <En>Your bilingual guide — landing, living, thriving.</En>
                  <Ko>바이링구얼 가이드 — 착륙에서 성공까지.</Ko>
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {stages.map((s, i) => (
                  <button
                    key={s.key}
                    onClick={() => setActive(s.key)}
                    className={`p-3 border-4 border-black font-black text-xs transition-all ${
                      active === s.key
                        ? `${s.bg} shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5 -translate-x-0.5`
                        : "bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
                    }`}
                  >
                    <div className={`font-mono text-[10px] mb-1 ${active === s.key ? s.label : "text-stone-400"}`}>{String(i + 1).padStart(2, "0")}</div>
                    <En>{s.title}</En>
                    <Ko>{s.koTitle}</Ko>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content card */}
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className={`bg-white border-4 border-black border-t-[6px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 mb-8`} style={{ borderTopColor: activeStage.border.includes("amber") ? "#f59e0b" : activeStage.border.includes("emerald") ? "#10b981" : "#14b8a6" }}>
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
                className={`${cat.bg} border-4 border-black p-4 flex flex-col justify-between hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div />
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

"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; bg: string; label: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", bg: "bg-sky-200", label: "text-sky-700" },
  { key: "arrived", title: "I just got here", koTitle: "방금 도착했어요", bg: "bg-teal-200", label: "text-teal-700" },
  { key: "home", title: "I call this home", koTitle: "여기가 내 집이에요", bg: "bg-indigo-200", label: "text-indigo-700" },
];

const cats = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", bg: "bg-sky-500", text: "text-white" },
  { href: "/finance", title: "Finance", titleKo: "금융", bg: "bg-teal-500", text: "text-white" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", bg: "bg-indigo-500", text: "text-white" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", bg: "bg-emerald-500", text: "text-white" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", bg: "bg-sky-600", text: "text-white" },
  { href: "/study", title: "Study", titleKo: "학습", bg: "bg-teal-600", text: "text-white" },
  { href: "/transport", title: "Transport", titleKo: "교통", bg: "bg-amber-500", text: "text-white" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", bg: "bg-cyan-500", text: "text-white" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", bg: "bg-violet-500", text: "text-white" },
  { href: "/resources", title: "Resources", titleKo: "자료", bg: "bg-slate-500", text: "text-white" },
];

export default function TestHomepage10() {
  const [active, setActive] = useState<StageKey>("visiting");

  return (
    <>
      <div className="bg-stone-50 min-h-screen">
        {/* Full-width dark header */}
        <div className="bg-stone-900 border-b-4 border-black">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-500 mb-4">
                  <En>Bilingual · AussieMate · AU/KO</En>
                  <Ko>바이링구얼 · 호주 메이트 · 호주 한인</Ko>
                </p>
                <h1 className="text-5xl md:text-7xl font-black text-stone-900 leading-none">
                  <En>G&apos;day<br/><span className="text-sky-400">Australia</span></En>
                  <Ko>호주에<br/><span className="text-sky-400">오신 것을</span></Ko>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Stage buttons — big blocky */}
        <div className="bg-stone-900 border-b-4 border-black">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <div className="grid grid-cols-3 gap-3">
              {stages.map((s, i) => {
                const isActive = active === s.key;
                return (
                  <button
                    key={s.key}
                    onClick={() => setActive(s.key)}
                    className={`p-4 border-4 border-black font-black text-sm transition-all ${
                      isActive
                        ? `${s.bg} text-stone-900 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] -translate-y-1`
                        : "bg-stone-800 text-stone-400 hover:bg-stone-700 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.1)]"
                    }`}
                  >
                    <div className="font-mono text-xs opacity-50 mb-1">{String(i + 1).padStart(2, "0")}</div>
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
          <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 mb-8">
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>

        {/* Category grid — solid blocks */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {cats.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`${cat.bg} border-4 border-black p-5 flex flex-col justify-end hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all`}
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

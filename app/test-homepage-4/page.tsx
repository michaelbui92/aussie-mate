"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; icon: string; gradient: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중", icon: "✈️", gradient: "from-amber-400 to-orange-500" },
  { key: "arrived", title: "I just arrived", koTitle: "방금 도착", icon: "🏠", gradient: "from-emerald-400 to-green-600" },
  { key: "home", title: "This is home", koTitle: "내 집", icon: "❤️", gradient: "from-sky-400 to-indigo-500" },
];

const bentoItems = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", desc: "Renting explained", descKo: "임대 설명", span: "sm:row-span-2 bg-indigo-500", text: "text-white" },
  { href: "/finance", title: "Finance", titleKo: "금융", desc: "Tax, super, banking", descKo: "세금, 연금, 은행", span: "bg-emerald-500", text: "text-white" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", desc: "Decode slang", descKo: "속어 이해", span: "bg-amber-500", text: "text-white" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", desc: "NRL, AFL, cricket", descKo: "호주 스포츠", span: "bg-violet-500", text: "text-white" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", desc: "Rights & culture", descKo: "권리와 문화", span: "bg-rose-500", text: "text-white" },
  { href: "/study", title: "Study", titleKo: "학습", desc: "University life", descKo: "대학 생활", span: "bg-sky-500", text: "text-white" },
  { href: "/transport", title: "Transport", titleKo: "교통", desc: "Opal, trains", descKo: "오팔, 기차", span: "sm:col-span-2 bg-slate-700", text: "text-white" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", desc: "Sydney & NSW", descKo: "시드니 & NSW", span: "bg-cyan-500", text: "text-white" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖", desc: "Weekend trips", descKo: "주말 여행", span: "bg-teal-500", text: "text-white" },
  { href: "/resources", title: "Resources", titleKo: "자료", desc: "Gov links", descKo: "정부 링크", span: "bg-amber-600", text: "text-white" },
];

export default function TestHomepage4() {
  const [active, setActive] = useState<StageKey>("visiting");

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-3">
            Welcome to <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 bg-clip-text text-transparent">Australia</span> 🦘
          </h1>
          <p className="text-gray-500 text-lg">
            <En>Your bilingual guide, from landing to living like a local.</En>
            <Ko>착륙부터 현지인까지 — 바이링구얼 가이드.</Ko>
          </p>
        </div>

        {/* 3 stages */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {stages.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`group relative overflow-hidden rounded-2xl p-4 transition-all ${
                active === s.key ? "scale-105 shadow-xl" : "opacity-60 hover:opacity-80"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`} />
              <div className="relative z-10 text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-sm font-bold text-white">
                  <En>{s.title}</En>
                  <Ko>{s.koTitle}</Ko>
                </div>
                <div className="text-xs font-black mt-1 w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center mx-auto">{i + 1}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active stage content */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-12">
          {active === "visiting" && <VisitingContent />}
          {active === "arrived" && <ArrivedContent />}
          {active === "home" && <HomeContent />}
        </div>

        {/* Bento grid */}
        <h2 className="text-2xl font-black mb-6 text-center">
          <En>All Guides</En>
          <Ko>모든 가이드</Ko>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-[140px]">
          {bentoItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${item.span} ${item.text} rounded-2xl p-4 flex flex-col justify-end group hover:scale-[1.02] transition-transform`}
            >
              <div className="text-xs font-semibold opacity-70 uppercase tracking-wider mb-1">
                <En>{item.desc}</En>
                <Ko>{item.descKo}</Ko>
              </div>
              <div className="text-lg font-black">
                <En>{item.title}</En>
                <Ko>{item.titleKo}</Ko>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <SearchModal />
    </>
  );
}

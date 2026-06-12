"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; lineColor: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", lineColor: "#e8722a" },
  { key: "arrived", title: "I just got here", koTitle: "방금 도착했어요", lineColor: "#5b8a5b" },
  { key: "home", title: "I call this home", koTitle: "여기가 내 집이에요", lineColor: "#6ba5b5" },
];

const topics = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", desc: "Renting in NSW", descKo: "NSW 임대", lineColor: "#5b8a5b" },
  { href: "/finance", title: "Finance", titleKo: "금융", desc: "Banking, tax, super", descKo: "은행, 세금, 연금", lineColor: "#e8722a" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", desc: "Decode slang", descKo: "호주 속어", lineColor: "#e8722a" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", desc: "NRL, AFL, cricket", descKo: "호주 스포츠", lineColor: "#5b8a5b" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", desc: "Culture and rights", descKo: "직장 문화와 권리", lineColor: "#6ba5b5" },
  { href: "/study", title: "Study", titleKo: "학습", desc: "University life", descKo: "대학과 학업", lineColor: "#6ba5b5" },
  { href: "/transport", title: "Transport", titleKo: "교통", desc: "Opal, trains, ferries", descKo: "오팔, 기차, 페리", lineColor: "#e8722a" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", desc: "Sydney and NSW", descKo: "시드니 & NSW", lineColor: "#5b8a5b" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", desc: "Weekend trips", descKo: "주말 여행", lineColor: "#6ba5b5" },
  { href: "/resources", title: "Resources", titleKo: "자료", desc: "Government links", descKo: "정부 서비스", lineColor: "#e8722a" },
];

export default function TestHomepage10() {
  const [active, setActive] = useState<StageKey>("visiting");

  return (
    <>
      <div className="bg-cream min-h-screen">
        {/* Top nav strip */}
        <div className="bg-eucalypt text-white">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between text-sm">
            <span className="text-xs font-semibold tracking-widest uppercase opacity-70">AussieMate</span>
            <span className="text-xs opacity-60">호주 한인 생활 가이드</span>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-b from-sand/50 to-cream">
          <div className="max-w-5xl mx-auto px-4 py-14 md:py-20 text-center">
            <div className="inline-flex items-center gap-2 border border-sunset/30 rounded-full px-4 py-1.5 mb-6">
              <En><span className="text-sunset text-xs font-bold">New in Australia?</span></En>
              <Ko><span className="text-sunset text-xs font-bold">호주에 처음 오셨나요?</span></Ko>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-eucalypt mb-4 leading-tight">
              <En>Welcome to <span className="text-sunset">Australia</span> 🦘</En>
              <Ko>호주에 <span className="text-sunset">오신 것을</span> 환영합니다</Ko>
            </h1>
            <p className="text-lg text-eucalypt/60 max-w-md mx-auto">
              <En>Your bilingual companion — landing to living like a local.</En>
              <Ko>착륙부터 현지인처럼 — 호주 생활의 동반자.</Ko>
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
                  className={`relative p-6 text-left rounded-lg border transition-all duration-200 overflow-hidden ${
                    isActive
                      ? "bg-white shadow-lg border-transparent"
                      : "bg-white/60 border-eucalypt/10 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: s.lineColor }} />
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="font-mono text-xs font-bold" style={{ color: isActive ? s.lineColor : "#2A3A2A" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {isActive && (
                      <div className="h-px flex-1" style={{ backgroundColor: s.lineColor + "40" }} />
                    )}
                  </div>
                  <h2 className={`text-xl font-bold ${isActive ? "text-eucalypt" : "text-eucalypt/70"}`}>
                    <En>{s.title}</En>
                    <Ko>{s.koTitle}</Ko>
                  </h2>
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-xl border border-eucalypt/10 p-6 md:p-8">
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>

        {/* Topic list — clean horizontal list */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <h2 className="text-xs uppercase tracking-[0.25em] text-eucalypt/40 font-semibold mb-6">
            <En>All guides</En>
            <Ko>전체 가이드</Ko>
          </h2>
          <div className="space-y-1">
            {topics.map((t, i) => (
              <Link
                key={t.href}
                href={t.href}
                className="group flex items-center gap-4 py-4 border-b border-eucalypt/5 hover:border-eucalypt/20 transition-all"
              >
                <div className="w-1 h-8 rounded-full shrink-0" style={{ backgroundColor: t.lineColor, opacity: 0.6 }} />
                <div className="flex-1 min-w-0">
                  <span className="font-bold text-eucalypt group-hover:text-sunset transition-colors">
                    <En>{t.title}</En>
                    <Ko>{t.titleKo}</Ko>
                  </span>
                </div>
                <div className="hidden sm:block text-sm text-eucalypt/40 group-hover:text-eucalypt/70 transition-colors">
                  <En>{t.desc}</En>
                  <Ko>{t.descKo}</Ko>
                </div>
                <svg className="w-4 h-4 text-eucalypt/20 group-hover:text-sunset group-hover:translate-x-1 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <SearchModal />
    </>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; glow: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", glow: "from-amber-500 to-orange-600" },
  { key: "arrived", title: "I just arrived", koTitle: "방금 도착했어요", glow: "from-emerald-400 to-green-600" },
  { key: "home", title: "This is home", koTitle: "여기가 내 집이에요", glow: "from-sky-400 to-blue-600" },
];

const categories = [
  { href: "/apartment", title: "Apartment Guide", desc: "Renting in NSW", koTitle: "부동산 가이드", koDesc: "NSW 임대 절차" },
  { href: "/finance", title: "Finance", desc: "Banking, tax, super", koTitle: "금융", koDesc: "은행, 세금, 퇴직연금" },
  { href: "/aussie-english", title: "Aussie English", desc: "Decode slang & phrases", koTitle: "호주 영어", koDesc: "호주 속어와 표현" },
  { href: "/sport", title: "Sport", desc: "NRL, AFL, cricket", koTitle: "스포츠", koDesc: "호주 스포츠 문화" },
  { href: "/workplace", title: "Workplace", desc: "Work culture & rights", koTitle: "직장", koDesc: "직장 문화와 권리" },
  { href: "/study", title: "Study", desc: "University life", koTitle: "학습", koDesc: "대학과 학업" },
  { href: "/transport", title: "Transport", desc: "Opal, trains, ferries", koTitle: "교통", koDesc: "오팔, 기차, 페리" },
  { href: "/tourist", title: "Tourist", desc: "Sydney & NSW", koTitle: "여행자", koDesc: "시드니 & NSW" },
  { href: "/beyond-sydney", title: "Beyond Sydney", desc: "Weekend & road trips", koTitle: "시드니 밖으로", koDesc: "주말 여행 & 드라이브" },
  { href: "/resources", title: "Resources", desc: "Government & community", koTitle: "자료", koDesc: "정부 서비스 & 커뮤니티" },
];

export default function TestHomepage2() {
  const [active, setActive] = useState<StageKey>("visiting");

  return (
    <>
      <section className="bg-gradient-to-b from-gray-950 via-[#0f172a] to-[#0f172a]">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <En><span className="text-amber-400 text-sm font-semibold">New in Australia?</span></En>
            <Ko><span className="text-amber-400 text-sm font-semibold">호주에 처음 오셨나요?</span></Ko>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">G&apos;day</span>
            <span className="text-white"> and welcome</span>
            <span className="ml-2">🦘</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            <En>Your bilingual guide to Aussie life — all in one place, no fluff.</En>
            <Ko>호주 생활의 바이링구얼 가이드 — 한 곳에서.</Ko>
          </p>
        </div>
      </section>

      <section className="bg-[#0f172a] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {stages.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`relative overflow-hidden text-left p-6 rounded-2xl border transition-all duration-300 ${
                  active === s.key
                    ? "bg-gray-800/80 border-white/20 shadow-lg"
                    : "bg-gray-900/50 border-white/5 hover:bg-gray-800/50 hover:border-white/10"
                }`}
              >
                {active === s.key && (
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.glow} opacity-5`} />
                )}
                <div className="relative">
                  <div className="text-xs font-mono text-gray-500 mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <h2 className="text-xl font-bold text-white">
                    <En>{s.title}</En>
                    <Ko>{s.koTitle}</Ko>
                  </h2>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-gray-800/40 backdrop-blur rounded-2xl border border-white/10 p-6 md:p-8">
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] pb-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            <En>All Guides</En>
            <Ko>모든 가이드</Ko>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group block bg-gray-800/60 backdrop-blur rounded-xl border border-white/5 p-5 hover:border-amber-500/30 hover:bg-gray-700/50 transition-all duration-200"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  <En>{cat.title}</En>
                  <Ko>{cat.koTitle}</Ko>
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  <En>{cat.desc}</En>
                  <Ko>{cat.koDesc}</Ko>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SearchModal />
    </>
  );
}

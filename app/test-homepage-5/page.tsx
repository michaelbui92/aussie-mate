"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중" },
  { key: "arrived", title: "I just arrived", koTitle: "방금 도착" },
  { key: "home", title: "This is home", koTitle: "내 집" },
];

const categories = [
  { href: "/apartment", title: "Apartment Guide", koTitle: "부동산 가이드" },
  { href: "/finance", title: "Finance", koTitle: "금융" },
  { href: "/aussie-english", title: "Aussie English", koTitle: "호주 영어" },
  { href: "/sport", title: "Sport", koTitle: "스포츠" },
  { href: "/workplace", title: "Workplace", koTitle: "직장" },
  { href: "/study", title: "Study", koTitle: "학습" },
  { href: "/transport", title: "Transport", koTitle: "교통" },
  { href: "/tourist", title: "Tourist", koTitle: "여행자" },
  { href: "/beyond-sydney", title: "Beyond Sydney", koTitle: "시드니 밖으로" },
  { href: "/resources", title: "Resources", koTitle: "자료" },
];

export default function TestHomepage5() {
  const [active, setActive] = useState<StageKey>("visiting");

  return (
    <>
      {/* Hero */}
      <div className="max-w-3xl mx-auto px-4 pt-24 pb-20 text-center">
        <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-8">
          <En>Your guide to Aussie life</En>
          <Ko>호주 생활 가이드</Ko>
        </div>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-6">
          Welcome to<br/>
          <span className="italic font-serif">Australia</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
          <En>A bilingual companion for Koreans navigating life down under.</En>
          <Ko>호주에서 새로운 삶을 시작하는 한인 분들을 위한 바이링구얼 동반자.</Ko>
        </p>
      </div>

      {/* Stages — minimal tabs */}
      <div className="border-t border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="flex gap-8">
            {stages.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`text-sm transition-all pb-1 ${
                  active === s.key
                    ? "text-black font-semibold border-b-2 border-black"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <span className="mr-2 text-xs text-gray-300 font-mono">{String(i + 1).padStart(2, "0")}</span>
                <En>{s.title}</En>
                <Ko>{s.koTitle}</Ko>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        {active === "visiting" && <VisitingContent />}
        {active === "arrived" && <ArrivedContent />}
        {active === "home" && <HomeContent />}
      </div>

      {/* Categories — clean list */}
      <div className="border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400">
              <En>All Guides</En>
              <Ko>전체 가이드</Ko>
            </h2>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group flex items-center justify-between py-5 border-b border-gray-50 hover:border-gray-200 transition-colors"
              >
                <div>
                  <span className="text-gray-900 font-medium group-hover:text-gray-500 transition-colors">
                    <En>{cat.title}</En>
                    <Ko>{cat.koTitle}</Ko>
                  </span>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

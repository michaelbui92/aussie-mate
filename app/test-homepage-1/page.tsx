"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; accentBorder: string; hoverShadow: string; numColor: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", accentBorder: "border-l-amber-500", hoverShadow: "hover:shadow-amber-100", numColor: "text-amber-600" },
  { key: "arrived", title: "I just arrived", koTitle: "방금 도착했어요", accentBorder: "border-l-emerald-500", hoverShadow: "hover:shadow-emerald-100", numColor: "text-emerald-600" },
  { key: "home", title: "This is home", koTitle: "여기가 내 집이에요", accentBorder: "border-l-sky-500", hoverShadow: "hover:shadow-sky-100", numColor: "text-sky-600" },
];

const categories = [
  { href: "/apartment", title: "Apartment Guide", desc: "Renting in NSW, explained simply", koTitle: "부동산 가이드", koDesc: "NSW 임대 절차를 쉽게" },
  { href: "/finance", title: "Finance", desc: "Banking, tax, super, budgeting", koTitle: "금융", koDesc: "은행, 세금, 퇴직연금, 예산" },
  { href: "/aussie-english", title: "Aussie English", desc: "Decode Australian slang and phrases", koTitle: "호주 영어", koDesc: "호주 속어와 표현" },
  { href: "/sport", title: "Sport", desc: "NRL, AFL, cricket, and Aussie sports culture", koTitle: "스포츠", koDesc: "호주 스포츠 문화" },
  { href: "/workplace", title: "Workplace", desc: "Australian work culture and your rights", koTitle: "직장", koDesc: "직장 문화와 권리" },
  { href: "/study", title: "Study", desc: "University and academic life in Australia", koTitle: "학습", koDesc: "대학과 학업 생활" },
  { href: "/transport", title: "Transport", desc: "Opal, trains, buses, ferries, and driving", koTitle: "교통", koDesc: "오팔, 기차, 버스, 페리" },
  { href: "/tourist", title: "Tourist", desc: "Sydney and NSW for short-term visitors", koTitle: "여행자", koDesc: "시드니 & NSW 방문자" },
  { href: "/beyond-sydney", title: "Beyond Sydney", desc: "Weekend trips and road trips from Sydney", koTitle: "시드니 밖으로", koDesc: "주말 여행 & 드라이브" },
  { href: "/resources", title: "Resources", desc: "Government services and community links", koTitle: "자료", koDesc: "정부 서비스 & 커뮤니티" },
];

const topicAccents = [
  "border-l-amber-500 hover:shadow-amber-100",
  "border-l-emerald-500 hover:shadow-emerald-100",
  "border-l-sky-500 hover:shadow-sky-100",
  "border-l-rose-400 hover:shadow-rose-100",
  "border-l-violet-400 hover:shadow-violet-100",
  "border-l-teal-500 hover:shadow-teal-100",
  "border-l-orange-400 hover:shadow-orange-100",
  "border-l-amber-500 hover:shadow-amber-100",
  "border-l-cyan-500 hover:shadow-cyan-100",
  "border-l-fuchsia-400 hover:shadow-fuchsia-100",
];

export default function TestHomepage1() {
  const [active, setActive] = useState<StageKey>("visiting");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 via-white to-white">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 text-center">
          <div className="inline-block bg-amber-100 rounded-full px-4 py-1.5 mb-5">
            <En><span className="text-amber-700 text-sm font-semibold">New in Australia?</span></En>
            <Ko><span className="text-amber-700 text-sm font-semibold">호주에 처음 오셨나요?</span></Ko>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            <span className="text-amber-600">G&apos;day</span> and welcome 🦘
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            <En>Your friendly bilingual guide to Aussie life — from landing to living like a local.</En>
            <Ko>착륙부터 현지인처럼 사는 법까지 — 호주 생활의 친근한 바이링구얼 가이드.</Ko>
          </p>
        </div>
      </section>

      {/* Stages */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stages.map((s, i) => {
            const isActive = active === s.key;
            return (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`text-left p-6 rounded-xl border-l-4 transition-all duration-200 bg-white ${
                  isActive
                    ? `${s.accentBorder} shadow-lg ${s.hoverShadow} -translate-y-1`
                    : `border-gray-200 shadow-sm opacity-70 hover:opacity-100 hover:shadow-md ${s.accentBorder} border-l-4`
                }`}
              >
                <div className={`text-xs font-bold ${s.numColor} mb-2`}>{String(i + 1).padStart(2, "0")}</div>
                <h2 className="text-xl font-serif font-bold text-gray-900 mb-1">
                  <En>{s.title}</En>
                  <Ko>{s.koTitle}</Ko>
                </h2>
              </button>
            );
          })}
        </div>

        {/* Active stage content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
          {active === "visiting" && <VisitingContent />}
          {active === "arrived" && <ArrivedContent />}
          {active === "home" && <HomeContent />}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
          <En>Browse all guides</En>
          <Ko>모든 가이드 둘러보기</Ko>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`group block bg-white rounded-xl border-l-4 p-5 shadow-sm border-gray-100 ${topicAccents[i]} hover:shadow-xl hover:-translate-y-1 transition-all duration-200`}
            >
              <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
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
      </section>

      {/* Trust strip */}
      <section className="mt-12 bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>📚 <strong className="text-gray-900">10</strong> guides</span>
          <span>💬 <strong className="text-gray-900">209</strong> phrases</span>
          <span>🇰🇷 For Koreans in Australia</span>
        </div>
      </section>

      <SearchModal />
    </>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import { ICONS } from "@/destinations/icons";
import VisitingContent from "./personas/VisitingContent";
import ArrivedContent from "./personas/ArrivedContent";
import HomeContent from "./personas/HomeContent";

type StageKey = "visiting" | "arrived" | "home";

const stages: {
  key: StageKey;
  title: string;
  koTitle: string;
  desc: string;
  koDesc: string;
  /** color for top accent border + numbered label */
  borderColor: string;
  /** numbered label color (same family, slightly stronger) */
  labelColor: string;
}[] = [
  {
    key: "visiting",
    title: "I'm visiting",
    koTitle: "여행 중이에요",
    desc: "Short stay? Must-see spots, transport cards, and the basics.",
    koDesc: "단기 여행이세요? 필수 명소와 교통카드, 기본 정보.",
    borderColor: "border-t-wattle",
    labelColor: "text-wattle",
  },
  {
    key: "arrived",
    title: "I just got here",
    koTitle: "방금 도착했어요",
    desc: "Find a job, learn Aussie English, get around, see the city.",
    koDesc: "취업, 호주 영어, 교통, 시드니 명소 둘러보기.",
    borderColor: "border-t-sage",
    labelColor: "text-sage",
  },
  {
    key: "home",
    title: "I call this home",
    koTitle: "여기가 내 집이에요",
    desc: "Make friends, explore further, and start feeling like a local.",
    koDesc: "친구 사귀기, 더 멀리 여행하기, 호주 사람처럼 살기.",
    borderColor: "border-t-coast",
    labelColor: "text-coast",
  },
];

const categories = [
  {
    href: "/apartment",
    title: "Apartment Guide",
    desc: "Renting in NSW, explained simply",
    koTitle: "부동산 가이드",
    koDesc: "NSW 임대 절차를 쉽게 설명합니다",
    borderColor: "border-t-sage",
    accent: "text-sage",
  },
  {
    href: "/finance",
    title: "Finance",
    desc: "Banking, tax, superannuation, and budgeting",
    koTitle: "금융",
    koDesc: "은행, 세금, 퇴직연금, 예산 관리",
    borderColor: "border-t-sage-light",
    accent: "text-sage-light",
  },
  {
    href: "/aussie-english",
    title: "Aussie English",
    desc: "Decode Australian slang and phrases",
    koTitle: "호주 영어",
    koDesc: "호주 속어를 쉽게 설명합니다",
    borderColor: "border-t-sunset",
    accent: "text-sunset",
  },
  {
    href: "/sport",
    title: "Sport",
    desc: "NRL, AFL, cricket, and Aussie sports culture",
    koTitle: "스포츠",
    koDesc: "NRL, AFL, 크리켓, 호주 스포츠 문화",
    borderColor: "border-t-wattle",
    accent: "text-wattle",
  },
  {
    href: "/workplace",
    title: "Workplace",
    desc: "Australian work culture and your rights",
    koTitle: "직장",
    koDesc: "호주 직장 문화와 노동자 권리",
    borderColor: "border-t-coast",
    accent: "text-coast",
  },
  {
    href: "/study",
    title: "Study",
    desc: "University and academic life in Australia",
    koTitle: "학습",
    koDesc: "호주 대학과 학업 생활",
    borderColor: "border-t-gum",
    accent: "text-gum",
  },
  {
    href: "/transport",
    title: "Transport",
    desc: "Opal, trains, buses, ferries, and driving",
    koTitle: "교통",
    koDesc: "오팔 카드, 기차, 버스, 페리, 운전",
    borderColor: "border-t-sunset-light",
    accent: "text-sunset-light",
  },
  {
    href: "/tourist",
    title: "Tourist",
    desc: "Sydney and NSW for short-term visitors",
    koTitle: "여행자",
    koDesc: "시드니와 NSW 단기 방문자를 위한 정보",
    borderColor: "border-t-wattle",
    accent: "text-wattle",
  },
  {
    href: "/beyond-sydney",
    title: "Beyond Sydney",
    desc: "Weekend trips and road trips from Sydney",
    koTitle: "시드니 밖으로",
    koDesc: "시드니에서의 주말 여행과 드라이브",
    borderColor: "border-t-coast",
    accent: "text-coast",
  },
  {
    href: "/resources",
    title: "Resources",
    desc: "Government services and community links",
    koTitle: "자료",
    koDesc: "정부 서비스와 지역 사회 연결",
    borderColor: "border-t-sage-light",
    accent: "text-sage-light",
  },
];

const LAST_UPDATED = "12 June 2026";
const KO_LAST_UPDATED = "2026년 6월 12일";

export default function HomePage() {
  const [activeStage, setActiveStage] = useState<StageKey>("visiting");
  const active = stages.find((s) => s.key === activeStage)!;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-mesh pt-8 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-sunset/10 border border-sunset/20 rounded-full px-3 py-1.5 mb-5">
            <En><span className="text-sunset text-xs font-semibold">New in Australia?</span></En>
            <Ko><span className="text-sunset text-xs font-semibold">호주에 처음 오신 분들에게</span></Ko>
            <span className="text-eucalypt/50 text-xs">We've got you</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-eucalypt dark:text-white mb-3 leading-tight">
            <En>Welcome to <span className="text-sunset">Australia </span><span className="inline-block w-6 h-6 align-middle" dangerouslySetInnerHTML={{ __html: ICONS.kangaroo }} /></En>
            <Ko>호주에 오신 것을 <span className="text-sunset">환영합니다 </span><span className="inline-block w-6 h-6 align-middle" dangerouslySetInnerHTML={{ __html: ICONS.kangaroo }} /></Ko>
          </h1>

          <p className="text-base md:text-lg text-eucalypt/70 dark:text-dark-muted/70 mb-2 max-w-md mx-auto">
            <En>Your friendly guide to Aussie English, renting, working, studying, and everything in between.</En>
            <Ko>호주 영어, 임대, 취업, 대학생활 등 모든 것을 안내하는 친근한 가이드입니다.</Ko>
          </p>
        </div>
      </section>

      {/* Stages switcher + content */}
      <section className="max-w-4xl mx-auto px-4 pt-2 pb-8">
        <p className="text-xs uppercase tracking-wider text-eucalypt/50 dark:text-dark-muted/50 text-center mb-3 font-semibold">
          <En>Pick where you are</En>
          <Ko>현재 상황에 맞게</Ko>
        </p>

        {/* Stages bar */}
        <div
          role="tablist"
          aria-label="Pick your situation"
          className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-5"
        >
          {stages.map((s, i) => {
            const isActive = activeStage === s.key;
            return (
              <button
                key={s.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveStage(s.key)}
                className={`group text-left border border-eucalypt/10 dark:border-dark-border border-t-2 ${s.borderColor} glass-card rounded-md p-5 transition-colors ${
                  isActive
                    ? "border-eucalypt/40 dark:border-dark-muted/40"
                    : "hover:border-eucalypt/30 dark:hover:border-dark-muted/30"
                }`}
              >
                <div className={`text-[11px] font-mono font-bold tracking-widest ${s.labelColor} mb-3`}>
                  0{i + 1}
                </div>
                <h2 className={`text-lg font-semibold tracking-tight mb-1.5 ${
                  isActive
                    ? "text-eucalypt dark:text-white"
                    : "text-eucalypt/80 dark:text-white/80"
                }`}>
                  <En>{s.title}</En>
                  <Ko>{s.koTitle}</Ko>
                </h2>
                <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60 leading-relaxed">
                  <En>{s.desc}</En>
                  <Ko>{s.koDesc}</Ko>
                </p>
              </button>
            );
          })}
        </div>

        {/* Content area for the active stage */}
        <div
          key={activeStage}
          role="tabpanel"
          className={`rounded-2xl border-t-2 ${active.borderColor} glass-card p-5 sm:p-6 shadow-sm animate-card-in`}
        >
          {activeStage === "visiting" && <VisitingContent />}
          {activeStage === "arrived" && <ArrivedContent />}
          {activeStage === "home" && <HomeContent />}
        </div>
      </section>

      {/* Category grid */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-xs uppercase tracking-wider text-eucalypt/50 dark:text-dark-muted/50 text-center mb-4 font-semibold">
          <En>Or browse all topics</En>
          <Ko>또는 모든 주제 둘러보기</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <div key={cat.href} className="card-in" style={{ animationDelay: `${i * 0.06}s` }}>
              <Link
                href={cat.href}
                className={`group block border border-eucalypt/10 dark:border-dark-border border-t-2 ${cat.borderColor} glass-card rounded-md p-5 hover:border-eucalypt/40 dark:hover:border-dark-muted/40 transition-colors h-full`}
              >
                <h3 className={`text-base font-semibold tracking-tight ${cat.accent}`}>
                  <En>{cat.title}</En>
                  <Ko>{cat.koTitle}</Ko>
                </h3>
                <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60 mt-2 leading-relaxed">
                  <En>{cat.desc}</En>
                  <Ko>{cat.koDesc}</Ko>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-eucalypt/10 dark:border-dark-border glass-section py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-eucalypt/70 dark:text-dark-muted/70">
          <div className="flex items-center gap-1.5">
            <span aria-hidden>📚</span>
            <En><strong className="text-eucalypt dark:text-white font-bold">10</strong> guides</En>
            <Ko><strong className="text-eucalypt dark:text-white font-bold">10</strong>개의 가이드</Ko>
          </div>
          <span aria-hidden className="hidden sm:inline text-eucalypt/30 dark:text-dark-muted/30">·</span>
          <div className="flex items-center gap-1.5">
            <span aria-hidden>💬</span>
            <En><strong className="text-eucalypt dark:text-white font-bold">209</strong> Aussie phrases</En>
            <Ko><strong className="text-eucalypt dark:text-white font-bold">209</strong>개의 호주 표현</Ko>
          </div>
          <span aria-hidden className="hidden sm:inline text-eucalypt/30 dark:text-dark-muted/30">·</span>
          <div className="flex items-center gap-1.5">
            <span aria-hidden>🔄</span>
            <En>Last updated: {LAST_UPDATED}</En>
            <Ko>최종 업데이트: {KO_LAST_UPDATED}</Ko>
          </div>
          <span aria-hidden className="hidden sm:inline text-eucalypt/30 dark:text-dark-muted/30">·</span>
          <div className="flex items-center gap-1.5">
            <span aria-hidden>🇰🇷</span>
            <En>Built for Koreans in Australia</En>
            <Ko>호주 한인 분들을 위해</Ko>
          </div>
        </div>
      </section>
    </div>
  );
}

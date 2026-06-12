"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; desc: string; koDesc: string; numColor: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", desc: "Short trip? Must-sees, Opal cards, Aussie basics.", koDesc: "단기 여행? 필수 명소, 오팔 카드, 호주 기본.", numColor: "text-orange-500" },
  { key: "arrived", title: "I just got here", koTitle: "방금 도착했어요", desc: "Find work, decode Aussie English, get around.", koDesc: "취업, 호주 영어, 교통 파악하기.", numColor: "text-emerald-500" },
  { key: "home", title: "I call this home", koTitle: "여기가 내 집이에요", desc: "Build a life, make friends, feel at home.", koDesc: "생활 기반, 친구 사귀기, 정착하기.", numColor: "text-sky-500" },
];

const categories = [
  { href: "/apartment", title: "Apartment Guide", titleKo: "부동산 가이드", desc: "Renting in NSW, explained simply", descKo: "NSW 임대 절차 쉽게", accent: "text-orange-600", border: "border-l-orange-400", hover: "hover:bg-orange-50", hoverBorder: "hover:border-orange-200" },
  { href: "/finance", title: "Finance", titleKo: "금융", desc: "Banking, tax, super, budgeting", descKo: "은행, 세금, 퇴직연금, 예산", accent: "text-amber-600", border: "border-l-amber-400", hover: "hover:bg-amber-50", hoverBorder: "hover:border-amber-200" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", desc: "Decode the accent, slang, hidden meanings", descKo: "호주 발음, 속어, 숨겨진 의미", accent: "text-rose-600", border: "border-l-rose-400", hover: "hover:bg-rose-50", hoverBorder: "hover:border-rose-200" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", desc: "NRL, AFL, cricket, and the obsession", descKo: "NRL, AFL, 크리켓, 호주 스포츠 열정", accent: "text-emerald-600", border: "border-l-emerald-400", hover: "hover:bg-emerald-50", hoverBorder: "hover:border-emerald-200" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", desc: "Work culture, your rights, and thriving", descKo: "직장 문화, 권리, 성장하는 법", accent: "text-sky-600", border: "border-l-sky-400", hover: "hover:bg-sky-50", hoverBorder: "hover:border-sky-200" },
  { href: "/study", title: "Study", titleKo: "학습", desc: "University and academic life in Australia", descKo: "호주 대학과 학업 생활", accent: "text-violet-600", border: "border-l-violet-400", hover: "hover:bg-violet-50", hoverBorder: "hover:border-violet-200" },
  { href: "/transport", title: "Transport", titleKo: "교통", desc: "Opal, trains, buses, ferries, driving", descKo: "오팔, 기차, 버스, 페리, 운전", accent: "text-teal-600", border: "border-l-teal-400", hover: "hover:bg-teal-50", hoverBorder: "hover:border-teal-200" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", desc: "Sydney and NSW for short-stay visitors", descKo: "시드니 & NSW 단기 방문자", accent: "text-cyan-600", border: "border-l-cyan-400", hover: "hover:bg-cyan-50", hoverBorder: "hover:border-cyan-200" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", desc: "Weekend trips and road trips from Sydney", descKo: "시드니 주말 여행 & 드라이브", accent: "text-indigo-600", border: "border-l-indigo-400", hover: "hover:bg-indigo-50", hoverBorder: "hover:border-indigo-200" },
  { href: "/resources", title: "Resources", titleKo: "자료", desc: "Government services and community links", descKo: "정부 서비스와 지역 사회 연결", accent: "text-stone-500", border: "border-l-stone-400", hover: "hover:bg-stone-50", hoverBorder: "hover:border-stone-200" },
];

const stageThemes: Record<StageKey, { bg: string; activeBg: string; activeBorder: string; label: string }> = {
  visiting: { bg: "bg-orange-50 hover:bg-orange-100 border-stone-200", activeBg: "bg-orange-100 shadow-md -mt-1", activeBorder: "border-l-orange-400", label: "text-orange-600" },
  arrived: { bg: "bg-emerald-50 hover:bg-emerald-100 border-stone-200", activeBg: "bg-emerald-100 shadow-md -mt-1", activeBorder: "border-l-emerald-400", label: "text-emerald-600" },
  home: { bg: "bg-sky-50 hover:bg-sky-100 border-stone-200", activeBg: "bg-sky-100 shadow-md -mt-1", activeBorder: "border-l-sky-400", label: "text-sky-600" },
};

export default function TestHomepage6() {
  const [active, setActive] = useState<StageKey>("visiting");
  const theme = stageThemes[active];

  return (
    <>
      <div className="bg-stone-50 min-h-screen">
        {/* Header */}
        <header className="bg-white border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-semibold mb-4">
              <En>The Aussie Guide</En>
              <Ko>호주 생활 가이드</Ko>
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-3 leading-tight">
              <En>Welcome to <span className="text-orange-500">Australia</span></En>
              <Ko><span className="text-orange-500">호주에</span> 오신 것을 환영합니다</Ko>
            </h1>
            <p className="text-lg text-stone-500 max-w-md">
              <En>Your bilingual guide to Aussie life — landing to living like a local.</En>
              <Ko>착륙부터 현지인처럼 사는 법까지 — 호주 생활의 바이링구얼 가이드.</Ko>
            </p>
          </div>
        </header>

        {/* Stages */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-semibold mb-4">
            <En>Where are you in your journey?</En>
            <Ko>현재 상황은 어디쯤인가요?</Ko>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {stages.map((s) => {
              const isActive = active === s.key;
              return (
                <button
                  key={s.key}
                  onClick={() => setActive(s.key)}
                  className={`text-left p-5 rounded-xl border-l-4 transition-all duration-200 ${isActive ? `${theme.activeBg} ${theme.activeBorder}` : `bg-white ${theme.bg} border-stone-200`}`}
                >
                  <div className={`text-[11px] font-mono font-bold tracking-widest ${isActive ? theme.label : "text-stone-400"} mb-2`}>
                    {String(stages.indexOf(s) + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-lg font-bold text-stone-900 mb-0.5">
                    <En>{s.title}</En>
                    <Ko>{s.koTitle}</Ko>
                  </h2>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    <En>{s.desc}</En>
                    <Ko>{s.koDesc}</Ko>
                  </p>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 md:p-8">
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-5xl mx-auto px-4 pb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-semibold mb-4">
            <En>Browse all guides</En>
            <Ko>모든 가이드 둘러보기</Ko>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`group block bg-white rounded-xl border-l-4 border border-stone-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${cat.border}`}
              >
                <h3 className={`text-base font-bold ${cat.accent} mb-1`}>
                  <En>{cat.title}</En>
                  <Ko>{cat.titleKo}</Ko>
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  <En>{cat.desc}</En>
                  <Ko>{cat.descKo}</Ko>
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer strip */}
        <footer className="bg-white border-t border-stone-200 py-8">
          <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm text-stone-400">
            <span>10 guides</span>
            <span>209 phrases</span>
            <span>Koreans in Australia</span>
          </div>
        </footer>
      </div>
      <SearchModal />
    </>
  );
}

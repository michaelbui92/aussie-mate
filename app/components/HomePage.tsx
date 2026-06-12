"use client";
import { Suspense } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import { Icons } from "./Icons";
import PersonaSheet from "./PersonaSheet";
import VisitingContent from "./personas/VisitingContent";
import ArrivedContent from "./personas/ArrivedContent";
import LivingContent from "./personas/LivingContent";

const lanes = [
  {
    paramKey: "visiting",
    href: "/?sheet=visiting",
    emoji: "✈️",
    title: "I'm visiting",
    koTitle: "여행 중이에요",
    desc: "Short stay? Must-see spots, transport cards, and the basics.",
    koDesc: "단기 여행이세요? 필수 명소와 교통카드, 기본 정보.",
    color: "bg-wattle/10 border-wattle/30",
    accent: "text-wattle",
    iconBg: "bg-wattle/20",
  },
  {
    paramKey: "arrived",
    href: "/?sheet=arrived",
    emoji: "🏠",
    title: "I just got here",
    koTitle: "방금 도착했어요",
    desc: "Find a place to live, open a bank account, get set up.",
    koDesc: "집 구하기, 은행 계좌, 정착에 필요한 것들.",
    color: "bg-sage/10 border-sage/30",
    accent: "text-sage",
    iconBg: "bg-sage/20",
  },
  {
    paramKey: "living",
    href: "/?sheet=living",
    emoji: "💼",
    title: "I live in Australia",
    koTitle: "호주에 살고 있어요",
    desc: "Work, money, tax, super, and the slang you'll hear this week.",
    koDesc: "일, 돈, 세금, 퇴직연금, 그리고 이번 주에 들을 표현들.",
    color: "bg-sunset/10 border-sunset/30",
    accent: "text-sunset",
    iconBg: "bg-sunset/20",
  },
];

const categories = [
  {
    href: "/apartment",
    icon: "Home",
    title: "Apartment Guide",
    desc: "Renting in NSW, explained simply",
    koTitle: "부동산 가이드",
    koDesc: "NSW 임대 절차를 쉽게 설명합니다",
    color: "bg-sage/10 border-sage/30",
    accent: "text-sage",
    iconBg: "bg-sage/20",
  },
  {
    href: "/finance",
    icon: "Wallet",
    title: "Finance",
    desc: "Banking, tax, superannuation, and budgeting",
    koTitle: "금융",
    koDesc: "은행, 세금, 퇴직연금, 예산 관리",
    color: "bg-sage-light/10 border-sage-light/30",
    accent: "text-sage-light",
    iconBg: "bg-sage-light/20",
    startHere: true,
  },
  {
    href: "/aussie-english",
    icon: "Globe",
    title: "Aussie English",
    desc: "Decode Australian slang and phrases",
    koTitle: "호주 영어",
    koDesc: "호주 속어를 쉽게 설명합니다",
    color: "bg-sunset/10 border-sunset/30",
    accent: "text-sunset",
    iconBg: "bg-sunset/20",
  },
  {
    href: "/workplace",
    icon: "Briefcase",
    title: "Workplace",
    desc: "Australian work culture and your rights",
    koTitle: "직장",
    koDesc: "호주 직장 문화와 노동자 권리",
    color: "bg-coast/10 border-coast/30",
    accent: "text-coast",
    iconBg: "bg-coast/20",
  },
  {
    href: "/study",
    icon: "GraduationCap",
    title: "Study",
    desc: "University and academic life in Australia",
    koTitle: "학습",
    koDesc: "호주 대학과 학업 생활",
    color: "bg-gum/10 border-gum/30",
    accent: "text-gum",
    iconBg: "bg-gum/20",
  },
  {
    href: "/transport",
    icon: "Car",
    title: "Transport",
    desc: "Opal, trains, buses, ferries, and driving",
    koTitle: "교통",
    koDesc: "오팔 카드, 기차, 버스, 페리, 운전",
    color: "bg-sunset-light/10 border-sunset-light/30",
    accent: "text-sunset-light",
    iconBg: "bg-sunset-light/20",
  },
  {
    href: "/tourist",
    icon: "MapPin",
    title: "Tourist",
    desc: "Sydney and NSW for short-term visitors",
    koTitle: "여행자",
    koDesc: "시드니와 NSW短期 방문자를 위한 정보",
    color: "bg-wattle/10 border-wattle/30",
    accent: "text-wattle",
    iconBg: "bg-wattle/20",
    startHere: true,
  },
  {
    href: "/beyond-sydney",
    icon: "Navigation",
    title: "Beyond Sydney",
    desc: "Weekend trips and road trips from Sydney",
    koTitle: "시드니 밖으로",
    koDesc: "시드니에서의 주말 여행과 드라이브",
    color: "bg-coast/10 border-coast/30",
    accent: "text-coast",
    iconBg: "bg-coast/20",
  },
  {
    href: "/resources",
    icon: "Link",
    title: "Resources",
    desc: "Government services and community links",
    koTitle: "자료",
    koDesc: "정부 서비스와 지역 사회 연결",
    color: "bg-sage-light/10 border-sage-light/30",
    accent: "text-sage-light",
    iconBg: "bg-sage-light/20",
  },
];

const LAST_UPDATED = "12 June 2026";
const KO_LAST_UPDATED = "2026년 6월 12일";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-8 pb-10 px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-sunset/10 border border-sunset/20 rounded-full px-3 py-1.5 mb-5">
            <En><span className="text-sunset text-xs font-semibold">New in Australia?</span></En>
            <Ko><span className="text-sunset text-xs font-semibold">호주에 처음 오신 분들에게</span></Ko>
            <span className="text-eucalypt/50 text-xs">We've got you</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-eucalypt dark:text-white mb-3 leading-tight">
            <En>Welcome to <span className="text-sunset">Australia 🦘</span></En>
            <Ko>호주에 오신 것을 <span className="text-sunset">환영합니다 🦘</span></Ko>
          </h1>

          <p className="text-base md:text-lg text-eucalypt/70 dark:text-dark-muted/70 mb-6 max-w-md mx-auto">
            <En>Your friendly guide to Aussie English, renting, working, studying, and everything in between.</En>
            <Ko>호주 영어, 임대, 취업, 대학생활 등 모든 것을 안내하는 친근한 가이드입니다.</Ko>
          </p>
        </div>

        {/* Pick-your-situation lanes */}
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-eucalypt/50 dark:text-dark-muted/50 text-center mb-3 font-semibold">
            <En>Pick your situation</En>
            <Ko>상황에 맞게 시작하기</Ko>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {lanes.map((lane, i) => (
              <Link
                key={lane.href}
                href={lane.href}
                className={`group card-in card-hover ${lane.color} border rounded-2xl p-5 flex flex-col gap-2 text-left`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={`w-12 h-12 ${lane.iconBg} rounded-xl flex items-center justify-center text-2xl mb-1`}>
                  <span aria-hidden>{lane.emoji}</span>
                </div>
                <h2 className={`font-bold text-base ${lane.accent}`}>
                  <En>{lane.title}</En>
                  <Ko>{lane.koTitle}</Ko>
                </h2>
                <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60 leading-snug">
                  <En>{lane.desc}</En>
                  <Ko>{lane.koDesc}</Ko>
                </p>
                <div className="mt-auto pt-1">
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold ${lane.accent} group-hover:gap-2 transition-all`}>
                    <En>Go</En>
                    <Ko>시작</Ko>
                    <Icons.ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-xs uppercase tracking-wider text-eucalypt/50 dark:text-dark-muted/50 text-center mb-4 font-semibold">
          <En>Or browse all topics</En>
          <Ko>또는 모든 주제 둘러보기</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <div
              key={cat.href}
              className="card-in"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <Link
                href={cat.href}
                className={`group card-hover ${cat.color} border rounded-2xl p-5 flex flex-col gap-2 h-full relative`}
              >
                {cat.startHere && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-sunset text-white px-2 py-0.5 rounded-full">
                    <En>Start here</En>
                    <Ko>시작하기</Ko>
                  </span>
                )}
                <div className={`w-12 h-12 ${cat.iconBg} rounded-xl flex items-center justify-center mb-1`}>
                  {(() => { const IconComp = (Icons as unknown as Record<string, React.ComponentType<{className?: string}>>)[cat.icon]; return IconComp ? <IconComp className={`w-6 h-6 ${cat.accent}`} /> : null; })()}
                </div>
                <h3 className={`font-bold text-base ${cat.accent}`}><En>{cat.title}</En><Ko>{cat.koTitle}</Ko></h3>
                <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60 leading-snug"><En>{cat.desc}</En><Ko>{cat.koDesc}</Ko></p>
                <div className="mt-auto pt-1">
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold ${cat.accent} group-hover:gap-2 transition-all`}><En>Explore</En><Ko>둘러보기</Ko><Icons.ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Persona sheets — keyed by ?sheet=visiting|arrived|living */}
      <Suspense fallback={null}>
        <PersonaSheet
          paramKey="visiting"
          emoji="✈️"
          bandClass="bg-wattle/15"
          title={{ en: "I'm visiting Sydney", ko: "시드니에 방문 중이에요" }}
          subtitle={{ en: "Solo or with someone — here's how to make the most of it.", ko: "혼자든 함께든, 제대로 즐기는 법을 알려드려요." }}
        >
          <VisitingContent />
        </PersonaSheet>

        <PersonaSheet
          paramKey="arrived"
          emoji="🏠"
          bandClass="bg-sage/15"
          title={{ en: "Welcome — you just got here", ko: "호주에 오신 걸 환영해요" }}
          subtitle={{ en: "First-week checklist for sorting out the essentials.", ko: "꼭 챙길 첫 주 체크리스트." }}
        >
          <ArrivedContent />
        </PersonaSheet>

        <PersonaSheet
          paramKey="living"
          emoji="💼"
          bandClass="bg-sunset/15"
          title={{ en: "You're settled — now what?", ko: "정착했어요 — 이제 뭘 할까요?" }}
          subtitle={{ en: "The ongoing stuff: tax, super, healthcare, citizenship, and the slang you'll keep hearing.", ko: "꾸준히 챙길 것들: 세금, super, 의료, 시민권, 그리고 계속 들을 표현들." }}
        >
          <LivingContent />
        </PersonaSheet>
      </Suspense>

      {/* Trust strip */}
      <section className="border-t border-eucalypt/10 dark:border-dark-border bg-cream/50 dark:bg-dark-surface/30 py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-eucalypt/70 dark:text-dark-muted/70">
          <div className="flex items-center gap-1.5">
            <span aria-hidden>📚</span>
            <En><strong className="text-eucalypt dark:text-white font-bold">9</strong> guides</En>
            <Ko><strong className="text-eucalypt dark:text-white font-bold">9</strong>개의 가이드</Ko>
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

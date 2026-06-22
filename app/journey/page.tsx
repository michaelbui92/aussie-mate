// The Journey — hub page. Replaces the homepage persona selector.
// Three cards: Before you come / I arrived / I call this home. Each links
// to a sub-route that renders the corresponding persona content
// (BeforeContent, ArrivedContent, HomeContent).
//
// Why a hub page instead of tabs on the homepage:
//   1. Homepage stays visual (hero → CTA → destinations → experiences)
//   2. Each stage gets a real, shareable, SEO-friendly URL
//   3. The persona content stops competing with destinations/experiences
//      for the same real estate
//
// Card design is gradient-based with no stock photos — Michael supplies
// all images via public/ uploads; stock-photo IDs are unreliable.

import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo(
  {
    title: "The Journey — 호주 여정 가이드 (한국어/English)",
    description:
      "호주에 출발 전, 방금 도착, 장기 체류 — 단계별로 정리한 호주 생활 가이드. 비자, 은행, SIM, TFN, 집 구하기, 퇴직연금, 영주권까지 한국어와 영어로 안내합니다.",
  },
  "journey"
);

type Stage = {
  href: string;
  number: string;
  emoji: string;
  // Sky / Emerald / Teal — kept the original persona colors so the
  // sub-page content (which uses the same accents) reads as one design.
  accent: "sky" | "emerald" | "teal";
  titleEn: string;
  titleKo: string;
  taglineEn: string;
  taglineKo: string;
  startHereEn: string;
  startHereKo: string;
  pills: { icon: string; en: string; ko: string }[];
};

const stages: Stage[] = [
  {
    href: "/journey/before-you-come",
    number: "01",
    emoji: "📋",
    accent: "sky",
    titleEn: "Before you come",
    titleKo: "호주에 오기 전에",
    taglineEn: "The 4-6 weeks before your flight. Visa, bank, eSIM, packing.",
    taglineKo: "출발 전 4-6주. 비자, 은행, eSIM, 짐 싸기.",
    startHereEn: "Pre-flight checklist",
    startHereKo: "출발 전 체크리스트",
    pills: [
      { icon: "📄", en: "Visa + documents", ko: "비자 + 서류" },
      { icon: "🏦", en: "Open a bank account", ko: "은행 계좌 개설" },
      { icon: "📶", en: "eSIM sorted", ko: "eSIM 준비" },
    ],
  },
  {
    href: "/journey/arrived",
    number: "02",
    emoji: "📦",
    accent: "emerald",
    titleEn: "I arrived",
    titleKo: "방금 도착했어요",
    taglineEn: "First month sorted: number, bank, place to live, TFN.",
    taglineKo: "첫 달 셋업: 전화번호, 은행, 거주지, TFN.",
    startHereEn: "Start here",
    startHereKo: "먼저 이것부터",
    pills: [
      { icon: "📱", en: "Get your number", ko: "전화번호 받기" },
      { icon: "🏠", en: "Find a place", ko: "집 구하기" },
      { icon: "📋", en: "Apply for TFN", ko: "TFN 신청" },
    ],
  },
  {
    href: "/journey/home",
    number: "03",
    emoji: "🏡",
    accent: "teal",
    titleEn: "I call this home",
    titleKo: "여기가 내 집이에요",
    taglineEn: "Long-term Australian — work, lifestyle, finances.",
    taglineKo: "장기 호주 거주 — 직장, 생활, 재무.",
    startHereEn: "Start here",
    startHereKo: "먼저 이것부터",
    pills: [
      { icon: "💰", en: "Check super balance", ko: "퇴직연금 잔액 확인" },
      { icon: "🏠", en: "Know tenant rights", ko: "임차인 권리 파악" },
      { icon: "🌏", en: "Map your PR timeline", ko: "영주권 타임라인 설계" },
    ],
  },
];

const accentClasses: Record<
  Stage["accent"],
  { bg: string; ring: string; text: string; sub: string; pill: string }
> = {
  sky: {
    bg: "bg-gradient-to-br from-sky-500 to-sky-600",
    ring: "ring-sky-500/20 hover:ring-sky-500/40",
    text: "text-white",
    sub: "text-white/80",
    pill: "bg-white/15 border-white/20 text-white",
  },
  emerald: {
    bg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    ring: "ring-emerald-500/20 hover:ring-emerald-500/40",
    text: "text-white",
    sub: "text-white/80",
    pill: "bg-white/15 border-white/20 text-white",
  },
  teal: {
    bg: "bg-gradient-to-br from-teal-500 to-teal-600",
    ring: "ring-teal-500/20 hover:ring-teal-500/40",
    text: "text-white",
    sub: "text-white/80",
    pill: "bg-white/15 border-white/20 text-white",
  },
};

export default function JourneyPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg">
      {/* ============================ INTRO ============================ */}
      <section className="bg-white dark:bg-dark-surface border-b border-stone-200 dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>The Journey</En>
            <Ko>호주 여정</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-100 leading-tight mb-5">
            <En>Before you fly, after you land, and everything in between.</En>
            <Ko>출발 전, 도착 후, 그 사이의 모든 것.</Ko>
          </h1>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl mx-auto">
            <En>
              Three stages of being in Australia, three different guides.
              Pick where you are — each page gives you the things to do in
              the first week, the mistakes that cost real money, and the
              links that actually matter.
            </En>
            <Ko>
              호주에서의 세 단계, 세 가지 다른 가이드. 현재 상황에 맞는 단계를
              선택하세요 — 각 페이지에서 첫 주에 할 일, 실제로 돈이 드는 실수,
              그리고 진짜 중요한 링크를 알려드립니다.
            </Ko>
          </p>
        </div>
      </section>

      {/* ============================ STAGE CARDS ============================ */}
      <section className="bg-stone-50 dark:bg-darkbg">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {stages.map((s, i) => {
              const c = accentClasses[s.accent];
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`reveal reveal-delay-${i + 1} group ${c.bg} ${c.ring} rounded-3xl p-6 md:p-7 ring-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-mono text-xs text-white/70">
                      {s.number}
                    </span>
                    <span className="text-3xl md:text-4xl">{s.emoji}</span>
                  </div>

                  <h2 className={`font-serif text-2xl md:text-3xl ${c.text} leading-tight mb-2`}>
                    <En>{s.titleEn}</En>
                    <Ko>{s.titleKo}</Ko>
                  </h2>
                  <p className={`${c.sub} text-sm leading-relaxed mb-5`}>
                    <En>{s.taglineEn}</En>
                    <Ko>{s.taglineKo}</Ko>
                  </p>

                  {/* Start here — three preview pills (visible at a glance
                      so visitors can see what the page will actually cover
                      before clicking). */}
                  <div className="mt-auto">
                    <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 mb-2.5">
                      <En>{s.startHereEn}</En>
                      <Ko>{s.startHereKo}</Ko>
                    </p>
                    <ul className="space-y-1.5 mb-5">
                      {s.pills.map((p) => (
                        <li
                          key={p.en}
                          className={`flex items-center gap-2 text-xs md:text-sm ${c.text}`}
                        >
                          <span>{p.icon}</span>
                          <span>
                            <En>{p.en}</En>
                            <Ko>{p.ko}</Ko>
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className={`inline-flex items-center gap-1.5 text-sm font-semibold ${c.text}`}>
                      <En>Read the guide</En>
                      <Ko>가이드 읽기</Ko>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ WHY STAGES ============================ */}
      <section className="bg-white dark:bg-dark-surface border-t border-stone-200 dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>Why three stages</En>
            <Ko>왜 세 단계인가</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-5 leading-tight">
            <En>Same country, very different questions.</En>
            <Ko>같은 나라, 완전히 다른 질문들.</Ko>
          </h2>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base md:text-lg max-w-3xl">
            <En>
              Someone still planning their move needs a visa, a bank
              account, and an eSIM. Someone in their first week needs a
              phone number, a TFN, and a place to live. Someone staying
              long-term needs super, tenant rights, and a PR plan. The three
              stages are kept separate because the answers barely overlap.
            </En>
            <Ko>
              출발 준비 중인 사람은 비자, 은행 계좌, eSIM이 필요합니다.
              첫 주에 있는 사람은 전화번호, TFN, 집이 필요합니다. 장기
              체류자는 퇴직연금, 임차인 권리, 영주권 계획이 필요합니다.
              세 단계가 거의 겹치지 않기 때문에 분리해 두었습니다.
            </Ko>
          </p>
        </div>
      </section>
    </div>
  );
}

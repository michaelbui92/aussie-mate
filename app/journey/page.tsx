// The Journey — hub page. Replaces the homepage persona selector.
// Three cards: Visiting / Arrived / Home. Each links to a sub-route that
// renders the corresponding persona content (VisitingContent, etc.).
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
      "호주에 처음 오셨나요, 방금 도착하셨나요, 아니면 오래 살아오셨나요? 단계별로 정리한 호주 생활 가이드. 첫 방문 필수 정보, 첫 달 셋업, 장기 체류 노하우까지 한국어와 영어로 안내합니다.",
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
    href: "/journey/visiting",
    number: "01",
    emoji: "✈️",
    accent: "sky",
    titleEn: "I'm visiting",
    titleKo: "여행 중이에요",
    taglineEn: "Holiday, working holiday, or just passing through.",
    taglineKo: "휴가, 워홀, 또는 잠시 들른 경우.",
    startHereEn: "Start here",
    startHereKo: "먼저 이것부터",
    pills: [
      { icon: "☀️", en: "SPF 50+ on day one", ko: "첫날부터 SPF 50+" },
      { icon: "💳", en: "Opal at the airport", ko: "공항에서 오팔 카드" },
      { icon: "🗣️", en: "Five Aussie words", ko: "호주식 영어 다섯 단어" },
    ],
  },
  {
    href: "/journey/arrived",
    number: "02",
    emoji: "📦",
    accent: "emerald",
    titleEn: "I just got here",
    titleKo: "방금 도착했어요",
    taglineEn: "First month sorted: bank, TFN, SIM, place to live.",
    taglineKo: "첫 달 셋업: 은행, TFN, SIM, 거주지.",
    startHereEn: "Start here",
    startHereKo: "먼저 이것부터",
    pills: [
      { icon: "📱", en: "SIM on day one", ko: "첫날 SIM 개통" },
      { icon: "🏦", en: "Bank account this week", ko: "이번 주 은행 계좌" },
      { icon: "📋", en: "TFN before first pay", ko: "첫 월급 전 TFN 신청" },
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
            <En>Where are you in the journey?</En>
            <Ko>여정의 어디에 있나요?</Ko>
          </h1>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl mx-auto">
            <En>
              Three stages, three different guides. Pick where you are — each
              page gives you the things to do in the first week, the mistakes
              that cost real money, and the links that actually matter.
            </En>
            <Ko>
              세 단계, 세 가지 다른 가이드. 현재 상황에 맞는 단계를 선택하세요 —
              각 페이지에서 첫 주에 할 일, 실제로 돈이 드는 실수, 그리고 진짜
              중요한 링크를 알려드립니다.
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
              A tourist needs Opal, sunscreen, and the harbour walk. A new
              resident needs a bank account, a TFN, and a GP. A long-termer
              needs super, tenant rights, and a PR plan. The three stages are
              kept separate because the answers barely overlap.
            </En>
            <Ko>
              여행자는 오팔, 자외선 차단제, 하버 산책이 필요합니다. 신참
              이주민은 은행 계좌, TFN, GP가 필요합니다. 장기 체류자는 퇴직연금,
              임차인 권리, 영주권 계획이 필요합니다. 세 단계가 거의 겹치지
              않기 때문에 분리해 두었습니다.
            </Ko>
          </p>
        </div>
      </section>
    </div>
  );
}

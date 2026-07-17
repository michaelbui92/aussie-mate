// The Journey — hub page. Replaces the homepage persona selector.
// Three cards: Before you come / I arrived / I call this home.
//
// Tone: a personal welcome, not a checklist. Each card is a message
// to the visitor depending on where they are in the journey. No pills,
// no "Start here" preview — just the welcome message and a link into
// the stage's full guide.

import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import { withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";

export const metadata = withSeo(
  {
    title: "The Journey — Australia Guide by Stage: Before You Arrive, First Month, Long-Term | AussieGuides",
    description:
      "Your Australia journey in three stages — before you arrive, just landed, and long-term settling. Visa, banking, SIM, TFN, finding housing, PR, culture shock, and making friends.",
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
  // The "letter" — a personal message to a visitor in this stage. No
  // bullets, no checklist. The card body IS the preview.
  messageEn: string;
  messageKo: string;
};

const stages: Stage[] = [
  {
    href: "/journey/before-you-come",
    number: "01",
    emoji: "✈️",
    accent: "sky",
    titleEn: "Before you come",
    titleKo: "호주에 오기 전에",
    messageEn:
      "If you have not visited Australia, please access Before you come. There are tips to get you ready. Learn some essential Aussie slang.",
    messageKo:
      "아직 호주를 방문하지 않으셨다면, Before you come을 확인해 주세요. 출발 준비를 위한 팁이 있습니다. 필수 호주 슬랭도 함께 배워보세요.",
  },
  {
    href: "/journey/arrived",
    number: "02",
    emoji: "📦",
    accent: "emerald",
    titleEn: "I arrived",
    titleKo: "방금 도착했어요",
    messageEn:
      "If you have arrived, visit here, get yourself ready, look for a job, apply. It can be daunting living in a new place but don't stress. Be wary of scammers, etc.",
    messageKo:
      "방금 도착하셨다면, 이 페이지를 확인하고 준비하세요. 구직도 시작하세요. 낯선 곳에서의 생활이 쉽지 않을 수 있지만 너무 스트레스 받지 마세요. 사기꾼도 주의하시고요.",
  },
  {
    href: "/journey/home",
    number: "03",
    emoji: "🏡",
    accent: "teal",
    titleEn: "I call this home",
    titleKo: "여기가 내 집이에요",
    messageEn:
      "If you have been here for a while and you love it here and want to continue living as long as you can, think about your next steps.",
    messageKo:
      "이미 오래 사셨고, 이곳이 좋아서 가능한 한 계속 살고 싶으시다면, 다음 단계를 생각해 보세요.",
  },
];

const accentClasses: Record<
  Stage["accent"],
  { bg: string; ring: string; text: string; sub: string }
> = {
  sky: {
    bg: "bg-gradient-to-br from-sky-500 to-sky-600",
    ring: "ring-sky-500/20 hover:ring-sky-500/40",
    text: "text-white",
    sub: "text-white/85",
  },
  emerald: {
    bg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    ring: "ring-emerald-500/20 hover:ring-emerald-500/40",
    text: "text-white",
    sub: "text-white/85",
  },
  teal: {
    bg: "bg-gradient-to-br from-teal-500 to-teal-600",
    ring: "ring-teal-500/20 hover:ring-teal-500/40",
    text: "text-white",
    sub: "text-white/85",
  },
};

export default function JourneyPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg">
      {/* ============================ INTRO ============================ */}
      <section className="bg-white dark:bg-dark-surface border-b border-stone-200 dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>The Journey</En>
            <Ko>호주 여정</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-100 leading-tight mb-5">
            <En>Welcome to Australia. You&apos;ve made a good choice.</En>
            <Ko>호주에 오신 것을 환영합니다. 좋은 선택이에요.</Ko>
          </h1>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl mx-auto">
            <En>
              Living in a new country is bold and courageous. Make
              experiences. Make friends. Learn, and ultimately have fun.
              It may not be easy — but I&apos;m here to help.
            </En>
            <Ko>
              새로운 나라에서 사는 것은 과감하고 용기 있는 일입니다. 경험을
              만들고, 친구를 사귀고, 배우고, 결국 즐기세요. 쉽지 않을 수 있지만
              — 제가 도와드리겠습니다.
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
                  className={`reveal reveal-delay-${i + 1} group ${c.bg} ${c.ring} rounded-3xl p-6 md:p-8 ring-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col min-h-[300px]`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-mono text-xs text-white/70">
                      {s.number}
                    </span>
                    <span className="text-3xl md:text-4xl">{s.emoji}</span>
                  </div>

                  <h2 className={`font-serif text-2xl md:text-3xl ${c.text} leading-tight mb-4`}>
                    <En>{s.titleEn}</En>
                    <Ko>{s.titleKo}</Ko>
                  </h2>
                  <p
                    className={`${c.sub} text-sm md:text-base leading-relaxed mb-6 flex-1`}
                  >
                    <En>{s.messageEn}</En>
                    <Ko>{s.messageKo}</Ko>
                  </p>

                  <div
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${c.text}`}
                  >
                    <En>Read the guide</En>
                    <Ko>가이드 읽기</Ko>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <RelatedContent
        items={[
          {
            href: "/visa",
            title: { en: "Visa Guide", ko: "비자 가이드" },
            description: { en: "Which visa fits your situation? Student, working holiday, skilled, partner, tourist.", ko: "어떤 비자가 맞을까요? 학생, 워홀, 기술, 파트너, 관광." },
          },
          {
            href: "/finance",
            title: { en: "Finance & Banking", ko: "금융 & 뱅킹" },
            description: { en: "Open a bank account, apply for TFN, understand tax and super.", ko: "은행 계좌 개설, TFN 신청, 세금과 슈퍼 이해하기." },
          },
          {
            href: "/transport",
            title: { en: "Transport Guide", ko: "교통 가이드" },
            description: { en: "Opal card, trains, buses, ferries — getting around Sydney.", ko: "Opal 카드, 기차, 버스, 페리 — 시드니 교통 완벽 가이드." },
          },
        ]}
      />
    </div>
  );
}

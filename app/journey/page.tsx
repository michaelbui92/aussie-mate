// The Journey — hub page. Replaces the homepage persona selector.
// Three cards: Before you come / I arrived / I call this home.
//
// Tone: a personal welcome, not a checklist. Each card is a message
// to the visitor depending on where they are in the journey. No pills,
// no "Start here" preview — just the welcome message and a link into
// the stage's full guide.

import type { Metadata } from "next";
import { headers } from "next/headers";
import { pageMeta } from "@/lib/page-meta";
import Link from "next/link";
import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import { withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";

export async function generateMetadata(): Promise<Metadata> {
  // Per request, so the tab title and the search-result headline are in the reader's
  // language. The canonical and hreflang come from the root layout, which reads the same
  // header. `Metadata` is imported by every page that uses withSeo.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return withSeo({
    title: pageMeta("journey", locale).title,
    description: pageMeta("journey", locale).description,
  },
  "journey"
);
}


type Stage = {
  href: string;
  number: string;
  emoji: string;
  // Sky / Emerald / Teal — kept the original persona colors so the
  // sub-page content (which uses the same accents) reads as one design.
  accent: "sky" | "emerald" | "teal";
  titleEn: string;
  titleJa?: string;
  titleZh?: string;
  titleKo: string;
  // The "letter" — a personal message to a visitor in this stage. No
  // bullets, no checklist. The card body IS the preview.
  messageEn: string;
  messageJa?: string;
  messageZh?: string;
  messageKo: string;
};

const stages: Stage[] = [
  {
    href: "/journey/before-you-come",
    number: "01",
    emoji: "✈️",
    accent: "sky",
    titleEn: "Before you come",
    titleJa: "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306b\u6765\u308b\u524d\u306b",
    titleZh: "\u51fa\u53d1\u524d",
    titleKo: "호주에 오기 전에",
    messageEn:
      "If you have not visited Australia, please access Before you come. There are tips to get you ready. Learn some essential Aussie slang.",
    messageJa: "\u307e\u3060\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u3092\u8a2a\u308c\u305f\u3053\u3068\u304c\u306a\u3044\u65b9\u306f\u3001\u300c\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306b\u6765\u308b\u524d\u306b\u300d\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002\u6e96\u5099\u306b\u5f79\u7acb\u3064\u30d2\u30f3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002\u5fc5\u9808\u306e\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u30fb\u30b9\u30e9\u30f3\u30b0\u3082\u899a\u3048\u307e\u3057\u3087\u3046\u3002",
    messageZh: "\u5982\u679c\u4f60\u8fd8\u6ca1\u6765\u8fc7\u6fb3\u5927\u5229\u4e9a\uff0c\u8bf7\u770b\u770b\u300c\u51fa\u53d1\u524d\u300d\u90a3\u4e00\u9875\u3002\u90a3\u91cc\u6709\u5e2e\u4f60\u505a\u597d\u51c6\u5907\u7684\u5efa\u8bae\u3002\u4e5f\u5b66\u51e0\u53e5\u5fc5\u5907\u7684\u6fb3\u6d32\u4fda\u8bed\u3002",
    messageKo:
      "아직 호주를 방문하지 않으셨다면, Before you come을 확인해 주세요. 출발 준비를 위한 팁이 있습니다. 필수 호주 슬랭도 함께 배워보세요.",
  },
  {
    href: "/journey/arrived",
    number: "02",
    emoji: "📦",
    accent: "emerald",
    titleEn: "I arrived",
    titleJa: "\u5230\u7740\u3057\u305f",
    titleZh: "\u6211\u5230\u4e86",
    titleKo: "방금 도착했어요",
    messageEn:
      "If you have arrived, visit here, get yourself ready, look for a job, apply. It can be daunting living in a new place but don't stress. Be wary of scammers, etc.",
    messageJa: "\u5230\u7740\u3057\u305f\u3089\u3001\u3053\u3053\u3092\u898b\u3066\u3001\u6e96\u5099\u3092\u6574\u3048\u3001\u4ed5\u4e8b\u3092\u63a2\u3057\u3066\u5fdc\u52df\u3057\u307e\u3057\u3087\u3046\u3002\u65b0\u3057\u3044\u571f\u5730\u3067\u306e\u66ae\u3089\u3057\u306f\u4e0d\u5b89\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u7126\u3089\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\u8a50\u6b3a\u5e2b\u306a\u3069\u306b\u306f\u6ce8\u610f\u3057\u307e\u3057\u3087\u3046\u3002",
    messageZh: "\u5982\u679c\u4f60\u521a\u5230\uff0c\u5c31\u770b\u770b\u8fd9\u91cc\uff0c\u505a\u597d\u51c6\u5907\uff0c\u627e\u5de5\u4f5c\u3001\u6295\u7b80\u5386\u3002\u5728\u4e00\u4e2a\u65b0\u5730\u65b9\u751f\u6d3b\u53ef\u80fd\u8ba9\u4eba\u53d1\u6035\uff0c\u4f46\u522b\u7d27\u5f20\u3002\u5f53\u5fc3\u9a97\u5b50\u4e4b\u7c7b\u7684\u3002",
    messageKo:
      "방금 도착하셨다면, 이 페이지를 확인하고 준비하세요. 구직도 시작하세요. 낯선 곳에서의 생활이 쉽지 않을 수 있지만 너무 스트레스 받지 마세요. 사기꾼도 주의하시고요.",
  },
  {
    href: "/journey/home",
    number: "03",
    emoji: "🏡",
    accent: "teal",
    titleEn: "I call this home",
    titleJa: "\u3053\u3053\u304c\u6211\u304c\u5bb6",
    titleZh: "\u6211\u628a\u8fd9\u91cc\u5f53\u4f5c\u5bb6",
    titleKo: "여기가 내 집이에요",
    messageEn:
      "If you have been here for a while and you love it here and want to continue living as long as you can, think about your next steps.",
    messageJa: "\u3057\u3070\u3089\u304f\u3053\u3053\u306b\u3044\u3066\u3001\u3053\u306e\u5834\u6240\u304c\u597d\u304d\u3067\u3001\u3067\u304d\u308b\u3060\u3051\u9577\u304f\u66ae\u3089\u3057\u7d9a\u3051\u305f\u3044\u306a\u3089\u3001\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u3092\u8003\u3048\u307e\u3057\u3087\u3046\u3002",
    messageZh: "\u5982\u679c\u4f60\u5df2\u7ecf\u5728\u8fd9\u91cc\u5f85\u4e86\u4e00\u9635\u5b50\uff0c\u5f88\u559c\u6b22\u8fd9\u91cc\uff0c\u60f3\u5c3d\u53ef\u80fd\u957f\u4e45\u5730\u751f\u6d3b\u4e0b\u53bb\uff0c\u5c31\u60f3\u60f3\u63a5\u4e0b\u6765\u7684\u8def\u600e\u4e48\u8d70\u3002",
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
            <En translated>The Journey</En>
            <Ja>ジャーニー</Ja>
            <Zh>旅程</Zh>
            <Ko>호주 여정</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-100 leading-tight mb-5">
            <En translated>Welcome to Australia. You&apos;ve made a good choice.</En>
            <Ja>オーストラリアへようこそ。良い選択をしましたね。</Ja>
            <Zh>欢迎来到澳大利亚。你做了个明智的选择。</Zh>
            <Ko>호주에 오신 것을 환영합니다. 좋은 선택이에요.</Ko>
          </h1>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl mx-auto">
            <En translated>
              Living in a new country is bold and courageous. Make
              experiences. Make friends. Learn, and ultimately have fun.
              It may not be easy — but I&apos;m here to help.
            </En>
            <Ja>新しい国で暮らすのは大胆で勇気あることです。経験を
              積み、友達を作り、学び、そして最終的には楽しみましょう。
              簡単ではないかもしれません — でも、私がお手伝いします。</Ja>
            <Zh>在一个新国家生活需要胆识和勇气。去创造
              经历，结交朋友，学习，最终尽情享受。
              这也许并不容易 — 但我在这里帮你。</Zh>
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
                    <Ja>{s.titleJa ?? s.titleEn}</Ja>
                    <Zh>{s.titleZh ?? s.titleEn}</Zh>
                    <Ko>{s.titleKo}</Ko>
                  </h2>
                  <p
                    className={`${c.sub} text-sm md:text-base leading-relaxed mb-6 flex-1`}
                  >
                    <Ja>{s.messageJa ?? s.messageEn}</Ja>
                    <Zh>{s.messageZh ?? s.messageEn}</Zh>
                    <Ko>{s.messageKo}</Ko>
                  </p>

                  <div
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${c.text}`}
                  >
                    <En translated>Read the guide</En>
                    <Ja>ガイドを読む</Ja>
                    <Zh>阅读指南</Zh>
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
            title: { en: "Visa Guide", ja: "ビザガイド", zh: "签证指南", ko: "비자 가이드" },
            description: { en: "Which visa fits your situation? Student, working holiday, skilled, partner, tourist.", ja: "どのビザがあなたの状況に合いますか？学生、ワーキングホリデー、技術、パートナー、観光。", zh: "哪种签证适合你的情况？学生、打工度假、技术、伴侣、旅游。", ko: "어떤 비자가 맞을까요? 학생, 워홀, 기술, 파트너, 관광." },
          },
          {
            href: "/finance",
            title: { en: "Finance & Banking", ja: "ファイナンス＆バンキング", zh: "金融与银行", ko: "금융 & 뱅킹" },
            description: { en: "Open a bank account, apply for TFN, understand tax and super.", ja: "銀行口座を開設し、TFNを申請し、税金とsuperを理解しましょう。", zh: "开银行账户、申请TFN、了解税务和养老金。", ko: "은행 계좌 개설, TFN 신청, 세금과 슈퍼 이해하기." },
          },
          {
            href: "/transport",
            title: { en: "Transport Guide", ja: "交通ガイド", zh: "交通指南", ko: "교통 가이드" },
            description: { en: "Opal card, trains, buses, ferries — getting around Sydney.", ja: "Opal カード、電車、バス、フェリー — シドニーでの移動。", zh: "Opal卡、火车、公交、渡轮——在悉尼出行。", ko: "Opal 카드, 기차, 버스, 페리 — 시드니 교통 완벽 가이드." },
          },
        ]}
      />
    </div>
  );
}

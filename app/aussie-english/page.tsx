// Aussie-english page — server component.
// Two sections:
//   1. "By situation" — 6 curated scenarios (pub, work, strangers, etc.)
//      with the phrases you'd actually need in each
//   2. "Full library" — PhraseExplorer client island for search, filter,
//      flashcard review across all 209 phrases

import { phrases, type Phrase } from "@/lib/phrases";
import { En, Ko } from "@/components/LangBlocks";
import PhraseExplorer, { type PhraseCategory } from "@/components/PhraseExplorer";
import { seoFor, withSeo } from "@/lib/seo";

export const metadata = withSeo(
  {

  ...seoFor("/aussie-english"),
  title: "Aussie English — Australian Slang & Everyday Phrases (English / 한국어)",
  description:
    "Australian phrases and everyday English you'd hear at the pub, at work, on the footy, and out in the suburbs — explained in plain English for anyone new here, foreigners, learners, and curious locals. Available 한국어 for Korean-speakers. G'day, arvo, brekkie, no worries, she'll be right and more.",
  },
  "/aussie-english"
);

const categories: PhraseCategory[] = [
  { value: "all", label: "All" },
  { value: "daily-life", label: "Daily Life", enLabel: "Daily Life", koLabel: "일상" },
  { value: "work", label: "Work", enLabel: "Work", koLabel: "직장" },
  { value: "food", label: "Food & Drinks", enLabel: "Food & Drinks", koLabel: "음식" },
  { value: "sports", label: "Sports", enLabel: "Sports", koLabel: "스포츠" },
  { value: "social", label: "Social", enLabel: "Social", koLabel: "사교" },
  { value: "media", label: "Media", enLabel: "Media", koLabel: "미디어" },
];

type ScenarioPhrase = { phrase: string; meaning: string };
type Scenario = {
  emoji: string;
  title: string;
  koTitle: string;
  desc: string;
  koDesc: string;
  phrases: ScenarioPhrase[];
};

const scenarios: Scenario[] = [
  {
    emoji: "🍺",
    title: "At the pub",
    koTitle: "술집에서",
    desc: "Friday arvo, someone's shouting a round.",
    koDesc: "금요일 오후, 누군가 한 라운드 쏘는 중.",
    phrases: [
      { phrase: "Schooner", meaning: "A 425ml glass of beer" },
      { phrase: "Middy", meaning: "A 285ml glass of beer" },
      { phrase: "Longneck", meaning: "A 750ml bottle of beer" },
      { phrase: "Tinny", meaning: "A small can of beer" },
      { phrase: "Slab", meaning: "A carton of 24 beers" },
      { phrase: "Stoked", meaning: "Very happy, excited" },
      { phrase: "Rage", meaning: "A big party" },
    ],
  },
  {
    emoji: "💼",
    title: "At work with the boss",
    koTitle: "직장에서 상사와",
    desc: "First week on the job. Listen more than you talk.",
    koDesc: "첫 주. 말보다 많이 들어보세요.",
    phrases: [
      { phrase: "How're ya going?", meaning: "Greeting — not literally asking how you are" },
      { phrase: "Fair dinkum", meaning: "Genuine, for real" },
      { phrase: "She'll be right", meaning: "Don't worry, it'll work out" },
      { phrase: "Crack on", meaning: "Continue, get on with it" },
      { phrase: "Keen", meaning: "Eager, enthusiastic" },
      { phrase: "Smoko", meaning: "Short work break" },
      { phrase: "Cuppa", meaning: "A cup of tea or coffee" },
      { phrase: "Sickie", meaning: "A sick day (sometimes a fake one)" },
    ],
  },
  {
    emoji: "👋",
    title: "Meeting strangers",
    koTitle: "처음 만난 사람과",
    desc: "G'day, mate. The first 30 seconds.",
    koDesc: "처음 30초가 전부입니다.",
    phrases: [
      { phrase: "G'day", meaning: "Hello" },
      { phrase: "How ya goin'?", meaning: "How are you?" },
      { phrase: "No worries", meaning: "Thanks / It's fine / You're welcome" },
      { phrase: "Mate", meaning: "Friend, buddy" },
      { phrase: "Good onya", meaning: "Good for you, well done" },
      { phrase: "Yeah nah", meaning: "No (polite disagreement)" },
      { phrase: "Bloody oath", meaning: "Absolutely, definitely" },
      { phrase: "Legend", meaning: "An amazing person" },
    ],
  },
  {
    emoji: "🤷",
    title: "When you don't get it",
    koTitle: "이해가 안 될 때",
    desc: "Conversations move fast. Catch-up phrases.",
    koDesc: "대화가 빠릅니다. 따라잡기 표현.",
    phrases: [
      { phrase: "Suss", meaning: "To check out, to be suspicious" },
      { phrase: "Have a crack", meaning: "Give it a try" },
      { phrase: "Give it a burl", meaning: "Have a go at it" },
      { phrase: "Flat out", meaning: "Very busy, going hard" },
      { phrase: "Yonks", meaning: "A long time" },
      { phrase: "Spewin'", meaning: "Devastated, annoyed" },
      { phrase: "Roos loose in the top paddock", meaning: "A bit crazy" },
    ],
  },
  {
    emoji: "🛒",
    title: "Out and about",
    koTitle: "동네 돌아다닐 때",
    desc: "Shops, servo, the local.",
    koDesc: "상점, 주유소, 동네 한바퀴.",
    phrases: [
      { phrase: "Servo", meaning: "Petrol station" },
      { phrase: "Dairy", meaning: "Corner shop, convenience store" },
      { phrase: "Maccas", meaning: "McDonald's" },
      { phrase: "Bottle-o", meaning: "Bottle shop, liquor store" },
      { phrase: "Op shop", meaning: "Charity thrift store" },
      { phrase: "Brekkie", meaning: "Breakfast" },
      { phrase: "Sanger", meaning: "Sandwich" },
      { phrase: "Cuppa", meaning: "Tea or coffee" },
      { phrase: "Skinny", meaning: "A small latte" },
      { phrase: "Dead horse", meaning: "Tomato sauce, ketchup" },
    ],
  },
  {
    emoji: "🏉",
    title: "Watching the footy",
    koTitle: "풋볼 중계 볼 때",
    desc: "State of Origin weekend. Pick a side.",
    koDesc: "오스트레일리아 축구 주말. 팀을 고르세요.",
    phrases: [
      { phrase: "Footy", meaning: "AFL or NRL, depending on the state" },
      { phrase: "The AFL", meaning: "Australian Football League" },
      { phrase: "The NRL", meaning: "National Rugby League" },
      { phrase: "Sledging", meaning: "Trash talk on the field" },
      { phrase: "Heaps", meaning: "A lot" },
      { phrase: "Sesh", meaning: "A session — game or training" },
      { phrase: "Stoked", meaning: "Thrilled, your team won" },
      { phrase: "Spewin'", meaning: "Devastated, your team lost" },
    ],
  },
];

export default function AussieEnglishPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En>Phrases</En>
          <Ko>표현</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
          <En>Aussie English</En>
          <Ko>호주 영어</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>{phrases.length} Australian phrases explained in plain English — sorted by where you&apos;ll actually hear and use them. Also available 한국어 for Korean-speakers.</En>
          <Ko>{phrases.length}개의 호주 ��현, 영어와 한국어로 해석 — 실제로 쓰게 될 상황별로 정리.</Ko>
        </p>
      </header>

      {/* By situation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14">
        <div className="mb-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
            <En>By situation</En>
            <Ko>상황별</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight mb-2">
            <En>Where will you actually need this?</En>
            <Ko>어디서 실제로 쓰게 될까요?</Ko>
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base max-w-2xl">
            <En>Same phrase, different room. Pick a situation, learn those first — they&apos;ll cover 80% of week one.</En>
            <Ko>같은 표현도 어떤 상황인지에 따라 느낌이 다릅니다. 상황을 골라 먼저 익히세요 — 첫 주 사용의 80%를 커버합니다.</Ko>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scenarios.map((s, i) => (
            <article
              key={s.title}
              className={`reveal reveal-delay-${(i % 5) + 1} p-6 md:p-7 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sunset/40 hover:shadow-md transition-all`}
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl shrink-0 leading-none" aria-hidden="true">{s.emoji}</span>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-stone-100 leading-tight">
                    <En>{s.title}</En>
                    <Ko>{s.koTitle}</Ko>
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                    <En>{s.desc}</En>
                    <Ko>{s.koDesc}</Ko>
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5 pt-4 border-t border-stone-200/60 dark:border-dark-border/60">
                {s.phrases.map((p) => (
                  <li key={p.phrase} className="flex items-baseline gap-3 text-sm">
                    <span className="font-serif font-medium text-sunset shrink-0 min-w-[110px]">
                      {p.phrase}
                    </span>
                    <span className="text-stone-600 dark:text-stone-400 text-xs leading-snug">
                      {p.meaning}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Full library */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="mb-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
            <En>Full library</En>
            <Ko>전체 라이브러리</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight">
            <En>All {phrases.length} phrases</En>
            <Ko>전체 {phrases.length}개 표현</Ko>
          </h2>
        </div>
        <PhraseExplorer phrases={phrases} categories={categories} />
      </section>
    </div>
  );
}

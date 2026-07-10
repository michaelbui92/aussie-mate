// Aussie-english page — server component.
// Three sections:
//   1. "By situation" — 6 curated scenarios (pub, work, strangers, etc.)
//      with the phrases you'd actually need in each
//   2. "Full library" — PhraseExplorer client island for search, filter,
//      flashcard review across all 209 phrases
//
// Now available in English, 한국어, 中文, and 日本語.

import { phrases, type Phrase } from "@/lib/phrases";
import { En, Ko, Zh, Ja } from "@/components/LangBlocks";
import PhraseExplorer, { type PhraseCategory } from "@/components/PhraseExplorer";
import { seoFor, withSeo } from "@/lib/seo";

export const metadata = withSeo(
  {

  ...seoFor("/aussie-english"),
  title: "Aussie English — Australian Slang & Everyday Phrases (English / 한국어 / 中文 / 日本語)",
  description:
    "Australian phrases and everyday English you'd hear at the pub, at work, on the footy, and out in the suburbs — explained in plain English for anyone new here, foreigners, learners, and curious locals. Available 한국어 for Korean-speakers, 中文 for Chinese-speakers, and 日本語 for Japanese-speakers. G'day, arvo, brekkie, no worries, she'll be right and more.",
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

type ScenarioPhrase = { phrase: string; meaning: string; zh?: string; ja?: string };
type Scenario = {
  emoji: string;
  title: string;
  koTitle: string;
  zhTitle?: string;
  jaTitle?: string;
  desc: string;
  koDesc: string;
  zhDesc?: string;
  jaDesc?: string;
  phrases: ScenarioPhrase[];
};

const scenarios: Scenario[] = [
  {
    emoji: "🍺",
    title: "At the pub",
    koTitle: "술집에서",
    zhTitle: "在酒吧",
    jaTitle: "パブで",
    desc: "Friday arvo, someone's shouting a round.",
    koDesc: "금요일 오후, 누군가 한 라운드 쏘는 중.",
    zhDesc: "周五下午，有人请客一轮。",
    jaDesc: "金曜の午後、誰かが一杯おごってくれる。",
    phrases: [
      { phrase: "Schooner", meaning: "A 425ml glass of beer", zh: "大杯啤酒（425毫升）", ja: "ショーニー（425mlのビール）" },
      { phrase: "Middy", meaning: "A 285ml glass of beer", zh: "中杯啤酒（285毫升）", ja: "ミディ（285mlのビール）" },
      { phrase: "Longneck", meaning: "A 750ml bottle of beer", zh: "大瓶啤酒（750毫升）", ja: "ロングネック（750mlのビール瓶）" },
      { phrase: "Tinny", meaning: "A small can of beer", zh: "罐装啤酒", ja: "ティニー（缶ビール）" },
      { phrase: "Slab", meaning: "A carton of 24 beers", zh: "一箱24罐啤酒", ja: "スラブ（24缶入りビールケース）" },
      { phrase: "Stoked", meaning: "Very happy, excited", zh: "非常开心、兴奋", ja: "めちゃくちゃ嬉しい、興奮している" },
      { phrase: "Rage", meaning: "A big party", zh: "大型派对", ja: "大パーティー" },
    ],
  },
  {
    emoji: "💼",
    title: "At work with the boss",
    koTitle: "직장에서 상사와",
    zhTitle: "和老板一起工作",
    jaTitle: "職場で上司と",
    desc: "First week on the job. Listen more than you talk.",
    koDesc: "첫 주. 말보다 많이 들어보세요.",
    zhDesc: "上班第一周。多听少说。",
    jaDesc: "仕事初日。話すより聞こう。",
    phrases: [
      { phrase: "How're ya going?", meaning: "Greeting — not literally asking how you are", zh: "打招呼，不是真的问你过得怎么样", ja: "挨拶 — 調子を本当に尋ねているわけではない" },
      { phrase: "Fair dinkum", meaning: "Genuine, for real", zh: "真实的、真正的", ja: "本物の、本当の" },
      { phrase: "She'll be right", meaning: "Don't worry, it'll work out", zh: "别担心，会没事的", ja: "心配するな、なんとかなる" },
      { phrase: "Crack on", meaning: "Continue, get on with it", zh: "继续，接着干", ja: "続ける、先に進む" },
      { phrase: "Keen", meaning: "Eager, enthusiastic", zh: "渴望的、热心的", ja: "やる気満々、熱心な" },
      { phrase: "Smoko", meaning: "Short work break", zh: "短暂休息", ja: "短い休憩" },
      { phrase: "Cuppa", meaning: "A cup of tea or coffee", zh: "一杯茶或咖啡", ja: "お茶かコーヒー一杯" },
      { phrase: "Sickie", meaning: "A sick day (sometimes a fake one)", zh: "病假（有时是假的）", ja: "病欠（時には仮病）" },
    ],
  },
  {
    emoji: "👋",
    title: "Meeting strangers",
    koTitle: "처음 만난 사람과",
    zhTitle: "初次见面",
    jaTitle: "初対面の人と",
    desc: "G'day, mate. The first 30 seconds.",
    koDesc: "처음 30초가 전부입니다.",
    zhDesc: "你好，伙计。最初的30秒。",
    jaDesc: "こんにちは、相棒。最初の30秒。",
    phrases: [
      { phrase: "G'day", meaning: "Hello", zh: "你好", ja: "こんにちは" },
      { phrase: "How ya goin'?", meaning: "How are you?", zh: "你好吗？", ja: "元気？" },
      { phrase: "No worries", meaning: "Thanks / It's fine / You're welcome", zh: "谢谢/没关系/不客气", ja: "大丈夫／どういたしまして／気にしないで" },
      { phrase: "Mate", meaning: "Friend, buddy", zh: "朋友、伙计", ja: "友達、相棒" },
      { phrase: "Good onya", meaning: "Good for you, well done", zh: "干得好、真棒", ja: "よくやった、すごい" },
      { phrase: "Yeah nah", meaning: "No (polite disagreement)", zh: "不（礼貌地表示不同意）", ja: "いや（丁寧な不同意）" },
      { phrase: "Bloody oath", meaning: "Absolutely, definitely", zh: "当然、绝对", ja: "もちろん、間違いない" },
      { phrase: "Legend", meaning: "An amazing person", zh: "了不起的人", ja: "すごい人、レジェンド" },
    ],
  },
  {
    emoji: "🤷",
    title: "When you don't get it",
    koTitle: "이해가 안 될 때",
    zhTitle: "听不懂的时候",
    jaTitle: "わからない時",
    desc: "Conversations move fast. Catch-up phrases.",
    koDesc: "대화가 빠릅니다. 따라잡기 표현.",
    zhDesc: "对话进行得很快。用来跟上的短语。",
    jaDesc: "会話は速い。追い付くためのフレーズ。",
    phrases: [
      { phrase: "Suss", meaning: "To check out, to be suspicious", zh: "调查、可疑", ja: "調べる、怪しいと思う" },
      { phrase: "Have a crack", meaning: "Give it a try", zh: "尝试一下", ja: "やってみる" },
      { phrase: "Give it a burl", meaning: "Have a go at it", zh: "试一试", ja: "挑戦してみる" },
      { phrase: "Flat out", meaning: "Very busy, going hard", zh: "非常忙、拼命干", ja: "めちゃくちゃ忙しい、全力で" },
      { phrase: "Yonks", meaning: "A long time", zh: "很长时间", ja: "長い間" },
      { phrase: "Spewin'", meaning: "Devastated, annoyed", zh: "非常沮丧、恼火", ja: "ショック、腹が立つ" },
      { phrase: "Roos loose in the top paddock", meaning: "A bit crazy", zh: "有点疯狂", ja: "ちょっとおかしい" },
    ],
  },
  {
    emoji: "🛒",
    title: "Out and about",
    koTitle: "동네 돌아다닐 때",
    zhTitle: "外出时",
    jaTitle: "街で",
    desc: "Shops, servo, the local.",
    koDesc: "상점, 주유소, 동네 한바퀴.",
    zhDesc: "商店、加油站、附近转转。",
    jaDesc: "店、ガソリンスタンド、近所。",
    phrases: [
      { phrase: "Servo", meaning: "Petrol station", zh: "加油站", ja: "ガソリンスタンド" },
      { phrase: "Dairy", meaning: "Corner shop, convenience store", zh: "杂货店、便利店", ja: "角の小さな店、コンビニ" },
      { phrase: "Maccas", meaning: "McDonald's", zh: "麦当劳", ja: "マクドナルド" },
      { phrase: "Bottle-o", meaning: "Bottle shop, liquor store", zh: "酒类商店", ja: "酒屋" },
      { phrase: "Op shop", meaning: "Charity thrift store", zh: "慈善二手店", ja: "チャリティー古着屋" },
      { phrase: "Brekkie", meaning: "Breakfast", zh: "早餐", ja: "朝ごはん" },
      { phrase: "Sanger", meaning: "Sandwich", zh: "三明治", ja: "サンドイッチ" },
      { phrase: "Cuppa", meaning: "Tea or coffee", zh: "茶或咖啡", ja: "お茶かコーヒー" },
      { phrase: "Skinny", meaning: "A small latte", zh: "小杯拿铁", ja: "スキニーラテ（小さいラテ）" },
      { phrase: "Dead horse", meaning: "Tomato sauce, ketchup", zh: "番茄酱", ja: "ケチャップ" },
    ],
  },
  {
    emoji: "🏉",
    title: "Watching the footy",
    koTitle: "풋볼 중계 볼 때",
    zhTitle: "看澳式足球时",
    jaTitle: "フットボール観戦",
    desc: "State of Origin weekend. Pick a side.",
    koDesc: "오스트레일리아 축구 주말. 팀을 고르세요.",
    zhDesc: "州际起源周末。选一边支持。",
    jaDesc: "ステート・オブ・オリジン週末。どちらかのチームを応援しよう。",
    phrases: [
      { phrase: "Footy", meaning: "AFL or NRL, depending on the state", zh: "澳式足球或橄榄球，取决于哪个州", ja: "AFLかNRL、州による" },
      { phrase: "The AFL", meaning: "Australian Football League", zh: "澳大利亚澳式足球联盟", ja: "オーストラリアン・フットボール・リーグ" },
      { phrase: "The NRL", meaning: "National Rugby League", zh: "国家橄榄球联盟", ja: "ナショナル・ラグビー・リーグ" },
      { phrase: "Sledging", meaning: "Trash talk on the field", zh: "场上垃圾话", ja: "フィールドでの挑発的な発言" },
      { phrase: "Heaps", meaning: "A lot", zh: "很多", ja: "たくさん" },
      { phrase: "Sesh", meaning: "A session — game or training", zh: "一场比赛或训练", ja: "試合やトレーニングのセッション" },
      { phrase: "Stoked", meaning: "Thrilled, your team won", zh: "兴奋的（你的队赢了）", ja: "めちゃくちゃ嬉しい（自分のチームが勝った）" },
      { phrase: "Spewin'", meaning: "Devastated, your team lost", zh: "崩溃的（你的队输了）", ja: "ショック（自分のチームが負けた）" },
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
          <Zh>短语</Zh>
          <Ja>フレーズ</Ja>
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
          <En>Aussie English</En>
          <Ko>호주 영어</Ko>
          <Zh>澳洲英语</Zh>
          <Ja>オージー英語</Ja>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>{phrases.length} Australian phrases explained in plain English — sorted by where you&apos;ll actually hear and use them. Also available 한국어 for Korean-speakers, 中文 for Chinese-speakers, and 日本語 for Japanese-speakers.</En>
          <Ko>{phrases.length}개의 호주 표현, 영어와 한국어로 해석 — 실제로 쓰게 될 상황별로 정리.</Ko>
          <Zh>{phrases.length}条澳大利亚表达，用简单英语解释 — 按实际使用场景分类。</Zh>
          <Ja>{phrases.length}のオーストラリア英語表現をわかりやすい英語で解説 — 実際に使う場面別に整理。</Ja>
        </p>
      </header>

      {/* By situation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14">
        <div className="mb-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
            <En>By situation</En>
            <Ko>상황별</Ko>
            <Zh>按场景</Zh>
            <Ja>場面別</Ja>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight mb-2">
            <En>Where will you actually need this?</En>
            <Ko>어디서 실제로 쓰게 될까요?</Ko>
            <Zh>哪些场景你最可能用到？</Zh>
            <Ja>実際にどこで使う？</Ja>
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base max-w-2xl">
            <En>Same phrase, different room. Pick a situation, learn those first — they&apos;ll cover 80% of week one.</En>
            <Ko>같은 표현도 어떤 상황인지에 따라 느낌이 다릅니다. 상황을 골라 먼저 익히세요 — 첫 주 사용의 80%를 커버합니다.</Ko>
            <Zh>同一个短语，不同的场景。选择一个场景，先学这些 — 它们能覆盖你第一周80%的交流。</Zh>
            <Ja>同じフレーズでも場所が違えば意味合いが変わります。場面を選んで先に覚えよう — 最初の1週間の80%をカバーできます。</Ja>
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
                    <Zh>{s.zhTitle}</Zh>
                    <Ja>{s.jaTitle}</Ja>
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                    <En>{s.desc}</En>
                    <Ko>{s.koDesc}</Ko>
                    <Zh>{s.zhDesc}</Zh>
                    <Ja>{s.jaDesc}</Ja>
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
                      <En>{p.meaning}</En>
                      <Ko>{p.meaning}</Ko>
                      <Zh>{p.zh}</Zh>
                      <Ja>{p.ja}</Ja>
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
            <Zh>完整词库</Zh>
            <Ja>全フレーズ一覧</Ja>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight">
            <En>All {phrases.length} phrases</En>
            <Ko>전체 {phrases.length}개 표현</Ko>
            <Zh>全部 {phrases.length} 条短语</Zh>
            <Ja>全{phrases.length}フレーズ</Ja>
          </h2>
        </div>
        <PhraseExplorer phrases={phrases} categories={categories} />
      </section>
    </div>
  );
}
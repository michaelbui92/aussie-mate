import Link from "next/link";
import { pickLocale } from "@/lib/locale";
import {En, Ja, Ko, Zh} from "../LangBlocks";

// /journey/home — Stage 03 of The Journey.
// Long-term Australian guide. Pivoted from practical admin (super,
// tenant rights, credit history) to lifestyle & experience: travel
// the country, push past survival English, build community, plan a
// second visa if you want to stay, and make Australia memorable
// before the years blur together.

export default function HomeContent() {
  return (
    <>
      {/* Intro */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-3">
          <En translated>Long-term</En>
          <Ja>長期滞在</Ja>
          <Zh>长期停留</Zh>
          <Ko>장기 체류</Ko>
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4 leading-tight">
          <En translated>You&apos;re past the hard part. Make the most of this.</En>
          <Ja>一番大変な時期は過ぎました。ここからを存分に楽しみましょう。</Ja>
          <Zh>最难的阶段已经过去了。好好把握接下来的时光吧。</Zh>
          <Ko>제일 어려운 시기는 지났어요. 이제 진짜 즐겨볼 시간입니다.</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En translated>
            You&apos;ve got a flat, a job, an Opal card that actually works. The question shifts — not how to survive, but how to actually live here. Travel the country, push your English, find your people. The years go faster than you think.
          </En>
          <Ja>住まいも仕事も、ちゃんと使えるOpal カードも手に入れました。問いは変わります — どう生き残るかではなく、ここでどう本当に暮らすか。国内を旅して、英語を伸ばして、仲間を見つけましょう。数年は思うよりずっと速く過ぎます。</Ja>
          <Zh>你已经有住处、工作，还有一张真正能用的Opal卡。问题变了——不再是如何生存，而是如何在这里真正地生活。去全国各地旅行，提升英语，找到属于自己的人。时光流逝得比你想象中更快。</Zh>
          <Ko>
            이제 집도 구하고, 직장도 갖고, 제대로 작동하는 오팔 카드도 있습니다. 질문이 바뀌어요 — 어떻게 살아남을지가 아니라, 어떻게 여기서 진짜 삶을 즐길 것인가. 호주를 여행하고, 영어를 늘리고, 사람들을 사귀세요. 생각보다 시간이 빨리 갑니다.
          </Ko>
        </p>
      </section>

      {/* Start here — four things worth doing before the long list. */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-5">
          <En translated>Start here</En>
          <Ja>ここから始める</Ja>
          <Zh>从这里开始</Zh>
          <Ko>먼저 이것부터</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
          {[
            {
              icon: "✈️",
              en: "Travel more of Australia", ja: "オーストラリアをもっと旅する", zh: "多游历澳大利亚",
              ko: "호주 더 여행하기",
              blurbEn:
                "Sydney's a base, not a destination. Weekend trips, regional NSW, the Red Centre, Tassie, the Reef. Your WHV or student visa is the only one that lets you do this cheaply — use it.",
              blurbJa: "\u30b7\u30c9\u30cb\u30fc\u306f\u62e0\u70b9\u3067\u3042\u3063\u3066\u3001\u76ee\u7684\u5730\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u9031\u672b\u65c5\u884c\u3001NSW\u306e\u5730\u65b9\u3001\u30ec\u30c3\u30c9\u30fb\u30bb\u30f3\u30bf\u30fc\u3001\u30bf\u30b9\u30de\u30cb\u30a2\u3001\u30b0\u30ec\u30fc\u30c8\u30fb\u30d0\u30ea\u30a2\u30fb\u30ea\u30fc\u30d5\u3002\u3053\u308c\u3092\u5b89\u304f\u5b9f\u73fe\u3067\u304d\u308b\u306e\u306f\u3001\u30ef\u30fc\u30db\u30ea\u304b\u5b66\u751f\u30d3\u30b6\u3060\u3051\u3067\u3059 \u2014 \u6d3b\u7528\u3057\u307e\u3057\u3087\u3046\u3002",
              blurbZh: "\u6089\u5c3c\u662f\u843d\u811a\u70b9\uff0c\u4e0d\u662f\u7ec8\u70b9\u3002\u5468\u672b\u77ed\u9014\u6e38\u3001\u65b0\u5357\u5a01\u5c14\u58eb\u5dde\u4e61\u9547\u3001\u7ea2\u571f\u4e2d\u5fc3\u3001\u5854\u65af\u9a6c\u5c3c\u4e9a\u3001\u5927\u5821\u7901\u3002\u53ea\u6709\u6253\u5de5\u5ea6\u5047\u7b7e\u8bc1\u6216\u5b66\u751f\u7b7e\u8bc1\uff0c\u624d\u80fd\u8ba9\u4f60\u4ee5\u8fd9\u4e48\u4f4e\u7684\u6210\u672c\u8d70\u904d\u8fd9\u4e9b\u5730\u65b9\u2014\u2014\u597d\u597d\u5229\u7528\u3002",
              blurbKo:
                "시드니는 거점이지 목적지가 아닙니다. 주말 여행, NSW 지방, 레드 센터, 태즈메이니아, 그레이트 베리어 리프. 워홀이나 학생 비자만이 이렇게 싸게 할 수 있는 시기를 줍니다 — 활용하세요.",
              href: "/destinations",
              hrefLabelEn: "See destinations →",
              hrefLabelJa: "\u76ee\u7684\u5730\u3092\u898b\u308b \u2192",
              hrefLabelZh: "\u67e5\u770b\u76ee\u7684\u5730 \u2192",
              hrefLabelKo: "여행지 보러 가기 →",
            },
            {
              icon: "🎓",
              en: "Lock in your next visa", ja: "次のビザを確保する", zh: "敲定你的下一个签证",
              ko: "다음 비자 잡기",
              blurbEn:
                "If your student visa is going well, look at the 485. If you loved the WHV year, second WHV or regional sponsorship. Partner, PR, citizenship — these all take years. Start the conversation now.",
              blurbJa: "\u5b66\u751f\u30d3\u30b6\u304c\u9806\u8abf\u306a\u3089\u3001485\u3092\u691c\u8a0e\u3057\u307e\u3057\u3087\u3046\u3002WHV\u306e1\u5e74\u304c\u826f\u304b\u3063\u305f\u306a\u3089\u30012\u56de\u76ee\u306eWHV\u304b\u5730\u65b9\u306e\u30b9\u30dd\u30f3\u30b5\u30fc\u30b7\u30c3\u30d7\u3002\u30d1\u30fc\u30c8\u30ca\u30fc\u3001PR\u3001\u5e02\u6c11\u6a29 \u2014 \u3044\u305a\u308c\u3082\u6570\u5e74\u304b\u304b\u308a\u307e\u3059\u3002\u4eca\u304b\u3089\u8a71\u3092\u59cb\u3081\u307e\u3057\u3087\u3046\u3002",
              blurbZh: "\u5982\u679c\u5b66\u751f\u7b7e\u8bc1\u8fdb\u5c55\u987a\u5229\uff0c\u770b\u770b 485 \u7b7e\u8bc1\u3002\u5982\u679c\u4f60\u559c\u6b22\u6253\u5de5\u5ea6\u5047\u90a3\u4e00\u5e74\uff0c\u53ef\u4ee5\u8003\u8651\u7b2c\u4e8c\u4e2a WHV \u6216\u504f\u8fdc\u5730\u533a\u62c5\u4fdd\u3002\u4f34\u4fa3\u7b7e\u8bc1\u3001\u6c38\u5c45\u3001\u5165\u7c4d\u2014\u2014\u8fd9\u4e9b\u90fd\u8981\u597d\u51e0\u5e74\u3002\u73b0\u5728\u5c31\u5f00\u59cb\u4e86\u89e3\u3002",
              blurbKo:
                "학생 비자가 잘 풀리고 있다면 485 비자를 살펴보세요. 워홀 1년이 좋았다면 두 번째 워홀이나 지방 sponsorship. 파트너 비자, 영주권, 시민권 — 모두 수년이 걸립니다. 지금부터 대화를 시작하세요.",
              href: "/visa",
              hrefLabelEn: "See visa options →",
              hrefLabelJa: "\u30d3\u30b6\u306e\u9078\u629e\u80a2\u3092\u898b\u308b \u2192",
              hrefLabelZh: "\u67e5\u770b\u7b7e\u8bc1\u9009\u9879 \u2192",
              hrefLabelKo: "비자 옵션 보기 →",
            },
            {
              icon: "🤝",
              en: "Make Aussie friends", ja: "オーストラリア人の友達を作る", zh: "结交澳大利亚朋友",
              ko: "호주인 친구 만들기",
              blurbEn:
                "Friendships here take longer than back home. Sports clubs, climbing gyms, language exchanges, volunteer groups — pick one and commit for six months. That's how it works.",
              blurbJa: "\u3053\u3053\u3067\u306e\u53cb\u60c5\u306f\u6545\u90f7\u3088\u308a\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002\u30b9\u30dd\u30fc\u30c4\u30af\u30e9\u30d6\u3001\u30af\u30e9\u30a4\u30df\u30f3\u30b0\u30b8\u30e0\u3001\u8a9e\u5b66\u4ea4\u6d41\u3001\u30dc\u30e9\u30f3\u30c6\u30a3\u30a2\u56e3\u4f53 \u2014 \u4e00\u3064\u3092\u9078\u3093\u30676\u304b\u6708\u7d9a\u3051\u307e\u3057\u3087\u3046\u3002\u305d\u3046\u3044\u3046\u3082\u306e\u3067\u3059\u3002",
              blurbZh: "\u8fd9\u91cc\u7684\u53cb\u8c0a\u6bd4\u5728\u5bb6\u4e61\u5efa\u7acb\u5f97\u66f4\u6162\u3002\u4f53\u80b2\u4ff1\u4e50\u90e8\u3001\u6500\u5ca9\u9986\u3001\u8bed\u8a00\u4ea4\u6362\u3001\u5fd7\u613f\u8005\u56e2\u4f53\u2014\u2014\u9009\u4e00\u4e2a\uff0c\u575a\u6301\u516d\u4e2a\u6708\u3002\u5c31\u662f\u8fd9\u6837\u3002",
              blurbKo:
                "여기서 우정은 고국보다 오래 걸립니다. 동호회, 클라이밍 짐, 언어교환, 자원봉사 — 하나를 골라 6개월은 꾸준히. 그래야 됩니다.",
              href: "/resources",
              hrefLabelEn: "Find your community →",
              hrefLabelJa: "\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u3092\u898b\u3064\u3051\u308b \u2192",
              hrefLabelZh: "\u627e\u5230\u4f60\u7684\u793e\u533a \u2192",
              hrefLabelKo: "커뮤니티 찾기 →",
            },
            {
              icon: "🗣️",
              en: "Learn Aussie English properly", ja: "オーストラリア英語をしっかり学ぶ", zh: "认真学习澳式英语",
              ko: "호주식 영어 제대로 배우기",
              blurbEn:
                "Beyond ordering coffee — jokes, subtext, workplace banter. A daily podcast, a book, and one real conversation a day. Six months and you'll feel the difference in every interaction.",
              blurbJa: "\u30b3\u30fc\u30d2\u30fc\u3092\u6ce8\u6587\u3059\u308b\u6bb5\u968e\u3092\u8d85\u3048\u3066 \u2014 \u5197\u8ac7\u3001\u884c\u9593\u3001\u8077\u5834\u306e\u8efd\u53e3\u3002\u6bce\u65e5\u306e\u30dd\u30c3\u30c9\u30ad\u30e3\u30b9\u30c8\u3068\u672c\u3001\u305d\u3057\u30661\u65e51\u56de\u306e\u672c\u6c17\u306e\u4f1a\u8a71\u30026\u304b\u6708\u3067\u3001\u3042\u3089\u3086\u308b\u3084\u308a\u53d6\u308a\u306b\u9055\u3044\u3092\u611f\u3058\u307e\u3059\u3002",
              blurbZh: "\u4e0d\u53ea\u662f\u70b9\u5496\u5561\u2014\u2014\u8fd8\u6709\u73a9\u7b11\u3001\u8a00\u5916\u4e4b\u610f\u3001\u804c\u573a\u95f2\u804a\u3002\u6bcf\u5929\u4e00\u6863\u64ad\u5ba2\u3001\u4e00\u672c\u4e66\uff0c\u518d\u52a0\u4e00\u6b21\u771f\u6b63\u7684\u5bf9\u8bdd\u3002\u516d\u4e2a\u6708\u540e\uff0c\u6bcf\u6b21\u4ea4\u6d41\u4f60\u90fd\u4f1a\u611f\u5230\u4e0d\u540c\u3002",
              blurbKo:
                "커피 주문에서 한 단계 더 — 농담, 함의, 직장 농담. 매일 팟캐스트, 책, 하루 한 번 진짜 대화. 6개월이면 모든 대화가 달라집니다.",
              href: "/aussie-english",
              hrefLabelEn: "Open the slang library →",
              hrefLabelJa: "\u30b9\u30e9\u30f3\u30b0\u96c6\u3092\u958b\u304f \u2192",
              hrefLabelZh: "\u6253\u5f00\u4fda\u8bed\u5e93 \u2192",
              hrefLabelKo: "호주 슬랭 라이브러리 열기 →",
            },
          ].map((w, i) => (
            <div
              key={w.en}
              className={`reveal reveal-delay-${i + 1} p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-950/30 dark:to-teal-900/20 border border-teal-100/50 dark:border-teal-900/30 flex flex-col`}
            >
              <div className="text-2xl mb-2">{w.icon}</div>
              <h3 className="font-serif text-base md:text-lg text-stone-900 dark:text-stone-100 mb-1.5 leading-snug">
                <En translated>{w.en}</En>
                <Ja>{pickLocale("ja", w)}</Ja>
                <Zh>{pickLocale("zh", w)}</Zh>
                <Ko>{w.ko}</Ko>
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed">
                <Ja>{w.blurbJa ?? w.blurbEn}</Ja>
                <Zh>{w.blurbZh ?? w.blurbEn}</Zh>
                <Ko>{w.blurbKo}</Ko>
              </p>
              {w.href && (
                <Link
                  href={w.href}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
                >
                  <Ja>{w.hrefLabelJa ?? w.hrefLabelEn}</Ja>
                  <Zh>{w.hrefLabelZh ?? w.hrefLabelEn}</Zh>
                  <Ko>{w.hrefLabelKo}</Ko>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* The stuff worth doing while you're here — pivots away from admin
          (super, tenant rights, credit) toward travel, English, community,
          and a second visa if they want to stay long-term. */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-5">
          <En translated>Worth doing while you&apos;re here</En>
          <Ja>ここにいる間にやっておきたいこと</Ja>
          <Zh>在这里期间值得做的事</Zh>
          <Ko>여기 있는 동안 해볼 만한 것</Ko>
        </p>
        <ul className="space-y-4 max-w-3xl">
          {[
            {
              icon: "✈️",
              en: "Travel the country, not just Sydney", ja: "シドニーだけでなく、国全体を旅する", zh: "游历全国，而不只是悉尼",
              ko: "시드니만 보지 말고 호주를 여행하세요",
              descEn:
                "A WHV year is the only time you'll fly domestically for $50 AUD. The Red Centre, Tassie, the Reef, the Whitsundays, Kakadu — most people leave Australia having seen three suburbs of Sydney. Don't be most people.",
              descJa: "\u30ef\u30fc\u30db\u30ea\u306e1\u5e74\u306f\u3001\u56fd\u5185\u7dda\u3092$50 AUD\u3067\u98db\u3079\u308b\u552f\u4e00\u306e\u6642\u671f\u3067\u3059\u3002\u30ec\u30c3\u30c9\u30fb\u30bb\u30f3\u30bf\u30fc\u3001\u30bf\u30b9\u30de\u30cb\u30a2\u3001\u30b0\u30ec\u30fc\u30c8\u30fb\u30d0\u30ea\u30a2\u30fb\u30ea\u30fc\u30d5\u3001\u30a6\u30a3\u30c3\u30c8\u30b5\u30f3\u30c7\u30fc\u3001\u30ab\u30ab\u30c9\u30a5 \u2014 \u591a\u304f\u306e\u4eba\u306f\u30b7\u30c9\u30cb\u30fc\u306e3\u3064\u306e\u5730\u533a\u3057\u304b\u898b\u305a\u306b\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u3092\u53bb\u308a\u307e\u3059\u3002\u305d\u3093\u306a\u5927\u591a\u6570\u306b\u306a\u3089\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002",
              descZh: "\u6253\u5de5\u5ea6\u5047\u7684\u8fd9\u4e00\u5e74\uff0c\u662f\u4f60\u552f\u4e00\u80fd\u7528 $50 AUD \u98de\u56fd\u5185\u822a\u7ebf\u7684\u65f6\u5019\u3002\u7ea2\u571f\u4e2d\u5fc3\u3001\u5854\u65af\u9a6c\u5c3c\u4e9a\u3001\u5927\u5821\u7901\u3001\u5723\u7075\u7fa4\u5c9b\u3001\u5361\u5361\u675c\u2014\u2014\u5927\u591a\u6570\u4eba\u79bb\u5f00\u6fb3\u5927\u5229\u4e9a\u65f6\uff0c\u53ea\u89c1\u8fc7\u6089\u5c3c\u7684\u4e09\u4e2a\u533a\u3002\u522b\u505a\u90a3\u5927\u591a\u6570\u4eba\u3002",
              descKo:
                "워홀 1년은 국내선 $50 AUD에 fly할 수 있는 유일한 시기입니다. 레드 센터, 태즈메이니아, 그레이트 베리어 리프, 휘트선데이, 카카두 — 대부분은 시드니의 세 동네만 보고 떠납니다. 그런 대다수가 되지 마세요.",
            },
            {
              icon: "🗣️",
              en: "Push your English past transaction-level", ja: "やり取りレベルを超えて英語を伸ばす", zh: "让你的英语超越交易式水平",
              ko: "거래 수준 넘어서 영어 늘리기",
              descEn:
                "Survival English gets you through week one. The next level — jokes, subtext, workplace banter — is what makes you feel like you belong. Podcasts, books, one Australian friend you text daily. Six months, you'll notice.",
              descJa: "\u30b5\u30d0\u30a4\u30d0\u30eb\u82f1\u8a9e\u3067\u6700\u521d\u306e1\u9031\u9593\u306f\u4e57\u308a\u5207\u308c\u307e\u3059\u3002\u6b21\u306e\u6bb5\u968e \u2014 \u5197\u8ac7\u3001\u884c\u9593\u3001\u8077\u5834\u306e\u8efd\u53e3 \u2014 \u304c\u3001\u5c45\u5834\u6240\u304c\u3042\u308b\u3068\u611f\u3058\u3055\u305b\u3066\u304f\u308c\u307e\u3059\u3002\u30dd\u30c3\u30c9\u30ad\u30e3\u30b9\u30c8\u3001\u672c\u3001\u6bce\u65e5\u30e1\u30c3\u30bb\u30fc\u30b8\u3059\u308b\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u4eba\u306e\u53cb\u9054\u3092\u4e00\u4eba\u30026\u304b\u6708\u3067\u9055\u3044\u304c\u308f\u304b\u308a\u307e\u3059\u3002",
              descZh: "\u751f\u5b58\u82f1\u8bed\u80fd\u5e2e\u4f60\u6491\u8fc7\u7b2c\u4e00\u5468\u3002\u4e0b\u4e00\u4e2a\u5c42\u6b21\u2014\u2014\u73a9\u7b11\u3001\u8a00\u5916\u4e4b\u610f\u3001\u804c\u573a\u95f2\u804a\u2014\u2014\u624d\u662f\u8ba9\u4f60\u6709\u5f52\u5c5e\u611f\u7684\u5173\u952e\u3002\u64ad\u5ba2\u3001\u4e66\uff0c\u518d\u52a0\u4e00\u4e2a\u6bcf\u5929\u804a\u5929\u7684\u6fb3\u5927\u5229\u4e9a\u670b\u53cb\u3002\u516d\u4e2a\u6708\uff0c\u4f60\u5c31\u4f1a\u53d1\u73b0\u53d8\u5316\u3002",
              descKo:
                "생존형 영어는 첫 주를 넘기게 해줍니다. 다음 단계 — 농담, 함의, 직장 농담 — 가 소속감을 만듭니다. 팟캐스트, 책, 매일 카톡할 호주인 친구 한 명. 6개월이면 차이가 느껴집니다.",
            },
            {
              icon: "🤝",
              en: "Build one community anchor", ja: "コミュニティの拠点を一つ作る", zh: "建立一个社区据点",
              ko: "하나의 커뮤니티 거점 만들기",
              descEn:
                "Korean churches, sports clubs, climbing gyms, language exchanges, volunteer groups — pick one. Showing up weekly for six months is what turns acquaintances into friends. Friendships here take time.",
              descJa: "\u97d3\u56fd\u7cfb\u6559\u4f1a\u3001\u30b9\u30dd\u30fc\u30c4\u30af\u30e9\u30d6\u3001\u30af\u30e9\u30a4\u30df\u30f3\u30b0\u30b8\u30e0\u3001\u8a9e\u5b66\u4ea4\u6d41\u3001\u30dc\u30e9\u30f3\u30c6\u30a3\u30a2\u56e3\u4f53 \u2014 \u4e00\u3064\u3092\u9078\u3073\u307e\u3057\u3087\u3046\u30026\u304b\u6708\u9593\u6bce\u9031\u9854\u3092\u51fa\u3059\u3053\u3068\u304c\u3001\u77e5\u4eba\u3092\u53cb\u4eba\u306b\u5909\u3048\u307e\u3059\u3002\u3053\u3053\u3067\u306e\u53cb\u60c5\u306b\u306f\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002",
              descZh: "\u97e9\u88d4\u6559\u4f1a\u3001\u4f53\u80b2\u4ff1\u4e50\u90e8\u3001\u6500\u5ca9\u9986\u3001\u8bed\u8a00\u4ea4\u6362\u3001\u5fd7\u613f\u8005\u56e2\u4f53\u2014\u2014\u9009\u4e00\u4e2a\u3002\u6bcf\u5468\u90fd\u53bb\u3001\u575a\u6301\u516d\u4e2a\u6708\uff0c\u624d\u80fd\u628a\u70b9\u5934\u4e4b\u4ea4\u53d8\u6210\u670b\u53cb\u3002\u8fd9\u91cc\u7684\u53cb\u8c0a\u9700\u8981\u65f6\u95f4\u3002",
              descKo:
                "한인 교회, 동호회, 클라이밍 짐, 언어교환, 자원봉사 — 하나를 고르세요. 6개월 매주 얼굴을 비추는 게 지인을 친구로 바꿉니다. 여기서 우정은 시간이 필요합니다.",
            },
            {
              icon: "🎓",
              en: "Plan your next visa early", ja: "次のビザは早めに計画する", zh: "提早规划下一个签证",
              ko: "다음 비자 미리 계획",
              descEn:
                "If your student visa is going well, look at the 485. If you loved the WHV year, the second WHV or a regional sponsorship. Partner visa, PR, citizenship — these all take years. Start understanding the process now, not in year four.",
              descJa: "\u5b66\u751f\u30d3\u30b6\u304c\u9806\u8abf\u306a\u3089\u3001485\u3092\u691c\u8a0e\u3057\u307e\u3057\u3087\u3046\u3002WHV\u306e1\u5e74\u304c\u826f\u304b\u3063\u305f\u306a\u3089\u30012\u56de\u76ee\u306eWHV\u304b\u5730\u65b9\u306e\u30b9\u30dd\u30f3\u30b5\u30fc\u30b7\u30c3\u30d7\u3002\u30d1\u30fc\u30c8\u30ca\u30fc\u30d3\u30b6\u3001PR\u3001\u5e02\u6c11\u6a29 \u2014 \u3044\u305a\u308c\u3082\u6570\u5e74\u304b\u304b\u308a\u307e\u3059\u30024\u5e74\u76ee\u3067\u306f\u306a\u304f\u3001\u4eca\u304b\u3089\u624b\u7d9a\u304d\u3092\u7406\u89e3\u3057\u59cb\u3081\u307e\u3057\u3087\u3046\u3002",
              descZh: "\u5982\u679c\u5b66\u751f\u7b7e\u8bc1\u8fdb\u5c55\u987a\u5229\uff0c\u770b\u770b 485 \u7b7e\u8bc1\u3002\u5982\u679c\u4f60\u559c\u6b22\u6253\u5de5\u5ea6\u5047\u90a3\u4e00\u5e74\uff0c\u53ef\u4ee5\u8003\u8651\u7b2c\u4e8c\u4e2a WHV \u6216\u504f\u8fdc\u5730\u533a\u62c5\u4fdd\u3002\u4f34\u4fa3\u7b7e\u8bc1\u3001\u6c38\u5c45\u3001\u5165\u7c4d\u2014\u2014\u8fd9\u4e9b\u90fd\u8981\u597d\u51e0\u5e74\u3002\u73b0\u5728\u5c31\u5f00\u59cb\u4e86\u89e3\u6d41\u7a0b\uff0c\u522b\u7b49\u5230\u7b2c\u56db\u5e74\u3002",
              descKo:
                "학생 비자가 잘 풀리고 있다면 485 비자를 살펴보세요. 워홀 1년이 좋았다면 두 번째 워홀이나 지방 sponsorship. 파트너 비자, 영주권, 시민권 — 모두 수년이 걸립니다. 4년 차에 알아보기 시작하지 말고 지금부터 프로세스를 파악하세요.",
            },
            {
              icon: "🎉",
              en: "Get into Aussie life, not just Korean-Sydney", ja: "韓国人社会のシドニーだけでなく、オーストラリアの生活に入り込む", zh: "融入澳大利亚生活，而不只是韩裔悉尼圈",
              ko: "한인 시드니가 아닌 호주 생활에 들어가기",
              descEn:
                "AFL, farmers' markets, the footy at the pub on a Saturday, Australia Day, Anzac Day, Christmas in summer. The small things you do in year two and three are what make you feel like you live here, not just stay here.",
              descJa: "AFL\u3001\u30d5\u30a1\u30fc\u30de\u30fc\u30ba\u30de\u30fc\u30b1\u30c3\u30c8\u3001\u571f\u66dc\u65e5\u306b\u30d1\u30d6\u3067\u89b3\u308b\u30d5\u30c3\u30c6\u30a3\u30fc\u3001\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u30fb\u30c7\u30fc\u3001\u30a2\u30f3\u30b6\u30c3\u30af\u30fb\u30c7\u30fc\u3001\u590f\u306e\u30af\u30ea\u30b9\u30de\u30b9\u30022\u5e74\u76ee\u30013\u5e74\u76ee\u306b\u3059\u308b\u5c0f\u3055\u306a\u3053\u3068\u3053\u305d\u304c\u3001\u305f\u3060\u6ede\u5728\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u3053\u3053\u306b\u66ae\u3089\u3057\u3066\u3044\u308b\u3068\u611f\u3058\u3055\u305b\u3066\u304f\u308c\u307e\u3059\u3002",
              descZh: "AFL\u3001\u519c\u592b\u5e02\u96c6\u3001\u5468\u516d\u5728\u9152\u5427\u770b\u7403\u3001\u6fb3\u5927\u5229\u4e9a\u65e5\u3001\u6fb3\u65b0\u519b\u56e2\u65e5\u3001\u590f\u5929\u8fc7\u5723\u8bde\u3002\u7b2c\u4e8c\u4e09\u5e74\u505a\u7684\u8fd9\u4e9b\u5c0f\u4e8b\uff0c\u624d\u80fd\u8ba9\u4f60\u611f\u89c9\u81ea\u5df1\u662f\u4f4f\u5728\u8fd9\u91cc\uff0c\u800c\u4e0d\u53ea\u662f\u5f85\u5728\u8fd9\u91cc\u3002",
              descKo:
                "AFL, 농산물 시장, 토요일 펍에서 풋볼, 호주의 날, ANZAC 데이, 여름 크리스마스. 2-3년 차에 하는 작은 것들이 '머무르는 것'이 아니라 '사는 것'을 느끼게 합니다.",
            },
            {
              icon: "📸",
              en: "Make it memorable on purpose", ja: "意識して思い出深いものにする", zh: "有意识地让它变得难忘",
              ko: "일부러 기억에 남게 만들기",
              descEn:
                "Five years from now you won't remember the year you stayed in Surry Hills and saved money. You'll remember the road trip to Uluru, the year you played rugby, the friends from that language exchange. Spend the time on the memories.",
              descJa: "5\u5e74\u5f8c\u3001\u30b5\u30ea\u30fc\u30fb\u30d2\u30eb\u30ba\u3067\u304a\u91d1\u3092\u8caf\u3081\u3066\u904e\u3054\u3057\u305f1\u5e74\u306f\u899a\u3048\u3066\u3044\u307e\u305b\u3093\u3002\u899a\u3048\u3066\u3044\u308b\u306e\u306f\u3001\u30a6\u30eb\u30eb\u3078\u306e\u30ed\u30fc\u30c9\u30c8\u30ea\u30c3\u30d7\u3001\u30e9\u30b0\u30d3\u30fc\u3092\u3057\u305f1\u5e74\u3001\u8a9e\u5b66\u4ea4\u6d41\u3067\u3067\u304d\u305f\u53cb\u9054\u3067\u3059\u3002\u305d\u306e\u6642\u9593\u306f\u601d\u3044\u51fa\u306b\u4f7f\u3044\u307e\u3057\u3087\u3046\u3002",
              descZh: "\u4e94\u5e74\u540e\uff0c\u4f60\u4e0d\u4f1a\u8bb0\u5f97\u5728 Surry Hills \u7701\u94b1\u7684\u90a3\u4e00\u5e74\u3002\u4f60\u4f1a\u8bb0\u5f97\u53bb\u4e4c\u9c81\u9c81\u7684\u81ea\u9a7e\u6e38\u3001\u6253\u6a44\u6984\u7403\u7684\u90a3\u4e2a\u8d5b\u5b63\u3001\u8bed\u8a00\u4ea4\u6362\u8ba4\u8bc6\u7684\u670b\u53cb\u3002\u628a\u65f6\u95f4\u82b1\u5728\u7559\u4e0b\u56de\u5fc6\u4e0a\u5427\u3002",
              descKo:
                "5년 뒤에 머리에는 Surry Hills에서 돈 아끼며 보낸 1년이 안 남습니다. 울루루로 간 로드트립, 럭비 한 시즌, 언어교환에서 만난 친구들은 남습니다. 기억에 쓸 시간을 쓰세요.",
            },
          ].map((item, i) => (
            <li
              key={item.en}
              className={`reveal reveal-delay-${(i % 5) + 1} flex gap-4 group`}
            >
              <span className="shrink-0 w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <div>
                <h3 className="font-serif text-lg md:text-xl text-stone-900 dark:text-stone-100 mb-1">
                  <En translated>{item.en}</En>
                  <Ja>{pickLocale("ja", item)}</Ja>
                  <Zh>{pickLocale("zh", item)}</Zh>
                  <Ko>{item.ko}</Ko>
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  <Ja>{item.descJa ?? item.descEn}</Ja>
                  <Zh>{item.descZh ?? item.descEn}</Zh>
                  <Ko>{item.descKo}</Ko>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* The slow part — softened. Previous version prescribed "first two
          years are hardest", which assumes a single timeline. Replaced with
          language that acknowledges belonging happens on its own schedule. */}
      <section className="mb-10 bg-stone-900 dark:bg-dark-surface rounded-3xl p-7 md:p-9 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="relative">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-400 mb-3">
            <En translated>Honest take</En>
            <Ja>正直なところ</Ja>
            <Zh>实话实说</Zh>
            <Ko>솔직한 이야기</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
            <En translated>There&apos;s no single timeline for belonging.</En>
            <Ja>帰属感に決まった時間軸はありません。</Ja>
            <Zh>归属感没有统一的时间表。</Zh>
            <Ko>소속감의 시간표는 사람마다 다릅니다.</Ko>
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
            <En translated>
              Some people feel at home in weeks. Others take years. Both are normal. The first year is when most people consider leaving — the novelty wears off, homesickness spikes, and the friends you made in the first month turn out to be passing through. The ones who stay are usually the ones who stop measuring their life here against where they came from, and start measuring it on its own terms.
            </En>
            <Ja>数週間でここを我が家のように感じる人もいれば、数年かかる人もいます。どちらも普通のことです。最初の1年は、多くの人が離れることを考える時期です — 新鮮さは薄れ、ホームシックは高まり、最初の1か月にできた友人は通り過ぎるだけの人だったと気づきます。残る人はたいてい、ここでの暮らしを出身地と比べるのをやめ、それ自体の基準で測り始めた人たちです。</Ja>
            <Zh>有些人几周就有了家的感觉，有些人则需要几年。两者都很正常。第一年往往是大多数人考虑离开的时候——新鲜感消退，思乡情绪达到顶峰，而你第一个月交到的朋友，结果只是匆匆过客。留下来的人，通常是那些不再拿这里的生活与出身地比较、而是开始以它自身的标准来衡量的人。</Zh>
            <Ko>
              어떤 사람은 몇 주 만에 집처럼 느낍니다. 어떤 사람은 몇 년이 걸립니다. 둘 다 정상입니다. 첫 1년은 대부분 떠날까 고민하는 시기 — 새로움은 식고, 향수병은 극에 달하고, 첫 달에 사귄 친구들이 다 지나가는 사람이었다는 걸 알게 됩니다. 남는 사람들은 보통 출신지와 비교하는 것을 멈추고, 여기서의 삶을 자체 기준으로 재기 시작하는 사람들입니다.
            </Ko>
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            <En translated>There is no shortcut. There is also no deadline.</En>
            <Ja>近道はありません。締め切りもありません。</Ja>
            <Zh>没有捷径，也没有截止日期。</Zh>
            <Ko>지름길은 없습니다. 마감일도 없습니다.</Ko>
          </p>
        </div>
      </section>

      {/* After this guide — what you'll walk away with. The "long-game"
          outcomes now match the page's pivot: travel, English, community,
          a second visa if they want to stay. */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-5">
          <En translated>After this guide</En>
          <Ja>このガイドの後は</Ja>
          <Zh>读完这份指南后</Zh>
          <Ko>이 가이드를 마치면</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
          {[
            {
              icon: "✈️",
              en: "A travel list you'll actually have ticked off", ja: "実際にすべて達成できる旅のリスト", zh: "一份你真能全部打勾的旅行清单",
              ko: "실제로 체크한 여행 리스트",
              blurbEn:
                "Not 'Australia' as a stamp in your passport — actual places you went, routes you drove, the night you saw the Milky Way from the middle of nowhere.",
              blurbJa: "\u30d1\u30b9\u30dd\u30fc\u30c8\u306e\u30b9\u30bf\u30f3\u30d7\u3068\u3057\u3066\u306e\u300c\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u300d\u3067\u306f\u306a\u304f \u2014 \u5b9f\u969b\u306b\u884c\u3063\u305f\u5834\u6240\u3001\u81ea\u5206\u3067\u904b\u8ee2\u3057\u305f\u9053\u3001\u4f55\u3082\u306a\u3044\u5834\u6240\u306e\u771f\u3093\u4e2d\u3067\u5929\u306e\u5ddd\u3092\u898b\u305f\u591c\u3002",
              blurbZh: "\u4e0d\u662f\u62a4\u7167\u4e0a\u300c\u6fb3\u5927\u5229\u4e9a\u300d\u7684\u4e00\u4e2a\u5370\u7ae0\u2014\u2014\u800c\u662f\u4f60\u771f\u6b63\u53bb\u8fc7\u7684\u5730\u65b9\u3001\u81ea\u9a7e\u8d70\u8fc7\u7684\u8def\u7ebf\u3001\u5728\u67d0\u5904\u8352\u91ce\u4ef0\u671b\u94f6\u6cb3\u7684\u90a3\u4e00\u591c\u3002",
              blurbKo:
                "여권 도장이 아니라 — 실제로 간 곳, 직접 운전한 길, 한복판에서 본 은하수.",
            },
            {
              icon: "🗣️",
              en: "English that doesn't need translating in your head", ja: "頭の中で翻訳しなくていい英語", zh: "无需在脑中翻译的英语",
              ko: "머릿속 번역이 필요 없는 영어",
              blurbEn:
                "Conversations where you react, not translate. Jokes you get before they're explained. Workplace banter that doesn't feel like a foreign language.",
              blurbJa: "\u7ffb\u8a33\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u53cd\u5fdc\u3067\u304d\u308b\u4f1a\u8a71\u3002\u8aac\u660e\u3055\u308c\u308b\u524d\u306b\u308f\u304b\u308b\u5197\u8ac7\u3002\u5916\u56fd\u8a9e\u306b\u611f\u3058\u306a\u3044\u8077\u5834\u306e\u8efd\u53e3\u3002",
              blurbZh: "\u5bf9\u8bdd\u65f6\u4f60\u5728\u53cd\u5e94\uff0c\u800c\u4e0d\u662f\u7ffb\u8bd1\u3002\u73a9\u7b11\u4e0d\u7528\u89e3\u91ca\u4f60\u5c31\u80fd\u542c\u61c2\u3002\u804c\u573a\u95f2\u804a\u4e0d\u518d\u50cf\u4e00\u95e8\u5916\u8bed\u3002",
              blurbKo:
                "번역이 아니라 반응하는 대화. 설명 전에 알아듣는 농담. 외국어 같지 않은 직장 농담.",
            },
            {
              icon: "🤝",
              en: "A community anchor that shows up", ja: "実際に通えるコミュニティの拠点", zh: "一个你真正会去的社区据点",
              ko: "참여할 이유가 있는 커뮤니티",
              blurbEn:
                "One group, one routine, one reason to leave the house on a Tuesday. Friendships here take longer than you think — but they're worth it.",
              blurbJa: "\u4e00\u3064\u306e\u96c6\u307e\u308a\u3001\u4e00\u3064\u306e\u7fd2\u6163\u3001\u706b\u66dc\u65e5\u306b\u5bb6\u3092\u51fa\u308b\u7406\u7531\u3002\u3053\u3053\u3067\u306e\u53cb\u60c5\u306f\u601d\u3046\u3088\u308a\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3059 \u2014 \u3067\u3082\u3001\u305d\u308c\u3060\u3051\u306e\u4fa1\u5024\u304c\u3042\u308a\u307e\u3059\u3002",
              blurbZh: "\u4e00\u4e2a\u56e2\u4f53\u3001\u4e00\u4e2a\u56fa\u5b9a\u7684\u4e60\u60ef\u3001\u4e00\u4e2a\u8ba9\u4f60\u5468\u4e8c\u51fa\u95e8\u7684\u7406\u7531\u3002\u8fd9\u91cc\u7684\u53cb\u8c0a\u6bd4\u4f60\u60f3\u7684\u66f4\u6162\u2014\u2014\u4f46\u503c\u5f97\u3002",
              blurbKo:
                "하나의 모임, 하나의 루틴, 화요일에 집을 나설 이유. 여기서 우정은 생각보다 오래 걸리지만 — 그만큼 가치 있습니다.",
            },
            {
              icon: "🎓",
              en: "A visa plan, if you want to stay", ja: "滞在したいなら、ビザの計画", zh: "如果你想留下，一份签证计划",
              ko: "머물고 싶다면 비자 계획",
              blurbEn:
                "485, second WHV, partner visa, PR, citizenship. A realistic timeline, not a panic at year four.",
              blurbJa: "485\u30012\u56de\u76ee\u306eWHV\u3001\u30d1\u30fc\u30c8\u30ca\u30fc\u30d3\u30b6\u3001PR\u3001\u5e02\u6c11\u6a29\u30024\u5e74\u76ee\u306e\u30d1\u30cb\u30c3\u30af\u3067\u306f\u306a\u304f\u3001\u73fe\u5b9f\u7684\u306a\u30bf\u30a4\u30e0\u30e9\u30a4\u30f3\u3002",
              blurbZh: "485\u3001\u7b2c\u4e8c\u4e2a WHV\u3001\u4f34\u4fa3\u7b7e\u8bc1\u3001\u6c38\u5c45\u3001\u5165\u7c4d\u3002\u4e00\u4efd\u73b0\u5b9e\u7684\u65f6\u95f4\u8868\uff0c\u800c\u4e0d\u662f\u7b2c\u56db\u5e74\u7684\u614c\u4e71\u3002",
              blurbKo:
                "485, 두 번째 워홀, 파트너 비자, 영주권, 시민권. 4년 차의 패닉이 아닌 현실적인 타임라인.",
            },
          ].map((w, i) => (
            <div
              key={w.en}
              className={`reveal reveal-delay-${(i % 5) + 1} p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-950/30 dark:to-darkbg border border-teal-100/50 dark:border-teal-900/30`}
            >
              <div className="text-2xl mb-2">{w.icon}</div>
              <h3 className="font-serif text-base md:text-lg text-stone-900 dark:text-stone-100 mb-1.5 leading-snug">
                <En translated>{w.en}</En>
                <Ja>{pickLocale("ja", w)}</Ja>
                <Zh>{pickLocale("zh", w)}</Zh>
                <Ko>{w.ko}</Ko>
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed">
                <Ja>{w.blurbJa ?? w.blurbEn}</Ja>
                <Zh>{w.blurbZh ?? w.blurbEn}</Zh>
                <Ko>{w.blurbKo}</Ko>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Keep reading — finance card removed per Michael; replaced with
          Aussie English (the new pivot toward language immersion). */}
      <section>
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-5">
          <En translated>Keep reading</En>
          <Ja>続きを読む</Ja>
          <Zh>继续阅读</Zh>
          <Ko>더 알아보기</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          <Link
            href="/beyond-sydney"
            className="reveal reveal-delay-1 group p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-950/30 dark:to-teal-900/20 border border-teal-100/50 dark:border-teal-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">
              🚗 <En translated>Weekend trips</En><Ja>週末の旅</Ja><Zh>周末短途游</Zh>
              <Ko>주말 여행</Ko>
            </div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En translated>Blue Mountains, South Coast, Hunter Valley</En>
              <Ja>ブルー・マウンテンズ、サウス・コースト、ハンター・バレー</Ja>
              <Zh>蓝山、南海岸、猎人谷</Zh>
              <Ko>블루마운틴, 사우스 코스트, 헌터 밸리</Ko>
            </div>
          </Link>
          <Link
            href="/aussie-english"
            className="reveal reveal-delay-2 group p-5 rounded-2xl bg-gradient-to-br from-sunset/10 to-sunset/5 dark:from-sunset/20 dark:to-sunset/10 border border-sunset/20 dark:border-sunset/30 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">
              🗣️ <En translated>Aussie English</En><Ja>オーストラリア英語</Ja><Zh>澳洲英语</Zh>
              <Ko>호주 영어</Ko>
            </div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En translated>Slang, idioms, the words you missed</En>
              <Ja>スラング、慣用句、聞き逃した言葉</Ja>
              <Zh>俚语、习语，还有你没听懂的那些词</Zh>
              <Ko>슬랭, 관용구, 놓친 표현들</Ko>
            </div>
          </Link>
          <Link
            href="/resources"
            className="reveal reveal-delay-3 group p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100/50 dark:from-sky-950/30 dark:to-sky-900/20 border border-sky-100/50 dark:border-sky-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">
              🤝 <En translated>Community</En><Ja>コミュニティ</Ja><Zh>社区</Zh>
              <Ko>커뮤니티</Ko>
            </div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En translated>Churches, sports clubs, meetups</En>
              <Ja>教会、スポーツクラブ、ミートアップ</Ja>
              <Zh>教会、体育俱乐部、聚会</Zh>
              <Ko>한인 교회, 동호회, 모임</Ko>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

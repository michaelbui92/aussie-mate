import Link from "next/link";
import { pickLocale } from "@/lib/locale";
import {En, Ja, Ko, Zh} from "../LangBlocks";

export default function ArrivedContent() {
  return (
    <>
      {/* Intro — warm framing before the practical list. "You made it"
          and "don't try to do everything at once" sets the right tone
          for a first-week checklist. */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-600 mb-3">
          <En translated>First month</En>
          <Ja>最初の1か月</Ja>
          <Zh>第一个月</Zh>
          <Ko>첫 한 달</Ko>
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4 leading-tight">
          <En translated>You made it. Take a breath — then read this.</En>
          <Ja>到着しましたね。ひと息ついてから、これを読んでください。</Ja>
          <Zh>你到啦。先喘口气 — 然后读读这个。</Zh>
          <Ko>도착하셨네요. 한숨 돌리시고 — 천천히 읽어보세요.</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En translated>
            The first few weeks in Australia are overwhelming — new city,
            new systems, new accents, all at once. Don&apos;t try to do
            everything. Here&apos;s the order that actually matters, written
            by someone who fumbled most of it the first time. Living in a
            new place can be daunting, but you&apos;ll be fine.
          </En>
          <Ja>オーストラリアでの最初の数週間は圧倒されます — 新しい街、
            新しい制度、新しいなまり、すべてが一度に。全部やろうと
            しないでください。最初はほとんどを手探りでこなした
            人が書いた、本当に大切な順番をここにまとめました。
            新しい場所での暮らしは不安かもしれませんが、大丈夫です。</Ja>
          <Zh>在澳大利亚的头几周会让人不知所措 — 新的城市、
            新的制度、新的口音，一下子全都涌来。别想着
            什么都做完。下面是一位当初几乎处处碰壁的人
            写下的、真正重要的顺序。在一个陌生的地方生活
            可能让人发怵，但你会没事的。</Zh>
          <Ko>
            호주에서의 첫 몇 주는 압도적입니다 — 낯선 도시, 낯선 시스템,
            낯선 억양, 한꺼번에. 다 하려 하지 마세요. 처음에 대부분 헤맨
            사람이 직접 정리한, 실제로 중요한 순서대로 알려드립니다.
            새로운 곳에서 사는 건 막막할 수 있지만, 잘 될 거예요.
          </Ko>
        </p>
      </section>

      {/* Watch out — scam warning callout. Echoes the hub's "be wary of
          scammers" line. Common newcomer-targeting scams in the first
          month. Compact, amber, sits between the intro and the
          actionable sections. */}
      <section className="mb-10 rounded-3xl border-2 border-amber-300/80 dark:border-amber-700/50 bg-amber-50/60 dark:bg-amber-950/20 p-6 md:p-8 relative overflow-hidden">
        <div className="flex items-start gap-4">
          <span className="shrink-0 w-10 h-10 rounded-2xl bg-amber-200/70 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 flex items-center justify-center text-lg" aria-hidden="true">
            ⚠️
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-amber-800 dark:text-amber-400 mb-2">
              <En translated>Watch out</En>
              <Ja>注意</Ja>
              <Zh>当心</Zh>
              <Ko>주의</Ko>
            </p>
            <h2 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-stone-100 mb-3 leading-tight">
              <En translated>Scammers target new arrivals.</En>
              <Ja>詐欺師は新しく来た人を狙います。</Ja>
              <Zh>骗子专挑新来的人下手。</Zh>
              <Ko>사기꾼들은 신참을 노립니다.</Ko>
            </h2>
            <ul className="space-y-2.5 text-sm md:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-amber-700 dark:text-amber-400 font-mono shrink-0">01</span>
                <span>
                  <En translated><strong className="text-stone-900 dark:text-stone-100">Fake job ads.</strong> Anyone asking for payment to "process" your application is a scam. Real employers never ask for money upfront.</En>
                  <Ja><strong className="text-stone-900 dark:text-stone-100">偽の求人広告。</strong>応募を「処理」するための支払いを求める人は詐欺です。本当の雇用主は前払いのお金を一切求めません。</Ja>
                  <Zh><strong className="text-stone-900 dark:text-stone-100">虚假招聘广告。</strong>任何以"处理"你的申请为由索要付款的人都是骗子。真正的雇主绝不会要求预付费用。</Zh>
                  <Ko><strong className="text-stone-900 dark:text-stone-100">가짜 구인 광고.</strong> "처리 수수료"를 요구하면 사기. 진짜 고용주는 upfront 결제를 요구하지 않습니다.</Ko>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700 dark:text-amber-400 font-mono shrink-0">02</span>
                <span>
                  <En translated><strong className="text-stone-900 dark:text-stone-100">Rental scams.</strong> Never send a deposit on a property you haven&apos;t inspected in person. Photos and addresses can be stolen from other listings.</En>
                  <Ja><strong className="text-stone-900 dark:text-stone-100">賃貸詐欺。</strong>実際に内見していない物件の保証金は絶対に送らないでください。写真や住所は他の物件情報から盗用されることがあります。</Ja>
                  <Zh><strong className="text-stone-900 dark:text-stone-100">租房骗局。</strong>绝不要为没有亲自看房的房产支付押金。照片和地址可能是从其他房源盗用的。</Zh>
                  <Ko><strong className="text-stone-900 dark:text-stone-100">부동산 사기.</strong> 직접 보지 않은 집의 보증금을 보내지 마세요. 사진과 주소는 다른 매물에서 훔쳐올 수 있습니다.</Ko>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700 dark:text-amber-400 font-mono shrink-0">03</span>
                <span>
                  <En translated><strong className="text-stone-900 dark:text-stone-100">ATO &amp; immigration impersonation.</strong> The ATO never asks for payment via gift cards, wire transfer, or cryptocurrency. Real calls end with "you can verify at ato.gov.au" — not urgency.</En>
                  <Ja><strong className="text-stone-900 dark:text-stone-100">ATO &amp; 移民局のなりすまし。</strong>ATO がギフトカード、電信送金、暗号資産での支払いを求めることはありません。本物の電話は「ato.gov.au で確認できます」で終わります — 緊急性を煽ることはありません。</Ja>
                  <Zh><strong className="text-stone-900 dark:text-stone-100">ATO &amp; 移民局冒充诈骗。</strong>ATO 绝不会要求用礼品卡、电汇或加密货币付款。真正的来电会以"您可以在 ato.gov.au 核实"结束 — 而不是制造紧迫感。</Zh>
                  <Ko><strong className="text-stone-900 dark:text-stone-100">ATO·이민사 사칭.</strong> ATO는 gift card, 해외송금, 암호화폐로 결제를 요구하지 않습니다. 진짜 전화는 "ato.gov.au에서 확인하세요"로 끝납니다 — 조급함으로 끝나지 않습니다.</Ko>
                </span>
              </li>
            </ul>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-4">
              <En translated>If something feels off, report it to <a href="https://www.scamwatch.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-700 dark:hover:text-amber-300">ScamWatch</a>. You won&apos;t be the first to report it.</En>
              <Ja>違和感を覚えたら、<a href="https://www.scamwatch.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-700 dark:hover:text-amber-300">ScamWatch</a> に通報してください。あなたが最初の通報者ではありません。</Ja>
              <Zh>如果觉得不对劲，请向 <a href="https://www.scamwatch.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-700 dark:hover:text-amber-300">ScamWatch</a> 举报。你不会是第一个举报的人。</Zh>
              <Ko>뭔가 이상하다면 <a href="https://www.scamwatch.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-700 dark:hover:text-amber-300">ScamWatch</a>에 신고하세요. 당신이 첫 번째가 아닙니다.</Ko>
            </p>
          </div>
        </div>
      </section>

      {/* Start here — three things worth doing before the long list. */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-600 mb-5">
          <En translated>Start here</En>
          <Ja>ここから始める</Ja>
          <Zh>从这里开始</Zh>
          <Ko>먼저 이것부터</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
          {[
            {
              icon: "📱",
              en: "Get your Australian number", ja: "オーストラリアの番号を取得", zh: "办理澳大利亚手机号",
              ko: "호주 전화번호 받기",
              blurbEn: "Woolworths, Coles, or any 7-Eleven sets you up in 10 minutes with your passport. eSIM works too if you bought one before you flew.",
              blurbJa: "Woolworths\u3001Coles\u30017-Eleven\u306e\u3069\u3053\u3067\u3082\u3001\u30d1\u30b9\u30dd\u30fc\u30c8\u304c\u3042\u308c\u307010\u5206\u3067\u958b\u901a\u3057\u307e\u3059\u3002\u51fa\u767a\u524d\u306beSIM\u3092\u8cfc\u5165\u3057\u3066\u3044\u308c\u3070\u3001\u305d\u308c\u3082\u4f7f\u3048\u307e\u3059\u3002",
              blurbZh: "\u5e26\u4e0a\u62a4\u7167\uff0c\u5728 Woolworths\u3001Coles \u6216\u4efb\u4f55\u4e00\u5bb6 7-Eleven\uff0c10 \u5206\u949f\u5c31\u80fd\u529e\u597d\u3002\u5982\u679c\u4f60\u51fa\u53d1\u524d\u4e70\u4e86 eSIM\uff0c\u4e5f\u7167\u6837\u80fd\u7528\u3002",
              blurbKo: "Woolworths, Coles, 7-Eleven 어느 곳이든 여권으로 10분이면 개통됩니다. 출발 전 eSIM을 사왔다면 그것도 됩니다.",
            },
            {
              icon: "🏦",
              en: "Visit your bank", ja: "銀行を訪ねる", zh: "前往银行",
              ko: "은행 방문",
              blurbEn: "Open an Australian account online with a passport — about 20 minutes. Your employer needs an Australian account to pay you. Skip the branch queues.",
              blurbJa: "\u30d1\u30b9\u30dd\u30fc\u30c8\u3067\u30aa\u30f3\u30e9\u30a4\u30f3\u958b\u8a2d \u2014 \u7d0420\u5206\u3002\u96c7\u7528\u4e3b\u304c\u7d66\u4e0e\u3092\u652f\u6255\u3046\u306b\u306f\u3001\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306e\u53e3\u5ea7\u304c\u5fc5\u8981\u3067\u3059\u3002\u652f\u5e97\u306e\u884c\u5217\u306f\u907f\u3051\u307e\u3057\u3087\u3046\u3002",
              blurbZh: "\u5e26\u4e0a\u62a4\u7167\u5728\u7ebf\u5f00\u7acb\u6fb3\u5927\u5229\u4e9a\u8d26\u6237\u2014\u2014\u5927\u7ea6 20 \u5206\u949f\u3002\u96c7\u4e3b\u9700\u8981\u4e00\u4e2a\u6fb3\u5927\u5229\u4e9a\u8d26\u6237\u624d\u80fd\u7ed9\u4f60\u53d1\u5de5\u8d44\u3002\u4e0d\u7528\u53bb\u7f51\u70b9\u6392\u961f\u3002",
              blurbKo: "여권으로 온라인 개설 — 약 20분. 고용주가 급여를 입금하려면 호주 계좌가 필요합니다. 지점 줄을 서지 마세요.",
            },
            {
              icon: "🏠",
              en: "Find a permanent place to live", ja: "定住先の住まいを探す", zh: "找到长期住所",
              ko: "정착할 집 구하기",
              blurbEn: "Flatmates.com.au is where most newcomers find their first share house. Naver and Hojunara are the Korean-community listings channels. Inspect 3–5 places before signing. Photos lie. Most newcomers spend 2–4 weeks house hunting before settling.",
              blurbJa: "\u307b\u3068\u3093\u3069\u306e\u65b0\u5165\u8005\u304c\u6700\u521d\u306e\u30b7\u30a7\u30a2\u30cf\u30a6\u30b9\u3092\u898b\u3064\u3051\u308b\u306e\u306fFlatmates.com.au\u3067\u3059\u3002Naver\u3068Hojunara\u306f\u97d3\u56fd\u7cfb\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306e\u7269\u4ef6\u30c1\u30e3\u30f3\u30cd\u30eb\u3067\u3059\u3002\u5951\u7d04\u524d\u306b3\u301c5\u4ef6\u306f\u5185\u898b\u3057\u307e\u3057\u3087\u3046\u3002\u5199\u771f\u306f\u5618\u3092\u3064\u304d\u307e\u3059\u3002\u591a\u304f\u306e\u65b0\u5165\u8005\u306f2\u301c4\u9031\u9593\u304b\u3051\u3066\u63a2\u3057\u3066\u304b\u3089\u843d\u3061\u7740\u304d\u307e\u3059\u3002",
              blurbZh: "\u5927\u591a\u6570\u65b0\u6765\u8005\u90fd\u662f\u5728 Flatmates.com.au \u627e\u5230\u7b2c\u4e00\u4e2a\u5408\u79df\u623f\u3002Naver \u548c Hojunara \u662f\u97e9\u88d4\u793e\u533a\u7684\u623f\u6e90\u6e20\u9053\u3002\u7b7e\u7ea6\u524d\u5148\u770b 3\u20135 \u5957\u623f\u3002\u7167\u7247\u4f1a\u9a97\u4eba\u3002\u5927\u591a\u6570\u65b0\u6765\u8005\u8981\u82b1 2\u20134 \u5468\u770b\u623f\u624d\u80fd\u5b9a\u4e0b\u6765\u3002",
              blurbKo: "대부분의 신참은 flatmates.com.au에서 첫 쉐어하우스를 구합니다. 네이버 부동산과 호주나라는 한인 커뮤니티 매물 채널입니다. 서명 전에 3-5곳을 직접 봅니다. 사진은 거짓말을 합니다. 대부분 2-4주 집을 보고 정착합니다.",
              href: "/transport",
              hrefLabelEn: "Once you've picked a suburb — see how to get around →",
              hrefLabelJa: "\u4f4f\u3080\u5730\u57df\u3092\u6c7a\u3081\u305f\u3089 \u2014 \u79fb\u52d5\u65b9\u6cd5\u306f\u3053\u3061\u3089 \u2192",
              hrefLabelZh: "\u9009\u597d\u4f4f\u5904\u6240\u5728\u7684\u533a\u4e4b\u540e\u2014\u2014\u770b\u770b\u600e\u4e48\u51fa\u884c \u2192",
              hrefLabelKo: "동네를 정했다면 — 시드니 이동 방법은 여기 →",
            },
            {
              icon: "📋",
              en: "Apply for a TFN", ja: "TFNを申請", zh: "申请TFN",
              ko: "TFN 신청",
              blurbEn: "Free from ato.gov.au. Without it your employer withholds tax at the emergency rate — you lose 30–40% of your take-home pay until you do.",
              blurbJa: "ato.gov.au\u3067\u7121\u6599\u3002\u7533\u8acb\u3057\u306a\u3044\u3068\u3001\u96c7\u7528\u4e3b\u304c\u7dca\u6025\u7a0e\u7387\u3067\u6e90\u6cc9\u5fb4\u53ce\u3057\u307e\u3059 \u2014 \u7533\u8acb\u3059\u308b\u307e\u3067\u624b\u53d6\u308a\u306e30\u301c40%\u3092\u5931\u3044\u307e\u3059\u3002",
              blurbZh: "\u5728 ato.gov.au \u514d\u8d39\u7533\u8bf7\u3002\u6ca1\u6709\u5b83\uff0c\u96c7\u4e3b\u4f1a\u6309\u7d27\u6025\u7a0e\u7387\u9884\u6263\u7a0e\u6b3e\u2014\u2014\u5728\u529e\u597d\u4e4b\u524d\uff0c\u4f60\u7684\u5230\u624b\u5de5\u8d44\u4f1a\u5c11 30\u201340%\u3002",
              blurbKo: "ato.gov.au에서 무료 신청. 신청하지 않으면 고용주가 긴급 세율로 원천징수 — 신청할 때까지 실수령액의 30–40%를 잃습니다.",
            },
          ].map((w, i) => (
            <div
              key={w.en}
              className={`reveal reveal-delay-${i + 1} p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20 border border-emerald-100/50 dark:border-emerald-900/30 flex flex-col`}
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
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
                >
                  <Ja>{w.hrefLabelJa}</Ja>
                  <Zh>{w.hrefLabelZh}</Zh>
                  <Ko>{w.hrefLabelKo}</Ko>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Week 1 checklist — concrete, scannable action items */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-600 mb-5">
          <En translated>Week 1 checklist</En>
          <Ja>1週目のチェックリスト</Ja>
          <Zh>第一周清单</Zh>
          <Ko>첫 주 체크리스트</Ko>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-3xl">
          {[
            { en: "Phone active", ja: "電話開通済み", zh: "手机已开通", ko: "전화 개통" },
            { en: "Bank account open", ja: "銀行口座開設済み", zh: "银行账户已开设", ko: "은행 계좌" },
            { en: "Permanent place secured", ja: "定住先の住まい確保済み", zh: "长期住所已落实", ko: "정착할 집 확보" },
            { en: "TFN applied for", ja: "TFN申請済み", zh: "TFN已申请", ko: "TFN 신청" },
          ].map((step, i) => (
            <div
              key={step.en}
              className={`reveal reveal-delay-${i + 1} flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border`}
            >
              <span className="shrink-0 w-6 h-6 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                ✓
              </span>
              <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                <En translated>{step.en}</En>
                <Ja>{pickLocale("ja", step)}</Ja>
                <Zh>{pickLocale("zh", step)}</Zh>
                <Ko>{step.ko}</Ko>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* The order that matters */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-600 mb-5">
          <En translated>The order that actually matters</En>
          <Ja>本当に大切な順番</Ja>
          <Zh>真正重要的顺序</Zh>
          <Ko>실제로 중요한 순서</Ko>
        </p>
        <ul className="space-y-4 max-w-3xl">
          {[
            { icon: "📱", en: "Get a SIM card on day one", ja: "初日にSIMカードを入手", zh: "第一天就办SIM卡", ko: "첫날 SIM 카드 구매", descEn: "You can't navigate, message, or call anyone without a phone. Woolworths, Coles, or any 7-Eleven will set you up. Bring your passport. Cost: $10–$30 AUD for a prepaid starter. Telstra has the best coverage.",
            descJa: "\u30b9\u30de\u30db\u304c\u306a\u3051\u308c\u3070\u3001\u5730\u56f3\u3092\u898b\u308b\u3053\u3068\u3082\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u308b\u3053\u3068\u3082\u3001\u8ab0\u304b\u306b\u96fb\u8a71\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u305b\u3093\u3002Woolworths\u3001Coles\u30017-Eleven\u306e\u3069\u3053\u3067\u3082\u958b\u901a\u3067\u304d\u307e\u3059\u3002\u30d1\u30b9\u30dd\u30fc\u30c8\u3092\u6301\u53c2\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30d7\u30ea\u30da\u30a4\u30c9\u306e\u30b9\u30bf\u30fc\u30bf\u30fc\u306f$10\u301c$30 AUD\u3067\u3059\u3002Telstra\u304c\u6700\u3082\u5e83\u3044\u30a8\u30ea\u30a2\u3092\u30ab\u30d0\u30fc\u3057\u3066\u3044\u307e\u3059\u3002",
            descZh: "\u6ca1\u6709\u624b\u673a\uff0c\u4f60\u6ca1\u6cd5\u5bfc\u822a\u3001\u53d1\u4fe1\u606f\uff0c\u4e5f\u8054\u7cfb\u4e0d\u4e0a\u4efb\u4f55\u4eba\u3002Woolworths\u3001Coles \u6216\u4efb\u4f55\u4e00\u5bb6 7-Eleven \u90fd\u80fd\u5e2e\u4f60\u529e\u597d\u3002\u8bb0\u5f97\u5e26\u4e0a\u62a4\u7167\u3002\u9884\u4ed8\u8d39\u5957\u9910\u8d39\u7528\u4e3a $10\u2013$30 AUD\u3002Telstra \u7684\u4fe1\u53f7\u8986\u76d6\u6700\u597d\u3002", descKo: "스마트폰 없이는 길 찾기, 메시지, 전화가 모두 불가합니다. Woolworths, Coles, 7-Eleven에서 모두 가능합니다. 여권을 지참하세요. 선불 SIM 비용: $10–$30 AUD. Telstra가 가장 넓은 커버리지." },
            { icon: "💳", en: "Open a bank account within the week", ja: "1週間以内に銀行口座を開設", zh: "一周内开设银行账户", ko: "일주일 안에 은행 계좌 개설", descEn: "Commonwealth, ANZ, Westpac, NAB all let you open online with a passport — about 20 minutes. Your employer needs an Australian account to pay you. Skip the queues.",
            descJa: "Commonwealth\u3001ANZ\u3001Westpac\u3001NAB\u306f\u3044\u305a\u308c\u3082\u30d1\u30b9\u30dd\u30fc\u30c8\u3067\u30aa\u30f3\u30e9\u30a4\u30f3\u958b\u8a2d\u3067\u304d\u307e\u3059 \u2014 \u7d0420\u5206\u3002\u96c7\u7528\u4e3b\u304c\u7d66\u4e0e\u3092\u652f\u6255\u3046\u306b\u306f\u3001\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306e\u53e3\u5ea7\u304c\u5fc5\u8981\u3067\u3059\u3002\u884c\u5217\u306f\u907f\u3051\u307e\u3057\u3087\u3046\u3002",
            descZh: "Commonwealth\u3001ANZ\u3001Westpac\u3001NAB \u90fd\u652f\u6301\u7528\u62a4\u7167\u5728\u7ebf\u5f00\u6237\u2014\u2014\u5927\u7ea6 20 \u5206\u949f\u3002\u96c7\u4e3b\u9700\u8981\u4e00\u4e2a\u6fb3\u5927\u5229\u4e9a\u8d26\u6237\u624d\u80fd\u7ed9\u4f60\u53d1\u5de5\u8d44\u3002\u4e0d\u7528\u6392\u961f\u3002", descKo: "Commonwealth, ANZ, Westpac, NAB 모두 여권으로 온라인 개설 가능 — 약 20분. 고용주가 월급을 입금하려면 호주 계좌가 필요합니다. 줄 서지 마세요.", href: "/finance", hrefLabelEn: "Banking in Australia →",
            hrefLabelJa: "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306e\u9280\u884c\u53e3\u5ea7\u30ac\u30a4\u30c9 \u2192",
            hrefLabelZh: "\u6fb3\u5927\u5229\u4e9a\u94f6\u884c\u6307\u5357 \u2192", hrefLabelKo: "호주 은행 계좌 가이드 →" },
            { icon: "🚆", en: "Get an Opal card before you ride", ja: "乗車前にOpal カードを用意", zh: "乘车前先办Opal卡", ko: "탑승 전 오팔 카드 준비", descEn: "Sydney's public transport runs on Opal — trains, buses, ferries, light rail. Grab one at any train station or convenience store. Tap on, tap off. No card, no ride.",
            descJa: "\u30b7\u30c9\u30cb\u30fc\u306e\u516c\u5171\u4ea4\u901a\u306fOpal\u3067\u52d5\u304d\u307e\u3059 \u2014 \u96fb\u8eca\u3001\u30d0\u30b9\u3001\u30d5\u30a7\u30ea\u30fc\u3001\u30e9\u30a4\u30c8\u30ec\u30fc\u30eb\u3002\u99c5\u3084\u30b3\u30f3\u30d3\u30cb\u3067\u5165\u624b\u3067\u304d\u307e\u3059\u3002\u30bf\u30c3\u30d7\u30fb\u30aa\u30f3\u3001\u30bf\u30c3\u30d7\u30fb\u30aa\u30d5\u3002\u30ab\u30fc\u30c9\u304c\u306a\u3051\u308c\u3070\u4e57\u308c\u307e\u305b\u3093\u3002",
            descZh: "\u6089\u5c3c\u7684\u516c\u5171\u4ea4\u901a\u9760 Opal \u5361\u8fd0\u884c\u2014\u2014\u706b\u8f66\u3001\u516c\u4ea4\u8f66\u3001\u6e21\u8f6e\u3001\u8f7b\u8f68\u3002\u5728\u4efb\u4f55\u706b\u8f66\u7ad9\u6216\u4fbf\u5229\u5e97\u90fd\u80fd\u4e70\u5230\u3002\u4e0a\u8f66\u5237\u5361\uff0c\u4e0b\u8f66\u5237\u5361\u3002\u6ca1\u6709\u5361\u5c31\u5750\u4e0d\u4e86\u8f66\u3002", descKo: "시드니 대중교통은 오팔로 운영 — 기차, 버스, 페리, 경전철. 기차역이나 편의점에서 구매하세요. 탭 온, 탭 오프. 카드 없이는 탑승 불가.", href: "/transport", hrefLabelEn: "How to get and use Opal →",
            hrefLabelJa: "Opal\u306e\u5165\u624b\u3068\u4f7f\u3044\u65b9 \u2192",
            hrefLabelZh: "\u5982\u4f55\u529e\u7406\u548c\u4f7f\u7528 Opal \u5361 \u2192", hrefLabelKo: "오팔 얻고 사용하기 →" },
            { icon: "📋", en: "Apply for your TFN (tax number)", ja: "TFN（税務番号）を申請", zh: "申请TFN（税号）", ko: "TFN(세금번호) 신청", descEn: "Free from ato.gov.au. Without it, your employer withholds tax at the emergency rate — which means a lot less take-home pay. Do it in your first week if you're job hunting.",
            descJa: "ato.gov.au\u3067\u7121\u6599\u3002\u306a\u3044\u3068\u3001\u96c7\u7528\u4e3b\u304c\u7dca\u6025\u7a0e\u7387\u3067\u6e90\u6cc9\u5fb4\u53ce\u3057\u307e\u3059 \u2014 \u624b\u53d6\u308a\u304c\u5927\u304d\u304f\u6e1b\u308a\u307e\u3059\u3002\u4ed5\u4e8b\u63a2\u3057\u3092\u3057\u3066\u3044\u308b\u306a\u3089\u6700\u521d\u306e\u9031\u306b\u7533\u8acb\u3057\u307e\u3057\u3087\u3046\u3002",
            descZh: "\u5728 ato.gov.au \u514d\u8d39\u7533\u8bf7\u3002\u6ca1\u6709\u5b83\uff0c\u96c7\u4e3b\u4f1a\u6309\u7d27\u6025\u7a0e\u7387\u9884\u6263\u7a0e\u6b3e\u2014\u2014\u610f\u5473\u7740\u5230\u624b\u5de5\u8d44\u4f1a\u5c11\u5f88\u591a\u3002\u5982\u679c\u4f60\u5728\u627e\u5de5\u4f5c\uff0c\u7b2c\u4e00\u5468\u5c31\u53bb\u529e\u3002", descKo: "ato.gov.au에서 무료 신청. 없으면 고용주가 긴급 세율로 원천징수 — 실수령액이 크게 줄어듭니다. 구직 중이라면 첫 주에 신청하세요." },
            { icon: "🏥", en: "Sort Medicare and private health", ja: "Medicareと民間医療保険を整える", zh: "办理Medicare和私人医疗保险", ko: "Medicare 및 민간 보험 정리", descEn: "If you're on a reciprocal visa (UK, NZ, some EU), Medicare covers you. Everyone else needs private cover from day one — it's not optional. Compare at iSelect or choose a fund directly.",
            descJa: "\u76f8\u4e92\u5354\u5b9a\u306e\u30d3\u30b6\uff08\u82f1\u56fd\u3001NZ\u3001\u4e00\u90e8\u306eEU\uff09\u306a\u3089Medicare\u304c\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u305d\u308c\u4ee5\u5916\u306e\u4eba\u306f\u521d\u65e5\u304b\u3089\u6c11\u9593\u4fdd\u967a\u304c\u5fc5\u8981\u3067\u3059 \u2014 \u4efb\u610f\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002iSelect\u3067\u6bd4\u8f03\u3059\u308b\u304b\u3001\u30d5\u30a1\u30f3\u30c9\u3092\u76f4\u63a5\u9078\u3073\u307e\u3057\u3087\u3046\u3002",
            descZh: "\u5982\u679c\u4f60\u6301\u4e92\u60e0\u7b7e\u8bc1\uff08\u82f1\u56fd\u3001\u65b0\u897f\u5170\u3001\u90e8\u5206\u6b27\u76df\u56fd\u5bb6\uff09\uff0cMedicare \u4f1a\u8986\u76d6\u4f60\u3002\u5176\u4ed6\u6240\u6709\u4eba\u90fd\u5fc5\u987b\u4ece\u7b2c\u4e00\u5929\u8d77\u8d2d\u4e70\u79c1\u4eba\u4fdd\u9669\u2014\u2014\u8fd9\u4e0d\u662f\u53ef\u9009\u9879\u3002\u53ef\u4ee5\u5728 iSelect \u4e0a\u6bd4\u8f83\uff0c\u6216\u76f4\u63a5\u9009\u4e00\u5bb6\u4fdd\u9669\u57fa\u91d1\u3002", descKo: "상호주의 비자(영국, 뉴질랜드, 일부 EU)라면 Medicare 적용. 그 외는 첫날부터 민간 보험 필수 — 선택이 아닙니다. iSelect에서 비교하거나 펀드를 직접 선택하세요." },
            { icon: "🔗", en: "Link MyGov to ATO and Services Australia", ja: "MyGovをATOとServices Australiaに連携", zh: "将MyGov关联ATO和Services Australia", ko: "MyGov에 ATO/Services Australia 연동", descEn: "MyGov is the single sign-on for tax, Medicare, Centrelink and more. Set it up once in your first month with two forms of ID — saves you hours later when you actually need it.",
            descJa: "MyGov\u306f\u3001\u7a0e\u91d1\u3001Medicare\u3001Centrelink\u306a\u3069\u3092\u307e\u3068\u3081\u3066\u4f7f\u3048\u308b\u5171\u901a\u30ed\u30b0\u30a4\u30f3\u3067\u3059\u3002\u6700\u521d\u306e1\u304b\u6708\u306b\u8eab\u5206\u8a3c\u660e\u66f8\u30922\u70b9\u4f7f\u3063\u3066\u4e00\u5ea6\u8a2d\u5b9a\u3057\u3066\u304a\u3051\u3070\u3001\u672c\u5f53\u306b\u5fc5\u8981\u306b\u306a\u3063\u305f\u3068\u304d\u306b\u4f55\u6642\u9593\u3082\u7bc0\u7d04\u3067\u304d\u307e\u3059\u3002",
            descZh: "MyGov \u662f\u7a0e\u52a1\u3001Medicare\u3001Centrelink \u7b49\u7684\u7edf\u4e00\u767b\u5f55\u5165\u53e3\u3002\u7b2c\u4e00\u4e2a\u6708\u5185\u7528\u4e24\u79cd\u8eab\u4efd\u8bc1\u660e\u6ce8\u518c\u4e00\u6b21\u2014\u2014\u65e5\u540e\u771f\u6b63\u9700\u8981\u65f6\u80fd\u7701\u4e0b\u597d\u51e0\u4e2a\u5c0f\u65f6\u3002", descKo: "MyGov는 세금, Medicare, Centrelink 등을 위한 통합 로그인입니다. 첫 달 안에 신분증 두 개로 한 번 설정해두세요 — 나중에 진짜 필요할 때 시간을 크게 절약합니다." },
          ].map((item, i) => (
            <li key={item.en} className={`reveal reveal-delay-${(i % 5) + 1} flex gap-4 group`}>
              <span className="shrink-0 w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <div className="flex-1 min-w-0">
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
                {item.href && (
                  <Link
                    href={item.href}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
                  >
                    <Ja>{item.hrefLabelJa}</Ja>
                    <Zh>{item.hrefLabelZh}</Zh>
                    <Ko>{item.hrefLabelKo}</Ko>
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* The mistakes that cost real money */}
      <section className="mb-10 bg-stone-900 dark:bg-dark-surface rounded-3xl p-7 md:p-9 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-400 mb-3">
            <En translated>Pro tip</En>
            <Ja>豆知識</Ja>
            <Zh>小贴士</Zh>
            <Ko>꿀팁</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
            <En translated>The three mistakes that cost real money.</En>
            <Ja>本当にお金がかかる3つの失敗。</Ja>
            <Zh>会让你真金白银受损的三个错误。</Zh>
            <Ko>진짜 돈이 드는 세 가지 실수.</Ko>
          </h2>
          <ul className="space-y-3 text-white/80 text-sm md:text-base leading-relaxed">
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">01</span>
              <span>
                <En translated><strong className="text-white">Not applying for TFN.</strong> You&apos;ll lose 30–40% of your pay to emergency tax until you do.</En>
                <Ja><strong className="text-white">TFN を申請しない。</strong>申請するまで、給与の 30–40% が緊急税率で引かれます。</Ja>
                <Zh><strong className="text-white">不申请 TFN。</strong>在申请之前，你的工资会有 30–40% 被按紧急税率扣除。</Zh>
                <Ko><strong className="text-white">TFN 미신청.</strong> 신청할 때까지 급여의 30–40%가 긴급 세율로 차감됩니다.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">02</span>
              <span>
                <En translated><strong className="text-white">Using your home-bank card.</strong> Foreign transaction fees stack up fast. Get a bank account first, then a debit card with no international fees.</En>
                <Ja><strong className="text-white">母国の銀行カードを使う。</strong>海外取引手数料はあっという間に積み上がります。まず銀行口座を開設し、それから海外手数料のないデビットカードを作りましょう。</Ja>
                <Zh><strong className="text-white">使用本国银行卡。</strong>境外交易手续费会迅速累积。先开一个银行账户，再办一张没有国际手续费的借记卡。</Zh>
                <Ko><strong className="text-white">한국 카드로 결제.</strong> 해외 결제 수수료가 빠르게 누적됩니다. 먼저 호주 은행 계좌를 개설하고, 해외 수수료 없는 체크카드를 받으세요.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">03</span>
              <span>
                <En translated><strong className="text-white">Renting the first thing you see.</strong> Domain and Realestate are your friends. Inspect 3–5 places before signing. Photos lie.</En>
                <Ja><strong className="text-white">最初に見た物件をすぐ借りる。</strong>Domain と Realestate を活用しましょう。契約前に 3–5 件は内見してください。写真は嘘をつきます。</Ja>
                <Zh><strong className="text-white">看到第一套就租下。</strong>Domain 和 Realestate 是你的好帮手。签约前先看 3–5 套房子。照片会骗人。</Zh>
                <Ko><strong className="text-white">본 즉시 계약.</strong> Domain과 Realestate를 활용하세요. 서명 전에 3–5곳을 직접 봅니다. 사진은 거짓말을 합니다.</Ko>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* After this guide — what you'll walk away with. Symmetric to
          "Start here" at the top: shows the reader the concrete things
          they'll have set up, so the page doesn't end on a vague "good
          luck". Uses the same emerald-themed card style. */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-600 mb-5">
          <En translated>After this guide</En>
          <Ja>このガイドの後は</Ja>
          <Zh>读完这份指南后</Zh>
          <Ko>이 가이드를 마치면</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
          {[
            {
              icon: "📱",
              en: "SIM, bank, Opal — done", ja: "SIM、銀行、Opal — 完了", zh: "SIM卡、银行、Opal卡——完成",
              ko: "SIM, 은행, 오팔 — 완료",
              blurbEn: "The three unblockers set up. Your phone works, your employer can pay you, you can get around Sydney.",
              blurbJa: "\u4e09\u3064\u306e\u5fc5\u9808\u6e96\u5099\u306f\u5b8c\u4e86\u3002\u96fb\u8a71\u304c\u4f7f\u3048\u3001\u96c7\u7528\u4e3b\u304c\u7d66\u4e0e\u3092\u652f\u6255\u3048\u3001\u30b7\u30c9\u30cb\u30fc\u3092\u79fb\u52d5\u3067\u304d\u307e\u3059\u3002",
              blurbZh: "\u4e09\u4ef6\u5fc5\u9700\u7684\u4e8b\u90fd\u529e\u597d\u4e86\u3002\u624b\u673a\u80fd\u7528\u4e86\uff0c\u96c7\u4e3b\u80fd\u7ed9\u4f60\u53d1\u5de5\u8d44\u4e86\uff0c\u4f60\u4e5f\u80fd\u5728\u6089\u5c3c\u81ea\u7531\u51fa\u884c\u4e86\u3002",
              blurbKo: "세 가지 필수 준비 완료. 통화가 되고, 고용주가 급여를 입금할 수 있으며, 시드니 어디든 이동할 수 있습니다.",
            },
            {
              icon: "📋",
              en: "TFN applied for", ja: "TFN申請済み", zh: "TFN已申请",
              ko: "TFN 신청 완료",
              blurbEn: "No emergency tax on your first pay. The 30–40% hit is the most common newcomer mistake — you've avoided it.",
              blurbJa: "\u521d\u56de\u306e\u7d66\u4e0e\u306b\u7dca\u6025\u7a0e\u7387\u306f\u304b\u304b\u308a\u307e\u305b\u3093\u300230\u301c40%\u306e\u5dee\u3057\u5f15\u304d\u306f\u65b0\u5165\u8005\u306b\u6700\u3082\u591a\u3044\u5931\u6557 \u2014 \u305d\u308c\u3092\u907f\u3051\u3089\u308c\u307e\u3057\u305f\u3002",
              blurbZh: "\u7b2c\u4e00\u7b14\u5de5\u8d44\u4e0d\u4f1a\u88ab\u6309\u7d27\u6025\u7a0e\u7387\u6263\u7a0e\u300230\u201340% \u7684\u635f\u5931\u662f\u65b0\u6765\u8005\u6700\u5e38\u72af\u7684\u9519\u8bef\u2014\u2014\u4f60\u5df2\u7ecf\u907f\u5f00\u4e86\u3002",
              blurbKo: "첫 월급부터 긴급 세율 적용 없음. 30–40% 차감은 신참이 가장 자주 하는 실수 — 피하게 됩니다.",
            },
            {
              icon: "🏥",
              en: "Health sorted", ja: "医療の手続き完了", zh: "医疗已办妥",
              ko: "의료 정리",
              blurbEn: "Medicare or private cover in place. You can sort a GP when you actually need one — most people wait until they're sick, and that's fine too.",
              blurbJa: "Medicare\u307e\u305f\u306f\u6c11\u9593\u4fdd\u967a\u3092\u78ba\u4fdd\u6e08\u307f\u3002GP\u306f\u672c\u5f53\u306b\u5fc5\u8981\u306b\u306a\u3063\u305f\u3068\u304d\u306b\u624b\u914d\u3059\u308c\u3070\u5341\u5206 \u2014 \u591a\u304f\u306e\u4eba\u306f\u75c5\u6c17\u306b\u306a\u308b\u307e\u3067\u5f85\u3061\u307e\u3059\u304c\u3001\u305d\u308c\u3082\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002",
              blurbZh: "Medicare \u6216\u79c1\u4eba\u4fdd\u9669\u5df2\u529e\u59a5\u3002\u4f60\u53ef\u4ee5\u7b49\u771f\u6b63\u9700\u8981\u65f6\u518d\u627e\u5168\u79d1\u533b\u751f\uff08GP\uff09\u2014\u2014\u5927\u591a\u6570\u4eba\u90fd\u7b49\u5230\u751f\u75c5\u624d\u53bb\uff0c\u8fd9\u4e5f\u6ca1\u95ee\u9898\u3002",
              blurbKo: "Medicare 또는 민간 보험 정리. GP는 진짜 필요할 때 등록해도 됩니다 — 대부분은 아플 때까지 기다리고, 그것도 괜찮습니다.",
            },
            {
              icon: "🔗",
              en: "MyGov linked and ready", ja: "MyGov連携完了", zh: "MyGov已关联并可使用",
              ko: "MyGov 연동 완료",
              blurbEn: "ATO, Medicare, Centrelink reachable from one login. Tax time becomes a one-click task, not a panic.",
              blurbJa: "ATO\u3001Medicare\u3001Centrelink\u306b\u4e00\u5ea6\u306e\u30ed\u30b0\u30a4\u30f3\u3067\u30a2\u30af\u30bb\u30b9\u3002\u78ba\u5b9a\u7533\u544a\u306f\u30d1\u30cb\u30c3\u30af\u3067\u306f\u306a\u304f\u30ef\u30f3\u30af\u30ea\u30c3\u30af\u306e\u4f5c\u696d\u306b\u306a\u308a\u307e\u3059\u3002",
              blurbZh: "\u7528\u4e00\u4e2a\u8d26\u53f7\u5c31\u80fd\u767b\u5f55 ATO\u3001Medicare\u3001Centrelink\u3002\u62a5\u7a0e\u5b63\u53d8\u6210\u4e00\u952e\u64cd\u4f5c\uff0c\u800c\u4e0d\u662f\u4e00\u573a\u614c\u4e71\u3002",
              blurbKo: "ATO, Medicare, Centrelink을 한 번의 로그인으로. 연말 세금 신고가 패닉이 아니라 원 클릭 작업이 됩니다.",
            },
          ].map((w, i) => (
            <div
              key={w.en}
              className={`reveal reveal-delay-${(i % 5) + 1} p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20 border border-emerald-100/50 dark:border-emerald-900/30`}
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

      {/* Scammers target new arrivals — common scams and how to spot them.
          Same dark-callout pattern as the other "honest take" blocks,
          with emerald accent. Added per Michael — biggest gap in the
          original visited-arrived funnel. */}
      <section className="mb-10 bg-stone-900 dark:bg-dark-surface rounded-3xl p-7 md:p-9 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-400 mb-3">
            <En translated>Heads up</En>
            <Ja>ご注意</Ja>
            <Zh>提个醒</Zh>
            <Ko>주의사항</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
            <En translated>Scammers target new arrivals.</En>
            <Ja>詐欺師は新しく来た人を狙います。</Ja>
            <Zh>骗子专挑新来的人下手。</Zh>
            <Ko>사기꾼들은 신참을 노립니다.</Ko>
          </h2>
          <ul className="space-y-3 text-white/80 text-sm md:text-base leading-relaxed">
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">01</span>
              <span>
                <En translated><strong className="text-white">Fake job offers.</strong> &quot;You&apos;re hired, just send $200 AUD for the training kit.&quot; Real employers never ask for upfront fees. If they did, that&apos;s the scam.</En>
                <Ja><strong className="text-white">偽の求人。</strong>&quot;採用です。研修キット代として $200 AUD を送ってください。&quot; 本当の雇用主は前払い費用を求めません。求めてきたら、それが詐欺です。</Ja>
                <Zh><strong className="text-white">虚假工作机会。</strong>&quot;你被录用了，只需支付 200 澳元购买培训套件。&quot;真正的雇主绝不会要求预付费用。如果对方提了，那就是骗局。</Zh>
                <Ko><strong className="text-white">가짜 채용.</strong> &quot;채용되셨습니다, 교육 키트 비용 $200 AUD만 보내주세요.&quot; 실제 고용주는 선불 비용을 요구하지 않습니다. 요구한다면 그것이 사기입니다.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">02</span>
              <span>
                <En translated><strong className="text-white">Rental scams.</strong> Overseas landlord, can&apos;t show you the place, asks for a deposit via bank transfer. Real landlords don&apos;t take deposits sight-unseen.</En>
                <Ja><strong className="text-white">賃貸詐欺。</strong>海外にいる大家が物件を見せられないと言い、銀行振込で保証金を要求します。本物の大家は未見のまま保証金を受け取りません。</Ja>
                <Zh><strong className="text-white">租房骗局。</strong>房东人在海外，无法带你看房，却要求通过银行转账支付押金。真正的房东不会在没看房的情况下收押金。</Zh>
                <Ko><strong className="text-white">임대 사기.</strong> 해외에 있는 집주인이 직접 보여줄 수 없다며 계좌이체로 보증금을 요청합니다. 진짜 집주인은 보여주지 않은 채로 보증금을 받지 않습니다.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">03</span>
              <span>
                <En translated><strong className="text-white">ATO / MyGov phishing.</strong> &quot;You owe $2,847 AUD in tax, click here to pay.&quot; ATO and MyGov never email or text asking for payment. Go directly to the site, never via the link.</En>
                <Ja><strong className="text-white">ATO / MyGov フィッシング。</strong>&quot;税金 $2,847 AUD の未納があります。ここをクリックして支払ってください。&quot; ATO と MyGov が支払いを求めるメールや SMS を送ることはありません。リンク経由ではなく、必ず直接サイトにアクセスしてください。</Ja>
                <Zh><strong className="text-white">ATO / MyGov 钓鱼诈骗。</strong>&quot;你欠税 2,847 澳元，点击这里付款。&quot;ATO 和 MyGov 绝不会发邮件或短信要求付款。请直接访问官网，千万不要点链接。</Zh>
                <Ko><strong className="text-white">ATO / MyGov 피싱.</strong> &quot;세금 $2,847 AUD 미납, 여기를 클릭해 결제하세요.&quot; ATO와 MyGov는 결제를 요청하는 이메일이나 문자를 보내지 않습니다. 링크를 통하지 말고 직접 사이트에 접속하세요.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">04</span>
              <span>
                <En translated><strong className="text-white">&quot;Korean community&quot; crypto groups.</strong> Get-rich-quick WeChat / KakaoTalk groups targeting Korean-Aussies. If it sounds too good to be true, it is.</En>
                <Ja><strong className="text-white">&quot;韓国コミュニティ&quot;の仮想通貨グループ。</strong>韓国系オーストラリア人を狙う一獲千金の WeChat / KakaoTalk グループ。話がうますぎるなら、それは詐欺です。</Ja>
                <Zh><strong className="text-white">&quot;韩国社区&quot;加密货币群组。</strong>针对韩裔澳大利亚人的一夜暴富 WeChat / KakaoTalk 群组。听起来好得不真实，那它就不是真的。</Zh>
                <Ko><strong className="text-white">&quot;한인 커뮤니티&quot; 코인 그룹.</strong> 한인 호주를 노리는 빠르게 부자되기 WeChat / KakaoTalk 그룹. 너무 좋아 보이면 사기입니다.</Ko>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* What travel guides don't tell you — honest take on first-week
          realities. Same dark-callout pattern as HomeContent's "Honest
          take" block, with emerald accent. */}
      <section className="mb-10 bg-stone-900 dark:bg-dark-surface rounded-3xl p-7 md:p-9 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-400 mb-3">
            <En translated>Honest take</En>
            <Ja>正直なところ</Ja>
            <Zh>实话实说</Zh>
            <Ko>솔직한 이야기</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
            <En translated>What travel guides don&apos;t tell you.</En>
            <Ja>旅行ガイドが教えてくれないこと。</Ja>
            <Zh>旅行指南不会告诉你的事。</Zh>
            <Ko>여행 가이드에는 없는 이야기.</Ko>
          </h2>
          <ul className="space-y-3 text-white/80 text-sm md:text-base leading-relaxed">
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">01</span>
              <span>
                <En translated><strong className="text-white">It&apos;s more expensive than you think.</strong> Coffee $5 AUD, casual lunch $20 AUD, dinner $40+ AUD per person, a pint of beer $12 AUD. A couple&apos;s weekly food budget is realistically $500–$700 AUD. Budget more than the guidebooks say.</En>
                <Ja><strong className="text-white">思っているより物価が高いです。</strong>コーヒー $5 AUD、カジュアルなランチ $20 AUD、夕食は一人 $40+ AUD、ビールのパイント $12 AUD。カップルの週の食費は現実的に $500–$700 AUD です。ガイドブックに書かれているより多めに予算を組みましょう。</Ja>
                <Zh><strong className="text-white">物价比你想象的贵。</strong>咖啡 5 澳元、简餐午餐 20 澳元、晚餐每人 40+ 澳元、一品脱啤酒 12 澳元。一对情侣每周的伙食费实际上要 500–700 澳元。预算要比旅行指南写的高一些。</Zh>
                <Ko><strong className="text-white">생각보다 비쌉니다.</strong> 커피 $5 AUD, 캐주얼 점심 $20 AUD, 1인당 저녁 $40+ AUD, 맥주 한 파인트 $12 AUD. 커플의 주간 식비 현실은 $500–$700 AUD. 가이드북보다 더 여유 있게 잡으세요.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">02</span>
              <span>
                <En translated><strong className="text-white">Public transport stops at midnight.</strong> Trains, buses, ferries all wind down around 12am. Plan a taxi or Uber for the way home after a night out — or you will be walking.</En>
                <Ja><strong className="text-white">公共交通は深夜に止まります。</strong>電車、バス、フェリーはいずれも 0 時前後に運行を終えます。夜遊びのあとの帰りはタクシーか Uber を計画しておきましょう — さもないと歩いて帰ることになります。</Ja>
                <Zh><strong className="text-white">公共交通午夜停运。</strong>火车、公交车、渡轮都在凌晨 12 点左右收班。夜里出门后回家的路要提前安排出租车或 Uber — 否则你只能走回去。</Zh>
                <Ko><strong className="text-white">대중교통은 자정 전후로 끊깁니다.</strong> 기차, 버스, 페리 모두 자정 무렵에 운행 종료. 밤에 외출 시 귀가 taxi나 Uber를 미리 계획하세요 — 아니면 걸어가야 합니다.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">03</span>
              <span>
                <En translated><strong className="text-white">Wildlife is loud and weird.</strong> Possums fight on your roof at 3am. Cockatoos scream at dawn. Magpies dive-bomb in spring. It is not a horror movie — it is just Australia.</En>
                <Ja><strong className="text-white">野生動物は騒がしくて不思議です。</strong>ポッサムは午前 3 時に屋根の上で喧嘩します。オウムは夜明けに金切り声を上げます。春にはカササギが急降下してきます。ホラー映画ではなく、ただのオーストラリアです。</Ja>
                <Zh><strong className="text-white">野生动物又吵又怪。</strong>负鼠会在凌晨 3 点在你的屋顶上打架。凤头鹦鹉在黎明时尖叫。春天喜鹊会俯冲袭击。这不是恐怖片 — 这就是澳大利亚。</Zh>
                <Ko><strong className="text-white">야생동물은 시끄럽고 특이합니다.</strong> 주머니쥐가 새벽 3시에 지붕 위에서 싸웁니다. 앵무새가 동에 소리를 지릅니다. 봄에는 까치가 급습합니다. 공포영화가 아니라 그냥 호주입니다.</Ko>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Keep reading */}
      <section>
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-600 mb-5">
          <En translated>Guides for your first month</En>
          <Ja>最初の1か月のためのガイド</Ja>
          <Zh>为你第一个月准备的指南</Zh>
          <Ko>첫 달을 위한 가이드</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          <Link href="/workplace" className="reveal reveal-delay-1 group p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20 border border-emerald-100/50 dark:border-emerald-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">💼 <En translated>Workplace</En><Ja>職場</Ja><Zh>职场</Zh><Ko>직장</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En translated>Resumes, interviews, Award wages, your rights</En>
              <Ja>履歴書、面接、Award 賃金、あなたの権利</Ja>
              <Zh>简历、面试、Award 工资标准、你的权利</Zh>
              <Ko>이력서, 면접, 임금등급, 노동자 권리</Ko>
            </div>
          </Link>
          <Link href="/apartment" className="reveal reveal-delay-2 group p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20 border border-amber-100/50 dark:border-amber-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">🏠 <En translated>Apartment</En><Ja>賃貸</Ja><Zh>租房</Zh><Ko>부동산</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En translated>Leases, bonds, flatmates, where to look</En>
              <Ja>賃貸契約、ボンド（保証金）、ルームメイト、探し方</Ja>
              <Zh>租约、押金（bond）、合租室友、去哪里找房源</Zh>
              <Ko>임대 계약, 보증금, 쉐어하우스, 검색처</Ko>
            </div>
          </Link>
          <Link href="/finance" className="reveal reveal-delay-3 group p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100/50 dark:from-sky-950/30 dark:to-sky-900/20 border border-sky-100/50 dark:border-sky-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">💰 <En translated>Finance</En><Ja>金融</Ja><Zh>金融</Zh><Ko>금융</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En translated>Banking, TFN, super — the boring essentials</En>
              <Ja>銀行、TFN、super（スーパー）— 退屈だけど必須の基本</Ja>
              <Zh>银行、TFN、养老金（super）— 枯燥但必需的基础</Zh>
              <Ko>은행, TFN, 퇴직연금 — 필수 기본기</Ko>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

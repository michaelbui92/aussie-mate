import Link from "next/link";
import { En, Ko } from "../LangBlocks";

export default function ArrivedContent() {
  return (
    <>
      {/* Intro — warm framing before the practical list. "You made it"
          and "don't try to do everything at once" sets the right tone
          for a first-week checklist. */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-600 mb-3">
          <En>First month</En>
          <Ko>첫 한 달</Ko>
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4 leading-tight">
          <En>You made it. Take a breath — then read this.</En>
          <Ko>도착하셨네요. 한숨 돌리시고 — 천천히 읽어보세요.</Ko>
        </h3>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>
            The first few weeks in Australia are overwhelming — new city,
            new systems, new accents, all at once. Don&apos;t try to do
            everything. Here&apos;s the order that actually matters, written
            by someone who fumbled most of it the first time. Living in a
            new place can be daunting, but you&apos;ll be fine.
          </En>
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
              <En>Watch out</En>
              <Ko>주의</Ko>
            </p>
            <h4 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-stone-100 mb-3 leading-tight">
              <En>Scammers target new arrivals.</En>
              <Ko>사기꾼들은 신참을 노립니다.</Ko>
            </h4>
            <ul className="space-y-2.5 text-sm md:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-amber-700 dark:text-amber-400 font-mono shrink-0">01</span>
                <span>
                  <En><strong className="text-stone-900 dark:text-stone-100">Fake job ads.</strong> Anyone asking for payment to "process" your application is a scam. Real employers never ask for money upfront.</En>
                  <Ko><strong className="text-stone-900 dark:text-stone-100">가짜 구인 광고.</strong> "처리 수수료"를 요구하면 사기. 진짜 고용주는 upfront 결제를 요구하지 않습니다.</Ko>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700 dark:text-amber-400 font-mono shrink-0">02</span>
                <span>
                  <En><strong className="text-stone-900 dark:text-stone-100">Rental scams.</strong> Never send a deposit on a property you haven&apos;t inspected in person. Photos and addresses can be stolen from other listings.</En>
                  <Ko><strong className="text-stone-900 dark:text-stone-100">부동산 사기.</strong> 직접 보지 않은 집의 보증금을 보내지 마세요. 사진과 주소는 다른 매물에서 훔쳐올 수 있습니다.</Ko>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-700 dark:text-amber-400 font-mono shrink-0">03</span>
                <span>
                  <En><strong className="text-stone-900 dark:text-stone-100">ATO &amp; immigration impersonation.</strong> The ATO never asks for payment via gift cards, wire transfer, or cryptocurrency. Real calls end with "you can verify at ato.gov.au" — not urgency.</En>
                  <Ko><strong className="text-stone-900 dark:text-stone-100">ATO·이민사 사칭.</strong> ATO는 gift card, 해외송금, 암호화폐로 결제를 요구하지 않습니다. 진짜 전화는 "ato.gov.au에서 확인하세요"로 끝납니다 — 조급함으로 끝나지 않습니다.</Ko>
                </span>
              </li>
            </ul>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-4">
              <En>If something feels off, report it to <a href="https://www.scamwatch.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-700 dark:hover:text-amber-300">ScamWatch</a>. You won&apos;t be the first to report it.</En>
              <Ko>뭔가 이상하다면 <a href="https://www.scamwatch.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-700 dark:hover:text-amber-300">ScamWatch</a>에 신고하세요. 당신이 첫 번째가 아닙니다.</Ko>
            </p>
          </div>
        </div>
      </section>

      {/* Start here — three things worth doing before the long list. */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-600 mb-5">
          <En>Start here</En>
          <Ko>먼저 이것부터</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
          {[
            {
              icon: "📱",
              en: "Get your Australian number",
              ko: "호주 전화번호 받기",
              blurbEn: "Woolworths, Coles, or any 7-Eleven sets you up in 10 minutes with your passport. eSIM works too if you bought one before you flew.",
              blurbKo: "Woolworths, Coles, 7-Eleven 어느 곳이든 여권으로 10분이면 개통됩니다. 출발 전 eSIM을 사왔다면 그것도 됩니다.",
            },
            {
              icon: "🏦",
              en: "Visit your bank",
              ko: "은행 방문",
              blurbEn: "Open an Australian account online with a passport — about 20 minutes. Your employer needs an Australian account to pay you. Skip the branch queues.",
              blurbKo: "여권으로 온라인 개설 — 약 20분. 고용주가 급여를 입금하려면 호주 계좌가 필요합니다. 지점 줄을 서지 마세요.",
            },
            {
              icon: "🏠",
              en: "Find a permanent place to live",
              ko: "정착할 집 구하기",
              blurbEn: "Flatmates.com.au is where most newcomers find their first share house. Naver and Hojunara are the Korean-community listings channels. Inspect 3–5 places before signing. Photos lie. Most newcomers spend 2–4 weeks house hunting before settling.",
              blurbKo: "대부분의 신참은 flatmates.com.au에서 첫 쉐어하우스를 구합니다. 네이버 부동산과 호주나라는 한인 커뮤니티 매물 채널입니다. 서명 전에 3-5곳을 직접 봅니다. 사진은 거짓말을 합니다. 대부분 2-4주 집을 보고 정착합니다.",
              href: "/transport",
              hrefLabelEn: "Once you've picked a suburb — see how to get around →",
              hrefLabelKo: "동네를 정했다면 — 시드니 이동 방법은 여기 →",
            },
            {
              icon: "📋",
              en: "Apply for a TFN",
              ko: "TFN 신청",
              blurbEn: "Free from ato.gov.au. Without it your employer withholds tax at the emergency rate — you lose 30–40% of your take-home pay until you do.",
              blurbKo: "ato.gov.au에서 무료 신청. 신청하지 않으면 고용주가 긴급 세율로 원천징수 — 신청할 때까지 실수령액의 30–40%를 잃습니다.",
            },
          ].map((w, i) => (
            <div
              key={w.en}
              className={`reveal reveal-delay-${i + 1} p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20 border border-emerald-100/50 dark:border-emerald-900/30 flex flex-col`}
            >
              <div className="text-2xl mb-2">{w.icon}</div>
              <h4 className="font-serif text-base md:text-lg text-stone-900 dark:text-stone-100 mb-1.5 leading-snug">
                <En>{w.en}</En>
                <Ko>{w.ko}</Ko>
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed">
                <En>{w.blurbEn}</En>
                <Ko>{w.blurbKo}</Ko>
              </p>
              {w.href && (
                <Link
                  href={w.href}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
                >
                  <En>{w.hrefLabelEn}</En>
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
          <En>Week 1 checklist</En>
          <Ko>첫 주 체크리스트</Ko>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-3xl">
          {[
            { en: "Phone active", ko: "전화 개통" },
            { en: "Bank account open", ko: "은행 계좌" },
            { en: "Permanent place secured", ko: "정착할 집 확보" },
            { en: "TFN applied for", ko: "TFN 신청" },
          ].map((step, i) => (
            <div
              key={step.en}
              className={`reveal reveal-delay-${i + 1} flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border`}
            >
              <span className="shrink-0 w-6 h-6 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                ✓
              </span>
              <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                <En>{step.en}</En>
                <Ko>{step.ko}</Ko>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* The order that matters */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-600 mb-5">
          <En>The order that actually matters</En>
          <Ko>실제로 중요한 순서</Ko>
        </p>
        <ul className="space-y-4 max-w-3xl">
          {[
            { icon: "📱", en: "Get a SIM card on day one", ko: "첫날 SIM 카드 구매", descEn: "You can't navigate, message, or call anyone without a phone. Woolworths, Coles, or any 7-Eleven will set you up. Bring your passport. Cost: $10–$30 AUD for a prepaid starter. Telstra has the best coverage.", descKo: "스마트폰 없이는 길 찾기, 메시지, 전화가 모두 불가합니다. Woolworths, Coles, 7-Eleven에서 모두 가능합니다. 여권을 지참하세요. 선불 스타터 비용: $10–$30 AUD. Telstra가 가장 넓은 커버리지." },
            { icon: "💳", en: "Open a bank account within the week", ko: "일주일 안에 은행 계좌 개설", descEn: "Commonwealth, ANZ, Westpac, NAB all let you open online with a passport — about 20 minutes. Your employer needs an Australian account to pay you. Skip the queues.", descKo: "Commonwealth, ANZ, Westpac, NAB 모두 여권으로 온라인 개설 가능 — 약 20분. 고용주가 월급을 입금하려면 호주 계좌가 필요합니다. 줄 서지 마세요.", href: "/finance", hrefLabelEn: "Banking in Australia →", hrefLabelKo: "호주 은행 계좌 가이드 →" },
            { icon: "🚆", en: "Get an Opal card before you ride", ko: "탑승 전 오팔 카드 준비", descEn: "Sydney's public transport runs on Opal — trains, buses, ferries, light rail. Grab one at any train station or convenience store. Tap on, tap off. No card, no ride.", descKo: "시드니 대중교통은 오팔로 운영 — 기차, 버스, 페리, 경전철. 기차역이나 편의점에서 구매하세요. 탭 온, 탭 오프. 카드 없이는 탑승 불가.", href: "/transport", hrefLabelEn: "How to get and use Opal →", hrefLabelKo: "오팔 얻고 사용하기 →" },
            { icon: "📋", en: "Apply for your TFN (tax number)", ko: "TFN(세금번호) 신청", descEn: "Free from ato.gov.au. Without it, your employer withholds tax at the emergency rate — which means a lot less take-home pay. Do it in your first week if you're job hunting.", descKo: "ato.gov.au에서 무료 신청. 없으면 고용주가 긴급 세율로 원천징수 — 실수령액이 크게 줄어듭니다. 구직 중이라면 첫 주에 신청하세요." },
            { icon: "🏥", en: "Sort Medicare and private health", ko: "Medicare 및 민간 보험 정리", descEn: "If you're on a reciprocal visa (UK, NZ, some EU), Medicare covers you. Everyone else needs private cover from day one — it's not optional. Compare at iSelect or choose a fund directly.", descKo: "상호주의 비자(영국, 뉴질랜드, 일부 EU)라면 Medicare 적용. 그 외는 첫날부터 민간 보험 필수 — 선택이 아닙니다. iSelect에서 비교하거나 펀드를 직접 선택하세요." },
            { icon: "🔗", en: "Link MyGov to ATO and Services Australia", ko: "MyGov에 ATO/Services Australia 연동", descEn: "MyGov is the single sign-on for tax, Medicare, Centrelink and more. Set it up once in your first month with two forms of ID — saves you hours later when you actually need it.", descKo: "MyGov는 세금, Medicare, Centrelink 등을 위한 통합 로그인입니다. 첫 달 안에 신분증 두 개로 한 번 설정해두세요 — 나중에 진짜 필요할 때 시간을 크게 절약합니다." },
          ].map((item, i) => (
            <li key={item.en} className={`reveal reveal-delay-${(i % 5) + 1} flex gap-4 group`}>
              <span className="shrink-0 w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-lg md:text-xl text-stone-900 dark:text-stone-100 mb-1">
                  <En>{item.en}</En>
                  <Ko>{item.ko}</Ko>
                </h4>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  <En>{item.descEn}</En>
                  <Ko>{item.descKo}</Ko>
                </p>
                {item.href && (
                  <Link
                    href={item.href}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
                  >
                    <En>{item.hrefLabelEn}</En>
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
            <En>Pro tip</En>
            <Ko>꿀팁</Ko>
          </p>
          <h4 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
            <En>The three mistakes that cost real money.</En>
            <Ko>진짜 돈이 드는 세 가지 실수.</Ko>
          </h4>
          <ul className="space-y-3 text-white/80 text-sm md:text-base leading-relaxed">
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">01</span>
              <span>
                <En><strong className="text-white">Not applying for TFN.</strong> You&apos;ll lose 30–40% of your pay to emergency tax until you do.</En>
                <Ko><strong className="text-white">TFN 미신청.</strong> 신청할 때까지 급여의 30–40%가 긴급 세율로 차감됩니다.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">02</span>
              <span>
                <En><strong className="text-white">Using your home-bank card.</strong> Foreign transaction fees stack up fast. Get a bank account first, then a debit card with no international fees.</En>
                <Ko><strong className="text-white">한국 카드로 결제.</strong> 해외 결제 수수료가 빠르게 누적됩니다. 먼저 호주 은행 계좌를 개설하고, 해외 수수료 없는 체크카드를 받으세요.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">03</span>
              <span>
                <En><strong className="text-white">Renting the first thing you see.</strong> Domain and Realestate are your friends. Inspect 3–5 places before signing. Photos lie.</En>
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
          <En>After this guide</En>
          <Ko>이 가이드를 마치면</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
          {[
            {
              icon: "📱",
              en: "SIM, bank, Opal — done",
              ko: "SIM, 은행, 오팔 — 완료",
              blurbEn: "The three unblockers set up. Your phone works, your employer can pay you, you can get around Sydney.",
              blurbKo: "세 가지 필수 준비 완료. 통화가 되고, 고용주가 급여를 입금할 수 있으며, 시드니 어디든 이동할 수 있습니다.",
            },
            {
              icon: "📋",
              en: "TFN applied for",
              ko: "TFN 신청 완료",
              blurbEn: "No emergency tax on your first pay. The 30–40% hit is the most common newcomer mistake — you've avoided it.",
              blurbKo: "첫 월급부터 긴급 세율 적용 없음. 30–40% 차감은 신참이 가장 자주 하는 실수 — 피하게 됩니다.",
            },
            {
              icon: "🏥",
              en: "Health sorted",
              ko: "의료 정리",
              blurbEn: "Medicare or private cover in place. You can sort a GP when you actually need one — most people wait until they're sick, and that's fine too.",
              blurbKo: "Medicare 또는 민간 보험 정리. GP는 진짜 필요할 때 등록해도 됩니다 — 대부분은 아플 때까지 기다리고, 그것도 괜찮습니다.",
            },
            {
              icon: "🔗",
              en: "MyGov linked and ready",
              ko: "MyGov 연동 완료",
              blurbEn: "ATO, Medicare, Centrelink reachable from one login. Tax time becomes a one-click task, not a panic.",
              blurbKo: "ATO, Medicare, Centrelink을 한 번의 로그인으로. 연말 세금 신고가 패닉이 아니라 원 클릭 작업이 됩니다.",
            },
          ].map((w, i) => (
            <div
              key={w.en}
              className={`reveal reveal-delay-${(i % 5) + 1} p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20 border border-emerald-100/50 dark:border-emerald-900/30`}
            >
              <div className="text-2xl mb-2">{w.icon}</div>
              <h4 className="font-serif text-base md:text-lg text-stone-900 dark:text-stone-100 mb-1.5 leading-snug">
                <En>{w.en}</En>
                <Ko>{w.ko}</Ko>
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed">
                <En>{w.blurbEn}</En>
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
            <En>Heads up</En>
            <Ko>주의사항</Ko>
          </p>
          <h4 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
            <En>Scammers target new arrivals.</En>
            <Ko>사기꾼들은 신참을 노립니다.</Ko>
          </h4>
          <ul className="space-y-3 text-white/80 text-sm md:text-base leading-relaxed">
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">01</span>
              <span>
                <En><strong className="text-white">Fake job offers.</strong> &quot;You&apos;re hired, just send $200 AUD for the training kit.&quot; Real employers never ask for upfront fees. If they did, that&apos;s the scam.</En>
                <Ko><strong className="text-white">가짜 채용.</strong> &quot;채용되셨습니다, 교육 키트 비용 $200 AUD만 보내주세요.&quot; 실제 고용주는 선불 비용을 요구하지 않습니다. 요구한다면 그것이 사기입니다.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">02</span>
              <span>
                <En><strong className="text-white">Rental scams.</strong> Overseas landlord, can&apos;t show you the place, asks for a deposit via bank transfer. Real landlords don&apos;t take deposits sight-unseen.</En>
                <Ko><strong className="text-white">임대 사기.</strong> 해외에 있는 집주인이 직접 보여줄 수 없다며 계좌이체로 보증금을 요청합니다. 진짜 집주인은 보여주지 않은 채로 보증금을 받지 않습니다.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">03</span>
              <span>
                <En><strong className="text-white">ATO / MyGov phishing.</strong> &quot;You owe $2,847 AUD in tax, click here to pay.&quot; ATO and MyGov never email or text asking for payment. Go directly to the site, never via the link.</En>
                <Ko><strong className="text-white">ATO / MyGov 피싱.</strong> &quot;세금 $2,847 AUD 미납, 여기를 클릭해 결제하세요.&quot; ATO와 MyGov는 결제를 요청하는 이메일이나 문자를 보내지 않습니다. 링크를 통하지 말고 직접 사이트에 접속하세요.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">04</span>
              <span>
                <En><strong className="text-white">&quot;Korean community&quot; crypto groups.</strong> Get-rich-quick WeChat / KakaoTalk groups targeting Korean-Aussies. If it sounds too good to be true, it is.</En>
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
            <En>Honest take</En>
            <Ko>솔직한 이야기</Ko>
          </p>
          <h4 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
            <En>What travel guides don&apos;t tell you.</En>
            <Ko>여행 가이드에는 없는 이야기.</Ko>
          </h4>
          <ul className="space-y-3 text-white/80 text-sm md:text-base leading-relaxed">
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">01</span>
              <span>
                <En><strong className="text-white">It&apos;s more expensive than you think.</strong> Coffee $5 AUD, casual lunch $20 AUD, dinner $40+ AUD per person, a pint of beer $12 AUD. A couple&apos;s weekly food budget is realistically $500–$700 AUD. Budget more than the guidebooks say.</En>
                <Ko><strong className="text-white">생각보다 비쌉니다.</strong> 커피 $5 AUD, 캐주얼 점심 $20 AUD, 1인당 저녁 $40+ AUD, 맥주 한 파인트 $12 AUD. 커플의 주간 식비 현실은 $500–$700 AUD. 가이드북보다 더 여유 있게 잡으세요.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">02</span>
              <span>
                <En><strong className="text-white">Public transport stops at midnight.</strong> Trains, buses, ferries all wind down around 12am. Plan a taxi or Uber for the way home after a night out — or you will be walking.</En>
                <Ko><strong className="text-white">대중교통은 자정 전후로 끊깁니다.</strong> 기차, 버스, 페리 모두 자정 무렵에 운행 종료. 밤에 외출 시 귀가 taxi나 Uber를 미리 계획하세요 — 아니면 걸어가야 합니다.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">03</span>
              <span>
                <En><strong className="text-white">Wildlife is loud and weird.</strong> Possums fight on your roof at 3am. Cockatoos scream at dawn. Magpies dive-bomb in spring. It is not a horror movie — it is just Australia.</En>
                <Ko><strong className="text-white">야생동물은 시끄럽고 특이합니다.</strong> 주머니쥐가 새벽 3시에 지붕 위에서 싸웁니다. 앵무새가 동에 소리를 지릅니다. 봄에는 까치가 급습합니다. 공포영화가 아니라 그냥 호주입니다.</Ko>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Keep reading */}
      <section>
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-600 mb-5">
          <En>Guides for your first month</En>
          <Ko>첫 달을 위한 가이드</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          <Link href="/workplace" className="reveal reveal-delay-1 group p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20 border border-emerald-100/50 dark:border-emerald-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">💼 <En>Workplace</En><Ko>직장</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Resumes, interviews, Award wages, your rights</En>
              <Ko>이력서, 면접, 임금등급, 노동자 권리</Ko>
            </div>
          </Link>
          <Link href="/apartment" className="reveal reveal-delay-2 group p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20 border border-amber-100/50 dark:border-amber-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">🏠 <En>Apartment</En><Ko>부동산</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Leases, bonds, flatmates, where to look</En>
              <Ko>임대 계약, 보증금, 쉐어하우스, 검색처</Ko>
            </div>
          </Link>
          <Link href="/finance" className="reveal reveal-delay-3 group p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100/50 dark:from-sky-950/30 dark:to-sky-900/20 border border-sky-100/50 dark:border-sky-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">💰 <En>Finance</En><Ko>금융</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Banking, TFN, super — the boring essentials</En>
              <Ko>은행, TFN, 퇴직연금 — 필수 기본기</Ko>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

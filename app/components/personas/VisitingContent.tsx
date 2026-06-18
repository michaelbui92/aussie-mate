import Link from "next/link";
import { En, Ko } from "../LangBlocks";

export default function VisitingContent() {
  return (
    <>
      {/* Intro */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sky-600 mb-3">
          <En>First time</En>
          <Ko>첫 방문</Ko>
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4 leading-tight">
          <En>Welcome to Australia.</En>
          <Ko>호주에 오신 것을 환영합니다.</Ko>
        </h3>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>
            AussieGuides is a bilingual guide for Korean visitors to Sydney and NSW. Whether you&apos;re here for a holiday, a working holiday, or your first week in Australia — this is the site that explains the things your travel guide doesn&apos;t.
          </En>
          <Ko>
            AussieGuides는 시드니와 NSW를 방문하는 한국인 여행자를 위한 바이링구얼 가이드입니다. 호캘리데이든, 워킹 홀리데이든, 호주에서의 첫 주든 — 여행 가이드에서 찾을 수 없는 것들을 알려드립니다.
          </Ko>
        </p>
      </section>

      {/* Start here — three things worth doing before the long list.
          Gives the reader an immediate hook so the page doesn't feel
          like a wall of text. Each pill is a sentence-long action. */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sky-600 mb-5">
          <En>Start here</En>
          <Ko>먼저 이것부터</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl">
          {[
            {
              icon: "☀️",
              en: "SPF 50+ on day one",
              ko: "첫날부터 SPF 50+",
              blurbEn: "Australia's UV is the highest in the world. Cloud cover doesn't help. Sunscreen is a habit, not a beach-day accessory.",
              blurbKo: "호주 자외선은 세계 최고. 흐린 날도 안심할 수 없습니다. 자외선 차단제는 해변용이 아니라 매일 습관입니다.",
            },
            {
              icon: "💳",
              en: "Get an Opal at the airport",
              ko: "공항에서 오팔 카드",
              blurbEn: "Trains, buses, ferries — all on Opal. Buying at the airport means you can tap your way into the city the moment you land.",
              blurbKo: "기차, 버스, 페리 — 모두 오팔. 공항에서 사면 도착 즉시 카드를 찍고 시내로 들어갈 수 있습니다.",
            },
            {
              icon: "🗣️",
              en: "Learn five Aussie words",
              ko: "호주식 영어 다섯 단어",
              blurbEn: "Arvo, brekkie, servo, ta, no worries. Five minutes of study saves you a hundred awkward pauses on day one.",
              blurbKo: "Arvo, brekkie, servo, ta, no worries. 다섯 분만 공부하면 첫날 어색한 침묵이 백 번은 줄어듭니다.",
            },
          ].map((w, i) => (
            <div
              key={w.en}
              className={`reveal reveal-delay-${i + 1} p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100/50 dark:from-sky-950/30 dark:to-sky-900/20 border border-sky-100/50 dark:border-sky-900/30`}
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

      {/* What to know */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sky-600 mb-5">
          <En>What to know before you land</En>
          <Ko>도착 전에 알아두면 좋은 것</Ko>
        </p>
        <ul className="space-y-4 max-w-3xl">
          {[
            { icon: "💳", en: "Visa and entry", ko: "비자와 입국", descEn: "Check your visa type before booking. Tourist visas can't work. Working Holiday Makers have 12-month restrictions on the same employer.", descKo: "비자 종류를 예약 전에 확인하세요. 관광비자는 취업 불가. 워킹홀리데이는 같은 고용주에 12개월 제한이 있습니다." },
            { icon: "💰", en: "Money basics", ko: "돈의 기본", descEn: "AUD only. Cards work everywhere — but get an Opal card for public transport. Tipping is not expected.", descKo: "호주달러만 사용. 카드는 어디서든 사용 가능 — 하지만 대중교통은 오팔 카드가 필요합니다. 팁은 기대하지 않아도 됩니다." },
            { icon: "☀️", en: "Sun is serious", ko: "자외선이 강합니다", descEn: "Australia has the highest UV rate in the world. Slip, slop, slap — even on cloudy days. SPF 50+ every day.", descKo: "호주는 세계 최고 자외선 지수 보유. Slip, slop, slap — 흐린 날에도 필수. 매일 SPF 50+." },
            { icon: "📱", en: "SIM and connectivity", ko: "SIM과 통신", descEn: "Grab an eSIM before you leave, or buy a prepaid SIM at the airport (Telstra, Optus, Vodafone). Data is cheap here.", descKo: "출발 전 eSIM을 준비하거나, 공항에서 선불 SIM 구매 (Telstra, Optus, Vodafone). 데이터가 저렴합니다." },
            { icon: "🗺️", en: "Getting around", ko: "교통", descEn: "Get the TripView app. Trains run on time. Opal covers trains, buses, ferries, and light rail. No need for a car in Sydney.", descKo: "TripView 앱을 다운로드하세요. 기차는 시간 정확. 오팔로 기차, 버스, 페리, 경전철 이용 가능. 시드니에선 차가 필요 없습니다." },
            { icon: "🔌", en: "Power plugs are different", ko: "콘센트 모양이 다릅니다", descEn: "Australia uses Type I (two flat pins in a V, with ground). Korean Type C/F plugs don't fit. Bring a universal adapter, or buy one at JB Hi-Fi for ~$10.", descKo: "호주는 Type I 콘센트 (V자로 기울어진 두 핀 + 접지). 한국 Type C/F 플러그는 맞지 않습니다. 유니버설 어댑터를 가져오거나 JB Hi-Fi에서 약 $10에 구매하세요." },
            { icon: "🧾", en: "GST is in the shelf price", ko: "GST는 가격표에 포함", descEn: "The 10% Goods & Services Tax is already in the price you see. No extra at the till — what you see is what you pay. Receipts list the GST separately.", descKo: "10% GST는 진열 가격에 이미 포함되어 있습니다. 계산대에서 추가되지 않습니다 — 보이는 가격이 그대로 지불 금액입니다. 영수증에서 GST가 별도로 표시됩니다." },
            { icon: "💧", en: "Tap water is drinkable", ko: "수돗물 마셔도 됩니다", descEn: "Sydney's tap water comes from protected catchments in the Warragamba Dam system. Fill your bottle at any park — it's among the cleanest in the world.", descKo: "시드니 수돗물은 워라감바 댐의 보호된 집수지에서 공급됩니다. 공원에서 병에 담아가세요 — 세계에서 가장 깨끗한 물 중 하나입니다." },
          ].map((item, i) => (
            <li key={item.en} className={`reveal reveal-delay-${(i % 5) + 1} flex gap-4 group`}>
              <span className="shrink-0 w-10 h-10 rounded-full bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <div>
                <h4 className="font-serif text-lg md:text-xl text-stone-900 dark:text-stone-100 mb-1">
                  <En>{item.en}</En>
                  <Ko>{item.ko}</Ko>
                </h4>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  <En>{item.descEn}</En>
                  <Ko>{item.descKo}</Ko>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* What travel guides don't tell you — dark callout (parity with the
          other two persona cards' "Pro tip" / "Honest take" blocks) */}
      <section className="mb-10 bg-stone-900 dark:bg-dark-surface rounded-3xl p-7 md:p-9 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="relative">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sky-400 mb-3">
            <En>First-timer</En>
            <Ko>첫 방문자 필독</Ko>
          </p>
          <h4 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
            <En>What travel guides don&apos;t tell you.</En>
            <Ko>여행 가이드에는 없는 이야기.</Ko>
          </h4>
          <ul className="space-y-3 text-white/80 text-sm md:text-base leading-relaxed">
            <li className="flex gap-3">
              <span className="text-sky-400 font-mono shrink-0">01</span>
              <span>
                <En><strong className="text-white">It&apos;s more expensive than you think.</strong> Coffee $5, casual lunch $20, dinner $40+ per person, a pint of beer $12. A couple&apos;s weekly food budget is realistically $500–$700. Budget more than the guidebooks say.</En>
                <Ko><strong className="text-white">생각보다 비쌉니다.</strong> 커피 $5, 캐주얼 점심 $20, 1인당 저녁 $40+, 맥주 한 파인트 $12. 커플의 주간 식비 현실은 $500–$700. 가이드북보다 더 여유 있게 잡으세요.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-400 font-mono shrink-0">02</span>
              <span>
                <En><strong className="text-white">Public transport stops at midnight.</strong> Trains, buses, ferries all wind down around 12am. Plan a taxi or Uber for the way home after a night out — or you will be walking.</En>
                <Ko><strong className="text-white">대중교통은 자정 전후로 끊깁니다.</strong> 기차, 버스, 페리 모두 자정 무렵에 운행 종료. 밤에 외출 시 귀가 taxi나 Uber를 미리 계획하세요 — 아니면 걸어가야 합니다.</Ko>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-400 font-mono shrink-0">03</span>
              <span>
                <En><strong className="text-white">Wildlife is loud and weird.</strong> Possums fight on your roof at 3am. Cockatoos scream at dawn. Magpies dive-bomb in spring. It is not a horror movie — it is just Australia.</En>
                <Ko><strong className="text-white">야생동물은 시끄럽고 특이합니다.</strong> 주머니쥐가 새벽 3시에 지붕 위에서 싸웁니다. 앵무새가 동에 소리를 지릅니다. 봄에는 까치가 급습합니다. 공포영화가 아니라 그냥 호주입니다.</Ko>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* After this guide — what you'll walk away with. Symmetric to
          "Start here" at the top: gives the reader a clear payoff so the
          page doesn't feel like it just ends. Uses the same sky-themed
          card style for visual rhythm. */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sky-600 mb-5">
          <En>After this guide</En>
          <Ko>이 가이드를 마치면</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
          {[
            {
              icon: "☀️",
              en: "Day-one confidence",
              ko: "첫날 당당하게",
              blurbEn: "UV, no tipping, Opal, public transport hours — the local rules that catch visitors off-guard.",
              blurbKo: "자외선, 팁 문화, 오팔, 대중교통 운행 시간 — 방문자가 놓치기 쉬운 호주의 기본 규칙.",
            },
            {
              icon: "🗣️",
              en: "Aussie English in your pocket",
              ko: "주머니 속 호주식 영어",
              blurbEn: "The five words that matter on day one, and the cultural cues that aren't in the dictionary.",
              blurbKo: "첫날 가장 중요한 다섯 단어, 그리고 사전에 없는 문화적 신호.",
            },
            {
              icon: "🧾",
              en: "Money without surprises",
              ko: "예상 밖 비용 없는 돈 관리",
              blurbEn: "GST in shelf prices, realistic weekly budgets, and the cost of living reality guides soft-pedal.",
              blurbKo: "가격표에 포함된 GST, 현실적인 주간 예산, 가이드북이 축소하는 생활비 현실.",
            },
            {
              icon: "🐨",
              en: "A short list of the unsaid",
              ko: "가이드북이 안 알려주는 것들",
              blurbEn: "What travel guides skip: the public transport cutoff, the wildlife at 3am, the cost of a normal week.",
              blurbKo: "여행 가이드가 건너뛰는 것: 대중교통 끊기는 시각, 새벽 3시 야생동물, 평범한 한 주의 비용.",
            },
          ].map((w, i) => (
            <div
              key={w.en}
              className={`reveal reveal-delay-${(i % 5) + 1} p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100/50 dark:from-sky-950/30 dark:to-sky-900/20 border border-sky-100/50 dark:border-sky-900/30`}
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

      {/* Keep reading */}
      <section>
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sky-600 mb-5">
          <En>Keep reading</En>
          <Ko>더 알아보기</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          <Link href="/tourist" className="reveal reveal-delay-1 group p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20 border border-amber-100/50 dark:border-amber-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">🌊 <En>Sydney & NSW</En><Ko>시드니 & NSW</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Beaches, harbour, must-see icons</En>
              <Ko>해변, 하버, 필수 명소</Ko>
            </div>
          </Link>
          <Link href="/aussie-english" className="reveal reveal-delay-2 group p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100/50 dark:from-sky-950/30 dark:to-sky-900/20 border border-sky-100/50 dark:border-sky-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">🗣️ <En>Aussie English</En><Ko>호주 영어</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Decode the slang before you arrive</En>
              <Ko>도착 전에 호주 속어를 해독하세요</Ko>
            </div>
          </Link>
          <Link href="/transport" className="reveal reveal-delay-3 group p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20 border border-emerald-100/50 dark:border-emerald-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">🚆 <En>Transport</En><Ko>교통</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Opal, trains, ferries, rideshare</En>
              <Ko>오팔, 기차, 페리, 라이드셰어</Ko>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

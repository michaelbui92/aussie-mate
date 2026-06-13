import Link from "next/link";
import { En, Ko } from "../LangBlocks";

export default function ArrivedContent() {
  return (
    <>
      {/* Intro */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-600 mb-3">
          <En>First month</En>
          <Ko>첫 한 달</Ko>
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4 leading-tight">
          <En>You made it. Here&apos;s how to not fumble the first month.</En>
          <Ko>도착했네요. 첫 한 달을 안정적으로 보내는 법.</Ko>
        </h3>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>
            The first few weeks in Australia are overwhelming — new city, new systems, new accents. Don&apos;t try to do everything at once. Here&apos;s the order that actually matters, written by someone who fumbled most of it the first time.
          </En>
          <Ko>
            호주에서의 첫 몇 주는 압도적입니다 — 낯선 도시, 낯선 시스템, 낯선 억양. 한꺼번에 모든 걸 하려 하지 마세요. 처음에 대부분 헤맨 사람이 직접 정리한, 실제로 중요한 순서대로 알려드립니다.
          </Ko>
        </p>
      </section>

      {/* The order that matters */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-600 mb-5">
          <En>The order that actually matters</En>
          <Ko>실제로 중요한 순서</Ko>
        </p>
        <ul className="space-y-4 max-w-3xl">
          {[
            { icon: "📱", en: "Get a SIM card on day one", ko: "첫날 SIM 카드 구매", descEn: "You can't navigate, message, or call anyone without a phone. Woolworths, Coles, or any 7-Eleven will set you up. Bring your passport. Cost: $10–$30 for a prepaid starter. Telstra has the best coverage.", descKo: "스마트폰 없이는 길 찾기, 메시지, 전화가 모두 불가합니다. Woolworths, Coles, 7-Eleven에서 모두 가능합니다. 여권을 지참하세요. 선불 스타터 비용: $10–$30. Telstra가 가장 넓은 커버리지." },
            { icon: "💳", en: "Open a bank account within the week", ko: "일주일 안에 은행 계좌 개설", descEn: "Commonwealth, ANZ, Westpac, NAB all let you open online with a passport — about 20 minutes. Your employer needs an Australian account to pay you. Skip the queues.", descKo: "Commonwealth, ANZ, Westpac, NAB 모두 여권으로 온라인 개설 가능 — 약 20분. 고용주가 월급을 입금하려면 호주 계좌가 필요합니다. 줄 서지 마세요." },
            { icon: "🚆", en: "Get an Opal card before you ride", ko: "탑승 전 오팔 카드 준비", descEn: "Sydney's public transport runs on Opal — trains, buses, ferries, light rail. Grab one at any train station or convenience store. Tap on, tap off. No card, no ride.", descKo: "시드니 대중교통은 오팔로 운영 — 기차, 버스, 페리, 경전철. 기차역이나 편의점에서 구매하세요. 탭 온, 탭 오프. 카드 없이는 탑승 불가." },
            { icon: "📋", en: "Apply for your TFN (tax number)", ko: "TFN(세금번호) 신청", descEn: "Free from ato.gov.au. Without it, your employer withholds tax at the emergency rate — which means a lot less take-home pay. Do it in your first week if you're job hunting.", descKo: "ato.gov.au에서 무료 신청. 없으면 고용주가 긴급 세율로 원천징수 — 실수령액이 크게 줄어듭니다. 구직 중이라면 첫 주에 신청하세요." },
            { icon: "🏥", en: "Sort Medicare and private health", ko: "Medicare 및 민간 보험 정리", descEn: "If you're on a reciprocal visa (UK, NZ, some EU), Medicare covers you. Everyone else needs private cover from day one — it's not optional. Compare at iSelect or choose a fund directly.", descKo: "상호주의 비자(영국, 뉴질랜드, 일부 EU)라면 Medicare 적용. 그 외는 첫날부터 민간 보험 필수 — 선택이 아닙니다. iSelect에서 비교하거나 펀드를 직접 선택하세요." },
          ].map((item, i) => (
            <li key={item.en} className={`reveal reveal-delay-${i + 1} flex gap-4 group`}>
              <span className="shrink-0 w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
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
                <En><strong className="text-white">Not applying for TFN.</strong> You'll lose 30–40% of your pay to emergency tax until you do.</En>
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

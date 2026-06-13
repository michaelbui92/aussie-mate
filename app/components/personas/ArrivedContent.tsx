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
          <Ko>도착했네요. 첫 달을 흔들리지 않게 보내는 법.</Ko>
        </h3>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>
            The first few weeks in Australia are overwhelming — new city, new systems, new accents. Don&apos;t try to do everything at once. Here&apos;s the order that actually matters.
          </En>
          <Ko>
            호주에서의 첫 몇 주는 압도적입니다 — 낯선 도시, 낯선 시스템, 낯선 억양. 한꺼번에 모든 걸 하려 하지 마세요. 실제로 중요한 순서대로 알려드립니다.
          </Ko>
        </p>
      </section>

      {/* What to sort first */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-600 mb-5">
          <En>Sort these first, in order</En>
          <Ko>이것들부터 순서대로</Ko>
        </p>
        <ol className="space-y-4 max-w-3xl">
          {[
            { num: "01", en: "SIM card", ko: "SIM 카드", desc: { en: "You can't do anything without a phone. Go to Woolworths, Coles, or any convenience store. Bring your passport. Cost: around $10–$30 for a prepaid starter.", ko: "스마트폰 없이는 아무것도 못 합니다. Woolworths, Coles, 편의점 등에서 여권 지참. 비용: 선불 스타터 약 $10–$30." } },
            { num: "02", en: "Bank account", ko: "은행 계좌", desc: { en: "Common banks: Commonwealth, ANZ, Westpac, NAB. Open online with your passport — takes 20 minutes. Your employer needs an Australian account to pay you.", ko: "주요 은행: Commonwealth, ANZ, Westpac, NAB. 여권으로 온라인 개설 — 20분 소요. 고용주가 호주 계좌로 월급을 넣어야 합니다." } },
            { num: "03", en: "Opal card", ko: "오팔 카드", desc: { en: "For trains, buses, ferries, and light rail. Tap on, tap off. Get one at any train station or convenience store. You need it before you ride.", ko: "기차, 버스, 페리, 경전철용. 탭 온, 탭 오프. 어떤 기차역이나 편의점에서든 구매 가능. 탑승 전에 필요합니다." } },
            { num: "04", en: "TFN (Tax File Number)", ko: "TFN (세금번호)", desc: { en: "Free from ato.gov.au. Without it, you'll be taxed at the emergency rate — which means less take-home pay. Do this in week one if you're job hunting.", ko: "ato.gov.au에서 무료 신청. 없으면 긴급 세금율이 적용되어 실수령액이 줄어듭니다. 취업 준비 중이라면 첫 주에 신청하세요." } },
          ].map((item, i) => (
            <li key={item.num} className={`group relative pl-14 md:pl-20 reveal reveal-delay-${i + 1}`}>
              <span className="absolute left-0 top-0 font-serif text-4xl md:text-5xl text-emerald-200 dark:text-emerald-900/50 leading-none group-hover:text-emerald-400 transition-colors">
                {item.num}
              </span>
              <h4 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-stone-100 mb-1.5">
                <En>{item.en}</En>
                <Ko>{item.ko}</Ko>
              </h4>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm md:text-base">
                <En>{item.desc.en}</En>
                <Ko>{item.desc.ko}</Ko>
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Topic cards */}
      <section>
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-600 mb-5">
          <En>Guides for your first month</En>
          <Ko>첫 달을 위한 가이드</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
          <Link href="/workplace" className="reveal reveal-delay-1 group p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/30 border border-emerald-100 dark:border-emerald-900/50 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">💼 <En>Workplace</En><Ko>직장</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Resumes, interviews, Award wages, your rights</En>
              <Ko>이력서, 면접, 임금등급, 노동자 권리</Ko>
            </div>
          </Link>
          <Link href="/apartment" className="reveal reveal-delay-2 group p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30 border border-amber-100 dark:border-amber-900/50 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">🏠 <En>Apartment</En><Ko>부동산</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Leases, bonds, flatmates, Flatmates.com.au</En>
              <Ko>임대 계약, 보증금, 쉐어하우스</Ko>
            </div>
          </Link>
          <Link href="/finance" className="reveal reveal-delay-3 group p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-950/30 dark:to-sky-900/30 border border-sky-100 dark:border-sky-900/50 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">💰 <En>Finance</En><Ko>금융</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Banking, TFN, super — what they don&apos;t teach you</En>
              <Ko>은행, TFN, 퇴직연금 — 아무도 알려주지 않는 것</Ko>
            </div>
          </Link>
          <Link href="/aussie-english" className="reveal reveal-delay-4 group p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/30 dark:to-teal-900/30 border border-teal-100 dark:border-teal-900/50 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">🗣️ <En>Aussie English</En><Ko>호주 영어</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>&quot;Arvo&quot;, &quot;no worries&quot;, &quot;TA&quot; — decoded</En>
              <Ko>"Arvo", "no worries", "TA" — 해독</Ko>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

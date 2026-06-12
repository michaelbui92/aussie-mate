import Link from "next/link";
import { En, Ko } from "../LangBlocks";

export default function ArrivedContent() {
  return (
    <>
      {/* Intro */}
      <section className="mb-8">
        <h3 className="text-sm font-black uppercase tracking-wider text-emerald-600 mb-4">
          <En>You made it. Here&apos;s how to not fumble the first month.</En>
          <Ko>도착했네요. 첫 달 동안 헤매지 않으려면.</Ko>
        </h3>
        <p className="text-base text-stone-700 leading-relaxed">
          <En>
            The first few weeks in Australia are overwhelming — new city, new systems, new accents. Don&apos;t try to do everything at once. Here&apos;s the order that actually matters.
          </En>
          <Ko>
            호주에서의 첫 몇 주는 압도적입니다 — 낯선 도시, 낯선 시스템, 낯선 억양. 한꺼번에 모든 걸 하려 하지 마세요. 실제로 중요한 순서를 알려드립니다.
          </Ko>
        </p>
      </section>

      {/* What to sort first */}
      <section className="mb-8">
        <h3 className="text-sm font-black uppercase tracking-wider text-emerald-600 mb-3">
          <En>Sort these first, in order</En>
          <Ko>이것들부터 순서대로 처리하세요</Ko>
        </h3>
        <div className="space-y-3">
          {[
            { num: "01", en: "SIM card", ko: "SIM 카드", desc: { en: "You can't do anything without a phone. Go to Woolworths, Coles, or any convenience store. Bring your passport. Cost: around $10–$30 for a prepaid starter.", ko: "스마트폰 없이는 아무것도 못 합니다. Woolworths, Coles, 편의점均可. 여권 지참. 비용: 선불 스타터 약 $10–$30." } },
            { num: "02", en: "Bank account", ko: "은행 계좌", desc: { en: "Common banks: Commonwealth, ANZ, Westpac, NAB. Open online with your passport — takes 20 minutes. Your employer needs an Australian account to pay you.", ko: "주요 은행: Commonwealth, ANZ, Westpac, NAB. 여권으로 온라인 개설 — 20분 소요. 고용주가 호주 계좌로 월급을 넣어야 합니다." } },
            { num: "03", en: "Opal card", ko: "오팔 카드", desc: { en: "For trains, buses, ferries, and light rail. Tap on, tap off. Get one at any train station or convenience store. You need it before you ride.", ko: "기차, 버스, 페리, 경전철용. 탭 온, 탭 오프. 어떤 기차역이나 편의점에서든 구매 가능. 탑승 전에 필요합니다." } },
            { num: "04", en: "TFN (Tax File Number)", ko: "TFN (세금번호)", desc: { en: "Free from ato.gov.au. Without it, you'll be taxed at the emergency rate — which means less take-home pay. Do this in week one if you're job hunting.", ko: "ato.gov.au에서 무료 신청. 없으면 긴급 세금율이 적용되어 실수령액이 줄어듭니다. 취업 준비 중이라면 첫 주에 신청하세요." } },
          ].map((item) => (
            <div key={item.num} className="flex gap-4 p-4 bg-emerald-50 border-4 border-black">
              <div className="font-mono font-black text-emerald-500 text-sm shrink-0 mt-0.5">{item.num}</div>
              <div>
                <h4 className="font-bold text-sm text-stone-800">
                  <En>{item.en}</En>
                  <Ko>{item.ko}</Ko>
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed mt-1">
                  <En>{item.desc.en}</En>
                  <Ko>{item.desc.ko}</Ko>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Topic cards */}
      <section>
        <h3 className="text-sm font-black uppercase tracking-wider text-emerald-600 mb-3">
          <En>Guides for your first month</En>
          <Ko>첫 달을 위한 가이드</Ko>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/workplace" className="block bg-emerald-400 border-4 border-black p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="font-black text-sm text-stone-900 mb-1">💼 Workplace</div>
            <div className="text-xs font-medium text-stone-800 opacity-70">
              <En>Resumes, interviews, Award wages, your rights</En>
              <Ko>이력서, 면접, 임금등급, 노동자 권리</Ko>
            </div>
          </Link>
          <Link href="/apartment" className="block bg-amber-400 border-4 border-black p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="font-black text-sm text-stone-900 mb-1">🏠 Apartment</div>
            <div className="text-xs font-medium text-stone-800 opacity-70">
              <En>Leases, bonds, flatmates, Flatmates.com.au</En>
              <Ko>임대 계약, 보증금, 쉐어하우스</Ko>
            </div>
          </Link>
          <Link href="/finance" className="block bg-sky-400 border-4 border-black p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="font-black text-sm text-stone-900 mb-1">💰 Finance</div>
            <div className="text-xs font-medium text-stone-800 opacity-70">
              <En>Banking, TFN, super — what they don&apos;t teach you</En>
              <Ko>은행, TFN, 퇴직연금 —没有人教你的事</Ko>
            </div>
          </Link>
          <Link href="/aussie-english" className="block bg-teal-400 border-4 border-black p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="font-black text-sm text-stone-900 mb-1">🗣️ Aussie English</div>
            <div className="text-xs font-medium text-stone-800 opacity-70">
              <En>&quot;Arvo&quot;, &quot;no worries&quot;, &quot;TA&quot; — decoded</En>
              <Ko>"Arvo", "no worries", "TA" — 해독</Ko>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

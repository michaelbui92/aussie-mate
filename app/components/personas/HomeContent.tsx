import Link from "next/link";
import { En, Ko } from "../LangBlocks";

export default function HomeContent() {
  return (
    <>
      {/* Intro */}
      <section className="mb-8">
        <h3 className="text-sm font-black uppercase tracking-wider text-teal-600 mb-4">
          <En>You&apos;re past the hard part. Here&apos;s where it gets good.</En>
          <Ko>제일 어려운时期는 지났어요. 이제 좋은 부분입니다.</Ko>
        </h3>
        <p className="text-base text-stone-700 leading-relaxed">
          <En>
            You&apos;ve got a flat, a job, an Opal card that&apos;s actually working. Now the question shifts — how do you actually build a life here? Not just survive, but belong.
          </En>
          <Ko>
            이제 집도 구하고, 직장도 갖고, 제대로 작동하는 오팔 카드도 있습니다. 이제 질문이 바뀌어요 — 여기서 어떻게 life를 만들어갈 것인가요? 생존이 아니라归属感.
          </Ko>
        </p>
      </section>

      {/* Long-term topics */}
      <section className="mb-8">
        <h3 className="text-sm font-black uppercase tracking-wider text-teal-600 mb-3">
          <En>The stuff that matters when you&apos;re staying</En>
          <Ko>장기 체류를 위한 중요한 것들</Ko>
        </h3>
        <div className="space-y-3">
          {[
            { en: "Renting smarter", ko: "임대 계약 잘 하기", desc: { en: "Lease renewals, rent increases, your rights as a tenant. NSW rules are actually decent — know them.", ko: "재계약, 임대료 인상, 임차인 권리. NSW 규정은 실제로 괜찮아요 — 알고 있어야 합니다." }, href: "/apartment" },
            { en: "Super and tax", ko: "퇴직연금과 세금", desc: { en: "Your super is your money. Check it annually. At tax time, use a proper accountant — Korean-run firms exist and most charge under $150.", ko: "Super는 당신의 돈입니다. 매년 확인하세요. 세금 시즌에 전문가 회계사를 이용하세요 — 한국인 회계사도 있고 대부분 $150 이하입니다." }, href: "/finance" },
            { en: "Workplace culture", ko: "직장 문화", desc: { en: "Award wages exist for a reason. If you're being underpaid, it's not normal. Fair Work Ombudsman handles this — for free.", ko: "임금등급은 존재하는 이유가 있습니다. 미만급을 받는다면, 그것은 정상이 아닙니다. Fair Work Ombudsman이 처리해줍니다 — 무료로." }, href: "/workplace" },
            { en: "Planning ahead", ko: "장기 계획", desc: { en: "PR pathways, partner visas, citizenship. These take years. If it's in your plans, start understanding the process now.", ko: "영주권 루트, 파트너 비자, 시민권.수 년이 거리도ㅋ♀. 계획에 있다면 지금부터 프로세스를 이해하세요." }, href: "/resources" },
          ].map((item) => (
            <Link key={item.en} href={item.href}
              className="flex gap-4 p-4 bg-teal-50 border-4 border-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="text-teal-500 font-black text-sm shrink-0 mt-0.5">
                <En>{item.en}</En>
                <Ko>{item.ko}</Ko>
              </div>
              <div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  <En>{item.desc.en}</En>
                  <Ko>{item.desc.ko}</Ko>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Weekend and community */}
      <section>
        <h3 className="text-sm font-black uppercase tracking-wider text-teal-600 mb-3">
          <En>Beyond the routine</En>
          <Ko>일상의外의 것들</Ko>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/beyond-sydney" className="block bg-teal-400 border-4 border-black p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="font-black text-sm text-stone-900 mb-1">🚗 Weekend trips</div>
            <div className="text-xs font-medium text-stone-800 opacity-70">
              <En>Blue Mountains, South Coast, Hunter Valley, Newcastle</En>
              <Ko>블루마운틴, 사우스 코스트, 헌터 밸리, 뉴캐슬</Ko>
            </div>
          </Link>
          <Link href="/resources" className="block bg-sky-400 border-4 border-black p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="font-black text-sm text-stone-900 mb-1">🤝 Community</div>
            <div className="text-xs font-medium text-stone-800 opacity-70">
              <En>Korean churches, sports clubs, language exchange groups</En>
              <Ko>한인 교회, 동호회, 언어교환 모임</Ko>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

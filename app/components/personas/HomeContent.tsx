import Link from "next/link";
import { En, Ko } from "../LangBlocks";

export default function HomeContent() {
  return (
    <>
      {/* Intro */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-3">
          <En>Long-term</En>
          <Ko>장기 체류</Ko>
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4 leading-tight">
          <En>You&apos;re past the hard part. Here&apos;s where it gets good.</En>
          <Ko>제일 어려운 시기는 지났어요. 이제 좋은 부분입니다.</Ko>
        </h3>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>
            You&apos;ve got a flat, a job, an Opal card that&apos;s actually working. Now the question shifts — how do you actually build a life here? Not just survive, but belong.
          </En>
          <Ko>
            이제 집도 구하고, 직장도 갖고, 제대로 작동하는 오팔 카드도 있습니다. 이제 질문이 바뀌어요 — 여기서 어떻게 삶을 만들어갈 것인가요? 생존이 아니라 소속감.
          </Ko>
        </p>
      </section>

      {/* Long-term topics */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-5">
          <En>The stuff that matters when you&apos;re staying</En>
          <Ko>장기 체류를 위한 중요한 것들</Ko>
        </p>
        <ul className="space-y-4 max-w-3xl">
          {[
            { en: "Renting smarter", ko: "임대 계약 잘 하기", desc: { en: "Lease renewals, rent increases, your rights as a tenant. NSW rules are actually decent — know them.", ko: "재계약, 임대료 인상, 임차인 권리. NSW 규정은 실제로 괜찮아요 — 알고 있어야 합니다." }, href: "/apartment" },
            { en: "Super and tax", ko: "퇴직연금과 세금", desc: { en: "Your super is your money. Check it annually. At tax time, use a proper accountant — Korean-run firms exist and most charge under $150.", ko: "Super는 당신의 돈입니다. 매년 확인하세요. 세금 시즌에 전문가 회계사를 이용하세요 — 한국인 회계사도 있고 대부분 $150 이하입니다." }, href: "/finance" },
            { en: "Workplace culture", ko: "직장 문화", desc: { en: "Award wages exist for a reason. If you're being underpaid, it's not normal. Fair Work Ombudsman handles this — for free.", ko: "임금등급은 존재하는 이유가 있습니다. 미만급을 받는다면, 그것은 정상이 아닙니다. Fair Work Ombudsman이 처리해줍니다 — 무료로." }, href: "/workplace" },
            { en: "Planning ahead", ko: "장기 계획", desc: { en: "PR pathways, partner visas, citizenship. These take years. If it's in your plans, start understanding the process now.", ko: "영주권 루트, 파트너 비자, 시민권. 수년이 걸립니다. 계획에 있다면 지금부터 프로세스를 이해하세요." }, href: "/resources" },
          ].map((item, i) => (
            <li key={item.en} className={`reveal reveal-delay-${i + 1}`}>
              <Link
                href={item.href}
                className="group flex gap-5 items-start p-5 rounded-2xl bg-stone-50 dark:bg-darkbg border border-stone-200/60 dark:border-dark-border/60 hover:border-teal-300 dark:hover:border-teal-700 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <span className="text-sm">→</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg md:text-xl text-stone-900 dark:text-stone-100 mb-1.5 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                    <En>{item.en}</En>
                    <Ko>{item.ko}</Ko>
                  </h4>
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                    <En>{item.desc.en}</En>
                    <Ko>{item.desc.ko}</Ko>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Weekend and community */}
      <section>
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-5">
          <En>Beyond the routine</En>
          <Ko>일상 밖의 것들</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
          <Link href="/beyond-sydney" className="reveal reveal-delay-1 group p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-950/30 dark:to-teal-900/20 border border-teal-100/50 dark:border-teal-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-1">🚗 <En>Weekend trips</En><Ko>주말 여행</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Blue Mountains, South Coast, Hunter Valley, Newcastle</En>
              <Ko>블루마운틴, 사우스 코스트, 헌터 밸리, 뉴캐슬</Ko>
            </div>
          </Link>
          <Link href="/resources" className="reveal reveal-delay-2 group p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100/50 dark:from-sky-950/30 dark:to-sky-900/20 border border-sky-100/50 dark:border-sky-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-1">🤝 <En>Community</En><Ko>커뮤니티</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Korean churches, sports clubs, language exchange groups</En>
              <Ko>한인 교회, 동호회, 언어교환 모임</Ko>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

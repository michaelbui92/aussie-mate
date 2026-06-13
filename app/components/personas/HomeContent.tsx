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
            You&apos;ve got a flat, a job, an Opal card that actually works. The question shifts — not how to survive, but how to actually build a life here. Belong, not just cope.
          </En>
          <Ko>
            이제 집도 구하고, 직장도 갖고, 제대로 작동하는 오팔 카드도 있습니다. 질문이 바뀌어요 — 어떻게 살아남을지가 아니라, 어떻게 여기서 진짜 삶을 만들어갈 것인가. 적응이 아니라 소속감.
          </Ko>
        </p>
      </section>

      {/* The stuff that matters */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-5">
          <En>The stuff that matters when you&apos;re staying</En>
          <Ko>장기 체류를 위한 중요한 것들</Ko>
        </p>
        <ul className="space-y-4 max-w-3xl">
          {[
            { icon: "🏠", en: "Renting smarter, year two onwards", ko: "2년차부터 임대 계약 잘 하기", descEn: "Lease renewals, rent increases, breaking lease, your rights under NSW law. The rules are actually decent — most tenants just don't know them.", descKo: "재계약, 임대료 인상, 중도 해지, NSW 법상 임차인 권리. 규정은 실제로 괜찮아요 — 대부분 임차인이 모를 뿐입니다." },
            { icon: "💰", en: "Super and tax at year-end", ko: "연말 퇴직연금과 세금", descEn: "Your super is your money — check the balance annually and consolidate if you've had multiple jobs. At tax time, a Korean-speaking accountant usually costs under $150 and saves you hundreds.", descKo: "Super는 당신의 돈입니다 — 매년 잔액을 확인하고, 여러 직장이 있었다면 통합하세요. 연말 세금 신고는 한국어 가능 회계사가 보통 $150 이하이며, 수백 달러를 아낍니다." },
            { icon: "💼", en: "Workplace culture and your worth", ko: "직장 문화와 나의 가치", descEn: "Award wages exist for a reason. If you're being underpaid, that's not normal and not your fault. Fair Work Ombudsman handles it — for free, in Korean if you need.", descKo: "임금등급은 존재하는 이유가 있습니다. 미만급을 받는다면, 그것은 정상이 아니며 당신 잘못이 아닙니다. Fair Work Ombudsman이 처리해줍니다 — 무료, 필요시 한국어로." },
            { icon: "🌏", en: "PR pathways and planning ahead", ko: "영주권 루트와 장기 계획", descEn: "PR, partner visas, citizenship — these take years. If it's in your plan, start understanding the process now. Most people leave this way too late.", descKo: "영주권, 파트너 비자, 시민권 — 수년이 걸립니다. 계획에 있다면 지금부터 프로세스를 이해하세요. 대부분 너무 늦게 시작합니다." },
            { icon: "🤝", en: "Belonging, not just settling", ko: "적응이 아닌 소속감", descEn: "After the practical stuff is sorted, the harder question is community. Korean churches, sports clubs, language exchanges, volunteering — pick one and commit. Friendships here take longer than you think.", descKo: "실용적인 것들이 정리된 후, 더 어려운 질문은 커뮤니티입니다. 한인 교회, 동호회, 언어교환, 자원봉사 — 하나를 골라 꾸준히 하세요. 여기서 우정은 생각보다 오래 걸립니다." },
          ].map((item, i) => (
            <li key={item.en} className={`reveal reveal-delay-${i + 1} flex gap-4 group`}>
              <span className="shrink-0 w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
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

      {/* The slow part */}
      <section className="mb-10 bg-stone-900 dark:bg-dark-surface rounded-3xl p-7 md:p-9 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="relative">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-400 mb-3">
            <En>Honest take</En>
            <Ko>솔직한 이야기</Ko>
          </p>
          <h4 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
            <En>The first two years are the hardest part.</En>
            <Ko>처음 2년이 가장 어렵습니다.</Ko>
          </h4>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
            <En>
              Most people who leave Australia in year one or two say the same thing in hindsight: it gets good around year three. The novelty wears off, the homesickness spikes, and the friends you thought were friends drift apart — and then, slowly, you build the version of your life here that actually feels like yours.
            </En>
            <Ko>
              1~2년 차에 호주를 떠나는 사람 대부분은 돌아보며 같은 말을 합니다: 3년 차쯤부터 좋아진다고. 새로움은 식고, 향수병은 극에 달하고, 친구라고 생각했던 사람들은 멀어지고 — 그리고 천천히, 진짜 당신만의 호주 생활이 만들어집니다.
            </Ko>
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            <En>
              The work is the work. Stay long enough for it to land.
            </En>
            <Ko>
              과정은 과정입니다. 정착할 만큼 충분히 머무르세요.
            </Ko>
          </p>
        </div>
      </section>

      {/* Keep reading */}
      <section>
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-5">
          <En>Keep reading</En>
          <Ko>더 알아보기</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          <Link href="/beyond-sydney" className="reveal reveal-delay-1 group p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-950/30 dark:to-teal-900/20 border border-teal-100/50 dark:border-teal-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">🚗 <En>Weekend trips</En><Ko>주말 여행</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Blue Mountains, South Coast, Hunter Valley</En>
              <Ko>블루마운틴, 사우스 코스트, 헌터 밸리</Ko>
            </div>
          </Link>
          <Link href="/resources" className="reveal reveal-delay-2 group p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100/50 dark:from-sky-950/30 dark:to-sky-900/20 border border-sky-100/50 dark:border-sky-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">🤝 <En>Community</En><Ko>커뮤니티</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Korean churches, sports clubs, meetups</En>
              <Ko>한인 교회, 동호회, 모임</Ko>
            </div>
          </Link>
          <Link href="/finance" className="reveal reveal-delay-3 group p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20 border border-amber-100/50 dark:border-amber-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">💰 <En>Finance</En><Ko>금융</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Super, tax, PR costs — the long view</En>
              <Ko>Super, 세금, 영주권 비용 — 장기 관점</Ko>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { En, Ko } from "../LangBlocks";

const TOPICS = [
  {
    icon: "🤝",
    en: "Making friends",
    ko: "친구 사귀기",
    desc: { en: "Korean churches, sports clubs, language exchange — how Koreans actually build community here.", ko: "한인 교회, 동호회, 언어교환 — 한인 분들이 실제로 커뮤니티를 만드는 법." },
    href: "/resources",
    color: "bg-wattle/10 border-wattle/30",
    accent: "text-wattle",
  },
  {
    icon: "🏞️",
    en: "Weekend getaways",
    ko: "주말 여행",
    desc: { en: "Blue Mountains, Newcastle, Wollongong, the South Coast — Sydney is the gateway to all of it.", ko: "블루마운틴, 뉴캐슬, 울롱콩, 사우스 코스트 — 시드니는 모든 곳의 출발점." },
    href: "/beyond-sydney",
    color: "bg-coast/10 border-coast/30",
    accent: "text-coast",
  },
  {
    icon: "🦘",
    en: "Aussie culture & identity",
    ko: "호주 문화 & 정체성",
    desc: { en: "Slang mastery, footy, barbies, larrikins — and what 'being Aussie' actually means.", ko: "슬랭 정복, 풋볼, 바비, 라리킨 — '호주 사람다움'의 진짜 의미." },
    href: "/aussie-english",
    color: "bg-sunset/10 border-sunset/30",
    accent: "text-sunset",
  },
  {
    icon: "🛂",
    en: "Long-term plans",
    ko: "장기 정착 & 비자",
    desc: { en: "PR pathways, citizenship, when (and whether) to apply — straight talk.", ko: "영주권 루트, 시민권, 언제 신청할지 (혹은 말지) — 솔직한 이야기." },
    href: "/resources",
    color: "bg-sage/10 border-sage/30",
    accent: "text-sage",
  },
];

const ADULTING = [
  { href: "/workplace", en: "Workplace culture & rights", ko: "직장 문화 & 권리", icon: "💼" },
  { href: "/finance", en: "Tax time & super", ko: "세금 신고 & 퇴직연금", icon: "💰" },
  { href: "/apartment", en: "Lease renewal & moving", ko: "재계약 & 이사", icon: "🏠" },
  { href: "/resources", en: "Medicare & healthcare", ko: "Medicare & 의료", icon: "🏥" },
];

const COUPLES = {
  icon: "💑",
  titleEn: "For couples",
  titleKo: "커플이라면",
  en: "Building a life together here means shared bills, shared leases, and sometimes a partner visa down the line. The friendships you make as a couple tend to last longer than the ones you make solo — Korean dinner parties are a real thing.",
  ko: "함께 정착한다는 건 합동 청구서, 합동 임대, 그리고 언젠가 파트너 비자를 뜻할 수도 있다는 뜻. 커플이 사귄 친구 관계가 혼자 사귄 것보다 오래가는 경우가 많습니다 — 한인 홈파티가 실제로 존재합니다.",
};

const SOLO = {
  icon: "🧍",
  titleEn: "For solo life",
  titleKo: "혼자 살 때",
  en: "The first 3 months are the hardest. Join something — a soccer team, a church group, a hiking club. Showing up twice is when it clicks. Beyond-Sydney weekend trips are the cheapest way to make friends who aren't from your office.",
  ko: "첫 3개월이 가장 어렵습니다. 무언가에 참여하세요 — 축구팀, 교회 모임, 등산 동호회. 두 번 등장하면 그때부터 연결됩니다. 시드니 밖 주말여행은 직장이 아닌 친구를 사귀는 가장 싼 방법입니다.",
};

export default function HomeContent() {
  return (
    <>
      {/* Main 4 topics */}
      <section>
        <h3 className="text-sm font-bold uppercase tracking-wider text-eucalypt/60 dark:text-dark-muted/60 mb-3">
          <En>When Australia's starting to feel like yours</En>
          <Ko>호주가 조금씩 내 나라처럼 느껴질 때</Ko>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TOPICS.map((t) => (
            <Link
              key={t.en + t.href}
              href={t.href}
              className={`group ${t.color} border rounded-2xl p-4 hover:scale-[1.02] transition-transform`}
            >
              <div className="text-2xl mb-2" aria-hidden>{t.icon}</div>
              <div className={`font-bold text-sm ${t.accent}`}>
                <En>{t.en}</En>
                <Ko>{t.ko}</Ko>
              </div>
              <div className="text-xs text-eucalypt/60 dark:text-dark-muted/60 mt-1 leading-snug">
                <En>{t.desc.en}</En>
                <Ko>{t.desc.ko}</Ko>
              </div>
              <div className="text-xs text-eucalypt/50 dark:text-dark-muted/50 mt-2 group-hover:underline">
                <En>Explore →</En>
                <Ko>자세히 보기 →</Ko>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Audience variants */}
      <section>
        <h3 className="text-sm font-bold uppercase tracking-wider text-eucalypt/60 dark:text-dark-muted/60 mb-3">
          <En>Tailored to you</En>
          <Ko>상황별 팁</Ko>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-2xl border border-eucalypt/10 dark:border-dark-border bg-white dark:bg-dark-card p-4">
            <div className="text-2xl mb-2" aria-hidden>{COUPLES.icon}</div>
            <div className="font-bold text-sm text-eucalypt dark:text-white mb-1">
              <En>{COUPLES.titleEn}</En>
              <Ko>{COUPLES.titleKo}</Ko>
            </div>
            <div className="text-xs text-eucalypt/70 dark:text-dark-muted/70 leading-snug">
              <En>{COUPLES.en}</En>
              <Ko>{COUPLES.ko}</Ko>
            </div>
          </div>
          <div className="rounded-2xl border border-eucalypt/10 dark:border-dark-border bg-white dark:bg-dark-card p-4">
            <div className="text-2xl mb-2" aria-hidden>{SOLO.icon}</div>
            <div className="font-bold text-sm text-eucalypt dark:text-white mb-1">
              <En>{SOLO.titleEn}</En>
              <Ko>{SOLO.titleKo}</Ko>
            </div>
            <div className="text-xs text-eucalypt/70 dark:text-dark-muted/70 leading-snug">
              <En>{SOLO.en}</En>
              <Ko>{SOLO.ko}</Ko>
            </div>
          </div>
        </div>
      </section>

      {/* Adulting footer */}
      <section>
        <h3 className="text-sm font-bold uppercase tracking-wider text-eucalypt/60 dark:text-dark-muted/60 mb-3">
          <En>Boring but important</En>
          <Ko>지루하지만 중요한 것</Ko>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {ADULTING.map((l) => (
            <Link
              key={l.href + l.en}
              href={l.href}
              className="rounded-xl border border-eucalypt/10 dark:border-dark-border bg-white dark:bg-dark-card p-3 text-center hover:scale-[1.02] transition-transform"
            >
              <div className="text-xl mb-1" aria-hidden>{l.icon}</div>
              <div className="text-xs font-semibold text-eucalypt dark:text-white">
                <En>{l.en}</En>
                <Ko>{l.ko}</Ko>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

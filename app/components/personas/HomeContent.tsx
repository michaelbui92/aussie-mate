import Link from "next/link";
import { En, Ko } from "../LangBlocks";

const TOPICS = [
  {
    en: "Making friends",
    ko: "친구 사귀기",
    desc: { en: "Korean churches, sports clubs, language exchange — how Koreans actually build community here.", ko: "한인 교회, 동호회, 언어교환 — 한인 분들이 실제로 커뮤니티를 만드는 법." },
    href: "/resources",
    borderColor: "border-t-wattle",
    accent: "text-wattle",
  },
  {
    en: "Weekend getaways",
    ko: "주말 여행",
    desc: { en: "Blue Mountains, Newcastle, Wollongong, the South Coast — Sydney is the gateway to all of it.", ko: "블루마운틴, 뉴캐슬, 울롱콩, 사우스 코스트 — 시드니는 모든 곳의 출발점." },
    href: "/beyond-sydney",
    borderColor: "border-t-coast",
    accent: "text-coast",
  },
  {
    en: "Aussie culture & identity",
    ko: "호주 문화 & 정체성",
    desc: { en: "Slang mastery, footy, barbies, larrikins — and what 'being Aussie' actually means.", ko: "슬랭 정복, 풋볼, 바비, 라리킨 — '호주 사람다움'의 진짜 의미." },
    href: "/aussie-english",
    borderColor: "border-t-sunset",
    accent: "text-sunset",
  },
  {
    en: "Long-term plans",
    ko: "장기 정착 & 비자",
    desc: { en: "PR pathways, citizenship, when (and whether) to apply — straight talk.", ko: "영주권 루트, 시민권, 언제 신청할지 (혹은 말지) — 솔직한 이야기." },
    href: "/resources",
    borderColor: "border-t-sage",
    accent: "text-sage",
  },
];

const ADULTING = [
  { href: "/workplace", en: "Workplace culture & rights", ko: "직장 문화 & 권리" },
  { href: "/finance", en: "Tax time & super", ko: "세금 신고 & 퇴직연금" },
  { href: "/apartment", en: "Lease renewal & moving", ko: "재계약 & 이사" },
  { href: "/resources", en: "Medicare & healthcare", ko: "Medicare & 의료" },
];

const COUPLES = {
  titleEn: "For couples",
  titleKo: "커플이라면",
  en: "Building a life together here means shared bills, shared leases, and sometimes a partner visa down the line. The friendships you make as a couple tend to last longer than the ones you make solo — Korean dinner parties are a real thing.",
  ko: "함께 정착한다는 건 합동 청구서, 합동 임대, 그리고 언젠가 파트너 비자를 뜻할 수도 있다는 뜻. 커플이 사귄 친구 관계가 혼자 사귄 것보다 오래가는 경우가 많습니다 — 한인 홈파티가 실제로 존재합니다.",
};

const SOLO = {
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
              className={`group block border border-eucalypt/10 dark:border-dark-border border-t-2 ${t.borderColor} bg-white dark:bg-dark-card rounded-md p-5 hover:border-eucalypt/40 dark:hover:border-dark-muted/40 transition-colors`}
            >
              <h4 className={`text-base font-semibold tracking-tight ${t.accent}`}>
                <En>{t.en}</En>
                <Ko>{t.ko}</Ko>
              </h4>
              <p className="text-sm text-eucalypt/65 dark:text-dark-muted/65 mt-2 leading-relaxed">
                <En>{t.desc.en}</En>
                <Ko>{t.desc.ko}</Ko>
              </p>
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
          <div className="border border-eucalypt/10 dark:border-dark-border border-t-2 border-t-sunset bg-white dark:bg-dark-card rounded-md p-5">
            <h4 className="text-base font-semibold tracking-tight text-eucalypt dark:text-white mb-2">
              <En>{COUPLES.titleEn}</En>
              <Ko>{COUPLES.titleKo}</Ko>
            </h4>
            <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed">
              <En>{COUPLES.en}</En>
              <Ko>{COUPLES.ko}</Ko>
            </p>
          </div>
          <div className="border border-eucalypt/10 dark:border-dark-border border-t-2 border-t-coast bg-white dark:bg-dark-card rounded-md p-5">
            <h4 className="text-base font-semibold tracking-tight text-eucalypt dark:text-white mb-2">
              <En>{SOLO.titleEn}</En>
              <Ko>{SOLO.titleKo}</Ko>
            </h4>
            <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed">
              <En>{SOLO.en}</En>
              <Ko>{SOLO.ko}</Ko>
            </p>
          </div>
        </div>
      </section>

      {/* Adulting footer */}
      <section>
        <h3 className="text-sm font-bold uppercase tracking-wider text-eucalypt/60 dark:text-dark-muted/60 mb-3">
          <En>Boring but important</En>
          <Ko>지루하지만 중요한 것</Ko>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-eucalypt/10 dark:bg-dark-border border border-eucalypt/10 dark:border-dark-border rounded-md overflow-hidden">
          {ADULTING.map((l) => (
            <Link
              key={l.href + l.en}
              href={l.href}
              className="bg-white dark:bg-dark-card px-3 py-3 hover:bg-cream/40 dark:hover:bg-dark-surface transition-colors"
            >
              <div className="text-sm font-medium text-eucalypt dark:text-white">
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

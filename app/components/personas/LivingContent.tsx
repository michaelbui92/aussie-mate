import Link from "next/link";
import { En, Ko } from "../LangBlocks";

const TOPICS = [
  { icon: "💼", en: "Workplace culture & rights", ko: "직장 문화 & 권리", href: "/workplace", color: "bg-coast/10 border-coast/30", accent: "text-coast" },
  { icon: "💰", en: "Tax time (EOFY, June 30)", ko: "세금 신고 (회계연도, 6/30)", href: "/finance", color: "bg-sage-light/10 border-sage-light/30", accent: "text-sage-light" },
  { icon: "🏦", en: "Superannuation (retirement)", ko: "퇴직연금 (super)", href: "/finance", color: "bg-sage/10 border-sage/30", accent: "text-sage" },
  { icon: "🏥", en: "Healthcare (Medicare & private)", ko: "의료 (Medicare & 민간)", href: "/resources", color: "bg-sunset/10 border-sunset/30", accent: "text-sunset" },
  { icon: "🗣️", en: "Ongoing Aussie slang", ko: "계속 듣게 될 호주 표현", href: "/aussie-english", color: "bg-sunset-light/10 border-sunset-light/30", accent: "text-sunset-light" },
  { icon: "🛂", en: "Citizenship & PR pathways", ko: "시민권 & 영주권", href: "/resources", color: "bg-wattle/10 border-wattle/30", accent: "text-wattle" },
];

const COUPLES = {
  icon: "💑",
  titleEn: "For couples",
  titleKo: "커플이라면",
  en: "Partner visa (subclass 820/801) is the main route to PR for de facto or married couples. Joint leases and bills help evidence the relationship.",
  ko: "파트너 비자 (서브클래스 820/801)가 사실혼/기혼 커플의 주된 PR 루트. 합동 임대차와 공과금 납부로 관계 증명.",
};

const SOLO = {
  icon: "🧍",
  titleEn: "For solo life",
  titleKo: "혼자 살 때",
  en: "Build community fast: Korean churches, language exchange, sports clubs. Beyond-sydney weekend trips are the cheapest way to make friends.",
  ko: "커뮤니티 빨리 만들기: 한인 교회, 언어교환, 스포츠 클럽. 시드니 밖 주말여행이 친구를 사귀는 가장 싼 방법.",
};

const ONGOING = [
  { en: "Get a driver licence (NSW) within 3 months if you have an overseas one", ko: "해외 면허가 있다면 3개월 내 NSW 면허로 전환", href: "/transport" },
  { en: "Register to vote (citizens and some PRs) — it's compulsory", ko: "투표 등록 (시민권자 및 일부 영주권자) — 의무", href: "/resources" },
  { en: "Sort out private health insurance to avoid the Medicare levy surcharge", ko: "Medicare 부가세 회피를 위해 민간 의료보험 가입 검토", href: "/resources" },
  { en: "If you're on a temporary visa, watch your visa expiry (no automatic extension)", ko: "임시 비자라면 만료일 확인 (자동 연장 없음)", href: "/resources" },
];

export default function LivingContent() {
  return (
    <>
      {/* Topics grid */}
      <section>
        <h3 className="text-sm font-bold uppercase tracking-wider text-eucalypt/60 dark:text-dark-muted/60 mb-3">
          <En>Ongoing topics</En>
          <Ko>정기적으로 챙길 것</Ko>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
              <div className="text-xs text-eucalypt/60 dark:text-dark-muted/60 mt-1 group-hover:underline">→</div>
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

      {/* Ongoing reminders */}
      <section>
        <h3 className="text-sm font-bold uppercase tracking-wider text-eucalypt/60 dark:text-dark-muted/60 mb-3">
          <En>Don't forget</En>
          <Ko>잊지 마세요</Ko>
        </h3>
        <ul className="space-y-2">
          {ONGOING.map((o, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-eucalypt dark:text-white">
              <span aria-hidden className="text-sunset shrink-0">✓</span>
              <span className="flex-1">
                <En>{o.en}</En>
                <Ko>{o.ko}</Ko>
                {o.href && (
                  <Link href={o.href} className="ml-1 text-sunset text-xs font-semibold hover:underline">
                    <En>→ guide</En>
                    <Ko>→ 가이드</Ko>
                  </Link>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

import Link from "next/link";
import { En, Ko } from "../LangBlocks";
import Checklist, { type ChecklistItem } from "../Checklist";

const TOPICS = [
  {
    en: "Finding a job",
    ko: "취업하기",
    desc: { en: "Where to look, how resumes work here, and interview culture.", ko: "구인 사이트, 이력서 작성법, 면접 문화." },
    href: "/workplace",
    borderColor: "border-t-coast",
    accent: "text-coast",
  },
  {
    en: "Aussie English",
    ko: "호주 영어 배우기",
    desc: { en: "Decode the accent, slang, and what 'no worries' really means.", ko: "발음, 속어, 'no worries'의 진짜 의미." },
    href: "/aussie-english",
    borderColor: "border-t-sunset",
    accent: "text-sunset",
  },
  {
    en: "Getting around",
    ko: "시드니 교통",
    desc: { en: "Opal cards, trains, buses, ferries, and rideshare basics.", ko: "오팔 카드, 기차, 버스, 페리, 라이드셰어." },
    href: "/transport",
    borderColor: "border-t-sunset-light",
    accent: "text-sunset-light",
  },
  {
    en: "See the sights",
    ko: "시드니 명소",
    desc: { en: "Harbour, beaches, and the must-dos for your first month.", ko: "하버, 해변, 첫 달에 꼭 가봐야 할 곳." },
    href: "/tourist",
    borderColor: "border-t-wattle",
    accent: "text-wattle",
  },
];

const CHECKLIST: ChecklistItem[] = [
  {
    id: "sim",
    en: "Get a SIM card (Telstra, Optus, Vodafone)",
    ko: "SIM 카드 구매 (Telstra, Optus, Vodafone)",
    hint: { en: "Bring your passport. Woolworths or the airport kiosks are easiest.", ko: "여권 지참. Woolworths 또는 공항 키오스크가 가장 쉬움." },
  },
  {
    id: "bank",
    en: "Open a bank account",
    ko: "은행 계좌 개설",
    hint: { en: "Common banks: Commonwealth, ANZ, Westpac, NAB. You can often open online with your passport.", ko: "주요 은행: Commonwealth, ANZ, Westpac, NAB. 여권으로 온라인 개설 가능한 곳 많음." },
    link: { href: "/finance", en: "Banking guide", ko: "은행 가이드" },
  },
  {
    id: "housing",
    en: "Sort housing (lease or sharehouse)",
    ko: "주거 정하기 (전세 or 쉐어하우스)",
    hint: { en: "Flatmates.com.au is the fastest path. Realestate.com.au and Domain are next.", ko: "Flatmates.com.au가 가장 빠름. 그 다음 Realestate.com.au와 Domain." },
    link: { href: "/apartment", en: "Apartment guide", ko: "부동산 가이드" },
  },
  {
    id: "tfn",
    en: "Apply for a TFN (Tax File Number)",
    ko: "TFN (세금번호) 신청",
    hint: { en: "Free at ato.gov.au. You need it before your first paycheck to avoid emergency tax.", ko: "ato.gov.au에서 무료 신청. 첫 월급 전까지 해야 긴급 세금 안 뜸." },
    link: { href: "/workplace", en: "Workplace guide", ko: "직장 가이드" },
  },
];

const ADMIN_LINKS = [
  { href: "/apartment", en: "Apartment Guide", ko: "부동산 가이드" },
  { href: "/finance", en: "Finance & banking", ko: "금융 & 은행" },
  { href: "/transport", en: "Transport", ko: "교통" },
  { href: "/workplace", en: "Workplace & tax", ko: "직장 & 세금" },
];

export default function ArrivedContent() {
  return (
    <>
      {/* Main 4 topics */}
      <section>
        <h3 className="text-sm font-bold uppercase tracking-wider text-eucalypt/60 dark:text-dark-muted/60 mb-3">
          <En>Your first month</En>
          <Ko>첫 한 달 동안</Ko>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TOPICS.map((t) => (
            <Link
              key={t.en}
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

      {/* First-week admin checklist */}
      <section>
        <Checklist
          storageKey="aussie-mate:arrived-checklist:v2"
          title={{ en: "First-week admin (don't skip)", ko: "첫 주에 할 행정 (놓치지 마세요)" }}
          items={CHECKLIST}
        />
      </section>

      {/* Quick admin links */}
      <section>
        <h3 className="text-sm font-bold uppercase tracking-wider text-eucalypt/60 dark:text-dark-muted/60 mb-3">
          <En>Quick links</En>
          <Ko>바로가기</Ko>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-eucalypt/10 dark:bg-dark-border border border-eucalypt/10 dark:border-dark-border rounded-md overflow-hidden">
          {ADMIN_LINKS.map((l) => (
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

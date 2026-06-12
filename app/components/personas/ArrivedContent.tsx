import Link from "next/link";
import { En, Ko } from "../LangBlocks";
import Checklist, { type ChecklistItem } from "../Checklist";

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
    id: "transport",
    en: "Set up an Opal card for transport",
    ko: "교통카드(Opal) 준비",
    hint: { en: "Get one at any 7-Eleven, newsagent, or train station.", ko: "편의점, 잡화점, 역에서 구매 가능." },
    link: { href: "/transport", en: "Transport guide", ko: "교통 가이드" },
  },
  {
    id: "housing",
    en: "Sort housing (lease or sharehouse)",
    ko: "주거 정하기 (전세 or 쉐어하우스)",
    hint: { en: "Realestate.com.au and Flatmates.com.au are the main sites. Inspections are common — bring ID.", ko: "Realestate.com.au, Flatmates.com.au가 주요 사이트. 인스펙션이 일반적 — 신분증 지참." },
    link: { href: "/apartment", en: "Apartment guide", ko: "부동산 가이드" },
  },
  {
    id: "tfn",
    en: "Apply for a TFN (Tax File Number)",
    ko: "TFN (세금번호) 신청",
    hint: { en: "Free at ato.gov.au. You need it before your first paycheck to avoid emergency tax.", ko: "ato.gov.au에서 무료 신청. 첫 월급 전까지 해야 긴급 세금 안 뜸." },
    link: { href: "/workplace", en: "Workplace guide", ko: "직장 가이드" },
  },
  {
    id: "medicare",
    en: "Enrol in Medicare (if eligible)",
    ko: "Medicare 가입 (해당되는 경우)",
    hint: { en: "Reciprocal Health Care Agreements cover some visitors. Otherwise, get private health insurance.", ko: "상호 의료 협정에 해당되면 적용. 아니면 민간 의료보험 가입." },
  },
  {
    id: "super",
    en: "Set up superannuation (if working)",
    ko: "퇴직연금(super) 가입 (근무 시)",
    hint: { en: "Your employer should pay 11.5% into a super fund. Pick one or use your employer's default.", ko: "고용주가 11.5%를 super로 지급. 직접 선택하거나 회사 기본 fund 사용." },
    link: { href: "/finance", en: "Finance guide", ko: "금융 가이드" },
  },
  {
    id: "address",
    en: "Update your address (some visas)",
    ko: "주소 변경 신고 (특정 비자의 경우)",
    hint: { en: "If you're on a student or skilled visa, the Department of Home Affairs wants to know within 7 days.", ko: "학생/숙련 비자라면, 내무부에 7일 내 신고 필요." },
  },
];

const COUPLES = {
  icon: "💑",
  en: "If you're both working, each register for a TFN + super separately. Joint bank accounts are common but keep individual accounts for the first 3 months until your credit history builds.",
  ko: "둘 다 일한다면, TFN과 super는 각각 따로 신청. 합동 계좌는 흔하지만, 신용 기록이 쌓이기 전 3개월은 개별 계좌 유지 추천.",
};

const SOLO = {
  icon: "🧳",
  en: "Sharehouses are the fastest way in. Flatmates.com.au lists most. Facebook groups (e.g. 'Koreans in Sydney') are great for finding rooms and meeting people.",
  ko: "쉐어하우스가 가장 빠른 정착법. Flatmates.com.au가 주력. 페이스북 그룹 (예: 'Koreans in Sydney')도 방 찾기와 사람 만남에 좋음.",
};

const LINKS = [
  { href: "/apartment", en: "Apartment Guide", ko: "부동산 가이드", color: "bg-sage/10 border-sage/30", accent: "text-sage" },
  { href: "/finance", en: "Finance", ko: "금융", color: "bg-sage-light/10 border-sage-light/30", accent: "text-sage-light" },
  { href: "/transport", en: "Transport", ko: "교통", color: "bg-sunset-light/10 border-sunset-light/30", accent: "text-sunset-light" },
  { href: "/workplace", en: "Workplace & tax", ko: "직장 & 세금", color: "bg-coast/10 border-coast/30", accent: "text-coast" },
];

export default function ArrivedContent() {
  return (
    <>
      {/* Checklist */}
      <section>
        <Checklist
          storageKey="aussie-mate:arrived-checklist:v1"
          title={{ en: "Your first-week checklist", ko: "첫 주 체크리스트" }}
          items={CHECKLIST}
        />
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
              <En>For couples</En>
              <Ko>커플이라면</Ko>
            </div>
            <div className="text-xs text-eucalypt/70 dark:text-dark-muted/70 leading-snug">
              <En>{COUPLES.en}</En>
              <Ko>{COUPLES.ko}</Ko>
            </div>
          </div>
          <div className="rounded-2xl border border-eucalypt/10 dark:border-dark-border bg-white dark:bg-dark-card p-4">
            <div className="text-2xl mb-2" aria-hidden>{SOLO.icon}</div>
            <div className="font-bold text-sm text-eucalypt dark:text-white mb-1">
              <En>For solo travellers</En>
              <Ko>혼자라면</Ko>
            </div>
            <div className="text-xs text-eucalypt/70 dark:text-dark-muted/70 leading-snug">
              <En>{SOLO.en}</En>
              <Ko>{SOLO.ko}</Ko>
            </div>
          </div>
        </div>
      </section>

      {/* Curated links */}
      <section>
        <h3 className="text-sm font-bold uppercase tracking-wider text-eucalypt/60 dark:text-dark-muted/60 mb-3">
          <En>Keep reading</En>
          <Ko>더 알아보기</Ko>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`group ${l.color} border rounded-2xl p-4 hover:scale-[1.02] transition-transform`}
            >
              <div className={`font-bold text-sm ${l.accent}`}>
                <En>{l.en}</En>
                <Ko>{l.ko}</Ko>
              </div>
              <div className="text-xs text-eucalypt/60 dark:text-dark-muted/60 mt-1 group-hover:underline">→</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

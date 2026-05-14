"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { En, Ko } from "@/components/LangBlocks";

interface SearchResult {
  page: string;
  pageKo: string;
  href: string;
  section?: string;
  sectionKo?: string;
  matches: { en: string; ko: string };
}

const searchIndex: SearchResult[] = [
  // Aussie English
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "visa, visa situation, visa status, work rights, student visa, working holiday", ko: "비자, 비자 상황, 비자 상태, 취업 권리, 학생 비자, 워킹홀리디" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "Medicare, healthcare, bulk billing, doctor, hospital, medical", ko: "메디케어, 의료, 벌크 빌링, 병원, 의사, 치료" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "bond, rental bond, deposit, rent, landlord, tenant, lease", ko: "보증금, 임대차, 임차인, 임대인, 임대 계약" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "tax, TFN, tax file number, ATO, tax return", ko: "세금, TFN, 세금 파일 번호, 세금 신고" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "bank, bank account, open account, transfer money, BPAY", ko: "은행, 계좌, 계좌 개설, 송금, BPAY" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "group assignment, group work, group project, team work, presentation", ko: "그룹 과제, 그룹 프로젝트, 팀워크, 프레젠테이션" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "opportunity, good deal, bargain, value for money, affordable", ko: "기회, 좋은 거래, 절약, 가성비" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "university, lecture, tutorial, assignment, exam, GPA, grade", ko: "대학교, 강의, 튜토리얼, 과제, 시험, 성적, GPA" },
  },

  // Workplace
  {
    page: "Workplace",
    pageKo: "직장",
    href: "/workplace",
    section: "Employment Rights",
    sectionKo: "취업 권리",
    matches: { en: "minimum wage, Award wage, pay, salary, superannuation, super, paid break, overtime, penalty rates, tax, TFN, PAYG", ko: "최저 임금, 임금, 급여, 퇴직금, 휴식 시간, 야간 수당, 세금, TFN" },
  },
  {
    page: "Workplace",
    pageKo: "직장",
    href: "/workplace",
    section: "Employment Rights",
    sectionKo: "취업 권리",
    matches: { en: "visa, work rights, student visa, working holiday, 40 hours, work limit, 20 hours", ko: "비자, 취업 권리, 학생 비자, 워킹홀리디,务工时限" },
  },
  {
    page: "Workplace",
    pageKo: "직장",
    href: "/workplace",
    section: "First Week Tips",
    sectionKo: "첫째 주 팁",
    matches: { en: "first week, first day, start work, arrive, orientation, meet team, super, TFN, bank account, ABN", ko: "첫째 주, 첫날, 출근, 오리엔테이션, 팀 소개, 세금, 은행" },
  },
  {
    page: "Workplace",
    pageKo: "직장",
    href: "/workplace",
    section: "Fair Work",
    sectionKo: "공정 노동",
    matches: { en: "Fair Work, complain, workplace complaint, employment complaint, rights, unfair dismissal, discrimination, harassment", ko: "공정 노동, 민원, 노동 분쟁, 해고, 차별, 괴롭힘" },
  },

  // Apartment
  {
    page: "Apartment Guide",
    pageKo: "임대 가이드",
    href: "/apartment",
    section: "Rental Application",
    sectionKo: "임대 지원",
    matches: { en: "rental application, apply, 100 points ID, documents, cover letter, rental history, reference, proof of income, bond", ko: "임대 지원, 지원서, 신분증, 소개서, 임대 이력, 소득 증명, 보증금" },
  },
  {
    page: "Apartment Guide",
    pageKo: "임대 가이드",
    href: "/apartment",
    section: "Tenant Rights in NSW",
    sectionKo: "NSW 임차인 권리",
    matches: { en: "tenant rights, rent increase, repairs, entry notice, eviction, break lease, notice period, landlord obligations", ko: "임차인 권리, 임대료 인상, 수리, 입주 고지, 퇴거, 임대차 해지, 임대인 의무" },
  },
  {
    page: "Apartment Guide",
    pageKo: "임대 가이드",
    href: "/apartment",
    section: "Bills & Move-in Costs",
    sectionKo: "공과금 및 입주 비용",
    matches: { en: "move in costs, bills, electricity, gas, internet, utility connections, moving costs, contents insurance, bond", ko: "입주 비용, 공과금, 전기, 가스, 인터넷, 이동 비용, 보험, 보증금" },
  },
  {
    page: "Apartment Guide",
    pageKo: "임대 가이드",
    href: "/apartment",
    section: "Red Flags to Watch",
    sectionKo: "주의해야 할 위험 신호",
    matches: { en: "red flags, scam, warning signs, fake listing, cash only, no lease, too cheap", ko: "위험 신호, 사기, 경고 표시, 가짜 광고, 현금만, 계약서 없음" },
  },

  // Study
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Aussie Uni Culture",
    sectionKo: "호주 대학 문화",
    matches: { en: "university culture, lectures, tutorials, group work, participation, self-directed learning, study load", ko: "대학 문화, 강의, 튜토리얼, 그룹 작업, 참여,自学" },
  },
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Talking to Professors",
    sectionKo: "교수님과 대화하기",
    matches: { en: "professor, email, office hours, extension, ask for help, academic help", ko: "교수, 이메일, 오피스 아워, 연기 요청, 학술 도움" },
  },
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Academic Integrity",
    sectionKo: "학술 무결성",
    matches: { en: "plagiarism, AI, ChatGPT, referencing, Turnitin, academic misconduct, cheat, citation", ko: "표절, AI,.ChatGPT, 인용, 학문 부정, 부정행위" },
  },
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Special Consideration",
    sectionKo: "특별 고려",
    matches: { en: "special consideration, extension, deferred exam, illness, mental health, circumstances, withdraw", ko: "특별 고려, 연기, 시험 연기, 질병, 정신 건강, 철회" },
  },
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Grades Explained",
    sectionKo: "성적 체계 이해",
    matches: { en: "grades, GPA, HD, DN, CR, P, fail, pass, credit, distinction, high distinction, grading scale, WAF", ko: "성적, GPA, HD, CR, P, 낙제, 통과, 크레딧, 마크" },
  },

  // Tourist
  {
    page: "Tourist",
    pageKo: "여행자",
    href: "/tourist",
    section: "Getting Around",
    sectionKo: "시드니 이동",
    matches: { en: "Opal card, train, bus, ferry, light rail, transport, peak, off-peak, Sydney transport, go card", ko: "오팔 카드, 기차, 버스, 페리, 경전철, 교통, 피크, 오프피크" },
  },
  {
    page: "Tourist",
    pageKo: "여행자",
    href: "/tourist",
    section: "Top 10 Sydney Must-Sees",
    sectionKo: "시드니 꼭 가볼 10곳",
    matches: { en: "Sydney Opera House, Harbour Bridge, Bondi, Blue Mountains, Manly, Taronga Zoo, Botanic Garden, The Rocks, tourist attractions, sightseeing", ko: "시드니 오페라 하우스, 하버 브릿지, 본디, 블루 마운틴, 맨리, 타롱가 동물원, 식물원, 관광지" },
  },
  {
    page: "Tourist",
    pageKo: "여행자",
    href: "/tourist",
    section: "Budget Tips",
    sectionKo: "예산 팁",
    matches: { en: "budget, cheap, affordable, free attractions, Opal cap, Wednesday discount, concession card, student discount", ko: "예산, 저렴한, 무료 관광지, 오팔 상한, 학생 할인" },
  },
  {
    page: "Tourist",
    pageKo: "여행자",
    href: "/tourist",
    section: "Safety Tips",
    sectionKo: "안전 팁",
    matches: { en: "safety, beach safety, sun protection, sunscreen, sharks, snakes, wildlife, first aid, emergency", ko: "안전, 비치 안전, 자외선, 선크림, 상어, 뱀, 야생동물, 응급" },
  },

  // Resources
  {
    page: "Resources",
    pageKo: "자료",
    href: "/resources",
    section: "Government Services",
    sectionKo: "정부 서비스",
    matches: { en: "Medicare, Centrelink, myGov, TFN, ATO, Service NSW, Fair Trading, tax, visa, Centrelink payments", ko: "메디케어, 센터링크, 마이갓, TFN, ATO, 서비스 NSW, 공정거래, 세금" },
  },
  {
    page: "Resources",
    pageKo: "자료",
    href: "/resources",
    section: "Education",
    sectionKo: "교육",
    matches: { en: "university, TAFE, Study NSW, UTS, UNSW, Macquarie, Sydney University, course, vocational, study", ko: "대학, TAFE, UTS, UNSW, 매쿼리, 시드니 대학교, 학과, 직업 교육" },
  },
  {
    page: "Resources",
    pageKo: "자료",
    href: "/resources",
    section: "Healthcare",
    sectionKo: "의료",
    matches: { en: "Medicare, bulk billing, clinic, GP, hospital, ER, urgent care, mental health, Beyond Blue, Lifeline", ko: "메디케어, 벌크 빌링, 의원, 병원, 응급실, 응급 진료, 정신 건강" },
  },
  {
    page: "Resources",
    pageKo: "자료",
    href: "/resources",
    section: "Emergency Contacts",
    sectionKo: "비상 연락처",
    matches: { en: "emergency, 000, police, ambulance, fire, SES, poisons, Crime Stoppers, crisis", ko: "비상, 000, 경찰, 구급차, 소방, 독극물, 위기" },
  },
];

function search(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return searchIndex.filter(item => {
    const en = item.matches.en.toLowerCase();
    const ko = item.matches.ko.toLowerCase();
    return en.includes(q) || ko.includes(q);
  });
}

function groupByPage(results: SearchResult[]): Record<string, SearchResult[]> {
  return results.reduce((acc, result) => {
    const key = result.page;
    if (!acc[key]) acc[key] = [];
    acc[key].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);
}

let isOpen = false;
const listeners: Set<(open: boolean) => void> = new Set();

export function openSearch() {
  isOpen = true;
  listeners.forEach(l => l(true));
}

export function closeSearch() {
  isOpen = false;
  listeners.forEach(l => l(false));
}

export function SearchModal() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [grouped, setGrouped] = useState<Record<string, SearchResult[]>>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handler = (open: boolean) => {
      if (open) {
        setTimeout(() => inputRef.current?.focus(), 50);
      } else {
        setQuery("");
        setResults([]);
        setGrouped({});
        setActiveIndex(0);
      }
    };
    listeners.add(handler);
    return () => { listeners.delete(handler); };
  }, []);

  useEffect(() => {
    const results = search(query);
    setResults(results);
    setGrouped(groupByPage(results));
    setActiveIndex(0);
  }, [query]);

  const flatResults = results;

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeSearch();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, flatResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && flatResults.length > 0) {
      const selected = flatResults[activeIndex];
      if (selected) {
        closeSearch();
        router.push(selected.href);
      }
    }
  }, [flatResults, activeIndex, router]);

  useEffect(() => {
    const handleGlobal = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) closeSearch(); else openSearch();
      }
    };
    window.addEventListener("keydown", handleGlobal);
    return () => window.removeEventListener("keydown", handleGlobal);
  }, []);

  if (!isOpen) return null;

  const allResults = Object.entries(grouped);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4"
      onClick={(e) => { if (e.target === e.currentTarget) closeSearch(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-eucalypt/30 dark:bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white dark:bg-dark-surface border border-sand dark:border-dark-border rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-sand dark:border-dark-border">
          <svg className="w-5 h-5 text-sunset shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search AussieMate... try &quot;visa&quot;, &quot;bond&quot;, &quot;medicare&quot;"
            className="flex-1 text-base text-eucalypt dark:text-dark-muted placeholder:text-eucalypt/30 dark:placeholder:text-dark-muted/30 bg-transparent outline-none"
          />
          <button
            onClick={closeSearch}
            className="text-xs text-eucalypt/40 hover:text-eucalypt dark:text-dark-muted/40 dark:hover:text-dark-muted px-1.5 py-0.5 border border-sand dark:border-dark-border rounded"
          >
            Esc
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {!query && (
            <div className="px-4 py-8 text-center">
              <p className="text-sm text-eucalypt/40 dark:text-dark-muted/40">
                <En>Try &quot;visa&quot;, &quot;bond&quot;, &quot;medicare&quot;, &quot;group work&quot;</En>
                <Ko>&quot;비자&quot;, &quot;보증금&quot;, &quot;메디케어&quot;, &quot;그룹&quot; 검색</Ko>
              </p>
            </div>
          )}

          {query && results.length === 0 && (
            <div className="px-4 py-8 text-center">
              <p className="text-sm text-eucalypt/40 dark:text-dark-muted/40">
                <En>No results for &quot;{query}&quot;</En>
                <Ko>&quot;{query}&quot;에 대한 결과가 없습니다</Ko>
              </p>
            </div>
          )}

          {allResults.map(([page, items]) => {
            return (
              <div key={page}>
                <div className="px-4 py-2 bg-sand/30 dark:bg-dark-surface/80 border-b border-sand dark:border-dark-border">
                  <p className="text-xs font-semibold text-eucalypt/50 dark:text-dark-muted/50 uppercase tracking-wider">
                    <En>{page}</En>
                    <Ko>{items[0].pageKo}</Ko>
                  </p>
                </div>
                {items.map((item, ii) => {
                  const globalIdx = flatResults.indexOf(item);
                  const isActive = globalIdx === activeIndex;
                  return (
                    <button
                      key={`${item.page}-${item.section || "page"}`}
                      onClick={() => { closeSearch(); router.push(item.href); }}
                      onMouseEnter={() => setActiveIndex(globalIdx)}
                      className={`w-full text-left px-4 py-3 flex items-start gap-3 border-b border-sand/50 dark:border-dark-border/50 last:border-0 transition-colors ${
                        isActive ? "bg-sunset/5 dark:bg-sunset/10" : "hover:bg-sand/30 dark:hover:bg-dark-surface/50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-sunset/60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-eucalypt dark:text-dark-muted leading-snug">
                          <En>{item.section || page}</En>
                          <Ko>{item.section ? item.sectionKo : item.pageKo}</Ko>
                        </p>
                        {item.section && (
                          <p className="text-xs text-eucalypt/40 dark:text-dark-muted/40 mt-0.5 italic line-clamp-1">
                            <En>in {page}</En>
                            <Ko>{item.pageKo}</Ko>
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Footer hint */}
        {results.length > 0 && (
          <div className="px-4 py-2 border-t border-sand dark:border-dark-border bg-sand/20 dark:bg-dark-surface/50 flex items-center gap-3 text-xs text-eucalypt/40 dark:text-dark-muted/40">
            <span>↑↓ navigate</span>
            <span>↵ open</span>
            <span>Esc close</span>
          </div>
        )}
      </div>
    </div>
  );
}
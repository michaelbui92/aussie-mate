"use client";
import { createContext, useContext, useState, useEffect, useRef, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "visa, visa situation, visa status, work rights, student visa, working holiday, 40 hours, 20 hours, tax file number", ko: "비자, 비자 상황, 취업 권리, 학생 비자, 워킹홀리디,务工时限" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "Medicare, healthcare, bulk billing, doctor, hospital, medical, clinic", ko: "메디케어, 의료, 벌크 빌링, 병원, 의사, 치료" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "bond, rental bond, deposit, rent, landlord, tenant, lease, rental application", ko: "보증금, 임대차, 임차인, 임대인, 임대 계약, 임대 지원" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "tax, TFN, tax file number, ATO, tax return, PAYG", ko: "세금, TFN, 세금 파일 번호, 세금 신고" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "bank, bank account, open account, transfer money, BPAY, international transfer", ko: "은행, 계좌, 계좌 개설, 송금, BPAY" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "group assignment, group work, group project, team work, presentation, collaboration", ko: "그룹 과제, 그룹 프로젝트, 팀워크, 프레젠테이션" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "opportunity, good deal, bargain, value for money, affordable, rip off, overpriced", ko: "기회, 좋은 거래, 절약, 가성비" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "university, lecture, tutorial, assignment, exam, GPA, grade, semester, enrollment", ko: "대학교, 강의, 튜토리얼, 과제, 시험, 성적, GPA" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "opposite, different, opposite of, not the same, different from", ko: "정반대, 반대, 다르다" },
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
    matches: { en: "visa, work rights, student visa, working holiday, 40 hours, work limit, 20 hours restriction", ko: "비자, 취업 권리, 학생 비자, 워킹홀리디,务工时限" },
  },
  {
    page: "Workplace",
    pageKo: "직장",
    href: "/workplace",
    section: "First Week Tips",
    sectionKo: "첫째 주 팁",
    matches: { en: "first week, first day, start work, arrive, orientation, meet team, superannuation, TFN, bank account, ABN, ABN registration", ko: "첫째 주, 첫날, 출근, 오리엔테이션, 팀 소개, 세금, 은행" },
  },
  {
    page: "Workplace",
    pageKo: "직장",
    href: "/workplace",
    section: "Fair Work",
    sectionKo: "공정 노동",
    matches: { en: "Fair Work, complain, workplace complaint, employment complaint, rights, unfair dismissal, discrimination, harassment, workcover", ko: "공정 노동, 민원, 노동 분쟁, 해고, 차별, 괴롭힘" },
  },

  // Apartment
  {
    page: "Apartment Guide",
    pageKo: "임대 가이드",
    href: "/apartment",
    section: "Rental Application",
    sectionKo: "임대 지원",
    matches: { en: "rental application, apply for rental, 100 points ID, documents checklist, cover letter, rental history, landlord reference, proof of income, payslip, bond, advance rent", ko: "임대 지원, 지원서, 신분증 100포인트, 소개서, 임대 이력, 소득 증명, 급여명세서, 보증금" },
  },
  {
    page: "Apartment Guide",
    pageKo: "임대 가이드",
    href: "/apartment",
    section: "Tenant Rights in NSW",
    sectionKo: "NSW 임차인 권리",
    matches: { en: "tenant rights, rent increase, repairs, entry notice, eviction, break lease, notice period, landlord obligations, 60 days notice, 90 days notice", ko: "임차인 권리, 임대료 인상, 수리, 입주 고지, 퇴거, 임대차 해지, 임대인 의무" },
  },
  {
    page: "AussieMate",
    pageKo: "호주 영어",
    href: "/apartment",
    section: "Bills & Move-in Costs",
    sectionKo: "공과금 및 입주 비용",
    matches: { en: "move in costs, bills, electricity, gas, internet connection, utility connections, moving costs, contents insurance, bond, advance rent", ko: "입주 비용, 공과금, 전기, 가스, 인터넷, 이동 비용, 보험, 보증금" },
  },
  {
    page: "Apartment Guide",
    pageKo: "임대 가이드",
    href: "/apartment",
    section: "Red Flags to Watch",
    sectionKo: "주의해야 할 위험 신호",
    matches: { en: "red flags, scam, warning signs, fake listing, cash only, no lease, too cheap, pressure to pay, won't meet in person", ko: "위험 신호, 사기, 경고 표시, 가짜 광고, 현금만, 계약서 없음" },
  },

  // Study
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Aussie Uni Culture",
    sectionKo: "호주 대학 문화",
    matches: { en: "university culture, lectures, tutorials, group work, participation mark, self-directed learning, study load, lecture recording", ko: "대학 문화, 강의, 튜토리얼, 그룹 작업, 참여 점수,自学" },
  },
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Talking to Professors",
    sectionKo: "교수님과 대화하기",
    matches: { en: "professor, lecturer, email etiquette, office hours, ask for extension, academic help, assignment extension, defer exam", ko: "교수, 이메일 예절, 오피스 아워, 연기 요청, 학술 도움" },
  },
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Academic Integrity",
    sectionKo: "학술 무결성",
    matches: { en: "plagiarism, AI, ChatGPT, referencing, Turnitin, academic misconduct, cheat, citation, cite source, self-plagiarism, contract cheating", ko: "표절, AI, ChatGPT, 인용, 학문 부정, 부정행위, 자기 표절" },
  },
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Special Consideration",
    sectionKo: "특별 고려",
    matches: { en: "special consideration, extension on assignment, deferred exam, illness, mental health, compassionate circumstances, withdraw from subject, census date", ko: "특별 고려, 연기, 시험 연기, 질병, 정신 건강, 철회" },
  },
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Grades Explained",
    sectionKo: "성적 체계 이해",
    matches: { en: "grades, GPA, HD, DN, CR, P, fail, pass, credit, distinction, high distinction, grading scale, grading system, WAM, weighted average", ko: "성적, GPA, HD, DN, CR, P, 낙제, 통과, 크레딧, 마크" },
  },

  // Tourist
  {
    page: "Tourist",
    pageKo: "여행자",
    href: "/tourist",
    section: "Getting Around",
    sectionKo: "시드니 이동",
    matches: { en: "Opal card, train, bus, ferry, light rail, transport, peak hour, off-peak, Sydney transport, go card, Sydney trains, Sydney buses, Sydney ferries, tap on, tap off", ko: "오팔 카드, 기차, 버스, 페리, 경전철, 교통, 피크, 오프피크" },
  },
  {
    page: "Tourist",
    pageKo: "여행자",
    href: "/tourist",
    section: "Top 10 Sydney Must-Sees",
    sectionKo: "시드니 꼭 가볼 10곳",
    matches: { en: "Sydney Opera House, Harbour Bridge, Bondi Beach, Blue Mountains, Manly Beach, Taronga Zoo, Royal Botanic Garden, The Rocks, tourist attractions, sightseeing, circular quay", ko: "시드니 오페라 하우스, 하버 브릿지, 본디 비치, 블루 마운틴, 맨리 비치, 타롱가 동물원, 식물원, 관광지" },
  },
  {
    page: "Tourist",
    pageKo: "여행자",
    href: "/tourist",
    section: "Budget Tips",
    sectionKo: "예산 팁",
    matches: { en: "budget, cheap, affordable, free attractions, Opal daily cap, weekly cap, Wednesday discount, concession card, student discount, free things to do in Sydney", ko: "예산, 저렴한, 무료 관광지, 오팔 상한, 학생 할인" },
  },
  {
    page: "Tourist",
    pageKo: "여행자",
    href: "/tourist",
    section: "Safety Tips",
    sectionKo: "안전 팁",
    matches: { en: "safety, beach safety, sun protection, sunscreen, SPF, sharks, snakes, wildlife, first aid, emergency, rip current, swim between flags", ko: "안전, 비치 안전, 자외선, 선크림, 상어, 뱀, 야생동물, 응급" },
  },

  // Resources
  {
    page: "Resources",
    pageKo: "자료",
    href: "/resources",
    section: "Government Services",
    sectionKo: "정부 서비스",
    matches: { en: "Medicare, Centrelink, myGov, TFN, ATO, Service NSW, Fair Trading, tax, visa, Centrelink payments, JobSeeker, Family Tax Benefit, Youth Allowance", ko: "메디케어, 센터링크, 마이갓, TFN, ATO, 서비스 NSW, 공정거래, 세금" },
  },
  {
    page: "Resources",
    pageKo: "자료",
    href: "/resources",
    section: "Education",
    sectionKo: "교육",
    matches: { en: "university, TAFE, Study NSW, UTS, UNSW, Macquarie, University of Sydney, course, vocational, study, postgraduate, undergraduate", ko: "대학, TAFE, UTS, UNSW, 매쿼리, 시드니 대학교, 학과, 직업 교육" },
  },
  {
    page: "Resources",
    pageKo: "자료",
    href: "/resources",
    section: "Healthcare",
    sectionKo: "의료",
    matches: { en: "Medicare, bulk billing, clinic, GP, doctor, hospital, emergency, ER, urgent care, mental health, Beyond Blue, Lifeline, poisons information", ko: "메디케어, 벌크 빌링, 의원, 병원, 응급실, 응급 진료, 정신 건강" },
  },
  {
    page: "Resources",
    pageKo: "자료",
    href: "/resources",
    section: "Emergency Contacts",
    sectionKo: "비상 연락처",
    matches: { en: "emergency, 000, police, ambulance, fire brigade, SES, 132500, poisons information centre, 131126, Crime Stoppers, 1800333000, crisis support, Lifeline", ko: "비상, 000, 경찰, 구급차, 소방, 독극물, 위기" },
  },
];

function searchContent(query: string): SearchResult[] {
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

// --- Context ---
interface SearchContextValue {
  open: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}

const SearchContext = createContext<SearchContextValue>({ open: false, openSearch: () => {}, closeSearch: () => {} });

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openSearch = useCallback(() => setOpen(true), []);
  const closeSearch = useCallback(() => setOpen(false), []);
  return (
    <SearchContext.Provider value={{ open, openSearch, closeSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

// --- Modal ---
export function SearchModal() {
  const { open, openSearch, closeSearch } = useSearch();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [grouped, setGrouped] = useState<Record<string, SearchResult[]>>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setGrouped({});
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Run search
  useEffect(() => {
    const found = searchContent(query);
    setResults(found);
    setGrouped(groupByPage(found));
    setActiveIndex(0);
  }, [query]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeSearch();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results.length > 0) {
      const selected = results[activeIndex];
      if (selected) {
        closeSearch();
        router.push(selected.href);
      }
    }
  }, [results, activeIndex, router, closeSearch]);

  // Global keyboard shortcut — Ctrl+K only
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        openSearch();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openSearch]);

  const flatResults = results;
  const allResults = Object.entries(grouped);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4"
        >
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 bg-eucalypt/30 dark:bg-black/50 backdrop-blur-sm cursor-pointer"
            onClick={closeSearch}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-white dark:bg-dark-surface border border-sand dark:border-dark-border rounded-2xl shadow-2xl overflow-hidden"
          >
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
                placeholder='Search AussieMate... try "visa", "bond", "medicare"'
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

              {allResults.map(([page, items]) => (
                <div key={page}>
                  <div className="px-4 py-2 bg-sand/30 dark:bg-dark-surface/80 border-b border-sand dark:border-dark-border">
                    <p className="text-xs font-semibold text-eucalypt/50 dark:text-dark-muted/50 uppercase tracking-wider">
                      <En>{page}</En>
                      <Ko>{items[0].pageKo}</Ko>
                    </p>
                  </div>
                  {items.map((item) => {
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
              ))}
            </div>

            {/* Footer hints */}
            {results.length > 0 && (
              <div className="px-4 py-2 border-t border-sand dark:border-dark-border bg-sand/20 dark:bg-dark-surface/50 flex items-center gap-3 text-xs text-eucalypt/40 dark:text-dark-muted/40">
                <span>↑↓ navigate</span>
                <span>↵ open</span>
                <span>Esc close</span>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
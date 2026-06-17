// Search index for the site search modal.
// Lazy-loaded via dynamic import — keeps the initial bundle small.
// Edit this file to add new entries (one per page/section, matching en/ko keywords).

export interface SearchResult {
  page: string;
  pageKo: string;
  href: string;
  section?: string;
  sectionKo?: string;
  matches: { en: string; ko: string };
}

export const searchIndex: SearchResult[] = [
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "visa, visa situation, visa status, work rights, student visa, working holiday, 40 hours, 20 hours, tax file number", ko: "비자, 비자 상황, 취업 권리, 학생 비자, 워킹홀리디, 취업 시간 제한" },
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
    matches: { en: "visa, work rights, student visa, working holiday, 40 hours, work limit, 20 hours restriction", ko: "비자, 취업 권리, 학생 비자, 워킹홀리디, 취업 시간 제한" },
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
    page: "AussieGuides",
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
    matches: { en: "university culture, lectures, tutorials, group work, participation mark, self-directed learning, study load, lecture recording", ko: "대학 문화, 강의, 튜토리얼, 그룹 작업, 참여 점수,학" },
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

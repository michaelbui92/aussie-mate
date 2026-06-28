// Bilingual visa guide data — for any visitor to Australia.
// General information only. Not immigration advice.
// Verify all details at the Department of Home Affairs: https://immi.homeaffairs.gov.au/
// For advice, consult a registered MARA agent: https://www.mara.gov.au/

export type Bilingual = { en: string; ko: string };

export type Visa = {
  slug: string;
  code: string;
  name: Bilingual;
  tagline: Bilingual;
  audience: Bilingual;
  duration: Bilingual;
  workRights: Bilingual;
  studyRights: Bilingual;
  cost: Bilingual;
  processingTime: Bilingual;
  keyRequirements: Bilingual[];
  steps: Bilingual[];
  tips: Bilingual[];
  pros: Bilingual[];
  cons: Bilingual[];
  nextSteps: Bilingual;
  links: { label: Bilingual; href: string }[];
};

export const visas: Visa[] = [
  {
    slug: "working-holiday-417",
    code: "subclass 417",
    name: {
      en: "Working Holiday (subclass 417)",
      ko: "워킹홀리데이 (서브클래스 417)",
    },
    tagline: {
      en: "For young adults (18–30, or 35 for some countries) who want to holiday and work in Australia for up to a year.",
      ko: "최대 1년간 호주에서 여행과 일을 함께 즐기고 싶은 청년(18–30세, 일부 국적은 35세)을 위한 비자입니다.",
    },
    audience: {
      en: "Holders of eligible Working Holiday passports (Korea is one of around 19 participating countries) aged 18–30 at application — 35 for some nationalities. Check the Home Affairs tool below for your specific case.",
      ko: "유효한 한국 여권을 소지한 18–30세(일부 국적 35세) 한국 국민.",
    },
    duration: {
      en: "Up to 12 months from the date of first entry. Can extend to a second and (for some) third year via specified work in regional areas.",
      ko: "최초 입국일로부터 최대 12개월. 지방 지역에서 정해진 일을 하면 2차, 일부 경우 3차까지 연장 가능.",
    },
    workRights: {
      en: "Full-time work with any one employer for up to 6 months. Can do 3 months specified work to qualify for a second-year visa.",
      ko: "한 고용주와 최대 6개월까지 전일제 근무 가능. 지방 지정 업무 3개월을 수행하면 2차 비자 자격 획득.",
    },
    studyRights: {
      en: "Up to 4 months of study allowed during the visa period.",
      ko: "비자 기간 중 최대 4개월까지 수학 가능.",
    },
    cost: {
      en: "Main applicant: AUD 650 (as of 2024).",
      ko: "본인 신청비: 650 AUD (2024년 기준).",
    },
    processingTime: {
      en: "Often days to a few weeks if all documents are in order. Apply online via ImmiAccount.",
      ko: "서류가 완비되면 며칠에서 몇 주 내 처리. ImmiAccount에서 온라인 신청.",
    },
    keyRequirements: [
      {
        en: "Hold a passport from an eligible country (Korea is eligible).",
        ko: "대상국(한국 포함) 여권 소지.",
      },
      {
        en: "Be 18–30 years old at time of application (some nationalities up to 35).",
        ko: "신청 시 18–30세 (일부 국적 35세까지).",
      },
      {
        en: "Have not previously held a Working Holiday visa (for first application).",
        ko: "이전에 워킹홀리데이 비자를 소지한 적이 없을 것 (최초 신청 기준).",
      },
      {
        en: "Have enough funds (typically AUD 5,000+) and a return ticket or sufficient funds to leave.",
        ko: "충분한 자금(통상 5,000 AUD 이상)과 귀국 항공권 또는 귀국 가능 자금 보유.",
      },
    ],
    steps: [
      {
        en: "Create an ImmiAccount on the Home Affairs website.",
        ko: "호주 이민부 웹사이트에서 ImmiAccount 만들기.",
      },
      {
        en: "Complete the subclass 417 application form online.",
        ko: "서브클래스 417 신청서를 온라인으로 작성.",
      },
      {
        en: "Upload supporting documents: passport bio page, proof of funds, return ticket evidence.",
        ko: "여권 정보 페이지, 자금 증명, 귀국 항공권 증빙 등 서류 업로드.",
      },
      {
        en: "Pay the application fee and biometrics fee if requested.",
        ko: "신청비 및 필요 시 생체정보 수수료 결제.",
      },
      {
        en: "Wait for a decision, then enter Australia before the 'must arrive by' date.",
        ko: "결정을 기다린 뒤 ‘입국 마감일’ 전에 호주 입국.",
      },
    ],
    tips: [
      {
        en: "Apply from Korea before flying — you generally cannot apply onshore unless you hold another substantive visa.",
        ko: "출발 전 한국에서 신청. 다른 실체 비자가 없으면 호주境内에서는 신청 불가.",
      },
      {
        en: "Regional work (e.g. farming, mining, construction in approved postcodes) unlocks a second-year visa — many backpackers plan this early.",
        ko: "지방 근무(농업, 광업, 지정 지역의 건설 등)로 2년차 비자 가능 — 초반에 계획하는 백패커가 많음.",
      },
      {
        en: "6 months with one employer is the rule, not a guarantee — employers may offer shorter contracts.",
        ko: "한 고용주와 6개월은 규정상 한도이며, 고용주가 더 짧은 계약을 제안할 수도 있음.",
      },
      {
        en: "TFN (Tax File Number) is essential before your first paid shift — apply online for free the day you arrive.",
        ko: "첫 근무 전 TFN(세금번호) 필수 — 입국 당일 무료 온라인 신청 가능.",
      },
    ],
    pros: [
      {
        en: "Cheap to apply and fast to process.",
        ko: "신청비가 저렴하고 처리가 빠름.",
      },
      {
        en: "Flexible — you can travel, work, or both.",
        ko: "유연함 — 여행, 취업, 또는 병행 가능.",
      },
      {
        en: "Pathway to a second/third year via regional work.",
        ko: "지방 근무 시 2년/3년차 비자 길이 열림.",
      },
    ],
    cons: [
      {
        en: "Cannot stay with one employer more than 6 months (limits career-building roles).",
        ko: "한 고용주와 6개월 이상 근무 불가 (경력 쌓기 제한).",
      },
      {
        en: "No path to permanent residency directly from subclass 417.",
        ko: "서브클래스 417로 직접 영주권 취득 불가.",
      },
      {
        en: "Limited study time (4 months).",
        ko: "수학 기간 제한 (4개월).",
      },
    ],
    nextSteps: {
      en: "Check your eligibility, gather documents, and apply via ImmiAccount at least a few weeks before your planned travel date.",
      ko: "자격 요건을 확인하고 서류를 준비한 뒤, 출발일 최소 몇 주 전까지 ImmiAccount로 신청하세요.",
    },
    links: [
      {
        label: { en: "Official 417 visa page", ko: "공식 417 비자 안내" },
        href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
      },
      {
        label: { en: "ImmiAccount login", ko: "ImmiAccount 로그인" },
        href: "https://online.immi.gov.au/",
      },
    ],
  },

  {
    slug: "student-500",
    code: "subclass 500",
    name: {
      en: "Student visa (subclass 500)",
      ko: "학생 비자 (서브클래스 500)",
    },
    tagline: {
      en: "For international students enrolled in a full-time course at an Australian institution (university, VET, school, ELICOS).",
      ko: "호주의 정규 교육기관(대학교, VET, 학교, 어학연수 등)에서 전일제 과정을 수강하는 유학생을 위한 비자입니다.",
    },
    audience: {
      en: "Holders of an offer of full-time study from a CRICOS-registered course in Australia. All applicants must satisfy GTE (Genuine Temporary Entrant) requirements — that is true regardless of passport.",
      ko: "호주의 등록된 교육과정에 합격한 유학생. 한국 신청자는 GTE(진정 일시 입국자) 요건을 충족해야 함.",
    },
    duration: {
      en: "Matches course duration, typically 1–4 years plus a few weeks before/after.",
      ko: "과정 기간에 맞춰 부여되며 통상 1–4년, 개강 전·후 수 주 추가.",
    },
    workRights: {
      en: "Up to 48 hours per fortnight while course is in session; unlimited hours during official breaks.",
      ko: "학기 중 격주 48시간까지, 공식 방학 기간에는 무제한 근무 가능.",
    },
    studyRights: {
      en: "Must study full-time with the registered course provider. Enrolling at additional providers has limits.",
      ko: "등록된 교육기관에서 전일제 수강 필수. 타 기관 추가 수강에는 제한이 있음.",
    },
    cost: {
      en: "Main applicant: AUD 1,600 (as of 2024). Plus OSHC (health cover) — typically AUD 500+/year.",
      ko: "본인 신청비: 1,600 AUD (2024년 기준). OSHC(학생 의료보험) 별도 — 통상 500 AUD/년 이상.",
    },
    processingTime: {
      en: "Varies by sector and volume. Many student applications process in 4–6 weeks; plan ahead during peak months (Dec–Feb).",
      ko: "섹터와 신청량에 따라 상이. 다수는 4–6주 내 처리되며, 연말~2월 성수기에는 여유 있게 준비.",
    },
    keyRequirements: [
      {
        en: "Confirmation of Enrolment (CoE) from an Australian institution.",
        ko: "호주 교육기관 발행 입학허가서(CoE).",
      },
      {
        en: "English proficiency (IELTS/TOEFL/PTE — minimums vary by course).",
        ko: "영어 성적 (IELTS/TOEFL/PTE 등 — 과정별 최소 기준 상이).",
      },
      {
        en: "Genuine Temporary Entrant (GTE) statement explaining intent.",
        ko: "GTE(진정 일시 입국자) 진술서 제출.",
      },
      {
        en: "Overseas Student Health Cover (OSHC) for the visa period.",
        ko: "비자 기간 동안 유효한 OSHC(학생 의료보험) 가입.",
      },
      {
        en: "Proof of financial capacity and welfare arrangements (for minors).",
        ko: "재정 능력 증빙 및 미성년자의 경우 보호자·숙소 관련 서류.",
      },
    ],
    steps: [
      {
        en: "Apply and get accepted into a CRICOS-registered course.",
        ko: "CRICOS 등록된 과정에 지원하여 합격.",
      },
      {
        en: "Receive a CoE (Confirmation of Enrolment) from the institution.",
        ko: "교육기관으로부터 CoE(입학허가 확인서) 수령.",
      },
      {
        en: "Buy OSHC for the full visa period.",
        ko: "비자 기간 동안 OSHC 가입.",
      },
      {
        en: "Create an ImmiAccount, complete the subclass 500 application, upload documents.",
        ko: "ImmiAccount 생성 후 서브클래스 500 신청 작성·서류 업로드.",
      },
      {
        en: "Pay the fee, attend biometrics/health checks if requested, await decision.",
        ko: "수수료 결제, 필요 시 생체정보·건강검진, 결정 대기.",
      },
    ],
    tips: [
      {
        en: "Apply as early as possible — student visa volume spikes between December and February.",
        ko: "가능한 한 일찍 신청 — 12~2월에 학생 비자 신청이 폭증.",
      },
      {
        en: "GTE is a real filter, not a formality. Be specific about why this course, this provider, this career path.",
        ko: "GTE는 형식이 아닌 실질 심사. 왜 이 과정, 이 기관, 이 진로인지 구체적으로.",
      },
      {
        en: "If you plan to work part-time, the 48-hours-per-fortnight cap resets every two weeks, not monthly.",
        ko: "아르바이트 시 격주 48시간 한도는 매월이 아닌 격주 단위로 리셋.",
      },
      {
        en: "Switching institutions or courses is allowed but has rules — read them before you change.",
        ko: "기관·과정 변경은 가능하지만 규칙이 있음 — 변경 전에 반드시 확인.",
      },
    ],
    pros: [
      {
        en: "Lets you live, study, and work part-time in Australia legally.",
        ko: "호주에서 합법적으로 거주·수학·아르바이트 가능.",
      },
      {
        en: "Pathway to a Temporary Graduate visa (subclass 485) after graduation.",
        ko: "졸업 후 임시 졸업 비자(서브클래스 485) 자격.",
      },
      {
        en: "Family members can be included in some cases.",
        ko: "일부 경우 가족 동반 가능.",
      },
    ],
    cons: [
      {
        en: "Cost is high — tuition + OSHC + living expenses add up quickly.",
        ko: "비용 부담 큼 — 등록금 + OSHC + 생활비.",
      },
      {
        en: "Part-time work is capped, which can be tight during expensive cities like Sydney.",
        ko: "아르바이트 시간 제한 — 시드니 같은 고비용 도시에서는 빠듯.",
      },
      {
        en: "Requires genuine commitment to study — Home Affairs scrutinises academic progress.",
        ko: "학업에 대한 진정성 요구 — 호주 이민국은 학업 진척도를 점검.",
      },
    ],
    nextSteps: {
      en: "Pick a CRICOS-registered course, get a CoE, secure OSHC, then lodge your 500 application via ImmiAccount.",
      ko: "CRICOS 등록 과정을 선택하고 CoE를 받은 뒤 OSHC를 준비한 다음, ImmiAccount로 500 비자를 신청하세요.",
    },
    links: [
      {
        label: { en: "Official 500 visa page", ko: "공식 500 비자 안내" },
        href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
      },
      {
        label: { en: "CRICOS registered institutions", ko: "CRICOS 등록 기관 검색" },
        href: "https://cricos.education.gov.au/",
      },
    ],
  },

  {
    slug: "skilled-189-190",
    code: "subclass 189 / 190",
    name: {
      en: "Skilled Independent (189) / Skilled Nominated (190)",
      ko: "기술 독립 이민 (189) / 기술 주주재 (190)",
    },
    tagline: {
      en: "Points-tested permanent residency visas for skilled workers in occupations on the relevant skilled occupation list.",
      ko: "관련 기술직업 목록에 있는 직업을 가진 숙련 노동자를 위한 점수제 영주권 비자입니다.",
    },
    audience: {
      en: "Skilled workers under 45 with recognised qualifications, English ability, and a points-eligible occupation on the skilled occupation list.",
      ko: "45세 미만의 숙련 노동자로, 공인 자격증·영어 능력·기술직업 목록상 점수 인정 직종 보유자.",
    },
    duration: {
      en: "Permanent residency (5-year travel facility, renewable).",
      ko: "영주권 (5년 여행 시설, 갱신 가능).",
    },
    workRights: {
      en: "Unrestricted work and study rights; live anywhere in Australia; access to Medicare.",
      ko: "근무·수학 제한 없음. 호주 내 어디든 거주 가능. 메디케어 이용 가능.",
    },
    studyRights: {
      en: "No study restrictions.",
      ko: "수학 제한 없음.",
    },
    cost: {
      en: "Main applicant: AUD 4,640. Plus skills assessment, English test, and (for 190) state nomination fees.",
      ko: "본인 신청비: 4,640 AUD. 기술 평가, 영어 시험, (190의 경우) 주정부 nomination 수수료 별도.",
    },
    processingTime: {
      en: "Skilled visa processing varies by invitation round and queue. Expect months — sometimes over a year — for finalisation.",
      ko: "기술 비자 처리는 초대 라운드와 대기열에 따라 변동. 최종 결정까지 수개월~1년 이상 가능.",
    },
    keyRequirements: [
      {
        en: "SkillSelect Expression of Interest (EOI) with at least 65 points (most invitations go to 80+).",
        ko: "SkillSelect 의사표명(EOI) 제출, 최소 65점 (대부분 80점 이상 초대).",
      },
      {
        en: "Positive skills assessment from the relevant assessing authority.",
        ko: "해당 평가기관의 기술 평가 통과.",
      },
      {
        en: "Competent English (IELTS 6 each band minimum; higher for more points).",
        ko: "Competent 이상 영어 (IELTS 각 밴드 6.0 이상, 고득점 시 추가 점수).",
      },
      {
        en: "Age under 45 at time of invitation.",
        ko: "초대 시점 45세 미만.",
      },
      {
        en: "For 190: nomination from an Australian state/territory government.",
        ko: "190의 경우 호주 주·준주 정부의 nomination 필요.",
      },
    ],
    steps: [
      {
        en: "Confirm your occupation is on the relevant skilled occupation list (MLTSSL for 189, additional lists for 190).",
        ko: "관련 기술직업 목록(189는 MLTSSL, 190은 추가 목록 포함)에 본인 직업이 있는지 확인.",
      },
      {
        en: "Get a positive skills assessment from the relevant authority.",
        ko: "해당 평가기관에서 기술 평가 통과.",
      },
      {
        en: "Take an English test (IELTS/PTE/TOEFL).",
        ko: "영어 시험 응시 (IELTS/PTE/TOEFL).",
      },
      {
        en: "Submit an Expression of Interest (EOI) in SkillSelect.",
        ko: "SkillSelect에서 의사표명(EOI) 제출.",
      },
      {
        en: "Wait for an invitation to apply; for 190, apply for state nomination first.",
        ko: "초대 대기. 190은 먼저 주정부 nomination 신청.",
      },
      {
        en: "Lodge the visa application within the deadline, upload documents, attend health/character checks.",
        ko: "기한 내 비자 신청, 서류 업로드, 건강·신원 조회.",
      },
    ],
    tips: [
      {
        en: "Points matter a lot — maximising English (PTE/IELTS) and qualifications is often the highest-ROI move.",
        ko: "점수가 가장 중요. 영어·자격 점수 극대화가 ROI 가장 큼.",
      },
      {
        en: "189 invitations typically require 80+ points in current rounds; 190 is more accessible but locks you to a state.",
        ko: "현재 189 초대 라운드는 80점 이상 필요. 190은 진입이 쉽지만 주 거주 의무.",
      },
      {
        en: "Skilled occupation lists and points tables change every year — always check the latest Home Affairs updates.",
        ko: "기술직업 목록과 점수표는 매년 변경 — 호주 이민국 최신 공지 반드시 확인.",
      },
      {
        en: "Skills assessments have strict evidence rules (reference letters, payslips, qualifications) — start collecting early.",
        ko: "기술 평가는 증빙 규칙이 엄격 (추천서, 급여명세서, 자격증) — 일찍 수집 시작.",
      },
    ],
    pros: [
      {
        en: "Permanent residency with full rights and Medicare.",
        ko: "메디케어 포함 완전한 영주권.",
      },
      {
        en: "Citizenship pathway after 4 years of residence.",
        ko: "4년 거주 후 시민권 신청 가능.",
      },
      {
        en: "No employer or state tie required for 189.",
        ko: "189는 고용주·주정부 의존 없음.",
      },
    ],
    cons: [
      {
        en: "Highly competitive — points cut-offs can be 85+ for some occupations.",
        ko: "경쟁 치열 — 일부 직업은 85점 이상 필요.",
      },
      {
        en: "Long processing times and policy changes can disrupt plans.",
        ko: "처리 시간 길고 정책 변동 리스크.",
      },
      {
        en: "190 ties you to a nominating state for at least 2 years.",
        ko: "190은 최소 2년 nomination 주 거주 의무.",
      },
    ],
    nextSteps: {
      en: "Confirm your occupation is on the list, book a skills assessment, sit an English test, and prepare your EOI.",
      ko: "본인 직업이 목록에 있는지 확인하고, 기술 평가를 신청하며, 영어 시험에 응시한 뒤 EOI를 준비하세요.",
    },
    links: [
      {
        label: { en: "Skilled occupation lists", ko: "기술직업 목록" },
        href: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list",
      },
      {
        label: { en: "SkillSelect", ko: "SkillSelect" },
        href: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect",
      },
      {
        label: { en: "Find a MARA agent", ko: "MARA 등록 대행인 검색" },
        href: "https://www.mara.gov.au/",
      },
    ],
  },

  {
    slug: "partner-820-801",
    code: "subclass 820 / 801",
    name: {
      en: "Partner visa (subclass 820 / 801)",
      ko: "파트너 비자 (서브클래스 820/801)",
    },
    tagline: {
      en: "For partners (married or de facto) of Australian citizens, permanent residents, or eligible New Zealand citizens.",
      ko: "호주 시민, 영주권자 또는 자격 있는 뉴질랜드 시민의 배우자(사실혼 포함)를 위한 비자입니다.",
    },
    audience: {
      en: "Spouses or de facto partners in a genuine and ongoing relationship with an eligible Australian sponsor.",
      ko: "자격 있는 호주 보증인과 진정하며 지속적 관계에 있는 배우자 또는 사실혼 파트너.",
    },
    duration: {
      en: "Two-stage visa: 820 is a temporary visa leading to 801 permanent residency (usually after 2 years).",
      ko: "2단계 비자: 820(임시) → 801(영주권, 통상 2년 후).",
    },
    workRights: {
      en: "Full work and study rights in Australia from grant of 820.",
      ko: "820 부여 시점부터 호주 내 완전한 근무·수학 권한.",
    },
    studyRights: {
      en: "Unrestricted study rights.",
      ko: "수학 제한 없음.",
    },
    cost: {
      en: "From AUD 8,850 (applicant only, as of 2024). Higher fees apply if applying from outside Australia.",
        ko: "본인 신청 기준 8,850 AUD부터 (2024년 기준). 호주境外 신청 시 수수료 더 높음.",
    },
    processingTime: {
      en: "820 is often finalised within 12–24 months. 801 assessment typically begins 2 years after 820 grant.",
      ko: "820은 통상 12–24개월 내 결정. 801 평가는 820 부여 후 2년부터 시작.",
    },
    keyRequirements: [
      {
        en: "Be in a genuine and ongoing relationship with an Australian citizen, PR, or eligible NZ citizen.",
        ko: "호주 시민·영주권자·자격 있는 NZ 시민과 진정한 지속적 관계.",
      },
      {
        en: "Have been in the relationship for at least 12 months (or 2 years for de facto — some exemptions apply).",
        ko: "최소 12개월 이상 관계 (사실혼은 2년 — 일부 면제 있음).",
      },
      {
        en: "Live together or have a genuine commitment (with evidence).",
        ko: "동거 또는 진정한 동거 의지 (증빙 필요).",
      },
      {
        en: "Be onshore when 820 is granted (820/801 must be applied for onshore; offshore applicants use 309/100).",
        ko: "820 부여 시점에 호주境内 체류 (해외 신청은 309/100 비자 사용).",
      },
    ],
    steps: [
      {
        en: "Gather evidence of your relationship (joint leases, photos, communication history, joint finances, statements).",
        ko: "관계 증빙 수집 (공동 임대차, 사진, 연락 기록, 공동 재정, 진술서).",
      },
      {
        en: "Sponsor applies for approval; you lodge the combined 820/801 application.",
        ko: "보증인이 sponsor 승인을 받고, 본인이 820/801 통합 비자 신청.",
      },
      {
        en: "Undergo health examinations and police checks.",
        ko: "건강검진 및 경찰 신원 조회.",
      },
      {
        en: "Wait for 820 decision; after the relationship-period threshold, 801 is assessed.",
        ko: "820 결정 대기, 관계 유지 기간 충족 후 801 평가.",
      },
    ],
    tips: [
      {
        en: "Evidence quality beats volume. Photos, chats, and shared bills across many months read stronger than 50 screenshots from one weekend.",
        ko: "증빙은 양보다 질. 주말 50장 스크린샷보다 수개월간의 사진·대화·공동 청구서가 더 설득력 있음.",
      },
      {
        en: "If you are offshore, you usually need subclass 309/100 (not 820/801) — many people apply onshore first to use 820.",
        ko: "해외에 있으면 통상 309/100 사용 (820/801 아님) — 820을 위해 우선 호주로 입국하는 경우 많음.",
      },
      {
        en: "Bridging visas will keep you lawful while 820 is processing — do not let your current visa lapse.",
        ko: "820 처리 중 브리징 비자로 합법 체류 유지 — 현 비자 만료 주의.",
      },
    ],
    pros: [
      {
        en: "Path to permanent residency without points test or occupation list.",
        ko: "점수제·직업 목록 없이 영주권 도달.",
      },
      {
        en: "Work rights from day one of 820.",
        ko: "820 부여 즉시 근무 가능.",
      },
      {
        en: "Children can be included in the application.",
        ko: "자녀 동반 신청 가능.",
      },
    ],
    cons: [
      {
        en: "Expensive — among the costliest partner visas worldwide.",
        ko: "비자 비용이 매우 높음.",
      },
      {
        en: "Long, stressful processing with extensive evidence requirements.",
        ko: "처리 기간 길고 증빙 요구 엄격.",
      },
      {
        en: "Relationships break down mid-process — applicants must notify Home Affairs.",
        ko: "처리 중 관계가 깨지면 호주 이민국에 통보 의무.",
      },
    ],
    nextSteps: {
      en: "Start collecting relationship evidence, ensure you and your sponsor are both eligible, and plan to be onshore for the 820 stage.",
      ko: "관계 증빙을 모으고 본인·보증인 자격을 확인한 뒤, 820 단계를 위해 호주境内에 있을 계획을 세우세요.",
    },
    links: [
      {
        label: { en: "Official partner visa page", ko: "공식 파트너 비자 안내" },
        href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/partner-onshore-820-801",
      },
    ],
  },

  {
    slug: "visitor-600-601-651",
    code: "subclass 600 / 601 / 651",
    name: {
      en: "Visitor visas (subclasses 600, 601, 651)",
      ko: "방문자 비자 (서브클래스 600/601/651)",
    },
    tagline: {
      en: "Short-stay visas for tourism, visiting family, or short business trips. eVisitor (651) is available to many European and select Asia-Pacific passport holders for short visits — check your passport on the Home Affairs tool below.",
      ko: "관광·가족 방문·단기 출장을 위한 단기 체류 비자. 한국인은 단기 방문 시 eVisitor(651) 자주 이용.",
    },
    audience: {
      en: "Tourists, family visitors, and short-term business travellers. The right subclass depends on your passport — passport holders from the EU, UK, USA, Canada, Korea, Japan, Singapore, and many more are eligible for either eVisitor (651) for short visits (typically up to 90 days per visit) or Visitor visa (600) for longer or multiple-entry stays.",
      ko: "관광객, 가족 방문객, 단기 출장자. 한국 여권 소지자는 1회 최대 90일 eVisitor(651) 또는 장기/복수 입국 시 Visitor 비자(600) 이용 가능.",
    },
    duration: {
      en: "651: up to 90 days per visit. 600: typically 3, 6, or 12 months, single or multiple entry.",
      ko: "651: 방문당 최대 90일. 600: 통상 3·6·12개월, 단수/복수 입국.",
    },
    workRights: {
      en: "No work permitted on any visitor visa subclass.",
      ko: "모든 방문자 비자에서 근무 불가.",
    },
    studyRights: {
      en: "Limited study up to 3 months is generally allowed on 600 (subject to conditions).",
      ko: "600은 조건부로 최대 3개월 수학 가능.",
    },
    cost: {
      en: "651: free. 600: AUD 200+ depending on stream and length.",
      ko: "651: 무료. 600: 종류·기간에 따라 200 AUD 이상.",
    },
    processingTime: {
      en: "651: often granted within minutes to days. 600: days to weeks depending on volume and stream.",
      ko: "651: 통상 수 분~수 일 내 부여. 600: 종류·신청량에 따라 수 일~수 주.",
    },
    keyRequirements: [
      {
        en: "Genuine visitor — temporary stay with intent to return home.",
        ko: "진정한 방문 목적 — 호주 임시 체류 후 귀국 의지.",
      },
      {
        en: "Sufficient funds for the trip and onward/return ticket.",
        ko: "여행 및 귀국 항공권에 충분한 자금.",
      },
      {
        en: "Meet health and character requirements (varies by stay length and nationality).",
        ko: "건강·신원 요건 충족 (체류 기간·국적에 따라 상이).",
      },
      {
        en: "651: must be outside Australia and hold an eligible passport (check the tool linked above — many EU, UK, US, and APEC passport holders qualify, alongside Korean and other Asian passports).",
        ko: "651: 호주境外에 있으며 대상국(한국 포함) 여권 소지.",
      },
    ],
    steps: [
      {
        en: "Decide which subclass fits: 651 for short trips, 600 for longer/multi-entry.",
        ko: "어떤 서브클래스가 맞는지 결정: 단기는 651, 장기/복수는 600.",
      },
      {
        en: "Apply online via ImmiAccount (651) or the relevant Visitor visa application (600).",
        ko: "ImmiAccount(651) 또는 Visitor 비자(600) 신청 페이지에서 온라인 신청.",
      },
      {
        en: "Upload identity, financial, and travel evidence; pay the fee if applicable.",
        ko: "신원·재정·여행 증빙 업로드, 수수료 결제(해당 시).",
      },
      {
        en: "Wait for the decision; check the visa grant notice for conditions (e.g. no work).",
        ko: "결정 대기. 비자 부여 통지에서 조건(근무 금지 등) 확인.",
      },
    ],
    tips: [
      {
        en: "651 is free and faster — start there for short visits under 90 days.",
        ko: "651은 무료·신속. 90일 미만 단기 방문은 우선 시도.",
      },
      {
        en: "Always carry evidence of your return ticket, accommodation, and ties to Korea (job, family, property).",
        ko: "귀국 항공권, 숙소, 한국과의 연결고리(직장·가족·자산) 증빙 항상 지참.",
      },
      {
        en: "No work means no work — even unpaid 'helping out' at a relative's business is risky.",
        ko: "근무 불가의 의미는 무급이라도 근무는 안 됨 — 친척 사업장 도움도 리스크.",
      },
    ],
    pros: [
      {
        en: "651 is free and quick to obtain.",
        ko: "651은 무료·신속.",
      },
      {
        en: "600 offers flexibility for longer or repeated visits.",
        ko: "600은 장기·반복 방문에 유연.",
      },
      {
        en: "No sponsorship required for most streams.",
        ko: "대부분 보증인 불필요.",
      },
    ],
    cons: [
      {
        en: "Cannot work on any visitor visa.",
        ko: "방문자 비자에서는 근무 불가.",
      },
      {
        en: "Genuine visitor test is scrutinised at the border — officials may ask questions on arrival.",
        ko: "입국 심사 시 진정성 확인 — 입국 심사관에게 질문 받을 수 있음.",
      },
      {
        en: "Long stays may require health examinations.",
        ko: "장기 체류 시 건강검진 요구 가능.",
      },
    ],
    nextSteps: {
      en: "Pick the right subclass (651 for short, 600 for longer), apply online via ImmiAccount, and carry supporting documents when you travel.",
      ko: "서브클래스(단기는 651, 장기는 600)를 정하고 ImmiAccount로 온라인 신청한 뒤, 여행 시 관련 서류를휴대하세요.",
    },
    links: [
      {
        label: { en: "eVisitor (651) information", ko: "eVisitor(651) 안내" },
        href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651",
      },
      {
        label: { en: "Visitor visa (600) information", ko: "Visitor 비자(600) 안내" },
        href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600",
      },
    ],
  },
];

export function getVisa(slug: string): Visa | undefined {
  return visas.find((v) => v.slug === slug);
}

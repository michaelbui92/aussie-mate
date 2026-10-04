// Search index for the site search modal.
// Lazy-loaded via dynamic import — keeps the initial bundle small.
// Edit this file to add new entries (one per page/section, matching en/ko keywords).

export interface SearchResult {
  page: string;
  pageKo: string;
  href: string;
  section?: string;
  sectionKo?: string;
  matches: { en: string; ko: string; ja?: string; zh?: string };
}

export const searchIndex: SearchResult[] = [
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "visa, visa situation, visa status, work rights, student visa, working holiday, 40 hours, 20 hours, tax file number", ja: "ビザ、ビザの状況、就労権、学生ビザ、ワーキングホリデー、40時間、20時間、タックスファイルナンバー", zh: "签证、签证情况、工作权利、学生签证、打工度假、40小时、20小时、税号", ko: "비자, 비자 상황, 취업 권리, 학생 비자, 워킹홀리디, 취업 시간 제한" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "Medicare, healthcare, bulk billing, doctor, hospital, medical, clinic", ja: "メディケア、医療、バルクビリング、医師、病院、医療、クリニック", zh: "Medicare、医疗、统一计费、医生、医院、医疗、诊所", ko: "메디케어, 의료, 벌크 빌링, 병원, 의사, 치료" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "bond, rental bond, deposit, rent, landlord, tenant, lease, rental application", ja: "ボンド、賃貸保証金、敷金、家賃、大家、借主、賃貸契約、賃貸申込", zh: "押金、租房押金、定金、房租、房东、租客、租约、租房申请", ko: "보증금, 임대차, 임차인, 임대인, 임대 계약, 임대 지원" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "tax, TFN, tax file number, ATO, tax return, PAYG", ja: "税金、TFN、タックスファイルナンバー、ATO、確定申告、PAYG", zh: "税、TFN、税号、ATO、报税、PAYG", ko: "세금, TFN, 세금 파일 번호, 세금 신고" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "bank, bank account, open account, transfer money, BPAY, international transfer", ja: "銀行、口座、口座開設、送金、BPAY、海外送金", zh: "银行、银行账户、开户、转账、BPAY、国际汇款", ko: "은행, 계좌, 계좌 개설, 송금, BPAY" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "group assignment, group work, group project, team work, presentation, collaboration", ja: "グループ課題、グループワーク、グループプロジェクト、チームワーク、プレゼンテーション、協働", zh: "小组作业、小组工作、小组项目、团队合作、演示、协作", ko: "그룹 과제, 그룹 프로젝트, 팀워크, 프레젠테이션" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "opportunity, good deal, bargain, value for money, affordable, rip off, overpriced", ja: "お得、良い取引、バーゲン、コスパの良さ、手頃な価格、ぼったくり、割高", zh: "划算、好交易、便宜货、物有所值、价格实惠、宰客、定价过高", ko: "기회, 좋은 거래, 절약, 가성비" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "university, lecture, tutorial, assignment, exam, GPA, grade, semester, enrollment", ja: "大学、講義、チュートリアル、課題、試験、GPA、成績、学期、履修登録", zh: "大学、讲座、辅导课、作业、考试、GPA、成绩、学期、入学注册", ko: "대학교, 강의, 튜토리얼, 과제, 시험, 성적, GPA" },
  },
  {
    page: "Aussie English",
    pageKo: "호주 영어",
    href: "/aussie-english",
    matches: { en: "opposite, different, opposite of, not the same, different from", ja: "正反対、違う、〜の反対、同じではない、〜と異なる", zh: "相反、不同、……的对立面、不一样、与……不同", ko: "정반대, 반대, 다르다" },
  },

  // Workplace
  {
    page: "Workplace",
    pageKo: "직장",
    href: "/workplace",
    section: "Employment Rights",
    sectionKo: "취업 권리",
    matches: { en: "minimum wage, Award wage, pay, salary, superannuation, super, paid break, overtime, penalty rates, tax, TFN, PAYG", ja: "最低賃金、アワード賃金、給与、給料、退職年金（スーパー）、スーパー、有給休憩、残業、割増賃金、税金、TFN、PAYG", zh: "最低工资、行业标准工资、薪酬、薪水、养老金（super）、养老金、带薪休息、加班、加班费、税、TFN、PAYG", ko: "최저 임금, 임금, 급여, 퇴직금, 휴식 시간, 야간 수당, 세금, TFN" },
  },
  {
    page: "Workplace",
    pageKo: "직장",
    href: "/workplace",
    section: "Employment Rights",
    sectionKo: "취업 권리",
    matches: { en: "visa, work rights, student visa, working holiday, 40 hours, work limit, 20 hours restriction", ja: "ビザ、就労権、学生ビザ、ワーキングホリデー、40時間、就労上限、20時間制限", zh: "签证、工作权利、学生签证、打工度假、40小时、工作上限、20小时限制", ko: "비자, 취업 권리, 학생 비자, 워킹홀리디, 취업 시간 제한" },
  },
  {
    page: "Workplace",
    pageKo: "직장",
    href: "/workplace",
    section: "First Week Tips",
    sectionKo: "첫째 주 팁",
    matches: { en: "first week, first day, start work, arrive, orientation, meet team, superannuation, TFN, bank account, ABN, ABN registration", ja: "最初の週、初日、仕事を始める、到着、オリエンテーション、チームと会う、退職年金、TFN、銀行口座、ABN、ABN登録", zh: "第一周、第一天、开始工作、抵达、入职介绍、与团队见面、养老金、TFN、银行账户、ABN、ABN注册", ko: "첫째 주, 첫날, 출근, 오리엔테이션, 팀 소개, 세금, 은행" },
  },
  {
    page: "Workplace",
    pageKo: "직장",
    href: "/workplace",
    section: "Fair Work",
    sectionKo: "공정 노동",
    matches: { en: "Fair Work, complain, workplace complaint, employment complaint, rights, unfair dismissal, discrimination, harassment, workcover", ja: "Fair Work、苦情、職場の苦情、雇用に関する苦情、権利、不当解雇、差別、ハラスメント、ワークカバー", zh: "公平工作委员会、投诉、职场投诉、雇佣投诉、权利、不当解雇、歧视、骚扰、工伤赔偿", ko: "공정 노동, 민원, 노동 분쟁, 해고, 차별, 괴롭힘" },
  },

  // Apartment
  {
    page: "Apartment Guide",
    pageKo: "임대 가이드",
    href: "/apartment",
    section: "Rental Application",
    sectionKo: "임대 지원",
    matches: { en: "rental application, apply for rental, 100 points ID, documents checklist, cover letter, rental history, landlord reference, proof of income, payslip, bond, advance rent", ja: "賃貸申込み、賃貸の申し込み、ID100ポイント、必要書類チェックリスト、カバーレター、賃貸履歴、大家の推薦、収入証明、給与明細、ボンド（敷金）、前払い家賃", zh: "租房申请、申请租房、100分身份证件、文件清单、说明信、租房历史、房东推荐、收入证明、工资单、押金、预付租金", ko: "임대 지원, 지원서, 신분증 100포인트, 소개서, 임대 이력, 소득 증명, 급여명세서, 보증금" },
  },
  {
    page: "Apartment Guide",
    pageKo: "임대 가이드",
    href: "/apartment",
    section: "Tenant Rights in NSW",
    sectionKo: "NSW 임차인 권리",
    matches: { en: "tenant rights, rent increase, repairs, entry notice, eviction, break lease, notice period, landlord obligations, 60 days notice, 90 days notice", ja: "借主の権利、家賃値上げ、修理、立ち入り通知、立ち退き、賃貸契約の解約、通知期間、大家の義務、60日前通知、90日前通知", zh: "租客权利、涨租、维修、进入通知、驱逐、提前解约、通知期、房东义务、60天通知、90天通知", ko: "임차인 권리, 임대료 인상, 수리, 입주 고지, 퇴거, 임대차 해지, 임대인 의무" },
  },
  {
    page: "Apartment Guide",
    pageKo: "임대 가이드",
    href: "/apartment",
    section: "Bills & Move-in Costs",
    sectionKo: "공과금 및 입주 비용",
    matches: { en: "move in costs, bills, electricity, gas, internet connection, utility connections, moving costs, contents insurance, bond, advance rent", ja: "入居費用、公共料金、電気、ガス、インターネット接続、公共料金の開設、引っ越し費用、家財保険、ボンド、前払い家賃", zh: "入住费用、账单、电费、燃气费、网络接入、公共设施开通、搬家费用、家庭财产保险、押金、预付租金", ko: "입주 비용, 공과금, 전기, 가스, 인터넷, 이동 비용, 보험, 보증금" },
  },
  {
    page: "Apartment Guide",
    pageKo: "임대 가이드",
    href: "/apartment",
    section: "Red Flags to Watch",
    sectionKo: "주의해야 할 위험 신호",
    matches: { en: "red flags, scam, warning signs, fake listing, cash only, no lease, too cheap, pressure to pay, won't meet in person", ja: "危険信号、詐欺、警告サイン、偽の物件情報、現金のみ、契約書なし、安すぎる、支払いを急かす、対面を拒む", zh: "危险信号、诈骗、预警迹象、虚假房源、只收现金、没有租约、价格过低、催你付款、拒绝当面见面", ko: "위험 신호, 사기, 경고 표시, 가짜 광고, 현금만, 계약서 없음" },
  },

  // Study
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Aussie Uni Culture",
    sectionKo: "호주 대학 문화",
    matches: { en: "university culture, lectures, tutorials, group work, participation mark, self-directed learning, study load, lecture recording", ja: "大学文化、講義、チュートリアル、グループワーク、参加点、自主学習、学習負荷、講義の録画", zh: "大学文化、讲座、辅导课、小组作业、参与分、自主学习、学习负担、讲座录像", ko: "대학 문화, 강의, 튜토리얼, 그룹 작업, 참여 점수, 자율 학습" },
  },
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Talking to Professors",
    sectionKo: "교수님과 대화하기",
    matches: { en: "professor, lecturer, email etiquette, office hours, ask for extension, academic help, assignment extension, defer exam", ja: "教授、講師、メールのマナー、オフィスアワー、延長を頼む、学業サポート、課題の延長、試験の延期", zh: "教授、讲师、邮件礼仪、答疑时间、申请延期、学业帮助、作业延期、考试缓考", ko: "교수, 이메일 예절, 오피스 아워, 연기 요청, 학술 도움" },
  },
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Academic Integrity",
    sectionKo: "학술 무결성",
    matches: { en: "plagiarism, AI, ChatGPT, referencing, Turnitin, academic misconduct, cheat, citation, cite source, self-plagiarism, contract cheating", ja: "剽窃、AI、ChatGPT、参考文献の記載、Turnitin、学問的不正、カンニング、引用、出典を引用する、自己剽窃、代行不正", zh: "抄袭、AI、ChatGPT、参考文献引用、Turnitin、学术不端、作弊、引用、标注出处、自我抄袭、代写作弊", ko: "표절, AI, ChatGPT, 인용, 학문 부정, 부정행위, 자기 표절" },
  },
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Special Consideration",
    sectionKo: "특별 고려",
    matches: { en: "special consideration, extension on assignment, deferred exam, illness, mental health, compassionate circumstances, withdraw from subject, census date", ja: "特別配慮、課題の延長、試験の延期、病気、メンタルヘルス、やむを得ない事情、科目の取り消し、センサス日", zh: "特殊照顾、作业延期、考试缓考、疾病、心理健康、情有可原的情况、退课、统计截止日", ko: "특별 고려, 연기, 시험 연기, 질병, 정신 건강, 철회" },
  },
  {
    page: "Study",
    pageKo: "학습",
    href: "/study",
    section: "Grades Explained",
    sectionKo: "성적 체계 이해",
    matches: { en: "grades, GPA, HD, DN, CR, P, fail, pass, credit, distinction, high distinction, grading scale, grading system, WAM, weighted average", ja: "成績、GPA、HD、DN、CR、P、不合格、合格、クレジット、ディスティンクション、ハイディスティンクション、評価基準、評価制度、WAM、加重平均", zh: "成绩、GPA、HD、DN、CR、P、不及格、及格、良好、优秀、特优、评分标准、评分制度、WAM、加权平均", ko: "성적, GPA, HD, DN, CR, P, 낙제, 통과, 크레딧, 마크" },
  },

  // Tourist
  {
    page: "Tourist",
    pageKo: "여행자",
    href: "/tourist",
    section: "Getting Around",
    sectionKo: "시드니 이동",
    matches: { en: "Opal card, train, bus, ferry, light rail, transport, peak hour, off-peak, Sydney transport, go card, Sydney trains, Sydney buses, Sydney ferries, tap on, tap off", ja: "オパールカード、電車、バス、フェリー、ライトレール、交通、ピーク時、オフピーク、シドニーの交通、goカード、シドニー鉄道、シドニーのバス、シドニーのフェリー、タッチオン、タッチオフ", zh: "澳宝卡、火车、公交车、渡轮、轻轨、交通、高峰时段、非高峰、悉尼交通、go卡、悉尼火车、悉尼公交、悉尼渡轮、刷卡进站、刷卡出站", ko: "오팔 카드, 기차, 버스, 페리, 경전철, 교통, 피크, 오프피크" },
  },
  {
    page: "Tourist",
    pageKo: "여행자",
    href: "/tourist",
    section: "Top 10 Sydney Must-Sees",
    sectionKo: "시드니 꼭 가볼 10곳",
    matches: { en: "Sydney Opera House, Harbour Bridge, Bondi Beach, Blue Mountains, Manly Beach, Taronga Zoo, Royal Botanic Garden, The Rocks, tourist attractions, sightseeing, circular quay", ja: "シドニー・オペラハウス、ハーバーブリッジ、ボンダイビーチ、ブルー・マウンテンズ、マンリービーチ、タロンガ動物園、ロイヤル・ボタニック・ガーデン、ザ・ロックス、観光名所、観光、サーキュラー・キー", zh: "悉尼歌剧院、海港大桥、邦迪海滩、蓝山、曼利海滩、塔龙加动物园、皇家植物园、岩石区、旅游景点、观光、环形码头", ko: "시드니 오페라 하우스, 하버 브릿지, 본디 비치, 블루 마운틴, 맨리 비치, 타롱가 동물원, 식물원, 관광지" },
  },
  {
    page: "Tourist",
    pageKo: "여행자",
    href: "/tourist",
    section: "Budget Tips",
    sectionKo: "예산 팁",
    matches: { en: "budget, cheap, affordable, free attractions, Opal daily cap, weekly cap, Wednesday discount, concession card, student discount, free things to do in Sydney", ja: "予算、安い、手頃な、無料の観光スポット、オパールの1日上限、週間上限、水曜日の割引、コンセッションカード、学生割引、シドニーで無料でできること", zh: "预算、便宜、实惠、免费景点、澳宝卡单日上限、每周上限、周三折扣、优惠卡、学生折扣、悉尼免费活动", ko: "예산, 저렴한, 무료 관광지, 오팔 상한, 학생 할인" },
  },
  {
    page: "Tourist",
    pageKo: "여행자",
    href: "/tourist",
    section: "Safety Tips",
    sectionKo: "안전 팁",
    matches: { en: "safety, beach safety, sun protection, sunscreen, SPF, sharks, snakes, wildlife, first aid, emergency, rip current, swim between flags", ja: "安全、ビーチの安全、紫外線対策、日焼け止め、SPF、サメ、ヘビ、野生動物、応急処置、緊急、離岸流、旗の間で泳ぐ", zh: "安全、海滩安全、防晒、防晒霜、SPF、鲨鱼、蛇、野生动物、急救、紧急情况、离岸流、在旗帜之间游泳", ko: "안전, 비치 안전, 자외선, 선크림, 상어, 뱀, 야생동물, 응급" },
  },

  // Resources
  {
    page: "Resources",
    pageKo: "자료",
    href: "/resources",
    section: "Government Services",
    sectionKo: "정부 서비스",
    matches: { en: "Medicare, Centrelink, myGov, TFN, ATO, Service NSW, Fair Trading, tax, visa, Centrelink payments, JobSeeker, Family Tax Benefit, Youth Allowance", ja: "メディケア、センタリンク、マイガバメント、TFN、ATO、サービスNSW、フェアトレーディング、税金、ビザ、センタリンク給付、JobSeeker、Family Tax Benefit、Youth Allowance", zh: "Medicare、Centrelink、myGov、TFN、ATO、Service NSW、公平交易署、税、签证、Centrelink补助、JobSeeker、家庭税收福利、青年津贴", ko: "메디케어, 센터링크, 마이갓, TFN, ATO, 서비스 NSW, 공정거래, 세금" },
  },
  {
    page: "Resources",
    pageKo: "자료",
    href: "/resources",
    section: "Education",
    sectionKo: "교육",
    matches: { en: "university, TAFE, Study NSW, UTS, UNSW, Macquarie, University of Sydney, course, vocational, study, postgraduate, undergraduate", ja: "大学、TAFE、Study NSW、UTS、UNSW、マッコーリー、シドニー大学、コース、職業教育、学習、大学院、学部", zh: "大学、TAFE、Study NSW、UTS、UNSW、麦考瑞、悉尼大学、课程、职业教育、学习、研究生、本科生", ko: "대학, TAFE, UTS, UNSW, 매쿼리, 시드니 대학교, 학과, 직업 교육" },
  },
  {
    page: "Resources",
    pageKo: "자료",
    href: "/resources",
    section: "Healthcare",
    sectionKo: "의료",
    matches: { en: "Medicare, bulk billing, clinic, GP, doctor, hospital, emergency, ER, urgent care, mental health, Beyond Blue, Lifeline, poisons information", ja: "メディケア、バルクビリング、クリニック、GP、医師、病院、緊急、救急、アージェントケア、メンタルヘルス、Beyond Blue、Lifeline、中毒情報", zh: "Medicare、全额报销、诊所、全科医生、医生、医院、急诊、急救、紧急护理、心理健康、Beyond Blue、Lifeline、中毒信息", ko: "메디케어, 벌크 빌링, 의원, 병원, 응급실, 응급 진료, 정신 건강" },
  },
  {
    page: "Resources",
    pageKo: "자료",
    href: "/resources",
    section: "Emergency Contacts",
    sectionKo: "비상 연락처",
    matches: { en: "emergency, 000, police, ambulance, fire brigade, SES, 132500, poisons information centre, 131126, Crime Stoppers, 1800333000, crisis support, Lifeline", ja: "緊急、000、警察、救急車、消防、SES、132500、中毒情報センター、131126、Crime Stoppers、1800333000、危機サポート、Lifeline", zh: "紧急、000、警察、救护车、消防队、SES、132500、中毒信息中心、131126、Crime Stoppers、1800333000、危机支持、Lifeline", ko: "비상, 000, 경찰, 구급차, 소방, 독극물, 위기" },
  },
];

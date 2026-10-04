// Bilingual visa guide data — for any visitor to Australia.
// General information only. Not immigration advice.
// Verify all details at the Department of Home Affairs: https://immi.homeaffairs.gov.au/
// For advice, consult a registered MARA agent: https://www.mara.gov.au/

export type Bilingual = { en: string; ko: string; ja?: string; zh?: string };

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
      en: "Working Holiday (subclass 417)", ja: "ワーキングホリデー（サブクラス417）", zh: "打工度假签证（417子类）",
      ko: "워킹홀리데이 (서브클래스 417)",
    },
    tagline: {
      en: "For young adults (18–30, or 35 for some countries) who want to holiday and work in Australia for up to a year.", ja: "最長1年間、オーストラリアで旅行と仕事を楽しみたい若者（18〜30歳、一部の国は35歳）向けです。", zh: "面向希望在澳大利亚度假并工作最长一年的年轻人（18–30岁，部分国家为35岁）。",
      ko: "최대 1년간 호주에서 여행과 일을 함께 즐기고 싶은 청년(18–30세, 일부 국적은 35세)을 위한 비자입니다.",
    },
    audience: {
      en: "Holders of eligible Working Holiday passports (Korea is one of around 19 participating countries) aged 18–30 at application — 35 for some nationalities. Check the Home Affairs tool below for your specific case.", ja: "対象となるワーキングホリデー対象国のパスポート保持者（韓国は約19の参加国のひとつ）で、申請時に18〜30歳 — 一部の国籍は35歳まで。ご自身のケースは下記のHome Affairsのツールで確認してください。", zh: "持有符合条件的打工度假护照者（韩国是约19个参与国之一），申请时年龄在18–30岁——部分国籍可达35岁。请使用下方内政部的工具查询你的具体情况。",
      ko: "유효한 한국 여권을 소지한 18–30세(일부 국적 35세) 한국 국민.",
    },
    duration: {
      en: "Up to 12 months from the date of first entry. Can extend to a second and (for some) third year via specified work in regional areas.", ja: "初回入国日から最長12か月。地方部での指定された仕事により、2年目、さらに（一部は）3年目まで延長できます。", zh: "自首次入境之日起最长12个月。通过在偏远地区从事指定工作，可延长至第二年，以及（部分人）第三年。",
      ko: "최초 입국일로부터 최대 12개월. 지방 지역에서 정해진 일을 하면 2차, 일부 경우 3차까지 연장 가능.",
    },
    workRights: {
      en: "Full-time work with any one employer for up to 6 months. Can do 3 months specified work to qualify for a second-year visa.", ja: "1つの雇用主とのフルタイム勤務は最長6か月まで。3か月の指定された仕事を行うと、2年目ビザの資格を得られます。", zh: "与任何单一雇主全职工作最长6个月。从事3个月的指定工作即可获得第二年签证资格。",
      ko: "한 고용주와 최대 6개월까지 전일제 근무 가능. 지방 지정 업무 3개월을 수행하면 2차 비자 자격 획득.",
    },
    studyRights: {
      en: "Up to 4 months of study allowed during the visa period.", ja: "ビザ期間中は最長4か月の就学が認められます。", zh: "签证期间允许最多4个月的学习。",
      ko: "비자 기간 중 최대 4개월까지 수학 가능.",
    },
    cost: {
      en: "Main applicant: AUD 650 (as of 2024).", ja: "本人申請者：650 AUD（2024年時点）。", zh: "主申请人：650 AUD（截至2024年）。",
      ko: "본인 신청비: 650 AUD (2024년 기준).",
    },
    processingTime: {
      en: "Often days to a few weeks if all documents are in order. Apply online via ImmiAccount.", ja: "書類がすべて整っていれば、多くの場合数日から数週間です。ImmiAccountでオンライン申請します。", zh: "如果所有文件齐备，通常需要几天到几周。通过ImmiAccount在线申请。",
      ko: "서류가 완비되면 며칠에서 몇 주 내 처리. ImmiAccount에서 온라인 신청.",
    },
    keyRequirements: [
      {
        en: "Hold a passport from an eligible country (Korea is eligible).", ja: "対象国のパスポートを保有していること（韓国は対象）。", zh: "持有符合条件国家的护照（韩国符合条件）。",
        ko: "대상국(한국 포함) 여권 소지.",
      },
      {
        en: "Be 18–30 years old at time of application (some nationalities up to 35).", ja: "申請時に18〜30歳であること（一部の国籍は35歳まで）。", zh: "申请时年满18–30岁（部分国籍可至35岁）。",
        ko: "신청 시 18–30세 (일부 국적 35세까지).",
      },
      {
        en: "Have not previously held a Working Holiday visa (for first application).", ja: "過去にワーキングホリデービザを取得したことがないこと（初回申請の場合）。", zh: "此前未曾持有打工度假签证（首次申请）。",
        ko: "이전에 워킹홀리데이 비자를 소지한 적이 없을 것 (최초 신청 기준).",
      },
      {
        en: "Have enough funds (typically AUD 5,000+) and a return ticket or sufficient funds to leave.", ja: "十分な資金（通常AUD 5,000以上）と、帰国便の航空券または出国するのに十分な資金があること。", zh: "拥有足够的资金（通常AUD 5,000以上），以及返程机票或足以离境的资金。",
        ko: "충분한 자금(통상 5,000 AUD 이상)과 귀국 항공권 또는 귀국 가능 자금 보유.",
      },
    ],
    steps: [
      {
        en: "Create an ImmiAccount on the Home Affairs website.", ja: "Home AffairsのウェブサイトでImmiAccountを作成します。", zh: "在内政部网站创建ImmiAccount。",
        ko: "호주 이민부 웹사이트에서 ImmiAccount 만들기.",
      },
      {
        en: "Complete the subclass 417 application form online.", ja: "サブクラス417の申請フォームをオンラインで記入します。", zh: "在线填写417子类申请表。",
        ko: "서브클래스 417 신청서를 온라인으로 작성.",
      },
      {
        en: "Upload supporting documents: passport bio page, proof of funds, return ticket evidence.", ja: "補足書類をアップロードします：パスポートの顔写真ページ、資金の証明、帰国便の証拠。", zh: "上传辅助文件：护照资料页、资金证明、返程机票凭证。",
        ko: "여권 정보 페이지, 자금 증명, 귀국 항공권 증빙 등 서류 업로드.",
      },
      {
        en: "Pay the application fee and biometrics fee if requested.", ja: "申請手数料を支払い、求められた場合は生体情報登録手数料も支払います。", zh: "支付申请费，如被要求还需支付生物识别信息费。",
        ko: "신청비 및 필요 시 생체정보 수수료 결제.",
      },
      {
        en: "Wait for a decision, then enter Australia before the 'must arrive by' date.", ja: "決定を待ち、その後「入国期限」までにオーストラリアへ入国します。", zh: "等待审批结果，然后在“必须入境截止日期”之前入境澳大利亚。",
        ko: "결정을 기다린 뒤 ‘입국 마감일’ 전에 호주 입국.",
      },
    ],
    tips: [
      {
        en: "Apply from Korea before flying — you generally cannot apply onshore unless you hold another substantive visa.", ja: "出発前に韓国から申請しましょう — 別の実体ビザを保有していない限り、通常はオーストラリア国内では申請できません。", zh: "在出发前从韩国申请——除非你持有其他实质性签证——否则通常不能在境内申请。",
        ko: "출발 전 한국에서 신청. 다른 실체 비자가 없으면 호주境内에서는 신청 불가.",
      },
      {
        en: "Regional work (e.g. farming, mining, construction in approved postcodes) unlocks a second-year visa — many backpackers plan this early.", ja: "地方部での仕事（例：指定郵便番号地域での農業、鉱業、建設）が2年目ビザへの道を開きます — 多くのバックパッカーは早い段階でこれを計画します。", zh: "偏远地区工作（例如在指定邮编地区的农业、采矿、建筑）可解锁第二年签证——许多背包客会早早规划这一点。",
        ko: "지방 근무(농업, 광업, 지정 지역의 건설 등)로 2년차 비자 가능 — 초반에 계획하는 백패커가 많음.",
      },
      {
        en: "6 months with one employer is the rule, not a guarantee — employers may offer shorter contracts.", ja: "1つの雇用主と6か月というのは規則であり、保証ではありません — 雇用主がより短い契約を提示することもあります。", zh: "与一个雇主工作6个月是规定，而非保证——雇主可能会提供更短的合同。",
        ko: "한 고용주와 6개월은 규정상 한도이며, 고용주가 더 짧은 계약을 제안할 수도 있음.",
      },
      {
        en: "TFN (Tax File Number) is essential before your first paid shift — apply online for free the day you arrive.", ja: "TFN（税務番号）は最初の有給の勤務の前に必須です — 到着した日にオンラインで無料申請しましょう。", zh: "在第一次带薪上班之前，TFN（税号）是必需的——抵达当天即可在线免费申请。",
        ko: "첫 근무 전 TFN(세금번호) 필수 — 입국 당일 무료 온라인 신청 가능.",
      },
    ],
    pros: [
      {
        en: "Cheap to apply and fast to process.", ja: "申請費用が安く、処理も速い。", zh: "申请费用低，处理速度快。",
        ko: "신청비가 저렴하고 처리가 빠름.",
      },
      {
        en: "Flexible — you can travel, work, or both.", ja: "柔軟 — 旅行も、仕事も、その両方も可能です。", zh: "灵活——你可以旅行、工作，或两者兼顾。",
        ko: "유연함 — 여행, 취업, 또는 병행 가능.",
      },
      {
        en: "Pathway to a second/third year via regional work.", ja: "地方部での仕事を通じて2年目／3年目への道が開きます。", zh: "通过偏远地区工作通往第二年／第三年。",
        ko: "지방 근무 시 2년/3년차 비자 길이 열림.",
      },
    ],
    cons: [
      {
        en: "Cannot stay with one employer more than 6 months (limits career-building roles).", ja: "1つの雇用主と6か月を超えて勤務することはできません（キャリア形成につながる職務が制限されます）。", zh: "不能与同一雇主工作超过6个月（限制了职业发展类的岗位）。",
        ko: "한 고용주와 6개월 이상 근무 불가 (경력 쌓기 제한).",
      },
      {
        en: "No path to permanent residency directly from subclass 417.", ja: "サブクラス417から直接永住権への道はありません。", zh: "无法从417子类直接通往永久居留。",
        ko: "서브클래스 417로 직접 영주권 취득 불가.",
      },
      {
        en: "Limited study time (4 months).", ja: "就学期間の制限（4か月）。", zh: "学习时间有限（4个月）。",
        ko: "수학 기간 제한 (4개월).",
      },
    ],
    nextSteps: {
      en: "Check your eligibility, gather documents, and apply via ImmiAccount at least a few weeks before your planned travel date.", ja: "資格を確認し、書類を用意して、予定している渡航日の少なくとも数週間前までにImmiAccountで申請しましょう。", zh: "确认你的资格、准备好文件，并在计划出行日期前至少几周通过ImmiAccount申请。",
      ko: "자격 요건을 확인하고 서류를 준비한 뒤, 출발일 최소 몇 주 전까지 ImmiAccount로 신청하세요.",
    },
    links: [
      {
        label: { en: "Official 417 visa page", ja: "公式417ビザページ", zh: "官方417签证页面", ko: "공식 417 비자 안내" },
        href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
      },
      {
        label: { en: "ImmiAccount login", ja: "ImmiAccountログイン", zh: "ImmiAccount登录", ko: "ImmiAccount 로그인" },
        href: "https://online.immi.gov.au/",
      },
    ],
  },

  {
    slug: "student-500",
    code: "subclass 500",
    name: {
      en: "Student visa (subclass 500)", ja: "学生ビザ（サブクラス500）", zh: "学生签证（500 子类）",
      ko: "학생 비자 (서브클래스 500)",
    },
    tagline: {
      en: "For international students enrolled in a full-time course at an Australian institution (university, VET, school, ELICOS).", ja: "オーストラリアの教育機関（大学、VET、学校、ELICOS）で全日制課程に在籍する留学生向けです。", zh: "适用于在澳大利亚教育机构（大学、VET、学校、ELICOS）就读全日制课程的国际学生。",
      ko: "호주의 정규 교육기관(대학교, VET, 학교, 어학연수 등)에서 전일제 과정을 수강하는 유학생을 위한 비자입니다.",
    },
    audience: {
      en: "Holders of an offer of full-time study from a CRICOS-registered course in Australia. All applicants must satisfy GTE (Genuine Temporary Entrant) requirements — that is true regardless of passport.", ja: "オーストラリアのCRICOS登録課程から全日制課程の入学許可を得ている人。すべての申請者はGTE（真の一時入国者）要件を満たす必要があります — これはパスポートに関係なく当てはまります。", zh: "持有澳大利亚CRICOS注册课程全日制学习录取通知的人。所有申请人都必须满足GTE（真实临时入境者）要求——无论持哪国护照都如此。",
      ko: "호주의 등록된 교육과정에 합격한 유학생. 한국 신청자는 GTE(진정 일시 입국자) 요건을 충족해야 함.",
    },
    duration: {
      en: "Matches course duration, typically 1–4 years plus a few weeks before/after.", ja: "課程の期間に合わせて付与され、通常1〜4年、前後に数週間が加わります。", zh: "与课程时长一致，通常为1–4年，另加开学前后数周。",
      ko: "과정 기간에 맞춰 부여되며 통상 1–4년, 개강 전·후 수 주 추가.",
    },
    workRights: {
      en: "Up to 48 hours per fortnight while course is in session; unlimited hours during official breaks.", ja: "授業期間中は2週間あたり最大48時間。公式な休暇期間中は時間無制限。", zh: "课程进行期间每两周最多48小时；官方假期期间工时不受限制。",
      ko: "학기 중 격주 48시간까지, 공식 방학 기간에는 무제한 근무 가능.",
    },
    studyRights: {
      en: "Must study full-time with the registered course provider. Enrolling at additional providers has limits.", ja: "登録された教育機関でフルタイムで学ぶ必要があります。追加の教育機関への在籍には制限があります。", zh: "必须在注册的课程提供机构进行全日制学习。在额外机构注册是有限制的。",
      ko: "등록된 교육기관에서 전일제 수강 필수. 타 기관 추가 수강에는 제한이 있음.",
    },
    cost: {
      en: "Main applicant: AUD 1,600 (as of 2024). Plus OSHC (health cover) — typically AUD 500+/year.", ja: "本人申請者：1,600 AUD（2024年時点）。さらにOSHC（医療保険）—通常年間500 AUD以上。", zh: "主申请人：1,600 AUD（截至2024年）。另加OSHC（医疗保险）——通常每年500 AUD以上。",
      ko: "본인 신청비: 1,600 AUD (2024년 기준). OSHC(학생 의료보험) 별도 — 통상 500 AUD/년 이상.",
    },
    processingTime: {
      en: "Varies by sector and volume. Many student applications process in 4–6 weeks; plan ahead during peak months (Dec–Feb).", ja: "セクターと申請量により異なります。多くの学生申請は4〜6週間で処理されます。繁忙期（12月〜2月）は余裕をもって準備しましょう。", zh: "因行业和申请量而异。许多学生申请在4至6周内处理完毕；在高峰期（12月至2月）请提前规划。",
      ko: "섹터와 신청량에 따라 상이. 다수는 4–6주 내 처리되며, 연말~2월 성수기에는 여유 있게 준비.",
    },
    keyRequirements: [
      {
        en: "Confirmation of Enrolment (CoE) from an Australian institution.", ja: "オーストラリアの教育機関発行の入学確認書（CoE）。", zh: "澳大利亚教育机构出具的入学确认书（CoE）。",
        ko: "호주 교육기관 발행 입학허가서(CoE).",
      },
      {
        en: "English proficiency (IELTS/TOEFL/PTE — minimums vary by course).", ja: "英語力（IELTS/TOEFL/PTE — 最低基準は課程により異なります）。", zh: "英语能力（IELTS/TOEFL/PTE——最低要求因课程而异）。",
        ko: "영어 성적 (IELTS/TOEFL/PTE 등 — 과정별 최소 기준 상이).",
      },
      {
        en: "Genuine Temporary Entrant (GTE) statement explaining intent.", ja: "意図を説明する真正一時滞在者（GTE）ステートメント。", zh: "解释意图的真实临时入境者（GTE）声明。",
        ko: "GTE(진정 일시 입국자) 진술서 제출.",
      },
      {
        en: "Overseas Student Health Cover (OSHC) for the visa period.", ja: "ビザ期間中の海外学生健康保険（OSHC）。", zh: "签证期间的海外学生健康保险（OSHC）。",
        ko: "비자 기간 동안 유효한 OSHC(학생 의료보험) 가입.",
      },
      {
        en: "Proof of financial capacity and welfare arrangements (for minors).", ja: "資金能力の証明および（未成年者の場合は）福祉・保護体制の証明。", zh: "经济能力证明以及（未成年人的）福利安排证明。",
        ko: "재정 능력 증빙 및 미성년자의 경우 보호자·숙소 관련 서류.",
      },
    ],
    steps: [
      {
        en: "Apply and get accepted into a CRICOS-registered course.", ja: "CRICOS登録課程に出願し、合格する。", zh: "申请并被CRICOS注册课程录取。",
        ko: "CRICOS 등록된 과정에 지원하여 합격.",
      },
      {
        en: "Receive a CoE (Confirmation of Enrolment) from the institution.", ja: "教育機関からCoE（入学確認書）を受け取る。", zh: "从教育机构获得CoE（入学确认书）。",
        ko: "교육기관으로부터 CoE(입학허가 확인서) 수령.",
      },
      {
        en: "Buy OSHC for the full visa period.", ja: "ビザ期間全体分のOSHCを購入する。", zh: "购买覆盖整个签证期间的OSHC。",
        ko: "비자 기간 동안 OSHC 가입.",
      },
      {
        en: "Create an ImmiAccount, complete the subclass 500 application, upload documents.", ja: "ImmiAccountを作成し、サブクラス500の申請を完了し、書類をアップロードする。", zh: "创建ImmiAccount，完成500子类申请，上传文件。",
        ko: "ImmiAccount 생성 후 서브클래스 500 신청 작성·서류 업로드.",
      },
      {
        en: "Pay the fee, attend biometrics/health checks if requested, await decision.", ja: "手数料を支払い、求められた場合は生体情報・健康診断を受け、決定を待つ。", zh: "支付费用，如被要求则进行生物识别/健康检查，等待决定。",
        ko: "수수료 결제, 필요 시 생체정보·건강검진, 결정 대기.",
      },
    ],
    tips: [
      {
        en: "Apply as early as possible — student visa volume spikes between December and February.", ja: "できるだけ早く申請しましょう — 12月から2月にかけて学生ビザの申請が急増します。", zh: "尽早申请——12月至2月期间学生签证申请量会激增。",
        ko: "가능한 한 일찍 신청 — 12~2월에 학생 비자 신청이 폭증.",
      },
      {
        en: "GTE is a real filter, not a formality. Be specific about why this course, this provider, this career path.", ja: "GTEは形式的なものではなく、実際の選別基準です。なぜこの課程、この教育機関、このキャリアパスなのかを具体的に説明しましょう。", zh: "GTE是真正的筛选，而非形式。请具体说明为什么选择这个课程、这个机构、这条职业道路。",
        ko: "GTE는 형식이 아닌 실질 심사. 왜 이 과정, 이 기관, 이 진로인지 구체적으로.",
      },
      {
        en: "If you plan to work part-time, the 48-hours-per-fortnight cap resets every two weeks, not monthly.", ja: "アルバイトを予定している場合、2週間あたり48時間の上限は毎月ではなく2週間ごとにリセットされます。", zh: "如果你打算做兼职，每两周48小时的上限每两周重置一次，而不是每月重置。",
        ko: "아르바이트 시 격주 48시간 한도는 매월이 아닌 격주 단위로 리셋.",
      },
      {
        en: "Switching institutions or courses is allowed but has rules — read them before you change.", ja: "教育機関や課程の変更は可能ですが、規則があります — 変更前に必ず確認しましょう。", zh: "转机构或转课程是允许的，但有相关规则——在更改之前请先阅读。",
        ko: "기관·과정 변경은 가능하지만 규칙이 있음 — 변경 전에 반드시 확인.",
      },
    ],
    pros: [
      {
        en: "Lets you live, study, and work part-time in Australia legally.", ja: "オーストラリアで合法的に居住・学習・アルバイトができます。", zh: "让你可以合法地在澳大利亚居住、学习和做兼职工作。",
        ko: "호주에서 합법적으로 거주·수학·아르바이트 가능.",
      },
      {
        en: "Pathway to a Temporary Graduate visa (subclass 485) after graduation.", ja: "卒業後の一時的卒業ビザ（サブクラス485）への道筋。", zh: "毕业后通往临时毕业生签证（485子类）的途径。",
        ko: "졸업 후 임시 졸업 비자(서브클래스 485) 자격.",
      },
      {
        en: "Family members can be included in some cases.", ja: "場合によっては家族も含めることができます。", zh: "在某些情况下可以包含家庭成员。",
        ko: "일부 경우 가족 동반 가능.",
      },
    ],
    cons: [
      {
        en: "Cost is high — tuition + OSHC + living expenses add up quickly.", ja: "費用は高額です — 学費＋OSHC＋生活費がすぐに膨らみます。", zh: "费用很高——学费＋OSHC＋生活开支很快累积起来。",
        ko: "비용 부담 큼 — 등록금 + OSHC + 생활비.",
      },
      {
        en: "Part-time work is capped, which can be tight during expensive cities like Sydney.", ja: "アルバイトの時間には上限があり、シドニーのような物価の高い都市では厳しいことがあります。", zh: "兼职工作时间有上限，在悉尼这样物价高昂的城市可能会很紧张。",
        ko: "아르바이트 시간 제한 — 시드니 같은 고비용 도시에서는 빠듯.",
      },
      {
        en: "Requires genuine commitment to study — Home Affairs scrutinises academic progress.", ja: "学習への真摯な取り組みが求められます — 内務省は学業の進捗を精査します。", zh: "需要真正投入学习——内政部会审查学业进展。",
        ko: "학업에 대한 진정성 요구 — 호주 이민국은 학업 진척도를 점검.",
      },
    ],
    nextSteps: {
      en: "Pick a CRICOS-registered course, get a CoE, secure OSHC, then lodge your 500 application via ImmiAccount.", ja: "CRICOS登録課程を選び、CoEを取得し、OSHCを確保してから、ImmiAccountで500ビザを申請しましょう。", zh: "选择CRICOS注册课程，获得CoE，办好OSHC，然后通过ImmiAccount提交你的500签证申请。",
      ko: "CRICOS 등록 과정을 선택하고 CoE를 받은 뒤 OSHC를 준비한 다음, ImmiAccount로 500 비자를 신청하세요.",
    },
    links: [
      {
        label: { en: "Official 500 visa page", ja: "公式500ビザページ", zh: "官方500签证页面", ko: "공식 500 비자 안내" },
        href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
      },
      {
        label: { en: "CRICOS registered institutions", ja: "CRICOS登録機関", zh: "CRICOS注册机构", ko: "CRICOS 등록 기관 검색" },
        href: "https://cricos.education.gov.au/",
      },
    ],
  },

  {
    slug: "skilled-189-190",
    code: "subclass 189 / 190",
    name: {
      en: "Skilled Independent (189) / Skilled Nominated (190)", ja: "技能独立永住（189）／技能指名永住（190）", zh: "技术独立（189）/技术提名（190）",
      ko: "기술 독립 이민 (189) / 기술 주주재 (190)",
    },
    tagline: {
      en: "Points-tested permanent residency visas for skilled workers in occupations on the relevant skilled occupation list.", ja: "関連する技能職業リストに掲載された職業の熟練労働者向けの、ポイント制永住権ビザです。", zh: "面向相关技术职业清单上职业的技术工人、采用积分测试的永久居留签证。",
      ko: "관련 기술직업 목록에 있는 직업을 가진 숙련 노동자를 위한 점수제 영주권 비자입니다.",
    },
    audience: {
      en: "Skilled workers under 45 with recognised qualifications, English ability, and a points-eligible occupation on the skilled occupation list.", ja: "45歳未満で、公的認定資格・英語力・技能職業リスト上のポイント対象職業を持つ熟練労働者。", zh: "45岁以下、拥有受认可的资格、英语能力以及在技术职业清单上可获积分职业的技术工人。",
      ko: "45세 미만의 숙련 노동자로, 공인 자격증·영어 능력·기술직업 목록상 점수 인정 직종 보유자.",
    },
    duration: {
      en: "Permanent residency (5-year travel facility, renewable).", ja: "永住権（5年間の渡航許可、更新可能）。", zh: "永久居留权（5年旅行便利，可续签）。",
      ko: "영주권 (5년 여행 시설, 갱신 가능).",
    },
    workRights: {
      en: "Unrestricted work and study rights; live anywhere in Australia; access to Medicare.", ja: "就労・学習の制限なし。オーストラリア国内どこにでも居住可能。メディケアを利用可能。", zh: "不受限制的工作和学习权利；可在澳大利亚任何地方居住；可使用Medicare。",
      ko: "근무·수학 제한 없음. 호주 내 어디든 거주 가능. 메디케어 이용 가능.",
    },
    studyRights: {
      en: "No study restrictions.", ja: "学習の制限なし。", zh: "无学习限制。",
      ko: "수학 제한 없음.",
    },
    cost: {
      en: "Main applicant: AUD 4,640. Plus skills assessment, English test, and (for 190) state nomination fees.", ja: "本人申請者：4,640 AUD。加えて技能評価、英語試験、（190の場合は）州指名手数料がかかります。", zh: "主申请人：4,640 AUD。另加技能评估、英语考试，以及（190的）州提名费用。",
      ko: "본인 신청비: 4,640 AUD. 기술 평가, 영어 시험, (190의 경우) 주정부 nomination 수수료 별도.",
    },
    processingTime: {
      en: "Skilled visa processing varies by invitation round and queue. Expect months — sometimes over a year — for finalisation.", ja: "技能ビザの処理は招待ラウンドと待ち行列により異なります。最終決定まで数か月、時には1年以上かかることもあります。", zh: "技术签证的处理因邀请轮次和排队情况而异。最终确定可能需要数月——有时超过一年。",
      ko: "기술 비자 처리는 초대 라운드와 대기열에 따라 변동. 최종 결정까지 수개월~1년 이상 가능.",
    },
    keyRequirements: [
      {
        en: "SkillSelect Expression of Interest (EOI) with at least 65 points (most invitations go to 80+).", ja: "最低65ポイントでのSkillSelect意欲表明（EOI）（大半の招待は80ポイント以上に）。", zh: "得分至少65分的SkillSelect意向书（EOI）（大多数邀请发给80分以上者）。",
        ko: "SkillSelect 의사표명(EOI) 제출, 최소 65점 (대부분 80점 이상 초대).",
      },
      {
        en: "Positive skills assessment from the relevant assessing authority.", ja: "該当する評価機関からの技能評価の合格。", zh: "来自相关评估机构的技能评估通过。",
        ko: "해당 평가기관의 기술 평가 통과.",
      },
      {
        en: "Competent English (IELTS 6 each band minimum; higher for more points).", ja: "Competent以上の英語（IELTS各バンド6.0以上、高得点で追加ポイント）。", zh: "熟练水平的英语（IELTS每个单项最低6分；分数越高积分越多）。",
        ko: "Competent 이상 영어 (IELTS 각 밴드 6.0 이상, 고득점 시 추가 점수).",
      },
      {
        en: "Age under 45 at time of invitation.", ja: "招待時点で45歳未満。", zh: "获邀时年龄在45岁以下。",
        ko: "초대 시점 45세 미만.",
      },
      {
        en: "For 190: nomination from an Australian state/territory government.", ja: "190の場合：オーストラリアの州・準州政府からの指名。", zh: "190的：需要澳大利亚州/领地政府的提名。",
        ko: "190의 경우 호주 주·준주 정부의 nomination 필요.",
      },
    ],
    steps: [
      {
        en: "Confirm your occupation is on the relevant skilled occupation list (MLTSSL for 189, additional lists for 190).", ja: "自分の職業が関連する技能職業リスト（189はMLTSSL、190は追加リスト）に載っているか確認しましょう。", zh: "确认你的职业在相关技术职业清单上（189为MLTSSL，190为附加清单）。",
        ko: "관련 기술직업 목록(189는 MLTSSL, 190은 추가 목록 포함)에 본인 직업이 있는지 확인.",
      },
      {
        en: "Get a positive skills assessment from the relevant authority.", ja: "該当機関から技能評価の合格を取得する。", zh: "从相关机构获得技能评估通过。",
        ko: "해당 평가기관에서 기술 평가 통과.",
      },
      {
        en: "Take an English test (IELTS/PTE/TOEFL).", ja: "英語試験を受ける（IELTS/PTE/TOEFL）。", zh: "参加英语考试（IELTS/PTE/TOEFL）。",
        ko: "영어 시험 응시 (IELTS/PTE/TOEFL).",
      },
      {
        en: "Submit an Expression of Interest (EOI) in SkillSelect.", ja: "SkillSelectで意欲表明（EOI）を提出する。", zh: "在SkillSelect中提交意向书（EOI）。",
        ko: "SkillSelect에서 의사표명(EOI) 제출.",
      },
      {
        en: "Wait for an invitation to apply; for 190, apply for state nomination first.", ja: "申請招待を待つ。190の場合は先に州指名を申請する。", zh: "等待获邀申请；190的需先申请州提名。",
        ko: "초대 대기. 190은 먼저 주정부 nomination 신청.",
      },
      {
        en: "Lodge the visa application within the deadline, upload documents, attend health/character checks.", ja: "期限内にビザ申請を提出し、書類をアップロードし、健康・人物審査を受ける。", zh: "在截止日期前提交签证申请，上传文件，接受健康/品行检查。",
        ko: "기한 내 비자 신청, 서류 업로드, 건강·신원 조회.",
      },
    ],
    tips: [
      {
        en: "Points matter a lot — maximising English (PTE/IELTS) and qualifications is often the highest-ROI move.", ja: "ポイントは非常に重要です — 英語（PTE/IELTS）と資格を最大化することが、多くの場合最も費用対効果の高い選択です。", zh: "积分非常重要——将英语（PTE/IELTS）和学历最大化通常是回报率最高的做法。",
        ko: "점수가 가장 중요. 영어·자격 점수 극대화가 ROI 가장 큼.",
      },
      {
        en: "189 invitations typically require 80+ points in current rounds; 190 is more accessible but locks you to a state.", ja: "現在のラウンドでは189の招待は通常80ポイント以上が必要です。190はより取得しやすいですが、特定の州に縛られます。", zh: "在当前轮次中，189的邀请通常需要80分以上；190更容易获得，但会将你绑定到某个州。",
        ko: "현재 189 초대 라운드는 80점 이상 필요. 190은 진입이 쉽지만 주 거주 의무.",
      },
      {
        en: "Skilled occupation lists and points tables change every year — always check the latest Home Affairs updates.", ja: "技能職業リストとポイント表は毎年変わります — 常に内務省の最新情報を確認しましょう。", zh: "技术职业清单和积分表每年都会变化——请务必查看内政部的最新更新。",
        ko: "기술직업 목록과 점수표는 매년 변경 — 호주 이민국 최신 공지 반드시 확인.",
      },
      {
        en: "Skills assessments have strict evidence rules (reference letters, payslips, qualifications) — start collecting early.", ja: "技能評価には厳格な証拠規則があります（推薦状、給与明細、資格証明）— 早めに収集を始めましょう。", zh: "技能评估有严格的证据要求（推荐信、工资单、学历证明）——请尽早开始收集。",
        ko: "기술 평가는 증빙 규칙이 엄격 (추천서, 급여명세서, 자격증) — 일찍 수집 시작.",
      },
    ],
    pros: [
      {
        en: "Permanent residency with full rights and Medicare.", ja: "完全な権利とメディケアを伴う永住権。", zh: "享有完整权利和Medicare的永久居留权。",
        ko: "메디케어 포함 완전한 영주권.",
      },
      {
        en: "Citizenship pathway after 4 years of residence.", ja: "4年の居住後の市民権取得への道筋。", zh: "居住满4年后的入籍途径。",
        ko: "4년 거주 후 시민권 신청 가능.",
      },
      {
        en: "No employer or state tie required for 189.", ja: "189では雇用主や州との結びつきは不要です。", zh: "189不要求与雇主或州绑定。",
        ko: "189는 고용주·주정부 의존 없음.",
      },
    ],
    cons: [
      {
        en: "Highly competitive — points cut-offs can be 85+ for some occupations.", ja: "競争が非常に激しい — 一部の職業では合格ラインが85ポイント以上になることもあります。", zh: "竞争非常激烈——某些职业的积分分数线可达85分以上。",
        ko: "경쟁 치열 — 일부 직업은 85점 이상 필요.",
      },
      {
        en: "Long processing times and policy changes can disrupt plans.", ja: "処理時間の長さと政策変更が計画を狂わせることがあります。", zh: "漫长的处理时间和政策变化可能会打乱计划。",
        ko: "처리 시간 길고 정책 변동 리스크.",
      },
      {
        en: "190 ties you to a nominating state for at least 2 years.", ja: "190は少なくとも2年間、指名した州に縛られます。", zh: "190会将你绑定到提名州至少2年。",
        ko: "190은 최소 2년 nomination 주 거주 의무.",
      },
    ],
    nextSteps: {
      en: "Confirm your occupation is on the list, book a skills assessment, sit an English test, and prepare your EOI.", ja: "自分の職業がリストにあるか確認し、技能評価を予約し、英語試験を受け、EOIを準備しましょう。", zh: "确认你的职业在清单上，预约技能评估，参加英语考试，并准备你的EOI。",
      ko: "본인 직업이 목록에 있는지 확인하고, 기술 평가를 신청하며, 영어 시험에 응시한 뒤 EOI를 준비하세요.",
    },
    links: [
      {
        label: { en: "Skilled occupation lists", ja: "技能職業リスト", zh: "技术职业清单", ko: "기술직업 목록" },
        href: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list",
      },
      {
        label: { en: "SkillSelect", ja: "SkillSelect", zh: "SkillSelect", ko: "SkillSelect" },
        href: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect",
      },
      {
        label: { en: "Find a MARA agent", ja: "MARAエージェントを探す", zh: "查找MARA代理", ko: "MARA 등록 대행인 검색" },
        href: "https://www.mara.gov.au/",
      },
    ],
  },

  {
    slug: "partner-820-801",
    code: "subclass 820 / 801",
    name: {
      en: "Partner visa (subclass 820 / 801)", ja: "パートナービザ（サブクラス820／801）", zh: "配偶签证（820/801子类）",
      ko: "파트너 비자 (서브클래스 820/801)",
    },
    tagline: {
      en: "For partners (married or de facto) of Australian citizens, permanent residents, or eligible New Zealand citizens.", ja: "オーストラリア市民、永住権保持者、または適格なニュージーランド市民のパートナー（婚姻または事実婚）向けです。", zh: "面向澳大利亚公民、永久居民或符合条件的新西兰公民的伴侣（已婚或事实婚姻）。",
      ko: "호주 시민, 영주권자 또는 자격 있는 뉴질랜드 시민의 배우자(사실혼 포함)를 위한 비자입니다.",
    },
    audience: {
      en: "Spouses or de facto partners in a genuine and ongoing relationship with an eligible Australian sponsor.", ja: "適格なオーストラリアのスポンサーと真摯で継続的な関係にある配偶者または事実婚パートナー。", zh: "与符合资格的澳大利亚担保人保持真实且持续关系的配偶或事实婚姻伴侣。",
      ko: "자격 있는 호주 보증인과 진정하며 지속적 관계에 있는 배우자 또는 사실혼 파트너.",
    },
    duration: {
      en: "Two-stage visa: 820 is a temporary visa leading to 801 permanent residency (usually after 2 years).", ja: "2段階のビザ：820は一時ビザで、801の永住権につながります（通常2年後）。", zh: "两阶段签证：820是临时签证，可通向801永久居留权（通常在2年后）。",
      ko: "2단계 비자: 820(임시) → 801(영주권, 통상 2년 후).",
    },
    workRights: {
      en: "Full work and study rights in Australia from grant of 820.", ja: "820の付与時点から、オーストラリアでの完全な就労・学習の権利。", zh: "自820获批之日起，在澳大利亚享有完整的工作和学习权利。",
      ko: "820 부여 시점부터 호주 내 완전한 근무·수학 권한.",
    },
    studyRights: {
      en: "Unrestricted study rights.", ja: "学習の制限なし。", zh: "不受限制的学习权利。",
      ko: "수학 제한 없음.",
    },
    cost: {
      en: "From AUD 8,850 (applicant only, as of 2024). Higher fees apply if applying from outside Australia.", ja: "8,850 AUDから（本人のみ、2024年時点）。オーストラリア国外から申請する場合は手数料が高くなります。", zh: "8,850 AUD起（仅申请人，截至2024年）。从澳大利亚境外申请需支付更高费用。",
        ko: "본인 신청 기준 8,850 AUD부터 (2024년 기준). 호주境外 신청 시 수수료 더 높음.",
    },
    processingTime: {
      en: "820 is often finalised within 12–24 months. 801 assessment typically begins 2 years after 820 grant.", ja: "820は通常12〜24か月以内に決定されます。801の審査は通常、820の付与から2年後に始まります。", zh: "820通常在12至24个月内完成。801的评估通常在820获批2年后开始。",
      ko: "820은 통상 12–24개월 내 결정. 801 평가는 820 부여 후 2년부터 시작.",
    },
    keyRequirements: [
      {
        en: "Be in a genuine and ongoing relationship with an Australian citizen, PR, or eligible NZ citizen.", ja: "オーストラリア市民、永住権保持者、または適格なNZ市民と真摯で継続的な関係にあること。", zh: "与澳大利亚公民、永久居民或符合条件的新西兰公民保持真实且持续的关系。",
        ko: "호주 시민·영주권자·자격 있는 NZ 시민과 진정한 지속적 관계.",
      },
      {
        en: "Have been in the relationship for at least 12 months (or 2 years for de facto — some exemptions apply).", ja: "少なくとも12か月間その関係にあること（事実婚の場合は2年 — 一部免除あり）。", zh: "关系至少已持续12个月（事实婚姻为2年——部分情况可豁免）。",
        ko: "최소 12개월 이상 관계 (사실혼은 2년 — 일부 면제 있음).",
      },
      {
        en: "Live together or have a genuine commitment (with evidence).", ja: "同居する、または真摯な関係への意思があること（証拠が必要）。", zh: "同居或具备真实的共同生活承诺（需提供证据）。",
        ko: "동거 또는 진정한 동거 의지 (증빙 필요).",
      },
      {
        en: "Be onshore when 820 is granted (820/801 must be applied for onshore; offshore applicants use 309/100).", ja: "820の許可時点でオーストラリア国内にいること（820/801は国内申請が必要。海外からの申請者は309/100を使用）。", zh: "820获批时须在澳大利亚境内（820/801必须在境内申请；境外申请人使用309/100）。",
        ko: "820 부여 시점에 호주境内 체류 (해외 신청은 309/100 비자 사용).",
      },
    ],
    steps: [
      {
        en: "Gather evidence of your relationship (joint leases, photos, communication history, joint finances, statements).", ja: "関係の証拠を集める（共同の賃貸契約、写真、連絡の履歴、共同の財務、陳述書）。", zh: "收集关系证据（共同租约、照片、通信记录、共同财务、陈述书）。",
        ko: "관계 증빙 수집 (공동 임대차, 사진, 연락 기록, 공동 재정, 진술서).",
      },
      {
        en: "Sponsor applies for approval; you lodge the combined 820/801 application.", ja: "スポンサーが承認申請を行い、あなたが820/801の統合申請を提出します。", zh: "担保人申请获批；您提交820/801合并申请。",
        ko: "보증인이 sponsor 승인을 받고, 본인이 820/801 통합 비자 신청.",
      },
      {
        en: "Undergo health examinations and police checks.", ja: "健康診断と警察による身元調査を受けます。", zh: "接受体检和警方无犯罪记录审查。",
        ko: "건강검진 및 경찰 신원 조회.",
      },
      {
        en: "Wait for 820 decision; after the relationship-period threshold, 801 is assessed.", ja: "820の決定を待ちます。関係継続期間の基準を満たすと、801が審査されます。", zh: "等待820的决定；达到关系存续期限门槛后，将评估801。",
        ko: "820 결정 대기, 관계 유지 기간 충족 후 801 평가.",
      },
    ],
    tips: [
      {
        en: "Evidence quality beats volume. Photos, chats, and shared bills across many months read stronger than 50 screenshots from one weekend.", ja: "証拠は量より質です。1回の週末のスクリーンショット50枚よりも、数か月にわたる写真・チャット・共同の請求書のほうが説得力があります。", zh: "证据重在质量而非数量。跨越数月的照片、聊天记录和共同账单，比某个周末的50张截图更有说服力。",
        ko: "증빙은 양보다 질. 주말 50장 스크린샷보다 수개월간의 사진·대화·공동 청구서가 더 설득력 있음.",
      },
      {
        en: "If you are offshore, you usually need subclass 309/100 (not 820/801) — many people apply onshore first to use 820.", ja: "海外にいる場合、通常はサブクラス309/100が必要です（820/801ではありません）。820を利用するために、まず国内で申請する人も多くいます。", zh: "如果您在境外，通常需要309/100签证（而非820/801）——许多人会先入境在境内申请，以便使用820。",
        ko: "해외에 있으면 통상 309/100 사용 (820/801 아님) — 820을 위해 우선 호주로 입국하는 경우 많음.",
      },
      {
        en: "Bridging visas will keep you lawful while 820 is processing — do not let your current visa lapse.", ja: "820の審査中はブリッジングビザで合法的に滞在できます。現在のビザを失効させないようにしてください。", zh: "在820审理期间，过桥签证可让您保持合法身份——不要让现有签证失效。",
        ko: "820 처리 중 브리징 비자로 합법 체류 유지 — 현 비자 만료 주의.",
      },
    ],
    pros: [
      {
        en: "Path to permanent residency without points test or occupation list.", ja: "ポイント制や職業リストなしで永住権への道が開けます。", zh: "无需打分制或职业清单即可通往永久居留。",
        ko: "점수제·직업 목록 없이 영주권 도달.",
      },
      {
        en: "Work rights from day one of 820.", ja: "820の初日から就労権があります。", zh: "自820生效第一天起即拥有工作权利。",
        ko: "820 부여 즉시 근무 가능.",
      },
      {
        en: "Children can be included in the application.", ja: "子どもを申請に含めることができます。", zh: "子女可以包含在申请中。",
        ko: "자녀 동반 신청 가능.",
      },
    ],
    cons: [
      {
        en: "Expensive — among the costliest partner visas worldwide.", ja: "高額です。世界でもっとも費用のかかるパートナービザの一つです。", zh: "费用高昂——是全球最昂贵的伴侣签证之一。",
        ko: "비자 비용이 매우 높음.",
      },
      {
        en: "Long, stressful processing with extensive evidence requirements.", ja: "審査期間が長く、負担が大きく、大量の証拠が求められます。", zh: "审理时间长、压力大，且证据要求繁多。",
        ko: "처리 기간 길고 증빙 요구 엄격.",
      },
      {
        en: "Relationships break down mid-process — applicants must notify Home Affairs.", ja: "審査途中で関係が破綻する場合があります。申請者は内務省への届け出が必要です。", zh: "关系可能在审理期间破裂——申请人必须通知内政部。",
        ko: "처리 중 관계가 깨지면 호주 이민국에 통보 의무.",
      },
    ],
    nextSteps: {
      en: "Start collecting relationship evidence, ensure you and your sponsor are both eligible, and plan to be onshore for the 820 stage.", ja: "関係の証拠を集め始め、あなたとスポンサーの双方が要件を満たすことを確認し、820の段階では国内にいる計画を立てましょう。", zh: "开始收集关系证据，确认您和担保人均符合资格，并计划在820阶段处于境内。",
      ko: "관계 증빙을 모으고 본인·보증인 자격을 확인한 뒤, 820 단계를 위해 호주境内에 있을 계획을 세우세요.",
    },
    links: [
      {
        label: { en: "Official partner visa page", ja: "公式パートナービザのページ", zh: "官方伴侣签证页面", ko: "공식 파트너 비자 안내" },
        href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/partner-onshore-820-801",
      },
    ],
  },

  {
    slug: "visitor-600-601-651",
    code: "subclass 600 / 601 / 651",
    name: {
      en: "Visitor visas (subclasses 600, 601, 651)", ja: "訪問者ビザ（サブクラス600、601、651）", zh: "访客签证（600、601、651类别）",
      ko: "방문자 비자 (서브클래스 600/601/651)",
    },
    tagline: {
      en: "Short-stay visas for tourism, visiting family, or short business trips. eVisitor (651) is available to many European and select Asia-Pacific passport holders for short visits — check your passport on the Home Affairs tool below.", ja: "観光、家族訪問、短期出張のための短期滞在ビザです。eVisitor（651）は、多くのヨーロッパおよび一部のアジア太平洋諸国のパスポート保持者が短期訪問に利用できます。ご自身のパスポートが対象かどうかは、下記の内務省のツールで確認してください。", zh: "用于旅游、探亲或短期商务出行的短期签证。eVisitor（651）适用于许多欧洲及部分亚太地区护照持有者的短期访问——请在下方内政部的工具中查询您的护照是否符合条件。",
      ko: "관광·가족 방문·단기 출장을 위한 단기 체류 비자. 한국인은 단기 방문 시 eVisitor(651) 자주 이용.",
    },
    audience: {
      en: "Tourists, family visitors, and short-term business travellers. The right subclass depends on your passport — passport holders from the EU, UK, USA, Canada, Korea, Japan, Singapore, and many more are eligible for either eVisitor (651) for short visits (typically up to 90 days per visit) or Visitor visa (600) for longer or multiple-entry stays.", ja: "観光客、家族訪問者、短期出張者です。適切なサブクラスはパスポートによって異なります。EU、イギリス、アメリカ、カナダ、韓国、日本、シンガポールなどのパスポート保持者は、短期訪問（通常1回の訪問につき最大90日）向けのeVisitor（651）、またはより長期・複数回入国の滞在向けの訪問者ビザ（600）のいずれかを利用できます。", zh: "游客、探亲访客和短期商务旅客。适合的类别取决于您的护照——来自欧盟、英国、美国、加拿大、韩国、日本、新加坡等许多国家和地区的护照持有者，可申请用于短期访问（通常每次最长90天）的eVisitor（651），或用于较长或多次入境停留的访客签证（600）。",
      ko: "관광객, 가족 방문객, 단기 출장자. 한국 여권 소지자는 1회 최대 90일 eVisitor(651) 또는 장기/복수 입국 시 Visitor 비자(600) 이용 가능.",
    },
    duration: {
      en: "651: up to 90 days per visit. 600: typically 3, 6, or 12 months, single or multiple entry.", ja: "651：1回の訪問につき最大90日。600：通常3か月、6か月、12か月で、単数回または複数回入国。", zh: "651：每次访问最长90天。600：通常为3个月、6个月或12个月，单次或多次入境。",
      ko: "651: 방문당 최대 90일. 600: 통상 3·6·12개월, 단수/복수 입국.",
    },
    workRights: {
      en: "No work permitted on any visitor visa subclass.", ja: "いずれの訪問者ビザのサブクラスでも就労は認められません。", zh: "任何访客签证类别均不允许工作。",
      ko: "모든 방문자 비자에서 근무 불가.",
    },
    studyRights: {
      en: "Limited study up to 3 months is generally allowed on 600 (subject to conditions).", ja: "600では、通常、条件付きで最長3か月までの限定的な就学が認められます。", zh: "600通常允许最长3个月的有限学习（须符合相关条件）。",
      ko: "600은 조건부로 최대 3개월 수학 가능.",
    },
    cost: {
      en: "651: free. 600: AUD 200+ depending on stream and length.", ja: "651：無料。600：区分と期間に応じて200オーストラリアドル以上。", zh: "651：免费。600：根据类别和时长，200澳元以上。",
      ko: "651: 무료. 600: 종류·기간에 따라 200 AUD 이상.",
    },
    processingTime: {
      en: "651: often granted within minutes to days. 600: days to weeks depending on volume and stream.", ja: "651：多くの場合、数分から数日で許可されます。600：申請量と区分に応じて数日から数週間。", zh: "651：通常数分钟至数天内获批。600：根据申请量和类别，需数天至数周。",
      ko: "651: 통상 수 분~수 일 내 부여. 600: 종류·신청량에 따라 수 일~수 주.",
    },
    keyRequirements: [
      {
        en: "Genuine visitor — temporary stay with intent to return home.", ja: "真の訪問者であること。帰国する意思をもった一時的な滞在です。", zh: "真实的访客——临时停留并有返回本国的意图。",
        ko: "진정한 방문 목적 — 호주 임시 체류 후 귀국 의지.",
      },
      {
        en: "Sufficient funds for the trip and onward/return ticket.", ja: "旅行および出国・帰国航空券に十分な資金。", zh: "有足够的资金用于旅行及续程/回程机票。",
        ko: "여행 및 귀국 항공권에 충분한 자금.",
      },
      {
        en: "Meet health and character requirements (varies by stay length and nationality).", ja: "健康と素行の要件を満たすこと（滞在期間と国籍により異なります）。", zh: "符合健康和品行要求（因停留时长和国籍而异）。",
        ko: "건강·신원 요건 충족 (체류 기간·국적에 따라 상이).",
      },
      {
        en: "651: must be outside Australia and hold an eligible passport (check the tool linked above — many EU, UK, US, and APEC passport holders qualify, alongside Korean and other Asian passports).", ja: "651：オーストラリア国外にいて、対象国（韓国を含む）のパスポートを所持していること。", zh: "651：必须身处澳大利亚境外并持有符合条件的护照（请查看上方链接的工具——许多欧盟、英国、美国和APEC成员国护照持有者都符合条件，韩国及其他亚洲国家护照同样如此）。",
        ko: "651: 호주境外에 있으며 대상국(한국 포함) 여권 소지.",
      },
    ],
    steps: [
      {
        en: "Decide which subclass fits: 651 for short trips, 600 for longer/multi-entry.", ja: "どのサブクラスが適しているかを決めます。短期旅行は651、長期・複数回入国は600です。", zh: "确定适合的类别：短期旅行选651，较长/多次入境选600。",
        ko: "어떤 서브클래스가 맞는지 결정: 단기는 651, 장기/복수는 600.",
      },
      {
        en: "Apply online via ImmiAccount (651) or the relevant Visitor visa application (600).", ja: "ImmiAccount（651）または該当する訪問者ビザ申請（600）でオンライン申請します。", zh: "通过ImmiAccount（651）或相应的访客签证申请（600）在线申请。",
        ko: "ImmiAccount(651) 또는 Visitor 비자(600) 신청 페이지에서 온라인 신청.",
      },
      {
        en: "Upload identity, financial, and travel evidence; pay the fee if applicable.", ja: "身元、財務、旅行の証拠をアップロードし、該当する場合は手数料を支払います。", zh: "上传身份、财务和旅行证明；如适用，支付费用。",
        ko: "신원·재정·여행 증빙 업로드, 수수료 결제(해당 시).",
      },
      {
        en: "Wait for the decision; check the visa grant notice for conditions (e.g. no work).", ja: "決定を待ちます。ビザ許可通知で条件（就労禁止など）を確認してください。", zh: "等待决定；查看签证获批通知中的条件（例如禁止工作）。",
        ko: "결정 대기. 비자 부여 통지에서 조건(근무 금지 등) 확인.",
      },
    ],
    tips: [
      {
        en: "651 is free and faster — start there for short visits under 90 days.", ja: "651は無料でより迅速です。90日未満の短期訪問なら、まずこちらから始めましょう。", zh: "651免费且更快捷——90天以内的短期访问可从它入手。",
        ko: "651은 무료·신속. 90일 미만 단기 방문은 우선 시도.",
      },
      {
        en: "Always carry evidence of your return ticket, accommodation, and ties to Korea (job, family, property).", ja: "帰国航空券、宿泊先、韓国とのつながり（仕事、家族、資産）の証拠を常に携帯してください。", zh: "请随身携带回程机票、住宿证明以及与韩国的联系证明（工作、家庭、财产）。",
        ko: "귀국 항공권, 숙소, 한국과의 연결고리(직장·가족·자산) 증빙 항상 지참.",
      },
      {
        en: "No work means no work — even unpaid 'helping out' at a relative's business is risky.", ja: "就労禁止は文字どおり就労禁止です。親戚の事業を無給で「手伝う」ことさえリスクがあります。", zh: "禁止工作就是禁止工作——即使在亲戚的生意中无偿“帮忙”也有风险。",
        ko: "근무 불가의 의미는 무급이라도 근무는 안 됨 — 친척 사업장 도움도 리스크.",
      },
    ],
    pros: [
      {
        en: "651 is free and quick to obtain.", ja: "651は無料で、取得も迅速です。", zh: "651免费且办理快捷。",
        ko: "651은 무료·신속.",
      },
      {
        en: "600 offers flexibility for longer or repeated visits.", ja: "600は、より長期または繰り返しの訪問に柔軟に対応できます。", zh: "600为较长或多次访问提供了灵活性。",
        ko: "600은 장기·반복 방문에 유연.",
      },
      {
        en: "No sponsorship required for most streams.", ja: "ほとんどの区分でスポンサーは不要です。", zh: "大多数类别无需担保。",
        ko: "대부분 보증인 불필요.",
      },
    ],
    cons: [
      {
        en: "Cannot work on any visitor visa.", ja: "いずれの訪問者ビザでも就労できません。", zh: "任何访客签证均不能工作。",
        ko: "방문자 비자에서는 근무 불가.",
      },
      {
        en: "Genuine visitor test is scrutinised at the border — officials may ask questions on arrival.", ja: "真の訪問者であるかの審査は国境で厳しく確認されます。入国時に係官から質問される場合があります。", zh: "真实访客的审核在边境会受到严格审查——官员可能在入境时提问。",
        ko: "입국 심사 시 진정성 확인 — 입국 심사관에게 질문 받을 수 있음.",
      },
      {
        en: "Long stays may require health examinations.", ja: "長期滞在の場合、健康診断が求められることがあります。", zh: "长期停留可能需要体检。",
        ko: "장기 체류 시 건강검진 요구 가능.",
      },
    ],
    nextSteps: {
      en: "Pick the right subclass (651 for short, 600 for longer), apply online via ImmiAccount, and carry supporting documents when you travel.", ja: "適切なサブクラス（短期は651、長期は600）を選び、ImmiAccountでオンライン申請し、旅行時には補足書類を携帯してください。", zh: "选择合适的类别（短期选651，较长期选600），通过ImmiAccount在线申请，并在出行时携带辅助文件。",
      ko: "서브클래스(단기는 651, 장기는 600)를 정하고 ImmiAccount로 온라인 신청한 뒤, 여행 시 관련 서류를휴대하세요.",
    },
    links: [
      {
        label: { en: "eVisitor (651) information", ja: "eVisitor（651）の情報", zh: "eVisitor（651）信息", ko: "eVisitor(651) 안내" },
        href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651",
      },
      {
        label: { en: "Visitor visa (600) information", ja: "訪問者ビザ（600）の情報", zh: "访客签证（600）信息", ko: "Visitor 비자(600) 안내" },
        href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600",
      },
    ],
  },
];

export function getVisa(slug: string): Visa | undefined {
  return visas.find((v) => v.slug === slug);
}

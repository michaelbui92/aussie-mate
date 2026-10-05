import type { Metadata } from "next";
import { headers } from "next/headers";
import { pageMeta } from "@/lib/page-meta";
import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import Accordion, { type AccordionSection } from "@/components/Accordion";

const FLAG_EMOJI = "🇦🇺";
import { AlertTriangle, Ambulance, Book, Building2 } from "@/components/Icons";
import { seoFor, withSeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  // Per request, so the tab title and the search-result headline are in the reader's
  // language. The canonical and hreflang come from the root layout, which reads the same
  // header. `Metadata` is imported by every page that uses withSeo.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return withSeo({

  ...seoFor("/resources"),
  title: pageMeta("/resources", locale).title,
  description: pageMeta("/resources", locale).description,
  },
  "/resources"
);
}


interface ResourceItem {
  label: string;
  en: string;
  ko: string; ja?: string; zh?: string; url?: string;
  urlLabel?: string;
}

const sections: AccordionSection[] = [
  {
    id: "government",
    iconKey: "Building2",
    title: "Government Services",
    koTitle: "정부 서비스",
    desc: "Essential services for healthcare, tax, employment, and more",
    koDesc: "의료, 세금, 취업 등을 위한 필수 서비스",
    items: [
      {
        label: "Medicare (메디케어)",
        en: "Australia's public healthcare system. Temporary residents from countries with Reciprocal Healthcare Agreements (UK, NZ, Italy, Belgium, etc.) may be eligible for limited Medicare cover. Even if you're not eligible, everyone in Australia has access to free emergency treatment at public hospital emergency departments.", ja: "オーストラリアの公的医療制度です。相互医療協定を結んでいる国（英国、ニュージーランド、イタリア、ベルギーなど）からの一時滞在者は、限定的なMedicareの適用を受けられる場合があります。適用資格がなくても、オーストラリアにいる誰もが公立病院の救急外来で無料の緊急治療を受けられます。", zh: "澳大利亚的公共医疗体系。来自签有互惠医疗协议国家（英国、新西兰、意大利、比利时等）的临时居民，可能有资格享受有限的 Medicare 保障。即使不符合资格，在澳大利亚的每个人都可以在公立医院急诊科获得免费紧急治疗。",
        ko: "호주의 공공 의료 시스템입니다. 상호 의료 협정 체결국(영국, 뉴질랜드, 이탈리아, 벨기에 등)의 임시 거주자는 제한된 메디케어 혜택을 받을 수 있습니다. 자격이 없더라도 호주에 있는 모든 사람은 공립 병원 응급실에서 무료 응급 치료를 받을 수 있습니다.",
        url: "https://www.servicesaustralia.gov.au/sites/managing-access-to-medicare-for-temporary-residents",
        urlLabel: "servicesaustralia.gov.au",
      },
      {
        label: "Centrelink (센터링크)",
        en: "The government agency that delivers social security payments. Includes JobSeeker (for unemployed people actively looking for work), Family Tax Benefit (for parents/carers of children), Youth Allowance (for students 16-24), and more. Most international students and temporary visa holders are NOT eligible — check your visa conditions.", ja: "社会保障給付を支給する政府機関です。JobSeeker（積極的に仕事を探している失業者向け）、Family Tax Benefit（子どものいる親・養育者向け）、Youth Allowance（16〜24歳の学生向け）などが含まれます。ほとんどの留学生と一時ビザ保持者は対象外です — ビザの条件を確認してください。", zh: "负责发放社会保障福利的政府机构。包括 JobSeeker（面向积极求职的失业者）、家庭税收福利（面向有孩子的父母/照护者）、青年津贴（面向 16 至 24 岁的学生）等。大多数留学生和临时签证持有者都不符合资格 — 请查看你的签证条件。",
        ko: "사회보장 급여를 제공하는 정부 기관입니다. JobSeeker(구직 활동 중인 실업자 대상), Family Tax Benefit(자녀가 있는 부모/보호자 대상), Youth Allowance(16-24세 학생 대상) 등이 포함됩니다. 대부분의 유학생과 임시 비자 소지자는 자격이 없습니다 — 비자 조건을 확인하세요.",
        url: "https://www.servicesaustralia.gov.au/centrelink",
        urlLabel: "servicesaustralia.gov.au/centrelink",
      },
      {
        label: "myGov (마이갓)",
        en: "One login for multiple government services. Link your Medicare, ATO, Centrelink, NDIS, and My Health Record all in one place. Set this up as soon as you arrive — you'll need it for tax returns, healthcare, and more. Get it at my.gov.au.", ja: "複数の政府サービスに1つのログインでアクセスできます。Medicare、ATO、センタリンク、NDIS、My Health Recordを一か所で連携できます。到着したらすぐに設定しましょう — 確定申告や医療などで必要になります。my.gov.auで取得できます。", zh: "一个账号登录多项政府服务。将你的 Medicare、ATO、Centrelink、NDIS 和 My Health Record 全部关联到一个地方。抵达后尽快设置 — 报税、医疗等都会用到。可在 my.gov.au 获取。",
        ko: "여러 정부 서비스를 하나의 로그인으로 이용할 수 있습니다. 메디케어, ATO, 센터링크, NDIS, My Health Record를 한곳에서 연결하세요. 도착하자마자 설정하세요 — 세금 신고, 의료 등에 필요합니다. my.gov.au에서 가입하세요.",
        url: "https://my.gov.au",
        urlLabel: "my.gov.au",
      },
      {
        label: "TFN Application (호주 세금 번호)",
        en: "A Tax File Number (TFN) is essential for working in Australia. Without a TFN, your employer must withhold tax at the highest rate (47%). Apply online through the ATO website — it's free and takes about 28 days to arrive by mail. International students can apply from day one.", ja: "タックス・ファイル・ナンバー（TFN）は、オーストラリアで働くために不可欠です。TFNがないと、雇用主は最高税率（47%）で税金を源泉徴収しなければなりません。ATOのウェブサイトからオンラインで申請できます — 無料で、郵便で届くまで約28日かかります。留学生も初日から申請できます。", zh: "税号（TFN）是在澳大利亚工作的必需品。没有 TFN，雇主必须按最高税率（47%）代扣税款。可通过 ATO 网站在线申请 — 免费，约 28 天邮寄送达。留学生从第一天起就可以申请。",
        ko: "TFN(세금 파일 번호)은 호주에서 일하기 위해 필수입니다. TFN이 없으면 고용주는 최고 세율(47%)로 원천징수합니다. ATO 웹사이트를 통해 온라인으로 신청하세요 — 무료이며 우편으로 도착하는 데 약 28일이 소요됩니다. 유학생도 첫날부터 신청할 수 있습니다.",
        url: "https://www.ato.gov.au/individuals/tax-file-number",
        urlLabel: "ato.gov.au/TFN",
      },
      {
        label: "Service NSW (서비스 NSW)",
        en: "The NSW state government one-stop shop. Get or renew your driver's licence, register your vehicle, pay fines, apply for seniors cards, and access other vital services. Many services are available online or at Service NSW centres across Sydney.", ja: "NSW州政府のワンストップ窓口です。運転免許証の取得・更新、車両登録、罰金の支払い、シニアカードの申請、その他の重要サービスの利用ができます。多くのサービスはオンライン、またはシドニー各地のService NSWセンターで利用できます。", zh: "新南威尔士州政府的“一站式”服务窗口。可办理或更新驾照、登记车辆、缴纳罚款、申请老年卡，以及使用其他重要服务。许多服务可在网上办理，或前往悉尼各地的 Service NSW 中心办理。",
        ko: "NSW 주정부의 원스톱 서비스입니다. 운전면허증 발급/갱신, 차량 등록, 벌금 납부, 시니어 카드 신청 등 다양한 필수 서비스를 이용할 수 있습니다. 많은 서비스를 온라인으로 이용하거나 시드니 전역의 Service NSW 센터에서 이용할 수 있습니다.",
        url: "https://www.service.nsw.gov.au",
        urlLabel: "service.nsw.gov.au",
      },
      {
        label: "ATO (호주 국세청)",
        en: "The Australian Taxation Office handles: income tax, GST, superannuation, business registrations, and tax returns. Everyone who earns income in Australia (including international students on working visas) must lodge a tax return each financial year (July 1 to June 30). Lodgement is usually open from July to October.", ja: "オーストラリア国税庁は、所得税、GST、super（スーパー）、事業登録、確定申告を担当しています。オーストラリアで所得があるすべての人（就労ビザの留学生を含む）は、各会計年度（7月1日〜6月30日）ごとに確定申告をしなければなりません。申告期間は通常、7月から10月までです。", zh: "澳大利亚税务局负责：所得税、GST、养老金、企业注册和纳税申报。所有在澳大利亚取得收入的人（包括持工作签证的留学生）都必须在每个财政年度（7 月 1 日至 6 月 30 日）报税。申报期通常从 7 月开放至 10 月。",
        ko: "호주 국세청은 소득세, GST, 슈퍼안내이션, 사업자 등록, 세금 환급을 담당합니다. 호주에서 소득이 있는 모든 사람(취업 비자 유학생 포함)은 매 회계연도(7월 1일~6월 30일)마다 세금 신고를 해야 합니다. 신고 기간은 보통 7월부터 10월까지입니다.",
        url: "https://www.ato.gov.au",
        urlLabel: "ato.gov.au",
      },
      {
        label: "Fair Trading NSW (NSW 공정거래위원회)",
        en: "NSW Fair Trading protects consumers and tenants. It handles: rental bond disputes, product safety, tenancy rights (including rent increases, repairs, and evictions), business licensing, and complaints about unfair trading practices.", ja: "NSW Fair Tradingは消費者と借主を保護します。賃貸ボンド（敷金）の紛争、製品の安全、借主の権利（家賃値上げ、修理、立ち退きなど）、事業許可、不公正な取引慣行に関する苦情を扱います。", zh: "新南威尔士州公平交易署保护消费者和租客。它处理：租房押金纠纷、产品安全、租客权利（包括涨租、维修和驱逐）、营业执照，以及关于不公平交易行为的投诉。",
        ko: "NSW Fair Trading은 소비자와 임차인을 보호합니다. 임대 보증금 분쟁, 제품 안전, 임차권(임대료 인상, 수리, 퇴거 등), 사업자 허가, 불공정 거래 관행 신고를 처리합니다.",
        url: "https://www.fairtrading.nsw.gov.au",
        urlLabel: "fairtrading.nsw.gov.au",
      },
    ],
  },
  {
    id: "education",
    iconKey: "Book",
    title: "Education",
    koTitle: "교육",
    desc: "Universities, TAFE, and study resources in NSW",
    koDesc: "NSW의 대학, TAFE, 학습 자료",
    items: [
      {
        label: "Study NSW (NSW 유학 공식 정보)",
        en: "The official NSW Government website for international students. Information on studying in NSW, student life, accommodation, visa conditions, work rights, and support services. Also runs the International Student Connect program for events and networking.", ja: "留学生のためのNSW州政府公式ウェブサイトです。NSWでの留学、学生生活、住まい、ビザの条件、就労権、サポートサービスに関する情報を提供しています。イベントやネットワーキングのためのInternational Student Connectプログラムも運営しています。", zh: "面向留学生的官方新南威尔士州政府网站。提供在新州学习、学生生活、住宿、签证条件、工作权利和支持服务等信息。还运营 International Student Connect 项目，用于活动交流和人脉拓展。",
        ko: "NSW 주정부 공식 유학생 정보 웹사이트입니다. NSW 유학, 학생 생활, 숙소, 비자 조건, 취업 권리, 지원 서비스에 대한 정보를 제공합니다. 이벤트 및 네트워킹을 위한 International Student Connect 프로그램도 운영합니다.",
        url: "https://www.study.nsw.gov.au",
        urlLabel: "study.nsw.gov.au",
      },
      {
        label: "TAFE NSW (TAFE NSW 직업 교육)",
        en: "Vocational education and training provider. Offers hundreds of affordable, practical courses from certificates to diplomas. Fields include hospitality, IT, nursing, aged care, childcare, trades, and business. Much cheaper than university degrees. International students welcome.", ja: "職業教育・訓練の提供機関です。修了証からディプロマまで、手頃で実践的なコースを数百種類用意しています。分野は接客・ホスピタリティ、IT、看護、高齢者ケア、保育、技能職、ビジネスなどです。大学の学位よりずっと安価です。留学生も歓迎します。", zh: "职业教育与培训机构。提供数百门价格实惠、实用性强的课程，从证书到文凭不等。涵盖酒店服务、IT、护理、养老护理、幼儿保育、技工和商科等领域。比大学学位便宜得多。欢迎留学生。",
        ko: "직업 교육 및 훈련 기관입니다. 수백 개의 저렴하고 실용적인 과정(자격증부터 디플로마까지)을 제공합니다. 분야는 접객업, IT, 간호, 노인 복지, 보육, 기술, 비즈니스를 포함합니다. 대학 학위보다 훨씬 저렴합니다. 유학생 환영합니다.",
        url: "https://www.tafensw.edu.au",
        urlLabel: "tafensw.edu.au",
      },
      {
        label: "Learn Live Australia (런 리브 오스트레일리아)",
        en: "A platform connecting students with TAFE and vocational courses across Australia. Search by field of study, location, and course level. Useful for comparing different institutions and finding the right course for your career goals.", ja: "学生とオーストラリア全土のTAFEおよび職業コースをつなぐプラットフォームです。専攻分野、場所、コースのレベルで検索できます。さまざまな教育機関を比較し、キャリア目標に合ったコースを見つけるのに役立ちます。", zh: "一个将学生与澳大利亚各地 TAFE 及职业课程对接的平台。可按专业领域、地点和课程级别进行搜索。有助于比较不同院校，并找到适合你职业目标的课程。",
        ko: "호주 전역의 TAFE 및 직업 교육 과정을 연결해주는 플랫폼입니다. 학습 분야, 위치, 과정 수준별로 검색할 수 있습니다. 다른 기관을 비교하고 경력 목표에 맞는 과정을 찾는 데 유용합니다.",
        url: "https://www.learnliveaustralia.com.au",
        urlLabel: "learnliveaustralia.com.au",
      },
      {
        label: "University of Sydney (시드니 대학교)",
        en: "Australia's oldest university (founded 1850) and a member of the prestigious Group of Eight (Go8). Strong in law, medicine, arts, and sciences. Camperdown/Darlington campus is near the CBD. World ranking: typically top 40 globally.", ja: "オーストラリア最古の大学（1850年創立）で、名門グループ・オブ・エイト（Go8）の一員です。法学、医学、人文科学、理学に強いです。Camperdown/DarlingtonキャンパスはCBDの近くにあります。世界ランキングは通常、世界トップ40位以内です。", zh: "澳大利亚历史最悠久的大学（创办于 1850 年），也是著名的八校联盟（Go8）成员。在法学、医学、人文和理学方面实力雄厚。Camperdown/Darlington 校区靠近市中心。世界排名通常位列全球前 40。",
        ko: "호주 최초의 대학교(1850년 설립)이자 명문 Group of Eight(Go8) 회원입니다. 법학, 의학, 인문학, 과학 분야에 강점이 있습니다. Camperdown/Darlington 캠퍼스는 CBD 인근에 있습니다. 세계 순위는 일반적으로 상위 40위권입니다.",
        url: "https://www.sydney.edu.au",
        urlLabel: "sydney.edu.au",
      },
      {
        label: "UNSW Sydney (뉴사우스웨일즈 대학교)",
        en: "University of New South Wales — another Go8 university. Particularly strong in engineering, business (AGSM), law, computer science, and medicine. Kensington campus, 15 minutes from the CBD by bus or light rail. Known for strong industry connections and graduate employability.", ja: "ニューサウスウェールズ大学 — もう一つのGo8大学です。特に工学、ビジネス（AGSM）、法学、コンピュータサイエンス、医学に強いです。KensingtonキャンパスはCBDからバスまたはライトレールで15分です。強力な産業界とのつながりと卒業生の就職率で知られています。", zh: "新南威尔士大学 — 另一所 Go8 大学。在工程、商科（AGSM）、法学、计算机科学和医学方面尤其突出。Kensington 校区距市中心乘公交或轻轨 15 分钟。以强大的行业联系和毕业生就业能力著称。",
        ko: "또 다른 Go8 대학교입니다. 공학, 경영(AGSM), 법학, 컴퓨터 과학, 의학 분야에서 특히 강합니다. Kensington 캠퍼스는 CBD에서 버스나 경전철로 15분 거리입니다. 강력한 산업 연결과 졸업생 취업률로 유명합니다.",
        url: "https://www.unsw.edu.au",
        urlLabel: "unsw.edu.au",
      },
      {
        label: "University of Technology Sydney (UTS)",
        en: "A young, dynamic university focused on industry-relevant education. Strong in IT, design, communication, business, and nursing. Ultimo campus is right in the city centre — walking distance to Central Station and Chinatown. Known for its distinctive 'brown paper bag' building.", ja: "産業に直結した教育に力を入れる、若く活力のある大学です。IT、デザイン、コミュニケーション、ビジネス、看護に強いです。Ultimoキャンパスは市の中心部にあり、Central駅やチャイナタウンまで徒歩圏内です。独特な「茶色い紙袋」の建物で知られています。", zh: "一所年轻而充满活力、注重行业相关教育的大学。在 IT、设计、传播、商科和护理方面实力较强。Ultimo 校区就在市中心 — 步行即可到达中央车站和唐人街。以其独特的“牛皮纸袋”式建筑而闻名。",
        ko: "산업 맞춤형 교육에 중점을 둔 젊고 역동적인 대학교입니다. IT, 디자인, 커뮤니케이션, 경영, 간호 분야에 강점이 있습니다. Ultimo 캠퍼스는 도심 한복판에 있어 Central Station과 차이나타운에서 도보 거리입니다. 독특한 '갈색 종이 가방' 건물로 유명합니다.",
        url: "https://www.uts.edu.au",
        urlLabel: "uts.edu.au",
      },
      {
        label: "Macquarie University (매쿼리 대학교)",
        en: "Located in North Ryde (north-west Sydney). Strong in linguistics, education, business, and environmental sciences. Known for its large, beautiful campus with a lake and native bushland. The metro station connects directly to the CBD in about 25 minutes. Good for students who prefer a suburban campus feel.", ja: "ノース・ライド（シドニー北西部）に位置します。言語学、教育学、ビジネス、環境科学に強いです。湖と原生林のある広く美しいキャンパスで知られています。メトロ駅からCBDまで約25分で直通しています。郊外型キャンパスの雰囲気を好む学生に適しています。", zh: "位于 North Ryde（悉尼西北部）。在语言学、教育学、商科和环境科学方面实力较强。以拥有湖泊和原生林、面积大而美丽的校园著称。地铁站直达市中心约 25 分钟。适合喜欢郊区校园氛围的学生。",
        ko: "North Ryde(시드니 북서부)에 위치해 있습니다. 언어학, 교육, 경영, 환경 과학 분야에 강점이 있습니다. 호수와 자연림이 있는 크고 아름다운 캠퍼스로 유명합니다. 지하철로 CBD까지 약 25분 거리입니다. 교외 캠퍼스 분위기를 선호하는 학생에게 좋습니다.",
        url: "https://www.mq.edu.au",
        urlLabel: "mq.edu.au",
      },
    ],
  },
  {
    id: "healthcare",
    iconKey: "Ambulance",
    title: "Healthcare",
    koTitle: "의료",
    desc: "Medical services, mental health support, and urgent care",
    koDesc: "의료 서비스, 정신 건강 지원, 응급 진료",
    items: [
      {
        label: "Medicare in Korean (한국어 메디케어 정보)",
        en: "Services Australia provides Medicare information translated into Korean. Covers eligibility, how to enrol, what's covered, and how to use Medicare. Check the website or call the multilingual phone service (131 202) and ask for a Korean interpreter.", ja: "Services Australiaは、韓国語に翻訳されたMedicare情報を提供しています。適用資格、登録方法、保障内容、Medicareの使い方を網羅しています。ウェブサイトを確認するか、多言語電話サービス（131 202）に電話して韓国語通訳を依頼してください。", zh: "Services Australia 提供翻译成韩语的 Medicare 信息。涵盖资格、如何注册、保障范围以及如何使用 Medicare。请查看网站，或拨打多语种电话服务（131 202）并要求韩语口译员。",
        ko: "Services Australia는 한국어로 번역된 메디케어 정보를 제공합니다. 자격 요건, 등록 방법, 적용 범위, 사용 방법을 다룹니다. 웹사이트를 확인하거나 다국어 전화 서비스(131 202)에 전화해 한국어 통역사를 요청하세요.",
        url: "https://www.servicesaustralia.gov.au/medicare",
        urlLabel: "servicesaustralia.gov.au/medicare",
      },
      {
        label: "Bulk Billing Clinics (벌크 빌링 의원)",
        en: "A 'bulk billing' clinic means the doctor bills Medicare directly and you pay nothing out of pocket. You must have a valid Medicare card to use bulk billing. Search 'bulk billing GP near me' to find clinics. Many large branches in Sydney have multilingual staff — Strathfield, Campsie, and Lidcombe are well-known pockets for Korean-speaking doctors, while suburbs like Hurstville and Parramatta have Mandarin- and Cantonese-speaking staff.", ja: "「バルクビリング」のクリニックとは、医師がMedicareに直接請求し、自己負担が一切ないことを意味します。バルクビリングを利用するには有効なMedicare カードが必要です。「bulk billing GP near me」で検索してクリニックを探しましょう。シドニーの多くの大型医院には多言語のスタッフがいます — Strathfield、Campsie、Lidcombeは韓国語を話す医師でよく知られた地区で、HurstvilleやParramattaなどの郊外には北京語や広東語を話すスタッフがいます。", zh: "“全额报销”（bulk billing）诊所是指医生直接向 Medicare 收费，你无需自付任何费用。必须持有有效的 Medicare 卡才能使用全额报销。搜索“bulk billing GP near me”即可找到诊所。悉尼许多大型诊所都配备多语种员工 — Strathfield、Campsie 和 Lidcombe 是韩语医生的知名聚集区，而 Hurstville 和 Parramatta 等郊区则有讲普通话和粤语的员工。",
        ko: "'벌크 빌링' 의원은 의사가 메디케어에 직접 청구하므로 본인 부담금이 없습니다. 벌크 빌링을 이용하려면 유효한 메디케어 카드가 있어야 합니다. 'bulk billing GP near me'를 검색해 의원을 찾으세요. 한인 밀집 지역(Strathfield, Campsie, Lidcombe)의 많은 의원에는 한국어 구사 의사가 있습니다.",
        url: "https://www.healthdirect.gov.au/bulk-billing",
        urlLabel: "healthdirect.gov.au",
      },
      {
        label: "Hospital ER vs Urgent Care (응급실 vs 응급 진료)",
        en: "For genuine emergencies (chest pain, severe bleeding, difficulty breathing, unconsciousness) — go to a public hospital Emergency Department. It's free at public hospitals regardless of visa status. For non-life-threatening after-hours issues (minor infections, sprains, cuts), visit an Urgent Care Centre — cheaper and faster than ER with no appointment needed.", ja: "本当の緊急事態（胸の痛み、ひどい出血、呼吸困難、意識不明）の場合は、公立病院の救急外来へ行きましょう。公立病院ではビザの状況にかかわらず無料です。命に関わらない時間外の問題（軽い感染症、捻挫、切り傷）は、アージェントケアセンターを受診しましょう — 救急外来より安く速く、予約も不要です。", zh: "对于真正的紧急情况（胸痛、严重出血、呼吸困难、失去意识）— 请前往公立医院急诊科。在公立医院，无论签证状况如何都是免费的。对于非危及生命的非工作时段问题（轻微感染、扭伤、割伤），请前往紧急护理中心 — 比急诊更便宜、更快捷，且无需预约。",
        ko: "진정한 응급 상황(흉통, 심한 출혈, 호흡 곤란, 의식 불명) — 공립 병원 응급실로 가세요. 비자 상태에 관계없이 공립 병원 응급실은 무료입니다. 생명에 위협이 되지 않는 야간 문제(가벼운 감염, 염좌, 상처)는 Urgent Care Centre를 방문하세요 — 응급실보다 저렴하고 빠르며 예약이 필요 없습니다.",
        url: "https://www.health.nsw.gov.au/urgentcare",
        urlLabel: "health.nsw.gov.au/urgentcare",
      },
      {
        label: "Beyond Blue (비욘드 블루)",
        en: "Australia's leading mental health support organisation. Provides free, confidential support for anxiety, depression, and other mental health concerns. 24/7 phone counselling: 1300 224 636. Online chat and forum also available. Website has resources translated into multiple languages including Korean.", ja: "オーストラリアを代表するメンタルヘルス支援団体です。不安、うつ、その他のメンタルヘルスの悩みに対して、無料で秘密厳守のサポートを提供しています。24時間365日の電話カウンセリング：1300 224 636。オンラインチャットとフォーラムも利用できます。ウェブサイトには韓国語を含む多言語に翻訳された資料があります。", zh: "澳大利亚领先的心理健康支持机构。为焦虑、抑郁及其他心理健康问题提供免费、保密的支持。24 小时电话心理咨询：1300 224 636。也提供在线聊天和论坛。网站上有包括韩语在内的多种语言翻译资料。",
        ko: "호주 최고의 정신 건강 지원 기관입니다. 불안, 우울증 및 기타 정신 건강 문제에 대한 무료 비밀 지원을 제공합니다. 24시간 전화 상담: 1300 224 636. 온라인 채팅과 포럼도 이용 가능합니다. 웹사이트에는 한국어를 포함한 여러 언어로 번역된 자료가 있습니다.",
        url: "https://www.beyondblue.org.au",
        urlLabel: "beyondblue.org.au",
      },
      {
        label: "Lifeline (라이프라인)",
        en: "24/7 crisis support service. Anyone can call — no Medicare or appointment needed. If you're feeling overwhelmed, lonely, suicidal, or just need someone to talk to, call 13 11 14. Also offers online chat (7pm-midnight) and text support. Completely confidential.", ja: "24時間365日の危機サポートサービスです。誰でも電話できます — Medicareや予約は不要です。圧倒されている、孤独、自殺を考えている、あるいはただ話し相手が必要なときは、13 11 14に電話してください。オンラインチャット（午後7時〜深夜）とテキストサポートも提供しています。完全に秘密が守られます。", zh: "24 小时危机支持服务。任何人都可以拨打 — 无需 Medicare 或预约。如果你感到不堪重负、孤独、有自杀念头，或只是需要有人聊聊，请拨打 13 11 14。还提供在线聊天（晚 7 点至午夜）和短信支持。完全保密。",
        ko: "24시간 위기 지원 서비스입니다. 누구나 전화할 수 있습니다 — 메디케어나 예약이 필요 없습니다. 압도감, 외로움, 자살 충동을 느끼거나 그냥 이야기할 사람이 필요하면 13 11 14로 전화하세요. 온라인 채팅(오후 7시~자정)과 문자 지원도 제공됩니다. 완전히 비밀이 보장됩니다.",
        url: "https://www.lifeline.org.au",
        urlLabel: "lifeline.org.au",
      },
    ],
  },
  {
    id: "emergency",
    iconKey: "AlertTriangle",
    title: "Emergency Contacts",
    koTitle: "비상 연락처",
    desc: "Who to call in an emergency — keep these numbers saved",
    koDesc: "응급 시 연락할 곳 — 이 번호를 저장해두세요",
    items: [
      {
        label: "Emergency — 000 (비상 전화 — 000)",
        en: "For police, fire, or ambulance in genuine emergencies ONLY. A genuine emergency means: immediate danger to life or property, a serious crime in progress, a fire, or a medical emergency (chest pain, difficulty breathing, severe bleeding, unconsciousness). Call 000 and tell the operator which service you need. An interpreter service is available — just say 'Korean' or your language. Do NOT call 000 for information, directions, or non-emergencies.", ja: "本当の緊急事態に限り、警察、消防、救急車を呼んでください。本当の緊急事態とは：生命や財産への差し迫った危険、進行中の重大犯罪、火災、医療上の緊急事態（胸の痛み、呼吸困難、ひどい出血、意識不明）です。000に電話し、必要なサービスをオペレーターに伝えてください。通訳サービスが利用できます — 「Korean」または自分の言語を伝えるだけです。情報の問い合わせ、道案内、緊急でない用件で000に電話しないでください。", zh: "仅在真正的紧急情况下，才拨打警察、消防或救护车。真正的紧急情况是指：生命或财产面临直接危险、正在发生的严重犯罪、火灾，或医疗紧急情况（胸痛、呼吸困难、严重出血、失去意识）。拨打 000 并告诉接线员你需要哪种服务。提供口译服务 — 只需说“Korean”或你的语言。请勿因咨询信息、问路或非紧急事项拨打 000。",
        ko: "진정한 응급 상황에서만 경찰, 소방서, 구급차를 호출하세요. 진정한 응급 상황이란: 생명이나 재산에 즉각적인 위험, 진행 중인 중범죄, 화재, 의료 응급(흉통, 호흡 곤란, 심한 출혈, 의식 불명)입니다. 000에 전화하여 필요한 서비스를 알리세요. 통역 서비스를 이용할 수 있습니다 — 'Korean' 또는 원하는 언어를 말하세요. 정보 문의, 길찾기, 비응급 상황에는 000에 전화하지 마세요.",
        url: "https://www.nsw.gov.au/emergency",
        urlLabel: "nsw.gov.au/emergency",
      },
      {
        label: "SES NSW — 132 500 (NSW 주 비상 서비스)",
        en: "The State Emergency Service handles: storms (roof damage, fallen trees), floods (sandbagging, rescue), building damage, and landslips. Call 132 500 for help with storm and flood emergencies. Do NOT call 000 for these — SES is the right number. Volunteers will come and help, even in the middle of the night.", ja: "州緊急サービス（SES）は、暴風雨（屋根の損傷、倒木）、洪水（土のう、救助）、建物の損傷、地滑りを扱います。暴風雨や洪水の緊急時は132 500に電話してください。これらの場合、000ではなくSESが正しい番号です。ボランティアが真夜中でも駆けつけて助けてくれます。", zh: "州紧急服务（SES）负责处理：暴风雨（屋顶损坏、树木倒伏）、洪水（堆沙袋、救援）、建筑物损坏和山体滑坡。遇到暴风雨和洪水紧急情况，请拨打 132 500。这些情况不要拨打 000 — SES 才是正确的号码。志愿者会赶来帮忙，哪怕是在半夜。",
        ko: "NSW 주 비상 서비스는 다음을 처리합니다: 폭풍(지붕 손상, 쓰러진 나무), 홍수(모래주머니, 구조), 건물 손상, 산사태. 폭풍 및 홍수 비상 시 132 500으로 전화하세요. 이런 경우 000이 아닌 SES가 올바른 번호입니다. 자원봉사자가 한밤중에도 와서 도와줍니다.",
        url: "https://www.ses.nsw.gov.au",
        urlLabel: "ses.nsw.gov.au",
      },
      {
        label: "Poisons Information Centre — 13 11 26 (독극물 정보 센터)",
        en: "24/7 free advice if someone has swallowed something poisonous, been bitten or stung, or come into contact with a dangerous substance. Call from anywhere in Australia. They will tell you exactly what to do — whether to go to hospital, drink water, or stay home and observe. Available 365 days a year.", ja: "誰かが有毒なものを飲み込んだ、咬まれた・刺された、危険な物質に触れた場合の24時間無料相談です。オーストラリアのどこからでも電話できます。病院に行くべきか、水を飲むべきか、自宅で様子を見るべきか、正確に指示してくれます。年中無休365日利用できます。", zh: "如果有人吞下有毒物质、被咬伤或蜇伤，或接触了危险物质，可拨打 24 小时免费咨询。从澳大利亚任何地方都可拨打。他们会确切告诉你该怎么做 — 是否需要去医院、多喝水，还是在家观察。全年 365 天可用。",
        ko: "누군가 유독 물질을 삼켰거나, 물리거나 쏘이거나, 위험 물질에 접촉한 경우 24시간 무료 상담을 제공합니다. 호주 어디서나 전화하세요. 정확히 무엇을 해야 하는지 알려줍니다 — 병원에 갈지, 물을 마실지, 집에서 지켜볼지. 연중무휴 365일 이용 가능합니다.",
        url: "https://www.poisonsinfo.nsw.gov.au",
        urlLabel: "poisonsinfo.nsw.gov.au",
      },
      {
        label: "Crime Stoppers — 1800 333 000 (크라임 스토퍼스)",
        en: "Report crime anonymously. If you see something suspicious, know about a crime, or want to provide information without giving your name — call Crime Stoppers. You don't have to go to court or give a statement. Can also report online. Not for emergencies — use 000 for those.", ja: "匿名で犯罪を通報します。不審なものを見た、犯罪について知っている、名前を明かさずに情報を提供したい — そのようなときはCrime Stoppersに電話してください。裁判所に行ったり供述したりする必要はありません。オンラインでも通報できます。緊急時用ではありません — 緊急時は000を使ってください。", zh: "匿名举报犯罪。如果你看到可疑情况、了解某起犯罪，或想在不透露姓名的情况下提供信息 — 请拨打 Crime Stoppers。你无需出庭或作陈述。也可以在线举报。不适用于紧急情况 — 紧急情况请使用 000。",
        ko: "익명으로 범죄를 신고합니다. 수상한 것을 목격했거나, 범죄에 대해 알게 되었거나, 이름을 밝히지 않고 정보를 제공하려면 Crime Stoppers에 전화하세요. 법정에 출석하거나 진술할 필요가 없습니다. 온라인 신고도 가능합니다. 응급 상황이 아닙니다 — 응급 상황은 000을 사용하세요.",
        url: "https://www.nsw.crimestoppers.com.au",
        urlLabel: "nsw.crimestoppers.com.au",
      },
    ],
  },
  {
    id: "printable",
    iconKey: "Book",
    title: "Printable Travel Resources",
    koTitle: "인쇄 가능한 여행 자료",
    desc: "Downloadable itineraries, packing lists, and travel guides",
    koDesc: "다운로드 가능한 여행 일정표, 짐챙김 목록, 여행 가이드",
    items: [
      {
        label: "Sydney Weekend Itinerary (시드니 주말 일정표)",
        en: "A printable 2-day itinerary covering Sydney's top attractions: Opera House, Harbour Bridge, Bondi Beach, The Rocks, and more. Includes transport options, estimated costs, and restaurant recommendations.", ja: "シドニーの主要な観光名所を巡る印刷可能な2日間の旅程：オペラハウス、ハーバーブリッジ、ボンダイビーチ、ザ・ロックスなど。交通手段、予想される費用、レストランのおすすめが含まれています。", zh: "一份可打印的两天行程，涵盖悉尼的顶级景点：歌剧院、海港大桥、邦迪海滩、岩石区等。包含交通方式、预估费用和餐厅推荐。",
        ko: "시드니의 주요 명소를 둘러보는 2일차 일정표: 오페라하우스, 하버브리지, 본디비치, 더 록스 등. 교통 수단, 예상 비용, 레스토랑 추천이 포함되어 있습니다.",
        url: "/downloads/sydney-weekend-itinerary.html",
        urlLabel: "Download HTML",
      },
      {
        label: "NSW Road Trip Planner (NSW 자동차 여행 계획표)",
        en: "A comprehensive guide for planning a road trip through NSW, including route suggestions, accommodation options, fuel stops, and scenic viewpoints. Covers routes from Sydney to Blue Mountains, Hunter Valley, and Byron Bay.", ja: "NSWを巡るロードトリップを計画するための総合ガイドで、ルートの提案、宿泊施設の選択肢、給油ポイント、眺めの良い展望スポットが含まれています。シドニーからブルー・マウンテンズ、ハンター・バレー、バイロン・ベイに至るルートを網羅しています。", zh: "一份规划新州公路旅行的综合指南，包含路线建议、住宿选择、加油点和风景优美的观景点。涵盖从悉尼到蓝山、猎人谷和拜伦湾的路线。",
        ko: "NSW 자동차 여행을 계획하기 위한 종합 가이드로, 추천 경로, 숙소 선택, 주유소, 경치 좋은 전망대가 포함되어 있습니다. 시드니에서 블루마운틴, 헌터밸리, 바이런베이까지의 경로를 다룹니다.",
        url: "/downloads/nsw-roadtrip-planner.html",
        urlLabel: "Download HTML",
      },
      {
        label: "Australia Packing Checklist (호주 여행 짐챙김 체크리스트)",
        en: "Essential items to pack for different seasons and regions in Australia. Includes clothing, electronics, travel documents, and region-specific gear (beach, hiking, city).", ja: "オーストラリアのさまざまな季節と地域に合わせて持って行くべき必需品。衣類、電子機器、旅行書類、地域別の装備（ビーチ、ハイキング、都市）が含まれています。", zh: "针对澳大利亚不同季节和地区应携带的必备物品。包括衣物、电子设备、旅行证件和针对特定地区的装备（海滩、徒步、城市）。",
        ko: "호주의 다양한 계절과 지역에 맞는 필수 짐챙김 항목입니다. 의류, 전자기기, 여행 서류, 지역 특화 장비(해변, 등산, 도시)가 포함되어 있습니다.",
        url: "/downloads/australia-packing-checklist.html",
        urlLabel: "Download HTML",
      },
      {
        label: "Australian Wildlife Guide (호주 야생동물 가이드)",
        en: "A pocket guide to Australia's unique wildlife, including safety tips for encounters with snakes, spiders, jellyfish, and other creatures. Includes identification charts and what to do if you encounter wildlife.", ja: "オーストラリア独自の野生動物についてのポケットガイドで、ヘビ、クモ、クラゲなどの生き物に出会ったときの安全のヒントが含まれています。識別チャートと、野生動物に出会ったときにどうすべきかが含まれています。", zh: "一本介绍澳大利亚独特野生动物的袖珍指南，包含遇到蛇、蜘蛛、水母等生物时的安全提示。包含识别图表以及遇到野生动物时该怎么办。",
        ko: "호주의 독특한 야생동물을 위한 포켓 가이드로, 뱀, 거미, 해파리 등의 동물과 만났을 때의 안전 팁이 포함되어 있습니다. 식별 차트와 야생동물과 만났을 때 해야 할 일이 포함되어 있습니다.",
        url: "/downloads/australian-wildlife-guide.html",
        urlLabel: "Download HTML",
      },
    ],
  },
];

const iconKeys = ["AlertTriangle", "Ambulance", "Book", "Building2"];

export default function ResourcesPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero header (dark) */}
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Resources</En>
            <Ja>リソース</Ja>
            <Zh>资源</Zh>
            <Ko>자료</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En translated>Official resources</En>
            <Ja>公式リソース</Ja>
            <Zh>官方资源</Zh>
            <Ko>공식 자료</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En translated>Government services, education, healthcare, and emergency contacts for life in NSW.</En>
            <Ja>NSWでの暮らしのための政府サービス、教育、医療、緊急連絡先。</Ja>
            <Zh>为新南威尔士州生活提供的政府服务、教育、医疗和紧急联系方式。</Zh>
            <Ko>NSW 생활을 위한 정부 서비스, 교육, 의료, 비상 연락처.</Ko>
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Emergency banner — always visible, not buried in accordions */}
        <div className="mb-12 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/30 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-rose-500 text-lg shrink-0 mt-0.5">🚨</span>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-sm text-rose-700 dark:text-rose-400 mb-2">
                <En translated>Emergency — save these numbers</En>
                <Ja>緊急 — これらの番号を保存しましょう</Ja>
                <Zh>紧急情况 — 请保存这些号码</Zh>
                <Ko>응급 — 이 번호를 저장하세요</Ko>
              </h2>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-white/60 dark:bg-dark-surface/60 rounded-xl p-2.5">
                  <p className="font-bold text-rose-600 dark:text-rose-500 text-base">000</p>
                  <p className="text-xs text-eucalypt/70 dark:text-dark-muted/70">
                    <En translated>Police, Fire, Ambulance</En>
                    <Ja>警察、消防、救急</Ja>
                    <Zh>警察、消防、救护车</Zh>
                    <Ko>경찰, 소방, 구급</Ko>
                  </p>
                </div>
                <div className="bg-white/60 dark:bg-dark-surface/60 rounded-xl p-2.5">
                  <p className="font-bold text-rose-600 dark:text-rose-500 text-base">13 11 26</p>
                  <p className="text-xs text-eucalypt/70 dark:text-dark-muted/70">
                    <En translated>Poisons Info</En>
                    <Ja>中毒情報</Ja>
                    <Zh>中毒信息</Zh>
                    <Ko>독극물 정보</Ko>
                  </p>
                </div>
                <div className="bg-white/60 dark:bg-dark-surface/60 rounded-xl p-2.5">
                  <p className="font-bold text-rose-600 dark:text-rose-500 text-base">13 11 14</p>
                  <p className="text-xs text-eucalypt/70 dark:text-dark-muted/70">
                    <En translated>Lifeline 24/7</En>
                    <Ja>ライフライン 24時間</Ja>
                    <Zh>生命热线 24小时</Zh>
                    <Ko>라이프라인 24시간</Ko>
                  </p>
                </div>
                <div className="bg-white/60 dark:bg-dark-surface/60 rounded-xl p-2.5">
                  <p className="font-bold text-rose-600 dark:text-rose-500 text-base">1300 224 636</p>
                  <p className="text-xs text-eucalypt/70 dark:text-dark-muted/70">
                    <En translated>Beyond Blue</En>
                    <Ja>Beyond Blue</Ja>
                    <Zh>Beyond Blue</Zh>
                    <Ko>비욘드 블루</Ko>
                  </p>
                </div>
              </div>
              <p className="text-xs text-rose-600/70 dark:text-rose-400/60 mt-2">
                <En translated>For non-emergencies: <span className="font-semibold">SES 132 500</span> (storms, floods) · <span className="font-semibold">Crime Stoppers 1800 333 000</span></En>
                <Ja>緊急でない場合：<span className="font-semibold">SES 132 500</span>（嵐、洪水）· <span className="font-semibold">Crime Stoppers 1800 333 000</span></Ja>
                <Zh>非紧急情况：<span className="font-semibold">SES 132 500</span>（风暴、洪水）· <span className="font-semibold">Crime Stoppers 1800 333 000</span></Zh>
                <Ko>비응급: <span className="font-semibold">SES 132 500</span> (폭풍, 홍수) · <span className="font-semibold">Crime Stoppers 1800 333 000</span></Ko>
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <Accordion sections={sections} iconKeys={iconKeys} itemDelayS={0.08} />
        </div>

        {/* Bottom note */}
        <div className="mt-16 bg-sunset/5 border border-sunset/20 rounded-2xl p-5 text-center">
          <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60">
            <En translated>Made with {FLAG_EMOJI} for everyone new to Australia</En>
            <Ja>オーストラリアに初めて来るすべての人のために、{FLAG_EMOJI} を込めて作りました</Ja>
            <Zh>为所有初到澳大利亚的人用心制作 {FLAG_EMOJI}</Zh>
            <Ko>호주에 처음 오시는 모든 분들을 위한 친근한 가이드입니다 {FLAG_EMOJI}</Ko>
          </p>
        </div>
      </div>
    </div>
  );
}

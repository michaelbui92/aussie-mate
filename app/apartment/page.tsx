// Server component — bilingual apartment rental guide for NSW.
// Redesigned in editorial style: full-bleed hero image with dual CTAs
// (matches the homepage vocabulary), persona chips, then a vertical
// sequence of EditorialSection cards (some with image banners).

import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { articleLdJson, breadcrumbLdJson, seoFor, withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";

export const metadata = withSeo(
  {

  ...seoFor("/apartment"),
  title: "Renting in Sydney — Apartments, Bonds, Tenants Rights & Rental Guide | AussieGuides",
  description:
    "How to rent an apartment in Sydney — Flatmates, Domain, Realestate search tips, rental application documents, NSW tenant rights, bonds, and common scams to avoid. Complete guide for newcomers.",
  },
  "/apartment"
);

type ApartmentItem = { label: string; en: string; ko: string; ja?: string; zh?: string; url?: string };
type ApartmentSectionData = Omit<EditorialSectionData, "items"> & {
  items: ApartmentItem[];
};

const sections: ApartmentSectionData[] = [
  {
    id: "search",
    iconKey: "Search",
    accent: "sage",
    img: "/images/unsplash-1545324418-cc1a3fa10c00.jpg",
    title: "Finding a Place",
    koTitle: "부동산 찾기",
    desc: "Where to search and what to know",
    koDesc: "검색 방법과 알아야 할 것",
    items: [
      { label: "Flatmates.com.au", en: "The most popular option in Australia for rooms and housemates. Filter by location, budget, move-in date, and lifestyle preferences (smoking, pets, gender). Flatmates.com.au also handles the lease and bond through their platform — making it much safer than private arrangements. Both renters and rooms are listed, so you can search for a place or list yourself as looking.", ja: "オーストラリアで部屋とルームメイト探しに最も人気の選択肢です。場所、予算、入居日、ライフスタイルの希望（喫煙、ペット、性別）で絞り込めます。Flatmates.com.auはプラットフォームを通じて賃貸契約と保証金の手続きも行うため、個人間の取り決めよりはるかに安全です。入居者募集と部屋の両方が掲載されているので、部屋を探すことも自分を募集に掲載することもできます。", zh: "在澳大利亚寻找房间和室友最受欢迎的选择。可按地点、预算、入住日期和生活方式偏好（吸烟、宠物、性别）筛选。Flatmates.com.au还通过其平台处理租约和押金——比私下安排安全得多。租房者和房间均有发布，因此你既可以找房，也可以发布自己的求租信息。", ko: "호주에서 가장 인기 있는 방 및 룸메이트 검색 플랫폼입니다. 위치, 예산, 입주일, 라이프스타일 선호도(흡연, 반려동물, 성별)로 필터링할 수 있습니다. 플랫폼을 통해 임대차 계약과 보증금도 처리하므로 사기 위험이 적습니다.", url: "https://flatmates.com.au" },
      { label: "Domain", en: "Mainstream real estate site with the largest selection of rental listings. Has a Korean language option in some areas. Best for people who want their own apartment rather than a room in a shared house.", ja: "賃貸物件数が最も多い大手不動産サイト。一部の地域では韓国語オプションがあります。シェアハウスの一室ではなく、自分専用のアパートを希望する人に最適です。", zh: "主流房产网站，出租房源选择最多。部分地区提供韩语选项。最适合希望拥有自己独立公寓而不是合租房单个房间的人。", ko: "가장 큰 임대 목록을 갖춘 부동산 사이트입니다. 일부 지역에서 한국어 옵션이 있습니다. 셰어하우스의 방이 아닌 자신만의 아파트를 원하는 분에게 적합합니다.", url: "https://domain.com.au" },
      { label: "Realestate.com.au", en: "Another major real estate portal. Similar to Domain in scope. Both sites list real estate agents' rentals, not private landlords.", ja: "もう一つの主要な不動産ポータル。扱う範囲はDomainと同様です。どちらのサイトも個人の大家ではなく、不動産仲介業者の賃貸物件のみを掲載しています。", zh: "另一个主要房产门户网站。范围与Domain类似。两个网站列出的都是房地产中介的出租房源，而非私人房东。", ko: "또 다른 주요 부동산 포털입니다. 범위는 Domain과 유사합니다. 두 사이트 모두 부동산 중개인의 임대 목록만 있습니다.", url: "https://realestate.com.au" },
      { label: "Facebook Marketplace", en: "Can have private listings and cheaper options, but also more scams. Always verify the property exists before paying anything. Do not transfer money to someone you haven't met.", ja: "個人の掲載やより安い物件もある一方、詐欺も多くなります。支払う前に必ず物件が実在するか確認してください。会ったことのない相手にお金を振り込まないで。", zh: "可能有私人房源和更便宜的选择，但诈骗也更多。付款前务必核实房产确实存在。不要向素未谋面的人转账。", ko: "개인부동산과 더 저렴한 선택이 있을 수 있지만 사기도 많습니다. 돈을 지불하기 전에 부동산이 실제로 존재하는지 확인하세요. 만난 적 없는 사람에게 송금하지 마세요.", url: "https://facebook.com/marketplace" },
    ],
  },
  {
    id: "application",
    iconKey: "Clipboard",
    accent: "coast",
    title: "Rental Application",
    koTitle: "임대 지원",
    desc: "Everything you need to apply for a rental property in NSW",
    koDesc: "NSW 임대 부동산에 지원할 때 필요한 모든 것",
    items: [
      { label: "Required documents", en: "100 points of ID — passport, visa, bank statements, payslips, rental reference", ja: "本人確認100ポイント — パスポート、ビザ、銀行取引明細、給与明細、賃貸の推薦状", zh: "100分身份证明 — 护照、签证、银行对账单、工资单、租房推荐信", ko: "신분증 100포인트 — 여권, 비자, 은행 거래내역, 급여명세서, 이전 임대인 추천서" },
      { label: "Cover letter", en: "Short introduction: who you are, why you want this property, your income, how long you plan to stay", ja: "簡単な自己紹介：あなたが誰か、なぜこの物件を希望するのか、収入、滞在予定期間", zh: "简短自我介绍：你是谁、为什么想要这套房、你的收入、计划住多久", ko: "간단한 소개서: 본인 소개, 부동산을 원하는 이유, 수입, 거주 예정 기간" },
      { label: "Rental history", en: "Previous landlord's contact details — agents will call to verify you've kept the place well and paid on time", ja: "前の大家の連絡先 — 仲介業者が電話して、物件を良好に保ち家賃を期日どおり支払っていたかを確認します", zh: "前房东的联系方式 — 中介会致电核实你是否妥善维护房屋并按期支付租金", ko: "이전 임대인의 연락처 — 부동산 중개인이 집 상태 및 임대료 납부 이력 확인을 위해 연락함" },
      { label: "Proof of income", en: "Recent payslips (3-6), recent tax return, or Centrelink letter showing consistent income", ja: "直近の給与明細（3〜6枚）、直近の確定申告書、または安定した収入を示すCentrelinkの通知書", zh: "近期的工资单（3-6张）、近期纳税申报表，或显示稳定收入的Centrelink信函", ko: "최근 급여명세서(3~6개월), 최근 소득세 신고서, 또는 Centrelink 확인서" },
      { label: "Bond", en: "Usually 4 weeks rent — you pay it upfront and get it back at the end if the property is clean and undamaged", ja: "通常は家賃4週間分 — 前払いで支払い、退去時に物件がきれいで損傷がなければ返金されます", zh: "通常为4周租金 — 你需预付，退房时如果房屋干净且无损坏即可拿回", ko: "보통 임대료 4주분 — 입주 시 선불로 납부하고, 퇴거 시 청소 및 손상 없으면 돌려받음" },
    ],
  },
  {
    id: "rights",
    iconKey: "ShieldCheck",
    accent: "amber",
    title: "Tenant Rights in NSW",
    koTitle: "NSW 임차인 권리",
    desc: "You have legal rights — know them",
    koDesc: "법적 권리가 있습니다 — 알고 있으세요",
    items: [
      { label: "Rent increases", en: "Landlord can only increase rent once every 12 months. Must give 60 days written notice.", ja: "大家が家賃を値上げできるのは12か月に1回だけです。60日前の書面による通知が必要です。", zh: "房东每12个月只能涨租一次。必须提前60天书面通知。", ko: "임대인은 12개월에 한 번만 임대료를 올릴 수 있음. 60일 전 서면 고지 필수." },
      { label: "Repairs", en: "Landlord must fix anything that affects health, safety, or basic living — within 14 days for non-urgent, immediately for urgent", ja: "大家は健康、安全、基本的な生活に影響する問題を修繕しなければなりません — 緊急でない場合は14日以内、緊急の場合は直ちに", zh: "房东必须修复任何影响健康、安全或基本生活的问题 — 非紧急情况14天内，紧急情况立即处理", ko: "임대인은 건강, 안전, 기본 생활에 영향을 미치는 문제를 수리해야 함 — 긴급하지 않은 것은 14일, 긴급한 것은 즉시" },
      { label: "Entry notice", en: "Landlord must give 24 hours written notice before entering your home (except in emergencies)", ja: "大家は（緊急時を除き）あなたの住居に入る前に24時間前の書面による通知をしなければなりません", zh: "房东进入你的住所前必须提前24小时书面通知（紧急情况除外）", ko: "임대인은 긴급 상황을 제외하고는 입주 전 24시간 서면 고지를 해야 함" },
      { label: "Eviction", en: "Landlord must give 90 days notice if ending a periodic lease without cause. 30 days if you're behind on rent.", ja: "大家が正当な理由なく定期賃貸契約を終了する場合は90日前の通知が必要です。家賃を滞納している場合は30日です。", zh: "如果房东无正当理由终止周期性租约，必须提前90天通知。若你拖欠租金，则为30天。", ko: "임대인이 정당한 사유 없이 월세를 종료하려면 90일 전에 고지해야 함. 임대료 연체 시 30일." },
      { label: "No cause termination", en: "Even without a reason, landlord must give 90 days (periodic) or 30 days (fixed-term) notice to move out", ja: "理由がなくても、大家は退去を求める際に90日（定期契約）または30日（定期借家契約）の通知をしなければなりません", zh: "即使没有理由，房东要求你搬出也必须提前90天（周期性租约）或30天（固定期限租约）通知", ko: "이유 없이도 임대인은 퇴거를 통보할 때, 정기 계약(periodic)은 90일, 기간 정한 계약(fixed-term)은 30일 전에 고지해야 합니다." },
    ],
  },
  {
    id: "re-phrases",
    iconKey: "Building",
    accent: "stone",
    title: "Common Real Estate Phrases",
    koTitle: "부동산 표현",
    desc: "What agents actually mean",
    koDesc: "부동산 중개인이 실제로 의미하는 것",
    items: [
      { label: '"Quiet location"', en: "It's on a main road — expect traffic noise", ja: "幹線道路沿い — 交通騒音が予想されます", zh: "位于主干道旁 — 会有交通噪音", ko: "주 도로에 위치 — 교통 소음이 예상됨" },
      { label: '"Convenient to transport"', en: "Near a train station or bus stop, but it might not be walking distance", ja: "駅やバス停の近くですが、徒歩圏内とは限りません", zh: "靠近火车站或公交站，但可能不在步行距离内", ko: "기차역이나 버스 정류장 가까이 — 도보 거리 아닐 수 있음" },
      { label: '"Charming"', en: "Old, outdated, or small — but has character", ja: "古く、時代遅れ、または狭い — しかし味わいがあります", zh: "老旧、过时或狭小 — 但别具特色", ko: "오래되거나 낡았지만 분위기가 있음" },
      { label: '"Perfect for families"', en: "Might not have a yard, but there are nearby parks", ja: "庭はないかもしれませんが、近くに公園があります", zh: "可能没有院子，但附近有公园", ko: "마당 없을 수 있지만 근처 공원 있음" },
      { label: '"Must be sold"', en: "Price is too high — not a good deal", ja: "価格が高すぎる — お得ではありません", zh: "价格太高 — 不划算", ko: "가격이 너무 높음 — 좋은 거래가 아님" },
      { label: '"Inspections are strict"', en: "Competition is high — your application needs to be strong", ja: "競争が激しい — 申請内容を強固にする必要があります", zh: "竞争激烈 — 你的申请必须足够有竞争力", ko: "경쟁이 심함 — 지원서를 잘 준비해야 함" },
      { label: '"First to inspect buys"', en: "Uncommon — verify this claim before making decisions", ja: "一般的ではない — 判断を下す前にこの主張を確認してください", zh: "不常见 — 在做决定前请核实这一说法", ko: "일반적이지 않음 — 결론 내리기 전에 확인 필요" },
    ],
  },
  {
    id: "red-flags",
    iconKey: "Flag",
    accent: "rose",
    title: "Red Flags to Watch",
    koTitle: "주의해야 할 위험 신호",
    desc: "Walk away if you see these",
    koDesc: "이런 것이 보이면 걸어 다니세요",
    items: [
      { label: "No formal lease", en: "Always get a written Residential Tenancy Agreement — verbal agreements are not enforceable", ja: "必ず書面の居住賃貸契約書（Residential Tenancy Agreement）を取得してください — 口頭の合意は法的強制力がありません", zh: "务必取得书面住宅租赁协议（Residential Tenancy Agreement）— 口头协议不具法律效力", ko: "반드시 서면 임대차계약서를 받아야 함 — 구두 합의는 법적 효력이 없습니다" },
      { label: "Landlord won't do repairs", en: "Persistent damage that's ignored is a sign the landlord won't look after the property", ja: "無視され続ける損傷は、大家が物件を管理しない兆候です", zh: "长期被忽视的损坏，是房东不会好好维护房屋的信号", ko: "수리 요청을 계속 무시하는 임대인은 부동산 관리에 관심이 없는 것입니다" },
      { label: "Pressure to pay cash", en: "Never pay bond or rent in cash without a receipt. All payments should be traceable.", ja: "領収書なしで保証金や家賃を現金で支払わないでください。すべての支払いは追跡可能であるべきです。", zh: "切勿在没有收据的情况下用现金支付押金或租金。所有付款都应可追溯。", ko: "영수증 없이 현금으로 보증금이나 임대료를 지불하지 마세요. 모든 결제내역은 추적 가능해야 합니다." },
      { label: "Rent too cheap", en: "If it's significantly below market rate, something is wrong — or it's a scam", ja: "相場より著しく安い場合、何か問題があるか、詐欺です", zh: "如果价格明显低于市场价，那一定有问题 — 或者是骗局", ko: "시세보다 현저히 낮으면 무언가 문제가 있다는 신호 — 사기일 수 있습니다" },
      { label: "Won't meet in person", en: "Legitimate landlords will meet you or have an agent. Be wary of online-only transactions.", ja: "正規の大家は直接会うか、仲介業者を立てます。オンラインのみの取引には注意してください。", zh: "正规房东会与你见面或委托中介。对仅限线上进行的交易要警惕。", ko: "정당한 임대인은 직접 만나거나 중개인을 섭외합니다. 온라인 거래만 고집하는 경우는 주의하세요." },
    ],
  },
  {
    id: "costs",
    iconKey: "DollarSign",
    accent: "sunset",
    img: "/images/moving_boxes.jpg",
    title: "Bills & Move-in Costs",
    koTitle: "공과금 및 입주 비용",
    desc: "What to budget for",
    koDesc: "예산에 포함해야 할 것들",
    items: [
      { label: "Bond", en: "Usually 4 weeks rent — paid upfront before moving in", ja: "通常は家賃4週間分 — 入居前に前払いで支払います", zh: "通常为4周租金 — 入住前预付", ko: "보통 임대료의 4주분 — 입주 전에 선불로 지불" },
      { label: "First week rent", en: "Paid in advance, from the day you move in", ja: "入居日から前払いで支払います", zh: "入住当天起预付", ko: "선불로 지불, 입주일부터" },
      { label: "Utility connections", en: "Electricity, gas, internet — you set these up yourself. Some providers charge connection fees.", ja: "電気、ガス、インターネット — 自分で契約します。事業者によっては接続費用がかかります。", zh: "电、燃气、网络 — 由你自己开通。部分供应商会收取接通费。", ko: "전기, 가스, 인터넷 — 직접 신청해야 합니다. 일부 공급업체는 연결 비용을 부과합니다." },
      { label: "Moving costs", en: "Hire a van or movers. Sydney moves typically cost $150-$500 AUD depending on distance.", ja: "バンを借りるか引越し業者を利用しましょう。シドニーの引越しは距離に応じて通常$150〜$500 AUDかかります。", zh: "租一辆面包车或找搬家公司。悉尼搬家通常花费$150-$500 AUD，具体取决于距离。", ko: "밴을 빌리거나 이사팀을 이용하세요. 시드니에서는 거리대에 따라 $150~$500 AUD 정도 소요됩니다." },
      { label: "Contents insurance", en: "$20-$50 AUD/month for a basic policy. Highly recommended — landlord's insurance doesn't cover your belongings.", ja: "基本補償で月額$20〜$50 AUD。強くおすすめします — 大家の保険はあなたの所持品をカバーしません。", zh: "基本保险每月$20-$50 AUD。强烈推荐 — 房东的保险不承保你的个人物品。", ko: "기본 보험은 월 $20~$50 AUD입니다. 강력히 권장합니다 — 임대인의 보험은 내 소유물을 보장하지 않습니다." },
    ],
  },
  {
    id: "cover-letter",
    iconKey: "Edit",
    accent: "coast",
    title: "Cover Letter Tips",
    koTitle: "지원서 작성 팁",
    desc: "How to write an application that stands out",
    koDesc: "주목받는 지원서를 작성하는 방법",
    items: [
      { label: "Keep it short", en: "3-5 sentences. Agents read hundreds of these.", ja: "3〜5文。仲介業者はこれを何百通も読みます。", zh: "3-5句话。中介会读上百份这样的申请。", ko: "3~5문장. 중개인은 수백 통의 지원서를 읽습니다." },
      { label: "Mention your income", en: "Be upfront: weekly/fortnightly income, employment type, how long you've been with your employer", ja: "率直に記載：週払い／隔週払いの収入、雇用形態、現在の雇用主での勤続期間", zh: "如实说明：每周/每两周收入、就业类型、在当前雇主处工作多久", ko: "솔직하게 기재: 주/격주 수입, 고용 형태, 현 고용주 근무 기간" },
      { label: "Explain your situation", en: "Are you a student? Working holiday? Permanent resident? Say it. It helps landlords understand you.", ja: "学生ですか？ワーキングホリデーですか？永住権保持者ですか？明記しましょう。大家の理解につながります。", zh: "你是学生吗？打工度假？永久居民？写出来。这有助于房东了解你。", ko: "학생이신가요? 워킹홀리디? 영주권자? 명시하면 임대인이 이해하는 데 도움됩니다." },
      { label: "Add local references", en: "If you have a previous Australian landlord or employer in NSW, mention it. It shows stability.", ja: "NSWで以前のオーストラリアの大家や雇用主がいる場合は記載してください。安定性を示せます。", zh: "如果你在新南威尔士州有过往的澳大利亚房东或雇主，请提及。这能体现你的稳定性。", ko: "이전 호주 임대인이나 NSW 고용주가 있으면 언급하세요. 안정성을 보여줍니다." },
      { label: "Apply fast", en: "In competitive areas, properties are rented within hours of listing. Have your documents ready before you inspect.", ja: "競争の激しい地域では、物件は掲載から数時間で賃貸されます。内見の前に書類を用意しておきましょう。", zh: "在竞争激烈的地区，房源挂牌后几小时内就会租出。看房前就准备好你的文件。", ko: "경쟁이 심한 지역에서는 등기 후 몇 시간 내에 임대됩니다. 등기 전에 서류 준비를 완료하세요." },
    ],
  },
];

export default function ApartmentPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero — minimal text header, matches weather page style */}
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Renting in NSW</En>
            <Ja>NSWでの賃貸</Ja>
            <Zh>新南威尔士州租房</Zh>
            <Ko>NSW 임대</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En translated>Apartment guide</En>
            <Ja>賃貸ガイド</Ja>
            <Zh>租房指南</Zh>
            <Ko>임대 가이드</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En translated>Renting in NSW — your rights, your money, your home. A practical guide from search to signature.</En>
            <Ja>NSWでの賃貸 — あなたの権利、あなたのお金、あなたの家。物件探しから契約署名までの実践ガイド。</Ja>
            <Zh>在新南威尔士州租房 — 你的权利、你的钱、你的家。从找房到签约的实用指南。</Zh>
            <Ko>NSW 임대 — 귀하의 권리, 귀하의 돈, 귀하의 집. 검색부터 계약까지의 실용 가이드.</Ko>
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Editorial sections */}
        <div className="space-y-12">
          {sections.map((section, i) => (
            <EditorialSection key={section.id} data={section} index={i} />
          ))}
        </div>

        {/* Dark CTA footer */}
        <section className="mt-16 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-3">
            <En translated>Official resources</En>
            <Ja>公式リソース</Ja>
            <Zh>官方资源</Zh>
            <Ko>공식 자료</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En translated>Know your rights, in writing.</En>
            <Ja>あなたの権利を、書面で確認しましょう。</Ja>
            <Zh>以书面形式了解你的权利。</Zh>
            <Ko>서면으로 권리를 확인하세요.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En translated>NSW Fair Trading is the government body that handles tenancy disputes. If something goes wrong, they&apos;re your first call. Always get a written lease — verbal agreements aren&apos;t enforceable.</En>
            <Ja>NSW Fair Tradingは賃貸トラブルを扱う政府機関です。何か問題が起きたら、まずここに相談しましょう。必ず書面の賃貸契約書を受け取りましょう — 口頭の合意は法的効力を持ちません。</Ja>
            <Zh>NSW Fair Trading是处理租赁纠纷的政府机构。如果出了问题，他们是你首先应该联系的对象。务必取得书面租约 — 口头协议不具法律效力。</Zh>
            <Ko>NSW Fair Trading는 임대차 분쟁을 처리하는 정부 기관입니다. 문제가 생기면 첫 번째로 연락할 곳입니다. 반드시 서면 임대차 계약서를 받으세요 — 구두 합의는 법적 효력이 없습니다.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.nsw.gov.au/departments-and-agencies/fair-trading"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors"
            >
              NSW Fair Trading ↗
            </a>
            <a
              href="https://www.tenants.org.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors"
            >
              Tenants&apos; Union of NSW ↗
            </a>
          </div>
        </section>
      </div>

      {/* Structured data for Google. Article + BreadcrumbList rich results. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleLdJson({
              path: "apartment",
              headline: "Renting an apartment in Sydney — a bilingual newcomer's guide",
              description:
                "시드니에서 부동산 구하기 — 입주 가능한 지역, 부동산 사이트, 보증금(bond), 집주인 협상, 입주 시 주의사항까지 한국어로 정리.",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLdJson([{ name: "Home", path: "" }, { name: "Apartment", path: "apartment" }])
          ),
        }}
      />

      <RelatedContent
        items={[
          {
            href: "/finance",
            title: { en: "Finance & banking", ja: "金融と銀行", zh: "金融与银行", ko: "금융과 은행" },
            description: {
              en: "Bank account, TFN, and how the bond refund lands back in your account.", ja: "銀行口座、TFN、そして保証金の返金が口座に戻るまでの流れ。", zh: "银行账户、TFN，以及押金退款如何回到你的账户。",
              ko: "은행 계좌, TFN, 그리고 보증금 환급이 계좌로 들어오는 과정.",
            },
          },
          {
            href: "/transport",
            title: { en: "Transport & Opal", ja: "交通とOpal", zh: "交通与Opal", ko: "교통과 오팔 카드" },
            description: {
              en: "Where to live matters — commute time vs rent. Opal weekly caps.", ja: "どこに住むかは重要 — 通勤時間と家賃のバランス。Opalの週間上限。", zh: "住在哪里很重要 — 通勤时间与租金的权衡。Opal每周上限。",
              ko: "어디에 사느냐가 중요 — 통근 시간과 임대료의 균형. 오팔 주간 한도.",
            },
          },
          {
            href: "/tourist",
            title: { en: "Short-term stays", ja: "短期滞在", zh: "短期住宿", ko: "단기 체류" },
            description: {
              en: "Not ready to sign a lease? Airbnb, serviced apartments, share houses.", ja: "賃貸契約を結ぶ準備がまだですか？Airbnb、サービスアパートメント、シェアハウス。", zh: "还没准备好签租约？Airbnb、服务式公寓、合租房。",
              ko: "임대 계약 전? 에어비앤비, 서비스드 아파트, 쉐어하우스 옵션.",
            },
          },
        ]}
      />
    </div>
  );
}

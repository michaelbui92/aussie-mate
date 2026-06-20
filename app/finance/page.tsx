// Server component — bilingual finance and banking guide for Australia.
// Redesigned in editorial style: full-bleed hero image with dual CTAs
// (matches the homepage vocabulary), persona chips, then a vertical
// sequence of EditorialSection cards (some with image banners).

import { En, Ko } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { Briefcase2, Building, Building2, Clipboard, DollarSign, ReceiptAlt } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import { articleLdJson, breadcrumbLdJson, seoFor, withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";

export const metadata = withSeo(
  {

  ...seoFor("/finance"),
  title: "Finance & banking — 호주 은행, TFN, 세금 신고, 퇴직연금",
  description:
    "호주에서 돈과 관련된 모든 것 — 4대 은행(CBA, Westpac, ANZ, NAB) 계좌 개설, TFN 신청, 퇴직연금(Super) 안내, 세금 신고(tax return) 방법, 시드니 생활비 팁까지 한국어로 정리.",
  },
  "/finance"
);

type FinanceSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; en: string; ko: string }>;
};

const sections: FinanceSection[] = [
  {
    id: "banking",
    iconKey: "Building",
    accent: "coast",
    title: "Australian Banking",
    koTitle: "호주 은행 시스템",
    desc: "Opening accounts, understanding fees, and moving money",
    koDesc: "계좌 개설, 수수료 이해, 송금",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
    items: [
      { label: "Major Banks", en: "The four big banks are: Commonwealth Bank (CBA), Westpac, ANZ, and NAB. All have international student packages with low or no monthly fees. Most have Korean-speaking staff or 24/7 phone banking in multiple languages.", ko: "4대 은행은 Commonwealth Bank(CBA), Westpac, ANZ, NAB입니다. 모두 국제 학생 전용 패키지로 월 수수료가 없거나 낮은 계정을 제공합니다. 대부분 한국어 서비스 직원이나 다국어 전화 뱅킹을 제공합니다." },
      { label: "How to Open an Account", en: "You can open an account before you arrive using the bank's website, or walk into any branch with your passport and visa (or bring your passport and a tenancy agreement as ID proof). It takes about 20 minutes. You'll get a debit card in 3-5 business days by mail.", ko: "도착 전에 은행 웹사이트에서 계좌를 열거나, 여권과 비자(또는 여권과 임대차 계약서)를 지니고 지점에 방문하면 됩니다. 약 20분이 소요됩니다. 직불 카드는 영업일 기준 3~5일 안에 우편으로 배달됩니다." },
      { label: "BSB and Account Number", en: "Every Australian bank account has two identifying numbers: BSB (6 digits — identifies the bank and branch) and Account Number (8 digits). You need both to receive transfers or set up salary payments. This is like Korea's 은행코드+계좌번호.", ko: "모든 호주 은행 계좌에는 BSB(6자리 — 은행과 지점 식별)와 계좌번호(8자리)가 있습니다. 송금이나 급여 설정 시 두 개가 모두 필요합니다. 한국의 은행코드+계좌번호와 비슷합니다." },
      { label: "Debit vs Credit Cards", en: "Most students get a debit card linked directly to their account (no credit). You can use it anywhere Visa/Mastercard is accepted. Some banks offer credit cards if you're over 18 and have regular income — but you don't need one.", ko: "대부분의 학생들은 계좌에 직접 연결된 직불 카드를 받습니다(신용 없음). Visa/Mastercard가 허용되는 곳이면 어디서든 사용할 수 있습니다. 일부 은행은 18세 이상에 정기 소득이 있으면 신용카드를 제공하지만, 필요하지 않습니다." },
      { label: "ATM Fees", en: "Using your own bank's ATM is free. Using another bank's ATM costs $2-3 per withdrawal. In Australia, many places (shops, bars, restaurants) let you pay by card without a minimum — just tap and go. Cash is rarely needed.", ko: "자행 ATM은 무료입니다. 타행 ATM은 회당 $2-3의 수수료가 부과됩니다. 호주에서는 많은 곳(상점, 바, 식당)에서 최소 금액 없이 카드를 사용할 수 있습니다 — 탭하면 끝. 현금은 거의 필요하지 않습니다." },
      { label: "International Transfers", en: "To receive money from overseas (like from family), you give them your BSB + Account Number. To send money overseas, use a service like Wise (formerly TransferWise) — much cheaper than bank fees. Banks charge $20-30 per transfer.", ko: "해외에서 돈을 받으려면(가족 등) BSB + 계좌번호를 알려주면 됩니다. 해외로 송금하려면 Wise(formerly TransferWise)와 같은 서비스를 사용하세요 — 은행 수수료보다 훨씬 저렴합니다. 은행은 회당 $20-30을 부과합니다." },
    ],
  },
  {
    id: "tax-file-number",
    iconKey: "ReceiptAlt",
    accent: "amber",
    title: "Tax File Number (TFN)",
    koTitle: "납세식별 번호 (TFN)",
    desc: "What a TFN is and why you need one",
    koDesc: "TFN이란 무엇이며 왜 필요한지",
    items: [
      { label: "What is a TFN?", en: "A Tax File Number (TFN) is your personal tax identification number in Australia. It's free to get and completely separate from your visa. You need a TFN to work legally, open a bank account with full features, and lodge a tax return.", ko: "납세식별 번호(TFN)는 호주의 개인 세금 식별 번호입니다. 무료로 받을 수 있으며 비자와 완전히 별개입니다. 합법적으로 근무하려면 TFN이 필요하고, 모든 기능을 갖춘 은행 계좌를 열거나 세금 신고를 하려면 TFN이 필요합니다." },
      { label: "Do I Need One?", en: "Yes — if you work any job (even part-time), you legally need a TFN. If you don't have one, your employer deducts tax at the maximum rate (47%) instead of your actual rate. Getting a TFN takes the same rate down to your real bracket.", ko: "네 — 아르바이트를 하든 상관없이 일하면 TFN이 필요합니다. TFN이 없으면 고용주가 실제 세율 대신 최고 세율(47%)로 공제합니다. TFN을 받으면 실제 세율 구간으로 내려갑니다." },
      { label: "How to Apply", en: "Apply online at the ATO website (ato.gov.au). You'll need your passport, visa, and an Australian address. Processing takes 2-4 weeks — apply as soon as you arrive. It's completely free and the ATO won't judge your visa status.", ko: "ATO 웹사이트(ato.gov.au)에서 온라인으로 신청하세요. 여권, 비자, 호주 주소가 필요합니다. 처리에는 2-4주가 걸립니다 — 도착하면 바로 신청하세요. 완전히 무료이며 ATO는 비자 상태를 판단하지 않습니다." },
      { label: "What Happens if You Don't Have One", en: "If you work without a TFN, you'll pay more tax unnecessarily. You can claim it back at tax return time, but it's easier to just get the TFN upfront. Some employers might not hire you without a TFN.", ko: "TFN 없이 일하면 불필요하게 더 많은 세금을 냅니다. 세금 신고 때 돌려받을 수는 있지만, 처음부터 TFN을 받는 게 훨씬 간단합니다. 일부 고용주는 TFN 없으면 고용하지 않을 수도 있습니다." },
    ],
  },
  {
    id: "superannuation",
    iconKey: "Briefcase2",
    accent: "sage",
    title: "Superannuation",
    koTitle: "퇴직연금 (Super)",
    desc: "Australia's retirement savings system explained simply",
    koDesc: "호주 퇴직연금 제도를 쉽게 설명",
    items: [
      { label: "What is Super?", en: "Superannuation (super) is a mandatory savings system — every employer must pay 11.5% of your salary into a super fund. This money is invested and grows over time. You can't access it until you retire (around age 60).", ko: "Superannuation(super)은 의무 저축 시스템입니다 — 모든 고용주가 급여의 11.5%를 퇴직연금 기금에 납부해야 합니다. 이 돈은 투자되어 시간에 따라 증가합니다. 퇴직(약 60세)에 접근할 수 있습니다." },
      { label: "Why It Matters for You", en: "Even if you only work part-time, you're entitled to super. Over a year of part-time work, this can add up to hundreds or thousands of dollars — money that stays yours and grows. Many students don't know about this and lose it.", ko: "아르바이트만 해도 퇴직연금을 받을 자격이 있습니다. 1년간 아르바이트하면 수백에서 수천 달러가 될 수 있습니다 — 당신의 돈이고 증가합니다. 많은 유학생들이 이것을 몰라서 잃어버립니다." },
      { label: "Choosing a Super Fund", en: "Your employer will ask you to choose a fund. You can pick any fund — popular ones for students include AustralianSuper, HESTA (health fund), Hostplus, and UniSuper (if you're a student). Some have low fees, some have good returns.", ko: "고용주가 기금 선택을 요청할 것입니다. 원하는 기금을 선택할 수 있습니다 — 학생들에게 인기 있는 것은 AustralianSuper, HESTA(건강 기금), Hostplus, UniSuper(학생용)입니다. 일부에는 낮은 수수료가 있고, 일부는 좋은 수익을 냅니다." },
      { label: "What to Do When You Leave Australia", en: "When you leave Australia permanently, you can claim your super as a 'departing Australia super payment' (DASP) — but only if you're on an eligible visa and meet conditions. Some people lose their super because they don't know to claim it.", ko: "호주를 영구적으로 떠나면 '호주 출발 퇴직연금 결제(DASP)'로 퇴직연금을 청구할 수 있습니다 — 하지만 자격 비자이고 조건을 충족해야만 가능합니다. 퇴직연금을 청구해야 한다는 것을 몰라서 잃어버리는 사람들이 많습니다." },
      { label: "Low Fees Matter", en: "Super funds charge annual fees. Even a 1% fee difference can cost you thousands over a few years. Use a comparison tool like 'Stack or SuperRatings' to compare funds. The fund your employer suggests isn't always the best.", ko: "퇴직연금 기금은 연간 수수료를 부과합니다. 1%만 차이가 나도 몇 년에 걸쳐 수천 달러가 될 수 있습니다. Stack이나 SuperRatings 같은 비교 도구를 사용하세요. 고용주가 제안한 기금이 항상 가장 좋은 것은 아닙니다." },
    ],
  },
  {
    id: "tax-return",
    iconKey: "Clipboard",
    accent: "sunset",
    title: "Tax Return",
    koTitle: "세금 신고",
    desc: "Lodging your tax return — when, how, and why you might get money back",
    koDesc: "세금 신고 시기, 방법, 환급 가능성",
    img: "https://images.unsplash.com/photo-1554224155-3a589877462e?w=1600&q=80",
    items: [
      { label: "Do You Need to Lodge?", en: "If you earned money in Australia, you may need to lodge a tax return — even if you earned below the tax-free threshold ($18,200 per year). The ATO will tell you if you need to. Not lodging when you should can result in fines.", ko: "호주에서 돈을 벌었다면 세금 신고를 해야 할 수 있습니다 — 연간 비과세 구간($18,200) 이하로 벌었더라도 마찬가지입니다. ATO가 필요 여부를 알려줍니다. 신고해야 할 때 하지 않으면 벌금이 부과될 수 있습니다." },
      { label: "How It Works", en: "Each financial year runs July 1 to June 30. You lodge your tax return between July 1 and October 31. If you had tax withheld from your pay and earned below $18,200, you'll likely get a full refund. Most students get money back.", ko: "호주의 회계연도는 7월 1일부터 이듬해 6월 30일까지입니다. 7월 1일부터 10월 31일 사이에 세금 신고를 합니다. 급여에서 세금이 원천징수되었고 $18,200 이하로 벌었으면 전액 환급을 받을 가능성이 높습니다. 대부분의 학생들이 환급을 받습니다." },
      { label: "Using a Tax Agent", en: "Many students use a tax agent (like H&R Block or a local accountant). They charge $80-150 but often find deductions you missed. First year in Australia — worth using one to learn how it works. After that, you can do it yourself online for free via myTax on the ATO website.", ko: "많은 학생이 세무사(H&R Block 같은 프랜차이즈나 지역 회계사)를 이용합니다. $80-150 정도 비용이 들지만, 자주 놓치는 공제를 찾아주는 경우가 많습니다. 호주 첫 해에는 세무사를 통해仕組み을 배워보는 것을 추천합니다. 익숙해지면 ATO 웹사이트의 myTax로 직접 무료로 신고할 수 있습니다." },
      { label: "Deductions You Can Claim", en: "As a student working part-time, you can claim: work-related travel (if not reimbursed), self-education costs (if work-related), protective clothing/equipment, and union fees. Keep receipts! If you worked from home, you can claim a portion of electricity and internet.", ko: "아르바이트하는 학생이 공제 신청할 수 있는 항목: 업무 관련 교통비(환급받지 못한 경우), 자기 교육 비용(업무와 관련된 경우), 보호 의류/장비, 조합비. 반드시 영수증을 보관하세요! 재택 근무를 했다면 전기·인터넷 요금의 일부도 공제 가능합니다." },
    ],
  },
  {
    id: "centrelink",
    iconKey: "Building2",
    accent: "stone",
    title: "Centrelink",
    koTitle: "센터링크",
    desc: "Government payments and what international students can access",
    koDesc: "정부 지급금과 국제 학생이 받을 수 있는 것",
    items: [
      { label: "What is Centrelink?", en: "Centrelink is part of Services Australia — it administers government payments. Payments include JobSeeker (unemployment), Youth Allowance, Austudy (students), Family Tax Benefit, and more.", ko: "Centrelink은 Services Australia의 일부입니다 — 정부 지급금을 관리합니다. 지급금에는 JobSeeker(실업), Youth Allowance, Austudy(학생), Family Tax Benefit 등이 있습니다." },
      { label: "Can International Students Access It?", en: "Most international students on student visas are NOT eligible for Centrelink payments — this is a condition of your visa (8501 No Assets condition). However, you can still use Centrelink for queries about your visa conditions if needed.", ko: "학생 비자로 온 대부분의 국제 학생은 Centrelink 지급금의 자격이 없습니다 — 이것이 비자 조건입니다(8501 No Assets condition). 그러나 필요시 비자 조건에 대한 문의를 위해 Centrelink를 이용할 수 있습니다." },
      { label: "Medicare and Centrelink", en: "If you're from a country with a reciprocal healthcare agreement with Australia (UK, Ireland, Sweden, Netherlands, Finland, Norway, Malta, Italy, Belgium, Slovenia, New Zealand), you can access Medicare. Centrelink manages some Medicare related services.", ko: "호주와 의료비 상호 협정이 있는 국가(영국, 아일랜드, 스웨덴, 네덜란드, 핀란드, 노르웨이, 몰타, 이탈리아, 벨기에, 슬로베니아, 뉴질랜드)에서 왔다면 Medicare를 활용할 수 있습니다. Centrelink는 일부 Medicare 관련 서비스를 관리합니다." },
    ],
  },
  {
    id: "cost-of-living",
    iconKey: "DollarSign",
    accent: "rose",
    title: "Cost of Living Tips",
    koTitle: "생활비 절약 팁",
    desc: "Stretch your budget in Australia",
    koDesc: "호주에서 예산을 관리하는 방법",
    items: [
      { label: "Weekly Budget Estimate", en: "As a student in Sydney, expect to spend $300-500 per week on basics (rent, food, transport, phone). Rent alone is $180-300 depending on location and sharing. This varies a lot — regional areas are much cheaper than Sydney.", ko: "시드니 학생 기준으로 기본 생활비(주거, 식비, 교통, 통신)에 주 $300-500 정도 필요합니다. 집세만 해도 동네와 룸메이트 구성에 따라 $180-300입니다. 지역마다 편차가 크며, 지방은 시드니보다 훨씬 저렴합니다." },
      { label: "Save on Groceries", en: "Coles and Woolworths are the big two chains. ALDI is cheaper for most staples. Use the 'Down Down' app (Coles) or 'Woolworths Discovery' to check prices. Buy generic/store brands — same quality, 30% cheaper. Shop at closing time for discounted cooked chicken and bakery items.", ko: "Coles와 Woolworths가 두 큰 체인입니다. ALDI는 대부분의 기본 식료품에 더 저렴합니다. 'Down Down' 앱(Coles)이나 'Woolworths Discovery'를 사용해서 가격을 확인하세요. 일반 브랜드를 구매하세요 — 같은 품질, 30% 더 저렴합니다. 폐점 시간에 가면 할인된 치킨과 빵집 상품을 찾을 수 있습니다." },
      { label: "Student Discounts", en: "Always ask: 'Do you do student discounts?' Many places offer 10-15% off with a valid student ID. This includes some restaurants, cinemas (Hoyts/Westworld), electronics stores, and software (Apple, Microsoft, Adobe all offer education pricing).", ko: "항상 물어보세요: '학생 할인이 있나요?' 많은 곳에서 유효한 학생 ID로 10-15% 할인해줍니다. 일부 식당, 영화관(Hoyts/Westworld), 전자제품 매장, 소프트웨어(Apple, Microsoft, Adobe 모두 교육 할인을 제공)에 해당됩니다." },
      { label: "Cheap Eats", en: "Sydney has great cheap food. Korean BBQ around Eastwood/Strathfield is affordable. Food courts in Westfield/Chinatown have meals for $10-15. Learn to cook — beans, rice, eggs, and frozen veggies can feed you for under $40/week.", ko: "시드니에는 훌륭한 저렴한 음식이 있습니다. 이스트우드/스트라스필드 근처 한국 바비큐는 저렴합니다. Westfield/차이나타운의 푸드코트는 식사가 $10-15입니다. 요리를 배우세요 — 콩, 밥, 달걀, 냉장 채소로 주당 $40 이하로 먹을 수 있습니다." },
      { label: "Transportation Savings", en: "Get an Opal card for public transport — always cheaper than paying cash. If you're a full-time student, you can get a Concession Opal card (half price). Work out if a monthly pass is worth it vs pay-as-you-go. Ferries are gorgeous and sometimes the cheapest option!", ko: "대중교통은 오팔 카드를 사용하세요 — 현금 대비 항상 저렴합니다. 전일제 학생이라면 Concession 오팔 카드(50% 할인)를 발급받을 수 있습니다. 월 정기권이 충전식(pay-as-you-go)보다 이득인지 계산해 보세요. 페리는 경치도 좋고, 같은 거리에서는 오히려 가장 저렴한 옵션이 되기도 합니다!" },
    ],
  },
];

export default function FinancePage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero — full-bleed image with dual CTAs + persona chips, mirrors homepage */}
      <PageHero
        eyebrow={{ en: "Money", ko: "금융" }}
        title={{ en: "Finance & banking", ko: "금융과 은행" }}
        lead={{
          en: "Everything about money in Australia — banking, tax, super, and budgeting.",
          ko: "호주에서의 돈에 관한 모든 것 — 은행, 세금, 퇴직연금, 예산 관리.",
        }}
        image="https://images.unsplash.com/photo-1601597110533-4c7b1c5b2c5d?w=2400&q=85"
        imageAlt="Sydney CBD skyline"
        primaryCTA={{ label: { en: "Open account", ko: "계좌 개설" }, href: "#banking" }}
        secondaryCTA={{ label: { en: "Tax return", ko: "세금 신고" }, href: "#tax-return" }}
        personas={[
          { sectionId: "banking", label: { en: "Banking", ko: "은행" } },
          { sectionId: "tax-file-number", label: { en: "TFN", ko: "TFN" } },
          { sectionId: "superannuation", label: { en: "Super", ko: "퇴직연금" } },
        ]}
        scrollCueTarget="banking"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        
        <div className="space-y-12">
          {sections.map((section, i) => (
            <EditorialSection key={section.id} data={section} index={i} />
          ))}
        </div>

        <section className="mt-16 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-3">
            <En>Official resources</En><Ko>공식 자료</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En>For official tax and super info.</En>
            <Ko>공식 세금 및 퇴직연금 정보.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En>ATO (Australian Taxation Office) and Services Australia are the two official sources. Their websites have plain-English guides, downloadable forms, and calculators. Most questions can be answered by a 5-minute site search.</En>
            <Ko>ATO(호주 세무서)와 Services Australia는 두 가지 공식 자료입니다. 웹사이트에는 쉬운 영어 가이드, 다운로드 가능한 양식, 계산기가 있습니다. 대부분의 질문은 5분 정도의 사이트 검색으로 답할 수 있습니다.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.ato.gov.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">ATO ↗</a>
            <a href="https://www.servicesaustralia.gov.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Services Australia ↗</a>
          </div>
        </section>
      </div>

      {/* Structured data for Google. Article = eligible for top-story /
          article rich results. BreadcrumbList = "Home › Finance" in SERP. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleLdJson({
              path: "finance",
              headline: "Finance & banking in Australia — a Korean newcomer's guide",
              description:
                "호주에서 돈과 관련된 모든 것 — 4대 은행 계좌 개설, TFN 신청, 퇴직연금(Super), 세금 신고(tax return), 시드니 생활비.",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLdJson([{ name: "Home", path: "" }, { name: "Finance", path: "finance" }])
          ),
        }}
      />

      {/* Contextual next-steps — internal link graph fix */}
      <RelatedContent
        items={[
          {
            href: "/apartment",
            title: { en: "Renting in Australia", ko: "호주 부동산과 임대" },
            description: {
              en: "Lease, bond, flatmates — and how your TFN ties into rental applications.",
              ko: "임대차 계약, 보증금, 쉐어하우스 — 그리고 임대 신청과 TFN의 관계.",
            },
          },
          {
            href: "/visa",
            title: { en: "Visa Guide", ko: "비자 가이드" },
            description: {
              en: "Tax residency changes by visa type. Pick the right one before you file.",
              ko: "비자 종류에 따라 세법상 거주자 신분이 달라집니다. 세금 신고 전 확인.",
            },
          },
          {
            href: "/workplace",
            title: { en: "Workplace rights", ko: "직장 권리" },
            description: {
              en: "Award wages, payslips, super contributions — your employer has obligations.",
              ko: "임금, 급여명세서, 퇴직연금 납입 — 고용주의 법적 의무.",
            },
          },
        ]}
      />
    </div>
  );
}

// Server component — bilingual apartment rental guide for NSW.
// All interactivity is via <En>/<Ko> (client islands from LangBlocks).

import {
  Search, Clipboard, Scale, BuildingSkyscraper, Flag, Coin, Edit,
} from "@/components/Icons";
import { En, Ko } from "@/components/LangBlocks";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Search, Clipboard, Scale, BuildingSkyscraper, Flag, Coin, Edit,
};

const sections = [
  {
    id: "search",
    iconKey: "Search",
    title: "Finding a Place",
    koTitle: "부동산 찾기",
    desc: "Where to search and what to know",
    koDesc: "검색 방법과 알아야 할 것",
    color: "border-l-sunset",
    items: [
      { label: "Flatmates.com.au", en: "The most popular option in Australia for rooms and housemates. Filter by location, budget, move-in date, and lifestyle preferences (smoking, pets, gender). Flatmates.com.au also handles the lease and bond through their platform — making it much safer than private arrangements. Both renters and rooms are listed, so you can search for a place or list yourself as looking.", ko: "호주에서 가장 인기 있는 방 및 룸메이트 검색 플랫폼입니다. 위치, 예산, 입주일, 라이프스타일 선호도(흡연, 반려동물, 성별)로 필터링할 수 있습니다. 플랫폼을 통해 임대차 계약과 보증금도 처리하므로 사기 위험이 적습니다.", url: "https://flatmates.com.au" },
      { label: "Domain", en: "Mainstream real estate site with the largest selection of rental listings. Has a Korean language option in some areas. Best for people who want their own apartment rather than a room in a shared house.", ko: "가장 큰 임대 목록을 갖춘 부동산 사이트입니다. 일부 지역에서 한국어 옵션이 있습니다. 셰어하우스의 방이 아닌 자신만의 아파트를 원하는 분에게 적합합니다.", url: "https://domain.com.au" },
      { label: "Realestate.com.au", en: "Another major real estate portal. Similar to Domain in scope. Both sites list real estate agents' rentals, not private landlords.", ko: "또 다른 주요 부동산 포털입니다. 범위는 Domain과 유사합니다. 두 사이트 모두 부동산 중개인의 임대 목록만 있습니다.", url: "https://realestate.com.au" },
      { label: "Facebook Marketplace", en: "Can have private listings and cheaper options, but also more scams. Always verify the property exists before paying anything. Do not transfer money to someone you haven't met.", ko: "개인부동산과 더 저렴한 선택이 있을 수 있지만 사기도 많습니다. 돈을 지불하기 전에 부동산이 실제로 존재하는지 확인하세요. 만난 적 없는 사람에게 송금하지 마세요.", url: "https://facebook.com/marketplace" },
    ],
  },
  {
    id: "application",
    iconKey: "Clipboard",
    title: "Rental Application",
    koTitle: "임대 지원",
    desc: "Everything you need to apply for a rental property in NSW",
    koDesc: "NSW 임대 부동산에 지원할 때 필요한 모든 것",
    color: "border-l-sunset",
    items: [
      { label: "Required documents", en: "100 points of ID — passport, visa, bank statements, payslips, rental reference", ko: "신분증 100포인트 — 여권, 비자, 은행 거래내역, 급여명세서, 이전 임대인 추천서" },
      { label: "Cover letter", en: "Short introduction: who you are, why you want this property, your income, how long you plan to stay", ko: "간단한 소개서: 본인 소개, 부동산을 원하는 이유, 수입, 거주 예정 기간" },
      { label: "Rental history", en: "Previous landlord's contact details — agents will call to verify you've kept the place well and paid on time", ko: "이전 임대인의 연락처 — 부동산 중개인이 집 상태 및 임대료 납부 이력 확인을 위해 연락함" },
      { label: "Proof of income", en: "Recent payslips (3-6), recent tax return, or Centrelink letter showing consistent income", ko: "최근 급여명세서(3~6개월), 최근 소득세 신고서, 또는 Centrelink 확인서" },
      { label: "Bond", en: "Usually 4 weeks rent — you pay it upfront and get it back at the end if the property is clean and undamaged", ko: "보통 임대료 4주분 — 입주 시 선불로 납부하고, 퇴거 시 청소 및 손상 없으면 돌려받음" },
    ],
  },
  {
    id: "rights",
    iconKey: "Scale",
    title: "Tenant Rights in NSW",
    koTitle: "NSW 임차인 권리",
    desc: "You have legal rights — know them",
    koDesc: "법적 권리가 있습니다 — 알고 있으세요",
    color: "border-l-sage",
    items: [
      { label: "Rent increases", en: "Landlord can only increase rent once every 12 months. Must give 60 days written notice.", ko: "임대인은 12개월에 한 번만 임대료를 올릴 수 있음. 60일 전 서면 고지 필수." },
      { label: "Repairs", en: "Landlord must fix anything that affects health, safety, or basic living — within 14 days for non-urgent, immediately for urgent", ko: "임대인은 건강, 안전, 기본 생활에 영향을 미치는 문제를 수리해야 함 — 긴급하지 않은 것은 14일, 긴급한 것은 즉시" },
      { label: "Entry notice", en: "Landlord must give 24 hours written notice before entering your home (except in emergencies)", ko: "임대인은 긴급 상황을 제외하고는 입주 전 24시간 서면 고지를 해야 함" },
      { label: "Eviction", en: "Landlord must give 90 days notice if ending a periodic lease without cause. 30 days if you're behind on rent.", ko: "임대인이 정당한 사유 없이 월세를 종료하려면 90일 전에 고지해야 함. 임대료 연체 시 30일." },
      { label: "No cause termination", en: "Even without a reason, landlord must give 90 days (periodic) or 30 days (fixed-term) notice to move out", ko: "이유 없이도 임대인은 퇴거 통보 시 월세는 90일, 정해진 기간은 30일 전에 고지해야 함" },
    ],
  },
  {
    id: "re-phrases",
    iconKey: "BuildingSkyscraper",
    title: "Common Real Estate Phrases",
    koTitle: "부동산 표현",
    desc: "What agents actually mean",
    koDesc: "부동산 중개인이 실제로 의미하는 것",
    color: "border-l-coast",
    items: [
      { label: '"Quiet location"', en: "It's on a main road — expect traffic noise", ko: "주 도로에 위치 — 교통 소음이 예상됨" },
      { label: '"Convenient to transport"', en: "Near a train station or bus stop, but it might not be walking distance", ko: "기차역이나 버스 정류장 가까이 — 도보 거리 아닐 수 있음" },
      { label: '"Charming"', en: "Old, outdated, or small — but has character", ko: "오래되거나 낡았지만 분위기가 있음" },
      { label: '"Perfect for families"', en: "Might not have a yard, but there are nearby parks", ko: "마당 없을 수 있지만 근처 공원 있음" },
      { label: '"Must be sold"', en: "Price is too high — not a good deal", ko: "가격이 너무 높음 — 좋은 거래가 아님" },
      { label: '"Inspections are strict"', en: "Competition is high — your application needs to be strong", ko: "경쟁이 심함 — 지원서를 잘 준비해야 함" },
      { label: '"First to inspect buys"', en: "Uncommon — verify this claim before making decisions", ko: "일반적이지 않음 — 결론 내리기 전에 확인 필요" },
    ],
  },
  {
    id: "red-flags",
    iconKey: "Flag",
    title: "Red Flags to Watch",
    koTitle: "주의해야 할 위험 신호",
    desc: "Walk away if you see these",
    koDesc: "이런 것이 보이면 걸어 다니세요",
    color: "border-l-rose-400",
    items: [
      { label: "No formal lease", en: "Always get a written Residential Tenancy Agreement — verbal agreements are not enforceable", ko: "반드시 서면 임대차계약서를 받아야 함 — 구두 합의는 법적 구속력이 없음" },
      { label: "Landlord won't do repairs", en: "Persistent damage that's ignored is a sign the landlord won't look after the property", ko: "수리되지 않는 지속적인 손상은 임대인이 부동산을 관리하지 않음을 의미함" },
      { label: "Pressure to pay cash", en: "Never pay bond or rent in cash without a receipt. All payments should be traceable.", ko: "영수증 없이 현금으로 보증금이나 임대료를 지불하지 마세요. 모든 결제내역은 추적 가능해야 합니다." },
      { label: "Rent too cheap", en: "If it's significantly below market rate, something is wrong — or it's a scam", ko: "시세보다 현저히 낮으면 무언가 문제 있다는 신호 — 또는 사기일 수 있음" },
      { label: "Won't meet in person", en: "Legitimate landlords will meet you or have an agent. Be wary of online-only transactions.", ko: "합법적인 임대인은 직접 만나거나 중개인을 둠. 온라인 거래만 고집하는 경우 주의." },
    ],
  },
  {
    id: "costs",
    iconKey: "Coin",
    title: "Bills & Move-in Costs",
    koTitle: "공과금 및 입주 비용",
    desc: "What to budget for",
    koDesc: "예산에 포함해야 할 것들",
    color: "border-l-yellow-400",
    items: [
      { label: "Bond", en: "Usually 4 weeks rent — paid upfront before moving in", ko: "보통 임대료의 4주분 — 입주 전에 선불로 지불" },
      { label: "First week rent", en: "Paid in advance, from the day you move in", ko: "선불로 지불, 입주일부터" },
      { label: "Utility connections", en: "Electricity, gas, internet — you set these up yourself. Some providers charge connection fees.", ko: "전기, 가스, 인터넷 — 직접 신청해야 합니다. 일부 공급업체는 연결 비용을 부과합니다." },
      { label: "Moving costs", en: "Hire a van or movers. Sydney moves typically cost $150-$500 depending on distance.", ko: "밴을 빌리거나 이사팀을 이용하세요. 시드니에서는 거리대에 따라 $150~$500 정도 소요됩니다." },
      { label: "Contents insurance", en: "$20-$50/month for a basic policy. Highly recommended — landlord's insurance doesn't cover your belongings.", ko: "기본 보험은 월 $20~$50입니다. 강력히 권장합니다 — 임대인의 보험은 내 소유물을 보장하지 않습니다." },
    ],
  },
  {
    id: "cover-letter",
    iconKey: "Edit",
    title: "Cover Letter Tips",
    koTitle: "지원서 작성 팁",
    desc: "How to write an application that stands out",
    koDesc: "주목받는 지원서를 작성하는 방법",
    color: "border-l-purple-500",
    items: [
      { label: "Keep it short", en: "3-5 sentences. Agents read hundreds of these.", ko: "3~5문장. 중개인은 수백 통의 지원서를 읽습니다." },
      { label: "Mention your income", en: "Be upfront: weekly/fortnightly income, employment type, how long you've been with your employer", ko: "솔직하게 기재: 주/격주 수입, 고용 형태, 현 고용주 근무 기간" },
      { label: "Explain your situation", en: "Are you a student? Working holiday? Permanent resident? Say it. It helps landlords understand you.", ko: "학생이신가요? 워킹홀리디? 영주권자? 명시하면 임대인이 이해하는 데 도움됩니다." },
      { label: "Add local references", en: "If you have a previous Australian landlord or employer in NSW, mention it. It shows stability.", ko: "이전 호주 임대인이나 NSW 고용주가 있으면 언급하세요. 안정성을 보여줍니다." },
      { label: "Apply fast", en: "In competitive areas, properties are rented within hours of listing. Have your documents ready before you inspect.", ko: "경쟁이 심한 지역에서는 등기 후 몇 시간 내에 임대됩니다. 등기 전에 서류 준비를 완료하세요." },
    ],
  },
];

export default function ApartmentPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-eucalypt dark:text-white mb-2">
            <En>Apartment Guide 🏠</En>
            <Ko>임대 가이드 🏠</Ko>
          </h1>
          <p className="text-eucalypt/60 dark:text-dark-muted/60">
            <En>Renting in NSW — your rights, your money, your home</En>
            <Ko>NSW 임대 — 귀하의 권리, 귀하의 돈, 귀하의 집</Ko>
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        {sections.map((section, si) => {
          const Icon = ICONS[section.iconKey];
          return (
            <section
              key={section.id}
              className="bg-white dark:bg-dark-card border border-sand dark:border-dark-border rounded-2xl overflow-hidden"
            >
              <div className={`px-4 md:px-5 py-4 border-b border-sand dark:border-dark-border border-l-4 ${section.color}`}>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sunset shrink-0">
                    {Icon ? <Icon className="w-5 h-5" /> : null}
                  </span>
                  <h2 className="font-bold text-base md:text-lg text-eucalypt dark:text-white leading-snug">
                    <En>{section.title}</En>
                    <Ko>{section.koTitle || section.title}</Ko>
                  </h2>
                </div>
                <p className="text-sm text-eucalypt/50 dark:text-dark-muted/50 pl-7">
                  <En>{section.desc}</En>
                  <Ko>{section.koDesc || section.desc}</Ko>
                </p>
              </div>
              <div className="divide-y divide-sand dark:divide-dark-border">
                {section.items.map((item, ii) => (
                  <div key={ii} className="px-4 md:px-5 py-4">
                    <p className="font-semibold text-sm text-sunset mb-1.5 leading-snug">{item.label}</p>
                    <En><p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed mb-1">{item.en}</p></En>
                    <Ko><p className="text-sm text-sage font-medium leading-relaxed">{item.ko}</p></Ko>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

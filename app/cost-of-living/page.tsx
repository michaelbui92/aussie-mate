import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import { withSeo } from "@/lib/seo";

export const metadata = withSeo(
  {
    title: "Cost of Living in Sydney 2026 — Rent, Food, Transport, Bills | AussieGuides",
    description:
      "Complete cost of living guide for Korean newcomers in Sydney 2026. Rent, groceries, transport, utilities, phone, health insurance, eating out — with real AUD prices and weekly/monthly budgets.",
  },
  "cost-of-living"
);

const categories = [
  {
    emoji: "🏠",
    title: "Rent & Housing",
    items: [
      { en: "Shared house (room, inner Sydney)", ko: "쉐어하우스 (방 1개, 시드니 시내 근접)", cost: "$280–$450/week" },
      { en: "Studio / 1-bedroom apartment (inner Sydney)", ko: "원룸 / 1베드룸 아파트 (시드니 시내)", cost: "$550–$800/week" },
      { en: "2-bedroom apartment (inner Sydney)", ko: "2베드룸 아파트 (시드니 시내)", cost: "$700–$1,200/week" },
      { en: "2-bedroom apartment (outer suburbs)", ko: "2베드룸 아파트 (외곽)", cost: "$450–$700/week" },
      { en: "Bond (4 weeks rent)", ko: "보증금 (월세의 4주)", cost: "4 weeks rent" },
      { en: "Rental bond fee (NSW Fair Trading)", ko: "임대 보증금 등록비", cost: "~$50" },
    ],
  },
  {
    emoji: "🚇",
    title: "Transport",
    items: [
      { en: "Opal card weekly cap (adult)", ko: "Opal 카드 주간 상한선 (성인)", cost: "$50" },
      { en: "Single train trip (CBD to Parramatta)", ko: "기차 1회 (CBD → Parramatta)", cost: "$5.60" },
      { en: "Single bus trip (inner city)", ko: "버스 1회 (시내)", cost: "$2.40–$4.80" },
      { en: "Light rail trip", ko: "경전철 1회", cost: "$2.40–$4.80" },
      { en: "Uber (CBD to Airport)", ko: "Uber (CBD → 공항)", cost: "$45–$65" },
      { en: "Petrol (per litre)", ko: "휘발유 (리터당)", cost: "~$1.90" },
    ],
  },
  {
    emoji: "🛒",
    title: "Groceries & Food",
    items: [
      { en: "Weekly grocery shop (1 person, Woolies/Coles)", ko: "주간 식료품 (1인, Woolies/Coles)", cost: "$80–$120" },
      { en: "Milk (1L)", ko: "우유 (1L)", cost: "$2.50" },
      { en: "Bread (loaf)", ko: "식빵", cost: "$4.50" },
      { en: "Eggs (12 pack)", ko: "달걀 (12개)", cost: "$6.50" },
      { en: "Chicken breast (1kg)", ko: "닭가슴살 (1kg)", cost: "$12–$16" },
      { en: "Rice (2kg)", ko: "쌀 (2kg)", cost: "$6–$10" },
      { en: "Dining out (cafe brunch)", ko: "카페 브런치", cost: "$20–$30" },
      { en: "Dining out (restaurant dinner)", ko: "레스토랑 저녁", cost: "$35–$65" },
      { en: "Korean restaurant (bibimbap)", ko: "한식당 (비빔밥)", cost: "$18–$25" },
      { en: "Takeaway coffee", ko: "테이크아웃 커피", cost: "$4.50–$6" },
    ],
  },
  {
    emoji: "📱",
    title: "Phone & Internet",
    items: [
      { en: "Prepaid SIM (Amaysim / Boost / Aldi)", ko: "선불 SIM (Amaysim / Boost / Aldi)", cost: "$15–$30/month" },
      { en: "Postpaid plan (20GB+)", ko: "후불 요금제 (20GB+)", cost: "$30–$50/month" },
      { en: "Home NBN internet (50Mbps)", ko: "가정용 NBN 인터넷 (50Mbps)", cost: "$70–$90/month" },
      { en: "Home NBN internet (100Mbps)", ko: "가정용 NBN 인터넷 (100Mbps)", cost: "$90–$110/month" },
    ],
  },
  {
    emoji: "💡",
    title: "Utilities & Bills",
    items: [
      { en: "Electricity (1 person, apartment)", ko: "전기세 (1인, 아파트)", cost: "$80–$150/quarter" },
      { en: "Gas (cooking + hot water)", ko: "가스세 (요리 + 온수)", cost: "$50–$100/quarter" },
      { en: "Water (apartment, billed quarterly)", ko: "수도세 (아파트, 분기별)", cost: "$80–$180/quarter" },
      { en: "Contents insurance (renters)", ko: "가재도구 보험 (세입자)", cost: "$20–$40/month" },
    ],
  },
  {
    emoji: "🏥",
    title: "Health Insurance",
    items: [
      { en: "OSHC (student, single, per year)", ko: "OSHC (유학생, 1인, 연간)", cost: "~$600/year" },
      { en: "OVHC (working holiday, per year)", ko: "OVHC (워홀, 연간)", cost: "~$500–$900/year" },
      { en: "GP visit (bulk billed)", ko: "GP 방문 (벌크 빌)", cost: "Free" },
      { en: "GP visit (private, no Medicare)", ko: "GP 방문 (개인, 메디케어 없음)", cost: "$50–$80" },
      { en: "Ambulance cover (annual)", ko: "구급차 보험 (연간)", cost: "~$60/year" },
    ],
  },
];

export default function CostOfLivingPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Fraunces, Georgia, serif", color: "var(--color-text)" }}>
          <En>Cost of Living in Sydney — 2026</En>
          <Ko>시드니 생활비 — 2026</Ko>
        </h1>
        <p className="text-lg text-[var(--color-text)]/70 max-w-2xl mx-auto">
          <En>Real prices for rent, food, transport, and bills. All figures in AUD. Updated for 2026.</En>
          <Ko>임대료, 식비, 교통비, 공과금의 실제 가격입니다. 모든 금액은 호주 달러(AUD) 기준입니다.</Ko>
        </p>
      </div>

      {/* Quick summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {[
          { emoji: "💰", label: { en: "Single person (shared)", ko: "1인 (쉐어하우스)" }, total: "$700–$1,200/month" },
          { emoji: "🏠", label: { en: "Single person (own apartment)", ko: "1인 (단독 아파트)" }, total: "$1,200–$2,000/month" },
          { emoji: "👫", label: { en: "Couple (sharing)", ko: "커플 (함께 사는 경우)" }, total: "$1,800–$2,800/month" },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-5 text-center"
            style={{ background: "linear-gradient(135deg, rgba(212,165,116,0.1), rgba(232,114,42,0.08))", border: "1px solid rgba(212,165,116,0.2)" }}
          >
            <div className="text-3xl mb-2">{item.emoji}</div>
            <div className="text-sm font-medium text-[var(--color-text)]/70 mb-1">
              <En>{item.label.en}</En>
              <Ko>{item.label.ko}</Ko>
            </div>
            <div className="text-xl font-bold" style={{ color: "var(--color-primary)" }}>{item.total}</div>
          </div>
        ))}
      </div>

      {/* Category tables */}
      {categories.map((cat, i) => (
        <div
          key={i}
          className="mb-8 rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--color-border)" }}
        >
          <div
            className="px-5 py-4 font-bold text-lg flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, rgba(212,165,116,0.1), rgba(232,114,42,0.06))", borderBottom: "1px solid var(--color-border)" }}
          >
            <span>{cat.emoji}</span>
            <En>{cat.title}</En>
            <Ko>{cat.title}</Ko>
          </div>
          <div className="divide-y" style={{ borderColor: "var(--color-border)" }}>
            {cat.items.map((item, j) => (
              <div
                key={j}
                className="px-5 py-3 flex items-center justify-between gap-4"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-[var(--color-text)]">
                    <En>{item.en}</En>
                    <Ko><span className="text-[var(--color-text)]/50 text-xs">{item.ko}</span></Ko>
                  </div>
                </div>
                <div
                  className="shrink-0 text-sm font-bold px-3 py-1 rounded-lg"
                  style={{ background: "rgba(212,165,116,0.12)", color: "var(--color-primary)" }}
                >
                  {item.cost}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Tips section */}
      <div className="rounded-2xl p-6 mt-8" style={{ background: "linear-gradient(135deg, rgba(232,114,42,0.08), rgba(212,165,116,0.06))", border: "1px solid rgba(212,165,116,0.2)" }}>
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
          <En>💡 Money-Saving Tips</En>
          <Ko>💡 절약 팁</Ko>
        </h2>
        <ul className="space-y-2 text-sm text-[var(--color-text)]/80">
          <li><En>• Shop at Aldi for groceries — it's 20-30% cheaper than Woolies/Coles</En><Ko>• 장보기는 Aldi에서 — Woolies/Coles보다 20-30% 저렴합니다</Ko></li>
          <li><En>• Use the Opal card weekly cap — after $50, all travel is free for the week</En><Ko>• Opal 카드 주간 상한선 활용 — $50 이후 무료</Ko></li>
          <li><En>• Korean grocery stores (Strathfield, Eastwood, Campsie) have cheaper Asian ingredients</En><Ko>• 한인 마트 (Strathfield, Eastwood, Campsie)에서 아시안 식품이 저렴합니다</Ko></li>
          <li><En>• Share housing is the biggest cost saver — save $200+/week vs living alone</En><Ko>• 쉐어하우스가 가장 큰 절약 — 혼자 살 때보다 주당 $200+ 절약</Ko></li>
          <li><En>• Buy second-hand furniture on Facebook Marketplace or Gumtree</En><Ko>• 가구는 Facebook Marketplace나 Gumtree에서 중고로 구매하세요</Ko></li>
        </ul>
      </div>
    </main>
  );
}
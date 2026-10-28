import type { Metadata } from "next";
import { headers } from "next/headers";
import { pageMeta } from "@/lib/page-meta";
import Link from "next/link";
import { pickLocale } from "@/lib/locale";
import {En, Ja, Ko, Zh} from "@/components/LangBlocks";
import { withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";
import { relatedFromMeta } from "@/lib/related";

export async function generateMetadata(): Promise<Metadata> {
  // Per request, so the tab title and the search-result headline are in the reader's
  // language. The canonical and hreflang come from the root layout, which reads the same
  // header. `Metadata` is imported by every page that uses withSeo.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return withSeo({
    title: pageMeta("cost-of-living", locale).title,
    description: pageMeta("cost-of-living", locale).description,
  },
  "cost-of-living"
);
}


// Derived from the tables on this page at 4.33 weeks a month (280 and 450 a week rent; 80-120 a week
// groceries; the 50 Opal cap; a 15-30 prepaid SIM). The page listed every weekly price but never added
// them up, which is the question someone actually asks before they move.
const monthlyRows = [
  { en: "Shared house (room, inner Sydney)", ja: "シェアハウス（1部屋、シドニー市内）", zh: "合租房（单间，悉尼内城）", ko: "쉐어하우스 (방 1개, 시드니 시내)", value: "$1,212–$1,948" },
  { en: "Groceries (Woolies/Coles)", ja: "食料品（Woolies/Coles）", zh: "食品杂货（Woolies/Coles）", ko: "식료품 (Woolies/Coles)", value: "$346–$520" },
  { en: "Opal weekly cap", ja: "Opalの週上限", zh: "Opal 每周上限", ko: "Opal 주간 상한선", value: "$216" },
  { en: "Prepaid SIM", ja: "プリペイドSIM", zh: "预付费 SIM 卡", ko: "선불 SIM", value: "$15–$30" },
];

const categories = [
  {
    title: "Rent & Housing",
    jaTitle: "\u5bb6\u8cc3\u3068\u4f4f\u307e\u3044",
    zhTitle: "\u623f\u79df\u4e0e\u4f4f\u623f",
    koTitle: "\uc9d1\uc138\uc640 \uc8fc\uac70",
    items: [
      { en: "Shared house (room, inner Sydney)", ja: "シェアハウス（1部屋、シドニー市内）", zh: "合租房（单间，悉尼内城）", ko: "쉐어하우스 (방 1개, 시드니 시내 근접)", cost: "$280–$450/week" },
      { en: "Studio / 1-bedroom apartment (inner Sydney)", ja: "ワンルーム / 1ベッドルームのアパート（シドニー市内）", zh: "单间公寓 / 一居室公寓（悉尼内城）", ko: "원룸 / 1베드룸 아파트 (시드니 시내)", cost: "$550–$800/week" },
      { en: "2-bedroom apartment (inner Sydney)", ja: "2ベッドルームのアパート（シドニー市内）", zh: "两居室公寓（悉尼内城）", ko: "2베드룸 아파트 (시드니 시내)", cost: "$700–$1,200/week" },
      { en: "2-bedroom apartment (outer suburbs)", ja: "2ベッドルームのアパート（郊外）", zh: "两居室公寓（远郊）", ko: "2베드룸 아파트 (외곽)", cost: "$450–$700/week" },
      { en: "Bond (4 weeks rent)", ja: "保証金（家賃4週間分）", zh: "押金（4周租金）", ko: "보증금 (월세의 4주)", cost: "4 weeks rent" },
      { en: "Rental bond fee (NSW Fair Trading)", ja: "賃貸保証金の登録手数料（NSW Fair Trading）", zh: "租赁押金登记费（NSW Fair Trading）", ko: "임대 보증금 등록비", cost: "~$50" },
    ],
  },
  {
    title: "Transport",
    jaTitle: "\u4ea4\u901a",
    zhTitle: "\u4ea4\u901a",
    koTitle: "\uad50\ud1b5",
    items: [
      { en: "Opal card weekly cap (adult)", ja: "Opalカードの週上限（大人）", zh: "Opal卡每周上限（成人）", ko: "Opal 카드 주간 상한선 (성인)", cost: "$50" },
      { en: "Single train trip (CBD to Parramatta)", ja: "電車1回（CBD〜Parramatta）", zh: "单程火车（CBD到Parramatta）", ko: "기차 1회 (CBD → Parramatta)", cost: "$5.60" },
      { en: "Single bus trip (inner city)", ja: "バス1回（市内）", zh: "单程公交（市中心）", ko: "버스 1회 (시내)", cost: "$2.40–$4.80" },
      { en: "Light rail trip", ja: "ライトレール1回", zh: "轻轨单程", ko: "경전철 1회", cost: "$2.40–$4.80" },
      { en: "Uber (CBD to Airport)", ja: "Uber（CBD〜空港）", zh: "Uber（CBD到机场）", ko: "Uber (CBD → 공항)", cost: "$45–$65" },
      { en: "Petrol (per litre)", ja: "ガソリン（1リットルあたり）", zh: "汽油（每升）", ko: "휘발유 (리터당)", cost: "~$1.90" },
    ],
  },
  {
    title: "Groceries & Food",
    jaTitle: "\u98df\u6599\u54c1\u3068\u98df\u4e8b",
    zhTitle: "\u98df\u54c1\u6742\u8d27\u4e0e\u996e\u98df",
    koTitle: "\uc2dd\ub8cc\ud488\uacfc \uc2dd\ube44",
    items: [
      { en: "Weekly grocery shop (1 person, Woolies/Coles)", ja: "毎週の食料品（1人分、Woolies/Coles）", zh: "每周食品杂货（1人，Woolies/Coles）", ko: "주간 식료품 (1인, Woolies/Coles)", cost: "$80–$120" },
      { en: "Milk (1L)", ja: "牛乳（1L）", zh: "牛奶（1升）", ko: "우유 (1L)", cost: "$2.50" },
      { en: "Bread (loaf)", ja: "パン（1斤）", zh: "面包（一条）", ko: "식빵", cost: "$4.50" },
      { en: "Eggs (12 pack)", ja: "卵（12個入り）", zh: "鸡蛋（12个装）", ko: "달걀 (12개)", cost: "$6.50" },
      { en: "Chicken breast (1kg)", ja: "鶏むね肉（1kg）", zh: "鸡胸肉（1公斤）", ko: "닭가슴살 (1kg)", cost: "$12–$16" },
      { en: "Rice (2kg)", ja: "米（2kg）", zh: "大米（2公斤）", ko: "쌀 (2kg)", cost: "$6–$10" },
      { en: "Dining out (cafe brunch)", ja: "外食（カフェのブランチ）", zh: "外出就餐（咖啡馆早午餐）", ko: "카페 브런치", cost: "$20–$30" },
      { en: "Dining out (restaurant dinner)", ja: "外食（レストランのディナー）", zh: "外出就餐（餐厅晚餐）", ko: "레스토랑 저녁", cost: "$35–$65" },
      { en: "Korean restaurant (bibimbap)", ja: "韓国料理店（ビビンバ）", zh: "韩式餐厅（石锅拌饭）", ko: "한식당 (비빔밥)", cost: "$18–$25" },
      { en: "Takeaway coffee", ja: "テイクアウトのコーヒー", zh: "外带咖啡", ko: "테이크아웃 커피", cost: "$4.50–$6" },
    ],
  },
  {
    title: "Phone & Internet",
    jaTitle: "\u30b9\u30de\u30db\u3068\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8",
    zhTitle: "\u624b\u673a\u4e0e\u7f51\u7edc",
    koTitle: "\ud734\ub300\ud3f0\uacfc \uc778\ud130\ub137",
    items: [
      { en: "Prepaid SIM (Amaysim / Boost / Aldi)", ja: "プリペイドSIM（Amaysim / Boost / Aldi）", zh: "预付费SIM卡（Amaysim / Boost / Aldi）", ko: "선불 SIM (Amaysim / Boost / Aldi)", cost: "$15–$30/month" },
      { en: "Postpaid plan (20GB+)", ja: "ポストペイドプラン（20GB+）", zh: "后付费套餐（20GB+）", ko: "후불 요금제 (20GB+)", cost: "$30–$50/month" },
      { en: "Home NBN internet (50Mbps)", ja: "自宅のNBNインターネット（50Mbps）", zh: "家庭NBN宽带（50Mbps）", ko: "가정용 NBN 인터넷 (50Mbps)", cost: "$70–$90/month" },
      { en: "Home NBN internet (100Mbps)", ja: "自宅のNBNインターネット（100Mbps）", zh: "家庭NBN宽带（100Mbps）", ko: "가정용 NBN 인터넷 (100Mbps)", cost: "$90–$110/month" },
    ],
  },
  {
    title: "Utilities & Bills",
    jaTitle: "\u516c\u5171\u6599\u91d1\u3068\u8acb\u6c42",
    zhTitle: "\u6c34\u7535\u4e0e\u8d26\u5355",
    koTitle: "\uacf5\uacfc\uae08\uacfc \uccad\uad6c\uc11c",
    items: [
      { en: "Electricity (1 person, apartment)", ja: "電気代（1人、アパート）", zh: "电费（1人，公寓）", ko: "전기세 (1인, 아파트)", cost: "$80–$150/quarter" },
      { en: "Gas (cooking + hot water)", ja: "ガス代（調理 + 給湯）", zh: "燃气费（做饭 + 热水）", ko: "가스세 (요리 + 온수)", cost: "$50–$100/quarter" },
      { en: "Water (apartment, billed quarterly)", ja: "水道代（アパート、四半期ごとの請求）", zh: "水费（公寓，按季度计费）", ko: "수도세 (아파트, 분기별)", cost: "$80–$180/quarter" },
      { en: "Contents insurance (renters)", ja: "家財保険（賃貸居住者）", zh: "家庭财产保险（租客）", ko: "가재도구 보험 (세입자)", cost: "$20–$40/month" },
    ],
  },
  {
    title: "Health Insurance",
    jaTitle: "\u533b\u7642\u4fdd\u967a",
    zhTitle: "\u5065\u5eb7\u4fdd\u9669",
    koTitle: "\uac74\uac15\ubcf4\ud5d8",
    items: [
      { en: "OSHC (student, single, per year)", ja: "OSHC（学生、単身、年間）", zh: "OSHC（学生，单人，每年）", ko: "OSHC (유학생, 1인, 연간)", cost: "~$600/year" },
      { en: "OVHC (working holiday, per year)", ja: "OVHC（ワーホリ、年間）", zh: "OVHC（打工度假，每年）", ko: "OVHC (워홀, 연간)", cost: "~$500–$900/year" },
      { en: "GP visit (bulk billed)", ja: "GP受診（バルクビリング）", zh: "全科医生就诊（统一报销）", ko: "GP 방문 (벌크 빌)", cost: "Free" },
      { en: "GP visit (private, no Medicare)", ja: "GP受診（自費、Medicareなし）", zh: "全科医生就诊（自费，无Medicare）", ko: "GP 방문 (개인, 메디케어 없음)", cost: "$50–$80" },
      { en: "Ambulance cover (annual)", ja: "救急車カバー（年間）", zh: "救护车保险（每年）", ko: "구급차 보험 (연간)", cost: "~$60/year" },
    ],
  },
];

export default function CostOfLivingPage() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-12">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl font-bold mb-4 text-stone-900 dark:text-stone-100">
          <En translated>Cost of Living in Sydney — 2026</En>
          <Ja>シドニーの生活費 — 2026</Ja>
          <Zh>悉尼生活成本——2026</Zh>
          <Ko>시드니 생활비 — 2026</Ko>
        </h1>
        <p className="text-lg text-stone-500 dark:text-stone-400 max-w-2xl mx-auto">
          <En translated>Real prices for rent, food, transport, and bills. All figures in AUD. Updated for 2026.</En>
          <Ja>家賃、食費、交通費、光熱費の実際の価格。金額はすべてAUD（豪ドル）表示。2026年に更新。</Ja>
          <Zh>房租、食物、交通和账单的真实价格。所有金额均以澳元（AUD）计。已更新至2026年。</Zh>
          <Ko>임대료, 식비, 교통비, 공과금의 실제 가격입니다. 모든 금액은 호주 달러(AUD) 기준입니다.</Ko>
        </p>
      </div>

      {/* Quick summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {[
          { label: { en: "Single person (shared)", ja: "単身（シェアハウス）", zh: "单人（合租）", ko: "1인 (쉐어하우스)" }, total: "$700–$1,200/month" },
          { label: { en: "Single person (own apartment)", ja: "単身（単独アパート）", zh: "单人（独立公寓）", ko: "1인 (단독 아파트)" }, total: "$1,200–$2,000/month" },
          { label: { en: "Couple (sharing)", ja: "カップル（同居）", zh: "情侣（合住）", ko: "커플 (함께 사는 경우)" }, total: "$1,800–$2,800/month" },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-5 border border-sunset/20"
            style={{ background: "linear-gradient(135deg, rgba(232,114,42,0.08), rgba(212,165,116,0.06))" }}
          >
            <div className="text-sm font-medium text-stone-600 dark:text-stone-300 mb-1.5">
              <En translated>{item.label.en}</En>
              <Ja>{pickLocale("ja", item.label)}</Ja>
              <Zh>{pickLocale("zh", item.label)}</Zh>
              <Ko>{item.label.ko}</Ko>
            </div>
            <div className="text-xl font-bold text-sunset-ink">{item.total}</div>
          </div>
        ))}
      </div>

      {/* The sum of the tables below, at 4.33 weeks a month. */}
      <section className="mb-10 rounded-2xl border border-stone-200/80 dark:border-dark-border bg-white dark:bg-dark-surface p-5 md:p-6">
        <h2 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-stone-100 mb-1">
          <En translated>What a shared room actually costs</En>
          <Ja>シェアハウスの部屋の実際の月額</Ja>
          <Zh>合租单间的实际月支出</Zh>
          <Ko>쉐어하우스 방, 한 달에 실제로 드는 돈</Ko>
        </h2>
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">
          <En translated>Weekly prices from the tables below, converted at 4.33 weeks a month.</En>
          <Ja>下の表の週額を、1か月＝4.33週で換算しました。</Ja>
          <Zh>下方表格的周价按每月 4.33 周换算。</Zh>
          <Ko>아래 표의 주간 가격을 한 달 4.33주로 환산했습니다.</Ko>
        </p>
        <table className="w-full text-sm">
          <tbody className="divide-y divide-stone-200/80 dark:divide-dark-border">
            {monthlyRows.map((row, i) => (
              <tr key={i}>
                <td className="py-2.5 text-stone-700 dark:text-stone-300">
                  <En translated>{row.en}</En>
                  <Ja>{row.ja}</Ja>
                  <Zh>{row.zh}</Zh>
                  <Ko>{row.ko}</Ko>
                </td>
                <td className="py-2.5 text-right font-medium text-stone-900 dark:text-stone-100 whitespace-nowrap">{row.value}</td>
              </tr>
            ))}
            <tr>
              <td className="py-3 font-semibold text-stone-900 dark:text-stone-100">
                <En translated>Total per month</En>
                <Ja>月額合計</Ja>
                <Zh>每月合计</Zh>
                <Ko>월 합계</Ko>
              </td>
              <td className="py-3 text-right font-bold text-sunset-ink whitespace-nowrap">$1,790–$2,715</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Category tables */}
      {categories.map((cat, i) => (
        <div
          key={i}
          className="mb-8 rounded-2xl overflow-hidden border border-stone-200/80 dark:border-dark-border"
        >
          <h2
            className="px-5 py-4 font-serif font-bold text-lg border-b border-stone-200/80 dark:border-dark-border text-stone-900 dark:text-stone-100"
            style={{ background: "linear-gradient(135deg, rgba(232,114,42,0.06), rgba(212,165,116,0.04))" }}
          >
            <En translated>{cat.title}</En>
            <Ja>{cat.jaTitle ?? cat.title}</Ja>
            <Zh>{cat.zhTitle ?? cat.title}</Zh>
            <Ko>{cat.koTitle ?? cat.title}</Ko>
          </h2>
          <div className="divide-y divide-stone-200/80 dark:divide-dark-border">
            {cat.items.map((item, j) => (
              <div
                key={j}
                className="px-5 py-3 flex items-center justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-stone-800 dark:text-stone-200">
                    <En translated>{item.en}</En>
                    <Ja>{pickLocale("ja", item)}</Ja>
                    <Zh>{pickLocale("zh", item)}</Zh>
                    <Ko>{item.ko}</Ko>
                  </div>
                </div>
                <div className="shrink-0 text-sm font-bold px-3 py-1 rounded-lg bg-sunset/10 text-sunset-ink">
                  {item.cost}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Tips section */}
      <div className="rounded-2xl p-6 mt-8 border border-sunset/20"
        style={{ background: "linear-gradient(135deg, rgba(232,114,42,0.06), rgba(212,165,116,0.04))" }}
      >
        <h2 className="text-xl font-bold mb-4 text-stone-900 dark:text-stone-100">
          <En translated>Money-Saving Tips</En>
          <Ja>節約のヒント</Ja>
          <Zh>省钱小贴士</Zh>
          <Ko>절약 팁</Ko>
        </h2>
        <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
          <li><En translated>Shop at Aldi for groceries — it's 20-30% cheaper than Woolies/Coles</En><Ja>食料品はAldiで — Woolies/Colesより20-30%安い</Ja><Zh>在Aldi购买食品杂货——比Woolies/Coles便宜20-30%</Zh><Ko>장보기는 Aldi에서 — Woolies/Coles보다 20-30% 저렴합니다</Ko></li>
          <li><En translated>Use the Opal card weekly cap — after $50, all travel is free for the week</En><Ja>Opalカードの週間上限を活用 — $50を超えれば、その週の移動はすべて無料</Ja><Zh>善用Opal卡每周上限——超过$50后，当周所有出行免费</Zh><Ko>Opal 카드 주간 상한선 활용 — $50 이후 무료</Ko></li>
          <li><En translated>Korean grocery stores (Strathfield, Eastwood, Campsie) have cheaper Asian ingredients</En><Ja>韓国系スーパー（Strathfield、Eastwood、Campsie）ならアジア食材が安い</Ja><Zh>韩国超市（Strathfield、Eastwood、Campsie）的亚洲食材更便宜</Zh><Ko>한인 마트 (Strathfield, Eastwood, Campsie)에서 아시안 식품이 저렴합니다</Ko></li>
          <li><En translated>Share housing is the biggest cost saver — save $200+/week vs living alone</En><Ja>シェアハウスが最大の節約 — 一人暮らしより週$200以上節約</Ja><Zh>合租是最省钱的——比独居每周省$200以上</Zh><Ko>쉐어하우스가 가장 큰 절약 — 혼자 살 때보다 주당 $200+ 절약</Ko></li>
          <li><En translated>Buy second-hand furniture on Facebook Marketplace or Gumtree</En><Ja>家具はFacebook MarketplaceやGumtreeで中古を買う</Ja><Zh>在Facebook Marketplace或Gumtree买二手家具</Zh><Ko>가구는 Facebook Marketplace나 Gumtree에서 중고로 구매하세요</Ko></li>
        </ul>
      </div>

      <RelatedContent items={relatedFromMeta(["apartment", "transport", "workplace"])} />

    </main>
  );
}

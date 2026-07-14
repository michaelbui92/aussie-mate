// Server component — bilingual guide to Sydney's multicultural neighbourhoods.
// Editorial style — where to go for authentic cultural experiences.

import type { Metadata } from "next";
import { En, Ko } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { seoFor, withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo(
  {

  ...seoFor("/experiences/culture"),
  title: "Sydney's Multicultural Neighbourhoods — AussieGuides",
  description:
    "Cabramatta, Hurstville, Chatswood, Strathfield, Eastwood — Sydney's Korean, Vietnamese, Chinese and other cultural hubs, with what to eat and do in each.",
  },
  "/experiences/culture"
);

type CultureSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; en: string; ko: string }>;
};

const sections: CultureSection[] = [
  {
    id: "cabramatta",
    iconKey: "UtensilsCrossed",
    accent: "rose",
    title: "Cabramatta — Little Vietnam",
    koTitle: "카브라마타 — 작은 베트남",
    desc: "Sydney's Vietnamese heartland — pho, banh mi, and fresh markets",
    koDesc: "시드니의 베트남 중심지 — 쌀국수, 반미, 신선한 시장",
    img: "/images/pexels-3184183.jpg?auto=compress&cs=tinysrgb&w=1200",
    items: [
      { label: "What to Eat", en: "Pho (Vietnamese beef noodle soup) is the star — try Pho Tau Bay, Pho Ann, or Tan Viet for legendary crispy-skin chicken. Banh mi (Vietnamese pork rolls) from Thanh Binh Bakery or Hong Ha Bakery are world-famous — crisp baguette, pâté, pickled veg, and your choice of meat for about $7 AUD. Sugar cane prawn skewers, rice paper rolls, and iced Vietnamese coffee (cà phê sữa đá — strong coffee with condensed milk) are all on the list. Fresh juice stands are everywhere. Most shops are cash-only — bring at least $30–$50 AUD cash.", ko: "쌀국수(포)가 주인공 — Pho Tau Bay, Pho Ann, Tan Viet에서 전설적인 바삭한 닭고기를 맛보세요. Thanh Binh Bakery나 Hong Ha Bakery의 반미는 세계적으로 유명합니다 — 바삭한 바게트, 페이트, 피클 야채와 고기 선택으로 약 $7 AUD. 사탕수수 새우 꼬치, 라이스페이퍼롤, 베트남 아이스커피(cà phê sữa đá — 연유를 넣은 진한 커피)도 추천합니다. 신선한 주스 가판도 도처에 있습니다. 대부분 현금만 받으니 $30–$50 AUD 정도 현금을 챙겨가세요." },
      { label: "What to Do", en: "Walk along John Street and the arcades — the streets are lined with fruit shops, fabric stores, jewellery shops, and bakeries. The atmosphere is electric on weekends. The Cabramatta Fresh Food Market is open daily with tropical fruits, fresh herbs, and live seafood. The Pai Lau gate (Friendship Arch) at the entrance to Freedom Plaza is a landmark. If you're into photography, this is one of Sydney's most vibrant street photography spots. Train from Central Station to Cabramatta takes about 50 minutes on the T2 line.", ko: "John Street와 아케이드를 따라 걸어보세요 — 과일 가게, 원단 가게, 보석 가게, 빵집이 늘어서 있습니다. 주말에는 분위기가 매우 활기찹니다. Cabramatta Fresh Food Market은 열대 과일, 신선한 허브, 활어를 판매하며 매일 열립니다. Freedom Plaza 입구의 Pai Lau 게이트(우정 아치)는 랜드마크입니다. 사진을 좋아한다면 시드니에서 가장 활기찬 거리 사진 촬영지 중 하나입니다. Central Station에서 Cabramatta까지 T2 라인으로 기차로 약 50분." },
      { label: "When to Go", en: "Weekends are busiest — the markets are in full swing and the restaurants are packed (good energy but expect queues at popular pho spots). Weekdays are quieter, especially mornings. Lunar New Year (January/February) brings lion dances, firecrackers, and street festivals — one of the best Lunar New Year celebrations in Sydney outside the city centre. The Moon Festival (mid-autumn, usually September) also brings lantern displays and mooncakes. If you want to avoid crowds, go on a weekday morning.", ko: "주말이 가장 붐빕니다 — 시장이 활발하고 레스토랑이 꽉 찹니다(좋은 에너지지만 인기 쌀국수집은 줄을 서야 함). 평일은 더 한적하며, 특히 아침. 구정(1월/2월)에는 사자춤, 폭죽, 거리 축제 — 시내 밖 시드니 최고의 구정 축제 중 하나. 중추절(보통 9월)에도 등불 전시와 월병이 나옵니다. 붐비는 걸 피하려면 평일 아침에 가세요." },
    ],
  },
  {
    id: "burwood",
    iconKey: "Compass",
    accent: "sunset",
    title: "Burwood — Little China",
    koTitle: "버우드 — 작은 중국",
    desc: "Sydney's Chinese food destination — yum cha, hotpot, and late-night eats",
    koDesc: "시드니의 중국 음식 중심지 — 딤섬, 훠궈, 야식",
    img: "/images/pexels-958545.jpg?auto=compress&cs=tinysrgb&w=1200",
    items: [
      { label: "What to Eat", en: "Burwood is a powerhouse of regional Chinese cuisines. The Burwood Chinatown precinct (around Burwood Road) has dozens of restaurants. Yum cha (dim sum trolleys) at Golden Century or East Ocean is a classic Sydney experience — go on weekends for the full trolley service. Hot pot (Sichuan-style spicy broth or mild bone broth) at Spicy Joint or Haidilao — cook your own meat and vegetables at the table. Hand-pulled noodles (Lanzhou lamian) at 1915 Lanzhou Beef Noodles. Bubble tea shops everywhere — Chatime, Gong Cha, and local favourites. For something different, try xi'an-style biang biang noodles or rou jia mo (Chinese hamburger).", ko: "버우드는 중국 지역 요리의 본산입니다. Burwood Chinatown 구역(Burwood Road 주변)에는 수십 개의 레스토랑이 있습니다. Golden Century나 East Ocean의 딤섬은 클래식한 시드니 경험 — 완전한 카트 서비스를 위해 주말에 가세요. Spicy Joint나 Haidilao의 훠궈(쓰촨식 매운 육수 또는 순한 뼈 육수) — 테이블에서 직접 고기와 야채를 요리합니다. 1915 Lanzhou Beef Noodles의 수타면. 버블티 가게가 도처에 — Chatime, Gong Cha, 그리고 현지 인기 매장들. 다른 걸 원한다면 시안식 비앙비앙면이나 rou jia mo(중국식 햄버거)를 드셔보세요." },
      { label: "What to Do", en: "Burwood Road is the main strip — walk from the station to Burwood Park. The Burwood Chinatown food court (lower ground of the Emerald Square building) is a hawker-style experience with stalls selling everything from skewers to dessert. Westfield Burwood for mainstream shopping. Burwood Park is a large green space with a playground and barbecue facilities — good for a picnic after eating. The Vietnamese community in nearby Burwood and Strathfield is also worth exploring. Train from Central Station to Burwood takes about 12 minutes on the T9 line.", ko: "Burwood Road가 메인 스트립 — 역에서 Burwood Park까지 걸어가세요. Burwood Chinatown 푸드코트(Emerald Square 건물 지하)는 꼬치부터 디저트까지 모든 것을 파는 호커 스타일 경험입니다. Westfield Burwood는 일반 쇼핑. Burwood Park는 놀이터와 바비큐 시설이 있는 큰 녹지 공간 — 식사 후 피크닉에 좋습니다. 인근 버우드와 Strathfield의 베트남 커뮤니티도 탐방할 가치가 있습니다. Central Station에서 Burwood까지 T9 라인으로 기차로 약 12분." },
      { label: "Nearby: Strathfield", en: "One stop from Burwood, Strathfield is Sydney's Korean heartland. The area around Strathfield station is lined with Korean BBQ restaurants (all-you-can-eat from ~$35 AUD–45), Korean fried chicken joints, kimbap shops, and dessert cafes. Try HanSang for soups and stews, Mapo for BBQ, or Red Pepper for Korean fried chicken. Korean grocery stores (Hanaro Mart, Komart) stock everything from gochujang to fresh kimchi. Most places stay open late — great for a post-yum cha dessert run. Strathfield Sports Club and Strathfield Golf Club are local institutions.", ko: "버우드에서 한 정거장, Strathfield는 시드니의 한국 중심지입니다. Strathfield 역 주변에는 한국식 BBQ 레스토랑(무제한 약 $35 AUD–45부터), 한국식 치킨 가게, 김밥 가게, 디저트 카페가 늘어서 있습니다. 한상에서 찌개와 탕, 마포에서 BBQ, Red Pepper에서 한국식 치킨을 맛보세요. 한국 식료품점(Hanaro Mart, Komart)은 고추장부터 신선한 김치까지 모든 것을 갖추고 있습니다. 대부분의 가게는 늦게까지 영업 — 딤섬 후 디저트 타임에 좋습니다. Strathfield Sports Club과 Strathfield Golf Club은 지역 명소입니다." },
    ],
  },
  {
    id: "other-communities",
    iconKey: "Globe",
    accent: "coast",
    title: "More Neighbourhoods",
    koTitle: "더 많은 동네",
    desc: "Every corner of Sydney has a story — here are more cultural communities worth visiting",
    koDesc: "시드니의 모든 지역에는 이야기가 있습니다 — 방문할 가치가 있는 더 많은 문화 공동체",
    items: [
      { label: "Harris Park — Little India", en: "Harris Park (near Parramatta) is Sydney's Little India. Wigram Street and Marion Street are dense with Indian restaurants, sweet shops, and grocery stores. Try Chatkazz (vegetarian street food), Billu's (butter chicken and tandoori), and Ginger (modern Indian). The sweets — gulab jamun, jalebi, and barfi — are incredible. Train from Central to Harris Park takes about 30 minutes. Go on a weekend evening when the area is buzzing. Bring cash as some smaller places are cash-only.", ko: "Harris Park(Parramatta 인근)는 시드니의 작은 인도입니다. Wigram Street와 Marion Street에는 인도 레스토랑, 과자 가게, 식료품점이 밀집해 있습니다. Chatkazz(채식 거리 음식), Billu's(버터 치킨과 탄두리), Ginger(현대 인도 요리)를 드셔보세요. 굴랍 자문, 잘레비, 바르피 같은 과자들은 놀랍습니다. Central에서 Harris Park까지 기차로 약 30분. 지역이 활기찬 주말 저녁에 가세요. 일부 작은 가게는 현금만 받으므로 현금을 챙겨가세요." },
      { label: "Auburn & Granville — Middle Eastern", en: "Auburn and Granville are the heart of Sydney's Middle Eastern and Turkish communities. Go for kebabs, shawarma, falafel, baklava, and Turkish pide (boat-shaped pizza). Auburn's main street has Lebanese sweet shops with mountains of baklava and knafeh (sweet cheese pastry). Granville has the famous El Jannah charcoal chicken — a Sydney institution (garlic sauce is legendary). Many restaurants are halal. The Gallipoli Mosque in Auburn is open for visits outside prayer times — one of the largest mosques in Australia.", ko: "Auburn과 Granville은 시드니 중동 및 터키 커뮤니티의 중심지입니다. 케밥, 샤와르마, 팔라펠, 바클라바, 터키 피데(보트 모양 피자)를 먹으러 가세요. Auburn 메인 스트리트에는 바클라바와 크나페(달콤한 치즈 페이스트리)의 산 더미가 있는 레바논 과자 가게들이 있습니다. Granville에는 유명한 El Jannah 숯불 치킨 — 시드니의 명소(마늘 소스는 전설적). 많은 레스토랑이 할랄입니다. Auburn의 Gallipoli Mosque는 기도 시간 외에 방문 가능 — 호주에서 가장 큰 모스크 중 하나입니다." },
      { label: "Chatswood & Eastwood — East Asian", en: "Chatswood is a northern hub for Chinese, Taiwanese, Japanese, and Korean food. Chatswood Interchange has multiple food courts and restaurants. The Mandarin Centre food court is legendary for cheap and authentic Asian food. Eastwood is split between Korean (east side) and Chinese (west side) — the best of both worlds. Good for Korean BBQ, Chinese dumplings, and Japanese ramen. Both are easily accessible by train — Chatswood on the T1 line (20 mins from Central), Eastwood on the T9 line (30 mins). Parking is difficult on weekends — take the train.", ko: "Chatswood는 중국, 대만, 일본, 한국 음식의 북부 허브입니다. Chatswood Interchange에는 여러 푸드코트와 레스토랑이 있습니다. Mandarin Centre 푸드코트는 저렴하고 정통적인 아시안 음식으로 유명합니다. Eastwood는 한국(동쪽)과 중국(서쪽)으로 나뉘어 있습니다 — 양쪽 세계의 최고. 한국 BBQ, 중국 딤섬, 일본 라멘에 좋습니다. 둘 다 기차로 쉽게 접근 가능 — Chatswood T1 라인(Central에서 20분), Eastwood T9 라인(30분). 주말에는 주차가 어려우니 기차를 이용하세요." },
    ],
  },
  {
    id: "indigenous",
    iconKey: "MapPin",
    accent: "stone",
    title: "Indigenous Culture",
    koTitle: "원주민 문화",
    desc: "The world's oldest living culture — where to learn, see, and respect First Nations heritage",
    koDesc: "세계에서 가장 오래된 살아있는 문화 — 원주민 유산을 배우고, 보고, 존중하는 곳",
    items: [
      { label: "Where to Go", en: "The Australian Museum (Darlinghurst) has a dedicated First Nations gallery with thousands of Indigenous artefacts. The Art Gallery of NSW has an extensive Aboriginal and Torres Strait Islander art collection. Barangaroo Reserve is named after a powerful Cammeraygal woman and has interpretive signage about the area's Indigenous history. The Royal Botanic Garden hosts Aboriginal heritage tours that cover bush tucker, traditional uses of plants, and the history of the harbour. For a day trip, the Blue Mountains has significant Aboriginal rock art sites and cultural tours led by Indigenous guides.", ko: "Australian Museum(Darlinghurst)에는 수천 점의 원주민 유물이 있는 전용 First Nations 갤러리가 있습니다. NSW Art Gallery에는 광범위한 Aboriginal 및 Torres Strait Islander 예술 컬렉션이 있습니다. Barangaroo Reserve는 강력한 Cammeraygal 여성의 이름을 따서 명명되었으며 이 지역의 원주민 역사에 대한 해설 간판이 있습니다. Royal Botanic Garden은 부시 터커, 식물의 전통적 사용, 항구의 역사를 다루는 Aboriginal 문화 투어를 제공합니다. 당일 여행으로는 Blue Mountains에 중요한 Aboriginal 암벽화 유적지와 원주민 가이드가 이끄는 문화 투어가 있습니다." },
      { label: "Learn & Respect", en: "Always acknowledge that you're on Aboriginal land. The Sydney region is home to the Gadigal people of the Eora Nation. Most events begin with an Acknowledgement of Country. When visiting rock art sites: do not touch the art (oils from your skin can damage it), do not climb on the rocks, and stay on marked paths. Some sites are sacred and not open to the public — respect closure signs. Indigenous cultural knowledge is the intellectual property of Aboriginal and Torres Strait Islander peoples — stories, designs, and knowledge should be appreciated, not taken.", ko: "항상 Aboriginal 땅에 있음을 인정하세요. 시드니 지역은 Eora Nation의 Gadigal 사람들의 고향입니다. 대부분의 행사는 Country에 대한 감사 인사로 시작합니다. 암벽화 유적지 방문 시: 작품에 손대지 마세요(피부 기름이 손상시킬 수 있음), 바위에 오르지 마세요, 표시된 길을 유지하세요. 일부 유적지는 신성하며 대중에게 공개되지 않습니다 — 폐쇄 표지판을 존중하세요. 원주민 문화 지식은 Aboriginal 및 Torres Strait Islander 사람들의 지적 재산입니다 — 이야기, 디자인, 지식은 감상하되 가져가지 마세요." },
      { label: "Events & Dates", en: "NAIDOC Week (first full week of July) celebrates Aboriginal and Torres Strait Islander history and culture with events across Sydney — art exhibitions, performances, talks, and the NAIDOC march. National Reconciliation Week (27 May – 3 June) marks the 1967 referendum and the Mabo decision. Yabun Festival (26 January, Victoria Park) is the largest one-day Aboriginal music and culture festival in Australia — an alternative way to spend the 26th with music, dance, and food. First Nations films screen at the Sydney Film Festival in June.", ko: "NAIDOC Week(7월 첫째 주)은 시드니 전역에서 Aboriginal 및 Torres Strait Islander 역사와 문화를 예술 전시, 공연, 토크, NAIDOC 행진으로 기념합니다. National Reconciliation Week(5월 27일–6월 3일)은 1967년 국민투표와 Mabo 판결을 기념합니다. Yabun Festival(1월 26일, Victoria Park)은 호주 최대의 1일 Aboriginal 음악과 문화 축제입니다 — 음악, 댄스, 음식과 함께 26일을 보내는 대안적 방법. 6월 Sydney Film Festival에서 First Nations 영화가 상영됩니다." },
    ],
  },
];

export default function CulturePage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>Culture</En><Ko>문화</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En>Many cultures, one Sydney</En>
            <Ko>많은 문화, 하나의 시드니</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En>Sydney is one of the most multicultural cities in the world. Every neighbourhood has its own food, language, and traditions. Here's where to go to experience them firsthand.</En>
            <Ko>시드니는 세계에서 가장 다문화적인 도시 중 하나입니다. 모든 동네에는 고유한 음식, 언어, 전통이 있습니다. 직접 경험할 수 있는 곳을 소개합니다.</Ko>
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="space-y-12">
          {sections.map((section, i) => (
            <EditorialSection key={section.id} data={section} index={i} />
          ))}
        </div>

        <section className="mt-16 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-3">
            <En>Resources</En><Ko>리소스</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En>Keep exploring.</En>
            <Ko>계속 탐험하세요.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En>Sydney's cultural richness is one of its greatest strengths. Take the train to a neighbourhood you've never been to. Try food you've never eaten. Talk to people. The best way to understand Australia is to experience its multicultural soul.</En>
            <Ko>시드니의 문화적 풍요로움은 가장 큰 강점 중 하나입니다. 가보지 않은 동네로 기차를 타보세요. 먹어보지 않은 음식을 먹어보세요. 사람들과 대화하세요. 호주를 이해하는 가장 좋은 방법은 그 다문화적 영혼을 경험하는 것입니다.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.australianmuseum.net.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">Australian Museum ↗</a>
            <a href="https://www.sydney.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Destination NSW ↗</a>
          </div>
        </section>
      </div>
    </div>
  );
}

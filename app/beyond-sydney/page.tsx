// Beyond-sydney page — server component.
// Destinations data, vibe metadata, and icon keys are all serializable, so
// the page can render the static layout (header) on the server and hand the
// interactive list (filter pills + per-destination accordion) to the
// FilteredAccordion client island.

import { En, Ko } from "@/components/LangBlocks";
import { MapPin, Car } from "@/components/Icons";
import FilteredAccordion, { type BeyondSydneyDestination } from "@/components/FilteredAccordion";
import { seoFor, withSeo } from "@/lib/seo";

export const metadata = withSeo(
  {

  ...seoFor("/beyond-sydney"),
  title: "Beyond Sydney — 시드니 외 호주 여행지",
  description:
    "시드니 외 호주 여행지 가이드 — 블루마운틴, 헌터밸리, 울런공, 뉴캐슬, 사우스코스트, 그리고 멜버른·브리즈번·퍼스까지. 각지 명소, 교통, 추천 일정.",
  },
  "/beyond-sydney"
);

const destinations: BeyondSydneyDestination[] = [
  {
    id: "newcastle",
    iconKey: "CityScape",
    name: "Newcastle",
    state: "NSW",
    distance: "2 hours north",
    desc: "A vibrant coastal city with great beaches, a growing food scene, and a relaxed university town vibe. Great for a day trip or weekend away.",
    koDesc: "아주 좋은 해변, 성장하는 음식 씬, 편안한 대학 도시 분위기를 가진 활기찬 해안 도시입니다. 당일 여행이나 주말 여행에 좋습니다.",
    highlights: ["Nobbys Beach", "Honeysuckle waterfront", "Darby Street food scene", "Newcastle Museum", "Merewether Ocean Baths"],
    koHighlights: ["Nobbys Beach", "Honeysuckle 물가", "Darby Street 음식 거리", "뉴캐슬 박물관", "Merewether Ocean Baths"],
    transport: "Train from Sydney Central ($18 AUD Opal) — 2.5 hours. Drive: 2 hours via M1.",
    koTransport: "시드니 중앙역에서 기차($18 AUD Opal) — 2.5시간. driving: M1로 2시간.",
    bestTime: "Year-round — summer for beaches, winter for coastal walks",
    koBestTime: "연중 — 여름은 해변, 겨울은 해안 산책",
    vibe: "beach",
  },
  {
    id: "wollongong",
    iconKey: "Waves",
    name: "Wollongong",
    state: "NSW",
    distance: "1.5 hours south",
    desc: "A seaside city with a gorgeous promenade, excellent seafood, and the iconic Sea Cliff Bridge. Perfect for a scenic drive or bike ride.",
    koDesc: "매력적인 해안 산책로, 훌륭한 해산물, 상징적인 Sea Cliff Bridge가 있는 해변 도시입니다. 경치 좋은 드라이브나 자전거 타기에 완벽합니다.",
    highlights: ["Sea Cliff Bridge", "Wollongong Botanic Garden", "Northbeach cafes", "Mount Keira summit", "Illawarra Ranges"],
    koHighlights: ["Sea Cliff Bridge", "울런공 식물원", "Northbeach 카페", "Mount Keira 정상", "Illawarra 산맥"],
    transport: "Train from Sydney Central ($10 AUD Opal) — 1.5 hours. Drive: M1 south, 90 minutes.",
    koTransport: "시드니 중앙역에서 기차($10 AUD Opal) — 1.5시간. 운전: M1 남쪽으로 90분.",
    bestTime: "Spring and autumn for best weather",
    koBestTime: "봄과 가을이 가장 좋은 날씨입니다",
    vibe: "beach",
  },
  {
    id: "byron-bay",
    iconKey: "Sunrise",
    name: "Byron Bay",
    state: "NSW",
    distance: "3 hours north",
    desc: "Famous for its lighthouse, laid-back surf culture, and alternative lifestyle. One of Australia's most iconic beach towns — worth the drive.",
    koDesc: "등대, 편안한 서핑 문화, 대안적인 라이프스타일로 유명합니다. 호주에서 가장 상징적인 해변 도시 중 하나 — 드라이브할 가치가 있습니다.",
    highlights: ["Cape Byron Lighthouse", "Main Beach", "Belongil Cafes", "Farmers markets (Thursday)", "Nightlife"],
    koHighlights: ["Cape Byron 등대", "Main Beach", "Belongil 카페", "팜마켓(목요일)", "나이트라이프"],
    transport: "Drive: 3 hours via M1 and Pacific Highway. Greyhound buses run daily from Sydney. Fly to Ballina airport (1 hour).",
    koTransport: "Driving: M1과 Pacific Highway로 3시간. Greyhound 버스가 매일 시드니에서 출발합니다. Ballina 공항으로 비행(1시간).",
    bestTime: "September-November (spring) and March-May (autumn) — summer is crowded and expensive",
    koBestTime: "9-11월(봄)과 3-5월(가을) — 여름은 붐비고 비용이 많이 듭니다",
    vibe: "beach",
  },
  {
    id: "hunter-valley",
    iconKey: "Wine",
    name: "Hunter Valley",
    state: "NSW",
    distance: "2.5 hours north",
    desc: "NSW's premier wine region — rolling vineyards, boutique wineries, excellent restaurants, and golf courses. Relaxed and scenic.",
    koDesc: "NSW의 대표적인 와인 지역 — 구릉 지대의 포도원, 부티크 와이너리, 훌륭한 레스토랑, 골프 코스. 편안하고 경치가 좋습니다.",
    highlights: ["Wandering Wolf Wines", "Brokenwood Wines", "Hunter Valley Gardens", "Hot air balloons", "Local cheese and chocolate"],
    koHighlights: ["Wandering Wolf Wines", "Brokenwood Wines", "Hunter Valley Gardens", "열기구", "로컬 치즈와 초콜릿"],
    transport: "Drive: 2.5 hours via M1. Day tours depart Sydney daily ($100 AUD-180 includes transport and tastings).",
    koTransport: "운전: M1로 2.5시간. 당일치기 투어가 매일 시드니에서 출발합니다($100–180 AUD, 교통편과 시음 포함).",
    bestTime: "April-May (autumn harvest) or September-October (spring bloom)",
    koBestTime: "4-5월(가을 수확기) 또는 9-10월(봄 꽃)",
    vibe: "food",
  },
  {
    id: "blue-mountains",
    iconKey: "Mountain",
    name: "Blue Mountains",
    state: "NSW",
    distance: "1.5 hours west",
    desc: "A UNESCO World Heritage site — dramatic cliffs, eucalyptus forests, and cute mountain villages. The Classic Australian bush experience.",
    koDesc: "유네스코 세계유산 — 극적인 절벽, 유칼립투스 숲, 아담한 산악 마을. 고전적인 호주 부시 경험.",
    highlights: ["Three Sisters at Echo Point", "Leura village", "Scenic World (cable car)", "Katoomba cafes", "Wentworth Falls"],
    koHighlights: ["Three Sisters(Echo Point)", "Leura 마을", "Scenic World(케이블카)", "Katoomba 카페", "Wentworth Falls"],
    transport: "Train from Central to Katoomba ($18 AUD Opal) — 2 hours. Drive: 1.5 hours via M4.",
    koTransport: "Central에서 Katoomba까지 기차($18 AUD Opal) — 2시간. 운전: M4로 1.5시간.",
    bestTime: "Year-round — dramatic in any season, especially autumn (March-May) for colour",
    koBestTime: "연중 — 어느 계절이든 극적인 풍경을 보이며, 특히 가을(3월-5월)에 단풍이 아름답습니다",
    vibe: "nature",
  },
  {
    id: "jervis-bay",
    iconKey: "Dolphin",
    name: "Jervis Bay",
    state: "NSW",
    distance: "3 hours south",
    desc: "Crystalline white sand, turquoise water, dolphins, and whale watching. Consistently rated as some of Australia's most beautiful beaches.",
    koDesc: "투명한 백사장, 청록색 바다, 돌고래, 고래 관찰. 호주에서 가장 아름다운 해변 중 하나로 지속적으로 평가됩니다.",
    highlights: ["Hyams Beach (whitest sand in the world)", "Dolphin watches", "Whale watching (May-Nov)", "Booderee National Park", "White Sands walk"],
    koHighlights: ["Hyams Beach(세계에서 가장하얀 모래)", "돌고래 관찰", "고래 관찰(5-11월)", "Booderee National Park", "White Sands 산책"],
    transport: "Drive: 3 hours via M1 and Princes Highway. No train — you'll need a car. Campsites and Airbnb available.",
    koTransport: "Driving: M1과 Princes Highway로 3시간. 기차 없음 — 차가 필요합니다. 캠프장과 Airbnb 이용 가능.",
    bestTime: "October-April for beach weather, May-September for whales",
    koBestTime: "해변 날씨는 10-4월, 고래는 5-9월",
    vibe: "beach",
  },
  {
    id: "port-stephens",
    iconKey: "Koala",
    name: "Port Stephens",
    state: "NSW",
    distance: "2.5 hours north",
    desc: "Sandy dunes, koala sanctuaries, whale watching, and dolphin cruises. Famous for its large sand dunes at Stockton Beach.",
    koDesc: "모래 사구, 코알라 보호구역, 고래 관찰, 돌고래 크루즈. Stockton Beach의 큰 사구로 유명합니다.",
    highlights: ["Dolphin watching cruise", "Sandboarding at Stockton Dunes", "Koala Sanctuary", "Tomaree Summit walk", "Annekle Beach"],
    koHighlights: ["돌고래 관찰 크루즈", "Stockton Dunes의 샌드보딩", "코알라 보호구역", "Tomaree Summit 산책", "Anna Bay 해변"],
    transport: "Drive: 2.5 hours via M1 and Pacific Highway. Day tours from Sydney available.",
    koTransport: "Driving: M1과 Pacific Highway로 2.5시간. 시드니에서 당일치기 투어 이용 가능.",
    bestTime: "Year-round — whales (May-Nov), dolphins year-round",
    koBestTime: "연중 — 고래(5-11월), 돌고래는연중 있어요",
    vibe: "nature",
  },
  {
    id: "gold-coast",
    iconKey: "SurfBoard",
    name: "Gold Coast",
    state: "Queensland",
    distance: "4 hours south of Brisbane (1.5h flight or 9h drive from Sydney)",
    desc: "Theme parks, surf beaches, rooftop bars, and a buzzing backpacker scene. Not for everyone but if you want action, it's there.",
    koDesc: "테마파크, 서핑 해변, 루프탑 바, 활기찬 백팩커 씬. 모든 사람에게 맞는 건 아니지만 액션을 원한다면 거기 있습니다.",
    highlights: ["Surfers Paradise", "Broadwater", "Theme parks (Dreamworld, Movie World)", "Coolangatta beach", "Night markets"],
    koHighlights: ["Surfers Paradise", "Broadwater", "테마파크(Dreamworld, Movie World)", "Coolangatta 해변", "나이트 마켓"],
    transport: "Fly from Sydney (1.5 hours, ~$120 AUD one-way). Drive: 9 hours via Pacific Highway. Coach: Greyhound from Sydney ($80 AUD-120).",
    koTransport: "시드니에서 비행(1.5시간, 편도 약 $120 AUD). 운전: Pacific Highway로 9시간. 버스: 시드니에서 Greyhound($80–120 AUD).",
    bestTime: "September-November and March-May to avoid school holiday crowds",
    koBestTime: "학기 중 학교 방학 기간을 피하려면 9-11월과 3-5월이 좋습니다",
    vibe: "beach",
  },
  {
    id: "melbourne",
    iconKey: "TheaterMasks",
    name: "Melbourne",
    state: "Victoria",
    distance: "1 hour flight (or 9 hours drive)",
    desc: "Australia's cultural capital — street art, coffee, live music, hidden laneway bars, and the best food scene in the country. A very different energy from Sydney.",
    koDesc: "호주의 문화 수도 — 거리 예술, 커피, 라이브 음악, 숨겨진 뒷거리바, 이 나라 최고의 음식 씬. 시드니와 매우 다른 에너지.",
    highlights: ["Federation Square", "Hosier Lane street art", "Queen Victoria Market", "St Kilda Beach", "Yarra Valley day trip"],
    koHighlights: ["Federation Square", "Hosier Lane 거리 예술", "Queen Victoria Market", "St Kilda Beach", "Yarra Valley 당일 여행"],
    transport: "Fly from Sydney (1.5 hours, ~$80 AUD-150 one-way). Drive: 9 hours via Hume Highway. Coach: $60 AUD-90.",
    koTransport: "시드니에서 비행(1.5시간, 편도~$80 AUD-150). driving: Hume Highway로 9시간. 버스: $60 AUD-90.",
    bestTime: "Year-round — Melbourne has four seasons in a day. Winter (June-Aug) is cold but the coffee culture is best.",
    koBestTime: "연중 — 멜버른은 하루에 네 계절이 있습니다. 겨울(6-8월)은 춥지만 커피 문화는 최고입니다.",
    vibe: "city",
  },
  {
    id: "canberra",
    iconKey: "Building2",
    name: "Canberra",
    state: "ACT",
    distance: "3 hours south (330km)",
    desc: "Australia's capital — planned, spacious, and often underrated. Great museums (most are free), beautiful architecture, and a more laid-back vibe than expected.",
    koDesc: "호주의 수도 — 계획적이고 넓으며 종종 과소평가됩니다. 훌륭한 museum(대부분 무료), 아름다운 건축, 기대보다 더 편안한 분위기.",
    highlights: ["Parliament House", "National Gallery of Australia", "Australian War Memorial", "Lake Burley Griffin", "Questacon"],
    koHighlights: ["국회 의사당", "호주 국립 미술관", "호주 전쟁 기념관", "Lake Burley Griffin", "Questacon"],
    transport: "Drive: 3 hours via M31 Hume Highway. Coach: Greyhound or Murrays (~$50 AUD-70). Fly: 1 hour ($80 AUD-150).",
    koTransport: "Driving: M31 Hume Highway로 3시간. 버스: Greyhound 또는 Murrays(~$50 AUD-70). 비행: 1시간($80 AUD-150).",
    bestTime: "September-November for flowers and mild weather, or April for autumn leaves",
    koBestTime: "9-11월에는 꽃과 부드러운 날씨, 4월에는 가을 단풍이 좋습니다",
    vibe: "city",
  },
];

// Tailwind classes applied to each card's outer container, keyed by vibe.
// Note: these are static strings, so Tailwind's JIT can detect them.
const vibeColors: Record<string, string> = {
  beach: "bg-coast/10 border-coast/30",
  city: "bg-purple-500/10 border-purple-500/30",
  nature: "bg-sage/10 border-sage/30",
  food: "bg-sunset/10 border-sunset/30",
  mountain: "bg-sand dark:bg-dark-surface border-sand dark:border-dark-border",
};

const vibeLabels: Record<string, { en: string; ko: string }> = {
  beach: { en: "Beach", ko: "해변" },
  city: { en: "City", ko: "도시" },
  nature: { en: "Nature", ko: "자연" },
  food: { en: "Food & Wine", ko: "음식과 와인" },
  mountain: { en: "Mountain", ko: "산" },
};

const vibeOrder = ["all", "beach", "city", "nature", "food", "mountain"];

const iconKeys = [
  "CityScape",
  "Waves",
  "Sunrise",
  "Wine",
  "Mountain",
  "Dolphin",
  "Koala",
  "SurfBoard",
  "TheaterMasks",
  "Building2",
];

export default function BeyondSydneyPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En>Beyond Sydney</En>
          <Ko>시드니 밖</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
          <En>Beyond Sydney</En>
          <Ko>시드니 밖으로</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>Weekend trips, road trips, and day adventures from Sydney — Australia&apos;s east coast has a lot more to offer.</En>
          <Ko>시드니에서의 주말 여행, 드라이브 여행, 당일 모험 — 호주 동해안에는 훨씬 더 많은 것이 있습니다.</Ko>
        </p>
      </header>

      <FilteredAccordion
        destinations={destinations}
        iconKeys={iconKeys}
        vibeColors={vibeColors}
        vibeLabels={vibeLabels}
        vibeOrder={vibeOrder}
        bottomNote={{
          en: (
            <En>
              Always check road conditions before a long drive. In summer, bushfire season can close roads in NSW — check{" "}
              <span className="text-sunset font-semibold">Live Traffic NSW</span> before you go.
            </En>
          ),
          ko: (
            <Ko>
              장거리 드라이브 전에 반드시 도로 상태를 확인하세요. 여름에는 산불 시즌에 NSW 길이 닫힐 수 있습니다 — 가기 전에{" "}
              <span className="text-sunset font-semibold">Live Traffic NSW</span>를 확인하세요.
            </Ko>
          ),
        }}
      />
    </div>
  );
}

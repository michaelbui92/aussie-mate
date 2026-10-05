// Beyond-sydney page — server component.
// Destinations data, vibe metadata, and icon keys are all serializable, so
// the page can render the static layout (header) on the server and hand the
// interactive list (filter pills + per-destination accordion) to the
// FilteredAccordion client island.

import type { Metadata } from "next";
import { headers } from "next/headers";
import { pageMeta } from "@/lib/page-meta";
import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import { MapPin, Car } from "@/components/Icons";
import FilteredAccordion, { type BeyondSydneyDestination } from "@/components/FilteredAccordion";
import { seoFor, withSeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  // Per request, so the tab title and the search-result headline are in the reader's
  // language. The canonical and hreflang come from the root layout, which reads the same
  // header. `Metadata` is imported by every page that uses withSeo.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return withSeo({

  ...seoFor("/beyond-sydney", locale),
  title: pageMeta("/beyond-sydney", locale).title,
  description: pageMeta("/beyond-sydney", locale).description,
  },
  "/beyond-sydney"
);
}


const destinations: BeyondSydneyDestination[] = [
  {
    id: "newcastle",
    iconKey: "CityScape",
    name: "Newcastle",
    state: "NSW",
    distance: "2 hours north",
    koDistance: "\ubd81\ucabd\uc73c\ub85c 2\uc2dc\uac04",
    jaDistance: "\u5317\u30782\u6642\u9593",
    zhDistance: "\u5411\u5317 2 \u5c0f\u65f6",
    desc: "A vibrant coastal city with great beaches, a growing food scene, and a relaxed university town vibe. Great for a day trip or weekend away.",
    jaDesc: "\u7d20\u6674\u3089\u3057\u3044\u30d3\u30fc\u30c1\u3001\u6210\u9577\u3057\u3064\u3064\u3042\u308b\u30b0\u30eb\u30e1\u30b7\u30fc\u30f3\u3001\u306e\u3093\u3073\u308a\u3057\u305f\u5927\u5b66\u90fd\u5e02\u306e\u96f0\u56f2\u6c17\u3092\u6301\u3064\u6d3b\u6c17\u3042\u308b\u6d77\u8fba\u306e\u8857\u3002\u65e5\u5e30\u308a\u3084\u9031\u672b\u306e\u65c5\u884c\u306b\u6700\u9069\u3067\u3059\u3002",
    zhDesc: "\u4e00\u5ea7\u5145\u6ee1\u6d3b\u529b\u7684\u6d77\u6ee8\u57ce\u5e02\uff0c\u62e5\u6709\u7edd\u4f73\u7684\u6d77\u6ee9\u3001\u65e5\u76ca\u5174\u65fa\u7684\u9910\u996e\u573a\u666f\u548c\u60a0\u95f2\u7684\u5927\u5b66\u57ce\u6c1b\u56f4\u3002\u9002\u5408\u4e00\u65e5\u6e38\u6216\u5468\u672b\u51fa\u884c\u3002",
    koDesc: "아주 좋은 해변, 성장하는 음식 씬, 편안한 대학 도시 분위기를 가진 활기찬 해안 도시입니다. 당일 여행이나 주말 여행에 좋습니다.",
    highlights: ["Nobbys Beach", "Honeysuckle waterfront", "Darby Street food scene", "Newcastle Museum", "Merewether Ocean Baths"],
    koHighlights: ["Nobbys Beach", "Honeysuckle 물가", "Darby Street 음식 거리", "뉴캐슬 박물관", "Merewether Ocean Baths"],
    transport: "Train from Sydney Central ($18 AUD Opal) — 2.5 hours. Drive: 2 hours via M1.",
    jaTransport: "\u30b7\u30c9\u30cb\u30fc\u30fb\u30bb\u30f3\u30c8\u30e9\u30eb\u99c5\u304b\u3089\u96fb\u8eca\uff08$18 AUD Opal\uff09\u2014 2.5\u6642\u9593\u3002\u30c9\u30e9\u30a4\u30d6\uff1aM1\u7d4c\u7531\u30672\u6642\u9593\u3002",
    zhTransport: "\u4ece\u6089\u5c3c\u4e2d\u592e\u8f66\u7ad9\u4e58\u706b\u8f66\uff08$18 AUD\uff0cOpal \u5361\uff09\u2014\u20142.5 \u5c0f\u65f6\u3002\u81ea\u9a7e\uff1a\u7ecf M1\uff0c2 \u5c0f\u65f6\u3002",
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
    koDistance: "\ub0a8\ucabd\uc73c\ub85c 1.5\uc2dc\uac04",
    jaDistance: "\u5357\u30781.5\u6642\u9593",
    zhDistance: "\u5411\u5357 1.5 \u5c0f\u65f6",
    desc: "A seaside city with a gorgeous promenade, excellent seafood, and the iconic Sea Cliff Bridge. Perfect for a scenic drive or bike ride.",
    jaDesc: "\u7f8e\u3057\u3044\u904a\u6b69\u9053\u3001\u7d76\u54c1\u306e\u30b7\u30fc\u30d5\u30fc\u30c9\u3001\u8c61\u5fb4\u7684\u306a\u30b7\u30fc\u30fb\u30af\u30ea\u30d5\u30fb\u30d6\u30ea\u30c3\u30b8\u304c\u3042\u308b\u6d77\u8fba\u306e\u8857\u3002\u666f\u8272\u3092\u697d\u3057\u3080\u30c9\u30e9\u30a4\u30d6\u3084\u30b5\u30a4\u30af\u30ea\u30f3\u30b0\u306b\u6700\u9069\u3067\u3059\u3002",
    zhDesc: "\u4e00\u5ea7\u6d77\u6ee8\u57ce\u5e02\uff0c\u62e5\u6709\u8ff7\u4eba\u7684\u6d77\u6ee8\u6b65\u9053\u3001\u51fa\u8272\u7684\u6d77\u9c9c\u548c\u6807\u5fd7\u6027\u7684\u6d77\u5d16\u5927\u6865\u3002\u975e\u5e38\u9002\u5408\u98ce\u666f\u81ea\u9a7e\u6216\u9a91\u884c\u3002",
    koDesc: "매력적인 해안 산책로, 훌륭한 해산물, 상징적인 Sea Cliff Bridge가 있는 해변 도시입니다. 경치 좋은 드라이브나 자전거 타기에 완벽합니다.",
    highlights: ["Sea Cliff Bridge", "Wollongong Botanic Garden", "Northbeach cafes", "Mount Keira summit", "Illawarra Ranges"],
    koHighlights: ["Sea Cliff Bridge", "울런공 식물원", "Northbeach 카페", "Mount Keira 정상", "Illawarra 산맥"],
    transport: "Train from Sydney Central ($10 AUD Opal) — 1.5 hours. Drive: M1 south, 90 minutes.",
    jaTransport: "\u30b7\u30c9\u30cb\u30fc\u30fb\u30bb\u30f3\u30c8\u30e9\u30eb\u99c5\u304b\u3089\u96fb\u8eca\uff08$10 AUD Opal\uff09\u2014 1.5\u6642\u9593\u3002\u30c9\u30e9\u30a4\u30d6\uff1aM1\u3092\u5357\u307890\u5206\u3002",
    zhTransport: "\u4ece\u6089\u5c3c\u4e2d\u592e\u8f66\u7ad9\u4e58\u706b\u8f66\uff08$10 AUD\uff0cOpal \u5361\uff09\u2014\u20141.5 \u5c0f\u65f6\u3002\u81ea\u9a7e\uff1a\u7ecf M1 \u5411\u5357\uff0c90 \u5206\u949f\u3002",
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
    koDistance: "\ubd81\ucabd\uc73c\ub85c 3\uc2dc\uac04",
    jaDistance: "\u5317\u30783\u6642\u9593",
    zhDistance: "\u5411\u5317 3 \u5c0f\u65f6",
    desc: "Famous for its lighthouse, laid-back surf culture, and alternative lifestyle. One of Australia's most iconic beach towns — worth the drive.",
    jaDesc: "\u706f\u53f0\u3001\u306e\u3093\u3073\u308a\u3057\u305f\u30b5\u30fc\u30d5\u6587\u5316\u3001\u30aa\u30eb\u30bf\u30ca\u30c6\u30a3\u30d6\u306a\u66ae\u3089\u3057\u3067\u6709\u540d\u3002\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u3067\u6700\u3082\u8c61\u5fb4\u7684\u306a\u30d3\u30fc\u30c1\u30bf\u30a6\u30f3\u306e\u3072\u3068\u3064 \u2014 \u30c9\u30e9\u30a4\u30d6\u3059\u308b\u4fa1\u5024\u304c\u3042\u308a\u307e\u3059\u3002",
    zhDesc: "\u4ee5\u706f\u5854\u3001\u60a0\u95f2\u7684\u51b2\u6d6a\u6587\u5316\u548c\u53e6\u7c7b\u751f\u6d3b\u65b9\u5f0f\u95fb\u540d\u3002\u6fb3\u5927\u5229\u4e9a\u6700\u5177\u6807\u5fd7\u6027\u7684\u6d77\u6ee8\u5c0f\u9547\u4e4b\u4e00\u2014\u2014\u503c\u5f97\u9a71\u8f66\u524d\u5f80\u3002",
    koDesc: "등대, 편안한 서핑 문화, 대안적인 라이프스타일로 유명합니다. 호주에서 가장 상징적인 해변 도시 중 하나 — 드라이브할 가치가 있습니다.",
    highlights: ["Cape Byron Lighthouse", "Main Beach", "Belongil Cafes", "Farmers markets (Thursday)", "Nightlife"],
    koHighlights: ["Cape Byron 등대", "Main Beach", "Belongil 카페", "팜마켓(목요일)", "나이트라이프"],
    transport: "Drive: 3 hours via M1 and Pacific Highway. Greyhound buses run daily from Sydney. Fly to Ballina airport (1 hour).",
    jaTransport: "\u30c9\u30e9\u30a4\u30d6\uff1aM1\u3068\u30d1\u30b7\u30d5\u30a3\u30c3\u30af\u30fb\u30cf\u30a4\u30a6\u30a7\u30a4\u7d4c\u7531\u30673\u6642\u9593\u3002Greyhound\u306e\u30d0\u30b9\u304c\u30b7\u30c9\u30cb\u30fc\u304b\u3089\u6bce\u65e5\u904b\u884c\u3002\u30d0\u30ea\u30ca\u7a7a\u6e2f\u3078\u7a7a\u8def\uff081\u6642\u9593\uff09\u3002",
    zhTransport: "\u81ea\u9a7e\uff1a\u7ecf M1 \u548c\u592a\u5e73\u6d0b\u516c\u8def\uff0c3 \u5c0f\u65f6\u3002Greyhound \u5df4\u58eb\u6bcf\u5929\u4ece\u6089\u5c3c\u51fa\u53d1\u3002\u98de\u5f80 Ballina \u673a\u573a\uff081 \u5c0f\u65f6\uff09\u3002",
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
    koDistance: "\ubd81\ucabd\uc73c\ub85c 2.5\uc2dc\uac04",
    jaDistance: "\u5317\u30782.5\u6642\u9593",
    zhDistance: "\u5411\u5317 2.5 \u5c0f\u65f6",
    desc: "NSW's premier wine region — rolling vineyards, boutique wineries, excellent restaurants, and golf courses. Relaxed and scenic.",
    jaDesc: "NSW\u968f\u4e00\u306e\u30ef\u30a4\u30f3\u7523\u5730 \u2014 \u306a\u3060\u3089\u304b\u306a\u3076\u3069\u3046\u7551\u3001\u30d6\u30c6\u30a3\u30c3\u30af\u30fb\u30ef\u30a4\u30ca\u30ea\u30fc\u3001\u512a\u308c\u305f\u30ec\u30b9\u30c8\u30e9\u30f3\u3001\u30b4\u30eb\u30d5\u30b3\u30fc\u30b9\u3002\u306e\u3093\u3073\u308a\u3068\u666f\u8272\u3092\u697d\u3057\u3081\u307e\u3059\u3002",
    zhDesc: "\u65b0\u5357\u5a01\u5c14\u58eb\u5dde\u9996\u5c48\u4e00\u6307\u7684\u8461\u8404\u9152\u4ea7\u533a\u2014\u2014\u8fde\u7ef5\u7684\u8461\u8404\u56ed\u3001\u7cbe\u54c1\u9152\u5e84\u3001\u51fa\u8272\u7684\u9910\u5385\u548c\u9ad8\u5c14\u592b\u7403\u573a\u3002\u60a0\u95f2\u800c\u98ce\u666f\u4f18\u7f8e\u3002",
    koDesc: "NSW의 대표적인 와인 지역 — 구릉 지대의 포도원, 부티크 와이너리, 훌륭한 레스토랑, 골프 코스. 편안하고 경치가 좋습니다.",
    highlights: ["Wandering Wolf Wines", "Brokenwood Wines", "Hunter Valley Gardens", "Hot air balloons", "Local cheese and chocolate"],
    koHighlights: ["Wandering Wolf Wines", "Brokenwood Wines", "Hunter Valley Gardens", "열기구", "로컬 치즈와 초콜릿"],
    transport: "Drive: 2.5 hours via M1. Day tours depart Sydney daily ($100 AUD-180 includes transport and tastings).",
    jaTransport: "\u30c9\u30e9\u30a4\u30d6\uff1aM1\u7d4c\u7531\u30672.5\u6642\u9593\u3002\u65e5\u5e30\u308a\u30c4\u30a2\u30fc\u304c\u6bce\u65e5\u30b7\u30c9\u30cb\u30fc\u304b\u3089\u51fa\u767a\uff08$100\u301c180 AUD\u3001\u4ea4\u901a\u3068\u8a66\u98f2\u8fbc\u307f\uff09\u3002",
    zhTransport: "\u81ea\u9a7e\uff1a\u7ecf M1\uff0c2.5 \u5c0f\u65f6\u3002\u4e00\u65e5\u6e38\u6bcf\u5929\u4ece\u6089\u5c3c\u51fa\u53d1\uff08$100\u2013180 AUD\uff0c\u542b\u4ea4\u901a\u548c\u54c1\u9152\uff09\u3002",
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
    koDistance: "\uc11c\ucabd\uc73c\ub85c 1.5\uc2dc\uac04",
    jaDistance: "\u897f\u30781.5\u6642\u9593",
    zhDistance: "\u5411\u897f 1.5 \u5c0f\u65f6",
    desc: "A UNESCO World Heritage site — dramatic cliffs, eucalyptus forests, and cute mountain villages. The Classic Australian bush experience.",
    jaDesc: "\u30e6\u30cd\u30b9\u30b3\u4e16\u754c\u907a\u7523 \u2014 \u5287\u7684\u306a\u5d16\u3001\u30e6\u30fc\u30ab\u30ea\u306e\u68ee\u3001\u304b\u308f\u3044\u3089\u3057\u3044\u5c71\u3042\u3044\u306e\u6751\u3005\u3002\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u3089\u3057\u3044\u30d6\u30c3\u30b7\u30e5\u4f53\u9a13\u306e\u5b9a\u756a\u3067\u3059\u3002",
    zhDesc: "\u8054\u5408\u56fd\u6559\u79d1\u6587\u7ec4\u7ec7\u4e16\u754c\u9057\u4ea7\u5730\u2014\u2014\u58ee\u89c2\u7684\u60ac\u5d16\u3001\u6849\u6811\u6797\u548c\u53ef\u7231\u7684\u5c0f\u5c71\u6751\u3002\u7ecf\u5178\u7684\u6fb3\u5927\u5229\u4e9a\u4e1b\u6797\u4f53\u9a8c\u3002",
    koDesc: "유네스코 세계유산 — 극적인 절벽, 유칼립투스 숲, 아담한 산악 마을. 고전적인 호주 부시 경험.",
    highlights: ["Three Sisters at Echo Point", "Leura village", "Scenic World (cable car)", "Katoomba cafes", "Wentworth Falls"],
    koHighlights: ["Three Sisters(Echo Point)", "Leura 마을", "Scenic World(케이블카)", "Katoomba 카페", "Wentworth Falls"],
    transport: "Train from Central to Katoomba ($18 AUD Opal) — 2 hours. Drive: 1.5 hours via M4.",
    jaTransport: "\u30bb\u30f3\u30c8\u30e9\u30eb\u99c5\u304b\u3089\u30ab\u30c8\u30a5\u30fc\u30f3\u30d0\u307e\u3067\u96fb\u8eca\uff08$18 AUD Opal\uff09\u2014 2\u6642\u9593\u3002\u30c9\u30e9\u30a4\u30d6\uff1aM4\u7d4c\u7531\u30671.5\u6642\u9593\u3002",
    zhTransport: "\u4ece\u4e2d\u592e\u8f66\u7ad9\u4e58\u706b\u8f66\u5230 Katoomba\uff08$18 AUD\uff0cOpal \u5361\uff09\u2014\u20142 \u5c0f\u65f6\u3002\u81ea\u9a7e\uff1a\u7ecf M4\uff0c1.5 \u5c0f\u65f6\u3002",
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
    koDistance: "\ub0a8\ucabd\uc73c\ub85c 3\uc2dc\uac04",
    jaDistance: "\u5357\u30783\u6642\u9593",
    zhDistance: "\u5411\u5357 3 \u5c0f\u65f6",
    desc: "Crystalline white sand, turquoise water, dolphins, and whale watching. Consistently rated as some of Australia's most beautiful beaches.",
    jaDesc: "\u900f\u304d\u901a\u308b\u767d\u3044\u7802\u3001\u30bf\u30fc\u30b3\u30a4\u30ba\u30d6\u30eb\u30fc\u306e\u6d77\u3001\u30a4\u30eb\u30ab\u3001\u30db\u30a8\u30fc\u30eb\u30a6\u30a9\u30c3\u30c1\u30f3\u30b0\u3002\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u3067\u6700\u3082\u7f8e\u3057\u3044\u30d3\u30fc\u30c1\u3068\u3057\u3066\u5e38\u306b\u9ad8\u304f\u8a55\u4fa1\u3055\u308c\u3066\u3044\u307e\u3059\u3002",
    zhDesc: "\u6676\u83b9\u7684\u767d\u6c99\u3001\u9752\u7eff\u7684\u6d77\u6c34\u3001\u6d77\u8c5a\u548c\u89c2\u9cb8\u3002\u4e00\u76f4\u88ab\u8bc4\u4e3a\u6fb3\u5927\u5229\u4e9a\u6700\u7f8e\u7684\u6d77\u6ee9\u4e4b\u4e00\u3002",
    koDesc: "투명한 백사장, 청록색 바다, 돌고래, 고래 관찰. 호주에서 가장 아름다운 해변 중 하나로 지속적으로 평가됩니다.",
    highlights: ["Hyams Beach (whitest sand in the world)", "Dolphin watches", "Whale watching (May-Nov)", "Booderee National Park", "White Sands walk"],
    koHighlights: ["Hyams Beach(세계에서 가장하얀 모래)", "돌고래 관찰", "고래 관찰(5-11월)", "Booderee National Park", "White Sands 산책"],
    transport: "Drive: 3 hours via M1 and Princes Highway. No train — you'll need a car. Campsites and Airbnb available.",
    jaTransport: "\u30c9\u30e9\u30a4\u30d6\uff1aM1\u3068\u30d7\u30ea\u30f3\u30b7\u30ba\u30fb\u30cf\u30a4\u30a6\u30a7\u30a4\u7d4c\u7531\u30673\u6642\u9593\u3002\u96fb\u8eca\u306f\u306a\u3057 \u2014 \u8eca\u304c\u5fc5\u8981\u3067\u3059\u3002\u30ad\u30e3\u30f3\u30d7\u5834\u3068Airbnb\u304c\u3042\u308a\u307e\u3059\u3002",
    zhTransport: "\u81ea\u9a7e\uff1a\u7ecf M1 \u548c\u738b\u5b50\u516c\u8def\uff0c3 \u5c0f\u65f6\u3002\u6ca1\u6709\u706b\u8f66\u2014\u2014\u4f60\u9700\u8981\u6709\u8f66\u3002\u6709\u8425\u5730\u4f4f\u5bbf\u548c Airbnb\u3002",
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
    koDistance: "\ubd81\ucabd\uc73c\ub85c 2.5\uc2dc\uac04",
    jaDistance: "\u5317\u30782.5\u6642\u9593",
    zhDistance: "\u5411\u5317 2.5 \u5c0f\u65f6",
    desc: "Sandy dunes, koala sanctuaries, whale watching, and dolphin cruises. Famous for its large sand dunes at Stockton Beach.",
    jaDesc: "\u7802\u4e18\u3001\u30b3\u30a2\u30e9\u4fdd\u8b77\u533a\u3001\u30db\u30a8\u30fc\u30eb\u30a6\u30a9\u30c3\u30c1\u30f3\u30b0\u3001\u30a4\u30eb\u30ab\u30af\u30eb\u30fc\u30ba\u3002\u30b9\u30c8\u30c3\u30af\u30c8\u30f3\u30fb\u30d3\u30fc\u30c1\u306e\u5927\u304d\u306a\u7802\u4e18\u3067\u6709\u540d\u3067\u3059\u3002",
    zhDesc: "\u6c99\u4e18\u3001\u8003\u62c9\u4fdd\u62a4\u533a\u3001\u89c2\u9cb8\u548c\u89c2\u6d77\u8c5a\u6e38\u8239\u3002\u4ee5 Stockton Beach \u7684\u5927\u7247\u6c99\u4e18\u95fb\u540d\u3002",
    koDesc: "모래 사구, 코알라 보호구역, 고래 관찰, 돌고래 크루즈. Stockton Beach의 큰 사구로 유명합니다.",
    highlights: ["Dolphin watching cruise", "Sandboarding at Stockton Dunes", "Koala Sanctuary", "Tomaree Summit walk", "Annekle Beach"],
    koHighlights: ["돌고래 관찰 크루즈", "Stockton Dunes의 샌드보딩", "코알라 보호구역", "Tomaree Summit 산책", "Anna Bay 해변"],
    transport: "Drive: 2.5 hours via M1 and Pacific Highway. Day tours from Sydney available.",
    jaTransport: "\u30c9\u30e9\u30a4\u30d6\uff1aM1\u3068\u30d1\u30b7\u30d5\u30a3\u30c3\u30af\u30fb\u30cf\u30a4\u30a6\u30a7\u30a4\u7d4c\u7531\u30672.5\u6642\u9593\u3002\u30b7\u30c9\u30cb\u30fc\u767a\u306e\u65e5\u5e30\u308a\u30c4\u30a2\u30fc\u304c\u3042\u308a\u307e\u3059\u3002",
    zhTransport: "\u81ea\u9a7e\uff1a\u7ecf M1 \u548c\u592a\u5e73\u6d0b\u516c\u8def\uff0c2.5 \u5c0f\u65f6\u3002\u6709\u4ece\u6089\u5c3c\u51fa\u53d1\u7684\u4e00\u65e5\u6e38\u3002",
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
    koDistance: "\ube0c\ub9ac\uc988\ubc88\uc5d0\uc11c \ub0a8\ucabd\uc73c\ub85c 4\uc2dc\uac04(\uc2dc\ub4dc\ub2c8\uc5d0\uc11c \ube44\ud589 1.5\uc2dc\uac04 \ub610\ub294 \uc6b4\uc804 9\uc2dc\uac04)",
    jaDistance: "\u30d6\u30ea\u30b9\u30d9\u30f3\u304b\u3089\u5357\u30784\u6642\u9593\uff08\u30b7\u30c9\u30cb\u30fc\u304b\u3089\u7a7a\u8def1.5\u6642\u9593\u3001\u307e\u305f\u306f\u8eca\u30679\u6642\u9593\uff09",
    zhDistance: "\u5e03\u91cc\u65af\u73ed\u4ee5\u5357 4 \u5c0f\u65f6\uff08\u4ece\u6089\u5c3c\u98de 1.5 \u5c0f\u65f6\u6216\u81ea\u9a7e 9 \u5c0f\u65f6\uff09",
    desc: "Theme parks, surf beaches, rooftop bars, and a buzzing backpacker scene. Not for everyone but if you want action, it's there.",
    jaDesc: "\u30c6\u30fc\u30de\u30d1\u30fc\u30af\u3001\u30b5\u30fc\u30d5\u30d3\u30fc\u30c1\u3001\u30eb\u30fc\u30d5\u30c8\u30c3\u30d7\u30d0\u30fc\u3001\u6d3b\u6c17\u3042\u308b\u30d0\u30c3\u30af\u30d1\u30c3\u30ab\u30fc\u30b7\u30fc\u30f3\u3002\u8ab0\u306b\u3067\u3082\u5408\u3046\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u523a\u6fc0\u304c\u6b32\u3057\u3044\u306a\u3089\u305d\u3053\u306b\u3042\u308a\u307e\u3059\u3002",
    zhDesc: "\u4e3b\u9898\u516c\u56ed\u3001\u51b2\u6d6a\u6d77\u6ee9\u3001\u5c4b\u9876\u9152\u5427\uff0c\u4ee5\u53ca\u70ed\u95f9\u7684\u80cc\u5305\u5ba2\u6c1b\u56f4\u3002\u4e0d\u662f\u4eba\u4eba\u90fd\u7231\uff0c\u4f46\u5982\u679c\u4f60\u60f3\u8981\u523a\u6fc0\uff0c\u8fd9\u91cc\u90fd\u6709\u3002",
    koDesc: "테마파크, 서핑 해변, 루프탑 바, 활기찬 백팩커 씬. 모든 사람에게 맞는 건 아니지만 액션을 원한다면 거기 있습니다.",
    highlights: ["Surfers Paradise", "Broadwater", "Theme parks (Dreamworld, Movie World)", "Coolangatta beach", "Night markets"],
    koHighlights: ["Surfers Paradise", "Broadwater", "테마파크(Dreamworld, Movie World)", "Coolangatta 해변", "나이트 마켓"],
    transport: "Fly from Sydney (1.5 hours, ~$120 AUD one-way). Drive: 9 hours via Pacific Highway. Coach: Greyhound from Sydney ($80 AUD-120).",
    jaTransport: "\u30b7\u30c9\u30cb\u30fc\u304b\u3089\u7a7a\u8def\uff081.5\u6642\u9593\u3001\u7247\u9053\u7d04$120 AUD\uff09\u3002\u30c9\u30e9\u30a4\u30d6\uff1a\u30d1\u30b7\u30d5\u30a3\u30c3\u30af\u30fb\u30cf\u30a4\u30a6\u30a7\u30a4\u7d4c\u7531\u30679\u6642\u9593\u3002\u9577\u8ddd\u96e2\u30d0\u30b9\uff1a\u30b7\u30c9\u30cb\u30fc\u304b\u3089Greyhound\uff08$80\u301c120 AUD\uff09\u3002",
    zhTransport: "\u4ece\u6089\u5c3c\u4e58\u98de\u673a\uff081.5 \u5c0f\u65f6\uff0c\u5355\u7a0b\u7ea6 $120 AUD\uff09\u3002\u81ea\u9a7e\uff1a\u7ecf\u592a\u5e73\u6d0b\u516c\u8def\uff0c9 \u5c0f\u65f6\u3002\u957f\u9014\u5df4\u58eb\uff1a\u4ece\u6089\u5c3c\u4e58 Greyhound\uff08$80\u2013120 AUD\uff09\u3002",
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
    koDistance: "\ube44\ud589 1\uc2dc\uac04(\ub610\ub294 \uc6b4\uc804 9\uc2dc\uac04)",
    jaDistance: "\u7a7a\u8def1\u6642\u9593\uff08\u307e\u305f\u306f\u8eca\u30679\u6642\u9593\uff09",
    zhDistance: "\u98de\u884c 1 \u5c0f\u65f6\uff08\u6216\u81ea\u9a7e 9 \u5c0f\u65f6\uff09",
    desc: "Australia's cultural capital — street art, coffee, live music, hidden laneway bars, and the best food scene in the country. A very different energy from Sydney.",
    jaDesc: "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306e\u6587\u5316\u9996\u90fd \u2014 \u30b9\u30c8\u30ea\u30fc\u30c8\u30a2\u30fc\u30c8\u3001\u30b3\u30fc\u30d2\u30fc\u3001\u30e9\u30a4\u30d6\u97f3\u697d\u3001\u8def\u5730\u88cf\u306e\u96a0\u308c\u30d0\u30fc\u3001\u56fd\u5185\u6700\u9ad8\u306e\u30b0\u30eb\u30e1\u30b7\u30fc\u30f3\u3002\u30b7\u30c9\u30cb\u30fc\u3068\u306f\u307e\u3063\u305f\u304f\u9055\u3046\u30a8\u30cd\u30eb\u30ae\u30fc\u3002",
    zhDesc: "\u6fb3\u5927\u5229\u4e9a\u7684\u6587\u5316\u4e4b\u90fd\u2014\u2014\u8857\u5934\u827a\u672f\u3001\u5496\u5561\u3001\u73b0\u573a\u97f3\u4e50\u3001\u9690\u79d8\u7684\u5c0f\u5df7\u9152\u5427\uff0c\u4ee5\u53ca\u5168\u56fd\u6700\u597d\u7684\u9910\u996e\u573a\u666f\u3002\u4e0e\u6089\u5c3c\u7684\u80fd\u91cf\u622a\u7136\u4e0d\u540c\u3002",
    koDesc: "호주의 문화 수도 — 거리 예술, 커피, 라이브 음악, 숨겨진 뒷거리바, 이 나라 최고의 음식 씬. 시드니와 매우 다른 에너지.",
    highlights: ["Federation Square", "Hosier Lane street art", "Queen Victoria Market", "St Kilda Beach", "Yarra Valley day trip"],
    koHighlights: ["Federation Square", "Hosier Lane 거리 예술", "Queen Victoria Market", "St Kilda Beach", "Yarra Valley 당일 여행"],
    transport: "Fly from Sydney (1.5 hours, ~$80 AUD-150 one-way). Drive: 9 hours via Hume Highway. Coach: $60 AUD-90.",
    jaTransport: "\u30b7\u30c9\u30cb\u30fc\u304b\u3089\u7a7a\u8def\uff081.5\u6642\u9593\u3001\u7247\u9053\u7d04$80\u301c150 AUD\uff09\u3002\u30c9\u30e9\u30a4\u30d6\uff1a\u30d2\u30e5\u30fc\u30e0\u30fb\u30cf\u30a4\u30a6\u30a7\u30a4\u7d4c\u7531\u30679\u6642\u9593\u3002\u9577\u8ddd\u96e2\u30d0\u30b9\uff1a$60\u301c90 AUD\u3002",
    zhTransport: "\u4ece\u6089\u5c3c\u4e58\u98de\u673a\uff081.5 \u5c0f\u65f6\uff0c\u5355\u7a0b\u7ea6 $80\u2013150 AUD\uff09\u3002\u81ea\u9a7e\uff1a\u7ecf\u4f11\u59c6\u516c\u8def\uff0c9 \u5c0f\u65f6\u3002\u957f\u9014\u5df4\u58eb\uff1a$60\u201390 AUD\u3002",
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
    koDistance: "\ub0a8\ucabd\uc73c\ub85c 3\uc2dc\uac04(330km)",
    jaDistance: "\u5357\u30783\u6642\u9593\uff08330km\uff09",
    zhDistance: "\u5411\u5357 3 \u5c0f\u65f6\uff08330 \u516c\u91cc\uff09",
    desc: "Australia's capital — planned, spacious, and often underrated. Great museums (most are free), beautiful architecture, and a more laid-back vibe than expected.",
    jaDesc: "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306e\u9996\u90fd \u2014 \u8a08\u753b\u7684\u3067\u5e83\u3005\u3068\u3057\u3066\u304a\u308a\u3001\u3057\u3070\u3057\u3070\u904e\u5c0f\u8a55\u4fa1\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u7d20\u6674\u3089\u3057\u3044\u535a\u7269\u9928\uff08\u307b\u3068\u3093\u3069\u304c\u7121\u6599\uff09\u3001\u7f8e\u3057\u3044\u5efa\u7bc9\u3001\u60f3\u50cf\u4ee5\u4e0a\u306b\u3086\u3063\u305f\u308a\u3057\u305f\u96f0\u56f2\u6c17\u3002",
    zhDesc: "\u6fb3\u5927\u5229\u4e9a\u9996\u90fd\u2014\u2014\u89c4\u5212\u6574\u9f50\u3001\u7a7a\u95f4\u5f00\u9614\uff0c\u5e38\u5e38\u88ab\u4f4e\u4f30\u3002\u51fa\u8272\u7684\u535a\u7269\u9986\uff08\u5927\u591a\u514d\u8d39\uff09\u3001\u4f18\u7f8e\u7684\u5efa\u7b51\uff0c\u4ee5\u53ca\u6bd4\u60f3\u8c61\u4e2d\u66f4\u60a0\u95f2\u7684\u6c1b\u56f4\u3002",
    koDesc: "호주의 수도 — 계획적이고 넓으며 종종 과소평가됩니다. 훌륭한 museum(대부분 무료), 아름다운 건축, 기대보다 더 편안한 분위기.",
    highlights: ["Parliament House", "National Gallery of Australia", "Australian War Memorial", "Lake Burley Griffin", "Questacon"],
    koHighlights: ["국회 의사당", "호주 국립 미술관", "호주 전쟁 기념관", "Lake Burley Griffin", "Questacon"],
    transport: "Drive: 3 hours via M31 Hume Highway. Coach: Greyhound or Murrays (~$50 AUD-70). Fly: 1 hour ($80 AUD-150).",
    jaTransport: "\u30c9\u30e9\u30a4\u30d6\uff1aM31\u30d2\u30e5\u30fc\u30e0\u30fb\u30cf\u30a4\u30a6\u30a7\u30a4\u7d4c\u7531\u30673\u6642\u9593\u3002\u9577\u8ddd\u96e2\u30d0\u30b9\uff1aGreyhound\u307e\u305f\u306fMurrays\uff08\u7d04$50\u301c70 AUD\uff09\u3002\u7a7a\u8def\uff1a1\u6642\u9593\uff08$80\u301c150 AUD\uff09\u3002",
    zhTransport: "\u81ea\u9a7e\uff1a\u7ecf M31 \u4f11\u59c6\u516c\u8def\uff0c3 \u5c0f\u65f6\u3002\u957f\u9014\u5df4\u58eb\uff1aGreyhound \u6216 Murrays\uff08\u7ea6 $50\u201370 AUD\uff09\u3002\u4e58\u98de\u673a\uff1a1 \u5c0f\u65f6\uff08$80\u2013150 AUD\uff09\u3002",
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

const vibeLabels: Record<string, { en: string; ko: string; ja?: string; zh?: string }> = {
  beach: { en: "Beach", ja: "ビーチ", zh: "海滩", ko: "해변" },
  city: { en: "City", ja: "都市", zh: "城市", ko: "도시" },
  nature: { en: "Nature", ja: "自然", zh: "自然", ko: "자연" },
  food: { en: "Food & Wine", ja: "食事とワイン", zh: "美食与葡萄酒", ko: "음식과 와인" },
  mountain: { en: "Mountain", ja: "山", zh: "山", ko: "산" },
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
          <En translated>Beyond Sydney</En>
          <Ja>シドニーの外へ</Ja>
          <Zh>悉尼之外</Zh>
          <Ko>시드니 밖</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
          <En translated>Beyond Sydney</En>
          <Ja>シドニーの外へ</Ja>
          <Zh>悉尼之外</Zh>
          <Ko>시드니 밖으로</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En translated>Weekend trips, road trips, and day adventures from Sydney — Australia&apos;s east coast has a lot more to offer.</En>
          <Ja>シドニーからの週末旅行、ロードトリップ、日帰りの冒険 — オーストラリアの東海岸にはもっと多くの魅力があります。</Ja>
          <Zh>从悉尼出发的周末游、自驾游和一日探险 — 澳大利亚东海岸还有更多精彩。</Zh>
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
            <><En translated>
              Always check road conditions before a long drive. In summer, bushfire season can close roads in NSW — check{" "}
              <span className="text-sunset font-semibold">Live Traffic NSW</span> before you go.
            </En>
            <Ja>長距離ドライブの前には必ず道路状況を確認してください。夏は、NSW では山火事シーズンに道路が通行止めになることがあります — 出発前に{" "}
              <span className="text-sunset font-semibold">Live Traffic NSW</span>を確認してください。</Ja>
            <Zh>长途驾驶前务必检查道路状况。夏季，NSW 的山火季可能导致道路封闭 — 出发前请先查看{" "}
              <span className="text-sunset font-semibold">Live Traffic NSW</span>。</Zh>
            </>
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

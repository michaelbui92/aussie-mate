// Server component — bilingual Australian road trips guide.
// Editorial style with route cards and trip-planning tips.

import type { Metadata } from "next";
import { En, Ko } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { seoFor, withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo(
  {

  ...seoFor("/experiences/road-trips"),
  title: "Australian Road Trips — AussieGuides",
  description:
    "Great Ocean Road, Sydney to Melbourne, Red Centre, Pacific Coast — Australia's iconic drives with route notes, distances, best seasons, and Korean-friendly tips.",
  },
  "/experiences/road-trips"
);

type RoadTripSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; en: string; ko: string }>;
};

const sections: RoadTripSection[] = [
  {
    id: "south-coast",
    iconKey: "Compass",
    accent: "coast",
    title: "South to Wollongong & Kiama",
    koTitle: "남쪽: 울런공, 카이아마",
    desc: "90 minutes south of Sydney — beaches, blowholes, and seafood",
    koDesc: "시드니에서 남쪽으로 90분 — 해변, 분수공, 해산물",
    img: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: [
      { label: "Wollongong", en: "A coastal city with great beaches, a lively arts scene, and the Sea Cliff Bridge drive. Park near North Beach and walk the coastal path to the lighthouse. The Blue Mile is a popular walking and cycling route. Lots of cafes and restaurants along the waterfront. About 80km from Sydney — 1 hour drive. Train from Central Station to Wollongong takes about 1.5 hours. Must do: hang gliding at Stanwell Park (even just watching), Nan Tien Temple (largest Buddhist temple in the Southern Hemisphere), and a swim at North Wollongong Beach.", ko: "좋은 해변, 활기찬 예술 현장, Sea Cliff Bridge 드라이브가 있는 해안 도시입니다. North Beach 근처에 주차하고 해안 산책로를 따라 등대로 걸어가세요. 블루 마일은 인기 있는 걷기와 자전거 코스입니다. 해변가에 많은 카페와 레스토랑이 있습니다. 시드니에서 약 80km — 차로 1시간. 시드니 Central 역에서 울런공까지 기차로 약 1.5시간. 꼭 할 일: Stanwell Park에서 행글라이딩(구경만 해도 좋음), Nan Tien Temple(남반구 최대 불교 사원), North Wollongong Beach에서 수영." },
      { label: "Kiama", en: "Famous for its blowholes — natural rock formations that shoot seawater into the air when waves hit. Two blowholes: the Big Blowhole (in town, easy access) and the Little Blowhole (quieter, 2km south). Best time is rough seas at mid-to-high tide. Also has beautiful beaches, rock pools, and the Kiama Coastal Walk. The Saturday market is great for local produce. About 120km from Sydney (2 hours). You can also take the train from Sydney to Kiama (about 2 hours). Perfect day trip or weekend getaway.", ko: "분수공으로 유명 — 파도가 칠 때 바닷물을 공중으로 뿜어내는 자연 암석 형성물입니다. 두 개의 분수공: 큰 분수공(시내, 접근 쉬움)과 작은 분수공(조용함, 2km 남쪽). 최적 시간은 거친 바다에 중간~만조 때입니다. 아름다운 해변, 바위 웅덩이, Kiama Coastal Walk도 있습니다. 토요일 시장은 지역 농산물을 사기 좋습니다. 시드니에서 약 120km(2시간). 시드니에서 Kiama까지 기차로도 갈 수 있습니다(약 2시간). 완벽한 당일 여행 또는 주말 휴가." },
      { label: "Grand Pacific Drive", en: "Sydney to Wollongong via the Royal National Park and Sea Cliff Bridge. The Sea Cliff Bridge is a 665m cantilever bridge hugging the cliff face with ocean on one side — incredible views. Stop at Bald Hill (Stanwell Tops) for the iconic lookout over the coast. Continue through Thirroul and Austinmer — both great beach stops. Continue to Kiama for blowholes and lunch. Allow a full day. Tolls: none on this route if you go via the Royal National Park entrance.", ko: "로열 국립공원과 Sea Cliff Bridge를 경유하는 시드니-울런공. Sea Cliff Bridge는 절벽을 감싸 안는 665m 캔틸레버 다리로 한쪽은 바다 — 절경입니다. Bald Hill(Stanwell Tops)에 정차하여 해안 전망을 감상하세요. Thirroul과 Austinmer를 지나 — 둘 다 좋은 비치 스탑. Kiama까지 계속 가서 분수공과 점심을 즐기세요. 하루 종일 잡으세요. 통행료: Royal National Park 입구로 가면 통행료 없음." },
    ],
  },
  {
    id: "north-coast",
    iconKey: "MapPin",
    accent: "sage",
    title: "North to Newcastle & Port Stephens",
    koTitle: "북쪽: 뉴캐슬, 포트스테판",
    desc: "2–3 hours north — surf culture, sand dunes, and coastal villages",
    koDesc: "북쪽으로 2–3시간 — 서핑 문화, 모래 언덕, 해안 마을",
    img: "https://images.pexels.com/photos/1657324/pexels-photo-1657324.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: [
      { label: "Newcastle", en: "Second-largest city in NSW and a serious surf town. Nobbys Beach and Merewether Beach (home to the annual Surfest competition) are the main beaches. The Newcastle Memorial Walk (ANZAC Walk) is a stunning cliff-top walkway with ocean views. Darby Street and Beaumont Street are the cafe and restaurant strips. King Edward Park and the Bogey Hole (a convict-built ocean pool cut into rock) are must-sees. The train from Sydney Central to Newcastle Interchange takes about 2.5 hours. About 160km from Sydney (2 hours drive).", ko: "NSW 제2의 도시이자 진지한 서핑 타운. Nobbys Beach와 Merewether Beach(연례 Surfest 대회 개최지)가 주요 해변입니다. Newcastle Memorial Walk(ANZAC Walk)은 바다 전망의 멋진 절벽 위 산책로입니다. Darby Street와 Beaumont Street가 카페와 레스토랑 거리입니다. King Edward Park와 Bogey Hole(죄수들이 바위에 판 ocean pool)은 필수 관광지입니다. Sydney Central에서 Newcastle Interchange까지 기차로 약 2.5시간. 시드니에서 약 160km(차로 2시간)." },
      { label: "Port Stephens", en: "Known for its massive sand dunes at Stockton Beach (the Southern Hemisphere's largest mobile sand dunes) — you can go sandboarding or take a 4WD tour. Also famous for dolphin watching — pods of bottlenose dolphins live in the bay year-round (boat tours from Nelson Bay). Tomaree Head Summit Walk gives a 360-degree view of the coast (short but steep — 1 hour return). For whale watching go between May and November. Shoal Bay and Fingal Bay are beautiful for swimming. About 200km from Sydney (2.5–3 hours).", ko: "Stockton Beach의 거대한 모래 언덕(남반구 최대 이동 사구)으로 유명 — 샌드보딩이나 4WD 투어를 할 수 있습니다. 돌고래 관찰로도 유명 — 큰돌고래 무리가 연중 만에 서식합니다(Nelson Bay에서 출발하는 보트 투어). Tomaree Head Summit Walk는 해안의 360도 전망을 제공합니다(짧지만 가파름 — 왕복 1시간). 고래 관찰은 5월에서 11월 사이에 가세요. Shoal Bay와 Fingal Bay는 수영에 아름답습니다. 시드니에서 약 200km(2.5–3시간)." },
      { label: "Central Coast", en: "Halfway between Sydney and Newcastle, the Central Coast is family-friendly and easy. Terrigal and Avoca Beach are popular for swimming and surfing. The Skillion at Terrigal has a great lookout. Australian Reptile Park is a classic roadside attraction — crocs, snakes, and kangaroos. Bouddi National Park has great coastal walks with ocean views. You can take the train from Sydney Central to Gosford (about 1.25 hours), then connect to buses. Good for a day trip or a relaxed weekend.", ko: "시드니와 뉴캐슬 중간, 센트럴 코스트는 가족 친화적이고 편리합니다. Terrigal과 Avoca Beach는 수영과 서핑에 인기. Terrigal의 The Skillion은 좋은 전망대. Australian Reptile Park은 고전적인 로드사이드 어트랙션 — 악어, 뱀, 캥거루. Bouddi National Park는 바다 전망의 좋은 해안 산책로가 있습니다. Sydney Central에서 Gosford까지 기차로 약 1.25시간, 거기서 버스로 연결. 당일 여행이나 편안한 주말에 좋습니다." },
    ],
  },
  {
    id: "inland",
    iconKey: "Sun",
    accent: "amber",
    title: "Out West & Inland",
    koTitle: "서쪽과 내륙",
    desc: "Blue Mountains, Southern Highlands, and the Hunter Valley",
    koDesc: "블루마운틴, 서던 하일랜즈, 헌터 밸리",
    img: "https://images.pexels.com/photos/34907670/pexels-photo-34907670.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: [
      { label: "Blue Mountains", en: "A World Heritage area just 90 minutes from Sydney. Key spots: Katoomba (Three Sisters lookout, Scenic World), Leura (cute village with cafes), Wentworth Falls (stunning waterfall and walking tracks), and Blackheath (Govetts Leap lookout). The Blue Mountains Explorer Bus is a hop-on-hop-off bus that covers all the main sights. Trains from Central Station to Katoomba take about 2 hours. Best visited midweek to avoid crowds. If hiking, carry enough water and check track conditions first — phone reception can be patchy in valleys.", ko: "시드니에서 불과 90분 거리의 세계유산 지역. 주요 장소: Katoomba(Three Sisters 전망대, Scenic World), Leura(카페가 있는 귀여운 마을), Wentworth Falls(멋진 폭포와 산책로), Blackheath(Govetts Leap 전망대). Blue Mountains Explorer Bus는 모든 주요 명소를 돌는 hop-on-hop-off 버스입니다. Central Station에서 Katoomba까지 기차로 약 2시간. 사람이 많은 주말을 피해 주중 방문이 최적. 하이킹 하는 경우 충분한 물을 휴대하고 등산로 상태를 미리 확인하세요 — 계곡에서는 휴대폰 수신이 불안정할 수 있습니다." },
      { label: "Southern Highlands", en: "An hour south of Campbelltown (about 1.5 hours from Sydney). Bowral is the main town: check out the Bradman Museum (cricket legend), antique shops, and the spring tulip festival (September–October). Mittagong and Berrima are charming small towns with historic pubs and antique stores. Fitzroy Falls in Morton National Park is a stunning waterfall with easy walking tracks. Great for a weekend getaway with cooler weather — especially in autumn when the trees turn golden. Good cafes and cool-climate wineries.", ko: "Campbelltown에서 남쪽으로 1시간(시드니에서 약 1.5시간). Bowral이 주요 도시: Bradman Museum(크리켓 전설), 골동품 가게, 봄 튤립 축제(9월–10월)를 확인하세요. Mittagong과 Berrima는 유서 깊은 퍼브와 골동품 가게가 있는 매력적인 작은 마을입니다. Morton National Park의 Fitzroy Falls는 쉬운 산책로가 있는 멋진 폭포입니다. 특히 가을에 나무가 황금색으로 물들 때 — 더운 여름을 피해 주말 여행에 최적. 좋은 카페와 시원한 기후의 와이너리가 있습니다." },
      { label: "Hunter Valley", en: "Australia's oldest wine region, about 2 hours north of Sydney. Over 150 wineries with cellar doors open for tasting. Semillon and Shiraz are the signature wines. Many wineries offer cheese and chocolate pairings. Pokolbin is the main area — stay overnight if you're doing a full day of tastings (designated driver or tour bus). The Hunter Valley Gardens, ballooning at sunrise, and the Hunter Valley Zoo are great non-wine activities. Best season: spring and autumn. Book accommodation early for weekends and holiday periods.", ko: "호주에서 가장 오래된 와인 산지, 시드니 북쪽 약 2시간. 150개 이상의 와이너리가 셀러 도어에서 시음을 제공합니다. 세미용과 쉬라즈가 시그니처 와인. 많은 와이너리가 치즈와 초콜릿 페어링을 제공합니다. Pokolbin이 주요 지역 — 하루 종일 시음할 경우 숙박하세요(지정 운전자 또는 투어 버스). Hunter Valley Gardens, 일출 열기구, Hunter Valley Zoo는 훌륭한 비와인 활동입니다. 최적 시즌: 봄과 가을. 주말과 휴일 기간에는 숙소를 일찍 예약하세요." },
    ],
  },
  {
    id: "tips",
    iconKey: "Clock",
    accent: "sunset",
    title: "Plan Ahead",
    koTitle: "미리 계획하기",
    desc: "What to check before you go, what to pack, and how to stay safe",
    koDesc: "출발 전 확인할 것, 챙길 것, 안전 수칙",
    items: [
      { label: "Before You Leave", en: "Check the weather forecast (BOM app or bom.gov.au). For national parks, check the NSW National Parks website for track closures, fire danger ratings, and park fees. Tell someone your route and expected return time if hiking. Download offline maps — phone service drops out in many regional areas and national parks. If driving, check your fuel — service stations can be far apart in regional areas. Fill up in the last major town before heading inland.", ko: "날씨 예보 확인(BOM 앱 또는 bom.gov.au). 국립공원은 NSW National Parks 웹사이트에서 트랙 폐쇄, 화재 위험 등급, 공원 요금을 확인하세요. 하이킹 시 경로와 예상 귀환 시간을 누군가에게 알리세요. 오프라인 지도 다운로드 — 많은 지역과 국립공원에서 휴대폰 서비스가 끊깁니다. 운전 시 연료 확인 — 지역에서는 주유소 간 거리가 멀 수 있습니다. 내륙으로 가기 전 마지막 주요 도시에서 주유하세요." },
      { label: "What to Pack", en: "Water — at least 2L per person for a day trip, more for hiking. Snacks and lunch — food options can be limited in small towns and national parks. First aid kit (bandaids, antiseptic, ibuprofen). Sunscreen, hat, sunglasses — the Australian sun is strong year-round. Layers — even in summer, coastal areas can get cool in the evening. Power bank for your phone. Jumper cables if driving — a flat battery in a remote area is a bad time. Cash — some smaller cafes and markets are card-only, but some are cash-only.", ko: "물 — 당일 여행 시 1인당 최소 2L, 하이킹 시 더 많이. 간식과 점심 — 작은 마을과 국립공원에서는 식당 옵션이 제한적일 수 있음. 구급상자(밴드에이드, 소독제, 이부프로펜). 선크림, 모자, 선글라스 — 호주 태양은 연중 강력합니다. 겹쳐 입기 — 여름에도 해안 지역은 저녁에 선선할 수 있음. 휴대폰 보조배터리. 운전 시 점퍼 케이블 — 외딴 지역에서 배터리 방전은 큰 문제입니다. 현금 — 일부 작은 카페와 시장은 카드만 받지만, 일부는 현금만 받습니다." },
      { label: "Safety", en: "Swim between the red and yellow flags at beaches — rips can be deadly. Check the BeachSafe website or app for patrolled beaches and conditions. If driving long distances, take breaks every 2 hours (driver reviver stops on highways during holiday periods with free tea/coffee). Avoid driving at dusk and dawn in regional areas — kangaroos are most active then and cause serious accidents. If you see smoke in summer, check the RFS Fires Near Me app before continuing. Phone emergency: 000 (triple zero).", ko: "해변에서는 빨강과 노랑 깃발 사이에서 수영하세요 — 이안류는 치명적일 수 있음. 순찰 해변과 상태는 BeachSafe 웹사이트나 앱에서 확인하세요. 장거리 운전 시 2시간마다 휴식(휴일 기간 고속도로에 driver reviver 정류장에서 무료 차/커피). 지역에서 해질녘과 새벽에 운전 피하기 — 캥거루가 가장 활동적이며 심각한 사고를 일으킴. 여름에 연기를 보면 계속 가기 전에 RFS Fires Near Me 앱을 확인하세요. 긴급 전화: 000(트리플 제로)." },
    ],
  },
];

export default function RoadTripsPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">

        <img

          src="https://images.pexels.com/photos/1209982/pexels-photo-1209982.jpeg?auto=compress&cs=tinysrgb&w=1800&q=85"

          alt="Person driving on an Australian road trip"

          className="absolute inset-0 w-full h-full object-cover"

        />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-stone-900/20" />

        <div className="absolute inset-0 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10">

          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">

            <En>Road Trips</En><Ko>로드트립</Ko>

          </p>

          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.95] mb-4">

            <En>Hit the road</En>

            <Ko>길을 떠나자</Ko>

          </h1>

          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">

            <En>The best weekend getaways and day trips from Sydney — south to Kiama, north to Port Stephens, west to the Blue Mountains, and everything in between.</En>
            <Ko>시드니에서 떠나는 최고의 주말 여행과 당일 여행 — 남쪽 카이아마, 북쪽 포트스테판, 서쪽 블루마운틴까지.</Ko>

          </p>

        </div>

      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="space-y-12">
          {sections.map((section, i) => (
            <EditorialSection key={section.id} data={section} index={i} />
          ))}
        </div>

        <section className="mt-16 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-3">
            <En>Trip planner</En><Ko>여행 플래너</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En>Plan your next adventure.</En>
            <Ko>다음 모험을 계획하세요.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En>The secret to a great Australian road trip is planning ahead. Check the weather, fuel up in the last major town, pack snacks and water, and always tell someone where you're going. Take breaks every two hours — driver fatigue is a major cause of regional accidents. A road trip is not about speed. It's about the stops along the way.</En>
            <Ko>훌륭한 호주 로드트립의 비결은 사전 계획입니다. 날씨를 확인하고, 마지막 주요 도시에서 주유하고, 간식과 물을 챙기고, 항상 누군가에게 행선지를 알리세요. 2시간마다 휴식을 취하세요 — 운전자 피로는 지역 사고의 주요 원인입니다. 로드트립은 속도에 관한 것이 아닙니다. 길을 따라 멈추는 정거장들에 관한 것입니다.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.nationalparks.nsw.gov.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">NSW National Parks ↗</a>
            <a href="https://www.livetraffic.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Live Traffic NSW ↗</a>
          </div>
        </section>
      </div>
    </div>
  );
}

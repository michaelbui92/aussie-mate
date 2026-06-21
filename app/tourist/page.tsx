// Server component — bilingual Sydney tourist guide.
// Redesigned in editorial style.

import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { Beach, Building2, Coin, Smartphone, Tree } from "@/components/Icons";
import { articleLdJson, breadcrumbLdJson, faqLdJson, seoFor, withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";

export const metadata = withSeo(
  {

  ...seoFor("/tourist"),
  title: "Tourist & travel — 시드니 여행 가이드",
  description:
    "시드니 여행 가이드 — 블루마운틴, 본다이, 오페라 하우스, 페리, 와이프, 식당, 교통패스, 숙소, 예산까지 한국인이 시드니를 처음 방문할 때 알아야 할 모든 것.",
  },
  "/tourist"
);

type TouristSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; en: string; ko: string }>;
};

const sections: TouristSection[] = [
  {
    id: "top-sights",
    iconKey: "Building2",
    accent: "coast",
    title: "Top 10 Sydney Must-Sees",
    koTitle: "시드니 꼭 가볼 10곳",
    desc: "Sydney's iconic attractions you cannot miss",
    koDesc: "시드니의 아이코닉한 관광지",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Taronga_Zoo%2C_Sydney_%28483465%29_%2824793297802%29.jpg",
    items: [
      { label: "1. Sydney Opera House", en: "Australia's most famous landmark. Take a guided tour inside or book a show — even just walking around the outside with a coffee is a memorable experience. Located at Bennelong Point, Circular Quay. Free to explore the exterior and foyer.", ko: "호주에서 가장 유명한 랜드마크입니다. 내부 가이드 투어를 하거나 공연을 예약하세요 — 커피 한잔 들고 외부를 산책하는 것만으로도 잊지 못할 경험입니다. Circular Quay의 Bennelong Point에 위치해 있습니다. 외부와 로비는 무료로 관람할 수 있습니다." },
      { label: "2. Sydney Harbour Bridge", en: "Walk across for free (15 min from The Rocks to Milsons Point) or climb to the top with BridgeClimb if you are feeling adventurous. The views from the top are absolutely spectacular — worth every cent.", ko: "무료로 걸어서 건널 수 있고(The Rocks에서 Milsons Point까지 15분), 모험심이 있다면 BridgeClimb으로 정상까지 올라갈 수 있습니다. 정상에서의 전망은 정말 장관입니다." },
      { label: "3. Bondi to Coogee Coastal Walk", en: "A stunning 6km coastal walk along Sydney's eastern beaches. Takes about 2 hours one way with plenty of stops for photos. Passes through Tamarama, Bronte, and Clovelly beaches. Free, accessible, and absolutely beautiful on a sunny day.", ko: "시드니 동부 해변을 따라 이어지는 6km의 아름다운 해안 산책로입니다. 편도 약 2시간. Tamarama, Bronte, Clovelly 해변을 지납니다. 무료이고 접근성이 좋으며, 링은 날에는 정말 아름답습니다." },
      { label: "4. Taronga Zoo", en: "World-class zoo with native Australian animals (kangaroos, koalas, wombats) and exotic species. Take the ferry from Circular Quay — it's a 12-minute scenic ride and the zoo has stunning harbour views. Tickets are around $50 for adults.", ko: "호주 토종 동물(캐거루, 코알라, 웜뱃)과 이국적인 동물들을 볼 수 있는 세계적 수준의 동물원입니다. Circular Quay에서 페리를 타고 가는 것이 좋습니다 — 12분의 경치 좋은 항해이며 동물원에서도 아름다운 항구 전망을 즐길 수 있습니다. 성인 티켓은 약 $50입니다." },
      { label: "5. Blue Mountains", en: "A perfect day trip from Sydney. Take the train from Central Station to Katoomba (about 2 hours). See the Three Sisters rock formation, ride the scenic railway (steepest in the world), and walk through ancient rainforest. Pack a jacket — it's cooler up there!", ko: "시드니에서 완벽한 당일 여행지입니다. Central Station에서 Katoomba까지 기차로 약 2시간. Three Sisters 바위 절벽을 보고, 세계에서 가장 가파른 스카이 레일을 타고, 고대 열대우림을 산책하세요. 재킷을 처기세요 — 산 위는 더 시원합니다!" },
      { label: "6. Royal Botanic Garden Sydney", en: "Free entry, stunning harbourside location right next to the Opera House. Massive lawns perfect for picnics, beautiful garden sections from around the world, and incredible views of the harbour. Open daily from sunrise to sunset.", ko: "무료 입장, 오페라 하우스 바로 옆에 있는 항구 변의 아름다운 위치입니다. 피크닉에 완벽한 넓은 잔디밭, 전 세계의 아름다운 정원 섹션, 그리고 항구의 장관을 감상하세요. 매일 일출부터 일몰까지 개장합니다." },
      { label: "7. The Rocks", en: "Sydney's historic district — the first European settlement site in Australia. Cobblestone streets, old pubs, weekend markets with local crafts and food, and fascinating history tours. Free to wander. Try the weekend market (Sat-Sun) for unique souvenirs.", ko: "시드니의 역사 지구 — 호주 최초의 유럽 정착지입니다. 자갈길, 오래된 펍, 지역 공예품과 음식이 있는 주말 시장이 있습니다. 산책은 무료입니다. 주말 시장(토-일)에서 독특한 기념품을 찾아보세요." },
      { label: "8. Manly Beach", en: "Take the iconic 30-minute ferry from Circular Quay to Manly — one of the best cheap experiences in Sydney ($7.20 each way). The Corso (pedestrian strip) leads from the wharf straight to the beach. Great surf, nice cafes, and a relaxed beach vibe.", ko: "Circular Quay에서 Manly까지 아이코닉한 30분 페리를 타세요 — 시드니에서 가장 저렴한 최고의 경험 중 하나입니다(편도 $7.20). Corso(보행자 전용 도로)가 부두에서 해변까지 곡바로 이어집니다. 좋은 파도, 멋진 카페, 여유로운 비치 분위기가 일품입니다." },
      { label: "9. Featherdale Wildlife Park", en: "One of the best places to get up close with Australian wildlife. You can pet kangaroos, hold a koala (for photos), and see wombats, echidnas, and crocodiles. Located in Western Sydney, about 45 minutes by car or bus from the CBD.", ko: "호주 야생 동물과 가까이서 교감할 수 있는 최고의 장소 중 하나입니다. 캐거루를 만져보고, 코알라를 안고(사진 촬영), 웜뱃, 바늘두지, 악어도 볼 수 있습니다. 시드니 서부에 위치해 있으며, CBD에서 차나 버스로 약 45분 거리입니다." },
      { label: "10. Sydney Harbour Ferry", en: "The best cheap scenic tour in Australia. A regular ferry ride ($7.20) from Circular Quay to anywhere gives you a world-class harbour tour. The F1 to Manly is the most scenic, but the F2 to Taronga Zoo and F4 to Pyrmont are also fantastic. Sit on the outer deck for the best views.", ko: "호주에서 가장 저렴한 최고의 경치 투어입니다. Circular Quay에서 아무 방향으로나 가는 일반 페리($7.20)는 세계적 수준의 항구 투어가 됩니다. Manly행 F1이 가장 경치가 좋지만, Taronga Zoo행 F2와 Pyrmont행 F4도 환상적입니다. 최고의 전망을 위해 바깥 데크에 앉으세요." },
    ],
  },
  {
    id: "safety-beach",
    iconKey: "Beach",
    accent: "sky",
    title: "Beach Safety",
    koTitle: "비치 안전",
    desc: "What to watch out for at Sydney's beaches",
    koDesc: "시드니 해변에서 주의할 점",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Beach_flags_at_Northcliffe_Beach%2C_Surfers_Paradise%2C_Queensland_04.jpg",
    items: [
      { label: "Always Swim Between the Flags", en: "Red and yellow flags mark the safest swimming zone supervised by lifeguards. NEVER swim outside the flags — even if it looks calm, rips can pull you out quickly. If caught in a rip: stay calm, float and signal for help, do not fight the current.", ko: "빨간색과 노란색 깃발은 인명 구조원이 감독하는 가장 안전한 수영 구역입니다. 절대로 깃발 밖에서 수영하지 마세요 — 이안류에 휩쓸리면: 침착하게, 도움을 요청하고, 해류와 싸우지 마세요." },
      { label: "Read the Beach Safety Signs", en: "Before entering the water, check the safety signs at the beach entrance. They show today's conditions — safe to swim, water quality, and any specific hazards like jellyfish or sharks. If in doubt, ask a lifeguard.", ko: "물에 들어가기 전에 해변 입구의 안전 표지판을 확인하세요. 오늘의 상황, 수질, 해파리나 상어 같은 위험 요소를 알려줍니다." },
      { label: "Jellyfish Season (Nov-Apr)", en: "Bluebottles are common from November to April. Painful but rarely dangerous. Rinse with seawater (not fresh water — it makes it worse), apply heat if available. Do NOT use vinegar on bluebottles in NSW. Lifeguards close the beach if dangerous species appear.", ko: "블루보틀 해파리는 11월-4월에 많습니다. 고통스러우나 드물게 위험하지는 않습니다. 바닷물로 헹구세요. NSW에서는 식초를 사용하지 마세요." },
      { label: "Sun Protection is Critical", en: "The Australian sun is brutal — you can get burned in 11 minutes in summer. Apply SPF 50+ sunscreen 20 minutes before swimming, reapply every 2 hours. Follow Slip, Slop, Slap, Seek, Slide. UV index regularly hits Extreme (11+) in summer.", ko: "호주의 자외선은 매우 강력합니다 — 여름 11분 만에 화상을 입을 수 있습니다. SPF 50+ 자외선 차단제를 사용하고 2시간마다 다시 바르세요." },
      { label: "Rock Platforms and Cliffs", en: "Be careful on rock platforms — slippery rocks, sudden waves, and unstable edges cause injuries every year. Check tide times before walking on platforms (download Tide Tracker app). Never turn your back on the ocean. Stay on marked paths.", ko: "암석 플랫폼에서 조심하세요 — 미끄러운 바위, 갑작스러운 파도가 매년 사고를 발생시킵니다. 조수 시간을 확인하고 바다에 등을 보이지 마세요." },
    ],
  },
  {
    id: "safety-bushland",
    iconKey: "Tree",
    accent: "rose",
    title: "Bushland and National Parks",
    koTitle: "숲과 국립공원",
    desc: "How to stay safe in Australian wilderness",
    koDesc: "호주 황무지에서 안전하게 지내는 방법",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Walking_track_sign_towards_Andrew_Laurie_Lookout_in_Gloucester_Tops%2C_Barrington_Tops_National_Park.jpg",
    items: [
      { label: "Snakes — Give Them Space", en: "Snakes are active in warmer months (Oct-Apr) throughout Sydney's national parks. If you see one: stop, back away slowly, give it space to escape. Do NOT try to pick it up or corner it. Walk loudly on tracks — snakes feel vibration and move away.", ko: "뱀은 따뜻한 달(10월-4월)에 활발합니다. 뱀을 보면: 멈추고, 천천히 뒤로 물러나세요. 절대 잡거나 구석으로 몰지 마세요. 시끄러운 걸음으로 걸으면 뱀이 진동을 느껴 자리를 피합니다." },
      { label: "Ticks — A Year-Round Risk", en: "Bush ticks (Ixodes holocyclus) found in bushy areas year-round. Can cause tick paralysis. Wear long sleeves and pants, use DEET repellent. After a walk, check your entire body — behind ears, hairline, armpits, and groin.", ko: "숲 진드기는 연중 발견됩니다. 진드기 마비를 일으킬 수 있습니다. 긴 옷을 입고 DEET 방충제를 사용하세요. 산책 후 귀 뒤, 머리카락, 겨드랑이, 사타구니를 확인하세요." },
      { label: "Total Fire Ban Days", en: "On Total Fire Ban days, lighting any fire or BBQ (even gas) in the open is illegal. Check the Fire Danger Rating on the RFS website or Fires Near Me app. Many national parks close on severe or extreme fire days. If caught: ring 000.", ko: "산불 금지일에 야외에서 화기 사용(가스 BBQ도 포함)은 불법입니다. RFS 웹사이트에서 산불 위험 등급을 확인하세요. 심각한 산불일에 많은 국립공원이 폐쇄됩니다." },
      { label: "Trail Safety & Emergency", en: "Mobile coverage is unreliable in many parks. Download offline maps before you go. Carry a personal locator beacon for remote hikes. Tell someone your route and expected return time. Carry enough water. Call 112 from a mobile in emergencies.", ko: "많은 국립공원에서 모바일 신호가 불안정합니다. 오프라인 지도를 다운로드하고 개인 위치 신호기를 휴대하세요. 비상시 모바일에서 112로 전화하세요." },
      { label: "Mosquitoes and Midges", en: "In summer and after rain, mosquitoes and sandflies are active near wetlands, rivers, and coastal areas. Use insect repellent, wear long clothing at dawn and dusk. Seek medical help if you experience swelling, nausea, or breathing difficulty.", ko: "여름과 비 후 습지, 강, 해안 지역에서 모기와 모래파리가 활발합니다. 방충제를 사용하고, 부기나 호흡곤란이 있으면 의료 도움을 받으세요." },
    ],
  },
  {
    id: "budget-tips",
    iconKey: "Coin",
    accent: "coast",
    title: "Budget Tips for Sydney",
    koTitle: "시드니 예산 팁",
    desc: "How to enjoy Sydney without breaking the bank",
    koDesc: "돈을 많이 쓰지 않고 시드니 즐기기",
    items: [
      { label: "Free Things to Do", en: "Royal Botanic Garden, The Rocks, Art Gallery of NSW, Hyde Park, harbour walks, Bondi-Coogee walk — all free. Most museums have free entry days. Free fireworks at Darling Harbour Saturday nights (summer). Free outdoor concerts and events throughout the year.", ko: "로열 보태닉 가든, 더 록스, 아트 갤러리, 하이드 파크, 항구 산책, 본다이-쿠지 산책 — 모두 무료. 대부분 박물관에 무료 입장일이 있습니다." },
      { label: "Cheapest Meals", en: "Asian food courts (Dixon House in Chinatown, Thai Town at Campbell Street, Korean food court on Pitt Street) serve hearty meals for $10-$15. Thai, Vietnamese, Korean, and Indian restaurants offer the best value. Sushi trains are $3-$5 per plate.", ko: "아시안 푸드코트에서 $10-$15로 든든한 식사 가능. 타이, 베트남, 한국, 인도 레스토랑이 가성비 최고. 스시 트레인은 접시당 $3-$5." },
      { label: "Museum Discounts", en: "Many museums have discounted or free entry on certain days. Australian Museum (free general entry), Powerhouse Museum (free), Museum of Contemporary Art (always free). Check websites before visiting. Wednesdays are often the cheapest day.", ko: "많은 박물관이 특정 요일에 할인 또는 무료 입장. Australian Museum(항상 무료), 다비드 박물관(무료). 수요일이 가장 저렴한 경우가 많습니다." },
    ],
  },
  {
    id: "useful-apps",
    iconKey: "Smartphone",
    accent: "sunset",
    title: "Useful Apps",
    koTitle: "유용한 앱",
    desc: "Essential apps for getting around and finding things to do",
    koDesc: "이동 및 찾기 위한 필수 앱",
    items: [
      { label: "Google Maps", en: "Already installed on most phones. Download offline maps for Sydney before you arrive — this lets you navigate without using mobile data. The transit directions are incredibly accurate with real-time bus, train, and ferry departures, platform numbers, and service alerts.", ko: "대부분의 휴대폰에 이미 설치되어 있습니다. 도착 전에 시드니 오프라인 지도를 다운로드하세요. 대중교통 길찾기는 실시간 정보가 매우 정확합니다." },
      { label: "TripView", en: "The best dedicated transit app for Sydney (and Melbourne). Shows real-time timetables for trains, buses, ferries, and light rail all in one view. Once you set your regular stops, it becomes indispensable. Free version is excellent, paid version removes ads.", ko: "시드니(와 멜버른)를 위한 최고의 대중교통 전용 앱입니다. 기차, 버스, 페리, 경전철의 실시간 시간표를 한 화면에 보여줍니다. 무료 버전도 훌륭합니다." },
      { label: "Uber / Ola / DiDi / Taxi", en: "Uber works everywhere in Sydney but can surge badly. Ola and DiDi are cheaper alternatives. Taxis can be hailed on the street or at designated ranks. If using Taxis Combined Service (02 8332 8888), they accept card payments. For airport transfers, compare prices — sometimes a taxi is cheaper than surge Uber.", ko: "Uber는 어디서나 작동하지만 서지 가격이 나쁠 수 있습니다. Ola와 DiDi가 더 저렴한 대안입니다. 택시는 거리에서 잡거나 지정된 승강장에서 탈 수 있습니다." },
      { label: "X (Twitter)", en: "Follow @sydneytrains, @sydneybuses, @ferries_sydney, and @TfNSW for real-time service updates and delays. In bad weather or during events, this is the fastest way to know what is happening. Search hashtags like #SydneyTrains or #SydBus during disruptions.", ko: "@sydneytrains, @sydneybuses, @ferries_sydney, @TfNSW를 팔로우하여 실시간 서비스 업데이트와 지연 정보를 받으세요. 악천후나 이벤트 중 가장 빠른 정보 소스입니다." },
      { label: "WhatsApp / KakaoTalk", en: "Standard for messaging in Australia is WhatsApp (most locals use it). Korean travellers also widely use KakaoTalk. Both work over Wi-Fi and mobile data. Make sure you have an active Australian SIM with data for maps and messaging.", ko: "호주의 표준 메시징 앱은 WhatsApp입니다. 한국 여행자는 KakaoTalk도 널리 사용합니다. 지도와 메시징을 위해 호주 데이터 SIM이 있는지 확인하세요." },
    ],
  },
];

export default function TouristPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>Tourist</En><Ko>관광</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En>Sydney tourist guide</En><Ko>시드니 관광 가이드</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En>All the know-how you need for visiting Sydney as a Korean traveller.</En>
            <Ko>한국 여행자가 시드니를 방문할 때 필요한 모든 정보입니다.</Ko>
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          <section className="p-5 rounded-2xl bg-sunset/5 border border-sunset/20 dark:bg-sunset/10">
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <En>
                For transport in depth — Opal cards, peak vs off-peak fares, how to complain — see the{" "}
                <Link href="/transport" className="text-sunset font-medium hover:underline">
                  Transport page
                </Link>
                .
              </En>
              <Ko>
                오팔 카드, 피크/오프피크 요금, 민원 제기 등 자세한 교통 정보는{" "}
                <Link href="/transport" className="text-sunset font-medium hover:underline">
                  Transport 페이지
                </Link>
                에서 확인하세요.
              </Ko>
            </p>
          </section>
          <section className="p-5 rounded-2xl bg-sage/5 border border-sage/20 dark:bg-sage/10">
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <En>
                Looking for day trips or weekend getaways beyond Sydney? See{" "}
                <Link href="/destinations" className="text-sunset font-medium hover:underline">
                  Destinations
                </Link>
                .
              </En>
              <Ko>
                시드니 밖 당일 여행이나 주말 여행지는{" "}
                <Link href="/destinations" className="text-sunset font-medium hover:underline">
                  Destinations 페이지
                </Link>
                에서 확인하세요.
              </Ko>
            </p>
          </section>
        </div>

        
        <div className="space-y-12">
          {sections.map((section, i) => (
            <EditorialSection key={section.id} data={section} index={i} />
          ))}
        </div>

        {/* FAQ — short visitor questions, mirrored as JSON-LD below for Google rich results */}
        <section className="mt-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>Common questions</En><Ko>자주 묻는 질문</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-6 leading-tight">
            <En>Before you go.</En><Ko>가기 전에.</Ko>
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1.5">
                <En>Do I need a visa?</En><Ko>비자가 필요한가요?</Ko>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                <En>Korean passport holders need an ETA, eVisitor, or visitor visa before flying. Apply online before you book flights — see the{" "}
                  <Link href="/visa" className="text-sunset font-medium hover:underline">Visa Guide</Link> for the full breakdown by trip length.
                </En>
                <Ko>한국 여행자는 비행기 탑승 전 ETA, eVisitor 또는 방문 비자가 필요합니다. 항공권 예약 전에 온라인으로 신청하세요. 자세한 내용은{" "}
                  <Link href="/visa" className="text-sunset font-medium hover:underline">비자 가이드</Link>에서 확인하세요.
                </Ko>
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1.5">
                <En>Is tipping expected?</En><Ko>팁을 줘야 하나요?</Ko>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                <En>No. Australian service workers earn Award wages and tipping is not part of the culture. See <Link href="/finance" className="text-sunset font-medium hover:underline">Finance</Link> for the full tipping and money guide.</En>
                <Ko>아니요. 호주 서비스 직원은 법정 최저 임금을 받으며 팁 문화가 없습니다. 자세한 내용은 <Link href="/finance" className="text-sunset font-medium hover:underline">금융 가이드</Link>에서 확인하세요.</Ko>
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1.5">
                <En>How safe is Sydney at night?</En><Ko>시드니 밤에 안전한가요?</Ko>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                <En>The CBD, Darling Harbour, The Rocks, and inner suburbs like Newtown and Surry Hills are safe to walk at night. Stick to lit streets and use common sense — Sydney is calmer than most big cities, but standard precautions apply. Trains stop around midnight, so plan a taxi or rideshare for late nights.</En>
                <Ko>CBD, 달라 항구, 더 록스, 뉴타운과 서리힐스 같은 시내 교외는 밤에도 걸어다니기 안전합니다. 밝은 거리로 다니고 상식적인 주의를 기울이세요 — 시드니는 대부분의 대도시보다 조용하지만 기본적인 주의는 필요합니다. 기차는 자정 무렵에 끊기므로 늦은 밤에는 택시나 차량 호출 앱을 이용하세요.</Ko>
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1.5">
                <En>How do I get from the airport to the city?</En><Ko>공항에서 시내로 어떻게 가나요?</Ko>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                <En>The airport train (T8) is fast but pricey ($20–25). The 400 bus from the airport terminals runs to Bondi Junction via the CBD for about $3 with Opal — best value. Rideshare apps (Uber/Ola/DiDi) sit between the two in price and convenience. See <Link href="/transport" className="text-sunset font-medium hover:underline">Transport</Link> for the full breakdown.</En>
                <Ko>공항 기차(T8)는 빠르지만 비쌉니다($20–25). 공항 터미널에서 출발하는 400번 버스는 CBD를 경유해 본다이 정션까지 가며 오팔로 약 $3입니다 — 가성비 최고. 차량 호출 앱(Uber/Ola/DiDi)은 가격과 편의성 면에서 그 중간입니다. 자세한 내용은 <Link href="/transport" className="text-sunset font-medium hover:underline">교통 가이드</Link>에서 확인하세요.</Ko>
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-3">
            <En>Emergency contacts</En><Ko>비상 연락처</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En>Save these before you arrive.</En>
            <Ko>도착 전에 저장해 두세요.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En>000 is the main emergency number (police, fire, ambulance). For non-urgent police matters call 131 444. For consular help, the Korean Consulate in Sydney is open weekdays.</En>
            <Ko>000은 주요 응급 번호입니다(경찰, 소방, 구급). 비응급 경찰 사항은 131 444로 전화하세요. 영사관 도움이 필요하면 시드니 주한 한국 영사관에 평일 동안 연락하세요.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:000" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">000 — Emergency</a>
            <a href="https://overseas.mofa.go.kr/au-ko/brd/m_22343/list.do" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Korean Consulate ↗</a>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleLdJson({
              path: "tourist",
              headline: "Sydney tourist guide — top sights, safety, apps for Korean visitors",
              description:
                "시드니 관광 가이드 — 블루마운틴, 본다이, 오페라 하우스, 페리, 와이프, 식당, 교통패스, 숙소, 예산까지 한국인이 시드니를 처음 방문할 때 알아야 할 모든 것.",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqLdJson(
              [
                {
                  q: { en: "Do I need a visa to visit Australia as a Korean citizen?" },
                  a: {
                    en: "Yes. Korean passport holders need an ETA, eVisitor, or visitor visa before flying to Australia. Apply online before you book flights.",
                  },
                },
                {
                  q: { en: "Is tipping expected in Sydney?" },
                  a: {
                    en: "No. Australian service workers earn Award wages and tipping is not part of the culture. You are not expected to tip at cafes, pubs, taxis, or restaurants.",
                  },
                },
                {
                  q: { en: "How safe is Sydney at night?" },
                  a: {
                    en: "The CBD, Darling Harbour, The Rocks, and inner suburbs like Newtown and Surry Hills are safe to walk at night. Sydney is calmer than most big cities, but standard precautions apply.",
                  },
                },
                {
                  q: { en: "What is the cheapest way to get from Sydney Airport to the city?" },
                  a: {
                    en: "The 400 bus from the airport terminals runs to Bondi Junction via the CBD for about $3 with Opal — the best value option. The airport train (T8) is faster but costs $20–25.",
                  },
                },
              ],
              "tourist"
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLdJson([{ name: "Home", path: "" }, { name: "Tourist", path: "tourist" }])
          ),
        }}
      />

      <RelatedContent
        items={[
          {
            href: "/transport",
            title: { en: "Getting around", ko: "교통과 이동" },
            description: {
              en: "Opal cards, airport transfers, rideshare apps, and ferry routes.",
              ko: "오팔 카드, 공항 이동, 차량 호출 앱, 페리 노선.",
            },
          },
          {
            href: "/apartment",
            title: { en: "Where to stay", ko: "어디에 머물까" },
            description: {
              en: "CBD convenience vs beach suburb calm. Best areas by trip type.",
              ko: "CBD의便利 vs 해변 교외의 평온. 여행 유형별 최적 지역.",
            },
          },
          {
            href: "/finance",
            title: { en: "Budget & payments", ko: "예산과 결제" },
            description: {
              en: "Travel money, card surcharges, and how much a week in Sydney really costs.",
              ko: "여행 자금, 카드 수수료, 그리고 시드니 1주의 실제 비용.",
            },
          },
        ]}
      />
    </div>
  );
}

import { En, Ko } from "@/components/LangBlocks";
import Accordion, { type AccordionSection, type AccordionItem } from "@/components/Accordion";
import { Beach, Building2, Car, Coin, DollarSign, PassengerTrain, Scooter, Smartphone, Tree } from "@/components/Icons";

const sections: AccordionSection[] = [
  {
    id: "getting-around",
    iconKey: "PassengerTrain",
    title: "Getting Around",
    koTitle: "시드니 이동",
    desc: "Opal cards, transport modes, and navigating Sydney",
    koDesc: "오팔 카드, 교통수단, 시드니 길찾기",
    items: [
      { label: "Opal Card Basics", en: "The Opal card is a reusable smart card for all Sydney public transport — trains, buses, ferries, and light rail. Tap on at the start of your trip and tap off at the end. You can top up at 7-Eleven stores, newsagents, convenience stores, or online via the Opal app or website.", ko: "오팔 카드는 시드니의 모든 대중교통(기차, 버스, 페리, 경전첨)에서 사용할 수 있는 충전식 스마트 카드입니다. 여행 시작 시 태그온, 종료 시 태그오프하세요. 7-Eleven, 뉴스에이전시, 편의점, 또는 오팔 앱/웹사이트에서 충전할 수 있습니다." },
      { label: "Trains, Buses & Ferries", en: "Sydney Trains runs the suburban rail network connecting the CBD to most suburbs. Sydney Buses covers the whole city. Sydney Ferries is one of the most scenic ways to travel — the ferry from Circular Quay to Manly is a must-do. All use the same Opal card system.", ko: "Sydney Trains은 CBD와 대부분의 교외 지역을 연결하는 철도 네트워크를 운영합니다. Sydney Buses는 도시 전체를 커버합니다. Sydney Ferries는 가장 경치 좋은 이동 수단 중 하나입니다 — Circular Quay에서 Manly까지의 페리는 꼭 타보세요. 모두 동일한 오팔 카드 시스템을 사용합니다." },
      { label: "Peak vs Off-Peak", en: "Peak fares apply on weekdays from 6:30-10:00am and 3:30-7:00pm. Off-peak fares are about 30% cheaper. Weekends and public holidays are charged at off-peak rates all day. If you can travel outside peak hours, you will save significantly.", ko: "평일 오전 6:30-10:00, 오후 3:30-7:00에는 피크 요금이 적용됩니다. 오프피크 요금은 약 30% 저렴합니다. 주말과 공휘일은 하루 종일 오프피크 요금이 적용됩니다. 피크 시간을 피해 이동할 수 있다면 상당히 절약할 수 있습니다." },
      { label: "Using Google Maps", en: "Google Maps is incredibly accurate for Sydney public transport. It shows real-time departure times, platform numbers, service disruptions, and even which carriage is best for your connecting station. Just enter your destination, select transit, and follow along.", ko: "구글 지도는 시드니 대중교통에 놀랍도록 정확합니다. 실시간 출발 시간, 플랫폼 번호, 운행 중단 정보, 환승역에 가장 글운 객차 위치까지 알려줍니다. 목적지만 입력하고 대중교통 옵션을 선택하면 됩니다." },
      { label: "How to Complain", en: "If you experience bad service — delays, dirty trains, rude staff — you can lodge a complaint through the Transport for NSW website or app. Go to transportnsw.info and click 'Contact us' or 'Feedback'. You will usually get a response within a few business days.", ko: "지연, 더러운 기차, 무례한 직원 등 불량 서비스를 경험했다면 Transport for NSW 웹사이트나 앱을 통해 민원을 제기할 수 있습니다. transportnsw.info에 접속해 'Contact us' 또는 'Feedback'을 클릭하세요. 보통 영업일 기준 몇 내에 답변을 받을 수 있습니다." },
    ],
  },
  {
    id: "top-sights",
    iconKey: "Building2",
    title: "Top 10 Sydney Must-Sees",
    koTitle: "시드니 궝 가볼 10곳",
    desc: "Sydney's iconic attractions you cannot miss",
    koDesc: "시드니의 아이코닉한 관광지",
    items: [
      { label: "1. Sydney Opera House", en: "Australia's most famous landmark. Take a guided tour inside or book a show — even just walking around the outside with a coffee is a memorable experience. Located at Bennelong Point, Circular Quay. Free to explore the exterior and foyer.", ko: "호주에서 가장 유명한 란드마크입니다. 내부 가이드 투어를 하거나 공연을 예약하세요 — 커피 한잔 들고 외부를 산책하는 것만으로도 잊지 못할 경험입니다. Circular Quay의 Bennelong Point에 위치해 있습니다. 외부와 로비는 무료로 관람할 수 있습니다." },
      { label: "2. Sydney Harbour Bridge", en: "Walk across for free (15 min from The Rocks to Milsons Point) or climb to the top with BridgeClimb if you are feeling adventurous. The views from the top are absolutely spectacular — worth every cent.", ko: "무료로 걸어서 건널 수 있고(The Rocks에서 Milsons Point까지 15분), 모험심이 있다면 BridgeClimb으로 정상까지 올라갈 수 있습니다. 정상에서의 전망은 정말 장관입니다." },
      { label: "3. Bondi to Coogee Coastal Walk", en: "A stunning 6km coastal walk along Sydney's eastern beaches. Takes about 2 hours one way with plenty of stops for photos. Passes through Tamarama, Bronte, and Clovelly beaches. Free, accessible, and absolutely beautiful on a sunny day.", ko: "시드니 동부 해변을 따라 이어지는 6km의 아름다운 해안 산책로입니다. 편도 약 2시간. Tamarama, Bronte, Clovelly 해변을 지납니다. 무료이고 접근성이 좋으며, 링은 날에는 정말 아름답니다." },
      { label: "4. Taronga Zoo", en: "World-class zoo with native Australian animals (kangaroos, koalas, wombats) and exotic species. Take the ferry from Circular Quay — it's a 12-minute scenic ride and the zoo has stunning harbour views. Tickets are around $50 for adults.", ko: "호주 토종 동물(캐거루, 코알라, 웛뱃)과 이국적인 동물들을 볼 수 있는 세계적 수준의 동물원입니다. Circular Quay에서 페리를 타고 가는 것이 좋습니다 — 12분의 경치 좋은 항해이며 동물원에서도 아름다운 항구 전망을 즐길 수 있습니다. 성인 티켓은 약 $50입니다." },
      { label: "5. Blue Mountains", en: "A perfect day trip from Sydney. Take the train from Central Station to Katoomba (about 2 hours). See the Three Sisters rock formation, ride the scenic railway (steepest in the world), and walk through ancient rainforest. Pack a jacket — it's cooler up there!", ko: "시드니에서 완벽한 당일 여행지입니다. Central Station에서 Katoomba까지 기차로 약 2시간. Three Sisters 바위 절벽을 보고, 세계에서 가장 가파른 스카이 레일을 타고, 고대 열대우림을 산책하세요. 재킷을 처기세요 — 산 위는 더 시원합니다!" },
      { label: "6. Royal Botanic Garden Sydney", en: "Free entry, stunning harbourside location right next to the Opera House. Massive lawns perfect for picnics, beautiful garden sections from around the world, and incredible views of the harbour. Open daily from sunrise to sunset.", ko: "무료 입장, 오페라 하우스 바로 옆에 있는 항구 변의 아름다운 위치입니다. 피크닉에 완벽한 넓은 잔디밭, 전 세계의 아름다운 정원 섹션, 그리고 항구의 장관을 감상하세요. 매일 일출부터 일몰까지 개장합니다." },
      { label: "7. The Rocks", en: "Sydney's historic district — the first European settlement site in Australia. Cobblestone streets, old pubs, weekend markets with local crafts and food, and fascinating history tours. Free to wander. Try the weekend market (Sat-Sun) for unique souvenirs.", ko: "시드니의 역사 지구 — 호주 최초의 유럽 정착지입니다. 자갈길, 오래된 펍, 지역 공예품과 음식이 있는 주말 시장이 있습니다. 산책은 무료입니다. 주말 시장(토-일)에서 독특한 기념품을 찾아보세요." },
      { label: "8. Manly Beach", en: "Take the iconic 30-minute ferry from Circular Quay to Manly — one of the best cheap experiences in Sydney ($7.20 each way). The Corso (pedestrian strip) leads from the wharf straight to the beach. Great surf, nice cafes, and a relaxed beach vibe.", ko: "Circular Quay에서 Manly까지 아이코닉한 30분 페리를 타세요 — 시드니에서 가장 저렴한 최고의 경험 중 하나입니다(편도 $7.20). Corso(보행자 전용 도로)가 부두에서 해변까지 곡바로 이어집니다. 좋은 파도, 멋진 카페, 여유로운 비치 분위기가 일품입니다." },
      { label: "9. Featherdale Wildlife Park", en: "One of the best places to get up close with Australian wildlife. You can pet kangaroos, hold a koala (for photos), and see wombats, echidnas, and crocodiles. Located in Western Sydney, about 45 minutes by car or bus from the CBD.", ko: "호주 야생 동물과 가까이서 교감할 수 있는 최고의 장소 중 하나입니다. 캐거루를 만져보고, 코알라를 안고(사진 촬영), 웛뱃, 바늘두지, 악어도 볼 수 있습니다. 시드니 서부에 위치해 있으며, CBD에서 차나 버스로 약 45분 거리입니다." },
      { label: "10. Sydney Harbour Ferry", en: "The best cheap scenic tour in Australia. A regular ferry ride ($7.20) from Circular Quay to anywhere gives you a world-class harbour tour. The F1 to Manly is the most scenic, but the F2 to Taronga Zoo and F4 to Pyrmont are also fantastic. Sit on the outer deck for the best views.", ko: "호주에서 가장 저렴한 최고의 경치 투어입니다. Circular Quay에서 아무 방향으로나 가는 일반 페리($7.20)는 세계적 수준의 항구 투어가 됩니다. Manly행 F1이 가장 경치가 좋지만, Taronga Zoo행 F2와 Pyrmont행 F4도 환상적입니다. 최고의 전망을 위해 바걥 데크에 앎으세요." },
    ],
  },
  {
    id: "day-trips",
    iconKey: "Car",
    title: "Day Trips from Sydney",
    koTitle: "시드니 당일 여행",
    desc: "Places you can see in a single day with public transport or a short drive",
    koDesc: "대중교통이나 짪은 운전으로 하루 안에 갈 수 있는 장소",
    items: [
      { label: "Blue Mountains", en: "Take a train from Central to Katoomba (2 hours, about $7 with Opal). See the Three Sisters at Echo Point, ride the Scenic Railway and Skyway cable car, and walk through the Valley of the Waters. Pack warm clothes — it's cold up there even in summer.", ko: "Central에서 Katoomba까지 기차로(2시간, 오팔 약 $7). 에코 포인트에서 Three Sisters를 보고, 스카이 레일과 스카이웨이 케이블카를 타며, 밸리 오브 더 워터스를 산책하세요. 따뜻b한 옷을 챘기세요 — 여름도 산 위는 추습니다." },
      { label: "Royal National Park (Coastal Track)", en: "Take the train to Cronulla, then the ferry to Bundeena. Walk the Royal Coastal Track — 26km one way but you can do a shorter section. The Figure 8 Pools are a famous natural rock pool at the southern end. Car or rideshare needed to get back. Park entry $12 per vehicle.", ko: "기차로 Cronulla까지 간 후 페리로 Bundeena로 갑니다. 로열 코스탈 트랙을 산책하세요 — 편도 26km이지만 짪은 구간도 가능합니다. 피규어 8 풀스는 남쪽 쪽에 있는 유명한 자연 수영장입니다. 차량 입장료는 $12입니다." },
      { label: "Wollongong & Shellharbour", en: "Take a train south from Central (about 1.5 hours). Visit the iconic Sea Cliff Bridge between Coalcliff and Lawrence Hargrave Drive. Visit Nan Tien Temple (largest Buddhist temple in the southern hemisphere) near Shellharbour. Great beaches and a more laid-back feel than Sydney.", ko: "Central에서 남쪽으로 기차를 타면 약 1시간 30분입니다. Coalcliff와 Lawrence Hargrave Drive 사이의 시 클리프 브릿지를 지나보세요. Shellharbour 근처의 난티엔 사원도 방문하세요. 시드니보다 여유로운 분위기와 좋은 해변이 있습니다." },
      { label: "Palm Beach & the Northern Beaches", en: "Take the L90 bus from the city to the northern tip of Sydney's peninsula. Palm Beach is the northernmost beach — the Barrenjoey Lighthouse at the end is a great walk. Stop at Whale Beach, Avalon, and Bilgola on the way.", ko: "L90 버스를 타고 시드니 반도의 최북단으로 가세요. Palm Beach는 가장 북단에 있는 해변입니다 — 끝에 있는 Barrenjoey 등대까지 산책하기 좋습니다. 길에 Whale Beach, Avalon, Bilgola도 들러 보세요." },
      { label: "Hawkesbury River & Wiseman's Ferry", en: "Drive north to Wiseman's Ferry (about 1.5 hours). Do a river cruise, walk to historic ruins, or just enjoy the scenic waterway. Sandstone formations and ancient landscapes unlike anything near Sydney. Popular for kayaking, fishing, and scenic drives.", ko: "북쪽으로 차를 타고 Wiseman's Ferry까지(약 1시간 30분). 강 크루즈를 타거나, 역사적 유적지를 산책하거나, 아름다운 수로를 즐기세요. 사암 구조물과 고대 풍경은 시드니 근처에서는 독특합니다." },
      { label: "Kamay Botany Bay (Kurnell)", en: "Drive south to Kurnell — where Captain Cook first landed in 1770. Visit the Captain Cook Landing Site, the Kamay Botany Bay Visitor Centre, and the stunning coastal cliffs. Beautiful walking tracks, historical monuments, and a tranquil beach atmosphere.", ko: "남쪽으로 차를 타고 Kurnell까지 — 캡틴 쿡이 1770년에 처음 상륙한 곳입니다. 캡틴 쿡 랜딩 사이트, 박물관, 멋진 해안 절벽을 방문하세요. 아름다운 산책로, 역사적 기념물이 있습니다." },
    ],
  },
  {
    id: "weekend-trips",
    iconKey: "Scooter",
    title: "Weekend Trips",
    koTitle: "주말 여행",
    desc: "Destinations worth the overnight stay — from cheap to memorable",
    koDesc: "하룻밤의 가치가 있는 목적지 — 저렴한 곳부터 기억에 남는 곳까지",
    items: [
      { label: "Melbourne", en: "Fly (1.5 hours, often $99-$199 on Jetstar or Qantas sale) or take an overnight coach. Australia's cultural capital — street art, coffee, food, live music, and laneway bars. Great Ocean Road is a stunning coastal drive. Great for 2-3 nights.", ko: "비행기로(1시간 30분, Jetstar나 Qantas 세일 시 $99-$199) 또는 야간 버스로. 호주의 문화 수도 — 거리 아트, 커피, 음식, 라이브 음악, 골목길 바. 그레이트 오션 로드는 멋진 해안 드라이브입니다. 2-3박에 좋습니다." },
      { label: "Byron Bay", en: "Fly to Ballina/Byron (1.5 hours) or drive from Brisbane (1 hour). Famous for alternative culture, beautiful beaches, and the easternmost point of mainland Australia. Cape Byron Lighthouse is a must-visit. Great for surf, yoga retreats, and relaxed beach vibes.", ko: "Ballina/Byron으로 비행(1시간 30분) 또는 브리즈번에서 운전(1시간). 대안 문화, 아름다운 해변, 호주 본토 최동단으로 유명합니다. 케이프 바이런 등대는 괭 방문할 만합니다." },
      { label: "Canberra", en: "Drive 3.5 hours south (or fly 1 hour). Australia's capital with world-class museums and galleries — all free. Visit the Australian War Memorial, National Gallery of Australia, Parliament House. Ideal for a culture-filled weekend.", ko: "남쪽으로 3시간 30분 운전(또는 1시간 비행). 세계적 수준의 박물관과 갤러리가 있는 호주 수도입니다 — 모두 무료. 전쟁 기념관, 국립 미술관, 국회의사당을 방문하세요." },
      { label: "Hunter Valley", en: "Drive 2 hours north of Sydney. Australia's oldest wine region — known for Shiraz, Semillon, and Chardonnay. Do a wine tasting at some of 150+ wineries. Consider an overnight stay to enjoy without rushing. Also has brewery and distillery options.", ko: "시드니에서 북쪽으로 2시간 운전. 호주에서 가장 오래된 와인 지역 — Shiraz, Semillon, Chardonnay로 유명합니다. 150개 이상의 와이너리 중 일부에서 와인 시음을 하세요." },
      { label: "Jervis Bay", en: "Drive 3 hours south. Famous for impossibly white sand (Hyams Beach) and crystal-clear turquoise water. Excellent for snorkelling, dolphin watching, and kayaking. Book accommodation in Huskisson well ahead — it books out fast.", ko: "남쪽으로 3시간 운전. 밑어진 하얀 모래(Hyams Beach)와 수정처럼 링은 청록색 물이 유명합니다. 스노클링, 돌고래 관찰, 카약에 좋습니다. Huskisson의 숙소를 미리 예약하세요." },
      { label: "Gold Coast (Queensland)", en: "Fly 1.5 hours or drive via Brisbane (1 hour). Theme parks (Dreamworld, Movie World, Sea World), beautiful beaches, and the famous Springbrook and Tamborine mountain villages nearby. Great for families or anyone who loves beaches and nightlife.", ko: "비행기로 1시간 30분 또는 브리즈번 경유 운전(1시간). 테마파크, 아름다운 해변, Springbrook과 Tamborine 산악 마을로 유명합니다." },
    ],
  },
  {
    id: "safety-beach",
    iconKey: "Beach",
    title: "Beach Safety",
    koTitle: "비치 안전",
    desc: "What to watch out for at Sydney's beaches",
    koDesc: "시드니 해변에서 주의할 점",
    items: [
      { label: "Always Swim Between the Flags", en: "Red and yellow flags mark the safest swimming zone supervised by lifeguards. NEVER swim outside the flags — even if it looks calm, rips can pull you out quickly. If caught in a rip: stay calm, float and signal for help, do not fight the current.", ko: "빨간색과 노란색 깃발은 인명 구조원이 감독하는 가장 안전한 수영 구역입니다. 절대로 깃발 밖에서 수영하지 마세요 — 이안류에 휘쌍려면: 침착하게, 도움을 요청하고, 해류와 싸우지 마세요." },
      { label: "Read the Beach Safety Signs", en: "Before entering the water, check the safety signs at the beach entrance. They show today's conditions — safe to swim, water quality, and any specific hazards like jellyfish or sharks. If in doubt, ask a lifeguard.", ko: "물에 들어가기 전에 해변 입구의 안전 표지판을 확인하세요. 오늘의 상황, 수질, 해파리나 상어 같은 위험 요소를 알려줍니다." },
      { label: "Jellyfish Season (Nov-Apr)", en: "Bluebottles are common from November to April. Painful but rarely dangerous. Rinse with seawater (not fresh water — it makes it worse), apply heat if available. Do NOT use vinegar on bluebottles in NSW. Lifeguards close the beach if dangerous species appear.", ko: "블루보틀 해파리는 11월-4월에 흡합니다. 고통스러우나 드물게 위험하지는 않습니다. 바닷물로 헹구세요. NSW에서는 식초를 사용하지 마세요." },
      { label: "Sun Protection is Critical", en: "The Australian sun is brutal — you can get burned in 11 minutes in summer. Apply SPF 50+ sunscreen 20 minutes before swimming, reapply every 2 hours. Follow Slip, Slop, Slap, Seek, Slide. UV index regularly hits Extreme (11+) in summer.", ko: "호주의 자외선은 매우 강력합니다 — 여름 11분 만에 화상을 입을 수 있습니다. SPF 50+ 자외선 차단제를 사용하고 2시간마다 다시 바르세요." },
      { label: "Rock Platforms and Cliffs", en: "Be careful on rock platforms — slippery rocks, sudden waves, and unstable edges cause injuries every year. Check tide times before walking on platforms (download Tide Tracker app). Never turn your back on the ocean. Stay on marked paths.", ko: "암석 플랫폼에서 조심하세요 — 미끄러운 바위, 갑자스러운 파도가 매년 사고를 발생시킵니다. 조수 시간을 확인하고 바다에 등을 보이지 마세요." },
    ],
  },
  {
    id: "safety-bushland",
    iconKey: "Tree",
    title: "Bushland and National Parks",
    koTitle: "숲과 국립공원",
    desc: "How to stay safe in Australian wilderness",
    koDesc: "호주 황무지에서 안전하게 지내는 방법",
    items: [
      { label: "Snakes — Give Them Space", en: "Snakes are active in warmer months (Oct-Apr) throughout Sydney's national parks. If you see one: stop, back away slowly, give it space to escape. Do NOT try to pick it up or corner it. Walk loudly on tracks — snakes feel vibration and move away.", ko: "뱀은 따뜻한 달(10월-4월)에 활발합니다. 뱀을 보면: 머추고, 천천히 뒤로 물러나세요. 절대 잡거나 구석으로 몰지 마세요. 시꿁러운 걸음으로 걸으면 뱀이 진동을 느도 자리를 피합니다." },
      { label: "Ticks — A Year-Round Risk", en: "Bush ticks (Ixodes holocyclus) found in bushy areas year-round. Can cause tick paralysis. Wear long sleeves and pants, use DEET repellent. After a walk, check your entire body — behind ears, hairline, armpits, and groin.", ko: "숲 진드기는 연중 발견됩니다. 진드기 마비를 일으킬 수 있습니다. 긴 옷을 입고 DEET 방충제를 사용하세요. 산책 후 귀 뒤, 머리카락, 검드랑이, 사타구니를 확인하세요." },
      { label: "Total Fire Ban Days", en: "On Total Fire Ban days, lighting any fire or BBQ (even gas) in the open is illegal. Check the Fire Danger Rating on the RFS website or Fires Near Me app. Many national parks close on severe or extreme fire days. If caught: ring 000.", ko: "산불 금지일에 야외에서 화기 사용(가스 BBQ도 포함)은 불법입니다. RFS 웹사이트에서 산불 위험 등급을 확인하세요. 심각한 산불일에 많은 국립공원이 폐쇄됩니다." },
      { label: "Trail Safety & Emergency", en: "Mobile coverage is unreliable in many parks. Download offline maps before you go. Carry a personal locator beacon for remote hikes. Tell someone your route and expected return time. Carry enough water. Call 112 from a mobile in emergencies.", ko: "많은 국립공원에서 모바일 신호가 불안정합니다. 오프라인 지도를 다운로드하고 개인 위치 신호기를 휴대하세요. 비상시 모바일에서 112로 전화하세요." },
      { label: "Mosquitoes and Midges", en: "In summer and after rain, mosquitoes and sandflies are active near wetlands, rivers, and coastal areas. Use insect repellent, wear long clothing at dawn and dusk. Seek medical help if you experience swelling, nausea, or breathing difficulty.", ko: "여름과 비 후 습지, 강, 해안 지역에서 모기와 모례파리가 활발합니다. 방충제를 사용하고, 부기나 호흡곤란이 있으면 의료 도움을 받으세요." },
    ],
  },
  {
    id: "tipping",
    iconKey: "DollarSign",
    title: "Tipping Culture",
    koTitle: "팝 문화",
    desc: "Do you tip? Short answer: usually not — here is how it works",
    koDesc: "팝을 주나요? 짪은 대답: 보통 아니요",
    items: [
      { label: "Tipping is NOT Expected", en: "Unlike the US or Canada, tipping is not part of Australian culture. Service workers earn Award wages (minimum $24+/hour) and do not rely on tips. You are never expected to tip at cafes, pubs, taxis, or for most services. Even in restaurants, tipping is optional, not expected.", ko: "미국이나 캐나다와 달리, 호주 문화에서 팝은 일반적이지 않습니다. 서비스 직종 근로자는 법정 최저 임금(시간당 $24+)을 받습니다. 카페, 펍, 택시, 레스토랑에서 팝이 예상되지 않습니다." },
      { label: "When You Might Tip", en: "If you receive extraordinary service at a high-end restaurant, a 10% tip is generous and appreciated but never required. Some fancy restaurants include a service charge (10-15%) for large groups — check your bill before adding extra.", ko: "고급 레스토랑에서 탁월한 서비스를 받았다면 10% 팝은 관대하지만 필수는 아닙니다. 일부 레스토랑은 대규모 그룹에 서비스 차지(10-15%)를 포함합니다." },
      { label: "Why No Tipping?", en: "Australia has strong labour laws. Hospitality workers earn Award wages with penalty rates for nights and weekends. They have sick leave, annual leave, and superannuation. Fair wages for good service are built into the price you pay. Tips are a bonus, not a necessity.", ko: "호주는 강력한 노동법을 가지고 있습니다. 좋은 서비스에 대한 공정한 임금은 가격에 포함되어 있습니다. 팝은 보너스일 뿐 필수가 아닙니다." },
    ],
  },
  {
    id: "budget-tips",
    iconKey: "Coin",
    title: "Budget Tips for Sydney",
    koTitle: "시드니 예산 팁",
    desc: "How to enjoy Sydney without breaking the bank",
    koDesc: "돈을 많이 쓰지 않고 시드니 즐기기",
    items: [
      { label: "Daily Opal Cap", en: "The Opal system has a daily cap: $15.60 for adults (Mon-Sat), $19.50 for Sun. Once you reach the cap, all further travel that day is free. After 8 paid journeys in a week, the rest are half price. Plan trips strategically to maximise value.", ko: "오팔 일일 상한선: 성인 월-토 $15.60, 일요일 $19.50. 상한선 도달 후 모든 여행 무료. 주당 8회 유료 여행 후 나머지는 반가입니다." },
      { label: "Free Things to Do", en: "Royal Botanic Garden, The Rocks, Art Gallery of NSW, Hyde Park, harbour walks, Bondi-Coogee walk — all free. Most museums have free entry days. Free fireworks at Darling Harbour Saturday nights (summer). Free outdoor concerts and events throughout the year.", ko: "로열 보태닉 가든, 더 록스, 아트 갤러리, 하이드 파크, 항구 산책, 본다이-쿠지 산책 — 모두 무료. 대부분 박물관에 무료 입장일이 있습니다." },
      { label: "Cheapest Meals", en: "Asian food courts (Dixon House in Chinatown, Thai Town at Campbell Street, Korean food court on Pitt Street) serve hearty meals for $10-$15. Thai, Vietnamese, Korean, and Indian restaurants offer the best value. Sushi trains are $3-$5 per plate.", ko: "아시안 푸드코트에서 $10-$15로 든든한 식사 가능. 타이, 베트남, 한국, 인도 레스토랑이 가성비 최고. 스시 트레인은 접시당 $3-$5." },
      { label: "Museum Discounts", en: "Many museums have discounted or free entry on certain days. Australian Museum (free general entry), Powerhouse Museum (free), Museum of Contemporary Art (always free). Check websites before visiting. Wednesdays are often the cheapest day.", ko: "많은 박물관이 특정 요일에 할인 또는 무료 입장. Australian Museum(항상 무료), 다비드 박물관(무료). 수요일이 가장 저렴한 경우가 많습니다." },
      { label: "Opal Concession for Students", en: "Full-time international students in NSW can apply for an Opal Concession card — 50% off adult fares. Apply through your university or TAFE, or at a transportnsw.info service centre. Takes about 2 weeks to arrive. Bring your student ID and visa documents.", ko: "NSW 풀타임 유학생은 오팔 할인 카드 신청 가능 — 성인 요금의 50% 할인. 대학교나 TAFE, transportnsw.info 서비스 센터에서 신청하세요. 학생증과 비자 서류를 지참하세요." },
    ],
  },
  {
    id: "useful-apps",
    iconKey: "Smartphone",
    title: "Useful Apps",
    koTitle: "유용한 앱",
    desc: "Essential apps for getting around and finding things to do",
    koDesc: "이동 및 찾기 위한 필수 앱",
    items: [
      { label: "Google Maps", en: "Already installed on most phones. Download offline maps for Sydney before you arrive — this lets you navigate without using mobile data. The transit directions are incredibly accurate with real-time bus, train, and ferry departures, platform numbers, and service alerts.", ko: "대부분의 휴대폰에 이미 설치되어 있습니다. 도착 전에 시드니 오프라인 지도를 다운로드하세요. 대중교통 길찾기는 실시간 정보가 매우 정확합니다." },
      { label: "TripView", en: "The best dedicated transit app for Sydney (and Melbourne). Shows real-time timetables for trains, buses, ferries, and light rail all in one view. Once you set your regular stops, it becomes indispensable. Free version is excellent, paid version removes ads.", ko: "시드니(와 멜버른)를 위한 최고의 대중교통 전용 앱입니다. 기차, 버스, 페리, 경전첨의 실시간 시간표를 한 화면에 보여줍니다. 무료 버전도 훌륭합니다." },
      { label: "Uber / Ola / DiDi / Taxi", en: "Uber works everywhere in Sydney but can surge badly. Ola and DiDi are cheaper alternatives. Taxis can be hailed on the street or at designated ranks. If using Taxis Combined Service (02 8332 8888), they accept card payments. For airport transfers, compare prices — sometimes a taxi is cheaper than surge Uber.", ko: "Uber는 어디서나 작동하지만 서지 가격이 나즐 수 있습니다. Ola와 DiDi가 더 저렴한 대안입니다. 택시는 거리에서 잡거나 지정된 승강장에서 탈 수 있습니다." },
      { label: "X (Twitter)", en: "Follow @sydneytrains, @sydneybuses, @ferries_sydney, and @TfNSW for real-time service updates and delays. In bad weather or during events, this is the fastest way to know what is happening. Search hashtags like #SydneyTrains or #SydBus during disruptions.", ko: "@sydneytrains, @sydneybuses, @ferries_sydney, @TfNSW를 팔로우하여 실시간 서비스 업데이트와 지연 정보를 받으세요. 액천후나 이벤트 중 가장 빠른 정보 소스입니다." },
      { label: "WhatsApp / KakaoTalk", en: "Standard for messaging in Australia is WhatsApp (most locals use it). Korean travellers also widely use KakaoTalk. Both work over Wi-Fi and mobile data. Make sure you have an active Australian SIM with data for maps and messaging.", ko: "호주의 표준 메시징 앱은 WhatsApp입니다. 한국 여행자는 KakaoTalk도 넓게 사용합니다. 지도와 메시징을 위해 호주 데이터 SIM이 있는지 확인하세요." },
    ],
  },
];

const iconKeys = ["Beach", "Building2", "Car", "Coin", "DollarSign", "PassengerTrain", "Scooter", "Smartphone", "Tree"];

export default function TouristPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <header className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En>Tourist</En>
          <Ko>관광</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
          <En>Sydney tourist guide</En>
          <Ko>시드니 관광 가이드</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>All the know-how you need for visiting Sydney as a Korean traveller.</En>
          <Ko>한국 여행자가 시드니를 방문할 때 필요한 모든 정보입니다.</Ko>
        </p>
      </header>

      <div className="space-y-6">
        <Accordion sections={sections} iconKeys={iconKeys} itemDelayS={0.08} theme="wattle" />
      </div>
    </div>
  );
}
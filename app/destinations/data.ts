export type TripLength = "weekend" | "day" | "longer" | "far";

export interface Destination {
  slug: string;
  name: { en: string; ko: string };
  tagline: { en: string; ko: string };
  heroImg: string;
  cardImg: string;
  accentColor: string;
  region: string;
  /** Drives the filter on /destinations hub. day = <2hr, weekend = 2-3hr,
   *  longer = 3+hr drive worth overnight, far = 5+hr or fly. */
  tripLength: TripLength;
  description: { en: string; ko: string };
  highlights: { en: string; ko: string; icon: string }[];
  bestTime: { en: string; ko: string };
  gettingThere: { en: string; ko: string };
  /** Suggested stay length for trip planning */
  suggestedDays: { en: string; ko: string };
}

export const destinations: Destination[] = [
  {
    slug: "blue-mountains",
    name: { en: "Blue Mountains", ko: "블루마운틴" },
    tagline: { en: "A World Heritage site with fabulous views", ko: "유네스코 세계유산, 숨막히는 절경" },
    heroImg: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1800&q=85",
    cardImg: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    accentColor: "bg-emerald-500",
    region: "New South Wales",
    tripLength: "day",
    description: {
      en: "Just 90 minutes from Sydney by train, the Blue Mountains are one of NSW's most spectacular natural wonders. Ancient eucalyptus forests, dramatic sandstone cliffs, and cascading waterfalls make this a must-visit. The Three Sisters at Echo Point are the most famous sight — best viewed at sunrise or sunset when the rock faces glow orange and pink.",
      ko: "시드니에서 기차로 단 90분, 블루마운틴은 NSW에서 가장 황홀한 자연경관입니다. 고대 유칼립투스 숲, 장엄한 사암 절벽, 준폭포가 어우러진 이 곳은 반드시 방문해야 할 명소입니다. 에코 포인트의 'Three Sisters'가 가장 유명한데, 일출이나 일몰 때 바위가 주황빛과 분홍빛으로 빛나는 모습을 보는 것이 가장 좋습니다."
    },
    highlights: [
      { en: "Three Sisters & Echo Point", ko: "삼자매 & 에코 포인트", icon: "mountain" },
      { en: "Scenic World cable car", ko: "시니악 월드 케이블카", icon: "hiking" },
      { en: "Wentworth Falls", ko: "웬트워스 폭포", icon: "swim" },
      { en: "Jenolan Caves", ko: "제놀란 동굴", icon: "museum" },
    ],
    bestTime: { en: "Year-round — best in spring for wildflowers", ko: "년 내내 — 봄에 야생화를 즐기기에 최적" },
    gettingThere: { en: "Train from Central Station to Katoomba ($18 Opal, 2hrs). Drive via Great Western Highway.", ko: "센트럴 스테이션에서 카툼바까지 기차 ($18 오팔, 2시간). 그레이트 웨스턴 하이웨이 이용." },
    suggestedDays: { en: "1–2 days (long day trip or one overnight)", ko: "1~2일 (당일 또는 1박)" },
  },
  {
    slug: "hunter-valley",
    name: { en: "Hunter Valley", ko: "헌터 밸리" },
    tagline: { en: "World-class wines & gourmet getaways", ko: "세계적 와인과 미식 여행지" },
    heroImg: "https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg?auto=compress&cs=tinysrgb&w=1800&q=85",
    cardImg: "https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    accentColor: "bg-rose-500",
    region: "New South Wales",
    tripLength: "weekend",
    description: {
      en: "Australia's oldest wine region, about 2 hours north of Sydney. Hunter Valley is famous for Semillon and Shiraz, but there's so much more — gourmet restaurants, sake tastings, hot air balloons at sunrise, and boutique breweries. A popular weekend escape that's at its best during vintage (March–April).",
      ko: "호주에서 가장 오래된 와인 생산지로 시드니에서 북쪽으로 약 2시간. 헌터 밸리는 세미뇽과 시라즈로 유명하지만 그 이상입니다 — 미식 레스토랑, 사케 테이스팅, 일출 핫에어볼론, 그리고 바이크릿 양조장. 빈티지 시즌(3~4월)에 가장 아름다습니다."
    },
    highlights: [
      { en: "Wine tasting at boutique wineries", ko: "바이크릿 와이너리 와인 테이스팅", icon: "wine" },
      { en: "Hot air balloon sunrise", ko: "일출 핫에어볼론", icon: "sun" },
      { en: "Sake & brewery tastings", ko: "사케 & 양조장", icon: "utensils" },
      { en: "Gourmet dining", ko: "미식 다이닝", icon: "utensils" },
    ],
    bestTime: { en: "Mar–Apr (vintage) or May–Jun for cooler escapes", ko: "3~4월 (빈티지) 또는 5~6월 시원한 철에 최적" },
    gettingThere: { en: "Drive (2hrs) or book a guided wine tour from Sydney. Train to Singleton then bus.", ko: "자동차 (2시간) 또는 시드니에서 가이드 와인 투어 예약. 기차로 싱글턴까지 간 후 버스." },
    suggestedDays: { en: "2–3 days (weekend with cellar-door pace)", ko: "2~3일 (주말 셀러 도어 속도로)" },
  },
  {
    slug: "south-coast",
    name: { en: "South Coast", ko: "사우스 코스트" },
    tagline: { en: "Brilliant beaches & pretty coastal towns", ko: "수려한 해변과 아담한 해안 마을" },
    heroImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=85",
    cardImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    accentColor: "bg-sky-500",
    region: "New South Wales",
    tripLength: "longer",
    description: {
      en: "From the white sands of Hyams Beach (Guinness World Record for the whitest sand on Earth) to the dramatic cliffs of Kiama, the South Coast is one of Australia's most beautiful coastal drives. Stop at charming towns like Berry, Gerroa, and Ulladulla. Dolphins are commonly spotted from shore, and whales migrate past from May to November.",
      ko: "세계에서 가장 흰 백사로 유명한 하임스 비치에서부터 키아마의 장엄한 절벽에 이르는 사우스 코스트는 호주에서 가장 아름다운 해안 드라이브 중 하나입니다. 베리, 제로아, 울라둘라 같은 매력적인 마을에서 발을 멈추세요. 돌고래는 자주 볼 수 있으며, 고래는 5월부터 11월 사이에 이동합니다."
    },
    highlights: [
      { en: "Hyams Beach (whitest sand on Earth)", ko: "하임스 비치 (세계에서 가장 흰 모래)", icon: "beach" },
      { en: "Kiama Blowhole", ko: "키아마 브로우홀", icon: "swim" },
      { en: "Dolphin & whale watching", ko: "돌고래 & 고래 관찰", icon: "whale" },
      { en: "Coastal villages & seafood", ko: "해안 마을 & 해산물", icon: "utensils" },
    ],
    bestTime: { en: "Oct–Apr for swimming; May–Nov for whales", ko: "수영은 10월~4월; 고래는 5월~11월" },
    gettingThere: { en: "Drive south from Sydney on the Princes Highway (2–3hrs). Train to Kiama available.", ko: "프린스 하이를 따라 시드니에서 남쪽으로 운전 (2~3시간). 기차로 키아마 가능." },
    suggestedDays: { en: "3–5 days for the full coastal drive", ko: "해안 전체 드라이브는 3~5일" },
  },
  {
    slug: "snowy-mountains",
    name: { en: "Snowy Mountains", ko: "스노이 마운틴" },
    tagline: { en: "Snow adventures & Australia's highest peak", ko: "스노보드, 스키와 호주 최고봉" },
    heroImg: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1800&q=85",
    cardImg: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80",
    accentColor: "bg-sky-600",
    region: "New South Wales",
    tripLength: "longer",
    description: {
      en: "The Snowy Mountains in winter are pure magic — Perisher, Thredbo, and Mount Blue offer ski runs from beginner-friendly to advanced terrain. Australia's highest peak, Mount Kosciuszko (2,228m), is accessible by chairlift from Perisher and offers stunning views in any season. In summer the same slopes become hiking trails through alpine wildflowers.",
      ko: "겨울의 스노이 마운틴은 순수한 매직입니다 — Perisher, Thredbo, Mount Blue슬로프는 초보자부터 고급 지형까지 다양한 스키장을 제공합니다. 호주 최고봉 마운트 코시우스코 (2,228m)는 페리셔에서 체어리프트로 방문할 수 있으며 사계절 황홀한 경관을 제공합니다. 여름에는 같은 슬로프가 고산 야생화를 배경으로 하는 트레킹 코스가 됩니다."
    },
    highlights: [
      { en: "Skiing & snowboarding at Perisher", ko: "페리셔 스키 & 스노보드", icon: "ski" },
      { en: "Mount Kosciuszko summit walk", ko: "마운트 코시우스코 정상 트레킹", icon: "hiking" },
      { en: "Thredbo mountain biking", ko: "스레드보 마운틴 바이킹", icon: "mountain" },
      { en: "Summer wildflower hikes", ko: "여름 야생화 트레킹", icon: "wheat" },
    ],
    bestTime: { en: "Jun–Sep (ski season); Dec–Feb (summer hiking)", ko: "6월~9월 (스키 시즌); 12월~2월 (여름 트레킹)" },
    gettingThere: { en: "Drive from Sydney (6hrs) or fly to Cooma, then shuttle to Perisher/Thredbo.", ko: "시드니에서 운전 (6시간) 또는 쿠마까지 비행 후 페리셔/스레드보 셔틀." },
    suggestedDays: { en: "3–7 days (weekend for skiing, week for hiking)", ko: "3~7일 (스키는 주말, 트레킹은 일주일)" },
  },
  {
    slug: "sydney-harbour",
    name: { en: "Sydney Harbour", ko: "시드니 하버" },
    tagline: { en: "Icons, ferries & that glorious harbour", ko: "시드니 아이콘과 하버의 스플렌더" },
    heroImg: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=1800&q=85",
    cardImg: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=800&q=80",
    accentColor: "bg-amber-500",
    region: "Sydney, New South Wales",
    tripLength: "day",
    description: {
      en: "Sydney Harbour is arguably the most beautiful city harbour in the world. The Opera House and Harbour Bridge are best experienced from the water — and the best way to do that is on a ferry. The Manly Ferry crossing at sunset is pure magic. Beyond the icons: Barangaroo foreshore, the Barangaroo Boardwalk, and the Royal Botanic Garden are all free, accessible, and spectacular.",
      ko: "시드니 하버는 아마도 세계에서 가장 아름다운 도시 항구일 것입니다. 오페라 하우스와 하버 브리지는 물 위에서 경험할 때 가장 좋습니다 — 그 최적의 방법은 페리입니다. 해질녘 매슬리 페리 이동은 순수한 매직입니다. 아이콘 외: 바라부가루 해안, 바라부가루 보드워크, 로열 보타닉 가든은 모두 무료로 접근 가능하고 황홀합니다."
    },
    highlights: [
      { en: "Ferry to Manly at sunset", ko: "일몰 매슬리 페리", icon: "swim" },
      { en: "Sydney Opera House", ko: "시드니 오페라 하우스", icon: "museum" },
      { en: "Royal Botanic Garden walk", ko: "로열 보타닉 가든 산책", icon: "hiking" },
      { en: "Barangaroo Boardwalk", ko: "바라부가루 보드워크", icon: "beach" },
    ],
    bestTime: { en: "Year-round — best sunset ferry in summer", ko: "년 내내 — 여름 일몰 페리가 가장 아름다움" },
    gettingThere: { en: "Sydney CBD — ferry from Circular Quay (Ferry routes F1–F14, $3–7 Opal). Train to Circular Quay station.", ko: "시드니 CBD — 서큘러 키에서 페리 (F1~F14 노선, $3~7 오팔). 기차로 서큘러 키 역." },
    suggestedDays: { en: "1–2 days (most of it on foot + ferries)", ko: "1~2일 (도보와 페리로 대부분)" },
  },
  {
    slug: "central-coast",
    name: { en: "Central Coast", ko: "센트럴 코스트" },
    tagline: { en: "Eco-certified beaches & outdoor adventures", ko: "생태인증 해변과 아웃도어 어드벤처" },
    heroImg: "https://images.pexels.com/photos/6256449/pexels-photo-6256449.jpeg?auto=compress&cs=tinysrgb&w=1800&q=85",
    cardImg: "https://images.pexels.com/photos/6256449/pexels-photo-6256449.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    accentColor: "bg-teal-500",
    region: "New South Wales",
    tripLength: "weekend",
    description: {
      en: "Less than an hour from Sydney by train, the Central Coast is where city slickers escape for beach days, bushwalks, and pub lunches by the water. Several beaches hold Ecotourism certification — protected, clean, and quietly spectacular. The Brisbane Water National Park has coastal trails with stunning views, and there are over 20 art galleries worth visiting.",
      ko: "기차로 단 1시간 이하의 거리, 센트럴 코스트는 도시 거주자들이 해변 나들이, 숲 산책, 물가에서의 퍼브 점심을 즐기는 곳입니다. 여러 해변은 생태관광 인증을 가지고 있습니다 — 보호받고, 깨끗고, 조용히 황홀합니다. 브리즈베인 워터 내셔날 파크에는 환상적인 경관의 해안 트레일이 있고, 방문할 만한 미술관이 20개 이상 있습니다."
    },
    highlights: [
      { en: "Ecotourism beaches", ko: "생태관광 해변", icon: "beach" },
      { en: "Brisbane Water National Park", ko: "브리즈베인 워터 내셔날 파크", icon: "hiking" },
      { en: "Pearl Beach & Box Head track", ko: "펄 비치 & 박스 헤드 트레크", icon: "mountain" },
      { en: "Art trail & local galleries", ko: "아트 트레일 & 현지 미술관", icon: "museum" },
    ],
    bestTime: { en: "Year-round — autumn for bushwalks, summer for beaches", ko: "년 내내 — 가을에는 숲 산책, 여름에는 해변" },
    gettingThere: { en: "Train on the Central Coast Newcastle Line from Central to Gosford or Wyong (1–1.5hrs, $9 Opal). Drive via the M1.", ko: "센트럴 코스트 뉴캐슬 라인 타고 센트럴에서 고스퍼드/와이옹까지 (1~1.5시간, $9 오팔). M1 이용 운전." },
    suggestedDays: { en: "1–2 days (day trip or quiet weekend)", ko: "1~2일 (당일치기 또는 조용한 주말)" },
  },
  {
    slug: "byron-bay",
    name: { en: "Byron Bay", ko: "바이론 베이" },
    tagline: { en: "Australia's most famous beach town", ko: "호주에서 가장 유명한 해변 타운" },
    // Cape Byron Lighthouse + Wategos Bay — Wikimedia Commons (CC BY-SA)
    heroImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Wategos_Bay_and_the_Byron_Bay_Lighthouse.jpg/1280px-Wategos_Bay_and_the_Byron_Bay_Lighthouse.jpg",
    cardImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Wategos_Bay_and_the_Byron_Bay_Lighthouse.jpg/960px-Wategos_Bay_and_the_Byron_Bay_Lighthouse.jpg",
    accentColor: "bg-orange-500",
    region: "Northern NSW",
    tripLength: "longer",
    description: {
      en: "Australia's most famous beach town sits at the easternmost point of the mainland, where the lighthouse looks out across the Pacific. Byron combines surf culture, rainforests, farm-to-table food, and a genuinely relaxed pace of life. Cape Byron walking track takes you past the lighthouse, kangaroos on the headland, and spectacular coastal views. The hinterland has waterfalls, crystal-clear swimming holes, and the famous Crystal Castle.",
      ko: "호주에서 가장 유명한 해변 타운은 본토 최동단 끝에 자리잡고, 등대가 태평양을 바라봅니다. 바이론은 서핑 문화, 열대우림, 농장에서 식탁으로 이어지는 음식, 그리고 진정한 여유로운 삶의 속도를 결합합니다. 케이프 바이론 워킹 트랙은 등대, 헤드랜드의 캥거루, 그리고 환상적인 해안 경치를 지나갑니다. 내륙에는 폭포, 수정같이 맑은 수영장, 그리고 유명한 크리스털 캐슬이 있습니다."
    },
    highlights: [
      { en: "Cape Byron Lighthouse & walking track", ko: "케이프 바이런 등대 & 워킹 트랙", icon: "mountain" },
      { en: "Surfing at Main Beach or The Pass", ko: "메인 비치 또는 더 패스 서핑", icon: "swim" },
      { en: "Hinterland waterfalls & swimming holes", ko: "내륙 폭포 & 수영장", icon: "swim" },
      { en: "Farmers markets & organic food", ko: "파머스 마켓 & 유기농 음식", icon: "utensils" },
    ],
    bestTime: { en: "Sep–Nov (whales + warm, fewer crowds) or Mar–May (warm sea)", ko: "9~11월 (고래 + 따뜻하고 한산) 또는 3~5월 (따뜻한 바다)" },
    gettingThere: { en: "Fly Sydney→Ballina (1hr, $100–200), then shuttle (30min). Or drive via Pacific Hwy (8–9hrs).", ko: "시드니→발리나 항공 (1시간, $100~200) 후 셔틀 (30분). 또는 퍼시픽 하이웨이 운전 (8~9시간)." },
    suggestedDays: { en: "4–7 days (weekend minimum, week unlocks the hinterland)", ko: "4~7일 (최소 주말, 일주일이면 내륙까지)" },
  },
  {
    slug: "jervis-bay",
    name: { en: "Jervis Bay", ko: "저비스 베이" },
    tagline: { en: "White sand, dolphins & kangaroos on the beach", ko: "하얀 모래, 돌고래, 해변의 캥거루" },
    // Aerial view of Jervis Bay — Wikimedia Commons (CC BY-SA)
    heroImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jervisbayabove.jpg/1280px-Jervisbayabove.jpg",
    cardImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jervisbayabove.jpg/960px-Jervisbayabove.jpg",
    accentColor: "bg-cyan-500",
    region: "South Coast, NSW",
    tripLength: "weekend",
    description: {
      en: "About 2.5 hours south of Sydney, Jervis Bay is famous for three things: the whitest sand in Australia (Hyams Beach, technically a separate bay), resident dolphins you can swim with, and the only place in NSW where kangaroos regularly hop along the beach at dawn and dusk. Add Booderee National Park's white-sand beaches, the white-cliff Green Patch, and stunning bushwalks, and you have one of the most unique coastal experiences in Australia.",
      ko: "시드니에서 남쪽으로 약 2.5시간, 저비스 베이에는 세 가지가 유명합니다: 호주에서 가장 흰 모래 (하임스 비치, 엄밀히는 별도 만), 함께 수영할 수 있는 상주 돌고래, 그리고 NSW에서 캥거루가 새벽과 황혼에 해변을 따라 이동하는 유일한 장소. 부디리 내셔널 파크의 하얀 모래 해변, 하얀 절벽 그린 패치, 환상적인 숲 산책을 더하면 호주에서 가장 독특한 해안 ���험 중 하나가 됩니다."
    },
    highlights: [
      { en: "Hyams Beach (whitest sand in Australia)", ko: "하임스 비치 (호주에서 가장 흰 모래)", icon: "beach" },
      { en: "Swim with wild dolphins", ko: "야생 돌고래와 수영", icon: "swim" },
      { en: "Kangaroos on the beach at dawn", ko: "새벽 해변의 캥거루", icon: "wheat" },
      { en: "Booderee National Park bushwalks", ko: "부디리 내셔널 파크 산책", icon: "hiking" },
    ],
    bestTime: { en: "Sep–May (warm water for swimming); dawn/dusk for kangaroos year-round", ko: "9~5월 (수영 따뜻한 바다); 캥거루는 연중 새벽/황혼" },
    gettingThere: { en: "Drive via Princes Hwy south to Huskisson (2.5hrs). No direct train — car or tour bus only.", ko: "프린스 하이웨이 남쪽으로 허스키슨까지 운전 (2.5시간). 직행 기차 없음 — 자동차 또는 투어 버스만." },
    suggestedDays: { en: "2–3 days (weekend works well)", ko: "2~3일 (주말이면 충분)" },
  },
  {
    slug: "wollongong",
    name: { en: "Wollongong & Grand Pacific Drive", ko: "울런공 & 그랜드 퍼시픽 드라이브" },
    tagline: { en: "Sea cliff bridge & an easy coastal escape", ko: "시클리프 브리지와 가벼운 해안 여행" },
    // Sea Cliff Bridge from air, Grand Pacific Drive — Wikimedia Commons (CC BY-SA)
    heroImg: "https://upload.wikimedia.org/wikipedia/commons/7/73/Sea_Cliff_Bridge_from_air.jpg",
    cardImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Sea_Cliff_Bridge_from_air.jpg/960px-Sea_Cliff_Bridge_from_air.jpg",
    accentColor: "bg-indigo-500",
    region: "South Coast, NSW",
    tripLength: "day",
    description: {
      en: "Just an hour south of Sydney, Wollongong is NSW's third-largest city but feels more like a beach town. The famous Sea Cliff Bridge arches out over the ocean and is one of Australia's most photographed coastal roads. Beyond the bridge: the Illawarra escarpment's waterfalls, the Buddhist Nan Tien Temple (the largest in the southern hemisphere), and a string of surf beaches that locals keep quiet about.",
      ko: "시드니에서 남쪽으로 단 1시간, 울런공은 NSW에서 세 번째로 큰 도시지만 해변 타운처럼 느껴집니다. 유명한 시 클리프 브리지는 바다 위로 아치형으로 뻗어 호주에서 가장 많이 사진에 담기는 해안 도로 중 하나입니다. 브리지 너머: 일라와라 고원의 폭포, 남반구에서 가장 큰 불교 사찰 난 티엔 사원, 그리고 현지인만 아는 서핑 해변들이 있습니다."
    },
    highlights: [
      { en: "Sea Cliff Bridge drive", ko: "시 클리프 브리지 드라이브", icon: "car" },
      { en: "Nan Tien Temple (largest in southern hemisphere)", ko: "난 티엔 사원 (남반구 최대)", icon: "museum" },
      { en: "Illawarra escarpment waterfalls", ko: "일라와라 고원 폭포", icon: "swim" },
      { en: "Austinmer & Thirroul surf beaches", ko: "오스틴머 & 시룰 서핑 비치", icon: "swim" },
    ],
    bestTime: { en: "Year-round — autumn for the waterfalls, summer for beaches", ko: "년 내내 — 가을에는 폭포, 여름에는 해변" },
    gettingThere: { en: "Drive via the M1 (1hr). Train from Central to Wollongong (1.5hrs, $8 Opal).", ko: "M1 이용 운전 (1시간). 센트럴에서 울런공까지 기차 (1.5시간, $8 오팔)." },
    suggestedDays: { en: "1 day (drive the bridge + temple + beach) or a relaxed weekend", ko: "1일 (브리지+사원+해변 드라이브) 또는 여유로운 주말" },
  },
  {
    slug: "port-stephens",
    name: { en: "Port Stephens", ko: "포트 스테판스" },
    tagline: { en: "Dolphin capital & the biggest sand dunes in the southern hemisphere", ko: "돌고래의 수도와 남반구 최대 사구" },
    // Nelson Bay, the main town at Port Stephens — Wikimedia Commons (CC BY-SA)
    heroImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Nelsonbay.JPG/1280px-Nelsonbay.JPG",
    cardImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Nelsonbay.JPG/960px-Nelsonbay.JPG",
    accentColor: "bg-blue-500",
    region: "Hunter Region, NSW",
    tripLength: "weekend",
    description: {
      en: "About 2.5 hours north of Sydney, Port Stephens is famous for two things that delight visitors of all ages: reliable wild dolphin encounters (over 140 bottlenose dolphins live in the bay year-round) and the Stockton Bight Sand Dunes — the largest moving sand dunes in the southern hemisphere, where you can sandboard down 30-metre slopes. Add snorkelling at Fly Point, fishing in Nelson Bay, and a slower pace than the Hunter wineries for a perfect family-friendly weekend.",
      ko: "시드니에서 북쪽으로 약 2.5시간, 포트 스테판스는 모든 연령의 방문자를 기쁘게 하는 두 가지로 유명합니다: 안정적인 야생 돌고래 만남 (연중 140마리 이상의 병코 돌고래가 만에 서식)과 스톡턴 바이트 사구 — 남반구에서 가장 큰 움직이는 사구로, 30미터 경사면을 샌드보드 탈 수 있습니다. 플라이 포인트의 스노클링, 넬슨 베이에서의 낚시, 헌터 와이너리보다 느린 속도를 더하면 가족 친화적인 완벽한 주말이 됩니다."
    },
    highlights: [
      { en: "Dolphin-watching cruises", ko: "돌고래 관람 크루즈", icon: "swim" },
      { en: "Stockton Bight sand dunes (sandboarding)", ko: "스톡턴 바이트 사구 (샌드보드)", icon: "mountain" },
      { en: "Snorkelling at Fly Point", ko: "플라이 포인트 스노클링", icon: "swim" },
      { en: "Nelson Bay fishing village", ko: "넬슨 베이 어촌", icon: "utensils" },
    ],
    bestTime: { en: "Sep–May for warm water; year-round for dolphins", ko: "따뜻한 바다는 9~5월; 돌고래는 연중" },
    gettingThere: { en: "Drive via M1 (2.5hrs). No direct train — coach from Newcastle or car only.", ko: "M1 운전 (2.5시간). 직행 기차 없음 — 뉴캐슬에서 버스 또는 자동차만." },
    suggestedDays: { en: "2–3 days (weekend with dolphin cruise + dunes)", ko: "2~3일 (돌고래 크루즈와 사구를 위한 주말)" },
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find(d => d.slug === slug);
}
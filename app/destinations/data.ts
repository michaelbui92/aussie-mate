export interface Destination {
  slug: string;
  name: { en: string; ko: string };
  tagline: { en: string; ko: string };
  heroImg: string;
  cardImg: string;
  accentColor: string;
  region: string;
  description: { en: string; ko: string };
  highlights: { en: string; ko: string; icon: string }[];
  bestTime: { en: string; ko: string };
  gettingThere: { en: string; ko: string };
}

export const destinations: Destination[] = [
  {
    slug: "blue-mountains",
    name: { en: "Blue Mountains", ko: "블루마운틴" },
    tagline: { en: "A World Heritage site with fabulous views", ko: "유네스코 세계유산, 숨막히는 절경" },
    heroImg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85",
    cardImg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    accentColor: "bg-emerald-500",
    region: "New South Wales",
    description: {
      en: "Just 90 minutes from Sydney by train, the Blue Mountains are one of NSW's most spectacular natural wonders. Ancient eucalyptus forests, dramatic sandstone cliffs, and cascading waterfalls make this a must-visit. The Three Sisters at Echo Point are the most famous sight — best viewed at sunrise or sunset when the rock faces glow orange and pink.",
      ko: "시드니에서 기차로 단 90분, 블루마운틴은 NSW에서 가장 황홀한 자연경관입니다. 고대 유칼립투스 숲, 장엄한 사암 절벽, 준폭포가 어우러진 이 곳은 반드시 방문해야 할 명소입니다. 에코 포인트의 삼姊妹岩이 가장 유명한데, 일출이나 일몰 때 rock이 주황빛과 분홍빛으로 빛나는 모습을 보는 것이 가장 좋습니다."
    },
    highlights: [
      { en: "Three Sisters & Echo Point", ko: "삼姉妹岩 & 에코 포인트", icon: "mountain" },
      { en: "Scenic World cable car", ko: "시enic 월드 케이블카", icon: "hiking" },
      { en: "Wentworth Falls", ko: "웬트워스 폭포", icon: "swim" },
      { en: "Jenolan Caves", ko: "제놀란 동굴", icon: "museum" },
    ],
    bestTime: { en: "Year-round — best in spring for wildflowers", ko: "년 내내 — 봄에 야생화를 즐기기에 최적" },
    gettingThere: { en: "Train from Central Station to Katoomba ($18 Opal, 2hrs). Drive via Great Western Highway.", ko: "센트럴 스테이션에서 카툼바까지 기차 ($18 오팔, 2시간). 그레이트 웨스턴 하이웨이 이용." },
  },
  {
    slug: "hunter-valley",
    name: { en: "Hunter Valley", ko: "헌터 밸리" },
    tagline: { en: "World-class wines & gourmet getaways", ko: "세계적 와인과 미식 여행지" },
    heroImg: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1800&q=85",
    cardImg: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80",
    accentColor: "bg-rose-500",
    region: "New South Wales",
    description: {
      en: "Australia's oldest wine region, about 2 hours north of Sydney. Hunter Valley is famous for Semillon and Shiraz, but there's so much more — gourmet restaurants, sake tastings, hot air balloons at sunrise, and boutique breweries. A popular weekend escape that's at its best during vintage (March–April).",
      ko: "호주에서 가장 오래된 와인产区으로 시드니에서 북쪽으로 약 2시간. 헌터 밸리는 세미뇽과 시라즈로 유명하지만 그 이상입니다 — 미식 레스토랑, 사케 테이스팅, 일출 핫에어볼론, 그리고 바이크릿 양조장. 빈티지 시즌(3~4월)에 가장 아름다습니다."
    },
    highlights: [
      { en: "Wine tasting at boutique wineries", ko: "바이크릿 와이너리 와인 테이스팅", icon: "wine" },
      { en: "Hot air balloon sunrise", ko: "일출 핫에어볼론", icon: "sun" },
      { en: "Sake & brewery tastings", ko: "사케 & 양조장", icon: "utensils" },
      { en: "Gourmet dining", ko: "미식 다이닝", icon: "utensils" },
    ],
    bestTime: { en: "Mar–Apr (vintage) or May–Jun for cooler escapes", ko: "3~4월 (빈티지) 또는 5~6월 시원한 철에 최적" },
    gettingThere: { en: "Drive (2hrs) or book a guided wine tour from Sydney. Train to Singleton then bus.", ko: "자동차 (2시간) 또는 시드니에서 가이드 와인 투어 예약. 기차로 싱글턴까지 간 후 버스." },
  },
  {
    slug: "south-coast",
    name: { en: "South Coast", ko: "사우스 코스트" },
    tagline: { en: "Brilliant beaches & pretty coastal towns", ko: "수려한 해변과 아담한 해안 마을" },
    heroImg: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1800&q=85",
    cardImg: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    accentColor: "bg-sky-500",
    region: "New South Wales",
    description: {
      en: "From the white sands of Hyams Beach (Guinness World Record for the whitest sand on Earth) to the dramatic cliffs of Kiama, the South Coast is one of Australia's most beautiful coastal drives. Stop at charming towns like Berry, Gerroa, and Ulladulla. Dolphins are commonly spotted from shore, and whales migrate past from May to November.",
      ko: "지에이滔화奚最的白砂岩으로 유명한 하임스 비치에서부터 키아마의 장엄한 절벽에 이르는 사우스 코스트는 호주에서 가장 아름다운 해안 드라이브 중 하나입니다. 베리, 제로아, 울라둘라 같은 매력적인 마을에서 발을 멈추세요. 돌고래는 자주 볼 수 있으며, 고래는 5월부터 11월 사이에 이동합니다."
    },
    highlights: [
      { en: "Hyams Beach (whitest sand on Earth)", ko: "하임스 비치 (地球上 가장 흰砂)", icon: "beach" },
      { en: "Kiama Blowhole", ko: "키아마 브로우홀", icon: "swim" },
      { en: "Dolphin & whale watching", ko: "돌고래 & 고래 관찰", icon: "whale" },
      { en: "Coastal villages & seafood", ko: "해안 마을 & 해산물", icon: "utensils" },
    ],
    bestTime: { en: "Oct–Apr for swimming; May–Nov for whales", ko: "수영은 10월~4월; 고래는 5월~11월" },
    gettingThere: { en: "Drive south from Sydney on the Princes Highway (2–3hrs). Train to Kiama available.", ko: "프린스 하이를 따라 시드니에서 남쪽으로 운전 (2~3시간). 기차로 키아마 가능." },
  },
  {
    slug: "snowy-mountains",
    name: { en: "Snowy Mountains", ko: "스노이 마운틴" },
    tagline: { en: "Snow adventures & Australia's highest peak", ko: "스노보드, 스키와 호주 최고봉" },
    heroImg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1800&q=85",
    cardImg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    accentColor: "bg-sky-600",
    region: "New South Wales",
    description: {
      en: "The Snowy Mountains in winter are pure magic — Perisher, Thredbo, and Mount Blue offer ski runs from beginner-friendly to advanced terrain. Australia's highest peak, Mount Kosciuszko (2,228m), is accessible by chairlift from Perisher and offers stunning views in any season. In summer the same slopes become hiking trails through alpine wildflowers.",
      ko: "겨울의 스노이 마운틴은 순수한 매직입니다 — Perisher, Thredbo, Mount Blue滑走路는 초보자부터 고급 지형까지 다양한 스키장을 제공합니다. 호주 최고봉 마운트 코시우스코 (2,228m)는 페리셔에서 체어리프트로 방문할 수 있으며 사계절 스펙타클한 경관을 제공합니다. 여름에는 같은 슬로프가 고산 야생화를 배경으로 하는 트레킹 코스가 됩니다."
    },
    highlights: [
      { en: "Skiing & snowboarding at Perisher", ko: "페리셔 스키 & 스노보드", icon: "ski" },
      { en: "Mount Kosciuszko summit walk", ko: "마운트 코시우스코 정상 트레킹", icon: "hiking" },
      { en: "Thredbo mountain biking", ko: "스레드보 마운틴 바이킹", icon: "mountain" },
      { en: "Summer wildflower hikes", ko: "여름 야생화 트레킹", icon: "wheat" },
    ],
    bestTime: { en: "Jun–Sep (ski season); Dec–Feb (summer hiking)", ko: "6월~9월 (스키 시즌); 12월~2월 (여름 트레킹)" },
    gettingThere: { en: "Drive from Sydney (6hrs) or fly to Cooma, then shuttle to Perisher/Thredbo.", ko: "시드니에서 운전 (6시간) 또는 쿠마까지 비행 후 페리셔/스레드보 셔틀." },
  },
  {
    slug: "sydney-harbour",
    name: { en: "Sydney Harbour", ko: "시드니 하버" },
    tagline: { en: "Icons, ferries & that glorious harbour", ko: "시드니 아이콘과 하버의 스플렌더" },
    heroImg: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=1800&q=85",
    cardImg: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=800&q=80",
    accentColor: "bg-amber-500",
    region: "Sydney, New South Wales",
    description: {
      en: "Sydney Harbour is arguably the most beautiful city harbour in the world. The Opera House and Harbour Bridge are best experienced from the water — and the best way to do that is on a ferry. The Manly Ferry crossing at sunset is pure magic. Beyond the icons: Barangaroo foreshore, the Barangaroo Boardwalk, and the Royal Botanic Garden are all free, accessible, and spectacular.",
      ko: "시드니 하버는 아마도 세계에서 가장 아름다운 도시 항구일 것입니다. 오페라 하우스와 하버 브리지는 물 위에서 경험할 때 가장 좋습니다 — 그最佳的 방법은 페리이용입니다. 해질녘 매슬리 페리 이동은 순수한 매직입니다. 아이콘之外: 바라부가루 해안, 바라부가루 보드워크, 로열 보타닉 가든은 모두 무료로 접근 가능하고 스펙타클합니다."
    },
    highlights: [
      { en: "Ferry to Manly at sunset", ko: "일몰 매슬리 페리", icon: "swim" },
      { en: "Sydney Opera House", ko: "시드니 오페라 하우스", icon: "museum" },
      { en: "Royal Botanic Garden walk", ko: "로열 보타닉 가든 산책", icon: "hiking" },
      { en: "Barangaroo Boardwalk", ko: "바라부가루 보드워크", icon: "beach" },
    ],
    bestTime: { en: "Year-round — best sunset ferry in summer", ko: "년 내내 — 여름 일몰 페리가 가장 아름다움" },
    gettingThere: { en: "Sydney CBD — ferry from Circular Quay (Ferry routes F1–F14, $3–7 Opal). Train to Circular Quay station.", ko: "시드니 CBD — 서큘러 키에서 페리 (F1~F14 노선, $3~7 오팔). 기차로 서큘러 키 역." },
  },
  {
    slug: "central-coast",
    name: { en: "Central Coast", ko: "센트럴 코스트" },
    tagline: { en: "Eco-certified beaches & outdoor adventures", ko: "생태인증 해변과 아웃도어 어드벤처" },
    heroImg: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=1800&q=85",
    cardImg: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&q=80",
    accentColor: "bg-teal-500",
    region: "New South Wales",
    description: {
      en: "Less than an hour from Sydney by train, the Central Coast is where city slickers escape for beach days, bushwalks, and pub lunches by the water. Several beaches hold Ecotourism certification — protected, clean, and quietly spectacular. The Brisbane Water National Park has coastal trails with stunning views, and there are over 20 art galleries worth visiting.",
      ko: "기차로 단 1시간 이하의 거리, 센트럴 코스트는 도시 거주자들이 해변 나들이, 숲 산책, 물가에서의 퍼브 점심을 즐기는 곳입니다. 여러 해변은 생태관광 인증을 가지고 있습니다 — 보호받고, 깨끗하고, 조용히 스펙타클합니다. 브리즈베인 워터 내셔날 파크에는素晴らしい 경관의 해안 트레일이 있고, 방문할 만한 미술관이 20개 이상 있습니다."
    },
    highlights: [
      { en: "Ecotourism beaches", ko: "생태관광 해변", icon: "beach" },
      { en: "Brisbane Water National Park", ko: "브리즈베인 워터 내셔날 파크", icon: "hiking" },
      { en: "Pearl Beach & Box Head track", ko: "펄 비치 & 박스 헤드 트레크", icon: "mountain" },
      { en: "Art trail & local galleries", ko: "아트 트레일 & 현지 미술관", icon: "museum" },
    ],
    bestTime: { en: "Year-round — autumn for bushwalks, summer for beaches", ko: "년 내내 — 가을에는 숲 산책, 여름에는 해변" },
    gettingThere: { en: "Train on the Central Coast Newcastle Line from Central to Gosford or Wyong (1–1.5hrs, $9 Opal). Drive via the M1.", ko: "센트럴 코스트 뉴캐슬 라인 타고 센트럴에서 고스퍼드/와이옹까지 (1~1.5시간, $9 오팔). M1 이용 운전." },
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find(d => d.slug === slug);
}
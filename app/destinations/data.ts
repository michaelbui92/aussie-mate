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
  /** Deeper dive into the top sights — name, 1-2 sentence blurb, time on site,
   *  rough cost. Optional: destinations without this field skip the section. */
  attractions?: {
    name: { en: string; ko: string };
    blurb: { en: string; ko: string };
    time: { en: string; ko: string };
    cost: { en: string; ko: string };
  }[];
}

export const destinations: Destination[] = [
  {
    slug: "blue-mountains",
    name: { en: "Blue Mountains", ko: "블루마운틴" },
    tagline: { en: "A World Heritage site with fabulous views", ko: "유네스코 세계유산, 숨막히는 절경" },
    heroImg: "/images/pexels-1261728.jpg?auto=compress&cs=tinysrgb&w=1800&q=85",
    cardImg: "/images/pexels-1261728.jpg?auto=compress&cs=tinysrgb&w=800&q=80",
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
    gettingThere: { en: "Train from Central Station to Katoomba ($18 AUD Opal, 2hrs). Drive via Great Western Highway.", ko: "센트럴 스테이션에서 카툼바까지 기차 ($18 AUD 오팔, 2시간). 그레이트 웨스턴 하이웨이 이용." },
    suggestedDays: { en: "1–2 days (long day trip or one overnight)", ko: "1~2일 (당일 또는 1박)" },
    attractions: [
      {
        name: { en: "Three Sisters & Echo Point", ko: "삼자매 & 에코 포인트" },
        blurb: {
          en: "The iconic three-rock formation at Echo Point lookout. Best at sunrise or sunset when the sandstone glows orange and pink. Flat walk from Katoomba Station.",
          ko: "에코 포인트 전망대의 상징적인 세 바위 형상. 일출이나 일몰에 사암이 주황빛과 분홍빛으로 빛날 때 가장 아름다움. 카툼바역에서 평지 산책.",
        },
        time: { en: "1–2 hrs", ko: "1~2시간" },
        cost: { en: "Free", ko: "무료" },
      },
      {
        name: { en: "Scenic World", ko: "시니악 월드" },
        blurb: {
          en: "Cable car, glass-floor skyway, and the steepest passenger railway in the world through old-growth rainforest. The Discovery Pass covers all three rides.",
          ko: "구름 낀 옛날 비옥림을 지나는 케이블카, 유리 바닥 스카이웨이, 세계에서 가장 가파른 여객 열차. 디스커버리 패스로 3가지 탑승 모두 이용 가능.",
        },
        time: { en: "2–3 hrs", ko: "2~3시간" },
        cost: { en: "From $55 AUD (Discovery Pass)", ko: "$55 AUD부터 (디스커버리 패스)" },
      },
      {
        name: { en: "Wentworth Falls", ko: "웬트워스 폭포" },
        blurb: {
          en: "A 187m waterfall at the end of a well-graded track. The National Pass walks along the cliff edge to the base of the falls — one of the best half-day walks in NSW.",
          ko: "잘 정비된 트랙 끝에 있는 187m 폭포. 내셔널 패스는 절벽 끝을 따라 폭포 아래까지 이어지며, NSW 최고의 반일 하이킹 코스 중 하나.",
        },
        time: { en: "2–3 hrs (return)", ko: "2~3시간 (왕복)" },
        cost: { en: "Free (national park)", ko: "무료 (국립공원)" },
      },
      {
        name: { en: "Jenolan Caves", ko: "제놀란 동굴" },
        blurb: {
          en: "One of the oldest cave systems in the world, about 90 minutes' drive from Katoomba. Guided tours only — Lucas Cave and Imperial Cave are the most spectacular.",
          ko: "카툼바에서 차로 약 90분 거리에 있는 세계에서 가장 오래된 동굴 시스템 중 하나. 가이드 투어만 가능 — 루카스 동굴과 임페리얼 동굴이 가장 화려하다.",
        },
        time: { en: "2–4 hrs (incl. drive)", ko: "2~4시간 (운전 포함)" },
        cost: { en: "From $49 AUD (guided tour)", ko: "$49 AUD부터 (가이드 투어)" },
      },
    ],
  },
  {
    slug: "hunter-valley",
    name: { en: "Hunter Valley", ko: "헌터 밸리" },
    tagline: { en: "World-class wines & gourmet getaways", ko: "세계적 와인과 미식 여행지" },
    heroImg: "/images/pexels-442116.jpg?auto=compress&cs=tinysrgb&w=1800&q=85",
    cardImg: "/images/pexels-442116.jpg?auto=compress&cs=tinysrgb&w=800&q=80",
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
    attractions: [
      {
        name: { en: "Audrey Wilkinson Winery", ko: "오드리 윌킨슨 와이너리" },
        blurb: {
          en: "One of the Hunter's oldest wineries (1866), with cellar-door tastings of Semillon and Shiraz overlooking the Brokenback Range. Picnic lawn included.",
          ko: "헌터에서 가장 오래된 와이너리 중 하나(1866), 브로큰백 산맥을 바라보며 세미뇽과 시라즈 테이스팅. 피크닉 잔디밭 포함.",
        },
        time: { en: "1–2 hrs", ko: "1~2시간" },
        cost: { en: "$15–$25 AUD (tasting flight)", ko: "$15~$25 AUD (테이스팅 콩보)" },
      },
      {
        name: { en: "Hunter Valley Gardens", ko: "헌터 밸리 가든" },
        blurb: {
          en: "60+ acres of themed gardens — Storybook, Rose, Sunken — plus a 3-day Christmas Lights event during winter that draws families from across NSW.",
          ko: "60에이커가 넘는 테마 가든 — 동화, 장미, sunken — 겨울에는 3일간 진행되는 크리스마스 라이트 이벤트가 NSW 전역에서 가족 단위 방문객을 끌어모읍니다.",
        },
        time: { en: "2–4 hrs", ko: "2~4시간" },
        cost: { en: "$32 AUD adult / $19 AUD child", ko: "성인 $32 AUD / 어린이 $19 AUD" },
      },
      {
        name: { en: "Hot air balloon at sunrise", ko: "일출 핫에어볼론" },
        blurb: {
          en: "Balloon Aloft and Beyond Ballooning both run 1hr sunrise flights over the vineyards, with a champagne breakfast on landing. Book ahead — these sell out weekends.",
          ko: "Balloon Aloft와 Beyond Ballooning 모두 포도원 위에서 1시간 일출 비행을 운영하며, 착륙 후 샴페인 조식 제공. 사전 예약 필수 — 주말에는 매진.",
        },
        time: { en: "3–4 hrs (incl. breakfast)", ko: "3~4시간 (조식 포함)" },
        cost: { en: "From $335 AUD per person", ko: "1인 $335 AUD부터" },
      },
    ],
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
    attractions: [
      {
        name: { en: "Hyams Beach", ko: "하임스 비치" },
        blurb: {
          en: "Recorded by Guinness World Records as having the whitest sand in the world — calm bay water, gentle entry, best for swimming. 2hr drive from Sydney.",
          ko: "세계에서 가장 흰 모래로 기네스북에 등재 — 잔잔한 만, 완만한 입수, 수영 최적. 시드니에서 2시간 운전.",
        },
        time: { en: "Half day", ko: "반나절" },
        cost: { en: "Free", ko: "무료" },
      },
      {
        name: { en: "Kiama Blowhole", ko: "키아마 브로우홀" },
        blurb: {
          en: "A sea cave that fires spray up to 30m on big swells — best after a southerly. Free viewing platforms 5 minutes from Kiama town centre and the train station.",
          ko: "큰 파도 시 30m 까지 물을 뿜어대는 해식동남 — 남풍 후가 최고. 키아마 중심가·역에서 도보 5분 거리의 무료 전망대.",
        },
        time: { en: "1 hr", ko: "1시간" },
        cost: { en: "Free", ko: "무료" },
      },
      {
        name: { en: "Berry village & dairy stops", ko: "베리 마을 & 유제품" },
        blurb: {
          en: "Pretty inland village south of Kiama with a bakery main street and the South Coast dairy-farm cluster — try the local cheese and the fig-and-vinegar people pick up every trip.",
          ko: "키아마 남쪽 내륙의 아담한 마을로 베이커리가 즐비한 메인 거리와 사우스 코스트 낙농 단지 — 현지 치즈와 무화과 식초를 꼭 둘러보세요.",
        },
        time: { en: "2–3 hrs", ko: "2~3시간" },
        cost: { en: "Free to walk; tastings $5–$10 AUD", ko: "산책 무료; 테이스팅 $5~$10 AUD" },
      },
    ],
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
    attractions: [
      {
        name: { en: "Perisher or Thredbo ski day", ko: "페리셔 또는 스레드보 스키 데이" },
        blurb: {
          en: "Australia's two largest ski resorts — Perisher is the larger, Thredbo's village has the more European feel. Full-day lift + lesson + gear packages start around $200 AUD for adults in peak season.",
          ko: "호주의 두 대형 스키 리조트 — 페리셔가 규모가 크고, 스레드보의 빌리지는 유럽 스키 타운 느낌. 성인 1일 리프트 + 강습 + 장비 패키지는 피크시즌에 $200 AUD부터.",
        },
        time: { en: "Full day", ko: "종일" },
        cost: { en: "From $200 AUD (lift + lesson + gear)", ko: "$200 AUD부터 (리프트 + 강습 + 장비)" },
      },
      {
        name: { en: "Mount Kosciuszko summit walk", ko: "마운트 코시우스코 정상 트레킹" },
        blurb: {
          en: "Australia's highest peak at 2,228m — 13km return from the Thredbo top station, mostly metal walkway, accessible to anyone in good hiking shoes. Best Dec–Feb once the snow melts.",
          ko: "호주 최고봉 2,228m — 스레드보 정상역에서 13km 왕복, 대부분 금속 데크 길, 좋은 등산화면 누구나 가능. 12~2월(적설 없는 시기) 최적.",
        },
        time: { en: "4–5 hrs (return)", ko: "4~5시간 (왕복)" },
        cost: { en: "From $36 AUD (lift ticket; otherwise walk up)", ko: "$36 AUD부터 (리프트; 또는 도보)" },
      },
      {
        name: { en: "Yarrangobilly River thermal pool", ko: "야란고빌리 강 온천" },
        blurb: {
          en: "A natural thermal spring set into a limestone canyon in Kosciuszko National Park — 27°C year-round, 30min walk down a forest trail from the parking area. Combine with the Snowy drive-home stop.",
          ko: "코시우스코 국립공원 내 석회암 캐년의 자연 온천 — 연중 27°C, 주차장에서 삼림 트레일 30분 도보. 스노위 드라이브 마무리 코스.",
        },
        time: { en: "2–3 hrs (incl. walk)", ko: "2~3시간 (산책 포함)" },
        cost: { en: "Free", ko: "무료" },
      },
    ],
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
    gettingThere: { en: "Sydney CBD — ferry from Circular Quay (Ferry routes F1–F14, $3 AUD–7 Opal). Train to Circular Quay station.", ko: "시드니 CBD — 서큘러 키에서 페리 (F1~F14 노선, $3 AUD~7 오팔). 기차로 서큘러 키 역." },
    suggestedDays: { en: "1–2 days (most of it on foot + ferries)", ko: "1~2일 (도보와 페리로 대부분)" },
    attractions: [
      {
        name: { en: "Manly ferry crossing", ko: "매슬리 페리" },
        blurb: {
          en: "The 30-minute trip from Circular Quay to Manly Wharf is the cheapest harbour cruise in Sydney ($4 AUD Opal). Sit on the right side heading out for the Opera House shot.",
          ko: "서큘러 키에서 매슬리 부두까지 30분 — 시드니에서 가장 저렴한 하버 크루즈 ($4 AUD 오팔). 출발 시 오른쪽에 앉으면 오페라 하우스 사진을 잡을 수 있어요.",
        },
        time: { en: "1 hr (round trip)", ko: "1시간 (왕복)" },
        cost: { en: "$3–$7 AUD Opal", ko: "$3~$7 AUD 오팔" },
      },
      {
        name: { en: "Sydney Opera House tour", ko: "시드니 오페라 하우스 투어" },
        blurb: {
          en: "30-minute guided tour of the inside of the Opera House — books open 2–3 months ahead for $50 AUD. The 1-hr 'Behind the Scenes' tour runs when a show is dark.",
          ko: "오페라 하우스 내부 30분 가이드 투어 — $50 AUD에 2~3개월 전부터 예약. 공연 없는 날에는 1시간 'Behind the Scenes' 투어 운영.",
        },
        time: { en: "1 hr", ko: "1시간" },
        cost: { en: "From $50 AUD", ko: "$50 AUD부터" },
      },
      {
        name: { en: "Royal Botanic Garden walk", ko: "로열 보타닉 가든 산책" },
        blurb: {
          en: "30-hectare garden in the heart of the city — free entry, with the Woolloomooloo Gate to Mrs Macquarie's Chair walk taking 1 hour and giving the postcard Opera House shot.",
          ko: "시드니 중심의 30헥타르 정원 — 무료 입장, Woolloomooloo Gate에서 Mrs Macquarie's Chair까지 1시간 산책으로 엽서 풍경 사진을 잡을 수 있어요.",
        },
        time: { en: "1–2 hrs", ko: "1~2시간" },
        cost: { en: "Free", ko: "무료" },
      },
    ],
  },
  {
    slug: "central-coast",
    name: { en: "Central Coast", ko: "센트럴 코스트" },
    tagline: { en: "Eco-certified beaches & outdoor adventures", ko: "생태인증 해변과 아웃도어 어드벤처" },
    heroImg: "/images/pexels-6256449.jpg?auto=compress&cs=tinysrgb&w=1800&q=85",
    cardImg: "/images/pexels-6256449.jpg?auto=compress&cs=tinysrgb&w=800&q=80",
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
    gettingThere: { en: "Train on the Central Coast Newcastle Line from Central to Gosford or Wyong (1–1.5hrs, $9 AUD Opal). Drive via the M1.", ko: "센트럴 코스트 뉴캐슬 라인 타고 센트럴에서 고스퍼드/와이옹까지 (1~1.5시간, $9 AUD 오팔). M1 이용 운전." },
    suggestedDays: { en: "1–2 days (day trip or quiet weekend)", ko: "1~2일 (당일치기 또는 조용한 주말)" },
    attractions: [
      {
        name: { en: "Pearl Beach & Box Head track", ko: "펄 비치 & 박스 헤드 트랙" },
        blurb: {
          en: "A 5km loop in Bouddi National Park — quiet beaches on one side, Brisbane Water headland views on the other. Best in cooler months; bring water and a snack.",
          ko: "부디 국립공원의 5km 둘레 길 — 한쪽은 조용한 해변, 반대쪽은 브리즈베인 워터 헤드랜드 조망. 시원한 계절에 최적; 물과 간식 챙기세요.",
        },
        time: { en: "3 hrs (loop)", ko: "3시간 (둘레)" },
        cost: { en: "Free", ko: "무료" },
      },
      {
        name: { en: "The Entrance pelican feeding", ko: "The Entrance 펠리컨 먹이주기" },
        blurb: {
          en: "Daily 3:30pm pelican feeding at The Entrance — a long-running Central Coast tradition on the channel connecting Tuggerah Lakes to the sea. Free to watch.",
          ko: "The Entrance에서 매일 오후 3시 30분 펠리컨 먹이주기 — Tuggerah Lakes와 바다를 잇는 수로에서 오랫동안 이어진 센트럴 코스트 전통. 무료 관람.",
        },
        time: { en: "30 min", ko: "30분" },
        cost: { en: "Free", ko: "무료" },
      },
      {
        name: { en: "Ettalong Beach ferry to Palm Beach", ko: "에탈롱 비치에서 팜 비치 페리" },
        blurb: {
          en: "A scenic 1-hour passenger ferry across Pittwater from Ettalong to the famous Palm Beach (Summer Bay from Home and Away). Coffee on board, no car needed.",
          ko: "Ettalong에서 Pittwater를 건너 유명한 팜 비치(홈앤어웨이 Summer Bay 촬영지)까지 1시간 페리. 차량 없이 즐기는 풍경 좋은 1시간, 커피도 판매.",
        },
        time: { en: "1 hr (crossing only)", ko: "1시간 (페리 구간만)" },
        cost: { en: "From $22 AUD return", ko: "왕복 $22 AUD부터" },
      },
    ],
  },
  {
    slug: "byron-bay",
    name: { en: "Byron Bay", ko: "바이론 베이" },
    tagline: { en: "Australia's most famous beach town", ko: "호주에서 가장 유명한 해변 타운" },
    // Cape Byron Lighthouse + Wategos Bay — Wikimedia Commons (CC BY-SA)
    heroImg: "/images/Wategos_Bay_and_the_Byron_Bay_Lighthouse.jpg",
    cardImg: "/images/Wategos_Bay_and_the_Byron_Bay_Lighthouse.jpg",
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
    gettingThere: { en: "Fly Sydney→Ballina (1hr, $100 AUD–200), then shuttle (30min). Or drive via Pacific Hwy (8–9hrs).", ko: "시드니→발리나 항공 (1시간, $100 AUD~200) 후 셔틀 (30분). 또는 퍼시픽 하이웨이 운전 (8~9시간)." },
    suggestedDays: { en: "4–7 days (weekend minimum, week unlocks the hinterland)", ko: "4~7일 (최소 주말, 일주일이면 내륙까지)" },
    attractions: [
      {
        name: { en: "Cape Byron Lighthouse walk", ko: "케이프 바이론 등대 트레킹" },
        blurb: {
          en: "3.7km loop from the Captain Cook lookout through rainforest to the easternmost lighthouse on the Australian mainland — whale-spotting between June and October.",
          ko: "캡틴 쿡 전망대에서 우림을 지나 호주 본토 최동단 등대까지 3.7km 둘레 산책 — 6~10월에는 고래 관찰 가능.",
        },
        time: { en: "2 hrs (loop)", ko: "2시간 (둘레)" },
        cost: { en: "Free", ko: "무료" },
      },
      {
        name: { en: "Main Beach sunrise surf", ko: "메인 비치 일출 서핑" },
        blurb: {
          en: "Beginner-friendly waves year-round at Main Beach; the Pass is the locals' right-hand point break. Board hire on the Cape is around $40 AUD for 2 hours.",
          ko: "메인 비치는 연중 초보자 친화적 파도; The Pass는 현지인들 포인트 브레이크. 케이프 지역에서 보드 대여 2시간 약 $40 AUD.",
        },
        time: { en: "2 hrs", ko: "2시간" },
        cost: { en: "Free if you have a board", ko: "보드 지참 시 무료" },
      },
      {
        name: { en: "Crystal Castle & Shambhala Gardens", ko: "크리스털 캐슬 & 샴발라 가든" },
        blurb: {
          en: "Crystal-castle gardens in the hinterland — two giant crystals (claimed among the largest in the world), a rainforest walk, and a peace-pole grove. Allow half a day.",
          ko: "내륙의 크리스털 캐슬 정원 — 세계 최대 규모로 알려진 두 거대 수정, 우림 산책, 평화의 기둥 그로브 포함. 반나절 예정.",
        },
        time: { en: "3–4 hrs", ko: "3~4시간" },
        cost: { en: "From $58 AUD (check website for current pricing)", ko: "$58 AUD부터 (사이트에서 최신 가격 확인)" },
      },
    ],
  },
  {
    slug: "jervis-bay",
    name: { en: "Jervis Bay", ko: "저비스 베이" },
    tagline: { en: "White sand, dolphins & kangaroos on the beach", ko: "하얀 모래, 돌고래, 해변의 캥거루" },
    // Hyams Beach (the iconic white-sand beach inside Jervis Bay) — Wikimedia Commons (CC BY-SA)
    heroImg: "/images/Hyams_Beach_at_Jervis_Bay_National_Park.jpg",
    cardImg: "/images/Hyams_Beach_at_Jervis_Bay_National_Park.jpg",
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
    attractions: [
      {
        name: { en: "Hyams Beach sunrise", ko: "하임스 비치 일출" },
        blurb: {
          en: "Often-cited as having the world's whitest sand — pack a thermos, walk at dawn, and watch the bay glass out. Calm for swimming at both ends.",
          ko: "세계에서 가장 흰 모래로 자주 인용되는 해변 — 보온병 챙겨 새벽에 산책하며 만이 잔잔해지는 순간을 즐기세요. 양쪽 끝 모두 수영에 적합.",
        },
        time: { en: "2 hrs", ko: "2시간" },
        cost: { en: "Free", ko: "무료" },
      },
      {
        name: { en: "Dolphin-watching cruise (Jervis Bay Wild)", ko: "돌고래 관람 크루즈 (Jervis Bay Wild)" },
        blurb: {
          en: "2-hour eco-cruise from Huskisson with a 95%+ dolphin sighting rate year-round. Permits permit the boat to drift in close — pods often swim alongside for several minutes.",
          ko: "허스키슨에서 출발하는 2시간 에코 크루즈 연중 95% 이상 돌고래 관측 확률. 보트가 가까이 떠들 권리가 있어 무리가 수 분간 배와 함께 헤엄치는 장면도 흔합니다.",
        },
        time: { en: "2.5 hrs (incl. boarding)", ko: "2.5시간 (탑승 포함)" },
        cost: { en: "From $90 AUD (adult); children cheaper", ko: "성인 $90 AUD부터; 어린이 할인" },
      },
      {
        name: { en: "Booderee bushwalk + kangaroos at dawn", ko: "부디리 산책 + 새벽 캥거루" },
        blurb: {
          en: "Booderee National Park (entry ~$13 AUD/vehicle) at the right edge of the bay — white-sand beaches plus resident eastern-grey kangaroos on the lawn at Jervis Bay village at dawn.",
          ko: "만 우측 끝의 부디리 국립공원 (입장료 차량당 약 $13 AUD) — 하얀 모래 해변과 함께 Jervis Bay 마을의 잔디밭에서 새벽에 만날 수 있는 동회색 캥거루.",
        },
        time: { en: "Half day", ko: "반나절" },
        cost: { en: "~ $13 AUD per vehicle (check current pass)", ko: "차량당 약 $13 AUD (현행 패스 확인)" },
      },
    ],
  },
  {
    slug: "wollongong",
    name: { en: "Wollongong & Grand Pacific Drive", ko: "울런공 & 그랜드 퍼시픽 드라이브" },
    tagline: { en: "Sea cliff bridge & an easy coastal escape", ko: "시클리프 브리지와 가벼운 해안 여행" },
    // Sea Cliff Bridge from air, Grand Pacific Drive — Wikimedia Commons (CC BY-SA)
    heroImg: "/images/Sea_Cliff_Bridge_from_air.jpg",
    cardImg: "/images/Sea_Cliff_Bridge_from_air.jpg",
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
    gettingThere: { en: "Drive via the M1 (1hr). Train from Central to Wollongong (1.5hrs, $8 AUD Opal).", ko: "M1 이용 운전 (1시간). 센트럴에서 울런공까지 기차 (1.5시간, $8 AUD 오팔)." },
    suggestedDays: { en: "1 day (drive the bridge + temple + beach) or a relaxed weekend", ko: "1일 (브리지+사원+해변 드라이브) 또는 여유로운 주말" },
    attractions: [
      {
        name: { en: "Sea Cliff Bridge drive", ko: "시 클리프 브리지 드라이브" },
        blurb: {
          en: "5km coastal arch at 45m above the ocean, north of Wollongong on Grand Pacific Drive — pair with a coffee stop at Stanwell Park beach below.",
          ko: "울런공 북쪽 그랜드 퍼시픽 드라이브의 5km 해안 아치(해발 45m) — 아래 스탠웰 파크 비치에서 커피 한잔과 함께 즐기세요.",
        },
        time: { en: "1.5 hrs (incl. stops)", ko: "1.5시간 (정차 포함)" },
        cost: { en: "Free", ko: "무료" },
      },
      {
        name: { en: "Nan Tien Temple", ko: "난 티엔 사원" },
        blurb: {
          en: "Buddhist temple in Dapto, described as the largest in Australia — Chinese-style architecture, gardens, a quiet café, and a guesthouse for overnight retreats.",
          ko: "Dapto에 위치한 호주 최대 규모로 알려진 불교 사원 — 중국식 건축, 정원, 한적한 카페, 그리고 1박 수련을 위한 게스트하우스도 운영.",
        },
        time: { en: "2 hrs", ko: "2시간" },
        cost: { en: "Free (workshops attract a fee)", ko: "무료 (워크숍은 별도 요금)" },
      },
      {
        name: { en: "Austinmer or Thirroul surf", ko: "오스틴머 또는 시룰 서핑" },
        blurb: {
          en: "Two beach towns north of the city centre with quieter, more local-style surf breaks than the Sydney beaches — beginners can rent boards from the surf school on the headland.",
          ko: "시드니 해변보다 한산하고 로컬 느낌이 강한 시 중심부 북쪽의 두 해변 타운 — 초보자도 헤드랜드 서핑 스쿨에서 보드를 빌릴 수 있어요.",
        },
        time: { en: "Half day", ko: "반나절" },
        cost: { en: "Free if you have a board", ko: "보드 지참 시 무료" },
      },
    ],
  },
  {
    slug: "port-stephens",
    name: { en: "Port Stephens", ko: "포트 스테판스" },
    tagline: { en: "Dolphin capital & the biggest sand dunes in the southern hemisphere", ko: "돌고래의 수도와 남반구 최대 사구" },
    // Stockton Bight Sand Dunes at Anna Bay (largest moving dunes in the southern hemisphere) — Wikimedia Commons (CC BY-SA)
    heroImg: "/images/Sand_dunes_at_Anna_Bay.jpg",
    cardImg: "/images/Sand_dunes_at_Anna_Bay.jpg",
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
    attractions: [
      {
        name: { en: "Dolphin-watching cruise (Moonshadow TQE)", ko: "돌고래 관람 크루즈 (Moonshadow TQE)" },
        blurb: {
          en: "Dolphin Watch on the M.V. Kingdom runs 2.5-hour cruises departing Nelson Bay with bottlenose dolphin sighting rates around 99%. Some cruises combine with whale spotting May–Nov.",
          ko: "M.V. Kingdom호에서 출발하는 돌고래 관측 크루즈, 2.5시간, 병코 돌고래 관측 성공률 약 99%. 일부 크루즈는 5~11월 고래 관측과 결합.",
        },
        time: { en: "2.5 hrs", ko: "2.5시간" },
        cost: { en: "From $42 AUD (adult); children cheaper", ko: "성인 $42 AUD부터; 어린이 할인" },
      },
      {
        name: { en: "Stockton Bight sand dune sandboarding", ko: "스톡턴 바이트 사구 샌드보드" },
        blurb: {
          en: "The largest moving coastal dune system in the southern hemisphere, up to 30m high. Tours include 4WD transfer up + sandboard hire. The selfie from the top is the postcard shot.",
          ko: "남반구 최대 규모의 해안 이동 사구로 최대 30m 높이. 투어에는 4WD 차량 환승 + 샌드보드 대여 포함. 정상에서의 셀카가 엽서용 사진.",
        },
        time: { en: "1.5 hrs (incl. transfer)", ko: "1.5시간 (환승 포함)" },
        cost: { en: "From $45 AUD (per person; varies by operator)", ko: "1인 $45 AUD부터 (운영사별 상이)" },
      },
      {
        name: { en: "Fly Point snorkel", ko: "플라이 포인트 스노클" },
        blurb: {
          en: "A 15-minute walk from Nelson Bay marina — clear shallow water with weedy sea dragons, rays, and blue gropers. Bring your own snorkel gear (no on-site hire).",
          ko: "넬슨 베이 마리나에서 도보 15분 — 맑은 얕은 물에 weedy sea dragon, 가오리, blue groper. 스노클 장비 직접 지참(현장 대여 없음).",
        },
        time: { en: "1–2 hrs", ko: "1~2시간" },
        cost: { en: "Free", ko: "무료" },
      },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find(d => d.slug === slug);
}
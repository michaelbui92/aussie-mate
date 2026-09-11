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
  /** Detailed how to get there — drive, train, tours, parking (expands on gettingThere) */
  howToGetThere?: { en: string; ko: string };
  /** Expanded best time to visit — season-by-season breakdown */
  bestTimeDetailed?: { en: string; ko: string };
  /** Top 5–10 things to do, each with a short description */
  topThingsToDo?: {
    en: { title: string; description: string }[];
    ko: { title: string; description: string }[];
  };
  /** Local pro tips — insider knowledge, money-saving, timing advice */
  proTips?: {
    en: { tip: string; detail: string }[];
    ko: { tip: string; detail: string }[];
  };
}

export const destinations: Destination[] = [
  {
    slug: "blue-mountains",
    name: { en: "Blue Mountains", ko: "블루마운틴" },
    tagline: { en: "A World Heritage site with fabulous views", ko: "유네스코 세계유산, 숨막히는 절경" },
    heroImg: "/images/bluemountains_three_sisters.jpg",
    cardImg: "/images/bluemountains_three_sisters.jpg",
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
    heroImg: "/images/hunter_valley_vineyard.jpg",
    cardImg: "/images/hunter_valley_vineyard.jpg",
    accentColor: "bg-rose-500",
    region: "New South Wales",
    tripLength: "weekend",
    description: {
      en: "Australia's oldest wine region, about 2 hours north of Sydney. Hunter Valley is famous for Semillon and Shiraz, but there's so much more — gourmet restaurants, sake tastings, hot air balloons at sunrise, and boutique breweries. A popular weekend escape that's at its best during vintage (March–April).",
      ko: "호주에서 가장 오래된 와인 생산지로 시드니에서 북쪽으로 약 2시간. 헌터 밸리는 세미뇽과 시라즈로 유명하지만 그 이상입니다 — 미식 레스토랑, 사케 테이스팅, 일출 핫에어볼론, 그리고 바이크릿 양조장. 빈티지 시즌(3~4월)에 가장 아름답습니다."
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
    howToGetThere: {
      en: "**By car:** The most flexible option. Take the M1 north then the Hunter Expressway (M15) toward Branxton/Pokolbin. The drive from Sydney's CBD to the main Pokolbin wine region is about 2 hours. Parking is easy — every cellar door has its own lot. A designated driver is strongly recommended; the wine tastings add up.\n\n**By tour bus:** Dozens of operators run guided wine tours from Sydney ($99–$199 AUD per person). Most visit 4–6 cellar doors, include lunch at a winery restaurant, and handle the driving. A great option if you want to drink freely. Book ahead on weekends.\n\n**By train + shuttle:** Train from Central to Singleton (2.5 hrs, ~$15 AUD Opal), then a local wine shuttle bus to the vineyards. The shuttle runs hourly and costs about $10 AUD one-way. Less convenient than a tour but cheaper.",
      ko: "**자동차:** 가장 유연한 옵션. M1 북쪽으로 간 후 Hunter Expressway(M15)를 타고 Branxton/Pokolbin 방향. 시드니 CBD에서 주요 와인 지역인 Pokolbin까지 약 2시간. 주차는 쉬움 — 모든 셀러 도어에 자체 주차장 있음. 지정된 운전자 강력 권장 — 와인 테이스팅이 쌓입니다.\n\n**투어 버스:** 수많은 업체가 시드니에서 가이드 와인 투어 운영 ($99~$199 AUD 1인당). 대부분 4~6개 셀러 도어 방문, 와이너리 레스토랑 점심 포함, 운전 대행. 자유롭게 마시고 싶다면 좋은 선택. 주말 예약 필수.\n\n**기차 + 셔틀:** 센트럴에서 싱글턴까지 기차(2.5시간, ~$15 AUD 오팔), 이후 와인 셔틀 버스로 포도원 이동. 셔틀은 1시간 간격, 편도 약 $10 AUD. 투어보다 불편하지만 저렴."
    },
    bestTimeDetailed: {
      en: "**Vintage season (Mar–Apr):** The absolute peak — harvest time. The vines are heavy with grapes, the cellar doors are buzzing, and many wineries run special vintage-release tastings. Warm autumn days, cool nights. Book everything months ahead.\n\n**Winter (Jun–Aug):** The hidden gem season. The Hunter's cellar doors are cosy with open fireplaces, restaurants run winter-menu specials, and accommodation prices drop significantly. The bare vines have their own stark beauty. Perfect for a romantic escape.\n\n**Spring (Sep–Nov):** The vineyards are green and lush, spring flowers are out, and the weather is mild. The Hunter Valley Gardens' Spring Festival (September) draws big crowds. Good balance of pleasant weather and reasonable prices.\n\n**Summer (Dec–Feb):** Hot and busy. The vines are lush, but the heat (30–35°C) can make extended outdoor tasting uncomfortable. Indoor cellar doors with air conditioning are your friend. Early morning hot-air balloon flights are spectacular.",
      ko: "**빈티지 시즌 (3~4월):** 절정기 — 수확철. 포도나무에 포도가 가득하고 셀러 도어가 활기차며 많은 와이너��에서 빈티지 한정 테이스팅 진행. 따뜻한 가을 날씨와 선선한 밤. 모든 것을 몇 달 전에 예약.\n\n**겨울 (6~8월):** 숨겨진 보석 시즌. 헌터의 셀러 도어는 벽난로가 아늑하고, 레스토랑은 겨울 스페셜 메뉴 운영, 숙소 가격 크게 하락. 앙상한 포도나무의 독특한 아름다움. 로맨틱한 휴가에 완벽.\n\n**봄 (9~11월):** 포도원이 푸르고 무성하며 봄꽃 만발, 날씨 온화. 헌터 밸리 가든의 봄 축제(9월)로 인파가 모임. 쾌적한 날씨와 합리적인 가격의 균형.\n\n**여름 (12~2월):** 덥고 붐빔. 포도나무는 무성하지만 더위(30~35°C)로 장시간 야외 테이스팅이 불편할 수 있음. 에어컨이 있는 실내 셀러 도어가 좋음. 이른 아침 열기구 비행은 장관."
    },
    topThingsToDo: {
      en: [
        { title: "Wine tasting at a classic cellar door", description: "Start at Audrey Wilkinson (iconic Semillon views) or Brokenwood (renowned Shiraz). Most cellar doors charge $10–$15 AUD for a tasting flight of 4–6 wines, refunded on purchase. The Hunter is one of the few places where you can still taste for free at smaller producers." },
        { title: "Hot air balloon ride at sunrise", description: "Balloon Aloft and Beyond Ballooning both launch daily over the vineyards at dawn. The 1-hour flight over misty vines with the Brokenback Range in the background is magical. Champagne breakfast included. From $335 AUD." },
        { title: "Lunch at a winery restaurant", description: "Muse Kitchen, Bistro Molines, and EXP. Restaurant are the standouts — every dish paired with a Hunter wine. Book weeks ahead for weekend lunch. Muse's lamb shoulder for two is legendary." },
        { title: "Cheese and chocolate tasting", description: "The Hunter Valley Cheese Company and Cocoa Nymph offer paired tasting experiences. The Brie and Semillon pairing at the Cheese Company is a simple pleasure. Cocoa Nymph runs chocolate-and-wine sessions on weekends." },
        { title: "Sake tasting at the Hunter Distillery", description: "One of Australia's few sake producers, using local rice and Hunter water. The tasting room is inside a historic sandstone building and the sake pairs surprisingly well with the local oysters." },
        { title: "Horse-drawn carriage ride through the vines", description: "A quiet, romantic way to see the vineyards — Clydesdale Horse Drawn Carriages run 30-minute and 1-hour tours through the Pokolbin vineyards. Book online for sunset slots (they sell out)." },
        { title: "Stargazing at the Hunter Valley Observatory", description: "Public viewing nights on Saturdays — the darkest skies in the Hunter region. Telescopes set up, expert guides, and a laser-guided tour of the southern constellations. A unique evening activity after a day of wine." },
      ],
      ko: [
        { title: "클래식 셀러 도어 와인 테이스팅", description: "Audrey Wilkinson(아이코닉 Semillon 전망) 또는 Brokenwood(유명 Shiraz)에서 시작. 대부분 셀러 도어는 4~6종 테이스팅 플라이트에 $10~$15 AUD, 구매 시 환불. 헌터는 소규모 생산자에서 무료 테이스팅이 아직 가능한 몇 안 되는 곳." },
        { title: "일출 열기구 체험", description: "Balloon Aloft와 Beyond Ballooning이 매일 새벽 포도원上空에서 운항. 안개 낀 포도원 위의 1시간 비행, Brokenback 산맥 배경의 마법 같은 경험. 샴페인 조식 포함. $335 AUD부터." },
        { title: "와이너리 레스토랑 점심", description: "Muse Kitchen, Bistro Molines, EXP. Restaurant가 대표적 — 모든 요리가 헌터 와인과 페어링. 주말 점심은 몇 주 전 예약 필수. Muse의 양고기 숄더 투인원이 전설적." },
        { title: "치즈와 초콜릿 테이스팅", description: "Hunter Valley Cheese Company와 Cocoa Nymph에서 페어링 테이스팅 제공. Cheese Company의 브리와 Semillon 페어링은 단순한 즐거움. Cocoa Nymph는 주말에 초콜릿-와인 세션 운영." },
        { title: "Hunter Distillery 사케 테이스팅", description: "호주 몇 안 되는 사케 생산지, 로컬 쌀과 헌터 물 사용. 역사적인 사암 건물 내 테이스팅 룸, 사케가 지역 굴과 놀랍게 잘 어울림." },
        { title: "포도원 마차 투어", description: "조용하고 로맨틱하게 포도원을 둘러보는 방법 — Clydesdale Horse Drawn Carriages가 Pokolbin 포도원 30분/1시간 투어 운영. 일몰 시간대 온라인 예약(매진됨)." },
        { title: "Hunter Valley 천문대 별빛 감상", description: "토요일 공개 관측의 밤 — 헌터 지역에서 가장 어두운 하늘. 망원경 설치, 전문 가이드, 남쪽 별자리 레이저 투어. 와인 하루를 마무리하는 독특한 저녁 활동." },
      ]
    },
    proTips: {
      en: [
        { tip: "Book a designated driver service or tour", detail: "RBT checkpoints are frequent on the Hunter Expressway on weekends. A designated driver service costs about $50–$80 for the day and is far cheaper than a DUI. Or just book a tour." },
        { tip: "Don't try to visit more than 5 cellar doors in a day", detail: "Tasting fatigue is real — after the fifth flight, your palate is shot and every wine starts tasting the same. Pick 4–5 producers across different styles (one big, one boutique, one organic, one distillery) and take your time." },
        { tip: "The Hunter Expressway has tolls", detail: "The M15 Hunter Expressway has a toll of about $7 AUD each way. If you don't have a toll tag, the invoice will be sent to the registered owner within days — factor it in." },
        { tip: "Stay in Pokolbin, not Cessnock", detail: "Cessnock is the service town 10 minutes away with cheaper accommodation, but staying in Pokolbin means waking up in the vineyards, walking to tastings, and having dinner without driving. The extra cost is worth it." },
      ],
      ko: [
        { tip: "지정 운전자 서비스 또는 투어 예약", detail: "주말 헌터 익스프레스웨이에서 음주 단속 자주 있음. 지정 운전자 서비스는 하루 $50~$80 AUD로 DUI보다 훨씬 저렴. 아니면 투어를 예약하세요." },
        { tip: "하루 5개 이상 셀러 도어 방문하지 않기", detail: "테이스팅 피로는 현실 — 다섯 번째 플라이트 이후엔 미각이 무뎌져 모든 와인이 똑같이 느껴짐. 다른 스타일의 4~5개 생산자를 골라(대형, 부티크, 유기농, 증류주) 여유 있게 즐기세요." },
        { tip: "헌터 익스프레스웨이 통행료", detail: "M15 헌터 익스프레스웨이 편도 통행료 약 $7 AUD. 통행 태그가 없으면 며칠 내로 등록 소유자에게 청구서 발송 — 미리 계산하세요." },
        { tip: "Cessnock 아닌 Pokolbin에 숙박", detail: "Cessnock은 10분 거리의 서비스 타운으로 저렴한 숙소가 있지만, Pokolbin에 머물면 포도원에서 아침을 맞고 도보로 테이스팅하고 운전 없이 저녁 식사 가능. 추가 비용 가치 있음." },
      ]
    },
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
    heroImg: "/images/southcoast_pebbly_beach.jpg",
    cardImg: "/images/southcoast_pebbly_beach.jpg",
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
    heroImg: "/images/snowymountains_kosciuszko.jpg",
    cardImg: "/images/snowymountains_kosciuszko.jpg",
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
    howToGetThere: {
      en: "**By car:** The classic Snowy journey. Take the M5/M7 west out of Sydney, then the Hume Highway (M31) toward Goulburn, then the Snowy Mountains Highway through Cooma to Jindabyne. Total drive time is about 5–6 hours without stops. In ski season (Jun–Sep), snow chains may be required — check the NSW Live Traffic app before departing. The road to Perisher is steep and winding for the last 30km. Parking at the resort is $40–$50 per day in peak season.\n\n**By air:** Fly from Sydney to Cooma Airport (1 hour, Rex Airlines from $200 AUD return). From Cooma, shuttle buses run to Jindabyne, Perisher, and Thredbo (1 hour, ~$40 AUD). Book the shuttle in advance — it fills up during ski season.\n\n**By tour bus:** Overnight coach services run from Sydney to Jindabyne (7–8 hours), departing around 10pm and arriving at 6am. This saves a night's accommodation but you arrive tired. The Snowy Express is the most reliable option.",
      ko: "**자동차:** 클래식한 스노이 여정. 시드니에서 M5/M7 서쪽으로, Hume Highway(M31)를 타고 Goulburn 방향, Snowy Mountains Highway를 통해 Cooma, Jindabyne까지. 총 5~6시간(정차 제외). 스키 시즌(6~9월)에는 체인 필수 — 출발 전 NSW Live Traffic 앱 확인. Perisher로 가는 마지막 30km는 가파르고 구불구불함. 리조트 주차 성수기 하루 $40~$50.\n\n**항공:** 시드니에서 Cooma 공항까지 (1시간, Rex Airlines 왕복 $200 AUD부터). Cooma에서 Jindabyne, Perisher, Thredbo까지 셔틀버스 (1시간, ~$40 AUD). 사전 예약 필수 — 스키 시즌에 매진.\n\n**투어 버스:** 시드니에서 Jindabyne까지 야간 버스 (7~8시간), 오후 10시 출발 오전 6시 도착. 숙박비는 절약되지만 피곤하게 도착. Snowy Express가 가장 신뢰할 수 있는 옵션."
    },
    bestTimeDetailed: {
      en: "**Winter (Jun–Aug):** Peak ski season. Perisher and Thredbo are in full operation — the best snow conditions are usually July–August. Expect cold temperatures (-5°C to 5°C), busy slopes, and premium accommodation prices. Book lift tickets and lessons online weeks ahead for the best rates.\n\n**Spring (Sep–Oct):** Spring skiing! September can still have excellent snow on the upper slopes, with warmer temps and longer days. The Perisher Blue Cow season often extends through October long weekend. Fewer crowds, cheaper accommodation.\n\n**Summer (Dec–Feb):** The mountains transform into hiking paradise. Mount Kosciuszko summit walk, wildflower hikes, mountain biking at Thredbo, and the Yarrangobilly thermal pools. Warm days (20–30°C) and cool nights. No crowds on the trails.\n\n**Autumn (Mar–May):** The quietest season. The landscape is beautiful with autumn colours, perfect for photography. Many resort facilities are closed or limited between seasons. Best for experienced hikers who want solitude.",
      ko: "**겨울 (6~8월):** 스키 성수기. Perisher와 Thredbo 완전 운영 — 보통 7~8월이 최상의 적설. 기온 -5°C~5°C, 붐비는 슬로프, 프리미엄 숙소 가격. 리프트와 강습은 몇 주 전 온라인 예약이 가장 저렴.\n\n**봄 (9~10월):** 스프링 스키! 9월 상부 슬로프에 여전히 훌륭한 적설, 따뜻한 기온, 긴 일조량. Perisher Blue Cow 시즌은 10월 긴 주말까지 연장됨. 인파 적고 저렴한 숙소.\n\n**여름 (12~2월):** 산이 트레킹 천국으로 변신. Mount Kosciuszko 정상 산책, 야생화 트레킹, Thredbo 마운틴 바이킹, Yarrangobilly 온천. 따뜻한 날(20~30°C)과 선선한 밤. 트레일 한산.\n\n**가을 (3~5월):** 가장 한산한 계절. 단풍이 아름다운 풍경, 사진 촬영에 완벽. 많은 리조트 시설이 시즌 사이에 문을 닫거나 제한 운영. 고독을 원하는 경험 많은 트레커에게 적합."
    },
    topThingsToDo: {
      en: [
        { title: "Ski or snowboard at Perisher", description: "Australia's largest ski resort — 1,250 hectares of terrain across four interconnected villages (Perisher Valley, Blue Cow, Smiggin Holes, Guthega). Over 50 lifts and 100+ runs from beginner to expert. The backcountry access via the backcountry gates is world-class." },
        { title: "Ski or snowboard at Thredbo", description: "A smaller resort with Australia's longest run (5.9km from the top of Karel's T-bar to Friday Flat). The village has a genuine alpine feel with après-ski pubs and restaurants. Better for intermediates and experts." },
        { title: "Summit Mount Kosciuszko", description: "Australia's highest peak at 2,228m. The easiest route is 13km return from the Thredbo top station via the Kosciuszko Walk — a metal walkway that's accessible to anyone with reasonable fitness. Allow 4–5 hours. The views are life-list material." },
        { title: "Soak in the Yarrangobilly thermal pools", description: "A natural thermal pool in a limestone canyon — 27°C year-round, surrounded by snow gums. It's a 30-minute walk downhill from the carpark (20 minutes back up — the walk home is the workout). Combine with a picnic and a drive through the Snowy." },
        { title: "Mountain bike at Thredbo in summer", description: "Thredbo's chairlift-served downhill mountain bike trails are among Australia's best — from flowy green runs to black diamond single-track. Bike hire and armour available on-site. The scenic chairlift ride up is worth it even for non-riders." },
        { title: "Cross-country ski at Selwyn Snow Resort", description: "Selwyn is the Snowies' best-kept secret for cross-country skiing and snowshoeing — gentle terrain, fewer crowds, and a fraction of the cost of Perisher/Thredbo. About 40 minutes from Jindabyne. Lessons available for beginners." },
        { title: "Drive the Snowy Mountains Scenic Loop", description: "A full-day road trip loop from Jindabyne through Thredbo, down to Khancoban, across to Cabramurra, and back via Tumut. Alpine scenery, glacial lakes, and historic hydro-electric tunnels. Best in autumn for the poplar colours." },
      ],
      ko: [
        { title: "Perisher 스키 또는 스노보드", description: "호주 최대 스키 리조트 — 4개 연결 빌리지(Perisher Valley, Blue Cow, Smiggin Holes, Guthega)에 1,250헥타르 지형. 50개 이상 리프트, 100개 이상 초급~고급 슬로프. 백컨트리 게이트를 통한 백컨트리 접근은 세계적 수준." },
        { title: "Thredbo 스키 또는 스노보드", description: "더 작은 리조트, 호주에서 가장 긴 슬로프(5.9km, Karel's T-bar 정상에서 Friday Flat까지). 빌리지는 진정한 알파인 분위기와 애프터스키 펍과 레스토랑. 중급자와 고급자에게 적합." },
        { title: "Mount Kosciuszko 정상 등정", description: "호주 최고봉 2,228m. 가장 쉬운 코스는 Thredbo 정상역에서 Kosciuszko Walk를 통해 13km 왕복 — 적정 체력이면 누구나 가능한 금속 데크길. 4~5시간 소요. 평생 기억에 남을 전망." },
        { title: "Yarrangobilly 온천욕", description: "석회암 캐년의 자연 온천 — 연중 27°C, 스노우 검으로 둘러싸임. 주차장에서 내리막 30분(돌아오는 20분이 운동). 피크닉과 스노이 드라이브와 결합." },
        { title: "여름 Thredbo 마운틴 바이킹", description: "Thredbo의 체어리프트 이용 다운힐 마운틴 바이크 트레일은 호주 최고 — 초급 플로우부터 블랙 다이아몬드 싱글트랙까지. 현장에서 바이크와 장비 대여 가능. 경치 좋은 체어리프트는 라이더가 아니어도 가치 있음." },
        { title: "Selwyn Snow Resort 크로스컨트리 스키", description: "Selwyn은 스노이즈에서 크로스컨트리 스키와 스노슈잉을 위한 숨겨진 보석 — 완만한 지형, 적은 인파, Perisher/Thredbo 대비 저렴한 가격. Jindabyne에서 약 40분. 초보자 강습 가능." },
        { title: "Snowy Mountains 경치 루프 드라이브", description: "Jindabyne에서 Thredbo를 거쳐 Khancoban, Cabramurra, Tumut로 돌아오는 종일 로드트립. 고산 풍경, 빙하 호수, 역사적 수력 발전 터널. 가을 포플러 단풍이 가장 아름다움." },
      ]
    },
    proTips: {
      en: [
        { tip: "Skip the ski rental at the resort — hire in Jindabyne", detail: "Jindabyne has a dozen ski hire shops that are 30–50% cheaper than resort-side rental counters. Rhyme and Rhythm, Ski'n'Skate, and Sundance are all well-reviewed. You'll save $50–$80 AUD per day for a full kit." },
        { tip: "Check the weather obsessively", detail: "The Snowy Mountains weather changes fast — a sunny morning can turn into a whiteout by lunch. Check the Bureau of Meteorology (BOM) forecast for the alpine region, not just Jindabyne. The mountain cams on the resort websites are the most reliable real-time view." },
        { tip: "Pack chains in winter even if you have AWD", detail: "NSW Police can close the road to Perisher to any vehicle not carrying chains, regardless of tyres. Snow chains cost about $60 to buy and can be rented from Jindabyne servo for $30/day. The fine for driving without them when required is $2,300." },
        { tip: "The best coffee in the Snowies", detail: "Wildbrumby Distillery on the way to Thredbo has a schnapps distillery, a café with excellent coffee, and the best schnapps tasting board in the region. It's the perfect last stop before heading back to Sydney." },
      ],
      ko: [
        { tip: "스키 장비는 리조트 말고 Jindabyne에서 대여", detail: "Jindabyne에는 리조트 대여보다 30~50% 저렴한 수많은 스키 대여점이 있음. Rhyme and Rhythm, Ski'n'Skate, Sundance 모두 평판 좋음. 풀 키트 하루 $50~$80 AUD 절약." },
        { tip: "날씨 수시 확인", detail: "스노이 마운틴 날씨는 빠르게 변함 — 맑은 아침이 점심에는 화이트아웃으로 변할 수 있음. Jindabyne이 아닌 알파인 지역의 BOM 일기예보 확인. 리조트 웹사이트의 마운틴 캠이 가장 신뢰할 수 있는 실시간 정보." },
        { tip: "겨울에는 AWD라도 체인 필수", detail: "NSW 경찰은 타이어 종류와 관계없이 체인 미소지 차량의 Perisher 진입로를 통제할 수 있음. 스노우 체인은 구매 약 $60, Jindabyne 주유소에서 하루 $30 대여 가능. 미착용 시 벌금 $2,300." },
        { tip: "스노이즈 최고의 커피", detail: "Thredbo 가는 길의 Wildbrumby Distillery — 슈냅스 증류소, 훌륭한 커피 카페, 지역 최고의 슈냅스 테이스팅 보드. 시드니로 돌아가기 전 완벽한 마지막 정류장." },
      ]
    },
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
    heroImg: "/images/unsplash-1523059623039-a9ed027e7fad.jpg",
    cardImg: "/images/unsplash-1523059623039-a9ed027e7fad.jpg",
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
    heroImg: "/images/centralcoast_terrigal.jpg",
    cardImg: "/images/centralcoast_terrigal.jpg",
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
    howToGetThere: {
      en: "**By car:** Take the M1 motorway north from Sydney — exit at Gosford (45 min) or Wyong (1 hr). Parking is free and plentiful at most beaches, though the main beach carparks fill by 10am on summer weekends. Aim for an early start or go in the afternoon when the morning crowd thins out.\n\n**By train:** The Central Coast & Newcastle Line runs from Central Station to Gosford (1 hr, $9 AUD Opal) and Wyong (1.5 hrs, $9 AUD). Trains run every 30 minutes on weekdays and hourly on weekends. From the station, local buses connect to the beach towns, or it's a short Uber.\n\n**By tour:** A few small-group tours from Sydney include Central Coast stops — mostly focused on the Australian Reptile Park and the coastal walks. Worth it if you'd rather not drive.",
      ko: "**자동차:** 시드니에서 M1 고속도로를 타고 북쪽으로 — 고스퍼드(45분) 또는 와이옹(1시간) 하차. 대부분의 해변에 무료 주차가 넉넉하지만, 여름 주말에는 오전 10시면 주요 해변 주차장이 만차됩니다. 일찍 출발하거나 오후 늦게 가는 것을 추천합니다.\n\n**기차:** Central Station에서 Central Coast & Newcastle Line 탑승 — 고스퍼드(1시간, $9 AUD 오팔) 또는 와이옹(1.5��간, $9 AUD). 평일 30분 간격, 주말 1시간 간격. 역에서 지역 버스로 해변 마을까지 연결되며, Uber도 가능합니다.\n\n**투어:** 일부 소규모 투어가 Central Coast를 방문합니다 — 주로 Australian Reptile Park과 해안 산책에 초점. 운전하기 싫다면 고려할 만합니다."
    },
    bestTimeDetailed: {
      en: "**Summer (Dec–Feb):** Peak beach season — expect crowds on weekends at popular spots like Avoca Beach and Terrigal. The water is perfect for swimming (22–25°C), and the outdoor markets are in full swing.\n\n**Autumn (Mar–May):** The sweet spot. Cooler air makes bushwalking in Brisbane Water National Park genuinely pleasant. Fewer crowds, still warm enough for a beach picnic. Best for photography — the light over the coastline is stunning.\n\n**Winter (Jun–Aug):** The quietest season. Great for storm-watching from a pub by the water. The whale migration passes offshore (June–July north, September–October south). Cozy, not cold.\n\n**Spring (Sep–Nov):** Wildflowers bloom along the coastal trails, and the water starts warming up. A lovely transitional period with fewer tourists before the summer rush.",
      ko: "**여름 (12~2월):** 해변 성수기 — 주말에는 Avoca Beach와 Terrigal 같은 인기 해변에 사람이 많습니다. 수온은 수영에 적합(22~25°C)하며, 야외 마켓이 활성화됩니다.\n\n**가을 (3~5월):** 가장 좋은 계절. 선선한 공기로 브리즈베인 워터 국립공원 산책이 쾌적합니다. 사람이 적고 해변 피크닉에 적당한 온도. 사진 촬영에 최적 — 해안선의 빛이 아름답습니다.\n\n**겨울 (6~8월):** 가장 한산한 계절. 물가 펍에서 폭풍우 구경하기 좋음. 6~7월 북상, 9~10월 남하하는 고래 이동이 해안에서 목격됨. 쾌적하고 춥지 않음.\n\n**봄 (9~11월):** 해안 트레일을 따라 야생화가 만발하고 수온이 올라가기 시작합니다. 여름 성수기 전 관광객이 적은 매력적인 전환기."
    },
    topThingsToDo: {
      en: [
        { title: "Explore the Ecotourism beaches", description: "The Central Coast has more Ecotourism-certified beaches than any other region in Australia — including Putty Beach, Maitland Bay, and Lobster Beach. These are protected for their water quality, safety, and environmental management. Look for the blue Eco certification flag at the surf club." },
        { title: "Walk the Bouddi Coastal Walk", description: "An 8km track from Putty Beach to MacMasters Beach with dramatic headland views, secluded coves, and optional detours through ancient rainforest gullies. Allow 3–4 hours one-way; the return shuttle bus runs during daylight saving." },
        { title: "Visit the Australian Reptile Park", description: "Home to the largest collection of Australian reptiles, plus kangaroos, koalas, and the famous Elvis the crocodile. The Spider Venom Milking Program supplies antivenom nationwide — you can watch the daily 11am milking session." },
        { title: "Catch a show at The Entrance", description: "Daily 3:30pm pelican feeding is the town's claim to fame, but the waterfront precinct also has a theatre, carnival games for kids, and a long fishing pier. Combine with a walk along the channel to Tuggerah Lakes." },
        { title: "Go craft beer tasting", description: "Six-String Brewery in Erina, Coastal Brewing in Gosford, and Block 'n' Tackle in Ourimbah are the standout local breweries. Most have tasting paddles and food trucks on weekends." },
        { title: "Paddle the basins and lakes", description: "Tuggerah Lakes, Wamberal Lagoon, and Avoca Lake are all kayak-friendly — hire from the Central Coast Kayak shop at Terrigal Haven and paddle through the mangrove channels. Calm water, even on windy days." },
        { title: "Discover the art trail", description: "Over 20 galleries across the region — from Gosford Regional Gallery to smaller studios in pretty country towns like Mangrove Mountain. Pick up a self-guided Art Trail map from any visitor centre." },
      ],
      ko: [
        { title: "생태관광 해변 탐험", description: "센트럴 코스트는 호주에서 가장 많은 생태관광 인증 해변을 보유하고 있습니다 — Putty Beach, Maitland Bay, Lobster Beach 등. 수질, 안전, 환경 관리 측면에서 보호받는 해변들입니다. 서프 클럽에서 파란 Eco 인증 깃발을 찾아보세요." },
        { title: "Bouddi 해안 산책로", description: "Putty Beach에서 MacMasters Beach까지 8km 트랙, 드라마틱한 곶 전망, 한적한 후미, 고대 우림 계곡으로 이어지는 선택 코스. 편도 3~4시간 소요; 서머타임에는 귀환 셔틀버스 운행." },
        { title: "Australian Reptile Park 방문", description: "호주 최대 규모의 파충류 컬렉션, 캥거루, 코알라, 유명한 악어 Elvis 보유. 거미 독액 채취 프로그램은 전국에 항독소를 공급합니다 — 매일 오전 11시 채취 과정을 관람할 수 있습니다." },
        { title: "The Entrance에서 쇼 관람", description: "매일 오후 3시 30분 펠리컨 먹이주기가 유명하지만, 해변가에는 극장, 어린이용 카니발, 긴 낚시 부두도 있습니다. Tuggerah Lakes까지 수로를 따라 산책도 즐기세요." },
        { title: "수제 맥주 테이스팅", description: "Erina의 Six-String Brewery, Gosford의 Coastal Brewing, Ourimbah의 Block 'n' Tackle이 대표적인 로컬 양조장입니다. 대부분 주말에 테이스팅 패들과 푸드 트럭을 운영합니다." },
        { title: "호수와 석호에서 패들링", description: "Tuggerah Lakes, Wamberal Lagoon, Avoca Lake는 모두 카약에 적합합니다 — Terrigal Haven의 Central Coast Kayak에서 대여하여 맹그로브 수로를 따라 패들링. 바람이 불어도 잔잔한 수면." },
        { title: "아트 트레일 발견", description: "지역 전역에 20개 이상의 갤러리 — Gosford Regional Gallery부터 Mangrove Mountain 같은 예쁜 시골 마을의 작은 스튜디오까지. 관광 안내소에서 셀프 가이드 아트 트레일 지도를 받으세요." },
      ]
    },
    proTips: {
      en: [
        { tip: "Skip the summer crowds", detail: "Summer weekends at Terrigal and Avoca are packed. Go on a weekday, or head to the less-known beaches like Lobster Beach or Clareville — quieter, just as beautiful, and still Eco-certified." },
        { tip: "Pack for all seasons in one day", detail: "The Central Coast can be 5–10°C cooler than Sydney CBD, especially near the water. Bring a windproof jacket even in summer — the afternoon sea breeze is reliable and can be brisk." },
        { tip: "Download the TransportNSW app", detail: "Train delays on the Central Coast line are common. The TripView feature in the app gives real-time departures so you're not stuck waiting on a platform for 45 minutes." },
        { tip: "Best fish and chips on the coast", detail: "Ettalong Beach's Fisherman's Wharf — order the grilled barramundi with chips and a side of salad. Eat on the deck overlooking the water while the ferries come and go." },
      ],
      ko: [
        { tip: "여름 혼잡 피하기", detail: "주말 Terrigal과 Avoca는 사람이 많습니다. 평일에 가거나 Lobster Beach, Clareville 같은 덜 알려진 해변을 찾아가보세요 — 조용하고 아름답고 생태 인증도 있습니다." },
        { tip: "하루에 사계절 준비", detail: "센트럴 코스트는 시드니 CBD보다 5~10°C 낮을 수 있습니다, 특히 물가에서. 여름에도 방풍 재킷을 챙기세요 — 오후 해풍이 꾸준하고 쌀쌀할 수 있습니다." },
        { tip: "TransportNSW 앱 다운로드", detail: "센트럴 코스트 라인의 기차 지연은 흔합니다. 앱의 TripView 기능으로 실시간 출발 정보를 확인하여 플랫폼에서 45분 기다리지 마세요." },
        { tip: "최고의 피시 앤 칩스", detail: "Ettalong Beach의 Fisherman's Wharf — 그릴드 바라문디와 칩스, 샐러드 사이드를 주문하세요. 페리가 오가는 물가 데크에서 식사 즐기기." },
      ]
    },
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
    howToGetThere: {
      en: "**By air:** The most practical option for most visitors. Fly from Sydney to Ballina Airport (1 hour, from $100 AUD one-way with Jetstar or Rex). From Ballina, a shuttle bus runs to Byron Bay (30 min, ~$25 AUD). Byron Easy Bus and local shuttles meet every flight.\n\n**By car:** Drive via the Pacific Highway (M1) north — it's about 8–9 hours from Sydney without stops. The road is good but long. Break it at Port Macquarie or Coffs Harbour. Parking in Byron is notoriously expensive ($6–$10/hr in the town centre) — many accommodation options include a parking spot.\n\n**By bus:** Greyhound and Premier run daily coaches from Sydney to Byron Bay (12+ hours, ~$80 AUD). An overnight bus saves a night's accommodation but isn't comfortable. Budget option only.\n\n**By train:** The closest station is Casino (2 hrs by connecting bus from Byron), or Brisbane (3 hrs north). Neither is convenient.",
      ko: "**항공:** 대부분 방문객에게 가장 실용적인 옵션. 시드니에서 발리나 공항까지 (1시간, Jetstar 또는 Rex 편도 $100 AUD부터). 발리나에서 Byron Bay까지 셔틀버스 (30분, ~$25 AUD). Byron Easy Bus와 로컬 셔틀이 모든 항공편에 맞춰 운행.\n\n**자동차:** 퍼시픽 하이웨이(M1) 북쪽으로 — 쉬지 않고 시드니에서 약 8~9시간. 도로 상태는 좋지만 깁니다. Port Macquarie나 Coffs Harbour에서 휴식. Byron 주차는 악명 높게 비쌈(시내 $6~$10/시간) — 많은 숙소에 주차 공간 포함.\n\n**버스:** Greyhound와 Premier가 시드니에서 Byron Bay까지 매일 운행 (12+시간, ~$80 AUD). 야간 버스는 숙박비 절약되지만 편안하지 않음. 예산 옵션.\n\n**기차:** 가장 가까운 역은 Casino(Byron에서 연결 버스 2시간), 또는 브리즈번(북쪽 3시간). 둘 다 편리하지 않음."
    },
    bestTimeDetailed: {
      en: "**Spring (Sep–Nov):** The sweet spot. Warm weather (22–28°C), whale migration peaking in September, and the Byron Bay Bluesfest in October. Fewer crowds than summer, water is warm enough for swimming from mid-October. This is when Byron is at its best.\n\n**Summer (Dec–Feb):** Peak season — hot (28–33°C), humid, and crowded. The town is packed, accommodation is 2–3x normal prices, and you'll need to book months ahead. The beaches are beautiful but busy. The pasar malam (night markets) run weekly.\n\n**Autumn (Mar–May):** A lovely transition. The water is still warm from summer, the crowds drop off after Easter, and the hinterland waterfalls are flowing. Perfect for hiking. The Byron Bay International Film Festival runs in March.\n\n**Winter (Jun–Aug):** The quietest time. Too cold for extended swimming (18–20°C water) but perfect for whale watching, coastal walks, and enjoying the cafes without queues. Accommodation prices drop significantly. The lighthouse walks are crisp and clear.",
      ko: "**봄 (9~11월):** 최적기. 따뜻한 날씨(22~28°C), 9월 고래 이동 절정, 10월 Byron Bay Bluesfest. 여름보다 인파 적고 10월 중순부터 수영 가능. Byron이 가장 좋은 계절.\n\n**여름 (12~2월):** 성수기 — 덥고(28~33°C), 습하고, 붐빔. 마을은 인파, 숙소는 2~3배 가격, 몇 달 전 예약 필수. 해변은 아름답지만 사람 많음. 파사르 말람(야시장) 매주 운영.\n\n**가을 (3~5월):** 아름다운 전환기. 수온이 여름의 따뜻함 유지, 부활절 이후 인파 감소, 내륙 폭포가 흐름. 트레킹에 완벽. 3월 Byron Bay 국제 영화제.\n\n**겨울 (6~8월):** 가장 한산한 시기. 장시간 수영에는 너무 추움(수온 18~20°C) but 고래 관찰, 해안 산책, 줄 없는 카페에 완벽. 숙소 가격 대폭 하락. 등대 산책로는 맑고 상쾌함."
    },
    topThingsToDo: {
      en: [
        { title: "Cape Byron Lighthouse walk at sunrise", description: "The 3.7km loop from the Captain Cook lookout to the easternmost point of mainland Australia. Get there for sunrise — the light on the lighthouse, the whales (Jun–Oct), and the resident kangaroos on the headland make it worth the early alarm. Allow 2 hours at a leisurely pace." },
        { title: "Surf at The Pass or Main Beach", description: "The Pass is Byron's most famous right-hand point break — consistent waves for intermediate surfers. Main Beach is better for beginners. Board hire from the Cape is $25–$40 AUD for 2 hours. Lessons available on both beaches." },
        { title: "Explore the hinterland waterfalls", description: "Minyon Falls (30-minute drive), Killen Falls (15 min), and Protesters Falls (45 min) are the standouts — each with a swimming hole at the base. Minyon Falls has a 100m drop and a platypus population in the pool below." },
        { title: "Walk to Wategos Beach", description: "The sheltered cove just below the lighthouse — calm water, soft sand, and a great café. It's a 15-minute walk from the town centre down a steep hill, or park at the lighthouse and walk down. The beach with the million-dollar views." },
        { title: "Browse the Byron Bay Farmers Market", description: "Every Thursday morning at the Butler Street Reserve — organic produce, artisan bread, local honey, and the famous Byron Bay coffee cart. Get there by 8am for the best selection before the tour buses arrive." },
        { title: "Visit the Crystal Castle & Shambhala Gardens", description: "A 15-minute drive into the hinterland — giant crystals (some of the largest in the world), a labyrinth, and rainforest gardens. The café serves excellent organic food. Allow half a day. The peace-pole grove is unexpectedly moving." },
        { title: "Kayak with dolphins in the bay", description: "Go Sea Kayak runs 3-hour guided paddles from the Main Beach — dolphins often swim alongside the kayaks in the bay. The dawn paddle is magical. No experience needed, and they provide all gear." },
      ],
      ko: [
        { title: "일출 케이프 바이런 등대 산책", description: "캡틴 쿡 전망대에서 호주 본토 최동단까지 3.7km 둘레. 일출을 위해 일찍 가세요 — 등대의 빛, 고래(6~10월), 헤드랜드의 캥거루가 일찍 일어난 보답을 합니다. 여유롭게 2시간 소요." },
        { title: "The Pass 또는 Main Beach 서핑", description: "The Pass는 Byron에서 가장 유명한 오른쪽 포인트 브레이크 — 중급자에게 일관된 파도. Main Beach는 초보자에게 더 좋음. Cape에서 보드 대여 2시간 $25~$40 AUD. 두 해변에서 레슨 가능." },
        { title: "내륙 폭포 탐험", description: "Minyon Falls(30분 운전), Killen Falls(15분), Protesters Falls(45분)가 대표적 — 각각 수영장이 있음. Minyon Falls는 100m 낙차와 아래 웅덩이의 오리너구리 개체군으로 유명." },
        { title: "Wategos Beach 산책", description: "등대 아래 보호된 후미 — 잔잔한 바다, 부드러운 모래, 좋은 카페. 시내에서 가파른 언덕을 내려와 15분, 또는 등대에 주차하고 도보. 백만 달러 뷰의 해변." },
        { title: "Byron Bay 파머스 마켓", description: "매주 목요일 오전 Butler Street Reserve — 유기농 농산물, 수제 빵, 로컬 꿀, 유명한 Byron Bay 커피 카트. 투어 버스 도착 전인 오전 8시까지 방문." },
        { title: "Crystal Castle & Shambhala Gardens 방문", description: "내륙으로 15분 운전 — 거대 수정(세계 최대급), 미로, 열대우림 정원. 카페는 훌륭한 유기농 음식 제공. 반나절 예정. 평화의 기둥 그로브는 예상외로 감동적." },
        { title: "만에서 돌고래와 카약", description: "Go Sea Kayak이 Main Beach에서 3시간 가이드 패들 운영 — 돌고래가 종종 카약 옆을 헤엄침. 새벽 패들은 마법 같음. 경험 불필요, 모든 장비 제공." },
      ]
    },
    proTips: {
      en: [
        { tip: "Get a Byron Bay Pass for discounts", detail: "The digital pass ($49 AUD) gives you discounts at 30+ local businesses — including board hire, meals, and the lighthouse. If you're doing 2+ paid activities, it pays for itself." },
        { tip: "Skip the main town centre for food", detail: "The main street restaurants are overpriced tourist traps. Walk 5 minutes to the Industrial Estate (Arts and Industry Estate) for the real Byron — Three Blue Ducks, Combi, and FOLK are the standouts." },
        { tip: "Bring a jumper even in summer", detail: "Byron's coastal location means it gets cool at night year-round. Even a 33°C day can drop to 16°C by 9pm with the sea breeze. You'll need a layer for dinner." },
        { tip: "Book accommodation months ahead for events", detail: "Bluesfest (Easter), NYE, and the school holidays book out Byron 3–6 months in advance. If you're flexible, the quiet weeks between seasons offer the best value — May and November are the sweet spot." },
      ],
      ko: [
        { tip: "Byron Bay Pass 할인 받기", detail: "디지털 패스($49 AUD)로 30개 이상 로컬 업체 할인 — 보드 대여, 식사, 등대 포함. 유료 활동 2개 이상 하면 본전 뽑음." },
        { tip: "음식은 시내 말고 산업단지로", detail: "메인 스트리트 레스토랑은 비싼 관광객 함정. Industrial Estate(Arts and Industry Estate)로 5분만 걸어가면 진짜 Byron — Three Blue Ducks, Combi, FOLK 추천." },
        { tip: "여름에도 재킷 챙기기", detail: "Byron의 해안 위치는 연중 밤에 서늘해짐. 33°C 낮도 해풍으로 오후 9시면 16°C까지 떨어질 수 있음. 저녁에는 겉옷 필요." },
        { tip: "이벤트 기간은 몇 달 전 예약", detail: "Bluesfest(부활절), NYE, 방학 시즌은 3~6개월 전에 Byron 만석. 여유 있다면 시즌 사이의 조용한 주가 최고 — 5월과 11월이 최적기." },
      ]
    },
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
    howToGetThere: {
      en: "**By car:** Head south on the Princes Highway (M1) from Sydney, exit at the Jervis Bay turn-off just past Nowra. The drive to Huskisson takes about 2.5 hours without traffic. Add 30 minutes on a Friday afternoon in summer. Parking in Huskisson is paid ($5/hr) during peak season — the free lot is a 10-minute walk from the main beach.\n\n**By tour bus:** Several operators run day trips from Sydney ($99–$149 AUD return) — most include a dolphin cruise, Hyams Beach visit, and Booderee National Park entry. A good option if you don't want to drive, though you'll be on a schedule.\n\n**No train option:** There's no direct train to Jervis Bay. The closest station is Kiama (2 hrs from Central), then it's a 45-minute drive south. A car is really the best option to see the different beaches and Booderee anyway.",
      ko: "**자동차:** 시드니에서 프린스 하이웨이(M1)를 타고 남쪽으로, Nowra를 지나 Jervis Bay 방향으로 진출. 허스키슨까지 약 2.5시간. 여름 금요일 오후에는 30분 추가. 성수기에는 허스키슨 주차가 유료($5/시간) — 무료 주차장은 메인 비치에서 도보 10분.\n\n**투어 버스:** 여러 업체가 시드니에서 당일치기 운영 ($99~$149 AUD 왕복) — 대부분 돌고래 크루즈, Hyams Beach, Booderee 국립공원 포함. 운전하기 싫다면 좋은 선택이나 일정에 맞춰야 합니다.\n\n**기차 없음:** Jervis Bay로 직행 기차는 없습니다. 가장 가까운 역은 Kiama(시드니 센트럴에서 2시간)에서 남쪽으로 45분 운전. 여러 해변과 Booderee를 보려면 자동차가 가장 좋습니다."
    },
    bestTimeDetailed: {
      en: "**Summer (Dec–Feb):** Peak season — warm water (22–24°C), long daylight hours, and the best conditions for dolphin-swimming. The downside: crowds, higher prices, and holiday traffic on the Princes Highway. Book accommodation months ahead.\n\n**Autumn (Mar–May):** The sweet spot. The water is still warm from summer, the crowds thin out after Easter, and the kangaroos are more active on the beach at dawn. This is when locals say it's at its best.\n\n**Winter (Jun–Aug):** The quietest time. Too cold for extended swimming (14–16°C water), but the whale migration is spectacular — humpbacks pass close to shore Jun–Jul (north) and Sep–Oct (south). The kangaroos come out earlier and stay later.\n\n**Spring (Sep–Nov):** Warming up again. Dolphins are active, the wildflowers are out in Booderee, and the water becomes swimmable by November. Fewer crowds than summer but beautiful conditions.",
      ko: "**여름 (12~2월):** 성수기 — 따뜻한 바다(22~24°C), 긴 일조량, 돌고래 수영에 최적 조건. 단점: 인파, 높은 가격, 프린스 하이웨이 휴가 교통. 숙소는 몇 달 전에 예약.\n\n**가을 (3~5월):** 최적기. 수온이 여름의 따뜻함 유지, 부활절 이후 인파 감소, 새벽 해변에서 캥거루 활동 증가. 현지인들이 가장 좋은 시기라고 말하는 때.\n\n**겨울 (6~8월):** 가장 한산한 시기. 장시간 수영에는 너무 추움(수온 14~16°C), 하지만 고래 이동이 장관입니다 — 혹등고래가 6~7월(북상), 9~10월(남하)에 해안 가까이를 지나갑니다. 캥거루가 더 일찍 나와 더 늦게까지 활동.\n\n**봄 (9~11월):** 다시 따뜻해지는 시기. 돌고래 활동적, Booderee에 야생화 만발, 11월이면 수영 가능. 여름보다 인파 적고 아름다운 조건."
    },
    topThingsToDo: {
      en: [
        { title: "Watch sunrise at Hyams Beach", description: "The whitest sand in Australia (Guinness-certified) — get there at dawn with a thermos of coffee. The sand is pure white silica that stays cool underfoot even in summer. The bay glass-out conditions at sunrise are a photographer's dream." },
        { title: "Swim with wild dolphins", description: "Jervis Bay is home to a resident pod of about 100 bottlenose dolphins. Dolphin Watch Cruises from Huskisson run 2-hour eco-certified tours with a 95%+ sighting rate. In-water swimming (wetsuit provided) is permitted with licensed operators." },
        { title: "Spot kangaroos on the beach at dawn", description: "The only place in NSW where eastern grey kangaroos regularly hop along the beach. Head to the grassy verges at Jervis Bay Village or Green Patch in Booderee National Park just before sunrise. Keep your distance — they're wild, not zoo animals." },
        { title: "Explore Booderee National Park", description: "Formerly a navy base, now one of NSW's most beautiful national parks — white-sand beaches (Green Patch, Cave Beach, Murray's Beach), Aboriginal rock art sites, and coastal walking trails. Entry is about $13 per vehicle. The botanical gardens are a hidden gem." },
        { title: "Walk the White Sands Walk", description: "A 3km coastal trail connecting Huskisson to Hyams Beach through Scribbly Gum forest and coastal heathland. Gentle grade, suitable for all fitness levels. Keep an eye out for lyrebirds and wallabies." },
        { title: "Snorkel at Murrays Beach or Hole in the Wall", description: "Protected coves inside Booderee with excellent visibility, weedy sea dragons, and colourful reef fish. Bring your own snorkel gear — no hire on-site. Best conditions are on calm, overcast days (less glare on the sand)." },
        { title: "Oyster tasting at Greenwell Point", description: "Just 15 minutes north of Jervis Bay, the Greenwell Point oyster farms sell freshly shucked Sydney Rock Oysters from the shed — $15–$20 AUD for a dozen. The Jim Wilds Oyster Service is the one to look for. Eat them on the waterfront picnic tables." },
      ],
      ko: [
        { title: "Hyams Beach 일출 감상", description: "호주에서 가장 흰 모래(기네스 인증) — 보온병 커피 들고 새벽에 도착. 여름에도 발 아래 시원한 순백색 실리카 모래. 일출 때 만이 잔잔해지는 순간은 사진작가의 꿈." },
        { title: "야생 돌고래와 수영", description: "Jervis Bay에는 약 100마리의 병코돌고래 상주. 허스키슨 출발 Dolphin Watch Cruises의 2시간 에코 인증 투어, 95% 이상 관측율. 라이선스 업체를 통해 (잠수복 제공) 인워터 수영 가능." },
        { title: "새벽 해변 캥거루 관찰", description: "NSW에서 캥거루가 정기적으로 해변을 따라 이동하는 유일한 장소. 일출 직전 Jervis Bay Village 또는 Booderee 국립공원의 Green Patch 잔디 지역으로. 거리 유지 — 야생 동물입니다." },
        { title: "Booderee 국립공원 탐험", description: "과거 해군 기지였지만 현재 NSW에서 가장 아름다운 국립공원 중 하나 — 하얀 모래 해변(Green Patch, Cave Beach, Murray's Beach), 원주민 암각화 유적지, 해안 산책로. 차량당 약 $13 AUD. 식물원은 숨겨진 보석." },
        { title: "White Sands Walk 산책", description: "허스키슨에서 Hyams Beach까지 3km 해안 트레일, Scribbly Gum 숲과 해안 관목지를 통과. 완만한 경사로 모든 체력 수준 적합. 거문조와 왈라비 관찰 가능." },
        { title: "Murrays Beach 또는 Hole in the Wall 스노클링", description: "Booderee 내 보호된 후미, 뛰어난 시야, weedy sea dragon, 다양한 색상의 암초 물고기. 스노클 장비 직접 지참 — 현장 대여 없음. 흐린 날(모래 눈부심 적음)에 최적." },
        { title: "Greenwell Point에서 굴 시식", description: "Jervis Bay에서 북쪽으로 15분, Greenwell Point 굴 농장에서 직접 깐 시드니 락 오이스터 — 12개에 $15~$20 AUD. Jim Wilds Oyster Service 추천. 해변 피크닉 테이블에서 즐기세요." },
      ]
    },
    proTips: {
      en: [
        { tip: "Book the dolphin cruise for the first morning slot", detail: "The 8:30am cruise has calmer water and more active dolphins than later runs. You also beat the sea breeze that picks up around 11am, which can make the bay choppy and spotting harder." },
        { tip: "Pack mosquito repellent for dusk", detail: "The coastal bushland around Jervis Bay is prime mosquito territory at dawn and dusk. The repellent will also deter the March flies that come out on still summer days." },
        { tip: "Get lunch supplies in Huskisson before 11am", detail: "The Huskisson General Store bakery sells out of pies and sausage rolls by midday on weekends. The IGA has basic supplies but limited deli options. Stock up on the way in at the Nowra supermarket." },
        { tip: "Avoid school holidays if you can", detail: "Jervis Bay is a favourite for NSW families — school holiday periods (especially Easter and Christmas) double the crowd density. The difference between term-time and holiday is night and day." },
      ],
      ko: [
        { tip: "돌고래 크루즈 첫 아침 시간대 예약", detail: "오전 8:30 크루즈는 더 잔잔한 바다와 더 활동적인 돌고래를 만날 기회. 오전 11시경 해풍이 불기 전이라 만이 출렁이지 않음." },
        { tip: "해질녘 모기퇴치제 필수", detail: "Jervis Bay 주변 해안 관목지는 새벽과 해질녘 모기 천국. 모기퇴치제는 여름 날씨에 나타나는 등에도 효과적." },
        { tip: "오전 11시 전에 허스키슨에서 점심 준비", detail: "허스키슨 제너럴 스토어 베이커리는 주말 정오면 파이와 소시지 롤 매진. IGA에 기본 식품은 있지만 델리 옵션 제한. Nowra 슈퍼마켓에서 미리 준비." },
        { tip: "방학 기간 피하기", detail: "Jervis Bay는 NSW 가족들에게 인기 — 방학(특히 부활절과 크리스마스)에는 인파가 두 배. 학기 중과 방학의 차이는 극명합니다." },
      ]
    },
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
    howToGetThere: {
      en: "**By car:** Take the M1 north from Sydney past Newcastle, then follow the Pacific Highway to the Nelson Bay turn-off (Lemon Tree Passage Road). Total drive time is about 2.5 hours. The last 20 minutes through the Tilligerry Peninsula are scenic but slower — allow extra time. Parking in Nelson Bay is paid during summer ($4/hr, ticket machines accept card).\n\n**By bus:** A coach service runs from Sydney's Central Station to Nelson Bay via Newcastle (3.5 hrs, ~$40 AUD one-way). Port Stephens Coaches also runs daily services. From the Nelson Bay stop, local taxis and Ubers can take you to the main spots.\n\n**No train:** The nearest train station is Newcastle Interchange (2 hrs from Central), then it's a 45-minute car or bus ride east.",
      ko: "**자동차:** M1 북쪽으로 뉴캐슬을 지나 Nelson Bay 진출로(Lemon Tree Passage Road) 진입. 총 2.5시간 소요. Tilligerry 반도를 지나는 마지막 20분은 경치 ��지만 속도가 느림 — 여유 시간 확보. 여름 넬슨 베이 주차는 유료($4/시간, 카드 결제 가능).\n\n**버스:** 시드니 센트럴 역에서 Nelson Bay까지 뉴캐슬 경유 버스 운행(3.5시간, 편도 ~$40 AUD). Port Stephens Coaches도 매일 운행. Nelson Bay 정류장에서 지역 택시/Uber로 주요 명소 이동.\n\n**기차 없음:** 가장 가까운 역은 뉴캐슬 인터체인지(시드니 센트럴에서 2시간), 이후 동쪽으로 45분 자동차/버스."
    },
    bestTimeDetailed: {
      en: "**Summer (Dec–Feb):** Peak season for swimming, snorkelling, and dolphin cruises. Water hits 23–25°C. The sand dunes are at their most dramatic in the summer light. Book everything — accommodation, cruises, sandboarding tours — well ahead.\n\n**Autumn (Mar–May):** The best compromise. Warm enough for all water activities, but the summer crowds are gone. The dolphins are still active, and the sand dunes are less busy. Great for fishing.\n\n**Winter (Jun–Aug):** The dolphin cruises still run (the pod is resident year-round) and the migrating humpbacks pass through Jun–Aug. Sandboarding still works, though you'll want a windproof jacket. The town is quiet and accommodation is cheap.\n\n**Spring (Sep–Nov):** Warming up fast. The water is still cool in September but the days are long and sunny. Whale watching peaks in September. Sand dunes with spring wildflowers on the edges is a unique sight.",
      ko: "**여름 (12~2월):** 수영, 스노클링, 돌고래 크루즈 성수기. 수온 23~25°C. 여름 빛에 사구가 가장 드라마틱. 숙소, 크루즈, 샌드보딩 투어 모두 사전 예약 필수.\n\n**가을 (3~5월):** 최상의 타협점. 모든 수상 활동에 충분히 따뜻하지만 여름 인파는 사라짐. 돌고래 활동적, 사구도 덜 붐빔. 낚시에 좋은 시기.\n\n**겨울 (6~8월):** 돌고래 크루즈 계속 운행(돌고래 무리는 연중 서식), 혹등고래 이동 6~8월 통과. 샌드보딩 가능하나 방풍 재킷 필요. 조용한 마을, 저렴한 숙소.\n\n**봄 (9~11월):** 빠르게 따뜻해짐. 9월 수온은 여전히 차갑지만 긴 일조량과 맑은 날씨. 고래 관측은 9월 절정. 사구 가장자리의 봄 야생화가 독특한 풍경."
    },
    topThingsToDo: {
      en: [
        { title: "Dolphin-watching cruise in Nelson Bay", description: "Over 140 bottlenose dolphins live in the bay year-round — cruises like Moonshadow and Imagine run 1.5–2 hour trips with sighting rates over 95%. Some include a boom net ride to cool off in summer. The 9am cruise is the calmest." },
        { title: "Sandboard the Stockton Bight dunes", description: "The largest moving coastal sand dunes in the southern hemisphere — some slopes reach 30m high. Tours from Nelson Bay include a 4WD transfer and sandboard hire. The adrenaline rush from flying down a 30m dune on a board is unforgettable." },
        { title: "Snorkel at Fly Point Aquatic Reserve", description: "A protected marine reserve a 15-minute walk from Nelson Bay marina — crystal-clear shallow water with weedy sea dragons, rays, blue gropers, and schools of bream. Bring your own gear (no hire on-site). Best at high tide on a calm day." },
        { title: "Walk the Tomaree Headland summit", description: "A steep 30-minute climb to one of the best coastal viewpoints in NSW — 360-degree views of the bay, the dunes, and out to sea. The WWII gun emplacements at the top add a layer of history. Sunrise here is spectacular." },
        { title: "Fish off the Nelson Bay marina", description: "The breakwall near the marina is a popular fishing spot — flathead, bream, and whiting are common. No licence required for saltwater fishing from the shore. The local tackle shop on Stockton Street sells bait and rods." },
        { title: "Kayak through the Myall Lakes", description: "Just north of Port Stephens, the Myall Lakes National Park is a maze of clear waterways surrounded by paperbark forest. Paddle through the channel to the Bombah Point ferry and back. Hire from Bombah Point Eco Cottages or bring your own." },
        { title: "Visit the art galleries at Shoal Bay", description: "A handful of small galleries and studios in this quiet beach town — glassblowing, pottery, and Aboriginal art. The Shoal Bay Country Club also has a great beachfront bistro for lunch." },
      ],
      ko: [
        { title: "Nelson Bay 돌고래 관람 크루즈", description: "140마리 이상의 병코돌고래가 연중 만에 서식 — Moonshadow, Imagine 같은 크루즈가 1.5~2시간 운항, 관측률 95% 이상. 일부는 여름 쿨링 부움 네트 포함. 오전 9시 크루즈가 가장 잔잔함." },
        { title: "Stockton Bight 사구 샌드보딩", description: "남반구 최대 해안 이동 사구 — 일부 경사면 30m 높이. Nelson Bay 투어에 4WD 환승과 샌드보드 대여 포함. 30m 사구를 보드로 내려오는 스릴은 잊을 수 없는 경험." },
        { title: "Fly Point 수중보호구역 스노클링", description: "Nelson Bay 마리나에서 도보 15분 — 수정처럼 맑은 얕은 물에 weedy sea dragon, 가오리, blue groper, 도미 떼. 장비 ��접 지참(현장 대여 없음). 잔잔한 날 만조에 최적." },
        { title: "Tomaree Headland 정상 산책", description: "30분 가파른 등반으로 NSW 최고의 해안 전망대 — 베이, 사구, 바다까지 360도 조망. 정상의 WWII 포대가 역사를 더함. 일출이 장관." },
        { title: "Nelson Bay 마리나 낚시", description: "마리나 근처 방파제는 인기 낚시 명소 — flathead, 도미, whiting 흔함. 해안 낚시는 면허 불필요. Stockton Street의 낚시 용품점에서 미끼와 낚싯대 판매." },
        { title: "Myall Lakes 카약", description: "Port Stephens 북쪽, Myall Lakes 국립공원은 페이퍼바크 숲으로 둘러싸인 맑은 수로의 미로. Bombah Point 페리까지 수로를 따라 패들링. Bombah Point Eco Cottages에서 대여 또는 직접 지참." },
        { title: "Shoal Bay 미술관 방문", description: "조용한 해변 마을의 소규모 갤러리와 스튜디오 — 유리 공예, 도자기, 원주민 미술. Shoal Bay Country Club의 해변 비스트로에서 점심도 추천." },
      ]
    },
    proTips: {
      en: [
        { tip: "Do the dunes in the morning", detail: "The sand heats up fast — by midday in summer it's genuinely hot underfoot. The morning light also makes for better photos. Most sandboarding tours run from 8am." },
        { tip: "Bring reef shoes for Fly Point", detail: "The entry is a mix of sand and small rocky patches. Reef shoes make getting in and out much more comfortable than thongs or bare feet. The marine life is right there — take a waterproof phone pouch for photos." },
        { tip: "Book the dolphin cruise direct, not through a hotel", detail: "Booking direct with Moonshadow or Imagine saves $10–$15 AUD per person compared to hotel concierge bookings. Check their websites for online discounts." },
        { tip: "Lunch at the Nelson Bay Fish Market", detail: "Order the grilled swordfish burger with a side of salt-and-pepper squid and eat at the shared tables overlooking the marina. Fresh, reasonably priced, and the outdoor seating is dog-friendly." },
      ],
      ko: [
        { tip: "아침에 사구 가기", detail: "모래가 빨리 뜨거워짐 — 여름 정오면 발바닥이 진짜 뜨겁습니다. 아침 빛이 사진에도 좋음. 대부분 샌드보딩 투어는 오전 8시 시작." },
        { tip: "Fly Point에 리프 슈즈 필수", detail: "입구가 모래와 작은 바위가 섞여 있음. 리프 슈즈가 플립플롭이나 맨발보다 훨씬 편함. 해양 생물이 가까이 ���으니 방수 폰 파우치도 챙기세요." },
        { tip: "돌고래 크루즈는 직접 예약", detail: "Moonshadow나 Imagine에 직접 예약하면 호텔 컨시어지 대비 1인당 $10~$15 AUD 절약. 온라인 할인 확인." },
        { tip: "Nelson Bay 수산시장 점심", detail: "그릴드 황새치 버거와 소금 후추 오징어 사이드 주문, 마리나 전망의 공유 테이블에서 식사. 신선하고 합리적 가격, 반려견 동반 가능 야외 좌석." },
      ]
    },
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
  {
    slug: "bondi-beach",
    name: { en: "Bondi Beach", ko: "본다이 비치" },
    tagline: { en: "Sydney's iconic beach — surf, coastal walks & Sunday markets", ko: "시드니의 상징적인 해변 — 서핑, 해안 산책, 선데이 마켓" },
    // Aerial view of Bondi Beach with Sydney CBD behind — Pexels (free license)
    heroImg: "/images/bondi_aerial.jpg",
    cardImg: "/images/bondi_aerial.jpg",
    accentColor: "bg-amber-500",
    region: "Eastern Suburbs, Sydney",
    tripLength: "day",
    description: {
      en: "Bondi is Sydney's postcard beach — a golden crescent of sand 7km east of the CBD, famous worldwide for its surf lifesaving heritage, the Bondi to Coogee coastal walk, and the Icebergs ocean pool. It's touristy, yes, but even locals still swim here: catch it at 7am on a weekday and it's pure magic. Between the markets, the pavilion, and the coastal walk starting right at the sand, you can fill an entire day within sight of the water.",
      ko: "본다이는 시드니의 엽서 같은 해변 — CBD 동쪽 7km에 위치한 황금빛 초승달 모래사장으로, 서프 구조대 전통, 본다이~쿠지 해안 산책로, 아이스버그스 오션 풀로 전 세계에 유명합니다. 관광객이 많은 것은 사실이지만, 현지인도 여전히 여기서 수영합니다: 평일 오전 7시에 오면 순수한 마법을 느낄 수 있어요. 마켓, 파빌리온, 해변에서 바로 시작하는 해안 산책로까지, 물이 보이는 곳에서 하루를 가득 채울 수 있습니다."
    },
    highlights: [
      { en: "Bondi to Coogee coastal walk", ko: "본다이~쿠지 해안 산책로", icon: "hiking" },
      { en: "Icebergs ocean pool", ko: "아이스버그스 오션 풀", icon: "swim" },
      { en: "Sunday markets & pavilion", ko: "선데이 마켓 & 파빌리온", icon: "utensils" },
      { en: "Surf lessons for beginners", ko: "초보자 서핑 레슨", icon: "swim" },
    ],
    bestTime: { en: "Year-round; Nov–Mar for swimming, dawn for empty sand", ko: "연중; 수영은 11~3월, 한적한 모래사장은 새벽" },
    gettingThere: { en: "Bus 333 from Circular Quay (~30min) or train to Bondi Junction + bus 380. No direct train.", ko: "서큘러 키에서 333번 버스(~30분) 또는 본다이 정션행 기차 + 380번 버스. 직행 기차 없음." },
    suggestedDays: { en: "Half to full day (beach morning + coastal walk or markets)", ko: "반나절~하루 (오전 해변 + 해안 산책 또는 마켓)" },
    howToGetThere: {
      en: "**By bus:** The 333 runs from Circular Quay via the CBD and Woollahra straight to Bondi Beach ($3.30 Opal, ~30–40 min off-peak). The 380 and 381 run from Bondi Junction station through Bronte. Buses are frequent but can crawl through traffic on summer weekends.\n\n**Train + bus combo:** Train to Bondi Junction (T4 Eastern Suburbs line, ~15 min from Central), then transfer to bus 333 or 380 (~15 min). This is often faster than a direct bus during CBD peak hour.\n\n**By car:** Not recommended in summer — the beachfront car park fills by 9am and rates hit $8+/hr. There are cheaper residential spots 10 minutes' walk away in Bondi, but street parking has time limits.\n\n**From the airport:** Train + airport link to Bondi Junction, then bus 380. About an hour, $20 AUD total including the airport gate fee.",
      ko: "**버스:** 333번이 서큘러 키에서 CBD와 Woollahra를 지나 본다이 비치로 직행($3.30 오팔, 피크 외 ~30~40분). 380번과 381번은 본다이 정션 역에서 브론티를 경유. 버스는 자주 있지만 여름 주말엔 정체가 심할 수 있음.\n\n**기차 + 버스 조합:** 본다이 정션까지 기차(T4 이스턴 서버스 선, 센트럴에서 ~15분), 이후 333번 또는 380번 버스 환승(~15분). CBD 피크 시간에는 직행 버스보다 보통 더 빠름.\n\n**자동차:** 여름에는 비추천 — 해변 주차장이 오전 9시면 만차, 요금 $8+/시간. 본다이 주거지역에 도보 10분 거리의 더 싼 자리가 있지만 주차 시간 제한 있음.\n\n**공항에서:** 공항 링크 + 본다이 정션행 기차, 이후 380번 버스. 약 1시간, 공항 요금 포함 총 $20 AUD."
    },
    bestTimeDetailed: {
      en: "**Summer (Dec–Feb):** 26–30°C, water ~22°C, everything open, and absolutely packed. Lifeguards patrol 8am–5pm. Arrive before 9am or after 4pm for personal space. This is also when the New Year's Eve street party draws the biggest crowds of the year.\n\n**Autumn (Mar–May):** Locals' secret. Water stays warm into April, crowds evaporate, and the coastal walk is at its best — golden light, no humidity.\n\n**Winter (Jun–Aug):** 8–17°C. Swimming is for wetsuit devotees and polar bear plunge crowds (first Sundays). But the walk is empty, cafes are cozy, and room rates at nearby hotels halve.\n\n**Spring (Sep–Nov):** Water warms by late October, September–October is the sweet spot: long days, wildflowers on the cliff path, moderate crowds. Easter and the Spring Racing carnival weekends spike local populations.",
      ko: "**여름 (12~2월):** 26~30°C, 수온 ~22°C, 모든 시설 개방, 완전한 인파. 구조원 오전 8시~오후 5시 감시. 개인 공간을 원하면 오전 9시 전 또는 오후 4시 이후 도착. 새해 전야 거리 파티가 연중 최대 인파를 모은다.\n\n**가을 (3~5월):** 현지인의 비밀. 4월까지 바다가 따뜻하고, 인파는 사라지며, 해안 산책로는 최상 — 황금빛, 습기 없음.\n\n**겨울 (6~8월):** 8~17°C. 수영은 웻수트 마니아와 폴라 베어 플런지(매월 첫 일요일) 군중을 위한 것. 하지만 산책로는 한적하고, 카페는 아늑하며, 인근 호텔 요금은 절반.\n\n**봄 (9~11월):** 10월 말부터 수온 상승, 9~10월이 적기: 긴 낮, 절벽 길의 야생화, 적당한 인파. 부활절과 봄 경마 주말에는 인구 급증."
    },
    topThingsToDo: {
      en: [
        { title: "Walk Bondi to Coogee", description: "The 6km clifftop walk past Tamarama, Bronte, Clovelly and Gordon's Bay is the single best thing to do in Sydney, full stop. Allow 2–2.5 hours one way, start early, and finish at Coogee for a swim and a tram-free bus home." },
        { title: "Swim at Icebergs", description: "The iconic ocean pool at the south end, filled by the Tasman itself. $9 AUD entry, booked online at peak times. Even if you don't swim, the viewing deck and the restaurant make it worth a stop." },
        { title: "Take a surf lesson", description: "Bondi's beach break is genuinely beginner-friendly. 2–3 hour group lessons run ~$100–130 AUD including board and wetsuit, morning slots catch the cleanest waves before the wind picks up." },
        { title: "Browse the Sunday & Tuesday markets", description: "The Bondi Markets on the north end run Sunday 10am–5pm and Tuesday/Wednesday — 200+ stalls of jewellery, art and vintage. Come hungry; the food alley is half the attraction." },
        { title: "Watch sunrise from the north headland", description: "Walk up the track past the holiday park to the lookout above the north end. At dawn in summer the whole crescent glows orange with the CBD skyline behind you — the photo that explains why Bondi is famous." },
        { title: "Do the South Bondi rock pools", description: "Follow the coastal walk 15 minutes south to the Tamarama rock pools — smaller, quieter, locals-only feel. Perfect with a coffee from the kiosk afterwards." },
      ],
      ko: [
        { title: "본다이~쿠지 산책", description: "타마라마, 브론티, 클로벌리, 고든스 베이를 지나는 6km 절벽 산책로는 시드니 최고의 활동입니다. 편도 2~2.5시간, 일찍 시작해서 쿠지에서 수영 후 집으로 버스." },
        { title: "아이스버그스 수영", description: "남쪽 끝의 상징적 오션 풀, 태즈먼 바다가 직접 채움. 입장 $9 AUD, 피크 시간 온라인 예약. 수영 안 해도 전망대와 레스토랑 가치 있음." },
        { title: "서핑 레슨", description: "본다이 비치는 초보자에게 진정으로 친화적. 2~3시간 그룹 레슨 ~$100~130 AUD(보드+웻수트 포함), 오전 슬롯이 바람 불기 전 가장 깨끗한 파도." },
        { title: "선데이·화요일 마켓 구경", description: "본다이 마켓은 북쪽 끝에서 일요일 오전 10시~오후 5시, 화/수요일도 운영 — 200+ 부스의 보석, 예술, 빈티지. 배고프게 오세요; 푸드 골목이 절반의 즐길거리." },
        { title: "북쪽 헤드랜드에서 일출 감상", description: "홀리데이 파크 지나 북쪽 끝 위 전망대까지 도보. 여름 새벽 전체 초승달 해변이 주황빛으로 빛나고 뒤엔 CBD 스카이라인 — 본다이가 왜 유명한지 설명하는 사진." },
        { title: "남본다이 바위 풀", description: "산책로를 남쪽 15분 따라가면 타마라마 바위 풀 — 더 작고 조용한 현지인 느낌. 이후 키오스크 커피와 완벽." },
      ],
    },
    proTips: {
      en: [
        { tip: "Swim between the red and yellow flags", detail: "Non-negotiable at Bondi — the rips here are real and lifeguards close sections when conditions turn. Watch the flags, not the crowd." },
        { tip: "Bus 380 on the way back beats 333", detail: "The 333 into the CBD gets stuck in rush hour; the 380 to Bondi Junction train is almost always faster after 3pm on weekdays." },
        { tip: "Showers on the sand cost $2 for 4 minutes", detail: "Bring coins or tap — change rooms are free but the queues in summer are 15+ minutes. A quick rinse on the beach saves time." },
        { tip: "Kiosk prices are fair, restaurants double them", detail: "The Bondi kiosk at the north end does a $9 burger and great coffee. The promenade restaurants are lovely but expect $25+ mains." },
      ],
      ko: [
        { tip: "빨간색과 노란색 깃발 사이에서 수영", detail: "본다이에서는 협상 불가 — 여기 이안류는 실제이고, 구조원은 조건이 나빠지면 구간을 폐쇄합니다. 인파가 아니라 깃발을 보세요." },
        { tip: "돌아올 땐 380번이 333번보다 낫다", detail: "333번은 CBD 진입 시 퇴근 정체에 막힘; 평일 오후 3시 이후엔 본다이 정션행 380번이 거의 항상 빠름." },
        { tip: "모래 위 샤워는 4분에 $2", detail: "동전 또는 태핑 준비 — 탈의실은 무료지만 여름엔 15분+ 대기. 해변에서 빠르게 헹구는 게 시간 절약." },
        { tip: "키오스크 가격은 합리적, 레스토랑은 두 배", detail: "북쪽 끝 본다이 키오스크는 $9 버거와 훌륭한 커피. 산책로 레스토랑은 좋지만 메인 $25+ 예상." },
      ],
    },
    attractions: [
      {
        name: { en: "Icebergs Pool", ko: "아이스버그스 풀" },
        blurb: {
          en: "The famous heritage ocean pool at Bondi's south end, built into the rocks and filled by wave action. $9 AUD for adults, open daily except Christmas. The adjacent restaurant and viewing terrace are prime people-watching.",
          ko: "본다이 남쪽 끝, 바위에 지어져 파도로 채워지는 유명한 헤리티지 오션 풀. 성인 $9 AUD, 크리스마스 제외 매일 운영. 인접 레스토랑과 전망 테라스는 구경의 명당.",
        },
        time: { en: "1–2 hrs", ko: "1~2시간" },
        cost: { en: "$9 AUD adults, $5 children (some days free for locals)", ko: "성인 $9 AUD, 어린이 $5 (일부 날 지역민 무료)" },
      },
      {
        name: { en: "Bondi to Coogee Coastal Walk", ko: "본다이~쿠지 해안 산책로" },
        blurb: {
          en: "6km of clifftop path linking five beaches and a dozen lookouts. Start at the south end of Bondi past Icebergs. Best done early morning with the sun behind you.",
          ko: "5개 해변과 수십 개 전망대를 잇는 6km 절벽 길. 아이스버그스 지나 본다이 남쪽 끝에서 시작. 해를 등지고 하는 이른 아침이 최고.",
        },
        time: { en: "2–2.5 hrs one way", ko: "편도 2~2.5시간" },
        cost: { en: "Free", ko: "무료" },
      },
      {
        name: { en: "Bondi Pavilion", ko: "본다이 파빌리온" },
        blurb: {
          en: "The 1929 art-deco community hub behind the beach: café, gallery, theatre, change rooms, and the famous blue-and-green bathing boxes on its roof terrace steps.",
          ko: "해변 뒤 1929년 아르데코 커뮤니티 허브: 카페, 갤러리, 극장, 탈의실, 그리고 옥상 테라스 계단의 유명한 청록색 화장실 부스.",
        },
        time: { en: "30–60 mins", ko: "30~60분" },
        cost: { en: "Free (café and gallery donations)", ko: "무료 (카페와 갤러리 후원금)" },
      },
    ],
  },
  {
    slug: "kiama",
    name: { en: "Kiama", ko: "키아마" },
    tagline: { en: "The world's most powerful blowhole & a laid-back south coast town", ko: "세계에서 가장 강력한 블로우홀과 한가로운 사우스 코스트 타운" },
    // The Kiama Blowhole erupting — Wikimedia Commons (CC BY-SA), January 2025
    heroImg: "/images/kiama_blowhole.jpg",
    cardImg: "/images/kiama_blowhole.jpg",
    accentColor: "bg-teal-500",
    region: "South Coast, NSW",
    tripLength: "day",
    description: {
      en: "A 2-hour train ride or drive southwest of Sydney, Kiama is the south coast's best day trip: the famous Blowhole — which can erupt 25 metres into the air when the swell is right — plus a lighthouse headland, a patrolled beach, a farmers market, and one of NSW's great short coastal walks to Jamberoo. The town itself is relaxed and genuinely pretty, all sandstone cottages and sea views, with fish-and-chips on the harbour jetty as the official postcard ending.",
      ko: "시드니에서 남서쪽으로 기차 2시간 또는 운전, 키아마는 사우스 코스트 최고의 당일 여행지: 파도가 맞으면 25미터까지 치솟는 유명한 블로우홀, 등대 헤드랜드, 순찰 해변, 파머스 마켓, 그리고 잼브루오까지 NSW 최고의 짧은 해안 산책로. 타운 자체는 한가롭고 정말 예쁘고, 사암 코티지와 바다 전망에, 항구 제트티에서의 피쉬앤칩스가 공식적인 엽서 같은 마무리."
    },
    highlights: [
      { en: "The Kiama Blowhole", ko: "키아마 블로우홀", icon: "swim" },
      { en: "Kiama Light & headland walk", ko: "키아마 등대 & 헤드랜드 산책", icon: "museum" },
      { en: "Kitty's Beach swimming", ko: "키디스 비치 수영", icon: "swim" },
      { en: "Minnamurra Falls rainforest", ko: "민너머라 폭포 열대우림", icon: "hiking" },
    ],
    bestTime: { en: "Year-round; after big swell for blowhole drama", ko: "연중; 블로우홀의 장관은 파도 큰 뒤" },
    gettingThere: { en: "Direct train from Central (~2hrs, South Coast line) or drive via M1/Hume (~2hrs).", ko: "센트럴에서 직행 기차(~2시간, 사우스 코스트 선) 또는 M1/흄 운전(~2시간)." },
    suggestedDays: { en: "Full day trip, or a relaxed weekend", ko: "당일 하루, 또는 여유로운 주말" },
    howToGetThere: {
      en: "**By train:** Kiama is the terminus of the electrified South Coast line — direct trains from Central run hourly (~2 hours, $18–20 AUD Opal off-peak). The station is a 10-minute walk from the blowhole. This is the easiest way: no driving, and the last 30 minutes of the trip hugs the coastline.\n\n**By car:** Take the M1 (Princes Motorway) south via Helensburgh, then the Old Hume Highway or M1 to Kiama. ~2 hours from Sydney, 120km. Exit at Kiama and follow signs to Blowhole Point — free parking at the headland car park and the foreshore carparks, though the blowhole lot fills on summer weekends.\n\n**As part of a tour:** Day tours from Sydney combine Kiama with the Nan Tien Temple in Wollongong (~$150–190 AUD). Good if you want the blowhole plus the Southern Highlands on one sweep, but independent trains are cheaper.\n\n**On foot/cycle in town:** Everything central — blowhole, lighthouse, library, jetty, shops — is walkable in 15 minutes. The Bombo headland and the coastal walks need a car or a solid bike.",
      ko: "**기차:** 키아마는 사우스 코스트 전철선의 종점 — 센트럴에서 직행 기차가 매시(~2시간, 피크 외 $18~20 AUD 오팔). 역에서 블로우홀까지 도보 10분. 가장 쉬운 방법: 운전 불필요, 여행 마지막 30분은 해안을 따라감.\n\n**자동차:** M1(프린세스 모터웨이)로 헬렌스버그 지나 구 흄 하이웨이 또는 M1로 키아마. 시드니에서 ~2시간, 120km. 키아마에서 빠져 블로우홀 포인트 표지 따라가면 — 헤드랜드 주차장과 해안 주차장은 무료지만 여름 주말엔 블로우홀 주차장 만차.\n**투어 일부로:** 시드니발 데이가이드는 울렁공의 난전 사원과 키아마를 결합(~$150~190 AUD). 블로우홀과 사우스던 하일랜즈를 한 번에 원하면 좋지만, 기차로 자유롭게 가는 게 더 쌉니다.\n**도보/자전거:** 중심부 모든 것 — 블로우홀, 등대, 도서관, 제트티, 상점 — 15분 안에 도보 가능. 봄보 헤드랜드와 해안 산책로는 차나 탄탄한 자전거 필요."
    },
    bestTimeDetailed: {
      en: "**Any season with a south-southeast swell (check Surf Life Saving forecasts):** The blowhole needs wave energy — calm days produce a dribble, a 2-metre swell produces a 25-metre column and a wet camera. Early morning after a big overnight swell is the money shot.\n\n**Summer (Dec–Feb):** Beach season. Kitty's Beach and Collins Beach are patrolled, the foreshore is alive, and the Blowhole Point café does good ice cream. Add the Tuesday farmers market. Weekends are busy with day-trippers; weekdays feel like a real town.\n\n**Autumn (Mar–May):** The locals' favourite: warm water lingering, humpback whales migrating past the headland (May–July, often visible from Blowhole Point), and the coastal walk colours turning.\n\n**Winter (Jun–Aug):** 8–16°C and grey-blue moody — which is exactly right for the blowhole. Whale watching peaks, the town is quiet, and pub fireplaces get their moment.\n\n**Spring (Sep–Nov):** Wildflowers on Bombo headland, warming water, and the Easter weekend food festival draws a big crowd.",
      ko: "**남남동 파도가 있는 모든 계절 (서프 라이프 세이빙 예보 확인):** 블로우홀은 파도 에너지 필요 — 잔잔한 날은 조금 뿜고, 2미터 스웰은 25미터 기둥과 젖은 카메라를 만듦. 큰 밤 파도 뒤 이른 아침이 결정적 사진.\n\n**여름 (12~2월):** 해변 계절. 키디스 비치와 콜린스 비치는 순찰되고, 해안은 생기가 돌고, 블로우홀 포인트 카페의 아이스크림이 좋음. 화요일 파머스 마켓 추가. 주말은 당일 방문객으로 붐비고, 평일은 진짜 마을 느낌.\n\n**가을 (3~5월):** 현지인 최애: 남은 바닷물 온도, 혹등고래가 헤드랜드 앞 통과(5~7월, 블로우홀 포인트에서 자주 목격), 해안 산책로의 단풍.\n\n**겨울 (6~8월):** 8~16°C의 회청색 무드 — 블로우홀에 딱 맞음. 고래 관측 절정, 마을은 고요, 펍 벽난로의 순간.\n\n**봄 (9~11월):** 봄보 헤드랜드의 야생화, 오르는 수온, 부활절 주말 푸드 페스티벌은 큰 인파."
    },
    topThingsToDo: {
      en: [
        { title: "See the Blowhole erupt", description: "The viewing platform at Blowhole Point is free and always impressive, but check a swell forecast first — an hour after a 6–8 second south swell arrives, you'll get the full 25m eruption and you WILL get sprayed. The picnic area on the headland is the spot for lunch with a view." },
        { title: "Walk the Kiama coastal track to Jamberoo", description: "The Minnamarras to Bombo section of the Sea Cliff Bridge-style track (part of the Kiama Coastal Walk) runs 7.5km of headlands, lookouts and small beaches on well-formed single track. Start at Bombo and finish at Minnamurra Falls for the best version." },
        { title: "Climb to the Kiama Light", description: "The 1887 lighthouse on Blowhole Point isn't open inside, but the headland circuit around it is a beautiful 30-minute loop with the blowhole, the whale lookout, and the best sunset angle in town." },
        { title: "Fish-and-chips on the jetty", description: "The Kiama Harbour jetty at the south end of the beach: takeaway from the kiosk, sit on the boards, watch the prawn boats. Under $15 AUD a head and a genuine south-coast ritual." },
        { title: "Swim at Kitty's Beach", description: "A sheltered patrolled beach 5 minutes south of the blowhole with a natural rock pool at low tide — calmer and cleaner-feeling than Bondi. The Little Blowhole next door is a quieter second act." },
        { title: "Take the Minnamurra Rainforest walk", description: "15 minutes north, this pocket subtropical rainforest walk (45–60 mins, boardwalked) ends at Minnamurra Falls — a cool, ferny counterpoint to all that salt air, free to enter." },
      ],
      ko: [
        { title: "블로우홀 분수 감상", description: "블로우홀 포인트 전망대는 무료고 늘 인상적이지만, 먼저 스웰 예보 확인 — 6~8초 남쪽 스웰 도착 후 1시간이면 25미터 완전 분수와 물세례. 헤드랜드 피크닉 구역은 전망 좋은 점심 장소." },
        { title: "키아마 해안 트레일~잼브루오 산책", description: "키아마 해안 워크의 미남라스~봄보 구간은 7.5km의 헤드랜드, 전망대, 작은 해변을 잘 정비된 원 트랙으로 지남. 봄보에서 시작해 민너머라 폭포에서 끝내는 게 최고 버전." },
        { title: "키아마 등대까지 오르기", description: "블로우홀 포인트의 1887년 등대는 내부는 개방 안 하지만, 둘레의 헤드랜드 서킷은 30분의 아름다운 루프로 블로우홀, 고래 전망대, 타운 최고의 노을 각도를 품음." },
        { title: "제트티에서 피쉬앤칩스", description: "해변 남쪽 끝 키아마 하버 제트티: 키오스크에서 테이크아웃, 판자 위에 앉아 새우 배를 구경. 1인 $15 AUD 미만이고 진정한 사우스 코스트 의식." },
        { title: "키디스 비치 수영", description: "블로우홀 남쪽 5분의 순찰되는 보호 해변, 간조 땐 자연 바위 풀 — 본다이보다 잔잔하고 깨끗한 느낌. 바로 옆 리틀 블로우홀은 조용한 두 번째 무대." },
        { title: "민너머라 열대우림 산책", description: "북쪽 15분, 이 주머니 아열대 우림 산책로(45~60분, 데크)는 민너머라 폭포에서 끝남 — 짠 공기 뒤에 좋은 시원한 고사리 대비, 입장 무료." },
      ],
    },
    proTips: {
      en: [
        { tip: "Time your visit to the swell, not the sun", detail: "Check Surf Life Saving NSW or Windy for a south-southeast swell of 2m+. The blowhole on a calm day is a sad puddle; after a swell it's the reason people drive 2 hours." },
        { tip: "The Little Blowhole is quieter (and still sprays)", detail: "One headland south of the main blowhole — fewer tour buses, a proper geyser, and Bombo Beach below for a swim after." },
        { tip: "Tuesday is market day", detail: "The Kiama Farmers Market at the showground (9am–1pm) is genuinely good: local oysters, mountain honey, sourdough. Buy pastries before 11am." },
        { tip: "Train back before the road closes", detail: "The Princes Highway through the escarpment occasionally shuts in storms. The train from Kiama to Central is immune to that and runs till 9pm+. If weather turns, go by rail." },
      ],
      ko: [
        { tip: "해가 아니라 스웰에 맞춰 방문", detail: "NSW 서프 라이프 세이빙 또는 Windy에서 2m+ 남남동 스웰 확인. 잔잔한 날 블로우홀은 처참하지만, 스웰 뒤엔 2시간을 운전하는 이유 그 자체." },
        { tip: "리틀 블로우홀이 더 한적(그래도 물 튐)", detail: "주 블로우홀 남쪽 헤드랜드 하나 — 관광버스 적고, 진짜 간헐천 있고, 아래 봄보 해변에서 수영 가능." },
        { tip: "화요일은 마켓 데이", detail: "쇼그라운드의 키아마 파머스 마켓(오전 9시~오후 1시)은 진짜 좋음: 지역 굴, 마운틴 허니, 사워도우. 페이스트리는 오전 11시 전에." },
        { tip: "도로 폐쇄 전에 기차로 귀가", detail: "절벽을 지나는 프린세스 하이웨이는 폭풍 시 가끔 통제. 키아마~센트럴 기차는 영향 없고 밤 9시+까지 운행. 날씨가 궂으면 기차로." },
      ],
    },
    attractions: [
      {
        name: { en: "The Blowhole & Blowhole Point", ko: "블로우홀 & 블로우홀 포인트" },
        blurb: {
          en: "A natural basalt cavern in the cliff face that compresses wave energy and erupts a geyser up to 25m high. Free viewing platform, picnic area, and café. Best 1–2 hours after a south swell arrives.",
          ko: "절벽면의 천연 현무암 동굴이 파도 에너지를 압축해 최대 25m 간헐천을 분출. 무료 전망대, 피크닉 구역, 카페. 남쪽 스웰 도착 후 1~2시간 뒤 최고.",
        },
        time: { en: "1 hr", ko: "1시간" },
        cost: { en: "Free", ko: "무료" },
      },
      {
        name: { en: "Kiama Lighthouse headland circuit", ko: "키아마 등대 헤드랜드 서킷" },
        blurb: {
          en: "A 30-minute loop from the blowhole past the 1887 lighthouse to the whale-watching lookout, with Tasman Sea panoramas the whole way. Prime sunset spot.",
          ko: "블로우홀에서 1887년 등대를 지나 고래 관측 전망대까지 30분 루프, 내내 태즈먼 바다 파노라마. 노을 명당.",
        },
        time: { en: "30–45 mins", ko: "30~45분" },
        cost: { en: "Free", ko: "무료" },
      },
      {
        name: { en: "Minnamurra Rainforest & Falls", ko: "민너머라 열대우림 & 폭포" },
        blurb: {
          en: "Pocket subtropical rainforest 15 min north of Kiama with boardwalk loops (20–90 mins) ending at a 12m waterfall. Cool, green, and free.",
          ko: "키아마 북쪽 15분, 데크 루프(20~90분)가 12m 폭포에서 끝나는 주머니 아열대 우림. 시원하고 푸르고 무료.",
        },
        time: { en: "1–1.5 hrs", ko: "1~1.5시간" },
        cost: { en: "Free", ko: "무료" },
      },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find(d => d.slug === slug);
}
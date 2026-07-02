// Server component — bilingual Sydney beaches guide.
// Practical info, safety, and editorial style.

import { En, Ko } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { Beach, Sun, MapPin, Shield, Flag, AlertTriangle, Umbrella } from "@/components/Icons";
import { seoFor, withSeo } from "@/lib/seo";

type BeachSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; en: string; ko: string }>;
};

const sections: BeachSection[] = [
  {
    id: "bondi",
    iconKey: "Beach",
    accent: "coast",
    title: "Bondi Beach",
    koTitle: "본다이 비치",
    desc: "Sydney's most famous beach — how to get there and what to expect",
    koDesc: "시드니에서 가장 유명한 해변 — 가는 방법과 즐기는 법",
    items: [
      { label: "How to Get There", en: "Take bus 333 from the CBD (Bondi Junction or Circular Quay). Bus 380 also runs from Bondi Junction. Trip takes about 30 minutes from the city centre. Catch the train to Bondi Junction station first (T4 Eastern Suburbs line), then jump on the 333 bus — it's the last leg of the journey and passes through some of Sydney's nicest suburbs.", ko: "CBD에서 333번 버스를 타세요(Bondi Junction 또는 Circular Quay 출발). 380번 버스도 Bondi Junction에서 운행됩니다. 시내에서 약 30분 소요. 먼저 기차(T4 Eastern Suburbs Line)로 Bondi Junction 역까지 간 후 333번 버스를 타면 됩니다." },
      { label: "Best Time to Go", en: "Weekday mornings are quietest — perfect for a relaxed swim. Weekends get packed, especially between 10am-4pm. Summer (Dec-Feb) is peak season with daytime temps around 26-30°C. Autumn (Mar-May) and spring (Sep-Nov) offer pleasant weather with fewer crowds.", ko: "평일 아침이 가장 한적합니다 — 여유로운 수영에 완벽합니다. 주말은 특히 오전 10시-오후 4시 사이에 매우 붐빕니다. 여름(12월-2월)은 성수기로 주간 기온이 26-30°C입니다. 가을(3월-5월)과 봄(9월-11월)은 사람이 적고 날씨가 좋습니다." },
      { label: "Facilities", en: "Public toilets, outdoor showers, change rooms, and lockers available. Bondi Pavilion has a café, bar, and community centre. Multiple surf schools operate on the southern end. Lifeguards patrol the flagged area year-round — swim between the red and yellow flags.", ko: "공중 화장실, 야외 샤워실, 탈의실, 사물함이 있습니다. Bondi Pavilion에는 카페, 바, 커뮤니티 센터가 있습니다. 남쪽 끝에서 여러 서핑 스쿨이 운영됩니다. 연중 구조원이 깃발 구역을 감시합니다 — 빨간색과 노란색 깃발 사이에서 수영하세요." },
      { label: "Bondi to Coogee Walk", en: "The famous 6km coastal walk starts at Bondi's southern end (past the Icebergs pool). Takes about 2 hours one way, passing Tamarama, Bronte, and Clovelly beaches. Lots of photo stops, cafes, and rock pools along the way. Do it early morning before it gets too hot.", ko: "유명한 6km 해안 산책로는 Bondi 남쪽 끝(Icebergs 수영장 지나)에서 시작됩니다. 편도 약 2시간, Tamarama, Bronte, Clovelly 해변을 지납니다. 사진 찍기 좋은 곳, 카페, 암석 수영장이 많습니다. 더워지기 전 이른 아침에 가보세요." },
      { label: "Icebergs Pool", en: "The famous ocean pool at Bondi's southern end. Entry is about $9 AUD for adults. The pool is filled by ocean waves — cold but refreshing. Great photo spot overlooking the beach. Open every day except Christmas. The attached restaurant is a great spot for brunch.", ko: "Bondi 남쪽 끝에 있는 유명한 바다 수영장입니다. 입장료는 성인 약 $9 AUD입니다. 파도로 채워지는 수영장 — 차갑지만 상쾌합니다. 해변을 내려다보는 멋진 사진 명소입니다. 크리스마스 외에는 매일 운영합니다." },
    ],
  },
  {
    id: "manly",
    iconKey: "Beach",
    accent: "sunset",
    title: "Manly Beach",
    koTitle: "맨리 비치",
    desc: "The ferry ride alone is worth it — Sydney's northern beach paradise",
    koDesc: "페리 타는 것만으로도 가치 있는 — 시드니 북부의 해변 파라다이스",
    items: [
      { label: "How to Get There", en: "Take the F1 ferry from Circular Quay to Manly Wharf — a 30-minute scenic ride across the harbour. Opal fare is about $11 AUD each way. This is one of the best value experiences in Sydney. Alternatively, take the L90 bus from Wynyard Station (1 hour, cheaper but less scenic).", ko: "Circular Quay에서 Manly Wharf까지 F1 페리를 타세요 — 항구를 가로지르는 30분의 경치 좋은 항해입니다. Opal 요금은 편도 약 $11 AUD입니다. 시드니에서 가장 가성비 좋은 경험 중 하나입니다. 또는 Wynyard 역에서 L90 버스(1시간, 저렴하지만 경치는 덜함)를 탈 수 있습니다." },
      { label: "The Corso", en: "The pedestrian-only strip that connects Manly Wharf directly to Manly Beach. Lined with cafes, restaurants, surf shops, and ice cream places. About 200 metres of pure beach-town energy. Grab a coffee or a cold drink and walk straight through to the sand.", ko: "Manly Wharf에서 Manly Beach까지 직접 연결되는 보행자 전용 도로입니다. 카페, 레스토랑, 서핑숍, 아이스크림 가게가 늘어서 있습니다. 약 200m의 순수한 해변 마을 에너지. 커피나 시원한 음료를 사서 모래사장까지 걸어가보세요." },
      { label: "Surf Conditions", en: "Manly has consistent waves year-round — popular with surfers. The southern end (South Steyne) is generally calmer, good for beginners. The northern end (Queenscliff and North Steyne) has bigger waves for experienced surfers. Swim between the flags — lifeguards patrol daily.", ko: "Manly는 연중 일관된 파도가 있어 서퍼들에게 인기입니다. 남쪽 끝(South Steyne)은 일반적으로 잔잔해 초보자에게 좋고, 북쪽 끝(Queenscliff, North Steyne)은 경험자에게 큰 파도가 있습니다. 깃발 사이에서 수영하세요 — 구조원이 매일 순찰합니다." },
      { label: "Shelly Beach", en: "A sheltered beach just a 10-minute walk from Manly's main beach (head past the aquarium). Calm, protected waters — perfect for snorkelling, families, and beginner swimmers. Less crowded than Manly main beach. Good spot to see fish and occasional sea turtles.", ko: "Manly 본해변에서 도보 10분 거리(수족관 지나서)의 보호된 해변입니다. 잔잔하고 보호된 바다 — 스노클링, 가족, 초보 수영객에게 완벽합니다. Manly 본해변보다 덜 붐빕니다. 물고기와 가끔 바다거북을 볼 수 있습니다." },
      { label: "Manly to Spit Walk", en: "One of Sydney's best coastal walks — 10km from Manly to The Spit Bridge. Takes about 3-4 hours through national park, stunning viewpoints, secluded beaches. Start early and bring water and sunscreen. Public transport returns from The Spit to the city.", ko: "시드니 최고의 해안 산책로 중 하나 — Manly에서 The Spit Bridge까지 10km입니다. 국립공원, 멋진 전망대, 한적한 해변을 지나 약 3-4시간 소요. 일찍 출발하고 물과 자외선 차단제를 챙기세요. The Spit에서 시내로 가는 대중교통이 있습니다." },
    ],
  },
  {
    id: "palm-beach",
    iconKey: "MapPin",
    accent: "coast",
    title: "Palm Beach & Northern Beaches",
    koTitle: "팜 비치 & 노던 비치",
    desc: "Sydney's northernmost beaches — quieter, wilder, and absolutely stunning",
    koDesc: "시드니 최북단 해변 — 조용하고, 자연 그대로이며, 절대적으로 아름다운",
    items: [
      { label: "How to Get There", en: "Take the L90 bus from Wynyard Station (about 1.5 hours, Opal fare ~$5 AUD) or drive north via the A3 and Barrenjoey Road. The L90 runs along the coast past Dee Why, Collaroy, Mona Vale, and Newport before reaching Palm Beach. Driving from the CBD takes about 50 minutes outside peak times.", ko: "Wynyard 역에서 L90 버스(약 1.5시간, Opal 요금 약 $5 AUD)를 타거나 A3와 Barrenjoey Road를 통해 북쪽으로 운전하세요. L90은 Dee Why, Collaroy, Mona Vale, Newport를 지나 해안을 따라 Palm Beach까지 운행됩니다. CBD에서 운전하면 피크 타임 외에 약 50분 소요." },
      { label: "Barrenjoey Lighthouse", en: "The iconic lighthouse at the northern tip of Palm Beach. A 30-minute walk to the top with panoramic views of the ocean, Pittwater, and the Central Coast. The lighthouse itself dates from 1881 and is a heritage site. Open for tours on Sundays (check website). Sunset from here is spectacular.", ko: "Palm Beach 북쪽 끝에 있는 상징적인 등대입니다. 정상까지 30분 도보로 바다, Pittwater, Central Coast의 파노라마 뷰를 감상할 수 있습니다. 등대 자체는 1881년에 지어진 문화유산입니다. 일요일 투어 가능(웹사이트 확인). 여기서 보는 일몰이 장관입니다." },
      { label: "Home & Away Beach", en: "Palm Beach is the filming location for the famous Australian TV show 'Home and Away'. The palm trees on the main beach are recognisable from the show's opening credits. The surf club building also appears regularly. Fans of the show will recognise many spots along the beachfront.", ko: "Palm Beach는 유명한 호주 TV 프로그램 'Home and Away'의 촬영지입니다. 본해변의 야자수는 프로그램 오프닝 크레딧에서 알아볼 수 있습니다. 서프 클럽 건물도 자주 등장합니다. 프로그램 팬이라면 해변가의 많은 장소를 알아볼 것입니다." },
      { label: "Pittwater & Kayaking", en: "The western side of Palm Beach faces Pittwater — a calm, sheltered waterway perfect for kayaking, paddleboarding, and sailing. Rentals available at the marina. You can paddle to the Basin, a popular campground with a beautiful beach on the western side. Book ahead for camping.", ko: "Palm Beach 서쪽은 Pittwater를 마주하고 있습니다 — 카약, 패들보드, 요트에 완벽한 잔잔하고 보호된 수로입니다. 마리나에서 대여 가능합니다. 서쪽에 아름다운 해변이 있는 인기 캠핑장인 Basin까지 패들링할 수 있습니다. 캠핑은 사전 예약 필수." },
      { label: "Best Beaches Along the Way", en: "Dee Why Beach (great family beach with a lagoon), Collaroy Beach (famous for the collapsed beach house photos), Mona Vale (good surf break), Newport (chic beachside cafes), Avalon (village vibe with great food), Whale Beach (stunning and quiet). Each stop is worth exploring — take the bus and hop on and off.", ko: "Dee Why Beach(라군이 있는 좋은 가족 해변), Collaroy Beach(무너진 해변가 주택 사진으로 유명), Mona Vale(좋은 파도), Newport(세련된 해변 카페), Avalon(좋은 음식이 있는 마을 분위기), Whale Beach(멋지고 조용함). 각 정류장을 탐험할 가치가 있습니다 — 버스를 타고 자유롭게 승하차하세요." },
    ],
  },
  {
    id: "bronte-coogee",
    iconKey: "Beach",
    accent: "coast",
    title: "Bronte, Coogee & Eastern Suburbs",
    koTitle: "브론티, 쿠지 & 이스턴 서브럽스",
    desc: "Hidden gems along Sydney's eastern coastline — quieter alternatives to Bondi",
    koDesc: "시드니 동부 해안선의 숨겨진 보석 — 본다이의 조용한 대안",
    items: [
      { label: "Bronte Beach", en: "A small, family-friendly beach just 2km south of Bondi. Known for its ocean pool (free), large park with BBQ facilities, and a relaxed vibe. The Bronte to Bondi walk connects the two beaches along the cliffs. Best for a quieter swim or a picnic on the grass.", ko: "Bondi에서 남쪽으로 2km 떨어진 작은 가족 친화적 해변입니다. 바다 수영장(무료), BBQ 시설이 있는 넓은 공원, 여유로운 분위기로 유명합니다. Bronte to Bondi 산책로가 절벽을 따라 두 해변을 연결합니다." },
      { label: "Coogee Beach", en: "A beautiful crescent-shaped beach 4km south of Bondi. Bustling beachfront with cafes, restaurants, and pubs right on the sand. The Coogee Pavilion rooftop bar is a great spot for sunset drinks. The Wylie's Baths ocean pool at the southern end is a historic gem.", ko: "Bondi에서 남쪽으로 4km 떨어진 아름다운 초승달 모양의 해변입니다. 모래사장 바로 앞에 카페, 레스토랑, 펍이 있는 활기찬 해변가입니다. Coogee Pavilion 옥상 바는 일몰 음주에 좋은 장소입니다." },
      { label: "Clovelly Beach", en: "A narrow, sheltered bay between Bronte and Coogee — more like a long pool than a typical beach. Perfect for snorkelling, calm swimming, and families. Protected from waves by the narrow entrance. The underwater trail has info plaques about marine life.", ko: "Bronte와 Coogee 사이의 좁고 보호된 만 — 전형적인 해변보다 긴 수영장에 가깝습니다. 스노클링, 잔잔한 수영, 가족에게 완벽합니다. 좁은 입구가 파도를 막아줍니다. 해저 산책로에는 해양 생물에 대한 정보 패널이 있습니다." },
      { label: "Gordon's Bay", en: "A tiny secluded bay between Clovelly and Coogee. One of Sydney's best snorkelling spots with diverse marine life and a dedicated underwater nature trail. Hard to spot from the road — look for the stairs near the southern end of Clovelly Beach. Quiet even on busy days.", ko: "Clovelly와 Coogee 사이의 작은 한적한 만입니다. 다양한 해양 생물과 전용 해저 자연 산책로가 있는 시드니 최고의 스노클링 명소 중 하나입니다. 도로에서 찾기 어렵습니다 — Clovelly Beach 남쪽 끝 근처 계단을 찾으세요." },
    ],
  },
];

const safetyTips = [
  {
    icon: "Flag",
    title: "Swim Between the Flags",
    en: "Red and yellow flags mark the safest swimming zone supervised by professional lifeguards. Never swim outside the flags — even strong swimmers can be caught in rips. If you see only one flag, stay near it. If no flags are visible, do not swim — the beach may be closed or unpatrolled.",
    ko: "빨간색과 노란색 깃발은 전문 구조원이 감독하는 가장 안전한 수영 구역을 표시합니다. 절대 깃발 밖에서 수영하지 마세요 — 수영을 잘하는 사람도 이안류에 휩쓸릴 수 있습니다. 깃발이 하나만 보이면 그 근처에 머무르세요. 깃발이 보이지 않으면 수영하지 마세요 — 해변이 폐쇄되었거나 순찰 중이 아닐 수 있습니다.",
  },
  {
    icon: "AlertTriangle",
    title: "Rips — What to Do",
    en: "Rip currents are the #1 hazard on Australian beaches. They look like darker, calmer channels between breaking waves. If caught: don't panic, don't fight the current. Float on your back and raise one arm to signal a lifeguard. The rip will eventually release you. Swim parallel to the shore to escape, then swim back in with the waves.",
    ko: "이안류는 호주 해변의 #1 위험 요소입니다. 부서지는 파도 사이의 더 어둡고 잔잔한 채널처럼 보입니다. 휩쓸리면: 당황하지 말고, 해류와 싸우지 마세요. 등을 대고 떠서 한 팔을 들어 구조원에게 신호하세요. 해안과 평행하게 수영하여 벗어난 후 파도를 타고 돌아오세요.",
  },
  {
    icon: "Sun",
    title: "SPF 50+ Is Essential",
    en: "The Australian sun is extreme — UV index regularly hits 11+ (Extreme) in summer. You can sunburn in just 11 minutes. Apply SPF 50+ broad-spectrum sunscreen 20 minutes before going outside, and reapply every 2 hours and after swimming. Follow Slip, Slop, Slap, Seek, Slide — Slip on a shirt, Slop on sunscreen, Slap on a hat, Seek shade, Slide on sunglasses.",
    ko: "호주의 자외선은 극심합니다 — 여름에 자외선 지수가 11+(매우 높음)까지 정기적으로 올라갑니다. 11분 만에 햇볕에 탈 수 있습니다. 외출 20분 전에 SPF 50+ 광범위 자외선 차단제를 바르고 2시간마다 그리고 수영 후에 다시 바르세요. Slip(셔츠 입기), Slop(선크림 바르기), Slap(모자 쓰기), Seek(그늘 찾기), Slide(선글라스 끼기)를 기억하세요.",
  },
  {
    icon: "AlertTriangle",
    title: "Bluebottles (Jellyfish)",
    en: "Bluebottle jellyfish are common Nov-Apr. They have a blue-purple float and long tentacles. Their sting is painful but rarely dangerous. If stung: rinse with seawater (NOT fresh water — it activates remaining stingers), pick off tentacles with a gloved hand or stick, apply hot water or ice pack. Do NOT use vinegar on NSW beaches. Lifeguards close beaches if dangerous jellyfish appear.",
    ko: "블루보틀 해파리는 11월-4월에 흔합니다. 청보라색 부유물과 긴 촉수를 가지고 있습니다. 쏘이면 아프지만 위험한 경우는 드뭅니다. 쏘였을 때: 바닷물로 헹구고(민물은 남은 자극기를 활성화시켜 더 나쁨), 장갑 낀 손이나 막대로 촉수를 제거하고, 뜨거운 물이나 얼음팩을 대세요. NSW 해변에서는 식초를 사용하지 마세요.",
  },
  {
    icon: "Shield",
    title: "Rock Platforms & Waves",
    en: "Rock platforms are slippery and dangerous. Sudden 'sneaker waves' can knock you off your feet. Never turn your back on the ocean. Check tide times before walking on rocks — Stick to marked paths. Every year injuries occur from people being swept off rocks while fishing or taking photos.",
    ko: "암석 플랫폼은 미끄럽고 위험합니다. 갑작스러운 '스니커 파도'가 당신을 넘어뜨릴 수 있습니다. 절대 바다에 등을 보이지 마세요. 바위를 걷기 전에 조수 시간을 확인하고 지정된 경로를 이용하세요. 매년 낚시나 사진 촬영 중 바위에서 휩쓸려 부상당하는 사고가 발생합니다.",
  },
  {
    icon: "Sun",
    title: "Stay Hydrated",
    en: "Sydney summers are hot and humid. Bring at least 1L of water per person for a few hours at the beach. Combined with sun exposure and swimming, dehydration happens fast. Signs include headache, dizziness, dry mouth, and dark urine. Avoid alcohol at the beach in hot weather — it dehydrates you.",
    ko: "시드니 여름은 덥고 습합니다. 해변에서 몇 시간 동안 1인당 최소 1L의 물을 가져오세요. 태양 노출과 수영이 겹치면 탈수가 빠르게 일어납니다. 두통, 어지러움, 입마름, 진한 소변 등의 증상이 있습니다. 더운 날씨에 해변에서 알코올은 피하세요 — 탈수를 촉진합니다.",
  },
];

const packingList = [
  { en: "SPF 50+ sunscreen", ko: "SPF 50+ 자외선 차단제" },
  { en: "Reusable water bottle (1L+)", ko: "재사용 가능한 물병 (1L+)" },
  { en: "Sunglasses (polarised recommended)", ko: "선글라스 (편광 렌즈 추천)" },
  { en: "Wide-brim hat", ko: "챙 넓은 모자" },
  { en: "Towel", ko: "수건" },
  { en: "Rashie / UV protective swim shirt", ko: "래시가드 / 자외선 차단 수영복" },
  { en: "Flip-flops / thongs", ko: "슬리퍼 / 쪼리" },
  { en: "Dry bag for phone and wallet", ko: "휴대폰과 지갑용 방수 가방" },
  { en: "Snacks (sandwich, fruit, muesli bar)", ko: "간식 (샌드위치, 과일, 뮤즐리바)" },
  { en: "Light beach shelter or umbrella", ko: "경량 비치 텐트 또는 파라솔" },
];

export const metadata = withSeo(
  {

  ...seoFor("/experiences/beaches"),
  title: "Sydney Beaches — AussieGuides",
  description: "A practical guide to Sydney's best beaches — Bondi, Manly, Palm Beach, Bronte, Coogee.",
  },
  "/experiences/beaches"
);

export default function BeachesPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1800&q=85"
          alt="Bondi Beach, Sydney's most iconic coastline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-stone-900/20" />
        <div className="absolute inset-0 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>Beaches</En><Ko>해변</Ko>
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.95] mb-4">
            <En>Sydney&apos;s best beaches</En><Ko>시드니 최고의 해변</Ko>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            <En>From Bondi&apos;s iconic waves to Palm Beach&apos;s secluded shores — a practical guide to Sydney&apos;s coastline, with everything you need to stay safe and have fun.</En>
            <Ko>본다이의 상징적인 파도부터 팜 비치의 한적한 해안까지 — 안전하고 즐겁게 보낼 수 있는 시드니 해변 실용 가이드.</Ko>
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Beach sections */}
        <div className="space-y-12">
          {sections.map((section, i) => (
            <EditorialSection key={section.id} data={section} index={i} />
          ))}
        </div>

        {/* Safety section — dark editorial callout */}
        <section className="mt-16 mb-12">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="shrink-0 w-8 h-8 rounded-xl bg-sunset/10 text-sunset flex items-center justify-center">
                <AlertTriangle className="w-4 h-4" />
              </span>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset">
                <En>Beach safety</En><Ko>해변 안전 수칙</Ko>
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-2">
              <En>Stay safe in the water</En>
              <Ko>물에서 안전하게 지내기</Ko>
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-400 max-w-2xl">
              <En>Australian beaches are beautiful but can be dangerous. Follow these rules every time.</En>
              <Ko>호주 해변은 아름답지만 위험할 수 있습니다. 매번 이 규칙을 지키세요.</Ko>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safetyTips.map((tip, i) => (
              <div
                key={tip.title}
                className={`reveal reveal-delay-${(i % 5) + 1} p-6 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white border border-stone-800 dark:border-stone-700 shadow-lg`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="shrink-0 w-8 h-8 rounded-xl bg-sunset/20 text-sunset flex items-center justify-center">
                    {tip.icon === "Flag" ? <Flag className="w-4 h-4" /> :
                     tip.icon === "AlertTriangle" ? <AlertTriangle className="w-4 h-4" /> :
                     tip.icon === "Sun" ? <Sun className="w-4 h-4" /> :
                     <Shield className="w-4 h-4" />}
                  </span>
                  <p className="font-serif text-lg leading-tight">
                    <En>{tip.title}</En>
                    <Ko>{tip.title}</Ko>
                  </p>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  <En>{tip.en}</En>
                  <Ko>{tip.ko}</Ko>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Packing list */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="shrink-0 w-8 h-8 rounded-xl bg-coast/10 text-coast flex items-center justify-center">
              <Umbrella className="w-4 h-4" />
            </span>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-coast">
              <En>Packing list</En><Ko>준비물 체크리스트</Ko>
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-2">
            <En>What to bring to the beach</En>
            <Ko>해변에 가져갈 것</Ko>
          </h2>
          <p className="text-sm text-stone-500 dark:text-stone-400 max-w-2xl mb-6">
            <En>Tick these off before you head out — the Australian sun waits for no one.</En>
            <Ko>나가기 전에 확인하세요 — 호주의 태양은 기다려주지 않습니다.</Ko>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {packingList.map((item, i) => (
              <div
                key={item.en}
                className={`reveal reveal-delay-${(i % 5) + 1} flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-coast/40 hover:shadow-md transition-all`}
              >
                <span className="shrink-0 w-5 h-5 rounded-full bg-coast/10 text-coast flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-snug">
                  <En>{item.en}</En>
                  <Ko>{item.ko}</Ko>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency callout */}
        <section className="rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 dark:from-stone-800 dark:to-stone-900 text-white p-6 md:p-8 shadow-lg border border-stone-700/50">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>Emergency</En><Ko>비상 연락</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En>Before you hit the sand.</En>
            <Ko>모래사장에 가기 전에.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En>Call 000 for police, fire, or ambulance emergencies. For Beachsafe information and patrol status, download the Beachsafe app or check beachsafe.org.au. Surf Life Saving NSW patrols over 300 beaches during summer. Look for the red and yellow flags — if you don&apos;t see them, find a different spot.</En>
            <Ko>경찰, 소방, 구급차 응급 상황은 000으로 전화하세요. 해변 안전 정보와 순찰 상태는 Beachsafe 앱을 다운로드하거나 beachsafe.org.au를 확인하세요. Surf Life Saving NSW는 여름 동안 300개 이상의 해변을 순찰합니다. 빨간색과 노란색 깃발을 찾으세요 — 보이지 않으면 다른 장소를 찾으세요.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:000" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">000 — Emergency</a>
            <a href="https://beachsafe.org.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Beachsafe ↗</a>
            <a href="https://www.surflifesaving.com.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Surf Life Saving ↗</a>
          </div>
        </section>
      </div>
    </div>
  );
}

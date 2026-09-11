// Server component — bilingual Sydney/NSW adventure guide.
// Stub structure: hero, sections, safety, packing, emergency.
// Content intentionally brief so the team can flesh it out with the
// real data per-adventure (Blue Mountains, Snowies, coastal walks etc).

import { En, Ko } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { Mountain, Shield, AlertTriangle, Sun, MapPin } from "@/components/Icons";
import { seoFor, withSeo } from "@/lib/seo";

type AdventureSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; en: string; ko: string }>;
};

const sections: AdventureSection[] = [
  {
    id: "blue-mountains",
    iconKey: "Mountain",
    accent: "sky",
    title: "Blue Mountains day hikes",
    koTitle: "블루마운틴 당일 하이킹",
    desc: "World Heritage bushwalks within 2 hours of Sydney",
    koDesc: "시드니에서 2시간 거리의 세계유산 bushwalk",
    items: [
      { label: "The Three Sisters Walk", en: "Easy 1km flat walk from Katoomba Station to Echo Point. The most iconic Blue Mountains view — the three sandstone pillars at sunrise are unforgettable. Wheelchair-accessible. Free. Go early (before 9am) to beat the tour bus crowds.", ko: "카툼바역에서 에코 포인트까지 1km 평지 산책. 가장 상징적인 블루마운틴 전망 — 일출의 세 사암 기둥은 잊을 수 없습니다. 휠체어 접근 가능. 무료. 투어 버스가 오기 전인 오전 9시 이전에 가세요." },
      { label: "Wentworth Falls Loop", en: "Moderate 3km loop past three lookouts and the base of the falls. Allow 2 hours. The National Pass section cuts along the cliff face — stunning but has steep stairs. Bring water and a light jacket for the spray at the base.", ko: "세 전망대와 폭포 아래를 지나는 3km 중급 루프. 2시간 소요. National Pass 구간은 절벽면을 따라 이어집니다 — 환상적이지만 가파른 계단이 있습니다. 물과 폭포 물보라를 대비한 얇은 재킷을 챙기세요." },
      { label: "Grand Canyon Track", en: "6km loop through ancient rainforest, past waterfalls and under cliff overhangs. 3-4 hours. Steep stairs in places — proper hiking shoes required. Start from Evans Lookout. The fern-covered walls and trickling creeks make it feel like a different world.", ko: "고대 우림, 폭포, 절벽 아래를 지나는 6km 루프. 3-4시간. 곳곳에 가파른 계단 — 적절한 하이킹화 필요. Evans Lookout에서 시작. 양치류로 덮인 벽과 졸졸 흐르는 시내가 완전히 다른 세상 같은 느낌을 줍니다." },
      { label: "Lockleys Pylon Walk", en: "A quieter alternative to the Three Sisters — 5km return from the Nepean Lookout carpark with panoramic views across the Megalong Valley. Less crowded than Echo Point and the valley views are just as spectacular. Allow 2-3 hours. The track is well-graded but narrow in sections.", ko: "Three Sisters의 조용한 대안 — Nepean Lookout 주차장에서 5km 왕복, Megalong Valley의 파노라마 뷰. Echo Point보다 한적하고 계곡 전망도 훌륭합니다. 2-3시간 소요. 잘 정비된 트랙이지만 일부 구간은 좁습니다." },
    ],
  },
  {
    id: "coastal-walks",
    iconKey: "MapPin",
    accent: "coast",
    title: "Coastal cliff walks",
    koTitle: "해안 절벽 산책",
    desc: "Sydney's harbour and coastline from above",
    koDesc: "위에서 바라보는 시드니 항구와 해안선",
    items: [
      { label: "Bondi to Coogee Walk", en: "The classic 6km coastal walk. Takes 2 hours one way, passing Tamarama, Bronte, and Clovelly beaches. Lots of cafes, ocean pools, and photo stops. Do it early morning (before 8am) to avoid the heat and crowds — the light over the ocean at that hour is worth the early alarm.", ko: "클래식 6km 해안 산책. 편도 2시간, Tamarama, Bronte, Clovelly 해변을 지납니다. 카페, 바다 수영장, 사진 명소가 많습니다. 더위와 인파를 피해 이른 아침(오전 8시 전)에 가세요 — 그 시간의 바다 위 빛은 일찍 일어날 가치가 있습니다." },
      { label: "Manly to Spit Walk", en: "10km through Sydney Harbour National Park on the north shore. 3-4 hours. Quietest on weekdays — you'll pass secluded beaches, Aboriginal rock engravings at Grotto Point, and gorgeous harbour views. End with fish and chips at the Spit Bridge kiosk. Bring more water than you think — there are no shops along the way.", ko: "시드니 항구 북쪽 해안의 국립공원을 가로지르는 10km. 3-4시간. 평일이 가장 한적합니다 — 한적한 해변, Grotto Point의 원주민 암각화, 아름다운 항구 전망을 지납니다. Spit Bridge 매점에서 피시앤칩스로 마무리하세요. 예상보다 많은 물을 가져가세요 — 길에 상점이 없습니다." },
      { label: "Coogee to Maroubra", en: "A quieter alternative to the Bondi-Coogee walk. 4km one way past Mahon Pool, Lurline Bay, the historic Deserted Beach club, and the dramatic Maroubra headland. The Maroubra rock platform at the end is excellent for gentle body surfing (swim between the flags).", ko: "Bondi-Coogee보다 한적한 대안. 4km 편도, Mahon Pool, Lurline Bay, 역사적인 Deserted Beach 클럽, 극적인 Maroubra 절벽을 지납니다. 끝의 Maroubra 암석 플랫폼은 가벼운 바디서핑에 좋습니다(깃발 사이에서 수영)." },
    ],
  },
  {
    id: "royal-national-park",
    iconKey: "Mountain",
    accent: "coast",
    title: "Royal National Park",
    koTitle: "로열 내셔널 파크",
    desc: "Australia's oldest national park — coastal cliffs and hidden beaches",
    koDesc: "호주 최초의 국립공원 — 해안 절벽과 숨겨진 해변",
    items: [
      { label: "Coast Track (overnight)", en: "A 26km multi-day walk along dramatic sandstone cliffs, through pockets of rainforest, and past empty beaches. The full track takes 2 days with camping at North Era. Highlights: the Figure Eight Pools (check tides!), Eagle Rock, and the view from Big Marley Hill. Book camping permits online before you go.", ko: "드라마틱한 사암 절벽, 우림 지역, 텅 빈 해변을 따라 이어지는 26km 다일간 산책로. 전체 트랙은 North Era에서 캠핑하며 2일 소요. 하이라이트: Figure Eight Pools(조수 확인 필수!), Eagle Rock, Big Marley Hill 전망. 캠핑 허가는 사전 온라인 예약 필수." },
      { label: "Wattamolla Beach & lagoon", en: "A beautiful beach with a protected lagoon fed by a waterfall — one of the safest swimming spots in the park. The waterfall pool is perfect for families. Walk across the sand to the ocean beach beyond. Park entry ~$12 per vehicle. Gets busy on summer weekends — arrive by 9am or go on a weekday.", ko: "폭포수 공급을 받는 보호된 석호가 있는 아름다운 해변 — 공원 내 가장 안전한 수영 명소. 폭포수 웅덩이는 가족에게 완벽. 모래사장을 건너 너머의 바다 해변으로 걸어가보세요. 공원 입장료 차량당 약 $12. 여름 주말은 붐빔 — 오전 9시까지 도착하거나 평일에 가세요." },
      { label: "Bundeena to Wedding Cake Rock", en: "An easy 4km return walk from Bundeena village to the iconic Wedding Cake Rock — a white sandstone formation on the edge of the cliff. The rock itself is fenced off (it's unstable and sections have collapsed), but the coastal views from the nearby lookouts are spectacular. Combine with lunch at the Bundeena Ferry wharf cafes.", ko: "Bundeena 마을에서 상징적인 Wedding Cake Rock까지 4km 왕복 쉬운 산책 — 절벽 가장자리의 흰 사암 구조물. 바위 자체는 울타리가 쳐져 있습니다(불안정하고 일부 붕괴됨)만, 근처 전망대의 해안 전망은 장관입니다. Bundeena Ferry 선착장 카페에서 점심과 결합하세요." },
    ],
  },
  {
    id: "snowy-mountains",
    iconKey: "Mountain",
    accent: "stone",
    title: "Snowy Mountains in summer",
    koTitle: "여름 스노위 마운틴",
    desc: "5+ hours from Sydney — worth the drive for hiking and mountain biking",
    koDesc: "시드니에서 5시간 이상 — 하이킹과 산악자전거를 위해 운전할 가치가 있습니다",
    items: [
      { label: "Mount Kosciuszko Summit Walk", en: "Australia's highest peak (2,228m). The easiest route is 13km return from Thredbo top station — a metal walkway that's manageable for anyone with reasonable fitness. 4-5 hours. The summit is above the treeline — bring layers even in summer, it can be 10°C cooler than the valley.", ko: "호주 최고봉(2,228m). 가장 쉬운 코스는 Thredbo 정상역에서 13km 왕복 — 적정 체력이면 누구나 가능한 금속 데크길. 4-5시간. 정상은 수목 한계선 위 — 여름에도 겹쳐 입을 옷 필수, 계곡보다 10°C 낮을 수 있습니다." },
      { label: "Thredbo Mountain Biking", en: "Chairlift-served downhill mountain biking trails — from flowy green runs to black diamond single-track. Bike and armour hire available on-site. The scenic chairlift ride up ($36 AUD) is worth it even if you're not riding — the views over the Snowy River valley are stunning in summer.", ko: "체어리프트로 올라가는 다운힐 마운틴 바이크 트레일 — 초급 플로우부터 블랙 다이아몬드 싱글트랙까지. 현장에서 바이크와 장비 대여 가능. 경치 좋은 체어리프트($36 AUD)는 라이더가 아니어도 가치 있음 — 여름 스노이 리버 계곡 전망이 환상적입니다." },
      { label: "Yarrangobilly Caves & thermal pool", en: "A 30-minute drive from Kiandra — limestone caves (guided tours from $25 AUD) and a natural thermal pool that stays 27°C year-round. The pool is a 30-minute walk downhill from the carpark. Free entry. The cave tours are small groups and fill up on weekends — book ahead on the NSW National Parks website.", ko: "Kiandra에서 차로 30분 — 석회암 동굴($25 AUD부터 가이드 투어)과 연중 27°C를 유지하는 자연 온천. 온천은 주차장에서 내리막 30분 도보. 무료 입장. 동굴 투어는 소규모 그룹이라 주말에 금방 찹니다 — NSW 국립공원 웹사이트에서 사전 예약." },
    ],
  },
];

const safetyTips = [
  {
    icon: "Sun",
    title: "Australian sun is no joke",
    en: "UV index regularly hits 11+ (Extreme) in summer. Apply SPF 50+ 20 minutes before going out and reapply every 2 hours. Bring 1L of water per person, per hour of activity. Wear a wide-brim hat and polarised sunglasses.",
    ko: "여름에 자외선 지수가 정기적으로 11+(극도)까지 올라갑니다. 외출 20분 전에 SPF 50+을 바르고 2시간마다 다시 바르세요. 활동 1시간당 인당 1L의 물을 가져오세요. 챙 넓은 모자와 편광 선글라스를 착용하세요.",
  },
  {
    icon: "MapPin",
    title: "Tell someone where you're going",
    en: "Always tell a friend or leave a note with your planned route and return time. Most rescues in NSW national parks start because no one knew the walker was overdue. Carry a charged phone and a personal locator beacon for remote areas.",
    ko: "항상 친구에게 알리거나 계획된 경로와 복귀 시간을 메모로 남겨두세요. NSW 국립공원의 대부분 구조 활동은 아무도 산책자가 시간 초과된 줄 몰랐기 때문에 시작됩니다. 충전된 휴대전화와 원격 지역용 개인 위치 표시기를 휴대하세요.",
  },
  {
    icon: "AlertTriangle",
    title: "Check conditions before you go",
    en: "NSW National Parks publishes track alerts (closures, hazards, weather). Bushwalkers should always check the alerts page for their chosen park the morning of. Bushfire risk in summer can close entire parks without notice.",
    ko: "NSW 국립공원은 트랙 알림(폐쇄, 위험, 날씨)을 게시합니다. Bushwalker는 당일 아침에 선택한 공원의 알림 페이지를 항상 확인해야 합니다. 여름철 산불 위험은 예고 없이 전체 공원을 폐쇄할 수 있습니다.",
  },
  {
    icon: "Shield",
    title: "Stick to marked trails",
    en: "Especially on coastal walks, the edge can be unstable. Stay on the path, watch children and dogs, and don't go past barriers. If the track is closed, the reason is usually 'someone died here recently'.",
    ko: "특히 해안 산책에서 가장자리가 불안정할 수 있습니다. 경로를 따라가고, 아이들과 개를 주의하며, 울타리 너머로 가지 마세요. 트랙이 폐쇄되었다면 이유는 보통 '누군가가 최근 여기서 죽었다'입니다.",
  },
];

const packingList = [
  { en: "1L+ water per person", ko: "1인당 1L 이상의 물" },
  { en: "SPF 50+ sunscreen + reapply", ko: "SPF 50+ 자외선 차단제 + 재도포" },
  { en: "Wide-brim hat", ko: "챙 넓은 모자" },
  { en: "Polarised sunglasses", ko: "편광 선글라스" },
  { en: "Proper hiking shoes (not joggers)", ko: "적절한 하이킹화 (조거 아님)" },
  { en: "Light rain jacket (weather changes fast)", ko: "얇은 비옷 (날씨는 빨리 변합니다)" },
  { en: "Snacks + lunch for full-day walks", ko: "간식 + 종일 산책용 점심" },
  { en: "Charged phone + power bank", ko: "충전된 휴대전화 + 보조 배터리" },
  { en: "First-aid basics", ko: "기본 응급 처치 키트" },
  { en: "Headlamp (in case you're out late)", ko: "헤드램프 (늦게까지 밖에 있을 경우)" },
];

export const metadata = withSeo(
  {

  ...seoFor("/experiences/adventure"),
  title: "Blue Mountains Hikes & NSW Day Walks — Best Bushwalks from Sydney",
  description: "Blue Mountains Grand Canyon Track, Wentworth Falls, Royal National Park Coast Track, coastal cliff walks, and Snowy Mountains hikes — day trips and weekend adventures within reach of Sydney.",
  },
  "/experiences/adventure"
);

export default function AdventurePage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src="/adventure.jpg"
          alt="Adventure in an Australian national park"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-stone-900/20" />
        <div className="absolute inset-0 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>Adventure</En><Ko>어드벤처</Ko>
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.95] mb-4">
            <En>Get out and go</En><Ko>밖으로 나가서</Ko>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            <En>From coastal cliff walks two hours from Sydney to Australia&apos;s highest peak in the Snowies. Hiking, mountain biking, ocean swims, and the kind of outdoors that makes the harbour city feel bigger than its bridges.</En>
            <Ko>시드니에서 2시간 거리의 해안 절벽 산책부터 스노위 마운틴의 호주 최고봉까지. 하이킹, 산악자전거, 바다 수영, 항구 도시를 다리보다 더 크게 만드는 야외 활동들.</Ko>
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Adventure sections */}
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
                <En>Adventure safety</En><Ko>야외 활동 안전</Ko>
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-2">
              <En>Come back in one piece</En>
              <Ko>무사히 돌아오기</Ko>
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-400 max-w-2xl">
              <En>Australia&apos;s outdoors is beautiful and dangerous in equal measure. Take these seriously.</En>
              <Ko>호주의 야외는 아름답고 동시에 위험합니다. 다음 사항을 진지하게 받아들이세요.</Ko>
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
                    {tip.icon === "Sun" ? <Sun className="w-4 h-4" /> :
                     tip.icon === "AlertTriangle" ? <AlertTriangle className="w-4 h-4" /> :
                     tip.icon === "MapPin" ? <MapPin className="w-4 h-4" /> :
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
            <span className="shrink-0 w-8 h-8 rounded-xl bg-sky/10 text-sky flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </span>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sky">
              <En>Packing list</En><Ko>준비물 체크리스트</Ko>
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-2">
            <En>What to bring on a day hike</En>
            <Ko>당일 하이킹 준비물</Ko>
          </h2>
          <p className="text-sm text-stone-500 dark:text-stone-400 max-w-2xl mb-6">
            <En>Skip the heavy backpack — most day walks in NSW need less than you think, but the essentials matter.</En>
            <Ko>무거운 배낭은 잊으세요 — NSW의 대부분의 당일 산책은 생각보다 적게 필요하지만, 필수품은 중요합니다.</Ko>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {packingList.map((item, i) => (
              <div
                key={item.en}
                className={`reveal reveal-delay-${(i % 5) + 1} flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sky/40 hover:shadow-md transition-all`}
              >
                <span className="shrink-0 w-5 h-5 rounded-full bg-sky/10 text-sky flex items-center justify-center mt-0.5">
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
            <En>If something goes wrong.</En>
            <Ko>문제가 생기면.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En>Call 000 for police, fire, or ambulance. For bushwalkers, NSW Police Rescue and SES (State Emergency Service) handle land searches. Download the Emergency+ app before you go — it shares your exact GPS location with 000 dispatchers. For non-urgent help, contact the relevant NSW National Parks office.</En>
            <Ko>경찰, 소방, 구급차는 000으로 전화하세요. bushwalker의 경우 NSW 경찰 구조대와 SES(州 응급 서비스)가 육상 수색을 담당합니다. 가기 전에 Emergency+ 앱을 다운로드하세요 — 000 디스패처와 정확한 GPS 위치를 공유합니다. 긴급하지 않은 도움은 관련 NSW 국립공원 사무실에 연락하세요.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:000" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">000 — Emergency</a>
            <a href="https://www.nationalparks.nsw.gov.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">NSW National Parks ↗</a>
            <a href="https://www.ses.nsw.gov.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">NSW SES ↗</a>
          </div>
        </section>
      </div>
    </div>
  );
}

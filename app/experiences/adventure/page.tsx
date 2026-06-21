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
      { label: "The Three Sisters Walk", en: "Easy 1km flat walk from Katoomba Station to Echo Point. The most iconic Blue Mountains view. Wheelchair-accessible. Free.", ko: "카툼바역에서 에코 포인트까지 1km 평지 산책. 가장 상징적인 블루마운틴 전망. 휠체어 접근 가능. 무료." },
      { label: "Wentworth Falls Loop", en: "Moderate 3km loop past three lookouts and the base of the falls. Allow 2 hours. Some steep stairs — bring water.", ko: "세 전망대와 폭포 아래를 지나는 3km 중급 루프. 2시간 정도. 가파른 계단이 있으니 물을 가져오세요." },
      { label: "Grand Canyon Track", en: "6km loop through rainforest and past waterfalls. 3-4 hours. Steep in places — proper hiking shoes required.", ko: "우림과 폭포를 지나는 6km 루프. 3-4시간. 곳마다 가파른 곳이 있어 — 적절한 하이킹화가 필요합니다." },
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
      { label: "Bondi to Coogee Walk", en: "The classic 6km coastal walk. Takes 2 hours one way. Lots of cafes and ocean pools. Do it early to avoid the heat.", ko: "클래식 6km 해안 산책. 편도 2시간. 카페와 바다 수영장이 많습니다. 더위를 피하려면 일찍 가세요." },
      { label: "Manly to Spit Walk", en: "10km through national park on Sydney Harbour's north shore. 3-4 hours. Quietest on weekdays. End with fish and chips at the Spit.", ko: "시드니 항구 북쪽 해안의 국립공원을 가로지르는 10km. 3-4시간. 평일이 가장 한적합니다. Spit에서 피시앤칩스로 마무리하세요." },
      { label: "Coogee to Maroubra", en: "Less crowded than Bondi-Coogee. 4km one way. Mahon Pool, Lurline Bay, and the dramatic Maroubra headland at the end.", ko: "Bondi-Coogee보다 한적한 4km. 마혼 풀, 러라인 베이, 그리고 끝에 있는 극적인 마루브라 해안 절벽." },
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
      { label: "Mount Kosciuszko Summit Walk", en: "Australia's highest peak (2,228m). 13km return from Charlotte Pass. 4-5 hours. The summit is above the treeline — bring layers even in summer.", ko: "호주의 최고봉(2,228m). Charlotte Pass에서 13km 왕복. 4-5시간. 정상은 숲 한계선 위 — 여름에도 겹쳐 입을 옷을 챙기세요." },
      { label: "Thredbo Mountain Biking", en: "Gravel and trail riding in summer. Bikes rent at the village. Lift-assisted downhill trails for beginners to advanced.", ko: "여름에 자갈길과 산길 라이딩. 마을에서 자전거 대여. 초급부터 고급까지 리프트 보조 다운힐 트레일." },
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
  title: "Adventure in NSW — AussieGuides",
  description: "Hiking, mountain biking, and outdoor adventures within reach of Sydney — from coastal walks to Australia's highest peak.",
  },
  "/experiences/adventure"
);

export default function AdventurePage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2356049/pexels-photo-2356049.jpeg?auto=compress&cs=tinysrgb&w=1800&q=85"
          alt="Australian national park — Blue Mountains, NSW"
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

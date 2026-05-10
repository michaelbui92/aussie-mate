"use client";
import { useState } from "react";
import Quokka from "@/components/Quokka";

const sections = [
  {
    id: "getting-around",
    emoji: "🚇",
    title: "Getting Around",
    desc: "Sydney's public transport — trains, buses, ferries",
    items: [
      {
        label: "Opal Card",
        en: "A reusable card for Sydney's public transport. You need one to use trains, buses, and ferries. Top up at 7-Eleven stores, convenience stores, or online via the Opal app. Auto-top-up is available so you never run out.",
        ko: "시드니 대중교통(기차, 버스, 페리)을 위한 충전식 카드. 기차, 버스, 페리를 이용하려면 반드시 필요합니다. 7-Eleven 매장, 편의점 또는 Opal 앱에서 충전 가능. 자동 충전 설정으로 credits가 떨어지는 것을 방지할 수 있습니다.",
      },
      {
        label: "Trains, Buses & Ferries",
        en: "Sydney Trains runs the rail network (T1-T9 lines). Sydney Buses covers the rest of Greater Sydney. Sydney Ferries runs the harbour ferry network — the scenic way to travel across the harbour.",
        ko: "Sydney Trains가 철도 네트워크 운영(T1~T9 노선). Sydney Buses가 시드니 전역 버스 운영. Sydney Ferries가 항만 페리 네트워크 운영 — 하버를 건너는 가장 풍경이 좋은 이동 수단입니다.",
      },
      {
        label: "Peak vs Off-Peak",
        en: "Peak times: weekdays 6:30–10:00am and 3:30–9:00pm (higher fares). Off-peak: all other times including weekends and public holidays. Use an Opal adult card for standard fares. Opal daily cap: ~$16.80 for trains/buses.",
        ko: "러시 아워: 평일 오전 6:30–10:00시, 오후 3:30–21:00시(요금 높음). 비러시 아워: 그 외의 시간, 주말, 공휴일 포함. 성인 Opal 카드로 표준 요금 적용. Opal 일일 상한: 기차/버스의 경우 약 $16.80.",
      },
      {
        label: "Google Maps for Transit",
        en: "Google Maps is very accurate for Sydney public transport. Enter your start point and destination, select the train/bus icon, and it will show you exact departure times, platform numbers, and connection points.",
        ko: "Google Maps는 시드니 대중교통 정보가 매우 정확합니다. 출발지와 목적지를 입력하고 기차/버스 아이콘을 선택하면 정확한 출발 시간, 플랫폼 번호, 환승 정보를 보여줍니다.",
      },
      {
        label: "Complaining About Bad Service",
        en: "If a bus skipped your stop, a train was cancelled, or service was poor — report it at transportnsw.info or via the Transport for NSW app. You can also call 131 500. Feedback leads to improvements and sometimes refunds.",
        ko: "버스가 정류장을 지나쳤거나 기차가 취소되었거나 서비스가 불만족스러웠다면 — transportnsw.info 또는 Transport for NSW 앱에서 신고하세요. 전화(131 500)로도 신고 가능합니다. 피드백은 개선으로 이어지며, 때로는 환불되기도 합니다.",
      },
    ],
  },
  {
    id: "top-10",
    emoji: "🗺️",
    title: "Top 10 Sydney Must-Sees",
    desc: "The essentials — what you can't miss",
    items: [
      {
        label: "Sydney Opera House",
        en: "The world's most famous building. Walk around the exterior for free, take a guided tour, or catch a performance. The best free view is from the ferry approaching Circular Quay.",
        ko: "세계에서 가장 유명한 건축물. 외부 전 tours는 무료로 둘러볼 수 있고, 가이드 투어를 참여하거나 공연을 관람할 수 있습니다. 최고의 무료 View는 Circular Quay로 향하는 페리에서 볼 수 있습니다.",
      },
      {
        label: "Sydney Harbour Bridge",
        en: "Walk across for free (pedestrian walkway on the eastern side) or climb to the top for an adrenaline experience you'll never forget. The bridge climb is ~$188–$300 AUD but the views are extraordinary.",
        ko: "무료로 걸어갈 수 있음(동쪽 보행자 전용 도로). 또는 브릿지 클라이밍(입회人的话~$188~300 호주의 달러)을 통해 꼭대기까지 올라갈 수 있으며, 잊지 못할 경험이 됩니다.",
      },
      {
        label: "Bondi to Coogee Coastal Walk",
        en: "Sydney's most famous coastal walk. 6km along the coastline from Bondi Beach to Coogee Beach. Takes about 1.5–2 hours. Beautiful views the entire way, passing through beaches, parks, and rock pools.",
        ko: "시드니에서 가장 유명한 해안 트레킹. Bondi Beach에서 Coogee Beach까지 해안선을 따라 6km. 소요 시간 약 1.5~2시간. 해변, 공원,岩石풀을 지나며 끝없이 아름다운 전망이 펼쳐집니다.",
      },
      {
        label: "Taronga Zoo",
        en: "One of the world's best zoos, located on a hill overlooking the harbour. Take the ferry from Circular Quay to the zoo's private wharf. See Australian wildlife (koalas, kangaroos, platypus) with harbour views as the backdrop.",
        ko: "항만을 내려다보는 언덕에 위치한 세계 최고급 동물원. Circular Quay에서 페리로 동물원 전용 부두까지 이동. 호주 야생 동물(코알라, 캥거루, Ornithorhynchus)을 항만을背景으로 관찰할 수 있습니다.",
      },
      {
        label: "Blue Mountains Day Trip",
        en: "About 2 hours by train from Central Station to Katoomba. Dramatic mountain landscapes, eucalyptus forests, and the iconic Three Sisters rock formation. Take theTrain for ~$15–$20 return with an Opal card.",
        ko: "Central Station에서 기차로 약 2시간 Katoomba까지. 장엄한 산 맥락, 유칼립투스 숲, 상징적인 Three Sisters 암석 지형이 있습니다. Opal 카드로 기차往返 약 $15~20.",
      },
      {
        label: "Royal Botanic Garden Sydney",
        en: "30 hectares of gardens right next to the Opera House and CBD. Free entry. Beautiful at any time of day — especially at sunset. Great for a picnic or a quiet walk.",
        ko: "Sydney Opera House와 CBD 바로 옆에 위치한 30헥타르의 정원. 무료 입장. 하루 중 어느 때든 아름답습니다 — 특히 일몰 시간에 최고. 피크닉이나 조용한 산책에 완벽합니다.",
      },
      {
        label: "The Rocks",
        en: "Sydney's oldest neighbourhood, right near the CBD. Cobblestone laneways, historic pubs, weekend markets (Sat–Sun), and the best view of the Harbour Bridge. Free to walk around all day.",
        ko: "CBD 바로 옆에 위치한 시드니에서 가장 오래된 지역. 까페돌 포장된 골목, 역사적인 술집, 주말 시장(토~일), Sydney Harbour Bridge的最佳View를 제공합니다.终日 무료로 걸어다닐 수 있습니다.",
      },
      {
        label: "Manly Beach",
        en: "Take the ferry from Circular Quay — 30 minutes across the harbour with incredible views. Manly has a more laid-back vibe than Bondi. Great for surfing, a walk along the promenade, or fish and chips by the beach.",
        ko: "Circular Quay에서 페리로 30분 항만을 건너면 도착. Bondi보다更具海滩风格的 분위기. 서핑, 해안 산책, 또는滨海식당에서フィッシュ앤칩스에 완벽합니다.",
      },
      {
        label: "Featherdale Wildlife Park",
        en: "Near Penrith (west Sydney). Hand-feed kangaroos and get close to koalas — something you can't do in most wildlife parks. ~$30–$35 admission. Take a train to Blacktown then a bus.",
        ko: "Penrith 근처(시드니 서쪽). 캥거루에게 직접 먹이를 주고 코알라와 가까이 있을 수 있습니다 — 대부분의 동물원에서 불가능한 경험. 입장료 약 $30~35. 기차로 Blacktown까지 간 후 버스로 이동.",
      },
      {
        label: "Sydney Harbour Ferry",
        en: "The cheapest and most scenic way to see the harbour. A single ferry trip costs ~$7.20 (Opal card). Routes to Manly, Taronga Zoo, Watson's Bay, and more. Get a window seat and watch the Opera House glide past.",
        ko: "항만을 감상하는 가장 저렴하고景色优美的 방법. 단독 페리 이용료는 약 $7.20(Opal 카드). Manly, Taronga Zoo, Watson's Bay 등으로 가는 노선. 창가 좌석을 잡고 Sydney Opera Houseがそば過ぎるのを楽しむ.",
      },
    ],
  },
  {
    id: "tipping",
    emoji: "💵",
    title: "Tipping Culture",
    desc: "Australia doesn't expect tips — here's why",
    items: [
      {
        label: "Tipping is NOT Expected",
        en: "Unlike the US, tipping is not part of Australian culture. Service workers earn Award wages (a living wage set by the Fair Work Commission), so tips are not needed to supplement income.",
        ko: "미국과 달리 호주에서는 팁 문화가 없습니다. 서비스 종사자는 Award 임금(공정노동위원회가 정한 생계비)을 받으므로, 팁이 수입 보충에 필요하지 않습니다.",
      },
      {
        label: "When You Might Tip",
        en: "In high-end restaurants, you may see a 'service charge' added (usually 10%). Otherwise, tipping is entirely optional. Rounding up your bill or leaving small change is considered generous.",
        ko: "고급 식당에서는 서비스 비용이 추가될 수 있습니다(보통 10%). 그 외에는 팁은 전적으로 선택 사항입니다. 금액을 반올리거나 거슬러 주는 동전을 남기는 것이 관대被视为一项慷慨之举.",
      },
      {
        label: "Taxi & Delivery",
        en: "You do not need to tip taxi drivers or food delivery riders. In fact, most Australians wouldn't think to do it. If a driver was particularly helpful, a small amount is appreciated but never expected.",
        ko: "택시 기사나 음식 배달원에게 팁을 줄 필요가 없습니다. 실제로 대부분의 호주인들은 그럴 생각이 없습니다. 운adore가 특히 도움을 줬다면 소액이 감사하지만 기대하지는 않습니다.",
      },
      {
        label: "Hotels & Hairdressers",
        en: "Porters at hotels: a few dollars per bag is fine if you want. Hairdressers: same rule as restaurants — tipping is kind but not expected. Australians usually just pay the listed price.",
        ko: "호텔 포터: 각 가방당 몇 달러는 바람직합니다. 미용사: 식당과 동일한 규칙 — 팁은 친절하지만 기대하지 않습니다. 호주인들은 usually listed price대로 지불합니다.",
      },
    ],
  },
  {
    id: "safety",
    emoji: "🏖️",
    title: "Safety Tips",
    desc: "Stay safe while enjoying Australia",
    items: [
      {
        label: "Swim Between the Flags",
        en: "Red and yellow flags mark the safest part of a patrolled beach. Swim only between these flags — outside them, currents and rips can be dangerous even for strong swimmers. Check the surf before you go at beachesafety.com.au",
        ko: "빨간색과 노란색 깃발은救い된 구역을 표시합니다. 이 깃발 사이에서만 수영하세요 — 그 외的区域에서는strong swimmer라도 위험한 급류가 있을 수 있습니다. 수영 전 beachsafety.com.au에서 파도 상태를 확인하세요.",
      },
      {
        label: "Sun Protection is Serious",
        en: "Australia has the highest skin cancer rate in the world. UV is extreme even on cloudy days. Use SPF 50+ sunscreen, wear a hat, and reapply every 2 hours. 'Slip-slop-slap-seek' (shirt, sunscreen, hat, shade) is national advice.",
        ko: "호주는 세계에서 피부암 발생률이 가장 높은 나라입니다. 흐린 날에도 자외선이很强합니다. SPF 50+ 자외선 차단제를 사용하고 모자를 쓰며 2시간마다 다시 발라주세요. 'Slip-slop-slap-seek'(셔츠, 자외선 차단제, 모자, 그늘)가 national 권고 사항입니다.",
      },
      {
        label: "Jellyfish in Summer",
        en: "Box jellyfish are present in Sydney waters from November to April. Most Sydney beaches have stinger nets, but always swim at patrolled beaches with lifeguards. If stung, don't rub — rinse with vinegar and get help.",
        ko: "상자 해파리가 시드니 해역에서 11월부터 이듬해 4월까지 출몰합니다. 대부분의 시드니 해변には防護網이 있지만, 항상 lifeguard가 있는 patrol beaches에서 수영하세요. 쏘이면 문지르지 말고 식초로 헹구고 도움을 요청하세요.",
      },
      {
        label: "Snakes in Bushland",
        en: "Snakes are common near hiking trails, parks, and bushland — especially in summer. They generally won't approach you. Walk loudly (talking helps), give them space, and don't try to catch or kill one. Most are non-lethal.",
        ko: "蛇은 하이킹 트레일, 공원, 숲 지대에서 흔합니다 — 특히 여름에. 일반적으로 그들은 다가오지 않습니다. 크게 걷거나(이야기하는 것도 방법), 공간을 확보하고 붙잡거나 죽이지 마세요. 대부분 독이 없습니다.",
      },
      {
        label: "Tap Water is Safe",
        en: "Tap water in Australia is safe to drink everywhere — cities, towns, even rural areas. Bottled water is unnecessary and expensive. Tap water from the fridge or a water fountain is fine.",
        ko: "호주의 수도꼭지 물은 어디서나 마실 수 있습니다 — 도시,乡镇, 농촌 지역까지. 생수 구매는 불필요하며 비용도 낭비입니다. 냉장고 또는 음수대에서 나온 수도꼭지 물이면 충분합니다.",
      },
    ],
  },
  {
    id: "budget",
    emoji: "💰",
    title: "Budget Tips",
    desc: "See Sydney without spending a fortune",
    items: [
      {
        label: "Opal Daily Caps",
        en: "The maximum you'll pay per day: ~$16.80 for trains and buses, ~$7.20 for ferries. Once you hit the cap, travel is free for the rest of that day. Set up auto-top-up so you always have a balance.",
        ko: "하루에 지불하는 최대 금액: 기차와 버스는 약 $16.80, 페리는 약 $7.20. Once you hit the cap, 그날 남은 시간 동안은 무료로 이동할 수 있습니다. 자동 충전을 설정하여 항상 잔액이 있는지 확인하세요.",
      },
      {
        label: "Free Things to Do",
        en: "Bondi Beach, Manly Beach, Royal Botanic Garden, all coastal walks (Bondi to Coogee, Spit Bridge to Manly), The Rocks on weekends, Mrs Macquarie's Chair, Blue Mountains scenic drive (just fuel and food).",
        ko: "Bondi Beach, Manly Beach, Royal Botanic Garden, 모든 해안 트레킹(Bondi to Coogee, Spit Bridge to Manly), 주말 The Rocks, Mrs Macquarie's Chair, Blue Mountains scenery驱动(연료와 식비만 있으면 됩니다).",
      },
      {
        label: "Cheap Eats",
        en: "Head to Haymarket/Chinatown for $10–$15 Asian meals. Food courts in Central Station, Westfield, and Darling Harbour have good value. Thai, Vietnamese, Chinese, and Korean food in Sydney is excellent and affordable.",
        ko: "Haymarket/Chinatown으로 가면 $10~$15에 Asian 음식을 먹을 수 있습니다. Central Station, Westfield, Darling Harbour의 food court도 قيم이 있습니다. 시드니의 태국, Vietnamese, 중국, 한국 음식은优秀하고 가격이 합리적입니다.",
      },
      {
        label: "Wednesday Half-Price Museums",
        en: "Many museums and galleries offer half-price entry on Wednesdays — including the Art Gallery of NSW, Australian Museum, and the Museum of Contemporary Art. Check their websites before you visit.",
        ko: "다양한 미술관과 전시관이 수요일에 입장료 50% 할인 — Sydney의 Art Gallery of NSW, Australian Museum, Museum of Contemporary Art 포함. 방문 전에 웹사이트를 확인하세요.",
      },
      {
        label: "Opal Concession Card",
        en: "If you have a concession entitlement (student, pensioner, etc.), the Opal Concession card gives up to 50% off all fares. International students may be eligible — check transportnsw.info for eligibility.",
        ko: "할인 자격이 있는 경우(학생, 연금 수급자 등) Opal Concession 카드로 모든 요금의 최대 50% 할인을 받을 수 있습니다. 유학생도 자격이 될 수 있습니다 — eligibility를 transportnsw.info에서 확인하세요.",
      },
    ],
  },
  {
    id: "apps",
    emoji: "📱",
    title: "Useful Apps",
    desc: "Download these before you arrive or on arrival",
    items: [
      {
        label: "Google Maps",
        en: "Essential for navigating Sydney. Download offline maps for when you have no data. The public transport directions are accurate and real-time. Save your accommodation and key locations for easy navigation.",
        ko: "시드니 내비게이션 필수 앱. 데이터가 없을 때를 대비해 오프라인 지도 다운로드 가능. 대중교통 길찾기가 정확하고 실시간으로 작동합니다. 숙소와 주요 장소를 저장해두면 내비게이션이簡単됩니다.",
      },
      {
        label: "TripView",
        en: "The best transit app for Sydney and Melbourne. Shows live train/bus/ferry times, platform numbers, and trip planning. Works offline once downloaded — essential for daily commute or exploring.",
        ko: "시드니와 Melbourne 최고의 교통 앱. 실시간 기차/버스/페리 시간, 플랫폼 번호, 길찾기를 보여줍니다. 한 번 다운로드하면 오프라인으로 작동합니다 — 일상적 출퇴근과 관광 모두에 필수.",
      },
      {
        label: "Opal",
        en: "The official Opal card app. Check your balance, top up, view your travel history, and see how close you are to the daily cap. You can also report a lost card here and freeze your balance.",
        ko: "공식 Opal 카드 앱. 잔액 확인, 충전, 이용 내역 확인, 일일 상한逼近 정도 확인 가능. 분실 신고와 잔액 동결도 여기서 할 수 있습니다.",
      },
      {
        label: "Zype",
        en: "The best app for finding concerts, events, festivals, and things to do in Sydney. Covers everything from free community events to big ticketed shows. Great for discovering what's on.",
        ko: "시드니의演唱会, 이벤트, festival, activities을 찾는 최고의 앱. 무료 커뮤니티 이벤트부터大型 ticketed shows까지 모두 coverage. 무엇이正在进行 중인지 발견하는 데perfect.",
      },
      {
        label: "Time Out Sydney",
        en: "Restaurant, bar, and event listings with reviews and recommendations. Good for finding trendy cafés, hidden bars, and weekend activities. Updated regularly with curated lists.",
        ko: "리뷰와 추천이 있는 레스토랑, 바, 이벤트 목록. trendy 카페,隐藏酒吧, 주말 activity를 찾는 데 유용합니다. 정기적으로 업데이트되는 선별된 목록을 제공합니다.",
      },
    ],
  },
];

export default function TouristPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (id: string) => setOpenSection(p => (p === id ? null : id));

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <Quokka scene="beach" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-eucalypt dark:text-white mb-2">Tourist 🏖️</h1>
          <p className="text-eucalypt/60 dark:text-dark-muted/60">Sydney and NSW for short-term visitors</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-4">
        {sections.map((s, si) => {
          const isOpen = openSection === s.id;
          return (
            <div
              key={s.id}
              className="bg-white dark:bg-dark-card border border-sand dark:border-dark-border rounded-2xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${si * 0.07}s` }}
            >
              <button
                onClick={() => toggle(s.id)}
                className="w-full text-left px-4 md:px-5 py-4 min-h-[60px] flex items-center gap-3 hover:bg-sand/40 dark:hover:bg-dark-surface/50 transition-colors"
              >
                <span className="text-xl shrink-0">{s.emoji}</span>
                <div className="flex-1 min-w-0 pr-2">
                  <h2 className="font-bold text-sm md:text-base text-eucalypt dark:text-white leading-snug">{s.title}</h2>
                  <p className="text-xs text-eucalypt/50 dark:text-dark-muted/50 mt-0.5">{s.desc}</p>
                </div>
                <svg
                  className={`w-5 h-5 text-sunset shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="divide-y divide-sand dark:divide-dark-border border-t border-sand dark:border-dark-border">
                  {s.items.map((item, ii) => (
                    <div key={ii} className="px-5 py-4">
                      <p className="font-semibold text-sm text-sunset mb-1.5">{item.label}</p>
                      <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed mb-2.5">{item.en}</p>
                      <div className="bg-sand/70 dark:bg-dark-surface/70 rounded-xl px-4 py-2.5 border-l-2 border-sage">
                        <p className="text-xs font-medium text-sage mb-0.5">🇰🇷 한국어</p>
                        <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed">{item.ko}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        <div className="bg-sunset/5 border border-sunset/20 rounded-2xl p-5 text-center">
          <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60">
            Made with 🦘 for everyone new to Australia
          </p>
        </div>
      </div>
    </div>
  );
}

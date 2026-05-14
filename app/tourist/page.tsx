"use client";
import { useState } from "react";
import { En, Ko } from "@/components/LangBlocks";

interface Section {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  content: ContentItem[];
}

interface ContentItem {
  label: string;
  en: string;
  ko: string;
}

const sections: Section[] = [
  {
    id: "getting-around",
    emoji: "🚇",
    title: "Getting Around",
    desc: "Opal cards, transport modes, and navigating Sydney",
    content: [
      {
        label: "Opal Card Basics (오팔 카드 기초)",
        en: "The Opal card is a reusable smart card for all Sydney public transport — trains, buses, ferries, and light rail. Tap on at the start of your trip and tap off at the end. You can top up at 7-Eleven stores, newsagents, convenience stores, or online via the Opal app or website. Cards are available at most train stations and retail outlets.",
        ko: "오팔 카드는 시드니의 모든 대중교통(기차, 버스, 페리, 경전철)에서 사용할 수 있는 충전식 스마트 카드입니다. 여행 시작 시 태그온(터치), 종료 시 태그오프하세요. 7-E일레븐, 뉴스에이전시, 편의점, 또는 오팔 앱/웹사이트에서 온라인으로 충전할 수 있습니다. 카드는 대부분의 기차역과 소매점에서 구입할 수 있습니다.",
      },
      {
        label: "Trains, Buses & Ferries (기차, 버스, 페리)",
        en: "Sydney Trains runs the suburban rail network connecting the CBD to most suburbs. Sydney Buses covers the whole city. Sydney Ferries is one of the most scenic ways to travel — the ferry from Circular Quay to Manly is a must-do. All use the same Opal card system. Light rail runs from the CBD to the inner west and south-east.",
        ko: "Sydney Trains은 CBD와 대부분의 교외 지역을 연결하는 교외 철도 네트워크를 운영합니다. Sydney Buses는 도시 전체를 커버합니다. Sydney Ferries는 가장 경치 좋은 이동 수단 중 하나입니다 — Circular Quay에서 Manly까지의 페리는 꼭 타보세요. 모두 동일한 오팔 카드 시스템을 사용합니다. 경전철은 CBD에서 내부 서부 및 남동부까지 운행됩니다.",
      },
      {
        label: "Peak vs Off-Peak (피크/오프피크 요금)",
        en: "Peak fares apply on weekdays from 6:30-10:00am and 3:30-7:00pm. Off-peak fares are about 30% cheaper. Weekends and public holidays are charged at off-peak rates all day. If you can travel outside peak hours, you'll save significantly on longer trips.",
        ko: "평일 오전 6:30-10:00, 오후 3:30-7:00에는 피크 요금이 적용됩니다. 오프피크 요금은 약 30% 저렴합니다. 주말과 공휴일은 하루 종일 오프피크 요금이 적용됩니다. 피크 시간을 피해 이동할 수 있다면 장거리 여행에서 상당히 절약할 수 있습니다.",
      },
      {
        label: "Using Google Maps (구글 지도 활용)",
        en: "Google Maps is incredibly accurate for Sydney public transport. It shows real-time departure times, platform numbers, service disruptions, and even which carriage is best to board for your connecting station. It's all you really need — just enter your destination, select the transit option, and follow along.",
        ko: "구글 지도는 시드니 대중교통에 놀랍도록 정확합니다. 실시간 출발 시간, 플랫폼 번호, 운행 중단 정보, 심지어 환승역에 가장 가까운 객차 위치까지 알려줍니다. 목적지만 입력하고 대중교통 옵션을 선택하면 됩니다 — 이것 하나면 충분합니다.",
      },
      {
        label: "How to Complain (민원 제기 방법)",
        en: "If you experience bad service — delays, dirty trains, rude staff — you can lodge a complaint through the Transport for NSW website or app. Go to transportnsw.info and click 'Contact us' or 'Feedback'. You'll usually get a response within a few business days.",
        ko: "지연, 더러운 기차, 무례한 직원 등 불량 서비스를 경험했다면 Transport for NSW 웹사이트나 앱을 통해 민원을 제기할 수 있습니다. transportnsw.info에 접속해 'Contact us' 또는 'Feedback'을 클릭하세요. 보통 영업일 기준 며칠 내에 답변을 받을 수 있습니다.",
      },
    ],
  },
  {
    id: "top-sights",
    emoji: "🏛️",
    title: "Top 10 Sydney Must-Sees",
    desc: "Sydney's iconic attractions you can't miss",
    content: [
      {
        label: "1. Sydney Opera House (시드니 오페라 하우스)",
        en: "Australia's most famous landmark. Take a guided tour inside or book a show — even just walking around the outside with a coffee is a memorable experience. Located at Bennelong Point, Circular Quay. Free to explore the exterior and foyer.",
        ko: "호주에서 가장 유명한 랜드마크입니다. 내부 가이드 투어를 하거나 공연을 예약하세요 — 커피 한잔 들고 외부를 산책하는 것만으로도 잊지 못할 경험입니다. Circular Quay의 Bennelong Point에 위치해 있습니다. 외부와 로비는 무료로 관람할 수 있습니다.",
      },
      {
        label: "2. Sydney Harbour Bridge (시드니 하버 브릿지)",
        en: "Walk across for free (15 min from The Rocks to Milsons Point) or climb to the top with BridgeClimb if you're feeling adventurous. The views from the top are absolutely spectacular — worth every cent for the full experience.",
        ko: "무료로 걸어서 건널 수 있고(The Rocks에서 Milsons Point까지 15분), 모험심이 있다면 BridgeClimb으로 정상까지 올라갈 수 있습니다. 정상에서의 전망은 정말 장관입니다 — 모든 비용을 들일 가치가 있습니다.",
      },
      {
        label: "3. Bondi to Coogee Coastal Walk (본디 투 쿠지 해안 산책로)",
        en: "A stunning 6km coastal walk along Sydney's eastern beaches. Takes about 2 hours one way with plenty of stops for photos. Passes through Tamarama, Bronte, and Clovelly beaches. Free, accessible, and absolutely beautiful on a sunny day.",
        ko: "시드니 동부 해변을 따라 이어지는 6km의 아름다운 해안 산책로입니다. 사진 찍을 곳이 많아 편도 약 2시간 소요됩니다. Tamarama, Bronte, Clovelly 해변을 지납니다. 무료이고 접근성이 좋으며, 맑은 날에는 정말 아름답습니다.",
      },
      {
        label: "4. Taronga Zoo (타롱가 동물원)",
        en: "World-class zoo with native Australian animals (kangaroos, koalas, wombats) and exotic species. The best part? Take the ferry from Circular Quay — it's a 12-minute scenic ride and the zoo has stunning harbour views. Tickets are around $50 for adults.",
        ko: "호주 토종 동물(캥거루, 코알라, 웜뱃)과 이국적인 동물들을 볼 수 있는 세계적 수준의 동물원입니다. 가장 좋은 점은 Circular Quay에서 페리를 타고 가는 것 — 12분의 경치 좋은 항해이며 동물원에서도 아름다운 항구 전망을 즐길 수 있습니다. 성인 티켓은 약 $50입니다.",
      },
      {
        label: "5. Blue Mountains Day Trip (블루 마운틴 당일 여행)",
        en: "A perfect day trip from Sydney. Take the train from Central Station to Katoomba (about 2 hours). See the Three Sisters rock formation, ride the scenic railway (steepest in the world), and walk through ancient rainforest. Pack a jacket — it's cooler up there!",
        ko: "시드니에서 완벽한 당일 여행지입니다. Central Station에서 Katoomba까지 기차로 약 2시간. Three Sisters 바위 절벽을 보고, 세계에서 가장 가파른 scenic railway를 타고, 고대 열대우림을 산책하세요. 재킷을 챙기세요 — 산 위는 더 시원합니다!",
      },
      {
        label: "6. Royal Botanic Garden Sydney (시드니 왕립 식물원)",
        en: "Free entry, stunning harbourside location right next to the Opera House. Massive lawns perfect for picnics, beautiful garden sections from around the world, and incredible views of the harbour. Open daily from sunrise to sunset.",
        ko: "무료 입장, 오페라 하우스 바로 옆에 있는 항구边的 아름다운 위치입니다. 피크닉에 완벽한 넓은 잔디밭, 전 세계의 아름다운 정원 섹션, 그리고 항구의 장관을 감상할 수 있습니다. 매일 일출부터 일몰까지 개장합니다.",
      },
      {
        label: "7. The Rocks (더 록스)",
        en: "Sydney's historic district — the first European settlement site in Australia. Cobblestone streets, old pubs, weekend markets with local crafts and food, and fascinating history tours. Free to wander. Try the weekend market (Sat-Sun) for unique souvenirs.",
        ko: "시드니의 역사 지구 — 호주 최초의 유럽 정착지입니다. 자갈길, 오래된 펍, 지역 공예품과 음식이 있는 주말 시장, 그리고 흥미로운 역사 투어가 있습니다. 산책은 무료입니다. 주말 시장(토-일)에서 독특한 기념품을 찾아보세요.",
      },
      {
        label: "8. Manly Beach (맨리 비치)",
        en: "Take the iconic 30-minute ferry from Circular Quay to Manly — one of the best cheap experiences in Sydney ($7.20 each way). The Corso (pedestrian strip) leads from the wharf straight to the beach. Great surf, nice cafes, and a relaxed beach vibe.",
        ko: "Circular Quay에서 Manly까지 아이코닉한 30분 페리를 타세요 — 시드니에서 가장 저렴한 최고의 경험 중 하나입니다(편도 $7.20). Corso(보행자 전용 도로)가 부두에서 해변까지 곧바로 이어집니다. 좋은 파도, 멋진 카페, 여유로운 비치 분위기가 일품입니다.",
      },
      {
        label: "9. Featherdale Wildlife Park (페더데일 야생동물원)",
        en: "One of the best places to get up close with Australian wildlife. You can pet kangaroos, hold a koala (for photos), and see wombats, echidnas, and crocodiles. Located in Western Sydney, about 45 minutes by car or bus from the CBD.",
        ko: "호주 야생 동물과 가까이서 교감할 수 있는 최고의 장소 중 하나입니다. 캥거루를 만져보고, 코알라를 안고(사진 촬영), 웜뱃, 바늘두더지, 악어도 볼 수 있습니다. 시드니 서부에 위치해 있으며, CBD에서 차나 버스로 약 45분 거리입니다.",
      },
      {
        label: "10. Sydney Harbour Ferry (시드니 하버 페리)",
        en: "The best cheap scenic tour in Australia. A regular ferry ride ($7.20) from Circular Quay to anywhere gives you a world-class harbour tour. The F1 to Manly is the most scenic, but the F2 to Taronga Zoo and F4 to Pyrmont are also fantastic. Sit on the outer deck for the best views.",
        ko: "호주에서 가장 저렴한 최고의 경치 투어입니다. Circular Quay에서 아무 방향으로나 가는 일반 페리($7.20)는 세계적 수준의 항구 투어가 됩니다. Manly행 F1이 가장 경치가 좋지만, Taronga Zoo행 F2와 Pyrmont행 F4도 환상적입니다. 최고의 전망을 위해 바깥 데크에 앉으세요.",
      },
    ],
  },
  {
    id: "tipping",
    emoji: "💵",
    title: "Tipping Culture",
    desc: "Do you tip? Short answer: usually not — here's how it works",
    content: [
      {
        label: "Tipping is NOT Expected (팁은 필수가 아닙니다)",
        en: "Unlike the US or Canada, tipping is not part of Australian culture. Service workers earn Award wages (minimum $24+/hour) and don't rely on tips. You're never expected to tip at cafes, pubs, taxis, or for most services. Even in restaurants, tipping is optional, not expected.",
        ko: "미국이나 캐나다와 달리, 호주 문화에서 팁은 일반적이지 않습니다. 서비스 직종 근로자는 법정 최저 임금(시간당 $24+)을 받으며 팁에 의존하지 않습니다. 카페, 펍, 택시, 대부분의 서비스에서 팁이 예상되지 않습니다. 레스토랑에서도 팁은 선택 사항이지 의무가 아닙니다.",
      },
      {
        label: "When You Might Tip (팁을 줄 수 있는 경우)",
        en: "If you receive extraordinary service at a high-end restaurant, a 10% tip is generous and appreciated but never required. Some fancy restaurants include a 'service charge' (10-15%) for large groups — check your bill before adding extra. Rounding up the bill (e.g., paying $60 for a $58 meal) is common and perfectly fine.",
        ko: "고급 레스토랑에서 탁월한 서비스를 받았다면 10% 팁은 관대하고 감사하게 받아들여지지만 결코 필수는 아닙니다. 일부 고급 레스토랑은 대규모 그룹에 '서비스 차지'(10-15%)를 포함시키기도 합니다 — 추가 팁을 주기 전에 계산서를 확인하세요. 계산서를 올림하는 것(예: $58 식사에 $60 지불)은 흔하며 완전히 괜찮습니다.",
      },
      {
        label: "Why No Tipping? (왜 팁이 없나요?)",
        en: "Australia has strong labour laws. Hospitality workers (waiters, bartenders, kitchen staff) earn Award wages with penalty rates for nights and weekends. They have sick leave, annual leave, and superannuation. Tips are genuinely extra — not part of their expected income. This makes dining out more straightforward and less awkward.",
        ko: "호주는 강력한 노동법을 가지고 있습니다. 접객업 종사자(웨이터, 바텐더, 주방 직원)는 야간과 주말에 가산 수당이 포함된 법정 임금을 받습니다. 병가, 연차, 슈퍼안내이션 혜택도 있습니다. 팁은 진정한 '추가' 수입입니다 — 예상 소득의 일부가 아닙니다. 이렇게 하면 외식이 더 간단하고 어색하지 않습니다.",
      },
    ],
  },
  {
    id: "safety",
    emoji: "🦈",
    title: "Safety Tips",
    desc: "Beach safety, sun protection, wildlife, and more",
    content: [
      {
        label: "Swim Between the Flags (깃발 사이에서 수영)",
        en: "Red and yellow flags mark the safest swimming area at patrolled beaches. Lifeguards watch this zone and will help if you get into trouble. NEVER swim outside the flags — rips (strong currents) are the number one killer at Australian beaches. If you get caught in a rip: don't fight it, swim parallel to the shore until you're out of the rip, then swim back in.",
        ko: "빨간색과 노란색 깃발은 구조 요원이 배치된 해변에서 가장 안전한 수영 구역을 표시합니다. 이 구역은 인명 구조원이 감시하며 위급 시 도움을 줍니다. 절대로 깃발 밖에서 수영하지 마세요 — 이안류(강한 해류)는 호주 해변 사망 원인 1위입니다. 이안류에 휩쓸렸다면: 거슬러 헤엄치지 말고, 해변과 평행하게 수영해 이안류에서 벗어난 후 해변으로 돌아오세요.",
      },
      {
        label: "Sun Protection (자외선 차단)",
        en: "The Australian sun is brutal — you can get sunburned in 11 minutes during summer. Wear SPF 50+ sunscreen, reapply every 2 hours. Wear a hat and sunglasses. Follow the Aussie mantra: Slip (on a shirt), Slop (on sunscreen), Slap (on a hat), Seek (shade), Slide (on sunglasses). The UV index regularly hits 'Extreme' (11+) in summer.",
        ko: "호주의 자외선은 매우 강력합니다 — 여름철에는 11분 만에 햇볕에 탈 수 있습니다. SPF 50+ 자외선 차단제를 바르고 2시간마다 다시 바르세요. 모자와 선글라스를 착용하세요. 호주의 슬로건을 따르세요: Slip(셔츠 입기), Slop(자외선 차단제 바르기), Slap(모자 쓰기), Seek(그늘 찾기), Slide(선글라스 끼기). 여름철 자외선 지수는 정기적으로 '극심함'(11+)에 도달합니다.",
      },
      {
        label: "Jellyfish in Summer (여름철 해파리)",
        en: "From November to April, jellyfish (including the potentially dangerous bluebottle) are common along Sydney beaches. Always swim at patrolled beaches where lifeguards will close the beach if jellyfish are present. If stung: rinse with seawater (not fresh water or vinegar for bluebottles) and seek help from a lifeguard. The Irukandji (a dangerous box jellyfish) is rare in Sydney but common further north.",
        ko: "11월부터 4월까지 시드니 해변에는 해파리(위험할 수 있는 블루보틀 포함)가 흔합니다. 항상 구조 요원이 있는 해변에서 수영하세요 — 해파리가 나타나면 인명 구조원이 해변을 폐쇄합니다. 쏘였을 경우: 바닷물로 헹구고(블루보틀의 경우 민물이나 식초는 사용하지 마세요) 인명 구조원의 도움을 받으세요. 위험한 상자 해파리 이루칸지는 시드니에서는 드물지만 북쪽으로 갈수록 흔합니다.",
      },
      {
        label: "Snakes in Bushland (숲속의 뱀)",
        en: "Snakes are common in national parks and bushland around Sydney (especially Blue Mountains, Royal National Park). Most bites happen when people try to handle or step on them. If you see a snake, stop, back away slowly, and give it space. Most species are non-lethal and bites are rare. If bitten: stay calm, apply a pressure bandage, call 000, and don't try to catch the snake.",
        ko: "시드니 주변의 국립공원과 숲(특히 블루 마운틴, 로열 국립공원)에는 뱀이 흔합니다. 대부분의 물림은 사람들이 뱀을 다루거나 밟으려고 할 때 발생합니다. 뱀을 발견하면 멈추고, 천천히 뒤로 물러나 공간을 확보하세요. 대부분의 종은 치명적이지 않으며 물림은 드뭅니다. 물렸다면: 침착하게 압박 붕대를 감고 000에 전화하세요, 뱀을 잡으려 하지 마세요.",
      },
      {
        label: "Safe Tap Water (수돗물 안전)",
        en: "Tap water in Sydney and across Australia is safe to drink everywhere. It's treated to high standards and regularly tested. No need to buy bottled water. Save money and the environment by carrying a reusable bottle and refilling at public taps — you'll find them in parks, train stations, and public buildings.",
        ko: "시드니와 호주 전역의 수돗물은 어디서나 안전하게 마실 수 있습니다. 높은 기준으로 처리되고 정기적으로 검사됩니다. 생수를 살 필요가 없습니다. 재사용 가능한 물병을 가지고 다니며 공용 수도꼭지(공원, 기차역, 공공건물)에서 리필하세요 — 돈도 아끼고 환경도 보호합니다.",
      },
    ],
  },
  {
    id: "budget-tips",
    emoji: "💰",
    title: "Budget Tips",
    desc: "Save money while exploring Sydney like a local",
    content: [
      {
        label: "Opal Daily & Weekly Caps (오팔 일일/주간 상한)",
        en: "The Opal system has daily and weekly caps. As of 2025-26, the daily cap for trains/buses/light rail is approximately $16.80 for adults. For ferries, it's about $7.20. Once you hit the cap, all further travel that day (or week) is free. On Sundays, the cap is even lower — about $8.40 for all modes. Plan longer trips strategically!",
        ko: "오팔 시스템에는 일일 및 주간 상한이 있습니다. 2025-26년 기준, 기차/버스/경전철의 일일 상한은 성인 약 $16.80입니다. 페리는 약 $7.20입니다. 상한에 도달하면 그날(또는 그 주) 더 이상의 이동은 무료입니다. 일요일 상한은 더 낮습니다 — 모든 교통수단 약 $8.40입니다. 긴 여행은 전략적으로 계획하세요!",
      },
      {
        label: "Free Things to Do (무료 활동)",
        en: "Sydney has plenty of free attractions: Bondi Beach (swim or sunbathe), Royal Botanic Garden (stunning harbour views), The Rocks weekend markets, all the coastal walks (Bondi to Coogee, Spit to Manly), Hyde Park, the Art Gallery of NSW (permanent collection is free), and the Australian Museum has free general entry.",
        ko: "시드니에는 무료 명소가 많습니다: 본디 비치(수영 또는 일광욕), 왕립 식물원(아름다운 항구 전망), 더 록스 주말 시장, 모든 해안 산책로(본디-쿠지, 스핏-맨리), 하이드 파크, 뉴사우스웨일즈 주립 미술관(상설 전시는 무료), 호주 박물관(일반 입장 무료)이 있습니다.",
      },
      {
        label: "Cheapest Meals (저렴한 식사)",
        en: "For the best value meals in Sydney, head to Haymarket and Chinatown (near Central Station and Town Hall). You can get a huge bowl of noodles, dumplings, or rice dishes for $10-$15. Thai Town on Campbell Street and Korean restaurants around Pitt Street are also excellent value. Food court meals at shopping centres (like World Square or Pitt Street Mall) are budget-friendly too.",
        ko: "시드니에서 가장 가성비 좋은 식사를 원한다면 Haymarket과 차이나타운(Central Station과 Town Hall 근처)으로 가세요. 큰 그릇의 국수, 만두, 밥 요리를 $10-$15에 먹을 수 있습니다. Campbell Street의 Thai Town과 Pitt Street 주변의 한식당도 가성비가 좋습니다. 쇼핑센터(World Square나 Pitt Street Mall)의 푸드코트도 저렴합니다.",
      },
      {
        label: "Wednesday Museum Discounts (수요일 박물관 할인)",
        en: "Many Sydney museums and galleries offer half-price entry on Wednesdays, including the Sydney Observatory, the Australian National Maritime Museum (Darling Harbour), and some exhibitions at the Powerhouse Museum. Always check the website before visiting — some require online booking for the discount.",
        ko: "많은 시드니 박물관과 갤러리가 수요일에 반값 입장을 제공합니다 — 시드니 천문대, 호주 국립 해양 박물관(Darling Harbour), 그리고 파워하우스 박물관의 일부 전시가 해당됩니다. 방문 전에 꼭 웹사이트를 확인하세요 — 일부는 할인을 위해 온라인 예약이 필요합니다.",
      },
      {
        label: "Opal Concession Card (오팔 할인 카드)",
        en: "If you have a concession entitlement (student visa holders, low-income card holders, seniors), you can get an Opal concession card with up to 50% off fares. You'll need to apply and prove your eligibility. International students with a valid student ID should check if their institution participates in the iUSEpass or similar programs for even bigger discounts.",
        ko: "할인 자격(학생 비자 소지자, 저소득 카드 소지자, 시니어)이 있다면 오팔 할인 카드를 받아 최대 50% 할인을 받을 수 있습니다. 신청하여 자격을 증명해야 합니다. 유효한 학생증을 가진 유학생은 해당 기관이 iUSEpass나 유사 프로그램에 참여하는지 확인해 더 큰 할인을 받을 수 있습니다.",
      },
    ],
  },
  {
    id: "useful-apps",
    emoji: "📱",
    title: "Useful Apps",
    desc: "Essential apps for getting around and finding things to do",
    content: [
      {
        label: "Google Maps (구글 지도)",
        en: "Already installed on most phones. Download offline maps for Sydney before you arrive — this lets you navigate without using mobile data. The transit directions are incredibly accurate with real-time bus, train, and ferry departures, platform numbers, and service alerts. It also shows walking and cycling routes.",
        ko: "대부분의 휴대폰에 이미 설치되어 있습니다. 도착하기 전에 시드니 오프라인 지도를 다운로드하세요 — 모바일 데이터 없이도 길찾기가 가능합니다. 대중교통 길찾기는 실시간 버스, 기차, 페리 출발 정보, 플랫폼 번호, 운행 알림까지 매우 정확합니다. 도보 및 자전거 경로도 표시됩니다.",
      },
      {
        label: "TripView (트립뷰)",
        en: "The best dedicated transit app for Sydney (and Melbourne). Shows real-time timetables for trains, buses, ferries, and light rail all in one view. The killer feature: once you download the timetable data, it works without internet — perfect for areas with poor reception (like underground train tunnels).",
        ko: "시드니(및 멜버른)를 위한 최고의 전용 교통 앱입니다. 기차, 버스, 페리, 경전철의 실시간 시간표를 한 화면에서 보여줍니다. 핵심 기능은: 시간표 데이터를 한 번 다운로드하면 인터넷 없이도 작동합니다 — 지하 터널처럼 수신이 약한 지역에 완벽합니다.",
      },
      {
        label: "Opal App (오팔 앱)",
        en: "The official Transport for NSW app for managing your Opal card. Check your balance, top up, view your trip history, and see if you've hit the daily or weekly cap. You can also set up auto top-up so you never run out of credit mid-trip.",
        ko: "Transport for NSW의 공식 오팔 카드 관리 앱입니다. 잔액 확인, 충전, 여행 기록 조회, 일일/주간 상한 도달 여부를 확인할 수 있습니다. 자동 충전을 설정하면 여행 중 잔액 부족을 걱정할 필요가 없습니다.",
      },
      {
        label: "Zype (자이프)",
        en: "A fantastic app for finding concerts, live music, theatre shows, festivals, comedy nights, and pop-up events in Sydney. It aggregates events from across the city so you don't miss anything. You can filter by date, category, area, and price range. Great for discovering hidden gems!",
        ko: "시드니의 콘서트, 라이브 음악, 연극, 페스티벌, 코미디 나이트, 팝업 이벤트를 찾을 수 있는 환상적인 앱입니다. 도시 전체의 이벤트를 모아서 보여주므로 놓치는 일이 없습니다. 날짜, 카테고리, 지역, 가격대별로 필터링할 수 있습니다. 숨은 명소를 발견하기 좋아요!",
      },
      {
        label: "Time Out Sydney (타임아웃 시드니)",
        en: "The go-to guide for what's happening in the city. Restaurant reviews, bar listings, event recommendations, things to do this weekend — all curated by local editors. The app is free and updated daily. Perfect for finding a good dinner spot or planning your weekend on the fly.",
        ko: "시드니에서 무슨 일이 일어나고 있는지 알려주는 필수 가이드입니다. 레스토랑 리뷰, 바 리스트, 이벤트 추천, 이번 주말 할 것들 — 모두 지역 편집자들이 선별합니다. 앱은 무료이며 매일 업데이트됩니다. 좋은 저녁 식사 장소를 찾거나 주말 계획을 세울 때 완벽합니다.",
      },
    ],
  },
];

export default function TouristPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-eucalypt dark:text-white mb-2 reveal">
            Tourist 🏖️
          </h1>
          <p className="text-eucalypt/60 dark:text-dark-muted/60 reveal reveal-delay-1">
            Getting around Sydney, must-see sights, and local tips
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-4">
        {sections.map((section, si) => {
          const isOpen = openSection === section.id;
          return (
            <div
              key={section.id}
              className="bg-white dark:bg-dark-card border border-sand dark:border-dark-border rounded-2xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${si * 0.08}s` }}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full text-left px-5 py-4 flex items-center gap-3 hover:bg-sand/50 dark:hover:bg-dark-surface/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-xl shrink-0">{section.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h2 className="font-bold text-base text-eucalypt dark:text-white"><En>{section.title}</En><Ko>{section.title}</Ko></h2>
                  <p className="text-xs text-eucalypt/50 dark:text-dark-muted/50"><En>{section.desc}</En><Ko>{section.desc}</Ko></p>
                </div>
                <svg
                  className={`w-5 h-5 text-sunset shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Accordion Body */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="divide-y divide-sand dark:divide-dark-border border-t border-sand dark:border-dark-border">
                  {section.content.map((item, ii) => (
                    <div key={ii} className="px-5 py-4">
                      <p className="font-semibold text-sm text-sunset mb-1.5">{item.label}</p>
                      <En><p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed mb-2">{item.en}</p></En>
                      <Ko><p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed mb-2">{item.ko}</p></Ko>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Bottom note */}
        <div className="bg-sunset/5 border border-sunset/20 rounded-2xl p-5 text-center">
          <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60">
            Made with 🦘 for everyone new to Australia
          </p>
        </div>
      </div>
    </div>
  );
}

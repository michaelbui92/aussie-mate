// Server component — bilingual Sydney transport guide.
// Redesigned in editorial style.

import { En, Ko } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { Bus, Car, Coin, Plane, Train, Tree } from "@/components/Icons";

type TransportSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; en: string; ko: string }>;
};

const sections: TransportSection[] = [
  {
    id: "opal-card",
    iconKey: "Bus",
    accent: "sunset",
    title: "Opal Card",
    koTitle: "오팔 카드",
    desc: "Sydney's public transport card — how to get one and use it",
    koDesc: "시드니 대중교통 카드 — 얻는 방법과 사용법",
    items: [
      { label: "What is Opal?", en: "Opal is the contactless card you use for buses, trains, ferries, and light rail in Sydney and NSW. You tap on and tap off at every journey. It saves you money — cash fares are almost double Opal prices.", ko: "Opal은 시드니와 NSW의 버스, 기차, 페리, 라이트 레일에 사용하는 비접촉식 카드입니다. 매 이동마다 탭 온과 탭 오프를 합니다. 현금보다 훨씬 저렴합니다." },
      { label: "Adult vs Concession", en: "There are two Opal types: Adult (full price) and Concession (half price for full-time students, seniors, pensioners). If you're a full-time student, apply for a Concession Opal card — you need your student ID and a passport photo.", ko: "Opal에는 두 종류가 있습니다: Adult(정가)와 Concession(전학생, 시니어, 연금수급자 50% 할인). 전학생이라면 Concession Opal 카드를 신청하세요 — 학생증과 여권 사진이 필요합니다." },
      { label: "How to Get One", en: "Buy an Opal card at any train station, 7-Eleven, or newsagent. For a Concession card, you'll need to register online at opal.com.au — it takes 4-6 weeks to arrive by mail. Keep your student status updated — cards can be cancelled if you're no longer a student.", ko: "기차역, 7-Eleven, 신문판매대에서 Opal 카드를 구매하세요. Concession 카드는 opal.com.au에서 온라인으로 등록해야 합니다 — 우편으로 도착하는 데 4-6주가 걸립니다. 학생 신분을 최신으로 유지하세요 — 학생이 아니면 카드가 취소될 수 있습니다." },
      { label: "Daily Cap", en: "Opal has a daily cap — you can't be charged more than a certain amount per day. For Adult Opal in Sydney, the cap is around $16-18/day (train, bus, ferry, light rail combined). Concession cards have lower caps. Weekly caps also apply after 8 journeys.", ko: "Opal에는 일일 상한선이 있습니다 — 하루에 정해진 금액 이상으로는 부과되지 않습니다. 시드니 Adult Opal의 경우 약 $16-18/일(기차, 버스, 페리, 라이트 레일 combined). Concession 카드는 더 낮은 상한선이 있습니다. 8회 이후에는 주간 상한선이 적용됩니다." },
      { label: "Auto-reload", en: "Set up auto-reload so you never run out of balance. When your balance drops below $10, it automatically tops up from your credit/debit card. You can also tap your card at partner shops (Coles, Newsagents) to reload in person.", ko: "잔고가 떨어지지 않도록 자동 충전을 설정하세요. 잔고가 $10 이하로 떨어지면 자동으로 신용/직불 카드에서 충전됩니다. 파트너 매장(Coles, 신문판매대)에서 카드를 탭해서 직접 충전할 수도 있습니다." },
      { label: "Transferring Between Modes", en: "One of Opal's best features: you can transfer between bus, train, ferry, and light rail within 60 minutes and only pay one fare (the highest mode). You must tap off each time and tap on the next mode. The system caps the total cost.", ko: "Opal의 최적의 기능: 버스, 기차, 페리, 라이트 레일 사이에서 60분 이내에 환승하면 하나의 운임(가장 높은 모드)만 부과됩니다. 매번 탭 오프하고 다음 모드를 탭 온해야 합니다. 시스템이 총 비용을 상한선까지 제한합니다." },
    ],
  },
  {
    id: "sydney-trains",
    iconKey: "Train",
    accent: "coast",
    title: "Sydney Trains",
    koTitle: "시드니 기차",
    desc: "How the train system works",
    koDesc: "기차 시스템이 어떻게 작동하는지",
    items: [
      { label: "Train Network Basics", en: "Sydney has a suburban train network (Sydney Trains) with lines covering the city, eastern suburbs, inner west, North Shore, and outer areas. Trains run from about 4am to midnight every day. On Friday and Saturday nights, some lines run 24 hours.", ko: "시드니에는 시내, 이스턴 서브urbs, 이너 웨스트, 노스 쇼어, 외곽 지역을covering the 교와 area - 기차 네트워크(Sydney Trains)가 있습니다. 기차는 매일 약 새벽 4시부터 자정까지 운행됩니다. 금요일과 토요일 밤에는 일부 노선이 24시간 운영됩니다." },
      { label: "Zones and Fares", en: "Sydney is divided into zones 1-3. Most of what you need (CBD, Bondi, Manly, Parramatta) is in Zone 1 or 2. Opal calculates your fare based on zones travelled. Don't tap off at Circular Quay if you're heading to the Opera House — take the ferry instead (it's free with your Opal within the harbour).", ko: "시드니는 1-3 존으로 나뉩니다. 필요한 대부분의 곳(CBD, Bondi, Manly, Parramatta)은 1존 또는 2존에 있습니다. Opal이 존 기반 운임을 계산합니다. 오페라 하우스로 가려면 시어큐에서 탭 오프하지 마세요 — 대신 페리를 타세요(항구 내에서는 Opal로 무료입니다)." },
      { label: "Reading Timetables", en: "Most trains run every 5-15 minutes during peak hours (6-9am, 4-7pm). Off-peak, it can be every 20-30 minutes. Use the Trip Planner app or Google Maps — real-time updates are available. The T1 North Shore line is the busiest.", ko: "대부분의 기차는 러시아워(6-9am, 4-7pm)에 5-15분 간격으로 운행됩니다. 비 러시아워에는 20-30분 간격일 수 있습니다. Trip Planner 앱이나 Google Maps를 사용하세요 — 실시간 업데이트를활용할 수 있습니다. T1 노스 쇼어 노선이 가장 붐빈다." },
      { label: "Airport Link", en: "The Airport line (T8) costs extra — about $20-25 for a single trip from the airport. Don't take the train if you're on a budget — the 400 bus from the airport terminals costs about $3 and takes a bit longer. If your accommodation is near Central or Redfern, it's often walkable.", ko: "공항 노선(T8)은 추가 요금이 필요합니다 — 공항에서 약 $20-25입니다. 예산이 빠듯하면 기차를 타지 마세요 — 400 버스는 약 $3이고 조금 더 걸립니다. 중앙역이나 레드퍼른 근처에 있으면 도보로 가능할 때가 많습니다." },
    ],
  },
  {
    id: "buses",
    iconKey: "Car",
    accent: "sage",
    title: "Buses & Ferries",
    koTitle: "버스와 페리",
    desc: "The bus network and the most scenic transport in Sydney",
    koDesc: "버스 네트워크와 시드니에서 가장 멋진 교통수단",
    items: [
      { label: "Bus Network", en: "Sydney Buses covers the whole city and most suburbs. Most routes run from 5am to midnight, with Nightride services covering major routes 24/7. Use Google Maps or the Trip Planner app for real-time tracking. Buses are usually the cheapest way to get around if you don't live near a train station.", ko: "Sydney Buses는 도시 전체와 대부분의 교외 지역을 커버합니다. 대부분의 노선은 오전 5시부터 자정까지 운행되며, Nightride 서비스는 주요 노선을 24시간 운행합니다. 실시간 추적은 Google Maps나 Trip Planner 앱을 사용하세요. 기차역 근처에 살지 않는다면 보통 버스가 가장 저렴한 이동 수단입니다." },
      { label: "Light Rail (L1, L2, L3)", en: "Sydney's light rail serves the CBD, inner west (L1), and the eastern suburbs to Kingsford (L2) and Juniors Kingsford (L3). Great for getting around Surry Hills, Pyrmont, and the inner west. Same Opal card, same caps as buses and trains.", ko: "시드니의 라이트 레일은 CBD, 이너 웨스트(L1), 이스턴 서브urbs의 Kingsford(L2)와 Juniors Kingsford(L3)까지 운행됩니다. Surry Hills, Pyrmont, 이너 웨스트를 이동하기에 좋습니다. 버스와 기차와 동일한 Opal 카드, 동일한 상한선이 적용됩니다." },
      { label: "Sydney Ferries", en: "Sydney Ferries is one of the most scenic transport networks in the world. The F1 from Circular Quay to Manly (30 min, ~$7.20) is a must-do. The F2 to Taronga Zoo, F4 to Pyrmont, and F5 to Neutral Bay are all gorgeous. All use the same Opal card. Ferries within the harbour are surprisingly cheap — often cheaper than a bus for the same distance.", ko: "Sydney Ferries는 세계에서 가장 경치 좋은 교통 네트워크 중 하나입니다. Circular Quay에서 Manly까지 F1(30분, 약 $7.20)은 꼭 타보세요. Taronga Zoo행 F2, Pyrmont행 F4, Neutral Bay행 F5도 모두 멋집니다. 모두 동일한 Opal 카드를 사용합니다. 항구 내의 페리는 의외로 저렴합니다 — 종종 같은 거리의 버스보다 저렴합니다." },
    ],
  },
  {
    id: "driving-cycling",
    iconKey: "Tree",
    accent: "stone",
    title: "Cycling & Walking",
    koTitle: "자전거와 도보",
    desc: "Active transport in Sydney",
    koDesc: "시드니의 자발적 교통수단",
    items: [
      { label: "Cycling in Sydney", en: "Sydney has a growing network of bike paths. The CBD to inner west has separated lanes on many roads. Bike share schemes (oBike, Lime) operate in some areas. Helmets are mandatory — fines apply for riding without one. Sydney's hilly in places — be prepared for climbs!", ko: "시드니에는 늘어나는 자전거 도로 네트워크가 있습니다. CBD에서 이너 웨스트는 많은 도로에 분리된 자전거 lanes가 있습니다. 일부 지역에서는 자전거 공유(오바이크, 라임) 운영. 헬멧 착용은 의무 — 미착용 시 벌금이 부과됩니다. 시드니에는 경사가 있으니 오르막에 대비하세요!" },
      { label: "Walking Distances", en: "Sydney's CBD is compact and walkable. The Rocks to Circular Quay is 10 minutes. Darling Harbour to Barangaroo is 15 minutes. Most inner-city suburbs (Surry Hills, Newtown, Glebe) are easily explored on foot. Wear comfortable shoes and bring water in summer.", ko: "시드니 CBD는 컴팩트하고 도보로 이동할 수 있습니다. The Rocks에서 Circular Quay는 10분. Darling Harbour에서 Barangaroo는 15분. 대부분의 시내 근처 지역(Surry Hills, Newtown, Glebe)은 도보로 쉽게 탐험할 수 있습니다. 편안한 신발을 신고 여름에는 물을 지참하세요." },
    ],
  },
  {
    id: "regional",
    iconKey: "Plane",
    accent: "rose",
    title: "Regional & Interstate",
    koTitle: "지역 및 타주",
    desc: "Getting out of Sydney",
    koDesc: "시드니에서 벗어나기",
    items: [
      { label: "Trains to Other Cities", en: "NSW TrainLink runs services to regional NSW and interstate. Sydney to Melbourne: ~11 hours on the Spirit of XPT. Sydney to Brisbane: ~14 hours. Sydney to Canberra: ~4 hours. Book in advance for cheaper fares. Sleeper berths available on some long-distance services.", ko: "NSW TrainLink는 NSW 지역과 타주로 가는 서비스를 운행합니다. 시드니에서 멜버른까지: Spirit of XPT로 약 11시간. 시드니에서 브리즈번까지: 약 14시간. 시드니에서 캔버라까지: 약 4시간. 미리 예약하면 더 저렴합니다. 일부 장거리 서비스에는 침대석이 있습니다." },
      { label: "Domestic Flights", en: "Sydney Airport (SYD) has direct flights to all major Australian cities. Melbourne is 1h 15min, Brisbane is 1h 30min, Perth is 5h, Darwin is 4h 30min. Budget airlines: Jetstar, Tigerair (now part of Virgin), Bonza. Compare on Google Flights or Skyscanner. Book 6-8 weeks ahead for the best prices.", ko: "시드니 공항(SYD)은 모든 주요 호주 도시로 직항편을 운항합니다. 멜버른 1시간 15분, 브리즈번 1시간 30분, 퍼스 5시간, 다윈 4시간 30분. 저가 항공사: 제트스타, 타이거에어(현재 버진에 편입), 본자. Google Flights나 Skyscanner에서 비교하세요. 6-8주 전에 예약하면 최저가입니다." },
      { label: "Interstate Buses", en: "Greyhound and Murrays are the two main interstate bus operators. Cheaper than trains and planes but slower. Sydney to Melbourne: ~11 hours. Sydney to Brisbane: ~12 hours. Useful for backpackers and budget travellers. Book online for cheaper fares.", ko: "Greyhound와 Murrays는 두 주요 타주 버스 운영사입니다. 기차와 비행기보다 저렴하지만 느립니다. 시드니에서 멜버른까지: 약 11시간. 시드니에서 브리즈번까지: 약 12시간. 배낭여행객과 예산 여행객에게 유용합니다. 온라인 예약이 더 저렴합니다." },
    ],
  },
];

const quickFacts = [
  { labelEn: "Daily cap", labelKo: "일일 상한", value: "~$16.80" },
  { labelEn: "Opal cost", labelKo: "Opal 가격", value: "Free–$8" },
  { labelEn: "Trip time", labelKo: "이동 시간", value: "30 min" },
  { labelEn: "Airport fee", labelKo: "공항 요금", value: "+$15" },
];

export default function TransportPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>Transport</En><Ko>교통</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En>Getting around</En><Ko>시드니 교통</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En>Opal cards, trains, buses, ferries — Sydney&apos;s transport, decoded.</En>
            <Ko>오팔 카드, 기차, 버스, 페리 — 시드니 교통의 모든 것.</Ko>
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <section className="mb-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-4">
            <En>Quick facts</En><Ko>핵심 정보</Ko>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickFacts.map((f, i) => (
              <div key={f.labelEn} className={`reveal reveal-delay-${(i % 5) + 1} p-4 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border`}>
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 mb-1">
                  <En>{f.labelEn}</En><Ko>{f.labelKo}</Ko>
                </p>
                <p className="font-serif text-xl md:text-2xl text-stone-900 dark:text-stone-100 leading-tight">{f.value}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <EditorialSection key={section.id} data={section} index={i} />
          ))}
        </div>

        <section className="mt-16 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-3">
            <En>Trip planner</En><Ko>여행 플래너</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En>Real-time updates at your fingertips.</En>
            <Ko>실시간 업데이트를 손쉽게.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En>Google Maps and the Trip Planner app both show live train, bus, and ferry times. Tap your destination, choose Transit, and follow the directions. Real-time platform numbers and service alerts are built in.</En>
            <Ko>Google Maps와 Trip Planner 앱 모두 실시간 기차, 버스, 페리 시간을 보여줍니다. 목적지을 탭하고 대중교통을 선택한 후 안내를 따르세요. 실시간 플랫폼 번호와 운행 알림이 내장되어 있습니다.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://transportnsw.info" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">Trip Planner ↗</a>
            <a href="https://www.opal.com.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Opal account ↗</a>
          </div>
        </section>
      </div>
    </div>
  );
}

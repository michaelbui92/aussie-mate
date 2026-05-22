"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "@/components/Icons";
import { En, Ko } from "@/components/LangBlocks";

const getIcon = (key: string) =>
  (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[key];

interface Section {
  id: string;
  iconKey: string;
  title: string;
  koTitle?: string;
  desc: string;
  koDesc?: string;
  content: ContentItem[];
}

interface ContentItem {
  label: string;
  en: string;
  ko: string;
}

const sections: Section[] = [
  {
    id: "opal-card",
    iconKey: "Bus",
    title: "Opal Card",
    koTitle: "오팔 카드",
    desc: "Sydney's public transport card — how to get one and use it",
    koDesc: "시드니 대중교통 카드 — 얻는 방법과 사용법",
    content: [
      {
        label: "What is Opal?",
        en: "Opal is the contactless card you use for buses, trains, ferries, and light rail in Sydney and NSW. You tap on and tap off at every journey. It saves you money — cash fares are almost double Opal prices.",
        ko: "Opal은 시드니와 NSW의 버스, 기차, 페리, 라이트 레일에 사용하는 비접촉식 카드입니다. 매 이동마다 탭 온과 탭 오프를 합니다. 현금보다 훨씬 저렴합니다.",
      },
      {
        label: "Adult vs Concession",
        en: "There are two Opal types: Adult (full price) and Concession (half price for full-time students, seniors, pensioners). If you're a full-time student, apply for a Concession Opal card — you need your student ID and a passport photo.",
        ko: "Opal에는 두 종류가 있습니다: Adult(정가)와 Concession(전학생, 시니어, 연금수급자 50% 할인). 전학생이라면 Concession Opal 카드를 신청하세요 — 학생증과 여권 사진이 필요합니다.",
      },
      {
        label: "How to Get One",
        en: "Buy an Opal card at any train station, 7-Eleven, or newsagent. For a Concession card, you'll need to register online at opal.com.au — it takes 4-6 weeks to arrive by mail. Keep your student status updated — cards can be cancelled if you're no longer a student.",
        ko: "기차역, 7-Eleven, 신문판매대에서 Opal 카드를 구매하세요. Concession 카드는 opal.com.au에서 온라인으로 등록해야 합니다 — 우편으로 도착하는 데 4-6주가 걸립니다. 학생 신분을 최신으로 유지하세요 — 학생이 아니면 카드가 취소될 수 있습니다.",
      },
      {
        label: "Daily Cap",
        en: "Opal has a daily cap — you can't be charged more than a certain amount per day. For Adult Opal in Sydney, the cap is around $16-18/day (train, bus, ferry, light rail combined). Concession cards have lower caps. Weekly caps also apply after 8 journeys.",
        ko: "Opal에는 일일 상한선이 있습니다 — 하루에 정해진 금액 이상으로는 부과되지 않습니다. 시드니 Adult Opal의 경우 약 $16-18/일(기차, 버스, 페리, 라이트 레일 combined). Concession 카드는 더 낮은 상한선이 있습니다. 8회 이후에는 주간 상한선이 적용됩니다.",
      },
      {
        label: "Auto-reload",
        en: "Set up auto-reload so you never run out of balance. When your balance drops below $10, it automatically tops up from your credit/debit card. You can also tap your card at partner shops (Coles, Newsagents) to reload in person.",
        ko: "잔고가 떨어지지 않도록 자동 충전을 설정하세요. 잔고가 $10 이하로 떨어지면 자동으로 신용/직불 카드에서 충전됩니다. 파트너 매장(Coles, 신문판매대)에서 카드를 탭해서 직접 충전할 수도 있습니다.",
      },
      {
        label: "Transferring Between Modes",
        en: "One of Opal's best features: you can transfer between bus, train, ferry, and light rail within 60 minutes and only pay one fare (the highest mode). You must tap off each time and tap on the next mode. The system caps the total cost.",
        ko: "Opal의最高の機能: 버스, 기차, 페리, 라이트 레일 사이에서 60분 이내에 환승하면 하나의 운임(가장 높은 모드)만 부과됩니다. 매번 탭 오프하고 다음 모드를 탭 온해야 합니다. 시스템이 총 비용을 상한선까지 제한합니다.",
      },
    ],
  },
  {
    id: "sydney-trains",
    iconKey: "Train",
    title: "Sydney Trains",
    koTitle: "시드니 기차",
    desc: "How the train system works",
    koDesc: "기차 시스템이 어떻게 작동하는지",
    content: [
      {
        label: "Train Network Basics",
        en: "Sydney has a suburban train network (Sydney Trains) with lines covering the city, eastern suburbs, inner west, North Shore, and outer areas. Trains run from about 4am to midnight every day. On Friday and Saturday nights, some lines run 24 hours.",
        ko: "시드니에는 시내, 이스턴 서브urbs, 이너 웨스트, 노스 쇼어, 외곽 지역을covering하는郊外 기차 네트워크(Sydney Trains)가 있습니다. 기차는 매일 약 새벽 4시부터 자정까지 운행됩니다. 금요일과 토요일 밤에는 일부 노선이 24시간 운영됩니다.",
      },
      {
        label: "Zones and Fares",
        en: "Sydney is divided into zones 1-3. Most of what you need (CBD, Bondi, Manly, Parramatta) is in Zone 1 or 2. Opal calculates your fare based on zones travelled. Don't tap off at Circular Quay if you're heading to the Opera House — take the ferry instead (it's free with your Opal within the harbour).",
        ko: "시드니는 1-3 존으로 나뉩니다. 필요한 대부분의 곳(CBD, Bondi, Manly, Parramatta)은 1존 또는 2존에 있습니다. Opal이 존 기반 운임을 계산합니다. 오페라 하우스로 가려면 시어큐에서 탭 오프하지 마세요 — 대신 페리를 타세요(항구 내에서는 Opal로 무료입니다).",
      },
      {
        label: "Reading Timetables",
        en: "Most trains run every 5-15 minutes during peak hours (6-9am, 4-7pm). Off-peak, it can be every 20-30 minutes. Use the Trip Planner app or Google Maps — real-time updates are available. The T1 North Shore line is the busiest.",
        ko: "대부분의 기차는 러시아워(6-9am, 4-7pm)에 5-15분 간격으로 운행됩니다. 비 러시아워에는 20-30분 간격일 수 있습니다. Trip Planner 앱이나 Google Maps를 사용하세요 — 실시간 업데이트를利用할 수 있습니다. T1 노스 쇼어 노선이 가장 붐빈다.",
      },
      {
        label: "Airport Link",
        en: "The Airport line (T8) costs extra — about $20-25 for a single trip from the airport. Don't take the train if you're on a budget — the 400 bus from the airport terminals costs about $3 and takes a bit longer. If your accommodation is near Central or Redfern, it's often walkable.",
        ko: "공항 노선(T8)은 추가 요금이 필요합니다 — 공항에서 약 $20-25입니다. 예산이 빠듯하면 기차를 타지 마세요 — 400 버스는 약 $3이고 조금 더 걸립니다. 중앙역이나 레드퍼른 근처에 있으면 도보로 가능할 때가 많습니다.",
      },
    ],
  },
  {
    id: "buses",
    iconKey: "Bus",
    title: "Buses",
    koTitle: "버스",
    desc: "Sydney's extensive bus network",
    koDesc: "시드니의 광범위한 버스 네트워크",
    content: [
      {
        label: "Bus Network",
        en: "Buses cover areas that trains don't reach. They're the most common form of public transport in Sydney. Routes are numbered — most run through major hubs like Bondi Junction, Chatswood, Parramatta, and the City.",
        ko: "버스는 기차가 다니지 않는 지역을 cover합니다. 시드니에서 가장 흔한 대중교통입니다. 노선은 번호가 매겨져 있고 대부분 Bondi Junction, Chatswood, Parramatta, City 같은 주요 허브를 거칩니다.",
      },
      {
        label: "Getting On and Off",
        en: "Tap on when you get on (front door of the bus). Tap off when you get off — this is important! If you forget to tap off, you'll be charged the maximum fare from where you tapped on. Use the Opal reader near the driver.",
        ko: "탑승할 때 탭 온하세요(버スの앞문). 하차할 때 탭 오프하세요 — 이것 중요합니다! 탭 오프하는 것을 잊은으면 최대 운임이 부과됩니다. 운전기사 근처의 Opal 리더를 사용하세요.",
      },
      {
        label: "Express Buses",
        en: "Some buses are express (200-series routes) — they skip some stops and are faster. Other buses are 'limited stops' — check the route number and timetable. At night, Nightride buses replace trains on some routes.",
        ko: "일부 버스는 익스프레스(200번대 노선)입니다 — 일부 정류장을 건너뛰므로 더 빠릅니다. 다른 버스는 '정류장 제한'입니다 — 노선 번호와 시간표를 확인하세요. 밤에는 나이트라이드 버스가 일부 노선에서 기차를 대체합니다.",
      },
      {
        label: "School Buses",
        en: "Some routes have dedicated school buses for students. These are free with a valid Opal concession card during school terms. Check your route at transportnsw.info.",
        ko: "일부 노선에는 학생 전용 스쿨 버스가 있습니다.学期 중 유효한 Opal Concession 카드로 무료입니다. transportnsw.info에서 노선을 확인하세요.",
      },
    ],
  },
  {
    id: "ferries",
    iconKey: "Plane",
    title: "Ferries",
    koTitle: "페리",
    desc: "Sydney's iconic harbour ferries",
    koDesc: "시드니의 상징적인 항구 페리",
    content: [
      {
        label: "Sydney Ferries",
        en: "Sydney's ferry network is one of the most beautiful commutes in the world. Routes go to Manly, Taronga Zoo, Watson's Bay, Parramatta (via the river), and many more. The harbour is huge — ferries are often faster than buses for cross-harbour trips.",
        ko: "시드니의 페리 네트워크는 세계에서 가장美しい 통근 중 하나입니다. 노선은 Manly, Taronga Zoo, Watson's Bay, Parramatta(강을 통해), 그 외 많은 곳으로 갑니다. 항구가 매우 크므로 페리가 크로스-harbour 이동에 버스보다 빠른 경우가 많습니다.",
      },
      {
        label: "Tap On and Off",
        en: "Just like trains and buses, you must tap on and tap off at ferry wharves. The Opal readers are at the entrance to each wharf. Ferries are covered by your Opal card — same fare structure as other modes.",
        ko: "기차와 버스와 마찬가지로 페리 부두에서도 탭 온과 탭 오프를 해야 합니다. Opal 리더는 각 부두 입구에 있습니다. 페리는 Opal 카드로 적용됩니다 — 다른 모드와 동일한 운임 구조입니다.",
      },
      {
        label: "Free Ferry Trips",
        en: "Within the harbour (Circular Quay, Manly, Taronga Zoo, etc.), ferries are free if you're already in the harbour zone. However, if you're travelling on the Parramatta River or to more distant stops, you'll pay a fare. It's always worth checking your Opal balance.",
        ko: "항구 내(Circular Quay, Manly, Taronga Zoo 등)에서는 이미 항구 존에 있으면 페리가 무료입니다. 하지만 Parramatta River나 더 먼 정류장으로 가면 운임이 부과됩니다. Opal 잔고를 항상 확인하는 것이 좋습니다.",
      },
    ],
  },
  {
    id: "driving",
    iconKey: "Car",
    title: "Driving in Australia",
    koTitle: "호주에서 운전하기",
    desc: "Getting your licence and driving on Aussie roads",
    koDesc: "면허 따기 и 호주 길에서 운전하기",
    content: [
      {
        label: "International Licence",
        en: "If you have a valid international driving permit (IDP) from your home country, you can drive in NSW for up to 3 months from your arrival date. After 3 months, you must get an Australian licence. Korean licence holders can take a practical test only (no written test) to convert.",
        ko: "모국에서 유효한 국제운전면허(IDP)가 있으면 도착일로부터 최대 3개월 동안 NSW에서 운전할 수 있습니다. 3개월 후에는 호주 면허를 받아야 합니다. 한국 면허 소지자는 실기 시험만 치르면 됩니다(필기 시험 없음).",
      },
      {
        label: "NSW Licence Process",
        en: "To get your NSW licence: 1) Pass the Driver Knowledge Test (DKT) at a Service NSW centre. 2) Pass the Hazard Perception Test. 3) Pass the Driving Test. 4) You get a provisional (red P) licence for 2 years, then an unrestricted licence. Total cost: around $200-300.",
        ko: "NSW 면허를 받으려면: 1) Service NSW 센터에서 지식시험(DKT)을 통과하세요. 2) 위험 인지 시험을 통과하세요. 3) 운전 시험을 통과하세요. 4) 2년간 임시(빨간 P) 면허를 받고 그 다음 무제한 면허를 받습니다. 총 비용: 약 $200-300.",
      },
      {
        label: "Professional Driving Lessons",
        en: "Many people take professional lessons to pass their driving test faster. A competent instructor can help you understand what the tester is looking for. Lessons typically cost $50-80/hour in Sydney. Doing a package of 5-10 lessons is usually better value than one-off sessions.",
        ko: "많은 사람들이 운전 시험을 빨리 통과하기 위해 전문 레슨을 받습니다. 유능한 강사는 테스트자가 무엇을 찾는지 이해하는 데 도움이 됩니다. 시드니에서 레슨은 일반적으로 $50-80/시간입니다. 5-10회 패키지를 하면 일회성セッション보다 더 나은 가치를 제공합니다.",
      },
      {
        label: "Korea to Australia Licence",
        en: "If you have a Korean driver's licence, you can convert it to an Australian licence without retaking the written test. Book a practical driving test at Roads and Maritime Services (RMS). Bring your Korean licence, passport, and translation if required.",
        ko: "한국 운전면허가 있으면 필기 시험 다시 치르지 않고 호주 면허로 전환할 수 있습니다. Roads and Maritime Services(RMS)에서 실기 운전 시험을 예약하세요. 한국 면허, 여권, 필요한 경우 번역서를 가져오세요.",
      },
    ],
  },
  {
    id: "uber-taxis",
    iconKey: "Car",
    title: "Rideshare & Taxis",
    koTitle: "rideshare와 택시",
    desc: "Uber, taxis, and other ride options",
    koDesc: "Uber, 택시 및 기타 이동 옵션",
    content: [
      {
        label: "Uber in Sydney",
        en: "Uber is widely available in Sydney and generally cheaper than taxis for most trips. UberX is the standard option; Uber Comfort for newer cars; Uber Premier for premium rides. There's also Uber Eats for food delivery.",
        ko: "Uber는 시드니에서 널리 이용 가능하며 대부분의 이동에 대해 보통 택시보다 저렴합니다. UberX가 표준 옵션입니다; Uber Comfort는 최신 차량; Uber Premier는 고급 이동. 음식 배달에는 Uber Eats도 있습니다.",
      },
      {
        label: "Taxis",
        en: "Taxis are metered — fares start at around $4.20 and increase per km. They're useful if you're travelling late at night or to places with no Uber coverage. You can book a taxi by calling 13 10 08 or using the 13cabs app. Taxis accept card and cash.",
        ko: "택시는 미터제입니다 — 운임은 약 $4.20로 시작해서 km당 증가합니다. 늦은 밤이나 Uber 범위 밖의 장소로 갈 때 유용합니다. 13 10 08로 전화하거나 13cabs 앱으로택시를 예약할 수 있습니다. 택시는 카드와 현금을 받습니다.",
      },
      {
        label: "Late Night Options",
        en: "After midnight, Uber and taxis are harder to find. Pre-book if you know you'll need one. Some train lines run 24 hours on weekends (check before you go out). Consider staying overnight if you've been drinking — taxis are worth the cost vs a DUI.",
        ko: "자정 이후에는 Uber와 택시를 찾기 어렵습니다. 필요하다면 미리 예약하세요. 일부 기차 노선은 주말에 24시간 운영됩니다(나가기기 전에 확인하세요). drinking했다면 밤새 머무르는 것을 고려하세요 — DUI 대비 택시가worth the cost입니다.",
      },
      {
        label: "Airport Rides",
        en: "For airport trips: Uber Pickup is at the dedicated Uber zone (follow signs). A trip from the airport to the city costs around $30-50 depending on traffic. Regular taxis from the airport are metered and can cost $50-60 to the city.",
        ko: "공항 이동의 경우: Uber 픽업은 전용 Uber 구역에 있습니다(표지판을 따르세요). 공항에서 시내까지는 교통 상황에 따라 약 $30-50입니다. 공항의 일반 택시는 미터제이며 시내까지 $50-60이 될 수 있습니다.",
      },
    ],
  },
];

export default function TransportPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-eucalypt dark:text-white mb-2">
            <En>🚗 Transport</En>
            <Ko>🚗 교통</Ko>
          </h1>
          <p className="text-sm md:text-base text-eucalypt/60 dark:text-dark-muted/60">
            <En>Opal cards, trains, buses, ferries, and driving in NSW</En>
            <Ko>오팔 카드, 기차, 버스, 페리, NSW 운전</Ko>
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-4">
        {sections.map((section, si) => {
          const isOpen = openSection === section.id;
          return (
            <div
              key={section.id}
              className="bg-white dark:bg-dark-card border border-sand dark:border-dark-border rounded-2xl overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full text-left px-4 md:px-5 py-4 min-h-[60px] flex items-center gap-3 hover:bg-sand/50 dark:hover:bg-dark-surface/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-sunset shrink-0">{React.createElement(getIcon(section.iconKey), { className: "w-5 h-5" })}</span>
                <div className="flex-1 min-w-0 pr-2">
                  <h2 className="font-bold text-sm md:text-base text-eucalypt dark:text-white leading-snug">
                    <En>{section.title}</En>
                    <Ko>{section.koTitle || section.title}</Ko>
                  </h2>
                  <p className="text-xs text-eucalypt/50 dark:text-dark-muted/50 mt-0.5">
                    <En>{section.desc}</En>
                    <Ko>{section.koDesc || section.desc}</Ko>
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 text-sunset shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Accordion Body */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="divide-y divide-sand dark:divide-dark-border border-t border-sand dark:border-dark-border">
                  {section.content.map((item, ii) => (
                    <div key={ii} className="px-5 py-4">
                      <p className="font-semibold text-sm text-sunset mb-1.5">{item.label}</p>
                      <En><p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed mb-2">{item.en}</p></En>
                      <Ko><p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed">{item.ko}</p></Ko>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* CTA Box */}
        <div className="bg-coast/10 border border-coast/30 rounded-2xl p-5 text-center">
          <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 mb-3">
            <En>Ready to get your NSW licence? <strong>Drive with Bui</strong> offers professional driving lessons in Sydney — structured, affordable, and designed to help you pass.</En>
            <Ko>NSW 면허를 따낼 준비가 됐나요? <strong>Drive with Bui</strong>는 시드니에서 전문 운전 레슨을 제공합니다 — 체계적이고 저렴하며 시험 통과를 위해 설계되었습니다.</Ko>
          </p>
          <Link
            href="https://drivewithbui.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-coast text-white font-semibold rounded-xl hover:bg-coast-light transition-all text-sm"
          >
            <En>Book Lessons →</En>
            <Ko>레슨 예약하기 →</Ko>
          </Link>
        </div>

        {/* Bottom note */}
        <div className="bg-sunset/5 border border-sunset/20 rounded-2xl p-5 text-center">
          <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60">
            <En>Plan your trip at{' '}
              <span className="text-sunset font-semibold">transportnsw.info</span>{' '}
              or use Google Maps — both have real-time transport info.</En>
            <Ko>여행 계획을{' '}
              <span className="text-sunset font-semibold">transportnsw.info</span>나
              Google Maps에서 세우세요 — 둘 다 실시간 교통 정보를 제공합니다.</Ko>
          </p>
        </div>
      </div>
    </div>
  );
}
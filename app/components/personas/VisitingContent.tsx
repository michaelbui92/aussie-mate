import Link from "next/link";
import { En, Ko } from "../LangBlocks";

const QUICK_FACTS = [
  { en: "Get an Opal card for trains, buses, ferries", ko: "기차·버스·페리는 오팔 카드로" },
  { en: "Plug type I — bring an adapter", ko: "콘센트는 I 타입 — 어댑터 필요" },
  { en: "Sydney is GMT+10/+11 (AEST/AEDT)", ko: "시드니는 GMT+10/+11 (AEST/AEDT)" },
  { en: "Tap-and-go cards accepted everywhere", ko: "대부분의 곳에서 탭 결제 가능" },
  { en: "Tap water is safe to drink", ko: "수돗물 마셔도 안전합니다" },
  { en: "UV is extreme — slip, slop, slap", ko: "자외선 강함 — 모자, 선크림 필수" },
];

const MONTHLY = [
  { m: "Jan", en: "Beach season. Australia Day (26th).", ko: "해변 시즌. 호주인의 날 (1/26)." },
  { m: "Feb", en: "Hot, humid. Sydney Mardi Gras.", ko: "더위·습함. 시드니 Mardi Gras." },
  { m: "Mar", en: "Easter. Cooler. Whale migration starts.", ko: "부활절. 서늘해짐. 고래 이동 시작." },
  { m: "Apr", en: "Anzac Day (25th). Autumn colours.", ko: "Anzac Day (4/25). 가을 단풍." },
  { m: "May", en: "Cool. Fewer crowds. Good for walks.", ko: "선선함. 한산. 산책 최적기." },
  { m: "Jun", en: "Winter. Whale watching season starts.", ko: "겨울. 고래 관찰 시즌 시작." },
  { m: "Jul", en: "School holidays. Ski fields open.", ko: "학교 방학. 스키장 개장." },
  { m: "Aug", en: "Ski season peak. Whale season peaks.", ko: "스키 절정. 고래 시즌 절정." },
  { m: "Sep", en: "Spring. Wildflowers. Father's Day.", ko: "봄. 야생화. 아버지의 날." },
  { m: "Oct", en: "Spring. Labour Day long weekend.", ko: "봄. 노동절 긴 연휴." },
  { m: "Nov", en: "Melbourne Cup. Warm. Pre-summer buzz.", ko: "멜버른 컵. 따뜻. 여름 전 축제." },
  { m: "Dec", en: "Christmas at the beach. School holidays.", ko: "해변에서 보내는 크리스마스. 방학." },
];

const PERSONAS = [
  {
    titleEn: "For couples",
    titleKo: "커플이라면",
    textEn: "Sunset cruises, Hunter Valley day trip, Blue Mountains weekend. Book restaurants in advance on weekends.",
    textKo: "선셋 크루즈, Hunter Valley 당일치기, 블루마운틴 주말여행. 주말 레스토랑은 미리 예약.",
  },
  {
    titleEn: "For solo travellers",
    titleKo: "혼자라면",
    textEn: "Free walking tours, hostels in Bondi/Newtown, Meetup groups. Trains are safe and well-signed at night.",
    textKo: "프리 워킹투어, 본디/뉴타운 호스텔, Meetup 모임. 밤에도 기차 안전하고 안내 잘 되어있음.",
  },
  {
    titleEn: "For working holiday makers",
    titleKo: "워홀이라면",
    textEn: "Apply for TFN early (no tax = no refund). Open a bank account in week 1. Check your super when you leave.",
    textKo: "TFN은 빨리 신청 (세금 등록 안 하면 환급 못함). 첫 주에 은행 계좌 개설. 떠날 때 super 확인.",
  },
];

const LINKS = [
  { href: "/tourist", en: "Sydney & NSW tourist guide", ko: "시드니 & NSW 여행 가이드", borderColor: "border-t-wattle", accent: "text-wattle" },
  { href: "/beyond-sydney", en: "Weekend trips & road trips", ko: "주말 여행 & 드라이브 코스", borderColor: "border-t-coast", accent: "text-coast" },
  { href: "/transport", en: "Opal, trains, ferries", ko: "오팔, 기차, 페리", borderColor: "border-t-sunset-light", accent: "text-sunset-light" },
];

export default function VisitingContent() {
  return (
    <>
      {/* Quick facts */}
      <section>
        <h3 className="text-sm font-bold uppercase tracking-wider text-eucalypt/60 dark:text-dark-muted/60 mb-3">
          <En>Quick facts</En>
          <Ko>알아두면 좋은 것</Ko>
        </h3>
        <ul className="divide-y divide-eucalypt/10 dark:divide-dark-border border-y border-eucalypt/10 dark:border-dark-border">
          {QUICK_FACTS.map((q) => (
            <li key={q.en} className="py-3 text-sm text-eucalypt dark:text-white">
              <En>{q.en}</En>
              <Ko>{q.ko}</Ko>
            </li>
          ))}
        </ul>
      </section>

      {/* Monthly guide */}
      <section>
        <h3 className="text-sm font-bold uppercase tracking-wider text-eucalypt/60 dark:text-dark-muted/60 mb-3">
          <En>What to do, by month</En>
          <Ko>월별 추천</Ko>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-eucalypt/10 dark:bg-dark-border border border-eucalypt/10 dark:border-dark-border rounded-md overflow-hidden">
          {MONTHLY.map((mo) => (
            <div key={mo.m} className="bg-white dark:bg-dark-card p-3">
              <div className="text-2xl font-bold text-sunset tracking-tight mb-1">{mo.m}</div>
              <div className="text-xs text-eucalypt/70 dark:text-dark-muted/70 leading-snug">
                <En>{mo.en}</En>
                <Ko>{mo.ko}</Ko>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Audience variants */}
      <section>
        <h3 className="text-sm font-bold uppercase tracking-wider text-eucalypt/60 dark:text-dark-muted/60 mb-3">
          <En>Tailored to you</En>
          <Ko>상황별 팁</Ko>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PERSONAS.map((p) => (
            <div key={p.titleEn} className="border border-eucalypt/10 dark:border-dark-border border-t-2 border-t-sunset bg-white dark:bg-dark-card rounded-md p-5">
              <h4 className="text-base font-semibold tracking-tight text-eucalypt dark:text-white mb-2">
                <En>{p.titleEn}</En>
                <Ko>{p.titleKo}</Ko>
              </h4>
              <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed">
                <En>{p.textEn}</En>
                <Ko>{p.textKo}</Ko>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Curated links */}
      <section>
        <h3 className="text-sm font-bold uppercase tracking-wider text-eucalypt/60 dark:text-dark-muted/60 mb-3">
          <En>Keep reading</En>
          <Ko>더 알아보기</Ko>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`group block border border-eucalypt/10 dark:border-dark-border border-t-2 ${l.borderColor} bg-white dark:bg-dark-card rounded-md p-5 hover:border-eucalypt/40 dark:hover:border-dark-muted/40 transition-colors`}
            >
              <h4 className={`text-base font-semibold tracking-tight ${l.accent}`}>
                <En>{l.en}</En>
                <Ko>{l.ko}</Ko>
              </h4>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

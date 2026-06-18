import { En, Ko } from "@/components/LangBlocks";
import SeasonAccordion from "@/components/SeasonAccordion";
import { seoFor, withSeo } from "@/lib/seo";

export const metadata = withSeo(
  {

  ...seoFor("/weather"),
  title: "Weather & seasons — 호주 날씨와 계절",
  description:
    "호주(시드니 기준) 사계절 — 여름·겨울·봄·가을 특징, 자외선(UV), 비 오는 패턴, 자연재해(산불, 폭풍) 한국어 정리. 한국과 반대인 남반구 계절이 핵심.",
  },
  "/weather"
);

const seasons = [
  {
    key: "summer",
    title: { en: "Summer", ko: "여름" },
    months: "Dec · Jan · Feb",
    img: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "from-orange-400 to-amber-500",
    en: "Hot, humid, beach season. 25–40°C. Australian summer runs December to February — Christmas at the beach is completely normal.",
    ko: "더움과 습기, 해변 시즌. 25–40°C. 호주의 여름은 12월부터 2월까지 — 해변에서 크리스마스는 완전히 정상입니다.",
  },
  {
    key: "autumn",
    title: { en: "Autumn", ko: "가을" },
    months: "Mar · Apr · May",
    img: "https://images.pexels.com/photos/34907670/pexels-photo-34907670.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "from-amber-500 to-yellow-600",
    en: "Mild and pleasant. 15–25°C. The leaves in the Blue Mountains turn gold and red. Prime walking weather.",
    ko: "온화하고 쾌적함. 15–25°C. 블루마운틴 단풍이 노랑과 빨강으로 물듭. 산책 최적기.",
  },
  {
    key: "winter",
    title: { en: "Winter", ko: "겨울" },
    months: "Jun · Jul · Aug",
    img: "https://images.pexels.com/photos/21660236/pexels-photo-21660236.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "from-sky-400 to-blue-500",
    en: "Cool but rarely cold. 8–18°C in Sydney. Snow falls in the Alps and Tasmania — but not in Sydney. Frost at night in regional areas.",
    ko: "선선하지만 거의 추운 편 아님. 시드니는 8–18°C. 눈은 알프스 지방과 태즈먼니아에 내림 — 시드니엔 안 냄. 지역에 따라 밤에 서리.",
  },
  {
    key: "spring",
    title: { en: "Spring", ko: "봄" },
    months: "Sep · Oct · Nov",
    img: "https://images.pexels.com/photos/33329755/pexels-photo-33329755.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "from-emerald-400 to-green-500",
    en: "Wildflowers, baby animals, warmth returning. 15–28°C. Windy in some areas. The best time to visit the outback.",
    ko: "야생화, 새끼 동물들, 따뜻함 복귀. 15–28°C. 일부 지역엔 바람이 많음. 아웃백 방문 최적기.",
  },
] as const;

const slipSlop = [
  { en: "Slip on a shirt", ko: "Slip: 셔츠 입기" },
  { en: "Slop on sunscreen (SPF 50+)", ko: "Slop: 선크림 (SPF 50+)" },
  { en: "Slap on a hat", ko: "Slap: 모자 쓰기" },
] as const;

const quirks = [
  { en: '"Four seasons in one day"', ko: '"하루에 네 계절"', descEn: "Sydney and Melbourne especially can shift from sunny to rain to wind in hours. Always bring a light jacket.", descKo: "시드니와 멜버른은 특히 몇 시간 만에 맑음에서 비, 바람으로 바뀔 수 있습니다. 항상 가벼운 재킷을 가지고 다니세요." },
  { en: "Summer storms", ko: "여름 뇌우", descEn: "Afternoon thunderstorms are common in summer — especially in the east. They pass quickly.", descKo: "여름철 오후 천둥번개가 흔함 — 특히 동부. 빠르게 지나갑니다." },
  { en: "Bushfire season", ko: "산불 시즌", descEn: "Summer (Dec–Feb) brings high fire danger, especially in regional NSW. Check the RFS website before regional travel.", descKo: "여름(12–2월)에는 산불 위험이 높음, 특히 NSW 지역. 지역 여행 전 RFS 웹사이트를 확인하세요." },
  { en: "El Niño years", ko: "엘니뇨 해", descEn: "Drought conditions are more common in El Niño years. Water restrictions can apply. Check your local council website.", descKo: "엘니뇨 해에는 가뭄이 더 흔합니다. 상수도 사용 제한이 적용될 수 있습니다." },
] as const;

const sydneyStats = [
  { labelEn: "Avg Summer", labelKo: "여름 평균", val: "24°C / 19°C" },
  { labelEn: "Avg Winter", labelKo: "겨울 평균", val: "17°C / 9°C" },
  { labelEn: "Sea temp (summer)", labelKo: "해수 온도 (여름)", val: "23–26°C" },
  { labelEn: "Rainiest month", labelKo: "강수량이 가장 많은 월", val: "June (130mm)" },
] as const;

export default function WeatherPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Header */}
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>Weather</En>
            <Ko>날씨</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En>Weather in Australia</En>
            <Ko>호주의 날씨</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En>What to expect, season by season — plan when to visit, what to pack, and how to make the most of each season.</En>
            <Ko>계절별 날씨 가이드 — 언제 방문할지, 무엇을 챙길지, 각 계절을 최대한 즐기는 방법.</Ko>
          </p>
        </div>
      </header>

      {/* Season cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-5">
          <En>Four seasons</En>
          <Ko>네 계절</Ko>
        </p>
        <SeasonAccordion seasons={seasons} />

        {/* UV section */}
        <section className="mb-10 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20 border border-amber-100/60 dark:border-amber-900/30 p-6 md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-amber-700 dark:text-amber-400 mb-3">
            <En>UV &amp; sun safety</En>
            <Ko>자외선 &amp; 안전</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-3 leading-tight">
            <En>The sun here is different.</En>
            <Ko>호주의 태양은 다릅니다.</Ko>
          </h2>
          <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En>Australia has the highest UV radiation in the world. Even on cloudy days, UV can be extreme. Slip, slop, slap:</En>
            <Ko>호주는 세계 최고 자외선 지수를 보유한 나라입니다. 흐린 날에도 자외선이 강할 수 있습니다. Slip, slop, slap:</Ko>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {slipSlop.map((item, i) => (
              <div
                key={item.en}
                className={`reveal reveal-delay-${(i % 5) + 1} p-4 rounded-2xl bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm border border-amber-200/40 dark:border-amber-900/30`}
              >
                <p className="font-serif text-base text-stone-900 dark:text-stone-100 leading-snug">
                  <En>{item.en}</En>
                  <Ko>{item.ko}</Ko>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Weather quirks */}
        <section className="mb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-5">
            <En>Aussie weather quirks</En>
            <Ko>호주 날씨의 특이점</Ko>
          </p>
          <ul className="space-y-3">
            {quirks.map((item, i) => (
              <li
                key={item.en}
                className={`reveal reveal-delay-${(i % 5) + 1} flex gap-4 group`}
              >
                <span className="shrink-0 w-8 h-8 rounded-full bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                  →
                </span>
                <div>
                  <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">
                    <En>{item.en}</En>
                    <Ko>{item.ko}</Ko>
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                    <En>{item.descEn}</En>
                    <Ko>{item.descKo}</Ko>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Sydney specifics */}
        <section className="rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-3">
            <En>Sydney climate</En>
            <Ko>시드니 기후</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-5 leading-tight">
            <En>The numbers behind the experience.</En>
            <Ko>경험의 이면의 숫자들.</Ko>
          </h2>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {sydneyStats.map((item, i) => (
              <div
                key={item.labelEn}
                className={`reveal reveal-delay-${(i % 5) + 1} p-3.5 rounded-xl bg-stone-800 dark:bg-stone-900 border border-stone-700/50`}
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-1">
                  <En>{item.labelEn}</En>
                  <Ko>{item.labelKo}</Ko>
                </p>
                <p className="font-serif text-lg text-white">{item.val}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-400">
            <En>Source: Bureau of Meteorology (bom.gov.au) — download the app for real-time forecasts.</En>
            <Ko>출처: 기상청 (bom.gov.au) — 실시간 예보를 보려면 앱을 다운로드하세요.</Ko>
          </p>
        </section>
      </div>
    </div>
  );
}

import { En, Ko } from "@/components/LangBlocks";
import { ICONS } from "@/destinations/icons";
import { Sun, MapPin } from "@/components/Icons";

export default function WeatherPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-stone-900 mb-2">
        <En>Weather in Australia</En>
        <Ko>호주의 날씨</Ko>
      </h1>
      <p className="text-stone-500 mb-10">
        <En>What to expect, season by season — and why summer is nothing like Korea.</En>
        <Ko>호주의 계절별 날씨 가이드 — 여름이 한국이랑 어떻게 다른지.</Ko>
      </p>

      {/* Season cards */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        {[
          {
            season: { en: "Summer", ko: "여름", icon: "sun", bg: "bg-orange-400" },
            months: "Dec · Jan · Feb",
            en: "Hot, humid, beach season. 25–40°C. Australian summer runs December to February — Christmas at the beach is completely normal.",
            ko: "더움과 습기, 해변 시즌. 25–40°C. 호주의 여름은 12월부터 2월까지 — 해변에서 크리스마스는 완전히 정상입니다.",
          },
          {
            season: { en: "Autumn", ko: "가을", icon: "leaf", bg: "bg-amber-500" },
            months: "Mar · Apr · May",
            en: "Mild and pleasant. 15–25°C. The leaves in the Blue Mountains turn gold and red. Prime walking weather.",
            ko: "온화하고 쾌적함. 15–25°C. 블루마운틴 단풍이 노랑과 빨강으로 물듭. 산책 최적기.",
          },
          {
            season: { en: "Winter", ko: "겨울", icon: "snowflake", bg: "bg-sky-400" },
            months: "Jun · Jul · Aug",
            en: "Cool but rarely cold. 8–18°C in Sydney. Snow falls in the Alps and Tasmania — but not in Sydney. Frost at night in regional areas.",
            ko: "선선하지만 거의 추운 편 아님. 시드니는 8–18°C. 눈은 알프스 지방과 태즈먼니아에 내림 — 시드니엔 안 냄. 지역에 따라 밤에 서리.",
          },
          {
            season: { en: "Spring", ko: "봄", icon: "cherry", bg: "bg-emerald-400" },
            months: "Sep · Oct · Nov",
            en: "Wildflowers, baby animals, warmth returning. 15–28°C. Windy in some areas. The best time to visit the outback.",
            ko: "야생화, 새끼 동물들, 따뜻함 복귀. 15–28°C. 일부 지역엔 바람이 많음. 아웃백 방문 최적기.",
          },
        ].map((s) => (
          <div key={s.season.en} className={`${s.season.bg} border-4 border-black p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]`}>
            <div className="text-3xl mb-2" dangerouslySetInnerHTML={{ __html: ICONS[s.season.icon] }} />
            <div className="text-xs font-black uppercase tracking-wider text-black/60 mb-1">{s.months}</div>
            <h3 className="font-black text-xl text-stone-900 mb-2">
              <En>{s.season.en}</En>
              <Ko>{s.season.ko}</Ko>
            </h3>
            <p className="text-sm text-stone-900 leading-relaxed">
              <En>{s.en}</En>
              <Ko>{s.ko}</Ko>
            </p>
          </div>
        ))}
      </div>

      {/* UV section */}
      <div className="bg-amber-50 border-4 border-black p-6 mb-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-xl font-black text-stone-900 mb-3"><Sun className="inline-block w-6 h-6" /> UV and Sun Safety</h2>
        <p className="text-sm text-stone-700 mb-4">
          <En>
            Australia has the highest UV radiation in the world. Even on cloudy days, UV can be extreme. Slip, slop, slap:
          </En>
          <Ko>
            호주는 세계 최고 자외선 지수를 보유한 나라입니다. 흐린 날에도 자외선이 강할 수 있습니다. Slip, slop, slap:
          </Ko>
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { en: "Slip on a shirt", ko: "Slip: 셔츠 입기", emoji: "shirt" },
            { en: "Slop on sunscreen (SPF 50+)", ko: "Slop: 선크림 (SPF 50+)", emoji: "sunscreen" },
            { en: "Slap on a hat", ko: "Slap: 모자 쓰기", emoji: "cap" },
          ].map((item) => (
            <div key={item.en} className="bg-white border-2 border-black p-3 text-center">
              <div className="text-2xl mb-1" dangerouslySetInnerHTML={{ __html: ICONS[item.emoji] }} />
              <p className="text-xs font-black text-stone-800">
                <En>{item.en}</En>
                <Ko>{item.ko}</Ko>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Weather quirks */}
      <div className="bg-sky-50 border-4 border-black p-6 mb-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-xl font-black text-stone-900 mb-3"><span className="inline-block w-6 h-6" dangerouslySetInnerHTML={{ __html: ICONS.suncloud }} /> Aussie Weather Quirks</h2>
        <div className="space-y-3">
          {[
            { en: '"Four seasons in one day"', ko: '"하루에 네 계절"', descEn: "Sydney and Melbourne especially can shift from sunny to rain to wind in hours. Always bring a light jacket.", descKo: "시드니와 멜버른은 특히 몇 시간 만에 맑음에서 비, 바람으로 바뀔 수 있습니다. 항상 가벼운 재킷을 가지고 다니세요." },
            { en: "Summer storms", ko: "여름 뇌우", descEn: "Afternoon thunderstorms are common in summer — especially in the east. They pass quickly.", descKo: "여름철 오후 천둥번개가 흔함 — 특히 동부. 빠르게 지나갑니다." },
            { en: "Bushfire season", ko: "산불 시즌", descEn: "Summer (Dec–Feb) brings high fire danger, especially in regional NSW. Check the RFS website before regional travel.", descKo: "여름(12–2월)에는 산불 위험이 높음, 특히 NSW 지역. 지역 여행 전 RFS 웹사이트를 확인하세요." },
            { en: "El Niño years", ko: "엘니뇨 해", descEn: "Drought conditions are more common in El Niño years. Water restrictions can apply. Check your local council website.", descKo: "엘니뇨 해에는 가뭄이 더 흔합니다. 상수도 사용 제한이 적용될 수 있습니다." },
          ].map((item) => (
            <div key={item.en} className="flex gap-3 p-3 bg-white border-2 border-black">
              <span className="text-lg">→</span>
              <div>
                <h3 className="font-black text-sm text-stone-900">
                  <En>{item.en}</En>
                  <Ko>{item.ko}</Ko>
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  <En>{item.descEn}</En>
                  <Ko>{item.descKo}</Ko>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sydney specifics */}
      <div className="bg-emerald-50 border-4 border-black p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-xl font-black text-stone-900 mb-3"><MapPin className="inline-block w-6 h-6" /> Sydney Climate Summary</h2>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { labelEn: "Avg Summer", labelKo: "여름 평균", val: "24°C / 19°C" },
            { labelEn: "Avg Winter", labelKo: "겨울 평균", val: "17°C / 9°C" },
            { labelEn: "Sea temp (summer)", labelKo: "해수 온도 (여름)", val: "23–26°C" },
            { labelEn: "Rainiest month", labelKo: "강수량이 가장 많은 월", val: "June (130mm)" },
          ].map((item) => (
            <div key={item.labelEn} className="flex items-center gap-3 p-3 bg-white border-2 border-black">
              <div className="text-xs font-bold text-emerald-600">
                <En>{item.labelEn}</En>
                <Ko>{item.labelKo}</Ko>
              </div>
              <div className="ml-auto font-black text-sm text-stone-900">{item.val}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-500">
          <En>Source: Bureau of Meteorology (bom.gov.au) — download the app for real-time forecasts.</En>
          <Ko>출처: 기상청 (bom.gov.au) — 실시간 예보를 보려면 앱을 다운로드하세요.</Ko>
        </p>
      </div>
    </div>
  );
}

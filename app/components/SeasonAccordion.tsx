"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { En, Ko } from "./LangBlocks";

type SeasonKey = "summer" | "autumn" | "winter" | "spring";

type SeasonDetail = {
  whatToDo: { en: string; ko: string }[];
  whatToPack: { en: string; ko: string }[];
  warnings: { en: string; ko: string }[];
};

const seasonDetails: Record<SeasonKey, SeasonDetail> = {
  summer: {
    whatToDo: [
      { en: "Beach days — Bondi, Manly, Coogee, Bronte", ko: "비치 데이 — 본다이, 맨리, 쿠지, 브론테" },
      { en: "Coastal walks (Bondi to Coogee, Spit to Manly)", ko: "해안 산책 (본다이→쿠지, 스핏→맨리)" },
      { en: "Christmas at the beach — BBQ, pavlova, sun", ko: "해변에서 크리스마스 — 바비큐, 파블로바, 햇빛" },
      { en: "New Year's Eve fireworks on the harbour", ko: "시드니 하버에서 새해 전야 불꽃놀이" },
      { en: "Outdoor dining, cinema, and live music", ko: "야외 식사, 영화관, 라이브 음악" },
    ],
    whatToPack: [
      { en: "SPF 50+ sunscreen (reapply every 2 hours)", ko: "SPF 50+ 선크림 (2시간마다 덧바르기)" },
      { en: "Wide-brim hat and sunglasses", ko: "챙 넓은 모자와 선글라스" },
      { en: "Reusable water bottle — stay hydrated", ko: "텀블러 — 수분 섭취 필수" },
      { en: "Swimwear and rashie (sun-protection shirt)", ko: "수영복과 래쉬가드" },
      { en: "Light, breathable clothing", ko: "가벼운 통기성 좋은 옷" },
    ],
    warnings: [
      { en: "Extreme UV — even on cloudy days. Check sunsmart.com.au", ko: "극심한 자외선 — 흐린 날에도 주의. sunsmart.com.au 확인" },
      { en: "Summer thunderstorms — spectacular but pass quickly", ko: "여름 뇌우 — 장관이지만 빠르게 지나감" },
      { en: "Bushfire season (Dec–Feb) — check RFS website before regional travel", ko: "산불 시즌 (12–2월) — 지역 여행 전 RFS 웹사이트 확인" },
      { en: "Stay hydrated — carry water, avoid peak sun (11am–3pm)", ko: "수분 섭취 — 물 지참, 최고 햇빛 시간(11시–3시) 피하기" },
    ],
  },
  autumn: {
    whatToDo: [
      { en: "Blue Mountains for autumn leaves and cool hiking", ko: "블루마운틴 단풍 구경과 시원한 하이킹" },
      { en: "Hunter Valley wine tours and harvest festivals", ko: "헌터 밸리 와인 투어와 수확 축제" },
      { en: "Royal Easter Show (March/April) at Sydney Olympic Park", ko: "로열 이스터 쇼 (3월/4월) 시드니 올림픽 파크" },
      { en: "Walking and cycling — prime weather for outdoor activity", ko: "산책과 자전거 — 야외 활동 최적의 날씨" },
      { en: "Outdoor cinemas and markets (Marrickville, Carriageworks)", ko: "야외 영화관과 마켓 (매릭빌, 캐리지웍스)" },
    ],
    whatToPack: [
      { en: "Light jacket or cardigan for cool evenings", ko: "선선한 저녁을 위한 가벼운 재킷 또는 가디건" },
      { en: "Layers — mornings can be cool, afternoons warm", ko: "레이어드 — 아침은 선선, 오후는 따뜻함" },
      { en: "Comfortable walking shoes", ko: "편안한 워킹화" },
      { en: "Umbrella — autumn can bring showers", ko: "우산 — 가을에는 소나기가 올 수 있음" },
    ],
    warnings: [
      { en: "Daylight saving ends first Sunday in April — clocks go back 1 hour", ko: "4월 첫째 일요일 서머타임 종료 — 시계를 1시간 뒤로" },
      { en: "Early morning frost in regional areas (Blue Mountains, Southern Highlands)", ko: "지역 지역(블루마운틴, 서던하일랜즈)의 이른 아침 서리" },
      { en: "Evenings get dark earlier — plan outdoor activities accordingly", ko: "저녁이 일찍 어두워짐 — 야외 활동 계획 시 참고" },
    ],
  },
  winter: {
    whatToDo: [
      { en: "Whale watching — humpback migration (June–November)", ko: "고래 관찰 — 혹등고래 이동 (6월–11월)" },
      { en: "Skiing and snowboarding in the Snowy Mountains (Thredbo, Perisher)", ko: "스노위 마운틴에서 스키와 스노보드 (스레드보, 페리셔)" },
      { en: "Vivid Sydney (May–June) — light installations across the city", ko: "비비드 시드니 (5월–6월) — 도시 전역의 빛 설치물" },
      { en: "Cozy cafes, indoor markets (The Rocks, Paddington)", ko: "아늑한 카페, 실내 마켓 (더 록스, 패딩턴)" },
      { en: "Winter festivals and food events", ko: "겨울 축제와 푸드 이벤트" },
    ],
    whatToPack: [
      { en: "Warm jacket or puffer coat", ko: "따뜻한 재킷 또는 패딩 코트" },
      { en: "Beanie, scarf, and gloves for evenings", ko: "저녁용 비니, 목도리, 장갑" },
      { en: "Thermal layers for mountain trips", ko: "산 여행용 보온 속옷" },
      { en: "Heated home essentials — slippers, warm pyjamas", ko: "난방용 홈템 — 슬리퍼, 따뜻한 파자마" },
    ],
    warnings: [
      { en: "Frost on car windows in the morning — allow extra time to defrost", ko: "아침 차창에 서리 — 해동에 추가 시간 확보" },
      { en: "Heating costs can be high — check if your rental has insulation", ko: "난방비가 많이 나올 수 있음 — 임대주택 단열 상태 확인" },
      { en: "Regional areas (Southern Highlands, Blue Mountains) can drop near 0°C", ko: "지역 지역은 거의 0°C까지 떨어질 수 있음" },
      { en: "Shorter daylight hours (sunset ~5pm in June)", ko: "일조 시간 단축 (6월 일몰 ~오후 5시)" },
    ],
  },
  spring: {
    whatToDo: [
      { en: "Wildflower season — botanic gardens, Mt Tomah, regional NSW", ko: "야생화 시즌 — 식물원, 마운트 토마, NSW 지역" },
      { en: "Outdoor markets and street fairs (Orange Blossom Festival, local markets)", ko: "야외 마켓과 거리 축제" },
      { en: "Beach starts getting warm — early swimming season", ko: "해변이 따뜻해지기 시작 — 초기 수영 시즌" },
      { en: "Footy finals season — AFL and NRL Grand Finals (September)", ko: "풋볼 파이널 시즌 — AFL, NRL 그랜드 파이널 (9월)" },
      { en: "Spring racing carnival — Melbourne Cup first Tuesday in November", ko: "봄 경마 카니발 — 11월 첫째 화요일 멜버른 컵" },
    ],
    whatToPack: [
      { en: "Layers — cool mornings, warm afternoons", ko: "레이어드 — 선선한 아침, 따뜻한 오후" },
      { en: "Sunglasses and sunscreen (UV starts rising)", ko: "선글라스와 선크림 (자외선 상승 시작)" },
      { en: "Light jacket for windy days", ko: "바람 부는 날 대비 가벼운 재킷" },
      { en: "Hayfever medication if you're sensitive to pollen", ko: "꽃가루 알레르기 약 (해당자만)" },
    ],
    warnings: [
      { en: "September winds — some of the windiest days of the year in Sydney", ko: "9월 바람 — 시드니에서 일 년 중 가장 바람이 많이 부는 날" },
      { en: "Pollen season — hayfever affects many people from September", ko: "꽃가루 시즌 — 9월부터 알레르기 비염 조심" },
      { en: "UV index climbs quickly — don't be fooled by cooler mornings", ko: "자외선 지수 급상승 — 선선한 아침에 속지 마세요" },
    ],
  },
};

type SeasonCard = {
  key: SeasonKey;
  title: { en: string; ko: string };
  months: string;
  img: string;
  accent: string;
  en: string;
  ko: string;
};

/* ─── Animated panel (expands via max-height tracking) ─── */
function useAutoHeight(active: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    if (!active) {
      setH(0);
      return;
    }
    // Reset then measure on next frame so the DOM has rendered
    setH(0);
    const raf = requestAnimationFrame(() => {
      if (ref.current) setH(ref.current.scrollHeight);
    });
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return { ref, style: { maxHeight: h || undefined, overflow: "hidden" as const, transition: "max-height 500ms ease-in-out" } };
}

/* ─── A single season card ─── */
function SeasonCard({
  s,
  isOpen,
  onToggle,
  compact,
}: {
  s: SeasonCard;
  isOpen: boolean;
  onToggle: () => void;
  compact?: boolean;
}) {
  const detail = seasonDetails[s.key];
  const cornerAccent = s.accent.replace("from-", "to-").split(" ")[0];
  const { ref, style } = useAutoHeight(isOpen);

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`
        block relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl
        text-left w-full transition-all duration-500 ease-in-out
        ${compact ? "aspect-[4/5] sm:aspect-[5/6]" : ""}
      `}
    >
      {/* Gradient fallback */}
      <div className={`absolute inset-0 bg-gradient-to-br ${s.accent}`} aria-hidden="true" />

      {/* Image */}
      <img
        src={s.img}
        alt={`${s.title.en} in Australia`}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
          isOpen ? "scale-105" : "hover:scale-105"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" aria-hidden="true" />

      {/* Always-visible overlay */}
      <div
        className={`relative p-5 md:p-6 flex flex-col justify-end text-white transition-all duration-500 ease-in-out ${
          isOpen ? "min-h-[200px]" : "h-full"
        }`}
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70 mb-2">
          {s.months}
        </p>
        <h3 className="font-serif text-2xl md:text-3xl mb-2 leading-tight">
          <En>{s.title.en}</En>
          <Ko>{s.title.ko}</Ko>
        </h3>
        <p className="text-white/85 text-xs md:text-sm leading-relaxed">
          <En>{s.en}</En>
          <Ko>{s.ko}</Ko>
        </p>

        {!isOpen && (
          <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <En>Tap to explore</En>
            <Ko>눌러서 살펴보기</Ko>
          </span>
        )}
      </div>

      {/* Animated detail panel */}
      <div ref={ref} style={style}>
        {isOpen && (
          <div className="bg-black/70 backdrop-blur-sm p-5 md:p-6 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <p className={`text-[10px] font-medium uppercase tracking-[0.2em] mb-2 ${cornerAccent}`}>
                  <En>What to do</En><Ko>추천 활동</Ko>
                </p>
                <ul className="space-y-1.5">
                  {detail.whatToDo.map((item, j) => (
                    <li key={j} className="text-white/80 text-xs leading-relaxed flex gap-2">
                      <span className={`shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full ${cornerAccent}`} />
                      <span><En>{item.en}</En><Ko>{item.ko}</Ko></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={`text-[10px] font-medium uppercase tracking-[0.2em] mb-2 ${cornerAccent}`}>
                  <En>What to pack</En><Ko>준비물</Ko>
                </p>
                <ul className="space-y-1.5">
                  {detail.whatToPack.map((item, j) => (
                    <li key={j} className="text-white/80 text-xs leading-relaxed flex gap-2">
                      <span className={`shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full ${cornerAccent}`} />
                      <span><En>{item.en}</En><Ko>{item.ko}</Ko></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={`text-[10px] font-medium uppercase tracking-[0.2em] mb-2 ${cornerAccent}`}>
                  <En>Heads up</En><Ko>주의사항</Ko>
                </p>
                <ul className="space-y-1.5">
                  {detail.warnings.map((item, j) => (
                    <li key={j} className="text-white/80 text-xs leading-relaxed flex gap-2">
                      <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span><En>{item.en}</En><Ko>{item.ko}</Ko></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
              <En>Tap again to collapse</En><Ko>다시 탭하여 접기</Ko>
            </p>
          </div>
        )}
      </div>
    </button>
  );
}

/* ─── Main accordion ─── */
export default function SeasonAccordion({
  seasons,
}: {
  seasons: readonly SeasonCard[];
}) {
  const [openKey, setOpenKey] = useState<SeasonKey | null>(null);

  const toggle = (key: SeasonKey) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  // Reorder: open season first, rest follow
  const sorted = useMemo(() => {
    if (!openKey) return seasons;
    const open = seasons.filter((s) => s.key === openKey);
    const rest = seasons.filter((s) => s.key !== openKey);
    return [...open, ...rest];
  }, [seasons, openKey]);

  const hasOpen = openKey !== null;

  return (
    <div className="mb-12">
      {!hasOpen && (
        /* ========== Grid view (no season open) ========== */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {sorted.map((s) => (
            <SeasonCard
              key={s.key}
              s={s}
              isOpen={false}
              onToggle={() => toggle(s.key)}
            />
          ))}
        </div>
      )}

      {hasOpen && (
        /* ========== One season open: expanded at top, rest in grid below ========== */
        <div className="space-y-5">
          {/* Expanded season — full width at the top */}
          <SeasonCard
            s={sorted[0]}
            isOpen={true}
            onToggle={() => toggle(sorted[0].key)}
          />

          {/* Remaining 3 seasons — compact 2-column grid below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {sorted.slice(1).map((s) => (
              <SeasonCard
                key={s.key}
                s={s}
                isOpen={false}
                onToggle={() => toggle(s.key)}
                compact
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

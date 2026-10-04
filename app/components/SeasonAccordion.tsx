"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { pickLocale } from "@/lib/locale";
import {En, Ja, Ko, Zh} from "./LangBlocks";

type SeasonKey = "summer" | "autumn" | "winter" | "spring";

type SeasonDetail = {
  whatToDo: { en: string; ko: string; ja?: string; zh?: string }[];
  whatToPack: { en: string; ko: string; ja?: string; zh?: string }[];
  warnings: { en: string; ko: string; ja?: string; zh?: string }[];
};

const seasonDetails: Record<SeasonKey, SeasonDetail> = {
  summer: {
    whatToDo: [
      { en: "Beach days — Bondi, Manly, Coogee, Bronte", ja: "ビーチの日々 — ボンダイ、マンリー、クージー、ブロンテ", zh: "海滩时光 — 邦迪、曼利、库吉、布龙特", ko: "비치 데이 — 본다이, 맨리, 쿠지, 브론테" },
      { en: "Coastal walks (Bondi to Coogee, Spit to Manly)", ja: "海岸の散歩道(ボンダイ〜クージー、スピット〜マンリー)", zh: "海岸步道（邦迪到库吉、斯皮特到曼利）", ko: "해안 산책 (본다이→쿠지, 스핏→맨리)" },
      { en: "Christmas at the beach — BBQ, pavlova, sun", ja: "ビーチでのクリスマス — バーベキュー、パブロバ、太陽", zh: "海滩上的圣诞节 — 烧烤、帕芙洛娃、阳光", ko: "해변에서 크리스마스 — 바비큐, 파블로바, 햇빛" },
      { en: "New Year's Eve fireworks on the harbour", ja: "港での大晦日の花火", zh: "海港上的跨年烟花", ko: "시드니 하버에서 새해 전야 불꽃놀이" },
      { en: "Outdoor dining, cinema, and live music", ja: "屋外ダイニング、映画、ライブ音楽", zh: "户外用餐、电影院和现场音乐", ko: "야외 식사, 영화관, 라이브 음악" },
    ],
    whatToPack: [
      { en: "SPF 50+ sunscreen (reapply every 2 hours)", ja: "SPF 50+の日焼け止め(2時間ごとに塗り直す)", zh: "SPF 50+ 防晒霜（每 2 小时补涂一次）", ko: "SPF 50+ 선크림 (2시간마다 덧바르기)" },
      { en: "Wide-brim hat and sunglasses", ja: "つばの広い帽子とサングラス", zh: "宽檐帽和太阳镜", ko: "챙 넓은 모자와 선글라스" },
      { en: "Reusable water bottle — stay hydrated", ja: "再利用可能な水筒 — 水分補給を", zh: "可重复使用的水瓶 — 保持水分", ko: "텀블러 — 수분 섭취 필수" },
      { en: "Swimwear and rashie (sun-protection shirt)", ja: "水着とラッシュガード(紫外線対策シャツ)", zh: "泳衣和防晒衣（防紫外线上衣）", ko: "수영복과 래쉬가드" },
      { en: "Light, breathable clothing", ja: "軽くて通気性の良い服", zh: "轻便透气的衣物", ko: "가벼운 통기성 좋은 옷" },
    ],
    warnings: [
      { en: "Extreme UV — even on cloudy days. Check sunsmart.com.au", ja: "極めて強い紫外線 — 曇りの日でも。sunsmart.com.auを確認", zh: "紫外线极强 — 阴天也一样。请查看 sunsmart.com.au", ko: "극심한 자외선 — 흐린 날에도 주의. sunsmart.com.au 확인" },
      { en: "Summer thunderstorms — spectacular but pass quickly", ja: "夏の雷雨 — 壮観だがすぐに過ぎる", zh: "夏季雷暴 — 壮观但很快过去", ko: "여름 뇌우 — 장관이지만 빠르게 지나감" },
      { en: "Bushfire season (Dec–Feb) — check RFS website before regional travel", ja: "山火事シーズン(12月〜2月) — 地方へ旅行する前にRFSのウェブサイトを確認", zh: "丛林大火季（12 月–2 月）— 前往偏远地区前请查看 RFS 网站", ko: "산불 시즌 (12–2월) — 지역 여행 전 RFS 웹사이트 확인" },
      { en: "Stay hydrated — carry water, avoid peak sun (11am–3pm)", ja: "水分補給を — 水を持参し、日差しの強い時間(午前11時〜午後3時)を避ける", zh: "保持水分 — 随身带水，避开日照最强时段（上午 11 点–下午 3 点）", ko: "수분 섭취 — 물 지참, 최고 햇빛 시간(11시–3시) 피하기" },
    ],
  },
  autumn: {
    whatToDo: [
      { en: "Blue Mountains for autumn leaves and cool hiking", ja: "紅葉と涼しいハイキングならブルー・マウンテンズ", zh: "蓝山的秋叶与清凉徒步", ko: "블루마운틴 단풍 구경과 시원한 하이킹" },
      { en: "Hunter Valley wine tours and harvest festivals", ja: "ハンター・バレーのワイナリーツアーと収穫祭", zh: "猎人谷的葡萄酒之旅和丰收节", ko: "헌터 밸리 와인 투어와 수확 축제" },
      { en: "Royal Easter Show (March/April) at Sydney Olympic Park", ja: "シドニー・オリンピック・パークでのロイヤル・イースター・ショー(3月/4月)", zh: "悉尼奥林匹克公园的皇家复活节展（3 月/4 月）", ko: "로열 이스터 쇼 (3월/4월) 시드니 올림픽 파크" },
      { en: "Walking and cycling — prime weather for outdoor activity", ja: "ウォーキングとサイクリング — 屋外活動に最適な天気", zh: "步行和骑行 — 户外活动的绝佳天气", ko: "산책과 자전거 — 야외 활동 최적의 날씨" },
      { en: "Outdoor cinemas and markets (Marrickville, Carriageworks)", ja: "屋外シネマとマーケット（マリックビル、キャリッジワークス）", zh: "露天电影院和市场（马利克维尔、卡里奇沃克斯）", ko: "야외 영화관과 마켓 (매릭빌, 캐리지웍스)" },
    ],
    whatToPack: [
      { en: "Light jacket or cardigan for cool evenings", ja: "涼しい夜のための軽いジャケットまたはカーディガン", zh: "清凉夜晚用的薄外套或开衫", ko: "선선한 저녁을 위한 가벼운 재킷 또는 가디건" },
      { en: "Layers — mornings can be cool, afternoons warm", ja: "重ね着を — 朝は涼しく、午後は暖かくなります", zh: "多层穿搭——早晨可能较凉，午后温暖", ko: "레이어드 — 아침은 선선, 오후는 따뜻함" },
      { en: "Comfortable walking shoes", ja: "歩きやすい靴", zh: "舒适的步行鞋", ko: "편안한 워킹화" },
      { en: "Umbrella — autumn can bring showers", ja: "傘 — 秋はにわか雨が降ることがあります", zh: "雨伞——秋季可能多阵雨", ko: "우산 — 가을에는 소나기가 올 수 있음" },
    ],
    warnings: [
      { en: "Daylight saving ends first Sunday in April — clocks go back 1 hour", ja: "サマータイムは4月の第1日曜日に終了 — 時計を1時間戻します", zh: "夏令时于4月第一个周日结束——时钟回拨1小时", ko: "4월 첫째 일요일 서머타임 종료 — 시계를 1시간 뒤로" },
      { en: "Early morning frost in regional areas (Blue Mountains, Southern Highlands)", ja: "地方部（ブルー・マウンテンズ、サザン・ハイランズ）では早朝に霜", zh: "周边地区（蓝山、南部高地）清晨有霜", ko: "지역 지역(블루마운틴, 서던하일랜즈)의 이른 아침 서리" },
      { en: "Evenings get dark earlier — plan outdoor activities accordingly", ja: "夕方は暗くなるのが早まります — 屋外活動の計画はそれに合わせて", zh: "傍晚天黑得更早——请相应安排户外活动", ko: "저녁이 일찍 어두워짐 — 야외 활동 계획 시 참고" },
    ],
  },
  winter: {
    whatToDo: [
      { en: "Whale watching — humpback migration (June–November)", ja: "ホエールウォッチング — ザトウクジラの回遊（6月–11月）", zh: "观鲸——座头鲸迁徙（6月–11月）", ko: "고래 관찰 — 혹등고래 이동 (6월–11월)" },
      { en: "Skiing and snowboarding in the Snowy Mountains (Thredbo, Perisher)", ja: "スノーウィー・マウンテンズでのスキーとスノーボード（スレッドボ、ペリッシャー）", zh: "在雪山滑雪和单板滑雪（斯雷德博、佩里舍）", ko: "스노위 마운틴에서 스키와 스노보드 (스레드보, 페리셔)" },
      { en: "Vivid Sydney (May–June) — light installations across the city", ja: "ビビッド・シドニー（5月–6月） — 街中に広がる光のインスタレーション", zh: "缤纷悉尼灯光音乐节（5月–6月）——遍布全城的光影装置", ko: "비비드 시드니 (5월–6월) — 도시 전역의 빛 설치물" },
      { en: "Cozy cafes, indoor markets (The Rocks, Paddington)", ja: "居心地のよいカフェ、屋内マーケット（ザ・ロックス、パディントン）", zh: "温馨的咖啡馆、室内市场（岩石区、帕丁顿）", ko: "아늑한 카페, 실내 마켓 (더 록스, 패딩턴)" },
      { en: "Winter festivals and food events", ja: "冬のフェスティバルとフードイベント", zh: "冬季节庆和美食活动", ko: "겨울 축제와 푸드 이벤트" },
    ],
    whatToPack: [
      { en: "Warm jacket or puffer coat", ja: "暖かいジャケットまたはダウンコート", zh: "保暖外套或羽绒服", ko: "따뜻한 재킷 또는 패딩 코트" },
      { en: "Beanie, scarf, and gloves for evenings", ja: "夜用のビーニー、マフラー、手袋", zh: "夜晚用的毛线帽、围巾和手套", ko: "저녁용 비니, 목도리, 장갑" },
      { en: "Thermal layers for mountain trips", ja: "山への旅行用の保温インナー", zh: "山区旅行用的保暖内层衣物", ko: "산 여행용 보온 속옷" },
      { en: "Heated home essentials — slippers, warm pyjamas", ja: "暖房の効いた家の必需品 — スリッパ、暖かいパジャマ", zh: "居家保暖必备——拖鞋、保暖睡衣", ko: "난방용 홈템 — 슬리퍼, 따뜻한 파자마" },
    ],
    warnings: [
      { en: "Frost on car windows in the morning — allow extra time to defrost", ja: "朝は車の窓に霜が — 霜取りの時間を多めに", zh: "早晨车窗结霜——请预留除霜时间", ko: "아침 차창에 서리 — 해동에 추가 시간 확보" },
      { en: "Heating costs can be high — check if your rental has insulation", ja: "暖房費が高くなることがあります — 賃貸に断熱材があるか確認しましょう", zh: "取暖费用可能较高——检查租住房是否有保温层", ko: "난방비가 많이 나올 수 있음 — 임대주택 단열 상태 확인" },
      { en: "Regional areas (Southern Highlands, Blue Mountains) can drop near 0°C", ja: "地方部（サザン・ハイランズ、ブルー・マウンテンズ）では0°C近くまで下がることがあります", zh: "周边地区（南部高地、蓝山）气温可能降至接近0°C", ko: "지역 지역은 거의 0°C까지 떨어질 수 있음" },
      { en: "Shorter daylight hours (sunset ~5pm in June)", ja: "日中の明るい時間が短くなります（6月の日没は〜午後5時）", zh: "日照时间缩短（6月日落约下午5点）", ko: "일조 시간 단축 (6월 일몰 ~오후 5시)" },
    ],
  },
  spring: {
    whatToDo: [
      { en: "Wildflower season — botanic gardens, Mt Tomah, regional NSW", ja: "野生花のシーズン — 植物園、マウント・トマ、NSW地方部", zh: "野花季——植物园、托马山、新南威尔士州地区", ko: "야생화 시즌 — 식물원, 마운트 토마, NSW 지역" },
      { en: "Outdoor markets and street fairs (Orange Blossom Festival, local markets)", ja: "屋外マーケットとストリートフェア（オレンジ・ブロッサム・フェスティバル、地元マーケット）", zh: "露天市场和街头集市（橙花节、本地市场）", ko: "야외 마켓과 거리 축제" },
      { en: "Beach starts getting warm — early swimming season", ja: "ビーチが暖かくなり始めます — 泳ぎ始めのシーズン", zh: "海滩开始变暖——早季游泳时节", ko: "해변이 따뜻해지기 시작 — 초기 수영 시즌" },
      { en: "Footy finals season — AFL and NRL Grand Finals (September)", ja: "フッティー・ファイナルズ・シーズン — AFLとNRLのグランドファイナル（9月）", zh: "橄榄球总决赛赛季——AFL和NRL总决赛（9月）", ko: "풋볼 파이널 시즌 — AFL, NRL 그랜드 파이널 (9월)" },
      { en: "Spring racing carnival — Melbourne Cup first Tuesday in November", ja: "春の競馬カーニバル — メルボルンカップは11月の第1火曜日", zh: "春季赛马嘉年华——墨尔本杯在11月第一个周二", ko: "봄 경마 카니발 — 11월 첫째 화요일 멜버른 컵" },
    ],
    whatToPack: [
      { en: "Layers — cool mornings, warm afternoons", ja: "重ね着を — 涼しい朝、暖かい午後", zh: "多层穿搭——早晨凉爽，午后温暖", ko: "레이어드 — 선선한 아침, 따뜻한 오후" },
      { en: "Sunglasses and sunscreen (UV starts rising)", ja: "サングラスと日焼け止め（紫外線が強まり始めます）", zh: "太阳镜和防晒霜（紫外线开始增强）", ko: "선글라스와 선크림 (자외선 상승 시작)" },
      { en: "Light jacket for windy days", ja: "風の強い日は軽いジャケットを", zh: "有风的日子穿薄外套", ko: "바람 부는 날 대비 가벼운 재킷" },
      { en: "Hayfever medication if you're sensitive to pollen", ja: "花粉に敏感な方は花粉症の薬を", zh: "对花粉敏感者请备好花粉症药物", ko: "꽃가루 알레르기 약 (해당자만)" },
    ],
    warnings: [
      { en: "September winds — some of the windiest days of the year in Sydney", ja: "9月の風 — シドニーで年間でも特に風が強い日々", zh: "9月的风——悉尼一年中风最大的日子之一", ko: "9월 바람 — 시드니에서 일 년 중 가장 바람이 많이 부는 날" },
      { en: "Pollen season — hayfever affects many people from September", ja: "花粉シーズン — 9月から多くの人が花粉症に", zh: "花粉季——许多人从9月起受到花粉症困扰", ko: "꽃가루 시즌 — 9월부터 알레르기 비염 조심" },
      { en: "UV index climbs quickly — don't be fooled by cooler mornings", ja: "紫外線指数は急上昇 — 涼しい朝に油断しないで", zh: "紫外线指数上升很快——别被凉爽的早晨骗了", ko: "자외선 지수 급상승 — 선선한 아침에 속지 마세요" },
    ],
  },
};

type SeasonCard = {
  key: SeasonKey;
  title: { en: string; ko: string; ja?: string; zh?: string };
  months: string;
  img: string;
  accent: string;
  en: string;
  ko: string; ja?: string; zh?: string
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
          <En translated>{s.title.en}</En>
          <Ja>{pickLocale("ja", s.title)}</Ja>
          <Zh>{pickLocale("zh", s.title)}</Zh>
          <Ko>{s.title.ko}</Ko>
        </h3>
        <p className="text-white/85 text-xs md:text-sm leading-relaxed">
          <En translated>{s.en}</En>
          <Ja>{pickLocale("ja", s)}</Ja>
          <Zh>{pickLocale("zh", s)}</Zh>
          <Ko>{s.ko}</Ko>
        </p>

        {!isOpen && (
          <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <En translated>Tap to explore</En>
            <Ja>タップして見る</Ja>
            <Zh>点击探索</Zh>
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
                  <En translated>What to do</En>
                  <Ja>おすすめの過ごし方</Ja>
                  <Zh>可以做些什么</Zh><Ko>추천 활동</Ko>
                </p>
                <ul className="space-y-1.5">
                  {detail.whatToDo.map((item, j) => (
                    <li key={j} className="text-white/80 text-xs leading-relaxed flex gap-2">
                      <span className={`shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full ${cornerAccent}`} />
                      <span><En translated>{item.en}</En><Ja>{pickLocale("ja", item)}</Ja><Zh>{pickLocale("zh", item)}</Zh><Ko>{item.ko}</Ko></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={`text-[10px] font-medium uppercase tracking-[0.2em] mb-2 ${cornerAccent}`}>
                  <En translated>What to pack</En>
                  <Ja>持ち物</Ja>
                  <Zh>该带什么</Zh><Ko>준비물</Ko>
                </p>
                <ul className="space-y-1.5">
                  {detail.whatToPack.map((item, j) => (
                    <li key={j} className="text-white/80 text-xs leading-relaxed flex gap-2">
                      <span className={`shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full ${cornerAccent}`} />
                      <span><En translated>{item.en}</En><Ja>{pickLocale("ja", item)}</Ja><Zh>{pickLocale("zh", item)}</Zh><Ko>{item.ko}</Ko></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={`text-[10px] font-medium uppercase tracking-[0.2em] mb-2 ${cornerAccent}`}>
                  <En translated>Heads up</En>
                  <Ja>ご注意</Ja>
                  <Zh>提个醒</Zh><Ko>주의사항</Ko>
                </p>
                <ul className="space-y-1.5">
                  {detail.warnings.map((item, j) => (
                    <li key={j} className="text-white/80 text-xs leading-relaxed flex gap-2">
                      <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span><En translated>{item.en}</En><Ja>{pickLocale("ja", item)}</Ja><Zh>{pickLocale("zh", item)}</Zh><Ko>{item.ko}</Ko></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
              <En translated>Tap again to collapse</En>
              <Ja>もう一度タップして閉じる</Ja>
              <Zh>再次点击收起</Zh><Ko>다시 탭하여 접기</Ko>
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

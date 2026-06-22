import Link from "next/link";
import { En, Ko } from "../LangBlocks";

// /journey/before-you-come — "Are you ready?" pre-arrival checklist.
// The persona content component for the first stage of The Journey.
// Replaces the old /journey/visiting page (which was a half-tourist,
// half-newcomer mismatch). This page is purely pre-arrival planning:
// the boring admin you do in the 4-6 weeks before you fly.
//
// Structure: 5 vertical checklist sections, each ~5-7 items. Each item
// is a single action phrased as a verb + concrete object. No fluff, no
// statistics — the user reviews this as a runnable to-do list.

type Checklist = {
  id: string;
  titleEn: string;
  titleKo: string;
  subtitleEn: string;
  subtitleKo: string;
  items: { en: string; ko: string }[];
  // Optional "read more" link below the items. Used for sections where
  // a related site page goes deeper than a checklist can cover.
  link?: { href: string; labelEn: string; labelKo: string };
};

const checklists: Checklist[] = [
  {
    id: "documents",
    titleEn: "Documents & visa",
    titleKo: "비자와 서류",
    subtitleEn:
      "Get these right first — everything else depends on having a valid visa grant.",
    subtitleKo:
      "먼저 이것부터 — 유효한 비자 승인을 받으면 나머지가 모두 가능합니다.",
    items: [
      { en: "Passport valid for 6+ months past your arrival date", ko: "도착일 기준 6개월 이상 유효한 여권" },
      { en: "Visa granted + check VEVO (visa confirmation portal)", ko: "비자 승인 + VEVO(비자 확인 포털)에서 조회" },
      { en: "Print visa grant and carry a digital copy on your phone", ko: "비자 승인 출력본 + 휴대전화에 디지털 사본 저장" },
      { en: "Health examination completed, if your visa type requires it", ko: "비자 유형상 필요 시 건강검진 완료" },
      { en: "Driver's licence + International Driving Permit, if you'll drive", ko: "운전 예정 시 운전면허증 + 국제운전면허증" },
      { en: "Immunisation records (you'll need them for GP registration later)", ko: "예방접종 기록 (나중에 GP 등록 시 필요)" },
    ],
  },
  {
    id: "money",
    titleEn: "Money & banking",
    titleKo: "돈과 은행",
    subtitleEn:
      "Get an Australian bank account open before you fly — it takes 20 minutes and saves weeks of friction.",
    subtitleKo:
      "출발 전 호주 은행 계좌 개설 — 20분이면 끝나고, 며칠간의 번거로움을 줄여줍니다.",
    items: [
      { en: "Open an Australian bank account online (CommBank, ANZ, Westpac, NAB all accept passport)", ko: "호주 은행 계좌 온라인 개설 (CommBank, ANZ, Westpac, NAB 모두 여권으로 가능)" },
      { en: "Set up Wise or Revolut for cheaper AUD transfers", ko: "AUD 송금 수수료 절약을 위한 Wise 또는 Revolut 가입" },
      { en: "Bring $500–$1,000 AUD cash for week one", ko: "첫 주를 위한 $500–$1,000 AUD 현금 준비" },
      { en: "Tell your Korean bank your travel dates to avoid fraud blocks", ko: "카드 사용 정지를 피하기 위해 한국 은행에 여행 일정 사전 통보" },
    ],
  },
  {
    id: "connectivity",
    titleEn: "Connectivity & apps",
    titleKo: "통신과 앱",
    subtitleEn:
      "Have a working phone number and the right apps the moment you land.",
    subtitleKo:
      "도착 즉시 쓸 수 있는 전화번호와 앱을 미리 준비하세요.",
    items: [
      { en: "Buy an eSIM (Airalo, Holafly, Telstra Travel Pass) or plan to buy a SIM at the airport", ko: "eSIM (Airalo, Holafly, Telstra Travel Pass) 구매 또는 공항에서 SIM 구매 계획" },
      { en: "Install: TripView, Uber, Google Maps, Google Translate, Wise, your bank app", ko: "설치: TripView, Uber, Google Maps, Google Translate, Wise, 은행 앱" },
      { en: "Enable Korean carrier roaming as a 24h backup", ko: "24시간 백업용으로 한국 통신사 로밍 활성화" },
      { en: "Download offline maps of Sydney", ko: "시드니 오프라인 지도 다운로드" },
    ],
    link: {
      href: "/transport",
      labelEn: "See how to get around Sydney once you land →",
      labelKo: "시드니에서 이동하는 법 보기 →",
    },
  },
  {
    id: "pack",
    titleEn: "What to pack",
    titleKo: "준비물",
    subtitleEn:
      "Small list — most things you can buy here once you've landed.",
    subtitleKo:
      "짧은 리스트 — 대부분은 도착 후 현지에서 살 수 있습니다.",
    items: [
      { en: "Sunscreen — have some on hand for the flight and first day", ko: "자외선 차단제 — 비행기와 첫날을 위해 미리 준비" },
      { en: "Universal power adapter (Australia is Type I)", ko: "유니버설 전원 어댑터 (호주는 Type I)" },
      { en: "Walking shoes — you'll walk more than you think", ko: "편한 운동화 — 생각보다 많이 걷게 됩니다" },
      { en: "Light layers (Sydney weather flips in an hour)", ko: "얇은 겹옷 (시드니 날씨는 한 시간 만에 바뀝니다)" },
      { en: "Prescription medication + a copy of the prescription in English", ko: "처방약 + 영어로 된 처방전 사본" },
    ],
  },
  {
    id: "booked",
    titleEn: "Booked & confirmed",
    titleKo: "예약과 확인",
    subtitleEn:
      "First-week logistics. Don't leave these to the day you land.",
    subtitleKo:
      "첫 주를 위한 준비. 도착 당일에 하지 마세요.",
    items: [
      { en: "Accommodation for the first 1–2 weeks", ko: "첫 1-2주 숙소 예약" },
      { en: "Transport from Sydney Airport — most people take the train, but the airport station has a $14+ access fee on top of fare, so plan accordingly", ko: "시드니 공항 교통 — 대부분 기차를 타지만 공항역 이용료가 요금 외에 $14+ 추가되니 미리 계획하세요" },
      { en: "Travel insurance (flight changes, medical, lost luggage)", ko: "여행자보험 (항공편 변경, 의료, 분실물)" },
      { en: "Health insurance sorted (OSHC for students, reciprocal Medicare for some, private for everyone else)", ko: "건강보험 정리 (학생은 OSHC, 일부는 상호주의 Medicare, 그 외는 민간 보험)" },
      { en: "Job secured, OR a 3-month financial runway saved", ko: "구직 완료, 또는 3개월치 생활비 확보" },
      { en: "Family has your flight number and arrival date", ko: "가족에게 항공편 번호와 도착 일정 공유" },
    ],
  },
];

export default function BeforeContent() {
  return (
    <>
      {/* Intro — warm welcome framing. The checklist below is the
          practical answer, but the page opens by acknowledging that
          making the move is itself the bold part. */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sky-600 mb-3">
          <En>Pre-arrival</En>
          <Ko>출발 전</Ko>
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4 leading-tight">
          <En>You&apos;re moving to a new country. That&apos;s a big deal.</En>
          <Ko>새로운 나라로 떠나시는 거네요. 대단한 일이에요.</Ko>
        </h3>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>
            Most of the expensive mistakes happen in the 4–6 weeks before
            you fly — the boring admin, the things nobody tells you about.
            Run this list and you&apos;ll touch down with a clear head,
            ready for the exciting part.
          </En>
          <Ko>
            가장 큰 실수는 비행 전 4-6주에 일어납니다 — 지루한 행정,
            아무도 알려주지 않는 것들. 이 리스트를 따라가면 도착할 때
            머리가 맑고, 신나는 부분을 즐길 준비가 되어 있습니다.
          </Ko>
        </p>
      </section>

      {/* Checklists */}
      {checklists.map((section, sIdx) => (
        <section key={section.id} className="mb-10">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-mono text-xs text-stone-400 dark:text-stone-500">
              0{sIdx + 1}
            </span>
            <h4 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight">
              <En>{section.titleEn}</En>
              <Ko>{section.titleKo}</Ko>
            </h4>
          </div>
          <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-5 max-w-2xl">
            <En>{section.subtitleEn}</En>
            <Ko>{section.subtitleKo}</Ko>
          </p>

          <ul className="space-y-2.5 max-w-3xl">
            {section.items.map((item, i) => (
              <li
                key={item.en}
                className={`reveal reveal-delay-${(i % 5) + 1} flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sky-500/30 transition-colors`}
              >
                <span className="text-sm md:text-base text-stone-700 dark:text-stone-300 leading-snug pl-1">
                  <En>{item.en}</En>
                  <Ko>{item.ko}</Ko>
                </span>
              </li>
            ))}
          </ul>
          {section.link && (
            <Link
              href={section.link.href}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-700 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 transition-colors"
            >
              <En>{section.link.labelEn}</En>
              <Ko>{section.link.labelKo}</Ko>
            </Link>
          )}
        </section>
      ))}

      {/* Next step — flow into /journey/arrived once they've landed */}
      <section className="mb-10 bg-gradient-to-br from-sky-500 to-sky-600 dark:from-sky-600 dark:to-sky-700 rounded-3xl p-7 md:p-9 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="relative">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/80 mb-3">
            <En>Next step</En>
            <Ko>다음 단계</Ko>
          </p>
          <h4 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
            <En>Once you&apos;ve landed.</En>
            <Ko>도착 후에는.</Ko>
          </h4>
          <p className="text-white/85 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
            <En>
              The first-week checklist (SIM, bank, TFN, Opal, GP) lives on the
              next page. It assumes you&apos;ve already done the prep above.
            </En>
            <Ko>
              첫 주 체크리스트(SIM, 은행, TFN, 오팔, GP)는 다음 페이지에
              있습니다. 위의 준비가 끝났다는 전제로 작성되었습니다.
            </Ko>
          </p>
          <Link
            href="/journey/arrived"
            className="inline-flex items-center gap-2 bg-white text-sky-600 hover:bg-stone-50 px-6 py-3 rounded-full text-sm font-semibold transition-colors"
          >
            <En>I&apos;ve landed — what now?</En>
            <Ko>도착했어요 — 이제 어떻게?</Ko>
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

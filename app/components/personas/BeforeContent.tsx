import Link from "next/link";
import { pickLocale } from "@/lib/locale";
import {En, Ja, Ko, Zh} from "../LangBlocks";

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
  titleJa?: string;
  titleZh?: string;
  titleKo: string;
  subtitleEn: string;
  subtitleJa?: string;
  subtitleZh?: string;
  subtitleKo: string;
  items: { en: string; ko: string; ja?: string; zh?: string }[];
  // Optional "read more" link below the items. Used for sections where
  // a related site page goes deeper than a checklist can cover.
  link?: { href: string; labelEn: string; labelJa?: string; labelZh?: string; labelKo: string };
};

const checklists: Checklist[] = [
  {
    id: "documents",
    titleEn: "Documents & visa",
    titleJa: "\u66f8\u985e\u3068\u30d3\u30b6",
    titleZh: "\u8bc1\u4ef6\u4e0e\u7b7e\u8bc1",
    titleKo: "비자와 서류",
    subtitleEn:
      "Get these right first — everything else depends on having a valid visa grant.",
    subtitleJa: "\u307e\u305a\u3053\u308c\u3092\u6b63\u3057\u304f \u2014 \u307b\u304b\u306e\u3059\u3079\u3066\u306f\u3001\u6709\u52b9\u306a\u30d3\u30b6\u306e\u8a31\u53ef\u304c\u3042\u3063\u3066\u3053\u305d\u3067\u3059\u3002",
    subtitleZh: "\u5148\u628a\u8fd9\u4e9b\u529e\u59a5\u2014\u2014\u5176\u4ed6\u4e00\u5207\u90fd\u53d6\u51b3\u4e8e\u4f60\u7684\u7b7e\u8bc1\u662f\u5426\u6709\u6548\u83b7\u6279\u3002",
    subtitleKo:
      "먼저 이것부터 — 유효한 비자 승인을 받으면 나머지가 모두 가능합니다.",
    items: [
      { en: "Passport valid for 6+ months past your arrival date", ja: "入国日から6か月以上有効なパスポート", zh: "护照在抵达日期后仍有6个月以上有效期", ko: "도착일 기준 6개월 이상 유효한 여권" },
      { en: "Visa granted + check VEVO (visa confirmation portal)", ja: "ビザ取得 + VEVO（ビザ確認ポータル）で確認", zh: "签证获批 + 在VEVO（签证确认门户）核实", ko: "비자 승인 + VEVO(비자 확인 포털)에서 조회" },
      { en: "Print visa grant and carry a digital copy on your phone", ja: "ビザ許可通知を印刷し、スマホにデジタルコピーを保存", zh: "打印签证批准信，并在手机上保存电子副本", ko: "비자 승인 출력본 + 휴대전화에 디지털 사본 저장" },
      { en: "Health examination completed, if your visa type requires it", ja: "ビザの種類で必要な場合は健康診断を完了", zh: "若签证类型要求，请完成体检", ko: "비자 유형상 필요 시 건강검진 완료" },
      { en: "Driver's licence + International Driving Permit, if you'll drive", ja: "運転する場合は運転免許証 + 国際運転免許証", zh: "如要开车，需驾照 + 国际驾照", ko: "운전 예정 시 운전면허증 + 국제운전면허증" },
      { en: "Immunisation records (you'll need them for GP registration later)", ja: "予防接種の記録（後でGP登録に必要になります）", zh: "疫苗接种记录（日后注册GP时需要）", ko: "예방접종 기록 (나중에 GP 등록 시 필요)" },
    ],
  },
  {
    id: "money",
    titleEn: "Money & banking",
    titleJa: "\u304a\u91d1\u3068\u9280\u884c",
    titleZh: "\u91d1\u94b1\u4e0e\u94f6\u884c",
    titleKo: "돈과 은행",
    subtitleEn:
      "Get an Australian bank account open before you fly — it takes 20 minutes and saves weeks of friction.",
    subtitleJa: "\u51fa\u767a\u524d\u306b\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306e\u9280\u884c\u53e3\u5ea7\u3092\u958b\u8a2d\u3057\u307e\u3057\u3087\u3046 \u2014 20\u5206\u3067\u6e08\u307f\u3001\u4f55\u9031\u9593\u3082\u306e\u624b\u9593\u3092\u7701\u3051\u307e\u3059\u3002",
    subtitleZh: "\u51fa\u53d1\u524d\u5c31\u628a\u6fb3\u5927\u5229\u4e9a\u94f6\u884c\u8d26\u6237\u5f00\u597d\u2014\u2014\u53ea\u8981 20 \u5206\u949f\uff0c\u80fd\u7701\u4e0b\u597d\u51e0\u5468\u7684\u9ebb\u70e6\u3002",
    subtitleKo:
      "출발 전 호주 은행 계좌 개설 — 20분이면 끝나고, 며칠간의 번거로움을 줄여줍니다.",
    items: [
      { en: "Open an Australian bank account online (CommBank, ANZ, Westpac, NAB all accept passport)", ja: "オーストラリアの銀行口座をオンラインで開設（CommBank、ANZ、Westpac、NABはいずれもパスポートで可能）", zh: "在线开设澳大利亚银行账户（CommBank、ANZ、Westpac、NAB均接受护照）", ko: "호주 은행 계좌 온라인 개설 (CommBank, ANZ, Westpac, NAB 모두 여권으로 가능)" },
      { en: "Set up Wise or Revolut for cheaper AUD transfers", ja: "手数料の安いAUD送金のためにWiseまたはRevolutを設定", zh: "开通Wise或Revolut以便更便宜地转账澳元", ko: "AUD 송금 수수료 절약을 위한 Wise 또는 Revolut 가입" },
      { en: "Bring $500–$1,000 AUD cash for week one", ja: "最初の1週間分として$500–$1,000 AUDの現金を持参", zh: "携带$500–$1,000 AUD现金供第一周使用", ko: "첫 주를 위한 $500–$1,000 AUD 현금 준비" },
      { en: "Tell your Korean bank your travel dates to avoid fraud blocks", ja: "不正利用による停止を避けるため、韓国の銀行に渡航日程を伝える", zh: "告知韩国银行你的旅行日期，以免被风控冻结", ko: "카드 사용 정지를 피하기 위해 한국 은행에 여행 일정 사전 통보" },
    ],
  },
  {
    id: "connectivity",
    titleEn: "Connectivity & apps",
    titleJa: "\u901a\u4fe1\u3068\u30a2\u30d7\u30ea",
    titleZh: "\u901a\u4fe1\u4e0e App",
    titleKo: "통신과 앱",
    subtitleEn:
      "Have a working phone number and the right apps the moment you land.",
    subtitleJa: "\u5230\u7740\u3057\u305f\u77ac\u9593\u304b\u3089\u4f7f\u3048\u308b\u96fb\u8a71\u756a\u53f7\u3068\u5fc5\u8981\u306a\u30a2\u30d7\u30ea\u3092\u7528\u610f\u3057\u307e\u3057\u3087\u3046\u3002",
    subtitleZh: "\u843d\u5730\u90a3\u4e00\u523b\u5c31\u6709\u80fd\u7528\u7684\u624b\u673a\u53f7\u548c\u8be5\u88c5\u7684 App\u3002",
    subtitleKo:
      "도착 즉시 쓸 수 있는 전화번호와 앱을 미리 준비하세요.",
    items: [
      { en: "Buy an eSIM (Airalo, Holafly, Telstra Travel Pass) or plan to buy a SIM at the airport", ja: "eSIM（Airalo、Holafly、Telstra Travel Pass）を購入するか、空港でSIMを購入する予定に", zh: "购买eSIM（Airalo、Holafly、Telstra Travel Pass），或计划在机场购买SIM卡", ko: "eSIM (Airalo, Holafly, Telstra Travel Pass) 구매 또는 공항에서 SIM 구매 계획" },
      { en: "Install: TripView, Uber, Google Maps, Google Translate, Wise, your bank app", ja: "インストール: TripView、Uber、Google Maps、Google Translate、Wise、銀行アプリ", zh: "安装：TripView、Uber、Google Maps、Google Translate、Wise、银行App", ko: "설치: TripView, Uber, Google Maps, Google Translate, Wise, 은행 앱" },
      { en: "Enable Korean carrier roaming as a 24h backup", ja: "24時間のバックアップとして韓国キャリアのローミングを有効にする", zh: "启用韩国运营商漫游作为24小时备用方案", ko: "24시간 백업용으로 한국 통신사 로밍 활성화" },
      { en: "Download offline maps of Sydney", ja: "シドニーのオフライン地図をダウンロード", zh: "下载悉尼离线地图", ko: "시드니 오프라인 지도 다운로드" },
    ],
    link: {
      href: "/transport",
      labelEn: "See how to get around Sydney once you land →",
      labelJa: "\u5230\u7740\u3057\u305f\u3089\u3001\u30b7\u30c9\u30cb\u30fc\u3067\u306e\u79fb\u52d5\u65b9\u6cd5\u3092\u898b\u308b \u2192",
      labelZh: "\u770b\u770b\u843d\u5730\u6089\u5c3c\u540e\u600e\u4e48\u51fa\u884c \u2192",
      labelKo: "시드니에서 이동하는 법 보기 →",
    },
  },
  {
    id: "pack",
    titleEn: "What to pack",
    titleJa: "\u6301\u3061\u7269",
    titleZh: "\u884c\u674e\u51c6\u5907",
    titleKo: "준비물",
    subtitleEn:
      "Small list — most things you can buy here once you've landed.",
    subtitleJa: "\u77ed\u3044\u30ea\u30b9\u30c8 \u2014 \u307b\u3068\u3093\u3069\u306f\u5230\u7740\u5f8c\u306b\u3053\u3053\u3067\u8cb7\u3048\u307e\u3059\u3002",
    subtitleZh: "\u6e05\u5355\u5f88\u77ed\u2014\u2014\u5927\u591a\u6570\u4e1c\u897f\u843d\u5730\u540e\u90fd\u80fd\u5728\u8fd9\u91cc\u4e70\u5230\u3002",
    subtitleKo:
      "짧은 리스트 — 대부분은 도착 후 현지에서 살 수 있습니다.",
    items: [
      { en: "Sunscreen — have some on hand for the flight and first day", ja: "日焼け止め — フライト中と初日のために用意しておく", zh: "防晒霜——为航班和第一天随身备好", ko: "자외선 차단제 — 비행기와 첫날을 위해 미리 준비" },
      { en: "Universal power adapter (Australia is Type I)", ja: "万能電源アダプター（オーストラリアはタイプI）", zh: "万能电源转换插头（澳大利亚为I型）", ko: "유니버설 전원 어댑터 (호주는 Type I)" },
      { en: "Walking shoes — you'll walk more than you think", ja: "歩きやすい靴 — 思っているよりずっと歩きます", zh: "舒适的步行鞋——你会比想象中走得更多", ko: "편한 운동화 — 생각보다 많이 걷게 됩니다" },
      { en: "Light layers (Sydney weather flips in an hour)", ja: "薄手の重ね着（シドニーの天気は1時間で変わります）", zh: "轻薄分层衣物（悉尼天气一小时内就会变）", ko: "얇은 겹옷 (시드니 날씨는 한 시간 만에 바뀝니다)" },
      { en: "Prescription medication + a copy of the prescription in English", ja: "処方薬 + 英語の処方箋のコピー", zh: "处方药 + 英文处方副本", ko: "처방약 + 영어로 된 처방전 사본" },
    ],
  },
  {
    id: "booked",
    titleEn: "Booked & confirmed",
    titleJa: "\u4e88\u7d04\u3068\u78ba\u8a8d",
    titleZh: "\u5df2\u9884\u8ba2\u5e76\u786e\u8ba4",
    titleKo: "예약과 확인",
    subtitleEn:
      "First-week logistics. Don't leave these to the day you land.",
    subtitleJa: "\u6700\u521d\u306e1\u9031\u9593\u306e\u6bb5\u53d6\u308a\u3002\u5230\u7740\u5f53\u65e5\u307e\u3067\u6b8b\u3055\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002",
    subtitleZh: "\u7b2c\u4e00\u5468\u7684\u4e8b\u52a1\u3002\u522b\u62d6\u5230\u843d\u5730\u90a3\u5929\u624d\u5904\u7406\u3002",
    subtitleKo:
      "첫 주를 위한 준비. 도착 당일에 하지 마세요.",
    items: [
      { en: "Accommodation for the first 1–2 weeks", ja: "最初の1–2週間の宿泊先", zh: "前1–2周的住宿", ko: "첫 1-2주 숙소 예약" },
      { en: "Transport from Sydney Airport — most people take the train, but the airport station has a $14+ AUD access fee on top of fare, so plan accordingly", ja: "シドニー空港からの交通 — ほとんどの人は電車を使いますが、空港駅では運賃に加えて$14+ AUDのアクセス料金がかかるので、事前に計画しましょう", zh: "从悉尼机场出发的交通——大多数人乘火车，但机场站需在票价之外加收$14+ AUD的进站费，请提前规划", ko: "시드니 공항 교통 — 대부분 기차를 타지만 공항역 이용료가 요금 외에 $14+ AUD 추가되니 미리 계획하세요" },
      { en: "Travel insurance (flight changes, medical, lost luggage)", ja: "海外旅行保険（航空便の変更、医療、手荷物の紛失）", zh: "旅行保险（航班变更、医疗、行李丢失）", ko: "여행자보험 (항공편 변경, 의료, 분실물)" },
      { en: "Health insurance sorted (OSHC for students, reciprocal Medicare for some, private for everyone else)", ja: "健康保険を手配（学生はOSHC、一部は相互医療協定のMedicare、それ以外は民間保険）", zh: "医疗保险安排好（学生用OSHC，部分人可用互惠Medicare，其他所有人用私人保险）", ko: "건강보험 정리 (학생은 OSHC, 일부는 상호주의 Medicare, 그 외는 민간 보험)" },
      { en: "Job secured, OR a 3-month financial runway saved", ja: "仕事を確保する、または3か月分の生活資金を貯める", zh: "找到工作，或存下3个月的应急资金", ko: "구직 완료, 또는 3개월치 생활비 확보" },
      { en: "Family has your flight number and arrival date", ja: "家族に航空便番号と到着日を伝えておく", zh: "让家人知道你的航班号和到达日期", ko: "가족에게 항공편 번호와 도착 일정 공유" },
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
          <En translated>Pre-arrival</En>
          <Ja>出発前</Ja>
          <Zh>抵达前</Zh>
          <Ko>출발 전</Ko>
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4 leading-tight">
          <En translated>You&apos;re moving to a new country. That&apos;s a big deal.</En>
          <Ja>新しい国へ引っ越すんですね。大したことです。</Ja>
          <Zh>你要搬去一个新国家了。这可是件大事。</Zh>
          <Ko>새로운 나라로 떠나시는 거네요. 대단한 일이에요.</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En translated>
            Most of the expensive mistakes happen in the 4–6 weeks before
            you fly — the boring admin, the things nobody tells you about.
            Run this list and you&apos;ll touch down with a clear head,
            ready for the exciting part.
          </En>
          <Ja>高くつく失敗のほとんどは、飛び立つ前の4〜6週間に起こります — 退屈な事務手続き、
            誰も教えてくれないこと。このリストをこなせば、
            頭をすっきりさせて到着し、わくわくする部分を
            楽しむ準備ができます。</Ja>
          <Zh>很多代价高昂的错误都发生在你出发前的 4–6 周 — 那些枯燥的行政手续、
            那些没人会告诉你的事。把这份清单走一遍，
            你落地时就能头脑清醒，
            准备好迎接精彩的部分。</Zh>
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
            <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight">
              <Ja>{section.titleJa ?? section.titleEn}</Ja>
              <Zh>{section.titleZh ?? section.titleEn}</Zh>
              <Ko>{section.titleKo}</Ko>
            </h2>
          </div>
          <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-5 max-w-2xl">
            <Ja>{section.subtitleJa ?? section.subtitleEn}</Ja>
            <Zh>{section.subtitleZh ?? section.subtitleEn}</Zh>
            <Ko>{section.subtitleKo}</Ko>
          </p>

          <ul className="space-y-2.5 max-w-3xl">
            {section.items.map((item, i) => (
              <li
                key={item.en}
                className={`reveal reveal-delay-${(i % 5) + 1} flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sky-500/30 transition-colors`}
              >
                <span className="text-sm md:text-base text-stone-700 dark:text-stone-300 leading-snug pl-1">
                  <En translated>{item.en}</En>
                  <Ja>{pickLocale("ja", item)}</Ja>
                  <Zh>{pickLocale("zh", item)}</Zh>
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
              <Ja>{section.link.labelJa ?? section.link.labelEn}</Ja>
              <Zh>{section.link.labelZh ?? section.link.labelEn}</Zh>
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
            <En translated>Next step</En>
            <Ja>次のステップ</Ja>
            <Zh>下一步</Zh>
            <Ko>다음 단계</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
            <En translated>Once you&apos;ve landed.</En>
            <Ja>到着したら。</Ja>
            <Zh>落地之后。</Zh>
            <Ko>도착 후에는.</Ko>
          </h2>
          <p className="text-white/85 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
            <En translated>
              The first-week checklist (SIM, bank, TFN, Opal, GP) lives on the
              next page. It assumes you&apos;ve already done the prep above.
            </En>
            <Ja>1週目のチェックリスト（SIM、銀行、TFN、Opal、GP）は次の
              ページにあります。上の準備が済んでいる前提です。</Ja>
            <Zh>第一周清单（SIM 卡、银行、TFN、Opal 卡、GP）在
              下一页。它假定你已经完成了上面的准备工作。</Zh>
            <Ko>
              첫 주 체크리스트(SIM, 은행, TFN, 오팔, GP)는 다음 페이지에
              있습니다. 위의 준비가 끝났다는 전제로 작성되었습니다.
            </Ko>
          </p>
          <Link
            href="/journey/arrived"
            className="inline-flex items-center gap-2 bg-white text-sky-600 hover:bg-stone-50 px-6 py-3 rounded-full text-sm font-semibold transition-colors"
          >
            <En translated>I&apos;ve landed — what now?</En>
            <Ja>到着しました — 次はどうする？</Ja>
            <Zh>我已经落地了 — 接下来呢？</Zh>
            <Ko>도착했어요 — 이제 어떻게?</Ko>
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

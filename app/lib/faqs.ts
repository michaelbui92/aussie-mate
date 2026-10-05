// Shared FAQ data — single source of truth, imported by:
//   - app/faq/page.tsx (full list)
//   - app/components/HomePage.tsx (top 3 for homepage row)
//
// Keep this list in sync with /faq content if you add/remove items.
// Each item has bilingual question + answer with the EN text only used
// for FAQPage JSON-LD (Google rich results require EN text payloads).

export interface FaqItem {
  q: { en: string; ko: string; ja?: string; zh?: string };
  a: { en: string; ko: string; ja?: string; zh?: string };
}

export const faqs: FaqItem[] = [
  {
    q: { en: "Do I need a visa to visit Australia?", ja: "オーストラリアを訪れるのにビザは必要ですか？", zh: "去澳大利亚旅游需要签证吗？", ko: "호주 방문에 비자가 필요한가요?" },
    a: {
      en: "Almost always, yes. Australia requires most passport holders to have a visa — only New Zealand citizens enter visa-free. The easiest starting point for a short trip is the ETA (subclass 601), which you can apply for online in minutes and is valid for 12 months with stays up to 3 months per visit. Eligibility and fees depend on your passport — whether you're visiting from Korea, the US, the UK, Europe, or anywhere else, the same rule applies: check your specific case on homeaffairs.gov.au before you book flights. Longer stays, work, and study each have their own subclasses — the visa guide walks through the main five.", ja: "ほぼ必ず必要です。オーストラリアはほとんどどのパスポート保有者にビザを求めています — ビザなしで入国できるのはニュージーランド国民だけです。短期旅行で最も簡単な出発点はETA（サブクラス601）で、オンラインで数分で申請でき、12か月有効で1回の訪問につき最大3か月滞在できます。資格と料金はパスポートによって異なります — 韓国、米国、英国、ヨーロッパ、その他どこからの訪問でも同じルールが適用されます：航空券を予約する前にhomeaffairs.gov.auで自分のケースを確認しましょう。長期滞在、就労、留学にはそれぞれ独自のサブクラスがあります — ビザガイドで主要な5つを解説しています。", zh: "几乎总是需要的。澳大利亚要求大多数护照持有人持签证——只有新西兰公民可免签入境。短期旅行最简单的起点是ETA（601子类），可以在线几分钟内申请，有效期12个月，每次访问最多停留3个月。资格和费用取决于你的护照——无论你来自韩国、美国、英国、欧洲还是其他地方，规则都一样：订机票前先在homeaffairs.gov.au上查询你的具体情况。长期停留、工作和留学各有自己的子类——签证指南会介绍主要的五种。",
      ko: "네, 거의 확실히 필요합니다. 한국 여권 소지자는 호주 비자가 필요합니다. Tourist visa (ETA subclass 601)가 가장 간단 — 온라인으로 몇 분 만에 신청 가능, 12개월 유효, 1회 방문 시 최대 3개월 체류. 워킹 홀리데이 비자(subclass 417)는 eligibility가 되면 가능. homeaffairs.gov.au에서 확인하세요.",
    },
  },
  {
    q: { en: "Can I work in Australia on a tourist visa?", ja: "観光ビザでオーストラリアで働けますか？", zh: "持旅游签证可以在澳大利亚工作吗？", ko: "관광비자로 호주에서 일할 수 있나요?" },
    a: {
      en: "No. Tourist visas (including ETA) do not allow any work. If you're caught working on a tourist visa, you risk deportation, a ban, and your future visa applications being refused. If you want to work, you need a working visa — Working Holiday Maker (417), student, or skilled visa.", ja: "いいえ。観光ビザ（ETAを含む）ではいかなる就労も認められません。観光ビザで働いているのが見つかると、強制送還、入国禁止、そして将来のビザ申請が拒否されるリスクがあります。働きたいなら、就労ビザ — ワーキングホリデーメーカー（417）、学生、または技術ビザが必要です。", zh: "不可以。旅游签证（包括ETA）不允许任何工作。如果被发现持旅游签证工作，你可能面临遣返、入境禁令，以及未来签证申请被拒。如果你想工作，需要工作签证——打工度假签证（417）、学生签证或技术签证。",
      ko: "불가능합니다. 관광비자(ETA 포함)는 어떠한 유형의 취업도 금지됩니다. 관광비자로 일하다 적발되면 추방, 입국 금지, 향후 비자 신청 거절 위험이 있습니다. 취업하려면 워킹 비자(417), 학생 비자, 기술 비자 중 하나가 필요합니다.",
    },
  },
  {
    q: { en: "Is Australia expensive?", ja: "オーストラリアは物価が高いですか？", zh: "澳大利亚物价贵吗？", ko: "호주는 비싼가요?" },
    a: {
      en: "Yes — Sydney and Melbourne are among the world's most expensive cities. A coffee is around $5–$7 AUD. A casual restaurant meal is $20–$35 AUD per person. Rent in Sydney is the biggest cost — a room in a shared house is $200–$350 AUD/week, a one-bedroom apartment starts around $450–$600 AUD/week. Use numbeo.com or expatistan.com for real-time comparisons.", ja: "はい — シドニーとメルボルンは世界で最も物価の高い都市の一つです。コーヒーは約$5〜$7 AUD。カジュアルなレストランの食事は1人あたり$20〜$35 AUD。シドニーで最大の出費は家賃です — シェアハウスの1部屋は週$200〜$350 AUD、ワンベッドルームのアパートは週$450〜$600 AUDから。リアルタイムの比較にはnumbeo.comやexpatistan.comを使いましょう。", zh: "是的——悉尼和墨尔本是世界上生活成本最高的城市之一。一杯咖啡约$5–$7 AUD。普通餐厅一餐每人$20–$35 AUD。悉尼最大的开销是房租——合租房的一间房每周$200–$350 AUD，一居室公寓每周起价约$450–$600 AUD。实时比较可用numbeo.com或expatistan.com。",
      ko: "네 — 시드니와 멜버른은 세계에서 가장 비싼 도시 중 하나입니다. 커피 한 잔에 약 $5–$7 AUD. 비공식 레스토랑 식사는 1인당 $20–$35 AUD. 시드니에서 가장 큰 지출은 임대 — 쉐어하우스 방은 주 $200–$350 AUD, 1Bed 아파트는 주 $450–$600 AUD부터. 실시간 비교는 numbeo.com 또는 expatistan.com에서.",
    },
  },
  {
    q: { en: "What is super and why does it matter?", ja: "superとは何で、なぜ重要なのですか？", zh: "什么是养老金（super），为什么重要？", ko: "Super란 무엇이며 왜 중요하나요?" },
    a: {
      en: "Superannuation (super) is a retirement savings account your employer is legally required to pay into — currently 11.5% of your wages. It's yours. You can't access it until retirement (with some exceptions). When you leave Australia permanently, you can claim it as a 'super withdrawal' — but tax applies. Always check your super statement annually and consider consolidating accounts to avoid fees.", ja: "super（スーパー）は、雇用主が法律で拠出を義務付けられている退職貯蓄口座です — 現在は賃金の11.5%です。それはあなたのものです。退職するまで引き出せません（一部の例外を除く）。オーストラリアを永久に離れるときは「super の引き出し」として請求できます — ただし税金がかかります。毎年superの明細を確認し、手数料を避けるために口座の統合を検討しましょう。", zh: "养老金（super）是你的雇主依法必须缴入的退休储蓄账户——目前为你工资的11.5%。这笔钱是你的。退休前无法动用（有少数例外）。当你永久离开澳大利亚时，可以按“养老金提取”申请领取——但需要缴税。每年都检查你的养老金金账单，并考虑合并账户以避免手续费。",
      ko: "Superannuation (super)은 고용주가 법적 의무로 납입해야 하는 퇴직 적금 계좌입니다 — 현재 월급의 11.5%. 그 돈은 당신 것입니다. (일부 예외 제외) 은퇴할 때까지 인출 불가. 호주를 영구적으로 떠날 때 'super withdrawal'으로 인출 가능 — 하지만 세금이 부과됩니다. 매년 명세서를 확인하고, 비용을 피하기 위해 계좌를 통합하는 것을 고려하세요.",
    },
  },
  {
    q: { en: "How does healthcare work in Australia?", ja: "オーストラリアの医療制度はどうなっていますか？", zh: "澳大利亚的医疗体系是怎样的？", ko: "호주의 의료 시스템은 어떻게 되나요?" },
    a: {
      en: "Australia has a public healthcare system called Medicare. If you're on a permanent visa, you're generally eligible. On a temporary visa, you generally need private health insurance — which is strongly recommended anyway. For emergencies, go to a public hospital's Emergency Department (free). For everything else, book a GP (General Practitioner) — most bulk-bill so you pay nothing out of pocket.", ja: "オーストラリアにはMedicareと呼ばれる公的医療制度があります。永住ビザをお持ちなら、通常は対象になります。一時ビザの場合、通常は民間健康保険が必要です — いずれにせよ強くおすすめします。緊急時は公立病院の救急外来へ（無料）。それ以外はGP（一般開業医）を予約しましょう — 多くはバルクビリングなので自己負担はありません。", zh: "澳大利亚有一套名为Medicare的公共医疗体系。如果你持永久签证，通常符合资格。持临时签证，通常需要私人健康保险——无论如何都强烈建议购买。紧急情况去公立医院的急诊部（免费）。其他情况则预约GP（全科医生）——大多数采用统一结算（bulk-bill），你无需自付费用。",
      ko: "호주에는 Medicare라는 공공 의료 시스템이 있습니다. 영주 비자 소지자는 일반적으로 자격이 됩니다. 임시 비자 소지자는 일반적으로 민간 건강보험이 필요합니다 — 어쨌든 강력히 추천. 응급 상황엔 공공 병원의 응급실(무료)로. 그 외엔 GP(일반의) 예약 — 대부분의 GP는 bulk-bill이라 본인 부담이 없습니다.",
    },
  },
  {
    q: { en: "Do I need to speak English well to get by?", ja: "生活するのに英語を上手に話す必要がありますか？", zh: "我需要英语很好才能生活吗？", ko: "영어를 잘해야 살 수 있나요?" },
    a: {
      en: "You can get by with limited English, especially in Sydney's Korean areas (Strathfield, Chatswood, Eastwood). But life gets significantly easier with English — at the doctor, at the bank, in legal situations. Even intermediate English will open far more doors. Our Aussie English guide and the Language Exchange page are good starting points.", ja: "英語が限られていても生活できます、特にシドニーの韓国人街（Strathfield、Chatswood、Eastwood）では。しかし英語があると生活はずっと楽になります — 医者、銀行、法的な場面で。中級の英語でもはるかに多くの扉が開きます。私たちのオーストラリア英語ガイドと言語交換ページは良い出発点です。", zh: "英语有限也能生活，尤其是在悉尼的韩国人聚居区（Strathfield、Chatswood、Eastwood）。但有英语生活会轻松得多——看医生、去银行、处理法律事务时都是如此。即使只有中级英语，也会打开更多机会。我们的澳式英语指南和语言交换页面是不错的起点。",
      ko: "영어가 부족해도 살 수 있습니다, 특히 시드니의 한국인 밀집 지역(Strathfield, Chatswood, Eastwood)에서는. 하지만 영어가 있으면 생활이 훨씬 나아집니다 — 병원, 은행, 법적 상황에서. 중급 영어만 되어도 훨씬 많은 문이 열립니다. 호주 영어 가이드와 언어교환 페이지가 좋은 시작점이 될 수 있습니다.",
    },
  },
  {
    q: { en: "Can I drive with my Korean licence?", ja: "韓国の免許で運転できますか？", zh: "我可以用韩国驾照开车吗？", ko: "한국 면허로 호주에서 운전할 수 있나요?" },
    a: {
      en: "Yes, for up to 3 months. After that, you need an Australian licence. Bring your Korean licence and an official translation (from an NAATI-accredited translator) — or an International Driving Permit. Note: Australia drives on the LEFT. This is the opposite of Korea. Many drivers find this the hardest adjustment.", ja: "はい、最長3か月まで可能です。その後はオーストラリアの免許が必要です。韓国の免許と公的な翻訳文（NAATI認定の翻訳者によるもの）、または国際運転免許証を持参してください。注意：オーストラリアは左側通行です。これは韓国とは逆です。多くの運転者がこれが最も大変な適応だと言います。", zh: "可以，最长3个月。之后你需要澳大利亚驾照。带上你的韩国驾照和官方翻译件（由NAATI认证的译者翻译）——或国际驾照。注意：澳大利亚靠左行驶。这与韩国相反。许多司机觉得这是最难适应的一点。",
      ko: "네, 최대 3개월까지 가능합니다. 그 이후에는 호주 면허가 필요합니다. 한국 면허와 공식 번역본(NAATI 인정 번역사) 또는 국제운전면허증을 지참하세요. 참고: 호주는좌측통행입니다. 한국과 정반대입니다. 많은 운전자들이 이것이 가장 힘든 적응이라고 합니다.",
    },
  },
  {
    q: { en: "What should I budget for a week in Sydney?", ja: "シドニーでの1週間の予算はいくらにすべきですか？", zh: "在悉尼一周应该预算多少？", ko: "시드니에서 일주일 비용은 어느 정도인가요?" },
    a: {
      en: "Budget travellers: $600–$900 AUD/week (shared accommodation, self-catering, free activities). Mid-range: $1,200–$2,000 AUD/week (private room, eating out 2–3 times, some paid attractions). This excludes flights, long-term visa costs, and health insurance. Use numbeo.com for detailed cost-of-living breakdowns.", ja: "節約旅行者：週$600〜$900 AUD（シェア宿泊、自炊、無料アクティビティ）。中級：週$1,200〜$2,000 AUD（個室、週2〜3回の外食、一部の有料観光）。これは航空券、長期ビザ費用、健康保険を除きます。詳しい生活費の内訳にはnumbeo.comを使いましょう。", zh: "穷游者：每周$600–$900 AUD（合住、自己做饭、免费活动）。中档：每周$1,200–$2,000 AUD（单间、每周外食2–3次、一些付费景点）。这不包括机票、长期签证费用和健康保险。详细的生活成本明细可用numbeo.com。",
      ko: "Budget 여행자: 주 $600–$900 AUD (셰어숙소, 직접 요리, 무료 활동 중심). 중급: 주 $1,200–$2,000 AUD (개인 방, 주 2–3회 외식, 일부 유료 명소). 이는 항공권, 장기 비자 비용, 건강보험을 제외한 금액입니다. 생활비 상세 비교는 numbeo.com에서.",
    },
  },
  {
    q: { en: "Is it safe in Australia?", ja: "オーストラリアは安全ですか？", zh: "澳大利亚安全吗？", ko: "호주는 안전한가요?" },
    a: {
      en: "Generally yes. Australia is a safe country with low violent crime. Standard precautions apply — don't leave valuables visible in cars, watch your drink, be cautious at night in unfamiliar areas. The main dangers are natural: sun (UV), rips (ocean currents — swim between the flags at beaches), and wildlife (snakes and spiders exist but rarely cause serious harm if you're careful).", ja: "一般的にははい。オーストラリアは暴力犯罪が少ない安全な国です。標準的な注意を払いましょう — 車の中に貴重品を目につくところに置かない、飲み物に気をつける、慣れない地域では夜間注意する。主な危険は自然によるものです：日差し（UV）、離岸流（海の流れ — ビーチでは旗の間で泳ぎましょう）、野生動物（ヘビやクモはいますすが、注意していれば深刻な被害はまれです）。", zh: "总体上是安全的。澳大利亚是一个暴力犯罪率低的安全国家。采取常规防范措施即可——不要把贵重物品留在车内显眼处，注意自己的饮料，在不熟悉的地区夜间要小心。主要危险来自自然：阳光（紫外线）、离岸流（海流——在海滩要在旗子之间游泳）和野生动物（蛇和蜘蛛确实存在，但只要小心，很少造成严重伤害）。",
      ko: "일반적으로 안전합니다. 호주는 폭력 범죄가 낮은 안전한 나라입니다. 기본적인 주의하면 됩니다 — 차 안에 귀중품을 놓지 말고, 음료에 주의를, 낯선 지역에서 밤에 조심하세요. 주요 위험은 자연적입니다: 자외선(UV), 이안류(해변에서 빨간 기단 사이에서 수영), 야생동물(뱀과 거미가 존재하지만 조심하면 심각한 해는 드뭅니다).",
    },
  },
  {
    q: { en: "How do I meet people in Australia?", ja: "オーストラリアではどうやって人と出会いますか？", zh: "在澳大利亚怎么结识朋友？", ko: "호주에서 어떻게 친구를 사귀나요?" },
    a: {
      en: "Australians are generally friendly but making deep friendships takes time — showing up consistently is key. Common paths: language exchange groups (Meetup.com, Facebook groups), sports clubs (AFL, soccer, hiking groups), Korean community groups (churches, Korean restaurants, Korean Australian associations), and at work. Australian friendships often form around shared activities rather than purely social settings.", ja: "オーストラリア人は一般的に友好的ですが、深い友情を築くには時間がかかります — 継続的に顔を出すことが鍵です。よくある方法：言語交換グループ（Meetup.com、Facebookグループ）、スポーツクラブ（AFL、サッカー、ハイキング）、韓国人コミュニティ（教会、韓国料理店、韓豪協会）、そして職場。オーストラリアでの友情は、純粋な社交の場よりも共通の活動を中心に形成されることが多いです。", zh: "澳大利亚人总体友好，但建立深厚友谊需要时间——持续出现是关键。常见途径：语言交换小组（Meetup.com、Facebook群组）、体育俱乐部（AFL、足球、徒步）、韩国人社区（教会、韩国餐厅、韩裔澳大利亚人协会）以及工作场所。澳大利亚人的友谊往往围绕共同活动，而非纯粹的社交场合建立。",
      ko: "호주 사람들은 일반적으로 친절하지만 깊은 우정은 시간이 필요합니다 — 꾸준히 나타나는 것이 핵심. 일반적인 방법: 언어교환 모임(Meetup.com, Facebook 그룹), 스포츠 동호회(AFL, 축구, 하이킹), 한국인 커뮤니티(교회, 한국식당, 한인협회), 직장. 호주인 친구 관계는 순수한 사교보다 공유 활동 중심으로 형성되는 경향이 있습니다.",
    },
  },
];

// The three FAQs most likely to answer a first-time visitor's question.
// Surfaced beneath the experiences row on the homepage (T6).
export const topHomepageFaqs: FaqItem[] = [
  faqs[0], // visa
  faqs[2], // cost
  faqs[4], // healthcare
];

// Server component — bilingual finance and banking guide for Australia.
// Redesigned in editorial style: full-bleed hero image with dual CTAs
// (matches the homepage vocabulary), persona chips, then a vertical
// sequence of EditorialSection cards (some with image banners).

import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { Briefcase2, Building, Building2, Clipboard, DollarSign, ReceiptAlt } from "@/components/Icons";
import { articleLdJson, breadcrumbLdJson, seoFor, withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";

export const metadata = withSeo(
  {

  ...seoFor("/finance"),
  title: "Australia Banking & Tax Guide — TFN, Super, Tax Returns for Newcomers",
  description:
    "Open a bank account, apply for a TFN, claim superannuation, lodge a tax return — practical money and banking essentials in Australia for anyone new to the country.",
  },
  "/finance"
);

type FinanceSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; en: string; ko: string; ja?: string; zh?: string }>;
};

const sections: FinanceSection[] = [
  {
    id: "banking",
    iconKey: "Building",
    accent: "coast",
    title: "Australian Banking",
    koTitle: "호주 은행 시스템",
    desc: "Opening accounts, understanding fees, and moving money",
    koDesc: "계좌 개설, 수수료 이해, 송금",
    img: "/images/commbank_atm.jpg",
    items: [
      { label: "Major Banks", en: "The four big banks are: Commonwealth Bank (CBA), Westpac, ANZ, and NAB. All have international student packages with low or no monthly fees. Most have multilingual support — 24/7 phone banking is available in many languages, and the largest branches have staff who can help in-language.", ja: "四大銀行は、Commonwealth Bank（CBA）、Westpac、ANZ、NAB です。いずれも国際学生向けのパッケージがあり、月額手数料が無料か低額です。ほとんどが多言語対応です — 24 時間電話バンキングは多くの言語で利用でき、大きな支店には言語サポートができるスタッフがいます。", zh: "四大银行是：Commonwealth Bank（CBA）、Westpac、ANZ 和 NAB。它们都有国际学生套餐，月费很低甚至免费。大多数提供多语言服务 — 24 小时电话银行支持多种语言，最大的分行有能用外语提供帮助的员工。", ko: "4대 은행은 Commonwealth Bank(CBA), Westpac, ANZ, NAB입니다. 모두 국제 학생 전용 패키지로 월 수수료가 없거나 낮은 계정을 제공합니다. 대부분 한국어 서비스 직원이나 다국어 전화 뱅킹을 제공합니다." },
      { label: "How to Open an Account", en: "You can open an account before you arrive using the bank's website, or walk into any branch with your passport and visa (or bring your passport and a tenancy agreement as ID proof). It takes about 20 minutes. You'll get a debit card in 3-5 business days by mail.", ja: "到着前に銀行のウェブサイトで口座を開設するか、パスポートとビザ（またはパスポートと賃貸契約書）を持って支店に行きましょう。所要時間は約 20 分です。デビットカードは 3〜5 営業日で郵送されます。", zh: "你可以在抵达前通过银行网站开户，或者带上护照和签证（或护照加租房合同作为身份证明）去任意分行办理。大约需要 20 分钟。借记卡会在 3–5 个工作日内邮寄给你。", ko: "도착 전에 은행 웹사이트에서 계좌를 열거나, 여권과 비자(또는 여권과 임대차 계약서)를 지니고 지점에 방문하면 됩니다. 약 20분이 소요됩니다. 직불 카드는 영업일 기준 3~5일 안에 우편으로 배달됩니다." },
      { label: "BSB and Account Number", en: "Every Australian bank account has two identifying numbers: BSB (6 digits — identifies the bank and branch) and Account Number (8 digits). You need both to receive transfers or set up salary payments. This is like Korea's 은행코드+계좌번호.", ja: "オーストラリアのどの銀行口座にも 2 つの識別番号があります：BSB（6 桁 — 銀行と支店を識別）と口座番号（8 桁）。送金を受け取ったり給与振込を設定したりするには両方が必要です。韓国の口座コード＋口座番号のようなものです。", zh: "每个澳大利亚银行账户都有两个识别号码：BSB（6 位数字 — 标识银行和分行）和账号（8 位数字）。接收转账或设置工资发放都需要这两个号码。这类似于韩国的银行代码 + 账号。", ko: "모든 호주 은행 계좌에는 BSB(6자리 — 은행과 지점 식별)와 계좌번호(8자리)가 있습니다. 송금이나 급여 설정 시 두 개가 모두 필요합니다. 한국의 은행코드+계좌번호와 비슷합니다." },
      { label: "Debit vs Credit Cards", en: "Most students get a debit card linked directly to their account (no credit). You can use it anywhere Visa/Mastercard is accepted. Some banks offer credit cards if you're over 18 and have regular income — but you don't need one.", ja: "ほとんどの学生は口座に直接紐づいたデビットカードを受け取ります（クレジット機能なし）。Visa/Mastercard が使える場所ならどこでも使えます。18 歳以上で安定した収入があれば一部の銀行がクレジットカードを提供しますが、必要ありません。", zh: "大多数学生会拿到直接关联账户的借记卡（没有信用功能）。凡是可以使用 Visa/Mastercard 的地方都能刷。如果你年满 18 岁且有固定收入，有些银行会提供信用卡 — 但你并不需要。", ko: "대부분의 학생들은 계좌에 직접 연결된 직불 카드를 받습니다(신용 없음). Visa/Mastercard가 허용되는 곳이면 어디서든 사용할 수 있습니다. 일부 은행은 18세 이상에 정기 소득이 있으면 신용카드를 제공하지만, 필요하지 않습니다." },
      { label: "ATM Fees", en: "Using your own bank's ATM is free. Using another bank's ATM costs $2 AUD-3 per withdrawal. In Australia, many places (shops, bars, restaurants) let you pay by card without a minimum — just tap and go. Cash is rarely needed.", ja: "自分の銀行の ATM は無料です。他行の ATM は 1 回の引き出しにつき $2 AUD〜3 かかります。オーストラリアでは多くの場所（店、バー、レストラン）で最低金額なしにカードで支払えます — タッチするだけ。現金はほとんど必要ありません。", zh: "使用自己银行的 ATM 是免费的。使用其他银行的 ATM 每次取款收 $2 AUD–3。在澳大利亚，很多地方（商店、酒吧、餐厅）刷卡没有最低消费 — 拍一下就行。几乎不需要现金。", ko: "자행 ATM은 무료입니다. 타행 ATM은 회당 $2 AUD-3의 수수료가 부과됩니다. 호주에서는 많은 곳(상점, 바, 식당)에서 최소 금액 없이 카드를 사용할 수 있습니다 — 탭하면 끝. 현금은 거의 필요하지 않습니다." },
      { label: "International Transfers", en: "To receive money from overseas (like from family), you give them your BSB + Account Number. To send money overseas, use a service like Wise (formerly TransferWise) — much cheaper than bank fees. Banks charge $20 AUD-30 per transfer.", ja: "海外から送金を受け取るには（家族からなど）、BSB + 口座番号を伝えましょう。海外へ送金するには Wise（旧 TransferWise）のようなサービスを使いましょう — 銀行の手数料よりずっと安いです。銀行は 1 回の送金につき $20 AUD〜30 を請求します。", zh: "要从海外收款（比如家人汇款），把你的 BSB + 账号给他们就行。往海外汇款，请使用 Wise（原 TransferWise）之类的服务 — 比银行手续费便宜得多。银行每笔汇款收 $20 AUD–30。", ko: "해외에서 돈을 받으려면(가족 등) BSB + 계좌번호를 알려주면 됩니다. 해외로 송금하려면 Wise(formerly TransferWise)와 같은 서비스를 사용하세요 — 은행 수수료보다 훨씬 저렴합니다. 은행은 회당 $20 AUD-30을 부과합니다." },
    ],
  },
  {
    id: "tax-file-number",
    iconKey: "ReceiptAlt",
    accent: "amber",
    title: "Tax File Number (TFN)",
    koTitle: "납세식별 번호 (TFN)",
    desc: "What a TFN is and why you need one",
    koDesc: "TFN이란 무엇이며 왜 필요한지",
    items: [
      { label: "What is a TFN?", en: "A Tax File Number (TFN) is your personal tax identification number in Australia. It's free to get and completely separate from your visa. You need a TFN to work legally, open a bank account with full features, and lodge a tax return.", ja: "納税者番号（TFN）は、オーストラリアにおけるあなたの個人の税務識別番号です。取得は無料で、ビザとは完全に別のものです。合法的に働き、フル機能の銀行口座を開き、確定申告を行うには TFN が必要です。", zh: "税号（TFN）是你在澳大利亚的个人税务识别号码。免费申请，与你的签证完全分开。合法工作需要 TFN，开设功能齐全的银行账户和报税也都需要 TFN。", ko: "납세식별 번호(TFN)는 호주의 개인 세금 식별 번호입니다. 무료로 받을 수 있으며 비자와 완전히 별개입니다. 합법적으로 근무하려면 TFN이 필요하고, 모든 기능을 갖춘 은행 계좌를 열거나 세금 신고를 하려면 TFN이 필요합니다." },
      { label: "Do I Need One?", en: "Yes — if you work any job (even part-time), you legally need a TFN. If you don't have one, your employer deducts tax at the maximum rate (47%) instead of your actual rate. Getting a TFN takes the same rate down to your real bracket.", ja: "はい — どんな仕事でも（アルバイトでも）働くなら、法律上 TFN が必要です。TFN がないと、雇用主は実際の税率ではなく最高税率（47%）で税金を天引きします。TFN を取得すれば、実際の税率区分に下がります。", zh: "是的 — 只要你工作，哪怕只是兼职，法律上都需要 TFN。如果没有 TFN，雇主会按最高税率（47%）而不是你的实际税率扣税。拿到 TFN 后就会降到你的实际税率档。", ko: "네 — 아르바이트를 하든 상관없이 일하면 TFN이 필요합니다. TFN이 없으면 고용주가 실제 세율 대신 최고 세율(47%)로 공제합니다. TFN을 받으면 실제 세율 구간으로 내려갑니다." },
      { label: "How to Apply", en: "Apply online at the ATO website (ato.gov.au). You'll need your passport, visa, and an Australian address. Processing takes 2-4 weeks — apply as soon as you arrive. It's completely free and the ATO won't judge your visa status.", ja: "ATO のウェブサイト（ato.gov.au）でオンライン申請します。パスポート、ビザ、オーストラリアの住所が必要です。処理には 2〜4 週間かかります — 到着したらすぐに申請しましょう。完全に無料で、ATO がビザのステータスを判断することはありません。", zh: "在 ATO 网站（ato.gov.au）在线申请。你需要护照、签证和一个澳大利亚地址。处理需要 2–4 周 — 抵达后尽快申请。完全免费，ATO 不会评判你的签证状态。", ko: "ATO 웹사이트(ato.gov.au)에서 온라인으로 신청하세요. 여권, 비자, 호주 주소가 필요합니다. 처리에는 2-4주가 걸립니다 — 도착하면 바로 신청하세요. 완전히 무료이며 ATO는 비자 상태를 판단하지 않습니다." },
      { label: "What Happens if You Don't Have One", en: "If you work without a TFN, you'll pay more tax unnecessarily. You can claim it back at tax return time, but it's easier to just get the TFN upfront. Some employers might not hire you without a TFN.", ja: "TFN なしで働くと、不必要に多くの税金を払うことになります。確定申告の時に取り戻せますが、最初から TFN を取得する方が簡単です。雇用主によっては TFN がないと雇ってくれないこともあります。", zh: "没有 TFN 就工作，你会多交不必要的税。报税时可以要回来，但一开始就拿到 TFN 更省事。有些雇主可能没有 TFN 就不雇你。", ko: "TFN 없이 일하면 불필요하게 더 많은 세금을 냅니다. 세금 신고 때 돌려받을 수는 있지만, 처음부터 TFN을 받는 게 훨씬 간단합니다. 일부 고용주는 TFN 없으면 고용하지 않을 수도 있습니다." },
    ],
  },
  {
    id: "superannuation",
    iconKey: "Briefcase2",
    accent: "sage",
    title: "Superannuation",
    koTitle: "퇴직연금 (Super)",
    desc: "Australia's retirement savings system explained simply",
    koDesc: "호주 퇴직연금 제도를 쉽게 설명",
    items: [
      { label: "What is Super?", en: "Superannuation (super) is a mandatory savings system — every employer must pay 11.5% of your salary into a super fund. This money is invested and grows over time. You can't access it until you retire (around age 60).", ja: "super（スーパー）は義務的な貯蓄制度です — すべての雇用主は給与の 11.5% をsuper 基金に支払わなければなりません。このお金は投資され、時間とともに増えます。退職するまで（およそ 60 歳）引き出せません。", zh: "养老金（super）是一项强制储蓄制度 — 每个雇主都必须把你工资的 11.5% 存入养老金基金。这笔钱会被投资，随时间增长。你要到退休（大约 60 岁）才能动用。", ko: "Superannuation(super)은 의무 저축 시스템입니다 — 모든 고용주가 급여의 11.5%를 퇴직연금 기금에 납부해야 합니다. 이 돈은 투자되어 시간에 따라 증가합니다. 퇴직(약 60세)에 접근할 수 있습니다." },
      { label: "Why It Matters for You", en: "Even if you only work part-time, you're entitled to super. Over a year of part-time work, this can add up to hundreds or thousands of dollars — money that stays yours and grows. Many students don't know about this and lose it.", ja: "アルバイトだけでも、superを受け取る権利があります。1 年間アルバイトをすると、数百ドルから数千ドルになることもあります — あなたのお金であり、増えていきます。多くの留学生がこのことを知らずに失っています。", zh: "即使只做兼职，你也有资格获得养老金。兼职工作一年下来，这可能累积到数百甚至数千澳元 — 这笔钱始终属于你，还会增值。很多学生不知道这件事，白白损失了。", ko: "아르바이트만 해도 퇴직연금을 받을 자격이 있습니다. 1년간 아르바이트하면 수백에서 수천 달러가 될 수 있습니다 — 당신의 돈이고 증가합니다. 많은 유학생들이 이것을 몰라서 잃어버립니다." },
      { label: "Choosing a Super Fund", en: "Your employer will ask you to choose a fund. You can pick any fund — popular ones for students include AustralianSuper, HESTA (health fund), Hostplus, and UniSuper (if you're a student). Some have low fees, some have good returns.", ja: "雇用主が基金の選択を求めます。どの基金でも選べます — 学生に人気なのは AustralianSuper、HESTA（医療基金）、Hostplus、UniSuper（学生なら）です。手数料が低いものもあれば、リターンが良いものもあります。", zh: "雇主会要求你选择一个基金。你可以选任何基金 — 学生中受欢迎的包括 AustralianSuper、HESTA（医疗基金）、Hostplus 和 UniSuper（如果你是学生）。有些费用低，有些回报好。", ko: "고용주가 기금 선택을 요청할 것입니다. 원하는 기금을 선택할 수 있습니다 — 학생들에게 인기 있는 것은 AustralianSuper, HESTA(건강 기금), Hostplus, UniSuper(학생용)입니다. 일부에는 낮은 수수료가 있고, 일부는 좋은 수익을 냅니다." },
      { label: "What to Do When You Leave Australia", en: "When you leave Australia permanently, you can claim your super as a 'departing Australia super payment' (DASP) — but only if you're on an eligible visa and meet conditions. Some people lose their super because they don't know to claim it.", ja: "オーストラリアを永久に離れるとき、superを「Departing Australia Superannuation Payment（DASP）」として請求できます — ただし適格なビザで条件を満たす場合に限ります。請求することを知らずにsuperを失う人もいます。", zh: "当你永久离开澳大利亚时，可以以「离澳养老金支付」（DASP）的名义申领你的养老金 — 但前提是你持符合条件的签证并满足相关条件。有些人因为不知道要申领而丢失了养老金。", ko: "호주를 영구적으로 떠나면 '호주 출발 퇴직연금 결제(DASP)'로 퇴직연금을 청구할 수 있습니다 — 하지만 자격 비자이고 조건을 충족해야만 가능합니다. 퇴직연금을 청구해야 한다는 것을 몰라서 잃어버리는 사람들이 많습니다." },
      { label: "Low Fees Matter", en: "Super funds charge annual fees. Even a 1% fee difference can cost you thousands over a few years. Use a comparison tool like 'Stack or SuperRatings' to compare funds. The fund your employer suggests isn't always the best.", ja: "super基金は年間手数料を課します。たとえ 1% の手数料の違いでも、数年で数千ドルの差になることがあります。Stack や SuperRatings のような比較ツールで基金を比較しましょう。雇用主が勧める基金がいつも最良とは限りません。", zh: "养老金基金会收取年费。即使只是 1% 的费用差异，几年下来也可能让你损失数千澳元。使用 Stack 或 SuperRatings 之类的比较工具来比较基金。雇主建议的基金不一定是最好的。", ko: "퇴직연금 기금은 연간 수수료를 부과합니다. 1%만 차이가 나도 몇 년에 걸쳐 수천 달러가 될 수 있습니다. Stack이나 SuperRatings 같은 비교 도구를 사용하세요. 고용주가 제안한 기금이 항상 가장 좋은 것은 아닙니다." },
    ],
  },
  {
    id: "tax-return",
    iconKey: "Clipboard",
    accent: "sunset",
    title: "Tax Return",
    koTitle: "세금 신고",
    desc: "Lodging your tax return — when, how, and why you might get money back",
    koDesc: "세금 신고 시기, 방법, 환급 가능성",
    items: [
      { label: "Do You Need to Lodge?", en: "If you earned money in Australia, you may need to lodge a tax return — even if you earned below the tax-free threshold ($18,200 AUD per year). The ATO will tell you if you need to. Not lodging when you should can result in fines.", ja: "オーストラリアでお金を稼いだなら、確定申告が必要な場合があります — 非課税のしきい値（年間 $18,200 AUD）を下回る収入でも同様です。必要かどうかは ATO が教えてくれます。申告すべきときにしないと罰金になることがあります。", zh: "如果你在澳大利亚赚了钱，可能需要报税 — 即使你的收入低于免税门槛（每年 $18,200 AUD）。ATO 会告诉你是否需要报税。该报却不报可能会导致罚款。", ko: "호주에서 돈을 벌었다면 세금 신고를 해야 할 수 있습니다 — 연간 비과세 구간($18,200 AUD) 이하로 벌었더라도 마찬가지입니다. ATO가 필요 여부를 알려줍니다. 신고해야 할 때 하지 않으면 벌금이 부과될 수 있습니다." },
      { label: "How It Works", en: "Each financial year runs July 1 to June 30. You lodge your tax return between July 1 and October 31. If you had tax withheld from your pay and earned below $18,200 AUD, you'll likely get a full refund. Most students get money back.", ja: "オーストラリアの会計年度は 7 月 1 日から翌年 6 月 30 日までです。確定申告は 7 月 1 日から 10 月 31 日の間に行います。給与から税金が源泉徴収されていて、$18,200 AUD 以下しか稼いでいなければ、全額還付される可能性が高いです。ほとんどの学生がお金を取り戻します。", zh: "每个财政年度从 7 月 1 日到次年 6 月 30 日。你在 7 月 1 日到 10 月 31 日之间报税。如果你的工资已被预扣税款，且收入低于 $18,200 AUD，很可能可以全额退税。大多数学生都能拿回钱。", ko: "호주의 회계연도는 7월 1일부터 이듬해 6월 30일까지입니다. 7월 1일부터 10월 31일 사이에 세금 신고를 합니다. 급여에서 세금이 원천징수되었고 $18,200 AUD 이하로 벌었으면 전액 환급을 받을 가능성이 높습니다. 대부분의 학생들이 환급을 받습니다." },
      { label: "Using a Tax Agent", en: "Many students use a tax agent (like H&R Block or a local accountant). They charge $80 AUD-150 but often find deductions you missed. First year in Australia — worth using one to learn how the system works. After that, you can do it yourself online for free via myTax on the ATO website.", ja: "多くの学生が税理士（H&R Block のようなフランチャイズや地元の会計士）を利用します。費用は $80 AUD〜150 ですが、見落としていた控除を見つけてくれることがよくあります。オーストラリアでの最初の年は — 制度の仕組みを学ぶのに利用する価値があります。その後は、ATO のウェブサイトの myTax でオンラインで無料で自分でできるようになります。", zh: "很多学生请税务代理（如 H&R Block 或当地会计师）。他们收费 $80 AUD–150，但往往能找到你漏掉的扣除项目。在澳大利亚的第一年 — 值得请一位来了解这套系统如何运作。之后，你就可以通过 ATO 网站上的 myTax 免费自行在线报税。", ko: "많은 학생이 세무사(H&R Block 같은 프랜차이즈나 지역 회계사)를 이용합니다. $80 AUD-150 정도 비용이 들지만, 자주 놓치는 공제를 찾아주는 경우가 많습니다. 호주 첫 해에는 세무사를 통해체계를 배워보는 것을 추천합니다. 익숙해지면 ATO 웹사이트의 myTax로 직접 무료로 신고할 수 있습니다." },
      { label: "Deductions You Can Claim", en: "As a student working part-time, you can claim: work-related travel (if not reimbursed), self-education costs (if work-related), protective clothing/equipment, and union fees. Keep receipts! If you worked from home, you can claim a portion of electricity and internet.", ja: "アルバイトをする学生は、次のものを申告できます：仕事関連の移動費（払い戻されていない場合）、自己教育費（仕事に関連する場合）、保護服・装備、組合費。領収書は必ず保管しましょう！在宅勤務をしたなら、電気代とインターネット代の一部も申告できます。", zh: "作为兼职工作的学生，你可以申报：工作相关的交通费（未获报销的部分）、自我教育费用（与工作相关）、防护服/装备以及工会会费。一定要保留收据！如果你在家工作，可以申报一部分电费和网费。", ko: "아르바이트하는 학생이 공제 신청할 수 있는 항목: 업무 관련 교통비(환급받지 못한 경우), 자기 교육 비용(업무와 관련된 경우), 보호 의류/장비, 조합비. 반드시 영수증을 보관하세요! 재택 근무를 했다면 전기·인터넷 요금의 일부도 공제 가능합니다." },
    ],
  },
  {
    id: "centrelink",
    iconKey: "Building2",
    accent: "stone",
    title: "Centrelink",
    koTitle: "센터링크",
    desc: "Government payments and what international students can access",
    koDesc: "정부 지급금과 국제 학생이 받을 수 있는 것",
    items: [
      { label: "What is Centrelink?", en: "Centrelink is part of Services Australia — it administers government payments. Payments include JobSeeker (unemployment), Youth Allowance, Austudy (students), Family Tax Benefit, and more.", ja: "Centrelink は Services Australia の一部です — 政府の給付金を管理しています。給付には JobSeeker（失業）、Youth Allowance、Austudy（学生）、Family Tax Benefit などがあります。", zh: "Centrelink 是 Services Australia 的一部分 — 负责管理政府补贴。补贴包括 JobSeeker（失业救济）、Youth Allowance、Austudy（学生津贴）、Family Tax Benefit 等。", ko: "Centrelink은 Services Australia의 일부입니다 — 정부 지급금을 관리합니다. 지급금에는 JobSeeker(실업), Youth Allowance, Austudy(학생), Family Tax Benefit 등이 있습니다." },
      { label: "Can International Students Access It?", en: "Most international students on student visas are NOT eligible for Centrelink payments — this is a condition of your visa (8501 No Assets condition). However, you can still use Centrelink for queries about your visa conditions if needed.", ja: "学生ビザで来ているほとんどの留学生は Centrelink の給付金の対象外です — これはビザの条件です（8501 No Assets condition）。ただし、必要であればビザ条件に関する問い合わせに Centrelink を利用することはできます。", zh: "大多数持学生签证的国际学生没有资格领取 Centrelink 补贴 — 这是你签证的一项条件（8501 No Assets condition）。不过，如有需要，你仍然可以通过 Centrelink 咨询签证条件相关的问题。", ko: "학생 비자로 온 대부분의 국제 학생은 Centrelink 지급금의 자격이 없습니다 — 이것이 비자 조건입니다(8501 No Assets condition). 그러나 필요시 비자 조건에 대한 문의를 위해 Centrelink를 이용할 수 있습니다." },
      { label: "Medicare and Centrelink", en: "If you're from a country with a reciprocal healthcare agreement with Australia (UK, Ireland, Sweden, Netherlands, Finland, Norway, Malta, Italy, Belgium, Slovenia, New Zealand), you can access Medicare. Centrelink manages some Medicare related services.", ja: "オーストラリアと医療費相互協定を結んでいる国（英国、アイルランド、スウェーデン、オランダ、フィンランド、ノルウェー、マルタ、イタリア、ベルギー、スロベニア、ニュージーランド）からの出身であれば、Medicare を利用できます。Centrelink は Medicare に関連する一部のサービスを管理しています。", zh: "如果你来自与澳大利亚签有医疗互惠协议的国家（英国、爱尔兰、瑞典、荷兰、芬兰、挪威、马耳他、意大利、比利时、斯洛文尼亚、新西兰），就可以使用 Medicare。Centrelink 管理一些与 Medicare 相关的服务。", ko: "호주와 의료비 상호 협정이 있는 국가(영국, 아일랜드, 스웨덴, 네덜란드, 핀란드, 노르웨이, 몰타, 이탈리아, 벨기에, 슬로베니아, 뉴질랜드)에서 왔다면 Medicare를 활용할 수 있습니다. Centrelink는 일부 Medicare 관련 서비스를 관리합니다." },
    ],
  },
  {
    id: "cost-of-living",
    iconKey: "DollarSign",
    accent: "rose",
    title: "Cost of Living Tips",
    koTitle: "생활비 절약 팁",
    desc: "Stretch your budget in Australia",
    koDesc: "호주에서 예산을 관리하는 방법",
    items: [
      { label: "Weekly Budget Estimate", en: "As a student in Sydney, expect to spend $300 AUD-500 per week on basics (rent, food, transport, phone). Rent alone is $180 AUD-300 depending on location and sharing. This varies a lot — regional areas are much cheaper than Sydney.", ja: "シドニーで学生として過ごす場合、基本的生活費（家賃、食費、交通費、通信費）に週 $300 AUD〜500 を見込んでおきましょう。家賃だけでも場所とシェアの状況により $180 AUD〜300 です。これは大きく変動します — 地方はシドニーよりずっと安いです。", zh: "作为在悉尼的学生，基本开销（房租、食物、交通、手机费）预计每周 $300 AUD–500。仅房租一项就根据地段和合租情况为 $180 AUD–300。差异很大 — 偏远地区比悉尼便宜得多。", ko: "시드니 학생 기준으로 기본 생활비(주거, 식비, 교통, 통신)에 주 $300 AUD-500 정도 필요합니다. 집세만 해도 동네와 룸메이트 구성에 따라 $180 AUD-300입니다. 지역마다 편차가 크며, 지방은 시드니보다 훨씬 저렴합니다." },
      { label: "Save on Groceries", en: "Coles and Woolworths are the big two chains. ALDI is cheaper for most staples. Use the 'Down Down' app (Coles) or 'Woolworths Discovery' to check prices. Buy generic/store brands — same quality, 30% cheaper. Shop at closing time for discounted cooked chicken and bakery items.", ja: "コールズとウールワースは二大チェーンです。ALDIはほとんどの日用品でより安いです。価格を確認するには「Down Down」アプリ（コールズ）や「Woolworths Discovery」を使いましょう。プライベートブランド／自社ブランドを買いましょう — 品質は同じで30%安いです。閉店時間に買い物をすると、割引された調理済みチキンやベーカリー商品が手に入ります。", zh: "Coles和Woolworths是两大连锁超市。ALDI在大多数日常用品上更便宜。用“Down Down”应用（Coles）或“Woolworths Discovery”查价格。购买自有品牌／超市品牌——品质相同，便宜30%。在打烊时段购物，可以买到打折的烤鸡和烘焙食品。", ko: "Coles와 Woolworths가 두 큰 체인입니다. ALDI는 대부분의 기본 식료품에 더 저렴합니다. 'Down Down' 앱(Coles)이나 'Woolworths Discovery'를 사용해서 가격을 확인하세요. 일반 브랜드를 구매하세요 — 같은 품질, 30% 더 저렴합니다. 폐점 시간에 가면 할인된 치킨과 빵집 상품을 찾을 수 있습니다." },
      { label: "Student Discounts", en: "Always ask: 'Do you do student discounts?' Many places offer 10-15% off with a valid student ID. This includes some restaurants, cinemas (Hoyts/Westworld), electronics stores, and software (Apple, Microsoft, Adobe all offer education pricing).", ja: "いつも聞きましょう：「学生割引はありますか？」多くの店では有効な学生証で10〜15%割引になります。一部のレストラン、映画館（Hoyts/Westworld）、家電店、ソフトウェア（Apple、Microsoft、Adobeはいずれも教育価格を提供）が含まれます。", zh: "一定要问：“有学生折扣吗？”很多地方凭有效学生证可享10-15%的折扣，包括一些餐厅、影院（Hoyts/Westworld）、电子产品店，以及软件（Apple、Microsoft、Adobe都提供教育价）。", ko: "항상 물어보세요: '학생 할인이 있나요?' 많은 곳에서 유효한 학생 ID로 10-15% 할인해줍니다. 일부 식당, 영화관(Hoyts/Westworld), 전자제품 매장, 소프트웨어(Apple, Microsoft, Adobe 모두 교육 할인을 제공)에 해당됩니다." },
      { label: "Cheap Eats", en: "Sydney has great cheap food. Korean BBQ around Eastwood/Strathfield is affordable. Food courts in Westfield/Chinatown have meals for $10 AUD-15. Learn to cook — beans, rice, eggs, and frozen veggies can feed you for under $40 AUD/week.", ja: "シドニーには安くて美味しい食べ物がたくさんあります。イーストウッド／ストラスフィールド周辺の韓国焼肉は手頃です。Westfield／チャイナタウンのフードコートでは$10 AUD〜15で食事ができます。料理を覚えましょう — 豆、米、卵、冷凍野菜なら週$40 AUD以下で食べられます。", zh: "悉尼有很多便宜又好吃的东西。Eastwood/Strathfield一带的韩式烤肉很实惠。Westfield/唐人街的美食广场一餐$10 AUD-15。学会自己做饭——豆子、米饭、鸡蛋和冷冻蔬菜可以让你每周花不到$40 AUD就吃饱。", ko: "시드니에는 훌륭한 저렴한 음식이 있습니다. 이스트우드/스트라스필드 근처 한국 바비큐는 저렴합니다. Westfield/차이나타운의 푸드코트는 식사가 $10 AUD-15입니다. 요리를 배우세요 — 콩, 밥, 달걀, 냉장 채소로 주당 $40 AUD 이하로 먹을 수 있습니다." },
      { label: "Transportation Savings", en: "Get an Opal card for public transport — always cheaper than paying cash. If you're a full-time student, you can get a Concession Opal card (half price). Work out if a monthly pass is worth it vs pay-as-you-go. Ferries are gorgeous and sometimes the cheapest option!", ja: "公共交通にはOpal カードを取得しましょう — 現金よりいつも安いです。フルタイムの学生なら、コンセッション・Opal カード（半額）を取得できます。月額パスが都度払いより得かどうか計算しましょう。フェリーは景色が美しく、時に一番安い選択肢にもなります！", zh: "搭乘公共交通办一张Opal卡——总是比付现金便宜。如果你是全日制学生，可以办Concession Opal卡（半价）。算一算月票和按次付费哪个更划算。渡轮风景很美，有时还是最便宜的选择！", ko: "대중교통은 오팔 카드를 사용하세요 — 현금 대비 항상 저렴합니다. 전일제 학생이라면 Concession 오팔 카드(50% 할인)를 발급받을 수 있습니다. 월 정기권이 충전식(pay-as-you-go)보다 이득인지 계산해 보세요. 페리는 경치도 좋고, 같은 거리에서는 오히려 가장 저렴한 옵션이 되기도 합니다!" },
    ],
  },
];

export default function FinancePage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero — minimal text header, matches weather page style */}
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Money</En>
            <Ja>お金</Ja>
            <Zh>金钱</Zh><Ko>금융</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En translated>Finance &amp; banking</En>
            <Ja>ファイナンス＆銀行</Ja>
            <Zh>金融与银行</Zh><Ko>금융과 은행</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En translated>Everything about money in Australia — banking, tax, super, and budgeting.</En>
            <Ja>オーストラリアのお金に関するすべて — 銀行、税金、super、家計管理。</Ja>
            <Zh>关于在澳大利亚理财的一切 — 银行、税务、养老金和预算管理。</Zh>
            <Ko>호주에서의 돈에 관한 모든 것 — 은행, 세금, 퇴직연금, 예산 관리.</Ko>
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        
        <div className="space-y-12">
          {sections.map((section, i) => (
            <EditorialSection key={section.id} data={section} index={i} />
          ))}
        </div>

        <section className="mt-16 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-3">
            <En translated>Official resources</En>
            <Ja>公式リソース</Ja>
            <Zh>官方资源</Zh><Ko>공식 자료</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En translated>For official tax and super info.</En>
            <Ja>税金とsuperの公式情報はこちら。</Ja>
            <Zh>获取官方税务和养老金信息。</Zh>
            <Ko>공식 세금 및 퇴직연금 정보.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En translated>ATO (Australian Taxation Office) and Services Australia are the two official sources. Their websites have plain-English guides, downloadable forms, and calculators. Most questions can be answered by a 5-minute site search.</En>
            <Ja>ATO（オーストラリア国税庁）とServices Australiaが2つの公式情報源です。それぞれのウェブサイトにはわかりやすい英語のガイド、ダウンロードできる書式、計算ツールがあります。ほとんどの疑問は5分ほどのサイト内検索で解決できます。</Ja>
            <Zh>ATO（澳大利亚税务局）和Services Australia是两个官方来源。它们的网站提供通俗易懂的英文指南、可下载的表格和计算器。大多数问题只需花5分钟搜索网站就能找到答案。</Zh>
            <Ko>ATO(호주 세무서)와 Services Australia는 두 가지 공식 자료입니다. 웹사이트에는 쉬운 영어 가이드, 다운로드 가능한 양식, 계산기가 있습니다. 대부분의 질문은 5분 정도의 사이트 검색으로 답할 수 있습니다.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.ato.gov.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">ATO ↗</a>
            <a href="https://www.servicesaustralia.gov.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Services Australia ↗</a>
          </div>
        </section>
      </div>

      {/* Structured data for Google. Article = eligible for top-story /
          article rich results. BreadcrumbList = "Home › Finance" in SERP. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleLdJson({
              path: "finance",
              headline: "Finance & banking in Australia for newcomers",
              description:
                "Open a bank account, apply for a TFN, claim superannuation, lodge a tax return — practical money and banking essentials in Australia.",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLdJson([{ name: "Home", path: "" }, { name: "Finance", path: "finance" }])
          ),
        }}
      />

      {/* Contextual next-steps — internal link graph fix */}
      <RelatedContent
        items={[
          {
            href: "/cost-of-living",
            title: { en: "Cost of Living in Sydney", ja: "シドニーの生活費", zh: "悉尼的生活成本", ko: "시드니 생활비" },
            description: {
              en: "Rent, food, transport, bills — real prices updated for 2026.", ja: "家賃、食費、交通費、光熱費 — 2026年に更新された実際の価格。", zh: "房租、伙食、交通、账单——2026年更新的真实价格。",
              ko: "임대료, 식비, 교통비, 공과금 — 2026년 업데이트된 실제 가격.",
            },
          },
          {
            href: "/apartment",
            title: { en: "Renting in Australia", ja: "オーストラリアでの賃貸", zh: "在澳大利亚租房", ko: "호주 부동산과 임대" },
            description: {
              en: "Lease, bond, flatmates — and how your TFN ties into rental applications.", ja: "賃貸契約、保証金、ルームメイト — そしてTFNが賃貸申込にどう関わるか。", zh: "租约、押金、合租室友——以及你的TFN如何影响租房申请。",
              ko: "임대차 계약, 보증금, 쉐어하우스 — 그리고 임대 신청과 TFN의 관계.",
            },
          },
          {
            href: "/visa",
            title: { en: "Visa Guide", ja: "ビザガイド", zh: "签证指南", ko: "비자 가이드" },
            description: {
              en: "Tax residency changes by visa type. Pick the right one before you file.", ja: "税務上の居住者区分はビザの種類によって変わります。申告する前に正しいものを選びましょう。", zh: "税务居民身份因签证类型而异。申报前先选对类型。",
              ko: "비자 종류에 따라 세법상 거주자 신분이 달라집니다. 세금 신고 전 확인.",
            },
          },
          {
            href: "/workplace",
            title: { en: "Workplace rights", ja: "職場の権利", zh: "职场权利", ko: "직장 권리" },
            description: {
              en: "Award wages, payslips, super contributions — your employer has obligations.", ja: "裁定賃金、給与明細、super 拠出 — 雇用主には義務があります。", zh: "裁定工资、工资单、养老金缴款——你的雇主负有义务。",
              ko: "임금, 급여명세서, 퇴직연금 납입 — 고용주의 법적 의무.",
            },
          },
        ]}
      />
    </div>
  );
}

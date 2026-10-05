// Server component — bilingual Australian workplace guide.
// Redesigned in editorial style: full-bleed hero image with dual CTAs
// (matches the homepage vocabulary), persona chips, then a vertical
// sequence of EditorialSection cards (some with image banners).

import type { Metadata } from "next";
import { headers } from "next/headers";
import { pageMeta } from "@/lib/page-meta";
import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { Clipboard, Coin, Handshake, PersonSpeaking, ShieldCheck, Star } from "@/components/Icons";
import { seoFor, withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";

export async function generateMetadata(): Promise<Metadata> {
  // Per request, so the tab title and the search-result headline are in the reader's
  // language. The canonical and hreflang come from the root layout, which reads the same
  // header. `Metadata` is imported by every page that uses withSeo.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return withSeo({

  ...seoFor("/workplace", locale),
  title: pageMeta("/workplace", locale).title,
  description: pageMeta("/workplace", locale).description,
  },
  "/workplace"
);
}


type WorkplaceSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; koLabel?: string; jaLabel?: string; zhLabel?: string; en: string; ko: string; ja?: string; zh?: string }>;
};

const sections: WorkplaceSection[] = [
  {
    id: "workplace-culture",
    iconKey: "Handshake",
    accent: "sunset",
    title: "Workplace Culture",
    koTitle: "직장 문화",
    jaTitle: "\u8077\u5834\u6587\u5316",
    zhTitle: "\u804c\u573a\u6587\u5316",
    desc: "What makes Aussie workplaces different",
    koDesc: "호주 직장이 다른 점",
    jaDesc: "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306e\u8077\u5834\u304c\u9055\u3046\u7406\u7531",
    zhDesc: "\u6fb3\u6d32\u804c\u573a\u6709\u4f55\u4e0d\u540c",
    img: "/images/unsplash-1497366216548-37526070297c.jpg",
    items: [
      { label: "Direct Communication", jaLabel: "\u76f4\u63a5\u7684\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3", zhLabel: "\u76f4\u63a5\u6c9f\u901a", koLabel: "\uc9c1\uc811\uc801\uc778 \uc18c\ud1b5", en: "Australians are direct. If something is wrong, your manager will tell you straight — it's not rude, it's how things get done. There's very little 'saving face' in the way you might find in some Asian workplaces.", ja: "オーストラリア人は率直です。問題があれば、上司ははっきりと伝えます——それは無礼ではなく、物事を進める方法です。一部のアジアの職場で見られるような「面子」を保つ文化はほとんどありません。", zh: "澳大利亚人很直接。如果出了问题，经理会直截了当地告诉你——这不是无礼，而是做事的方式。这里几乎没有某些亚洲职场中那种“顾及面子”的做法。", ko: "호주인들은 직설적입니다. 문제가 있으면 매니저가 바로 말합니다 — 무례한 게 아니라 일을 처리하는 방식입니다. 아시아 직장에서 흔한 '체면' 문화가 거의 없습니다." },
      { label: "Flat Hierarchy", jaLabel: "\u30d5\u30e9\u30c3\u30c8\u306a\u968e\u5c64", zhLabel: "\u6241\u5e73\u5c42\u7ea7", koLabel: "\uc218\ud3c9\uc801 \uc870\uc9c1 \ubb38\ud654", en: "Managers and CEOs are approachable. You call people by their first name — even the boss. Hierarchy doesn't mean formality. A cleaner and a director might share the same lunch table.", ja: "上司やCEOも気軽に話せる存在です。上司であっても、ファーストネームで呼びます。上下関係は形式ばったものではありません。清掃員と役員が同じランチテーブルを囲むこともあります。", zh: "经理和CEO都很平易近人。人们以名字相称——即使是老板也一样。等级并不意味着拘谨。清洁工和总监可能同桌吃午饭。", ko: "조직 구조가 수평적입니다. 매니저나 CEO도 접근하기 쉽습니다. 상사라도 이름(퍼스트 네임)으로 부릅니다. 청소부와 디렉터가 같은 점심 테이블을 쓸 정도입니다." },
      { label: "Work-Life Balance", jaLabel: "\u30ef\u30fc\u30af\u30e9\u30a4\u30d5\u30d0\u30e9\u30f3\u30b9", zhLabel: "\u5de5\u4f5c\u4e0e\u751f\u6d3b\u5e73\u8861", koLabel: "\uc77c\uacfc \uc0b6\uc758 \uade0\ud615", en: "Aussies value work-life balance. Expect to leave on time. Overtime is not expected in most jobs. 'She'll be right' (괜찮을 거야) is a common attitude — don't over-stress about small problems.", ja: "オーストラリア人はワーク・ライフ・バランスを重視します。定時退社が当たり前です。ほとんどの仕事で残業は想定されていません。「She'll be right（なんとかなる）」という考え方が一般的で、小さな問題で過度にストレスを抱える必要はありません。", zh: "澳大利亚人重视工作与生活的平衡。通常按时下班。大多数工作并不预期加班。“She'll be right”（没事的）是一种常见态度——不要为小问题过度紧张。", ko: "호주인들은 워라밸(일과 삶의 균형)을 중요시합니다. 정시 퇴근이 일반적입니다. 대부분의 직장에서 야근은 예상하지 않습니다. 작은 문제에 너무 스트레스받지 마세요." },
      { label: "Team Culture", jaLabel: "\u30c1\u30fc\u30e0\u6587\u5316", zhLabel: "\u56e2\u961f\u6587\u5316", koLabel: "\ud300 \ubb38\ud654", en: "Teams are collaborative. 'Bringing a plate' (각자 음식을 가져와서 나누는 것) for morning tea or Friday drinks after work is common. Participate to build relationships — it matters.", ja: "チームは協力的です。モーニングティーや仕事後の金曜の飲み会で「Bringing a plate」（各自で料理を持ち寄って分けること）はよく行われます。関係づくりのために参加しましょう——それが大切です。", zh: "团队讲求协作。在上午茶或下班后的周五聚会中“自带一道菜”（各自带一道菜来分享）很常见。为建立关系而参与其中——这很重要。", ko: "팀워크 문화가 강합니다. '브링잉 어 플레이트'(각자 음식을 가져와 공유)나 퇴근 후 금요 음료는 흔한 일입니다. 관계 형성에 참여하세요." },
      { label: "The 'She'll Be Right' Mentality", jaLabel: "\u306a\u3093\u3068\u304b\u306a\u308b\u7cbe\u795e", zhLabel: "\u300cShe'll be right\u300d\u5fc3\u6001", koLabel: "\uad1c\ucc2e\uc544\uc9c8 \uac70\uc57c \uc2dd \uc0ac\uace0\ubc29\uc2dd", en: "This classic Aussie phrase means 'it'll be okay'. Aussies don't panic over minor issues. Problems get solved, but without the urgency or stress you might be used to. It can take getting used to, but it's one of the best things about working here.", ja: "この定番のオーストラリア表現は『大丈夫だよ』という意味です。オーストラリア人は小さな問題で慌てません。問題は解決されますが、あなたが慣れているかもしれない緊迫感やストレスはありません。慣れるまで時間がかかることもありますが、ここで働く上での最高の魅力の一つです。", zh: "这个经典的澳洲说法意思是“没问题的”。澳洲人不会为小事惊慌。问题会被解决，但没有你可能习惯的那种紧迫感或压力。可能需要一段时间适应，但这正是在这里工作最棒的地方之一。", ko: "이 전형적인 호주 표현은 '괜찮을 거야'라는 뜻입니다. 작은 문제에 당황하지 않습니다. 문제는 해결되지만, 당신이 익숙할 수도 있는 긴박감이나 스트레스는 없습니다. 적응이 필요할 수 있지만, 여기서 일하는 최고의 장점 중 하나입니다." },
    ],
  },
  {
    id: "speaking-up",
    iconKey: "PersonSpeaking",
    accent: "amber",
    title: "Speaking Up",
    koTitle: "의견 표출",
    jaTitle: "\u610f\u898b\u3092\u8ff0\u3079\u308b",
    zhTitle: "\u6562\u4e8e\u53d1\u58f0",
    desc: "How to raise concerns and give feedback at work",
    koDesc: "직장에서 문제를 제기하고 피드백을 주는 방법",
    jaDesc: "\u8077\u5834\u3067\u61f8\u5ff5\u3092\u4f1d\u3048\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3059\u308b\u65b9\u6cd5",
    zhDesc: "\u5982\u4f55\u5728\u5de5\u4f5c\u4e2d\u63d0\u51fa\u5173\u5207\u548c\u7ed9\u4e88\u53cd\u9988",
    items: [
      { label: "Direct Feedback is Normal", jaLabel: "\u76f4\u63a5\u7684\u306a\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306f\u666e\u901a", zhLabel: "\u76f4\u63a5\u53cd\u9988\u662f\u5e38\u6001", koLabel: "\uc9c1\uc811\uc801\uc778 \ud53c\ub4dc\ubc31\uc740 \ub2f9\uc5f0", en: "Aussies will tell you directly if there's an issue. This is not personal — it's professional. Don't take it as an attack. And equally, you are expected to speak up if something isn't right.", ja: "問題があれば、オーストラリア人は直接的に伝えます。これは個人的なものではなく、プロフェッショナルなものです。攻撃と受け取らないでください。同じように、何かおかしいと感じたら、あなたも声を上げることが求められます。", zh: "如果有问题，澳洲人会直接告诉你。这不是针对个人——这是职业化的表现。不要把它当作攻击。同样地，如果有什么不对劲，也期望你能主动说出来。", ko: "호주인들은 문제가 있으면 바로 말해줍니다. 개인적인 게 아니라 전문적인 것입니다. 공격으로 받아들이지 마세요. 반대로, 무언가 잘못되었으면 당신도 의문을 제기해야 합니다." },
      { label: "How to Raise Issues", jaLabel: "\u554f\u984c\u306e\u63d0\u8d77\u65b9\u6cd5", zhLabel: "\u5982\u4f55\u63d0\u51fa\u95ee\u9898", koLabel: "\ubb38\uc81c \uc81c\uae30 \ubc29\ubc95", en: "Start with facts, not emotions. 'I've noticed X happens and it causes Y problem' is better than 'X always ruins everything'. Be specific, be calm, suggest a solution if you have one.", ja: "感情ではなく事実から始めましょう。『Xが起きてYの問題を引き起こしていることに気づきました』は、『Xはいつもすべてを台無しにする』よりも良いです。具体的に、冷静に、解決策があれば提案しましょう。", zh: "从事实开始，而不是从情绪开始。“我注意到X会发生，并导致Y问题”比“X总是毁掉一切”更好。要具体、冷静，如果你有解决方案就提出来。", ko: "감정보다 사실부터 말하세요. 'X가 일어나고 Y문제를 야기한다는 것을 확인했습니다'가 'X가 항상 모든 걸 망칩니다'보다 좋습니다. 구체적으로, 침착하게, 해결책이 있다면 제안하세요." },
      { label: "Know Your Rights", jaLabel: "\u81ea\u5206\u306e\u6a29\u5229\u3092\u77e5\u308b", zhLabel: "\u4e86\u89e3\u4f60\u7684\u6743\u5229", koLabel: "\uad8c\ub9ac\ub97c \uc544\uc138\uc694", en: "In Australia, it's illegal to fire someone for raising a workplace issue (this is called 'adverse action'). If you feel you've been treated unfairly after raising a concern, you have legal protections.", ja: "オーストラリアでは、職場の問題を提起したことを理由に解雇することは違法です（これは『不利益取扱い』と呼ばれます）。懸念を提起した後に不当に扱われたと感じたら、法的保護を受けられます。", zh: "在澳大利亚，因为提出职场问题而解雇某人是违法的（这被称为“不利行动”）。如果你在提出疑虑后感到受到不公平对待，你有法律保护。", ko: "호주에서는 직장 문제를 제기한 사람을 해고하는 것은 불법입니다('부당한 행위'라고 합니다). 문제 제기 후 불공정하게 대우받았다고 느끼면 법적 보호를 받을 수 있습니다." },
      { label: "Constructive vs Destructive", jaLabel: "\u5efa\u8a2d\u7684\u3068\u7834\u58ca\u7684", zhLabel: "\u5efa\u8bbe\u6027\u8fd8\u662f\u7834\u574f\u6027", koLabel: "\uac74\uc124\uc801 vs \ud30c\uad34\uc801", en: "Feedback is valued — but destructively criticising colleagues or managers is not. If you have a serious issue with someone, handle it privately and respectfully, not in front of others.", ja: "フィードバックは重視されますが、同僚や上司を破壊的に批判することは許されません。誰かと深刻な問題がある場合は、他の人の前ではなく、非公開で敬意をもって対応しましょう。", zh: "反馈受到重视——但破坏性地批评同事或经理则不行。如果你与某人有严重问题，请私下且尊重地处理，而不是当着别人的面。", ko: "건설적인 피드백은 환영받습니다 — 하지만 동료나 상사를 파괴적으로 비판하는 것은 안 됩니다. 누군가와 심각한 문제가 있다면 공개적으로가 아니라 조용히, 그리고 존중하는 태도로 처리하세요." },
    ],
  },
  {
    id: "casual-permanent",
    iconKey: "Clipboard",
    accent: "coast",
    title: "Casual vs Permanent",
    koTitle: "캐주얼 대 정규직",
    jaTitle: "\u30ab\u30b8\u30e5\u30a2\u30eb\u3068\u6b63\u898f\u96c7\u7528",
    zhTitle: "\u4e34\u65f6\u5de5\u4e0e\u6b63\u5f0f\u5458\u5de5",
    desc: "Understanding your employment type",
    koDesc: "고용 형태 이해하기",
    jaDesc: "\u81ea\u5206\u306e\u96c7\u7528\u5f62\u614b\u3092\u7406\u89e3\u3059\u308b",
    zhDesc: "\u4e86\u89e3\u4f60\u7684\u96c7\u4f63\u7c7b\u578b",
    items: [
      { label: "What is a Casual?", jaLabel: "\u30ab\u30b8\u30e5\u30a2\u30eb\u5f93\u696d\u54e1\u3068\u306f\uff1f", zhLabel: "\u4ec0\u4e48\u662f\u4e34\u65f6\u5de5\uff1f", koLabel: "\uce90\uc8fc\uc5bc\uc774\ub780?", en: "A casual employee has no guaranteed hours and can be offered work when available. They receive a 25% 'casual loading' extra pay on top of the base rate to compensate for lack of sick leave and holiday pay.", ja: "カジュアル従業員には保証された労働時間がなく、必要に応じて仕事を提供されることがあります。病気休暇や有給休暇がないことを補うため、基本給に加えて25%の『カジュアル・ローディング』という追加賃金を受け取ります。", zh: "临时员工没有保证的工作时间，可以在有工作时被安排上班。他们在基本时薪之外获得25%的“临时工补贴”，以弥补没有病假和带薪年假。", ko: "캐주얼 직원은 보장된 근무 시간이 없으며 가능한 경우 근무를 제공받을 수 있습니다. 연간 휴가와 병가 지급이 없음을 보상하기 위해 기본급에 25%의 '캐주얼 로딩' 추가 급여를 받습니다." },
      { label: "What is a Permanent Employee?", jaLabel: "\u6b63\u898f\u96c7\u7528\u3068\u306f\uff1f", zhLabel: "\u4ec0\u4e48\u662f\u6b63\u5f0f\u5458\u5de5\uff1f", koLabel: "\uc815\uaddc\uc9c1\uc774\ub780?", en: "Permanent employees (also called 'full-time') have guaranteed minimum hours and receive sick leave, annual leave (holiday pay), and other benefits. Most Australians are permanent employees.", ja: "正規従業員（『フルタイム』とも呼ばれます）は最低労働時間が保証され、病気休暇、年次有給休暇、その他の福利厚生を受け取ります。ほとんどのオーストラリア人は正規従業員です。", zh: "正式员工（也称为“全职”）拥有保证的最低工作时间和病假、年假（带薪休假）以及其他福利。大多数澳大利亚人都是正式员工。", ko: "정규 직원('전일제'라고도 함)은 보장된 최소 근무 시간을 가지고 있으며 병가, 연차 휴가(휴식 근무), 기타 혜택을 받습니다. 대부분의 호주인은 정규 직원입니다." },
      { label: "Converting from Casual to Permanent", jaLabel: "\u30ab\u30b8\u30e5\u30a2\u30eb\u304b\u3089\u6b63\u898f\u3078\u306e\u8ee2\u63db", zhLabel: "\u4ece\u4e34\u65f6\u5de5\u8f6c\u4e3a\u6b63\u5f0f\u5458\u5de5", koLabel: "\uce90\uc8fc\uc5bc\uc5d0\uc11c \uc815\uaddc\uc9c1 \uc804\ud658", en: "After 6-12 months of regular shifts, a casual employee can request to become permanent. Employers don't have to say yes, but many do if you've been reliable. It's worth asking — permanent means security and benefits.", ja: "6〜12か月間定期的にシフトに入った後、カジュアル従業員は正規雇用への転換を申請できます。雇用主は必ずしも承諾する必要はありませんが、信頼できる人であれば多くの場合承諾します。聞いてみる価値はあります — 正規雇用は安定と福利厚生を意味します。", zh: "在定期排班6至12个月后，临时员工可以申请转为正式员工。雇主不必答应，但如果你一直很可靠，很多人会同意。值得一问——正式员工意味着稳定和福利。", ko: "6-12개월 동안 정기적으로 근무한 후 캐주얼 직원은 정규직 전환을 요청할 수 있습니다. 고용주가 반드시 승인해야 하는 것은 아니지만, 당신이 신뢰할 수 있었다면 많은 경우 승낙합니다. 요청할 가치가 있습니다 — 정규직은 안정성과 혜택을 의미합니다." },
      { label: "Part-Time", jaLabel: "\u30d1\u30fc\u30c8\u30bf\u30a4\u30e0", zhLabel: "\u517c\u804c", koLabel: "\ud30c\ud2b8\ud0c0\uc784", en: "Part-time employees work set hours (less than 38 per week) and receive prorated sick and annual leave. A part-time employee can increase their hours by agreement with their employer.", ja: "パートタイム従業員は決まった時間（週38時間未満）働き、按分された病気休暇と年次有給休暇を受け取ります。パートタイム従業員は雇用主との合意により労働時間を増やすことができます。", zh: "兼职员工按固定时间工作（每周少于38小时），并获得按比例计算的病假和年假。兼职员工可以通过与雇主达成协议来增加工作时间。", ko: "파트타임 직원은 정해진 근무 시간(주 38시간 미만)으로 근무하며 비례 계산된 병가와 연차를 받습니다. 파트타임 직원은 고용주와 합의하여 근무 시간을 늘릴 수 있습니다." },
    ],
  },
  {
    id: "award-super",
    iconKey: "Coin",
    accent: "sage",
    title: "Award & Super",
    koTitle: "급여와 퇴직금",
    jaTitle: "Award\u3068super",
    zhTitle: "Award\u4e0e\u517b\u8001\u91d1",
    desc: "Minimum pay standards and superannuation",
    koDesc: "최저 임금 기준과 퇴직연금",
    jaDesc: "\u6700\u4f4e\u8cc3\u91d1\u57fa\u6e96\u3068super\uff08\u30b9\u30fc\u30d1\u30fc\uff09",
    zhDesc: "\u6700\u4f4e\u85aa\u916c\u6807\u51c6\u548c\u517b\u8001\u91d1",
    items: [
      { label: "What is an Award?", jaLabel: "Award\u3068\u306f\uff1f", zhLabel: "\u4ec0\u4e48\u662fAward\uff1f", koLabel: "Award\ub780?", en: "An Award is a legal document that sets minimum pay and conditions for specific industries or jobs. If you're in a job covered by an Award, you must be paid at least the Award rate — not less.", ja: "Award（労働裁定）は、特定の業界や職種の最低賃金と労働条件を定めた法的文書です。Awardの対象となる仕事に就いている場合、少なくともAwardの賃率以上を支払われなければなりません。", zh: "Award（劳资裁定）是一份法律文件，规定了特定行业或工作的最低薪酬和条件。如果你的工作受Award覆盖，你必须至少按Award标准获得薪酬——不能更低。", ko: "Award는 특정 업종이나 직종에 대한 최저 임금과 근무 조건을 정한 법적 문서입니다. Award 적용 대상 직종에 있다면 최소한 Award 임금률을 받아야 합니다." },
      { label: "Minimum Wage", jaLabel: "\u6700\u4f4e\u8cc3\u91d1", zhLabel: "\u6700\u4f4e\u5de5\u8d44", koLabel: "\ucd5c\uc800 \uc784\uae08", en: "Australia has a national minimum wage. As of 2024, it's approximately $23 AUD per hour for adult employees. This applies if no Award covers your job.", ja: "オーストラリアには全国最低賃金があります。2024年時点で、成人従業員は1時間あたり約$23 AUDです。これはあなたの仕事がAwardの対象でない場合に適用されます。", zh: "澳大利亚有全国最低工资。截至2024年，成年员工约为每小时$23 AUD。如果你的工作不受Award覆盖，则适用此标准。", ko: "호주에는 전국 최저 임금이 있습니다. 2024년 기준 성인 직원 기준 시간당 약 $23 AUD입니다. Award 적용 대상이 아닌 경우 이 임금이 적용됩니다." },
      { label: "Superannuation", jaLabel: "super\uff08\u30b9\u30fc\u30d1\u30fc\uff09", zhLabel: "\u517b\u8001\u91d1\uff08super\uff09", koLabel: "\ud1f4\uc9c1\uc5f0\uae08 (Super)", en: "Superannuation (super) is money your employer must pay into your super fund — currently 11.5% of your wages. It goes into your nominated super fund and is accessible when you retire.", ja: "super（スーパー）は、雇用主があなたのsuper ファンドに支払わなければならないお金で、現在は賃金の11.5%です。指定したsuper ファンドに積み立てられ、退職時に引き出すことができます。", zh: "养老金（super）是雇主必须支付到你的养老金账户的钱——目前为工资的11.5%。它会存入你指定的养老金账户，退休时可以取用。", ko: "퇴직연금(super)은 고용주가 당신의 퇴직연금 계좌에 납부해야 하는 금액으로, 현재 임금의 11.5%입니다. 지정한 퇴직연금 계좌에 납부되며 퇴직 시 인출 가능합니다." },
      { label: "Payslips", jaLabel: "\u7d66\u4e0e\u660e\u7d30", zhLabel: "\u5de5\u8d44\u5355", koLabel: "\uae09\uc5ec\uba85\uc138\uc11c", en: "You must receive a payslip within 1 day of being paid. It must show: your hours, pay rate, any overtime, deductions, and super contributions. You can check your pay against the Award or minimum wage online.", ja: "賃金を受け取ってから1日以内に給与明細を受け取らなければなりません。労働時間、賃率、残業代、控除、super 拠出金が記載されている必要があります。オンラインでAwardまたは最低賃金と照らし合わせて賃金を確認できます。", zh: "你必须在收到工资后的1天内收到工资单。工资单必须显示：你的工时、薪酬标准、任何加班费、扣款和养老金缴款。你可以在网上对照Award或最低工资核查你的薪酬。", ko: "급여를 받은 후 1일 이내에 급여 명세서를 받아야 합니다. 근무 시간, 임금률, 야근 수당, 공제, 퇴직연금 기여금을 표시해야 합니다. Award 또는 최저 임금에 맞게 급여를 확인할 수 있습니다." },
    ],
  },
  {
    id: "casual-rights",
    iconKey: "ShieldCheck",
    accent: "stone",
    title: "Casual Rights",
    koTitle: "캐주얼 노동자 권리",
    jaTitle: "\u30ab\u30b8\u30e5\u30a2\u30eb\u5f93\u696d\u54e1\u306e\u6a29\u5229",
    zhTitle: "\u4e34\u65f6\u5de5\u6743\u5229",
    desc: "Your rights as a casual worker in Australia",
    koDesc: "호주 캐주얼 노동자의 권리",
    jaDesc: "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u3067\u30ab\u30b8\u30e5\u30a2\u30eb\u52b4\u50cd\u8005\u3068\u3057\u3066\u306e\u6a29\u5229",
    zhDesc: "\u5728\u6fb3\u5927\u5229\u4e9a\u4f5c\u4e3a\u4e34\u65f6\u5458\u5de5\u7684\u6743\u5229",
    items: [
      { label: "You're Allowed to Say No", jaLabel: "\u30ce\u30fc\u3068\u8a00\u3063\u3066\u3088\u3044", zhLabel: "\u4f60\u53ef\u4ee5\u62d2\u7edd", koLabel: "\uac70\uc808\ud574\ub3c4 \ub429\ub2c8\ub2e4", en: "As a casual, you can refuse a shift. You don't have to give a reason. However, if you consistently refuse available shifts, the employer may reduce the shifts they offer you.", ja: "カジュアルとして、シフトを断ることができます。理由を伝える必要はありません。ただし、空いているシフトを継続的に断ると、雇用主が提供するシフトを減らすことがあります。", zh: "作为临时员工，你可以拒绝某个班次。你不必给出理由。但是，如果你持续拒绝可用的班次，雇主可能会减少提供给你的班次。", ko: "캐주얼로서 근무를 거절할 수 있습니다. 이유를 제공할 필요가 없습니다. 그러나 계속 이용 가능한 근무를 거절하면 고용주가 제공하는 근무 시간을 줄일 수 있습니다." },
      { label: "Casual Conversion", jaLabel: "\u6b63\u898f\u96c7\u7528\u3078\u306e\u8ee2\u63db", zhLabel: "\u4e34\u65f6\u5de5\u8f6c\u6b63", koLabel: "\uce90\uc8fc\uc5bc \uc804\ud658", en: "After 6 months (12 months for small businesses), your employer must offer you permanent part-time or full-time work if you've worked regular hours. You can also request conversion yourself at any time.", ja: "6か月後（小規模事業では12か月後）、定期的な労働時間で働いてきた場合、雇用主はあなたに正規のパートタイムまたはフルタイムの仕事を提供しなければなりません。いつでも自分から転換を申請することもできます。", zh: "6个月后（小型企业为12个月），如果你一直按固定时间工作，雇主必须向你提供正式的兼职或全职工作。你也可以随时自行申请转换。", ko: "6개월 후(소기업은 12개월) 정규 근무를 해왔다면 고용주가 정규 파트타임 또는 전일제 근무를 제안해야 합니다. 언제든지 본인이 직접 전환을 요청할 수도 있습니다." },
      { label: "Protection from Unfair Dismissal", jaLabel: "\u4e0d\u5f53\u89e3\u96c7\u304b\u3089\u306e\u4fdd\u8b77", zhLabel: "\u514d\u906d\u4e0d\u516c\u5e73\u89e3\u96c7\u7684\u4fdd\u62a4", koLabel: "\ubd80\ub2f9 \ud574\uace0 \ubcf4\ud638", en: "Casual employees who have been working regular hours for 6+ months are protected from unfair dismissal. If fired without proper reason, you can make a claim to the Fair Work Commission.", ja: "6か月以上定期的な労働時間で働いてきたカジュアル従業員は、不当解雇から保護されます。正当な理由なく解雇された場合、公正労働委員会（Fair Work Commission）に申立てができます。", zh: "连续6个月以上按固定时间工作的临时员工受免遭不公平解雇的保护。如果在没有正当理由的情况下被解雇，你可以向公平工作委员会（Fair Work Commission）提出申诉。", ko: "정규 근무를 6개월 이상 해온 캐주얼 직원은 부당한 해고로부터 보호받습니다. 정당한 이유 없이 해고되면 공정노동위원회에 청구할 수 있습니다." },
      { label: "Paid Leave Entitlements", jaLabel: "\u6709\u7d66\u4f11\u6687\u306e\u6a29\u5229", zhLabel: "\u5e26\u85aa\u4f11\u5047\u6743\u5229", koLabel: "\uc720\uae09 \ud734\uac00 \uad8c\ub9ac", en: "Casuals do NOT get paid sick leave or annual leave. That's why the 25% casual loading exists — it compensates for this. However, casual employees can still access unpaid carer's leave and compassionate leave.", ja: "カジュアル従業員は有給の病気休暇や年次有給休暇を取得できません。だからこそ25%のカジュアル・ローディングが存在するのです — これはその補償です。ただし、カジュアル従業員でも無給の介護休暇や忌引休暇は利用できます。", zh: "临时员工不享有带薪病假或年假。这就是25%临时工补贴存在的原因——它是对此的补偿。不过，临时员工仍然可以获得无薪的护理假和丧假。", ko: "캐주얼 직원은 유급 병가나 연차 휴가를 받지 않습니다. 그래서 25% 캐주얼 로딩이 존재하는 것입니다 — 이것은 그에 대한 보상입니다. 다만 캐주얼 직원도 무급 간병 휴가와 조의 휴가는 사용할 수 있습니다." },
    ],
  },
];

export default function WorkplacePage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero — minimal text header, matches weather page style */}
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Workplace</En>
            <Ja>職場</Ja>
            <Zh>职场</Zh>
            <Ko>직장</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En translated>Working in Australia</En>
            <Ja>オーストラリアで働く</Ja>
            <Zh>在澳大利亚工作</Zh>
            <Ko>호주에서 일하기</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En translated>Culture, pay, and your rights — what makes Aussie workplaces work.</En>
            <Ja>文化、給与、そしてあなたの権利 — オーストラリアの職場を成り立たせているもの。</Ja>
            <Zh>文化、薪酬和你的权利 — 是什么让澳洲职场运转起来。</Zh>
            <Ko>문화, 급여, 그리고 귀하의 권리 — 호주 직장문화의 모든 것.</Ko>
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
            <En translated>Know your workplace rights</En>
            <Ja>職場での権利を知る</Ja>
            <Zh>了解你的职场权利</Zh><Ko>직장 권리 알기</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En translated>Fair Work is your backstop.</En>
            <Ja>Fair Workがあなたの後ろ盾です。</Ja>
            <Zh>Fair Work 是你的后盾。</Zh>
            <Ko>Fair Work가 당신을 보호합니다.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En translated>Fair Work Commission handles workplace disputes — unpaid wages, unfair dismissal, bullying, and Award breaches. Free advice line, multilingual support, and a real ombudsman process.</En>
            <Ja>Fair Work Commissionは職場の紛争 — 未払い賃金、不当解雇、いじめ、Award違反 — を処理します。無料相談窓口、多言語サポート、そして本物のオンブズマン手続きを提供しています。</Ja>
            <Zh>Fair Work Commission 处理职场纠纷 — 未付工资、不公平解雇、欺凌和 Award 违规。提供免费咨询热线、多语言支持和真正的监察员程序。</Zh>
            <Ko>Fair Work Commission은 직장 분쟁을 처리합니다 — 미지급 급여, 부당한 해고, 괴롭힘, Award 위반. 무료 상담 전화, 다국어 지원, 그리고 진정한 옴부즈만 프로세스를 제공합니다.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.fairwork.gov.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">Fair Work ↗</a>
            <a href="https://www.fairwork.gov.au/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Free advice line ↗</a>
          </div>
        </section>
      </div>

      <RelatedContent
        items={[
          {
            href: "/finance",
            title: { en: "Finance & banking", ja: "金融と銀行", zh: "金融与银行", ko: "금융과 은행" },
            description: {
              en: "Payslip deductions, super contributions, and how to read your tax summary.", ja: "給与明細の控除、super 拠出金、そして納税概要の読み方。", zh: "工资单扣款、养老金缴款，以及如何读懂你的税务汇总。",
              ko: "급여명세서 공제, 퇴직연금 납입, 그리고 연말정산 읽는 법.",
            },
          },
          {
            href: "/visa",
            title: { en: "Visa Guide", ja: "ビザガイド", zh: "签证指南", ko: "비자 가이드" },
            description: {
              en: "Working Holiday vs Student vs Skilled — different hours, different rights.", ja: "ワーキングホリデー vs 学生 vs 技能ビザ — 労働時間も権利も異なります。", zh: "打工度假 vs 学生 vs 技术签证——不同的工时，不同的权利。",
              ko: "워홀 vs 학생 vs 기술 비자 — 근로 시간과 권리가 다릅니다.",
            },
          },
          {
            href: "/aussie-english",
            title: { en: "Aussie English", ja: "オーストラリア英語", zh: "澳式英语", ko: "호주 영어" },
            description: {
              en: "Workplace slang, polite disagreement, and meetings that say one thing and mean another.", ja: "職場のスラング、丁寧な意見の相違、そして本音と建前が異なる会議。", zh: "职场俚语、礼貌的分歧，以及口是心非的会议。",
              ko: "직장 슬랭, 정중한 거절 표현, 그리고 결정을 미루는 회의 언어.",
            },
          },
        ]}
      />
    </div>
  );
}

// Server component — bilingual Australian study guide.
// Redesigned in editorial style: full-bleed hero image with dual CTAs
// (matches the homepage vocabulary), persona chips, then a vertical
// sequence of EditorialSection cards (some with image banners).

import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { Book, Clipboard, Edit, Graduation, PersonBoard, PersonGroup, Target } from "@/components/Icons";
import { seoFor, withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";

export const metadata = withSeo(
  {

  ...seoFor("/study"),
  title: "Study in Australia — PTE, IELTS, University Culture & Student Guide | AussieGuides",
  description:
    "Complete guide to studying in Australia — PTE vs IELTS scores, costs, and strategies, Australian university culture, communicating with professors, group assignments, and academic integrity (Turnitin, plagiarism, AI use).",
  },
  "/study"
);

type StudySection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; koLabel?: string; jaLabel?: string; zhLabel?: string; en: string; ko: string; ja?: string; zh?: string }>;
};

const sections: StudySection[] = [
  {
    id: "english-tests",
    iconKey: "Edit",
    accent: "sunset",
    title: "English Tests: PTE & IELTS",
    koTitle: "영어 시험: PTE와 IELTS",
    jaTitle: "\u82f1\u8a9e\u8a66\u9a13\uff1aPTE\u3068IELTS",
    zhTitle: "\u82f1\u8bed\u8003\u8bd5\uff1aPTE\u4e0eIELTS",
    desc: "Everything you need to know about PTE and IELTS for Australian visas and university entry",
    koDesc: "호주 비자 및 대학 진학에 필요한 PTE와 IELTS 모든 것",
    jaDesc: "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306e\u30d3\u30b6\u3068\u5927\u5b66\u5165\u5b66\u306e\u305f\u3081\u306ePTE\u3068IELTS\u306e\u3059\u3079\u3066",
    zhDesc: "\u5173\u4e8e\u6fb3\u5927\u5229\u4e9a\u7b7e\u8bc1\u548c\u5927\u5b66\u5165\u5b66\u6240\u9700\u7684PTE\u4e0eIELTS\u77e5\u8bc6",
    img: "/images/study_notes.jpg",
    items: [
      { label: "What is PTE?",
      jaLabel: "PTE\u3068\u306f\uff1f",
      zhLabel: "\u4ec0\u4e48\u662fPTE\uff1f",
      koLabel: "PTE\ub780?", en: "PTE Academic (Pearson Test of English Academic) is a computer-based English test accepted by all Australian universities, vocational colleges, and for visa purposes. You get results in 1-2 days — much faster than IELTS.", ja: "PTE Academic（Pearson Test of English Academic）は、コンピュータベースの英語試験で、すべてのオーストラリアの大学、職業教育機関、およびビザの目的で認められています。結果は1〜2日で出ます — IELTSよりずっと速いです。", zh: "PTE Academic（培生学术英语考试）是一项机考英语测试，被所有澳大利亚大学、职业院校以及签证用途所认可。1 至 2 天即可拿到成绩 — 比 IELTS 快得多。", ko: "PTE Academic(Pearson Test of English Academic)는 컴퓨터로 치르는 영어 시험으로, 모든 호주 대학, 직업 교육 기관, 비자 심사에 인정됩니다. 결과가 1-2일 안에 나오므로 IELTS보다 훨씬 빠릅니다." },
      { label: "What is IELTS?",
      jaLabel: "IELTS\u3068\u306f\uff1f",
      zhLabel: "\u4ec0\u4e48\u662fIELTS\uff1f",
      koLabel: "IELTS\ub780?", en: "IELTS (International English Language Testing System) is the older, more widely recognised test. Used for student visas, skilled migration, and professional registration. Available in paper-based or computer-delivered format.", ja: "IELTS（International English Language Testing System）は、より古く、より広く認知されている試験です。学生ビザ、技術移民、専門職登録に使用されます。ペーパー形式またはコンピュータ形式で受験できます。", zh: "IELTS（国际英语语言测试系统）是历史更悠久、认可度更广的考试。用于学生签证、技术移民和职业注册。有纸笔考试和机考两种形式。", ko: "IELTS(International English Language Testing System)는 더 오래되고 널리 인정되는 시험입니다. 학생 비자, 기술 이민, 전문 등록에 사용됩니다. 지필로 또는 컴퓨터로 응시할 수 있습니다." },
      { label: "Which should I take?",
      jaLabel: "\u3069\u3061\u3089\u3092\u53d7\u3051\u308b\u3079\u304d\uff1f",
      zhLabel: "\u8be5\u8003\u54ea\u4e00\u4e2a\uff1f",
      koLabel: "\uc5b4\ub290 \uac83\uc744 \ubd10\uc57c \ud560\uae4c?", en: "For Australian student visas: both are accepted and equally weighted by DHA. PTE is faster and cheaper (~$340 AUD vs ~$385 AUD for IELTS). PTE is fully computerised — good if you're confident typing. IELTS may feel more familiar if you prefer paper.", ja: "オーストラリアの学生ビザの場合、どちらも認められ、DHAでは同等に扱われます。PTEのほうが速く、安価です（約$340 AUD、IELTSは約$385 AUD）。PTEは完全にコンピューター方式なので、タイピングに自信がある人に向いています。IELTSは紙の試験になじみがある人には、より安心して受けられるでしょう。", zh: "对于澳大利亚学生签证：两者都被认可，DHA 给予同等权重。PTE 更快、更便宜（约 $340 AUD，而 IELTS 约 $385 AUD）。PTE 完全采用电脑化考试——如果你打字有把握，会很适合。如果你更习惯纸笔考试，IELTS 可能让你感觉更熟悉。", ko: "호주 학생 비자용: 두 시험 모두 DHA에 의해 인정되며 동일한 비중을 갖습니다. PTE가 더 빠르고 저렴합니다(약 $340 AUD vs IELTS 약 $385 AUD). PTE는 전적으로 컴퓨터로 진행되므로 타자 실력이 자신 있으면 좋습니다. IELTS는 지필 시험에 익숙하다면 더 편하게 느낄 수 있습니다." },
      { label: "PTE scoring",
      jaLabel: "PTE\u306e\u63a1\u70b9",
      zhLabel: "PTE\u8bc4\u5206",
      koLabel: "PTE \ucc44\uc810 \ubc29\uc2dd", en: "PTE uses a 0-90 scale. Most universities require 50-60 overall for undergraduate or 58-65 for postgraduate. Score is calculated using AI across all four skills simultaneously — each question can affect multiple scores.", ja: "PTEは0～90のスケールを使用します。多くの大学では、学部課程で総合50～60、大学院で58～65が求められます。採点はAIによって4技能すべてを同時に評価して算出され、1つの問題が複数のスコアに影響することがあります。", zh: "PTE 采用 0～90 分制。大多数大学要求本科总分 50～60，研究生 58～65。评分由 AI 同时评估全部四项技能——每道题都可能影响多项分数。", ko: "PTE는 0-90점 척도를 사용합니다. 대부분의 대학은 학부에 50-60점, 대학원에 58-65점이 필요합니다. 채점은 네 가지 기능을 동시에 AI가 평가합니다 — 각 문항이 여러 점수에 영향을 미칠 수 있습니다." },
      { label: "IELTS scoring",
      jaLabel: "IELTS\u306e\u63a1\u70b9",
      zhLabel: "IELTS\u8bc4\u5206",
      koLabel: "IELTS \ucc44\uc810 \ubc29\uc2dd", en: "IELTS uses a 0-9 band scale. Most universities require 6.0-6.5 overall for undergraduate or 6.5-7.0 for postgraduate. Each skill is scored separately (0-9) and then averaged for an overall band score.", ja: "IELTSは0～9のバンドスケールを使用します。多くの大学では、学部課程で総合6.0～6.5、大学院で6.5～7.0が求められます。各技能は個別に（0～9で）採点され、その後平均して総合バンドスコアが算出されます。", zh: "IELTS 采用 0～9 分制。大多数大学要求本科总分 6.0～6.5，研究生 6.5～7.0。每项技能单独评分（0～9），然后取平均得出总分。", ko: "IELTS는 0-9밴드 척도를 사용합니다. 대부분의 대학은 학부에 6.0-6.5, 대학원에 6.5-7.0이 필요합니다. 네 가지 기능은 각각 개별적으로 채점된 후 평균을 내어 전체 밴드 점수를 산출합니다." },
      { label: "PTE format",
      jaLabel: "PTE\u306e\u5f62\u5f0f",
      zhLabel: "PTE\u8003\u8bd5\u5f62\u5f0f",
      koLabel: "PTE \uc2dc\ud5d8 \uad6c\uc131", en: "3 hours total, four sections in one sitting: Speaking & Writing (77-93 min), Reading (32-41 min), Listening (45-57 min). Questions are machine-adaptive — harder questions appear if you're doing well.", ja: "合計3時間、4つのセクションを一度に受けます：スピーキング＆ライティング（77～93分）、リーディング（32～41分）、リスニング（45～57分）。問題はコンピューターによって適応的に出題され、調子が良いとより難しい問題が出ます。", zh: "总计 3 小时，四个部分一次性完成：口语与写作（77～93 分钟）、阅读（32～41 分钟）、听力（45～57 分钟）。题目由机器自适应出题——如果你答得好，会出现更难的题目。", ko: "총 3시간, 네 섹션이 한 세션으로: 말하기 & 쓰기(77-93분), 읽기(32-41분), 듣기(45-57분). 문항이 시스템에 의해 자동으로 조절됩니다 — 잘하면 더 어려운 문항이 나옵니다." },
      { label: "IELTS format",
      jaLabel: "IELTS\u306e\u5f62\u5f0f",
      zhLabel: "IELTS\u8003\u8bd5\u5f62\u5f0f",
      koLabel: "IELTS \uc2dc\ud5d8 \uad6c\uc131", en: "Paper-based: 2h 45min. Computer-delivered: same content, faster results. Four sections: Listening (30 min), Reading (60 min), Writing (60 min), Speaking (11-14 min — face-to-face with examiner).", ja: "紙方式：2時間45分。コンピューター方式：内容は同じで、結果がより早く出ます。4つのセクション：リスニング（30分）、リーディング（60分）、ライティング（60分）、スピーキング（11～14分 — 試験官との対面）。", zh: "纸笔考试：2 小时 45 分钟。机考：内容相同，出结果更快。四个部分：听力（30 分钟）、阅读（60 分钟）、写作（60 分钟）、口语（11～14 分钟——与考官面对面）。", ko: "지필: 2시간 45분. 컴퓨터로 응시: 같은 내용, 더 빠른 결과. 네 섹션: 듣기(30분), 읽기(60분), 쓰기(60분), 말하기(11-14분 — 시험관과 대면)." },
      { label: "Why many test-takers prefer PTE",
      jaLabel: "\u591a\u304f\u306e\u53d7\u9a13\u8005\u304cPTE\u3092\u9078\u3076\u7406\u7531",
      zhLabel: "\u4e3a\u4ec0\u4e48\u8bb8\u591a\u8003\u751f\u66f4\u9752\u7750PTE",
      koLabel: "PTE\ub97c \uc120\ud638\ud558\ub294 \uc774\uc720", en: "Many test-takers find PTE easier because: speaking is into a microphone (no examiner judgement), questions are scored by machine (consistent across sittings), adaptive item selection means harder questions follow good answers, and templates work reliably in the writing section. Popular resources: E2 Language (YouTube) and MyPTE.", ja: "多くの受験者がPTEをより簡単だと感じる理由は、スピーキングがマイクに向かって行う形式（試験官の判断がない）、採点が機械によって行われる（受験回を通じて一貫している）、適応的な出題により良い解答の後には難しい問題が続く、ライティングセクションではテンプレートが確実に機能する、といった点です。人気の教材：E2 Language（YouTube）とMyPTE。", zh: "许多考生觉得 PTE 更容易，原因在于：口语是对着麦克风作答（没有考官的主观判断），题目由机器评分（各次考试标准一致），自适应出题意味着答得好就会遇到更难的题目，而且写作部分使用模板很可靠。热门资源：E2 Language（YouTube）和 MyPTE。", ko: "많은 한국 학생들이 PTE가 더 쉽다고 느끼는 이유: 1) 마이크로 녹음(시험관 판단 없음), 2) AI가 억양을 감점하지 않음, 3) 문항이 객관적이고 일관됨, 4) 쓰기에 템플릿 사용 가능. 대표적인 준비 자료: E2 Language(유튜브), MyPTE." },
      { label: "How to prepare",
      jaLabel: "\u6e96\u5099\u65b9\u6cd5",
      zhLabel: "\u5982\u4f55\u5907\u8003",
      koLabel: "\uc900\ube44 \ubc29\ubc95", en: "Allow 4-8 weeks of focused preparation. Practice with official test simulators. Focus on your weakest skill first. For PTE: E2 Language YouTube channel (free, excellent). For IELTS: British Council website has free practice tests.", ja: "集中して準備する期間として4～8週間を見ておきましょう。公式のテストシミュレーターで練習してください。まず最も苦手な技能に重点を置きましょう。PTEの場合：E2 LanguageのYouTubeチャンネル（無料で優れています）。IELTSの場合：British Councilのウェブサイトに無料の練習テストがあります。", zh: "留出 4～8 周的集中备考时间。用官方考试模拟器练习。先集中攻克你最弱的一项技能。PTE：E2 Language 的 YouTube 频道（免费，非常优秀）。IELTS：British Council 网站提供免费练习题。", ko: "집중 준비에 4-8주 정도 잡으세요. 공식 시뮬레이터로 연습하세요. 가장 약한 영역부터 중점적으로 공부하세요. PTE는 E2 Language(유튜브) — 무료이고 우수합니다. IELTS는 British Council 웹사이트에서 무료 연습 시험을 제공합니다." },
      { label: "When to book",
      jaLabel: "\u4e88\u7d04\u306e\u6642\u671f",
      zhLabel: "\u4f55\u65f6\u62a5\u540d",
      koLabel: "\uc608\uc57d \uc2dc\uae30", en: "Don't wait until the last minute. Most universities accept results up to 2 years old for admissions. DHA typically requires results within 1 year for visa applications. Book 2-3 months before your deadline to allow for a re-sit if needed.", ja: "ぎりぎりまで待たないでください。多くの大学は入学審査で最大2年前の結果まで認めます。DHAは通常、ビザ申請では1年以内の結果を求めます。必要なら再受験できるよう、締め切りの2～3か月前に申し込みましょう。", zh: "不要拖到最后一刻。大多数大学在录取时接受最多 2 年内的成绩。DHA 通常要求签证申请时的成绩在 1 年以内。在截止日期前 2～3 个月报名，以便必要时可以重考。", ko: "마감일에 쫓기지 말고 여유 있게 미리 보세요. 대부분의 대학은 입학 심사 시 최대 2년 된 성적도 인정합니다. DHA는 비자 신청 시 보통 1년 이내의 성적을 요구합니다. 재응시를 고려해 마감일 2-3개월 전에 예약하세요." },
    ],
  },
  {
    id: "uni-culture",
    iconKey: "Graduation",
    accent: "sage",
    title: "Aussie Uni Culture",
    koTitle: "호주 대학 문화",
    jaTitle: "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306e\u5927\u5b66\u6587\u5316",
    zhTitle: "\u6fb3\u6d32\u5927\u5b66\u6587\u5316",
    desc: "What university life is really like in Australia",
    koDesc: "호주 대학생활의 실제 모습",
    jaDesc: "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306e\u5927\u5b66\u751f\u6d3b\u306e\u5b9f\u969b",
    zhDesc: "\u6fb3\u5927\u5229\u4e9a\u5927\u5b66\u751f\u6d3b\u7684\u771f\u5b9e\u9762\u8c8c",
    items: [
      { label: "Large Lectures",
      jaLabel: "\u5927\u4eba\u6570\u306e\u8b1b\u7fa9",
      zhLabel: "\u5927\u8bfe\u8bb2\u5ea7",
      koLabel: "\ub300\uaddc\ubaa8 \uac15\uc758", en: "First-year lectures can have 200-500 students. Don't be intimidated — just sit near the front, take notes, and ask questions. Lectures are recorded online at most universities, so you can rewatch them later.", ja: "1年次の講義は200～500人の学生が集まることがあります。怖がらないでください — 前のほうに座り、ノートを取り、質問すればよいのです。ほとんどの大学では講義がオンラインで録画されるので、後で見返すことができます。", zh: "一年级的讲座可能有 200～500 名学生。别被吓到——坐在靠前的位置，做笔记，大胆提问就好。大多数大学的讲座都会在线录制，你之后可以回看。", ko: "1학년 강의는 200-500명의 학생이 있을 수 있습니다. 겁먹지 마세요 — 앞쪽에 앉고, 필기하고, 질문하세요. 대부분의 대학에서 강의는 온라인으로 녹화되므로 나중에 다시 볼 수 있습니다." },
      { label: "Approachable Professors",
      jaLabel: "\u6c17\u3055\u304f\u306a\u6559\u6388",
      zhLabel: "\u6559\u6388\u5e73\u6613\u8fd1\u4eba",
      koLabel: "\uce5c\uadfc\ud55c \uad50\uc218\ub2d8", en: "Aussie professors are generally friendly and approachable. They prefer you call them by their first name or 'Dr [Name]'. They expect you to ask questions, challenge ideas, and participate — that's part of learning here.", ja: "オーストラリアの教授は一般的に親しみやすく、話しかけやすいです。ファーストネームか「Dr [姓]」で呼ぶことを好みます。質問し、考えに異議を唱え、参加することを期待しています — それがここでの学びの一部です。", zh: "澳大利亚的教授通常友善又好接近。他们更希望你直呼其名，或称呼「Dr [姓]」。他们期待你提问、质疑观点并积极参与——这是这里学习的一部分。", ko: "호주 교수들은 일반적으로 친근하고 접근하기 쉽습니다. 이름(퍼스트 네임)이나 'Dr [성]'으로 부르는 것을 선호합니다. 질문하고, 아이디어에 도전하고, 참여하기를 기대합니다 — 그것이 여기서 배우는 방식입니다." },
      { label: "Group Work is Central",
      jaLabel: "\u30b0\u30eb\u30fc\u30d7\u30ef\u30fc\u30af\u304c\u4e2d\u5fc3",
      zhLabel: "\u5c0f\u7ec4\u4f5c\u4e1a\u662f\u6838\u5fc3",
      koLabel: "\uadf8\ub8f9 \ud65c\ub3d9 \uc911\uc2ec", en: "Almost every subject includes group assignments. You'll be assessed on how well your group works together. Australians value collaboration — learning to work with different people is part of the education.", ja: "ほとんどすべての科目にグループ課題が含まれます。グループがどれだけうまく協力できるかが評価されます。オーストラリア人は協働を重視します — さまざまな人と働くことを学ぶのも教育の一部です。", zh: "几乎每门科目都包含小组作业。你的成绩会取决于小组合作的效果。澳大利亚人重视协作——学会与不同的人共事也是教育的一部分。", ko: "거의 모든 과목에 그룹 과제가 포함됩니다. 그룹이 얼마나 잘 협력하는지 평가받습니다. 호주인들은 협력을 중요시합니다 — 다양한 사람들과 일하는 법을 배우는 것이 교육의 일부입니다." },
      { label: "Participation Matters",
      jaLabel: "\u53c2\u52a0\u304c\u91cd\u8996\u3055\u308c\u308b",
      zhLabel: "\u53c2\u4e0e\u5ea6\u5f88\u91cd\u8981",
      koLabel: "\ucc38\uc5ec\ub3c4 \uc911\uc694", en: "Tutorials (small group classes) often have a participation mark. You don't need to be an expert — just show up, listen, and contribute when you can. Saying 'I agree with that point' is participation.", ja: "チュートリアル（少人数クラス）では、しばしば参加点が付きます。専門家である必要はありません — 出席して、話を聞き、できるときに発言すればよいのです。「その点に賛成です」と言うだけでも参加になります。", zh: "辅导课（小班课）通常有参与分。你不需要是专家——只要出席、聆听，并在能发言时发言即可。说一句「我同意这个观点」也算参与。", ko: "튜토리얼(소규모 수업)에는 종종 참여 점수가 있습니다. 전문가일 필요는 없습니다 — 그냥 참석하고, 듣고, 가능할 때 기여하세요. '그 점에 동의합니다'라고 말하는 것도 참여입니다." },
      { label: "Self-Directed Learning",
      jaLabel: "\u81ea\u4e3b\u5b66\u7fd2",
      zhLabel: "\u81ea\u4e3b\u5b66\u4e60",
      koLabel: "\uc790\uae30\uc8fc\ub3c4 \ud559\uc2b5", en: "Lectures are just the starting point. You're expected to do reading, research, and study in your own time. A 12-credit-point subject typically expects about 10 hours of work per week (including classes).", ja: "講義はあくまで出発点です。読書や調査、学習は自分の時間で行うことが求められます。12単位の科目では、通常、週に約10時間の学習（授業を含む）が想定されています。", zh: "讲座只是起点。你需要用自己的时间阅读、研究和学习。一门 12 学分的科目通常预计每周约 10 小时的学习量（含上课时间）。", ko: "강의는 시작점일 뿐입니다. 독서, 연구, 학습은 스스로 해야 합니다. 12학점 과목은 일반적으로 주당 약 10시간의 학습 시간(수업 포함)이 필요합니다." },
    ],
  },
  {
    id: "talking-professors",
    iconKey: "PersonBoard",
    accent: "coast",
    title: "Talking to Professors",
    koTitle: "교수님과 대화하기",
    jaTitle: "\u6559\u6388\u3068\u306e\u8a71\u3057\u65b9",
    zhTitle: "\u4e0e\u6559\u6388\u6c9f\u901a",
    desc: "Email etiquette, office hours, and asking for help",
    koDesc: "이메일 예절, 오피스 아워, 도움 요청법",
    jaDesc: "\u30e1\u30fc\u30eb\u306e\u30de\u30ca\u30fc\u3001\u30aa\u30d5\u30a3\u30b9\u30a2\u30ef\u30fc\u3001\u52a9\u3051\u306e\u6c42\u3081\u65b9",
    zhDesc: "\u90ae\u4ef6\u793c\u4eea\u3001\u529e\u516c\u65f6\u95f4\u548c\u5bfb\u6c42\u5e2e\u52a9",
    items: [
      { label: "Email Etiquette",
      jaLabel: "\u30e1\u30fc\u30eb\u306e\u30de\u30ca\u30fc",
      zhLabel: "\u90ae\u4ef6\u793c\u4eea",
      koLabel: "\uc774\uba54\uc77c \uc608\uc808", en: "Start with 'Dear Dr [Name]' or 'Hi [First Name]' (check what they use). Keep it short and clear. Include your subject code and student ID. Sign off with your full name. Allow 2-3 business days for a reply.", ja: "「Dear Dr [姓]」または「Hi [名前]」で始めましょう（教授が使っている呼称を確認してください）。短く明確に書きましょう。科目コードと学生番号を記載してください。最後はフルネームで署名します。返信には2～3営業日かかると見込んでください。", zh: "以「Dear Dr [姓]」或「Hi [名]」开头（先看看对方习惯用哪种）。内容要简短清晰。写上科目代码和学生 ID。结尾用你的全名署名。回复一般需要 2～3 个工作日。", ko: "'Dear Dr [성]' 또는 'Hi [이름]'(교수가 사용하는 호칭 확인)으로 시작하세요. 짧고 명확하게 작성하세요. 과목 코드와 학번을 포함하세요. 본인의 전체 이름으로 마무리하세요. 답장까지 2-3영업일이 소요됩니다." },
      { label: "Office Hours",
      jaLabel: "\u30aa\u30d5\u30a3\u30b9\u30a2\u30ef\u30fc",
      zhLabel: "\u529e\u516c\u65f6\u95f4",
      koLabel: "\uc624\ud53c\uc2a4 \uc544\uc6cc", en: "Most professors have weekly office hours — drop-in times when you can visit their office without an appointment. Use these! Ask about assignments, lecture content, or career advice. They appreciate students who seek help.", ja: "ほとんどの教授には毎週のオフィスアワーがあります — 予約なしで研究室を訪ねられる時間です。ぜひ活用しましょう！課題や講義内容、キャリアの相談をしてもよいのです。助けを求める学生を教授は歓迎します。", zh: "大多数教授都有每周的办公时间——你无需预约就能去他们办公室的时间。好好利用！可以问作业、讲座内容或职业建议。他们欣赏主动求助的学生。", ko: "대부분의 교수들은 주간 오피스 아워가 있습니다 — 예약 없이 방문할 수 있는 시간입니다. 활용하세요! 과제, 강의 내용, 진로 상담에 대해 물어보세요. 도움을 구하는 학생을 좋아합니다." },
      { label: "How to Ask for an Extension",
      jaLabel: "\u5ef6\u9577\u306e\u983c\u307f\u65b9",
      zhLabel: "\u5982\u4f55\u7533\u8bf7\u5ef6\u671f",
      koLabel: "\uacfc\uc81c \uc5f0\uc7a5 \uc694\uccad \ubc29\ubc95", en: "If you need an extension on an assignment, email your lecturer before the deadline. Explain your situation briefly (illness, family emergency, etc.) and suggest how many extra days you need. Medical certificates help. Most lecturers are reasonable if you ask early.", ja: "課題の締め切り延長が必要な場合は、締め切り前に担当講師へメールを送りましょう。状況（病気、家族の急用など）を簡潔に説明し、何日延ばしてほしいかを伝えます。診断書があれば役立ちます。早めに申し出れば、ほとんどの講師は合理的に対応してくれます。", zh: "如果你需要延长作业截止日期，请在截止前给授课老师发邮件。简要说明你的情况（生病、家庭急事等），并提出需要多几天。医生证明会有帮助。只要及早提出，大多数老师都很通情达理。", ko: "과제 연기가 필요하면 마감일 전에 교수님께 이메일을 보내세요. 상황(질병, 가족 경조사 등)을 간략히 설명하고 필요한 추가 일수를 제안하세요. 진단서가 도움이 됩니다. 미리 요청하면 대부분의 교수들은 합리적으로 대응합니다." },
      { label: "Debate is Encouraged",
      jaLabel: "\u8b70\u8ad6\u306f\u6b53\u8fce\u3055\u308c\u308b",
      zhLabel: "\u9f13\u52b1\u8fa9\u8bba",
      koLabel: "\ud1a0\ub860 \uc7a5\ub824", en: "Aussie academic culture values critical thinking. Questioning what you read or hear in lectures is encouraged — as long as it's respectful. Professors may actively play devil's advocate to challenge your thinking.", ja: "オーストラリアの学術文化は批判的思考を重視します。敬意を払う限り、読んだり講義で聞いたりしたことに疑問を持つことは推奨されます。教授はあえて反対の立場を取って、あなたの考えを揺さぶることもあります。", zh: "澳大利亚的学术文化重视批判性思维。只要态度尊重，质疑你读到的或讲座上听到的内容是受鼓励的。教授有时会刻意扮演反方，来挑战你的思考。", ko: "호주 학계는 비판적 사고를 중요시합니다. 존중만 갖춘다면 강의에서 읽거나 들은 것에 질문하는 것이 장려됩니다. 교수들은 의도적으로 반대 입장을 취하며 당신의 사고를 자극하기도 합니다." },
      { label: "Don't Be Shy",
      jaLabel: "\u9060\u616e\u3057\u306a\u3044",
      zhLabel: "\u4e0d\u8981\u5bb3\u7f9e",
      koLabel: "\uc8fc\uc800\ud558\uc9c0 \ub9c8\uc138\uc694", en: "Many international students are hesitant to approach professors. Don't be. Professors are used to students from all over the world. They won't judge your English or your background. Asking for help shows initiative.", ja: "多くの留学生は教授に話しかけるのをためらいます。ためらわないでください。教授は世界中からの学生に慣れています。あなたの英語や背景を判断したりしません。助けを求めることは積極性の表れです。", zh: "许多留学生不敢主动接近教授。别这样。教授早已习惯了来自世界各地的学生。他们不会评判你的英语或背景。主动求助体现的是积极性。", ko: "많은 유학생들이 교수에게 접근하는 것을 망설입니다. 그러지 마세요. 교수들은 전 세계에서 온 학생들에게 익숙합니다. 영어 실력이나 배경을 판단하지 않습니다. 도움을 요청하는 것은 적극성을 보여줍니다." },
    ],
  },
  {
    id: "group-work",
    iconKey: "PersonGroup",
    accent: "amber",
    title: "Group Work",
    koTitle: "그룹 작업",
    jaTitle: "\u30b0\u30eb\u30fc\u30d7\u30ef\u30fc\u30af",
    zhTitle: "\u5c0f\u7ec4\u4f5c\u4e1a",
    desc: "How group assignments work and how to survive them",
    koDesc: "그룹 과제가 어떻게 운영되는지, 생존하는 방법",
    jaDesc: "\u30b0\u30eb\u30fc\u30d7\u8ab2\u984c\u306e\u4ed5\u7d44\u307f\u3068\u4e57\u308a\u5207\u308a\u65b9",
    zhDesc: "\u5c0f\u7ec4\u4f5c\u4e1a\u5982\u4f55\u8fd0\u4f5c\uff0c\u4ee5\u53ca\u5982\u4f55\u5e94\u5bf9\u81ea\u5982",
    items: [
      { label: "How Groups Are Formed",
      jaLabel: "\u30b0\u30eb\u30fc\u30d7\u306e\u6c7a\u307e\u308a\u65b9",
      zhLabel: "\u5c0f\u7ec4\u5982\u4f55\u7ec4\u5efa",
      koLabel: "\uadf8\ub8f9 \ud3b8\uc131 \ubc29\uc2dd", en: "Sometimes the lecturer assigns groups, sometimes you choose your own. If you can choose, try to pick people with different strengths (one good at writing, one at research, one at presenting).", ja: "講師がグループを決めることもあれば、自分で選ぶこともあります。自分で選べるなら、それぞれ異なる強み（書くのが得意な人、調査が得意な人、発表が得意な人）を持つ人を選ぶようにしましょう。", zh: "有时由老师分组，有时你自己选。如果可以自己选，尽量挑各自长处不同的人（一个擅长写作、一个擅长研究、一个擅长演讲）。", ko: "때로는 교수가 그룹을 지정하고, 때로는 직접 선택합니다. 선택할 수 있다면 각자 다른 강점(글쓰기, 연구, 발표)을 가진 사람들을 고르세요." },
      { label: "Group Size",
      jaLabel: "\u30b0\u30eb\u30fc\u30d7\u306e\u4eba\u6570",
      zhLabel: "\u5c0f\u7ec4\u4eba\u6570",
      koLabel: "\uadf8\ub8f9 \uc778\uc6d0", en: "Usually 2-4 people. Some larger subjects might have groups of 5-6. Everyone is expected to contribute equally. The assignment will have one mark for the whole group — so team dynamics matter.", ja: "通常は2～4人です。規模の大きい科目では5～6人のグループになることもあります。全員が平等に貢献することが求められます。課題はグループ全体で1つの成績が付くので、チームの力学が重要になります。", zh: "通常 2～4 人。一些人数较多的科目可能有 5～6 人的小组。每个人都应平等贡献。作业给整个小组一个分数——所以团队配合很重要。", ko: "보통 2-4명입니다. 큰 과목은 5-6명일 수도 있습니다. 모두가 동등하게 기여해야 합니다. 과제는 그룹 전체에 하나의 점수가 부여됩니다 — 팀 다이나믹스가 중요합니다." },
      { label: "Dealing with Free-Riders",
      jaLabel: "\u30d5\u30ea\u30fc\u30e9\u30a4\u30c0\u30fc\u3078\u306e\u5bfe\u51e6",
      zhLabel: "\u5e94\u5bf9\u642d\u4fbf\u8f66\u8005",
      koLabel: "\ubb34\uc784\uc2b9\ucc28\uc790 \ub300\ucc98", en: "If someone isn't contributing, first talk to them directly. Say 'We need your part by Friday to stay on track.' If that doesn't work, talk to your tutor. Most universities have a process for reporting unequal contributions.", ja: "誰かが貢献していない場合は、まず本人に直接話しましょう。「予定どおり進めるために、金曜日までにあなたの担当分が必要です」と伝えます。それでもうまくいかなければ、チューターに相談しましょう。ほとんどの大学には、不平等な貢献を報告する手続きがあります。", zh: "如果有人不出力，先直接和对方谈。可以说「为了按进度推进，我们周五前需要你负责的部分。」如果还是没用，就找辅导老师。大多数大学都有报告贡献不均的流程。", ko: "기여하지 않는 사람이 있으면 먼저 직접 이야기하세요. '금요일까지 당신 부분이 필요해요, 그래야 계획대로 진행됩니다.' 안 되면 튜터에게 이야기하세요. 대부분의 대학에는 불평등한 기여를 신고하는 절차가 있습니다." },
      { label: "Meeting Tips",
      jaLabel: "\u30df\u30fc\u30c6\u30a3\u30f3\u30b0\u306e\u30b3\u30c4",
      zhLabel: "\u5f00\u4f1a\u8d34\u58eb",
      koLabel: "\ud68c\uc758 \ud301", en: "Use WhatsApp or Discord for quick communication. Use Google Docs so everyone can work simultaneously. Set clear deadlines for each section. Have your first meeting early — not the night before the due date.", ja: "素早い連絡にはWhatsAppやDiscordを使いましょう。Google Docsを使えば全員が同時に作業できます。各パートの締め切りを明確に設定しましょう。最初のミーティングは早めに行いましょう — 提出前日の夜ではなく。", zh: "用 WhatsApp 或 Discord 快速沟通。用 Google Docs，让所有人都能同时协作。为每个部分设定明确的截止时间。第一次会议要尽早开——不要拖到交稿前一晚。", ko: "빠른 소통에는 WhatsApp이나 Discord를 사용하세요. Google Docs를 사용하면 모두가 동시에 작업할 수 있습니다. 각 섹션의 명확한 마감일을 설정하세요. 첫 모임은 일찍 가지세요 — 마감 전날이 아니라요." },
      { label: "Peer Assessment",
      jaLabel: "\u76f8\u4e92\u8a55\u4fa1",
      zhLabel: "\u540c\u4f34\u4e92\u8bc4",
      koLabel: "\ub3d9\ub8cc \ud3c9\uac00", en: "Some courses include peer assessment, where you rate your group members' contributions. Be honest but fair. If someone really didn't contribute, say so — it's part of the learning process.", ja: "一部の科目には、グループメンバーの貢献度を評価する相互評価が含まれます。正直に、しかし公平に評価しましょう。本当に貢献しなかった人がいれば、そう書いてよいのです — それも学習過程の一部です。", zh: "有些课程包含同伴互评，由你为小组成员的贡献打分。要诚实但公平。如果确实有人没有贡献，就如实写出——这也是学习过程的一部分。", ko: "일부 과목에서는 동료 평가(서로의 기여도를 평가)가 포함됩니다. 정직하되 공정하게 하세요. 누군가 정말로 기여하지 않았다고 말하세요 — 그것도 학습 과정의 일부입니다." },
    ],
  },
  {
    id: "academic-integrity",
    iconKey: "Book",
    accent: "rose",
    title: "Academic Integrity",
    koTitle: "학술 무결성",
    jaTitle: "\u5b66\u8853\u7684\u8aa0\u5b9f\u6027",
    zhTitle: "\u5b66\u672f\u8bda\u4fe1",
    desc: "Plagiarism, AI use, and referencing — the rules are strict",
    koDesc: "표절, AI 사용, 인용 — 규칙이 엄격합니다",
    jaDesc: "\u527d\u7a83\u3001AI\u5229\u7528\u3001\u5f15\u7528 \u2014 \u30eb\u30fc\u30eb\u306f\u53b3\u683c",
    zhDesc: "\u6284\u88ad\u3001AI\u4f7f\u7528\u548c\u5f15\u7528\u2014\u2014\u89c4\u5219\u5f88\u4e25\u683c",
    items: [
      { label: "What is Plagiarism?",
      jaLabel: "\u527d\u7a83\u3068\u306f\uff1f",
      zhLabel: "\u4ec0\u4e48\u662f\u6284\u88ad\uff1f",
      koLabel: "\ud45c\uc808\uc774\ub780?", en: "Using someone else's work (words, ideas, data, images) without proper acknowledgment is plagiarism. This includes copying from textbooks, websites, other students' work, or your own previous submissions (self-plagiarism). Penalties can range from a zero grade to expulsion.", ja: "他者の成果（言葉、アイデア、データ、画像）を適切に明示せずに使用することは剽窃です。これには教科書、ウェブサイト、他の学生の成果、あるいは自分が以前に提出したものからのコピー（自己剽窃）も含まれます。罰則は0点から退学まで及ぶことがあります。", zh: "未经恰当注明就使用他人的成果（文字、观点、数据、图片）属于抄袭。这包括从教科书、网站、其他学生的作业，或你自己以往提交的内容中复制（自我抄袭）。处罚从零分到开除不等。", ko: "타인의 작업(단어, 아이디어, 데이터, 이미지)을 적절한 인용 없이 사용하는 것은 표절입니다. 여기에는 교과서, 웹사이트, 다른 학생의 작업, 또는 이전에 제출한 본인의 작업(자기 표절)까지 포함됩니다. 처벌은 0점부터 퇴학까지 다양합니다." },
      { label: "Using AI Tools",
      jaLabel: "AI\u30c4\u30fc\u30eb\u306e\u5229\u7528",
      zhLabel: "\u4f7f\u7528AI\u5de5\u5177",
      koLabel: "AI \ub3c4\uad6c \uc0ac\uc6a9", en: "Most universities now have policies on using ChatGPT and other AI tools. Generally, you CAN use AI to help brainstorm or check grammar, but you CANNOT submit AI-generated text as your own work. Always check your subject outline for specific rules.", ja: "ほとんどの大学は現在、ChatGPTやその他のAIツールの使用に関する方針を定めています。一般的に、アイデア出しや文法チェックにAIを使うことはできますが、AIが生成した文章を自分の成果として提出することはできません。具体的な規則は必ず科目のシラバス（subject outline）で確認してください。", zh: "大多数大学现在都有关于使用 ChatGPT 及其他 AI 工具的规定。一般来说，你可以用 AI 来帮助头脑风暴或检查语法，但不能把 AI 生成的文字当作自己的作业提交。具体规则务必查看科目大纲。", ko: "대부분의 대학은 이제 ChatGPT 및 기타 AI 도구 사용에 대한 정책을 가지고 있습니다. 일반적으로, 아이디어 구상이나 문법 확인에 AI를 사용할 수 있지만, AI가 생성한 텍스트를 자신의 작업으로 제출할 수는 없습니다. 과목 개요에서 구체적인 규칙을 확인하세요." },
      { label: "Referencing Properly",
      jaLabel: "\u9069\u5207\u306a\u5f15\u7528",
      zhLabel: "\u6b63\u786e\u5f15\u7528",
      koLabel: "\uc62c\ubc14\ub978 \uc778\uc6a9", en: "Every time you use an idea from somewhere else, you must reference it. Common styles: APA (psychology, business), Harvard (business, law), MLA (humanities), IEEE (engineering). Your subject outline will specify which style to use. Use tools like Zotero or EndNote to manage references.", ja: "他のどこかからアイデアを用いるたびに、必ず出典を示さなければなりません。一般的なスタイル：APA（心理学、ビジネス）、Harvard（ビジネス、法学）、MLA（人文学）、IEEE（工学）。どのスタイルを使うかは科目のシラバスに指定されています。文献管理にはZoteroやEndNoteなどのツールを使いましょう。", zh: "每当你使用来自别处的观点，都必须标注引用。常见格式：APA（心理学、商科）、Harvard（商科、法律）、MLA（人文学科）、IEEE（工程）。科目大纲会指明使用哪种格式。可以用 Zotero 或 EndNote 等工具管理参考文献。", ko: "다른 곳의 아이디어를 사용할 때마다 반드시 출처를 표시해야 합니다. 일반적인 스타일: APA(심리학, 경영), Harvard(경영, 법학), MLA(인문학), IEEE(공학). 과목 개요에 어떤 스타일을 사용할지 명시되어 있습니다. Zotero나 EndNote 같은 도구를 사용하세요." },
      { label: "Turnitin",
      jaLabel: "Turnitin",
      zhLabel: "Turnitin",
      koLabel: "Turnitin", en: "Most assignments are submitted through Turnitin, which checks your work against a massive database of academic papers, websites, and other student submissions. A high similarity score (usually >20-25%) will be reviewed. Paraphrase properly and cite everything.", ja: "ほとんどの課題はTurnitinを通じて提出され、学術論文、ウェブサイト、他の学生の提出物からなる巨大なデータベースと照合されます。類似度スコアが高い場合（通常20～25%超）は審査の対象になります。適切に言い換え、すべてに出典を明示しましょう。", zh: "大多数作业通过 Turnitin 提交，该系统会把你的作业与庞大的学术论文、网站及其他学生提交内容的数据库进行比对。相似度分数偏高（通常超过 20～25%）会被审查。要正确改写，并为所有内容注明引用。", ko: "대부분의 과제는 Turnitin을 통해 제출되며, 이 시스템은 학술 논문, 웹사이트, 다른 학생 제출물의 방대한 데이터베이스와 비교합니다. 높은 유사도 점수(보통 20-25% 초과)는 검토 대상이 됩니다. 적절히 바꿔 쓰고 모든 출처를 인용하세요." },
      { label: "Consequences of Academic Misconduct",
      jaLabel: "\u5b66\u8853\u4e0d\u6b63\u306e\u7d50\u679c",
      zhLabel: "\u5b66\u672f\u4e0d\u7aef\u7684\u540e\u679c",
      koLabel: "\ud559\uc220 \ubd80\uc815\ud589\uc704\uc758 \uacb0\uacfc", en: "Penalties include: reduced mark on the assignment (even zero), failing the subject, a formal warning on your record, or in serious cases — suspension or expulsion. International students risk visa cancellation. It's not worth it.", ja: "罰則には、課題の減点（0点になることも）、科目の不合格、記録に残る正式な警告、深刻な場合は停学や退学が含まれます。留学生はビザ取り消しのリスクもあります。それだけの価値はありません。", zh: "处罚包括：作业扣分（甚至零分）、科目不及格、在记录中留下正式警告，严重情况下还会停学或开除。留学生还可能面临签证被取消。这么做不值得。", ko: "처벌에는: 과제 감점(또는 0점), 과목 낙제, 기록에 공식 경고, 심각한 경우 — 정학 또는 퇴학이 포함됩니다. 유학생은 비자 취소 위험도 있습니다. 그만한 가치가 없습니다." },
    ],
  },
  {
    id: "special-consideration",
    iconKey: "Clipboard",
    accent: "stone",
    title: "Special Consideration",
    koTitle: "특별 고려",
    jaTitle: "Special Consideration\uff08\u7279\u5225\u914d\u616e\uff09",
    zhTitle: "Special Consideration\uff08\u7279\u522b\u8003\u8651\uff09",
    desc: "What to do if illness or circumstances affect your studies",
    koDesc: "질병이나 상황으로 학업에 영향을 받을 때 대처 방법",
    jaDesc: "\u75c5\u6c17\u3084\u4e8b\u60c5\u304c\u5b66\u696d\u306b\u5f71\u97ff\u3059\u308b\u5834\u5408\u306e\u5bfe\u51e6",
    zhDesc: "\u5982\u679c\u75be\u75c5\u6216\u7a81\u53d1\u60c5\u51b5\u5f71\u54cd\u5b66\u4e1a\u8be5\u600e\u4e48\u529e",
    items: [
      { label: "What is Special Consideration?",
      jaLabel: "Special Consideration\u3068\u306f\uff1f",
      zhLabel: "\u4ec0\u4e48\u662fSpecial Consideration\uff1f",
      koLabel: "\ud2b9\ubcc4 \uace0\ub824\ub780?", en: "If unexpected circumstances (illness, injury, family bereavement, etc.) affect your ability to study or complete assessments, you can apply for 'Special Consideration'. This is common and not shameful — it's a standard university process.", ja: "予期しない事情（病気、けが、家族の死など）が学習や評価の完了に影響を与える場合、「Special Consideration（特別配慮）」を申請できます。これはよくあることで、恥ずかしいことではありません — 大学の標準的な手続きです。", zh: "如果意外情况（疾病、受伤、家人去世等）影响到你的学习或完成考核的能力，你可以申请「Special Consideration（特别考虑）」。这很常见，并不丢人——这是大学的标准流程。", ko: "예상치 못한 상황(질병, 부상, 가족 사망 등)이 학업이나 과제 완료에 영향을 미치는 경우 '특별 고려(Special Consideration)'를 신청할 수 있습니다. 흔한 일이며 부끄러운 게 아닙니다 — 표준 대학 절차입니다." },
      { label: "What You Can Get",
      jaLabel: "\u8a8d\u3081\u3089\u308c\u308b\u5185\u5bb9",
      zhLabel: "\u53ef\u4ee5\u83b7\u5f97\u4ec0\u4e48",
      koLabel: "\ubc1b\uc744 \uc218 \uc788\ub294 \uac83", en: "Depending on your situation, you may get: an extension on an assignment, a deferred exam, an alternative assessment, or even withdrawal from a subject without academic or financial penalty.", ja: "状況に応じて、課題の期限延長、試験の延期、代替評価、あるいは学業上・金銭上の不利益なしに科目を取り消すことなどが認められる場合があります。", zh: "视你的情况，你可能会获得：作业延期、考试缓考、替代性考核，甚至可以在不受学业或经济处罚的情况下退选某门科目。", ko: "상황에 따라: 과제 연장, 시험 연기, 대체 평가, 또는 학업적·재정적 불이익 없이 과목 철회까지 가능합니다." },
      { label: "How to Apply",
      jaLabel: "\u7533\u8acb\u65b9\u6cd5",
      zhLabel: "\u5982\u4f55\u7533\u8bf7",
      koLabel: "\uc2e0\uccad \ubc29\ubc95", en: "Submit an application through your university's online portal (usually within 3 working days of the circumstance). Attach supporting documents — medical certificate, bereavement notice, police report, etc. Each application is assessed individually.", ja: "大学のオンラインポータルから申請を提出しましょう（通常は事象発生から3営業日以内）。診断書、死亡届、警察の報告書などの証拠書類を添付します。申請は1件ずつ個別に審査されます。", zh: "通过你所在大学的在线门户提交申请（通常需在事发后 3 个工作日内）。附上证明材料——医生证明、死亡证明、警方报告等。每份申请都会单独审核。", ko: "대학의 온라인 포털을 통해 신청하세요(보통 상황 발생 후 3영업일 이내). 진단서, 사망 진단서, 경찰 보고서 등 증빙 서류를 첨부하세요. 각 신청은 개별적으로 평가됩니다." },
      { label: "No Shame in Applying",
      jaLabel: "\u7533\u8acb\u306f\u6065\u305a\u304b\u3057\u304f\u306a\u3044",
      zhLabel: "\u7533\u8bf7\u5e76\u4e0d\u4e22\u4eba",
      koLabel: "\uc2e0\uccad\uc740 \ubd80\ub044\ub7ec\uc6b4 \uc77c\uc774 \uc544\ub2c8\uc5d0\uc694", en: "Many international students hesitate to use Special Consideration because they feel it shows weakness. In Australia, it shows responsibility. Universities understand that life happens. Using support systems is a sign of maturity, not failure.", ja: "多くの留学生は、弱さを見せると思ってSpecial Considerationの利用をためらいます。オーストラリアでは、それは責任感の表れです。大学は、人生には予期しないことが起きると理解しています。サポート制度を利用することは成熟の証であり、失敗ではありません。", zh: "许多留学生不愿使用 Special Consideration，觉得这显得软弱。在澳大利亚，这体现的是责任感。大学明白人生总会有意外。善用支持体系是成熟的表现，而不是失败。", ko: "많은 유학생들이 약해 보일까 봐 특별 고려 신청을 망설입니다. 호주에서는 책임감 있는 행동으로 봅니다. 대학은 인생에 예상치 못한 일이 생긴다는 것을 이해합니다. 지원 시스템을 활용하는 것은 성숙함의 표시이지 실패가 아닙니다." },
      { label: "Mental Health is Valid",
      jaLabel: "\u30e1\u30f3\u30bf\u30eb\u30d8\u30eb\u30b9\u3082\u6b63\u5f53\u306a\u7406\u7531",
      zhLabel: "\u5fc3\u7406\u5065\u5eb7\u540c\u6837\u662f\u6b63\u5f53\u7406\u7531",
      koLabel: "\uc815\uc2e0 \uac74\uac15\ub3c4 \uc911\uc694\ud574\uc694", en: "Mental health difficulties (anxiety, depression, stress) are valid grounds for Special Consideration. University health services and counseling are free and confidential. You don't need to suffer in silence.", ja: "メンタルヘルスの不調（不安、うつ、ストレス）はSpecial Considerationの正当な理由になります。大学の健康相談サービスやカウンセリングは無料で、秘密は守られます。ひとりで黙って苦しむ必要はありません。", zh: "心理健康方面的困难（焦虑、抑郁、压力）是申请 Special Consideration 的正当理由。大学的健康服务和心理咨询免费且保密。你不需要独自默默承受。", ko: "정신 건강 문제(불안, 우울증, 스트레스)도 특별 고려의 정당한 사유입니다. 대학 보건 서비스와 상담은 무료이며 비밀이 보장됩니다. 혼자 고통받지 마세요." },
    ],
  },
  {
    id: "grades",
    iconKey: "Target",
    accent: "sky",
    title: "Grades Explained",
    koTitle: "성적 체계 이해",
    jaTitle: "\u6210\u7e3e\u306e\u4ed5\u7d44\u307f",
    zhTitle: "\u6210\u7ee9\u7b49\u7ea7\u8bf4\u660e",
    desc: "Understanding the Australian grading system",
    koDesc: "호주 성적 평가 시스템 이해",
    jaDesc: "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306e\u6210\u7e3e\u5236\u5ea6\u3092\u7406\u89e3\u3059\u308b",
    zhDesc: "\u4e86\u89e3\u6fb3\u5927\u5229\u4e9a\u7684\u8bc4\u5206\u5236\u5ea6",
    img: "/images/unsplash-1503676260728-1c00da094a0b.jpg",
    items: [
      { label: "Grade Scale",
      jaLabel: "\u8a55\u4fa1\u57fa\u6e96",
      zhLabel: "\u7b49\u7ea7\u5212\u5206",
      koLabel: "\uc131\uc801 \ub4f1\uae09\ud45c", en: "Universities use letter grades with corresponding marks. Generally: HD (High Distinction) = 85-100%, DN (Distinction) = 75-84%, CR (Credit) = 65-74%, P (Pass) = 50-64%, F (Fail) = below 50%. Some subjects have different thresholds — check the subject outline.", ja: "大学では、点数に対応するアルファベットの成績が使われます。一般的に：HD（High Distinction／最優秀）= 85～100%、DN（Distinction／優秀）= 75～84%、CR（Credit／良）= 65～74%、P（Pass／合格）= 50～64%、F（Fail／不合格）= 50%未満。科目によって基準が異なることもあるので、シラバスを確認してください。", zh: "大学采用字母等级并对应分数。一般来说：HD（High Distinction 最优）= 85～100%，DN（Distinction 优秀）= 75～84%，CR（Credit 良好）= 65～74%，P（Pass 及格）= 50～64%，F（Fail 不及格）= 50% 以下。有些科目的分数线不同——请查阅科目大纲。", ko: "대학은 점수에 해당하는 알파벳 성적을 사용합니다: HD(High Distinction/최우수) = 85-100%, DN(Distinction/우수) = 75-84%, CR(Credit/양호) = 65-74%, P(Pass/통과) = 50-64%, F(Fail/낙제) = 50% 미만입니다. 과목에 따라 기준이 다를 수 있습니다." },
      { label: "What Each Grade Means",
      jaLabel: "\u5404\u8a55\u4fa1\u306e\u610f\u5473",
      zhLabel: "\u5404\u7b49\u7ea7\u7684\u542b\u4e49",
      koLabel: "\ub4f1\uae09\ubcc4 \uc758\ubbf8", en: "HD = exceptional performance (very rare, usually top 5-10%). DN = above average (strong understanding). CR = good solid work (meets expectations well). P = satisfactory (meets minimum requirements). F = did not meet minimum requirements.", ja: "HD = 卓越した成果（非常にまれで、通常は上位5～10%）。DN = 平均以上（理解がしっかりしている）。CR = 堅実で良い出来（期待をよく満たしている）。P = 満足（最低要件を満たす）。F = 最低要件を満たしていない。", zh: "HD = 表现卓越（非常少见，通常为前 5～10%）。DN = 高于平均（理解扎实）。CR = 扎实出色（很好地达到期望）。P = 合格（达到最低要求）。F = 未达到最低要求。", ko: "HD = 탁월한 성과(매우 드물며, 보통 상위 5-10%). DN = 평균 이상(이해도가 높음). CR = 우수한 작업(기대치를 잘 충족). P = 만족(최소 요건 충족). F = 최소 요건 미달." },
      { label: "What is GPA?",
      jaLabel: "GPA\u3068\u306f\uff1f",
      zhLabel: "\u4ec0\u4e48\u662fGPA\uff1f",
      koLabel: "GPA\ub780?", en: "GPA (Grade Point Average) is the average of all your grades, usually on a 0-7 scale. HD=7, DN=6, CR=5, P=4, F=0. Your GPA matters for honours programs, postgraduate study, scholarships, and some employers.", ja: "GPA（Grade Point Average／成績平均値）は全成績の平均で、通常は0～7のスケールです。HD=7、DN=6、CR=5、P=4、F=0。GPAは、優等課程（honours）、大学院進学、奨学金、一部の雇用主で重要になります。", zh: "GPA（Grade Point Average，平均绩点）是你所有成绩的平均值，通常为 0～7 分制。HD=7，DN=6，CR=5，P=4，F=0。GPA 对荣誉学位课程、研究生申请、奖学金以及部分雇主都很重要。", ko: "GPA(Grade Point Average/학점 평균)는 모든 성적의 평균으로, 보통 0-7점 척도입니다. HD=7, DN=6, CR=5, P=4, F=0입니다. GPA는 명예 학위 과정, 대학원, 장학금, 일부 취업에 중요합니다." },
      { label: "Pass / Fail Only Subjects",
      jaLabel: "Pass\uff0fFail\u306e\u307f\u306e\u79d1\u76ee",
      zhLabel: "\u4ec5\u901a\u8fc7\uff0f\u4e0d\u901a\u8fc7\u7684\u79d1\u76ee",
      koLabel: "\ud328\uc2a4/\ud398\uc77c \uacfc\ubaa9", en: "Some subjects (internships, research projects) are graded Pass/Fail only. They don't affect your GPA but you must pass them to graduate. You simply need to meet the requirements to receive a 'Pass'.", ja: "一部の科目（インターンシップ、研究プロジェクト）はPass/Fail（合格／不合格）のみで評価されます。GPAには影響しませんが、卒業するには合格しなければなりません。「Pass」を得るには、要件を満たすだけで十分です。", zh: "有些科目（实习、研究项目）只评定 Pass/Fail（通过／不通过）。它们不影响你的 GPA，但必须通过才能毕业。你只需达到要求即可获得「Pass」。", ko: "일부 과목(인턴십, 연구 프로젝트)은 Pass/Fail만 있습니다. GPA에 영향을 주지 않지만 졸업하려면 통과해야 합니다. 요건을 충족하면 'Pass'를 받습니다." },
      { label: "What's a Good GPA?",
      jaLabel: "\u826f\u3044GPA\u3068\u306f\uff1f",
      zhLabel: "\u4ec0\u4e48\u6837\u7684GPA\u7b97\u597d\uff1f",
      koLabel: "\uc88b\uc740 GPA\ub294?", en: "For most graduate programs: 4.5+ is competitive, 5.5+ is strong, 6.0+ is excellent. For honours: usually requires 5.0-5.5+. For PhD: usually 5.5-6.0+. If your GPA is below 4.0, most universities offer academic support programs.", ja: "ほとんどの大学院プログラムでは、4.5以上が競争力のある水準、5.5以上が強い水準、6.0以上が優秀な水準です。優等課程（honours）：通常5.0～5.5以上が必要。博士課程：通常5.5～6.0以上が必要。GPAが4.0未満の場合、ほとんどの大学が学習支援プログラムを提供しています。", zh: "对于大多数研究生项目：4.5 以上有竞争力，5.5 以上算强，6.0 以上为优秀。荣誉学位课程：通常要求 5.0～5.5 以上。博士：通常要求 5.5～6.0 以上。如果你的 GPA 低于 4.0，大多数大学都提供学业支持项目。", ko: "대부분의 대학원 프로그램: 4.5+가 경쟁력 있음, 5.5+가 강함, 6.0+가 우수함입니다. 명예 학위: 보통 5.0-5.5+ 필요. 박사: 보통 5.5-6.0+ 필요. GPA가 4.0 미만이면 대부분의 대학에서 학업 지원 프로그램을 제공합니다." },
      { label: "Withdrawing from a Subject",
      jaLabel: "\u79d1\u76ee\u306e\u53d6\u308a\u6d88\u3057",
      zhLabel: "\u9000\u9009\u79d1\u76ee",
      koLabel: "\uacfc\ubaa9 \ucca0\ud68c", en: "If you're struggling, you can withdraw (discontinue) from a subject. Before the 'census date', you get a full refund and it doesn't appear on your transcript. After census date but before a deadline, you get a 'Withdrawn' (W) grade with no academic penalty. Check your university's academic calendar.", ja: "苦戦している場合は、科目を履修取り消し（withdraw）できます。「census date（センサス日）」より前なら全額返金され、成績証明書にも記載されません。センサス日以降、ある期限内までなら「Withdrawn（W）」の成績が付き、学業上の不利益はありません。大学の学年暦（academic calendar）を確認してください。", zh: "如果你感到吃力，可以退选（withdraw）某门科目。在「census date（人口普查日）」之前退选，可获全额退款，且不会出现在成绩单上。census date 之后但在某个截止日期之前，会记为「Withdrawn（W）」，不产生学业处罚。请查看你所在大学的校历。", ko: "어려움을 겪고 있다면 과목을 철회(포기)할 수 있습니다. '센서스 날짜' 이전에는 전액 환불받고 성적표에 기록되지 않습니다. 센서스 이후 일정 기한까지는 'Withdrawn(W)' 등급으로 학점에 불이익이 없습니다. 대학 학사 일정을 확인하세요." },
    ],
  },
];

export default function StudyPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero — minimal text header, matches weather page style */}
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Study</En>
            <Ja>学習</Ja>
            <Zh>学习</Zh>
            <Ko>학습</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En translated>Study in Australia</En>
            <Ja>オーストラリアで学ぶ</Ja>
            <Zh>在澳大利亚留学</Zh>
            <Ko>호주에서 공부하기</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En translated>University life, academic culture, and grades in Australia.</En>
            <Ja>オーストラリアの大学生活、学問文化、成績。</Ja>
            <Zh>澳大利亚的大学、学术文化和成绩制度。</Zh>
            <Ko>호주의 대학 생활, 학문 문화, 성적 체계.</Ko>
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
            <En translated>Need support?</En>
            <Ja>サポートが必要ですか？</Ja>
            <Zh>需要帮助吗？</Zh><Ko>지원이 필요하신가요?</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En translated>Free help, always available.</En>
            <Ja>無料のサポートをいつでも利用できます。</Ja>
            <Zh>免费帮助，随时可用。</Zh>
            <Ko>무료 도움, 항상 제공됩니다.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En translated>Student Wellbeing and Academic Skills offices offer free counselling, learning support, and crisis help. International student advisors can help with visa, enrolment, and settling-in questions. Don&apos;t struggle alone.</En>
            <Ja>学生福祉・アカデミックスキルオフィスでは、無料のカウンセリング、学習支援、危機サポートを提供しています。留学生アドバイザーは、ビザ、入学手続き、生活の立ち上げに関する質問をサポートします。一人で悩まないでください。</Ja>
            <Zh>学生福祉与学业技能办公室提供免费咨询、学习支持和危机援助。留学生顾问可以协助解答签证、入学和安顿方面的问题。不要独自苦苦挣扎。</Zh>
            <Ko>학생 복지 및 학업 기술 부서에서 무료 상담, 학습 지원, 위기 지원을 제공합니다. 유학생 상담사는 비자, 등록, 정착 관련 질문에 도움을 줄 수 있습니다. 혼자 고생하지 마세요.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.studyinaustralia.gov.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">Study in Australia ↗</a>
            <a href="https://www.education.gov.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Department of Education ↗</a>
          </div>
        </section>
      </div>

      <RelatedContent
        items={[
          {
            href: "/visa",
            title: { en: "Student visa (subclass 500)", ja: "学生ビザ（サブクラス500）", zh: "学生签证（500 子类）", ko: "학생 비자 (500)" },
            description: {
              en: "Working hours, COE requirements, and what happens if you fail a subject.", ja: "労働時間、COEの要件、そして科目を落とした場合に何が起こるか。", zh: "工作时数、COE 要求，以及科目不及格会发生什么。",
              ko: "근로 시간, COE 요건, 그리고 과목 낙제 시 발생하는 일들.",
            },
          },
          {
            href: "/finance",
            title: { en: "Money & bank accounts", ja: "お金と銀行口座", zh: "金钱与银行账户", ko: "금융과 은행 계좌" },
            description: {
              en: "OSHC, tuition payments, opening a bank account without an address.", ja: "OSHC、学費の支払い、住所なしで銀行口座を開く方法。", zh: "OSHC、学费支付、在没有住址的情况下开设银行账户。",
              ko: "OSHC, 학비 납부, 주소 없이 은행 계좌 개설.",
            },
          },
          {
            href: "/aussie-english",
            title: { en: "Aussie English", ja: "オーストラリア英語", zh: "澳式英语", ko: "호주 영어" },
            description: {
              en: "Lecturer speak is fast. Office hours are casual. Get fluent for class.", ja: "講師は早口です。オフィスアワーはカジュアルです。授業のために英語に慣れましょう。", zh: "老师讲课语速快。办公时间氛围随意。为上课练好英语。",
              ko: "강의는 빠르고, 교수 면담은 캐주얼. 수업에 필요한 영어 실력 키우기.",
            },
          },
        ]}
      />
    </div>
  );
}

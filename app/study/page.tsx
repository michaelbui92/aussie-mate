// Server component — bilingual Australian study guide.
// Redesigned in editorial style: full-bleed hero image with dual CTAs
// (matches the homepage vocabulary), persona chips, then a vertical
// sequence of EditorialSection cards (some with image banners).

import { En, Ko } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { Book, Clipboard, Edit, Graduation, PersonBoard, PersonGroup, Target } from "@/components/Icons";
import { seoFor, withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";

export const metadata = withSeo(
  {

  ...seoFor("/study"),
  title: "Study in Australia — 호주 유학 가이드 (PTE, IELTS, 대학 문화)",
  description:
    "호주 유학 가이드 — 영어 시험(PTE vs IELTS 점수, 비용, 합격 전략), 호주 대학 문화, 교수님과 소통법, 그룹 과제, 학술 윤리(Turnitin, 표절, AI 사용)까지.",
  },
  "/study"
);

type StudySection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; en: string; ko: string }>;
};

const sections: StudySection[] = [
  {
    id: "english-tests",
    iconKey: "Edit",
    accent: "sunset",
    title: "English Tests: PTE & IELTS",
    koTitle: "영어 시험: PTE와 IELTS",
    desc: "Everything you need to know about PTE and IELTS for Australian visas and university entry",
    koDesc: "호주 비자 및 대학 진학에 필요한 PTE와 IELTS 모든 것",
    img: "/images/unsplash-1568667256549-094345857637.jpg",
    items: [
      { label: "What is PTE?", en: "PTE Academic (Pearson Test of English Academic) is a computer-based English test accepted by all Australian universities, vocational colleges, and for visa purposes. You get results in 1-2 days — much faster than IELTS.", ko: "PTE Academic(Pearson Test of English Academic)는 컴퓨터로 치르는 영어 시험으로, 모든 호주 대학, 직업 교육 기관, 비자 심사에 인정됩니다. 결과가 1-2일 안에 나오므로 IELTS보다 훨씬 빠릅니다." },
      { label: "What is IELTS?", en: "IELTS (International English Language Testing System) is the older, more widely recognised test. Used for student visas, skilled migration, and professional registration. Available in paper-based or computer-delivered format.", ko: "IELTS(International English Language Testing System)는 더 오래되고 널리 인정되는 시험입니다. 학생 비자, 기술 이민, 전문 등록에 사용됩니다. 지필로 또는 컴퓨터로 응시할 수 있습니다." },
      { label: "Which should I take?", en: "For Australian student visas: both are accepted and equally weighted by DHA. PTE is faster and cheaper (~$340 AUD vs ~$385 AUD for IELTS). PTE is fully computerised — good if you're confident typing. IELTS may feel more familiar if you prefer paper.", ko: "호주 학생 비자용: 두 시험 모두 DHA에 의해 인정되며 동일한 비중을 갖습니다. PTE가 더 빠르고 저렴합니다(약 $340 AUD vs IELTS 약 $385 AUD). PTE는 전적으로 컴퓨터로 진행되므로 타자 실력이 자신 있으면 좋습니다. IELTS는 지필 시험에 익숙하다면 더 편하게 느낄 수 있습니다." },
      { label: "PTE scoring", en: "PTE uses a 0-90 scale. Most universities require 50-60 overall for undergraduate or 58-65 for postgraduate. Score is calculated using AI across all four skills simultaneously — each question can affect multiple scores.", ko: "PTE는 0-90점 척도를 사용합니다. 대부분의 대학은 학부에 50-60점, 대학원에 58-65점이 필요합니다. 채점은 네 가지 기능을 동시에 AI가 평가합니다 — 각 문항이 여러 점수에 영향을 미칠 수 있습니다." },
      { label: "IELTS scoring", en: "IELTS uses a 0-9 band scale. Most universities require 6.0-6.5 overall for undergraduate or 6.5-7.0 for postgraduate. Each skill is scored separately (0-9) and then averaged for an overall band score.", ko: "IELTS는 0-9밴드 척도를 사용합니다. 대부분의 대학은 학부에 6.0-6.5, 대학원에 6.5-7.0이 필요합니다. 네 가지 기능은 각각 개별적으로 채점된 후 평균을 내어 전체 밴드 점수를 산출합니다." },
      { label: "PTE format", en: "3 hours total, four sections in one sitting: Speaking & Writing (77-93 min), Reading (32-41 min), Listening (45-57 min). Questions are machine-adaptive — harder questions appear if you're doing well.", ko: "총 3시간, 네 섹션이 한 세션으로: 말하기 & 쓰기(77-93분), 읽기(32-41분), 듣기(45-57분). 문항이 시스템에 의해 자동으로 조절됩니다 — 잘하면 더 어려운 문항이 나옵니다." },
      { label: "IELTS format", en: "Paper-based: 2h 45min. Computer-delivered: same content, faster results. Four sections: Listening (30 min), Reading (60 min), Writing (60 min), Speaking (11-14 min — face-to-face with examiner).", ko: "지필: 2시간 45분. 컴퓨터로 응시: 같은 내용, 더 빠른 결과. 네 섹션: 듣기(30분), 읽기(60분), 쓰기(60분), 말하기(11-14분 — 시험관과 대면)." },
      { label: "Why many test-takers prefer PTE", en: "Many test-takers find PTE easier because: speaking is into a microphone (no examiner judgement), questions are scored by machine (consistent across sittings), adaptive item selection means harder questions follow good answers, and templates work reliably in the writing section. Popular resources: E2 Language (YouTube) and MyPTE.", ko: "많은 한국 학생들이 PTE가 더 쉽다고 느끼는 이유: 1) 마이크로 녹음(시험관 판단 없음), 2) AI가 억양을 감점하지 않음, 3) 문항이 객관적이고 일관됨, 4) 쓰기에 템플릿 사용 가능. 대표적인 준비 자료: E2 Language(유튜브), MyPTE." },
      { label: "How to prepare", en: "Allow 4-8 weeks of focused preparation. Practice with official test simulators. Focus on your weakest skill first. For PTE: E2 Language YouTube channel (free, excellent). For IELTS: British Council website has free practice tests.", ko: "집중 준비에 4-8주 정도 잡으세요. 공식 시뮬레이터로 연습하세요. 가장 약한 영역부터 중점적으로 공부하세요. PTE는 E2 Language(유튜브) — 무료이고 우수합니다. IELTS는 British Council 웹사이트에서 무료 연습 시험을 제공합니다." },
      { label: "When to book", en: "Don't wait until the last minute. Most universities accept results up to 2 years old for admissions. DHA typically requires results within 1 year for visa applications. Book 2-3 months before your deadline to allow for a re-sit if needed.", ko: "마감일에 쫓기지 말고 여유 있게 미리 보세요. 대부분의 대학은 입학 심사 시 최대 2년 된 성적도 인정합니다. DHA는 비자 신청 시 보통 1년 이내의 성적을 요구합니다. 재응시를 고려해 마감일 2-3개월 전에 예약하세요." },
    ],
  },
  {
    id: "uni-culture",
    iconKey: "Graduation",
    accent: "sage",
    title: "Aussie Uni Culture",
    koTitle: "호주 대학 문화",
    desc: "What university life is really like in Australia",
    koDesc: "호주 대학생활의 실제 모습",
    items: [
      { label: "Large Lectures", en: "First-year lectures can have 200-500 students. Don't be intimidated — just sit near the front, take notes, and ask questions. Lectures are recorded online at most universities, so you can rewatch them later.", ko: "1학년 강의는 200-500명의 학생이 있을 수 있습니다. 겁먹지 마세요 — 앞쪽에 앉고, 필기하고, 질문하세요. 대부분의 대학에서 강의는 온라인으로 녹화되므로 나중에 다시 볼 수 있습니다." },
      { label: "Approachable Professors", en: "Aussie professors are generally friendly and approachable. They prefer you call them by their first name or 'Dr [Name]'. They expect you to ask questions, challenge ideas, and participate — that's part of learning here.", ko: "호주 교수들은 일반적으로 친근하고 접근하기 쉽습니다. 이름(퍼스트 네임)이나 'Dr [성]'으로 부르는 것을 선호합니다. 질문하고, 아이디어에 도전하고, 참여하기를 기대합니다 — 그것이 여기서 배우는 방식입니다." },
      { label: "Group Work is Central", en: "Almost every subject includes group assignments. You'll be assessed on how well your group works together. Australians value collaboration — learning to work with different people is part of the education.", ko: "거의 모든 과목에 그룹 과제가 포함됩니다. 그룹이 얼마나 잘 협력하는지 평가받습니다. 호주인들은 협력을 중요시합니다 — 다양한 사람들과 일하는 법을 배우는 것이 교육의 일부입니다." },
      { label: "Participation Matters", en: "Tutorials (small group classes) often have a participation mark. You don't need to be an expert — just show up, listen, and contribute when you can. Saying 'I agree with that point' is participation.", ko: "튜토리얼(소규모 수업)에는 종종 참여 점수가 있습니다. 전문가일 필요는 없습니다 — 그냥 참석하고, 듣고, 가능할 때 기여하세요. '그 점에 동의합니다'라고 말하는 것도 참여입니다." },
      { label: "Self-Directed Learning", en: "Lectures are just the starting point. You're expected to do reading, research, and study in your own time. A 12-credit-point subject typically expects about 10 hours of work per week (including classes).", ko: "강의는 시작점일 뿐입니다. 독서, 연구, 학습은 스스로 해야 합니다. 12학점 과목은 일반적으로 주당 약 10시간의 학습 시간(수업 포함)이 필요합니다." },
    ],
  },
  {
    id: "talking-professors",
    iconKey: "PersonBoard",
    accent: "coast",
    title: "Talking to Professors",
    koTitle: "교수님과 대화하기",
    desc: "Email etiquette, office hours, and asking for help",
    koDesc: "이메일 예절, 오피스 아워, 도움 요청법",
    items: [
      { label: "Email Etiquette", en: "Start with 'Dear Dr [Name]' or 'Hi [First Name]' (check what they use). Keep it short and clear. Include your subject code and student ID. Sign off with your full name. Allow 2-3 business days for a reply.", ko: "'Dear Dr [성]' 또는 'Hi [이름]'(교수가 사용하는 호칭 확인)으로 시작하세요. 짧고 명확하게 작성하세요. 과목 코드와 학번을 포함하세요. 본인의 전체 이름으로 마무리하세요. 답장까지 2-3영업일이 소요됩니다." },
      { label: "Office Hours", en: "Most professors have weekly office hours — drop-in times when you can visit their office without an appointment. Use these! Ask about assignments, lecture content, or career advice. They appreciate students who seek help.", ko: "대부분의 교수들은 주간 오피스 아워가 있습니다 — 예약 없이 방문할 수 있는 시간입니다. 활용하세요! 과제, 강의 내용, 진로 상담에 대해 물어보세요. 도움을 구하는 학생을 좋아합니다." },
      { label: "How to Ask for an Extension", en: "If you need an extension on an assignment, email your lecturer before the deadline. Explain your situation briefly (illness, family emergency, etc.) and suggest how many extra days you need. Medical certificates help. Most lecturers are reasonable if you ask early.", ko: "과제 연기가 필요하면 마감일 전에 교수님께 이메일을 보내세요. 상황(질병, 가족 경조사 등)을 간략히 설명하고 필요한 추가 일수를 제안하세요. 진단서가 도움이 됩니다. 미리 요청하면 대부분의 교수들은 합리적으로 대응합니다." },
      { label: "Debate is Encouraged", en: "Aussie academic culture values critical thinking. Questioning what you read or hear in lectures is encouraged — as long as it's respectful. Professors may actively play devil's advocate to challenge your thinking.", ko: "호주 학계는 비판적 사고를 중요시합니다. 존중만 갖춘다면 강의에서 읽거나 들은 것에 질문하는 것이 장려됩니다. 교수들은 의도적으로 반대 입장을 취하며 당신의 사고를 자극하기도 합니다." },
      { label: "Don't Be Shy", en: "Many international students are hesitant to approach professors. Don't be. Professors are used to students from all over the world. They won't judge your English or your background. Asking for help shows initiative.", ko: "많은 유학생들이 교수에게 접근하는 것을 망설입니다. 그러지 마세요. 교수들은 전 세계에서 온 학생들에게 익숙합니다. 영어 실력이나 배경을 판단하지 않습니다. 도움을 요청하는 것은 적극성을 보여줍니다." },
    ],
  },
  {
    id: "group-work",
    iconKey: "PersonGroup",
    accent: "amber",
    title: "Group Work",
    koTitle: "그룹 작업",
    desc: "How group assignments work and how to survive them",
    koDesc: "그룹 과제가 어떻게 운영되는지, 생존하는 방법",
    items: [
      { label: "How Groups Are Formed", en: "Sometimes the lecturer assigns groups, sometimes you choose your own. If you can choose, try to pick people with different strengths (one good at writing, one at research, one at presenting).", ko: "때로는 교수가 그룹을 지정하고, 때로는 직접 선택합니다. 선택할 수 있다면 각자 다른 강점(글쓰기, 연구, 발표)을 가진 사람들을 고르세요." },
      { label: "Group Size", en: "Usually 2-4 people. Some larger subjects might have groups of 5-6. Everyone is expected to contribute equally. The assignment will have one mark for the whole group — so team dynamics matter.", ko: "보통 2-4명입니다. 큰 과목은 5-6명일 수도 있습니다. 모두가 동등하게 기여해야 합니다. 과제는 그룹 전체에 하나의 점수가 부여됩니다 — 팀 다이나믹스가 중요합니다." },
      { label: "Dealing with Free-Riders", en: "If someone isn't contributing, first talk to them directly. Say 'We need your part by Friday to stay on track.' If that doesn't work, talk to your tutor. Most universities have a process for reporting unequal contributions.", ko: "기여하지 않는 사람이 있으면 먼저 직접 이야기하세요. '금요일까지 당신 부분이 필요해요, 그래야 계획대로 진행됩니다.' 안 되면 튜터에게 이야기하세요. 대부분의 대학에는 불평등한 기여를 신고하는 절차가 있습니다." },
      { label: "Meeting Tips", en: "Use WhatsApp or Discord for quick communication. Use Google Docs so everyone can work simultaneously. Set clear deadlines for each section. Have your first meeting early — not the night before the due date.", ko: "빠른 소통에는 WhatsApp이나 Discord를 사용하세요. Google Docs를 사용하면 모두가 동시에 작업할 수 있습니다. 각 섹션의 명확한 마감일을 설정하세요. 첫 모임은 일찍 가지세요 — 마감 전날이 아니라요." },
      { label: "Peer Assessment", en: "Some courses include peer assessment, where you rate your group members' contributions. Be honest but fair. If someone really didn't contribute, say so — it's part of the learning process.", ko: "일부 과목에서는 동료 평가(서로의 기여도를 평가)가 포함됩니다. 정직하되 공정하게 하세요. 누군가 정말로 기여하지 않았다고 말하세요 — 그것도 학습 과정의 일부입니다." },
    ],
  },
  {
    id: "academic-integrity",
    iconKey: "Book",
    accent: "rose",
    title: "Academic Integrity",
    koTitle: "학술 무결성",
    desc: "Plagiarism, AI use, and referencing — the rules are strict",
    koDesc: "표절, AI 사용, 인용 — 규칙이 엄격합니다",
    items: [
      { label: "What is Plagiarism?", en: "Using someone else's work (words, ideas, data, images) without proper acknowledgment is plagiarism. This includes copying from textbooks, websites, other students' work, or your own previous submissions (self-plagiarism). Penalties can range from a zero grade to expulsion.", ko: "타인의 작업(단어, 아이디어, 데이터, 이미지)을 적절한 인용 없이 사용하는 것은 표절입니다. 여기에는 교과서, 웹사이트, 다른 학생의 작업, 또는 이전에 제출한 본인의 작업(자기 표절)까지 포함됩니다. 처벌은 0점부터 퇴학까지 다양합니다." },
      { label: "Using AI Tools", en: "Most universities now have policies on using ChatGPT and other AI tools. Generally, you CAN use AI to help brainstorm or check grammar, but you CANNOT submit AI-generated text as your own work. Always check your subject outline for specific rules.", ko: "대부분의 대학은 이제 ChatGPT 및 기타 AI 도구 사용에 대한 정책을 가지고 있습니다. 일반적으로, 아이디어 구상이나 문법 확인에 AI를 사용할 수 있지만, AI가 생성한 텍스트를 자신의 작업으로 제출할 수는 없습니다. 과목 개요에서 구체적인 규칙을 확인하세요." },
      { label: "Referencing Properly", en: "Every time you use an idea from somewhere else, you must reference it. Common styles: APA (psychology, business), Harvard (business, law), MLA (humanities), IEEE (engineering). Your subject outline will specify which style to use. Use tools like Zotero or EndNote to manage references.", ko: "다른 곳의 아이디어를 사용할 때마다 반드시 출처를 표시해야 합니다. 일반적인 스타일: APA(심리학, 경영), Harvard(경영, 법학), MLA(인문학), IEEE(공학). 과목 개요에 어떤 스타일을 사용할지 명시되어 있습니다. Zotero나 EndNote 같은 도구를 사용하세요." },
      { label: "Turnitin", en: "Most assignments are submitted through Turnitin, which checks your work against a massive database of academic papers, websites, and other student submissions. A high similarity score (usually >20-25%) will be reviewed. Paraphrase properly and cite everything.", ko: "대부분의 과제는 Turnitin을 통해 제출되며, 이 시스템은 학술 논문, 웹사이트, 다른 학생 제출물의 방대한 데이터베이스와 비교합니다. 높은 유사도 점수(보통 20-25% 초과)는 검토 대상이 됩니다. 적절히 바꿔 쓰고 모든 출처를 인용하세요." },
      { label: "Consequences of Academic Misconduct", en: "Penalties include: reduced mark on the assignment (even zero), failing the subject, a formal warning on your record, or in serious cases — suspension or expulsion. International students risk visa cancellation. It's not worth it.", ko: "처벌에는: 과제 감점(또는 0점), 과목 낙제, 기록에 공식 경고, 심각한 경우 — 정학 또는 퇴학이 포함됩니다. 유학생은 비자 취소 위험도 있습니다. 그만한 가치가 없습니다." },
    ],
  },
  {
    id: "special-consideration",
    iconKey: "Clipboard",
    accent: "stone",
    title: "Special Consideration",
    koTitle: "특별 고려",
    desc: "What to do if illness or circumstances affect your studies",
    koDesc: "질병이나 상황으로 학업에 영향을 받을 때 대처 방법",
    items: [
      { label: "What is Special Consideration?", en: "If unexpected circumstances (illness, injury, family bereavement, etc.) affect your ability to study or complete assessments, you can apply for 'Special Consideration'. This is common and not shameful — it's a standard university process.", ko: "예상치 못한 상황(질병, 부상, 가족 사망 등)이 학업이나 과제 완료에 영향을 미치는 경우 '특별 고려(Special Consideration)'를 신청할 수 있습니다. 흔한 일이며 부끄러운 게 아닙니다 — 표준 대학 절차입니다." },
      { label: "What You Can Get", en: "Depending on your situation, you may get: an extension on an assignment, a deferred exam, an alternative assessment, or even withdrawal from a subject without academic or financial penalty.", ko: "상황에 따라: 과제 연장, 시험 연기, 대체 평가, 또는 학업적·재정적 불이익 없이 과목 철회까지 가능합니다." },
      { label: "How to Apply", en: "Submit an application through your university's online portal (usually within 3 working days of the circumstance). Attach supporting documents — medical certificate, bereavement notice, police report, etc. Each application is assessed individually.", ko: "대학의 온라인 포털을 통해 신청하세요(보통 상황 발생 후 3영업일 이내). 진단서, 사망 진단서, 경찰 보고서 등 증빙 서류를 첨부하세요. 각 신청은 개별적으로 평가됩니다." },
      { label: "No Shame in Applying", en: "Many international students hesitate to use Special Consideration because they feel it shows weakness. In Australia, it shows responsibility. Universities understand that life happens. Using support systems is a sign of maturity, not failure.", ko: "많은 유학생들이 약해 보일까 봐 특별 고려 신청을 망설입니다. 호주에서는 책임감 있는 행동으로 봅니다. 대학은 인생에 예상치 못한 일이 생긴다는 것을 이해합니다. 지원 시스템을 활용하는 것은 성숙함의 표시이지 실패가 아닙니다." },
      { label: "Mental Health is Valid", en: "Mental health difficulties (anxiety, depression, stress) are valid grounds for Special Consideration. University health services and counseling are free and confidential. You don't need to suffer in silence.", ko: "정신 건강 문제(불안, 우울증, 스트레스)도 특별 고려의 정당한 사유입니다. 대학 보건 서비스와 상담은 무료이며 비밀이 보장됩니다. 혼자 고통받지 마세요." },
    ],
  },
  {
    id: "grades",
    iconKey: "Target",
    accent: "sky",
    title: "Grades Explained",
    koTitle: "성적 체계 이해",
    desc: "Understanding the Australian grading system",
    koDesc: "호주 성적 평가 시스템 이해",
    img: "/images/unsplash-1503676260728-1c00da094a0b.jpg",
    items: [
      { label: "Grade Scale", en: "Universities use letter grades with corresponding marks. Generally: HD (High Distinction) = 85-100%, DN (Distinction) = 75-84%, CR (Credit) = 65-74%, P (Pass) = 50-64%, F (Fail) = below 50%. Some subjects have different thresholds — check the subject outline.", ko: "대학은 점수에 해당하는 알파벳 성적을 사용합니다: HD(High Distinction/최우수) = 85-100%, DN(Distinction/우수) = 75-84%, CR(Credit/양호) = 65-74%, P(Pass/통과) = 50-64%, F(Fail/낙제) = 50% 미만입니다. 과목에 따라 기준이 다를 수 있습니다." },
      { label: "What Each Grade Means", en: "HD = exceptional performance (very rare, usually top 5-10%). DN = above average (strong understanding). CR = good solid work (meets expectations well). P = satisfactory (meets minimum requirements). F = did not meet minimum requirements.", ko: "HD = 탁월한 성과(매우 드물며, 보통 상위 5-10%). DN = 평균 이상(이해도가 높음). CR = 우수한 작업(기대치를 잘 충족). P = 만족(최소 요건 충족). F = 최소 요건 미달." },
      { label: "What is GPA?", en: "GPA (Grade Point Average) is the average of all your grades, usually on a 0-7 scale. HD=7, DN=6, CR=5, P=4, F=0. Your GPA matters for honours programs, postgraduate study, scholarships, and some employers.", ko: "GPA(Grade Point Average/학점 평균)는 모든 성적의 평균으로, 보통 0-7점 척도입니다. HD=7, DN=6, CR=5, P=4, F=0입니다. GPA는 명예 학위 과정, 대학원, 장학금, 일부 취업에 중요합니다." },
      { label: "Pass / Fail Only Subjects", en: "Some subjects (internships, research projects) are graded Pass/Fail only. They don't affect your GPA but you must pass them to graduate. You simply need to meet the requirements to receive a 'Pass'.", ko: "일부 과목(인턴십, 연구 프로젝트)은 Pass/Fail만 있습니다. GPA에 영향을 주지 않지만 졸업하려면 통과해야 합니다. 요건을 충족하면 'Pass'를 받습니다." },
      { label: "What's a Good GPA?", en: "For most graduate programs: 4.5+ is competitive, 5.5+ is strong, 6.0+ is excellent. For honours: usually requires 5.0-5.5+. For PhD: usually 5.5-6.0+. If your GPA is below 4.0, most universities offer academic support programs.", ko: "대부분의 대학원 프로그램: 4.5+가 경쟁력 있음, 5.5+가 강함, 6.0+가 우수함입니다. 명예 학위: 보통 5.0-5.5+ 필요. 박사: 보통 5.5-6.0+ 필요. GPA가 4.0 미만이면 대부분의 대학에서 학업 지원 프로그램을 제공합니다." },
      { label: "Withdrawing from a Subject", en: "If you're struggling, you can withdraw (discontinue) from a subject. Before the 'census date', you get a full refund and it doesn't appear on your transcript. After census date but before a deadline, you get a 'Withdrawn' (W) grade with no academic penalty. Check your university's academic calendar.", ko: "어려움을 겪고 있다면 과목을 철회(포기)할 수 있습니다. '센서스 날짜' 이전에는 전액 환불받고 성적표에 기록되지 않습니다. 센서스 이후 일정 기한까지는 'Withdrawn(W)' 등급으로 학점에 불이익이 없습니다. 대학 학사 일정을 확인하세요." },
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
            <En>Study</En>
            <Ko>학습</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En>Study in Australia</En>
            <Ko>호주에서 공부하기</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En>University life, academic culture, and grades in Australia.</En>
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
            <En>Need support?</En><Ko>지원이 필요하신가요?</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En>Free help, always available.</En>
            <Ko>무료 도움, 항상 제공됩니다.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En>Student Wellbeing and Academic Skills offices offer free counselling, learning support, and crisis help. International student advisors can help with visa, enrolment, and settling-in questions. Don&apos;t struggle alone.</En>
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
            title: { en: "Student visa (subclass 500)", ko: "학생 비자 (500)" },
            description: {
              en: "Working hours, COE requirements, and what happens if you fail a subject.",
              ko: "근로 시간, COE 요건, 그리고 과목 낙제 시 발생하는 일들.",
            },
          },
          {
            href: "/finance",
            title: { en: "Money & bank accounts", ko: "금융과 은행 계좌" },
            description: {
              en: "OSHC, tuition payments, opening a bank account without an address.",
              ko: "OSHC, 학비 납부, 주소 없이 은행 계좌 개설.",
            },
          },
          {
            href: "/aussie-english",
            title: { en: "Aussie English", ko: "호주 영어" },
            description: {
              en: "Lecturer speak is fast. Office hours are casual. Get fluent for class.",
              ko: "강의는 빠르고, 교수 면담은 캐주얼. 수업에 필요한 영어 실력 키우기.",
            },
          },
        ]}
      />
    </div>
  );
}

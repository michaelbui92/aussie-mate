"use client";
import { useState } from "react";
import Quokka from "@/components/Quokka";

interface Section {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  content: ContentItem[];
}

interface ContentItem {
  label: string;
  en: string;
  ko: string;
}

const sections: Section[] = [
  {
    id: "uni-culture",
    emoji: "🏫",
    title: "Aussie Uni Culture",
    desc: "What university life is really like in Australia",
    content: [
      {
        label: "Large Lectures",
        en: "First-year lectures can have 200-500 students. Don't be intimidated — just sit near the front, take notes, and ask questions. Lectures are recorded online at most universities, so you can rewatch them later.",
        ko: "1학년 강의는 200-500명의 학생이 있을 수 있습니다. 겁먹지 마세요 — 앞쪽에 앉고, 필기하고, 질문하세요. 대부분의 대학에서 강의는 온라인으로 녹화되므로 나중에 다시 볼 수 있습니다.",
      },
      {
        label: "Approachable Professors",
        en: "Aussie professors are generally friendly and approachable. They prefer you call them by their first name or 'Dr [Name]'. They expect you to ask questions, challenge ideas, and participate — that's part of learning here.",
        ko: "호주 교수들은 일반적으로 친근하고 접근하기 쉽습니다. 이름(퍼스트 네임)이나 'Dr [성]'으로 부르는 것을 선호합니다. 질문하고, 아이디어에 도전하고, 참여하기를 기대합니다 — 그것이 여기서 배우는 방식입니다.",
      },
      {
        label: "Group Work is Central",
        en: "Almost every subject includes group assignments. You'll be assessed on how well your group works together. Australians value collaboration — learning to work with different people is part of the education.",
        ko: "거의 모든 과목에 그룹 과제가 포함됩니다. 그룹이 얼마나 잘 협력하는지 평가받습니다. 호주인들은 협력을 중요시합니다 — 다양한 사람들과 일하는 법을 배우는 것이 교육의 일부입니다.",
      },
      {
        label: "Participation Matters",
        en: "Tutorials (small group classes) often have a participation mark. You don't need to be an expert — just show up, listen, and contribute when you can. Saying 'I agree with that point' is participation.",
        ko: "튜토리얼(소규모 수업)에는 종종 참여 점수가 있습니다. 전문가일 필요는 없습니다 — 그냥 참석하고, 듣고, 가능할 때 기여하세요. '그 점에 동의합니다'라고 말하는 것도 참여입니다.",
      },
      {
        label: "Self-Directed Learning",
        en: "Lectures are just the starting point. You're expected to do reading, research, and study in your own time. A 12-credit-point subject typically expects about 10 hours of work per week (including classes).",
        ko: "강의는 시작점일 뿐입니다. 독서, 연구, 학습은 스스로 해야 합니다. 12학점 과목은 일반적으로 주당 약 10시간의 학습 시간(수업 포함)이 필요합니다.",
      },
    ],
  },
  {
    id: "talking-professors",
    emoji: "👨‍🏫",
    title: "Talking to Professors",
    desc: "Email etiquette, office hours, and asking for help",
    content: [
      {
        label: "Email Etiquette (이메일 예절)",
        en: "Start with 'Dear Dr [Name]' or 'Hi [First Name]' (check what they use). Keep it short and clear. Include your subject code and student ID. Sign off with your full name. Allow 2-3 business days for a reply.",
        ko: "'Dear Dr [성]' 또는 'Hi [이름]'(교수가 사용하는 호칭 확인)으로 시작하세요. 짧고 명확하게 작성하세요. 과목 코드와 학번을 포함하세요. 본인의 전체 이름으로 마무리하세요. 답장까지 2-3영업일이 소요됩니다.",
      },
      {
        label: "Office Hours (오피스 아워)",
        en: "Most professors have weekly office hours — drop-in times when you can visit their office without an appointment. Use these! Ask about assignments, lecture content, or career advice. They appreciate students who seek help.",
        ko: "대부분의 교수는 주간 오피스 아워가 있습니다 — 예약 없이 방문할 수 있는 시간입니다. 활용하세요! 과제, 강의 내용, 진로 상담에 대해 물어보세요. 도움을 구하는 학생을 좋아합니다.",
      },
      {
        label: "How to Ask for an Extension (연기 요청)",
        en: "If you need an extension on an assignment, email your lecturer before the deadline. Explain your situation briefly (illness, family emergency, etc.) and suggest how many extra days you need. Medical certificates help. Most lecturers are reasonable if you ask early.",
        ko: "과제 연기가 필요하면 마감일 전에 교수님께 이메일을 보내세요. 상황(질병, 가족 경조사 등)을 간략히 설명하고 필요한 추가 일수를 제안하세요. 진단서가 도움이 됩니다. 미리 요청하면 대부분의 교수는 합리적으로 대응합니다.",
      },
      {
        label: "Debate is Encouraged",
        en: "Aussie academic culture values critical thinking. Questioning what you read or hear in lectures is encouraged — as long as it's respectful. Professors may actively play devil's advocate to challenge your thinking.",
        ko: "호주 학계는 비판적 사고를 중요시합니다. 존중만 갖춘다면 강의에서 읽거나 들은 것에 질문하는 것이 장려됩니다. 교수들은 의도적으로 반대 입장을 취하며 당신의 사고를 자극하기도 합니다.",
      },
      {
        label: "Don't Be Shy",
        en: "Many international students are hesitant to approach professors. Don't be. Professors are used to students from all over the world. They won't judge your English or your background. Asking for help shows initiative.",
        ko: "많은 유학생들이 교수에게 접근하는 것을 망설입니다. 그러지 마세요. 교수들은 전 세계에서 온 학생들에게 익숙합니다. 영어 실력이나 배경을 판단하지 않습니다. 도움을 요청하는 것은 적극성을 보여줍니다.",
      },
    ],
  },
  {
    id: "group-work",
    emoji: "👥",
    title: "Group Work",
    desc: "How group assignments work and how to survive them",
    content: [
      {
        label: "How Groups Are Formed",
        en: "Sometimes the lecturer assigns groups, sometimes you choose your own. If you can choose, try to pick people with different strengths (one good at writing, one at research, one at presenting).",
        ko: "때로는 교수가 그룹을 지정하고, 때로는 직접 선택합니다. 선택할 수 있다면 각자 다른 강점(글쓰기, 연구, 발표)을 가진 사람들을 고르세요.",
      },
      {
        label: "Group Size (그룹 규모)",
        en: "Usually 2-4 people. Some larger subjects might have groups of 5-6. Everyone is expected to contribute equally. The assignment will have one mark for the whole group — so team dynamics matter.",
        ko: "보통 2-4명입니다. 큰 과목은 5-6명일 수도 있습니다. 모두가 동등하게 기여해야 합니다. 과제는 그룹 전체에 하나의 점수가 부여됩니다 — �워크 다이나믹스가 중요합니다.",
      },
      {
        label: "Dealing with Free-Riders (무임승차자 대처법)",
        en: "If someone isn't contributing, first talk to them directly. Say 'We need your part by Friday to stay on track.' If that doesn't work, talk to your tutor. Most universities have a process for reporting unequal contributions.",
        ko: "기여하지 않는 사람이 있으면 먼저 직접 이야기하세요. '금요일까지 당신 부분이 필요해요, 그래야 계획대로 진행됩니다.' 안 되면 튜터에게 이야기하세요. 대부분의 대학에는 불평등한 기여를 신고하는 절차가 있습니다.",
      },
      {
        label: "Meeting Tips",
        en: "Use WhatsApp or Discord for quick communication. Use Google Docs so everyone can work simultaneously. Set clear deadlines for each section. Have your first meeting early — not the night before the due date.",
        ko: "빠른 소통에는 WhatsApp이나 Discord를 사용하세요. Google Docs를 사용하면 모두가 동시에 작업할 수 있습니다. 각 섹션의 명확한 마감일을 설정하세요. 첫 모임은 일찍 가지세요 — 마감 전날이 아니라요.",
      },
      {
        label: "Peer Assessment",
        en: "Some courses include peer assessment, where you rate your group members' contributions. Be honest but fair. If someone really didn't contribute, say so — it's part of the learning process.",
        ko: "일부 과목에서는 동료 평가(서로의 기여도를 평가)가 포함됩니다. 정직하되 공정하게 하세요. 누군가 정말로 기여하지 않았다고 말하세요 — 그것도 학습 과정의 일부입니다.",
      },
    ],
  },
  {
    id: "academic-integrity",
    emoji: "📚",
    title: "Academic Integrity",
    desc: "Plagiarism, AI use, and referencing — the rules are strict",
    content: [
      {
        label: "What is Plagiarism? (표절이란?)",
        en: "Using someone else's work (words, ideas, data, images) without proper acknowledgment is plagiarism. This includes copying from textbooks, websites, other students' work, or your own previous submissions (self-plagiarism). Penalties can range from a zero grade to expulsion.",
        ko: "타인의 작업(단어, 아이디어, 데이터, 이미지)을 적절한 인용 없이 사용하는 것은 표절입니다. 여기에는 교과서, 웹사이트, 다른 학생의 작업, 또는 이전에 제출한 본인의 작업(자기 표절)까지 포함됩니다. 처벌은 0점부터 퇴학까지 다양합니다.",
      },
      {
        label: "Using AI Tools (AI 도구 사용)",
        en: "Most universities now have policies on using ChatGPT and other AI tools. Generally, you CAN use AI to help brainstorm or check grammar, but you CANNOT submit AI-generated text as your own work. Always check your subject outline for specific rules.",
        ko: "대부분의 대학은 이제 ChatGPT 및 기타 AI 도구 사용에 대한 정책을 가지고 있습니다. 일반적으로, 아이디어 구상이나 문법 확인에 AI를 사용할 수 있지만, AI가 생성한 텍스트를 자신의 작업으로 제출할 수는 없습니다. 과목 개요에서 구체적인 규칙을 확인하세요.",
      },
      {
        label: "Referencing Properly (올바른 인용)",
        en: "Every time you use an idea from somewhere else, you must reference it. Common styles: APA (psychology, business), Harvard (business, law), MLA (humanities), IEEE (engineering). Your subject outline will specify which style to use. Use tools like Zotero or EndNote to manage references.",
        ko: "다른 곳의 아이디어를 사용할 때마다 반드시 출처를 표시해야 합니다. 일반적인 스타일: APA(심리학, 경영), Harvard(경영, 법학), MLA(인문학), IEEE(공학). 과목 개요에 어떤 스타일을 사용할지 명시되어 있습니다. Zotero나 EndNote 같은 도구를 사용하세요.",
      },
      {
        label: "Turnitin",
        en: "Most assignments are submitted through Turnitin, which checks your work against a massive database of academic papers, websites, and other student submissions. A high similarity score (usually >20-25%) will be reviewed. Paraphrase properly and cite everything.",
        ko: "대부분의 과제는 Turnitin을 통해 제출되며, 이 시스템은 학술 논문, 웹사이트, 다른 학생 제출물의 방대한 데이터베이스와 비교합니다. 높은 유사도 점수(보통 20-25% 초과)는 검토 대상이 됩니다. 적절히 바꿔 쓰고 모든 출처를 인용하세요.",
      },
      {
        label: "Consequences of Academic Misconduct",
        en: "Penalties include: reduced mark on the assignment (even zero), failing the subject, a formal warning on your record, or in serious cases — suspension or expulsion. International students risk visa cancellation. It's not worth it.",
        ko: "처벌에는: 과제 감점(또는 0점), 과목 낙제, 기록에 공식 경고, 심각한 경우 — 정학 또는 퇴학이 포함됩니다. 유학생은 비자 취소 위험도 있습니다. 그만한 가치가 없습니다.",
      },
    ],
  },
  {
    id: "special-consideration",
    emoji: "📋",
    title: "Special Consideration",
    desc: "What to do if illness or circumstances affect your studies",
    content: [
      {
        label: "What is Special Consideration? (특별 고려)",
        en: "If unexpected circumstances (illness, injury, family bereavement, etc.) affect your ability to study or complete assessments, you can apply for 'Special Consideration'. This is common and not shameful — it's a standard university process.",
        ko: "예상치 못한 상황(질병, 부상, 가족 사망 등)이 학업이나 과제 완료에 영향을 미치는 경우 '특별 고려(Special Consideration)'를 신청할 수 있습니다. 흔한 일이며 부끄러운 게 아닙니다 — 표준 대학 절차입니다.",
      },
      {
        label: "What You Can Get",
        en: "Depending on your situation, you may get: an extension on an assignment, a deferred exam, an alternative assessment, or even withdrawal from a subject without academic or financial penalty.",
        ko: "상황에 따라: 과제 연장, 시험 연기, 대체 평가, 또는 학업적·재정적 불이익 없이 과목 철회까지 가능합니다.",
      },
      {
        label: "How to Apply",
        en: "Submit an application through your university's online portal (usually within 3 working days of the circumstance). Attach supporting documents — medical certificate, bereavement notice, police report, etc. Each application is assessed individually.",
        ko: "대학의 온라인 포털을 통해 신청하세요(보통 상황 발생 후 3영업일 이내). 진단서, 사망 진단서, 경찰 보고서 등 증빙 서류를 첨부하세요. 각 신청은 개별적으로 평가됩니다.",
      },
      {
        label: "No Shame in Applying",
        en: "Many international students hesitate to use Special Consideration because they feel it shows weakness. In Australia, it shows responsibility. Universities understand that life happens. Using support systems is a sign of maturity, not failure.",
        ko: "많은 유학생들이 약해 보일까 봐 특별 고려 신청을 망설입니다. 호주에서는 책임감 있는 행동으로 봅니다. 대학은 인생에 예상치 못한 일이 생긴다는 것을 이해합니다. 지원 시스템을 활용하는 것은 성숙함의 표시이지 실패가 아닙니다.",
      },
      {
        label: "Mental Health is Valid",
        en: "Mental health difficulties (anxiety, depression, stress) are valid grounds for Special Consideration. University health services and counseling are free and confidential. You don't need to suffer in silence.",
        ko: "정신 건강 문제(불안, 우울증, 스트레스)도 특별 고려의 정당한 사유입니다. 대학 보건 서비스와 상담은 무료이며 비밀이 보장됩니다. 혼자 고통받지 마세요.",
      },
    ],
  },
  {
    id: "grades",
    emoji: "🎯",
    title: "Grades Explained",
    desc: "Understanding the Australian grading system",
    content: [
      {
        label: "Grade Scale (성적 체계)",
        en: "Universities use letter grades with corresponding marks. Generally: HD (High Distinction) = 85-100%, DN (Distinction) = 75-84%, CR (Credit) = 65-74%, P (Pass) = 50-64%, F (Fail) = below 50%. Some subjects have different thresholds — check the subject outline.",
        ko: "대학은 점수에 해당하는 알파벳 성적을 사용합니다: HD(High Distinction/최우수) = 85-100%, DN(Distinction/우수) = 75-84%, CR(Credit/양호) = 65-74%, P(Pass/통과) = 50-64%, F(Fail/낙제) = 50% 미만입니다. 과목에 따라 기준이 다를 수 있습니다.",
      },
      {
        label: "What Each Grade Means",
        en: "HD = exceptional performance (very rare, usually top 5-10%). DN = above average (strong understanding). CR = good solid work (meets expectations well). P = satisfactory (meets minimum requirements). F = did not meet minimum requirements.",
        ko: "HD = 탁월한 성과(매우 드물며, 보통 상위 5-10%). DN = 평균 이상(이해도가 높음). CR = 우수한 작업(기대치를 잘 충족). P = 만족(최소 요건 충족). F = 최소 요건 미달.",
      },
      {
        label: "What is GPA? (GPA란?)",
        en: "GPA (Grade Point Average) is the average of all your grades, usually on a 0-7 scale. HD=7, DN=6, CR=5, P=4, F=0. Your GPA matters for honours programs, postgraduate study, scholarships, and some employers.",
        ko: "GPA(Grade Point Average/학점 평균)는 모든 성적의 평균으로, 보통 0-7점 척도입니다. HD=7, DN=6, CR=5, P=4, F=0입니다. GPA는 명예 학위 과정, 대학원, 장학금, 일부 취업에 중요합니다.",
      },
      {
        label: "Pass / Fail Only Subjects",
        en: "Some subjects (internships, research projects) are graded Pass/Fail only. They don't affect your GPA but you must pass them to graduate. You simply need to meet the requirements to receive a 'Pass'.",
        ko: "일부 과목(인턴십, 연구 프로젝트)은 Pass/Fail만 있습니다. GPA에 영향을 주지 않지만 졸업하려면 통과해야 합니다. 요건을 충족하면 'Pass'를 받습니다.",
      },
      {
        label: "What's a Good GPA?",
        en: "For most graduate programs: 4.5+ is competitive, 5.5+ is strong, 6.0+ is excellent. For honours: usually requires 5.0-5.5+. For PhD: usually 5.5-6.0+. If your GPA is below 4.0, most universities offer academic support programs.",
        ko: "대부분의 대학원 프로그램: 4.5+가 경쟁력 있음, 5.5+가 강함, 6.0+가 우수함입니다. 명예 학위: 보통 5.0-5.5+ 필요. 박사: 보통 5.5-6.0+ 필요. GPA가 4.0 미만이면 대부분의 대학에서 학업 지원 프로그램을 제공합니다.",
      },
      {
        label: "Withdrawing from a Subject",
        en: "If you're struggling, you can withdraw (discontinue) from a subject. Before the 'census date', you get a full refund and it doesn't appear on your transcript. After census date but before a deadline, you get a 'Withdrawn' (W) grade with no academic penalty. Check your university's academic calendar.",
        ko: "어려움을 겪고 있다면 과목을 철회(포기)할 수 있습니다. '센서스 날짜' 이전에는 전액 환불받고 성적표에 기록되지 않습니다. 센서스 이후 일정 기한까지는 'Withdrawn(W)' 등급으로 학점에 불이익이 없습니다. 대학 학사 일정을 확인하세요.",
      },
    ],
  },
];

export default function StudyPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <Quokka scene="glasses" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-eucalypt dark:text-white mb-2">
            Study 🎓
          </h1>
          <p className="text-eucalypt/60 dark:text-dark-muted/60">
            University life, academic culture, and grades in Australia
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-4">
        {sections.map((section, si) => {
          const isOpen = openSection === section.id;
          return (
            <div
              key={section.id}
              className="bg-white dark:bg-dark-card border border-sand dark:border-dark-border rounded-2xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${si * 0.08}s` }}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full text-left px-4 md:px-5 py-4 min-h-[60px] flex items-center gap-3 hover:bg-sand/50 dark:hover:bg-dark-surface/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-xl shrink-0">{section.emoji}</span>
                <div className="flex-1 min-w-0 pr-2">
                  <h2 className="font-bold text-sm md:text-base text-eucalypt dark:text-white leading-snug">{section.title}</h2>
                  <p className="text-xs text-eucalypt/50 dark:text-dark-muted/50 mt-0.5">{section.desc}</p>
                </div>
                <svg
                  className={`w-5 h-5 text-sunset shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Accordion Body */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="divide-y divide-sand dark:divide-dark-border border-t border-sand dark:border-dark-border">
                  {section.content.map((item, ii) => (
                    <div key={ii} className="px-5 py-4">
                      <p className="font-semibold text-sm text-sunset mb-1.5">{item.label}</p>
                      <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed mb-2">{item.en}</p>
                      <div className="bg-sand/70 dark:bg-dark-surface/70 rounded-xl px-4 py-2.5 border-l-2 border-sage">
                        <p className="text-xs font-medium text-sage mb-0.5">🇰🇷 한국어</p>
                        <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed">{item.ko}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Bottom note */}
        <div className="bg-sunset/5 border border-sunset/20 rounded-2xl p-5 text-center">
          <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60">
            Need academic support? Visit your university's{' '}
            <span className="text-sunset font-semibold">Student Wellbeing</span> or{' '}
            <span className="text-sunset font-semibold">Academic Skills</span> office — free help is always available.
          </p>
        </div>
      </div>
    </div>
  );
}

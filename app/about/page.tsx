import { En, Ko } from "@/components/LangBlocks";

const sections = [
  {
    id: "what",
    emoji: "📍",
    title: "What AussieGuides is",
    koTitle: "AussieGuides란",
    desc: "And what it isn't",
    koDesc: "그리고 무엇이 아닌지",
    en: [
      "AussieGuides is a free bilingual guide to Australian daily life — written for people who are new here. Practical, honest, and in plain language.",
      "AussieGuides is NOT an official source. It is not affiliated with any university, government, or organisation. Always check official websites for legal and up-to-date information.",
    ],
    ko: [
      "호주 일상 생활에 대한 무료 가이드입니다 — 호주에 처음 온 사람들을 위해 실용적으로, 정직하게, 평범한 언어로 썼어요.",
      "공식 출처가 아닙니다. 어떤 대학, 정부, 조직과도 관련이 없습니다. 법률 및 최신 정보는 항상 공식 웹사이트를 확인하세요.",
    ],
  },
  {
    id: "who",
    emoji: "🙋",
    title: "Who it's for",
    koTitle: "누구를 위한 것인지",
    desc: "The target audience",
    koDesc: "대상 독자",
    en: [
      "Korean international students and working holiday makers first — people arriving in Australia who need practical, real-world information in a language they understand.",
      "But really, anyone new to Australia who's tired of dry official sites.",
    ],
    ko: [
      "우선 한국의 유학생과 워킹홀리데이 메이커 — 호주에 도착해서 자신의 언어로 된 실용적인 정보가 필요한 사람들.",
      "하지만 실제로는 공식 웹사이트들에 질려버린 호주에 처음 오신 누구를 대상으로 합니다.",
    ],
  },
  {
    id: "projects",
    emoji: "🛠️",
    title: "Other things I've built",
    koTitle: "다른 만든 것들",
    desc: "More tools to help you settle in",
    koDesc: "호주 적응을 돕는 다른 도구들",
    projects: [
      {
        emoji: "🚗",
        name: "Drive with Bui",
        url: "https://drivewithbui.com",
        accent: "bg-sunset/10 border-sunset/30",
        en: "Sydney driving lessons for new and international drivers. Note: full NSW driving instructor licensing is in progress; lessons are currently offered on a supervised practice basis. Book online.",
        ko: "시드니에서 신입 및 국제 운전자를 위한 운전 레슨. 참고: NSW 운전 강사 정식 자격증 취득 절차가 진행 중이며, 현재는 동반 실습 형태로 레슨이 제공됩니다. 온라인 예약 가능.",
      },
      {
        emoji: "📚",
        name: "Study Buddy (Boba)",
        url: "https://study-buddy-two-orpin.vercel.app",
        accent: "bg-sage/10 border-sage/30",
        en: "AI-powered flashcard app with multiple choice questions. Study any topic, anywhere.",
        ko: "AI 플래시카드 앱 — 객관식 문제로 원하는 주제를 학습.",
      },
    ],
  },
  {
    id: "contact",
    emoji: "✉️",
    title: "Get in touch",
    koTitle: "문의",
    desc: "Found something wrong or have a suggestion?",
    koDesc: "잘못된 곳을 발견했거나 제안이 있으신가요?",
    en: ["Corrections and suggestions are always welcome — thank you for helping improve this resource."],
    ko: ["수정 제안과 의견은 언제든 환영합니다 — 이 자료를 더 좋게 만드는 데 도움을 주셔서 감사합니다."],
  },
];

export const metadata = {
  title: "About — AussieGuides",
  description: "About AussieGuides and why it exists",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <header className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En>About</En>
          <Ko>소개</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
          <En>About AussieGuides</En>
          <Ko>AussieGuides 소개</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>What we do and who it's for.</En>
          <Ko>우리 서비스와 누구를 위한 것인지.</Ko>
        </p>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 space-y-10">
        {sections.slice(0, 2).map((s, i) => (
          <section key={s.id} className={`reveal reveal-delay-${(i % 5) + 1}`}>
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl shrink-0">{s.emoji}</span>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight">
                  <En>{s.title}</En>
                  <Ko>{s.koTitle}</Ko>
                </h2>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                  <En>{s.desc}</En>
                  <Ko>{s.koDesc}</Ko>
                </p>
              </div>
            </div>
            <div className="text-stone-600 dark:text-stone-400 leading-relaxed text-base md:text-lg space-y-3">
              <En>
                {s.en?.map((p, j) => <p key={j}>{p}</p>)}
              </En>
              <Ko>
                {s.ko?.map((p, j) => <p key={j}>{p}</p>)}
              </Ko>
            </div>
          </section>
        ))}

        {/* Projects */}
        <section className="reveal">
          <div className="flex items-start gap-3 mb-5">
            <span className="text-2xl shrink-0">{sections[2].emoji}</span>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight">
                <En>{sections[2].title}</En>
                <Ko>{sections[2].koTitle}</Ko>
              </h2>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                <En>{sections[2].desc}</En>
                <Ko>{sections[2].koDesc}</Ko>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sections[2].projects!.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal reveal-delay-${(i % 5) + 1} block p-5 rounded-2xl border ${p.accent} hover:shadow-md hover:-translate-y-0.5 transition-all`}
              >
                <p className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">
                  {p.emoji} {p.name}
                </p>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  <En>{p.en}</En>
                  <Ko>{p.ko}</Ko>
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="reveal rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-7">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl shrink-0">{sections[3].emoji}</span>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl leading-tight">
                <En>{sections[3].title}</En>
                <Ko>{sections[3].koTitle}</Ko>
              </h2>
              <p className="text-sm text-stone-400 mt-0.5">
                <En>{sections[3].desc}</En>
                <Ko>{sections[3].koDesc}</Ko>
              </p>
            </div>
          </div>
          <p className="text-stone-200 text-sm md:text-base leading-relaxed">
            <En>{sections[3].en![0]}</En>
            <Ko>{sections[3].ko![0]}</Ko>
          </p>
        </section>

        <div className="text-center pt-2">
          <a href="/" className="text-sm text-sunset hover:underline">
            <En>← Back to AussieGuides</En>
            <Ko>← AussieGuides로 돌아가기</Ko>
          </a>
        </div>
      </div>
    </div>
  );
}

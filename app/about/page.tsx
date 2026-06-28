import { En, Ko } from "@/components/LangBlocks";
import { breadcrumbLdJson, seoFor, withSeo } from "@/lib/seo";

const sections = [
  {
    id: "what",
    emoji: "📍",
    title: "What AussieGuides is",
    koTitle: "AussieGuides란",
    desc: "And what it isn't",
    koDesc: "그리고 무엇이 아닌지",
    en: [
      "AussieGuides is a free bilingual (English / 한국어) guide to Australian daily life — written for anyone new here, regardless of where they're coming from or what passport they hold. Practical, honest, and in plain language.",
      "AussieGuides is NOT an official source. It is not affiliated with any university, government, or organisation. Always check official websites for legal and up-to-date information.",
    ],
    ko: [
      "AussieGuides는 호주 일상 생활에 대한 무료 bilingual(영어/한국어) 가이드입니다 — 어디서 오든, 어떤 여권이든 호주를 처음 접하는 분들을 위해 만들었습니다. 실용적·정직·평이하게.",
      "공식 출처가 아닙니다. 어떤 대학, 정부, 조직과도 관련이 없습니다. 법률 및 최신 정보는 항상 공식 웹사이트에서 확인하세요.",
    ],
  },
  {
    id: "origin",
    emoji: "📖",
    title: "Why this site exists",
    koTitle: "이 사이트가 만들어진 이유",
    desc: "The story behind AussieGuides",
    koDesc: "AussieGuides의 시작",
    en: [
      "I started AussieGuides in 2025 after watching too many of my friends — students, working-holiday makers, new migrants — get stuck on day-to-day things that official sites don't explain well: how to actually open a bank account, where to find a GP that speaks their language, how to track a 90-day Opal trip without losing your card, what 'tips and tricks' means in a job ad.",
      "The information was almost always there somewhere — buried in a government PDF, or split across three different forums. What was missing was a single, plain-language landing point that said: here's how this works in real life, in Australia, as of the year you're reading it.",
      "AussieGuides is that landing point. One site, two languages, written from the perspective of someone who's actually been through it.",
    ],
    ko: [
      "AussieGuides는 2025년에 시작했습니다. 친구들 — 유학생, 워홀러, 새로 정착한 분들 — 이 너무 많은 일상을 너무 어려워하는 걸 지켜본 후였습니다. 실제로 어떻게 은행 계좌를 만드는지, 모국어로 통하는 GP는 어디서 찾는지, 오팔 카드 분실 없이 90일 교통 이력을 관리하는 법, 구인 광고에서 'tips and tricks'가 무슨 뜻인지 — 이런 것들입니다.",
      "정보는 대부분 어딘가에 있었습니다 — 정부 PDF 파일 어딘가에, 또는 여러 커뮤니티에 나뉘어 흩어져 있었습니다. 부재했던 건 그 모든 걸 하나로 정리하고, 평이한 언어로, 실제로 작동하는 방식 그대로, 읽고 있는 시점 기준으로 설명한 단 하나의 진입점이었습니다.",
      "그 진입점이 AussieGuides입니다. 한 사이트, 두 언어, 실제로 겪어 본 사람의 시선에서 쓴 가이드.",
    ],
  },
  {
    id: "founder",
    emoji: "👤",
    title: "Who runs this",
    koTitle: "누가 이 사이트를 운영하나요",
    desc: "About the operator",
    koDesc: "운영자에 대해",
    en: [
      "AussieGuides is run by Michael Bui — an Australian-born Sydneysider who's lived here long enough to have made every mistake the site warns against. I run it as a personal project, not a business.",
      "I also built a few other tools that overlap with this audience: Drive with Bui (Sydney driving lessons for newcomers — note that full NSW instructor licensing is in progress) and Study Buddy (a flashcard app I built for international students). You can find them on the My Projects page if any of them are useful to you.",
      "I'm one person. There is no editorial team, no advisory board, no funding. If I get something wrong, you can reach me at michaelbui@outlook.com.au — corrections always welcome.",
    ],
    ko: [
      "AussieGuides는 Michael Bui가 운영합니다 — 호주에서 태어나 시드니에서 자란 호주인으로, 사이트에서 경고하는 모든 실수를 직접 해 본 사람입니다. 사업이 아닌 개인 프로젝트로 운영합니다.",
      "이 청중에 도움이 될 수 있는 다른 도구도 만들었습니다 — Drive with Bui(시드니 신입 운전자를 위한 운전 레슨 — NSW 정식 강사 자격증 진행 중), Study Buddy(국제 학생을 위해 만든 플래시카드 앱). 도움이 된다면 My Projects 페이지에서 확인하실 수 있습니다.",
      "저는 한 사람입니다. 편집팀, 자문위, 후원이 없습니다. 잘못 쓴 부분이 있다면 michaelbui@outlook.com.au 로 알려주세요 — 수정은 언제든 환영합니다.",
    ],
  },
  {
    id: "who",
    emoji: "🙋",
    title: "Who it's for",
    koTitle: "누구를 위한 것인지",
    desc: "The audience",
    koDesc: "대상 독자",
    en: [
      "Anyone new to Australia — visiting, studying, working, settling in, or just curious. Australians returning home after time overseas are welcome too.",
      "English readers will find the page rendered in English by default. Korean readers see the same content in 한국어. Toggling between the two is one click in the navigation, and all content lives on the same URL so friends can share links without worrying about which language the recipient uses.",
      "If you are tired of dry official sites and want the practical, in-real-life version, this site is for you.",
    ],
    ko: [
      "호주가 처음인 모든 분들 — 방문, 유학, 근무, 정착, 혹은 단순 호주 궁금증 해결까지. 해외에 있다 돌아오는 호주인 여러분도 환영합니다.",
      "영어 독자는 기본적으로 영문으로, 한국어 독자는 한국어로 같은 내용을 보실 수 있습니다. 내비게이션에서 한 번의 클릭으로 양쪽 언어 전환이 가능하며, 모든 콘텐츠는 동일 URL에 있어 같은 언어로 친구에게 링크 전달이 가능합니다.",
      "건조한 공식 사이트에 질려 실생활 버전을 찾고 계신분이라면 이 사이트가 맞습니다.",
    ],
  },
  {
    id: "process",
    emoji: "✍️",
    title: "How I write",
    koTitle: "글을 쓰는 방식",
    desc: "Sources, review, corrections",
    koDesc: "출처, 검토, 수정",
    en: [
      "Every page on this site has a human author (me) and a real-world reason for existing — there is no auto-generated content, no spun articles, no scraped-and-reworded text from anywhere else.",
      "I check prices, transit routes, and visa rules against the official source before publishing. Every page notes when it was last reviewed. If something changes and you spot it before I do, please contact me.",
    ],
    ko: [
      "이 사이트의 모든 페이지는 사람(저)이 직접 작성했습니다. 자동 생성된 콘텐츠도, 다른 사이트를 긁어와서 다시 쓴 글도 없습니다.",
      "가격, 교통 노선, 비자 규칙은 발행 전 공식 출처에서 확인합니다. 모든 페이지에는 마지막 검토 시점이 표시되어 있습니다. 변화가 생겼는데 제가 모르고 있으면 알려주세요.",
    ],
  },
  {
    id: "not",
    emoji: "🚫",
    title: "What this site won't do",
    koTitle: "이 사이트가 하지 않는 것",
    desc: "Honest about limits",
    koDesc: "솔직한 한계",
    en: [
      "I won't run ads that track you across other sites. Personalised advertising from Google AdSense is opt-in and easy to disable — see the privacy page.",
      "I won't accept sponsorship in exchange for ranking a destination, visa, or product. Recommendations here are based on what I'd actually tell a friend arriving in Sydney this week.",
      "I won't pretend to be more authoritative than I am. Where an official source exists, I'll link to it instead of restating it. Where I'm uncertain, I'll say so.",
    ],
    ko: [
      "타 사이트를 추적하는 광고는 게재하지 않습니다. Google AdSense 개인화 광고는 선택형이며 쉽게 끌 수 있습니다 — 개인정보처리방침 페이지 참고.",
      "어떤 여행지, 비자, 제품의 순위를 올려주는 대가로 sponsorship를 받지 않습니다. 이 사이트의 추천은 '이번 주 시드니에 도착한 친구에게 실제로 말해줄 것'을 기준으로 합니다.",
      "제가 가진 것보다 더 권위 있는 척 하지 않습니다. 공식 출처가 있는 경우, 다시 쓰지 않고 링크합니다. 확신이 없는 경우, 그렇게 말하겠습니다.",
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
    en: ["Corrections and suggestions are always welcome — thank you for helping improve this resource. Email michaelbui@outlook.com.au."],
    ko: ["수정 제안과 의견은 언제든 환영합니다 — 이 자료를 더 좋게 만드는 데 도움을 주셔서 감사합니다. michaelbui@outlook.com.au 로 연락 주세요."],
  },
];

export const metadata = withSeo(
  {
    ...seoFor("/about"),
    title: "About — AussieGuides",
    description: "About AussieGuides and why it exists — a personal bilingual guide to Australian daily life by Michael Bui, an Australian-born Sydneysider.",
  },
  "/about"
);

const bodySections = sections.filter((s) => s.id !== "projects" && s.id !== "contact");
const projectsSection = sections.find((s) => s.id === "projects")!;
const contactSection = sections.find((s) => s.id === "contact")!;

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
          <En>What this site is, who it&apos;s for, and how it&apos;s written — from one person&apos;s perspective.</En>
          <Ko>무엇을, 누구를 위해, 어떻게 쓰는지 — 한 사람의 시선에서.</Ko>
        </p>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 space-y-10">
        {bodySections.map((s, i) => (
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

        {/* Editorial standards — E-E-A-T pointer */}
        <section className="reveal p-6 md:p-7 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100/60 dark:border-amber-900/30">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-400 mb-3">
            <En>Editorial standards</En>
            <Ko>편집 기준</Ko>
          </p>
          <p className="text-stone-700 dark:text-stone-300 text-base md:text-lg leading-relaxed mb-3">
            <En>
              The content on this site follows a documented editorial process — how
              sources are checked, how outdated information is reviewed, and how to
              report an error.
            </En>
            <Ko>
              본 사이트의 콘텐츠는 문서화된 편집 기준에 따라 작성됩니다 — 출처 확인,
              업데이트 검토, 오류 보고 절차.
            </Ko>
          </p>
          <a
            href="/editorial"
            className="inline-flex items-center gap-1 font-medium text-sm text-sunset hover:underline"
          >
            <En>Read our editorial standards →</En>
            <Ko>편집 기준 보기 →</Ko>
          </a>
        </section>

        {/* Projects */}
        <section className="reveal">
          <div className="flex items-start gap-3 mb-5">
            <span className="text-2xl shrink-0">{projectsSection.emoji}</span>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight">
                <En>{projectsSection.title}</En>
                <Ko>{projectsSection.koTitle}</Ko>
              </h2>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                <En>{projectsSection.desc}</En>
                <Ko>{projectsSection.koDesc}</Ko>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projectsSection.projects!.map((p, i) => (
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
            <span className="text-2xl shrink-0">{contactSection.emoji}</span>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl leading-tight">
                <En>{contactSection.title}</En>
                <Ko>{contactSection.koTitle}</Ko>
              </h2>
              <p className="text-sm text-stone-400 mt-0.5">
                <En>{contactSection.desc}</En>
                <Ko>{contactSection.koDesc}</Ko>
              </p>
            </div>
          </div>
          <p className="text-stone-200 text-sm md:text-base leading-relaxed">
            <En>{contactSection.en![0]}</En>
            <Ko>{contactSection.ko![0]}</Ko>
          </p>
          <p className="mt-3">
            <a
              href="mailto:michaelbui@outlook.com.au"
              className="inline-flex items-center gap-1 font-medium text-sm text-sunset hover:underline"
            >
              <En>michaelbui@outlook.com.au →</En>
              <Ko>michaelbui@outlook.com.au →</Ko>
            </a>
          </p>
        </section>

        <div className="text-center pt-2">
          <a href="/" className="text-sm text-sunset hover:underline">
            <En>← Back to AussieGuides</En>
            <Ko>← AussieGuides로 돌아가기</Ko>
          </a>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLdJson([
              { name: "Home", path: "" },
              { name: "About", path: "about" },
            ])
          ),
        }}
      />
    </div>
  );
}

import { En, Ko } from "@/components/LangBlocks";
import { breadcrumbLdJson, seoFor, withSeo } from "@/lib/seo";

const sections = [
  {
    id: "what",
    emoji: "📍",
    title: "What AussieGuides is",
    desc: "And what it isn't",
    en: [
      "AussieGuides is a free guide to Australian daily life — written for anyone new here, regardless of where they're coming from or what passport they hold. Practical, honest, and in plain language.",
      "AussieGuides is NOT an official source. It is not affiliated with any university, government, or organisation. Always check official websites for legal and up-to-date information.",
    ],
  },
  {
    id: "origin",
    emoji: "📖",
    title: "Why this site exists",
    desc: "The story behind AussieGuides",
    en: [
      "I started AussieGuides in 2026 after watching too many of my friends — students, working-holiday makers, new migrants — get stuck on day-to-day things that official sites don't explain well: how to actually open a bank account, what 'tips and tricks' means in a job ad, how Opal cards work, where to find a GP that speaks their language.",
      "The information was almost always there somewhere — buried in a government PDF, or split across three different forums. What was missing was a single, plain-language landing point that said: here's how this works in real life, in Australia, as of the year you're reading it.",
      "AussieGuides is that landing point. Written from the perspective of someone who's actually been through it.",
    ],
  },
  {
    id: "founder",
    emoji: "👤",
    title: "Who runs this",
    desc: "About the operator",
    en: [
      "AussieGuides is run by Michael Bui — an Australian-born Sydneysider who's lived here long enough to have made every mistake the site warns against. I run it as a personal project, not a business.",
      "I also built a few other tools that overlap with this audience: Drive with Bui (Sydney driving lessons) and Study Buddy (a flashcard app). You can find them on the My Projects page if any of them are useful to you.",
      "I'm one person. There is no editorial team, no advisory board, no funding. If I get something wrong, you can reach me at michaelbui@outlook.com.au — corrections always welcome.",
    ],
  },
  {
    id: "who",
    emoji: "🙋",
    title: "Who it's for",
    desc: "The audience",
    en: [
      "This site is for anyone planning time in Sydney — first-time visitors, international students, working-holiday makers, new migrants, and Australians returning after time overseas.",
      "If you're tired of dry official sites and want the practical, in-real-life version of how things work here, this site is for you.",
    ],
  },
  {
    id: "process",
    emoji: "✍️",
    title: "How I write",
    desc: "Sources, review, corrections",
    en: [
      "Every page on this site is written by me — there is no auto-generated content, no AI-written articles, no scraped text from anywhere else.",
      "I check prices, transit routes, and visa rules against the official source before publishing. Every page notes when it was last reviewed. If something changes and you spot it before I do, please contact me.",
    ],
  },
  {
    id: "not",
    emoji: "🚫",
    title: "What this site won't do",
    desc: "Honest about limits",
    en: [
      "I won't run ads that track you across other sites. No personalised advertising, no affiliate links disguised as recommendations.",
      "I won't accept payment in exchange for ranking a destination, visa, or product. Every recommendation here is based on what I'd actually tell a friend arriving in Sydney this week.",
      "I won't pretend to be more authoritative than I am. Where an official source exists, I'll link to it instead of restating it. Where I'm uncertain, I'll say so.",
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
          About
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
          About AussieGuides
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          What this site is, who it&apos;s for, and how it&apos;s written — from one person&apos;s perspective.
        </p>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 space-y-10">
        {bodySections.map((s, i) => (
          <section key={s.id} className={`reveal reveal-delay-${(i % 5) + 1}`}>
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl shrink-0">{s.emoji}</span>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight">
                  {s.title}
                </h2>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                  {s.desc}
                </p>
              </div>
            </div>
            <div className="text-stone-600 dark:text-stone-400 leading-relaxed text-base md:text-lg space-y-3">
                {s.en?.map((p, j) => <p key={j}>{p}</p>)}
            </div>
          </section>
        ))}

        {/* Editorial standards */}
        <section className="reveal p-6 md:p-7 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100/60 dark:border-amber-900/30">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-400 mb-3">
            Editorial standards
          </p>
          <p className="text-stone-700 dark:text-stone-300 text-base md:text-lg leading-relaxed mb-3">
            The content on this site follows a documented editorial process — how
            sources are checked, how outdated information is reviewed, and how to
            report an error.
          </p>
          <a
            href="/editorial"
            className="inline-flex items-center gap-1 font-medium text-sm text-sunset hover:underline"
          >
            Read our editorial standards →
          </a>
        </section>

        {/* Projects */}
        <section className="reveal">
          <div className="flex items-start gap-3 mb-5">
            <span className="text-2xl shrink-0">{projectsSection.emoji}</span>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight">
                {projectsSection.title}
              </h2>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                {projectsSection.desc}
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
                  {p.en}
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
                {contactSection.title}
              </h2>
              <p className="text-sm text-stone-400 mt-0.5">
                {contactSection.desc}
              </p>
            </div>
          </div>
          <p className="text-stone-200 text-sm md:text-base leading-relaxed">
            {contactSection.en![0]}
          </p>
          <p className="mt-3">
            <a
              href="mailto:michaelbui@outlook.com.au"
              className="inline-flex items-center gap-1 font-medium text-sm text-sunset hover:underline"
            >
              michaelbui@outlook.com.au →
            </a>
          </p>
        </section>

        <div className="text-center pt-2">
          <a href="/" className="text-sm text-sunset hover:underline">
            ← Back to AussieGuides
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

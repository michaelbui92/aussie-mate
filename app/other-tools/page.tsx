import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import { seoFor, withSeo } from "@/lib/seo";

export const metadata = withSeo(
  {

  ...seoFor("/other-tools"),
  title: "Other tools — Michael이 만든 다른 도구들",
  description:
    "AussieGuides 운영자가 만든 다른 도구들 — Drive with Bui(운전 레슨, 자격증 진행 중), Study Buddy(AI 플래시카드).",
  },
  "/other-tools"
);

const tools = [
  {
    id: "drive-with-bui",
    emoji: "🚗",
    title: "Drive with Bui",
    desc: "Sydney's friendliest driving school. Learn to pass your driving test with patient, experienced instruction covering all test routes and requirements.",
    url: "https://drivewithbui.com",
    badge: "Driving School",
    accent: "bg-sunset/10 border-sunset/30",
    highlight: "Based in Sydney — book your first lesson today",
    features: [
      "All Sydney test routes covered",
      "Dual-controlled car for your safety",
      "Flexible scheduling — early mornings to evenings",
      "Patient, experienced instructor",
      "Pass your P-plate test with confidence",
    ],
  },
  {
    id: "study-buddy",
    emoji: "📚",
    title: "Study Buddy",
    desc: "A smart study companion app — flashcard decks, spaced repetition, progress tracking. Coming soon — built to help international students study smarter, not harder.",
    url: "https://study-buddy-two-orpin.vercel.app",
    badge: "Live",
    accent: "bg-sage/10 border-sage/30",
    highlight: "Launching 2026 — get notified when it goes live",
    features: [
      "AI-powered flashcard decks",
      "Spaced repetition for long-term memory",
      "Progress tracking and streaks",
      "Korean and English language support",
      "Designed for international students",
    ],
  },
];

export default function OtherToolsPage() {
  return (
    <div className="min-h-screen">
      <header className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En>Side projects</En>
          <Ko>다른 프로젝트</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
          <En>My Projects</En>
          <Ko>내 프로젝트</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>Other things I&apos;ve built to help people navigate life in Australia.</En>
          <Ko>호주 생활에 도움이 되는 다른 프로젝트들.</Ko>
        </p>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 space-y-5">
        {tools.map((tool, i) => (
          <article
            key={tool.id}
            className={`reveal reveal-delay-${(i % 5) + 1} ${tool.accent} border rounded-2xl p-6 md:p-7 hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl shrink-0">{tool.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100">{tool.title}</h2>
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-current/20 text-stone-600 dark:text-stone-300 bg-white/60 dark:bg-dark-surface/60">
                    {tool.badge}
                  </span>
                </div>
                <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed mb-2">
                  {tool.desc}
                </p>
                <p className="text-xs font-medium text-sunset">
                  ✦ {tool.highlight}
                </p>
              </div>
            </div>

            <ul className="space-y-1.5 mb-5">
              {tool.features.map((f, fi) => (
                <li key={fi} className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400">
                  <span className="text-sage shrink-0 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-sm px-5 py-2.5 rounded-full bg-sunset text-white hover:bg-sunset-light transition-colors shadow-sm"
            >
              <En>Visit {tool.title}</En>
              <Ko>{tool.title} 방문</Ko>
              <span>→</span>
            </a>
          </article>
        ))}

        <div className="text-center pt-4">
          <Link href="/" className="text-sm text-sunset hover:underline">
            <En>← Back to AussieGuides home</En>
            <Ko>← AussieGuides 홈으로</Ko>
          </Link>
        </div>
      </div>
    </div>
  );
}

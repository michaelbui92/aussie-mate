import type { Metadata } from "next";
import { headers } from "next/headers";
import { seoFor, withSeo } from "@/lib/seo";
import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import { pickLocale, type Lang } from "@/lib/locale";
import { ABOUT_SECTIONS, ABOUT_HERO, ABOUT_META } from "./data";

const sections = [
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
        en: "Sydney driving lessons for new and international drivers. Note: full NSW driving instructor licensing is in progress; lessons are currently offered on a supervised practice basis. Book online.", ja: "新規ドライバーおよび国際ドライバーの方向けのシドニー運転レッスン。ご注意：NSWの正式な運転インストラクター資格は取得手続き中で、現在は監督付き練習の形でレッスンを提供しています。オンラインで予約できます。", zh: "面向新手和国际驾驶员的悉尼驾驶课程。请注意：新南威尔士州正式驾驶教练执照正在办理中；目前课程以有监督的练习形式提供。可在线预约。",
        ko: "시드니에서 신입 및 국제 운전자를 위한 운전 레슨. 참고: NSW 운전 강사 정식 자격증 취득 절차가 진행 중이며, 현재는 동반 실습 형태로 레슨이 제공됩니다. 온라인 예약 가능.",
      },
      {
        emoji: "📚",
        name: "Study Buddy (Boba)",
        url: "https://stdybddy.app",
        accent: "bg-sage/10 border-sage/30",
        en: "AI-powered flashcard app with multiple choice questions. Study any topic, anywhere.", ja: "多肢選択式問題を備えたAI搭載のフラッシュカードアプリ。どこでもどんなトピックでも学習できます。", zh: "搭载AI的闪卡应用，配有多项选择题。随时随地学习任何主题。",
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

// Per request, so a Japanese reader searching for this site does not meet an English title.
// The canonical and hreflang come from the root layout, which reads the same header.
export async function generateMetadata(): Promise<Metadata> {
  const locale = ((await headers()).get("x-am-locale") ?? "en") as Lang;
  return withSeo(
    {
      ...seoFor("/about"),
      title: pickLocale(locale, ABOUT_META.title),
      description: pickLocale(locale, ABOUT_META.description),
    },
    "/about"
  );
}

const bodySections = ABOUT_SECTIONS;
const projectsSection = sections.find((s) => s.id === "projects")!;
const contactSection = sections.find((s) => s.id === "contact")!;

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <header className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En translated>{ABOUT_HERO.eyebrow.en}</En>
          <Ja>{ABOUT_HERO.eyebrow.ja}</Ja>
          <Zh>{ABOUT_HERO.eyebrow.zh}</Zh>
          <Ko>{ABOUT_HERO.eyebrow.ko}</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
          <En translated>{ABOUT_HERO.h1.en}</En>
          <Ja>{ABOUT_HERO.h1.ja}</Ja>
          <Zh>{ABOUT_HERO.h1.zh}</Zh>
          <Ko>{ABOUT_HERO.h1.ko}</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En translated>{ABOUT_HERO.subtitle.en}</En>
          <Ja>{ABOUT_HERO.subtitle.ja}</Ja>
          <Zh>{ABOUT_HERO.subtitle.zh}</Zh>
          <Ko>{ABOUT_HERO.subtitle.ko}</Ko>
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 space-y-10">
        {bodySections.map((s, i) => (
          <section key={s.id} className={`reveal reveal-delay-${(i % 5) + 1}`}>
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl shrink-0">{s.emoji}</span>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight">
                  <En translated>{s.title.en}</En>
                  <Ja>{s.title.ja}</Ja>
                  <Zh>{s.title.zh}</Zh>
                  <Ko>{s.title.ko}</Ko>
                </h2>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                  <En translated>{s.desc.en}</En>
                  <Ja>{s.desc.ja}</Ja>
                  <Zh>{s.desc.zh}</Zh>
                  <Ko>{s.desc.ko}</Ko>
                </p>
              </div>
            </div>
            <div className="text-stone-600 dark:text-stone-400 leading-relaxed text-base md:text-lg space-y-3">
                {s.body.map((p, j) => (
                  <p key={j}>
                    <En translated>{p.en}</En>
                    <Ja>{p.ja}</Ja>
                    <Zh>{p.zh}</Zh>
                    <Ko>{p.ko}</Ko>
                  </p>
                ))}
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
                  <En translated>{p.en}</En>
                  <Ja>{pickLocale("ja", p)}</Ja>
                  <Zh>{pickLocale("zh", p)}</Zh>
                  <Ko>{pickLocale("ko", p)}</Ko>
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


    </div>
  );
}

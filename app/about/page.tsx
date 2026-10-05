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
    jaTitle: "\u307b\u304b\u306b\u3082\u4f5c\u3063\u305f\u3082\u306e",
    zhTitle: "\u6211\u505a\u7684\u5176\u4ed6\u4e1c\u897f",
    desc: "More tools to help you settle in",
    koDesc: "호주 적응을 돕는 다른 도구들",
    jaDesc: "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u751f\u6d3b\u3092\u52a9\u3051\u308b\u307b\u304b\u306e\u30c4\u30fc\u30eb",
    zhDesc: "\u5e2e\u4f60\u5b89\u987f\u4e0b\u6765\u7684\u66f4\u591a\u5de5\u5177",
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
    jaTitle: "\u304a\u554f\u3044\u5408\u308f\u305b",
    zhTitle: "\u8054\u7cfb\u6211",
    desc: "Found something wrong or have a suggestion?",
    koDesc: "잘못된 곳을 발견했거나 제안이 있으신가요?",
    jaDesc: "\u8aa4\u308a\u3084\u63d0\u6848\u304c\u3042\u308c\u3070\u6559\u3048\u3066\u304f\u3060\u3055\u3044",
    zhDesc: "\u53d1\u73b0\u4e86\u9519\u8bef\uff0c\u6216\u8005\u6709\u5efa\u8bae\uff1f",
    en: ["Corrections and suggestions are always welcome — thank you for helping improve this resource. Email michaelbui@outlook.com.au."],
    ja: ["\u8a02\u6b63\u3084\u3054\u63d0\u6848\u306f\u3044\u3064\u3067\u3082\u6b53\u8fce\u3057\u307e\u3059 \u2014 \u3053\u306e\u8cc7\u6599\u3092\u3088\u308a\u826f\u304f\u3059\u308b\u305f\u3081\u306b\u3054\u5354\u529b\u3044\u305f\u3060\u304d\u3001\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002michaelbui@outlook.com.au \u307e\u3067\u30e1\u30fc\u30eb\u3067\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002"],
    zh: ["\u6b22\u8fce\u968f\u65f6\u63d0\u51fa\u66f4\u6b63\u548c\u5efa\u8bae \u2014 \u611f\u8c22\u4f60\u5e2e\u52a9\u6539\u8fdb\u8fd9\u4efd\u8d44\u6599\u3002\u8bf7\u53d1\u90ae\u4ef6\u81f3 michaelbui@outlook.com.au\u3002"],
    ko: ["수정 제안과 의견은 언제든 환영합니다 — 이 자료를 더 좋게 만드는 데 도움을 주셔서 감사합니다. michaelbui@outlook.com.au 로 연락 주세요."],
  },
];

// Per request, so a Japanese reader searching for this site does not meet an English title.
// The canonical and hreflang come from the root layout, which reads the same header.
export async function generateMetadata(): Promise<Metadata> {
  const locale = ((await headers()).get("x-am-locale") ?? "en") as Lang;
  return withSeo(
    {
      ...seoFor("/about", locale),
      title: pickLocale(locale, ABOUT_META.title),
      description: pickLocale(locale, ABOUT_META.description),
    },
    "/about"
  );
}

const bodySections = ABOUT_SECTIONS;
const projectsSection = sections.find((s) => s.id === "projects")!;
const contactSection = sections.find((s) => s.id === "contact")!;

// The contact paragraph is a one-item array per language, and pickLocale is typed for
// strings, so the array is read directly here.
const contactText = (lang: "en" | "ko" | "ja" | "zh") =>
  ((contactSection as unknown as Record<string, string[] | undefined>)[lang] ??
    contactSection.en!)[0];

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
            <En translated>Editorial standards</En>
            <Ja>編集方針</Ja>
            <Zh>编辑规范</Zh>
            <Ko>편집 기준</Ko>
          </p>
          <p className="text-stone-700 dark:text-stone-300 text-base md:text-lg leading-relaxed mb-3">
            <En translated>The content on this site follows a documented editorial process — how sources are checked, how outdated information is reviewed, and how to report an error.</En>
            <Ja>このサイトのコンテンツは、明文化された編集プロセス — 情報源の確認方法、古くなった情報の見直し方法、誤りの報告方法 — に従っています。</Ja>
            <Zh>本站的内容遵循一套成文的编辑流程 — 来源如何核实、过时信息如何复核，以及如何报告错误。</Zh>
            <Ko>이 사이트의 콘텐츠는 문서화된 편집 절차 — 출처를 어떻게 확인하고, 오래된 정보를 어떻게 검토하며, 오류를 어떻게 제보하는지 — 를 따릅니다.</Ko>
          </p>
          <a
            href="/editorial"
            className="inline-flex items-center gap-1 font-medium text-sm text-sunset hover:underline"
          >
            <En translated>Read our editorial standards →</En>
            <Ja>編集方針を読む →</Ja>
            <Zh>阅读我们的编辑规范 →</Zh>
            <Ko>편집 기준 읽기 →</Ko>
          </a>
        </section>

        {/* Projects */}
        <section className="reveal">
          <div className="flex items-start gap-3 mb-5">
            <span className="text-2xl shrink-0">{projectsSection.emoji}</span>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight">
                <En translated>{projectsSection.title}</En>
                <Ja>{projectsSection.jaTitle ?? projectsSection.title}</Ja>
                <Zh>{projectsSection.zhTitle ?? projectsSection.title}</Zh>
                <Ko>{projectsSection.koTitle ?? projectsSection.title}</Ko>
              </h2>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                <En translated>{projectsSection.desc}</En>
                <Ja>{projectsSection.jaDesc ?? projectsSection.desc}</Ja>
                <Zh>{projectsSection.zhDesc ?? projectsSection.desc}</Zh>
                <Ko>{projectsSection.koDesc ?? projectsSection.desc}</Ko>
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
                <En translated>{contactSection.title}</En>
                <Ja>{contactSection.jaTitle ?? contactSection.title}</Ja>
                <Zh>{contactSection.zhTitle ?? contactSection.title}</Zh>
                <Ko>{contactSection.koTitle ?? contactSection.title}</Ko>
              </h2>
              <p className="text-sm text-stone-400 mt-0.5">
                <En translated>{contactSection.desc}</En>
                <Ja>{contactSection.jaDesc ?? contactSection.desc}</Ja>
                <Zh>{contactSection.zhDesc ?? contactSection.desc}</Zh>
                <Ko>{contactSection.koDesc ?? contactSection.desc}</Ko>
              </p>
            </div>
          </div>
          <p className="text-stone-200 text-sm md:text-base leading-relaxed">
            <En translated>{contactText("en")}</En>
            <Ja>{contactText("ja")}</Ja>
            <Zh>{contactText("zh")}</Zh>
            <Ko>{contactText("ko")}</Ko>
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

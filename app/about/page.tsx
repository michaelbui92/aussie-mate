import type { Metadata } from "next";
import { headers } from "next/headers";
import { seoFor, withSeo } from "@/lib/seo";
import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import { pickLocale, type Lang } from "@/lib/locale";
import { ABOUT_SECTIONS, ABOUT_HERO, ABOUT_META } from "./data";
import { ABOUT_PROJECTS } from "./projects";
import LocaleLink from "@/components/LocaleLink";

const sections = [
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
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset-ink mb-3">
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
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-800 dark:text-amber-400 mb-3">
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
          <LocaleLink
            href="/editorial"
            className="inline-flex items-center gap-1 font-medium text-sm text-sunset-ink hover:underline"
          >
            <En translated>Read our editorial standards →</En>
            <Ja>編集方針を読む →</Ja>
            <Zh>阅读我们的编辑规范 →</Zh>
            <Ko>편집 기준 읽기 →</Ko>
          </LocaleLink>
        </section>

        {/* Projects - merged in from the old My Projects page */}
        <section id="projects" className="reveal">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl shrink-0">{ABOUT_PROJECTS.emoji}</span>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 leading-tight">
                <En translated>{ABOUT_PROJECTS.title.en}</En>
                <Ja>{ABOUT_PROJECTS.title.ja}</Ja>
                <Zh>{ABOUT_PROJECTS.title.zh}</Zh>
                <Ko>{ABOUT_PROJECTS.title.ko}</Ko>
              </h2>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                <En translated>{ABOUT_PROJECTS.desc.en}</En>
                <Ja>{ABOUT_PROJECTS.desc.ja}</Ja>
                <Zh>{ABOUT_PROJECTS.desc.zh}</Zh>
                <Ko>{ABOUT_PROJECTS.desc.ko}</Ko>
              </p>
            </div>
          </div>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base md:text-lg mb-5">
            <En translated>{ABOUT_PROJECTS.intro.en}</En>
            <Ja>{ABOUT_PROJECTS.intro.ja}</Ja>
            <Zh>{ABOUT_PROJECTS.intro.zh}</Zh>
            <Ko>{ABOUT_PROJECTS.intro.ko}</Ko>
          </p>
          <div className="space-y-5">
            {ABOUT_PROJECTS.tools.map((tool, i) => (
              <article
                key={tool.id}
                className={`reveal reveal-delay-${(i % 5) + 1} ${tool.accent} border rounded-2xl p-6 md:p-7`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl shrink-0">{tool.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="font-serif text-xl md:text-2xl text-stone-900 dark:text-stone-100">{tool.title}</h3>
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-current/20 text-stone-600 dark:text-stone-300 bg-white/60 dark:bg-dark-surface/60">
                        {tool.badge}
                      </span>
                    </div>
                    <p className="font-serif text-base text-stone-700 dark:text-stone-300 italic mb-2">
                      <En translated>{tool.headline.en}</En>
                      <Ja>{tool.headline.ja}</Ja>
                      <Zh>{tool.headline.zh}</Zh>
                      <Ko>{tool.headline.ko}</Ko>
                    </p>
                    <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
                      <En translated>{tool.desc.en}</En>
                      <Ja>{tool.desc.ja}</Ja>
                      <Zh>{tool.desc.zh}</Zh>
                      <Ko>{tool.desc.ko}</Ko>
                    </p>
                    <p className="text-sm md:text-base text-stone-700 dark:text-stone-300 leading-relaxed mb-3">
                      <En translated>{tool.origins.en}</En>
                      <Ja>{tool.origins.ja}</Ja>
                      <Zh>{tool.origins.zh}</Zh>
                      <Ko>{tool.origins.ko}</Ko>
                    </p>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {tool.features.en.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400">
                      <span className="text-sage-ink shrink-0 mt-0.5">✓</span>
                      <En translated>{f}</En>
                      <Ja>{tool.features.ja[fi] ?? f}</Ja>
                      <Zh>{tool.features.zh[fi] ?? f}</Zh>
                      <Ko>{tool.features.ko[fi] ?? f}</Ko>
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-medium text-sunset-ink mb-4">
                  ✦ <En translated>{tool.highlight.en}</En>
                  <Ja>{tool.highlight.ja}</Ja>
                  <Zh>{tool.highlight.zh}</Zh>
                  <Ko>{tool.highlight.ko}</Ko>
                </p>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-sm px-5 py-2.5 rounded-full bg-sunset-ink text-white hover:bg-sunset-light transition-colors shadow-sm"
                >
                  <En translated>{tool.visit.en}</En>
                  <Ja>{tool.visit.ja}</Ja>
                  <Zh>{tool.visit.zh}</Zh>
                  <Ko>{tool.visit.ko}</Ko>
                  <span>→</span>
                </a>
              </article>
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
              className="inline-flex items-center gap-1 font-medium text-sm text-sunset-ink hover:underline"
            >
              michaelbui@outlook.com.au →
            </a>
          </p>
        </section>

        <div className="text-center pt-2">
          <LocaleLink href="/" className="text-sm text-sunset-ink hover:underline">
            ← Back to AussieGuides
          </LocaleLink>
        </div>
      </div>


    </div>
  );
}

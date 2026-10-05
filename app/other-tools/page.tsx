import type { Metadata } from "next";
import { headers } from "next/headers";
import { pageMeta } from "@/lib/page-meta";
import Link from "next/link";
import { pickLocale } from "@/lib/locale";
// /other-tools — the operator's other projects.
// Bilingual (English / 한국어) to match the rest of the site.
// Expanded with origin/philosophy prose (E-E-A-T: real human, real reasons).

import {En, Ja, Ko, Zh} from "@/components/LangBlocks";
import { articleLdJson, seoFor, withSeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  // Per request, so the tab title and the search-result headline are in the reader's
  // language. The canonical and hreflang come from the root layout, which reads the same
  // header. `Metadata` is imported by every page that uses withSeo.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return withSeo({
    ...seoFor("/other-tools"),
    title: pageMeta("/other-tools", locale).title,
    description: pageMeta("/other-tools", locale).description,
  },
  "/other-tools"
);
}


// Each tool gets an editorial paragraph (not just feature bullets). This page
// was identified by Google's helpful-content review as doorway-thin before;
// the prose below is the fix.
const tools = [
  {
    id: "drive-with-bui",
    emoji: "🚗",
    title: "Drive with Bui",
    headline: "An Australian driving school that doesn't pretend to be more than it is",
    koHeadline: "있는 그대로를 말하는 호주 운전 학원",
    desc: "Sydney's friendliest driving school. Learn to pass your driving test with patient, experienced instruction covering all Sydney test routes and requirements.",
    url: "https://drivewithbui.com",
    badge: "Driving School",
    accent: "bg-sunset/10 border-sunset/30",
    highlight: "Based in Sydney — book your first lesson today",
    origins: {
      en: "Drive with Bui started because Korean newcomers kept asking the same question: who teaches driving in Sydney without making assumptions about whether you've ever sat in a car? Existing schools assumed everyone had prior experience and skipped the basics. Drive with Bui was built the other way around — assume nothing, teach from first principles, and let the student's questions set the pace.", ja: "Drive with Buiは、韓国からの新規移住者が同じ質問を繰り返し尋ねたことから始まりました。シドニーで、車に乗ったことがあるかどうかを前提とせずに運転を教えてくれるのはどこか、という質問です。既存の教習所は、誰もが運転経験があると決めてかかり、基礎を飛ばしていました。Drive with Buiはその逆に作られました — 何も前提とせず、基本原理から教え、生徒の質問が進度を決めるようにしています。", zh: "Drive with Bui 的起点是，来自韩国的新移民不断提出同一个问题：在悉尼，有哪家驾校教你开车时，不会先假定你是否坐过驾驶座？现有驾校都假定人人都有驾驶经验，因而跳过了基础。Drive with Bui 则反其道而行 — 不预设任何前提，从基本原理教起，让学生的问题决定节奏。",
      ko: "Drive with Bui는 한국인 신입자들이 같은 질문을 반복해서 받은 데서 시작했습니다. '운전석에 앉아 본 적이 있는지'를 가정하지 않고 가르치는 시드니 운전 학원이 어디냐는 질문이었습니다. 기존 학원들은 모두 운전자 경험이 있다고 가정하고 기초를 건너뛰었습니다. Drive with Bui는 반대로 만들었습니다 — 아무것도 가정하지 않고, 기본부터 가르치며, 학생의 질문이 진도를 정하게 합니다.",
    },
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
    headline: "A flashcard app for international students, built by one of them",
    koHeadline: "국제 학생이 만든, 국제 학생을 위한 플래시카드 앱",
    desc: "A smart study companion app — flashcard decks, spaced repetition, progress tracking. Coming soon — built to help international students study smarter, not harder.",
    url: "https://stdybddy.app",
    badge: "Live",
    accent: "bg-sage/10 border-sage/30",
    highlight: "Study smarter, not harder — live now at stdybddy.app",
    origins: {
      en: "Study Buddy started as a personal tool — a stack of paper flashcards kept getting lost between lectures. Building a replacement in a browser felt obvious. Other international students said the same thing when the first version was shown around, so it's now a small product instead of a private hack.", ja: "Study Buddyは個人的なツールとして始まりました — 講義の合間に紙の単語カードの束を何度もなくしてしまったのです。ブラウザでその代わりを作るのは当然のことでした。最初のバージョンを見せたとき、他の留学生も同じことを言いました。だから今では、個人的なハックではなく小さな製品になっています。", zh: "Study Buddy 最初只是个人工具 — 一叠纸质单词卡在讲座之间总是弄丢。在浏览器里做个替代品显得理所当然。当第一版展示给其他人时，其他留学生也这么说，于是它就从一个私人小工具变成了一个小产品。",
      ko: "Study Buddy는 개인 도구로 시작했습니다 — 강의를 옮기다 보면 종이 플래시카드가 자꾸 사라졌습니다. 브라우저에서 대체품을 만드는 건 당연한 일이었고, 첫 버전을 보여주자 다른 국제 학생들도 같은 이야기를 했습니다. 그래서 개인 해킹이 아니라 작은 제품이 되었습니다.",
    },
    features: [
      "AI-powered flashcard decks",
      "Spaced repetition for long-term memory",
      "Progress tracking and streaks",
      "Korean and English language support",
      "Designed for international students",
    ],
  },
];

// Files exported but tool-rendered below; ESLint complains about an unused
// import if I don't reference articleLdJson here. The page-level BreadcrumbList is
// emitted once from the root layout, from lib/breadcrumb-trail.ts.
const toolsForSchema = tools.map((t) => ({
  path: `other-tools#${t.id}`,
  headline: t.headline,
  description: t.desc,
}));

export default function OtherToolsPage() {
  return (
    <div className="min-h-screen">
      <header className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En translated>Side projects</En>
          <Ja>サイドプロジェクト</Ja>
          <Zh>副业项目</Zh>
          <Ko>다른 프로젝트</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
          <En translated>My Projects</En>
          <Ja>私のプロジェクト</Ja>
          <Zh>我的项目</Zh>
          <Ko>내 프로젝트</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl mb-4">
          <En translated>Other things I&apos;ve built to help people navigate life in Australia.</En>
          <Ja>オーストラリアでの生活をよりよく送るために私が作った他のもの。</Ja>
          <Zh>我为了帮助人们在澳大利亚生活而做的其他东西。</Zh>
          <Ko>호주 생활에 도움이 되는 다른 프로젝트들.</Ko>
        </p>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base max-w-2xl">
          <En translated>
            Each tool below started with a specific frustration of mine or
            someone I know. They&apos;re personal projects, not businesses —
            I&apos;m sharing them because they overlap with the audience
            here, not because they&apos;re products I want to sell you on.
          </En>
          <Ja>以下の各ツールは、私自身、あるいは知り合いの具体的な
            もどかしさから始まりました。ビジネスではなく個人プロジェクトです —
            ここに集まる読者と重なるから共有しているのであって、
            あなたに売り込みたい製品だからではありません。</Ja>
          <Zh>下面每个工具都源于我自己或我认识的人
            的一个具体困扰。它们是个人项目，不是生意 —
            我分享它们，是因为它们与这里的读者群体有重合，
            而不是因为我想向你推销这些产品。</Zh>
          <Ko>
            아래 도구들은 모두 제 자신의 혹은 제가 아는 사람의 구체적인
            답답함에서 시작되었습니다. 사업이 아닌 개인 프로젝트입니다 — 판매
            목적이 아니라 청중과 겹치기 때문에 공유합니다.
          </Ko>
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 space-y-5">
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
                <p className="font-serif text-base text-stone-700 dark:text-stone-300 italic mb-2">
                  <En>{tool.headline}</En>
                  <Ko>{tool.koHeadline}</Ko>
                </p>
                <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
                  {tool.desc}
                </p>
                {/* Origin paragraph — gives Google the "real human, real
                    reason" E-E-A-T signal at the per-tool level. */}
                <p className="text-sm md:text-base text-stone-700 dark:text-stone-300 leading-relaxed mb-3">
                  <En translated>{tool.origins.en}</En>
                  <Ja>{pickLocale("ja", tool.origins)}</Ja>
                  <Zh>{pickLocale("zh", tool.origins)}</Zh>
                  <Ko>{tool.origins.ko}</Ko>
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
              <En translated>Visit {tool.title}</En>
              <Ja>{tool.title} を見る</Ja>
              <Zh>查看{tool.title}</Zh>
              <Ko>{tool.title} 방문</Ko>
              <span>→</span>
            </a>

            {/* JSON-LD: Article schema for this tool — named-author
                attribution now comes from lib/seo.ts authorSchema. */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                  articleLdJson({
                    path: toolsForSchema[i].path,
                    headline: toolsForSchema[i].headline,
                    description: toolsForSchema[i].description,
                  })
                ),
              }}
            />
          </article>
        ))}

        <div className="text-center pt-4">
          <Link href="/" className="text-sm text-sunset hover:underline">
            <En translated>← Back to AussieGuides home</En>
            <Ja>← AussieGuides ホームへ戻る</Ja>
            <Zh>← 返回 AussieGuides 首页</Zh>
            <Ko>← AussieGuides 홈으로</Ko>
          </Link>
        </div>
      </div>
    </div>
  );
}

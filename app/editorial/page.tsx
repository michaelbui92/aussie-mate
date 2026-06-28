// /editorial — Editorial standards page.
// Required by ad-quality policy (AdSense) and the helpful-content update (Search).
// Bilingual (English / 한국어) to match the rest of the site.
// First-person: every commitment here is made by one person and is verifiable.

import type { Metadata } from "next";
import { En, Ko } from "@/components/LangBlocks";
import { breadcrumbLdJson, seoFor, withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo(
  {
    ...seoFor("/editorial"),
    title: "Editorial standards — how this site is written",
    description:
      "How AussieGuides writes, sources, reviews, and corrects its content — a first-person editorial standard page covering sources, review cadence, and how to report errors.",
  },
  "/editorial"
);

const lastUpdated = "26 June 2026";

export default function EditorialPage() {
  return (
    <div className="min-h-screen">
      <header className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En>Editorial</En>
          <Ko>편집 기준</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-3">
          <En>How this site is written</En>
          <Ko>이 사이트가 쓰여지는 방식</Ko>
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          <En>Last updated: {lastUpdated}</En>
          <Ko>최종 업데이트: {lastUpdated}</Ko>
        </p>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 space-y-12 text-stone-700 dark:text-stone-300 leading-relaxed">

        {/* 1. Sources */}
        <article>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>1. Where the information comes from</En>
            <Ko>1. 정보의 출처</Ko>
          </h2>
          <En>
            <p>
              Every claim on this site is sourced from a real, verifiable place.
              For legal and policy questions — visas, tax, healthcare, working
              rights — the primary source is the relevant Australian government
              site (homeaffairs.gov.au, ato.gov.au, servicesaustralia.gov.au,
              fairwork.gov.au). For prices, transit routes, and opening hours,
              I cross-check the operator's official site with the most recent
              Australian community reports I can find.
            </p>
            <p className="mt-3">
              Where the information is based on personal experience — for
              example, which suburbs have weekend GP availability or
              which banks have multilingual staff — I'll say so
              plainly. Where it isn't, I'll link to the official source and
              stop there.
            </p>
          </En>
          <Ko>
            <p>
              본 사이트의 모든 정보는 실제로 검증 가능한 출처에서 가져옵니다.
              법률·정책 정보(비자, 세금, 의료, 근무 권리)는 호주 정부 공식
              사이트(homeaffairs.gov.au, ato.gov.au, servicesaustralia.gov.au,
              fairwork.gov.au)를 우선 출처로 사용합니다. 가격, 교통 노선,
              영업시간은 운영자 공식 사이트와 최근 호주 커뮤니티 보고를 교차
              확인합니다.
            </p>
            <p className="mt-3">
              개인 경험에 기반한 정보(예: 한국어 통하는 GP가 많은 지역)는
              그것을 분명히 표시합니다. 그렇지 않은 경우 공식 출처를 링크하고
              그 이상은 언급하지 않습니다.
            </p>
          </Ko>
        </article>

        {/* 2. Cadence */}
        <article>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>2. How often content is reviewed</En>
            <Ko>2. 콘텐츠 업데이트 주기</Ko>
          </h2>
          <En>
            <p>
              Time-sensitive pages (visas, tax, transit fares, contact details
              for hard-to-find services) are reviewed at least once per quarter.
              Evergreen pages (general culture, slang, what to expect at the
              beach) are reviewed once a year or when a reader flags an issue.
            </p>
            <p className="mt-3">
              Every page carries a last-updated stamp in its metadata. If a
              page does not show one, it is a bug — please tell me.
            </p>
          </En>
          <Ko>
            <p>
              시의성이 높은 페이지(비자, 세금, 교통 요금, 찾기 어려운 서비스의
              연락처)는 최소 분기 1회 검토합니다. 지속성 있는 페이지(문화,
              슬랭, 해변 매너 등)는 연간 1회 또는 독자 제보 시 검토합니다.
            </p>
            <p className="mt-3">
              모든 페이지는 metadata에 최종 업데이트 시점을 표기합니다.
              표시되지 않았다면 버그이니 알려주세요.
            </p>
          </Ko>
        </article>

        {/* 3. No AI scraping */}
        <article>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>3. What doesn't go into a page</En>
            <Ko>3. 페이지에 들어가지 않는 것들</Ko>
          </h2>
          <En>
            <p>There are a few things this site won't do:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1.5">
              <li>
                <strong>No auto-generated content.</strong> Every page is
                written by a person (me), based on real experience or checked
                against a primary source.
              </li>
              <li>
                <strong>No scraped-and-spun text.</strong> Nothing on this site
                is paraphrased from another website. If a topic requires
                extensive legal or policy detail, I link to the original source
                instead of restating it.
              </li>
              <li>
                <strong>No pay-to-rank recommendations.</strong> No destination,
                visa, restaurant, or product is on this site because someone
                paid for it to be. Suggestions are based on what I'd actually
                tell a friend arriving this week.
              </li>
              <li>
                <strong>No anonymous affiliate links.</strong> Affiliate links
                get a disclosure banner or are removed. Right now the site runs
                no affiliate links.
              </li>
            </ul>
          </En>
          <Ko>
            <p>본 사이트는 다음과 같은 일을 하지 않습니다:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1.5">
              <li>
                <strong>자동 생성 콘텐츠 없음.</strong> 모든 페이지는 사람이
                직접 작성하며, 실제 경험 또는 1차 출처 검증에 기반합니다.
              </li>
              <li>
                <strong>스크랩 후 다시 쓴 텍스트 없음.</strong> 어떤 사이트의
                내용을 의역하여 사용하지 않습니다. 광범위한 법률·정책 정보가
                필요한 경우, 다시 쓰지 않고 원본을 링크합니다.
              </li>
              <li>
                <strong>순위 매기는 sponsorship 없음.</strong> 어떤 여행지,
                비자, 식당, 제품도 대가로 게재되지 않습니다. 추천은 이번 주
                도착한 친구에게 실제로 말해줄 것을 기준으로 합니다.
              </li>
              <li>
                <strong>익명 affiliate 링크 없음.</strong> affiliate 링크는
                고지 배너를 표시하거나 삭제합니다. 현재 본 사이트는 affiliate
                링크를 운영하지 않습니다.
              </li>
            </ul>
          </Ko>
        </article>

        {/* 4. Errors */}
        <article>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>4. Reporting an error</En>
            <Ko>4. 오류 제보</Ko>
          </h2>
          <En>
            <p>
              If you spot something that's wrong, outdated, or missing — whether
              it's a price that's moved on, a train station that closed, or a
              Korean phrase that's been translated incorrectly — please tell me.
              Corrections are welcome, attribution is given when wanted, and
              the page is updated promptly.
            </p>
            <p className="mt-3">
              The fastest route is email:{" "}
              <a
                href="mailto:michaelbui@outlook.com.au"
                className="text-sunset underline"
              >
                michaelbui@outlook.com.au
              </a>
              . It goes to a personal inbox rather than a support queue. You
              can also open a GitHub issue on{" "}
              <a
                href="https://github.com/michaelbui92/aussie-mate/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                github.com/michaelbui92/aussie-mate/issues
              </a>
              .
            </p>
          </En>
          <Ko>
            <p>
              잘못된 부분, 변경된 부분, 빠진 부분을 발견하셨다면 알려주세요 —
              변경된 가격, 폐쇄된 역, 잘못 번역된 한국어 표현 모두. 수정 의견은
              환영하며, 원하시면 크레딧을 표기하고 페이지는 빠르게 업데이트합니다.
            </p>
            <p className="mt-3">
              가장 빠른 경로는 이메일입니다:{" "}
              <a
                href="mailto:michaelbui@outlook.com.au"
                className="text-sunset underline"
              >
                michaelbui@outlook.com.au
              </a>
              . support 큐가 아닌 개인 inbox로 전달됩니다. 또는{" "}
              <a
                href="https://github.com/michaelbui92/aussie-mate/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                github.com/michaelbui92/aussie-mate/issues
              </a>
              에 이슈를 올려주셔도 됩니다.
            </p>
          </Ko>
        </article>

        {/* 5. Authentication */}
        <article>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>5. Self-imposed limitations</En>
            <Ko>5. 자진 제한</Ko>
          </h2>
          <En>
            <p>
              For topics where I lack hands-on experience — migration law,
              serious mental-health support, immigration appeals — I won't
              write the page myself. Instead the relevant section links
              directly to a qualified Australian source (a community legal
              centre, Lifeline, the relevant tribunal). The site's value
              comes from saying what it doesn't know.
            </p>
            <p className="mt-3">
              For everything else I will write: ordinary life, settling in,
              money and banking, getting around, working, studying, and the
              things you'd ask a friend who has lived in Sydney for ten years.
            </p>
          </En>
          <Ko>
            <p>
              직접 경험이 부족한 분야 — 이민법, 심각한 정신건강 지원, 이민
              항소 — 는 직접 작성하지 않습니다. 대신 해당 섹션은 호주의 자격을
              갖춘 출처(커뮤니티 법률 센터, Lifeline, 관련 tribunal)로 직접
              링크합니다. 사이트의 가치는 모르는 것을 드러내는 데서 옵니다.
            </p>
            <p className="mt-3">
              그 외 일반 생활, 정착, 재정, 교통, 근무, 학업, 시드니 10년
              동거 친구에게 물어볼 일상적인 부분은 직접 씁니다.
            </p>
          </Ko>
        </article>

        {/* 6. Contact */}
        <article className="rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-7">
          <h2 className="font-serif text-2xl leading-tight mb-3">
            <En>6. Reach the editor</En>
            <Ko>6. 편집자에게 연락</Ko>
          </h2>
          <p className="text-stone-200 text-base leading-relaxed">
            <En>
              All corrections, suggestions, and source amendments go to the
              same person who wrote the pages. There is no editorial board,
              no review queue — your email reaches me directly.
            </En>
            <Ko>
              수정 의견, 제안, 출처 보완 요청은 모두 페이지를 쓴 사람에게 직접
              전달됩니다. 편집위원회나 검토 큐 없이, 이메일이 저에게 바로
              도착합니다.
            </Ko>
          </p>
        </article>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbLdJson([
                { name: "Home", path: "" },
                { name: "Editorial standards", path: "editorial" },
              ])
            ),
          }}
        />
      </div>
    </div>
  );
}

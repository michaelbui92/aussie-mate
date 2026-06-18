import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import { visas } from "./data";
import { breadcrumbLdJson, seoFor, withSeo } from "@/lib/seo";

export const metadata = withSeo(
  {

  ...seoFor("/visa"),
  title: "Australian Visa Guide for Koreans — AussieGuides",
  description:
    "Plain-English (and Korean) overview of Australia's main visa subclasses for Korean visitors and migrants: 417 Working Holiday, 500 Student, 189/190 Skilled, 820/801 Partner, and 600/601/651 Visitor.",
  },
  "/visa"
);

const quickFacts = [
  {
    en: "General information only — not immigration advice.",
    ko: "일반 정보이며, 이민 자문이 아닙니다.",
  },
  {
    en: "Always verify current rules on the Department of Home Affairs website.",
    ko: "최신 규정은 반드시 호주 이민국 웹사이트에서 확인하세요.",
  },
  {
    en: "For complex cases, consider a registered MARA agent.",
    ko: "복잡한 사례는 MARA 등록 대행인 이용을 권장합니다.",
  },
];

export default function VisaHub() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* BreadcrumbList JSON-LD — shows the path under the page title in Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLdJson([{ name: "Home", path: "" }, { name: "Visa Guide", path: "visa" }])
          ),
        }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-sunset/15 via-stone-50 to-amber-50 dark:from-sunset/20 dark:via-darkbg dark:to-amber-950/20 border-b border-stone-200/60 dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-4">
            <En>Visa Guide</En>
            <Ko>비자 가이드</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[1.05] mb-6">
            <En>Australian visas, explained simply</En>
            <Ko>호주 비자, 쉽게 설명해 드립니다</Ko>
          </h1>
          <p className="font-serif text-lg md:text-xl text-stone-700 dark:text-stone-300 max-w-2xl leading-relaxed mb-8">
            <En>
              The five visa subclasses most Korean visitors, students, workers,
              and partners encounter. Plain English and 한국어 side by side.
            </En>
            <Ko>
              한국인 방문자, 유학생, 직장인, 파트너가 가장 자주 접하는 다섯 가지
              비자 서브클래스를 정리했습니다. 영어와 한국어를 나란히 제공합니다.
            </Ko>
          </p>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 rounded-2xl p-5 text-sm text-stone-700 dark:text-stone-300">
            <p className="font-semibold text-sunset mb-2">
              <En>Important</En>
              <Ko>주의사항</Ko>
            </p>
            <ul className="space-y-1.5 leading-relaxed">
              {quickFacts.map((f) => (
                <li key={f.en} className="flex items-start gap-2">
                  <span className="shrink-0 w-1 h-1 rounded-full bg-sunset mt-2.5" />
                  <span>
                    <En>{f.en}</En>
                    <Ko>{f.ko}</Ko>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-stone-500 dark:text-stone-400">
              <En>
                Official source:{" "}
                <a
                  className="underline hover:text-sunset"
                  href="https://immi.homeaffairs.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  immi.homeaffairs.gov.au
                </a>
                {" · "}
                <a
                  className="underline hover:text-sunset"
                  href="https://www.mara.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find a MARA agent
                </a>
              </En>
              <Ko>
                공식 출처:{" "}
                <a
                  className="underline hover:text-sunset"
                  href="https://immi.homeaffairs.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  immi.homeaffairs.gov.au
                </a>
                {" · "}
                <a
                  className="underline hover:text-sunset"
                  href="https://www.mara.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MARA 등록 대행인 찾기
                </a>
              </Ko>
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-6">
          <En>At a glance</En>
          <Ko>한눈에 보기</Ko>
        </p>

        <div className="overflow-x-auto rounded-2xl border border-stone-200/60 dark:border-dark-border bg-white dark:bg-dark-surface shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-stone-100 dark:bg-stone-800/50 text-stone-600 dark:text-stone-300">
              <tr>
                <th className="text-left px-4 py-3 font-medium">
                  <En>Visa</En>
                  <Ko>비자</Ko>
                </th>
                <th className="text-left px-4 py-3 font-medium">
                  <En>Best for</En>
                  <Ko>추천 대상</Ko>
                </th>
                <th className="text-left px-4 py-3 font-medium">
                  <En>Stay</En>
                  <Ko>체류</Ko>
                </th>
                <th className="text-left px-4 py-3 font-medium">
                  <En>Work</En>
                  <Ko>근무</Ko>
                </th>
                <th className="text-left px-4 py-3 font-medium">
                  <En>From</En>
                  <Ko>신청비</Ko>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200/60 dark:divide-dark-border">
              {visas.map((v) => (
                <tr
                  key={v.slug}
                  className="hover:bg-sunset/5 transition-colors"
                >
                  <td className="px-4 py-3 align-top">
                    <Link
                      href={`/visa/${v.slug}`}
                      className="font-serif text-base text-stone-900 dark:text-stone-100 hover:text-sunset"
                    >
                      <En>{v.name.en}</En>
                      <Ko>{v.name.ko}</Ko>
                    </Link>
                    <p className="text-[11px] text-stone-400 dark:text-stone-500 mt-0.5">
                      {v.code}
                    </p>
                  </td>
                  <td className="px-4 py-3 align-top text-stone-700 dark:text-stone-300">
                    <En>{v.audience.en}</En>
                    <Ko>{v.audience.ko}</Ko>
                  </td>
                  <td className="px-4 py-3 align-top text-stone-700 dark:text-stone-300">
                    <En>{v.duration.en}</En>
                    <Ko>{v.duration.ko}</Ko>
                  </td>
                  <td className="px-4 py-3 align-top text-stone-700 dark:text-stone-300">
                    <En>{v.workRights.en}</En>
                    <Ko>{v.workRights.ko}</Ko>
                  </td>
                  <td className="px-4 py-3 align-top text-stone-700 dark:text-stone-300 whitespace-nowrap">
                    <En>{v.cost.en}</En>
                    <Ko>{v.cost.ko}</Ko>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Visa cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-6">
          <En>Pick a visa</En>
          <Ko>비자 선택</Ko>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visas.map((v) => (
            <Link
              key={v.slug}
              href={`/visa/${v.slug}`}
              className="group block p-6 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-sunset/40 hover:shadow-lg transition-all"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-sunset mb-2">
                {v.code}
              </p>
              <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 group-hover:text-sunset transition-colors mb-2">
                <En>{v.name.en}</En>
                <Ko>{v.name.ko}</Ko>
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                <En>{v.tagline.en}</En>
                <Ko>{v.tagline.ko}</Ko>
              </p>
              <p className="text-xs text-sunset font-medium">
                <En>Read more →</En>
                <Ko>자세히 보기 →</Ko>
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* BreadcrumbList — shows "Home › Visa Guide" path in SERP. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLdJson([
              { name: "Home", path: "" },
              { name: "Visa Guide", path: "visa" },
            ])
          ),
        }}
      />
    </div>
  );
}

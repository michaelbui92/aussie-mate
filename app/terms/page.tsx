// Terms of Service page — sets the no-affiliation, no-liability, and use-at-own-risk
// disclaimers that protect the project from misuse of the information.

import type { Metadata } from "next";
import { En, Ko } from "@/components/LangBlocks";
import { seoFor, withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo(
  {

  ...seoFor("/terms"),
  title: "Terms of Service",
  description:
    "AussieGuides terms of service — no affiliation with government, no professional advice, use at your own risk, content may be outdated.",
  },
  "/terms"
);

const lastUpdated = "17 June 2026";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <header className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En>Legal</En>
          <Ko>법적 고지</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-3">
          <En>Terms of Service</En>
          <Ko>이용 약관</Ko>
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          <En>Last updated: {lastUpdated}</En>
          <Ko>최종 업데이트: {lastUpdated}</Ko>
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 space-y-10 text-stone-700 dark:text-stone-300 leading-relaxed">
        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>1. No professional advice</En>
            <Ko>1. 전문 자문이 아님</Ko>
          </h2>
          <En>
            <p>
              AussieGuides is a general information site. Nothing on this site is legal,
              financial, immigration, tax, medical, or other professional advice.
              Always verify current rules and prices on the official Australian
              government and bank websites before acting. The author is not a lawyer,
              accountant, migration agent, or financial adviser.
            </p>
          </En>
          <Ko>
            <p>
              AussieGuides는 일반 정보 제공 목적의 사이트입니다. 본 사이트의 어떠한
              내용도 법률·재무·이민·세무·의료 등 전문 자문에 해당하지 않습니다. 행동을
              취하기 전에 반드시 호주 정부·은행의 공식 웹사이트에서 최신 규정과
              가격을 확인하세요. 운영자는 변호사·회계사·��민 에이전트·재무 상담사가
              아닙니다.
            </p>
          </Ko>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>2. No affiliation</En>
            <Ko>2. 제휴 관계 없음</Ko>
          </h2>
          <En>
            <p>
              AussieGuides is an independent, non-commercial project. We are not
              affiliated with any Australian government agency, university, bank,
              employer, or organisation mentioned on the site. References to third
              parties (ATO, Services Australia, Fair Work, NSW Fair Trading, the big
              banks, etc.) are factual only and do not imply endorsement or
              partnership.
            </p>
          </En>
          <Ko>
            <p>
              AussieGuides는 독립적인 비상업 프로젝트입니다. 호주 정부 기관, 대학,
              은행, 고용주 또는 사이트에 언급된 어느 조직과도 제휴 관계가 없습니다.
              제3자(ATO, Services Australia, Fair Work, NSW Fair Trading, 4대 은행 등)에
              대한 언급은 사실 관계를 설명하기 위한 것일 뿐 보증 또는 파트너십을
              의미하지 않습니다.
            </p>
          </Ko>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>3. Information may be outdated</En>
            <Ko>3. 정보는 최신이 아닐 수 있음</Ko>
          </h2>
          <En>
            <p>
              Rules, prices, fees, and procedures in Australia change frequently.
              While we try to keep content current, we make no warranty as to the
              accuracy or completeness of any information on this site. Prices shown
              (e.g., Opal fares, bank fees, super rates, wages) are approximate and
              were correct at the time of writing but may have changed. Always check
              the official source before making decisions.
            </p>
          </En>
          <Ko>
            <p>
              호주의 규정·가격·수수료·절차는 자주 변경됩니다. 최신 상태로 유지하려
              노력하지만, 본 사이트의 어떠한 정보도 정확성·완전성을 보증하지
              않습니다. 표기된 가격(오팔 요금, 은행 수수료, 퇴직연금 비율, 임금
              등)은 작성 시점 기준의 근사치이며 변경되었을 수 있습니다. 결정을
              내리기 전에는 항상 공식 출처를 확인하세요.
            </p>
          </Ko>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>4. Use at your own risk</En>
            <Ko>4. 사용자 책임 하에 이용</Ko>
          </h2>
          <En>
            <p>
              You use this site at your own risk. The author and contributors are
              not liable for any loss, damage, or inconvenience arising from your use
              of information on this site — including (without limitation) financial
              loss, visa problems, employment disputes, or housing issues. If
              something on this site turns out to be wrong and causes you problems,
              that&apos;s on you — please tell us so we can fix it.
            </p>
          </En>
          <Ko>
            <p>
              본 사이트의 이용은 본인 책임 하에 이루어집니다. 운영자와 기여자는 본
              사이트 정보 이용으로 발생하는 어떠한 손실·피해·불편(재적 손실, 비자
              문제, 고용 분쟁, 주거 문제 포함)에도 책임을 지지 않습니다. 본 사이트
              정보가 사실과 달라 문제가 발생했다면, 본인의 책임이��� — 가능한 한
              빨리 알려주시면 수정하겠습니다.
            </p>
          </Ko>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>5. Third-party links</En>
            <Ko>5. 외부 링크</Ko>
          </h2>
          <En>
            <p>
              This site links to external websites (government portals, bank sites,
              transport operators). We don&apos;t control those sites and aren&apos;t
              responsible for their content, privacy practices, or availability.
              Following an external link is at your own discretion.
            </p>
          </En>
          <Ko>
            <p>
              본 사이트는 외부 사이트(정부 포털, 은행, 교통 기관 등)로 링크를
              제공합니다. 당사는 해당 사이트를 통제하지 않으며, 콘텐츠·개인정보
              처리·가용성에 대해 책임을 지지 않습니다. 외부 링크 이동은 이용자 본인의
              판단 하에 이루어져야 합니다.
            </p>
          </Ko>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>6. Intellectual property</En>
            <Ko>6. 지식재산권</Ko>
          </h2>
          <En>
            <p>
              Original prose on this site is licensed under CC BY-NC-SA 4.0 — you can
              share and adapt it for non-commercial purposes with attribution and
              the same licence. Images are sourced from Unsplash and Pexels under
              their respective licences (commercial use OK, no attribution required
              but appreciated). Aussie English phrases listed are common
              conversational English and not subject to IP.
            </p>
          </En>
          <Ko>
            <p>
              본 사이트의 원문은 CC BY-NC-SA 4.0 라이선스로 제공됩니다 — 출처 표기와
              동일 라이선스 적용 조건 하에 비상업 목적으로 공유 및 2차 저작물이
              허용됩니다. 이미지는 Unsplash, Pexels의 각 라이선스(상업적 사용 가능,
              출처 표기는 의무 아님이나 권장)를 따릅니다. 수록된 호주 영어 표현은 일반
              회화 표현으로 지적재산권 대상이 아닙니다.
            </p>
          </Ko>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>7. Contact</En>
            <Ko>7. 연락처</Ko>
          </h2>
          <En>
            <p>
              Questions or corrections: open an issue on{" "}
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
              문의 또는 정정 요청:{" "}
              <a
                href="https://github.com/michaelbui92/aussie-mate/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                github.com/michaelbui92/aussie-mate/issues
              </a>
              에 이슈를 올려 주세요.
            </p>
          </Ko>
        </section>
      </div>
    </div>
  );
}
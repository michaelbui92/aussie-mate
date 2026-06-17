// Privacy Policy page — required for Google AdSense and other ad networks.
// Bilingual (English / 한국어) to match the rest of the site.

import type { Metadata } from "next";
import { En, Ko } from "@/components/LangBlocks";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "AussieMate privacy policy — what data we collect, how we use it, cookies, advertising (Google AdSense), and your rights.",
};

const lastUpdated = "17 June 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <header className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En>Legal</En>
          <Ko>법적 고지</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-3">
          <En>Privacy Policy</En>
          <Ko>개인정보 처리방침</Ko>
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          <En>Last updated: {lastUpdated}</En>
          <Ko>최종 업데이트: {lastUpdated}</Ko>
        </p>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 space-y-10 text-stone-700 dark:text-stone-300 leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>1. What this site is</En>
            <Ko>1. 사이트 소개</Ko>
          </h2>
          <En>
            <p>
              AussieMate (aussie-mate.vercel.app) is a free bilingual (English / 한국어)
              information site about Australian daily life for Korean newcomers. We are not a
              business, government body, or educational institution — see our{" "}
              <a href="/about" className="text-sunset underline">About page</a>.
            </p>
          </En>
          <Ko>
            <p>
              AussieMate(aussie-mate.vercel.app)는 호주에 새로 온 한국인을 위한 무료
              영한 생활 정보 사이트입니다. 당사는 기업·정부·교육기관이 아니며, 자세한
              내용은 <a href="/about" className="text-sunset underline">소개 페이지</a>를
              참고하세요.
            </p>
          </Ko>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>2. Data we collect</En>
            <Ko>2. 수집하는 정보</Ko>
          </h2>
          <En>
            <p>We collect three categories of data:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Local-only preferences</strong> — your theme (light/dark) and
                language (English/한국어) are stored in your browser&apos;s
                <code> localStorage</code>. We never see these and they never leave your
                device.
              </li>
              <li>
                <strong>Analytics</strong> — Vercel may collect anonymous request counts
                (page, country, response time) for hosting diagnostics. We do not run
                third-party analytics like Google Analytics.
              </li>
              <li>
                <strong>Advertising cookies</strong> — when ads are enabled (Google
                AdSense), Google sets cookies for ad personalisation and frequency
                capping. See Google&apos;s policies for details.
              </li>
            </ul>
          </En>
          <Ko>
            <p>당사는 다음 세 가지 정보를 수집합니다.</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>로컬 환경설정</strong> — 테마(라이트/다크)와 언어
                (English/한국어) 설정은 브라우저의 <code>localStorage</code>에 저장됩니다.
                당사는 이를 볼 수 없고, 사용자의 기기 밖으로 나가지 않습니다.
              </li>
              <li>
                <strong>분석</strong> — Vercel 호스팅 진단을 위해 익명 요청 수(페이지,
                국가, 응답 시간)를 수집할 수 있습니다. Google Analytics 같은 제3자
                분석 도구는 사용하지 않습니다.
              </li>
              <li>
                <strong>광고 쿠키</strong> — 광고(Google AdSense)가 활성화되면 Google이
                광고 개인화 및 노출 빈도 제한을 위한 쿠키를 설정합니다. 자세한 내용은
                Google의 정책을 참고하세요.
              </li>
            </ul>
          </Ko>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>3. Cookies</En>
            <Ko>3. 쿠키</Ko>
          </h2>
          <En>
            <p>
              We use <code>localStorage</code> (not technically cookies) for theme and
              language. If ads are enabled, Google AdSense may set its own cookies or
              use local storage to serve and measure ads. You can opt out of
              personalised advertising at{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                adssettings.google.com
              </a>.
            </p>
          </En>
          <Ko>
            <p>
              테마·언어 설정 저장에는 <code>localStorage</code>를 사용합니다(기술적으로는
              쿠키가 아님). 광고가 활성화되면 Google AdSense가 광고 게재·측정을 위해
              자체 쿠키 또는 로컬 스토리지를 사용할 수 있습니다. 개인화 광고는{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                adssettings.google.com
              </a>
              에서 끌 수 있습니다.
            </p>
          </Ko>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>4. Advertising (Google AdSense)</En>
            <Ko>4. 광고 (Google AdSense)</Ko>
          </h2>
          <En>
            <p>
              This site may display ads served by Google AdSense. Google, as a
              third-party vendor, uses cookies to serve ads based on your prior visits
              to this site or other sites. Google&apos;s use of advertising cookies
              enables it and its partners to serve ads based on your visit to this
              site and/or other sites on the Internet.
            </p>
            <p className="mt-2">
              You may opt out of personalised advertising by visiting{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                Google Ads Settings
              </a>
              . For more information on how Google uses data from partner sites, see{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                How Google uses data when you use our partners&apos; sites or apps
              </a>
              .
            </p>
          </En>
          <Ko>
            <p>
              본 사이트에는 Google AdSense가 게재하는 광고가 표시될 수 있습니다.
              Google은 제3자 광고 공급업체로서 쿠키를 사용하여 사용자의 이전 방문
              이력을 기반으로 광고를 게재합니다. 광고 쿠키를 통해 Google과 파트너사가
              본 사이트 및 인터넷상의 다른 사이트 방문 이력을 바탕으로 광고를 게재할
              수 있습니다.
            </p>
            <p className="mt-2">
              개인화 광고는{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                Google 광고 설정
              </a>
              에서 끌 수 있습니다. 파트너 사이트에서의 Google 데이터 사용 방식에 대한
              자세한 내용은{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                Google의 파트너 정책
              </a>
              을 참고하세요.
            </p>
          </Ko>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>5. Your rights</En>
            <Ko>5. 이용자의 권리</Ko>
          </h2>
          <En>
            <p>
              You can clear the site&apos;s <code>localStorage</code> at any time via
              your browser settings to reset theme and language. For advertising
              cookies, use the opt-out links in section 4. To request deletion of any
              data we hold about you, contact us via the address below.
            </p>
          </En>
          <Ko>
            <p>
              브라우저 설정에서 본 사이트의 <code>localStorage</code>를 삭제하면
              테마·언어 설정을 초기화할 수 있습니다. 광고 쿠키에 대한 거부 링크는
              제4항을 참고하세요. 당사가 보유한 이용자 데이터의 삭제를 요청하려면
              아래 연락처로 문의하세요.
            </p>
          </Ko>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En>6. Contact</En>
            <Ko>6. 연락처</Ko>
          </h2>
          <En>
            <p>
              Questions or requests: open an issue on{" "}
              <a
                href="https://github.com/michaelbui92/aussie-mate/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                github.com/michaelbui92/aussie-mate/issues
              </a>{" "}
              or use the contact form on our{" "}
              <a href="/about" className="text-sunset underline">About page</a>.
            </p>
          </En>
          <Ko>
            <p>
              문의 또는 요청:{" "}
              <a
                href="https://github.com/michaelbui92/aussie-mate/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                github.com/michaelbui92/aussie-mate/issues
              </a>
              에 이슈를 올려주시거나, <a href="/about" className="text-sunset underline">소개 페이지</a>의
              문의 양식을 이용해 주세요.
            </p>
          </Ko>
        </section>
      </div>
    </div>
  );
}
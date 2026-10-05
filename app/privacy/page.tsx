// Privacy Policy page — required for Google AdSense and other ad networks.
// Bilingual (English / 한국어) to match the rest of the site.

import { headers } from "next/headers";
import { pageMeta } from "@/lib/page-meta";
import type { Metadata } from "next";
import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import { seoFor, withSeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  // Per request, so the tab title and the search-result headline are in the reader's
  // language. The canonical and hreflang come from the root layout, which reads the same
  // header. `Metadata` is imported by every page that uses withSeo.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return withSeo({
    ...seoFor("/privacy"),
    title: pageMeta("/privacy", locale).title,
    description: pageMeta("/privacy", locale).description,
  },
  "/privacy"
);
}


const lastUpdated = "17 June 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <header className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En translated>Legal</En>
          <Ja>法的情報</Ja>
          <Zh>法律</Zh>
          <Ko>법적 고지</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-3">
          <En translated>Privacy Policy</En>
          <Ja>プライバシーポリシー</Ja>
          <Zh>隐私政策</Zh>
          <Ko>개인정보 처리방침</Ko>
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          <En translated>Last updated: {lastUpdated}</En>
          <Ja>最終更新日：{lastUpdated}</Ja>
          <Zh>最后更新：{lastUpdated}</Zh>
          <Ko>최종 업데이트: {lastUpdated}</Ko>
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 space-y-10 text-stone-700 dark:text-stone-300 leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En translated>1. What this site is</En>
            <Ja>1. このサイトについて</Ja>
            <Zh>1. 本站是什么</Zh>
            <Ko>1. 사이트 소개</Ko>
          </h2>
          <En translated>
            <p>
              AussieGuides (youraussieguides.com) is a free
              information site about Australian daily life — for anyone visiting, studying,
              working, or settling in Australia, regardless of passport or background. We are
              not a business, government body, or educational institution — see our{" "}
              <a href="/about" className="text-sunset underline">About page</a>.
            </p>
          </En>
          <Ja><p>
              AussieGuides（youraussieguides.com）は、オーストラリアでの日常生活に
              ついての無料情報サイトです — 観光、留学、就労、定住を問わず、
              パスポートや背景を問わず、オーストラリアに関わるすべての人のために。
              私たちは企業、政府機関、教育機関ではありません — 詳しくは{" "}
              <a href="/about" className="text-sunset underline">サイトについて</a>をご覧ください。
            </p></Ja>
          <Zh><p>
              AussieGuides（youraussieguides.com）是一个关于澳大利亚日常生活的
              免费信息网站 — 无论你是来旅游、留学、工作还是定居，无论持哪国护照、
              有什么背景，都适用。我们不是企业、政府机构或教育机构 — 详情请见{" "}
              <a href="/about" className="text-sunset underline">关于页面</a>。
            </p></Zh>
          <Ko>
            <p>
              AussieGuides(youraussieguides.com)는 호주를 처음 찾아오신 분들을 위한 무료
              영한 생활 정보 사이트입니다 — 방문, 유학, 취업, 정착 무엇이든, 국적과 배경에
              상관없이. 당사는 기업·정부·교육기관이 아니며, 자세한 내용은
              <a href="/about" className="text-sunset underline">소개 페이지</a>를
              참고하세요.
            </p>
          </Ko>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En translated>2. Data we collect</En>
            <Ja>2. 収集するデータ</Ja>
            <Zh>2. 我们收集的数据</Zh>
            <Ko>2. 수집하는 정보</Ko>
          </h2>
          <En translated>
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
          <Ja><p>当サイトが収集するデータは3つに分類されます：</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>ローカルにのみ保存される設定</strong> — テーマ（ライト/ダーク）と
                言語（English/한국어/日本語/中文）はブラウザの<code> localStorage</code>に保存されます。当方がこれらを見ることはなく、
                端末から外に出ることもありません。
              </li>
              <li>
                <strong>分析</strong> — Vercel がホスティング診断のために匿名の
                リクエスト数（ページ、国、応答時間）を収集することがあります。
                Google Analytics のような第三者の分析ツールは使用していません。
              </li>
              <li>
                <strong>広告 cookie</strong> — 広告が有効な場合（Google
                AdSense）、Google は広告のパーソナライズとフリークエンシー
                キャップのために cookie を設定します。詳細は Google のポリシーを
                ご覧ください。
              </li>
            </ul></Ja>
          <Zh><p>我们收集三类数据：</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>仅存于本地的偏好设置</strong> — 你的主题（浅色/深色）和
                语言（English/한국어/日本語/中文）保存在浏览器的<code> localStorage</code>中。我们永远看不到这些信息，
                它们也永远不会离开你的设备。
              </li>
              <li>
                <strong>分析数据</strong> — Vercel 可能会收集匿名请求数量
                （页面、国家、响应时间），用于托管诊断。我们不会运行
                Google Analytics 之类的第三方分析工具。
              </li>
              <li>
                <strong>广告 Cookie</strong> — 当广告启用时（Google
                AdSense），Google 会为广告个性化和频次控制设置
                Cookie。详情请参阅 Google 的相关政策。
              </li>
            </ul></Zh>
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
            <En translated>3. Cookies</En>
            <Ja>3. Cookie</Ja>
            <Zh>3. Cookie</Zh>
            <Ko>3. 쿠키</Ko>
          </h2>
          <En translated>
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
          <Ja><p>
              テーマと言語の保存には <code>localStorage</code> を使用しています（厳密には
              cookie ではありません）。広告が有効な場合、Google AdSense が
              広告の配信と計測のために独自の cookie やローカルストレージを
              使用することがあります。パーソナライズ広告は{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                adssettings.google.com
              </a>
              でオフにできます。
            </p></Ja>
          <Zh><p>
              我们使用 <code>localStorage</code> 来保存主题和语言（严格来说并不是
              cookie）。如果启用了广告，Google AdSense 可能会设置自己的 cookie 或
              使用本地存储来投放和衡量广告。你可以在{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                adssettings.google.com
              </a>
              关闭个性化广告。
            </p></Zh>
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
            <En translated>4. Advertising (Google AdSense)</En>
            <Ja>4. 広告（Google AdSense）</Ja>
            <Zh>4. 广告（Google AdSense）</Zh>
            <Ko>4. 광고 (Google AdSense)</Ko>
          </h2>
          <En translated>
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
          <Ja><p>
              このサイトには Google AdSense が配信する広告が表示されることがあります。
              Google は第三者のベンダーとして cookie を使用し、あなたのこのサイトや
              他のサイトへの過去の訪問に基づいて広告を配信します。Google が広告
              cookie を使用することで、Google とそのパートナーは、あなたのこのサイト
              および／またはインターネット上の他のサイトへの訪問に基づいて広告を
              配信できます。
            </p>
            <p className="mt-2">
              パーソナライズ広告は{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                Google 広告設定
              </a>
              からオプトアウトできます。Google がパートナーサイトのデータを
              どのように利用しているかの詳細は{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                Google がパートナーのサイトやアプリのデータを利用する方法
              </a>
              をご覧ください。
            </p></Ja>
          <Zh><p>
              本站可能会展示由 Google AdSense 投放的广告。Google 作为
              第三方供应商，会使用 cookie，根据你此前对本站或其他网站的访问
              来投放广告。Google 对广告 cookie 的使用，使其及其合作伙伴能够
              根据你对本站和／或互联网上其他网站的访问来投放广告。
            </p>
            <p className="mt-2">
              你可以通过{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                Google 广告设置
              </a>
              选择退出个性化广告。关于 Google 如何使用合作伙伴网站的数据，请参阅{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                当您使用我们合作伙伴的网站或应用时 Google 如何使用数据
              </a>
              。
            </p></Zh>
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
            <En translated>5. Your rights</En>
            <Ja>5. あなたの権利</Ja>
            <Zh>5. 你的权利</Zh>
            <Ko>5. 이용자의 권리</Ko>
          </h2>
          <En translated>
            <p>
              You can clear the site&apos;s <code>localStorage</code> at any time via
              your browser settings to reset theme and language. For advertising
              cookies, use the opt-out links in section 4. To request deletion of any
              data we hold about you, contact us via the address below.
            </p>
          </En>
          <Ja><p>
              テーマと言語をリセットするには、ブラウザの設定からいつでもこのサイトの
              <code>localStorage</code> を消去できます。広告 cookie については、
              第4節のオプトアウト用リンクをご利用ください。当方が保有するあなたの
              データの削除を希望される場合は、以下の連絡先までご連絡ください。
            </p></Ja>
          <Zh><p>
              你可以随时通过浏览器设置清除本站的 <code>localStorage</code>，
              以重置主题和语言。关于广告 cookie，请使用第 4 节中的退出链接。
              如需请求删除我们持有的你的任何数据，请通过下面的地址与我们联系。
            </p></Zh>
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
            <En translated>6. Contact</En>
            <Ja>6. お問い合わせ</Ja>
            <Zh>6. 联系方式</Zh>
            <Ko>6. 연락처</Ko>
          </h2>
          <En translated>
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
          <Ja><p>
              ご質問やご要望は{" "}
              <a
                href="https://github.com/michaelbui92/aussie-mate/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                github.com/michaelbui92/aussie-mate/issues
              </a>{" "}
              でイシューを作成するか、{" "}
              <a href="/about" className="text-sunset underline">サイトについて</a>のコンタクトフォームをご利用ください。
            </p></Ja>
          <Zh><p>
              如有问题或请求，请在{" "}
              <a
                href="https://github.com/michaelbui92/aussie-mate/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                github.com/michaelbui92/aussie-mate/issues
              </a>{" "}
              上提交 issue，或使用{" "}
              <a href="/about" className="text-sunset underline">关于页面</a>上的联系表单。
            </p></Zh>
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
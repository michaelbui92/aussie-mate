// /editorial — Editorial standards page.
// Required by ad-quality policy (AdSense) and the helpful-content update (Search).
// Bilingual (English / 한국어) to match the rest of the site.
// First-person: every commitment here is made by one person and is verifiable.

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
    ...seoFor("/editorial"),
    title: pageMeta("/editorial", locale).title,
    description: pageMeta("/editorial", locale).description,
  },
  "/editorial"
);
}


const lastUpdated = "26 June 2026";

export default function EditorialPage() {
  return (
    <div className="min-h-screen">
      <header className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En translated>Editorial</En>
          <Ja>編集方針</Ja>
          <Zh>编辑规范</Zh>
          <Ko>편집 기준</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-3">
          <En translated>How this site is written</En>
          <Ja>このサイトの執筆方針</Ja>
          <Zh>本网站是如何撰写的</Zh>
          <Ko>이 사이트가 쓰여지는 방식</Ko>
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          <En translated>Last updated: {lastUpdated}</En>
          <Ja>最終更新日：{lastUpdated}</Ja>
          <Zh>最后更新：{lastUpdated}</Zh>
          <Ko>최종 업데이트: {lastUpdated}</Ko>
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 space-y-12 text-stone-700 dark:text-stone-300 leading-relaxed">

        {/* 1. Sources */}
        <article>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En translated>1. Where the information comes from</En>
            <Ja>1. 情報の出典</Ja>
            <Zh>1. 信息来自哪里</Zh>
            <Ko>1. 정보의 출처</Ko>
          </h2>
          <En translated>
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
          <Ja><p>
              このサイトのすべての記述は、実際に検証可能な出典に基づいています。
              法律や政策に関する疑問 — ビザ、税金、医療、労働
              権利 — については、関連するオーストラリア政府の
              公式サイト(homeaffairs.gov.au, ato.gov.au, servicesaustralia.gov.au,
              fairwork.gov.au)を一次情報源としています。価格、交通ルート、営業時間に
              ついては、運営者の公式サイトと、直近に見つけられるオーストラリア
              コミュニティの報告を照合しています。
            </p>
            <p className="mt-3">
              個人の経験に基づく情報 — たとえば、週末に
              かかりつけ医を受診できる地区や、多言語対応スタッフがいる
              銀行など — については、そう明記します。そうでない場合は、
              公式の出典へリンクし、それ以上は述べません。
            </p></Ja>
          <Zh><p>
              本网站的每一条信息都来自真实、可核实的来源。
              有关法律和政策的问题 — 签证、税务、医疗、工作
              权益 — 首要来源是相关的澳大利亚政府
              官网(homeaffairs.gov.au, ato.gov.au, servicesaustralia.gov.au,
              fairwork.gov.au)。关于价格、交通线路和营业时间，
              我会将运营方的官网与能找到的最新
              澳大利亚社区反馈进行交叉核对。
            </p>
            <p className="mt-3">
              凡是基于个人经验的信息 — 例如，哪些
              郊区周末有全科医生接诊，或
              哪些银行有多语种员工 — 我会
              明确说明。若非如此，我会链接到官方来源，
              到此为止。
            </p></Zh>
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
            <En translated>2. How often content is reviewed</En>
            <Ja>2. コンテンツの見直し頻度</Ja>
            <Zh>2. 内容的审核频率</Zh>
            <Ko>2. 콘텐츠 업데이트 주기</Ko>
          </h2>
          <En translated>
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
          <Ja><p>
              時期に左右されるページ(ビザ、税金、運賃、見つけにくい
              サービスの連絡先)は、少なくとも四半期に一度見直します。
              長く使えるページ(一般的な文化、スラング、ビーチでの
              マナーなど)は、年に一度、または読者から指摘があったときに見直します。
            </p>
            <p className="mt-3">
              すべてのページには、メタデータに最終更新の日付が入っています。
              表示されていないページはバグです — ぜひ教えてください。
            </p></Ja>
          <Zh><p>
              时效性强的页面(签证、税务、交通票价、难以找到的
              服务的联系方式)至少每季度审核一次。
              长青页面(一般文化、俚语、海滩上的
              注意事项)每年审核一次，或在读者反馈问题时审核。
            </p>
            <p className="mt-3">
              每个页面的元数据中都带有最后更新日期。如果某个
              页面没有显示，那是个 bug — 请告诉我。
            </p></Zh>
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
            <En translated>3. What doesn't go into a page</En>
            <Ja>3. ページに載せないもの</Ja>
            <Zh>3. 哪些内容不会写进页面</Zh>
            <Ko>3. 페이지에 들어가지 않는 것들</Ko>
          </h2>
          <En translated>
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
          <Ja><p>このサイトがしないことがいくつかあります：</p>
            <ul className="list-disc pl-6 mt-2 space-y-1.5">
              <li>
                <strong>自動生成コンテンツはありません。</strong> すべてのページは
                実体験に基づくか、一次情報源と照合したうえで、人（私）が
                書いています。
              </li>
              <li>
                <strong>スクレイピングして作り替えた文章はありません。</strong> このサイトの
                内容は、他のウェブサイトからの言い換えではありません。法律や制度の
                詳細が必要な話題では、要約し直さずに原典へリンクします。
              </li>
              <li>
                <strong>お金で順位を買う推薦はありません。</strong> どの目的地、
                ビザ、レストラン、商品も、誰かがお金を払ったから掲載されている
                わけではありません。提案は、今週オーストラリアに着く友人に
                実際に話す内容に基づいています。
              </li>
              <li>
                <strong>匿名のアフィリエイトリンクはありません。</strong> アフィリエイト
                リンクには開示バナーを付けるか、削除します。現在このサイトは
                アフィリエイトリンクを一切運用していません。
              </li>
            </ul></Ja>
          <Zh><p>这个网站有几件事不会做：</p>
            <ul className="list-disc pl-6 mt-2 space-y-1.5">
              <li>
                <strong>没有自动生成的内容。</strong> 每个页面都由人（我）
                撰写，基于真实经验，或与一手来源核对后的信息。
              </li>
              <li>
                <strong>没有抓取后改写的文字。</strong> 本站没有任何内容
                是从别的网站改写而来。如果某个话题需要大量法律或政策细节，
                我会链接到原始来源，而不是转述。
              </li>
              <li>
                <strong>没有付费就能上榜的推荐。</strong> 没有任何目的地、
                签证、餐厅或产品是因为有人付了钱才出现在本站。所有建议都基于
                我真正会告诉一位本周刚到澳大利亚的朋友的内容。
              </li>
              <li>
                <strong>没有匿名的联盟链接。</strong> 联盟链接要么附上披露
                横幅，要么直接删除。目前本站没有任何联盟链接。
              </li>
            </ul></Zh>
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
            <En translated>4. Reporting an error</En>
            <Ja>4. 誤りの報告</Ja>
            <Zh>4. 报告错误</Zh>
            <Ko>4. 오류 제보</Ko>
          </h2>
          <En translated>
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
          <Ja><p>
              間違い、古くなった情報、欠けている情報に気づいたら — 更新された
              料金、閉鎖された駅、誤って翻訳された韓国語のフレーズなど — ぜひ教えてください。
              訂正は歓迎します。ご希望があればクレジットを記載し、ページは
              すみやかに更新します。
            </p>
            <p className="mt-3">
              いちばん早い方法はメールです：{" "}
              <a
                href="mailto:michaelbui@outlook.com.au"
                className="text-sunset underline"
              >
                michaelbui@outlook.com.au
              </a>
              サポート窓口ではなく、個人の受信箱に届きます。GitHub のイシューは{" "}
              <a
                href="https://github.com/michaelbui92/aussie-mate/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                github.com/michaelbui92/aussie-mate/issues
              </a>
              で開くこともできます。
            </p></Ja>
          <Zh><p>
              如果你发现任何错误、过时或缺失的内容 — 无论是已经变动的价格、
              关闭的车站，还是翻译错误的韩语短语 — 都请告诉我。
              欢迎指正；需要署名时我们会署名，页面也会尽快更新。
            </p>
            <p className="mt-3">
              最快的方式是发邮件：{" "}
              <a
                href="mailto:michaelbui@outlook.com.au"
                className="text-sunset underline"
              >
                michaelbui@outlook.com.au
              </a>
              。它会进入个人收件箱，而不是客服队列。你也可以在{" "}
              <a
                href="https://github.com/michaelbui92/aussie-mate/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                github.com/michaelbui92/aussie-mate/issues
              </a>
              上提交 GitHub issue。
            </p></Zh>
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
            <En translated>5. Self-imposed limitations</En>
            <Ja>5. 自主的な制限</Ja>
            <Zh>5. 自我设限</Zh>
            <Ko>5. 자진 제한</Ko>
          </h2>
          <En translated>
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
          <Ja><p>
              実体験が乏しい分野 — 移民法、深刻なメンタルヘルス支援、移民審判 — については、
              私自身がページを書くことはしません。代わりに該当セクションが、
              オーストラリアの適切な情報源（コミュニティ法律センター、Lifeline、
              所管の審裁機関）へ直接リンクします。このサイトの価値は、
              知らないことをはっきり伝えることにあります。
            </p>
            <p className="mt-3">
              それ以外のこと — 日常生活、定住、お金と銀行、移動、仕事、勉強、
              シドニーに10年住んでいる友人に尋ねるようなこと — は私が書きます。
            </p></Ja>
          <Zh><p>
              对于我缺乏亲身经历的领域 — 移民法、严重的心理健康支持、
              移民上诉 — 我不会自己来写这些页面。相应的章节会直接链接到
              有资质的澳大利亚来源（社区法律中心、Lifeline、相关审裁机构）。
              这个网站的价值，正在于坦承自己不知道什么。
            </p>
            <p className="mt-3">
              其余内容我都会写：日常生活、安顿下来、金钱与银行、出行、
              工作、学习，以及你会去问一位在悉尼住了十年的朋友的种种问题。
            </p></Zh>
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
            <En translated>6. Reach the editor</En>
            <Ja>6. 編集者への連絡</Ja>
            <Zh>6. 联系编辑</Zh>
            <Ko>6. 편집자에게 연락</Ko>
          </h2>
          <p className="text-stone-200 text-base leading-relaxed">
            <En translated>
              All corrections, suggestions, and source amendments go to the
              same person who wrote the pages. There is no editorial board,
              no review queue — your email reaches me directly.
            </En>
            <Ja>修正、提案、出典の補足はすべて、ページを書いた
              本人に届きます。編集委員会も
              審査待ちの列もありません — あなたのメールは私に直接届きます。</Ja>
            <Zh>所有的更正、建议和来源补充，都会送到
              撰写这些页面的人手中。这里没有编辑委员会，
              也没有审核队列——你的邮件会直接送达我这里。</Zh>
            <Ko>
              수정 의견, 제안, 출처 보완 요청은 모두 페이지를 쓴 사람에게 직접
              전달됩니다. 편집위원회나 검토 큐 없이, 이메일이 저에게 바로
              도착합니다.
            </Ko>
          </p>
        </article>

        {/* JSON-LD */}

      </div>
    </div>
  );
}

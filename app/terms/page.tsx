// Terms of Service page — sets the no-affiliation, no-liability, and use-at-own-risk
// disclaimers that protect the project from misuse of the information.

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

  ...seoFor("/terms"),
  title: pageMeta("/terms", locale).title,
  description: pageMeta("/terms", locale).description,
  },
  "/terms"
);
}


const lastUpdated = "17 June 2026";

export default function TermsPage() {
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
          <En translated>Terms of Service</En>
          <Ja>利用規約</Ja>
          <Zh>服务条款</Zh>
          <Ko>이용 약관</Ko>
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          <En translated>Last updated: {lastUpdated}</En>
          <Ja>最終更新日：{lastUpdated}</Ja>
          <Zh>最后更新：{lastUpdated}</Zh>
          <Ko>최종 업데이트: {lastUpdated}</Ko>
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 space-y-10 text-stone-700 dark:text-stone-300 leading-relaxed">
        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En translated>1. No professional advice</En>
            <Ja>1. 専門的な助言ではありません</Ja>
            <Zh>1. 不提供专业建议</Zh>
            <Ko>1. 전문 자문이 아님</Ko>
          </h2>
          <En translated>
            <p>
              AussieGuides is a general information site. Nothing on this site is legal,
              financial, immigration, tax, medical, or other professional advice.
              Always verify current rules and prices on the official Australian
              government and bank websites before acting. The author is not a lawyer,
              accountant, migration agent, or financial adviser.
            </p>
          </En>
          <Ja><p>
              AussieGuides は一般向けの情報サイトです。当サイトのいかなる内容も、
              法律・金融・移民・税務・医療その他の専門的助言ではありません。
              行動を起こす前に、必ずオーストラリア政府や銀行の公式ウェブサイトで
              最新の規定と料金を確認してください。執筆者は弁護士、会計士、
              移民エージェント、ファイナンシャル・アドバイザーではありません。
            </p></Ja>
          <Zh><p>
              AussieGuides 是一个一般信息网站。本站的任何内容都不构成法律、
              金融、移民、税务、医疗或其他专业建议。
              在采取行动之前，请务必在澳大利亚政府和银行的官方网站上核实
              最新的规定和价格。作者不是律师、会计师、
              移民代理或财务顾问。
            </p></Zh>
          <Ko>
            <p>
              AussieGuides는 일반 정보 제공 목적의 사이트입니다. 본 사이트의 어떠한
              내용도 법률·재무·이민·세무·의료 등 전문 자문에 해당하지 않습니다. 행동을
              취하기 전에 반드시 호주 정부·은행의 공식 웹사이트에서 최신 규정과
              가격을 확인하세요. 운영자는 변호사·회계사·이민 에이전트·재무 상담사가
              아닙니다.
            </p>
          </Ko>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En translated>2. No affiliation</En>
            <Ja>2. 提携関係はありません</Ja>
            <Zh>2. 无附属关系</Zh>
            <Ko>2. 제휴 관계 없음</Ko>
          </h2>
          <En translated>
            <p>
              AussieGuides is an independent, non-commercial project. We are not
              affiliated with any Australian government agency, university, bank,
              employer, or organisation mentioned on the site. References to third
              parties (ATO, Services Australia, Fair Work, NSW Fair Trading, the big
              banks, etc.) are factual only and do not imply endorsement or
              partnership.
            </p>
          </En>
          <Ja><p>
              AussieGuides は独立した非商業プロジェクトです。私たちは、オーストラリアの
              いかなる政府機関、大学、銀行、雇用主、またはサイトに記載された組織とも
              提携関係にありません。第三者（ATO、Services Australia、Fair Work、NSW Fair Trading、
              大手銀行など）への言及は事実の説明にとどまり、推薦や
              パートナーシップを意味するものではありません。
            </p></Ja>
          <Zh><p>
              AussieGuides 是一个独立的非商业项目。我们与本站提及的任何澳大利亚
              政府机构、大学、银行、雇主或组织都没有隶属关系。
              对第三方（ATO、Services Australia、Fair Work、NSW Fair Trading、
              各大银行等）的提及仅为陈述事实，不代表认可或
              合作关系。
            </p></Zh>
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
            <En translated>3. Information may be outdated</En>
            <Ja>3. 情報は古くなっている可能性があります</Ja>
            <Zh>3. 信息可能已过时</Zh>
            <Ko>3. 정보는 최신이 아닐 수 있음</Ko>
          </h2>
          <En translated>
            <p>
              Rules, prices, fees, and procedures in Australia change frequently.
              While we try to keep content current, we make no warranty as to the
              accuracy or completeness of any information on this site. Prices shown
              (e.g., Opal fares, bank fees, super rates, wages) are approximate and
              were correct at the time of writing but may have changed. Always check
              the official source before making decisions.
            </p>
          </En>
          <Ja><p>
              オーストラリアの規則、料金、手数料、手続きは頻繁に変わります。
              私たちは内容を最新に保つよう努めていますが、当サイトのいかなる情報の
              正確性や完全性についても保証しません。表示されている料金
              （Opal 運賃、銀行手数料、super の割合、賃金など）は概算であり、
              執筆時点では正しかったものの、変更されている可能性があります。決定を
              下す前に、必ず公式の情報源を確認してください。
            </p></Ja>
          <Zh><p>
              澳大利亚的规则、价格、费用和手续经常变动。
              我们尽力保持内容最新，但不对本站任何信息的
              准确性或完整性作出保证。所显示的价格
              （如 Opal 票价、银行手续费、养老金比例、工资）为近似值，
              在撰写时是正确的，但此后可能已经变动。在做出决定之前，
              请务必查看官方来源。
            </p></Zh>
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
            <En translated>4. Use at your own risk</En>
            <Ja>4. ご自身の責任でご利用ください</Ja>
            <Zh>4. 使用风险自负</Zh>
            <Ko>4. 사용자 책임 하에 이용</Ko>
          </h2>
          <En translated>
            <p>
              You use this site at your own risk. The author and contributors are
              not liable for any loss, damage, or inconvenience arising from your use
              of information on this site — including (without limitation) financial
              loss, visa problems, employment disputes, or housing issues. If
              something on this site turns out to be wrong and causes you problems,
              that&apos;s on you — please tell us so we can fix it.
            </p>
          </En>
          <Ja><p>
              このサイトの利用はご自身の責任で行ってください。執筆者と寄稿者は、
              当サイトの情報を利用したことによるいかなる損失、損害、不利益
              （金銭的損失、ビザの問題、雇用紛争、住居の問題を含みますが、これらに限りません）
              についても責任を負いません。当サイトの情報が誤っていて問題が生じた場合、
              それはご自身の責任です — 修正できるよう、ぜひお知らせください。
            </p></Ja>
          <Zh><p>
              你使用本站的风险由你自己承担。作者和贡献者
              不对你因使用本站信息而产生的任何损失、损害或不便负责
              （包括但不限于财务损失、签证问题、劳动纠纷或住房问题）。
              如果本站的某处内容有误并给你造成了麻烦，
              那由你自己承担 — 也请告诉我们，以便我们修正。
            </p></Zh>
          <Ko>
            <p>
              본 사이트의 이용은 본인 책임 하에 이루어집니다. 운영자와 기여자는 본
              사이트 정보 이용으로 발생하는 어떠한 손실·피해·불편(재적 손실, 비자
              문제, 고용 분쟁, 주거 문제 포함)에도 책임을 지지 않습니다. 본 사이트
              정보가 사실과 달라 문제가 발생했다면, 본인의 책임이며 — 가능한 한
              빨리 알려주시면 수정하겠습니다.
            </p>
          </Ko>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
            <En translated>5. Third-party links</En>
            <Ja>5. 第三者へのリンク</Ja>
            <Zh>5. 第三方链接</Zh>
            <Ko>5. 외부 링크</Ko>
          </h2>
          <En translated>
            <p>
              This site links to external websites (government portals, bank sites,
              transport operators). We don&apos;t control those sites and aren&apos;t
              responsible for their content, privacy practices, or availability.
              Following an external link is at your own discretion.
            </p>
          </En>
          <Ja><p>
              このサイトは外部サイト（政府ポータル、銀行サイト、交通事業者）に
              リンクしています。当方はそれらのサイトを管理しておらず、その
              コンテンツ、プライバシー慣行、可用性について責任を負いません。
              外部リンクをたどるかどうかは、ご自身の判断でお願いします。
            </p></Ja>
          <Zh><p>
              本站会链接到外部网站（政府门户、银行网站、交通运营商）。
              我们无法控制这些网站，也不对其内容、隐私做法或
              可用性负责。是否点击外部链接，由你自己判断。
            </p></Zh>
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
            <En translated>6. Intellectual property</En>
            <Ja>6. 知的財産権</Ja>
            <Zh>6. 知识产权</Zh>
            <Ko>6. 지식재산권</Ko>
          </h2>
          <En translated>
            <p>
              Original prose on this site is licensed under CC BY-NC-SA 4.0 — you can
              share and adapt it for non-commercial purposes with attribution and
              the same licence. Images are sourced from Unsplash and Pexels under
              their respective licences (commercial use OK, no attribution required
              but appreciated). Aussie English phrases listed are common
              conversational English and not subject to IP.
            </p>
          </En>
          <Ja><p>
              当サイトのオリジナル文章は CC BY-NC-SA 4.0 で提供されています — 出典を明示し、
              同じライセンスを適用すれば、非商業目的で共有・改変できます。画像は
              Unsplash と Pexels の各ライセンス（商業利用可、クレジット表示は必須では
              ありませんが歓迎します）に基づいて使用しています。掲載している
              オーストラリア英語の表現は一般的な会話表現であり、知的財産権の対象では
              ありません。
            </p></Ja>
          <Zh><p>
              本站的原创文章以 CC BY-NC-SA 4.0 许可协议提供 — 你可以署名并以
              相同许可协议进行非商业性的分享和改编。图片来自
              Unsplash 和 Pexels，遵循各自的许可协议（可商用，无需署名
              但欢迎署名）。文中列出的澳式英语短语属于常见
              口语表达，不受知识产权保护。
            </p></Zh>
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
            <En translated>7. Contact</En>
            <Ja>7. お問い合わせ</Ja>
            <Zh>7. 联系方式</Zh>
            <Ko>7. 연락처</Ko>
          </h2>
          <En translated>
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
          <Ja><p>
              ご質問や訂正は{" "}
              <a
                href="https://github.com/michaelbui92/aussie-mate/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                github.com/michaelbui92/aussie-mate/issues
              </a>
              でイシューを作成してください。
            </p></Ja>
          <Zh><p>
              如有疑问或需要更正，请在{" "}
              <a
                href="https://github.com/michaelbui92/aussie-mate/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sunset underline"
              >
                github.com/michaelbui92/aussie-mate/issues
              </a>
              上提交 issue。
            </p></Zh>
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
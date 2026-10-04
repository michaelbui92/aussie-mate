import Link from "next/link";
import { En, Ja, Ko, Zh, pickLocale} from "@/components/LangBlocks";
import { visas } from "./data";
import { breadcrumbLdJson, seoFor, withSeo } from "@/lib/seo";
import AdSlot from "@/components/AdSlot";
import RelatedContent from "@/components/RelatedContent";

export const metadata = withSeo(
  {

  ...seoFor("/visa"),
  title: "Australian Visa Guide — Student Visa, WHV, Partner & Skilled Migration 2026",
  description:
    "Bilingual overview of Australia's main visa subclasses for anyone moving to or visiting Australia — 417 Working Holiday, 500 Student, 189/190 Skilled, 820/801 Partner, and 600/601/651 Visitor. English and 한국어 side by side.",
  },
  "/visa"
);

const quickFacts = [
  {
    en: "General information only — not immigration advice.", ja: "一般的な情報であり、移民に関する助言ではありません。", zh: "仅为一般信息——不构成移民建议。",
    ko: "일반 정보이며, 이민 자문이 아닙니다.",
  },
  {
    en: "Always verify current rules on the Department of Home Affairs website.", ja: "最新の規則は、必ず内務省のウェブサイトで確認してください。", zh: "请务必在内政部网站上核实最新规定。",
    ko: "최신 규정은 반드시 호주 이민국 웹사이트에서 확인하세요.",
  },
  {
    en: "For complex cases, consider a registered MARA agent.", ja: "複雑なケースでは、登録MARAエージェントの利用を検討してください。", zh: "对于复杂个案，可考虑聘请注册MARA移民代理。",
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
            <En translated>Visa Guide</En>
            <Ja>ビザガイド</Ja>
            <Zh>签证指南</Zh>
            <Ko>비자 가이드</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[1.05] mb-6">
            <En translated>Australian visas, explained simply</En>
            <Ja>オーストラリアのビザをわかりやすく解説</Ja>
            <Zh>澳大利亚签证，简明解读</Zh>
            <Ko>호주 비자, 쉽게 설명해 드립니다</Ko>
          </h1>
          <p className="font-serif text-lg md:text-xl text-stone-700 dark:text-stone-300 max-w-2xl leading-relaxed mb-8">
            <En translated>
              The five visa subclasses most visitors, students, workers, and
              partners encounter when planning time in Australia — from a
              short trip to permanent residency. Every visa below is valid
              for many nationalities; if you are checking on behalf of a
              specific passport, confirm your eligibility on the Home Affairs
              tool linked below. Plain English and 한국어 side by side.
            </En>
            <Ja>オーストラリアでの滞在を計画する際に、訪問者、留学生、就労者、パートナーが
              最もよく遭遇する5つのビザサブクラス — 短期旅行から
              永住権まで。以下すべてのビザは多くの国籍で有効です。
              特定のパスポートについて確認する場合は、
              下記リンクのHome Affairsのツールで
              資格を確認してください。平易な英語と韓国語を並記しています。</Ja>
            <Zh>在规划赴澳时间时，大多数访客、学生、工作者和伴侣
              会遇到的五种签证子类 — 从短期旅行到
              永久居留。以下每种签证对许多国籍都适用；
              如果你是针对某一特定护照查询，
              请通过下方链接的内政部工具
              确认你的资格。简明英语与韩语并排对照。</Zh>
            <Ko>
              한국인 방문자, 유학생, 직장인, 파트너가 가장 자주 접하는 다섯 가지
              비자 서브클래스를 정리했습니다. 영어와 한국어를 나란히 제공합니다.
            </Ko>
          </p>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 rounded-2xl p-5 text-sm text-stone-700 dark:text-stone-300">
            <p className="font-semibold text-sunset mb-2">
              <En translated>Important</En>
              <Ja>重要</Ja>
              <Zh>重要提示</Zh>
              <Ko>주의사항</Ko>
            </p>
            <ul className="space-y-1.5 leading-relaxed">
              {quickFacts.map((f) => (
                <li key={f.en} className="flex items-start gap-2">
                  <span className="shrink-0 w-1 h-1 rounded-full bg-sunset mt-2.5" />
                  <span>
                    <En translated>{f.en}</En>
                    <Ja>{pickLocale("ja", f)}</Ja>
                    <Zh>{pickLocale("zh", f)}</Zh>
                    <Ko>{f.ko}</Ko>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-stone-500 dark:text-stone-400">
              <En translated>
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
              <Ja>公式情報源：{" "}
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
                  MARA 登録エージェントを探す
                </a></Ja>
              <Zh>官方来源：{" "}
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
                  查找 MARA 代理
                </a></Zh>
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
          <En translated>At a glance</En>
          <Ja>一目でわかる</Ja>
          <Zh>一览</Zh>
          <Ko>한눈에 보기</Ko>
        </p>

        <div className="overflow-x-auto rounded-2xl border border-stone-200/60 dark:border-dark-border bg-white dark:bg-dark-surface shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-stone-100 dark:bg-stone-800/50 text-stone-600 dark:text-stone-300">
              <tr>
                <th className="text-left px-4 py-3 font-medium">
                  <En translated>Visa</En>
                  <Ja>ビザ</Ja>
                  <Zh>签证</Zh>
                  <Ko>비자</Ko>
                </th>
                <th className="text-left px-4 py-3 font-medium">
                  <En translated>Best for</En>
                  <Ja>おすすめの対象</Ja>
                  <Zh>最适合</Zh>
                  <Ko>추천 대상</Ko>
                </th>
                <th className="text-left px-4 py-3 font-medium">
                  <En translated>Stay</En>
                  <Ja>滞在</Ja>
                  <Zh>停留</Zh>
                  <Ko>체류</Ko>
                </th>
                <th className="text-left px-4 py-3 font-medium">
                  <En translated>Work</En>
                  <Ja>就労</Ja>
                  <Zh>工作</Zh>
                  <Ko>근무</Ko>
                </th>
                <th className="text-left px-4 py-3 font-medium">
                  <En translated>From</En>
                  <Ja>申請費用</Ja>
                  <Zh>申请费用</Zh>
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
                      <En translated>{v.name.en}</En>
                      <Ja>{pickLocale("ja", v.name)}</Ja>
                      <Zh>{pickLocale("zh", v.name)}</Zh>
                      <Ko>{v.name.ko}</Ko>
                    </Link>
                    <p className="text-[11px] text-stone-400 dark:text-stone-500 mt-0.5">
                      {v.code}
                    </p>
                  </td>
                  <td className="px-4 py-3 align-top text-stone-700 dark:text-stone-300">
                    <En translated>{v.audience.en}</En>
                    <Ja>{pickLocale("ja", v.audience)}</Ja>
                    <Zh>{pickLocale("zh", v.audience)}</Zh>
                    <Ko>{v.audience.ko}</Ko>
                  </td>
                  <td className="px-4 py-3 align-top text-stone-700 dark:text-stone-300">
                    <En translated>{v.duration.en}</En>
                    <Ja>{pickLocale("ja", v.duration)}</Ja>
                    <Zh>{pickLocale("zh", v.duration)}</Zh>
                    <Ko>{v.duration.ko}</Ko>
                  </td>
                  <td className="px-4 py-3 align-top text-stone-700 dark:text-stone-300">
                    <En translated>{v.workRights.en}</En>
                    <Ja>{pickLocale("ja", v.workRights)}</Ja>
                    <Zh>{pickLocale("zh", v.workRights)}</Zh>
                    <Ko>{v.workRights.ko}</Ko>
                  </td>
                  <td className="px-4 py-3 align-top text-stone-700 dark:text-stone-300 whitespace-nowrap">
                    <En translated>{v.cost.en}</En>
                    <Ja>{pickLocale("ja", v.cost)}</Ja>
                    <Zh>{pickLocale("zh", v.cost)}</Zh>
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
          <En translated>Pick a visa</En>
          <Ja>ビザを選ぶ</Ja>
          <Zh>选择签证</Zh>
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
                <En translated>{v.name.en}</En>
                <Ja>{pickLocale("ja", v.name)}</Ja>
                <Zh>{pickLocale("zh", v.name)}</Zh>
                <Ko>{v.name.ko}</Ko>
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                <En translated>{v.tagline.en}</En>
                <Ja>{pickLocale("ja", v.tagline)}</Ja>
                <Zh>{pickLocale("zh", v.tagline)}</Zh>
                <Ko>{v.tagline.ko}</Ko>
              </p>
              <p className="text-xs text-sunset font-medium">
                <En translated>Read more →</En>
                <Ja>もっと読む →</Ja>
                <Zh>阅读更多 →</Zh>
                <Ko>자세히 보기 →</Ko>
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* AdSense slot — high-traffic guide, mid-content ad. */}
      <AdSlot format="horizontal" />

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

      <RelatedContent
        items={[
          {
            href: "/finance",
            title: { en: "Tax & TFN", ja: "税金とTFN", zh: "税务与TFN", ko: "세금과 TFN" },
            description: {
              en: "Your visa subclass determines tax residency. Apply for TFN within 28 days.", ja: "税務上の居住者区分はビザのサブクラスによって決まります。TFNは28日以内に申請してください。", zh: "您的签证类别决定税务居民身份。请在28天内申请TFN。",
              ko: "비자 종류에 따라 세법상 거주자 신분이 결정됩니다. 28일 내 TFN 신청.",
            },
          },
          {
            href: "/workplace",
            title: { en: "Workplace rights", ja: "職場の権利", zh: "职场权利", ko: "직장 권리" },
            description: {
              en: "Award wages, super, leave — different protections for different visas.", ja: "最低賃金、退職年金（スーパー）、休暇——ビザによって保護が異なります。", zh: "法定工资、养老金（super）、休假——不同签证享有不同保障。",
              ko: "임금, 퇴직연금, 휴가 — 비자별 보호 수준이 다릅니다.",
            },
          },
          {
            href: "/apartment",
            title: { en: "Renting in Australia", ja: "オーストラリアでの賃貸", zh: "在澳大利亚租房", ko: "호주 부동산" },
            description: {
              en: "Lease length, bond, what landlords need (and can't ask).", ja: "賃貸期間、保証金、大家が必要とするもの（そして尋ねてはいけないこと）。", zh: "租期、押金，房东需要什么（以及不能问什么）。",
              ko: "임차 기간, 보증금, 집주인이 요구할 수 있는 것과 없는 것.",
            },
          },
        ]}
      />
    </div>
  );
}

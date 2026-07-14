// Server component — bilingual Australian workplace guide.
// Redesigned in editorial style: full-bleed hero image with dual CTAs
// (matches the homepage vocabulary), persona chips, then a vertical
// sequence of EditorialSection cards (some with image banners).

import { En, Ko } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { Clipboard, Coin, Handshake, PersonSpeaking, ShieldCheck, Star } from "@/components/Icons";
import { seoFor, withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";

export const metadata = withSeo(
  {

  ...seoFor("/workplace"),
  title: "Workplace & rights — 호주 직장 문화와 노동자 권리",
  description:
    "호주 직장 가이드 — 직장 문화(수평적 구조, 직설적 소통), 캐주얼 vs 정규직, 최저 임금(Award), 퇴직연금(Super) 11.5%, 캐주얼 노동자 권리, 부당한 해고 보호까지.",
  },
  "/workplace"
);

type WorkplaceSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; en: string; ko: string }>;
};

const sections: WorkplaceSection[] = [
  {
    id: "workplace-culture",
    iconKey: "Handshake",
    accent: "sunset",
    title: "Workplace Culture",
    koTitle: "직장 문화",
    desc: "What makes Aussie workplaces different",
    koDesc: "호주 직장이 다른 점",
    img: "/images/unsplash-1497366216548.jpg",
    items: [
      { label: "Direct Communication", en: "Australians are direct. If something is wrong, your manager will tell you straight — it's not rude, it's how things get done. There's very little 'saving face' in the way you might find in some Asian workplaces.", ko: "호주인들은 직설적입니다. 문제가 있으면 매니저가 바로 말합니다 — 무례한 게 아니라 일을 처리하는 방식입니다. 아시아 직장에서 흔한 '체면' 문화가 거의 없습니다." },
      { label: "Flat Hierarchy", en: "Managers and CEOs are approachable. You call people by their first name — even the boss. Hierarchy doesn't mean formality. A cleaner and a director might share the same lunch table.", ko: "조직 구조가 수평적입니다. 매니저나 CEO도 접근하기 쉽습니다. 상사라도 이름(퍼스트 네임)으로 부릅니다. 청소부와 디렉터가 같은 점심 테이블을 쓸 정도입니다." },
      { label: "Work-Life Balance", en: "Aussies value work-life balance. Expect to leave on time. Overtime is not expected in most jobs. 'She'll be right' (괜찮을 거야) is a common attitude — don't over-stress about small problems.", ko: "호주인들은 워라밸(일과 삶의 균형)을 중요시합니다. 정시 퇴근이 일반적입니다. 대부분의 직장에서 야근은 예상하지 않습니다. 작은 문제에 너무 스트레스받지 마세요." },
      { label: "Team Culture", en: "Teams are collaborative. 'Bringing a plate' (각자 음식을 가져와서 나누는 것) for morning tea or Friday drinks after work is common. Participate to build relationships — it matters.", ko: "팀워크 문화가 강합니다. '브링잉 어 플레이트'(각자 음식을 가져와 공유)나 퇴근 후 금요 음료는 흔한 일입니다. 관계 형성에 참여하세요." },
      { label: "The 'She'll Be Right' Mentality", en: "This classic Aussie phrase means 'it'll be okay'. Aussies don't panic over minor issues. Problems get solved, but without the urgency or stress you might be used to. It can take getting used to, but it's one of the best things about working here.", ko: "이 전형적인 호주 표현은 '괜찮을 거야'라는 뜻입니다. 작은 문제에 당황하지 않습니다. 문제는 해결되지만, 당신이 익숙할 수도 있는 긴박감이나 스트레스는 없습니다. 적응이 필요할 수 있지만, 여기서 일하는 최고의 장점 중 하나입니다." },
    ],
  },
  {
    id: "speaking-up",
    iconKey: "PersonSpeaking",
    accent: "amber",
    title: "Speaking Up",
    koTitle: "의견 표출",
    desc: "How to raise concerns and give feedback at work",
    koDesc: "직장에서 문제를 제기하고 피드백을 주는 방법",
    items: [
      { label: "Direct Feedback is Normal", en: "Aussies will tell you directly if there's an issue. This is not personal — it's professional. Don't take it as an attack. And equally, you are expected to speak up if something isn't right.", ko: "호주인들은 문제가 있으면 바로 말해줍니다. 개인적인 게 아니라 전문적인 것입니다. 공격으로 받아들이지 마세요. 반대로, 무언가 잘못되었으면 당신도 의문을 제기해야 합니다." },
      { label: "How to Raise Issues", en: "Start with facts, not emotions. 'I've noticed X happens and it causes Y problem' is better than 'X always ruins everything'. Be specific, be calm, suggest a solution if you have one.", ko: "감정보다 사실부터 말하세요. 'X가 일어나고 Y문제를 야기한다는 것을 확인했습니다'가 'X가 항상 모든 걸 망칩니다'보다 좋습니다. 구체적으로, 침착하게, 해결책이 있다면 제안하세요." },
      { label: "Know Your Rights", en: "In Australia, it's illegal to fire someone for raising a workplace issue (this is called 'adverse action'). If you feel you've been treated unfairly after raising a concern, you have legal protections.", ko: "호주에서는 직장 문제를 제기한 사람을 해고하는 것은 불법입니다('부당한 행위'라고 합니다). 문제 제기 후 불공정하게 대우받았다고 느끼면 법적 보호를 받을 수 있습니다." },
      { label: "Constructive vs Destructive", en: "Feedback is valued — but destructively criticising colleagues or managers is not. If you have a serious issue with someone, handle it privately and respectfully, not in front of others.", ko: "건설적인 피드백은 환영받습니다 — 하지만 동료나 상사를 파괴적으로 비판하는 것은 안 됩니다. 누군가와 심각한 문제가 있다면 공개적으로가 아니라 조용히, 그리고 존중하는 태도로 처리하세요." },
    ],
  },
  {
    id: "casual-permanent",
    iconKey: "Clipboard",
    accent: "coast",
    title: "Casual vs Permanent",
    koTitle: "캐주얼 대 정규직",
    desc: "Understanding your employment type",
    koDesc: "고용 형태 이해하기",
    items: [
      { label: "What is a Casual?", en: "A casual employee has no guaranteed hours and can be offered work when available. They receive a 25% 'casual loading' extra pay on top of the base rate to compensate for lack of sick leave and holiday pay.", ko: "캐주얼 직원은 보장된 근무 시간이 없으며 가능한 경우 근무를 제공받을 수 있습니다. 연간 휴가와 병가 지급이 없음을 보상하기 위해 기본급에 25%의 '캐주얼 로딩' 추가 급여를 받습니다." },
      { label: "What is a Permanent Employee?", en: "Permanent employees (also called 'full-time') have guaranteed minimum hours and receive sick leave, annual leave (holiday pay), and other benefits. Most Australians are permanent employees.", ko: "정규 직원('전일제'라고도 함)은 보장된 최소 근무 시간을 가지고 있으며 병가, 연차 휴가(휴식 근무), 기타 혜택을 받습니다. 대부분의 호주인은 정규 직원입니다." },
      { label: "Converting from Casual to Permanent", en: "After 6-12 months of regular shifts, a casual employee can request to become permanent. Employers don't have to say yes, but many do if you've been reliable. It's worth asking — permanent means security and benefits.", ko: "6-12개월 동안 정기적으로 근무한 후 캐주얼 직원은 정규직 전환을 요청할 수 있습니다. 고용주가 반드시 승인해야 하는 것은 아니지만, 당신이 신뢰할 수 있었다면 많은 경우 승낙합니다. 요청할 가치가 있습니다 — 정규직은 안정성과 혜택을 의미합니다." },
      { label: "Part-Time", en: "Part-time employees work set hours (less than 38 per week) and receive prorated sick and annual leave. A part-time employee can increase their hours by agreement with their employer.", ko: "파트타임 직원은 정해진 근무 시간(주 38시간 미만)으로 근무하며 비례 계산된 병가와 연차를 받습니다. 파트타임 직원은 고용주와 합의하여 근무 시간을 늘릴 수 있습니다." },
    ],
  },
  {
    id: "award-super",
    iconKey: "Coin",
    accent: "sage",
    title: "Award & Super",
    koTitle: "급여와 퇴직금",
    desc: "Minimum pay standards and superannuation",
    koDesc: "최저 임금 기준과 퇴직연금",
    items: [
      { label: "What is an Award?", en: "An Award is a legal document that sets minimum pay and conditions for specific industries or jobs. If you're in a job covered by an Award, you must be paid at least the Award rate — not less.", ko: "Award는 특정 업종이나 직종에 대한 최저 임금과 근무 조건을 정한 법적 문서입니다. Award 적용 대상 직종에 있다면 최소한 Award 임금률을 받아야 합니다." },
      { label: "Minimum Wage", en: "Australia has a national minimum wage. As of 2024, it's approximately $23 AUD per hour for adult employees. This applies if no Award covers your job.", ko: "호주에는 전국 최저 임금이 있습니다. 2024년 기준 성인 직원 기준 시간당 약 $23 AUD입니다. Award 적용 대상이 아닌 경우 이 임금이 적용됩니다." },
      { label: "Superannuation", en: "Superannuation (super) is money your employer must pay into your super fund — currently 11.5% of your wages. It goes into your nominated super fund and is accessible when you retire.", ko: "퇴직연금(super)은 고용주가 당신의 퇴직연금 계좌에 납부해야 하는 금액으로, 현재 임금의 11.5%입니다. 지정한 퇴직연금 계좌에 납부되며 퇴직 시 인출 가능합니다." },
      { label: "Payslips", en: "You must receive a payslip within 1 day of being paid. It must show: your hours, pay rate, any overtime, deductions, and super contributions. You can check your pay against the Award or minimum wage online.", ko: "급여를 받은 후 1일 이내에 급여 명세서를 받아야 합니다. 근무 시간, 임금률, 야근 수당, 공제, 퇴직연금 기여금을 표시해야 합니다. Award 또는 최저 임금에 맞게 급여를 확인할 수 있습니다." },
    ],
  },
  {
    id: "casual-rights",
    iconKey: "ShieldCheck",
    accent: "stone",
    title: "Casual Rights",
    koTitle: "캐주얼 노동자 권리",
    desc: "Your rights as a casual worker in Australia",
    koDesc: "호주 캐주얼 노동자의 권리",
    items: [
      { label: "You're Allowed to Say No", en: "As a casual, you can refuse a shift. You don't have to give a reason. However, if you consistently refuse available shifts, the employer may reduce the shifts they offer you.", ko: "캐주얼로서 근무를 거절할 수 있습니다. 이유를 제공할 필요가 없습니다. 그러나 계속 이용 가능한 근무를 거절하면 고용주가 제공하는 근무 시간을 줄일 수 있습니다." },
      { label: "Casual Conversion", en: "After 6 months (12 months for small businesses), your employer must offer you permanent part-time or full-time work if you've worked regular hours. You can also request conversion yourself at any time.", ko: "6개월 후(소기업은 12개월) 정규 근무를 해왔다면 고용주가 정규 파트타임 또는 전일제 근무를 제안해야 합니다. 언제든지 본인이 직접 전환을 요청할 수도 있습니다." },
      { label: "Protection from Unfair Dismissal", en: "Casual employees who have been working regular hours for 6+ months are protected from unfair dismissal. If fired without proper reason, you can make a claim to the Fair Work Commission.", ko: "정규 근무를 6개월 이상 해온 캐주얼 직원은 부당한 해고로부터 보호받습니다. 정당한 이유 없이 해고되면 공정노동위원회에 청구할 수 있습니다." },
      { label: "Paid Leave Entitlements", en: "Casuals do NOT get paid sick leave or annual leave. That's why the 25% casual loading exists — it compensates for this. However, casual employees can still access unpaid carer's leave and compassionate leave.", ko: "캐주얼 직원은 유급 병가나 연차 휴가를 받지 않습니다. 그래서 25% 캐주얼 로딩이 존재하는 것입니다 — 이것은 그에 대한 보상입니다. 다만 캐주얼 직원도 무급 간병 휴가와 조의 휴가는 사용할 수 있습니다." },
    ],
  },
];

export default function WorkplacePage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero — minimal text header, matches weather page style */}
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>Workplace</En>
            <Ko>직장</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En>Working in Australia</En>
            <Ko>호주에서 일하기</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En>Culture, pay, and your rights — what makes Aussie workplaces work.</En>
            <Ko>문화, 급여, 그리고 귀하의 권리 — 호주 직장문화의 모든 것.</Ko>
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        
        <div className="space-y-12">
          {sections.map((section, i) => (
            <EditorialSection key={section.id} data={section} index={i} />
          ))}
        </div>

        <section className="mt-16 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-3">
            <En>Know your workplace rights</En><Ko>직장 권리 알기</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En>Fair Work is your backstop.</En>
            <Ko>Fair Work가 당신을 보호합니다.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En>Fair Work Commission handles workplace disputes — unpaid wages, unfair dismissal, bullying, and Award breaches. Free advice line, multilingual support, and a real ombudsman process.</En>
            <Ko>Fair Work Commission은 직장 분쟁을 처리합니다 — 미지급 급여, 부당한 해고, 괴롭힘, Award 위반. 무료 상담 전화, 다국어 지원, 그리고 진정한 옴부즈만 프로세스를 제공합니다.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.fairwork.gov.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">Fair Work ↗</a>
            <a href="https://www.fairwork.gov.au/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Free advice line ↗</a>
          </div>
        </section>
      </div>

      <RelatedContent
        items={[
          {
            href: "/finance",
            title: { en: "Finance & banking", ko: "금융과 은행" },
            description: {
              en: "Payslip deductions, super contributions, and how to read your tax summary.",
              ko: "급여명세서 공제, 퇴직연금 납입, 그리고 연말정산 읽는 법.",
            },
          },
          {
            href: "/visa",
            title: { en: "Visa Guide", ko: "비자 가이드" },
            description: {
              en: "Working Holiday vs Student vs Skilled — different hours, different rights.",
              ko: "워홀 vs 학생 vs 기술 비자 — 근로 시간과 권리가 다릅니다.",
            },
          },
          {
            href: "/aussie-english",
            title: { en: "Aussie English", ko: "호주 영어" },
            description: {
              en: "Workplace slang, polite disagreement, and meetings that say one thing and mean another.",
              ko: "직장 슬랭, 정중한 거절 표현, 그리고 결정을 미루는 회의 언어.",
            },
          },
        ]}
      />
    </div>
  );
}

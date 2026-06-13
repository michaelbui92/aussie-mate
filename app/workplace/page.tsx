import { En, Ko } from "@/components/LangBlocks";
import Accordion, { type AccordionSection, type AccordionItem } from "@/components/Accordion";
import { Clipboard, Coin, Handshake, PersonSpeaking, ShieldCheck, Star } from "@/components/Icons";

const sections: AccordionSection[] = [
  {
    id: "workplace-culture",
    iconKey: "Handshake",
    title: "Workplace Culture",
    koTitle: "직장 문화",
    desc: "What makes Aussie workplaces different",
    koDesc: "호주 직장이 다른 점",
    items: [
      {
        label: "Direct Communication",
        en: "Australians are direct. If something is wrong, your manager will tell you straight — it's not rude, it's how things get done. There's very little 'saving face' in the way you might find in some Asian workplaces.",
        ko: "호주인들은 직설적입니다. 문제가 있으면 매니저가 바로 말합니다 — 무례한 게 아니라 일을 처리하는 방식입니다. 아시아 직장에서 흔한 '체면' 문화가 거의 없습니다.",
      },
      {
        label: "Flat Hierarchy",
        en: "Managers and CEOs are approachable. You call people by their first name — even the boss. Hierarchy doesn't mean formality. A cleaner and a director might share the same lunch table.",
        ko: "조직 구조가 수평적입니다. 매니저나 CEO도 접근하기 쉽습니다. 상사라도 이름(퍼스트 네임)으로 부릅니다. 청소부와 디렉터가 같은 점심 테이블을 쓸 정도입니다.",
      },
      {
        label: "Work-Life Balance",
        en: "Aussies value work-life balance. Expect to leave on time. Overtime is not expected in most jobs. 'She'll be right' (괜찮을 거야) is a common attitude — don't over-stress about small problems.",
        ko: "호주인들은 워라밸(일과 삶의 균형)을 중요시합니다. 정시 퇴근이 일반적입니다. 대부분의 직장에서 야근은 예상하지 않습니다. 작은 문제에 너무 스트레스받지 마세요.",
      },
      {
        label: "Team Culture",
        en: "Teams are collaborative. 'Bringing a plate' (각자 음식을 가져와서 나누는 것) for morning tea or Friday drinks after work is common. Participate to build relationships — it matters.",
        ko: "팀워크 문화가 강합니다. '브링잉 어 플레이트'(각자 음식을 가져와 공유)나 퇴근 후 금요 음료는 흔한 일입니다. 관계 형성에 참여하세요.",
      },
      {
        label: "The 'She'll Be Right' Mentality",
        en: "This classic Aussie phrase means 'it'll be okay'. Aussies don't panic over minor issues. Problems get solved, but without the urgency or stress you might be used to. It can take getting used to, but it's one of the best things about working here.",
        ko: "이 전형적인 호주 표현은 '괜찮을 거야'라는 뜻입니다. 작은 문제에 당황하지 않습니다. 문제는 해결되지만, 당신이 익숙할 수도 있는 긴박감이나 스트레스는 없습니다. 적응이 필요할 수 있지만, 여기서 일하는 최고의 장점 중 하나입니다.",
      },
    ],
  },
  {
    id: "speaking-up",
    iconKey: "PersonSpeaking",
    title: "Speaking Up",
    koTitle: "의견 표출",
    desc: "How to raise concerns and give feedback at work",
    koDesc: "직장에서 문제를 제기하고 피드백을 주는 방법",
    items: [
      {
        label: "Direct Feedback is Normal",
        en: "Aussies will tell you directly if there's an issue. This is not personal — it's professional. Don't take it as an attack. And equally, you are expected to speak up if something isn't right.",
        ko: "호주인들은 문제가 있으면 바로 말해줍니다. 개인적인 게 아니라 전문적인 것입니다. 공격으로 받아들이지 마세요. 반대로, 무언가 잘못되었으면 당신도 의문을 제기해야 합니다.",
      },
      {
        label: "How to Raise Issues",
        en: "Start with facts, not emotions. 'I've noticed X happens and it causes Y problem' is better than 'X always ruins everything'. Be specific, be calm, suggest a solution if you have one.",
        ko: "감정보다 사실부터 말하세요. 'X가 일어나고 Y문제를 야기한다는 것을 확인했습니다'가 'X가 항상 모든 걸 망칩니다'보다 좋습니다. 구체적으로, 침착하게, 해결책이 있다면 제안하세요.",
      },
      {
        label: "Know Your Rights",
        en: "In Australia, it's illegal to fire someone for raising a workplace issue (this is called 'adverse action'). If you feel you've been treated unfairly after raising a concern, you have legal protections.",
        ko: "호주에서는 직장 문제를 제기한 사람을 해고하는 것은 불법입니다('부당한 행위'라고 합니다). 문제 제기 후 불공정하게 대우받았다고 느끼면 법적 보호를 받을 수 있습니다.",
      },
      {
        label: "Constructive vs Destructive",
        en: "Feedback is valued — but destructively criticising colleagues or managers is not. If you have a serious issue with someone, handle it privately and respectfully, not in front of others.",
        ko: "피드백은 높이평가됩니다 — 하지만 동료나 상사를 건설적으로 비판하지 않는 것은 문제가 있습니다. 누군가와 심각한 문제가 있으면 공개적으로 아닌 조용하고 존중하게 처리하세요.",
      },
    ],
  },
  {
    id: "casual-permanent",
    iconKey: "Clipboard",
    title: "Casual vs Permanent",
    koTitle: "캐주얼 대 정규직",
    desc: "Understanding your employment type",
    koDesc: "고용 형태 이해하기",
    items: [
      {
        label: "What is a Casual?",
        en: "A casual employee has no guaranteed hours and can be offered work when available. They receive a 25% 'casual loading' extra pay on top of the base rate to compensate for lack of sick leave and holiday pay.",
        ko: "캐주얼 직원은 보장된 근무 시간이 없으며 가능한 경우 근무를 제공받을 수 있습니다. 연간 휴가와 병가 지급이 없음을 보상하기 위해 기본급에 25%의 '캐주얼 로딩' 추가 급여를 받습니다.",
      },
      {
        label: "What is a Permanent Employee?",
        en: "Permanent employees (also called 'full-time') have guaranteed minimum hours and receive sick leave, annual leave (holiday pay), and other benefits. Most Australians are permanent employees.",
        ko: "정규 직원('전일제'라고도 함)은 보장된 최소 근무 시간을 가지고 있으며 병가, 연차 휴가(휴식 근무), 기타 혜택을 받습니다. 대부분의 호주인은 정규 직원입니다.",
      },
      {
        label: "Converting from Casual to Permanent",
        en: "After 6-12 months of regular shifts, a casual employee can request to become permanent. Employers don't have to say yes, but many do if you've been reliable. It's worth asking — permanent means security and benefits.",
        ko: "6-12개월 동안 정기적으로 근무한 후 캐주얼 직원은 정규직 전환을 요청할 수 있습니다. 고용주가 반드시 승인해야 하는 것은 아니지만, 당신이 신뢰할 수 있었다면 많은 경우 승낙합니다. 요청할 가치가 있습니다 — 정규직은 안정성과 혜택을 의미합니다.",
      },
      {
        label: "Part-Time",
        en: "Part-time employees work set hours (less than 38 per week) and receive prorated sick and annual leave. A part-time employee can increase their hours by agreement with their employer.",
        ko: "파트타임 직원은 정해진 근무 시간(주 38시간 미만)으로 근무하며 비례 계산된 병가와 연차를 받습니다. 파트타임 직원은 고용주와 합의하여 근무 시간을 늘릴 수 있습니다.",
      },
    ],
  },
  {
    id: "award-super",
    iconKey: "Coin",
    title: "Award & Super",
    koTitle: "급여와 퇴직금",
    desc: "Minimum pay standards and superannuation",
    koDesc: "최저 임금 기준과 퇴직연금",
    items: [
      {
        label: "What is an Award?",
        en: "An Award is a legal document that sets minimum pay and conditions for specific industries or jobs. If you're in a job covered by an Award, you must be paid at least the Award rate — not less.",
        ko: "Award는 특정 업종이나 직종에 대한 최저 임금과 근무 조건을 정한 법적 문서입니다. Award 적용 대상 직종에 있다면 최소한 Award 임금률을 받아야 합니다.",
      },
      {
        label: "Minimum Wage",
        en: "Australia has a national minimum wage. As of 2024, it's approximately $23 per hour for adult employees. This applies if no Award covers your job.",
        ko: "호주에는 전국 최저 임금이 있습니다. 2024년 기준 성인 직원 기준 시간당 약 $23입니다. Award 적용 대상이 아닌 경우 이 임금이 적용됩니다.",
      },
      {
        label: "Superannuation",
        en: "Superannuation (super) is money your employer must pay into your super fund — currently 11.5% of your wages. It goes into your nominated super fund and is accessible when you retire.",
        ko: "퇴직연금(super)은 고용주가 당신의 퇴직연금 계좌에 납부해야 하는 금액으로, 현재 임금의 11.5%입니다. 지정한 퇴직연금 계좌에 납부되며 퇴직 시 인출 가능집니다.",
      },
      {
        label: "Payslips",
        en: "You must receive a payslip within 1 day of being paid. It must show: your hours, pay rate, any overtime, deductions, and super contributions. You can check your pay against the Award or minimum wage online.",
        ko: "급여를 받은 후 1일 이내에 급여 명세서를 받아야 합니다. 근무 시간, 임금률, 야근 수당, 공제, 퇴직연금 기여금을 표시해야 합니다. Award 또는 최저 임금에 맞게 급여를 확인할 수 있습니다.",
      },
    ],
  },
  {
    id: "casual-rights",
    iconKey: "ShieldCheck",
    title: "Casual Rights",
    koTitle: "캐주얼 노동자 권리",
    desc: "Your rights as a casual worker in Australia",
    koDesc: "호주 캐주얼 노동자의 권리",
    items: [
      {
        label: "You're Allowed to Say No",
        en: "As a casual, you can refuse a shift. You don't have to give a reason. However, if you consistently refuse available shifts, the employer may reduce the shifts they offer you.",
        ko: "캐주얼로서 근무를 거절할 수 있습니다. 이유를 제공할 필요가 없습니다. 그러나 계속 이용 가능한 근무를 거절하면 고용주가 제공하는 근무 시간을 줄일 수 있습니다.",
      },
      {
        label: "Casual Conversion",
        en: "After 6 months (12 months for small businesses), your employer must offer you permanent part-time or full-time work if you've worked regular hours. You can also request conversion yourself at any time.",
        ko: "6개월 후(소기업은 12개월) 정규 근무를 해왔다면 고용주가 정규 파트타임 또는 전일제 근무를 제안해야 합니다. 언제든지 본인이 직접 전환을 요청할 수도 있습니다.",
      },
      {
        label: "Protection from Unfair Dismissal",
        en: "Casual employees who have been working regular hours for 6+ months are protected from unfair dismissal. If fired without proper reason, you can make a claim to the Fair Work Commission.",
        ko: "정규 근무를 6개월 이상 해온 캐주얼 직원은 부당한 해고로부터 보호받습니다. 정당한 이유 없이 해고되면 공정노동위원회에 청구할 수 있습니다.",
      },
      {
        label: "Paid Leave Entitlements",
        en: "Casuals do NOT get paid sick leave or annual leave. That's why the 25% casual loading exists — it compensates for this. However, casual employees can still access unpaid carer's leave and compassionate leave.",
        ko: "캐주얼 직원은 유급 병가나 연차 휴가를 받지 않습니다. 그래서 25% 캐주얼 로딩이 존재합니다 — 이를 보상하기 위함입니다. 그러나 캐주얼 직원도 무급 간병인 휴가와 조기 휴가를이용할 수 있습니다.",
      },
      {
        label: "WorkSafe Rights",
        en: "You have the right to a safe workplace. If you feel unsafe or are asked to do something dangerous, you can refuse the work and report the employer. No employer can punish you for raising safety concerns.",
        ko: "안전한 근무 환경에 대한 권리가 있습니다. 안전하지 않다고 느끼거나 위험한 것을 하도록 요청받으면 작업을 거부하고 고용주를 신고할 수 있습니다. 안전 문제를 제기한 직원을 처벌할 수 없습니다.",
      },
      {
        label: "Unfair Contracts",
        en: "If your employment contract has unreasonable terms, the Fair Work Commission can review and vary it. Don't feel locked into a bad contract — get advice if something seems wrong.",
        ko: "고용 계약에불합리한 조항이 있으면 공정노동위원회가 검토하고 변경할 수 있습니다. 불공평한 계약에 묶이지 마세요 — 무언가 잘못된 것 같으면 조언을 구하세요.",
      },
    ],
  },
  {
    id: "first-week",
    iconKey: "Star",
    title: "First Week Tips",
    koTitle: "첫째 주 팁",
    desc: "How to make a great first impression",
    koDesc: "좋은 첫 인상을 만드는 방법",
    items: [
      {
        label: "Arrive on Time (정시 도착)",
        en: "In Australia, 'on time' means 5-10 minutes early. Traffic and public transport can be unpredictable — plan your commute in advance. Tardiness in the first week makes a bad impression.",
        ko: "호주에서 '정시'는 5-10분 일찍 도착하는 것을 의미합니다. 교통과 대중교통은 예측 불가능할 수 있으니 사전에 출근 경로를 계획하세요. 첫 주에 지각하면 나쁜 인상을 줍니다.",
      },
      {
        label: "Bring Your Own Lunch First Day",
        en: "It's smart to bring your own lunch or snacks on day one. You may not know where the nearest cafes are, how long your break is, or whether there's a staff kitchen. Prep the night before.",
        ko: "첫날은 도시락이나 간식을 직접 가져가는 게 현명합니다. 근처 카페 위치, 휴식 시간 길이, 직원 주방 유무를 모를 수 있습니다. 전날 준비하세요.",
      },
      {
        label: "Ask Questions",
        en: "Asking questions shows you're engaged and want to learn. Aussie managers appreciate curiosity more than pretending to know everything. There's no shame in saying 'Can you show me how?'",
        ko: "질문하는 것은 적극적이고 배우려는 의지를 보여줍니다. 호주 매니저는 모든 걸 아는 척하는 것보다 호기심을 더 높이 평가합니다. '어떻게 하는지 보여주시겠어요?'라고 말하는 것은 부끄러운 일이 아닙니다.",
      },
      {
        label: "Don't Assume",
        en: "Every workplace has its own way of doing things. Don't assume processes are the same as in your home country. Observe first, ask second, act third. This applies to safety procedures, software, and workplace etiquette.",
        ko: "모든 직장에는 각자의 업무 방식이 있습니다. 모국과 과정이 같다고 가정하지 마세요. 먼저 관찰하고, 다음에 질문하고, 그다음에 행동하세요. 이는 안전 절차, 소프트웨어, 직장 에티켓에도 적용됩니다.",
      },
      {
        label: "Introduce Yourself",
        en: "When you meet new colleagues, introduce yourself with your name and where you're from. Say 'G'day, I'm [Name], I just started' — it's casual and friendly. People will appreciate the effort.",
        ko: "새 동료를 만나면 이름과 출신을 소개하세요. 'G'day, I'm [이름], I just started'라고 말하세요 — 캐주얼하고 친근한 표현입니다. 노력을 높이 평가할 거예요.",
      },
      {
        label: "Learn the Tea/ Coffee Culture",
        en: "Making tea or coffee for colleagues is a common bonding ritual. Offer to make a round ('Anyone want a coffee?') — it's a small gesture that builds big goodwill. Learn how the office coffee machine works first!",
        ko: "동료를 위해 차나 커피를 타주는 것은 흔한 유대감 형성 방식입니다. '커피 드실 분 계신가요?'라고 물어보세요 — 작은 행동이 큰 호감을 만듭니다. 먼저 사무실 커피머신 사용법을 배워두세요!",
      },
    ],
  },
];

const iconKeys = ["Clipboard", "Coin", "Handshake", "PersonSpeaking", "ShieldCheck", "Star"];

export default function WorkplacePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
          <En>Work</En>
          <Ko>직장</Ko>
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] mb-4">
          <En>Workplace</En>
          <Ko>직장</Ko>
        </h1>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>Aussie work culture, your rights, pay, and first-week tips.</En>
          <Ko>호주 직장 문화, 노동자 권리, 급여, 첫째 주 팁.</Ko>
        </p>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-4">
        <Accordion sections={sections} iconKeys={iconKeys} itemDelayS={0.08} />

        {/* Bottom note */}
        <div className="bg-sunset/5 border border-sunset/20 rounded-2xl p-5 text-center">
          <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60">
            <En>Need help with workplace issues? Contact{' '}
              <a href="https://www.fairwork.gov.au" target="_blank" rel="noopener" className="text-sunset font-semibold hover:underline">
                Fair Work Ombudsman
              </a>{' '}
              — free, confidential advice for all workers in Australia.</En>
            <Ko>직장 문제가 있나요?{' '}
              <a href="https://www.fairwork.gov.au" target="_blank" rel="noopener" className="text-sunset font-semibold hover:underline">
                Fair Work Ombudsman
              </a>{' '}
              에 연락하세요 — 호주 모든 노동자를 위한 무료 비밀 조언.</Ko>
          </p>
        </div>
      </div>
    </div>
  );
}
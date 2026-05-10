"use client";
import { useState } from "react";
import Quokka from "@/components/Quokka";

interface Section {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  content: ContentItem[];
}

interface ContentItem {
  label: string;
  en: string;
  ko: string;
}

const sections: Section[] = [
  {
    id: "workplace-culture",
    emoji: "🤝",
    title: "Workplace Culture",
    desc: "What makes Aussie workplaces different",
    content: [
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
    emoji: "🗣️",
    title: "Speaking Up",
    desc: "How to raise concerns and give feedback at work",
    content: [
      {
        label: "Direct Feedback is Normal",
        en: "Aussies will tell you directly if there's an issue. This is not personal — it's professional. Don't take it as an attack. And equally, you are expected to speak up if something isn't right.",
        ko: "호주인들은 문제가 있으면 직접 말합니다. 개인적인 게 아니라 업무적인 겁니다. 공격으로 받아들이지 마세요. 그리고 마찬가지로, 문제가 있으면 당신도 의견을 말해야 합니다.",
      },
      {
        label: "How to Raise Concerns",
        en: "Use 'I feel/I think' statements. Say: 'I think there might be an issue with this deadline' or 'I feel I need more support on this task'. Be calm, factual, and solution-oriented. Managers respect this.",
        ko: "'저는 ~라고 생각합니다' 표현을 사용하세요. '이 마감일에 문제가 있는 것 같습니다' 또는 '이 작업에 지원이 더 필요하다고 느낍니다'라고 말하세요. 침착하고 사실 중심으로, 해결책을 함께 제시하세요. 매니저들은 이를 존중합니다.",
      },
      {
        label: "Performance Reviews",
        en: "Most workplaces have regular check-ins (weekly/monthly one-on-ones). Use these to discuss workload, career goals, and any concerns. It's not just for your boss to talk — it's for you too.",
        ko: "대부분의 직장에는 정기적인 면담(주간/월간 원온원)이 있습니다. 업무량, 경력 목표, 우려사항을 논의하세요. 상사만 말하는 자리가 아닙니다 — 당신의 의견도 중요합니다.",
      },
      {
        label: "Handling Conflict",
        en: "If there's conflict with a coworker, try to resolve it directly and calmly first. If that doesn't work, speak to your manager or HR. Harassment and bullying are taken very seriously in Australia.",
        ko: "동료와 갈등이 있다면 먼저 직접적이고 침착하게 해결해 보세요. 안 되면 매니저나 HR(인사부)에 이야기하세요. 호주에서는 괴롭힘과 왕따를 매우 심각하게 다룹니다.",
      },
    ],
  },
  {
    id: "casual-permanent",
    emoji: "📄",
    title: "Casual vs Permanent",
    desc: "The different employment types and what they mean",
    content: [
      {
        label: "Casual Employee (캐주얼/임시직)",
        en: "No fixed hours. You get paid a higher hourly rate (casual loading — usually 25% extra) instead of sick leave or annual leave. Either you or the employer can end the arrangement with little notice. Common in hospitality, retail, and labour.",
        ko: "고정 시간이 없습니다. 병가나 연차 대신 더 높은 시급(캐주얼 로딩 — 보통 25% 추가)을 받습니다. 본인이나 고용주 모두 짧은 통보로 계약을 끝낼 수 있습니다. 주로 접객업, 소매업, 노무직에서 흔합니다.",
      },
      {
        label: "Permanent Full-Time (정규직 풀타임)",
        en: "Fixed hours (usually 38 hours/week). You get paid annual leave (4 weeks/year), sick leave (10 days/year), and public holidays off. Job is ongoing unless you resign or are made redundant.",
        ko: "고정 시간(보통 주 38시간)입니다. 연차(연 4주), 병가(연 10일), 공휴일 휴무 혜택이 있습니다. 사직하거나 정리해고되지 않는 한 고용이 계속됩니다.",
      },
      {
        label: "Permanent Part-Time (정규직 파트타임)",
        en: "Same benefits as full-time but fewer hours. You get annual leave and sick leave calculated proportionally. Often used by students, parents, or people with other commitments.",
        ko: "풀타임과 혜택은 같지만 시간이 적습니다. 연차와 병가도 비례해서 계산됩니다. 주로 학생, 학부모, 또는 다른 약속이 있는 사람들이 사용합니다.",
      },
      {
        label: "Fixed-Term Contract (계약직)",
        en: "Employment for a set period (e.g. 6 months, 1 year). You get the same benefits as permanent employees during the contract. When the contract ends, so does the employment — no notice required.",
        ko: "정해진 기간(예: 6개월, 1년) 동안 고용됩니다. 계약 기간 동안 정규직과 동일한 혜택을 받습니다. 계약이 끝나면 고용도 종료됩니다 — 별도 통보가 필요 없습니다.",
      },
      {
        label: "Probation Period (수습 기간)",
        en: "Most permanent jobs have a 3-6 month probation period. During this time, either side can end the job with just 1 week notice. Use this time to see if the role is right for you too.",
        ko: "대부분의 정규직에는 3-6개월의 수습 기간이 있습니다. 이 기간 동안 양측 모두 1주의 통보 기간만으로 고용을 종료할 수 있습니다. 이 기간을 통해 역할이 자신에게 맞는지 확인하세요.",
      },
    ],
  },
  {
    id: "award-super",
    emoji: "💰",
    title: "Award Rates & Super",
    desc: "Your pay, entitlements, and retirement savings",
    content: [
      {
        label: "What is an Award? (어워드/최저임금 기준)",
        en: "An 'Award' is a legal document that sets minimum pay rates and conditions for a specific industry. For example, the Hospitality Award covers restaurants and cafes. Your pay must meet or exceed your Award rate.",
        ko: "'어워드'는 특정 업종의 최저 임금과 근무 조건을 정한 법적 문서입니다. 예를 들어, Hospitality Award는 레스토랑과 카페를 규율합니다. 당신의 임금은 해당 어워드 기준을 충족하거나 초과해야 합니다.",
      },
      {
        label: "Minimum Wage",
        en: "As of 2025-26, the national minimum wage is approximately $24.10 per hour. Award rates may be higher depending on your industry and role. Check the Fair Work Ombudsman website to confirm.",
        ko: "2025-26년 기준, 호주 국가 최저임금은 시간당 약 $24.10입니다. 업종과 직무에 따라 어워드 요율이 더 높을 수 있습니다. Fair Work Ombudsman 웹사이트에서 확인하세요.",
      },
      {
        label: "Penalty Rates (가산 수당)",
        en: "Working evenings, weekends, or public holidays usually means higher pay. For example, casual hospitality workers on Saturday night might earn 175% of their base rate. Time-and-a-half or double-time are common terms.",
        ko: "저녁, 주말, 공휴일 근무는 일반적으로 더 높은 임금을 받습니다. 예를 들어, 토요일 밤 캐주얼 접객업 직원은 기본 시급의 175%를 받을 수 있습니다. 'Time-and-a-half'(1.5배)나 'Double-time'(2배)이 일반적인 용어입니다.",
      },
      {
        label: "Superannuation (슈퍼/퇴직연금)",
        en: "Super is money your employer pays into a retirement fund for you. As of 2025, employers must pay 11.5% of your ordinary earnings into your super account. This is on top of your salary — it's not deducted from your pay. You can access it when you retire (currently age 60-67 depending on your birth year).",
        ko: "슈퍼는 고용주가 당신의 퇴직 기금에 납입하는 돈입니다. 2025년 기준, 고용주는 당신의 일반 소득의 11.5%를 슈퍼 계좌에 납입해야 합니다. 이건 급여 외에 추가로 지급되는 것이며, 급여에서 공제되지 않습니다. 은퇴 시(현재 출생연도에 따라 60-67세) 사용할 수 있습니다.",
      },
      {
        label: "Choosing a Super Fund",
        en: "You can choose your own super fund. If you don't choose one, your employer will use their default fund (often called a 'MySuper' product). Compare fees and insurance options. Popular funds include AustralianSuper, Hostplus, and REST.",
        ko: "슈퍼 펀드를 직접 선택할 수 있습니다. 선택하지 않으면 고용주가 기본 펀드(보통 'MySuper' 상품)를 사용합니다. 수수료와 보험 옵션을 비교하세요. 인기 펀드는 AustralianSuper, Hostplus, REST 등이 있습니다.",
      },
      {
        label: "Payslip (급여명세서)",
        en: "Your employer must give you a payslip within 1 day of payday. It shows your pay, hours worked, tax withheld, and super contributions. Keep all payslips — you'll need them for tax returns.",
        ko: "고용주는 급여일로부터 1일 이내에 급여명세서를 제공해야 합니다. 급여, 근무 시간, 원천징수 세금, 슈퍼 기여금이 표시됩니다. 모든 급여명세서를 보관하세요 — 세금 신고에 필요합니다.",
      },
    ],
  },
  {
    id: "casual-rights",
    emoji: "🛡️",
    title: "Your Rights as a Casual",
    desc: "What casual workers are entitled to",
    content: [
      {
        label: "Can Refuse Extra Hours",
        en: "As a casual, you can say no to extra shifts without punishment. You don't have a guaranteed minimum hours, but you also can't be forced to work when you're not available.",
        ko: "캐주얼 직원은 추가 근무를 거부해도 불이익이 없습니다. 보장된 최소 시간은 없지만, 가능하지 않은 시간에 강제로 일할 의무도 없습니다.",
      },
      {
        label: "Must Get Breaks",
        en: "If you work more than 5 hours, you're entitled to a 30-minute unpaid break. Some awards require a break after 4 hours. You also get a 10-minute paid rest break for every 4 hours worked in some industries.",
        ko: "5시간 이상 근무 시 30분의 무급 휴게 시간이 보장됩니다. 일부 어워드는 4시간 후 휴식을 요구합니다. 일부 업종에서는 4시간 근무마다 10분 유급 휴식이 있습니다.",
      },
      {
        label: "Right to Refuse Unsafe Work",
        en: "You have the right to refuse any task you reasonably believe is unsafe — without punishment. If equipment is broken, training is insufficient, or conditions are dangerous, speak up immediately.",
        ko: "합리적으로 안전하지 않다고 판단되는 작업은 처벌 없이 거부할 권리가 있습니다. 장비가 고장났거나, 교육이 부족하거나, 조건이 위험하다면 즉시 말하세요.",
      },
      {
        label: "Casual Conversion (정규직 전환권)",
        en: "After 12 months of regular, predictable work, you may have the right to request conversion to permanent part-time or full-time. Your employer must consider it and can only refuse on reasonable grounds.",
        ko: "12개월 동안 규칙적이고 예측 가능한 근무를 한 경우, 정규직(파트타임 또는 풀타임) 전환을 요청할 권리가 있을 수 있습니다. 고용주는 이를 검토해야 하며, 합리적인 사유가 있을 때만 거절할 수 있습니다.",
      },
      {
        label: "Unfair Dismissal",
        en: "Casual employees who have worked for more than 6 months (or 12 months for small businesses) are protected from unfair dismissal. You cannot be fired for discriminatory reasons or for exercising your workplace rights.",
        ko: "6개월 이상(소기업은 12개월) 근무한 캐주얼 직원은 부당 해고로부터 보호받습니다. 차별적 이유나 직장 권리 행사를 이유로 해고될 수 없습니다.",
      },
    ],
  },
  {
    id: "first-week",
    emoji: "🌟",
    title: "First Week Tips",
    desc: "How to make a great first impression",
    content: [
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

export default function WorkplacePage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <Quokka scene="desk" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-eucalypt dark:text-white mb-2">
            Workplace 💼
          </h1>
          <p className="text-eucalypt/60 dark:text-dark-muted/60">
            Aussie work culture, your rights, pay, and first-week tips
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-4">
        {sections.map((section, si) => {
          const isOpen = openSection === section.id;
          return (
            <div
              key={section.id}
              className="bg-white dark:bg-dark-card border border-sand dark:border-dark-border rounded-2xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${si * 0.08}s` }}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full text-left px-4 md:px-5 py-4 min-h-[60px] flex items-center gap-3 hover:bg-sand/50 dark:hover:bg-dark-surface/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-xl shrink-0">{section.emoji}</span>
                <div className="flex-1 min-w-0 pr-2">
                  <h2 className="font-bold text-sm md:text-base text-eucalypt dark:text-white leading-snug">{section.title}</h2>
                  <p className="text-xs text-eucalypt/50 dark:text-dark-muted/50 mt-0.5">{section.desc}</p>
                </div>
                <svg
                  className={`w-5 h-5 text-sunset shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Accordion Body */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="divide-y divide-sand dark:divide-dark-border border-t border-sand dark:border-dark-border">
                  {section.content.map((item, ii) => (
                    <div key={ii} className="px-5 py-4">
                      <p className="font-semibold text-sm text-sunset mb-1.5">{item.label}</p>
                      <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed mb-2">{item.en}</p>
                      <div className="bg-sand/70 dark:bg-dark-surface/70 rounded-xl px-4 py-2.5 border-l-2 border-sage">
                        <p className="text-xs font-medium text-sage mb-0.5">🇰🇷 한국어</p>
                        <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed">{item.ko}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Bottom note */}
        <div className="bg-sunset/5 border border-sunset/20 rounded-2xl p-5 text-center">
          <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60">
            Need help with workplace issues? Contact{' '}
            <a href="https://www.fairwork.gov.au" target="_blank" rel="noopener" className="text-sunset font-semibold hover:underline">
              Fair Work Ombudsman
            </a>{' '}
            — free, confidential advice for all workers in Australia.
          </p>
        </div>
      </div>
    </div>
  );
}

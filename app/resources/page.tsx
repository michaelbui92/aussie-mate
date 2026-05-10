"use client";
import { useState } from "react";

interface Section {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  content: ResourceItem[];
}

interface ResourceItem {
  label: string;
  en: string;
  ko: string;
  url: string;
  urlLabel?: string;
}

const sections: Section[] = [
  {
    id: "government",
    emoji: "🏛️",
    title: "Government Services",
    desc: "Essential services for healthcare, tax, employment, and more",
    content: [
      {
        label: "Medicare (메디케어)",
        en: "Australia's public healthcare system. Temporary residents from countries with Reciprocal Healthcare Agreements (UK, NZ, Italy, Belgium, etc.) may be eligible for limited Medicare cover. Even if you're not eligible, everyone in Australia has access to free emergency treatment at public hospital emergency departments.",
        ko: "호주의 공공 의료 시스템입니다. 상호 의료 협정 체결국(영국, 뉴질랜드, 이탈리아, 벨기에 등)의 임시 거주자는 제한된 메디케어 혜택을 받을 수 있습니다. 자격이 없더라도 호주에 있는 모든 사람은 공립 병원 응급실에서 무료 응급 치료를 받을 수 있습니다.",
        url: "https://www.servicesaustralia.gov.au/sites/managing-access-to-medicare-for-temporary-residents",
        urlLabel: "servicesaustralia.gov.au",
      },
      {
        label: "Centrelink (센터링크)",
        en: "The government agency that delivers social security payments. Includes JobSeeker (for unemployed people actively looking for work), Family Tax Benefit (for parents/carers of children), Youth Allowance (for students 16-24), and more. Most international students and temporary visa holders are NOT eligible — check your visa conditions.",
        ko: "사회보장 급여를 제공하는 정부 기관입니다. JobSeeker(구직 활동 중인 실업자 대상), Family Tax Benefit(자녀가 있는 부모/보호자 대상), Youth Allowance(16-24세 학생 대상) 등이 포함됩니다. 대부분의 유학생과 임시 비자 소지자는 자격이 없습니다 — 비자 조건을 확인하세요.",
        url: "https://www.servicesaustralia.gov.au/centrelink",
        urlLabel: "servicesaustralia.gov.au/centrelink",
      },
      {
        label: "myGov (마이갓)",
        en: "One login for multiple government services. Link your Medicare, ATO, Centrelink, NDIS, and My Health Record all in one place. Set this up as soon as you arrive — you'll need it for tax returns, healthcare, and more. Get it at my.gov.au.",
        ko: "여러 정부 서비스를 하나의 로그인으로 이용할 수 있습니다. 메디케어, ATO, 센터링크, NDIS, My Health Record를 한곳에서 연결하세요. 도착하자마자 설정하세요 — 세금 신고, 의료 등에 필요합니다. my.gov.au에서 가입하세요.",
        url: "https://my.gov.au",
        urlLabel: "my.gov.au",
      },
      {
        label: "TFN Application (호주 세금 번호)",
        en: "A Tax File Number (TFN) is essential for working in Australia. Without a TFN, your employer must withhold tax at the highest rate (47%). Apply online through the ATO website — it's free and takes about 28 days to arrive by mail. International students can apply from day one.",
        ko: "TFN(세금 파일 번호)은 호주에서 일하기 위해 필수입니다. TFN이 없으면 고용주는 최고 세율(47%)로 원천징수합니다. ATO 웹사이트를 통해 온라인으로 신청하세요 — 무료이며 우편으로 도착하는 데 약 28일이 소요됩니다. 유학생도 첫날부터 신청할 수 있습니다.",
        url: "https://www.ato.gov.au/individuals/tax-file-number",
        urlLabel: "ato.gov.au/TFN",
      },
      {
        label: "Service NSW (서비스 NSW)",
        en: "The NSW state government one-stop shop. Get or renew your driver's licence, register your vehicle, pay fines, apply for seniors cards, and access other vital services. Many services are available online or at Service NSW centres across Sydney.",
        ko: "NSW 주정부의 원스톱 서비스입니다. 운전면허증 발급/갱신, 차량 등록, 벌금 납부, 시니어 카드 신청 등 다양한 필수 서비스를 이용할 수 있습니다. 많은 서비스를 온라인으로 이용하거나 시드니 전역의 Service NSW 센터에서 이용할 수 있습니다.",
        url: "https://www.service.nsw.gov.au",
        urlLabel: "service.nsw.gov.au",
      },
      {
        label: "ATO (호주 국세청)",
        en: "The Australian Taxation Office handles: income tax, GST, superannuation, business registrations, and tax returns. Everyone who earns income in Australia (including international students on working visas) must lodge a tax return each financial year (July 1 to June 30). Lodgement is usually open from July to October.",
        ko: "호주 국세청은 소득세, GST, 슈퍼안내이션, 사업자 등록, 세금 환급을 담당합니다. 호주에서 소득이 있는 모든 사람(취업 비자 유학생 포함)은 매 회계연도(7월 1일~6월 30일)마다 세금 신고를 해야 합니다. 신고 기간은 보통 7월부터 10월까지입니다.",
        url: "https://www.ato.gov.au",
        urlLabel: "ato.gov.au",
      },
      {
        label: "Fair Trading NSW (NSW 공정거래위원회)",
        en: "NSW Fair Trading protects consumers and tenants. It handles: rental bond disputes, product safety, tenancy rights (including rent increases, repairs, and evictions), business licensing, and complaints about unfair trading practices.",
        ko: "NSW Fair Trading은 소비자와 임차인을 보호합니다. 임대 보증금 분쟁, 제품 안전, 임차권(임대료 인상, 수리, 퇴거 등), 사업자 허가, 불공정 거래 관행 신고를 처리합니다.",
        url: "https://www.fairtrading.nsw.gov.au",
        urlLabel: "fairtrading.nsw.gov.au",
      },
    ],
  },
  {
    id: "education",
    emoji: "📚",
    title: "Education",
    desc: "Universities, TAFE, and study resources in NSW",
    content: [
      {
        label: "Study NSW (NSW 유학 공식 정보)",
        en: "The official NSW Government website for international students. Information on studying in NSW, student life, accommodation, visa conditions, work rights, and support services. Also runs the International Student Connect program for events and networking.",
        ko: "NSW 주정부 공식 유학생 정보 웹사이트입니다. NSW 유학, 학생 생활, 숙소, 비자 조건, 취업 권리, 지원 서비스에 대한 정보를 제공합니다. 이벤트 및 네트워킹을 위한 International Student Connect 프로그램도 운영합니다.",
        url: "https://www.study.nsw.gov.au",
        urlLabel: "study.nsw.gov.au",
      },
      {
        label: "TAFE NSW (TAFE NSW 직업 교육)",
        en: "Vocational education and training provider. Offers hundreds of affordable, practical courses from certificates to diplomas. Fields include hospitality, IT, nursing, aged care, childcare, trades, and business. Much cheaper than university degrees. International students welcome.",
        ko: "직업 교육 및 훈련 기관입니다. 수백 개의 저렴하고 실용적인 과정(자격증부터 디플로마까지)을 제공합니다. 분야는 접객업, IT, 간호, 노인 복지, 보육, 기술, 비즈니스를 포함합니다. 대학 학위보다 훨씬 저렴합니다. 유학생 환영합니다.",
        url: "https://www.tafensw.edu.au",
        urlLabel: "tafensw.edu.au",
      },
      {
        label: "Learn Live Australia (런 리브 오스트레일리아)",
        en: "A platform connecting students with TAFE and vocational courses across Australia. Search by field of study, location, and course level. Useful for comparing different institutions and finding the right course for your career goals.",
        ko: "호주 전역의 TAFE 및 직업 교육 과정을 연결해주는 플랫폼입니다. 학습 분야, 위치, 과정 수준별로 검색할 수 있습니다. 다른 기관을 비교하고 경력 목표에 맞는 과정을 찾는 데 유용합니다.",
        url: "https://www.learnliveaustralia.com.au",
        urlLabel: "learnliveaustralia.com.au",
      },
      {
        label: "University of Sydney (시드니 대학교)",
        en: "Australia's oldest university (founded 1850) and a member of the prestigious Group of Eight (Go8). Strong in law, medicine, arts, and sciences. Camperdown/Darlington campus is near the CBD. World ranking: typically top 40 globally.",
        ko: "호주 최초의 대학교(1850년 설립)이자 명문 Group of Eight(Go8) 회원입니다. 법학, 의학, 인문학, 과학 분야에 강점이 있습니다. Camperdown/Darlington 캠퍼스는 CBD 인근에 있습니다. 세계 순위는 일반적으로 상위 40위권입니다.",
        url: "https://www.sydney.edu.au",
        urlLabel: "sydney.edu.au",
      },
      {
        label: "UNSW Sydney (뉴사우스웨일즈 대학교)",
        en: "University of New South Wales — another Go8 university. Particularly strong in engineering, business (AGSM), law, computer science, and medicine. Kensington campus, 15 minutes from the CBD by bus or light rail. Known for strong industry connections and graduate employability.",
        ko: "또 다른 Go8 대학교입니다. 공학, 경영(AGSM), 법학, 컴퓨터 과학, 의학 분야에서 특히 강합니다. Kensington 캠퍼스는 CBD에서 버스나 경전철로 15분 거리입니다. 강력한 산업 연결과 졸업생 취업률로 유명합니다.",
        url: "https://www.unsw.edu.au",
        urlLabel: "unsw.edu.au",
      },
      {
        label: "University of Technology Sydney (UTS)",
        en: "A young, dynamic university focused on industry-relevant education. Strong in IT, design, communication, business, and nursing. Ultimo campus is right in the city centre — walking distance to Central Station and Chinatown. Known for its distinctive 'brown paper bag' building.",
        ko: "산업 맞춤형 교육에 중점을 둔 젊고 역동적인 대학교입니다. IT, 디자인, 커뮤니케이션, 경영, 간호 분야에 강점이 있습니다. Ultimo 캠퍼스는 도심 한복판에 있어 Central Station과 차이나타운에서 도보 거리입니다. 독특한 '갈색 종이 가방' 건물로 유명합니다.",
        url: "https://www.uts.edu.au",
        urlLabel: "uts.edu.au",
      },
      {
        label: "Macquarie University (매쿼리 대학교)",
        en: "Located in North Ryde (north-west Sydney). Strong in linguistics, education, business, and environmental sciences. Known for its large, beautiful campus with a lake and native bushland. The metro station connects directly to the CBD in about 25 minutes. Good for students who prefer a suburban campus feel.",
        ko: "North Ryde(시드니 북서부)에 위치해 있습니다. 언어학, 교육, 경영, 환경 과학 분야에 강점이 있습니다. 호수와 자연림이 있는 크고 아름다운 캠퍼스로 유명합니다. 지하철로 CBD까지 약 25분 거리입니다. 교외 캠퍼스 분위기를 선호하는 학생에게 좋습니다.",
        url: "https://www.mq.edu.au",
        urlLabel: "mq.edu.au",
      },
    ],
  },
  {
    id: "healthcare",
    emoji: "🏥",
    title: "Healthcare",
    desc: "Medical services, mental health support, and urgent care",
    content: [
      {
        label: "Medicare in Korean (한국어 메디케어 정보)",
        en: "Services Australia provides Medicare information translated into Korean. Covers eligibility, how to enrol, what's covered, and how to use Medicare. Check the website or call the multilingual phone service (131 202) and ask for a Korean interpreter.",
        ko: "Services Australia는 한국어로 번역된 메디케어 정보를 제공합니다. 자격 요건, 등록 방법, 적용 범위, 사용 방법을 다룹니다. 웹사이트를 확인하거나 다국어 전화 서비스(131 202)에 전화해 한국어 통역사를 요청하세요.",
        url: "https://www.servicesaustralia.gov.au/medicare",
        urlLabel: "servicesaustralia.gov.au/medicare",
      },
      {
        label: "Bulk Billing Clinics (벌크 빌링 의원)",
        en: "A 'bulk billing' clinic means the doctor bills Medicare directly and you pay nothing out of pocket. You must have a valid Medicare card to use bulk billing. Search 'bulk billing GP near me' to find clinics. Many clinics in areas with large Korean populations (Strathfield, Campsie, Lidcombe) have Korean-speaking doctors.",
        ko: "'벌크 빌링' 의원은 의사가 메디케어에 직접 청구하므로 본인 부담금이 없습니다. 벌크 빌링을 이용하려면 유효한 메디케어 카드가 있어야 합니다. 'bulk billing GP near me'를 검색해 의원을 찾으세요. 한인 밀집 지역(Strathfield, Campsie, Lidcombe)의 많은 의원에는 한국어 구사 의사가 있습니다.",
        url: "https://www.healthdirect.gov.au/bulk-billing",
        urlLabel: "healthdirect.gov.au",
      },
      {
        label: "Hospital ER vs Urgent Care (응급실 vs 응급 진료)",
        en: "For genuine emergencies (chest pain, severe bleeding, difficulty breathing, unconsciousness) — go to a public hospital Emergency Department. It's free at public hospitals regardless of visa status. For non-life-threatening after-hours issues (minor infections, sprains, cuts), visit an Urgent Care Centre — cheaper and faster than ER with no appointment needed.",
        ko: "진정한 응급 상황(흉통, 심한 출혈, 호흡 곤란, 의식 불명) — 공립 병원 응급실로 가세요. 비자 상태에 관계없이 공립 병원 응급실은 무료입니다. 생명에 위협이 되지 않는 야간 문제(가벼운 감염, 염좌, 상처)는 Urgent Care Centre를 방문하세요 — 응급실보다 저렴하고 빠르며 예약이 필요 없습니다.",
        url: "https://www.health.nsw.gov.au/urgentcare",
        urlLabel: "health.nsw.gov.au/urgentcare",
      },
      {
        label: "Beyond Blue (비욘드 블루)",
        en: "Australia's leading mental health support organisation. Provides free, confidential support for anxiety, depression, and other mental health concerns. 24/7 phone counselling: 1300 224 636. Online chat and forum also available. Website has resources translated into multiple languages including Korean.",
        ko: "호주 최고의 정신 건강 지원 기관입니다. 불안, 우울증 및 기타 정신 건강 문제에 대한 무료 비밀 지원을 제공합니다. 24시간 전화 상담: 1300 224 636. 온라인 채팅과 포럼도 이용 가능합니다. 웹사이트에는 한국어를 포함한 여러 언어로 번역된 자료가 있습니다.",
        url: "https://www.beyondblue.org.au",
        urlLabel: "beyondblue.org.au",
      },
      {
        label: "Lifeline (라이프라인)",
        en: "24/7 crisis support service. Anyone can call — no Medicare or appointment needed. If you're feeling overwhelmed, lonely, suicidal, or just need someone to talk to, call 13 11 14. Also offers online chat (7pm-midnight) and text support. Completely confidential.",
        ko: "24시간 위기 지원 서비스입니다. 누구나 전화할 수 있습니다 — 메디케어나 예약이 필요 없습니다. 압도감, 외로움, 자살 충동을 느끼거나 그냥 이야기할 사람이 필요하면 13 11 14로 전화하세요. 온라인 채팅(오후 7시~자정)과 문자 지원도 제공됩니다. 완전히 비밀이 보장됩니다.",
        url: "https://www.lifeline.org.au",
        urlLabel: "lifeline.org.au",
      },
    ],
  },
  {
    id: "emergency",
    emoji: "🚨",
    title: "Emergency Contacts",
    desc: "Who to call in an emergency — keep these numbers saved",
    content: [
      {
        label: "Emergency — 000 (비상 전화 — 000)",
        en: "For police, fire, or ambulance in genuine emergencies ONLY. A genuine emergency means: immediate danger to life or property, a serious crime in progress, a fire, or a medical emergency (chest pain, difficulty breathing, severe bleeding, unconsciousness). Call 000 and tell the operator which service you need. An interpreter service is available — just say 'Korean' or your language. Do NOT call 000 for information, directions, or non-emergencies.",
        ko: "진정한 응급 상황에서만 경찰, 소방서, 구급차를 호출하세요. 진정한 응급 상황이란: 생명이나 재산에 즉각적인 위험, 진행 중인 중범죄, 화재, 의료 응급(흉통, 호흡 곤란, 심한 출혈, 의식 불명)입니다. 000에 전화하여 필요한 서비스를 알리세요. 통역 서비스를 이용할 수 있습니다 — 'Korean' 또는 원하는 언어를 말하세요. 정보 문의, 길찾기, 비응급 상황에는 000에 전화하지 마세요.",
        url: "https://www.nsw.gov.au/emergency",
        urlLabel: "nsw.gov.au/emergency",
      },
      {
        label: "SES NSW — 132 500 (NSW 주 비상 서비스)",
        en: "The State Emergency Service handles: storms (roof damage, fallen trees), floods (sandbagging, rescue), building damage, and landslips. Call 132 500 for help with storm and flood emergencies. Do NOT call 000 for these — SES is the right number. Volunteers will come and help, even in the middle of the night.",
        ko: "NSW 주 비상 서비스는 다음을 처리합니다: 폭풍(지붕 손상, 쓰러진 나무), 홍수(모래주머니, 구조), 건물 손상, 산사태. 폭풍 및 홍수 비상 시 132 500으로 전화하세요. 이런 경우 000이 아닌 SES가 올바른 번호입니다. 자원봉사자가 한밤중에도 와서 도와줍니다.",
        url: "https://www.ses.nsw.gov.au",
        urlLabel: "ses.nsw.gov.au",
      },
      {
        label: "Poisons Information Centre — 13 11 26 (독극물 정보 센터)",
        en: "24/7 free advice if someone has swallowed something poisonous, been bitten or stung, or come into contact with a dangerous substance. Call from anywhere in Australia. They will tell you exactly what to do — whether to go to hospital, drink water, or stay home and observe. Available 365 days a year.",
        ko: "누군가 유독 물질을 삼켰거나, 물리거나 쏘이거나, 위험 물질에 접촉한 경우 24시간 무료 상담을 제공합니다. 호주 어디서나 전화하세요. 정확히 무엇을 해야 하는지 알려줍니다 — 병원에 갈지, 물을 마실지, 집에서 지켜볼지. 연중무휴 365일 이용 가능합니다.",
        url: "https://www.poisonsinfo.nsw.gov.au",
        urlLabel: "poisonsinfo.nsw.gov.au",
      },
      {
        label: "Crime Stoppers — 1800 333 000 (크라임 스토퍼스)",
        en: "Report crime anonymously. If you see something suspicious, know about a crime, or want to provide information without giving your name — call Crime Stoppers. You don't have to go to court or give a statement. Can also report online. Not for emergencies — use 000 for those.",
        ko: "익명으로 범죄를 신고합니다. 수상한 것을 목격했거나, 범죄에 대해 알게 되었거나, 이름을 밝히지 않고 정보를 제공하려면 Crime Stoppers에 전화하세요. 법정에 출석하거나 진술할 필요가 없습니다. 온라인 신고도 가능합니다. 응급 상황이 아닙니다 — 응급 상황은 000을 사용하세요.",
        url: "https://www.nsw.crimestoppers.com.au",
        urlLabel: "nsw.crimestoppers.com.au",
      },
    ],
  },
];

export default function ResourcesPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-eucalypt dark:text-white mb-2"> reveal
            Resources 🎒
          </h1>
          <p className="text-eucalypt/60 dark:text-dark-muted/60"> reveal reveal-delay-1
            Essential Australian services and community resources
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-4">
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
                className="w-full text-left px-5 py-4 flex items-center gap-3 hover:bg-sand/50 dark:hover:bg-dark-surface/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-xl shrink-0">{section.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h2 className="font-bold text-base text-eucalypt dark:text-white">{section.title}</h2>
                  <p className="text-xs text-eucalypt/50 dark:text-dark-muted/50">{section.desc}</p>
                </div>
                <svg
                  className={`w-5 h-5 text-sunset shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Accordion Body */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="divide-y divide-sand dark:divide-dark-border border-t border-sand dark:border-dark-border">
                  {section.content.map((item, ii) => (
                    <div key={ii} className="px-5 py-4">
                      <p className="font-semibold text-sm text-sunset mb-1.5">{item.label}</p>
                      <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed mb-2">{item.en}</p>
                      <div className="bg-sand/70 dark:bg-dark-surface/70 rounded-xl px-4 py-2.5 border-l-2 border-sage mb-3">
                        <p className="text-xs font-medium text-sage mb-0.5">🇰🇷 한국어</p>
                        <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed">{item.ko}</p>
                      </div>
                      <div>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-coast hover:text-sunset transition-colors underline underline-offset-2"
                        >
                          🔗 {item.urlLabel || item.url}
                        </a>
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
            Made with 🦘 for everyone new to Australia
          </p>
        </div>
      </div>
    </div>
  );
}

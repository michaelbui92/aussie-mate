// Shared FAQ data — single source of truth, imported by:
//   - app/faq/page.tsx (full list)
//   - app/components/HomePage.tsx (top 3 for homepage row)
//
// Keep this list in sync with /faq content if you add/remove items.
// Each item has bilingual question + answer with the EN text only used
// for FAQPage JSON-LD (Google rich results require EN text payloads).

export interface FaqItem {
  q: { en: string; ko: string };
  a: { en: string; ko: string };
}

export const faqs: FaqItem[] = [
  {
    q: { en: "Do I need a visa to visit Australia?", ko: "호주 방문에 비자가 필요한가요?" },
    a: {
      en: "Yes, almost certainly. Korean passport holders need a visa for Australia. Tourist visa (ETA subclass 601) is the easiest — it takes minutes to apply online and is valid for 12 months with stays up to 3 months per visit. Working Holiday Maker visa (subclass 417) if you're eligible. Check at homeaffairs.gov.au.",
      ko: "네, 거의 확실히 필요합니다. 한국 여권 소지자는 호주 비자가 필요합니다. Tourist visa (ETA subclass 601)가 가장 간단 — 온라인으로 몇 분 만에 신청 가능, 12개월 유효, 1회 방문 시 최대 3개월 체류. 워킹 홀리데이 비자(subclass 417)는 eligibility가 되면 가능. homeaffairs.gov.au에서 확인하세요.",
    },
  },
  {
    q: { en: "Can I work in Australia on a tourist visa?", ko: "관광비자로 호주에서 일할 수 있나요?" },
    a: {
      en: "No. Tourist visas (including ETA) do not allow any work. If you're caught working on a tourist visa, you risk deportation, a ban, and your future visa applications being refused. If you want to work, you need a working visa — Working Holiday Maker (417), student, or skilled visa.",
      ko: "불가능합니다. 관광비자(ETA 포함)는 어떠한 유형의 취업도 금지됩니다. 관광비자로 일하다 적발되면 추방, 입국 금지, 향후 비자 신청 거절 위험이 있습니다. 취업하려면 워킹 비자(417), 학생 비자, 기술 비자 중 하나가 필요합니다.",
    },
  },
  {
    q: { en: "Is Australia expensive?", ko: "호주는 비싼가요?" },
    a: {
      en: "Yes — Sydney and Melbourne are among the world's most expensive cities. A coffee is around $5–$7. A casual restaurant meal is $20–$35 per person. Rent in Sydney is the biggest cost — a room in a shared house is $200–$350/week, a one-bedroom apartment starts around $450–$600/week. Use numbeo.com or expatistan.com for real-time comparisons.",
      ko: "네 — 시드니와 멜버른은 세계에서 가장 비싼 도시 중 하나입니다. 커피 한 잔에 약 $5–$7. 비공식 레스토랑 식사는 1인당 $20–$35. 시드니에서 가장 큰 지출은 임대 — 쉐어하우스 방은 주 $200–$350, 1Bed 아파트는 주 $450–$600부터. 실시간 비교는 numbeo.com 또는 expatistan.com에서.",
    },
  },
  {
    q: { en: "What is super and why does it matter?", ko: "Super란 무엇이며 왜 중요하나요?" },
    a: {
      en: "Superannuation (super) is a retirement savings account your employer is legally required to pay into — currently 11.5% of your wages. It's yours. You can't access it until retirement (with some exceptions). When you leave Australia permanently, you can claim it as a 'super withdrawal' — but tax applies. Always check your super statement annually and consider consolidating accounts to avoid fees.",
      ko: "Superannuation (super)은 고용주가 법적 의무로 납입해야 하는 퇴직 적금 계좌입니다 — 현재 월급의 11.5%. 그 돈은 당신 것입니다. (일부 예외 제외) 은퇴할 때까지 인출 불가. 호주를 영구적으로 떠날 때 'super withdrawal'으로 인출 가능 — 하지만 세금이 부과됩니다. 매년 명세서를 확인하고, 비용을 피하기 위해 계좌를 통합하는 것을 고려하세요.",
    },
  },
  {
    q: { en: "How does healthcare work in Australia?", ko: "호주의 의료 시스템은 어떻게 되나요?" },
    a: {
      en: "Australia has a public healthcare system called Medicare. If you're on a permanent visa, you're generally eligible. On a temporary visa, you generally need private health insurance — which is strongly recommended anyway. For emergencies, go to a public hospital's Emergency Department (free). For everything else, book a GP (General Practitioner) — most bulk-bill so you pay nothing out of pocket.",
      ko: "호주에는 Medicare라는 공공 의료 시스템이 있습니다. 영주 비자 소지자는 일반적으로 자격이 됩니다. 임시 비자 소지자는 일반적으로 민간 건강보험이 필요합니다 — 어쨌든 강력히 추천. 응급 상황엔 공공 병원의 응급실(무료)로. 그 외엔 GP(일반의) 예약 — 대부분의 GP는 bulk-bill이라 본인 부담이 없습니다.",
    },
  },
  {
    q: { en: "Do I need to speak English well to get by?", ko: "영어를 잘해야 살 수 있나요?" },
    a: {
      en: "You can get by with limited English, especially in Sydney's Korean areas (Strathfield, Chatswood, Eastwood). But life gets significantly easier with English — at the doctor, at the bank, in legal situations. Even intermediate English will open far more doors. Our Aussie English guide and the Language Exchange page are good starting points.",
      ko: "영어가 부족해도 살 수 있습니다, 특히 시드니의 한국인 밀집 지역(Strathfield, Chatswood, Eastwood)에서는. 하지만 영어가 있으면 생활이 훨씬 나아집니다 — 병원, 은행, 법적 상황에서. 중급 영어만 되어도 훨씬 많은 문이 열립니다. 호주 영어 가이드와 언어교환 페이지가 좋은 시작점이 될 수 있습니다.",
    },
  },
  {
    q: { en: "Can I drive with my Korean licence?", ko: "한국 면허로 호주에서 운전할 수 있나요?" },
    a: {
      en: "Yes, for up to 3 months. After that, you need an Australian licence. Bring your Korean licence and an official translation (from an NAATI-accredited translator) — or an International Driving Permit. Note: Australia drives on the LEFT. This is the opposite of Korea. Many drivers find this the hardest adjustment.",
      ko: "네, 최대 3개월까지 가능합니다. 그 이후에는 호주 면허가 필요합니다. 한국 면허와 공식 번역본(NAATI 인정 번역사) 또는 국제운전면허증을 지참하세요. 참고: 호주는좌측통행입니다. 한국과 정반대입니다. 많은 운전자들이 이것이 가장 힘든 적응이라고 합니다.",
    },
  },
  {
    q: { en: "What should I budget for a week in Sydney?", ko: "시드니에서 일주일 비용은 어느 정도인가요?" },
    a: {
      en: "Budget travellers: $600–$900 AUD/week (shared accommodation, self-catering, free activities). Mid-range: $1,200–$2,000/week (private room, eating out 2–3 times, some paid attractions). This excludes flights, long-term visa costs, and health insurance. Use numbeo.com for detailed cost-of-living breakdowns.",
      ko: "Budget 여행자: 주 $600–$900 AUD (셰어숙소, 직접 요리, 무료 활동 중심). 중급: 주 $1,200–$2,000 (개인 방, 주 2–3회 외식, 일부 유료 명소). 이는 항공권, 장기 비자 비용, 건강보험을 제외한 금액입니다. 생활비 상세 비교는 numbeo.com에서.",
    },
  },
  {
    q: { en: "Is it safe in Australia?", ko: "호주는 안전한가요?" },
    a: {
      en: "Generally yes. Australia is a safe country with low violent crime. Standard precautions apply — don't leave valuables visible in cars, watch your drink, be cautious at night in unfamiliar areas. The main dangers are natural: sun (UV), rips (ocean currents — swim between the flags at beaches), and wildlife (snakes and spiders exist but rarely cause serious harm if you're careful).",
      ko: "일반적으로 안전합니다. 호주는 폭력 범죄가 낮은 안전한 나라입니다. 기본적인 주의하면 됩니다 — 차 안에 귀중품을 놓지 말고, 음료에 주의를, 낯선 지역에서 밤에 조심하세요. 주요 위험은 자연적입니다: 자외선(UV), 이안류(해변에서 빨간 기단 사이에서 수영), 야생동물(뱀과 거미가 존재하지만 조심하면 심각한 해는 드뭅니다).",
    },
  },
  {
    q: { en: "How do I meet people in Australia?", ko: "호주에서 어떻게 친구를 사귀나요?" },
    a: {
      en: "Australians are generally friendly but making deep friendships takes time — showing up consistently is key. Common paths: language exchange groups (Meetup.com, Facebook groups), sports clubs (AFL, soccer, hiking groups), Korean community groups (churches, Korean restaurants, Korean Australian associations), and at work. Australian friendships often form around shared activities rather than purely social settings.",
      ko: "호주 사람들은 일반적으로 친절하지만 깊은 우정은 시간이 필요합니다 — 꾸준히 나타나는 것이 핵심. 일반적인 방법: 언어교환 모임(Meetup.com, Facebook 그룹), 스포츠 동호회(AFL, 축구, 하이킹), 한국인 커뮤니티(교회, 한국식당, 한인협회), 직장. 호주인 친구 관계는 순수한 사교보다 공유 활동 중심으로 형성되는 경향이 있습니다.",
    },
  },
];

// The three FAQs most likely to answer a first-time visitor's question.
// Surfaced beneath the experiences row on the homepage (T6).
export const topHomepageFaqs: FaqItem[] = [
  faqs[0], // visa
  faqs[2], // cost
  faqs[4], // healthcare
];

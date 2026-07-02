import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import { seoFor, withSeo } from "@/lib/seo";

export const metadata = withSeo(
  {

  ...seoFor("/experiences/food"),
  title: "Sydney Food Guide — AussieGuides",
  description: "A practical guide to Sydney's food scene — from Newtown Thai and Chinatown dumplings to fine dining, market eats, and the Sydney BYO culture.",
  },
  "/experiences/food"
);

const neighbourhoods = [
  {
    id: "newtown",
    labelEn: "Newtown — The Food Strip",
    labelKo: "뉴타운 — 먹자골목",
    img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
    descEn: "King Street is one of Sydney's best food streets — and it keeps going for over two kilometres. Expect Thai restaurants every few doors (Thai Pothong and Chat Thai are the standouts), gourmet burger joints like Mary's that smash it out of the park, legendary gelato at Cow & the Moon (winner of national gelato awards), and dozens of hole-in-the-wall cafes. It's casual, affordable, and incredibly diverse. If you're a food traveller, start here.",
    descKo: "킹 스트리트는 시드니 최고의 미식 거리 중 하나 — 2킬로미터 이상 이어집니다. 몇 걸음마다 태국 레스토랑(Thai Pothong과 Chat Thai가 단연 돋보임), Mary's 같은 수제 버거 맛집, 전국 아이스크림 대회 수상자인 Cow & the Moon의 전설적인 젤라또, 그리고 수많은 카페가 줄지어 있습니다. 캐주얼하고 합리적인 가격에 엄청나게 다양한 음식을 즐길 수 있습니다. 미식 여행자라면 여기서 시작하세요.",
    spots: [
      { en: "Thai Pothong — classic Thai, great value", ko: "Thai Pothong — 클래식 태국 요리, 훌륭한 가성비" },
      { en: "Mary's — legendary burger, no-frills vibe", ko: "Mary's — 전설적인 버거, 허세 없는 분위기" },
      { en: "Cow & the Moon — award-winning gelato", ko: "Cow & the Moon — 수상 경력의 젤라또" },
      { en: "Chat Thai — authentic, always busy", ko: "Chat Thai — 정통, 항상 북적이는" },
    ],
  },
  {
    id: "chinatown",
    labelEn: "Chinatown & Haymarket",
    labelKo: "차이나타운 & 헤이마켓",
    img: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
    descEn: "Sydney's Chinatown is compact but punchy. Din Tai Fung is the most famous stop — their xiao long bao (soup dumplings) draw queues every night. But don't stop there: Emperor's Garden BBQ does incredible roast duck and pork hanging in the window, the Dixon Street food court is a budget paradise ($10 AUD–15 feeds you well), and little bakeries sell egg tarts and pork buns fresh from the oven. The weekend Paddy's Market food stalls are a bonus — try the banh mi and fresh juice combos.",
    descKo: "시드니 차이나타운은 작지만 강력합니다. Din Tai Fung이 가장 유명한 곳 — 쉬아오롱바오(만두)는 매일 밤 줄을 잇게 만듭니다. 하지만 거기서 멈추지 마세요: Emperor's Garden BBQ는 창문에 걸린 로스트 덕과 돼지고기가 환상적이고, 딕슨 스트리트 푸드코트는 가성비 천국($10 AUD–15면 푸짐하게 먹음), 작은 빵집에서는 갓 구운 에그타르트와 찐빵을 팝니다. 주말 패디스 마켓의 포장마차도 보너스 — 반미와 신선한 주스를 꼭 드셔보세요.",
    spots: [
      { en: "Din Tai Fung — world-famous soup dumplings", ko: "Din Tai Fung — 세계적으로 유명한 만두" },
      { en: "Emperor's Garden BBQ — roast duck & pork", ko: "Emperor's Garden BBQ — 오리 구이 & 돼지고기" },
      { en: "Dixon Street food court — budget eats", ko: "딕슨 스트리트 푸드코트 — 저렴한 먹거리" },
      { en: "Paddy's Markets weekend stalls", ko: "패디스 마켓 주말 포장마차" },
    ],
  },
  {
    id: "korean-japanese",
    labelEn: "CBD Korean & Japanese",
    labelKo: "시티 한식 & 일식",
    img: "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
    descEn: "Sydney's CBD has a thriving Korean and Japanese dining scene centred around Pitt Street and Liverpool Street. Korean BBQ spots like 678 Korean BBQ (a chain from Seoul) pack in crowds with premium marinated meats grilled at your table — budget around $40 AUD–60 per person for the full experience. Mappen, a casual udon chain, is the go-to for a fast, satisfying lunch under $15 AUD. There's also Jap's Table, Yebisu, and an expanding network of Korean fried chicken joints (try Picnic or Seoul Chicken).",
    descKo: "시드니 시티에는 Pitt Street와 Liverpool Street를 중심으로 활기찬 한식 및 일식 레스토랑이 자리잡고 있습니다. 678 Korean BBQ(서울에서 온 체인) 같은 고깃집은 테이블에서 직접 구워 먹는 프리미엄 양념 고기로 인파를 모읍니다 — 풀코스로 1인당 $40 AUD–60 정도 예산. Mappen은 캐주얼 우동 체인으로 $15 AUD 이하에 빠르고 든든한 점심을 해결할 수 있습니다. Jap's Table, Yebisu 그리고 계속 늘어나는 치킨 전문점(Picnic이나 Seoul Chicken 추천)도 있습니다.",
    spots: [
      { en: "678 Korean BBQ — authentic tabletop BBQ", ko: "678 Korean BBQ — 정통 테이블 바베큐" },
      { en: "Mappen — fast, cheap udon bowls", ko: "Mappen — 빠르고 저렴한 우동" },
      { en: "Seoul Chicken — KFC (Korean Fried Chicken)", ko: "Seoul Chicken — K-치킨" },
      { en: "Jap's Table — izakaya-style Japanese", ko: "Jap's Table — 이자카야 스타일 일식" },
    ],
  },
  {
    id: "fine-dining",
    labelEn: "Fine Dining",
    labelKo: "파인 다이닝",
    img: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
    descEn: "Sydney is home to some of the world's best restaurants. Tetsuya's — a Japanese-French degustation institution — is housed in a converted chapel and offers a multi-course journey for around $250 AUD per person. Quay, with its stunning harbour view and Peter Gilmore's iconic Snow Egg dessert, has topped many 'best in Australia' lists. Other heavyweights: Aria (Opera House views), Bennelong (inside the Opera House itself), and Sixpenny in Stanmore. Book weeks — sometimes months — in advance.",
    descKo: "시드니에는 세계 최고의 레스토랑들이 있습니다. Tetsuya's — 일식과 프렌치의 융합 디구스테이션 — 개조된 예배당에 자리잡고 있으며 1인당 약 $250 AUD의 멀티코스 코스를 제공합니다. Quay는 환상적인 하버 뷰와 Peter Gilmore의 상징적인 Snow Egg 디저트로 수많은 '호주 최고' 리스트에 올랐습니다. 다른 강자들: Aria(오페라 하우스 뷰), Bennelong(오페라 하우스 내부), Sixpenny(스탠모어). 몇 주 — 때로는 몇 달 — 전에 예약해야 합니다.",
    spots: [
      { en: "Tetsuya's — legendary Japanese-French degustation", ko: "Tetsuya's — 전설적인 일식-프렌치 디구스테이션" },
      { en: "Quay — harbour views + Snow Egg dessert", ko: "Quay — 하버 뷰 + Snow Egg 디저트" },
      { en: "Bennelong — dining inside the Opera House", ko: "Bennelong — 오페라 하우스 안에서의 식사" },
      { en: "Aria — Opera House views, special occasions", ko: "Aria — 오페라 하우스 뷰, 특별한 날" },
    ],
  },
  {
    id: "markets",
    labelEn: "Markets",
    labelKo: "마켓",
    img: "https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
    descEn: "Sydney's markets are where the city's food culture really shines. Carriageworks Farmers Market (Saturdays, 8am–1pm) is a food lover's paradise: artisan cheeses, fresh-baked sourdough, seasonal fruit, ethical meats, and hot food stalls serving everything from wood-fired pizza to raw oysters. The Sydney Fish Market in Pyrmont is the largest of its kind in the Southern Hemisphere — grab a platter of fresh sashimi, grilled lobster, or fish & chips and eat by the water. Arrive before 11am for the best selection.",
    descKo: "시드니의 마켓은 이 도시의 음식 문화가 가장 빛나는 곳입니다. Carriageworks Farmers Market(토요일, 오전 8시~오후 1시)은 미식가의 천국: 수제 치즈, 갓 구운 사워도우, 제철 과일, 윤리적 육류, 그리고 장작 화덕 피자부터 생굴까지 다양한 핫푸드가 준비되어 있습니다. Pyrmont의 시드니 피시 마켓은 남반구 최대 규모 — 신선한 회, 구운 랍스터, 피시 앤 칩스를 물가에서 즐겨보세요. 오전 11시 이전에 방문해야 가장 좋은 선택을 할 수 있습니다.",
    spots: [
      { en: "Carriageworks Farmers Market — Sat 8am–1pm", ko: "Carriageworks Farmers Market — 토요일 오전 8시~오후 1시" },
      { en: "Sydney Fish Market — oysters, sashimi, lobster", ko: "시드니 피시 마켓 — 굴, 회, 랍스터" },
      { en: "Paddy's Market — budget produce & food stalls", ko: "패디스 마켓 — 저렴한 식재료 & 푸드 스탠드" },
      { en: "Orange Grove Market — Sunday organic market", ko: "오렌지 그로브 마켓 — 일요일 유기농 마켓" },
    ],
  },
];

const byoInfo = {
  titleEn: "BYO Culture — The Sydney Hack",
  titleKo: "BYO 문화 — 시드니 꿀팁",
  descEn: "Bring Your Own (BYO) is one of Sydney's best dining traditions. Many smaller restaurants — especially Thai, Italian, and Chinese spots — don't have a liquor licence, which means you can bring your own wine or beer. Corkage is usually $3 AUD–5 per person (sometimes free), compared to $15 AUD–25+ for a single glass of wine at a licensed restaurant. It's an incredible way to eat well for less. Call ahead to check if the restaurant is BYO — and if they charge corkage. Pop into a bottleshop (Dan Murphy's or BWS) on the way and grab a bottle of Hunter Valley Semillon for $15 AUD.",
  descKo: "Bring Your Own(BYO)은 시드니 최고의 다이닝 전통 중 하나입니다. 많은 작은 레스토랑 — 특히 태국, 이탈리안, 중국 식당 —은 주류 판매 면허가 없어서, 직접 와인이나 맥주를 가져갈 수 있습니다. 코르크 차지는 보통 1인당 $3 AUD–5(무료인 경우도 있음)인 반면, 면허가 있는 레스토랑에서 와인 한 잔은 $15 AUD–25+입니다. 적은 비용으로 훌륭한 식사를 즐길 수 있는 놀라운 방법입니다. 미리 전화해서 BYO 가능 여부와 코르크 차지 유무를 확인하세요. 가는 길에 Dan Murphy's나 BWS 같은 주류 판매점에 들러 헌터 밸리 세미뇽 한 병을 $15 AUD에 사가세요.",
};

const tips = [
  { en: "Book for dinner — most good restaurants fill up by Wednesday", ko: "저녁 예약은 필수 — 좋은 레스토랑은 수요일이면 자리 차있음" },
  { en: "Lunch specials are real — $15 AUD–20 gets you the same dinner meal for half price", ko: "런치 스페셜 활용 — $15 AUD–20으로 저녁 메뉴를 반값에" },
  { en: "Tipping is not required in Australia — it's not a cultural expectation", ko: "호주는 팁 문화가 아님 — 팁은 의무가 아닙니다" },
  { en: "Tapping = paying — tap your card or phone everywhere, cash is rare", ko: "카드/폰 결제 — 현금 거의 안 씀" },
  { en: "Water is free — ask for tap water, it's perfectly safe and drinkable", ko: "물은 무료 — 수돗물 요청 가능, 완전히 안전하고 마시기에 좋음" },
];

export default function SydneyFoodGuide() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1800&q=85"
          alt="Sydney cafe culture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/30" />
        <div className="absolute inset-0 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs uppercase tracking-[0.3em] mb-6 transition-colors"
          >
            ← <En>Destinations</En><Ko>여행지</Ko>
          </Link>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>Food &amp; Drink</En>
            <Ko>맛집 &amp; 음료</Ko>
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.95] mb-4">
            <En>Sydney Food Guide</En>
            <Ko>시드니 미식 가이드</Ko>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            <En>From Newtown&apos;s Thai joints to Opera House fine dining — a practical guide to eating your way through Australia&apos;s most delicious city.</En>
            <Ko>뉴타운의 태국 음식점부터 오페라 하우스 파인 다이닝까지 — 호주에서 가장 매력적인 미식 도시를 즐기는 실전 가이드.</Ko>
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">

        {/* Intro */}
        <section className="max-w-3xl reveal">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>Foreword</En>
            <Ko>서문</Ko>
          </p>
          <div className="font-serif text-xl md:text-2xl text-stone-800 dark:text-stone-200 leading-relaxed space-y-4">
            <p>
              <En>Sydney doesn&apos;t just have good restaurants — it has a real food culture. A city shaped by wave after wave of migration, where you can eat Thai on a paper plate in Newtown for $12 AUD, then turn around and book a $250 AUD degustation at a restaurant that&apos;s in a converted chapel.</En>
              <Ko>시드니에는 그냥 좋은 레스토랑이 있는 게 아니라 — 진정한 음식 문화가 있습니다. 이민의 물결이 만들어낸 도시로, 뉴타운에서 $12 AUD에 종이 접시에 담긴 태국 음식을 먹고, 다시 돌아서 개조된 예배당에서 $250 AUD 디구스테이션을 예약할 수 있는 곳입니다.</Ko>
            </p>
            <p>
              <En>This guide skips the tourist traps and focuses on the places Sydneysiders actually eat. Warning: you&apos;ll get hungry reading this.</En>
              <Ko>이 가이드는 관광객용 함정을 건너뛰고 시드니 사람들이 실제로 가는 곳에 집중합니다. 경고: 이 글을 읽다보면 배고파질 겁니다.</Ko>
            </p>
          </div>
        </section>

        {/* Neighbourhood sections */}
        {neighbourhoods.map((hood, i) => (
          <section key={hood.id} className="reveal">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
              {/* Image */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto lg:h-full min-h-[240px]">
                  <img
                    src={hood.img}
                    alt={hood.labelEn}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-2">
                  <En>{hood.labelEn}</En>
                  <Ko>{hood.labelKo}</Ko>
                </p>
                <div className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed mb-5 space-y-3">
                  <p><En>{hood.descEn}</En><Ko>{hood.descKo}</Ko></p>
                </div>

                {/* Spots */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {hood.spots.map((spot) => (
                    <div
                      key={spot.en}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border"
                    >
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-sunset mt-2" />
                      <p className="text-sm font-medium text-stone-900 dark:text-stone-100 leading-snug">
                        <En>{spot.en}</En>
                        <Ko>{spot.ko}</Ko>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* BYO Culture */}
        <section className="rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 border border-rose-100/60 dark:border-rose-900/30 p-6 md:p-8 reveal">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-rose-600 dark:text-rose-400 mb-3">
            <En>Pro tip</En>
            <Ko>프로 팁</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-3 leading-tight">
            <En>{byoInfo.titleEn}</En>
            <Ko>{byoInfo.titleKo}</Ko>
          </h2>
          <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed max-w-3xl">
            <En>{byoInfo.descEn}</En>
            <Ko>{byoInfo.descKo}</Ko>
          </p>
        </section>

        {/* Practical tips */}
        <section className="reveal">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-5">
            <En>Essential tips</En>
            <Ko>꼭 알아야 할 팁</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-6 leading-tight">
            <En>How to eat well in Sydney</En>
            <Ko>시드니에서 맛있게 먹는 법</Ko>
          </h2>
          <ul className="space-y-4">
            {tips.map((tip, i) => (
              <li
                key={tip.en}
                className={`reveal reveal-delay-${(i % 5) + 1} flex gap-4 items-start group`}
              >
                <span className="shrink-0 w-7 h-7 rounded-full bg-sunset/10 dark:bg-sunset/20 flex items-center justify-center text-sunset text-xs font-bold group-hover:scale-110 transition-transform">
                  {i + 1}
                </span>
                <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed pt-0.5">
                  <En>{tip.en}</En>
                  <Ko>{tip.ko}</Ko>
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Outro */}
        <section className="rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-8 reveal">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-3">
            <En>Bon appétit</En>
            <Ko>맛있게 드세요</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En>Sydney is waiting to feed you.</En>
            <Ko>시드니가 당신을 먹여줄 준비가 되었습니다.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed max-w-2xl">
            <En>Whether you&apos;re here for a weekend or a lifetime, Sydney&apos;s food scene will keep surprising you. The best meal you&apos;ll have is probably the one you didn&apos;t plan — a spontaneous bowl of ramen in a Chinatown basement, a Thai green curry on a Newtown street corner, or fish &amp; chips by the harbour at sunset. Get out there, try everything, and eat with your hands when appropriate.</En>
            <Ko>주말 여행이든 평생 거주든, 시드니의 미식 현장은 계속 당신을 놀라게 할 것입니다. 가장 기억에 남는 식사는 아마 계획하지 않은 곳일 겁니다 — 차이나타운 지하에서 우연히 발견한 라면 한 그릇, 뉴타운 길모퉁이의 태국 그린커리, 또는 일몰 하버 옆의 피시 앤 칩스. 밖에 나가서, 모든 걸 시도해보고, 상황이 허락한다면 손으로 드십시오.</Ko>
          </p>
        </section>
      </div>
    </div>
  );
}

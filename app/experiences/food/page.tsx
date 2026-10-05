import type { Metadata } from "next";
import { headers } from "next/headers";
import { pageMeta } from "@/lib/page-meta";
import Link from "next/link";
import { pickLocale } from "@/lib/locale";
import {En, Ja, Ko, Zh} from "@/components/LangBlocks";
import { seoFor, withSeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  // Per request, so the tab title and the search-result headline are in the reader's
  // language. The canonical and hreflang come from the root layout, which reads the same
  // header. `Metadata` is imported by every page that uses withSeo.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return withSeo({

  ...seoFor("/experiences/food"),
  title: pageMeta("/experiences/food", locale).title,
  description: pageMeta("/experiences/food", locale).description,
  },
  "/experiences/food"
);
}


const neighbourhoods = [
  {
    id: "newtown",
    labelEn: "Newtown — The Food Strip",
    labelJa: "\u30cb\u30e5\u30fc\u30bf\u30a6\u30f3 \u2014 \u30b0\u30eb\u30e1\u30b9\u30c8\u30ea\u30fc\u30c8",
    labelZh: "\u7ebd\u6566\u2014\u2014\u7f8e\u98df\u8857",
    labelKo: "뉴타운 — 먹자골목",
    img: "/images/pexels-262978.jpg",
    descEn: "King Street is one of Sydney's best food streets — and it keeps going for over two kilometres. Expect Thai restaurants every few doors (Thai Pothong and Chat Thai are the standouts), gourmet burger joints like Mary's that smash it out of the park, legendary gelato at Cow & the Moon (winner of national gelato awards), and dozens of hole-in-the-wall cafes. It's casual, affordable, and incredibly diverse. If you're a food traveller, start here.",
    descJa: "\u30ad\u30f3\u30b0\u30fb\u30b9\u30c8\u30ea\u30fc\u30c8\u306f\u30b7\u30c9\u30cb\u30fc\u5c48\u6307\u306e\u30b0\u30eb\u30e1\u30b9\u30c8\u30ea\u30fc\u30c8\u306e\u3072\u3068\u3064\u3067\u30012\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb\u4ee5\u4e0a\u7d9a\u304d\u307e\u3059\u3002\u6570\u8ed2\u3054\u3068\u306b\u30bf\u30a4\u6599\u7406\u5e97\u304c\u3042\u308a\uff08Thai Pothong\u3068Chat Thai\u304c\u7279\u306b\u6709\u540d\uff09\u3001Mary's\u306e\u3088\u3046\u306a\u6587\u53e5\u306a\u3057\u306b\u304a\u3044\u3057\u3044\u30b0\u30eb\u30e1\u30d0\u30fc\u30ac\u30fc\u5e97\u3001\u5168\u56fd\u30b8\u30a7\u30e9\u30fc\u30c8\u8cde\u3092\u53d7\u8cde\u3057\u305fCow & the Moon\u306e\u4f1d\u8aac\u306e\u30b8\u30a7\u30e9\u30fc\u30c8\u3001\u305d\u3057\u3066\u5c0f\u3055\u306a\u30ab\u30d5\u30a7\u304c\u6570\u5341\u8ed2\u4e26\u3073\u307e\u3059\u3002\u30ab\u30b8\u30e5\u30a2\u30eb\u3067\u624b\u9803\u3001\u305d\u3057\u3066\u9a5a\u304f\u307b\u3069\u591a\u69d8\u3067\u3059\u3002\u98df\u306e\u65c5\u3092\u3059\u308b\u306a\u3089\u3001\u3053\u3053\u304b\u3089\u59cb\u3081\u307e\u3057\u3087\u3046\u3002",
    descZh: "\u56fd\u738b\u8857\u662f\u6089\u5c3c\u6700\u597d\u7684\u7f8e\u98df\u8857\u4e4b\u4e00\u2014\u2014\u800c\u4e14\u7ef5\u5ef6\u4e24\u516c\u91cc\u591a\u3002\u6bcf\u9694\u51e0\u5bb6\u5e97\u5c31\u6709\u4e00\u5bb6\u6cf0\u5f0f\u9910\u5385\uff08Thai Pothong \u548c Chat Thai \u6700\u51fa\u6311\uff09\uff0c\u8fd8\u6709 Mary's \u8fd9\u6837\u628a\u6c49\u5821\u505a\u5230\u6781\u81f4\u7684\u7cbe\u54c1\u6c49\u5821\u5e97\u3001Cow & the Moon \u7684\u4f20\u5947\u610f\u5f0f\u51b0\u6dc7\u6dcb\uff08\u5168\u56fd\u51b0\u6dc7\u6dcb\u5927\u5956\u5f97\u4e3b\uff09\uff0c\u4ee5\u53ca\u51e0\u5341\u5bb6\u85cf\u5728\u8857\u8fb9\u7684\u5c0f\u5496\u5561\u9986\u3002\u8fd9\u91cc\u968f\u6027\u3001\u5b9e\u60e0\uff0c\u800c\u4e14\u591a\u5143\u5f97\u60ca\u4eba\u3002\u5982\u679c\u4f60\u662f\u7f8e\u98df\u65c5\u884c\u8005\uff0c\u5c31\u4ece\u8fd9\u91cc\u5f00\u59cb\u5427\u3002",
    descKo: "킹 스트리트는 시드니 최고의 미식 거리 중 하나 — 2킬로미터 이상 이어집니다. 몇 걸음마다 태국 레스토랑(Thai Pothong과 Chat Thai가 단연 돋보임), Mary's 같은 수제 버거 맛집, 전국 아이스크림 대회 수상자인 Cow & the Moon의 전설적인 젤라또, 그리고 수많은 카페가 줄지어 있습니다. 캐주얼하고 합리적인 가격에 엄청나게 다양한 음식을 즐길 수 있습니다. 미식 여행자라면 여기서 시작하세요.",
    spots: [
      { en: "Thai Pothong — classic Thai, great value", ja: "Thai Pothong — 定番タイ料理、コスパ抜群", zh: "Thai Pothong——经典泰国菜，超值", ko: "Thai Pothong — 클래식 태국 요리, 훌륭한 가성비" },
      { en: "Mary's — legendary burger, no-frills vibe", ja: "Mary's — 伝説のバーガー、飾らない雰囲気", zh: "Mary's——传奇汉堡，随性氛围", ko: "Mary's — 전설적인 버거, 허세 없는 분위기" },
      { en: "Cow & the Moon — award-winning gelato", ja: "Cow & the Moon — 受賞歴のあるジェラート", zh: "Cow & the Moon——获奖意式冰淇淋", ko: "Cow & the Moon — 수상 경력의 젤라또" },
      { en: "Chat Thai — authentic, always busy", ja: "Chat Thai — 本格的、いつも賑わう", zh: "Chat Thai——地道，总是顾客盈门", ko: "Chat Thai — 정통, 항상 북적이는" },
    ],
  },
  {
    id: "chinatown",
    labelEn: "Chinatown & Haymarket",
    labelJa: "\u30c1\u30e3\u30a4\u30ca\u30bf\u30a6\u30f3\u3068\u30d8\u30a4\u30de\u30fc\u30b1\u30c3\u30c8",
    labelZh: "\u5510\u4eba\u8857\u4e0e Haymarket",
    labelKo: "차이나타운 & 헤이마켓",
    img: "/images/chinatown_dixon_street.jpg",
    descEn: "Sydney's Chinatown is compact but punchy. Din Tai Fung is the most famous stop — their xiao long bao (soup dumplings) draw queues every night. But don't stop there: Emperor's Garden BBQ does incredible roast duck and pork hanging in the window, the Dixon Street food court is a budget paradise ($10 AUD–15 feeds you well), and little bakeries sell egg tarts and pork buns fresh from the oven. The weekend Paddy's Market food stalls are a bonus — try the banh mi and fresh juice combos.",
    descJa: "\u30b7\u30c9\u30cb\u30fc\u306e\u30c1\u30e3\u30a4\u30ca\u30bf\u30a6\u30f3\u306f\u30b3\u30f3\u30d1\u30af\u30c8\u306a\u304c\u3089\u6fc3\u5bc6\u3067\u3059\u3002\u6700\u3082\u6709\u540d\u306a\u306e\u306fDin Tai Fung \u2014 \u5c0f\u7c60\u5305\uff08\u30b9\u30fc\u30d7\u5165\u308a\u9903\u5b50\uff09\u306b\u306f\u6bce\u6669\u884c\u5217\u304c\u3067\u304d\u307e\u3059\u3002\u3067\u3082\u305d\u3053\u3067\u7d42\u308f\u3089\u305b\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002Emperor's Garden BBQ\u306f\u7a93\u306b\u540a\u308b\u3057\u305f\u898b\u4e8b\u306a\u30ed\u30fc\u30b9\u30c8\u30c0\u30c3\u30af\u3068\u30dd\u30fc\u30af\u304c\u540d\u7269\u3001Dixon Street\u306e\u30d5\u30fc\u30c9\u30b3\u30fc\u30c8\u306f\u4e88\u7b97\u306e\u5929\u56fd\uff08$10\u301c15 AUD\u3067\u3057\u3063\u304b\u308a\u98df\u3079\u3089\u308c\u307e\u3059\uff09\u3001\u5c0f\u3055\u306a\u30d9\u30fc\u30ab\u30ea\u30fc\u3067\u306f\u713c\u304d\u305f\u3066\u306e\u30a8\u30c3\u30b0\u30bf\u30eb\u30c8\u3068\u30dd\u30fc\u30af\u30d1\u30f3\u30ba\u304c\u58f2\u3089\u308c\u3066\u3044\u307e\u3059\u3002\u9031\u672b\u306ePaddy's Market\u306e\u5c4b\u53f0\u306f\u304a\u307e\u3051 \u2014 \u30d0\u30a4\u30f3\u30df\u30fc\u3068\u30d5\u30ec\u30c3\u30b7\u30e5\u30b8\u30e5\u30fc\u30b9\u306e\u7d44\u307f\u5408\u308f\u305b\u3092\u8a66\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002",
    descZh: "\u6089\u5c3c\u7684\u5510\u4eba\u8857\u4e0d\u5927\uff0c\u4f46\u5f88\u6709\u52b2\u3002\u9f0e\u6cf0\u4e30\u662f\u6700\u6709\u540d\u7684\u6253\u5361\u70b9\u2014\u2014\u4ed6\u4eec\u7684\u5c0f\u7b3c\u5305\uff08\u6c64\u5305\uff09\u6bcf\u665a\u90fd\u6392\u957f\u961f\u3002\u4f46\u522b\u53ea\u53bb\u8fd9\u4e00\u5bb6\uff1aEmperor's Garden BBQ \u7684\u70e7\u9e2d\u548c\u6302\u5728\u6a71\u7a97\u91cc\u7684\u70e7\u8089\u90fd\u5f88\u68d2\uff0cDixon Street \u7f8e\u98df\u5e7f\u573a\u662f\u5e73\u4ef7\u5929\u5802\uff08$10\u201315 AUD \u5c31\u80fd\u5403\u5f97\u5f88\u597d\uff09\uff0c\u5c0f\u70d8\u7119\u5e97\u5356\u7684\u86cb\u631e\u548c\u53c9\u70e7\u5305\u90fd\u662f\u521a\u51fa\u7089\u7684\u3002\u5468\u672b Paddy's Market \u7684\u5c0f\u5403\u644a\u66f4\u662f\u52a0\u5206\u2014\u2014\u8bd5\u8bd5\u8d8a\u5f0f\u6cd5\u68cd\u548c\u9c9c\u69a8\u679c\u6c41\u7684\u7ec4\u5408\u3002",
    descKo: "시드니 차이나타운은 작지만 강력합니다. Din Tai Fung이 가장 유명한 곳 — 샤오룽바오(만두)는 매일 밤 줄을 잇게 만듭니다. 하지만 거기서 멈추지 마세요: Emperor's Garden BBQ는 창문에 걸린 로스트 덕과 돼지고기가 환상적이고, 딕슨 스트리트 푸드코트는 가성비 천국($10 AUD–15면 푸짐하게 먹음), 작은 빵집에서는 갓 구운 에그타르트와 찐빵을 팝니다. 주말 패디스 마켓의 포장마차도 보너스 — 반미와 신선한 주스를 꼭 드셔보세요.",
    spots: [
      { en: "Din Tai Fung — world-famous soup dumplings", ja: "Din Tai Fung — 世界的に有名な小籠包", zh: "鼎泰丰——闻名世界的小笼包", ko: "Din Tai Fung — 세계적으로 유명한 만두" },
      { en: "Emperor's Garden BBQ — roast duck & pork", ja: "Emperor's Garden BBQ — ローストダック＆ポーク", zh: "Emperor's Garden BBQ——烧鸭和烧肉", ko: "Emperor's Garden BBQ — 오리 구이 & 돼지고기" },
      { en: "Dixon Street food court — budget eats", ja: "ディクソン・ストリート・フードコート — 安く食べられる", zh: "Dixon Street美食广场——平价美食", ko: "딕슨 스트리트 푸드코트 — 저렴한 먹거리" },
      { en: "Paddy's Markets weekend stalls", ja: "パディーズ・マーケットの週末屋台", zh: "帕迪市场周末摊位", ko: "패디스 마켓 주말 포장마차" },
    ],
  },
  {
    id: "korean-japanese",
    labelEn: "CBD Korean & Japanese",
    labelJa: "CBD\u306e\u97d3\u56fd\u6599\u7406\u3068\u65e5\u672c\u6599\u7406",
    labelZh: "\u5e02\u4e2d\u5fc3\u97e9\u9910\u4e0e\u65e5\u6599",
    labelKo: "시티 한식 & 일식",
    img: "/images/korean_japanese_udon.jpg",
    descEn: "Sydney's CBD has a thriving Korean and Japanese dining scene centred around Pitt Street and Liverpool Street. Korean BBQ spots like 678 Korean BBQ (a chain from Seoul) pack in crowds with premium marinated meats grilled at your table — budget around $40 AUD–60 per person for the full experience. Mappen, a casual udon chain, is the go-to for a fast, satisfying lunch under $15 AUD. There's also Jap's Table, Yebisu, and an expanding network of Korean fried chicken joints (try Picnic or Seoul Chicken).",
    descJa: "\u30b7\u30c9\u30cb\u30fc\u306eCBD\u306b\u306f\u3001\u30d4\u30c3\u30c8\u30fb\u30b9\u30c8\u30ea\u30fc\u30c8\u3068\u30ea\u30d0\u30d7\u30fc\u30eb\u30fb\u30b9\u30c8\u30ea\u30fc\u30c8\u3092\u4e2d\u5fc3\u306b\u3001\u97d3\u56fd\u6599\u7406\u3068\u65e5\u672c\u6599\u7406\u306e\u6d3b\u6c17\u3042\u308b\u5916\u98df\u30b7\u30fc\u30f3\u304c\u3042\u308a\u307e\u3059\u3002678 Korean BBQ\uff08\u30bd\u30a6\u30eb\u767a\u306e\u30c1\u30a7\u30fc\u30f3\uff09\u306e\u3088\u3046\u306a\u97d3\u56fdBBQ\u5e97\u306f\u3001\u5353\u4e0a\u3067\u713c\u304f\u4e0a\u8cea\u306a\u6f2c\u3051\u8fbc\u307f\u8089\u3067\u4eba\u6c17\u3092\u96c6\u3081\u3066\u3044\u307e\u3059 \u2014 \u30d5\u30eb\u306b\u697d\u3057\u3080\u306a\u3089\u4e00\u4eba\u3042\u305f\u308a$40\u301c60 AUD\u304c\u76ee\u5b89\u3067\u3059\u3002\u30ab\u30b8\u30e5\u30a2\u30eb\u306a\u3046\u3069\u3093\u30c1\u30a7\u30fc\u30f3\u306eMappen\u306f\u3001$15 AUD\u4ee5\u4e0b\u3067\u624b\u65e9\u304f\u6e80\u8db3\u3067\u304d\u308b\u30e9\u30f3\u30c1\u306e\u5b9a\u756a\u3002\u307b\u304b\u306b\u3082Jap's Table\u3001Yebisu\u3001\u305d\u3057\u3066\u5897\u3048\u7d9a\u3051\u308b\u97d3\u56fd\u30d5\u30e9\u30a4\u30c9\u30c1\u30ad\u30f3\u5e97\uff08Picnic\u3084Seoul Chicken\u3092\u8a66\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\uff09\u3002",
    descZh: "\u6089\u5c3c\u5e02\u4e2d\u5fc3\u7684\u97e9\u9910\u548c\u65e5\u6599\u96c6\u4e2d\u5728 Pitt Street \u548c Liverpool Street \u4e00\u5e26\uff0c\u975e\u5e38\u5174\u65fa\u3002\u50cf 678 Korean BBQ\uff08\u6765\u81ea\u9996\u5c14\u7684\u8fde\u9501\u5e97\uff09\u8fd9\u6837\u7684\u97e9\u5f0f\u70e4\u8089\u5e97\uff0c\u9760\u5728\u684c\u8fb9\u73b0\u70e4\u4f18\u8d28\u814c\u8089\u5438\u5f15\u5927\u6279\u98df\u5ba2\u2014\u2014\u5b8c\u6574\u4f53\u9a8c\u4eba\u5747\u9884\u7b97\u7ea6 $40\u201360 AUD\u3002Mappen \u662f\u4e00\u5bb6\u4f11\u95f2\u4e4c\u51ac\u9762\u8fde\u9501\u5e97\uff0c\u662f $15 AUD \u4ee5\u4e0b\u5feb\u901f\u53c8\u6ee1\u8db3\u7684\u5348\u9910\u9996\u9009\u3002\u6b64\u5916\u8fd8\u6709 Jap's Table\u3001Yebisu\uff0c\u4ee5\u53ca\u4e0d\u65ad\u6269\u5f20\u7684\u97e9\u5f0f\u70b8\u9e21\u5e97\uff08\u53ef\u4ee5\u8bd5\u8bd5 Picnic \u6216 Seoul Chicken\uff09\u3002",
    descKo: "시드니 시티에는 Pitt Street와 Liverpool Street를 중심으로 활기찬 한식 및 일식 레스토랑이 자리잡고 있습니다. 678 Korean BBQ(서울에서 온 체인) 같은 고깃집은 테이블에서 직접 구워 먹는 프리미엄 양념 고기로 인파를 모읍니다 — 풀코스로 1인당 $40 AUD–60 정도 예산. Mappen은 캐주얼 우동 체인으로 $15 AUD 이하에 빠르고 든든한 점심을 해결할 수 있습니다. Jap's Table, Yebisu 그리고 계속 늘어나는 치킨 전문점(Picnic이나 Seoul Chicken 추천)도 있습니다.",
    spots: [
      { en: "678 Korean BBQ — authentic tabletop BBQ", ja: "678 Korean BBQ — 本格的なテーブル焼肉", zh: "678韩式烤肉——正宗桌边烤肉", ko: "678 Korean BBQ — 정통 테이블 바베큐" },
      { en: "Mappen — fast, cheap udon bowls", ja: "Mappen — 早くて安いうどん", zh: "Mappen——快速实惠的乌冬面", ko: "Mappen — 빠르고 저렴한 우동" },
      { en: "Seoul Chicken — KFC (Korean Fried Chicken)", ja: "Seoul Chicken — KFC（韓国フライドチキン）", zh: "Seoul Chicken——韩式炸鸡（KFC）", ko: "Seoul Chicken — K-치킨" },
      { en: "Jap's Table — izakaya-style Japanese", ja: "Jap's Table — 居酒屋スタイルの和食", zh: "Jap's Table——居酒屋风格的日料", ko: "Jap's Table — 이자카야 스타일 일식" },
    ],
  },
  {
    id: "fine-dining",
    labelEn: "Fine Dining",
    labelJa: "\u30d5\u30a1\u30a4\u30f3\u30c0\u30a4\u30cb\u30f3\u30b0",
    labelZh: "\u9ad8\u7ea7\u9910\u5385",
    labelKo: "파인 다이닝",
    img: "/images/fine_dining_dish.jpg",
    descEn: "Sydney is home to some of the world's best restaurants. Tetsuya's — a Japanese-French degustation institution — is housed in a converted chapel and offers a multi-course journey for around $250 AUD per person. Quay, with its stunning harbour view and Peter Gilmore's iconic Snow Egg dessert, has topped many 'best in Australia' lists. Other heavyweights: Aria (Opera House views), Bennelong (inside the Opera House itself), and Sixpenny in Stanmore. Book weeks — sometimes months — in advance.",
    descJa: "\u30b7\u30c9\u30cb\u30fc\u306b\u306f\u4e16\u754c\u6700\u9ad8\u5cf0\u306e\u30ec\u30b9\u30c8\u30e9\u30f3\u304c\u3044\u304f\u3064\u3082\u3042\u308a\u307e\u3059\u3002\u548c\u4ecf\u306e\u30c7\u30ae\u30e5\u30b9\u30bf\u30b7\u30aa\u30f3\u306e\u540d\u5e97Tetsuya's\u306f\u3001\u793c\u62dd\u5802\u3092\u6539\u88c5\u3057\u305f\u5efa\u7269\u3067\u3001\u4e00\u4eba\u3042\u305f\u308a\u7d04$250 AUD\u306e\u591a\u76bf\u30b3\u30fc\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u7d20\u6674\u3089\u3057\u3044\u6e2f\u306e\u773a\u3081\u3068\u30d4\u30fc\u30bf\u30fc\u30fb\u30ae\u30eb\u30e2\u30a2\u306e\u540d\u7269\u30c7\u30b6\u30fc\u30c8\u300c\u30b9\u30ce\u30fc\u30a8\u30c3\u30b0\u300d\u3067\u77e5\u3089\u308c\u308bQuay\u306f\u3001\u591a\u304f\u306e\u300c\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u30fb\u30d9\u30b9\u30c8\u300d\u30ea\u30b9\u30c8\u306e\u4e0a\u4f4d\u306b\u8f1d\u3044\u3066\u304d\u307e\u3057\u305f\u3002\u307b\u304b\u306e\u5b9f\u529b\u5e97\u306f\u3001Aria\uff08\u30aa\u30da\u30e9\u30cf\u30a6\u30b9\u306e\u773a\u3081\uff09\u3001Bennelong\uff08\u30aa\u30da\u30e9\u30cf\u30a6\u30b9\u5185\uff09\u3001\u30b9\u30bf\u30f3\u30e2\u30a2\u306eSixpenny\u3002\u6570\u9031\u9593 \u2014 \u6642\u306b\u306f\u6570\u304b\u6708 \u2014 \u524d\u306b\u4e88\u7d04\u3057\u307e\u3057\u3087\u3046\u3002",
    descZh: "\u6089\u5c3c\u62e5\u6709\u4e00\u4e9b\u4e16\u754c\u9876\u7ea7\u7684\u9910\u5385\u3002Tetsuya's\u2014\u2014\u65e5\u6cd5\u878d\u5408\u7684\u54c1\u9274\u5957\u9910\u540d\u5e97\u2014\u2014\u5750\u843d\u5728\u4e00\u5ea7\u6539\u5efa\u7684\u6559\u5802\u91cc\uff0c\u63d0\u4f9b\u591a\u9053\u5f0f\u7528\u9910\u4f53\u9a8c\uff0c\u4eba\u5747\u7ea6 $250 AUD\u3002Quay \u62e5\u6709\u8ff7\u4eba\u7684\u6d77\u6e2f\u666f\u89c2\u548c Peter Gilmore \u6807\u5fd7\u6027\u7684\u300c\u96ea\u86cb\u300d\u751c\u70b9\uff0c\u591a\u6b21\u767b\u4e0a\u300c\u6fb3\u5927\u5229\u4e9a\u6700\u4f73\u9910\u5385\u300d\u699c\u5355\u3002\u5176\u4ed6\u91cd\u91cf\u7ea7\u9910\u5385\u8fd8\u6709\uff1aAria\uff08\u53ef\u770b\u6b4c\u5267\u9662\u666f\u89c2\uff09\u3001Bennelong\uff08\u5c31\u5728\u6b4c\u5267\u9662\u5185\u90e8\uff09\u3001\u4ee5\u53ca Stanmore \u7684 Sixpenny\u3002\u8bf7\u63d0\u524d\u6570\u5468\u2014\u2014\u6709\u65f6\u751a\u81f3\u6570\u6708\u2014\u2014\u9884\u8ba2\u3002",
    descKo: "시드니에는 세계 최고의 레스토랑들이 있습니다. Tetsuya's — 일식과 프렌치의 융합 디구스테이션 — 개조된 예배당에 자리잡고 있으며 1인당 약 $250 AUD의 멀티코스 코스를 제공합니다. Quay는 환상적인 하버 뷰와 Peter Gilmore의 상징적인 Snow Egg 디저트로 수많은 '호주 최고' 리스트에 올랐습니다. 다른 강자들: Aria(오페라 하우스 뷰), Bennelong(오페라 하우스 내부), Sixpenny(스탠모어). 몇 주 — 때로는 몇 달 — 전에 예약해야 합니다.",
    spots: [
      { en: "Tetsuya's — legendary Japanese-French degustation", ja: "Tetsuya's — 伝説の日仏デギュスタシオン", zh: "Tetsuya's——传奇的日法品鉴套餐", ko: "Tetsuya's — 전설적인 일식-프렌치 디구스테이션" },
      { en: "Quay — harbour views + Snow Egg dessert", ja: "Quay — ハーバービュー＋Snow Eggデザート", zh: "Quay——海港景观＋雪蛋甜品", ko: "Quay — 하버 뷰 + Snow Egg 디저트" },
      { en: "Bennelong — dining inside the Opera House", ja: "Bennelong — オペラハウス内でのダイニング", zh: "Bennelong——在歌剧院内用餐", ko: "Bennelong — 오페라 하우스 안에서의 식사" },
      { en: "Aria — Opera House views, special occasions", ja: "Aria — オペラハウスの眺め、特別な日に", zh: "Aria——歌剧院景观，适合特殊场合", ko: "Aria — 오페라 하우스 뷰, 특별한 날" },
    ],
  },
  {
    id: "markets",
    labelEn: "Markets",
    labelJa: "\u5e02\u5834",
    labelZh: "\u5e02\u96c6",
    labelKo: "마켓",
    img: "/images/pexels-1391487.jpg",
    descEn: "Sydney's markets are where the city's food culture really shines. Carriageworks Farmers Market (Saturdays, 8am–1pm) is a food lover's paradise: artisan cheeses, fresh-baked sourdough, seasonal fruit, ethical meats, and hot food stalls serving everything from wood-fired pizza to raw oysters. The Sydney Fish Market in Pyrmont is the largest of its kind in the Southern Hemisphere — grab a platter of fresh sashimi, grilled lobster, or fish & chips and eat by the water. Arrive before 11am for the best selection.",
    descJa: "\u30b7\u30c9\u30cb\u30fc\u306e\u5e02\u5834\u306f\u3001\u3053\u306e\u8857\u306e\u98df\u6587\u5316\u304c\u672c\u5f53\u306b\u8f1d\u304f\u5834\u6240\u3067\u3059\u3002Carriageworks Farmers Market\uff08\u571f\u66dc8\u6642\u301c13\u6642\uff09\u306f\u98df\u901a\u306e\u697d\u5712 \u2014 \u8077\u4eba\u306e\u30c1\u30fc\u30ba\u3001\u713c\u304d\u305f\u3066\u306e\u30b5\u30ef\u30fc\u30c9\u30a6\u3001\u65ec\u306e\u679c\u7269\u3001\u502b\u7406\u7684\u306a\u8089\u3001\u305d\u3057\u3066\u85aa\u7aaf\u30d4\u30b6\u304b\u3089\u751f\u7261\u8823\u307e\u3067\u51fa\u3059\u30db\u30c3\u30c8\u30d5\u30fc\u30c9\u306e\u5c4b\u53f0\u304c\u4e26\u3073\u307e\u3059\u3002\u30d4\u30e9\u30e2\u30f3\u30c8\u306eSydney Fish Market\u306f\u5357\u534a\u7403\u6700\u5927\u306e\u6c34\u7523\u5e02\u5834 \u2014 \u65b0\u9bae\u306a\u523a\u8eab\u3001\u713c\u304d\u30ed\u30d6\u30b9\u30bf\u30fc\u3001\u30d5\u30a3\u30c3\u30b7\u30e5\uff06\u30c1\u30c3\u30d7\u30b9\u306e\u76db\u308a\u5408\u308f\u305b\u3092\u8cb7\u3063\u3066\u3001\u6c34\u8fba\u3067\u98df\u3079\u307e\u3057\u3087\u3046\u3002\u6700\u9ad8\u306e\u54c1\u63c3\u3048\u3092\u6c42\u3081\u308b\u306a\u308911\u6642\u524d\u306b\u7740\u304d\u307e\u3057\u3087\u3046\u3002",
    descZh: "\u6089\u5c3c\u7684\u5e02\u96c6\u6700\u80fd\u4f53\u73b0\u8fd9\u5ea7\u57ce\u5e02\u7684\u996e\u98df\u6587\u5316\u3002Carriageworks \u519c\u592b\u5e02\u96c6\uff08\u5468\u516d 8am\u20131pm\uff09\u662f\u7f8e\u98df\u7231\u597d\u8005\u7684\u5929\u5802\uff1a\u624b\u5de5\u5976\u916a\u3001\u65b0\u9c9c\u51fa\u7089\u7684\u9178\u79cd\u9762\u5305\u3001\u65f6\u4ee4\u6c34\u679c\u3001\u4eba\u9053\u9972\u517b\u7684\u8089\u7c7b\uff0c\u8fd8\u6709\u4ece\u67f4\u706b\u62ab\u8428\u5230\u751f\u869d\u5e94\u6709\u5c3d\u6709\u7684\u70ed\u98df\u644a\u3002\u4f4d\u4e8e Pyrmont \u7684\u6089\u5c3c\u9c7c\u5e02\u573a\u662f\u5357\u534a\u7403\u540c\u7c7b\u5e02\u573a\u4e2d\u6700\u5927\u7684\u2014\u2014\u4e70\u4e00\u76d8\u65b0\u9c9c\u523a\u8eab\u3001\u70e4\u9f99\u867e\u6216\u70b8\u9c7c\u85af\u6761\uff0c\u5750\u5728\u6c34\u8fb9\u5403\u3002\u60f3\u6311\u5230\u6700\u597d\u7684\uff0c11am \u4e4b\u524d\u5230\u3002",
    descKo: "시드니의 마켓은 이 도시의 음식 문화가 가장 빛나는 곳입니다. Carriageworks Farmers Market(토요일, 오전 8시~오후 1시)은 미식가의 천국: 수제 치즈, 갓 구운 사워도우, 제철 과일, 윤리적 육류, 그리고 장작 화덕 피자부터 생굴까지 다양한 핫푸드가 준비되어 있습니다. Pyrmont의 시드니 피시 마켓은 남반구 최대 규모 — 신선한 회, 구운 랍스터, 피시 앤 칩스를 물가에서 즐겨보세요. 오전 11시 이전에 방문해야 가장 좋은 선택을 할 수 있습니다.",
    spots: [
      { en: "Carriageworks Farmers Market — Sat 8am–1pm", ja: "Carriageworks Farmers Market — 土曜 午前8時〜午後1時", zh: "Carriageworks农夫市集——周六上午8点至下午1点", ko: "Carriageworks Farmers Market — 토요일 오전 8시~오후 1시" },
      { en: "Sydney Fish Market — oysters, sashimi, lobster", ja: "シドニー・フィッシュ・マーケット — 牡蠣、刺身、ロブスター", zh: "悉尼鱼市场——生蚝、刺身、龙虾", ko: "시드니 피시 마켓 — 굴, 회, 랍스터" },
      { en: "Paddy's Market — budget produce & food stalls", ja: "パディーズ・マーケット — 安い食材＆フードスタンド", zh: "帕迪市场——平价食材和美食摊位", ko: "패디스 마켓 — 저렴한 식재료 & 푸드 스탠드" },
      { en: "Orange Grove Market — Sunday organic market", ja: "Orange Grove Market — 日曜のオーガニックマーケット", zh: "Orange Grove Market——周日有机市集", ko: "오렌지 그로브 마켓 — 일요일 유기농 마켓" },
    ],
  },
];

const byoInfo = {
  titleEn: "BYO Culture — The Sydney Hack",
  titleJa: "BYO\u6587\u5316 \u2014 \u30b7\u30c9\u30cb\u30fc\u306e\u88cf\u30ef\u30b6",
  titleZh: "BYO \u6587\u5316\u2014\u2014\u6089\u5c3c\u5999\u62db",
  titleKo: "BYO 문화 — 시드니 꿀팁",
  descEn: "Bring Your Own (BYO) is one of Sydney's best dining traditions. Many smaller restaurants — especially Thai, Italian, and Chinese spots — don't have a liquor licence, which means you can bring your own wine or beer. Corkage is usually $3 AUD–5 per person (sometimes free), compared to $15 AUD–25+ for a single glass of wine at a licensed restaurant. It's an incredible way to eat well for less. Call ahead to check if the restaurant is BYO — and if they charge corkage. Pop into a bottleshop (Dan Murphy's or BWS) on the way and grab a bottle of Hunter Valley Semillon for $15 AUD.",
  descJa: "Bring Your Own\uff08BYO\uff09\u306f\u3001\u30b7\u30c9\u30cb\u30fc\u6700\u9ad8\u306e\u98df\u306e\u4f1d\u7d71\u306e\u4e00\u3064\u3067\u3059\u3002\u591a\u304f\u306e\u5c0f\u3055\u306a\u30ec\u30b9\u30c8\u30e9\u30f3 \u2014 \u7279\u306b\u30bf\u30a4\u6599\u7406\u3001\u30a4\u30bf\u30ea\u30a2\u30f3\u3001\u4e2d\u83ef \u2014 \u306f\u9152\u985e\u514d\u8a31\u3092\u6301\u305f\u306a\u3044\u305f\u3081\u3001\u30ef\u30a4\u30f3\u3084\u30d3\u30fc\u30eb\u3092\u6301\u3061\u8fbc\u3081\u307e\u3059\u3002\u30b3\u30eb\u30b1\u30fc\u30b8\uff08\u6301\u3061\u8fbc\u307f\u6599\uff09\u306f\u901a\u5e38\u4e00\u4eba$3\u301c5 AUD\uff08\u7121\u6599\u306e\u3053\u3068\u3082\uff09\u3001\u514d\u8a31\u306e\u3042\u308b\u5e97\u3067\u30ef\u30a4\u30f31\u676f\u304c$15\u301c25 AUD\u4ee5\u4e0a\u306a\u306e\u3068\u6bd4\u3079\u308c\u3070\u683c\u5b89\u3067\u3059\u3002\u5b89\u304f\u304a\u3044\u3057\u304f\u98df\u3079\u308b\u7d20\u6674\u3089\u3057\u3044\u65b9\u6cd5\u3067\u3059\u3002\u305d\u306e\u5e97\u304cBYO\u304b\u3069\u3046\u304b\u3001\u6301\u3061\u8fbc\u307f\u6599\u3092\u53d6\u308b\u304b\u306f\u96fb\u8a71\u3067\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002\u884c\u304d\u304c\u3051\u306b\u30dc\u30c8\u30eb\u30b7\u30e7\u30c3\u30d7\uff08Dan Murphy's\u304bBWS\uff09\u306b\u5bc4\u3063\u3066\u3001\u30cf\u30f3\u30bf\u30fc\u30fb\u30d0\u30ec\u30fc\u306e\u30bb\u30df\u30e8\u30f3\u3092$15 AUD\u3067\u8cb7\u3044\u307e\u3057\u3087\u3046\u3002",
  descZh: "\u81ea\u5e26\u9152\u6c34\uff08BYO\uff09\u662f\u6089\u5c3c\u6700\u597d\u7684\u7528\u9910\u4f20\u7edf\u4e4b\u4e00\u3002\u8bb8\u591a\u5c0f\u9910\u9986\u2014\u2014\u5c24\u5176\u662f\u6cf0\u9910\u3001\u610f\u5927\u5229\u9910\u548c\u4e2d\u9910\u9986\u2014\u2014\u6ca1\u6709\u9152\u724c\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u81ea\u5e26\u8461\u8404\u9152\u6216\u5564\u9152\u3002\u5f00\u74f6\u8d39\u901a\u5e38\u662f\u6bcf\u4eba $3\u20135 AUD\uff08\u6709\u65f6\u514d\u8d39\uff09\uff0c\u76f8\u6bd4\u4e4b\u4e0b\u5728\u6709\u9152\u724c\u7684\u9910\u5385\u5355\u70b9\u4e00\u676f\u8461\u8404\u9152\u8981 $15\u201325+ AUD\u3002\u8fd9\u662f\u82b1\u66f4\u5c11\u7684\u94b1\u5403\u5f97\u597d\u7684\u4e00\u79cd\u7edd\u5999\u65b9\u5f0f\u3002\u63d0\u524d\u6253\u7535\u8bdd\u786e\u8ba4\u9910\u5385\u662f\u5426 BYO\u2014\u2014\u4ee5\u53ca\u662f\u5426\u6536\u5f00\u74f6\u8d39\u3002\u987a\u8def\u53bb\u4e00\u8d9f\u9152\u7c7b\u4e13\u5356\u5e97\uff08Dan Murphy's \u6216 BWS\uff09\uff0c\u82b1 $15 AUD \u4e70\u4e00\u74f6\u730e\u4eba\u8c37\u8d5b\u7f8e\u84c9\u3002",
  descKo: "Bring Your Own(BYO)은 시드니 최고의 다이닝 전통 중 하나입니다. 많은 작은 레스토랑 — 특히 태국, 이탈리안, 중국 식당 —은 주류 판매 면허가 없어서, 직접 와인이나 맥주를 가져갈 수 있습니다. 코르크 차지는 보통 1인당 $3 AUD–5(무료인 경우도 있음)인 반면, 면허가 있는 레스토랑에서 와인 한 잔은 $15 AUD–25+입니다. 적은 비용으로 훌륭한 식사를 즐길 수 있는 놀라운 방법입니다. 미리 전화해서 BYO 가능 여부와 코르크 차지 유무를 확인하세요. 가는 길에 Dan Murphy's나 BWS 같은 주류 판매점에 들러 헌터 밸리 세미뇽 한 병을 $15 AUD에 사가세요.",
};

const tips = [
  { en: "Book for dinner — most good restaurants fill up by Wednesday", ja: "ディナーは予約を — 良いレストランの多くは水曜日までに満席になります", zh: "晚餐请预订——大多数好餐厅到周三就订满了", ko: "저녁 예약은 필수 — 좋은 레스토랑은 수요일이면 자리 차있음" },
  { en: "Lunch specials are real — $15 AUD–20 gets you the same dinner meal for half price", ja: "ランチスペシャルは本当にお得 — $15 AUD–20でディナーの同じ料理が半額に", zh: "午餐特价是真实存在的 — 花 $15 AUD–20 就能以半价吃到同样的晚餐菜品", ko: "런치 스페셜 활용 — $15 AUD–20으로 저녁 메뉴를 반값에" },
  { en: "Tipping is not required in Australia — it's not a cultural expectation", ja: "オーストラリアではチップは不要 — 文化的な習慣ではありません", zh: "在澳大利亚不需要给小费 — 这不是文化上的期待", ko: "호주는 팁 문화가 아님 — 팁은 의무가 아닙니다" },
  { en: "Tapping = paying — tap your card or phone everywhere, cash is rare", ja: "タッチ決済＝支払い — どこでもカードやスマホをタッチするだけ、現金はほとんど使われません", zh: "拍卡即付款 — 到处都能用卡或手机感应支付，现金很少用", ko: "카드/폰 결제 — 현금 거의 안 씀" },
  { en: "Water is free — ask for tap water, it's perfectly safe and drinkable", ja: "水は無料 — 水道水を頼みましょう、完全に安全で飲めます", zh: "水是免费的 — 要自来水就行，完全安全，可以直接饮用", ko: "물은 무료 — 수돗물 요청 가능, 완전히 안전하고 마시기에 좋음" },
];

export default function SydneyFoodGuide() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src="/images/pexels-1855214.jpg"
          alt="Sydney cafe culture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/30" />
        <div className="absolute inset-0 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs uppercase tracking-[0.3em] mb-6 transition-colors"
          >
            ← <En translated>Destinations</En><Ja>目的地</Ja><Zh>目的地</Zh><Ko>여행지</Ko>
          </Link>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Food &amp; Drink</En>
            <Ja>フード &amp; ドリンク</Ja>
            <Zh>美食 &amp; 饮品</Zh>
            <Ko>맛집 &amp; 음료</Ko>
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.95] mb-4">
            <En translated>Sydney Food Guide</En>
            <Ja>シドニー・フードガイド</Ja>
            <Zh>悉尼美食指南</Zh>
            <Ko>시드니 미식 가이드</Ko>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            <En translated>From Newtown&apos;s Thai joints to Opera House fine dining — a practical guide to eating your way through Australia&apos;s most delicious city.</En>
            <Ja>ニュータウンのタイ料理店からオペラハウスのファインダイニングまで — オーストラリアで最もおいしい街を食べ歩くための実用ガイド。</Ja>
            <Zh>从纽敦的泰式小馆到歌剧院的精致餐饮——一份带你吃遍澳大利亚最美味城市的实用指南。</Zh>
            <Ko>뉴타운의 태국 음식점부터 오페라 하우스 파인 다이닝까지 — 호주에서 가장 매력적인 미식 도시를 즐기는 실전 가이드.</Ko>
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">

        {/* Intro */}
        <section className="max-w-3xl reveal">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Foreword</En>
            <Ja>はじめに</Ja>
            <Zh>前言</Zh>
            <Ko>서문</Ko>
          </p>
          <div className="font-serif text-xl md:text-2xl text-stone-800 dark:text-stone-200 leading-relaxed space-y-4">
            <p>
              <En translated>Sydney doesn&apos;t just have good restaurants — it has a real food culture. A city shaped by wave after wave of migration, where you can eat Thai on a paper plate in Newtown for $12 AUD, then turn around and book a $250 AUD degustation at a restaurant that&apos;s in a converted chapel.</En>
              <Ja>シドニーにはただ良いレストランがあるだけでなく — 本物の食文化があります。移民の波が幾重にも重なって形作られた街で、ニュータウンでは$12 AUDで紙皿に盛られたタイ料理を食べ、そのあと振り返れば、改装された礼拝堂のレストランで$250 AUDのデギュスタシオンを予約することもできます。</Ja>
              <Zh>悉尼不只有好的餐厅 — 它有着真正的美食文化。这是一座由一波又一波移民塑造而成的城市，你可以在纽敦花$12 AUD用纸盘吃泰餐，然后转身就能在一家由礼拜堂改建的餐厅预订$250 AUD的品鉴套餐。</Zh>
              <Ko>시드니에는 그냥 좋은 레스토랑이 있는 게 아니라 — 진정한 음식 문화가 있습니다. 이민의 물결이 만들어낸 도시로, 뉴타운에서 $12 AUD에 종이 접시에 담긴 태국 음식을 먹고, 다시 돌아서 개조된 예배당에서 $250 AUD 디구스테이션을 예약할 수 있는 곳입니다.</Ko>
            </p>
            <p>
              <En translated>This guide skips the tourist traps and focuses on the places Sydneysiders actually eat. Warning: you&apos;ll get hungry reading this.</En>
              <Ja>このガイドは観光客向けの罠を避け、シドニーっ子が実際に食べる場所に焦点を当てています。警告：これを読むとお腹が空きます。</Ja>
              <Zh>本指南跳过游客陷阱，专注于悉尼本地人真正吃饭的地方。警告：读着读着你会饿的。</Zh>
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
                  <Ja>{hood.labelJa ?? hood.labelEn}</Ja>
                  <Zh>{hood.labelZh ?? hood.labelEn}</Zh>
                  <Ko>{hood.labelKo}</Ko>
                </p>
                <div className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed mb-5 space-y-3">
                  <Ja>{hood.descJa ?? hood.descEn}</Ja>
                  <Zh>{hood.descZh ?? hood.descEn}</Zh>
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
                        <En translated>{spot.en}</En>
                        <Ja>{pickLocale("ja", spot)}</Ja>
                        <Zh>{pickLocale("zh", spot)}</Zh>
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
            <En translated>Pro tip</En>
            <Ja>豆知識</Ja>
            <Zh>小贴士</Zh>
            <Ko>프로 팁</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-3 leading-tight">
            <Ja>{byoInfo.titleJa ?? byoInfo.titleEn}</Ja>
            <Zh>{byoInfo.titleZh ?? byoInfo.titleEn}</Zh>
            <Ko>{byoInfo.titleKo}</Ko>
          </h2>
          <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed max-w-3xl">
            <Ja>{byoInfo.descJa ?? byoInfo.descEn}</Ja>
            <Zh>{byoInfo.descZh ?? byoInfo.descEn}</Zh>
            <Ko>{byoInfo.descKo}</Ko>
          </p>
        </section>

        {/* Practical tips */}
        <section className="reveal">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-5">
            <En translated>Essential tips</En>
            <Ja>必須のヒント</Ja>
            <Zh>必备贴士</Zh>
            <Ko>꼭 알아야 할 팁</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-6 leading-tight">
            <En translated>How to eat well in Sydney</En>
            <Ja>シドニーでおいしく食べる方法</Ja>
            <Zh>如何在悉尼吃得好</Zh>
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
                  <En translated>{tip.en}</En>
                  <Ja>{pickLocale("ja", tip)}</Ja>
                  <Zh>{pickLocale("zh", tip)}</Zh>
                  <Ko>{tip.ko}</Ko>
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Outro */}
        <section className="rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-8 reveal">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-3">
            <En translated>Bon appétit</En>
            <Ja>どうぞお召し上がりください</Ja>
            <Zh>用餐愉快</Zh>
            <Ko>맛있게 드세요</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En translated>Sydney is waiting to feed you.</En>
            <Ja>シドニーはあなたに食事をふるまうのを待っています。</Ja>
            <Zh>悉尼正等着款待你。</Zh>
            <Ko>시드니가 당신을 먹여줄 준비가 되었습니다.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed max-w-2xl">
            <En translated>Whether you&apos;re here for a weekend or a lifetime, Sydney&apos;s food scene will keep surprising you. The best meal you&apos;ll have is probably the one you didn&apos;t plan — a spontaneous bowl of ramen in a Chinatown basement, a Thai green curry on a Newtown street corner, or fish &amp; chips by the harbour at sunset. Get out there, try everything, and eat with your hands when appropriate.</En>
            <Ja>週末の滞在でも一生住むとしても、シドニーの食シーンはあなたを驚かせ続けるでしょう。最高の一食はおそらく計画していなかったものです — チャイナタウンの地下でふらりと入ったラーメン一杯、ニュータウンの街角のタイ風グリーンカレー、あるいは夕暮れのハーバー沿いのフィッシュ・アンド・チップス。外に出て、何でも試して、ふさわしいときには手で食べましょう。</Ja>
            <Zh>无论你是来度个周末还是定居一生，悉尼的美食界都会不断给你惊喜。你最难忘的一餐很可能是不在计划之中的 — 在唐人街地下室偶然吃到的拉面、纽敦街角的泰式绿咖喱，或是日落时分海港边的炸鱼薯条。走出去，什么都试试，合适的时候用手抓着吃。</Zh>
            <Ko>주말 여행이든 평생 거주든, 시드니의 미식 현장은 계속 당신을 놀라게 할 것입니다. 가장 기억에 남는 식사는 아마 계획하지 않은 곳일 겁니다 — 차이나타운 지하에서 우연히 발견한 라면 한 그릇, 뉴타운 길모퉁이의 태국 그린커리, 또는 일몰 하버 옆의 피시 앤 칩스. 밖에 나가서, 모든 걸 시도해보고, 상황이 허락한다면 손으로 드십시오.</Ko>
          </p>
        </section>
      </div>
    </div>
  );
}

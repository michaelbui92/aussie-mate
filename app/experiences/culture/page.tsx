// Server component — bilingual guide to Sydney's multicultural neighbourhoods.
// Editorial style — where to go for authentic cultural experiences.

import { headers } from "next/headers";
import { pageMeta } from "@/lib/page-meta";
import type { Metadata } from "next";
import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { seoFor, withSeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  // Per request, so the tab title and the search-result headline are in the reader's
  // language. The canonical and hreflang come from the root layout, which reads the same
  // header. `Metadata` is imported by every page that uses withSeo.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return withSeo({

  ...seoFor("/experiences/culture", locale),
  title: pageMeta("/experiences/culture", locale).title,
  description: pageMeta("/experiences/culture", locale).description,
  },
  "/experiences/culture"
);
}


type CultureSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; koLabel?: string; jaLabel?: string; zhLabel?: string; en: string; ko: string; ja?: string; zh?: string }>;
};

const sections: CultureSection[] = [
  {
    id: "cabramatta",
    iconKey: "UtensilsCrossed",
    accent: "rose",
    title: "Cabramatta — Little Vietnam",
    koTitle: "카브라마타 — 작은 베트남",
    jaTitle: "Cabramatta \u2014 \u30ea\u30c8\u30eb\u30d9\u30c8\u30ca\u30e0",
    zhTitle: "Cabramatta\u2014\u2014\u5c0f\u8d8a\u5357",
    desc: "Sydney's Vietnamese heartland — pho, banh mi, and fresh markets",
    koDesc: "시드니의 베트남 중심지 — 쌀국수, 반미, 신선한 시장",
    jaDesc: "\u30b7\u30c9\u30cb\u30fc\u306e\u30d9\u30c8\u30ca\u30e0\u306e\u4e2d\u5fc3\u5730 \u2014 \u30d5\u30a9\u30fc\u3001\u30d0\u30a4\u30f3\u30df\u30fc\u3001\u65b0\u9bae\u306a\u5e02\u5834",
    zhDesc: "\u6089\u5c3c\u7684\u8d8a\u5357\u7f8e\u98df\u4e2d\u5fc3\u2014\u2014\u6cb3\u7c89\u3001\u8d8a\u5357\u4e09\u660e\u6cbb\u548c\u65b0\u9c9c\u5e02\u96c6",
    img: "/images/vietnamese_pho.jpg",
    items: [
      { label: "What to Eat", jaLabel: "\u98df\u3079\u308b\u3082\u306e", zhLabel: "\u5403\u4ec0\u4e48", koLabel: "\ubb34\uc5c7\uc744 \uba39\uc744\uae4c", en: "Pho (Vietnamese beef noodle soup) is the star — try Pho Tau Bay, Pho Ann, or Tan Viet for legendary crispy-skin chicken. Banh mi (Vietnamese pork rolls) from Thanh Binh Bakery or Hong Ha Bakery are world-famous — crisp baguette, pâté, pickled veg, and your choice of meat for about $7 AUD. Sugar cane prawn skewers, rice paper rolls, and iced Vietnamese coffee (cà phê sữa đá — strong coffee with condensed milk) are all on the list. Fresh juice stands are everywhere. Most shops are cash-only — bring at least $30–$50 AUD cash.", ja: "フォー（ベトナム牛肉ヌードルスープ）が主役です — Pho Tau Bay、Pho Ann、Tan Vietで伝説のパリパリ鶏肉をぜひ。Thanh Binh BakeryやHong Ha Bakeryのバインミー（ベトナム風ポークロール）は世界的に有名です — パリッとしたバゲット、パテ、ピクルス野菜、選べる肉で約$7 AUD。サトウキビエビ串、生春巻き、ベトナムアイスコーヒー（cà phê sữa đá — コンデンスミルク入りの濃いコーヒー）もおすすめです。フレッシュジュースの屋台もどこにでもあります。ほとんどの店は現金のみ — 少なくとも$30〜$50 AUDの現金を持参してください。", zh: "越南河粉（牛肉粉）是主角——去Pho Tau Bay、Pho Ann或Tan Viet品尝传奇般的脆皮鸡。Thanh Binh Bakery或Hong Ha Bakery的越南三明治（猪肉卷）举世闻名——酥脆的法棍、肉酱、腌菜，自选肉类，约$7 AUD。甘蔗虾串、米纸卷和越南冰咖啡（cà phê sữa đá——加炼乳的浓咖啡）都在推荐之列。鲜榨果汁摊随处可见。大多数店铺只收现金——请至少携带$30–$50 AUD现金。", ko: "쌀국수(포)가 주인공 — Pho Tau Bay, Pho Ann, Tan Viet에서 전설적인 바삭한 닭고기를 맛보세요. Thanh Binh Bakery나 Hong Ha Bakery의 반미는 세계적으로 유명합니다 — 바삭한 바게트, 페이트, 피클 야채와 고기 선택으로 약 $7 AUD. 사탕수수 새우 꼬치, 라이스페이퍼롤, 베트남 아이스커피(cà phê sữa đá — 연유를 넣은 진한 커피)도 추천합니다. 신선한 주스 가판도 도처에 있습니다. 대부분 현금만 받으니 $30–$50 AUD 정도 현금을 챙겨가세요." },
      { label: "What to Do", jaLabel: "\u3059\u308b\u3053\u3068", zhLabel: "\u73a9\u4ec0\u4e48", koLabel: "\ubb34\uc5c7\uc744 \ud560\uae4c", en: "Walk along John Street and the arcades — the streets are lined with fruit shops, fabric stores, jewellery shops, and bakeries. The atmosphere is electric on weekends. The Cabramatta Fresh Food Market is open daily with tropical fruits, fresh herbs, and live seafood. The Pai Lau gate (Friendship Arch) at the entrance to Freedom Plaza is a landmark. If you're into photography, this is one of Sydney's most vibrant street photography spots. Train from Central Station to Cabramatta takes about 50 minutes on the T2 line.", ja: "John Streetとアーケードを歩いてみましょう — 通りには果物店、布地店、宝石店、パン屋が並んでいます。週末は雰囲気がとても活気に満ちています。Cabramatta Fresh Food Marketは毎日営業しており、トロピカルフルーツ、新鮮なハーブ、活きたシーフードを扱っています。Freedom Plazaの入り口にあるPai Lauゲート（友情のアーチ）はランドマークです。写真が好きなら、シドニーで最も活気あるストリートフォトスポットのひとつです。Central StationからCabramattaまでT2線で約50分です。", zh: "沿着John Street和拱廊漫步——街道两旁是水果店、布店、珠宝店和面包店。周末气氛非常热闹。Cabramatta生鲜市场每日开放，出售热带水果、新鲜香草和活海鲜。自由广场（Freedom Plaza）入口处的Pai Lau牌楼（友谊拱门）是一处地标。如果你喜欢摄影，这里是悉尼最充满活力的街头摄影地之一。从中央车站乘T2线到Cabramatta约需50分钟。", ko: "John Street와 아케이드를 따라 걸어보세요 — 과일 가게, 원단 가게, 보석 가게, 빵집이 늘어서 있습니다. 주말에는 분위기가 매우 활기찹니다. Cabramatta Fresh Food Market은 열대 과일, 신선한 허브, 활어를 판매하며 매일 열립니다. Freedom Plaza 입구의 Pai Lau 게이트(우정 아치)는 랜드마크입니다. 사진을 좋아한다면 시드니에서 가장 활기찬 거리 사진 촬영지 중 하나입니다. Central Station에서 Cabramatta까지 T2 라인으로 기차로 약 50분." },
      { label: "When to Go", jaLabel: "\u8a2a\u308c\u308b\u6642\u671f", zhLabel: "\u4f55\u65f6\u524d\u5f80", koLabel: "\uc5b8\uc81c \uac08\uae4c", en: "Weekends are busiest — the markets are in full swing and the restaurants are packed (good energy but expect queues at popular pho spots). Weekdays are quieter, especially mornings. Lunar New Year (January/February) brings lion dances, firecrackers, and street festivals — one of the best Lunar New Year celebrations in Sydney outside the city centre. The Moon Festival (mid-autumn, usually September) also brings lantern displays and mooncakes. If you want to avoid crowds, go on a weekday morning.", ja: "週末が最も混み合います — 市場は活気づき、レストランは満席です（活気はいいですが、人気のフォー店では行列を覚悟してください）。平日はより静かで、特に朝が落ち着いています。旧正月（1月/2月）には獅子舞、爆竹、ストリートフェスティバルが行われます — 市街地外ではシドニー最高の旧正月のお祝いのひとつです。中秋節（通常9月）にはランタン展示と月餅も登場します。混雑を避けたいなら、平日の朝に行きましょう。", zh: "周末最繁忙——市场热火朝天，餐厅座无虚席（氛围很好，但热门河粉店需要排队）。平日较安静，尤其是上午。农历新年（1月/2月）会有舞狮、爆竹和街头庆典——是悉尼市中心以外最棒的农历新年庆祝活动之一。中秋节（通常在9月）也会有花灯展示和月饼。如果想避开人群，就选工作日早上前往。", ko: "주말이 가장 붐빕니다 — 시장이 활발하고 레스토랑이 꽉 찹니다(좋은 에너지지만 인기 쌀국수집은 줄을 서야 함). 평일은 더 한적하며, 특히 아침. 구정(1월/2월)에는 사자춤, 폭죽, 거리 축제 — 시내 밖 시드니 최고의 구정 축제 중 하나. 중추절(보통 9월)에도 등불 전시와 월병이 나옵니다. 붐비는 걸 피하려면 평일 아침에 가세요." },
    ],
  },
  {
    id: "burwood",
    iconKey: "Compass",
    accent: "sunset",
    title: "Burwood — Little China",
    koTitle: "버우드 — 작은 중국",
    jaTitle: "Burwood \u2014 \u30ea\u30c8\u30eb\u30c1\u30e3\u30a4\u30ca",
    zhTitle: "Burwood\u2014\u2014\u5c0f\u4e2d\u56fd",
    desc: "Sydney's Chinese food destination — yum cha, hotpot, and late-night eats",
    koDesc: "시드니의 중국 음식 중심지 — 딤섬, 훠궈, 야식",
    jaDesc: "\u30b7\u30c9\u30cb\u30fc\u306e\u4e2d\u83ef\u30b0\u30eb\u30e1\u306e\u4e2d\u5fc3\u5730 \u2014 \u98f2\u8336\u3001\u706b\u934b\u3001\u6df1\u591c\u306e\u98df\u4e8b",
    zhDesc: "\u6089\u5c3c\u7684\u4e2d\u9910\u80dc\u5730\u2014\u2014\u996e\u8336\u3001\u706b\u9505\u548c\u6df1\u591c\u7f8e\u98df",
    img: "/images/chinese_yum_cha.jpg",
    items: [
      { label: "What to Eat", jaLabel: "\u98df\u3079\u308b\u3082\u306e", zhLabel: "\u5403\u4ec0\u4e48", koLabel: "\ubb34\uc5c7\uc744 \uba39\uc744\uae4c", en: "Burwood is a powerhouse of regional Chinese cuisines. The Burwood Chinatown precinct (around Burwood Road) has dozens of restaurants. Yum cha (dim sum trolleys) at Golden Century or East Ocean is a classic Sydney experience — go on weekends for the full trolley service. Hot pot (Sichuan-style spicy broth or mild bone broth) at Spicy Joint or Haidilao — cook your own meat and vegetables at the table. Hand-pulled noodles (Lanzhou lamian) at 1915 Lanzhou Beef Noodles. Bubble tea shops everywhere — Chatime, Gong Cha, and local favourites. For something different, try xi'an-style biang biang noodles or rou jia mo (Chinese hamburger).", ja: "Burwoodは中国各地域料理の一大拠点です。Burwood Chinatown地区（Burwood Road周辺）には数十軒のレストランがあります。Golden CenturyやEast Oceanの飲茶（点心のワゴンサービス）はシドニーの定番体験です — フルワゴンサービスを楽しむなら週末に行きましょう。Spicy JointやHaidilaoの火鍋（四川風の辛いスープまたはマイルドな骨だし）では、テーブルで肉と野菜を自分で調理します。1915 Lanzhou Beef Noodlesの手打ち麺。タピオカ店はどこにでも — Chatime、Gong Cha、地元の人気店。変わったものを試したいなら、西安風のビャンビャン麺やロージャーモー（中国風ハンバーガー）をどうぞ。", zh: "Burwood是中国各地域菜系的聚集地。Burwood唐人街街区（Burwood Road一带）有数十家餐厅。Golden Century或East Ocean的饮茶（点心推车）是经典的悉尼体验——周末去可享受完整的推车服务。Spicy Joint或海底捞的火锅（川味麻辣汤底或清淡的骨汤）——在餐桌上自己涮肉和蔬菜。1915兰州牛肉面的手工拉面。珍珠奶茶店随处可见——Chatime、贡茶和本地人气店。想尝点不一样的，可以试试西安风味的biang biang面和肉夹馍。", ko: "버우드는 중국 지역 요리의 본산입니다. Burwood Chinatown 구역(Burwood Road 주변)에는 수십 개의 레스토랑이 있습니다. Golden Century나 East Ocean의 딤섬은 클래식한 시드니 경험 — 완전한 카트 서비스를 위해 주말에 가세요. Spicy Joint나 Haidilao의 훠궈(쓰촨식 매운 육수 또는 순한 뼈 육수) — 테이블에서 직접 고기와 야채를 요리합니다. 1915 Lanzhou Beef Noodles의 수타면. 버블티 가게가 도처에 — Chatime, Gong Cha, 그리고 현지 인기 매장들. 다른 걸 원한다면 시안식 비앙비앙면이나 rou jia mo(중국식 햄버거)를 드셔보세요." },
      { label: "What to Do", jaLabel: "\u3059\u308b\u3053\u3068", zhLabel: "\u73a9\u4ec0\u4e48", koLabel: "\ubb34\uc5c7\uc744 \ud560\uae4c", en: "Burwood Road is the main strip — walk from the station to Burwood Park. The Burwood Chinatown food court (lower ground of the Emerald Square building) is a hawker-style experience with stalls selling everything from skewers to dessert. Westfield Burwood for mainstream shopping. Burwood Park is a large green space with a playground and barbecue facilities — good for a picnic after eating. The Vietnamese community in nearby Burwood and Strathfield is also worth exploring. Train from Central Station to Burwood takes about 12 minutes on the T9 line.", ja: "Burwood Roadがメインストリートです — 駅からBurwood Parkまで歩いてみましょう。Burwood Chinatownフードコート（Emerald Squareビルの地下）は、串焼きからデザートまであらゆる屋台が並ぶホーカー式の体験です。Westfield Burwoodは一般向けショッピングに。Burwood Parkは遊び場とバーベキュー設備のある広い緑地です — 食事の後のピクニックに最適です。近くのBurwoodとStrathfieldのベトナム人コミュニティも訪れる価値があります。Central StationからBurwoodまでT9線で約12分です。", zh: "Burwood Road是主街——从车站步行到Burwood Park。Burwood唐人街美食广场（Emerald Square大楼地下一层）是档口式的体验，从烤串到甜品应有尽有。Westfield Burwood适合日常购物。Burwood Park是一片大型绿地，设有游乐场和烧烤设施——饭后野餐的好去处。附近Burwood和Strathfield的越南社区也值得一逛。从中央车站乘T9线到Burwood约需12分钟。", ko: "Burwood Road가 메인 스트립 — 역에서 Burwood Park까지 걸어가세요. Burwood Chinatown 푸드코트(Emerald Square 건물 지하)는 꼬치부터 디저트까지 모든 것을 파는 호커 스타일 경험입니다. Westfield Burwood는 일반 쇼핑. Burwood Park는 놀이터와 바비큐 시설이 있는 큰 녹지 공간 — 식사 후 피크닉에 좋습니다. 인근 버우드와 Strathfield의 베트남 커뮤니티도 탐방할 가치가 있습니다. Central Station에서 Burwood까지 T9 라인으로 기차로 약 12분." },
      { label: "Nearby: Strathfield", jaLabel: "\u8fd1\u304f\uff1aStrathfield", zhLabel: "\u9644\u8fd1\uff1aStrathfield", koLabel: "\uadfc\ucc98: Strathfield", en: "One stop from Burwood, Strathfield is Sydney's Korean heartland. The area around Strathfield station is lined with Korean BBQ restaurants (all-you-can-eat from ~$35 AUD–45), Korean fried chicken joints, kimbap shops, and dessert cafes. Try HanSang for soups and stews, Mapo for BBQ, or Red Pepper for Korean fried chicken. Korean grocery stores (Hanaro Mart, Komart) stock everything from gochujang to fresh kimchi. Most places stay open late — great for a post-yum cha dessert run. Strathfield Sports Club and Strathfield Golf Club are local institutions.", ja: "Burwoodから一駅のStrathfieldはシドニーの韓国の中心地です。Strathfield駅周辺には韓国式BBQレストラン（食べ放題は約$35 AUD〜45から）、韓国フライドチキン店、キンパ店、デザートカフェが並んでいます。スープと鍋ならHanSang、BBQならMapo、韓国フライドチキンならRed Pepperを試してみてください。韓国食品店（Hanaro Mart、Komart）にはコチュジャンから新鮮なキムチまで揃っています。ほとんどの店は遅くまで営業しています — 飲茶の後のデザートタイムに最適です。Strathfield Sports ClubとStrathfield Golf Clubは地元の名所です。", zh: "距离Burwood一站之遥的Strathfield是悉尼的韩国城。Strathfield车站周边遍布韩式烤肉店（自助约$35 AUD–45起）、韩式炸鸡店、紫菜包饭小店和甜品咖啡馆。想喝汤和炖菜可去HanSang，烤肉去Mapo，韩式炸鸡去Red Pepper。韩国超市（Hanaro Mart、Komart）从辣椒酱到新鲜泡菜一应俱全。大多数店铺营业到很晚——饮茶后吃甜点的好去处。Strathfield Sports Club和Strathfield Golf Club是当地的老字号。", ko: "버우드에서 한 정거장, Strathfield는 시드니의 한국 중심지입니다. Strathfield 역 주변에는 한국식 BBQ 레스토랑(무제한 약 $35 AUD–45부터), 한국식 치킨 가게, 김밥 가게, 디저트 카페가 늘어서 있습니다. 한상에서 찌개와 탕, 마포에서 BBQ, Red Pepper에서 한국식 치킨을 맛보세요. 한국 식료품점(Hanaro Mart, Komart)은 고추장부터 신선한 김치까지 모든 것을 갖추고 있습니다. 대부분의 가게는 늦게까지 영업 — 딤섬 후 디저트 타임에 좋습니다. Strathfield Sports Club과 Strathfield Golf Club은 지역 명소입니다." },
    ],
  },
  {
    id: "other-communities",
    iconKey: "Globe",
    accent: "coast",
    title: "More Neighbourhoods",
    koTitle: "더 많은 동네",
    jaTitle: "\u305d\u306e\u4ed6\u306e\u8857",
    zhTitle: "\u66f4\u591a\u8857\u533a",
    desc: "Every corner of Sydney has a story — here are more cultural communities worth visiting",
    koDesc: "시드니의 모든 지역에는 이야기가 있습니다 — 방문할 가치가 있는 더 많은 문화 공동체",
    jaDesc: "\u30b7\u30c9\u30cb\u30fc\u306e\u3069\u306e\u4e00\u89d2\u306b\u3082\u7269\u8a9e\u304c\u3042\u308b \u2014 \u8a2a\u308c\u308b\u4fa1\u5024\u306e\u3042\u308b\u305d\u306e\u4ed6\u306e\u6587\u5316\u30b3\u30df\u30e5\u30cb\u30c6\u30a3",
    zhDesc: "\u6089\u5c3c\u7684\u6bcf\u4e2a\u89d2\u843d\u90fd\u6709\u6545\u4e8b\u2014\u2014\u4ee5\u4e0b\u662f\u66f4\u591a\u503c\u5f97\u63a2\u8bbf\u7684\u6587\u5316\u793e\u533a",
    items: [
      { label: "Harris Park — Little India", jaLabel: "Harris Park \u2014 \u30ea\u30c8\u30eb\u30a4\u30f3\u30c7\u30a3\u30a2", zhLabel: "Harris Park\u2014\u2014\u5c0f\u5370\u5ea6", koLabel: "Harris Park \u2014 \uc791\uc740 \uc778\ub3c4", en: "Harris Park (near Parramatta) is Sydney's Little India. Wigram Street and Marion Street are dense with Indian restaurants, sweet shops, and grocery stores. Try Chatkazz (vegetarian street food), Billu's (butter chicken and tandoori), and Ginger (modern Indian). The sweets — gulab jamun, jalebi, and barfi — are incredible. Train from Central to Harris Park takes about 30 minutes. Go on a weekend evening when the area is buzzing. Bring cash as some smaller places are cash-only.", ja: "Harris Park（Parramatta近く）はシドニーのリトルインディアです。Wigram StreetとMarion Streetにはインド料理店、お菓子屋、食料品店が密集しています。Chatkazz（ベジタリアンのストリートフード）、Billu's（バターチキンとタンドリー）、Ginger（モダンインド料理）を試してみてください。グラブジャムン、ジャレビ、バルフィといったお菓子は絶品です。CentralからHarris Parkまで電車で約30分です。街が活気づく週末の夕方に行きましょう。小さな店は現金のみのところもあるので現金を持参してください。", zh: "Harris Park（帕拉马塔附近）是悉尼的小印度。Wigram Street和Marion Street上印度餐厅、甜品店和杂货店密集。可以试试Chatkazz（素食街头小吃）、Billu's（黄油鸡和唐杜里）和Ginger（现代印度菜）。甜品——玫瑰奶球、糖浆圈饼和牛奶糖糕——非常棒。从中央车站乘火车到Harris Park约需30分钟。周末晚上前往，那时街区最热闹。有些小店只收现金，请带上现金。", ko: "Harris Park(Parramatta 인근)는 시드니의 작은 인도입니다. Wigram Street와 Marion Street에는 인도 레스토랑, 과자 가게, 식료품점이 밀집해 있습니다. Chatkazz(채식 거리 음식), Billu's(버터 치킨과 탄두리), Ginger(현대 인도 요리)를 드셔보세요. 굴랍 자문, 잘레비, 바르피 같은 과자들은 놀랍습니다. Central에서 Harris Park까지 기차로 약 30분. 지역이 활기찬 주말 저녁에 가세요. 일부 작은 가게는 현금만 받으므로 현금을 챙겨가세요." },
      { label: "Auburn & Granville — Middle Eastern", jaLabel: "Auburn\uff06Granville \u2014 \u4e2d\u6771", zhLabel: "Auburn\u4e0eGranville\u2014\u2014\u4e2d\u4e1c\u7f8e\u98df", koLabel: "Auburn & Granville \u2014 \uc911\ub3d9", en: "Auburn and Granville are the heart of Sydney's Middle Eastern and Turkish communities. Go for kebabs, shawarma, falafel, baklava, and Turkish pide (boat-shaped pizza). Auburn's main street has Lebanese sweet shops with mountains of baklava and knafeh (sweet cheese pastry). Granville has the famous El Jannah charcoal chicken — a Sydney institution (garlic sauce is legendary). Many restaurants are halal. The Gallipoli Mosque in Auburn is open for visits outside prayer times — one of the largest mosques in Australia.", ja: "AuburnとGranvilleはシドニーの中東・トルコ系コミュニティの中心地です。ケバブ、シャワルマ、ファラフェル、バクラヴァ、トルコ風ピデ（ボート型ピザ）を食べに行きましょう。Auburnのメインストリートには、山のようなバクラヴァとクナーフェ（甘いチーズ菓子）を置くレバノン系お菓子屋があります。Granvilleには有名なEl Jannahの炭火焼きチキン — シドニーの名物（ガーリックソースが伝説的）があります。多くのレストランがハラール対応です。AuburnのGallipoli Mosqueは礼拝時間外に見学可能です — オーストラリア最大級のモスクのひとつです。", zh: "Auburn和Granville是悉尼中东和土耳其社区的核心。去品尝烤肉串、沙威玛、炸豆丸子、果仁蜜饼和土耳其皮塔饼（船形比萨）。Auburn主街上有黎巴嫩甜品店，堆满了果仁蜜饼和库纳法（甜奶酪酥点）。Granville有著名的El Jannah炭烤鸡——悉尼的老字号（蒜香酱堪称传奇）。许多餐厅提供清真食品。Auburn的加里波利清真寺在礼拜时间之外对游客开放——是澳大利亚最大的清真寺之一。", ko: "Auburn과 Granville은 시드니 중동 및 터키 커뮤니티의 중심지입니다. 케밥, 샤와르마, 팔라펠, 바클라바, 터키 피데(보트 모양 피자)를 먹으러 가세요. Auburn 메인 스트리트에는 바클라바와 크나페(달콤한 치즈 페이스트리)의 산 더미가 있는 레바논 과자 가게들이 있습니다. Granville에는 유명한 El Jannah 숯불 치킨 — 시드니의 명소(마늘 소스는 전설적). 많은 레스토랑이 할랄입니다. Auburn의 Gallipoli Mosque는 기도 시간 외에 방문 가능 — 호주에서 가장 큰 모스크 중 하나입니다." },
      { label: "Chatswood & Eastwood — East Asian", jaLabel: "Chatswood\uff06Eastwood \u2014 \u6771\u30a2\u30b8\u30a2", zhLabel: "Chatswood\u4e0eEastwood\u2014\u2014\u4e1c\u4e9a\u7f8e\u98df", koLabel: "Chatswood & Eastwood \u2014 \ub3d9\uc544\uc2dc\uc544", en: "Chatswood is a northern hub for Chinese, Taiwanese, Japanese, and Korean food. Chatswood Interchange has multiple food courts and restaurants. The Mandarin Centre food court is legendary for cheap and authentic Asian food. Eastwood is split between Korean (east side) and Chinese (west side) — the best of both worlds. Good for Korean BBQ, Chinese dumplings, and Japanese ramen. Both are easily accessible by train — Chatswood on the T1 line (20 mins from Central), Eastwood on the T9 line (30 mins). Parking is difficult on weekends — take the train.", ja: "Chatswoodは中華、台湾、日本、韓国料理の北部ハブです。Chatswood Interchangeには複数のフードコートとレストランがあります。Mandarin Centreフードコートは安くて本格的なアジア料理で有名です。Eastwoodは韓国系（東側）と中国系（西側）に分かれています — 両方の良さが楽しめます。韓国BBQ、中華点心、日本ラーメンに良いです。どちらも電車で簡単にアクセスできます — ChatswoodはT1線（Centralから20分）、EastwoodはT9線（30分）。週末は駐車が難しいので電車を利用しましょう。", zh: "Chatswood是汇聚中餐、台湾菜、日本料理和韩国料理的北部中心。Chatswood Interchange有多个美食广场和餐厅。Mandarin Centre美食广场以物美价廉的正宗亚洲菜闻名。Eastwood一侧是韩国区（东侧）、一侧是中国区（西侧）——两全其美。适合吃韩式烤肉、中式饺子和日式拉面。两地乘火车都很方便——Chatswood在T1线（距中央车站20分钟），Eastwood在T9线（30分钟）。周末停车困难——请乘火车。", ko: "Chatswood는 중국, 대만, 일본, 한국 음식의 북부 허브입니다. Chatswood Interchange에는 여러 푸드코트와 레스토랑이 있습니다. Mandarin Centre 푸드코트는 저렴하고 정통적인 아시안 음식으로 유명합니다. Eastwood는 한국(동쪽)과 중국(서쪽)으로 나뉘어 있습니다 — 양쪽 세계의 최고. 한국 BBQ, 중국 딤섬, 일본 라멘에 좋습니다. 둘 다 기차로 쉽게 접근 가능 — Chatswood T1 라인(Central에서 20분), Eastwood T9 라인(30분). 주말에는 주차가 어려우니 기차를 이용하세요." },
    ],
  },
  {
    id: "indigenous",
    iconKey: "MapPin",
    accent: "stone",
    title: "Indigenous Culture",
    koTitle: "원주민 문화",
    jaTitle: "\u30a2\u30dc\u30ea\u30b8\u30cb\u6587\u5316",
    zhTitle: "\u539f\u4f4f\u6c11\u6587\u5316",
    desc: "The world's oldest living culture — where to learn, see, and respect First Nations heritage",
    koDesc: "세계에서 가장 오래된 살아있는 문화 — 원주민 유산을 배우고, 보고, 존중하는 곳",
    jaDesc: "\u4e16\u754c\u6700\u53e4\u306e\u73fe\u5b58\u3059\u308b\u6587\u5316 \u2014 First Nations\u306e\u907a\u7523\u3092\u5b66\u3073\u3001\u898b\u3066\u3001\u5c0a\u91cd\u3059\u308b\u5834\u6240",
    zhDesc: "\u4e16\u754c\u4e0a\u6700\u53e4\u8001\u7684\u73b0\u5b58\u6587\u5316\u2014\u2014\u5b66\u4e60\u3001\u89c2\u8d4f\u5e76\u5c0a\u91cd\u7b2c\u4e00\u6c11\u65cf\u9057\u4ea7\u7684\u5730\u65b9",
    items: [
      { label: "Where to Go", jaLabel: "\u884c\u304f\u3079\u304d\u5834\u6240", zhLabel: "\u53bb\u54ea\u91cc", koLabel: "\uc5b4\ub514\ub97c \uac08\uae4c", en: "The Australian Museum (Darlinghurst) has a dedicated First Nations gallery with thousands of Indigenous artefacts. The Art Gallery of NSW has an extensive Aboriginal and Torres Strait Islander art collection. Barangaroo Reserve is named after a powerful Cammeraygal woman and has interpretive signage about the area's Indigenous history. The Royal Botanic Garden hosts Aboriginal heritage tours that cover bush tucker, traditional uses of plants, and the history of the harbour. For a day trip, the Blue Mountains has significant Aboriginal rock art sites and cultural tours led by Indigenous guides.", ja: "Australian Museum（Darlinghurst）には数千点の先住民の遺物を収蔵するFirst Nations専用ギャラリーがあります。Art Gallery of NSWにはアボリジニおよびトレス海峡諸島民の芸術作品の充実したコレクションがあります。Barangaroo Reserveは有力なCammeraygalの女性にちなんで名付けられ、この地域の先住民の歴史についての解説サインがあります。Royal Botanic Gardenではブッシュタッカー、植物の伝統的な利用法、港の歴史を扱うアボリジニ文化ツアーを開催しています。日帰りなら、Blue Mountainsに重要なアボリジニの岩絵遺跡と先住民ガイドが案内する文化ツアーがあります。", zh: "澳大利亚博物馆（Darlinghurst）设有专门的“第一民族”展厅，收藏数千件原住民文物。新南威尔士州美术馆拥有丰富的原住民和托雷斯海峡岛民艺术收藏。Barangaroo Reserve以一位强大的Cammeraygal女性命名，设有解说标牌介绍该地区的原住民历史。皇家植物园举办原住民文化遗产之旅，涵盖丛林食物、植物的传统用途和海港的历史。若安排一日游，蓝山有重要的原住民岩画遗址和由原住民向导带领的文化之旅。", ko: "Australian Museum(Darlinghurst)에는 수천 점의 원주민 유물이 있는 전용 First Nations 갤러리가 있습니다. NSW Art Gallery에는 광범위한 Aboriginal 및 Torres Strait Islander 예술 컬렉션이 있습니다. Barangaroo Reserve는 강력한 Cammeraygal 여성의 이름을 따서 명명되었으며 이 지역의 원주민 역사에 대한 해설 간판이 있습니다. Royal Botanic Garden은 부시 터커, 식물의 전통적 사용, 항구의 역사를 다루는 Aboriginal 문화 투어를 제공합니다. 당일 여행으로는 Blue Mountains에 중요한 Aboriginal 암벽화 유적지와 원주민 가이드가 이끄는 문화 투어가 있습니다." },
      { label: "Learn & Respect", jaLabel: "\u5b66\u3073\u3068\u5c0a\u91cd", zhLabel: "\u4e86\u89e3\u4e0e\u5c0a\u91cd", koLabel: "\ubc30\uc6b0\uace0 \uc874\uc911\ud558\uae30", en: "Always acknowledge that you're on Aboriginal land. The Sydney region is home to the Gadigal people of the Eora Nation. Most events begin with an Acknowledgement of Country. When visiting rock art sites: do not touch the art (oils from your skin can damage it), do not climb on the rocks, and stay on marked paths. Some sites are sacred and not open to the public — respect closure signs. Indigenous cultural knowledge is the intellectual property of Aboriginal and Torres Strait Islander peoples — stories, designs, and knowledge should be appreciated, not taken.", ja: "常に自分がアボリジニの土地にいることを認めましょう。シドニー地域はEora NationのGadigalの人々の故郷です。ほとんどの行事はCountryへのAcknowledgement（承認の挨拶）で始まります。岩絵遺跡を訪れる際：作品に触れないでください（皮膚の油が傷めることがあります）、岩に登らないでください、そして標識された道を歩いてください。神聖で一般公開されていない遺跡もあります — 閉鎖の標識を尊重してください。先住民の文化的知識はアボリジニおよびトレス海峡諸島民の知的財産です — 物語、デザイン、知識は鑑賞すべきものであり、持ち去ってはいけません。", zh: "请始终承认你所身处的是原住民的土地。悉尼地区是Eora Nation的Gadigal人的家园。大多数活动都以“致敬土地”（Acknowledgement of Country）开场。参观岩画遗址时：不要触摸岩画（皮肤上的油脂会损坏它们），不要攀爬岩石，请留在标记好的路径上。有些遗址是神圣的且不对公众开放——请尊重封闭标志。原住民的文化知识是原住民和托雷斯海峡岛民的智慧财产——故事、图案和知识应被欣赏，而非攫取。", ko: "항상 Aboriginal 땅에 있음을 인정하세요. 시드니 지역은 Eora Nation의 Gadigal 사람들의 고향입니다. 대부분의 행사는 Country에 대한 감사 인사로 시작합니다. 암벽화 유적지 방문 시: 작품에 손대지 마세요(피부 기름이 손상시킬 수 있음), 바위에 오르지 마세요, 표시된 길을 유지하세요. 일부 유적지는 신성하며 대중에게 공개되지 않습니다 — 폐쇄 표지판을 존중하세요. 원주민 문화 지식은 Aboriginal 및 Torres Strait Islander 사람들의 지적 재산입니다 — 이야기, 디자인, 지식은 감상하되 가져가지 마세요." },
      { label: "Events & Dates", jaLabel: "\u30a4\u30d9\u30f3\u30c8\u3068\u65e5\u7a0b", zhLabel: "\u6d3b\u52a8\u4e0e\u65e5\u671f", koLabel: "\ud589\uc0ac\uc640 \ub0a0\uc9dc", en: "NAIDOC Week (first full week of July) celebrates Aboriginal and Torres Strait Islander history and culture with events across Sydney — art exhibitions, performances, talks, and the NAIDOC march. National Reconciliation Week (27 May – 3 June) marks the 1967 referendum and the Mabo decision. Yabun Festival (26 January, Victoria Park) is the largest one-day Aboriginal music and culture festival in Australia — an alternative way to spend the 26th with music, dance, and food. First Nations films screen at the Sydney Film Festival in June.", ja: "NAIDOC Week（7月の最初の1週間）は、シドニー各地での芸術展、パフォーマンス、トーク、NAIDOCマーチでアボリジニおよびトレス海峡諸島民の歴史と文化を祝います。National Reconciliation Week（5月27日〜6月3日）は1967年の国民投票とMabo判決を記念します。Yabun Festival（1月26日、Victoria Park）はオーストラリア最大の1日限りのアボリジニ音楽・文化フェスティバルです — 音楽、ダンス、食べ物とともに1月26日を過ごす代替の方法です。6月のSydney Film FestivalではFirst Nationsの映画が上映されます。", zh: "NAIDOC周（7月第一个完整的一周）通过遍布悉尼的艺术展、演出、讲座和NAIDOC游行庆祝原住民和托雷斯海峡岛民的历史与文化。全国和解周（5月27日至6月3日）纪念1967年公投和Mabo裁决。Yabun节（1月26日，维多利亚公园）是澳大利亚最大的为期一天的原住民音乐文化节——以音乐、舞蹈和美食度过1月26日的另一种方式。6月的悉尼电影节放映“第一民族”电影。", ko: "NAIDOC Week(7월 첫째 주)은 시드니 전역에서 Aboriginal 및 Torres Strait Islander 역사와 문화를 예술 전시, 공연, 토크, NAIDOC 행진으로 기념합니다. National Reconciliation Week(5월 27일–6월 3일)은 1967년 국민투표와 Mabo 판결을 기념합니다. Yabun Festival(1월 26일, Victoria Park)은 호주 최대의 1일 Aboriginal 음악과 문화 축제입니다 — 음악, 댄스, 음식과 함께 26일을 보내는 대안적 방법. 6월 Sydney Film Festival에서 First Nations 영화가 상영됩니다." },
    ],
  },
];

export default function CulturePage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Culture</En>
            <Ja>文化</Ja>
            <Zh>文化</Zh><Ko>문화</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En translated>Many cultures, one Sydney</En>
            <Ja>多くの文化、ひとつのシドニー</Ja>
            <Zh>多元文化，同一个悉尼</Zh>
            <Ko>많은 문화, 하나의 시드니</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En translated>Sydney is one of the most multicultural cities in the world. Every neighbourhood has its own food, language, and traditions. Here's where to go to experience them firsthand.</En>
            <Ja>シドニーは世界で最も多文化な都市のひとつです。どの地区にも独自の料理、言語、伝統があります。それを直接体験できる場所を紹介します。</Ja>
            <Zh>悉尼是世界上最多元文化的城市之一。每个街区都有自己的美食、语言和传统。以下就是亲身体验它们的好去处。</Zh>
            <Ko>시드니는 세계에서 가장 다문화적인 도시 중 하나입니다. 모든 동네에는 고유한 음식, 언어, 전통이 있습니다. 직접 경험할 수 있는 곳을 소개합니다.</Ko>
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
            <En translated>Resources</En>
            <Ja>リソース</Ja>
            <Zh>资源</Zh><Ko>리소스</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En translated>Keep exploring.</En>
            <Ja>探検を続けましょう。</Ja>
            <Zh>继续探索吧。</Zh>
            <Ko>계속 탐험하세요.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En translated>Sydney's cultural richness is one of its greatest strengths. Take the train to a neighbourhood you've never been to. Try food you've never eaten. Talk to people. The best way to understand Australia is to experience its multicultural soul.</En>
            <Ja>シドニーの文化的な豊かさは、最大の強みのひとつです。行ったことのない地区へ電車で出かけてみましょう。食べたことのない料理を試してみましょう。人と話しましょう。オーストラリアを理解する最良の方法は、その多文化な魂を体験することです。</Ja>
            <Zh>悉尼的文化丰富性是其最大的优势之一。坐火车去一个你从未去过的街区。尝一尝你从未吃过的食物。与人交谈。理解澳大利亚的最佳方式，就是体验它多元文化的灵魂。</Zh>
            <Ko>시드니의 문화적 풍요로움은 가장 큰 강점 중 하나입니다. 가보지 않은 동네로 기차를 타보세요. 먹어보지 않은 음식을 먹어보세요. 사람들과 대화하세요. 호주를 이해하는 가장 좋은 방법은 그 다문화적 영혼을 경험하는 것입니다.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.australianmuseum.net.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">Australian Museum ↗</a>
            <a href="https://www.sydney.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Destination NSW ↗</a>
          </div>
        </section>
      </div>
    </div>
  );
}

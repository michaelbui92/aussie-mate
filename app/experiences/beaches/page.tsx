// Server component — bilingual Sydney beaches guide.
// Practical info, safety, and editorial style.

import {En, Ja, Ko, Zh} from "@/components/LangBlocks";
import { pickLocale } from "@/lib/locale";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { Beach, Sun, MapPin, Shield, Flag, AlertTriangle, Umbrella } from "@/components/Icons";
import { seoFor, withSeo } from "@/lib/seo";

type BeachSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; koLabel?: string; jaLabel?: string; zhLabel?: string; en: string; ko: string; url?: string; ja?: string; zh?: string }>;
};

const sections: BeachSection[] = [
  {
    id: "bondi",
    iconKey: "Beach",
    accent: "coast",
    title: "Bondi Beach",
    koTitle: "본다이 비치",
    jaTitle: "\u30dc\u30f3\u30c0\u30a4\u30fb\u30d3\u30fc\u30c1",
    zhTitle: "\u90a6\u8fea\u6d77\u6ee9",
    desc: "Sydney's most famous beach — how to get there and what to expect",
    koDesc: "시드니에서 가장 유명한 해변 — 가는 방법과 즐기는 법",
    jaDesc: "\u30b7\u30c9\u30cb\u30fc\u3067\u6700\u3082\u6709\u540d\u306a\u30d3\u30fc\u30c1 \u2014 \u884c\u304d\u65b9\u3068\u898b\u3069\u3053\u308d",
    zhDesc: "\u6089\u5c3c\u6700\u8457\u540d\u7684\u6d77\u6ee9\u2014\u2014\u5982\u4f55\u524d\u5f80\u4ee5\u53ca\u6709\u4f55\u770b\u70b9",
    items: [
      { label: "How to Get There",
      jaLabel: "\u884c\u304d\u65b9",
      zhLabel: "\u5982\u4f55\u524d\u5f80",
      koLabel: "\uac00\ub294 \ubc29\ubc95", en: "Take bus 333 from the CBD (Bondi Junction or Circular Quay). Bus 380 also runs from Bondi Junction. Trip takes about 30 minutes from the city centre. Catch the train to Bondi Junction station first (T4 Eastern Suburbs line), then jump on the 333 bus — it's the last leg of the journey and passes through some of Sydney's nicest suburbs.", ja: "CBD（Bondi JunctionまたはCircular Quay）から333番のバスに乗ります。380番のバスもBondi Junctionから運行しています。市内中心部から約30分です。まず電車でBondi Junction駅まで行き（T4 Eastern Suburbs線）、その後333番のバスに乗ります — これが旅の最後の区間で、シドニーでも特に美しい郊外を通ります。", zh: "从CBD（邦迪枢纽站或环形码头）乘坐333路公交车。380路公交车也从邦迪枢纽站发车。从市中心出发约需30分钟。先乘火车到邦迪枢纽站（T4东郊线），然后换乘333路公交车——这是旅程的最后一段，途经悉尼最漂亮的一些郊区。", ko: "CBD에서 333번 버스를 타세요(Bondi Junction 또는 Circular Quay 출발). 380번 버스도 Bondi Junction에서 운행됩니다. 시내에서 약 30분 소요. 먼저 기차(T4 Eastern Suburbs Line)로 Bondi Junction 역까지 간 후 333번 버스를 타면 됩니다." },
      { label: "Best Time to Go",
      jaLabel: "\u304a\u3059\u3059\u3081\u306e\u6642\u671f",
      zhLabel: "\u6700\u4f73\u65f6\u95f4",
      koLabel: "\ubc29\ubb38 \ucd5c\uc801\uae30", en: "Weekday mornings are quietest — perfect for a relaxed swim. Weekends get packed, especially between 10am-4pm. Summer (Dec-Feb) is peak season with daytime temps around 26-30°C. Autumn (Mar-May) and spring (Sep-Nov) offer pleasant weather with fewer crowds.", ja: "平日の朝が最も空いています — ゆったり泳ぐのに最適です。週末は混雑し、特に午前10時から午後4時の間が最も混み合います。夏（12月〜2月）はピークシーズンで、日中の気温は26〜30°C程度です。秋（3月〜5月）と春（9月〜11月）は人が少なく快適な気候です。", zh: "平日上午最安静——非常适合悠闲地游泳。周末人很多，尤其是上午10点到下午4点之间。夏季（12月至2月）是旺季，白天气温约26-30°C。秋季（3月至5月）和春季（9月至11月）天气宜人，人也较少。", ko: "평일 아침이 가장 한적합니다 — 여유로운 수영에 완벽합니다. 주말은 특히 오전 10시-오후 4시 사이에 매우 붐빕니다. 여름(12월-2월)은 성수기로 주간 기온이 26-30°C입니다. 가을(3월-5월)과 봄(9월-11월)은 사람이 적고 날씨가 좋습니다." },
      { label: "Facilities",
      jaLabel: "\u65bd\u8a2d",
      zhLabel: "\u8bbe\u65bd",
      koLabel: "\ud3b8\uc758\uc2dc\uc124", en: "Public toilets, outdoor showers, change rooms, and lockers available. Bondi Pavilion has a café, bar, and community centre. Multiple surf schools operate on the southern end. Lifeguards patrol the flagged area year-round — swim between the red and yellow flags.", ja: "公衆トイレ、屋外シャワー、更衣室、ロッカーがあります。Bondi Pavilionにはカフェ、バー、コミュニティセンターがあります。南側では複数のサーフスクールが運営されています。ライフガードが一年を通して旗のエリアを巡回しています — 赤と黄色の旗の間で泳いでください。", zh: "设有公共厕所、室外淋浴、更衣室和储物柜。邦迪馆（Bondi Pavilion）有咖啡馆、酒吧和社区中心。南端有多家冲浪学校运营。救生员全年在旗帜区域巡逻——请在红黄旗之间游泳。", ko: "공중 화장실, 야외 샤워실, 탈의실, 사물함이 있습니다. Bondi Pavilion에는 카페, 바, 커뮤니티 센터가 있습니다. 남쪽 끝에서 여러 서핑 스쿨이 운영됩니다. 연중 구조원이 깃발 구역을 감시합니다 — 빨간색과 노란색 깃발 사이에서 수영하세요." },
      { label: "Bondi to Coogee Walk",
      jaLabel: "\u30dc\u30f3\u30c0\u30a4\u301c\u30af\u30fc\u30b8\u30fc\u6d77\u5cb8\u30a6\u30a9\u30fc\u30af",
      zhLabel: "\u90a6\u8fea\u81f3\u5e93\u5409\u6b65\u9053",
      koLabel: "Bondi to Coogee \uc0b0\ucc45\ub85c", en: "The famous 6km coastal walk starts at Bondi's southern end (past the Icebergs pool). Takes about 2 hours one way, passing Tamarama, Bronte, and Clovelly beaches. Lots of photo stops, cafes, and rock pools along the way. Do it early morning before it gets too hot.", ja: "有名な6kmの海岸遊歩道はボンダイの南端（Icebergsプールを過ぎた先）から始まります。片道約2時間で、Tamarama、Bronte、Clovellyの各ビーチを通ります。途中には写真スポット、カフェ、岩の潮だまりがたくさんあります。暑くなる前の早朝に行きましょう。", zh: "著名的6公里海岸步道从邦迪南端开始（经过Icebergs泳池）。单程约2小时，途经塔玛拉玛（Tamarama）、布朗特（Bronte）和克洛夫利（Clovelly）海滩。沿途有许多拍照点、咖啡馆和岩池。最好在天气变热之前的清晨前往。", ko: "유명한 6km 해안 산책로는 Bondi 남쪽 끝(Icebergs 수영장 지나)에서 시작됩니다. 편도 약 2시간, Tamarama, Bronte, Clovelly 해변을 지납니다. 사진 찍기 좋은 곳, 카페, 암석 수영장이 많습니다. 더워지기 전 이른 아침에 가보세요." },
      { label: "Icebergs Pool",
      jaLabel: "\u30a2\u30a4\u30b9\u30d0\u30fc\u30b0\u30b9\u30fb\u30d7\u30fc\u30eb",
      zhLabel: "Icebergs\u6cf3\u6c60",
      koLabel: "Icebergs \uc218\uc601\uc7a5", en: "The famous ocean pool at Bondi's southern end. Entry is about $9 AUD for adults. The pool is filled by ocean waves — cold but refreshing. Great photo spot overlooking the beach. Open every day except Christmas. The attached restaurant is a great spot for brunch.", ja: "ボンダイの南端にある有名なオーシャンプールです。入場料は大人約$9 AUDです。プールは海の波で満たされます — 冷たいですが爽快です。ビーチを見下ろす絶好の写真スポットです。クリスマスを除いて毎日営業しています。付設のレストランはブランチに最適です。", zh: "邦迪南端著名的海泳池。成人门票约$9 AUD。泳池由海浪注满——清凉爽快。俯瞰海滩的绝佳拍照点。除圣诞节外每天开放。附设的餐厅是享用早午餐的好去处。", ko: "Bondi 남쪽 끝에 있는 유명한 바다 수영장입니다. 입장료는 성인 약 $9 AUD입니다. 파도로 채워지는 수영장 — 차갑지만 상쾌합니다. 해변을 내려다보는 멋진 사진 명소입니다. 크리스마스 외에는 매일 운영합니다." },
      { label: "Full Bondi Guide",
      jaLabel: "\u30dc\u30f3\u30c0\u30a4\u5b8c\u5168\u30ac\u30a4\u30c9",
      zhLabel: "\u90a6\u8fea\u5b8c\u6574\u6307\u5357",
      koLabel: "\ubcf8\ub2e4\uc774 \uc644\uc804 \uac00\uc774\ub4dc", url: "/destinations/bondi-beach", en: "We've put together a complete Bondi destination guide — step-by-step transport from the CBD, the coastal walk, where to eat, and the best time to go. Click here for the full guide.", ja: "ボンダイの完全ガイドをまとめました — CBDからの交通手段を段階的に、海岸遊歩道、食事ができる場所、訪れるのに最適な時期まで。完全ガイドはこちらをクリック。", zh: "我们整理了一份完整的邦迪目的地指南——从CBD出发的分步交通指引、海岸步道、美食推荐以及最佳游览时间。点击此处查看完整指南。", ko: "본다이 완전 가이드를 준비했습니다 — 시내에서 가는 방법 단계별 안내, 해안 산책로, 맛집, 방문하기 좋은 시기까지. 전체 가이드는 여기를 클릭하세요." },
    ],
  },
  {
    id: "manly",
    iconKey: "Beach",
    accent: "sunset",
    title: "Manly Beach",
    koTitle: "맨리 비치",
    jaTitle: "\u30de\u30f3\u30ea\u30fc\u30fb\u30d3\u30fc\u30c1",
    zhTitle: "\u66fc\u5229\u6d77\u6ee9",
    desc: "The ferry ride alone is worth it — Sydney's northern beach paradise",
    koDesc: "페리 타는 것만으로도 가치 있는 — 시드니 북부의 해변 파라다이스",
    jaDesc: "\u30d5\u30a7\u30ea\u30fc\u306b\u4e57\u308b\u3060\u3051\u3067\u3082\u4fa1\u5024\u304c\u3042\u308b \u2014 \u30b7\u30c9\u30cb\u30fc\u5317\u90e8\u306e\u30d3\u30fc\u30c1\u30d1\u30e9\u30c0\u30a4\u30b9",
    zhDesc: "\u5355\u662f\u6e21\u8f6e\u4e4b\u65c5\u5c31\u503c\u5f97\u2014\u2014\u6089\u5c3c\u5317\u90e8\u7684\u6d77\u6ee9\u5929\u5802",
    items: [
      { label: "How to Get There",
      jaLabel: "\u884c\u304d\u65b9",
      zhLabel: "\u5982\u4f55\u524d\u5f80",
      koLabel: "\uac00\ub294 \ubc29\ubc95", en: "Take the F1 ferry from Circular Quay to Manly Wharf — a 30-minute scenic ride across the harbour. Opal fare is about $11 AUD each way. This is one of the best value experiences in Sydney. Alternatively, take the L90 bus from Wynyard Station (1 hour, cheaper but less scenic).", ja: "Circular QuayからManly WharfまでF1フェリーに乗ります — 港を横断する30分の絶景クルーズです。Opal運賃は片道約$11 AUDです。シドニーで最もコスパの良い体験のひとつです。あるいは、Wynyard駅からL90バスに乗る方法もあります（1時間、安いが景色は劣ります）。", zh: "从环形码头乘坐F1渡轮到曼利码头——30分钟横跨海港的风景之旅。Opal卡单程票价约$11 AUD。这是悉尼性价比最高的体验之一。或者，从温亚德站（Wynyard）乘坐L90路公交车（1小时，更便宜但景色稍逊）。", ko: "Circular Quay에서 Manly Wharf까지 F1 페리를 타세요 — 항구를 가로지르는 30분의 경치 좋은 항해입니다. Opal 요금은 편도 약 $11 AUD입니다. 시드니에서 가장 가성비 좋은 경험 중 하나입니다. 또는 Wynyard 역에서 L90 버스(1시간, 저렴하지만 경치는 덜함)를 탈 수 있습니다." },
      { label: "The Corso",
      jaLabel: "The Corso",
      zhLabel: "The Corso",
      koLabel: "The Corso", en: "The pedestrian-only strip that connects Manly Wharf directly to Manly Beach. Lined with cafes, restaurants, surf shops, and ice cream places. About 200 metres of pure beach-town energy. Grab a coffee or a cold drink and walk straight through to the sand.", ja: "Manly WharfとManly Beachを直接結ぶ歩行者専用の通りです。カフェ、レストラン、サーフショップ、アイスクリーム店が並んでいます。約200メートルの純粋なビーチタウンの活気。コーヒーや冷たい飲み物を買って、そのまま砂浜まで歩いて行きましょう。", zh: "这条步行街直接连接曼利码头和曼利海滩。两旁咖啡馆、餐厅、冲浪用品店和冰淇淋店林立。约200米的纯正海滨小镇活力。买杯咖啡或冷饮，径直走到沙滩上。", ko: "Manly Wharf에서 Manly Beach까지 직접 연결되는 보행자 전용 도로입니다. 카페, 레스토랑, 서핑숍, 아이스크림 가게가 늘어서 있습니다. 약 200m의 순수한 해변 마을 에너지. 커피나 시원한 음료를 사서 모래사장까지 걸어가보세요." },
      { label: "Surf Conditions",
      jaLabel: "\u30b5\u30fc\u30d5\u30a3\u30f3\u6761\u4ef6",
      zhLabel: "\u51b2\u6d6a\u6761\u4ef6",
      koLabel: "\uc11c\ud551 \uc870\uac74", en: "Manly has consistent waves year-round — popular with surfers. The southern end (South Steyne) is generally calmer, good for beginners. The northern end (Queenscliff and North Steyne) has bigger waves for experienced surfers. Swim between the flags — lifeguards patrol daily.", ja: "Manlyは一年を通して安定した波があり、サーファーに人気です。南側（South Steyne）は一般に穏やかで初心者に適しています。北側（QueenscliffとNorth Steyne）は上級者向けの大きな波があります。旗の間で泳いでください — ライフガードが毎日巡回しています。", zh: "曼利全年海浪稳定——深受冲浪者欢迎。南端（South Steyne）通常较平缓，适合初学者。北端（Queenscliff和North Steyne）浪更大，适合有经验的冲浪者。请在旗帜之间游泳——救生员每天巡逻。", ko: "Manly는 연중 일관된 파도가 있어 서퍼들에게 인기입니다. 남쪽 끝(South Steyne)은 일반적으로 잔잔해 초보자에게 좋고, 북쪽 끝(Queenscliff, North Steyne)은 경험자에게 큰 파도가 있습니다. 깃발 사이에서 수영하세요 — 구조원이 매일 순찰합니다." },
      { label: "Shelly Beach",
      jaLabel: "Shelly Beach",
      zhLabel: "Shelly Beach",
      koLabel: "Shelly Beach", en: "A sheltered beach just a 10-minute walk from Manly's main beach (head past the aquarium). Calm, protected waters — perfect for snorkelling, families, and beginner swimmers. Less crowded than Manly main beach. Good spot to see fish and occasional sea turtles.", ja: "Manly本メインビーチから徒歩10分（水族館を過ぎた先）にある入り江に守られたビーチです。穏やかで守られた海 — シュノーケリング、家族連れ、初心者の泳ぎ手に最適です。Manly本ビーチより混雑していません。魚や時折ウミガメが見られる良いスポットです。", zh: "一处受庇护的海湾海滩，距曼利主海滩步行10分钟（经过水族馆）。海水平静受保护——非常适合浮潜、家庭游玩和游泳初学者。比曼利主海滩人少。是观赏鱼类和偶尔出现海龟的好地方。", ko: "Manly 본해변에서 도보 10분 거리(수족관 지나서)의 보호된 해변입니다. 잔잔하고 보호된 바다 — 스노클링, 가족, 초보 수영객에게 완벽합니다. Manly 본해변보다 덜 붐빕니다. 물고기와 가끔 바다거북을 볼 수 있습니다." },
      { label: "Manly to Spit Walk",
      jaLabel: "\u30de\u30f3\u30ea\u30fc\u301c\u30b9\u30d4\u30c3\u30c8\u30fb\u30a6\u30a9\u30fc\u30af",
      zhLabel: "\u66fc\u5229\u81f3\u65af\u76ae\u7279\u6b65\u9053",
      koLabel: "Manly to Spit \uc0b0\ucc45\ub85c", en: "One of Sydney's best coastal walks — 10km from Manly to The Spit Bridge. Takes about 3-4 hours through national park, stunning viewpoints, secluded beaches. Start early and bring water and sunscreen. Public transport returns from The Spit to the city.", ja: "シドニー最高の海岸遊歩道のひとつ — ManlyからThe Spit Bridgeまで10kmです。国立公園、絶景の展望台、人里離れたビーチを通り、約3〜4時間かかります。早めに出発し、水と日焼け止めを持参してください。The Spitから市内へは公共交通で戻れます。", zh: "悉尼最好的海岸步道之一——从曼利到The Spit Bridge全长10公里。穿过国家公园、绝美观景点和幽静海滩，约需3-4小时。早点出发，带上水和防晒霜。从The Spit可乘公共交通返回市区。", ko: "시드니 최고의 해안 산책로 중 하나 — Manly에서 The Spit Bridge까지 10km입니다. 국립공원, 멋진 전망대, 한적한 해변을 지나 약 3-4시간 소요. 일찍 출발하고 물과 자외선 차단제를 챙기세요. The Spit에서 시내로 가는 대중교통이 있습니다." },
    ],
  },
  {
    id: "palm-beach",
    iconKey: "MapPin",
    accent: "coast",
    title: "Palm Beach & Northern Beaches",
    koTitle: "팜 비치 & 노던 비치",
    jaTitle: "\u30d1\u30fc\u30e0\u30fb\u30d3\u30fc\u30c1\uff06\u30ce\u30fc\u30b6\u30f3\u30fb\u30d3\u30fc\u30c1\u30ba",
    zhTitle: "\u68d5\u6988\u6ee9\u4e0e\u5317\u90e8\u6d77\u6ee9",
    desc: "Sydney's northernmost beaches — quieter, wilder, and absolutely stunning",
    koDesc: "시드니 최북단 해변 — 조용하고, 자연 그대로이며, 절대적으로 아름다운",
    jaDesc: "\u30b7\u30c9\u30cb\u30fc\u6700\u5317\u7aef\u306e\u30d3\u30fc\u30c1 \u2014 \u3088\u308a\u9759\u304b\u3067\u3001\u3088\u308a\u30ef\u30a4\u30eb\u30c9\u3067\u3001\u606f\u3092\u306e\u3080\u307b\u3069\u7f8e\u3057\u3044",
    zhDesc: "\u6089\u5c3c\u6700\u5317\u7aef\u7684\u6d77\u6ee9\u2014\u2014\u66f4\u5b89\u9759\u3001\u66f4\u539f\u59cb\uff0c\u7f8e\u5f97\u4ee4\u4eba\u60ca\u53f9",
    items: [
      { label: "How to Get There",
      jaLabel: "\u884c\u304d\u65b9",
      zhLabel: "\u5982\u4f55\u524d\u5f80",
      koLabel: "\uac00\ub294 \ubc29\ubc95", en: "Take the L90 bus from Wynyard Station (about 1.5 hours, Opal fare ~$5 AUD) or drive north via the A3 and Barrenjoey Road. The L90 runs along the coast past Dee Why, Collaroy, Mona Vale, and Newport before reaching Palm Beach. Driving from the CBD takes about 50 minutes outside peak times.", ja: "Wynyard駅からL90バス（約1.5時間、Opal運賃約$5 AUD）に乗るか、A3とBarrenjoey Road経由で北へドライブします。L90は海岸沿いをDee Why、Collaroy、Mona Vale、Newportを経てPalm Beachまで運行しています。CBDから車でピーク時以外は約50分です。", zh: "从温亚德站乘坐L90路公交车（约1.5小时，Opal票价约$5 AUD），或经A3和Barrenjoey Road向北驾车前往。L90沿海岸经过Dee Why、Collaroy、Mona Vale、Newport，到达棕榈滩。非高峰时段从CBD驾车约需50分钟。", ko: "Wynyard 역에서 L90 버스(약 1.5시간, Opal 요금 약 $5 AUD)를 타거나 A3와 Barrenjoey Road를 통해 북쪽으로 운전하세요. L90은 Dee Why, Collaroy, Mona Vale, Newport를 지나 해안을 따라 Palm Beach까지 운행됩니다. CBD에서 운전하면 피크 타임 외에 약 50분 소요." },
      { label: "Barrenjoey Lighthouse",
      jaLabel: "Barrenjoey \u706f\u53f0",
      zhLabel: "Barrenjoey\u706f\u5854",
      koLabel: "Barrenjoey \ub4f1\ub300", en: "The iconic lighthouse at the northern tip of Palm Beach. A 30-minute walk to the top with panoramic views of the ocean, Pittwater, and the Central Coast. The lighthouse itself dates from 1881 and is a heritage site. Open for tours on Sundays (check website). Sunset from here is spectacular.", ja: "Palm Beach北端にある象徴的な灯台です。頂上まで徒歩30分で、海、Pittwater、Central Coastのパノラマビューを楽しめます。灯台自体は1881年築の文化遺産です。日曜日にツアー開放（ウェブサイトで確認）。ここからの夕日は絶景です。", zh: "位于棕榈滩北端的标志性灯塔。步行30分钟登顶，可欣赏海洋、皮特沃特（Pittwater）和中央海岸的全景。灯塔本身建于1881年，是一处文化遗产。周日开放参观（请查看网站）。从这里看日落非常壮观。", ko: "Palm Beach 북쪽 끝에 있는 상징적인 등대입니다. 정상까지 30분 도보로 바다, Pittwater, Central Coast의 파노라마 뷰를 감상할 수 있습니다. 등대 자체는 1881년에 지어진 문화유산입니다. 일요일 투어 가능(웹사이트 확인). 여기서 보는 일몰이 장관입니다." },
      { label: "Home & Away Beach",
      jaLabel: "Home and Away \u30d3\u30fc\u30c1",
      zhLabel: "Home and Away\u6d77\u6ee9",
      koLabel: "\ud648 \uc564 \uc5b4\uc6e8\uc774 \ucd2c\uc601\uc9c0", en: "Palm Beach is the filming location for the famous Australian TV show 'Home and Away'. The palm trees on the main beach are recognisable from the show's opening credits. The surf club building also appears regularly. Fans of the show will recognise many spots along the beachfront.", ja: "Palm Beachは有名なオーストラリアのテレビ番組「Home and Away」のロケ地です。メインビーチのヤシの木は番組のオープニングクレジットで見覚えがあるはずです。サーフクラブの建物もよく登場します。番組のファンなら、海岸沿いの多くの場所に見覚えがあるでしょう。", zh: "棕榈滩是著名澳大利亚电视节目《Home and Away》的拍摄地。主海滩上的棕榈树在节目片头中一眼可辨。冲浪俱乐部大楼也经常出现。剧迷会认出海滨沿线的许多地点。", ko: "Palm Beach는 유명한 호주 TV 프로그램 'Home and Away'의 촬영지입니다. 본해변의 야자수는 프로그램 오프닝 크레딧에서 알아볼 수 있습니다. 서프 클럽 건물도 자주 등장합니다. 프로그램 팬이라면 해변가의 많은 장소를 알아볼 것입니다." },
      { label: "Pittwater & Kayaking",
      jaLabel: "\u30d4\u30c3\u30c8\u30a6\u30a9\u30fc\u30bf\u30fc\uff06\u30ab\u30e4\u30c3\u30af",
      zhLabel: "\u76ae\u7279\u6c83\u7279\u4e0e\u76ae\u5212\u8247",
      koLabel: "Pittwater & \uce74\uc57d", en: "The western side of Palm Beach faces Pittwater — a calm, sheltered waterway perfect for kayaking, paddleboarding, and sailing. Rentals available at the marina. You can paddle to the Basin, a popular campground with a beautiful beach on the western side. Book ahead for camping.", ja: "Palm Beachの西側はPittwaterに面しています — カヤック、パドルボード、セーリングに最適な穏やかで守られた水路です。マリーナでレンタルできます。西側に美しいビーチがある人気のキャンプ場Basinまでパドルで行けます。キャンプは事前予約を。", zh: "棕榈滩西侧面向皮特沃特——一条平静、受庇护的水道，非常适合划皮划艇、桨板冲浪和帆船。码头提供租赁。你可以划到The Basin，那是西侧一处热门露营地，拥有美丽的海滩。露营需提前预订。", ko: "Palm Beach 서쪽은 Pittwater를 마주하고 있습니다 — 카약, 패들보드, 요트에 완벽한 잔잔하고 보호된 수로입니다. 마리나에서 대여 가능합니다. 서쪽에 아름다운 해변이 있는 인기 캠핑장인 Basin까지 패들링할 수 있습니다. 캠핑은 사전 예약 필수." },
      { label: "Best Beaches Along the Way",
      jaLabel: "\u9053\u4e2d\u306e\u30d9\u30b9\u30c8\u30d3\u30fc\u30c1",
      zhLabel: "\u6cbf\u9014\u6700\u4f73\u6d77\u6ee9",
      koLabel: "\uac00\ub294 \uae38 \ucd5c\uace0\uc758 \ud574\ubcc0", en: "Dee Why Beach (great family beach with a lagoon), Collaroy Beach (famous for the collapsed beach house photos), Mona Vale (good surf break), Newport (chic beachside cafes), Avalon (village vibe with great food), Whale Beach (stunning and quiet). Each stop is worth exploring — take the bus and hop on and off.", ja: "Dee Why Beach（ラグーンがある家族向けの良いビーチ）、Collaroy Beach（崩壊したビーチハウスの写真で有名）、Mona Vale（良いサーフブレイク）、Newport（おしゃれな海辺のカフェ）、Avalon（美味しい料理と村の雰囲気）、Whale Beach（絶景で静か）。それぞれの停留所を探索する価値があります — バスに乗って自由に乗り降りしましょう。", zh: "Dee Why海滩（带泻湖的优质家庭海滩）、Collaroy海滩（因崩塌的海滨别墅照片而闻名）、Mona Vale（不错的冲浪点）、Newport（时尚的海边咖啡馆）、Avalon（村庄氛围，美食出众）、Whale Beach（绝美而宁静）。每一站都值得探索——乘公交车随心上下。", ko: "Dee Why Beach(라군이 있는 좋은 가족 해변), Collaroy Beach(무너진 해변가 주택 사진으로 유명), Mona Vale(좋은 파도), Newport(세련된 해변 카페), Avalon(좋은 음식이 있는 마을 분위기), Whale Beach(멋지고 조용함). 각 정류장을 탐험할 가치가 있습니다 — 버스를 타고 자유롭게 승하차하세요." },
    ],
  },
  {
    id: "bronte-coogee",
    iconKey: "Beach",
    accent: "coast",
    title: "Bronte, Coogee & Eastern Suburbs",
    koTitle: "브론티, 쿠지 & 이스턴 서브럽스",
    jaTitle: "\u30d6\u30ed\u30f3\u30c6\u30a3\u3001\u30af\u30fc\u30b8\u30fc\uff06Eastern Suburbs",
    zhTitle: "\u5e03\u6717\u7279\u3001\u5e93\u5409\u4e0e\u4e1c\u90ca",
    desc: "Hidden gems along Sydney's eastern coastline — quieter alternatives to Bondi",
    koDesc: "시드니 동부 해안선의 숨겨진 보석 — 본다이의 조용한 대안",
    jaDesc: "\u30b7\u30c9\u30cb\u30fc\u6771\u90e8\u306e\u6d77\u5cb8\u7dda\u306b\u96a0\u308c\u305f\u540d\u6240 \u2014 \u30dc\u30f3\u30c0\u30a4\u3088\u308a\u9759\u304b\u306a\u4ee3\u66ff\u6848",
    zhDesc: "\u6089\u5c3c\u4e1c\u90e8\u6d77\u5cb8\u7ebf\u4e0a\u7684\u9690\u85cf\u7470\u5b9d\u2014\u2014\u6bd4\u90a6\u8fea\u66f4\u6e05\u9759\u7684\u66ff\u4ee3\u9009\u62e9",
    items: [
      { label: "Bronte Beach",
      jaLabel: "\u30d6\u30ed\u30f3\u30c6\u30a3\u30fb\u30d3\u30fc\u30c1",
      zhLabel: "\u5e03\u6717\u7279\u6d77\u6ee9",
      koLabel: "Bronte Beach", en: "A small, family-friendly beach just 2km south of Bondi. Known for its ocean pool (free), large park with BBQ facilities, and a relaxed vibe. The Bronte to Bondi walk connects the two beaches along the cliffs. Best for a quieter swim or a picnic on the grass.", ja: "ボンダイから南へわずか2kmにある小さな家族向けのビーチです。オーシャンプール（無料）、BBQ設備のある広い公園、のんびりした雰囲気で知られています。Bronte to Bondiウォークが崖沿いに2つのビーチを結んでいます。静かに泳いだり芝生でピクニックをするのに最適です。", zh: "一处小巧的家庭友好型海滩，位于邦迪以南仅2公里处。以海泳池（免费）、带烧烤设施的大公园和轻松的氛围而闻名。Bronte to Bondi步道沿悬崖连接两处海滩。最适合安静地游泳或在草地上野餐。", ko: "Bondi에서 남쪽으로 2km 떨어진 작은 가족 친화적 해변입니다. 바다 수영장(무료), BBQ 시설이 있는 넓은 공원, 여유로운 분위기로 유명합니다. Bronte to Bondi 산책로가 절벽을 따라 두 해변을 연결합니다." },
      { label: "Coogee Beach",
      jaLabel: "\u30af\u30fc\u30b8\u30fc\u30fb\u30d3\u30fc\u30c1",
      zhLabel: "\u5e93\u5409\u6d77\u6ee9",
      koLabel: "Coogee Beach", en: "A beautiful crescent-shaped beach 4km south of Bondi. Bustling beachfront with cafes, restaurants, and pubs right on the sand. The Coogee Pavilion rooftop bar is a great spot for sunset drinks. The Wylie's Baths ocean pool at the southern end is a historic gem.", ja: "ボンダイから南へ4kmにある美しい三日月形のビーチです。砂浜のすぐ前にカフェ、レストラン、パブが並ぶ賑やかな海岸通りです。Coogee Pavilionの屋上バーは夕日を眺めながらの一杯に最適です。南端にあるWylie's Bathsオーシャンプールは歴史ある名所です。", zh: "位于邦迪以南4公里处一处美丽的月牙形海滩。海滨热闹非凡，咖啡馆、餐厅和酒吧就在沙滩边上。Coogee Pavilion屋顶酒吧是日落小酌的好地方。南端的Wylie's Baths海泳池是一处历史瑰宝。", ko: "Bondi에서 남쪽으로 4km 떨어진 아름다운 초승달 모양의 해변입니다. 모래사장 바로 앞에 카페, 레스토랑, 펍이 있는 활기찬 해변가입니다. Coogee Pavilion 옥상 바는 일몰 음주에 좋은 장소입니다." },
      { label: "Clovelly Beach",
      jaLabel: "\u30af\u30ed\u30d9\u30ea\u30fc\u30fb\u30d3\u30fc\u30c1",
      zhLabel: "\u514b\u6d1b\u592b\u5229\u6d77\u6ee9",
      koLabel: "Clovelly Beach", en: "A narrow, sheltered bay between Bronte and Coogee — more like a long pool than a typical beach. Perfect for snorkelling, calm swimming, and families. Protected from waves by the narrow entrance. The underwater trail has info plaques about marine life.", ja: "BronteとCoogeeの間にある狭く守られた入り江 — 典型的なビーチというより長いプールのような感じです。シュノーケリング、穏やかな水泳、家族に最適です。狭い入り口が波を防いでいます。海中遊歩道には海洋生物に関する情報パネルがあります。", zh: "位于布朗特和库吉之间一处狭窄受庇护的海湾——更像一个长长的泳池而非典型海滩。非常适合浮潜、平静游泳和家庭游玩。狭窄的入口挡住了海浪。水下步道设有介绍海洋生物的信息牌。", ko: "Bronte와 Coogee 사이의 좁고 보호된 만 — 전형적인 해변보다 긴 수영장에 가깝습니다. 스노클링, 잔잔한 수영, 가족에게 완벽합니다. 좁은 입구가 파도를 막아줍니다. 해저 산책로에는 해양 생물에 대한 정보 패널이 있습니다." },
      { label: "Gordon's Bay",
      jaLabel: "Gordon's Bay",
      zhLabel: "Gordon's Bay",
      koLabel: "Gordon's Bay", en: "A tiny secluded bay between Clovelly and Coogee. One of Sydney's best snorkelling spots with diverse marine life and a dedicated underwater nature trail. Hard to spot from the road — look for the stairs near the southern end of Clovelly Beach. Quiet even on busy days.", ja: "ClovellyとCoogeeの間にある小さな人里離れた入り江です。多様な海洋生物と専用の海中自然遊歩道がある、シドニー最高のシュノーケリングスポットのひとつです。道路からは見つけにくいです — Clovelly Beachの南端近くの階段を探してください。混雑する日でも静かです。", zh: "位于克洛夫利和库吉之间一处小巧幽静的海湾。拥有多样的海洋生物和专门的水下自然步道，是悉尼最好的浮潜点之一。从公路上很难发现——寻找克洛夫利海滩南端附近的楼梯。即使在繁忙的日子也很安静。", ko: "Clovelly와 Coogee 사이의 작은 한적한 만입니다. 다양한 해양 생물과 전용 해저 자연 산책로가 있는 시드니 최고의 스노클링 명소 중 하나입니다. 도로에서 찾기 어렵습니다 — Clovelly Beach 남쪽 끝 근처 계단을 찾으세요." },
    ],
  },
];

const safetyTips = [
  {
    icon: "Flag",
    title: "Swim Between the Flags",
    en: "Red and yellow flags mark the safest swimming zone supervised by professional lifeguards. Never swim outside the flags — even strong swimmers can be caught in rips. If you see only one flag, stay near it. If no flags are visible, do not swim — the beach may be closed or unpatrolled.", ja: "赤と黄色の旗は、プロのライフガードが監視する最も安全な遊泳区域を示しています。旗の外では絶対に泳がないでください — 泳ぎが得意な人でも離岸流に巻き込まれることがあります。旗が1本しか見えない場合は、その近くにいてください。旗が見えない場合は泳がないでください — ビーチが閉鎖されているか、監視されていない可能性があります。", zh: "红黄旗标示出由专业救生员监控的最安全游泳区。切勿在旗帜之外游泳——即使游泳高手也可能被离岸流卷走。如果只看到一面旗，就待在它附近。如果看不到旗帜，就不要下水——海滩可能已关闭或无人巡逻。",
    ko: "빨간색과 노란색 깃발은 전문 구조원이 감독하는 가장 안전한 수영 구역을 표시합니다. 절대 깃발 밖에서 수영하지 마세요 — 수영을 잘하는 사람도 이안류에 휩쓸릴 수 있습니다. 깃발이 하나만 보이면 그 근처에 머무르세요. 깃발이 보이지 않으면 수영하지 마세요 — 해변이 폐쇄되었거나 순찰 중이 아닐 수 있습니다.",
  },
  {
    icon: "AlertTriangle",
    title: "Rips — What to Do",
    en: "Rip currents are the #1 hazard on Australian beaches. They look like darker, calmer channels between breaking waves. If caught: don't panic, don't fight the current. Float on your back and raise one arm to signal a lifeguard. The rip will eventually release you. Swim parallel to the shore to escape, then swim back in with the waves.", ja: "離岸流はオーストラリアのビーチで最大の危険です。砕ける波の間にある、より暗く穏やかな水路のように見えます。巻き込まれたら：慌てず、流れと戦わないでください。仰向けに浮かび、片腕を上げてライフガードに合図します。離岸流はいずれ解放されます。岸と平行に泳いで抜け出し、その後波に乗って戻ります。", zh: "离岸流是澳大利亚海滩的头号危险。它们看起来像碎浪之间更深、更平静的水道。若被卷入：不要惊慌，不要与水流对抗。仰面漂浮并举起一只手臂向救生员示意。离岸流最终会放开你。平行于海岸游动以脱身，然后随海浪游回岸边。",
    ko: "이안류는 호주 해변의 #1 위험 요소입니다. 부서지는 파도 사이의 더 어둡고 잔잔한 채널처럼 보입니다. 휩쓸리면: 당황하지 말고, 해류와 싸우지 마세요. 등을 대고 떠서 한 팔을 들어 구조원에게 신호하세요. 해안과 평행하게 수영하여 벗어난 후 파도를 타고 돌아오세요.",
  },
  {
    icon: "Sun",
    title: "SPF 50+ Is Essential",
    en: "The Australian sun is extreme — UV index regularly hits 11+ (Extreme) in summer. You can sunburn in just 11 minutes. Apply SPF 50+ broad-spectrum sunscreen 20 minutes before going outside, and reapply every 2 hours and after swimming. Follow Slip, Slop, Slap, Seek, Slide — Slip on a shirt, Slop on sunscreen, Slap on a hat, Seek shade, Slide on sunglasses.", ja: "オーストラリアの日差しは極端です — 夏にはUV指数が日常的に11+（極端）に達します。わずか11分で日焼けします。外出の20分前にSPF 50+の広域スペクトル日焼け止めを塗り、2時間ごと、そして泳いだ後に塗り直してください。Slip、Slop、Slap、Seek、Slideを守りましょう — シャツを着て、日焼け止めを塗り、帽子をかぶり、日陰を探し、サングラスをかけます。", zh: "澳大利亚的日照极其强烈——夏季紫外线指数经常达到11+（极高）。短短11分钟就可能晒伤。外出前20分钟涂抹SPF 50+广谱防晒霜，每2小时及游泳后补涂。遵循Slip、Slop、Slap、Seek、Slide——穿上衣服、涂防晒霜、戴帽子、找阴凉、戴太阳镜。",
    ko: "호주의 자외선은 극심합니다 — 여름에 자외선 지수가 11+(매우 높음)까지 정기적으로 올라갑니다. 11분 만에 햇볕에 탈 수 있습니다. 외출 20분 전에 SPF 50+ 광범위 자외선 차단제를 바르고 2시간마다 그리고 수영 후에 다시 바르세요. Slip(셔츠 입기), Slop(선크림 바르기), Slap(모자 쓰기), Seek(그늘 찾기), Slide(선글라스 끼기)를 기억하세요.",
  },
  {
    icon: "AlertTriangle",
    title: "Bluebottles (Jellyfish)",
    en: "Bluebottle jellyfish are common Nov-Apr. They have a blue-purple float and long tentacles. Their sting is painful but rarely dangerous. If stung: rinse with seawater (NOT fresh water — it activates remaining stingers), pick off tentacles with a gloved hand or stick, apply hot water or ice pack. Do NOT use vinegar on NSW beaches. Lifeguards close beaches if dangerous jellyfish appear.", ja: "ブルーボトル（カツオノエボシ）は11月〜4月に多く見られます。青紫色の浮き袋と長い触手を持っています。刺されると痛いですが、危険なことはほとんどありません。刺された場合：海水で洗い流し（真水はNG — 残った刺細胞を活性化させます）、手袋をした手か棒で触手を取り除き、温水かアイスパックを当てます。NSWのビーチでは酢を使わないでください。危険なクラゲが出るとライフガードがビーチを閉鎖します。", zh: "僧帽水母在11月至4月很常见。它们有蓝紫色的浮囊和长长的触手。被蜇会很痛，但很少危险。若被蜇：用海水冲洗（不要用淡水——它会激活残留的刺细胞），用戴手套的手或棍子挑去触手，敷上热水或冰袋。在新南威尔士州的海滩不要使用醋。若出现危险水母，救生员会关闭海滩。",
    ko: "블루보틀 해파리는 11월-4월에 흔합니다. 청보라색 부유물과 긴 촉수를 가지고 있습니다. 쏘이면 아프지만 위험한 경우는 드뭅니다. 쏘였을 때: 바닷물로 헹구고(민물은 남은 자극기를 활성화시켜 더 나쁨), 장갑 낀 손이나 막대로 촉수를 제거하고, 뜨거운 물이나 얼음팩을 대세요. NSW 해변에서는 식초를 사용하지 마세요.",
  },
  {
    icon: "Shield",
    title: "Rock Platforms & Waves",
    en: "Rock platforms are slippery and dangerous. Sudden 'sneaker waves' can knock you off your feet. Never turn your back on the ocean. Check tide times before walking on rocks — Stick to marked paths. Every year injuries occur from people being swept off rocks while fishing or taking photos.", ja: "岩場のプラットフォームは滑りやすく危険です。突然の「スニーカー波」で足をすくわれることがあります。絶対に海に背を向けないでください。岩の上を歩く前に潮汐時間を確認し、標識された道を通ってください。毎年、釣りや写真撮影中に岩からさらわれて負傷する事故が起きています。", zh: "岩石平台湿滑危险。突如其来的“偷袭浪”可能将你掀倒。切勿背对大海。在岩石上行走前查看潮汐时间——请走标记好的路径。每年都有人因在钓鱼或拍照时被海浪从岩石上卷走而受伤。",
    ko: "암석 플랫폼은 미끄럽고 위험합니다. 갑작스러운 '스니커 파도'가 당신을 넘어뜨릴 수 있습니다. 절대 바다에 등을 보이지 마세요. 바위를 걷기 전에 조수 시간을 확인하고 지정된 경로를 이용하세요. 매년 낚시나 사진 촬영 중 바위에서 휩쓸려 부상당하는 사고가 발생합니다.",
  },
  {
    icon: "Sun",
    title: "Stay Hydrated",
    en: "Sydney summers are hot and humid. Bring at least 1L of water per person for a few hours at the beach. Combined with sun exposure and swimming, dehydration happens fast. Signs include headache, dizziness, dry mouth, and dark urine. Avoid alcohol at the beach in hot weather — it dehydrates you.", ja: "シドニーの夏は暑く湿気があります。ビーチで数時間過ごすなら、1人あたり少なくとも1Lの水を持参してください。日光への露出と泳ぎが重なると、脱水は急速に進みます。症状には頭痛、めまい、口の渇き、濃い尿などがあります。暑い日にビーチでアルコールは避けましょう — 脱水を促進します。", zh: "悉尼的夏天炎热潮湿。在海滩待上几个小时，每人至少带1升水。加上日晒和游泳，脱水会来得很快。症状包括头痛、头晕、口干和尿液颜色变深。炎热天气下在海滩要避免饮酒——它会使你脱水。",
    ko: "시드니 여름은 덥고 습합니다. 해변에서 몇 시간 동안 1인당 최소 1L의 물을 가져오세요. 태양 노출과 수영이 겹치면 탈수가 빠르게 일어납니다. 두통, 어지러움, 입마름, 진한 소변 등의 증상이 있습니다. 더운 날씨에 해변에서 알코올은 피하세요 — 탈수를 촉진합니다.",
  },
];

const packingList = [
  { en: "SPF 50+ sunscreen", ja: "SPF 50+の日焼け止め", zh: "SPF 50+防晒霜", ko: "SPF 50+ 자외선 차단제" },
  { en: "Reusable water bottle (1L+)", ja: "再利用可能な水筒（1L以上）", zh: "可重复使用的水壶（1升以上）", ko: "재사용 가능한 물병 (1L+)" },
  { en: "Sunglasses (polarised recommended)", ja: "サングラス（偏光レンズ推奨）", zh: "太阳镜（建议偏光镜片）", ko: "선글라스 (편광 렌즈 추천)" },
  { en: "Wide-brim hat", ja: "つばの広い帽子", zh: "宽檐帽", ko: "챙 넓은 모자" },
  { en: "Towel", ja: "タオル", zh: "毛巾", ko: "수건" },
  { en: "Rashie / UV protective swim shirt", ja: "ラッシュガード / UVカット水着シャツ", zh: "防晒泳衣／防紫外线泳衣", ko: "래시가드 / 자외선 차단 수영복" },
  { en: "Flip-flops / thongs", ja: "ビーチサンダル", zh: "人字拖", ko: "슬리퍼 / 쪼리" },
  { en: "Dry bag for phone and wallet", ja: "スマホと財布用のドライバッグ", zh: "防水袋，用于装手机和钱包", ko: "휴대폰과 지갑용 방수 가방" },
  { en: "Snacks (sandwich, fruit, muesli bar)", ja: "軽食（サンドイッチ、果物、ミューズリーバー）", zh: "零食（三明治、水果、麦片棒）", ko: "간식 (샌드위치, 과일, 뮤즐리바)" },
  { en: "Light beach shelter or umbrella", ja: "軽量ビーチテントまたはパラソル", zh: "轻便沙滩帐篷或遮阳伞", ko: "경량 비치 텐트 또는 파라솔" },
];

export const metadata = withSeo(
  {

  ...seoFor("/experiences/beaches"),
  title: "Sydney Beaches Guide — Best Beaches, Safety Tips & Things to Do | AussieGuides",
  description:
    "Australia's best Sydney beaches — Bondi, Manly, Palm Beach, Bronte, Coogee. Complete guide with swimming conditions, transport, parking, and coastal walks.",
  },
  "/experiences/beaches"
);

export default function BeachesPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src="/images/bondi_aerial.jpg"
          alt="Bondi Beach, Sydney's most iconic coastline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-stone-900/20" />
        <div className="absolute inset-0 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Beaches</En>
            <Ja>ビーチ</Ja>
            <Zh>海滩</Zh><Ko>해변</Ko>
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.95] mb-4">
            <En translated>Sydney&apos;s best beaches</En>
            <Ja>シドニー最高のビーチ</Ja>
            <Zh>悉尼最佳海滩</Zh><Ko>시드니 최고의 해변</Ko>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            <En translated>From Bondi&apos;s iconic waves to Palm Beach&apos;s secluded shores — a practical guide to Sydney&apos;s coastline, with everything you need to stay safe and have fun.</En>
            <Ja>ボンダイの象徴的な波からパーム・ビーチの静かな海岸まで — シドニーの海岸線をめぐる実用ガイド。安全に楽しむために必要なすべてを。</Ja>
            <Zh>从邦迪的标志性海浪到棕榈滩僻静的海岸——一份悉尼海岸线的实用指南，涵盖安全畅玩所需的一切。</Zh>
            <Ko>본다이의 상징적인 파도부터 팜 비치의 한적한 해안까지 — 안전하고 즐겁게 보낼 수 있는 시드니 해변 실용 가이드.</Ko>
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Beach sections */}
        <div className="space-y-12">
          {sections.map((section, i) => (
            <EditorialSection key={section.id} data={section} index={i} />
          ))}
        </div>

        {/* Safety section — dark editorial callout */}
        <section className="mt-16 mb-12">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="shrink-0 w-8 h-8 rounded-xl bg-sunset/10 text-sunset flex items-center justify-center">
                <AlertTriangle className="w-4 h-4" />
              </span>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset">
                <En translated>Beach safety</En>
                <Ja>ビーチの安全</Ja>
                <Zh>海滩安全</Zh><Ko>해변 안전 수칙</Ko>
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-2">
              <En translated>Stay safe in the water</En>
              <Ja>海で安全に過ごすために</Ja>
              <Zh>在水中保持安全</Zh>
              <Ko>물에서 안전하게 지내기</Ko>
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-400 max-w-2xl">
              <En translated>Australian beaches are beautiful but can be dangerous. Follow these rules every time.</En>
              <Ja>オーストラリアのビーチは美しいですが、危険なこともあります。毎回このルールを守ってください。</Ja>
              <Zh>澳大利亚的海滩很美，但也可能有危险。每次都要遵守这些规则。</Zh>
              <Ko>호주 해변은 아름답지만 위험할 수 있습니다. 매번 이 규칙을 지키세요.</Ko>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safetyTips.map((tip, i) => (
              <div
                key={tip.title}
                className={`reveal reveal-delay-${(i % 5) + 1} p-6 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white border border-stone-800 dark:border-stone-700 shadow-lg`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="shrink-0 w-8 h-8 rounded-xl bg-sunset/20 text-sunset flex items-center justify-center">
                    {tip.icon === "Flag" ? <Flag className="w-4 h-4" /> :
                     tip.icon === "AlertTriangle" ? <AlertTriangle className="w-4 h-4" /> :
                     tip.icon === "Sun" ? <Sun className="w-4 h-4" /> :
                     <Shield className="w-4 h-4" />}
                  </span>
                  <p className="font-serif text-lg leading-tight">
                    <En>{tip.title}</En>
                    <Ko>{tip.title}</Ko>
                  </p>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  <En translated>{tip.en}</En>
                  <Ja>{pickLocale("ja", tip)}</Ja>
                  <Zh>{pickLocale("zh", tip)}</Zh>
                  <Ko>{tip.ko}</Ko>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Packing list */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="shrink-0 w-8 h-8 rounded-xl bg-coast/10 text-coast flex items-center justify-center">
              <Umbrella className="w-4 h-4" />
            </span>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-coast">
              <En translated>Packing list</En>
              <Ja>持ち物リスト</Ja>
              <Zh>行李清单</Zh><Ko>준비물 체크리스트</Ko>
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-2">
            <En translated>What to bring to the beach</En>
            <Ja>ビーチに持って行くもの</Ja>
            <Zh>去海滩要带什么</Zh>
            <Ko>해변에 가져갈 것</Ko>
          </h2>
          <p className="text-sm text-stone-500 dark:text-stone-400 max-w-2xl mb-6">
            <En translated>Tick these off before you head out — the Australian sun waits for no one.</En>
            <Ja>出かける前にこれらをチェックしましょう — オーストラリアの日差しは誰も待ってくれません。</Ja>
            <Zh>出发前请逐项打勾——澳大利亚的阳光可不等人。</Zh>
            <Ko>나가기 전에 확인하세요 — 호주의 태양은 기다려주지 않습니다.</Ko>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {packingList.map((item, i) => (
              <div
                key={item.en}
                className={`reveal reveal-delay-${(i % 5) + 1} flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border hover:border-coast/40 hover:shadow-md transition-all`}
              >
                <span className="shrink-0 w-5 h-5 rounded-full bg-coast/10 text-coast flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-snug">
                  <En translated>{item.en}</En>
                  <Ja>{pickLocale("ja", item)}</Ja>
                  <Zh>{pickLocale("zh", item)}</Zh>
                  <Ko>{item.ko}</Ko>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency callout */}
        <section className="rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 dark:from-stone-800 dark:to-stone-900 text-white p-6 md:p-8 shadow-lg border border-stone-700/50">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Emergency</En>
            <Ja>緊急時の連絡先</Ja>
            <Zh>紧急情况</Zh><Ko>비상 연락</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En translated>Before you hit the sand.</En>
            <Ja>砂浜に出る前に。</Ja>
            <Zh>踏上沙滩之前。</Zh>
            <Ko>모래사장에 가기 전에.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En translated>Call 000 for police, fire, or ambulance emergencies. For Beachsafe information and patrol status, download the Beachsafe app or check beachsafe.org.au. Surf Life Saving NSW patrols over 300 beaches during summer. Look for the red and yellow flags — if you don&apos;t see them, find a different spot.</En>
            <Ja>警察、消防、救急の緊急時は000に電話してください。Beachsafeの情報とパトロール状況は、Beachsafeアプリをダウンロードするかbeachsafe.org.auで確認できます。Surf Life Saving NSWは夏の間300以上のビーチをパトロールしています。赤と黄色の旗を探してください — 見当たらなければ、別の場所を探しましょう。</Ja>
            <Zh>遇到警察、消防或救护车紧急情况请拨打000。关于Beachsafe的信息和巡逻状态，请下载Beachsafe应用或查看beachsafe.org.au。Surf Life Saving NSW在夏季巡逻300多个海滩。请寻找红黄相间的旗帜——如果看不到，就换一个地方。</Zh>
            <Ko>경찰, 소방, 구급차 응급 상황은 000으로 전화하세요. 해변 안전 정보와 순찰 상태는 Beachsafe 앱을 다운로드하거나 beachsafe.org.au를 확인하세요. Surf Life Saving NSW는 여름 동안 300개 이상의 해변을 순찰합니다. 빨간색과 노란색 깃발을 찾으세요 — 보이지 않으면 다른 장소를 찾으세요.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:000" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">000 — Emergency</a>
            <a href="https://beachsafe.org.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Beachsafe ↗</a>
            <a href="https://www.surflifesaving.com.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Surf Life Saving ↗</a>
          </div>
        </section>
      </div>
    </div>
  );
}

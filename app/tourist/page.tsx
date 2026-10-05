// Server component — bilingual Sydney tourist guide.
// Redesigned in editorial style.

import type { Metadata } from "next";
import { headers } from "next/headers";
import { pageMeta } from "@/lib/page-meta";
import Link from "next/link";
import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { Beach, Building2, Coin, Smartphone, Tree } from "@/components/Icons";
import { articleLdJson, faqLdJson, seoFor, withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";

export async function generateMetadata(): Promise<Metadata> {
  // Per request, so the tab title and the search-result headline are in the reader's
  // language. The canonical and hreflang come from the root layout, which reads the same
  // header. `Metadata` is imported by every page that uses withSeo.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return withSeo({

  ...seoFor("/tourist"),
  title: pageMeta("/tourist", locale).title,
  description: pageMeta("/tourist", locale).description,
  },
  "/tourist"
);
}


type TouristSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; koLabel?: string; jaLabel?: string; zhLabel?: string; en: string; ko: string; ja?: string; zh?: string }>;
};

const sections: TouristSection[] = [
  {
    id: "top-sights",
    iconKey: "Building2",
    accent: "coast",
    title: "Top 10 Sydney Must-Sees",
    koTitle: "시드니 꼭 가볼 10곳",
    jaTitle: "\u30b7\u30c9\u30cb\u30fc\u5fc5\u898b\u30c8\u30c3\u30d710",
    zhTitle: "\u6089\u5c3c\u5341\u5927\u5fc5\u770b\u666f\u70b9",
    desc: "Sydney's iconic attractions you cannot miss",
    koDesc: "시드니의 아이코닉한 관광지",
    jaDesc: "\u898b\u9003\u305b\u306a\u3044\u30b7\u30c9\u30cb\u30fc\u306e\u8c61\u5fb4\u7684\u306a\u89b3\u5149\u540d\u6240",
    zhDesc: "\u6089\u5c3c\u4e0d\u53ef\u9519\u8fc7\u7684\u6807\u5fd7\u6027\u666f\u70b9",
    img: "/images/Taronga_Zoo,_Sydney_(483465)_(24793297802).jpg",
    items: [
      { label: "1. Sydney Opera House", jaLabel: "1. \u30b7\u30c9\u30cb\u30fc\u30fb\u30aa\u30da\u30e9\u30cf\u30a6\u30b9", zhLabel: "1. \u6089\u5c3c\u6b4c\u5267\u9662", koLabel: "1. \uc2dc\ub4dc\ub2c8 \uc624\ud398\ub77c \ud558\uc6b0\uc2a4", en: "Australia's most famous landmark. Take a guided tour inside or book a show — even just walking around the outside with a coffee is a memorable experience. Located at Bennelong Point, Circular Quay. Free to explore the exterior and foyer.", ja: "オーストラリアで最も有名なランドマークです。中のガイドツアーに参加するか、公演を予約しましょう — コーヒー片手に外まわりを歩くだけでも忘れられない体験になります。Circular QuayのBennelong Pointにあります。外観とロビーは無料で見学できます。", zh: "澳大利亚最著名的地标。可以参加内部导览或预订一场演出——就算只是端着咖啡在外面走一圈，也是难忘的体验。位于 Circular Quay 的 Bennelong Point。外观和门厅可免费参观。", ko: "호주에서 가장 유명한 랜드마크입니다. 내부 가이드 투어를 하거나 공연을 예약하세요 — 커피 한잔 들고 외부를 산책하는 것만으로도 잊지 못할 경험입니다. Circular Quay의 Bennelong Point에 위치해 있습니다. 외부와 로비는 무료로 관람할 수 있습니다." },
      { label: "2. Sydney Harbour Bridge", jaLabel: "2. \u30cf\u30fc\u30d0\u30fc\u30d6\u30ea\u30c3\u30b8", zhLabel: "2. \u6d77\u6e2f\u5927\u6865", koLabel: "2. \uc2dc\ub4dc\ub2c8 \ud558\ubc84 \ube0c\ub9ac\uc9c0", en: "Walk across for free (15 min from The Rocks to Milsons Point) or climb to the top with BridgeClimb if you are feeling adventurous. The views from the top are absolutely spectacular — worth every cent.", ja: "徒歩で無料で渡れます（The RocksからMilsons Pointまで15分）。冒険心があるなら、BridgeClimbで頂上まで登ることもできます。頂上からの眺めはまさに壮観で、その価値は十分にあります。", zh: "可以免费步行过桥（从 The Rocks 到 Milsons Point 约 15 分钟），如果你喜欢冒险，还可以参加 BridgeClimb 爬到桥顶。顶上的景色极其壮观——每一分钱都值得。", ko: "무료로 걸어서 건널 수 있고(The Rocks에서 Milsons Point까지 15분), 모험심이 있다면 BridgeClimb으로 정상까지 올라갈 수 있습니다. 정상에서의 전망은 정말 장관입니다." },
      { label: "3. Bondi to Coogee Coastal Walk", jaLabel: "3. \u30dc\u30f3\u30c0\u30a4\u301c\u30af\u30fc\u30b8\u30fc\u30fb\u30a6\u30a9\u30fc\u30af", zhLabel: "3. \u90a6\u8fea\u81f3\u5e93\u5409\u6b65\u9053", koLabel: "3. \ubcf8\ub2e4\uc774-\ucfe0\uc9c0 \ud574\uc548 \uc0b0\ucc45\ub85c", en: "A stunning 6km coastal walk along Sydney's eastern beaches. Takes about 2 hours one way with plenty of stops for photos. Passes through Tamarama, Bronte, and Clovelly beaches. Free, accessible, and absolutely beautiful on a sunny day.", ja: "シドニー東部のビーチ沿いを歩く、見事な6kmの海岸遊歩道です。写真を撮るために何度も止まりながら、片道約2時間です。Tamarama、Bronte、Clovellyのビーチを通ります。無料でアクセスもよく、晴れた日は本当に美しいです。", zh: "一条沿着悉尼东部海滩的惊艳 6 公里海岸步道。沿途多次停下拍照的话，单程约需 2 小时。途经 Tamarama、Bronte 和 Clovelly 海滩。免费、交通方便，晴天时美得无可挑剔。", ko: "시드니 동부 해변을 따라 이어지는 6km의 아름다운 해안 산책로입니다. 편도 약 2시간. Tamarama, Bronte, Clovelly 해변을 지납니다. 무료이고 접근성이 좋으며, 링은 날에는 정말 아름답습니다." },
      { label: "4. Taronga Zoo", jaLabel: "4. \u30bf\u30ed\u30f3\u30ac\u52d5\u7269\u5712", zhLabel: "4. \u5854\u9f99\u52a0\u52a8\u7269\u56ed", koLabel: "4. \ud0c0\ub871\uac00 \ub3d9\ubb3c\uc6d0", en: "World-class zoo with native Australian animals (kangaroos, koalas, wombats) and exotic species. Take the ferry from Circular Quay — it's a 12-minute scenic ride and the zoo has stunning harbour views. Tickets are around $50 AUD for adults.", ja: "オーストラリア固有の動物（カンガルー、コアラ、ウォンバット）と外来種をそろえた世界水準の動物園です。Circular Quayからフェリーに乗りましょう — 12分の景色のよい船旅で、動物園からは素晴らしい港の眺めが楽しめます。大人のチケットは約$50 AUDです。", zh: "一座世界级动物园，既有澳大利亚本土动物（袋鼠、考拉、袋熊），也有外来物种。从 Circular Quay 乘渡轮前往——12 分钟的观光航程，动物园里还能欣赏到迷人的海港景色。成人门票约 $50 AUD。", ko: "호주 토종 동물(캐거루, 코알라, 웜뱃)과 이국적인 동물들을 볼 수 있는 세계적 수준의 동물원입니다. Circular Quay에서 페리를 타고 가는 것이 좋습니다 — 12분의 경치 좋은 항해이며 동물원에서도 아름다운 항구 전망을 즐길 수 있습니다. 성인 티켓은 약 $50 AUD입니다." },
      { label: "5. Blue Mountains", jaLabel: "5. \u30d6\u30eb\u30fc\u30fb\u30de\u30a6\u30f3\u30c6\u30f3\u30ba", zhLabel: "5. \u84dd\u5c71", koLabel: "5. \ube14\ub8e8\ub9c8\uc6b4\ud2f4", en: "A perfect day trip from Sydney. Take the train from Central Station to Katoomba (about 2 hours). See the Three Sisters rock formation, ride the scenic railway (steepest in the world), and walk through ancient rainforest. Pack a jacket — it's cooler up there!", ja: "シドニーからの完璧な日帰り旅行です。Central StationからKatoombaまで電車で約2時間。Three Sistersの岩峰を見て、世界一急なスカイレールに乗り、太古の熱帯雨林を散策しましょう。上着を持って行きましょう — 山の上は涼しいですよ！", zh: "从悉尼出发的完美一日游。从 Central Station 乘火车到 Katoomba（约 2 小时）。看三姐妹岩，乘坐观光铁路（世界上最陡的），穿越古老的热带雨林。记得带件外套——山上更凉！", ko: "시드니에서 완벽한 당일 여행지입니다. Central Station에서 Katoomba까지 기차로 약 2시간. Three Sisters 바위 절벽을 보고, 세계에서 가장 가파른 스카이 레일을 타고, 고대 열대우림을 산책하세요. 재킷을 처기세요 — 산 위는 더 시원합니다!" },
      { label: "6. Royal Botanic Garden Sydney", jaLabel: "6. \u30ed\u30a4\u30e4\u30eb\u30fb\u30dc\u30bf\u30cb\u30c3\u30af\u30fb\u30ac\u30fc\u30c7\u30f3", zhLabel: "6. \u6089\u5c3c\u7687\u5bb6\u690d\u7269\u56ed", koLabel: "6. \uc2dc\ub4dc\ub2c8 \uc655\ub9bd \uc2dd\ubb3c\uc6d0", en: "Free entry, stunning harbourside location right next to the Opera House. Massive lawns perfect for picnics, beautiful garden sections from around the world, and incredible views of the harbour. Open daily from sunrise to sunset.", ja: "入場無料で、オペラハウスのすぐ隣という港辺の絶好のロケーションです。ピクニックにぴったりの広大な芝生、世界各地の美しい庭園エリア、そして港の素晴らしい眺めが楽しめます。毎日日の出から日没まで開園しています。", zh: "免费入场，紧邻歌剧院的绝佳海港位置。宽阔的草坪非常适合野餐，还有来自世界各地的美丽园区，以及令人惊叹的海港景色。每天从日出开放到日落。", ko: "무료 입장, 오페라 하우스 바로 옆에 있는 항구 변의 아름다운 위치입니다. 피크닉에 완벽한 넓은 잔디밭, 전 세계의 아름다운 정원 섹션, 그리고 항구의 장관을 감상하세요. 매일 일출부터 일몰까지 개장합니다." },
      { label: "7. The Rocks", jaLabel: "7. \u30b6\u30fb\u30ed\u30c3\u30af\u30b9", zhLabel: "7. \u5ca9\u77f3\u533a", koLabel: "7. \ub354 \ub85d\uc2a4", en: "Sydney's historic district — the first European settlement site in Australia. Cobblestone streets, old pubs, weekend markets with local crafts and food, and fascinating history tours. Free to wander. Try the weekend market (Sat-Sun) for unique souvenirs.", ja: "シドニーの歴史地区 — オーストラリア最初のヨーロッパ人入植地です。石畳の道、古いパブ、地元の工芸品や食べ物が並ぶ週末マーケット、そして魅力的な歴史ツアーがあります。散策は無料です。週末マーケット（土〜日）で珍しいお土産を探してみましょう。", zh: "悉尼的历史街区——澳大利亚最早的欧洲定居点。鹅卵石街道、老酒吧、汇聚本地手工艺品和美食的周末市集，还有引人入胜的历史导览。随意漫步免费。周末市集（周六至周日）可以淘到别致的纪念品。", ko: "시드니의 역사 지구 — 호주 최초의 유럽 정착지입니다. 자갈길, 오래된 펍, 지역 공예품과 음식이 있는 주말 시장이 있습니다. 산책은 무료입니다. 주말 시장(토-일)에서 독특한 기념품을 찾아보세요." },
      { label: "8. Manly Beach", jaLabel: "8. \u30de\u30f3\u30ea\u30fc\u30d3\u30fc\u30c1", zhLabel: "8. \u66fc\u5229\u6d77\u6ee9", koLabel: "8. \ub9e8\ub9ac \ube44\uce58", en: "Take the iconic 30-minute ferry from Circular Quay to Manly — one of the best cheap experiences in Sydney ($7.20 AUD each way). The Corso (pedestrian strip) leads from the wharf straight to the beach. Great surf, nice cafes, and a relaxed beach vibe.", ja: "Circular QuayからManlyまで、象徴的な30分のフェリーに乗りましょう — シドニーで最もお得な体験のひとつです（片道$7.20 AUD）。Corso（歩行者専用の並木道）が桟橋からビーチまでまっすぐ続いています。よい波、素敵なカフェ、そしてゆったりとしたビーチの雰囲気が魅力です。", zh: "从 Circular Quay 搭乘标志性的 30 分钟渡轮到曼利——这是悉尼最超值的体验之一（单程 $7.20 AUD）。The Corso（步行街）从码头一直通向海滩。海浪很棒，咖啡馆不错，还有悠闲的海滩氛围。", ko: "Circular Quay에서 Manly까지 아이코닉한 30분 페리를 타세요 — 시드니에서 가장 저렴한 최고의 경험 중 하나입니다(편도 $7.20 AUD). Corso(보행자 전용 도로)가 부두에서 해변까지 곡바로 이어집니다. 좋은 파도, 멋진 카페, 여유로운 비치 분위기가 일품입니다." },
      { label: "9. Featherdale Wildlife Park", jaLabel: "9. \u30d5\u30a7\u30b6\u30fc\u30c7\u30fc\u30eb\u91ce\u751f\u52d5\u7269\u516c\u5712", zhLabel: "9. Featherdale\u91ce\u751f\u52a8\u7269\u56ed", koLabel: "9. \ud398\ub354\ub370\uc77c \uc57c\uc0dd\ub3d9\ubb3c \uacf5\uc6d0", en: "One of the best places to get up close with Australian wildlife. You can pet kangaroos, hold a koala (for photos), and see wombats, echidnas, and crocodiles. Located in Western Sydney, about 45 minutes by car or bus from the CBD.", ja: "オーストラリアの野生動物と間近にふれあえる最高の場所のひとつです。カンガルーにさわったり、コアラを抱っこしたり（写真撮影用）、ウォンバットやハリモグラ、ワニを見ることもできます。シドニー西部にあり、CBDから車かバスで約45分です。", zh: "近距离接触澳大利亚野生动物的最佳去处之一。你可以抚摸袋鼠、抱考拉（拍照），还能看到袋熊、针鼹和鳄鱼。位于悉尼西部，从市中心开车或坐公交约 45 分钟。", ko: "호주 야생 동물과 가까이서 교감할 수 있는 최고의 장소 중 하나입니다. 캐거루를 만져보고, 코알라를 안고(사진 촬영), 웜뱃, 바늘두지, 악어도 볼 수 있습니다. 시드니 서부에 위치해 있으며, CBD에서 차나 버스로 약 45분 거리입니다." },
      { label: "10. Sydney Harbour Ferry", jaLabel: "10. \u30b7\u30c9\u30cb\u30fc\u6e2f\u30d5\u30a7\u30ea\u30fc", zhLabel: "10. \u6089\u5c3c\u6d77\u6e2f\u6e21\u8f6e", koLabel: "10. \uc2dc\ub4dc\ub2c8 \ud558\ubc84 \ud398\ub9ac", en: "The best cheap scenic tour in Australia. A regular ferry ride ($7.20 AUD) from Circular Quay to anywhere gives you a world-class harbour tour. The F1 to Manly is the most scenic, but the F2 to Taronga Zoo and F4 to Pyrmont are also fantastic. Sit on the outer deck for the best views.", ja: "オーストラリアで最もお得な絶景ツアーです。Circular Quayからどこへ行くにも普通のフェリー（$7.20 AUD）に乗れば、世界水準のハーバーツアーになります。Manly行きのF1が最も景色がよく、Taronga Zoo行きのF2とPyrmont行きのF4も素晴らしいです。最高の眺めを楽しむには外側のデッキに座りましょう。", zh: "澳大利亚最超值的观光之旅。从 Circular Quay 坐普通渡轮（$7.20 AUD）去任何方向，都是一趟世界级的海港游览。开往曼利的 F1 景色最美，开往 Taronga Zoo 的 F2 和开往 Pyrmont 的 F4 也很棒。想欣赏最佳景色，就坐在外侧甲板上。", ko: "호주에서 가장 저렴한 최고의 경치 투어입니다. Circular Quay에서 아무 방향으로나 가는 일반 페리($7.20 AUD)는 세계적 수준의 항구 투어가 됩니다. Manly행 F1이 가장 경치가 좋지만, Taronga Zoo행 F2와 Pyrmont행 F4도 환상적입니다. 최고의 전망을 위해 바깥 데크에 앉으세요." },
    ],
  },
  {
    id: "safety-beach",
    iconKey: "Beach",
    accent: "sky",
    title: "Beach Safety",
    koTitle: "비치 안전",
    jaTitle: "\u30d3\u30fc\u30c1\u306e\u5b89\u5168",
    zhTitle: "\u6d77\u6ee9\u5b89\u5168",
    desc: "What to watch out for at Sydney's beaches",
    koDesc: "시드니 해변에서 주의할 점",
    jaDesc: "\u30b7\u30c9\u30cb\u30fc\u306e\u30d3\u30fc\u30c1\u3067\u6ce8\u610f\u3059\u3079\u304d\u3053\u3068",
    zhDesc: "\u6089\u5c3c\u6d77\u6ee9\u9700\u8981\u6ce8\u610f\u7684\u4e8b\u9879",
    img: "/images/Beach_flags_at_Northcliffe_Beach,_Surfers_Paradise,_Queensland_04.jpg",
    items: [
      { label: "Always Swim Between the Flags", jaLabel: "\u5fc5\u305a\u65d7\u306e\u9593\u3067\u6cf3\u3050", zhLabel: "\u52a1\u5fc5\u5728\u65d7\u5b50\u4e4b\u95f4\u6e38\u6cf3", koLabel: "\ud56d\uc0c1 \uae43\ubc1c \uc0ac\uc774\uc5d0\uc11c \uc218\uc601\ud558\uc138\uc694", en: "Red and yellow flags mark the safest swimming zone supervised by lifeguards. NEVER swim outside the flags — even if it looks calm, rips can pull you out quickly. If caught in a rip: stay calm, float and signal for help, do not fight the current.", ja: "赤と黄色の旗は、ライフガードが見守る最も安全な遊泳エリアを示しています。旗の外では絶対に泳がないでください — 穏やかに見えても、離岸流に一気に引き込まれることがあります。離岸流に巻き込まれたら、落ち着いて、浮きながら助けを求め、流れに逆らわないでください。", zh: "红黄双色旗标出的是有救生员看护的最安全游泳区。绝不要游到旗子以外——即使看起来风平浪静，离岸流也可能迅速把你卷走。若被离岸流困住：保持冷静，漂浮并示意求救，不要与水流对抗。", ko: "빨간색과 노란색 깃발은 인명 구조원이 감독하는 가장 안전한 수영 구역입니다. 절대로 깃발 밖에서 수영하지 마세요 — 이안류에 휩쓸리면: 침착하게, 도움을 요청하고, 해류와 싸우지 마세요." },
      { label: "Read the Beach Safety Signs", jaLabel: "\u30d3\u30fc\u30c1\u306e\u5b89\u5168\u6a19\u8b58\u3092\u8aad\u3080", zhLabel: "\u9605\u8bfb\u6d77\u6ee9\u5b89\u5168\u6807\u793a", koLabel: "\ud574\ubcc0 \uc548\uc804 \ud45c\uc9c0\ud310 \ud655\uc778", en: "Before entering the water, check the safety signs at the beach entrance. They show today's conditions — safe to swim, water quality, and any specific hazards like jellyfish or sharks. If in doubt, ask a lifeguard.", ja: "水に入る前に、ビーチの入口にある安全標識を確認しましょう。今日の状況 — 遊泳の可否、水質、クラゲやサメといった具体的な危険 — が示されています。迷ったら、ライフガードに尋ねましょう。", zh: "下水之前，先看看海滩入口处的安全标示。上面会显示当天的情况——是否适合游泳、水质，以及水母或鲨鱼等具体风险。如有疑问，问一问救生员。", ko: "물에 들어가기 전에 해변 입구의 안전 표지판을 확인하세요. 오늘의 상황, 수질, 해파리나 상어 같은 위험 요소를 알려줍니다." },
      { label: "Jellyfish Season (Nov-Apr)", jaLabel: "\u30af\u30e9\u30b2\u306e\u5b63\u7bc0\uff0811\u6708\u301c4\u6708\uff09", zhLabel: "\u6c34\u6bcd\u5b63\u8282\uff0811\u6708\u81f34\u6708\uff09", koLabel: "\ud574\ud30c\ub9ac \uc2dc\uc98c (11\uc6d4~4\uc6d4)", en: "Bluebottles are common from November to April. Painful but rarely dangerous. Rinse with seawater (not fresh water — it makes it worse), apply heat if available. Do NOT use vinegar on bluebottles in NSW. Lifeguards close the beach if dangerous species appear.", ja: "ブルーボトル（カツオノエボシ）は11月から4月にかけてよく見られます。痛みは強いものの、危険はほとんどありません。海水で洗い流し（真水は悪化させるので使わない）、可能なら温めます。NSWではブルーボトルに酢を使わないでください。危険な種類が現れた場合、ライフガードはビーチを閉鎖します。", zh: "蓝瓶水母在 11 月到次年 4 月很常见。会疼，但很少致命。用海水冲洗（不要用淡水——会让情况更糟），条件允许的话热敷。在新南威尔士州，蓝瓶水母蜇伤不要用醋。如果出现危险品种，救生员会关闭海滩。", ko: "블루보틀 해파리는 11월-4월에 많습니다. 고통스러우나 드물게 위험하지는 않습니다. 바닷물로 헹구세요. NSW에서는 식초를 사용하지 마세요." },
      { label: "Sun Protection is Critical", jaLabel: "\u7d2b\u5916\u7dda\u5bfe\u7b56\u306f\u5fc5\u9808", zhLabel: "\u9632\u6652\u81f3\u5173\u91cd\u8981", koLabel: "\uc790\uc678\uc120 \ucc28\ub2e8 \ud544\uc218", en: "The Australian sun is brutal — you can get burned in 11 minutes in summer. Apply SPF 50+ sunscreen 20 minutes before swimming, reapply every 2 hours. Follow Slip, Slop, Slap, Seek, Slide. UV index regularly hits Extreme (11+) in summer.", ja: "オーストラリアの日差しは強烈です — 夏は11分で日焼けしてしまいます。SPF 50+の日焼け止めを泳ぐ20分前に塗り、2時間ごとに塗り直しましょう。Slip, Slop, Slap, Seek, Slideの合言葉を守りましょう。夏はUV指数がしばしば極端（11以上）に達します。", zh: "澳大利亚的阳光非常毒辣——夏天 11 分钟就可能晒伤。游泳前 20 分钟涂抹 SPF 50+ 的防晒霜，每 2 小时补涂一次。遵循 Slip, Slop, Slap, Seek, Slide 五原则。夏季紫外线指数经常达到极高（11+）。", ko: "호주의 자외선은 매우 강력합니다 — 여름 11분 만에 화상을 입을 수 있습니다. SPF 50+ 자외선 차단제를 사용하고 2시간마다 다시 바르세요." },
      { label: "Rock Platforms and Cliffs", jaLabel: "\u5ca9\u5834\u3068\u5d16", zhLabel: "\u5ca9\u77f3\u5e73\u53f0\u4e0e\u60ac\u5d16", koLabel: "\uc554\ubc18\uacfc \uc808\ubcbd", en: "Be careful on rock platforms — slippery rocks, sudden waves, and unstable edges cause injuries every year. Check tide times before walking on platforms (download Tide Tracker app). Never turn your back on the ocean. Stay on marked paths.", ja: "岩場では注意してください — 滑る岩、突然の波、不安定な縁は毎年けがの原因になっています。岩場を歩く前に潮汐時間を確認しましょう（Tide Trackerアプリをダウンロード）。海に背を向けないでください。標識された道から外れないようにしましょう。", zh: "在岩石平台上要小心——湿滑的岩石、突如其来的海浪和不稳固的边缘每年都会造成受伤。上平台行走前先查潮汐时间（下载 Tide Tracker 应用）。绝不要背对大海。走有标记的路径。", ko: "암석 플랫폼에서 조심하세요 — 미끄러운 바위, 갑작스러운 파도가 매년 사고를 발생시킵니다. 조수 시간을 확인하고 바다에 등을 보이지 마세요." },
    ],
  },
  {
    id: "safety-bushland",
    iconKey: "Tree",
    accent: "rose",
    title: "Bushland and National Parks",
    koTitle: "숲과 국립공원",
    jaTitle: "\u30d6\u30c3\u30b7\u30e5\u30e9\u30f3\u30c9\u3068\u56fd\u7acb\u516c\u5712",
    zhTitle: "\u4e1b\u6797\u4e0e\u56fd\u5bb6\u516c\u56ed",
    desc: "How to stay safe in Australian wilderness",
    koDesc: "호주 황무지에서 안전하게 지내는 방법",
    jaDesc: "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306e\u5927\u81ea\u7136\u3067\u5b89\u5168\u306b\u904e\u3054\u3059\u65b9\u6cd5",
    zhDesc: "\u5982\u4f55\u5728\u6fb3\u5927\u5229\u4e9a\u8352\u91ce\u4e2d\u4fdd\u6301\u5b89\u5168",
    img: "/images/Walking_track_sign_towards_Andrew_Laurie_Lookout_in_Gloucester_Tops,_Barrington_Tops_National_Park.jpg",
    items: [
      { label: "Snakes — Give Them Space", jaLabel: "\u30d8\u30d3 \u2014 \u8ddd\u96e2\u3092\u53d6\u308b", zhLabel: "\u86c7\u2014\u2014\u4fdd\u6301\u8ddd\u79bb", koLabel: "\ubc40 \u2014 \uac70\ub9ac\ub97c \ub450\uc138\uc694", en: "Snakes are active in warmer months (Oct-Apr) throughout Sydney's national parks. If you see one: stop, back away slowly, give it space to escape. Do NOT try to pick it up or corner it. Walk loudly on tracks — snakes feel vibration and move away.", ja: "暖かい時期（10月〜4月）には、シドニーの国立公園全域でヘビが活発になります。見かけたら：立ち止まり、ゆっくり後ずさりし、逃げられる空間を与えましょう。絶対に持ち上げたり追い詰めたりしないでください。歩道では足音を立てて歩きましょう — ヘビは振動を感じて離れていきます。", zh: "在较温暖的月份（10 月至 4 月），悉尼各国家公园里蛇类都很活跃。如果看到蛇：停下脚步，慢慢后退，给它逃走的空间。绝不要试图抓它或把它逼到角落。在步道上要走出声响——蛇能感觉到震动，会自行离开。", ko: "뱀은 따뜻한 달(10월-4월)에 활발합니다. 뱀을 보면: 멈추고, 천천히 뒤로 물러나세요. 절대 잡거나 구석으로 몰지 마세요. 시끄러운 걸음으로 걸으면 뱀이 진동을 느껴 자리를 피합니다." },
      { label: "Ticks — A Year-Round Risk", jaLabel: "\u30c0\u30cb \u2014 \u4e00\u5e74\u4e2d\u306e\u5371\u967a", zhLabel: "\u8731\u866b\u2014\u2014\u5168\u5e74\u90fd\u6709\u98ce\u9669", koLabel: "\uc9c4\ub4dc\uae30 \u2014 \uc5f0\uc911 \uc704\ud5d8", en: "Bush ticks (Ixodes holocyclus) found in bushy areas year-round. Can cause tick paralysis. Wear long sleeves and pants, use DEET repellent. After a walk, check your entire body — behind ears, hairline, armpits, and groin.", ja: "ブッシュティック（Ixodes holocyclus）は藪の多い地域で一年中見られます。ダニ麻痺を引き起こすことがあります。長袖と長ズボンを着用し、DEETの虫よけを使いましょう。散策後は全身 — 耳の後ろ、生え際、わきの下、股間 — を確認してください。", zh: "丛林蜱（Ixodes holocyclus）在灌木丛生的地区全年都有。可能引起蜱瘫痪。穿长袖长裤，使用含 DEET 的驱虫剂。散步后检查全身——耳后、发际、腋下和腹股沟。", ko: "숲 진드기는 연중 발견됩니다. 진드기 마비를 일으킬 수 있습니다. 긴 옷을 입고 DEET 방충제를 사용하세요. 산책 후 귀 뒤, 머리카락, 겨드랑이, 사타구니를 확인하세요." },
      { label: "Total Fire Ban Days", jaLabel: "\u5168\u9762\u706b\u6c17\u7981\u6b62\u306e\u65e5", zhLabel: "\u5168\u9762\u7981\u706b\u65e5", koLabel: "\uc804\uba74 \ud654\uae30 \uae08\uc9c0\uc77c", en: "On Total Fire Ban days, lighting any fire or BBQ (even gas) in the open is illegal. Check the Fire Danger Rating on the RFS website or Fires Near Me app. Many national parks close on severe or extreme fire days. If caught: ring 000.", ja: "全面火気禁止（Total Fire Ban）の日には、屋外で火やBBQ（ガスであっても）を使うことは違法です。RFSのウェブサイトまたはFires Near Meアプリで火災危険度を確認しましょう。深刻または極端な火災危険日には多くの国立公園が閉鎖されます。火に巻き込まれたら：000に電話してください。", zh: "在全面禁火日（Total Fire Ban），在户外点火或使用烧烤炉（即使是燃气烧烤炉）都属违法。请到 RFS 网站或 Fires Near Me 应用查看火险等级。许多国家公园在严重或极高火险日会关闭。如果被困：拨打 000。", ko: "산불 금지일에 야외에서 화기 사용(가스 BBQ도 포함)은 불법입니다. RFS 웹사이트에서 산불 위험 등급을 확인하세요. 심각한 산불일에 많은 국립공원이 폐쇄됩니다." },
      { label: "Trail Safety & Emergency", jaLabel: "\u30c8\u30ec\u30a4\u30eb\u306e\u5b89\u5168\u3068\u7dca\u6025\u6642", zhLabel: "\u6b65\u9053\u5b89\u5168\u4e0e\u7d27\u6025\u60c5\u51b5", koLabel: "\uc0b0\ucc45\ub85c \uc548\uc804 \ubc0f \ube44\uc0c1 \uc0c1\ud669", en: "Mobile coverage is unreliable in many parks. Download offline maps before you go. Carry a personal locator beacon for remote hikes. Tell someone your route and expected return time. Carry enough water. Call 112 from a mobile in emergencies.", ja: "多くの公園では携帯電話の電波が不安定です。出発前にオフライン地図をダウンロードしましょう。遠隔地のハイキングにはパーソナルロケータービーコンを持参しましょう。ルートと帰還予定時刻を誰かに伝えましょう。十分な水を持参しましょう。緊急時は携帯電話から112に電話してください。", zh: "许多公园的手机信号都不可靠。出发前下载离线地图。去偏远地区徒步要携带个人定位信标。告诉别人你的路线和预计返回时间。带足饮用水。紧急情况用手机拨打 112。", ko: "많은 국립공원에서 모바일 신호가 불안정합니다. 오프라인 지도를 다운로드하고 개인 위치 신호기를 휴대하세요. 비상시 모바일에서 112로 전화하세요." },
      { label: "Mosquitoes and Midges", jaLabel: "\u868a\u3068\u30d6\u30e6", zhLabel: "\u868a\u5b50\u4e0e\u6c99\u8747", koLabel: "\ubaa8\uae30\uc640 \ub0a0\ubc8c\ub808", en: "In summer and after rain, mosquitoes and sandflies are active near wetlands, rivers, and coastal areas. Use insect repellent, wear long clothing at dawn and dusk. Seek medical help if you experience swelling, nausea, or breathing difficulty.", ja: "夏や雨の後は、湿地や川、沿岸地域で蚊やヌカカが活発になります。虫よけを使い、明け方と夕暮れには長袖の服を着ましょう。腫れ、吐き気、呼吸困難が現れたら医療機関を受診してください。", zh: "在夏季和雨后，湿地、河流和沿海地区的蚊子和沙蝇很活跃。使用驱虫剂，清晨和黄昏穿长袖衣物。如果出现肿胀、恶心或呼吸困难，请就医。", ko: "여름과 비 후 습지, 강, 해안 지역에서 모기와 모래파리가 활발합니다. 방충제를 사용하고, 부기나 호흡곤란이 있으면 의료 도움을 받으세요." },
    ],
  },
  {
    id: "budget-tips",
    iconKey: "Coin",
    accent: "coast",
    title: "Budget Tips for Sydney",
    koTitle: "시드니 예산 팁",
    jaTitle: "\u30b7\u30c9\u30cb\u30fc\u306e\u7bc0\u7d04\u306e\u30d2\u30f3\u30c8",
    zhTitle: "\u6089\u5c3c\u7701\u94b1\u8d34\u58eb",
    desc: "How to enjoy Sydney without breaking the bank",
    koDesc: "돈을 많이 쓰지 않고 시드니 즐기기",
    jaDesc: "\u304a\u91d1\u3092\u304b\u3051\u305a\u306b\u30b7\u30c9\u30cb\u30fc\u3092\u697d\u3057\u3080\u65b9\u6cd5",
    zhDesc: "\u5982\u4f55\u5728\u4e0d\u4f24\u94b1\u5305\u7684\u60c5\u51b5\u4e0b\u73a9\u8f6c\u6089\u5c3c",
    items: [
      { label: "Free Things to Do", jaLabel: "\u7121\u6599\u3067\u3067\u304d\u308b\u3053\u3068", zhLabel: "\u514d\u8d39\u6d3b\u52a8", koLabel: "\ubb34\ub8cc\ub85c \uc990\uae38 \uac70\ub9ac", en: "Royal Botanic Garden, The Rocks, Art Gallery of NSW, Hyde Park, harbour walks, Bondi-Coogee walk — all free. Most museums have free entry days. Free fireworks at Darling Harbour Saturday nights (summer). Free outdoor concerts and events throughout the year.", ja: "ロイヤル・ボタニック・ガーデン、The Rocks、ニューサウスウェールズ州立美術館、ハイド・パーク、ハーバーウォーク、ボンダイ〜クージー・ウォーク — すべて無料です。ほとんどの博物館に無料入場日があります。夏の土曜の夜にはダーリング・ハーバーで無料の花火が上がります。屋外コンサートやイベントも一年を通して無料で行われています。", zh: "皇家植物园、岩石区、新南威尔士州美术馆、海德公园、海港步道、邦迪至库吉步道——全部免费。大多数博物馆都有免费入场日。夏季周六晚上，达令港有免费烟花。全年都有免费的户外音乐会和活动。", ko: "로열 보태닉 가든, 더 록스, 아트 갤러리, 하이드 파크, 항구 산책, 본다이-쿠지 산책 — 모두 무료. 대부분 박물관에 무료 입장일이 있습니다." },
      { label: "Cheapest Meals", jaLabel: "\u6700\u3082\u5b89\u3044\u98df\u4e8b", zhLabel: "\u6700\u4fbf\u5b9c\u7684\u7f8e\u98df", koLabel: "\uc800\ub834\ud55c \uc2dd\uc0ac", en: "Asian food courts (Dixon House in Chinatown, Thai Town at Campbell Street, Korean food court on Pitt Street) serve hearty meals for $10-$15 AUD. Thai, Vietnamese, Korean, and Indian restaurants offer the best value. Sushi trains are $3-$5 AUD per plate.", ja: "アジア系フードコート（チナタウンのDixon House、Campbell Streetのタイタウン、Pitt Streetの韓国系フードコート）では、$10〜$15 AUDでしっかりした食事ができます。タイ、ベトナム、韓国、インド料理のレストランは特にお得です。回転寿司は1皿$3〜$5 AUDです。", zh: "亚洲美食广场（唐人街的 Dixon House、Campbell Street 的泰餐城、Pitt Street 的韩式美食广场）$10～$15 AUD 就能吃到一顿饱饭。泰国、越南、韩国和印度餐厅性价比最高。回转寿司每盘 $3～$5 AUD。", ko: "아시안 푸드코트에서 $10-$15 AUD로 든든한 식사 가능. 타이, 베트남, 한국, 인도 레스토랑이 가성비 최고. 스시 트레인은 접시당 $3-$5 AUD." },
      { label: "Museum Discounts", jaLabel: "\u535a\u7269\u9928\u306e\u5272\u5f15", zhLabel: "\u535a\u7269\u9986\u4f18\u60e0", koLabel: "\ubc15\ubb3c\uad00 \ud560\uc778", en: "Many museums have discounted or free entry on certain days. Australian Museum (free general entry), Powerhouse Museum (free), Museum of Contemporary Art (always free). Check websites before visiting. Wednesdays are often the cheapest day.", ja: "多くの博物館は特定の日に割引や無料入場があります。Australian Museum（一般入場無料）、Powerhouse Museum（無料）、Museum of Contemporary Art（常時無料）。訪れる前にウェブサイトを確認しましょう。水曜日が最も安いことが多いです。", zh: "许多博物馆在特定日子有折扣或免费入场。Australian Museum（普通入场免费）、Powerhouse Museum（免费）、Museum of Contemporary Art（一直免费）。参观前先查看网站。周三往往是最便宜的一天。", ko: "많은 박물관이 특정 요일에 할인 또는 무료 입장. Australian Museum(항상 무료), 다비드 박물관(무료). 수요일이 가장 저렴한 경우가 많습니다." },
    ],
  },
  {
    id: "useful-apps",
    iconKey: "Smartphone",
    accent: "sunset",
    title: "Useful Apps",
    koTitle: "유용한 앱",
    jaTitle: "\u4fbf\u5229\u306a\u30a2\u30d7\u30ea",
    zhTitle: "\u5b9e\u7528\u5e94\u7528",
    desc: "Essential apps for getting around and finding things to do",
    koDesc: "이동 및 찾기 위한 필수 앱",
    jaDesc: "\u79fb\u52d5\u3084\u89b3\u5149\u306b\u6b20\u304b\u305b\u306a\u3044\u30a2\u30d7\u30ea",
    zhDesc: "\u51fa\u884c\u548c\u5bfb\u627e\u6d3b\u52a8\u5fc5\u5907\u7684\u5e94\u7528",
    items: [
      { label: "Google Maps", jaLabel: "Google Maps", zhLabel: "Google Maps", koLabel: "Google Maps", en: "Already installed on most phones. Download offline maps for Sydney before you arrive — this lets you navigate without using mobile data. The transit directions are incredibly accurate with real-time bus, train, and ferry departures, platform numbers, and service alerts.", ja: "ほとんどのスマートフォンにすでにインストールされています。到着前にシドニーのオフライン地図をダウンロードしましょう — モバイルデータを使わずにナビゲートできます。公共交通のルート案内は非常に正確で、バス、電車、フェリーのリアルタイムの発車情報、ホーム番号、運行状況の通知も表示されます。", zh: "大多数手机上已经预装。抵达前先下载悉尼的离线地图——这样无需使用移动数据也能导航。公交导航极其准确，提供公交、火车和渡轮的实时班次、站台号以及服务提醒。", ko: "대부분의 휴대폰에 이미 설치되어 있습니다. 도착 전에 시드니 오프라인 지도를 다운로드하세요. 대중교통 길찾기는 실시간 정보가 매우 정확합니다." },
      { label: "TripView", jaLabel: "TripView", zhLabel: "TripView", koLabel: "TripView", en: "The best dedicated transit app for Sydney (and Melbourne). Shows real-time timetables for trains, buses, ferries, and light rail all in one view. Once you set your regular stops, it becomes indispensable. Free version is excellent, paid version removes ads.", ja: "シドニー（およびメルボルン）に最適な公共交通専用アプリです。電車、バス、フェリー、ライトレールのリアルタイム時刻表を1つの画面で表示します。よく使う停留所を設定すれば、手放せない存在になります。無料版でも十分優れており、有料版は広告がなくなります。", zh: "悉尼（以及墨尔本）最好用的公交专用应用。可在同一界面查看火车、公交、渡轮和轻轨的实时时刻表。设定好你常坐的站点后，它就会变得不可或缺。免费版已很出色，付费版可去除广告。", ko: "시드니(와 멜버른)를 위한 최고의 대중교통 전용 앱입니다. 기차, 버스, 페리, 경전철의 실시간 시간표를 한 화면에 보여줍니다. 무료 버전도 훌륭합니다." },
      { label: "Uber / Ola / DiDi / Taxi", jaLabel: "Uber / Ola / DiDi / Taxi", zhLabel: "Uber / Ola / DiDi / \u51fa\u79df\u8f66", koLabel: "Uber / Ola / DiDi / Taxi", en: "Uber works everywhere in Sydney but can surge badly. Ola and DiDi are cheaper alternatives. Taxis can be hailed on the street or at designated ranks. If using Taxis Combined Service (02 8332 8888), they accept card payments. For airport transfers, compare prices — sometimes a taxi is cheaper than surge Uber.", ja: "Uberはシドニー全域で使えますが、サージ料金が高騰することがあります。OlaとDiDiはより安い選択肢です。タクシーは路上や指定のタクシー乗り場で拾えます。Taxis Combined Service（02 8332 8888）を利用する場合、カード払いに対応しています。空港送迎では料金を比較しましょう — サージ中のUberよりタクシーのほうが安いこともあります。", zh: "Uber 在悉尼随处可用，但高峰加价可能很厉害。Ola 和 DiDi 是更便宜的选择。出租车可以在街上拦，也可以在指定候客点乘坐。如果使用 Taxis Combined Service（02 8332 8888），他们接受刷卡。机场接送要比价——有时出租车比加价的 Uber 还便宜。", ko: "Uber는 어디서나 작동하지만 서지 가격이 나쁠 수 있습니다. Ola와 DiDi가 더 저렴한 대안입니다. 택시는 거리에서 잡거나 지정된 승강장에서 탈 수 있습니다." },
      { label: "X (Twitter)", jaLabel: "X (Twitter)", zhLabel: "X\uff08Twitter\uff09", koLabel: "X (Twitter)", en: "Follow @sydneytrains, @sydneybuses, @ferries_sydney, and @TfNSW for real-time service updates and delays. In bad weather or during events, this is the fastest way to know what is happening. Search hashtags like #SydneyTrains or #SydBus during disruptions.", ko: "@sydneytrains, @sydneybuses, @ferries_sydney, @TfNSW를 팔로우하여 실시간 서비스 업데이트와 지연 정보를 받으세요. 악천후나 이벤트 중 가장 빠른 정보 소스입니다." },
      { label: "WhatsApp / KakaoTalk", jaLabel: "WhatsApp / KakaoTalk", zhLabel: "WhatsApp / KakaoTalk", koLabel: "WhatsApp / KakaoTalk", en: "Standard for messaging in Australia is WhatsApp (most locals use it). Korean travellers also widely use KakaoTalk. Both work over Wi-Fi and mobile data. Make sure you have an active Australian SIM with data for maps and messaging.", ja: "オーストラリアでの標準的なメッセージアプリはWhatsAppです（ほとんどの地元の人が使っています）。韓国人旅行者はKakaoTalkも広く利用しています。どちらもWi-Fiとモバイルデータで使えます。地図とメッセージングのために、データ通信に対応したオーストラリアのSIMを必ず用意しましょう。", zh: "澳大利亚最常用的通讯应用是WhatsApp（大多数本地人都用它）。韩国旅客也广泛使用KakaoTalk。两者都可以通过Wi-Fi和移动数据使用。请确保你有一张带有流量的澳大利亚SIM卡，方便使用地图和通讯。", ko: "호주의 표준 메시징 앱은 WhatsApp입니다. 한국 여행자는 KakaoTalk도 널리 사용합니다. 지도와 메시징을 위해 호주 데이터 SIM이 있는지 확인하세요." },
    ],
  },
];

export default function TouristPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Tourist</En>
            <Ja>観光</Ja>
            <Zh>旅游</Zh><Ko>관광</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En translated>Sydney tourist guide</En>
            <Ja>シドニー観光ガイド</Ja>
            <Zh>悉尼旅游指南</Zh><Ko>시드니 관광 가이드</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En translated>All the know-how you need for visiting Sydney as a Korean traveller.</En>
            <Ja>韓国の旅行者がシドニーを訪れる際に必要なノウハウをすべて。</Ja>
            <Zh>作为韩国旅客游览悉尼所需的全部实用知识。</Zh>
            <Ko>한국 여행자가 시드니를 방문할 때 필요한 모든 정보입니다.</Ko>
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          <section className="p-5 rounded-2xl bg-sunset/5 border border-sunset/20 dark:bg-sunset/10">
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <En translated>
                For transport in depth — Opal cards, peak vs off-peak fares, how to complain — see the{" "}
                <Link href="/transport" className="text-sunset font-medium hover:underline">
                  Transport page
                </Link>
                .
              </En>
              <Ja>交通について詳しく — Opal カード、ピーク時とオフピーク時の運賃、苦情の出し方 — は{" "}
                <Link href="/transport" className="text-sunset font-medium hover:underline">
                  交通ページ
                </Link>
                をご覧ください。</Ja>
              <Zh>想深入了解交通 — Opal 卡、高峰与非高峰票价、如何投诉 — 请见{" "}
                <Link href="/transport" className="text-sunset font-medium hover:underline">
                  交通页面
                </Link>
                。</Zh>
              <Ko>
                오팔 카드, 피크/오프피크 요금, 민원 제기 등 자세한 교통 정보는{" "}
                <Link href="/transport" className="text-sunset font-medium hover:underline">
                  Transport 페이지
                </Link>
                에서 확인하세요.
              </Ko>
            </p>
          </section>
          <section className="p-5 rounded-2xl bg-sage/5 border border-sage/20 dark:bg-sage/10">
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <En translated>
                Looking for day trips or weekend getaways beyond Sydney? See{" "}
                <Link href="/destinations" className="text-sunset font-medium hover:underline">
                  Destinations
                </Link>
                .
              </En>
              <Ja>シドニーを離れて日帰り旅行や週末の小旅行をお探しですか？{" "}
                <Link href="/destinations" className="text-sunset font-medium hover:underline">
                  目的地
                </Link>
                をご覧ください。</Ja>
              <Zh>想找悉尼以外的日游或周末短途旅行？请见{" "}
                <Link href="/destinations" className="text-sunset font-medium hover:underline">
                  目的地
                </Link>
                。</Zh>
              <Ko>
                시드니 밖 당일 여행이나 주말 여행지는{" "}
                <Link href="/destinations" className="text-sunset font-medium hover:underline">
                  Destinations 페이지
                </Link>
                에서 확인하세요.
              </Ko>
            </p>
          </section>
        </div>

        
        <div className="space-y-12">
          {sections.map((section, i) => (
            <EditorialSection key={section.id} data={section} index={i} />
          ))}
        </div>

        {/* FAQ — short visitor questions, mirrored as JSON-LD below for Google rich results */}
        <section className="mt-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Common questions</En>
            <Ja>よくある質問</Ja>
            <Zh>常见问题</Zh><Ko>자주 묻는 질문</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-6 leading-tight">
            <En translated>Before you go.</En>
            <Ja>出発前に。</Ja>
            <Zh>出发之前。</Zh><Ko>가기 전에.</Ko>
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1.5">
                <En translated>Do I need a visa?</En>
                <Ja>ビザは必要ですか？</Ja>
                <Zh>我需要签证吗？</Zh><Ko>비자가 필요한가요?</Ko>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                <En translated>Most passport holders need an ETA, eVisitor, or visitor visa before flying. Apply online before you book flights — see the{" "}
                  <Link href="/visa" className="text-sunset font-medium hover:underline">Visa Guide</Link> for the full breakdown by trip length.
                </En>
                <Ja>多くのパスポート保持者は、搭乗前に ETA、eVisitor、または観光ビザが必要です。航空券を予約する前にオンラインで申請してください — 旅行期間別の詳しい内訳は{" "}
                  <Link href="/visa" className="text-sunset font-medium hover:underline">ビザガイド</Link>をご覧ください。</Ja>
                <Zh>大多数护照持有者在登机前需要 ETA、eVisitor 或访客签证。请在预订机票之前在线申请 — 按行程时长划分的完整说明请见{" "}
                  <Link href="/visa" className="text-sunset font-medium hover:underline">签证指南</Link>。</Zh>
                <Ko>한국 여행자는 비행기 탑승 전 ETA, eVisitor 또는 방문 비자가 필요합니다. 항공권 예약 전에 온라인으로 신청하세요. 자세한 내용은{" "}
                  <Link href="/visa" className="text-sunset font-medium hover:underline">비자 가이드</Link>에서 확인하세요.
                </Ko>
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1.5">
                <En translated>Is tipping expected?</En>
                <Ja>チップは必要ですか？</Ja>
                <Zh>需要给小费吗？</Zh><Ko>팁을 줘야 하나요?</Ko>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                <En translated>No. Australian service workers earn Award wages and tipping is not part of the culture. See <Link href="/finance" className="text-sunset font-medium hover:underline">Finance</Link> for the full tipping and money guide.</En>
                <Ja>いいえ。オーストラリアのサービス業従事者は Award 賃金を得ており、チップは文化の一部ではありません。チップとお金についての完全ガイドは <Link href="/finance" className="text-sunset font-medium hover:underline">金融</Link> をご覧ください。</Ja>
                <Zh>不。澳大利亚的服务业从业者领取 Award 工资，小费并不是当地文化的一部分。完整的小费与金钱指南请见 <Link href="/finance" className="text-sunset font-medium hover:underline">金融</Link>。</Zh>
                <Ko>아니요. 호주 서비스 직원은 법정 최저 임금을 받으며 팁 문화가 없습니다. 자세한 내용은 <Link href="/finance" className="text-sunset font-medium hover:underline">금융 가이드</Link>에서 확인하세요.</Ko>
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1.5">
                <En translated>How safe is Sydney at night?</En>
                <Ja>シドニーの夜はどのくらい安全ですか？</Ja>
                <Zh>悉尼晚上有多安全？</Zh><Ko>시드니 밤에 안전한가요?</Ko>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                <En translated>The CBD, Darling Harbour, The Rocks, and inner suburbs like Newtown and Surry Hills are safe to walk at night. Stick to lit streets and use common sense — Sydney is calmer than most big cities, but standard precautions apply. Trains stop around midnight, so plan a taxi or rideshare for late nights.</En>
                <Ja>CBD、ダーリング・ハーバー、ザ・ロックス、そしてニュータウンやサリー・ヒルズのような市内近郊は、夜でも歩いて安全です。明るい通りを歩き、常識的な判断を心がけてください — シドニーはほとんどの大都市より落ち着いていますが、標準的な注意は必要です。電車は真夜中ごろに運転を終えるので、深夜はタクシーや配車サービスの利用を計画しましょう。</Ja>
                <Zh>中央商务区、达令港、岩石区，以及纽敦和萨里山等内城郊区，夜间步行都很安全。尽量走灯光明亮的街道并保持常识 — 悉尼比大多数大城市更平静，但仍需采取常规防范措施。火车在午夜前后停止运营，深夜出行请提前安排出租车或网约车。</Zh>
                <Ko>CBD, 달라 항구, 더 록스, 뉴타운과 서리힐스 같은 시내 교외는 밤에도 걸어다니기 안전합니다. 밝은 거리로 다니고 상식적인 주의를 기울이세요 — 시드니는 대부분의 대도시보다 조용하지만 기본적인 주의는 필요합니다. 기차는 자정 무렵에 끊기므로 늦은 밤에는 택시나 차량 호출 앱을 이용하세요.</Ko>
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1.5">
                <En translated>How do I get from the airport to the city?</En>
                <Ja>空港から市内へはどう行けばいいですか？</Ja>
                <Zh>从机场到市区怎么走？</Zh><Ko>공항에서 시내로 어떻게 가나요?</Ko>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                <En translated>The airport train (T8) is fast but pricey ($20 AUD–25). The 400 bus from the airport terminals runs to Bondi Junction via the CBD for about $3 AUD with Opal — best value. Rideshare apps (Uber/Ola/DiDi) sit between the two in price and convenience. See <Link href="/transport" className="text-sunset font-medium hover:underline">Transport</Link> for the full breakdown.</En>
                <Ja>空港列車（T8）は速いですが割高です（$20 AUD–25）。空港ターミナル発の 400 番バスは CBD を経由してボンダイ・ジャンクションまで行き、Opal で約 $3 AUD — いちばんお得です。ライドシェアアプリ（Uber/Ola/DiDi）は価格と便利さの中間です。詳しい内訳は <Link href="/transport" className="text-sunset font-medium hover:underline">交通</Link> をご覧ください。</Ja>
                <Zh>机场火车（T8）很快但价格偏高（$20 AUD–25）。从机场航站楼出发的 400 路公交经 CBD 前往邦迪枢纽，用 Opal 约 $3 AUD — 最划算。网约车应用（Uber/Ola/DiDi）的价格和便利度介于两者之间。完整说明请见 <Link href="/transport" className="text-sunset font-medium hover:underline">交通</Link>。</Zh>
                <Ko>공항 기차(T8)는 빠르지만 비쌉니다($20 AUD–25). 공항 터미널에서 출발하는 400번 버스는 CBD를 경유해 본다이 정션까지 가며 오팔로 약 $3 AUD입니다 — 가성비 최고. 차량 호출 앱(Uber/Ola/DiDi)은 가격과 편의성 면에서 그 중간입니다. 자세한 내용은 <Link href="/transport" className="text-sunset font-medium hover:underline">교통 가이드</Link>에서 확인하세요.</Ko>
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-3">
            <En translated>Emergency contacts</En>
            <Ja>緊急連絡先</Ja>
            <Zh>紧急联系方式</Zh><Ko>비상 연락처</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En translated>Save these before you arrive.</En>
            <Ja>到着前に保存しておきましょう。</Ja>
            <Zh>抵达前请先保存这些号码。</Zh>
            <Ko>도착 전에 저장해 두세요.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En translated>000 is the main emergency number (police, fire, ambulance). For non-urgent police matters call 131 444. For consular help, the Korean Consulate in Sydney is open weekdays.</En>
            <Ja>000は主要な緊急番号です（警察、消防、救急）。緊急性のない警察案件は131 444にお電話ください。領事に関する支援については、シドニーの韓国領事館が平日に開いています。</Ja>
            <Zh>000是主要紧急电话（警察、消防、救护）。非紧急的警务事项请拨打131 444。如需领事协助，悉尼的韩国领事馆在工作日开放。</Zh>
            <Ko>000은 주요 응급 번호입니다(경찰, 소방, 구급). 비응급 경찰 사항은 131 444로 전화하세요. 영사관 도움이 필요하면 시드니 주한 한국 영사관에 평일 동안 연락하세요.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:000" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">000 — Emergency</a>
            <a href="https://overseas.mofa.go.kr/au-ko/brd/m_22343/list.do" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Korean Consulate ↗</a>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleLdJson({
              path: "tourist",
              headline: "Sydney tourist guide — top sights, safety, apps and first-timer essentials",
              description:
                "시드니 관광 가이드 — 블루마운틴, 본다이, 오페라 하우스, 페리, 와이프, 식당, 교통패스, 숙소, 예산까지 한국인이 시드니를 처음 방문할 때 알아야 할 모든 것.",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqLdJson(
              [
                {
                  q: { en: "Do I need a visa to visit Australia?", ja: "オーストラリアを訪れるのにビザは必要ですか？", zh: "去澳大利亚旅游需要签证吗？", ko: "호주 방문에 비자가 필요한가요?" },
                  a: {
                    en: "Almost always. Most passport holders — Korean, American, British, European, most others — need an ETA, eVisitor, or visitor visa before flying. Apply online before you book flights.", ja: "ほとんどの場合必要です。韓国、アメリカ、イギリス、ヨーロッパなど大半の国籍のパスポート保持者は、搭乗前にETA、eVisitor、または観光ビザが必要です。航空券を予約する前にオンラインで申請しましょう。", zh: "几乎总是需要。大多数护照持有者——韩国、美国、英国、欧洲以及大多数其他国籍——在登机前都需要ETA、eVisitor或旅游签证。请在预订机票之前在线申请。",
                    ko: "네, 한국 여행자는 비행기 탑승 전 ETA, eVisitor 또는 방문 비자가 필요합니다.",
                  },
                },
                {
                  q: { en: "Is tipping expected in Sydney?", ja: "シドニーではチップは必要ですか？", zh: "在悉尼需要给小费吗？" },
                  a: {
                    en: "No. Australian service workers earn Award wages and tipping is not part of the culture. You are not expected to tip at cafes, pubs, taxis, or restaurants.", ja: "いいえ。オーストラリアのサービス業従事者は法定賃金（Award wages）を得ており、チップは文化の一部ではありません。カフェ、パブ、タクシー、レストランでチップを渡す必要はありません。", zh: "不需要。澳大利亚的服务业从业者领取的是法定行业工资（Award wages），小费并非当地文化的一部分。在咖啡馆、酒吧、出租车或餐厅都无需给小费。",
                  },
                },
                {
                  q: { en: "How safe is Sydney at night?", ja: "シドニーは夜間どのくらい安全ですか？", zh: "悉尼晚上有多安全？" },
                  a: {
                    en: "The CBD, Darling Harbour, The Rocks, and inner suburbs like Newtown and Surry Hills are safe to walk at night. Sydney is calmer than most big cities, but standard precautions apply.", ja: "CBD、ダーリング・ハーバー、ザ・ロックス、そしてニュータウンやサリー・ヒルズといったインナー・サバーブは夜間も安全に歩けます。シドニーは大半の大都市より落ち着いていますが、通常の用心は必要です。", zh: "CBD、达令港、岩石区以及纽敦、萨里山等内城郊区，夜间步行都很安全。悉尼比大多数大城市更平静，但仍需采取常规的防范措施。",
                  },
                },
                {
                  q: { en: "What is the cheapest way to get from Sydney Airport to the city?", ja: "シドニー空港から市内へ行く最も安い方法は何ですか？", zh: "从悉尼机场到市区最便宜的方式是什么？" },
                  a: {
                    en: "The 400 bus from the airport terminals runs to Bondi Junction via the CBD for about $3 AUD with Opal — the best value option. The airport train (T8) is faster but costs $20 AUD–25.", ja: "空港ターミナル発の400番バスは、Opalで約$3 AUDでCBD経由ボンダイ・ジャンクション行きです — 最もお得な選択肢です。空港列車（T8）はより速いですが、$20 AUD〜25かかります。", zh: "从机场航站楼出发的400路公交车经CBD开往邦迪枢纽，使用Opal约$3 AUD——最超值的选择。机场火车（T8）更快，但费用为$20 AUD–25。",
                  },
                },
              ],
              "tourist"
            )
          ),
        }}
      />


      <RelatedContent
        items={[
          {
            href: "/transport",
            title: { en: "Getting around", ja: "移動手段", zh: "出行交通", ko: "교통과 이동" },
            description: {
              en: "Opal cards, airport transfers, rideshare apps, and ferry routes.", ja: "Opal カード、空港送迎、配車アプリ、フェリー路線。", zh: "Opal卡、机场接送、网约车应用和渡轮航线。",
              ko: "오팔 카드, 공항 이동, 차량 호출 앱, 페리 노선.",
            },
          },
          {
            href: "/apartment",
            title: { en: "Where to stay", ja: "どこに泊まるか", zh: "住在哪里", ko: "어디에 머물까" },
            description: {
              en: "CBD convenience vs beach suburb calm. Best areas by trip type.", ja: "CBDの便利さとビーチ郊外の静けさ。旅行タイプ別のベストエリア。", zh: "CBD的便利与海滨郊区的宁静。按旅行类型推荐的最佳区域。",
              ko: "CBD의편의 vs 해변 교외의 평온. 여행 유형별 최적 지역.",
            },
          },
          {
            href: "/finance",
            title: { en: "Budget & payments", ja: "予算と支払い", zh: "预算与支付", ko: "예산과 결제" },
            description: {
              en: "Travel money, card surcharges, and how much a week in Sydney really costs.", ja: "旅の資金、カード手数料、そしてシドニーでの1週間にかかる実際の費用。", zh: "旅行资金、银行卡附加费，以及在悉尼一周的真实花费。",
              ko: "여행 자금, 카드 수수료, 그리고 시드니 1주의 실제 비용.",
            },
          },
        ]}
      />
    </div>
  );
}

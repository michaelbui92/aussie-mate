// Server component — bilingual Australian road trips guide.
// Editorial style with route cards and trip-planning tips.

import type { Metadata } from "next";
import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { seoFor, withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo(
  {

  ...seoFor("/experiences/road-trips"),
  title: "Great Ocean Road to Sydney — Best Australian Road Trips & Routes",
  description:
    "Great Ocean Road, Sydney to Melbourne, Red Centre, Pacific Coast — Australia's iconic drives with route notes, distances, best seasons, and Korean-friendly tips.",
  },
  "/experiences/road-trips"
);

type RoadTripSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; koLabel?: string; jaLabel?: string; zhLabel?: string; en: string; ko: string; url?: string; ja?: string; zh?: string }>;
};

const sections: RoadTripSection[] = [
  {
    id: "south-coast",
    iconKey: "Compass",
    accent: "coast",
    title: "South to Wollongong & Kiama",
    koTitle: "남쪽: 울런공, 카이아마",
    jaTitle: "\u5357\u3078\uff1a\u30a6\u30ed\u30f3\u30b4\u30f3\uff06\u30ad\u30a2\u30de",
    zhTitle: "\u5357\u884c\u81f3\u5367\u9f99\u5c97\u4e0e\u51ef\u9a6c",
    desc: "90 minutes south of Sydney — beaches, blowholes, and seafood",
    koDesc: "시드니에서 남쪽으로 90분 — 해변, 분수공, 해산물",
    jaDesc: "\u30b7\u30c9\u30cb\u30fc\u304b\u3089\u5357\u307890\u5206 \u2014 \u30d3\u30fc\u30c1\u3001\u30d6\u30ed\u30fc\u30db\u30fc\u30eb\u3001\u30b7\u30fc\u30d5\u30fc\u30c9",
    zhDesc: "\u6089\u5c3c\u4ee5\u535790\u5206\u949f\u2014\u2014\u6d77\u6ee9\u3001\u55b7\u6c34\u6d1e\u548c\u6d77\u9c9c",
    img: "/images/Sea_Cliff_Bridge_from_air.jpg",
    items: [
      { label: "Wollongong",
      jaLabel: "\u30a6\u30ed\u30f3\u30b4\u30f3",
      zhLabel: "\u5367\u9f99\u5c97",
      koLabel: "\uc6b8\ub7f0\uacf5", en: "A coastal city with great beaches, a lively arts scene, and the Sea Cliff Bridge drive. Park near North Beach and walk the coastal path to the lighthouse. The Blue Mile is a popular walking and cycling route. Lots of cafes and restaurants along the waterfront. About 80km from Sydney — 1 hour drive. Train from Central Station to Wollongong takes about 1.5 hours. Must do: hang gliding at Stanwell Park (even just watching), Nan Tien Temple (largest Buddhist temple in the Southern Hemisphere), and a swim at North Wollongong Beach.", ja: "美しいビーチ、活気あるアートシーン、そして Sea Cliff Bridge ドライブが楽しめる海沿いの街です。North Beach の近くに駐車し、海岸の遊歩道を歩いて灯台へ向かいましょう。ブルー・マイルは人気のウォーキング＆サイクリングコースです。ウォーターフロント沿いにはカフェやレストランがたくさんあります。シドニーから約 80km — 車で 1 時間。セントラル駅からウロンゴンまでは電車で約 1.5 時間。必ず体験したいこと: Stanwell Park でのハンググライダー（見ているだけでも可）、Nan Tien Temple（南半球最大の仏教寺院）、North Wollongong Beach での海水浴。", zh: "一座拥有优质海滩、活跃艺术氛围和 Sea Cliff Bridge 驾车路线的海滨城市。把车停在 North Beach 附近，沿着海岸步道走到灯塔。蓝色一英里是热门的步行和骑行路线。海滨沿线有很多咖啡馆和餐厅。距悉尼约 80 公里 — 车程 1 小时。从中央车站乘火车到卧龙岗约 1.5 小时。必做之事：在 Stanwell Park 玩悬挂滑翔（只是观看也很棒）、参观 Nan Tien Temple（南半球最大的佛教寺庙），以及在 North Wollongong Beach 游泳。", ko: "좋은 해변, 활기찬 예술 현장, Sea Cliff Bridge 드라이브가 있는 해안 도시입니다. North Beach 근처에 주차하고 해안 산책로를 따라 등대로 걸어가세요. 블루 마일은 인기 있는 걷기와 자전거 코스입니다. 해변가에 많은 카페와 레스토랑이 있습니다. 시드니에서 약 80km — 차로 1시간. 시드니 Central 역에서 울런공까지 기차로 약 1.5시간. 꼭 할 일: Stanwell Park에서 행글라이딩(구경만 해도 좋음), Nan Tien Temple(남반구 최대 불교 사원), North Wollongong Beach에서 수영." },
      { label: "Kiama",
      jaLabel: "\u30ad\u30a2\u30de",
      zhLabel: "\u51ef\u9a6c",
      koLabel: "\uce74\uc774\uc544\ub9c8", url: "/destinations/kiama", en: "Famous for its blowholes — natural rock formations that shoot seawater into the air when waves hit. Two blowholes: the Big Blowhole (in town, easy access) and the Little Blowhole (quieter, 2km south). Best time is rough seas at mid-to-high tide. Also has beautiful beaches, rock pools, and the Kiama Coastal Walk. The Saturday market is great for local produce. About 120km from Sydney (2 hours). You can also take the train from Sydney to Kiama (about 2 hours). Perfect day trip or weekend getaway.", ja: "ブローホール（潮吹き穴）で有名 — 波が打ちつけると海水を空中に噴き上げる自然の岩の造形です。2 つのブローホールがあります：ビッグ・ブローホール（市内、アクセス良好）とリトル・ブローホール（静か、2km 南）。ベストなタイミングは荒波のときの中潮〜満潮です。美しいビーチ、潮だまり、Kiama Coastal Walk もあります。土曜日のマーケットは地元の農産物に最適です。シドニーから約 120km（2 時間）。シドニーからキアマまで電車でも行けます（約 2 時間）。日帰り旅行や週末の小旅行にぴったりです。", zh: "以喷水洞闻名 — 海浪拍打时会把海水喷向空中的天然岩石构造。有两个喷水洞：大喷水洞（在镇上，交通方便）和小喷水洞（更安静，位于以南 2 公里）。最佳时机是海面风浪大时的中潮到满潮。这里还有美丽的海滩、潮池和 Kiama Coastal Walk。周六市集很适合买当地农产品。距悉尼约 120 公里（2 小时）。也可以从悉尼乘火车到 Kiama（约 2 小时）。非常适合一日游或周末度假。", ko: "분수공으로 유명 — 파도가 칠 때 바닷물을 공중으로 뿜어내는 자연 암석 형성물입니다. 두 개의 분수공: 큰 분수공(시내, 접근 쉬움)과 작은 분수공(조용함, 2km 남쪽). 최적 시간은 거친 바다에 중간~만조 때입니다. 아름다운 해변, 바위 웅덩이, Kiama Coastal Walk도 있습니다. 토요일 시장은 지역 농산물을 사기 좋습니다. 시드니에서 약 120km(2시간). 시드니에서 Kiama까지 기차로도 갈 수 있습니다(약 2시간). 완벽한 당일 여행 또는 주말 휴가." },
      { label: "Grand Pacific Drive",
      jaLabel: "\u30b0\u30e9\u30f3\u30c9\u30fb\u30d1\u30b7\u30d5\u30a3\u30c3\u30af\u30fb\u30c9\u30e9\u30a4\u30d6",
      zhLabel: "\u5927\u592a\u5e73\u6d0b\u516c\u8def",
      koLabel: "Grand Pacific Drive", en: "Sydney to Wollongong via the Royal National Park and Sea Cliff Bridge. The Sea Cliff Bridge is a 665m cantilever bridge hugging the cliff face with ocean on one side — incredible views. Stop at Bald Hill (Stanwell Tops) for the iconic lookout over the coast. Continue through Thirroul and Austinmer — both great beach stops. Continue to Kiama for blowholes and lunch. Allow a full day. Tolls: none on this route if you go via the Royal National Park entrance.", ja: "ロイヤル・ナショナル・パークと Sea Cliff Bridge を経由するシドニー〜ウロンゴン。Sea Cliff Bridge は崖面に沿って弧を描く全長 665m のカンチレバー橋で、片側は海 — 素晴らしい眺めです。Bald Hill（Stanwell Tops）に立ち寄って、海岸を見渡す絶景を楽しみましょう。Thirroul と Austinmer を通り抜けます — どちらも素敵なビーチの立ち寄りポイント。そのままキアマへ向かい、ブローホールとランチを楽しみましょう。丸 1 日見ておきましょう。通行料：ロイヤル・ナショナル・パークの入口経由ならこのルートは無料です。", zh: "从悉尼经皇家国家公园和 Sea Cliff Bridge 前往卧龙岗。Sea Cliff Bridge 是一座全长 665 米的悬臂桥，紧贴崖壁而建，一侧是海洋 — 景色令人惊叹。在 Bald Hill（Stanwell Tops）停下，欣赏标志性的海岸观景点。继续穿过 Thirroul 和 Austinmer — 两处都是很棒的海滩停留点。再前往 Kiama 看喷水洞并吃午餐。建议留出一整天。过路费：如果从皇家国家公园入口走，这条路线上没有过路费。", ko: "로열 국립공원과 Sea Cliff Bridge를 경유하는 시드니-울런공. Sea Cliff Bridge는 절벽을 감싸 안는 665m 캔틸레버 다리로 한쪽은 바다 — 절경입니다. Bald Hill(Stanwell Tops)에 정차하여 해안 전망을 감상하세요. Thirroul과 Austinmer를 지나 — 둘 다 좋은 비치 스탑. Kiama까지 계속 가서 분수공과 점심을 즐기세요. 하루 종일 잡으세요. 통행료: Royal National Park 입구로 가면 통행료 없음." },
    ],
  },
  {
    id: "north-coast",
    iconKey: "MapPin",
    accent: "sage",
    title: "North to Newcastle & Port Stephens",
    koTitle: "북쪽: 뉴캐슬, 포트스테판",
    jaTitle: "\u5317\u3078\uff1a\u30cb\u30e5\u30fc\u30ab\u30c3\u30b9\u30eb\uff06\u30dd\u30fc\u30c8\u30fb\u30b9\u30c6\u30a3\u30fc\u30d6\u30f3\u30b9",
    zhTitle: "\u5317\u884c\u81f3\u7ebd\u5361\u65af\u5c14\u4e0e\u53f2\u8482\u82ac\u65af\u6e2f",
    desc: "2–3 hours north — surf culture, sand dunes, and coastal villages",
    koDesc: "북쪽으로 2–3시간 — 서핑 문화, 모래 언덕, 해안 마을",
    jaDesc: "\u5317\u30782\u301c3\u6642\u9593 \u2014 \u30b5\u30fc\u30d5\u6587\u5316\u3001\u7802\u4e18\u3001\u6d77\u5cb8\u306e\u6751\u3005",
    zhDesc: "\u5411\u53172\u20133\u5c0f\u65f6\u2014\u2014\u51b2\u6d6a\u6587\u5316\u3001\u6c99\u4e18\u548c\u6d77\u5cb8\u6751\u5e84",
    img: "/images/newcastle_harbour.jpg",
    items: [
      { label: "Newcastle",
      jaLabel: "\u30cb\u30e5\u30fc\u30ab\u30c3\u30b9\u30eb",
      zhLabel: "\u7ebd\u5361\u65af\u5c14",
      koLabel: "\ub274\uce90\uc2ac", en: "Second-largest city in NSW and a serious surf town. Nobbys Beach and Merewether Beach (home to the annual Surfest competition) are the main beaches. The Newcastle Memorial Walk (ANZAC Walk) is a stunning cliff-top walkway with ocean views. Darby Street and Beaumont Street are the cafe and restaurant strips. King Edward Park and the Bogey Hole (a convict-built ocean pool cut into rock) are must-sees. The train from Sydney Central to Newcastle Interchange takes about 2.5 hours. About 160km from Sydney (2 hours drive).", ja: "NSW 第 2 の都市で、本格的なサーフタウン。Nobbys Beach と Merewether Beach（毎年 Surfest 大会が開かれる場所）が主要なビーチです。Newcastle Memorial Walk（ANZAC Walk）は海を望む絶景の崖上の遊歩道です。Darby Street と Beaumont Street はカフェとレストランが並ぶ通りです。King Edward Park と Bogey Hole（囚人が岩を削って作ったオーシャンプール）は必見です。Sydney Central から Newcastle Interchange までは電車で約 2.5 時間。シドニーから約 160km（車で 2 時間）。", zh: "新南威尔士州第二大城市，也是一座认真的冲浪小镇。Nobbys Beach 和 Merewether Beach（一年一度 Surfest 比赛的举办地）是主要海滩。Newcastle Memorial Walk（ANZAC Walk）是一条令人惊叹的崖顶步道，可欣赏海景。Darby Street 和 Beaumont Street 是咖啡馆和餐厅林立的街区。King Edward Park 和 Bogey Hole（囚犯在岩石上凿出的海滨泳池）是必看景点。从 Sydney Central 乘火车到 Newcastle Interchange 约 2.5 小时。距悉尼约 160 公里（车程 2 小时）。", ko: "NSW 제2의 도시이자 진지한 서핑 타운. Nobbys Beach와 Merewether Beach(연례 Surfest 대회 개최지)가 주요 해변입니다. Newcastle Memorial Walk(ANZAC Walk)은 바다 전망의 멋진 절벽 위 산책로입니다. Darby Street와 Beaumont Street가 카페와 레스토랑 거리입니다. King Edward Park와 Bogey Hole(죄수들이 바위에 판 ocean pool)은 필수 관광지입니다. Sydney Central에서 Newcastle Interchange까지 기차로 약 2.5시간. 시드니에서 약 160km(차로 2시간)." },
      { label: "Port Stephens",
      jaLabel: "\u30dd\u30fc\u30c8\u30fb\u30b9\u30c6\u30a3\u30fc\u30d6\u30f3\u30b9",
      zhLabel: "\u53f2\u8482\u82ac\u65af\u6e2f",
      koLabel: "\ud3ec\ud2b8\uc2a4\ud14c\ud310", en: "Known for its massive sand dunes at Stockton Beach (the Southern Hemisphere's largest mobile sand dunes) — you can go sandboarding or take a 4WD tour. Also famous for dolphin watching — pods of bottlenose dolphins live in the bay year-round (boat tours from Nelson Bay). Tomaree Head Summit Walk gives a 360-degree view of the coast (short but steep — 1 hour return). For whale watching go between May and November. Shoal Bay and Fingal Bay are beautiful for swimming. About 200km from Sydney (2.5–3 hours).", ja: "Stockton Beach の巨大な砂丘（南半球最大の移動砂丘）で有名 — サンドボーディングや 4WD ツアーが楽しめます。イルカウォッチングでも有名 — バンドウイルカの群れが一年中湾内に生息しています（Nelson Bay 発のボートツアー）。Tomaree Head Summit Walk では海岸の 360 度パノラマが楽しめます（短いですが急 — 往復 1 時間）。ホエールウォッチングは 5 月から 11 月の間に行きましょう。Shoal Bay と Fingal Bay は海水浴に美しい場所です。シドニーから約 200km（2.5〜3 時間）。", zh: "以 Stockton Beach 的巨大沙丘（南半球最大的流动沙丘）闻名 — 可以玩滑沙或参加四驱车之旅。这里也以赏海豚闻名 — 宽吻海豚群全年都生活在海湾中（从 Nelson Bay 出发的游船）。Tomaree Head Summit Walk 可以欣赏 360 度海岸全景（路程短但陡 — 往返 1 小时）。赏鲸请选在 5 月到 11 月之间。Shoal Bay 和 Fingal Bay 的海水很美丽，适合游泳。距悉尼约 200 公里（2.5–3 小时）。", ko: "Stockton Beach의 거대한 모래 언덕(남반구 최대 이동 사구)으로 유명 — 샌드보딩이나 4WD 투어를 할 수 있습니다. 돌고래 관찰로도 유명 — 큰돌고래 무리가 연중 만에 서식합니다(Nelson Bay에서 출발하는 보트 투어). Tomaree Head Summit Walk는 해안의 360도 전망을 제공합니다(짧지만 가파름 — 왕복 1시간). 고래 관찰은 5월에서 11월 사이에 가세요. Shoal Bay와 Fingal Bay는 수영에 아름답습니다. 시드니에서 약 200km(2.5–3시간)." },
      { label: "Central Coast",
      jaLabel: "\u30bb\u30f3\u30c8\u30e9\u30eb\u30fb\u30b3\u30fc\u30b9\u30c8",
      zhLabel: "\u4e2d\u592e\u6d77\u5cb8",
      koLabel: "\uc13c\ud2b8\ub7f4 \ucf54\uc2a4\ud2b8", en: "Halfway between Sydney and Newcastle, the Central Coast is family-friendly and easy. Terrigal and Avoca Beach are popular for swimming and surfing. The Skillion at Terrigal has a great lookout. Australian Reptile Park is a classic roadside attraction — crocs, snakes, and kangaroos. Bouddi National Park has great coastal walks with ocean views. You can take the train from Sydney Central to Gosford (about 1.25 hours), then connect to buses. Good for a day trip or a relaxed weekend.", ja: "シドニーとニューカッスルの中間にあるセントラル・コーストは、家族向けで気軽に楽しめます。Terrigal と Avoca Beach は海水浴やサーフィンに人気です。Terrigal の The Skillion には素晴らしい展望台があります。Australian Reptile Park は定番のロードサイド・アトラクション — ワニ、ヘビ、カンガルーがいます。Bouddi National Park には海を望む素晴らしい海岸遊歩道があります。Sydney Central から Gosford まで電車で約 1.25 時間、そこからバスに乗り換えられます。日帰り旅行やゆったりした週末に最適です。", zh: "中央海岸位于悉尼和纽卡斯尔之间，适合家庭出游，行程轻松。Terrigal 和 Avoca Beach 是游泳和冲浪的热门地点。Terrigal 的 The Skillion 有很棒的观景点。Australian Reptile Park 是经典的路边景点 — 有鳄鱼、蛇和袋鼠。Bouddi National Park 有很棒的海岸步道，可欣赏海景。可以从 Sydney Central 乘火车到 Gosford（约 1.25 小时），再换乘巴士。很适合一日游或轻松的周末。", ko: "시드니와 뉴캐슬 중간, 센트럴 코스트는 가족 친화적이고 편리합니다. Terrigal과 Avoca Beach는 수영과 서핑에 인기. Terrigal의 The Skillion은 좋은 전망대. Australian Reptile Park은 고전적인 로드사이드 어트랙션 — 악어, 뱀, 캥거루. Bouddi National Park는 바다 전망의 좋은 해안 산책로가 있습니다. Sydney Central에서 Gosford까지 기차로 약 1.25시간, 거기서 버스로 연결. 당일 여행이나 편안한 주말에 좋습니다." },
    ],
  },
  {
    id: "inland",
    iconKey: "Sun",
    accent: "amber",
    title: "Out West & Inland",
    koTitle: "서쪽과 내륙",
    jaTitle: "\u897f\u3078\uff06\u5185\u9678\u3078",
    zhTitle: "\u897f\u90e8\u4e0e\u5185\u9646",
    desc: "Blue Mountains, Southern Highlands, and the Hunter Valley",
    koDesc: "블루마운틴, 서던 하일랜즈, 헌터 밸리",
    jaDesc: "\u30d6\u30eb\u30fc\u30fb\u30de\u30a6\u30f3\u30c6\u30f3\u30ba\u3001\u30b5\u30b6\u30f3\u30fb\u30cf\u30a4\u30e9\u30f3\u30ba\u3001\u30cf\u30f3\u30bf\u30fc\u30fb\u30d0\u30ec\u30fc",
    zhDesc: "\u84dd\u5c71\u3001\u5357\u90e8\u9ad8\u5730\u548c\u730e\u4eba\u8c37",
    img: "/images/outback_mungo.jpg",
    items: [
      { label: "Blue Mountains",
      jaLabel: "\u30d6\u30eb\u30fc\u30fb\u30de\u30a6\u30f3\u30c6\u30f3\u30ba",
      zhLabel: "\u84dd\u5c71",
      koLabel: "\ube14\ub8e8\ub9c8\uc6b4\ud2f4", en: "A World Heritage area just 90 minutes from Sydney. Key spots: Katoomba (Three Sisters lookout, Scenic World), Leura (cute village with cafes), Wentworth Falls (stunning waterfall and walking tracks), and Blackheath (Govetts Leap lookout). The Blue Mountains Explorer Bus is a hop-on-hop-off bus that covers all the main sights. Trains from Central Station to Katoomba take about 2 hours. Best visited midweek to avoid crowds. If hiking, carry enough water and check track conditions first — phone reception can be patchy in valleys.", ja: "シドニーからわずか 90 分の世界遺産エリア。主な見どころ：Katoomba（Three Sisters 展望台、Scenic World）、Leura（カフェのある可愛らしい村）、Wentworth Falls（見事な滝と遊歩道）、Blackheath（Govetts Leap 展望台）。Blue Mountains Explorer Bus は主要な見どころを巡るホップ・オン・ホップ・オフのバスです。Central Station から Katoomba までは電車で約 2 時間。混雑を避けるなら平日の訪問がベストです。ハイキングをする場合は十分な水を持参し、先にトレイルの状況を確認しましょう — 谷では携帯電話の電波が届かないことがあります。", zh: "世界遗产区，距悉尼仅 90 分钟。主要景点：Katoomba（三姐妹峰观景点、Scenic World）、Leura（有咖啡馆的可爱小镇）、Wentworth Falls（壮观的瀑布和步道）、Blackheath（Govetts Leap 观景点）。Blue Mountains Explorer Bus 是覆盖所有主要景点的随上随下巴士。从中央车站到 Katoomba 乘火车约 2 小时。最好在平日前往以避开人群。如果徒步，请携带足够的水并先确认步道状况 — 山谷里手机信号可能时有时无。", ko: "시드니에서 불과 90분 거리의 세계유산 지역. 주요 장소: Katoomba(Three Sisters 전망대, Scenic World), Leura(카페가 있는 귀여운 마을), Wentworth Falls(멋진 폭포와 산책로), Blackheath(Govetts Leap 전망대). Blue Mountains Explorer Bus는 모든 주요 명소를 돌는 hop-on-hop-off 버스입니다. Central Station에서 Katoomba까지 기차로 약 2시간. 사람이 많은 주말을 피해 주중 방문이 최적. 하이킹 하는 경우 충분한 물을 휴대하고 등산로 상태를 미리 확인하세요 — 계곡에서는 휴대폰 수신이 불안정할 수 있습니다." },
      { label: "Southern Highlands",
      jaLabel: "\u30b5\u30b6\u30f3\u30fb\u30cf\u30a4\u30e9\u30f3\u30ba",
      zhLabel: "\u5357\u90e8\u9ad8\u5730",
      koLabel: "\uc11c\ub358 \ud558\uc77c\ub79c\uc988", en: "An hour south of Campbelltown (about 1.5 hours from Sydney). Bowral is the main town: check out the Bradman Museum (cricket legend), antique shops, and the spring tulip festival (September–October). Mittagong and Berrima are charming small towns with historic pubs and antique stores. Fitzroy Falls in Morton National Park is a stunning waterfall with easy walking tracks. Great for a weekend getaway with cooler weather — especially in autumn when the trees turn golden. Good cafes and cool-climate wineries.", ja: "Campbelltown から南へ 1 時間（シドニーから約 1.5 時間）。Bowral が中心の町です：Bradman Museum（クリケットの伝説）、アンティークショップ、春のチューリップ祭り（9 月〜10 月）をチェックしましょう。Mittagong と Berrima は歴史あるパブとアンティーク店がある魅力的な小さな町です。Morton National Park の Fitzroy Falls は歩きやすい遊歩道のある見事な滝です。気候が涼しい週末旅行に最適 — 特に木々が黄金色に染まる秋がおすすめ。良いカフェと冷涼気候のワイナリーがあります。", zh: "位于 Campbelltown 以南一小时（距悉尼约 1.5 小时）。Bowral 是主要城镇：可以去看看 Bradman Museum（板球传奇）、古董店和春季郁金香节（9–10 月）。Mittagong 和 Berrima 是迷人的小镇，有历史悠久的酒吧和古董店。Morton National Park 的 Fitzroy Falls 是一处壮观的瀑布，步道轻松好走。天气凉爽，非常适合周末度假 — 尤其是在树叶变成金黄色的秋天。有不错的咖啡馆和凉爽气候产区的酒庄。", ko: "Campbelltown에서 남쪽으로 1시간(시드니에서 약 1.5시간). Bowral이 주요 도시: Bradman Museum(크리켓 전설), 골동품 가게, 봄 튤립 축제(9월–10월)를 확인하세요. Mittagong과 Berrima는 유서 깊은 퍼브와 골동품 가게가 있는 매력적인 작은 마을입니다. Morton National Park의 Fitzroy Falls는 쉬운 산책로가 있는 멋진 폭포입니다. 특히 가을에 나무가 황금색으로 물들 때 — 더운 여름을 피해 주말 여행에 최적. 좋은 카페와 시원한 기후의 와이너리가 있습니다." },
      { label: "Hunter Valley",
      jaLabel: "\u30cf\u30f3\u30bf\u30fc\u30fb\u30d0\u30ec\u30fc",
      zhLabel: "\u730e\u4eba\u8c37",
      koLabel: "\ud5cc\ud130 \ubc38\ub9ac", en: "Australia's oldest wine region, about 2 hours north of Sydney. Over 150 wineries with cellar doors open for tasting. Semillon and Shiraz are the signature wines. Many wineries offer cheese and chocolate pairings. Pokolbin is the main area — stay overnight if you're doing a full day of tastings (designated driver or tour bus). The Hunter Valley Gardens, ballooning at sunrise, and the Hunter Valley Zoo are great non-wine activities. Best season: spring and autumn. Book accommodation early for weekends and holiday periods.", ja: "オーストラリア最古のワイン産地で、シドニーから北へ約 2 時間。150 以上のワイナリーがセラードアで試飲を提供しています。セミヨンとシラーズが代表的なワインです。多くのワイナリーがチーズやチョコレートとのペアリングを用意しています。Pokolbin が中心エリア — 一日中試飲するなら宿泊しましょう（指定運転手かツアーバスで）。Hunter Valley Gardens、日の出の気球、Hunter Valley Zoo はワイン以外の素晴らしいアクティビティです。ベストシーズン：春と秋。週末や連休期間は宿泊先を早めに予約しましょう。", zh: "澳大利亚最古老的葡萄酒产区，位于悉尼以北约 2 小时。超过 150 家酒庄的品酒室开放供品尝。赛美蓉和西拉是招牌葡萄酒。许多酒庄提供奶酪和巧克力搭配。Pokolbin 是主要区域 — 如果打算品酒一整天，最好过夜（指定司机或旅游巴士）。Hunter Valley Gardens、日出热气球和 Hunter Valley Zoo 都是很棒的非品酒活动。最佳季节：春季和秋季。周末和假期的住宿要提前预订。", ko: "호주에서 가장 오래된 와인 산지, 시드니 북쪽 약 2시간. 150개 이상의 와이너리가 셀러 도어에서 시음을 제공합니다. 세미용과 쉬라즈가 시그니처 와인. 많은 와이너리가 치즈와 초콜릿 페어링을 제공합니다. Pokolbin이 주요 지역 — 하루 종일 시음할 경우 숙박하세요(지정 운전자 또는 투어 버스). Hunter Valley Gardens, 일출 열기구, Hunter Valley Zoo는 훌륭한 비와인 활동입니다. 최적 시즌: 봄과 가을. 주말과 휴일 기간에는 숙소를 일찍 예약하세요." },
    ],
  },
  {
    id: "tips",
    iconKey: "Clock",
    accent: "sunset",
    title: "Plan Ahead",
    koTitle: "미리 계획하기",
    jaTitle: "\u4e8b\u524d\u306e\u8a08\u753b",
    zhTitle: "\u63d0\u524d\u89c4\u5212",
    desc: "What to check before you go, what to pack, and how to stay safe",
    koDesc: "출발 전 확인할 것, 챙길 것, 안전 수칙",
    jaDesc: "\u51fa\u767a\u524d\u306b\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3001\u6301\u3061\u7269\u3001\u5b89\u5168\u306e\u5b88\u308a\u65b9",
    zhDesc: "\u51fa\u53d1\u524d\u8981\u67e5\u4ec0\u4e48\u3001\u8981\u5e26\u4ec0\u4e48\uff0c\u4ee5\u53ca\u5982\u4f55\u4fdd\u6301\u5b89\u5168",
    items: [
      { label: "Before You Leave",
      jaLabel: "\u51fa\u767a\u524d\u306b",
      zhLabel: "\u51fa\u53d1\u524d",
      koLabel: "\ucd9c\ubc1c \uc804 \ud655\uc778", en: "Check the weather forecast (BOM app or bom.gov.au). For national parks, check the NSW National Parks website for track closures, fire danger ratings, and park fees. Tell someone your route and expected return time if hiking. Download offline maps — phone service drops out in many regional areas and national parks. If driving, check your fuel — service stations can be far apart in regional areas. Fill up in the last major town before heading inland.", ja: "天気予報を確認しましょう（BOM アプリまたは bom.gov.au）。国立公園については、NSW National Parks のウェブサイトでトレイルの閉鎖、火災危険度、公園の料金を確認しましょう。ハイキングの場合は、ルートと帰還予定時刻を誰かに伝えましょう。オフライン地図をダウンロードしましょう — 多くの地方や国立公園では携帯電話の電波が途切れます。車で行く場合は燃料を確認しましょう — 地方ではガソリンスタンドの間隔が離れていることがあります。内陸へ向かう前に最後の主要な町で満タンにしましょう。", zh: "查看天气预报（BOM 应用或 bom.gov.au）。如果要去国家公园，请查看 NSW National Parks 网站了解步道封闭情况、火灾危险等级和公园费用。如果徒步，请把路线和预计返回时间告诉别人。下载离线地图 — 许多偏远地区手机信号会中断。如果开车，请检查油量 — 偏远地区加油站之间可能相距很远。进入内陆前先在最后一个主要城镇加满油。", ko: "날씨 예보 확인(BOM 앱 또는 bom.gov.au). 국립공원은 NSW National Parks 웹사이트에서 트랙 폐쇄, 화재 위험 등급, 공원 요금을 확인하세요. 하이킹 시 경로와 예상 귀환 시간을 누군가에게 알리세요. 오프라인 지도 다운로드 — 많은 지역과 국립공원에서 휴대폰 서비스가 끊깁니다. 운전 시 연료 확인 — 지역에서는 주유소 간 거리가 멀 수 있습니다. 내륙으로 가기 전 마지막 주요 도시에서 주유하세요." },
      { label: "What to Pack",
      jaLabel: "\u6301\u3061\u7269",
      zhLabel: "\u643a\u5e26\u7269\u54c1",
      koLabel: "\uc900\ube44\ubb3c", en: "Water — at least 2L per person for a day trip, more for hiking. Snacks and lunch — food options can be limited in small towns and national parks. First aid kit (bandaids, antiseptic, ibuprofen). Sunscreen, hat, sunglasses — the Australian sun is strong year-round. Layers — even in summer, coastal areas can get cool in the evening. Power bank for your phone. Jumper cables if driving — a flat battery in a remote area is a bad time. Cash — some smaller cafes and markets are card-only, but some are cash-only.", ja: "水 — 日帰りなら 1 人あたり少なくとも 2L、ハイキングならもっと。軽食と昼食 — 小さな町や国立公園では食事の選択肢が限られることがあります。救急セット（絆創膏、消毒薬、イブプロフェン）。日焼け止め、帽子、サングラス — オーストラリアの日差しは一年中強いです。重ね着 — 夏でも海岸地域は夕方に涼しくなることがあります。スマホ用のモバイルバッテリー。車で行くならジャンパーケーブル — 人里離れた場所でのバッテリー上がりは厄介です。現金 — 小さなカフェや市場の中にはカード専用のところもありますが、現金しか受け付けないところもあります。", zh: "水 — 一日游每人至少 2 升，徒步则需要更多。零食和午餐 — 小镇和国家公园里的餐饮选择可能有限。急救包（创可贴、消毒液、布洛芬）。防晒霜、帽子、太阳镜 — 澳大利亚的阳光一年四季都很强烈。多穿几层 — 即使是夏天，沿海地区傍晚也可能变凉。手机充电宝。如果开车，带上搭电线 — 在偏远地区电瓶没电会很麻烦。现金 — 一些小咖啡馆和市场只刷卡，但也有一些只收现金。", ko: "물 — 당일 여행 시 1인당 최소 2L, 하이킹 시 더 많이. 간식과 점심 — 작은 마을과 국립공원에서는 식당 옵션이 제한적일 수 있음. 구급상자(밴드에이드, 소독제, 이부프로펜). 선크림, 모자, 선글라스 — 호주 태양은 연중 강력합니다. 겹쳐 입기 — 여름에도 해안 지역은 저녁에 선선할 수 있음. 휴대폰 보조배터리. 운전 시 점퍼 케이블 — 외딴 지역에서 배터리 방전은 큰 문제입니다. 현금 — 일부 작은 카페와 시장은 카드만 받지만, 일부는 현금만 받습니다." },
      { label: "Safety",
      jaLabel: "\u5b89\u5168",
      zhLabel: "\u5b89\u5168",
      koLabel: "\uc548\uc804 \uc218\uce59", en: "Swim between the red and yellow flags at beaches — rips can be deadly. Check the BeachSafe website or app for patrolled beaches and conditions. If driving long distances, take breaks every 2 hours (driver reviver stops on highways during holiday periods with free tea/coffee). Avoid driving at dusk and dawn in regional areas — kangaroos are most active then and cause serious accidents. If you see smoke in summer, check the RFS Fires Near Me app before continuing. Phone emergency: 000 (triple zero).", ja: "ビーチでは赤と黄色の旗の間で泳ぎましょう — 離岸流は命に関わることがあります。監視員のいるビーチや状況は BeachSafe のウェブサイトかアプリで確認しましょう。長距離を運転する場合は 2 時間ごとに休憩を取りましょう（連休期間中は高速道路に driver reviver 休憩所があり、無料のお茶・コーヒーがもらえます）。地方では夕暮れ時と夜明けの運転は避けましょう — カンガルーが最も活発になり、重大な事故を引き起こします。夏に煙が見えたら、先に進む前に RFS Fires Near Me アプリを確認しましょう。緊急電話：000（トリプルゼロ）。", zh: "在海滩上请在红黄旗之间游泳 — 离岸流可能致命。查看 BeachSafe 网站或应用了解有救生员巡逻的海滩和状况。如果长途驾驶，每 2 小时休息一次（假期间高速公路上设有 driver reviver 休息站，提供免费茶和咖啡）。偏远地区要避免在黄昏和黎明时开车 — 那时袋鼠最活跃，会导致严重事故。夏天如果看到烟雾，继续前行前请查看 RFS Fires Near Me 应用。紧急电话：000（三个零）。", ko: "해변에서는 빨강과 노랑 깃발 사이에서 수영하세요 — 이안류는 치명적일 수 있음. 순찰 해변과 상태는 BeachSafe 웹사이트나 앱에서 확인하세요. 장거리 운전 시 2시간마다 휴식(휴일 기간 고속도로에 driver reviver 정류장에서 무료 차/커피). 지역에서 해질녘과 새벽에 운전 피하기 — 캥거루가 가장 활동적이며 심각한 사고를 일으킴. 여름에 연기를 보면 계속 가기 전에 RFS Fires Near Me 앱을 확인하세요. 긴급 전화: 000(트리플 제로)." },
    ],
  },
];

export default function RoadTripsPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">

        <img

          src="/roadtrip.jpg"

          alt="Person driving on an Australian road trip"

          className="absolute inset-0 w-full h-full object-cover"

        />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-stone-900/20" />

        <div className="absolute inset-0 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10">

          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">

            <En translated>Road Trips</En>
            <Ja>ロードトリップ</Ja>
            <Zh>公路旅行</Zh><Ko>로드트립</Ko>

          </p>

          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.95] mb-4">

            <En translated>Hit the road</En>
            <Ja>さあ、旅に出よう</Ja>
            <Zh>上路吧</Zh>

            <Ko>길을 떠나자</Ko>

          </h1>

          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">

            <En translated>The best weekend getaways and day trips from Sydney — south to Kiama, north to Port Stephens, west to the Blue Mountains, and everything in between.</En>
            <Ja>シドニー発の最高の週末旅行と日帰り旅行 — 南はカイアマ、北はポート・スティーブンス、西はブルー・マウンテンズ、そしてその間のすべて。</Ja>
            <Zh>从悉尼出发的最佳周末度假和一日游 — 南到凯马，北到史蒂芬斯港，西到蓝山，以及其间的一切。</Zh>
            <Ko>시드니에서 떠나는 최고의 주말 여행과 당일 여행 — 남쪽 카이아마, 북쪽 포트스테판, 서쪽 블루마운틴까지.</Ko>

          </p>

        </div>

      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="space-y-12">
          {sections.map((section, i) => (
            <EditorialSection key={section.id} data={section} index={i} />
          ))}
        </div>

        <section className="mt-16 rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 mb-3">
            <En translated>Trip planner</En>
            <Ja>旅行プランナー</Ja>
            <Zh>行程规划器</Zh><Ko>여행 플래너</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En translated>Plan your next adventure.</En>
            <Ja>次の冒険を計画しましょう。</Ja>
            <Zh>规划你的下一次冒险。</Zh>
            <Ko>다음 모험을 계획하세요.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En translated>The secret to a great Australian road trip is planning ahead. Check the weather, fuel up in the last major town, pack snacks and water, and always tell someone where you're going. Take breaks every two hours — driver fatigue is a major cause of regional accidents. A road trip is not about speed. It's about the stops along the way.</En>
            <Ja>素晴らしいオーストラリアのロードトリップの秘訣は事前の計画です。天気を確認し、最後の主要な町で給油し、軽食と水を用意し、必ず行き先を誰かに伝えましょう。2時間ごとに休憩を取りましょう — ドライバーの疲労は地方での事故の主な原因です。ロードトリップは速度ではありません。道中の停車にこそ意味があります。</Ja>
            <Zh>一趟精彩的澳大利亚公路旅行的秘诀就是提前规划。查看天气，在最后一个大城镇加满油，备好零食和水，并且一定要告诉别人你要去哪里。每两小时休息一次 — 司机疲劳是偏远地区事故的主要原因。公路旅行不在于速度，而在于沿途的停靠。</Zh>
            <Ko>훌륭한 호주 로드트립의 비결은 사전 계획입니다. 날씨를 확인하고, 마지막 주요 도시에서 주유하고, 간식과 물을 챙기고, 항상 누군가에게 행선지를 알리세요. 2시간마다 휴식을 취하세요 — 운전자 피로는 지역 사고의 주요 원인입니다. 로드트립은 속도에 관한 것이 아닙니다. 길을 따라 멈추는 정거장들에 관한 것입니다.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.nationalparks.nsw.gov.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">NSW National Parks ↗</a>
            <a href="https://www.livetraffic.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Live Traffic NSW ↗</a>
          </div>
        </section>
      </div>
    </div>
  );
}

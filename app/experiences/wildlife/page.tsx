// Server component — practical guide to seeing Australian wildlife.
// Bilingual EN/KO, editorial style.

import Link from "next/link";
import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import { pickLocale } from "@/lib/locale";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import {
  MapPin,
  Phone,
  DollarSign,
  ShieldCheck,
  AlertTriangle,
  Mountain,
  Tree,
  Koala,
  Kangaroo,
  Sunrise,
  Heart,
} from "@/components/Icons";
import { seoFor, withSeo } from "@/lib/seo";

type WildlifeSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; en: string; ko: string; ja?: string; zh?: string }>;
};

const sections: WildlifeSection[] = [
  {
    id: "taronga-zoo",
    iconKey: "Koala",
    accent: "sage",
    title: "Taronga Zoo Sydney",
    koTitle: "타롱가 동물원",
    desc: "World-class zoo with harbour views — a ferry ride from the city",
    koDesc: "항구 전망의 세계적 동물원 — 시티에서 페리로 이동",
    items: [
      {
        label: "Getting there",
        en: "Take the F2 ferry from Circular Quay to Taronga Zoo ($7 AUD–8 Opal, 12 min). The ferry itself is one of the best harbour experiences — you'll sail past the Opera House and under the Harbour Bridge. A zoo entry ticket includes the Sky Safari cable car from the wharf up to the main entrance.", ja: "サーキュラー・キーから F2 フェリーに乗ってタロンガ動物園へ（$7 AUD〜8 オパール、12 分）。フェリー自体が最高のハーバー体験のひとつです — オペラハウスの横を通り、ハーバーブリッジの下をくぐります。動物園の入場券には、船着き場から正面入口までのスカイ・サファリ・ケーブルカーが含まれています。", zh: "从环形码头乘坐 F2 渡轮到塔龙加动物园（$7 AUD–8 澳宝卡，12 分钟）。渡轮本身就是最棒的港湾体验之一 — 你会经过歌剧院，并从海港大桥下方穿过。动物园门票包含从码头到正门的天空 Safari 缆车。",
        ko: "서큘러 키에서 F2 페리를 타고 타롱가 동물원까지 ($7 AUD–8 오팔, 12분). 페리 자체가 최고의 하버 경험 중 하나 — 오페라 하우스를 지나 하버 브리지 아래로 항해합니다. 동물원 입장권에는 선착장에서 정문까지 가는 스카이 사파리 케이블카가 포함됩니다.",
      },
      {
        label: "Entry & hours",
        en: "Adult tickets ~$50 AUD online (cheaper than the gate). Open 9:30am–4:30pm daily. The zoo is on a steep hillside — wear comfortable shoes. The Sky Safari cable car saves you the uphill walk, but you can also take the free shuttle bus from the wharf.", ja: "大人のチケットはオンラインで約 $50 AUD（窓口より安い）。毎日 9:30am〜4:30pm 開園。動物園は急な丘の上にあります — 履きやすい靴を。スカイ・サファリ・ケーブルカーを使えば上り坂を避けられますが、船着き場から無料のシャトルバスも出ています。", zh: "成人票在网上约 $50 AUD（比现场售票处便宜）。每天 9:30am–4:30pm 开放。动物园坐落在陡峭的山坡上 — 请穿舒适的鞋。天空 Safari 缆车能让你免去上坡的步行，也可以从码头乘坐免费接驳巴士。",
        ko: "성인 온라인 티켓 약 $50 AUD (현장보다 저렴). 매일 9:30am–4:30pm 운영. 경사진 언덕에 위치 — 편한 신발을 신으세요. 스카이 사파리 케이블카로 오르막을 피할 수 있지만, 선착장에서 무료 셔틀버스도 있습니다.",
      },
      {
        label: "Bird show (must-see)",
        en: "The Free Flight Bird Show runs at 12:00pm and 3:00pm daily in the amphitheatre. Eagles, owls, and rainbow lorikeets fly directly over the audience — you'll feel the wind from their wings. Arrive 10 minutes early for a good seat. The show is included in your entry fee.", ja: "フリー・フライト・バードショーは毎日 12:00pm と 3:00pm に野外円形劇場で行われます。ワシ、フクロウ、コセイインコが観客のすぐ頭上を飛びます — 翼が起こす風を感じられます。良い席を取るなら 10 分前に到着しましょう。ショーは入場料に含まれています。", zh: "自由飞行鸟类表演每天 12:00pm 和 3:00pm 在露天剧场举行。老鹰、猫头鹰和虹彩吸蜜鹦鹉会直接从观众头顶飞过 — 你能感受到它们翅膀带起的风。提前 10 分钟到场占个好位置。表演包含在门票内。",
        ko: "Free Flight Bird Show는 매일 12:00pm과 3:00pm에 야외 원형극장에서 진행됩니다. 독수리, 올빼미, 무지개 잉꼬가 관객 머리 위로 직접 날아듭니다 — 날개 바람을 느낄 수 있습니다. 좋은 자리를 위해 10분 일찍 도착하세요. 입장료에 포함되어 있습니다.",
      },
      {
        label: "Koala encounters",
        en: "Taronga has a dedicated koala exhibit. You can't hold koalas here (that's not allowed in NSW), but you can get remarkably close. The best time to see them active is early morning or late afternoon — they sleep about 20 hours a day.", ja: "タロンガには専用のコアラ展示があります。ここではコアラを抱くことはできません（NSW では許可されていません）が、驚くほど近くで見られます。動いている姿を見るのに最適なのは早朝か夕方遅く — 彼らは 1 日約 20 時間眠ります。", zh: "塔龙加有专门的考拉展区。这里不能抱考拉（新南威尔士州不允许），但可以靠得非常近。看它们活动的最佳时间是清晨或傍晚 — 它们一天大约睡 20 个小时。",
        ko: "타롱가에는 전용 코알라 전시관이 있습니다. 여기서 코알라를 안을 수는 없지만(NSW에서는 허용되지 않음), 상당히 가까이 갈 수 있습니다. 활동적인 모습을 보려면 이른 아침이나 늦은 오후가 최적 — 하루 약 20시간을 잡니다.",
      },
      {
        label: "Best for",
        en: "Families, couples, and anyone who wants a full-day outing. Combine the zoo with a sunset ferry back to Circular Quay for one of Sydney's best value days out (~$70 AUD per person including ferry and entry).", ja: "家族連れ、カップル、そして一日たっぷりお出かけしたいすべての方に。動物園を楽しんだ後、夕日の中のフェリーでサーキュラー・キーへ戻るコースは、シドニーで最もコスパの良い一日の過ごし方のひとつです（フェリーと入場料込みで 1 人約 $70 AUD）。", zh: "适合家庭、情侣以及任何想玩上一整天的人。游览动物园后，再乘日落渡轮返回环形码头，是悉尼性价比最高的出行方式之一（含渡轮和门票每人约 $70 AUD）。",
        ko: "가족, 커플, 그리고 하루 종일 나들이를 원하는 모든 분. 동물원 관람 후 일몰 페리로 서큘러 키로 돌아오는 코스는 시드니 최고의 가성비 당일치기 중 하나 (페리 & 입장권 포함 1인 약 $70 AUD).",
      },
    ],
  },
  {
    id: "koala-park",
    iconKey: "Tree",
    accent: "sage",
    title: "Koala Park Sanctuary",
    koTitle: "코알라 파크 생츄어리",
    desc: "Intimate native wildlife park — the most affordable koala experience",
    koDesc: "아늑한 호주 야생동물 공원 — 가장 저렴한 코알라 체험",
    items: [
      {
        label: "Entry & hours",
        en: "Adult entry ~$30 AUD — the most affordable dedicated koala sanctuary near Sydney. Open 9:00am–5:00pm daily. Located in Pennant Hills, about 40 minutes from the CBD by car. Much quieter and less crowded than Taronga or Featherdale.", ja: "大人入場料約 $30 AUD — シドニー近郊で最も手頃なコアラ専門の保護区。毎日 9:00am〜5:00pm 開園。Pennant Hills にあり、CBD から車で約 40 分。タロンガやフェザーデールよりずっと静かで混雑していません。", zh: "成人门票约 $30 AUD — 悉尼附近最实惠的考拉专门保护区。每天 9:00am–5:00pm 开放。位于 Pennant Hills，距市中心车程约 40 分钟。比塔龙加或 Featherdale 安静得多，也没那么拥挤。",
        ko: "성인 약 $30 AUD — 시드니 근교에서 가장 저렴한 코알라 전문 보호구역. 매일 9:00am–5:00pm 운영. Pennant Hills에 위치, CBD에서 차로 약 40분. 타롱가나 페더데일보다 훨씬 조용하고 붐비지 않습니다.",
      },
      {
        label: "Getting there",
        en: "Drive (free parking available) or take a train from Central to Pennant Hills station (~35 min, ~$5 AUD Opal), then a 10-minute taxi or Uber. Buses run hourly from the station — check the Transport NSW app for route 651 or 632.", ja: "車（無料駐車場あり）か、セントラルから Pennant Hills 駅まで電車（約 35 分、約 $5 AUD オパール）、その後タクシーか Uber で 10 分。駅からは 651 番か 632 番のバスが 1 時間に 1 本運行しています — Transport NSW アプリで確認しましょう。", zh: "自驾（有免费停车）或从中央车站乘火车到 Pennant Hills 站（约 35 分钟，约 $5 AUD 澳宝卡），再打车或坐 Uber 约 10 分钟。从车站出发的 651 路或 632 路巴士每小时一班 — 请查看 Transport NSW 应用。",
        ko: "자동차 이용 (무료 주차 가능) 또는 센트럴에서 Pennant Hills 역까지 기차 (~35분, ~$5 AUD 오팔), 이후 택시나 Uber로 10분. 역에서 651번 또는 632번 버스가 시간당 1회 운행 — Transport NSW 앱 확인.",
      },
      {
        label: "Koala experience",
        en: "Koala Park has one of the largest koala colonies in NSW. You can walk through the eucalyptus groves and see koalas at eye level. The park also has kangaroos, wombats, dingoes, and emus. Educational talks run throughout the day — check the board at the entrance.", ja: "Koala Park は NSW で最大級のコアラのコロニーのひとつを抱えています。ユーカリの林を歩きながら、目の高さでコアラを見ることができます。カンガルー、ウォンバット、ディンゴ、エミューもいます。教育トークは一日中行われています — 入口の掲示板をチェックしましょう。", zh: "Koala Park 拥有新南威尔士州最大的考拉群落之一。你可以穿过桉树林，与考拉平视。园内还有袋鼠、袋熊、澳洲野狗和鸸鹋。全天都有科普讲解 — 请查看入口处的告示板。",
        ko: "Koala Park은 NSW에서 가장 큰 코알라 군집 중 하나를 보유합니다. 유칼립투스 숲을 걸으며 눈높이에서 코알라를 볼 수 있습니다. 캥거루, 웜뱃, 딩고, 에뮤도 있습니다. 교육 토크는 하루 종일 진행 — 입구 게시판 확인.",
      },
      {
        label: "Best for",
        en: "Budget travellers and wildlife enthusiasts who want a focused, uncrowded koala experience. Great for photography — fewer people means better photo opportunities.", ja: "コアラをじっくり、混雑なしで体験したい予算重視の旅行者や動物好きに。写真撮影にも最適 — 人が少ない分、良い写真が撮れます。", zh: "适合想要专注、不拥挤地看考拉的精打细算的旅行者和野生动物爱好者。也很适合拍照 — 人少意味着更好的拍照机会。",
        ko: "예산 여행객과 한적한 코알라 체험을 원하는 야생동물 애호가. 사진 찍기에 좋음 — 사람이 적어 더 좋은 사진 기회.",
      },
    ],
  },
  {
    id: "featherdale",
    iconKey: "Kangaroo",
    accent: "sage",
    title: "Featherdale Wildlife Park",
    koTitle: "페더데일 와일드라이프 파크",
    desc: "The best place to hand-feed kangaroos — just west of Sydney",
    koDesc: "캥거루 손먹이 주기에 최고의 장소 — 시드니 서쪽",
    items: [
      {
        label: "Entry & hours",
        en: "Adult tickets ~$40 AUD. Open 9:00am–5:00pm daily. Located in Doonside, about 45 minutes from the CBD by car. Featherdale is famous for its walk-through kangaroo enclosure where you can buy a bag of kangaroo feed ($2 AUD) and feed them by hand.", ja: "大人チケット約 $40 AUD。毎日 9:00am〜5:00pm 開園。Doonside にあり、CBD から車で約 45 分。フェザーデールは、カンガルーの囲いの中を歩きながら、カンガルーの餌の袋（$2 AUD）を買って手から餌をあげられることで有名です。", zh: "成人票约 $40 AUD。每天 9:00am–5:00pm 开放。位于 Doonside，距市中心车程约 45 分钟。Featherdale 以可以走进袋鼠围栏、买一袋袋鼠饲料（$2 AUD）亲手喂食而闻名。",
        ko: "성인 약 $40 AUD. 매일 9:00am–5:00pm 운영. Doonside에 위치, CBD에서 차로 약 45분. 페더데일은 캥거루 우리를 걸으며 캥거루 사료 봉지($2 AUD)를 사서 손으로 먹이를 줄 수 있는 것으로 유명합니다.",
      },
      {
        label: "Getting there",
        en: "Train from Central to Doonside station (~45 min, ~$6 AUD Opal), then a 5-minute taxi. By car: take the M4 motorway west, exit at Doonside Road. Free parking on-site. Consider combining Featherdale with a day trip to the Blue Mountains — they're on the same train line.", ja: "セントラルから Doonside 駅まで電車（約 45 分、約 $6 AUD オパール）、その後タクシーで 5 分。車の場合：M4 高速道路を西へ、Doonside Road で降ります。敷地内に無料駐車場あり。フェザーデールとブルー・マウンテンズの日帰り旅行を組み合わせるのもおすすめ — 同じ電車の路線沿いにあります。", zh: "从中央车站乘火车到 Doonside 站（约 45 分钟，约 $6 AUD 澳宝卡），再打车 5 分钟。自驾：走 M4 高速公路向西，从 Doonside Road 出口下。园区内有免费停车。可以考虑把 Featherdale 和蓝山一日游结合起来 — 它们在同一条火车线路上。",
        ko: "센트럴에서 Doonside 역까지 기차 (~45분, ~$6 AUD 오팔), 이후 택시 5분. 자동차: M4 고속도로 서쪽, Doonside Road 출구. 현장 무료 주차. 블루마운틴 당일 여행과 페더데일을 결합하는 것도 고려 — 같은 기차 노선상에 있습니다.",
      },
      {
        label: "Kangaroo feeding tips",
        en: "The kangaroos are very gentle and used to people. Kneel down to their level and hold the feed pouch flat in your palm (not with your fingers pinched — they might nibble). They prefer to be approached slowly. No flash photography — it startles them. Wash hands after feeding.", ja: "カンガルーはとてもおとなしく、人に慣れています。しゃがんで彼らの目線に合わせ、餌の袋を手のひらに平らに置きましょう（指でつままないこと — かじられることがあります）。ゆっくり近づくのを好みます。フラッシュ撮影は禁止 — 驚かせてしまいます。餌をあげた後は手を洗いましょう。", zh: "袋鼠非常温顺，也习惯与人相处。蹲下到它们的高度，把饲料袋平放在手掌上（不要用手指捏着 — 它们可能会咬）。它们喜欢被慢慢地靠近。禁止使用闪光灯拍照 — 会吓到它们。喂完后要洗手。",
        ko: "캥거루는 매우 온순하고 사람에게 익숙합니다. 무릎을 굽혀 캥거루 높이에 맞추고 사료 주머니를 손바닥에 평평하게 올려주세요 (손가락으로 집지 마세요 — 깨물 수 있습니다). 천천히 다가가는 것을 선호합니다. 플래시 사진 금지 — 놀랄 수 있습니다. 먹이 준 후 손 씻기.",
      },
      {
        label: "What else is here",
        en: "Over 400 animals including koalas (photo opportunities available), wombats, Tasmanian devils, crocodiles, snakes, and native birds. The park is compact and very walkable — you can see everything in 2–3 hours. Indoor reptile house is worth a visit.", ja: "コアラ（写真撮影可）、ウォンバット、タスマニアデビル、ワニ、ヘビ、在来の鳥など 400 匹以上の動物がいます。園内はコンパクトで歩きやすい — 2〜3 時間ですべて見られます。屋内の爬虫類館も訪れる価値があります。", zh: "超过 400 只动物，包括考拉（可以拍照）、袋熊、塔斯马尼亚恶魔、鳄鱼、蛇和本土鸟类。园区紧凑，很好走 — 2–3 小时就能看完所有内容。室内的爬行动物馆值得一看。",
        ko: "코알라(사진 촬영 가능), 웜뱃, 태즈메이니아 데블, 악어, 뱀, 토종 조류 등 400마리 이상의 동물. 공원은 컴팩트하고 걷기 좋음 — 2–3시간이면 모두 관람 가능. 실내 파충류관도 방문할 만합니다.",
      },
    ],
  },
  {
    id: "royal-national-park",
    iconKey: "Mountain",
    accent: "coast",
    title: "Royal National Park",
    koTitle: "로열 내셔널 파크",
    desc: "Australia's oldest national park — wild coastline, bushwalks & native animals",
    koDesc: "호주 최초의 국립공원 — 야생 해안선, 숲 산책 & 야생동물",
    items: [
      {
        label: "Overview",
        en: "Founded in 1879, the Royal National Park is the second-oldest national park in the world (after Yellowstone). Just an hour south of Sydney, it offers dramatic coastal cliffs, secluded beaches, eucalyptus forests, and abundant wildlife. Kangaroos, wallabies, lyrebirds, and echidnas are commonly spotted.", ja: "1879 年に設立されたロイヤル・ナショナル・パークは、世界で 2 番目に古い国立公園です（イエローストーンに次ぐ）。シドニーから南へわずか 1 時間で、劇的な海岸の崖、人里離れたビーチ、ユーカリの森、豊富な野生動物が楽しめます。カンガルー、ワラビー、コトドリ、ハリモグラがよく見られます。", zh: "皇家国家公园建于 1879 年，是世界上第二古老的国家公园（仅次于黄石公园）。距悉尼以南仅一小时，这里有壮观的海岸悬崖、幽静的海滩、桉树林和丰富的野生动物。袋鼠、小袋鼠、琴鸟和针鼹都很常见。",
        ko: "1879년 설립된 로열 내셔널 파크는 세계에서 두 번째로 오래된 국립공원(옐로스톤 다음). 시드니에서 남쪽으로 1시간, 드라마틱한 해안 절벽, 한적한 해변, 유칼립투스 숲, 풍부한 야생동물을 제공합니다. 캥거루, 왈라비, 거문고새, 가시두더지를 자주 볼 수 있습니다.",
      },
      {
        label: "Best walks",
        en: "The Coast Track (26 km, 2 days) is iconic — cliffs, whale views (May–Nov), and the Figure Eight Pools (check tides before visiting). The Bundeena Drive to Wedding Cake Rock is a shorter 3–4 km return walk. Wattamolla beach has a lagoon perfect for swimming. Check nationalparks.nsw.gov.au for track conditions.", ja: "コースト・トラック（26 km、2 日間）は象徴的です — 崖、クジラの観察（5〜11 月）、そして Figure Eight Pools（訪れる前に潮位を確認してください）。Bundeena Drive から Wedding Cake Rock までは、より短い 3〜4 km の往復ウォーキングです。Wattamolla ビーチには水泳にぴったりのラグーンがあります。トレイルの状況は nationalparks.nsw.gov.au で確認しましょう。", zh: "海岸步道（26 公里，2 天）非常经典 — 悬崖、赏鲸（5–11 月）和 Figure Eight Pools（前往前请查看潮汐）。从 Bundeena Drive 到 Wedding Cake Rock 是一段较短的 3–4 公里往返步道。Wattamolla 海滩有一个非常适合游泳的泻湖。请在 nationalparks.nsw.gov.au 查看步道状况。",
        ko: "Coast Track (26km, 2일)은 상징적 — 절벽, 고래 감상(5–11월), Figure Eight Pools (방문 전 조수 확인). Bundeena Drive에서 Wedding Cake Rock까지는 더 짧은 3–4km 왕복 산책로. Wattamolla 해변에는 수영에 완벽한 석호가 있습니다. nationalparks.nsw.gov.au에서 트레일 상태를 확인하세요.",
      },
      {
        label: "Entry & access",
        en: "Vehicle entry ~$12 AUD per day. Park gates open 7am–8:30pm (summer) or 7am–5:30pm (winter). Train to Cronulla then ferry to Bundeena is a popular car-free option. Bring water, sunscreen, and a hat — there's very little shade on the coastal track.", ja: "車両入場料は 1 日約 $12 AUD。公園のゲートは 7am〜8:30pm（夏）または 7am〜5:30pm（冬）に開きます。Cronulla まで電車で行き、そこからフェリーで Bundeena へ渡るのが人気の車なしの方法です。水、日焼け止め、帽子を持参しましょう — 海岸のトレイルには日陰がほとんどありません。", zh: "车辆入园费约每天 $12 AUD。公园大门开放时间为 7am–8:30pm（夏季）或 7am–5:30pm（冬季）。乘火车到 Cronulla，再换渡轮去 Bundeena，是热门的无车选择。请带上水、防晒霜和帽子 — 海岸步道上几乎没有阴凉处。",
        ko: "차량 입장료 1일 약 $12 AUD. 공원 개방 시간 오전 7시–오후 8시 30분(여름) 또는 오전 7시–오후 5시 30분(겨울). Cronulla까지 기차 후 Bundeena행 페리는 무차량 인기 옵션. 물, 선크림, 모자 필수 — 해안 트레일에 그늘이 거의 없습니다.",
      },
      {
        label: "Wildlife safety",
        en: "You will see wild animals here — keep your distance. Don't feed kangaroos (it's illegal and harmful to them). Snakes (including eastern browns and tiger snakes) are active in warm months. Watch where you step, stay on marked trails, and never reach into crevices.", ja: "ここでは野生動物が見られます — 距離を保ちましょう。カンガルーに餌を与えないでください（違法で、彼らに有害です）。ヘビ（イースタン・ブラウンやタイガー・スネークなど）は暖かい季節に活発です。足元に注意し、整備されたトレイルから外れず、岩の割れ目に手を入れないでください。", zh: "在这里你会看到野生动物 — 请保持距离。不要喂袋鼠（这是违法的，而且对它们有害）。蛇（包括东部拟眼镜蛇和虎蛇）在温暖的月份很活跃。注意脚下，待在标记好的步道上，绝不要把手伸进岩缝里。",
        ko: "여기서 야생동물을 볼 수 있습니다 — 거리를 유지하세요. 캥거루에게 먹이를 주지 마세요 (불법이며 해롭습니다). 뱀(이스턴 브라운, 타이거 스네이크 포함)은 따뜻한 계절에 활동합니다. 발밑을 조심하고, 지정된 트레일을 벗어나지 말고, 바위 틈에 손을 넣지 마세요.",
      },
    ],
  },
  {
    id: "kur-ring-gai",
    iconKey: "Tree",
    accent: "coast",
    title: "Ku-ring-gai Chase National Park",
    koTitle: "쿠링가이 체이스 국립공원",
    desc: "Ancient Aboriginal rock art, secluded beaches & bushland north of Sydney",
    koDesc: "고대 원주민 암각화, 한적한 해변 & 시드니 북쪽의 숲",
    items: [
      {
        label: "Overview",
        en: "Just 30 km north of the CBD, Ku-ring-gai Chase is one of NSW's most accessible national parks. It combines stunning Hawkesbury River scenery, over 1,000 recorded Aboriginal rock engravings and midden sites, and diverse wildlife. Wallabies at dusk are almost guaranteed at the Basin campground.", ja: "CBD から北へわずか 30 km、ク・リング・ガイ・チェイスは NSW で最も行きやすい国立公園のひとつです。見事なホークスベリー川の景色、1,000 を超える記録された先住民の岩刻画と貝塚、多様な野生動物が一体となっています。夕暮れ時のベイスン・キャンプ場ではワラビーがほぼ確実に見られます。", zh: "距市中心以北仅 30 公里，Ku-ring-gai Chase 是新南威尔士州最容易到达的国家公园之一。这里汇集了迷人的霍克斯伯里河风光、1000 多处有记录的土著岩刻和贝丘遗址，以及多样的野生动物。黄昏时分在 The Basin 露营地几乎一定能看到小袋鼠。",
        ko: "CBD에서 북쪽으로 30km, 쿠링가이 체이스는 NSW에서 가장 접근성이 좋은 국립공원 중 하나입니다. 황홀한 호크스베리 강 풍경, 1,000개 이상의 기록된 원주민 암각화와 유적지, 다양한 야생동물이 어우러져 있습니다. 해질녘 베이슨 캠프장에서 왈라비를 거의 확실히 볼 수 있습니다.",
      },
      {
        label: "Must-do activities",
        en: "Hire a kayak at Cottage Point or Bobbin Head and paddle through the river gorges. The Aboriginal rock engravings at West Head offer ancient kangaroo and fish carvings with panoramic views back to Sydney. The Resolute picnic area is beautiful for a quiet lunch. Bushwalking trails range from 1 km to 10 km.", ja: "Cottage Point か Bobbin Head でカヤックを借りて、川の峡谷を漕ぎましょう。West Head の先住民の岩刻画では、古代のカンガルーや魚の彫刻を、シドニーを望むパノラマとともに鑑賞できます。Resolute ピクニックエリアは静かなランチに美しい場所です。ブッシュウォーキングのトレイルは 1 km から 10 km までさまざまです。", zh: "在 Cottage Point 或 Bobbin Head 租一艘皮划艇，划过河谷。West Head 的土著岩刻有古老的袋鼠和鱼形雕刻，还可以远眺悉尼的全景。Resolute 野餐区很适合安静地吃午餐。丛林步道从 1 公里到 10 公里不等。",
        ko: "Cottage Point나 Bobbin Head에서 카약을 빌려 강 협곡을 노젓는 체험. West Head의 원주민 암각화는 시드니의 파노라마 뷰와 함께 고대 캥거루와 물고기 조각을 감상할 수 있습니다. Resolute 피크닉 지역은 조용한 점심 식사에 아름답습니다. 부시워킹 트레일은 1km에서 10km까지 다양합니다.",
      },
      {
        label: "Entry & access",
        en: "Vehicle entry ~$12 AUD per day. Gates open 6am–7:30pm (summer), 6am–6pm (winter). By car: take the Pacific Highway north or the Mona Vale Road. Parking fills early on weekends — arrive before 9am. Limited public transport — consider a tour if you don't have a car.", ja: "車両入場料は 1 日約 $12 AUD。ゲートは 6am〜7:30pm（夏）、6am〜6pm（冬）に開きます。車の場合：パシフィック・ハイウェイを北へ、または Mona Vale Road を利用。週末は駐車場が早く満車になります — 午前 9 時前に到着しましょう。公共交通は限られています — 車がない場合はツアーを検討しましょう。", zh: "车辆入园费约每天 $12 AUD。大门开放时间为 6am–7:30pm（夏季）、6am–6pm（冬季）。自驾：走太平洋高速公路向北，或走 Mona Vale Road。周末停车场很早就满 — 请在上午 9 点前到达。公共交通有限 — 如果没有车，可以考虑参加旅游团。",
        ko: "차량 입장료 1일 약 $12 AUD. 개방 시간 오전 6시–오후 7시 30분(여름), 오전 6시–오후 6시(겨울). 자동차: Pacific Highway 북쪽 또는 Mona Vale Road 이용. 주말에는 주차장이 일찍 만석 — 오전 9시 전 도착. 대중교통 제한적 — 차가 없으면 투어를 고려하세요.",
      },
      {
        label: "Best time",
        en: "Autumn (Mar–May) and spring (Sep–Nov) for mild weather and active wildlife. Summer is hot and humid with more snakes. Early morning or late afternoon are best for seeing kangaroos, wallabies, and goannas. Check the park's fire danger rating before visiting on hot days.", ja: "穏やかな気候と活発な野生動物なら秋（3〜5 月）と春（9〜11 月）。夏は暑く湿気が多く、ヘビも増えます。カンガルー、ワラビー、オオトカゲを見るなら早朝か夕方遅くが最適です。暑い日に訪れる前に、公園の火災危険度を確認しましょう。", zh: "秋季（3–5 月）和春季（9–11 月）天气温和，野生动物也更活跃。夏季炎热潮湿，蛇也更多。看袋鼠、小袋鼠和巨蜥最好在清晨或傍晚。炎热天气前往前，请查看公园的火灾危险等级。",
        ko: "가을(3–5월)과 봄(9–11월)이 온화한 날씨와 활동적인 야생동물에 최적. 여름은 덥고 습하며 뱀이 더 많습니다. 캥거루, 왈라비, 고아나를 보려면 이른 아침이나 늦은 오후가 가장 좋습니다. 더운 날 방문 전 공원의 화재 위험 등급을 확인하세요.",
      },
    ],
  },
];

const safetyItems = [
  {
    label: "Never feed or touch wild animals",
    en: "It's illegal in NSW to feed native animals without a licence. Human food harms them — kangaroos get 'lumpy jaw' from bread, birds develop nutritional deficiencies. It also makes them lose their natural fear of humans, leading to dangerous encounters. Observe quietly from a distance.", ja: "NSW では、許可なく在来の動物に餌を与えることは違法です。人間の食べ物は彼らに有害です — カンガルーはパンで「ランピー・ジョー」になり、鳥は栄養不足になります。また、人間に対する本能的な恐怖を失わせ、危険な遭遇につながります。遠くから静かに観察しましょう。", zh: "在新南威尔士州，未经许可喂食本土动物是违法的。人类的食物会伤害它们 — 袋鼠会因吃面包患上「肿块颌病」，鸟类会出现营养缺乏。这也会让它们失去对人类的本能恐惧，导致危险的遭遇。请从远处安静地观察。",
    ko: "NSW에서는 허가 없이 야생동물에게 먹이를 주는 것이 불법입니다. 사람 음식은 해롭습니다 — 캥거루는 빵으로 'lumpy jaw'에 걸리고, 새는 영양 결핍이 생깁니다. 또한 사람에 대한 본능적 두려움을 잃게 하여 위험한 조우로 이어집니다. 멀리서 조용히 관찰하세요.",
  },
  {
    label: "Snakes — back away slowly",
    en: "If you encounter a snake, stop moving, identify where it is, and slowly back away. Do not run — sudden movements can provoke a strike. Most Australian snakes are venomous but they will not chase you. They want to escape, not attack. Keep dogs on a lead in snake-prone areas. If bitten, call 000 immediately.", ja: "ヘビに遭遇したら、動きを止め、どこにいるかを確認し、ゆっくり後ずさりしましょう。走らないでください — 急な動きは攻撃を誘発することがあります。オーストラリアのヘビのほとんどは毒がありますが、追いかけてくることはありません。彼らは攻撃ではなく逃げたがっています。ヘビの多い地域では犬をリードにつなぎましょう。咬まれたらすぐに 000 に電話してください。", zh: "如果遇到蛇，请停下动作，确认它的位置，然后慢慢后退。不要跑 — 突然的动作可能引发攻击。澳大利亚的大多数蛇有毒，但它们不会追你。它们想逃跑，而不是攻击。在蛇多的地区，请给狗系上牵引绳。如果被咬，请立即拨打 000。",
    ko: "뱀을 만나면 움직임을 멈추고, 위치를 확인한 후 천천히 뒤로 물러나세요. 뛰지 마세요 — 갑작스러운 움직임이 공격을 유발할 수 있습니다. 대부분의 호주 뱀은 독이 있지만 쫓아오지 않습니다. 그들은 공격보다 도망을 원합니다. 뱀이 많은 지역에서는 개를 목줄에 매세요. 물렸다면 즉시 000에 전화하세요.",
  },
  {
    label: "Magpie swooping season (Aug–Oct)",
    en: "Magpies build nests from August to October and will swoop to protect their young. They usually target cyclists and runners. Wear a broad-brimmed hat or sunglasses, and dismount your bike and walk through swoop zones. Most swooping areas are marked on community maps. Never harm a magpie — they're a protected species and the swooping stops once the chicks fledge.", ja: "カササギは 8 月から 10 月にかけて巣を作り、ヒナを守るために急襲してきます。標的にするのは主にサイクリストとランナーです。つばの広い帽子かサングラスを着用し、急襲ゾーンでは自転車を降りて歩きましょう。ほとんどの急襲エリアはコミュニティの地図に表示されています。カササギを決して傷つけないでください — 保護種であり、ヒナが巣立つと急襲は止まります。", zh: "喜鹊在 8 月到 10 月筑巢，会俯冲保护幼鸟。它们通常针对骑行者和跑步者。请戴宽檐帽或太阳镜，在俯冲区域下车推行。大多数俯冲区域都标在社区地图上。绝不要伤害喜鹊 — 它们是受保护的物种，幼鸟离巢后俯冲就会停止。",
    ko: "까치는 8월부터 10월까지 둥지를 짓고 새끼를 보호하기 위해 급습합니다. 주로 자전거 타는 사람과 달리는 사람을 대상으로 합니다. 챙이 넓은 모자나 선글라스를 착용하고, 급습 구역에서는 자전거에서 내려 걸으세요. 대부분의 급습 지역은 커뮤니티 지도에 표시됩니다. 까치를 해치지 마세요 — 보호종이며 새끼가 둥지를 떠나면 급습이 멈춥니다.",
  },
  {
    label: "WIRES — wildlife rescue",
    en: "If you find an injured or orphaned native animal, call WIRES (NSW Wildlife Information, Rescue and Education Service) at 1300 094 737. They operate 365 days a year and have trained volunteers across the state. Don't attempt to rescue the animal yourself — keep pets away, note the location, and wait for a rescuer.", ja: "傷ついたり孤児になった在来の動物を見つけたら、WIRES（NSW 野生動物情報・救助・教育サービス）の 1300 094 737 に電話してください。年中無休 365 日運営され、州全域に訓練されたボランティアがいます。自分で動物を救助しようとしないでください — ペットを遠ざけ、場所を記録し、救助者を待ちましょう。", zh: "如果你发现受伤或成为孤儿的本土动物，请拨打 WIRES（新南威尔士州野生动物信息、救援与教育服务）电话 1300 094 737。他们全年 365 天运作，全州都有受过培训的志愿者。不要自己尝试救援动物 — 让宠物远离，记下位置，等待救援人员。",
    ko: "부상당하거나 고아가 된 야생동물을 발견하면 WIRES(NSW 야생동물 정보, 구조, 교육 서비스) 1300 094 737로 전화하세요. 연중 365일 운영되며 주 전역에 훈련된 자원봉사자가 있습니다. 직접 구조를 시도하지 마세요 — 반려동물을 멀리하고, 위치를 기록한 후 구조자를 기다리세요.",
  },
];

export const metadata = withSeo(
  {

  ...seoFor("/experiences/wildlife"),
  title: "Where to See Australian Wildlife — Taronga Zoo, Koalas, Kangaroos near Sydney",
  description:
    "Practical guide to seeing Australian wildlife around Sydney — Taronga Zoo, Koala Park, Featherdale, national parks, and critical safety advice.",
  },
  "/experiences/wildlife"
);

export default function WildlifePage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src="/kangaroo.jpg"
          alt="Kangaroo, Australian marsupial"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-stone-900/20" />
        <div className="absolute inset-0 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs uppercase tracking-[0.3em] mb-6 transition-colors"
          >
            ← <En translated>All destinations</En><Ja>すべての目的地</Ja><Zh>全部目的地</Zh>
            <Ko>전체 여행지</Ko>
          </Link>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Practical guide</En>
            <Ja>実用ガイド</Ja>
            <Zh>实用指南</Zh>
            <Ko>실전 가이드</Ko>
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.95] mb-4">
            <En translated>Seeing Australian wildlife</En>
            <Ja>オーストラリアの野生動物を見る</Ja>
            <Zh>观赏澳大利亚野生动物</Zh>
            <Ko>호주 야생동물 가이드</Ko>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            <En translated>
              Kangaroos, koalas, wombats, and whales — Australia&apos;s wildlife
              is unlike anywhere else on Earth. Here&apos;s how to see it
              safely and responsibly around Sydney.
            </En>
            <Ja>カンガルー、コアラ、ウォンバット、そしてクジラ — オーストラリアの野生動物
              は地球上のどこにもない存在です。シドニー周辺で安全に、そして責任を
              もって見る方法をご紹介します。</Ja>
            <Zh>袋鼠、考拉、袋熊和鲸鱼 — 澳大利亚的野生
              动物与地球上任何地方都不一样。以下是在悉尼周边如何安全而负责任地
              观赏它们的方法。</Zh>
            <Ko>
              캥거루, 코알라, 웜뱃, 고래 — 호주의 야생동물은 지구상 그 어느 곳과도
              다릅니다. 시드니 근교에서 안전하게 그리고 책임감 있게 만나는 방법을
              소개합니다.
            </Ko>
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Intro */}
        <section className="mb-12 reveal">
          <p className="font-serif text-xl md:text-2xl text-stone-800 dark:text-stone-200 leading-relaxed">
            <En translated>
              Australia split from the supercontinent Gondwana about 50 million
              years ago, and its wildlife evolved in near-total isolation.
              That&apos;s why you&apos;ll find marsupials (pouched mammals),
              monotremes (egg-laying mammals), and birds found nowhere else.
              Around Sydney alone, you can see kangaroos, koalas, wombats,
              echidnas, platypuses, and over 300 species of native birds. This
              guide covers the best places to see them — from world-class zoos
              to wild national parks — and, most importantly, how to stay safe
              and respect the animals.
            </En>
            <Ja>オーストラリアは約5千万年前に超大陸ゴンドワナから分離し、その野生
              動物はほぼ完全な孤立の中で進化しました。だからこそ、
              有袋類（袋を
              持つ哺乳類）、単孔類（卵を産む哺乳類）、そして他では見られない
              鳥たちがいるのです。シドニー周辺だけでも、カンガルー、コアラ、
              ウォンバット、ハリモグラ、カモノハシ、そして300種以上の在来鳥類を
              見ることができます。このガイドでは、世界クラスの動物園から
              手つかずの国立公園まで、それらを見るのに最適な場所と、
              何より安全を保ち動物を尊重する方法を紹介します。</Ja>
            <Zh>澳大利亚在大约5000万年前从超大陆冈瓦纳分离，其野生动
              物在几乎完全隔离的环境中演化。正因如此，
              你才能看到有袋类（带
              育儿袋的哺乳动物）、单孔类（卵生哺乳动物），以及别处找不到的
              鸟类。仅在悉尼周边，你就能看到袋鼠、考拉、袋熊、
              针鼹、鸭嘴兽以及300多种本土鸟类。本
              指南介绍观赏它们的最佳去处 — 从世界级动物园
              到原始的国家公园 — 以及最重要的，如何保持安全和
              尊重动物。</Zh>
            <Ko>
              호주는 약 5천만 년 전 곤드와나 초대륙에서 분리되었고, 그 후
              야생동물은 거의 완전한 고립 속에서 진화했습니다. 그래서 유대류(주머니
              포유류), 단공류(알을 낳는 포유류), 그리고 다른 곳에서는 찾아볼 수 없는
              새들을 만날 수 있습니다. 시드니 주변에서만 캥거루, 코알라, 웜뱃,
              가시두더지, 오리너구리, 300종 이상의 토종 조류를 볼 수 있습니다. 이
              가이드는 세계적 동물원에서 야생 국립공원까지 최고의 관찰 장소와,
              가장 중요하게는 안전하게 그리고 동물을 존중하는 방법을 알려드립니다.
            </Ko>
          </p>
        </section>

        {/* Zoo & wildlife park sections */}
        <div className="space-y-12">
          {/* Section intro label */}
          <div className="text-center mb-4 reveal">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sunset mb-2">
              <En translated>Wildlife parks & zoos</En>
              <Ja>野生動物パーク＆動物園</Ja>
              <Zh>野生动物公园与动物园</Zh>
              <Ko>야생동물 공원 & 동물원</Ko>
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100">
              <En translated>Up close, but not too close</En>
              <Ja>近くで、でも近すぎず</Ja>
              <Zh>近距离，但别太近</Zh>
              <Ko>가까이, 하지만 너무 가깝지는 않게</Ko>
            </h2>
          </div>

          {sections.slice(0, 3).map((section, i) => (
            <EditorialSection key={section.id} data={section} index={i} />
          ))}

          {/* National parks section intro */}
          <div className="text-center mt-16 mb-4 reveal">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-coast mb-2">
              <En translated>Wild encounters</En>
              <Ja>野生との出会い</Ja>
              <Zh>邂逅野生动物</Zh>
              <Ko>야생에서의 만남</Ko>
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100">
              <En translated>Where animals roam free</En>
              <Ja>動物たちが自由に歩く場所</Ja>
              <Zh>动物自由漫步之地</Zh>
              <Ko>동물들이 자유롭게 사는 곳</Ko>
            </h2>
          </div>

          {sections.slice(3).map((section, i) => (
            <EditorialSection
              key={section.id}
              data={section}
              index={i + 3}
            />
          ))}
        </div>

        {/* Safety section — full-width, high-impact */}
        <section className="mt-16 reveal">
          <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 border border-amber-200/60 dark:border-amber-800/30 overflow-hidden">
            {/* Header */}
            <div className="p-6 md:p-8 bg-amber-900/90 dark:bg-amber-950/80 text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="shrink-0 w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <p className="text-[13px] font-medium uppercase tracking-[0.3em] text-amber-300">
                  <En translated>Wildlife safety — critical</En>
                  <Ja>野生動物の安全 — 重要</Ja>
                  <Zh>野生动物安全 — 至关重要</Zh>
                  <Ko>야생동물 안전 — 필수</Ko>
                </p>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl mb-2 leading-tight">
                <En translated>Respect the wildlife, protect yourself</En>
                <Ja>野生動物を尊重し、自分を守る</Ja>
                <Zh>尊重野生动物，保护好自己</Zh>
                <Ko>야생동물을 존중하고, 자신을 보호하세요</Ko>
              </h2>
              <p className="text-amber-100/80 text-sm max-w-2xl leading-relaxed">
                <En translated>
                  Australia&apos;s animals are not tame — even the cute ones.
                  These rules will keep you, the animals, and the ecosystem
                  safe.
                </En>
                <Ja>オーストラリアの動物は飼いならされていません — かわいい動物でも
                  同じです。このルールがあなたと動物、そして生態系の
                  安全を守ります。</Ja>
                <Zh>澳大利亚的动物并不温顺 — 连可爱的那些也是。
                  这些规则能保障你、动物以及生态系统的
                  安全。</Zh>
                <Ko>
                  호주의 동물은 길들여지지 않았습니다 — 귀여운 동물들조차도요.
                  이 규칙은 여러분과 동물, 생태계를 안전하게 지켜줍니다.
                </Ko>
              </p>
            </div>

            {/* Safety items */}
            <div className="p-6 md:p-8 space-y-5">
              {safetyItems.map((item, i) => (
                <div
                  key={item.label}
                  className={`reveal reveal-delay-${(i % 5) + 1} flex items-start gap-4 p-4 rounded-xl bg-white/70 dark:bg-dark-surface/70 backdrop-blur-sm border border-amber-100/40 dark:border-amber-900/20`}
                >
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 flex items-center justify-center mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-stone-900 dark:text-stone-100 mb-1">
                      {item.label}
                    </p>
                    <div className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                      <En translated>
                        <p>{item.en}</p>
                      </En>
                      <Ja><p>{pickLocale("ja", item)}</p></Ja>
                      <Zh><p>{pickLocale("zh", item)}</p></Zh>
                      <Ko>
                        <p>{item.ko}</p>
                      </Ko>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency callout */}
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <div className="rounded-xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 mb-0.5">
                      <En translated>Emergency contact</En>
                      <Ja>緊急連絡先</Ja>
                      <Zh>紧急联系方式</Zh>
                      <Ko>비상 연락처</Ko>
                    </p>
                    <p className="font-serif text-lg text-stone-900 dark:text-stone-100 leading-tight">
                      <En translated>WIRES Wildlife Rescue</En>
                      <Ja>WIRES 野生動物レスキュー</Ja>
                      <Zh>WIRES 野生动物救援</Zh>
                      <Ko>WIRES 야생동물 구조</Ko>
                    </p>
                  </div>
                </div>
                <a
                  href="tel:1300094737"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors shrink-0"
                >
                  <Phone className="w-4 h-4" />
                  1300 094 737
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final tips */}
        <section className="mt-12 reveal">
          <div className="rounded-2xl bg-stone-900 dark:bg-stone-800 text-white p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="shrink-0 w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                <Sunrise className="w-4 h-4 text-sage" />
              </span>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400">
                <En translated>Pro tips</En>
                <Ja>プロのヒント</Ja>
                <Zh>内行贴士</Zh>
                <Ko>전문가 팁</Ko>
              </p>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
              <En translated>Make the most of your wildlife adventure</En>
              <Ja>野生動物アドベンチャーを最大限に楽しむ</Ja>
              <Zh>充分享受你的野生动物之旅</Zh>
              <Ko>야생동물 모험을 최대한 즐기는 법</Ko>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  en: "Go early — animals are most active at dawn and dusk. Zoos open at 9am; arrive at opening time before the crowds and heat.", ja: "早めに行きましょう — 動物は夜明けと夕暮れに最も活発です。動物園は午前 9 時に開園します。混雑と暑さの前に、開園時刻に到着しましょう。", zh: "早点出发 — 动物在黎明和黄昏最活跃。动物园上午 9 点开门；请在开园时间到达，避开人群和高温。",
                  ko: "일찍 가세요 — 동물은 새벽과 해질녘에 가장 활동적입니다. 동물원은 오전 9시 개장; 군중과 더위가 오기 전에 개장 시간에 도착하세요.",
                },
                {
                  en: "Bring binoculars — essential for spotting birds and wildlife in national parks. You'll see so much more.", ja: "双眼鏡を持参しましょう — 国立公園で鳥や野生動物を見つけるのに欠かせません。ずっと多くを見られます。", zh: "带上双筒望远镜 — 在国家公园观察鸟类和野生动物必不可少。你会看到多得多的东西。",
                  ko: "쌍안경 필수 — 국립공원에서 새와 야생동물 관찰에 필수입니다. 훨씬 더 많이 볼 수 있습니다.",
                },
                {
                  en: "Download offline maps — mobile reception is patchy in Royal National Park and Ku-ring-gai Chase.", ja: "オフライン地図をダウンロードしましょう — ロイヤル・ナショナル・パークとク・リング・ガイ・チェイスでは携帯電話の電波が不安定です。", zh: "下载离线地图 — 在皇家国家公园和 Ku-ring-gai Chase，手机信号时有时无。",
                  ko: "오프라인 지도를 다운로드하세요 — 로열 내셔널 파크와 쿠링가이 체이스에서는 휴대폰 신호가 약합니다.",
                },
                {
                  en: "Never pick up wildlife — even a seemingly abandoned joey (baby kangaroo) likely has its mother nearby. Call WIRES instead.", ja: "野生動物を拾い上げないでください — 捨てられたように見えるジョーイ（赤ちゃんカンガルー）でも、近くに母親がいる可能性が高いです。代わりに WIRES に電話しましょう。", zh: "绝不要捡起野生动物 — 即使看起来像是被遗弃的幼袋鼠，它的母亲也很可能就在附近。请改拨打 WIRES。",
                  ko: "야생동물을 주우지 마세요 — 버려진 것처럼 보이는 조이(아기 캥거루)도 어미가 근처에 있을 가능성이 높습니다. 대신 WIRES에 전화하세요.",
                },
              ].map((tip, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${(i % 5) + 1} p-4 rounded-xl bg-stone-800/50 dark:bg-stone-700/50 border border-stone-700/50`}
                >
                  <En translated>
                    <p className="text-sm text-stone-300 leading-relaxed">
                      {tip.en}
                    </p>
                  </En>
                  <Ja><p className="text-sm text-stone-300 leading-relaxed">
                      {tip.en}
                    </p></Ja>
                  <Zh><p className="text-sm text-stone-300 leading-relaxed">
                      {tip.en}
                    </p></Zh>
                  <Ko>
                    <p className="text-sm text-stone-300 leading-relaxed">
                      {tip.ko}
                    </p>
                  </Ko>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

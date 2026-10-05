// Server component — bilingual Australian sports guide.
// Redesigned in editorial style.

import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { Flag, Star, Trophy, Users } from "@/components/Icons";
import { seoFor, withSeo } from "@/lib/seo";

export const metadata = withSeo(
  {

  ...seoFor("/sport"),
  title: "Australian Sports Guide — NRL, AFL, Cricket & Sporting Culture Explained | AussieGuides",
  description:
    "Australian sports explained for newcomers — NRL rugby league, AFL footy, cricket, State of Origin, and the unique culture of Aussie sport. What to watch, when, and how to follow along.",
  },
  "/sport"
);

type SportSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; koLabel?: string; jaLabel?: string; zhLabel?: string; en: string; ko: string; ja?: string; zh?: string }>;
};

const sections: SportSection[] = [
  {
    id: "big-three",
    iconKey: "Trophy",
    accent: "sunset",
    title: "The Big 3 Codes",
    koTitle: "호주 3대 스포츠",
    jaTitle: "3\u5927\u30b3\u30fc\u30c9",
    zhTitle: "\u4e09\u5927\u4e3b\u6d41\u8fd0\u52a8",
    desc: "NRL (Rugby League), AFL (Aussie Rules), and Rugby Union — the sports that define Australian culture",
    koDesc: "NRL, AFL, 럭비 — 호주 문화를 대표하는 스포츠",
    jaDesc: "NRL\uff08\u30e9\u30b0\u30d3\u30fc\u30ea\u30fc\u30b0\uff09\u3001AFL\uff08\u30aa\u30fc\u30b8\u30fc\u30fb\u30eb\u30fc\u30eb\u30ba\uff09\u3001\u30e9\u30b0\u30d3\u30fc\u30e6\u30cb\u30aa\u30f3 \u2014 \u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u6587\u5316\u3092\u5b9a\u7fa9\u3059\u308b\u30b9\u30dd\u30fc\u30c4",
    zhDesc: "NRL\uff08\u8054\u76df\u5f0f\u6a44\u6984\u7403\uff09\u3001AFL\uff08\u6fb3\u5f0f\u6a44\u6984\u7403\uff09\u548c\u8054\u5408\u4f1a\u5f0f\u6a44\u6984\u7403\u2014\u2014\u5b9a\u4e49\u6fb3\u5927\u5229\u4e9a\u6587\u5316\u7684\u8fd0\u52a8",
    img: "/images/nrl_match.jpg",
    items: [
      { label: "NRL — National Rugby League", jaLabel: "NRL \u2014 \u30ca\u30b7\u30e7\u30ca\u30eb\u30fb\u30e9\u30b0\u30d3\u30fc\u30fb\u30ea\u30fc\u30b0", zhLabel: "NRL\u2014\u2014\u56fd\u5bb6\u6a44\u6984\u7403\u8054\u8d5b", koLabel: "NRL \u2014 \ub0b4\uc154\ub110 \ub7ec\uadf8\ube44 \ub9ac\uadf8", en: "NRL is Sydney's heartbeat. A 17-team competition (9 based in NSW, 3 in QLD, plus others) running March to October. Grand Final is an unofficial national holiday in NSW. Key teams: Penrith Panthers, South Sydney Rabbitohs, Sydney Roosters, Parramatta Eels, Wests Tigers (Michael's team!), Brisbane Broncos, Melbourne Storm. Tickets from ~$25 AUD at Ticketek or the team websites. The rivalries are fierce and the atmosphere is incredible — especially for a local derby.", ja: "NRLはシドニーの心臓部です。17チームによるリーグ戦（NSWに9チーム、QLDに3チーム、その他）が3月から10月まで行われます。グランドファイナルは、NSWでは非公式の国民の祝日のような存在です。主なチーム：Penrith Panthers、South Sydney Rabbitohs、Sydney Roosters、Parramatta Eels、Wests Tigers（マイケルのチーム！）、Brisbane Broncos、Melbourne Storm。チケットはTicketekまたはチームのウェブサイトで約$25 AUDから。ライバル意識は激しく、雰囲気は最高です — 特に地元同士のダービーでは。", zh: "NRL 是悉尼的心跳。一项 17 支球队的联赛（9 支在新州、3 支在昆州，还有其他球队），每年 3 月到 10 月进行。总决赛在新州相当于一个非官方的全国假日。主要球队：Penrith Panthers、South Sydney Rabbitohs、Sydney Roosters、Parramatta Eels、Wests Tigers（迈克尔支持的球队！）、Brisbane Broncos、Melbourne Storm。票价从约 $25 AUD 起，可在 Ticketek 或球队官网购买。宿敌对决十分激烈，现场气氛无与伦比 — 尤其是在同城德比时。", ko: "NRL은 시드니의 심장입니다. 17개 팀이 참가하는 대회로(NSW 9팀, QLD 3팀 포함) 3월부터 10월까지 열립니다. 그랜드 파이널은 NSW에서는 비공식 국경일 수준의 열기를 보여줍니다. 주요 팀: Penrith Panthers, South Sydney Rabbitohs, Sydney Roosters, Parramatta Eels, Wests Tigers (마이클의 팀!), Brisbane Broncos, Melbourne Storm. 티켓은 Ticketek 또는 팀 웹사이트에서 약 $25 AUD부터 구매 가능합니다." },
      { label: "AFL — Australian Rules Football", jaLabel: "AFL \u2014 \u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u30f3\u30fb\u30eb\u30fc\u30eb\u30ba\u30fb\u30d5\u30c3\u30c8\u30dc\u30fc\u30eb", zhLabel: "AFL\u2014\u2014\u6fb3\u5f0f\u6a44\u6984\u7403", koLabel: "AFL \u2014 \ud638\uc8fc\uc2dd \ud48b\ubcfc", en: "AFL is the nation's most-watched sport. 18 teams from all over Australia compete in a fast, high-scoring game played on an oval ball. The season runs March-September with the Grand Final in September/October. Sydney has two teams: Sydney Swans (based at the SCG in Moore Park) and Greater Western Sydney Giants (GIANTS Stadium at Homebush). The Swans have a huge following — if they make the Grand Final, the city stops. Tickets from ~$30 AUD at Ticketmaster.", ja: "AFLは全国で最も視聴されているスポーツです。オーストラリア全土から18チームが、楕円形のボールで行われる速く得点の多い試合に参加します。シーズンは3月から9月まで、グランドファイナルは9月/10月です。シドニーには2チームあります：Sydney Swans（Moore ParkのSCGを本拠地とする）とGreater Western Sydney Giants（HomebushのGIANTS Stadium）。Swansは非常に多くのファンを持っています — グランドファイナルに進出すれば、街が止まります。チケットはTicketmasterで約$30 AUDから。", zh: "AFL 是全国观看人数最多的运动。来自澳大利亚各地的 18 支球队，在椭圆球场上进行节奏快、得分高的比赛。赛季从 3 月持续到 9 月，总决赛在 9 月/10 月。悉尼有两支球队：Sydney Swans（主场在 Moore Park 的 SCG）和 Greater Western Sydney Giants（位于 Homebush 的 GIANTS Stadium）。Swans 拥有庞大的球迷基础 — 如果他们打进总决赛，整座城市都会停下来。票价从约 $30 AUD 起，可在 Ticketmaster 购买。", ko: "AFL은 호주에서 가장 많은 시청자를 끌어 모으는 스포츠입니다. 18개 팀이 오벌 볼로 진행되는 빠르고 점수 왕복이 많은 경기를 펼칩니다. 시즌은 3월부터 9월까지, 그랜드 파이널은 9월/10월에 열립니다. 시드니에는 두 개의 팀이 있습니다: Sydney Swans (Moore Park의 SCG)그리고 Greater Western Sydney Giants (Homebush의 GIANTS Stadium). Swans는 팬 기반이 매우 큽니다 — 그랜드 파이널에 진출하면 도시가 멈춥니다. 티켓은 Ticketmaster에서 약 $30 AUD부터." },
      { label: "Rugby Union", jaLabel: "\u30e9\u30b0\u30d3\u30fc\u30e6\u30cb\u30aa\u30f3", zhLabel: "\u8054\u5408\u4f1a\u5f0f\u6a44\u6984\u7403", koLabel: "\ub7ed\ube44 \uc720\ub2c8\uc5b8", en: "Rugby Union is more niche but has a loyal following. The national competition is Super Rugby (12 teams from NZ, Australia, Argentina, South Africa). NSW Waratahs play out of Sydney Football Stadium (Allianz Stadium) at Moore Park. International matches (Wallabies) are played at ANZ Stadium or the SCG. International Rugby (Test) matches against New Zealand (All Blacks) or South Africa (Springboks) are incredible events — the atmosphere rivals anything in the world. Tickets from ~$40 AUD.", ja: "ラグビーユニオンはよりニッチですが、忠実なファンがいます。国内大会はSuper Rugby（NZ、オーストラリア、アルゼンチン、南アフリカの12チーム）です。NSW WaratahsはMoore Parkのシドニー・フットボール・スタジアム（Allianz Stadium）を本拠地としています。国際試合（ワラビーズ）はANZ StadiumまたはSCGで行われます。ニュージーランド（オールブラックス）や南アフリカ（スプリングボクス）との国際試合（テストマッチ）は素晴らしいイベントです — その雰囲気は世界のどんなものにも引けを取りません。チケットは約$40 AUDから。", zh: "橄榄球联合会式橄榄球（Rugby Union）更为小众，但拥有忠实的追随者。全国性赛事是 Super Rugby（来自新西兰、澳大利亚、阿根廷、南非的 12 支球队）。NSW Waratahs 以 Moore Park 的悉尼足球场（Allianz Stadium）为主场。国际比赛（Wallabies）在 ANZ Stadium 或 SCG 举行。对阵新西兰（All Blacks）或南非（Springboks）的国际比赛（Test）精彩绝伦 — 现场气氛可与世界上任何赛事媲美。票价从约 $40 AUD 起。", ko: "럭비 유니온은 다른 스포츠에 비해 대중적이지는 않지만 충성스러운 팬층이 있습니다. 전국 대회인 Super Rugby에는 NZ, 호주, 아르헨티나, 남아프리카의 12개 팀이 참가합니다. NSW Waratahs는 Moore Park의 시드니 풋볼 스타디움(Allianz Stadium)에서 경기합니다. 국제 경기(월러비)는 ANZ 스타디움이나 SCG에서 열립니다. 뉴질랜드(올 블랙스)나 남아프리카(스프링복스)와의 국제 경기는 정말 환상적인 분위기를 자랑하며, 세계 어떤 경기장과도 견줄 만합니다. 티켓은 약 $40 AUD부터." },
    ],
  },
  {
    id: "cricket",
    iconKey: "Star",
    accent: "sage",
    title: "Cricket",
    koTitle: "크리켓",
    jaTitle: "\u30af\u30ea\u30b1\u30c3\u30c8",
    zhTitle: "\u677f\u7403",
    desc: "Australia's national summer sport — Test matches, BBL, and the Ashes",
    koDesc: "호주의 국민 서머 스포츠 — 테스트 매치, BBL, 애즈 시리즈",
    jaDesc: "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306e\u56fd\u6c11\u7684\u590f\u306e\u30b9\u30dd\u30fc\u30c4 \u2014 \u30c6\u30b9\u30c8\u30de\u30c3\u30c1\u3001BBL\u3001\u30a2\u30c3\u30b7\u30ba",
    zhDesc: "\u6fb3\u5927\u5229\u4e9a\u7684\u56fd\u6c11\u590f\u5b63\u8fd0\u52a8\u2014\u2014Test\u6bd4\u8d5b\u3001BBL\u548cThe Ashes",
    img: "/images/pexels-13509965.jpg",
    items: [
      { label: "International Cricket (Tests & ODIs)", jaLabel: "\u56fd\u969b\u30af\u30ea\u30b1\u30c3\u30c8\uff08\u30c6\u30b9\u30c8\uff06ODI\uff09", zhLabel: "\u56fd\u9645\u677f\u7403\uff08Test\u4e0eODI\uff09", koLabel: "\uad6d\uc81c \ud06c\ub9ac\ucf13 (\ud14c\uc2a4\ud2b8 & ODI)", en: "Cricket is Australia's national sport played mainly in summer (November to March). The Australian men's team (the Baggy Greens) is one of the best in the world. Big rivalries: Australia vs England (The Ashes — held every 2 years, alternating between the two countries), Australia vs India, Australia vs South Africa. Test matches at the SCG or Manuka Oval in Canberra can run for 5 days. Tickets from ~$40 AUD.", ja: "クリケットはオーストラリアの国民的スポーツで、主に夏（11月から3月）に行われます。オーストラリア男子代表チーム（Baggy Greens）は世界最高峰の一つです。大きなライバル関係：オーストラリア対イングランド（The Ashes — 2年ごとに両国交互に開催）、オーストラリア対インド、オーストラリア対南アフリカ。SCGやキャンベラのManuka Ovalでのテストマッチは5日間続くことがあります。チケットは約$40 AUDから。", zh: "板球是澳大利亚的国民运动，主要在夏季（11 月至 3 月）进行。澳大利亚男子国家队（Baggy Greens）是世界最强的队伍之一。主要宿敌：澳大利亚对英格兰（The Ashes — 每两年举办一次，两国轮流主办）、澳大利亚对印度、澳大利亚对南非。在 SCG 或堪培拉 Manuka Oval 举行的 Test 比赛可能持续 5 天。票价从约 $40 AUD 起。", ko: "크리켓은 주로 하계(11월부터 3월)에 열리는 호주의 국민 스포츠입니다. 호주 남자 대표팀(Baggy Greens)은 세계 최고 수준입니다. 큰 라이벌: 호주 vs 영국(더 애즈 — 2년마다 번갈아 개최), 호주 vs 인도, 호주 vs 남아프리카. SCG나 캔버라의 Manuka Oval에서 열리는 테스트 매치는 5일까지 진행됩니다. 티켓은 약 $40 AUD부터." },
      { label: "BBL — Big Bash League", jaLabel: "BBL \u2014 \u30d3\u30c3\u30b0\u30fb\u30d0\u30c3\u30b7\u30e5\u30fb\u30ea\u30fc\u30b0", zhLabel: "BBL\u2014\u2014Big Bash League", koLabel: "BBL \u2014 \ube45 \ubc30\uc2dc \ub9ac\uadf8", en: "The BBL is the domestic T20 (short-format) league running December to January — perfect for summer evenings. 8 city-based teams play 20-over matches in 3 hours. Sydney Sixers and Sydney Thunder are the local teams. The atmosphere is very family-friendly and entertainment-focused, with fireworks, music, and fun promotions. Tickets from ~$25 AUD at Ticketek. The playoffs and final (usually mid-February) sell out fast.", ja: "BBLは12月から1月まで行われる国内T20（短縮形式）リーグで、夏の夕方にぴったりです。8つの都市を拠点とするチームが、3時間で20オーバーの試合を行います。Sydney SixersとSydney Thunderが地元チームです。雰囲気はとても家族向きで娯楽性が高く、花火、音楽、楽しいプロモーションがあります。チケットはTicketekで約$25 AUDから。プレーオフと決勝（通常2月中旬）はすぐに売り切れます。", zh: "BBL 是 12 月至 1 月举行的国内 T20（短赛制）联赛 — 非常适合夏夜。8 支以城市为基础的球队在 3 小时内进行 20 轮比赛。Sydney Sixers 和 Sydney Thunder 是本地球队。现场氛围非常适合家庭，以娱乐为主，有烟花、音乐和有趣的互动活动。票价从约 $25 AUD 起，可在 Ticketek 购买。季后赛和总决赛（通常在 2 月中旬）很快就会售罄。", ko: "BBL은 12월부터 1월까지 진행되는 국내 T20(단판 형식) 리그로, 여름 저녁에 딱 좋습니다. 8개 도시 기반 팀이 20오버 매치를 3시간 만에 펼칩니다. Sydney Sixers와 Sydney Thunder가 시드니 팀입니다. 분위기는 가족 단위로 즐기기에 좋으며, 불꽃놀이, 음악, 재미있는 프로모션이 펼쳐집니다. 티켓은 Ticketek에서 약 $25 AUD부터. 플레이오프와 결승(보통 2월 중순)은 매진됩니다." },
      { label: "Watching Cricket in Sydney", jaLabel: "\u30b7\u30c9\u30cb\u30fc\u3067\u30af\u30ea\u30b1\u30c3\u30c8\u3092\u89b3\u308b", zhLabel: "\u5728\u6089\u5c3c\u89c2\u770b\u677f\u7403", koLabel: "\uc2dc\ub4dc\ub2c8\uc5d0\uc11c \ud06c\ub9ac\ucf13 \uad00\ub78c", en: "The two main cricket grounds in Sydney: SCG (Sydney Cricket Ground, Moore Park — capacity 48,000) and Manuka Oval (Canberra, 1 hour away — used for Tests when the SCG is booked). For BBL, all matches are in Sydney suburban stadiums. Pack sunscreen, a hat, and food — stadium food is expensive. You can bring your own food and drinks (no glass bottles). Opal card covers trains to the SCG on match days.", ja: "シドニーの2大クリケット場：SCG（シドニー・クリケット・グラウンド、Moore Park — 収容人数48,000人）とManuka Oval（キャンベラ、1時間の距離 — SCGが予約で埋まっているときにテストに使用）。BBLでは、すべての試合がシドニー郊外のスタジアムで行われます。日焼け止め、帽子、食べ物を持参しましょう — スタジアムの食べ物は高いです。自分の食べ物と飲み物を持ち込めます（ガラス瓶は不可）。試合当日は、Opal カードでSCGまでの電車が利用できます。", zh: "悉尼的两大主要板球场：SCG（悉尼板球场，Moore Park — 可容纳 48,000 人）和 Manuka Oval（堪培拉，1 小时车程 — 在 SCG 被占用时用于 Test 比赛）。BBL 的所有比赛都在悉尼郊区的体育场举行。带上防晒霜、帽子和食物 — 体育场的食物很贵。你可以自带食物和饮料（禁止玻璃瓶）。比赛日Opal可乘火车前往 SCG。", ko: "시드니의 두 주요 크리켓 구장: SCG(시드니 크리켓 그라운드, Moore Park — 수용인원 48,000명)와 Manuka Oval(캔버라, 1시간 거리 — SCG가 매진일 때 사용). BBL은 시드니외곽의 경기장에서 열립니다. 선크림, 모자, 음식 준비하세요 — 경기장 음식은 비쌉니다. 직접 음식과 음료(유리병 불가)를 가져올 수 있습니다. 경기일에는 오팔 카드로 SCG까지 기차가 연결됩니다." },
    ],
  },
  {
    id: "soccer",
    iconKey: "Flag",
    accent: "coast",
    title: "Soccer (Football)",
    koTitle: "축구",
    jaTitle: "\u30b5\u30c3\u30ab\u30fc\uff08\u30d5\u30c3\u30c8\u30dc\u30fc\u30eb\uff09",
    zhTitle: "\u8db3\u7403\uff08Soccer\uff09",
    desc: "A-League, Matildas, and why soccer is booming in Australia",
    koDesc: "A-League, 마틸다스, 호주에서 급부상하는 축구",
    jaDesc: "A\u30ea\u30fc\u30b0\u3001Matildas\u3001\u305d\u3057\u3066\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u3067\u30b5\u30c3\u30ab\u30fc\u304c\u6025\u6210\u9577\u3059\u308b\u7406\u7531",
    zhDesc: "A-League\u3001Matildas\uff0c\u4ee5\u53ca\u8db3\u7403\u4e3a\u4f55\u5728\u6fb3\u5927\u5229\u4e9a\u84ec\u52c3\u53d1\u5c55",
    img: "/images/soccer_australia.jpg",
    items: [
      { label: "A-League (Men's)", jaLabel: "A\u30ea\u30fc\u30b0\uff08\u7537\u5b50\uff09", zhLabel: "A-League\uff08\u7537\u5b50\uff09", koLabel: "A-League (\ub0a8\uc790\ubd80)", en: "The A-League runs October to May with 12 teams. Sydney FC, Western Sydney Wanderers, Newcastle Jets, and Macarthur FC are the NSW clubs. The Sydney Derby (Sydney FC vs Western Sydney Wanderers) is one of the most intense rivalries in Australian sport — absolutely electric atmosphere. Melbourne Victory vs Sydney FC is another huge fixture. Tickets from ~$30 AUD at Ticketek.", ja: "Aリーグは10月から5月まで、12チームで行われます。Sydney FC、Western Sydney Wanderers、Newcastle Jets、Macarthur FCがNSWのクラブです。シドニー・ダービー（Sydney FC対Western Sydney Wanderers）は、オーストラリアのスポーツで最も激しいライバル関係の一つです — 雰囲気はまさに熱狂的です。Melbourne Victory対Sydney FCも大きな注目カードです。チケットはTicketekで約$30 AUDから。", zh: "A-League 从 10 月持续到 5 月，共有 12 支球队。Sydney FC、Western Sydney Wanderers、Newcastle Jets 和 Macarthur FC 是新州球队。悉尼德比（Sydney FC 对 Western Sydney Wanderers）是澳大利亚体育界最激烈的宿敌对决之一 — 现场气氛绝对火爆。Melbourne Victory 对 Sydney FC 也是一场重头戏。票价从约 $30 AUD 起，可在 Ticketek 购买。", ko: "A-League는 10월부터 5월까지 12개 팀이 참가합니다. 시드니 FC, 웨스턴 시드니 원더러스, 뉴캐슬 제츠, 마카서 FC가 NSW 클럽입니다. 시드니 더비(시드니 FC vs 웨스턴 시드니 원더러스)는 호주 스포츠에서 가장 격렬한 라이벌 중 하나입니다. Melbourne Victory vs Sydney FC도 흥미로운 경기입니다. 티켓은 Ticketek에서 약 $30 AUD부터." },
      { label: "Matildas (Women's National Team)", jaLabel: "Matildas\uff08\u5973\u5b50\u4ee3\u8868\uff09", zhLabel: "Matildas\uff08\u5973\u8db3\u56fd\u5bb6\u961f\uff09", koLabel: "\ub9c8\ud2f8\ub2e4\uc2a4 (\uc5ec\uc790 \ub300\ud45c\ud300)", en: "Australia's women's national football team (the Matildas) has become one of the most beloved teams in the country, especially after their 2023 FIFA Women's World Cup performance (held in Australia/New Zealand). Sam Kerr is the star player. They play home matches at various stadiums including ANZ Stadium, Marvel Stadium (Melbourne), and Suncorp Stadium (Brisbane). When they play in Sydney, tickets sell out fast — get them early.", ja: "オーストラリア女子サッカー代表チーム（Matildas）は、特に2023年FIFA女子ワールドカップ（オーストラリア/ニュージーランド開催）での活躍以降、国内で最も愛されるチームの一つになりました。サム・カーがスター選手です。ANZ Stadium、Marvel Stadium（メルボルン）、Suncorp Stadium（ブリスベン）などさまざまなスタジアムでホーム戦を行います。シドニーでの試合はチケットがすぐに売り切れるので、早めに購入しましょう。", zh: "澳大利亚女足国家队（Matildas）已成为全国最受爱戴的球队之一，尤其是在她们 2023 年 FIFA 女子世界杯（在澳大利亚/新西兰举办）的表现之后。萨姆·克尔（Sam Kerr）是明星球员。她们在 ANZ Stadium、Marvel Stadium（墨尔本）和 Suncorp Stadium（布里斯班）等多个体育场进行主场比赛。在悉尼比赛时，门票很快售罄 — 要尽早购买。", ko: "호주 여자 축구 대표팀(Matildas)은 2023년 FIFA 여자 월드컵(호주/뉴질랜드 공동 개최) 이후 가장 사랑받는 팀 중 하나가 되었습니다. 샘 케르가 스타 플레이어입니다. ANZ 스타디움, Marvel Stadium(멜버른), Suncorp Stadium(브리즈번) 등 다양한 경기장에서 홈 경기를 치릅니다. 시드니 경기는 표가 빨리 매진되므로 일찍 구매하세요." },
      { label: "Why Soccer is Growing", jaLabel: "\u30b5\u30c3\u30ab\u30fc\u304c\u6210\u9577\u3057\u3066\u3044\u308b\u7406\u7531", zhLabel: "\u8db3\u7403\u4e3a\u4f55\u8d8a\u6765\u8d8a\u6d41\u884c", koLabel: "\ucd95\uad6c\uac00 \uc131\uc7a5\ud558\ub294 \uc774\uc720", en: "Soccer is the most popular participatory sport in Australia — more kids play soccer than any other sport. It's also huge among international students and migrants from Europe, South America, Africa, and Asia. Community clubs are everywhere and are a great way to make friends and stay fit. Coaching is usually done by parent volunteers. You can find a club near you at playfootball.com.au.", ja: "サッカーはオーストラリアで最も人気のある参加型スポーツです — 他のどのスポーツよりも多くの子どもがサッカーをします。留学生や、ヨーロッパ、南米、アフリカ、アジアからの移民の間でもとても人気があります。地域のクラブはどこにでもあり、友達を作り健康を保つのに最適な方法です。コーチは通常、保護者のボランティアが務めます。playfootball.com.auで近くのクラブを探せます。", zh: "足球是澳大利亚参与人数最多的运动 — 踢足球的孩子比任何其他运动都多。它在留学生以及来自欧洲、南美、非洲和亚洲的移民中也非常流行。社区俱乐部随处可见，是结交朋友和保持健康的好方式。教练通常由家长志愿者担任。你可以在 playfootball.com.au 上找到附近的俱乐部。", ko: "축구는 호주에서 가장 인기 있는 참가 스포츠입니다 — 다른 스포츠보다 많은 아이들이 축구를 합니다. 유학생과 유럽, 남미, 아프리카, 아시아 이민자 사이에서도 인기가 높습니다. 지역 클럽이많이 있으며 친구 사귀기와 피트니스에 좋습니다. 코칭은 보통 부모 자원봉사자가 합니다. playfootball.com.au에서 가까운 클럽을 찾을 수 있습니다." },
    ],
  },
  {
    id: "other-sports",
    iconKey: "Users",
    accent: "amber",
    title: "Other Popular Sports",
    koTitle: "기타 인기 스포츠",
    jaTitle: "\u305d\u306e\u4ed6\u306e\u4eba\u6c17\u30b9\u30dd\u30fc\u30c4",
    zhTitle: "\u5176\u4ed6\u70ed\u95e8\u8fd0\u52a8",
    desc: "Swimming, tennis, golf, and Australia's fitness culture",
    koDesc: "수영, 테니스, 골프, 호주의 피트니스 문화",
    jaDesc: "\u6c34\u6cf3\u3001\u30c6\u30cb\u30b9\u3001\u30b4\u30eb\u30d5\u3001\u305d\u3057\u3066\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u306e\u30d5\u30a3\u30c3\u30c8\u30cd\u30b9\u6587\u5316",
    zhDesc: "\u6e38\u6cf3\u3001\u7f51\u7403\u3001\u9ad8\u5c14\u592b\uff0c\u4ee5\u53ca\u6fb3\u5927\u5229\u4e9a\u7684\u5065\u8eab\u6587\u5316",
    img: "/images/pexels-9030300.jpg",
    items: [
      { label: "Swimming", jaLabel: "\u6c34\u6cf3", zhLabel: "\u6e38\u6cf3", koLabel: "\uc218\uc601", en: "Australians are obsessed with swimming — we produce world-class swimmers. Olympic-standard pools are available across Sydney (Sydney Olympic Park Aquatic Centre, Cook+Philip Park, Laurentian). Summer means ocean swims and beach sprints — Bondi Icebergs swim club runs year-round in the frozen ocean pool at Bondi. You don't have to be fast; it's about being there. Junior swimming lessons start from ~$15 AUD/week at local council pools.", ja: "オーストラリア人は水泳に夢中です — 私たちは世界レベルの水泳選手を輩出しています。オリンピック規格のプールがシドニー全域にあります（Sydney Olympic Park Aquatic Centre、Cook+Philip Park、Laurentian）。夏は海での水泳やビーチスプリントを意味します — Bondi Icebergs水泳クラブは、Bondiの凍てつくオーシャンプールで一年中活動しています。速く泳ぐ必要はありません。大切なのはそこにいることです。子ども向け水泳レッスンは、地元の市議会プールで週約$15 AUDから始まります。", zh: "澳大利亚人痴迷游泳 — 我们培养出世界级的游泳选手。悉尼各地都有奥运标准泳池（Sydney Olympic Park Aquatic Centre、Cook+Philip Park、Laurentian）。夏天意味着海中游泳和沙滩冲刺 — Bondi Icebergs 游泳俱乐部在邦迪冰冷的海水泳池里全年开放。你不必游得快；重要的是参与其中。青少年游泳课在当地市议会泳池每周约 $15 AUD 起。", ko: "호주인들은 수영에 빠져 있습니다 — 세계적 수준 수영 선수를 배출합니다. 올림픽 표준 수영장이 시드니 전역에 있습니다(시드니 올림피아크 파크 액워틱 센터, Cook+Philip Park, Laurentian). 여름에는 바다 수영과 비치 스프린트가 있습니다 — Bondi Icebergs 클럽은 Bondi의 frozen ocean pool에서 년내내 운영됩니다. 잘 하기보다는 그냥 참여하는 것입니다. 청소년 수영 레슨은 지역 의회 수영장에서 약 $15 AUD/주부터 시작합니다." },
      { label: "Tennis", jaLabel: "\u30c6\u30cb\u30b9", zhLabel: "\u7f51\u7403", koLabel: "\ud14c\ub2c8\uc2a4", en: "The Australian Open in Melbourne (January) is one of the four Grand Slam tournaments and draws huge crowds. It's also the most accessible Grand Slam — grounds passes start around $50 AUD, and you can watch multiple matches simultaneously on outer courts. Sydney hosts the Sydney Tennis International (ATP/WTA) in January at the Sydney Olympic Park Tennis Centre. Public tennis courts are available in most parks — book via Inner West Council or your local council website for ~$15-$20 AUD/hour.", ja: "メルボルンで行われる全豪オープン（1月）は、4大グランドスラムの一つで、大勢の観客を集めます。最も手頃なグランドスラムでもあります — グラウンドパスは約$50 AUDからで、外コートでは複数の試合を同時に観戦できます。シドニーでは1月にSydney Olympic Park Tennis Centreでシドニー・テニス・インターナショナル（ATP/WTA）が開催されます。公共のテニスコートはほとんどの公園にあり、Inner West Councilまたは地元の市議会ウェブサイトから1時間約$15〜$20 AUDで予約できます。", zh: "在墨尔本举行的澳大利亚网球公开赛（1 月）是四大满贯赛事之一，吸引大量观众。它也是门槛最低的大满贯 — 场地通票约 $50 AUD 起，你可以在外场比赛同时观看多场比赛。悉尼在 1 月于 Sydney Olympic Park Tennis Centre 举办悉尼网球国际赛（ATP/WTA）。大多数公园都有公共网球场 — 可通过 Inner West Council 或当地市议会网站预订，每小时约 $15 至 $20 AUD。", ko: "멜버른에서 열리는 호주 오픈(1월)은 4대 그랜드 슬램 대회 중 하나이며 많은 관중을 끌어들입니다. 가장 접근하기 쉬운 그랜드 슬램이기도 합니다 — 그라운드 패스는 약 $50 AUD부터, 외부 코트에서 여러 경기를 동시에 볼 수 있습니다. 시드니는 시드니 올림픽 파크 테니스 센터에서 1월에 시드니 테니스 인터내셔널(ATP/WTA)을 개최합니다. 공용 테니스 코트는 대부분의 공원에서 이용 가능하며, Inner West 시 의회 또는 지역 의회 웹사이트에서 시간당 약 $15–$20 AUD에 예약할 수 있습니다." },
      { label: "Fitness Culture & Gyms", jaLabel: "\u30d5\u30a3\u30c3\u30c8\u30cd\u30b9\u6587\u5316\u3068\u30b8\u30e0", zhLabel: "\u5065\u8eab\u6587\u5316\u4e0e\u5065\u8eab\u623f", koLabel: "\ud53c\ud2b8\ub2c8\uc2a4 \ubb38\ud654\uc640 \ud5ec\uc2a4\uc7a5", en: "Australians are genuinely fitness-obsessed. Anytime Fitness (24/7, ~$15 AUD/week), F45 (functional training, ~$60 AUD/week), and Genesis (upmarket) are the main chains. Most suburbs have a local gym. Gym memberships are cheaper than in Korea — most start around $10-$15 AUD/week with no lock-in contracts. Many people use their commute time to exercise. Running is huge — the City2Sydney run (10km, August) and Sydney Marathon (September) are popular events.", ja: "オーストラリア人は本当にフィットネスに夢中です。Anytime Fitness（24時間365日、約$15 AUD/週）、F45（ファンクショナルトレーニング、約$60 AUD/週）、Genesis（高級）が主なチェーンです。ほとんどの郊外には地元のジムがあります。ジムの会員費は韓国より安いです — ほとんどが週約$10〜$15 AUDからで、長期拘束契約はありません。多くの人が通勤時間を使って運動します。ランニングは大人気です — City2Sydneyラン（10km、8月）とシドニーマラソン（9月）が人気のイベントです。", zh: "澳大利亚人是真心痴迷健身。Anytime Fitness（24 小时，约 $15 AUD/周）、F45（功能性训练，约 $60 AUD/周）和 Genesis（高端）是主要的连锁品牌。大多数郊区都有本地健身房。健身房会员费比韩国便宜 — 大多从每周约 $10 至 $15 AUD 起，且没有长期绑定合同。很多人利用通勤时间锻炼。跑步非常流行 — City2Sydney 跑（10 公里，8 月）和悉尼马拉松（9 月）都是热门赛事。", ko: "호주인들은 진짜 피트니스에 미쳐 있습니다. Anytime Fitness(24/7, 약 $15 AUD/주), F45(기능성 트레이닝, 약 $60 AUD/주), Genesis(고급) 등 주요 체인점이 있습니다. 대부분의 교외에는 로컬 헬스장도 있습니다. 헬스장 멤버십은 한국보다 저렴합니다 — 대부분 회비는 주당 $10-$15 AUD 정도이며, 사용하지 않을 때 지불하는 계약은 없습니다. 시간에 운동하는 사람이 많습니다. 러닝이 활발합니다 — City2Sydney 러닝(10km, 8월)과 시드니 마라톤(9월)이 인기 있습니다." },
    ],
  },
  {
    id: "sports-betting",
    iconKey: "Trophy",
    accent: "stone",
    title: "Sports Betting Culture",
    koTitle: "호주의 스포츠 베팅 문화",
    jaTitle: "\u30b9\u30dd\u30fc\u30c4\u8ced\u535a\u306e\u6587\u5316",
    zhTitle: "\u4f53\u80b2\u535a\u5f69\u6587\u5316",
    desc: "Sports betting is everywhere in Australia — what international students need to know",
    koDesc: "호주에 자리 잡은 스포츠 베팅 — 국제 학생이 알아야 할 것들",
    jaDesc: "\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u3067\u306f\u30b9\u30dd\u30fc\u30c4\u8ced\u535a\u304c\u3042\u3089\u3086\u308b\u3068\u3053\u308d\u306b \u2014 \u7559\u5b66\u751f\u304c\u77e5\u3063\u3066\u304a\u304f\u3079\u304d\u3053\u3068",
    zhDesc: "\u4f53\u80b2\u535a\u5f69\u5728\u6fb3\u5927\u5229\u4e9a\u65e0\u5904\u4e0d\u5728\u2014\u2014\u7559\u5b66\u751f\u9700\u8981\u4e86\u89e3\u4ec0\u4e48",
    img: "/images/tab_betting.jpg",
    items: [
      { label: "Why It's So Prevalent", jaLabel: "\u306a\u305c\u3053\u308c\u307b\u3069\u666e\u53ca\u3057\u3066\u3044\u308b\u306e\u304b", zhLabel: "\u4e3a\u4f55\u5982\u6b64\u666e\u904d", koLabel: "\uc65c \uc774\ub807\uac8c \ud754\ud55c\uac00", en: "Sports betting is advertised constantly during TV broadcasts — every ad break during a footy game seems to have a betting ad. Australia has some of the most liberal gambling laws in the world. The TAB (Totalisator Agency Board) was government-owned but most betting is now done through corporate bookmakers (Sportsbet, Bet365, Ladbrokes, PointsBet). This is a significant social issue in Australia — problem gambling affects ~1% of adults but the harm extends to families and communities.", ja: "スポーツ賭博はテレビ中継の間に絶え間なく宣伝されます — フッティーの試合中のCMタイムのたびに賭博の広告が出るように思えます。オーストラリアは世界で最も自由な賭博法の一つを持っています。TAB（全賭博公社）は国営でしたが、現在では賭けのほとんどは民間のブックメーカー（Sportsbet、Bet365、Ladbrokes、PointsBet）を通じて行われます。これはオーストラリアの重大な社会問題です — 問題賭博は成人の約1%に影響しますが、その害は家族やコミュニティにも及びます。", zh: "体育博彩在电视转播中不断做广告 — 橄榄球比赛的每个广告时段似乎都有博彩广告。澳大利亚拥有世界上最宽松的博彩法律之一。TAB（博彩总局）曾是国营的，但现在大多数投注都通过商业博彩公司（Sportsbet、Bet365、Ladbrokes、PointsBet）进行。这是澳大利亚一个重大的社会问题 — 问题赌博影响约 1% 的成年人，但其危害会波及家庭和社区。", ko: "스포츠 베팅은 TV 방송 중에 끊임없이 광고됩니다 — 풋볼 경기 중 광고 휴식마다 베팅 광고가 나오는 것 같습니다. 호주는 세계에서 가장 자유로운 도박법 중 하나를 가지고 있습니다. TAB(국영 도박 위원회)이었지만 현재 베팅의 대부분은 민간 북메이커(Sportsbet, Bet365, Ladbrokes, PointsBet)를 통해 이루어집니다. 이것은 호주에서 중요한 사회적 문제입니다 — 문제 도박은 성인 약 1%에 영향을 미치지만 가족과 공동체까지 해를 끼칩니다." },
      { label: "International Students — AVOID", jaLabel: "\u7559\u5b66\u751f \u2014 \u907f\u3051\u308b\u3053\u3068", zhLabel: "\u7559\u5b66\u751f\u2014\u2014\u52a1\u5fc5\u8fdc\u79bb", koLabel: "\uad6d\uc81c \ud559\uc0dd \u2014 \ud53c\ud558\uc138\uc694", en: "Sports betting is illegal or heavily restricted in many countries including South Korea. Even if legal in Australia, participating in sports betting as an international student can: violate your student visa conditions (check your specific visa subclass), lead to significant financial harm, result in addiction that affects your studies and wellbeing. If gambling is legal in your home country and you were already gambling before arriving, you are still strongly encouraged to avoid it while on a student visa. Australia has one of the highest gambling participation rates in the world — it is not normal and it causes real harm.", ja: "スポーツ賭博は、韓国を含む多くの国で違法または厳しく制限されています。たとえオーストラリアで合法であっても、留学生がスポーツ賭博に参加することは：学生ビザの条件に違反する可能性があり（あなたの特定のビザサブクラスを確認してください）、重大な経済的損害をもたらし、学業と健康に影響する依存症につながる可能性があります。母国で賭博が合法で、到着前から賭博をしていた場合でも、学生ビザの間は避けることを強く勧めます。オーストラリアは世界で最も賭博参加率が高い国の一つです — これは正常ではなく、実際に害を引き起こします。", zh: "体育博彩在包括韩国在内的许多国家都是非法的或受到严格限制。即使它在澳大利亚合法，作为留学生参与体育博彩也可能：违反你的学生签证条件（请查看你具体的签证子类）、导致严重的财务损失、成瘾并影响你的学业和身心健康。即使博彩在你的祖国合法，而你在抵达前就已参与博彩，在持学生签证期间仍强烈建议你远离它。澳大利亚是全球博彩参与率最高的国家之一 — 这并不正常，而且会造成真实的伤害。", ko: "스포츠 베팅은 한국을 포함한 많은 국가에서 불법이거나 엄격히 제한되어 있습니다. 호주에서 합법이더라도 국제 학생이 스포츠 베팅에 참여하면: 학생 비자 조건을 위반할 수 있습니다(비자 종류를 확인하세요), 심각한 재정적 피해를 입을 수 있습니다, 학업과 안녕에 영향을 미치는 중독으로 이어질 수 있습니다. 모국에서 도박이 합법이고 도착하기 전에 이미 도박을 했다면, 학생 비자 기간에는 특히 피할 것을 강력히 권장합니다. 호주는 세계에서 가장 높은 도박 참여율을 가지고 있습니다 — 이것은 정상적이지 않으며 실제 피해를 끼칩니다." },
      { label: "Getting Help", jaLabel: "\u652f\u63f4\u3092\u6c42\u3081\u308b", zhLabel: "\u83b7\u53d6\u5e2e\u52a9", koLabel: "\ub3c4\uc6c0 \ubc1b\uae30", en: "If you or someone you know is struggling with gambling, free and confidential help is available: Gambling Help Online (gamblinghelponline.org.au, 1800 858 858). These services are available in multiple languages including Korean. You can also speak to a counsellor at your university. Many universities have free confidential counselling services. Speaking up early makes a huge difference.", ja: "あなた自身、または知り合いが賭博で苦しんでいるなら、無料で秘密厳守の支援が利用できます：Gambling Help Online（gamblinghelponline.org.au、1800 858 858）。これらのサービスは韓国語を含む複数の言語で利用できます。大学のカウンセラーに相談することもできます。多くの大学には無料の秘密カウンセリングサービスがあります。早く声を上げることが大きな違いを生みます。", zh: "如果你或你认识的人正因赌博而困扰，可以获得免费且保密的帮助：Gambling Help Online（gamblinghelponline.org.au，1800 858 858）。这些服务提供包括韩语在内的多种语言。你也可以与所在大学的咨询师交谈。许多大学都提供免费保密的咨询服务。尽早说出来会带来巨大的不同。", ko: "도박으로 고통받고 있거나 알고 있는 사람이 있다면, 무료이자 비밀 보장인 도움말을 받을 수 있습니다: Gambling Help Online(gamblinghelponline.org.au, 1800 858 858). 이러한 서비스는 한국어를 포함한 여러 언어로 제공됩니다. 대학교 상담사에게도 말할 수 있습니다. 많은 대학교에는 무료 비밀 상담 서비스가 있습니다. 일찍 말하는 것이 큰 차이를 만듭니다." },
    ],
  },
];

export default function SportPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Sport</En>
            <Ja>スポーツ</Ja>
            <Zh>体育</Zh><Ko>스포츠</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En translated>Sport in Australia</En>
            <Ja>オーストラリアのスポーツ</Ja>
            <Zh>澳大利亚的体育</Zh><Ko>호주 스포츠</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En translated>Everything you need to know about following and playing sport — NRL, AFL, cricket, and more.</En>
            <Ja>スポーツを観る・プレーするために知っておきたいすべて — NRL、AFL、クリケットなど。</Ja>
            <Zh>关于观看和参与体育运动你需要了解的一切 — NRL、AFL、板球等等。</Zh>
            <Ko>호주에서 스포츠를 즐기고 따라가는 데 필요한 모든 것 — NRL, AFL, 크리켓 등.</Ko>
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
            <En translated>Find a club</En>
            <Ja>クラブを探す</Ja>
            <Zh>寻找俱乐部</Zh><Ko>동호회 찾기</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En translated>The best way to feel at home.</En>
            <Ja>家のようにくつろぐ一番の方法。</Ja>
            <Zh>找到归属感的最佳方式。</Zh>
            <Ko>가장 빠르게 정착하는 방법.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En translated>Joining a local sports club is the fastest way to meet people, learn the culture, and feel at home. Most clubs welcome beginners and international members. Find a junior soccer club, a cricket team, or a swim squad near you.</En>
            <Ja>地元のスポーツクラブに入るのが、人と出会い、文化を学び、居心地よく過ごすための最速の方法です。ほとんどのクラブは初心者や外国人メンバーを歓迎しています。近くのジュニアサッカークラブ、クリケットチーム、水泳チームを探してみましょう。</Ja>
            <Zh>加入当地的体育俱乐部是结识他人、了解文化、找到归属感最快的方式。大多数俱乐部都欢迎初学者和国际成员。在你附近找一家青少年足球俱乐部、板球队或游泳队吧。</Zh>
            <Ko>지역 스포츠 클럽에 가입하는 것은 사람들을 만나고, 문화를 배우며, 정착하는 가장 빠른 방법입니다. 대부분의 클럽은 초보자와 국제 회원을 환영합니다. 가까운 주니어 축구 클럽, 크리켓 팀, 수영 팀을 찾아보세요.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.playfootball.com.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset hover:bg-sunset-light text-white text-sm font-medium transition-colors">Find a soccer club ↗</a>
            <a href="https://www.playhq.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">PlayHQ — all sports ↗</a>
          </div>
        </section>
      </div>
    </div>
  );
}

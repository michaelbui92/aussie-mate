// Server component — bilingual Sydney transport guide.
// Redesigned in editorial style: full-bleed hero image with dual CTAs
// (matches the homepage vocabulary), persona chips, then a vertical
// sequence of EditorialSection cards (some with image banners).

import type { Metadata } from "next";
import { headers } from "next/headers";
import { pageMeta } from "@/lib/page-meta";
import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import EditorialSection, {
  type EditorialSectionData,
} from "@/components/EditorialSection";
import { Bus, Car, Coin, Plane, Train, Tree } from "@/components/Icons";
import { articleLdJson, seoFor, withSeo } from "@/lib/seo";
import RelatedContent from "@/components/RelatedContent";

export async function generateMetadata(): Promise<Metadata> {
  // Per request, so the tab title and the search-result headline are in the reader's
  // language. The canonical and hreflang come from the root layout, which reads the same
  // header. `Metadata` is imported by every page that uses withSeo.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return withSeo({

  ...seoFor("/transport", locale),
  title: pageMeta("/transport", locale).title,
  description: pageMeta("/transport", locale).description,
  },
  "/transport"
);
}


type TransportSection = Omit<EditorialSectionData, "items"> & {
  items: Array<{ label: string; koLabel?: string; jaLabel?: string; zhLabel?: string; en: string; ko: string; ja?: string; zh?: string }>;
};

const sections: TransportSection[] = [
  {
    id: "opal-card",
    iconKey: "Bus",
    accent: "sunset",
    title: "Opal Card",
    koTitle: "오팔 카드",
    jaTitle: "Opal\u30ab\u30fc\u30c9",
    zhTitle: "Opal\u5361",
    desc: "Sydney's public transport card — how to get one and use it",
    koDesc: "시드니 대중교통 카드 — 얻는 방법과 사용법",
    jaDesc: "\u30b7\u30c9\u30cb\u30fc\u306e\u516c\u5171\u4ea4\u901a\u30ab\u30fc\u30c9 \u2014 \u5165\u624b\u65b9\u6cd5\u3068\u4f7f\u3044\u65b9",
    zhDesc: "\u6089\u5c3c\u7684\u516c\u5171\u4ea4\u901a\u5361\u2014\u2014\u5982\u4f55\u83b7\u53d6\u548c\u4f7f\u7528",
    img: "/images/Opal_Card_with_mytrain_paper_tickets.jpg",
    items: [
      { label: "What is Opal?", jaLabel: "Opal\u3068\u306f\uff1f", zhLabel: "\u4ec0\u4e48\u662fOpal\uff1f", koLabel: "\uc624\ud314\uc774\ub780?", en: "Opal is the contactless card you use for buses, trains, ferries, and light rail in Sydney and NSW. You tap on and tap off at every journey. It saves you money — cash fares are almost double Opal prices.", ja: "Opalは、シドニーとNSWのバス、列車、フェリー、ライトレールで使う非接触カードです。毎回の乗車でタップ・オンとタップ・オフを行います。現金運賃はOpalのほぼ2倍なので、Opalを使うとお得です。", zh: "Opal是你在悉尼和新南威尔士州乘坐公交车、火车、渡轮和轻轨时使用的非接触式卡。每次出行都要刷卡进出（tap on／tap off）。它能帮你省钱——现金票价几乎是Opal价格的两倍。", ko: "Opal은 시드니와 NSW의 버스, 기차, 페리, 라이트 레일에 사용하는 비접촉식 카드입니다. 매 이동마다 탭 온과 탭 오프를 합니다. 현금보다 훨씬 저렴합니다." },
      { label: "Adult vs Concession", jaLabel: "Adult\u3068Concession", zhLabel: "\u6210\u4eba\u5361\u4e0e\u4f18\u60e0\u5361", koLabel: "Adult vs Concession", en: "There are two Opal types: Adult (full price) and Concession (half price for full-time students, seniors, pensioners). If you're a full-time student, apply for a Concession Opal card — you need your student ID and a passport photo.", ja: "Opalには2種類あります。Adult（正規料金）とConcession（全日制学生、シニア、年金受給者は半額）です。全日制学生ならConcession Opalカードを申請しましょう — 学生証とパスポート写真が必要です。", zh: "Opal有两种类型：成人卡（全价）和优惠卡（全日制学生、老年人和养老金领取者半价）。如果你是全日制学生，请申请Concession Opal卡——需要学生证和护照照片。", ko: "Opal에는 두 종류가 있습니다: Adult(정가)와 Concession(전학생, 시니어, 연금수급자 50% 할인). 전학생이라면 Concession Opal 카드를 신청하세요 — 학생증과 여권 사진이 필요합니다." },
      { label: "How to Get One", jaLabel: "\u5165\u624b\u65b9\u6cd5", zhLabel: "\u5982\u4f55\u83b7\u53d6", koLabel: "\uce74\ub4dc \ubc1c\uae09 \ubc29\ubc95", en: "Buy an Opal card at any train station, 7-Eleven, or newsagent. For a Concession card, you'll need to register online at opal.com.au — it takes 4-6 weeks to arrive by mail. Keep your student status updated — cards can be cancelled if you're no longer a student.", ja: "Opalカードはどの駅、セブン-イレブン、新聞販売店でも購入できます。Concessionカードはopal.com.auでオンライン登録が必要です — 郵送で届くまで4〜6週間かかります。学生ステータスは常に最新に保ちましょう — 学生でなくなるとカードが取り消されることがあります。", zh: "在任何火车站、7-Eleven或报刊亭都可以购买Opal卡。优惠卡需要在opal.com.au在线注册——邮寄到手需要4-6周。请及时更新你的学生身份——如果你不再是学生，卡可能会被注销。", ko: "기차역, 7-Eleven, 신문판매대에서 Opal 카드를 구매하세요. Concession 카드는 opal.com.au에서 온라인으로 등록해야 합니다 — 우편으로 도착하는 데 4-6주가 걸립니다. 학생 신분을 최신으로 유지하세요 — 학생이 아니면 카드가 취소될 수 있습니다." },
      { label: "Daily Cap", jaLabel: "1\u65e5\u4e0a\u9650", zhLabel: "\u6bcf\u65e5\u5c01\u9876", koLabel: "\uc77c\uc77c \uc0c1\ud55c", en: "Opal caps the damage: $19.30 a day from Monday to Thursday, $9.65 on Fridays, weekends and public holidays, and $50 across a week. The cap covers trains, metro, buses, ferries and light rail together. An Opal day starts at 4am and the week runs Monday to Sunday — use the same card or phone all day, or the trips don't count toward it.", ja: "Opalには上限があります。月曜〜木曜は1日$19.30、金曜・週末・祝日は$9.65、1週間では$50です。上限は列車、メトロ、バス、フェリー、ライトレールの合計に適用されます。Opalの1日は午前4時に始まり、週は月曜〜日曜です。1日中同じカードか端末を使わないと、運賃は上限に加算されません。", zh: "Opal有封顶：周一至周四每天$19.30，周五、周末和公共假期$9.65，一周$50。封顶按火车、地铁、公交、渡轮和轻轨合计计算。Opal的一天从凌晨4点开始，一周从周一到周日——整天要用同一张卡或同一个设备，否则行程不计入封顶。", ko: "Opal에는 상한선이 있습니다. 월~목요일은 하루 $19.30, 금요일·주말·공휴일은 $9.65, 일주일은 $50입니다. 상한선은 기차, 메트로, 버스, 페리, 라이트 레일을 합산해 적용됩니다. Opal의 하루는 새벽 4시에 시작하고, 주는 월요일~일요일입니다. 하루 종일 같은 카드나 기기를 쓰지 않으면 상한선에 합산되지 않습니다." },
      { label: "Auto-reload", jaLabel: "\u81ea\u52d5\u30c1\u30e3\u30fc\u30b8", zhLabel: "\u81ea\u52a8\u5145\u503c", koLabel: "\uc790\ub3d9 \ucda9\uc804", en: "Set up auto-reload so you never run out of balance. When your balance drops below $10 AUD, it automatically tops up from your credit/debit card. You can also tap your card at partner shops (Coles, Newsagents) to reload in person.", ja: "残高が切れないよう自動チャージを設定しましょう。残高が$10 AUDを下回ると、クレジット／デビットカードから自動的にチャージされます。提携店（Coles、新聞販売店）でカードをタップして直接チャージすることもできます。", zh: "设置自动充值，这样余额永远不会用完。当余额低于$10 AUD时，会自动从你的信用卡／借记卡充值。你也可以在合作商店（Coles、报刊亭）刷卡现场充值。", ko: "잔고가 떨어지지 않도록 자동 충전을 설정하세요. 잔고가 $10 AUD 이하로 떨어지면 자동으로 신용/직불 카드에서 충전됩니다. 파트너 매장(Coles, 신문판매대)에서 카드를 탭해서 직접 충전할 수도 있습니다." },
      { label: "Transferring Between Modes", jaLabel: "\u4ea4\u901a\u6a5f\u95a2\u9593\u306e\u4e57\u308a\u7d99\u304e", zhLabel: "\u4e0d\u540c\u4ea4\u901a\u65b9\u5f0f\u95f4\u6362\u4e58", koLabel: "\uad50\ud1b5\uc218\ub2e8 \uac04 \ud658\uc2b9", en: "One of Opal's better features: switch between train, metro, bus, ferry or light rail within 60 minutes of tapping off and the next fare drops by $2 for adults ($1 for concession). Tap off each trip and tap on the next — the discount is automatic, and the trips still add up toward your cap.", ja: "Opalの便利な機能のひとつ：降車後60分以内に列車、メトロ、バス、フェリー、ライトレールを乗り継ぐと、次の運賃が大人$2引き（Concessionは$1）になります。毎回タップ・オフして次の交通機関でタップ・オンしてください — 割引は自動で、運賃は上限に向けて加算されます。", zh: "Opal的便利功能之一：刷卡出站后60分钟内换乘火车、地铁、公交、渡轮或轻轨，下一程车费对成人减$2（优惠卡减$1）。每段行程都要刷卡出站、再刷卡上车——折扣自动生效，这些行程同样计入封顶。", ko: "Opal의 편리한 기능 하나: 하차 후 60분 이내에 기차, 메트로, 버스, 페리, 라이트 레일로 갈아타면 다음 운임이 성인 $2 할인됩니다(Concession은 $1). 매번 탭 오프하고 다음 교통수단에서 탭 온하세요 — 할인은 자동이며, 그 이동도 상한선에 합산됩니다." },
    ],
  },
  {
    id: "sydney-trains",
    iconKey: "Train",
    accent: "coast",
    title: "Sydney Trains",
    koTitle: "시드니 기차",
    jaTitle: "Sydney Trains",
    zhTitle: "\u6089\u5c3c\u706b\u8f66",
    desc: "How the train system works",
    koDesc: "기차 시스템이 어떻게 작동하는지",
    jaDesc: "\u5217\u8eca\u30b7\u30b9\u30c6\u30e0\u306e\u4ed5\u7d44\u307f",
    zhDesc: "\u706b\u8f66\u7cfb\u7edf\u5982\u4f55\u8fd0\u4f5c",
    img: "/images/Waratah_Series_1_(A_Set)_at_Sydney_Central_Station.jpg",
    items: [
      { label: "Train Network Basics", jaLabel: "\u5217\u8eca\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u57fa\u672c", zhLabel: "\u706b\u8f66\u7f51\u7edc\u57fa\u7840", koLabel: "\uae30\ucc28 \ub124\ud2b8\uc6cc\ud06c \uae30\ucd08", en: "Sydney has a suburban train network (Sydney Trains) with lines covering the city, eastern suburbs, inner west, North Shore, and outer areas. Trains run from about 4am to midnight every day. On Friday and Saturday nights, some lines run 24 hours.", ja: "シドニーには郊外列車ネットワーク（Sydney Trains）があり、市内、東部郊外、インナー・ウェスト、ノース・ショア、外縁部をカバーしています。列車は毎日おおよそ午前4時から深夜0時まで運行しています。金曜日と土曜日の夜は、一部の路線が24時間運行します。", zh: "悉尼拥有郊区火车网络（Sydney Trains），线路覆盖市区、东部郊区、内西区、北岸和外围地区。火车每天大约从凌晨4点运行到午夜。周五和周六晚上，部分线路24小时运行。", ko: "시드니에는 시내, 동부 교외, 이너 웨스트, 노스 쇼어, 외곽 지역을 연결하는 광역 기차 네트워크(Sydney Trains)가 있습니다. 기차는 매일 약 새벽 4시부터 자정까지 운행됩니다. 금요일과 토요일 밤에는 일부 노선이 24시간 운영됩니다." },
      { label: "Zones and Fares", jaLabel: "\u30be\u30fc\u30f3\u3068\u904b\u8cc3", zhLabel: "\u8ba1\u8d39\u533a\u4e0e\u7968\u4ef7", koLabel: "\uad6c\uc5ed\uacfc \uc694\uae08", en: "Opal is priced by distance band, not by zone: the further you go on one mode, the more you pay, so there is no flat city fare to learn and no zone map to memorise. A short hop in the CBD is the cheapest fare there is. The Opera House is a five-minute walk from Circular Quay — do that one on foot, the ferry does not make it free.", ja: "Opalはゾーンではなく距離帯で運賃が決まります。同じ交通機関でも遠いほど高く、一律の市内運賃も覚えるべきゾーンマップもありません。CBD内の短い移動がもっとも安い運賃です。オペラハウスはサーキュラー・キーから徒歩5分 — ここは歩きましょう。フェリーは無料ではありません。", zh: "Opal按距离段计价，不分区：同一种交通方式走得越远越贵，既没有统一的市区票，也没有需要记的分区图。CBD内的短程是全网最便宜的票价。歌剧院距环形码头步行五分钟——这段走过去就好，渡轮并不免费。", ko: "Opal은 존이 아니라 거리 구간으로 운임을 계산합니다. 같은 교통수단이라도 멀수록 비싸고, 일률적인 시내 요금도 외울 존 지도도 없습니다. CBD 안의 짧은 이동이 가장 저렴합니다. 오페라 하우스는 서큘러 키(Circular Quay)에서 도보 5분 거리이니 걸어가세요. 페리는 무료가 아닙니다." },
      { label: "Reading Timetables", jaLabel: "\u6642\u523b\u8868\u306e\u8aad\u307f\u65b9", zhLabel: "\u770b\u61c2\u65f6\u523b\u8868", koLabel: "\uc2dc\uac04\ud45c \ubcf4\ub294 \ubc95", en: "Most trains run every 5-15 minutes during peak hours (6-9am, 4-7pm). Off-peak, it can be every 20-30 minutes. Use the Trip Planner app or Google Maps — real-time updates are available. The T1 North Shore line is the busiest. Always check the platform boards at the station — last-minute platform changes and cancellations don't always reach the printed timetable or even the apps.", ja: "ほとんどの列車はラッシュ時（午前6〜9時、午後4〜7時）に5〜15分間隔で運行しています。オフピーク時は20〜30分間隔になることもあります。Trip PlannerアプリやGoogle Mapsを使いましょう — リアルタイムの情報を確認できます。T1ノース・ショア線は最も混雑します。駅のホーム表示板を必ず確認してください — 直前のホーム変更や運休は、印刷された時刻表やアプリに反映されないことがあります。", zh: "大多数火车在高峰时段（早6-9点、下午4-7点）每5-15分钟一班。非高峰时段可能每20-30分钟一班。使用Trip Planner应用或Google Maps——可以获取实时更新。T1北岸线最繁忙。请务必查看车站的站台信息板——临时变更站台和取消班次并不总会反映在印刷时刻表甚至应用上。", ko: "대부분의 기차는 러시아워(6-9am, 4-7pm)에 5-15분 간격으로 운행됩니다. 비 러시아워에는 20-30분 간격일 수 있습니다. Trip Planner 앱이나 Google Maps를 사용하세요 — 실시간 업데이트를 활용할 수 있습니다. T1 노스 쇼어 노선이 가장 붐빈다. 역의 전광판을 꼭 확인하세요 — 막판한 승강장 변경과 결항은 종이 시간표나 앱에 반영되지 않을 수 있습니다." },
      { label: "Airport Link", jaLabel: "\u7a7a\u6e2f\u7dda", zhLabel: "\u673a\u573a\u7ebf", koLabel: "Airport Link", en: "The T8 Airport line carries a station access fee of $18.61 for an adult, on top of the train fare — the airport stations are privately owned. The fee has its own $37.75 weekly cap and is not counted in the Opal daily or weekly caps. Budget about $23 to the city in peak. If you have time, the 420 bus to Mascot is a few dollars instead.", ja: "T8空港線は列車運賃に加えて、大人$18.61の駅入場料がかかります — 空港駅は民間所有です。この料金には独自の週$37.75の上限があり、Opalの1日・週の上限には含まれません。ピーク時に市内まで約$23を見込んでください。時間があれば、マスコット行きの420番バスのほうが数ドルです。", zh: "T8机场线在火车票价之外另收成人$18.61的车站使用费——机场车站归私人所有。这笔费用有单独的每周$37.75封顶，且不计入Opal的每日或每周封顶。高峰时段去市区请预算约$23。如果有时间，坐420路公交去Mascot只要几块钱。", ko: "T8 공항 노선은 기차 운임에 더해 성인 $18.61의 역 이용료가 붙습니다 — 공항 역은 민간 소유입니다. 이 요금에는 별도의 주간 $37.75 상한선이 있고, Opal의 일일·주간 상한선에는 포함되지 않습니다. 피크 시간대 시내까지 약 $23을 예상하세요. 시간이 있다면 Mascot행 420번 버스가 몇 달러입니다." },
    ],
  },
  {
    id: "buses",
    iconKey: "Car",
    accent: "sage",
    title: "Buses & Ferries",
    koTitle: "버스와 페리",
    jaTitle: "\u30d0\u30b9\u3068\u30d5\u30a7\u30ea\u30fc",
    zhTitle: "\u516c\u4ea4\u4e0e\u6e21\u8f6e",
    desc: "The bus network and the most scenic transport in Sydney",
    koDesc: "버스 네트워크와 시드니에서 가장 멋진 교통수단",
    jaDesc: "\u30d0\u30b9\u7db2\u3068\u30b7\u30c9\u30cb\u30fc\u3067\u6700\u3082\u666f\u8272\u306e\u3088\u3044\u4ea4\u901a\u6a5f\u95a2",
    zhDesc: "\u516c\u4ea4\u7f51\u7edc\u548c\u6089\u5c3c\u98ce\u666f\u6700\u7f8e\u7684\u4ea4\u901a\u65b9\u5f0f",
    items: [
      { label: "Bus Network", jaLabel: "\u30d0\u30b9\u7db2", zhLabel: "\u516c\u4ea4\u7f51\u7edc", koLabel: "\ubc84\uc2a4 \ub124\ud2b8\uc6cc\ud06c", en: "Sydney Buses covers the whole city and most suburbs. Most routes run from 5am to midnight, with Nightride services covering major routes 24/7. Use Google Maps or the Trip Planner app for real-time tracking. Buses are usually the cheapest way to get around if you don't live near a train station.", ja: "Sydney Busesは市内全域とほとんどの郊外をカバーしています。ほとんどの路線は午前5時から深夜0時まで運行し、Nightrideサービスが主要路線を24時間365日カバーしています。リアルタイムの追跡にはGoogle MapsまたはTrip Plannerアプリを使いましょう。駅の近くに住んでいないなら、通常バスが最も安い移動手段です。", zh: "Sydney Buses覆盖整个城市和大多数郊区。大多数线路从早5点运行到午夜，Nightride服务全天候覆盖主要线路。使用Google Maps或Trip Planner应用进行实时追踪。如果你不住在火车站附近，公交车通常是最便宜的出行方式。", ko: "Sydney Buses는 도시 전체와 대부분의 교외 지역을 커버합니다. 대부분의 노선은 오전 5시부터 자정까지 운행되며, Nightride 서비스는 주요 노선을 24시간 운행합니다. 실시간 추적은 Google Maps나 Trip Planner 앱을 사용하세요. 기차역 근처에 살지 않는다면 보통 버스가 가장 저렴한 이동 수단입니다." },
      { label: "Light Rail (L1, L2, L3)", jaLabel: "\u30e9\u30a4\u30c8\u30ec\u30fc\u30eb\uff08L1\u3001L2\u3001L3\uff09", zhLabel: "\u8f7b\u8f68\uff08L1\u3001L2\u3001L3\uff09", koLabel: "\uacbd\uc804\ucca0 (L1, L2, L3)", en: "Sydney's light rail serves the CBD, inner west (L1), and the eastern suburbs to Kingsford (L2) and Juniors Kingsford (L3). Great for getting around Surry Hills, Pyrmont, and the inner west. Same Opal card, same caps as buses and trains.", ja: "シドニーのライトレールはCBD、インナー・ウェスト（L1）、そして東部郊外のキングスフォード（L2）とジュニアーズ・キングスフォード（L3）まで運行しています。サリー・ヒルズ、ピルモント、インナー・ウェストの移動に便利です。バスや列車と同じOpalカード、同じ上限が適用されます。", zh: "悉尼的轻轨服务于CBD、内西区（L1），以及通往金斯福德（L2）和朱尼尔斯金斯福德（L3）的东部郊区。非常适合在萨里山、皮尔蒙特和内西区出行。使用相同的Opal卡，与公交车和火车一样的封顶。", ko: "시드니의 라이트 레일은 CBD, 이너 웨스트(L1), 동부 교외의 Kingsford(L2)와 Juniors Kingsford(L3)까지 운행됩니다. Surry Hills, Pyrmont, 이너 웨스트를 이동하기에 좋습니다. 버스와 기차와 동일한 오팔 카드, 동일한 일일 상한선이 그대로 적용됩니다." },
      { label: "Sydney Ferries", jaLabel: "Sydney Ferries", zhLabel: "\u6089\u5c3c\u6e21\u8f6e", koLabel: "\uc2dc\ub4dc\ub2c8 \ud398\ub9ac", en: "Sydney Ferries is one of the most scenic transport networks in the world. The F1 from Circular Quay to Manly (30 min, $9.20 AUD) is a must-do. The F2 to Taronga Zoo, F4 to Pyrmont, and F5 to Neutral Bay are all gorgeous. All use the same Opal card. Ferries within the harbour are surprisingly cheap — often cheaper than a bus for the same distance.", ja: "Sydney Ferriesは世界で最も景色のよい交通ネットワークのひとつです。サーキュラー・キーからマンリーまでのF1（30分、$9.20 AUD）は必ず体験したいルートです。タロンガ動物園行きのF2、ピルモント行きのF4、ニュートラル・ベイ行きのF5もどれも素晴らしい眺めです。すべて同じOpalカードが使えます。港内のフェリーは驚くほど安く、同じ距離ならバスより安いこともよくあります。", zh: "Sydney Ferries是世界上最美的交通网络之一。从环形码头到曼利的F1线（30分钟，$9.20 AUD）不容错过。开往塔龙加动物园的F2、开往皮尔蒙特的F4和开往中立湾的F5都非常美。全都使用同一张Opal卡。港区内的渡轮出奇地便宜——相同距离往往比公交车还便宜。", ko: "Sydney Ferries는 세계에서 가장 경치 좋은 교통 네트워크 중 하나입니다. Circular Quay에서 Manly까지 F1(30분, $9.20 AUD)은 꼭 타보세요. Taronga Zoo행 F2, Pyrmont행 F4, Neutral Bay행 F5도 모두 멋집니다. 모두 동일한 Opal 카드를 사용합니다. 항구 내의 페리는 의외로 저렴합니다 — 종종 같은 거리의 버스보다 저렴합니다." },
    ],
  },
  {
    id: "driving-cycling",
    iconKey: "Tree",
    accent: "stone",
    title: "Cycling & Walking",
    koTitle: "자전거와 도보",
    jaTitle: "\u81ea\u8ee2\u8eca\u3068\u5f92\u6b69",
    zhTitle: "\u9a91\u884c\u4e0e\u6b65\u884c",
    desc: "Active transport in Sydney",
    koDesc: "시드니의 자발적 교통수단",
    jaDesc: "\u30b7\u30c9\u30cb\u30fc\u306e\u30a2\u30af\u30c6\u30a3\u30d6\u4ea4\u901a",
    zhDesc: "\u6089\u5c3c\u7684\u7eff\u8272\u51fa\u884c\u65b9\u5f0f",
    items: [
      { label: "Cycling in Sydney", jaLabel: "\u30b7\u30c9\u30cb\u30fc\u3067\u306e\u30b5\u30a4\u30af\u30ea\u30f3\u30b0", zhLabel: "\u5728\u6089\u5c3c\u9a91\u884c", koLabel: "\uc2dc\ub4dc\ub2c8\uc5d0\uc11c \uc790\uc804\uac70 \ud0c0\uae30", en: "Sydney has a growing network of bike paths. The CBD to inner west has separated lanes on many roads. Bike share schemes (oBike, Lime) operate in some areas. Helmets are mandatory — fines apply for riding without one. Sydney's hilly in places — be prepared for climbs!", ja: "シドニーには拡大を続ける自転車道ネットワークがあります。CBDからインナー・ウェストにかけては、多くの道路に分離された自転車レーンがあります。一部の地域ではバイクシェア（oBike、Lime）が利用できます。ヘルメットの着用は義務です — 着用せずに走行すると罰金が科されます。シドニーには坂道の多い場所もあります — 上りに備えましょう！", zh: "悉尼拥有不断扩展的自行车道网络。从CBD到内西区的许多道路上都有分隔的自行车道。部分区域有共享单车（oBike、Lime）。头盔是强制佩戴的——不戴会被罚款。悉尼有些地方多坡——做好爬坡的准备！", ko: "시드니에는 늘어나는 자전거 도로 네트워크가 있습니다. CBD와 이너 웨스트 구간에는 많은 도로에 분리된 자전거 차선이 있습니다. 일부 지역에서는 자전거 공유(오바이크, 라임) 서비스를 운영합니다. 헬멧 착용은 의무입니다 — 미착용 시 벌금이 부과됩니다. 시드니에는 경사가 있는 구간도 있으니 오르막에 대비하세요!" },
      { label: "Walking Distances", jaLabel: "\u5f92\u6b69\u3067\u306e\u8ddd\u96e2", zhLabel: "\u6b65\u884c\u8ddd\u79bb", koLabel: "\ub3c4\ubcf4 \uac70\ub9ac", en: "Sydney's CBD is compact and walkable. The Rocks to Circular Quay is 10 minutes. Darling Harbour to Barangaroo is 15 minutes. Most inner-city suburbs (Surry Hills, Newtown, Glebe) are easily explored on foot. Wear comfortable shoes and bring water in summer.", ja: "シドニーのCBDはコンパクトで歩きやすいです。ザ・ロックスからサーキュラー・キーまでは10分。ダーリング・ハーバーからバランガルーまでは15分。市内中心部のほとんどの地区（サリー・ヒルズ、ニュータウン、グリーブ）は徒歩で気軽に散策できます。歩きやすい靴を履き、夏は水を持参しましょう。", zh: "悉尼CBD紧凑且适合步行。从岩石区到环形码头10分钟。从达令港到巴兰加鲁15分钟。大多数内城郊区（萨里山、纽敦、格利布）都可以轻松步行游览。穿舒适的鞋子，夏天记得带水。", ko: "시드니 CBD는 컴팩트하고 도보로 이동할 수 있습니다. The Rocks에서 Circular Quay는 10분. Darling Harbour에서 Barangaroo는 15분. 대부분의 시내 근처 지역(Surry Hills, Newtown, Glebe)은 도보로 쉽게 탐험할 수 있습니다. 편안한 신발을 신고 여름에는 물을 지참하세요." },
    ],
  },
  {
    id: "regional",
    iconKey: "Plane",
    accent: "rose",
    title: "Regional & Interstate",
    koTitle: "지역 및 타주",
    jaTitle: "\u5730\u65b9\u90e8\u3068\u5dde\u9593",
    zhTitle: "\u533a\u57df\u4e0e\u8de8\u5dde\u51fa\u884c",
    desc: "Getting out of Sydney",
    koDesc: "시드니에서 벗어나기",
    jaDesc: "\u30b7\u30c9\u30cb\u30fc\u304b\u3089\u51fa\u304b\u3051\u308b",
    zhDesc: "\u8d70\u51fa\u6089\u5c3c",
    items: [
      { label: "Trains to Other Cities", jaLabel: "\u4ed6\u90fd\u5e02\u3078\u306e\u5217\u8eca", zhLabel: "\u524d\u5f80\u5176\u4ed6\u57ce\u5e02\u7684\u706b\u8f66", koLabel: "\ub2e4\ub978 \ub3c4\uc2dc\ub85c \uac00\ub294 \uae30\ucc28", en: "NSW TrainLink runs services to regional NSW and interstate. Sydney to Melbourne: ~11 hours on the Spirit of XPT. Sydney to Brisbane: ~14 hours. Sydney to Canberra: ~4 hours. Book in advance for cheaper fares. Sleeper berths available on some long-distance services.", ja: "NSW TrainLinkはNSWの地方部と州間へのサービスを運行しています。シドニーからメルボルン：Spirit of XPTで約11時間。シドニーからブリスベン：約14時間。シドニーからキャンベラ：約4時間。早めに予約すると運賃が安くなります。一部の長距離サービスには寝台が用意されています。", zh: "NSW TrainLink运营前往新南威尔士州偏远地区和州际的列车。悉尼到墨尔本：乘坐Spirit of XPT约11小时。悉尼到布里斯班：约14小时。悉尼到堪培拉：约4小时。提前订票可享受更便宜的票价。部分长途列车设有卧铺。", ko: "NSW TrainLink는 NSW 지역과 타주로 가는 서비스를 운행합니다. 시드니에서 멜버른까지: Spirit of XPT로 약 11시간. 시드니에서 브리즈번까지: 약 14시간. 시드니에서 캔버라까지: 약 4시간. 미리 예약하면 더 저렴합니다. 일부 장거리 서비스에는 침대석이 있습니다." },
      { label: "Domestic Flights", jaLabel: "\u56fd\u5185\u7dda", zhLabel: "\u56fd\u5185\u822a\u73ed", koLabel: "\uad6d\ub0b4\uc120 \ud56d\uacf5\ud3b8", en: "Sydney Airport (SYD) has direct flights to all major Australian cities. Melbourne is 1h 15min, Brisbane is 1h 30min, Perth is 5h, Darwin is 4h 30min. Budget airlines: Jetstar, Tigerair (now part of Virgin), Bonza. Compare on Google Flights or Skyscanner. Book 6-8 weeks ahead for the best prices.", ja: "シドニー空港（SYD）はオーストラリアの主要都市すべてへの直行便があります。メルボルンは1時間15分、ブリスベンは1時間30分、パースは5時間、ダーウィンは4時間30分です。格安航空会社：Jetstar、Tigerair（現在はVirginの一部）、Bonza。Google FlightsやSkyscannerで比較しましょう。6〜8週間前に予約すると最も安くなります。", zh: "悉尼机场（SYD）有直飞澳大利亚所有主要城市的航班。墨尔本1小时15分钟，布里斯班1小时30分钟，珀斯5小时，达尔文4小时30分钟。廉价航空公司：捷星（Jetstar）、老虎航空（Tigerair，现属维珍）、Bonza。可在Google Flights或Skyscanner上比较。提前6-8周预订可获得最优惠价格。", ko: "시드니 공항(SYD)은 모든 주요 호주 도시로 직항편을 운항합니다. 멜버른 1시간 15분, 브리즈번 1시간 30분, 퍼스 5시간, 다윈 4시간 30분. 저가 항공사: 제트스타, 타이거에어(현재 버진에 편입), 본자. Google Flights나 Skyscanner에서 비교하세요. 6-8주 전에 예약하면 최저가입니다." },
      { label: "Interstate Buses", jaLabel: "\u5dde\u9593\u30d0\u30b9", zhLabel: "\u8de8\u5dde\u5df4\u58eb", koLabel: "\ud0c0\uc8fc \ubc84\uc2a4", en: "Greyhound and Murrays are the two main interstate bus operators. Cheaper than trains and planes but slower. Sydney to Melbourne: ~11 hours. Sydney to Brisbane: ~12 hours. Useful for backpackers and budget travellers. Book online for cheaper fares.", ja: "GreyhoundとMurraysは州間バスの二大運行会社です。列車や飛行機より安いですが、その分遅いです。シドニーからメルボルン：約11時間。シドニーからブリスベン：約12時間。バックパッカーや予算重視の旅行者に便利です。オンラインで予約すると運賃が安くなります。", zh: "Greyhound和Murrays是两家长途州际巴士运营商。比火车和飞机便宜，但速度较慢。悉尼到墨尔本：约11小时。悉尼到布里斯班：约12小时。对背包客和预算旅行者很有用。在线预订可获得更便宜的票价。", ko: "Greyhound와 Murrays는 두 주요 타주 버스 운영사입니다. 기차와 비행기보다 저렴하지만 느립니다. 시드니에서 멜버른까지: 약 11시간. 시드니에서 브리즈번까지: 약 12시간. 배낭여행객과 예산 여행객에게 유용합니다. 온라인 예약이 더 저렴합니다." },
    ],
  },
];

export default async function TransportPage() {
  // Per request, so the Article schema declares the reader's language. Previously every
  // locale emitted inLanguage ["en"].
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      {/* Hero — minimal text header, matches weather page style */}
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset-ink mb-3">
            <En translated>Transport</En>
            <Ja>交通</Ja>
            <Zh>交通</Zh>
            <Ko>교통</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En translated>Getting around</En>
            <Ja>市内の移動</Ja>
            <Zh>交通出行</Zh>
            <Ko>시드니 교통</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En translated>Opal cards, trains, buses, ferries — Sydney's transport, decoded.</En>
            <Ja>Opal カード、電車、バス、フェリー — シドニーの交通をわかりやすく解説。</Ja>
            <Zh>Opal、火车、巴士、渡轮 — 悉尼交通全解析。</Zh>
            <Ko>오팔 카드, 기차, 버스, 페리 — 시드니 교통의 모든 것.</Ko>
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
            <En translated>Trip planner</En>
            <Ja>旅行プランナー</Ja>
            <Zh>行程规划器</Zh><Ko>여행 플래너</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En translated>Real-time updates at your fingertips.</En>
            <Ja>リアルタイム情報をすぐに手元で。</Ja>
            <Zh>实时信息，触手可及。</Zh>
            <Ko>실시간 업데이트를 손쉽게.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En translated>Google Maps and the Trip Planner app both show live train, bus, and ferry times. Tap your destination, choose Transit, and follow the directions. Real-time platform numbers and service alerts are built in.</En>
            <Ja>Google MapsとTrip Plannerアプリはどちらも、電車、バス、フェリーのリアルタイム時刻を表示します。目的地をタップして「交通機関」を選び、案内に従ってください。リアルタイムのホーム番号と運行情報が組み込まれています。</Ja>
            <Zh>Google Maps 和 Trip Planner 应用都能显示火车、巴士和渡轮的实时时刻。点击目的地，选择“公共交通”，然后按照指引操作。实时站台编号和服务提醒均已内置。</Zh>
            <Ko>Google Maps와 Trip Planner 앱 모두 실시간 기차, 버스, 페리 시간을 보여줍니다. 목적지를 탭하고 대중교통을 선택한 후 안내를 따르세요. 실시간 플랫폼 번호와 운행 알림이 내장되어 있습니다.</Ko>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://transportnsw.info" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sunset-ink hover:bg-sunset-light text-white text-sm font-medium transition-colors">Trip Planner ↗</a>
            <a href="https://www.opal.com.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium border border-stone-700 transition-colors">Opal account ↗</a>
          </div>
        </section>
      </div>

      {/* Structured data for Google. Article + BreadcrumbList rich results. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleLdJson({
              path: "transport",
              headline: "Getting around Sydney — transport, Opal, and driving in NSW",
              description:
                "시드니 교통 가이드 — 오팔 카드, 기차/버스/페리, 우버, 시드니에서 운전하기, 지방 여행 교통편까지 한국어로 정리.",
              locale,
            })
          ),
        }}
      />


      <RelatedContent
        items={[
          {
            href: "/apartment",
            title: { en: "Where to live", ja: "どこに住むか", zh: "住在哪里", ko: "어디에 살까" },
            description: {
              en: "Where you live determines your commute. Opal weekly travel caps.", ja: "住む場所が通勤を左右します。Opalの週間交通費上限。", zh: "住在哪里决定了你的通勤。Opal每周交通费封顶。",
              ko: "거주지에 따라 통근이 결정됩니다. 오팔 주간 교통비 한도.",
            },
          },
          {
            href: "/tourist",
            title: { en: "Sydney day trips", ja: "シドニー日帰り旅行", zh: "悉尼一日游", ko: "시드니 당일치기" },
            description: {
              en: "Blue Mountains, Hunter Valley, Northern Beaches — how to get there.", ja: "ブルー・マウンテンズ、ハンター・バレー、ノーザン・ビーチズ — 行き方。", zh: "蓝山、猎人谷、北部海滩——如何前往。",
              ko: "블루마운틴, 헌터밸리, 노던비치 — 가는 법.",
            },
          },
          {
            href: "/finance",
            title: { en: "Saving on transit", ja: "交通費の節約", zh: "节省交通费", ko: "교통비 절약" },
            description: {
              en: "Concession Opal, weekly caps, and tax-deductible work travel.", ja: "割引Opal、週間上限、そして経費控除できる通勤費。", zh: "优惠Opal、每周封顶，以及可抵税的通勤出行。",
              ko: "할인 오팔, 주간 한도, 그리고 직장 통근의 세액 공제.",
            },
          },
        ]}
      />
    </div>
  );
}

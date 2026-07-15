// Server component — bilingual Australian sports guide.
// Redesigned in editorial style.

import { En, Ko } from "@/components/LangBlocks";
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
  items: Array<{ label: string; en: string; ko: string }>;
};

const sections: SportSection[] = [
  {
    id: "big-three",
    iconKey: "Trophy",
    accent: "sunset",
    title: "The Big 3 Codes",
    koTitle: "호주 3대 스포츠",
    desc: "NRL (Rugby League), AFL (Aussie Rules), and Rugby Union — the sports that define Australian culture",
    koDesc: "NRL, AFL, 럭비 — 호주 문화를 대표하는 스포츠",
    img: "/images/pexels-23947874.jpg",
    items: [
      { label: "NRL — National Rugby League", en: "NRL is Sydney's heartbeat. A 17-team competition (9 based in NSW, 3 in QLD, plus others) running March to October. Grand Final is an unofficial national holiday in NSW. Key teams: Penrith Panthers, South Sydney Rabbitohs, Sydney Roosters, Parramatta Eels, Wests Tigers (Michael's team!), Brisbane Broncos, Melbourne Storm. Tickets from ~$25 AUD at Ticketek or the team websites. The rivalries are fierce and the atmosphere is incredible — especially for a local derby.", ko: "NRL은 시드니의 심장입니다. 17개 팀이 참가하는 대회로(NSW 9팀, QLD 3팀 포함) 3월부터 10월까지 열립니다. 그랜드 파이널은 NSW에서는 비공식 국경일 수준의 열기를 보여줍니다. 주요 팀: Penrith Panthers, South Sydney Rabbitohs, Sydney Roosters, Parramatta Eels, Wests Tigers (마이클의 팀!), Brisbane Broncos, Melbourne Storm. 티켓은 Ticketek 또는 팀 웹사이트에서 약 $25 AUD부터 구매 가능합니다." },
      { label: "AFL — Australian Rules Football", en: "AFL is the nation's most-watched sport. 18 teams from all over Australia compete in a fast, high-scoring game played on an oval ball. The season runs March-September with the Grand Final in September/October. Sydney has two teams: Sydney Swans (based at the SCG in Moore Park) and Greater Western Sydney Giants (GIANTS Stadium at Homebush). The Swans have a huge following — if they make the Grand Final, the city stops. Tickets from ~$30 AUD at Ticketmaster.", ko: "AFL은 호주에서 가장 많은 시청자를 끌어 모으는 스포츠입니다. 18개 팀이 오벌 볼로 진행되는 빠르고 점수 왕복이 많은 경기를 펼칩니다. 시즌은 3월부터 9월까지, 그랜드 파이널은 9월/10월에 열립니다. 시드니에는 두 개의 팀이 있습니다: Sydney Swans (Moore Park의 SCG)그리고 Greater Western Sydney Giants (Homebush의 GIANTS Stadium). Swans는 팬 기반이 매우 큽니다 — 그랜드 파이널에 진출하면 도시가 멈춥니다. 티켓은 Ticketmaster에서 약 $30 AUD부터." },
      { label: "Rugby Union", en: "Rugby Union is more niche but has a loyal following. The national competition is Super Rugby (12 teams from NZ, Australia, Argentina, South Africa). NSW Waratahs play out of Sydney Football Stadium (Allianz Stadium) at Moore Park. International matches (Wallabies) are played at ANZ Stadium or the SCG. International Rugby (Test) matches against New Zealand (All Blacks) or South Africa (Springboks) are incredible events — the atmosphere rivals anything in the world. Tickets from ~$40 AUD.", ko: "럭비 유니온은 다른 스포츠에 비해 대중적이지는 않지만 충성스러운 팬층이 있습니다. 전국 대회인 Super Rugby에는 NZ, 호주, 아르헨티나, 남아프리카의 12개 팀이 참가합니다. NSW Waratahs는 Moore Park의 시드니 풋볼 스타디움(Allianz Stadium)에서 경기합니다. 국제 경기(월러비)는 ANZ 스타디움이나 SCG에서 열립니다. 뉴질랜드(올 블랙스)나 남아프리카(스프링복스)와의 국제 경기는 정말 환상적인 분위기를 자랑하며, 세계 어떤 경기장과도 견줄 만합니다. 티켓은 약 $40 AUD부터." },
    ],
  },
  {
    id: "cricket",
    iconKey: "Star",
    accent: "sage",
    title: "Cricket",
    koTitle: "크리켓",
    desc: "Australia's national summer sport — Test matches, BBL, and the Ashes",
    koDesc: "호주의 국민 서머 스포츠 — 테스트 매치, BBL, 애즈 시리즈",
    img: "/images/pexels-13509965.jpg",
    items: [
      { label: "International Cricket (Tests & ODIs)", en: "Cricket is Australia's national sport played mainly in summer (November to March). The Australian men's team (the Baggy Greens) is one of the best in the world. Big rivalries: Australia vs England (The Ashes — held every 2 years, alternating between the two countries), Australia vs India, Australia vs South Africa. Test matches at the SCG or Manuka Oval in Canberra can run for 5 days. Tickets from ~$40 AUD.", ko: "크리켓은 주로 하계(11월부터 3월)에 열리는 호주의 국민 스포츠입니다. 호주 남자 대표팀(Baggy Greens)은 세계 최고 수준입니다. 큰 라이벌: 호주 vs 영국(더 애즈 — 2년마다 번갈아 개최), 호주 vs 인도, 호주 vs 남아프리카. SCG나 캔버라의 Manuka Oval에서 열리는 테스트 매치는 5일까지 진행됩니다. 티켓은 약 $40 AUD부터." },
      { label: "BBL — Big Bash League", en: "The BBL is the domestic T20 (short-format) league running December to January — perfect for summer evenings. 8 city-based teams play 20-over matches in 3 hours. Sydney Sixers and Sydney Thunder are the local teams. The atmosphere is very family-friendly and entertainment-focused, with fireworks, music, and fun promotions. Tickets from ~$25 AUD at Ticketek. The playoffs and final (usually mid-February) sell out fast.", ko: "BBL은 12월부터 1월까지 진행되는 국내 T20(단판 형식) 리그로, 여름 저녁에 딱 좋습니다. 8개 도시 기반 팀이 20오버 매치를 3시간 만에 펼칩니다. Sydney Sixers와 Sydney Thunder가 시드니 팀입니다. 분위기는 가족 단위로 즐기기에 좋으며, 불꽃놀이, 음악, 재미있는 프로모션이 펼쳐집니다. 티켓은 Ticketek에서 약 $25 AUD부터. 플레이오프와 결승(보통 2월 중순)은 매진됩니다." },
      { label: "Watching Cricket in Sydney", en: "The two main cricket grounds in Sydney: SCG (Sydney Cricket Ground, Moore Park — capacity 48,000) and Manuka Oval (Canberra, 1 hour away — used for Tests when the SCG is booked). For BBL, all matches are in Sydney suburban stadiums. Pack sunscreen, a hat, and food — stadium food is expensive. You can bring your own food and drinks (no glass bottles). Opal card covers trains to the SCG on match days.", ko: "시드니의 두 주요 크리켓 구장: SCG(시드니 크리켓 그라운드, Moore Park — 수용인원 48,000명)와 Manuka Oval(캔버라, 1시간 거리 — SCG가 매진일 때 사용). BBL은 시드니외곽의 경기장에서 열립니다. 선크림, 모자, 음식 준비하세요 — 경기장 음식은 비쌉니다. 직접 음식과 음료(유리병 불가)를 가져올 수 있습니다. 경기일에는 오팔 카드로 SCG까지 기차가 연결됩니다." },
    ],
  },
  {
    id: "soccer",
    iconKey: "Flag",
    accent: "coast",
    title: "Soccer (Football)",
    koTitle: "축구",
    desc: "A-League, Matildas, and why soccer is booming in Australia",
    koDesc: "A-League, 마틸다스, 호주에서 급부상하는 축구",
    img: "/images/pexels-1657324.jpg",
    items: [
      { label: "A-League (Men's)", en: "The A-League runs October to May with 12 teams. Sydney FC, Western Sydney Wanderers, Newcastle Jets, and Macarthur FC are the NSW clubs. The Sydney Derby (Sydney FC vs Western Sydney Wanderers) is one of the most intense rivalries in Australian sport — absolutely electric atmosphere. Melbourne Victory vs Sydney FC is another huge fixture. Tickets from ~$30 AUD at Ticketek.", ko: "A-League는 10월부터 5월까지 12개 팀이 참가합니다. 시드니 FC, 웨스턴 시드니 원더러스, 뉴캐슬 제츠, 마카서 FC가 NSW 클럽입니다. 시드니 더비(시드니 FC vs 웨스턴 시드니 원더러스)는 호주 스포츠에서 가장 격렬한 라이벌 중 하나입니다. Melbourne Victory vs Sydney FC도 흥미로운 경기입니다. 티켓은 Ticketek에서 약 $30 AUD부터." },
      { label: "Matildas (Women's National Team)", en: "Australia's women's national football team (the Matildas) has become one of the most beloved teams in the country, especially after their 2023 FIFA Women's World Cup performance (held in Australia/New Zealand). Sam Kerr is the star player. They play home matches at various stadiums including ANZ Stadium, Marvel Stadium (Melbourne), and Suncorp Stadium (Brisbane). When they play in Sydney, tickets sell out fast — get them early.", ko: "호주 여자 축구 대표팀(Matildas)은 2023년 FIFA 여자 월드컵(호주/뉴질랜드 공동 개최) 이후 가장 사랑받는 팀 중 하나가 되었습니다. 샘 케르가 스타 플레이어입니다. ANZ 스타디움, Marvel Stadium(멜버른), Suncorp Stadium(브리즈번) 등 다양한 경기장에서 홈 경기를 치릅니다. 시드니 경기는 표가 빨리 매진되므로 일찍 구매하세요." },
      { label: "Why Soccer is Growing", en: "Soccer is the most popular participatory sport in Australia — more kids play soccer than any other sport. It's also huge among international students and migrants from Europe, South America, Africa, and Asia. Community clubs are everywhere and are a great way to make friends and stay fit. Coaching is usually done by parent volunteers. You can find a club near you at playfootball.com.au.", ko: "축구는 호주에서 가장 인기 있는 참가 스포츠입니다 — 다른 스포츠보다 많은 아이들이 축구를 합니다. 유학생과 유럽, 남미, 아프리카, 아시아 이민자 사이에서도 인기가 높습니다. 지역 클럽이많이 있으며 친구 사귀기와 피트니스에 좋습니다. 코칭은 보통 부모 자원봉사자가 합니다. playfootball.com.au에서 가까운 클럽을 찾을 수 있습니다." },
    ],
  },
  {
    id: "other-sports",
    iconKey: "Users",
    accent: "amber",
    title: "Other Popular Sports",
    koTitle: "기타 인기 스포츠",
    desc: "Swimming, tennis, golf, and Australia's fitness culture",
    koDesc: "수영, 테니스, 골프, 호주의 피트니스 문화",
    img: "/images/pexels-9030300.jpg",
    items: [
      { label: "Swimming", en: "Australians are obsessed with swimming — we produce world-class swimmers. Olympic-standard pools are available across Sydney (Sydney Olympic Park Aquatic Centre, Cook+Philip Park, Laurentian). Summer means ocean swims and beach sprints — Bondi Icebergs swim club runs year-round in the frozen ocean pool at Bondi. You don't have to be fast; it's about being there. Junior swimming lessons start from ~$15 AUD/week at local council pools.", ko: "호주인들은 수영에 빠져 있습니다 — 세계적 수준 수영 선수를 배출합니다. 올림픽 표준 수영장이 시드니 전역에 있습니다(시드니 올림피아크 파크 액워틱 센터, Cook+Philip Park, Laurentian). 여름에는 바다 수영과 비치 스프린트가 있습니다 — Bondi Icebergs 클럽은 Bondi의 frozen ocean pool에서 년내내 운영됩니다. 잘 하기보다는 그냥 참여하는 것입니다. 청소년 수영 레슨은 지역 의회 수영장에서 약 $15 AUD/주부터 시작합니다." },
      { label: "Tennis", en: "The Australian Open in Melbourne (January) is one of the four Grand Slam tournaments and draws huge crowds. It's also the most accessible Grand Slam — grounds passes start around $50 AUD, and you can watch multiple matches simultaneously on outer courts. Sydney hosts the Sydney Tennis International (ATP/WTA) in January at the Sydney Olympic Park Tennis Centre. Public tennis courts are available in most parks — book via Inner West Council or your local council website for ~$15-$20 AUD/hour.", ko: "멜버른에서 열리는 호주 오픈(1월)은 4대 그랜드 슬램 대회 중 하나이며 많은 관중을 끌어들입니다. 가장 접근하기 쉬운 그랜드 슬램이기도 합니다 — 그라운드 패스는 약 $50 AUD부터, 외부 코트에서 여러 경기를 동시에 볼 수 있습니다. 시드니는 시드니 올림픽 파크 테니스 센터에서 1월에 시드니 테니스 인터내셔널(ATP/WTA)을 개최합니다. 공용 테니스 코트는 대부분의 공원에서 이용 가능하며, Inner West 시 의회 또는 지역 의회 웹사이트에서 시간당 약 $15–$20 AUD에 예약할 수 있습니다." },
      { label: "Fitness Culture & Gyms", en: "Australians are genuinely fitness-obsessed. Anytime Fitness (24/7, ~$15 AUD/week), F45 (functional training, ~$60 AUD/week), and Genesis (upmarket) are the main chains. Most suburbs have a local gym. Gym memberships are cheaper than in Korea — most start around $10-$15 AUD/week with no lock-in contracts. Many people use their commute time to exercise. Running is huge — the City2Sydney run (10km, August) and Sydney Marathon (September) are popular events.", ko: "호주인들은 진짜 피트니스에 미쳐 있습니다. Anytime Fitness(24/7, 약 $15 AUD/주), F45(기능성 트레이닝, 약 $60 AUD/주), Genesis(고급) 등 주요 체인점이 있습니다. 대부분의 교외에는 로컬 헬스장도 있습니다. 헬스장 멤버십은 한국보다 저렴합니다 — 대부분 회비는 주당 $10-$15 AUD 정도이며, 사용하지 않을 때 지불하는 계약은 없습니다. 시간에 운동하는 사람이 많습니다. 러닝이 활발합니다 — City2Sydney 러닝(10km, 8월)과 시드니 마라톤(9월)이 인기 있습니다." },
    ],
  },
  {
    id: "sports-betting",
    iconKey: "Trophy",
    accent: "stone",
    title: "Sports Betting Culture",
    koTitle: "호주의 스포츠 베팅 문화",
    desc: "Sports betting is everywhere in Australia — what international students need to know",
    koDesc: "호주에 자리 잡은 스포츠 베팅 — 국제 학생이 알아야 할 것들",
    img: "/images/pexels-35047883.jpg",
    items: [
      { label: "Why It's So Prevalent", en: "Sports betting is advertised constantly during TV broadcasts — every ad break during a footy game seems to have a betting ad. Australia has some of the most liberal gambling laws in the world. The TAB (Totalisator Agency Board) was government-owned but most betting is now done through corporate bookmakers (Sportsbet, Bet365, Ladbrokes, PointsBet). This is a significant social issue in Australia — problem gambling affects ~1% of adults but the harm extends to families and communities.", ko: "스포츠 베팅은 TV 방송 중에 끊임없이 광고됩니다 — 풋볼 경기 중 광고 휴식마다 베팅 광고가 나오는 것 같습니다. 호주는 세계에서 가장 자유로운 도박법 중 하나를 가지고 있습니다. TAB(국영 도박 위원회)이었지만 현재 베팅의 대부분은 민간 북메이커(Sportsbet, Bet365, Ladbrokes, PointsBet)를 통해 이루어집니다.이것은 호주에서 중요한 사회적 문제입니다 — 문제 도박은 성인 약 1%에 영향을 미치지만 가족과 공동체까지 해를 끼칩니다." },
      { label: "International Students — AVOID", en: "Sports betting is illegal or heavily restricted in many countries including South Korea. Even if legal in Australia, participating in sports betting as an international student can: violate your student visa conditions (check your specific visa subclass), lead to significant financial harm, result in addiction that affects your studies and wellbeing. If gambling is legal in your home country and you were already gambling before arriving, you are still strongly encouraged to avoid it while on a student visa. Australia has one of the highest gambling participation rates in the world — it is not normal and it causes real harm.", ko: "스포츠 베팅은 한국을 포함한 많은 국가에서 불법이거나 엄격히 제한되어 있습니다. 호주에서 합법이더라도 국제 학생이 스포츠 베팅에 참여하면: 학생 비자 조건을 위반할 수 있습니다(비자 종류를 확인하세요), 심각한 재정적 피해를 입을 수 있습니다, 학업과 안녕에 영향을 미치는 중독으로 이어질 수 있습니다. 모국에서 도박이 합법이고 도착하기 전에 이미 도박을 했다면, 학생 비자 기간중에는특히 피하는피할 것을 강력히 권장. 호주는 세계에서 가장 높은 도박 참여율을 가지고 있습니다 — 이것은 정상적이지 않으며 실제 피해를 끼칩니다." },
      { label: "Getting Help", en: "If you or someone you know is struggling with gambling, free and confidential help is available: Gambling Help Online (gamblinghelponline.org.au, 1800 858 858). These services are available in multiple languages including Korean. You can also speak to a counsellor at your university. Many universities have free confidential counselling services. Speaking up early makes a huge difference.", ko: "도박으로 고통받고 있거나 알고 있는 사람이 있다면, 무료이자 비밀 보장인 도움말을 받을 수 있습니다: Gambling Help Online(gamblinghelponline.org.au, 1800 858 858). 이러한 서비스는 한국어를 포함한 여러 언어로 제공됩니다. 대학교 상담사에게도 말할 수 있습니다. 많은 대학교에는 무료 비밀 상담 서비스가 있습니다. 일찍 말하는 것이 큰 차이를 만듭니다." },
    ],
  },
];

export default function SportPage() {
  return (
    <div className="bg-stone-50 dark:bg-darkbg min-h-screen">
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En>Sport</En><Ko>스포츠</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En>Sport in Australia</En><Ko>호주 스포츠</Ko>
          </h1>
          <p className="text-stone-300 max-w-lg leading-relaxed">
            <En>Everything you need to know about following and playing sport — NRL, AFL, cricket, and more.</En>
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
            <En>Find a club</En><Ko>동호회 찾기</Ko>
          </p>
          <h2 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
            <En>The best way to feel at home.</En>
            <Ko>가장 빠르게 정착하는 방법.</Ko>
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-2xl">
            <En>Joining a local sports club is the fastest way to meet people, learn the culture, and feel at home. Most clubs welcome beginners and international members. Find a junior soccer club, a cricket team, or a swim squad near you.</En>
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

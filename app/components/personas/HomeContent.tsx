import Link from "next/link";
import { En, Ja, Ko, Zh, pickLocale} from "../LangBlocks";

// /journey/home — Stage 03 of The Journey.
// Long-term Australian guide. Pivoted from practical admin (super,
// tenant rights, credit history) to lifestyle & experience: travel
// the country, push past survival English, build community, plan a
// second visa if you want to stay, and make Australia memorable
// before the years blur together.

export default function HomeContent() {
  return (
    <>
      {/* Intro */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-3">
          <En translated>Long-term</En>
          <Ja>長期滞在</Ja>
          <Zh>长期停留</Zh>
          <Ko>장기 체류</Ko>
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4 leading-tight">
          <En translated>You&apos;re past the hard part. Make the most of this.</En>
          <Ja>一番大変な時期は過ぎました。ここからを存分に楽しみましょう。</Ja>
          <Zh>最难的阶段已经过去了。好好把握接下来的时光吧。</Zh>
          <Ko>제일 어려운 시기는 지났어요. 이제 진짜 즐겨볼 시간입니다.</Ko>
        </h3>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En translated>
            You&apos;ve got a flat, a job, an Opal card that actually works. The question shifts — not how to survive, but how to actually live here. Travel the country, push your English, find your people. The years go faster than you think.
          </En>
          <Ja>住まいも仕事も、ちゃんと使えるオパールカードも手に入れました。問いは変わります — どう生き残るかではなく、ここでどう本当に暮らすか。国内を旅して、英語を伸ばして、仲間を見つけましょう。数年は思うよりずっと速く過ぎます。</Ja>
          <Zh>你已经有住处、工作，还有一张真正能用的Opal卡。问题变了——不再是如何生存，而是如何在这里真正地生活。去全国各地旅行，提升英语，找到属于自己的人。时光流逝得比你想象中更快。</Zh>
          <Ko>
            이제 집도 구하고, 직장도 갖고, 제대로 작동하는 오팔 카드도 있습니다. 질문이 바뀌어요 — 어떻게 살아남을지가 아니라, 어떻게 여기서 진짜 삶을 즐길 것인가. 호주를 여행하고, 영어를 늘리고, 사람들을 사귀세요. 생각보다 시간이 빨리 갑니다.
          </Ko>
        </p>
      </section>

      {/* Start here — four things worth doing before the long list. */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-5">
          <En translated>Start here</En>
          <Ja>ここから始める</Ja>
          <Zh>从这里开始</Zh>
          <Ko>먼저 이것부터</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
          {[
            {
              icon: "✈️",
              en: "Travel more of Australia", ja: "オーストラリアをもっと旅する", zh: "多游历澳大利亚",
              ko: "호주 더 여행하기",
              blurbEn:
                "Sydney's a base, not a destination. Weekend trips, regional NSW, the Red Centre, Tassie, the Reef. Your WHV or student visa is the only one that lets you do this cheaply — use it.",
              blurbKo:
                "시드니는 거점이지 목적지가 아닙니다. 주말 여행, NSW 지방, 레드 센터, 태즈메이니아, 그레이트 베리어 리프. 워홀이나 학생 비자만이 이렇게 싸게 할 수 있는 시기를 줍니다 — 활용하세요.",
              href: "/destinations",
              hrefLabelEn: "See destinations →",
              hrefLabelKo: "여행지 보러 가기 →",
            },
            {
              icon: "🎓",
              en: "Lock in your next visa", ja: "次のビザを確保する", zh: "敲定你的下一个签证",
              ko: "다음 비자 잡기",
              blurbEn:
                "If your student visa is going well, look at the 485. If you loved the WHV year, second WHV or regional sponsorship. Partner, PR, citizenship — these all take years. Start the conversation now.",
              blurbKo:
                "학생 비자가 잘 풀리고 있다면 485 비자를 살펴보세요. 워홀 1년이 좋았다면 두 번째 워홀이나 지방 sponsorship. 파트너 비자, 영주권, 시민권 — 모두 수년이 걸립니다. 지금부터 대화를 시작하세요.",
              href: "/visa",
              hrefLabelEn: "See visa options →",
              hrefLabelKo: "비자 옵션 보기 →",
            },
            {
              icon: "🤝",
              en: "Make Aussie friends", ja: "オーストラリア人の友達を作る", zh: "结交澳大利亚朋友",
              ko: "호주인 친구 만들기",
              blurbEn:
                "Friendships here take longer than back home. Sports clubs, climbing gyms, language exchanges, volunteer groups — pick one and commit for six months. That's how it works.",
              blurbKo:
                "여기서 우정은 고국보다 오래 걸립니다. 동호회, 클라이밍 짐, 언어교환, 자원봉사 — 하나를 골라 6개월은 꾸준히. 그래야 됩니다.",
              href: "/resources",
              hrefLabelEn: "Find your community →",
              hrefLabelKo: "커뮤니티 찾기 →",
            },
            {
              icon: "🗣️",
              en: "Learn Aussie English properly", ja: "オーストラリア英語をしっかり学ぶ", zh: "认真学习澳式英语",
              ko: "호주식 영어 제대로 배우기",
              blurbEn:
                "Beyond ordering coffee — jokes, subtext, workplace banter. A daily podcast, a book, and one real conversation a day. Six months and you'll feel the difference in every interaction.",
              blurbKo:
                "커피 주문에서 한 단계 더 — 농담, 함의, 직장 농담. 매일 팟캐스트, 책, 하루 한 번 진짜 대화. 6개월이면 모든 대화가 달라집니다.",
              href: "/aussie-english",
              hrefLabelEn: "Open the slang library →",
              hrefLabelKo: "호주 슬랭 라이브러리 열기 →",
            },
          ].map((w, i) => (
            <div
              key={w.en}
              className={`reveal reveal-delay-${i + 1} p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-950/30 dark:to-teal-900/20 border border-teal-100/50 dark:border-teal-900/30 flex flex-col`}
            >
              <div className="text-2xl mb-2">{w.icon}</div>
              <h4 className="font-serif text-base md:text-lg text-stone-900 dark:text-stone-100 mb-1.5 leading-snug">
                <En translated>{w.en}</En>
                <Ja>{pickLocale("ja", w)}</Ja>
                <Zh>{pickLocale("zh", w)}</Zh>
                <Ko>{w.ko}</Ko>
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed">
                <En>{w.blurbEn}</En>
                <Ko>{w.blurbKo}</Ko>
              </p>
              {w.href && (
                <Link
                  href={w.href}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
                >
                  <En>{w.hrefLabelEn}</En>
                  <Ko>{w.hrefLabelKo}</Ko>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* The stuff worth doing while you're here — pivots away from admin
          (super, tenant rights, credit) toward travel, English, community,
          and a second visa if they want to stay long-term. */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-5">
          <En translated>Worth doing while you&apos;re here</En>
          <Ja>ここにいる間にやっておきたいこと</Ja>
          <Zh>在这里期间值得做的事</Zh>
          <Ko>여기 있는 동안 해볼 만한 것</Ko>
        </p>
        <ul className="space-y-4 max-w-3xl">
          {[
            {
              icon: "✈️",
              en: "Travel the country, not just Sydney", ja: "シドニーだけでなく、国全体を旅する", zh: "游历全国，而不只是悉尼",
              ko: "시드니만 보지 말고 호주를 여행하세요",
              descEn:
                "A WHV year is the only time you'll fly domestically for $50 AUD. The Red Centre, Tassie, the Reef, the Whitsundays, Kakadu — most people leave Australia having seen three suburbs of Sydney. Don't be most people.",
              descKo:
                "워홀 1년은 국내선 $50 AUD에 fly할 수 있는 유일한 시기입니다. 레드 센터, 태즈메이니아, 그레이트 베리어 리프, 휘트선데이, 카카두 — 대부분은 시드니의 세 동네만 보고 떠납니다. 그런 대다수가 되지 마세요.",
            },
            {
              icon: "🗣️",
              en: "Push your English past transaction-level", ja: "やり取りレベルを超えて英語を伸ばす", zh: "让你的英语超越交易式水平",
              ko: "거래 수준 넘어서 영어 늘리기",
              descEn:
                "Survival English gets you through week one. The next level — jokes, subtext, workplace banter — is what makes you feel like you belong. Podcasts, books, one Australian friend you text daily. Six months, you'll notice.",
              descKo:
                "생존형 영어는 첫 주를 넘기게 해줍니다. 다음 단계 — 농담, 함의, 직장 농담 — 가 소속감을 만듭니다. 팟캐스트, 책, 매일 카톡할 호주인 친구 한 명. 6개월이면 차이가 느껴집니다.",
            },
            {
              icon: "🤝",
              en: "Build one community anchor", ja: "コミュニティの拠点を一つ作る", zh: "建立一个社区据点",
              ko: "하나의 커뮤니티 거점 만들기",
              descEn:
                "Korean churches, sports clubs, climbing gyms, language exchanges, volunteer groups — pick one. Showing up weekly for six months is what turns acquaintances into friends. Friendships here take time.",
              descKo:
                "한인 교회, 동호회, 클라이밍 짐, 언어교환, 자원봉사 — 하나를 고르세요. 6개월 매주 얼굴을 비추는 게 지인을 친구로 바꿉니다. 여기서 우정은 시간이 필요합니다.",
            },
            {
              icon: "🎓",
              en: "Plan your next visa early", ja: "次のビザは早めに計画する", zh: "提早规划下一个签证",
              ko: "다음 비자 미리 계획",
              descEn:
                "If your student visa is going well, look at the 485. If you loved the WHV year, the second WHV or a regional sponsorship. Partner visa, PR, citizenship — these all take years. Start understanding the process now, not in year four.",
              descKo:
                "학생 비자가 잘 풀리고 있다면 485 비자를 살펴보세요. 워홀 1년이 좋았다면 두 번째 워홀이나 지방 sponsorship. 파트너 비자, 영주권, 시민권 — 모두 수년이 걸립니다. 4년 차에 알아보기 시작하지 말고 지금부터 프로세스를 파악하세요.",
            },
            {
              icon: "🎉",
              en: "Get into Aussie life, not just Korean-Sydney", ja: "韓国人社会のシドニーだけでなく、オーストラリアの生活に入り込む", zh: "融入澳大利亚生活，而不只是韩裔悉尼圈",
              ko: "한인 시드니가 아닌 호주 생활에 들어가기",
              descEn:
                "AFL, farmers' markets, the footy at the pub on a Saturday, Australia Day, Anzac Day, Christmas in summer. The small things you do in year two and three are what make you feel like you live here, not just stay here.",
              descKo:
                "AFL, 농산물 시장, 토요일 펍에서 풋볼, 호주의 날, ANZAC 데이, 여름 크리스마스. 2-3년 차에 하는 작은 것들이 '머무르는 것'이 아니라 '사는 것'을 느끼게 합니다.",
            },
            {
              icon: "📸",
              en: "Make it memorable on purpose", ja: "意識して思い出深いものにする", zh: "有意识地让它变得难忘",
              ko: "일부러 기억에 남게 만들기",
              descEn:
                "Five years from now you won't remember the year you stayed in Surry Hills and saved money. You'll remember the road trip to Uluru, the year you played rugby, the friends from that language exchange. Spend the time on the memories.",
              descKo:
                "5년 뒤에 머리에는 Surry Hills에서 돈 아끼며 보낸 1년이 안 남습니다. 울루루로 간 로드트립, 럭비 한 시즌, 언어교환에서 만난 친구들은 남습니다. 기억에 쓸 시간을 쓰세요.",
            },
          ].map((item, i) => (
            <li
              key={item.en}
              className={`reveal reveal-delay-${(i % 5) + 1} flex gap-4 group`}
            >
              <span className="shrink-0 w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <div>
                <h4 className="font-serif text-lg md:text-xl text-stone-900 dark:text-stone-100 mb-1">
                  <En translated>{item.en}</En>
                  <Ja>{pickLocale("ja", item)}</Ja>
                  <Zh>{pickLocale("zh", item)}</Zh>
                  <Ko>{item.ko}</Ko>
                </h4>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  <En>{item.descEn}</En>
                  <Ko>{item.descKo}</Ko>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* The slow part — softened. Previous version prescribed "first two
          years are hardest", which assumes a single timeline. Replaced with
          language that acknowledges belonging happens on its own schedule. */}
      <section className="mb-10 bg-stone-900 dark:bg-dark-surface rounded-3xl p-7 md:p-9 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="relative">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-400 mb-3">
            <En translated>Honest take</En>
            <Ja>正直なところ</Ja>
            <Zh>实话实说</Zh>
            <Ko>솔직한 이야기</Ko>
          </p>
          <h4 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
            <En translated>There&apos;s no single timeline for belonging.</En>
            <Ja>帰属感に決まった時間軸はありません。</Ja>
            <Zh>归属感没有统一的时间表。</Zh>
            <Ko>소속감의 시간표는 사람마다 다릅니다.</Ko>
          </h4>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
            <En translated>
              Some people feel at home in weeks. Others take years. Both are normal. The first year is when most people consider leaving — the novelty wears off, homesickness spikes, and the friends you made in the first month turn out to be passing through. The ones who stay are usually the ones who stop measuring their life here against where they came from, and start measuring it on its own terms.
            </En>
            <Ja>数週間でここを我が家のように感じる人もいれば、数年かかる人もいます。どちらも普通のことです。最初の1年は、多くの人が離れることを考える時期です — 新鮮さは薄れ、ホームシックは高まり、最初の1か月にできた友人は通り過ぎるだけの人だったと気づきます。残る人はたいてい、ここでの暮らしを出身地と比べるのをやめ、それ自体の基準で測り始めた人たちです。</Ja>
            <Zh>有些人几周就有了家的感觉，有些人则需要几年。两者都很正常。第一年往往是大多数人考虑离开的时候——新鲜感消退，思乡情绪达到顶峰，而你第一个月交到的朋友，结果只是匆匆过客。留下来的人，通常是那些不再拿这里的生活与出身地比较、而是开始以它自身的标准来衡量的人。</Zh>
            <Ko>
              어떤 사람은 몇 주 만에 집처럼 느낍니다. 어떤 사람은 몇 년이 걸립니다. 둘 다 정상입니다. 첫 1년은 대부분 떠날까 고민하는 시기 — 새로움은 식고, 향수병은 극에 달하고, 첫 달에 사귄 친구들이 다 지나가는 사람이었다는 걸 알게 됩니다. 남는 사람들은 보통 출신지와 비교하는 것을 멈추고, 여기서의 삶을 자체 기준으로 재기 시작하는 사람들입니다.
            </Ko>
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            <En translated>There is no shortcut. There is also no deadline.</En>
            <Ja>近道はありません。締め切りもありません。</Ja>
            <Zh>没有捷径，也没有截止日期。</Zh>
            <Ko>지름길은 없습니다. 마감일도 없습니다.</Ko>
          </p>
        </div>
      </section>

      {/* After this guide — what you'll walk away with. The "long-game"
          outcomes now match the page's pivot: travel, English, community,
          a second visa if they want to stay. */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-5">
          <En translated>After this guide</En>
          <Ja>このガイドの後は</Ja>
          <Zh>读完这份指南后</Zh>
          <Ko>이 가이드를 마치면</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
          {[
            {
              icon: "✈️",
              en: "A travel list you'll actually have ticked off", ja: "実際にすべて達成できる旅のリスト", zh: "一份你真能全部打勾的旅行清单",
              ko: "실제로 체크한 여행 리스트",
              blurbEn:
                "Not 'Australia' as a stamp in your passport — actual places you went, routes you drove, the night you saw the Milky Way from the middle of nowhere.",
              blurbKo:
                "여권 도장이 아니라 — 실제로 간 곳, 직접 운전한 길, 한복판에서 본 은하수.",
            },
            {
              icon: "🗣️",
              en: "English that doesn't need translating in your head", ja: "頭の中で翻訳しなくていい英語", zh: "无需在脑中翻译的英语",
              ko: "머릿속 번역이 필요 없는 영어",
              blurbEn:
                "Conversations where you react, not translate. Jokes you get before they're explained. Workplace banter that doesn't feel like a foreign language.",
              blurbKo:
                "번역이 아니라 반응하는 대화. 설명 전에 알아듣는 농담. 외국어 같지 않은 직장 농담.",
            },
            {
              icon: "🤝",
              en: "A community anchor that shows up", ja: "実際に通えるコミュニティの拠点", zh: "一个你真正会去的社区据点",
              ko: "참여할 이유가 있는 커뮤니티",
              blurbEn:
                "One group, one routine, one reason to leave the house on a Tuesday. Friendships here take longer than you think — but they're worth it.",
              blurbKo:
                "하나의 모임, 하나의 루틴, 화요일에 집을 나설 이유. 여기서 우정은 생각보다 오래 걸리지만 — 그만큼 가치 있습니다.",
            },
            {
              icon: "🎓",
              en: "A visa plan, if you want to stay", ja: "滞在したいなら、ビザの計画", zh: "如果你想留下，一份签证计划",
              ko: "머물고 싶다면 비자 계획",
              blurbEn:
                "485, second WHV, partner visa, PR, citizenship. A realistic timeline, not a panic at year four.",
              blurbKo:
                "485, 두 번째 워홀, 파트너 비자, 영주권, 시민권. 4년 차의 패닉이 아닌 현실적인 타임라인.",
            },
          ].map((w, i) => (
            <div
              key={w.en}
              className={`reveal reveal-delay-${(i % 5) + 1} p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-950/30 dark:to-darkbg border border-teal-100/50 dark:border-teal-900/30`}
            >
              <div className="text-2xl mb-2">{w.icon}</div>
              <h4 className="font-serif text-base md:text-lg text-stone-900 dark:text-stone-100 mb-1.5 leading-snug">
                <En translated>{w.en}</En>
                <Ja>{pickLocale("ja", w)}</Ja>
                <Zh>{pickLocale("zh", w)}</Zh>
                <Ko>{w.ko}</Ko>
              </h4>
              <p className="text-stone-600 dark:text-stone-400 text-xs leading-relaxed">
                <En>{w.blurbEn}</En>
                <Ko>{w.blurbKo}</Ko>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Keep reading — finance card removed per Michael; replaced with
          Aussie English (the new pivot toward language immersion). */}
      <section>
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-teal-600 mb-5">
          <En translated>Keep reading</En>
          <Ja>続きを読む</Ja>
          <Zh>继续阅读</Zh>
          <Ko>더 알아보기</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          <Link
            href="/beyond-sydney"
            className="reveal reveal-delay-1 group p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-950/30 dark:to-teal-900/20 border border-teal-100/50 dark:border-teal-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">
              🚗 <En translated>Weekend trips</En><Ja>週末の旅</Ja><Zh>周末短途游</Zh>
              <Ko>주말 여행</Ko>
            </div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En translated>Blue Mountains, South Coast, Hunter Valley</En>
              <Ja>ブルー・マウンテンズ、サウス・コースト、ハンター・バレー</Ja>
              <Zh>蓝山、南海岸、猎人谷</Zh>
              <Ko>블루마운틴, 사우스 코스트, 헌터 밸리</Ko>
            </div>
          </Link>
          <Link
            href="/aussie-english"
            className="reveal reveal-delay-2 group p-5 rounded-2xl bg-gradient-to-br from-sunset/10 to-sunset/5 dark:from-sunset/20 dark:to-sunset/10 border border-sunset/20 dark:border-sunset/30 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">
              🗣️ <En translated>Aussie English</En><Ja>オーストラリア英語</Ja><Zh>澳洲英语</Zh>
              <Ko>호주 영어</Ko>
            </div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En translated>Slang, idioms, the words you missed</En>
              <Ja>スラング、慣用句、聞き逃した言葉</Ja>
              <Zh>俚语、习语，还有你没听懂的那些词</Zh>
              <Ko>슬랭, 관용구, 놓친 표현들</Ko>
            </div>
          </Link>
          <Link
            href="/resources"
            className="reveal reveal-delay-3 group p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100/50 dark:from-sky-950/30 dark:to-sky-900/20 border border-sky-100/50 dark:border-sky-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">
              🤝 <En translated>Community</En><Ja>コミュニティ</Ja><Zh>社区</Zh>
              <Ko>커뮤니티</Ko>
            </div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En translated>Churches, sports clubs, meetups</En>
              <Ja>教会、スポーツクラブ、ミートアップ</Ja>
              <Zh>教会、体育俱乐部、聚会</Zh>
              <Ko>한인 교회, 동호회, 모임</Ko>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

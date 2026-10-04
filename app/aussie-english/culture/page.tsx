import { En, Ja, Ko, Zh } from "@/components/LangBlocks";
import { seoFor, withSeo } from "@/lib/seo";

export const metadata = withSeo(
  {
    ...seoFor("/aussie-english/culture"),
    title: "The Culture Behind Aussie Slang — History, Origins & Meaning | AussieGuides",
    description: "Understand the cultural context behind Australian slang terms. Learn the history, origins, and social meanings of iconic Aussie expressions.",
  },
  "/aussie-english/culture"
);

export default function AussieSlangCulturePage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-darkbg">
      {/* Header */}
      <header className="bg-stone-900 dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
            <En translated>Aussie English</En>
            <Ja>オーストラリア英語</Ja>
            <Zh>澳洲英语</Zh><Ko>호주 영어</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En translated>Cultural Context</En>
            <Ja>文化的背景</Ja>
            <Zh>文化背景</Zh>
            <Ko>문화적 맥락</Ko>
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            <En translated>Understanding the stories and history behind Australia's most iconic slang terms.</En>
            <Ja>オーストラリアを代表するスラング用語の背後にある物語と歴史を理解しましょう。</Ja>
            <Zh>了解澳大利亚最具代表性的俚语背后的故事与历史。</Zh>
            <Ko>호주의 상징적인 슬랭 용어들의 이야기와 역사를 이해하세요.</Ko>
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Introduction */}
        <section className="mb-12">
          <div className="mb-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
              <En translated>Introduction</En>
              <Ja>はじめに</Ja>
              <Zh>简介</Zh><Ko>소개</Ko>
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-3">
              <En translated>Why Aussie Slang Exists</En>
              <Ja>オーストラリアのスラングはなぜ存在するのか</Ja>
              <Zh>澳式俚语为何存在</Zh>
              <Ko>왜 호주 슬랭이 존재하는가</Ko>
            </h2>
          </div>
          <div className="prose prose-stone dark:prose-invert max-w-3xl">
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              <En translated>
                Australian slang isn't just random words—it's a reflection of the country's history, 
                geography, and social attitudes. From the convict era to modern multiculturalism, 
                each term tells a story about how Australians see themselves and their world.
              </En>
              <Ja>オーストラリアのスラングは単なるでたらめな言葉ではありません—それはこの国の歴史、地理、社会的な態度を映し出すものです。流刑時代から現代の多文化主義まで、それぞれの言葉はオーストラリア人が自分自身と世界をどう見ているかを物語っています。</Ja>
              <Zh>澳大利亚俚语并非随意的词汇—它反映了这个国家的历史、地理和社会态度。从流放犯时代到现代多元文化主义，每个词都讲述着澳大利亚人如何看待自己和世界的故事。</Zh>
              <Ko>
                호주 슬랭은 단순한 임의의 단어가 아닙니다—나라의 역사, 지리, 사회적 태도를 반영합니다. 
                죄수 수송 시대부터 현대 다문화주의까지, 각 용어는 호주인들이 자신과 세상을 어떻게 
                바라보는지에 대한 이야기를 전합니다.
              </Ko>
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            {/* Section 1: Historical Origins */}
            <section>
              <div className="mb-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
                  <En translated>History</En>
                  <Ja>歴史</Ja>
                  <Zh>历史</Zh><Ko>역사</Ko>
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-3">
                  <En translated>Historical Origins</En>
                  <Ja>歴史的起源</Ja>
                  <Zh>历史起源</Zh>
                  <Ko>역사적 기원</Ko>
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
                  <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-3">
                    <En translated>Convict Era Foundations</En>
                    <Ja>流刑時代の基盤</Ja>
                    <Zh>流放犯时代的基础</Zh>
                    <Ko>죄수 수송 시대의 기초</Ko>
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    <En translated>
                      Many uniquely Australian expressions emerged during the convict era (1788-1868). 
                      Terms like "mate" and "fair go" reflect the egalitarian spirit that developed 
                      among convicts and free settlers alike—everyone was essentially equal in the 
                      harsh Australian frontier.
                    </En>
                    <Ja>多くのオーストラリア特有の表現は流刑時代（1788-1868年）に生まれました。"mate"や"fair go"といった言葉は、流刑囚と自由入植者の双方の間で育まれた平等主義の精神を反映しています—厳しいオーストラリアの辺境では、誰もが本質的に平等でした。</Ja>
                    <Zh>许多澳大利亚独有的表达方式诞生于流放犯时代（1788-1868年）。"mate"和"fair go"这样的词汇反映了流放犯与自由移民之间共同孕育的平等精神—在严酷的澳大利亚边疆，人人在本质上都是平等的。</Zh>
                    <Ko>
                      독특한 호주식 표현의 많은 부분이 죄수 수송 시대(1788-1868)에 등장했습니다. 
                      "mate"와 "fair go" 같은 용어는 죄수와 자유 개척자들 사이에서 발전한 
                      평등주의 정신을 반영합니다—혹독한 호주 개척지에서 모든 사람은 본질적으로 
                      동등했습니다.
                    </Ko>
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
                  <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-3">
                    <En translated>Bush Culture Influence</En>
                    <Ja>ブッシュ文化の影響</Ja>
                    <Zh>丛林文化的影响</Zh>
                    <Ko>부시 문화의 영향</Ko>
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    <En translated>
                      The vast Australian landscape shaped a culture of self-reliance and understated 
                      communication. Australians developed a habit of "she'll be right" optimism and 
                      indirect communication—"no worries" instead of direct assurances.
                    </En>
                    <Ja>広大なオーストラリアの風景は、自立と控えめなコミュニケーションの文化を形作りました。オーストラリア人は"she&apos;ll be right"という楽観主義と、直接的な保証の代わりに"no worries"と言う間接的なコミュニケーションの習慣を身につけました。</Ja>
                    <Zh>广袤的澳大利亚大地塑造了自立与含蓄沟通的文化。澳大利亚人养成了"she&apos;ll be right"式的乐观，以及间接沟通的习惯—用"no worries"代替直接的保证。</Zh>
                    <Ko>
                      광대한 호주 지형은 자력갱생과 절제된 커뮤니케이션 문화를 형성했습니다. 
                      호주인들은 "she'll be right" 낙관주의와 간접적인 커뮤니케이션—직접적인 
                      확신 대신 "no worries"—를 발전시켰습니다.
                    </Ko>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Social Meanings */}
            <section>
              <div className="mb-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
                  <En translated>Social</En>
                  <Ja>社会</Ja>
                  <Zh>社会</Zh><Ko>사회적</Ko>
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-3">
                  <En translated>Social Meanings</En>
                  <Ja>社会的な意味</Ja>
                  <Zh>社会含义</Zh>
                  <Ko>사회적 의미</Ko>
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
                  <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-3">
                    <En translated>Egalitarian Spirit</En>
                    <Ja>平等主義の精神</Ja>
                    <Zh>平等精神</Zh>
                    <Ko>평등주의 정신</Ko>
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    <En translated>
                      Australian slang often reflects the cultural value of "mateship"—treating 
                      everyone as equals regardless of status. Terms like "mate," "legend," and 
                      "champion" blur formal hierarchies and create instant familiarity.
                    </En>
                    <Ja>オーストラリアのスラングは、しばしば"mateship"（仲間意識）という文化的価値—地位に関係なく誰もを平等に扱うこと—を反映しています。"mate"、"legend"、"champion"といった言葉は公式な上下関係を曖昧にし、一瞬で親しみを生み出します。</Ja>
                    <Zh>澳大利亚俚语常常反映"mateship"（伙伴情谊）这一文化价值—无论地位高低都平等对待每个人。"mate"、"legend"、"champion"这样的词汇模糊了正式的等级关系，瞬间拉近彼此距离。</Zh>
                    <Ko>
                      호주 슬랭은 종종 "mateship"(동료애)—지위에 관계없이 모든 사람을 동등하게 
                      대우하는 문화적 가치—를 반영합니다. "mate," "legend," "champion" 같은 
                      용어는 공식적인 위계를 흐리고 즉각적인 친밀감을 창출합니다.
                    </Ko>
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
                  <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-3">
                    <En translated>Understatement Culture</En>
                    <Ja>控えめな表現の文化</Ja>
                    <Zh>低调含蓄的文化</Zh>
                    <Ko>과소평가 문화</Ko>
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    <En translated>
                      Australians famously understate achievements to avoid appearing boastful. 
                      "Not bad" for something excellent, "no worries" for significant effort, 
                      and "yeah nah" to politely disagree—all reflect this cultural tendency.
                    </En>
                    <Ja>オーストラリア人は、自慢に見えないよう成果を控えめに言うことでよく知られています。素晴らしいものに"Not bad"、多大な努力に"no worries"、丁寧に反対するときに"yeah nah"—そのすべてがこの文化的傾向を反映しています。</Ja>
                    <Zh>澳大利亚人以低调表达成就而闻名，以免显得自夸。用"Not bad"形容出色的事物，用"no worries"回应巨大的付出，用"yeah nah"礼貌地表示反对—这些都反映了这种文化倾向。</Zh>
                    <Ko>
                      호주인들은 자랑스러워 보이지 않기 위해 업적을 과소평가하는 것으로 유명합니다. 
                      훌륭한 것을 "Not bad"라고 하고, 큰 노력에 "no worries"라고 하며, 
                      정중하게 반대할 때 "yeah nah"라고 합니다—모두 이러한 문화적 경향을 반영합니다.
                    </Ko>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Modern Evolution */}
            <section>
              <div className="mb-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
                  <En translated>Modern</En>
                  <Ja>現代</Ja>
                  <Zh>现代</Zh><Ko>현대</Ko>
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-3">
                  <En translated>Modern Evolution</En>
                  <Ja>現代の進化</Ja>
                  <Zh>现代演变</Zh>
                  <Ko>현대적 진화</Ko>
                </h2>
              </div>
              
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
                <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-3">
                  <En translated>Multicultural Influences</En>
                  <Ja>多文化的な影響</Ja>
                  <Zh>多元文化的影响</Zh>
                  <Ko>다문화적 영향</Ko>
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                  <En translated>
                    Contemporary Australian slang increasingly incorporates influences from 
                    Indigenous languages, Asian communities, and global pop culture. Terms like 
                    "sick" (excellent) from hip-hop culture show how Australian English continues 
                    to evolve.
                  </En>
                  <Ja>現代のオーストラリアのスラングは、先住民の言語、アジア系コミュニティ、グローバルなポップカルチャーからの影響をますます取り入れています。ヒップホップ文化から来た"sick"（最高）のような言葉は、オーストラリア英語が進化し続けていることを示しています。</Ja>
                  <Zh>当代澳大利亚俚语越来越多地吸纳原住民语言、亚裔社区和全球流行文化的影响。来自嘻哈文化的"sick"（极好）等词汇，展示了澳式英语如何持续演变。</Zh>
                  <Ko>
                    현대 호주 슬랭은 점점 더 원주민 언어, 아시아 커뮤니티, 글로벌 팝문화의 영향을 
                    받아들입니다. 힙합 문화에서 온 "sick"(훌륭한) 같은 용어는 호주 영어가 어떻게 
                    계속 진화하고 있는지 보여줍니다.
                  </Ko>
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-sunset/10 to-sunset/5 border border-sunset/20">
              <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-2">
                <En translated>Key Insight</En>
                <Ja>重要なポイント</Ja>
                <Zh>关键洞察</Zh>
                <Ko>핵심 통찰</Ko>
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                <En translated>
                  Understanding cultural context helps you use Aussie slang appropriately—not 
                  just technically correct, but socially appropriate.
                </En>
                <Ja>文化的背景を理解することで、オーストラリアのスラングを適切に使えるようになります—技術的に正しいだけでなく、社会的にも適切に。</Ja>
                <Zh>理解文化背景有助于你恰当地使用澳式俚语—不仅是技术上正确，在社会场合也得体。</Zh>
                <Ko>
                  문화적 맥락을 이해하면 호주 슬랭을 적절하게 사용할 수 있습니다—기술적으로 
                  올바를 뿐만 아니라 사회적으로도 적절하게요.
                </Ko>
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-500/10 to-sky-500/5 border border-sky-500/20">
              <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-2">
                <En translated>Learning Tip</En>
                <Ja>学習のヒント</Ja>
                <Zh>学习提示</Zh>
                <Ko>학습 팁</Ko>
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                <En translated>
                  Observe when and how locals use slang—context matters more than vocabulary.
                </En>
                <Ja>地元の人がいつ、どのようにスラングを使うかを観察しましょう—語彙よりも文脈が大切です。</Ja>
                <Zh>观察当地人何时、如何使用俚语—语境比词汇更重要。</Zh>
                <Ko>
                  현지인들이 언제 어떻게 슬랭을 사용하는지 관찰하세요—맥락이 어휘보다 중요합니다.
                </Ko>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
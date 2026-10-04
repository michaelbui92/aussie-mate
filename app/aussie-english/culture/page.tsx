import { En, Ko } from "@/components/LangBlocks";
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
            <En>Aussie English</En><Ko>호주 영어</Ko>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[0.95] mb-4">
            <En>Cultural Context</En>
            <Ko>문화적 맥락</Ko>
          </h1>
          <p className="text-stone-300 max-w-2xl leading-relaxed">
            <En>Understanding the stories and history behind Australia's most iconic slang terms.</En>
            <Ko>호주의 상징적인 슬랭 용어들의 이야기와 역사를 이해하세요.</Ko>
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Introduction */}
        <section className="mb-12">
          <div className="mb-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-2">
              <En>Introduction</En><Ko>소개</Ko>
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-3">
              <En>Why Aussie Slang Exists</En>
              <Ko>왜 호주 슬랭이 존재하는가</Ko>
            </h2>
          </div>
          <div className="prose prose-stone dark:prose-invert max-w-3xl">
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              <En>
                Australian slang isn't just random words—it's a reflection of the country's history, 
                geography, and social attitudes. From the convict era to modern multiculturalism, 
                each term tells a story about how Australians see themselves and their world.
              </En>
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
                  <En>History</En><Ko>역사</Ko>
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-3">
                  <En>Historical Origins</En>
                  <Ko>역사적 기원</Ko>
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
                  <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-3">
                    <En>Convict Era Foundations</En>
                    <Ko>죄수 수송 시대의 기초</Ko>
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    <En>
                      Many uniquely Australian expressions emerged during the convict era (1788-1868). 
                      Terms like "mate" and "fair go" reflect the egalitarian spirit that developed 
                      among convicts and free settlers alike—everyone was essentially equal in the 
                      harsh Australian frontier.
                    </En>
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
                    <En>Bush Culture Influence</En>
                    <Ko>부시 문화의 영향</Ko>
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    <En>
                      The vast Australian landscape shaped a culture of self-reliance and understated 
                      communication. Australians developed a habit of "she'll be right" optimism and 
                      indirect communication—"no worries" instead of direct assurances.
                    </En>
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
                  <En>Social</En><Ko>사회적</Ko>
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-3">
                  <En>Social Meanings</En>
                  <Ko>사회적 의미</Ko>
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
                  <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-3">
                    <En>Egalitarian Spirit</En>
                    <Ko>평등주의 정신</Ko>
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    <En>
                      Australian slang often reflects the cultural value of "mateship"—treating 
                      everyone as equals regardless of status. Terms like "mate," "legend," and 
                      "champion" blur formal hierarchies and create instant familiarity.
                    </En>
                    <Ko>
                      호주 슬랭은 종종 "mateship"(동료애)—지위에 관계없이 모든 사람을 동등하게 
                      대우하는 문화적 가치—를 반영합니다. "mate," "legend," "champion" 같은 
                      용어는 공식적인 위계를 흐리고 즉각적인 친밀감을 창출합니다.
                    </Ko>
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
                  <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-3">
                    <En>Understatement Culture</En>
                    <Ko>과소평가 문화</Ko>
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    <En>
                      Australians famously understate achievements to avoid appearing boastful. 
                      "Not bad" for something excellent, "no worries" for significant effort, 
                      and "yeah nah" to politely disagree—all reflect this cultural tendency.
                    </En>
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
                  <En>Modern</En><Ko>현대</Ko>
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mb-3">
                  <En>Modern Evolution</En>
                  <Ko>현대적 진화</Ko>
                </h2>
              </div>
              
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border">
                <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-3">
                  <En>Multicultural Influences</En>
                  <Ko>다문화적 영향</Ko>
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                  <En>
                    Contemporary Australian slang increasingly incorporates influences from 
                    Indigenous languages, Asian communities, and global pop culture. Terms like 
                    "sick" (excellent) from hip-hop culture show how Australian English continues 
                    to evolve.
                  </En>
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
                <En>Key Insight</En>
                <Ko>핵심 통찰</Ko>
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                <En>
                  Understanding cultural context helps you use Aussie slang appropriately—not 
                  just technically correct, but socially appropriate.
                </En>
                <Ko>
                  문화적 맥락을 이해하면 호주 슬랭을 적절하게 사용할 수 있습니다—기술적으로 
                  올바를 뿐만 아니라 사회적으로도 적절하게요.
                </Ko>
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-500/10 to-sky-500/5 border border-sky-500/20">
              <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-2">
                <En>Learning Tip</En>
                <Ko>학습 팁</Ko>
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                <En>
                  Observe when and how locals use slang—context matters more than vocabulary.
                </En>
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
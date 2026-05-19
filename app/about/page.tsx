import { En, Ko } from "@/components/LangBlocks";

export const metadata = {
  title: "About — AussieMate",
  description: "About AussieMate and why it exists",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-eucalypt dark:text-white mb-2">
            <En>About AussieMate</En>
            <Ko>AussieMate 소개</Ko>
          </h1>
          <p className="text-eucalypt/60 dark:text-dark-muted/60">
            <En>What we do and who it's for</En>
            <Ko>우리 서비스와 누구를 위한 것인지</Ko>
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        {/* What it is */}
        <section className="bg-white dark:bg-dark-card border border-sand dark:border-dark-border rounded-2xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">📍</span>
            <div>
              <h2 className="font-bold text-base text-eucalypt dark:text-white mb-1">
                <En>What AussieMate is</En>
                <Ko>AussieMate란</Ko>
              </h2>
              <p className="text-xs text-eucalypt/50 dark:text-dark-muted/50">
                <En>And what it isn't</En>
                <Ko>그리고 무엇이 아닌지</Ko>
              </p>
            </div>
          </div>
          <div className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed space-y-3">
            <En>
              <p><strong>AussieMate is:</strong> A free bilingual guide to Australian daily life — written for people who are new here. Practical, honest, and in plain language.</p>
              <p><strong>AussieMate is NOT:</strong> An official source. Not affiliated with any university, government, or organisation. Always check official websites for legal and up-to-date information.</p>
            </En>
            <Ko>
              <p><strong>AussieMate는:</strong> 호주 일상 생활에 대한 무료 가이드입니다 — 호주에 처음 온 사람들을 위해 실용적으로, 정직하게, 평범한 언어로 썼어요.</p>
              <p><strong>AussieMate가 아닌 것:</strong> 공식 출처가 아닙니다. 어떤 대학, 정부, 조직과도 관련이 없습니다. 법률 및 최신 정보는 항상 공식 웹사이트를 확인하세요.</p>
            </Ko>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-white dark:bg-dark-card border border-sand dark:border-dark-border rounded-2xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">🙋</span>
            <div>
              <h2 className="font-bold text-base text-eucalypt dark:text-white mb-1">
                <En>Who it's for</En>
                <Ko>누구를 위한 것인지</Ko>
              </h2>
              <p className="text-xs text-eucalypt/50 dark:text-dark-muted/50">
                <En>The target audience</En>
                <Ko>대상 독자</Ko>
              </p>
            </div>
          </div>
          <div className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed">
            <En>
              <p>Korean international students and working holiday makers first — people arriving in Australia who need practical, real-world information in a language they understand.</p>
              <p>But really, anyone new to Australia who's tired of dry official sites.</p>
            </En>
            <Ko>
              <p>우선 한국의 유학생과 워킹홀리데이 메이커 — 호주에 도착해서 자신의 언어로 된 실용적인 정보가 필요한 사람들.</p>
              <p>하지만 실제로는 공식 웹사이트들에 질려버린 호주에 처음 오신 누구를 대상으로 합니다.</p>
            </Ko>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-sunset/5 border border-sunset/20 rounded-2xl p-5">
          <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60 leading-relaxed">
            <En>Information on AussieMate is provided in good faith and reflects common experiences of living in Australia. It is not a substitute for professional advice. When in doubt, check the official source.</En>
            <Ko>호주에서의 일상 생활에 대한 일반적인 경험을 바탕으로 정직하게 정보를 제공하고 있습니다. 전문적인 조언을 대체하지 않습니다. 의심될 때는 공식 출처를 확인하세요.</Ko>
          </p>
        </section>

        {/* Other projects */}
        <section className="bg-white dark:bg-dark-card border border-sand dark:border-dark-border rounded-2xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">🛠️</span>
            <div>
              <h2 className="font-bold text-base text-eucalypt dark:text-white mb-1">
                <En>Other things I've built</En>
                <Ko>다른 만든 것들</Ko>
              </h2>
              <p className="text-xs text-eucalypt/50 dark:text-dark-muted/50">
                <En>More tools to help you settle in</En>
                <Ko>호주 적응을 돕는 다른 도구들</Ko>
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <a
              href="https://drivewithbui.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 bg-sunset/5 rounded-xl hover:bg-sunset/10 transition-colors group"
            >
              <span className="text-xl">🚗</span>
              <div>
                <p className="font-semibold text-sm text-sunset group-hover:underline">Drive with Bui</p>
                <p className="text-xs text-eucalypt/60 dark:text-dark-muted/60">
                  <En>Patient driving lessons in Sydney. Bilingual support.</En>
                  <Ko>시드니에서 인내심 있는 운전 레슨. 한국어 지원.</Ko>
                </p>
              </div>
            </a>
            <a
              href="https://study-buddy-two-orpin.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 bg-sage/5 rounded-xl hover:bg-sage/10 transition-colors group"
            >
              <span className="text-xl">📚</span>
              <div>
                <p className="font-semibold text-sm text-sage group-hover:underline">Study Buddy</p>
                <p className="text-xs text-eucalypt/60 dark:text-dark-muted/60">
                  <En>AI flashcard app for international students.</En>
                  <Ko>유학생을 위한 AI 플래시카드 앱.</Ko>
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white dark:bg-dark-card border border-sand dark:border-dark-border rounded-2xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">✉️</span>
            <div>
              <h2 className="font-bold text-base text-eucalypt dark:text-white mb-1">
                <En>Get in touch</En>
                <Ko>문의</Ko>
              </h2>
              <p className="text-xs text-eucalypt/50 dark:text-dark-muted/50">
                <En>Found something wrong or have a suggestion?</En>
                <Ko>잘못된 곳을 발견했거나 제안이 있으신가요?</Ko>
              </p>
            </div>
          </div>
          <En>
            <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70">
              Corrections and suggestions are always welcome. The best way to reach me is on Telegram.
            </p>
          </En>
          <Ko>
            <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70">
              수정 제안과 의견은 언제든 환영합니다. 가장 빠른 연락 방법은 Telegram입니다.
            </p>
          </Ko>
        </section>

        {/* Back */}
        <div className="text-center pt-2">
          <a
            href="/"
            className="text-sm text-sunset hover:underline"
          >
            <En>← Back to AussieMate</En>
            <Ko>← AussieMate로 돌아가기</Ko>
          </a>
        </div>
      </div>
    </div>
  );
}

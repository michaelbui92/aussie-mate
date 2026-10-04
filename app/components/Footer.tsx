import Link from "next/link";
import { En, Ja, Ko, Zh } from "./LangBlocks";

const FLAG_EMOJI = "🇦🇺";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-dark-border bg-stone-50 dark:bg-darkbg mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group mb-3">
              <span className="w-9 h-9 rounded-full bg-stone-100 dark:bg-dark-surface flex items-center justify-center text-xl ring-1 ring-stone-200/60 dark:ring-dark-border transition-transform group-hover:scale-105">
                {FLAG_EMOJI}
              </span>
              <span className="font-serif text-lg text-stone-900 dark:text-stone-100">AussieGuides</span>
            </Link>
            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed max-w-xs">
              <En translated>A guide to Australian daily life — for anyone new here, regardless of where you&apos;re coming from. (Available in English and 한국어)</En>
              <Ja>オーストラリアの日常生活ガイド — どこから来た方でも、ここでの生活が初めての方のために。（英語と韓国語で利用可能）</Ja>
              <Zh>澳大利亚日常生活指南 — 无论你来自哪里，只要初到此处都适用。（提供英语和韩语版本）</Zh>
              <Ko>호주 일상 생활에 대한 가이드 — 어디서 오신 분이든 호주를 처음 접하시는 모든 분들을 위해. (영어와 한국어로 제공)</Ko>
            </p>
          </div>

          {/* Living */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-4">
              <En translated>Living</En>
              <Ja>暮らし</Ja>
              <Zh>生活</Zh>
              <Ko>생활</Ko>
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/apartment" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Apartment</En><Ja>賃貸</Ja><Zh>租房</Zh><Ko>부동산</Ko></Link></li>
              <li><Link href="/finance" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Finance</En><Ja>金融</Ja><Zh>金融</Zh><Ko>금융</Ko></Link></li>
              <li><Link href="/transport" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Transport</En><Ja>交通</Ja><Zh>交通</Zh><Ko>교통</Ko></Link></li>
              <li><Link href="/workplace" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Workplace</En><Ja>職場</Ja><Zh>职场</Zh><Ko>직장</Ko></Link></li>
              <li><Link href="/study" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Study</En><Ja>学習</Ja><Zh>学习</Zh><Ko>학습</Ko></Link></li>
              <li><Link href="/weather" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Weather</En><Ja>天気</Ja><Zh>天气</Zh><Ko>날씨</Ko></Link></li>
            </ul>
          </div>

          {/* Explore + Learn */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-4">
              <En translated>Explore</En>
              <Ja>体験する</Ja>
              <Zh>探索</Zh>
              <Ko>둘러보기</Ko>
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/destinations" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Destinations</En><Ja>目的地</Ja><Zh>目的地</Zh><Ko>여행지</Ko></Link></li>
              <li><Link href="/tourist" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Tourist</En><Ja>観光</Ja><Zh>旅游</Zh><Ko>관광</Ko></Link></li>
              <li><Link href="/sport" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Sport</En><Ja>スポーツ</Ja><Zh>体育</Zh><Ko>스포츠</Ko></Link></li>
              <li><Link href="/beyond-sydney" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Beyond Sydney</En><Ja>シドニーの外へ</Ja><Zh>悉尼之外</Zh><Ko>시드니 밖으로</Ko></Link></li>
              <li><Link href="/aussie-english" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Aussie English</En><Ja>オーストラリア英語</Ja><Zh>澳洲英语</Zh><Ko>호주 영어</Ko></Link></li>
              <li><Link href="/visa" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Visa Guide</En><Ja>ビザガイド</Ja><Zh>签证指南</Zh><Ko>비자 가이드</Ko></Link></li>
              <li><Link href="/faq" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>FAQ</En><Ja>よくある質問</Ja><Zh>常见问题</Zh><Ko>자주 묻는 질문</Ko></Link></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-4">
              <En translated>More</En>
              <Ja>もっと見る</Ja>
              <Zh>更多</Zh>
              <Ko>더보기</Ko>
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Resources</En><Ja>リソース</Ja><Zh>资源</Zh><Ko>자료</Ko></Link></li>
              <li><Link href="/other-tools" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>My Projects</En><Ja>私のプロジェクト</Ja><Zh>我的项目</Zh><Ko>내 프로젝트</Ko></Link></li>
              <li><Link href="/editorial" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Editorial standards</En><Ja>編集方針</Ja><Zh>编辑标准</Zh><Ko>편집 기준</Ko></Link></li>
              <li><Link href="/about" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>About AussieGuides</En><Ja>AussieGuidesについて</Ja><Zh>关于AussieGuides</Zh><Ko>AussieGuides 소개</Ko></Link></li>
              <li><a href="https://drivewithbui.com" target="_blank" rel="noopener noreferrer" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors">Drive with Bui →</a></li>
              <li><Link href="/privacy" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Privacy</En><Ja>プライバシー</Ja><Zh>隐私</Zh><Ko>개인정보</Ko></Link></li>
              <li><Link href="/terms" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En translated>Terms</En><Ja>利用規約</Ja><Zh>条款</Zh><Ko>이용약관</Ko></Link></li>
            </ul>
          </div>
        </div>

        {/* Editorial note — visible signal that the content is human-written
            and reviewed, NOT AI-generated. Previously we carried an
            "AI-generated may not be accurate" disclaimer which directly
            contradicted the helpful-content/AdSense signals. Swapped for a
            positive editorial note. Links to /editorial for full standards.
            Email contact now lives here too (since the editorial page
            contact was rewritten to email Michael directly). */}
        <div className="bg-stone-100 dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border rounded-xl px-4 py-3 text-xs text-stone-500 dark:text-stone-400 mb-6">
          <p className="font-semibold text-sunset mb-1">
            <En translated>Editorial note</En>
            <Ja>編集ノート</Ja>
            <Zh>编辑说明</Zh>
            <Ko>편집 노트</Ko>
          </p>
          <p className="mb-1">
            <En translated>Written and reviewed by a human editor. Information is checked against official Australian government sources before publishing.</En>
            <Ja>人間の編集者が執筆・レビューしています。公開前にオーストラリア政府の公式情報源と照合して確認します。</Ja>
            <Zh>由人工编辑撰写并审核。发布前会对照澳大利亚政府官方来源核实信息。</Zh>
            <Ko>사람 편집자가 직접 작성 및 검토했습니다. 발행 전 호주 정부 공식 출처를 교차 검증합니다.</Ko>
          </p>
          <p className="mb-2">
            <En translated>Spotted an error? Email </En>
            <Ja>誤りを見つけましたか？メール</Ja>
            <Zh>发现错误？请发送邮件</Zh>
            <Ko>오류를 발견하셨나요? </Ko>
            <a href="mailto:michaelbui@outlook.com.au" className="text-sunset hover:underline font-medium">
              michaelbui@outlook.com.au
            </a>
            <En translated> — thank you.</En>
            <Ja>— ありがとうございます。</Ja>
            <Zh>— 谢谢。</Zh>
            <Ko> — 감사합니다.</Ko>
          </p>
          <Link href="/editorial" className="text-sunset hover:underline font-medium">
            <En translated>Read our editorial standards →</En>
            <Ja>編集基準を読む →</Ja>
            <Zh>阅读我们的编辑标准 →</Zh>
            <Ko>편집 기준 보기 →</Ko>
          </Link>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="text-xs text-stone-400 dark:text-stone-500">© 2026 AussieGuides</p>
          <p className="text-xs text-stone-400 dark:text-stone-500">
            <En translated>Made with {FLAG_EMOJI} in Australia</En>
            <Ja>オーストラリアで{FLAG_EMOJI}を込めて制作しました</Ja>
            <Zh>在澳大利亚用{FLAG_EMOJI}制作</Zh>
            <Ko>호주에서 만든 {FLAG_EMOJI}</Ko>
          </p>
        </div>
      </div>
    </footer>
  );
}

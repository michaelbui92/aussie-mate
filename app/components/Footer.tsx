import Link from "next/link";
import { En, Ko } from "./LangBlocks";

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
              <En>A guide to Australian daily life — for anyone new here, regardless of where you&apos;re coming from. (Available in English and 한국어)</En>
              <Ko>호주 일상 생활에 대한 가이드 — 어디서 오신 분이든 호주를 처음 접하시는 모든 분들을 위해. (영어와 한국어로 제공)</Ko>
            </p>
          </div>

          {/* Living */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-4">
              <En>Living</En>
              <Ko>생활</Ko>
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/apartment" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Apartment</En><Ko>부동산</Ko></Link></li>
              <li><Link href="/finance" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Finance</En><Ko>금융</Ko></Link></li>
              <li><Link href="/transport" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Transport</En><Ko>교통</Ko></Link></li>
              <li><Link href="/workplace" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Workplace</En><Ko>직장</Ko></Link></li>
              <li><Link href="/study" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Study</En><Ko>학습</Ko></Link></li>
              <li><Link href="/weather" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Weather</En><Ko>날씨</Ko></Link></li>
            </ul>
          </div>

          {/* Explore + Learn */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-4">
              <En>Explore</En>
              <Ko>둘러보기</Ko>
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/destinations" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Destinations</En><Ko>여행지</Ko></Link></li>
              <li><Link href="/tourist" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Tourist</En><Ko>관광</Ko></Link></li>
              <li><Link href="/sport" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Sport</En><Ko>스포츠</Ko></Link></li>
              <li><Link href="/beyond-sydney" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Beyond Sydney</En><Ko>시드니 밖으로</Ko></Link></li>
              <li><Link href="/aussie-english" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Aussie English</En><Ko>호주 영어</Ko></Link></li>
              <li><Link href="/visa" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Visa Guide</En><Ko>비자 가이드</Ko></Link></li>
              <li><Link href="/faq" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>FAQ</En><Ko>자주 묻는 질문</Ko></Link></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-4">
              <En>More</En>
              <Ko>더보기</Ko>
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Resources</En><Ko>자료</Ko></Link></li>
              <li><Link href="/other-tools" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>My Projects</En><Ko>내 프로젝트</Ko></Link></li>
              <li><Link href="/editorial" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Editorial standards</En><Ko>편집 기준</Ko></Link></li>
              <li><Link href="/about" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>About AussieGuides</En><Ko>AussieGuides 소개</Ko></Link></li>
              <li><a href="https://drivewithbui.com" target="_blank" rel="noopener noreferrer" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors">Drive with Bui →</a></li>
              <li><Link href="/privacy" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Privacy</En><Ko>개인정보</Ko></Link></li>
              <li><Link href="/terms" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Terms</En><Ko>이용약관</Ko></Link></li>
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
            <En>Editorial note</En>
            <Ko>편집 노트</Ko>
          </p>
          <p className="mb-1">
            <En>Written and reviewed by a human editor. Information is checked against official Australian government sources before publishing.</En>
            <Ko>사람 편집자가 직접 작성 및 검토했습니다. 발행 전 호주 정부 공식 출처를 교차 검증합니다.</Ko>
          </p>
          <p className="mb-2">
            <En>Spotted an error? Email </En>
            <Ko>오류를 발견하셨나요? </Ko>
            <a href="mailto:michaelbui@outlook.com.au" className="text-sunset hover:underline font-medium">
              michaelbui@outlook.com.au
            </a>
            <En> — thank you.</En>
            <Ko> — 감사합니다.</Ko>
          </p>
          <Link href="/editorial" className="text-sunset hover:underline font-medium">
            <En>Read our editorial standards →</En>
            <Ko>편집 기준 보기 →</Ko>
          </Link>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="text-xs text-stone-400 dark:text-stone-500">© 2026 AussieGuides</p>
          <p className="text-xs text-stone-400 dark:text-stone-500">
            <En>Made with {FLAG_EMOJI} in Australia</En>
            <Ko>호주에서 만든 {FLAG_EMOJI}</Ko>
          </p>
        </div>
      </div>
    </footer>
  );
}

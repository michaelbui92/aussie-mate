import Link from "next/link";
import { En, Ko } from "./LangBlocks";
import { FLAG_AU_SVG } from "./FlagAU";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-dark-border bg-stone-50 dark:bg-darkbg mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group mb-3">
              <span
                className="block w-9 h-6 rounded overflow-hidden shadow-sm ring-1 ring-stone-200/60 dark:ring-dark-border transition-transform group-hover:scale-105"
                dangerouslySetInnerHTML={{ __html: FLAG_AU_SVG }}
              />
              <span className="font-serif text-lg text-stone-900 dark:text-stone-100">AussieMate</span>
            </Link>
            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed max-w-xs">
              <En>A bilingual guide for Korean visitors to Sydney and NSW. Made for everyone new to Australia.</En>
              <Ko>시드니와 NSW를 방문하는 한국인을 위한 바이링구얼 가이드. 호주에 처음 오시는 모든 분들을 위해.</Ko>
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-4">
              <En>Explore</En>
              <Ko>둘러보기</Ko>
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/destinations" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Destinations</En><Ko>여행지</Ko></Link></li>
              <li><Link href="/aussie-english" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Aussie English</En><Ko>호주 영어</Ko></Link></li>
              <li><Link href="/finance" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Finance</En><Ko>금융</Ko></Link></li>
              <li><Link href="/apartment" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Apartment</En><Ko>부동산</Ko></Link></li>
              <li><Link href="/workplace" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>Workplace</En><Ko>직장</Ko></Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-4">
              <En>About</En>
              <Ko>소개</Ko>
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors"><En>About AussieMate</En><Ko>AussieMate 소개</Ko></Link></li>
              <li><a href="https://drivewithbui.com" target="_blank" rel="noopener noreferrer" className="text-stone-600 dark:text-stone-300 hover:text-sunset transition-colors">Drive with Bui →</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-stone-100 dark:bg-dark-surface border border-stone-200/60 dark:border-dark-border rounded-xl px-4 py-3 text-xs text-stone-500 dark:text-stone-400 mb-6">
          <p className="font-semibold text-sunset mb-1">
            <En>Disclaimer</En>
            <Ko>면책 조항</Ko>
          </p>
          <p>
            <En>Information on this site is AI-generated and may not always be accurate or up to date. Always verify with official government sources.</En>
            <Ko>이 사이트의 정보는 AI가 생성한 것으로 항상 정확하거나 최신 정보가 아닐 수 있습니다. 반드시 공식 정부 출처를 확인하세요.</Ko>
          </p>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="text-xs text-stone-400 dark:text-stone-500">© 2026 AussieMate</p>
          <p className="text-xs text-stone-400 dark:text-stone-500">
            <En>Made with <span className="inline-block w-3.5 h-2.5 align-middle rounded-sm overflow-hidden align-text-top" dangerouslySetInnerHTML={{ __html: FLAG_AU_SVG }} /> in Australia</En>
            <Ko>호주에서 만든 <span className="inline-block w-3.5 h-2.5 align-middle rounded-sm overflow-hidden align-text-top" dangerouslySetInnerHTML={{ __html: FLAG_AU_SVG }} /></Ko>
          </p>
        </div>
      </div>
    </footer>
  );
}

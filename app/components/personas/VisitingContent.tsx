import Link from "next/link";
import { En, Ko } from "../LangBlocks";

export default function VisitingContent() {
  return (
    <>
      {/* Intro */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sky-600 mb-3">
          <En>First time</En>
          <Ko>첫 방문</Ko>
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mb-4 leading-tight">
          <En>Welcome to Australia.</En>
          <Ko>호주에 오신 것을 환영합니다.</Ko>
        </h3>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg max-w-2xl">
          <En>
            AussieMate is a bilingual guide for Korean visitors to Sydney and NSW. Whether you&apos;re here for a holiday, a working holiday, or your first week in Australia — this is the site that explains the things your travel guide doesn&apos;t.
          </En>
          <Ko>
            AussieMate는 시드니와 NSW를 방문하는 한국인 여행자를 위한 바이링구얼 가이드입니다. 호캘리데이든, 워킹 홀리데이든, 호주에서의 첫 주든 — 여행 가이드에서 찾을 수 없는 것들을 알려드립니다.
          </Ko>
        </p>
      </section>

      {/* What to know */}
      <section className="mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sky-600 mb-5">
          <En>What to know before you land</En>
          <Ko>도착 전에 알아두면 좋은 것</Ko>
        </p>
        <ul className="space-y-4 max-w-3xl">
          {[
            { icon: "💳", en: "Visa and entry", ko: "비자와 입국", descEn: "Check your visa type before booking. Tourist visas can't work. Working Holiday Makers have 12-month restrictions on the same employer.", descKo: "비자 종류를 예약 전에 확인하세요. 관광비자는 취업 불가. 워킹홀리데이는 같은 고용주에 12개월 제한이 있습니다." },
            { icon: "💰", en: "Money basics", ko: "돈의 기본", descEn: "AUD only. Cards work everywhere — but get an Opal card for public transport. Tipping is not expected.", descKo: "호주달러만 사용. 카드는 어디서든 사용 가능 — 하지만 대중교통은 오팔 카드가 필요합니다. 팁은 기대하지 않아도 됩니다." },
            { icon: "☀️", en: "Sun is serious", ko: "자외선이 강합니다", descEn: "Australia has the highest UV rate in the world. Slip, slop, slap — even on cloudy days. SPF 50+ every day.", descKo: "호주는 세계 최고 자외선 지수 보유. Slip, slop, slap — 흐린 날에도 필수. 매일 SPF 50+." },
            { icon: "📱", en: "SIM and connectivity", ko: "SIM과 통신", descEn: "Grab an eSIM before you leave, or buy a prepaid SIM at the airport (Telstra, Optus, Vodafone). Data is cheap here.", descKo: "출발 전 eSIM을 준비하거나, 공항에서 선불 SIM 구매 (Telstra, Optus, Vodafone). 데이터가 저렴합니다." },
            { icon: "🗺️", en: "Getting around", ko: "교통", descEn: "Get the TripView app. Trains run on time. Opal covers trains, buses, ferries, and light rail. No need for a car in Sydney.", descKo: "TripView 앱을 다운로드하세요. 기차는 시간 정확. 오팔로 기차, 버스, 페리, 경전철 이용 가능. 시드니에선 차가 필요 없습니다." },
          ].map((item, i) => (
            <li key={item.en} className={`reveal reveal-delay-${i + 1} flex gap-4 group`}>
              <span className="shrink-0 w-10 h-10 rounded-full bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <div>
                <h4 className="font-serif text-lg md:text-xl text-stone-900 dark:text-stone-100 mb-1">
                  <En>{item.en}</En>
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

      {/* Read more */}
      <section>
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sky-600 mb-5">
          <En>Keep reading</En>
          <Ko>더 알아보기</Ko>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          <Link href="/tourist" className="reveal reveal-delay-1 group p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20 border border-amber-100/50 dark:border-amber-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">🌊 <En>Sydney & NSW</En><Ko>시드니 & NSW</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Beaches, harbour, must-see icons</En>
              <Ko>해변, 하버, 필수 명소</Ko>
            </div>
          </Link>
          <Link href="/aussie-english" className="reveal reveal-delay-2 group p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100/50 dark:from-sky-950/30 dark:to-sky-900/20 border border-sky-100/50 dark:border-sky-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">🗣️ <En>Aussie English</En><Ko>호주 영어</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Decode the slang before you arrive</En>
              <Ko>도착 전에 호주 속어를 해독하세요</Ko>
            </div>
          </Link>
          <Link href="/transport" className="reveal reveal-delay-3 group p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20 border border-emerald-100/50 dark:border-emerald-900/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="font-serif text-lg text-stone-900 dark:text-stone-100 mb-1">🚆 <En>Transport</En><Ko>교통</Ko></div>
            <div className="text-sm text-stone-600 dark:text-stone-400">
              <En>Opal, trains, ferries, rideshare</En>
              <Ko>오팔, 기차, 페리, 라이드셰어</Ko>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { En, Ko } from "../LangBlocks";

export default function VisitingContent() {
  return (
    <>
      {/* Welcome intro */}
      <section className="mb-8">
        <h3 className="text-sm font-black uppercase tracking-wider text-sky-600 mb-4">
          <En>Welcome to Australia</En>
          <Ko>호주에 오신 것을 환영합니다</Ko>
        </h3>
        <div className="space-y-4">
          <p className="text-base text-stone-700 leading-relaxed">
            <En>
              AussieMate is a bilingual guide for Korean visitors to Sydney and NSW.
              Whether you&apos;re here for a holiday, a working holiday, or your first week in Australia — this is the site that explains the things your travel guide doesn&apos;t.
            </En>
            <Ko>
              AussieMate는 시드니와 NSW를 방문하는 한국인 여행자를 위한 바이링구얼 가이드입니다.
              호캘리데이이든, 워킹 홀리데이이든, 호주에서의 첫 주이든 — 여행 가이드에서 찾을 수 없는 것들을 알려드리는 사이트입니다.
            </Ko>
          </p>
          <p className="text-sm text-stone-500 leading-relaxed">
            <En>
              Everything here is in English and Korean. Pick what you need, read it in both languages, and show it to a cab driver if you need to.
            </En>
            <Ko>
              이 사이트의 모든 콘텐츠는 영어와 한국어로 제공됩니다. 필요한 것을 선택하고, 두 언어로 읽으세요. 필요하다면 택시 기사에게 보여줘도 좋습니다.
            </Ko>
          </p>
        </div>
      </section>

      {/* What to know */}
      <section className="mb-8">
        <h3 className="text-sm font-black uppercase tracking-wider text-sky-600 mb-3">
          <En>What to know before you land</En>
          <Ko>도착 전에 알아두면 좋은 것</Ko>
        </h3>
        <div className="space-y-3">
          {[
            { icon: "💳", en: "Visa and entry", ko: "비자와 입국", descEn: "Check your visa type before booking. Tourist visas can't work. Working Holiday Makers have 12-month restrictions on the same employer.", descKo: "비자 종류를 예약 전에 확인하세요. 관광비자는 취업 불가. 워킹홀리데이는 같은 고용주에 12개월 제한이 있습니다." },
            { icon: "💰", en: "Money basics", ko: "돈의 기본", descEn: "AUD only. Cards work everywhere — but get an Opal card for public transport. Tipping is not expected.", descKo: "호주달러만 사용. 카드는 어디서든 사용 가능 — 하지만 대중교통은 오팔 카드가 필요합니다. 팁은 기대하지 않아도 됩니다." },
            { icon: "☀️", en: "Sun is serious", ko: "자외선이很强", descEn: "Australia has the highest UV rate in the world. Slip, slop, slap — even on cloudy days. SPF 50+ every day.", descKo: "호주는 세계 최고 자외선 지수 보유. Slip, slop, slap — 흐린 날에도 필수. 매일 SPF 50+." },
            { icon: "📱", en: "SIM and connectivity", ko: "SIM과 통신", descEn: "Grab an eSIM before you leave, or buy a prepaid SIM at the airport (Telstra, Optus, Vodafone). Data is cheap here.", descKo: "출발 전 eSIM을 준비하거나, 공항에서 선불 SIM 구매 (Telstra, Optus, Vodafone). 데이터가 저렴합니다." },
            { icon: "🗺️", en: "Getting around", ko: "교통", descEn: "Get the TripView app. Trains run on time. Opal covers trains, buses, ferries, and light rail. No need for a car in Sydney.", descKo: "TripView 앱을 다운로드하세요. 기차는 시간 정확. 오팔로 기차, 버스, 페리, 경전철 이용 가능. 시드니에선 차가 필요 없습니다." },
          ].map((item) => (
            <div key={item.en} className="flex gap-3 p-3 bg-sky-50 border-l-4 border-sky-400">
              <span className="text-xl shrink-0">{item.icon}</span>
              <div>
                <h4 className="font-bold text-sm text-stone-800">
                  <En>{item.en}</En>
                  <Ko>{item.ko}</Ko>
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  <En>{item.descEn}</En>
                  <Ko>{item.descKo}</Ko>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Read more */}
      <section>
        <h3 className="text-sm font-black uppercase tracking-wider text-sky-600 mb-3">
          <En>Keep reading</En>
          <Ko>더 알아보기</Ko>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/tourist" className="block bg-amber-400 border-4 border-black p-4 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="text-sm font-black text-stone-900">🌊 Sydney & NSW</div>
            <div className="text-xs font-medium text-stone-800 mt-0.5 opacity-70">
              <En>Beaches, harbour, must-see icons</En>
              <Ko>해변, 하버, 필수 명소</Ko>
            </div>
          </Link>
          <Link href="/aussie-english" className="block bg-sky-400 border-4 border-black p-4 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="text-sm font-black text-stone-900">🗣️ Aussie English</div>
            <div className="text-xs font-medium text-stone-800 mt-0.5 opacity-70">
              <En>Decode the slang before you arrive</En>
              <Ko>도착 전에 호주 속어를 해독하세요</Ko>
            </div>
          </Link>
          <Link href="/transport" className="block bg-emerald-400 border-4 border-black p-4 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="text-sm font-black text-stone-900">🚆 Transport</div>
            <div className="text-xs font-medium text-stone-800 mt-0.5 opacity-70">
              <En>Opal, trains, ferries, rideshare</En>
              <Ko>오팔, 기차, 페리, 라이드셰어</Ko>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; bg: string; accent: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", bg: "bg-amber-100", accent: "text-amber-700" },
  { key: "arrived", title: "I just got here", koTitle: "방금 도착했어요", bg: "bg-emerald-100", accent: "text-emerald-700" },
  { key: "home", title: "I call this home", koTitle: "여기가 내 집이에요", bg: "bg-teal-100", accent: "text-teal-700" },
];

const topics = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", tagline: "Lease, bond, flatmates — plain and simple", taglineKo: "임대, 보증금, 쉐어하우스", color: "bg-amber-400", text: "text-white" },
  { href: "/finance", title: "Finance", titleKo: "금융", tagline: "Bank account, TFN, super — first week", taglineKo: "은행, TFN, 퇴직연금", color: "bg-emerald-500", text: "text-white" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", tagline: "Arvo, ta, no worries — decoded", taglineKo: "호주 속어 해독", color: "bg-teal-500", text: "text-white" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", tagline: "NRL, AFL, and cricket obsession", taglineKo: "호주 스포츠의 모든 것", color: "bg-amber-500", text: "text-white" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", tagline: "Award rates, leave, your rights", taglineKo: "임금과 노동자 권리", color: "bg-emerald-600", text: "text-white" },
  { href: "/study", title: "Study", titleKo: "학습", tagline: "University, VET, English courses", taglineKo: "대학, 직업교육", color: "bg-teal-600", text: "text-white" },
  { href: "/transport", title: "Transport", titleKo: "교통", tagline: "Opal, trains, ferries, and driving", taglineKo: "오팔, 기차, 페리", color: "bg-orange-400", text: "text-white" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", tagline: "Sydney icons, Blue Mountains, coast", taglineKo: "시드니 명소", color: "bg-orange-500", text: "text-white" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖으로", tagline: "Weekend drives and road trip routes", taglineKo: "주말 드라이브와 여행", color: "bg-violet-500", text: "text-white" },
  { href: "/resources", title: "Resources", titleKo: "자료", tagline: "Medicare, Centrelink, community groups", taglineKo: "Medicare와 커뮤니티", color: "bg-stone-500", text: "text-white" },
];

export default function TestHomepage8() {
  const [active, setActive] = useState<StageKey>("visiting");
  const activeIdx = stages.findIndex((s) => s.key === active);

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Full-bleed hero — Rainforest waterfall */}
        <div className="relative min-h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1800&q=85"
            alt="Australian Rainforest"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-transparent to-transparent" />
          
          <div className="relative max-w-5xl mx-auto px-4 pt-10 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400 mb-4">
                  <En>AussieMate · Bilingual · For Koreans in Australia</En>
                  <Ko>호주 메이트 · 바이링구얼 · 호주 한인 가이드</Ko>
                </p>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-none drop-shadow-lg">
                  <En>G&apos;day,<br/><span className="text-emerald-400">Australia</span></En>
                  <Ko>호주에<br/><span className="text-emerald-400">오신 것을</span></Ko>
                </h1>
              </div>
              <div>
                <p className="text-stone-300 font-medium text-sm leading-relaxed mb-4">
                  <En>Your bilingual guide to Aussie life — landing, working, studying, living like a local.</En>
                  <Ko>호주 생활의 바이링구얼 가이드. 착륙에서 현지인처럼.</Ko>
                </p>
                <div className="flex gap-3 text-xs font-bold text-stone-500">
                  <span>10 guides</span>
                  <span>·</span>
                  <span>209 phrases</span>
                  <span>·</span>
                  <span>AU/KO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stage tabs */}
        <div className="bg-stone-900 border-b-4 border-black">
          <div className="max-w-5xl mx-auto px-4 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {stages.map((s, i) => {
                const isActive = active === s.key;
                return (
                  <button
                    key={s.key}
                    onClick={() => setActive(s.key)}
                    className={`text-left p-4 border-4 border-black transition-all font-black ${
                      isActive
                        ? `${s.bg} ${s.accent} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1 -translate-x-1`
                        : "bg-stone-800 text-stone-400 hover:bg-stone-700 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                    }`}
                  >
                    <div className={`font-mono text-[10px] mb-1 ${isActive ? "text-inherit opacity-50" : ""}`}>{String(i + 1).padStart(2, "0")}</div>
                    <En>{s.title}</En>
                    <Ko>{s.koTitle}</Ko>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 mb-8">
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>

        {/* Topic grid */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {topics.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className={`${t.color} ${t.text} border-4 border-black p-4 flex flex-col justify-between hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <div />
                <div className="font-black text-sm mb-0.5">
                  <En>{t.title}</En>
                  <Ko>{t.titleKo}</Ko>
                </div>
                <div className="text-[10px] font-semibold opacity-70 leading-tight">
                  <En>{t.tagline}</En>
                  <Ko>{t.taglineKo}</Ko>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <SearchModal />
    </>
  );
}

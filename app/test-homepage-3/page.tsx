"use client";
import { useState } from "react";
import Link from "next/link";
import { En, Ko } from "@/components/LangBlocks";
import VisitingContent from "@/components/personas/VisitingContent";
import ArrivedContent from "@/components/personas/ArrivedContent";
import HomeContent from "@/components/personas/HomeContent";
import { SearchModal } from "@/components/SearchModal";

type StageKey = "visiting" | "arrived" | "home";

const stages: { key: StageKey; title: string; koTitle: string; color: string }[] = [
  { key: "visiting", title: "I'm visiting", koTitle: "여행 중이에요", color: "bg-yellow-300" },
  { key: "arrived", title: "I just arrived", koTitle: "방금 도착했어요", color: "bg-green-300" },
  { key: "home", title: "This is home", koTitle: "여기가 내 집이에요", color: "bg-indigo-300" },
];

const categories = [
  { href: "/apartment", title: "Apartment", titleKo: "부동산", desc: "Renting in NSW", descKo: "NSW 임대", bg: "bg-pink-300" },
  { href: "/finance", title: "Finance", titleKo: "금융", desc: "Banking, tax", descKo: "은행, 세금", bg: "bg-yellow-300" },
  { href: "/aussie-english", title: "Aussie English", titleKo: "호주 영어", desc: "Decode slang", descKo: "호주 속어", bg: "bg-green-300" },
  { href: "/sport", title: "Sport", titleKo: "스포츠", desc: "NRL, AFL, cricket", descKo: "스포츠 문화", bg: "bg-orange-300" },
  { href: "/workplace", title: "Workplace", titleKo: "직장", desc: "Rights & culture", descKo: "권리와 문화", bg: "bg-violet-300" },
  { href: "/study", title: "Study", titleKo: "학습", desc: "University life", descKo: "대학 생활", bg: "bg-sky-300" },
  { href: "/transport", title: "Transport", titleKo: "교통", desc: "Opal, trains", descKo: "오팔, 기차", bg: "bg-emerald-300" },
  { href: "/tourist", title: "Tourist", titleKo: "여행자", desc: "Sydney & NSW", descKo: "시드니", bg: "bg-amber-300" },
  { href: "/beyond-sydney", title: "Beyond Sydney", titleKo: "시드니 밖", desc: "Weekend trips", descKo: "주말 여행", bg: "bg-teal-300" },
  { href: "/resources", title: "Resources", titleKo: "자료", desc: "Gov & community", descKo: "정부 서비스", bg: "bg-rose-300" },
];

const stageColors: Record<StageKey, string> = { visiting: "bg-yellow-100", arrived: "bg-green-100", home: "bg-indigo-100" };

export default function TestHomepage3() {
  const [active, setActive] = useState<StageKey>("visiting");

  return (
    <>
      <section className="bg-[#FFF8E7] border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="inline-block bg-yellow-300 border-2 border-black px-4 py-1.5 mb-4 font-bold text-sm">
            <En>New in Australia? →</En>
            <Ko>호주에 처음? →</Ko>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-black mb-3 tracking-tight">
            Welcome<br/>to <span style={{ textDecoration: "underline wavy #eab308", textDecorationThickness: "3px" }}> Australia</span> 🦘
          </h1>
          <p className="text-lg text-gray-700 max-w-md">
            <En>Bilingual guide to Aussie life. No bullshit, no fluff.</En>
            <Ko>호주 생활 바이링구얼 가이드. 헛소리 없이.</Ko>
          </p>
        </div>
      </section>

      <section className="bg-[#FFF8E7]">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {stages.map((s, i) => {
              const isActive = active === s.key;
              return (
                <button
                  key={s.key}
                  onClick={() => setActive(s.key)}
                  className={`text-left font-bold transition-all border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] ${
                    isActive ? `${s.color} -translate-y-1 shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]` : "bg-white hover:translate-x-0.5"
                  }`}
                >
                  <div className="p-5">
                    <div className="text-sm font-mono text-black/50 mb-2">#{i + 1}</div>
                    <h2 className="text-xl font-black text-black">
                      <En>{s.title}</En>
                      <Ko>{s.koTitle}</Ko>
                    </h2>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 md:p-6">
            {active === "visiting" && <VisitingContent />}
            {active === "arrived" && <ArrivedContent />}
            {active === "home" && <HomeContent />}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8E7] pb-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-black text-black mb-6 text-center">
            <En>All Guides</En>
            <Ko>모든 가이드</Ko>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`group block ${cat.bg} border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-5 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`}
              >
                <h3 className="text-lg font-black text-black">
                  <En>{cat.title}</En>
                  <Ko>{cat.titleKo}</Ko>
                </h3>
                <p className="text-sm font-medium text-black/70 mt-1">
                  <En>{cat.desc}</En>
                  <Ko>{cat.descKo}</Ko>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SearchModal />
    </>
  );
}

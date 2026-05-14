"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { En, Ko } from "@/components/LangBlocks";
import { openSearch } from "@/components/SearchModal";

const categories = [
  {
    href: "/aussie-english",
    emoji: "💬",
    title: "Aussie English",
    desc: "Decode Australian slang and phrases",
    koTitle: "호주 영어",
    koDesc: "호주 속어를解码합니다",
    color: "bg-sunset/10 border-sunset/30",
    accent: "text-sunset",
  },
  {
    href: "/apartment",
    emoji: "🏠",
    title: "Apartment Guide",
    desc: "Renting in NSW, explained simply",
    koTitle: "부동산 가이드",
    koDesc: "NSW 임대 절차를 쉽게 설명합니다",
    color: "bg-sage/10 border-sage/30",
    accent: "text-sage",
  },
  {
    href: "/workplace",
    emoji: "💼",
    title: "Workplace",
    desc: "Australian work culture and your rights",
    koTitle: "직장",
    koDesc: "호주 직장 문화와劳动者 권리",
    color: "bg-coast/10 border-coast/30",
    accent: "text-coast",
  },
  {
    href: "/study",
    emoji: "🎓",
    title: "Study",
    desc: "University and academic life in Australia",
    koTitle: "학습",
    koDesc: "호주 대학과 학업 생활",
    color: "bg-purple-500/10 border-purple-500/30",
    accent: "text-purple-600 dark:text-purple-400",
  },
  {
    href: "/tourist",
    emoji: "🏖️",
    title: "Tourist",
    desc: "Sydney and NSW for short-term visitors",
    koTitle: "여행자",
    koDesc: "시드니와 NSW短期 방문자를 위한 정보",
    color: "bg-yellow-400/10 border-yellow-400/30",
    accent: "text-yellow-600 dark:text-yellow-400",
  },
  {
    href: "/resources",
    emoji: "🔗",
    title: "Resources",
    desc: "Government services and community links",
    koTitle: "자료",
    koDesc: "정부 서비스와 지역 社会 联系",
    color: "bg-rose-400/10 border-rose-400/30",
    accent: "text-rose-500 dark:text-rose-400",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-14 px-4">
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-sunset/10 border border-sunset/20 rounded-full px-4 py-1.5 mb-6">
            <En><span className="text-sunset text-sm font-semibold">New in Australia?</span></En>
            <Ko><span className="text-sunset text-sm font-semibold">호주에 처음 오신 분들에게</span></Ko>
            <span className="text-eucalypt/50 text-sm">We've got you</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-eucalypt dark:text-white mb-4">
            <En>Welcome to <span className="text-sunset">Australia 🦘</span></En>
            <Ko>호주에 오신 것을 <span className="text-sunset">환영합니다 🦘</span></Ko>
          </h1>

          <p className="text-lg text-eucalypt/70 dark:text-dark-muted/70 mb-6 max-w-md mx-auto">
            <En>Your friendly guide to Aussie English, renting, working, studying, and everything in between.</En>
            <Ko>호주 영어, 임대, 취업, 대학생활 등 모든 것을 안내하는 친근한 ���이드입니다.</Ko>
          </p>

          {/* Search bar */}
          <button
            onClick={openSearch}
            className="inline-flex items-center gap-3 bg-white dark:bg-dark-surface border border-sand dark:border-dark-border rounded-2xl px-5 py-3.5 shadow-lg hover:shadow-xl hover:border-sunset/40 transition-all w-full max-w-md card-hover cursor-pointer"
          >
            <svg className="w-5 h-5 text-sunset shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-eucalypt/40 dark:text-dark-muted/40 text-sm flex-1 text-left">
              Search AussieMate... try "visa", "bond", "medicare"
            </span>
            <span className="text-xs font-semibold bg-sunset text-white rounded-lg px-3 py-1">Search</span>
          </button>
        </div>
      </section>

      {/* Category grid */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.href}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.3, ease: "easeOut" }}
            >
              <Link
                href={cat.href}
                className={`group card-hover ${cat.color} border rounded-2xl p-5 flex flex-col gap-2 h-full`}
              >
                <div className="text-3xl">{cat.emoji}</div>
                <h3 className={`font-bold text-base ${cat.accent}`}><En>{cat.title}</En><Ko>{cat.koTitle}</Ko></h3>
                <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60 leading-snug"><En>{cat.desc}</En><Ko>{cat.koDesc}</Ko></p>
                <div className="mt-auto pt-1">
                  <span className={`text-xs font-semibold ${cat.accent} group-hover:underline link-slide`}><En>Explore →</En><Ko>탐험하기 →</Ko></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom tagline */}
      <section className="bg-sage/10 dark:bg-sage/5 border-t border-sage/20 py-10 text-center">
        <p className="text-sm text-eucalypt/50 dark:text-dark-muted/50 max-w-sm mx-auto px-4">
          <En>Made with 🦘 for everyone new to Australia — no matter where you're from.</En>
          <Ko>호주에 처음 오시는 모든 분들을 위한 친근한 가이드입니다 🦘</Ko>
        </p>
      </section>
    </div>
  );
}
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { En, Ko } from "@/components/LangBlocks";
import { Icons } from "./Icons";

const categories = [
  {
    href: "/aussie-english",
    icon: "Globe",
    title: "Aussie English",
    desc: "Decode Australian slang and phrases",
    koTitle: "호주 영어",
    koDesc: "호주 속어를 쉽게 설명합니다",
    color: "bg-sunset/10 border-sunset/30",
    accent: "text-sunset",
    iconBg: "bg-sunset/20",
  },
  {
    href: "/finance",
    icon: "Wallet",
    title: "Finance",
    desc: "Banking, tax, superannuation, and budgeting",
    koTitle: "금융",
    koDesc: "은행, 세금, 퇴직연금, 예산 관리",
    color: "bg-sage-light/10 border-sage-light/30",
    accent: "text-sage-light",
    iconBg: "bg-sage-light/20",
  },
  {
    href: "/apartment",
    icon: "Home",
    title: "Apartment Guide",
    desc: "Renting in NSW, explained simply",
    koTitle: "부동산 가이드",
    koDesc: "NSW 임대 절차를 쉽게 설명합니다",
    color: "bg-sage/10 border-sage/30",
    accent: "text-sage",
    iconBg: "bg-sage/20",
  },
  {
    href: "/workplace",
    icon: "Briefcase",
    title: "Workplace",
    desc: "Australian work culture and your rights",
    koTitle: "직장",
    koDesc: "호주 직장 문화와 노동자 권리",
    color: "bg-coast/10 border-coast/30",
    accent: "text-coast",
    iconBg: "bg-coast/20",
  },
  {
    href: "/study",
    icon: "GraduationCap",
    title: "Study",
    desc: "University and academic life in Australia",
    koTitle: "학습",
    koDesc: "호주 대학과 학업 생활",
    color: "bg-gum/10 border-gum/30",
    accent: "text-gum",
    iconBg: "bg-gum/20",
  },
  {
    href: "/transport",
    icon: "Car",
    title: "Transport",
    desc: "Opal, trains, buses, ferries, and driving",
    koTitle: "교통",
    koDesc: "오팔 카드, 기차, 버스, 페리, 운전",
    color: "bg-sunset-light/10 border-sunset-light/30",
    accent: "text-sunset-light",
    iconBg: "bg-sunset-light/20",
  },
  {
    href: "/tourist",
    icon: "MapPin",
    title: "Tourist",
    desc: "Sydney and NSW for short-term visitors",
    koTitle: "여행자",
    koDesc: "시드니와 NSW短期 방문자를 위한 정보",
    color: "bg-wattle/10 border-wattle/30",
    accent: "text-wattle",
    iconBg: "bg-wattle/20",
  },
  {
    href: "/beyond-sydney",
    icon: "Navigation",
    title: "Beyond Sydney",
    desc: "Weekend trips and road trips from Sydney",
    koTitle: "시드니 밖으로",
    koDesc: "시드니에서의 주말 여행과 드라이브",
    color: "bg-coast/10 border-coast/30",
    accent: "text-coast",
    iconBg: "bg-coast/20",
  },
  {
    href: "/resources",
    icon: "Link",
    title: "Resources",
    desc: "Government services and community links",
    koTitle: "자료",
    koDesc: "정부 서비스와 지역 사회 연결",
    color: "bg-sage-light/10 border-sage-light/30",
    accent: "text-sage-light",
    iconBg: "bg-sage-light/20",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-8 pb-8 px-4">
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-sunset/10 border border-sunset/20 rounded-full px-3 py-1.5 mb-5">
            <En><span className="text-sunset text-xs font-semibold">New in Australia?</span></En>
            <Ko><span className="text-sunset text-xs font-semibold">호주에 처음 오신 분들에게</span></Ko>
            <span className="text-eucalypt/50 text-xs">We've got you</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-eucalypt dark:text-white mb-3 leading-tight">
            <En>Welcome to <span className="text-sunset">Australia 🦘</span></En>
            <Ko>호주에 오신 것을 <span className="text-sunset">환영합니다 🦘</span></Ko>
          </h1>

          <p className="text-base md:text-lg text-eucalypt/70 dark:text-dark-muted/70 mb-5 max-w-md mx-auto">
            <En>Your friendly guide to Aussie English, renting, working, studying, and everything in between.</En>
            <Ko>호주 영어, 임대, 취업, 대학생활 등 모든 것을 안내하는 친근한 가이드입니다.</Ko>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/aussie-english" className="btn-gradient">
              <En>Start with Aussie English</En>
              <Ko>호주 영어부터 시작하기</Ko>
              <Icons.ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
                <div className={`w-12 h-12 ${cat.iconBg} rounded-xl flex items-center justify-center mb-1`}>
                  {(() => { const IconComp = (Icons as unknown as Record<string, React.ComponentType<{className?: string}>>)[cat.icon]; return IconComp ? <IconComp className={`w-6 h-6 ${cat.accent}`} /> : null; })()}
                </div>
                <h3 className={`font-bold text-base ${cat.accent}`}><En>{cat.title}</En><Ko>{cat.koTitle}</Ko></h3>
                <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60 leading-snug"><En>{cat.desc}</En><Ko>{cat.koDesc}</Ko></p>
                <div className="mt-auto pt-1">
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold ${cat.accent} group-hover:gap-2 transition-all`}><En>Explore</En><Ko>둘러보기</Ko><Icons.ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
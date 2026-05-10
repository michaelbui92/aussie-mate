"use client";
import Link from "next/link";
import Quokka from "./Quokka";

const categories = [
  {
    href: "/aussie-english",
    emoji: "💬",
    title: "Aussie English",
    desc: "Decode Australian slang and phrases",
    color: "bg-sunset/10 border-sunset/30",
    accent: "text-sunset",
  },
  {
    href: "/apartment",
    emoji: "🏠",
    title: "Apartment Guide",
    desc: "Renting in NSW, explained simply",
    color: "bg-sage/10 border-sage/30",
    accent: "text-sage",
  },
  {
    href: "/workplace",
    emoji: "💼",
    title: "Workplace",
    desc: "Australian work culture and your rights",
    color: "bg-coast/10 border-coast/30",
    accent: "text-coast",
  },
  {
    href: "/study",
    emoji: "🎓",
    title: "Study",
    desc: "University and academic life in Australia",
    color: "bg-purple-500/10 border-purple-500/30",
    accent: "text-purple-600 dark:text-purple-400",
  },
  {
    href: "/tourist",
    emoji: "🏖️",
    title: "Tourist",
    desc: "Sydney and NSW for short-term visitors",
    color: "bg-yellow-400/10 border-yellow-400/30",
    accent: "text-yellow-600 dark:text-yellow-400",
  },
  {
    href: "/resources",
    emoji: "🔗",
    title: "Resources",
    desc: "Government services and community links",
    color: "bg-rose-400/10 border-rose-400/30",
    accent: "text-rose-500 dark:text-rose-400",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-16 pb-24 px-4">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-8xl">🦘</div>
          <div className="absolute top-20 right-20 text-6xl">🌿</div>
          <div className="absolute bottom-10 left-1/4 text-7xl">☀️</div>
        </div>

        <div className="max-w-2xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-sunset/10 border border-sunset/20 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
            <span className="text-sunset text-sm font-semibold">New in Australia?</span>
            <span className="text-eucalypt/50 text-sm">We've got you</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-eucalypt dark:text-white mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Welcome to<br />
            <span className="text-sunset">Australia 🦘</span>
          </h1>

          <p className="text-lg text-eucalypt/70 dark:text-dark-muted/70 mb-10 max-w-md mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Your friendly guide to Aussie English, renting, working, studying, and everything in between.
          </p>

          {/* Quokka */}
          <div className="mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Quokka scene="default" />
          </div>

          {/* Search */}
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/aussie-english"
              className="inline-flex items-center gap-3 bg-white dark:bg-dark-surface border border-sand dark:border-dark-border rounded-2xl px-5 py-3.5 shadow-lg hover:shadow-xl hover:border-sunset/40 transition-all w-full max-w-md"
            >
              <svg className="w-5 h-5 text-sunset shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-eucalypt/40 dark:text-dark-muted/40 text-sm flex-1 text-left">
                Search Aussie slang... e.g. "no worries"
              </span>
              <span className="text-xs font-semibold bg-sunset text-white rounded-lg px-3 py-1">Search</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="max-w-4xl mx-auto px-4 pb-20 -mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`group ${cat.color} border rounded-2xl p-5 flex flex-col gap-2 hover:shadow-lg transition-all animate-fade-up hover:-translate-y-0.5`}
              style={{ animationDelay: `${0.5 + i * 0.07}s` }}
            >
              <div className="text-3xl">{cat.emoji}</div>
              <h3 className={`font-bold text-base ${cat.accent}`}>{cat.title}</h3>
              <p className="text-sm text-eucalypt/60 dark:text-dark-muted/60 leading-snug">{cat.desc}</p>
              <div className="mt-auto pt-1">
                <span className={`text-xs font-semibold ${cat.accent} group-hover:underline`}>Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom tagline */}
      <section className="bg-sage/10 dark:bg-sage/5 border-t border-sage/20 py-10 text-center">
        <p className="text-sm text-eucalypt/50 dark:text-dark-muted/50 max-w-sm mx-auto px-4">
          Made with 🦘 for everyone new to Australia — no matter where you're from.
        </p>
      </section>
    </div>
  );
}

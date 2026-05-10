"use client";
import { useState, useMemo } from "react";
import { resources } from "@/lib/resources";

type ActiveCategory = "government" | "education" | "healthcare" | "emergency";

const categories: { value: ActiveCategory | "all"; label: string; emoji: string }[] = [
  { value: "all", label: "All", emoji: "🌏" },
  { value: "government", label: "Government", emoji: "🏛️" },
  { value: "education", label: "Education", emoji: "🎓" },
  { value: "healthcare", label: "Healthcare", emoji: "🏥" },
  { value: "emergency", label: "Emergency", emoji: "🚨" },
];

const categoryColors: Record<ActiveCategory, { bg: string; border: string; text: string }> = {
  government: { bg: "bg-coast/10", border: "border-coast/30", text: "text-coast" },
  education: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-600 dark:text-purple-400" },
  healthcare: { bg: "bg-sage/10", border: "border-sage/30", text: "text-sage" },
  emergency: { bg: "bg-sunset/10", border: "border-sunset/30", text: "text-sunset" },
};

function ExternalLinkIcon() {
  return (
    <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      if (r.category === "korean-community") return false;
      const matchesCategory = activeCategory === "all" || r.category === activeCategory;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.korean.includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: 0 };
    for (const r of resources) {
      if (r.category !== "korean-community") {
        c.all = (c.all || 0) + 1;
        c[r.category] = (c[r.category] || 0) + 1;
      }
    }
    return c;
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-eucalypt dark:text-white mb-2">
            Resources 🔗
          </h1>
          <p className="text-eucalypt/60 dark:text-dark-muted/60">
            Official contacts, community groups, and useful links
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.value
                  ? "bg-sunset text-white shadow-sm"
                  : "bg-white dark:bg-dark-surface border border-sand dark:border-dark-border text-eucalypt/60 dark:text-dark-muted hover:border-sunset/40 hover:text-sunset"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
              <span className={`text-xs ${activeCategory === cat.value ? "opacity-70" : "opacity-40"}`}>
                {counts[cat.value] || 0}
              </span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-eucalypt/30 dark:text-dark-muted/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white dark:bg-dark-surface border border-sand dark:border-dark-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-eucalypt dark:text-white placeholder:text-eucalypt/30 dark:placeholder:text-dark-muted/30 focus:outline-none focus:border-sunset/50 focus:ring-1 focus:ring-sunset/20 transition-all"
          />
        </div>

        {/* Results count */}
        <p className="text-xs text-eucalypt/40 dark:text-dark-muted/40 px-0.5">
          {filtered.length} {filtered.length === 1 ? "resource" : "resources"}
          {activeCategory !== "all" && ` in ${categories.find((c) => c.value === activeCategory)?.label}`}
          {search && ` matching "${search}"`}
        </p>

        {/* Resource list */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-eucalypt/50 dark:text-dark-muted/50 text-sm">No resources found</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("all"); }}
              className="mt-3 text-sm text-sunset hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filtered.map((resource, i) => {
              const colors = categoryColors[resource.category as ActiveCategory];
              return (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-dark-card border border-sand dark:border-dark-border rounded-2xl p-4 hover:shadow-md hover:border-sunset/30 transition-all animate-fade-up group"
                  style={{ animationDelay: `${i * 0.03}s` }}
                >
                  <div className="flex items-start gap-3">
                    {/* Category badge */}
                    <div className={`shrink-0 mt-0.5 px-2 py-1 rounded-md text-xs font-semibold ${colors.bg} ${colors.border} border ${colors.text}`}>
                      {categories.find((c) => c.value === resource.category)?.emoji}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <h3 className="font-bold text-sm text-eucalypt dark:text-white group-hover:text-sunset transition-colors">
                          {resource.name}
                        </h3>
                        <ExternalLinkIcon />
                      </div>
                      <p className="text-xs text-eucalypt/60 dark:text-dark-muted/60 leading-relaxed">
                        {resource.description}
                      </p>
                      <p className="text-xs text-sage font-medium mt-1 leading-relaxed">
                        {resource.korean}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* Emergency banner */}
        {activeCategory === "all" && (
          <div className="bg-sunset/5 border border-sunset/20 rounded-2xl p-5 mt-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🚨</span>
              <h3 className="font-bold text-sm text-sunset">In an emergency?</h3>
            </div>
            <p className="text-xs text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed mb-2">
              For life-threatening emergencies in Australia, call <span className="font-bold text-sunset">000</span> immediately. Ask for police, fire, or ambulance. If you're not fluent in English, stay on the line and say your language — they will connect an interpreter.
            </p>
            <button
              onClick={() => setActiveCategory("emergency")}
              className="text-xs font-semibold text-sunset hover:underline"
            >
              View all emergency contacts →
            </button>
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-center text-xs text-eucalypt/30 dark:text-dark-muted/30 pt-2 pb-4">
          Made with 🦘 for everyone new to Australia
        </p>
      </div>
    </div>
  );
}
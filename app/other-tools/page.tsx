import Link from "next/link";

const tools = [
  {
    id: "drive-with-bui",
    emoji: "🚗",
    title: "Drive with Bui",
    desc: "Sydney's friendliest driving school. Learn to pass your driving test with patient, experienced instruction covering all test routes and requirements.",
    url: "https://drivewithbui.com",
    badge: "Driving School",
    color: "bg-sunset/10 border-sunset/30",
    accent: "text-sunset",
    highlight: "Based in Sydney — book your first lesson today",
    features: [
      "All Sydney test routes covered",
      "Dual-controlled car for your safety",
      "Flexible scheduling — early mornings to evenings",
      "Patient, experienced instructor",
      "Pass your P-plate test with confidence",
    ],
  },
  {
    id: "study-buddy",
    emoji: "📚",
    title: "Study Buddy",
    desc: "A smart study companion app — flashcard decks, spaced repetition, progress tracking. Coming soon — built to help international students study smarter, not harder.",
    url: "https://study-buddy-two-orpin.vercel.app",
    badge: "Live",
    color: "bg-sage/10 border-sage/30",
    accent: "text-sage",
    highlight: "Launching 2026 — get notified when it goes live",
    features: [
      "AI-powered flashcard decks",
      "Spaced repetition for long-term memory",
      "Progress tracking and streaks",
      "Korean and English language support",
      "Designed for international students",
    ],
  },
];

export default function OtherToolsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-cream via-sand to-cream dark:from-darkbg dark:via-dark-surface dark:to-darkbg pt-10 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-sunset/10 border border-sunset/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-semibold text-sunset">Made by Michael Bui</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-eucalypt dark:text-white mb-3">
            Other Tools 🛠️
          </h1>
          <p className="text-base text-eucalypt/60 dark:text-dark-muted/60">
            Other things I've built to help people navigate life in Australia
          </p>
        </div>
      </section>

      {/* Tools */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-5">
        {tools.map((tool, i) => (
          <div
            key={tool.id}
            className={`${tool.color} border rounded-2xl p-6 card-hover`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">{tool.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h2 className={`font-bold text-xl ${tool.accent}`}>{tool.title}</h2>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tool.accent} border-current/20 bg-white/50 dark:bg-dark-surface/50`}>
                    {tool.badge}
                  </span>
                </div>
                <p className="text-sm text-eucalypt/70 dark:text-dark-muted/70 leading-relaxed mb-1">
                  {tool.desc}
                </p>
                <p className={`text-xs font-semibold ${tool.accent} italic`}>
                  ✦ {tool.highlight}
                </p>
              </div>
            </div>

            {/* Feature list */}
            <ul className="space-y-1.5 mb-5">
              {tool.features.map((f, fi) => (
                <li key={fi} className="flex items-start gap-2 text-sm text-eucalypt/60 dark:text-dark-muted/60">
                  <span className="text-sage shrink-0 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            {tool.badge === "Coming Soon" ? (
              <span className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-xl bg-dark-surface/50 text-dark-muted/50 cursor-not-allowed">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Coming Soon
              </span>
            ) : (
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-xl transition-all btn-press shadow-sm bg-sunset text-white hover:bg-sunset-light`}
              >
                Visit {tool.title}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        ))}

        {/* Back home */}
        <div className="text-center pt-2">
          <Link
            href="/"
            className="text-sm text-eucalypt/40 dark:text-dark-muted/40 hover:text-sunset transition-colors link-slide"
          >
            ← Back to AussieMate home
          </Link>
        </div>
      </div>
    </div>
  );
}
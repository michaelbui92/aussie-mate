import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sage/10 dark:bg-sage/5 border-t border-sage/20 py-8 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">🦘</span>
          <span className="text-sunset text-xl font-bold">AussieMate</span>
        </div>
        <p className="text-sm text-eucalypt/50 dark:text-dark-muted/50 mb-3">
          Made with 🦘 for everyone new to Australia
        </p>
        {/* AI Disclaimer */}
        <div className="bg-sunset/5 border border-sunset/20 rounded-xl px-4 py-3 mb-4 text-xs text-eucalypt/60 dark:text-dark-muted/60 max-w-md mx-auto">
          <p className="font-semibold text-sunset mb-1">⚠️ Disclaimer</p>
          <p>Information on this site is AI-generated and may not always be accurate or up to date. Always verify with official government sources.</p>
          <p className="mt-1">This site aims to be community-owned. If you see anything wrong, want to add content, or have suggestions — let Michael know. Together we can make it better. 🙌</p>
        </div>
        <div className="flex items-center justify-center gap-4 text-xs text-eucalypt/40 dark:text-dark-muted/40 flex-wrap">
          <Link href="/" className="hover:text-sunset transition-colors">Home</Link>
          <Link href="/aussie-english" className="hover:text-sunset transition-colors">Aussie English</Link>
          <Link href="/finance" className="hover:text-sunset transition-colors">Finance</Link>
          <Link href="/apartment" className="hover:text-sunset transition-colors">Apartment Guide</Link>
          <Link href="/transport" className="hover:text-sunset transition-colors">Transport</Link>
          <Link href="/beyond-sydney" className="hover:text-sunset transition-colors">Beyond Sydney</Link>
          <Link href="/workplace" className="hover:text-sunset transition-colors">Workplace</Link>
          <Link href="/study" className="hover:text-sunset transition-colors">Study</Link>
          <Link href="/resources" className="hover:text-sunset transition-colors">Resources</Link>
          <Link href="/about" className="hover:text-sunset transition-colors">About</Link>
        </div>
        <p className="text-xs text-eucalypt/30 dark:text-dark-muted/30 mt-3">© 2026 AussieMate</p>
      </div>
    </footer>
  );
}
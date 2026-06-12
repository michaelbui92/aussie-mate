import Link from "next/link";

export default function Footer() {
  return (
    <footer className="glass-section border-t border-sage/20 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <div className="glass-card rounded-2xl px-4 py-5 mb-4 inline-block">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">🦘</span>
            <span className="text-sunset text-xl font-bold">AussieMate</span>
          </div>
          <p className="text-sm text-eucalypt/50 dark:text-dark-muted/50 mb-3">
            Made with 🦘 for everyone new to Australia
          </p>
          {/* AI Disclaimer */}
          <div className="bg-sunset/5 border border-sunset/20 rounded-xl px-4 py-3 text-xs text-eucalypt/60 dark:text-dark-muted/60 max-w-md mx-auto">
            <p className="font-semibold text-sunset mb-1">⚠️ Disclaimer</p>
            <p>Information on this site is AI-generated and may not always be accurate or up to date. Always verify with official government sources.</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-6 gap-y-2 text-xs text-eucalypt/50 dark:text-dark-muted/50 flex-wrap">
          <Link href="/" className="hover:text-sunset transition-colors">Home</Link>
          <Link href="/about" className="hover:text-sunset transition-colors">About</Link>
          <a href="https://drivewithbui.com" target="_blank" rel="noopener noreferrer" className="hover:text-sunset transition-colors">Drive with Bui</a>
          <a href="https://study-buddy-two-orpin.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-sunset transition-colors">Study Buddy</a>
        </div>
        <p className="text-xs text-eucalypt/30 dark:text-dark-muted/30 mt-3">© 2026 AussieMate</p>
      </div>
    </footer>
  );
}
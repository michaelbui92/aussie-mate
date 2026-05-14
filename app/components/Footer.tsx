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
        <div className="flex items-center justify-center gap-4 text-xs text-eucalypt/40 dark:text-dark-muted/40 flex-wrap">
          <Link href="/" className="hover:text-sunset transition-colors">Home</Link>
          <Link href="/aussie-english" className="hover:text-sunset transition-colors">Aussie English</Link>
          <Link href="/apartment" className="hover:text-sunset transition-colors">Apartment Guide</Link>
          <Link href="/workplace" className="hover:text-sunset transition-colors">Workplace</Link>
          <Link href="/study" className="hover:text-sunset transition-colors">Study</Link>
          <Link href="/tourist" className="hover:text-sunset transition-colors">Tourist</Link>
          <Link href="/resources" className="hover:text-sunset transition-colors">Resources</Link>
          <Link href="/healthcare" className="hover:text-sunset transition-colors">Healthcare</Link>
          <Link href="/banking" className="hover:text-sunset transition-colors">Banking</Link>
        </div>
        <p className="text-xs text-eucalypt/30 dark:text-dark-muted/30 mt-3">© 2026 AussieMate</p>
      </div>
    </footer>
  );
}
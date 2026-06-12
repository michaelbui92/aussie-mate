"use client";
import { usePathname } from "next/navigation";

// CSS-only page transition (replaces framer-motion AnimatePresence, ~50KB chunk).
// The CSS keyframe runs on mount; the `key={pathname}` re-mounts on route change.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-in">
      {children}
    </div>
  );
}

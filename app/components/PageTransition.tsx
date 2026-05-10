"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * PageTransition: triggers a CSS animation on every route change.
 * Add "page-enter-active" to any wrapper element that should animate in.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const key = pathname;

  useEffect(() => {
    // Re-trigger animation by removing and re-adding the class
    document.querySelectorAll('.page-enter').forEach((el) => {
      el.classList.remove('page-enter-active');
      // Force reflow
      void (el as HTMLElement).offsetWidth;
      el.classList.add('page-enter-active');
    });
  }, [key]);

  return (
    <div key={key} className="page-enter page-enter-active" style={{ display: 'contents' }}>
      {children}
    </div>
  );
}
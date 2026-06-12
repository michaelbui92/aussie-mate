"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global scroll animation driver.
 * Adds "in-view" class to .reveal elements as they scroll into the
 * viewport (IntersectionObserver). Re-runs on pathname change so that
 * newly-mounted page content gets observed on SPA navigation — replaces
 * the previous MutationObserver on document.body which fired on every
 * DOM change.
 */
export default function ScrollAnimations() {
  const pathname = usePathname();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // Run twice: once now (after the new page is mounted), once on the
    // next animation frame in case the page mounts slightly after the
    // effect runs.
    const observe = () => {
      document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => {
        observer.observe(el);
      });
    };
    observe();
    const raf = requestAnimationFrame(observe);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}

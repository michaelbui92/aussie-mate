"use client";
import { useEffect } from "react";

/**
 * Global scroll animation driver.
 * Runs once on mount — adds "in-view" class to .reveal elements
 * as they scroll into the viewport (IntersectionObserver).
 */
export default function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const observe = () => {
      document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => {
        observer.observe(el);
      });
    };

    observe();

    // Re-observe when DOM changes (for SPA navigation)
    const mutation = new MutationObserver(observe);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
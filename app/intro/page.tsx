"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const SECTIONS = [
  {
    img: "/images/unsplash-1506973035872-a4ec16b8e8d9.jpg",
    title: "Welcome to Australia",
    subtitle: "Your guide to living, working, and thriving Down Under",
    gradient: "from-[#0B1120]/80 via-[#0B1120]/40 to-transparent",
  },
  {
    img: "/images/unsplash-1507525428034-b723cf961d3e.jpg",
    title: "Stunning Coastlines",
    subtitle: "From Bondi to Byron — beaches that take your breath away",
    gradient: "from-[#0B1120]/70 via-[#0B1120]/30 to-transparent",
  },
  {
    img: "/images/unsplash-1517048676732-d65bc937f952.jpg",
    title: "Vibrant Cities",
    subtitle: "Sydney, Melbourne, Brisbane — find your home",
    gradient: "from-[#0B1120]/70 via-[#0B1120]/30 to-transparent",
  },
  {
    img: "/images/unsplash-1523059623039-a9ed027e7fad.jpg",
    title: "Endless Adventures",
    subtitle: "Outback, rainforest, reef — Australia is waiting",
    gradient: "from-[#0B1120]/70 via-[#0B1120]/30 to-transparent",
  },
  {
    img: "/images/unsplash-1545324418-cc1a3fa10c00.jpg",
    title: "New Life, New Beginnings",
    subtitle: "Visa, work, study, settle — we've got you covered",
    gradient: "from-[#0B1120]/70 via-[#0B1120]/30 to-transparent",
  },
];

export default function IntroPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionRefs.current;
      const viewportHeight = window.innerHeight;

      sections.forEach((section, i) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distance = (center - viewportCenter) / viewportHeight;

        // Parallax zoom: scale from 1.0 to 1.15 based on scroll position
        const scale = 1 + Math.abs(distance) * 0.15;
        const img = section.querySelector(".parallax-img") as HTMLElement;
        if (img) {
          img.style.transform = `scale(${scale}) translateY(${distance * 10}px)`;
        }

        // Text opacity: fade out when scrolled past
        const text = section.querySelector(".parallax-text") as HTMLElement;
        if (text) {
          const opacity = Math.max(0, 1 - Math.abs(distance) * 1.5);
          text.style.opacity = String(opacity);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="bg-black">
      {SECTIONS.map((section, i) => (
        <div
          key={i}
          ref={(el) => { sectionRefs.current[i] = el; }}
          className="relative h-screen w-full overflow-hidden flex items-center justify-center"
        >
          {/* Background image with parallax zoom */}
          <div
            className="parallax-img absolute inset-0 w-full h-[120%] -top-[10%]"
            style={{
              backgroundImage: `url(${section.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              willChange: "transform",
            }}
          />

          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-b ${section.gradient}`}
          />

          {/* Text content */}
          <div className="parallax-text relative z-10 text-center px-6 max-w-2xl transition-opacity duration-300">
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-4"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}
            >
              {section.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              {section.subtitle}
            </p>

            {/* CTA on last section */}
            {i === SECTIONS.length - 1 && (
              <Link
                href="/"
                className="inline-block mt-8 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #E8722A, #D4A574)",
                  color: "#fff",
                  boxShadow: "0 0 30px rgba(212, 165, 116, 0.35)",
                }}
              >
                Start Exploring →
              </Link>
            )}
          </div>

          {/* Scroll indicator on first section */}
          {i === 0 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { En, Ko } from "./LangBlocks";

type Bilingual = { en: string; ko: string };

export type PageHeroProps = {
  eyebrow: Bilingual;
  title: Bilingual;
  lead: Bilingual;
  image: string;
  imageAlt: string;
  primaryCTA: { label: Bilingual; href: string };
  secondaryCTA?: { label: Bilingual; href: string };
  /**
   * Three floating persona chips anchored to the bottom of the hero.
   * Click a chip to smooth-scroll to the matching section id.
   * Mirrors the homepage's persona-stage selector so inner pages
   * feel like the same product.
   */
  personas?: { sectionId: string; label: Bilingual }[];
  /** Section id to scroll to when the user clicks the "scroll" cue at the bottom. */
  scrollCueTarget?: string;
};

/**
 * PageHero — full-bleed parallax image with bilingual eyebrow / title / lead,
 * dual CTA buttons (sunset gradient primary, glass secondary), persona chips,
 * and a scroll cue. Designed for the 5 inner content pages to share the same
 * hero vocabulary as the homepage.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  primaryCTA,
  secondaryCTA,
  personas,
  scrollCueTarget,
}: PageHeroProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Parallax — image moves at 40% of scroll speed, matches the homepage.
  useEffect(() => {
    const onScroll = () => {
      const el = imgRef.current;
      if (el) {
        el.style.transform = `translate3d(0, ${window.scrollY * 0.4}px, 0) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePersonaClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleScrollCue = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!scrollCueTarget) return;
    e.preventDefault();
    const el = document.getElementById(scrollCueTarget);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="relative h-[60svh] min-h-[480px] max-h-[720px] overflow-hidden">
      <Image
        ref={imgRef}
        src={image}
        alt={imageAlt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={85}
        className="hero-parallax object-cover object-center scale-105 will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/75" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.35em] text-white/85 mb-4">
          <En>{eyebrow.en}</En>
          <Ko>{eyebrow.ko}</Ko>
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight mb-5 max-w-4xl">
          <En>{title.en}</En>
          <Ko>{title.ko}</Ko>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed font-light">
          <En>{lead.en}</En>
          <Ko>{lead.ko}</Ko>
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={primaryCTA.href}
            className="group inline-flex items-center justify-center gap-2 bg-sunset hover:bg-sunset-light text-white px-7 py-3.5 text-sm font-semibold tracking-wide transition-all rounded-full shadow-lg shadow-sunset/30 hover:shadow-xl hover:shadow-sunset/40"
          >
            <En>{primaryCTA.label.en}</En>
            <Ko>{primaryCTA.label.ko}</Ko>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-7 py-3.5 text-sm font-semibold tracking-wide transition-all rounded-full"
            >
              <En>{secondaryCTA.label.en}</En>
              <Ko>{secondaryCTA.label.ko}</Ko>
            </Link>
          )}
        </div>
      </div>

      {/* Persona chips — floating at the bottom of the hero */}
      {personas && personas.length > 0 && (
        <div className="absolute bottom-14 left-0 right-0 px-4 flex justify-center z-10">
          <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 p-1.5 rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 max-w-full">
            {personas.slice(0, 3).map((p) => (
              <a
                key={p.sectionId}
                href={`#${p.sectionId}`}
                onClick={(e) => handlePersonaClick(e, p.sectionId)}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-white/85 hover:text-white hover:bg-white/15 transition-all"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/55 group-hover:text-sunset-light transition-colors">
                  <En>{p.label.en}</En>
                  <Ko>{p.label.ko}</Ko>
                </span>
                <span className="w-1 h-1 rounded-full bg-white/40" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Scroll cue — tiny indicator at the very bottom */}
      {scrollCueTarget && (
        <a
          href={`#${scrollCueTarget}`}
          onClick={handleScrollCue}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/60 pointer-events-auto"
          aria-label="Scroll to content"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            <En>Scroll</En>
            <Ko>스크롤</Ko>
          </span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </a>
      )}
    </section>
  );
}

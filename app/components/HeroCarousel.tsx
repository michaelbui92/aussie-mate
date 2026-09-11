"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const HERO_IMAGES = [
  {
    src: "/images/unsplash-1506973035872-a4ec16b8e8d9.jpg",
    alt: "Sydney Opera House at dusk",
  },
  {
    src: "/images/bluemountains_three_sisters.jpg",
    alt: "The Three Sisters, Blue Mountains",
  },
  {
    src: "/images/bondi_aerial.jpg",
    alt: "Bondi Beach, Sydney coastline",
  },
  {
    src: "/images/hunter_valley_vineyard.jpg",
    alt: "Hunter Valley vineyards",
  },
];

export default function HeroCarousel({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[100svh] min-h-[680px] max-h-[1000px] overflow-hidden">
      {HERO_IMAGES.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority={i === 0}
          fetchPriority={i === 0 ? "high" : "auto"}
          sizes="100vw"
          quality={85}
          className={`object-cover object-left md:object-center transition-opacity duration-1000 ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />
      
      {/* Content overlay — headings, CTAs, search */}
      {children}
      
      {/* Image indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === active
                ? "bg-white w-6"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

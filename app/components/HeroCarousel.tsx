"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLang } from "@/components/LangBlocks";
import { pickLocale, type Localized } from "@/lib/locale";

// Alt text is one string per image, so unlike the <En>/<Ja>/<Zh>/<Ko> blocks it
// cannot render every language at once and let the reader's CSS choose between
// them -- it has to be picked from the reader's locale here. Same pattern as the
// destination card alt text in HomePage.
const HERO_IMAGES: { src: string; alt: Localized }[] = [
  {
    src: "/images/unsplash-1506973035872-a4ec16b8e8d9.jpg",
    alt: {
      en: "Sydney Opera House at dusk",
      ja: "\u5915\u66ae\u308c\u306e\u30b7\u30c9\u30cb\u30fc\u30fb\u30aa\u30da\u30e9\u30cf\u30a6\u30b9",
      zh: "\u9ec4\u660f\u65f6\u5206\u7684\u6089\u5c3c\u6b4c\u5267\u9662",
      ko: "\ud574\uc9c8\ub155\uc758 \uc2dc\ub4dc\ub2c8 \uc624\ud398\ub77c \ud558\uc6b0\uc2a4",
    },
  },
  {
    src: "/images/bluemountains_three_sisters.jpg",
    alt: {
      en: "The Three Sisters, Blue Mountains",
      ja: "\u30d6\u30eb\u30fc\u30fb\u30de\u30a6\u30f3\u30c6\u30f3\u30ba\u306e\u30b9\u30ea\u30fc\u30fb\u30b7\u30b9\u30bf\u30fc\u30ba",
      zh: "\u84dd\u5c71\u7684\u4e09\u59d0\u59b9\u5cf0",
      ko: "\ube14\ub8e8\ub9c8\uc6b4\ud2f4\uc758 \uc0bc\uc790\ub9e4",
    },
  },
  {
    src: "/images/bondi_aerial.jpg",
    alt: {
      en: "Bondi Beach, Sydney coastline",
      ja: "\u30b7\u30c9\u30cb\u30fc\u6d77\u5cb8\u6cbf\u3044\u306e\u30dc\u30f3\u30c0\u30a4\u30fb\u30d3\u30fc\u30c1",
      zh: "\u6089\u5c3c\u6d77\u5cb8\u7684\u90a6\u8fea\u6d77\u6ee9",
      ko: "\uc2dc\ub4dc\ub2c8 \ud574\uc548\uc758 \ubcf8\ub2e4\uc774 \ube44\uce58",
    },
  },
  {
    src: "/images/hunter_valley_vineyard.jpg",
    alt: {
      en: "Hunter Valley vineyards",
      ja: "\u30cf\u30f3\u30bf\u30fc\u30fb\u30d0\u30ec\u30fc\u306e\u3076\u3069\u3046\u7551",
      zh: "\u730e\u4eba\u8c37\u7684\u8461\u8404\u56ed",
      ko: "\ud5cc\ud130 \ubc38\ub9ac\uc758 \ud3ec\ub3c4\ubc2d",
    },
  },
];

// The dots' aria-label is a sentence with the slide number inside it, so each
// locale gets a template and the number is substituted when it renders.
const SHOW_IMAGE: Localized = {
  en: "Show image {n}",
  ja: "\u753b\u50cf {n} \u3092\u8868\u793a",
  zh: "\u663e\u793a\u56fe\u7247 {n}",
  ko: "\uc774\ubbf8\uc9c0 {n} \ubcf4\uae30",
};

export default function HeroCarousel({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const { lang } = useLang();

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
          alt={pickLocale(lang, img.alt)}
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
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/45 to-black/75" />
      
      {/* Content overlay — headings, CTAs, search */}
      {children}
      
      {/* Image indicators */}
      <div className="hero-dots absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={pickLocale(lang, SHOW_IMAGE).replace("{n}", String(i + 1))}
            className={`relative w-2 h-2 rounded-full transition-all duration-500 after:absolute after:content-[''] after:-inset-2.5 ${
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

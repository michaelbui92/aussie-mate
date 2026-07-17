"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CHAPTERS = [
  {
    number: "01 / 05",
    subtitle: "THE DECISION",
    heading: "A new life on the other side of the world.",
    body: "You've made the call. Australia. The land of beaches, career opportunities, and a fresh start. The visa applications are in motion, the questions are piling up, and the excitement is real. This is where we start.",
    image: "/images/unsplash-1506973035872-a4ec16b8e8d9.jpg",
  },
  {
    number: "02 / 05",
    subtitle: "THE ARRIVAL",
    heading: "Stepping off the plane. Jet lag, sunshine, and a new address.",
    body: "The first week is a blur — airport queues, a temporary SIM card, a bed in a shared house you found on Flatmates. You're figuring out Opal cards, Coles self-checkout, and why everyone says \"no worries\" to everything. You're here. Now what?",
    image: "/images/unsplash-1507525428034-b723cf961d3e.jpg",
  },
  {
    number: "03 / 05",
    subtitle: "THE SETTLE",
    heading: "Bank account. TFN. Job. Slowly, it starts to feel like home.",
    body: "You've opened a bank account, applied for your TFN, and maybe landed a job. The city is starting to make sense. You know which train line goes where, your local cafe knows your order, and you've made a friend or two. The chaos of the first month has settled into a rhythm.",
    image: "/images/unsplash-1517048676732-d65bc937f952.jpg",
  },
  {
    number: "04 / 05",
    subtitle: "THE EXPLORE",
    heading: "Weekend trips. Hidden gems. The Australia you came to see.",
    body: "Now that you're settled, it's time to explore. Weekend trips to the Blue Mountains, a road trip down the coast, a flight to Melbourne for the laneways and coffee. You're no longer a tourist — you're living here. And there's so much more to see.",
    image: "/images/unsplash-1523059623039-a9ed027e7fad.jpg",
  },
  {
    number: "05 / 05",
    subtitle: "THE HOME",
    heading: "One day you realise — this is home now.",
    body: "It happens quietly. You stop comparing everything to back home. You say \"arvo\" without thinking. You have a favourite beach, a regular pub, and a group of friends who feel like family. Australia isn't just where you live anymore. It's where you belong.",
    image: "/images/unsplash-1545324418-cc1a3fa10c00.jpg",
  },
];

export default function IntroPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0B1120] min-h-screen">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-white/10">
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${((activeIndex + 1) / CHAPTERS.length) * 100}%`,
            background: "linear-gradient(90deg, #E8722A, #D4A574)",
          }}
        />
      </div>

      {/* Section navigation dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {CHAPTERS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background: i === activeIndex ? "#D4A574" : "rgba(255,255,255,0.2)",
              transform: i === activeIndex ? "scale(1.5)" : "scale(1)",
            }}
          />
        ))}
      </div>

      {CHAPTERS.map((chapter, i) => (
        <section
          key={i}
          ref={(el) => { sectionRefs.current[i] = el; }}
          data-index={i}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${chapter.image})` }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/90 via-[#0B1120]/60 to-[#0B1120]/30" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto px-8 py-20">
            <div
              className={`transition-all duration-700 ${
                i === activeIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-40 translate-y-4"
              }`}
            >
              <span className="text-[#D4A574] text-sm font-mono tracking-[0.2em]">
                {chapter.number}
              </span>
              <p className="text-white/50 text-xs tracking-[0.3em] uppercase mt-4">
                {chapter.subtitle}
              </p>
              <h2
                className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight"
                style={{ fontFamily: "Fraunces, Georgia, serif" }}
              >
                {chapter.heading}
              </h2>
              <p className="text-white/70 text-lg mt-6 max-w-xl leading-relaxed">
                {chapter.body}
              </p>

              {/* CTA on last section */}
              {i === CHAPTERS.length - 1 && (
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
          </div>
        </section>
      ))}
    </div>
  );
}
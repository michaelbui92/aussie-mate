// app/opengraph-image.tsx — auto-generated Open Graph preview image (1200x630).
// Uses the Sydney Opera House at dusk hero photo as background with
// AussieGuides branding overlaid.

import { ImageResponse } from "next/og";
import { SITE_URL } from "@/lib/site";

export const runtime = "edge";
export const alt = "AussieGuides — Travel & Living Guide for Sydney and NSW (English / 한국어)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Fetch the hero image and convert to base64 for the background
  const heroResponse = await fetch(
    new URL("/images/unsplash-1506973035872-a4ec16b8e8d9.jpg", SITE_URL)
  );
  const heroBuffer = await heroResponse.arrayBuffer();
  const base64 = Buffer.from(heroBuffer).toString("base64");
  const dataUri = `data:image/jpeg;base64,${base64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${dataUri})`,
          backgroundSize: "1200px 630px",
          backgroundPosition: "center",
          fontFamily: "serif",
          color: "#ffffff",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Dark overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
            display: "flex",
          }}
        />

        {/* Main wordmark */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: 30,
            display: "flex",
            position: "relative",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          AussieGuides
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 38,
            lineHeight: 1.3,
            textAlign: "center",
            maxWidth: 900,
            opacity: 0.95,
            display: "flex",
            position: "relative",
            textShadow: "0 1px 4px rgba(0,0,0,0.5)",
          }}
        >
          Travel & Living Guide for Sydney and NSW
        </div>

        {/* Bilingual tag */}
        <div
          style={{
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: 0.8,
            marginTop: 20,
            display: "flex",
            position: "relative",
            textShadow: "0 1px 4px rgba(0,0,0,0.5)",
          }}
        >
          English / 한국어
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 22,
            letterSpacing: 2,
            opacity: 0.7,
            display: "flex",
            textShadow: "0 1px 4px rgba(0,0,0,0.5)",
          }}
        >
          youraussieguides.com
        </div>
      </div>
    ),
    { ...size }
  );
}
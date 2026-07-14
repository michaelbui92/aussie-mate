import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Allow Next/Image to optimize remote images from Unsplash.
  // Without this, <Image src="https://images.unsplash.com/..." /> errors at build.
  images: {},
  async redirects() {
    return [
      // The old /journey/visiting page was renamed to /journey/before-you-come
      // and its day-one content merged into /journey/arrived. Send old links
      // to the arrived page (where the day-one content lives) and let
      // /journey/before-you-come handle pre-arrival planning from the hub.
      {
        source: "/journey/visiting",
        destination: "/journey/arrived",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

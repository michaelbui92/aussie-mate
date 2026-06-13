import { Geist, Fraunces } from "next/font/google";

export const geistSans = Geist({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap",
});

export const fraunces = Fraunces({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

"use client";
import React from "react";

interface QuokkaProps {
  scene?: "default" | "house" | "desk" | "glasses" | "beach" | "backpack";
  className?: string;
}

export default function Quokka({ scene = "default", className = "" }: QuokkaProps) {
  const size = 120;

  const scenes: Record<string, React.ReactNode> = {
    default: (
      <g>
        {/* Body */}
        <ellipse cx="60" cy="75" rx="28" ry="32" fill="#E8722A" />
        <ellipse cx="60" cy="72" rx="22" ry="26" fill="#FF9A5C" />
        {/* Head */}
        <circle cx="60" cy="42" r="20" fill="#FF9A5C" />
        <circle cx="60" cy="44" r="16" fill="#FDF8F3" />
        {/* Ears */}
        <ellipse cx="45" cy="26" rx="6" ry="10" fill="#E8722A" transform="rotate(-15 45 26)" />
        <ellipse cx="45" cy="26" rx="3" ry="7" fill="#FFB88C" transform="rotate(-15 45 26)" />
        <ellipse cx="75" cy="26" rx="6" ry="10" fill="#E8722A" transform="rotate(15 75 26)" />
        <ellipse cx="75" cy="26" rx="3" ry="7" fill="#FFB88C" transform="rotate(15 75 26)" />
        {/* Eyes */}
        <circle cx="52" cy="40" r="3" fill="#2A3A2A" />
        <circle cx="68" cy="40" r="3" fill="#2A3A2A" />
        <circle cx="53" cy="39" r="1" fill="white" />
        <circle cx="69" cy="39" r="1" fill="white" />
        {/* Nose */}
        <ellipse cx="60" cy="47" rx="3" ry="2" fill="#2A3A2A" />
        {/* Smile */}
        <path d="M55 50 Q60 55 65 50" fill="none" stroke="#2A3A2A" strokeWidth="1.5" strokeLinecap="round" />
        {/* Cheeks */}
        <circle cx="46" cy="46" r="3" fill="#FF8370" opacity="0.4" />
        <circle cx="74" cy="46" r="3" fill="#FF8370" opacity="0.4" />
      </g>
    ),
    house: (
      <g>
        <ellipse cx="60" cy="75" rx="28" ry="32" fill="#E8722A" />
        <ellipse cx="60" cy="72" rx="22" ry="26" fill="#FF9A5C" />
        <circle cx="60" cy="42" r="20" fill="#FF9A5C" />
        <circle cx="60" cy="44" r="16" fill="#FDF8F3" />
        <ellipse cx="45" cy="26" rx="6" ry="10" fill="#E8722A" transform="rotate(-15 45 26)" />
        <ellipse cx="45" cy="26" rx="3" ry="7" fill="#FFB88C" transform="rotate(-15 45 26)" />
        <ellipse cx="75" cy="26" rx="6" ry="10" fill="#E8722A" transform="rotate(15 75 26)" />
        <ellipse cx="75" cy="26" rx="3" ry="7" fill="#FFB88C" transform="rotate(15 75 26)" />
        <circle cx="52" cy="40" r="3" fill="#2A3A2A" />
        <circle cx="68" cy="40" r="3" fill="#2A3A2A" />
        <circle cx="53" cy="39" r="1" fill="white" />
        <circle cx="69" cy="39" r="1" fill="white" />
        <ellipse cx="60" cy="47" rx="3" ry="2" fill="#2A3A2A" />
        <path d="M55 50 Q60 55 65 50" fill="none" stroke="#2A3A2A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="46" cy="46" r="3" fill="#FF8370" opacity="0.4" />
        <circle cx="74" cy="46" r="3" fill="#FF8370" opacity="0.4" />
        {/* Little house above */}
        <rect x="6" y="30" width="22" height="18" rx="2" fill="#6BA5B5" />
        <polygon points="4,30 17,18 30,30" fill="#5B8A5B" />
        <rect x="14" y="38" width="6" height="10" fill="#E8722A" rx="1" />
      </g>
    ),
    desk: (
      <g>
        <ellipse cx="60" cy="75" rx="28" ry="32" fill="#E8722A" />
        <ellipse cx="60" cy="72" rx="22" ry="26" fill="#FF9A5C" />
        <circle cx="60" cy="42" r="20" fill="#FF9A5C" />
        <circle cx="60" cy="44" r="16" fill="#FDF8F3" />
        <ellipse cx="45" cy="26" rx="6" ry="10" fill="#E8722A" transform="rotate(-15 45 26)" />
        <ellipse cx="45" cy="26" rx="3" ry="7" fill="#FFB88C" transform="rotate(-15 45 26)" />
        <ellipse cx="75" cy="26" rx="6" ry="10" fill="#E8722A" transform="rotate(15 75 26)" />
        <ellipse cx="75" cy="26" rx="3" ry="7" fill="#FFB88C" transform="rotate(15 75 26)" />
        <circle cx="52" cy="40" r="3" fill="#2A3A2A" />
        <circle cx="68" cy="40" r="3" fill="#2A3A2A" />
        <circle cx="53" cy="39" r="1" fill="white" />
        <circle cx="69" cy="39" r="1" fill="white" />
        <ellipse cx="60" cy="47" rx="3" ry="2" fill="#2A3A2A" />
        <path d="M55 50 Q60 55 65 50" fill="none" stroke="#2A3A2A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="46" cy="46" r="3" fill="#FF8370" opacity="0.4" />
        <circle cx="74" cy="46" r="3" fill="#FF8370" opacity="0.4" />
        {/* Coffee cup */}
        <rect x="10" y="38" width="14" height="16" rx="2" fill="#5B8A5B" />
        <path d="M24 42 Q30 42 30 48 Q30 54 24 52" fill="none" stroke="#5B8A5B" strokeWidth="2" />
        <rect x="14" y="54" width="6" height="3" rx="1" fill="#5B8A5B" />
      </g>
    ),
    glasses: (
      <g>
        <ellipse cx="60" cy="75" rx="28" ry="32" fill="#E8722A" />
        <ellipse cx="60" cy="72" rx="22" ry="26" fill="#FF9A5C" />
        <circle cx="60" cy="42" r="20" fill="#FF9A5C" />
        <circle cx="60" cy="44" r="16" fill="#FDF8F3" />
        <ellipse cx="45" cy="26" rx="6" ry="10" fill="#E8722A" transform="rotate(-15 45 26)" />
        <ellipse cx="45" cy="26" rx="3" ry="7" fill="#FFB88C" transform="rotate(-15 45 26)" />
        <ellipse cx="75" cy="26" rx="6" ry="10" fill="#E8722A" transform="rotate(15 75 26)" />
        <ellipse cx="75" cy="26" rx="3" ry="7" fill="#FFB88C" transform="rotate(15 75 26)" />
        <circle cx="52" cy="40" r="3" fill="#2A3A2A" />
        <circle cx="68" cy="40" r="3" fill="#2A3A2A" />
        <circle cx="53" cy="39" r="1" fill="white" />
        <circle cx="69" cy="39" r="1" fill="white" />
        <ellipse cx="60" cy="47" rx="3" ry="2" fill="#2A3A2A" />
        <path d="M55 50 Q60 55 65 50" fill="none" stroke="#2A3A2A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="46" cy="46" r="3" fill="#FF8370" opacity="0.4" />
        <circle cx="74" cy="46" r="3" fill="#FF8370" opacity="0.4" />
        {/* Glasses */}
        <circle cx="50" cy="40" r="8" fill="none" stroke="#2A3A2A" strokeWidth="2" />
        <circle cx="70" cy="40" r="8" fill="none" stroke="#2A3A2A" strokeWidth="2" />
        <line x1="58" y1="40" x2="62" y2="40" stroke="#2A3A2A" strokeWidth="2" />
        <line x1="42" y1="38" x2="36" y2="34" stroke="#2A3A2A" strokeWidth="2" />
        <line x1="78" y1="38" x2="84" y2="34" stroke="#2A3A2A" strokeWidth="2" />
      </g>
    ),
    beach: (
      <g>
        {/* Beach background */}
        <rect x="0" y="80" width="120" height="40" fill="#F5EBE0" rx="4" />
        <path d="M0 80 Q30 70 60 80 Q90 90 120 80" fill="#6BA5B5" opacity="0.3" />
        <ellipse cx="60" cy="65" rx="28" ry="32" fill="#E8722A" />
        <ellipse cx="60" cy="62" rx="22" ry="26" fill="#FF9A5C" />
        <circle cx="60" cy="35" r="20" fill="#FF9A5C" />
        <circle cx="60" cy="37" r="16" fill="#FDF8F3" />
        <ellipse cx="45" cy="19" rx="6" ry="10" fill="#E8722A" transform="rotate(-15 45 19)" />
        <ellipse cx="45" cy="19" rx="3" ry="7" fill="#FFB88C" transform="rotate(-15 45 19)" />
        <ellipse cx="75" cy="19" rx="6" ry="10" fill="#E8722A" transform="rotate(15 75 19)" />
        <ellipse cx="75" cy="19" rx="3" ry="7" fill="#FFB88C" transform="rotate(15 75 19)" />
        <circle cx="52" cy="33" r="3" fill="#2A3A2A" />
        <circle cx="68" cy="33" r="3" fill="#2A3A2A" />
        <circle cx="53" cy="32" r="1" fill="white" />
        <circle cx="69" cy="32" r="1" fill="white" />
        <ellipse cx="60" cy="40" rx="3" ry="2" fill="#2A3A2A" />
        <path d="M55 43 Q60 48 65 43" fill="none" stroke="#2A3A2A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="46" cy="39" r="3" fill="#FF8370" opacity="0.4" />
        <circle cx="74" cy="39" r="3" fill="#FF8370" opacity="0.4" />
        {/* Sunglasses */}
        <ellipse cx="50" cy="33" rx="10" ry="6" fill="#2A3A2A" opacity="0.8" />
        <ellipse cx="70" cy="33" rx="10" ry="6" fill="#2A3A2A" opacity="0.8" />
        <line x1="60" y1="33" x2="60" y2="33" stroke="#2A3A2A" strokeWidth="2" />
        <line x1="40" y1="31" x2="35" y2="28" stroke="#2A3A2A" strokeWidth="2" />
        <line x1="80" y1="31" x2="85" y2="28" stroke="#2A3A2A" strokeWidth="2" />
        {/* Water drops */}
        <circle cx="24" cy="62" r="2" fill="#6BA5B5" opacity="0.6" />
        <circle cx="98" cy="58" r="2" fill="#6BA5B5" opacity="0.6" />
        <circle cx="16" cy="74" r="1.5" fill="#6BA5B5" opacity="0.4" />
        <circle cx="104" cy="68" r="1.5" fill="#6BA5B5" opacity="0.4" />
      </g>
    ),
    backpack: (
      <g>
        <ellipse cx="60" cy="75" rx="28" ry="32" fill="#E8722A" />
        <ellipse cx="60" cy="72" rx="22" ry="26" fill="#FF9A5C" />
        <circle cx="60" cy="42" r="20" fill="#FF9A5C" />
        <circle cx="60" cy="44" r="16" fill="#FDF8F3" />
        <ellipse cx="45" cy="26" rx="6" ry="10" fill="#E8722A" transform="rotate(-15 45 26)" />
        <ellipse cx="45" cy="26" rx="3" ry="7" fill="#FFB88C" transform="rotate(-15 45 26)" />
        <ellipse cx="75" cy="26" rx="6" ry="10" fill="#E8722A" transform="rotate(15 75 26)" />
        <ellipse cx="75" cy="26" rx="3" ry="7" fill="#FFB88C" transform="rotate(15 75 26)" />
        <circle cx="52" cy="40" r="3" fill="#2A3A2A" />
        <circle cx="68" cy="40" r="3" fill="#2A3A2A" />
        <circle cx="53" cy="39" r="1" fill="white" />
        <circle cx="69" cy="39" r="1" fill="white" />
        <ellipse cx="60" cy="47" rx="3" ry="2" fill="#2A3A2A" />
        <path d="M55 50 Q60 55 65 50" fill="none" stroke="#2A3A2A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="46" cy="46" r="3" fill="#FF8370" opacity="0.4" />
        <circle cx="74" cy="46" r="3" fill="#FF8370" opacity="0.4" />
        {/* Backpack */}
        <rect x="8" y="36" width="18" height="24" rx="4" fill="#5B8A5B" />
        <rect x="12" y="34" width="10" height="4" rx="2" fill="#4A7A4A" />
        <circle cx="17" cy="48" r="1.5" fill="#2A3A2A" />
        <line x1="17" y1="38" x2="17" y2="45" stroke="#4A7A4A" strokeWidth="2" />
      </g>
    ),
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        {scenes[scene] ?? scenes.default}
      </svg>
    </div>
  );
}

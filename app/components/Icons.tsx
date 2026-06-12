// ============================================
// AussieMate SVG Icons — drop-in replacements for emoji
// Usage A (legacy):  <Icons.ArrowRight className="w-5 h-5" />
// Usage B (preferred, tree-shakable):
//   import { ArrowRight } from "@/components/Icons";
//   <ArrowRight className="w-5 h-5" />
// ============================================
//
// Each icon is a top-level const + named export so unused icons are
// tree-shaken by Webpack/Turbopack. The legacy `Icons` object is
// preserved for backward compatibility with existing call sites.

interface IconProps {
  className?: string;
  strokeWidth?: number;
}

const defaultStroke = 2;

const wrap = (
  paths: React.ReactNode,
  viewBox = "0 0 24 24"
) => {
  const Icon = ({ className = "w-5 h-5", strokeWidth = defaultStroke }: IconProps) => (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
  return Icon;
};

// ── Navigation & Actions ──────────────────────────────────────

export const ArrowRight = wrap(
  <path d="M5 12h14M12 5l7 7-7 7" />
);

export const ArrowLeft = wrap(
  <path d="M19 12H5M12 19l-7-7 7-7" />
);

export const ChevronDown = wrap(
  <path d="M19 9l-7 7-7-7" />
);

export const ChevronRight = wrap(
  <path d="M9 18l6-6-6-6" />
);

export const Check = wrap(
  <path d="M20 6L9 17l-5-5" />
);

export const X = wrap(
  <path d="M18 6L6 18M6 6l12 12" />
);

// ── Content & Info ────────────────────────────────────────────

export const Book = wrap(
  <>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </>
);

export const Globe = wrap(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </>
);

export const Star = wrap(
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
);

export const Info = wrap(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </>
);

export const HelpCircle = wrap(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </>
);

export const ExternalLink = wrap(
  <>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </>
);

export const Link = wrap(
  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
);

// ── Finance & Money ─────────────────────────────────────────

export const Wallet = wrap(
  <>
    <path d="M20 12V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" />
    <path d="M18 12h.01" />
    <path d="M20 17H2" />
  </>
);

export const DollarSign = wrap(
  <>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </>
);

export const CreditCard = wrap(
  <>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </>
);

export const Receipt = wrap(
  <>
    <path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2-3-2z" />
    <line x1="8" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="12" y2="14" />
  </>
);

// ── Transport ────────────────────────────────────────────────

export const Bus = wrap(
  <>
    <path d="M8 6v6" />
    <path d="M16 6v6" />
    <path d="M2 12h20" />
    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    <circle cx="6.5" cy="18.5" r="1.5" />
    <circle cx="17.5" cy="18.5" r="1.5" />
  </>
);

export const Train = wrap(
  <>
    <path d="M4 15.5c0-2 1-3.5 2.5-3.5h11c1.5 0 2.5 1.5 2.5 3.5V19l-1 1v2h-14v-2l-1-1v-3.5z" />
    <path d="M8 15V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7" />
    <circle cx="8" cy="19" r="1" fill="currentColor" />
    <circle cx="16" cy="19" r="1" fill="currentColor" />
  </>
);

export const Car = wrap(
  <>
    <path d="M5 17H3v-5l2.5-5h11l2.5 5v5h-2" />
    <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
    <path d="M3 17h18v-5H3v5z" />
  </>
);

export const MapPin = wrap(
  <>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </>
);

export const Navigation = wrap(
  <polygon points="3 11 22 2 13 21 11 13 3 11" />
);

// ── Work & Career ───────────────────────────────────────────

export const Briefcase = wrap(
  <>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </>
);

export const Users = wrap(
  <>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>
);

export const GraduationCap = wrap(
  <>
    <path d="M22 10l-10-5L2 10l10 5 10-5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </>
);

// ── Home & Living ────────────────────────────────────────────

export const Home = wrap(
  <>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </>
);

export const Building = wrap(
  <>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
  </>
);

// ── Health & Support ─────────────────────────────────────────

export const Heart = wrap(
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
);

export const Phone = wrap(
  <>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </>
);

export const Shield = wrap(
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </>
);

// ── Communication ────────────────────────────────────────────

export const Mail = wrap(
  <>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </>
);

export const Search = wrap(
  <path d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
);

export const Menu = wrap(
  <>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </>
);

// ── General UI ───────────────────────────────────────────────

export const Sun = wrap(
  <>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </>
);

export const Moon = wrap(
  <>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </>
);

export const Clock = wrap(
  <>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </>
);

export const Calendar = wrap(
  <>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </>
);

export const Settings = wrap(
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </>
);

export const Copy = wrap(
  <>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </>
);

export const Plus = wrap(
  <>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </>
);

export const Minus = wrap(
  <line x1="5" y1="12" x2="19" y2="12" />
);

export const Eye = wrap(
  <>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </>
);

// ── Specific AussieMate icons ──────────────────────────────────

/** For Finance — Tax File Number */
export const FileText = wrap(
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </>
);

/** For Resources — Government */
export const Building2 = wrap(
  <>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M12 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
  </>
);

/** For Study — PTE/IELTS */
export const Brain = wrap(
  <>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.54" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.54" />
  </>
);

/** For Transport — Opal card style */
export const CreditCard2 = wrap(
  <>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
    <path d="M7 16h4M13 16h2" />
  </>
);

/** Step indicator helpers */
export const Number = ({ n, className = "w-8 h-8" }: { n: number; className?: string }) => (
  <div
    className={`${className} rounded-full bg-gradient-to-br from-sunset to-sunset-light flex items-center justify-center text-white font-bold text-sm shadow-md`}
    aria-hidden="true"
  >
    {n}
  </div>
);

/** Check/X comparison icons */
export const CheckCircle = wrap(
  <>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </>
);

export const XCircle = wrap(
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </>
);

// ── New AussieMate Icons ────────────────────────────────────────

export const Scale = wrap(
  <>
    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
  </>
);

export const Edit = wrap(
  <>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </>
);

export const Coin = wrap(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12M9 9h6M9 15h4" />
  </>
);

export const ReceiptAlt = wrap(
  <>
    <path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2-3-2z" />
    <line x1="8" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="12" y2="14" />
  </>
);

export const BuildingSkyscraper = wrap(
  <>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
  </>
);

export const Flag = wrap(
  <>
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </>
);

export const ShieldCheck = wrap(
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </>
);

export const Mountain = wrap(
  <>
    <path d="M8 3l4 8 5-5 3 9H1L8 3z" />
    <path d="M4.14 15.08L8 10l3.86 5.08" />
  </>
);

export const Sunrise = wrap(
  <>
    <path d="M17 18a5 5 0 0 0-10 0" />
    <line x1="12" y1="2" x2="12" y2="9" />
    <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
    <line x1="1" y1="18" x2="3" y2="18" />
    <line x1="21" y1="18" x2="23" y2="18" />
    <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
    <line x1="23" y1="22" x2="1" y2="22" />
    <polyline points="8 6 12 2 16 6" />
  </>
);

export const Sunset = wrap(
  <>
    <path d="M17 18a5 5 0 0 0-10 0" />
    <line x1="12" y1="9" x2="12" y2="2" />
    <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
    <line x1="1" y1="18" x2="3" y2="18" />
    <line x1="21" y1="18" x2="23" y2="18" />
    <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
    <line x1="23" y1="22" x2="1" y2="22" />
    <polyline points="8 6 12 10 16 6" />
  </>
);

export const Waves = wrap(
  <>
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
  </>
);

export const Wine = wrap(
  <>
    <path d="M8 22h8M12 11v11M5 3h14l-2 7h-4l-1-2h-4L5 3z" />
    <path d="M5 3c0 5 3 7 7 7s7-2 7-7" />
  </>
);

export const TheaterMasks = wrap(
  <>
    <circle cx="12" cy="8" r="7" />
    <circle cx="12" cy="16" r="7" />
    <path d="M5 8a7 7 0 0 1 14 0M5 16a7 7 0 0 0 14 0" />
  </>
);

export const SurfBoard = wrap(
  <>
    <path d="M4 2l16 20M7 4l-2 4M17 4l2 4" />
    <path d="M2 6c4 1 6 5 8 8l6-4 6 4c2-3 4-7 8-8" />
  </>
);

export const CityScape = wrap(
  <>
    <rect x="1" y="6" width="5" height="16" rx="1" />
    <rect x="8" y="2" width="4" height="20" rx="1" />
    <rect x="14" y="8" width="6" height="14" rx="1" />
    <path d="M1 22h22" />
  </>
);

export const Koala = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="5" cy="10" r="3" />
    <circle cx="19" cy="10" r="3" />
    <ellipse cx="12" cy="13" rx="7" ry="6" />
    <circle cx="9" cy="11" r="1.5" fill="white" />
    <circle cx="15" cy="11" r="1.5" fill="white" />
    <ellipse cx="12" cy="14" rx="2" ry="1.5" />
  </svg>
);

export const Dolphin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M2 12c2-3 5-5 9-4s7 3 10 1l-3-4H8l-2 3c-1 2-2 3-4 4z" />
    <circle cx="7" cy="11" r="1" fill="white" />
    <path d="M2 12l3-2v4l-3-2z" />
  </svg>
);

export const Scooter = wrap(
  <>
    <circle cx="5" cy="17" r="2" />
    <circle cx="19" cy="17" r="2" />
    <path d="M12 17V7l3 2h3M9 17l-4-7" />
  </>
);

export const PersonSpeaking = wrap(
  <>
    <circle cx="12" cy="7" r="4" />
    <path d="M5 22v-2a7 7 0 0 1 14 0v2" />
  </>
);

export const Handshake = wrap(
  <>
    <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    <path d="M9 14l-2 3 2 3M15 14l2 3-2 3M9 7L7 4l4-2 4 2-2 3" />
  </>
);

export const PersonGroup = wrap(
  <>
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <circle cx="17" cy="7" r="3" />
    <path d="M21 21v-2a3 3 0 0 1 3-3" />
  </>
);

export const Person = wrap(
  <>
    <circle cx="12" cy="5" r="3" />
    <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
  </>
);

export const Graduation = wrap(
  <>
    <path d="M22 10l-10-5L2 10l10 5 10-5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </>
);

export const Clipboard = wrap(
  <>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </>
);

export const FlagAU = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <rect x="1" y="1" width="22" height="16" rx="1" fill="#00008B" />
    <rect x="1" y="1" width="11" height="8" fill="#006B3F" />
    <path d="M1 1l11 4-11 4 11 4" fill="none" stroke="white" strokeWidth="1.5" />
    <path d="M1 5l11 4-11 4" fill="none" stroke="#FFD700" strokeWidth="1" />
  </svg>
);

export const Ambulance = wrap(
  <>
    <path d="M8 6v6M16 6v6M2 12h20M5 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <path d="M3 6h14v6H3z" />
  </>
);

export const PersonBoard = wrap(
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="12" cy="10" r="3" />
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
  </>
);

export const Smartphone = wrap(
  <>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </>
);

export const Ticket = wrap(
  <>
    <path d="M2 9a3 3 0 0 1 0 6V17a3 3 0 0 1 0 6M22 9a3 3 0 0 0 0 6V17a3 3 0 0 0 0 6M8 9h.01M16 9h.01" />
    <path d="M4 9V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
  </>
);

export const AlertTriangle = wrap(
  <>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </>
);

export const Briefcase2 = wrap(
  <>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 12h20" />
  </>
);

export const LawGavel = wrap(
  <>
    <path d="M14.5 10L3 21.5M3.5 14l10.5 10.5" />
    <path d="M11 4l7 7M18 4l-2 9 9-2-7-7z" />
    <path d="M3 3l5 5" />
  </>
);

export const Home2 = wrap(
  <>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </>
);

export const Tree = wrap(
  <>
    <path d="M12 22v-7M8 22h8M10 15a4 4 0 0 1 4 0M6 11a4 4 0 0 1 8 0M12 7V3" />
  </>
);

export const QuokkaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <ellipse cx="12" cy="14" rx="7" ry="6" />
    <circle cx="9" cy="11" r="1.2" fill="white" />
    <circle cx="15" cy="11" r="1.2" fill="white" />
    <path d="M9 15c.8.8 2 1 3 1s2.2-.2 3-1" />
  </svg>
);

export const Kangaroo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 4c-1 0-2 1-2 3v4c0 2 2 4 5 5l2-2-2-2 4-3c0-3-2-5-5-5z" />
    <circle cx="15" cy="5" r="3" />
    <ellipse cx="16" cy="16" rx="4" ry="5" />
    <path d="M14 14l-2 3M18 20l-2-3" />
  </svg>
);

export const Beach = wrap(
  <>
    <path d="M17 21H7a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1z" />
    <path d="M10 14l3-6 3 6M2 18h20" />
  </>
);

export const PassengerTrain = wrap(
  <>
    <path d="M4 15.5c0-2 1-3.5 2.5-3.5h11c1.5 0 2.5 1.5 2.5 3.5V19l-1 1v2h-14v-2l-1-1v-3.5z" />
    <path d="M8 15V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7" />
    <circle cx="7" cy="19" r="1" fill="currentColor" />
    <circle cx="17" cy="19" r="1" fill="currentColor" />
  </>
);

export const Plane = wrap(
  <>
    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </>
);

export const Target = wrap(
  <>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </>
);

// ── Legacy aggregate (for backward compat) ────────────────────
// Existing call sites use <Icons.ArrowRight /> etc. This object
// is tree-shakeable per icon when used with named imports too,
// because each const above is independently exported.
export const Icons = {
  ArrowRight, ArrowLeft, ChevronDown, ChevronRight, Check, X,
  Book, Globe, Star, Info, HelpCircle, ExternalLink, Link,
  Wallet, DollarSign, CreditCard, Receipt,
  Bus, Train, Car, MapPin, Navigation,
  Briefcase, Users, GraduationCap,
  Home, Building,
  Heart, Phone, Shield,
  Mail, Search, Menu,
  Sun, Moon, Clock, Calendar, Settings, Copy, Plus, Minus, Eye,
  FileText, Building2, Brain, CreditCard2, Number, CheckCircle, XCircle,
  Scale, Edit, Coin, ReceiptAlt, BuildingSkyscraper, Flag, ShieldCheck,
  Mountain, Sunrise, Sunset, Waves, Wine, TheaterMasks, SurfBoard, CityScape,
  Koala, Dolphin, Scooter, PersonSpeaking, Handshake, PersonGroup, Person,
  Graduation, Clipboard, FlagAU, Ambulance, PersonBoard, Smartphone, Ticket,
  AlertTriangle, Briefcase2, LawGavel, Home2, Tree, QuokkaIcon, Kangaroo,
  Beach, PassengerTrain, Plane, Target,
};

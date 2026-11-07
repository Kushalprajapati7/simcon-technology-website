import React from 'react';
import {
  GraduationCap,
  Award,
  Settings,
  BarChart3,
  MapPin,
  ShieldCheck,
  Quote
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
  dotColor: string;
}

// 3 Left Items (Top to Bottom): Content -> Icon -> Dot
const LEFT_FEATURES: FeatureItem[] = [
  {
    id: "labs",
    title: "Modern Digitalized Testing Labs",
    desc: "Automated triaxial compression, digital consolidation, and servo-controlled UTM setups.",
    icon: <Settings className="w-5 h-5" />,
    iconColor: "text-[#2563EB]",
    iconBg: "bg-blue-100/70",
    dotColor: "#2563EB" // Matches icon color (Blue)
  },
  {
    id: "nabl",
    title: "NABL Accreditation (581 Parameters)",
    desc: "ISO/IEC 17025:2017 accredited laboratories in Gandhidham, Ahmedabad, and Lucknow.",
    icon: <Award className="w-5 h-5" />,
    iconColor: "text-[#E11D48]",
    iconBg: "bg-red-100/70",
    dotColor: "#E11D48" // Matches icon color (Rose/Red)
  },
  {
    id: "academic",
    title: "IIT & NIT Academic Guidance",
    desc: "Senior engineering decisions guided by doctorate advisors with deep research expertise in soil mechanics.",
    icon: <GraduationCap className="w-5 h-5" />,
    iconColor: "text-[#2563EB]",
    iconBg: "bg-blue-100/70",
    dotColor: "#2563EB" // Matches icon color (Blue)
  }
];

// 3 Right Items (Top to Bottom): Dot -> Icon -> Content
const RIGHT_FEATURES: FeatureItem[] = [
  {
    id: "modeling",
    title: "Advanced Numerical Modeling",
    desc: "Full in-house modeling using PLAXIS 2D, LPILE, StoneC, and LIQSVS.",
    icon: <BarChart3 className="w-5 h-5" />,
    iconColor: "text-[#4F46E5]",
    iconBg: "bg-indigo-100/70",
    dotColor: "#4F46E5" // Matches icon color (Indigo)
  },
  {
    id: "mobilization",
    title: "Rapid Pan-India Mobilization",
    desc: "Four strategic regional hubs and owned drilling fleet.",
    icon: <MapPin className="w-5 h-5" />,
    iconColor: "text-[#16A34A]",
    iconBg: "bg-emerald-100/70",
    dotColor: "#16A34A" // Matches icon color (Green)
  },
  {
    id: "custody",
    title: "Rigorous Chain of Custody",
    desc: "Systematic undisturbed core sampling, electronic tracking, and verifiable reporting.",
    icon: <ShieldCheck className="w-5 h-5" />,
    iconColor: "text-[#D97706]",
    iconBg: "bg-amber-100/70",
    dotColor: "#D97706" // Matches icon color (Amber)
  }
];

interface WhySimconProps {
  className?: string;
  bgColor?: string;
}

export const WhySimcon: React.FC<WhySimconProps> = ({ className = '', bgColor = 'bg-white' }) => {
  return (
    <section className={`pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 ${bgColor} relative overflow-hidden ${className}`}>
      {/* Subtle Blueprint Hatch Pattern in Bottom-Right Corner */}
      <div className="absolute right-0 bottom-0 w-36 sm:w-48 h-36 sm:h-48 pointer-events-none opacity-40 select-none">
        <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="40" y1="160" x2="160" y2="40" stroke="#3B82F6" strokeWidth="1.25" strokeDasharray="3 3" opacity="0.35" />
          <line x1="60" y1="160" x2="160" y2="60" stroke="#3B82F6" strokeWidth="1.25" strokeDasharray="3 3" opacity="0.35" />
          <line x1="80" y1="160" x2="160" y2="80" stroke="#3B82F6" strokeWidth="1.25" strokeDasharray="3 3" opacity="0.35" />
          <line x1="100" y1="160" x2="160" y2="100" stroke="#3B82F6" strokeWidth="1.25" strokeDasharray="3 3" opacity="0.35" />
          <line x1="120" y1="160" x2="160" y2="120" stroke="#3B82F6" strokeWidth="1.25" strokeDasharray="3 3" opacity="0.35" />
          <line x1="140" y1="160" x2="160" y2="140" stroke="#3B82F6" strokeWidth="1.25" strokeDasharray="3 3" opacity="0.35" />
        </svg>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* =========================================================================
            HEADER SECTION (Centered, Clean, Precise)
            Both heading and paragraph are single lines on desktop
            ========================================================================= */}
        <div className="text-center max-w-5xl xl:max-w-6xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-2 sm:px-4">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase block">
              ENGINEERING INTEGRITY
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[30px] xl:text-[38px] 2xl:text-[42px] font-extrabold font-display text-[#062B5C] tracking-tight leading-tight lg:whitespace-nowrap">
            Engineering Decisions Built on{" "}
            <span className="text-[#1268B3]">Evidence</span>
            <span className="text-[#D71920]">.</span>
          </h2>

          <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm lg:text-[12px] xl:text-[13.5px] 2xl:text-sm text-slate-600 leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:whitespace-nowrap">
            At SIMCON Technology, we believe foundational decisions must be driven by verifiable technical facts and strict ethics – never by commercial pressure.
          </p>
        </div>

        {/* =========================================================================
            DESKTOP VISUAL STAGE (NON-CARD DESIGN: Symmetrical 3-Left & 3-Right)
            - Left: [Content] -> [Icon] -> [Dot on Arc]
            - Right: [Dot on Arc] -> [Icon] -> [Content]
            - Center: Grand Arch Dome with Viaduct Photo & Concentric Arch
            ========================================================================= */}
        <div className="hidden lg:block relative w-full max-w-[1540px] aspect-[1600/660] mx-auto">
          {/* Central Dome & Concentric Arch via Unified Full-Stage SVG */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <svg viewBox="0 0 1600 660" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                {/* Mathematical Dome Shape: Width 900px, Semicircle Center (800, 520), Radius 450px, Apex y=70 */}
                <clipPath id="whySimconDomeClip">
                  <path d="M 350 660 L 350 520 A 450 450 0 0 1 1250 520 L 1250 660 Z" />
                </clipPath>
                <linearGradient id="domeFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="65%" stopColor="white" stopOpacity="0" />
                  <stop offset="90%" stopColor="white" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.95" />
                </linearGradient>
              </defs>

              {/* The Image inside the Dome */}
              <g clipPath="url(#whySimconDomeClip)" className="pointer-events-auto">
                <image
                  href="/assets/careers/careers-engineers-banner.jpg"
                  x="240"
                  y="40"
                  width="1120"
                  height="630"
                  preserveAspectRatio="xMidYMid slice"
                />
                {/* Bottom gradient fade for seamless integration */}
                <rect x="350" y="480" width="900" height="180" fill="url(#domeFade)" />
                {/* Dome Outline Border */}
                <path
                  d="M 350 660 L 350 520 A 450 450 0 0 1 1250 520 L 1250 660"
                  stroke="#E2E8F0"
                  strokeWidth="2.5"
                  fill="none"
                />
              </g>

              {/* Concentric Outer Arch Line: Center (800, 520), Radius 472px (exact 22px clearance everywhere) */}
              <path
                d="M 328 520 A 472 472 0 0 1 1272 520"
                stroke="#CBD5E1"
                strokeWidth="1.75"
                fill="none"
              />

              {/* ----------------- 3 Left Dots & Stems (Dots dynamically matched to icons) ----------------- */}
              {/* Stem & Dot 1 (Top-Left): Angle 118°, (578, 103) -> Stem to (538, 103) */}
              <line x1="578" y1="103" x2="538" y2="103" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="578" cy="103" r="5.5" fill={LEFT_FEATURES[0].dotColor} stroke="#FFFFFF" strokeWidth="2.5" />

              {/* Stem & Dot 2 (Mid-Left): Angle 145°, (413, 249) -> Stem to (373, 249) */}
              <line x1="413" y1="249" x2="373" y2="249" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="413" cy="249" r="5.5" fill={LEFT_FEATURES[1].dotColor} stroke="#FFFFFF" strokeWidth="2.5" />

              {/* Stem & Dot 3 (Lower-Left): Angle 168°, (338, 422) -> Stem to (298, 422) */}
              <line x1="338" y1="422" x2="298" y2="422" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="338" cy="422" r="5.5" fill={LEFT_FEATURES[2].dotColor} stroke="#FFFFFF" strokeWidth="2.5" />

              {/* ----------------- 3 Right Dots & Stems (Dots dynamically matched to icons) ----------------- */}
              {/* Stem & Dot 4 (Top-Right): Angle 62°, (1022, 103) -> Stem to (1062, 103) */}
              <line x1="1022" y1="103" x2="1062" y2="103" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="1022" cy="103" r="5.5" fill={RIGHT_FEATURES[0].dotColor} stroke="#FFFFFF" strokeWidth="2.5" />

              {/* Stem & Dot 5 (Mid-Right): Angle 35°, (1187, 249) -> Stem to (1227, 249) */}
              <line x1="1187" y1="249" x2="1227" y2="249" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="1187" cy="249" r="5.5" fill={RIGHT_FEATURES[1].dotColor} stroke="#FFFFFF" strokeWidth="2.5" />

              {/* Stem & Dot 6 (Lower-Right): Angle 12°, (1262, 422) -> Stem to (1302, 422) */}
              <line x1="1262" y1="422" x2="1302" y2="422" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="1262" cy="422" r="5.5" fill={RIGHT_FEATURES[2].dotColor} stroke="#FFFFFF" strokeWidth="2.5" />
            </svg>
          </div>

          {/* =========================================================================
              LEFT SIDE: 3 ITEMS (Order: Content -> Icon -> Dot on Arc)
              Centered vertically at exact SVG stem levels (y=103, 249, 422)
              Fluidly responsive from 1024px to 4K
              ========================================================================= */}
          
          {/* Left Item 1 (Top-Left): Modern Digitalized Testing Labs */}
          <div 
            className="absolute z-20 group -translate-y-1/2 max-w-[240px] xl:max-w-[300px] 2xl:max-w-[360px]"
            style={{ top: "15.6%", right: "66.4%" }}
          >
            <div className="flex items-center justify-end gap-2.5 sm:gap-3 xl:gap-3.5 text-right transition-transform duration-300 group-hover:-translate-x-1">
              <div>
                <h4 className="font-display font-bold text-xs lg:text-[11.5px] xl:text-[13px] 2xl:text-sm text-[#062B5C] leading-snug group-hover:text-[#1268B3] transition-colors">
                  {LEFT_FEATURES[0].title}
                </h4>
                <p className="mt-0.5 xl:mt-1 text-[10px] xl:text-[11px] 2xl:text-xs text-slate-500 leading-snug line-clamp-2 xl:line-clamp-none">
                  {LEFT_FEATURES[0].desc}
                </p>
              </div>
              <div className={`w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 rounded-full ${LEFT_FEATURES[0].iconBg} flex items-center justify-center ${LEFT_FEATURES[0].iconColor} shrink-0 shadow-2xs group-hover:scale-110 transition-transform`}>
                {LEFT_FEATURES[0].icon}
              </div>
            </div>
          </div>

          {/* Left Item 2 (Mid-Left): NABL Accreditation (581 Parameters) */}
          <div 
            className="absolute z-20 group -translate-y-1/2 max-w-[220px] xl:max-w-[280px] 2xl:max-w-[340px]"
            style={{ top: "37.7%", right: "76.7%" }}
          >
            <div className="flex items-center justify-end gap-2.5 sm:gap-3 xl:gap-3.5 text-right transition-transform duration-300 group-hover:-translate-x-1">
              <div>
                <h4 className="font-display font-bold text-xs lg:text-[11.5px] xl:text-[13px] 2xl:text-sm text-[#062B5C] leading-snug group-hover:text-[#1268B3] transition-colors">
                  {LEFT_FEATURES[1].title}
                </h4>
                <p className="mt-0.5 xl:mt-1 text-[10px] xl:text-[11px] 2xl:text-xs text-slate-500 leading-snug line-clamp-2 xl:line-clamp-none">
                  {LEFT_FEATURES[1].desc}
                </p>
              </div>
              <div className={`w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 rounded-full ${LEFT_FEATURES[1].iconBg} flex items-center justify-center ${LEFT_FEATURES[1].iconColor} shrink-0 shadow-2xs group-hover:scale-110 transition-transform`}>
                {LEFT_FEATURES[1].icon}
              </div>
            </div>
          </div>

          {/* Left Item 3 (Lower-Left): IIT & NIT Academic Guidance */}
          <div 
            className="absolute z-20 group -translate-y-1/2 max-w-[200px] xl:max-w-[260px] 2xl:max-w-[320px]"
            style={{ top: "63.9%", right: "81.4%" }}
          >
            <div className="flex items-center justify-end gap-2.5 sm:gap-3 xl:gap-3.5 text-right transition-transform duration-300 group-hover:-translate-x-1">
              <div>
                <h4 className="font-display font-bold text-xs lg:text-[11.5px] xl:text-[13px] 2xl:text-sm text-[#062B5C] leading-snug group-hover:text-[#1268B3] transition-colors">
                  {LEFT_FEATURES[2].title}
                </h4>
                <p className="mt-0.5 xl:mt-1 text-[10px] xl:text-[11px] 2xl:text-xs text-slate-500 leading-snug line-clamp-2 xl:line-clamp-none">
                  {LEFT_FEATURES[2].desc}
                </p>
              </div>
              <div className={`w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 rounded-full ${LEFT_FEATURES[2].iconBg} flex items-center justify-center ${LEFT_FEATURES[2].iconColor} shrink-0 shadow-2xs group-hover:scale-110 transition-transform`}>
                {LEFT_FEATURES[2].icon}
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT SIDE: 3 ITEMS (Order: Dot on Arc -> Icon -> Content)
              Centered vertically at exact SVG stem levels (y=103, 249, 422)
              Fluidly responsive from 1024px to 4K
              ========================================================================= */}

          {/* Right Item 4 (Top-Right): Advanced Numerical Modeling */}
          <div 
            className="absolute z-20 group -translate-y-1/2 max-w-[240px] xl:max-w-[300px] 2xl:max-w-[360px]"
            style={{ top: "15.6%", left: "66.4%" }}
          >
            <div className="flex items-center justify-start gap-2.5 sm:gap-3 xl:gap-3.5 text-left transition-transform duration-300 group-hover:translate-x-1">
              <div className={`w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 rounded-full ${RIGHT_FEATURES[0].iconBg} flex items-center justify-center ${RIGHT_FEATURES[0].iconColor} shrink-0 shadow-2xs group-hover:scale-110 transition-transform`}>
                {RIGHT_FEATURES[0].icon}
              </div>
              <div>
                <h4 className="font-display font-bold text-xs lg:text-[11.5px] xl:text-[13px] 2xl:text-sm text-[#062B5C] leading-snug group-hover:text-[#1268B3] transition-colors">
                  {RIGHT_FEATURES[0].title}
                </h4>
                <p className="mt-0.5 xl:mt-1 text-[10px] xl:text-[11px] 2xl:text-xs text-slate-500 leading-snug line-clamp-2 xl:line-clamp-none">
                  {RIGHT_FEATURES[0].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Item 5 (Mid-Right): Rapid Pan-India Mobilization */}
          <div 
            className="absolute z-20 group -translate-y-1/2 max-w-[220px] xl:max-w-[280px] 2xl:max-w-[340px]"
            style={{ top: "37.7%", left: "76.7%" }}
          >
            <div className="flex items-center justify-start gap-2.5 sm:gap-3 xl:gap-3.5 text-left transition-transform duration-300 group-hover:translate-x-1">
              <div className={`w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 rounded-full ${RIGHT_FEATURES[1].iconBg} flex items-center justify-center ${RIGHT_FEATURES[1].iconColor} shrink-0 shadow-2xs group-hover:scale-110 transition-transform`}>
                {RIGHT_FEATURES[1].icon}
              </div>
              <div>
                <h4 className="font-display font-bold text-xs lg:text-[11.5px] xl:text-[13px] 2xl:text-sm text-[#062B5C] leading-snug group-hover:text-[#1268B3] transition-colors">
                  {RIGHT_FEATURES[1].title}
                </h4>
                <p className="mt-0.5 xl:mt-1 text-[10px] xl:text-[11px] 2xl:text-xs text-slate-500 leading-snug line-clamp-2 xl:line-clamp-none">
                  {RIGHT_FEATURES[1].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Item 6 (Lower-Right): Rigorous Chain of Custody */}
          <div 
            className="absolute z-20 group -translate-y-1/2 max-w-[200px] xl:max-w-[260px] 2xl:max-w-[320px]"
            style={{ top: "63.9%", left: "81.4%" }}
          >
            <div className="flex items-center justify-start gap-2.5 sm:gap-3 xl:gap-3.5 text-left transition-transform duration-300 group-hover:translate-x-1">
              <div className={`w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 rounded-full ${RIGHT_FEATURES[2].iconBg} flex items-center justify-center ${RIGHT_FEATURES[2].iconColor} shrink-0 shadow-2xs group-hover:scale-110 transition-transform`}>
                {RIGHT_FEATURES[2].icon}
              </div>
              <div>
                <h4 className="font-display font-bold text-xs lg:text-[11.5px] xl:text-[13px] 2xl:text-sm text-[#062B5C] leading-snug group-hover:text-[#1268B3] transition-colors">
                  {RIGHT_FEATURES[2].title}
                </h4>
                <p className="mt-0.5 xl:mt-1 text-[10px] xl:text-[11px] 2xl:text-xs text-slate-500 leading-snug line-clamp-2 xl:line-clamp-none">
                  {RIGHT_FEATURES[2].desc}
                </p>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------
              DIRECTOR'S QUOTE BOX (Centered at Bottom of Visual)
              Anchors the visual harmoniously with bilateral symmetry
              ------------------------------------------------------------- */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[1%] w-[90%] max-w-[420px] xl:max-w-[500px] 2xl:max-w-[520px] z-30">
            <div className="bg-[#F0F7FF]/95 backdrop-blur-md border border-blue-200/90 rounded-2xl p-3 sm:p-3.5 xl:p-4.5 shadow-xl shadow-blue-900/5 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-2 sm:gap-2.5">
                <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1268B3] shrink-0 rotate-180 fill-[#1268B3]/15 mt-0.5" />
                <blockquote className="text-[10px] sm:text-[11px] xl:text-xs font-medium text-slate-700 leading-relaxed italic">
                  Engineering decisions must be driven by facts, technical competence and ethics – not by commercial pressure.
                </blockquote>
              </div>

              <div className="pt-2 sm:pt-2.5 mt-1.5 sm:mt-2 border-t border-blue-100/90 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <img
                    src="/assets/leadership/vinesh-maheshwari.jpeg"
                    alt={COMPANY_INFO.directorsMessage.author}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-white shadow-2xs shrink-0"
                  />
                  <div>
                    <div className="font-bold text-[11px] sm:text-xs text-[#062B5C] font-display">
                      {COMPANY_INFO.directorsMessage.author}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 font-normal">
                      {COMPANY_INFO.directorsMessage.title} ({COMPANY_INFO.directorsMessage.credentials})
                    </div>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono font-bold text-[#1268B3] uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded-md border border-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1268B3] animate-pulse" />
                  Evidence Driven
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET RESPONSIVE LAYOUT (< 1024px screens)
            Guarantees smooth responsive presentation on phones and tablets
            ========================================================================= */}
        <div className="lg:hidden flex flex-col gap-5 sm:gap-6">
          {/* Central Dome Visual */}
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] aspect-[4/3] rounded-t-[170px] sm:rounded-t-[220px] md:rounded-t-[250px] overflow-hidden shadow-lg border-2 border-slate-200/90 bg-slate-100">
            <img
              src="/assets/careers/careers-engineers-banner.jpg"
              alt="SIMCON Civil Engineers inspecting viaduct infrastructure"
              className="w-full h-full object-cover object-[62%_30%]"
            />
            {/* Concentric subtle arch highlight */}
            <div className="absolute inset-0 rounded-t-[170px] sm:rounded-t-[220px] md:rounded-t-[250px] border-t-2 border-white/60 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
          </div>

          {/* Director's Quote Card - Overlaps Dome Visual gracefully */}
          <div className="-mt-12 sm:-mt-14 md:-mt-16 relative z-10 max-w-[440px] sm:max-w-[480px] mx-auto w-[92%] bg-[#F0F7FF]/95 backdrop-blur-md border border-blue-200/90 rounded-2xl p-4 sm:p-4.5 shadow-xl shadow-blue-900/5">
            <div className="flex items-start gap-2.5">
              <Quote className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#1268B3] shrink-0 rotate-180 fill-[#1268B3]/15 mt-0.5" />
              <blockquote className="text-[11px] sm:text-xs font-medium text-slate-700 leading-relaxed italic">
                Engineering decisions must be driven by facts, technical competence and ethics – not by commercial pressure.
              </blockquote>
            </div>

            <div className="pt-2.5 sm:pt-3 mt-2 sm:mt-2.5 border-t border-blue-100/90 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <img
                  src="/assets/leadership/vinesh-maheshwari.jpeg"
                  alt={COMPANY_INFO.directorsMessage.author}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-white shadow-2xs shrink-0"
                />
                <div>
                  <div className="font-bold text-xs text-[#062B5C] font-display">
                    {COMPANY_INFO.directorsMessage.author}
                  </div>
                  <div className="text-[10px] text-slate-500 font-normal">
                    {COMPANY_INFO.directorsMessage.title} ({COMPANY_INFO.directorsMessage.credentials})
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono font-bold text-[#1268B3] uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded-md border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1268B3] animate-pulse" />
                Evidence Driven
              </span>
            </div>
          </div>

          {/* 6 Feature Items: 1 column on phones, 2 columns on tablets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2 max-w-2xl mx-auto w-full px-2">
            {[...LEFT_FEATURES, ...RIGHT_FEATURES].map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl hover:bg-slate-50/80 transition-colors"
              >
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${item.iconBg} flex items-center justify-center ${item.iconColor} shrink-0`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-xs sm:text-[13px] text-[#062B5C] leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-slate-500 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

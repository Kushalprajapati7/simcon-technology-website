import React from 'react';
import {
  FlaskConical,
  Mountain,
  Target,
  Building2,
  Droplets,
  Activity,
  Map,
  ShieldCheck,
  Award,
  Layers,
  FileCheck,
} from 'lucide-react';

interface DisciplineData {
  id: string;
  count: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeX: number;
  badgeY: number;
  dotX: number;
  dotY: number;
  textSide: 'top' | 'right' | 'bottom' | 'left';
}

// Structural steel wide-flange I-beam icon
const SteelBeamIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 5h16" />
    <path d="M4 19h16" />
    <path d="M12 5v14" />
    <path d="M7 5v2" />
    <path d="M17 5v2" />
    <path d="M7 17v2" />
    <path d="M17 17v2" />
  </svg>
);

// Precise mathematical coordinates on a 760x520 canvas (Center: cx=380, cy=260, r_orbit=105, r_badge=145)
const DISCIPLINES: DisciplineData[] = [
  {
    id: 'soil',
    count: '79',
    title: 'Soil Laboratory Mechanics',
    icon: FlaskConical,
    badgeX: 380.0,
    badgeY: 115.0,
    dotX: 380.0,
    dotY: 155.0,
    textSide: 'top',
  },
  {
    id: 'rock',
    count: '22',
    title: 'Rock Mechanics & Geotechnical Laboratory',
    icon: Mountain,
    badgeX: 482.5,
    badgeY: 157.5,
    dotX: 454.2,
    dotY: 185.8,
    textSide: 'right',
  },
  {
    id: 'insitu',
    count: '29',
    title: 'In-Situ Geotechnical Field Testing',
    icon: Target,
    badgeX: 525.0,
    badgeY: 260.0,
    dotX: 485.0,
    dotY: 260.0,
    textSide: 'right',
  },
  {
    id: 'materials',
    count: '335',
    title: 'Construction Material Testing (Concrete, Aggregate, Bitumen)',
    icon: Building2,
    badgeX: 482.5,
    badgeY: 362.5,
    dotX: 454.2,
    dotY: 334.2,
    textSide: 'right',
  },
  {
    id: 'steel',
    count: '70',
    title: 'Steel, Rebars, Metals & Weld Testing',
    icon: SteelBeamIcon,
    badgeX: 380.0,
    badgeY: 405.0,
    dotX: 380.0,
    dotY: 365.0,
    textSide: 'bottom',
  },
  {
    id: 'chemical',
    count: '25',
    title: 'Chemical Analysis & Construction Water',
    icon: Droplets,
    badgeX: 277.5,
    badgeY: 362.5,
    dotX: 305.8,
    dotY: 334.2,
    textSide: 'left',
  },
  {
    id: 'ndt',
    count: '15',
    title: 'Non-Destructive Testing (NDT) & Structural Diagnostics',
    icon: Activity,
    badgeX: 235.0,
    badgeY: 260.0,
    dotX: 275.0,
    dotY: 260.0,
    textSide: 'left',
  },
  {
    id: 'geophysical',
    count: '07',
    title: 'Geophysical Subsurface Survey',
    icon: Map,
    badgeX: 277.5,
    badgeY: 157.5,
    dotX: 305.8,
    dotY: 185.8,
    textSide: 'left',
  },
];

export const NablParametersRadial: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#062B5C] text-white relative overflow-hidden border-b border-white/10 w-full">
      {/* Static subtle tech grid texture matching Hero section - No rotating animation */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />

      {/* Full-Width Container matching Hero Section (w-full max-w-[1920px]) */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">

        {/* Full-Width Split Layout: Left Content Console + Right Radial Infographic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">

          {/* =========================================================================
              LEFT COLUMN (5 of 12 columns): Title, Technical Highlights & Scope Info
              Completely fills the left area with engineering authority
              ========================================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase block">
                  TESTING DISCIPLINE QUANTIFICATION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.08]">
                581 Distinct NABL Accredited Parameters<span className="text-[#D71920]">.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Our accredited testing scopes span all vital civil engineering disciplines to satisfy NHAI, RVNL, MES, and EPC tender mandates across India.
              </p>
            </div>

            {/* Technical Capability Cards */}
            <div className="space-y-3 pt-1">
              <div className="bg-white/[0.06] border border-white/12 rounded-xl p-3.5 flex items-start gap-3.5 hover:bg-white/[0.09] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#1268B3]/30 border border-[#1268B3]/50 flex items-center justify-center shrink-0 mt-0.5 text-blue-300">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    3 Central NABL Laboratories
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                    Operating ISO/IEC 17025 accredited facilities in Gandhidham (TC-5077), Ahmedabad (TC-9050), and Lucknow (TC-13273).
                  </p>
                </div>
              </div>

              <div className="bg-white/[0.06] border border-white/12 rounded-xl p-3.5 flex items-start gap-3.5 hover:bg-white/[0.09] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#1268B3]/30 border border-[#1268B3]/50 flex items-center justify-center shrink-0 mt-0.5 text-blue-300">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Comprehensive Code Standards
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                    Rigorous physical, mechanical, and analytical chemical testing in strict compliance with IS, ASTM, BS, IRC, DIN & AASHTO.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN (7 of 12 columns): 581 Radial Infographic Wheel (Desktop)
              Fills the right side cleanly with zero horizontal empty void
              ========================================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex justify-center w-full">

            {/* Desktop Radial Wheel (>= 1024px) */}
            <div className="hidden lg:block relative w-full max-w-[760px] h-[520px]">

              {/* SVG Layer: Donut Ring, Segmented Gauge Arcs, Dotted Orbit & Stems */}
              <svg
                viewBox="0 0 760 520"
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                aria-hidden="true"
              >
                {/* 1. Base Annular Donut Ring (r=82, strokeWidth=16) */}
                <circle
                  cx="380"
                  cy="260"
                  r="82"
                  fill="none"
                  stroke="#082347"
                  strokeWidth="16"
                />

                {/* 2. Flush Segmented Gauge Arcs on the Donut Ring */}
                {/* Arc 1: Top-Right Cyan Arc (-60° to 10°) */}
                <path
                  d="M 421 189 A 82 82 0 0 1 460.8 274.2"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="16"
                  strokeLinecap="butt"
                  className="opacity-95"
                />
                {/* Arc 2: Bottom-Right Deep Blue Arc (30° to 80°) */}
                <path
                  d="M 451 301 A 82 82 0 0 1 394.2 340.8"
                  fill="none"
                  stroke="#1D4ED8"
                  strokeWidth="16"
                  strokeLinecap="butt"
                  className="opacity-85"
                />
                {/* Arc 3: Bottom-Left Cyan Arc (120° to 170°) */}
                <path
                  d="M 339 331 A 82 82 0 0 1 299.2 274.2"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="16"
                  strokeLinecap="butt"
                  className="opacity-95"
                />

                {/* 3. Outer Thin Dotted Orbital Ring (r=105) */}
                <circle
                  cx="380"
                  cy="260"
                  r="105"
                  fill="none"
                  stroke="#60A5FA"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                  className="opacity-60"
                />

                {/* 4. Radial Stems (extending outward from r=105 to r=145) */}
                {DISCIPLINES.map((item) => (
                  <line
                    key={`stem-${item.id}`}
                    x1={item.dotX}
                    y1={item.dotY}
                    x2={item.badgeX}
                    y2={item.badgeY}
                    stroke="#60A5FA"
                    strokeWidth="1.5"
                    className="opacity-70"
                  />
                ))}

                {/* 5. Red Anchor Beads positioned cleanly ON the Dotted Orbit */}
                {DISCIPLINES.map((item) => (
                  <circle
                    key={`bead-${item.id}`}
                    cx={item.dotX}
                    cy={item.dotY}
                    r="3.5"
                    fill="#D71920"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                  />
                ))}
              </svg>

              {/* Central Solid Circular Hub (Center: 380, 260, r=70, diameter=140px) */}
              <div
                className="absolute top-[260px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full bg-[#04162E] border border-blue-500/30 flex flex-col items-center justify-center text-center shadow-xl z-20"
              >
                <span className="font-display font-black text-4xl text-white tracking-tight leading-none">
                  581
                </span>
                <span className="font-mono text-[8.5px] font-bold tracking-[0.2em] text-[#93C5FD] uppercase mt-1.5 block">
                  DISTINCT
                </span>
                <span className="font-mono text-[8px] font-bold tracking-[0.2em] text-[#93C5FD] uppercase block -mt-0.5">
                  PARAMETERS
                </span>
              </div>

              {/* 8 Circular Icon Badges & Compact Stat Text Labels */}
              {DISCIPLINES.map((item) => {
                const IconComp = item.icon;

                return (
                  <div key={item.id} className="group">
                    {/* Circular Icon Badge (42px diameter) */}
                    <div
                      style={{
                        left: `${(item.badgeX / 760) * 100}%`,
                        top: `${item.badgeY}px`,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-full bg-white text-[#1268B3] border-2 border-blue-200/90 flex items-center justify-center z-30 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:border-[#38BDF8]"
                    >
                      <IconComp className="w-4 h-4 transition-transform group-hover:scale-110 duration-200" />
                    </div>

                    {/* 1. TOP ITEM: Soil (79) */}
                    {item.textSide === 'top' && (
                      <div
                        style={{
                          left: '50%',
                          top: '52px',
                        }}
                        className="absolute -translate-x-1/2 text-center z-30 pointer-events-none max-w-[160px]"
                      >
                        <span className="font-display font-black text-2xl text-white block leading-none tracking-tight">
                          {item.count}
                        </span>
                        <span className="text-[11px] text-slate-200 font-medium block mt-1 leading-tight">
                          {item.title}
                        </span>
                      </div>
                    )}

                    {/* 2. RIGHT-SIDE ITEMS: Rock (22), In-Situ (29), Materials (335) */}
                    {item.textSide === 'right' && (
                      <div
                        style={{
                          left: `calc(${(item.badgeX / 760) * 100}% + 28px)`,
                          top: `${item.badgeY}px`,
                        }}
                        className="absolute -translate-y-1/2 text-left z-30 pointer-events-none max-w-[190px]"
                      >
                        <span className="font-display font-black text-2xl text-white block leading-none tracking-tight">
                          {item.count}
                        </span>
                        <span className="text-[11px] text-slate-200 font-medium block mt-0.5 leading-snug">
                          {item.title}
                        </span>
                      </div>
                    )}

                    {/* 3. BOTTOM ITEM: Steel (70) */}
                    {item.textSide === 'bottom' && (
                      <div
                        style={{
                          left: `calc(${(item.badgeX / 760) * 100}% + 28px)`,
                          top: `${item.badgeY}px`,
                        }}
                        className="absolute -translate-y-1/2 text-left z-30 pointer-events-none max-w-[190px]"
                      >
                        <span className="font-display font-black text-2xl text-white block leading-none tracking-tight">
                          {item.count}
                        </span>
                        <span className="text-[11px] text-slate-200 font-medium block mt-0.5 leading-snug">
                          {item.title}
                        </span>
                      </div>
                    )}

                    {/* 4. LEFT-SIDE ITEMS: Geophysical (07), NDT (15), Chemical (25) */}
                    {item.textSide === 'left' && (
                      <div
                        style={{
                          right: `calc(${100 - (item.badgeX / 760) * 100}% + 28px)`,
                          top: `${item.badgeY}px`,
                        }}
                        className="absolute -translate-y-1/2 text-right z-30 pointer-events-none max-w-[190px]"
                      >
                        <span className="font-display font-black text-2xl text-white block leading-none tracking-tight">
                          {item.count}
                        </span>
                        <span className="text-[11px] text-slate-200 font-medium block mt-0.5 leading-snug">
                          {item.title}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile & Tablet Layout (< 1024px) */}
            <div className="block lg:hidden w-full max-w-xl mx-auto space-y-4">
              {/* Central Highlight Badge */}
              <div className="bg-[#04162E] border border-blue-500/30 rounded-xl p-4 text-center shadow-lg">
                <span className="font-display font-black text-4xl text-white tracking-tight leading-none block">
                  581
                </span>
                <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#93C5FD] uppercase mt-1 block">
                  DISTINCT NABL PARAMETERS
                </span>
              </div>

              {/* 8 Quantification Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DISCIPLINES.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="bg-white/[0.06] border border-white/12 rounded-xl p-3 flex items-center gap-3 transition-colors hover:bg-white/[0.10]"
                    >
                      <div className="w-10 h-10 rounded-full bg-white text-[#1268B3] border border-blue-200 shrink-0 flex items-center justify-center shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] shrink-0" />
                          <span className="font-display font-black text-xl text-white tracking-tight">
                            {item.count}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-200 font-medium leading-snug line-clamp-2">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            BOTTOM FULL-WIDTH STAT BAR (Just like HeroStats in the Hero section!)
            Spans edge-to-edge across the container, eliminating any bottom void space
            ========================================================================= */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#1268B3]/25 flex items-center justify-center text-blue-300 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-black text-2xl lg:text-3xl text-white tracking-tight block">
                581+
              </span>
              <span className="text-[11px] text-slate-300 font-mono uppercase tracking-wider block">
                NABL Parameters
              </span>
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#1268B3]/25 flex items-center justify-center text-blue-300 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-black text-2xl lg:text-3xl text-white tracking-tight block">
                8
              </span>
              <span className="text-[11px] text-slate-300 font-mono uppercase tracking-wider block">
                Core Disciplines
              </span>
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#1268B3]/25 flex items-center justify-center text-blue-300 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-black text-2xl lg:text-3xl text-white tracking-tight block">
                3
              </span>
              <span className="text-[11px] text-slate-300 font-mono uppercase tracking-wider block">
                Accredited Labs
              </span>
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#1268B3]/25 flex items-center justify-center text-blue-300 shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-black text-xl lg:text-2xl text-white tracking-tight block leading-tight pt-0.5">
                ISO/IEC 17025
              </span>
              <span className="text-[11px] text-slate-300 font-mono uppercase tracking-wider block">
                Quality Standard
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

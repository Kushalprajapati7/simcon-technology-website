import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ShieldCheck, Users, Target, BarChart3, Star } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface PillarConfig {
  number: string;
  title: string;
  highlight: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  isElevated: boolean;
  xPercent: number; // Percentage center across the container (10, 30, 50, 70, 90)
  anchorY: number;   // Y-coordinate of the anchor dot on the wave
}

const PILLARS_DATA: PillarConfig[] = [
  {
    number: '01',
    title: COMPANY_INFO.coreValues[0]?.title || 'INTEGRITY',
    highlight: COMPANY_INFO.coreValues[0]?.highlight || 'Evidence-Based',
    description: COMPANY_INFO.coreValues[0]?.description || 'We act with honesty, transparency, and accountability in every test result and recommendation.',
    icon: ShieldCheck,
    isElevated: false,
    xPercent: 10,
    anchorY: 154,
  },
  {
    number: '02',
    title: COMPANY_INFO.coreValues[1]?.title || 'HUMANITY',
    highlight: COMPANY_INFO.coreValues[1]?.highlight || 'People-Centered',
    description: COMPANY_INFO.coreValues[1]?.description || 'We lead with empathy, respect and care for our people, our partners, and the communities impacted by our work.',
    icon: Users,
    isElevated: true,
    xPercent: 30,
    anchorY: 96,
  },
  {
    number: '03',
    title: COMPANY_INFO.coreValues[2]?.title || 'COMMITMENT',
    highlight: COMPANY_INFO.coreValues[2]?.highlight || 'Dedicated',
    description: COMPANY_INFO.coreValues[2]?.description || 'We stay dedicated to growth, quality execution, rigorous standards and long-term client success.',
    icon: Target,
    isElevated: false,
    xPercent: 50,
    anchorY: 154,
  },
  {
    number: '04',
    title: COMPANY_INFO.coreValues[3]?.title || 'PROSPERITY',
    highlight: COMPANY_INFO.coreValues[3]?.highlight || 'Value Creation',
    description: COMPANY_INFO.coreValues[3]?.description || 'We create sustainable growth and lasting value through sound engineering and mutual trust.',
    icon: BarChart3,
    isElevated: true,
    xPercent: 70,
    anchorY: 96,
  },
  {
    number: '05',
    title: COMPANY_INFO.coreValues[4]?.title || 'EXCELLENCE',
    highlight: COMPANY_INFO.coreValues[4]?.highlight || 'Highest Standards',
    description: COMPANY_INFO.coreValues[4]?.description || 'We strive for the best in everything we do — from field sampling to numerical modeling and final reporting.',
    icon: Star,
    isElevated: false,
    xPercent: 90,
    anchorY: 154,
  },
];

// Calculate cubic Bezier point along wave for segment i (from node i to node i+1) at progress t (0 to 1)
function getWavePoint(segIndex: number, t: number): { xPercent: number; y: number } {
  const yStart = segIndex % 2 === 0 ? 154 : 96;
  const yEnd = segIndex % 2 === 0 ? 96 : 154;
  const xStart = 10 + segIndex * 20;
  const xEnd = 10 + (segIndex + 1) * 20;
  const xMid = 10 + segIndex * 20 + 10;

  const p0 = { x: xStart, y: yStart };
  const p1 = { x: xMid, y: yStart };
  const p2 = { x: xMid, y: yEnd };
  const p3 = { x: xEnd, y: yEnd };

  const oneMinusT = 1 - t;
  const xPercent =
    Math.pow(oneMinusT, 3) * p0.x +
    3 * Math.pow(oneMinusT, 2) * t * p1.x +
    3 * oneMinusT * Math.pow(t, 2) * p2.x +
    Math.pow(t, 3) * p3.x;
  const y =
    Math.pow(oneMinusT, 3) * p0.y +
    3 * Math.pow(oneMinusT, 2) * t * p1.y +
    3 * oneMinusT * Math.pow(t, 2) * p2.y +
    Math.pow(t, 3) * p3.y;

  return { xPercent, y };
}

// Smooth sinusoidal easing (zero jerk, silky soft acceleration and deceleration)
function easeInOutSine(t: number): number {
  return 0.5 * (1 - Math.cos(Math.PI * t));
}

interface FivePillarsSectionProps {
  className?: string;
  bgColor?: string;
}

export const FivePillarsSection: React.FC<FivePillarsSectionProps> = ({
  className = '',
  bgColor = 'bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F6FC]'
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [dotPos, setDotPos] = useState<{ xPercent: number; y: number }>({ xPercent: 10, y: 154 });
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  // Animation timeline constants (in ms) - Graceful, relaxed pace
  const DWELL_TIME = 1000;  // 1s dwell at each pillar node
  const TRAVEL_TIME = 2100; // 2.1s smooth glide along the wave curve
  const END_HOLD = 2500;    // 2.5s celebration pause when all 5 are active
  const STEP_TIME = DWELL_TIME + TRAVEL_TIME;
  const TOTAL_CYCLE = 4 * STEP_TIME + DWELL_TIME + END_HOLD;

  const animate = useCallback(
    (timestamp: number) => {
      if (isReducedMotion) {
        setActiveStep(4);
        return;
      }

      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = (timestamp - startTimeRef.current) % TOTAL_CYCLE;

      if (elapsed < 4 * STEP_TIME) {
        const currentSeg = Math.floor(elapsed / STEP_TIME);
        const subElapsed = elapsed % STEP_TIME;

        if (subElapsed < DWELL_TIME) {
          // Dwelling at current node
          setActiveStep(currentSeg);
          const anchor = PILLARS_DATA[currentSeg];
          setDotPos({ xPercent: anchor.xPercent, y: anchor.anchorY });
        } else {
          // Traveling smoothly along wave to next node
          const travelElapsed = subElapsed - DWELL_TIME;
          const rawT = Math.min(1, Math.max(0, travelElapsed / TRAVEL_TIME));
          const t = easeInOutSine(rawT);
          const pt = getWavePoint(currentSeg, t);
          setDotPos(pt);

          // Activate next pillar right as dot approaches the node
          if (rawT > 0.92) {
            setActiveStep(currentSeg + 1);
          } else {
            setActiveStep(currentSeg);
          }
        }
      } else {
        // Final hold: all 5 are active
        setActiveStep(4);
        const lastAnchor = PILLARS_DATA[4];
        setDotPos({ xPercent: lastAnchor.xPercent, y: lastAnchor.anchorY });
      }

      animFrameRef.current = requestAnimationFrame(animate);
    },
    [isReducedMotion, TOTAL_CYCLE, STEP_TIME, DWELL_TIME, TRAVEL_TIME]
  );

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [animate]);

  const handlePillarClick = (idx: number) => {
    setActiveStep(idx);
    const anchor = PILLARS_DATA[idx];
    setDotPos({ xPercent: anchor.xPercent, y: anchor.anchorY });
  };

  return (
    <section
      id="core-values"
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${bgColor} border-b border-slate-200 overflow-hidden relative ${className}`}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Section Header */}
        <div className="reveal reveal-up mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase block">
              PRINCIPLES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-display text-[#062B5C] tracking-tight leading-tight">
            The Five Pillars of SIMCON<span className="text-[#062B5C]">.</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Our core values govern every laboratory test, borehole log, and engineering recommendation we issue.
          </p>
        </div>

        {/* =========================================================================
            DESKTOP: WAVE-CONNECTED HORIZONTAL INFOGRAPHIC (>= 1024px)
            ========================================================================= */}
        <div className="hidden lg:block relative w-full pt-0 pb-12">
          
          {/* Continuous Curved Connecting Wave Line (SVG Layer) */}
          <div className="absolute inset-x-0 top-0 h-[220px] pointer-events-none z-0">
            <svg
              viewBox="0 0 1000 220"
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
              aria-hidden="true"
            >
              {/* Clean Single Curved Wave Path starting at Pillar 1 and ending at Pillar 5 */}
              <path
                d="M 100 154 C 200 154, 200 96, 300 96 C 400 96, 400 154, 500 154 C 600 154, 600 96, 700 96 C 800 96, 800 154, 900 154"
                fill="none"
                stroke="#93C5FD"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-80"
              />
            </svg>
          </div>

          {/* Traveling Glowing Dot (Clean DOM Circle - No aspect-ratio distortion) */}
          {!isReducedMotion && (
            <div
              style={{
                left: `${dotPos.xPercent}%`,
                top: `${dotPos.y}px`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex items-center justify-center will-change-transform"
            >
              {/* Perfectly round glowing indicator with soft subtle glow */}
              <div className="w-3.5 h-3.5 rounded-full bg-[#1268B3] border-2 border-white shadow-md shadow-blue-500/50" />
            </div>
          )}

          {/* 5 Equal Columns Grid (gap-0 guarantees 10%, 30%, 50%, 70%, 90% alignment) */}
          <div className="grid grid-cols-5 gap-0 relative z-10">
            {PILLARS_DATA.map((pillar, idx) => {
              const IconComp = pillar.icon;
              const isActivated = activeStep >= idx;

              return (
                <div
                  key={pillar.number}
                  onClick={() => handlePillarClick(idx)}
                  className={`flex flex-col items-center text-center cursor-pointer group px-2 lg:px-4 ${
                    pillar.isElevated ? 'pt-[14px]' : 'pt-[72px]'
                  }`}
                >
                  {/* Circular Icon Badge (64px) - Clean styling without outer ring effect */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-400 shadow-sm ${
                      isActivated
                        ? 'bg-[#1268B3] text-white border-2 border-[#1268B3] shadow-md shadow-blue-500/25'
                        : 'bg-white text-[#1268B3] border-2 border-blue-200/90 group-hover:border-[#1268B3]/60'
                    }`}
                  >
                    <IconComp className="w-7 h-7 transition-transform group-hover:scale-105 duration-300" />
                  </div>

                  {/* Vertical Connecting Stem - Centered directly beneath badge */}
                  <div
                    className={`w-[2px] h-[18px] transition-colors duration-400 ${
                      isActivated ? 'bg-[#1268B3]' : 'bg-[#93C5FD]'
                    }`}
                  />

                  {/* Anchor Dot on the wave line - Centered directly at bottom of stem */}
                  <div
                    className={`w-2.5 h-2.5 -mt-[5px] rounded-full transition-all duration-400 z-10 ${
                      isActivated
                        ? 'bg-[#1268B3] ring-2 ring-white shadow-2xs'
                        : 'bg-white border-2 border-[#1268B3]'
                    }`}
                  />

                  {/* Distance clearance below anchor dot */}
                  <div className="h-4" />

                  {/* Pillar Number */}
                  <span className="block font-mono text-sm sm:text-base font-bold text-[#D71920] mb-1 tracking-tight">
                    {pillar.number}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-sm sm:text-base font-extrabold font-display tracking-tight uppercase mb-2 transition-colors duration-300 ${
                      isActivated ? 'text-[#1268B3]' : 'text-[#062B5C] group-hover:text-[#1268B3]'
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-4 max-w-[210px] mx-auto min-h-[56px]">
                    {pillar.description}
                  </p>

                  {/* Supporting Category Pill */}
                  <div className="pt-1">
                    <span
                      className={`inline-block px-3 py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                        isActivated
                          ? 'bg-[#1268B3] text-white shadow-2xs'
                          : 'bg-[#E1EDFC] text-[#1268B3] border border-blue-100 group-hover:bg-blue-100/90'
                      }`}
                    >
                      {pillar.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET: PRECISION CONNECTED VERTICAL TIMELINE (< 1024px)
            ========================================================================= */}
        <div className="block lg:hidden relative max-w-2xl mx-auto px-2 sm:px-4">
          <div className="flex flex-col">
            {PILLARS_DATA.map((pillar, idx) => {
              const IconComp = pillar.icon;
              const isActivated = activeStep >= idx;
              const isLast = idx === PILLARS_DATA.length - 1;

              return (
                <div
                  key={pillar.number}
                  onClick={() => handlePillarClick(idx)}
                  className="flex items-stretch gap-4 sm:gap-6 group cursor-pointer"
                >
                  {/* Left Rail: Perfectly Centered Badge and Connecting Track */}
                  <div className="flex flex-col items-center shrink-0 w-12 sm:w-14">
                    {/* Badge */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-400 z-10 shadow-sm ${
                        isActivated
                          ? 'bg-[#1268B3] text-white border-2 border-[#1268B3] shadow-md shadow-blue-500/25'
                          : 'bg-white text-[#1268B3] border-2 border-blue-200/90 group-hover:border-[#1268B3]/60'
                      }`}
                    >
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-105 duration-300" />
                    </div>

                    {/* Vertical Connecting Track directly down to next badge */}
                    {!isLast && (
                      <div className="w-[2px] flex-1 my-1.5 relative min-h-[44px] sm:min-h-[52px] bg-blue-100 rounded-full overflow-hidden">
                        {/* Animated Active Track Fill */}
                        <div
                          className="absolute inset-x-0 top-0 bg-[#1268B3] transition-all duration-500 ease-out"
                          style={{
                            height: activeStep > idx ? '100%' : '0%',
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Content */}
                  <div className={`flex-1 ${!isLast ? 'pb-7 sm:pb-9' : 'pb-2'} pt-0.5`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#D71920]">
                        {pillar.number}
                      </span>
                      <span className="text-slate-300">·</span>
                      <h3
                        className={`text-base sm:text-lg font-extrabold font-display uppercase tracking-tight transition-colors duration-300 ${
                          isActivated ? 'text-[#1268B3]' : 'text-[#062B5C] group-hover:text-[#1268B3]'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                      {pillar.description}
                    </p>

                    <div>
                      <span
                        className={`inline-block px-3 py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                          isActivated
                            ? 'bg-[#1268B3] text-white shadow-2xs'
                            : 'bg-[#E1EDFC] text-[#1268B3] border border-blue-100'
                        }`}
                      >
                        {pillar.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

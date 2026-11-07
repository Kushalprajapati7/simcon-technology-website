import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface CoreDiscipline {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  slug: string;
  category: string;
  heroImage: string;
  description: string;
  keyChips: string[];
  standards: string[];
  equipmentSpec: string;
}

const CORE_SERVICES: CoreDiscipline[] = [
  {
    id: 'geotechnical-services',
    number: '01',
    title: 'Geotechnical Services',
    shortTitle: 'Geotechnical Services',
    subtitle: 'Soil, Rock & Foundation Exploration',
    slug: 'geotechnical-services',
    category: 'Geotechnical Engineering',
    heroImage: '/assets/projects/geotechnical-investigation-site-1.png',
    description: 'NABL-accredited soil and rock laboratory mechanics, deep rotary diamond core drilling, and field penetration testing delivering verifiable ground parameters for heavy infrastructure.',
    keyChips: [
      'Soil Laboratory Testing (14 NABL Tests)',
      'Rock Core Geomechanics (13 NABL Tests)',
      'Advanced In-Situ Testing (SPT, SPLT & DPLT)',
      'Deep Rotary Diamond Core Drilling'
    ],
    standards: ['IS 1892', 'IS 2131', 'IS 2720', 'IS 13030', 'ASTM D422'],
    equipmentSpec: 'Hydraulic Rotary Diamond Core Rigs · Digital Triaxial Console'
  },
  {
    id: 'geophysical-survey',
    number: '02',
    title: 'Geophysical Survey',
    shortTitle: 'Geophysical Survey',
    subtitle: 'Non-Invasive Subsurface Exploration',
    slug: 'geophysical-survey',
    category: 'Subsurface Geophysics',
    heroImage: '/assets/services/geophysical/masw-seismic-imaging-2d.png',
    description: 'High-resolution non-invasive seismic imaging, electrical resistivity tomography, and radar exploration providing continuous subsurface cross-sections without site disruption or excavation.',
    keyChips: [
      'MASW (Vs30) & Seismic Refraction (SRT)',
      'Electrical Resistivity (2D/3D ERT Tomography)',
      'Ground Penetrating Radar (GPR Utility Mapping)',
      'Downhole & Crosshole Seismics (CHST/DHT)'
    ],
    standards: ['ASTM D5777', 'ASTM D4428', 'ASTM D6432', 'IS 15681', 'IS 1893'],
    equipmentSpec: '24-Channel Digital Seismograph · 2D/3D Multi-Electrode ERT · GPR Cart'
  },
  {
    id: 'ndt-structural-integrity',
    number: '03',
    title: 'NDT & Structural Integrity Assessment',
    shortTitle: 'NDT & Structural Integrity',
    subtitle: 'Deep Foundation & Diagnostics',
    slug: 'ndt-structural-integrity',
    category: 'Structural Diagnostics & NDT',
    heroImage: '/assets/services/ndt/rebound-hammer-concrete-testing.jpeg',
    description: 'Rigorous non-destructive testing, acoustic pile integrity evaluation, bridge proof load deflection verification, and comprehensive structural condition audits using calibrated digital instrumentation.',
    keyChips: [
      'Low Strain Pile Integrity Testing (PIT)',
      'Cross-Hole Sonic Logging (CHSL / CHUM)',
      'Rebound Hammer & Ultrasonic UPV Scanning',
      'Bridge & Span Proof Load Deflection Tests'
    ],
    standards: ['IS 13311', 'IS 14893', 'ASTM D5882', 'ASTM C876', 'IRC:SP:51'],
    equipmentSpec: 'Acoustic PIT Sensors · UPV Transducers · Proceq Covermeter'
  },
  {
    id: 'material-testing-services',
    number: '04',
    title: 'Material Testing Services',
    shortTitle: 'Material Testing Services',
    subtitle: 'Civil & Chemical Laboratories',
    slug: 'material-testing-services',
    category: 'Construction Material Testing',
    heroImage: '/assets/services/materials/universal-testing-machine-utm-steel.png',
    description: 'Central NABL ISO/IEC 17025 accredited laboratories validating 581+ parameters across cement, aggregates, bitumen, fresh/hardened concrete, steel rebars, and analytical wet chemistry.',
    keyChips: [
      'Cementitious & Aggregates Testing (25 Tests)',
      'Reinforcing Steel Rebars & Welds (14 Tests)',
      'Bituminous Binder & Asphalt Mix (19 Tests)',
      'Chemical Testing (Across 6 Matrices)'
    ],
    standards: ['IS 269', 'IS 383', 'IS 516', 'IS 1786', 'IS 456', 'ASTM C39'],
    equipmentSpec: '2000 kN Servo UTM · Auto Compressive Console · Spectrophotometer'
  }
];

const EXTENDED_SLIDES = [
  { ...CORE_SERVICES[3], originalIndex: 3, keyId: 'clone-prefix-04' },
  { ...CORE_SERVICES[0], originalIndex: 0, keyId: 'real-slide-01' },
  { ...CORE_SERVICES[1], originalIndex: 1, keyId: 'real-slide-02' },
  { ...CORE_SERVICES[2], originalIndex: 2, keyId: 'real-slide-03' },
  { ...CORE_SERVICES[3], originalIndex: 3, keyId: 'real-slide-04' },
  { ...CORE_SERVICES[0], originalIndex: 0, keyId: 'clone-suffix-01' },
];

export const ComprehensiveServices: React.FC = () => {
  // Start at index 1 (the first real slide: Discipline 01)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isServicesPaused, setIsServicesPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Active dot indicator (0 to 3) mapped from current index (with clone wraps)
  const activeDotIndex =
    currentIndex === 0
      ? 3
      : currentIndex === 5
      ? 0
      : currentIndex - 1;

  const handlePrev = () => {
    if (!isTransitionEnabled) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!isTransitionEnabled) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handleDotClick = (dotIdx: number) => {
    if (!isTransitionEnabled) return;
    setCurrentIndex(dotIdx + 1);
  };

  // Auto-advance slider every 5.5 seconds, pauses on hover
  useEffect(() => {
    if (isServicesPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(interval);
  }, [isServicesPaused, isTransitionEnabled]);

  // Handle seamless snap after sliding to clone slides
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== 'transform') return;

    if (currentIndex === 5) {
      // Slid forward into Clone 01 -> snap instantly to Real 01
      setIsTransitionEnabled(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // Slid backward into Clone 04 -> snap instantly to Real 04
      setIsTransitionEnabled(false);
      setCurrentIndex(4);
    }
  };

  // Re-enable CSS transition after the instant snap has rendered
  useEffect(() => {
    if (!isTransitionEnabled) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitionEnabled]);

  // Safety fallback if onTransitionEnd is deferred by inactive browser tab
  useEffect(() => {
    if (currentIndex === 0 || currentIndex === 5) {
      const timer = setTimeout(() => {
        setIsTransitionEnabled(false);
        setCurrentIndex(currentIndex === 0 ? 4 : 1);
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  return (
    <section className="py-8 sm:py-12 bg-white relative">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Compact Section Header with Slider Navigation Controls */}
        <div className="reveal reveal-up flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase block">
                INTEGRATED SOLUTIONS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-display text-[#062B5C] tracking-tight leading-tight">
              Four Core Engineering Disciplines<span className="text-[#D71920]">.</span>
            </h2>
          </div>

          {/* Right Controls: Arrow Navigation + All Services Link */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/services"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] uppercase tracking-wider mr-2 transition-colors"
            >
              <span>All 581 Parameters</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-[#1268B3] hover:text-white hover:border-[#1268B3] text-slate-700 transition-colors flex items-center justify-center shadow-2xs cursor-pointer"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-[#1268B3] hover:text-white hover:border-[#1268B3] text-slate-700 transition-colors flex items-center justify-center shadow-2xs cursor-pointer"
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Compact Heroic Slider Card: Continuous Sliding Carousel with Pre-mounted Images */}
        <div
          className="reveal reveal-scale bg-white rounded-3xl border border-slate-200/90 shadow-md overflow-hidden relative"
          style={{ '--delay': '0.12s' } as React.CSSProperties}
          onMouseEnter={() => setIsServicesPaused(true)}
          onMouseLeave={() => setIsServicesPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Continuous Sliding Track with seamless infinite wrap */}
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex w-full will-change-transform ${
              isTransitionEnabled
                ? 'transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]'
                : 'transition-none'
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {EXTENDED_SLIDES.map((srv) => {
              const isSlideReversed = srv.originalIndex % 2 === 1;
              return (
                <div key={srv.keyId} className="w-full shrink-0 flex-none">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[440px] h-full">

                    {/* Image Column: 7 cols on lg (order-1 on 1st & 3rd, order-2 on 2nd & 4th) */}
                    <div
                      className={`lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-full bg-slate-900 overflow-hidden group ${
                        isSlideReversed ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <img
                        src={srv.heroImage}
                        alt={srv.title}
                        loading="eager"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />

                      {/* Top Discipline Tag Badge */}
                      <div className="absolute top-4 left-4 z-10 bg-[#062B5C]/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold shadow-md flex items-center gap-2">
                        <span className="text-[#1268B3]">DISCIPLINE {srv.number}</span>
                        <span className="text-white/40">·</span>
                        <span className="text-slate-200 uppercase tracking-wider text-[10px]">
                          {srv.category}
                        </span>
                      </div>

                      {/* Top Right Accreditation Pill */}
                      <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-1.5 bg-white/90 backdrop-blur-xs text-[#062B5C] px-3 py-1 rounded-full text-[10px] font-mono font-bold shadow-xs">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#1268B3]" />
                        <span>NABL ISO/IEC 17025</span>
                      </div>

                      {/* Bottom Technical Setup Overlay Bar */}
                      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#062B5C]/95 via-[#062B5C]/80 to-transparent p-4 sm:p-5 text-white">
                        <span className="text-[10px] font-mono uppercase text-blue-300 font-bold block mb-1">
                          PRIMARY TESTING RIGS &amp; SETUP
                        </span>
                        <p className="text-xs font-mono text-slate-200 leading-snug">
                          {srv.equipmentSpec}
                        </p>
                      </div>
                    </div>

                    {/* Content Column: 5 cols on lg (order-2 on 1st & 3rd, order-1 on 2nd & 4th) */}
                    <div
                      className={`lg:col-span-5 p-5 sm:p-6 lg:p-7 flex flex-col justify-between bg-white ${
                        isSlideReversed ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div>
                        {/* Discipline Header */}
                        <span className="text-xs font-mono font-bold text-[#1268B3] uppercase tracking-wider">
                          DISCIPLINE 0{srv.originalIndex + 1} OF 04
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold font-display text-[#062B5C] tracking-tight leading-snug mt-1">
                          {srv.title}
                        </h3>
                        <p className="text-xs font-mono font-semibold text-slate-400 mt-0.5">
                          {srv.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                          {srv.description}
                        </p>

                        {/* Compact Capability Chips (4 Bullet Points) */}
                        <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-1.5">
                          {srv.keyChips.map((chip, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#062B5C]">
                              <CheckCircle2 className="w-4 h-4 text-[#1268B3] shrink-0" />
                              <span className="truncate">{chip}</span>
                            </div>
                          ))}
                        </div>

                        {/* Applicable Codes Strip */}
                        <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-slate-500">
                          <span className="font-bold text-[#062B5C]">STANDARDS:</span>
                          {srv.standards.map((std, i) => (
                            <span
                              key={i}
                              className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-bold border border-slate-200/60"
                            >
                              {std}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <Link
                          to={`/services/${srv.slug}`}
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1268B3] hover:bg-[#062B5C] text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-md transition-all duration-200"
                        >
                          <span>Explore {srv.shortTitle} Scope</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>

                        <Link
                          to="/contact#enquiry"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#062B5C] hover:text-[#1268B3] transition-colors"
                        >
                          <span>Request Quotation</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Slider Pagination Dots (`....`) */}
        <div className="flex items-center justify-center gap-2.5 mt-6">
          {CORE_SERVICES.map((srv, idx) => {
            const isActive = activeDotIndex === idx;
            return (
              <button
                key={srv.id}
                type="button"
                onClick={() => handleDotClick(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-8 h-2.5 bg-[#1268B3]'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to ${srv.title} slide`}
                title={`${srv.number}. ${srv.title}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

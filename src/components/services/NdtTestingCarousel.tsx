import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export interface NdtTestSlide {
  id: string;
  name: string;
  category: string;
  standard: string;
  image: string;
  description: string;
}

export const NDT_CAROUSEL_TESTS: NdtTestSlide[] = [
  {
    id: 'rebound-hammer',
    name: 'Rebound Hammer Concrete Testing',
    category: 'Non-Destructive Testing',
    standard: 'IS 13311 (Part 2) / ASTM C805',
    image: '/assets/services/ndt/rebound-hammer-concrete-testing.jpeg',
    description: 'Digital rebound hammer measuring in-situ compressive surface hardness and uniformity across structural elements.'
  },
  {
    id: 'upv-testing',
    name: 'Ultrasonic Pulse Velocity (UPV)',
    category: 'Acoustic Diagnostics',
    standard: 'IS 13311 (Part 1) / ASTM C597',
    image: '/assets/services/ndt/ultrasonic-pulse-velocity-upv.jpeg',
    description: 'Acoustic pulse transit speed identifying internal honeycombing, void inclusions, and concrete homogeneity.'
  },
  {
    id: 'pit-testing',
    name: 'Low Strain Pile Integrity Test (PIT)',
    category: 'Deep Foundations',
    standard: 'ASTM D5882 / IS 14893',
    image: '/assets/services/ndt/pile-integrity-test-pit-sonic.jpeg',
    description: 'Sonic reflection wave velocity profiling validating bored cast-in-situ pile length, necking, and continuity.'
  },
  {
    id: 'bridge-load-test',
    name: 'Span Proof Load & Deflection Testing',
    category: 'Bridge Audits',
    standard: 'IRC:SP:51',
    image: '/assets/services/structural-health/bridge-deflection-load-test.jpeg',
    description: 'Static truck axle load testing with electronic LVDTs measuring mid-span deflection and 24-hour elastic recovery.'
  },
  {
    id: 'half-cell',
    name: 'Half-Cell Corrosion Potential Mapping',
    category: 'Electrochemical Testing',
    standard: 'ASTM C876',
    image: '/assets/services/structural-health/half-cell-corrosion-mapping.png',
    description: 'Copper-copper sulfate reference electrode survey mapping active rebar depassivation and corrosion probability.'
  },
  {
    id: 'bridge-pier-ndt',
    name: 'Substructure Pier Integrity Assessment',
    category: 'Bridge Diagnostics',
    standard: 'IRC:SP:40',
    image: '/assets/services/ndt/bridge-pier-ndt-testing.jpeg',
    description: 'Comprehensive distress mapping, core extraction, and ultrasonic tomography on critical railway & highway piers.'
  },
  {
    id: 'sonreb-combined',
    name: 'Combined SONREB Method (UPV + Rebound)',
    category: 'Non-Destructive Testing',
    standard: 'IS 13311 / RILEM TC-43',
    image: '/assets/services/ndt/rebound-hammer-upv.jpeg',
    description: 'Multi-parametric correlation overcoming surface carbonation errors to deduce true in-situ core compressive strength.'
  },
  {
    id: 'vibration-monitoring',
    name: 'Structural Vibration & Dynamic Response',
    category: 'Health Monitoring',
    standard: 'ISO 18649 / IS 1893',
    image: '/assets/services/structural-health/structural-vibration-monitoring.png',
    description: 'High-sensitivity triaxial accelerometers recording ambient vibration frequencies and modal structural damping.'
  }
];

export const NdtTestingCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1);
      } else if (width < 1024) {
        setItemsPerView(2);
      } else if (width < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, NDT_CAROUSEL_TESTS.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Touch Swipe Handling for Mobile & Tablets
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Continuous automatic sliding without stopping on hover
  useEffect(() => {
    if (maxIndex === 0) return;
    timerRef.current = window.setInterval(() => {
      nextSlide();
    }, 3600);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [maxIndex, nextSlide]);

  return (
    <div className="space-y-4 sm:space-y-6" aria-label="NDT Testing Slideshow">
      {/* Slide Counter Header (Clean, no filter pills as requested) */}
      <div className="flex items-center justify-between gap-4 pb-1 sm:pb-2">
        <span className="text-[11px] sm:text-xs font-mono font-bold text-[#1268B3] uppercase tracking-wider">
          Diagnostic Apparatus &amp; Field Setups ({NDT_CAROUSEL_TESTS.length} Procedures)
        </span>
        <span className="text-xs font-mono text-slate-500 font-semibold shrink-0">
          {String(currentIndex + 1).padStart(2, '0')} / {String(maxIndex + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Modern 4-Card Slideshow Track */}
      <div
        className="relative group/carousel touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-1 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-[#062B5C] text-[#062B5C] hover:text-white shadow-lg sm:shadow-xl border border-slate-200/90 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          aria-label="Previous test slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Overflow Container for Slides */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {NDT_CAROUSEL_TESTS.map((test) => (
              <div
                key={test.id}
                className="shrink-0 px-2.5"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="group relative h-[270px] sm:h-[285px] lg:h-[295px] xl:h-[320px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-end border border-slate-200/80 bg-slate-900">
                  {/* Full Background Image */}
                  <img
                    src={test.image}
                    alt={test.name}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Category Pill Badge */}
                  <div className="absolute top-2.5 left-2.5 z-30 pointer-events-none">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#062B5C] text-white border border-white/30 shadow-md">
                      {test.category}
                    </span>
                  </div>

                  {/* Bottom: Solid Theme Navy Strip */}
                  <div className="relative z-10 bg-[#062B5C] px-3.5 sm:px-4 min-h-[44px] h-[46px] sm:h-[50px] text-white transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none flex items-center">
                    <h3 className="font-display font-bold text-xs sm:text-[13px] text-white leading-tight line-clamp-2">
                      {test.name}
                    </h3>
                  </div>

                  {/* Full Card Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062B5C]/95 via-[#062B5C]/70 to-[#062B5C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-20 flex flex-col justify-end p-4 sm:p-5 text-white">
                    <h3 className="font-display font-extrabold text-sm sm:text-base text-white leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                      {test.name}
                    </h3>

                    <p className="text-xs text-sky-200 font-semibold font-mono mt-1 flex items-center gap-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                      <span>{test.standard}</span>
                    </p>

                    <p className="text-[11px] text-slate-200 leading-relaxed line-clamp-2 mt-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {test.description}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-white/25">
                      <Link
                        to={`/contact?test=${encodeURIComponent(test.name)}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-white/90 text-white text-[11px] font-mono font-bold shadow-xs transition-all hover:bg-white hover:text-[#062B5C] cursor-pointer"
                      >
                        <span>Inquire Test</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-1 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-[#062B5C] text-[#062B5C] hover:text-white shadow-lg sm:shadow-xl border border-slate-200/90 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          aria-label="Next test slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Auto-play Progress Dots */}
      <div className="flex items-center justify-center gap-1.5 pt-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === idx
                ? 'w-7 h-2 bg-[#D71920]'
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export interface GeophysicalTestSlide {
  id: string;
  name: string;
  category: 'Seismic Profiling' | 'Electrical & Radar' | 'Borehole & In-Situ';
  standard: string;
  image: string;
  description: string;
}

export const GEOPHYSICAL_CAROUSEL_TESTS: GeophysicalTestSlide[] = [
  {
    id: 'masw-2d',
    name: 'MASW 2D Seismic Imaging Profile',
    category: 'Seismic Profiling',
    standard: 'ASTM D5777 / IS 1893',
    image: '/assets/services/geophysical/masw-seismic-imaging-2d.png',
    description: 'Continuous 2D shear wave velocity (Vs30) cross-sections for foundation depth & seismic site classification.'
  },
  {
    id: 'srt-tomography',
    name: 'Seismic Refraction Tomography (SRT)',
    category: 'Seismic Profiling',
    standard: 'ASTM D5777 / IS 15681',
    image: '/assets/services/geophysical/seismic-refraction-tomography.png',
    description: 'Compressional P-wave velocity tomograms mapping bedrock depth, rippability, and fault fracture zones.'
  },
  {
    id: 'chst-crosshole',
    name: 'Crosshole Seismic Velocity Testing (CHST)',
    category: 'Borehole & In-Situ',
    standard: 'ASTM D4428',
    image: '/assets/services/field-testing/crosshole-seismic-testing-field.png',
    description: 'Direct borehole-to-borehole acoustic pulse transit time measuring in-situ Vp and Vs elastic moduli.'
  },
  {
    id: 'masw-dispersion',
    name: 'MASW Dispersion Curve Analysis',
    category: 'Seismic Profiling',
    standard: 'Rayleigh Wave Inversion',
    image: '/assets/services/geophysical/masw-dispersion-analysis.png',
    description: 'Phase-velocity frequency spectrum extraction identifying Rayleigh fundamental and higher wave modes.'
  },
  {
    id: 'vs30-profile',
    name: 'Shear Wave Velocity (Vs30) Profile',
    category: 'Seismic Profiling',
    standard: 'NEHRP / IS 1893',
    image: '/assets/services/geophysical/shear-wave-velocity-profile.png',
    description: 'Vertical 1D/2D stiffness distribution establishing earthquake ground motion amplification factors.'
  },
  {
    id: 'geophone-spread',
    name: 'Multi-Channel Geophone Spread Deployment',
    category: 'Seismic Profiling',
    standard: '24/48-Channel Spreads',
    image: '/assets/services/geophysical/masw-field-geophone-spread.png',
    description: 'High-frequency low-noise vertical sensor arrays coupled with precision land streamer cables.'
  },
  {
    id: 'seismic-impulse',
    name: 'Seismic Impulsive Energy Wave Generation',
    category: 'Seismic Profiling',
    standard: 'Accelerated Weight Drop',
    image: '/assets/services/geophysical/seismic-impulsive-energy-generation.png',
    description: 'Calibrated mechanical impact energy pulses penetrating dense overburden and rock strata.'
  },
  {
    id: 'stratigraphic-tomogram',
    name: '2D Subsurface Stratigraphic Section',
    category: 'Electrical & Radar',
    standard: 'Tomographic Inversion',
    image: '/assets/services/geophysical/2d-subsurface-stratigraphic-tomogram.png',
    description: 'Color-coded inversion tomogram showing soil-rock interface, weathering layers, and moisture anomalies.'
  }
];

export const GeophysicalTestingCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterCategory, setFilterCategory] = useState<'All' | 'Seismic Profiling' | 'Electrical & Radar' | 'Borehole & In-Situ'>('All');
  const [itemsPerView, setItemsPerView] = useState(4);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Filter items
  const filteredTests = filterCategory === 'All'
    ? GEOPHYSICAL_CAROUSEL_TESTS
    : GEOPHYSICAL_CAROUSEL_TESTS.filter(t => t.category === filterCategory);

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

  const maxIndex = Math.max(0, filteredTests.length - itemsPerView);

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

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filterCategory]);

  // Continuous automatic sliding
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
    <div className="space-y-4 sm:space-y-6" aria-label="Geophysical Survey Testing Slideshow">
      {/* 1. CAROUSEL CATEGORY FILTER & SLIDE COUNTER */}
      <div className="flex items-center justify-between gap-4 pb-1 sm:pb-2">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none pb-1 max-w-[80%] sm:max-w-none">
          {(['All', 'Seismic Profiling', 'Electrical & Radar', 'Borehole & In-Situ'] as const).map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilterCategory(cat)}
              className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${filterCategory === cat
                  ? 'bg-[#062B5C] text-white shadow-sm ring-2 ring-[#062B5C]/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
            >
              {cat === 'All' ? `All Methods (${GEOPHYSICAL_CAROUSEL_TESTS.length})` : cat}
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <span className="text-xs font-mono text-slate-500 font-semibold shrink-0">
          {String(currentIndex + 1).padStart(2, '0')} / {String(maxIndex + 1).padStart(2, '0')}
        </span>
      </div>

      {/* 2. MODERN 4-CARD SLIDESHOW TRACK */}
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
            {filteredTests.map((test) => (
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
                        <span>Inquire Method</span>
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

      {/* 3. AUTO-PLAY PROGRESS & PAGINATION DOTS */}
      <div className="flex items-center justify-center gap-1.5 pt-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${currentIndex === idx
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


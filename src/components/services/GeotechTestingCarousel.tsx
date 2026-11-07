import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export interface GeotechTestSlide {
  id: string;
  name: string;
  category: 'Soil Testing' | 'Rock Mechanics' | 'Field Testing';
  standard: string;
  image: string;
  description: string;
}

export const GEOTECH_CAROUSEL_TESTS: GeotechTestSlide[] = [
  {
    id: 'grain-size',
    name: 'Grain Size Analysis (Sieve & Hydrometer)',
    category: 'Soil Testing',
    standard: 'IS 2720 (Part 4) / ASTM D422',
    image: '/assets/services/soil-testing/grain-size-sieve-analysis.png',
    description: 'Mechanical sieving & hydrometer sedimentation determining particle-size gradation curves.'
  },
  {
    id: 'triaxial-soil',
    name: 'Automated Triaxial Shear (UU, CU, CD)',
    category: 'Soil Testing',
    standard: 'IS 2720 (Parts 11 & 12) / ASTM D2850',
    image: '/assets/services/soil-testing/triaxial-shear-lab.png',
    description: 'Digital automated triaxial cells measuring effective shear strength (c\', φ\') and pore pressures.'
  },
  {
    id: 'consolidation',
    name: '1D Consolidation (Oedometer) & Swell',
    category: 'Soil Testing',
    standard: 'IS 2720 (Part 15) / ASTM D2435',
    image: '/assets/services/soil-testing/consolidation-test-apparatus.png',
    description: 'Pre-consolidation pressure, compression index (Cc), and long-term primary settlement rates.'
  },
  {
    id: 'proctor-compaction',
    name: 'Soil Compaction (Standard & Modified Proctor)',
    category: 'Soil Testing',
    standard: 'IS 2720 (Parts 7 & 8) / ASTM D698',
    image: '/assets/services/soil-testing/soil-compaction-proctor.png',
    description: 'Moisture-density curves establishing optimum moisture (OMC) and maximum dry density (MDD).'
  },
  {
    id: 'soil-permeability',
    name: 'Constant & Falling Head Permeability',
    category: 'Soil Testing',
    standard: 'IS 2720 (Part 17) / ASTM D2434',
    image: '/assets/services/soil-testing/permeability-lab-test.png',
    description: 'Hydraulic conductivity coefficient (k) for dewatering schemes, seepage, and dams.'
  },
  {
    id: 'rock-ucs',
    name: 'Uniaxial Compressive Strength (UCS) of Rock',
    category: 'Rock Mechanics',
    standard: 'IS 9143 / ASTM D7012',
    image: '/assets/services/rock-testing/ucs-uniaxial-compressive-rock.png',
    description: 'Peak unconfined compressive failure on intact rock core cylinders for foundation socketing.'
  },
  {
    id: 'point-load',
    name: 'Point Load Strength Index (Is50)',
    category: 'Rock Mechanics',
    standard: 'IS 8764 / ASTM D5731',
    image: '/assets/services/rock-testing/point-load-test-apparatus.png',
    description: 'Rapid diametral and axial rock core index strength for rock mass rating (RMR) and GSI.'
  },
  {
    id: 'rock-triaxial',
    name: 'Rock Triaxial Compression (Hoek Cell)',
    category: 'Rock Mechanics',
    standard: 'IS 13047 / ASTM D7012',
    image: '/assets/services/rock-testing/rock-triaxial-hoek-cell.png',
    description: 'Hoek cell high confining pressure triaxial test establishing Mohr-Coulomb & Hoek-Brown rock failure.'
  },
  {
    id: 'slake-durability',
    name: 'Slake Durability Index Test',
    category: 'Rock Mechanics',
    standard: 'IS 10050 / ASTM D4644',
    image: '/assets/services/rock-testing/rock-slake-durability-test.png',
    description: 'Resistance of shales, mudstones, and weathered rocks to disintegration upon wet-dry cycles.'
  },
  {
    id: 'rock-core-petrographic',
    name: 'Intact Rock Core & Petrographic Logging',
    category: 'Rock Mechanics',
    standard: 'IS 4144 / IS 13030',
    image: '/assets/services/rock-testing/rock-core-samples-laboratory.png',
    description: 'Microscopic thin-section evaluation of mineral composition, RQD, weathering, and joints.'
  },
  {
    id: 'scpt-dcpt',
    name: 'Static / Dynamic Cone Penetration (SCPT/DCPT)',
    category: 'Field Testing',
    standard: 'IS 4968 / ASTM D3441',
    image: '/assets/services/field-testing/scpt-rig-field-operation.png',
    description: 'Continuous profiling of cone tip resistance (qc) and sleeve friction (fs) without advance boring.'
  },
  {
    id: 'plate-load',
    name: 'Static & Cyclic Plate Load Test (PLT)',
    category: 'Field Testing',
    standard: 'IS 1888 / ASTM D1194',
    image: '/assets/services/field-testing/plate-load-test-setup.png',
    description: 'In-situ allowable bearing capacity and subgrade reaction modulus (k-value) for foundations.'
  },
  {
    id: 'pile-load',
    name: 'High-Tonnage Static Pile Load Test (SPLT)',
    category: 'Field Testing',
    standard: 'IS 2911 (Part 4) / ASTM D1143',
    image: '/assets/services/field-testing/anchor-pile-load-test.png',
    description: 'Compressive, uplift pullout, and lateral thrust validation up to 2500+ tonnes with load frames.'
  },
  {
    id: 'spt-rig',
    name: 'Standard Penetration Testing (SPT)',
    category: 'Field Testing',
    standard: 'IS 2131 / ASTM D1586',
    image: '/assets/services/field-testing/field-dcpt-testing-rig.png',
    description: 'In-situ borehole penetration resistance (N-value) with calibrated automatic trip hammer.'
  },
  {
    id: 'ecptu-piezocone',
    name: 'Piezocone Penetration Test (ECPTU)',
    category: 'Field Testing',
    standard: 'ASTM D5778 / ISO 22476-1',
    image: '/assets/services/field-testing/cone-penetration-probing.png',
    description: 'High-precision tip resistance, sleeve friction, and dynamic pore water pressure dissipation.'
  },
  {
    id: 'crosshole-seismic',
    name: 'Crosshole Seismic Field Velocity (CHST)',
    category: 'Field Testing',
    standard: 'ASTM D4428',
    image: '/assets/services/field-testing/crosshole-seismic-testing-field.png',
    description: 'Borehole-to-borehole acoustic pulse transit time recording high-resolution in-situ Vp & Vs waves.'
  }
];

export const GeotechTestingCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterCategory, setFilterCategory] = useState<'All' | 'Soil Testing' | 'Rock Mechanics' | 'Field Testing'>('All');
  const [itemsPerView, setItemsPerView] = useState(4);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Filter items
  const filteredTests = filterCategory === 'All'
    ? GEOTECH_CAROUSEL_TESTS
    : GEOTECH_CAROUSEL_TESTS.filter(t => t.category === filterCategory);

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

  // Continuous automatic sliding without stopping on hover
  useEffect(() => {
    if (maxIndex === 0) return;
    timerRef.current = window.setInterval(() => {
      nextSlide();
    }, 3600); // 3.6 seconds smooth auto-slide

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [maxIndex, nextSlide]);

  return (
    <div className="space-y-4 sm:space-y-6" aria-label="Geotechnical Testing Slideshow">
      {/* 1. CAROUSEL CATEGORY FILTER & SLIDE COUNTER */}
      <div className="flex items-center justify-between gap-4 pb-1 sm:pb-2">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none pb-1 max-w-[80%] sm:max-w-none">
          {(['All', 'Soil Testing', 'Rock Mechanics', 'Field Testing'] as const).map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilterCategory(cat)}
              className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                filterCategory === cat
                  ? 'bg-[#062B5C] text-white shadow-sm ring-2 ring-[#062B5C]/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'All' ? `All Tests (${GEOTECH_CAROUSEL_TESTS.length})` : cat}
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <span className="text-xs font-mono text-slate-500 font-semibold shrink-0">
          {String(currentIndex + 1).padStart(2, '0')} / {String(maxIndex + 1).padStart(2, '0')}
        </span>
      </div>

      {/* 2. MODERN 4-CARD SLIDESHOW TRACK WITH PREV/NEXT BUTTONS AT START AND END */}
      <div
        className="relative group/carousel touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous Button at Carousel Start (Left Edge) */}
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

                  {/* Bottom: Solid Theme Navy Strip (Reduced slim height: ~46-50px, shows ONLY testing label) */}
                  <div className="relative z-10 bg-[#062B5C] px-3.5 sm:px-4 min-h-[44px] h-[46px] sm:h-[50px] text-white transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none flex items-center">
                    <h3 className="font-display font-bold text-xs sm:text-[13px] text-white leading-tight line-clamp-2">
                      {test.name}
                    </h3>
                  </div>

                  {/* Full Card Hover Overlay (Reveals Title, IS Number, Description & Button on Hover) */}
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

        {/* Next Button at Carousel End (Right Edge) */}
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

import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PROJECTS, PROJECT_CATEGORIES, ProjectCategory } from '@/data/projects';
import { SEOHead } from '@/components/common/SEOHead';
import {
  Search,
  MapPin,
  Building2,
  ArrowRight,
  X
} from 'lucide-react';

// Systematic Technical Project Code Mapping
const getProjectCode = (id: string, idx: number): string => {
  const prefixMap: Record<string, string> = {
    'mahsr-bullet-train-sabarmati': 'PRJ-MAHSR-01',
    'bhopal-metro-rail': 'PRJ-MPMR-02',
    'indore-metro-rail-in04': 'PRJ-INDR-03',
    'rishikesh-karnaprayag-railway-tunnel': 'PRJ-RVNL-04',
    'secr-railway-tunnels-bridges': 'PRJ-SECR-05',
    'pitol-jhabua-bridge-testing': 'PRJ-WR-06',
    'ahmedabad-svpi-airport-gpr': 'PRJ-SVPI-07',
    'lucknow-airport-inflight-kitchen': 'PRJ-LKO-08',
    'deendayal-port-oil-jetty': 'PRJ-DPA-09',
    'dp-world-township-cfs': 'PRJ-DPW-10',
    'khavda-200mw-hybrid-project': 'PRJ-NTPC-11',
    'adani-thermal-power-plant': 'PRJ-ADNI-12',
    'auda-elevated-corridor': 'PRJ-AUDA-13',
    'mundra-petrochem-investigation': 'PRJ-MUND-14',
    'iffco-kandla-pile-testing': 'PRJ-IFFCO-15',
  };
  return prefixMap[id] || `PRJ-SCN-${String(idx + 1).padStart(2, '0')}`;
};

// Client Authorities for Trust & Filter
const CLIENT_AUTHORITIES = [
  { name: 'NHSRCL', fullName: 'National High Speed Rail Corp' },
  { name: 'L&T Construction', fullName: 'Larsen & Toubro Ltd' },
  { name: 'RVNL', fullName: 'Rail Vikas Nigam Limited' },
  { name: 'MPMRCL', fullName: 'Madhya Pradesh Metro Rail' },
  { name: 'AAI', fullName: 'Airports Authority of India' },
  { name: 'Deendayal Port', fullName: 'Kandla Port Authority' },
  { name: 'NTPC', fullName: 'National Thermal Power Corp' },
  { name: 'Adani Group', fullName: 'Adani Ports & Energy' },
];

export const Projects: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as ProjectCategory) || 'All';

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    PROJECT_CATEGORIES.includes(initialCategory) ? initialCategory : 'All'
  );
  const [searchQuery, setSearchQuery] = useState('');

  // Selected thumbnail for Flagship Spotlight
  const [activeSpotlightImage, setActiveSpotlightImage] = useState<string>(
    '/assets/projects/project-sabarmati-bullet-train-hub.png'
  );

  // Sync category state with URL parameters
  const handleCategoryChange = (cat: ProjectCategory) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  // Filter projects based on active category and query
  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === '' ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.client && p.client.toLowerCase().includes(q)) ||
      (p.location && p.location.toLowerCase().includes(q)) ||
      p.services.some((s) => s.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  // Flagship project reference (MAHSR Bullet Train)
  const flagshipProject = PROJECTS.find((p) => p.id === 'mahsr-bullet-train-sabarmati') || PROJECTS[0];
  const isFlagshipVisible =
    (activeCategory === 'All' || activeCategory === flagshipProject.category) && searchQuery.trim() === '';

  // Other projects (excluding the flagship when visible in the spotlight to avoid redundant duplicate card)
  const displayProjects = isFlagshipVisible
    ? filteredProjects.filter((p) => p.id !== flagshipProject.id)
    : filteredProjects;

  return (
    <div className="pt-[72px] bg-white min-h-screen">
      <SEOHead
        customSeo={{
          title: "Infrastructure Projects & Case Studies | SIMCON Technology",
          description: "Explore 6,480+ completed geotechnical, geophysical, and NDT engineering case studies across India: High-Speed Bullet Train viaducts, Himalayan tunnels, international airports, ports, and mega energy parks.",
          canonical: "https://www.simcon.co.in/projects",
        }}
      />

      {/* =========================================================================
          1. HERO HEADER SECTION (Blueprint CAD Grid + Data Metrics Ribbon)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#062B5C] text-white">
        {/* CAD Grid Texture */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none z-0" />

        {/* Blueprint Linework */}
        <div className="absolute right-0 inset-y-0 w-1/2 pointer-events-none opacity-15 z-0 hidden lg:block">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none">
            <line x1="15%" y1="0" x2="15%" y2="100%" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="55%" y1="0" x2="55%" y2="100%" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="85%" y1="0" x2="85%" y2="100%" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="55%" cy="50%" r="180" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="6 6" />
            <circle cx="55%" cy="50%" r="280" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="8 8" />
          </svg>
        </div>

        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full py-8 sm:py-10 lg:py-12">
          <div className="max-w-5xl space-y-3.5 sm:space-y-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-slate-300 flex-wrap" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-400">&gt;</span>
              <span className="text-slate-200">Projects &amp; Case Studies</span>
            </nav>

            {/* Technical Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.18em] sm:tracking-[0.2em] text-slate-300 uppercase">
                NATIONAL INFRASTRUCTURE REPOSITORY • 18+ STATES &amp; UTS
              </span>
            </div>

            {/* Title (Sleek 1-2 lines matching Services page) */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-extrabold font-display text-white tracking-tight leading-[1.15]">
              Infrastructure Case Studies &amp; Testing Portfolio
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-3xl">
              From India&apos;s pioneer high-speed bullet train corridor and strategic Himalayan railway tunnels to international airport aprons, deep-water oil jetties, and renewable energy parks—explore certified geotechnical, geophysical, and structural testing case studies executed across 6,480+ projects.
            </p>

            {/* Operational Metrics Strip (Compact & Sleek) */}
            <div className="pt-1 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 max-w-2xl">
              <div className="bg-white/10 backdrop-blur-xs p-2 sm:p-2.5 rounded-lg border border-white/15">
                <span className="text-base sm:text-lg font-bold font-display text-white block">6,480+</span>
                <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider block mt-0.5">Projects Delivered</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-2 sm:p-2.5 rounded-lg border border-white/15">
                <span className="text-base sm:text-lg font-bold font-display text-white block">18+</span>
                <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider block mt-0.5">States &amp; UTs</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-2 sm:p-2.5 rounded-lg border border-white/15">
                <span className="text-base sm:text-lg font-bold font-display text-white block">1,000+</span>
                <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider block mt-0.5">Field Boreholes</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-2 sm:p-2.5 rounded-lg border border-white/15">
                <span className="text-base sm:text-lg font-bold font-display text-white block">ISO/IEC</span>
                <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider block mt-0.5">17025 Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FLAGSHIP NATIONAL SHOWCASE (Marquee Feature)
             Displays India's Pioneer Bullet Train Project when viewing "All"
          ========================================================================= */}
      {isFlagshipVisible && (
        <section className="py-8 sm:py-12 bg-[#F8FAFC] border-b border-slate-200">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

                {/* Left Side: Technical Narrative & Milestones (7 cols on lg) */}
                <div className="lg:col-span-7 p-5 sm:p-7 xl:p-10 flex flex-col justify-between space-y-5 sm:space-y-6">
                  <div className="space-y-3.5 sm:space-y-4">
                    {/* Flagship Badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider bg-[#062B5C] text-white">
                        FLAGSHIP NATIONAL INFRASTRUCTURE
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-50 text-[#1268B3] border border-blue-200/60 uppercase">
                        {getProjectCode(flagshipProject.id, 0)}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {flagshipProject.year}
                      </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-xl sm:text-2xl xl:text-3xl font-extrabold font-display text-[#062B5C] tracking-tight leading-tight">
                      {flagshipProject.title}
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#536271] leading-relaxed max-w-2xl">
                      {flagshipProject.description}
                    </p>

                    {/* Technical Authority & Parameters Matrix */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                      <div className="p-2.5 sm:p-3 rounded-lg bg-[#F8FAFC] border border-slate-200/70">
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">Authority &amp; EPC</span>
                        <span className="text-xs font-bold text-[#062B5C] block mt-0.5 truncate">
                          {flagshipProject.client}
                        </span>
                      </div>
                      <div className="p-2.5 sm:p-3 rounded-lg bg-[#F8FAFC] border border-slate-200/70">
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">Alignment Corridor</span>
                        <span className="text-xs font-bold text-[#062B5C] block mt-0.5 truncate">
                          {flagshipProject.location}
                        </span>
                      </div>
                      <div className="p-2.5 sm:p-3 rounded-lg bg-[#F8FAFC] border border-slate-200/70 col-span-2 sm:col-span-1">
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">Standard Criteria</span>
                        <span className="text-xs font-bold text-[#1268B3] block mt-0.5 truncate">
                          Japanese Shinkansen / IRS
                        </span>
                      </div>
                    </div>

                    {/* Testing Scope Pills */}
                    <div className="pt-1 flex flex-wrap gap-1.5 sm:gap-2">
                      {flagshipProject.services.map((svc, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-[#EEF5FC] border border-[#D9E8F7] text-[10px] sm:text-[11px] font-mono font-medium text-[#062B5C]"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                    <Link
                      to={`/projects/${flagshipProject.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#062B5C] hover:bg-[#1268B3] text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors group shadow-sm w-full sm:w-auto text-center"
                    >
                      <span>Explore Bullet Train Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 text-center sm:text-right">
                      Verified NABL Field &amp; Dynamic Testing
                    </span>
                  </div>
                </div>

                {/* Right Side: Interactive Image Gallery (5 cols on lg) */}
                <div className="lg:col-span-5 bg-slate-900 relative flex flex-col justify-between overflow-hidden min-h-[220px] sm:min-h-[300px] lg:min-h-full">
                  <div className="relative flex-1 w-full h-full min-h-[200px]">
                    <img
                      src={activeSpotlightImage}
                      alt="Mumbai–Ahmedabad High Speed Rail"
                      className="w-full h-full object-cover transition-opacity duration-500 min-h-[200px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Architectural Crop Brackets */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-3.5 sm:w-4 h-3.5 sm:h-4 border-t-2 border-l-2 border-white/70 pointer-events-none" />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-3.5 sm:w-4 h-3.5 sm:h-4 border-t-2 border-r-2 border-white/70 pointer-events-none" />
                    <div className="absolute bottom-16 left-3 sm:left-4 w-3.5 sm:w-4 h-3.5 sm:h-4 border-b-2 border-l-2 border-white/70 pointer-events-none" />
                    <div className="absolute bottom-16 right-3 sm:right-4 w-3.5 sm:w-4 h-3.5 sm:h-4 border-b-2 border-r-2 border-white/70 pointer-events-none" />

                    {/* Live Badge */}
                    <div className="absolute top-3 sm:top-4 left-4 sm:left-6 z-10">
                      <span className="px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono rounded font-medium border border-white/20">
                        Sabarmati Hub &amp; C6 Package
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Swapper Row */}
                  {flagshipProject.gallery && flagshipProject.gallery.length > 1 && (
                    <div className="relative z-10 p-2.5 sm:p-3 bg-black/75 backdrop-blur-md border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
                      <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider shrink-0 pl-1">
                        Views:
                      </span>
                      {flagshipProject.gallery.map((imgUrl, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveSpotlightImage(imgUrl)}
                          className={`relative h-10 w-16 rounded overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${activeSpotlightImage === imgUrl
                              ? 'border-[#1268B3] scale-105 shadow-sm ring-1 ring-blue-400/50'
                              : 'border-white/30 opacity-70 hover:opacity-100'
                            }`}
                          aria-label={`View photo angle ${idx + 1}`}
                        >
                          <img
                            src={imgUrl}
                            alt={`Angle ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          3. EXPLORER CONTROLS: REAL-TIME SEARCH & SECTOR PILLS (Clean Separated Layout)
          ========================================================================= */}
      <section className="py-2.5 sm:py-3.5 bg-white border-b border-slate-200 sticky top-[56px] sm:top-[64px] lg:top-[68px] xl:top-[72px] z-40 shadow-xs">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-2.5 sm:space-y-3">

          {/* Row 1: Dedicated Search Input & Reset */}
          <div className="flex items-center justify-between gap-2.5 sm:gap-3">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project name, client authority, test type, or location..."
                className="w-full pl-9 pr-8 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3] bg-[#F8FAFC] text-[#062B5C] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Reset Button (only shown when filtered or searched) */}
            {(activeCategory !== 'All' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  handleCategoryChange('All');
                  setSearchQuery('');
                }}
                className="text-xs font-mono font-semibold text-[#1268B3] hover:text-[#062B5C] transition-colors flex items-center gap-1.5 cursor-pointer shrink-0 px-2.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100"
              >
                <span>Reset Filters</span>
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Row 2: Full-Width Sector Filter Pills (Responsive scroll on mobile, wrap on sm+) */}
          <div className="flex items-center gap-1.5 pt-2 border-t border-slate-100 overflow-x-auto no-scrollbar scroll-smooth sm:flex-wrap">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline-block shrink-0">
              Sector:
            </span>
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg whitespace-nowrap transition-all cursor-pointer shrink-0 ${isActive
                      ? 'bg-[#062B5C] text-white font-bold shadow-xs'
                      : 'bg-slate-100 text-[#536271] hover:bg-[#EEF5FC] hover:text-[#1268B3]'
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. EDITORIAL SHOWCASE GRID
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-[#F8FAFC] relative z-10 isolate">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

          {/* Active Filter Badge if filtered */}
          {activeCategory !== 'All' && (
            <div className="mb-6 flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 uppercase">Filtered Sector:</span>
              <span className="px-2.5 py-1 rounded text-xs font-mono bg-blue-100 text-[#1268B3] font-bold">
                {activeCategory}
              </span>
            </div>
          )}

          {/* Empty State */}
          {filteredProjects.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 max-w-md mx-auto space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <Search className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-base text-[#062B5C]">No matching case studies found</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Try adjusting your search keywords or clearing the sector filter to see all infrastructure records.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  handleCategoryChange('All');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#062B5C] text-white text-xs font-mono font-bold rounded-lg hover:bg-[#1268B3] transition-colors cursor-pointer"
              >
                <span>Reset Search Filters</span>
              </button>
            </div>
          ) : (
            /* Interactive Compact Tiles Grid (Matching Service Carousel Height & Hover Overlay) */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 items-stretch">
              {displayProjects.map((proj, idx) => {
                const projectCode = getProjectCode(proj.id, idx);

                return (
                  <Link
                    key={proj.id}
                    to={`/projects/${proj.slug}`}
                    className="group relative h-[260px] sm:h-[285px] lg:h-[305px] xl:h-[325px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end border border-slate-200/90 bg-slate-900 cursor-pointer block"
                  >
                    {/* Full Background Photo */}
                    <img
                      src={proj.featuredImage}
                      alt={proj.title}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Resting Top Category Badge */}
                    <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#062B5C] text-white border border-white/30 shadow-md">
                        {proj.category}
                      </span>
                    </div>

                    {/* Resting Bottom Navy Strip (Fades out smoothly on hover) */}
                    <div className="relative z-10 bg-[#062B5C] px-3.5 sm:px-4 py-2.5 min-h-[50px] text-white transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none flex items-center justify-between gap-2 border-t border-white/10">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-sky-300 mb-0.5">
                          <span className="font-bold">{projectCode}</span>
                          {proj.year && <span className="text-slate-400">• {proj.year}</span>}
                        </div>
                        <h3 className="font-display font-bold text-xs sm:text-[13px] text-white leading-tight truncate">
                          {proj.title}
                        </h3>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-300 shrink-0 ml-1" />
                    </div>

                    {/* Full Card Hover Overlay (Reveals extended details & action link) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062B5C]/98 via-[#062B5C]/85 to-[#062B5C]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-20 flex flex-col justify-end p-4 sm:p-5 text-white backdrop-blur-[2px]">
                      {/* Project Code & Year Header */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-sky-300 mb-1.5">
                        <span className="font-bold">{projectCode}</span>
                        {proj.year && <span className="text-slate-300">{proj.year}</span>}
                      </div>

                      {/* Client Authority & Location */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs mb-1">
                        {proj.client && (
                          <div className="flex items-center gap-1 text-blue-200">
                            <Building2 className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                            <span className="font-mono text-[11px] font-bold text-white truncate max-w-[200px]">
                              {proj.client}
                            </span>
                          </div>
                        )}
                        {proj.location && (
                          <div className="flex items-center gap-1 text-slate-300">
                            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                            <span className="text-[10px] font-mono truncate">{proj.location}</span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-extrabold text-sm sm:text-base text-white leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] line-clamp-2">
                        {proj.title}
                      </h3>

                      {/* Scope Summary Line */}
                      <p className="text-[11px] text-sky-200 font-semibold font-mono mt-1 flex items-center gap-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1268B3]" />
                        <span>{proj.services.slice(0, 2).join(' • ')}</span>
                      </p>

                      {/* Description Preview */}
                      <p className="text-[11px] text-slate-200 leading-relaxed line-clamp-2 mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {proj.description}
                      </p>

                      {/* Bottom Action Indicator */}
                      <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between">
                        <span
                          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-white/90 text-white text-[11px] font-mono font-bold shadow-xs transition-all group-hover:bg-white group-hover:text-[#062B5C]"
                        >
                          <span>View Case Study</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="text-[10px] font-mono text-slate-300">
                          NABL Validated
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          5. CLIENT & AUTHORITY TRUST STRIP
          ========================================================================= */}
      <section className="py-10 sm:py-12 bg-white border-t border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-5 sm:space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase">
              GOVERNMENT &amp; INFRASTRUCTURE PARTNERS
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-display text-[#062B5C] tracking-tight">
              Trusted by National Authorities &amp; EPC Giants
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
            {CLIENT_AUTHORITIES.map((client, idx) => (
              <div
                key={idx}
                className="p-2.5 sm:p-3 rounded-xl border border-slate-200/80 bg-[#F8FAFC] hover:bg-[#EEF5FC] hover:border-[#1268B3]/40 transition-colors text-center flex flex-col justify-center min-h-[64px] sm:min-h-[70px]"
              >
                <span className="font-bold font-display text-xs sm:text-sm text-[#062B5C]">
                  {client.name}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 truncate mt-0.5">
                  {client.fullName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. BOTTOM CONSULTATION & RFP RIBBON
          ========================================================================= */}
      <section className="bg-[#062B5C] py-12 sm:py-16 text-white relative overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-white tracking-tight">
              Need Field Investigation or Tender Testing Programs?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Consult SIMCON&apos;s senior geotechnical engineers and certified geophysicists for borehole planning, dynamic pile testing protocols, or comprehensive NABL laboratory quotation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-[#062B5C] font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-md text-center w-full sm:w-auto"
            >
              <span>REQUEST TECHNICAL QUOTATION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/about/accreditations"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider rounded border border-white/20 transition-colors text-center w-full sm:w-auto"
            >
              <span>NABL ACCREDITATIONS</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

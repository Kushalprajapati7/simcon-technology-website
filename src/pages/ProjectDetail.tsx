import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS, ProjectItem } from '@/data/projects';
import { SEOHead } from '@/components/common/SEOHead';
import {
  Building2,
  MapPin,
  Calendar,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Maximize2,
  Printer,
  Share2,
  X,
  ChevronLeft,
  ChevronRight,
  Target,
  Award,
  Check,
  Layers,
  FileCheck
} from 'lucide-react';

// Systematic Technical Project Code Mapping
const getProjectCode = (id: string, fallbackIdx = 0): string => {
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
  return prefixMap[id] || `PRJ-SCN-${String(fallbackIdx + 1).padStart(2, '0')}`;
};

// Technical Standards Reference Generator based on project testing disciplines
const getTechnicalStandards = (services: string[] = [], category = ''): string => {
  const combined = [...services, category].join(' ').toLowerCase();
  if (combined.includes('pda') || combined.includes('pile dynamic') || combined.includes('capwap')) {
    return 'ASTM D4945 • IS 2911 (Part 4)';
  }
  if (combined.includes('sonic logging') || combined.includes('chsl') || combined.includes('cross-hole')) {
    return 'ASTM D6760 • IS 14893';
  }
  if (combined.includes('gpr') || combined.includes('ground penetrating radar')) {
    return 'ASTM D6432 • FAA Standards';
  }
  if (combined.includes('seismic') || combined.includes('resistivity')) {
    return 'ASTM D5777 • ASTM G57 • IS 15736';
  }
  if (combined.includes('plate load') || combined.includes('modulus')) {
    return 'IS 1888 • IS 5249 • IRC:37';
  }
  if (combined.includes('pressuremeter') || combined.includes('menard')) {
    return 'IS 1892 • ASTM D4719';
  }
  if (combined.includes('ndt') || combined.includes('structural health') || combined.includes('ultrasonic')) {
    return 'IS 13311 (Parts 1 & 2) • IS 516';
  }
  return 'IS 1892 • IS 2720 • ISO/IEC 17025';
};

// Geotechnical Site Formation context generator
const getSiteTerrain = (location = '', category = ''): string => {
  const loc = location.toLowerCase();
  if (loc.includes('kandla') || loc.includes('mundra') || loc.includes('port')) {
    return 'Coastal Marine Clay & Saturated Tidal Silt';
  }
  if (loc.includes('himalayan') || loc.includes('rishikesh') || loc.includes('uttarakhand')) {
    return 'Fractured Quartzite & Himalayan Rock Mass';
  }
  if (loc.includes('khavda') || loc.includes('kutch')) {
    return 'Arid Saline Silt & Sand Flats (Rann of Kutch)';
  }
  if (loc.includes('ahmedabad') || loc.includes('sabarmati')) {
    return 'Alluvial Sand & Overconsolidated Silt';
  }
  if (loc.includes('indore') || loc.includes('bhopal') || loc.includes('jhabua')) {
    return 'Deccan Trap Basalt & Weathered Rock';
  }
  if (category.toLowerCase().includes('metro') || category.toLowerCase().includes('railway')) {
    return 'Urban Corridor Heterogeneous Alluvium';
  }
  return 'Stratified Alluvial Subsurface Strata';
};

// Civil Engineering Challenge Generator
const getProjectChallenge = (p: ProjectItem): string => {
  if (p.challenge) return p.challenge;
  const s = p.services.join(' ').toLowerCase();
  const c = p.category.toLowerCase();
  if (s.includes('pile') || s.includes('pda')) {
    return `Verifying high-strain dynamic load capacity and structural soundness of cast-in-situ piles supporting critical heavy plant installations in soft, saturated ground, without the high costs and multi-week scheduling delays of traditional static load tests.`;
  }
  if (c.includes('railway') || c.includes('tunnel')) {
    return `Navigating complex tectonic geology and high overburden stress to evaluate rock mass modulus, shear wave velocity, and structural tunnel integrity under stringent Indian Railway safety standards.`;
  }
  if (c.includes('airport') || c.includes('aviation')) {
    return `Conducting non-destructive pavement integrity scanning and subsurface cavity mapping within high-security airfield corridors without disrupting active 24/7 commercial flight and taxiway operations.`;
  }
  if (c.includes('metro') || c.includes('bullet train')) {
    return `Meeting ultra-stringent settlement tolerances for high-speed viaduct piers and elevated stations by verifying deep stratigraphy geomechanics and pile performance in densely populated urban alignments.`;
  }
  if (c.includes('energy') || c.includes('port')) {
    return `Establishing foundation design parameters and ground-grid electrical resistivity across extreme coastal or arid terrains subject to heavy cyclical operational loads and marine corrosion.`;
  }
  return `Delivering certified subsurface geotechnical exploration and foundation testing parameters to validate structural design safety before the mobilization of heavy superstructures.`;
};

// Verified Engineering Outcome Generator
const getProjectOutcome = (p: ProjectItem): string => {
  if (p.outcome) return p.outcome;
  const std = getTechnicalStandards(p.services, p.category);
  return `Delivered certified NABL ISO/IEC 17025 test dossiers with empirical load-settlement and structural soundness data, conforming fully to ${std} and granting immediate clearance for EPC superstructure erection.`;
};

// Service Page Link Helper
const getServiceLink = (serviceName: string): string => {
  const s = serviceName.toLowerCase();
  if (s.includes('pda') || s.includes('pile dynamic') || s.includes('sonic logging') || s.includes('chsl') || s.includes('ultrasonic') || s.includes('integrity') || s.includes('ndt')) {
    return '/services/ndt-services';
  }
  if (s.includes('seismic') || s.includes('resistivity') || s.includes('gpr') || s.includes('radar') || s.includes('geophysical')) {
    return '/services/geophysical-services';
  }
  if (s.includes('concrete') || s.includes('material') || s.includes('steel') || s.includes('cube') || s.includes('core')) {
    return '/services/material-testing-services';
  }
  return '/services/geotechnical-services';
};

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find(p => p.slug === slug);

  // Collect all unique project photos for slideshow (featured image + gallery)
  const allProjectPhotos = React.useMemo(() => {
    if (!project) return [];
    const list: string[] = [project.featuredImage];
    if (project.gallery) {
      project.gallery.forEach((img) => {
        if (!list.includes(img)) {
          list.push(img);
        }
      });
    }
    return list;
  }, [project]);

  // Slideshow Active Photo Index & Pause State
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Lightbox Modal State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Share link copy state
  const [copied, setCopied] = useState(false);

  // Reset index when slug changes
  React.useEffect(() => {
    setActivePhotoIndex(0);
  }, [slug]);

  // Automatic slideshow interval: advances every 3.5s when more than 1 image is present and not paused
  React.useEffect(() => {
    if (allProjectPhotos.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % allProjectPhotos.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [allProjectPhotos.length, isPaused]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Slideshow Handlers
  const handlePrevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActivePhotoIndex((prev) => (prev - 1 + allProjectPhotos.length) % allProjectPhotos.length);
  };

  const handleNextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % allProjectPhotos.length);
  };

  // Open Lightbox
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const projectCode = getProjectCode(project.id);
  const technicalStandards = getTechnicalStandards(project.services, project.category);
  const siteTerrain = getSiteTerrain(project.location, project.category);
  const challengeNarrative = getProjectChallenge(project);
  const outcomeNarrative = getProjectOutcome(project);

  // Navigation: Current Index, Prev and Next Projects
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  // Deterministic related projects: same sector first, then shared engineering services, then remaining portfolio
  const sameCategory = PROJECTS.filter(p => p.id !== project.id && p.category === project.category);
  const sameServices = PROJECTS.filter(
    p => p.id !== project.id && p.category !== project.category && p.services.some(s => project.services.includes(s))
  );
  const remaining = PROJECTS.filter(
    p => p.id !== project.id && p.category !== project.category && !p.services.some(s => project.services.includes(s))
  );
  const relatedProjects = [...sameCategory, ...sameServices, ...remaining].slice(0, 4);

  // Copy URL to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="pt-[72px] bg-white min-h-screen">
      <SEOHead
        customSeo={{
          title: project.seoTitle || `${project.title} | SIMCON Case Study`,
          description: project.seoDescription || project.description,
          canonical: `https://www.simcon.co.in/projects/${project.slug}`
        }}
      />

      {/* =========================================================================
          1. EXECUTIVE ENGINEERING DOSSIER HEADER & SPLIT SCRIM HERO
          ========================================================================= */}
      <section className="bg-[#062B5C] text-white relative overflow-hidden print:bg-white print:text-black">
        {/* CAD Grid Texture */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none z-0 print:hidden" />

        {/* Blueprint Engineering Linework Overlay */}
        <div className="absolute right-0 inset-y-0 w-1/2 pointer-events-none opacity-15 z-0 hidden lg:block print:hidden">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none">
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="60%" cy="50%" r="220" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 py-8 sm:py-10 lg:py-14">
          {/* Top Dossier Metadata Stamp Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-white/15">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-slate-300 flex-wrap" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-400">&gt;</span>
              <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
              <span className="text-slate-400">&gt;</span>
              <span className="text-blue-300 font-semibold truncate max-w-[200px] sm:max-w-xs">{projectCode}</span>
            </nav>

            {/* Official Technical Dossier Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-white/10 text-white border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                DOSSIER REF: {projectCode}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-500/20 text-sky-200 border border-blue-400/30 uppercase">
                {project.category}
              </span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/10 text-slate-200 border border-white/15 uppercase">
                NABL ISO 17025 ACCREDITED
              </span>
            </div>
          </div>

          {/* Split Hero Layout: Narrative Left + Interactive CAD Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center pt-6 sm:pt-8">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="space-y-2 sm:space-y-3">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-sky-300 uppercase block">
                  NATIONAL INFRASTRUCTURE CASE STUDY
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold font-display text-white tracking-tight leading-[1.14]">
                  {project.title}
                </h1>
              </div>

              {/* Executive Synopsis */}
              <p className="text-xs sm:text-sm lg:text-[15px] text-slate-200 leading-relaxed max-w-2xl font-normal">
                {project.description}
              </p>

              {/* Technical Trust Strip */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px] sm:text-[11px] font-mono text-slate-300">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded-md border border-white/15">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  NABL Laboratory Validated
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded-md border border-white/15">
                  <Award className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                  Conforms to {technicalStandards}
                </span>
                {project.year && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded-md border border-white/15">
                    <Calendar className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                    Delivered: {project.year}
                  </span>
                )}
              </div>

              {/* Action Buttons (Responsive on mobile) */}
              <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-2.5 sm:gap-3 print:hidden">
                <Link
                  to={`/contact?project=${project.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-[#062B5C] font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-md w-full sm:w-auto text-center"
                >
                  <span>Request Similar Testing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-mono font-semibold text-xs uppercase tracking-wider rounded border border-white/20 transition-colors cursor-pointer flex-1 sm:flex-initial"
                  title="Print or Save Executive Dossier as PDF"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-300" />
                  <span>Print Dossier</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-mono font-semibold text-xs uppercase tracking-wider rounded border border-white/20 transition-colors cursor-pointer flex-1 sm:flex-initial"
                  title="Copy Dossier URL"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-slate-300" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Interactive CAD Image View (Automatic Slideshow with Cross-Fade) */}
            <div className="lg:col-span-5 relative">
              <div
                className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  {/* Cross-Fade Stack of Photos */}
                  {allProjectPhotos.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${project.title} - Plate ${idx + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                        activePhotoIndex === idx ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-105 pointer-events-none -z-10'
                      }`}
                    />
                  ))}

                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none z-10" />

                  {/* Architectural Crop Brackets */}
                  <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-white/80 pointer-events-none z-20" />
                  <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-white/80 pointer-events-none z-20" />
                  <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-white/80 pointer-events-none z-20" />
                  <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-white/80 pointer-events-none z-20" />

                  {/* Top Technical Overlay Badge & Slideshow Counter */}
                  <div className="absolute top-3 left-6 z-20 flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono rounded font-medium border border-white/20">
                      ON-SITE INVESTIGATION RIGGING
                    </span>
                    {allProjectPhotos.length > 1 && (
                      <span className="px-2 py-0.5 bg-blue-600/80 backdrop-blur-xs text-white text-[10px] font-mono rounded font-bold border border-blue-400/40">
                        {activePhotoIndex + 1} / {allProjectPhotos.length}
                      </span>
                    )}
                  </div>

                  {/* Slideshow Manual Navigation Arrows (Visible when > 1 image) */}
                  {allProjectPhotos.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 border border-white/20 cursor-pointer shadow-lg"
                        aria-label="Previous photo slide"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 border border-white/20 cursor-pointer shadow-lg"
                        aria-label="Next photo slide"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}



                  {/* Fullscreen Inspector Button */}
                  <button
                    type="button"
                    onClick={() => openLightbox(activePhotoIndex)}
                    className="absolute bottom-3 right-6 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/70 hover:bg-black/90 backdrop-blur-xs text-white text-[11px] font-mono rounded-lg border border-white/30 transition-all cursor-pointer shadow-md"
                    aria-label="Inspect high resolution photograph"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-blue-300" />
                    <span>Inspect Full Photo</span>
                  </button>
                </div>

                {/* Multi-Photo Thumbnail Bar with Active Slideshow Sync */}
                {allProjectPhotos.length > 1 && (
                  <div className="p-2.5 bg-slate-950/90 border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider pl-1 shrink-0">
                      Views:
                    </span>
                    {allProjectPhotos.map((img, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActivePhotoIndex(i)}
                        className={`relative h-10 w-16 rounded overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                          activePhotoIndex === i
                            ? 'border-[#1268B3] scale-105 shadow-md ring-2 ring-blue-400/50'
                            : 'border-white/30 opacity-60 hover:opacity-100'
                        }`}
                        aria-label={`View photo ${i + 1}`}
                      >
                        <img
                          src={img}
                          alt={`View ${i + 1}`}
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

      {/* =========================================================================
          2. TECHNICAL TELEMETRY HUD RIBBON (Replaces generic 4 icon boxes)
          ========================================================================= */}
      <section className="bg-slate-900 border-b border-slate-800 text-white py-4 sm:py-5 shadow-xs">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 lg:gap-4">
            {/* Telemetry Cell 1: Client Authority */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-1">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Client Authority / EPC
              </span>
              <span className="font-display font-bold text-xs sm:text-[13px] text-white block truncate" title={project.client}>
                {project.client || 'Infrastructure Authority'}
              </span>
            </div>

            {/* Telemetry Cell 2: Location & Geotechnical Formation */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-1">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Location &amp; Stratigraphy
              </span>
              <div>
                <span className="font-display font-bold text-xs sm:text-[13px] text-white block truncate" title={`${project.location} • ${siteTerrain}`}>
                  {project.location ? `${project.location}` : 'India'}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block truncate">
                  {siteTerrain}
                </span>
              </div>
            </div>

            {/* Telemetry Cell 3: Primary Testing Methodology */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-1">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Primary Methodology
              </span>
              <div>
                <span className="font-display font-bold text-xs sm:text-[13px] text-white block truncate" title={project.services[0]}>
                  {project.services[0] || 'Geotechnical Testing'}
                </span>
                {project.services[1] && (
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block truncate">
                    + {project.services[1]}
                  </span>
                )}
              </div>
            </div>

            {/* Telemetry Cell 4: Design & Testing Standards */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-1">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Design Codes &amp; Norms
              </span>
              <span className="font-display font-bold text-xs sm:text-[13px] text-emerald-400 block truncate" title={technicalStandards}>
                {technicalStandards}
              </span>
            </div>

            {/* Telemetry Cell 5: Quality Assurance & Traceability */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-1 col-span-2 sm:col-span-1">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" /> QA Accreditation
              </span>
              <div>
                <span className="font-display font-bold text-xs sm:text-[13px] text-white block">
                  ISO/IEC 17025 Certified
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block">
                  NABL QR-Coded Traceability
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MAIN DOSSIER BODY: 2-COLUMN STRUCTURE
          ========================================================================= */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#F8FAFC]">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">

            {/* -------------------------------------------------------------------
                LEFT COLUMN: TRIPARTITE ENGINEERING NARRATIVE (7 Cols)
                ------------------------------------------------------------------- */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">

              {/* PART 1: THE CIVIL ENGINEERING CHALLENGE */}
              <div className="bg-white p-5 sm:p-7 lg:p-8 rounded-2xl border border-slate-200/90 shadow-xs relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#D71920]" />
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#D71920] shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#D71920]">
                      01 / THE CIVIL ENGINEERING CHALLENGE
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold font-display text-[#062B5C] leading-snug">
                    Ground Risks, Structural Tolerances &amp; Operational Constraints
                  </h2>

                  <p className="text-xs sm:text-sm text-[#536271] leading-relaxed">
                    {challengeNarrative}
                  </p>
                </div>
              </div>

              {/* PART 2: SIMCON TECHNICAL SCOPE & FIELD METHODOLOGY */}
              {project.scope && project.scope.length > 0 && (
                <div className="bg-white p-5 sm:p-7 lg:p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-4 sm:space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 flex-wrap gap-2">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#1268B3] block">
                        02 / TECHNICAL EXECUTION &amp; SCOPE
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold font-display text-[#062B5C]">
                        SIMCON Engineering Investigation Protocol
                      </h2>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2.5 py-1 rounded">
                      {project.scope.length} Verified Scope Milestones
                    </span>
                  </div>

                  {/* Phased Execution Cards */}
                  <div className="space-y-2.5 sm:space-y-3 pt-1">
                    {project.scope.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-[#F8FAFC] hover:bg-[#EEF5FC] hover:border-[#1268B3]/30 transition-all flex items-start gap-3 sm:gap-3.5 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#062B5C] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 group-hover:bg-[#1268B3] transition-colors">
                          {String(idx + 1).padStart(2, '0')}
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <span className="text-xs font-mono font-bold text-[#062B5C] block">
                            Scope Item {idx + 1}
                          </span>
                          <p className="text-xs sm:text-sm text-[#536271] leading-relaxed font-normal">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PART 3: VERIFIED FIELD OUTCOME & QA DELIVERABLES */}
              <div className="bg-gradient-to-br from-[#062B5C] to-[#041B3B] text-white p-5 sm:p-7 lg:p-8 rounded-2xl shadow-sm space-y-4 sm:space-y-5 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-8 translate-y-8">
                  <ShieldCheck className="w-56 h-56 text-white" />
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                      03 / CERTIFIED OUTCOME &amp; FIELD VERDICT
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                    Validated Structural Compliance &amp; Engineering Verdict
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
                    {outcomeNarrative}
                  </p>

                  {/* 3 Engineering Deliverables Badges */}
                  <div className="pt-2 sm:pt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
                    <div className="p-2.5 rounded-lg bg-white/10 border border-white/15">
                      <span className="text-[10px] font-mono uppercase text-sky-300 block">Deliverable 01</span>
                      <span className="text-xs font-bold text-white block mt-0.5">Empirical Load Curves</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/10 border border-white/15">
                      <span className="text-[10px] font-mono uppercase text-sky-300 block">Deliverable 02</span>
                      <span className="text-xs font-bold text-white block mt-0.5">NABL QR Report Sheet</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/10 border border-white/15">
                      <span className="text-[10px] font-mono uppercase text-sky-300 block">Deliverable 03</span>
                      <span className="text-xs font-bold text-white block mt-0.5">Director Sign-Off</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PART 4: MULTI-ANGLE ON-SITE PHOTO INSPECTOR (If gallery has photos) */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="bg-white p-5 sm:p-7 lg:p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-3.5 sm:space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#1268B3] block">
                        PHOTOGRAPHIC FIELD EVIDENCE
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-display text-[#062B5C]">
                        On-Site Testing Rig &amp; Equipment Gallery
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {project.gallery.length} Verified Photos
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                    {project.gallery.map((img, i) => {
                      const imgIndex = allProjectPhotos.indexOf(img);
                      return (
                        <div
                          key={i}
                          onClick={() => openLightbox(imgIndex !== -1 ? imgIndex : i)}
                          className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 aspect-[16/10] cursor-pointer shadow-xs hover:shadow-md transition-shadow"
                        >
                        <img
                          src={img}
                          alt={`${project.title} on-site photo ${i + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-white">
                            <Maximize2 className="w-3.5 h-3.5 text-blue-300" />
                            <span>Click to enlarge photo {i + 1}</span>
                          </span>
                        </div>
                        <div className="absolute top-2 left-2 z-10">
                          <span className="px-2 py-0.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono rounded border border-white/20">
                            Plate {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                  </div>
                </div>
              )}

            </div>

            {/* -------------------------------------------------------------------
                RIGHT COLUMN: HIGH-CONVERTING STICKY ENGINEERING SIDEBAR (5 Cols)
                ------------------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6 lg:sticky lg:top-24">

              {/* 1. PROJECT QUICK-SPEC SHEET CARD */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#062B5C] font-bold">
                    Project Technical Specifications
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-[#1268B3] border border-blue-200/60 uppercase">
                    {projectCode}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 gap-2">
                    <span className="font-mono text-slate-400 shrink-0">Sector Discipline</span>
                    <span className="font-bold text-[#062B5C] text-right">{project.category}</span>
                  </div>
                  {project.client && (
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-100 gap-2">
                      <span className="font-mono text-slate-400 shrink-0">Client / Authority</span>
                      <span className="font-bold text-[#062B5C] text-right break-words max-w-[55%] sm:max-w-[60%]" title={project.client}>
                        {project.client}
                      </span>
                    </div>
                  )}
                  {project.location && (
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-100 gap-2">
                      <span className="font-mono text-slate-400 shrink-0">Location</span>
                      <span className="font-bold text-[#062B5C] text-right break-words max-w-[55%] sm:max-w-[60%]" title={project.location}>
                        {project.location}
                      </span>
                    </div>
                  )}
                  {project.year && (
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-100 gap-2">
                      <span className="font-mono text-slate-400 shrink-0">Delivery Period</span>
                      <span className="font-bold text-[#062B5C] text-right">{project.year}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 gap-2">
                    <span className="font-mono text-slate-400 shrink-0">Governing Code</span>
                    <span className="font-bold text-[#1268B3] text-right break-words max-w-[55%] sm:max-w-[60%]" title={technicalStandards}>
                      {technicalStandards}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 gap-2">
                    <span className="font-mono text-slate-400 shrink-0">QA Accreditation</span>
                    <span className="font-bold text-emerald-700 text-right">ISO/IEC 17025</span>
                  </div>
                </div>
              </div>

              {/* 2. SERVICES DEPLOYED ON THIS PROJECT (Interactive Links) */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#062B5C] font-bold">
                    Services Deployed on this Site
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {project.services.length} Methods
                  </span>
                </div>

                <div className="space-y-2">
                  {project.services.map((srv, i) => {
                    const targetLink = getServiceLink(srv);
                    return (
                      <Link
                        key={i}
                        to={targetLink}
                        className="p-2.5 sm:p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/70 text-xs font-mono text-[#062B5C] hover:bg-[#EEF5FC] hover:border-[#1268B3]/40 hover:text-[#1268B3] transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1268B3] shrink-0" />
                          <span className="font-bold truncate">{srv}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1268B3] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* 3. CONTEXTUAL TECHNICAL CONSULTATION CARD */}
              <div className="bg-[#062B5C] text-white p-5 sm:p-7 rounded-2xl space-y-3.5 sm:space-y-4 shadow-md relative overflow-hidden">
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-200">
                      TECHNICAL CONSULTATION
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold font-display text-white leading-snug">
                    Planning a similar infrastructure development?
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Consult SIMCON&apos;s senior geotechnical engineers and certified testing directors to review your borehole recommendations, dynamic testing protocols, or NABL laboratory pricing.
                  </p>

                  <div className="pt-1 sm:pt-2">
                    <Link
                      to={`/contact?project=${project.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold font-mono uppercase tracking-wider text-[#062B5C] bg-white hover:bg-slate-100 rounded-lg transition-colors w-full shadow-sm text-center"
                    >
                      <span>Request Project Quotation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* 4. RETURN TO PROJECT EXPLORER */}
              <div className="pt-1">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] transition-colors p-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to Infrastructure Project Explorer</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. EDITORIAL PREVIOUS / NEXT PROJECT NAVIGATOR
          ========================================================================= */}
      <section className="bg-white border-t border-b border-slate-200 py-4 sm:py-5 print:hidden">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            {/* Previous Project Link */}
            <Link
              to={`/projects/${prevProject.slug}`}
              className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl border border-slate-200/80 hover:bg-[#EEF5FC] hover:border-[#1268B3]/40 transition-all flex-1 min-w-0 group"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-100 group-hover:bg-[#062B5C] group-hover:text-white flex items-center justify-center text-slate-600 shrink-0 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  &larr; Previous Case Study
                </span>
                <span className="font-display font-bold text-xs sm:text-sm text-[#062B5C] group-hover:text-[#1268B3] transition-colors block truncate">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            {/* Center Quick Link */}
            <Link
              to="/projects"
              className="text-xs font-mono font-bold text-slate-400 hover:text-[#062B5C] uppercase tracking-wider px-3 py-2 text-center shrink-0 hidden md:block"
            >
              All 15 Projects
            </Link>

            {/* Next Project Link */}
            <Link
              to={`/projects/${nextProject.slug}`}
              className="flex items-center justify-between sm:justify-end gap-3 p-2.5 sm:p-3 rounded-xl border border-slate-200/80 hover:bg-[#EEF5FC] hover:border-[#1268B3]/40 transition-all flex-1 min-w-0 group text-right"
            >
              <div className="min-w-0 order-1 sm:order-0">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Next Case Study &rarr;
                </span>
                <span className="font-display font-bold text-xs sm:text-sm text-[#062B5C] group-hover:text-[#1268B3] transition-colors block truncate">
                  {nextProject.title}
                </span>
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-100 group-hover:bg-[#062B5C] group-hover:text-white flex items-center justify-center text-slate-600 shrink-0 transition-colors order-0 sm:order-1">
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. RELATED INFRASTRUCTURE CASE STUDIES (Architectural 4-Column Tiles)
          ========================================================================= */}
      {relatedProjects.length > 0 && (
        <section className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 print:hidden">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-6 sm:space-y-8">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase block mb-1">
                  RELATED ENGINEERING PORTFOLIO
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-display text-[#062B5C] tracking-tight">
                  Other Infrastructure Case Studies
                </h3>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] transition-colors group"
              >
                <span>Explore All 15 Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Architectural Tiles Grid (4 Columns matching main Projects explorer) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
              {relatedProjects.map((rel, idx) => {
                const code = getProjectCode(rel.id, idx);

                return (
                  <Link
                    key={rel.id}
                    to={`/projects/${rel.slug}`}
                    className="group relative h-[260px] sm:h-[285px] lg:h-[305px] xl:h-[325px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end border border-slate-200/90 bg-slate-900 cursor-pointer block"
                  >
                    {/* Full Background Photo */}
                    <img
                      src={rel.featuredImage}
                      alt={rel.title}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Resting Top Category Badge */}
                    <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#062B5C] text-white border border-white/30 shadow-md">
                        {rel.category}
                      </span>
                    </div>

                    {/* Resting Bottom Navy Strip (Fades out smoothly on hover) */}
                    <div className="relative z-10 bg-[#062B5C] px-3.5 sm:px-4 py-2.5 min-h-[50px] text-white transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none flex items-center justify-between gap-2 border-t border-white/10">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-sky-300 mb-0.5">
                          <span className="font-bold">{code}</span>
                          {rel.year && <span className="text-slate-400">• {rel.year}</span>}
                        </div>
                        <h4 className="font-display font-bold text-xs sm:text-[13px] text-white leading-tight truncate">
                          {rel.title}
                        </h4>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-300 shrink-0 ml-1" />
                    </div>

                    {/* Full Card Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062B5C]/98 via-[#062B5C]/85 to-[#062B5C]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-20 flex flex-col justify-end p-4 sm:p-5 text-white backdrop-blur-[2px]">
                      {/* Project Code & Year Header */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-sky-300 mb-1.5">
                        <span className="font-bold">{code}</span>
                        {rel.year && <span className="text-slate-300">{rel.year}</span>}
                      </div>

                      {/* Client Authority & Location */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs mb-1">
                        {rel.client && (
                          <div className="flex items-center gap-1 text-blue-200">
                            <Building2 className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                            <span className="font-mono text-[11px] font-bold text-white truncate max-w-[200px]">
                              {rel.client}
                            </span>
                          </div>
                        )}
                        {rel.location && (
                          <div className="flex items-center gap-1 text-slate-300">
                            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                            <span className="text-[10px] font-mono truncate">{rel.location}</span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h4 className="font-display font-extrabold text-sm sm:text-base text-white leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] line-clamp-2">
                        {rel.title}
                      </h4>

                      {/* Scope Summary Line */}
                      <p className="text-[11px] text-sky-200 font-semibold font-mono mt-1 flex items-center gap-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1268B3]" />
                        <span>{rel.services.slice(0, 2).join(' • ')}</span>
                      </p>

                      {/* Description Preview */}
                      <p className="text-[11px] text-slate-200 leading-relaxed line-clamp-2 mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {rel.description}
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
          </div>
        </section>
      )}

      {/* =========================================================================
          6. FULL-SCREEN INTERACTIVE PHOTO LIGHTBOX MODAL
          ========================================================================= */}
      {lightboxOpen && allProjectPhotos.length > 0 && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-sky-400">
                  {projectCode}
                </span>
                <span className="text-xs font-mono text-slate-400">|</span>
                <span className="text-xs font-mono text-slate-300 truncate max-w-md">
                  {project.title}
                </span>
                {allProjectPhotos.length > 1 && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/20 text-white ml-2">
                    {lightboxIndex + 1} of {allProjectPhotos.length}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image with Prev/Next Controls */}
            <div className="relative w-full rounded-xl overflow-hidden border border-white/20 bg-black shadow-2xl flex items-center justify-center">
              <img
                src={allProjectPhotos[lightboxIndex]}
                alt="Enlarged Project Field Investigation"
                className="w-full h-auto max-h-[78vh] object-contain mx-auto"
              />

              {allProjectPhotos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex((prev) => (prev - 1 + allProjectPhotos.length) % allProjectPhotos.length);
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all border border-white/30 cursor-pointer shadow-xl"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex((prev) => (prev + 1) % allProjectPhotos.length);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all border border-white/30 cursor-pointer shadow-xl"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { SEOHead } from '@/components/common/SEOHead';
import { GeotechTestingCarousel } from '@/components/services/GeotechTestingCarousel';
import {
  ArrowRight,
  Target,
  MapPin,
  Award,
  Compass,
  ArrowDownToLine,
  PackageCheck,
  FlaskConical,
  Gauge,
  LineChart,
  CheckCircle2,
  Layers,
  Activity
} from 'lucide-react';

const PileIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 sm:w-7 sm:h-7 text-[#1268B3]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3.5 6h17" />
    <path d="M6.5 6v10.5a1.5 1.5 0 0 0 3 0V6" />
    <path d="M10.5 6v10.5a1.5 1.5 0 0 0 3 0V6" />
    <path d="M14.5 6v10.5a1.5 1.5 0 0 0 3 0V6" />
  </svg>
);

const StoneColumnIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 sm:w-7 sm:h-7 text-[#1268B3]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* 3 downward load arrows */}
    <path d="M7 3v4.5M5.2 6l1.8 1.8L8.8 6" />
    <path d="M12 3v4.5M10.2 6l1.8 1.8 1.8-1.8" />
    <path d="M17 3v4.5M15.2 6l1.8 1.8 1.8-1.8" />
    {/* Ground / stratum curved line */}
    <path d="M3.5 13.5c4 2 13 2 17 0" />
    {/* Gravel / stone aggregates */}
    <circle cx="6.5" cy="17" r="1" fill="currentColor" />
    <circle cx="10" cy="18" r="1" fill="currentColor" />
    <circle cx="14" cy="17" r="1" fill="currentColor" />
    <circle cx="17.5" cy="18" r="1" fill="currentColor" />
    <circle cx="12" cy="15.5" r="0.75" fill="currentColor" />
    <circle cx="8" cy="15" r="0.75" fill="currentColor" />
    <circle cx="16" cy="15" r="0.75" fill="currentColor" />
  </svg>
);

export const GeotechnicalServices: React.FC = () => {
  const service = SERVICES.find(s => s.slug === 'geotechnical-services') || SERVICES[0];

  const methodologySteps = [
    {
      step: "01",
      title: "Site Reconnaissance & Geological Mapping",
      description: "Desk study, terrain inspection, and borehole layout grid formulation conforming to IS 1892.",
      icon: Compass,
      bg: "#EEF5FC",
      text: "#1268B3",
      divider: "#C8DEF4",
    },
    {
      step: "02",
      title: "Deep Rotary Core Drilling & SPT",
      description: "Continuous coring in hard rock, weathered strata, and energy-calibrated SPT recording.",
      icon: ArrowDownToLine,
      bg: "#D9ECFB",
      text: "#1268B3",
      divider: "#B8DCF7",
    },
    {
      step: "03",
      title: "Undisturbed Sampling (UDS)",
      description: "Shelby tubes and stationary piston samplers for shear and consolidation specimens.",
      icon: PackageCheck,
      bg: "#BCE0FA",
      text: "#0A5094",
      divider: "#98CAF2",
    },
    {
      step: "04",
      title: "NABL Laboratory Soil & Rock Testing",
      description: "Automated triaxial compression (UU/CU/CD), Hoek cell rock triaxial, and oedometer testing.",
      icon: FlaskConical,
      bg: "#4A9BE8",
      text: "#FFFFFF",
      divider: "rgba(255,255,255,0.4)",
    },
    {
      step: "05",
      title: "Advanced In-Situ Field Testing",
      description: "Plate load tests, ECPTU piezocone, Menard pressuremeter, and static/dynamic pile tests.",
      icon: Gauge,
      bg: "#1268B3",
      text: "#FFFFFF",
      divider: "rgba(255,255,255,0.4)",
    },
    {
      step: "06",
      title: "Engineering Analysis & Bearing Capacity Advisory",
      description: "PLAXIS FE modeling, settlement calculation, liquefaction analysis, and certified reports.",
      icon: LineChart,
      bg: "#062B5C",
      text: "#FFFFFF",
      divider: "rgba(255,255,255,0.3)",
    },
  ];

  const compliantStandards = [
    {
      code: "IS 1892",
      title: "Subsurface Investigation for Foundations",
      type: "Indian Standard",
    },
    {
      code: "IS 2131",
      title: "Standard Penetration Test for Soils (SPT)",
      type: "Indian Standard",
    },
    {
      code: "IS 2720",
      title: "Methods of Test for Soils (Lab & Field)",
      type: "Indian Standard",
    },
    {
      code: "IS 13030",
      title: "Determination of Rock Porosity & Density",
      type: "Indian Standard",
    },
    {
      code: "IS 2911",
      title: "Design & Construction of Pile Foundations",
      type: "Indian Standard",
    },
    {
      code: "ASTM D422",
      title: "Particle-Size Analysis of Soils",
      type: "ASTM International",
    },
    {
      code: "ASTM D1586",
      title: "Penetration Test & Split-Barrel Sampling",
      type: "ASTM International",
    },
    {
      code: "ASTM D2166",
      title: "Unconfined Compressive Strength of Soil",
      type: "ASTM International",
    },
  ];

  const featuredProjects = service.relatedProjectSlugs
    ?.map(pSlug => PROJECTS.find(p => p.slug === pSlug || p.id === pSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p)) || PROJECTS.slice(0, 3);

  return (
    <div className="pt-[72px] bg-white">
      <SEOHead
        customSeo={{
          title: "Geotechnical Services | Soil, Rock & In-Situ Field Testing | SIMCON Technology",
          description: "NABL-accredited geotechnical investigations across India: 14 soil laboratory tests, 13 rock mechanics tests, deep rotary core drilling, and advanced in-situ field testing.",
          canonical: "https://www.simcon.co.in/services/geotechnical-services"
        }}
      />

      {/* =========================================================================
          1. HERO HEADER SECTION (Seamless Diagonal Full-Bleed CAD Split-Screen)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#062B5C] text-white min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
        {/* Full-bleed Photo Layer on Right with Diagonal Slant */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] xl:w-[60%] h-full z-0 overflow-hidden pointer-events-none">
          <div className="w-full h-full relative [clip-path:none] lg:[clip-path:polygon(12%_0,100%_0,100%_100%,26%_100%)]">
            <img
              src="/assets/hero/simcon-geotechnical-drilling-rig-hero.jpg"
              alt="SIMCON Geotechnical Investigation Drilling Rig and Subsurface Exploration Operations"
              className="w-full h-full object-cover object-center opacity-30 lg:opacity-100 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#062B5C] via-[#062B5C]/90 lg:via-[#062B5C]/20 to-[#062B5C]/60 lg:to-transparent pointer-events-none" />
          </div>

          {/* Vertical Architectural Tagline */}
          <div className="hidden lg:flex absolute top-8 sm:top-10 right-8 sm:right-12 xl:right-16 flex-col items-start z-20 pointer-events-none select-none">
            <div className="border-l-2 border-slate-700/70 pl-3 font-mono text-[10px] xl:text-[11px] font-bold tracking-[0.25em] text-slate-900 leading-relaxed uppercase">
              BUILDING<br />SAFER<br />FOUNDATIONS<br />THROUGH<br />DATA
            </div>
          </div>
        </div>

        {/* CAD Grid Texture */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none z-0" />

        {/* Blueprint Linework */}
        <div className="absolute left-0 inset-y-0 w-1/2 pointer-events-none opacity-15 z-0 hidden lg:block">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none">
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="45%" y1="0" x2="45%" y2="100%" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="35%" cy="65%" r="140" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="6 6" />
          </svg>
        </div>

        {/* Left Side Content Container */}
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full py-12 sm:py-16 lg:py-20">
          <div className="max-w-xl lg:max-w-[46%] xl:max-w-[48%] space-y-5 sm:space-y-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-slate-300 overflow-x-auto scrollbar-none py-1 whitespace-nowrap" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-400">&gt;</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="text-slate-400">&gt;</span>
              <span className="text-slate-200">Geotechnical Services</span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.18em] sm:tracking-[0.2em] text-slate-300 uppercase">
                DISCIPLINE 01 • GEOTECHNICAL ENGINEERING
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[58px] font-extrabold font-display text-white tracking-tight leading-[1.08]">
              Geotechnical Services
            </h1>

            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-200 leading-relaxed font-normal max-w-lg">
              NABL-accredited soil & rock laboratory testing, deep rotary core drilling, and advanced in-situ field testing providing verifiable foundation parameters across India.
            </p>

            {/* Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] sm:text-xs font-medium text-slate-200">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-300 shrink-0" />
                <span>NABL Accredited (ISO/IEC 17025)</span>
              </div>
              <span className="w-px h-3.5 bg-white/25 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-300 shrink-0" />
                <span>1000+ Boreholes & Field Tests</span>
              </div>
              <span className="w-px h-3.5 bg-white/25 hidden sm:block" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0" />
                <span>Pan-India Hydraulic Rig Fleet</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. METHODOLOGY & TECHNICAL APPROACH SECTION (Interlocking Blue Chevron Process Timeline)
          ========================================================================= */}
      <section className="py-18 sm:py-24 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-10 sm:space-y-14">
          {/* Header & Section Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div className="space-y-2 max-w-4xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#062B5C] tracking-tight leading-tight lg:whitespace-nowrap">
                Methodology &amp; Geotechnical Workflow<span className="text-[#1268B3]">.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#536271] leading-relaxed pt-1">
                From initial geological mapping and deep hydraulic rock diamond coring to fully automated triaxial shear testing and finite element settlement modeling, our geotechnical approach eliminates subsurface uncertainty for complex infrastructure.
              </p>
            </div>

            <a
              href="#parameter-breakdown"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-[#1268B3] hover:text-[#062B5C] transition-colors self-start md:self-end shrink-0 group py-1"
            >
              <span>Explore All 40+ Parameters</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* =======================================================================
              1. DESKTOP VIEW: 6 CONNECTED BLUE CHEVRONS TIMELINE (xl and above)
              ======================================================================= */}
          <div className="hidden xl:block pt-2 space-y-8">
            {/* The Connected Chevron Bar */}
            <div className="flex w-full items-stretch">
              {methodologySteps.map((item, idx) => {
                const IconComp = item.icon;
                const isFirst = idx === 0;
                const clipPath = isFirst
                  ? 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%)'
                  : 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%, 18px 50%)';

                return (
                  <div
                    key={item.step}
                    className={`flex-1 relative transition-all duration-300 hover:brightness-105 hover:-translate-y-1 ${!isFirst ? '-ml-[17px]' : ''
                      }`}
                    style={{
                      zIndex: methodologySteps.length - idx
                    }}
                  >
                    <div
                      className="w-full h-[68px] 2xl:h-[76px] flex items-center justify-center gap-3 px-3 select-none transition-shadow"
                      style={{
                        backgroundColor: item.bg,
                        color: item.text,
                        clipPath: clipPath
                      }}
                    >
                      <span className="font-mono font-extrabold text-base 2xl:text-lg tracking-tight pl-2">
                        {item.step}
                      </span>
                      <span
                        className="w-px h-5 opacity-40 shrink-0"
                        style={{ backgroundColor: item.divider }}
                      />
                      <IconComp className="w-5 h-5 2xl:w-5.5 2xl:h-5.5 shrink-0" strokeWidth={2.2} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Titles & Descriptions in 6-Column Grid */}
            <div className="grid grid-cols-6 gap-5 2xl:gap-6 pt-2">
              {methodologySteps.map((item) => (
                <div key={item.step} className="group space-y-2 pr-1">
                  <h3 className="font-bold text-xs 2xl:text-sm font-display text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] 2xl:text-xs text-[#536271] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =======================================================================
              2. TABLET, LAPTOP & SPLIT-SCREEN VIEW: 2 ROWS OF 3 INTERLOCKING CHEVRONS (sm to xl)
              ======================================================================= */}
          <div className="hidden sm:block xl:hidden space-y-10 pt-2">
            {/* Row 1: Stages 01, 02, 03 */}
            <div className="space-y-4">
              <div className="flex w-full items-stretch">
                {methodologySteps.slice(0, 3).map((item, subIdx) => {
                  const IconComp = item.icon;
                  const isFirst = subIdx === 0;
                  const clipPath = isFirst
                    ? 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%)'
                    : 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%, 18px 50%)';

                  return (
                    <div
                      key={item.step}
                      className={`flex-1 relative transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 ${!isFirst ? '-ml-[17px]' : ''
                        }`}
                      style={{ zIndex: 3 - subIdx }}
                    >
                      <div
                        className="w-full h-16 flex items-center justify-center gap-3 px-3 select-none transition-shadow"
                        style={{
                          backgroundColor: item.bg,
                          color: item.text,
                          clipPath: clipPath
                        }}
                      >
                        <span className="font-mono font-extrabold text-base tracking-tight pl-2">
                          {item.step}
                        </span>
                        <span
                          className="w-px h-5 opacity-40 shrink-0"
                          style={{ backgroundColor: item.divider }}
                        />
                        <IconComp className="w-5 h-5 shrink-0" strokeWidth={2.2} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Titles & Descriptions for Row 1 */}
              <div className="grid grid-cols-3 gap-6 pt-1">
                {methodologySteps.slice(0, 3).map((item) => (
                  <div key={item.step} className="group space-y-1.5 pr-2">
                    <h3 className="font-bold text-sm font-display text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#536271] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Stages 04, 05, 06 */}
            <div className="space-y-4 pt-6 border-t border-slate-200/70">
              <div className="flex w-full items-stretch">
                {methodologySteps.slice(3, 6).map((item, subIdx) => {
                  const IconComp = item.icon;
                  const isFirst = subIdx === 0;
                  const clipPath = isFirst
                    ? 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%)'
                    : 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%, 18px 50%)';

                  return (
                    <div
                      key={item.step}
                      className={`flex-1 relative transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 ${!isFirst ? '-ml-[17px]' : ''
                        }`}
                      style={{ zIndex: 3 - subIdx }}
                    >
                      <div
                        className="w-full h-16 flex items-center justify-center gap-3 px-3 select-none transition-shadow"
                        style={{
                          backgroundColor: item.bg,
                          color: item.text,
                          clipPath: clipPath
                        }}
                      >
                        <span className="font-mono font-extrabold text-base tracking-tight pl-2">
                          {item.step}
                        </span>
                        <span
                          className="w-px h-5 opacity-40 shrink-0"
                          style={{ backgroundColor: item.divider }}
                        />
                        <IconComp className="w-5 h-5 shrink-0" strokeWidth={2.2} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Titles & Descriptions for Row 2 */}
              <div className="grid grid-cols-3 gap-6 pt-1">
                {methodologySteps.slice(3, 6).map((item) => (
                  <div key={item.step} className="group space-y-1.5 pr-2">
                    <h3 className="font-bold text-sm font-display text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#536271] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =======================================================================
              3. MOBILE VIEW: VERTICAL CARD STACK (xs to sm)
              ======================================================================= */}
          <div className="block sm:hidden space-y-4 pt-1">
            {methodologySteps.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="rounded-xl border border-slate-200 p-4 space-y-2 bg-[#F8FAFC] shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-extrabold text-sm text-[#1268B3]">
                      STAGE {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#1268B3]">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-bold text-sm font-display text-[#062B5C] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#536271] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. COMPREHENSIVE PARAMETER BREAKDOWN + TESTING SLIDESHOW
          ========================================================================= */}
      <section id="parameter-breakdown" className="scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-12 sm:space-y-16">

          {/* A. DETAILED 3-PILLAR PARAMETER CHECKLIST */}
          <div className="space-y-8">
            <div className="space-y-2 max-w-7xl">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C] tracking-tight lg:whitespace-nowrap">
                Comprehensive Geotechnical Parameter Breakdown (40+ Tests)
              </h2>
              <p className="text-xs sm:text-sm lg:text-[13px] xl:text-[14.5px] text-slate-500 leading-relaxed lg:whitespace-nowrap font-normal mt-2">
                Physical, mechanical, consolidation, and foundation parameters executed in strict accordance with IS, ASTM, and BS standards across our NABL-accredited facilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {service.subDisciplines?.map((cat, idx) => (
                <div
                  key={cat.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
                >
                  {/* Category Header */}
                  <div className="p-6 sm:p-7 border-b border-slate-100 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#1268B3] leading-none">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold font-display text-[#062B5C]">
                          {cat.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs text-[#536271] leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Parameters List */}
                  <div className="p-6 sm:p-7 flex-1">
                    <ul className="space-y-2.5">
                      {cat.items.map((testName, i) => (
                        <li key={i} className="flex items-start gap-2.5 py-1 text-xs sm:text-[13px] text-[#536271] hover:text-[#062B5C] transition-colors">
                          <span className="w-1.5 h-1.5 rounded-[1px] bg-[#D71920] shrink-0 mt-1.5" />
                          <span className="font-medium leading-snug">{testName}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-mono text-[11px] text-slate-500">
                      {cat.items.length} Standardized Tests
                    </span>
                    <span className="font-mono text-[11px] text-[#1268B3] font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>ISO/IEC 17025 Validated</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* B. 4-UP MODERN AUTOMATIC SLIDESHOW CAROUSEL (Below Parameter Breakdown) */}
          <div className="space-y-6 pt-10 border-t border-slate-200">
            <div className="space-y-2 max-w-3xl">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] tracking-tight">
                NABL Testing Procedures & Apparatus Slideshow
              </h3>
              <p className="text-xs sm:text-sm lg:text-[13px] xl:text-[14.5px] text-slate-500 leading-relaxed lg:whitespace-nowrap font-normal mt-2">
                Continuous 4-up automatic slideshow of calibrated testing machines, intact rock specimens, and in-situ foundation penetration setups with testing labels and standard test codes.
              </p>
            </div>

            {/* Carousel Component */}
            <GeotechTestingCarousel />
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. NUMERICAL MODELING & SOFTWARE TOOLS (Option 4: Icon Accent - Full Width)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex flex-col lg:flex-row lg:items-center">

            {/* Left Column: Heading & Description */}
            <div className="lg:w-[28%] xl:w-[25%] 2xl:w-[22%] flex-shrink-0 pr-0 lg:pr-8 2xl:pr-10 pb-8 lg:pb-0 border-b lg:border-b-0 lg:border-r border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C] tracking-tight">
                Software Tools &amp;<br className="hidden lg:inline" /> Numerical Analysis Platforms
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-3 max-w-md lg:max-w-none">
                Advanced finite element, deep excavation, and lateral pile deflection modeling tools utilized to deliver validated geotechnical designs.
              </p>
            </div>

            {/* Right Side: 5 Tool Columns with Dividers */}
            <div className="lg:w-[72%] xl:w-[75%] 2xl:w-[78%] flex-1 pt-8 lg:pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x divide-slate-200">
                {service.softwareTools?.map((tool) => {
                  const getToolIcon = (name: string) => {
                    switch (name) {
                      case "PLAXIS 2D":
                        return <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-[#1268B3]" />;
                      case "LPILE":
                        return <PileIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#1268B3]" />;
                      case "StoneC":
                        return <StoneColumnIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#1268B3]" />;
                      case "LIQSVS":
                        return <Activity className="w-6 h-6 sm:w-7 sm:h-7 text-[#1268B3]" />;
                      case "OpenGround & gINT":
                      default:
                        return <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-[#1268B3]" />;
                    }
                  };

                  return (
                    <div
                      key={tool.name}
                      className="group px-3 sm:px-4 xl:px-4 2xl:px-6 text-center flex flex-col items-center justify-start"
                    >
                      {/* Icon Circle */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EEF5FC] border border-[#D9E8F7] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#E2F0FD] group-hover:border-[#C4DEF7] transition-all duration-300 shadow-2xs">
                        {getToolIcon(tool.name)}
                      </div>

                      {/* Tool Name */}
                      <h3 className="font-bold font-display text-sm sm:text-base text-[#062B5C] mb-2 leading-tight">
                        {tool.name}
                      </h3>

                      {/* Purpose */}
                      <p className="text-xs text-slate-500 leading-relaxed max-w-[210px] mx-auto">
                        {tool.purpose}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. STANDARDS & CODES ACCREDITATION (Option 4 - Full-Width Card Tiles)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full space-y-8 sm:space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#062B5C] tracking-tight">
              Compliant Standards &amp; Test Codes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-3xl mt-2">
              Engineering analysis and testing conducted in accordance with applicable Indian and international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6 w-full">
            {compliantStandards.map(std => (
              <div
                key={std.code}
                className="group relative bg-white border border-slate-200/90 rounded-xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-[#1268B3]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[96px] sm:min-h-[108px]"
              >
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <span className="font-mono text-base sm:text-lg font-bold text-[#062B5C] group-hover:text-[#1268B3] transition-colors tracking-tight">
                    {std.code}
                  </span>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase bg-slate-50 border border-slate-200/70 px-2 py-0.5 rounded">
                    {std.type}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans line-clamp-2 group-hover:text-slate-900 transition-colors pr-6">
                  {std.title}
                </p>

                {/* Corner Accent Notch */}
                <svg
                  className="absolute bottom-0 right-0 w-7 h-7 sm:w-8 sm:h-8 text-[#1268B3] pointer-events-none transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M32 8C32 21 21 32 8 32H32V8Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. RELATED INFRASTRUCTURE PROJECTS
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-8 sm:space-y-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C] tracking-tight">
                Featured Geotechnical Case Studies
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] transition-colors flex items-center gap-1 shrink-0"
            >
              <span>All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map(proj => (
              <Link
                key={proj.id}
                to={`/projects/${proj.slug}`}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                    <img
                      src={proj.featuredImage}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#062B5C]/90 backdrop-blur-xs text-white text-[10px] font-mono font-semibold rounded">
                        {proj.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-[#536271] leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#1268B3] group-hover:text-[#062B5C] transition-colors">
                    <span>Read Geotechnical Investigation</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CALL TO ACTION RIBBON (Deep Navy Banner)
          ========================================================================= */}
      <section className="bg-[#062B5C] py-12 sm:py-14 text-white relative overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-1.5 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
              Require Geotechnical Investigations for Your Site?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Contact our geotechnical specialists in Gandhidham, Ahmedabad, Lucknow, or Indore for rapid rig mobilization, rotary core drilling, and NABL soil & rock laboratory testing programs.
            </p>
          </div>

          <Link
            to="/contact?service=geotechnical-services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-[#062B5C] font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors shrink-0 shadow-md w-full sm:w-auto"
          >
            <span>REQUEST GEOTECH QUOTATION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

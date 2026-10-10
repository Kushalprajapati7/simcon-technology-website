import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Layers,
  CheckCircle2,
  ExternalLink,
  Activity,
  Search,
  FlaskConical,
  Compass,
  Gauge,
  Building2,
  MonitorCheck,
  GraduationCap,
  Award,
  Settings,
  BarChart3,
  MapPin,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { ACCREDITATIONS } from '@/data/certificates';
import { CLIENTS } from '@/data/clients';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CertificateModal } from '@/components/common/CertificateModal';
import { IndiaMap } from '@/components/common/IndiaMap';
import { FinancialGrowth } from '@/components/sections/FinancialGrowth';
import { HeroStats } from '@/components/sections/HeroStats';
import { AccreditationCertificate } from '@/data/certificates';

const SERVICE_TAB_LABELS: Record<string, string> = {
  "geotechnical-investigation": "Geotechnical Investigation",
  "geophysical-investigation": "Geophysical Survey",
  "forensic-geotechnical": "Forensic Investigation",
  "construction-material-testing": "Material Testing",
  "topographical-survey": "Surveying & Mapping",
  "field-insitu-testing": "Field Testing",
  "geotechnical-instrumentation": "Monitoring & Safety",
  "ndt-structural-health": "Structural Assessment",
};

export const Home: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<AccreditationCertificate | null>(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [isServicesPaused, setIsServicesPaused] = useState(false);

  // Automatic slideshow for Comprehensive Engineering Services (cycles every 4.5s, pauses on hover)
  useEffect(() => {
    if (isServicesPaused) return;
    const interval = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % SERVICES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isServicesPaused]);

  const featuredService = SERVICES[activeServiceIndex];
  const featuredProjects = PROJECTS.slice(0, 4);
  const selectedClients = CLIENTS.filter(c => c.featured).slice(0, 16);
  const row1Clients = selectedClients.slice(0, 8);
  const row2Clients = selectedClients.slice(8, 16);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Search': return <Search className="w-5 h-5" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Gauge': return <Gauge className="w-5 h-5" />;
      case 'MonitorCheck': return <MonitorCheck className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="pt-[72px]">
      {/* ===================================================
          1. HERO SECTION
          Editorial, Asymmetric, Real Engineering Photograph
      =================================================== */}
      {/* ===================================================
          1. HERO SECTION (SIMCON Industrial Geotechnical Reference)
          Matches reference design:
          - Deep Navy #062B5C background with topographic contour curves
          - Real geotechnical drilling rig crawler photo on right
          - Strong editorial headline with Engineering Blue #1268B3
          - SIMCON Red #D71920 "Get Started →" CTA
          - Secondary "Explore Our Capabilities" CTA
          - Technical survey accents (INVESTIGATE / ANALYSE / DESIGN + GPS coords)
          - Prominent 4 statistics bar across bottom (18+, 6,480+, 125+, 2,00,000+)
          - No minimal bottom sector navigation bar as requested
      =================================================== */}
      <section className="relative min-h-[calc(100dvh-72px)] lg:h-[calc(100vh-72px)] w-full flex flex-col justify-between bg-[#062B5C] text-white overflow-hidden">
        {/* Right-Side Geotechnical Drilling Rig Infrastructure Photograph */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] h-full z-0 overflow-hidden pointer-events-none">
          <img
            src="/assets/hero/simcon_geotech_hero.jpg"
            alt="SIMCON Geotechnical Deep Foundation Drilling Operations"
            className="w-full h-full object-cover object-center lg:object-right"
          />
          {/* Angled and smooth gradient blend from left deep navy into the photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#062B5C] via-[#062B5C]/95 sm:via-[#062B5C]/75 to-transparent lg:from-[#062B5C] lg:via-[#062B5C]/70 lg:to-transparent/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062B5C] via-transparent to-transparent opacity-95 lg:opacity-75" />
        </div>

        {/* Topographic Contour Linework Overlay (Authentic Geological Survey Elevation Curves) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20 stroke-sky-400 z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
          fill="none"
        >
          <path d="M-100,100 C150,80 300,250 500,180 C700,110 850,300 1200,200" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M-100,200 C180,180 320,380 550,290 C780,200 900,420 1250,320" strokeWidth="1.2" />
          <path d="M-100,320 C120,300 280,500 480,410 C680,320 820,530 1200,450" strokeWidth="1" strokeDasharray="4 2" />
          <path d="M-100,450 C200,420 350,620 580,530 C810,440 920,650 1250,570" strokeWidth="1.2" />
          <path d="M-100,580 C150,550 300,750 520,660 C740,570 880,780 1200,700" strokeWidth="1" strokeDasharray="2 4" />
          <path d="M-100,700 C220,680 380,850 620,780 C860,710 950,890 1250,820" strokeWidth="1" />
        </svg>

        {/* Hero Body Content */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 lg:pt-5 pb-2 relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-8">
              {/* Strong Editorial Headline */}
              <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.06] sm:leading-[1.04] max-w-2xl uppercase">
                ENGINEERING<br />
                THE GROUND<br />
                BENEATH<br />
                <span className="text-[#1268B3]">EVERY DECISION.</span>
              </h1>

              {/* Supporting Text */}
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-slate-200 leading-relaxed max-w-xl font-normal">
                Geotechnical investigation, testing and engineering services for complex infrastructure. Backed by NABL-accredited central testing laboratories, IIT & NIT advisory rigor, and over 18 years of national project execution.
              </p>

              {/* Action Button */}
              <div className="mt-2.5 sm:mt-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-transparent hover:bg-white/10 border border-white/40 hover:border-white rounded-full transition-all duration-200 group"
                >
                  <span>Explore Our Capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Glassmorphic Statistics Bar (Option 2 Glassmorphism Style) */}
        <div className="w-full relative z-10 px-3.5 sm:px-6 lg:px-8 pb-3 sm:pb-3.5 lg:pb-4">
          <HeroStats />
        </div>
      </section>

      {/* ===================================================
          3. WHY SIMCON (Evidence & Value Proposition)
      =================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* Left Column: Heading, Subtitle & Director's Quote */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold font-display text-[#062B5C] tracking-tight leading-[1.12]">
                  Engineering Decisions<br className="hidden sm:block" />
                  Built on <span className="text-[#1E60FF]">Evidence</span><span className="text-[#D71920]">.</span>
                </h2>

                <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#536271] leading-relaxed max-w-xl">
                  At SIMCON Technology, we believe foundational decisions must be driven by verifiable technical facts and strict ethics - never by commercial pressure.
                </p>
              </div>

              {/* Director's Principle Quote Box (Expands to match right side height) */}
              <div className="bg-[#062B5C] text-white p-7 sm:p-9 lg:p-10 rounded-2xl relative shadow-md mt-8 sm:mt-10 flex-1 flex flex-col justify-between">
                <div className="flex-1 flex flex-col justify-center py-2 sm:py-4">
                  <blockquote className="text-xl sm:text-2xl lg:text-[23px] font-display font-medium leading-relaxed italic text-white/95">
                    <span className="text-3xl sm:text-4xl text-[#4A8BE2] font-serif font-black mr-1.5 select-none leading-none inline-block align-top">“</span>
                    Engineering decisions must be driven by facts, technical competence and ethics - not by commercial pressure.
                    <span className="text-3xl sm:text-4xl text-[#4A8BE2] font-serif font-black ml-1.5 select-none leading-none inline-block">”</span>
                  </blockquote>
                </div>

                <div className="pt-6 sm:pt-7 mt-6 sm:mt-7 border-t border-white/15 flex items-center gap-3.5 sm:gap-4">
                  <img
                    src="/assets/leadership/vinesh-maheshwari.jpeg"
                    alt={COMPANY_INFO.directorsMessage.author}
                    className="w-12 h-12 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-white/25 shrink-0 shadow-sm"
                  />
                  <div>
                    <div className="font-bold text-base sm:text-lg text-white font-display">
                      {COMPANY_INFO.directorsMessage.author}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 font-normal mt-0.5">
                      {COMPANY_INFO.directorsMessage.title} ({COMPANY_INFO.directorsMessage.credentials})
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 6 Feature Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                {
                  icon: <GraduationCap className="w-6 h-6 text-[#2563EB]" />,
                  iconBg: "bg-blue-50",
                  title: "IIT & NIT Academic Guidance",
                  desc: "Senior engineering decisions reviewed and guided by doctorate advisors with deep research expertise in soil mechanics."
                },
                {
                  icon: <Award className="w-6 h-6 text-[#E11D48]" />,
                  iconBg: "bg-red-50",
                  title: "NABL Accreditation (581 Parameters)",
                  desc: "ISO/IEC 17025:2017 accredited laboratories in Gandhidham, Ahmedabad, and Lucknow ensuring strict audit compliance."
                },
                {
                  icon: <Settings className="w-6 h-6 text-[#2563EB]" />,
                  iconBg: "bg-blue-50",
                  title: "Modern Digitalized Testing Labs",
                  desc: "Automated triaxial compression, digital consolidation, and servo-controlled UTM setups eliminating manual transcription."
                },
                {
                  icon: <BarChart3 className="w-6 h-6 text-[#2563EB]" />,
                  iconBg: "bg-blue-50",
                  title: "Advanced Numerical Modeling",
                  desc: "Full in-house modeling using PLAXIS 2D, LPILE, StoneC, and LIQSVS for complex soil-structure interaction."
                },
                {
                  icon: <MapPin className="w-6 h-6 text-[#E11D48]" />,
                  iconBg: "bg-red-50",
                  title: "Rapid Pan-India Mobilization",
                  desc: "Four strategic regional hubs and owned drilling fleet capable of deploying to remote transit and energy corridors."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-[#2563EB]" />,
                  iconBg: "bg-blue-50",
                  title: "Rigorous Chain of Custody",
                  desc: "Systematic undisturbed core sampling, electronic tracking, and verifiable reporting for EPCs and government authorities."
                }
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/70 shadow-xs hover:bg-white hover:border-[#1E60FF]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-start"
                >
                  <div className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center mb-4 sm:mb-5 shrink-0`}>
                    {card.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#062B5C] mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536271] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================
          4. INVESTIGATE → ANALYSE → DESIGN
          Engineering Framework Progression Workflow
      =================================================== */}
      <section className="py-20 lg:py-28 bg-[#F1F3F7] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#062B5C] tracking-tight leading-[1.12]">
              Investigate. Analyse. Design<span className="text-[#D71920]">.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#536271] leading-relaxed">
              Our recurring engineering framework unites subsurface investigation, scientific numerical interpretation, and actionable engineering recommendations.
            </p>
          </div>

          {/* 3 Workflow Cards (Without dot & arrow line as requested) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                number: "01",
                badgeClass: "bg-[#FFF0F1] text-[#D71920]",
                numberColor: "text-[#D71920]",
                title: "INVESTIGATE",
                subtitle: "Field & Laboratory Exploration",
                description: "Subsurface boreholes, rotary rock drilling, non-invasive geophysics, in-situ and laboratory dynamic parameters, and precision laboratory testing.",
                image: "/assets/workflow/investigate.jpg",
                bulletColor: "bg-[#D71920]",
                items: [
                  "Field Investigations",
                  "NABL Laboratory Testing",
                  "Geophysical Surveys",
                  "In-situ Dynamic Testing"
                ]
              },
              {
                number: "02",
                badgeClass: "bg-[#EFF6FF] text-[#1E60FF]",
                numberColor: "text-[#1E60FF]",
                title: "ANALYSE",
                subtitle: "Scientific & Numerical Modelling",
                description: "Finite-element soil-structure interaction, liquefaction potential assessment, seismic site characterization, and settlement modelling.",
                image: "/assets/workflow/analyse.jpg",
                bulletColor: "bg-[#1E60FF]",
                items: [
                  "PLAXIS 2D Numerical Modelling",
                  "LPILE Lateral Pile Analysis",
                  "Liquefaction Potential Assessment",
                  "Geotechnical Data Interpretation"
                ]
              },
              {
                number: "03",
                badgeClass: "bg-slate-100 text-[#062B5C]",
                numberColor: "text-[#062B5C]",
                title: "DESIGN",
                subtitle: "Engineering Support & Solutions",
                description: "Optimized foundation recommendations, ground improvement schemes, retaining structures, and actionable design support for contractors and EPCs.",
                image: "/assets/workflow/design.jpg",
                bulletColor: "bg-[#062B5C]",
                items: [
                  "Foundation Recommendations",
                  "Ground Improvement Design",
                  "Retaining & Deep Excavation Support",
                  "Technical Design Support"
                ]
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 bg-white">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-mono text-2xl font-black ${step.numberColor}`}>
                        {step.number}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${step.badgeClass}`}>
                        PHASE {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold font-display text-[#062B5C] uppercase tracking-wide">
                      {step.title}
                    </h3>

                    <div className="text-xs sm:text-sm font-semibold text-[#536271] mt-0.5 mb-3">
                      {step.subtitle}
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#536271] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Bullets List at Bottom */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-4 bg-[#F8FAFC] border-t border-slate-200/70 mt-2">
                  <ul className="space-y-2">
                    {step.items.map((it, i) => (
                      <li key={i} className="text-xs font-medium text-[#17212B] flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${step.bulletColor} shrink-0`} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================
          5. COMPREHENSIVE ENGINEERING SERVICES (Slideshow Tabs)
      =================================================== */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-display text-[#062B5C] tracking-tight leading-[1.12]">
                End-to-End Engineering Solutions<span className="text-[#1E60FF]">.</span>
              </h2>
              <p className="mt-3 text-base text-[#536271] leading-relaxed max-w-2xl">
                Explore our specialized testing, surveying, and diagnostic services tailored for heavy infrastructure.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1E60FF] hover:text-[#062B5C] uppercase tracking-wider shrink-0 transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Discipline Controller (Zero Horizontal Scroll for small devices) */}
          <div
            className="sm:hidden mb-3 space-y-2"
            onMouseEnter={() => setIsServicesPaused(true)}
            onMouseLeave={() => setIsServicesPaused(false)}
          >
            {/* Active Discipline Card with Previous/Next Controls */}
            <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-200/90 shadow-xs flex items-center justify-between gap-2.5">
              <button
                type="button"
                onClick={() => setActiveServiceIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length)}
                className="w-9 h-9 rounded-lg bg-white hover:bg-[#1E60FF] hover:text-white text-slate-700 border border-slate-200/70 flex items-center justify-center transition-colors shrink-0 cursor-pointer active:scale-95"
                aria-label="Previous discipline"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 min-w-0 flex-1 justify-center">
                <span className="p-1.5 rounded-lg bg-blue-50 text-[#1E60FF] shrink-0">
                  {getServiceIcon(featuredService.iconName)}
                </span>
                <div className="min-w-0 text-left">
                  <span className="text-[10px] font-mono font-bold text-[#1E60FF] block leading-none mb-0.5">
                    DISCIPLINE {featuredService.number} / 08
                  </span>
                  <span className="text-xs font-bold text-[#062B5C] truncate block leading-tight">
                    {SERVICE_TAB_LABELS[featuredService.id] || featuredService.title}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveServiceIndex((prev) => (prev + 1) % SERVICES.length)}
                className="w-9 h-9 rounded-lg bg-white hover:bg-[#1E60FF] hover:text-white text-slate-700 border border-slate-200/70 flex items-center justify-center transition-colors shrink-0 cursor-pointer active:scale-95"
                aria-label="Next discipline"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* 8 Quick-Tap Number Indicator Pills (No scroll on any mobile phone) */}
            <div className="grid grid-cols-8 gap-1.5">
              {SERVICES.map((srv, idx) => {
                const isActive = activeServiceIndex === idx;
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setActiveServiceIndex(idx)}
                    className={`py-1.5 text-center text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${isActive
                        ? 'bg-[#1E60FF] text-white shadow-xs font-black scale-102'
                        : 'bg-[#F8FAFC] text-slate-600 border border-slate-200/80 hover:bg-slate-100'
                      }`}
                    aria-label={`Select discipline ${srv.number}`}
                  >
                    {srv.number}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tablet & Desktop Tabs Grid (4 columns on tablet, 8 columns on desktop - Zero scroll) */}
          <div
            className="hidden sm:grid sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-2.5 pb-2"
            onMouseEnter={() => setIsServicesPaused(true)}
            onMouseLeave={() => setIsServicesPaused(false)}
          >
            {SERVICES.map((srv, idx) => {
              const isActive = activeServiceIndex === idx;
              const tabLabel = SERVICE_TAB_LABELS[srv.id] || srv.title;

              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setActiveServiceIndex(idx)}
                  className={`flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-xl transition-all duration-300 relative group cursor-pointer ${isActive
                      ? 'bg-white shadow-md border border-slate-200 ring-1 ring-[#1E60FF]/20'
                      : 'bg-[#F8FAFC] hover:bg-slate-100 border border-slate-200/70 hover:border-slate-300'
                    }`}
                >
                  {/* Top: Service Number in Blue when active */}
                  <span
                    className={`font-mono text-xs font-bold transition-colors ${isActive ? 'text-[#1E60FF]' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                  >
                    {srv.number}
                  </span>

                  {/* Middle: Discipline Icon in Blue when active */}
                  <div
                    className={`my-2 transition-transform duration-300 ${isActive
                        ? 'text-[#1E60FF] scale-110'
                        : 'text-slate-400 group-hover:text-slate-600 group-hover:scale-105'
                      }`}
                  >
                    {getServiceIcon(srv.iconName)}
                  </div>

                  {/* Bottom: Tab Title */}
                  <span
                    className={`text-[11px] sm:text-xs font-semibold leading-tight line-clamp-2 transition-colors ${isActive
                        ? 'text-[#062B5C] font-bold'
                        : 'text-slate-600 group-hover:text-[#062B5C]'
                      }`}
                  >
                    {tabLabel}
                  </span>

                  {/* Active Indicator Bar in Blue */}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-1 bg-[#1E60FF] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Main Service Feature Card (Slideshow Content - Compact Padding) */}
          <div
            className="mt-4 sm:mt-5 bg-white rounded-2xl p-4 sm:p-5 lg:p-6 border border-slate-200/90 shadow-[0_10px_35px_rgba(6,43,92,0.06)] transition-all duration-300"
            onMouseEnter={() => setIsServicesPaused(true)}
            onMouseLeave={() => setIsServicesPaused(false)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

              {/* Left Side: Featured Image with Discipline Badge */}
              <div className="lg:col-span-6">
                <div className="relative h-56 sm:h-64 lg:h-[310px] w-full rounded-xl overflow-hidden shadow-sm bg-slate-900 group">
                  <img
                    key={featuredService.id}
                    src={featuredService.heroImage}
                    alt={featuredService.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Discipline Overlay Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 bg-[#062B5C]/90 backdrop-blur-xs text-white px-3 py-1 rounded-md text-[11px] font-mono font-bold shadow-md flex items-center gap-1.5">
                    <span className="text-[#1E60FF]">DISCIPLINE {featuredService.number}</span>
                    <span className="text-white/40">·</span>
                    <span className="text-slate-200 uppercase tracking-wider text-[10px]">
                      {featuredService.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Service Details & Blue Action Button */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold font-display text-[#062B5C] leading-snug">
                    {featuredService.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536271] mt-2 leading-relaxed">
                    {featuredService.shortDescription}
                  </p>
                </div>

                {/* Key Capabilities Bullet Points */}
                <div className="space-y-2 pt-0.5">
                  <ul className="space-y-2">
                    {featuredService.keyCapabilities.slice(0, 4).map((cap, i) => (
                      <li key={i} className="text-xs sm:text-[13px] font-medium text-[#17212B] flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1E60FF] shrink-0 mt-0.5" />
                        <span className="leading-snug">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons: Blue Primary Button */}
                <div className="pt-1.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link
                    to={`/services/${featuredService.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#1E60FF] hover:bg-[#1268B3] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-center"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/contact"
                    className="text-xs font-mono font-semibold text-[#536271] hover:text-[#062B5C] transition-colors text-center sm:text-left py-1 sm:py-0"
                  >
                    Request Quotation →
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ===================================================
          6. FEATURED PROJECT (Major Case Study)
      =================================================== */}
      <section className="py-20 lg:py-28 bg-[#062B5C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Case Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.12]">
                Mumbai–Ahmedabad High Speed Rail
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                SIMCON provided comprehensive subsurface geotechnical investigation, deep rock core drilling, and High Strain Dynamic Pile Load Testing (PDA) for India's pioneer Bullet Train project (MAHSR Sabarmati Hub and C6 Package).
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-mono">
                <div className="bg-white/10 p-3.5 rounded border border-white/10">
                  <span className="text-slate-400 block text-[10px]">CLIENT & PARTNER</span>
                  <span className="text-white font-bold text-xs mt-0.5 block">NHSRCL / L&T</span>
                </div>
                <div className="bg-white/10 p-3.5 rounded border border-white/10">
                  <span className="text-slate-400 block text-[10px]">SECTOR</span>
                  <span className="text-white font-bold text-xs mt-0.5 block">High Speed Transit</span>
                </div>
                <div className="bg-white/10 p-3.5 rounded border border-white/10">
                  <span className="text-slate-400 block text-[10px]">TECHNICAL SCOPE</span>
                  <span className="text-white font-bold text-xs mt-0.5 block">PDA & Soil Testing</span>
                </div>
                <div className="bg-white/10 p-3.5 rounded border border-white/10">
                  <span className="text-slate-400 block text-[10px]">STANDARDS</span>
                  <span className="text-white font-bold text-xs mt-0.5 block">Japanese Shinkansen Criteria</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/projects/mahsr-bullet-train-sabarmati"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-[#062B5C] bg-white hover:bg-slate-100 rounded transition-colors text-center"
                >
                  <span>View Project Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/projects"
                  className="text-xs font-mono text-slate-300 hover:text-white underline underline-offset-4 text-center sm:text-left"
                >
                  All Projects (6,480+) →
                </Link>
              </div>
            </div>

            {/* Right Project Image */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900">
                <img
                  src="/assets/projects/project-metro-bullet-train-1.png"
                  alt="Mumbai-Ahmedabad High Speed Rail Bullet Train Project by SIMCON"
                  className="w-full h-[400px] sm:h-[460px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          7. NABL ACCREDITATIONS & CERTIFICATES (High Trust)
      =================================================== */}
      <section className="py-20 lg:py-28 bg-[#F1F3F7] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              technicalLabel="QUALITY BENCHMARKS"
              title="NABL Accredited Testing Facilities."
              description="Accredited under ISO/IEC 17025:2017 for 581 distinct parameters across physical, mechanical, and chemical testing."
              className="mb-0!"
            />
            <Link
              to="/accreditations"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] uppercase tracking-wider"
            >
              Complete NABL Scope <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACCREDITATIONS.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group"
              >
                <div className="p-6">
                  {/* Certificate Thumbnail Preview */}
                  <div
                    onClick={() => setSelectedCertificate(cert)}
                    className="relative h-56 bg-slate-200 rounded border border-slate-300 overflow-hidden cursor-pointer group-hover:border-[#1268B3] transition-colors mb-5"
                  >
                    <img
                      src={cert.imagePath}
                      alt={`Certificate ${cert.code} - ${cert.location}`}
                      className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="px-3 py-1.5 bg-white text-[#062B5C] text-xs font-mono font-bold rounded shadow-md flex items-center gap-1.5">
                        Inspect Certificate <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#D71920]">
                      {cert.standard}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#062B5C] text-white rounded">
                      {cert.code}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-[#062B5C]">
                    {cert.location}
                  </h3>
                  <p className="text-xs text-[#536271] mt-2 leading-relaxed">
                    {cert.scopeDescription}
                  </p>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCertificate(cert)}
                    className="text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] flex items-center gap-1"
                  >
                    View Official Certificate →
                  </button>
                  <span className="text-[10px] font-mono text-slate-400">NABL Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          8. RECENT PROJECTS DIRECTORY PREVIEW
      =================================================== */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              technicalLabel="PROJECT ARCHIVE"
              title="Proven Track Record in Complex Ground."
              description="A curated look into our recent national engineering testing and foundation investigation engagements."
              className="mb-0!"
            />
            <Link
              to="/projects"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] uppercase tracking-wider"
            >
              Browse All Projects (6,480+) <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((proj) => (
              <Link
                key={proj.id}
                to={`/projects/${proj.slug}`}
                className="bg-white rounded-lg border border-slate-200/90 shadow-xs overflow-hidden hover:shadow-md hover:border-[#1268B3]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={proj.featuredImage}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 bg-[#062B5C]/90 text-white text-[10px] font-mono rounded">
                        {proj.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="font-display font-bold text-sm text-[#062B5C] group-hover:text-[#1268B3] transition-colors line-clamp-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {proj.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{proj.location?.split(',')[0]}</span>
                  <span className="text-[#1268B3] font-semibold group-hover:translate-x-0.5 transition-transform">
                    Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          9. MODULAR FINANCIAL GROWTH SECTION
      =================================================== */}
      <FinancialGrowth />

      {/* ===================================================
          10. OUR REACH (Interactive India Map & Hubs)
      =================================================== */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="OPERATING REACH"
            title="Strategic Regional Hubs. Pan-India Execution."
            description="With permanent testing laboratories and hubs in Gandhidham, Ahmedabad, Lucknow, and Indore, we mobilize specialized crews to any site nationwide."
          />

          <IndiaMap />
        </div>
      </section>

      {/* ===================================================
          11. CLIENT LOGO WALL (Verified Real Clients)
      =================================================== */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold font-display text-[#062B5C] tracking-tight leading-[1.15]">
              Trusted by Premier <span className="text-[#1E60FF]">Infrastructure Organizations</span>
            </h2>

            <p className="mt-3.5 text-sm sm:text-base text-[#536271] max-w-2xl mx-auto leading-relaxed">
              We are proud to work with leading organizations across government, public and private infrastructure sectors.
            </p>
          </div>

          {/* 16 Logos Grid (2 rows of 8 logos matching the reference layout) */}
          <div className="space-y-4 sm:space-y-6 max-w-6xl mx-auto">
            {/* Row 1 (8 Logos) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 items-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 py-2 sm:py-3">
              {row1Clients.map((client) => (
                <div
                  key={client.id}
                  className="px-2 sm:px-3 py-3 sm:py-4 flex items-center justify-center h-24 sm:h-28 lg:h-30 group transition-all"
                  title={client.name}
                >
                  {client.logoPath ? (
                    <img
                      src={client.logoPath}
                      alt={client.name}
                      className="max-h-16 sm:max-h-18 lg:max-h-[72px] max-w-[92%] object-contain group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-xs font-mono font-bold text-[#062B5C] text-center line-clamp-2">
                      {client.name}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Row 2 (8 Logos) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 items-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 py-2 sm:py-3">
              {row2Clients.map((client) => (
                <div
                  key={client.id}
                  className="px-2 sm:px-3 py-3 sm:py-4 flex items-center justify-center h-24 sm:h-28 lg:h-30 group transition-all"
                  title={client.name}
                >
                  {client.logoPath ? (
                    <img
                      src={client.logoPath}
                      alt={client.name}
                      className="max-h-16 sm:max-h-18 lg:max-h-[72px] max-w-[92%] object-contain group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-xs font-mono font-bold text-[#062B5C] text-center line-clamp-2">
                      {client.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Centered Directory Link */}
          <div className="mt-12 sm:mt-14 flex items-center justify-center">
            <Link
              to="/clients"
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E60FF] hover:text-[#062B5C] transition-colors flex items-center gap-1.5"
            >
              <span>VIEW FULL CLIENT & PARTNER DIRECTORY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ===================================================
          12. CAREERS CALLOUT
      =================================================== */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#062B5C] rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
            <div className="relative z-10 max-w-xl space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
                Build Your Engineering Career on Solid Ground.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Join an established team of doctorates, postgraduates, and testing professionals working on India's most challenging transit and geotechnical projects.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-[#062B5C] bg-white hover:bg-slate-100 rounded transition-colors shadow-md"
              >
                <span>Explore Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          13. FINAL CTA
      =================================================== */}
      <section className="py-20 lg:py-28 bg-[#F1F3F7] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#062B5C] leading-tight">
            Let's Talk About Your Project.
          </h2>

          <p className="text-base text-[#536271] max-w-2xl mx-auto leading-relaxed">
            Whether planning deep foundation investigations, highway material testing, or non-destructive structural diagnostics, our engineering directors are ready to assist.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-wider uppercase text-white bg-[#062B5C] hover:bg-[#1268B3] rounded-md transition-all shadow-sm"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.officialPhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold font-mono uppercase tracking-wider text-[#062B5C] bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-all"
            >
              <span>Call: {COMPANY_INFO.officialPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* NABL Certificate Inspection Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
};

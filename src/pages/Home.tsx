import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  ChevronRight, 
  ExternalLink,
  Activity,
  Search,
  FlaskConical,
  Compass,
  Gauge,
  MonitorCheck,
  Building2
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
import { AccreditationCertificate } from '@/data/certificates';

export const Home: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<AccreditationCertificate | null>(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const featuredService = SERVICES[activeServiceIndex];
  const featuredProjects = PROJECTS.slice(0, 4);
  const selectedClients = CLIENTS.filter(c => c.featured).slice(0, 16);

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
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#F7F8FA] border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Engineering Linework & Precision Grid */}
        <div className="absolute inset-0 bg-tech-grid opacity-70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Typography & CTAs */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-slate-200 text-xs font-mono font-medium text-[#062B5C] shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                  <span>SIMCON TECHNOLOGY PVT. LTD.</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-[#1268B3]">ESTD. 2008</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-[#062B5C] tracking-tight leading-[1.08]">
                  ENGINEERING<br />
                  THE GROUND<br />
                  BENEATH<br />
                  <span className="text-[#1268B3]">EVERY DECISION.</span>
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-[#536271] leading-relaxed max-w-xl font-normal">
                {COMPANY_INFO.subTagline} Backed by NABL-accredited central testing laboratories, IIT & NIT advisory rigor, and over 18 years of national project execution.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-bold tracking-wider uppercase text-white bg-[#062B5C] hover:bg-[#1268B3] rounded-md transition-all duration-200 shadow-sm group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold tracking-wider uppercase text-[#062B5C] bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-all duration-200"
                >
                  <span>Explore Capabilities</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-lg text-xs">
                <div>
                  <span className="font-display font-bold text-lg text-[#062B5C] block">18+</span>
                  <span className="text-slate-500 text-[11px] leading-tight block">Years of Geotechnical Experience</span>
                </div>
                <div>
                  <span className="font-display font-bold text-lg text-[#062B5C] block">6,480+</span>
                  <span className="text-slate-500 text-[11px] leading-tight block">Projects Successfully Executed</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-display font-bold text-lg text-[#062B5C] block">581</span>
                  <span className="text-slate-500 text-[11px] leading-tight block">NABL Accredited Testing Parameters</span>
                </div>
              </div>
            </div>

            {/* Right Architectural Photographic Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
                <img
                  src="/assets/services/field-testing/field-testing-1.png"
                  alt="SIMCON Geotechnical Deep Foundation Field Testing & Drilling Operations"
                  className="w-full h-[440px] sm:h-[500px] object-cover"
                />
                
                {/* Real Technical Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#062B5C] via-[#062B5C]/90 to-transparent text-white">
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#2B7EC8] uppercase mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                    FIELD INVESTIGATION FLEET
                  </div>
                  <h3 className="text-sm font-bold font-display leading-snug">
                    Deep Subsurface Drilling & In-situ Foundation Load Testing
                  </h3>
                  <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                    Mobilizing rotary core rigs and digitalized reaction testing setups across transit, port, and industrial corridors.
                  </p>
                </div>
              </div>

              {/* Offset Accreditation Stamp */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-md border border-slate-200 shadow-md hidden sm:flex items-center gap-3 max-w-[220px]">
                <div className="w-9 h-9 rounded bg-[#062B5C] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#062B5C] block leading-tight">ISO/IEC 17025</span>
                  <span className="text-[10px] font-mono text-slate-500 block">NABL Certified Labs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          2. STATS SECTION (Editorial, Large Typography)
      =================================================== */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {COMPANY_INFO.stats.slice(0, 4).map((stat, i) => (
              <div key={i} className="border-l-2 border-[#1268B3] pl-4 sm:pl-6 space-y-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#062B5C] tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#17212B] uppercase tracking-wider block">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-500 block leading-normal">
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          3. WHY SIMCON (Asymmetric Editorial Composition)
      =================================================== */}
      <section className="py-20 lg:py-28 bg-[#F7F8FA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="// VALUE PROPOSITION"
            title="Engineering Decisions Built on Evidence."
            description="At SIMCON Technology, we believe foundational decisions must be driven by verifiable technical facts and strict ethics — never by commercial pressure."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Big Highlight Box */}
            <div className="lg:col-span-5 bg-[#062B5C] text-white p-8 lg:p-10 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <span className="text-xs font-mono tracking-widest text-[#2B7EC8] uppercase block font-semibold">
                  DIRECTOR'S PRINCIPLE
                </span>
                <blockquote className="text-xl sm:text-2xl font-display font-medium leading-relaxed italic text-slate-100">
                  "{COMPANY_INFO.directorsMessage.quote}"
                </blockquote>
                <div className="pt-4 border-t border-white/10">
                  <span className="font-display font-bold text-base block text-white">
                    {COMPANY_INFO.directorsMessage.author}
                  </span>
                  <span className="text-xs text-slate-300 font-mono block">
                    {COMPANY_INFO.directorsMessage.title} ({COMPANY_INFO.directorsMessage.credentials})
                  </span>
                </div>
                <Link
                  to="/about/leadership"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#2B7EC8] hover:text-white uppercase font-bold tracking-wider pt-2"
                >
                  Read Full Leadership Profile →
                </Link>
              </div>
            </div>

            {/* Right Capabilities Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "IIT & NIT Academic Guidance",
                  desc: "Senior engineering decisions reviewed and guided by doctorate advisors with deep research expertise in soil mechanics."
                },
                {
                  title: "NABL Accreditation (581 Parameters)",
                  desc: "ISO/IEC 17025:2017 accredited laboratories in Gandhidham, Ahmedabad, and Lucknow ensuring strict audit compliance."
                },
                {
                  title: "Modern Digitalized Testing Labs",
                  desc: "Automated triaxial compression, digital consolidation, and servo-controlled UTM setups eliminating manual transcription."
                },
                {
                  title: "Advanced Numerical Modeling",
                  desc: "Full in-house modeling using PLAXIS 2D, LPILE, StoneC, and LIQSVS for complex soil-structure interaction."
                },
                {
                  title: "Rapid Pan-India Mobilization",
                  desc: "Four strategic regional hubs and owned drilling fleet capable of deploying to remote transit and energy corridors."
                },
                {
                  title: "Rigorous Chain of Custody",
                  desc: "Systematic undisturbed core sampling, electronic tracking, and verifiable reporting for EPCs and government authorities."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-slate-200/90 shadow-2xs hover:border-[#1268B3]/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1268B3] shrink-0" />
                    <h3 className="font-bold font-display text-sm text-[#062B5C]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#536271] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          4. INVESTIGATE → ANALYSE → DESIGN
          Visual Engineering Progression Workflow
      =================================================== */}
      <section className="py-20 lg:py-28 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="// METHODOLOGY //"
            title="Investigate. Analyse. Design."
            description="Our recurring engineering framework unites subsurface investigation, scientific numerical interpretation, and actionable engineering recommendations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-slate-200 -translate-y-8 z-0 pointer-events-none" />

            {COMPANY_INFO.workflow.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F7F8FA] p-8 rounded-xl border border-slate-200 relative z-10 flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#D71920] group-hover:scale-105 transition-transform">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      PHASE {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-[#062B5C] mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#1268B3] mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-[#536271] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <ul className="space-y-1.5">
                    {step.items.map((it, i) => (
                      <li key={i} className="text-[11px] font-mono text-[#062B5C] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#1268B3]" />
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
          5. ENGINEERING CAPABILITIES (Interactive Editorial List)
      =================================================== */}
      <section className="py-20 lg:py-28 bg-[#F7F8FA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              technicalLabel="// CORE DISCIPLINES //"
              title="Comprehensive Engineering Services."
              description="Explore our specialized testing, surveying, and diagnostic services tailored for heavy infrastructure."
              className="mb-0!"
            />
            <Link
              to="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] uppercase tracking-wider"
            >
              Explore All 8 Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Interactive Service List */}
            <div className="lg:col-span-6 space-y-2">
              {SERVICES.map((srv, idx) => {
                const isActive = activeServiceIndex === idx;
                return (
                  <div
                    key={srv.id}
                    onMouseEnter={() => setActiveServiceIndex(idx)}
                    onClick={() => setActiveServiceIndex(idx)}
                    className={`p-4 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-white border-[#062B5C] shadow-sm'
                        : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#D71920]' : 'text-slate-400'}`}>
                        {srv.number}
                      </span>
                      <div className="flex items-center gap-2.5">
                        <span className={`p-1.5 rounded ${isActive ? 'bg-[#062B5C] text-white' : 'bg-slate-100 text-[#062B5C]'}`}>
                          {getServiceIcon(srv.iconName)}
                        </span>
                        <div>
                          <h3 className={`font-display font-bold text-sm ${isActive ? 'text-[#062B5C]' : 'text-[#17212B]'}`}>
                            {srv.title}
                          </h3>
                          <span className="text-[11px] text-slate-500 font-mono hidden sm:inline-block">
                            {srv.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/services/${srv.slug}`}
                      className={`text-xs font-mono font-semibold transition-colors ${
                        isActive ? 'text-[#1268B3]' : 'text-slate-400 hover:text-slate-700'
                      }`}
                      aria-label={`View details for ${srv.title}`}
                    >
                      Explore →
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Right Dynamic Service Feature Panel */}
            <div className="lg:col-span-6 sticky top-24">
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={featuredService.heroImage}
                    alt={featuredService.title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-[#062B5C]/90 backdrop-blur-xs text-white text-[10px] font-mono uppercase tracking-wider rounded">
                      DISCIPLINE {featuredService.number} // {featuredService.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#062B5C]">
                      {featuredService.title}
                    </h3>
                    <p className="text-xs text-[#536271] mt-2 leading-relaxed">
                      {featuredService.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#062B5C] block">
                      Core Testing Capabilities:
                    </span>
                    <ul className="space-y-1.5">
                      {featuredService.keyCapabilities.slice(0, 4).map((cap, i) => (
                        <li key={i} className="text-xs text-[#536271] flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1268B3] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <Link
                      to={`/services/${featuredService.slug}`}
                      className="inline-flex items-center justify-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-white bg-[#062B5C] hover:bg-[#1268B3] px-5 py-2.5 rounded transition-colors text-center"
                    >
                      <span>Complete Technical Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/contact"
                      className="text-xs font-mono text-[#536271] hover:text-[#062B5C] font-semibold text-center sm:text-right"
                    >
                      Request Quotation →
                    </Link>
                  </div>
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
              <div className="flex items-center gap-2">
                <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
                  // FLAGSHIP CASE STUDY //
                </span>
                <div className="h-[1px] w-8 bg-[#2B7EC8]/40" />
              </div>

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
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              technicalLabel="// QUALITY BENCHMARKS //"
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
                className="bg-[#F7F8FA] rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group"
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

                <div className="p-6 pt-0 border-t border-slate-200/80 mt-4 flex items-center justify-between">
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
      <section className="py-20 lg:py-28 bg-[#F7F8FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              technicalLabel="// PROJECT ARCHIVE //"
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
                className="bg-white rounded-lg border border-slate-200/90 overflow-hidden hover:shadow-md hover:border-[#1268B3]/50 transition-all flex flex-col justify-between group"
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
            technicalLabel="// OPERATING REACH //"
            title="Strategic Regional Hubs. Pan-India Execution."
            description="With permanent testing laboratories and hubs in Gandhidham, Ahmedabad, Lucknow, and Indore, we mobilize specialized crews to any site nationwide."
          />

          <IndiaMap />
        </div>
      </section>

      {/* ===================================================
          11. CLIENT LOGO WALL (Verified Real Clients)
      =================================================== */}
      <section className="py-16 bg-[#F7F8FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D71920] font-bold block mb-2">
              // PARTNERSHIPS BUILT ON TRUST
            </span>
            <h3 className="text-2xl font-bold font-display text-[#062B5C]">
              Trusted by Premier Infrastructure Organizations
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {selectedClients.map((client) => (
              <div
                key={client.id}
                className="bg-white p-3 rounded border border-slate-200/80 flex items-center justify-center h-20 shadow-2xs hover:border-[#1268B3] transition-colors"
                title={client.name}
              >
                {client.logoPath ? (
                  <img
                    src={client.logoPath}
                    alt={client.name}
                    className="max-h-12 max-w-[90%] object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-[10px] font-mono text-center font-bold text-[#062B5C] line-clamp-2">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/clients"
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#1268B3] hover:text-[#062B5C]"
            >
              View Full Client & Partner Directory →
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
              <span className="text-xs font-mono tracking-widest text-[#2B7EC8] uppercase font-bold">
                BUILD WITH SIMCON // RECRUITMENT
              </span>
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
      <section className="py-20 lg:py-28 bg-[#F7F8FA] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="technical-tag text-[#D71920] font-mono font-medium tracking-widest">
            // PROJECT INQUIRY //
          </span>

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

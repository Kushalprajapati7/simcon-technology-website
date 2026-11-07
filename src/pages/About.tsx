import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, ArrowRight, ShieldCheck, Award, Clock, Settings, Users, FileCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { WhySimcon } from '@/components/sections/WhySimcon';
import { FinancialGrowth } from '@/components/sections/FinancialGrowth';
import { FivePillarsSection } from '@/components/sections/FivePillarsSection';

export const About: React.FC = () => {
  return (
    <div className="pt-[72px]">
      {/* First Section: Company History & Corporate Overview (Matching Design) */}
      <section className="bg-white relative overflow-hidden py-14 sm:py-16 lg:py-20 border-b border-slate-200">
        {/* Subtle architectural background ambiance */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-white to-blue-50/25 pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          
          {/* Main 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
            
            {/* Left Column (cols 1-6): History, Narrative, Milestones & CTA */}
            <div className="reveal reveal-left lg:col-span-6 space-y-6">
              
              {/* Technical Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
                  COMPANY HISTORY
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-extrabold font-display text-[#062B5C] leading-[1.14] tracking-tight">
                18+ Years of <br />
                <span className="text-[#1268B3]">Uncompromising</span> <br />
                Engineering Integrity<span className="text-[#D71920]">.</span>
              </h1>

              {/* Body Narrative */}
              <div className="space-y-4 text-sm sm:text-[15px] text-[#536271] leading-relaxed">
                <p>
                  Founded in 2008 with a steadfast commitment to evidence-based geotechnical engineering, SIMCON has executed over 6,480 projects across railway tunnels, metro rail corridors, airports, deep sea ports, and high-speed transit networks.
                </p>
                <p>
                  In 2024, our operations corporatized into <strong className="text-[#062B5C] font-bold">SIMCON Technology Pvt. Ltd.</strong>, unifying our expansive testing capabilities under a single modern structure while retaining the identical core leadership, academic advisors, and foundational values that defined our inception.
                </p>
              </div>

              {/* Milestones: 2008 & 2024 */}
              <div className="pt-2 flex items-center gap-8 sm:gap-12">
                <div className="border-l-3 border-[#D71920] pl-4">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#062B5C] block tracking-tight">
                    2008
                  </span>
                  <span className="text-xs text-[#536271] font-medium block mt-0.5">
                    Foundational Establishment
                  </span>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div className="border-l-3 border-[#1268B3] pl-4">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#062B5C] block tracking-tight">
                    2024
                  </span>
                  <span className="text-xs text-[#536271] font-medium block mt-0.5">
                    SIMCON Technology Pvt. Ltd.
                  </span>
                </div>
              </div>

              {/* Explore Our Journey Link */}
              <div className="pt-2">
                <a
                  href="#why-simcon"
                  className="inline-flex items-center gap-1.5 text-sm font-bold font-display text-[#062B5C] hover:text-[#1268B3] group transition-colors"
                >
                  <span>Explore Our Journey</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

            </div>

            {/* Right Column (cols 7-12): Visual Showcase with Overlaid Cards */}
            <div className="reveal reveal-right lg:col-span-6 relative lg:pr-4" style={{ '--delay': '0.15s' } as React.CSSProperties}>

              {/* Top-Right Floating Card: 6,480+ Projects Executed */}
              <div className="absolute -top-5 sm:-top-7 right-2 sm:right-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-3.5 sm:p-4.5 flex items-center gap-3.5 z-20">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1268B3] shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-xl sm:text-2xl font-display text-[#062B5C] leading-none">
                    6,480+
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1 block">
                    Projects Executed
                  </span>
                  <span className="block w-6 h-0.5 bg-[#D71920] mt-1" />
                </div>
              </div>

              {/* Main Photo Wrapper */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-100">
                <img
                  src="/assets/projects/geotechnical-investigation-site-1.png"
                  alt="SIMCON Field Drilling and Investigation Operations"
                  className="w-full h-auto aspect-[16/11] sm:aspect-[4/3] object-cover"
                />

                {/* Bottom Caption Bar */}
                <div className="p-3.5 sm:p-4 bg-white border-t border-slate-200 flex items-center justify-end gap-3 text-xs">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-extrabold font-display text-sm sm:text-base text-[#1268B3]">
                      2,00,000+
                    </span>
                    <span className="text-slate-600 font-medium text-xs">
                      Running Meters Tested
                    </span>
                  </div>

                  <a
                    href="#why-simcon"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D71920] hover:bg-[#B51319] text-white flex items-center justify-center transition-colors shadow-2xs"
                    aria-label="Explore fleet operations"
                  >
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>

              {/* Right Overlaid Vertical Card (Dark Navy 5 Sectors) */}
              <div className="hidden sm:block absolute right-3 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-60 sm:w-68 bg-[#062B5C]/95 backdrop-blur-md text-white rounded-2xl shadow-2xl p-4 sm:p-5 border border-white/15 z-20 space-y-2.5">
                {[
                  { num: '01', title: 'Railway Tunnels' },
                  { num: '02', title: 'Metro Rail Corridors' },
                  { num: '03', title: 'Airports' },
                  { num: '04', title: 'Deep Sea Ports' },
                  { num: '05', title: 'High-Speed Transit Networks' },
                ].map((item, idx) => (
                  <div
                    key={item.num}
                    className={`flex items-center gap-3 ${idx < 4 ? 'border-b border-white/10 pb-2.5' : ''}`}
                  >
                    <span className="font-mono text-base font-bold text-[#60A5FA] shrink-0 w-6">
                      {item.num}
                    </span>
                    <span className="text-xs sm:text-[13px] font-semibold text-white leading-tight">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Bottom Value Pillars Ribbon (Spanning Full Width) */}
          <div className="pt-10 sm:pt-14 mt-12 sm:mt-16 border-t border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200">
              
              {/* 1. Evidence-Based Approach */}
              <div className="flex items-center gap-3.5 lg:px-6 first:lg:pl-0">
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1268B3] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-display text-sm text-[#062B5C]">
                    Evidence-Based Approach
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Data-driven engineering solutions
                  </p>
                </div>
              </div>

              {/* 2. Advanced Testing Capabilities */}
              <div className="flex items-center gap-3.5 lg:px-6">
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1268B3] shrink-0">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-display text-sm text-[#062B5C]">
                    Advanced Testing Capabilities
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    State-of-the-art infrastructure
                  </p>
                </div>
              </div>

              {/* 3. Experienced Leadership */}
              <div className="flex items-center gap-3.5 lg:px-6">
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1268B3] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-display text-sm text-[#062B5C]">
                    Experienced Leadership
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Expert team and advisors
                  </p>
                </div>
              </div>

              {/* 4. Trusted by Leading Clients */}
              <div className="flex items-center gap-3.5 lg:px-6 last:lg:pr-0">
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1268B3] shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-display text-sm text-[#062B5C]">
                    Trusted by Leading Clients
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Across key infrastructure sectors
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Why SIMCON */}
      <div id="why-simcon" className="scroll-mt-24">
        <WhySimcon bgColor="bg-[#F8FAFC]" />
      </div>

      {/* Vision & Mission */}
      <section id="vision-mission" className="scroll-mt-24 py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="reveal reveal-left bg-[#F8FAFC] p-8 lg:p-10 rounded-xl border border-slate-200 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded bg-[#062B5C] text-white flex items-center justify-center">
                <Target className="w-6 h-6 text-[#2B7EC8]" />
              </div>
              <h2 className="text-2xl font-bold font-display text-[#062B5C]">
                Our Vision: The Preferred Partner in Technical Safety
              </h2>
              <blockquote className="text-base text-[#536271] leading-relaxed italic border-l-2 border-[#1268B3] pl-4">
                "{COMPANY_INFO.vision}"
              </blockquote>
            </div>

            {/* Mission */}
            <div className="reveal reveal-right bg-[#F8FAFC] p-8 lg:p-10 rounded-xl border border-slate-200 shadow-2xs space-y-4" style={{ '--delay': '0.12s' } as React.CSSProperties}>
              <div className="w-12 h-12 rounded bg-[#062B5C] text-white flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#2B7EC8]" />
              </div>
              <h2 className="text-2xl font-bold font-display text-[#062B5C]">
                Our Mission: Empowering Clients to Build Durably
              </h2>
              <blockquote className="text-base text-[#536271] leading-relaxed italic border-l-2 border-[#D71920] pl-4">
                "{COMPANY_INFO.mission}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* The Five Pillars of SIMCON */}
      <FivePillarsSection bgColor="bg-[#F8FAFC]" />

      {/* The SIMCON Philosophy - Compact & Simple Section */}
      <section className="py-12 sm:py-14 bg-[#041B3B] text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-15 pointer-events-none" />

        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          
          {/* Top Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10 mb-8">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#60A5FA] uppercase block">
                FOUNDING PHILOSOPHY & ETHOS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white mt-0.5">
                The SIMCON Philosophy: <span className="text-[#60A5FA]">Engineering Without Compromise</span>
              </h2>
            </div>
            <Link
              to="/about/team#leadership"
              className="text-xs font-mono font-bold text-[#60A5FA] hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors self-start sm:self-auto shrink-0"
            >
              Read Chairman's Full Address <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Main 2-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (cols 1-7): Quote, Summary & Small MD Avatar */}
            <div className="lg:col-span-7 space-y-4">
              <blockquote className="text-base sm:text-lg lg:text-xl font-medium text-white italic border-l-3 border-[#D71920] pl-4 leading-relaxed">
                "{COMPANY_INFO.directorsMessage.quote}"
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Founded in 2008, SIMCON was built on a singular conviction: infrastructure safety requires uncompromised ground truth. Across 6,480+ mega projects nationwide, our recommendations are backed 100% by certified field exploration and NABL-accredited laboratory data.
              </p>

              {/* Compact Director Signature Block */}
              <div className="flex items-center gap-3.5 pt-2">
                <img
                  src="/assets/leadership/vinesh-maheshwari.jpeg"
                  alt={COMPANY_INFO.directorsMessage.author}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#1268B3] shadow-md shrink-0"
                />
                <div>
                  <div className="font-bold text-sm sm:text-base text-white font-display">
                    {COMPANY_INFO.directorsMessage.author}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {COMPANY_INFO.directorsMessage.title} ({COMPANY_INFO.directorsMessage.credentials}) • <span className="text-emerald-400 font-sans">18+ Years Founding Leadership</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (cols 8-12): 3 Simple Pillars */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-3.5 lg:border-l lg:border-white/10 lg:pl-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-display">Zero Commercial Compromise</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">Recommendations driven strictly by verified field and laboratory data.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4 text-[#60A5FA]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-display">581 NABL Parameters</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">ISO/IEC 17025 accredited multi-laboratory testing benchmarks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-display">Committed Timelines</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">Milestone-driven delivery for critical infrastructure networks.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Modular Financial Growth */}
      <FinancialGrowth />

      {/* Navigation Quick Links to other About Us Sections */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200 overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-10 xl:gap-14">
            
            {/* Left Header */}
            <div className="reveal reveal-left shrink-0 max-w-sm lg:max-w-[280px] xl:max-w-[320px]">
              <span className="text-xs sm:text-[13px] font-bold text-[#062B5C] tracking-wide block">
                Explore
              </span>
              <h2 className="text-2xl sm:text-3xl xl:text-[34px] font-extrabold font-display text-[#062B5C] leading-tight tracking-tight mt-0.5">
                About <span className="text-[#1268B3]">Us</span>
              </h2>
              <p className="text-xs sm:text-[13px] text-[#536271] leading-relaxed mt-2.5">
                Discover our engineering professionals, NABL-accredited facilities, and approved authority empanelments.
              </p>
            </div>

            {/* Right Quick Nav Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 lg:gap-5 xl:gap-8 flex-1 items-stretch">
              {[
                {
                  id: 'team',
                  number: '01',
                  title: 'Our Team',
                  description: 'Executive leadership, branch directors, doctorate advisors, and 125+ engineering professionals.',
                  to: '/about/team',
                  accentColor: '#1268B3',
                  hoverText: 'group-hover:text-[#1268B3]',
                  bgGradient: 'linear-gradient(135deg, rgba(18, 104, 179, 0.09) 0%, rgba(18, 104, 179, 0.015) 100%)',
                },
                {
                  id: 'accreditations',
                  number: '02',
                  title: 'NABL Accreditations',
                  description: 'ISO/IEC 17025 accredited testing laboratories across 581 parameters in Gandhidham, Ahmedabad, and Lucknow.',
                  to: '/accreditations',
                  accentColor: '#D71920',
                  hoverText: 'group-hover:text-[#D71920]',
                  bgGradient: 'linear-gradient(135deg, rgba(215, 25, 32, 0.08) 0%, rgba(215, 25, 32, 0.015) 100%)',
                },
                {
                  id: 'approvals',
                  number: '03',
                  title: 'Approvals & Empanelment',
                  description: 'Approved testing consultant for NHAI, RVNL, MES, CPWD, AUDA, and key public sector undertakings.',
                  to: '/approvals',
                  accentColor: '#062B5C',
                  hoverText: 'group-hover:text-[#1268B3]',
                  bgGradient: 'linear-gradient(135deg, rgba(6, 43, 92, 0.08) 0%, rgba(6, 43, 92, 0.015) 100%)',
                },
              ].map((item, index) => (
                <Link
                  key={item.id}
                  to={item.to}
                  style={{ '--delay': `${(index + 1) * 0.08}s` } as React.CSSProperties}
                  className="reveal reveal-up group relative flex items-center gap-3 sm:gap-3.5 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none"
                >
                  {/* Number */}
                  <span
                    className="shrink-0 text-2xl sm:text-3xl xl:text-4xl font-extrabold font-display tracking-tight select-none leading-none transition-transform duration-300 group-hover:scale-105"
                    style={{ color: item.accentColor }}
                  >
                    {item.number}
                  </span>

                  {/* Parallelogram Card */}
                  <div className="relative flex-1 py-3.5 sm:py-4 pl-4 sm:pl-5 pr-5 sm:pr-6 h-full flex flex-col justify-center">
                    {/* Parallelogram background with slanted left accent border */}
                    <div
                      className="absolute inset-0 -skew-x-[18deg] origin-center rounded-[2px] transition-all duration-300 pointer-events-none group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
                      style={{
                        background: item.bgGradient,
                        borderLeft: `3.5px solid ${item.accentColor}`,
                      }}
                    />

                    {/* Content (Upright typography) */}
                    <div className="relative z-10 space-y-1">
                      <h3
                        className={`font-bold text-sm sm:text-[15px] xl:text-base font-display text-[#062B5C] ${item.hoverText} transition-colors leading-snug`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#536271] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

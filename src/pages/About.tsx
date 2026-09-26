import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Compass, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FinancialGrowth } from '@/components/sections/FinancialGrowth';

export const About: React.FC = () => {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#062B5C] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
              // ABOUT SIMCON TECHNOLOGY //
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1]">
              A Legacy Built on Rigor, Ethics, and Precision.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
              Established in 2008, SIMCON Technology Pvt. Ltd. has evolved from a boutique foundation consulting firm into a nationally recognized engineering testing enterprise operating NABL-accredited laboratories across India.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview & Evolution */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                technicalLabel="// COMPANY HISTORY"
                title="18+ Years of Uncompromising Engineering Integrity."
                className="mb-0!"
              />
              <p className="text-sm sm:text-base text-[#536271] leading-relaxed">
                Founded in 2008 with a steadfast commitment to evidence-based geotechnical engineering, SIMCON has executed over 6,480 projects across railway tunnels, metro rail corridors, airports, deep sea ports, and high-speed transit networks.
              </p>
              <p className="text-sm sm:text-base text-[#536271] leading-relaxed">
                In 2024, our operations corporatized into <strong className="text-[#062B5C]">SIMCON Technology Pvt. Ltd.</strong>, unifying our expansive testing capabilities under a single modern structure while retaining the identical core leadership, academic advisors, and foundational values that defined our inception.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="border-l-2 border-[#D71920] pl-4">
                  <span className="font-mono text-2xl font-bold text-[#062B5C] block">2008</span>
                  <span className="text-xs text-slate-500 font-mono">Foundational Establishment</span>
                </div>
                <div className="border-l-2 border-[#1268B3] pl-4">
                  <span className="font-mono text-2xl font-bold text-[#062B5C] block">2024</span>
                  <span className="text-xs text-slate-500 font-mono">SIMCON Technology Pvt. Ltd.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                <img
                  src="/assets/services/field-testing/field-testing-6.png"
                  alt="SIMCON Field Drilling and Investigation Operations"
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-4 bg-[#F7F8FA] border-t border-slate-200 text-xs font-mono text-slate-600 flex items-center justify-between">
                  <span>Subsurface Exploration Fleet</span>
                  <span className="text-[#1268B3] font-semibold">2,00,000+ Running Meters Drilled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission (Preserving Exact Source Content) */}
      <section className="py-20 bg-[#F7F8FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 lg:p-10 rounded-xl border border-slate-200 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded bg-[#062B5C] text-white flex items-center justify-center">
                <Target className="w-6 h-6 text-[#2B7EC8]" />
              </div>
              <span className="technical-tag text-[#D71920] font-mono tracking-widest block font-bold">
                // OUR VISION
              </span>
              <h2 className="text-2xl font-bold font-display text-[#062B5C]">
                The Preferred Partner in Technical Safety
              </h2>
              <blockquote className="text-base text-[#536271] leading-relaxed italic border-l-2 border-[#1268B3] pl-4">
                "{COMPANY_INFO.vision}"
              </blockquote>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 lg:p-10 rounded-xl border border-slate-200 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded bg-[#062B5C] text-white flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#2B7EC8]" />
              </div>
              <span className="technical-tag text-[#1268B3] font-mono tracking-widest block font-bold">
                // OUR MISSION
              </span>
              <h2 className="text-2xl font-bold font-display text-[#062B5C]">
                Empowering Clients to Build Durably
              </h2>
              <blockquote className="text-base text-[#536271] leading-relaxed italic border-l-2 border-[#D71920] pl-4">
                "{COMPANY_INFO.mission}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values (Exact Source Content) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="// PRINCIPLES //"
            title="The Five Pillars of SIMCON."
            description="Our core values govern every laboratory test, borehole log, and engineering recommendation we issue."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {COMPANY_INFO.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#F7F8FA] p-6 rounded-lg border border-slate-200 flex flex-col justify-between hover:border-[#062B5C] transition-colors"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#D71920] block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold font-display text-[#062B5C] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#536271] leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <span className="text-[10px] font-mono text-[#1268B3] font-semibold uppercase tracking-wider">
                    {val.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message Full Text */}
      <section className="py-20 bg-[#F7F8FA] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#D71920] uppercase font-bold block">
                  LEADERSHIP COMMITMENT
                </span>
                <h2 className="text-2xl font-bold font-display text-[#062B5C]">
                  Director's Message
                </h2>
              </div>
              <Shield className="w-8 h-8 text-[#062B5C]/20" />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#536271] leading-relaxed">
              {COMPANY_INFO.directorsMessage.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="font-display font-bold text-base text-[#062B5C] block">
                  {COMPANY_INFO.directorsMessage.author}
                </span>
                <span className="text-xs font-mono text-slate-500 block">
                  {COMPANY_INFO.directorsMessage.title} ({COMPANY_INFO.directorsMessage.credentials})
                </span>
              </div>
              <Link
                to="/about/leadership"
                className="text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] uppercase tracking-wider flex items-center gap-1"
              >
                Meet All Directors <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Financial Growth */}
      <FinancialGrowth />

      {/* Navigation Quick Links to Leadership & Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/about/leadership"
              className="p-8 rounded-xl bg-[#062B5C] text-white flex items-center justify-between group hover:bg-[#1268B3] transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-[#2B7EC8] uppercase tracking-widest block font-bold mb-1">
                  EXECUTIVE BOARD
                </span>
                <h3 className="text-2xl font-bold font-display">
                  Leadership & Technical Advisors →
                </h3>
                <p className="text-xs text-slate-300 mt-2">
                  Meet our Managing Director, academic doctorates, and branch in-charges.
                </p>
              </div>
            </Link>

            <Link
              to="/about/team"
              className="p-8 rounded-xl bg-[#F7F8FA] border border-slate-200 text-[#062B5C] flex items-center justify-between group hover:border-[#062B5C] transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-[#D71920] uppercase tracking-widest block font-bold mb-1">
                  125+ PROFESSIONALS
                </span>
                <h3 className="text-2xl font-bold font-display">
                  Explore Full Team Directory →
                </h3>
                <p className="text-xs text-[#536271] mt-2">
                  Engineers, geologists, chemists, and testing technicians across all 4 hubs.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

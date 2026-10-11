import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CHAIRMAN_DETAILS,
  LEADERSHIP,
  SPECIALIST_TEAM,
  ORG_STRUCTURE
} from '@/data/team';
import { TeamCard } from '@/components/cards/TeamCard';
import {
  Quote,
  ShieldCheck,
  Building2,
  Users,
  Award
} from 'lucide-react';

export const Team: React.FC = () => {
  const [activeDepartment, setActiveDepartment] = useState<
    'all' | 'geotech' | 'material' | 'field' | 'geophysical' | 'corporate'
  >('all');

  // Slide 1 data groupings
  const managingDirector = LEADERSHIP.find(m => m.id === 'kalpana-maheshwari');
  const branchIncharges = LEADERSHIP.filter(m => m.section === 'branch-leads');
  const technicalAdvisors = LEADERSHIP.filter(m => m.section === 'advisors');

  // Filter specialist team
  const filteredSpecialists = activeDepartment === 'all'
    ? SPECIALIST_TEAM
    : SPECIALIST_TEAM.filter(m => m.section === activeDepartment);

  return (
    <div className="pt-[72px] bg-[#F7F8FA]">
      {/* Hero Section */}
      <section className="bg-[#062B5C] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-xs rounded-full border border-white/20 text-white text-xs font-mono uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#2B7EC8]" />
              <span>SIMCON Leadership & Engineering Force</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white leading-tight">
              Our Team & Executive Leadership
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-1 max-w-3xl">
              125+ dedicated engineering professionals, geotechnical researchers, materials technologists, and NABL-accredited laboratory specialists guided by decades of proven integrity.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: LEADERSHIP & COMMITMENT (Matching Slide 1) */}
      <section id="leadership" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#062B5C] tracking-tight uppercase">
              LEADERSHIP & COMMITMENT
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Ethical leadership, academic rigor, and dedicated branch stewardship across India.
            </p>
          </div>

          {/* Slide 1 Grid Layout: Left Column (Chairman's Message) & Right Column (MD + Core Team) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* LEFT COLUMN: CHAIRMAN'S MESSAGE */}
            <div className="lg:col-span-5 flex">
              <div className="w-full bg-[#062B5C] text-white rounded-2xl p-6 sm:p-8 lg:p-9 shadow-xl border border-[#1268B3]/30 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  {/* Header Badge */}
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 text-[#2B7EC8]">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-white block">
                          CHAIRMAN'S MESSAGE
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Top: Portrait + Quote */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="sm:col-span-5">
                      <div className="aspect-[4/4.8] rounded-lg overflow-hidden border border-white/20 shadow-md bg-slate-800">
                        <img
                          src={CHAIRMAN_DETAILS.image}
                          alt={`${CHAIRMAN_DETAILS.name} - ${CHAIRMAN_DETAILS.designation}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-7 space-y-2">
                      <div className="flex items-start gap-1.5 text-[#2B7EC8]">
                        <Quote className="w-5 h-5 shrink-0 rotate-180 opacity-80" />
                      </div>
                      <p className="text-sm sm:text-base font-semibold font-display text-white leading-snug">
                        {CHAIRMAN_DETAILS.quote}
                      </p>
                    </div>
                  </div>

                  {/* Name & Credentials */}
                  <div className="space-y-1 pt-1">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      {CHAIRMAN_DETAILS.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-slate-300">
                      ({CHAIRMAN_DETAILS.qualifications})
                    </p>
                    <div className="w-full h-px bg-white/15 my-2" />
                  </div>

                  {/* Exact Message Paragraphs from Slide 1 */}
                  <div className="space-y-3.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {CHAIRMAN_DETAILS.messageParagraphs.map((para, idx) => (
                      <p key={idx} className="text-justify">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Footer Tagline */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>SIMCON TECHNOLOGY PVT. LTD.</span>
                  <span className="text-[#2B7EC8] font-bold">EST. 2008</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: MANAGING DIRECTOR + OUR CORE TEAM */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              {/* TOP: Dr. Kalpana Maheshwari (Managing Director) */}
              {managingDirector && (
                <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    <div className="sm:col-span-4">
                      <div className="aspect-[4/4.5] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                        <img
                          src={managingDirector.image}
                          alt={`${managingDirector.name} - ${managingDirector.designation}`}
                          className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-8 space-y-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C]">
                          {managingDirector.name}
                        </h3>
                        <p className="text-xs font-mono text-slate-500 font-semibold mt-0.5">
                          ({managingDirector.qualifications})
                        </p>
                      </div>

                      <div>
                        <span className="inline-block text-sm font-bold text-[#1268B3] pb-1 border-b-2 border-[#1268B3]">
                          {managingDirector.designation}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                        {managingDirector.bioSnippet ||
                          "Director with deep academic and technical acumen in civil engineering, overseeing quality benchmarks, geotechnical research and NABL accreditation compliance."}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* BOTTOM: OUR CORE TEAM (Branch Incharges + Technical Advisors) */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#062B5C] text-white flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-[#062B5C] uppercase tracking-wide">
                      OUR CORE TEAM
                    </h3>
                  </div>
                </div>

                {/* Row 1: 4 Branch Incharges */}
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3.5">
                    REGIONAL BRANCH INCHARGES
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {branchIncharges.map(member => (
                      <div
                        key={member.id}
                        className="text-center flex flex-col items-center p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-slate-100 hover:border-[#1268B3]/40 transition-colors"
                      >
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-100 mb-3">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-top"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                              {member.name.slice(0, 2)}
                            </div>
                          )}
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold font-display text-[#062B5C] leading-snug">
                          {member.name}
                        </h4>
                        <p className="text-xs text-slate-600 font-medium mt-1">
                          {member.designation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 2: 3 Technical Advisors */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3.5">
                    TECHNICAL ADVISORS & CONSULTING COUNCIL
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {technicalAdvisors.map(member => (
                      <div
                        key={member.id}
                        className="text-center flex flex-col items-center p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-slate-100 hover:border-[#1268B3]/40 transition-colors"
                      >
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-100 mb-3">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-top"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                              {member.name.slice(0, 2)}
                            </div>
                          )}
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold font-display text-[#062B5C] leading-snug">
                          {member.name}
                        </h4>
                        <p className="text-xs text-[#1268B3] font-semibold mt-1">
                          {member.designation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ORGANIZATIONAL STRENGTH (125+ Technical Team Breakdown) */}
      <section className="py-14 sm:py-16 bg-[#F1F3F7] border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C]">
              125+ Multidisciplinary Technical Composition
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Qualified geotechnical specialists, materials scientists, geophysicists, and NABL certified testing crew.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3.5 sm:gap-4">
            {ORG_STRUCTURE.breakdown.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#1268B3]/50 transition-colors"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-black font-display text-[#062B5C] block">
                    0{item.count}
                  </span>
                  <span className="text-xs font-bold text-[#17212B] block mt-1">
                    {item.title}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-2.5 leading-tight">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR TEAM — DEDICATED PEOPLE ACROSS SECTIONS AND SPECIALITIES */}
      <section id="specialists" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#062B5C] uppercase tracking-tight">
                OUR TEAM
              </h2>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-600 mt-1 uppercase font-mono">
                DEDICATED PEOPLE ACROSS SECTIONS AND SPECIALITIES
              </p>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Specialists (18)' },
                { id: 'geotech', label: 'Geotech Section' },
                { id: 'material', label: 'Material Testing' },
                { id: 'field', label: 'Field Testing' },
                { id: 'geophysical', label: 'Geophysical Section' },
                { id: 'corporate', label: 'Corporate Management' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDepartment(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${activeDepartment === tab.id
                      ? 'bg-[#062B5C] text-white font-bold shadow-xs'
                      : 'bg-[#F1F3F7] text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Full Width 18 Specialists Grid (3 Rows of 6) */}
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
              {filteredSpecialists.map(member => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Section 4: Bottom Technical Standard Callout */}
          <div className="mt-14 p-5 sm:p-6 bg-[#F8FAFC] rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                All field investigators and laboratory testing supervisors hold certified training, strict compliance with ISO/IEC 17025, and operate under senior academic advisory oversight.
              </span>
            </div>
            <Link
              to="/about/accreditations"
              className="text-[#1268B3] hover:text-[#062B5C] font-mono font-bold whitespace-nowrap"
            >
              View NABL Accreditations →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

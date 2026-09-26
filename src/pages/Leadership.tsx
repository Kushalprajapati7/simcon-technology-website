import React from 'react';
import { LEADERSHIP } from '@/data/team';
import { COMPANY_INFO } from '@/data/company';
import { TeamCard } from '@/components/cards/TeamCard';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Shield } from 'lucide-react';

export const Leadership: React.FC = () => {
  const executiveDirectors = LEADERSHIP.filter(m => m.section === 'leadership');
  const technicalAdvisors = LEADERSHIP.filter(m => m.section === 'advisors');
  const branchIncharges = LEADERSHIP.filter(m => m.section === 'branch-leads');

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#062B5C] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
              // EXECUTIVE DIRECTORS & ADVISORS //
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-[1.12]">
              Guided by Integrity, Academic Rigor, and Technical Competence.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed pt-2">
              Our executive board and senior advisory council unite decades of geotechnical field practice, doctorate-level research, and ethical governance.
            </p>
          </div>
        </div>
      </section>

      {/* Managing Director & Executive Leadership */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="// EXECUTIVE GOVERNANCE"
            title="Board of Directors"
            description="Leading SIMCON with long-term strategic vision, technical excellence, and dedication to client trust."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveDirectors.map(member => (
              <TeamCard key={member.id} member={member} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message Callout */}
      <section className="py-16 bg-[#F7F8FA] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#062B5C] text-white flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#2B7EC8]" />
              </div>
              <div>
                <h3 className="text-base font-bold font-display text-[#062B5C]">
                  Managing Director's Commitment
                </h3>
                <span className="text-xs font-mono text-slate-500">
                  {COMPANY_INFO.directorsMessage.author} ({COMPANY_INFO.directorsMessage.credentials})
                </span>
              </div>
            </div>
            <p className="text-sm text-[#536271] leading-relaxed italic border-l-2 border-[#1268B3] pl-4">
              "{COMPANY_INFO.directorsMessage.quote}"
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              "Our recommendations are based on genuine results from our own field investigations and laboratory testing, supported by qualified professionals, advanced resources and NABL-accredited facilities. We are committed to delivering technically sound, honest and reliable solutions within committed timelines."
            </p>
          </div>
        </div>
      </section>

      {/* Technical Advisory Board */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="// ACADEMIC & CONSULTING COUNCIL"
            title="Technical Advisors"
            description="Distinguished doctorates and material specialists advising on complex foundation systems, numerical modeling, and seismic ground engineering."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalAdvisors.map(member => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Regional Branch Incharges */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="// OPERATIONAL HUBS"
            title="Branch Leadership"
            description="Directing our regional testing laboratories, drilling rigs, and site engineering teams across Gandhidham, Ahmedabad, Lucknow, and Indore."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branchIncharges.map(member => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

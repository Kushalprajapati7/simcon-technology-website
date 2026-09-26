import React from 'react';
import { APPROVALS_EMPANELMENTS } from '@/data/certificates';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FileCheck2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Approvals: React.FC = () => {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#062B5C] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
              // INSTITUTIONAL RECOGNITION //
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-[1.12]">
              Government Approvals & Authority Empanelments.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed pt-2">
              SIMCON Technology is formally approved and empaneled by leading central government bodies, public transit boards, and state infrastructure authorities for third-party engineering testing and geotechnical exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Empanelments List */}
      <section className="py-20 bg-[#F7F8FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="// VERIFIED EMPANELMENTS"
            title="Institutional Empanelments"
            description="Our laboratories and drilling units meet the stringent pre-qualification standards required for strategic national infrastructure."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {APPROVALS_EMPANELMENTS.map((app) => (
              <div
                key={app.id}
                className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#1268B3]/60 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-2.5 rounded bg-blue-50 text-[#1268B3]">
                      <FileCheck2 className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded font-semibold">
                      Empaneled & Verified
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-[#D71920] uppercase font-bold block mb-1">
                      {app.authorityType}
                    </span>
                    <h3 className="text-xl font-bold font-display text-[#062B5C] leading-snug">
                      {app.agencyName}
                    </h3>
                  </div>

                  <p className="text-xs text-[#536271] leading-relaxed">
                    {app.scopeSummary}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Source: SIMCON Profile
                  </span>
                  <Link
                    to="/contact"
                    className="text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] flex items-center gap-1"
                  >
                    Tender Collaboration →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tender Support CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C]">
            Need Pre-Qualification Credentials for an Upcoming Tender?
          </h2>
          <p className="text-xs sm:text-sm text-[#536271] max-w-xl mx-auto">
            Our business development and quality directors provide certified empanelment copies and NABL parameter certificates for EPC bidding.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-white bg-[#062B5C] hover:bg-[#1268B3] rounded transition-colors"
            >
              <span>Contact Business Development</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

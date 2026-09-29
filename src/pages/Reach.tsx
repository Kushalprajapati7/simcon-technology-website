import React from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { IndiaMap } from '@/components/common/IndiaMap';
import { OFFICES } from '@/data/offices';
import { MapPin, Phone, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Reach: React.FC = () => {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#062B5C] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
              NATIONAL PRESENCE & MOBILIZATION
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-[1.12]">
              National Reach. Four Strategic Hubs.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed pt-2">
              With our corporate headquarters in Gandhidham and regional operating facilities in Ahmedabad, Lucknow, and Indore, SIMCON maintains continuous field testing operations across India.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-[#F7F8FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="PAN-INDIA EXPLORATION NETWORK"
            title="Interactive Regional Network"
            description="Select any operating hub to view address details, contact channels, and specialized laboratory testing capabilities."
          />

          <IndiaMap />
        </div>
      </section>

      {/* Complete Office Directory Cards */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="OPERATING BASES"
            title="Headquarters & Regional Facilities"
            description="Complete contact information and facility accreditations for each permanent SIMCON location."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OFFICES.map((off) => (
              <div
                key={off.id}
                className="bg-[#F7F8FA] p-8 rounded-xl border border-slate-200 flex flex-col justify-between space-y-6 hover:border-[#062B5C] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#D71920] uppercase tracking-wider">
                      {off.role}
                    </span>
                    {off.nablCode && (
                      <span className="px-2.5 py-0.5 text-xs font-mono font-bold bg-[#062B5C] text-white rounded">
                        NABL {off.nablCode}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold font-display text-[#062B5C]">
                    {off.city}, {off.state}
                  </h3>

                  <div className="mt-4 space-y-2.5 text-xs text-[#536271]">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#1268B3] shrink-0 mt-0.5" />
                      <span className="leading-snug">{off.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#1268B3] shrink-0" />
                      <a href={`tel:${off.phone}`} className="hover:text-[#062B5C] font-mono font-medium">
                        {off.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#1268B3] shrink-0" />
                      <a href={`mailto:${off.email}`} className="hover:text-[#062B5C] font-mono">
                        {off.email}
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-200/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#062B5C] block mb-2">
                      Key Facility Capabilities:
                    </span>
                    <ul className="space-y-1.5">
                      {off.capabilities.map((cap, i) => (
                        <li key={i} className="text-xs text-[#536271] flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1268B3] shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] flex items-center gap-1"
                  >
                    Direct Office Inquiry →
                  </Link>
                  <span className="text-[10px] font-mono text-slate-400">Hub {off.id.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobilization Guarantee */}
      <section className="py-16 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded bg-[#062B5C] text-white flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold font-display text-[#062B5C]">
            Fast Mobilization to Remote Project Sites
          </h2>
          <p className="text-xs sm:text-sm text-[#536271] leading-relaxed max-w-xl mx-auto">
            Our company-owned geotechnical drilling rigs, digital reaction loading frames, and mobile field laboratories enable rapid deployment to remote rail alignments, mountain tunnels, and coastal terminals.
          </p>
        </div>
      </section>
    </div>
  );
};

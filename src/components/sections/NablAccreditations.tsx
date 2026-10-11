import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ACCREDITATIONS, AccreditationCertificate } from '@/data/certificates';
import { SectionHeading } from '@/components/common/SectionHeading';

interface NablAccreditationsProps {
  onSelectCertificate: (cert: AccreditationCertificate) => void;
}

export const NablAccreditations: React.FC<NablAccreditationsProps> = ({ onSelectCertificate }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#F1F3F7] border-b border-slate-200/80">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ACCREDITATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div className="p-6">
                {/* Certificate Thumbnail Preview */}
                <div
                  onClick={() => onSelectCertificate(cert)}
                  className="relative aspect-[4/3] bg-slate-200 rounded border border-slate-300 overflow-hidden cursor-pointer group-hover:border-[#1268B3] transition-colors mb-5"
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
                  onClick={() => onSelectCertificate(cert)}
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
  );
};

import React, { useState } from 'react';
import { ACCREDITATIONS, AccreditationCertificate } from '@/data/certificates';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CertificateModal } from '@/components/common/CertificateModal';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

export const Accreditations: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<AccreditationCertificate | null>(null);

  const parameterStats = [
    { count: "79", category: "Soil Laboratory Mechanics Parameters" },
    { count: "22", category: "Rock Mechanics & Geotechnical Laboratory Parameters" },
    { count: "29", category: "In-Situ Geotechnical Field Testing Parameters" },
    { count: "335", category: "Construction Material Testing Parameters (Concrete, Aggregate, Bitumen)" },
    { count: "70", category: "Steel, Rebars, Metals & Weld Testing Parameters" },
    { count: "25", category: "Chemical Analysis & Construction Water Parameters" },
    { count: "15", category: "Non-Destructive Testing (NDT) & Structural Diagnostics" },
    { count: "07", category: "Geophysical Subsurface Survey Parameters" }
  ];

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#062B5C] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
              ACCREDITATION & COMPLIANCE
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-[1.12]">
              NABL Accreditations & ISO/IEC 17025 Standards.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed pt-2">
              National Accreditation Board for Testing and Calibration Laboratories (NABL) certificates across our Gandhidham, Ahmedabad, and Lucknow laboratories validating over 581 individual testing parameters.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Real Certificates Showcase */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="VERIFIED CREDENTIALS"
            title="Official Laboratory Accreditations"
            description="Inspect the authentic certificates issued to SIMCON testing facilities by NABL under the ISO/IEC 17025:2017 global benchmark."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACCREDITATIONS.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#F7F8FA] rounded-xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  {/* Certificate Image View */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative h-72 sm:h-80 bg-slate-200 border-b border-slate-300 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={cert.imagePath}
                      alt={`NABL Certificate ${cert.code} - ${cert.location}`}
                      className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="px-4 py-2 bg-white text-[#062B5C] text-xs font-mono font-bold rounded shadow-lg flex items-center gap-2">
                        Inspect Certificate <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#D71920]">
                        {cert.standard}
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#062B5C] text-white rounded">
                        {cert.code}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-[#062B5C]">
                      {cert.location}
                    </h3>

                    <p className="text-xs text-[#536271] leading-relaxed">
                      {cert.scopeDescription}
                    </p>

                    <div className="pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                        Key Tested Fields:
                      </span>
                      <ul className="space-y-1.5">
                        {cert.featuredParameters.map((param, i) => (
                          <li key={i} className="text-xs text-[#536271] flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1268B3] shrink-0" />
                            <span>{param}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-200/80 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C]"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Active & Validated
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 581 Distinct Parameters Breakdown */}
      <section className="py-20 bg-[#F7F8FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="TESTING DISCIPLINE QUANTIFICATION"
            title="581 Distinct NABL Accredited Parameters"
            description="Our accredited testing scopes span all vital civil engineering disciplines to satisfy NHAI, RVNL, MES, and EPC tender mandates."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {parameterStats.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#062B5C] block">
                    {item.count}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#D71920] font-bold block mt-1">
                    Accredited Parameters
                  </span>
                </div>
                <p className="text-xs text-[#536271] mt-3 leading-relaxed">
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};

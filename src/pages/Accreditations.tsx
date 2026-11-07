import React, { useState } from 'react';
import { ACCREDITATIONS, AccreditationCertificate } from '@/data/certificates';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CertificateModal } from '@/components/common/CertificateModal';
import { Eye, ArrowRight, CheckCircle2 } from 'lucide-react';

import { NablParametersRadial } from '@/components/sections/NablParametersRadial';

export const Accreditations: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<AccreditationCertificate | null>(null);

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#062B5C] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="max-w-3xl space-y-4 reveal reveal-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase block">
                ISO/IEC 17025:2017 CERTIFICATION
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white leading-[1.12]">
              NABL Accreditations & ISO/IEC 17025 Standards.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed pt-2">
              National Accreditation Board for Testing and Calibration Laboratories (NABL) certificates across our Gandhidham, Ahmedabad, and Lucknow laboratories validating over 581 individual testing parameters.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Real Certificates Showcase */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] via-[#F1F6FC] to-[#EDF3FA] border-b border-slate-200/90 relative">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="reveal reveal-up">
            <SectionHeading
              technicalLabel="VERIFIED CREDENTIALS"
              title="Official Laboratory Accreditations"
              description="Inspect the authentic certificates issued to SIMCON testing facilities by NABL under the ISO/IEC 17025:2017 global benchmark."
            />
          </div>

          {/* Full-width Cards Container - Eliminates Empty Side Margins */}
          <div className="space-y-8 w-full">
            {ACCREDITATIONS.map((cert, idx) => (
              <div
                key={cert.id}
                style={{ '--delay': `${0.12 * (idx + 1)}s` } as React.CSSProperties}
                className="reveal reveal-up bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-navy-card hover:border-[#1268B3]/60 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left Column (1/4 Width = 3 of 12 columns): Flush Edge-to-Edge Certificate Preview */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="lg:col-span-3 bg-white border-b lg:border-b-0 lg:border-r border-slate-200/90 p-0 m-0 overflow-hidden cursor-pointer group/thumb relative flex items-center justify-center min-h-[260px] sm:min-h-[320px] lg:min-h-0"
                    title={`Click to inspect Certificate ${cert.code} - ${cert.location}`}
                  >
                    <img
                      src={cert.imagePath}
                      alt={`NABL Certificate ${cert.code} - ${cert.location}`}
                      className="w-full h-full object-contain p-0 m-0 group-hover/thumb:scale-102 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#062B5C]/30 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="px-3.5 py-2 bg-white text-[#062B5C] text-xs font-bold font-display rounded-lg shadow-md flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Certificate</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Column (3/4 Width = 9 of 12 columns): Proportioned Description, Parameters & QR Code */}
                  <div className="lg:col-span-9 p-4 sm:p-5 lg:p-5 xl:p-6 flex flex-col justify-between">
                    <div>
                      {/* Top Badges Row */}
                      <div className="flex items-center justify-between gap-2 flex-wrap pb-2.5 border-b border-slate-100">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-mono font-bold text-[#D71920] uppercase tracking-wider">
                            {cert.standard}
                          </span>
                          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-[#062B5C] text-white rounded-md shadow-2xs">
                            {cert.code}
                          </span>
                          <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                            Valid Until: <strong className="text-slate-700">{cert.validUntil}</strong>
                          </span>
                        </div>

                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Active NABL Accreditation
                        </span>
                      </div>

                      {/* Location Title & Scope Headline */}
                      <h3 className="text-lg sm:text-xl font-bold font-display text-[#062B5C] mt-2">
                        {cert.location}
                      </h3>
                      <p className="mt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        {cert.scopeDescription}
                      </p>

                      {/* Featured Tested Disciplines (Stacked Line by Line) */}
                      <div className="mt-2.5 pt-2 border-t border-slate-100">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5 font-bold">
                          Accredited Testing Fields &amp; Parameters:
                        </span>
                        <div className="flex flex-col gap-2">
                          {cert.featuredParameters.map((param, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2.5 text-xs text-slate-700 bg-[#F8FAFC] py-1.5 px-3 rounded-md border border-slate-100"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#1268B3] shrink-0" />
                              <span className="font-medium leading-snug">{param}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Verification & Action Footer: Scannable QR Code + View Certificate Button */}
                    <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F8FAFC] -mx-4 sm:-mx-5 lg:-mx-5 xl:-mx-6 -mb-4 sm:-mb-5 lg:-mb-5 xl:-mb-6 p-3 sm:p-3.5 rounded-b-2xl">
                      {/* Left: Scannable QR Code Panel */}
                      <div className="flex items-center gap-3">
                        <div
                          onClick={() => setSelectedCert(cert)}
                          className="w-[84px] h-[84px] sm:w-[92px] sm:h-[92px] p-1.5 bg-white border-2 border-slate-200 hover:border-[#1268B3] rounded-xl shadow-2xs shrink-0 cursor-pointer transition-all hover:scale-102"
                        >
                          <img
                            src={cert.qrCodePath}
                            alt={`Official QR code for ${cert.code}`}
                            className="w-full h-full object-contain [image-rendering:pixelated]"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#1268B3] uppercase tracking-wider mb-0.5">
                            Scan to Verify Scope
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-[#062B5C] leading-snug">
                            Official NABL Scope &amp; Parameters
                          </p>
                        </div>
                      </div>

                      {/* Right: View Certificate Action Button */}
                      <div className="shrink-0">
                        <button
                          type="button"
                          onClick={() => setSelectedCert(cert)}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2 px-4.5 bg-[#062B5C] hover:bg-[#1268B3] text-white text-xs font-bold font-display tracking-wide uppercase rounded-lg transition-all shadow-xs hover:shadow-md cursor-pointer group/btn"
                        >
                          <Eye className="w-3.5 h-3.5 text-white/90 group-hover/btn:scale-110 transition-transform" />
                          <span>View Certificate</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 581 Distinct NABL Accredited Parameters - Radial Engineering Hub */}
      <NablParametersRadial />

      {/* Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};

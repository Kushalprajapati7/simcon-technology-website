import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, ShieldCheck, FlaskConical, Award } from 'lucide-react';
import { ACCREDITATIONS, AccreditationCertificate } from '@/data/certificates';

interface NablAccreditationsProps {
  onSelectCertificate: (cert: AccreditationCertificate) => void;
}

export const NablAccreditations: React.FC<NablAccreditationsProps> = ({ onSelectCertificate }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F4F7FB] via-[#EEF4FA] to-[#E6F0F8] border-b border-slate-200/90 relative">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header with Left Title & Right 3 KPI Badges */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/80 mb-10 sm:mb-12">
          {/* Left Title & Subtitle */}
          <div className="max-w-3xl reveal reveal-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase block">
                ISO/IEC 17025:2017 VALIDATED
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-extrabold font-display text-[#062B5C] tracking-tight leading-[1.12]">
              NABL Accredited Testing Facilities<span className="text-[#D71920]">.</span>
            </h2>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Accredited under ISO/IEC 17025:2017 for 581 distinct parameters across physical, mechanical, and chemical testing.
            </p>
          </div>

          {/* Right 3 KPI Badges (Matching Image 1) */}
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap shrink-0 reveal reveal-right">
            {/* 1. 581+ Distinct Parameters */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full border border-[#1268B3]/30 bg-white shadow-2xs flex items-center justify-center text-[#1268B3] shrink-0">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="font-extrabold font-display text-lg sm:text-xl text-[#062B5C] leading-none tabular-nums">
                  581+
                </div>
                <div className="text-xs font-medium text-slate-500 mt-1 whitespace-nowrap">
                  Distinct Parameters
                </div>
              </div>
            </div>

            {/* 2. 3 Accredited Facilities */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full border border-[#1268B3]/30 bg-white shadow-2xs flex items-center justify-center text-[#1268B3] shrink-0">
                <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="font-extrabold font-display text-lg sm:text-xl text-[#062B5C] leading-none">
                  3
                </div>
                <div className="text-xs font-medium text-slate-500 mt-1 whitespace-nowrap">
                  Accredited Facilities
                </div>
              </div>
            </div>

            {/* 3. ISO/IEC 17025:2017 Compliant */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full border border-[#1268B3]/30 bg-white shadow-2xs flex items-center justify-center text-[#1268B3] shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="font-extrabold font-display text-base sm:text-lg text-[#062B5C] leading-none">
                  ISO/IEC 17025:2017
                </div>
                <div className="text-xs font-medium text-slate-500 mt-1 whitespace-nowrap">
                  Compliant
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Certificate Cards Grid (Full-width matching other sections, mathematically balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 items-stretch w-full">
          {ACCREDITATIONS.map((cert, idx) => (
            <div
              key={cert.id}
              style={{ '--delay': `${0.1 * (idx + 1)}s` } as React.CSSProperties}
              className="reveal reveal-up bg-white rounded-2xl border border-slate-200/90 shadow-navy-card hover:border-[#1268B3]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* 1. Upper Section: Side-by-Side Certificate Thumbnail & Facility Info */}
              <div className="p-5 sm:p-6 lg:p-6 xl:p-7 pb-4 flex-1">
                <div className="flex gap-4 sm:gap-5 items-start">
                  {/* Left: Certificate Thumbnail (Strict authentic A4 portrait aspect ratio, NEVER stretched) */}
                  <div
                    onClick={() => onSelectCertificate(cert)}
                    className="w-[120px] sm:w-[135px] lg:w-[125px] xl:w-[145px] shrink-0 aspect-[1/1.38] bg-slate-50 rounded-xl border border-slate-300 shadow-2xs overflow-hidden cursor-pointer group/thumb hover:border-[#1268B3] transition-all relative"
                    title={`Inspect Certificate ${cert.code} - ${cert.location}`}
                  >
                    <img
                      src={cert.imagePath}
                      alt={`Certificate ${cert.code} - ${cert.location}`}
                      className="w-full h-full object-contain bg-white group-hover/thumb:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#062B5C]/35 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="p-2 bg-white text-[#062B5C] rounded-full shadow-md">
                        <Eye className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Right: Certificate Metadata, Title & Scope */}
                  <div className="flex-1 min-w-0 flex flex-col">
                    {/* Top Row: Red Standard Tag + Dark Navy Code Badge */}
                    <div className="flex items-center justify-between gap-1.5 mb-2 flex-wrap">
                      <span className="text-[10px] sm:text-[11px] font-bold font-mono text-[#D71920] uppercase tracking-wider">
                        {cert.standard}
                      </span>
                      <span className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono font-bold bg-[#062B5C] text-white rounded-md shrink-0 shadow-2xs">
                        {cert.code}
                      </span>
                    </div>

                    {/* Location Title (Uniform baseline across all cards) */}
                    <h3 className="text-base sm:text-lg font-bold font-display text-[#062B5C] leading-snug min-h-[46px] sm:min-h-[50px] flex items-center">
                      {cert.location}
                    </h3>

                    {/* Scope Description (Uniform baseline across all cards) */}
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed min-h-[52px]">
                      {cert.scopeDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Middle Section: High-Resolution, Instantly-Scannable QR Code Panel */}
              <div className="px-5 sm:px-6 lg:px-6 xl:px-7 py-4 bg-[#F8FAFC] border-y border-slate-100 flex items-center gap-4 sm:gap-5">
                <div
                  onClick={() => onSelectCertificate(cert)}
                  className="w-[118px] h-[118px] sm:w-[130px] sm:h-[130px] xl:w-[136px] xl:h-[136px] p-2 sm:p-2.5 bg-white border-2 border-slate-200 hover:border-[#1268B3] rounded-xl shadow-xs shrink-0 cursor-pointer transition-all hover:scale-102"
                >
                  <img
                    src={cert.qrCodePath}
                    alt={`Official QR code for ${cert.code}`}
                    className="w-full h-full object-contain [image-rendering:pixelated]"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#1268B3] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span>Scan to Verify Scope</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#062B5C] leading-snug">
                    Official NABL Scope &amp; Parameters
                  </p>
                </div>
              </div>

              {/* 3. Card Footer: Compact View Certificate Button & Status */}
              <div className="p-4 sm:p-5 lg:p-5 xl:p-6 pt-3 flex items-center justify-between gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => onSelectCertificate(cert)}
                  className="inline-flex items-center justify-center gap-2 py-2 px-4 sm:px-4.5 bg-[#062B5C] hover:bg-[#1268B3] text-white text-xs font-bold font-display tracking-wide uppercase rounded-lg transition-all shadow-2xs hover:shadow-xs cursor-pointer group/btn"
                >
                  <Eye className="w-3.5 h-3.5 text-white/90 group-hover/btn:scale-110 transition-transform" />
                  <span>View Certificate</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active NABL
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Center-aligned link to full accreditations page */}
        <div className="mt-12 text-center reveal reveal-up">
          <Link
            to="/accreditations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold font-display text-[#062B5C] hover:text-[#1268B3] uppercase tracking-wider shadow-2xs transition-all duration-200 group"
          >
            <span>Explore Complete Testing Scope &amp; All 581 Parameters</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

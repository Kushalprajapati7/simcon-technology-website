import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const FinalCTA: React.FC = () => {
  return (
    <section className="pt-6 sm:pt-8 pb-16 sm:pb-20 bg-white border-b border-slate-200/80">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10 xl:gap-12">

          {/* Left Column: Heading & Description */}
          <div className="reveal reveal-left lg:col-span-6 xl:col-span-5 space-y-3">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase block">
                ENGINEERING CONSULTATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-extrabold font-display text-[#062B5C] leading-[1.18] tracking-tight">
              Let's Talk About Your Project<span className="text-[#D71920]">.</span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-xs sm:text-sm text-[#536271] leading-relaxed max-w-xl">
              Whether planning deep foundation investigations, highway material testing, or non-destructive structural diagnostics, our engineering directors are ready to assist.
            </p>
          </div>

          {/* Right Column: Contact Channels & CTA Button with Subtle Vertical Divider */}
          <div className="reveal reveal-right lg:col-span-6 xl:col-span-7 lg:border-l lg:border-slate-200 lg:pl-8 xl:pl-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 lg:gap-5 xl:gap-8" style={{ '--delay': '0.12s' } as React.CSSProperties}>

            {/* Phone Channel */}
            <a
              href={`tel:${COMPANY_INFO.officialPhone}`}
              className="flex items-center gap-3.5 group transition-transform hover:translate-x-0.5"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EBF4FC] flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors shadow-xs">
                <Phone className="w-5 h-5 text-[#1268B3]" />
              </div>
              <div>
                <span className="block text-[10px] sm:text-[11px] font-bold font-mono uppercase tracking-wider text-[#1268B3]">
                  CALL US
                </span>
                <span className="block text-sm sm:text-base font-extrabold text-[#062B5C] font-mono group-hover:text-[#1268B3] transition-colors whitespace-nowrap">
                  {COMPANY_INFO.officialPhone}
                </span>
              </div>
            </a>

            {/* Email Channel */}
            <a
              href="mailto:info@simcon.in"
              className="flex items-center gap-3.5 group transition-transform hover:translate-x-0.5"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EBF4FC] flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors shadow-xs">
                <Mail className="w-5 h-5 text-[#1268B3]" />
              </div>
              <div>
                <span className="block text-[10px] sm:text-[11px] font-bold font-mono uppercase tracking-wider text-[#1268B3]">
                  WRITE TO US
                </span>
                <span className="block text-sm sm:text-base font-extrabold text-[#062B5C] font-mono group-hover:text-[#1268B3] transition-colors whitespace-nowrap">
                  info@simcon.in
                </span>
              </div>
            </a>

            {/* Red Action CTA Button */}
            <div className="shrink-0 pt-1 sm:pt-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-white bg-[#D71920] hover:bg-[#B51319] rounded-lg shadow-sm hover:shadow-md transition-all group whitespace-nowrap active:scale-[0.98]"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

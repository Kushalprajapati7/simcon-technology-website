import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F1F3F7] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#062B5C] leading-tight">
          Let's Talk About Your Project.
        </h2>

        <p className="text-base text-[#536271] max-w-2xl mx-auto leading-relaxed">
          Whether planning deep foundation investigations, highway material testing, or non-destructive structural diagnostics, our engineering directors are ready to assist.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-wider uppercase text-white bg-[#062B5C] hover:bg-[#1268B3] rounded-md transition-all shadow-sm"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${COMPANY_INFO.officialPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold font-mono uppercase tracking-wider text-[#062B5C] bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-all"
          >
            <span>Call: {COMPANY_INFO.officialPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

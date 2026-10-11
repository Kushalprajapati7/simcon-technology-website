import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CareersCallout: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="bg-[#062B5C] rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-xl space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
              Build Your Engineering Career on Solid Ground.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Join an established team of doctorates, postgraduates, and testing professionals working on India's most challenging transit and geotechnical projects.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-[#062B5C] bg-white hover:bg-slate-100 rounded transition-colors shadow-md"
            >
              <span>Explore Open Positions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

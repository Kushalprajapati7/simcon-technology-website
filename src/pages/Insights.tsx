import React from 'react';
import { Link } from 'react-router-dom';
import { INSIGHTS } from '@/data/insights';
import { Clock, ArrowRight } from 'lucide-react';

export const Insights: React.FC = () => {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#062B5C] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
              // TECHNICAL BRIEFINGS & PAPERS //
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-[1.12]">
              Engineering Insights & Methodologies.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed pt-2">
              Concise technical briefings authored by SIMCON specialists on in-situ foundation testing, seismic shear wave characterization, and laboratory quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Directory */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHTS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-[#1268B3]/50 transition-all flex flex-col justify-between"
              >
                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-blue-50 text-[#1268B3] text-[10px] font-mono font-bold rounded">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold font-display text-[#062B5C] leading-snug">
                    {item.title}
                  </h2>

                  <p className="text-xs text-[#536271] leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5 font-semibold">
                      Key Takeaways:
                    </span>
                    <ul className="space-y-1">
                      {item.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                        <li key={i} className="text-xs text-[#536271] flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1268B3] shrink-0 mt-1.5" />
                          <span className="line-clamp-2">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">{item.date}</span>
                  <Link
                    to={`/insights/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C]"
                  >
                    <span>Read Full Note</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

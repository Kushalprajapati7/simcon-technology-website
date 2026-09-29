import React from 'react';
import { TrendingUp, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const FinancialGrowth: React.FC = () => {
  const fg = COMPANY_INFO.financialGrowth;
  if (!fg.enabled) return null;

  const milestones = [
    { year: "FY 2013-14", turnover: "₹0.86 Cr", heightPercent: 12, label: "Foundational Phase" },
    { year: "FY 2017-18", turnover: "₹3.40 Cr", heightPercent: 28, label: "Laboratory Expansion" },
    { year: "FY 2020-21", turnover: "₹7.80 Cr", heightPercent: 48, label: "Metro & Highway Empanelments" },
    { year: "FY 2023-24", turnover: "₹14.20 Cr", heightPercent: 78, label: "Bullet Train & Multi-hub Scale" },
    { year: "FY 2025-26", turnover: "₹18.01 Cr", heightPercent: 100, label: "SIMCON Technology Pvt. Ltd." }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F8FA] border-y border-slate-200/80 relative overflow-hidden">
      {/* Background linework */}
      <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="technical-tag text-[#D71920] font-mono font-medium tracking-widest">
                ENTERPRISE STRENGTH
              </span>
              <div className="h-[1px] w-8 bg-[#062B5C]/20" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#062B5C] leading-tight">
              Financial Stability Built on Technical Trust.
            </h2>

            <p className="text-base text-[#536271] leading-relaxed">
              {fg.description}
            </p>

            {/* Key Growth Numbers */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-lg border border-slate-200/80 shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Current Turnover ({fg.currentFY})
                </span>
                <span className="text-3xl font-bold font-display text-[#062B5C] tracking-tight">
                  {fg.currentTurnover}
                </span>
              </div>
              <div className="bg-white p-5 rounded-lg border border-slate-200/80 shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Organic Expansion
                </span>
                <span className="text-3xl font-bold font-display text-[#1268B3] tracking-tight flex items-center gap-1">
                  {fg.multiplier} <TrendingUp className="w-5 h-5 text-emerald-500" />
                </span>
              </div>
            </div>

            {/* Evolution Badge */}
            <div className="p-4 rounded-lg bg-blue-50/70 border border-[#1268B3]/20 flex items-start gap-3">
              <Award className="w-5 h-5 text-[#1268B3] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#062B5C] block">
                  {fg.evolutionYear} Milestone: {fg.evolutionText}
                </span>
                <span className="text-xs text-slate-600 mt-0.5 block">
                  Transitioned from specialized consulting practice to corporatized engineering entity.
                </span>
              </div>
            </div>
          </div>

          {/* Right Interactive Chart Visual */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block">
                  Revenue Trajectory
                </span>
                <span className="text-base font-bold font-display text-[#062B5C]">
                  Annual Turnover Growth (Cr ₹)
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#1268B3]">
                <ShieldCheck className="w-4 h-4 text-[#1268B3]" /> Source: Certified Profile
              </div>
            </div>

            {/* Bar Chart Visualization */}
            <div className="h-64 sm:h-72 pt-8 flex items-end justify-between gap-1.5 sm:gap-6 border-b border-slate-200 relative overflow-x-auto no-scrollbar">
              {/* Horizontal Reference Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                <div className="border-b border-dashed border-slate-400 w-full" />
                <div className="border-b border-dashed border-slate-400 w-full" />
                <div className="border-b border-dashed border-slate-400 w-full" />
                <div className="border-b border-dashed border-slate-400 w-full" />
              </div>

              {milestones.map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group z-10 min-w-[48px]">
                  {/* Turnover tag */}
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-[#062B5C] mb-1.5 group-hover:text-[#1268B3] transition-colors whitespace-nowrap">
                    {item.turnover}
                  </span>
                  {/* Bar */}
                  <div
                    style={{ height: `${item.heightPercent}%` }}
                    className={`w-full max-w-[44px] rounded-t transition-all duration-500 ${
                      idx === milestones.length - 1
                        ? 'bg-[#062B5C] group-hover:bg-[#1268B3]'
                        : 'bg-[#1268B3]/80 group-hover:bg-[#062B5C]'
                    }`}
                  />
                  {/* Year */}
                  <span className="text-[9px] sm:text-xs font-mono text-slate-500 mt-2 sm:mt-3 whitespace-nowrap">
                    {item.year.replace('FY ', '')}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <span className="font-mono text-[11px]">
                * Baseline: ₹0.86 Cr (FY14) → Projected ₹18.01 Cr (FY26)
              </span>
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                Zero Long-Term Debt <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

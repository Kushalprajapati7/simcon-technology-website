import React from 'react';
import { IndiaMap } from '@/components/common/IndiaMap';
import { RibbonSteps } from '@/components/common/RibbonSteps';

export const OurReachSection: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header (Single line heading and description on desktop) */}
        <div className="reveal reveal-up mb-8 sm:mb-10 max-w-7xl">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase block mb-1.5">
            OPERATING REACH
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-extrabold tracking-tight font-display text-[#062B5C] leading-tight lg:whitespace-nowrap">
            Strategic Regional Hubs. Pan-India Execution.
          </h2>
          <p className="mt-2 text-xs sm:text-sm lg:text-[13.5px] xl:text-[15px] text-[#536271] leading-relaxed lg:whitespace-nowrap font-normal">
            With permanent testing laboratories and hubs in Gandhidham, Ahmedabad, Lucknow, and Indore, we mobilize specialized crews to any site nationwide.
          </p>
        </div>

        <div className="reveal reveal-scale" style={{ '--delay': '0.12s' } as React.CSSProperties}>
          <IndiaMap />
        </div>
      </div>

      {/* Full-Width Interlocking Chevron Ribbon Steps */}
      <RibbonSteps />
    </section>
  );
};

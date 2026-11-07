import React from 'react';

export const RibbonSteps: React.FC = () => {
  return (
    <div className="w-full bg-[#F8FAFC] py-5 sm:py-6 lg:py-7 border-t border-slate-200 overflow-hidden">
      <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8">
        {/* Desktop Interlocking Chevron Ribbon (>= 1024px) */}
        <div className="hidden lg:flex w-full items-stretch">
          {/* Step 1: 4 Strategic Hubs (Navy) */}
          <div
            className="relative flex-1 bg-[#062B5C] text-white pl-5 xl:pl-6 pr-9 xl:pr-10 py-3.5 xl:py-4 flex flex-col justify-center min-h-[95px] xl:min-h-[102px] transition-transform duration-300 hover:brightness-105 z-10"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 50%, calc(100% - 28px) 100%, 0 100%)',
            }}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-2xl xl:text-3xl font-extrabold font-display text-white leading-none tracking-tight shrink-0">
                4
              </span>
              <div className="w-[1.5px] h-5 bg-white/40 shrink-0" />
              <span className="text-xs xl:text-sm font-bold font-display text-white tracking-tight leading-tight">
                Strategic Hubs
              </span>
            </div>
            <p className="text-[10px] xl:text-[11px] text-slate-200 leading-snug line-clamp-2 mt-1 font-normal">
              Corporate HQ in Gandhidham with regional operating hubs in Ahmedabad, Lucknow, and Indore.
            </p>
          </div>

          {/* Step 2: NABL Accredited Laboratories (White) */}
          <div
            className="relative flex-1 bg-white text-[#062B5C] pl-9 xl:pl-10 pr-9 xl:pr-10 py-3.5 xl:py-4 flex flex-col justify-center min-h-[95px] xl:min-h-[102px] transition-transform duration-300 hover:brightness-105 z-20 shadow-xs border-y border-slate-200/50"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 50%, calc(100% - 28px) 100%, 0 100%, 28px 50%)',
              marginLeft: '-23px',
            }}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-xl xl:text-2xl font-extrabold font-display text-[#D71920] leading-none tracking-tight shrink-0">
                NABL
              </span>
              <div className="w-[1.5px] h-5 bg-[#D71920]/40 shrink-0" />
              <span className="text-xs xl:text-sm font-bold font-display text-[#062B5C] tracking-tight leading-tight">
                Accredited Laboratories
              </span>
            </div>
            <p className="text-[10px] xl:text-[11px] text-[#536271] leading-snug line-clamp-2 mt-1 font-normal">
              ISO/IEC 17025 accredited facilities validating over 581 chemical &amp; geotechnical parameters.
            </p>
          </div>

          {/* Step 3: Pan-India Field Testing Operations (Navy) */}
          <div
            className="relative flex-1 bg-[#062B5C] text-white pl-9 xl:pl-10 pr-9 xl:pr-10 py-3.5 xl:py-4 flex flex-col justify-center min-h-[95px] xl:min-h-[102px] transition-transform duration-300 hover:brightness-105 z-30"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 50%, calc(100% - 28px) 100%, 0 100%, 28px 50%)',
              marginLeft: '-23px',
            }}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-lg xl:text-xl font-extrabold font-display text-white leading-none tracking-tight shrink-0">
                Pan-India
              </span>
              <div className="w-[1.5px] h-5 bg-white/40 shrink-0" />
              <span className="text-xs xl:text-sm font-bold font-display text-white tracking-tight leading-tight">
                Field Testing Operations
              </span>
            </div>
            <p className="text-[10px] xl:text-[11px] text-slate-200 leading-snug line-clamp-2 mt-1 font-normal">
              Continuous nationwide mobilization for rotary drilling, geophysical profiling, and NDT.
            </p>
          </div>

          {/* Step 4: Rapid Mobilization to Sites (SIMCON Red) */}
          <div
            className="relative flex-1 bg-[#D71920] text-white pl-9 xl:pl-10 pr-9 xl:pr-10 py-3.5 xl:py-4 flex flex-col justify-center min-h-[95px] xl:min-h-[102px] transition-transform duration-300 hover:brightness-105 z-40"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 50%, calc(100% - 28px) 100%, 0 100%, 28px 50%)',
              marginLeft: '-23px',
            }}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-xl xl:text-2xl font-extrabold font-display text-white leading-none tracking-tight shrink-0">
                Rapid
              </span>
              <div className="w-[1.5px] h-5 bg-white/40 shrink-0" />
              <span className="text-xs xl:text-sm font-bold font-display text-white tracking-tight leading-tight">
                Mobilization to Sites
              </span>
            </div>
            <p className="text-[10px] xl:text-[11px] text-white/95 leading-snug line-clamp-2 mt-1 font-normal">
              Immediate dispatch of heavy investigation rigs and certified field engineers within 48–72h.
            </p>
          </div>
        </div>

        {/* Mobile & Tablet Responsive (< 1024px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden w-full">
          <div className="bg-[#062B5C] rounded-lg p-3.5 text-white shadow-xs">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl font-extrabold font-display text-white leading-none">4</span>
              <div className="w-[1.5px] h-4 bg-white/40 shrink-0" />
              <span className="text-xs font-bold font-display text-white">Strategic Hubs</span>
            </div>
            <p className="text-[11px] text-slate-200 leading-snug mt-1">
              Corporate HQ in Gandhidham with regional operating hubs in Ahmedabad, Lucknow, and Indore.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs">
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-extrabold font-display text-[#D71920] leading-none">NABL</span>
              <div className="w-[1.5px] h-4 bg-[#D71920]/40 shrink-0" />
              <span className="text-xs font-bold font-display text-[#062B5C]">Accredited Laboratories</span>
            </div>
            <p className="text-[11px] text-[#536271] leading-snug mt-1">
              ISO/IEC 17025 accredited facilities validating over 581 chemical &amp; geotechnical parameters.
            </p>
          </div>
          <div className="bg-[#062B5C] rounded-lg p-3.5 text-white shadow-xs">
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-extrabold font-display text-white leading-none">Pan-India</span>
              <div className="w-[1.5px] h-4 bg-white/40 shrink-0" />
              <span className="text-xs font-bold font-display text-white">Field Testing Operations</span>
            </div>
            <p className="text-[11px] text-slate-200 leading-snug mt-1">
              Continuous nationwide mobilization for rotary drilling, geophysical profiling, and NDT.
            </p>
          </div>
          <div className="bg-[#D71920] rounded-lg p-3.5 text-white shadow-xs">
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-extrabold font-display text-white leading-none">Rapid</span>
              <div className="w-[1.5px] h-4 bg-white/40 shrink-0" />
              <span className="text-xs font-bold font-display text-white">Mobilization to Sites</span>
            </div>
            <p className="text-[11px] text-white/95 leading-snug mt-1">
              Immediate dispatch of heavy investigation rigs and certified field engineers within 48–72h.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


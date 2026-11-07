import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CareersCallout: React.FC = () => {
  return (
    <section className="pt-12 sm:pt-16 pb-6 sm:pb-8 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Modern Split Layout Banner */}
        <div className="reveal reveal-scale relative rounded-2xl lg:rounded-3xl bg-[#041B3B] bg-gradient-to-r from-[#031B34] via-[#062B5C] to-[#0A3D78] overflow-hidden shadow-xl shadow-slate-900/10 border border-slate-800/40 min-h-[220px] sm:min-h-[240px] lg:min-h-[260px] flex flex-col lg:flex-row">

          {/* Subtle Tech Grid Texture */}
          <div className="absolute inset-0 bg-tech-grid-dark opacity-15 pointer-events-none" />

          {/* Left & Middle Content Area */}
          <div className="relative z-10 w-full lg:w-[62%] xl:w-[60%] p-7 sm:p-9 lg:p-11 xl:p-12 flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">

              {/* Text Description */}
              <div className="max-w-xl space-y-2.5">

                {/* Main Heading with Red Dot */}
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-extrabold font-display text-white leading-[1.18] tracking-tight">
                  Build Your Engineering<br className="hidden sm:inline" /> Career on Solid Ground<span className="text-[#D71920]">.</span>
                </h3>

                {/* Subtitle Description */}
                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed max-w-lg">
                  Join an established team of doctorates, postgraduates, and testing professionals working on India's most challenging transit and geotechnical projects.
                </p>
              </div>

              {/* Action Button */}
              <div className="shrink-0 pt-1 lg:pt-0">
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-[#062B5C] bg-white hover:bg-slate-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group whitespace-nowrap active:scale-[0.98]"
                >
                  <span>EXPLORE OPEN POSITIONS</span>
                  <ArrowRight className="w-4 h-4 text-[#062B5C] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>

          {/* Mobile Image (Visible on < lg screens) */}
          <div className="relative h-48 sm:h-56 w-full lg:hidden overflow-hidden">
            <img
              src="/assets/careers/careers-engineers-banner.jpg"
              alt="Simcon Engineers inspecting viaduct transit project"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041B3B] via-[#062B5C]/50 to-transparent" />
          </div>

          {/* Desktop Right Side: Diagonally Sliced Image with Light Facet */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[42%] xl:w-[44%] overflow-hidden pointer-events-none">
            {/* The Slanted Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: `url('/assets/careers/careers-engineers-banner.jpg')`,
                clipPath: 'polygon(16% 0, 100% 0, 100% 100%, 0 100%)',
              }}
            >
              {/* Subtle ambient shadow & gradient blend from the navy background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#062B5C]/30 via-transparent to-transparent" />
            </div>

            {/* Slanted translucent light beam / architectural facet overlay */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(15.5% 0, 20.5% 0, 4.5% 100%, 0 100%)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(18,104,179,0.35) 50%, rgba(6,43,92,0.1) 100%)',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

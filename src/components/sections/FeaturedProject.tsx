import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#062B5C] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Case Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.12]">
              Mumbai–Ahmedabad High Speed Rail
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              SIMCON provided comprehensive subsurface geotechnical investigation, deep rock core drilling, and High Strain Dynamic Pile Load Testing (PDA) for India's pioneer Bullet Train project (MAHSR Sabarmati Hub and C6 Package).
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-mono">
              <div className="bg-white/10 p-3.5 rounded border border-white/10">
                <span className="text-slate-400 block text-[10px]">CLIENT & PARTNER</span>
                <span className="text-white font-bold text-xs mt-0.5 block">NHSRCL / L&T</span>
              </div>
              <div className="bg-white/10 p-3.5 rounded border border-white/10">
                <span className="text-slate-400 block text-[10px]">SECTOR</span>
                <span className="text-white font-bold text-xs mt-0.5 block">High Speed Transit</span>
              </div>
              <div className="bg-white/10 p-3.5 rounded border border-white/10">
                <span className="text-slate-400 block text-[10px]">TECHNICAL SCOPE</span>
                <span className="text-white font-bold text-xs mt-0.5 block">PDA & Soil Testing</span>
              </div>
              <div className="bg-white/10 p-3.5 rounded border border-white/10">
                <span className="text-slate-400 block text-[10px]">STANDARDS</span>
                <span className="text-white font-bold text-xs mt-0.5 block">Japanese Shinkansen Criteria</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/projects/mahsr-bullet-train-sabarmati"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-[#062B5C] bg-white hover:bg-slate-100 rounded transition-colors text-center"
              >
                <span>View Project Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/projects"
                className="text-xs font-mono text-slate-300 hover:text-white underline underline-offset-4 text-center sm:text-left"
              >
                All Projects (6,480+) →
              </Link>
            </div>
          </div>

          {/* Right Project Image */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900">
              <img
                src="/assets/projects/project-metro-bullet-train-1.png"
                alt="Mumbai-Ahmedabad High Speed Rail Bullet Train Project by SIMCON"
                className="w-full h-[400px] sm:h-[460px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

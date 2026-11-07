import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HeroStats } from '@/components/sections/HeroStats';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section relative w-full flex flex-col justify-between bg-[#062B5C] text-white overflow-hidden">
      {/* Right-Side Geotechnical Drilling Rig Infrastructure Photograph */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/hero/simcon_geotech_hero.jpg"
          alt="SIMCON Geotechnical Deep Foundation Drilling Operations"
          className="w-full h-full object-cover object-center lg:object-right"
        />
        {/* Angled and smooth gradient blend from left deep navy into the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#062B5C] via-[#062B5C]/95 sm:via-[#062B5C]/75 to-transparent lg:from-[#062B5C] lg:via-[#062B5C]/70 lg:to-transparent/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062B5C] via-transparent to-transparent opacity-95 lg:opacity-75" />
      </div>

      {/* Topographic Contour Linework Overlay (Authentic Geological Survey Elevation Curves) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20 stroke-sky-400 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <path d="M-100,100 C150,80 300,250 500,180 C700,110 850,300 1200,200" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M-100,200 C180,180 320,380 550,290 C780,200 900,420 1250,320" strokeWidth="1.2" />
        <path d="M-100,320 C120,300 280,500 480,410 C680,320 820,530 1200,450" strokeWidth="1" strokeDasharray="4 2" />
        <path d="M-100,450 C200,420 350,620 580,530 C810,440 920,650 1250,570" strokeWidth="1.2" />
        <path d="M-100,580 C150,550 300,750 520,660 C740,570 880,780 1200,700" strokeWidth="1" strokeDasharray="2 4" />
        <path d="M-100,700 C220,680 380,850 620,780 C860,710 950,890 1250,820" strokeWidth="1" />
      </svg>

      {/* Hero Body Content */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-5 sm:pt-7 lg:pt-8 pb-2 sm:pb-3 lg:pb-6 relative z-10 lg:flex-1 flex flex-col lg:justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-8">
            {/* Strong Editorial Headline */}
            <h1 className="reveal reveal-up text-[30px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.06] sm:leading-[1.04] max-w-3xl uppercase">
              ENGINEERING<br />
              THE GROUND<br />
              BENEATH<br />
              <span className="text-[#1268B3]">EVERY DECISION.</span>
            </h1>

            {/* Supporting Text */}
            <p className="reveal reveal-up mt-2.5 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal" style={{ '--delay': '0.1s' } as React.CSSProperties}>
              Geotechnical investigation, testing and engineering services for complex infrastructure. Backed by NABL-accredited central testing laboratories, IIT & NIT advisory rigor, and over 18 years of national project execution.
            </p>

            {/* Action Button */}
            <div className="reveal reveal-up mt-3.5 sm:mt-4" style={{ '--delay': '0.2s' } as React.CSSProperties}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-transparent hover:bg-white/10 border border-white/40 hover:border-white rounded-full transition-all duration-200 group"
              >
                <span>Explore Our Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Glassmorphic Statistics Bar */}
      <div className="reveal reveal-up w-full relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 mt-5 sm:mt-6 lg:mt-auto pb-5 sm:pb-6 lg:pb-4 shrink-0" style={{ '--delay': '0.28s' } as React.CSSProperties}>
        <HeroStats />
      </div>
    </section>
  );
};

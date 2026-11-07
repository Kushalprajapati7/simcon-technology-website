import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IndiaMap } from '@/components/common/IndiaMap';
import { OFFICES } from '@/data/offices';
import { SEOHead } from '@/components/common/SEOHead';
import { RibbonSteps } from '@/components/common/RibbonSteps';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

export const Reach: React.FC = () => {
  const [selectedHubId, setSelectedHubId] = useState<string>('gandhidham');

  // Option A: Smoothly scroll up to the Interactive Map section and select this hub
  const handleViewFacilityDetails = (hubId: string) => {
    setSelectedHubId(hubId);
    const target = document.getElementById('interactive-network');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-[72px] bg-white min-h-screen">
      <SEOHead
        customSeo={{
          title: "Our Reach & Office Network | SIMCON Technology",
          description: "Explore SIMCON's pan-India presence across Gandhidham HQ, Ahmedabad, Lucknow, and Indore hubs with full-scope geotechnical, geophysical, and NDT capabilities.",
          canonical: "https://www.simcon.co.in/reach"
        }}
      />

      {/* =========================================================================
          1. HERO SECTION (Simple, Clean Navy Banner - Matching Services Styling)
          ========================================================================= */}
      <section className="relative w-full bg-[#062B5C] text-white py-8 sm:py-10 lg:py-12 overflow-hidden border-b border-[#0A3D78]">
        {/* Subtle CAD Grid Texture */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none z-0" />

        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full">
          <div className="max-w-4xl space-y-3.5 sm:space-y-4">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-slate-300 flex-wrap" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-400">&gt;</span>
              <span className="text-slate-200">Our Reach</span>
            </nav>

            {/* Technical Eyebrow (Matching Services Page Sky-Blue Format) */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.18em] sm:tracking-[0.2em] text-sky-300 uppercase">
                PAN-INDIA PRESENCE
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold font-display text-white tracking-tight leading-[1.15]">
              National Reach.{' '}
              <span className="text-white">Four Strategic Hubs.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal max-w-3xl">
              With our corporate headquarters in Gandhidham and regional operating facilities in Ahmedabad, Lucknow, and Indore, SIMCON maintains continuous field testing operations across India.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE REGIONAL NETWORK (Keeps Leaflet Interactive Map)
          ========================================================================= */}
      <section id="interactive-network" className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-24">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-6 sm:space-y-8">
          {/* Section Heading */}
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase block mb-1">
              PAN-INDIA EXPLORATION NETWORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#062B5C] tracking-tight">
              Interactive Regional Network
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Select an operating hub to view address details, contact channels, and specialized laboratory testing capabilities.
            </p>
          </div>

          {/* Interactive Leaflet Map with Synchronized Selected Hub */}
          <IndiaMap
            selectedOfficeId={selectedHubId}
            onOfficeChange={(office) => setSelectedHubId(office.id)}
          />
        </div>
      </section>

      {/* =========================================================================
          3. HEADQUARTERS & REGIONAL FACILITIES (Clean Architectural Facility Cards)
          ========================================================================= */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-6 sm:space-y-8">
          {/* Section Heading */}
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase block mb-1">
              OPERATING BASES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#062B5C] tracking-tight">
              Headquarters &amp; Regional Facilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Complete contact information and facility accreditations for each permanent SIMCON location.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            {OFFICES.map((off) => (
              <div
                key={off.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:border-[#1268B3]/50 border-t-4 border-t-[#062B5C] hover:border-t-[#D71920]"
              >
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Role & NABL Badge */}
                  <div className="flex items-start justify-between gap-1.5 min-h-[30px]">
                    <span className="text-[10px] font-mono font-bold text-[#D71920] uppercase tracking-wider leading-tight flex-1">
                      {off.role}
                    </span>
                    {off.nablCode && (
                      <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-[#062B5C] text-white rounded shrink-0 shadow-2xs whitespace-nowrap">
                        NABL {off.nablCode}
                      </span>
                    )}
                  </div>

                  {/* City Heading */}
                  <h3 className="text-lg sm:text-xl font-bold font-display text-[#062B5C] tracking-tight leading-snug">
                    {off.city}, {off.state}
                  </h3>

                  {/* Contact Items */}
                  <div className="space-y-2.5 text-xs text-[#536271] pt-3 border-t border-slate-100">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#1268B3] shrink-0 mt-0.5" />
                      <span className="line-clamp-2 text-[11px] leading-snug">{off.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#1268B3] shrink-0" />
                      <a href={`tel:${off.phone}`} className="hover:text-[#062B5C] font-mono text-[11px] font-medium transition-colors truncate">
                        {off.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#1268B3] shrink-0" />
                      <a href={`mailto:${off.email}`} className="hover:text-[#062B5C] font-mono text-[11px] transition-colors truncate">
                        {off.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Link (Option A: Scroll to map and select this hub) */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => handleViewFacilityDetails(off.id)}
                    className="w-full pt-3 border-t border-slate-100 inline-flex items-center justify-between text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] transition-colors cursor-pointer group/link"
                  >
                    <span>View Facility Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. RIBBON STEPS (Full-Width Interlocking Chevron Ribbon Steps)
          ========================================================================= */}
      <RibbonSteps />
    </div>
  );
};

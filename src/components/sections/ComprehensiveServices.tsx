import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Layers,
  CheckCircle2,
  Activity,
  Search,
  FlaskConical,
  Compass,
  Gauge,
  Building2,
  MonitorCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { SERVICES } from '@/data/services';

const SERVICE_TAB_LABELS: Record<string, string> = {
  "geotechnical-investigation": "Geotechnical Investigation",
  "geophysical-investigation": "Geophysical Survey",
  "forensic-geotechnical": "Forensic Investigation",
  "construction-material-testing": "Material Testing",
  "topographical-survey": "Surveying & Mapping",
  "field-insitu-testing": "Field Testing",
  "geotechnical-instrumentation": "Monitoring & Safety",
  "ndt-structural-health": "Structural Assessment",
};

export const ComprehensiveServices: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [isServicesPaused, setIsServicesPaused] = useState(false);

  // Automatic slideshow for Comprehensive Engineering Services (cycles every 4.5s, pauses on hover)
  useEffect(() => {
    if (isServicesPaused) return;
    const interval = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % SERVICES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isServicesPaused]);

  const featuredService = SERVICES[activeServiceIndex];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Search': return <Search className="w-5 h-5" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Gauge': return <Gauge className="w-5 h-5" />;
      case 'MonitorCheck': return <MonitorCheck className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-display text-[#062B5C] tracking-tight leading-[1.12]">
              End-to-End Engineering Solutions<span className="text-[#1E60FF]">.</span>
            </h2>
            <p className="mt-3 text-base text-[#536271] leading-relaxed max-w-2xl">
              Explore our specialized testing, surveying, and diagnostic services tailored for heavy infrastructure.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1E60FF] hover:text-[#062B5C] uppercase tracking-wider shrink-0 transition-colors"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Discipline Controller (Zero Horizontal Scroll for small devices) */}
        <div
          className="sm:hidden mb-3 space-y-2"
          onMouseEnter={() => setIsServicesPaused(true)}
          onMouseLeave={() => setIsServicesPaused(false)}
        >
          {/* Active Discipline Card with Previous/Next Controls */}
          <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-200/90 shadow-xs flex items-center justify-between gap-2.5">
            <button
              type="button"
              onClick={() => setActiveServiceIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length)}
              className="w-9 h-9 rounded-lg bg-white hover:bg-[#1E60FF] hover:text-white text-slate-700 border border-slate-200/70 flex items-center justify-center transition-colors shrink-0 cursor-pointer active:scale-95"
              aria-label="Previous discipline"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 min-w-0 flex-1 justify-center">
              <span className="p-1.5 rounded-lg bg-blue-50 text-[#1E60FF] shrink-0">
                {getServiceIcon(featuredService.iconName)}
              </span>
              <div className="min-w-0 text-left">
                <span className="text-[10px] font-mono font-bold text-[#1E60FF] block leading-none mb-0.5">
                  DISCIPLINE {featuredService.number} / 08
                </span>
                <span className="text-xs font-bold text-[#062B5C] truncate block leading-tight">
                  {SERVICE_TAB_LABELS[featuredService.id] || featuredService.title}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveServiceIndex((prev) => (prev + 1) % SERVICES.length)}
              className="w-9 h-9 rounded-lg bg-white hover:bg-[#1E60FF] hover:text-white text-slate-700 border border-slate-200/70 flex items-center justify-center transition-colors shrink-0 cursor-pointer active:scale-95"
              aria-label="Next discipline"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* 8 Quick-Tap Number Indicator Pills */}
          <div className="grid grid-cols-8 gap-1.5">
            {SERVICES.map((srv, idx) => {
              const isActive = activeServiceIndex === idx;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setActiveServiceIndex(idx)}
                  className={`py-1.5 text-center text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${isActive
                      ? 'bg-[#1E60FF] text-white shadow-xs font-black scale-102'
                      : 'bg-[#F8FAFC] text-slate-600 border border-slate-200/80 hover:bg-slate-100'
                    }`}
                  aria-label={`Select discipline ${srv.number}`}
                >
                  {srv.number}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tablet & Desktop Tabs Grid */}
        <div
          className="hidden sm:grid sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-2.5 pb-2"
          onMouseEnter={() => setIsServicesPaused(true)}
          onMouseLeave={() => setIsServicesPaused(false)}
        >
          {SERVICES.map((srv, idx) => {
            const isActive = activeServiceIndex === idx;
            const tabLabel = SERVICE_TAB_LABELS[srv.id] || srv.title;

            return (
              <button
                key={srv.id}
                type="button"
                onClick={() => setActiveServiceIndex(idx)}
                className={`flex flex-col items-center justify-between text-center p-3 sm:p-3.5 rounded-xl transition-all duration-300 relative group cursor-pointer ${isActive
                    ? 'bg-white shadow-md border border-slate-200 ring-1 ring-[#1E60FF]/20'
                    : 'bg-[#F8FAFC] hover:bg-slate-100 border border-slate-200/70 hover:border-slate-300'
                  }`}
              >
                {/* Top: Service Number in Blue when active */}
                <span
                  className={`font-mono text-xs font-bold transition-colors ${isActive ? 'text-[#1E60FF]' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                >
                  {srv.number}
                </span>

                {/* Middle: Discipline Icon in Blue when active */}
                <div
                  className={`my-2 transition-transform duration-300 ${isActive
                      ? 'text-[#1E60FF] scale-110'
                      : 'text-slate-400 group-hover:text-slate-600 group-hover:scale-105'
                    }`}
                >
                  {getServiceIcon(srv.iconName)}
                </div>

                {/* Bottom: Tab Title */}
                <span
                  className={`text-[11px] sm:text-xs font-semibold leading-tight line-clamp-2 transition-colors ${isActive
                      ? 'text-[#062B5C] font-bold'
                      : 'text-slate-600 group-hover:text-[#062B5C]'
                    }`}
                >
                  {tabLabel}
                </span>

                {/* Active Indicator Bar in Blue */}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-1 bg-[#1E60FF] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Service Feature Card */}
        <div
          className="mt-4 sm:mt-5 bg-white rounded-2xl p-4 sm:p-5 lg:p-6 border border-slate-200/90 shadow-[0_10px_35px_rgba(6,43,92,0.06)] transition-all duration-300"
          onMouseEnter={() => setIsServicesPaused(true)}
          onMouseLeave={() => setIsServicesPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* Left Side: Featured Image with Discipline Badge */}
            <div className="lg:col-span-6">
              <div className="relative h-56 sm:h-64 lg:h-[340px] xl:h-[380px] 2xl:h-[420px] w-full rounded-xl overflow-hidden shadow-sm bg-slate-900 group">
                <img
                  key={featuredService.id}
                  src={featuredService.heroImage}
                  alt={featuredService.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Discipline Overlay Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 bg-[#062B5C]/90 backdrop-blur-xs text-white px-3 py-1 rounded-md text-[11px] font-mono font-bold shadow-md flex items-center gap-1.5">
                  <span className="text-[#1E60FF]">DISCIPLINE {featuredService.number}</span>
                  <span className="text-white/40">·</span>
                  <span className="text-slate-200 uppercase tracking-wider text-[10px]">
                    {featuredService.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Service Details & Blue Action Button */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold font-display text-[#062B5C] leading-snug">
                  {featuredService.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#536271] mt-2 leading-relaxed">
                  {featuredService.shortDescription}
                </p>
              </div>

              {/* Key Capabilities Bullet Points */}
              <div className="space-y-2 pt-0.5">
                <ul className="space-y-2">
                  {featuredService.keyCapabilities.slice(0, 4).map((cap, i) => (
                    <li key={i} className="text-xs sm:text-[13px] font-medium text-[#17212B] flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#1E60FF] shrink-0 mt-0.5" />
                      <span className="leading-snug">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons: Blue Primary Button */}
              <div className="pt-1.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  to={`/services/${featuredService.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#1E60FF] hover:bg-[#1268B3] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-center"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/contact"
                  className="text-xs font-mono font-semibold text-[#536271] hover:text-[#062B5C] transition-colors text-center sm:text-left py-1 sm:py-0"
                >
                  Request Quotation →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/data/services';
import { 
  Layers, 
  Activity, 
  Search, 
  FlaskConical, 
  Compass, 
  Gauge, 
  MonitorCheck, 
  Building2, 
  ArrowRight, 
  CheckCircle2,
  FileCheck
} from 'lucide-react';

export const Services: React.FC = () => {
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
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#062B5C] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
              // ENGINEERING SERVICES & DISCIPLINES //
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-[1.12]">
              Specialized Testing & Subsurface Investigation.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed pt-2">
              From rotary rock drilling and NABL-accredited soil mechanics to non-destructive bridge testing and numerical modeling, SIMCON provides certified parameters for heavy infrastructure across India.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Showcase */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                id={srv.slug}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left Photographic Media */}
                  <div className="lg:col-span-5 relative bg-slate-900 min-h-[260px] lg:min-h-full">
                    <img
                      src={srv.heroImage}
                      alt={srv.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#062B5C]/90 backdrop-blur-xs text-white text-xs font-mono font-bold rounded">
                        DISCIPLINE {srv.number}
                      </span>
                    </div>
                  </div>

                  {/* Right Service Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="p-2 rounded bg-blue-50 text-[#1268B3]">
                          {getServiceIcon(srv.iconName)}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#D71920] font-bold">
                          {srv.category}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C]">
                        {srv.title}
                      </h2>

                      <p className="text-sm text-[#536271] mt-3 leading-relaxed">
                        {srv.fullDescription}
                      </p>

                      {/* Capabilities Highlights */}
                      <div className="mt-6 pt-6 border-t border-slate-100">
                        <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#062B5C] block mb-3">
                          Key Capabilities & Testing Methods:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {srv.keyCapabilities.slice(0, 4).map((cap, i) => (
                            <li key={i} className="text-xs text-[#536271] flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#1268B3] shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {srv.standardsAndCodes && (
                        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                          <FileCheck className="w-3.5 h-3.5 text-slate-400" />
                          <span>Codes: {srv.standardsAndCodes.slice(0, 3).join(', ')}</span>
                        </div>
                      )}

                      <Link
                        to={`/services/${srv.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#062B5C] hover:bg-[#1268B3] px-5 py-2.5 rounded transition-colors self-start sm:self-auto"
                      >
                        <span>Full Testing Breakdown</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

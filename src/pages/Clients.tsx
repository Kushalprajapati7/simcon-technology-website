import React, { useState } from 'react';
import { CLIENTS, CLIENT_CATEGORIES } from '@/data/clients';
import { Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Clients: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredClients = activeCategory === 'All'
    ? CLIENTS
    : CLIENTS.filter(c => c.category === activeCategory);

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#062B5C] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
              // CLIENT PARTNERSHIPS //
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-[1.12]">
              Partnerships Built on Engineering Trust.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed pt-2">
              For over 18 years, India's premier public infrastructure authorities, transit corporations, energy conglomerates, and Tier-1 EPC contractors have relied on SIMCON for definitive ground investigation and materials testing.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-[68px] z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline-block">
              Sector:
            </span>
            {CLIENT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono rounded whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#062B5C] text-white font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Logo Grid */}
      <section className="py-20 bg-[#F7F8FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-mono text-slate-500 uppercase">
              Showing {filteredClients.length} Organizations in {activeCategory}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#1268B3]/50 transition-all flex flex-col justify-between h-44 group"
              >
                <div className="flex-1 flex items-center justify-center p-2">
                  {client.logoPath ? (
                    <img
                      src={client.logoPath}
                      alt={client.name}
                      className="max-h-16 max-w-full object-contain group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  ) : (
                    <Building className="w-10 h-10 text-slate-300" />
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 text-center">
                  <span className="font-display font-bold text-xs text-[#062B5C] line-clamp-1 block">
                    {client.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block mt-0.5 truncate">
                    {client.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl font-bold font-display text-[#062B5C]">
            Ready to Partner with SIMCON Technology?
          </h2>
          <p className="text-xs sm:text-sm text-[#536271]">
            Discuss testing parameters, pre-qualification documents, or site exploration schedules with our team.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-white bg-[#062B5C] hover:bg-[#1268B3] rounded transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

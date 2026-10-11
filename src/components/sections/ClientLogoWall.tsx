import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CLIENTS } from '@/data/clients';

export const ClientLogoWall: React.FC = () => {
  const selectedClients = CLIENTS.filter(c => c.featured).slice(0, 16);
  const row1Clients = selectedClients.slice(0, 8);
  const row2Clients = selectedClients.slice(8, 16);

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80 relative">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold font-display text-[#062B5C] tracking-tight leading-[1.15]">
            Trusted by Premier <span className="text-[#1E60FF]">Infrastructure Organizations</span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-[#536271] max-w-2xl mx-auto leading-relaxed">
            We are proud to work with leading organizations across government, public and private infrastructure sectors.
          </p>
        </div>

        {/* 16 Logos Grid (2 rows of 8 logos matching the reference layout) */}
        <div className="space-y-4 sm:space-y-6 w-full mx-auto">
          {/* Row 1 (8 Logos) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 items-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 py-2 sm:py-3">
            {row1Clients.map((client) => (
              <div
                key={client.id}
                className="px-2 sm:px-3 py-3 sm:py-4 flex items-center justify-center h-24 sm:h-28 lg:h-30 group transition-all"
                title={client.name}
              >
                {client.logoPath ? (
                  <img
                    src={client.logoPath}
                    alt={client.name}
                    className="max-h-16 sm:max-h-18 lg:max-h-[72px] max-w-[92%] object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xs font-mono font-bold text-[#062B5C] text-center line-clamp-2">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Row 2 (8 Logos) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 items-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 py-2 sm:py-3">
            {row2Clients.map((client) => (
              <div
                key={client.id}
                className="px-2 sm:px-3 py-3 sm:py-4 flex items-center justify-center h-24 sm:h-28 lg:h-30 group transition-all"
                title={client.name}
              >
                {client.logoPath ? (
                  <img
                    src={client.logoPath}
                    alt={client.name}
                    className="max-h-16 sm:max-h-18 lg:max-h-[72px] max-w-[92%] object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xs font-mono font-bold text-[#062B5C] text-center line-clamp-2">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Centered Directory Link */}
        <div className="mt-12 sm:mt-14 flex items-center justify-center">
          <Link
            to="/clients"
            className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E60FF] hover:text-[#062B5C] transition-colors flex items-center gap-1.5"
          >
            <span>VIEW FULL CLIENT & PARTNER DIRECTORY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

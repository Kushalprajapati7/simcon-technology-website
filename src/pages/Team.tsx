import React, { useState } from 'react';
import { ORG_STRUCTURE, SPECIALIST_TEAM } from '@/data/team';
import { TeamCard } from '@/components/cards/TeamCard';
import { ShieldCheck } from 'lucide-react';

export const Team: React.FC = () => {
  const [activeDepartment, setActiveDepartment] = useState<'all' | 'geotech' | 'material' | 'field' | 'geophysical'>('all');

  const filteredMembers = activeDepartment === 'all'
    ? SPECIALIST_TEAM
    : SPECIALIST_TEAM.filter(m => m.section === activeDepartment);

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#062B5C] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
              // HUMAN CAPITAL //
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-[1.12]">
              125+ Dedicated Engineering Professionals.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed pt-2">
              Driven by young, tech-savvy engineers, laboratory chemists, and field supervisors guided by IIT and NIT doctorate professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Organization Structure Stats Breakdown */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#D71920] font-bold block mb-1">
              // RIGOROUS TALENT BENCHMARK
            </span>
            <h2 className="text-2xl font-bold font-display text-[#062B5C]">
              Technical Team Composition
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {ORG_STRUCTURE.breakdown.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F7F8FA] p-4 rounded-lg border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-black font-display text-[#062B5C] block">
                    0{item.count}
                  </span>
                  <span className="text-xs font-bold text-[#17212B] block mt-1">
                    {item.title}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 leading-tight">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Team Directory */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D71920] font-bold block mb-1">
                // ACTIVE PERSONNEL
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C]">
                Specialists Across Sections & Specialities
              </h2>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Specialists' },
                { id: 'geotech', label: 'Geotech Section' },
                { id: 'material', label: 'Material Testing' },
                { id: 'field', label: 'Field Testing' },
                { id: 'geophysical', label: 'Geophysical' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDepartment(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                    activeDepartment === tab.id
                      ? 'bg-[#062B5C] text-white font-bold'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map(member => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                All field and laboratory supervisors hold verified NABL technical training certificates and adhere to ISO/IEC 17025 standard operating procedures.
              </span>
            </div>
            <a
              href="/careers"
              className="text-[#1268B3] hover:text-[#062B5C] font-mono font-bold whitespace-nowrap"
            >
              Join Our Team →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

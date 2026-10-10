import React from 'react';
import { Building2, FileText, Users } from 'lucide-react';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';

interface StatItem {
  id: string;
  numericValue: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'exp',
    numericValue: 18,
    suffix: '+',
    label: 'Years of Experience',
    icon: <Building2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white stroke-[1.6]" />,
  },
  {
    id: 'projects',
    numericValue: 6480,
    suffix: '+',
    label: 'Projects Completed',
    icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white stroke-[1.6]" />,
  },
  {
    id: 'team',
    numericValue: 125,
    suffix: '+',
    label: 'Team Members',
    icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white stroke-[1.6]" />,
  },
  {
    id: 'meters',
    numericValue: 200000,
    suffix: '+',
    label: 'Running Meters',
    icon: (
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 20L9 4" />
        <path d="M20 20L15 4" />
        <path d="M12 6v2" />
        <path d="M12 11v2" />
        <path d="M12 16v2" />
      </svg>
    ),
  },
];

export const HeroStats: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* High-Transparency Luminous Glassmorphic Container */}
      <div className="relative rounded-2xl bg-white/[0.05] hover:bg-white/[0.07] backdrop-blur-xl border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.25)] py-2.5 px-3.5 sm:py-3.5 sm:px-5 lg:py-4 lg:px-8 transition-all duration-300">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={stat.id}
              className={`group flex items-center gap-2.5 sm:gap-3 lg:gap-3.5 py-2 md:py-0 ${
                // Mobile (2-columns) dividers
                idx % 2 === 0
                  ? 'border-r border-white/[0.08] md:border-r-0 pr-3 sm:pr-4'
                  : 'pl-3 sm:pl-4'
              } ${
                idx < 2
                  ? 'border-b border-white/[0.08] md:border-b-0 pb-2.5 md:pb-0'
                  : 'pt-2.5 md:pt-0'
              } ${
                // Tablet / Desktop (4-columns) dividers
                idx < STATS_DATA.length - 1 ? 'md:border-r md:border-white/[0.08]' : ''
              } ${
                idx === 0
                  ? 'md:pr-4 lg:pr-6 xl:pr-8 md:pl-0'
                  : idx === STATS_DATA.length - 1
                  ? 'md:pl-4 lg:pl-6 xl:pl-8 md:pr-0'
                  : 'md:px-4 lg:px-6 xl:px-8'
              }`}
            >
              {/* Left Side: Clean Outline Icon */}
              <div className="shrink-0 text-white/90 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>

              {/* Right Side: Number on Top, Label Below */}
              <div className="flex flex-col min-w-0">
                <div className="leading-tight">
                  <AnimatedCounter
                    end={stat.numericValue}
                    suffix={stat.suffix}
                    duration={2000}
                    className="text-lg sm:text-2xl lg:text-[28px] font-extrabold font-display text-white tracking-tight block leading-none"
                  />
                </div>
                <span className="text-[10px] sm:text-xs lg:text-[13px] text-slate-200/90 font-medium block tracking-normal mt-0.5 leading-tight">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

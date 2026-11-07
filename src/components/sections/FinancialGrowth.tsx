
import React, { useEffect, useRef, useState } from 'react';
import {
  TrendingUp,
  ArrowUpRight,
  Award,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

const milestones = [
  { year: '2013–14', turnover: 0.86 },
  { year: '2017–18', turnover: 3.40 },
  { year: '2020–21', turnover: 7.80 },
  { year: '2023–24', turnover: 14.20 },
  { year: '2025–26', turnover: 18.01 },
];

const MAX_TURNOVER = 20;

const formatCr = (value: number) => `₹${value.toFixed(2)} Cr`;

const AnimatedRevenueChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const element = chartRef.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) {
      setProgress(1);
      return;
    }

    let frameId = 0;
    const start = performance.now();
    const duration = 1400;

    const animate = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);

      setProgress(eased);

      if (elapsed < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [visible]);

  // Keep the SVG line and bars on the same revenue scale.
  // The plot uses 0–20 Cr, with 10% horizontal margins.

  return (
    <div
      ref={chartRef}
      className="min-w-0 rounded-2xl border border-slate-200/90
        bg-white p-5 sm:p-7 lg:p-8 shadow-navy-card"
    >
      {/* Chart header */}
      <div className="flex flex-wrap items-center justify-between
        gap-4 border-b border-slate-100 pb-5">
        <div>
          <span className="block text-[11px] uppercase
            tracking-[0.12em] text-slate-400">
            Revenue Trajectory
          </span>

          <h3 className="mt-1 text-base font-semibold
            tracking-tight text-[#062B5C] sm:text-lg">
            Annual Turnover Growth (Cr ₹)
          </h3>
        </div>
      </div>

      {/* Chart plot */}
      <div className="mt-6">
        <div className="flex gap-3">
          {/* Y-axis labels */}
          <div className="flex w-5 shrink-0 flex-col
            justify-between pb-[42px] pt-[24px]">
            {[20, 15, 10, 5, 0].map((value) => (
              <span
                key={value}
                className="text-[10px] leading-none
                  text-slate-400 sm:text-xs"
              >
                {value}
              </span>
            ))}
          </div>

          {/* Plot + year labels */}
          <div className="min-w-0 flex-1">
            <div className="relative h-[260px] sm:h-[300px]">
              {/* Horizontal grid lines */}
              <div className="pointer-events-none absolute
                inset-x-0 bottom-[42px] top-[24px]
                flex flex-col justify-between">
                {[20, 15, 10, 5, 0].map((value) => (
                  <div
                    key={value}
                    className="w-full border-t border-dashed
                      border-slate-200"
                  />
                ))}
              </div>

              {/* Actual plotting area.
                  Top space prevents the tallest label clipping. */}
              <div className="absolute inset-x-0
                bottom-[42px] top-[24px]">

                {/* Bars and labels */}
                <div className="absolute inset-0 z-[2]
                  flex items-stretch justify-around gap-1">
                  {milestones.map((item, index) => {
                    const isLatest =
                      index === milestones.length - 1;

                    const barHeight =
                      (item.turnover / MAX_TURNOVER) * 100;

                    const currentHeight = barHeight * progress;

                    return (
                      <button
                        key={item.year}
                        type="button"
                        aria-label={`${item.year}: ${formatCr(
                          item.turnover
                        )}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                        onFocus={() => setActiveIndex(index)}
                        onBlur={() => setActiveIndex(null)}
                        className="group relative min-w-0 flex-1
                          cursor-default rounded-sm
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-[#1268B3]"
                      >
                        {/* Value stays above its bar */}
                        <span
                          className={`absolute left-1/2 z-20
                            -translate-x-1/2 whitespace-nowrap
                            rounded-sm bg-white/95 px-1
                            text-[9px] font-bold tabular-nums
                            leading-4 text-[#062B5C]
                            transition-colors sm:text-xs
                            ${activeIndex === index
                              ? 'text-[#1268B3]'
                              : ''
                            }`}
                          style={{
                            bottom: `calc(${currentHeight}% + 4px)`,
                          }}
                        >
                          {formatCr(
                            item.turnover * progress
                          )}
                        </span>

                        {/* Bar */}
                        <div
                          className={`absolute bottom-0 left-1/2
                            w-[48%] max-w-[48px]
                            -translate-x-1/2 overflow-hidden
                            rounded-t-[4px]
                            ${isLatest
                              ? 'bg-[#062B5C]'
                              : 'bg-[#1268B3]/85'
                            }`}
                          style={{
                            height: `${currentHeight}%`,
                          }}
                        >

                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* X-axis labels — separate from the plot */}
              <div className="absolute inset-x-0 bottom-0
                flex h-[30px] items-end justify-around gap-1
                border-t border-slate-100">
                {milestones.map((item) => (
                  <span
                    key={item.year}
                    className="min-w-0 flex-1 whitespace-nowrap
                      text-center text-[9px] text-slate-500
                      sm:text-xs"
                  >
                    {item.year}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex flex-wrap items-center
        justify-between gap-3 border-t border-slate-100 pt-4">
        <p className="text-[10px] leading-relaxed
          text-slate-500 sm:text-xs">
          * Baseline: ₹0.86 Cr (FY14) → Projected ₹18.01 Cr (FY26)
        </p>

        <span className="inline-flex items-center gap-1
          text-xs font-medium text-emerald-700">
          Zero Long-Term Debt
          <ArrowUpRight size={15} />
        </span>
      </div>
    </div>
  );
};

export const FinancialGrowth: React.FC = () => {
  const fg = COMPANY_INFO.financialGrowth;

  if (!fg.enabled) return null;

  return (
    <section
      className="relative isolate overflow-hidden border-y
        border-slate-200/80 bg-[#F1F3F7]
        py-16 sm:py-20 lg:py-24"
    >
      {/* Existing background texture */}
      <div
        className="bg-tech-grid pointer-events-none
          absolute inset-0 opacity-30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1920px]
        px-5 sm:px-8 lg:px-12 2xl:px-16">
        <div className="grid grid-cols-1 items-center
          gap-10 lg:grid-cols-12 lg:gap-12">

          {/* Left narrative */}
          <div className="reveal reveal-left space-y-7 lg:col-span-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase block">
                  FINANCIAL INTEGRITY
                </span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight
                tracking-tight text-[#062B5C]
                sm:text-4xl xl:text-[46px]">
                Financial Stability Built on Technical Trust
                <span className="text-[#D71920]">.</span>
              </h2>
            </div>

            <p className="text-base leading-8 text-[#536271]
              sm:text-lg">
              {fg.description}
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-1 gap-5 pt-2
              sm:grid-cols-2 sm:gap-6">
              <div className="border-l-2 border-slate-300
                py-1 pl-5 transition-colors
                hover:border-[#D71920]">
                <span className="mb-2 block text-[11px]
                  uppercase tracking-wider text-slate-500">
                  Current Turnover ({fg.currentFY})
                </span>

                <p className="text-3xl font-extrabold
                  tracking-tight text-[#062B5C] sm:text-4xl tabular-nums">
                  {fg.currentTurnover}
                </p>
              </div>

              <div className="border-l-2 border-[#1268B3]
                py-1 pl-5 transition-colors
                hover:border-[#D71920]">
                <span className="mb-2 block text-[11px]
                  uppercase tracking-wider text-slate-500">
                  Organic Expansion
                </span>

                <p className="flex items-center gap-2
                  text-3xl font-extrabold tracking-tight
                  text-[#1268B3] sm:text-4xl tabular-nums">
                  {fg.multiplier}
                  <TrendingUp
                    size={22}
                    className="text-emerald-500"
                    aria-hidden="true"
                  />
                </p>
              </div>
            </div>

            {/* Single milestone, displayed only on the left */}
            <div className="flex items-start gap-3
              border-t border-slate-200 pt-5">
              <div className="flex h-10 w-10 shrink-0
                items-center justify-center rounded-full
                border border-blue-200 bg-white
                text-[#1268B3]">
                <Award size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold
                  leading-relaxed text-[#062B5C]">
                  <span className="text-[#1268B3]">
                    {fg.evolutionYear} Milestone:
                  </span>{' '}
                  {fg.evolutionText}
                </p>

                <p className="mt-1 text-xs leading-relaxed
                  text-slate-500 sm:text-sm">
                  Transitioned from specialized consulting
                  practice to corporatized engineering entity.
                </p>
              </div>
            </div>
          </div>

          {/* Right chart */}
          <div className="reveal reveal-right min-w-0 lg:col-span-7" style={{ '--delay': '0.15s' } as React.CSSProperties}>
            <AnimatedRevenueChart />
          </div>
        </div>
      </div>
    </section>
  );
};

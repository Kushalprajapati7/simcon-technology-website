import React from 'react';

const WORKFLOW_STEPS = [
  {
    number: "01",
    badgeClass: "bg-[#FFF0F1] text-[#D71920]",
    numberColor: "text-[#D71920]",
    title: "INVESTIGATE",
    subtitle: "Field & Laboratory Exploration",
    description: "Subsurface boreholes, rotary rock drilling, non-invasive geophysics, in-situ and laboratory dynamic parameters, and precision laboratory testing.",
    image: "/assets/workflow/investigate.jpg",
    bulletColor: "bg-[#D71920]",
    items: [
      "Field Investigations",
      "NABL Laboratory Testing",
      "Geophysical Surveys",
      "In-situ Dynamic Testing"
    ]
  },
  {
    number: "02",
    badgeClass: "bg-[#EFF6FF] text-[#1E60FF]",
    numberColor: "text-[#1E60FF]",
    title: "ANALYSE",
    subtitle: "Scientific & Numerical Modelling",
    description: "Finite-element soil-structure interaction, liquefaction potential assessment, seismic site characterization, and settlement modelling.",
    image: "/assets/workflow/analyse.jpg",
    bulletColor: "bg-[#1E60FF]",
    items: [
      "PLAXIS 2D Numerical Modelling",
      "LPILE Lateral Pile Analysis",
      "Liquefaction Potential Assessment",
      "Geotechnical Data Interpretation"
    ]
  },
  {
    number: "03",
    badgeClass: "bg-slate-100 text-[#062B5C]",
    numberColor: "text-[#062B5C]",
    title: "DESIGN",
    subtitle: "Engineering Support & Solutions",
    description: "Optimized foundation recommendations, ground improvement schemes, retaining structures, and actionable design support for contractors and EPCs.",
    image: "/assets/workflow/design.jpg",
    bulletColor: "bg-[#062B5C]",
    items: [
      "Foundation Recommendations",
      "Ground Improvement Design",
      "Retaining & Deep Excavation Support",
      "Technical Design Support"
    ]
  }
];

export const EngineeringFramework: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/80">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <div className="reveal reveal-up max-w-6xl xl:max-w-7xl mb-10 sm:mb-12 lg:mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase block">
              METHODOLOGICAL RIGOR
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#062B5C] tracking-tight leading-[1.12]">
            Investigate. Analyse. Design<span className="text-[#D71920]">.</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-[14px] xl:text-base text-[#536271] leading-relaxed lg:whitespace-nowrap font-normal">
            Our recurring engineering framework unites subsurface investigation, scientific numerical interpretation, and actionable engineering recommendations.
          </p>
        </div>

        {/* 3 Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={idx}
              style={{ '--delay': `${0.12 * (idx + 1)}s` } as React.CSSProperties}
              className="reveal reveal-up bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-navy-card hover:border-[#1268B3]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Image: Fixed 16:10 Aspect Ratio */}
                <div className="reveal-img-wrap relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="reveal-img w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-slate-400 tracking-wider">
                      PHASE // {step.number}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider ${step.badgeClass}`}>
                      {step.title}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-[#062B5C] tracking-tight">
                    {step.subtitle}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-2.5">
                    {step.description}
                  </p>

                  {/* Integrated Methodologies List */}
                  <div className="pt-4 mt-5 border-t border-slate-100">
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-2 tracking-wider">
                      Core Disciplines &amp; Scope:
                    </span>
                    <ul className="space-y-1.5">
                      {step.items.map((it, i) => (
                        <li key={i} className="text-xs font-medium text-slate-700 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${step.bulletColor} shrink-0`} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
    <section className="py-20 lg:py-28 bg-[#F1F3F7] border-y border-slate-200/80">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#062B5C] tracking-tight leading-[1.12]">
            Investigate. Analyse. Design<span className="text-[#D71920]">.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#536271] leading-relaxed">
            Our recurring engineering framework unites subsurface investigation, scientific numerical interpretation, and actionable engineering recommendations.
          </p>
        </div>

        {/* 3 Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-2xl font-black ${step.numberColor}`}>
                      {step.number}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${step.badgeClass}`}>
                      PHASE {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold font-display text-[#062B5C] uppercase tracking-wide">
                    {step.title}
                  </h3>

                  <div className="text-xs sm:text-sm font-semibold text-[#536271] mt-0.5 mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#536271] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Bullets List at Bottom */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-4 bg-[#F8FAFC] border-t border-slate-200/70 mt-2">
                <ul className="space-y-2">
                  {step.items.map((it, i) => (
                    <li key={i} className="text-xs font-medium text-[#17212B] flex items-center gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${step.bulletColor} shrink-0`} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

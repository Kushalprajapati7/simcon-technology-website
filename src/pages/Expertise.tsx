import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Cpu, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Expertise: React.FC = () => {
  const domains = [
    {
      number: "01",
      title: "Shallow & Deep Foundation Engineering",
      description: "Bearing capacity optimization, settlement prognosis, axial and lateral pile capacity evaluation, and Combined Piled-Raft Foundation (CPRF) analysis.",
      points: [
        "Axial capacity curves for bored and driven piles",
        "Non-linear lateral deflection and bending moment modeling using LPILE",
        "Settlement reduction via piled rafts",
        "High-capacity socketed barrettes in layered bedrock"
      ]
    },
    {
      number: "02",
      title: "Numerical Modelling & Soil–Structure Interaction",
      description: "Advanced 2D finite-element simulation of complex construction sequencing, staged excavations, and foundation response using PLAXIS 2D.",
      points: [
        "Non-linear soil plasticity and hardening soil models (HS / HS Small)",
        "Groundwater seepage and consolidation coupling",
        "Tunnel portal and shaft excavation distress assessment",
        "Underground metro station box modeling"
      ]
    },
    {
      number: "03",
      title: "Geotechnical Earthquake Engineering",
      description: "Site-specific seismic hazard evaluation, liquefaction triggering analysis, and dynamic response parameters.",
      points: [
        "Liquefaction potential assessment via cyclic stress ratio methods (LIQSVS)",
        "Shear wave velocity (Vs30) profiling from MASW surveys",
        "Ground shaking amplification analysis for transit viaducts",
        "Post-liquefaction settlement and lateral spreading evaluations"
      ]
    },
    {
      number: "04",
      title: "Retaining & Deep Excavation Systems",
      description: "Design validation for diaphragm walls, soldier piles, secant pile walls, and temporary earth support systems in congested urban areas.",
      points: [
        "Multi-strutted excavation deformation tracking",
        "Ground anchor and tieback load distribution",
        "Basal heave stability in soft cohesive strata",
        "Impact assessment on adjacent high-rise structures"
      ]
    },
    {
      number: "05",
      title: "Ground Improvement & Soil Stabilization",
      description: "Remedial and ground modification engineering for marginal coastal deposits, high water table zones, and loose alluvial strata.",
      points: [
        "Stone column vibro-replacement design (StoneC)",
        "Prefabricated Vertical Drain (PVD) surcharge consolidation",
        "Lime, cement, and chemical grouting stabilization",
        "Engineered soil replacement for foundation preparation"
      ]
    },
    {
      number: "06",
      title: "Geosynthetics Engineering",
      description: "Reinforced Soil (RE) wall design, basal reinforcement over soft ground, slope stabilization, and geomembrane liners.",
      points: [
        "Mechanically Stabilized Earth (MSE) bridge approaches",
        "Geogrid basal reinforcement for heavy container yards",
        "Slope bio-engineering and geotextile filtration",
        "Pavement subgrade reinforcement reducing asphalt thickness"
      ]
    }
  ];

  const softwareSuite = [
    { name: "PLAXIS 2D", description: "Finite-element soil–structure interaction, staged excavation, and creep modeling." },
    { name: "LPILE", description: "Lateral load-deflection and p-y curve analysis of deep pile foundations." },
    { name: "StoneC", description: "Vibro-replacement stone-column design, spacing, and settlement reduction factors." },
    { name: "LIQSVS", description: "Liquefaction-potential assessment and cyclic resistance ratio evaluation." },
    { name: "OpenGround", description: "Digital borehole database, spatial georeferencing, and 3D subsurface stratigraphy." },
    { name: "gINT", description: "Borehole-data logging, fence diagram generation, and geotechnical reporting." },
    { name: "AutoCAD", description: "Precision engineering drawings, cross-sections, and foundation layout drafting." }
  ];

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#062B5C] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
              // COMPUTATIONAL & DESIGN RIGOR //
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-[1.12]">
              Technical Expertise & Numerical Modeling.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed pt-2">
              Transforming raw subsurface exploration data into verified foundation engineering recommendations through advanced computational modeling and doctorate-level oversight.
            </p>
          </div>
        </div>
      </section>

      {/* Six Technical Domains Grid */}
      <section className="py-20 bg-[#F7F8FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="// ENGINEERING CAPABILITIES"
            title="Core Specialized Competencies"
            description="Our geotechnical consulting practice bridges investigative testing with practical structural and civil engineering execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((dom, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between hover:border-[#1268B3] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#D71920]">
                      DOMAIN {dom.number}
                    </span>
                    <Layers className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-[#062B5C] mb-2 leading-snug">
                    {dom.title}
                  </h3>

                  <p className="text-xs text-[#536271] leading-relaxed mb-6">
                    {dom.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <ul className="space-y-2">
                    {dom.points.map((pt, i) => (
                      <li key={i} className="text-xs text-[#536271] flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1268B3] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Arsenal */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="// SOFTWARE TOOLS //"
            title="Industry-Standard Computational Platforms"
            description="Our engineers utilize globally validated engineering software to simulate complex soil-structure behavior."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareSuite.map((sw, idx) => (
              <div
                key={idx}
                className="bg-[#F7F8FA] p-6 rounded-lg border border-slate-200 hover:border-[#062B5C] transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-[#1268B3]" />
                  <h3 className="font-mono font-bold text-sm text-[#062B5C]">{sw.name}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{sw.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C]">
            Need Numerical Modeling for Complex Foundations?
          </h2>
          <p className="text-sm text-[#536271] max-w-xl mx-auto">
            Consult directly with our doctorate advisors and modeling specialists for finite element soil-structure analysis.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-white bg-[#062B5C] hover:bg-[#1268B3] rounded transition-colors shadow-sm"
            >
              <span>Consult Our Modeling Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

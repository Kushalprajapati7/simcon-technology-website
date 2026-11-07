import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { SEOHead } from '@/components/common/SEOHead';
import { ChemicalTestingShowcase } from '@/components/cards/ChemicalTestingShowcase';
import { MaterialTestingCarousel } from '@/components/services/MaterialTestingCarousel';
import {
  ArrowRight,
  ShieldCheck,
  Target,
  MapPin,
  FlaskConical,
  Settings,
  FileText,
  Award,
  TestTube,
  Scale,
  Gauge
} from 'lucide-react';

export const MaterialTestingServices: React.FC = () => {
  const service = SERVICES.find(s => s.slug === 'material-testing-services') || SERVICES[3];

  const methodologySteps = [
    {
      step: "01",
      title: "Chain of Custody & Sample Barcoding",
      description: "Standardized logging, unique sample tagging, and photographic registration on receipt.",
      icon: FileText,
      bg: "#EEF5FC",
      text: "#1268B3",
      divider: "#C8DEF4",
    },
    {
      step: "02",
      title: "Curing & Environmental Conditioning",
      description: "Thermostatically controlled accelerated water curing tanks and climate humidity chambers.",
      icon: Settings,
      bg: "#D9ECFB",
      text: "#1268B3",
      divider: "#B8DCF7",
    },
    {
      step: "03",
      title: "Servo-Hydraulic UTM & Compression Loading",
      description: "Computer-controlled pace rates logging full stress-strain curves, proof stress, and failure peak.",
      icon: Scale,
      bg: "#BCE0FA",
      text: "#0A5094",
      divider: "#98CAF2",
    },
    {
      step: "04",
      title: "Durability & Microstructure Testing",
      description: "Rapid Chloride Penetration (RCPT), migration (RCMT), and water permeability under pressure.",
      icon: TestTube,
      bg: "#4A9BE8",
      text: "#FFFFFF",
      divider: "rgba(255,255,255,0.4)",
    },
    {
      step: "05",
      title: "Analytical Wet Chemistry & Spectrometry",
      description: "Volumetric, gravimetric, and spectrophotometric oxide assays across 6 matrices.",
      icon: FlaskConical,
      bg: "#1268B3",
      text: "#FFFFFF",
      divider: "rgba(255,255,255,0.4)",
    },
    {
      step: "06",
      title: "ISO/IEC 17025 Certified Reporting",
      description: "NABL QR-coded reports with statistical compliance and calibration traceability.",
      icon: ShieldCheck,
      bg: "#062B5C",
      text: "#FFFFFF",
      divider: "rgba(255,255,255,0.3)",
    },
  ];

  // 6 Core Physical & Mechanical Material Testing Disciplines
  const materialDisciplines = [
    {
      id: "concrete",
      disciplineNumber: "01",
      title: "Fresh & Hardened Concrete Testing",
      description: "Comprehensive mechanical, durability, and non-destructive quality evaluation of structural concrete.",
      tests: [
        { step: "01", title: "Concrete Cube & Cylinder Compressive Strength", description: "Automated digital compression machine testing 7, 14, and 28-day curing intervals conforming to IS 516 / ASTM C39." },
        { step: "02", title: "Rapid Chloride Penetration Test (RCPT)", description: "Electrical charge measurement determining concrete resistance to aggressive chloride ion penetration per ASTM C1202." },
        { step: "03", title: "Flexural Strength & Modulus of Rupture", description: "Two-point loading beam test evaluating tensile capacity for rigid highway pavements conforming to IS 516." },
        { step: "04", title: "Water Permeability under Pressure (DIN 1048)", description: "Hydrostatic depth of penetration testing on concrete specimens under 5 bar water pressure." },
        { step: "05", title: "Fresh Concrete Slump & Flow Table Test", description: "Workability and consistency verification for conventional and self-compacting concrete (SCC) per IS 1199." },
        { step: "06", title: "Extracted Concrete Core Compressive Strength", description: "Diamond core drilling, capping, and crushing to deduce in-situ strength per IS 516 / ACI 214." }
      ]
    },
    {
      id: "steel",
      disciplineNumber: "02",
      title: "Steel Reinforcement Rebar & Prestressing Strands",
      description: "High-tonnage tensile, yield, elongation, and reverse bend testing on reinforcing and prestressing steel.",
      tests: [
        { step: "01", title: "Tensile Strength & 0.2% Proof Stress (UTM)", description: "Computerized servo-hydraulic 1000 kN UTM logging complete stress-strain curves conforming to IS 1786 / ASTM A370." },
        { step: "02", title: "Mandrel Bend & Re-Bend Ductility Test", description: "Reverse bending through 180° followed by aging to inspect rib micro-cracking and brittle failure per IS 1786." },
        { step: "03", title: "Total Elongation at Maximum Force (Agt)", description: "Uniform elongation measurement assessing seismic ductility requirements for high-strength deformed rebars." },
        { step: "04", title: "Mechanical Rebar Coupler Tensile Capacity", description: "Static tension and slip testing validating mechanical splice integrity conforming to IS 16172." },
        { step: "05", title: "Low-Relaxation Prestressing Strand Tensile Test", description: "Breaking load, 0.2% proof load, and elongation on 7-ply HT strands conforming to IS 14268." },
        { step: "06", title: "Nominal Mass & Cross-Sectional Area Verification", description: "Weight per meter length and rib height/pitch measurement verifying rolling tolerance standards." }
      ]
    },
    {
      id: "cementitious",
      disciplineNumber: "03",
      title: "Cementitious Binders (OPC, PPC, Fly Ash & GGBS)",
      description: "Physical, mechanical, and fineness evaluation of hydraulic cements and supplementary cementitious materials.",
      tests: [
        { step: "01", title: "Compressive Strength of Mortar Cubes", description: "Standard vibrated mortar cubes (70.6 mm) tested at 3, 7, and 28 days conforming to IS 4031 (Part 6)." },
        { step: "02", title: "Standard Consistency & Setting Time (Vicat)", description: "Vicat needle penetration determining normal consistency, initial setting, and final setting time per IS 4031." },
        { step: "03", title: "Blaine Air Permeability Fineness", description: "Specific surface area (m²/kg) determination through airflow resistance through compacted cement bed." },
        { step: "04", title: "Soundness Test – Le Chatelier & Autoclave", description: "Measuring unburned free lime expansion and magnesia hydration volume changes conforming to IS 4031 (Part 3)." },
        { step: "05", title: "Density & Specific Gravity Test", description: "Le Chatelier flask and kerosene displacement verifying true particle density per IS 4031 (Part 11)." },
        { step: "06", title: "Fly Ash & GGBS Slag Activity Index", description: "Relative compressive strength index comparing blended mortar against control specimens per IS 3812 & IS 16714." }
      ]
    },
    {
      id: "aggregates",
      disciplineNumber: "04",
      title: "Coarse & Fine Mineral Aggregate Testing",
      description: "Grading gradation, mechanical crushing, abrasion, flakiness, and soundness on quarry aggregates.",
      tests: [
        { step: "01", title: "Sieve Analysis & Particle Size Gradation", description: "Mechanical sieve shaker sorting fine and coarse fractions to plot Fineness Modulus curves per IS 2386 (Part 1)." },
        { step: "02", title: "Aggregate Crushing & Impact Value (ACV / AIV)", description: "Resistance of aggregate particles to gradual compressive load and sudden impact shattering per IS 2386 (Part 4)." },
        { step: "03", title: "Los Angeles Abrasion Resistance Test", description: "Steel ball rotating drum abrasion evaluating aggregate surface wear resistance per IS 2386 (Part 4) / ASTM C131." },
        { step: "04", title: "Flakiness & Elongation Index (Combined)", description: "Thickness and length gauges identifying flat and elongated particles that degrade concrete workability." },
        { step: "05", title: "Specific Gravity & Water Absorption", description: "Wire basket water immersion determining saturated surface-dry (SSD) specific gravity and absorption percentage." },
        { step: "06", title: "Aggregate Soundness (Na₂SO₄ & MgSO₄)", description: "Accelerated weathering cycles evaluating resistance against freeze-thaw and salt crystallization degradation." }
      ]
    },
    {
      id: "bituminous",
      disciplineNumber: "05",
      title: "Bituminous Binders & Asphalt Mix Design",
      description: "Pavement binder rheology, viscosity grading, ductility, and Marshall stability mix optimization.",
      tests: [
        { step: "01", title: "Penetration Test (100g, 5s at 25°C)", description: "Standard needle penetration determining bitumen consistency and hardness grade conforming to IS 1203." },
        { step: "02", title: "Ductility of Bituminous Binders", description: "Distance in cm to which a briquette will elongate before breaking in a 27°C water bath conforming to IS 1208." },
        { step: "03", title: "Ring & Ball Softening Point Test", description: "Temperature at which bituminous binder softens and flows through ring under steel ball weight per IS 1205." },
        { step: "04", title: "Absolute & Kinematic Viscosity (Rotational)", description: "Dynamic viscosity at 60°C and 135°C for Viscosity Graded (VG-10, VG-30, VG-40) bitumen per IS 1206." },
        { step: "05", title: "Marshall Stability & Flow Test", description: "Peak compressive load and plastic deformation of compacted asphalt specimens conforming to ASTM D6927." },
        { step: "06", title: "Stripping Value & Binder Content Determination", description: "Centrifuge binder extraction and aggregate coating adhesion under hot water immersion per IS 6241." }
      ]
    },
    {
      id: "masonry",
      disciplineNumber: "06",
      title: "Masonry, Clay Bricks & Concrete Blocks",
      description: "Structural compressive strength, 24-hour water absorption, efflorescence, and dimension checking.",
      tests: [
        { step: "01", title: "Compressive Strength of Burnt Clay Bricks", description: "Flat surface frog-filled compression testing on soaked clay bricks conforming to IS 3495 (Part 1)." },
        { step: "02", title: "Solid & Hollow Concrete Block Compression", description: "Full-scale compressive strength on load-bearing concrete masonry units conforming to IS 2185 (Part 1)." },
        { step: "03", title: "24-Hour Water Absorption Test", description: "Cold water immersion percentage establishing porosity and weathering durability per IS 3495 (Part 2)." },
        { step: "04", title: "Efflorescence Salt Staining Test", description: "Distilled water evaporation in shallow dish classifying soluble salt deposits (Nil, Slight, Moderate, Heavy)." },
        { step: "05", title: "Precast Concrete Paver Block Strength", description: "Compressive and split tensile testing on interlocking paving units for roads and ports per IS 15658." },
        { step: "06", title: "Autoclaved Aerated Concrete (AAC) Block Tests", description: "Dry density and compressive strength testing on lightweight cellular thermal insulation blocks per IS 2185 (Part 3)." }
      ]
    }
  ];

  const softwareTools = [
    {
      name: "Servo-Hydraulic UTM Console",
      purpose: "Computerized closed-loop strain rate control, 0.2% proof stress, and automated tensile stress-strain curves",
      icon: Scale
    },
    {
      name: "Digital Compression Console",
      purpose: "Controlled pace-rate cube and cylinder compressive failure logging with automated NABL certificate generation",
      icon: Gauge
    },
    {
      name: "Spectrophotometric Assay System",
      purpose: "Digital wavelength absorbance measurement for chemical trace analysis across cement, water, and steel",
      icon: FlaskConical
    }
  ];

  const compliantStandards = [
    {
      code: "IS 269 / IS 12269",
      title: "Specifications for 33, 43 & 53 Grade Ordinary Portland Cement",
      type: "Indian Standard"
    },
    {
      code: "IS 383",
      title: "Coarse and Fine Aggregates for Concrete - Specifications",
      type: "Indian Standard"
    },
    {
      code: "IS 516",
      title: "Methods of Tests for Strength of Concrete (Compression, Flexure, Core)",
      type: "Indian Standard"
    },
    {
      code: "IS 1786",
      title: "High Strength Deformed Steel Bars & Wires for Concrete Reinforcement",
      type: "Indian Standard"
    },
    {
      code: "IS 14268",
      title: "Uncoated Stress Relieved Low Relaxation Seven-Ply Strand for Prestressed Concrete",
      type: "Indian Standard"
    },
    {
      code: "IS 456",
      title: "Plain and Reinforced Concrete - Code of Practice",
      type: "Indian Standard"
    },
    {
      code: "ASTM C39",
      title: "Compressive Strength of Cylindrical Concrete Specimens",
      type: "ASTM International"
    },
    {
      code: "ASTM C1202",
      title: "Electrical Indication of Concrete's Ability to Resist Chloride Ion Penetration (RCPT)",
      type: "ASTM International"
    },
    {
      code: "ASTM A370",
      title: "Standard Test Methods and Definitions for Mechanical Testing of Steel Products",
      type: "ASTM International"
    }
  ];

  const featuredProjects = service.relatedProjectSlugs
    ?.map(pSlug => PROJECTS.find(p => p.slug === pSlug || p.id === pSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p)) || PROJECTS.slice(0, 3);

  return (
    <div className="pt-[72px] bg-white">
      <SEOHead
        customSeo={{
          title: "Material Testing Services | NABL Central Testing Lab (581+ Parameters) | SIMCON Technology",
          description: "NABL-accredited civil material testing across 581+ parameters: Cement, Aggregates, Bitumen, Masonry, Fresh & Hardened Concrete, Steel Rebars (UTM), and Chemical analysis across 6 matrices.",
          canonical: "https://www.simcon.co.in/services/material-testing-services"
        }}
      />

      {/* =========================================================================
          1. HERO HEADER SECTION (Seamless Diagonal Full-Bleed CAD Split-Screen)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#062B5C] text-white min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] xl:w-[60%] h-full z-0 overflow-hidden pointer-events-none">
          <div
            className="w-full h-full relative lg:[clip-path:polygon(12%_0,100%_0,100%_100%,26%_100%)]"
          >
            <img
              src="/assets/services/materials/universal-testing-machine-utm-steel.png"
              alt="SIMCON Servo-Hydraulic Universal Testing Machine UTM for Steel Rebar"
              className="w-full h-full object-cover object-right sm:object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#062B5C] via-[#062B5C]/90 lg:via-[#062B5C]/20 to-[#062B5C]/60 lg:to-transparent pointer-events-none" />
          </div>

          <div className="hidden lg:flex absolute top-8 sm:top-10 right-8 sm:right-12 xl:right-16 flex-col items-start z-20 pointer-events-none select-none">
            <div className="border-l-2 border-slate-700/70 pl-3 font-mono text-[10px] xl:text-[11px] font-bold tracking-[0.25em] text-slate-900 leading-relaxed uppercase">
              VALIDATING<br />QUALITY<br />ACROSS<br />EVERY<br />MATRIX
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none z-0" />

        <div className="absolute left-0 inset-y-0 w-1/2 pointer-events-none opacity-15 z-0 hidden lg:block">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none">
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="45%" y1="0" x2="45%" y2="100%" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="35%" cy="65%" r="140" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full py-12 sm:py-16 lg:py-20">
          <div className="max-w-xl lg:max-w-[46%] xl:max-w-[48%] space-y-5 sm:space-y-6">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-300" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-400">&gt;</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="text-slate-400">&gt;</span>
              <span className="text-slate-200">Material Testing Services</span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-slate-300 uppercase">
                DISCIPLINE 04 • CONSTRUCTION MATERIAL &amp; CHEMICAL TESTING
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[58px] font-extrabold font-display text-white tracking-tight leading-[1.08] break-words">
              Material Testing Services
            </h1>

            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-200 leading-relaxed font-normal max-w-lg">
              NABL-accredited central testing laboratory validating 581+ parameters across cement, aggregates, bitumen, masonry, concrete, steel rebars, and chemical assaying across 6 matrices.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-medium text-slate-200">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-300 shrink-0" />
                <span>NABL Accredited (ISO/IEC 17025)</span>
              </div>
              <span className="w-px h-3.5 bg-white/25 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-300 shrink-0" />
                <span>581+ Standardized Tests</span>
              </div>
              <span className="w-px h-3.5 bg-white/25 hidden sm:block" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0" />
                <span>Pan-India Sample Pickups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. METHODOLOGY & TECHNICAL APPROACH SECTION (Interlocking Blue Chevrons Timeline)
          ========================================================================= */}
      <section className="py-18 sm:py-24 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-10 sm:space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div className="space-y-2 max-w-4xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#062B5C] tracking-tight leading-tight lg:whitespace-nowrap">
                Methodology &amp; Quality Assurance Workflow<span className="text-[#1268B3]">.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#536271] leading-relaxed pt-1">
                From standardized barcoded intake and controlled curing conditioning to automated closed-loop UTM testing and QR-coded certified reporting, SIMCON delivers bulletproof compliance for megaprojects.
              </p>
            </div>

            <a
              href="#material-disciplines"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-[#1268B3] hover:text-[#062B5C] transition-colors self-start md:self-end shrink-0 group py-1"
            >
              <span>Explore All 6 Disciplines</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* DESKTOP VIEW: 6 CONNECTED BLUE CHEVRONS TIMELINE (xl and above) */}
          <div className="hidden xl:block pt-2 space-y-8">
            <div className="flex w-full items-stretch">
              {methodologySteps.map((item, idx) => {
                const IconComp = item.icon;
                const isFirst = idx === 0;
                const clipPath = isFirst
                  ? 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%)'
                  : 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%, 18px 50%)';

                return (
                  <div
                    key={item.step}
                    className={`flex-1 relative transition-all duration-300 hover:brightness-105 hover:-translate-y-1 ${!isFirst ? '-ml-[17px]' : ''
                      }`}
                    style={{
                      zIndex: methodologySteps.length - idx
                    }}
                  >
                    <div
                      className="w-full h-[68px] 2xl:h-[76px] flex items-center justify-center gap-3 px-3 select-none transition-shadow"
                      style={{
                        backgroundColor: item.bg,
                        color: item.text,
                        clipPath: clipPath
                      }}
                    >
                      <span className="font-mono font-extrabold text-base 2xl:text-lg tracking-tight pl-2">
                        {item.step}
                      </span>
                      <span
                        className="w-px h-5 opacity-40 shrink-0"
                        style={{ backgroundColor: item.divider }}
                      />
                      <IconComp className="w-5 h-5 2xl:w-5.5 2xl:h-5.5 shrink-0" strokeWidth={2.2} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-6 gap-5 2xl:gap-6 pt-2">
              {methodologySteps.map((item) => (
                <div key={item.step} className="group space-y-2 pr-1">
                  <h3 className="font-bold text-xs 2xl:text-sm font-display text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] 2xl:text-xs text-[#536271] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* TABLET VIEW: 2 ROWS OF 3 INTERLOCKING CHEVRONS (sm to xl) */}
          <div className="hidden sm:block xl:hidden space-y-10 pt-2">
            <div className="space-y-4">
              <div className="flex w-full items-stretch">
                {methodologySteps.slice(0, 3).map((item, subIdx) => {
                  const IconComp = item.icon;
                  const isFirst = subIdx === 0;
                  const clipPath = isFirst
                    ? 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%)'
                    : 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%, 18px 50%)';

                  return (
                    <div
                      key={item.step}
                      className={`flex-1 relative transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 ${!isFirst ? '-ml-[17px]' : ''
                        }`}
                      style={{ zIndex: 3 - subIdx }}
                    >
                      <div
                        className="w-full h-16 flex items-center justify-center gap-3 px-3 select-none transition-shadow"
                        style={{
                          backgroundColor: item.bg,
                          color: item.text,
                          clipPath: clipPath
                        }}
                      >
                        <span className="font-mono font-extrabold text-base tracking-tight pl-2">
                          {item.step}
                        </span>
                        <span
                          className="w-px h-5 opacity-40 shrink-0"
                          style={{ backgroundColor: item.divider }}
                        />
                        <IconComp className="w-5 h-5 shrink-0" strokeWidth={2.2} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-6 pt-1">
                {methodologySteps.slice(0, 3).map((item) => (
                  <div key={item.step} className="group space-y-1.5 pr-2">
                    <h3 className="font-bold text-sm font-display text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#536271] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex w-full items-stretch">
                {methodologySteps.slice(3, 6).map((item, subIdx) => {
                  const IconComp = item.icon;
                  const isFirst = subIdx === 0;
                  const clipPath = isFirst
                    ? 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%)'
                    : 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%, 18px 50%)';

                  return (
                    <div
                      key={item.step}
                      className={`flex-1 relative transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 ${!isFirst ? '-ml-[17px]' : ''
                        }`}
                      style={{ zIndex: 3 - subIdx }}
                    >
                      <div
                        className="w-full h-16 flex items-center justify-center gap-3 px-3 select-none transition-shadow"
                        style={{
                          backgroundColor: item.bg,
                          color: item.text,
                          clipPath: clipPath
                        }}
                      >
                        <span className="font-mono font-extrabold text-base tracking-tight pl-2">
                          {item.step}
                        </span>
                        <span
                          className="w-px h-5 opacity-40 shrink-0"
                          style={{ backgroundColor: item.divider }}
                        />
                        <IconComp className="w-5 h-5 shrink-0" strokeWidth={2.2} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-6 pt-1">
                {methodologySteps.slice(3, 6).map((item) => (
                  <div key={item.step} className="group space-y-1.5 pr-2">
                    <h3 className="font-bold text-sm font-display text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#536271] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE VIEW: VERTICAL CARD STACK (xs to sm) */}
          <div className="block sm:hidden space-y-4 pt-1">
            {methodologySteps.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="rounded-xl border border-slate-200 p-4 space-y-2 bg-[#F8FAFC] shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-extrabold text-sm text-[#1268B3]">
                      STAGE {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#1268B3]">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-bold text-sm font-display text-[#062B5C] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#536271] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PHYSICAL & MECHANICAL TESTING DISCIPLINES (Clean Sub-Sections, No Filter)
          ========================================================================= */}
      <section id="material-disciplines" className="scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-12 sm:space-y-16">

          {materialDisciplines.map((discipline, idx) => (
            <div key={discipline.id} className={`space-y-6 sm:space-y-8 ${idx > 0 ? 'pt-8 sm:pt-10 border-t border-slate-100' : ''}`}>
              <div className="space-y-2">
                <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase mb-1">
                  DISCIPLINE {discipline.disciplineNumber} • {discipline.title.toUpperCase()}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#062B5C] tracking-tight">
                  {discipline.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-3xl mt-2">
                  {discipline.description}
                </p>
              </div>

              {/* 2-Column Cards Grid (Clean Informational Cards) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-5 w-full">
                {discipline.tests.map((test) => (
                  <div
                    key={test.step}
                    className="w-full bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs hover:shadow-md hover:border-[#1268B3]/40 transition-all duration-300 flex items-start sm:items-center gap-3.5 sm:gap-4 text-left group"
                  >
                    <div className="w-11 h-10 sm:w-13 sm:h-11 rounded-lg bg-[#EEF5FC] border border-[#D9E8F7] flex items-center justify-center font-mono font-bold text-base sm:text-lg text-[#062B5C] shrink-0 group-hover:bg-[#1268B3] group-hover:text-white group-hover:border-[#1268B3] transition-colors shadow-2xs mt-0.5 sm:mt-0">
                      {test.step}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display font-bold text-sm sm:text-base text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-snug">
                        {test.title}
                      </h3>
                      <p className="text-xs text-[#536271] leading-relaxed mt-1">
                        {test.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* =========================================================================
          4. CHEMICAL TESTING SHOWCASE (Interactive 6 Matrices Explorer)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-8">
          <div className="space-y-2">
            <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase mb-1">
              DISCIPLINE 07 • CHEMICAL ASSAYS ACROSS 6 MATRICES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#062B5C] tracking-tight">
              Analytical Chemical Assaying Across 6 Construction Matrices
            </h2>
            <p className="text-xs sm:text-sm lg:text-[13px] xl:text-[14.5px] text-slate-500 leading-relaxed lg:whitespace-nowrap font-normal mt-2">
              NABL-accredited analytical chemistry examining cementitious binders, aggregate alkali-silica reactivity, admixtures, groundwater aggressiveness, and steel rebar carbon composition.
            </p>
          </div>

          <ChemicalTestingShowcase />
        </div>
      </section>

      {/* =========================================================================
          5. TESTING PROCEDURES & LAB APPARATUS SLIDESHOW (Image Carousel)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] tracking-tight">
              Central Laboratory Testing Procedures &amp; Machines Slideshow
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Continuous 4-up automatic slideshow of 1000 kN servo-hydraulic UTMs, digital concrete compression testing frames, and durability testing apparatus.
            </p>
          </div>

          <MaterialTestingCarousel />
        </div>
      </section>

      {/* =========================================================================
          6. LAB SOFTWARE & AUTOMATED TEST BENCHES (Split-Screen Layout matching Image 2)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex flex-col lg:flex-row lg:items-center">

            {/* Left Column: Heading & Description */}
            <div className="lg:w-[30%] xl:w-[28%] 2xl:w-[25%] flex-shrink-0 pr-0 lg:pr-8 xl:pr-10 2xl:pr-12 pb-6 lg:pb-0 border-b lg:border-b-0 lg:border-r border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C] tracking-tight">
                Software Tools &amp;<br className="hidden lg:inline" /> Numerical Processing Consoles
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-2.5 sm:mt-3 max-w-xl lg:max-w-none">
                Calibrated acoustic waveform analysis, digital UTM closed-loop control, and computerized testing consoles.
              </p>
            </div>

            {/* Right Side: 3 Tool Columns with Dividers */}
            <div className="lg:w-[70%] xl:w-[72%] 2xl:w-[75%] flex-1 pt-6 lg:pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-slate-200">
                {softwareTools.map((tool) => {
                  const IconComp = tool.icon;
                  return (
                    <div
                      key={tool.name}
                      className="group px-4 sm:px-6 xl:px-8 text-center flex flex-col items-center justify-start"
                    >
                      {/* Icon Circle */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EEF5FC] border border-[#D9E8F7] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 group-hover:bg-[#E2F0FD] group-hover:border-[#C4DEF7] transition-all duration-300 shadow-2xs">
                        <IconComp className="w-6 h-6 sm:w-7 sm:h-7 text-[#1268B3]" />
                      </div>

                      {/* Tool Name */}
                      <h3 className="font-bold font-display text-sm sm:text-base text-[#062B5C] mb-1.5 sm:mb-2 leading-tight">
                        {tool.name}
                      </h3>

                      {/* Purpose */}
                      <p className="text-xs text-slate-500 leading-relaxed max-w-[220px] mx-auto">
                        {tool.purpose}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          7. STANDARDS & CODE COMPLIANCE (Option 4 - Full-Width Card Tiles with Blue Notch)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full space-y-8 sm:space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#062B5C] tracking-tight">
              Compliant Standards &amp; Test Codes
            </h2>
            <p className="text-xs sm:text-sm lg:text-[13px] xl:text-[14.5px] text-slate-500 leading-relaxed lg:whitespace-nowrap font-normal mt-2">
              NABL laboratory testing and calibration procedures executed in strict accordance with applicable Indian (IS) and international (ASTM / BS) standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 xl:gap-5 w-full">
            {compliantStandards.map(std => (
              <div
                key={std.code}
                className="group relative bg-white border border-slate-200/90 rounded-xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-[#1268B3]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[96px] sm:min-h-[108px]"
              >
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <span className="font-mono text-base sm:text-lg font-bold text-[#062B5C] group-hover:text-[#1268B3] transition-colors tracking-tight">
                    {std.code}
                  </span>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase bg-slate-50 border border-slate-200/70 px-2 py-0.5 rounded shrink-0">
                    {std.type}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans line-clamp-2 group-hover:text-slate-900 transition-colors pr-6">
                  {std.title}
                </p>

                {/* Option 4 Signature Blue Accent Corner Notch */}
                <svg
                  className="absolute bottom-0 right-0 w-6 h-6 sm:w-7 sm:h-7 text-[#1268B3] pointer-events-none transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M32 8C32 21 21 32 8 32H32V8Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FEATURED MATERIAL TESTING CASE STUDIES
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-8 sm:space-y-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C] tracking-tight">
                Featured Material Quality Validation Case Studies
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] transition-colors flex items-center gap-1 shrink-0"
            >
              <span>All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map(proj => (
              <Link
                key={proj.id}
                to={`/projects/${proj.slug}`}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                    <img
                      src={proj.featuredImage}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#062B5C]/90 backdrop-blur-xs text-white text-[10px] font-mono font-semibold rounded">
                        {proj.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-[#536271] leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#1268B3] group-hover:text-[#062B5C] transition-colors">
                    <span>Read Material Audit</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. CALL TO ACTION RIBBON
          ========================================================================= */}
      <section className="bg-[#062B5C] py-12 sm:py-14 text-white relative overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-1.5 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
              Submit Samples for NABL Material Testing?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Dispatch concrete cubes, steel rebar coupons, aggregates, bitumen, or water specimens to our central testing facilities in Gandhidham, Ahmedabad, Lucknow, or Indore.
            </p>
          </div>

          <Link
            to="/contact?service=material-testing-services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-[#062B5C] font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shrink-0 shadow-md w-full sm:w-auto"
          >
            <span>SUBMIT TESTING REQUEST</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

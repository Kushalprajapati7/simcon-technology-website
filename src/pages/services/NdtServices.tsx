import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { SEOHead } from '@/components/common/SEOHead';
import { NdtTestingCarousel } from '@/components/services/NdtTestingCarousel';
import {
  ArrowRight,
  Target,
  MapPin,
  Building2,
  FileText,
  Eye,
  Award,
  Activity,
  Gauge,
  Zap,
  Waves
} from 'lucide-react';

export const NdtServices: React.FC = () => {
  const service = SERVICES.find(s => s.slug === 'ndt-structural-integrity') || SERVICES[2];

  const methodologySteps = [
    {
      step: "01",
      title: "Visual Distress & Crack Mapping",
      description: "Detailed photographic reconnaissance, crack width gauge surveys, and distress zoning.",
      icon: Eye,
      bg: "#EEF5FC",
      text: "#1268B3",
      divider: "#C8DEF4",
    },
    {
      step: "02",
      title: "Sensor Calibration & Surface Preparation",
      description: "Surface grinding to expose sound matrix, acoustic couplant application, and sensor zeroing.",
      icon: Gauge,
      bg: "#D9ECFB",
      text: "#1268B3",
      divider: "#B8DCF7",
    },
    {
      step: "03",
      title: "Acoustic & Ultrasonic Pulse Probing",
      description: "Ultrasonic Pulse Velocity (UPV), low-strain pile integrity (PIT), and cross-hole sonic logging.",
      icon: Activity,
      bg: "#BCE0FA",
      text: "#0A5094",
      divider: "#98CAF2",
    },
    {
      step: "04",
      title: "Electrochemical & Rebar Cover Profiling",
      description: "Half-cell potential corrosion probability mapping and electromagnetic cover meter scanning.",
      icon: Zap,
      bg: "#4A9BE8",
      text: "#FFFFFF",
      divider: "rgba(255,255,255,0.4)",
    },
    {
      step: "05",
      title: "Bridge Proof Load & Deflection Testing",
      description: "Calibrated electronic LVDT displacement gauges measuring elastic recovery under heavy axle loads.",
      icon: Building2,
      bg: "#1268B3",
      text: "#FFFFFF",
      divider: "rgba(255,255,255,0.4)",
    },
    {
      step: "06",
      title: "Condition Diagnostics & Retrofitting Advisory",
      description: "Residual structural capacity estimation, life extension roadmap, and retrofitting design.",
      icon: FileText,
      bg: "#062B5C",
      text: "#FFFFFF",
      divider: "rgba(255,255,255,0.3)",
    },
  ];

  // Sub-section 1: Non-Destructive Testing (Concrete & Masonry)
  const concreteNdtMethods = [
    {
      step: "01",
      title: "Low Strain Pile Integrity Test (PIT)",
      description: "Sonic reflection wave velocity testing validating bored cast-in-situ pile continuity, length, and cross-section necking."
    },
    {
      step: "02",
      title: "Ultrasonic Pulse Velocity (UPV)",
      description: "Acoustic pulse transit measurement identifying internal void cavities, micro-cracks, and concrete homogeneity."
    },
    {
      step: "03",
      title: "Digital Rebound Hammer Test",
      description: "Non-destructive surface hardness profiling establishing in-situ compressive uniformity and grading across RC members."
    },
    {
      step: "04",
      title: "Half-Cell Corrosion Potential Test",
      description: "Copper-copper sulfate electrode survey mapping active corrosion probability in reinforcement rebars."
    },
    {
      step: "05",
      title: "Cover Meter & Profometer Rebar Scanning",
      description: "Electromagnetic induction scanning determining precise concrete cover depth and existing rebar diameter."
    },
    {
      step: "06",
      title: "Carbonation Depth & Phenolphthalein Assay",
      description: "Chemical indicator spray determining alkaline loss and carbonation front penetration towards the steel rebar matrix."
    },
    {
      step: "07",
      title: "Cross-Hole Sonic Logging (CHSL / CHUM)",
      description: "Water-filled access tube ultrasonic profiling detecting honeycombing, soil intrusion, and necking in deep pile shafts."
    },
    {
      step: "08",
      title: "Core Extraction & Laboratory Compressive Strength",
      description: "Precision diamond core drilling and laboratory crushing to calibrate non-destructive acoustic readings."
    }
  ];

  // Sub-section 2: Deep Foundation & Bridge Diagnostics
  const foundationBridgeMethods = [
    {
      step: "01",
      title: "Span Proof Load & Deflection Testing",
      description: "Static vehicular proof load test conforming to IRC:SP:51 with multi-point electronic displacement tracking."
    },
    {
      step: "02",
      title: "Span Deflection & 24-Hour Elastic Recovery Verification",
      description: "Dial gauge and LVDT displacement monitoring evaluating structural stiffness and elastic rebound performance."
    },
    {
      step: "03",
      title: "Vibration & Dynamic Response Monitoring",
      description: "High-sensitivity triaxial accelerometers capturing natural modal frequencies and dynamic traffic damping."
    },
    {
      step: "04",
      title: "Distress, Cracking & Spalling Root-Cause Analysis",
      description: "Crack width optical microscope surveying and diagnostic mapping identifying shear vs flexural distress mechanisms."
    },
    {
      step: "05",
      title: "Structural Capacity Assessment & Retrofitting Solutions",
      description: "Analytical capacity re-rating, CFRP strengthening design, and jacketing advisory for extending structural service life."
    }
  ];

  const softwareTools = [
    {
      name: "PIT-W",
      purpose: "Low strain pile integrity acoustic wave velocity signal processing & impedance modeling",
      icon: Activity
    },
    {
      name: "CHA-W",
      purpose: "Cross-hole sonic logging tomographic imaging and pile shaft defect localization",
      icon: Waves
    },
    {
      name: "Proceq Live",
      purpose: "Rebound hammer and digital cover meter automated cloud field data acquisition",
      icon: Gauge
    }
  ];

  const compliantStandards = [
    {
      code: "IS 13311 (Parts 1 & 2)",
      title: "Non-Destructive Testing of Concrete (UPV & Rebound Hammer)",
      type: "Indian Standard"
    },
    {
      code: "IS 14893",
      title: "Non-Destructive Integrity Testing of Piles (Low Strain Method)",
      type: "Indian Standard"
    },
    {
      code: "ASTM D5882",
      title: "Low Strain Impact Integrity Testing of Deep Foundations",
      type: "ASTM International"
    },
    {
      code: "ASTM D6760",
      title: "Integrity Testing of Deep Foundations by Ultrasonic Crosshole Testing",
      type: "ASTM International"
    },
    {
      code: "ASTM C876",
      title: "Half-Cell Potentials of Uncoated Reinforcing Steel in Concrete",
      type: "ASTM International"
    },
    {
      code: "IRC:SP:51",
      title: "Guidelines for Load Testing of Highway Bridges (Proof Load & Deflection)",
      type: "Indian Roads Congress"
    }
  ];

  const featuredProjects = service.relatedProjectSlugs
    ?.map(pSlug => PROJECTS.find(p => p.slug === pSlug || p.id === pSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p)) || PROJECTS.slice(0, 3);

  return (
    <div className="pt-[72px] bg-white">
      <SEOHead
        customSeo={{
          title: "NDT & Structural Integrity Assessment | Pile Integrity & Bridge Load Testing | SIMCON Technology",
          description: "NABL-accredited Non-Destructive Testing (NDT) across India: Ultrasonic Pulse Velocity (UPV), Rebound Hammer, Low Strain Pile Integrity (PIT), Cross-Hole Sonic Logging, Half-Cell Potential, and Bridge Proof Load Testing.",
          canonical: "https://www.simcon.co.in/services/ndt-structural-integrity"
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
              src="/assets/services/ndt/rebound-hammer-concrete-testing.jpeg"
              alt="SIMCON Concrete Rebound Hammer NDT Testing"
              className="w-full h-full object-cover object-right sm:object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#062B5C] via-[#062B5C]/90 lg:via-[#062B5C]/20 to-[#062B5C]/60 lg:to-transparent pointer-events-none" />
          </div>

          <div className="hidden lg:flex absolute top-8 sm:top-10 right-8 sm:right-12 xl:right-16 flex-col items-start z-20 pointer-events-none select-none">
            <div className="border-l-2 border-slate-700/70 pl-3 font-mono text-[10px] xl:text-[11px] font-bold tracking-[0.25em] text-slate-900 leading-relaxed uppercase">
              ASSURING<br />STRUCTURAL<br />LONGEVITY<br />THROUGH<br />NDT
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
              <span className="text-slate-200">NDT &amp; Structural Integrity</span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-slate-300 uppercase">
                DISCIPLINE 03 • STRUCTURAL DIAGNOSTICS &amp; NDT
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[58px] font-extrabold font-display text-white tracking-tight leading-[1.08] break-words">
              NDT &amp; Structural Integrity Assessment
            </h1>

            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-200 leading-relaxed font-normal max-w-lg">
              Non-destructive testing, deep foundation pile integrity evaluation, highway bridge proof load testing, and structural health diagnostics on high-consequence infrastructure.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-medium text-slate-200">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-300 shrink-0" />
                <span>NABL Scope &amp; IRC:SP:51</span>
              </div>
              <span className="w-px h-3.5 bg-white/25 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-300 shrink-0" />
                <span>Pile PIT / CHSL &amp; UPV</span>
              </div>
              <span className="w-px h-3.5 bg-white/25 hidden sm:block" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0" />
                <span>Pan-India Field Diagnostics</span>
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
                Methodology &amp; Structural Audit Workflow<span className="text-[#1268B3]">.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#536271] leading-relaxed pt-1">
                From initial visual distress mapping and acoustic sensor zeroing to full-scale bridge proof loading and capacity re-rating, our diagnostic framework delivers definitive forensic data without compromising structural safety.
              </p>
            </div>

            <a
              href="#ndt-disciplines"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-[#1268B3] hover:text-[#062B5C] transition-colors self-start md:self-end shrink-0 group py-1"
            >
              <span>Explore Diagnostic Programs</span>
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
          3. TWO DISTINCT SUB-SECTIONS (2-Column Card Grid - No Slash, No Popup Image)
          ========================================================================= */}
      <section id="ndt-disciplines" className="scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-12 sm:space-y-16">

          {/* SUB-SECTION 1: Non-Destructive Testing (Concrete & Masonry) */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase mb-1">
                DISCIPLINE 01 • IN-SITU PHYSICAL &amp; ACOUSTIC DIAGNOSTICS
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#062B5C] tracking-tight">
                Non-Destructive Testing (Concrete &amp; Masonry)
              </h2>
              <p className="text-xs sm:text-sm lg:text-[13px] xl:text-[14.5px] text-slate-500 leading-relaxed lg:whitespace-nowrap font-normal mt-2">
                NABL-accredited diagnostic testing evaluating in-situ compressive uniformity, rebar corrosion probability, cover thickness, and internal honeycombing without structural destruction.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-5 w-full">
              {concreteNdtMethods.map((method) => (
                <div
                  key={method.step}
                  className="w-full bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs hover:shadow-md hover:border-[#1268B3]/40 transition-all duration-300 flex items-start sm:items-center gap-3.5 sm:gap-4 text-left group"
                >
                  <div className="w-11 h-10 sm:w-13 sm:h-11 rounded-lg bg-[#EEF5FC] border border-[#D9E8F7] flex items-center justify-center font-mono font-bold text-base sm:text-lg text-[#062B5C] shrink-0 group-hover:bg-[#1268B3] group-hover:text-white group-hover:border-[#1268B3] transition-colors shadow-2xs mt-0.5 sm:mt-0">
                    {method.step}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-snug">
                      {method.title}
                    </h3>
                    <p className="text-xs text-[#536271] leading-relaxed mt-1">
                      {method.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SUB-SECTION 2: Deep Foundation & Bridge Load Diagnostics */}
          <div className="space-y-6 sm:space-y-8 pt-4 border-t border-slate-100">
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase mb-1">
                DISCIPLINE 02 • STRUCTURAL HEALTH &amp; LOAD PROOFING
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#062B5C] tracking-tight">
                Deep Foundation &amp; Bridge Load Diagnostics
              </h2>
              <p className="text-xs sm:text-sm lg:text-[13px] xl:text-[14.5px] text-slate-500 leading-relaxed lg:whitespace-nowrap font-normal mt-2">
                Specialized proof load verification conforming to IRC:SP:51, ultrasonic deep shaft integrity, dynamic vibration response, and structural retrofitting advisories.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-5 w-full">
              {foundationBridgeMethods.map((method) => (
                <div
                  key={method.step}
                  className="w-full bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs hover:shadow-md hover:border-[#1268B3]/40 transition-all duration-300 flex items-start sm:items-center gap-3.5 sm:gap-4 text-left group"
                >
                  <div className="w-11 h-10 sm:w-13 sm:h-11 rounded-lg bg-[#EEF5FC] border border-[#D9E8F7] flex items-center justify-center font-mono font-bold text-base sm:text-lg text-[#062B5C] shrink-0 group-hover:bg-[#1268B3] group-hover:text-white group-hover:border-[#1268B3] transition-colors shadow-2xs mt-0.5 sm:mt-0">
                    {method.step}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-snug">
                      {method.title}
                    </h3>
                    <p className="text-xs text-[#536271] leading-relaxed mt-1">
                      {method.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. NDT PROCEDURES & DIAGNOSTIC APPARATUS SLIDESHOW (Image Carousel)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-18 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] tracking-tight">
              Diagnostic Testing Procedures &amp; Apparatus Slideshow
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Continuous 4-up automatic slideshow of ultrasonic concrete probes, sonic pile logging apparatus, and full-scale bridge proof load reaction setups.
            </p>
          </div>

          <NdtTestingCarousel />
        </div>
      </section>

      {/* =========================================================================
          6. DIAGNOSTIC SOFTWARE & DATA ACQUISITION PLATFORMS (Split-Screen Layout matching Image 2)
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
                Calibrated acoustic waveform analysis, sonic logging tomographic reconstruction, and digital sensor recording consoles.
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
              Non-destructive testing, foundation pile integrity, and bridge load verifications executed in strict accordance with IS, ASTM, and IRC codes.
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
          8. FEATURED NDT CASE STUDIES
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-8 sm:space-y-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C] tracking-tight">
                Featured Structural Diagnostics Case Studies
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
                    <span>Read Structural Audit</span>
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
              Require NDT Testing or Structural Integrity Audits?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Contact our NDT specialists for immediate mobilization across bridge spans, metro piers, high-rise buildings, and industrial plants pan-India.
            </p>
          </div>

          <Link
            to="/contact?service=ndt-structural-integrity"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-[#062B5C] font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shrink-0 shadow-md w-full sm:w-auto"
          >
            <span>REQUEST NDT QUOTATION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

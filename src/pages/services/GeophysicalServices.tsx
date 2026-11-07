import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { SEOHead } from '@/components/common/SEOHead';
import { GeophysicalTestingCarousel } from '@/components/services/GeophysicalTestingCarousel';
import {
  ArrowRight,
  Target,
  MapPin,
  FileText,
  Award,
  Radio,
  Zap,
  Waves,
  Scan,
  Activity,
  Layers
} from 'lucide-react';

export const GeophysicalServices: React.FC = () => {
  const service = SERVICES.find(s => s.slug === 'geophysical-survey') || SERVICES[1];

  const methodologySteps = [
    {
      step: "01",
      title: "Survey Line Planning & Alignment Georeferencing",
      description: "GPS coordinates, topography check, and multi-channel geophone spread formulation.",
      icon: Target,
      bg: "#EEF5FC",
      text: "#1268B3",
      divider: "#C8DEF4",
    },
    {
      step: "02",
      title: "Sensor Spread & Electrode Deployment",
      description: "24/48-channel high-frequency geophone arrays and multi-electrode resistivity cables.",
      icon: Radio,
      bg: "#D9ECFB",
      text: "#1268B3",
      divider: "#B8DCF7",
    },
    {
      step: "03",
      title: "Wave Generation & Energy Pulsing",
      description: "Accelerated weight drops, sledgehammers, and high-frequency GPR antenna impulses.",
      icon: Waves,
      bg: "#BCE0FA",
      text: "#0A5094",
      divider: "#98CAF2",
    },
    {
      step: "04",
      title: "Dispersion & Time-Travel Signal Acquisition",
      description: "Digital acquisition consoles capturing P-wave and Rayleigh surface wave records.",
      icon: Zap,
      bg: "#4A9BE8",
      text: "#FFFFFF",
      divider: "rgba(255,255,255,0.4)",
    },
    {
      step: "05",
      title: "2D/3D Tomographic Inversion Modeling",
      description: "GeoGiga & IGIS inversion algorithms converting wave times into shear wave (Vs30) & resistivity profiles.",
      icon: Layers,
      bg: "#1268B3",
      text: "#FFFFFF",
      divider: "rgba(255,255,255,0.4)",
    },
    {
      step: "06",
      title: "Lithological & Geotechnical Correlation",
      description: "Borehole cross-correlation, cavity identification, rippability charts, and certified reports.",
      icon: FileText,
      bg: "#062B5C",
      text: "#FFFFFF",
      divider: "rgba(255,255,255,0.3)",
    },
  ];

  const explorationMethods = [
    {
      step: "01",
      title: "Multichannel Analysis of Surface Waves (MASW)",
      description: "Rayleigh surface wave dispersion curve inversion for 2D shear wave velocity (Vs30) profiles and seismic site classification."
    },
    {
      step: "02",
      title: "Seismic Refraction Test (SRT)",
      description: "P-wave velocity tomographic profiling for bedrock depth, rippability for mechanical excavation, and geological fault delineation."
    },
    {
      step: "03",
      title: "Crosshole Seismic Test (CHST)",
      description: "Borehole-to-borehole acoustic pulse transit time for high-resolution in-situ compression and shear wave speeds."
    },
    {
      step: "04",
      title: "Downhole Seismic Test (DHT)",
      description: "Surface impulse source with borehole triaxial geophone receiver array for vertical velocity stratification."
    },
    {
      step: "05",
      title: "Electrical Resistivity Tomography – 2D & 3D ERT Survey",
      description: "Multi-electrode apparent resistivity inversion mapping of lithology, groundwater aquifers, saline intrusion, and fracture zones."
    },
    {
      step: "06",
      title: "Vertical Electrical Sounding (VES)",
      description: "Schlumberger electrode array for 1D vertical electrical resistivity stratification."
    },
    {
      step: "07",
      title: "Ground Penetrating Radar Test (GPR)",
      description: "High-frequency electromagnetic reflection imaging to detect utility networks, voids/cavities, and asphalt pavement thickness."
    },
    {
      step: "08",
      title: "Thermal Resistivity Test",
      description: "Transient needle probe method for soil thermal conductivity and thermal runaway resistance for underground power cables."
    },
    {
      step: "09",
      title: "Borehole Deviation Test",
      description: "Gyroscopic/magnetic borehole inclinometer profiling of vertical alignment, drift, and spatial trajectory of deep boreholes."
    },
    {
      step: "10",
      title: "Geo-Mapping – Open Pit Foundation",
      description: "Photogrammetric and scanline structural discontinuity mapping for rock slope stability and open-pit bench design."
    }
  ];

  const softwareTools = [
    {
      name: "GeoGiga Seismic Pro",
      purpose: "Seismic refraction & surface wave dispersion curve inversion",
      icon: Waves
    },
    {
      name: "Object Mapper",
      purpose: "GPR post-processing, utility trace extraction, and 3D subsurface imaging",
      icon: Scan
    },
    {
      name: "IGIS",
      purpose: "Electrical Resistivity Tomography (ERT) and VES 2D/3D inversion processing",
      icon: Zap
    },
    {
      name: "Thermtest",
      purpose: "Thermal conductivity and soil thermal resistivity data analysis",
      icon: Activity
    },
    {
      name: "Lakkolit",
      purpose: "Downhole and crosshole seismic wave travel-time processing",
      icon: Radio
    }
  ];

  const compliantStandards = [
    {
      code: "ASTM D5777",
      title: "Subsurface Investigation using Seismic Refraction",
      type: "ASTM International"
    },
    {
      code: "ASTM D4428",
      title: "Crosshole Seismic Testing for Vp & Vs Velocities",
      type: "ASTM International"
    },
    {
      code: "ASTM D6432",
      title: "Surface Ground Penetrating Radar (GPR) Mapping",
      type: "ASTM International"
    },
    {
      code: "IS 15681",
      title: "Guidelines for Subsurface Investigation by Seismic Refraction",
      type: "Indian Standard"
    },
    {
      code: "IS 1893",
      title: "Criteria for Earthquake Resistant Design (Site Classification)",
      type: "Indian Standard"
    },
    {
      code: "IEEE 442",
      title: "Soil Thermal Resistivity Measurements for Power Cables",
      type: "IEEE Standard"
    }
  ];

  const featuredProjects = service.relatedProjectSlugs
    ?.map(pSlug => PROJECTS.find(p => p.slug === pSlug || p.id === pSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p)) || PROJECTS.slice(0, 3);

  return (
    <div className="pt-[72px] bg-white">
      <SEOHead
        customSeo={{
          title: "Geophysical Survey Services | MASW, ERT & GPR Utility Mapping | SIMCON Technology",
          description: "Non-invasive subsurface geophysics across India: MASW 2D/3D shear wave profiling, Seismic Refraction Tomography (SRT), Crosshole/Downhole tests, ERT, GPR utility mapping, and thermal resistivity.",
          canonical: "https://www.simcon.co.in/services/geophysical-survey"
        }}
      />

      {/* =========================================================================
          1. HERO HEADER SECTION (Seamless Diagonal Full-Bleed CAD Split-Screen)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#062B5C] text-white min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] xl:w-[60%] h-full z-0 overflow-hidden pointer-events-none">
          <div
            className="w-full h-full relative [clip-path:none] lg:[clip-path:polygon(12%_0,100%_0,100%_100%,26%_100%)]"
          >
            <img
              src="/assets/services/geophysical/masw-seismic-imaging-2d.png"
              alt="SIMCON MASW 2D Seismic Imaging Profile"
              className="w-full h-full object-cover object-right sm:object-center opacity-35 lg:opacity-100 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#062B5C] via-[#062B5C]/90 lg:via-[#062B5C]/20 to-[#062B5C]/60 lg:to-transparent pointer-events-none" />
          </div>

          <div className="hidden lg:flex absolute top-8 sm:top-10 right-8 sm:right-12 xl:right-16 flex-col items-start z-20 pointer-events-none select-none">
            <div className="border-l-2 border-slate-700/70 pl-3 font-mono text-[10px] xl:text-[11px] font-bold tracking-[0.25em] text-slate-900 leading-relaxed uppercase">
              DECODING<br />SUBSURFACE<br />THROUGH<br />WAVE<br />DYNAMICS
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
            <nav className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-slate-300 overflow-x-auto scrollbar-none py-1 whitespace-nowrap" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-400">&gt;</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="text-slate-400">&gt;</span>
              <span className="text-slate-200">Geophysical Survey</span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.18em] sm:tracking-[0.2em] text-slate-300 uppercase">
                DISCIPLINE 02 • SUBSURFACE GEOPHYSICS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[58px] font-extrabold font-display text-white tracking-tight leading-[1.08] break-words">
              Geophysical Survey
            </h1>

            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-200 leading-relaxed font-normal max-w-lg">
              Non-invasive subsurface imaging, seismic profiling, electrical resistivity, and ground penetrating radar delivering continuous cross-sectional strata models without excavation.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] sm:text-xs font-medium text-slate-200">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-300 shrink-0" />
                <span>ASTM / IS / IEEE Standards</span>
              </div>
              <span className="w-px h-3.5 bg-white/25 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-300 shrink-0" />
                <span>10 Non-Invasive Exploration Methods</span>
              </div>
              <span className="w-px h-3.5 bg-white/25 hidden sm:block" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0" />
                <span>Rapid Pan-India Mobilization</span>
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
                Methodology &amp; Tomographic Inversion Workflow<span className="text-[#1268B3]">.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#536271] leading-relaxed pt-1">
                By measuring wave velocity, electrical conductivity, and dielectric permittivity across continuous arrays, SIMCON constructs continuous subsurface stratigraphic sections, identifying fault lines, cavities, buried utilities, and bedrock depth.
              </p>
            </div>

            <a
              href="#geophysical-methods"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-[#1268B3] hover:text-[#062B5C] transition-colors self-start md:self-end shrink-0 group py-1"
            >
              <span>Explore 10 Exploration Methods</span>
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
          3. 10 SPECIALIZED NON-INVASIVE EXPLORATION METHODS (Option 4 Refined Layout)
          ========================================================================= */}
      <section id="geophysical-methods" className="scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-8 sm:space-y-10">
          {/* Header block (without top-right wavy lines) */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase mb-1">
              GEOPHYSICAL SURVEY SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#062B5C] tracking-tight">
              10 Specialized Non-Invasive Exploration Methods
            </h2>
            <p className="text-xs sm:text-sm lg:text-[13px] xl:text-[14.5px] text-slate-500 leading-relaxed lg:whitespace-nowrap font-normal mt-2">
              Advanced acoustic, electromagnetic, and electrical tomography techniques executed by certified geophysicists in strict accordance with international standards.
            </p>
          </div>

          {/* 10 Methods Grid (2 columns matching attached design) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 w-full">
            {explorationMethods.map((method) => (
              <div
                key={method.step}
                className="w-full bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs hover:shadow-md hover:border-[#1268B3]/40 transition-all duration-300 flex items-start sm:items-center justify-between gap-3.5 sm:gap-4 text-left group"
              >
                {/* Left Number + Details */}
                <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
                  {/* Number Badge */}
                  <div className="w-11 h-10 sm:w-13 sm:h-11 rounded-lg bg-[#EEF5FC] border border-[#D9E8F7] flex items-center justify-center font-mono font-bold text-base sm:text-lg text-[#062B5C] shrink-0 group-hover:bg-[#1268B3] group-hover:text-white group-hover:border-[#1268B3] transition-colors shadow-2xs">
                    {method.step}
                  </div>

                  {/* Text Details */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-snug">
                      {method.title}
                    </h3>
                    <p className="text-xs text-[#536271] leading-relaxed mt-1">
                      {method.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. GEOPHYSICAL TESTING PROCEDURES & APPARATUS SLIDESHOW (Image Carousel)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] tracking-tight">
              Geophysical Acquisition &amp; Tomographic Profiling Slideshow
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Continuous 4-up automatic slideshow of multi-channel seismic geophone spreads, ERT resistivity arrays, and 2D tomographic depth profiles with testing labels and governing standards.
            </p>
          </div>

          <GeophysicalTestingCarousel />
        </div>
      </section>

      {/* =========================================================================
          6. GEOPHYSICAL INVERSION SOFTWARE PLATFORMS (Split-Screen Layout matching Image 2)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex flex-col lg:flex-row lg:items-center">

            {/* Left Column: Heading & Description */}
            <div className="lg:w-[28%] xl:w-[25%] 2xl:w-[22%] flex-shrink-0 pr-0 lg:pr-8 2xl:pr-10 pb-8 lg:pb-0 border-b lg:border-b-0 lg:border-r border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C] tracking-tight">
                Software Tools &amp;<br className="hidden lg:inline" /> Numerical Inversion Platforms
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-3 max-w-md lg:max-w-none">
                Proprietary and international seismic wave inversion algorithms converting raw travel-times into precise subsurface lithological models.
              </p>
            </div>

            {/* Right Side: 5 Tool Columns with Dividers */}
            <div className="lg:w-[72%] xl:w-[75%] 2xl:w-[78%] flex-1 pt-8 lg:pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x divide-slate-200">
                {softwareTools.map((tool) => {
                  const IconComp = tool.icon;
                  return (
                    <div
                      key={tool.name}
                      className="group px-3 sm:px-4 xl:px-4 2xl:px-6 text-center flex flex-col items-center justify-start"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EEF5FC] border border-[#D9E8F7] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#E2F0FD] group-hover:border-[#C4DEF7] transition-all duration-300 shadow-2xs">
                        <IconComp className="w-6 h-6 sm:w-7 sm:h-7 text-[#1268B3]" />
                      </div>
                      <h3 className="font-bold font-display text-sm sm:text-base text-[#062B5C] mb-2 leading-tight">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed max-w-[210px] mx-auto">
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
          7. STANDARDS & CODES ACCREDITATION (Option 4 - Full-Width Card Tiles with Blue Notch)
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full space-y-8 sm:space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#062B5C] tracking-tight">
              Compliant Standards &amp; Test Codes
            </h2>
            <p className="text-xs sm:text-sm lg:text-[13px] xl:text-[14.5px] text-slate-500 leading-relaxed lg:whitespace-nowrap font-normal mt-2">
              Geophysical testing, sensor calibrations, and tomographic inversion conducted in accordance with applicable ASTM, IS, and IEEE international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 xl:gap-6 w-full">
            {compliantStandards.map(std => (
              <div
                key={std.code}
                className="group relative bg-white border border-slate-200/90 rounded-xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-[#1268B3]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[96px] sm:min-h-[108px]"
              >
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <span className="font-mono text-base sm:text-lg font-bold text-[#062B5C] group-hover:text-[#1268B3] transition-colors tracking-tight">
                    {std.code}
                  </span>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-400 uppercase bg-slate-50 border border-slate-200/70 px-2 py-0.5 rounded">
                    {std.type}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans line-clamp-2 group-hover:text-slate-900 transition-colors pr-6">
                  {std.title}
                </p>

                {/* Option 4 Signature Blue Accent Corner Notch */}
                <svg
                  className="absolute bottom-0 right-0 w-7 h-7 sm:w-8 sm:h-8 text-[#1268B3] pointer-events-none transition-transform duration-300 group-hover:scale-110"
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
          8. FEATURED GEOPHYSICAL CASE STUDIES
          ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-8 sm:space-y-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C] tracking-tight">
                Featured Geophysical Case Studies
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
                    <span>Read Geophysical Investigation</span>
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
              Need Non-Invasive Subsurface Mapping for Your Site?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Schedule MASW 2D/3D seismic profiling, electrical resistivity tomography, or underground utility GPR scanning across linear rail, highway, and plant projects.
            </p>
          </div>

          <Link
            to="/contact?service=geophysical-survey"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-[#062B5C] font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors shrink-0 shadow-md w-full sm:w-auto"
          >
            <span>SCHEDULE GEOPHYSICAL SURVEY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

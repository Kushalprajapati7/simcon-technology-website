import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/data/services';
import { SEOHead } from '@/components/common/SEOHead';
import {
  Layers,
  Activity,
  Building2,
  FlaskConical,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

// Exact 4 Flagship Service Pillars
const FOUR_SERVICE_SLUGS = [
  'geotechnical-services',
  'geophysical-survey',
  'ndt-structural-integrity',
  'material-testing-services'
] as const;

// Key Technical Rig & Equipment Badges for the 4 Disciplines
const DISCIPLINE_EXTRAS: Record<string, {
  equipmentLabel: string;
  governingCodes: string[];
  keyHardware: string[];
  fieldScopePills: string[];
  buttonText: string;
}> = {
  'geotechnical-services': {
    equipmentLabel: 'HYDRAULIC ROTARY DIAMOND RIG • IN-SITU PENETRATION',
    governingCodes: ['IS 1892', 'IS 2131', 'IS 2720', 'ASTM D1586', 'IS 1888'],
    keyHardware: ['Hydraulic Rotary Diamond Core Rigs', 'Energy-Calibrated SPT Setups', 'Digital Triaxial Stress Apparatus', 'Pressuremeter Equipment'],
    fieldScopePills: ['Deep Rotary Rock Coring', 'Energy-Calibrated SPT', 'Shelby Undisturbed Sampling', 'Automated Triaxial Shear', 'Plate Load Testing', 'Menard Pressuremeter'],
    buttonText: 'Explore Geotechnical Services Hub'
  },
  'geophysical-survey': {
    equipmentLabel: '24-CHANNEL SEISMOGRAPH • DUAL-FREQUENCY GPR RADAR',
    governingCodes: ['ASTM D5777', 'ASTM G57', 'ASTM D6432', 'IS 15736', 'FAA AC 150'],
    keyHardware: ['Geode 24-Channel Digital Seismograph', 'Multi-Electrode Terrameter System', 'High-Frequency GPR Antenna', 'Thermal Resistivity Analyzer'],
    fieldScopePills: ['MASW Surface Wave Velocity (Vs30)', 'Seismic Refraction Tomography (SRT)', '2D & 3D Electrical Resistivity (ERT)', 'Ground Penetrating Radar (GPR)', 'Crosshole / Downhole Seismic', 'Thermal Resistivity Testing'],
    buttonText: 'Explore Geophysical Survey Hub'
  },
  'ndt-structural-integrity': {
    equipmentLabel: 'HIGH-STRAIN PDA RIG • CROSS-HOLE SONIC CHSL ANALYZER',
    governingCodes: ['ASTM D4945', 'ASTM D6760', 'IS 2911 (Part 4)', 'IS 13311', 'IS 516'],
    keyHardware: ['Calibrated PDA Transducer Arrays', 'CHUM Ultrasonic Cross-Hole Sonic System', 'Digital Rebound Hammers & UPV Units', 'Profometer Rebar Scanners'],
    fieldScopePills: ['High-Strain Dynamic Pile Testing (PDA)', 'Cross-Hole Sonic Logging (CHSL)', 'Low Strain Integrity (PIT)', 'Ultrasonic Pulse Velocity (UPV)', 'Rebar Corrosion Half-Cell Potential', 'Bridge Proof Load Testing'],
    buttonText: 'Explore NDT Diagnostics & Pile Hub'
  },
  'material-testing-services': {
    equipmentLabel: '2000 kN SERVO-HYDRAULIC UTM • NABL DURABILITY LAB',
    governingCodes: ['IS 516', 'IS 1786', 'IS 2386', 'IS 4031', 'ASTM C1202'],
    keyHardware: ['2000 kN Servo-Hydraulic UTM for Rebars', 'Automated Digital Compression Machines', 'RCPT & RCMT Migration Cells', 'Spectrophotometer & Chemical Hoods'],
    fieldScopePills: ['Concrete Compressive & Durability (RCPT)', 'Rebar Tensile Yield & Bend/Re-bend', 'Aggregate Grading & Soundness', 'Bitumen Rheology & Marshall Stability', 'Analytical Wet Chemistry across 6 Matrices', 'Cement Setting & Blaine Fineness'],
    buttonText: 'Explore Material Testing & Chemical Hub'
  }
};

// Interactive Testing Parameters Matrix Data (Strictly mapped across the 4 services)
interface MatrixRow {
  testName: string;
  code: string;
  sampleOrMedium: string;
  application: string;
}

const TESTING_MATRIX: Record<number, { title: string; subtitle: string; rows: MatrixRow[] }> = {
  0: {
    title: 'Geotechnical & Soil Mechanics Matrix',
    subtitle: 'NABL laboratory geomechanical testing & in-situ subsurface borehole parameters',
    rows: [
      { testName: 'Standard Penetration Test (SPT)', code: 'IS 2131 / ASTM D1586', sampleOrMedium: 'In-situ Borehole Soil', application: 'N-value, relative density & allowable bearing pressure' },
      { testName: 'Diamond Rotary Core Drilling', code: 'IS 1892 / IS 6926', sampleOrMedium: 'Nx/Bx Intact Rock Core', application: 'RQD, core recovery & lithological stratigraphy' },
      { testName: 'Direct Shear & Vane Shear Test', code: 'IS 2720 (Part 13 & 30)', sampleOrMedium: 'Undisturbed Shelby Tubes', application: 'Cohesion (c) and angle of internal friction (φ)' },
      { testName: 'Triaxial Compression (UU / CU / CD)', code: 'IS 2720 (Part 11 & 12)', sampleOrMedium: 'Remolded / Undisturbed Soil', application: 'Effective shear strength parameters under pore pressure' },
      { testName: 'One-Dimensional Consolidation', code: 'IS 2720 (Part 15)', sampleOrMedium: 'Cohesive Silt & Clay', application: 'Compression index (Cc) & settlement prediction' },
      { testName: 'Plate Load Test (Static Modulus)', code: 'IS 1888 / IS 5249', sampleOrMedium: 'Subgrade & Foundation Bed', application: 'Modulus of subgrade reaction (k) & safe bearing capacity' },
      { testName: 'Menard Pressuremeter Test', code: 'IS 1892 / ASTM D4719', sampleOrMedium: 'In-situ Borehole Cavity', application: 'Menard modulus (Em) & limit pressure (Pl)' },
      { testName: 'Unconfined Compressive Strength (UCS)', code: 'IS 2720 (Part 10) / IS 9143', sampleOrMedium: 'Intact Cylindrical Rock Core', application: 'Crushing strength & rock mass classification' }
    ]
  },
  1: {
    title: 'Geophysical Subsurface Exploration Matrix',
    subtitle: 'Non-destructive acoustic, seismic, electromagnetic, and radar profiling',
    rows: [
      { testName: 'Multichannel Analysis of Surface Waves (MASW)', code: 'ASTM D5777 / IBC 2021', sampleOrMedium: 'Surface Geophone Spread', application: '1D/2D Shear wave velocity (Vs30) & seismic site class' },
      { testName: 'Seismic Refraction Tomography (SRT)', code: 'ASTM D5777 / IS 15736', sampleOrMedium: 'Linear Geophone Array', application: 'Bedrock profile, rippability & overburden thickness' },
      { testName: '2D & 3D Electrical Resistivity (ERT)', code: 'ASTM G57 / IS 15736', sampleOrMedium: 'Multi-Electrode Earth Array', application: 'Lithological boundary, aquifer & cavity detection' },
      { testName: 'Ground Penetrating Radar (GPR)', code: 'ASTM D6432 / FAA AC 150', sampleOrMedium: 'Pavement / Concrete / Earth', application: 'Subsurface utilities, void cavities & rebar spacing' },
      { testName: 'Crosshole / Downhole Seismic Testing', code: 'ASTM D4428 / ASTM D7400', sampleOrMedium: 'Cased In-Situ Boreholes', application: 'True in-situ dynamic Young’s modulus & Poisson’s ratio' },
      { testName: 'Thermal Resistivity Survey', code: 'IEEE 442 / ASTM D5334', sampleOrMedium: 'Subsurface Soil & Backfill', application: 'Underground HV cable corridor heat dissipation' }
    ]
  },
  2: {
    title: 'NDT & Deep Foundations Diagnostic Matrix',
    subtitle: 'Acoustic, wave-equation, and dynamic load structural verification',
    rows: [
      { testName: 'High Strain Dynamic Pile Load Test (PDA)', code: 'ASTM D4945 / IS 2911 (Part 4)', sampleOrMedium: 'Bored / Driven Piles', application: 'Ultimate bearing capacity, skin friction & CAPWAP signal match' },
      { testName: 'Cross-Hole Sonic Logging (CHSL)', code: 'ASTM D6760 / IS 14893', sampleOrMedium: 'Water-Filled Access Tubes', application: '3D concrete uniformity, necking & pile shaft anomalies' },
      { testName: 'Low Strain Pile Integrity Test (PIT)', code: 'ASTM D5882 / IS 14893', sampleOrMedium: 'Finished Pile Head', application: 'Pile continuity, length verification & toe reflection' },
      { testName: 'Ultrasonic Pulse Velocity (UPV)', code: 'IS 13311 (Part 1) / ASTM C597', sampleOrMedium: 'Structural Concrete Elements', application: 'Homogeneity, internal cracks & honeycombing mapping' },
      { testName: 'Digital Rebound Hammer Test', code: 'IS 13311 (Part 2) / ASTM C805', sampleOrMedium: 'Hardened Concrete Surface', application: 'Comparative surface hardness & compressive estimation' },
      { testName: 'Half-Cell Potential Corrosion Survey', code: 'ASTM C876', sampleOrMedium: 'Reinforced Concrete Beams/Piers', application: 'Electrochemical probability of active rebar corrosion' },
      { testName: 'Bridge Span Proof Load Testing', code: 'IRC:SP:51 / IRC:SP:37', sampleOrMedium: 'Superstructure Spans', application: 'Elastic deflection, load recovery & structural soundness' }
    ]
  },
  3: {
    title: 'Construction Materials & Chemical Matrix',
    subtitle: 'NABL-certified physical, mechanical, and analytical chemical testing across 6 matrices',
    rows: [
      { testName: 'Concrete Compressive Strength (Cube/Core)', code: 'IS 516 / ASTM C39', sampleOrMedium: '150mm Cubes / Drilled Cores', application: 'Characteristic 7, 14 & 28-day crushing strength' },
      { testName: 'Rapid Chloride Penetration Test (RCPT)', code: 'ASTM C1202 / AASHTO T277', sampleOrMedium: '100mm Concrete Discs', application: 'Durability rating & chloride ion permeability resistance' },
      { testName: 'Steel Rebar Tensile, Yield & Bend Test', code: 'IS 1786 / ISO 6892-1', sampleOrMedium: 'TMT Thermo-Mechanically Treated Rebars', application: '0.2% Proof stress, ultimate tensile & elongation' },
      { testName: 'Aggregate Crushing, Impact & Abrasion', code: 'IS 2386 (Part 4) / ASTM C131', sampleOrMedium: 'Coarse Road / Concrete Aggregate', application: 'Mechanical toughness, Los Angeles abrasion & resistance' },
      { testName: 'Cement Physical & Setting Time Assays', code: 'IS 4031 / IS 269', sampleOrMedium: 'OPC, PPC & Slag Cement', application: 'Blaine fineness, initial/final setting & Le Chatelier expansion' },
      { testName: 'Bitumen Rheology & Marshall Stability', code: 'IS 73 / ASTM D6927', sampleOrMedium: 'VG-30/40 Bitumen & Asphalt Mix', application: 'Penetration, softening point, viscosity & flow value' },
      { testName: 'Analytical Water & Soil Chemical Assays', code: 'IS 3025 / IS 456 / IS 2720', sampleOrMedium: 'Construction Water & Soil Strata', application: 'Chloride, sulphate, pH, organic impurities & salinity' }
    ]
  }
};

// Client Authorities for Trust Ribbon
const CLIENT_AUTHORITIES = [
  { name: 'NHSRCL', fullName: 'High Speed Rail Bullet Train' },
  { name: 'L&T Construction', fullName: 'Heavy Civil Infrastructure' },
  { name: 'RVNL', fullName: 'Rail Vikas Nigam Limited' },
  { name: 'MPMRCL', fullName: 'Metro Rail Corporation' },
  { name: 'AAI', fullName: 'Airports Authority of India' },
  { name: 'NTPC', fullName: 'National Thermal Power Corp' },
  { name: 'Adani Group', fullName: 'Ports & Thermal Energy' },
  { name: 'Deendayal Port', fullName: 'Kandla Port Authority' }
];

export const Services: React.FC = () => {
  // Active Tab for the Interactive Testing Matrix (0: Geotech, 1: Geophys, 2: NDT, 3: Materials)
  const [activeMatrixTab, setActiveMatrixTab] = useState<number>(0);

  // Filter strictly to the 4 core service items in order
  const fourServices = FOUR_SERVICE_SLUGS.map(slug =>
    SERVICES.find(s => s.slug === slug)
  ).filter(Boolean);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="pt-[72px] bg-white min-h-screen">
      <SEOHead
        customSeo={{
          title: "Engineering Services & Testing Directory | SIMCON Technology",
          description: "Explore SIMCON's 4 NABL-accredited civil engineering disciplines: Geotechnical Investigation, Geophysical Surveys, NDT Structural Diagnostics, and Central Material Testing Laboratories.",
          canonical: "https://www.simcon.co.in/services"
        }}
      />

      {/* =========================================================================
          1. HERO HEADER (Blueprint CAD Grid + Operational Metrics Ribbon)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#062B5C] text-white">
        {/* CAD Grid Texture */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none z-0" />

        {/* Blueprint Linework */}
        <div className="absolute right-0 inset-y-0 w-1/2 pointer-events-none opacity-15 z-0 hidden lg:block">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none">
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="60%" cy="50%" r="220" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full py-8 sm:py-10 lg:py-12">
          <div className="max-w-5xl space-y-3.5 sm:space-y-4">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-slate-300 flex-wrap" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-400">&gt;</span>
              <span className="text-slate-200">Our Services</span>
            </nav>

            {/* Technical Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.18em] sm:tracking-[0.2em] text-sky-300 uppercase">
                ACCREDITED ENGINEERING &amp; IN-SITU EXPLORATION DIRECTORY
              </span>
            </div>

            {/* Title (Sleek 1-2 lines with wider max-w-5xl container) */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-extrabold font-display text-white tracking-tight leading-[1.15]">
              Specialized Geotechnical, Geophysical &amp; NDT Services
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-3xl">
              From rotary rock diamond coring and seismic wave velocity profiling to non-destructive bridge proof loading and NABL-accredited central materials laboratories—SIMCON delivers verified empirical parameters across 4 specialized civil engineering pillars.
            </p>

            {/* Operational Metrics Ribbon (Compact & Sleek) */}
            <div className="pt-1 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 max-w-2xl">
              <div className="bg-white/10 backdrop-blur-xs p-2 sm:p-2.5 rounded-lg border border-white/15">
                <span className="text-base sm:text-lg font-bold font-display text-white block">4</span>
                <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider block mt-0.5">Core Disciplines</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-2 sm:p-2.5 rounded-lg border border-white/15">
                <span className="text-base sm:text-lg font-bold font-display text-white block">580+</span>
                <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider block mt-0.5">Test Parameters</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-2 sm:p-2.5 rounded-lg border border-white/15">
                <span className="text-base sm:text-lg font-bold font-display text-white block">6,480+</span>
                <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider block mt-0.5">Projects Delivered</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-2 sm:p-2.5 rounded-lg border border-white/15">
                <span className="text-base sm:text-lg font-bold font-display text-white block">ISO/IEC</span>
                <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider block mt-0.5">17025 Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. STICKY QUICK-JUMP DISCIPLINE NAVIGATOR (Strictly the 4 Core Services)
          ========================================================================= */}
      <section className="py-2.5 sm:py-3.5 bg-white border-b border-slate-200 sticky top-[56px] sm:top-[64px] lg:top-[68px] xl:top-[72px] z-40 shadow-xs">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex items-center justify-between gap-3 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mr-1 hidden md:inline-block">
              Jump to Pillar:
            </span>
            {fourServices.map((srv, idx) => (
              <a
                key={srv!.id}
                href={`#${srv!.slug}`}
                className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-mono font-bold bg-slate-100 hover:bg-[#EEF5FC] hover:text-[#1268B3] text-[#062B5C] transition-all whitespace-nowrap flex items-center gap-1 sm:gap-1.5"
              >
                <span className="text-[#1268B3]">0{idx + 1}.</span>
                <span>{srv!.title.replace(' Services', '').replace(' and Structural Integrity Assessment', '')}</span>
              </a>
            ))}
          </div>

          <a
            href="#testing-matrix"
            className="text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 px-2 py-1.5 rounded-lg bg-blue-50/70 hover:bg-blue-100/70"
          >
            <span>Testing Matrix</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* =========================================================================
          3. THE 4 BESPOKE ARCHITECTURAL DISCIPLINE HUBS
          ========================================================================= */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#F8FAFC]">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-8 sm:space-y-10 lg:space-y-12">
          {fourServices.map((srv, idx) => {
            const extras = DISCIPLINE_EXTRAS[srv!.slug] || DISCIPLINE_EXTRAS['geotechnical-services'];
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={srv!.id}
                id={srv!.slug}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 scroll-mt-24 sm:scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Photographic Media Column (5 cols on lg) */}
                  <div
                    className={`lg:col-span-5 relative bg-slate-900 min-h-[220px] sm:min-h-[280px] lg:min-h-full overflow-hidden ${
                      isReversed ? 'lg:order-last' : ''
                    }`}
                  >
                    <img
                      src={srv!.heroImage}
                      alt={srv!.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 min-h-[220px] sm:min-h-[280px]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

                    {/* Architectural Crop Brackets */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-3.5 sm:w-4 h-3.5 sm:h-4 border-t-2 border-l-2 border-white/80 pointer-events-none" />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-3.5 sm:w-4 h-3.5 sm:h-4 border-t-2 border-r-2 border-white/80 pointer-events-none" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-3.5 sm:w-4 h-3.5 sm:h-4 border-b-2 border-l-2 border-white/80 pointer-events-none" />
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-3.5 sm:w-4 h-3.5 sm:h-4 border-b-2 border-r-2 border-white/80 pointer-events-none" />

                    {/* Top Discipline Tag */}
                    <div className="absolute top-3 sm:top-4 left-4 sm:left-6 z-10 flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-[#062B5C]/95 backdrop-blur-xs text-white text-[10px] font-mono font-bold rounded shadow-xs uppercase tracking-wider">
                        PILLAR 0{idx + 1}
                      </span>
                      <span className="px-2 py-0.5 bg-black/60 backdrop-blur-xs text-sky-200 text-[10px] font-mono rounded border border-white/20 uppercase">
                        ISO 17025
                      </span>
                    </div>

                    {/* Bottom Technical Equipment Overlay */}
                    <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 z-10">
                      <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider block drop-shadow-md">
                        {extras.equipmentLabel}
                      </span>
                    </div>
                  </div>

                  {/* Narrative & Capabilities Column (7 cols on lg) */}
                  <div className="lg:col-span-7 p-5 sm:p-7 lg:p-10 flex flex-col justify-between space-y-5 sm:space-y-6">
                    <div className="space-y-3.5 sm:space-y-4">
                      {/* Category & Badge Header */}
                      <div className="flex items-center gap-2.5">
                        <span className="p-2 rounded-lg bg-blue-50 text-[#1268B3]">
                          {getServiceIcon(srv!.iconName)}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#D71920] font-bold">
                          {srv!.category}
                        </span>
                      </div>

                      {/* Discipline Title */}
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-[#062B5C] tracking-tight leading-tight">
                        {srv!.title}
                      </h2>

                      {/* Full Narrative */}
                      <p className="text-xs sm:text-sm text-[#536271] leading-relaxed">
                        {srv!.fullDescription}
                      </p>

                      {/* Key Testing Capabilities Grid */}
                      <div className="pt-1 sm:pt-2">
                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-bold text-[#062B5C] block mb-2">
                          Accredited In-Situ &amp; Laboratory Methods:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {extras.fieldScopePills.map((scopeItem, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#EEF5FC] border border-[#D9E8F7] rounded-md text-[10px] sm:text-[11px] font-mono text-[#062B5C] font-medium"
                            >
                              {scopeItem}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Governing Standards Ribbon */}
                      <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold mr-0.5 sm:mr-1">
                          Applicable Codes:
                        </span>
                        {extras.governingCodes.map((code, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2 py-0.5 bg-slate-100 rounded text-[9px] sm:text-[10px] font-mono font-bold text-[#1268B3] border border-slate-200/80"
                          >
                            {code}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="text-[10px] sm:text-[11px] font-mono text-slate-400">
                        NABL ISO/IEC 17025 Accredited Laboratory Parameters
                      </div>

                      <Link
                        to={`/services/${srv!.slug}`}
                        className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#062B5C] hover:bg-[#1268B3] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors group shadow-xs w-full sm:w-auto text-center"
                      >
                        <span>{extras.buttonText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          4. INTERACTIVE TESTING CAPABILITY MATRIX (Live Technical Quick-Lookup)
          ========================================================================= */}
      <section id="testing-matrix" className="py-14 sm:py-18 bg-white border-t border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase block">
                NATIONAL TECHNICAL COMPLIANCE DIRECTORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#062B5C] tracking-tight">
                Interactive Testing Capability Matrix
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
                Explore empirical testing protocols, governing IS / ASTM standards, and field applications across SIMCON&apos;s 4 core accredited disciplines.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-[#1268B3] border border-blue-200/60">
                580+ Accredited Parameters
              </span>
            </div>
          </div>

          {/* Interactive Matrix Tab Switcher (Strictly 4 Tabs) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar border-b border-slate-200 scroll-smooth">
            {[
              { id: 0, title: 'Geotechnical & Soil Mechanics', icon: Layers },
              { id: 1, title: 'Geophysical Subsurface Profiling', icon: Activity },
              { id: 2, title: 'NDT & Deep Foundation Integrity', icon: Building2 },
              { id: 3, title: 'Construction Materials & Chemistry', icon: FlaskConical },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeMatrixTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveMatrixTab(tab.id)}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                    isActive
                      ? 'bg-[#062B5C] text-white shadow-xs'
                      : 'bg-slate-100 text-[#536271] hover:bg-[#EEF5FC] hover:text-[#1268B3]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Matrix Table */}
          <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-3.5 sm:p-5 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-sky-400 block">
                  {TESTING_MATRIX[activeMatrixTab].title}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-400">
                  {TESTING_MATRIX[activeMatrixTab].subtitle}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/10 text-slate-300 border border-white/20 self-start sm:self-auto">
                NABL ISO/IEC 17025 Compliant
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs min-w-[620px]">
                <thead>
                  <tr className="bg-slate-100 text-slate-500 font-mono text-[10px] uppercase tracking-wider border-b border-slate-200">
                    <th className="py-3 px-4 font-bold text-[#062B5C]">Test / Method Name</th>
                    <th className="py-3 px-4 font-bold text-[#062B5C]">Governing Standard</th>
                    <th className="py-3 px-4 font-bold text-[#062B5C]">Target Matrix / Medium</th>
                    <th className="py-3 px-4 font-bold text-[#062B5C]">Engineering Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 bg-white font-mono">
                  {TESTING_MATRIX[activeMatrixTab].rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-[#062B5C]">
                        {row.testName}
                      </td>
                      <td className="py-3.5 px-4 text-[#1268B3] font-semibold whitespace-nowrap">
                        {row.code}
                      </td>
                      <td className="py-3.5 px-4 text-[#536271]">
                        {row.sampleOrMedium}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 font-sans text-xs">
                        {row.application}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. NABL ACCREDITATION & QUALITY ASSURANCE TRACEABILITY
          ========================================================================= */}
      <section className="py-10 sm:py-12 bg-[#F8FAFC]">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="bg-gradient-to-r from-[#062B5C] via-[#0A3D7E] to-[#1268B3] rounded-2xl p-5 sm:p-7 lg:p-10 text-white shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-sky-200">
                    CENTRAL NABL ACCREDITED TESTING INFRASTRUCTURE
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-white">
                  Dual NABL Certificates: TC-13273 &amp; TC-5077
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl">
                  Every geotechnical borehole log, dynamic pile test curve, and material strength report is executed by certified testing engineers using NABL-calibrated equipment. Reports feature digital QR-coded verification to guarantee anti-tamper authenticity across client audits.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 justify-end">
                <Link
                  to="/about/accreditations"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#062B5C] hover:bg-slate-100 font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm text-center w-full sm:w-auto"
                >
                  <span>Inspect NABL Scope &amp; Certs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg border border-white/25 transition-colors text-center w-full sm:w-auto"
                >
                  <span>Request Testing Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CLIENT EPC & INFRASTRUCTURE AUTHORITY TRUST STRIP
          ========================================================================= */}
      <section className="py-10 sm:py-12 bg-white border-t border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-5 sm:space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#1268B3] uppercase">
              REPUTED NATIONAL AUTHORITIES &amp; EPC PARTNERS
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-display text-[#062B5C] tracking-tight">
              Approved Testing Partner for India&apos;s Marquee Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
            {CLIENT_AUTHORITIES.map((client, idx) => (
              <div
                key={idx}
                className="p-2.5 sm:p-3 rounded-xl border border-slate-200/80 bg-[#F8FAFC] hover:bg-[#EEF5FC] hover:border-[#1268B3]/40 transition-colors text-center flex flex-col justify-center min-h-[64px] sm:min-h-[70px]"
              >
                <span className="font-bold font-display text-xs sm:text-sm text-[#062B5C]">
                  {client.name}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 truncate mt-0.5">
                  {client.fullName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. BOTTOM CONSULTATION & RFP GATEWAY
          ========================================================================= */}
      <section className="bg-[#062B5C] py-12 sm:py-16 text-white relative overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-white tracking-tight">
              Need Field Investigation or Tender Testing Programs?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Consult SIMCON&apos;s senior geotechnical engineers and certified testing directors to review your borehole recommendations, dynamic testing protocols, or NABL laboratory pricing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-[#062B5C] font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md text-center w-full sm:w-auto"
            >
              <span>REQUEST TECHNICAL QUOTATION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg border border-white/20 transition-colors text-center w-full sm:w-auto"
            >
              <span>EXPLORE CASE STUDIES</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { SEOHead } from '@/components/common/SEOHead';
import {
  ArrowRight,
  Target,
  MapPin,
  Layers,
  ClipboardCheck,
  TestTube,
  Settings,
  Building2,
  FileText,
  Camera,
  X,
  Eye,
  Award
} from 'lucide-react';

// Comprehensive dictionary mapping testing procedures to authentic workspace images & standard codes
interface TestMetadata {
  image: string;
  code: string;
  description: string;
}

const TEST_METADATA: Record<string, TestMetadata> = {
  // Soil Laboratory Tests
  "Grain Size Analysis – Sieve & Hydrometer": {
    image: "/assets/services/soil-testing/grain-size-sieve-analysis.png",
    code: "IS 2720 (Part 4) / ASTM D422",
    description: "Determines particle-size distribution curves using mechanical sieves and hydrometer sedimentation for complete grain classification."
  },
  "Atterberg Limits Test": {
    image: "/assets/services/soil-testing/grain-size-sieve-analysis.png",
    code: "IS 2720 (Part 5) / ASTM D4318",
    description: "Evaluates liquid limit, plastic limit, and plasticity index for soil classification and swell potential identification."
  },
  "Relative Density Test": {
    image: "/assets/services/soil-testing/triaxial-shear-lab.png",
    code: "IS 2720 (Part 14) / ASTM D4253",
    description: "Assesses density index of cohesionless free-draining granular soils for compaction quality control."
  },
  "Consolidation Test – Standard & Automated": {
    image: "/assets/services/soil-testing/consolidation-test-apparatus.png",
    code: "IS 2720 (Part 15) / ASTM D2435",
    description: "Measures 1D consolidation parameters, pre-consolidation pressure, compression index (Cc), and long-term settlement rates."
  },
  "Direct Shear Test": {
    image: "/assets/services/soil-testing/triaxial-shear-lab.png",
    code: "IS 2720 (Part 13) / ASTM D3080",
    description: "Determines consolidated drained shear strength parameters (cohesion c and internal friction angle phi)."
  },
  "Permeability Test": {
    image: "/assets/services/soil-testing/permeability-lab-test.png",
    code: "IS 2720 (Part 17) / ASTM D2434",
    description: "Constant and falling head coefficient of permeability (k) measurement for seepage and groundwater flow modeling."
  },
  "Compaction Test – Standard & Modified Proctor": {
    image: "/assets/services/soil-testing/soil-compaction-proctor.png",
    code: "IS 2720 (Parts 7 & 8) / ASTM D698 & D1557",
    description: "Establishes relationship between moisture content and dry density to determine optimum moisture content (OMC) and maximum dry density (MDD)."
  },
  "Chemical Tests (pH, Chloride, Sulphate etc.)": {
    image: "/assets/services/soil-testing/triaxial-shear-lab.png",
    code: "IS 2720 (Part 26) / BS 1377",
    description: "Quantifies soil aggressiveness, sulphate attack vulnerability, and salinity affecting buried foundation concrete and steel."
  },

  // Rock Laboratory Tests
  "Petrographic Analysis": {
    image: "/assets/services/rock-testing/rock-core-samples-laboratory.png",
    code: "IS 4144 / ASTM C295",
    description: "Microscopic thin-section evaluation of mineral composition, grain fabric, weathering status, and microfractures."
  },
  "Density Test": {
    image: "/assets/services/rock-testing/rock-core-samples-laboratory.png",
    code: "IS 13030 / ASTM D7012",
    description: "Dry, saturated, and bulk unit weight determination of intact rock core specimens."
  },
  "Porosity Test": {
    image: "/assets/services/rock-testing/rock-core-samples-laboratory.png",
    code: "IS 13030 / ISRM Suggested Method",
    description: "Pore volume ratio measurement directly correlating to rock weathering, permeability, and durable strength."
  },
  "Water Absorption Test": {
    image: "/assets/services/rock-testing/rock-core-samples-laboratory.png",
    code: "IS 13030 / ASTM D7012",
    description: "Percentage weight gain under water saturation, reflecting rock permeability and weathering susceptibility."
  },
  "Uniaxial Compressive Strength (UCS) Test": {
    image: "/assets/services/rock-testing/ucs-uniaxial-compressive-rock.png",
    code: "IS 9143 / ASTM D7012",
    description: "Peak unconfined compressive strength measurement of intact core specimens to govern foundation bearing and tunnel support design."
  },
  "Triaxial Test": {
    image: "/assets/services/rock-testing/rock-triaxial-hoek-cell.png",
    code: "IS 13047 / ASTM D7012",
    description: "Hoek cell high-confining pressure triaxial testing establishing Mohr-Coulomb and Hoek-Brown rock failure envelopes."
  },
  "Point Load Index Test": {
    image: "/assets/services/rock-testing/point-load-testing-machine.png",
    code: "IS 8764 / ASTM D5731",
    description: "Rapid diametral and axial index testing for core classification and empirical conversion to compressive strength."
  },
  "Slake Durability Test": {
    image: "/assets/services/rock-testing/rock-slake-durability-test.png",
    code: "IS 10050 / ASTM D4644",
    description: "Resistance of shales and weathered rocks to weakening and disintegration upon repeated wetting-drying cycles."
  },
  "Brazilian Tensile Strength Test": {
    image: "/assets/services/rock-testing/ucs-uniaxial-compressive-rock.png",
    code: "IS 10082 / ASTM D3967",
    description: "Indirect diametral line load tensile strength measurement for tunnel roof and rock mass tensile capacity."
  },
  "Rock Mass Characterization": {
    image: "/assets/services/rock-testing/rock-core-samples-laboratory.png",
    code: "RMR / Q-System / GSI",
    description: "Geotechnical classification incorporating RQD, discontinuity spacing, joint conditions, and groundwater parameters."
  },

  // Advanced Field Tests
  "Static / Dynamic Cone Penetration Test (SCPT/DCPT)": {
    image: "/assets/services/field-testing/scpt-rig-field-operation.png",
    code: "IS 4968 (Parts 1-3) / ASTM D3441",
    description: "Continuous profiling of soil resistance, tip resistance (qc), and sleeve friction (fs) without advance borehole drilling."
  },
  "Standard Penetration Test (SPT)": {
    image: "/assets/services/field-testing/field-dcpt-testing-rig.png",
    code: "IS 2131 / ASTM D1586",
    description: "In-situ borehole penetration resistance (N-value) determination with automatic trip hammer calibration."
  },
  "Field CBR Test": {
    image: "/assets/services/field-testing/cone-penetration-probing.png",
    code: "IS 2720 (Part 31) / ASTM D4429",
    description: "In-situ California Bearing Ratio measurement on subgrade, sub-base, and pavement layers for highway design."
  },
  "Plate Load Test": {
    image: "/assets/services/field-testing/plate-load-test-setup.png",
    code: "IS 1888 / ASTM D1194",
    description: "Static and cyclic plate bearing test for allowable soil bearing capacity and subgrade reaction modulus (k-value)."
  },
  "Pressuremeter Test (In-situ Modulus)": {
    image: "/assets/services/field-testing/crosshole-seismic-testing-field.png",
    code: "IS 1892 / ASTM D4719",
    description: "Menard cylindrical expandable probe measurement of in-situ horizontal stress-strain modulus (E) and limit pressure (Pl)."
  },
  "Block Vibration Test (BVT)": {
    image: "/assets/services/field-testing/field-dcpt-testing-rig.png",
    code: "IS 5249",
    description: "Determines dynamic soil properties including coefficient of elastic uniform compression (Cu) for machine foundations."
  },
  "Cross-Hole / Down-Hole Test (PIT)": {
    image: "/assets/services/field-testing/crosshole-seismic-testing-field.png",
    code: "IS 13311 / ASTM D4428",
    description: "In-situ seismic wave velocity profiling (Vp and Vs) for dynamic shear modulus and seismic site response."
  },
  "Seismic Refraction Test": {
    image: "/assets/services/field-testing/crosshole-seismic-testing-field.png",
    code: "ASTM D5777 / IS 15681",
    description: "Non-invasive acoustic refraction tomography determining bedrock depth, rippability, and strata velocity profiles."
  },
  "In-situ Shear & Lateral Load Test": {
    image: "/assets/services/field-testing/pile-load-test-reaction-frame.png",
    code: "IS 2911 (Part 4) / ASTM D3966",
    description: "Deep foundation lateral, vertical compressive, and pull-out uplift testing with calibrated multi-dial displacement gauges."
  },

  // Material Testing Tests
  "Compressive Strength Test": {
    image: "/assets/services/materials/concrete-cube-compression-machine.jpeg",
    code: "IS 516 / ASTM C39 / IS 4031",
    description: "Peak compressive crushing load and compressive strength determination on standard cubes and cylindrical cores."
  },
  "Tensile Test – Tensile Strength, Yield Strength, 0.2% Proof Stress & Elongation": {
    image: "/assets/services/materials/rebar-tensile-yield-test.png",
    code: "IS 1786 / ISO 6892 / ASTM A370",
    description: "Full-scale servo-hydraulic tensile stress-strain evaluation of steel rebars, yield stress (0.2% proof), and elongation."
  },
  "Bend Test / Re-Bend Test": {
    image: "/assets/services/materials/tmt-rebar-bend-rebend-test.png",
    code: "IS 1599 / IS 1786",
    description: "Mandrel cold bending and reverse bending to evaluate ductility and cracking susceptibility of reinforcement rebars."
  },
  "Sieve Analysis / Grading Test": {
    image: "/assets/services/materials/aggregate-crushing-impact-testing.png",
    code: "IS 2386 (Part 1) / ASTM C136",
    description: "Mechanical particle size grading and fineness modulus determination for fine and coarse aggregate matrices."
  },
  "Aggregate Crushing Value Test": {
    image: "/assets/services/materials/aggregate-crushing-impact-testing.png",
    code: "IS 2386 (Part 4) / BS 812",
    description: "Resistance of mineral aggregate to crushing under gradually applied compressive load of 400 kN."
  },
  "Aggregate Impact Value Test": {
    image: "/assets/services/materials/aggregate-crushing-impact-testing.png",
    code: "IS 2386 (Part 4) / BS 812",
    description: "Resistance of aggregate to sudden shock or impact loading using standard hammer drop apparatus."
  },
  "Penetration": {
    image: "/assets/services/materials/bitumen-ductility-penetration.png",
    code: "IS 1203 / ASTM D5",
    description: "Consistency and hardness of bitumen binder measured by penetration of standard needle under 100g load at 25°C."
  },
  "Ductility": {
    image: "/assets/services/materials/bitumen-ductility-penetration.png",
    code: "IS 1208 / ASTM D113",
    description: "Distance in centimeters to which a standard bituminous briquette specimen can elongate before breaking."
  },
  "Softening Point": {
    image: "/assets/services/materials/bitumen-ductility-penetration.png",
    code: "IS 1205 / ASTM D36",
    description: "Temperature at which bituminous binder softens and sags 25mm through brass ring-and-ball apparatus."
  },
  "Marshall Stability & Flow": {
    image: "/assets/services/materials/marshall-stability-bituminous-mix.png",
    code: "ASTM D6927 / AASHTO T245",
    description: "Maximum compressive load resistance and plastic flow of compacted bituminous pavement specimens at 60°C."
  },
  "Concrete Slump Test": {
    image: "/assets/services/materials/concrete-batch-slump-flow.png",
    code: "IS 1199 / ASTM C143",
    description: "Workability, flow consistency, and cohesion of freshly mixed concrete in standard frustum slump cone."
  },
  "Rapid Chloride Penetration Test (RCPT)": {
    image: "/assets/services/materials/rcpt-durability-chloride-migration.png",
    code: "ASTM C1202 / AASHTO T277",
    description: "Coulombs passed through concrete slice under 60V electric potential measuring electrical conductance and permeability."
  },
  "Fineness Test – Blaine Air Permeability / Sieve Method": {
    image: "/assets/services/materials/blaine-fineness-cement-testing.png",
    code: "IS 4031 (Part 2) / ASTM C204",
    description: "Specific surface area (cm²/g) of cement powder determined by airflow permeability through compacted bed."
  },
  "Standard Consistency Test": {
    image: "/assets/services/materials/cement-mortar-compressive-strength.jpeg",
    code: "IS 4031 (Part 4) / ASTM C187",
    description: "Water percentage required to produce a standard cement paste using Vicat needle apparatus."
  },
  "Initial & Final Setting Time Test": {
    image: "/assets/services/materials/cement-mortar-compressive-strength.jpeg",
    code: "IS 4031 (Part 5) / ASTM C191",
    description: "Elapsed time for cement paste to lose plasticity and achieve sufficient rigid hardness."
  },

  // NDT & Structural Tests
  "Low Strain Pile Integrity Test (PIT)": {
    image: "/assets/services/ndt/pile-integrity-test-pit-sonic.jpeg",
    code: "ASTM D5882 / IS 14893",
    description: "Sonic pulse echo acoustic test to evaluate pile shaft continuity, physical necking, bulb formation, and toe depth."
  },
  "Rebound Hammer Test": {
    image: "/assets/services/ndt/rebound-hammer-concrete-testing.jpeg",
    code: "IS 13311 (Part 2) / ASTM C805",
    description: "Surface rebound hardness index evaluating relative concrete compressive strength and structural uniformity."
  },
  "Ultrasonic Pulse Velocity (UPV)": {
    image: "/assets/services/ndt/ultrasonic-pulse-velocity-upv.jpeg",
    code: "IS 13311 (Part 1) / ASTM C597",
    description: "Direct and indirect electro-acoustic pulse transit time mapping internal cracks, honeycombing, and voids."
  },
  "Half-Cell Potential Test": {
    image: "/assets/services/structural-health/half-cell-corrosion-mapping.png",
    code: "ASTM C876",
    description: "Electrochemical potential mapping against reference electrode to detect active rebar corrosion probability."
  },
  "Cross-Hole Sonic Logging Test (CHST/CHUM)": {
    image: "/assets/services/ndt/pile-integrity-pit.jpeg",
    code: "ASTM D6760",
    description: "High-frequency ultrasonic tomography between water-filled tubes in deep drilled shafts."
  },
  "Span / Bridge Load Test": {
    image: "/assets/services/structural-health/bridge-deflection-load-test.jpeg",
    code: "IRC:SP:51 / IRS Bridge Rules",
    description: "Full-scale proof load and deflection testing of bridge spans using calibrated dial gauges and data loggers."
  },
  "Cover Meter / Profometer Test": {
    image: "/assets/services/ndt/rebound-hammer-upv.jpeg",
    code: "BS 1881:Part 204 / DIN 1045",
    description: "Electromagnetic scanning for rebar positioning, concrete cover depth, and reinforcement spacing."
  },

  // Geophysical Tests
  "Multichannel Analysis of Surface Waves (MASW)": {
    image: "/assets/services/geophysical/masw-seismic-imaging-2d.png",
    code: "ASTM D7400 / IS 1893",
    description: "Rayleigh wave dispersion curve inversion yielding 2D shear-wave velocity (Vs30) profiles for seismic site classification."
  },
  "Seismic Refraction Test (SRT)": {
    image: "/assets/services/geophysical/seismic-refraction-tomography.png",
    code: "ASTM D5777",
    description: "P-wave velocity tomographic profiling determining bedrock depth, rippability, and fault delineation."
  },
  "Ground Penetrating Radar Test (GPR)": {
    image: "/assets/projects/project-highway-bridge-load-test.png",
    code: "ASTM D6432",
    description: "High-frequency electromagnetic reflection imaging buried utility networks, void cavities, and asphalt layer thickness."
  },
  "Electrical Resistivity Tomography – 2D & 3D ERT Survey": {
    image: "/assets/services/geophysical/masw-seismic-imaging-2d.png",
    code: "ASTM G57 / IS 15681",
    description: "Multi-electrode apparent resistivity inversion mapping lithology, groundwater aquifers, and shear fracture zones."
  }
};

// Service-specific Hero Images (workspace assets)
const SERVICE_HERO_IMAGES: Record<string, string> = {
  "geotechnical-services": "/assets/hero/simcon_geotech_hero.jpg",
  "geotechnical-investigation": "/assets/hero/simcon_geotech_hero.jpg",
  "material-testing-services": "/assets/services/materials/universal-testing-machine-utm-steel.png",
  "material-testing": "/assets/services/materials/universal-testing-machine-utm-steel.png",
  "ndt-structural-integrity": "/assets/services/ndt/rebound-hammer-concrete-testing.jpeg",
  "structural-health-assessment": "/assets/services/ndt/rebound-hammer-concrete-testing.jpeg",
  "geophysical-survey": "/assets/services/geophysical/masw-seismic-imaging-2d.png",
};

// Service-specific Vertical Taglines
const SERVICE_TAGLINES: Record<string, string[]> = {
  "geotechnical-services": ["BUILDING", "SAFER", "FOUNDATIONS", "THROUGH", "DATA"],
  "geotechnical-investigation": ["BUILDING", "SAFER", "FOUNDATIONS", "THROUGH", "DATA"],
  "material-testing-services": ["VALIDATING", "QUALITY", "ACROSS", "EVERY", "MATRIX"],
  "material-testing": ["VALIDATING", "QUALITY", "ACROSS", "EVERY", "MATRIX"],
  "ndt-structural-integrity": ["ASSURING", "STRUCTURAL", "LONGEVITY", "THROUGH", "NDT"],
  "structural-health-assessment": ["ASSURING", "STRUCTURAL", "LONGEVITY", "THROUGH", "NDT"],
  "geophysical-survey": ["DECODING", "SUBSURFACE", "THROUGH", "WAVE", "DYNAMICS"],
};

// Service-specific Trust Badges
const SERVICE_BADGES: Record<string, { icon: React.ComponentType<{ className?: string }>; text: string }[]> = {
  "geotechnical-services": [
    { icon: Award, text: "NABL Accredited" },
    { icon: Target, text: "1000+ Investigations" },
    { icon: MapPin, text: "Pan India" },
  ],
  "geotechnical-investigation": [
    { icon: Award, text: "NABL Accredited" },
    { icon: Target, text: "1000+ Investigations" },
    { icon: MapPin, text: "Pan India" },
  ],
  "material-testing-services": [
    { icon: Award, text: "NABL Accredited" },
    { icon: Target, text: "581+ Parameters" },
    { icon: MapPin, text: "Pan India" },
  ],
  "material-testing": [
    { icon: Award, text: "NABL Accredited" },
    { icon: Target, text: "581+ Parameters" },
    { icon: MapPin, text: "Pan India" },
  ],
  "ndt-structural-integrity": [
    { icon: Award, text: "NABL Accredited NDT" },
    { icon: Target, text: "100+ Bridge & Pile Audits" },
    { icon: MapPin, text: "Pan India" },
  ],
  "structural-health-assessment": [
    { icon: Award, text: "NABL Accredited NDT" },
    { icon: Target, text: "100+ Bridge & Pile Audits" },
    { icon: MapPin, text: "Pan India" },
  ],
  "geophysical-survey": [
    { icon: Award, text: "ASTM / IS Certified" },
    { icon: Target, text: "10 Non-Invasive Methods" },
    { icon: MapPin, text: "Pan India" },
  ],
};

const getSubDisciplineImage = (subId: string, serviceSlug: string): string => {
  const images: Record<string, string> = {
    // Geotechnical
    "soil-testing": "/assets/services/soil-testing/triaxial-shear-lab.png",
    "rock-testing": "/assets/services/rock-testing/ucs-uniaxial-compressive-rock.png",
    "field-testing": "/assets/services/field-testing/plate-load-test-setup.png",

    // Material Testing
    "cementitious": "/assets/services/materials/cement-mortar-compressive-strength.jpeg",
    "aggregates": "/assets/services/materials/aggregate-crushing-impact-testing.png",
    "bituminous": "/assets/services/materials/bitumen-ductility-penetration.png",
    "masonry": "/assets/services/materials/concrete-cube-testing.jpeg",
    "concrete": "/assets/services/materials/concrete-batch-slump-flow.png",
    "steel-metals": "/assets/services/materials/rebar-tensile-yield-test.png",
    "chemical-testing": "/assets/services/materials/chemical-testing-banner.png",

    // NDT & Structural
    "ndt-testing": "/assets/services/ndt/bridge-pier-ndt-testing.jpeg",
    "structural-health": "/assets/services/structural-health/bridge-deflection-load-test.jpeg",

    // Geophysics
    "geophysical-methods": "/assets/services/geophysical/masw-seismic-imaging-2d.png",
  };
  return images[subId] || (serviceSlug.includes('material')
    ? "/assets/services/materials/universal-testing-machine-utm-steel.png"
    : "/assets/services/soil-testing/triaxial-shear-lab.png");
};

const getFallbackTestImage = (serviceSlug: string): string => {
  if (serviceSlug.includes('material')) return '/assets/services/materials/universal-testing-machine-utm-steel.png';
  if (serviceSlug.includes('ndt') || serviceSlug.includes('structural')) return '/assets/services/ndt/rebound-hammer-concrete-testing.jpeg';
  if (serviceSlug.includes('geophysic')) return '/assets/services/geophysical/masw-seismic-imaging-2d.png';
  return '/assets/services/soil-testing/triaxial-shear-lab.png';
};

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);
  const [selectedTest, setSelectedTest] = useState<{
    name: string;
    category: string;
    code: string;
    image: string;
    description: string;
  } | null>(null);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // 6 Linear Methodology Steps: Hand-curated or derived from keyCapabilities
  const stepIcons = [Layers, ClipboardCheck, TestTube, Settings, Building2, FileText];

  const methodologySteps = service.slug.includes('geotechnical')
    ? [
      { step: "01", title: "Deep rotary core drilling", description: "in hard rock, weathered formations and alluvial soils", icon: Layers },
      { step: "02", title: "Standard Penetration Testing (SPT)", description: "with continuous energy-calibrated recording", icon: ClipboardCheck },
      { step: "03", title: "Undisturbed soil sampling", description: "(Shelby tube, piston samplers)", icon: TestTube },
      { step: "04", title: "Comprehensive laboratory soil mechanics & automated triaxial tests", description: "", icon: Settings },
      { step: "05", title: "In-situ field tests", description: "(plate load, dynamic, lateral, uplift & preload)", icon: Building2 },
      { step: "06", title: "Customized testing programs", description: "for infrastructure projects", icon: FileText },
    ]
    : service.keyCapabilities && service.keyCapabilities.length > 0
      ? service.keyCapabilities.slice(0, 6).map((cap, idx) => {
        const parts = cap.split(/[:–—(]/);
        const title = parts[0].trim();
        const rawDesc = parts.length > 1 ? cap.substring(parts[0].length).replace(/^[:–—\s]+/, '').trim() : '';
        return {
          step: `0${idx + 1}`,
          title,
          description: rawDesc,
          icon: stepIcons[idx % stepIcons.length]
        };
      })
      : [
        { step: "01", title: "Project Scoping & Standards Review", description: "Alignment with IS, ASTM, and client specifications", icon: Layers },
        { step: "02", title: "Field Sampling & Rig Mobilization", description: "Calibrated apparatus and sensor deployment", icon: ClipboardCheck },
        { step: "03", title: "NABL Laboratory Testing", description: "Automated digital compression, shear, and chemistry", icon: TestTube },
        { step: "04", title: "Data Processing & Inversion", description: "Finite element, dispersion, and statistical checks", icon: Settings },
        { step: "05", title: "Quality Assurance & Peer Review", description: "Traceable NABL protocols and calibration certificates", icon: Building2 },
        { step: "06", title: "Engineering Advisory & Reporting", description: "Verifiable reports for design approval and execution", icon: FileText },
      ];

  // Parameter Breakdown Categories (dynamically mapped from service.subDisciplines)
  const parameterCategories = (service.subDisciplines && service.subDisciplines.length > 0)
    ? service.subDisciplines.map((sub, idx) => ({
      num: String(idx + 1).padStart(2, '0'),
      title: sub.title,
      subtitle: sub.description,
      bannerImage: getSubDisciplineImage(sub.id, service.slug),
      items: sub.items
    }))
    : [];

  // Software Numerical Tools matching mockup & service data
  const softwareTools = service.softwareTools && service.softwareTools.length > 0
    ? service.softwareTools.map((t, idx) => ({
      step: `0${idx + 1}`,
      name: t.name,
      purpose: t.purpose
    }))
    : [
      { step: "01", name: "Data Acquisition & Logging", purpose: "Automated real-time sensor recording and validation" },
      { step: "02", name: "Analytical Processing Suite", purpose: "Stress-strain calculations and compliance verification" },
      { step: "03", name: "Quality Assurance Console", purpose: "NABL traceability and digital calibration logs" },
    ];

  // Related Projects dynamically resolved from service.relatedProjectSlugs
  const featuredProjects = service.relatedProjectSlugs && service.relatedProjectSlugs.length > 0
    ? service.relatedProjectSlugs
      .map(pSlug => {
        const proj = PROJECTS.find(p => p.slug === pSlug || p.id === pSlug);
        if (!proj) return null;
        return {
          id: proj.id,
          slug: proj.slug,
          badge: proj.category || "Infrastructure",
          image: proj.featuredImage || "/assets/projects/project-sabarmati-bullet-train-hub.png",
          title: proj.title,
          description: proj.description,
        };
      })
      .filter((p): p is NonNullable<typeof p> => Boolean(p))
    : PROJECTS.slice(0, 3).map(proj => ({
      id: proj.id,
      slug: proj.slug,
      badge: proj.category || "Infrastructure",
      image: proj.featuredImage || "/assets/projects/project-sabarmati-bullet-train-hub.png",
      title: proj.title,
      description: proj.description,
    }));

  const handleTestClick = (testName: string, category: string) => {
    const meta = TEST_METADATA[testName] || {
      image: getFallbackTestImage(service.slug),
      code: "NABL / IS / ASTM Certified",
      description: `Standardized testing procedure for ${testName} executed under strict NABL-accredited quality assurance.`
    };
    setSelectedTest({
      name: testName,
      category,
      code: meta.code,
      image: meta.image,
      description: meta.description
    });
  };

  const heroImage = SERVICE_HERO_IMAGES[service.slug] || service.heroImage || "/assets/hero/simcon_geotech_hero.jpg";
  const taglineWords = SERVICE_TAGLINES[service.slug] || ["ENGINEERING", "EXCELLENCE", "THROUGH", "INTEGRITY"];
  const trustBadges = SERVICE_BADGES[service.slug] || [
    { icon: Award, text: "NABL Accredited" },
    { icon: Target, text: "1000+ Investigations" },
    { icon: MapPin, text: "Pan India" },
  ];

  return (
    <div className="pt-[72px] bg-white">
      <SEOHead
        customSeo={{
          title: service.seoTitle,
          description: service.seoDescription,
          canonical: `https://www.simcon.co.in/services/${service.slug}`
        }}
      />

      {/* =========================================================================
          1. HERO HEADER SECTION (Seamless Diagonal Full-Bleed Split-Screen Banner)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#062B5C] text-white min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">

        {/* Full-bleed Photo Layer on Right with Exact Diagonal Slant */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] xl:w-[60%] h-full z-0 overflow-hidden pointer-events-none">
          {/* Diagonal Clip Path on Desktop (47% at top to 56% at bottom), full cover on mobile */}
          <div
            className="w-full h-full relative [clip-path:none] lg:[clip-path:polygon(12%_0,100%_0,100%_100%,26%_100%)]"
          >
            <img
              src={heroImage}
              alt={service.title}
              className="w-full h-full object-cover object-right sm:object-center opacity-35 lg:opacity-100 scale-105"
            />
            {/* Left Edge Depth Gradient for Smooth Visual Blend */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#062B5C] via-[#062B5C]/90 lg:via-[#062B5C]/10 to-[#062B5C]/60 lg:to-transparent pointer-events-none" />
          </div>

          {/* Vertical Tagline (Top Right of Photo) */}
          <div className="hidden lg:flex absolute top-8 sm:top-10 right-8 sm:right-12 xl:right-16 flex-col items-start z-20 pointer-events-none select-none">
            <div className="border-l-2 border-slate-700/70 pl-3 font-mono text-[10px] xl:text-[11px] font-bold tracking-[0.25em] text-slate-900 leading-relaxed uppercase">
              {taglineWords.map((word, idx) => (
                <React.Fragment key={idx}>
                  {word}
                  {idx < taglineWords.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Blueprint CAD Grid Texture over Navy Background */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none z-0" />

        {/* Subtle CAD Architectural Linework */}
        <div className="absolute left-0 inset-y-0 w-1/2 pointer-events-none opacity-15 z-0 hidden lg:block">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none">
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="45%" y1="0" x2="45%" y2="100%" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="35%" cy="65%" r="140" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="6 6" />
            <circle cx="35%" cy="65%" r="200" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="6 6" />
          </svg>
        </div>

        {/* Left Side Content Container */}
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full py-12 sm:py-16 lg:py-20">
          <div className="max-w-xl lg:max-w-[46%] xl:max-w-[48%] space-y-5 sm:space-y-6">

            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-300" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-400">&gt;</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="text-slate-400">&gt;</span>
              <span className="text-slate-200">{service.title}</span>
            </nav>

            {/* Technical Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-slate-300 uppercase">
                {service.category.toUpperCase()} EXCELLENCE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[58px] font-extrabold font-display text-white tracking-tight leading-[1.08] break-words">
              {service.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-200 leading-relaxed font-normal max-w-lg">
              {service.shortDescription}
            </p>

            {/* 3 Badges in a Row with Vertical Dividers */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-medium text-slate-200">
              {trustBadges.map((badge, idx) => {
                const BadgeIcon = badge.icon;
                return (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span className="w-px h-3.5 bg-white/25 hidden sm:block" />}
                    <div className="flex items-center gap-2">
                      <BadgeIcon className="w-4 h-4 text-blue-300 flex-shrink-0" />
                      <span>{badge.text}</span>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          2. METHODOLOGY & TECHNICAL APPROACH SECTION (Linear 6-Step Infographic)
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-8 sm:space-y-10">

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C] tracking-tight">
                Methodology & Technical Approach
              </h2>
              <p className="text-xs sm:text-sm text-[#536271] leading-relaxed pt-1">
                {service.fullDescription}
              </p>
            </div>

            <a
              href="#parameter-breakdown"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] transition-colors self-start md:self-end shrink-0"
            >
              <span>View Our Methodology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 6-Step Linear Process Sequence */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 lg:gap-3 items-start pt-4">
            {methodologySteps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={item.step} className="relative flex flex-col space-y-3 group">

                  {/* Top Step Number & Connecting Arrow */}
                  <div className="flex items-center justify-between pr-2">
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#1268B3] leading-none tracking-tight">
                      {item.step}
                    </span>
                    {idx < methodologySteps.length - 1 && (
                      <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-slate-300 -mr-2" />
                    )}
                  </div>

                  {/* Icon */}
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1268B3] group-hover:bg-[#1268B3] group-hover:text-white transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>

                  {/* Content */}
                  <div className="space-y-1">
                    <h3 className="font-bold text-xs sm:text-sm font-display text-[#062B5C] leading-snug">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-[11px] text-[#536271] leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. DETAILED PARAMETER BREAKDOWN (3 Columns with Test-Wise Image Inspection)
          ========================================================================= */}
      <section id="parameter-breakdown" className="scroll-mt-24 py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-8 sm:space-y-10">

          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C] tracking-tight">
              Detailed Parameter Breakdown
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
              NABL-accredited laboratory procedures and analytical categories executed by SIMCON specialists. Click any test to inspect apparatus details and standard test methods.
            </p>
          </div>

          {/* Dynamic Testing Columns */}
          <div className={`grid gap-8 items-stretch ${parameterCategories.length === 1
              ? 'grid-cols-1 max-w-2xl mx-auto'
              : parameterCategories.length === 2
                ? 'grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
            {parameterCategories.map((cat) => (
              <div
                key={cat.num}
                className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
              >
                {/* Category Header */}
                <div className="p-6 sm:p-7 border-b border-slate-100 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#1268B3] leading-none">
                        {cat.num}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-[#062B5C]">
                        {cat.title}
                      </h3>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#D71920] shrink-0" />
                  </div>
                  <p className="text-xs text-[#536271] leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Parameters List with Red Square Bullets & Interactive Image Click */}
                <div className="p-6 sm:p-7 flex-1">
                  <ul className="space-y-3">
                    {cat.items.map((testName, i) => (
                      <li key={i}>
                        <button
                          type="button"
                          onClick={() => handleTestClick(testName, cat.title)}
                          className="w-full text-left flex items-start justify-between gap-2.5 group py-1 hover:bg-slate-50 rounded px-1.5 -mx-1.5 transition-colors focus:outline-none"
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#D71920] shrink-0 mt-1.5 group-hover:scale-125 transition-transform" />
                            <span className="text-xs sm:text-[13px] text-[#536271] group-hover:text-[#062B5C] font-medium leading-snug transition-colors">
                              {testName}
                            </span>
                          </div>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 group-hover:text-[#1268B3] shrink-0 flex items-center gap-1 text-[11px] font-mono">
                            <Camera className="w-3.5 h-3.5" />
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Category Inspection Hint */}
                <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-[11px] text-slate-500">
                    {cat.items.length} Standardized Tests
                  </span>
                  <span className="font-mono text-[11px] text-[#1268B3] font-semibold flex items-center gap-1">
                    <Eye className="w-3 h-3" /> Click test to preview
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. SOFTWARE EXPERTISE & NUMERICAL TOOLS (Horizontal Numbered Columns)
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-8 sm:space-y-10">

          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C] tracking-tight">
              Software Expertise & Numerical Tools
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
              Industry-standard software, analytical platforms, and numerical tools utilized for {service.title.toLowerCase()}.
            </p>
          </div>

          {/* Column Grid */}
          <div className={`grid gap-6 sm:gap-5 ${softwareTools.length <= 3
              ? 'grid-cols-1 sm:grid-cols-3 max-w-4xl'
              : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
            }`}>
            {softwareTools.map((tool) => (
              <div
                key={tool.step}
                className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#1268B3]/40 transition-colors space-y-2"
              >
                <span className="font-mono text-xs font-bold text-[#1268B3] block">
                  {tool.step}
                </span>
                <h3 className="font-bold font-display text-sm sm:text-base text-[#062B5C]">
                  {tool.name}
                </h3>
                <p className="text-xs text-[#536271] leading-relaxed">
                  {tool.purpose}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. RELATED INFRASTRUCTURE PROJECTS (3 Cards with Badges & Case Studies)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-8 sm:space-y-10">

          {/* Header Row */}
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C] tracking-tight">
              Related Infrastructure Projects
            </h2>
            <Link
              to="/projects"
              className="text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] transition-colors flex items-center gap-1 shrink-0"
            >
              <span>All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((proj) => (
              <Link
                key={proj.id}
                to={`/projects/${proj.slug}`}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Photo with Badge */}
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#062B5C]/90 backdrop-blur-xs text-white text-[10px] font-mono font-semibold rounded">
                        {proj.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-2">
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-[#536271] leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 pb-6 pt-0">
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#1268B3] group-hover:text-[#062B5C] transition-colors">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. BOTTOM CALL TO ACTION RIBBON (Deep Navy Banner)
          ========================================================================= */}
      <section className="bg-[#062B5C] py-12 sm:py-14 text-white relative overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-1.5 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
              Require {service.title} for your site?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Contact our engineering specialists to discuss your project requirements, testing programs and custom solutions across India.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-[#062B5C] font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors shrink-0 shadow-md w-full sm:w-auto"
          >
            <span>REQUEST QUOTATION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          7. TESTING-WISE IMAGE INSPECTION MODAL
          ========================================================================= */}
      {selectedTest && (
        <div
          className="fixed inset-0 z-50 bg-[#062B5C]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelectedTest(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-200 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] uppercase">
                  <span>{selectedTest.category}</span>
                  <span>•</span>
                  <span className="text-[#D71920]">{selectedTest.code}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-[#062B5C] mt-1">
                  {selectedTest.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTest(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0"
                aria-label="Close test inspection"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-200">
              <img
                src={selectedTest.image}
                alt={selectedTest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#062B5C]/85 backdrop-blur-xs text-white text-[11px] font-mono rounded">
                SIMCON Testing Apparatus
              </div>
            </div>

            {/* Modal Description & CTA */}
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-xs sm:text-sm text-[#536271] leading-relaxed">
                {selectedTest.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
                <span className="text-xs font-mono text-slate-400">
                  NABL Scope Parameter • Available Pan-India
                </span>
                <Link
                  to={`/contact?test=${encodeURIComponent(selectedTest.name)}`}
                  onClick={() => setSelectedTest(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D71920] hover:bg-[#B51319] text-white text-xs font-mono font-bold rounded transition-colors"
                >
                  <span>Request Test Quotation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

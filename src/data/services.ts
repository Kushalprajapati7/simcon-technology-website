export interface ServiceItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  heroImage: string;
  category: string;
  keyCapabilities: string[];
  subDisciplines?: {
    title: string;
    description: string;
    items: string[];
  }[];
  softwareTools?: {
    name: string;
    purpose: string;
  }[];
  standardsAndCodes?: string[];
  relatedProjectSlugs: string[];
  seoTitle: string;
  seoDescription: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "geotechnical-investigation",
    number: "01",
    slug: "geotechnical-investigation",
    title: "Geotechnical Investigation",
    shortDescription: "Subsurface exploration, rotary rock coring, and characterization for safe and economical infrastructure design.",
    fullDescription: "SIMCON Technology delivers comprehensive geotechnical subsurface investigations across all geological conditions. With a dedicated fleet of drilling rigs, rotary diamond coring units, and field instrumentation, we acquire high-integrity undisturbed and disturbed samples. Our testing protocols provide actionable data for shallow/deep foundations, bridge abutments, elevated corridors, industrial plants, and transit systems.",
    iconName: "Layers",
    heroImage: "/assets/projects/geotechnical-investigation-site-1.png",
    category: "Geotechnical & Subsurface",
    keyCapabilities: [
      "Deep rotary core drilling in hard rock, weathered formations, and soil",
      "Standard Penetration Testing (SPT) with continuous energy-calibrated recordings",
      "Undisturbed soil sampling (Shelby tubes, piston samplers) for lab shear and consolidation",
      "Field permeability tests (Packer tests, pumping tests, falling/rising head)",
      "Subsurface profiling and 3D geological stratification modeling"
    ],
    subDisciplines: [
      {
        title: "Soil Laboratory Testing (NABL Accredited)",
        description: "Comprehensive physical, mechanical, and consolidation properties determined in accordance with IS, ASTM, and BS codes.",
        items: [
          "Grain Size Analysis (Sieve & Hydrometer Analysis)",
          "Atterberg's Limits (Liquid Limit, Plastic Limit, Shrinkage Limit)",
          "Specific Gravity & Density Tests",
          "Relative Density Determination for Cohesionless Soils",
          "Free Swell Index & Swelling Pressure Tests",
          "Compaction Tests (Standard & Modified Proctor)",
          "Laboratory California Bearing Ratio (CBR) - Soaked & Unsoaked",
          "Permeability Tests (Constant & Variable Head)",
          "Digital Direct Shear Test (Consolidated & Inundated)",
          "Laboratory Vane Shear Test",
          "Unconfined Compressive Strength (UCS) Test",
          "Automatic Triaxial Compression Test (UU, CU, CD with pore pressure)",
          "Digital One-Dimensional Consolidation Test (e-log p, Cv, Cc)"
        ]
      },
      {
        title: "Rock Laboratory Testing (NABL Accredited)",
        description: "Geomechanical and petrographic testing of rock cores for tunnels, deep excavations, bridge foundations, and slope stability.",
        items: [
          "Petrographic Analysis & Microscopic Examination",
          "Bulk Density & Porosity Determination",
          "Specific Gravity & Water Absorption Test",
          "Slake Durability Index Test",
          "Cerchar Abrasivity Index (CAI) Test for TBM/excavation tool wear",
          "Schmidt Impact Hammer Test (L & N Type)",
          "Point Load Strength Index Test (Axial & Diametral)",
          "Uniaxial Compressive Strength (UCS) of intact rock cores",
          "Brazilian Tensile Strength Test",
          "Modulus of Elasticity & Poisson's Ratio for Rock",
          "Rock Triaxial Compression Test (Hoek Cell)",
          "Core Recovery (CR) & Rock Quality Designation (RQD) logging"
        ]
      },
      {
        title: "Foundation Engineering & Numerical Modeling",
        description: "Advanced numerical modeling and design validation to bridge investigation data with structural engineering requirements.",
        items: [
          "Shallow and Deep Foundation Capacity & Settlement Analysis",
          "Axial & Lateral Pile Capacity Evaluation",
          "Combined Piled-Raft Foundation (CPRF) Analysis",
          "Geotechnical Earthquake Engineering & Liquefaction Potential Assessment",
          "Retaining & Deep Excavation Systems (Diaphragm walls, Sheet pile, Secant piles)",
          "Geosynthetics & Reinforced Soil (RE) Walls",
          "Ground Improvement Recommendations (Stone columns, PVD, chemical stabilization)"
        ]
      }
    ],
    softwareTools: [
      { name: "PLAXIS 2D", purpose: "Finite-element soil-structure interaction & deep excavation analysis" },
      { name: "LPILE", purpose: "Non-linear lateral load-deflection analysis of deep pile foundations" },
      { name: "StoneC", purpose: "Stone-column design and vibro-replacement ground improvement" },
      { name: "LIQSVS", purpose: "Liquefaction potential assessment and cyclic stress ratio calculations" },
      { name: "OpenGround & gINT", purpose: "Borehole data management, geological logs, and 3D subsurface mapping" },
      { name: "AutoCAD", purpose: "Geotechnical engineering drawings, borehole plans, and geological cross-sections" }
    ],
    standardsAndCodes: ["IS 1892", "IS 2131", "IS 2720", "IS 13030", "ASTM D422", "ASTM D1586", "ASTM D2166"],
    relatedProjectSlugs: ["mahsr-bullet-train-sabarmati", "bhopal-metro-rail", "rishikesh-karnaprayag-railway-tunnel"],
    seoTitle: "Geotechnical Investigation Services | SIMCON Technology",
    seoDescription: "NABL-accredited geotechnical investigation, soil and rock laboratory testing, rotary core drilling, and foundation engineering by SIMCON Technology."
  },
  {
    id: "geophysical-survey",
    number: "02",
    slug: "geophysical-survey",
    title: "Geophysical Survey",
    shortDescription: "Non-invasive subsurface geophysical imaging for geological hazard detection and ground risk mitigation.",
    fullDescription: "SIMCON provides advanced non-destructive geophysical exploration methods to map subsurface stratigraphy, identify cavities, evaluate bedrock profiles, and measure dynamic soil properties. Geophysical surveys enable continuous profiling over kilometers of alignment without disturbing utilities or operations.",
    iconName: "Activity",
    heroImage: "/assets/services/geophysical/masw-seismic-imaging-2d.png",
    category: "Geophysics & Subsurface Imaging",
    keyCapabilities: [
      "Multichannel Analysis of Surface Waves (MASW) for shear wave velocity (Vs30) & seismic site classification",
      "Seismic Refraction Tomography (SRT) for bedrock depth and rippability evaluation",
      "Crosshole Seismic Test (CHST) and Downhole Seismic Test (DHT) for in-situ dynamic moduli",
      "2D and 3D Electrical Resistivity Tomography (ERT) for lithological variations and water tables",
      "Vertical Electrical Sounding (VES) for electrical resistivity grounding design",
      "Ground Penetrating Radar (GPR) for subsurface utility mapping and cavity detection",
      "Thermal Resistivity Testing for underground power cable transmission alignments",
      "Borehole Deviation Testing and Open-Pit Geological Mapping"
    ],
    softwareTools: [
      { name: "ArcGIS / QGIS", purpose: "Spatial georeferencing, terrain mapping, and multi-layer GIS analysis" },
      { name: "Object Mapper", purpose: "GPR post-processing, utility trace extraction, and 3D subsurface imaging" },
      { name: "IGIS", purpose: "Electrical Resistivity Tomography (ERT) and VES 2D/3D inversion processing" },
      { name: "PIT-W & CHA-W", purpose: "Pile integrity and Cross-Hole Sonic Logging wave velocity analysis" },
      { name: "Lakkolit", purpose: "Downhole and crosshole seismic wave travel-time processing" },
      { name: "GeoGiga Seismic Pro", purpose: "High-resolution seismic refraction and surface wave dispersion curve analysis" },
      { name: "Thermtest", purpose: "Thermal conductivity and soil thermal resistivity data analysis" }
    ],
    standardsAndCodes: ["ASTM D5777", "ASTM D4428", "ASTM D6432", "IS 15681", "IS 1893"],
    relatedProjectSlugs: ["rishikesh-karnaprayag-railway-tunnel", "ahmedabad-svpi-airport-gpr", "khavda-200mw-hybrid-project"],
    seoTitle: "Geophysical Survey Services | SIMCON Technology",
    seoDescription: "Comprehensive geophysical surveys including MASW, Seismic Refraction, ERT, GPR utility mapping, and thermal resistivity by SIMCON Technology."
  },
  {
    id: "forensic-geotechnical-investigation",
    number: "03",
    slug: "forensic-geotechnical-investigation",
    title: "Forensic Geotechnical Investigation",
    shortDescription: "Investigating foundation distress, slope failures, and geotechnical collapses to identify root causes and remedial designs.",
    fullDescription: "When infrastructure systems encounter unexpected distress, excessive settlement, retaining wall tilting, or slope instability, SIMCON's senior geotechnical specialists conduct forensic investigations. By combining historical design verification, in-situ forensic testing, numerical back-analysis, and forensic laboratory testing, we establish root failure mechanisms and engineer sound remedial interventions.",
    iconName: "Search",
    heroImage: "/assets/projects/geotechnical-investigation-site-2.png",
    category: "Forensics & Diagnostics",
    keyCapabilities: [
      "Differential settlement and structural distortion root-cause diagnosis",
      "Slope instability and embankment failure back-analysis",
      "Retaining wall and deep excavation failure investigations",
      "Pavement rutting and subgrade failure forensics",
      "Underpinning, micropiling, and foundation remedial design recommendations"
    ],
    standardsAndCodes: ["IS 1904", "IS 1892", "IS 14243"],
    relatedProjectSlugs: ["ssnnl-nalkantha-irrigation", "mundra-petrochem-investigation"],
    seoTitle: "Forensic Geotechnical Investigation | SIMCON Technology",
    seoDescription: "Expert forensic geotechnical investigations, foundation failure diagnosis, slope collapse analysis, and remedial engineering solutions."
  },
  {
    id: "material-testing",
    number: "04",
    slug: "material-testing",
    title: "Construction Material Testing",
    shortDescription: "NABL-accredited physical, mechanical, and chemical testing of concrete, aggregates, steel, bitumen, and soil in our central laboratories.",
    fullDescription: "SIMCON operates state-of-the-art NABL-accredited material testing laboratories equipped with calibrated computerized compression testing machines, servo-hydraulic UTMs, bitumen rheometers, and spectrophotometers. We test more than 580 parameters ensuring every batch of material meets regulatory codes and project specifications.",
    iconName: "FlaskConical",
    heroImage: "/assets/services/materials/universal-testing-machine-utm-steel.png",
    category: "Laboratory & Materials",
    keyCapabilities: [
      "Cementitious Materials: OPC, PPC, PSC, RHPC, Fly Ash, GGBS, Silica Fume (Compressive strength, setting time, fineness, soundness, autoclave)",
      "Aggregates & Granular: Sieve analysis, specific gravity, water absorption, aggregate crushing/impact/abrasion values, 10% fines, flakiness & elongation, soundness",
      "Bituminous Products: Viscosity, penetration, ductility, softening point, flash point, Marshall stability, stripping value, binder content, emulsion testing",
      "Concrete Testing: Slump, air content, bleeding, cube/cylinder/core compressive strength, flexural, splitting tensile, water permeability, drying shrinkage, RCPT & RCMT",
      "Steel & Metallurgical: Rebar tensile yield strength, 0.2% proof stress, elongation, bend/re-bend, coupler static tensile, prestressing 7-wire strand breaking, Charpy impact",
      "Chemical & Water: pH, chlorides, sulphates, alkali-aggregate reactivity, major oxide analysis (XRF/wet chemistry), loss on ignition, construction water suitability"
    ],
    subDisciplines: [
      {
        title: "Cementitious & Aggregate Systems",
        description: "Rigorous physical and chemical evaluation of binding matrices and mineral aggregates.",
        items: [
          "Compressive Strength Test (Mortar Cubes)",
          "Standard Consistency & Setting Time (Initial / Final)",
          "Fineness by Blaine Air Permeability & 45/90µm Sieving",
          "Cement Soundness by Le Chatelier & Autoclave Method",
          "Drying Shrinkage & Moisture Content",
          "Slag Activity Index for GGBS & Lime Reactivity for Fly Ash",
          "Aggregate Crushing Value (ACV) & Aggregate Impact Value (AIV)",
          "Los Angeles Abrasion Value (LAA)",
          "Combined Flakiness & Elongation Index",
          "Soundness by Sodium & Magnesium Sulphate (Na2SO4 / MgSO4)"
        ]
      },
      {
        title: "Concrete Durability & Strength",
        description: "Fresh concrete rheology, core recovery, and accelerated durability testing.",
        items: [
          "Compressive Strength Test (Cubes, Cylinders, Drilled Cores)",
          "Flexural Strength & Splitting Tensile Strength",
          "Water Permeability / Depth of Water Penetration under Pressure (DIN 1048)",
          "Rapid Chloride Penetration Test (RCPT - ASTM C1202)",
          "Rapid Chloride Migration Test (RCMT - NT BUILD 492)",
          "Modulus of Elasticity & Poisson's Ratio in Concrete",
          "Accelerated Curing Compressive Strength (Warm / Boiling Water Method)"
        ]
      },
      {
        title: "Steel, Rebars & Couplers",
        description: "Mechanical verification of reinforcement, prestressing tendons, and structural members.",
        items: [
          "Tensile Strength, Yield Strength, 0.2% Proof Stress & Percentage Elongation",
          "Bend & Re-Bend Tests on TMT Rebars (IS 1786)",
          "Mechanical Coupler Static Tensile & Cyclic Slip Verification",
          "Prestressing Seven-Wire Strand Breaking Strength & Modulus (IS 14268)",
          "Charpy V-Notch Impact Test at ambient and sub-zero temperatures",
          "Rockwell & Brinell Hardness Tests",
          "Weldment Macro Examination & Transverse Tensile Tests"
        ]
      }
    ],
    standardsAndCodes: ["IS 269", "IS 383", "IS 516", "IS 1786", "IS 14268", "ASTM C39", "ASTM C1202", "ASTM A370"],
    relatedProjectSlugs: ["deendayal-port-oil-jetty", "auda-elevated-corridor", "mundra-petrochem-investigation"],
    seoTitle: "Construction Material Testing Services | SIMCON Technology",
    seoDescription: "NABL-accredited testing of concrete, aggregates, cement, bitumen, steel rebars, couplers, and chemical parameters by SIMCON Technology."
  },
  {
    id: "advanced-surveying-mapping",
    number: "05",
    slug: "advanced-surveying-mapping",
    title: "Advanced Surveying & Mapping",
    shortDescription: "High-precision topographic mapping, drone photogrammetry, and DGPS surveys for engineering alignments and infrastructure master plans.",
    fullDescription: "Accurate spatial coordinates form the baseline of every civil engineering endeavor. SIMCON utilizes dual-frequency RTK-DGPS receivers, robotic total stations, and UAV photogrammetry to provide millimeter-accurate digital terrain models (DTM), contour maps, right-of-way corridor surveys, and volume calculations.",
    iconName: "Compass",
    heroImage: "/assets/projects/geotechnical-drilling-rig-highway.png",
    category: "Surveying & Geomatics",
    keyCapabilities: [
      "Differential Global Positioning System (DGPS) ground control network establishment",
      "High-precision topographic and contour surveying for highways, railways, and ports",
      "Drone / UAV aerial mapping, orthomosaic generation, and photogrammetric 3D surface models",
      "Route alignment surveys, cross-sections, and L-section profiling",
      "Earthwork cut-and-fill volume computation with certified quantity reports",
      "Bathymetric soundings for nearshore marine jetties and intake channels"
    ],
    standardsAndCodes: ["Survey of India Standards", "IRC:SP:19", "IRC:SP:54"],
    relatedProjectSlugs: ["ahmedabad-svpi-airport-gpr", "imc-terminal-kandla-survey", "khavda-200mw-hybrid-project"],
    seoTitle: "Advanced Surveying & Mapping | SIMCON Technology",
    seoDescription: "Precision DGPS topographic surveying, drone aerial mapping, contour modeling, and alignment surveys by SIMCON Technology."
  },
  {
    id: "advanced-field-testing",
    number: "06",
    slug: "advanced-field-testing",
    title: "Advanced Field Testing",
    shortDescription: "In-situ deep foundation testing, static and dynamic pile load tests, plate load tests, pressuremeter, and cone penetration tests.",
    fullDescription: "Field testing validates theoretical geotechnical assumptions under actual site stresses. SIMCON maintains specialized loading frames, automatic hydraulic jacks, load cells, digital displacement transducers, and calibrated pile driving analyzers to execute high-capacity pile tests, plate load tests, and deep in-situ penetration assessments across India.",
    iconName: "Gauge",
    heroImage: "/assets/services/field-testing/scpt-rig-field-operation.png",
    category: "In-Situ Field Testing",
    keyCapabilities: [
      "Vertical Pile Load Test (Static & Cyclic) via Kentledge or Anchor Pile / Reaction Rock Anchor setups",
      "Lateral Pile Load Test with digital dial gauges and electronic load cells",
      "Pull-Out (Tension) Pile Load Test for transmission towers, wind turbines, and uplift piles",
      "Bi-Directional Static Load Testing (Osterberg Cell method) for high-capacity piles",
      "High Strain Dynamic Pile Load Testing (PDA / DPLT) with CAPWAP signal matching analysis",
      "Static and Cyclic Plate Load Test (PLT) for allowable bearing pressure and subgrade modulus (k-value)",
      "Block Vibration Test (BVT) for machine foundation dynamic design parameters (Cu, Cx, Cphi)",
      "Menard Pressuremeter Test (PMT) for in-situ modulus of elasticity and limit pressure",
      "Piezocone Penetration Test (ECPTU) with continuous pore pressure dissipation monitoring"
    ],
    subDisciplines: [
      {
        title: "Deep Foundation Testing Fleet",
        description: "Capacity testing across bored cast-in-situ piles, driven precast piles, and barrettes.",
        items: [
          "Vertical Compression Load Test up to thousands of tonnes",
          "Reaction Kentledge frames & High-tensile anchor pile load frames",
          "Lateral Load Testing to determine lateral subgrade reaction and bending moments",
          "Tension Pull-Out Tests for uplift and wind loads",
          "Bi-Directional Cell testing for ultra-deep foundations",
          "PDA Dynamic Testing for quick mobilization and drivability evaluation"
        ]
      },
      {
        title: "In-Situ Soil Characterization",
        description: "Direct in-situ mechanical measurements without sampling disturbance.",
        items: [
          "Static Cone Penetration (SCPT) and Dynamic Cone Penetration (DCPT)",
          "Electric Piezocone Penetration (ECPTU)",
          "Field Vane Shear Testing in soft marine clays and fine deposits",
          "Modulus of Subgrade Reaction (K-Value) for rigid highway pavements & slab design",
          "Field CBR tests for subgrade evaluation",
          "Double Packer borehole permeability testing in jointed rock"
        ]
      }
    ],
    standardsAndCodes: ["IS 2911 (Part 4)", "IS 1888", "IS 5249", "ASTM D1143", "ASTM D3689", "ASTM D3966", "ASTM D4945"],
    relatedProjectSlugs: ["mahsr-bullet-train-sabarmati", "auda-elevated-corridor", "iffco-kandla-pile-testing"],
    seoTitle: "Advanced Field Testing Services | SIMCON Technology",
    seoDescription: "NABL-accredited pile load tests (static, dynamic, lateral, pull-out), plate load tests, pressuremeter, and in-situ field testing across India."
  },
  {
    id: "instrumentation-monitoring",
    number: "07",
    slug: "instrumentation-monitoring",
    title: "Instrumentation & Monitoring",
    shortDescription: "Real-time geotechnical and structural health monitoring for tunnels, deep excavations, retaining walls, and embankments.",
    fullDescription: "Complex underground and transit construction demands continuous surveillance to verify ground movements remain within design tolerances. SIMCON provides automated and manual geotechnical instrumentation systems including vibrating wire piezometers, inclinometers, load cells, and ground settlement sensors for safety critical infrastructure.",
    iconName: "MonitorCheck",
    heroImage: "/assets/services/structural-health/structural-vibration-monitoring.png",
    category: "Monitoring & Safety",
    keyCapabilities: [
      "In-place and manual digital inclinometer systems for lateral ground movement tracking in diaphragm walls",
      "Vibrating wire piezometers for pore water pressure and groundwater drawdown monitoring",
      "Multi-point borehole extensometers (MPBX) for settlement and heave measurement in tunnels",
      "Automated total station (AMTS) networks for continuous optical 3D displacement monitoring",
      "Vibration monitoring (Peak Particle Velocity - PPV) during blasting, pile driving, and compaction",
      "Tiltmeters and crack meters on existing structures adjacent to deep excavations"
    ],
    standardsAndCodes: ["ASTM D6230", "ASTM D4622", "BS 5930"],
    relatedProjectSlugs: ["rishikesh-karnaprayag-railway-tunnel", "bhopal-metro-rail"],
    seoTitle: "Instrumentation & Geotechnical Monitoring | SIMCON Technology",
    seoDescription: "Automated instrumentation, inclinometer monitoring, vibrating wire piezometers, and vibration monitoring by SIMCON Technology."
  },
  {
    id: "structural-health-assessment",
    number: "08",
    slug: "structural-health-assessment",
    title: "Structural Health Assessment & NDT",
    shortDescription: "Non-destructive testing, bridge proof load tests, seismic vulnerability reviews, and condition assessment of vital structures.",
    fullDescription: "Aging infrastructure and structures subjected to environmental exposure, thermal stresses, or retrofitting requirements necessitate rigorous non-destructive evaluation. SIMCON conducts structural health diagnostics on thermal power plants, major railway bridges, commercial terminals, and government premises.",
    iconName: "Building2",
    heroImage: "/assets/services/ndt/rebound-hammer-concrete-testing.jpeg",
    category: "Structural Integrity & Diagnostics",
    keyCapabilities: [
      "Low Strain Pile Integrity Testing (PIT) for pile length verification and continuity defects",
      "Cross-Hole Sonic Logging (CHSL / CHUM) for drilled shaft concrete integrity and defect location",
      "Rebound Hammer (Schmidt Hammer) and Ultrasonic Pulse Velocity (UPV) for concrete quality mapping",
      "Half-Cell Potential testing to identify rebar active corrosion zones (ASTM C876)",
      "Cover Meter / Profometer electromagnetic scanning for rebar diameter and concrete cover depth",
      "Carbonation Depth measurement via phenolphthalein indicator spray",
      "Static and moving bridge span proof load testing with electronic deflection gauges",
      "Comprehensive structural condition assessment reports for government premises and industrial complexes"
    ],
    standardsAndCodes: ["IS 13311 (Parts 1 & 2)", "IS 14893", "ASTM D5882", "ASTM D6760", "ASTM C876", "IRC:SP:51"],
    relatedProjectSlugs: ["adani-thermal-power-plant", "secr-railway-tunnels-bridges", "pitol-jhabua-bridge-testing"],
    seoTitle: "Structural Health Assessment & NDT | SIMCON Technology",
    seoDescription: "Non-destructive testing (UPV, Rebound Hammer, Half-Cell), pile integrity testing (PIT/CHSL), bridge load testing, and structural health assessment."
  }
];

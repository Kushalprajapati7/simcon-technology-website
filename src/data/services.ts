export interface SubDisciplineItem {
  id: string;
  title: string;
  codeRef?: string;
  description: string;
  matricesCovered?: string[];
  items: string[];
}

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
  subDisciplines?: SubDisciplineItem[];
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
  // =========================================================================
  // PILLAR 1: GEOTECHNICAL SERVICES
  // =========================================================================
  {
    id: "geotechnical-services",
    number: "01",
    slug: "geotechnical-services",
    title: "Geotechnical Services",
    shortDescription: "NABL-accredited soil & rock laboratory testing, deep rotary core drilling, and advanced in-situ field testing across India.",
    fullDescription: "SIMCON Technology delivers comprehensive geotechnical engineering investigations across diverse geological strata. Equipped with a modernized fleet of hydraulic rotary diamond coring rigs, calibrated field penetration setups, and central NABL-accredited soil and rock mechanics laboratories, we provide verifiable foundation parameters for railways, metro viaducts, ports, and industrial structures.",
    iconName: "Layers",
    heroImage: "/assets/projects/nhai-expressway-geotechnical-site-drilling.png",
    category: "Geotechnical Engineering",
    keyCapabilities: [
      "Deep rotary core drilling in hard rock, weathered formations, and cohesive soils",
      "Standard Penetration Testing (SPT) with continuous energy-calibrated recordings",
      "Undisturbed soil sampling (Shelby tubes, piston samplers) for lab shear and consolidation",
      "Comprehensive laboratory soil mechanics & automated triaxial compression tests",
      "Intact rock mechanics geomechanical testing, Brazilian tensile, and Hoek cell triaxial",
      "Advanced in-situ pile load testing (static, dynamic, lateral, uplift) and plate load tests"
    ],
    subDisciplines: [
      {
        id: "soil-testing",
        title: "Soil Laboratory Testing",
        description: "Comprehensive physical, mechanical, index, and consolidation properties determined in NABL-accredited laboratories.",
        items: [
          "Grain Size Analysis – Sieve & Hydrometer Analysis",
          "Atterberg’s Limit Test",
          "Specific Gravity Test",
          "Relative Density Test",
          "Free Swell Index",
          "Swelling Pressure Test",
          "Compaction Test – Standard & Modified Proctor",
          "Laboratory CBR Test – Soaked & Unsoaked",
          "Permeability Test",
          "Digital Direct Shear Test",
          "Laboratory Vane Shear Test",
          "Unconfined Compressive Strength (UCS) Test",
          "Automatic Triaxial Compression Test – UU, CU & CD",
          "Digital Consolidation Test"
        ]
      },
      {
        id: "rock-testing",
        title: "Rock Laboratory Testing",
        description: "Geomechanical and petrographic testing of rock core specimens for tunnels, deep foundations, and slope stability.",
        items: [
          "Petrographic Analysis",
          "Density Test",
          "Specific Gravity Test",
          "Porosity Test",
          "Water Absorption Test",
          "Slake Durability Index Test",
          "Cerchar Abrasivity Index Test",
          "Schmidt Impact Hammer Test",
          "Point Load Strength Index Test",
          "Uniaxial Compressive Strength (UCS) Test",
          "Brazilian Tensile Strength Test",
          "Modulus of Elasticity & Poisson’s Ratio for Rock",
          "Rock Triaxial Compression Test"
        ]
      },
      {
        id: "field-testing",
        title: "Advanced Field Testing",
        description: "Specialized in-situ foundation testing and penetration methods validating geotechnical load capacities.",
        items: [
          "Static / Dynamic Cone Penetration Test (SCPT/DCPT)",
          "Standard Penetration Test (SPT)",
          "Modulus of Subgrade Reaction Test (K-Value Test)",
          "Field CBR Test",
          "Field Vane Shear Test",
          "ECPTU – Electrical Cone Penetration Test with Pore Pressure Measurement",
          "Field Permeability Test",
          "Pressuremeter Test – In-Situ Modulus of Elasticity",
          "Bi-Directional Load Test",
          "Static/Cyclic Plate Load Test (PLT)",
          "Static/Cyclic Pile Load Test – Vertical, Pullout & Lateral (SPLT)",
          "High Strain Pile Dynamic Test (DPLT)",
          "Block Vibration Test (BVT)"
        ]
      }
    ],
    softwareTools: [
      { name: "PLAXIS 2D", purpose: "Finite-element soil-structure interaction & deep excavation modeling" },
      { name: "LPILE", purpose: "Non-linear lateral load-deflection analysis of deep pile foundations" },
      { name: "StoneC", purpose: "Stone-column design and vibro-replacement ground improvement" },
      { name: "LIQSVS", purpose: "Liquefaction potential assessment and cyclic stress ratio calculations" },
      { name: "OpenGround & gINT", purpose: "Borehole data management, geological logs, and 3D subsurface mapping" }
    ],
    standardsAndCodes: ["IS 1892", "IS 2131", "IS 2720", "IS 13030", "IS 2911", "ASTM D422", "ASTM D1586", "ASTM D2166"],
    relatedProjectSlugs: ["mahsr-bullet-train-sabarmati", "bhopal-metro-rail", "rishikesh-karnaprayag-railway-tunnel"],
    seoTitle: "Geotechnical Services | Soil, Rock & Field Testing | SIMCON Technology",
    seoDescription: "NABL-accredited geotechnical services including 14 soil laboratory tests, 13 rock laboratory tests, and 13 advanced in-situ field tests across India."
  },

  // =========================================================================
  // PILLAR 2: GEOPHYSICAL SURVEY
  // =========================================================================
  {
    id: "geophysical-survey",
    number: "02",
    slug: "geophysical-survey",
    title: "Geophysical Survey",
    shortDescription: "Non-invasive subsurface imaging, seismic profiling, electrical resistivity, and radar surveys for engineering projects.",
    fullDescription: "SIMCON provides high-resolution geophysical exploration techniques to profile subsurface stratigraphy, detect buried cavities, evaluate bedrock rippability, and calculate dynamic elastic moduli. Geophysical surveys enable continuous cross-sectional mapping across vast alignments without disturbing existing utilities or active traffic.",
    iconName: "Activity",
    heroImage: "/assets/services/geophysical/masw-seismic-imaging-2d.png",
    category: "Subsurface Geophysics",
    keyCapabilities: [
      "Multichannel Analysis of Surface Waves (MASW) for shear wave velocity (Vs30) & seismic site classification",
      "Seismic Refraction Tomography (SRT) for bedrock depth, rippability, and fault delineation",
      "Crosshole Seismic Test (CHST) and Downhole Seismic Test (DHT) for in-situ dynamic elastic parameters",
      "2D & 3D Electrical Resistivity Tomography (ERT) for lithological variation and water table mapping",
      "Ground Penetrating Radar (GPR) for underground utility mapping, void detection, and pavement profiling",
      "Thermal Resistivity Testing for high-voltage underground transmission and renewable power alignments"
    ],
    subDisciplines: [
      {
        id: "geophysical-methods",
        title: "Geophysical Survey Disciplines",
        description: "10 non-invasive subsurface geophysical exploration methods for linear infrastructure and plant sites.",
        items: [
          "Multichannel Analysis of Surface Waves (MASW)",
          "Seismic Refraction Test (SRT)",
          "Crosshole Seismic Test (CHST)",
          "Downhole Seismic Test (DHT)",
          "Electrical Resistivity Tomography – 2D & 3D ERT Survey",
          "Vertical Electrical Sounding (VES)",
          "Ground Penetrating Radar Test (GPR)",
          "Thermal Resistivity Test",
          "Borehole Deviation Test",
          "Geo-Mapping – Open Pit Foundation"
        ]
      }
    ],
    softwareTools: [
      { name: "GeoGiga Seismic Pro", purpose: "Seismic refraction & surface wave dispersion curve inversion" },
      { name: "Object Mapper", purpose: "GPR post-processing, utility trace extraction, and 3D subsurface imaging" },
      { name: "IGIS", purpose: "Electrical Resistivity Tomography (ERT) and VES 2D/3D inversion processing" },
      { name: "Thermtest", purpose: "Thermal conductivity and soil thermal resistivity data analysis" },
      { name: "Lakkolit", purpose: "Downhole and crosshole seismic wave travel-time processing" }
    ],
    standardsAndCodes: ["ASTM D5777", "ASTM D4428", "ASTM D6432", "IS 15681", "IS 1893", "IEEE 442"],
    relatedProjectSlugs: ["rishikesh-karnaprayag-railway-tunnel", "ahmedabad-svpi-airport-gpr", "khavda-200mw-hybrid-project"],
    seoTitle: "Geophysical Survey Services | MASW, ERT & GPR | SIMCON Technology",
    seoDescription: "Advanced geophysical investigations including MASW, Seismic Refraction, ERT 2D/3D, GPR utility mapping, and thermal resistivity testing by SIMCON."
  },

  // =========================================================================
  // PILLAR 3: NDT AND STRUCTURAL INTEGRITY ASSESSMENT
  // =========================================================================
  {
    id: "ndt-structural-integrity",
    number: "03",
    slug: "ndt-structural-integrity",
    title: "NDT and Structural Integrity Assessment",
    shortDescription: "Non-destructive testing, pile integrity evaluation, bridge proof load testing, and structural condition diagnostics.",
    fullDescription: "Aging infrastructure and structures exposed to environmental, thermal, or seismic stresses require objective non-destructive diagnostics. SIMCON provides rigorous field testing on highway bridges, metro stations, industrial plants, and government structures using calibrated acoustic, electromagnetic, and ultrasonic instruments.",
    iconName: "Building2",
    heroImage: "/assets/services/ndt/rebound-hammer-concrete-testing.jpeg",
    category: "Structural Diagnostics & NDT",
    keyCapabilities: [
      "Low Strain Pile Integrity Testing (PIT) for pile shaft continuity and length verification",
      "Cross-Hole Sonic Logging (CHSL/CHUM) for drilled shaft concrete integrity and defect localization",
      "Rebound Hammer and Ultrasonic Pulse Velocity (UPV) for in-situ concrete quality mapping",
      "Half-Cell Potential testing to identify active rebar corrosion zones (ASTM C876)",
      "Cover Meter / Profometer scanning for rebar diameter and concrete cover depth",
      "Proof load testing on highway and railway bridge spans with electronic displacement tracking",
      "Comprehensive structural condition evaluation and life extension advisory"
    ],
    subDisciplines: [
      {
        id: "ndt-testing",
        title: "Non-Destructive Testing (NDT)",
        description: "Specialized in-situ physical and acoustic diagnostic tests for concrete structures and deep piles.",
        items: [
          "Low Strain Pile Integrity Test (PIT)",
          "Half-Cell Potential Test",
          "Rebound Hammer Test",
          "Cover Meter / Profometer Test",
          "Span / Bridge Load Test",
          "Carbonation Depth Test",
          "Ultrasonic Pulse Velocity (UPV)",
          "Cross-Hole Sonic Logging Test (CHST/CHUM)"
        ]
      },
      {
        id: "structural-health",
        title: "Structural Health Assessment",
        description: "Condition assessment, vibration monitoring, distress root-cause evaluation, and rehabilitation advisory.",
        items: [
          "Span Deflection & Proof Load Verification",
          "Vibration & Dynamic Response Monitoring",
          "Distress, Cracking & Carbonation Root-Cause Analysis",
          "Structural Capacity Assessment & Retrofitting Solutions"
        ]
      }
    ],
    softwareTools: [
      { name: "PIT-W", purpose: "Low strain pile integrity acoustic wave velocity signal processing" },
      { name: "CHA-W", purpose: "Cross-hole sonic logging tomographic imaging and defect mapping" },
      { name: "Proceq Live", purpose: "Rebound hammer and cover meter digital field data acquisition" }
    ],
    standardsAndCodes: ["IS 13311 (Parts 1 & 2)", "IS 14893", "ASTM D5882", "ASTM D6760", "ASTM C876", "IRC:SP:51"],
    relatedProjectSlugs: ["adani-thermal-power-plant", "secr-railway-tunnels-bridges", "pitol-jhabua-bridge-testing"],
    seoTitle: "NDT & Structural Integrity Assessment | SIMCON Technology",
    seoDescription: "NABL-accredited NDT testing (UPV, Rebound Hammer, Half-Cell), pile integrity testing (PIT/CHSL), bridge load tests, and structural health assessment."
  },

  // =========================================================================
  // PILLAR 4: MATERIAL TESTING SERVICES
  // =========================================================================
  {
    id: "material-testing-services",
    number: "04",
    slug: "material-testing-services",
    title: "Material Testing Services",
    shortDescription: "NABL-accredited laboratory testing of cement, aggregates, bitumen, masonry, concrete, steel rebars, and chemical parameters.",
    fullDescription: "SIMCON operates state-of-the-art NABL-accredited central testing laboratories equipped with automated compression testing machines, servo-hydraulic UTMs, bitumen rheometers, and analytical chemistry instruments. We validate over 581 individual parameters in strict compliance with IS, ASTM, BS, and IRC standards.",
    iconName: "FlaskConical",
    heroImage: "/assets/services/materials/universal-testing-machine-utm-steel.png",
    category: "Construction Material Testing",
    keyCapabilities: [
      "Physical and mechanical testing of cementitious binders (OPC, PPC, PSC, fly ash, GGBS)",
      "Aggregate grading, crushing, impact, abrasion, soundness, and petrographic evaluation",
      "Bituminous binder rheology, viscosity, penetration, softening point, and Marshall stability",
      "Masonry testing: compressive strength, water absorption, and efflorescence on bricks, blocks & pavers",
      "Fresh & hardened concrete testing: core compressive strength, durability, RCPT, and RCMT",
      "Steel rebar tensile yield strength, bend/re-bend, coupler static tensile, and prestressing strands",
      "Chemical analysis across 6 matrices: cement, aggregates, admixtures, soil/bentonite, water, and steel"
    ],
    subDisciplines: [
      {
        id: "cementitious",
        title: "Cementitious Material Testing",
        description: "Rigorous physical and chemical evaluation of binding matrices including cement, fly ash, and GGBS.",
        items: [
          "Compressive Strength Test",
          "Standard Consistency Test",
          "Initial & Final Setting Time Test",
          "Fineness Test – Blaine Air Permeability / Sieve Method",
          "Cement Soundness Test – Le Chatelier / Autoclave Method",
          "Density / Specific Gravity Test",
          "Drying Shrinkage Test",
          "Lime Reactivity Test",
          "Slag Activity Index Test",
          "Moisture Content Determination"
        ]
      },
      {
        id: "aggregates",
        title: "Aggregate Testing",
        description: "Physical, mechanical, and grading properties of fine and coarse mineral aggregates.",
        items: [
          "Sieve Analysis / Grading Test",
          "Specific Gravity & Water Absorption Test",
          "Bulk Density & Voids Test",
          "Aggregate Crushing Value Test",
          "Aggregate Impact Value Test",
          "Los Angeles / Aggregate Abrasion Value Test",
          "Ten Percent Fines Value Test",
          "Flakiness Index Test",
          "Elongation Index Test",
          "Combined Flakiness & Elongation Index Test",
          "Aggregate Soundness Test – Na₂SO₄ / MgSO₄",
          "Deleterious Materials Determination – Clay Lumps, Soft Particles, Coal & Lignite",
          "Fines / Silt Content Determination",
          "Sand Equivalent Test",
          "Petrographic Examination"
        ]
      },
      {
        id: "bituminous",
        title: "Bituminous Material Testing",
        description: "Pavement binder rheology, viscosity, penetration, and asphalt mix stability tests.",
        items: [
          "Penetration",
          "Ductility",
          "Softening Point",
          "Absolute Viscosity",
          "Kinematic Viscosity",
          "Saybolt Furol Viscosity",
          "Flash Point",
          "Specific Gravity",
          "Loss on Heating",
          "Solubility",
          "Stripping Value",
          "Marshall Stability & Flow",
          "Binder Content",
          "Paraffin Wax Content",
          "Particle Charge",
          "Residue by Evaporation",
          "Residue on 600 µm Sieve",
          "Miscibility with Water",
          "Low-Temperature Coagulation"
        ]
      },
      {
        id: "masonry",
        title: "Masonry Material Testing (Brick, Block, Paver & Tile Tests)",
        description: "Structural bricks, concrete blocks, interlocking pavers, kerb stones, and ceramic tiles.",
        items: [
          "Compressive Strength Test",
          "Water Absorption Test",
          "Density / Dry Density Determination",
          "Dimensional Measurement & Tolerance",
          "Drying Shrinkage Test",
          "Moisture Movement Test",
          "Efflorescence Test",
          "Abrasion Resistance Test",
          "Splitting Tensile Strength Test",
          "Flexural Strength / Breaking Load Test",
          "Modulus of Rupture Test",
          "Surface Quality Assessment",
          "Chemical Resistance Test – Tiles",
          "Masonry Mortar Compressive Strength Test"
        ]
      },
      {
        id: "concrete",
        title: "Concrete Testing",
        description: "Fresh concrete rheology, hardened strength, durability parameters, and permeability testing.",
        items: [
          "Concrete Slump Test",
          "Air Content Test",
          "Bleeding Test",
          "Initial & Final Setting Time Test",
          "Compressive Strength Test – Cube / Cylinder",
          "Concrete Core Compressive Strength Test",
          "Accelerated Curing Compressive Strength Test",
          "Flexural Strength Test",
          "Splitting Tensile Strength Test",
          "Density Determination",
          "Water Permeability / Depth of Water Penetration under Pressure Test",
          "Drying Shrinkage / Length Change Test",
          "Modulus of Elasticity & Poisson’s Ratio Test",
          "Rapid Chloride Penetration Test (RCPT)",
          "Rapid Chloride Migration Test (RCMT)"
        ]
      },
      {
        id: "steel-metals",
        title: "Steel, Metals & Weld Mechanical Testing",
        description: "Mechanical testing of TMT rebars, structural steel sections, mechanical couplers, and welds.",
        items: [
          "Tensile Test – Tensile Strength, Yield Strength, 0.2% Proof Stress & Elongation",
          "Bend Test / Re-Bend Test",
          "Coupler Static Tensile Test",
          "Mass per Metre Determination",
          "Prestressing Strand Breaking Strength Test",
          "Prestressing Strand Dimensional & Mass Verification",
          "Face Bend Test",
          "Root Bend Test",
          "Nick Break / Fracture Test",
          "Transverse Bend Test",
          "Transverse Tensile Test",
          "Charpy Impact Test",
          "Rockwell Hardness Test",
          "Macroscopic Examination"
        ]
      },
      {
        id: "chemical-testing",
        title: "Chemical Testing",
        description: "NABL-accredited analytical wet chemistry and spectrophotometric testing across construction matrices.",
        matricesCovered: [
          "Cement & Cementitious Materials",
          "Aggregates & Concrete",
          "Admixtures",
          "Soil, Bentonite & Polymer",
          "Construction Water & Drinking Water",
          "Steel, Metals & Alloys"
        ],
        items: [
          "pH",
          "Chloride",
          "Sulphate / SO₃",
          "Alkali Content",
          "Loss on Ignition",
          "Insoluble Residue",
          "Free Lime",
          "Moisture Content",
          "Major Oxides (SiO₂, Al₂O₃, CaO, MgO, Fe₂O₃)",
          "Organic Matter",
          "Alkali–Aggregate Reactivity",
          "Acidity / Alkalinity",
          "TDS / TSS",
          "Total Hardness",
          "Fixed & Volatile Residue",
          "Steel / Alloy Composition",
          "Zinc Coating Mass"
        ]
      }
    ],
    softwareTools: [
      { name: "Servo-Hydraulic UTM Software", purpose: "Automated stress-strain curves, proof stress, and elongation logging" },
      { name: "Digital Compression Console", purpose: "Controlled pace-rate cube and cylinder compressive failure logging" }
    ],
    standardsAndCodes: ["IS 269", "IS 383", "IS 516", "IS 1786", "IS 14268", "IS 456", "ASTM C39", "ASTM C1202", "ASTM A370"],
    relatedProjectSlugs: ["deendayal-port-oil-jetty", "auda-elevated-corridor", "mundra-petrochem-investigation"],
    seoTitle: "Material Testing Services | NABL Accredited | SIMCON Technology",
    seoDescription: "NABL-accredited material testing for cement, aggregates, bitumen, masonry, concrete, steel, and chemical testing across 6 matrices."
  },

  // =========================================================================
  // LEGACY ALIASES (Ensures any previous bookmarks/links resolve smoothly)
  // =========================================================================
  {
    id: "geotechnical-investigation",
    number: "01",
    slug: "geotechnical-investigation",
    title: "Geotechnical Investigation",
    shortDescription: "Subsurface exploration, rotary rock coring, and characterization (Part of Geotechnical Services).",
    fullDescription: "Please refer to Geotechnical Services for our comprehensive scope including soil, rock, and advanced field testing.",
    iconName: "Layers",
    heroImage: "/assets/projects/nhai-expressway-geotechnical-site-drilling.png",
    category: "Geotechnical Engineering",
    keyCapabilities: ["Rotary Core Drilling", "SPT", "Undisturbed Sampling", "Permeability Testing"],
    relatedProjectSlugs: ["mahsr-bullet-train-sabarmati"],
    seoTitle: "Geotechnical Investigation | SIMCON Technology",
    seoDescription: "Geotechnical subsurface exploration and laboratory testing."
  },
  {
    id: "material-testing",
    number: "04",
    slug: "material-testing",
    title: "Construction Material Testing",
    shortDescription: "Laboratory testing of concrete, aggregates, steel, bitumen, and chemical parameters.",
    fullDescription: "Please refer to Material Testing Services for complete details.",
    iconName: "FlaskConical",
    heroImage: "/assets/services/materials/universal-testing-machine-utm-steel.png",
    category: "Construction Material Testing",
    keyCapabilities: ["Cementitious Testing", "Aggregate Testing", "Concrete Testing", "Steel Testing"],
    relatedProjectSlugs: ["deendayal-port-oil-jetty"],
    seoTitle: "Construction Material Testing | SIMCON Technology",
    seoDescription: "NABL accredited material testing."
  },
  {
    id: "structural-health-assessment",
    number: "03",
    slug: "structural-health-assessment",
    title: "Structural Health Assessment & NDT",
    shortDescription: "Non-destructive testing, bridge proof load tests, and structural health diagnostics.",
    fullDescription: "Please refer to NDT and Structural Integrity Assessment for complete details.",
    iconName: "Building2",
    heroImage: "/assets/services/ndt/rebound-hammer-concrete-testing.jpeg",
    category: "NDT & Structural Diagnostics",
    keyCapabilities: ["Pile Integrity Testing", "Cross-Hole Sonic Logging", "Rebound Hammer", "Bridge Load Tests"],
    relatedProjectSlugs: ["adani-thermal-power-plant"],
    seoTitle: "Structural Health Assessment & NDT | SIMCON Technology",
    seoDescription: "Non-destructive testing and structural diagnostics."
  }
];

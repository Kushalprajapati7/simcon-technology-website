export interface TestParameter {
  id: string;
  name: string;
  standard: string;
  category: string;
  labLocation: string;
  typicalApplication: string;
}

export const PARAMETER_CATEGORIES = [
  "All Disciplines",
  "Soil Laboratory Mechanics",
  "Rock Mechanics",
  "In-Situ Geotech Testing",
  "Construction Material Testing",
  "Steel & Rebar Testing",
  "Chemical Analysis",
  "Non-Destructive Testing (NDT)",
  "Geophysical Surveys"
] as const;

export const VERIFIED_TEST_PARAMETERS: TestParameter[] = [
  // 1. Soil Laboratory Mechanics
  {
    id: "soil-1",
    name: "Consolidated Undrained (CU) Triaxial Compression with Pore Water Pressure Measurement",
    standard: "IS 2720 (Part 12)",
    category: "Soil Laboratory Mechanics",
    labLocation: "Gandhidham & Ahmedabad",
    typicalApplication: "Effective shear strength parameters (c', φ') for deep foundations and slope stability"
  },
  {
    id: "soil-2",
    name: "Unconsolidated Undrained (UU) Triaxial Compression Test",
    standard: "IS 2720 (Part 11)",
    category: "Soil Laboratory Mechanics",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Short-term undrained shear strength (cu) for rapid embankment loading"
  },
  {
    id: "soil-3",
    name: "Direct Shear Test (Small & Large Shear Box)",
    standard: "IS 2720 (Part 13)",
    category: "Soil Laboratory Mechanics",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Cohesion and angle of internal friction for sandy and granular strata"
  },
  {
    id: "soil-4",
    name: "One-Dimensional Consolidation (Oedometer) & Swelling Pressure",
    standard: "IS 2720 (Part 15)",
    category: "Soil Laboratory Mechanics",
    labLocation: "Gandhidham & Ahmedabad",
    typicalApplication: "Compression index (Cc), coefficient of consolidation (Cv), and primary settlement calculation"
  },
  {
    id: "soil-5",
    name: "California Bearing Ratio (CBR) - Soaked & Unsoaked (4-Day Soaking)",
    standard: "IS 2720 (Part 16)",
    category: "Soil Laboratory Mechanics",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Flexible pavement crust design for NHAI highways, expressways, and port pavements"
  },
  {
    id: "soil-6",
    name: "Grain Size Distribution by Wet Sieve & Hydrometer Analysis",
    standard: "IS 2720 (Part 4)",
    category: "Soil Laboratory Mechanics",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Soil classification (ISCS) and liquefaction grain-size boundary verification"
  },
  {
    id: "soil-7",
    name: "Atterberg Limits (Liquid Limit via Casagrande / Cone, Plastic & Shrinkage Limits)",
    standard: "IS 2720 (Part 5 & 6)",
    category: "Soil Laboratory Mechanics",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Plasticity index (PI) and expansive soil categorization"
  },
  {
    id: "soil-8",
    name: "Modified & Standard Proctor Compaction (MDD & OMC)",
    standard: "IS 2720 (Part 7 & 8)",
    category: "Soil Laboratory Mechanics",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Optimum moisture and maximum dry density for subgrade and embankment compaction"
  },
  {
    id: "soil-9",
    name: "Permeability of Soil by Constant & Falling Head Method",
    standard: "IS 2720 (Part 17)",
    category: "Soil Laboratory Mechanics",
    labLocation: "Gandhidham & Ahmedabad",
    typicalApplication: "Hydraulic conductivity (k) for dewatering, seepage analysis, and drainage design"
  },
  {
    id: "soil-10",
    name: "Free Swell Index & Differential Swelling Test",
    standard: "IS 2720 (Part 40)",
    category: "Soil Laboratory Mechanics",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Black cotton soil swelling characterization"
  },
  {
    id: "soil-11",
    name: "Unconfined Compressive Strength (UCS) of Soil Cores",
    standard: "IS 2720 (Part 10)",
    category: "Soil Laboratory Mechanics",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Undrained cohesion (qu / 2) for clay strata"
  },

  // 2. Rock Mechanics
  {
    id: "rock-1",
    name: "Uniaxial Compressive Strength (UCS) of Saturated & Dry Rock Cores",
    standard: "IS 9143",
    category: "Rock Mechanics",
    labLocation: "Gandhidham & Ahmedabad",
    typicalApplication: "Intact rock strength classification for bridge pier foundations and tunnel excavation"
  },
  {
    id: "rock-2",
    name: "Point Load Strength Index (Is50) - Diametral & Axial",
    standard: "IS 8764",
    category: "Rock Mechanics",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Rapid rock strength estimation and correlation with UCS in field laboratories"
  },
  {
    id: "rock-3",
    name: "Brazilian Indirect Tensile Strength of Rock Discs",
    standard: "IS 10082",
    category: "Rock Mechanics",
    labLocation: "Gandhidham & Ahmedabad",
    typicalApplication: "Tensile splitting resistance for tunnel crown and rock mass support design"
  },
  {
    id: "rock-4",
    name: "Slake Durability Index of Argillaceous Rocks",
    standard: "IS 10050",
    category: "Rock Mechanics",
    labLocation: "Gandhidham",
    typicalApplication: "Weathering and slaking resistance of shales, mudstones, and phyllites"
  },
  {
    id: "rock-5",
    name: "Modulus of Elasticity (E) and Poisson's Ratio (μ) of Intact Rock",
    standard: "IS 9221",
    category: "Rock Mechanics",
    labLocation: "Gandhidham & Ahmedabad",
    typicalApplication: "Elastic deformability parameters for PLAXIS numerical modeling and socketed pile analysis"
  },

  // 3. In-Situ Geotech Testing
  {
    id: "insitu-1",
    name: "Standard Penetration Test (SPT) with Energy-Calibrated Trip Hammers",
    standard: "IS 2131",
    category: "In-Situ Geotech Testing",
    labLocation: "Pan-India Field Operations",
    typicalApplication: "N-value profiling, relative density, and liquefaction triggering assessment (Youd et al.)"
  },
  {
    id: "insitu-2",
    name: "Plate Load Test (PLT) - Cyclic & Sustained Modulus",
    standard: "IS 1888",
    category: "In-Situ Geotech Testing",
    labLocation: "Pan-India Field Operations",
    typicalApplication: "Safe bearing capacity and subgrade reaction modulus (k) for wind turbine and industrial rafts"
  },
  {
    id: "insitu-3",
    name: "Modulus of Subgrade Reaction (k-value) by 75cm Plate",
    standard: "IS 9214 / IRC 58",
    category: "In-Situ Geotech Testing",
    labLocation: "Pan-India Field Operations",
    typicalApplication: "Rigid pavement design for NHAI expressways and airport runways"
  },
  {
    id: "insitu-4",
    name: "Static Cone Penetration Test (CPTu) with Pore Pressure",
    standard: "IS 4968 (Part 3) / ASTM D5778",
    category: "In-Situ Geotech Testing",
    labLocation: "Pan-India Field Operations",
    typicalApplication: "Continuous tip resistance (qc), sleeve friction (fs), and soil profiling in coastal marine clays"
  },
  {
    id: "insitu-5",
    name: "Dynamic Cone Penetration Test (DCPT) - 50mm & 62.5mm",
    standard: "IS 4968 (Part 1 & 2)",
    category: "In-Situ Geotech Testing",
    labLocation: "Pan-India Field Operations",
    typicalApplication: "Rapid subsurface sounding along linear road alignments and canal reaches"
  },
  {
    id: "insitu-6",
    name: "Field Permeability Test (Single & Double Packer Tests in Rock)",
    standard: "IS 5529 (Part 2)",
    category: "In-Situ Geotech Testing",
    labLocation: "Pan-India Field Operations",
    typicalApplication: "Lugeon values and permeability of jointed rock masses for dam foundations and tunnels"
  },

  // 4. Construction Material Testing
  {
    id: "material-1",
    name: "Compressive Strength of Concrete Cubes & Cylinders (Digital Servo UTM)",
    standard: "IS 516 (Part 1: Sec 1)",
    category: "Construction Material Testing",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Quality assurance for structural concrete (M15 to M80) per MORTH and IRC 112"
  },
  {
    id: "material-2",
    name: "Flexural Strength of Concrete Beams (Third-Point Loading)",
    standard: "IS 516 (Part 1: Sec 1)",
    category: "Construction Material Testing",
    labLocation: "Gandhidham & Ahmedabad",
    typicalApplication: "Pavement quality concrete (PQC) flexural modulus for expressway tollways"
  },
  {
    id: "material-3",
    name: "Concrete Mix Design Formulation & Verification (Normal, HPC & SCC)",
    standard: "IS 10262:2019 / IS 456",
    category: "Construction Material Testing",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Optimized water-binder ratio and mineral admixture blends for mega-contractors"
  },
  {
    id: "material-4",
    name: "Coarse & Fine Aggregate Sieve Analysis, Fineness Modulus & Grading Zone",
    standard: "IS 2386 (Part 1)",
    category: "Construction Material Testing",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Granular sub-base (GSB), wet mix macadam (WMM), and concrete aggregate compliance"
  },
  {
    id: "material-5",
    name: "Aggregate Crushing, Impact Value (AIV) & Los Angeles Abrasion (LAA)",
    standard: "IS 2386 (Part 4)",
    category: "Construction Material Testing",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Mechanical toughness and degradation resistance of road ballast and wearing courses"
  },
  {
    id: "material-6",
    name: "Flakiness & Elongation Combined Index of Aggregates",
    standard: "IS 2386 (Part 1)",
    category: "Construction Material Testing",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Particle shape compliance for Dense Bituminous Macadam (DBM) and Bituminous Concrete (BC)"
  },
  {
    id: "material-7",
    name: "Bitumen Penetration, Softening Point & Ductility Tests",
    standard: "IS 1203 / IS 1205 / IS 1208",
    category: "Construction Material Testing",
    labLocation: "Gandhidham & Ahmedabad",
    typicalApplication: "Viscosity grade (VG-30, VG-40) and polymer-modified bitumen verification"
  },
  {
    id: "material-8",
    name: "Marshall Stability & Flow Test for Asphalt Mixes",
    standard: "ASTM D6927 / MS-2",
    category: "Construction Material Testing",
    labLocation: "Gandhidham & Ahmedabad",
    typicalApplication: "Volumetric properties (VMA, VFB, Air Voids) and optimum bitumen content determination"
  },

  // 5. Steel & Rebar Testing
  {
    id: "steel-1",
    name: "Tensile Strength, 0.2% Proof Stress (Yield) & Elongation of TMT Rebars",
    standard: "IS 1786 / IS 1608 (Part 1)",
    category: "Steel & Rebar Testing",
    labLocation: "Gandhidham & Ahmedabad",
    typicalApplication: "Fe 500D, Fe 550D, and Fe 600 structural reinforcement compliance"
  },
  {
    id: "steel-2",
    name: "Bend & Rebend Test of High-Strength Deformed Steel Bars",
    standard: "IS 1599 / IS 1786",
    category: "Steel & Rebar Testing",
    labLocation: "Gandhidham & Ahmedabad",
    typicalApplication: "Ductility and surface micro-crack inspection after 180° mandrel bending"
  },
  {
    id: "steel-3",
    name: "Nominal Mass per Meter & Cross-Sectional Area Verification",
    standard: "IS 1786",
    category: "Steel & Rebar Testing",
    labLocation: "Gandhidham & Ahmedabad",
    typicalApplication: "Weight tolerance checks against manufacturer roll marks"
  },

  // 6. Chemical Analysis
  {
    id: "chem-1",
    name: "Chemical Testing of Construction Water (pH, Chlorides, Sulphates, Organic Solids)",
    standard: "IS 456 / IS 3025",
    category: "Chemical Analysis",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Prevention of reinforcement corrosion and delayed ettringite formation in concrete"
  },
  {
    id: "chem-2",
    name: "Soil Chemical Aggressiveness (Sulphate SO4, Chloride Cl, Organic Content & pH)",
    standard: "IS 2720 (Part 26 & 27)",
    category: "Chemical Analysis",
    labLocation: "Gandhidham & Ahmedabad",
    typicalApplication: "Subsurface chemical exposure class selection (Severe/Extreme) for cement type selection"
  },
  {
    id: "chem-3",
    name: "Total Dissolved Solids (TDS) & Electrical Conductivity in Ground Water",
    standard: "IS 3025 (Part 14 & 16)",
    category: "Chemical Analysis",
    labLocation: "Gandhidham & Lucknow",
    typicalApplication: "Environmental assessment for buried steel structures and pipelines"
  },

  // 7. Non-Destructive Testing (NDT)
  {
    id: "ndt-1",
    name: "Ultrasonic Pulse Velocity (UPV) Test for Concrete Quality Grading",
    standard: "IS 13311 (Part 1)",
    category: "Non-Destructive Testing (NDT)",
    labLocation: "Pan-India Field Diagnostics",
    typicalApplication: "In-situ homogeneity, honeycombing, void detection, and crack depth assessment"
  },
  {
    id: "ndt-2",
    name: "Rebound Hammer (Schmidt Hammer) Surface Hardness Calibration",
    standard: "IS 13311 (Part 2)",
    category: "Non-Destructive Testing (NDT)",
    labLocation: "Pan-India Field Diagnostics",
    typicalApplication: "Comparative concrete surface compressive strength profiling"
  },
  {
    id: "ndt-3",
    name: "Low-Strain Pile Integrity Testing (PIT / Sonic Echo Method)",
    standard: "ASTM D5882",
    category: "Non-Destructive Testing (NDT)",
    labLocation: "Pan-India Field Diagnostics",
    typicalApplication: "Shaft continuity, necking, bulbing, and toe reflections of cast-in-situ bored piles"
  },
  {
    id: "ndt-4",
    name: "Concrete Core Extraction, Trimming & Compression Testing",
    standard: "IS 516 (Part 4) / IS 1199",
    category: "Non-Destructive Testing (NDT)",
    labLocation: "Gandhidham, Ahmedabad & Lucknow",
    typicalApplication: "Forensic structural verification when cube strength is disputed by project consultants"
  },
  {
    id: "ndt-5",
    name: "Electromagnetic Cover Meter & Rebar Location Survey (Ferroscan)",
    standard: "BS 1881 (Part 204)",
    category: "Non-Destructive Testing (NDT)",
    labLocation: "Pan-India Field Diagnostics",
    typicalApplication: "Clear cover verification, bar diameter profiling, and spacing confirmation"
  },

  // 8. Geophysical Surveys
  {
    id: "geo-1",
    name: "2D Electrical Resistivity Tomography (ERT) Multi-Electrode Profiling",
    standard: "IS 15681 / ASTM G57",
    category: "Geophysical Surveys",
    labLocation: "Pan-India Field Geophysics",
    typicalApplication: "Bedrock depth mapping, fault zone delineation, cavity detection, and groundwater aquifer profiling"
  },
  {
    id: "geo-2",
    name: "Seismic Refraction Tomography (SRT) 24-Channel Survey",
    standard: "ASTM D5777",
    category: "Geophysical Surveys",
    labLocation: "Pan-India Field Geophysics",
    typicalApplication: "P-wave velocity (Vp) profiling, rippability classification, and overburden thickness determination"
  },
  {
    id: "geo-3",
    name: "Multichannel Analysis of Surface Waves (MASW) for Shear Wave Velocity (Vs30)",
    standard: "ASTM D7400 / IBC Standards",
    category: "Geophysical Surveys",
    labLocation: "Pan-India Field Geophysics",
    typicalApplication: "Seismic site classification (Zone III/IV/V) and dynamic shear modulus (Gmax) determination"
  }
];

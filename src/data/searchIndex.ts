export interface SearchItem {
  id: string;
  title: string;
  parent: string;
  category: string;
  level: 'parent' | 'child' | 'test';
  path: string;
  keywords?: string[];
}

export const SEARCH_INDEX: SearchItem[] = [
  // =========================================================================
  // A. GEOTECHNICAL SERVICES
  // =========================================================================
  // Parent
  {
    id: "geo-parent",
    title: "Geotechnical Services",
    parent: "Geotechnical Services",
    category: "Geotechnical Engineering",
    level: "parent",
    path: "/services/geotechnical-services",
    keywords: ["Soil", "Rock", "Foundation", "Drilling", "Borehole", "IS 1892", "IS 2131", "Diamond Coring", "Geotech"]
  },

  // 1st Child: Soil Laboratory Testing
  {
    id: "geo-child-soil",
    title: "Soil Laboratory Testing",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "child",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["Soil Mechanics", "IS 2720", "14 NABL Tests", "Soil Lab", "Atterberg", "Triaxial", "Direct Shear", "CBR"]
  },
  // Child's Children: Soil Laboratory Tests (14 Tests)
  {
    id: "geo-soil-1",
    title: "Grain Size Analysis – Sieve & Hydrometer Analysis",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["Gradation", "Sieve Analysis", "Hydrometer", "Clay Fraction", "Silt", "Particle Size", "IS 2720 Part 4", "ASTM D422"]
  },
  {
    id: "geo-soil-2",
    title: "Atterberg’s Limit Test",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["Liquid Limit", "Plastic Limit", "Plasticity Index", "Shrinkage Limit", "Casagrande", "IS 2720 Part 5", "ASTM D4318"]
  },
  {
    id: "geo-soil-3",
    title: "Specific Gravity Test",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["Pycnometer", "Density Bottle", "Specific Gravity Soil", "IS 2720 Part 3", "ASTM D854"]
  },
  {
    id: "geo-soil-4",
    title: "Relative Density Test",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["Cohesionless Soil", "Vibrating Table", "Relative Density Sand", "IS 2720 Part 14", "ASTM D4253"]
  },
  {
    id: "geo-soil-5",
    title: "Free Swell Index",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["FSI", "Expansive Soil", "Black Cotton Soil", "Differential Swell", "IS 2720 Part 40"]
  },
  {
    id: "geo-soil-6",
    title: "Swelling Pressure Test",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["Consolidometer", "Swell Pressure", "Expansive Soil Foundation", "IS 2720 Part 41", "ASTM D4546"]
  },
  {
    id: "geo-soil-7",
    title: "Compaction Test – Standard & Modified Proctor",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["MDD", "OMC", "Proctor Density", "Optimum Moisture Content", "Maximum Dry Density", "IS 2720 Part 7", "IS 2720 Part 8", "ASTM D698", "ASTM D1557"]
  },
  {
    id: "geo-soil-8",
    title: "Laboratory CBR Test – Soaked & Unsoaked",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["California Bearing Ratio", "CBR Test", "Pavement Subgrade", "Subgrade Design", "IS 2720 Part 16", "ASTM D1883"]
  },
  {
    id: "geo-soil-9",
    title: "Permeability Test",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["Falling Head", "Constant Head", "Hydraulic Conductivity", "Coefficient of Permeability", "IS 2720 Part 17", "IS 2720 Part 36", "ASTM D2434"]
  },
  {
    id: "geo-soil-10",
    title: "Digital Direct Shear Test",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["Shear Strength", "Cohesion C", "Friction Angle Phi", "Direct Shear Box", "IS 2720 Part 13", "ASTM D3080"]
  },
  {
    id: "geo-soil-11",
    title: "Laboratory Vane Shear Test",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["Undrained Shear Strength", "Soft Clay", "Vane Shear", "IS 2720 Part 30", "ASTM D4648"]
  },
  {
    id: "geo-soil-12",
    title: "Unconfined Compressive Strength (UCS) Test",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["UCS Soil", "Unconfined Compression", "Cohesive Soil Shear", "IS 2720 Part 10", "ASTM D2166"]
  },
  {
    id: "geo-soil-13",
    title: "Automatic Triaxial Compression Test – UU, CU & CD",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["Triaxial Test", "Unconsolidated Undrained UU", "Consolidated Undrained CU", "Consolidated Drained CD", "Pore Water Pressure", "Effective Stress", "IS 2720 Part 11", "IS 2720 Part 12", "ASTM D2850", "ASTM D4767"]
  },
  {
    id: "geo-soil-14",
    title: "Digital Consolidation Test",
    parent: "Geotechnical Services",
    category: "Soil Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#soil-testing",
    keywords: ["Oedometer", "Settlement Analysis", "Compression Index Cc", "Coefficient of Consolidation Cv", "Pre-consolidation Pressure", "IS 2720 Part 15", "ASTM D2435"]
  },

  // 1st Child: Rock Laboratory Testing
  {
    id: "geo-child-rock",
    title: "Rock Laboratory Testing",
    parent: "Geotechnical Services",
    category: "Rock Laboratory Testing",
    level: "child",
    path: "/services/geotechnical-services#rock-testing",
    keywords: ["Rock Mechanics", "IS 13030", "13 NABL Tests", "Rock Lab", "Core Testing", "UCS Rock", "Brazilian Tensile", "Point Load"]
  },
  // Child's Children: Rock Laboratory Tests (13 Tests)
  {
    id: "geo-rock-1",
    title: "Petrographic Analysis",
    parent: "Geotechnical Services",
    category: "Rock Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#rock-testing",
    keywords: ["Mineral Composition", "Thin Section", "Rock Texture", "Mineralogical Examination", "ASTM C295", "IS 13030"]
  },
  {
    id: "geo-rock-2",
    title: "Density Test",
    parent: "Geotechnical Services",
    category: "Rock Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#rock-testing",
    keywords: ["Bulk Density Rock", "Dry Density Rock", "Core Specimen Density", "IS 13030", "ASTM D7012"]
  },
  {
    id: "geo-rock-3",
    title: "Specific Gravity Test – Rock",
    parent: "Geotechnical Services",
    category: "Rock Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#rock-testing",
    keywords: ["Rock Specific Gravity", "Apparent Specific Gravity", "True Specific Gravity", "IS 13030"]
  },
  {
    id: "geo-rock-4",
    title: "Porosity Test",
    parent: "Geotechnical Services",
    category: "Rock Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#rock-testing",
    keywords: ["Effective Porosity", "Void Ratio Rock", "Water Saturation", "IS 13030"]
  },
  {
    id: "geo-rock-5",
    title: "Water Absorption Test – Rock",
    parent: "Geotechnical Services",
    category: "Rock Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#rock-testing",
    keywords: ["Rock Water Absorption", "Saturation Capacity", "IS 13030"]
  },
  {
    id: "geo-rock-6",
    title: "Slake Durability Index Test",
    parent: "Geotechnical Services",
    category: "Rock Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#rock-testing",
    keywords: ["Slake Durability", "Weathering Resistance", "Shale", "Mudstone Degradation", "IS 10050", "ASTM D4644"]
  },
  {
    id: "geo-rock-7",
    title: "Cerchar Abrasivity Index Test",
    parent: "Geotechnical Services",
    category: "Rock Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#rock-testing",
    keywords: ["CAI", "Abrasivity", "TBM Wear", "Drill Bit Wear", "Tunnel Boring", "ASTM D7625"]
  },
  {
    id: "geo-rock-8",
    title: "Schmidt Impact Hammer Test",
    parent: "Geotechnical Services",
    category: "Rock Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#rock-testing",
    keywords: ["Schmidt Rebound", "Rock Hardness", "L-Type Hammer", "IS 13311", "ASTM D5873"]
  },
  {
    id: "geo-rock-9",
    title: "Point Load Strength Index Test",
    parent: "Geotechnical Services",
    category: "Rock Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#rock-testing",
    keywords: ["PLT", "Point Load", "Is50", "Anisotropy Index", "Diametral Axial", "IS 8764", "ASTM D5731"]
  },
  {
    id: "geo-rock-10",
    title: "Uniaxial Compressive Strength (UCS) Test",
    parent: "Geotechnical Services",
    category: "Rock Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#rock-testing",
    keywords: ["Rock UCS", "Core Compression", "Intact Rock Strength", "IS 9143", "ASTM D7012"]
  },
  {
    id: "geo-rock-11",
    title: "Brazilian Tensile Strength Test",
    parent: "Geotechnical Services",
    category: "Rock Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#rock-testing",
    keywords: ["Indirect Tensile", "Rock Splitting Tensile", "Brazilian Disc", "IS 10082", "ASTM D3967"]
  },
  {
    id: "geo-rock-12",
    title: "Modulus of Elasticity & Poisson’s Ratio for Rock",
    parent: "Geotechnical Services",
    category: "Rock Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#rock-testing",
    keywords: ["Young's Modulus", "Elastic Parameters Rock", "Poisson's Ratio", "Stress-Strain Rock", "IS 9221", "ASTM D7012"]
  },
  {
    id: "geo-rock-13",
    title: "Rock Triaxial Compression Test",
    parent: "Geotechnical Services",
    category: "Rock Laboratory Testing",
    level: "test",
    path: "/services/geotechnical-services#rock-testing",
    keywords: ["Hoek Cell", "Rock Shear Strength", "Confining Pressure Rock", "Mohr-Coulomb Rock", "IS 13047", "ASTM D7012"]
  },

  // 1st Child: Advanced Field Testing
  {
    id: "geo-child-field",
    title: "Advanced Field Testing",
    parent: "Geotechnical Services",
    category: "Advanced Field Testing",
    level: "child",
    path: "/services/geotechnical-services#field-testing",
    keywords: ["In-Situ Testing", "Deep Foundation", "Pile Load", "SPT", "DCPT", "PLT", "SPLT", "Plate Load", "Field CBR"]
  },
  // Child's Children: Advanced Field Tests (13 Tests)
  {
    id: "geo-field-1",
    title: "Static / Dynamic Cone Penetration Test (SCPT/DCPT)",
    parent: "Geotechnical Services",
    category: "Advanced Field Testing",
    level: "test",
    path: "/services/geotechnical-services#field-testing",
    keywords: ["Cone Penetration", "DCPT", "SCPT", "Continuous Sounding", "IS 4968"]
  },
  {
    id: "geo-field-2",
    title: "Standard Penetration Test (SPT)",
    parent: "Geotechnical Services",
    category: "Advanced Field Testing",
    level: "test",
    path: "/services/geotechnical-services#field-testing",
    keywords: ["SPT", "N-Value", "Split Spoon Sampler", "Hammer Drop 63.5kg", "IS 2131", "ASTM D1586"]
  },
  {
    id: "geo-field-3",
    title: "Modulus of Subgrade Reaction Test (K-Value Test)",
    parent: "Geotechnical Services",
    category: "Advanced Field Testing",
    level: "test",
    path: "/services/geotechnical-services#field-testing",
    keywords: ["K-Value", "Pavement Subgrade Reaction", "Rigid Pavement Design", "Plate Bearing Subgrade", "IS 9214"]
  },
  {
    id: "geo-field-4",
    title: "Field CBR Test",
    parent: "Geotechnical Services",
    category: "Advanced Field Testing",
    level: "test",
    path: "/services/geotechnical-services#field-testing",
    keywords: ["In-Situ CBR", "Subgrade Bearing Field", "Reaction Frame", "IS 2720 Part 31", "ASTM D4429"]
  },
  {
    id: "geo-field-5",
    title: "Field Vane Shear Test",
    parent: "Geotechnical Services",
    category: "Advanced Field Testing",
    level: "test",
    path: "/services/geotechnical-services#field-testing",
    keywords: ["In-Situ Vane", "Soft Marine Clay", "Undrained Shear In-Situ", "IS 4434", "ASTM D2573"]
  },
  {
    id: "geo-field-6",
    title: "ECPTU – Electrical Cone Penetration Test with Pore Pressure Measurement",
    parent: "Geotechnical Services",
    category: "Advanced Field Testing",
    level: "test",
    path: "/services/geotechnical-services#field-testing",
    keywords: ["Piezocone", "CPTU", "Pore Water Pressure Dissipation", "Continuous Stratigraphy", "ASTM D5778"]
  },
  {
    id: "geo-field-7",
    title: "Field Permeability Test",
    parent: "Geotechnical Services",
    category: "Advanced Field Testing",
    level: "test",
    path: "/services/geotechnical-services#field-testing",
    keywords: ["Packer Test", "Pumping Test", "Lefranc", "Lugeon Water Pressure Test", "Borehole Permeability", "IS 5529"]
  },
  {
    id: "geo-field-8",
    title: "Pressuremeter Test – In-Situ Modulus of Elasticity",
    parent: "Geotechnical Services",
    category: "Advanced Field Testing",
    level: "test",
    path: "/services/geotechnical-services#field-testing",
    keywords: ["Menard Pressuremeter", "Limit Pressure Pl", "Menard Modulus Em", "In-Situ Stress-Strain", "IS 1892", "ASTM D4719"]
  },
  {
    id: "geo-field-9",
    title: "Bi-Directional Load Test",
    parent: "Geotechnical Services",
    category: "Advanced Field Testing",
    level: "test",
    path: "/services/geotechnical-services#field-testing",
    keywords: ["Osterberg Cell", "O-Cell", "Bi-Directional Pile Load", "Deep Foundation Load Test", "Sacrificial Jack"]
  },
  {
    id: "geo-field-10",
    title: "Static/Cyclic Plate Load Test (PLT)",
    parent: "Geotechnical Services",
    category: "Advanced Field Testing",
    level: "test",
    path: "/services/geotechnical-services#field-testing",
    keywords: ["PLT", "Plate Bearing Capacity", "Foundation Settlement", "Reaction Truss", "IS 1888", "ASTM D1194"]
  },
  {
    id: "geo-field-11",
    title: "Static/Cyclic Pile Load Test – Vertical, Pullout & Lateral (SPLT)",
    parent: "Geotechnical Services",
    category: "Advanced Field Testing",
    level: "test",
    path: "/services/geotechnical-services#field-testing",
    keywords: ["SPLT", "Initial Pile Load", "Routine Pile Load", "Lateral Pile Test", "Uplift Pullout", "Reaction Piles / Kentledge", "IS 2911 Part 4", "ASTM D1143"]
  },
  {
    id: "geo-field-12",
    title: "High Strain Pile Dynamic Test (DPLT)",
    parent: "Geotechnical Services",
    category: "Advanced Field Testing",
    level: "test",
    path: "/services/geotechnical-services#field-testing",
    keywords: ["PDA", "CAPWAP", "Dynamic Pile Load Test", "Case Method", "High Strain Dynamic Testing", "ASTM D4945"]
  },
  {
    id: "geo-field-13",
    title: "Block Vibration Test (BVT)",
    parent: "Geotechnical Services",
    category: "Advanced Field Testing",
    level: "test",
    path: "/services/geotechnical-services#field-testing",
    keywords: ["Dynamic Soil Properties", "Machine Foundation", "Cu Ctau Dynamic Shear Modulus", "Resonant Frequency", "IS 5249"]
  },

  // =========================================================================
  // B. GEOPHYSICAL SURVEY
  // =========================================================================
  // Parent
  {
    id: "geophys-parent",
    title: "Geophysical Survey",
    parent: "Geophysical Survey",
    category: "Subsurface Geophysics",
    level: "parent",
    path: "/services/geophysical-survey",
    keywords: ["Geophysics", "Non-Invasive", "Seismic", "Resistivity", "Radar", "Utility Mapping", "MASW", "ERT", "GPR"]
  },
  // Child's Children / Methods (10 Tests)
  {
    id: "geophys-1",
    title: "Multichannel Analysis of Surface Waves (MASW)",
    parent: "Geophysical Survey",
    category: "Geophysical Survey",
    level: "test",
    path: "/services/geophysical-survey#masw",
    keywords: ["MASW", "Vs30", "Shear Wave Velocity", "Seismic Site Classification", "Rayleigh Waves", "Dispersive Curve", "ASTM D5777"]
  },
  {
    id: "geophys-2",
    title: "Seismic Refraction Test (SRT)",
    parent: "Geophysical Survey",
    category: "Geophysical Survey",
    level: "test",
    path: "/services/geophysical-survey#srt",
    keywords: ["SRT", "Refraction Seismics", "Bedrock Profiling", "Rippability", "P-Wave Velocity", "Tomography", "IS 15681"]
  },
  {
    id: "geophys-3",
    title: "Crosshole Seismic Test (CHST)",
    parent: "Geophysical Survey",
    category: "Geophysical Survey",
    level: "test",
    path: "/services/geophysical-survey#chst",
    keywords: ["CHST", "Crosshole Seismics", "Dynamic Poisson's Ratio", "Shear Modulus In-Situ", "Borehole P & S Waves", "ASTM D4428"]
  },
  {
    id: "geophys-4",
    title: "Downhole Seismic Test (DHT)",
    parent: "Geophysical Survey",
    category: "Geophysical Survey",
    level: "test",
    path: "/services/geophysical-survey#dht",
    keywords: ["DHT", "Downhole Seismics", "Borehole Geophysics", "Vs Interval Velocity", "ASTM D7400"]
  },
  {
    id: "geophys-5",
    title: "Electrical Resistivity Tomography – 2D & 3D ERT Survey",
    parent: "Geophysical Survey",
    category: "Geophysical Survey",
    level: "test",
    path: "/services/geophysical-survey#ert",
    keywords: ["ERT", "Resistivity Imaging", "Multi-Electrode Resistivity", "Groundwater Mapping", "Cavity Detection", "Lithology 2D/3D", "IS 15681"]
  },
  {
    id: "geophys-6",
    title: "Vertical Electrical Sounding (VES)",
    parent: "Geophysical Survey",
    category: "Geophysical Survey",
    level: "test",
    path: "/services/geophysical-survey#ves",
    keywords: ["VES", "Schlumberger Array", "Resistivity Sounding", "Water Table Layering", "1D Resistivity"]
  },
  {
    id: "geophys-7",
    title: "Ground Penetrating Radar Test (GPR)",
    parent: "Geophysical Survey",
    category: "Geophysical Survey",
    level: "test",
    path: "/services/geophysical-survey#gpr",
    keywords: ["GPR", "Utility Detection", "Underground Pipe Mapping", "Void Detection", "Buried Cables", "Pavement Profiling", "ASTM D6432"]
  },
  {
    id: "geophys-8",
    title: "Thermal Resistivity Test",
    parent: "Geophysical Survey",
    category: "Geophysical Survey",
    level: "test",
    path: "/services/geophysical-survey#thermal",
    keywords: ["Thermal Conductivity", "Underground Cable", "HV Transmission", "Soil Thermal Resistivity", "IEEE 442", "ASTM D5334"]
  },
  {
    id: "geophys-9",
    title: "Borehole Deviation Test",
    parent: "Geophysical Survey",
    category: "Geophysical Survey",
    level: "test",
    path: "/services/geophysical-survey#borehole-deviation",
    keywords: ["Borehole Inclinometer", "Drill Hole Verticality", "Drilling Deviation", "Dip & Azimuth"]
  },
  {
    id: "geophys-10",
    title: "Geo-Mapping – Open Pit Foundation",
    parent: "Geophysical Survey",
    category: "Geophysical Survey",
    level: "test",
    path: "/services/geophysical-survey#open-pit-geo-mapping",
    keywords: ["Open Pit Geology", "Geological Face Mapping", "Discontinuity Mapping", "Rock Slope Stability", "Bench Mapping"]
  },

  // =========================================================================
  // C. NDT AND STRUCTURAL INTEGRITY ASSESSMENT
  // =========================================================================
  // Parent
  {
    id: "ndt-parent",
    title: "NDT and Structural Integrity Assessment",
    parent: "NDT and Structural Integrity Assessment",
    category: "Structural Diagnostics & NDT",
    level: "parent",
    path: "/services/ndt-structural-integrity",
    keywords: ["NDT", "Non-Destructive Testing", "Structural Integrity", "Pile Testing", "Bridge Proof Load", "UPV", "Rebound Hammer", "PIT"]
  },

  // 1st Child: Non-Destructive Testing (NDT)
  {
    id: "ndt-child-ndt",
    title: "Non-Destructive Testing (NDT)",
    parent: "NDT and Structural Integrity Assessment",
    category: "Non-Destructive Testing (NDT)",
    level: "child",
    path: "/services/ndt-structural-integrity#ndt-testing",
    keywords: ["Acoustic Testing", "Concrete NDT", "IS 13311", "Pile Integrity", "Sonic Logging", "Rebar Corrosion"]
  },
  // Child's Children: NDT Tests (8 Tests)
  {
    id: "ndt-test-1",
    title: "Low Strain Pile Integrity Test (PIT)",
    parent: "NDT and Structural Integrity Assessment",
    category: "Non-Destructive Testing (NDT)",
    level: "test",
    path: "/services/ndt-structural-integrity#ndt-testing",
    keywords: ["PIT", "Sonic Echo", "Impulse Response", "Pile Continuity", "Shaft Defect", "Crack Necking Bulge", "ASTM D5882", "IS 14893"]
  },
  {
    id: "ndt-test-2",
    title: "Half-Cell Potential Test",
    parent: "NDT and Structural Integrity Assessment",
    category: "Non-Destructive Testing (NDT)",
    level: "test",
    path: "/services/ndt-structural-integrity#ndt-testing",
    keywords: ["Half-Cell", "Corrosion Potential", "Rebar Corrosion Mapping", "Copper Sulphate Electrode", "ASTM C876"]
  },
  {
    id: "ndt-test-3",
    title: "Rebound Hammer Test",
    parent: "NDT and Structural Integrity Assessment",
    category: "Non-Destructive Testing (NDT)",
    level: "test",
    path: "/services/ndt-structural-integrity#ndt-testing",
    keywords: ["Schmidt Hammer", "Surface Hardness", "Compressive Strength Estimation", "Rebound Number", "IS 13311 Part 2", "ASTM C805"]
  },
  {
    id: "ndt-test-4",
    title: "Cover Meter / Profometer Test",
    parent: "NDT and Structural Integrity Assessment",
    category: "Non-Destructive Testing (NDT)",
    level: "test",
    path: "/services/ndt-structural-integrity#ndt-testing",
    keywords: ["Cover Meter", "Profometer", "Rebar Detection", "Concrete Cover Depth", "Bar Diameter", "BS 1881-204"]
  },
  {
    id: "ndt-test-5",
    title: "Span / Bridge Load Test",
    parent: "NDT and Structural Integrity Assessment",
    category: "Non-Destructive Testing (NDT)",
    level: "test",
    path: "/services/ndt-structural-integrity#structural-health",
    keywords: ["Proof Load", "Bridge Span Testing", "Deflection Measurement", "LVDT", "IRC:SP:51", "Bridge Load Test"]
  },
  {
    id: "ndt-test-6",
    title: "Carbonation Depth Test",
    parent: "NDT and Structural Integrity Assessment",
    category: "Non-Destructive Testing (NDT)",
    level: "test",
    path: "/services/ndt-structural-integrity#ndt-testing",
    keywords: ["Carbonation", "Phenolphthalein", "Concrete Degradation", "Alkalinity Loss", "IS 516 Part 5"]
  },
  {
    id: "ndt-test-7",
    title: "Ultrasonic Pulse Velocity (UPV)",
    parent: "NDT and Structural Integrity Assessment",
    category: "Non-Destructive Testing (NDT)",
    level: "test",
    path: "/services/ndt-structural-integrity#ndt-testing",
    keywords: ["UPV", "Pulse Velocity", "Concrete Homogeneity", "Crack Depth", "Void Honeycombing", "IS 13311 Part 1", "ASTM C597"]
  },
  {
    id: "ndt-test-8",
    title: "Cross-Hole Sonic Logging Test (CHST/CHUM)",
    parent: "NDT and Structural Integrity Assessment",
    category: "Non-Destructive Testing (NDT)",
    level: "test",
    path: "/services/ndt-structural-integrity#ndt-testing",
    keywords: ["CHSL", "CHUM", "Cross-Hole Ultrasonic", "Drilled Shaft Integrity", "Access Tubes", "Water Filled Tubes", "ASTM D6760"]
  },

  // 1st Child: Structural Health Assessment
  {
    id: "ndt-child-sha",
    title: "Structural Health Assessment",
    parent: "NDT and Structural Integrity Assessment",
    category: "Structural Health Assessment",
    level: "child",
    path: "/services/ndt-structural-integrity#structural-health",
    keywords: ["Proof Load", "Bridge Deflection", "Structural Audit", "Life Extension", "Retrofitting", "Distress Analysis"]
  },
  // Structural Health Sub-items
  {
    id: "ndt-sha-1",
    title: "Span Deflection & Proof Load Verification",
    parent: "NDT and Structural Integrity Assessment",
    category: "Structural Health Assessment",
    level: "test",
    path: "/services/ndt-structural-integrity#structural-health",
    keywords: ["Span Deflection", "Proof Load", "Bridge Proof Testing", "IRC:SP:51", "Recovery Ratio"]
  },
  {
    id: "ndt-sha-2",
    title: "Vibration & Dynamic Response Monitoring",
    parent: "NDT and Structural Integrity Assessment",
    category: "Structural Health Assessment",
    level: "test",
    path: "/services/ndt-structural-integrity#structural-health",
    keywords: ["Structural Dynamics", "Resonance", "Accelerometer", "Ambient Vibration", "Modal Analysis"]
  },
  {
    id: "ndt-sha-3",
    title: "Distress, Cracking & Carbonation Root-Cause Analysis",
    parent: "NDT and Structural Integrity Assessment",
    category: "Structural Health Assessment",
    level: "test",
    path: "/services/ndt-structural-integrity#structural-health",
    keywords: ["Structural Cracks", "Distress Mapping", "Rehabilitation Advisory", "Forensic Engineering"]
  },
  {
    id: "ndt-sha-4",
    title: "Structural Capacity Assessment & Retrofitting Solutions",
    parent: "NDT and Structural Integrity Assessment",
    category: "Structural Health Assessment",
    level: "test",
    path: "/services/ndt-structural-integrity#structural-health",
    keywords: ["Retrofitting", "Strengthening", "Condition Assessment", "FRP Wrapping", "Jacket Strengthening"]
  },

  // =========================================================================
  // D. MATERIAL TESTING SERVICES
  // =========================================================================
  // Parent
  {
    id: "mat-parent",
    title: "Material Testing Services",
    parent: "Material Testing Services",
    category: "Construction Material Testing",
    level: "parent",
    path: "/services/material-testing-services",
    keywords: ["Construction Materials", "Central Laboratory", "NABL 581 Parameters", "Civil Testing", "Cement", "Steel", "Aggregates", "Concrete", "Bitumen"]
  },

  // 1st Child: Cementitious Material Testing
  {
    id: "mat-child-cement",
    title: "Cementitious Material Testing",
    parent: "Material Testing Services",
    category: "Cementitious Material Testing",
    level: "child",
    path: "/services/material-testing-services#cementitious",
    keywords: ["Cement", "Fly Ash", "GGBS", "Micro Silica", "OPC", "PPC", "IS 269", "IS 4031", "10 Tests"]
  },
  // Child's Children: Cementitious Tests (10 Tests)
  {
    id: "mat-cement-1",
    title: "Compressive Strength Test – Cement & Fly Ash",
    parent: "Material Testing Services",
    category: "Cementitious Material Testing",
    level: "test",
    path: "/services/material-testing-services#cementitious",
    keywords: ["Cement Compressive Strength", "Mortar Cube", "3-Day 7-Day 28-Day Strength", "IS 4031 Part 6", "ASTM C109"]
  },
  {
    id: "mat-cement-2",
    title: "Standard Consistency Test",
    parent: "Material Testing Services",
    category: "Cementitious Material Testing",
    level: "test",
    path: "/services/material-testing-services#cementitious",
    keywords: ["Vicat Consistency", "Normal Consistency P", "Vicat Plunger", "IS 4031 Part 4", "ASTM C187"]
  },
  {
    id: "mat-cement-3",
    title: "Initial & Final Setting Time Test",
    parent: "Material Testing Services",
    category: "Cementitious Material Testing",
    level: "test",
    path: "/services/material-testing-services#cementitious",
    keywords: ["Vicat Setting Time", "Initial Setting Time", "Final Setting Time", "IS 4031 Part 5", "ASTM C191"]
  },
  {
    id: "mat-cement-4",
    title: "Fineness Test – Blaine Air Permeability / Sieve Method",
    parent: "Material Testing Services",
    category: "Cementitious Material Testing",
    level: "test",
    path: "/services/material-testing-services#cementitious",
    keywords: ["Blaine Fineness", "Specific Surface Area", "90 Micron Sieve", "IS 4031 Part 2", "IS 4031 Part 1", "ASTM C204"]
  },
  {
    id: "mat-cement-5",
    title: "Cement Soundness Test – Le Chatelier / Autoclave Method",
    parent: "Material Testing Services",
    category: "Cementitious Material Testing",
    level: "test",
    path: "/services/material-testing-services#cementitious",
    keywords: ["Le Chatelier Soundness", "Autoclave Expansion", "Magnesia Soundness", "Free Lime Soundness", "IS 4031 Part 3", "ASTM C151"]
  },
  {
    id: "mat-cement-6",
    title: "Density / Specific Gravity Test – Cement",
    parent: "Material Testing Services",
    category: "Cementitious Material Testing",
    level: "test",
    path: "/services/material-testing-services#cementitious",
    keywords: ["Le Chatelier Flask", "Cement Specific Gravity", "Density of Cement", "Kerosene Method", "IS 4031 Part 11", "ASTM C188"]
  },
  {
    id: "mat-cement-7",
    title: "Drying Shrinkage Test – Cement Mortar",
    parent: "Material Testing Services",
    category: "Cementitious Material Testing",
    level: "test",
    path: "/services/material-testing-services#cementitious",
    keywords: ["Mortar Shrinkage", "Length Comparator", "Cement Mortar Bar", "IS 4031 Part 10", "ASTM C596"]
  },
  {
    id: "mat-cement-8",
    title: "Lime Reactivity Test",
    parent: "Material Testing Services",
    category: "Cementitious Material Testing",
    level: "test",
    path: "/services/material-testing-services#cementitious",
    keywords: ["Fly Ash Reactivity", "Pozzolanic Activity with Lime", "IS 1727", "ASTM C311"]
  },
  {
    id: "mat-cement-9",
    title: "Slag Activity Index Test",
    parent: "Material Testing Services",
    category: "Cementitious Material Testing",
    level: "test",
    path: "/services/material-testing-services#cementitious",
    keywords: ["GGBS Activity", "Slag Activity Index SAI", "Blast Furnace Slag", "IS 16714", "ASTM C989"]
  },
  {
    id: "mat-cement-10",
    title: "Moisture Content Determination – Cementitious",
    parent: "Material Testing Services",
    category: "Cementitious Material Testing",
    level: "test",
    path: "/services/material-testing-services#cementitious",
    keywords: ["Moisture in Fly Ash", "Moisture in GGBS", "Oven Drying", "IS 1727"]
  },

  // 1st Child: Aggregate Testing
  {
    id: "mat-child-aggregate",
    title: "Aggregate Testing",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "child",
    path: "/services/material-testing-services#aggregates",
    keywords: ["Coarse Aggregates", "Fine Aggregates", "Sand", "M-Sand", "IS 383", "IS 2386", "15 Tests"]
  },
  // Child's Children: Aggregate Tests (15 Tests)
  {
    id: "mat-agg-1",
    title: "Sieve Analysis / Grading Test – Aggregates",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["Particle Size Distribution", "Grading Curve", "Fineness Modulus", "Zone I Zone II", "IS 2386 Part 1", "ASTM C136"]
  },
  {
    id: "mat-agg-2",
    title: "Specific Gravity & Water Absorption Test – Aggregates",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["Aggregate Specific Gravity", "Water Absorption Aggregate", "Apparent SG", "IS 2386 Part 3", "ASTM C127", "ASTM C128"]
  },
  {
    id: "mat-agg-3",
    title: "Bulk Density & Voids Test",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["Compacted Bulk Density", "Loose Bulk Density", "Percentage Voids", "IS 2386 Part 3", "ASTM C29"]
  },
  {
    id: "mat-agg-4",
    title: "Aggregate Crushing Value Test",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["ACV", "Crushing Strength Aggregate", "Compression Machine", "IS 2386 Part 4"]
  },
  {
    id: "mat-agg-5",
    title: "Aggregate Impact Value Test",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["AIV", "Impact Resistance Aggregate", "Impact Tester", "Toughness", "IS 2386 Part 4"]
  },
  {
    id: "mat-agg-6",
    title: "Los Angeles / Aggregate Abrasion Value Test",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["LAA", "Los Angeles Abrasion", "Abrasion Loss", "Steel Spheres", "IS 2386 Part 4", "ASTM C131"]
  },
  {
    id: "mat-agg-7",
    title: "Ten Percent Fines Value Test",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["10% Fines Value", "TFV", "Weak Rock Crushing", "IS 2386 Part 4", "BS 812-111"]
  },
  {
    id: "mat-agg-8",
    title: "Flakiness Index Test",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["Flakiness Gauge", "Flaky Particles", "Thickness Gauge", "IS 2386 Part 1", "BS 812-105"]
  },
  {
    id: "mat-agg-9",
    title: "Elongation Index Test",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["Length Gauge", "Elongated Particles", "Elongation", "IS 2386 Part 1", "BS 812-105"]
  },
  {
    id: "mat-agg-10",
    title: "Combined Flakiness & Elongation Index Test",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["Flakiness & Elongation", "Combined Index", "MORTH Road Aggregate", "IRC"]
  },
  {
    id: "mat-agg-11",
    title: "Aggregate Soundness Test – Na₂SO₄ / MgSO₄",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["Sodium Sulphate Soundness", "Magnesium Sulphate Soundness", "Freeze-Thaw Weathering", "IS 2386 Part 5", "ASTM C88"]
  },
  {
    id: "mat-agg-12",
    title: "Deleterious Materials Determination – Clay Lumps, Soft Particles, Coal & Lignite",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["Deleterious Substances", "Clay Lumps", "Coal & Lignite", "Soft Particles", "IS 2386 Part 2", "ASTM C142"]
  },
  {
    id: "mat-agg-13",
    title: "Fines / Silt Content Determination",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["Silt Content Sand", "Passing 75 Micron Sieve", "Decantation Method", "IS 2386 Part 1", "ASTM C117"]
  },
  {
    id: "mat-agg-14",
    title: "Sand Equivalent Test",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["Sand Equivalent", "Clay Ratio in Sand", "Fines Quality", "ASTM D2419", "IS 2720 Part 37"]
  },
  {
    id: "mat-agg-15",
    title: "Petrographic Examination – Aggregates",
    parent: "Material Testing Services",
    category: "Aggregate Testing",
    level: "test",
    path: "/services/material-testing-services#aggregates",
    keywords: ["Petrographic Examination", "Thin Section", "Alkali Reactive Minerals", "ASTM C295", "IS 2386 Part 8"]
  },

  // 1st Child: Bituminous Material Testing
  {
    id: "mat-child-bitumen",
    title: "Bituminous Material Testing",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "child",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Bitumen", "Asphalt", "Viscosity", "Marshall", "VG-30", "VG-40", "IS 73", "IS 1201", "19 Tests"]
  },
  // Child's Children: Bituminous Tests (19 Tests)
  {
    id: "mat-bit-1",
    title: "Penetration Test – Bitumen",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Bitumen Needle Penetration", "Hardness Grade", "100g 25C 5s", "IS 1203", "ASTM D5"]
  },
  {
    id: "mat-bit-2",
    title: "Ductility Test – Bitumen",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Bitumen Ductility", "Briquette Elongation", "27C Water Bath", "IS 1208", "ASTM D113"]
  },
  {
    id: "mat-bit-3",
    title: "Softening Point Test – Bitumen",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Ring and Ball", "Softening Temperature", "Bitumen Grade", "IS 1205", "ASTM D36"]
  },
  {
    id: "mat-bit-4",
    title: "Absolute Viscosity Test – Bitumen",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Vacuum Capillary Viscometer", "60C Viscosity", "VG-10 VG-30 VG-40", "Poise", "IS 1206 Part 2", "ASTM D2171"]
  },
  {
    id: "mat-bit-5",
    title: "Kinematic Viscosity Test – Bitumen",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["135C Kinematic Viscosity", "Centistokes cSt", "Flow Resistance", "IS 1206 Part 3", "ASTM D2170"]
  },
  {
    id: "mat-bit-6",
    title: "Saybolt Furol Viscosity Test",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Emulsion Viscosity", "Saybolt Furol", "Cutback Bitumen", "IS 8887", "ASTM D244"]
  },
  {
    id: "mat-bit-7",
    title: "Flash Point Test – Bitumen",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Cleveland Open Cup", "Pensky Martens", "Flash & Fire Point", "Safety Temp", "IS 1209", "ASTM D92"]
  },
  {
    id: "mat-bit-8",
    title: "Specific Gravity Test – Bitumen",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Bituminous Specific Gravity", "Pycnometer Bitumen", "Density at 27C", "IS 1202", "ASTM D70"]
  },
  {
    id: "mat-bit-9",
    title: "Loss on Heating Test – Bitumen",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Thin Film Oven Test", "TFOT", "Mass Loss on Heating", "Aging Simulation", "IS 1212", "ASTM D1754"]
  },
  {
    id: "mat-bit-10",
    title: "Solubility Test – Bitumen",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Trichloroethylene Solubility", "Bitumen Purity", "Insoluble Matter", "IS 1216", "ASTM D2042"]
  },
  {
    id: "mat-bit-11",
    title: "Stripping Value Test – Bitumen",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Bitumen Stripping", "Coating & Stripping", "Adhesion to Aggregate", "Water Immersion", "IS 6241"]
  },
  {
    id: "mat-bit-12",
    title: "Marshall Stability & Flow Test",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Marshall Mix Design", "Stability and Flow", "Optimum Binder Content OBC", "Air Voids VMA", "ASTM D6927", "MS-2"]
  },
  {
    id: "mat-bit-13",
    title: "Binder Content Test – Asphalt Mix",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Centrifuge Extractor", "Bitumen Extraction", "Binder Content Asphalt", "ASTM D2172"]
  },
  {
    id: "mat-bit-14",
    title: "Paraffin Wax Content Test",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Wax Content", "Paraffin in Bitumen", "Rutting Resistance", "IS 10511"]
  },
  {
    id: "mat-bit-15",
    title: "Particle Charge Test – Bitumen Emulsion",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Cationic Emulsion", "Positive Charge", "Rapid Setting RS-1", "IS 8887", "ASTM D244"]
  },
  {
    id: "mat-bit-16",
    title: "Residue by Evaporation Test",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Emulsion Residue", "Evaporation Residue", "Bitumen Base Content", "IS 8887"]
  },
  {
    id: "mat-bit-17",
    title: "Residue on 600 µm Sieve Test",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Sieve Residue Emulsion", "Coagulated Particles", "IS 8887"]
  },
  {
    id: "mat-bit-18",
    title: "Miscibility with Water Test",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Emulsion Miscibility", "Slow Setting Emulsion", "Water Dilution", "IS 8887"]
  },
  {
    id: "mat-bit-19",
    title: "Low-Temperature Coagulation Test",
    parent: "Material Testing Services",
    category: "Bituminous Material Testing",
    level: "test",
    path: "/services/material-testing-services#bituminous",
    keywords: ["Freezing Resistance", "Low Temperature Coagulation", "Emulsion Stability", "IS 8887"]
  },

  // 1st Child: Masonry Material Testing
  {
    id: "mat-child-masonry",
    title: "Masonry Material Testing (Brick, Block, Paver & Tile)",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "child",
    path: "/services/material-testing-services#masonry",
    keywords: ["Bricks", "Concrete Blocks", "Pavers", "Tiles", "Kerb Stones", "IS 1077", "IS 2185", "IS 15658", "14 Tests"]
  },
  // Child's Children: Masonry Tests (14 Tests)
  {
    id: "mat-mas-1",
    title: "Compressive Strength Test – Brick, Block & Paver",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "test",
    path: "/services/material-testing-services#masonry",
    keywords: ["Brick Crushing Strength", "Concrete Block Compression", "Paver Compressive Strength", "IS 3495 Part 1", "IS 2185", "IS 15658"]
  },
  {
    id: "mat-mas-2",
    title: "Water Absorption Test – Brick, Block & Tile",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "test",
    path: "/services/material-testing-services#masonry",
    keywords: ["Brick Water Absorption", "Tile Absorption", "24-Hour Cold Immersion", "IS 3495 Part 2", "IS 13630 Part 2"]
  },
  {
    id: "mat-mas-3",
    title: "Density / Dry Density Determination – Masonry",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "test",
    path: "/services/material-testing-services#masonry",
    keywords: ["Block Density", "Solid & Hollow Concrete Block", "AAC Block Dry Density", "IS 2185"]
  },
  {
    id: "mat-mas-4",
    title: "Dimensional Measurement & Tolerance – Bricks & Blocks",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "test",
    path: "/services/material-testing-services#masonry",
    keywords: ["Brick Dimensions", "Length Width Height", "Warpage Tolerance", "IS 3495", "IS 1077"]
  },
  {
    id: "mat-mas-5",
    title: "Drying Shrinkage Test – Blocks & Bricks",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "test",
    path: "/services/material-testing-services#masonry",
    keywords: ["Block Drying Shrinkage", "AAC Block Shrinkage", "Length Change", "IS 2185"]
  },
  {
    id: "mat-mas-6",
    title: "Moisture Movement Test",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "test",
    path: "/services/material-testing-services#masonry",
    keywords: ["Moisture Movement", "Wetting Expansion", "Concrete Blocks", "IS 2185"]
  },
  {
    id: "mat-mas-7",
    title: "Efflorescence Test – Bricks & Blocks",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "test",
    path: "/services/material-testing-services#masonry",
    keywords: ["Alkali Efflorescence", "Salt Deposit", "Distilled Water Immersion", "Nil Slight Moderate", "IS 3495 Part 3"]
  },
  {
    id: "mat-mas-8",
    title: "Abrasion Resistance Test – Tiles & Pavers",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "test",
    path: "/services/material-testing-services#masonry",
    keywords: ["Paver Abrasion", "Tile Wear", "Boehme Abrasion", "Surface Abrasion Loss", "IS 15658", "IS 13630 Part 7"]
  },
  {
    id: "mat-mas-9",
    title: "Splitting Tensile Strength Test – Concrete Pavers",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "test",
    path: "/services/material-testing-services#masonry",
    keywords: ["Paver Tensile Splitting", "Interlocking Paver Strength", "IS 15658"]
  },
  {
    id: "mat-mas-10",
    title: "Flexural Strength / Breaking Load Test – Tiles & Pavers",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "test",
    path: "/services/material-testing-services#masonry",
    keywords: ["Breaking Load Tile", "Modulus of Rupture MOR", "Transverse Strength", "IS 15658", "IS 13630 Part 6"]
  },
  {
    id: "mat-mas-11",
    title: "Modulus of Rupture Test – Kerb Stones & Pavers",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "test",
    path: "/services/material-testing-services#masonry",
    keywords: ["Kerb Stone Rupture", "Precast Concrete Kerb", "Transverse Breaking", "IS 5758"]
  },
  {
    id: "mat-mas-12",
    title: "Surface Quality Assessment – Tiles",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "test",
    path: "/services/material-testing-services#masonry",
    keywords: ["Tile Surface Flatness", "Glaze Defects", "Straightness of Sides", "IS 13630 Part 1"]
  },
  {
    id: "mat-mas-13",
    title: "Chemical Resistance Test – Tiles",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "test",
    path: "/services/material-testing-services#masonry",
    keywords: ["Acid Resistance", "Alkali Resistance", "Household Chemicals", "Stain Resistance", "IS 13630 Part 8"]
  },
  {
    id: "mat-mas-14",
    title: "Masonry Mortar Compressive Strength Test",
    parent: "Material Testing Services",
    category: "Masonry Material Testing",
    level: "test",
    path: "/services/material-testing-services#masonry",
    keywords: ["Mortar Compressive Strength", "Masonry Mortar Cube", "1:3 1:4 1:6 Mix", "IS 2250"]
  },

  // 1st Child: Concrete Testing
  {
    id: "mat-child-concrete",
    title: "Concrete Testing",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "child",
    path: "/services/material-testing-services#concrete",
    keywords: ["Fresh Concrete", "Hardened Concrete", "Cube Test", "Core Test", "RCPT", "RCMT", "IS 516", "IS 456", "15 Tests"]
  },
  // Child's Children: Concrete Tests (15 Tests)
  {
    id: "mat-con-1",
    title: "Concrete Slump Test",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["Slump Cone", "Fresh Concrete Workability", "True Slump", "Collapse Slump", "IS 1199 Part 2", "ASTM C143"]
  },
  {
    id: "mat-con-2",
    title: "Air Content Test – Fresh Concrete",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["Pressure Gauge Air Meter", "Air Entrainment", "Fresh Concrete Air", "IS 1199 Part 4", "ASTM C231"]
  },
  {
    id: "mat-con-3",
    title: "Bleeding Test – Fresh Concrete",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["Water Bleeding", "Laitance Rate", "Sedimentation", "IS 1199 Part 7", "ASTM C232"]
  },
  {
    id: "mat-con-4",
    title: "Initial & Final Setting Time Test – Concrete Mortar",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["Penetration Resistance", "Proctor Needle", "Concrete Setting Time", "IS 1199 Part 7", "ASTM C403"]
  },
  {
    id: "mat-con-5",
    title: "Compressive Strength Test – Cube / Cylinder",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["Cube Testing", "7-Day 28-Day Strength", "150mm Cube", "Cylinder Compression", "Grade M20 to M80", "IS 516 Part 1", "ASTM C39"]
  },
  {
    id: "mat-con-6",
    title: "Concrete Core Compressive Strength Test",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["Extracted Core", "Core Drilling Concrete", "In-Situ Core Strength", "Capping L/D Correction", "IS 516 Part 4", "ASTM C42"]
  },
  {
    id: "mat-con-7",
    title: "Accelerated Curing Compressive Strength Test",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["Warm Water Method", "Boiling Water Curing", "Rapid Strength Prediction", "28-Day Prediction", "IS 9013", "ASTM C684"]
  },
  {
    id: "mat-con-8",
    title: "Flexural Strength Test – Concrete Beam",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["Modulus of Rupture", "Beam Third-Point Loading", "Pavement Concrete Flexure", "IS 516 Part 1", "ASTM C78"]
  },
  {
    id: "mat-con-9",
    title: "Splitting Tensile Strength Test – Concrete",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["Cylinder Splitting", "Indirect Tensile Strength", "Brazilian Method Concrete", "IS 516 Part 1", "ASTM C496"]
  },
  {
    id: "mat-con-10",
    title: "Density Determination – Hardened Concrete",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["Unit Weight Concrete", "Saturated & Oven-Dry Density", "Density of Hardened Concrete", "IS 516 Part 1"]
  },
  {
    id: "mat-con-11",
    title: "Water Permeability / Depth of Water Penetration under Pressure Test",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["DIN 1048", "Water Penetration under Pressure", "Permeability Depth Concrete", "Durability", "IS 516 Part 2"]
  },
  {
    id: "mat-con-12",
    title: "Drying Shrinkage / Length Change Test – Concrete",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["Length Comparator Concrete", "Drying Shrinkage Concrete", "Moisture Length Change", "IS 516 Part 2", "ASTM C157"]
  },
  {
    id: "mat-con-13",
    title: "Modulus of Elasticity & Poisson’s Ratio Test – Concrete",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["Compressometer", "Static Modulus of Elasticity Ec", "Poisson's Ratio Concrete", "IS 516 Part 1", "ASTM C469"]
  },
  {
    id: "mat-con-14",
    title: "Rapid Chloride Penetration Test (RCPT)",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["RCPT", "Coulombs", "Chloride Ion Penetrability", "Durability Marine Concrete", "ASTM C1202", "AASHTO T277"]
  },
  {
    id: "mat-con-15",
    title: "Rapid Chloride Migration Test (RCMT)",
    parent: "Material Testing Services",
    category: "Concrete Testing",
    level: "test",
    path: "/services/material-testing-services#concrete",
    keywords: ["RCMT", "NT BUILD 492", "Chloride Migration Coefficient", "Non-Steady State Migration", "Service Life Modeling"]
  },

  // 1st Child: Steel, Metals & Weld Mechanical Testing
  {
    id: "mat-child-steel",
    title: "Steel, Metals & Weld Mechanical Testing",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "child",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["TMT Rebar", "Tensile Test", "Coupler", "Strand", "UTM", "Welds", "IS 1786", "IS 1608", "14 Tests"]
  },
  // Child's Children: Steel & Weld Tests (14 Tests)
  {
    id: "mat-stl-1",
    title: "Tensile Test – Tensile Strength, Yield Strength, 0.2% Proof Stress & Elongation",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "test",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["UTM Tensile", "TMT Rebar Yield Strength", "0.2% Proof Stress", "Fe 500D Fe 550D", "Ultimate Tensile Strength UTS", "Percentage Elongation", "IS 1608", "IS 1786", "ASTM A370"]
  },
  {
    id: "mat-stl-2",
    title: "Bend Test / Re-Bend Test",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "test",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["Mandrel Bending", "Re-Bend Test", "Ductility of Rebar", "Reverse Bending", "IS 1599", "IS 1786"]
  },
  {
    id: "mat-stl-3",
    title: "Coupler Static Tensile Test",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "test",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["Rebar Coupler", "Mechanical Splice", "Slip Test Coupler", "Tensile Failure in Bar", "IS 16172"]
  },
  {
    id: "mat-stl-4",
    title: "Mass per Metre Determination",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "test",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["Nominal Mass", "Weight per Metre", "TMT Diameter Verification", "Rolling Margin", "IS 1786"]
  },
  {
    id: "mat-stl-5",
    title: "Prestressing Strand Breaking Strength Test",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "test",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["HT Strand", "LRPC Strand", "Breaking Load Strand", "0.2% Proof Load", "IS 14268", "ASTM A416"]
  },
  {
    id: "mat-stl-6",
    title: "Prestressing Strand Dimensional & Mass Verification",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "test",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["7-Wire Strand", "Strand Lay Length", "Strand Pitch & Mass", "IS 14268"]
  },
  {
    id: "mat-stl-7",
    title: "Face Bend Test – Welds",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "test",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["Weld Face Bend", "Weld Ductility", "ASME Section IX", "AWS D1.1", "IS 7307"]
  },
  {
    id: "mat-stl-8",
    title: "Root Bend Test – Welds",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "test",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["Weld Root Bend", "Root Fusion Integrity", "ASME Section IX", "AWS D1.1", "IS 7307"]
  },
  {
    id: "mat-stl-9",
    title: "Nick Break / Fracture Test",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "test",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["Weld Fracture Test", "Internal Flaws", "Slag Inclusion", "Lack of Fusion", "API 1104", "AWS D1.1"]
  },
  {
    id: "mat-stl-10",
    title: "Transverse Bend Test – Welded Joint",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "test",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["Transverse Weld Bend", "Welded Joint Ductility", "ASME Section IX", "IS 3600"]
  },
  {
    id: "mat-stl-11",
    title: "Transverse Tensile Test – Welded Joint",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "test",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["Transverse Weld Tensile", "Weld Joint Efficiency", "Tensile Strength Welded Plate", "IS 3600 Part 3"]
  },
  {
    id: "mat-stl-12",
    title: "Charpy Impact Test",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "test",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["Charpy V-Notch", "CVN", "Toughness Joules", "Sub-Zero Impact -20C -40C", "IS 1757", "ASTM E23"]
  },
  {
    id: "mat-stl-13",
    title: "Rockwell Hardness Test",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "test",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["HRC", "HRB", "Rockwell Hardness Scale", "Indentation Hardness", "IS 1586", "ASTM E18"]
  },
  {
    id: "mat-stl-14",
    title: "Macroscopic Examination – Welds",
    parent: "Material Testing Services",
    category: "Steel, Metals & Weld Mechanical Testing",
    level: "test",
    path: "/services/material-testing-services#steel-metals",
    keywords: ["Weld Macro Etch", "Penetration Depth", "Fusion Zone", "Heat Affected Zone HAZ", "IS 3600 Part 9"]
  },

  // 1st Child: Chemical Testing
  {
    id: "mat-child-chemical",
    title: "Chemical Testing (Across 6 Matrices)",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "child",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["Analytical Chemistry", "pH", "Chloride", "Sulphate", "Water Testing", "Soil Chemistry", "Spectrophotometer", "Wet Chemistry"]
  },
  // Child's Children: Chemical Tests (16 Tests)
  {
    id: "mat-chem-1",
    title: "Chemical Analysis – pH Value Determination",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["pH Test", "Soil pH", "Construction Water pH", "Admixture pH", "IS 3025 Part 11", "IS 2720 Part 26"]
  },
  {
    id: "mat-chem-2",
    title: "Water Soluble Chloride Determination",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["Chloride Ion", "Titration Chloride", "Water Chloride", "Concrete Chloride", "IS 3025 Part 32", "IS 456"]
  },
  {
    id: "mat-chem-3",
    title: "Sulphate & SO₃ Content Determination",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["Sulphates", "Gravimetric Sulphate", "Water Sulphate", "Soil Sulphate", "IS 3025 Part 24", "IS 2720 Part 27"]
  },
  {
    id: "mat-chem-4",
    title: "Total Alkali Content (Na₂O + 0.658 K₂O)",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["Equivalent Alkali", "Flame Photometer", "Alkali Content Cement", "IS 4032"]
  },
  {
    id: "mat-chem-5",
    title: "Loss on Ignition (LOI)",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["LOI", "Volatile Matter", "Ignition Loss Muffle Furnace", "IS 4032", "IS 1727"]
  },
  {
    id: "mat-chem-6",
    title: "Insoluble Residue (IR)",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["Acid Insoluble Residue", "Silica Purity", "Cement Insoluble Residue", "IS 4032"]
  },
  {
    id: "mat-chem-7",
    title: "Free Lime Determination",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["Uncombined CaO", "Ethylene Glycol Method", "Free Lime Clinker", "IS 4032"]
  },
  {
    id: "mat-chem-8",
    title: "Major Oxides Determination (SiO₂, Al₂O₃, CaO, MgO, Fe₂O₃)",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["XRF Chemical", "Wet Chemical Oxides", "Silica Alumina Calcium Magnesia", "IS 4032"]
  },
  {
    id: "mat-chem-9",
    title: "Organic Matter Content – Soil & Aggregates",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["Walkley-Black Method", "Organic Impurities", "Soil Organic Carbon", "IS 2720 Part 22", "IS 2386 Part 2"]
  },
  {
    id: "mat-chem-10",
    title: "Alkali–Aggregate Reactivity (AAR / Mortar Bar Method)",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["AAR", "Alkali Silica Reaction ASR", "Accelerated Mortar Bar", "ASTM C1260", "IS 2386 Part 7"]
  },
  {
    id: "mat-chem-11",
    title: "Acidity & Alkalinity Determination – Construction Water",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["Water Acidity", "Total Alkalinity Water", "Titration Neutralization", "IS 3025 Part 22", "IS 3025 Part 23"]
  },
  {
    id: "mat-chem-12",
    title: "Total Dissolved Solids (TDS) & Suspended Solids (TSS)",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["TDS", "TSS", "Gravimetric Solids Water", "Construction Water Quality", "IS 3025 Part 16", "IS 3025 Part 17"]
  },
  {
    id: "mat-chem-13",
    title: "Total Hardness Determination – Construction Water",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["EDTA Hardness", "Calcium & Magnesium Hardness", "Potable Water Hardness", "IS 3025 Part 21"]
  },
  {
    id: "mat-chem-14",
    title: "Fixed & Volatile Residue – Mixing Water",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["Volatile Solids", "Organic Residue in Water", "IS 3025", "IS 456"]
  },
  {
    id: "mat-chem-15",
    title: "Steel & Alloy Optical Emission Spectroscopy / Chemical Composition",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["Carbon C", "Sulphur S", "Phosphorus P", "OES Spectrometer", "Carbon Equivalent CE", "IS 228", "IS 8811"]
  },
  {
    id: "mat-chem-16",
    title: "Zinc Coating Mass Determination",
    parent: "Material Testing Services",
    category: "Chemical Testing",
    level: "test",
    path: "/services/material-testing-services#chemical-testing",
    keywords: ["Antimony Trichloride Method", "Galvanized Coating Weight g/m2", "Stripping Method", "IS 6745", "IS 4759"]
  },

  // =========================================================================
  // INSTITUTIONAL & ACCREDITATION PAGES
  // =========================================================================
  {
    id: "inst-accreditations",
    title: "NABL Accreditations (581 Parameters Scope)",
    parent: "Credentials & Accreditations",
    category: "Credentials",
    level: "child",
    path: "/accreditations",
    keywords: ["NABL", "ISO/IEC 17025", "Accredited Lab", "TC-11462", "Calibration", "Testing Scope"]
  },
  {
    id: "inst-approvals",
    title: "Approvals & Empanelment (NHAI, RVNL, MES, CPWD)",
    parent: "Credentials & Accreditations",
    category: "Credentials",
    level: "child",
    path: "/approvals",
    keywords: ["Approvals", "Empanelments", "NHAI", "RVNL", "MES", "Railways", "Government Approved"]
  },
  {
    id: "inst-reach",
    title: "Our Reach & Laboratory Hubs (Pan-India)",
    parent: "About SIMCON",
    category: "Reach",
    level: "child",
    path: "/reach",
    keywords: ["Ahmedabad Central Hub", "Delhi NCR Hub", "Mumbai Hub", "Kolkata Hub", "Mobile Testing Units"]
  },
  {
    id: "inst-clients",
    title: "Government & PSU Clients (6,480+ Track Record)",
    parent: "Clients & Projects",
    category: "Clients",
    level: "child",
    path: "/clients",
    keywords: ["L&T", "Tata Projects", "NHSRCL", "Adani", "Afcons", "JMC", "Clients", "Projects"]
  }
];

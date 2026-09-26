export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  client?: string;
  location?: string;
  year?: string;
  services: string[];
  description: string;
  featuredImage: string;
  gallery?: string[];
  scope?: string[];
  challenge?: string;
  solution?: string;
  outcome?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export const PROJECT_CATEGORIES = [
  "All",
  "Metro & Bullet Train",
  "Railway",
  "Aviation",
  "Roads & Highways",
  "Ports & Marine",
  "Energy",
  "Industrial",
  "Structural Health Assessment"
] as const;

export type ProjectCategory = typeof PROJECT_CATEGORIES[number];

export const PROJECTS: ProjectItem[] = [
  {
    id: "mahsr-bullet-train-sabarmati",
    slug: "mahsr-bullet-train-sabarmati",
    title: "Mumbai-Ahmedabad High Speed Rail (MAHSR Sabarmati Hub & C6 Package)",
    category: "Metro & Bullet Train",
    client: "National High Speed Rail Corporation (NHSRCL) / L&T Construction",
    location: "Sabarmati & Gujarat Corridor",
    year: "2021-2024",
    services: [
      "Subsurface Geotechnical Exploration",
      "High Strain Pile Dynamic Testing (PDA)",
      "Laboratory Soil & Rock Testing",
      "Foundation Recommendations"
    ],
    description: "Geotechnical soil testing, foundation investigation, and dynamic pile testing for viaduct piers and the Sabarmati High Speed Rail Hub for India's pioneer Bullet Train corridor.",
    featuredImage: "/assets/projects/project-metro-bullet-train-1.png",
    gallery: [
      "/assets/projects/project-metro-bullet-train-1.png",
      "/assets/projects/project-metro-bullet-train-2.png",
      "/assets/projects/project-metro-bullet-train-5.png",
      "/assets/projects/project-metro-bullet-train-10.png"
    ],
    scope: [
      "Deep rotary boreholes along viaduct alignments",
      "Standard Penetration Testing and undisturbed Shelby tube sampling",
      "High-strain dynamic pile load testing on bored cast-in-situ piles",
      "Digital consolidation and triaxial shear parameter evaluation"
    ],
    outcome: "Delivered certified foundation parameters adhering to Japanese Shinkansen technical criteria and Indian Railway standards.",
    seoTitle: "Mumbai-Ahmedabad Bullet Train Project | SIMCON Case Study",
    seoDescription: "Geotechnical investigation and dynamic pile load testing for the MAHSR High Speed Rail corridor by SIMCON Technology."
  },
  {
    id: "bhopal-metro-rail",
    slug: "bhopal-metro-rail",
    title: "Bhopal Metro Rail Viaduct & Elevated Stations",
    category: "Metro & Bullet Train",
    client: "Madhya Pradesh Metro Rail Corporation Limited (MPMRCL)",
    location: "Bhopal, Madhya Pradesh",
    year: "2024-2025",
    services: [
      "Geotechnical Investigation",
      "Rock Coring & Laboratory Strength Testing",
      "Foundation Bearing Capacity Reports"
    ],
    description: "Subcontractor for geotechnical investigation work for part design and construction of elevated viaducts and metro stations across Bhopal Metro network.",
    featuredImage: "/assets/projects/project-metro-bullet-train-2.png",
    scope: [
      "Continuous rock coring in basalt and sedimentary formations",
      "UCS and Brazilian tensile testing of rock cores",
      "Subsurface profiling for station pier foundation design"
    ],
    seoTitle: "Bhopal Metro Rail Geotechnical Investigation | SIMCON Technology",
    seoDescription: "Subsurface exploration and rock laboratory testing for Bhopal Metro Rail elevated viaducts and stations."
  },
  {
    id: "indore-metro-rail-in04",
    slug: "indore-metro-rail-in04",
    title: "Indore Metro Rail Project (Packages IN04 & IN05R)",
    category: "Metro & Bullet Train",
    client: "MPMRCL / Rail Vikas Nigam Limited (RVNL) / HCC",
    location: "Indore, Madhya Pradesh",
    year: "2024-2025",
    services: [
      "Menard Pressuremeter Testing",
      "Subsurface Geotechnical Profiling",
      "Borehole Logging & Testing"
    ],
    description: "Specialized pressuremeter testing and geotechnical soil exploration across the 8.65 km project stretch for Indore Metro packages IN04 and IN05R.",
    featuredImage: "/assets/projects/project-metro-bullet-train-5.png",
    scope: [
      "In-situ Menard Pressuremeter tests for deformation moduli and creep pressure",
      "Rotary drilling in difficult urban corridors",
      "Numerical validation of pier settlement estimates"
    ],
    seoTitle: "Indore Metro Rail Pressuremeter & Geotechnical Testing | SIMCON",
    seoDescription: "In-situ pressuremeter testing and deep geotechnical investigation for Indore Metro Rail network."
  },
  {
    id: "rishikesh-karnaprayag-railway-tunnel",
    slug: "rishikesh-karnaprayag-railway-tunnel",
    title: "Rishikesh-Karnaprayag Himalayan Railway Tunnel Project",
    category: "Railway",
    client: "Rail Vikas Nigam Limited (RVNL) / Dilip Buildcon Ltd.",
    location: "Uttarakhand Himalayan Belt",
    year: "2023-2024",
    services: [
      "Standard Penetration Testing (SPT)",
      "Ev2 Deformation Modulus Testing",
      "Undrained Cohesion Evaluation",
      "Geophysical Investigation"
    ],
    description: "Geotechnical and geophysical investigation across complex Himalayan rock formations for deep rail tunnel portals, approach cuttings, and bridge abutments.",
    featuredImage: "/assets/projects/project-railway-aviation-1.png",
    gallery: [
      "/assets/projects/project-railway-aviation-1.png",
      "/assets/projects/project-railway-aviation-5.png"
    ],
    scope: [
      "Deep mountain geotechnical drilling and geological classification",
      "Ev2 cyclic plate load testing for tunnel trackbed stiffness",
      "Slope stability modeling of steep mountain approach portals"
    ],
    seoTitle: "Rishikesh-Karnaprayag Railway Tunnel Geotechnical Study | SIMCON",
    seoDescription: "Himalayan railway tunnel geotechnical investigation, Ev2 deformation testing, and slope evaluation by SIMCON Technology."
  },
  {
    id: "secr-railway-tunnels-bridges",
    slug: "secr-railway-tunnels-bridges",
    title: "South East Central Railway Tunnels T14, T15 & T16",
    category: "Railway",
    client: "South East Central Railway (SECR)",
    location: "Central Railway Zone",
    year: "2024",
    services: [
      "High Strain Pile Dynamic Testing (PDA)",
      "Low Strain Pile Integrity Testing (PIT)",
      "Cross-Hole Sonic Logging (CHSL)"
    ],
    description: "Non-destructive foundation integrity testing and high-strain dynamic load testing for deep foundation shafts on tunnels T14, T15, and T16 and adjacent major bridges.",
    featuredImage: "/assets/projects/project-railway-aviation-5.png",
    scope: [
      "Sonic wave velocity logging on deep drilled shafts",
      "Integrity profiling with PIT-W signal interpretation",
      "Verification of pile shaft continuity before rail deck erection"
    ],
    seoTitle: "SECR Railway Tunnels Foundation Testing | SIMCON Technology",
    seoDescription: "Pile integrity testing, sonic logging, and dynamic testing for SECR tunnels and bridges."
  },
  {
    id: "pitol-jhabua-bridge-testing",
    slug: "pitol-jhabua-bridge-testing",
    title: "Railway Major Bridge No. 60 (Pitol - Jhabua Section)",
    category: "Railway",
    client: "Ministry of Railways",
    location: "Pitol - Jhabua Section, Madhya Pradesh",
    year: "2025",
    services: [
      "Cross-Hole Ultrasonic / Sonic Logging (CHUM)",
      "Structural Soundness Verification"
    ],
    description: "Specialized ultrasonic crosshole sonic logging for deep bridge pier foundation piles to verify concrete integrity and sound bonding in rock sockets.",
    featuredImage: "/assets/projects/project-railway-aviation-6.png",
    scope: [
      "Multi-tube sonic logging across deep riverbed piers",
      "Real-time velocity profile tomographic visualization",
      "Detailed QA/QC certification for Western Railway"
    ],
    seoTitle: "Railway Major Bridge Sonic Logging | SIMCON Technology",
    seoDescription: "Crosshole sonic logging and non-destructive integrity testing on railway bridge foundations."
  },
  {
    id: "ahmedabad-svpi-airport-gpr",
    slug: "ahmedabad-svpi-airport-gpr",
    title: "Sardar Vallabhbhai Patel International Airport (SVPI)",
    category: "Aviation",
    client: "Airports Authority of India (AAI) / Adani Airport Holdings",
    location: "Ahmedabad, Gujarat",
    year: "2022-2023",
    services: [
      "Runway Structural Overlay Investigation",
      "Ground Penetrating Radar (GPR) Utility Survey",
      "Plate Load Testing",
      "ATC & NTB Subsurface Exploration"
    ],
    description: "Pavement structural overlay evaluation, plate load tests, GPR underground mapping, and geotechnical investigation for the new Air Traffic Control (ATC) and New Terminal Building (NTB).",
    featuredImage: "/assets/projects/project-railway-aviation-7.png",
    scope: [
      "Non-destructive runway sub-base GPR scanning",
      "Plate load testing for subgrade k-value assessment",
      "Deep borehole investigation for high-rise ATC tower foundation"
    ],
    seoTitle: "Ahmedabad SVPI Airport Geotechnical & GPR Survey | SIMCON",
    seoDescription: "Runway overlay testing, GPR mapping, and terminal foundation investigation at Ahmedabad Airport."
  },
  {
    id: "lucknow-airport-inflight-kitchen",
    slug: "lucknow-airport-inflight-kitchen",
    title: "Lucknow International Airport (Inflight Kitchen Facility)",
    category: "Aviation",
    client: "Adani Airport Holdings Limited",
    location: "Lucknow, Uttar Pradesh",
    year: "2025",
    services: [
      "Soil Investigation",
      "Foundation Engineering",
      "NABL Laboratory Testing"
    ],
    description: "Comprehensive subsurface investigation and foundation capacity recommendations for landside inflight flight catering infrastructure at Lucknow Airport.",
    featuredImage: "/assets/projects/project-railway-aviation-8.jpeg",
    scope: [
      "Soil boring and standard penetration testing",
      "Chemical suitability testing of soil and groundwater",
      "Safe bearing capacity determination for commercial structures"
    ],
    seoTitle: "Lucknow Airport Inflight Kitchen Soil Testing | SIMCON Technology",
    seoDescription: "Geotechnical investigation and foundation engineering at Lucknow Airport."
  },
  {
    id: "deendayal-port-oil-jetty",
    slug: "deendayal-port-oil-jetty",
    title: "Deendayal Port Authority - Oil Jetty No. 07 & Green Hydrogen Area",
    category: "Ports & Marine",
    client: "Deendayal Port Authority (Kandla)",
    location: "Kandla, Gujarat",
    year: "2024-2025",
    services: [
      "Marine Geotechnical Investigation",
      "Tidal Zone Drilling",
      "Laboratory Mechanics of Marine Clays"
    ],
    description: "Geotechnical exploration at the backup area of Oil Jetty No. 07 and green hydrogen industrial land to support heavy liquid cargo storage tanks.",
    featuredImage: "/assets/services/field-testing/field-testing-6.png",
    scope: [
      "Coastal borehole drilling in intertidal marine sediments",
      "Piezometer installation and cyclic consolidation tests",
      "Bearing capacity and ground improvement recommendations"
    ],
    seoTitle: "Deendayal Port Oil Jetty Geotechnical Investigation | SIMCON",
    seoDescription: "Marine geotechnical investigation for Deendayal Port Authority Oil Jetty No. 07 and green hydrogen storage."
  },
  {
    id: "dp-world-township-cfs",
    slug: "dp-world-township-cfs",
    title: "DP World Logistics Township & Container Freight Station (CFS)",
    category: "Ports & Marine",
    client: "DP World",
    location: "Mundra / Gandhidham Belt, Gujarat",
    year: "2025",
    services: [
      "Geotechnical Investigation",
      "Heavy Duty Yard Subgrade Evaluation",
      "Plate Load Testing"
    ],
    description: "Geotechnical subsurface exploration and yard pavement bearing assessment for DP World's major container freight station and township development.",
    featuredImage: "/assets/services/field-testing/field-testing-7.png",
    scope: [
      "Extensive borehole grid for heavy container stacking yards",
      "Cyclic plate load tests to evaluate subgrade resilient modulus",
      "Pavement thickness design support"
    ],
    seoTitle: "DP World CFS Geotechnical Investigation | SIMCON Technology",
    seoDescription: "Geotechnical investigation and subgrade plate load testing for DP World logistics facilities."
  },
  {
    id: "khavda-200mw-hybrid-project",
    slug: "khavda-200mw-hybrid-project",
    title: "NTPC 200MW Khavda Hybrid Power Project (Phase II)",
    category: "Energy",
    client: "NTPC / Dineshchandra R. Agrawal Infracon Pvt. Ltd.",
    location: "Khavda Renewable Energy Park, Kutch, Gujarat",
    year: "2024-2025",
    services: [
      "Hydrology Study",
      "Geotechnical Soil Investigation",
      "Field CBR Tests for Road Corridors"
    ],
    description: "Subsurface geotechnical investigation, hydrology drainage modeling, and in-situ field CBR testing for NTPC's 200MW wind-solar hybrid project in Khavda.",
    featuredImage: "/assets/services/field-testing/field-testing-9.png",
    scope: [
      "Hydrological catchment analysis and flood level estimation",
      "Boreholes for solar array inverters and transmission lines",
      "In-situ field CBR and soil resistivity testing"
    ],
    seoTitle: "NTPC Khavda 200MW Hybrid Project Geotechnical Study | SIMCON",
    seoDescription: "Geotechnical investigation, hydrology study, and field testing for NTPC Khavda hybrid park."
  },
  {
    id: "adani-thermal-power-plant",
    slug: "adani-thermal-power-plant",
    title: "Adani Thermal Power Plant - Structural Health Assessment",
    category: "Structural Health Assessment",
    client: "Adani Power Limited",
    location: "Korba, Chhattisgarh",
    year: "2023-2024",
    services: [
      "Ultrasonic Pulse Velocity (UPV)",
      "Rebound Hammer Testing",
      "Crack Depth Measurement",
      "Condition Assessment & Integrity Review"
    ],
    description: "Comprehensive non-destructive diagnostic evaluation and structural health assessment of operational power plant structures, boiler foundation rafts, and cooling systems.",
    featuredImage: "/assets/projects/project-adani-thermal-1.png",
    gallery: [
      "/assets/projects/project-adani-thermal-1.png",
      "/assets/projects/project-adani-thermal-2.png",
      "/assets/projects/project-adani-thermal-5.png"
    ],
    scope: [
      "UPV velocity mapping across heavy concrete pedestals",
      "Surface hardness profiling with calibrated rebound hammers",
      "Ultrasonic crack depth quantification",
      "Detailed structural durability report and maintenance roadmap"
    ],
    seoTitle: "Adani Thermal Power Plant Structural Assessment | SIMCON",
    seoDescription: "Non-destructive testing and structural health assessment for Adani Thermal Power Plant in Korba."
  },
  {
    id: "auda-elevated-corridor",
    slug: "auda-elevated-corridor",
    title: "AUDA Elevated Corridor (Iscon Junction to Sanand Cross Road)",
    category: "Roads & Highways",
    client: "Ahmedabad Urban Development Authority (AUDA)",
    location: "Ahmedabad, Gujarat",
    year: "2024",
    services: [
      "Pile Integrity Testing (PIT)",
      "High Strain Pile Dynamic Testing (PDA)",
      "Quality Assurance Surveillance"
    ],
    description: "Non-destructive low-strain integrity testing and high-strain dynamic load testing for elevated flyover pier foundations on the 4 km Iscon corridor.",
    featuredImage: "/assets/projects/project-metro-bullet-train-10.png",
    scope: [
      "100% PIT integrity testing on cast-in-situ foundation piles",
      "Dynamic capacity testing using calibrated drop weights",
      "Analysis of pile skin friction and end bearing mobilization"
    ],
    seoTitle: "AUDA Elevated Corridor Pile Testing | SIMCON Technology",
    seoDescription: "Pile integrity and dynamic testing for the AUDA elevated corridor in Ahmedabad."
  },
  {
    id: "mundra-petrochem-investigation",
    slug: "mundra-petrochem-investigation",
    title: "Mundra Petrochemical Complex & Township",
    category: "Industrial",
    client: "Adani Group / Keller Ground Engineering India",
    location: "Mundra, Kutch, Gujarat",
    year: "2023-2025",
    services: [
      "Geotechnical Investigation",
      "Laboratory Testing of Collected Samples",
      "Third Party Surveillance Testing",
      "UPV & Crack Depth Measurement"
    ],
    description: "Subsurface geotechnical investigation, rotary core drilling, ground improvement quality surveillance, and non-destructive testing for mega petrochemical refinery works.",
    featuredImage: "/assets/projects/project-metro-bullet-train-12.png",
    scope: [
      "Extensive deep rotary boring and continuous rock recovery",
      "Ground improvement surveillance for stone column installations",
      "Laboratory shear and consolidation testing"
    ],
    seoTitle: "Mundra Petrochemical Geotechnical Investigation | SIMCON",
    seoDescription: "Geotechnical exploration, laboratory testing, and ground improvement verification for Mundra Petrochem."
  },
  {
    id: "iffco-kandla-pile-testing",
    slug: "iffco-kandla-pile-testing",
    title: "IFFCO Chemical Complex Pile Dynamic Load Testing",
    category: "Industrial",
    client: "Indian Farmers Fertiliser Cooperative (IFFCO)",
    location: "Kandla, Gujarat",
    year: "2024",
    services: [
      "Pile Dynamic Load Testing (PDA Method)",
      "CAPWAP Numerical Analysis"
    ],
    description: "High-strain dynamic pile testing on foundation piles supporting heavy chemical storage tanks and process equipment in coastal Kandla.",
    featuredImage: "/assets/services/field-testing/field-testing-5.png",
    scope: [
      "Dynamic monitoring of pile driving stresses",
      "CAPWAP signal matching to evaluate ultimate pile bearing capacity",
      "Settlement behavior evaluation under high operational loads"
    ],
    seoTitle: "IFFCO Kandla Pile Load Testing | SIMCON Technology",
    seoDescription: "PDA dynamic pile load testing and CAPWAP analysis for IFFCO industrial facilities."
  }
];

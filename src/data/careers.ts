export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  experienceRequired: string;
  qualification: string;
  description: string;
  responsibilities: string[];
}

export const WORK_CULTURE_HIGHLIGHTS = [
  {
    title: "IIT & NIT Academic Guidance",
    description: "Work directly alongside doctorate advisors and senior consultants solving challenging ground and foundation problems."
  },
  {
    title: "NABL-Accredited Excellence",
    description: "Operate within rigorously audited ISO/IEC 17025:2017 compliant laboratories with high-precision digital equipment."
  },
  {
    title: "National Infrastructure Projects",
    description: "Direct hands-on experience on India's flagship High-Speed Bullet Train, metro networks, deep tunnels, and major ports."
  },
  {
    title: "Long-term Career Stability",
    description: "Over 50% of our core engineering leads have built their careers at SIMCON for 5 to 13+ years."
  }
];

export const CAREER_OPENINGS: JobOpening[] = [
  {
    id: "sr-geotech-engineer",
    title: "Senior Geotechnical Engineer",
    department: "Geotech Section",
    location: "Ahmedabad / Gandhidham",
    experienceRequired: "4-8 Years",
    qualification: "M.Tech / M.E. in Geotechnical Engineering",
    description: "Lead geotechnical investigation programs, foundation capacity analysis, PLAXIS 2D finite-element modeling, and technical client reporting.",
    responsibilities: [
      "Interpret borehole stratigraphy and in-situ test results",
      "Perform bearing capacity, settlement, and lateral pile load calculations",
      "Model deep excavations and diaphragm walls using PLAXIS 2D / LPILE",
      "Review laboratory soil/rock test certificates and compile geotechnical reports"
    ]
  },
  {
    id: "geophysicist",
    title: "Field Geophysicist",
    department: "Geophysical Section",
    location: "Pan-India Mobilization (Base: Ahmedabad / Gandhidham)",
    experienceRequired: "2-5 Years",
    qualification: "M.Sc. / M.Tech in Applied Geophysics",
    description: "Execute and interpret MASW, Seismic Refraction (SRT), Crosshole Seismic, and Electrical Resistivity Tomography (ERT) surveys.",
    responsibilities: [
      "Conduct field data acquisition using multi-channel seismographs and resistivity meters",
      "Process dispersion curves and inversion models using GeoGiga Seismic Pro and IGIS",
      "Produce geological depth sections and shear-wave velocity profiles",
      "Coordinate with client geotechnical teams on site"
    ]
  },
  {
    id: "materials-engineer",
    title: "Materials Testing Lead / Senior Chemist",
    department: "Material Testing Section",
    location: "Gandhidham / Lucknow",
    experienceRequired: "3-6 Years",
    qualification: "B.E. Civil / M.Sc. Chemistry",
    description: "Oversee NABL-accredited physical and chemical testing of concrete, aggregates, bitumen, reinforcing steel, and cementitious materials.",
    responsibilities: [
      "Ensure adherence to ISO/IEC 17025:2017 and NABL audit documentation",
      "Supervise tensile tests, Charpy impact, concrete durability tests (RCPT/RCMT)",
      "Verify calibration of digital universal testing machines and load cells",
      "Issue authorized test certificates within strict client turnaround times"
    ]
  },
  {
    id: "field-testing-supervisor",
    title: "In-Situ Field Testing Engineer",
    department: "Field Testing Section",
    location: "Multiple Sites (Pan-India)",
    experienceRequired: "2-5 Years",
    qualification: "Diploma / B.E. Civil Engineering",
    description: "Manage on-site execution of static/dynamic pile load tests, plate load tests, pressuremeter testing, and pile integrity tests.",
    responsibilities: [
      "Setup reaction frames, hydraulic jacks, load cells, and electronic displacement transducers",
      "Execute high strain pile dynamic testing (PDA) and low strain integrity tests (PIT)",
      "Record field parameters under strict safety standards",
      "Daily progress reporting and client coordination"
    ]
  }
];

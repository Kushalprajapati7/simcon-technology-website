export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: "Technical Paper" | "Engineering Note" | "Methodology";
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  relatedServices: string[];
}

export const INSIGHTS: InsightArticle[] = [
  {
    id: "seismic-site-classification-masw",
    slug: "seismic-site-classification-masw",
    title: "Non-Invasive Shear-Wave Profiling (MASW) in High-Speed Rail Corridors",
    category: "Technical Paper",
    date: "January 2025",
    readTime: "6 min read",
    summary: "How Multichannel Analysis of Surface Waves (MASW) provides continuous Vs30 shear-wave velocity stratification for seismic design without operational disruption.",
    content: [
      "Seismic hazard mitigation along high-speed transit corridors requires precise determination of average shear-wave velocity in the upper 30 meters (Vs30). Traditional crosshole and downhole methods require multiple cased boreholes, making continuous alignment profiling costly and slow.",
      "Multichannel Analysis of Surface Waves (MASW) records high-frequency Rayleigh wave dispersion using geophone arrays. Inversion of the dispersion curve produces 2D depth profiles of shear modulus (Gmax) and stiffness variations.",
      "By integrating MASW with targeted confirmatory boreholes, engineering teams achieve high-resolution seismic site categorization (Classes A through E per IS 1893 and Eurocode 8) while cutting mobilization turnaround times significantly."
    ],
    keyTakeaways: [
      "Continuous non-invasive profiling minimizes ground disturbance in urban right-of-ways.",
      "Accurate shear wave velocity (Vs) directly calibrates dynamic soil-structure interaction.",
      "Complies with seismic design guidelines for high-speed rail viaducts and bridges."
    ],
    relatedServices: ["geophysical-survey", "geotechnical-investigation"]
  },
  {
    id: "pile-load-testing-kentledge-vs-dynamic",
    slug: "pile-load-testing-kentledge-vs-dynamic",
    title: "Static Kentledge vs. High Strain Dynamic Pile Testing (PDA) in Deep Foundations",
    category: "Methodology",
    date: "November 2024",
    readTime: "8 min read",
    summary: "Comparative analysis of static vertical pile load testing and high-strain dynamic testing with CAPWAP signal matching for infrastructure foundations.",
    content: [
      "Validating deep pile capacity is critical before structural load transfer. Static load testing via kentledge or reaction anchors provides the classical benchmark load-settlement curve according to IS 2911 (Part 4).",
      "However, for high-capacity piles exceeding 1,500 tonnes, assembling kentledge frames presents substantial safety and logistical constraints on congested sites. High Strain Dynamic Pile Testing (PDA) offers an established alternative.",
      "Dynamic testing uses a drop weight and accelerometer/strain transducer pairs mounted near the pile head. By recording strain and acceleration during impact, wave equation analysis and CAPWAP signal matching determine mobilized end bearing, shaft friction distribution, and structural integrity in a fraction of the time."
    ],
    keyTakeaways: [
      "Static testing provides definitive benchmark settlement behavior for initial test piles.",
      "Dynamic testing (PDA) enables high-throughput verification on 5-10% of working piles.",
      "CAPWAP analysis clearly delineates skin friction distribution versus end-bearing resistance."
    ],
    relatedServices: ["advanced-field-testing", "structural-health-assessment"]
  },
  {
    id: "nabl-iso-17025-testing-integrity",
    slug: "nabl-iso-17025-testing-integrity",
    title: "Technical Integrity in Laboratory Material Testing: The ISO/IEC 17025 Benchmark",
    category: "Engineering Note",
    date: "August 2024",
    readTime: "5 min read",
    summary: "Why NABL accreditation under ISO/IEC 17025:2017 provides the vital chain of custody and measurement traceability required by EPC contractors and government authorities.",
    content: [
      "Quality assurance in modern infrastructure depends entirely on the veracity of test data. A test certificate is only as credible as the equipment calibration, environmental controls, and procedural rigor of the testing facility.",
      "Accreditation under ISO/IEC 17025:2017 by NABL requires laboratories to validate test methods, participate in inter-laboratory proficiency testing, maintain measurement uncertainty budgets, and ensure full calibration traceability to national standards (NPL).",
      "At SIMCON, our facilities in Gandhidham (TC-5077), Ahmedabad (TC-9050), and Lucknow (NABL-13273) operate under strict digitalized sample tracking, eliminating manual transcription errors and ensuring indisputable legal credibility."
    ],
    keyTakeaways: [
      "Traceability to national standards ensures test results withstand third-party audits.",
      "Standardized measurement uncertainty budgets quantify reliability in concrete and steel tests.",
      "Essential for empanelment with NHAI, RVNL, MES, and major transit authorities."
    ],
    relatedServices: ["material-testing", "structural-health-assessment"]
  }
];

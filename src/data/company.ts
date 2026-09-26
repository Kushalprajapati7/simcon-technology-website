export interface CompanyStat {
  value: string;
  numericValue: number;
  label: string;
  sublabel: string;
}

export interface CoreValue {
  title: string;
  description: string;
  highlight: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  state: string;
  role: string;
  address: string;
  phone: string;
  email: string;
  nablCode?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  capabilities: string[];
}

export const COMPANY_INFO = {
  name: "SIMCON Technology Pvt. Ltd.",
  shortName: "SIMCON",
  tagline: "Engineering the Ground Beneath Every Decision",
  subTagline: "Geotechnical investigation, testing and engineering services for complex infrastructure.",
  foundedYear: 2008,
  incorporatedYear: 2024,
  headquarters: "Gandhidham, Gujarat, India",
  websiteUrl: "https://www.simcon.co.in",
  officialEmail: "info@simcon.co.in",
  officialPhone: "+91 90999 81808",
  whatsappNumber: "+91 70690 42756",
  
  stats: [
    {
      value: "18+",
      numericValue: 18,
      label: "Years of Experience",
      sublabel: "Founded in 2008 with continuous technical excellence"
    },
    {
      value: "6,480+",
      numericValue: 6480,
      label: "Projects Completed",
      sublabel: "Across rail, metro, highways, energy and industrial sectors"
    },
    {
      value: "125+",
      numericValue: 125,
      label: "Team Members",
      sublabel: "Engineers, geologists, chemists & field specialists"
    },
    {
      value: "2,00,000+",
      numericValue: 200000,
      label: "Running Meters",
      sublabel: "Drilling and subsurface geotechnical investigation completed"
    },
    {
      value: "581",
      numericValue: 581,
      label: "NABL Parameters",
      sublabel: "Accredited testing parameters across all facilities"
    }
  ] as CompanyStat[],

  vision: "To emerge as the most trusted and preferred partner by delivering advanced engineering solutions that ensure safety, enhance durability and uphold integrity.",
  
  mission: "To provide innovative, precise and reliable engineering solutions that empower our clients to build with safety, durability and sustainability.",

  coreValues: [
    {
      title: "INTEGRITY",
      description: "We act with honesty, transparency, and accountability in every test result and recommendation.",
      highlight: "Evidence-Based"
    },
    {
      title: "HUMANITY",
      description: "We lead with empathy, respect and care for our people, our partners, and the communities impacted by our work.",
      highlight: "People-Centered"
    },
    {
      title: "COMMITMENT",
      description: "We stay dedicated to growth, quality execution, rigorous standards and long-term client success.",
      highlight: "Dedicated"
    },
    {
      title: "PROSPERITY",
      description: "We create sustainable growth and lasting value through sound engineering and mutual trust.",
      highlight: "Value Creation"
    },
    {
      title: "EXCELLENCE",
      description: "We strive for the best in everything we do — from field sampling to numerical modeling and final reporting.",
      highlight: "Highest Standards"
    }
  ] as CoreValue[],

  directorsMessage: {
    author: "Mr. Vinesh Maheshwari",
    title: "Managing Director",
    credentials: "B.Tech., MBA",
    quote: "Engineering decisions must be driven by facts, technical competence and ethics — not by commercial pressure.",
    content: [
      "Over the past two decades, the consulting industry has become increasingly competitive, yet confidence in the quality and integrity of technical services has not grown at the same pace. At SIMCON Technology, we believe engineering decisions must be driven by facts, technical competence and ethics & not by commercial pressure.",
      "Our recommendations are based on genuine results from our own field investigations and laboratory testing, supported by qualified professionals, advanced resources and NABL-accredited facilities. We are committed to delivering technically sound, honest and reliable solutions within committed timelines.",
      "For us, credibility is earned through the accuracy of our work and the integrity with which we deliver it."
    ]
  },

  workflow: [
    {
      step: "01",
      title: "INVESTIGATE",
      subtitle: "Field & Laboratory Exploration",
      description: "Subsurface boreholes, rotary rock drilling, non-invasive geophysics, in-situ static/dynamic penetrometer, and precision laboratory testing.",
      items: ["Field Investigations", "NABL Laboratory Testing", "Geophysical Surveys", "In-situ Dynamic Testing"]
    },
    {
      step: "02",
      title: "ANALYSE",
      subtitle: "Scientific & Numerical Modeling",
      description: "Finite-element soil-structure interaction, liquefaction potential assessment, seismic site characterization, and settlement modeling.",
      items: ["PLAXIS 2D / Numerical Modeling", "LPILE Lateral Pile Analysis", "Liquefaction Potential Assessment", "Geotechnical Data Interpretation"]
    },
    {
      step: "03",
      title: "DESIGN",
      subtitle: "Engineering Support & Solutions",
      description: "Optimized foundation recommendations, ground improvement schemes, retaining structures, and actionable decision support for contractors and EPCs.",
      items: ["Foundation Recommendations", "Ground Improvement Design", "Retaining & Deep Excavation Support", "Technical Decision Support"]
    }
  ],

  // Financial Growth Section is modular and toggleable via config
  financialGrowth: {
    enabled: true,
    title: "Financial Growth",
    subtitle: "A Track Record of Sustainable Growth Built on Technical Trust",
    currentTurnover: "₹18.01 Cr",
    currentFY: "FY 2025-26",
    baselineTurnover: "₹0.86 Cr",
    baselineFY: "FY 2013-14",
    multiplier: "20x+",
    evolutionYear: 2024,
    evolutionText: "Evolved into SIMCON Technology Pvt. Ltd. — Same Foundation. Greater Possibilities.",
    description: "From a strong foundation to an expanding engineering enterprise, our journey reflects the trust of our clients, the commitment of our team, and the measurable value we deliver across every infrastructure project."
  }
};

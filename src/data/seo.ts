export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  ogImage?: string;
  structuredDataType?: "Organization" | "Service" | "LocalBusiness" | "Article" | "CollectionPage";
}

const BASE_URL = "https://www.simcon.co.in";

export const DEFAULT_SEO: SeoMetadata = {
  title: "Simcon Technology Pvt Ltd",
  description: "NABL-accredited geotechnical investigation, advanced field testing, geophysical surveys, material testing, and structural health assessment across India.",
  keywords: "geotechnical investigation, NABL accredited lab, soil testing, rock testing, geophysical survey, pile load test, material testing, structural health assessment",
  canonical: BASE_URL,
  ogImage: `${BASE_URL}/og-image.jpg`,
  structuredDataType: "Organization"
};

export const PAGE_SEO: Record<string, SeoMetadata> = {
  "/": {
    title: "SIMCON Technology | Engineering the Ground Beneath Every Decision",
    description: "NABL-accredited geotechnical investigation, testing and engineering services for complex infrastructure across India. 18+ years of technical excellence.",
    canonical: `${BASE_URL}/`,
    structuredDataType: "Organization"
  },
  "/about": {
    title: "About SIMCON Technology | 18+ Years of Technical Excellence",
    description: "Learn about SIMCON's history since 2008, leadership, core values of integrity and excellence, organizational structure, and NABL facilities.",
    canonical: `${BASE_URL}/about`,
    structuredDataType: "Organization"
  },
  "/about/leadership": {
    title: "Leadership & Management | SIMCON Technology",
    description: "Executive leadership, technical advisors, and branch directors guiding SIMCON's engineering excellence across India.",
    canonical: `${BASE_URL}/about/leadership`,
    structuredDataType: "Organization"
  },
  "/about/team": {
    title: "Our Engineering Team | SIMCON Technology",
    description: "Meet our 125+ member team of doctorates, postgraduates, geologists, materials engineers, and NABL-certified field specialists.",
    canonical: `${BASE_URL}/about/team`,
    structuredDataType: "Organization"
  },
  "/services": {
    title: "Engineering & Testing Services | SIMCON Technology",
    description: "Explore our 8 core disciplines: Geotechnical Investigation, Geophysics, Material Testing, Field Testing, NDT, and Structural Health Assessment.",
    canonical: `${BASE_URL}/services`,
    structuredDataType: "CollectionPage"
  },
  "/expertise": {
    title: "Technical Expertise & Numerical Modeling | SIMCON Technology",
    description: "Deep foundation engineering, finite element modeling (PLAXIS 2D, LPILE), geotechnical earthquake engineering, and ground improvement design.",
    canonical: `${BASE_URL}/expertise`,
    structuredDataType: "Service"
  },
  "/projects": {
    title: "Infrastructure & Engineering Projects | SIMCON Technology",
    description: "Explore 6,480+ completed projects across high-speed rail, metro networks, expressways, ports, energy parks, and industrial complexes.",
    canonical: `${BASE_URL}/projects`,
    structuredDataType: "CollectionPage"
  },
  "/accreditations": {
    title: "NABL Accreditations & Certifications | SIMCON Technology",
    description: "View ISO/IEC 17025:2017 NABL accreditation certificates for our Gandhidham (TC-5077), Ahmedabad (TC-9050), and Lucknow (NABL-13273) laboratories.",
    canonical: `${BASE_URL}/accreditations`,
    structuredDataType: "LocalBusiness"
  },
  "/approvals": {
    title: "Approvals & Empanelments | SIMCON Technology",
    description: "Approved and empaneled by NHAI, RVNL, MES, AUDA, Deendayal Port Authority, and state maritime boards for major infrastructure quality testing.",
    canonical: `${BASE_URL}/approvals`,
    structuredDataType: "Organization"
  },
  "/clients": {
    title: "Our Valued Clients & Partners | SIMCON Technology",
    description: "Trusted by Indian Railways, NHSRCL, L&T, Adani Group, NTPC, AAI, Afcons, HCC, DP World, and premier EPC contractors.",
    canonical: `${BASE_URL}/clients`,
    structuredDataType: "Organization"
  },
  "/reach": {
    title: "Our Reach & Office Network | SIMCON Technology",
    description: "Four strategic regional hubs in Gandhidham, Ahmedabad, Lucknow, and Indore with rapid nationwide field mobilization capabilities.",
    canonical: `${BASE_URL}/reach`,
    structuredDataType: "LocalBusiness"
  },
  "/careers": {
    title: "Careers at SIMCON | Build Your Engineering Career",
    description: "Join an engineering organization guided by IIT/NIT professionals. Explore openings in geotechnical analysis, geophysics, and material testing.",
    canonical: `${BASE_URL}/careers`,
    structuredDataType: "Organization"
  },
  "/insights": {
    title: "Technical Insights & Engineering Briefings | SIMCON Technology",
    description: "Authoritative engineering papers and case methodologies on in-situ testing, seismic site classification, and ISO 17025 quality systems.",
    canonical: `${BASE_URL}/insights`,
    structuredDataType: "CollectionPage"
  },
  "/contact": {
    title: "Contact SIMCON Technology | Head Office & Regional Hubs",
    description: "Contact our geotechnical specialists and testing laboratories in Gandhidham, Ahmedabad, Lucknow, and Indore for technical enquiries.",
    canonical: `${BASE_URL}/contact`,
    structuredDataType: "LocalBusiness"
  },
  "/privacy-policy": {
    title: "Privacy Policy | SIMCON Technology",
    description: "SIMCON Technology Pvt. Ltd. website privacy policy and data governance practices.",
    canonical: `${BASE_URL}/privacy-policy`
  },
  "/terms": {
    title: "Terms & Conditions | SIMCON Technology",
    description: "Terms and conditions governing the use of SIMCON Technology digital services and content.",
    canonical: `${BASE_URL}/terms`
  },
  "/cookie-policy": {
    title: "Cookie Policy | SIMCON Technology",
    description: "Information regarding cookie usage and website performance analytics.",
    canonical: `${BASE_URL}/cookie-policy`
  }
};

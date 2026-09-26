export interface AccreditationCertificate {
  id: string;
  code: string;
  location: string;
  standard: string;
  body: string;
  imagePath: string;
  scopeDescription: string;
  featuredParameters: string[];
}

export const ACCREDITATIONS: AccreditationCertificate[] = [
  {
    id: "gandhidham-nabl",
    code: "TC-5077",
    location: "Gandhidham (Kachchh, Gujarat)",
    standard: "ISO/IEC 17025:2017",
    body: "National Accreditation Board for Testing and Calibration Laboratories (NABL)",
    imagePath: "/assets/certificates/TC-5077-Gandhidham.jpg",
    scopeDescription: "Accredited for comprehensive geotechnical soil and rock testing, chemical analysis, physical mechanics, and civil engineering materials.",
    featuredParameters: [
      "Soil Laboratory Mechanics (Consolidation, Triaxial, UCS)",
      "Rock Physical & Mechanical Properties",
      "Chemical Testing & Water Quality",
      "Building & Pavement Materials"
    ]
  },
  {
    id: "ahmedabad-nabl",
    code: "TC-9050",
    location: "Ahmedabad (Gujarat)",
    standard: "ISO/IEC 17025:2017",
    body: "National Accreditation Board for Testing and Calibration Laboratories (NABL)",
    imagePath: "/assets/certificates/TC-9050-Ahmedabad.jpg",
    scopeDescription: "Accredited testing facility catering to transit infrastructure, high-speed rail, metro corridors, and industrial structures.",
    featuredParameters: [
      "Construction Material Testing (Concrete, Cement, Aggregate)",
      "Non-Destructive Testing (UPV, Rebound Hammer, Cover)",
      "Reinforcing Steel & Coupler Mechanical Testing",
      "Soil Mechanics & Foundation Testing"
    ]
  },
  {
    id: "lucknow-nabl",
    code: "NABL-13273",
    location: "Lucknow (Uttar Pradesh)",
    standard: "ISO/IEC 17025:2017",
    body: "National Accreditation Board for Testing and Calibration Laboratories (NABL)",
    imagePath: "/assets/certificates/TC-13273-Lucknow.jpg",
    scopeDescription: "Accredited regional laboratory supporting major expressway, railway corridor, and infrastructure projects across Northern India.",
    featuredParameters: [
      "Aggregate & Bituminous Testing",
      "Compressive Strength & Core Analysis",
      "Highway & Pavement Geotechnical Testing",
      "In-situ Field Density & Moisture Tests"
    ]
  }
];

export interface ApprovalEmpanelment {
  id: string;
  agencyName: string;
  authorityType: string;
  scopeSummary: string;
  imageIndex: number;
}

export const APPROVALS_EMPANELMENTS: ApprovalEmpanelment[] = [
  {
    id: "app-1",
    agencyName: "National Highways Authority of India (NHAI)",
    authorityType: "Central Government / Highways",
    scopeSummary: "Empaneled for geotechnical exploration, material testing, and third-party quality testing on national highway corridors.",
    imageIndex: 1
  },
  {
    id: "app-2",
    agencyName: "Rail Vikas Nigam Limited (RVNL)",
    authorityType: "Ministry of Railways",
    scopeSummary: "Approved testing and geotechnical services for major railway lines, bridges, and mountain tunnels.",
    imageIndex: 2
  },
  {
    id: "app-3",
    agencyName: "Military Engineer Services (MES)",
    authorityType: "Ministry of Defence",
    scopeSummary: "Approved agency for subsurface exploration, soil bearing capacity evaluation, and laboratory testing for defense infrastructure.",
    imageIndex: 3
  },
  {
    id: "app-4",
    agencyName: "Ahmedabad Urban Development Authority (AUDA)",
    authorityType: "Urban Development Authority",
    scopeSummary: "Approved agency for elevated corridor pile testing, dynamic load testing, and road infrastructure quality assessment.",
    imageIndex: 4
  },
  {
    id: "app-5",
    agencyName: "Deendayal Port Authority (Kandla)",
    authorityType: "Major Ports Authority",
    scopeSummary: "Empaneled for offshore/nearshore geotechnical investigations, jetty backup land exploration, and terminal material testing.",
    imageIndex: 5
  },
  {
    id: "app-6",
    agencyName: "Gujarat Maritime Board (GMB)",
    authorityType: "State Maritime Authority",
    scopeSummary: "Approved for coastal geotechnical surveys, landside bearing capacity testing, and marine structure foundation checks.",
    imageIndex: 6
  }
];

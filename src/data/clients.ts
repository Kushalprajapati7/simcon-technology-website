export interface ClientItem {
  id: string;
  name: string;
  category: "Government & Public Sector" | "Railways & Transit" | "Infrastructure & EPC" | "Energy & Power" | "Ports & Maritime" | "Industrial & Petrochemical";
  logoPath?: string;
  featured?: boolean;
}

export const CLIENT_CATEGORIES = [
  "All",
  "Government & Public Sector",
  "Railways & Transit",
  "Infrastructure & EPC",
  "Energy & Power",
  "Ports & Maritime",
  "Industrial & Petrochemical"
] as const;

export const CLIENTS: ClientItem[] = [
  { id: "nhsrcl", name: "National High Speed Rail Corporation (NHSRCL)", category: "Railways & Transit", logoPath: "/assets/clients/client-logo-5.png", featured: true },
  { id: "rvnl", name: "Rail Vikas Nigam Limited (RVNL)", category: "Railways & Transit", logoPath: "/assets/clients/client-logo-6.png", featured: true },
  { id: "aai", name: "Airports Authority of India (AAI)", category: "Government & Public Sector", logoPath: "/assets/clients/client-logo-7.png", featured: true },
  { id: "nhai", name: "National Highways Authority of India (NHAI)", category: "Government & Public Sector", logoPath: "/assets/clients/client-logo-8.png", featured: true },
  { id: "lt", name: "Larsen & Toubro (L&T Construction)", category: "Infrastructure & EPC", logoPath: "/assets/clients/client-logo-9.png", featured: true },
  { id: "ntpc", name: "NTPC Limited", category: "Energy & Power", logoPath: "/assets/clients/client-logo-10.png", featured: true },
  { id: "adani", name: "Adani Group / Adani Power / Adani Ports", category: "Infrastructure & EPC", logoPath: "/assets/clients/client-logo-11.png", featured: true },
  { id: "afcons", name: "Afcons Infrastructure Limited", category: "Infrastructure & EPC", logoPath: "/assets/clients/client-logo-12.png", featured: true },
  { id: "dilip-buildcon", name: "Dilip Buildcon Limited", category: "Infrastructure & EPC", logoPath: "/assets/clients/client-logo-13.png", featured: true },
  { id: "hcc", name: "Hindustan Construction Company (HCC)", category: "Infrastructure & EPC", logoPath: "/assets/clients/client-logo-14.png", featured: true },
  { id: "dp-world", name: "DP World", category: "Ports & Maritime", logoPath: "/assets/clients/client-logo-15.png", featured: true },
  { id: "dpa", name: "Deendayal Port Authority (Kandla)", category: "Ports & Maritime", logoPath: "/assets/clients/client-logo-16.png", featured: true },
  { id: "iocl", name: "Indian Oil Corporation Limited (IOCL)", category: "Industrial & Petrochemical", logoPath: "/assets/clients/client-logo-17.png", featured: true },
  { id: "bpcl", name: "Bharat Petroleum Corporation Limited (BPCL)", category: "Industrial & Petrochemical", logoPath: "/assets/clients/client-logo-18.png", featured: true },
  { id: "iffco", name: "Indian Farmers Fertiliser Cooperative (IFFCO)", category: "Industrial & Petrochemical", logoPath: "/assets/clients/client-logo-19.png", featured: true },
  { id: "mpmrcl", name: "Madhya Pradesh Metro Rail Corporation (MPMRCL)", category: "Railways & Transit", logoPath: "/assets/clients/client-logo-20.png", featured: true },
  { id: "western-railway", name: "Western Railway (Indian Railways)", category: "Railways & Transit", logoPath: "/assets/clients/client-logo-21.png", featured: true },
  { id: "secr", name: "South East Central Railway (SECR)", category: "Railways & Transit", logoPath: "/assets/clients/client-logo-22.png", featured: true },
  { id: "auda", name: "Ahmedabad Urban Development Authority (AUDA)", category: "Government & Public Sector", logoPath: "/assets/clients/client-logo-23.png", featured: true },
  { id: "mes", name: "Military Engineer Services (MES)", category: "Government & Public Sector", logoPath: "/assets/clients/client-logo-24.png", featured: true },
  { id: "itd-cementation", name: "ITD Cementation India Limited", category: "Infrastructure & EPC", logoPath: "/assets/clients/client-logo-25.png", featured: true },
  { id: "keller", name: "Keller Ground Engineering India", category: "Infrastructure & EPC", logoPath: "/assets/clients/client-logo-26.png", featured: true },
  { id: "sterling-wilson", name: "Sterling & Wilson Renewable Energy", category: "Energy & Power", logoPath: "/assets/clients/client-logo-27.png", featured: true },
  { id: "aditya-birla", name: "Aditya Birla Renewables Limited", category: "Energy & Power", logoPath: "/assets/clients/client-logo-28.png", featured: true },
  { id: "tata-projects", name: "Tata Projects Limited", category: "Infrastructure & EPC", logoPath: "/assets/clients/client-logo-29.png", featured: true },
  { id: "dra-infracon", name: "Dineshchandra R. Agrawal Infracon Pvt. Ltd.", category: "Infrastructure & EPC", logoPath: "/assets/clients/client-logo-30.png", featured: true },
  { id: "lcc-projects", name: "LCC Projects Pvt. Ltd.", category: "Infrastructure & EPC", logoPath: "/assets/clients/client-logo-31.png", featured: false },
  { id: "imc-limited", name: "IMC Limited (Liquid Cargo Terminals)", category: "Ports & Maritime", logoPath: "/assets/clients/client-logo-32.png", featured: false },
  { id: "torrent-power", name: "Torrent Power Limited", category: "Energy & Power", logoPath: "/assets/clients/client-logo-33.png", featured: false },
  { id: "gmb", name: "Gujarat Maritime Board (GMB)", category: "Ports & Maritime", logoPath: "/assets/clients/client-logo-34.png", featured: false }
];

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualifications?: string;
  yearsWithSimcon?: string;
  image?: string;
  section: "leadership" | "advisors" | "branch-leads" | "geotech" | "geophysical" | "material" | "field";
  bioSnippet?: string;
}

export const ORG_STRUCTURE = {
  totalCount: "125+",
  breakdown: [
    { title: "Doctorates", count: 3, description: "IIT/NIT research background leading complex geotechnical & numerical analysis" },
    { title: "Consultant Engineers", count: 3, description: "Senior advisory board with decades of infrastructure and testing experience" },
    { title: "Postgraduate Engineers", count: 17, description: "M.Tech / M.E. geotechnical, structural, and highway specialists" },
    { title: "Graduate Engineers", count: 35, description: "B.Tech / B.E. engineers running tests, simulations and site projects" },
    { title: "Diploma Engineers", count: 26, description: "Skilled site & laboratory supervisors managing continuous daily operations" },
    { title: "Skilled Technicians", count: 24, description: "NABL-trained laboratory and field equipment operators" },
    { title: "Site Engineers", count: 12, description: "Dedicated on-ground personnel mobilized across India" }
  ]
};

export const LEADERSHIP: TeamMember[] = [
  {
    id: "vinesh-maheshwari",
    name: "Mr. Vinesh Maheshwari",
    designation: "Managing Director",
    department: "Executive Leadership",
    qualifications: "B.Tech., MBA",
    yearsWithSimcon: "18+ Years",
    image: "/assets/leadership/vinesh-maheshwari.jpeg",
    section: "leadership",
    bioSnippet: "Founder and Managing Director steering SIMCON's growth from a boutique geotechnical firm into a national engineering testing enterprise."
  },
  {
    id: "kalpana-maheshwari",
    name: "Dr. Kalpana Maheshwari",
    designation: "Director",
    department: "Executive Leadership",
    qualifications: "B.E., M.E., Ph.D.",
    yearsWithSimcon: "18+ Years",
    image: "/assets/leadership/kalpana-maheshwari.jpeg",
    section: "leadership",
    bioSnippet: "Director with deep academic and technical acumen in civil engineering, overseeing quality benchmarks and NABL compliance."
  },
  {
    id: "kunal-shah",
    name: "Mr. Kunal Shah",
    designation: "Branch Incharge - Ahmedabad",
    department: "Branch Operations",
    image: "/assets/leadership/kunal-shah.jpeg",
    section: "branch-leads",
    bioSnippet: "Heads the Ahmedabad regional facility, managing transit infrastructure projects, high-speed rail, and urban development contracts."
  },
  {
    id: "bhavesh-dodiya",
    name: "Mr. Bhavesh Dodiya",
    designation: "Branch Incharge - Gandhidham",
    department: "Branch Operations",
    image: "/assets/leadership/bhavesh-dodiya.jpeg",
    section: "branch-leads",
    bioSnippet: "Leads operations, central testing facility logistics, and port/marine geotechnical assignments at Gandhidham HQ."
  },
  {
    id: "shiv-mishra",
    name: "Mr. Shiv Mishra",
    designation: "Branch Incharge - Lucknow",
    department: "Branch Operations",
    image: "/assets/leadership/shiv-mishra.jpeg",
    section: "branch-leads",
    bioSnippet: "Directs Northern India operations, expressway testing, and railway tunneling projects from the Lucknow center."
  },
  {
    id: "shubham-sadh",
    name: "Mr. Shubham Sadh",
    designation: "Branch Incharge - Indore",
    department: "Branch Operations",
    image: "/assets/leadership/shubham-sadh.jpeg",
    section: "branch-leads",
    bioSnippet: "Heads Central India projects, metro rail testing packages (MPMRCL), and regional industrial corridor investigations."
  },
  {
    id: "komal-rajwani",
    name: "Mrs. Komal Rajwani",
    designation: "Manager - Accounts & HR",
    department: "Corporate Management",
    image: "/assets/leadership/komal-rajwani.jpeg",
    section: "leadership",
    bioSnippet: "Oversees corporate governance, talent acquisition, human capital development, and financial administration across all branches."
  },
  {
    id: "shailesh-gandhi",
    name: "Dr. Shailesh Gandhi",
    designation: "Technical Advisor - Geotech",
    department: "Technical Advisory Board",
    qualifications: "Ph.D. (Geotechnical Engineering)",
    image: "/assets/leadership/shailesh-gandhi.jpeg",
    section: "advisors",
    bioSnippet: "Senior advisor with exhaustive experience in ground improvement, port foundations, and complex soil-structure interaction."
  },
  {
    id: "kannan-iyer",
    name: "Dr. Kannan Iyer",
    designation: "Technical Advisor - Geotech",
    department: "Technical Advisory Board",
    qualifications: "Ph.D. (Geotechnical Engineering)",
    image: "/assets/leadership/kannan-iyer.jpeg",
    section: "advisors",
    bioSnippet: "Distinguished geotechnical academic and consultant guiding numerical modeling, deep foundation systems, and seismic engineering."
  },
  {
    id: "bharat-dhumania",
    name: "Mr. Bharat Dhumania",
    designation: "Technical Advisor - Material",
    department: "Technical Advisory Board",
    qualifications: "Senior Civil & Material Specialist",
    image: "/assets/leadership/bharat-dhumania.jpeg",
    section: "advisors",
    bioSnippet: "Materials engineer advising on high-performance concrete mix design, asphalt rheology, and advanced metallurgical tests."
  }
];

export const SPECIALIST_TEAM: TeamMember[] = [
  {
    id: "shashank-singh",
    name: "Dr. Shashank Singh",
    designation: "Geotechnical Numerical Modeler",
    department: "Geotech Section",
    yearsWithSimcon: "1 Year with SIMCON",
    image: "/assets/team/shashank-singh.jpeg",
    section: "geotech"
  },
  {
    id: "deepa-jethva",
    name: "Mrs. Deepa Jethva",
    designation: "Senior Geotechnical Specialist",
    department: "Geotech Section",
    yearsWithSimcon: "13 Years with SIMCON",
    image: "/assets/team/deepa-jethva.jpeg",
    section: "geotech"
  },
  {
    id: "kanti-parmar",
    name: "Mr. Kanti Parmar",
    designation: "Senior Materials Engineer",
    department: "Material Testing Section",
    yearsWithSimcon: "11 Years with SIMCON",
    image: "/assets/team/kanti-parmar.jpeg",
    section: "material"
  },
  {
    id: "amit-pratap-singh",
    name: "Mr. Amit Pratap Singh",
    designation: "Field Testing Lead Engineer",
    department: "Field Testing Section",
    yearsWithSimcon: "9 Years with SIMCON",
    image: "/assets/team/amit-pratap-singh.jpeg",
    section: "field"
  },
  {
    id: "akshay-maddhasiya",
    name: "Mr. Akshay Maddhasiya",
    designation: "Materials Testing Specialist",
    department: "Material Testing Section",
    yearsWithSimcon: "6 Years with SIMCON",
    image: "/assets/team/akshay-maddhasiya.jpeg",
    section: "material"
  },
  {
    id: "manu-dangar",
    name: "Mr. Manu Dangar",
    designation: "Geotechnical Engineer",
    department: "Geotech Section",
    yearsWithSimcon: "5 Years with SIMCON",
    image: "/assets/team/manu-dangar.jpeg",
    section: "geotech"
  },
  {
    id: "arunesh-tiwari",
    name: "Mr. Arunesh Tiwari",
    designation: "Senior Field Engineer",
    department: "Field Testing Section",
    yearsWithSimcon: "4 Years with SIMCON",
    image: "/assets/team/arunesh-tiwari.jpeg",
    section: "field"
  },
  {
    id: "utsav-patel",
    name: "Mr. Utsav Patel",
    designation: "Geophysicist",
    department: "Geophysical Section",
    yearsWithSimcon: "3 Years with SIMCON",
    image: "/assets/team/utsav-patel.jpeg",
    section: "geophysical"
  },
  {
    id: "vidhi-bhavsar",
    name: "Mrs. Vidhi Bhavsar",
    designation: "Quality & Testing Chemist",
    department: "Material Testing Section",
    yearsWithSimcon: "2 Years with SIMCON",
    image: "/assets/team/vidhi-bhavsar.jpeg",
    section: "material"
  },
  {
    id: "ujjawal-prakash",
    name: "Dr. Ujjawal Prakash",
    designation: "Geotechnical Research Engineer",
    department: "Geotech Section",
    yearsWithSimcon: "1 Year with SIMCON",
    image: "/assets/team/ujjawal-prakash.jpeg",
    section: "geotech"
  },
  {
    id: "mayank-gupta",
    name: "Mr. Mayank Gupta",
    designation: "Senior Geologist",
    department: "Geotech Section",
    yearsWithSimcon: "5 Years with SIMCON",
    image: "/assets/team/mayank-gupta.jpeg",
    section: "geotech"
  },

  {
    id: "dinesh-prajapat-field",
    name: "Mr. Dinesh Prajapat",
    designation: "Field In-situ Testing Specialist",
    department: "Field Testing Section",
    yearsWithSimcon: "5 Years with SIMCON",
    image: "/assets/team/dinesh-prajapat-field.jpeg",
    section: "field"
  },
  {
    id: "dinesh-prajapati-geo",
    name: "Mr. Dinesh Prajapati",
    designation: "Geotechnical Engineer",
    department: "Geotech Section",
    yearsWithSimcon: "5 Years with SIMCON",
    image: "/assets/team/dinesh-prajapati-geo.jpeg",
    section: "geotech"
  },

  {
    id: "suryapratap-singh",
    name: "Mr. Suryapratap Singh Sisodiya",
    designation: "Pile Testing Engineer",
    department: "Field Testing Section",
    yearsWithSimcon: "4 Years with SIMCON",
    image: "/assets/team/suryapratap-singh.jpeg",
    section: "field"
  },

  {
    id: "sujeet-sharma",
    name: "Mr. Sujeet Sharma",
    designation: "Chemist & Testing Specialist",
    department: "Material Testing Section",
    yearsWithSimcon: "3 Years with SIMCON",
    image: "/assets/team/sujeet-sharma.jpeg",
    section: "material"
  },

  {
    id: "smeet-mehta",
    name: "Mr. Smeet Mehta",
    designation: "Concrete & Material Technologist",
    department: "Material Testing Section",
    yearsWithSimcon: "2 Years with SIMCON",
    image: "/assets/team/smeet-mehta.jpeg",
    section: "material"
  },

];

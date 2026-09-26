export interface UrlRedirect {
  oldUrl: string;
  newUrl: string;
  statusCode: 301;
  rationale: string;
}

export const URL_MIGRATION_MAP: UrlRedirect[] = [
  {
    oldUrl: "/index.html",
    newUrl: "/",
    statusCode: 301,
    rationale: "Old static homepage redirected to new canonical root"
  },
  {
    oldUrl: "/about.html",
    newUrl: "/about",
    statusCode: 301,
    rationale: "Old company about page mapped to new editorial About page"
  },
  {
    oldUrl: "/service.html",
    newUrl: "/services",
    statusCode: 301,
    rationale: "Old services page mapped to new 8-discipline Services hub"
  },
  {
    oldUrl: "/Scope.html",
    newUrl: "/accreditations",
    statusCode: 301,
    rationale: "Old NABL scope page mapped to new NABL Accreditations & Certificate viewer"
  },
  {
    oldUrl: "/certification.html",
    newUrl: "/accreditations",
    statusCode: 301,
    rationale: "Old certificate listing mapped to new Accreditations directory"
  },
  {
    oldUrl: "/approval.html",
    newUrl: "/approvals",
    statusCode: 301,
    rationale: "Old empanelment page mapped to new Approvals & Empanelments showcase"
  },
  {
    oldUrl: "/projects.html",
    newUrl: "/projects",
    statusCode: 301,
    rationale: "Old project directory mapped to new Project Explorer with category filters"
  },
  {
    oldUrl: "/clients.html",
    newUrl: "/clients",
    statusCode: 301,
    rationale: "Old client list mapped to new verified Client directory"
  },
  {
    oldUrl: "/career.html",
    newUrl: "/careers",
    statusCode: 301,
    rationale: "Old career page mapped to new Careers hub with opening details and static form"
  },
  {
    oldUrl: "/contact.html",
    newUrl: "/contact",
    statusCode: 301,
    rationale: "Old contact page mapped to new four-hub Contact page with enquiry form"
  },
  {
    oldUrl: "/gallery.html",
    newUrl: "/projects",
    statusCode: 301,
    rationale: "Old gallery mapped to project case studies with authentic photography"
  },
  // Category specific old URLs
  {
    oldUrl: "/airport.html",
    newUrl: "/projects?category=Aviation",
    statusCode: 301,
    rationale: "Aviation category projects"
  },
  {
    oldUrl: "/metro-railways.html",
    newUrl: "/projects?category=Metro%20%26%20Bullet%20Train",
    statusCode: 301,
    rationale: "Metro and high-speed rail projects"
  },
  {
    oldUrl: "/railways.html",
    newUrl: "/projects?category=Railway",
    statusCode: 301,
    rationale: "Railway tunnels and track projects"
  },
  {
    oldUrl: "/roadways.html",
    newUrl: "/projects?category=Roads%20%26%20Highways",
    statusCode: 301,
    rationale: "Highways and elevated corridors"
  },
  {
    oldUrl: "/port-jetty.html",
    newUrl: "/projects?category=Ports%20%26%20Marine",
    statusCode: 301,
    rationale: "Ports, marine jetties and dredging"
  },
  {
    oldUrl: "/green-energy.html",
    newUrl: "/projects?category=Energy",
    statusCode: 301,
    rationale: "Solar, wind and renewable hybrid power projects"
  },
  {
    oldUrl: "/building-infrastructure.html",
    newUrl: "/projects?category=Industrial",
    statusCode: 301,
    rationale: "Industrial infrastructure and township foundations"
  },
  {
    oldUrl: "/petroleum-industry.html",
    newUrl: "/projects?category=Industrial",
    statusCode: 301,
    rationale: "Refineries, tank farms, and petrochemical piling"
  },
  {
    oldUrl: "/military-engineering-services.html",
    newUrl: "/projects?category=Infrastructure",
    statusCode: 301,
    rationale: "Defense and MES facilities"
  },
  {
    oldUrl: "/irrigation.html",
    newUrl: "/projects?category=Infrastructure",
    statusCode: 301,
    rationale: "Canals, hydraulic structures, and water resources"
  }
];

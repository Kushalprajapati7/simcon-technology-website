import { OfficeLocation } from './company';

export const OFFICES: OfficeLocation[] = [
  {
    id: "gandhidham",
    city: "Gandhidham",
    state: "Gujarat",
    role: "Headquarters & Central Laboratory",
    address: "Plot 52, Ward 6 (Industrial), Gandhidham, Kachchh, Gujarat 370201",
    phone: "+91 70690 42756",
    email: "info_kutch@simcon.co.in",
    nablCode: "TC-5077",
    coordinates: {
      lat: 23.0753,
      lng: 70.1337
    },
    capabilities: [
      "Full Scope Geotechnical Soil & Rock Laboratory",
      "Chemical Testing & Water Analysis",
      "Advanced Field Testing & Drilling Fleet",
      "Geophysical Survey Base",
      "Construction Material Testing"
    ]
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    role: "Regional Office & Testing Facility",
    address: "21, Krishna Park, R.C Technical Road, Chanakyapuri, Gota, Ahmedabad, Gujarat 382481",
    phone: "+91 92743 81479",
    email: "info_ahd@simcon.co.in",
    nablCode: "TC-9050",
    coordinates: {
      lat: 23.0911,
      lng: 72.5323
    },
    capabilities: [
      "Soil & Rock Mechanics Laboratory",
      "Construction Material Testing",
      "NDT & Structural Health Assessment",
      "Numerical Modeling & Engineering Design",
      "Metro & Rail Transit Project Support"
    ]
  },
  {
    id: "lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    role: "Northern Regional Office & Laboratory",
    address: "Khasra No. 1, Sarai Shekh, Satrik Road, Opp. Yadav Market, Chinhat, Lucknow, Uttar Pradesh 226028",
    phone: "+91 92743 81491",
    email: "info_lko@simcon.co.in",
    nablCode: "NABL-13273",
    coordinates: {
      lat: 26.8854,
      lng: 81.0427
    },
    capabilities: [
      "NABL-Accredited Material & Soil Testing",
      "Highways & Expressway Geotechnical Investigation",
      "Railway & Mountain Tunnel Testing",
      "In-situ Deep Foundation Testing",
      "Pavement Evaluation & Core Recovery"
    ]
  },
  {
    id: "indore",
    city: "Indore",
    state: "Madhya Pradesh",
    role: "Central India Regional Office",
    address: "AG-166, Scheme 54, SICA School Road, Vijay Nagar, Indore, Madhya Pradesh 452010",
    phone: "+91 92743 81495",
    email: "info_mp@simcon.co.in",
    coordinates: {
      lat: 22.7533,
      lng: 75.8937
    },
    capabilities: [
      "Metro Rail Project Mobilization (MPMRCL)",
      "Geotechnical Investigation & Pressuremeter Testing",
      "Geophysical Investigation (MASW / ERT / SRT)",
      "Industrial Corridor Testing",
      "Field Exploration Supervision"
    ]
  }
];

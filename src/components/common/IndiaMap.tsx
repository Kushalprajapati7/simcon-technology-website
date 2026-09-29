import React, { useState } from 'react';
import { MapPin, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';
import { OFFICES } from '@/data/offices';
import { OfficeLocation } from '@/data/company';

export const IndiaMap: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation>(OFFICES[0]);

  // Scaled coordinates on a 600x700 viewport representing India
  // Gandhidham: (150, 310)
  // Ahmedabad: (185, 335)
  // Lucknow: (340, 240)
  // Indore: (240, 350)
  const officeCoords: Record<string, { x: number; y: number }> = {
    gandhidham: { x: 135, y: 315 },
    ahmedabad: { x: 180, y: 340 },
    lucknow: { x: 335, y: 245 },
    indore: { x: 235, y: 360 }
  };

  // Additional pan-India project deployment pins
  const projectPins = [
    { name: "MAHSR Bullet Train", x: 175, y: 320 },
    { name: "Rishikesh Tunnel", x: 290, y: 165 },
    { name: "Khavda Hybrid Park", x: 120, y: 295 },
    { name: "Adani Korba Thermal", x: 365, y: 345 },
    { name: "Hingoli Solar Park", x: 245, y: 415 },
    { name: "Deendayal Port", x: 128, y: 310 },
    { name: "Bhopal Metro", x: 260, y: 340 }
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* SVG Interactive Map View */}
        <div className="lg:col-span-7 relative flex justify-center items-center bg-[#F7F8FA] rounded-lg p-4 border border-slate-100 overflow-hidden">
          {/* Subtle Technical Grid Background */}
          <div className="absolute inset-0 bg-tech-grid opacity-60" />

          {/* Technical Map Label */}
          <div className="absolute top-3 left-3 text-[10px] font-mono tracking-widest text-[#062B5C]/60 uppercase">
            PAN-INDIA MOBILIZATION & REGIONAL HUBS
          </div>

          <svg
            viewBox="0 0 500 580"
            className="w-full max-w-[440px] h-auto relative z-10 select-none"
            aria-label="Interactive Map of India showing SIMCON locations and reach"
          >
            {/* Architectural Stylized India Boundary Silhouette */}
            <path
              d="M170,40 L210,30 L235,60 L280,75 L310,105 L290,140 L340,165 L370,185 L350,210 L410,225 L450,215 L470,240 L450,270 L395,280 L370,305 L370,350 L345,410 L310,470 L260,545 L245,550 L230,510 L200,450 L175,395 L165,360 L125,320 L100,300 L125,270 L155,270 L170,220 L160,180 L180,120 L160,80 Z"
              fill="#E9EFF7"
              stroke="#B3CDE6"
              strokeWidth="1.5"
              strokeLinejoin="round"
              className="transition-colors"
            />

            {/* Subtle Longitude & Latitude Lines */}
            <line x1="60" y1="200" x2="440" y2="200" stroke="#062B5C" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.15" />
            <line x1="60" y1="350" x2="440" y2="350" stroke="#062B5C" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.15" />
            <line x1="250" y1="50" x2="250" y2="520" stroke="#062B5C" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.15" />

            {/* Connection Network Lines connecting the 4 hubs */}
            <line x1="135" y1="315" x2="180" y2="340" stroke="#1268B3" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
            <line x1="180" y1="340" x2="235" y2="360" stroke="#1268B3" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
            <line x1="235" y1="360" x2="335" y2="245" stroke="#1268B3" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
            <line x1="180" y1="340" x2="335" y2="245" stroke="#1268B3" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

            {/* Minor Pan-India Project Deployment Marks */}
            {projectPins.map((pin, i) => (
              <g key={i} className="opacity-60">
                <circle cx={pin.x} cy={pin.y} r="2.5" fill="#536271" />
                <circle cx={pin.x} cy={pin.y} r="4.5" fill="none" stroke="#536271" strokeWidth="0.5" opacity="0.4" />
              </g>
            ))}

            {/* Active Hub Markers */}
            {OFFICES.map((office) => {
              const coords = officeCoords[office.id] || { x: 200, y: 300 };
              const isSelected = selectedOffice.id === office.id;

              return (
                <g
                  key={office.id}
                  onClick={() => setSelectedOffice(office)}
                  className="cursor-pointer group"
                >
                  {/* Outer pulse when selected */}
                  {isSelected && (
                    <circle
                      cx={coords.x}
                      cy={coords.y}
                      r="16"
                      fill="#D71920"
                      opacity="0.2"
                      className="animate-ping"
                    />
                  )}
                  {/* Hub Halo */}
                  <circle
                    cx={coords.x}
                    cy={coords.y}
                    r={isSelected ? "9" : "6"}
                    fill={isSelected ? "#D71920" : "#062B5C"}
                    className="transition-all duration-200"
                  />
                  {/* Center Dot */}
                  <circle
                    cx={coords.x}
                    cy={coords.y}
                    r="3"
                    fill="#FFFFFF"
                  />
                  {/* City Label */}
                  <text
                    x={coords.x + 12}
                    y={coords.y + 4}
                    fontSize="11"
                    fontWeight={isSelected ? "700" : "600"}
                    fill={isSelected ? "#D71920" : "#062B5C"}
                    fontFamily="Inter, sans-serif"
                    className="transition-colors pointer-events-none drop-shadow-sm"
                  >
                    {office.city}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Map Legend */}
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm border border-slate-200 rounded px-3 py-2 text-[10px] text-slate-600 flex flex-col gap-1.5 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D71920]" />
              <span className="font-medium text-[#062B5C]">Active Regional Hub</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#536271]" />
              <span>Project Site Deployments</span>
            </div>
          </div>
        </div>

        {/* Selected Hub Details Card */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="technical-tag text-[#D71920] font-mono">
                REGIONAL HUB · {selectedOffice.id.toUpperCase()}
              </span>
              {selectedOffice.nablCode && (
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold bg-[#062B5C] text-white rounded">
                  NABL {selectedOffice.nablCode}
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold font-display text-[#062B5C]">
              {selectedOffice.city}, {selectedOffice.state}
            </h3>
            <p className="text-sm font-medium text-[#1268B3] mt-0.5">
              {selectedOffice.role}
            </p>

            <div className="mt-5 space-y-3.5 text-sm text-[#536271]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1268B3] shrink-0 mt-0.5" />
                <span className="leading-snug">{selectedOffice.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#1268B3] shrink-0" />
                <a href={`tel:${selectedOffice.phone}`} className="hover:text-[#062B5C] font-mono font-medium">
                  {selectedOffice.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#1268B3] shrink-0" />
                <a href={`mailto:${selectedOffice.email}`} className="hover:text-[#062B5C] font-mono">
                  {selectedOffice.email}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#062B5C] mb-3 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#1268B3]" /> Key Capabilities at this Hub
              </h4>
              <ul className="space-y-2">
                {selectedOffice.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#536271]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1268B3] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Hub Switcher buttons */}
          <div className="pt-4 border-t border-slate-100">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
              Select Regional Office:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {OFFICES.map((off) => (
                <button
                  key={off.id}
                  onClick={() => setSelectedOffice(off)}
                  className={`px-3 py-2 text-xs font-semibold rounded text-center transition-all ${
                    selectedOffice.id === off.id
                      ? 'bg-[#062B5C] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {off.city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

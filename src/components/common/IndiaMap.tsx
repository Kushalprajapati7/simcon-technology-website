import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';
import { OFFICES } from '@/data/offices';
import { OfficeLocation } from '@/data/company';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Additional pan-India project deployment pins
const PROJECT_PINS = [
  { name: "MAHSR Bullet Train", lat: 23.0805, lng: 72.5850 },
  { name: "Rishikesh Tunnel", lat: 30.0869, lng: 78.2676 },
  { name: "Khavda Hybrid Park", lat: 23.8500, lng: 69.7500 },
  { name: "Adani Korba Thermal", lat: 22.3595, lng: 82.7501 },
  { name: "Hingoli Solar Park", lat: 19.7180, lng: 77.1472 },
  { name: "Deendayal Port", lat: 23.0033, lng: 70.2167 },
  { name: "Bhopal Metro", lat: 23.2599, lng: 77.4126 }
];

export const IndiaMap: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation>(OFFICES[0]);
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const officeMarkersRef = useRef<Record<string, L.Marker>>({});

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize Leaflet Map centered over India
    const map = L.map(mapContainerRef.current, {
      center: [23.2, 77.5],
      zoom: 5,
      minZoom: 4,
      maxZoom: 12,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    // 100% Free OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // Render Project Deployment Pins
    PROJECT_PINS.forEach(pin => {
      const pinIcon = L.divIcon({
        className: 'custom-project-pin',
        html: `
          <div class="relative group cursor-pointer flex flex-col items-center">
            <div class="w-6 h-6 rounded-full bg-[#062B5C] hover:bg-[#1268B3] flex items-center justify-center border-2 border-white shadow-md transition-all">
              <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <div class="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-[#062B5C] group-hover:border-t-[#1268B3] -mt-0.5"></div>
          </div>
        `,
        iconSize: [24, 30],
        iconAnchor: [12, 30],
        popupAnchor: [0, -28],
      });

      const popupContent = `
        <div class="text-center px-2 py-1">
          <div class="font-bold text-xs text-[#062B5C] font-display">${pin.name}</div>
          <div class="text-[10px] text-slate-500 font-mono mt-0.5">Project Deployment Site</div>
        </div>
      `;

      L.marker([pin.lat, pin.lng], { icon: pinIcon })
        .bindPopup(popupContent, { closeButton: false, offset: [0, -4] })
        .addTo(map);
    });

    mapRef.current = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update office markers on map when selectedOffice changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Remove existing office markers
    Object.values(officeMarkersRef.current).forEach(marker => marker.remove());
    officeMarkersRef.current = {};

    OFFICES.forEach(office => {
      const isSelected = selectedOffice.id === office.id;

      const teardropIcon = L.divIcon({
        className: 'custom-teardrop-pin',
        html: `
          <div class="relative flex flex-col items-center cursor-pointer group">
            <div class="w-8 h-8 rounded-full ${isSelected ? 'bg-[#D71920] scale-110 shadow-lg' : 'bg-[#D71920] opacity-90 hover:opacity-100 hover:scale-105'} flex items-center justify-center border-2 border-white shadow-md transition-all duration-300 relative z-10">
              <div class="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
            <div class="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#D71920] -mt-1 drop-shadow-xs"></div>
            ${isSelected ? '<div class="absolute top-0 w-8 h-8 rounded-full bg-[#D71920]/40 animate-ping pointer-events-none"></div>' : ''}
          </div>
        `,
        iconSize: [32, 40],
        iconAnchor: [16, 38],
        popupAnchor: [0, -36],
      });

      const popupContent = `
        <div class="text-center px-2 py-1">
          <div class="font-extrabold text-sm text-[#062B5C] font-display leading-tight">${office.city}, ${office.state}</div>
          <div class="text-xs font-semibold text-[#1268B3] mt-1">${office.role}</div>
        </div>
      `;

      const marker = L.marker([office.coordinates.lat, office.coordinates.lng], { icon: teardropIcon })
        .bindPopup(popupContent, {
          closeButton: false,
          autoClose: false,
          closeOnClick: false,
          offset: [0, -4]
        })
        .addTo(map)
        .on('click', () => {
          setSelectedOffice(office);
        });

      if (isSelected) {
        marker.openPopup();
      }

      officeMarkersRef.current[office.id] = marker;
    });
  }, [selectedOffice]);

  // Handle office switch click
  const handleOfficeSelect = (office: OfficeLocation) => {
    setSelectedOffice(office);
    if (mapRef.current) {
      mapRef.current.flyTo([office.coordinates.lat, office.coordinates.lng], 7, {
        duration: 1.2,
      });
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 lg:p-8">
      {/* Scoped Leaflet Popup & Attribution Styling to match reference image */}
      <style>{`
        .simcon-leaflet-map .leaflet-control-attribution {
          display: none !important;
        }
        .simcon-leaflet-map .leaflet-popup-content-wrapper {
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.08);
          padding: 10px 14px;
          border: 1px solid #e2e8f0;
        }
        .simcon-leaflet-map .leaflet-popup-tip {
          background: #ffffff;
        }
        .simcon-leaflet-map .leaflet-popup-content {
          margin: 0;
          line-height: 1.4;
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Leaflet Interactive Map Only (No outer gray container or header/footer marks) */}
        <div className="lg:col-span-7">
          <div className="w-full h-[420px] sm:h-[480px] lg:h-[500px] rounded-xl overflow-hidden relative z-10 shadow-sm simcon-leaflet-map border border-slate-200">
            <div ref={mapContainerRef} className="w-full h-full" />

            {/* Map Legend Floating Overlay */}
            <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm border border-slate-200 rounded px-3 py-2 text-[10px] text-slate-600 flex flex-col gap-1.5 shadow-md z-[1000] pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D71920]" />
                <span className="font-bold text-[#062B5C]">Active Regional Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#062B5C]" />
                <span>Project Site Deployments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Hub Details Card */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-[#D71920]">
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
                  onClick={() => handleOfficeSelect(off)}
                  className={`px-3 py-2 text-xs font-semibold rounded text-center transition-all cursor-pointer ${selectedOffice.id === off.id
                      ? 'bg-[#062B5C] text-[#ffffff] shadow-sm'
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

import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { OFFICES } from '@/data/offices';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#062B5C] text-white pt-16 pb-12 border-t border-[#1E334D] relative overflow-hidden">
      {/* Subtle Technical Grid Lines */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top High-Trust Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block group bg-white px-3.5 py-2 rounded shadow-sm" aria-label="SIMCON Technology Home">
              <img
                src="/assets/logo/Simcon_logo.png"
                alt="SIMCON Technology Pvt. Ltd."
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md pt-2">
              National engineering testing and geotechnical consultancy delivering precision ground investigations, NABL-accredited laboratory diagnostics, and technical decision support for complex infrastructure projects.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded text-[11px] font-mono text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> NABL TC-5077
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded text-[11px] font-mono text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> NABL TC-9050
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded text-[11px] font-mono text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> NABL TC-13273
              </div>
            </div>
          </div>

          {/* Quick Nav Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
                Disciplines
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li>
                  <Link to="/services/geotechnical-investigation" className="hover:text-white transition-colors">
                    Geotechnical Investigation
                  </Link>
                </li>
                <li>
                  <Link to="/services/geophysical-survey" className="hover:text-white transition-colors">
                    Geophysical Survey
                  </Link>
                </li>
                <li>
                  <Link to="/services/material-testing" className="hover:text-white transition-colors">
                    Material Testing (580+ Params)
                  </Link>
                </li>
                <li>
                  <Link to="/services/advanced-field-testing" className="hover:text-white transition-colors">
                    Advanced Field Testing
                  </Link>
                </li>
                <li>
                  <Link to="/services/structural-health-assessment" className="hover:text-white transition-colors">
                    Structural Health & NDT
                  </Link>
                </li>
                <li>
                  <Link to="/services/advanced-surveying-mapping" className="hover:text-white transition-colors">
                    Advanced Surveying & DGPS
                  </Link>
                </li>
                <li>
                  <Link to="/expertise" className="hover:text-white transition-colors flex items-center gap-1 font-semibold text-[#2B7EC8]">
                    Numerical Modeling <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About SIMCON
                  </Link>
                </li>
                <li>
                  <Link to="/about/leadership" className="hover:text-white transition-colors">
                    Leadership & Advisors
                  </Link>
                </li>
                <li>
                  <Link to="/about/team" className="hover:text-white transition-colors">
                    125+ Team Directory
                  </Link>
                </li>
                <li>
                  <Link to="/accreditations" className="hover:text-white transition-colors">
                    NABL Accreditations
                  </Link>
                </li>
                <li>
                  <Link to="/approvals" className="hover:text-white transition-colors">
                    Approvals & Empanelments
                  </Link>
                </li>
                <li>
                  <Link to="/clients" className="hover:text-white transition-colors">
                    Client Partners
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-white transition-colors">
                    Careers & Openings
                  </Link>
                </li>
                <li>
                  <Link to="/insights" className="hover:text-white transition-colors">
                    Technical Insights
                  </Link>
                </li>
              </ul>
            </div>

            {/* Direct Connect */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
                Enquiries
              </h4>
              <div className="space-y-3 text-xs text-slate-300">
                <div>
                  <span className="block text-[11px] text-slate-300 uppercase font-mono">Central Phone:</span>
                  <a href={`tel:${COMPANY_INFO.officialPhone}`} className="text-white hover:text-[#2B7EC8] font-mono font-medium">
                    {COMPANY_INFO.officialPhone}
                  </a>
                </div>
                <div>
                  <span className="block text-[11px] text-slate-300 uppercase font-mono">Official Email:</span>
                  <a href={`mailto:${COMPANY_INFO.officialEmail}`} className="text-white hover:text-[#2B7EC8] font-mono">
                    {COMPANY_INFO.officialEmail}
                  </a>
                </div>
                <div>
                  <span className="block text-[11px] text-slate-300 uppercase font-mono">WhatsApp Support:</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-mono"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.whatsappNumber}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Hubs Grid */}
        <div className="py-10 border-b border-white/10">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#2B7EC8] font-semibold mb-6">
            // REGIONAL OPERATING HUBS & TESTING LABORATORIES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICES.map((office) => (
              <div key={office.id} className="bg-white/5 border border-white/10 rounded-lg p-4 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white uppercase tracking-wider font-mono">
                    {office.city}
                  </span>
                  {office.nablCode && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#1268B3] text-white rounded">
                      {office.nablCode}
                    </span>
                  )}
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  {office.address}
                </p>
                <div className="pt-1 flex flex-col gap-1 text-[11px] font-mono text-slate-300">
                  <a href={`tel:${office.phone}`} className="hover:text-white flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-[#2B7EC8]" /> {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} className="hover:text-white flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-[#2B7EC8]" /> {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

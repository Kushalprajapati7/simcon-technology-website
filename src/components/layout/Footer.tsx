import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Phone,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Clock,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { OFFICES } from '@/data/offices';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={`${className} fill-current shrink-0`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.768.46 3.492 1.332 5.008L2 22l5.12-1.343c1.472.802 3.125 1.226 4.911 1.226 5.535 0 10.031-4.496 10.031-10.031C22.062 6.496 17.566 2 12.031 2zm0 18.368c-1.545 0-3.056-.415-4.375-1.2l-.314-.187-3.25.852.867-3.167-.205-.327A8.286 8.286 0 0 1 3.737 12.03c0-4.573 3.72-8.293 8.294-8.293 4.574 0 8.294 3.72 8.294 8.293 0 4.574-3.72 8.294-8.294 8.294zm4.542-6.204c-.249-.124-1.472-.726-1.7-.809-.228-.083-.394-.124-.56.124-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062-.249-.124-1.05-.387-2-1.234-.738-.658-1.236-1.471-1.381-1.72-.145-.249-.015-.383.11-.507.112-.112.249-.29.373-.435.124-.145.166-.249.249-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.485-.407-.419-.56-.427-.145-.008-.311-.01-.477-.01-.166 0-.435.062-.663.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.124.166 1.756 2.682 4.254 3.761.594.257 1.059.41 1.421.525.598.19 1.142.163 1.572.099.48-.072 1.472-.602 1.68-1.183.207-.581.207-1.079.145-1.183-.062-.104-.228-.166-.477-.29z" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#062B5C] text-white pt-14 pb-10 border-t border-[#1E334D] relative overflow-hidden">
      {/* Subtle Technical Grid Lines */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none" />

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 space-y-12 sm:space-y-14">

        {/* =========================================================================
            1. TOP: FAST TECHNICAL CONSULTATION & PROPOSAL ACTION BAR
            ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#60A5FA] uppercase">
              <span>Technical Consultation & Rapid Scoping</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
              Planning an Infrastructure Project or Testing Campaign?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect directly with our senior geotechnical engineers and accredited laboratory directors for rapid mobilization across India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20SIMCON,%20I%20would%20like%20to%20discuss%20a%20geotechnical%20investigation/testing%20requirement.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-mono font-bold tracking-wide transition-colors shadow-sm"
              aria-label="Direct WhatsApp Consultation"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D71920] hover:bg-[#B51319] text-white text-xs font-mono font-bold tracking-wide transition-colors shadow-sm"
            >
              <span>Request Technical Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* =========================================================================
            2. MAIN NAVIGATION & BRAND ARCHITECTURE
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 pb-12 border-b border-white/10">

          {/* Column 1: Brand, Mission & NABL Accreditations (cols 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            <Link
              to="/"
              className="inline-block group bg-white px-3.5 py-2 rounded shadow-sm"
              aria-label="SIMCON Technology Home"
            >
              <img
                src="/assets/logo/simcon-technology-logo.png"
                alt="SIMCON Technology - Geotechnical & Material Testing Engineering"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed max-w-md">
              National geotechnical engineering consultancy delivering precision ground investigations, 581 NABL-accredited laboratory diagnostics, and evidence-based geotechnical recommendations for complex infrastructure projects across India.
            </p>

            {/* Accreditation Badges */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                NABL Accredited Testing Facilities (ISO/IEC 17025)
              </span>
              <div className="flex flex-wrap gap-2">
                <Link
                  to="/accreditations"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 hover:bg-white/15 rounded text-[11px] font-mono text-slate-200 transition-colors border border-white/5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Gandhidham (TC-5077)</span>
                </Link>
                <Link
                  to="/accreditations"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 hover:bg-white/15 rounded text-[11px] font-mono text-slate-200 transition-colors border border-white/5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ahmedabad (TC-9050)</span>
                </Link>
                <Link
                  to="/accreditations"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 hover:bg-white/15 rounded text-[11px] font-mono text-slate-200 transition-colors border border-white/5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Lucknow (TC-13273)</span>
                </Link>
              </div>
            </div>

            {/* Standards & Authority Empanelment */}
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span>Approved Testing Consultant: NHAI • RVNL • MES • CPWD • AUDA</span>
            </div>
          </div>

          {/* Column 2: Core Engineering Disciplines (cols 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#60A5FA] font-bold">
              Engineering Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/services/geotechnical-services" className="hover:text-white transition-colors">
                  Geotechnical Engineering & Coring
                </Link>
              </li>
              <li>
                <Link to="/services/geophysical-survey" className="hover:text-white transition-colors">
                  Geophysical Surveys (MASW / ERT / SRT)
                </Link>
              </li>
              <li>
                <Link to="/services/material-testing-services" className="hover:text-white transition-colors">
                  Material Testing (581 NABL Params)
                </Link>
              </li>
              <li>
                <Link to="/services/ndt-structural-integrity" className="hover:text-white transition-colors">
                  Structural Health & NDT Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/services/geotechnical-services#field-testing" className="hover:text-white transition-colors">
                  Advanced In-Situ Field Testing
                </Link>
              </li>
              <li>
                <Link to="/services/material-testing-services#chemical-testing" className="hover:text-white transition-colors">
                  Analytical Chemistry & Water Testing
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="hover:text-white transition-colors inline-flex items-center gap-1 text-[#60A5FA] font-semibold">
                  <span>Numerical Modeling & FEM Design</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Credentials (cols 9-10) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#60A5FA] font-bold">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Overview & History
                </Link>
              </li>
              <li>
                <Link to="/about/team" className="hover:text-white transition-colors">
                  Leadership & Team
                </Link>
              </li>
              <li>
                <Link to="/accreditations" className="hover:text-white transition-colors">
                  NABL Accreditations
                </Link>
              </li>
              <li>
                <Link to="/approvals" className="hover:text-white transition-colors">
                  Approvals & Empanelment
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  Key Projects Portfolio
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

          {/* Column 4: Central Headquarters & Direct Connect (cols 11-12) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#60A5FA] font-bold">
              Central Connect
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div>
                <span className="block text-[11px] text-slate-400 uppercase font-mono">Central Phone:</span>
                <a
                  href={`tel:${COMPANY_INFO.officialPhone.replace(/[^0-9+]/g, '')}`}
                  className="text-white hover:text-[#60A5FA] font-mono font-bold transition-colors inline-block mt-0.5"
                >
                  {COMPANY_INFO.officialPhone}
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 uppercase font-mono">Official Email:</span>
                <a
                  href={`mailto:${COMPANY_INFO.officialEmail}`}
                  className="text-white hover:text-[#60A5FA] font-mono transition-colors inline-block mt-0.5"
                >
                  {COMPANY_INFO.officialEmail}
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 uppercase font-mono">Operations:</span>
                <div className="text-slate-300 font-mono text-[11px] flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3 h-3 text-[#60A5FA] shrink-0" />
                  <span>Mon – Sat: 9:00 – 19:00</span>
                </div>
              </div>
              <div className="pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#60A5FA] hover:text-white transition-colors"
                >
                  <span>Submit Inquiry Form</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            3. REGIONAL OPERATING HUBS & TESTING LABORATORIES (NON-CARD COLUMNAR DIRECTORY)
            ========================================================================= */}
        <div className="space-y-8 pb-12 border-b border-white/10">

          {/* Eyebrow & Section Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#60A5FA] uppercase">
                  NATIONAL FOOTPRINT & LABORATORIES
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight">
                Regional Operating Hubs & Accredited Testing Facilities
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <span>4 Strategic Locations • Multi-Rig Field Mobilization</span>
            </div>
          </div>

          {/* 4 Clean Borderless Columns Divided by Subtle Vertical Hairlines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {OFFICES.map((office, idx) => (
              <div
                key={office.id}
                className={`flex flex-col justify-between space-y-4 ${idx === 0
                  ? 'lg:pr-8'
                  : idx === OFFICES.length - 1
                    ? 'lg:pl-8'
                    : 'lg:px-8'
                  }`}
              >
                {/* City & Role */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold font-display text-white tracking-tight uppercase">
                      {office.city}
                    </h4>
                    {office.nablCode && (
                      <span className="inline-flex items-center text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {office.nablCode}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-[#60A5FA]">
                    {office.role}
                  </p>
                </div>

                {/* Address */}
                <div className="text-xs text-slate-300 leading-relaxed font-normal flex-1">
                  {office.address}
                </div>

                {/* Direct Contacts */}
                <div className="pt-3 border-t border-white/5 space-y-2 text-xs font-mono">
                  <a
                    href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#60A5FA] group-hover:text-white shrink-0" />
                    <span>{office.phone}</span>
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#60A5FA] group-hover:text-white shrink-0" />
                    <span className="truncate">{office.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* =========================================================================
            4. BOTTOM LEGAL, ACCREDITATION & COPYRIGHT ROW
            ========================================================================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-center md:text-left">
            <span>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="font-mono text-[11px] text-slate-400">Foundational Est. 2008 / Inc. 2024</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="font-mono text-[11px] text-emerald-400">ISO/IEC 17025:2017 & ISO 9001:2015</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-300">
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


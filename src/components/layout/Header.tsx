import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenus, setMobileSubmenus] = useState<{ [key: string]: boolean }>({
    about: false,
    services: false,
    projects: false,
    company: false,
  });
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileSubmenu = (key: string) => {
    setMobileSubmenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileSubmenus({
      about: false,
      services: false,
      projects: false,
      company: false,
    });
  }, [location.pathname]);

  // Handle sticky scroll styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation: ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center group py-1"
            aria-label="SIMCON Technology Home"
          >
            <img
              src="/assets/logo/Simcon_logo.png"
              alt="SIMCON Technology Pvt. Ltd."
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-colors ${
                  location.pathname.startsWith('/about') ? 'text-[#062B5C] font-bold' : 'text-[#17212B] hover:text-[#1268B3]'
                }`}
                aria-expanded={activeDropdown === 'about'}
              >
                About
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200/90 rounded-md shadow-xl py-2 mt-1 z-50">
                  <Link to="/about" className="block px-4 py-2.5 text-xs hover:bg-[#F7F8FA] hover:text-[#1268B3] text-[#17212B]">
                    <div className="font-semibold text-[#062B5C]">Company Overview</div>
                    <div className="text-[11px] text-slate-500">History, vision, mission & values</div>
                  </Link>
                  <Link to="/about/leadership" className="block px-4 py-2.5 text-xs hover:bg-[#F7F8FA] hover:text-[#1268B3] text-[#17212B]">
                    <div className="font-semibold text-[#062B5C]">Leadership & Advisors</div>
                    <div className="text-[11px] text-slate-500">Managing Director & technical advisors</div>
                  </Link>
                  <Link to="/about/team" className="block px-4 py-2.5 text-xs hover:bg-[#F7F8FA] hover:text-[#1268B3] text-[#17212B]">
                    <div className="font-semibold text-[#062B5C]">Our Team</div>
                    <div className="text-[11px] text-slate-500">125+ engineers, geologists & specialists</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-colors ${
                  location.pathname.startsWith('/services') ? 'text-[#062B5C] font-bold' : 'text-[#17212B] hover:text-[#1268B3]'
                }`}
                aria-expanded={activeDropdown === 'services'}
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </Link>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-80 bg-white border border-slate-200/90 rounded-md shadow-xl py-2 mt-1 z-50">
                  <div className="px-4 py-2 border-b border-slate-100 bg-[#F7F8FA] flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#062B5C] font-bold">
                      Engineering Disciplines
                    </span>
                    <Link to="/services" className="text-[11px] text-[#1268B3] hover:underline font-medium">
                      All Services →
                    </Link>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    <Link to="/services/geotechnical-investigation" className="block px-4 py-2 text-xs hover:bg-[#F7F8FA] text-[#17212B]">
                      <span className="font-mono text-[#D71920] mr-2">01</span>
                      <span className="font-semibold text-[#062B5C]">Geotechnical Investigation</span>
                    </Link>
                    <Link to="/services/geophysical-survey" className="block px-4 py-2 text-xs hover:bg-[#F7F8FA] text-[#17212B]">
                      <span className="font-mono text-[#D71920] mr-2">02</span>
                      <span className="font-semibold text-[#062B5C]">Geophysical Survey</span>
                    </Link>
                    <Link to="/services/forensic-geotechnical-investigation" className="block px-4 py-2 text-xs hover:bg-[#F7F8FA] text-[#17212B]">
                      <span className="font-mono text-[#D71920] mr-2">03</span>
                      <span className="font-semibold text-[#062B5C]">Forensic Geotechnical Investigation</span>
                    </Link>
                    <Link to="/services/material-testing" className="block px-4 py-2 text-xs hover:bg-[#F7F8FA] text-[#17212B]">
                      <span className="font-mono text-[#D71920] mr-2">04</span>
                      <span className="font-semibold text-[#062B5C]">Construction Material Testing</span>
                    </Link>
                    <Link to="/services/advanced-surveying-mapping" className="block px-4 py-2 text-xs hover:bg-[#F7F8FA] text-[#17212B]">
                      <span className="font-mono text-[#D71920] mr-2">05</span>
                      <span className="font-semibold text-[#062B5C]">Advanced Surveying & Mapping</span>
                    </Link>
                    <Link to="/services/advanced-field-testing" className="block px-4 py-2 text-xs hover:bg-[#F7F8FA] text-[#17212B]">
                      <span className="font-mono text-[#D71920] mr-2">06</span>
                      <span className="font-semibold text-[#062B5C]">Advanced Field Testing</span>
                    </Link>
                    <Link to="/services/instrumentation-monitoring" className="block px-4 py-2 text-xs hover:bg-[#F7F8FA] text-[#17212B]">
                      <span className="font-mono text-[#D71920] mr-2">07</span>
                      <span className="font-semibold text-[#062B5C]">Instrumentation & Monitoring</span>
                    </Link>
                    <Link to="/services/structural-health-assessment" className="block px-4 py-2 text-xs hover:bg-[#F7F8FA] text-[#17212B]">
                      <span className="font-mono text-[#D71920] mr-2">08</span>
                      <span className="font-semibold text-[#062B5C]">Structural Health Assessment & NDT</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Expertise */}
            <Link
              to="/expertise"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-colors ${
                location.pathname === '/expertise' ? 'text-[#062B5C] font-bold' : 'text-[#17212B] hover:text-[#1268B3]'
              }`}
            >
              Expertise
            </Link>

            {/* Projects */}
            <Link
              to="/projects"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-colors ${
                location.pathname.startsWith('/projects') ? 'text-[#062B5C] font-bold' : 'text-[#17212B] hover:text-[#1268B3]'
              }`}
            >
              Projects
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-colors ${
                  ['/accreditations', '/approvals', '/clients', '/reach', '/careers', '/insights'].some(p => location.pathname.startsWith(p))
                    ? 'text-[#062B5C] font-bold'
                    : 'text-[#17212B] hover:text-[#1268B3]'
                }`}
                aria-expanded={activeDropdown === 'company'}
              >
                Company
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200/90 rounded-md shadow-xl py-2 mt-1 z-50">
                  <Link to="/accreditations" className="block px-4 py-2 text-xs hover:bg-[#F7F8FA] text-[#17212B]">
                    <div className="font-semibold text-[#062B5C] flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#1268B3]" /> NABL Accreditations
                    </div>
                    <div className="text-[11px] text-slate-500">ISO/IEC 17025 certificates</div>
                  </Link>
                  <Link to="/approvals" className="block px-4 py-2 text-xs hover:bg-[#F7F8FA] text-[#17212B]">
                    <div className="font-semibold text-[#062B5C]">Approvals & Empanelments</div>
                    <div className="text-[11px] text-slate-500">NHAI, RVNL, MES, AUDA</div>
                  </Link>
                  <Link to="/clients" className="block px-4 py-2 text-xs hover:bg-[#F7F8FA] text-[#17212B]">
                    <div className="font-semibold text-[#062B5C]">Our Clients</div>
                    <div className="text-[11px] text-slate-500">Government & EPC partners</div>
                  </Link>
                  <Link to="/reach" className="block px-4 py-2 text-xs hover:bg-[#F7F8FA] text-[#17212B]">
                    <div className="font-semibold text-[#062B5C]">Our Reach</div>
                    <div className="text-[11px] text-slate-500">4 Hubs & nationwide presence</div>
                  </Link>
                  <Link to="/careers" className="block px-4 py-2 text-xs hover:bg-[#F7F8FA] text-[#17212B]">
                    <div className="font-semibold text-[#062B5C]">Careers</div>
                    <div className="text-[11px] text-slate-500">Openings for engineers & specialists</div>
                  </Link>
                  <Link to="/insights" className="block px-4 py-2 text-xs hover:bg-[#F7F8FA] text-[#17212B]">
                    <div className="font-semibold text-[#062B5C]">Technical Insights</div>
                    <div className="text-[11px] text-slate-500">Engineering briefings & papers</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-colors ${
                location.pathname === '/contact' ? 'text-[#062B5C] font-bold' : 'text-[#17212B] hover:text-[#1268B3]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.officialPhone}`}
              className="hidden xl:flex items-center gap-2 text-xs font-mono font-medium text-[#062B5C] hover:text-[#1268B3] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#1268B3]" />
              <span>{COMPANY_INFO.officialPhone}</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-wide uppercase text-white bg-[#062B5C] hover:bg-[#1268B3] rounded transition-all shadow-sm group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              to="/contact"
              className="px-3 py-1.5 text-xs font-bold uppercase text-white bg-[#062B5C] rounded"
            >
              Enquire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#062B5C] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] sm:top-[72px] bottom-0 bg-white z-50 overflow-y-auto border-t border-slate-200 flex flex-col justify-between shadow-2xl">
          <div className="p-4 sm:p-6 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-[11px] font-mono tracking-widest text-[#D71920] uppercase font-bold">
                // NAVIGATION MENU
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                ESTD 2008 • NABL
              </span>
            </div>

            <nav className="space-y-1.5 text-sm font-semibold">
              {/* Home */}
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-md transition-colors ${
                  location.pathname === '/' ? 'bg-slate-100 text-[#062B5C] font-bold' : 'text-[#17212B] hover:bg-slate-50'
                }`}
              >
                <span>Home</span>
              </Link>

              {/* About Dropdown */}
              <div className="rounded-md border border-slate-100 overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu('about')}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-left text-[#17212B] hover:bg-slate-100/80 transition-colors"
                  aria-expanded={mobileSubmenus.about}
                >
                  <span className={location.pathname.startsWith('/about') ? 'text-[#062B5C] font-bold' : ''}>
                    About Us
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      mobileSubmenus.about ? 'rotate-180 text-[#1268B3]' : ''
                    }`}
                  />
                </button>
                {mobileSubmenus.about && (
                  <div className="bg-white border-t border-slate-100 px-3 py-2 space-y-1">
                    <Link
                      to="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-[#062B5C] font-medium hover:bg-slate-50 rounded"
                    >
                      <div className="font-semibold">Company Overview</div>
                      <div className="text-[11px] text-slate-500">History, vision, mission & 18-yr heritage</div>
                    </Link>
                    <Link
                      to="/about/leadership"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-[#062B5C] font-medium hover:bg-slate-50 rounded"
                    >
                      <div className="font-semibold">Leadership & Advisors</div>
                      <div className="text-[11px] text-slate-500">Board of Directors & IIT/NIT Council</div>
                    </Link>
                    <Link
                      to="/about/team"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-[#062B5C] font-medium hover:bg-slate-50 rounded"
                    >
                      <div className="font-semibold">Engineering Team</div>
                      <div className="text-[11px] text-slate-500">125+ geotechnical specialists & lab leads</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div className="rounded-md border border-slate-100 overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu('services')}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-left text-[#17212B] hover:bg-slate-100/80 transition-colors"
                  aria-expanded={mobileSubmenus.services}
                >
                  <span className={location.pathname.startsWith('/services') || location.pathname === '/expertise' ? 'text-[#062B5C] font-bold' : ''}>
                    Services & Disciplines
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      mobileSubmenus.services ? 'rotate-180 text-[#1268B3]' : ''
                    }`}
                  />
                </button>
                {mobileSubmenus.services && (
                  <div className="bg-white border-t border-slate-100 px-3 py-2 space-y-1">
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-[#062B5C] font-bold hover:bg-slate-50 rounded border-b border-slate-100"
                    >
                      All 8 Disciplines Overview →
                    </Link>
                    <Link
                      to="/expertise"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-[#062B5C] font-bold hover:bg-slate-50 rounded border-b border-slate-100"
                    >
                      Technical Expertise & Software →
                    </Link>
                    <Link
                      to="/services/geotechnical-investigation"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1268B3] hover:bg-slate-50 rounded"
                    >
                      01. Soil & Rock Mechanics
                    </Link>
                    <Link
                      to="/services/non-destructive-testing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1268B3] hover:bg-slate-50 rounded"
                    >
                      02. Non-Destructive Testing (NDT)
                    </Link>
                    <Link
                      to="/services/pile-foundation-testing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1268B3] hover:bg-slate-50 rounded"
                    >
                      03. Deep Foundation & Pile Load Testing
                    </Link>
                    <Link
                      to="/services/geophysical-investigation"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1268B3] hover:bg-slate-50 rounded"
                    >
                      04. Geophysical Investigations (MASW/ERT)
                    </Link>
                    <Link
                      to="/services/highway-pavement-investigation"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1268B3] hover:bg-slate-50 rounded"
                    >
                      05. Highway & Pavement Engineering
                    </Link>
                    <Link
                      to="/services/construction-materials-testing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1268B3] hover:bg-slate-50 rounded"
                    >
                      06. Materials & Chemical Analysis
                    </Link>
                    <Link
                      to="/services/survey-investigation"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1268B3] hover:bg-slate-50 rounded"
                    >
                      07. Surveying & Bathymetry
                    </Link>
                    <Link
                      to="/services/instrumentation-monitoring"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1268B3] hover:bg-slate-50 rounded"
                    >
                      08. Geotechnical Instrumentation
                    </Link>
                  </div>
                )}
              </div>

              {/* Projects Dropdown */}
              <div className="rounded-md border border-slate-100 overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu('projects')}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-left text-[#17212B] hover:bg-slate-100/80 transition-colors"
                  aria-expanded={mobileSubmenus.projects}
                >
                  <span className={location.pathname.startsWith('/projects') ? 'text-[#062B5C] font-bold' : ''}>
                    Projects & Case Studies
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      mobileSubmenus.projects ? 'rotate-180 text-[#1268B3]' : ''
                    }`}
                  />
                </button>
                {mobileSubmenus.projects && (
                  <div className="bg-white border-t border-slate-100 px-3 py-2 space-y-1">
                    <Link
                      to="/projects"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-[#062B5C] font-bold hover:bg-slate-50 rounded border-b border-slate-100"
                    >
                      View All 6,480+ Projects Directory →
                    </Link>
                    <Link
                      to="/projects?category=Metro%20%26%20Bullet%20Train"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1268B3] hover:bg-slate-50 rounded"
                    >
                      • Metro & High Speed Rail (MAHSR)
                    </Link>
                    <Link
                      to="/projects?category=Railway"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1268B3] hover:bg-slate-50 rounded"
                    >
                      • Railways & Dedicated Freight Corridors
                    </Link>
                    <Link
                      to="/projects?category=Aviation"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1268B3] hover:bg-slate-50 rounded"
                    >
                      • Aviation & AAI International Airports
                    </Link>
                    <Link
                      to="/projects?category=Roads%20%26%20Highways"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1268B3] hover:bg-slate-50 rounded"
                    >
                      • Roads, Expressways & NHAI Bridges
                    </Link>
                    <Link
                      to="/projects?category=Ports%20%26%20Marine"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1268B3] hover:bg-slate-50 rounded"
                    >
                      • Ports, Marine Terminals & Dredging
                    </Link>
                    <Link
                      to="/projects?category=Industrial"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1268B3] hover:bg-slate-50 rounded"
                    >
                      • Industrial, Refineries & Heavy Infra
                    </Link>
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div className="rounded-md border border-slate-100 overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu('company')}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-left text-[#17212B] hover:bg-slate-100/80 transition-colors"
                  aria-expanded={mobileSubmenus.company}
                >
                  <span className={['/accreditations', '/approvals', '/clients', '/reach', '/careers', '/insights'].some(p => location.pathname.startsWith(p)) ? 'text-[#062B5C] font-bold' : ''}>
                    Credentials & Company
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      mobileSubmenus.company ? 'rotate-180 text-[#1268B3]' : ''
                    }`}
                  />
                </button>
                {mobileSubmenus.company && (
                  <div className="bg-white border-t border-slate-100 px-3 py-2 space-y-1">
                    <Link
                      to="/accreditations"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-[#062B5C] font-medium hover:bg-slate-50 rounded"
                    >
                      <div className="font-semibold flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#1268B3]" /> NABL Accreditations
                      </div>
                      <div className="text-[11px] text-slate-500">ISO/IEC 17025 certificates & 581 params</div>
                    </Link>
                    <Link
                      to="/approvals"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-[#062B5C] font-medium hover:bg-slate-50 rounded"
                    >
                      <div className="font-semibold">Approvals & Empanelments</div>
                      <div className="text-[11px] text-slate-500">NHAI, RVNL, MES, AAI, AUDA</div>
                    </Link>
                    <Link
                      to="/clients"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-[#062B5C] font-medium hover:bg-slate-50 rounded"
                    >
                      <div className="font-semibold">Our Clients</div>
                      <div className="text-[11px] text-slate-500">PSU, EPC conglomerates & private infra</div>
                    </Link>
                    <Link
                      to="/reach"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-[#062B5C] font-medium hover:bg-slate-50 rounded"
                    >
                      <div className="font-semibold">Pan-India Reach</div>
                      <div className="text-[11px] text-slate-500">4 regional hubs & testing coverage</div>
                    </Link>
                    <Link
                      to="/careers"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-[#062B5C] font-medium hover:bg-slate-50 rounded"
                    >
                      <div className="font-semibold">Careers</div>
                      <div className="text-[11px] text-slate-500">Openings for engineers & technicians</div>
                    </Link>
                    <Link
                      to="/insights"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-[#062B5C] font-medium hover:bg-slate-50 rounded"
                    >
                      <div className="font-semibold">Technical Insights</div>
                      <div className="text-[11px] text-slate-500">Engineering briefings & whitepapers</div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-md transition-colors ${
                  location.pathname === '/contact' ? 'bg-[#062B5C] text-white font-bold' : 'text-[#062B5C] hover:bg-slate-50 font-bold'
                }`}
              >
                <span>Contact Us & Regional Hubs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </nav>
          </div>

          {/* Action CTAs at bottom of Mobile Drawer */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 space-y-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#062B5C] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm hover:bg-[#1268B3] transition-colors"
            >
              <span>Request Consultation / RFQ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
              <a
                href={`tel:${COMPANY_INFO.officialPhone}`}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white border border-slate-200 rounded text-[#062B5C] font-medium hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#1268B3]" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/917069042756"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 text-white rounded font-medium hover:bg-emerald-700 transition-colors"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-500 text-center pt-1 font-mono">
              ESTD 2008 • 3 NABL CENTRAL LABS
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Phone,
  Search,
  Layers,
  Activity,
  Building2,
  FlaskConical,
  Award,
  Users,
  Compass,
  FileCheck,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { SEARCH_INDEX, SearchItem } from '@/data/searchIndex';

interface ServiceTabItem {
  id: 'geotechnical' | 'geophysical' | 'ndt' | 'materials';
  title: string;
  subtitle: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  subservices: { title: string; hash: string }[];
  card: {
    tag: string;
    headline: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    footerStat: string;
  };
}

const SERVICE_TABS: ServiceTabItem[] = [
  {
    id: 'geotechnical',
    title: 'Geotechnical Services',
    subtitle: 'Soil, Rock & Foundation Exploration',
    slug: '/services/geotechnical-services',
    icon: Layers,
    tagline: 'Subsurface soil mechanics, rock geomechanics, and advanced in-situ foundation penetration testing.',
    subservices: [
      { title: 'Soil Laboratory Testing', hash: '#soil-testing' },
      { title: 'Rock Laboratory Testing', hash: '#rock-testing' },
      { title: 'Advanced In-Situ Field Testing', hash: '#field-testing' }
    ],
    card: {
      tag: 'PILLAR 01',
      headline: 'Subsurface Certainty For High-Stakes Projects',
      description: 'Equipped with hydraulic diamond coring rigs and automated triaxial shear testing ensuring reliable foundation design.',
      ctaText: 'Talk to Geotechnical Experts',
      ctaLink: '/contact#enquiry',
      footerStat: 'NABL ACCREDITED • PAN-INDIA RIGS',
    },
  },
  {
    id: 'geophysical',
    title: 'Geophysical Survey',
    subtitle: 'Non-Invasive Subsurface Exploration',
    slug: '/services/geophysical-survey',
    icon: Activity,
    tagline: 'Non-invasive subsurface imaging, seismic profiling, electrical tomography, and underground utility mapping.',
    subservices: [
      { title: 'Multichannel Analysis of Surface Waves (MASW)', hash: '#masw' },
      { title: 'Seismic Refraction Tomography (SRT)', hash: '#srt' },
      { title: 'Crosshole & Downhole Seismic Tests (CHST/DHT)', hash: '#chst' },
      { title: 'Downhole Seismic Test (DHT)', hash: '#dht' },
      { title: 'Electrical Resistivity Tomography (2D/3D ERT)', hash: '#ert' },
      { title: 'Vertical Electrical Sounding (VES)', hash: '#ves' },
      { title: 'Ground Penetrating Radar (GPR Utility Mapping)', hash: '#gpr' },
      { title: 'Thermal Resistivity Testing', hash: '#thermal' },
      { title: 'Borehole Deviation Test', hash: '#borehole-deviation' },
      { title: 'Geo-Mapping – Open Pit Foundation', hash: '#open-pit-geo-mapping' },
    ],
    card: {
      tag: 'PILLAR 02',
      headline: 'Continuous Non-Invasive Subsurface Imaging',
      description: 'Profile subsurface stratigraphy, detect buried cavities, evaluate bedrock rippability, and map utilities without disturbance.',
      ctaText: 'Schedule Geophysical Survey',
      ctaLink: '/contact#enquiry',
      footerStat: '10 METHODS • RAPID MOBILIZATION',
    },
  },
  {
    id: 'ndt',
    title: 'NDT & Structural Integrity',
    subtitle: 'Deep Foundation & Diagnostics',
    slug: '/services/ndt-structural-integrity',
    icon: Building2,
    tagline: 'Non-destructive testing, pile integrity evaluation, bridge proof load testing, and structural health diagnostics.',
    subservices: [
      { title: 'Low Strain Pile Integrity Testing (PIT)', hash: '#ndt-testing' },
      { title: 'Half-Cell Potential Testing', hash: '#ndt-testing' },
      { title: 'Rebound Hammer Testing', hash: '#ndt-testing' },
      { title: 'Cover Meter / Profometer Test', hash: '#ndt-testing' },
      { title: 'Span & Bridge Proof Load Testing', hash: '#structural-health' },
      { title: 'Carbonation Depth Test', hash: '#ndt-testing' },
      { title: 'Ultrasonic Pulse Velocity (UPV)', hash: '#ndt-testing' },
      { title: 'Cross-Hole Sonic Logging (CHSL / CHUM)', hash: '#ndt-testing' },
    ],
    card: {
      tag: 'PILLAR 03',
      headline: 'Acoustic & Ultrasonic Structural Diagnostics',
      description: 'Objective diagnostics on highway bridges, metro stations, deep piles, and industrial plants using calibrated sensors.',
      ctaText: 'Request Structural Diagnostics',
      ctaLink: '/contact#enquiry',
      footerStat: 'IS, ASTM & IRC COMPLIANT • NABL CERTIFIED',
    },
  },
  {
    id: 'materials',
    title: 'Material Testing Services',
    subtitle: 'Civil & Chemical Laboratory',
    slug: '/services/material-testing-services',
    icon: FlaskConical,
    tagline: 'Central NABL laboratory testing for civil construction materials and comprehensive analytical chemical assaying.',
    subservices: [
      { title: 'Cementitious Material Testing', hash: '#cementitious' },
      { title: 'Aggregate Testing (Fine & Coarse)', hash: '#aggregates' },
      { title: 'Bituminous material testing', hash: '#bituminous' },
      { title: 'Masonry Material Testing (Brick, Block, Paver & Tile Tests)', hash: '#masonry' },
      { title: 'Concrete Testing (Fresh & Hardened)', hash: '#concrete' },
      { title: 'Steel Rebar, Metals & Weld Testing', hash: '#steel-metals' },
      { title: 'Chemical Testing (Across 6 Matrices)', hash: '#chemical-testing' },
    ],
    card: {
      tag: 'PILLAR 04',
      headline: 'One Central Lab. 581+ Testing Parameters.',
      description: 'State-of-the-art central testing facilities equipped with automated compression frames, servo UTMs, and chemical assaying.',
      ctaText: 'Submit Samples for Testing',
      ctaLink: '/contact#enquiry',
      footerStat: '581+ PARAMETERS • ISO/IEC 17025',
    },
  },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'about' | 'services' | 'clients' | null>(null);
  const [activeServiceTab, setActiveServiceTab] = useState<'geotechnical' | 'geophysical' | 'ndt' | 'materials'>('geotechnical');

  const [mobileSubmenus, setMobileSubmenus] = useState<{ [key: string]: boolean }>({
    about: false,
    services: false,
    geotech: false,
    geophysical: false,
    ndt: false,
    materials: false,
    clients: false
  });

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Click outside to close search dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileSubmenu = (key: string) => {
    setMobileSubmenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleMouseEnter = (menuKey: 'about' | 'services' | 'clients') => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setSearchOpen(false);
  };

  const handleNavClick = (to: string) => {
    handleLinkClick();
    const [path, hash] = to.split('#');
    if (hash) {
      const isCurrentPage =
        location.pathname === path ||
        (path === '/about' && location.pathname === '/about') ||
        (path === '/about/team' && location.pathname === '/about/team') ||
        (path === '/accreditations' && location.pathname === '/accreditations') ||
        (path === '/services/geotechnical-services' && location.pathname === '/services/geotechnical-services') ||
        (path === '/services/material-testing-services' && location.pathname === '/services/material-testing-services') ||
        (path === '/services/ndt-structural-integrity' && location.pathname === '/services/ndt-structural-integrity') ||
        (path === '/services/geophysical-survey' && location.pathname === '/services/geophysical-survey');

      if (isCurrentPage) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const yOffset = -90;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 60);
      }
    }
  };

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
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
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Live quick search items across the 4 pillars (parent, child, and child's children tests)
  const searchResults: SearchItem[] = searchQuery.trim().length > 1
    ? SEARCH_INDEX.filter(item => {
        const q = searchQuery.trim().toLowerCase();
        if (item.title.toLowerCase().includes(q)) return true;
        if (item.category.toLowerCase().includes(q)) return true;
        if (item.parent.toLowerCase().includes(q)) return true;
        if (item.keywords && item.keywords.some(k => k.toLowerCase().includes(q))) return true;
        return false;
      })
    : [];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-t-[3px] border-[#1268B3] ${scrolled
        ? 'shadow-md border-b border-slate-200/90 py-2 sm:py-2.5'
        : 'border-b border-slate-100 py-2.5 sm:py-3 lg:py-3.5'
        }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center group py-1 shrink-0"
            aria-label="SIMCON Technology Home"
          >
            <img
              src="/assets/logo/simcon-technology-logo.png"
              alt="SIMCON Technology - Geotechnical & Material Testing Engineering"
              className="h-9 sm:h-10 lg:h-11 xl:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation (Single-line, non-wrapping on all tablet landscape & desktop screens) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-3" aria-label="Main Navigation">
            {/* 1. About Us Dropdown */}
            <div
              className="relative py-2 group"
              onMouseEnter={() => handleMouseEnter('about')}
            >
              <Link
                to="/about"
                onClick={handleLinkClick}
                className={`relative flex items-center gap-1 xl:gap-1.5 px-2 lg:px-2.5 xl:px-3 py-1.5 xl:py-2 text-[13px] xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors ${location.pathname.startsWith('/about') || location.pathname === '/accreditations' || location.pathname === '/approvals' || activeDropdown === 'about'
                  ? 'text-[#1268B3] font-bold'
                  : 'text-slate-700 hover:text-[#1268B3]'
                  }`}
                aria-expanded={activeDropdown === 'about'}
              >
                <span className="whitespace-nowrap">About Us</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-250 shrink-0 ${activeDropdown === 'about' ? 'rotate-180 text-[#1268B3]' : 'opacity-60 group-hover:opacity-100 group-hover:text-[#1268B3]'
                    }`}
                />
                <span
                  className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#1268B3] rounded-full transition-all duration-200 ${(location.pathname.startsWith('/about') || activeDropdown === 'about' || location.pathname === '/accreditations' || location.pathname === '/approvals')
                    ? 'opacity-100 scale-x-100'
                    : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                />
              </Link>
            </div>

            {/* 2. Our Services Dropdown */}
            <div
              className="relative py-2 group"
              onMouseEnter={() => handleMouseEnter('services')}
            >
              <Link
                to="/services"
                onClick={handleLinkClick}
                className={`relative flex items-center gap-1 xl:gap-1.5 px-2 lg:px-2.5 xl:px-3 py-1.5 xl:py-2 text-[13px] xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors ${location.pathname.startsWith('/services') || location.pathname === '/expertise' || activeDropdown === 'services'
                  ? 'text-[#1268B3] font-bold'
                  : 'text-slate-700 hover:text-[#1268B3]'
                  }`}
                aria-expanded={activeDropdown === 'services'}
              >
                <span className="whitespace-nowrap">Our Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-250 shrink-0 ${activeDropdown === 'services' ? 'rotate-180 text-[#1268B3]' : 'opacity-60 group-hover:opacity-100 group-hover:text-[#1268B3]'
                    }`}
                />
                <span
                  className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#1268B3] rounded-full transition-all duration-200 ${(location.pathname.startsWith('/services') || location.pathname === '/expertise' || activeDropdown === 'services')
                    ? 'opacity-100 scale-x-100'
                    : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                />
              </Link>
            </div>

            {/* 3. Our Projects */}
            <Link
              to="/projects"
              onClick={handleLinkClick}
              className={`relative px-2 lg:px-2.5 xl:px-3 py-1.5 xl:py-2 text-[13px] xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors group ${location.pathname.startsWith('/projects')
                ? 'text-[#1268B3] font-bold'
                : 'text-slate-700 hover:text-[#1268B3]'
                }`}
            >
              <span className="whitespace-nowrap">Our Projects</span>
              <span
                className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#1268B3] rounded-full transition-all duration-200 ${location.pathname.startsWith('/projects')
                  ? 'opacity-100 scale-x-100'
                  : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
              />
            </Link>

            {/* 4. Our Clients Dropdown */}
            <div
              className="relative py-2 group"
              onMouseEnter={() => handleMouseEnter('clients')}
            >
              <Link
                to="/clients"
                onClick={handleLinkClick}
                className={`relative flex items-center gap-1 xl:gap-1.5 px-2 lg:px-2.5 xl:px-3 py-1.5 xl:py-2 text-[13px] xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors ${location.pathname === '/clients' || location.pathname === '/reach' || activeDropdown === 'clients'
                  ? 'text-[#1268B3] font-bold'
                  : 'text-slate-700 hover:text-[#1268B3]'
                  }`}
                aria-expanded={activeDropdown === 'clients'}
              >
                <span className="whitespace-nowrap">Our Clients</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-250 shrink-0 ${activeDropdown === 'clients' ? 'rotate-180 text-[#1268B3]' : 'opacity-60 group-hover:opacity-100 group-hover:text-[#1268B3]'
                    }`}
                />
                <span
                  className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#1268B3] rounded-full transition-all duration-200 ${(location.pathname === '/clients' || location.pathname === '/reach' || activeDropdown === 'clients')
                    ? 'opacity-100 scale-x-100'
                    : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                />
              </Link>
            </div>

            {/* 5. Careers */}
            <Link
              to="/careers"
              onClick={handleLinkClick}
              className={`relative px-2 lg:px-2.5 xl:px-3 py-1.5 xl:py-2 text-[13px] xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors group ${location.pathname === '/careers'
                ? 'text-[#1268B3] font-bold'
                : 'text-slate-700 hover:text-[#1268B3]'
                }`}
            >
              <span className="whitespace-nowrap">Careers</span>
              <span
                className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#1268B3] rounded-full transition-all duration-200 ${location.pathname === '/careers'
                  ? 'opacity-100 scale-x-100'
                  : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
              />
            </Link>

            {/* 6. Contact Us */}
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className={`relative px-2 lg:px-2.5 xl:px-3 py-1.5 xl:py-2 text-[13px] xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors group ${location.pathname === '/contact'
                ? 'text-[#1268B3] font-bold'
                : 'text-slate-700 hover:text-[#1268B3]'
                }`}
            >
              <span className="whitespace-nowrap">Contact Us</span>
              <span
                className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#1268B3] rounded-full transition-all duration-200 ${location.pathname === '/contact'
                  ? 'opacity-100 scale-x-100'
                  : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
              />
            </Link>
          </nav>

          {/* Desktop Right Utilities (Search & Enquire CTA) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Tablet Landscape Search Icon Button (Option A: Shown on 1024px-1279px, Hidden on >=1280px) */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-[#1268B3] hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Search SIMCON services"
              title="Search services & tests"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Large Desktop Inline Search Input (>=1280px) */}
            <div ref={searchContainerRef} className="hidden xl:block relative">
              <div className="flex items-center bg-slate-50 hover:bg-slate-100/80 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1268B3]/25 border border-slate-200/90 focus-within:border-[#1268B3] rounded-full px-3.5 py-1.5 transition-all w-48 2xl:w-64 shadow-2xs">
                <Search className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-2" />
                <input
                  type="text"
                  placeholder="Search services, tests, codes..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!searchOpen) setSearchOpen(true);
                  }}
                  onFocus={() => setSearchOpen(true)}
                  className="w-full bg-transparent text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none"
                  aria-label="Search SIMCON services and tests"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSearchOpen(false);
                    }}
                    className="text-slate-400 hover:text-slate-600 ml-1 cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Floating Quick Results Dropdown (Large Desktop) */}
              {searchOpen && searchQuery.trim().length > 1 && (
                <div className="absolute right-0 top-full mt-2 w-96 xl:w-[480px] bg-white rounded-2xl border border-slate-200/90 shadow-2xl p-2 z-50">
                  <div className="px-3 py-1.5 text-[10px] font-mono font-bold text-[#1268B3] uppercase tracking-wider border-b border-slate-100 flex items-center justify-between">
                    <span>Matches ({searchResults.length})</span>
                    <button
                      type="button"
                      onClick={() => setSearchOpen(false)}
                      className="text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 mt-1">
                    {searchResults.length > 0 ? (
                      searchResults.map((res) => (
                        <Link
                          key={res.id}
                          to={res.path}
                          onClick={() => {
                            handleNavClick(res.path);
                            setSearchOpen(false);
                          }}
                          className="p-2.5 hover:bg-blue-50/60 rounded-xl flex items-start justify-between gap-3 transition-colors group block text-xs"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="font-semibold text-[#062B5C] group-hover:text-[#1268B3] transition-colors">
                                {res.title}
                              </span>
                              {res.level === 'parent' && (
                                <span className="text-[9px] font-mono font-bold bg-[#1268B3] text-white px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0">
                                  Discipline
                                </span>
                              )}
                              {res.level === 'child' && (
                                <span className="text-[9px] font-mono font-bold bg-blue-100 text-[#062B5C] px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0">
                                  Sub-Discipline
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] text-slate-500 font-mono mt-0.5 truncate">
                              {res.level === 'test' ? `${res.category} · ${res.parent}` : res.parent}
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 group-hover:text-[#1268B3] uppercase shrink-0 font-medium">
                            {res.category}
                          </span>
                        </Link>
                      ))
                    ) : (
                      <div className="p-4 text-center text-xs text-slate-500 font-mono">
                        No parameters found matching "{searchQuery}"
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Enquire Now CTA Button */}
            <Link
              to="/contact#enquiry"
              onClick={() => handleNavClick('/contact#enquiry')}
              className="inline-flex items-center gap-1.5 xl:gap-2 px-3.5 py-2 xl:px-5 xl:py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D71920] hover:bg-[#EA3E45] rounded-full transition-all shadow-md group shrink-0 whitespace-nowrap"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu & Search Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-700 hover:text-[#062B5C] rounded-full"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/contact#enquiry"
              className="px-3 py-1.5 text-xs font-bold uppercase text-white bg-[#D71920] rounded"
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

      {/* =========================================================================
          1. ABOUT US MEGA-MENU (MODERN BLUE THEME)
          ========================================================================= */}
      {activeDropdown === 'about' && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-t-2 border-[#1268B3] border-b border-slate-200/90 shadow-2xl transition-all duration-200 z-50"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-7 sm:py-8">
            {/* Header Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-xl font-bold font-display text-[#062B5C]">
                  About SIMCON Technology
                </h3>
              </div>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="text-xs font-semibold text-[#1268B3] hover:text-[#062B5C] flex items-center gap-1.5 transition-colors group"
              >
                <span>Discover Simcon's 18-Year Legacy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 4 Clean Modern Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Brief */}
              <div className="group bg-[#F8FAFC]/70 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#1268B3]/50 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50/70 border border-blue-100/90 text-[#062B5C] group-hover:bg-[#1268B3] group-hover:text-white transition-all flex items-center justify-center shrink-0 shadow-2xs">
                      <Compass className="w-5 h-5 transition-transform group-hover:scale-105" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-display text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-tight">
                        Brief
                      </h4>
                      <span className="text-[10px] font-mono text-[#1268B3] font-semibold uppercase tracking-wider block">
                        Identity &amp; Vision
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3.5 line-clamp-2">
                    Evidence-based geotechnical engineering, testing integrity, and institutional growth since 2008.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-4 border-t border-slate-100 pt-3">
                    <li>
                      <Link
                        to="/about#our-story"
                        onClick={() => handleNavClick('/about#our-story')}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">Who We Are &amp; Evolution</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about#why-simcon"
                        onClick={() => handleNavClick('/about#why-simcon')}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">Why Simcon (Evidence-Based)</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about#vision-mission"
                        onClick={() => handleNavClick('/about#vision-mission')}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">Vision, Mission &amp; Core Values</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about#directors-message"
                        onClick={() => handleNavClick('/about#directors-message')}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">Director's Commitment</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1268B3] hover:text-[#062B5C] pt-2 border-t border-slate-100 transition-colors group/btn"
                >
                  <span>Company Profile</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-[#1268B3]" />
                </Link>
              </div>

              {/* Card 2: Our Team */}
              <div className="group bg-[#F8FAFC]/70 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#1268B3]/50 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50/70 border border-blue-100/90 text-[#062B5C] group-hover:bg-[#1268B3] group-hover:text-white transition-all flex items-center justify-center shrink-0 shadow-2xs">
                      <Users className="w-5 h-5 transition-transform group-hover:scale-105" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-display text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-tight">
                        Our Team
                      </h4>
                      <span className="text-[10px] font-mono text-[#1268B3] font-semibold uppercase tracking-wider block">
                        Technical Council
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3.5 line-clamp-2">
                    Senior project directors, IIT/NIT emeritus advisors, and 18 certified laboratory specialists.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-4 border-t border-slate-100 pt-3">
                    <li>
                      <Link
                        to="/about/team#chairman"
                        onClick={() => handleNavClick('/about/team#chairman')}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">Chairman's Message &amp; MD</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about/team#core-team"
                        onClick={() => handleNavClick('/about/team#core-team')}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">Regional Branch Incharges</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about/team#advisors"
                        onClick={() => handleNavClick('/about/team#advisors')}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">IIT/NIT Advisory Council</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about/team#specialists"
                        onClick={() => handleNavClick('/about/team#specialists')}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">18 Specialists Directory</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/about/team"
                  onClick={handleLinkClick}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1268B3] hover:text-[#062B5C] pt-2 border-t border-slate-100 transition-colors group/btn"
                >
                  <span>Meet Our Leadership</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-[#1268B3]" />
                </Link>
              </div>

              {/* Card 3: NABL Accreditations */}
              <div className="group bg-[#F8FAFC]/70 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#1268B3]/50 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50/70 border border-blue-100/90 text-[#062B5C] group-hover:bg-[#1268B3] group-hover:text-white transition-all flex items-center justify-center shrink-0 shadow-2xs">
                      <Award className="w-5 h-5 transition-transform group-hover:scale-105" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-display text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-tight">
                        NABL Accreditations
                      </h4>
                      <span className="text-[10px] font-mono text-[#1268B3] font-semibold uppercase tracking-wider block">
                        ISO/IEC 17025 Certified
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3.5 line-clamp-2">
                    NABL accredited testing facilities operating across 581 standard parameters.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-4 border-t border-slate-100 pt-3">
                    <li>
                      <Link
                        to="/accreditations"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">ISO/IEC 17025 Certificates</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/accreditations#scope"
                        onClick={() => handleNavClick('/accreditations#scope')}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">Scope (581 Parameters)</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/reach"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">3 Central Testing Labs</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about/team#standards"
                        onClick={() => handleNavClick('/about/team#standards')}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">Quality &amp; Traceability Audits</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/accreditations"
                  onClick={handleLinkClick}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1268B3] hover:text-[#062B5C] pt-2 border-t border-slate-100 transition-colors group/btn"
                >
                  <span>Accreditation Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-[#1268B3]" />
                </Link>
              </div>

              {/* Card 4: Approvals and Empanelment */}
              <div className="group bg-[#F8FAFC]/70 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#1268B3]/50 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50/70 border border-blue-100/90 text-[#062B5C] group-hover:bg-[#1268B3] group-hover:text-white transition-all flex items-center justify-center shrink-0 shadow-2xs">
                      <FileCheck className="w-5 h-5 transition-transform group-hover:scale-105" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-display text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-tight">
                        Approvals &amp; Empanelment
                      </h4>
                      <span className="text-[10px] font-mono text-[#1268B3] font-semibold uppercase tracking-wider block">
                        Government &amp; Defense
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3.5 line-clamp-2">
                    Empanelled with NHAI, RVNL, MES, CPWD, Indian Railways, and major national authorities.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-4 border-t border-slate-100 pt-3">
                    <li>
                      <Link
                        to="/approvals"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">NHAI &amp; RVNL Empanelment</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/approvals"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">MES &amp; CPWD Defense Approvals</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/clients"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">PSU &amp; Corporate Approvals</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/insights"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">Technical Insights &amp; Briefs</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/approvals"
                  onClick={handleLinkClick}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1268B3] hover:text-[#062B5C] pt-2 border-t border-slate-100 transition-colors group/btn"
                >
                  <span>View All Approvals</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-[#1268B3]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          2. OUR SERVICES MEGA-MENU (TABBED LAYOUT: PARENT ON LEFT, 1ST CHILDS ON RIGHT)
          ========================================================================= */}
      {activeDropdown === 'services' && (() => {
        const currentService = SERVICE_TABS.find(s => s.id === activeServiceTab) || SERVICE_TABS[0];
        return (
          <div
            className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-t-2 border-[#1268B3] border-b border-slate-200/90 shadow-2xl transition-all duration-200 z-50"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-7">
              {/* 3-Section Unified Layout: Major Disciplines (Left) | 1st Children Grid (Middle) | Callout Card (Right) */}
              <div className="grid grid-cols-12 gap-7 items-stretch">

                {/* Column 1 (Left): 4 Major Disciplines Parent Tabs */}
                <div className="col-span-3 border-r border-slate-200/80 pr-5 space-y-1.5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block px-2 pb-2">
                      Major Disciplines
                    </span>
                    <div className="space-y-1.5">
                      {SERVICE_TABS.map((service) => {
                        const IconComp = service.icon;
                        const isActive = activeServiceTab === service.id;
                        return (
                          <Link
                            key={service.id}
                            to={service.slug}
                            onMouseEnter={() => setActiveServiceTab(service.id)}
                            onClick={() => handleNavClick(service.slug)}
                            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 text-left group cursor-pointer ${isActive
                              ? 'bg-[#1268B3] text-white shadow-md'
                              : 'bg-transparent text-slate-700 hover:bg-blue-50/70 hover:text-[#1268B3]'
                              }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div
                                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all ${isActive
                                  ? 'bg-white/20 text-white'
                                  : 'bg-blue-50/70 border border-blue-100/90 text-[#062B5C] group-hover:bg-[#1268B3] group-hover:text-white group-hover:border-[#1268B3]'
                                  }`}
                              >
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="truncate">
                                <span className={`text-xs font-bold font-display block truncate transition-colors ${isActive ? 'text-white' : 'text-slate-800 group-hover:text-[#1268B3]'}`}>
                                  {service.title}
                                </span>
                                <span
                                  className={`text-[10px] font-mono block truncate transition-colors ${isActive ? 'text-blue-100' : 'text-slate-400 group-hover:text-[#1268B3]/80'
                                    }`}
                                >
                                  {service.subtitle}
                                </span>
                              </div>
                            </div>
                            <ChevronRight
                              className={`w-4 h-4 shrink-0 transition-all ${isActive ? 'text-white translate-x-0.5' : 'text-slate-400 opacity-60 group-hover:text-[#1268B3] group-hover:opacity-100 group-hover:translate-x-0.5'
                                }`}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Catalog quick link */}
                  <div className="pt-3 border-t border-slate-100 mt-2">
                    <Link
                      to="/services"
                      onClick={handleLinkClick}
                      className="flex items-center justify-between text-xs font-semibold text-[#1268B3] hover:text-[#062B5C] p-2 rounded-lg hover:bg-blue-50/70 transition-colors group/cat"
                    >
                      <span>Full Catalog (581 Tests)</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/cat:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Column 2 (Middle): Active Parent Header & 1st-Level Children Grid (NO Child of Child) */}
                <div className="col-span-6 flex flex-col justify-between py-1 pr-3">
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <Link
                          to={currentService.slug}
                          onClick={() => handleNavClick(currentService.slug)}
                          className="text-lg font-bold font-display text-[#062B5C] hover:text-[#1268B3] transition-colors inline-block"
                        >
                          {currentService.title}
                        </Link>
                        <p className="text-xs text-slate-500 mt-1 max-w-xl leading-relaxed">
                          {currentService.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="border-b border-slate-200/80 my-3.5" />

                    {/* 1st Children Only (2 columns) */}
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                      {currentService.subservices.map((sub) => (
                        <Link
                          key={sub.title}
                          to={`${currentService.slug}${sub.hash}`}
                          onClick={() => handleNavClick(`${currentService.slug}${sub.hash}`)}
                          className="group/item flex items-center justify-between py-2 px-3 rounded-lg hover:bg-blue-50/70 text-slate-700 hover:text-[#1268B3] transition-all"
                        >
                          <span className="text-xs font-medium truncate group-hover/item:text-[#1268B3] transition-colors">
                            {sub.title}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#1268B3] group-hover/item:translate-x-0.5 transition-all shrink-0 ml-1.5" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Bottom link of middle area */}
                  <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={currentService.slug}
                      onClick={handleLinkClick}
                      className="text-xs font-semibold text-[#1268B3] hover:text-[#062B5C] flex items-center gap-1.5 transition-colors group/all"
                    >
                      <span>Explore All {currentService.title} Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Column 3 (Right): Featured Callout Card (Reference Style) */}
                <div className="col-span-3">
                  <div className="bg-[#1268B3] rounded-2xl p-5 text-white flex flex-col justify-between shadow-lg relative overflow-hidden h-full">
                    <div className="absolute -top-12 -right-12 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="relative z-10">
                      <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-blue-100 block mb-2">
                        {currentService.card.tag}
                      </span>
                      <h5 className="text-base font-bold font-display text-white leading-snug">
                        {currentService.card.headline}
                      </h5>
                      <p className="text-xs text-blue-50/90 mt-2.5 leading-relaxed">
                        {currentService.card.description}
                      </p>
                    </div>

                    <div className="relative z-10 pt-4">
                      <Link
                        to={currentService.card.ctaLink}
                        onClick={() => handleNavClick(currentService.card.ctaLink)}
                        className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#D71920] hover:bg-[#b01319] text-white text-xs font-bold transition-all shadow-md group/btn"
                      >
                        <span>{currentService.card.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <div className="pt-3 mt-3 border-t border-white/20 text-[10px] font-mono text-blue-100 text-center tracking-wider">
                        {currentService.card.footerStat}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      })()}

      {/* =========================================================================
          3. OUR CLIENTS MEGA-MENU (MODERN BLUE THEME WITH LOGO SHOWCASE)
          ========================================================================= */}
      {activeDropdown === 'clients' && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-t-2 border-[#1268B3] border-b border-slate-200/90 shadow-2xl transition-all duration-200 z-50"
          onMouseEnter={() => handleMouseEnter('clients')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-7 sm:py-8">
            {/* Header Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-xl font-bold font-display text-[#062B5C]">
                  Our Reach &amp; Client Partnerships
                </h3>
              </div>
              <Link
                to="/clients"
                onClick={handleLinkClick}
                className="text-xs font-semibold text-[#1268B3] hover:text-[#062B5C] flex items-center gap-1.5 transition-colors group"
              >
                <span>View All 79+ Corporate &amp; Government Partners</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Unified Grid: 2 Cards on Left + Client Logos Showcase on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Card 1: Our Reach (3 cols) */}
              <div className="lg:col-span-3 group bg-[#F8FAFC]/70 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#1268B3]/50 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50/70 border border-blue-100/90 text-[#062B5C] group-hover:bg-[#1268B3] group-hover:text-white transition-all flex items-center justify-center shrink-0 shadow-2xs">
                      <MapPin className="w-5 h-5 transition-transform group-hover:scale-105" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-display text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-tight">
                        Our Reach
                      </h4>
                      <span className="text-[10px] font-mono text-[#1268B3] font-semibold uppercase tracking-wider block">
                        4 Regional Hubs
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3.5">
                    Central testing facilities and nationwide field deployment rigs delivering rapid sample turnaround.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-4 border-t border-slate-100 pt-3">
                    <li>
                      <Link
                        to="/reach#laboratories"
                        onClick={() => handleNavClick('/reach#laboratories')}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">Central Testing Hubs</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/reach#mobilization"
                        onClick={() => handleNavClick('/reach#mobilization')}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">Pan-India Site Mobilization</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/reach#logistics"
                        onClick={() => handleNavClick('/reach#logistics')}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">24-48h Specimen Logistics</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/reach"
                  onClick={handleLinkClick}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1268B3] hover:text-[#062B5C] pt-2 border-t border-slate-100 transition-colors group/btn"
                >
                  <span>Explore Pan-India Footprint</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-[#1268B3]" />
                </Link>
              </div>

              {/* Card 2: Clients' Logos & Empanelments (3 cols) */}
              <div className="lg:col-span-3 group bg-[#F8FAFC]/70 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#1268B3]/50 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50/70 border border-blue-100/90 text-[#062B5C] group-hover:bg-[#1268B3] group-hover:text-white transition-all flex items-center justify-center shrink-0 shadow-2xs">
                      <Award className="w-5 h-5 transition-transform group-hover:scale-105" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-display text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-tight">
                        Clients &amp; Empanelments
                      </h4>
                      <span className="text-[10px] font-mono text-[#1268B3] font-semibold uppercase tracking-wider block">
                        PSU &amp; EPC Partners
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3.5">
                    Direct statutory approvals and empanelments with ministries, railways, defense, and top developers.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-4 border-t border-slate-100 pt-3">
                    <li>
                      <Link
                        to="/clients"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">Central Ministries &amp; PSUs</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/clients"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">EPC Infrastructure Majors</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/clients"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 hover:text-[#1268B3] transition-colors group/item py-0.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-[#1268B3] transition-colors shrink-0" />
                        <span className="truncate">Highways, Railways &amp; Ports</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/clients"
                  onClick={handleLinkClick}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1268B3] hover:text-[#062B5C] pt-2 border-t border-slate-100 transition-colors group/btn"
                >
                  <span>View Client Categories</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-[#1268B3]" />
                </Link>
              </div>

              {/* Card 3: Featured Clients Logo Showcase Grid (6 cols) */}
              <div className="lg:col-span-6 bg-[#F8FAFC]/70 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#1268B3]/50 transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-sm font-bold font-display text-[#062B5C]">
                        Trusted By Leading Infrastructure Organizations
                      </h4>
                      <span className="text-[10px] font-mono text-[#1268B3] font-semibold uppercase tracking-wider block">
                        Government, PSUs &amp; EPC Majors
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#1268B3] bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-200/60 shadow-2xs">
                      6,480+ Projects
                    </span>
                  </div>

                  {/* 8 Authentic Logo Badges */}
                  <div className="grid grid-cols-4 gap-2.5 my-3">
                    {[
                      { name: 'Larsen & Toubro', logo: '/assets/clients/larsen-toubro.png' },
                      { name: 'NHAI', logo: '/assets/clients/nhai.png' },
                      { name: 'RVNL', logo: '/assets/clients/rail-vikas-nigam-limited.png' },
                      { name: 'Adani', logo: '/assets/clients/adani.png' },
                      { name: 'Tata Consulting Engineers', logo: '/assets/clients/tata-consulting-engineers.png' },
                      { name: 'Military Engineer Services', logo: '/assets/clients/military-engineer-services.png' },
                      { name: 'CPWD', logo: '/assets/clients/cpwd.png' },
                      { name: 'Indian Railways', logo: '/assets/clients/indian-railways.png' },
                    ].map((c) => (
                      <div
                        key={c.name}
                        title={c.name}
                        className="group/logo p-2 bg-white rounded-xl border border-slate-200/80 hover:border-[#1268B3] hover:shadow-xs transition-all flex items-center justify-center h-14"
                      >
                        <img
                          src={c.logo}
                          alt={c.name}
                          className="max-h-8 max-w-full object-contain filter grayscale group-hover/logo:grayscale-0 transition-all duration-200"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                  <Link
                    to="/clients"
                    onClick={handleLinkClick}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1268B3] hover:text-[#062B5C] transition-colors group/all"
                  >
                    <span>View All 79+ Partners</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1268B3] group-hover/all:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          QUICK SEARCH OVERLAY / BAR (Mobile Screen)
          ========================================================================= */}
      {searchOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 z-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                placeholder="Search services, tests, codes (e.g. MASW, Triaxial, PIT)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Live Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-3 bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 max-h-80 overflow-y-auto shadow-md">
                {searchResults.map((res) => (
                  <Link
                    key={res.id}
                    to={res.path}
                    onClick={() => {
                      handleNavClick(res.path);
                      setSearchOpen(false);
                    }}
                    className="p-3 hover:bg-[#F8FAFC] flex items-start justify-between gap-3 transition-colors block text-xs"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-semibold text-[#062B5C]">{res.title}</span>
                        {res.level === 'parent' && (
                          <span className="text-[9px] font-mono font-bold bg-[#1268B3] text-white px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0">
                            Discipline
                          </span>
                        )}
                        {res.level === 'child' && (
                          <span className="text-[9px] font-mono font-bold bg-blue-100 text-[#062B5C] px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0">
                            Sub-Discipline
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5 truncate">
                        {res.level === 'test' ? `${res.category} · ${res.parent}` : res.parent}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase shrink-0 font-medium">{res.category}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          MOBILE SLIDE-IN NAVIGATION DRAWER
          ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-white z-50 overflow-y-auto border-t border-slate-200 flex flex-col justify-between shadow-2xl">
          <div className="p-4 sm:p-6 space-y-3">

            {/* About Us Mobile Accordion */}
            <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('about')}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-sm text-[#062B5C] bg-white border-b border-slate-100"
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform ${mobileSubmenus.about ? 'rotate-180 text-[#1268B3]' : ''
                    }`}
                />
              </button>
              {mobileSubmenus.about && (
                <div className="bg-white p-3 space-y-3 text-xs">
                  {/* Top Primary Overview Banner */}
                  <Link
                    to="/about"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between py-2 px-3 rounded-lg bg-blue-50/80 hover:bg-blue-100/80 font-bold text-[#1268B3] transition-colors"
                  >
                    <span>Company Overview (18-Year Legacy)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {/* 1. Company Profile & Legacy */}
                  <div className="space-y-1">
                    <div className="pt-1.5 font-bold text-[#062B5C] flex items-center justify-between">
                      <Link
                        to="/about"
                        onClick={handleLinkClick}
                        className="hover:text-[#1268B3] transition-colors flex items-center gap-1.5 font-bold text-xs"
                      >
                        <Building2 className="w-3.5 h-3.5 text-[#1268B3]" />
                        <span>Company Profile</span>
                      </Link>
                      <Link
                        to="/about"
                        onClick={handleLinkClick}
                        className="text-[#1268B3] text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-100 hover:bg-[#1268B3] hover:text-white transition-colors"
                      >
                        View Page →
                      </Link>
                    </div>
                    <Link to="/about#our-story" onClick={() => handleNavClick('/about#our-story')} className="block pl-5 py-0.5 text-slate-600 hover:text-[#1268B3]">
                      • Who We Are &amp; 18-Year History
                    </Link>
                    <Link to="/about#why-simcon" onClick={() => handleNavClick('/about#why-simcon')} className="block pl-5 py-0.5 text-slate-600 hover:text-[#1268B3]">
                      • Why Simcon (Evidence-Based)
                    </Link>
                    <Link to="/about#vision-mission" onClick={() => handleNavClick('/about#vision-mission')} className="block pl-5 py-0.5 text-slate-600 hover:text-[#1268B3]">
                      • Vision, Mission &amp; Core Values
                    </Link>
                    <Link to="/about#directors-message" onClick={() => handleNavClick('/about#directors-message')} className="block pl-5 py-0.5 text-slate-600 hover:text-[#1268B3]">
                      • Director's Commitment
                    </Link>
                  </div>

                  {/* 2. Leadership & Technical Team */}
                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <div className="font-bold text-[#062B5C] flex items-center justify-between">
                      <Link
                        to="/about/team"
                        onClick={handleLinkClick}
                        className="hover:text-[#1268B3] transition-colors flex items-center gap-1.5 font-bold text-xs"
                      >
                        <Users className="w-3.5 h-3.5 text-[#1268B3]" />
                        <span>Leadership &amp; Technical Council</span>
                      </Link>
                      <Link
                        to="/about/team"
                        onClick={handleLinkClick}
                        className="text-[#1268B3] text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-100 hover:bg-[#1268B3] hover:text-white transition-colors"
                      >
                        View Page →
                      </Link>
                    </div>
                    <Link to="/about/team#chairman" onClick={() => handleNavClick('/about/team#chairman')} className="block pl-5 py-0.5 text-slate-600 hover:text-[#1268B3]">
                      • Chairman's Message &amp; MD
                    </Link>
                    <Link to="/about/team#core-team" onClick={() => handleNavClick('/about/team#core-team')} className="block pl-5 py-0.5 text-slate-600 hover:text-[#1268B3]">
                      • Regional Branch Incharges
                    </Link>
                    <Link to="/about/team#advisors" onClick={() => handleNavClick('/about/team#advisors')} className="block pl-5 py-0.5 text-slate-600 hover:text-[#1268B3]">
                      • IIT/NIT Emeritus Advisory Council
                    </Link>
                    <Link to="/about/team#specialists" onClick={() => handleNavClick('/about/team#specialists')} className="block pl-5 py-0.5 text-slate-600 hover:text-[#1268B3]">
                      • 18 Specialists Directory
                    </Link>
                  </div>

                  {/* 3. NABL Accreditations */}
                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <div className="font-bold text-[#062B5C] flex items-center justify-between">
                      <Link
                        to="/accreditations"
                        onClick={handleLinkClick}
                        className="hover:text-[#1268B3] transition-colors flex items-center gap-1.5 font-bold text-xs"
                      >
                        <Award className="w-3.5 h-3.5 text-[#1268B3]" />
                        <span>NABL Accreditations (ISO/IEC 17025)</span>
                      </Link>
                      <Link
                        to="/accreditations"
                        onClick={handleLinkClick}
                        className="text-[#1268B3] text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-100 hover:bg-[#1268B3] hover:text-white transition-colors"
                      >
                        View Page →
                      </Link>
                    </div>
                    <Link to="/accreditations" onClick={handleLinkClick} className="block pl-5 py-0.5 text-slate-600 hover:text-[#1268B3]">
                      • ISO/IEC 17025:2017 Certificates
                    </Link>
                    <Link to="/accreditations#scope" onClick={() => handleNavClick('/accreditations#scope')} className="block pl-5 py-0.5 text-slate-600 hover:text-[#1268B3]">
                      • 581 Parameters Testing Scope
                    </Link>
                    <Link to="/reach" onClick={handleLinkClick} className="block pl-5 py-0.5 text-slate-600 hover:text-[#1268B3]">
                      • 3 Permanent Testing Laboratories
                    </Link>
                  </div>

                  {/* 4. Approvals & Empanelment */}
                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <div className="font-bold text-[#062B5C] flex items-center justify-between">
                      <Link
                        to="/approvals"
                        onClick={handleLinkClick}
                        className="hover:text-[#1268B3] transition-colors flex items-center gap-1.5 font-bold text-xs"
                      >
                        <FileCheck className="w-3.5 h-3.5 text-[#1268B3]" />
                        <span>Approvals &amp; Empanelment</span>
                      </Link>
                      <Link
                        to="/approvals"
                        onClick={handleLinkClick}
                        className="text-[#1268B3] text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-100 hover:bg-[#1268B3] hover:text-white transition-colors"
                      >
                        View Page →
                      </Link>
                    </div>
                    <Link to="/approvals" onClick={handleLinkClick} className="block pl-5 py-0.5 text-slate-600 hover:text-[#1268B3]">
                      • NHAI &amp; RVNL Empanelment
                    </Link>
                    <Link to="/approvals" onClick={handleLinkClick} className="block pl-5 py-0.5 text-slate-600 hover:text-[#1268B3]">
                      • MES &amp; CPWD Defense Approvals
                    </Link>
                    <Link to="/clients" onClick={handleLinkClick} className="block pl-5 py-0.5 text-slate-600 hover:text-[#1268B3]">
                      • PSU &amp; Corporate Approvals
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Our Services Mobile Accordion (4 Pillars) */}
            <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('services')}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-sm text-[#062B5C] bg-white border-b border-slate-100"
              >
                <span>Our Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform ${mobileSubmenus.services ? 'rotate-180 text-[#1268B3]' : ''
                    }`}
                />
              </button>
              {mobileSubmenus.services && (
                <div className="bg-white p-3 space-y-2 text-xs">
                  <Link to="/services" onClick={handleLinkClick} className="block py-1 font-bold text-[#1268B3]">
                    All Services Directory Overview →
                  </Link>

                  {/* Geotechnical Services */}
                  <div className="pt-1.5 font-bold text-[#062B5C] flex items-center justify-between">
                    <Link to="/services/geotechnical-services" onClick={handleLinkClick} className="hover:text-[#1268B3] transition-colors">
                      Geotechnical Services
                    </Link>
                    <Link to="/services/geotechnical-services" onClick={handleLinkClick} className="text-[#1268B3] text-[10px]">View →</Link>
                  </div>
                  <Link to="/services/geotechnical-services#soil-testing" onClick={() => handleNavClick('/services/geotechnical-services#soil-testing')} className="block pl-2 py-0.5 text-slate-600">
                    • Soil Laboratory Testing
                  </Link>
                  <Link to="/services/geotechnical-services#rock-testing" onClick={() => handleNavClick('/services/geotechnical-services#rock-testing')} className="block pl-2 py-0.5 text-slate-600">
                    • Rock Laboratory Testing
                  </Link>
                  <Link to="/services/geotechnical-services#field-testing" onClick={() => handleNavClick('/services/geotechnical-services#field-testing')} className="block pl-2 py-0.5 text-slate-600">
                    • Advanced In-Situ Field Testing
                  </Link>
                  <Link to="/services/geotechnical-services#field-testing" onClick={() => handleNavClick('/services/geotechnical-services#field-testing')} className="block pl-2 py-0.5 text-slate-600">
                    • Static &amp; Dynamic Pile Load Tests
                  </Link>

                  {/* Geophysical Survey */}
                  <div className="pt-2 font-bold text-[#062B5C] flex items-center justify-between border-t border-slate-100">
                    <Link to="/services/geophysical-survey" onClick={handleLinkClick} className="hover:text-[#1268B3] transition-colors">
                      Geophysical Survey
                    </Link>
                    <Link to="/services/geophysical-survey" onClick={handleLinkClick} className="text-[#1268B3] text-[10px]">View →</Link>
                  </div>
                  <Link to="/services/geophysical-survey#masw" onClick={() => handleNavClick('/services/geophysical-survey#masw')} className="block pl-2 py-0.5 text-slate-600">
                    • MASW &amp; Seismic Refraction (SRT)
                  </Link>
                  <Link to="/services/geophysical-survey#ert" onClick={() => handleNavClick('/services/geophysical-survey#ert')} className="block pl-2 py-0.5 text-slate-600">
                    • Electrical Resistivity Tomography (2D/3D ERT)
                  </Link>
                  <Link to="/services/geophysical-survey#gpr" onClick={() => handleNavClick('/services/geophysical-survey#gpr')} className="block pl-2 py-0.5 text-slate-600">
                    • Ground Penetrating Radar (GPR)
                  </Link>
                  <Link to="/services/geophysical-survey#thermal" onClick={() => handleNavClick('/services/geophysical-survey#thermal')} className="block pl-2 py-0.5 text-slate-600">
                    • Thermal Resistivity &amp; Downhole Seismics
                  </Link>

                  {/* NDT & Structural Integrity */}
                  <div className="pt-2 font-bold text-[#062B5C] flex items-center justify-between border-t border-slate-100">
                    <Link to="/services/ndt-structural-integrity" onClick={handleLinkClick} className="hover:text-[#1268B3] transition-colors">
                      NDT &amp; Structural Integrity
                    </Link>
                    <Link to="/services/ndt-structural-integrity" onClick={handleLinkClick} className="text-[#1268B3] text-[10px]">View →</Link>
                  </div>
                  <Link to="/services/ndt-structural-integrity#ndt-testing" onClick={() => handleNavClick('/services/ndt-structural-integrity#ndt-testing')} className="block pl-2 py-0.5 text-slate-600">
                    • Low Strain Pile Integrity (PIT)
                  </Link>
                  <Link to="/services/ndt-structural-integrity#ndt-testing" onClick={() => handleNavClick('/services/ndt-structural-integrity#ndt-testing')} className="block pl-2 py-0.5 text-slate-600">
                    • Rebound Hammer &amp; UPV Scanning
                  </Link>
                  <Link to="/services/ndt-structural-integrity#ndt-testing" onClick={() => handleNavClick('/services/ndt-structural-integrity#ndt-testing')} className="block pl-2 py-0.5 text-slate-600">
                    • Half-Cell Corrosion Diagnostics
                  </Link>
                  <Link to="/services/ndt-structural-integrity#structural-health" onClick={() => handleNavClick('/services/ndt-structural-integrity#structural-health')} className="block pl-2 py-0.5 text-slate-600">
                    • Bridge Load Proof Tests &amp; Structural Audits
                  </Link>

                  {/* Material Testing Services */}
                  <div className="pt-2 font-bold text-[#062B5C] flex items-center justify-between border-t border-slate-100">
                    <Link to="/services/material-testing-services" onClick={handleLinkClick} className="hover:text-[#1268B3] transition-colors">
                      Material Testing Services
                    </Link>
                    <Link to="/services/material-testing-services" onClick={handleLinkClick} className="text-[#1268B3] text-[10px]">View →</Link>
                  </div>
                  <Link to="/services/material-testing-services#cementitious" onClick={() => handleNavClick('/services/material-testing-services#cementitious')} className="block pl-2 py-0.5 text-slate-600">
                    • Cementitious Material Testing
                  </Link>
                  <Link to="/services/material-testing-services#aggregates" onClick={() => handleNavClick('/services/material-testing-services#aggregates')} className="block pl-2 py-0.5 text-slate-600">
                    • Aggregate Testing (Fine &amp; Coarse)
                  </Link>
                  <Link to="/services/material-testing-services#bituminous" onClick={() => handleNavClick('/services/material-testing-services#bituminous')} className="block pl-2 py-0.5 text-slate-600">
                    • Bituminous Binder &amp; Asphalt Testing
                  </Link>
                  <Link to="/services/material-testing-services#concrete" onClick={() => handleNavClick('/services/material-testing-services#concrete')} className="block pl-2 py-0.5 text-slate-600">
                    • Concrete Testing (Fresh &amp; Hardened)
                  </Link>
                  <Link to="/services/material-testing-services#steel-metals" onClick={() => handleNavClick('/services/material-testing-services#steel-metals')} className="block pl-2 py-0.5 text-slate-600">
                    • Steel, Rebar &amp; Welds Testing
                  </Link>
                  <Link to="/services/material-testing-services#masonry" onClick={() => handleNavClick('/services/material-testing-services#masonry')} className="block pl-2 py-0.5 text-slate-600">
                    • Masonry Material Testing
                  </Link>
                  <Link to="/services/material-testing-services#chemical-testing" onClick={() => handleNavClick('/services/material-testing-services#chemical-testing')} className="block pl-2 py-0.5 text-[#1268B3] font-semibold">
                    • Chemical Testing (6 Matrices)
                  </Link>
                </div>
              )}
            </div>

            {/* Our Projects */}
            <Link
              to="/projects"
              onClick={handleLinkClick}
              className="block px-4 py-3 rounded-xl border border-slate-200 bg-white font-semibold text-sm text-[#062B5C] hover:bg-slate-50"
            >
              Our Projects (6,480+ Track Record)
            </Link>

            {/* Our Clients Mobile Accordion */}
            <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('clients')}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-sm text-[#062B5C] bg-white border-b border-slate-100"
              >
                <span>Our Clients</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform ${mobileSubmenus.clients ? 'rotate-180 text-[#1268B3]' : ''
                    }`}
                />
              </button>
              {mobileSubmenus.clients && (
                <div className="bg-white p-3 space-y-3 text-xs">
                  {/* Top Primary Overview Banner */}
                  <Link
                    to="/clients"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between py-2 px-3 rounded-lg bg-blue-50/80 hover:bg-blue-100/80 font-bold text-[#1268B3] transition-colors"
                  >
                    <span>All Clients &amp; Partners Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {/* 1. Our Reach */}
                  <div className="pt-1 font-bold text-[#062B5C] flex items-center justify-between">
                    <Link
                      to="/reach"
                      onClick={handleLinkClick}
                      className="hover:text-[#1268B3] transition-colors flex items-center gap-1.5 font-bold text-xs"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#1268B3]" />
                      <span>Our Reach (Pan-India 4 Hubs)</span>
                    </Link>
                    <Link
                      to="/reach"
                      onClick={handleLinkClick}
                      className="text-[#1268B3] text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-100 hover:bg-[#1268B3] hover:text-white transition-colors"
                    >
                      View Page →
                    </Link>
                  </div>

                  {/* 2. Clients' Logos & Empanelments */}
                  <div className="pt-2 font-bold text-[#062B5C] flex items-center justify-between border-t border-slate-100">
                    <Link
                      to="/clients"
                      onClick={handleLinkClick}
                      className="hover:text-[#1268B3] transition-colors flex items-center gap-1.5 font-bold text-xs"
                    >
                      <Award className="w-3.5 h-3.5 text-[#1268B3]" />
                      <span>79+ Corporate &amp; PSU Partners</span>
                    </Link>
                    <Link
                      to="/clients"
                      onClick={handleLinkClick}
                      className="text-[#1268B3] text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-100 hover:bg-[#1268B3] hover:text-white transition-colors"
                    >
                      View Page →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Careers */}
            <Link
              to="/careers"
              onClick={handleLinkClick}
              className="block px-4 py-3 rounded-xl border border-slate-200 bg-white font-semibold text-sm text-[#062B5C] hover:bg-slate-50"
            >
              Careers
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="block px-4 py-3 rounded-xl border border-slate-200 bg-white font-semibold text-sm text-[#062B5C] hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>

          {/* Bottom Drawer Callout with Enquire Now CTA */}
          <div className="p-4 sm:p-6 bg-[#F8FAFC] border-t border-slate-200 space-y-3">
            <a
              href={`tel:${COMPANY_INFO.officialPhone}`}
              className="flex items-center gap-2 text-xs font-mono font-bold text-[#062B5C]"
            >
              <Phone className="w-4 h-4 text-[#1268B3]" />
              <span>{COMPANY_INFO.officialPhone}</span>
            </a>
            <Link
              to="/contact#enquiry"
              onClick={() => handleNavClick('/contact#enquiry')}
              className="block w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#D71920] rounded-xl shadow-sm"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

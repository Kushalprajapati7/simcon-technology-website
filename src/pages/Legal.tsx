import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { URL_MIGRATION_MAP } from '@/data/migration';
import { COMPANY_INFO } from '@/data/company';
import { OFFICES } from '@/data/offices';
import {
  ShieldCheck,
  Scale,
  Cookie,
  FileText,
  Mail,
  ChevronDown,
  ArrowRight,
  Lock,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export const Legal: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const [migrationOpen, setMigrationOpen] = useState(false);

  // Policy selector configuration
  const tabs = [
    {
      id: 'privacy',
      label: 'Privacy Policy',
      path: '/privacy-policy',
      icon: ShieldCheck,
      description: 'Data protection, engineering confidentiality & DPDP compliance'
    },
    {
      id: 'terms',
      label: 'Terms & Conditions',
      path: '/terms',
      icon: Scale,
      description: 'Terms of web use, engineering disclaimers & IP rights'
    },
    {
      id: 'cookies',
      label: 'Cookie Policy',
      path: '/cookie-policy',
      icon: Cookie,
      description: 'Minimal functional storage, no third-party ad tracking'
    }
  ];

  let currentTitle = "Privacy Policy & Data Governance";
  let currentBadge = "DATA PRIVACY & DPDP ACT COMPLIANCE";
  let currentDesc = "Governance framework detailing personal data protection, engineering confidentiality protocols, and statutory compliance under Indian information technology and data protection laws.";

  if (path === "/terms") {
    currentTitle = "Terms & Conditions of Service";
    currentBadge = "LEGAL TERMS & ENGINEERING DISCLAIMER";
    currentDesc = "Terms of service, engineering advisory disclaimers, intellectual property governance, and jurisdictional framework for SIMCON corporate web assets.";
  } else if (path === "/cookie-policy") {
    currentTitle = "Cookie & Web Storage Policy";
    currentBadge = "TRANSPARENCY & COOKIE UTILIZATION";
    currentDesc = "Information regarding minimal functional cookie utilization, local session storage, and our zero third-party advertising tracking commitment.";
  }

  const currentTab = tabs.find(t => t.path === path) || tabs[0];
  const hqOffice = OFFICES.find(o => o.id === 'gandhidham') || OFFICES[0];

  return (
    <div className="pt-[72px] bg-[#F8FAFC] min-h-screen">
      {/* Hero Header */}
      <section className="bg-[#062B5C] text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden border-b border-[#0A3D78]">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#1268B3]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full">
          <div className="max-w-4xl space-y-3.5 sm:space-y-4 reveal reveal-left">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-slate-300 flex-wrap" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-slate-400">&gt;</span>
              <span className="text-slate-300">Legal</span>
              <span className="text-slate-400">&gt;</span>
              <span className="text-white font-medium">{currentTab.label}</span>
            </nav>

            {/* Technical Eyebrow (Services Page Sky-Blue Format) */}
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-sky-300 uppercase">
                {currentBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white leading-[1.12]">
              {currentTitle}
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl font-normal">
              {currentDesc}
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-200 pt-1">
              <span className="text-slate-300">Effective Date:</span>
              <span className="text-white font-semibold">November 2024</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">Governance:</span>
              <span className="text-white font-semibold">{COMPANY_INFO.name}</span>
              <span className="text-slate-400">•</span>
              <span className="text-sky-300 font-semibold">Version 2.4</span>
            </div>
          </div>

          {/* Interactive Policy Switcher Tabs */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = path === tab.path;
              return (
                <Link
                  key={tab.id}
                  to={tab.path}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-200 text-left ${
                    isActive
                      ? 'bg-white text-[#062B5C] border-white shadow-lg shadow-black/10'
                      : 'bg-white/10 hover:bg-white/15 text-slate-200 border-white/15 hover:border-white/30'
                  }`}
                >
                  <span
                    className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                      isActive ? 'bg-blue-50 text-[#1268B3]' : 'bg-white/10 text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <span
                      className={`block text-xs sm:text-sm font-bold font-display leading-tight truncate ${
                        isActive ? 'text-[#062B5C]' : 'text-white'
                      }`}
                    >
                      {tab.label}
                    </span>
                    <span
                      className={`block text-[11px] leading-snug mt-0.5 line-clamp-1 ${
                        isActive ? 'text-slate-600 font-medium' : 'text-slate-300'
                      }`}
                    >
                      {tab.description}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* POLICY 1: PRIVACY POLICY */}
          {path === '/privacy-policy' && (
            <div className="space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm text-slate-700 leading-relaxed text-sm sm:text-base">
              <div className="p-4 bg-blue-50/70 border border-blue-200/80 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <ShieldCheck className="w-5 h-5 text-[#1268B3] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#062B5C] block mb-0.5 font-display">Statutory Compliance Statement</strong>
                  SIMCON Technology Pvt. Ltd. operates this portal in strict accordance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI), and the Digital Personal Data Protection (DPDP) Act, 2023.
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  1. Information We Collect
                </h2>
                <p className="mb-3">
                  We collect information voluntarily submitted through our website forms, direct corporate email correspondence, WhatsApp business messaging, and formal procurement channels. This includes:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li><strong>Contact &amp; Identity Data:</strong> Name, professional title, corporate affiliation, official email address, phone number, and physical office location.</li>
                  <li><strong>Project &amp; Tender Inquiries:</strong> Structural specifications, anticipated exploration borehole counts, testing parameter matrices, geotechnical bid references, and site location coordinates.</li>
                  <li><strong>Career Submissions:</strong> Curriculum vitae (CV), educational credentials, work experience records, engineering certifications, and portfolio materials submitted for employment evaluation.</li>
                  <li><strong>Technical Server Telemetry:</strong> Anonymized technical server logs, including browser user agent, IP address for security firewall routing, timestamp, and accessed resource paths.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  2. Engineering Test Data Confidentiality &amp; Non-Disclosure
                </h2>
                <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl mb-3 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
                  <Lock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Core Professional Commitment:</strong> Borehole logs, stratum stratification data, rock core recovery photos, laboratory compressive strength curves, chemical test results, and structural integrity findings generated under contract remain the strictly confidential intellectual property of the respective commissioning client.
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  SIMCON Technology Pvt. Ltd. does not sell, license, rent, barter, or distribute client technical records, geotechnical maps, or site exploration data to third parties, competitors, or external data brokers under any circumstances.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  3. Purpose &amp; Legal Basis for Processing
                </h2>
                <p className="mb-2 text-xs sm:text-sm text-slate-600">We process personal and technical information exclusively for legitimate engineering and business purposes, including:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <li>Evaluating technical feasibility and preparing formal commercial quotations for geotechnical exploration and laboratory testing.</li>
                  <li>Executing project contracts, dispatching mobilization teams, and coordinating field drilling schedules.</li>
                  <li>Issuing verified NABL-accredited laboratory test reports and engineering advisory certificates.</li>
                  <li>Fulfilling statutory pre-qualification compliance for institutional EPC tenders (NHAI, RVNL, MES, CPWD, State Metros).</li>
                  <li>Recruiting qualified civil engineers, geologists, laboratory technicians, and non-destructive testing specialists.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  4. Data Security &amp; Storage Safeguards
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  We maintain enterprise-grade physical, technical, and administrative controls to protect information against unauthorized access, alteration, disclosure, or destruction. Digital communications across simcon.co.in are encrypted using modern Transport Layer Security (TLS 1.3/HTTPS). Stored laboratory data and client documents are hosted on access-controlled servers with role-based authentication and routine audit logging.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  5. Data Retention Protocols
                </h2>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <li><strong>General Commercial Enquiries:</strong> Retained for a maximum of 36 months to support follow-up engineering consultations, after which records are archived or anonymized.</li>
                  <li><strong>Accredited Test Reports &amp; Calibration Logs:</strong> Retained in accordance with ISO/IEC 17025 standards and NABL regulatory mandatory retention periods (typically minimum 5 years) for technical traceability and audit verification.</li>
                  <li><strong>Career Applications:</strong> Unselected candidate profiles are securely purged after 12 months unless explicit consent is granted for future talent pool consideration.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  6. Your Legal Rights
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-2">
                  In accordance with applicable data protection laws, you possess the right to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Right to Access:</strong> Request confirmation and copies of personal data held about you.</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete corporate records.</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Right to Erasure:</strong> Request deletion of your personal data where retention is no longer legally mandated.</span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Withdrawal of Consent:</strong> Withdraw authorization for non-statutory communication channels at any time.</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  7. Grievance Officer &amp; Contact Information
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-3">
                  For privacy inquiries, rights requests, or data concerns, please contact our designated Grievance Officer:
                </p>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs sm:text-sm font-mono text-slate-700">
                  <div><strong>Attn:</strong> Grievance Redressal Officer — Legal &amp; Compliance</div>
                  <div><strong>Entity:</strong> {COMPANY_INFO.name}</div>
                  <div><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.officialEmail}`} className="text-[#1268B3] underline">{COMPANY_INFO.officialEmail}</a></div>
                  <div><strong>Phone:</strong> {COMPANY_INFO.officialPhone}</div>
                  <div><strong>Corporate Headquarters:</strong> {hqOffice.address}</div>
                </div>
              </div>
            </div>
          )}

          {/* POLICY 2: TERMS & CONDITIONS */}
          {path === '/terms' && (
            <div className="space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm text-slate-700 leading-relaxed text-sm sm:text-base">
              <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-amber-900">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-950 block mb-0.5 font-display">Engineering Disclaimer &amp; Foundation Advice Notice</strong>
                  Technical papers, parameter tables, test descriptions, and case summaries on this website are published for general informational and commercial pre-qualification purposes. Site-specific foundation design, bearing capacity calculation, pile depth sizing, and ground stabilization require formal geotechnical investigation, laboratory validation, and certified engineering reports signed by registered professionals under written contract.
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  1. Acceptance &amp; Scope of Terms
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  By accessing, browsing, or utilizing the web portal of {COMPANY_INFO.name} (simcon.co.in), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and Conditions and our Privacy Policy. If you do not accept these terms, you should immediately discontinue the use of this portal.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  2. Proprietary Technical Content &amp; Intellectual Property
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-2">
                  All digital assets hosted on this domain—including but not limited to photographic project documentation, high-resolution test apparatus photography, NABL accreditation certificate previews, structural health graphs, geological inversion sections, company trademarks, logos, and technical copywriting—are the exclusive intellectual property of {COMPANY_INFO.name}.
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  No portion of this website may be copied, reproduced, deep-linked, framed, re-hosted, scraped via automated bots, or distributed for commercial competition without express prior written authorization from our board of directors.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  3. NABL Accredited Scope &amp; Test Standard Representation
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Testing parameter descriptions reference established Indian (IS), International (ASTM), British (BS), and IRC standards (e.g., IS 2720, IS 1892, IS 2131, ASTM D4945). Specific tests and parameter limits are governed by the formal scope granted to our respective accredited testing facilities (TC-5077 Gandhidham, TC-9050 Ahmedabad, TC-13273 Lucknow). Clients are encouraged to verify current valid scopes through the official NABL portal before tendering.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  4. Permitted Use &amp; Conduct
                </h2>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <li>You may view, print, and download technical service brochures and accreditation summaries solely for legitimate procurement, bidding, and contractor evaluation.</li>
                  <li>You agree not to disrupt, compromise, or conduct penetration vulnerability scans on this web infrastructure without prior written authorization.</li>
                  <li>You agree not to transmit false inquiries, impersonate authority representatives, or upload malicious payloads via contact forms.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  5. Tender Pre-Qualification &amp; Third-Party Materials
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Empanelment mentions and project client logos (such as NHAI, RVNL, MES, Adani, L&amp;T, Indian Railways) demonstrate verified contractor project histories. All third-party trademarks and corporate emblems remain the property of their respective statutory bodies or corporations.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  6. Limitation of Liability
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  To the maximum extent permitted by applicable Indian law, {COMPANY_INFO.name}, its directors, engineers, and employees shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of, or inability to use, this website, or any reliance placed upon unverified informational snippets on the portal.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  7. Governing Law &amp; Jurisdiction
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal disputes or claims arising out of the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Gandhidham (Kachchh) or Ahmedabad, Gujarat, India.
                </p>
              </div>
            </div>
          )}

          {/* POLICY 3: COOKIE POLICY */}
          {path === '/cookie-policy' && (
            <div className="space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm text-slate-700 leading-relaxed text-sm sm:text-base">
              <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-emerald-950">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-900 block mb-0.5 font-display">Zero Cross-Site Ad Tracking Guarantee</strong>
                  SIMCON Technology Pvt. Ltd. respects visitor privacy. We do not deploy third-party advertising cookies, cross-site tracking pixels, or commercial data exchange trackers on this corporate engineering portal.
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  1. What Are Cookies &amp; Web Storage?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Cookies are small alphanumeric text files stored on your computer or mobile device by websites you visit. They are widely used to facilitate website operation, improve responsiveness, and remember preferences across sessions. Modern web browsers also provide local storage and session storage mechanisms for client-side state management.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  2. Cookies We Utilize
                </h2>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="font-bold text-[#062B5C] text-sm sm:text-base flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Essential Technical &amp; Functional Cookies (Strictly Necessary)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      These lightweight tokens are necessary for core site performance. They remember active filter preferences in our Project Explorer, maintain mobile menu toggle states, handle smooth navigation transitions, and cache font loading to prevent layout shifts. They do not store personally identifiable records.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="font-bold text-[#062B5C] text-sm sm:text-base flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      Performance &amp; Diagnostic Telemetry
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      We may monitor aggregate, anonymous technical performance metrics (e.g., page load speeds, resource download times) to ensure high responsiveness across mobile and desktop connections throughout India.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  3. Third-Party Embedded Content &amp; Assets
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-2">
                  To provide an interactive engineering portal experience, some elements load from secure content delivery networks (CDNs):
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <li><strong>Interactive Office Maps:</strong> Our nationwide lab map utilizes OpenStreetMap tiles rendered via the Leaflet library. OpenStreetMap may log anonymous IP requests for tile bandwidth serving.</li>
                  <li><strong>Typography:</strong> Google Fonts CDN delivers modern typography assets (Plus Jakarta Sans) with minimal request logging for font caching.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#062B5C] mb-3">
                  4. How You Can Control or Disable Cookies
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-3">
                  You can configure or block cookies through your browser settings. Because our cookies are minimal and strictly functional, disabling them may alter UI animation and filter memory, but core content will remain accessible:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-600">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>Chrome:</strong> Settings → Privacy &amp; Security → Third-party cookies
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>Firefox:</strong> Options → Privacy &amp; Security → Enhanced Tracking Protection
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>Safari:</strong> Preferences → Privacy → Block all cookies
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>Edge:</strong> Settings → Cookies &amp; site permissions → Manage cookies
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Contact & Corporate Resolution Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1 max-w-lg">
              <h3 className="text-lg font-bold font-display text-[#062B5C]">
                Need Legal Clarification or Commercial Documentation?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Our compliance directors and quality management heads are available to address tender non-disclosure agreements and formal data protection queries.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <a
                href={`mailto:${COMPANY_INFO.officialEmail}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold font-display uppercase tracking-wider text-white bg-[#062B5C] hover:bg-[#1268B3] rounded-xl transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#D71920]" />
                <span>Email Legal Office</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold font-display uppercase tracking-wider text-[#062B5C] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <span>All Locations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Technical Collapsible: SEO & 301 Migration Directory */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <button
              type="button"
              onClick={() => setMigrationOpen(!migrationOpen)}
              className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-slate-50 transition-colors"
              aria-expanded={migrationOpen}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="p-2 rounded-lg bg-blue-50 text-[#1268B3] shrink-0">
                  <FileText className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold font-display text-[#062B5C] truncate">
                    Technical Architecture: SEO &amp; URL Migration Directory (301 Mappings)
                  </h4>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Permanent redirection index mapping legacy web routes to canonical URLs
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  migrationOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {migrationOpen && (
              <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50/50">
                <p className="text-xs text-slate-500 mb-4">
                  All historical indexed URLs from the legacy site have been mapped to their exact canonical modern equivalents with 301 Permanent Redirect headers.
                </p>

                <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white text-xs">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-[#F7F8FA] font-mono text-[11px] text-[#062B5C]">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Historical Legacy URL</th>
                        <th className="px-4 py-3 text-left font-bold">New Canonical URL</th>
                        <th className="px-4 py-3 text-left font-bold">Status</th>
                        <th className="px-4 py-3 text-left font-bold">Mapping Rationale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                      {URL_MIGRATION_MAP.map((rule, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="px-4 py-2 text-slate-600">{rule.oldUrl}</td>
                          <td className="px-4 py-2 text-[#1268B3] font-semibold">
                            <Link to={rule.newUrl} className="hover:underline flex items-center gap-1">
                              {rule.newUrl} <ArrowRight className="w-3 h-3" />
                            </Link>
                          </td>
                          <td className="px-4 py-2 text-emerald-700 font-bold">{rule.statusCode} Permanent</td>
                          <td className="px-4 py-2 text-slate-500">{rule.rationale}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { URL_MIGRATION_MAP } from '@/data/migration';
import { FileText, ArrowRight } from 'lucide-react';

export const Legal: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  let title = "Privacy Policy";
  if (path === "/terms") title = "Terms & Conditions";
  if (path === "/cookie-policy") title = "Cookie Policy";

  return (
    <div className="pt-[72px]">
      <section className="bg-[#062B5C] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
            CORPORATE GOVERNANCE
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display mt-2">
            {title}
          </h1>
          <p className="text-xs font-mono text-slate-300 mt-2">
            SIMCON Technology Pvt. Ltd. • Effective September 2024
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-[#536271] leading-relaxed">
          {path === '/privacy-policy' && (
            <>
              <div className="p-4 bg-[#F7F8FA] rounded-lg border border-slate-200 text-xs font-mono text-slate-600">
                [NOTICE]: This policy governs personal and technical data submitted through simcon.co.in.
              </div>
              <h2 className="text-xl font-bold font-display text-[#062B5C]">1. Data Collection & Processing</h2>
              <p>
                SIMCON Technology Pvt. Ltd. collects information voluntarily provided through project enquiry forms, career submissions, and direct corporate correspondence. We only collect data necessary to evaluate engineering proposals, test specifications, and employment qualifications.
              </p>
              <h2 className="text-xl font-bold font-display text-[#062B5C]">2. Non-Disclosure & Confidentiality</h2>
              <p>
                Borehole logs, laboratory test results, client site locations, and structural assessment findings are strictly treated as confidential intellectual property. We do not sell, barter, or distribute client technical records to third parties.
              </p>
              <h2 className="text-xl font-bold font-display text-[#062B5C]">3. Contact for Inquiries</h2>
              <p>
                For data access requests or privacy questions, write to: <a href="mailto:info@simcon.co.in" className="text-[#1268B3] underline">info@simcon.co.in</a>.
              </p>
            </>
          )}

          {path === '/terms' && (
            <>
              <div className="p-4 bg-[#F7F8FA] rounded-lg border border-slate-200 text-xs font-mono text-slate-600">
                [NOTICE]: Terms and conditions governing the use of SIMCON corporate web assets.
              </div>
              <h2 className="text-xl font-bold font-display text-[#062B5C]">1. Proprietary Technical Content</h2>
              <p>
                All photographic assets, test parameter breakdowns, diagrams, NABL certificate previews, and case study documentation displayed on this website are the intellectual property of SIMCON Technology Pvt. Ltd. Unauthorized reproduction or commercial re-hosting is prohibited.
              </p>
              <h2 className="text-xl font-bold font-display text-[#062B5C]">2. Engineering Advice Disclaimer</h2>
              <p>
                Technical papers, parameter tables, and case descriptions published on this website are provided for informational context. Site-specific foundation design, pile capacity, and ground stabilization require formal geotechnical investigation and authorized stamped reports issued under contract.
              </p>
            </>
          )}

          {path === '/cookie-policy' && (
            <>
              <div className="p-4 bg-[#F7F8FA] rounded-lg border border-slate-200 text-xs font-mono text-slate-600">
                [NOTICE]: Information regarding minimal cookie utilization.
              </div>
              <h2 className="text-xl font-bold font-display text-[#062B5C]">1. Essential Functional Cookies</h2>
              <p>
                Our static website utilizes minimal essential session storage to preserve navigation state, project filter preferences, and modal controls. We do not track users across third-party networks for commercial advertising.
              </p>
            </>
          )}

          {/* Section: URL Migration Plan & Redirection Directory */}
          <div className="mt-12 pt-10 border-t border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-[#1268B3]" />
              <h2 className="text-lg font-bold font-display text-[#062B5C]">
                SEO & URL Migration Directory (301 Mappings)
              </h2>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              In accordance with sections 62 & 63 of the architecture specification, all historical indexed URLs from the legacy site have been mapped to their exact canonical modern equivalents.
            </p>

            <div className="overflow-x-auto rounded-lg border border-slate-200 text-xs">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-[#F7F8FA] font-mono text-[11px] text-[#062B5C]">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Historical Legacy URL</th>
                    <th className="px-4 py-3 text-left font-bold">New Canonical URL</th>
                    <th className="px-4 py-3 text-left font-bold">Status</th>
                    <th className="px-4 py-3 text-left font-bold">Mapping Rationale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-mono text-[11px]">
                  {URL_MIGRATION_MAP.map((rule, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="px-4 py-2.5 text-slate-600">{rule.oldUrl}</td>
                      <td className="px-4 py-2.5 text-[#1268B3] font-semibold">
                        <Link to={rule.newUrl} className="hover:underline flex items-center gap-1">
                          {rule.newUrl} <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                      <td className="px-4 py-2.5 text-emerald-700 font-bold">{rule.statusCode} Permanent</td>
                      <td className="px-4 py-2.5 text-slate-500">{rule.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

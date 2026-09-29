import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SEOHead } from '@/components/common/SEOHead';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu
} from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find related projects
  const relatedProjects = PROJECTS.filter(p => service.relatedProjectSlugs.includes(p.slug));

  return (
    <div className="pt-[72px]">
      <SEOHead
        customSeo={{
          title: service.seoTitle,
          description: service.seoDescription,
          canonical: `https://www.simcon.co.in/services/${service.slug}`
        }}
      />

      {/* Breadcrumbs & Hero Header */}
      <section className="bg-[#062B5C] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-[#2B7EC8] font-bold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/10 rounded text-[11px] font-mono text-[#2B7EC8] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                DISCIPLINE {service.number} · {service.category}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.12]">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>

              {service.standardsAndCodes && (
                <div className="pt-2 flex flex-wrap gap-2 items-center text-xs font-mono text-slate-300">
                  <span className="text-slate-400">Tested in Accordance with:</span>
                  {service.standardsAndCodes.map((code, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white/10 rounded text-[11px]">
                      {code}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Description & Scope */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D71920] font-bold block">
              TECHNICAL OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#062B5C]">
              Methodology & Technical Approach
            </h2>
            <p className="text-sm sm:text-base text-[#536271] leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="pt-4">
              <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-[#062B5C] mb-3">
                Principal Capabilities & Field Inclusions:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.keyCapabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#536271] bg-[#F7F8FA] p-3 rounded border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#1268B3] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Disciplines & Testing Breakdown (Soil Lab, Rock Lab, Foundation Modeling etc.) */}
      {service.subDisciplines && (
        <section className="py-20 bg-[#F7F8FA] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              technicalLabel="TESTING PROTOCOLS"
              title="Detailed Parameter Breakdown"
              description="NABL-accredited laboratory procedures and analytical categories executed by SIMCON specialists."
            />

            <div className="space-y-8">
              {service.subDisciplines.map((sub, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-[#062B5C] text-white flex items-center justify-center font-mono font-bold text-xs">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-[#062B5C]">
                        {sub.title}
                      </h3>
                      <p className="text-xs text-slate-500">{sub.description}</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {sub.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#536271] p-2 bg-[#F7F8FA] rounded border border-slate-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] shrink-0 mt-1.5" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Software Tools Table */}
      {service.softwareTools && (
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D71920] font-bold block mb-1">
                COMPUTATIONAL SUITE
              </span>
              <h2 className="text-2xl font-bold font-display text-[#062B5C]">
                Software Expertise & Numerical Tools
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Industry-standard finite element, wave velocity, and GIS platforms utilized for geotechnical interpretation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.softwareTools.map((tool, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#F7F8FA] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#1268B3]" />
                    <span className="font-mono font-bold text-sm text-[#062B5C]">{tool.name}</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-6">{tool.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-[#F7F8FA] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D71920] font-bold block mb-1">
                  CASE STUDIES
                </span>
                <h2 className="text-2xl font-bold font-display text-[#062B5C]">
                  Related Infrastructure Projects
                </h2>
              </div>
              <Link to="/projects" className="text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C]">
                All Projects →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map(proj => (
                <Link
                  key={proj.id}
                  to={`/projects/${proj.slug}`}
                  className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 bg-slate-900 overflow-hidden">
                      <img
                        src={proj.featuredImage}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-0.5 bg-[#062B5C]/90 text-white text-[10px] font-mono rounded">
                          {proj.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 space-y-2">
                      <h3 className="font-display font-bold text-sm text-[#062B5C] group-hover:text-[#1268B3] transition-colors line-clamp-2">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2">{proj.description}</p>
                    </div>
                  </div>
                  <div className="p-5 pt-0 text-[11px] font-mono text-[#1268B3] font-semibold">
                    Read Case Study →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Box */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#062B5C] text-white p-8 sm:p-12 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono text-[#2B7EC8] uppercase font-bold tracking-wider">
                TECHNICAL ENQUIRY
              </span>
              <h3 className="text-2xl font-bold font-display">
                Require {service.title} for your site?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Contact our regional testing laboratory in Gandhidham, Ahmedabad, Lucknow, or Indore to discuss testing timelines and quotation.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-[#062B5C] bg-white hover:bg-slate-100 rounded transition-colors shrink-0 shadow-md"
            >
              <span>Request Quotation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

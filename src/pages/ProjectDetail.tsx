import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '@/data/projects';
import { SEOHead } from '@/components/common/SEOHead';
import { 
  Building, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Related projects in the same category
  const relatedProjects = PROJECTS.filter(
    p => p.id !== project.id && (p.category === project.category || Math.random() > 0.5)
  ).slice(0, 3);

  return (
    <div className="pt-[72px]">
      <SEOHead
        customSeo={{
          title: project.seoTitle || `${project.title} | SIMCON Case Study`,
          description: project.seoDescription || project.description,
          canonical: `https://www.simcon.co.in/projects/${project.slug}`
        }}
      />

      {/* Header & Breadcrumbs */}
      <section className="bg-[#062B5C] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-white">Projects</Link>
            <span>/</span>
            <span className="text-[#2B7EC8] font-bold truncate max-w-xs">{project.title}</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded text-[11px] font-mono text-[#2B7EC8] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
              CASE STUDY · {project.category}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.12]">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Metadata Ribbon */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
            {project.client && (
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase text-slate-400 block flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#1268B3]" /> Client / Authority
                </span>
                <span className="font-bold text-[#062B5C] text-sm block">
                  {project.client}
                </span>
              </div>
            )}

            {project.location && (
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase text-slate-400 block flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1268B3]" /> Location
                </span>
                <span className="font-bold text-[#062B5C] text-sm block">
                  {project.location}
                </span>
              </div>
            )}

            {project.year && (
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase text-slate-400 block flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#1268B3]" /> Engagement Period
                </span>
                <span className="font-bold text-[#062B5C] text-sm block">
                  {project.year}
                </span>
              </div>
            )}

            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase text-slate-400 block flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1268B3]" /> Quality Assurance
              </span>
              <span className="font-bold text-[#062B5C] text-sm block">
                NABL ISO/IEC 17025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Photographic Narrative & Scope */}
      <section className="py-16 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-8">
              {/* Featured Image */}
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-900">
                <img
                  src={project.featuredImage}
                  alt={project.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Technical Scope Breakdown */}
              {project.scope && (
                <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#D71920] font-bold block">
                    TECHNICAL DELIVERABLES
                  </span>
                  <h2 className="text-xl font-bold font-display text-[#062B5C]">
                    SIMCON Engineering Scope
                  </h2>
                  <ul className="space-y-2.5">
                    {project.scope.map((item, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-[#536271] flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#1268B3] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Project Outcome */}
              {project.outcome && (
                <div className="p-6 rounded-xl bg-blue-50 border border-[#1268B3]/20 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#1268B3] font-bold block">
                    ENGINEERING OUTCOME
                  </span>
                  <p className="text-sm text-[#062B5C] font-medium leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}

              {/* Gallery if present */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold block">
                    ADDITIONAL ON-SITE PHOTOGRAPHY
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    {project.gallery.slice(1).map((img, i) => (
                      <div key={i} className="rounded-lg overflow-hidden border border-slate-200 h-48 bg-slate-100">
                        <img
                          src={img}
                          alt={`${project.title} on-site photo ${i+2}`}
                          className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              {/* Services Provided Card */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#062B5C] font-bold block">
                  Services Provided on this Project
                </span>
                <ul className="space-y-2">
                  {project.services.map((srv, i) => (
                    <li key={i} className="p-2.5 rounded bg-[#F7F8FA] border border-slate-100 text-xs font-mono text-[#062B5C] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Discussion Prompt Card */}
              <div className="bg-[#062B5C] text-white p-6 sm:p-8 rounded-xl space-y-4">
                <span className="text-xs font-mono uppercase text-[#2B7EC8] tracking-widest font-bold block">
                  COLLABORATE
                </span>
                <h3 className="text-xl font-bold font-display">
                  Planning a similar infrastructure development?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our geotechnical directors can review your site requirements, bore plan recommendations, or testing schedules.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold font-mono uppercase tracking-wider text-[#062B5C] bg-white hover:bg-slate-100 rounded transition-colors"
                  >
                    <span>Enquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Return to projects link */}
              <div className="pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#1268B3] hover:text-[#062B5C]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Project Explorer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold font-display text-[#062B5C] mb-6">
              Other Infrastructure Case Studies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map(rel => (
                <Link
                  key={rel.id}
                  to={`/projects/${rel.slug}`}
                  className="bg-[#F7F8FA] rounded-lg border border-slate-200 overflow-hidden hover:border-[#062B5C] transition-colors p-4 block group"
                >
                  <div className="h-36 bg-slate-900 rounded overflow-hidden mb-3">
                    <img
                      src={rel.featuredImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-[#D71920] uppercase font-bold block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-display font-bold text-sm text-[#062B5C] group-hover:text-[#1268B3] transition-colors line-clamp-1">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {rel.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

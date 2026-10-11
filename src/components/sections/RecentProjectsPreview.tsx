import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { SectionHeading } from '@/components/common/SectionHeading';

export const RecentProjectsPreview: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            technicalLabel="PROJECT ARCHIVE"
            title="Proven Track Record in Complex Ground."
            description="A curated look into our recent national engineering testing and foundation investigation engagements."
            className="mb-0!"
          />
          <Link
            to="/projects"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] uppercase tracking-wider transition-colors group"
          >
            <span>Browse All Projects (6,480+)</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((proj) => (
            <Link
              key={proj.id}
              to={`/projects/${proj.slug}`}
              className="group relative h-[270px] sm:h-[285px] lg:h-[295px] xl:h-[320px] 2xl:h-[340px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-end border border-slate-200/80 bg-slate-900"
            >
              {/* Full Background Image */}
              <img
                src={proj.featuredImage}
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Category Pill Badge - Crisp, solid, non-blurred */}
              <div className="absolute top-2.5 left-2.5 z-30 pointer-events-none">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#062B5C] text-white border border-white/30 shadow-md">
                  {proj.category}
                </span>
              </div>

              {/* Bottom: Solid Theme Navy Strip (Visible ONLY in normal state, hides on hover) */}
              <div className="relative z-10 bg-[#062B5C] px-3.5 py-3 text-white transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                <h3 className="font-display font-bold text-xs sm:text-sm text-white leading-snug line-clamp-2">
                  {proj.title}
                </h3>
              </div>

              {/* Full Card Hover Overlay with Lighter Transparent Shade (Shows Title, Location, Years & Button) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062B5C]/85 via-[#062B5C]/55 to-[#062B5C]/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-20 flex flex-col justify-end p-4 text-white pointer-events-none">
                {/* Project Name */}
                <h3 className="font-display font-extrabold text-sm sm:text-base text-white leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                  {proj.title}
                </h3>

                {/* Location & Years */}
                <p className="text-xs text-sky-200 font-semibold mt-1.5 flex items-center gap-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                  <MapPin className="w-3.5 h-3.5 text-[#2B7EC8] shrink-0" />
                  <span>{proj.location?.split(',')[0]} {proj.year ? `• ${proj.year}` : ''}</span>
                </p>

                {/* Outlined Pill Button (Matching reference image) */}
                <div className="mt-3 pt-2.5 border-t border-white/25">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-white/90 text-white text-[11px] font-mono font-bold shadow-xs transition-all group-hover:bg-white group-hover:text-[#062B5C]">
                    <span>View Project</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PROJECTS, PROJECT_CATEGORIES, ProjectCategory } from '@/data/projects';
import { Search, MapPin, Building, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as ProjectCategory || 'All';

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    PROJECT_CATEGORIES.includes(initialCategory) ? initialCategory : 'All'
  );
  const [searchQuery, setSearchQuery] = useState('');

  // Sync category state with URL parameters
  const handleCategoryChange = (cat: ProjectCategory) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  // Filter projects based on active category and query
  const filteredProjects = PROJECTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.client && p.client.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.location && p.location.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#062B5C] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
              INFRASTRUCTURE PORTFOLIO
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-[1.12]">
              6,480+ Projects Completed Across India.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed pt-2">
              From the Mumbai–Ahmedabad High Speed Bullet Train viaducts and Himalayan rail tunnels to mega container terminals and renewable energy parks.
            </p>
          </div>
        </div>
      </section>

      {/* Explorer Controls: Categories & Search */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-[68px] z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Scrollable Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline-block">
                Sector:
              </span>
              {PROJECT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 py-1.5 text-xs font-mono rounded whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#062B5C] text-white font-bold shadow-2xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or clients..."
                className="w-full pl-9 pr-4 py-1.5 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#062B5C] bg-[#F7F8FA]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-mono text-slate-500 uppercase">
              Showing {filteredProjects.length} of {PROJECTS.length} Featured Case Studies
            </span>
            {activeCategory !== 'All' && (
              <button
                onClick={() => handleCategoryChange('All')}
                className="text-xs font-mono text-[#D71920] hover:underline"
              >
                Clear Sector Filter
              </button>
            )}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-xl border border-slate-200 max-w-md mx-auto space-y-3">
              <p className="text-sm text-slate-600 font-medium">No projects matched your criteria.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="text-xs font-mono text-[#1268B3] underline"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-[#1268B3]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Featured Image */}
                    <div className="relative h-56 bg-slate-900 overflow-hidden">
                      <img
                        src={proj.featuredImage}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-[#062B5C]/90 backdrop-blur-xs text-white text-[10px] font-mono rounded font-medium">
                          {proj.category}
                        </span>
                      </div>
                      {proj.year && (
                        <div className="absolute bottom-3 right-3">
                          <span className="px-2 py-0.5 bg-black/60 text-slate-200 text-[10px] font-mono rounded">
                            {proj.year}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="font-display font-bold text-base text-[#062B5C] group-hover:text-[#1268B3] transition-colors leading-snug">
                        {proj.title}
                      </h3>

                      {proj.client && (
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="font-mono text-[11px] font-medium truncate">{proj.client}</span>
                        </div>
                      )}

                      {proj.location && (
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="text-[11px] truncate">{proj.location}</span>
                        </div>
                      )}

                      <p className="text-xs text-[#536271] line-clamp-3 leading-relaxed pt-1">
                        {proj.description}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {proj.services.slice(0, 3).map((s, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-[#F7F8FA] border border-slate-100 rounded text-[10px] font-mono text-[#062B5C]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C] group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[10px] font-mono text-slate-400">Verified SIMCON Project</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

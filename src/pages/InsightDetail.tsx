import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { INSIGHTS } from '@/data/insights';
import { SEOHead } from '@/components/common/SEOHead';
import { ArrowLeft, Clock, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export const InsightDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = INSIGHTS.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <div className="pt-[72px]">
      <SEOHead
        customSeo={{
          title: `${article.title} | SIMCON Engineering Insights`,
          description: article.summary,
          canonical: `https://www.simcon.co.in/insights/${article.slug}`
        }}
      />

      {/* Header */}
      <section className="bg-[#062B5C] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/insights" className="hover:text-white">Insights</Link>
            <span>/</span>
            <span className="text-[#2B7EC8] font-bold truncate max-w-xs">{article.title}</span>
          </nav>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-white/10 rounded text-[11px] font-mono text-[#2B7EC8] uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </span>
              <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {article.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.12]">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {article.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Key Takeaways Callout */}
          <div className="p-6 rounded-xl bg-[#F7F8FA] border border-slate-200 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#062B5C] font-bold block">
              Core Technical Summary:
            </span>
            <ul className="space-y-2">
              {article.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#536271]">
                  <CheckCircle2 className="w-4 h-4 text-[#1268B3] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#17212B] leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] hover:text-[#062B5C]"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> All Technical Briefings
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#062B5C] hover:bg-[#1268B3] px-4 py-2 rounded transition-colors"
            >
              <span>Consult Our Authors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

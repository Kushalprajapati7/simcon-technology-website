import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Layers, FolderKanban } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="pt-[72px] min-h-[80vh] flex items-center justify-center bg-[#F7F8FA] relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded text-xs font-mono font-bold text-[#D71920] shadow-2xs">
          <span>ERROR 404 // DISCONTINUITY DETECTED</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-[#062B5C] leading-tight">
          THIS PATH DOESN'T LEAD ANYWHERE.
        </h1>

        <p className="text-sm sm:text-base text-[#536271] max-w-lg mx-auto leading-relaxed">
          The requested coordinate or document address could not be resolved in the SIMCON technical repository.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-white bg-[#062B5C] hover:bg-[#1268B3] rounded transition-colors shadow-sm"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-[#062B5C] bg-white hover:bg-slate-50 border border-slate-300 rounded transition-colors"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Explore Services</span>
          </Link>
          <Link
            to="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-[#062B5C] bg-white hover:bg-slate-50 border border-slate-300 rounded transition-colors"
          >
            <FolderKanban className="w-3.5 h-3.5" />
            <span>View Projects</span>
          </Link>
        </div>

        <div className="pt-8 text-xs font-mono text-slate-400">
          SIMCON TECHNOLOGY PVT. LTD. // ROUTE SYSTEM
        </div>
      </div>
    </div>
  );
};

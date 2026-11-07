import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const PageLoader: React.FC = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Make visible immediately on mount or when pathname changes
    setVisible(true);
    setIsFading(false);

    // Keep visible for 400ms, then start the smooth 300ms fade
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 400);

    // Completely unmount after fade transition finishes (400ms + 300ms = 700ms total)
    const hideTimer = setTimeout(() => {
      setVisible(false);
      setIsFading(false);
    }, 700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Loading page"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/65 backdrop-blur-md transition-opacity duration-300 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      {/* Soft Ambient Radial Glow Backdrop */}
      <div className="absolute w-72 h-72 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

      {/* Main Brand Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* SIMCON Official Logo with Gentle Pulse */}
        <div className="p-3">
          <img
            src="/assets/logo/Simcon_logo.png"
            alt="SIMCON Technology Pvt. Ltd."
            className="h-11 sm:h-12 md:h-14 w-auto object-contain animate-simcon-pulse select-none drop-shadow-sm"
          />
        </div>

        {/* Engineering Dual-Color Progress Track */}
        <div className="w-44 sm:w-52 h-1 bg-slate-200/80 rounded-full overflow-hidden mt-5 relative shadow-inner">
          <div className="animate-simcon-progress rounded-full bg-gradient-to-r from-[#1268B3] via-[#062B5C] to-[#D71920]" />
        </div>
      </div>
    </div>
  );
};

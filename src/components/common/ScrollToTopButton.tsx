import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 420);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`rounded-full bg-white text-[#062B5C] hover:bg-[#062B5C] hover:text-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-[#1268B3] shrink-0 ${
        isVisible
          ? 'w-9 h-9 sm:w-10 sm:h-10 opacity-100 scale-100 pointer-events-auto mr-0'
          : 'w-0 h-0 opacity-0 scale-75 pointer-events-none overflow-hidden border-0 shadow-none p-0 -mr-2'
      }`}
    >
      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5" strokeWidth={2.5} />
    </button>
  );
};

import React from 'react';

interface SectionHeadingProps {
  technicalLabel?: string;
  title: string;
  description?: string;
  theme?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  technicalLabel,
  title,
  description,
  theme = 'light',
  align = 'left',
  className = ''
}) => {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div className={`reveal reveal-up mb-10 md:mb-14 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {technicalLabel && (
        <div className={`flex items-center gap-2 mb-2 ${isCenter ? 'justify-center' : ''}`}>
          <span className={`text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase block ${
            isDark ? 'text-sky-300' : 'text-[#1268B3]'
          }`}>
            {technicalLabel}
          </span>
        </div>
      )}
      
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display leading-[1.14] ${
          isDark ? 'text-white' : 'text-[#062B5C]'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-3.5 text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-[#536271]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

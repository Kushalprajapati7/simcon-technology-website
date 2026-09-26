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
    <div className={`mb-10 md:mb-14 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {technicalLabel && (
        <div className="flex items-center gap-2 mb-3">
          {isCenter && <div className={`h-[1px] w-6 ${isDark ? 'bg-[#1268B3]' : 'bg-[#D71920]'}`} />}
          <span
            className={`technical-tag font-mono font-medium tracking-[0.16em] uppercase ${
              isDark ? 'text-[#2B7EC8]' : 'text-[#D71920]'
            }`}
          >
            {technicalLabel}
          </span>
          <div className={`h-[1px] w-8 ${isDark ? 'bg-[#1268B3]/50' : 'bg-[#062B5C]/20'}`} />
        </div>
      )}
      
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-display leading-[1.15] ${
          isDark ? 'text-white' : 'text-[#062B5C]'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-[#536271]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

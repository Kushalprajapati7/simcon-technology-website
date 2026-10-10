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

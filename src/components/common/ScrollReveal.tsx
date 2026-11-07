import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'up' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number; // In seconds, e.g. 0.1, 0.2
  className?: string;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'up',
  delay,
  className = '',
  as: Component = 'div',
}) => {
  const variantClass = {
    up: 'reveal-up',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
    fade: 'reveal-fade',
  }[variant];

  const style = delay ? ({ '--delay': `${delay}s` } as React.CSSProperties) : undefined;

  return (
    <Component className={`reveal ${variantClass} ${className}`} style={style}>
      {children}
    </Component>
  );
};

interface ScrollImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  delay?: number;
  loading?: 'lazy' | 'eager';
}

export const ScrollImageReveal: React.FC<ScrollImageRevealProps> = ({
  src,
  alt,
  className = '',
  imageClassName = '',
  delay,
  loading = 'lazy',
}) => {
  const style = delay ? ({ '--delay': `${delay}s` } as React.CSSProperties) : undefined;

  return (
    <div className={`reveal-img-wrap reveal ${className}`} style={style}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`reveal-img ${imageClassName}`}
      />
    </div>
  );
};

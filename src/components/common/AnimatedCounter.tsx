import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  formatIndian?: boolean;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2200,
  prefix = '',
  suffix = '+',
  formatIndian = true,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check if element is already within viewport on initial render/reload
    const checkVisibility = () => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom >= 0;
      if (inView) {
        setHasStarted(true);
        return true;
      }
      return false;
    };

    if (checkVisibility()) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    // Smooth ease-out exponential / cubic curve
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3.5);
    };

    const updateCounter = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const nextValue = Math.floor(easedProgress * end);
      setCount(nextValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, end, duration]);

  const formattedValue = formatIndian
    ? count.toLocaleString('en-IN')
    : count.toLocaleString();

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};

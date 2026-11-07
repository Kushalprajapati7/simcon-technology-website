import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SELECTOR = '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, .reveal-img, [data-reveal]';

export const ScrollObserver: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        el.classList.add('is-revealed');
        el.querySelectorAll('.reveal-img').forEach((img) => img.classList.add('is-revealed'));
      });
      return;
    }

    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    // Create the IntersectionObserver instance
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('is-revealed');

            // Also mark any nested images inside as revealed
            el.querySelectorAll('.reveal-img').forEach((img) => img.classList.add('is-revealed'));

            observer?.unobserve(el);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -4% 0px',
        threshold: 0.05,
      }
    );

    const observeUnrevealed = () => {
      const activeObserver = observer;
      if (!activeObserver) return;
      const elements = document.querySelectorAll(SELECTOR);
      elements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          activeObserver.observe(el);
        }
      });
    };

    // Initial check after paint (small delay so initial CSS transform/opacity applies before observing)
    timerId = setTimeout(() => {
      observeUnrevealed();
    }, 60);

    // Watch for newly mounted nodes (dynamic imports, route changes, re-renders)
    mutationObserver = new MutationObserver(() => {
      observeUnrevealed();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Proper React useEffect cleanup!
    return () => {
      if (timerId) clearTimeout(timerId);
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      if (mutationObserver) {
        mutationObserver.disconnect();
        mutationObserver = null;
      }
    };
  }, [pathname, search]);

  return null;
};

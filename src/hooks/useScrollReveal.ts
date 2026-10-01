import { useEffect } from 'react';

/**
 * Custom hook to initialize lightweight IntersectionObserver-based scroll reveals.
 * Automatically respects prefers-reduced-motion.
 */
export function useScrollReveal(dependencies: unknown[] = []) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const elements = document.querySelectorAll('.reveal-item:not(.reveal-visible)');

    if (prefersReducedMotion) {
      elements.forEach((el) => {
        el.classList.add('reveal-visible');
      });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('reveal-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) {
              el.style.transitionDelay = `${delay}ms`;
            }
            el.classList.add('reveal-visible');
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, dependencies);
}

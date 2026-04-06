import { useEffect } from 'react';

/** Kad se učita stranica sa URL-om .../#pricing, skroluj do sekcije */
export function usePricingHashScroll() {
  useEffect(() => {
    if (window.location.hash !== '#pricing') return;
    const id = window.requestAnimationFrame(() => {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => window.cancelAnimationFrame(id);
  }, []);
}

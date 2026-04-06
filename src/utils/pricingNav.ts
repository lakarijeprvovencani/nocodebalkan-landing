import type { MouseEvent } from 'react';

export const PRICING_HREF = '/#pricing';

/** Ako postoji sekcija #pricing u DOM-u — smooth scroll; inače browser ide na /#pricing */
export function handlePricingAnchorClick(e: MouseEvent<HTMLAnchorElement>): void {
  const el = document.getElementById('pricing');
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/** Za dugmad (nema default ponašanja linka) */
export function navigateToPricingSection(): void {
  const el = document.getElementById('pricing');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.location.href = PRICING_HREF;
  }
}

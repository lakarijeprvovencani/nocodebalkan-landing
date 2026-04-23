import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Calendar } from 'lucide-react';

// Tri različita checkout URL-a (različit put / ct / enroll / price_id na kraju)
const CHECKOUT_MONTHLY =
  'https://nocodebalkan.thinkific.com/enroll/3730160?price_id=4682222';
const CHECKOUT_YEARLY =
  'https://nocodebalkan.thinkific.com/enroll/3623700?price_id=4562634';
const CHECKOUT_LIFETIME =
  'https://nocodebalkan.thinkific.com/enroll/3590656?price_id=4526401';

const CALENDLY_CONSULT_URL = 'https://calendly.com/no-code-asistent/30min';

const features = [
  'Pristup svim postojećim i novim kursevima',
  'Pristup zatvorenoj chat grupi',
  'Pristup svakom live predavanju samo za članove',
  'Komunikacija i podrška predavača',
  'Komunikacija i podrška ostalih polaznika',
  'Poslovne prilike',
];

type PlanTier = 'standard' | 'hero' | 'premium';

type Plan = {
  id: string;
  title: string;
  price: string;
  priceSuffix: string;
  subPrice?: string;
  anchor?: string;
  savingsPill?: string;
  badge?: { label: string; icon: 'sparkles' | 'crown' };
  ctaText: string;
  footnote: string;
  href: string;
  fbValue: number;
  tier: PlanTier;
};

const plans: Plan[] = [
  {
    id: 'monthly',
    title: 'Mesečna pretplata',
    price: '$100',
    priceSuffix: 'mesečno',
    ctaText: 'Započni učenje',
    footnote:
      'P.s. Članarina se obnavlja automatski svaki mesec i može da se prekine u svakom trenutku.',
    href: CHECKOUT_MONTHLY,
    fbValue: 100,
    tier: 'standard',
  },
  {
    id: 'yearly',
    title: 'Godišnja pretplata',
    price: '$799',
    priceSuffix: '',
    badge: { label: 'Najpopularnije', icon: 'sparkles' },
    ctaText: 'Obezbedi godišnji pristup',
    footnote: '',
    href: CHECKOUT_YEARLY,
    fbValue: 799,
    tier: 'hero',
  },
  {
    id: 'lifetime',
    title: 'Lifetime',
    price: '$1499',
    priceSuffix: 'jednokratno',
    ctaText: 'Obezbedi doživotan pristup',
    footnote: 'P.s. Jednokratno plaćanje — doživotni pristup bez obnavljanja pretplate.',
    href: CHECKOUT_LIFETIME,
    fbValue: 1499,
    tier: 'standard',
  },
];

const PricingSection: React.FC = () => {
  const trackCheckout = (value: number) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Pricing Section CTA',
        content_category: 'Membership',
        value,
        currency: 'USD',
      });
    }
  };

  return (
    <section id="pricing" className="py-12 md:py-24 bg-gray-900 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute top-1/4 -right-20 w-40 h-40 bg-purple-700/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-20 w-40 h-40 bg-blue-700/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-8 md:mb-12">
          <p className="text-lg md:text-2xl text-gray-400 italic mb-3 md:mb-4">Sve je ovo super, ali...</p>
          <h2 className="text-2xl md:text-5xl font-bold text-purple-500 mb-6 md:mb-8">
            Koja je cena, je l&apos; te to muči?
          </h2>
          <p className="text-base md:text-xl text-gray-300 mb-3 md:mb-4 max-w-3xl mx-auto">
            Tri načina da uđeš u zajednicu — mesečno, godišnje ili jednom zauvek. Isti sadržaj i pogodnosti.
          </p>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
            I da, imaš pristup svemu, svakom kursu bez ikakvih skrivenih troškova.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-8 lg:gap-6 items-stretch pt-6 lg:pt-10">
          {plans.map((plan, planIndex) => {
            const isHero = plan.tier === 'hero';
            const isStandard = plan.tier === 'standard';
            const isPremium = plan.tier === 'premium';

            // Border glow styling per tier
            const glowClass = isHero
              ? 'bg-gradient-to-r from-pink-500 via-[#FF0054] to-purple-600 opacity-90 blur-md'
              : isPremium
              ? 'bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 opacity-70 blur'
              : 'bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 opacity-30 blur-sm';

            // Card container: hero is lifted and scaled on desktop
            const cardWrapperClass = [
              'relative group',
              isHero ? 'lg:scale-[1.05] lg:z-10' : '',
            ].join(' ');

            // Inner card ring for hero to make it pop extra
            const innerRingClass = isHero
              ? 'ring-2 ring-[#FF0054]/60 shadow-[0_0_40px_-8px_rgba(255,0,84,0.45)]'
              : isPremium
              ? 'ring-1 ring-purple-400/40'
              : 'ring-1 ring-gray-700/60';

            // CTA styling per tier
            const ctaBaseClass =
              'inline-flex items-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg font-medium rounded-xl shadow-lg transition-all duration-300 group/btn w-full justify-center';

            let ctaStyle: React.CSSProperties = {};
            let ctaExtraClass = '';
            if (isHero) {
              ctaStyle = { background: '#FF0054' };
              ctaExtraClass = 'text-white hover:opacity-90';
            } else if (isPremium) {
              ctaExtraClass =
                'text-white bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 hover:to-violet-400';
            } else {
              ctaExtraClass =
                'text-gray-200 bg-transparent border border-gray-500 hover:border-gray-300 hover:bg-gray-700/40';
            }

            const badgeClass = isHero
              ? 'bg-gradient-to-r from-pink-500 to-[#FF0054] text-white shadow-lg shadow-pink-500/30'
              : 'bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-500/30';

            return (
              <motion.div
                key={plan.id}
                className={cardWrapperClass}
                transition={{ delay: 0.1 * planIndex }}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap ${badgeClass}`}
                    >
                      <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      {plan.badge.label}
                    </div>
                  </div>
                )}

                <motion.div
                  className={`absolute -inset-0.5 rounded-2xl transition duration-1000 group-hover:duration-200 ${glowClass}`}
                  animate={
                    isHero
                      ? {
                          backgroundPosition: ['0% 0%', '100% 100%'],
                          scale: [1, 1.02, 1],
                        }
                      : undefined
                  }
                  transition={
                    isHero
                      ? {
                          duration: 8,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }
                      : undefined
                  }
                />

                <div
                  className={`relative bg-gray-800/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 h-full flex flex-col ${innerRingClass}`}
                >
                  <div className="text-center mb-6 md:mb-8">
                    <h3 className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6">{plan.title}</h3>

                    <div
                      className={`inline-flex items-baseline justify-center gap-2 ${
                        isStandard
                          ? 'text-gray-100'
                          : 'bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent'
                      }`}
                    >
                      <span className="text-3xl md:text-5xl font-bold">{plan.price}</span>
                      {plan.priceSuffix ? (
                        <span className="text-base md:text-xl">{plan.priceSuffix}</span>
                      ) : null}
                    </div>

                    {plan.subPrice && (
                      <p className="mt-2 text-xs md:text-sm text-gray-400">{plan.subPrice}</p>
                    )}

                    {plan.savingsPill && (
                      <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF0054]/15 border border-[#FF0054]/40 text-[#FF0054] text-xs md:text-sm font-semibold">
                        {plan.savingsPill}
                      </div>
                    )}

                    {plan.anchor && !plan.savingsPill && (
                      <p
                        className={`mt-3 text-xs md:text-sm ${
                          isPremium ? 'text-purple-300 font-medium' : 'text-gray-400'
                        }`}
                      >
                        {plan.anchor}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-1">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 md:gap-4"
                        transition={{ delay: 0.05 * index }}
                      >
                        <motion.div
                          className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center ${
                            isHero
                              ? 'bg-gradient-to-r from-[#FF0054] to-pink-500'
                              : isPremium
                              ? 'bg-gradient-to-r from-purple-600 to-violet-500'
                              : 'bg-gray-700'
                          }`}
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Check className="w-3 h-3 md:w-5 md:h-5 text-white" />
                        </motion.div>
                        <span className="text-sm md:text-base text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center mt-auto">
                    {plan.footnote ? (
                      <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6">{plan.footnote}</p>
                    ) : null}
                    <motion.a
                      href={plan.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackCheckout(plan.fbValue)}
                      style={ctaStyle}
                      className={`${ctaBaseClass} ${ctaExtraClass}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.ctaText}
                      <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a
                      href={CALENDLY_CONSULT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center justify-center gap-1.5 md:gap-2 w-full px-2 py-3 md:px-3 md:py-3.5 text-purple-50 text-[11px] md:text-sm font-semibold rounded-xl border-2 border-purple-400/70 bg-purple-500/10 hover:bg-purple-500/25 hover:border-purple-300 transition-all duration-300 group/consult shadow-sm shadow-purple-500/10"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-300 flex-shrink-0" />
                      <span className="whitespace-nowrap">Pitanja? Zakaži 15 min besplatno</span>
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 group-hover/consult:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

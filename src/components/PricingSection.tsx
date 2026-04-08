import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

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

type Plan = {
  id: string;
  title: string;
  price: string;
  priceSuffix: string;
  footnote: string;
  href: string;
  fbValue: number;
};

const plans: Plan[] = [
  {
    id: 'monthly',
    title: 'Mesečna pretplata',
    price: '$100',
    priceSuffix: 'mesečno',
    footnote:
      'P.s. Članarina se obnavlja automatski svaki mesec i može da se prekine u svakom trenutku.',
    href: CHECKOUT_MONTHLY,
    fbValue: 100,
  },
  {
    id: 'yearly',
    title: 'Godišnja pretplata',
    price: '$799',
    priceSuffix: 'godišnje',
    footnote: 'P.s. Pretplatu možeš prekinuti u svakom trenutku.',
    href: CHECKOUT_YEARLY,
    fbValue: 799,
  },
  {
    id: 'lifetime',
    title: 'Lifetime',
    price: '$1499',
    priceSuffix: 'jednokratno',
    footnote: 'P.s. Jednokratno plaćanje — doživotni pristup bez obnavljanja pretplate.',
    href: CHECKOUT_LIFETIME,
    fbValue: 1499,
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, planIndex) => (
            <motion.div
              key={plan.id}
              className="relative group"
              transition={{ delay: 0.1 * planIndex }}
            >
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />

              <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 h-full flex flex-col">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6">{plan.title}</h3>
                  <div className="inline-flex items-baseline justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                    <span className="text-3xl md:text-5xl font-bold">{plan.price}</span>
                    <span className="text-base md:text-xl">{plan.priceSuffix}</span>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-1">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 md:gap-4"
                      transition={{ delay: 0.05 * index }}
                    >
                      <motion.div
                        className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
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
                  <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6">{plan.footnote}</p>
                  <motion.a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCheckout(plan.fbValue)}
                    style={{ background: '#FF0054' }}
                    className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 text-white text-sm md:text-lg font-medium rounded-xl shadow-lg transition-all duration-300 group/btn hover:opacity-90 w-full justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Započni učenje
                    <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a
                    href={CALENDLY_CONSULT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center w-full px-3 py-2.5 md:px-4 md:py-3 text-gray-200 text-xs md:text-sm font-medium text-center leading-snug rounded-xl border border-purple-400/50 hover:bg-purple-500/15 hover:border-purple-300 transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    Imaš dodatnih pitanja? Zakaži 15 minuta konsultacija sa nama.
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

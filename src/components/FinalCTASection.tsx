import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { handlePricingAnchorClick, PRICING_HREF } from '../utils/pricingNav';

const FinalCTASection: React.FC = () => {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Final CTA',
        content_category: 'Sign Up',
      });
    }
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
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
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2 className="text-3xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-8 md:mb-12">
            Hajde, čekamo te!
          </motion.h2>

          <motion.div className="mb-12" transition={{ delay: 0.2 }}>
            <h3 className="text-2xl md:text-4xl font-bold text-purple-400 mb-6 md:mb-8">Spreman si?</h3>

            <motion.a
              href={PRICING_HREF}
              onClick={(e) => {
                handleCTAClick();
                handlePricingAnchorClick(e);
              }}
              style={{ background: 'linear-gradient(to right, #FF0054, #FFAD05)' }}
              className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 text-white text-lg md:text-2xl font-medium rounded-2xl shadow-lg transition-all duration-300 group relative overflow-hidden hover:opacity-90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                style={{ background: '#FF0054' }}
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <span className="relative">
                Započni učenje
                <ArrowRight className="ml-2 w-6 h-6 inline-block group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

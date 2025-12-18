import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Coffee } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  const handleCTAClick = () => {
    // Track Facebook Pixel event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Final CTA - Coffee Cup',
        content_category: 'Sign Up'
      });
    }
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <motion.div 
        className="absolute inset-0"
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute top-1/4 -right-20 w-40 h-40 bg-purple-700/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -left-20 w-40 h-40 bg-blue-700/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-8 md:mb-12"
          >
            Hajde, čekamo te!
          </motion.h2>

          <motion.div
            className="mb-12"
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-purple-400 mb-6 md:mb-8">
              Spreman si?
            </h3>

            <motion.a
              href="https://nocodebalkan.thinkific.com/enroll/3569704" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleCTAClick}
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
                  ease: "linear"
                }}
              />
              <span className="relative">
                Želim promenu po ceni od pola kafe dnevno!
                <ArrowRight className="ml-2 w-6 h-6 inline-block group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            className="relative w-full max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          >
            {/* Beautiful Coffee Cup Icon */}
            <motion.div
              className="flex justify-center items-center"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Coffee icon with gradient */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Coffee 
                  className="w-24 h-24 md:w-32 md:h-32 text-transparent stroke-[1.5] md:stroke-2"
                  style={{
                    stroke: 'url(#coffeeGradient)',
                    filter: 'drop-shadow(0 0 20px rgba(192, 132, 252, 0.5))'
                  }}
                />
                {/* SVG Gradient definition */}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Steam effect - subtle */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-6 bg-gradient-to-t from-purple-400/40 to-transparent rounded-full"
                      animate={{
                        y: [0, -8, 0],
                        opacity: [0.3, 0.6, 0.3],
                        scaleY: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
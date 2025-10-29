import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
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
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Hajde, čekamo te!
          </motion.h2>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold text-purple-400 mb-8">
              Spreman si?
            </h3>

            <motion.a
              href="https://nocodebalkan.thinkific.com/order?ct=b23d954d-15c7-402b-ad0f-9fff6b075e6d" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white text-2xl font-medium rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"
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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          >
            {/* Coffee cup animation - Enhanced */}
            <motion.div
              className="w-64 h-64 mx-auto relative"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Ambient glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Steam animation - Multiple streams */}
              <div className="relative">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{ 
                      top: `-${20 + i * 8}px`,
                      left: `${50 + (i - 2) * 8}%`,
                    }}
                    animate={{
                      y: [-20, -60],
                      opacity: [0, 0.8, 0],
                      scale: [0.5, 1.5],
                      x: [(i - 2) * -5, (i - 2) * 5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeOut"
                    }}
                  >
                    <div className="w-2 h-6 bg-gradient-to-t from-purple-400/70 via-pink-400/50 to-transparent rounded-full blur-sm" />
                  </motion.div>
                ))}
              </div>

              {/* Cup container with 3D effect */}
              <motion.div
                className="relative w-40 h-40 mx-auto mt-16"
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Saucer - underneath */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-3 rounded-full overflow-hidden"
                  animate={{
                    scaleX: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/40 via-pink-400/50 to-purple-400/40" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>

                {/* Shadow */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-40 h-8 bg-purple-900/30 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Cup body - main */}
                <div className="relative w-full h-full">
                  {/* Cup inner liquid */}
                  <motion.div
                    className="absolute inset-4 bg-gradient-to-br from-amber-900/80 via-amber-800/60 to-amber-700/80 rounded-full"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Liquid shine */}
                    <motion.div
                      className="absolute top-2 left-4 w-8 h-8 bg-white/20 rounded-full blur-md"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Cup outer shell */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-purple-400/60 backdrop-blur-sm overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(192, 132, 252, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, rgba(147, 51, 234, 0.3) 100%)",
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(192, 132, 252, 0.3)",
                        "0 0 40px rgba(236, 72, 153, 0.4)",
                        "0 0 20px rgba(192, 132, 252, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Highlight effect */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent"
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Animated shine */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 1,
                      }}
                    />
                  </motion.div>

                  {/* Cup rim highlight */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-purple-200/60 to-transparent rounded-full blur-sm" />
                </div>

                {/* Handle with enhanced design */}
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-20 border-4 border-purple-400/60 rounded-r-full translate-x-3"
                  style={{
                    background: "linear-gradient(90deg, rgba(192, 132, 252, 0.1) 0%, rgba(236, 72, 153, 0.15) 100%)",
                  }}
                  animate={{
                    borderColor: [
                      "rgba(192, 132, 252, 0.6)",
                      "rgba(236, 72, 153, 0.7)",
                      "rgba(192, 132, 252, 0.6)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Handle shine */}
                  <motion.div
                    className="absolute top-2 left-1 w-1 h-8 bg-gradient-to-b from-white/40 to-transparent rounded-full"
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Decorative sparkles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`sparkle-${i}`}
                    className="absolute w-2 h-2 bg-purple-400 rounded-full"
                    style={{
                      top: `${20 + i * 30}%`,
                      left: `${10 + i * 20}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.7,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
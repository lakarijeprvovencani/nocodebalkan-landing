import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Rocket, BriefcaseIcon } from 'lucide-react';

const FlowDiagram: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const stepVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const boxHoverVariants = {
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* KORAK 01: Pridruži se zajednici */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div 
              className="relative max-w-md w-full"
              whileHover="hover"
              variants={boxHoverVariants}
            >
              <motion.div 
                className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-gray-900 text-xl shadow-xl z-10"
                variants={numberVariants}
                whileHover={{ scale: 1.1 }}
              >
                01
              </motion.div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-500/30 p-8 rounded-2xl text-center shadow-2xl hover:border-yellow-500/60 transition-all duration-300">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">Pridruži se NO CODE zajednici</h3>
              </div>
            </motion.div>
          </motion.div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-yellow-500"
            >
              <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
                <motion.path
                  d="M20 0 L20 50 M20 50 L10 40 M20 50 L30 40"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </svg>
            </motion.div>
          </div>

          {/* KORAK 02: Edukacija */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="relative max-w-3xl mx-auto"
              whileHover="hover"
              variants={boxHoverVariants}
            >
              <motion.div 
                className="absolute -top-6 -left-6 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-xl z-10"
                variants={numberVariants}
                whileHover={{ scale: 1.1 }}
              >
                02
              </motion.div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/30 p-10 rounded-2xl text-center shadow-2xl hover:border-purple-500/60 transition-all duration-300">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Lightbulb className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-8">NO CODE BALKAN</h3>
                
                <motion.div 
                  className="grid grid-cols-2 gap-6 mt-8"
                  variants={containerVariants}
                >
                  {[
                    "Nauči no code alate",
                    "Nauči da primeniš AI",
                    "Nauči da prodaš znanje",
                    "Dosegni nove klijente"
                  ].map((text, index) => (
                    <motion.div 
                      key={index}
                      variants={stepVariants}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(139, 92, 246, 0.3)",
                      }}
                      className="bg-purple-900/30 backdrop-blur-sm p-4 rounded-xl cursor-pointer transition-all duration-300 border border-purple-500/20 hover:border-purple-500/50"
                    >
                      <p className="text-white font-medium text-lg">{text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Arrow Down Split */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-purple-500"
            >
              <svg width="300" height="80" viewBox="0 0 300 80" fill="none">
                <motion.path
                  d="M150 0 L150 30 M150 30 L50 80 M150 30 L250 80"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
              </svg>
            </motion.div>
          </div>

          {/* KORAK 03: Dve putanje sa ILI */}
          <div className="relative">
            <motion.div 
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            >
              {/* Putanja 1: Startup */}
              <motion.div variants={itemVariants} className="relative">
                <motion.div 
                  className="relative h-full"
                  whileHover="hover"
                  variants={boxHoverVariants}
                >
                  <motion.div 
                    className="absolute -top-6 -left-6 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-xl z-10"
                    variants={numberVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    03
                  </motion.div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-red-500/30 p-8 rounded-2xl text-center h-full shadow-2xl hover:border-red-500/60 transition-all duration-300 flex flex-col items-center justify-center">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Rocket className="w-16 h-16 text-red-500 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Pokreni svoju aplikaciju ili startup</h3>
                  </div>
                </motion.div>
              </motion.div>

              {/* Putanja 2: Freelance */}
              <motion.div variants={itemVariants} className="relative">
                <motion.div 
                  className="relative h-full"
                  whileHover="hover"
                  variants={boxHoverVariants}
                >
                  <motion.div 
                    className="absolute -top-6 -left-6 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-xl z-10"
                    variants={numberVariants}
                    whileHover={{ scale: 1.1 }}
                  >
                    03
                  </motion.div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-red-500/30 p-8 rounded-2xl text-center h-full shadow-2xl hover:border-red-500/60 transition-all duration-300 flex flex-col items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <BriefcaseIcon className="w-16 h-16 text-red-500 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Postani freelancer i počni da radiš za strance</h3>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlowDiagram;

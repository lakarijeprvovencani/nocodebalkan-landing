import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Target, Rocket, ArrowRight, Sparkles, Brain, Lightbulb } from 'lucide-react';

const WhySection: React.FC = () => {
  const reasons = [
    {
      icon: Code2,
      title: "Praktično znanje",
      description: "Bez nepotrebne teorije. Od prvog dana radiš na realnim projektima i gradiš svoj portfolio.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Snažna zajednica",
      description: "Postani deo najveće no-code zajednice na Balkanu. Zajedno rastemo i podržavamo se.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Ekspertsko vođstvo",
      description: "Uči od ljudi koji su već prošli put od početnika do uspešnih preduzetnika.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lightbulb,
      title: "Fokus na rezultate",
      description: "Naš cilj je da te dovedemo do prvog klijenta i zarade, ne samo da ti prenesemo znanje.",
      color: "from-orange-500 to-red-500"
    }
  ];

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
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              className="mb-8 md:mb-12"
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">Zašto baš mi?</span>
              </motion.div>
              
              <h2 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-4 md:mb-6">
                No Code Balkan je drugačiji
              </h2>
              
              <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">
                Mi nismo samo još jedna edukativna platforma. Mi smo zajednica ljudi koji veruju da svako može da nauči da kreira digitalne proizvode, bez obzira na prethodno iskustvo.
              </p>

              <motion.a
                href="https://nocodebalkan.thinkific.com/enroll/3569704" target="_blank" rel="noopener noreferrer"
                style={{ background: '#FF0054' }}
                className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 text-white font-medium rounded-xl shadow-lg transition-all duration-300 group text-sm md:text-base hover:opacity-90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Započni svoje putovanje
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Features grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Animated gradient border */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-75 transition duration-300 blur"
                  />
                  
                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                    <motion.div 
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r ${reason.color} p-2 md:p-2.5 mb-3 md:mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <reason.icon className="w-full h-full text-white" />
                    </motion.div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{reason.title}</h3>
                    <p className="text-sm md:text-base text-gray-300">{reason.description}</p>
                    
                    <motion.div
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-5 h-5 text-purple-400" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
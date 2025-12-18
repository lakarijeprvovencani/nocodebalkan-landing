import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Bot, Globe2, Video, ArrowRight, MousePointer2, Layers, Blocks, Sparkles, Palette } from 'lucide-react';

const CareerSection: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: "No-Code Alati",
      description: "Omogućuju svima nama koji nismo programeri da napravimo svoje prve aplikacije ili web sajtove bez iskustva i bez kodiranja.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bot,
      title: "AI (Veštačka inteligencija)",
      description: "Promenila je svet i otvorila mnogobrojne mogućnosti za nove poslove i klijente. Mi je koristimo u dobre svrhe.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Video,
      title: "Instagram i TikTok",
      description: "Video sadržaj je trenutno najbolji način da se dođe do klijenata i prvih prodaja bez ulaganja u reklame.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: "Digitalni Dizajn",
      description: "Nauči kako da koristiš dizajnerske alate za kreiranje profesionalnih vizuala, grafičkih rešenja i marketing materijala.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Globe2,
      title: "Freelance (Frilens)",
      description: "Online platforme omogućuju rad iz svoje kuće za klijente širom sveta.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
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
        <div className="text-center mb-8 md:mb-16">
          <motion.p 
            className="text-lg md:text-2xl text-purple-400 mb-3 md:mb-4"
          >
            Hajde zajedno da
          </motion.p>
          <motion.h2 
            className="text-2xl md:text-6xl font-bold text-white mb-4 md:mb-8"
            transition={{ delay: 0.2 }}
          >
            Menjamo tvoju karijeru
          </motion.h2>
          <motion.p 
            className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto"
            transition={{ delay: 0.3 }}
          >
            Napravili smo prvu zajednicu na našim prostorima koja edukuje ljude o novim tehnologijama i mogućnostima
          </motion.p>
        </div>

        {/* No-Code Builder Animation */}
        <motion.div 
          className="mb-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl filter blur-xl" />
          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 md:p-8 overflow-hidden">
            <div className="flex items-center justify-center">
              <motion.div 
                className="flex items-center gap-4"
                animate={{ 
                  x: [0, 20, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="w-12 h-12 md:w-16 md:h-16 bg-blue-500/20 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Blocks className="w-8 h-8 text-blue-400" />
                </motion.div>
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MousePointer2 className="w-6 h-6 text-purple-400" />
                </motion.div>
                <motion.div 
                  className="w-12 h-12 md:w-16 md:h-16 bg-purple-500/20 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Layers className="w-8 h-8 text-purple-400" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8 mb-8 md:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              transition={{ delay: index * 0.1 }}
            >
              {/* Subtle pulsing border */}
              <motion.div
                className={`absolute -inset-[1px] bg-gradient-to-br ${feature.color} rounded-xl opacity-50 blur-sm`}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />
              
              {/* Stronger border on hover */}
              <motion.div
                className={`absolute -inset-[2px] bg-gradient-to-br ${feature.color} rounded-xl opacity-0 group-hover:opacity-100 blur-md`}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/50 group-hover:border-transparent transition-all duration-300 h-full flex flex-col"
                whileHover={{ y: -8 }}
              >
                {/* Icon container with gradient and animation */}
                <motion.div 
                  className={`relative w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-4 md:mb-6`}
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Pulsing background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl blur-md`}
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Icon wrapper */}
                  <div className="relative bg-gray-800 rounded-xl w-full h-full flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Sparkle effect */}
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                  </motion.div>
                </motion.div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed flex-grow">
                  {feature.description}
                </p>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-20">
                  <motion.div
                    className={`absolute w-40 h-40 bg-gradient-to-br ${feature.color} rounded-full -top-20 -right-20`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://nocodebalkan.thinkific.com/enroll/3569704" target="_blank" rel="noopener noreferrer"
            style={{ background: '#FF0054' }}
            className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 text-white font-medium rounded-lg text-base md:text-lg shadow-lg transition-all duration-300 group hover:opacity-90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Započni svoje putovanje
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <p className="mt-4 text-gray-400">
            Cena je manja od jedne kafe dnevno. Odjavi se kad god hoćeš.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;
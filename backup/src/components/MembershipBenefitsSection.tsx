import React from 'react';
import { motion } from 'framer-motion';
import { Video, Users, MessageCircle, Presentation, HelpCircle, MessagesSquare, HeartHandshake, Briefcase, Code, Blocks, Bot, Laptop } from 'lucide-react';

const MembershipBenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Video,
      title: "Pristup svim kursevima",
      description: "Sve ono što mi znamo naučićemo i tebe",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Presentation,
      title: "Preko 90h video materijala",
      description: "Detaljna objašnjenja i praktični primeri",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Pristup zatvorenoj chat grupi",
      description: "Ekskluzivna zajednica polaznika",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Pristup svakom live-u",
      description: "Uživo predavanja i Q&A sesije",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: HelpCircle,
      title: "Pitaj predavača sve",
      description: "Bez ustručavanja, tu smo za tebe",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: MessagesSquare,
      title: "Komunikacija sa studentima",
      description: "Razmena iskustava i networking",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: HeartHandshake,
      title: "Kontinuirana podrška",
      description: "Od svih predavača, u svakom trenutku",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Briefcase,
      title: "Poslovne prilike",
      description: "Mogućnosti za realne projekte",
      color: "from-amber-500 to-orange-500"
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
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Benefits list */}
          <div className="w-full lg:w-2/3 mx-auto">
            <motion.h2 
              className="text-2xl md:text-5xl font-bold text-purple-500 mb-4 md:mb-12"
            >
              Šta dobijaš pristupom?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-r ${benefit.color} p-2 md:p-2.5 mb-3 md:mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <benefit.icon className="w-full h-full text-white" />
                  </motion.div>
                  <h3 className="text-base md:text-xl font-bold text-white mb-1.5 md:mb-2">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Animated Illustration (Desktop Only) */}
          <motion.div 
            className="hidden lg:block w-full lg:w-1/3"
            transition={{ delay: 0.3 }}
          >
            <div className="relative aspect-square">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Animated No-Code Elements */}
              <div className="relative w-full h-full">
                {/* Central Platform */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-900/50 rounded-xl border-2 border-purple-500/50 backdrop-blur-sm flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Blocks className="w-16 h-16 text-purple-400" />
                </motion.div>

                {/* Orbiting Elements */}
                {[Code, Bot, Laptop].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-16 h-16"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      delay: index * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      transformOrigin: "center center",
                    }}
                  >
                    <motion.div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, -360],
                      }}
                      transition={{
                        duration: 8,
                        delay: index * 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Floating Particles */}
                {[...Array(8)].map((_, index) => (
                  <motion.div
                    key={`particle-${index}`}
                    className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    animate={{ 
                      x: Math.random() * 200 - 100,
                      y: Math.random() * 200 - 100,
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 4,
                      delay: index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 md:mt-16 text-center"
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://nocodebalkan.thinkific.com/enroll/3569704" target="_blank" rel="noopener noreferrer"
            style={{ background: '#FF0054' }}
            className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 text-white font-medium rounded-lg text-base md:text-lg shadow-lg transition-all duration-300 hover:opacity-90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Želim da započnem edukaciju
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipBenefitsSection;
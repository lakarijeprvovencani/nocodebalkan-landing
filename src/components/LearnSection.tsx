import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Bot, DollarSign } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group"
    >
      {/* Subtle animated gradient border */}
      <motion.div
        className="absolute -inset-[2px] bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-xl blur-sm"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3
        }}
      />

      {/* Stronger border on hover */}
      <motion.div
        className="absolute -inset-[2px] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
      />

      <div className="relative bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 overflow-hidden h-full flex flex-col">
        {/* Background glow on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Enhanced icon */}
        <motion.div 
          className="relative rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-2 md:p-3 w-fit mb-3 md:mb-4"
          whileHover={{ scale: 1.15, rotate: 360 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
        >
          <motion.div 
            className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2 md:p-3 text-white relative"
            animate={{
              boxShadow: [
                "0 0 0px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(147, 51, 234, 0.5)",
                "0 0 0px rgba(59, 130, 246, 0.5)",
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {icon}
            {/* Subtle sparkle */}
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
            />
          </motion.div>
        </motion.div>

        <h3 className="text-base md:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300 relative z-10">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-300 group-hover:text-gray-100 transition-colors duration-300 relative z-10 flex-grow">
          {description}
        </p>

        {/* Corner decoration */}
        <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <motion.div
            className="absolute w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full -bottom-16 -right-16"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const LearnSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const features = [
    {
      icon: <Code2 size={24} />,
      title: "Pravljenje sajtova i web aplikacija",
      description: "Nauči kako da koristiš Bubble i Webflow za kreiranje profesionalnih sajtova i web aplikacija bez kodiranja."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobilne aplikacije bez koda",
      description: "Kreiraj native mobilne aplikacije pomoću alata kao što su Adalo, Glide i FlutterFlow."
    },
    {
      icon: <Bot size={24} />,
      title: "AI alati i automatizacija",
      description: "Koristi OpenAI, Zapier i Make za kreiranje automatizovanih procesa i AI-powered rešenja."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Freelance zarada i klijenti",
      description: "Nauči kako da naplaćuješ svoje usluge, nađeš klijente i pokreneš uspešan freelance biznis."
    }
  ];

  return (
    <section id="learn" className="bg-gray-900 py-12 md:py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-700/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [-20, 20, -20]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-40 h-40 bg-purple-700/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [20, -20, 20]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Šta možeš da naučiš?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
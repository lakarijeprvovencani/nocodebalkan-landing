import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Bot, Globe2, Video } from 'lucide-react';

const CTASection: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: "No-Code Alati",
      description: "Nauči da praviš aplikacije i sajtove bez kodiranja, jednostavno kao slaganje lego kockica.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bot,
      title: "AI (Veštačka inteligencija)",
      description: "Koristi AI kao podršku biznisa i otvori nove mogućnosti za poslove i klijente.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe2,
      title: "Freelance",
      description: "Radi sa klijentima širom sveta preko Fiverr i Upwork platformi, direktno iz svog doma.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Video,
      title: "Video Sadržaj",
      description: "Nauči kako da kreiraš profesionalan i zanimljiv video sadržaj koji prodaje.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
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
        <div className="text-center mb-16">
          <motion.p 
            className="text-2xl text-purple-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Hajde zajedno da
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Menjamo tvoju karijeru
          </motion.h2>
        </div>

        <motion.p 
          className="text-gray-300 text-lg text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Napravili smo prvu zajednicu na našim prostorima koja za cilj ima da edukuje ljude o potpuno novim stvarima koje su se pojavile u poslednjih nekoliko godina kao i nekim stvarima koje postoje već dugo, ali se često ne koriste na pravi način.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-2.5 mb-6`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://nocodebalkan.thinkific.com/order?ct=b23d954d-15c7-402b-ad0f-9fff6b075e6d" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg text-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
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

export default CTASection;
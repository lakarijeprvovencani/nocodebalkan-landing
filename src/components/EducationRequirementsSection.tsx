import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const EducationRequirementsSection: React.FC = () => {
  const forYou = [
    "Želiš da pokreneš svoj sopstveni biznis",
    "Želiš da promeniš posao",
    "Želiš da napraviš svoju prvu aplikaciju bez iskustva",
    "Želiš da promeniš finansijsku situaciju (dodatan ili osnovni izvor prihoda)",
    "Želiš da radiš odakle god bilo za klijente širom sveta",
    "Želiš da naučiš alate budućnosti koja je već tu"
  ];

  const notForYou = [
    "Se plašiš promene",
    "Želiš da ostaneš na istom mestu narednih XY godina",
    "Misliš da sve ovo nije moguće i da je samo još jedna internet priča"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-purple-900/50 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For You Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75"
              animate={{ 
                scale: [0.98, 1.02, 0.98],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 h-full">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                OVE EDUKACIJE SU ZA TEBE SAMO AKO:
              </h2>
              <div className="space-y-4">
                {forYou.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="mt-1"
                    >
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </motion.div>
                    <p className="text-gray-200 group-hover:text-white transition-colors">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Not For You Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-75"
              animate={{ 
                scale: [0.98, 1.02, 0.98],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 h-full">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                OVE EDUKACIJE NISU ZA TEBE SAMO AKO:
              </h2>
              <div className="space-y-4">
                {notForYou.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="mt-1"
                    >
                      <XCircle className="w-6 h-6 text-red-400" />
                    </motion.div>
                    <p className="text-gray-200 group-hover:text-white transition-colors">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://nocodebalkan.thinkific.com/order?ct=b23d954d-15c7-402b-ad0f-9fff6b075e6d" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg text-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
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

export default EducationRequirementsSection;
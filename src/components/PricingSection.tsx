import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const PricingSection: React.FC = () => {
  const features = [
    "Pristup svim postojećim i novim kursevima",
    "Pristup zatvorenoj chat grupi",
    "Pristup svakom live predavanju samo za članove",
    "Komunikacija i podrška predavača",
    "Komunikacija i podrška ostalih polaznika",
    "Poslovne prilike"
  ];

  return (
    <section id="pricing" className="py-12 md:py-24 bg-gray-900 relative overflow-hidden">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl text-gray-400 italic mb-4">Sve je ovo super, ali...</p>
          <h2 className="text-4xl md:text-5xl font-bold text-purple-500 mb-8">
            Koja je cena, je l' te to muči?
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Da li možeš da izdvojiš 170 dinara na dan za svoju bolju budućnost?
          </p>
          <p className="text-xl text-gray-300 mb-4">
            Upravo to je cena. 170 dinara dnevno, odnosno $49 mesečno.
          </p>
          <p className="text-xl text-gray-300">
            I da, imaš pristup svemu, svakom kursu bez ikakvih skrivenih troškova i možeš da odustaneš kad god to želiš.
          </p>
        </motion.div>

        <motion.div 
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl text-gray-300 mb-8">Mesečna pretplata</h3>
              <div className="inline-flex items-baseline justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                <span className="text-7xl font-bold">$49</span>
                <span className="text-2xl">mesečno</span>
              </div>
            </div>

            <div className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Check className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-lg text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-8">
                P.s Članarina se obnavlja automatski svaki mesec i može da se prekine u svakom trenutku
              </p>
              <motion.a
                href="https://nocodebalkan.thinkific.com/order?ct=b23d954d-15c7-402b-ad0f-9fff6b075e6d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white text-xl font-medium rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Započni učenje
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
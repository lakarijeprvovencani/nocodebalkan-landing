import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Target, Rocket, ArrowRight } from 'lucide-react';
import teamImage from '../assets/images/nocodeekipa.jpg';

const TeamSection: React.FC = () => {
  const points = [
    {
      icon: Users,
      title: "Bez online magova",
      description: "Mi smo obični momci koji su prošli put od početnika do uspešnih preduzetnika. Bez lažnih obećanja i nerealnih očekivanja."
    },
    {
      icon: Clock,
      title: "30-45 minuta dnevno",
      description: "Uz doslednost i posvećenost, samo pola sata dnevno je dovoljno da savladaš sve što ti je potrebno za uspeh."
    },
    {
      icon: Target,
      title: "Fokus na rezultate",
      description: "Učimo te kako da tvoje znanje postane tvoj alat za rad sa domaćim i stranim klijentima."
    },
    {
      icon: Rocket,
      title: "Kompletan proces",
      description: "Od učenja alata do same prodaje - vodimo te kroz sve korake do uspeha."
    }
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
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
        <div className="text-center mb-16">
          <motion.p 
            className="text-xl text-gray-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ne, nismo nikakvi "gurui", mi smo
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ekipa običnih momaka.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Key Points */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Subtle animated gradient border */}
                <motion.div
                  className="absolute -inset-[2px] bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-blue-500/40 rounded-xl blur-sm"
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
                <div
                  className="absolute -inset-[2px] bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
                />

                <motion.div
                  className="relative bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 overflow-hidden h-full flex flex-col"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Background glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Icon with enhanced effects */}
                  <motion.div 
                    className="relative w-16 h-16 mb-4 rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500"
                      animate={{
                        opacity: [0.6, 0.8, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-40 blur-xl" />
                    <div className="relative w-full h-full flex items-center justify-center">
                      <point.icon className="w-8 h-8 text-white drop-shadow-lg relative z-10" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                    {point.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 relative z-10 flex-grow">
                    {point.description}
                  </p>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <motion.div
                      className="absolute w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full -bottom-16 -right-16"
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
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Image */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Animated gradient border around image */}
            <motion.div
              className="absolute -inset-[3px] bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-sm"
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.01, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Glow effect on hover */}
            <motion.div
              className="absolute -inset-[5px] bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-80 blur-xl transition-opacity duration-500"
            />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-[1.01]">
              <img 
                src={teamImage} 
                alt="No Code Balkan Tim" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent p-6">
                <p className="text-gray-300 italic mb-2 text-lg">
                  "Rasla je jedna sasvim drugačija generacija mladih ljudi"
                </p>
                <p className="text-white font-medium">
                  Tvoji predavači:
                </p>
                <p className="text-purple-400 font-bold">
                  Vlada, Nemanja, Nikola i Ilija
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Ako si spreman/na da izdvojiš vreme za učenje i rad na sebi, mi smo tu da te vodimo kroz ceo proces.
          </p>
          <motion.a
            href="https://nocodebalkan.thinkific.com/order?ct=b23d954d-15c7-402b-ad0f-9fff6b075e6d" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-medium rounded-lg text-lg shadow-lg hover:bg-purple-700 transition-all duration-300 group"
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

export default TeamSection;
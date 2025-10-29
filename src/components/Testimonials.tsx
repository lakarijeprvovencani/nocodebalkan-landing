import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Vićentić",
    text: "Samo ću reći da je ovo najbolje osmišljen i realizovan kurs na koji sam naišla u stalnom istraživanju raznih edukacija. Smatram da se za mesečnu cenu kursa dobija džinovski paket svega i svačega korisnog koji je mnogo vredniji od tog novca."
  },
  {
    id: 2,
    name: "Jurica Kolobarić",
    text: "U NoCode zajednicu priključio sam se 15.2.2024 godine bez ikakvog predznanja o bilo kojem NoCode programu. 3,5 mjeseca bazirao sam se samo na program Adalo i u njemu sam napravio neke aplikacije. Danas sam sa klijentom dogovorio prvu prodaju aplikacije. Za samo tri i po mjeseca od potpunog neznanja do prvog prihoda. AKO MOGU JA ZAŠTO NE BI MOGLI I VI???"
  },
  {
    id: 3,
    name: "Nada Samardžić",
    text: "No Code Balkan me je izuzetno inspirisao i promenio način na koji gledam na tehnologiju! Pre nekoliko meseci pridružila sam se ovoj zajednici, i moram priznati da je to bila jedna od najboljih odluka koje sam donela."
  },
  {
    id: 4,
    name: "Slađana Avramović Šešum",
    text: "Odlična zajednica gde svi mentori i članovi pomažu jedni drugima, gde su mentori uvek na raspolaganju spremni da izađu u susret i sa savetima i u rešavanju problema. Sve lepo objašnjeno. Svake nedelje webinari sa aktuelnim temama, zatvorene grupe samo za članove."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
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
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Šta su polaznici rekli o nama?
        </motion.h2>

        <div className="relative">
          {/* Desktop timeline line - hidden on mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 to-blue-500/50 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Mobile timeline dot */}
                <div className="md:hidden w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 relative mb-4">
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-ping" />
                </div>

                {/* Desktop timeline dot - hidden on mobile */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: index * 0.2 }}
                  >
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-ping" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    className="relative group"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Animated gradient border */}
                    <motion.div
                      className="absolute -inset-[2px] bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        backgroundSize: '200% 200%',
                      }}
                    />
                    
                    {/* Static pulsing border */}
                    <motion.div
                      className="absolute -inset-[1px] bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-blue-500/40 rounded-2xl"
                      animate={{
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    />

                    <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 group-hover:border-transparent transition-all duration-300 overflow-hidden">
                      {/* Top right quote decoration */}
                      <motion.div 
                        className="absolute top-4 right-4"
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                          <Quote className="w-6 h-6 text-purple-400" />
                        </div>
                      </motion.div>

                      {/* Background decoration */}
                      <div className={`absolute ${index % 2 === 0 ? 'md:left-0' : 'md:right-0'} right-0 md:right-auto bottom-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-2xl`} />
                      
                      {/* Stars decoration */}
                      <div className="flex gap-1 mb-4 justify-start">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <motion.div
                            key={star}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + star * 0.1 }}
                          >
                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          </motion.div>
                        ))}
                      </div>

                      <p className="text-gray-300 mb-6 text-base md:text-lg italic leading-relaxed relative z-10">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="relative">
                        <motion.div
                          className="inline-block"
                          whileHover={{ scale: 1.05 }}
                        >
                          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                            {testimonial.name}
                          </h3>
                          {/* Underline decoration */}
                          <motion.div
                            className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mt-1"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                          />
                        </motion.div>
                      </div>

                      {/* Corner sparkle */}
                      <motion.div
                        className={`absolute ${index % 2 === 0 ? 'md:left-4' : 'md:right-4'} right-4 md:right-auto bottom-4 opacity-50`}
                        animate={{
                          scale: [0.8, 1.2, 0.8],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full blur-sm" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer - hidden on mobile */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
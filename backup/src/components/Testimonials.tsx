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
    <section className="py-12 md:py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Šta su polaznici rekli o nama?
        </h2>

        {/* Desktop: Timeline Layout */}
        <div className="hidden md:block relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-purple-500/30" />

          <div className="space-y-24">
            {testimonials.map((testimonial, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={testimonial.id}
                  className="relative"
                >
                  <div className={`flex items-center ${isLeft ? 'justify-end' : 'justify-start'}`}>
                    {/* Testimonial Card */}
                    <div className={`w-5/12 ${isLeft ? 'pr-12' : 'pl-12'}`}>
                      <div className="relative group">
                        {/* Subtle pulsing border */}
                        <motion.div
                          className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl"
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />

                        <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transition-all duration-300 group-hover:transform group-hover:-translate-y-2 overflow-hidden">
                          {/* Background blur decoration */}
                          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
                          
                          {/* Top right quote decoration */}
                          <div className="absolute top-4 right-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                              <Quote className="w-6 h-6 text-purple-400" />
                            </div>
                          </div>

                          {/* Stars decoration */}
                          <div className="flex gap-1 mb-4 justify-start">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>

                          <p className="text-lg text-gray-300 mb-6 italic leading-relaxed relative z-10">
                            "{testimonial.text}"
                          </p>
                          
                          <div className="relative">
                            <div className="inline-block">
                              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                                {testimonial.name}
                              </h3>
                              <div className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mt-1" />
                            </div>
                          </div>

                          {/* Corner sparkle */}
                          <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        {/* Pulsing outer ring */}
                        <motion.div
                          className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Main dot */}
                        <div className="relative w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-gray-900 shadow-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Simple Vertical Stack */}
        <div className="md:hidden space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative group"
            >
              {/* Subtle pulsing border */}
              <motion.div
                className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 overflow-hidden">
                {/* Background blur decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
                
                {/* Top right quote decoration - Hidden on mobile */}
                <div className="hidden md:block absolute top-4 right-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                    <Quote className="w-5 h-5 text-purple-400" />
                  </div>
                </div>

                {/* Stars decoration */}
                <div className="flex gap-1 mb-4 justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-300 mb-4 italic leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
                
                <div className="relative">
                  <div className="inline-block">
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                      {testimonial.name}
                    </h3>
                    <div className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mt-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

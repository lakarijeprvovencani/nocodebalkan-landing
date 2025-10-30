import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Sparkles, Play } from 'lucide-react';

const IntroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="bg-gray-900 pt-8 md:pt-8 pb-16 md:pb-24 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [-20, 20, -20],
            y: [-20, 20, -20]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [20, -20, 20],
            y: [20, -20, 20]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        {/* Gradient Banner Title */}
        <motion.div
          className="relative mt-0 md:mt-0 mb-4 md:mb-16 max-w-5xl mx-auto z-[100]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-0.5 md:p-1 rounded-xl md:rounded-2xl overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative bg-gray-900 px-4 py-3 md:px-8 md:py-6 rounded-lg md:rounded-xl">
              <h2 className="text-sm font-medium md:text-3xl lg:text-4xl text-center md:font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-snug md:leading-relaxed">
                Sada svako može da nauči da pravi aplikacije i web sajtove koristeći no-code alate
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Video Container */}
        <motion.div 
          className="relative max-w-4xl mx-auto mb-8 md:mb-24 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Main video animated gradient border */}
          <motion.div
            className="absolute -inset-[3px] bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-sm"
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
            className="absolute -inset-[5px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-80 blur-xl transition-opacity duration-500"
          />

          <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-[1.01]">
            <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="https://cdn-cf-east.streamable.com/image/3xioho.jpg"
                controls={isPlaying}
                playsInline
                preload="metadata"
              >
                <source src="https://streamable.com/l/3xioho/mp4.mp4" type="video/mp4" />
                Vaš pretraživač ne podržava video.
              </video>
              
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                  onClick={handlePlayClick}
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  <motion.div
                    className="relative z-20"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.3, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Sparkles,
              title: "Bez prethodnog iskustva",
              description: "Počni od nule i nauči sve što ti je potrebno za uspeh",
              gradient: "from-blue-500 to-cyan-400",
              delay: 0.3
            },
            {
              icon: Clock,
              title: "Samo 30 minuta dnevno",
              description: "Uči svojim tempom, kad god ti odgovara",
              gradient: "from-purple-500 to-pink-400",
              delay: 0.4
            },
            {
              icon: DollarSign,
              title: "Online zarada",
              description: "Zaradi prve klijente i započni svoju online karijeru",
              gradient: "from-green-400 to-emerald-500",
              delay: 0.5
            }
          ].map((benefit, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: benefit.delay }}
            >
              {/* Animated gradient border - always visible but subtle */}
              <motion.div
                className={`absolute -inset-[2px] bg-gradient-to-br ${benefit.gradient} rounded-xl blur-sm`}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.01, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              />

              {/* Stronger border on hover - no rotation */}
              <div
                className={`absolute -inset-[2px] bg-gradient-to-br ${benefit.gradient} rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500`}
              />

              <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 overflow-hidden">
                {/* Background shimmer effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon with enhanced effects */}
                <motion.div 
                  className="relative w-20 h-20 mb-6 rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient}`}
                    animate={{
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-60 blur-2xl`} />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <benefit.icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1
                    }}
                  />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-3 transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-base group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-20">
                  <motion.div
                    className={`absolute w-40 h-40 bg-gradient-to-br ${benefit.gradient} rounded-full -top-20 -right-20`}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
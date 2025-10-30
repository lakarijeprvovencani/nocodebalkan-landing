import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, GraduationCap, Bird, Play, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative min-h-[50vh] md:min-h-screen bg-gray-900 flex items-center justify-center overflow-visible md:overflow-hidden pt-12 pb-4 md:py-0 z-[1]">
      {/* Animated background elements - Hidden on mobile to avoid color differences */}
      <motion.div 
        className="absolute inset-0 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute top-20 -right-40 w-96 h-96 bg-purple-700/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-40 w-96 h-96 bg-blue-700/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-purple-400 text-xl md:text-4xl mb-3 md:mb-4 italic"
              style={{ fontFamily: 'Caveat, cursive' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Želiš da napraviš promenu u svojoj karijeri?
            </motion.p>
            <motion.h1 
              className="text-3xl md:text-7xl lg:text-8xl font-bold text-white mb-3 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Zaradi programersku platu.
            </motion.h1>
            <motion.p 
              className="text-base md:text-3xl text-blue-300 mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Bez iskustva. Bez učenja programiranja.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hidden md:block"
            >
              <a 
                href="https://nocodebalkan.thinkific.com/order?ct=b23d954d-15c7-402b-ad0f-9fff6b075e6d" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 text-base md:px-10 md:py-5 md:text-xl font-medium hover:from-blue-600 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Želim da naučim kako
              </a>
              <p className="mt-3 text-gray-400 text-sm md:text-base">
                Cena je manja od jedne kafe dnevno. Odjavi se kad god hoćeš.
              </p>
            </motion.div>
          </motion.div>

          {/* Mobile: Banner, Video, CTA - Only visible on mobile */}
          <div className="md:hidden w-full mt-6">
            {/* Banner */}
            <motion.div
              className="relative mb-4 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-0.5 rounded-xl overflow-hidden">
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
                <div className="relative bg-gray-900 px-4 py-3 rounded-lg">
                  <h2 className="text-sm font-medium text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-snug">
                    Sada svako može da nauči da pravi aplikacije i web sajtove koristeći no-code alate
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* Video */}
            <motion.div
              className="relative max-w-4xl mx-auto mb-4 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
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
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                          <Play className="w-8 h-8 text-white ml-1" />
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

            {/* CTA Button */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a 
                href="https://nocodebalkan.thinkific.com/order?ct=b23d954d-15c7-402b-ad0f-9fff6b075e6d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-base font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transform transition-all duration-300 active:scale-95 shadow-lg shadow-purple-500/20"
              >
                Želim da naučim kako!
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right side - Animated cards (Desktop Only) */}
          <motion.div 
            className="hidden md:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative w-full max-w-xl">
              <div className="grid grid-cols-2 gap-6 p-4">
                {[
                  { Icon: Layers, label: "No code", iconColor: "text-blue-400", bgGradient: "from-blue-500/20 to-cyan-500/20" },
                  { Icon: Sparkles, label: "AI", iconColor: "text-purple-400", bgGradient: "from-purple-500/20 to-pink-500/20" },
                  { Icon: GraduationCap, label: "Edukacija", iconColor: "text-green-400", bgGradient: "from-green-500/20 to-emerald-500/20" },
                  { Icon: Bird, label: "Sloboda", iconColor: "text-orange-400", bgGradient: "from-orange-500/20 to-red-500/20" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center gap-4 border border-gray-700/50 hover:border-gray-600 transition-colors`}
                    whileHover={{ scale: 1.1, y: -8 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <item.Icon className={`w-16 h-16 ${item.iconColor}`} />
                    </motion.div>
                    <span className="text-white font-medium text-lg text-center">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

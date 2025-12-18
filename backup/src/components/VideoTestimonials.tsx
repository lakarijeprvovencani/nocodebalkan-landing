import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoTestimonials: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  
  const videos = [
    {
      id: 1,
      videoUrl: "https://streamable.com/l/cizsma/mp4.mp4",
      thumbnail: "https://cdn-cf-east.streamable.com/image/cizsma.jpg",
    },
    {
      id: 2,
      videoUrl: "https://streamable.com/l/snwg14/mp4.mp4",
      thumbnail: "https://cdn-cf-east.streamable.com/image/snwg14.jpg",
    },
    {
      id: 3,
      videoUrl: "https://streamable.com/l/7qhw3g/mp4.mp4",
      thumbnail: "https://cdn-cf-east.streamable.com/image/7qhw3g.jpg",
    },
    {
      id: 4,
      videoUrl: "https://streamable.com/l/dkr079/mp4.mp4",
      thumbnail: "https://cdn-cf-east.streamable.com/image/dkr079.jpg",
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
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
        <motion.div
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">
            Jedina kompletna edukacija.
          </h2>
          <div className="flex justify-center gap-1 mb-6 md:mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.svg
                key={star}
                className="w-5 h-5 md:w-8 md:h-8 text-yellow-400"
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: star * 0.1 }}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              transition={{ delay: index * 0.2 }}
              className="group relative max-w-[280px] mx-auto md:max-w-none"
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-[2px] bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur-sm"
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
              
              {/* Static gradient border that pulses */}
              <motion.div
                className="absolute -inset-[2px] bg-gradient-to-br from-purple-500/50 via-pink-500/50 to-blue-500/50 rounded-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-gray-800 transition-all duration-300">
                <video
                  className="w-full h-full object-cover"
                  poster={video.thumbnail}
                  controls={playingVideo === video.id}
                  playsInline
                  preload="metadata"
                  onClick={() => {
                    const videoElement = document.getElementById(`video-${video.id}`) as HTMLVideoElement;
                    if (videoElement && playingVideo !== video.id) {
                      videoElement.play();
                      setPlayingVideo(video.id);
                    }
                  }}
                  onPlay={() => setPlayingVideo(video.id)}
                  id={`video-${video.id}`}
                >
                  <source src={video.videoUrl} type="video/mp4" />
                  Vaš pretraživač ne podržava video.
                </video>
                
                {playingVideo !== video.id && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-gray-900/0 pointer-events-none" />
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={() => {
                        const videoElement = document.getElementById(`video-${video.id}`) as HTMLVideoElement;
                        if (videoElement) {
                          videoElement.play();
                          setPlayingVideo(video.id);
                        }
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20 group-hover:border-purple-500/50 transition-all duration-300">
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 pointer-events-none">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full"
                          />
                        </div>
                        <span className="text-xs md:text-sm text-gray-300">Video iskustvo</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
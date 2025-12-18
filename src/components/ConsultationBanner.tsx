import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ConsultationBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Don't show banner on konsultacije page
  const isKonsultacijePage = location.pathname === '/konsultacije';

  useEffect(() => {
    if (isKonsultacijePage) {
      setIsVisible(false);
      return;
    }

    // Show banner after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Add padding to hero content on mobile when banner appears
      const heroContent = document.getElementById('hero-content');
      if (heroContent && window.innerWidth < 640) {
        heroContent.style.paddingTop = '40px';
      }
    }, 10000);

    return () => {
      clearTimeout(timer);
      // Remove padding when component unmounts
      const heroContent = document.getElementById('hero-content');
      if (heroContent) {
        heroContent.style.paddingTop = '';
      }
    };
  }, [isKonsultacijePage]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-[9999]"
        >
          <Link 
            to="/konsultacije"
            className="relative w-full overflow-hidden border-b py-2.5 md:py-3 block cursor-pointer hover:opacity-95 transition-opacity shadow-lg" 
            style={{ background: '#FF0054', borderColor: '#FF0054' }}
          >
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
                {/* Question */}
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2 flex-shrink-0">
                  <HelpCircle className="w-4 sm:w-5 md:w-5 h-4 sm:h-5 md:h-5 text-white flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm md:text-base font-medium">
                    <span className="sm:hidden">Dvoumiš se?</span>
                    <span className="hidden sm:inline">Nisi siguran odakle da počneš? 🤔</span>
                  </span>
                </div>
                
                {/* CTA button */}
                <span className="text-white text-xs sm:text-sm md:text-base font-bold bg-white/20 px-3 sm:px-4 md:px-4 py-1.5 md:py-2 rounded-full border border-white/30 flex items-center gap-1.5 md:gap-2 hover:bg-white/30 transition-colors">
                  Zakaži besplatne konsultacije
                  <ArrowRight className="w-4 md:w-4 h-4 md:h-4" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationBanner;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    // Check if Exit Intent Popup is visible
    const checkPopupVisibility = () => {
      // ExitIntentPopup uses z-[10000] for backdrop and z-[10001] for popup
      // Check only fixed positioned elements for better performance
      const fixedElements = document.querySelectorAll('[style*="position: fixed"], [class*="fixed"]');
      let popupFound = false;
      
      for (const el of fixedElements) {
        const style = window.getComputedStyle(el);
        const zIndex = style.zIndex;
        const opacity = parseFloat(style.opacity);
        const display = style.display;
        
        // Check if element has z-index 10000 or 10001 and is visible
        if ((zIndex === '10000' || zIndex === '10001') && opacity > 0 && display !== 'none') {
          popupFound = true;
          break;
        }
      }
      
      setIsPopupVisible(popupFound);
    };

    // Check initially
    checkPopupVisibility();

    // Use MutationObserver to watch for popup changes
    const observer = new MutationObserver(checkPopupVisibility);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });

    // Also check on scroll
    window.addEventListener('scroll', handleScroll);
    
    // Check periodically as fallback
    const interval = setInterval(checkPopupVisibility, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const handleCTAClick = () => {
    // Track Facebook Pixel event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Floating CTA',
        content_category: 'Sign Up'
      });
    }
    window.open('https://nocodebalkan.thinkific.com/enroll/3569704', '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && !isPopupVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[10002] px-4 pb-4 md:pb-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto pointer-events-auto">
            <div className="relative bg-gradient-to-r from-[#FF0054] via-purple-600 to-pink-500 rounded-2xl shadow-2xl p-4 md:p-5 border border-purple-500/50 overflow-hidden">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF0054]/20 via-purple-600/20 to-pink-500/20 blur-xl" />

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
                {/* Text content */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-white font-bold text-base md:text-lg lg:text-xl mb-1">
                    Započni promenu po ceni manjoj od jedne kafe dnevno!
                  </p>
                  <p className="text-white/90 text-xs md:text-sm">
                    Odjavi se kad god hoćeš • Pristup svim kursevima
                  </p>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={handleCTAClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#FF0054] font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-base lg:text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                >
                  Započni sada
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF0054]/15 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-500/15 rounded-full blur-2xl" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;











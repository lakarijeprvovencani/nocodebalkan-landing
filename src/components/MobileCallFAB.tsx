import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headphones } from 'lucide-react';

const CALENDLY_CONSULT_URL = 'https://calendly.com/no-code-asistent/30min';

const MobileCallFAB: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const checkPopupVisibility = () => {
      const fixedElements = document.querySelectorAll(
        '[style*="position: fixed"], [class*="fixed"]'
      );
      let popupFound = false;

      for (const el of fixedElements) {
        const style = window.getComputedStyle(el);
        const zIndex = style.zIndex;
        const opacity = parseFloat(style.opacity);
        const display = style.display;

        if (
          (zIndex === '10000' || zIndex === '10001') &&
          opacity > 0 &&
          display !== 'none'
        ) {
          popupFound = true;
          break;
        }
      }

      setIsPopupVisible(popupFound);
    };

    checkPopupVisibility();

    const observer = new MutationObserver(checkPopupVisibility);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class'],
    });

    const interval = setInterval(checkPopupVisibility, 200);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Mobile Call FAB',
        content_category: 'Consultation',
      });
    }
    window.open(CALENDLY_CONSULT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {!isPopupVisible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Zakaži poziv"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: 'spring', damping: 18, stiffness: 220 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          className="md:hidden fixed bottom-24 right-4 z-[10003] w-14 h-14 rounded-full text-white shadow-2xl flex items-center justify-center"
          style={{
            background:
              'linear-gradient(135deg, #FF0054 0%, #a855f7 50%, #3b82f6 100%)',
          }}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[#FF0054]/40 animate-ping"
          />
          <span className="relative flex items-center justify-center w-full h-full rounded-full">
            <Headphones className="w-6 h-6" strokeWidth={2.2} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default MobileCallFAB;

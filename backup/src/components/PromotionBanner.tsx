import React from 'react';
import { Gift } from 'lucide-react';

const PromotionBanner: React.FC = () => {
  return (
    <a 
      href="https://edu.nocodebalkan.com/lifetime" 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative w-full overflow-hidden border-b border-red-600 py-2.5 z-[60] block cursor-pointer hover:opacity-95 transition-opacity" 
      style={{ background: '#FF0054' }}
    >
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex items-center gap-2 md:gap-3 banner-scroll">
          {/* Multiple copies for seamless loop */}
          {[...Array(6)].map((_, copyIndex) => (
            <div key={copyIndex} className="flex items-center gap-2 md:gap-3 px-4 md:px-8 flex-shrink-0">
              <Gift className="w-3 h-3 md:w-4 md:h-4 text-white flex-shrink-0" />
              <span className="text-white text-xs md:text-sm font-medium whitespace-nowrap">
                Black Friday Akcija - $510 popusta na LIFETIME paket
              </span>
              <span className="text-white text-xs font-semibold bg-white/20 px-1.5 md:px-2 py-0.5 md:py-1 rounded border border-white/30 whitespace-nowrap">
                Klikni ovde
              </span>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};

export default PromotionBanner;


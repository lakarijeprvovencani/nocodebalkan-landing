import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, Facebook } from 'lucide-react';

const WebinarSuccessPage: React.FC = () => {
  useEffect(() => {
    document.title = "Uspešna prijava za webinar - No Code Balkan";
  }, []);

  const webinarLink = "https://event.webinarjam.com/6yy69/register/1yy64cpv";
  const shareText = "Pridruži mi se večeras na webinaru: " + webinarLink;

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`,
    viber: `viber://forward?text=${encodeURIComponent(shareText)}`,
    messenger: `https://www.facebook.com/dialog/send?app_id=1093599662013232&link=${encodeURIComponent(webinarLink)}&redirect_uri=${encodeURIComponent(window.location.origin + '/uspesna-prijava-za-webinar')}`
  };

  const handleShare = (platform: 'whatsapp' | 'viber' | 'messenger') => {
    const link = shareLinks[platform];
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-8 md:p-12 text-center overflow-hidden"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6"
          >
            <CheckCircle className="w-12 h-12 md:w-14 md:h-14 text-white" />
          </motion.div>

          {/* Success Message */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Uspešno si se prijavio/la za webinar! 🎉
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl mb-8"
          >
            Link za webinar ćeš dobiti na email adresu koju si uneo/la.
            <br />
            <span className="text-yellow-400 font-medium">Proveri i spam folder!</span>
          </motion.p>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-gray-700/50"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              Ako znaš još nekoga kome je ovo zanimljivo, pozovi ga!
            </h2>
            <p className="text-gray-400 text-sm md:text-base mb-6">
              Podeli link za webinar sa prijateljima
            </p>

            {/* Share Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* WhatsApp */}
              <motion.button
                onClick={() => handleShare('whatsapp')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px] justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp</span>
              </motion.button>

              {/* Viber */}
              <motion.button
                onClick={() => handleShare('viber')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-[#665CAC] hover:bg-[#665CAC]/90 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px] justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Viber</span>
              </motion.button>

              {/* Messenger */}
              <motion.button
                onClick={() => handleShare('messenger')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-[#0084FF] hover:bg-[#0084FF]/90 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px] justify-center"
              >
                <Facebook className="w-6 h-6" />
                <span>Messenger</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default WebinarSuccessPage;









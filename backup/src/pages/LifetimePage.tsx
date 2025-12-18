import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Gift, ArrowRight, X } from 'lucide-react';

const LifetimePage: React.FC = () => {

  const features = [
    "Pristup SVIM postojećim kursevima (No-Code, AI, Freelance, Web Development)",
    "Pristup SVIM budućim kursevima koje kreiramo",
    "Pristup zatvorenoj chat grupi",
    "Komunikacija i podrška predavača",
    "Poslovne prilike i networking",
    "Weekly Call Recordings - svi snimci",
    "AI alati, Bubble, WordPress, Figma i sve ostalo",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900">
      {/* Urgency Banner */}
      <motion.div 
        className="bg-gradient-to-r from-red-600 to-red-800 text-white py-3 text-center font-bold text-sm md:text-base"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 animate-pulse" />
          <span>OVA PONUDA VAŽI SAMO SADA - NIKADA VIŠE NEĆE BITI DOSTUPNA!</span>
          <Clock className="w-4 h-4 animate-pulse" />
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/50 rounded-full px-4 py-2 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Gift className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm md:text-base">BLACK FRIDAY EKSKLUZIVNA PONUDA</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Lifetime Pretplata
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Pristup No Code Balkan platformi. <span className="text-[#FF0054] font-bold">ZAUVEK!</span>
          </p>
        </motion.div>

        {/* Gold Card Visual */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="https://nocodebalkan.thinkific.com/order?ct=cbc5c3a0-ee2a-483a-b2bb-47eb08c802e8"
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer hover:opacity-95 transition-opacity max-w-md mx-auto"
          >
            <img 
              src="/gold-member-card.png" 
              alt="No Code Balkan Gold Member Card" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </a>
        </motion.div>

        {/* Savings Badge */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        >
          <a
            href="https://nocodebalkan.thinkific.com/order?ct=cbc5c3a0-ee2a-483a-b2bb-47eb08c802e8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer hover:opacity-95 transition-opacity"
          >
            <motion.div 
              className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-5 rounded-2xl shadow-2xl relative overflow-hidden"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(251, 191, 36, 0.5)",
                  "0 0 40px rgba(251, 191, 36, 0.8)",
                  "0 0 20px rgba(251, 191, 36, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse" />
              <div className="relative z-10 text-center">
                <div className="text-base md:text-lg opacity-90 font-semibold">Uštedi</div>
                <div className="text-4xl md:text-5xl font-black">$510</div>
              </div>
            </motion.div>
          </a>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-12 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="https://nocodebalkan.thinkific.com/order?ct=cbc5c3a0-ee2a-483a-b2bb-47eb08c802e8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center p-6 bg-gradient-to-br from-[#FF0054] to-red-700 rounded-xl relative overflow-hidden block cursor-pointer hover:opacity-95 transition-opacity max-w-md mx-auto"
          >
            <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">
              POPUST
            </div>
            <div className="text-gray-400 text-sm mb-2">Lifetime Pretplata</div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-gray-300 line-through text-xl">$839</span>
              <span className="text-4xl font-black text-white">$329</span>
            </div>
            <div className="text-yellow-300 text-sm font-bold mt-2">JEDNOKRATNO PLAĆANJE</div>
            <div className="mt-4 text-white text-sm font-semibold">Uštedi $510!</div>
          </a>
        </motion.div>

        {/* What You Get */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Šta dobijaš sa Lifetime pretplatom?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl p-4 border-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
                  borderColor: 'rgba(34, 197, 94, 0.3)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(34, 197, 94, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-start gap-3">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/50">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                  <span className="text-white text-sm md:text-base font-medium group-hover:text-white transition-colors">{feature}</span>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Urgency Section */}
        <motion.div
          className="bg-gradient-to-r from-red-900/50 to-orange-900/50 border-2 border-red-500/50 rounded-2xl p-6 md:p-8 mb-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <X className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ova ponuda se NEĆE PONOVITI!
          </h3>
          <p className="text-gray-300 text-lg mb-2">
            Ovo je <span className="text-yellow-400 font-bold">JEDINA PRILIKA</span> da dobiješ Lifetime pristup po ovoj ceni.
          </p>
          <p className="text-gray-400">
            Nakon što se ova ponuda zatvori, više neće biti dostupna. Ne propusti ovu šansu!
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="https://nocodebalkan.thinkific.com/order?ct=cbc5c3a0-ee2a-483a-b2bb-47eb08c802e8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#FF0054' }}
            className="inline-flex items-center px-12 py-6 text-white text-xl md:text-2xl font-bold rounded-2xl shadow-2xl hover:opacity-90 transition-all duration-300 group mb-6"
          >
            ZAPOČNI LIFETIME PUTOVANJE
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
          <p className="text-gray-400 text-sm">
            Jednokratno plaćanje • Doživotni pristup
          </p>
        </motion.div>

        {/* Trust Elements */}
        <motion.div
          className="mt-16 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p>Preko 5000 polaznika • Podrška 24/7 • Garantovano znanje</p>
        </motion.div>
      </div>
    </div>
  );
};

export default LifetimePage;


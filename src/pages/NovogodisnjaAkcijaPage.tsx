import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, CheckCircle, Star, Sparkles, ArrowRight, Shield, Users, PartyPopper, Code2, Briefcase } from 'lucide-react';
import mrazoviImg from '../assets/images/mrazovi.jpg';
import testimonial1 from '../assets/images/testimonials-nova/Screenshot 2025-12-18 at 10.23.43.png';
import testimonial2 from '../assets/images/testimonials-nova/Screenshot 2025-12-18 at 10.23.56.png';
import testimonial3 from '../assets/images/testimonials-nova/Screenshot 2025-12-18 at 10.24.06.png';
import testimonial4 from '../assets/images/testimonials-nova/Screenshot 2025-12-18 at 10.24.18.png';
import testimonial5 from '../assets/images/testimonials-nova/Screenshot 2025-12-18 at 10.24.34.png';
import testimonial6 from '../assets/images/testimonials-nova/Screenshot 2025-12-18 at 10.24.43.png';


// Gift box component
const GiftBox: React.FC<{ className?: string; delay?: number }> = ({ className = '', delay = 0 }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ scale: 0, rotate: -10 }}
    animate={{ scale: 1, rotate: [0, 5, -5, 0] }}
    transition={{ 
      scale: { delay, duration: 0.5, type: 'spring' },
      rotate: { delay: delay + 0.5, duration: 2, repeat: Infinity }
    }}
  >
    <div className="relative">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#FF0054] to-red-600 rounded-lg shadow-lg relative">
        {/* Ribbon vertical */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-3 bg-yellow-400" />
        {/* Ribbon horizontal */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-3 bg-yellow-400" />
        {/* Bow */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-0.5">
          <div className="w-4 h-4 bg-yellow-400 rounded-full transform -rotate-45" />
          <div className="w-4 h-4 bg-yellow-400 rounded-full transform rotate-45" />
        </div>
      </div>
    </div>
  </motion.div>
);

const NovogodisnjaAkcijaPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    document.title = "Novogodišnja Akcija -40% | No Code Balkan";
    
    // Target: December 31, 2025 at 23:59:59
    const targetDate = new Date(2025, 11, 31, 23, 59, 59); // Month is 0-indexed, so 11 = December
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Then update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const courses = [
    { name: "Mobilne aplikacije bez kodiranja", price: 130 },
    { name: "Pravljenje Web Sajtova bez koda", price: 149 },
    { name: "AI Kodiranje - Vibe Coding", price: 149 },
    { name: "Uvod u Web Aplikacije (softvere) bez kodiranja", price: 149 },
    { name: "A.I. ChatBot sa vašom bazom znanja", price: 100 },
    { name: "Uvod u veštačku inteligenciju", price: 149 },
    { name: "Postani Frilenser i Započni karijeru na Fiverr-u", price: 149 },
    { name: "Frilens karijera na Upwork-u", price: 149 },
    { name: "Pokreni svoj biznis na Etsy-u", price: 100 },
    { name: "Engleskog jezika - Od početnika do profesionalca", price: 197 },
    { name: "Viralni sadržaj za društvene mreže", price: 149 },
    { name: "Canva - Osnove digitalnog dizajna", price: 300 },
    { name: "Postani majstor prodaje", price: 100 },
  ];

  const bonuses = [
    { name: "Bonus Kurs A.I. Tips and tricks", value: "Besplatno" },
    { name: "Pristup zatvorenoj Chat Grupi", value: "Nema cenu" },
    { name: "Pristup svakom live-u koji ćemo imati u grupi", value: "Besplatno" },
    { name: "Kontinuirana podrška od svih predavača", value: "Neprocenljivo" },
    { name: "Poslovne prilike", value: "Besplatno" },
  ];

  const totalValue = courses.reduce((sum, course) => sum + course.price, 0);

  const handleCTAClick = () => {
    window.open('https://nocodebalkan.thinkific.com/enroll/3623700?price_id=4562634', '_blank');
  };


  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background image with opacity overlay - Desktop only */}
      <motion.div 
        className="absolute inset-0 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${mrazoviImg})`,
            opacity: 0.15
          }}
        />
        {/* Dark overlay to maintain bg-gray-900 color */}
        <div className="absolute inset-0 bg-gray-900/70" />
      </motion.div>

      {/* Snowfall CSS - GPU optimized, hidden on mobile */}
      <style>{`
        @keyframes snowfall {
          from {
            transform: translate3d(0, -20px, 0);
          }
          to {
            transform: translate3d(0, 100vh, 0);
          }
        }
        .snowflake {
          position: fixed;
          top: 0;
          color: rgba(255, 255, 255, 0.12);
          pointer-events: none;
          z-index: 0;
          animation: snowfall linear infinite;
          will-change: transform;
          display: none;
        }
        @media (min-width: 768px) {
          .snowflake {
            display: block;
          }
        }
      `}</style>
      
      {/* Snowflakes - simple and smooth, desktop only */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{ 
            left: `${8 + i * 8}%`,
            animationDuration: `${12 + i * 2}s`,
            animationDelay: `${i * 0.8}s`,
            fontSize: `${14 + (i % 3) * 4}px`,
          }}
        >
          ❄
        </div>
      ))}

      {/* Gift Boxes Decorations - Desktop only */}
      <GiftBox className="top-20 left-20 opacity-60 hidden md:block" delay={0.2} />
      <GiftBox className="top-40 right-16 opacity-50 hidden md:block" delay={0.4} />
      <GiftBox className="bottom-40 left-32 opacity-40 hidden md:block" delay={0.6} />
      <GiftBox className="bottom-60 right-24 opacity-50 hidden md:block" delay={0.8} />

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF0054]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px]" />
        {/* Festive gold accent */}
        <div className="absolute top-20 right-1/3 w-64 h-64 bg-yellow-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Floating Particles - now with festive colors */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-[#FF0054]/40' : i % 3 === 1 ? 'bg-yellow-400/40' : 'bg-green-500/40'}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 px-4 py-8 md:py-12">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF0054]/20 to-yellow-500/20 border border-[#FF0054]/50 rounded-full text-white text-sm md:text-base font-semibold">
            <PartyPopper className="w-5 h-5 text-yellow-400" />
            🎄 NOVOGODIŠNJA AKCIJA 🎄
            <PartyPopper className="w-5 h-5 text-yellow-400" />
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            🎁 PAKET OD <span className="text-[#FF0054]">13 KURSEVA</span> 🎁
          </h1>
          <motion.div 
            className="inline-block bg-gradient-to-r from-[#FF0054] via-red-500 to-[#FF0054] text-white text-2xl md:text-4xl font-bold px-8 py-4 rounded-2xl transform -rotate-2 shadow-2xl shadow-[#FF0054]/30"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            -40% POPUSTA
          </motion.div>
        </motion.div>

        {/* Marketing Hook */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-center text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
        >
          ✨ <span className="text-yellow-400 font-semibold">Najbolji poklon</span> koji nekome ili sebi možeš kupiti za <span className="text-[#FF0054] font-semibold">2026. godinu</span> ✨
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            {/* Festive border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-[#FF0054] to-green-500" />
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-gray-300 font-medium">⏰ Ponuda važi do 31. decembra u ponoć!</span>
            </div>
            <div className="grid grid-cols-4 gap-3 md:gap-6">
              {[
                { value: timeLeft.days, label: 'Dana' },
                { value: timeLeft.hours, label: 'Sati' },
                { value: timeLeft.minutes, label: 'Minuta' },
                { value: timeLeft.seconds, label: 'Sekundi' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-[#FF0054] to-red-700 rounded-xl p-3 md:p-4 mb-2 shadow-lg shadow-[#FF0054]/20 border border-red-400/20">
                    <motion.span 
                      key={item.value}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      className="text-3xl md:text-5xl font-bold text-white block"
                    >
                      {String(item.value).padStart(2, '0')}
                    </motion.span>
                  </div>
                  <span className="text-gray-400 text-sm md:text-base">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Button after countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-center mb-12"
        >
          <motion.button
            onClick={handleCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-600/90 hover:via-purple-500/90 hover:to-purple-600/90 text-white text-lg md:text-xl font-bold rounded-xl shadow-lg shadow-purple-500/30 transition-all duration-300"
          >
            <Gift className="w-5 h-5" />
            Zgrabi ponudu!
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Intro Section + Team Image - Side by side on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Intro Section - Left on desktop */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 text-center md:text-left">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-3 mb-4">
                  <Code2 className="w-8 h-8 text-[#FF0054]" />
                  <Briefcase className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                  IT Kursevi koji te spremaju za <span className="text-[#FF0054]">freelance karijeru</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
                  <span className="text-[#FF0054] font-semibold">No-code</span> je način da kreiraš web sajtove, mobilne aplikacije i automatizacije <span className="text-white font-semibold">bez kodiranja</span>.
                </p>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                  Naši kursevi te uče da koristiš moderne IT alate i <span className="text-white font-semibold">digitalni dizajn</span> koji omogućavaju da praviš profesionalne aplikacije, web sajtove i vizuelne materijale, započneš freelance karijeru i zaradiš online - <span className="text-white font-semibold">bez potrebe za programiranjem</span>.
                </p>
              </motion.div>
            </div>

            {/* Team Image - Right on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65 }}
              className="flex flex-col items-center"
            >
              <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl mb-4 w-full max-w-md">
                <img
                  src={mrazoviImg}
                  alt="No Code Balkan tim"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-center text-gray-300 text-base md:text-lg">
                Tvoja ekipa predavača: <span className="text-white font-semibold">Vlada, Nemanja, Nikola, Ilija</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Course List Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            {/* Decorative corner ornaments - Desktop only */}
            <div className="absolute top-4 left-4 text-2xl opacity-50 hidden md:block">🎄</div>
            <div className="absolute top-4 right-4 text-2xl opacity-50 hidden md:block">🎄</div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
              Evo šta dobijaš ako se priključiš našoj
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
              <span className="text-[#FF0054]">"No Code Balkan"</span> zajednici:
            </h3>

            {/* Courses */}
            <div className="space-y-3 mb-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.85 + index * 0.05 }}
                  className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors group"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-white font-medium group-hover:text-[#FF0054] transition-colors">Kurs {course.name}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-red-400/80 line-through text-base font-semibold">${course.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mini Courses Section */}
            <div className="border-t border-gray-700/50 pt-6 mb-6">
              <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                🎯 MINI KURSEVI (uključeni u ponudu):
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { name: "AI Aplikacije u Bubble" },
                  { name: "A.I. Email Automatizacija" },
                  { name: "A.I. Lični Prevodilac" },
                  { name: "AI Muzika, Narator i Zvučni Efekti" },
                  { name: "A.I. Prezentacije" },
                  { name: "Tvoj Lični AI Asistent" },
                  { name: "Lične AI slike u Freepik" },
                ].map((miniCourse, index) => (
                  <motion.div
                    key={miniCourse.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.03 }}
                    className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl"
                  >
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-white font-medium text-sm md:text-base">{miniCourse.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Total Value Summary */}
            <div className="border-t border-gray-700/50 pt-4 mb-6">
              <motion.div 
                className="flex items-center justify-between p-5 md:p-6 bg-gradient-to-r from-[#FF0054]/20 via-purple-600/20 to-[#FF0054]/20 rounded-xl border-2 border-[#FF0054]/50 shadow-lg shadow-[#FF0054]/20"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0 }}
              >
                <span className="text-white font-bold text-xl md:text-2xl">Ukupna vrednost:</span>
                <motion.span 
                  className="text-[#FF0054] font-bold text-3xl md:text-4xl drop-shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  $2000+
                </motion.span>
              </motion.div>
            </div>

            {/* Bonuses */}
            <div className="border-t border-gray-700/50 pt-6 space-y-3">
              <h4 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                🎁 BONUS SADRŽAJ:
              </h4>
              {bonuses.map((bonus, index) => (
                <motion.div
                  key={bonus.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.05 }}
                  className="flex items-start gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl"
                >
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-white font-medium">{bonus.name}</span>
                  </div>
                  <span className="text-yellow-400 font-bold flex-shrink-0">{bonus.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pricing Anchor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-2 border-[#FF0054]/50 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
            {/* Festive decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-[#FF0054] via-yellow-400 to-green-500" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF0054]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl" />
            
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 text-3xl hidden md:block">🎅</div>
            <div className="absolute top-4 right-4 text-3xl hidden md:block">🎁</div>
            <div className="absolute bottom-4 left-4 text-3xl hidden md:block">⭐</div>
            <div className="absolute bottom-4 right-4 text-3xl hidden md:block">🎄</div>

            <div className="relative z-10">
              <p className="text-gray-300 text-lg mb-4">
                Godišnja pretplata umesto <span className="line-through text-[#FF0054] text-xl font-semibold">$329</span>
              </p>
              
              <div className="inline-block my-4">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-r from-[#FF0054] via-red-500 to-[#FF0054] rounded-2xl px-8 py-6 shadow-2xl shadow-[#FF0054]/40 border-2 border-red-400/30"
                >
                  <div className="text-yellow-300 text-sm font-semibold mb-1">SAMO</div>
                  <span className="text-5xl md:text-7xl font-bold text-white">$197</span>
                  <span className="text-white text-xl">za godinu dana pristupa</span>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.35 }}
              >
                <motion.button
                  onClick={handleCTAClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-600/90 hover:via-purple-500/90 hover:to-purple-600/90 text-white text-lg md:text-xl font-bold rounded-xl shadow-lg shadow-purple-500/30 transition-all duration-300"
                >
                  <Gift className="w-5 h-5" />
                  Zgrabi ponudu!
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              <div className="flex items-center justify-center gap-2 mt-4 text-yellow-400 font-semibold">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span>Ušteda od $132 (40% popusta!)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            ✨ Šta kažu naši članovi ✨
          </h2>
          
          {/* Desktop: Masonry-like 3 column layout */}
          <div className="hidden md:block">
            <div className="columns-2 lg:columns-3 gap-4 space-y-4">
              {[
                testimonial1,
                testimonial2,
                testimonial3,
                testimonial4,
                testimonial5,
                testimonial6,
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.26 + index * 0.08 }}
                  className="break-inside-avoid mb-4"
                >
                  <div className="relative rounded-xl overflow-hidden border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm hover:border-[#FF0054]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FF0054]/10">
                    <img
                      src={img}
                      alt={`Testimonial ${index + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Single column with horizontal scroll option */}
          <div className="md:hidden">
            <div className="flex flex-col gap-4">
              {[
                testimonial1,
                testimonial2,
                testimonial3,
                testimonial4,
                testimonial5,
                testimonial6,
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.26 + index * 0.1 }}
                >
                  <div className="relative rounded-xl overflow-hidden border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm shadow-lg">
                    <img
                      src={img}
                      alt={`Testimonial ${index + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="text-center mb-12"
        >
          <motion.button
            onClick={handleCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-600/90 hover:via-purple-500/90 hover:to-purple-600/90 text-white text-lg md:text-xl font-bold rounded-xl shadow-lg shadow-purple-500/30 transition-all duration-300"
          >
            <Gift className="w-5 h-5" />
            Iskoristi ponudu!
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <p className="text-gray-400 mt-4 text-sm">
            ⚡ Ponuda ističe za {timeLeft.days} dana, {timeLeft.hours} sati i {timeLeft.minutes} minuta
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-2 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <Users className="w-8 h-8 text-[#FF0054]" />
              <span className="text-white font-semibold">1000+ Članova</span>
              <span className="text-gray-400 text-sm">Aktivna zajednica</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <Star className="w-8 h-8 text-yellow-500" />
              <span className="text-white font-semibold">4.9/5 Ocena</span>
              <span className="text-gray-400 text-sm">Od naših članova</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <Shield className="w-8 h-8 text-green-500" />
              <span className="text-white font-semibold">100% Garancija</span>
              <span className="text-gray-400 text-sm">Bez rizika</span>
            </div>
          </div>
        </motion.div>

        {/* Urgency Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-12 pb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 border border-red-500/50 rounded-full mb-4">
            <span className="text-red-400 font-semibold animate-pulse">⚠️ OGRANIČENA PONUDA</span>
          </div>
          <p className="text-gray-400 text-sm">
            <span className="hidden md:inline">🎄</span> Ova novogodišnja ponuda važi samo do 31. decembra 2025. u ponoć! <span className="hidden md:inline">🎄</span>
          </p>
          <p className="text-[#FF0054] font-semibold mt-2 text-lg">
            ✨ Ne propusti priliku da uložiš u sebe po najboljoj ceni! ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NovogodisnjaAkcijaPage;




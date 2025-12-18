import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Gamepad2, Code2, Bot, Globe2, Sparkles, ArrowRight, Check, Users, Target, Brain, Lightbulb, GraduationCap, DollarSign, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RoditeljiPage: React.FC = () => {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Roditelji Page CTA',
        content_category: 'Sign Up'
      });
    }
  };

  const benefits = [
    {
      icon: Code2,
      title: "Pravi projekti, ne igrice",
      description: "Vaš tinejdžer će graditi stvarne aplikacije i web sajtove koje može da pokaže i koristi. Portfolio koji će mu otvoriti vrata karijere dok još završava školu.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Bot,
      title: "AI tehnologije budućnosti",
      description: "Uči veštačku inteligenciju koja će oblikovati svet u kom će živeti i raditi. Ovo nije samo trend - ovo je budućnost u kojoj će već imati iskustvo.",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Globe2,
      title: "Zarada dok završava školu",
      description: "Može da radi kao freelancer za klijente širom sveta paralelno sa školom. Sloboda da zarađuje dok uči.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Target,
      title: "Finansijska nezavisnost",
      description: "Ne mora da čeka završetak fakulteta. Prvi klijenti, prvi projekti, prvi prihodi - već sada, dok je tinejdžer.",
      color: "from-purple-500 to-blue-500"
    }
  ];

  const whatTheyLearn = [
    "Kako da napravi svoju prvu aplikaciju bez kodiranja",
    "Kako da koristi AI alate za kreativne projekte",
    "Kako da kreira web sajtove i digitalne proizvode",
    "Kako da nađe prve klijente i zaradi novac",
    "Kako da gradi portfolio koji privlači poslodavce",
    "Kako da radi od kuće za klijente širom sveta"
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden pt-24 pb-12 md:py-0">
        {/* Animated background elements */}
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
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">Za roditelje koji žele najbolje za svoje tinejdžere</span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Vaš tinejdžer provodi sate na{' '}
                <span className="text-purple-400">igricama</span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-3xl text-blue-300 mb-4 md:mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Dajte mu nešto <span className="text-purple-400 font-bold">slično</span>, ali što će mu{' '}
                <span className="text-blue-400 font-bold">doneti nezavisnost i prve zarade</span>
              </motion.p>

              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Umesto da gleda kako neko drugi igra, neka <span className="text-purple-400 font-semibold">on sam kreira</span>.
                Umesto da čeka završetak fakulteta - neka <span className="text-blue-400 font-semibold">već sada zarađuje</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a 
                  href="https://nocodebalkan.thinkific.com/enroll/3569704" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleCTAClick}
                  style={{ background: '#FF0054' }}
                  className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 text-white text-lg md:text-xl font-bold rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:opacity-90 group"
                >
                  Dajte tinejdžeru priliku za finansijsku nezavisnost
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>
                <p className="text-gray-400 text-sm md:text-base">
                  Cena je manja od jedne kafe dnevno
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-gray-900 via-red-900/20 to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-purple-500/20 rounded-2xl blur-xl" />
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
                  <Gamepad2 className="w-16 h-16 text-purple-400 mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Znate taj osećaj?
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    Vaš tinejdžer provodi <span className="text-purple-400 font-semibold">sate i sate</span> pred ekranom, 
                    igrajući igrice koje mu <span className="text-purple-400 font-semibold">ne donose ništa</span>.
                  </p>
                  <p className="text-lg md:text-xl text-gray-300 mt-4 leading-relaxed">
                    Dok završava školu ili fakultet, troši vreme na igrice umesto da <span className="text-blue-400 font-semibold">gradi veštine</span> koje će mu omogućiti da 
                    <span className="text-purple-400 font-semibold"> zarađuje dok još uči</span>.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-2xl blur-xl" />
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
                  <Sparkles className="w-16 h-16 text-blue-400 mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Zamislite ovo umesto toga
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    Vaš tinejdžer <span className="text-blue-400 font-semibold">kreira svoje aplikacije</span>, 
                    gradi web sajtove, uči AI tehnologije i <span className="text-purple-400 font-semibold">već sada zarađuje</span> dok završava školu.
                  </p>
                  <p className="text-lg md:text-xl text-gray-300 mt-4 leading-relaxed">
                    Isto je <span className="text-purple-400 font-semibold">zanimljivo kao igrice</span>, 
                    ali umesto da troši vreme - <span className="text-blue-400 font-semibold">gradi finansijsku nezavisnost</span>. 
                    Umesto da čeka diplomu - <span className="text-purple-400 font-semibold">već ima prve klijente</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              No Code Balkan - <span className="text-purple-400">Edukacija koja menja život</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Prva zajednica na Balkanu koja uči tinejdžere da kreiraju digitalne proizvode i 
              <span className="text-purple-400 font-semibold"> zarađuju dok završavaju školu</span>. 
              Bez kodiranja, bez komplikacija. <span className="text-blue-400 font-semibold">Samo rezultati i prvi prihodi</span>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <motion.div
                  className={`absolute -inset-[2px] bg-gradient-to-br ${benefit.color} rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300`}
                />
                
                <div className={`relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 group-hover:border-transparent transition-all duration-300 h-full`}>
                  <motion.div 
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${benefit.color} p-2.5 mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <benefit.icon className="w-full h-full text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://nocodebalkan.thinkific.com/enroll/3569704" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleCTAClick}
              style={{ background: '#FF0054' }}
              className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 text-white text-lg md:text-xl font-bold rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:opacity-90 group"
            >
              Dajte tinejdžeru priliku sada
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What They Learn Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Šta će vaš tinejdžer naučiti?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Praktično znanje koje se odmah primenjuje i <span className="text-purple-400 font-semibold">donosi prve zarade</span>. 
              Ne teorija - <span className="text-blue-400 font-semibold">stvarni projekti i klijenti</span>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {whatTheyLearn.map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl p-6 border-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                  borderColor: 'rgba(139, 92, 246, 0.3)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(139, 92, 246, 0.6)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-start gap-3">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                  <span className="text-white text-base md:text-lg font-medium group-hover:text-white transition-colors">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-12 md:py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sada je vreme</h3>
              <p className="text-gray-300">
                Dok su drugi tinejdžeri na igricama, vaš može već sada da gradi karijeru i zarađuje. Što ranije počne, to će biti dalje ispred.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Zajednica koja podržava</h3>
              <p className="text-gray-300">
                Preko 5000 polaznika koji se međusobno podržavaju i dele znanje. Vaš tinejdžer neće biti samo - imaće mentore i prijatelje.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Zarada dok uči</h3>
              <p className="text-gray-300">
                Ne mora da čeka završetak fakulteta. Prvi klijenti, prvi projekti, prvi prihodi - već sada, dok završava školu.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* No Code Balkan Family Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900 relative overflow-hidden">
        {/* Background effects */}
        <motion.div 
          className="absolute inset-0"
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.div 
            className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-700/10 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-700/10 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -20, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-6 h-6 text-purple-400" />
              <span className="text-purple-400 font-bold text-lg md:text-xl">No Code Balkan Family</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Investicija u budućnost vaše porodice
            </h2>
          </motion.div>
            
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute -inset-[2px] bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-3xl opacity-50 blur-lg"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/20">
              <div className="space-y-6 mb-10">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Kao roditelj, znate koliko je važno da vaš tinejdžer ima <span className="text-purple-400 font-semibold">konkretne veštine</span> koje će mu omogućiti da 
                  <span className="text-blue-400 font-semibold"> stane na svoje noge</span> i bude finansijski nezavisan.
                </p>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  <span className="text-purple-400 font-bold text-xl">No Code Balkan Family</span> je paket kreiran posebno za porodice koje žele da svojoj deci pruže 
                  <span className="text-blue-400 font-semibold"> najbolju moguću startnu poziciju</span> u životu.
                </p>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Ovo nije samo edukacija. Ovo je <span className="text-purple-400 font-semibold">put ka nezavisnosti</span>, 
                  <span className="text-blue-400 font-semibold"> prvi korak ka karijeri</span>, i 
                  <span className="text-purple-400 font-semibold"> osnov za budućnost</span> koju vaš tinejdžer zaslužuje.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {[
                  {
                    title: "Kompletna podrška",
                    description: "Vaš tinejdžer dobija pristup svim kursevima, mentore koji su tu za njega, i zajednicu koja ga podržava.",
                    gradient: "from-purple-500 to-blue-500"
                  },
                  {
                    title: "Praktično znanje",
                    description: "Ne teorija - stvarni projekti, prvi klijenti, prve zarade. Veštine koje se odmah primenjuju.",
                    gradient: "from-blue-500 to-purple-500"
                  },
                  {
                    title: "Finansijska nezavisnost",
                    description: "Vaš tinejdžer može da zarađuje dok završava školu. Ne mora da čeka diplomu da počne.",
                    gradient: "from-purple-500 to-blue-500"
                  },
                  {
                    title: "Budućnost u rukama",
                    description: "Veštine koje će biti tražene još dugo. AI, No-Code, Freelance - to je budućnost rada.",
                    gradient: "from-blue-500 to-purple-500"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <motion.div
                      className={`absolute -inset-[1px] bg-gradient-to-r ${benefit.gradient} rounded-xl opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300`}
                    />
                    <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300 h-full">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Check className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-2xl md:text-3xl text-white mb-8 font-semibold">
              Dajte vašem tinejdžeru <span className="text-purple-400">najbolji start</span> u životu.
            </p>
            
            <a
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleCTAClick}
              style={{ background: '#FF0054' }}
              className="inline-flex items-center px-12 py-6 md:px-16 md:py-8 text-white text-xl md:text-2xl font-bold rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:opacity-90 group mb-4"
            >
              Upišite tinejdžera u Family paket
              <ArrowRight className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </a>
            
            <p className="text-gray-400 text-base">
              Investicija u budućnost vaše porodice
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Dajte tinejdžeru najbolji poklon
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Ne igrice koje troše vreme dok završava školu.
            </p>
            <p className="text-xl md:text-2xl text-blue-400 font-bold mb-4">
              Veštine koje donose finansijsku nezavisnost već sada.
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Cena je manja od jedne kafe dnevno. Odjavi se kad god hoćeš.
            </p>

            <a
              href="https://nocodebalkan.thinkific.com/enroll/3569704" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleCTAClick}
              style={{ background: '#FF0054' }}
              className="inline-flex items-center px-12 py-6 md:px-16 md:py-8 text-white text-xl md:text-2xl font-bold rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:opacity-90 group mb-6"
            >
              Započnite putovanje sada
              <ArrowRight className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </a>

            <p className="text-gray-500 text-sm">
              Preko 5000 zadovoljnih polaznika • Podrška 24/7 • Garantovano znanje
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoditeljiPage;


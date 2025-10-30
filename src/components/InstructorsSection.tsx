import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Trophy } from 'lucide-react';
import nemanjaImage from '../assets/images/nemanjalakic.jpg';
import vladaImage from '../assets/images/vladatamindzija.jpg';
import ilijaImage from '../assets/images/ilijakadijevic.jpg';
import nikolaImage from '../assets/images/nikolajovanovic.jpg';

interface Instructor {
  name: string;
  title: string;
  description: string;
  achievements: string[];
  image: string;
}

const instructors: Instructor[] = [
  {
    name: "Nemanja Lakić",
    title: "No-Code Developer & Edukator",
    description: "Osnivač digitalne marketing agencije YourSalesWorld i No-Code developer. Nemanja je napravio mnoštvo No-Code sajtova u svojoj agenciji u prethodnih 6 godina i nekoliko No-Code aplikacija kako za domaće tako i za inostrano tržište, od kojih se za naše tržište ističe Masterbox AI.",
    achievements: [
      "Preko 10.000 edukovanih polaznika",
      "Predavač na Masterbox i Udemy",
      "Stručnjak za No-Code razvoj"
    ],
    image: nemanjaImage
  },
  {
    name: "Vladimir Tamindžija",
    title: "Top Rated Freelancer & Mentor",
    description: "Vladimir poslednjih 8 godina radi kao digitalni dizajner na sajtu Fiverr gde ima Top Seller status i skoro 3000 završenih poslova sa perfektnim ocenama. Napravio je dva kursa na platformi Masterbox i aktivno se bavi edukacijama frilensera.",
    achievements: [
      "3000+ uspešnih projekata",
      "Top Seller na Fiverr-u",
      "Osnivač 'Freelance Podrška' grupe"
    ],
    image: vladaImage
  },
  {
    name: "Ilija Kadijević",
    title: "AI Stručnjak & Inovator",
    description: "Osnivač ChatGPT Balkan, prve AI zajednice na Balkanu, fokusirane na promociju i edukaciju o veštačkoj inteligenciji. Njegova inicijativa služi kao hub za stručnjake i entuzijaste AI, promovišući razmenu znanja i iskustava u regionu.",
    achievements: [
      "Pionir AI edukacije na Balkanu",
      "Stručnjak za AI integraciju",
      "Tech inovator"
    ],
    image: ilijaImage
  },
  {
    name: "Nikola Jovanović",
    title: "Digitalni Preduzetnik & Kreator",
    description: "10 godina u online marketingu. Osnivač digitalne agencije ConnectAd Digital sa statusom Google partnera u Srbiji poslednjih 7 godina. Serijski online preduzetnik sa trenutno aktivnim projektima kao što su 3 online shop-a i razne web aplikacije.",
    achievements: [
      "Google Partner status",
      "Milionski pregledi na mrežama",
      "Serijski preduzetnik"
    ],
    image: nikolaImage
  }
];

const InstructorsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-500 mb-4">
            Ko te vodi kroz edukaciju?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Upoznaj tim stručnjaka koji će te voditi na putu do uspeha
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-[2px] bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm"
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
              
              {/* Static pulsing border */}
              <motion.div
                className="absolute -inset-[1px] bg-gradient-to-br from-purple-500/50 via-pink-500/50 to-blue-500/50 rounded-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.01, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              />

              <motion.div
                className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-transparent transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
                
                <div className="relative flex flex-col items-center gap-6 p-8">
                  {/* Image container with enhanced effects */}
                  <motion.div 
                    className="relative w-64 h-64 flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Animated glow ring */}
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-md"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Static gradient ring */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full" />
                    
                    {/* Image */}
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-900 border-4 border-gray-800">
                      <motion.img 
                        src={instructor.image} 
                        alt={instructor.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    
                    {/* Floating sparkle */}
                    <motion.div
                      className="absolute -top-2 -right-2"
                      animate={{
                        y: [-5, 5, -5],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/50">
                        <Sparkles className="w-6 h-6 text-gray-900" />
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  <div className="flex-1 text-center w-full">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {instructor.name}
                    </motion.h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-medium mb-4 text-lg">
                      {instructor.title}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {instructor.description}
                    </p>
                    
                    {/* Enhanced achievements */}
                    <div className="flex flex-wrap gap-3 justify-center">
                      {instructor.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="relative group/badge"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {/* Badge glow */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover/badge:opacity-100 blur-sm transition-opacity" />
                          
                          <div className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30 group-hover/badge:border-purple-500/60 transition-all">
                            <Star size={14} className="text-purple-400" fill="currentColor" />
                            <span className="font-medium">{achievement}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tl-full" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full text-purple-300 mb-4">
            <Trophy size={20} />
            <span>Preko 5000 zadovoljnih polaznika</span>
          </div>
          <p className="text-gray-300 text-lg">
            Pridruži se hiljadama polaznika koji su već započeli svoju transformaciju
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorsSection;
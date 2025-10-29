import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Globe, Music, FileText, MessageCircle, Image, Clock } from 'lucide-react';

interface MiniCourse {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  platform: string;
  color: string;
  description: string;
  features: string[];
}

const miniCourses: MiniCourse[] = [
  {
    id: "bubble-ai",
    title: "AI Aplikacije",
    subtitle: "u Bubble",
    icon: Sparkles,
    platform: "bubble",
    color: "from-purple-500 to-pink-500",
    description: "Kreiraj pametne AI aplikacije bez kodiranja",
    features: ["Integracija sa OpenAI", "Custom AI modeli", "Automatizacija"]
  },
  {
    id: "email-automation",
    title: "A.I. Email",
    subtitle: "Automatizacija",
    icon: Zap,
    platform: "make",
    color: "from-blue-500 to-cyan-500",
    description: "Automatizuj email marketing uz pomoć AI",
    features: ["Smart kampanje", "Personalizacija", "A/B testiranje"]
  },
  {
    id: "ai-translator",
    title: "A.I. Lični",
    subtitle: "Prevodilac",
    icon: Globe,
    platform: "chatgpt",
    color: "from-green-500 to-emerald-500",
    description: "Prevodi tekst na bilo koji jezik trenutno",
    features: ["Više jezika", "Kontekst prevoda", "Prirodan jezik"]
  },
  {
    id: "ai-audio",
    title: "AI Muzika, Narator",
    subtitle: "i Zvučni Efekti",
    icon: Music,
    platform: "freepik",
    color: "from-orange-500 to-red-500",
    description: "Kreiraj profesionalne audio sadržaje",
    features: ["AI kompozicije", "Voice-over", "Sound FX"]
  },
  {
    id: "ai-presentations",
    title: "A.I.",
    subtitle: "Prezentacije",
    icon: FileText,
    platform: "gamma",
    color: "from-indigo-500 to-purple-500",
    description: "Generiši prezentacije uz pomoć AI",
    features: ["Smart dizajn", "Auto sadržaj", "Animacije"]
  },
  {
    id: "personal-assistant",
    title: "Tvoj Lični",
    subtitle: "AI Asistent",
    icon: MessageCircle,
    platform: "google-ai",
    color: "from-blue-500 to-indigo-500",
    description: "Kreiraj svog personalnog AI asistenta",
    features: ["Custom znanje", "24/7 dostupnost", "Automatizacija"]
  },
  {
    id: "ai-images",
    title: "Lične AI slike",
    subtitle: "u Freepik",
    icon: Image,
    platform: "freepik",
    color: "from-pink-500 to-rose-500",
    description: "Generiši jedinstvene AI slike za svoj brend",
    features: ["Unique stil", "Brend elementi", "Bez limita"]
  },
  {
    id: "coming-soon",
    title: "Uskoro stiže",
    subtitle: "još mnogo toga!",
    icon: Clock,
    platform: "coming-soon",
    color: "from-gray-500 to-slate-500",
    description: "Novi kursevi su na putu",
    features: ["Pratite nas", "Novi sadržaj", "Uskoro"]
  }
];

const MiniCoursesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-purple-900/50 relative overflow-hidden">
      {/* Animated background elements */}
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5"
          >
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">+</span>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Veliki broj mini kurseva!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dodatni kursevi koji će ti pomoći da unaprediš svoje znanje i veštine
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {miniCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"
                initial={false}
                animate={{ scale: [0.95, 1], opacity: [0, 0.5] }}
                exit={{ scale: 0.95, opacity: 0 }}
              />
              <div className="relative bg-gray-800 rounded-xl p-6 h-full transform transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${course.color} p-3 shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <course.icon className="w-full h-full text-white" strokeWidth={1.5} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {course.title}
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        {course.subtitle}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
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
          <motion.a
            href="https://nocodebalkan.thinkific.com/order?ct=b23d954d-15c7-402b-ad0f-9fff6b075e6d" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg text-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Želim da započnem edukaciju
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default MiniCoursesSection;
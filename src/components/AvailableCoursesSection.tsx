import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Bot, Globe2, Video, Users, Clock, BookOpen, Laptop, Brush, MessageSquare, Languages, ShoppingBag, CalendarCheck } from 'lucide-react';

// Import course images
import aiCodingImg from '../assets/images/courses/ai-coding.jpg';
import upworkCareerImg from '../assets/images/courses/upwork-career.jpg';
import canvaDesignImg from '../assets/images/courses/canva-design.jpg';
import mobileAppsImg from '../assets/images/courses/mobile-apps.jpg';
import chatbotImg from '../assets/images/courses/chatbot.jpg';
import salesMasterImg from '../assets/images/courses/sales-master.jpg';
import webDevelopmentImg from '../assets/images/courses/web-development.jpg';
import viralContentImg from '../assets/images/courses/viral-content.jpg';
import fiverrCareerImg from '../assets/images/courses/fiverr-career.jpg';
import customGptImg from '../assets/images/courses/custom-gpt.jpg';
import bubbleAppsImg from '../assets/images/courses/bubble-apps.jpg';
import aiIntroImg from '../assets/images/courses/ai-intro.jpg';
import figmaImg from '../assets/images/courses/figma.jpg';
import englishImg from '../assets/images/courses/english.jpg';
import etsyBusinessImg from '../assets/images/courses/etsy-business.jpg';
import weeklyCallsImg from '../assets/images/courses/weekly-calls.jpg';

interface CourseFeature {
  icon: React.ReactNode;
  text: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: CourseFeature[];
  color: string;
  level: string;
  platform: string;
  image: string;
  instructorSpace?: boolean;
}

const courses: Course[] = [
  {
    id: "ai-coding",
    title: "A.I. Kodiranje (vajb koding)",
    description: "Nauči kako da koristiš AI alate da pišeš kod i automatizuješ programiranje.",
    icon: Bot,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "15+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Praktični projekti" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-blue-500 to-cyan-500",
    level: "AI Alati",
    platform: "bolt",
    image: aiCodingImg,
    instructorSpace: true
  },
  {
    id: "upwork-career",
    title: "Freelance Karijera na Upwork-u",
    description: "Kompletan vodič za uspešnu freelance karijeru na Upwork platformi.",
    icon: Globe2,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "20+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Mentorstvo" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-green-500 to-teal-500",
    level: "Freelance",
    platform: "upwork",
    image: upworkCareerImg,
    instructorSpace: true
  },
  {
    id: "canva-design",
    title: "Canva Osnove digitalnog dizajna",
    description: "Savladaj osnove digitalnog dizajna uz Canva platformu.",
    icon: Brush,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "10+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Praktični projekti" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-purple-500 to-pink-500",
    level: "Dizajn",
    platform: "canva",
    image: canvaDesignImg,
    instructorSpace: true
  },
  {
    id: "mobile-apps",
    title: "Mobilne Aplikacije Bez Kodiranja",
    description: "Kreiraj native mobilne aplikacije pomoću Adalo platforme.",
    icon: Laptop,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "25+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Praktični primeri" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-blue-500 to-indigo-500",
    level: "No-Code",
    platform: "adalo",
    image: mobileAppsImg,
    instructorSpace: true
  },
  {
    id: "chatbot",
    title: "A.I. ChatBot sa vašom bazom znanja bez koda",
    description: "Nauči kako da kreiraš custom chatbota sa Chatbase platformom.",
    icon: MessageSquare,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "12+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Praktični primeri" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-green-500 to-emerald-500",
    level: "AI Alati",
    platform: "chatbase",
    image: chatbotImg,
    instructorSpace: true
  },
  {
    id: "sales-master",
    title: "Postani Majstor Prodaje",
    description: "Savladaj veštine prodaje i pregovaranja za online poslovanje.",
    icon: Globe2,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "20+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Praktični primeri" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-yellow-500 to-orange-500",
    level: "Prodaja",
    platform: "sales",
    image: salesMasterImg,
    instructorSpace: true
  },
  {
    id: "web-development",
    title: "Pravljenje Web Sajtova bez koda",
    description: "Nauči kako da kreiraš profesionalne sajtove sa WordPress i Elementor.",
    icon: Code2,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "30+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Praktični projekti" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-blue-500 to-cyan-500",
    level: "Web Razvoj",
    platform: "wordpress",
    image: webDevelopmentImg,
    instructorSpace: true
  },
  {
    id: "viral-content",
    title: "Viralni sadržaj za društvene mreže",
    description: "Nauči kako da kreiraš viralni sadržaj za TikTok i Instagram.",
    icon: Video,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "25+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Analiza primera" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-pink-500 to-rose-500",
    level: "Marketing",
    platform: "social",
    image: viralContentImg,
    instructorSpace: true
  },
  {
    id: "fiverr-career",
    title: "Postani Frilenser i Započni Karijeru na Fiverr-u",
    description: "Kompletan vodič za uspešnu freelance karijeru na Fiverr platformi.",
    icon: Globe2,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "20+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Mentorstvo" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-green-500 to-emerald-500",
    level: "Freelance",
    platform: "fiverr",
    image: fiverrCareerImg,
    instructorSpace: true
  },
  {
    id: "custom-gpt",
    title: "Napravi Svoj Custom GPT",
    description: "Nauči kako da kreiraš i optimizuješ svoje Custom GPT modele.",
    icon: Bot,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "15+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Praktični primeri" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-blue-500 to-indigo-500",
    level: "AI Alati",
    platform: "chatgpt",
    image: customGptImg,
    instructorSpace: true
  },
  {
    id: "bubble-apps",
    title: "Uvod u Web Aplikacije Bez Kodiranja",
    description: "Nauči kako da kreiraš web aplikacije pomoću Bubble platforme.",
    icon: Code2,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "25+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Praktični projekti" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-blue-500 to-cyan-500",
    level: "No-Code",
    platform: "bubble",
    image: bubbleAppsImg,
    instructorSpace: true
  },
  {
    id: "ai-intro",
    title: "Uvod u Veštačku Inteligenciju",
    description: "Osnovni koncepti i primena veštačke inteligencije u poslovanju.",
    icon: Bot,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "15+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Praktični primeri" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-purple-500 to-indigo-500",
    level: "AI Alati",
    platform: "chatgpt",
    image: aiIntroImg,
    instructorSpace: true
  },
  {
    id: "figma",
    title: "Figma sajtovi za početnike i profesionalce",
    description: "Od osnovnih koncepata do naprednih tehnika dizajna u Figmi.",
    icon: Brush,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "30+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Praktični projekti" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-purple-500 to-pink-500",
    level: "Dizajn",
    platform: "figma",
    image: figmaImg,
    instructorSpace: true
  },
  {
    id: "english",
    title: "Engleski jezik od početnika do profesionalca",
    description: "Savladaj poslovni engleski jezik za uspešnu online karijeru.",
    icon: Languages,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "40+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Praktične vežbe" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-blue-500 to-sky-500",
    level: "Jezik",
    platform: "english",
    image: englishImg,
    instructorSpace: true
  },
  {
    id: "etsy-business",
    title: "Pokreni svoj biznis na Etsy-ju",
    description: "Nauči kako da pokreneš i skaliraš uspešan biznis na Etsy platformi.",
    icon: ShoppingBag,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "25+ video lekcija" },
      { icon: <Users className="w-4 h-4" />, text: "Praktični primeri" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-orange-500 to-red-500",
    level: "E-Commerce",
    platform: "etsy",
    image: etsyBusinessImg,
    instructorSpace: true
  },
  {
    id: "weekly-calls",
    title: "Weekly Call Recordings",
    description: "Pristup snimcima svih weekly poziva i live sesija sa zajednicom.",
    icon: CalendarCheck,
    features: [
      { icon: <BookOpen className="w-4 h-4" />, text: "Weekly snimci" },
      { icon: <Users className="w-4 h-4" />, text: "Q&A sesije" },
      { icon: <Clock className="w-4 h-4" />, text: "Doživotni pristup" }
    ],
    color: "from-purple-500 to-violet-500",
    level: "Zajednica",
    platform: "recordings",
    image: weeklyCallsImg,
    instructorSpace: true
  }
];

const AvailableCoursesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
            Dostupni kursevi
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Izaberi svoj put i započni transformaciju svoje karijere već danas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 group hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {course.instructorSpace && (
                <div className="relative w-full aspect-[16/9] bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent" />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${course.color} p-2.5 shrink-0`}>
                    <course.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${course.color} text-white mb-2`}>
                      {course.level}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-gray-300">{course.description}</p>
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
          <p className="text-gray-300 text-lg mb-6">
            Ne čekaj da ti neko drugi uzme mesto. Počni odmah!
          </p>
          <motion.a
            href="https://nocodebalkan.thinkific.com/order?ct=b23d954d-15c7-402b-ad0f-9fff6b075e6d" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Započni promenu
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AvailableCoursesSection;
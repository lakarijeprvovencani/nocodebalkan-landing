import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Da li mi je potrebno prethodno iskustvo?",
      answer: "Ne ne i ne! Ne treba ti apsolutno nikakvo prethodno isksutvo za naše edukacije. Treba ti samo računar, internet i dobra volja."
    },
    {
      question: "Kako funkcioniše pristup kursu?",
      answer: "Jedna pretplata ti daje pristup svim kursevima (uključujući i sve buduće koje budemo objavljivali), chat grupi, live sesijama. Bez skrivenih troškova."
    },
    {
      question: "Kako se vrši plaćanje?",
      answer: "Plaćanje se vrši platnim karticama. Pretplata se obnavlja na mesečnom nivou."
    },
    {
      question: "Kada počinje kurs?",
      answer: "Svim kursevima imaš pristup odmah nakon prijave. Takođe, svi kursevi su online i možeš da ih gledaš u vreme i tempom koji tebi odgovara."
    },
    {
      question: "Da li mogu da prekinem pretplatu na edukacije?",
      answer: "Da, moguće je da prekineš pretplatu na edukacije u svakom momentu."
    },
    {
      question: "Do kad imam pristup sadržaju?",
      answer: "Pristup sadržaju imaš sve vreme dok imaš aktivnu pretplatu."
    },
    {
      question: "Da li je bitno koliko imam godina?",
      answer: "Apsolutno ne. Svako može da prati ove edukacije bez obzira na pol i godine."
    },
    {
      question: "Da li mogu da pratim edukacije preko telefona?",
      answer: "Naravno. U svakom trenutku imaćeš pristup edukaciji. Sve kurseve možeš da pratiš sa bilo kog uređaja na kojem imaš internet."
    },
    {
      question: "Da li stvarno aplikacije i sajtovi mogu da se prave bez koda?",
      answer: "Najstvarnije! Vidimo se na edukaciji!"
    },
    {
      question: "Da li mora da se plaća karticom?",
      answer: "Pošto je ovo model gde se pretplata odvija na mesečnom nivou, kartično plaćanje je jedini način. Sve kartice osim Dina card su podržane."
    },
    {
      question: "Da li moram da imam deviznu karticu?",
      answer: "Ne, nije potrebno da imaš karticu na kojoj su devizna sredstva jer se automatski vrši konvertovanje valuta."
    },
    {
      question: "Kako da znam da sam uspešno otkazao/la pretplatu?",
      answer: "Prilikom odjave sa platforme dobićete email koji potvrđuje Vašu uspešnu odjavu. Molimo Vas da proverite i foldere kao što su Promotions, Spam, Junk ili Trash, jer se ponekad dešava da email ne stigne direktno u inbox. Ukoliko takav email nije stigao, slobodno nam pišite – rado ćemo Vam pomoći da uspešno završite proces odjave."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Najčešće postavljena pitanja
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Gradient border */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-75 transition duration-300"
                style={{
                  opacity: openIndex === index ? 0.75 : 0
                }}
              />
              
              <div className={`relative bg-gray-800/90 backdrop-blur-sm rounded-xl transition-all duration-300 ${
                openIndex === index ? 'bg-opacity-90' : 'bg-opacity-50'
              }`}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-purple-400" />
                    ) : (
                      <Plus className="w-6 h-6 text-purple-400" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
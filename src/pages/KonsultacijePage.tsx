import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Mail, User, Calendar, Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const KonsultacijePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'konsultacije',
          'name': formData.name,
          'email': formData.email,
          'phone': formData.phone
        }).toString()
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '' });
        
        // Track Facebook Pixel event
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'Consultation Form',
            content_category: 'Consultation'
          });
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Došlo je do greške. Molimo pokušajte ponovo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-4 md:left-8 z-50"
      >
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white transition-all duration-300 group shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium hidden md:inline">Nazad na sajt</span>
        </Link>
      </motion.div>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-4">
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-4 md:mb-6"
            >
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold text-sm md:text-base">Besplatne konsultacije</span>
            </motion.div>

            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Zakaži <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">besplatan</span> razgovor
            </motion.h1>

            <motion.p
              className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Ostavi svoje podatke i javićemo ti se u roku od 24h.<br />
              Razgovaraćemo o tvojim ciljevima i kako ti možemo pomoći.
            </motion.p>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
              {!isSubmitted ? (
                <div className="relative max-w-2xl mx-auto">
                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 md:p-8 border border-gray-700/50">
                    <form 
                      onSubmit={handleSubmit}
                      name="konsultacije"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      className="space-y-5"
                    >
                      {/* Hidden fields for Netlify */}
                      <input type="hidden" name="form-name" value="konsultacije" />
                      <p className="hidden">
                        <label>
                          Don't fill this out: <input name="bot-field" />
                        </label>
                      </p>
                      
                      {/* Name field */}
                      <div className="group">
                        <label htmlFor="name" className="flex items-center gap-2 text-gray-400 mb-2 text-xs md:text-sm font-medium group-focus-within:text-blue-400 transition-colors">
                          <User className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          Kako se zoveš?
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Tvoje ime i prezime"
                          className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl bg-gray-900/50 text-white text-sm md:text-base border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-gray-500"
                        />
                      </div>

                      {/* Email field */}
                      <div className="group">
                        <label htmlFor="email" className="flex items-center gap-2 text-gray-400 mb-2 text-xs md:text-sm font-medium group-focus-within:text-blue-400 transition-colors">
                          <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          Tvoj email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="ime@primer.com"
                          className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl bg-gray-900/50 text-white text-sm md:text-base border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-gray-500"
                        />
                      </div>

                      {/* Phone field */}
                      <div className="group">
                        <label htmlFor="phone" className="flex items-center gap-2 text-gray-400 mb-2 text-xs md:text-sm font-medium group-focus-within:text-blue-400 transition-colors">
                          <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          Broj telefona
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+381 61 234 5678"
                          className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl bg-gray-900/50 text-white text-sm md:text-base border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-gray-500"
                        />
                      </div>

                      {/* Info box */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-blue-500/10 border border-blue-500/20"
                      >
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-blue-300 text-xs md:text-sm font-medium mb-1">
                            Potpuno besplatno, bez obaveza
                          </p>
                          <p className="text-gray-400 text-xs">
                            Odgovorićemo na sva tvoja pitanja i pomoći ti da doneseš pravu odluku.
                          </p>
                        </div>
                      </motion.div>

                      {/* Submit button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        style={{ background: isSubmitting ? '#6B7280' : '#FF0054' }}
                        className="w-full py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 disabled:opacity-50 text-white hover:opacity-90 shadow-lg"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        {isSubmitting ? 'Šaljem...' : 'Zakažimo razgovor →'}
                      </motion.button>
                    </form>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-blue-500/20 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mb-6"
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <CheckCircle className="w-12 h-12 text-blue-400" />
                    </div>
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Sjajno! Primili smo tvoju prijavu 🎉
                  </h2>
                  <p className="text-gray-300 text-lg">
                    Javićemo ti se u narednih 24 sata i dogovorićemo najbolje vreme za razgovor.
                  </p>
                </motion.div>
              )}
          </motion.div>

          {/* Weekend notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 md:mt-8 max-w-2xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-800/30 border border-gray-700/30">
              <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <p className="text-gray-400 text-xs md:text-sm">
                <span className="font-medium text-gray-300">Napomena:</span> Ako zakažete vikendom, kontaktiraćemo vas u ponedeljak.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KonsultacijePage;


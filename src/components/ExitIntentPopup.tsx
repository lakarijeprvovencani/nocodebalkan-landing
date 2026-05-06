import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Loader2, AlertCircle, ArrowRight } from 'lucide-react';

const CALENDLY_CONSULT_URL = 'https://calendly.com/no-code-asistent/30min';
const WEBINAR_YEARLY_OFFER_URL =
  'https://nocodebalkan.thinkific.com/enroll/3623700?coupon=god249';

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
  });

  useEffect(() => {
    if (window.location.pathname.includes('novogodisnjaakcija')) {
      return;
    }

    if (window.location.search.includes('showpopup=1')) {
      setIsVisible(true);
      return;
    }

    const alreadyShown = sessionStorage.getItem('exitPopupShown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;

    if (isMobile) {
      const mobileTimer = setTimeout(() => {
        if (!hasShown) {
          setIsVisible(true);
          setHasShown(true);
          sessionStorage.setItem('exitPopupShown', 'true');
        }
      }, 20000);

      return () => {
        clearTimeout(mobileTimer);
      };
    } else {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0 && !hasShown) {
          setIsVisible(true);
          setHasShown(true);
          sessionStorage.setItem('exitPopupShown', 'true');
        }
      };

      const timer = setTimeout(() => {
        document.addEventListener('mouseleave', handleMouseLeave);
      }, 5000);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        'https://hook.eu2.make.com/am7r411qrbc1gy4cfomv6uqx6j9vdwqc',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formData, source: 'popup_consultation' }),
        }
      );

      if (response.ok) {
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'Exit Popup - Consultation',
            content_category: 'Consultation',
          });
        }
        window.location.assign(CALENDLY_CONSULT_URL);
      } else {
        setError('Došlo je do greške. Molimo pokušajte ponovo.');
        console.error('Webhook error:', response.status, response.statusText);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(
        'Došlo je do greške pri slanju. Proverite internet konekciju i pokušajte ponovo.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[10000]"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-[10001] p-4"
          >
            <div className="relative w-full max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF0054] via-purple-500 to-blue-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF0054]/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-800/70 hover:bg-gray-700 border border-gray-700/60 text-gray-300 hover:text-white transition-colors shadow-md"
                aria-label="Zatvori"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative p-6 md:p-8">
                {/* Top: webinar offer (secondary) */}
                <a
                  href={WEBINAR_YEARLY_OFFER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-5 rounded-xl border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/15 px-3 py-2.5 text-center transition-colors"
                >
                  <p className="text-xs md:text-sm text-gray-200 leading-snug">
                    🎁 Iskoristi ponudu sa našeg webinara —{' '}
                    <span className="text-[#FF0054] font-bold">
                      uštedi $550
                    </span>{' '}
                    na godišnjoj pretplati.
                  </p>
                </a>

                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF0054] to-purple-600 rounded-full mb-4 shadow-lg shadow-[#FF0054]/30">
                    <Phone
                      className="w-8 h-8 text-white"
                      strokeWidth={2.2}
                      fill="currentColor"
                      style={{ transform: 'rotate(15deg)' }}
                    />
                  </div>
                  <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-purple-300 mb-2">
                    Bez obaveze • 15 minuta
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Zakaži besplatnu konsultaciju
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    Imaš dodatnih pitanja? Pričaj direktno sa nama 15 minuta i
                    proverimo zajedno da li je ovo pravo za tebe.
                  </p>
                </div>

                {/* Error message */}
                {error && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-300 mb-1.5"
                      >
                        Ime
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        placeholder="Marko"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF0054]/50 focus:border-[#FF0054] transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-gray-300 mb-1.5"
                      >
                        Prezime
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        placeholder="Marković"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF0054]/50 focus:border-[#FF0054] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Email adresa
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="marko@example.com"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF0054]/50 focus:border-[#FF0054] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#FF0054] to-purple-600 hover:from-[#FF0054]/90 hover:to-purple-600/90 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg shadow-[#FF0054]/25"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Šaljem...
                      </>
                    ) : (
                      <>
                        <Phone
                          className="w-5 h-5"
                          strokeWidth={2.2}
                          fill="currentColor"
                          style={{ transform: 'rotate(15deg)' }}
                        />
                        Zakaži poziv
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-center text-gray-500 text-xs mt-4">
                  Tvoji podaci su sigurni i nećemo ih deliti sa trećim licima.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

// Timer koji se resetuje svakih 15 minuta
const getTimeUntilNext15Min = () => {
  const now = new Date();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const totalSecondsLeft = (15 - (minutes % 15)) * 60 - seconds;
  const secs = totalSecondsLeft > 0 ? totalSecondsLeft : 0;
  return {
    minutes: Math.floor(secs / 60),
    seconds: secs % 60,
  };
};

const WebinarPromenaPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilNext15Min());
  const [isEmbedLoaded, setIsEmbedLoaded] = useState(false);
  const [showEmbedFallback, setShowEmbedFallback] = useState(false);

  useEffect(() => {
    document.title = "Besplatan Webinar - Postoji drugi način | No Code Balkan";

    const updateTimer = () => {
      setTimeLeft(getTimeUntilNext15Min());
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const WEBINAR_REGISTER_URL = 'https://event.webinarjam.com/6yy69/register/n003vb5l';
  const WEBINAR_EMBED_HASH = 'n003vb5l';

  useEffect(() => {
    const wrapper = document.getElementById('wj-embed-wrapper');
    if (!wrapper) return;

    let isCancelled = false;
    let pollIntervalId: number | null = null;
    let timeoutId: number | null = null;

    setIsEmbedLoaded(false);
    setShowEmbedFallback(false);

    const markLoaded = () => {
      if (isCancelled) return;
      setIsEmbedLoaded(true);
      setShowEmbedFallback(false);
      if (pollIntervalId) window.clearInterval(pollIntervalId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };

    const hasIframe = () => !!wrapper.querySelector('iframe');

    if (hasIframe()) {
      markLoaded();
      return;
    }

    let script = wrapper.querySelector('script[src*="embed-form"]') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.src = `https://event.webinarjam.com/register/${WEBINAR_EMBED_HASH}/embed-form?formButtonText=Prijavi+se+besplatno&formAccentColor=%2329b6f6&formAccentOpacity=0.95&formBgColor=%23ffffff&formBgOpacity=1`;
      script.async = true;
      wrapper.appendChild(script);
    }

    pollIntervalId = window.setInterval(() => {
      if (hasIframe()) {
        markLoaded();
      }
    }, 250);

    timeoutId = window.setTimeout(() => {
      if (isCancelled) return;
      if (!hasIframe()) {
        setShowEmbedFallback(true);
      }
      if (pollIntervalId) window.clearInterval(pollIntervalId);
    }, 5000);

    return () => {
      isCancelled = true;
      if (pollIntervalId) window.clearInterval(pollIntervalId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [WEBINAR_EMBED_HASH]);

  const bullets = [
    'Kako obični ljudi sa Balkana bez IT iskustva prave sajtove i aplikacije za strane klijente',
    'Uživo demonstraciju alata koji ne zahtevaju programiranje i koje može svako da nauči',
    'Realne priče ljudi koji su promenili karijeru posle 30, 40 i 50 godina',
    'Kako izgledaju prvih 30 dana učenja ako imaš samo sat vremena uveče',
  ];

  // Isti testimonijali kao na glavnoj stranici nocodebalkan.com
  const testimonials = [
    { name: 'Ana Vićentić', text: 'Samo ću reći da je ovo najbolje osmišljen i realizovan kurs na koji sam naišla u stalnom istraživanju raznih edukacija. Smatram da se za mesečnu cenu kursa dobija džinovski paket svega i svačega korisnog koji je mnogo vredniji od tog novca.' },
    { name: 'Jurica Kolobarić', text: 'U NoCode zajednicu priključio sam se 15.2.2024 godine bez ikakvog predznanja o bilo kojem NoCode programu. 3,5 mjeseca bazirao sam se samo na program Adalo i u njemu sam napravio neke aplikacije. Danas sam sa klijentom dogovorio prvu prodaju aplikacije. Za samo tri i po mjeseca od potpunog neznanja do prvog prihoda. AKO MOGU JA ZAŠTO NE BI MOGLI I VI???' },
    { name: 'Nada Samardžić', text: 'No Code Balkan me je izuzetno inspirisao i promenio način na koji gledam na tehnologiju! Pre nekoliko meseci pridružila sam se ovoj zajednici, i moram priznati da je to bila jedna od najboljih odluka koje sam donela.' },
    { name: 'Slađana Avramović Šešum', text: 'Odlična zajednica gde svi mentori i članovi pomažu jedni drugima, gde su mentori uvek na raspolaganju spremni da izađu u susret i sa savetima i u rešavanju problema. Sve lepo objašnjeno. Svake nedelje webinari sa aktuelnim temama, zatvorene grupe samo za članove.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background effects - nocodebalkan stil */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 px-4 py-12 md:py-20 max-w-3xl mx-auto">
        {/* SECTION 1: HERO */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ustaješ. Ideš na posao. Vratiš se. Ponoviš.{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Postoji drugi način.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto">
            Besplatan webinar za ljude sa Balkana koji osećaju da zaslužuju više od rutine u kojoj su zaglavili.
          </p>

          {/* Timer + CTA - jedan blok, lepo grupisano */}
          <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
            <div className="w-full bg-gray-800/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl px-6 py-5">
              <p className="text-gray-400 text-sm mb-3">Sledeći webinar za:</p>
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-white tabular-nums">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-gray-400 text-lg ml-1">min</span>
                </div>
                <span className="text-3xl font-bold text-purple-400">:</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-white tabular-nums">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-gray-400 text-lg ml-1">sek</span>
                </div>
              </div>
            </div>
            <a
              href="#webinar-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 text-white text-lg md:text-xl font-bold rounded-xl shadow-lg shadow-purple-500/30 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('webinar-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Prijavi se besplatno
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.section>

        {/* SECTION 2: WHAT YOU'LL SEE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-6">
              Na ovom webinaru ćete videti:
            </p>
            <ul className="space-y-5">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-base md:text-lg leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* SECTION 3: SOCIAL PROOF - isti testimonijali kao na glavnoj stranici */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-center text-xl md:text-2xl font-bold text-white mb-2">
            2.000+ članova je prošlo naše edukacije
          </p>
          <p className="text-center text-gray-400 mb-8">Šta su polaznici rekli o nama:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-7"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 italic">"{t.text}"</p>
                <p className="text-purple-400 font-semibold text-lg">{t.name}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 4: WebinarJam embedded form - script MORA biti unutar wrapper div-a */}
        <motion.section
          id="webinar-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-10 flex flex-col items-center">
            <p className="text-center text-white font-semibold text-lg md:text-xl mb-6">
              Unesi email i prijavi se besplatno
            </p>
            <div
              id="wj-embed-wrapper"
              className="wj-embed-wrapper min-h-[200px] w-full max-w-[500px] mx-auto"
              data-webinar-hash={WEBINAR_EMBED_HASH}
            />
            {!isEmbedLoaded && !showEmbedFallback && (
              <p className="text-center text-gray-400 text-sm mt-3">Učitavamo formu...</p>
            )}
            {showEmbedFallback && (
              <div className="text-center mt-4">
                <p className="text-gray-300 text-sm mb-4">
                  Forma trenutno ne može da se učita u okviru stranice.
                </p>
                <a
                  href={WEBINAR_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 text-white text-base md:text-lg font-bold rounded-xl shadow-lg shadow-purple-500/30 transition-all duration-300"
                >
                  Otvori prijavu u novom prozoru
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            )}
          </div>
        </motion.section>

        {/* SECTION 5: FINAL PUSH */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center pb-16"
        >
          <p className="text-gray-400 text-lg md:text-xl italic max-w-lg mx-auto leading-relaxed">
            Nemaš šta da izgubiš osim još jedne večeri pred ekranom koja ne menja ništa.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default WebinarPromenaPage;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PolitikaPrivatnosti: React.FC = () => {
  useEffect(() => {
    document.title = "Uslovi korišćenja i politika privatnosti - No Code Balkan";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header with back button */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Nazad na početnu</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Uslovi korišćenja i politika privatnosti
        </h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">1. Uvod</h2>
            <p className="text-gray-300 leading-relaxed">
              Dobrodošli u NoCode Balkan, platformu koja omogućava svojim članovima pristup obrazovnim materijalima, kursevima, i alatima za razvoj veština korišćenja no-code alata. Platforma funkcioniše na principu mesečne pretplate i namenjena je promociji no-code pokreta i olakšavanju pristupa obrazovanju i resursima za sve zainteresovane strane.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Pravno lice i vlasništvo:
            </p>
            <p className="text-gray-300 leading-relaxed">
              Ova veb stranica (nocodebalkan.com) je u vlasništvu i pod upravom firme <strong className="text-white">Zero Code Apps LLC</strong>, registrovane u državi <strong className="text-white">Wyoming, Sjedinjene Američke Države (SAD)</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">2. Prihvatanje Uslova</h2>
            <p className="text-gray-300 leading-relaxed">
              Pristupom ili korišćenjem Servisa, korisnici pristaju na ove Uslove korišćenja. Svaki korisnik je obavezan da pažljivo pročita i razume Uslove pre korišćenja Servisa. Korišćenjem Servisa, korisnik izjavljuje da prihvata Uslove korišćenja i obavezuje se da će ih poštovati.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">3. Uslovi Pristupa i Korišćenja</h2>
            <p className="text-gray-300 leading-relaxed">
              Pristup NoCode Balkan zajednici i njenim resursima moguć je isključivo na osnovu mesečne pretplate. Pretplata se automatski obnavlja do momenta otkazivanja od strane korisnika. Specifični uslovi pretplate, uključujući cenu i period važenja, detaljno su opisani na našoj platformi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">4. Prava i Obaveze Korisnika</h2>
            <p className="text-gray-300 leading-relaxed">
              Korisnici se obavezuju da će koristiti platformu u skladu sa svim primenljivim zakonima, pravilima zajednice, i ovim Uslovima korišćenja. Zabranjeno je svako postupanje koje bi moglo štetiti NoCode Balkan, drugim korisnicima, ili trećim licima.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Autorska Prava</h2>
            <p className="text-gray-300 leading-relaxed">
              Sav sadržaj na platformi, uključujući tekstove, slike, video materijale, i softver, zaštićen je autorskim pravima i pravima intelektualne svojine NoCode Balkan, korisnika, ili trećih lica. Korisnicima je dozvoljeno korišćenje sadržaja isključivo za lične, nekomercijalne svrhe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">6. Zaštita Podataka o Ličnosti</h2>
            <p className="text-gray-300 leading-relaxed">
              NoCode Balkan se obavezuje da će štititi podatke o ličnosti korisnika u skladu sa važećim zakonima o zaštiti podataka. Detalji o prikupljanju, korišćenju, i zaštiti podataka o ličnosti korisnika dostupni su u Pravilniku o zaštiti podataka, koji je sastavni deo ovih Uslova korišćenja.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">7. Izmena Uslova Korišćenja</h2>
            <p className="text-gray-300 leading-relaxed">
              NoCode Balkan zadržava pravo da u bilo kom trenutku izmeni ili dopuni ove Uslove korišćenja. Sve izmene stupaju na snagu odmah po objavljivanju na platformi. Nastavkom korišćenja platforme nakon izmena, smatra se da korisnici prihvataju nove Uslove.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">8. Ograničenje Odgovornosti</h2>
            <p className="text-gray-300 leading-relaxed">
              NoCode Balkan ne garantuje neprekidan pristup platformi, niti ispravnost svih sadržaja i servisa. Kompanija neće biti odgovorna za bilo kakve štete nastale usled korišćenja ili nemogućnosti korišćenja platforme i njenih resursa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">9. Rešavanje Sporova</h2>
            <p className="text-gray-300 leading-relaxed">
              Svi eventualni sporovi koji proizlaze iz korišćenja NoCode Balkan platforme biće rešavani pregovorima, a u slučaju da to nije moguće, pred nadležnim sudovima u Republici Srbiji.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">10. Politika Povraćaja Novca</h2>
            <p className="text-gray-300 leading-relaxed">
              Povraćaj novca za već naplaćene pretplate nije moguć. Ukoliko korisnik ne otkaže pretplatu na vreme i naplata za naredni period je već izvršena, neće biti izvršen povraćaj sredstava.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">11. Završne Odredbe</h2>
            <p className="text-gray-300 leading-relaxed">
              Ovi Uslovi korišćenja predstavljaju celokupni sporazum između NoCode Balkan i korisnika u vezi sa korišćenjem platforme. Ništa u ovim Uslovima ne može se tumačiti kao stvaranje bilo kakvog partnerstva, agencije, ili radnog odnosa između NoCode Balkan i korisnika.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Za dodatne informacije ili pitanja u vezi sa ovim Uslovima korišćenja, molimo vas da kontaktirate NoCode Balkan
            </p>
          </section>

          {/* FAQ Section */}
          <section className="border-t border-gray-700 pt-8 mt-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Često postavljana pitanja</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Da li mi je potrebno prethodno iskustvo?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ne ne i ne! Ne treba ti apsolutno nikakvo prethodno iskustvo za naše edukacije. Treba ti samo računar, internet i dobra volja.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Kako funkcioniše pristup kursu?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Jedna pretplata ti daje pristup svim kursevima (uključujući i sve buduće koje budemo objavljivali), chat grupi, live sesijama. Bez skrivenih troškova.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Kako se vrši plaćanje?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Plaćanje se vrši platnim karticama. Pretplata se obnavlja na mesečnom nivou.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Kada počinje kurs?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Svim kursevima imaš pristup odmah nakon prijave. Takođe, svi kursevi su online i možeš da ih gledaš u vreme i tempom koji tebi odgovara.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Da li mogu da prekinem pretplatu na edukacije?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Da, moguće je da prekineš pretplatu na edukacije u svakom momentu.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Do kad imam pristup sadržaju?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Pristup sadržaju imaš sve vreme dok imaš aktivnu pretplatu.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Da li je bitno koliko imam godina?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Apsolutno ne. Svako može da prati ove edukacije bez obzira na pol i godine.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Da li mogu da pratim edukacije preko telefona?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Naravno. U svakom trenutku imaćeš pristup edukaciji. Sve kurseve možeš da pratiš sa bilo kog uređaja na kojem imaš internet.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Da li stvarno aplikacije i sajtovi mogu da se prave bez koda?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Najstvarnije! Vidimo se na edukaciji!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Da li mora da se plaća karticom?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Pošto je ovo model gde se pretplata odvija na mesečnom nivou, kartično plaćanje je jedini način. Sve kartice osim Dina card su podržane.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Da li moram da imam deviznu karticu?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ne, nije potrebno da imaš karticu na kojoj su devizna sredstva jer se automatski vrši konvertovanje valuta.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Back button at the bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            <span>Vrati se na početnu stranicu</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PolitikaPrivatnosti;


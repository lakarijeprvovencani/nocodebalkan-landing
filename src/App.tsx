import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationBanner from './components/ConsultationBanner';
import ExitIntentPopup from './components/ExitIntentPopup';
import HomePage from './pages/HomePage';
import HomePageVariantB from './pages/HomePageVariantB';
import CTAPage from './pages/CTAPage';
import WebinarSuccessPage from './pages/WebinarSuccessPage';
import NovogodisnjaAkcijaPage from './pages/NovogodisnjaAkcijaPage';
import LifetimePage from './pages/LifetimePage';
import RoditeljiPage from './pages/RoditeljiPage';
import KonsultacijePage from './pages/KonsultacijePage';
import PolitikaPrivatnosti from './pages/PolitikaPrivatnosti';
import PoziviPage from './pages/PoziviPage';
import nocodeekipaImg from './assets/images/nocodeekipa.jpg';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={
            <div className="relative">
              {/* Background image with opacity overlay */}
              <div 
                className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
                style={{
                  backgroundImage: `url(${nocodeekipaImg})`,
                  opacity: 0.15
                }}
              />
              {/* Dark overlay to maintain bg-gray-900 color */}
              <div className="fixed inset-0 bg-gray-900/70 -z-10" />
              <Navbar />
              <HomePageVariantB />
              <Footer />
              <ExitIntentPopup />
            </div>
          } />
          <Route path="/heronaslov" element={
            <>
              <Navbar />
              <HomePageVariantB />
              <Footer />
              <ExitIntentPopup />
            </>
          } />
          <Route path="/cta" element={
            <div className="relative">
              {/* Background image with opacity overlay */}
              <div 
                className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
                style={{
                  backgroundImage: `url(${nocodeekipaImg})`,
                  opacity: 0.15
                }}
              />
              {/* Dark overlay to maintain bg-gray-900 color */}
              <div className="fixed inset-0 bg-gray-900/70 -z-10" />
              <Navbar />
              <CTAPage />
              <Footer />
              <ExitIntentPopup />
            </div>
          } />
          <Route path="/lifetime" element={
            <>
              <LifetimePage />
              <ExitIntentPopup />
            </>
          } />
          <Route path="/roditelji" element={
            <>
              <RoditeljiPage />
              <ExitIntentPopup />
            </>
          } />
          <Route path="/konsultacije" element={
            <>
              <KonsultacijePage />
              <ExitIntentPopup />
            </>
          } />
          <Route path="/uslovi-koriscenja" element={
            <>
              <PolitikaPrivatnosti />
              <Footer />
              <ExitIntentPopup />
            </>
          } />
          <Route path="/pozivi" element={
            <>
              <ConsultationBanner />
              <Navbar />
              <PoziviPage />
              <Footer />
              <ExitIntentPopup />
            </>
          } />
          <Route path="/uspesna-prijava-za-webinar-everwebinar" element={
            <>
              <WebinarSuccessPage />
            </>
          } />
          <Route path="/novogodisnjaakcija" element={
            <>
              <NovogodisnjaAkcijaPage />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LifetimePage from './pages/LifetimePage';
import RoditeljiPage from './pages/RoditeljiPage';
import PolitikaPrivatnosti from './pages/PolitikaPrivatnosti';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          } />
          <Route path="/lifetime" element={
            <>
              <LifetimePage />
            </>
          } />
          <Route path="/roditelji" element={
            <>
              <RoditeljiPage />
            </>
          } />
          <Route path="/uslovi-koriscenja" element={
            <>
              <PolitikaPrivatnosti />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
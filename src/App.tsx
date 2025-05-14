import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import HomePage from './pages/HomePage';
import QuemPrecisa from './pages/QuemPrecisa';
import PassoAPasso from './pages/PassoAPasso';
import Dicas from './pages/Dicas';
import Faq from './pages/Faq';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quem-precisa" element={<QuemPrecisa />} />
            <Route path="/passo-a-passo" element={<PassoAPasso />} />
            <Route path="/dicas" element={<Dicas />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;

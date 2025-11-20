import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founder from './components/Founder';
import PracticeAreas from './components/PracticeAreas';
import Articles from './components/Articles';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <PracticeAreas />
        <Articles />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
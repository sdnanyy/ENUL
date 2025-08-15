import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import EmotionalMentoring from './components/EmotionalMentoring';
import Problem from './components/Problem';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <Hero />
      <Problem />
      <EmotionalMentoring />
      <Testimonials />
      <Pillars />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
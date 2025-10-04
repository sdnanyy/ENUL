import React, { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import EmotionalMentoring from './components/EmotionalMentoring';
import Problem from './components/Problem';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        onOpenContactForm={() => setContactFormOpen(true)}
      />
      <ContactForm 
        isOpen={contactFormOpen} 
        onClose={() => setContactFormOpen(false)} 
      />
      <Hero />
      <Problem onOpenContactForm={() => setContactFormOpen(true)} />
      <EmotionalMentoring />
      <Testimonials />
      <Pillars />
      <CTA onOpenContactForm={() => setContactFormOpen(true)} />
      <Footer />
    </div>
  );
}

export default App;
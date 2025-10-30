import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import HeroSection from './components/HeroSection';
// import Pillars from './components/Pillars'; // Removendo a importação de Pillars
import EmotionalMentoring from './components/EmotionalMentoring';
import Problem from './components/Problem';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/register') {
      setContactFormOpen(true);
    } else {
      setContactFormOpen(false);
    }
  }, [location.pathname]);

  const handleCloseContactForm = () => {
    setContactFormOpen(false);
    if (location.pathname === '/register') {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onOpenContactForm={() => setContactFormOpen(true)}
      />
      <ContactForm
        isOpen={contactFormOpen}
        onClose={handleCloseContactForm}
      />
      
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection onOpenContactForm={() => setContactFormOpen(true)} />
            <Problem onOpenContactForm={() => setContactFormOpen(true)} />
            <EmotionalMentoring onOpenContactForm={() => setContactFormOpen(true)} />
            <Testimonials onOpenContactForm={() => setContactFormOpen(true)} />
            {/* <Pillars /> Removendo o componente Pillars */}
            <CTA onOpenContactForm={() => setContactFormOpen(true)} />
          </>
        } />
        <Route path="/register" element={null} /> 
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
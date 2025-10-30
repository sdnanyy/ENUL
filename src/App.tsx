import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'; // Importando Routes, Route, useLocation, useNavigate
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import HeroSection from './components/HeroSection';
import Pillars from './components/Pillars';
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
      navigate('/'); // Navega de volta para a home se o formulário foi aberto pela rota /register
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
        onClose={handleCloseContactForm} // Usando a nova função de fechar
      />
      
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection onOpenContactForm={() => setContactFormOpen(true)} />
            <Problem onOpenContactForm={() => setContactFormOpen(true)} />
            <EmotionalMentoring onOpenContactForm={() => setContactFormOpen(true)} />
            <Testimonials onOpenContactForm={() => setContactFormOpen(true)} />
            <Pillars />
            <CTA onOpenContactForm={() => setContactFormOpen(true)} />
          </>
        } />
        {/* A rota /register é tratada pelo useEffect para abrir o modal, não renderiza um componente diretamente aqui */}
        <Route path="/register" element={null} /> 
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
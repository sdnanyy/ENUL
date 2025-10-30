import { useState } from 'react'; // Mantido caso haja outros usos de useState no futuro
import { ChevronRight } from 'lucide-react'; // Mantido caso haja outros usos de ChevronRight no futuro

interface HeroSectionProps {
  onOpenContactForm: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContactForm }) => {
  // A variável whatsappUrl foi removida pois não é mais utilizada.

  return (
    <section className="relative bg-gradient-to-r from-brand-purple to-brand-teal text-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Desbloqueie seu Potencial Bilíngue
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Aprenda idiomas de forma imersiva e eficaz, com foco na cultura e na sua inteligência emocional.
        </p>
        <div className="mb-8 animate-fade-in-up delay-400">
          <button // Alterado de <a> para <button>
            onClick={onOpenContactForm} // Adicionado onClick para abrir o formulário
            className="bg-brand-teal text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-brand-teal/90 transition-colors duration-300"
          >
            Fale Conosco
          </button>
        </div>
        <div className="flex justify-center items-center space-x-4 text-sm md:text-base animate-fade-in-up delay-600">
          <span className="flex items-center">
            <ChevronRight className="w-5 h-5 mr-2" /> Aulas com Nativos
          </span>
          <span className="flex items-center">
            <ChevronRight className="w-5 h-5 mr-2" /> Metodologia Exclusiva
          </span>
          <span className="flex items-center">
            <ChevronRight className="w-5 h-5 mr-2" /> Mentoria Emocional
          </span>
        </div>
      </div>
      {/* Elementos de fundo decorativos */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full -top-16 -left-16"></div>
        <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full -bottom-32 -right-32"></div>
      </div>
    </section>
  );
};

export default HeroSection;
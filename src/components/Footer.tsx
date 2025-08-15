import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-teal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2">
            <div className="mb-6">
              <img 
                src="/uni-languages-logo.png" 
                alt="Uni Languages" 
                className="h-10 sm:h-12 brightness-0 invert"
              />
            </div>
            <p className="text-sm sm:text-base text-white/80 mb-6 leading-relaxed">
              Transformamos a insegurança em confiança. Ajudamos mulheres a se expressarem 
              naturalmente em inglês por meio de aulas personalizadas e acolhedoras.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contato</h4>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/80">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-yellow" />
                <span>contato@unilanguages.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-yellow" />
                <a 
                  href="https://wa.me/5511950816765"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-yellow transition-colors cursor-pointer"
                >
                  (11) 9 5081-6765
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand-yellow" />
                <span>Onde você estiver</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm sm:text-base text-white/60">
          <p>&copy; 2025 Uni Languages. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
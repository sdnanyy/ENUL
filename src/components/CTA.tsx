import React from 'react';
import { Calendar, Gift, MessageCircle, CheckCircle, Clock, DollarSign, X } from 'lucide-react';

export default function CTA() {
  const whatsappNumber = "5511950816765";
  const whatsappMessage = "Olá! Quero agendar minha aula e receber meu diagnóstico personalizado!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
          O investimento que transforma sua confiança e abre portas na sua carreira
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Na Uni Languages, você investe em autonomia, autoestima e oportunidades reais com o inglês.
        </p>

       
        {/* Price Comparison Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
            Compare as opções do mercado:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Cursos Gravados - Alterado para amarelo */}
            <div className="bg-white/20 rounded-2xl p-4 sm:p-6 border-2 border-brand-yellow">
              <div className="flex items-center justify-center mb-4">
                <X className="h-8 w-8 text-brand-yellow" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">Cursos Gravados</h4>
              <div className="text-2xl sm:text-3xl font-bold text-brand-yellow mb-4">R$ 2.000</div>
              <ul className="text-white/80 text-xs sm:text-sm space-y-2">
                <li>• Você estuda sozinha</li>
                <li>• Sem feedback personalizado</li>
                <li>• Sem prática de conversação</li>
                <li>• Alta taxa de desistência</li>
              </ul>
            </div>

            {/* Uni Languages - Melhor contraste */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-brand-orange relative shadow-lg">
              <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 bg-brand-orange text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-md">
                MELHOR OPÇÃO
              </div>
              <div className="flex items-center justify-center mb-4 mt-2">
                <CheckCircle className="h-8 w-8 text-brand-teal" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Uni Languages</h4>
              <div className="text-2xl sm:text-3xl font-bold text-brand-orange mb-1">R$ 399</div>
              <div className="text-xs sm:text-sm font-bold text-gray-800 mb-4">por mês</div>
              <ul className="text-gray-800 text-xs sm:text-sm space-y-2 font-medium">
                <li>• <strong className="text-brand-teal">Foco total em você</strong></li>
                <li>• <strong className="text-brand-teal">Apoio emocional</strong></li>
                <li>• <strong className="text-brand-teal">Evolução real comprovada</strong></li>
                <li>• <strong className="text-brand-teal">Aulas 100% personalizadas</strong></li>
              </ul>
            </div>
          </div>

                     
          <p className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
            Comece hoje com uma condição especial!
          </p>


          
         
        {/* 25% OFF */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto relative mb-8">
      

          {/* Current Price Badge */}
          <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-brand-yellow text-brand-teal px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">R$299</div>
              <div className="text-xs sm:text-sm font-medium">por mês</div>
            </div>
          </div>

          <div className="flex items-center justify-center mb-6 mt-6 sm:mt-4">
            <Gift className="h-6 w-6 sm:h-8 sm:w-8 text-brand-yellow mr-2 sm:mr-3 flex-shrink-0" />
            <span className="text-lg sm:text-2xl font-bold text-white text-center">OFERTA ESPECIAL - Plano Semestral</span>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white">
                <CheckCircle className="h-5 w-5 text-brand-yellow flex-shrink-0" />
                <span className="text-base sm:text-lg">Aulas focadas no seu objetivo</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <CheckCircle className="h-5 w-5 text-brand-yellow flex-shrink-0" />
                <span className="text-base sm:text-lg">Diagnóstico personalizado</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <CheckCircle className="h-5 w-5 text-brand-yellow flex-shrink-0" />
                <span className="text-base sm:text-lg">Simulações profissionais</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white">
                <CheckCircle className="h-5 w-5 text-brand-yellow flex-shrink-0" />
                <span className="text-base sm:text-lg">Suporte direto com o professor</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <CheckCircle className="h-5 w-5 text-brand-yellow flex-shrink-0" />
                <span className="text-base sm:text-lg">Mentoria emocional</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <CheckCircle className="h-5 w-5 text-brand-yellow flex-shrink-0" />
                <span className="text-base sm:text-lg">Ebook exclusivo</span>
              </div>
            </div>
          </div>

          <p className="text-white/90 mb-6 text-base sm:text-lg text-center">
            Garantia de satisfação de 7 dias
          </p>
        </div>
          
<p className="text-lg sm:text-xl font-bold text-white text-center mb-4">
            Está pronta para mudar de vez a forma como aprende inglês?
          </p>
          
          {/* Vagas Limitadas Badge */}
          <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 bg-white text-brand-teal px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-bold">VAGAS LIMITADAS</span>
            </div>
          </div>
        </div>

        {/* Botão CTA */}
        <div className="text-center">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-teal px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg mb-4"
          >
            Quero agendar minha aula agora!
          </a>
        </div>

      </div>
    </section>
  );
}
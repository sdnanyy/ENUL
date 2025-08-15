import React from 'react';
import { TrendingUp, Award, Users, MessageCircle } from 'lucide-react';

export default function ValueAnchoring() {
  const whatsappNumber = "5511950816765";
  const whatsappMessage = "Olá! Vi os resultados das alunas e quero começar minha transformação!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ROI Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O investimento que transforma sua carreira
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o retorno real que nossas alunas obtiveram ao dominar inglês e espanhol
          </p>
        </div>

        {/* ROI Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-green-100">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-2">+47%</h3>
            <p className="text-base sm:text-lg font-semibold text-center text-gray-800 mb-3">Aumento salarial médio</p>
            <p className="text-sm sm:text-base text-gray-600 text-center">Nossas alunas relatam promoções e aumentos significativos após dominarem o idioma</p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-blue-100">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-2">3x</h3>
            <p className="text-base sm:text-lg font-semibold text-center text-gray-800 mb-3">Mais oportunidades</p>
            <p className="text-sm sm:text-base text-gray-600 text-center">Acesso a vagas internacionais e posições de liderança global</p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-purple-100 sm:col-span-2 md:col-span-1">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-2">95%</h3>
            <p className="text-base sm:text-lg font-semibold text-center text-gray-800 mb-3">Ganham confiança</p>
            <p className="text-sm sm:text-base text-gray-600 text-center">Se sentem seguras para falar em reuniões e apresentações</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg sm:text-xl text-gray-700 mb-6 font-medium">
            Você também pode ter esses resultados!
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-teal to-brand-orange text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Quero Minha Transformação</span>
          </a>
        </div>
      </div>
    </section>
  );
}
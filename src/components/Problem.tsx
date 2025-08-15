import React from 'react';
import { AlertTriangle, CheckCircle, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Problem() {
  const whatsappNumber = "5511950816765";
  const whatsappMessage = "Olá! Me identifiquei com os problemas apresentados e quero conhecer a solução da Uni Languages!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="solucao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="slideRight">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Você se reconhece nessa situação?
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>Trava na hora de falar</strong>, mesmo sabendo a gramática e o vocabulário.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>Tem medo de errar</strong>, de ser julgada, de parecer incapaz.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>Falta alguém para praticar de verdade</strong> — conversar, corrigir, incentivar.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>Já fez aulas gravadas</strong>, mas não teve disciplina nem motivação pra seguir sozinha.
                </p>
              </div>
            </div>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Quero Resolver Isso Agora!</span>
            </a>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft" className="bg-gradient-to-br from-brand-yellow/10 to-brand-orange-light/10 rounded-3xl p-6 sm:p-8 mt-8 lg:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              Nossa solução para você:
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-teal flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>Ambiente seguro</strong> para praticar sem medo de julgamentos
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-teal flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>Foco total na sua necessidade</strong> com temas do seu interesse
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-teal flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>Correção gentil</strong> dos erros para aprendizado natural
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-brand-teal flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>Professores especializados</strong> em quebrar barreiras psicológicas
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl">
              <p className="text-center text-base sm:text-lg font-semibold text-gray-900 mb-4 leading-relaxed">
                "Em 3 meses, você vai se surpreender com seu progresso!"
              </p>
              <div className="text-center">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-brand-orange text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-brand-orange-light transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Começar Minha Transformação</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
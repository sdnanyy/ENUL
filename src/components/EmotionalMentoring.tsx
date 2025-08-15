import React from 'react';
import { Heart, Shield, Users, MessageCircle, CheckCircle, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function EmotionalMentoring() {
  const whatsappNumber = "5511950816765";
  const whatsappMessage = "Olá! Quero conhecer mais sobre o método da Uni Languages!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const mentoringFeatures = [
    {
      icon: Heart,
      title: "Acolhimento personalizado",
      description: "Entendemos suas inseguranças e criamos um ambiente seguro para você se expressar sem medo de julgamentos."
    },
    {
      icon: Shield,
      title: "Quebra de barreiras psicológicas",
      description: "Trabalhamos juntas para superar o medo de errar e transformar a ansiedade em confiança."
    },
    {
      icon: Users,
      title: "Apoio contínuo",
      description: "Você não está sozinha nessa jornada. Oferecemos suporte emocional durante todo o processo de aprendizagem."
    },
    {
      icon: MessageCircle,
      title: "Comunicação empática",
      description: "Nossos professores são treinados para entender e apoiar suas necessidades emocionais específicas."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-teal/5 to-brand-orange/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 text-brand-teal mr-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Mentoria Emocional
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Mais do que aulas de inglês, trabalhamos sua confiança e autoestima durante toda a jornada de aprendizagem
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <AnimatedSection animation="slideRight">
            <div className="space-y-8">
              {mentoringFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-brand-teal/10 rounded-full p-3 flex-shrink-0">
                      <Icon className="h-6 w-6 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="bg-brand-yellow/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-10 w-10 text-brand-yellow" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Por que a mentoria emocional nas aulas faz diferença?
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-teal flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>95% das nossas alunas</strong> relatam aumento significativo na autoconfiança
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-teal flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Redução de 80%</strong> na ansiedade ao falar inglês em situações reais
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-teal flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Transformação completa</strong> da relação com o idioma em 3 meses
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-brand-teal/10 to-brand-orange/10 rounded-2xl p-6 text-center">
                <p className="text-gray-800 font-medium mb-4 italic">
                  "Não é só sobre gramática e vocabulário. É sobre você se sentir capaz, confiante e livre para se expressar."
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  - Filosofia Uni Languages
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="text-center">
          <AnimatedSection>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 font-medium">
              Pronta para transformar seu jeito de falar inglês?
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-teal to-brand-orange text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Quero conhecer o método</span>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

import { Users, MessageCircle, Globe, Heart, Clock, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const benefits = [
  {
    icon: Clock,
    title: 'Aulas de inglês no seu ritmo',
    description: 'Aprenda com personalização total — respeitando sua rotina, seu jeito e seu tempo.',
    color: 'teal'
  },
  {
    icon: MessageCircle,
    title: 'Conversação real',
    description: 'Aulas de conversação real com prática leve, correção gentil e zero julgamentos. Aqui você não precisa ter medo de treinar inglês.',
    color: 'yellow'
  },
  {
    icon: Shield,
    title: 'Mentoria individual',
    description: 'Mentoria e acompanhamento individual pra te ajudar a vencer o medo de errar.',
    color: 'orange'
  },
  {
    icon: Heart,
    title: 'Ambiente acolhedor',
    description: 'Nada de rigidez ou pressão. Aqui, você se sente segura, respeitada e motivada.',
    color: 'teal'
  },
  {
    icon: Globe,
    title: 'Confiança global',
    description: 'Desenvolva a confiança para se comunicar em qualquer situação profissional ou pessoal.',
    color: 'yellow'
  },
  {
    icon: Users,
    title: 'Inglês do dia a dia',
    description: 'Você aprende com músicas, filmes e conversas reais — nada de decoreba cansativa.',
    color: 'orange'
  }
];

const colorClasses = {
  teal: 'text-brand-teal bg-brand-teal/10',
  yellow: 'text-brand-yellow bg-brand-yellow/10',
  'orange-light': 'text-brand-orange-light bg-brand-orange-light/10',
  orange: 'text-brand-orange bg-brand-orange/10'
};

export default function Pillars() {
  const whatsappNumber = "5511950816765";
  const whatsappMessage = "Olá! Vi os benefícios da Uni Languages e gostaria saber como funcionam as aulas!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="pilares" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefícios de aprender inglês com a Uni Languages
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como nossa metodologia única pode transformar sua relação com o inglês
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <AnimatedSection
                key={index}
                animation="slideUp"
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl ${colorClasses[benefit.color as keyof typeof colorClasses]} flex items-center justify-center mb-6`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </AnimatedSection>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Já imaginou ter tudo isso aprendendo inglês?
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-brand-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-brand-orange-light transition-all transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Fale conosco</span>
          </a>
        </div>
      </div>
    </section>
  );
}
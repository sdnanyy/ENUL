import LazyImage from "./LazyImage";
import AnimatedSection from "./AnimatedSection";
import { Users, Star, MessageCircle } from 'lucide-react';

interface HeroSectionProps {
  onOpenContactForm: () => void;
}

const HeroSection = ({ onOpenContactForm }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-brand-yellow/5 py-20 pt-32 sm:pt-40 lg:pt-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda: Conteúdo de Texto */}
          <AnimatedSection animation="slideRight">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Você merece se sentir segura falando <span className="bg-brand-teal text-white px-3 py-1 rounded-lg inline-block">inglês</span> - e a gente te mostra como.
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-lg">
              Com aulas online, personalizadas e práticas, você vai superar o medo de falar inglês. Aulas feitas no seu ritmo - com confiança e leveza.
            </p>
            <button
              onClick={onOpenContactForm}
              className="bg-brand-orange text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-orange-light transition-all transform hover:scale-105 shadow-lg mb-8"
            >
              Quero saber mais
            </button>

            {/* Prova Social */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <div className="flex items-center space-x-2 text-gray-700">
                <Users className="h-5 w-5 text-brand-teal" />
                <span className="font-semibold">+200 alunas</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Star className="h-5 w-5 text-brand-yellow fill-current" />
                <span className="font-semibold">4.8/5 avaliação</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <MessageCircle className="h-5 w-5 text-brand-orange" />
                <span className="font-semibold">Foco na fala</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Coluna Direita: Blocos Visuais (Cards) - Layout para Desktop/Tablet */}
          <AnimatedSection animation="slideLeft" className="relative h-[500px] hidden lg:block">
            {/* Card 1: Reuniões (Canto Superior Direito) */}
            <div className="bg-white rounded-2xl shadow-xl p-4 w-72 absolute top-0 right-0">
              <LazyImage
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
                alt="Mulher em reunião de trabalho"
                className="rounded-xl mb-3 h-36 w-full object-cover"
                width={400}
                height={250}
              />
              <p className="font-semibold text-gray-800 text-center">Reuniões</p>
            </div>

            {/* Card 2: Viagens pelo mundo (Meio Esquerda) */}
            <div className="bg-white rounded-2xl shadow-xl p-4 w-72 absolute top-1/3 left-0 z-10">
              <LazyImage
                src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
                alt="Pessoa viajando pelo mundo"
                className="rounded-xl mb-3 h-36 w-full object-cover"
                width={400}
                height={250}
              />
              <p className="font-semibold text-gray-800 text-center">Viagens pelo mundo</p>
            </div>

            {/* Card 3: Apresentações com confiança (Canto Inferior Direito, com selo) */}
            <div className="bg-white rounded-2xl shadow-xl p-4 w-72 relative absolute bottom-0 right-1/4">
              <div className="absolute -top-4 -right-4 bg-brand-teal text-white px-3 py-1 rounded-full text-xs font-bold shadow-md rotate-3">
                95% das alunas ganham confiança
              </div>
              <LazyImage
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
                alt="Mulher fazendo apresentação com confiança"
                className="rounded-xl mb-3 h-36 w-full object-cover"
                width={400}
                height={250}
              />
              <p className="font-semibold text-gray-800 text-center">Apresentações com confiança</p>
            </div>
          </AnimatedSection>

          {/* Coluna Direita: Blocos Visuais (Cards) - Layout para Mobile (empilhado) */}
          <div className="lg:hidden flex flex-col items-center space-y-6 mt-12">
            {/* Card 1: Reuniões */}
            <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-xs">
              <LazyImage
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
                alt="Mulher em reunião de trabalho"
                className="rounded-xl mb-3 h-40 w-full object-cover"
                width={400}
                height={250}
              />
              <p className="font-semibold text-gray-800 text-center">Reuniões</p>
            </div>

            {/* Card 2: Viagens pelo mundo */}
            <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-xs">
              <LazyImage
                src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
                alt="Pessoa viajando pelo mundo"
                className="rounded-xl mb-3 h-40 w-full object-cover"
                width={400}
                height={250}
              />
              <p className="font-semibold text-gray-800 text-center">Viagens pelo mundo</p>
            </div>

            {/* Card 3: Apresentações com confiança (com selo) */}
            <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-xs relative">
              <div className="absolute -top-4 -right-4 bg-brand-teal text-white px-3 py-1 rounded-full text-xs font-bold shadow-md rotate-3">
                95% das alunas ganham confiança
              </div>
              <LazyImage
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
                alt="Mulher fazendo apresentação com confiança"
                className="rounded-xl mb-3 h-40 w-full object-cover"
                width={400}
                height={250}
              />
              <p className="font-semibold text-gray-800 text-center">Apresentações com confiança</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
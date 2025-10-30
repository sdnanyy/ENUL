import { MessageCircle, Users, Star } from 'lucide-react'; // Importando apenas os ícones utilizados
import LazyImage from './LazyImage'; // Importando LazyImage

const HeroSection = () => { // Removendo HeroSectionProps e onOpenContactForm
  const whatsappNumber = "5511950816765";
  const whatsappMessage = "Olá! Quero saber mais sobre as aulas de inglês da Uni Languages!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-brand-yellow/10 via-white to-brand-orange-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Você merece se sentir segura falando{' '}
              <span className="relative inline-block">
                <span className="text-brand-teal bg-brand-teal/10 px-1 sm:px-2 py-1 rounded-lg border-2 border-brand-teal/20 shadow-sm">
                  inglês
                </span>
              </span>{' '}
 - e a gente te mostra como.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Com aulas online, personalizadas e práticas, você vai superar o medo de falar inglês. Aulas feitas no seu ritmo – com confiança e leveza.
            </p>
            
            <div className="mb-8">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-brand-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-brand-orange-light transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Quero saber mais</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-brand-teal" />
                <span>+200 alunas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-brand-yellow" />
                <span>4.9/5 avaliação</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-brand-teal" />
                <span>Foco na fala</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Grid de fotos principais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Mulher em videoconferência */}
              <div className="bg-white rounded-2xl shadow-xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <LazyImage
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
                  alt="Mulher jovem em videoconferência profissional"
                  className="w-full h-40 sm:h-48 object-cover rounded-xl"
                  width={400}
                  height={300}
                  quality={85}
                />
                <div className="text-center mt-3">
                  <p className="text-sm font-semibold text-gray-800">Reuniões</p>
                  <p className="text-xs text-gray-600">internacionais</p>
                </div>
              </div>

              {/* Mulher viajando */}
              <div className="bg-white rounded-2xl shadow-xl p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <LazyImage
                  src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
                  alt="Mulher jovem viajando e explorando o mundo"
                  className="w-full h-40 sm:h-48 object-cover rounded-xl"
                  width={400}
                  height={300}
                  quality={85}
                />
                <div className="text-center mt-3">
                  <p className="text-sm font-semibold text-gray-800">Viagens</p>
                  <p className="text-xs text-gray-600">pelo mundo</p>
                </div>
              </div>
            </div>

            {/* Foto maior - Apresentações com confiança */}
            <div className="bg-white rounded-2xl shadow-xl p-4 transform rotate-1 hover:rotate-0 transition-transform duration-300 relative">
              <LazyImage
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Mulher confiante apresentando em reunião"
                className="w-full h-48 sm:h-56 object-cover rounded-xl"
                width={600}
                height={400}
                quality={90}
              />
              <div className="text-center mt-3">
                <p className="text-sm font-semibold text-gray-800">Apresentações</p>
                <p className="text-xs text-gray-600">com confiança</p>
              </div>
              
              {/* Badge de estatística */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-brand-teal text-white p-2 sm:p-3 rounded-xl shadow-lg">
                <div className="text-lg sm:text-2xl font-bold">95%</div>
                <div className="text-xs sm:text-sm">das alunas ganham confiança</div>
              </div>
            </div>

            {/* Fotos menores adicionais */}
            <div className="grid grid-cols-2 gap-4 mt-4 hidden sm:grid">
              {/* Mulher em ambiente de trabalho */}
              <div className="bg-white rounded-xl shadow-lg p-3 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <LazyImage
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Mulher profissional confiante"
                  className="w-full h-32 object-cover rounded-lg"
                  width={300}
                  height={200}
                  quality={80}
                />
                <div className="text-center mt-2">
                  <p className="text-xs font-semibold text-gray-800">Carreira</p>
                </div>
              </div>

              {/* Mulher estudando/aprendendo */}
              <div className="bg-white rounded-xl shadow-lg p-3 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <LazyImage
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
                  alt="Mulher jovem estudando idiomas"
                  className="w-full h-32 object-cover rounded-lg"
                  width={300}
                  height={200}
                  quality={80}
                />
                <div className="text-center mt-2">
                  <p className="text-xs font-semibold text-gray-800">Aprendizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
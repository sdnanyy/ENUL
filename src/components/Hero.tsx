import { Button } from "./ui/button";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <AnimatedSection className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Aprenda idiomas de forma <span className="text-indigo-600">eficaz e divertida</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Descubra uma nova maneira de aprender idiomas com nossa metodologia inovadora e professores especializados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="mb-8">
                <a href="#contact-form">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg">
                    Comece agora
                  </Button>
                </a>
              </div>
              <div>
                <a href="#courses">
                  <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 text-lg">
                    Ver cursos
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-200 to-blue-300 rounded-2xl shadow-2xl w-full max-w-lg h-96 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
                      <div className="bg-indigo-500 rounded-full w-8 h-8"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Aprendizado Interativo</h3>
                  <p className="text-white/90">Experimente nossa metodologia única</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">+10.000</p>
                    <p className="text-sm text-gray-600">Alunos satisfeitos</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <div className="bg-blue-500 w-3 h-3 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">+20</p>
                    <p className="text-sm text-gray-600">Idiomas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-200 opacity-20 rounded-bl-full"></div>
    </AnimatedSection>
  );
};

export default Hero;
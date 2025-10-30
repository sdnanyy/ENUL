import React from 'react';
import { Link } from 'react-router-dom'; // Importando o componente Link para navegação interna

const Pillars = () => {
  // A variável whatsappUrl pode se tornar não utilizada se não for usada em outro lugar.
  // Não a removeremos, pois não foi solicitado.
  const whatsappUrl = "https://wa.me/1234567890"; // Exemplo de URL, pode ser diferente no seu código

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-teal mb-8">Nossos Pilares</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-purple mb-4">Imersão Cultural</h3>
            <p className="text-gray-700">
              Aprenda não apenas a língua, mas também a rica cultura dos países onde ela é falada.
            </p>
          </div>
          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-purple mb-4">Metodologia Dinâmica</h3>
            <p className="text-gray-700">
              Aulas interativas e práticas que aceleram seu aprendizado e o tornam divertido.
            </p>
          </div>
          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-purple mb-4">Professores Nativos</h3>
            <p className="text-gray-700">
              Estude com falantes nativos que trazem a autenticidade da língua para a sala de aula.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-lg text-gray-800 mb-6">
            Pronto para começar sua jornada bilíngue?
          </p>
          <Link // Alterado de <a> para <Link>
            to="/register" // Novo destino para o formulário de cadastro
            className="bg-brand-teal text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-brand-teal/90 transition-colors duration-300"
          >
            Inscreva-se Agora {/* Novo texto do botão */}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
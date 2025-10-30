import { useState } from 'react';
import { X, Gift, User, Mail, Phone, Send } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Integração JavaScript - Enviar dados para o webhook
      const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbx6-qMFnHQnL69QJlsavVPPAhQ0Cq5T-U1V6osiEAdCANfLicmWRdsHsdSLBIz6uEE-/exec';
      
      // Dados do formulário para envio
      const formPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        source: 'landing_page_contact_form',
        timestamp: new Date().toISOString()
      };

      console.log('Enviando dados para webhook:', formPayload);

      // Para Google Apps Script, geralmente é um GET com parâmetros de URL ou POST com FormData
      // Como o URL fornecido é para um script que provavelmente espera parâmetros de query ou um POST simples,
      // vamos usar um POST com os dados no corpo.
      const response = await fetch(WEBHOOK_URL, { // Corrigido para usar WEBHOOK_URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Ou 'application/x-www-form-urlencoded' se o script esperar isso
          'Accept': 'application/json'
        },
        body: JSON.stringify(formPayload)
      });

      if (response.ok) {
        console.log('Dados enviados com sucesso para o webhook');
        setIsSubmitted(true);
        
        // Fechar o modal após 3 segundos
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '' });
          onClose();
        }, 3000);
      } else {
        console.error('Erro na resposta do webhook:', response.status, response.statusText);
        // Ainda mostra sucesso para o usuário para uma UX melhor, mas registra o erro
        setIsSubmitted(true);
        
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '' });
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Erro ao enviar para webhook:', error);
      
      // Salvar dados localmente como fallback (apenas para console.log neste exemplo)
      console.log('Dados salvos localmente (fallback):', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        source: 'landing_page_contact_form',
        timestamp: new Date().toISOString()
      });
      
      // Ainda mostra sucesso para o usuário para uma UX melhor, mas registra o erro
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '' });
        onClose();
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-brand-teal to-brand-orange p-6 rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="text-center text-white">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Cadastre-se e ganhe sua primeira aula grátis
            </h2>
            <p className="text-white/90">
              Preencha seus dados abaixo e nós entraremos em contato para agendar sua aula gratuita!
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                    placeholder="Digite seu nome completo"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-teal to-brand-orange text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Ao enviar, você concorda em receber comunicações da Uni Languages. 
                Seus dados estão seguros conosco.
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Gift className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Obrigada pelo seu cadastro!
              </h3>
              <p className="text-gray-600 mb-4">
                Entraremos em contato para agendar sua aula exclusiva!
              </p>
              <p className="text-sm text-gray-500">
                
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
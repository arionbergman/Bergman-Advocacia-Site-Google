import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Contato via Site: ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);
    
    // Abre o cliente de e-mail padrão com os dados preenchidos
    window.location.href = `mailto:bergman.adv@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="py-32 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Entre em Contato</h2>
            <p className="text-gray-400 mb-12 text-lg font-light">
              Estamos prontos para entender sua demanda e oferecer a melhor solução jurídica.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-zinc-900 rounded-xl text-white">
                    <MessageCircle size={24} />
                 </div>
                 <div>
                    <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                    <p className="text-gray-400 text-sm mb-2">Atendimento ágil em horário comercial.</p>
                    <a 
                      href="https://wa.me/5512999999999" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-white border-b border-white/30 hover:border-white transition-colors text-sm"
                    >
                      Iniciar conversa
                    </a>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-zinc-900 rounded-xl text-white">
                    <Mail size={24} />
                 </div>
                 <div>
                    <h3 className="text-white font-semibold mb-1">E-mail</h3>
                    <p className="text-gray-400 text-sm mb-2">Para envio de documentos e consultas formais.</p>
                    <a href="mailto:bergman.adv@gmail.com" className="text-white border-b border-white/30 hover:border-white transition-colors text-sm">bergman.adv@gmail.com</a>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-zinc-900 rounded-xl text-white">
                    <MapPin size={24} />
                 </div>
                 <div>
                    <h3 className="text-white font-semibold mb-1">Localização</h3>
                    <p className="text-gray-400 text-sm">São José dos Campos – SP</p>
                    <p className="text-gray-500 text-xs mt-1">Atuação em todo o território nacional.</p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-zinc-900/30 p-8 md:p-10 rounded-3xl border border-white/5"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nome</label>
                    <input 
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all"
                        placeholder="Seu nome completo"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">E-mail</label>
                    <input 
                        type="email" 
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all"
                        placeholder="seu@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                    <textarea 
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all resize-none"
                        placeholder="Descreva brevemente sua demanda..."
                    ></textarea>
                </div>
                <button 
                    type="submit"
                    className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                    Enviar Mensagem
                </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: 'Como funciona a contratação do escritório?',
    answer: 'Iniciamos com uma consulta diagnóstica para entender a complexidade do caso. Após a análise, apresentamos uma proposta de honorários e estratégia jurídica personalizada.',
  },
  {
    question: 'Atendem online e em todo o Brasil?',
    answer: 'Sim. Nossa estrutura digital permite atuação em todo o território nacional, com reuniões por videoconferência e acompanhamento processual digital.',
  },
  {
    question: 'Como são definidos os honorários?',
    answer: 'Os honorários seguem a tabela da OAB como referência mínima, ajustados conforme a complexidade, tempo estimado e responsabilidade envolvida na demanda.',
  },
  {
    question: 'O atendimento é sigiloso?',
    answer: 'Absolutamente. O sigilo advogado-cliente é pilar fundamental de nossa atuação e protegido por lei.',
  },
  {
    question: 'Há atendimento de urgência?',
    answer: 'Sim, dispomos de canais específicos para demandas urgentes que envolvam risco imediato de perecimento de direito ou liberdade.',
  },
  {
    question: 'Em Direito de Família, quais serviços são oferecidos?',
    answer: 'Atuamos em divórcios (consensuais e litigiosos), guarda, pensão alimentícia, inventários, testamentos e planejamento sucessório.',
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Perguntas Frequentes</h2>
            <p className="text-gray-400">Dúvidas comuns sobre nossa atuação jurídica.</p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className={`text-lg font-medium transition-colors ${activeIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  {item.question}
                </span>
                <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-45 text-white' : 'text-gray-500'}`}>
                  <Plus size={20} />
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-400 leading-relaxed font-light">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
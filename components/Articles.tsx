import React from 'react';
import { motion } from 'framer-motion';
import { Article } from '../types';
import { ArrowUpRight } from 'lucide-react';

const articles: Article[] = [
  {
    category: 'Empresarial',
    title: 'Como proteger sua empresa de riscos contratuais',
    summary: 'Entenda os principais mecanismos jurídicos para blindar empresas de prejuízos.',
  },
  {
    category: 'Bancário',
    title: 'Revisão de contratos bancários e limites legais',
    summary: 'Quando a cobrança é abusiva e como o Judiciário tem decidido.',
  },
  {
    category: 'Tributário',
    title: 'Tributação estratégica: caminhos para redução de custos',
    summary: 'Ferramentas legais para eficiência fiscal empresarial.',
  },
  {
    category: 'Imobiliário',
    title: 'Responsabilidade do incorporador no mercado imobiliário',
    summary: 'Quais são os riscos e responsabilidades nos empreendimentos imobiliários.',
  },
];

const Articles: React.FC = () => {
  return (
    <section id="artigos" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-4 block">
                Conhecimento
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Publicações Recentes
                </h2>
            </motion.div>
             <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white border-b border-white/30 pb-1 hover:border-white transition-colors text-sm font-medium"
             >
                Ver todas as publicações
             </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900 rounded-3xl p-8 md:p-10 hover:bg-zinc-800 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                 <span className="text-xs font-bold text-blue-400 uppercase tracking-wider border border-blue-400/20 bg-blue-400/10 px-3 py-1 rounded-full">
                    {article.category}
                 </span>
                 <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={20}/>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {article.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
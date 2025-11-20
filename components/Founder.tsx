import React from 'react';
import { motion } from 'framer-motion';

const Founder: React.FC = () => {
  return (
    <section id="fundador" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 max-w-7xl mx-auto">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 relative group/image"
          >
             <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900">
                <img 
                  src="/arion-bergman.jpg" 
                  alt="Arion Bergman, Sócio Fundador do escritório Bergman Advogados" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/image:scale-105"
                />
                
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
             </div>
             
             {/* Decorative element */}
             <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-blue-900/20 blur-[100px] rounded-full opacity-60 pointer-events-none" />
          </motion.div>

          {/* Text Content - Adjusted for 2-column layout */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="w-full md:w-7/12 text-center md:text-left"
          >
            <div className="flex flex-col md:items-start text-center md:text-left">
                <span className="text-sm font-semibold text-blue-500 tracking-widest uppercase mb-4 block">
                  Sócio Fundador
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight leading-tight">
                  Arion Bergman
                </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light text-justify md:text-left">
              <p>
                Advogado com <strong className="text-white font-semibold">25 anos de experiência</strong> na condução de litígios complexos e consultoria estratégica em múltiplas áreas do Direito.
              </p>
              <p>
                Atuação firme, técnica e comprometida em soluções eficientes para clientes de todo o Brasil. Sua trajetória é marcada pela defesa intransigente dos interesses de seus constituintes, sempre pautada pela ética e pelo profundo conhecimento da jurisprudência atual.
              </p>
              <p>
                 Reconhecido pela capacidade analítica e pela visão estratégica que antecipa cenários, garantindo segurança jurídica para empresas e famílias.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex justify-center md:justify-start">
                <div>
                    <span className="block text-4xl font-bold text-white">25+</span>
                    <span className="text-sm text-gray-500 mt-2 block uppercase tracking-wider">Anos de Experiência</span>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
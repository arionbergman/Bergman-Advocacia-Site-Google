import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Landmark, FileText, Scale, Users, HeartHandshake } from 'lucide-react';
import { PracticeArea } from '../types';

const areas: PracticeArea[] = [
  {
    title: 'Direito Empresarial',
    description: 'Assessoria estratégica e resolução de conflitos empresariais.',
    icon: <Briefcase className="w-6 h-6 text-white" />,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop' // Arquitetura corporativa
  },
  {
    title: 'Direito Imobiliário',
    description: 'Atuação completa em contratos, incorporações e litígios imobiliários.',
    icon: <Building2 className="w-6 h-6 text-white" />,
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop' // Estrutura de concreto/prédio
  },
  {
    title: 'Direito Bancário',
    description: 'Revisões contratuais e defesa contra abusos de instituições financeiras.',
    icon: <Landmark className="w-6 h-6 text-white" />,
    image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=2574&auto=format&fit=crop' // Cédulas de dinheiro em tom escuro
  },
  {
    title: 'Direito Tributário',
    description: 'Planejamento e eficiência tributária para redução de custos.',
    icon: <FileText className="w-6 h-6 text-white" />,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop' // Papéis/Escrita/Negócios
  },
  {
    title: 'Direito Administrativo',
    description: 'Atuação em processos administrativos e relações com o poder público.',
    icon: <Scale className="w-6 h-6 text-white" />,
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2670&auto=format&fit=crop' // Livros jurídicos clássicos
  },
  {
    title: 'Direito Trabalhista',
    description: 'Consultoria e defesa técnica em demandas individuais e coletivas.',
    icon: <Users className="w-6 h-6 text-white" />,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop' // Ambiente corporativo moderno
  },
  {
    title: 'Direito de Família',
    description: 'Atuação humana e estratégica em divórcios, guarda e sucessões.',
    icon: <HeartHandshake className="w-6 h-6 text-white" />,
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2670&auto=format&fit=crop' // Família/Mãos dadas (Preto e Branco)
  },
];

const PracticeAreas: React.FC = () => {
  return (
    <section id="atuacao" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 max-w-2xl relative z-10"
        >
             <span className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-4 block">
              Especialidades
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Áreas de Atuação
            </h2>
        </motion.div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden cursor-default flex flex-col justify-between min-h-[260px]"
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0 select-none">
                <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 grayscale mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 via-zinc-900/80 to-black/90" />
              </div>

              {/* Content Layer */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="mb-6 p-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl w-fit group-hover:bg-white/20 transition-colors">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{area.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                      {area.description}
                    </p>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
import React from 'react';
import { Scale } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-black">
               <Scale size={14} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-white tracking-tight text-sm">
                BERGMAN <span className="font-normal text-gray-400">ADVOGADOS</span>
            </span>
        </div>
        
        <p className="text-gray-500 text-sm mb-6">
          © 2025 Bergman Advogados — Atuação em todo o território nacional.
        </p>

        <div className="flex gap-6 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">OAB/SP</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
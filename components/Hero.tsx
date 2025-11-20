import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Abstract Background - Smoky Black & White Style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
        
        {/* Updated Image: Abstract Fluid/Smoke texture, strictly Grayscale for Apple Keynote vibe */}
        <img
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop"
          alt="Abstract Smoke Background"
          className="w-full h-full object-cover opacity-40 scale-105 grayscale transition-transform duration-[20s] ease-linear hover:scale-110"
        />
        
        {/* Blurred Glow Effects - Adjusted to Monochrome/White/Zinc to fit 'acinzentada' theme */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-zinc-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-6 pb-1 pr-2"
        >
          BERGMAN ADVOGADOS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide mb-10 max-w-2xl"
        >
          Excelência jurídica há mais de 25 anos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <a
            href="https://wa.me/5512999999999"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            WhatsApp <ArrowRight size={20} />
          </a>
          <a
            href="mailto:bergman.adv@gmail.com"
            className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-95 hover:border-white/30"
          >
            E-mail <Mail size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
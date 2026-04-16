import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, BrainCircuit, Globe } from 'lucide-react';

export const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A0F1E] py-8 sm:py-12 px-6 sm:px-10 lg:px-14 border-b border-indigo-500/20">
      {/* ── Background Textures & Effects ── */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      {/* Subtle Glass Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col items-center text-center gap-5">
          
          {/* 1. Micro Hint (Badge) */}
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-md"
          >
            <BrainCircuit size={12} className="text-indigo-400" />
            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] leading-none">
              Investment Intelligence Hub
            </p>
          </motion.div>

          {/* 2. Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-5xl">
              نظام <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-300 to-indigo-400">هندسة القرار والاستخبارات الاستثمارية</span>
            </h1>
            <p className="text-lg sm:text-xl font-bold text-slate-400">
              بوابة القادة التفاعلية لتحويل البيانات والرؤى إلى مشاريع سيادية ناجحة
            </p>
          </motion.div>

          {/* 3. Subtitle (Compacted) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm font-medium text-slate-500 max-w-3xl leading-relaxed"
          >
            المنصة المتكاملة لاستكشاف الفجوات السوقية، هندسة النماذج التشغيلية الاحترافية، وصياغة استراتيجيات النمو المرتكزة على سوابق النجاح العالمية والذكاء الاصطناعي التوليدي.
          </motion.p>

          {/* 4. Directional Hint (Minimal) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 py-2 border-t border-white/5 mt-2"
          >
            <div className="flex items-center gap-2 text-[10px] font-black text-indigo-500 uppercase tracking-widest italic group">
               <Zap size={12} fill="currentColor" className="animate-pulse" />
               ما هو قرارك الاستراتيجي اليوم؟
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

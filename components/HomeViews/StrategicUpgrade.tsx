import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  FileCheck, 
  ShieldCheck, 
  ArrowRight,
  Gem
} from 'lucide-react';

export const StrategicUpgrade = ({ setActiveTab }: any) => {
  const features = [
    {
      icon: Zap,
      title: 'تحليل ذكاء غير محدود',
      desc: 'حرر طاقتك الاستراتيجية تماماً؛ لا قيود على حجم المعالجة أو عدد الأفكار التي تريد تشريحها.'
    },
    {
      icon: FileCheck,
      title: 'تقارير جاهزة للاستثمار',
      desc: 'صدر ملفاتك فوراً بلمسة زر وبصيغ (PDF/Excel) احترافية جاهزة للعرض على شركائك.'
    },
    {
      icon: ShieldCheck,
      title: 'دعم ذو ميكانيكا أولوية',
      desc: 'وصول مباشر وحصري لخبراء النظام لضمان سلاسة واستمرارية عملياتك الاستثمارية.'
    }
  ];

  return (
    <section className="py-[50px] px-6 sm:px-10 lg:px-14 bg-white border-b border-slate-100 relative overflow-hidden text-right">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-50/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto" dir="rtl">
        {/* Standardized Strategic Heading */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-100">
            <Gem size={14} fill="currentColor" /> Premium Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
             أطلق العنان لكامل القدرات الاستخباراتية
          </h2>
          <p className="text-slate-400 font-bold text-sm sm:text-base max-w-2xl leading-relaxed">
             انضم إلى أكثر من 1200 مستثمر رائد يستخدمون النسخة الاحترافية لصياغة سيناريوهات نمو غير محدودة وتصدير تقارير استثمارية بمعايير عالمية.
          </p>
        </div>

        {/* Upgrade Content Card */}
        <div className="relative group overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-800 rounded-[3rem] p-8 lg:p-12 text-white shadow-2xl">
           {/* Decorative UI elements */}
           <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
              <Sparkles size={300} strokeWidth={0.5} />
           </div>

           <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
                 {features.map((f, i) => (
                   <div key={i} className="space-y-4 text-right">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white backdrop-blur-md">
                         <f.icon size={24} />
                      </div>
                      <h4 className="text-lg font-black">{f.title}</h4>
                      <p className="text-indigo-100/70 text-xs font-bold leading-relaxed">{f.desc}</p>
                   </div>
                 ))}
              </div>

              <div className="w-full lg:w-fit pt-6 lg:pt-0 lg:pr-12 border-t lg:border-t-0 lg:border-r border-white/10">
                 <button 
                   onClick={() => setActiveTab('pricing')}
                   className="w-full lg:w-64 px-8 py-5 bg-white text-indigo-700 rounded-2xl text-sm font-black hover:bg-indigo-50 transition-all shadow-xl flex items-center justify-center gap-3 group/btn"
                 >
                    استكشف مسارات الترقية
                    <ArrowRight size={18} className="rotate-180 group-hover/btn:-translate-x-2 transition-transform" />
                 </button>
                 <p className="text-center mt-4 text-[10px] font-black uppercase text-indigo-200/60 tracking-widest">
                    Start with Zero Risk
                 </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

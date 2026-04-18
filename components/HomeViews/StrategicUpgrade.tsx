import React from 'react';
import { 
  Sparkles, 
  Zap, 
  FileCheck, 
  ShieldCheck, 
  ArrowRight,
  Crown,
  Star
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   STRATEGIC UPGRADE — "Premium Command Access"
   ═══════════════════════════════════════════════════════════════ */

export const StrategicUpgrade = ({ setActiveTab }: any) => {
  const features = [
    {
      icon: Zap,
      title: 'تحليل ذكاء غير محدود',
      desc: 'لا قيود على حجم المعالجة أو عدد الأفكار التي تريد تشريحها.'
    },
    {
      icon: FileCheck,
      title: 'تقارير جاهزة للاستثمار',
      desc: 'صدر ملفاتك بصيغ احترافية جاهزة للعرض على شركائك ومستثمريك.'
    },
    {
      icon: ShieldCheck,
      title: 'دعم أولوية حصري',
      desc: 'وصول مباشر لفريق الخبراء لضمان استمرارية عملياتك الاستراتيجية.'
    }
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24 px-5 sm:px-10 lg:px-14 bg-white border-b border-slate-100 relative overflow-hidden text-right">
      <div className="max-w-7xl mx-auto" dir="rtl">
        {/* Section Heading */}
        <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-purple-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-200 shadow-sm">
            <Crown size={14} /> ترقية المسار الاستراتيجي
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
             أطلق العنان لكامل القدرات
          </h2>
          <p className="text-slate-400 font-bold text-[13px] sm:text-base max-w-2xl leading-relaxed">
             انضم إلى أكثر من 1,200 مستثمر يستخدمون النسخة الاحترافية لصياغة سيناريوهات نمو غير محدودة.
          </p>
        </div>

        {/* Upgrade Container */}
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800" />
          
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" 
               style={{ 
                 backgroundImage: `
                   linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                 `, 
                 backgroundSize: '40px 40px' 
               }} 
          />
          
          {/* Glows */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-400/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="absolute top-0 right-0 p-16 opacity-[0.06] pointer-events-none hidden sm:block">
            <Sparkles size={250} strokeWidth={0.5} />
          </div>

          <div className="relative z-10 p-6 sm:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 flex-1 w-full">
                {features.map((f, i) => (
                  <div 
                    key={i}
                    className="bg-white/[0.07] backdrop-blur-md border border-white/[0.1] rounded-2xl p-5 sm:p-6 text-right hover:bg-white/[0.12] transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                      <f.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="text-base sm:text-lg font-black text-white mb-2">{f.title}</h4>
                    <p className="text-indigo-100/60 text-[11px] sm:text-xs font-bold leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="w-full lg:w-fit pt-10 lg:pt-0 lg:pr-12 border-t lg:border-t-0 lg:border-r border-white/10 flex flex-col items-center gap-5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-[10px] font-bold text-white/50 mr-2">4.9/5</span>
                </div>

                <button 
                  onClick={() => setActiveTab('pricing')}
                  className="w-full lg:w-64 px-8 py-4 sm:py-5 bg-white text-indigo-700 rounded-2xl text-[13px] sm:text-sm font-black hover:bg-indigo-50 transition-all shadow-xl flex items-center justify-center gap-3 group/btn hover:shadow-white/20"
                >
                   استكشف مسارات الترقية
                   <ArrowRight size={18} className="rotate-180 group-hover/btn:-translate-x-2 transition-transform" />
                </button>
                <p className="text-center text-[10px] font-black text-indigo-200/40 tracking-widest uppercase">
                   ابدأ الآن دون أي مخاطر
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Compass, Rocket, TrendingUp, ChevronLeft } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   DECISION LAYER — "Strategic Navigation Hub"
   ═══════════════════════════════════════════════════════════════ */

const DecisionCard = ({ icon: Icon, title, desc, action, color, step, onClick }: any) => (
  <div 
    onClick={onClick}
    className="group relative cursor-pointer h-full hover:-translate-y-2 hover:scale-[1.01] active:scale-95 transition-all duration-500"
  >
    {/* Dynamic Background Glow */}
    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-[0.05] blur-2xl transition-all duration-700 rounded-[2.5rem]`} />
    
    <div className="relative h-full bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm group-hover:shadow-xl group-hover:shadow-slate-200/50 transition-all duration-500">
      {/* Top Accent Stripe */}
      <div className={`h-1 w-full bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Step Number Watermark */}
      <div className="absolute top-6 left-6 text-[70px] font-black text-slate-50 leading-none select-none group-hover:text-indigo-50/50 transition-colors duration-500">
        {step}
      </div>
 
      <div className="relative p-7 sm:p-9 flex flex-col h-full">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
          <Icon size={28} strokeWidth={1.5} />
        </div>
 
        <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight transition-colors group-hover:text-indigo-600">{title}</h3>
        <p className="text-slate-400 font-bold text-sm leading-relaxed mb-10 flex-1">{desc}</p>
 
        {/* Center-aligned Action Button */}
        <div className={`w-full py-3.5 px-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center gap-3 group-hover:bg-gradient-to-r ${color} group-hover:border-transparent group-hover:shadow-lg transition-all duration-500`}>
          <span className="text-[11px] font-black text-slate-900 group-hover:text-white uppercase tracking-widest transition-colors">
            {action}
          </span>
          <div className="text-slate-400 group-hover:text-white transition-all duration-300">
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const DecisionLayer = ({ setActiveTab }: any) => {
  return (
    <section className="px-5 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-20 bg-slate-50/30 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-14 text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-200 shadow-sm">
             <Compass size={14} /> التوجيه الاستراتيجي
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
             ما هو موقعك اليوم؟
          </h2>
          <p className="text-slate-400 font-bold text-[13px] sm:text-sm lg:text-base max-w-2xl leading-relaxed">
             حدد نقطة البداية المناسبة لرحلتك الاستثمارية، وسنوجهك مباشرة إلى المحرك الأنسب لمرحلتك الحالية.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <DecisionCard 
            step="01"
            icon={Compass}
            title="أسعى لاستكشاف فرص استثمارية واعدة"
            desc="هل تبحث عن نقطة انطلاق؟ دع رادار الذكاء الاصطناعي يحلل الفجوات العالمية ويوجهك نحو القطاع الأكثر مواءمة لتطلعاتك."
            action="استكشاف الفجوات القطاعية"
            color="from-indigo-500 to-blue-500"
            onClick={() => setActiveTab('market-discovery')}
          />
          <DecisionCard 
            step="02"
            icon={Rocket}
            title="لدي فكرة وأسعى لبناء خطة استراتيجية"
            desc="هل تمتلك رؤية واضحة؟ استخدم محرر خطط العمل الاحترافي لصياغة مشروعك ورسم خريطة التنفيذ بدقة متناهية."
            action="بدء بناء خطة العمل"
            color="from-emerald-500 to-teal-500"
            onClick={() => setActiveTab('new-plan')}
          />
          <DecisionCard 
            step="03"
            icon={TrendingUp}
            title="أواجه تحدياً وأبحث عن حلول مبتكرة"
            desc="هل تواجه عائقاً في قطاع معين؟ ابحث في محرك المشكلات العالمية واستلهم الحلول الاستراتيجية لتحويل التحديات إلى فرص."
            action="فتح محرك الحلول"
            color="from-violet-500 to-purple-500"
            onClick={() => setActiveTab('problem-engine')}
          />
        </div>
      </div>
    </section>
  );
};

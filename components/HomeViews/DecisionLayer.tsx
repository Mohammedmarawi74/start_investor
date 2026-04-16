import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Rocket, TrendingUp, ArrowLeft } from 'lucide-react';

/* =========================
   Decision Card Component
========================= */
const DecisionCard = ({ icon: Icon, title, desc, action, color, onClick }: any) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="group relative cursor-pointer h-full"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rounded-[2.5rem]`} />
    <div className="relative h-full bg-white border border-slate-100 rounded-[2.5rem] p-8 flex flex-col shadow-sm group-hover:shadow-2xl group-hover:shadow-indigo-100/50 transition-all duration-500 overflow-hidden">
        {/* Glow corner */}
        <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity rounded-full`} />
        
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} text-white flex items-center justify-center mb-6 shadow-lg shadow-indigo-100/50 group-hover:scale-110 transition-transform duration-500`}>
           <Icon size={28} strokeWidth={2.5} />
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-400 font-bold text-xs sm:text-sm leading-relaxed mb-10 flex-1">
           {desc}
        </p>

        <div className="flex items-center gap-2 text-slate-900 font-black text-xs group-hover:gap-4 transition-all uppercase tracking-widest">
           {action}
           <ArrowLeft size={16} className="rotate-180" />
        </div>
    </div>
  </motion.div>
);

export const DecisionLayer = ({ setActiveTab }: any) => {
  return (
    <section className="px-6 sm:px-10 lg:px-14 py-[50px] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Standardized Strategic Heading */}
        <div className="space-y-4 mb-16 text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100">
            <Compass size={14} fill="currentColor" /> Strategic Navigation
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
             حدد مسارك الاستراتيجي اليوم
          </h2>
          <p className="text-slate-400 font-bold text-sm sm:text-base max-w-2xl leading-relaxed">
             اختر نقطة الدخول التي تناسب وضعك الحالي لنقوم بتوجيهك إلى المحركات الاستشارية والتحليلية المصممة خصيصاً لدعم قرارك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <DecisionCard 
            icon={Compass} 
            title="أبحث عن فرصة" 
            desc="اكتشف مشاكل الأسواق العالمية، استعرض الفجوات الحقيقية في الدول، واكتشف فرصة احتكار قادمة."
            action="رادار الاستكشاف"
            color="from-blue-500 to-indigo-600"
            onClick={() => setActiveTab('market-discovery')}
          />
          <DecisionCard 
            icon={Rocket} 
            title="لدي فكرة" 
            desc="حول فكرتك إلى نموذج عمل استراتيجي، اختبر الجدوى، واستخدم 7 أنماط بناء عالمية."
            action="ابدأ البناء"
            color="from-purple-600 to-rose-600"
            onClick={() => setActiveTab('new-plan')}
          />
          <DecisionCard 
            icon={TrendingUp} 
            title="أملك مشروع" 
            desc="حسن الأداء، اكتشف مسارات التوسع، قارن موديلك مع حالات دولية ناجحة، واستخدم مختبرات الذكاء."
            action="افتح المختبرات"
            color="from-emerald-500 to-teal-600"
            onClick={() => setActiveTab('smart-analyzer')}
          />
        </div>
      </div>
    </section>
  );
};

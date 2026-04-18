import React from 'react';
import { 
  Zap, 
  ArrowRight, 
  AlertCircle, 
  Lightbulb, 
  DollarSign, 
  TrendingUp, 
  Activity,
  Box,
  CircleDot
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   UNICORN ANATOMY — "Blueprint Lab"
   ═══════════════════════════════════════════════════════════════ */

const AnatomyCard = ({ data }: any) => (
  <div className="bg-white border border-slate-100 rounded-[2.5rem] relative overflow-hidden group hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
    {/* Blueprint Grid on Hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
         style={{ 
           backgroundImage: `
             linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
             linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
           `, 
           backgroundSize: '20px 20px' 
         }} 
    />
    
    {/* Corner Stamp */}
    <div className="absolute top-0 right-0 w-28 h-28 overflow-hidden pointer-events-none">
      <div className="absolute top-4 right-[-30px] w-40 rotate-45 bg-slate-50 group-hover:bg-indigo-50 text-center py-1 transition-colors duration-500">
        <span className="text-[7px] font-black text-slate-400 group-hover:text-indigo-500 uppercase tracking-widest transition-colors">ملف حالة</span>
      </div>
    </div>

    <div className="p-8 sm:p-10">
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 rounded-2xl ${data.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-[-3deg] transition-all duration-500`}>
            <data.icon size={30} />
          </div>
          <div>
            <h4 className="text-xl font-black text-slate-900 leading-tight">{data.name}</h4>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{data.sector}</p>
          </div>
        </div>
        <div className="text-left">
          <p className="text-[9px] font-black text-slate-400 uppercase leading-none mb-1.5 tracking-wider">التقييم</p>
          <p className="text-xl font-black text-emerald-600 leading-none">{data.valuation}</p>
        </div>
      </div>

      {/* Circuit Path */}
      <div className="space-y-0 relative">
        <div className="absolute top-6 right-[19px] w-[2px] h-[calc(100%-48px)] bg-gradient-to-b from-rose-200 via-indigo-200 to-emerald-200 group-hover:from-rose-400 group-hover:via-indigo-400 group-hover:to-emerald-400 transition-colors duration-700" />

        {/* Problem */}
        <div className="relative pr-14 pb-8">
          <div className="absolute top-1 right-0 w-10 h-10 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-rose-100 border-2 border-rose-400 group-hover:border-rose-500 transition-colors" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle size={14} className="text-rose-500" />
            <span className="text-[10px] font-black text-rose-600 uppercase tracking-wider">المشكلة الجوهرية</span>
          </div>
          <p className="text-slate-500 text-xs font-bold leading-relaxed">{data.problem}</p>
        </div>

        {/* Solution */}
        <div className="relative pr-14 pb-8">
          <div className="absolute top-1 right-0 w-10 h-10 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-indigo-100 border-2 border-indigo-400 group-hover:border-indigo-500 transition-colors" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb size={14} className="text-indigo-500" />
            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-wider">الحل الاستراتيجي</span>
          </div>
          <p className="text-slate-900 text-xs font-black leading-relaxed">{data.solution}</p>
        </div>

        {/* Impact */}
        <div className="relative pr-14">
          <div className="absolute top-1 right-0 w-10 h-10 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-emerald-100 border-2 border-emerald-400 group-hover:border-emerald-500 transition-colors" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={14} className="text-emerald-500" />
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider">الأثر والنتيجة</span>
          </div>
          <p className="text-slate-500 text-xs font-bold leading-relaxed">{data.impact}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-slate-50 flex justify-between items-center">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl text-[9px] font-black text-slate-500 uppercase tracking-wider border border-slate-100">
          <Activity size={10} className="text-indigo-400" /> قيادة السوق
        </div>
        <button className="text-[10px] font-black text-indigo-600 flex items-center gap-1.5 hover:gap-3 transition-all group/btn">
          التشريح الكامل 
          <div className="w-6 h-6 rounded-lg bg-indigo-50 flex items-center justify-center group-hover/btn:bg-indigo-600 group-hover/btn:text-white text-indigo-600 transition-all">
            <ArrowRight size={12} className="rotate-180" />
          </div>
        </button>
      </div>
    </div>
  </div>
);

export const UnicornAnatomy = () => {
  const cases = [
    {
      name: 'Uber',
      sector: 'النقل والمواصلات',
      valuation: '$95B',
      icon: Box,
      color: 'bg-slate-900',
      problem: 'عدم الموثوقية في سيارات الأجرة، صعوبة الدفع، والانتظار الطويل في شوارع غير آمنة.',
      solution: 'منصة P2P تربط السائقين بالركاب لحظياً مع نظام تقييم متبادل ودفع آلي شفاف.',
      impact: 'السيطرة على 70% من سوق النقل التشاركي عالمياً وتحويل الهواتف إلى مفاتيح سيارات.'
    },
    {
      name: 'Airbnb',
      sector: 'الضيافة والسياحة',
      valuation: '$110B',
      icon: Zap,
      color: 'bg-rose-500',
      problem: 'غلاء أسعار الفنادق المبالغ فيه وغياب تجربة العيش كـ "محلي" في مدن غريبة.',
      solution: 'تحويل الأصول المعطلة (غرف البيضاوات) إلى وحدات فندقية عالمية متاحة للجميع بضغطة زر.',
      impact: 'أصبح لديهم غرف أكثر من أكبر 5 سلاسل فنادق في العالم مجتمعة دون امتلاك عقار واحد.'
    },
    {
      name: 'Stripe',
      sector: 'التكنولوجيا المالية',
      valuation: '$50B',
      icon: DollarSign,
      color: 'bg-indigo-600',
      problem: 'البيروقراطية البنكية المعقدة والوقت الطويل (أسابيع) لقبول أول دفعة مالية عبر الإنترنت.',
      solution: 'صياغة 7 أسطر برمجية (API) تمكن أي مبرمج من قبول المدفوعات من أي مكان في العالم خلال دقائق.',
      impact: 'معالجة تريليونات الدولارات سنوياً ودعم اقتصاد الإنترنت من الشركات الناشئة إلى العمالقة.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-10 lg:px-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto" dir="rtl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-10 mb-10 sm:mb-14">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-200 shadow-sm">
               <CircleDot size={14} /> الهندسة العكسية للنجاح
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
               تشريح نماذج النجاح
            </h2>
            <p className="text-slate-400 font-bold text-[13px] sm:text-base max-w-2xl leading-relaxed">
               كيف تحولت فجوات الألم إلى شركات بمليارات الدولارات؟ حلل المسار الاستراتيجي لأنجح الشركات العالمية.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((c, i) => (
            <AnatomyCard key={i} data={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

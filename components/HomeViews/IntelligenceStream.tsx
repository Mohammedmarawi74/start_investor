import React from 'react';
import { AlertCircle, ArrowLeft, ArrowRight, Zap } from 'lucide-react';

const StreamCard = ({ item }: any) => (
  <div className="bg-white border border-slate-100 rounded-[2rem] p-6 hover:shadow-xl transition-all group relative overflow-hidden flex flex-col gap-4">
     <div className={`absolute top-0 right-0 w-1.5 h-full ${item.painColor}`} />
     
     <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
           <span className="text-xl">{item.flag}</span>
           <div>
              <p className="text-[10px] font-black text-slate-400 uppercase leading-none">{item.country}</p>
              <h4 className="text-sm font-black text-slate-900 mt-1">{item.title}</h4>
           </div>
        </div>
        <div className={`px-2 py-1 rounded-lg text-[9px] font-black border ${item.painBg} ${item.painText}`}>
           PAIN: {item.painScore}/10
        </div>
     </div>

     <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-100">
        <p className="text-[11px] font-bold text-slate-500 flex items-center gap-2">
           <AlertCircle size={12} className="text-amber-500" />
           <span className="text-slate-900">لماذا الآن؟</span> {item.whyNow}
        </p>
     </div>

     <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-4">
           <div className="flex flex-col">
              <p className="text-[8px] font-black text-slate-400 uppercase mb-0.5 tracking-tighter">فرصة الربح</p>
              <p className="text-xs font-black text-emerald-600">{item.profitPotential}</p>
           </div>
           <div className="w-[1px] h-6 bg-slate-100" />
           <div className="flex flex-col">
              <p className="text-[8px] font-black text-slate-400 uppercase mb-0.5 tracking-tighter">المنافسة</p>
              <p className="text-xs font-black text-indigo-600">{item.competition}</p>
           </div>
        </div>
        <button className="p-2 bg-slate-900 text-white rounded-lg hover:bg-indigo-600 transition-colors">
           <ArrowRight size={14} className="rotate-180" />
        </button>
     </div>
  </div>
);

export const IntelligenceStream = ({ setActiveTab }: any) => {
  const streamItems = [
    { title: 'تكامل السجلات الصحية', country: 'السعودية', flag: '🇸🇦', painScore: 9, painColor: 'bg-rose-500', painBg: 'bg-rose-50', painText: 'text-rose-600', whyNow: 'إطلاق مبادرة التحول الصحي الرقمي وتوفر البيانات السيادية.', profitPotential: '$240M+', competition: 'منخفضة' },
    { title: 'رقمنة سلاسل توريد الأغذية', country: 'الإمارات', flag: '🇦🇪', painScore: 7, painColor: 'bg-amber-500', painBg: 'bg-amber-50', painText: 'text-amber-600', whyNow: 'الحاجة الماسة لتقليل الهدر وتعزيز الأمن الغذائي الوطني.', profitPotential: '$180M+', competition: 'متوسطة' },
    { title: 'المدفوعات اللحظية عبر الحدود', country: 'مصر', flag: '🇪🇬', painScore: 8, painColor: 'bg-rose-500', painBg: 'bg-rose-50', painText: 'text-rose-600', whyNow: 'توسع التجارة الإلكترونية الإقليمية والحاجة لسرعة السيولة.', profitPotential: '$450M+', competition: 'مرتفعة' },
    { title: 'بنية شواحن المركبات الكهربائية', country: 'الشرق الأوسط', flag: '🌍', painScore: 6, painColor: 'bg-blue-500', painBg: 'bg-blue-50', painText: 'text-blue-600', whyNow: 'دخول موجة السيارات الكهربائية بقوة وغياب البنية الأساسية.', profitPotential: '$1.2B', competition: 'بكر' },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-[50px] px-6 sm:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-10 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
               <Zap size={14} className="animate-pulse" /> Live Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
               تيار الفجوات الحية (Intelligence Stream)
            </h2>
            <p className="text-slate-400 font-bold text-sm sm:text-base max-w-xl leading-relaxed">
               بث مباشر لأحدث المشاكل المكتشفة عالمياً وتحليل جدواها الاقتصادية والزخم الاستثماري لها في الوقت الفعلي.
            </p>
          </div>
          <button onClick={() => setActiveTab('problem-engine')} className="flex items-center gap-2 text-xs font-black text-indigo-600 hover:gap-3 transition-all pb-2">
            عرض الرادار الكامل <ArrowLeft size={16} className="rotate-180" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {streamItems.map((item, i) => (
            <StreamCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

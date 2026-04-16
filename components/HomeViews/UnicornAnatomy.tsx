import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  ArrowRight, 
  AlertCircle, 
  Lightbulb, 
  DollarSign, 
  TrendingUp, 
  ChevronLeft,
  Activity,
  Box,
  CornerRightDown
} from 'lucide-react';

const AnatomyCard = ({ data }: any) => (
  <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500">
    {/* Background Pattern */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[5rem] -z-10 group-hover:bg-indigo-50 transition-colors" />
    
    {/* Header */}
    <div className="flex justify-between items-start mb-10">
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 rounded-2xl ${data.color} flex items-center justify-center text-white shadow-lg`}>
          <data.icon size={28} />
        </div>
        <div>
          <h4 className="text-xl font-black text-slate-900 leading-tight">{data.name}</h4>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{data.sector}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">Valuation</p>
        <p className="text-lg font-black text-emerald-600 leading-none">{data.valuation}</p>
      </div>
    </div>

    {/* The Path (The Anatomy) */}
    <div className="space-y-6 relative">
      {/* Dashed Line Connector */}
      <div className="absolute top-4 right-5 w-[2px] h-[calc(100%-40px)] border-r-2 border-dashed border-slate-100 group-hover:border-indigo-100 transition-colors" />

      {/* 1. The Pain */}
      <div className="relative pr-10">
        <div className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
        </div>
        <div className="flex items-center gap-2 mb-1">
          <AlertCircle size={14} className="text-rose-500" />
          <span className="text-[10px] font-black text-rose-600 uppercase">the pain / المشكلة</span>
        </div>
        <p className="text-slate-500 text-xs font-bold leading-relaxed">
          {data.problem}
        </p>
      </div>

      {/* 2. The Solution */}
      <div className="relative pr-10">
        <div className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(79,70,229,0.4)]" />
        </div>
        <div className="flex items-center gap-2 mb-1">
          <Lightbulb size={14} className="text-indigo-500" />
          <span className="text-[10px] font-black text-indigo-600 uppercase">the pivot / الحل الذكي</span>
        </div>
        <p className="text-slate-900 text-xs font-black leading-relaxed">
          {data.solution}
        </p>
      </div>

      {/* 3. The Result */}
      <div className="relative pr-10">
        <div className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
        </div>
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp size={14} className="text-emerald-500" />
          <span className="text-[10px] font-black text-emerald-600 uppercase">the impact / النتيجة</span>
        </div>
        <p className="text-slate-500 text-xs font-bold leading-relaxed">
          {data.impact}
        </p>
      </div>
    </div>

    <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
       <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-lg text-[9px] font-black text-slate-500 uppercase tracking-tighter">
          <Activity size={10} /> Market Disruptor
       </div>
       <button className="text-[10px] font-black text-indigo-600 flex items-center gap-1 hover:gap-2 transition-all">
          التشريح الكامل <ArrowRight size={14} className="rotate-180" />
       </button>
    </div>
  </div>
);

export const UnicornAnatomy = () => {
  const cases = [
    {
      name: 'Uber',
      sector: 'Transportation',
      valuation: '$95B',
      icon: Box,
      color: 'bg-slate-900',
      problem: 'عدم الموثوقية في سيارات الأجرة، صعوبة الدفع، والانتظار الطويل في شوارع غير آمنة.',
      solution: 'منصة P2P تربط السائقين بالركاب لحظياً مع نظام تقييم متبادل ودفع آلي شفاف.',
      impact: 'السيطرة على 70% من سوق النقل التشاركي عالمياً وتحويل الهواتف إلى مفاتيح سيارات.'
    },
    {
      name: 'Airbnb',
      sector: 'Hospitality',
      valuation: '$110B',
      icon: Zap,
      color: 'bg-rose-500',
      problem: 'غلاء أسعار الفنادق المبالغ فيه وغياب تجربة العيش كـ "محلي" في مدن غريبة.',
      solution: 'تحويل الأصول المعطلة (غرف البيضاوات) إلى وحدات فندقية عالمية متاحة للجميع بضغطة زر.',
      impact: 'أصبح لديهم غرف أكثر من أكبر 5 سلاسل فنادق في العالم مجتمعة دون امتلاك عقار واحد.'
    },
    {
      name: 'Stripe',
      sector: 'FinTech',
      valuation: '$50B',
      icon: DollarSign,
      color: 'bg-indigo-600',
      problem: 'البيروقراطية البنكية المعقدة والوقت الطويل (أسابيع) لقبول أول دفعة مالية عبر الإنترنت.',
      solution: 'صياغة 7 أسطر برمجية (API) تمكن أي مبرمج من قبول المدفوعات من أي مكان في العالم خلال دقائق.',
      impact: 'معالجة تريليونات الدولارات سنوياً ودعم اقتصاد الإنترنت من الشركات الناشئة إلى العمالقة.'
    }
  ];

  return (
    <section className="py-[50px] px-6 sm:px-10 lg:px-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto" dir="rtl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-10 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
               <Zap size={14} fill="currentColor" /> Reverse Engineering Success
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
               تشريح اليونيكورن (Unicorn Anatomy)
            </h2>
            <p className="text-slate-400 font-bold text-sm sm:text-base max-w-2xl leading-relaxed">
               كيف تحولت فجوات الألم إلى شركات بمليارات الدولارات؟ حلل المسار الاستراتيجي لأنجح الشركات العالمية لتبدأ هندستك العكسية للنجاح.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {cases.map((c, i) => (
            <AnatomyCard key={i} data={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

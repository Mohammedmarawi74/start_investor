import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BrainCircuit, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Briefcase, 
  Target, 
  Globe, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  Info,
  Waves
} from 'lucide-react';

const DecisionCard = ({ icon: Icon, title, sub, hint, onClick, isSelected }: any) => (
  <motion.button
    whileHover={{ y: -2, scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
    onClick={onClick}
    className={`relative flex flex-col items-start p-5 rounded-2xl border transition-all text-right group w-full ${
      isSelected 
      ? 'bg-indigo-50 border-indigo-500 shadow-sm' 
      : 'bg-white border-slate-100 hover:border-indigo-300 hover:shadow-md'
    }`}
  >
    <div className={`p-2.5 rounded-xl mb-3 transition-colors ${isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-50 text-slate-400 group-hover:text-indigo-600'}`}>
      <Icon size={20} />
    </div>
    <h4 className="text-slate-900 font-black text-sm mb-1">{title}</h4>
    <p className="text-slate-500 text-[10px] font-bold leading-relaxed mb-3">{sub}</p>
    
    <div className="mt-auto pt-3 border-t border-slate-50 w-full flex items-center justify-between">
      <div className="flex items-center gap-1.5 text-[9px] font-black text-indigo-500 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
        <Info size={10} /> {hint}
      </div>
      <ArrowRight size={14} className={`text-slate-300 group-hover:text-indigo-500 transition-all ${isSelected ? 'translate-x-0 opacity-100' : 'translate-x-1 opacity-0'}`} />
    </div>
  </motion.button>
);

export const StrategicPathFinder = ({ setActiveTab }: any) => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({ role: '', goal: '', risk: '' });

  const steps = [
    {
      id: 'role',
      title: 'حدد موقعك الحالي',
      options: [
        { id: 'early', title: 'رائد أعمال ناشئ', sub: 'تبحث عن فرصة أو نموذج عمل لتبدأ.', icon: Sparkles, hint: 'Idea Builder Mode' },
        { id: 'existing', title: 'صاحب مشروع قائم', sub: 'تريد تحسين الأداء أو التوسع السوقي.', icon: TrendingUp, hint: 'Analysis Mode' },
        { id: 'investor', title: 'مستثمر استراتيجي', sub: 'تبحث عن فرص تحليلية عالية العائد.', icon: Briefcase, hint: 'Market Radar' },
      ]
    },
    {
      id: 'goal',
      title: 'ما هو هدفك الاستراتيجي؟',
      options: [
        { id: 'gap', title: 'اكتشاف ثغرة سوقية', sub: 'تحليل الفجوات والاحتياجات غير الملباة.', icon: Target, hint: 'محرك الفجوات' },
        { id: 'structure', title: 'هيكلة فكرة أولية', sub: 'بناء نموذج العمل وتحويل الأفكار لخطط.', icon: BrainCircuit, hint: 'بناء النماذج' },
        { id: 'expansion', title: 'التوسع العالمي', sub: 'دراسة سوابق النجاح ومحاكاة الموديلات.', icon: Globe, hint: 'Global Resolution' },
      ]
    },
    {
      id: 'risk',
      title: 'مستوى الشهية الاستثمارية',
      options: [
        { id: 'safe', title: 'مخاطرة منخفضة', sub: 'أهداف مستقرة وعائد مضمون وآمن.', icon: ShieldCheck, hint: 'مسار الاستدامة' },
        { id: 'balanced', title: 'مخاطرة مدروسة', sub: 'توازن احترافي بين الأمان والنمو.', icon: Waves, hint: 'مسار النمو' },
        { id: 'aggressive', title: 'مخاطرة عالية', sub: 'نمو انفجاري وفرص بمليارات الدولارات.', icon: Zap, hint: 'مسار اليونيكورن' },
      ]
    }
  ];

  const progress = (step / 3) * 100;
  const currentStepData = steps[step - 1];

  const handleSelection = (id: string) => {
    const key = steps[step - 1].id;
    setSelections({ ...selections, [key]: id });
    if (step < 3) setStep(step + 1);
    else setStep(4);
  };

  return (
    <section className="py-[50px] px-6 sm:px-10 lg:px-14 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-50/30 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto" dir="rtl">
        {/* Standardized Strategic Heading */}
        <div className="space-y-4 mb-16 text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100 shadow-sm">
             <BrainCircuit size={14} fill="currentColor" /> AI Strategic Advisor
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
             صمم مسارك الاستراتيجي اليوم
          </h2>
          <p className="text-slate-400 font-bold text-sm sm:text-base max-w-2xl leading-relaxed">
             دع الذكاء الاصطناعي يحلل موقعك الحالي وأهدافك الاستثمارية ليقترح عليك المحرك الأنسب لبدء تنفيذ مسارك الاستراتيجي فوراً.
          </p>
        </div>

        {/* ── Light Decision Chamber ────────────────────────────────────────────────── */}
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-4 sm:p-8 shadow-2xl shadow-indigo-100/20 relative overflow-hidden max-w-4xl mx-auto">
           {/* Progress Bar (Light) */}
           <div className="absolute top-0 left-0 w-full h-1 bg-slate-50">
              <motion.div 
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-indigo-500 to-blue-400"
              />
           </div>

           <div className="flex justify-between items-center mb-8 px-2">
              <div className="text-right">
                 <p className="text-[8px] font-black text-slate-300 uppercase leading-none tracking-widest mb-0.5">STEP {step}/3</p>
                 <p className="text-[10px] font-black text-indigo-500 uppercase">Understanding status: {Math.round(progress)}%</p>
              </div>
              <div className="flex gap-1.5">
                 {[1, 2, 3].map(s => (
                   <div key={s} className={`w-1.5 h-1.5 rounded-full transition-colors ${s <= step ? 'bg-indigo-500' : 'bg-slate-100'}`} />
                 ))}
              </div>
           </div>

           <AnimatePresence mode="wait">
              {step <= 3 ? (
                <motion.div 
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-8"
                >
                   <div className="text-right">
                      <h3 className="text-lg sm:text-xl font-black text-slate-800 italic mb-1">
                         0{step}. {currentStepData.title}
                      </h3>
                      <p className="text-indigo-400/80 text-[9px] font-bold">بناءً على اختيارك، سيتم تحديد المحرك الأنسب لك.</p>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {currentStepData.options.map((opt) => (
                        <DecisionCard 
                          key={opt.id}
                          icon={opt.icon}
                          title={opt.title}
                          sub={opt.sub}
                          hint={opt.hint}
                          onClick={() => handleSelection(opt.id)}
                        />
                      ))}
                   </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center space-y-6"
                >
                   <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto border border-emerald-100">
                      <CheckCircle2 size={32} />
                   </div>
                   
                   <div className="space-y-2">
                      <p className="text-[8px] font-black text-indigo-400 uppercase tracking-widest mb-2">Strategic Mapping Complete</p>
                      <h4 className="text-xl font-black text-slate-900 leading-tight">
                        تم تحليل هدفك بنجاح
                      </h4>
                      <p className="text-slate-400 font-bold text-[10px] max-w-sm mx-auto leading-relaxed">
                         ننصحك بالبدء بـ <span className="text-indigo-600">رادار استكشاف الأسواق</span> لتحقيق أفضل عائد استثماري.
                      </p>
                   </div>

                   <div className="flex justify-center items-center gap-4 pt-4">
                      <button onClick={() => setStep(1)} className="text-[9px] font-black text-slate-400 hover:text-slate-900 transition-colors uppercase">
                        إعادة بناء المسار
                      </button>
                      <button 
                        onClick={() => setActiveTab('problem-engine')}
                        className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-[11px] font-black hover:bg-slate-800 transition-all flex items-center gap-2 group"
                      >
                         بدء التنفيذ
                         <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                      </button>
                   </div>
                </motion.div>
              )}
           </AnimatePresence>

           {/* AI Preview (Light) */}
           {step <= 3 && (
             <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-center">
                <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                   <p className="text-[9px] font-bold text-slate-500">
                      {step === 1 ? 'حدد موقعك للبدء...' : `جاري مواءمة هدفك مع سوابق النجاح...`}
                   </p>
                </div>
             </div>
           )}
        </div>
      </div>
    </section>
  );
};

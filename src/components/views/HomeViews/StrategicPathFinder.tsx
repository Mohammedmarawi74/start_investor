import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Target, 
  MapPin, 
  ShieldCheck, 
  Briefcase, 
  Activity, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   STRATEGIC PATH FINDER — "Step-by-Step AI Advisor"
   ═══════════════════════════════════════════════════════════════ */

const STEPS_DATA = [
  {
    step: 1,
    title: 'تحديد الموقع والمرجعية',
    options: [
      { id: 'new', title: 'مستثمر طموح', sub: 'أسعى لاستكشاف فرص ناشئة', icon: Target, hint: 'نبدأ من الصفر' },
      { id: 'scale', title: 'كيان مؤسسي', sub: 'أسعى لتعزيز الحصة السوقية', icon: MapPin, hint: 'تطوير وتوسع' },
      { id: 'protect', title: 'محفظة استثمارية', sub: 'أسعى لتنويع الاستثمارات', icon: ShieldCheck, hint: 'إدارة مخاوف' },
    ]
  },
  {
    step: 2,
    title: 'تحديد الهدف الاستراتيجي',
    options: [
      { id: 'b2b', title: 'قطاع الأعمال B2B', sub: 'بناء شراكات طويلة', icon: Briefcase, hint: 'عقود مستقرة' },
      { id: 'b2c', title: 'المستهلك النهائي B2C', sub: 'حلول سريعة الانتشار', icon: Activity, hint: 'نمو متسارع' },
      { id: 'deeptech', title: 'تقنيات عميقة', sub: 'بحث وتطوير مستدام', icon: BrainCircuit, hint: 'ميزة تنافسية' },
    ]
  },
  {
    step: 3,
    title: 'تحديد الرغبة بالمخاطرة',
    options: [
      { id: 'high', title: 'مخاطرة عالية', sub: 'تطلع لتعظيم العوائد الاستثمارية', icon: Target, hint: 'أسواق غير مطروقة' },
      { id: 'med', title: 'مخاطرة محسوبة', sub: 'استراتيجية نمو متزنة', icon: MapPin, hint: 'موازنة المحفظة' },
      { id: 'low', title: 'مخاطرة منخفضة', sub: 'ضمان استقرار الأصول', icon: ShieldCheck, hint: 'تدفق نقدي مستقر' },
    ]
  }
];

const DecisionCard = ({ icon: Icon, title, sub, hint, onClick, isSelected }: any) => (
  <div 
    onClick={onClick}
    className={`group relative p-6 bg-white border rounded-[2rem] cursor-pointer transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.15)] hover:-translate-y-2 active:scale-95 text-right
      ${isSelected ? 'border-indigo-600 ring-4 ring-indigo-50 shadow-xl' : 'border-slate-100 hover:border-indigo-200'}
    `}
  >
    {/* Inner Glow */}
    <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] ${isSelected ? 'opacity-100' : ''}`} />
    
    <div className="relative flex flex-col items-center text-center gap-4">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isSelected ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 rotate-6' : 'bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:rotate-3'}`}>
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <div className="space-y-1">
        <h4 className={`text-base font-black transition-colors ${isSelected ? 'text-indigo-900' : 'text-slate-900'}`}>{title}</h4>
        <p className="text-[11px] font-bold text-slate-400 leading-relaxed px-2">{sub}</p>
      </div>
      
      {/* Selected Indicator */}
      {isSelected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg animate-in zoom-in-0">
          <CheckCircle2 size={14} />
        </div>
      )}
    </div>
  </div>
);

export const StrategicPathFinder = ({ setActiveTab }: any) => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<any>({});

  const currentStepData = STEPS_DATA.find(s => s.step === step) || STEPS_DATA[0];
  const progress = (step / 3) * 100;

  const handleSelection = (id: string) => {
    setSelections({ ...selections, [step]: id });
    setTimeout(() => {
      if (step < 3) setStep(prev => prev + 1);
      else setStep(4);
    }, 500);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-10 lg:px-14 bg-white relative overflow-hidden" dir="rtl">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-indigo-100 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-100 rounded-full blur-[140px] mix-blend-multiply" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-100 shadow-sm animate-bounce">
             <BrainCircuit size={14} /> نظام التوجيه الذكي
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]">
             صمم <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">مسارك الاستراتيجي</span> اليوم
          </h2>
          <p className="text-slate-400 font-bold text-[13px] sm:text-base max-w-2xl mx-auto leading-relaxed">
             دع محرك الذكاء الاصطناعي يحلل موقعك الحالي وأهدافك ليقترح لك المسار الأمثل للانطلاق.
          </p>
        </div>

        {/* ── Decision Chamber ────────────────────────────────────────────────── */}
        <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[3.5rem] p-6 sm:p-12 shadow-[0_40px_100px_-20px_rgba(79,70,229,0.12)] relative overflow-hidden max-w-5xl mx-auto">
           
           {/* Progress Logic */}
           <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100/50">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 transition-all duration-1000 ease-out relative"
                style={{ width: `${progress > 100 ? 100 : progress}%` }}
              >
                <div className="absolute top-0 right-0 h-full w-20 bg-white/30 blur-sm animate-[shimmer_2s_infinite]" />
              </div>
           </div>

           <div className="flex justify-between items-end mb-12">
              <div className="space-y-1">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">مرحلة {step <= 3 ? step : 3} من 3</p>
                 <p className="text-2xl font-black text-indigo-600">{Math.round(progress > 100 ? 100 : progress)}%</p>
              </div>
              <div className="flex gap-2.5 pb-2">
                 {[1, 2, 3].map(s => (
                   <div key={s} className={`w-10 h-1.5 rounded-full transition-all duration-500 ${s <= step ? 'bg-indigo-600 w-16' : 'bg-slate-100'}`} />
                 ))}
              </div>
           </div>

           <div className="min-h-[400px] flex items-center">
              {step <= 3 ? (
                <div key={`step-${step}`} className="w-full space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                   <div className="text-right">
                      <div className="flex items-center gap-3 mb-2">
                         <span className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black italic text-lg shadow-lg">0{step}</span>
                         <h3 className="text-2xl lg:text-3xl font-black text-slate-800">
                            {currentStepData.title}
                         </h3>
                      </div>
                      <p className="text-slate-400 font-bold text-sm mr-13">بناءً على اختيارك، سيتم مواءمة المحرك الأنسب لك.</p>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {currentStepData.options.map((opt) => (
                        <DecisionCard 
                          key={opt.id}
                          icon={opt.icon}
                          title={opt.title}
                          sub={opt.sub}
                          hint={opt.hint}
                          onClick={() => handleSelection(opt.id)}
                          isSelected={selections[step] === opt.id}
                        />
                      ))}
                   </div>
                </div>
              ) : (
                <div key="results" className="w-full py-10 text-center space-y-10 animate-in zoom-in-95 duration-700">
                   <div className="relative inline-block">
                      <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[2.5rem] flex items-center justify-center mx-auto border-4 border-white shadow-2xl relative z-10">
                         <CheckCircle2 size={48} />
                      </div>
                      <div className="absolute inset-0 bg-emerald-400 blur-3xl opacity-20 animate-pulse" />
                   </div>
                   
                   <div className="space-y-4">
                      <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2">اكتمل المسح الاستراتيجي بنجاح</p>
                      <h4 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                        تمت المواءمة الذكية
                      </h4>
                      <p className="text-slate-500 font-bold text-base max-w-lg mx-auto leading-relaxed">
                         بناءً على ملفك، ننصحك بالبدء بـ <span className="text-indigo-600 font-black">رادار استكشاف الأسواق</span> للوصول إلى أعلى إمكانات النمو.
                      </p>
                   </div>

                   <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
                      <button 
                        onClick={() => setStep(1)} 
                        className="px-8 py-4 text-sm font-black text-slate-400 hover:text-slate-900 transition-all uppercase tracking-widest hover:scale-105"
                      >
                         إعادة البدء
                      </button>
                      <button 
                        onClick={() => setActiveTab('market-discovery')}
                        className="px-10 py-4 bg-slate-900 text-white rounded-[2rem] text-sm font-black hover:bg-indigo-600 transition-all flex items-center gap-3 group shadow-2xl shadow-indigo-200"
                      >
                         بدء التنفيذ الآن
                         <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                      </button>
                   </div>
                </div>
              )}
           </div>

           {/* AI Status Indicator */}
           {step <= 3 && (
             <div className="mt-12 flex justify-center">
                <div className="px-6 py-3 bg-slate-900 rounded-full flex items-center gap-4 shadow-2xl shadow-indigo-100">
                   <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" />
                   </div>
                   <p className="text-[10px] font-black text-slate-100 uppercase tracking-widest">
                      {step === 1 ? 'نظام التحليل جاهز...' : `جاري ربط البيانات بالنماذج العالمية...`}
                   </p>
                </div>
             </div>
           )}
        </div>
      </div>
    </section>
  );
};

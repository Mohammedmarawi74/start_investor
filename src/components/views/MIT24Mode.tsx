
import React, { useState } from 'react';
import {
  ChevronDown, ChevronLeft, CheckCircle2,
  Target, Users, DollarSign, TrendingUp, BarChart2,
  ArrowUpRight
} from 'lucide-react';

interface StepData { id: number; value: string; }

const PHASES = [
  {
    id: 1, label: 'اكتشاف العميل', color: 'indigo', icon: <Users size={15} />,
    steps: [
      { id: 1,  title: 'تقسيم السوق (Market Segmentation)',         hint: 'حدد 6-12 شريحة سوقية ممكنة. ما الفئات التي يمكن للمشروع أن يخدمها؟' },
      { id: 2,  title: 'اختيار سوق الانطلاق (Beachhead Market)',    hint: 'أي شريحة واحدة ستركز عليها أولاً للاختراق والنمو؟ ولماذا؟' },
      { id: 3,  title: 'بناء ملف المستخدم النهائي',                 hint: 'صف المستخدم: عمره، يومه المعتاد، أولوياته، ومشكلته الجوهرية.' },
      { id: 4,  title: 'حجم السوق الكلي (TAM)',                     hint: 'قدّر عدد العملاء المحتملين × متوسط القيمة السنوية لكل عميل.' },
    ],
  },
  {
    id: 2, label: 'تحليل الفرصة', color: 'blue', icon: <BarChart2 size={15} />,
    steps: [
      { id: 5,  title: 'رسم شخصية المستخدم (Persona)',             hint: 'ابتكر شخصية خيالية تمثل عميلك المثالي باسم وقصة وتفاصيل دقيقة.' },
      { id: 6,  title: 'رحلة الاستخدام الكاملة (Full Life Cycle)', hint: 'كيف يكتشف المنتج؟ كيف يستخدمه؟ ماذا يفعل بعد ذلك؟' },
      { id: 7,  title: 'مواصفات المنتج عالية المستوى',             hint: 'ما الوظائف الـ 3-5 الأساسية التي تجعل المنتج يعمل لهذا المستخدم؟' },
      { id: 8,  title: 'قياس القيمة المقدَّمة',                    hint: 'كم يوفّر المنتج من وقت أو مال أو جهد لكل عميل سنوياً؟' },
    ],
  },
  {
    id: 3, label: 'النموذج والتسعير', color: 'emerald', icon: <DollarSign size={15} />,
    steps: [
      { id: 9,  title: 'تحديد أول 10 عملاء',                      hint: 'أذكرهم بأسمائهم أو فئاتهم المحددة. من يمكنك الاتصال به اليوم؟' },
      { id: 10, title: 'تحديد الجوهر الأساسي للمنتج (Core)',       hint: 'ما الشيء الواحد الذي يجب أن يفعله منتجك بشكل لا يُضاهى؟' },
      { id: 11, title: 'تصميم نموذج الإيرادات',                    hint: 'اشتراك؟ بيع مباشر؟ عمولة؟ freemium؟ وضّح المنطق.' },
      { id: 12, title: 'استراتيجية التسعير',                       hint: 'ما السعر المقترح؟ كيف توصلت لهذا الرقم؟ ما نموذج المقارنة؟' },
    ],
  },
  {
    id: 4, label: 'التحقق والإطلاق', color: 'amber', icon: <TrendingUp size={15} />,
    steps: [
      { id: 13, title: 'قيمة عمر العميل (LTV)',                    hint: 'ما متوسط الإيراد من كل عميل طوال فترة تعامله مع المشروع؟' },
      { id: 14, title: 'تكلفة اكتساب العميل (COCA)',              hint: 'كم يكلف الحصول على عميل واحد؟ ما نسبة LTV/COCA؟' },
      { id: 15, title: 'الافتراضات الرئيسية',                     hint: 'ما الافتراضات التي إذا كانت خاطئة ستُفشل الفكرة؟' },
      { id: 16, title: 'المنتج الأدنى قابلية البيع (MVBP)',        hint: 'أبسط نسخة يمكن بيعها اليوم لتحقيق إيراد فعلي وتغذية راجعة؟' },
    ],
  },
  {
    id: 5, label: 'خطة النمو', color: 'rose', icon: <Target size={15} />,
    steps: [
      { id: 17, title: 'مؤشرات النجاح (Milestones)',               hint: 'ما الأرقام الملموسة التي تعرف بها أن المشروع ينجح؟' },
      { id: 18, title: 'خارطة طريق المنتج (Roadmap)',              hint: 'ما الميزات في الـ 3 و6 و12 شهراً القادمة؟' },
      { id: 19, title: 'متطلبات التمويل',                          hint: 'كم تحتاج؟ كيف ستنفقه؟ ما المرحلة التمويلية المناسبة؟' },
      { id: 20, title: 'استراتيجية الخروج أو التوسع',              hint: 'هل الهدف الاستحواذ؟ IPO؟ التوسع الجغرافي؟ رؤيتك بعد 5 سنوات.' },
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; activeBg: string }> = {
  indigo:  { bg: 'bg-indigo-50',  text: 'text-indigo-600',  border: 'border-indigo-200',  activeBg: 'bg-indigo-600'  },
  blue:    { bg: 'bg-blue-50',    text: 'text-blue-600',    border: 'border-blue-200',    activeBg: 'bg-blue-600'    },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', activeBg: 'bg-emerald-600' },
  amber:   { bg: 'bg-amber-50',   text: 'text-amber-600',   border: 'border-amber-200',   activeBg: 'bg-amber-600'   },
  rose:    { bg: 'bg-rose-50',    text: 'text-rose-600',    border: 'border-rose-200',    activeBg: 'bg-rose-600'    },
};

export const MIT24Mode: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [steps, setSteps] = useState<StepData[]>(
    PHASES.flatMap(p => p.steps.map(s => ({ id: s.id, value: '' })))
  );
  const [activePhase, setActivePhase] = useState(1);
  const [openStep, setOpenStep]       = useState<number | null>(1);

  const getValue = (id: number) => steps.find(s => s.id === id)?.value ?? '';
  const setValue = (id: number, v: string) =>
    setSteps(prev => prev.map(s => s.id === id ? { ...s, value: v } : s));

  const filledCount = steps.filter(s => s.value.trim()).length;
  const totalSteps  = steps.length;
  const pct         = Math.round((filledCount / totalSteps) * 100);

  const currentPhase = PHASES.find(p => p.id === activePhase)!;
  const c = colorMap[currentPhase.color];

  const phaseFilled = (phase: typeof PHASES[0]) =>
    phase.steps.filter(s => getValue(s.id).trim()).length;

  return (
    <div dir="rtl" className="w-full max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8 xl:px-14 py-4 sm:py-6 gap-4 sm:gap-6 animate-in fade-in duration-500 overflow-x-hidden">

      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="w-full flex items-start sm:items-center justify-between flex-wrap gap-3">
        <div className="min-w-0">
          <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">MIT Disciplined Entrepreneurship</h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-400 leading-snug">منهجية بيل أوليت — 20 خطوة منضبطة لبناء مشروع ناجح</p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-20 sm:w-32 h-1.5 sm:h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
            </div>
            <span className="text-xs font-black text-slate-400 whitespace-nowrap">{filledCount}/{totalSteps}</span>
          </div>
          <button
            onClick={onComplete}
            className={`flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all active:scale-95 whitespace-nowrap ${
              pct >= 40
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100 hover:bg-indigo-700'
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'
            }`}
          >
            تحليل النتائج
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>

      {/* ── Phase Tabs — wrapped on mobile ──────────────────── */}
      <div className="flex flex-wrap gap-2 pb-1 w-full justify-center sm:justify-start">
        {PHASES.map(phase => {
          const phC = colorMap[phase.color];
          const filled = phaseFilled(phase);
          const isActive = activePhase === phase.id;
          return (
            <button
              key={phase.id}
              onClick={() => { setActivePhase(phase.id); setOpenStep(phase.steps[0].id); }}
              className={`flex flex-col items-center gap-1 sm:gap-1.5 p-2 sm:p-3 rounded-xl sm:rounded-2xl text-center transition-all border shrink-0 flex-1 min-w-[30%] sm:min-w-[80px] ${
                isActive
                  ? `${phC.bg} ${phC.text} ${phC.border} shadow-sm`
                  : 'bg-slate-50 text-slate-500 border-transparent hover:bg-slate-100'
              }`}
            >
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center ${isActive ? phC.activeBg + ' text-white' : 'bg-white text-slate-400 shadow-sm'}`}>
                {phase.icon}
              </div>
              <span className="text-[9px] sm:text-[10px] font-black leading-tight text-center line-clamp-2">{phase.label}</span>
              <div className="flex items-center gap-1 w-full justify-center">
                <div className="w-6 sm:w-10 h-1 bg-white/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${isActive ? phC.activeBg : 'bg-emerald-400'}`}
                    style={{ width: `${(filled / phase.steps.length) * 100}%` }}
                  />
                </div>
                <span className={`text-[8px] sm:text-[9px] font-black ${isActive ? phC.text : filled === phase.steps.length ? 'text-emerald-500' : 'text-slate-300'}`}>
                  {filled}/{phase.steps.length}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Steps Accordion ────────────────────────────────────── */}
      <div className="space-y-2 sm:space-y-3">
        {currentPhase.steps.map((step, sIdx) => {
          const isOpen = openStep === step.id;
          const val = getValue(step.id);
          const isDone = val.trim() !== '';

          return (
            <div
              key={step.id}
              className={`rounded-xl sm:rounded-2xl overflow-hidden transition-all border ${
                isOpen
                  ? `border-2 ${c.border} shadow-sm`
                  : isDone
                  ? 'border-emerald-100 bg-emerald-50/30'
                  : 'border-slate-100 bg-white'
              }`}
            >
              {/* Step Header */}
              <button
                className={`w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-right transition-all ${
                  isOpen ? 'bg-white' : 'hover:bg-slate-50/80 active:bg-slate-50'
                }`}
                onClick={() => setOpenStep(isOpen ? null : step.id)}
              >
                <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 text-sm font-black transition-all ${
                  isDone
                    ? 'bg-emerald-500 text-white'
                    : isOpen
                    ? `${c.activeBg} text-white`
                    : 'bg-slate-100 text-slate-400'
                }`}>
                  {isDone ? <CheckCircle2 size={16} /> : step.id}
                </div>

                <div className="flex-1 text-right min-w-0">
                  <p className={`text-xs sm:text-sm font-black leading-snug ${isOpen ? 'text-slate-900' : isDone ? 'text-slate-600' : 'text-slate-700'}`}>
                    {step.title}
                  </p>
                  {isDone && !isOpen && (
                    <p className="text-xs font-semibold text-slate-400 mt-0.5 line-clamp-1 leading-snug">{val}</p>
                  )}
                </div>

                <div className="shrink-0">
                  {isOpen
                    ? <ChevronDown size={15} className={c.text} />
                    : <ChevronLeft size={15} className="text-slate-300" />
                  }
                </div>
              </button>

              {/* Step Body */}
              {isOpen && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 bg-white animate-in slide-in-from-top-1 duration-200">
                  <p className={`text-xs sm:text-sm font-semibold leading-relaxed mb-3 sm:mb-4 pr-3 sm:pr-4 border-r-2 ${c.border} ${c.text}`}>
                    {step.hint}
                  </p>
                  <textarea
                    value={val}
                    onChange={e => setValue(step.id, e.target.value)}
                    placeholder="أدخل إجابتك هنا بوضوح ودقة..."
                    className={`w-full min-h-[130px] sm:min-h-[160px] bg-slate-50 border border-slate-100 focus:border-${currentPhase.color}-200 focus:bg-white rounded-xl p-3 sm:p-4 text-xs sm:text-sm font-medium text-slate-700 outline-none resize-none placeholder:text-slate-300 transition-all leading-relaxed`}
                    autoFocus
                  />
                  <div className="flex items-center justify-between mt-2 sm:mt-3">
                    <span className="text-[10px] font-black text-slate-300">{val.length} حرف</span>
                    <div className="flex gap-2">
                      {sIdx > 0 && (
                        <button
                          onClick={() => setOpenStep(currentPhase.steps[sIdx - 1].id)}
                          className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs font-black bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all active:scale-95"
                        >
                          السابقة
                        </button>
                      )}
                      {sIdx < currentPhase.steps.length - 1 ? (
                        <button
                          onClick={() => setOpenStep(currentPhase.steps[sIdx + 1].id)}
                          className={`flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs font-black ${c.bg} ${c.text} hover:opacity-80 transition-all active:scale-95`}
                        >
                          الخطوة التالية
                          <ChevronLeft size={12} />
                        </button>
                      ) : activePhase < PHASES.length ? (
                        <button
                          onClick={() => {
                            const next = PHASES[activePhase];
                            setActivePhase(next.id);
                            setOpenStep(next.steps[0].id);
                          }}
                          className="flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs font-black bg-indigo-600 text-white hover:bg-indigo-700 transition-all active:scale-95"
                        >
                          المرحلة التالية
                          <ChevronLeft size={12} />
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

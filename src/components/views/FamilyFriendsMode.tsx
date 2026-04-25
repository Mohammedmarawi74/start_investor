
import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  Sparkles, 
  DollarSign, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2,
  Layers,
  Target,
  Activity,
  Rocket,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface FamilyFriendsData {
  nickname: string;
  simpleProblem: string;
  grandmaExplanation: string;
  firstUser: string;
  moneyModel: string;
}

export const FamilyFriendsMode: React.FC<{ 
  data: FamilyFriendsData; 
  onChange: (data: Partial<FamilyFriendsData>) => void;
  onComplete: () => void;
}> = ({ data, onChange, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'vision',
      title: 'التسمية التجارية',
      subtitle: 'اختر اسماً أولياً يعكس هوية الفكرة وهدفها الجوهري.',
      icon: <Layers className="text-indigo-600" size={20} />,
      iconBg: 'bg-indigo-50',
      placeholder: 'مثال: منصة "سريع" للخدمات، أو تطبيق "مؤشر" للتحليلات...',
      field: 'nickname',
      phase: 'PHASE 01',
    },
    {
      id: 'problem',
      title: 'الفجوة السوقية',
      subtitle: 'ما التحدي الذي يطرح مشروعك حلاً جذرياً له؟',
      icon: <Target className="text-rose-600" size={20} />,
      iconBg: 'bg-rose-50',
      placeholder: 'مثال: يعاني أصحاب المشاريع الصغيرة من نقص في قنوات التوزيع الموثوقة...',
      field: 'simpleProblem',
      phase: 'PHASE 02',
    },
    {
      id: 'grandma',
      title: 'النموذج التشغيلي',
      subtitle: 'كيف تصف طريقة عمل مشروعك بعبارات بسيطة وواضحة؟',
      icon: <Activity className="text-emerald-600" size={20} />,
      iconBg: 'bg-emerald-50',
      placeholder: 'مثال: يربط المشروع مقدمي الخدمات بالعملاء عبر واجهة رقمية موحدة تضمن الأمان...',
      field: 'grandmaExplanation',
      phase: 'PHASE 03',
    },
    {
      id: 'hero',
      title: 'الشريحة المستهدفة',
      subtitle: 'من هي الفئة الأكثر احتياجاً لهذا الحل؟',
      icon: <Users className="text-blue-600" size={20} />,
      iconBg: 'bg-blue-50',
      placeholder: 'مثال: الطلاب الجامعيون الباحثون عن فرص عمل جزئية مرنة...',
      field: 'firstUser',
      phase: 'PHASE 04',
    },
    {
      id: 'reward',
      title: 'استراتيجية الإيرادات',
      subtitle: 'كيف يحقق مشروعك الأرباح ويستدام مالياً؟',
      icon: <DollarSign className="text-amber-600" size={20} />,
      iconBg: 'bg-amber-50',
      placeholder: 'مثال: عمولات على العمليات الناجحة مع اشتراكات شهرية للمؤسسات...',
      field: 'moneyModel',
      phase: 'PHASE 05',
    }
  ];

  const current = steps[currentStep];
  const isLast = currentStep === steps.length - 1;
  const hasValue = !!(data as any)[current.field];

  const next = () => {
    if (currentStep < steps.length - 1) setCurrentStep(p => p + 1);
    else onComplete();
  };

  const prev = () => {
    if (currentStep > 0) setCurrentStep(p => p - 1);
  };

  return (
    <div dir="rtl" className="w-full h-full flex flex-col px-4 sm:px-6 md:px-8 xl:px-14 py-5 sm:py-7 animate-in fade-in duration-500">
      
      {/* Step Progress Bar */}
      <div className="flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8">
        {steps.map((s, idx) => (
          <React.Fragment key={idx}>
            <button
              onClick={() => setCurrentStep(idx)}
              className="flex items-center gap-1.5 sm:gap-2 group shrink-0"
            >
              <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${
                idx === currentStep
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                  : idx < currentStep
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
              }`}>
                {idx < currentStep ? <CheckCircle2 size={12} /> : idx + 1}
              </div>
              {/* Phase label — only on md+ */}
              <span className={`hidden md:block text-[11px] font-black tracking-wider uppercase transition-colors ${
                idx === currentStep ? 'text-indigo-600' : idx < currentStep ? 'text-emerald-500' : 'text-slate-300'
              }`}>{s.phase}</span>
            </button>
            {idx < steps.length - 1 && (
              <div className={`flex-1 h-px transition-all duration-500 ${idx < currentStep ? 'bg-emerald-400' : 'bg-slate-100'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-5 gap-5 sm:gap-6 xl:gap-10 min-h-0">

        {/* Left: Metadata Panel — hidden on mobile, visible on lg+ */}
        <div className="hidden lg:flex lg:col-span-2 flex-col justify-between py-4">
          <div className="space-y-5">
            {/* Icon + Phase */}
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-2xl ${current.iconBg} flex items-center justify-center shadow-sm`}>
                {current.icon}
              </div>
              <span className="text-[10px] font-black text-slate-400 tracking-[0.25em] uppercase">{current.phase}</span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2 className="text-3xl xl:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-3">
                {current.title}
              </h2>
              <p className="text-sm font-semibold text-slate-400 leading-relaxed max-w-xs">
                {current.subtitle}
              </p>
            </div>

            {/* Divider + branding */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-8 h-px bg-slate-200"></div>
              <Sparkles size={13} className="text-slate-300" />
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">Strategic Thinking Mode</span>
            </div>
          </div>

          {/* Step summary on lg+ */}
          <div className="mt-8">
            <div className="space-y-2">
              {steps.map((s, idx) => (
                <div key={idx} className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  idx === currentStep ? 'bg-indigo-50/80 border border-indigo-100' : ''
                }`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                    idx < currentStep ? 'bg-emerald-500 text-white' :
                    idx === currentStep ? 'bg-indigo-600 text-white' : 'bg-slate-100'
                  }`}>
                    {idx < currentStep
                      ? <CheckCircle2 size={11} />
                      : <span className="text-[9px] font-black text-slate-400">{idx + 1}</span>
                    }
                  </div>
                  <span className={`text-xs font-bold truncate ${
                    idx === currentStep ? 'text-indigo-700' : idx < currentStep ? 'text-emerald-600' : 'text-slate-300'
                  }`}>{s.title}</span>
                  {(data as any)[s.field] && idx !== currentStep && (
                    <div className="mr-auto w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile-only: compact title header */}
        <div className="lg:hidden flex items-center gap-3 -mt-1">
          <div className={`w-9 h-9 rounded-2xl ${current.iconBg} flex items-center justify-center shadow-sm shrink-0`}>
            {current.icon}
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{current.phase}</p>
            <h2 className="text-lg font-black text-slate-900 leading-tight truncate">{current.title}</h2>
            <p className="text-xs font-semibold text-slate-400 leading-snug line-clamp-2">{current.subtitle}</p>
          </div>
        </div>

        {/* Right: Input Area */}
        <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-6 flex-1 min-h-0">
          
          {/* Textarea */}
          <div className="flex-1 relative min-h-[180px]">
            <textarea
              key={current.field}
              value={(data as any)[current.field] || ''}
              onChange={(e) => onChange({ [current.field]: e.target.value })}
              placeholder={current.placeholder}
              className="w-full h-full min-h-[200px] sm:min-h-[240px] bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-indigo-400 focus:bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-sm sm:text-base font-semibold text-slate-800 outline-none transition-all duration-300 resize-none placeholder:text-slate-300 placeholder:font-medium shadow-sm focus:shadow-xl focus:shadow-indigo-50/50 leading-relaxed"
            />

            {/* Character count */}
            <div className="absolute bottom-3 left-3 text-[10px] font-black text-slate-300">
              {((data as any)[current.field] || '').length} حرف
            </div>

            {/* Completion indicator */}
            {hasValue && (
              <div className="absolute top-3 left-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-sm animate-in zoom-in-50 duration-300">
                  <CheckCircle2 size={13} className="text-white" />
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between gap-3">
            {/* Back Button */}
            <button
              onClick={prev}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm font-black transition-all duration-200 ${
                currentStep === 0
                  ? 'opacity-0 pointer-events-none'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 active:scale-95'
              }`}
            >
              <ChevronRight size={15} />
              <span className="hidden sm:inline">السابق</span>
            </button>

            {/* Progress Text */}
            <span className="text-xs font-black text-slate-300 uppercase tracking-widest">
              {currentStep + 1} / {steps.length}
            </span>

            {/* Next / Submit Button */}
            <button
              onClick={next}
              className={`flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm font-black transition-all duration-200 active:scale-95 ${
                hasValue
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:scale-105'
                  : 'bg-slate-100 text-slate-300 cursor-not-allowed'
              }`}
            >
              {isLast ? (
                <>
                  إصدار التقرير
                  <Rocket size={14} className="text-amber-300" />
                </>
              ) : (
                <>
                  التالي
                  <ChevronLeft size={15} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

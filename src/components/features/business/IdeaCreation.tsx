
import React, { useState, useEffect } from 'react';
import {
  Sparkles, Wand2, Target, Zap,
  Rocket, Compass, Activity, ArrowUpRight,
  DraftingCompass, RotateCcw, CheckCircle2,
  Users, DollarSign, TrendingUp, Award, BrainCircuit
} from 'lucide-react';
import { FamilyFriendsMode } from '../../views/FamilyFriendsMode';
import { BusinessModelCanvas } from './BusinessModelCanvas';
import { MIT24Mode } from '../../views/MIT24Mode';

export type CreationMode = 'ai' | 'family' | 'scratch' | 'bmc' | 'mit24';

interface CreationStage {
  id: number;
  label: string;
  description: string;
  status: 'pending' | 'active' | 'completed';
}

const INITIAL_STAGES: CreationStage[] = [
  { id: 1, label: 'تعريف الفكرة', description: 'تحليل البذرة الأولى لمشروعك واستخلاص قيمته الجوهرية.', status: 'active' },
  { id: 2, label: 'تحليل الفجوات', description: 'البحث عن فرص التميز التنافسي في السوق.', status: 'pending' },
  { id: 3, label: 'هندسة العميل', description: 'رسم بروفايل العميل المثالي وتحليل رحلة احتياجه.', status: 'pending' },
  { id: 4, label: 'توليد الهوية', description: 'صياغة الاسم الاستراتيجي والمهمة الكبرى للمشروع.', status: 'pending' }
];

// ─── Small helper components ────────────────────────────────────────────
const StatCard: React.FC<{ label: string; value: string; sub?: string; accent?: string }> = ({ label, value, sub, accent = 'text-slate-900' }) => (
  <div className="bg-white border border-slate-100 rounded-2xl p-3 sm:p-4 shadow-sm">
    <p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 truncate">{label}</p>
    <p className={`text-xl sm:text-2xl font-black ${accent} leading-none`}>{value}</p>
    {sub && <p className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-1">{sub}</p>}
  </div>
);

const ValueProp: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-3 p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all group/val">
    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover/val:shadow-md transition-all">
      {React.cloneElement(icon as React.ReactElement, { size: 18 })}
    </div>
    <div className="min-w-0">
      <h5 className="text-sm font-black text-slate-900 mb-0.5 sm:mb-1">{title}</h5>
      <p className="text-xs font-semibold text-slate-400 leading-relaxed line-clamp-3">{desc}</p>
    </div>
  </div>
);

// ─── Main Component ──────────────────────────────────────────────────────
export const IdeaCreation: React.FC<{
  onBack: () => void;
  onBuildPlan?: () => void;
  initialMode?: CreationMode;
}> = ({ onBack, onBuildPlan, initialMode }) => {
  const [activeMode, setActiveMode] = useState<CreationMode>(initialMode || 'ai');
  const [step, setStep] = useState<'input' | 'processing' | 'result'>('input');
  const [prompt, setPrompt] = useState('');

  const [ideaData, setIdeaData] = useState({
    nickname: '', simpleProblem: '', grandmaExplanation: '', firstUser: '', moneyModel: ''
  });

  const [stages, setStages] = useState<CreationStage[]>(INITIAL_STAGES);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  useEffect(() => {
    if (step !== 'processing') return;
    const interval = setInterval(() => {
      setStages(prev => {
        const next = [...prev];
        if (activeStageIndex < next.length) {
          next[activeStageIndex].status = 'completed';
          if (activeStageIndex + 1 < next.length) next[activeStageIndex + 1].status = 'active';
          setActiveStageIndex(i => i + 1);
        } else {
          clearInterval(interval);
          setTimeout(() => setStep('result'), 800);
        }
        return next;
      });
    }, 2200);
    return () => clearInterval(interval);
  }, [step, activeStageIndex]);


  return (
    <div dir="rtl" className="flex flex-col h-full animate-in fade-in duration-500" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>

      {/* ── Body ──────────────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main canvas — full width, no sidebar */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0">

          {/* ── INPUT step ─────────────────────────────────────────── */}
          {step === 'input' && (
            <>
              {activeMode === 'ai' && (
                <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-14 animate-in fade-in duration-500">
                  <div className="text-center mb-8 sm:mb-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-lg shadow-indigo-100">
                      <Sparkles size={24} />
                    </div>
                    <h1 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 leading-tight">
                      صِف مسودة فكرتك
                    </h1>
                    <p className="text-sm font-semibold text-slate-400 leading-relaxed max-w-sm mx-auto">
                      اكتب لمحة سريعة وسيتولى النظام تحليلها واستخراج الروابط الاستراتيجية.
                    </p>
                  </div>

                  <div className="relative bg-white rounded-3xl border-2 border-slate-100 focus-within:border-indigo-200 shadow-sm transition-all overflow-hidden">
                    <textarea
                      value={prompt}
                      onChange={e => setPrompt(e.target.value)}
                      placeholder="مثال: تطبيق يربط الحرفيين المحليين بالعملاء في حيّهم..."
                      className="w-full min-h-[160px] sm:min-h-[180px] p-4 sm:p-6 text-sm sm:text-base font-semibold text-slate-800 outline-none resize-none placeholder:text-slate-200 bg-transparent leading-relaxed"
                    />
                    <div className="flex items-center justify-between px-4 sm:px-6 pb-4 gap-3 flex-wrap">
                      <div className="flex gap-2 flex-wrap">
                        {['خدمات', 'تقنية', 'تجارة'].map(tag => (
                          <button
                            key={tag}
                            onClick={() => setPrompt(p => p ? p + ' ' + tag : tag)}
                            className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black text-slate-400 hover:bg-slate-900 hover:text-white active:scale-95 transition-all"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => prompt.trim().length > 10 && setStep('processing')}
                        className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-sm font-black transition-all active:scale-95 ${
                          prompt.length >= 10
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700'
                            : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                        }`}
                      >
                        تحليل ذكي
                        <Wand2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeMode === 'family' && (
                <FamilyFriendsMode
                  data={ideaData}
                  onChange={d => setIdeaData(p => ({ ...p, ...d }))}
                  onComplete={() => setStep('processing')}
                />
              )}

              {activeMode === 'scratch' && (
                <div className="flex flex-col items-center justify-center py-16 sm:py-20 px-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-5 shadow-inner">
                    <DraftingCompass size={28} className="text-slate-300" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">الوضع اليدوي — قريباً</h3>
                  <p className="text-sm font-semibold text-slate-400 text-center max-w-xs leading-relaxed">
                    واجهة تحكم كاملة تمنحك الحرية المطلقة في كتابة تفاصيل مشروعك.
                  </p>
                </div>
              )}

              {activeMode === 'bmc' && (
                <BusinessModelCanvas onComplete={() => setStep('processing')} />
              )}

              {activeMode === 'mit24' && (
                <MIT24Mode onComplete={() => setStep('processing')} />
              )}
            </>
          )}

          {/* ── PROCESSING step ─────────────────────────────────────── */}
          {step === 'processing' && (
            <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-6 animate-in fade-in duration-700">
              <div className="relative mb-10 sm:mb-14">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-100 animate-pulse">
                  <BrainCircuit size={30} />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-indigo-600 shadow-md animate-bounce">
                  <Sparkles size={12} />
                </div>
              </div>

              <div className="w-full max-w-sm space-y-4 sm:space-y-5">
                {stages.map(stage => (
                  <div key={stage.id} className={`flex items-center gap-3 sm:gap-4 transition-all duration-700 ${stage.status === 'pending' ? 'opacity-25' : 'opacity-100'}`}>
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 text-sm font-black transition-all ${
                      stage.status === 'completed' ? 'bg-emerald-500 text-white' :
                      stage.status === 'active'    ? 'bg-indigo-600 text-white ring-4 ring-indigo-50' :
                                                    'bg-slate-100 text-slate-300'
                    }`}>
                      {stage.status === 'completed' ? <CheckCircle2 size={16} /> : stage.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-black truncate ${stage.status === 'active' ? 'text-indigo-600' : 'text-slate-700'}`}>{stage.label}</p>
                      <p className="text-xs font-semibold text-slate-400 leading-snug line-clamp-2">{stage.description}</p>
                    </div>
                    {stage.status === 'active' && (
                      <div className="flex gap-1 shrink-0">
                        {[0, 1, 2].map(i => (
                          <div key={i} className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── RESULT step ─────────────────────────────────────────── */}
          {step === 'result' && (
            <div className="w-full px-4 sm:px-6 md:px-8 py-5 sm:py-7 animate-in fade-in slide-in-from-bottom-4 duration-700">

              {/* Result Header */}
              <div className="flex items-center justify-between mb-5 sm:mb-7 gap-3">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                    <Rocket size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                      <span className="bg-indigo-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">تحليل مكتمل</span>
                      <span className="text-slate-400 text-[10px] font-semibold">{new Date().toLocaleDateString('ar-SA')}</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight truncate">
                      جاهز للانطلاق <span className="text-indigo-600">بفكرتك</span>
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() => setStep('input')}
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-200 hover:border-slate-900 text-slate-600 hover:text-slate-900 rounded-xl text-xs font-black transition-all group shrink-0 active:scale-95"
                >
                  <span className="hidden sm:inline">إعادة الضبط</span>
                  <RotateCcw size={13} className="group-hover:rotate-180 transition-transform duration-500" />
                </button>
              </div>

              {/* Quick Stats — 2 cols on mobile, 4 on sm+ */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-5 sm:mb-7">
                <StatCard label="التقييم الجوهري" value="9.4/10" accent="text-emerald-600" />
                <StatCard label="الجاذبية السوقية" value="92%" sub="تقدير مبدئي" accent="text-indigo-600" />
                <StatCard label="الميزة التنافسية" value="مرتفعة" accent="text-amber-600" />
                <StatCard label="قابلية التوسع" value="عالية" accent="text-blue-600" />
              </div>

              {/* Main Grid — stacked on mobile/tablet, side-by-side on xl */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 mb-5 sm:mb-6">

                {/* Brand Identity Panel */}
                <div className="xl:col-span-1 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-white relative overflow-hidden shadow-xl">
                  <div className="absolute -top-8 -left-8 w-36 h-36 bg-indigo-500/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-800/20 rounded-full blur-2xl" />
                  <div className="relative z-10 space-y-4 sm:space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center">
                        <Zap className="text-amber-400" size={16} />
                      </div>
                      <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-400/10 px-2 py-1 rounded-full border border-indigo-400/20">
                        هوية المشروع
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-black leading-tight uppercase mb-1.5 sm:mb-2">
                        {ideaData.nickname || 'FlowHealth'}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm font-semibold leading-relaxed border-r-2 border-indigo-500 pr-3">
                        {activeMode === 'family'
                          ? ideaData.grandmaExplanation || 'وصف المشروع سيظهر هنا.'
                          : 'نظام تشغيلي متكامل يهدف لإحداث ثورة في تجربة العميل والوصول السلس للخدمة.'}
                      </p>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-white/5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-slate-500 uppercase">الميزة التنافسية</span>
                        <span className="text-sm font-black text-emerald-400">92%</span>
                      </div>
                      <div className="w-full h-1.5 sm:h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="w-[92%] h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
                      </div>
                    </div>

                    {/* Mode badge */}
                    <div className="pt-3 sm:pt-4 border-t border-white/5">
                      <p className="text-[9px] font-black text-slate-500 uppercase mb-1.5 sm:mb-2">وضع التحليل</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-xl border border-white/5">
                        <Activity size={12} className="text-indigo-400" />
                        <span className="text-xs font-black text-slate-300">
                          {activeMode === 'ai' ? 'التوليد الذكي (AI)' : activeMode === 'family' ? 'وضع التفسير البسيط' : activeMode === 'bmc' ? 'Business Canvas' : 'MIT 24 Steps'}
                        </span>
                      </div>
                    </div>

                    {/* Target Persona */}
                    <div className="pt-3 sm:pt-4 border-t border-white/5">
                      <p className="text-[9px] font-black text-slate-500 uppercase mb-1.5 sm:mb-2">الشريحة المستهدفة</p>
                      <div className="flex items-center gap-2 p-2.5 sm:p-3 bg-white/5 rounded-xl border border-white/5">
                        <Users size={13} className="text-indigo-400 shrink-0" />
                        <p className="text-xs font-semibold text-slate-300 leading-snug">
                          {ideaData.firstUser || 'المستخدم المبكر (Early Adopter)'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategic Matrix */}
                <div className="xl:col-span-2 flex flex-col gap-4 sm:gap-5">
                  <div className="flex-1 bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4 sm:mb-5 gap-3">
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-black text-slate-900">مصفوفة القيمة الاستراتيجية</h4>
                        <p className="text-xs font-semibold text-slate-400">تحليل نقاط التفوق والتميز في المشروع</p>
                      </div>
                      <span className="bg-emerald-50 text-emerald-600 border-emerald-100 text-[9px] font-black px-2.5 py-1 rounded-full border uppercase tracking-widest whitespace-nowrap shrink-0">
                        محيط مميز
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
                      <ValueProp
                        icon={<BrainCircuit className="text-indigo-600" />}
                        title="الابتكار في التقديم"
                        desc={activeMode === 'family' ? ideaData.simpleProblem || 'تفصيل المشكلة المحددة.' : 'معالجة التحديات بأدوات تقنية غير مسبوقة.'}
                      />
                      <ValueProp
                        icon={<DollarSign className="text-emerald-600" />}
                        title="استدامة التدفقات"
                        desc={ideaData.moneyModel || 'نموذج ربح يضمن الاستمرارية والتوسع التصاعدي.'}
                      />
                      <ValueProp
                        icon={<TrendingUp className="text-blue-600" />}
                        title="قابلية النمو"
                        desc="بنية مرنة تتيح التوسع الجغرافي والعمودي بتكاليف تشغيل منخفضة."
                      />
                      <ValueProp
                        icon={<Award className="text-amber-600" />}
                        title="الميزة الدفاعية"
                        desc="تراكم البيانات والشبكة يخلق حواجز تنافسية صعبة الاختراق."
                      />
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {['كفاءة تشغيلية', 'تجربة مستخدم متفردة', 'نموذج ربحي مستدام', 'قدرة على التوسع'].map(p => (
                        <span key={p} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black text-slate-500">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-r from-slate-50 to-indigo-50 border border-slate-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm sm:text-base font-black text-slate-900 mb-1">
                        جاهز لتحويل الرؤية إلى خطة استثمارية؟
                      </h5>
                      <p className="text-xs font-semibold text-slate-400 leading-relaxed">
                        قم بصياغة خطة العمل الكاملة لاستقطاب الشركاء والمستثمرين.
                      </p>
                    </div>
                    <button 
                      onClick={onBuildPlan}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-slate-900 text-white rounded-xl sm:rounded-2xl text-sm font-black shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200 hover:scale-105 active:scale-95 transition-all shrink-0"
                    >
                      بناء خطة العمل
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

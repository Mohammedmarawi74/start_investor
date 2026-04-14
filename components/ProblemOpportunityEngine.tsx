import React, { useState } from 'react';
import {
  Sprout, MapPin, Users, Clock, Wallet, BarChart3, Zap,
  AlertCircle, ChevronDown, Sparkles, Cpu, TrendingUp,
  Globe, Plus, ArrowRight, Target, RefreshCw, CheckCircle2
} from 'lucide-react';

const ACCENT = {
  bg: 'bg-violet-600',
  bgLight: 'bg-violet-50',
  bgHover: 'hover:bg-violet-600',
  text: 'text-violet-600',
  textLight: 'text-violet-50',
  border: 'border-violet-200',
  borderHover: 'hover:border-violet-400',
  ring: 'focus-visible:ring-violet-500',
  shadow: 'hover:shadow-violet-100',
};

const PROBLEMS = [
  {
    id: 'agri-degradation',
    title: 'تدهور الإنتاج الزراعي والأمن الغذائي',
    description: 'انخفاض خصوبة التربة يؤدي إلى تراجع الإنتاج الزراعي وصعوبة زراعة المحاصيل الأساسية في مناطق واسعة من العالم.',
    origin: 'مشكلة بيئية زراعية',
    regions: ['إفريقيا (الساحل)', 'الشرق الأوسط', 'جنوب آسيا', 'أمريكا اللاتينية'],
    affected: ['المزارعون', 'سلاسل الغذاء', 'المستهلكون'],
    frequency: 'موسمي يتفاقم سنويًا',
    paymentCapability: 'مرتفعة في الحلول الصناعية',
    marketSize: '+10 تريليون دولار',
    currentSolutions: ['أسمدة', 'ري حديث', 'تحسين بذور'],
    gap: 'تعالج الإنتاج قصير المدى دون معالجة تدهور التربة نفسه',
    source: 'FAO',
    icon: Sprout,
    color: 'emerald',
    companies: [
      {
        name: 'Soil Intelligence Platform',
        type: 'AI SaaS',
        idea: 'منصة تستخدم AI وأقمار صناعية لتحليل صحة التربة لحظيًا وتوجيه قرارات الزراعة.',
        solves: ['معرفة التربة المناسبة لكل محصول', 'تقليل فشل الزراعة', 'تحسين الإنتاج قبل الزراعة'],
        model: 'SaaS للمزارعين + اشتراك حكومي',
        icon: Cpu,
      },
      {
        name: 'Smart Fertilizer Optimization',
        type: 'Optimization AI',
        idea: 'تحدد كمية ونوع السماد المثالي لكل قطعة أرض بدقة عالية بناءً على تحليل التربة.',
        solves: ['تقليل تكاليف الإنتاج', 'منع تدمير التربة', 'زيادة المحصول'],
        model: 'اشتراك موسمي + توصيات مدفوعة',
        icon: Zap,
      },
      {
        name: 'Agri Input Marketplace',
        type: 'Marketplace',
        idea: 'ربط المزارعين مباشرة بموردي البذور والأسمدة بناءً على احتياجات التربة الفعلية.',
        solves: ['تقليل الوسطاء', 'توفير تكلفة الإنتاج', 'اختيار منتجات مناسبة'],
        model: 'عمولة على كل عملية شراء',
        icon: TrendingUp,
      },
      {
        name: 'Yield Prediction AI',
        type: 'Predictive Analytics',
        idea: 'ذكاء اصطناعي يتوقع كمية الإنتاج قبل الزراعة لدعم قرارات التخطيط والتمويل.',
        solves: ['تقليل المخاطر المالية', 'تحسين التخطيط الغذائي', 'دعم الحكومات'],
        model: 'بيانات وتقارير B2B',
        icon: BarChart3,
      },
      {
        name: 'Land Restoration Network',
        type: 'Environment Tech',
        idea: 'تربط الأراضي الزراعية المتدهورة مع شركات متخصصة في إعادة التأهيل البيئي.',
        solves: ['استرجاع الأراضي الميتة', 'مشاريع بيئية ضخمة', 'تمويل مستدام'],
        model: 'مشاريع حكومية + تمويل دولي',
        icon: Globe,
      },
    ],
  },
];

const colorMap = {
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-100',
    icon: 'bg-emerald-600 text-white',
    badge: 'bg-emerald-100 text-emerald-700',
  },
};

export default function ProblemOpportunityEngine({ onBuildPlan }) {
  const [expanded, setExpanded] = useState(null);

  const totalOps = PROBLEMS.reduce((acc, p) => acc + p.companies.length, 0);

  return (
    <div className="min-h-screen bg-slate-50/50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20">

        {/* ── Header ── */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-bold tracking-wide uppercase">
              <RefreshCw size={14} className="animate-spin" style={{ animationDuration: '8s' }} />
              Strategy Engine
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight text-right">
            محرك تحويل المشاكل إلى فرص
          </h1>
          <p className="text-slate-700 text-lg sm:text-2xl max-w-3xl leading-relaxed font-medium text-right">
            يحلل التحديات العالمية الكبرى ويكشف مصفوفة من الفرص والمشاريع الجاهزة للتنفيذ بدقة استراتيجية عالية.
          </p>

          <div className="flex gap-6 mt-10 justify-start flex-row-reverse">
            <Stat label="مشاكل محللة" value={PROBLEMS.length} />
            <Stat label="فرص مكتشفة" value={totalOps} accent />
          </div>
        </header>

        {/* ── Problem Cards ── */}
        <div className="space-y-8">
          {PROBLEMS.map((prob) => {
            const isOpen = expanded === prob.id;
            const c = colorMap[prob.color] ?? colorMap.emerald;

            return (
              <article
                key={prob.id}
                className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/40 text-right"
              >
                {/* Card Header */}
                <div className="p-8 sm:p-12">
                  <div className="flex flex-col lg:flex-row-reverse items-start gap-8 mb-10">
                    <div className={`shrink-0 w-16 h-16 rounded-[1.5rem] ${c.icon} flex items-center justify-center shadow-lg`}>
                      <prob.icon size={32} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-4 justify-start flex-row-reverse">
                        <span className={`text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full ${c.badge} border border-current opacity-80`}>
                          {prob.origin}
                        </span>
                        <span className="text-sm font-bold text-slate-400">المصدر: {prob.source}</span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                        {prob.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-10 font-medium">
                    {prob.description}
                  </p>

                  {/* Meta grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                    <MetaBadge icon={MapPin} label="الانتشار المكتشف" value={prob.regions.join(' – ')} />
                    <MetaBadge icon={Users} label="الفئات المتضررة" value={prob.affected.join(' – ')} />
                    <MetaBadge icon={BarChart3} label="حجم السوق العالمي" value={prob.marketSize} />
                    <MetaBadge icon={Clock} label="معدل التكرار" value={prob.frequency} />
                    <MetaBadge icon={Wallet} label="البلاء المالي" value={prob.paymentCapability} />
                  </div>

                  {/* Gap & Solutions */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    <InfoBox
                      icon={Zap}
                      title="الحلول والمقاربات الحالية"
                      bg="bg-blue-50/50"
                      textColor="text-blue-900"
                      borderColor="border-blue-100"
                    >
                      <div className="flex flex-wrap gap-2.5 mt-4 justify-start flex-row-reverse">
                        {prob.currentSolutions.map((s) => (
                          <span key={s} className="px-4 py-1.5 bg-white rounded-xl text-sm font-bold text-blue-800 border border-blue-100 shadow-sm">
                            {s}
                          </span>
                        ))}
                      </div>
                    </InfoBox>

                    <InfoBox
                      icon={AlertCircle}
                      title="تحليل الفجوة الاستراتيجية"
                      bg="bg-amber-50/50"
                      textColor="text-amber-900"
                      borderColor="border-amber-100"
                    >
                      <p className="text-sm sm:text-base font-bold text-amber-900 mt-4 leading-relaxed">{prob.gap}</p>
                    </InfoBox>
                  </div>

                  {/* Toggle button */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : prob.id)}
                    aria-expanded={isOpen}
                    className={`w-full flex items-center justify-center gap-4 py-5 rounded-2xl text-lg font-black transition-all duration-500 border-2
                      ${isOpen
                        ? 'bg-violet-600 text-white border-violet-600 shadow-2xl shadow-violet-200'
                        : 'bg-slate-950 text-white border-slate-950 hover:bg-violet-600 hover:border-violet-600 hover:shadow-2xl hover:shadow-violet-200'
                      }`}
                  >
                    <Sparkles size={20} />
                    <span>{isOpen ? 'إغلاق مصفوفة الحلول' : `استكشاف ${prob.companies.length} فرص استثمارية جاهزة`}</span>
                    <ChevronDown
                      size={24}
                      className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>

                {/* ── Opportunities Panel ── */}
                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'opacity-100 max-h-[2500px]' : 'max-h-0 opacity-0'}`}
                >
                  <div className="border-t border-slate-100 bg-slate-50/40 px-8 sm:px-12 py-12">
                    <div className="flex items-center gap-4 mb-10 justify-start flex-row-reverse">
                      <div className="p-3 bg-violet-100 text-violet-700 rounded-2xl shadow-sm">
                        <Target size={28} />
                      </div>
                      <div className="text-right">
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">مصفوفة الفرص والمشاريع</h3>
                        <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-1">Opportunity Matrix & Solution Proposals</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {prob.companies.map((company, idx) => (
                        <OpportunityCard
                          key={idx}
                          company={company}
                          onBuildPlan={onBuildPlan}
                        />
                      ))}

                      {/* Add idea card */}
                      <div className="rounded-[2rem] border-2 border-dashed border-slate-300 p-8 flex flex-col items-center justify-center text-center cursor-pointer group hover:border-violet-400 hover:bg-white transition-all duration-300 min-h-[320px]">
                        <div className="w-16 h-16 rounded-full bg-slate-100 group-hover:bg-violet-50 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
                          <Plus size={32} className="text-slate-400 group-hover:text-violet-600 transition-colors" />
                        </div>
                        <h5 className="text-xl font-black text-slate-800 group-hover:text-slate-900 mb-2">اقترح فرصة جديدة</h5>
                        <p className="text-sm font-bold text-slate-400 leading-relaxed max-w-[200px]">هل لديك فكرة مشروع تحل هذه المشكلة؟ شاركنا رؤيتك وسنقوم بتحليلها.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty state (if no problems) */}
        {PROBLEMS.length === 0 && (
          <div className="text-center py-32 text-slate-400">
            <Sparkles size={64} className="mx-auto mb-6 opacity-20" />
            <p className="text-2xl font-black">لا توجد أبحاث جارية حالياً</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value, accent }) {
  return (
    <div className={`px-8 py-4 rounded-3xl border-2 ${accent ? 'bg-violet-50 border-violet-100' : 'bg-white border-slate-100 shadow-sm'} text-right`}>
      <p className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
      <p className={`text-2xl sm:text-4xl font-black ${accent ? 'text-violet-700' : 'text-slate-900'}`}>{value}</p>
    </div>
  );
}

function MetaBadge({ icon: Icon, label, value }) {
  return (
    <div className="flex flex-col gap-3 p-5 bg-slate-50 border border-slate-100 rounded-3xl transition-colors hover:bg-white hover:border-violet-100 text-right">
      <div className="flex items-center gap-2 justify-start flex-row-reverse">
        <Icon size={16} className="text-slate-400 shrink-0" />
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
      </div>
      <p className="text-sm sm:text-base font-bold text-slate-800 leading-tight">{value}</p>
    </div>
  );
}

function InfoBox({ icon: Icon, title, children, bg, textColor, borderColor }) {
  return (
    <div className={`p-8 rounded-[2rem] border-2 ${bg} ${borderColor} text-right`}>
      <div className={`flex items-center gap-3 text-sm sm:text-base font-black uppercase tracking-wide ${textColor} justify-start flex-row-reverse`}>
        <Icon size={20} />
        {title}
      </div>
      <div className="mt-2 text-slate-800 font-medium">
        {children}
      </div>
    </div>
  );
}

function OpportunityCard({ company, onBuildPlan }) {
  return (
    <div className="group bg-white rounded-[2rem] border border-slate-200 p-8 flex flex-col hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-100/50 transition-all duration-300 text-right">
      <div className="flex items-start justify-between mb-8 flex-row-reverse">
        <div className="w-14 h-14 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center group-hover:bg-violet-600 group-hover:border-violet-600 transition-all duration-500 group-hover:rotate-3 shadow-sm">
          <company.icon size={28} className="text-violet-600 group-hover:text-white transition-colors" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-100 group-hover:text-violet-600 group-hover:border-violet-200 transition-colors">
          {company.type}
        </span>
      </div>

      <h4 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-violet-700 transition-colors">
        {company.name}
      </h4>
      <p className="text-sm sm:text-base text-slate-600 font-bold leading-relaxed mb-6 flex-1">
        {company.idea}
      </p>

      <div className="space-y-2.5 mb-8">
        {company.solves.map((s, i) => (
          <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 justify-start flex-row-reverse">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 group-hover:scale-150 transition-transform"></div>
            {s}
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-slate-100">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">نموذج الربح المتوقع</p>
        <p className="text-sm sm:text-base font-black text-slate-800 mb-6">{company.model}</p>
        <button
          onClick={() => onBuildPlan?.(company.name)}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-black text-white bg-slate-950 hover:bg-violet-600 shadow-lg hover:shadow-violet-200 transition-all duration-300 flex-row-reverse"
        >
          <span>إطلاق مشروع بهذه الفرصة</span>
          <ArrowRight size={16} className="group-hover:translate-x-[-4px] transition-transform" />
        </button>
      </div>
    </div>
  );
}
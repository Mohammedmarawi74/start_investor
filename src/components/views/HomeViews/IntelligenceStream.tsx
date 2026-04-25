
import React from 'react';
import { 
  AlertCircle, 
  ArrowLeft, 
  ArrowRight, 
  Zap, 
  Radio, 
  Network, 
  Activity as PulseIcon 
} from 'lucide-react';
import { MinimalistCard } from '../../features/discovery/ProblemOpportunityEngine/MinimalistCard';

/* ═══════════════════════════════════════════════════════════════
   INTELLIGENCE STREAM — "Live Gap Radar Feed"
   ═══════════════════════════════════════════════════════════════ */


/* Advanced Heatmap Bar */
const HeatmapBar = ({ label, percentage, color, trend }: any) => (
  <div className="group/bar space-y-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
         <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
         <span className="text-[10px] font-black text-slate-100">{label}</span>
      </div>
      <div className="flex items-center gap-2">
         <span className={`text-[9px] font-black ${trend > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
         </span>
         <span className="text-[10px] font-black text-white">{percentage}%</span>
      </div>
    </div>
    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
      <div 
        className={`absolute inset-y-0 right-0 rounded-full ${color} transition-all duration-1000 group-hover/bar:brightness-110`} 
        style={{ width: `${percentage}%` }} 
      />
    </div>
  </div>
);

export const IntelligenceStream = ({ setActiveTab }: any) => {
  const streamItems = [
    { 
      title: 'محرك التوحيد السيادي للبيانات الصحية', 
      country: 'السعودية', 
      flag: '🇸🇦', 
      gapType: 'فجوة هيكلية',
      urgency: 'فائقة',
      description: 'تشرذم البيانات بين 200+ جهة طبية يؤدي لتكرار الفحوصات بنسبة 35% وفقدان الدقة التشخيصية.',
      painScore: 9, 
      painColor: 'bg-rose-500', 
      painBg: 'bg-rose-50', 
      painText: 'text-rose-600', 
      painBorder: 'border-rose-100', 
      painDot: 'bg-rose-500', 
      profitPotential: '$850M+', 
      competition: 'منخفضة جداً' 
    },
    { 
      title: 'سلاسل التوريد الخوارزمية للأمن الغذائي', 
      country: 'الإمارات', 
      flag: '🇦🇪', 
      gapType: 'فجوة لوجستية',
      urgency: 'عالية',
      description: 'هدر بقيمة 4 مليار درهم سنوياً بسبب غياب التنبؤ اللحظي بالطلب وتأخر سلاسل الإمداد الذكية.',
      painScore: 7, 
      painColor: 'bg-amber-500', 
      painBg: 'bg-amber-50', 
      painText: 'text-amber-600', 
      painBorder: 'border-amber-100', 
      painDot: 'bg-amber-500', 
      profitPotential: '$2.1B', 
      competition: 'متوسطة' 
    },
    { 
      title: 'جسر السيولة اللحظية للتجارة الإقليمية', 
      country: 'مصر', 
      flag: '🇪🇬', 
      gapType: 'فجوة تقنية',
      urgency: 'حرجة',
      description: 'دورة رأس مال متوقفة لـ 15 يوماً في التحويلات التقليدية تعطل نمو 40 مليون مستخدم نشط.',
      painScore: 8, 
      painColor: 'bg-rose-500', 
      painBg: 'bg-rose-50', 
      painText: 'text-rose-600', 
      painBorder: 'border-rose-100', 
      painDot: 'bg-rose-500', 
      profitPotential: '$450M+', 
      competition: 'مرتفعة' 
    },
    { 
      title: 'سلاسل القيمة للإنتاج الزراعي التصديري', 
      country: 'سوريا', 
      flag: '🇸🇾', 
      gapType: 'فجوة إنتاجية',
      urgency: 'عالية',
      description: 'فقدان القيمة المضافة بنسبة 60% بسبب غياب الربط الرقمي المباشر بين صغار المزارعين ومنصات التصدير العالمية.',
      painScore: 6, 
      painColor: 'bg-emerald-500', 
      painBg: 'bg-emerald-50', 
      painText: 'text-emerald-600', 
      painBorder: 'border-emerald-100', 
      painDot: 'bg-emerald-500', 
      profitPotential: '$650M+', 
      competition: 'منخفضة جداً' 
    },
  ];

  const heatmapData = [
    { label: 'الصحة (HealthTech)', percentage: 94, color: 'bg-rose-500', trend: +14 },
    { label: 'المالية (FinTech)', percentage: 89, color: 'bg-indigo-500', trend: +11 },
    { label: 'التجارة الإلكترونية', percentage: 82, color: 'bg-sky-500', trend: +16 },
    { label: 'الخدمات اللوجستية', percentage: 76, color: 'bg-orange-500', trend: +9 },
    { label: 'الطاقة والاستدامة', percentage: 71, color: 'bg-teal-500', trend: +18 },
    { label: 'التعليم والتدريب', percentage: 65, color: 'bg-blue-500', trend: +7 },
    { label: 'الصناعة والإنتاج', percentage: 58, color: 'bg-amber-500', trend: +4 },
    { label: 'العقارات والإنشاءات', percentage: 52, color: 'bg-slate-500', trend: -3 },
    { label: 'التكنولوجيا', percentage: 45, color: 'bg-violet-500', trend: +21 },
    { label: 'الزراعة', percentage: 38, color: 'bg-emerald-500', trend: +5 },
  ];

  return (
    <section className="bg-white border-y border-slate-100 py-12 sm:py-16 lg:py-24 px-5 sm:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-10 mb-8 sm:mb-14 border-b border-slate-50 pb-6 sm:pb-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-800 shadow-xl">
              <Radio size={14} className="animate-pulse text-indigo-400" /> مركز البث الاستخباراتي
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
               رادار الفجوات القطاعية
            </h2>
            <p className="text-slate-400 font-bold text-[13px] sm:text-sm lg:text-base max-w-xl leading-relaxed">
               تابع توفر الفرص الاستثمارية وحجم الطلب عليها عالمياً، مع تحليلات وتحديثات حية تصلك من قلب الأسواق.
            </p>
          </div>
          
        </div>

        {/* Content: Cards + Heatmap */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex-1 flex flex-col gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {streamItems.map((item, i) => (
                <MinimalistCard 
                  key={i} 
                  problem={{
                    title: item.title,
                    desc: item.description,
                    sectorName: item.gapType,
                    countries: [item.country === 'السعودية' ? 'SA' : item.country === 'الإمارات' ? 'AE' : item.country === 'مصر' ? 'EG' : 'SY'],
                    pain: item.painScore,
                    money: item.profitPotential.replace('$', '').replace('M+', 'M'),
                    b2x: item.competition
                  }} 
                  onNavigate={() => setActiveTab('problem-engine')}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => setActiveTab('problem-engine')} 
                className="group relative flex items-center gap-3 px-10 py-5 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)] hover:shadow-xl shrink-0 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">عرض الرادار الكامل</span>
                <ArrowLeft size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform relative z-10" />
              </button>
            </div>
          </div>

          {/* Heatmap Sidebar (Expanded) */}
          <div className="lg:w-80 shrink-0">
            <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-7 shadow-2xl relative overflow-hidden flex flex-col">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[80px] rounded-full" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
                    <h4 className="text-[11px] font-black text-white uppercase tracking-widest">مؤشر الحرارة الحي</h4>
                  </div>
                  <Zap size={16} className="text-indigo-400" />
                </div>

                <div className="space-y-6 flex-1">
                  {heatmapData.map((item, i) => (
                    <HeatmapBar key={i} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

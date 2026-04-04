import React from 'react';
import * as Lucide from 'lucide-react';
import * as Charts from '../components/AnalysisUI';

/* =========================
   Shared UI System
========================= */

const GlassCard = ({ children, className = "" }: any) => (
  <div
    className={`
      bg-white/70 backdrop-blur-xl
      border border-white/40
      shadow-lg shadow-slate-200/40
      rounded-2xl p-6
      transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/40
      ${className}
    `}
  >
    {children}
  </div>
);

/* =========================
   Main Component
========================= */

export const FinancialSimulatorTab: React.FC<{ analysis: any }> = ({ analysis }) => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">

      {/* ================= KEY METRICS (Executive View) ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { 
            label: "سرعة نمو الإيرادات", 
            value: "نمو متسارع", 
            desc: "مدى سرعة تدفق المال",
            icon: Lucide.Zap, 
            color: "text-amber-600 bg-amber-50" 
          },
          { 
            label: "كفاءة هوامش الربح", 
            value: "ممتازة", 
            desc: "الربح المتبقي بعد التكاليف",
            icon: Lucide.Target, 
            color: "text-emerald-600 bg-emerald-50" 
          },
          { 
            label: "استقرار العمليات", 
            value: "منطقة آمنة", 
            desc: "ثبات التكاليف الشهرية",
            icon: Lucide.ShieldCheck, 
            color: "text-indigo-600 bg-indigo-50" 
          },
          { 
            label: "جاهزية التوسع", 
            value: "المرحلة الأولى", 
            desc: "قدرة المشروع على النمو",
            icon: Lucide.Rocket, 
            color: "text-rose-600 bg-rose-50" 
          },
        ].map((stat, i) => (
          <GlassCard key={i} className="group cursor-default">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon size={18} className="group-hover:rotate-12 transition" />
              </div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center leading-none">
                تحليل حي
              </span>
            </div>

            <p className="text-xs font-bold text-slate-400 mb-1 leading-none">{stat.label}</p>
            <p className="text-lg font-black text-slate-900 leading-none mb-2">{stat.value}</p>
            <p className="text-[10px] text-slate-400 italic leading-none">{stat.desc}</p>
          </GlassCard>
        ))}
      </div>

      {/* ================= SIMULATOR (Sensitivity Analysis) ================= */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-indigo-600 rounded-full" />
          <h3 className="text-lg font-black text-slate-900 leading-none">
            محاكي الحساسية المالية (ماذا لو؟)
          </h3>
        </div>
        <Charts.SensitivitySimulator
          initialCac={analysis.sensitivityAnalysis?.baseCac || 100}
          initialChurn={analysis.sensitivityAnalysis?.baseChurn || 5}
        />
      </div>

      {/* ================= UNIT ECONOMICS (Profit per Customer) ================= */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-emerald-600 rounded-full" />
            <h3 className="text-lg font-black text-slate-900 leading-none">
              تحليل اقتصاديات الوحدة (Unit Economics)
            </h3>
          </div>
          <span className="text-[10px] font-bold text-slate-400">ربحية كل عميل واحد</span>
        </div>

        <Charts.FinancialsGrid financials={analysis.financials} />
      </div>

      {/* ================= REFINED ANALYSIS CARDS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* RUNWAY ANALYSIS */}
        <GlassCard className="relative overflow-hidden group">
          <Lucide.Timer
            size={120}
            className="absolute -bottom-6 -right-6 text-slate-50 group-hover:text-amber-50 group-hover:scale-110 transition-all duration-700"
          />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-inner">
                <Lucide.Clock size={22} />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-900 leading-none mb-1">
                  فترة الصمود (Runway)
                </h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Financial Endurance</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-600 leading-relaxed italic" dir="rtl">
                {`"بناءً على نفقاتك الشهرية التي تبلغ `}
                <span className="text-slate-900">$ {analysis.financials?.monthlyFixed || '---'}</span>
                {` ، مشروعك يمتلك مخزوناً مالياً يكفيه للصمود لمدة `}
                <span className="text-indigo-600 underline font-black">{analysis.financials?.runway || '---'}</span>
                {` دون الحاجة لمدخول إضافي."`}
              </p>
              <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-xl flex items-start gap-4" dir="rtl">
                <Lucide.Info size={16} className="text-amber-600 mt-0.5" />
                <p className="text-[11px] font-bold text-amber-800 leading-relaxed">
                  نصيحة: ابدأ في البحث عن استثمار جديد قبل أن تنقضي نصف هذه الفترة لضمان استمرارية العمليات.
                </p>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* MARGIN OPTIMIZATION */}
        <div className="relative rounded-[2.5rem] p-8 lg:p-10 text-white bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden shadow-xl group">
          <Lucide.TrendingUp
            size={150}
            className="absolute -bottom-10 -right-10 text-white/5 opacity-40 group-hover:-translate-y-5 transition-transform duration-1000"
          />

          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="space-y-2 text-right">
                <p className="text-xs font-black uppercase text-indigo-200 tracking-[0.4em]">Maximization</p>
                <h4 className="text-2xl font-black leading-tight tracking-tighter">
                  خطة تحسين الأرباح
                </h4>
              </div>

              <div className="space-y-4 text-right" dir="rtl">
                {[
                  { text: 'تقليل معدل انسحاب العملاء (Retention)', icon: Lucide.Users },
                  { text: 'رفع سلة المشتريات للعميل الواحد (Upselling)', icon: Lucide.ShoppingBag },
                  { text: 'أتمتة العمليات لتقليل التكاليف التشغيلية', icon: Lucide.Settings },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group/li">
                    <div className="w-2 h-2 bg-indigo-300 rounded-full group-hover/li:scale-150 transition-all shadow-glow-indigo"></div>
                    <span className="text-sm font-bold text-indigo-100 group-hover:text-white transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 text-[10px] font-black text-indigo-200 uppercase tracking-widest italic opacity-60 text-right">
              توصيات مبنية على الذكاء المالي للمنصة
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
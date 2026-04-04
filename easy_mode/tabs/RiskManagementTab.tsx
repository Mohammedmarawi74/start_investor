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
      rounded-[2rem] p-6 lg:p-10
      transition-all duration-300 hover:shadow-xl hover:shadow-rose-100/40
      ${className}
    `}
  >
    {children}
  </div>
);

const SectionTitle = ({ badge, title, desc }: any) => (
  <div className="mb-10 text-right" dir="rtl">
    {badge && (
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-50 text-rose-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-100 mb-4">
        {badge}
      </div>
    )}
    <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
      {title}
    </h3>
    {desc && (
      <p className="text-slate-500 text-sm font-bold max-w-2xl leading-relaxed italic border-r-2 border-rose-100 pr-4">
        {desc}
      </p>
    )}
  </div>
);

/* =========================
   Main Component
========================= */

export const RiskManagementTab: React.FC<{ analysis: any }> = ({ analysis }) => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-700" dir="rtl">

      {/* 1. OVERVIEW & INDEX */}
      <RiskOverviewHeader />

      {/* 2. RISK MATRIX SYSTEM */}
      <RiskMatrixSection risks={analysis.risks} />

      {/* 3. MITIGATION & PROTOCOLS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <ObstaclesCard obstacles={analysis.criticalObstacles} />
        <CrisisProtocolCard />
      </div>

    </div>
  );
};

/* =========================
   Overview Header
========================= */

const RiskOverviewHeader: React.FC = () => {
  return (
    <GlassCard className="relative overflow-hidden group">
      {/* Visual Decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-rose-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 justify-between items-start lg:items-center">
        
        <div className="space-y-4 max-w-2xl">
          <SectionTitle
            badge="Strategic Defense"
            title="منظومة الدفاع والتحصين"
            desc="إدارة المخاطر لا تعني الخوف، بل تعني الاستعداد بـ 'خطة بديلة' لكل عقبة محتملة لضمان استمرار التنفيذ."
          />
        </div>

        <div className="w-full lg:w-48 bg-slate-900 p-8 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden group/index">
           <div className="absolute top-0 right-0 w-full h-1 bg-amber-500" />
           <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-3">مؤشر الخطورة العام</div>
           <div className="text-4xl font-black text-white tabular-nums tracking-tighter leading-none mb-4">
              7.2 <span className="text-xs opacity-40">/10</span>
           </div>
           
           <div className="h-1 bg-white/5 rounded-full relative overflow-hidden mb-3">
              <div className="absolute inset-y-0 right-0 bg-amber-500 w-[72%] transition-all duration-1000 delay-500 shadow-glow-amber"></div>
           </div>
           
           <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest">تهديد متوسط</div>
           <p className="text-[9px] text-slate-500 mt-2 italic leading-tight">يحتاج لبعض الحذر في التوسع</p>
        </div>
      </div>
    </GlassCard>
  );
};

/* =========================
   Risk Matrix
========================= */

const RiskMatrixSection: React.FC<{ risks: any }> = ({ risks }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-1 h-8 bg-rose-500 rounded-full" />
        <div>
            <h4 className="text-xl font-black text-slate-900 tracking-tight leading-none mb-1">
                تحليل نواقل التهديد (Threat Vectors)
            </h4>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Mapping Possible Failures</span>
        </div>
      </div>

      <Charts.RiskMatrix risks={risks} />
    </div>
  );
};

/* =========================
   Obstacles Card
========================= */

const ObstaclesCard: React.FC<{ obstacles: any }> = ({ obstacles }) => {
  return (
    <div className="lg:col-span-8 relative rounded-[3rem] p-10 lg:p-14 text-white bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden shadow-2xl group border-r-8 border-indigo-600">

      <Lucide.ShieldAlert
        size={220}
        className="absolute -bottom-20 -left-20 text-white/5 group-hover:rotate-6 transition-transform duration-[2000ms]"
      />

      <div className="relative z-10 space-y-10">
        <div className="space-y-3">
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.5em]">Shield Protocols</p>
          <h4 className="text-3xl font-black tracking-tighter leading-tight">
            أكثر المعوقات التشغيلية حرجاً
          </h4>
          <p className="text-sm text-slate-400 max-w-xl font-bold leading-relaxed italic border-r-2 border-indigo-600/30 pr-4 mt-2">
            "هذه النقاط تمثل أضعف حلقات مشروعك حالياً؛ تعامل معها فوراً لضمان عدم تعثر نموذج العمل."
          </p>
        </div>

        <Charts.ObstaclesGrid obstacles={obstacles} />
      </div>
    </div>
  );
};

/* =========================
   Crisis Protocol
========================= */

const CrisisProtocolCard: React.FC = () => {
  return (
    <GlassCard className="lg:col-span-4 relative overflow-hidden group/cp">
      <div className="absolute top-0 right-0 left-0 h-[6px] bg-rose-500" />
      
      <div className="flex flex-col h-full space-y-8">
        <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center shadow-inner group-hover/cp:rotate-12 transition-transform">
                <Lucide.Crosshair size={28} />
            </div>
            <h4 className="text-2xl font-black text-slate-900 tracking-tighter leading-none">
                بروتوكول الطوارئ
            </h4>
        </div>

        <div className="flex-1 space-y-4">
          {[
            { label: "Redline Action", value: "إيقاف المصاريف التشغيلية (Stop Burn)", icon: Lucide.Flame },
            { label: "Pivot Path", value: "تحويل الموارد نحو عملاء B2B", icon: Lucide.Repeat },
            { label: "Exit Strategy", value: "تسييل الأصول الجوهرية (Liquidate)", icon: Lucide.LogOut },
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-300 group/step"
            >
              <div className="flex items-center gap-2 mb-2">
                 <step.icon size={14} className="text-rose-500 opacity-50 group-hover/step:opacity-100" />
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {step.label}
                 </p>
              </div>
              <p className="text-[13px] font-black text-slate-800 leading-tight">
                {step.value}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest italic flex items-center justify-between">
          <span>System Health: Armed</span>
          <Lucide.ShieldCheck size={14} />
        </div>
      </div>
    </GlassCard>
  );
};
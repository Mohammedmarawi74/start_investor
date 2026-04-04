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
      transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/40
      ${className}
    `}
  >
    {children}
  </div>
);

const SectionTitle = ({ badge, title, desc }: any) => (
  <div className="mb-10 text-right" dir="rtl">
    {badge && (
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 mb-4">
        {badge}
      </div>
    )}
    <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
      {title}
    </h3>
    {desc && (
      <p className="text-slate-500 text-sm font-bold max-w-2xl leading-relaxed italic border-r-2 border-emerald-100 pr-4">
        {desc}
      </p>
    )}
  </div>
);

/* =========================
   Main Component
========================= */

export const RoadMapTab: React.FC<{ analysis: any }> = ({ analysis }) => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-700" dir="rtl">

      {/* 1. OPERATIONS OVERVIEW */}
      <RoadMapOverviewHeader analysis={analysis} />

      {/* 2. GANTT CHART SYSTEM */}
      <div className="relative group/gantt">
         <div className="absolute -inset-4 bg-emerald-500/5 rounded-[5rem] blur-3xl opacity-0 group-hover/gantt:opacity-100 transition-opacity"></div>
         <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-8 bg-emerald-500 rounded-full" />
            <h4 className="text-xl font-black text-slate-900 leading-none">مخطط التسلسل الزمني (Critical Path)</h4>
         </div>
         <Charts.SmartGanttChart tasks={analysis.ganttTasks} />
      </div>

      {/* 3. ACTIVATION & TIMELINE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <ActivationMatrix analysis={analysis} />
        <PhaseTimeline actionPlan={analysis.actionPlan} />
      </div>

    </div>
  );
};

/* =========================
   Overview Header
========================= */

const RoadMapOverviewHeader: React.FC<{ analysis: any }> = ({ analysis }) => {
  return (
    <div className="bg-slate-950 rounded-[4rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl border-l-[15px] border-l-emerald-600 group">
       {/* Visual Background */}
       <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none">
          <svg width="100%" height="100%">
             <pattern id="road-dots-new" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
             </pattern>
             <rect width="100%" height="100%" fill="url(#road-dots-new)" />
          </svg>
       </div>

       <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div className="space-y-6 flex-1 text-right">
             <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-[0.4em] border border-emerald-500/20">
                Operational Excellence Framework
             </div>
             <h3 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
                خطة الإطلاق والنمو (Launch Engine)
             </h3>
             <p className="text-slate-400 text-sm font-bold max-w-xl leading-relaxed italic border-r-2 border-emerald-600/30 pr-4">
                "تحويل الأهداف الكبيرة إلى 'مهام صغيرة' هو سر النجاح. نركز هنا على الوصول لأول نقطة ربح في أقل من <span className="text-emerald-400 underline">{analysis.timeToRevenue || "14 يوماً"}</span>."
             </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 w-full lg:w-auto">
             <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] text-center min-w-[180px] hover:bg-white/10 transition-all group/stat">
                <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">الوقت للربح</div>
                <div className="text-3xl font-black tabular-nums group-hover:scale-110 transition-transform">{analysis.timeToRevenue || "14 يوم"}</div>
                <div className="mt-2 text-[9px] font-black text-white/30 uppercase">To Market Velocity</div>
             </div>
             <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] text-center min-w-[180px] hover:bg-white/10 transition-all group/stat">
                <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2">جودة التنفيذ</div>
                <div className="text-3xl font-black tabular-nums group-hover:scale-110 transition-transform">9.4/10</div>
                <div className="mt-2 text-[9px] font-black text-white/30 uppercase">Operational Health</div>
             </div>
          </div>
       </div>
    </div>
  );
};

/* =========================
   Activation Matrix
========================= */

const ActivationMatrix: React.FC<{ analysis: any }> = ({ analysis }) => {
  return (
    <div className="lg:col-span-4 space-y-8">
       <GlassCard className="space-y-10 sticky top-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-1 bg-indigo-600 shadow-glow-indigo"></div>
          
          <div className="space-y-4">
             <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-[1.5rem] flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform">
                <Lucide.Zap size={28} />
             </div>
             <h4 className="text-2xl font-black text-slate-900 tracking-tighter">مصفوفة التفعيل الفوري</h4>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Sync Project Across Tools</p>
          </div>
          
          <div className="space-y-4">
             <button 
                onClick={() => window.open(analysis.activationPlan?.notionExportUrl)} 
                className="w-full flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-slate-900 hover:text-white group/btn transition-all text-[12px] font-black shadow-inner"
             >
                <div className="flex items-center gap-4">
                   <Lucide.FileText size={22} className="text-slate-400 group-hover/btn:text-indigo-400" />
                   <span>تصدير إلى Notion</span>
                </div>
                <Lucide.ArrowUpRight size={18} className="opacity-0 group-hover/btn:opacity-100 transition-all" />
             </button>
             
             <button 
                onClick={() => window.open(analysis.activationPlan?.trelloExportUrl)} 
                className="w-full flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-slate-900 hover:text-white group/btn transition-all text-[12px] font-black shadow-inner"
             >
                <div className="flex items-center gap-4">
                   <Lucide.LayoutDashboard size={22} className="text-slate-400 group-hover/btn:text-blue-400" />
                   <span>فريق العمل (Trello)</span>
                </div>
                <Lucide.ArrowUpRight size={18} className="opacity-0 group-hover/btn:opacity-100 transition-all" />
             </button>
          </div>
          
          <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-[2rem] flex items-start gap-4">
             <Lucide.Info size={20} className="text-indigo-600 shrink-0 mt-1" />
             <p className="text-[11px] font-bold text-indigo-800 leading-relaxed italic">
                "نصيحة المنظم: استخدم Notion لكتابة الاستراتيجية، وخصص Trello لإدارة المهام اليومية مع فريقك لضمان عدم ضياع التفاصيل."
             </p>
          </div>
       </GlassCard>
    </div>
  );
};

/* =========================
   Phase Timeline
========================= */

const PhaseTimeline: React.FC<{ actionPlan: any }> = ({ actionPlan }) => {
  return (
    <div className="lg:col-span-8">
      <GlassCard className="relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2" />
         
         <div className="flex items-center gap-6 mb-16 px-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform">
               <Lucide.CalendarCheck size={28} />
            </div>
            <div>
               <h4 className="text-3xl font-black text-slate-900 tracking-tighter leading-none mb-2">التسلسل الزمني للمراحل</h4>
               <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none">Phased Execution Matrix</span>
            </div>
         </div>
         
         <Charts.ActionTimeline actionPlan={actionPlan} />
         
         <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between text-[11px] font-black text-slate-400 uppercase tracking-widest italic">
            <span>Project Readiness: Optimal</span>
            <Lucide.Flame size={14} className="text-orange-500 animate-pulse" />
         </div>
      </GlassCard>
    </div>
  );
};
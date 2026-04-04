import React from 'react';
import * as Lucide from 'lucide-react';
import * as Charts from '../components/AnalysisUI';

export const RoadMapTab: React.FC<{ analysis: any }> = ({ analysis }) => (
  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
     
     {/* 1. OPERATIONS MASTER OVERVIEW */}
     <div className="bg-slate-950 rounded-[4rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl">
        {/* Abstract Particle Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none">
           <svg width="100%" height="100%">
              <pattern id="road-dots" width="40" height="40" patternUnits="userSpaceOnUse">
                 <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#road-dots)" />
           </svg>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12">
           <div className="space-y-6 flex-1">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-[0.4em] border border-emerald-500/20">
                 Operational Excellence Framework
              </div>
              <h3 className="text-3xl lg:text-5xl font-black tracking-tighter leading-tight" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                 مخطط التسلسل الإجرائي (Launch Sequence)
              </h3>
              <p className="text-slate-400 text-sm font-bold max-w-xl leading-relaxed">
                 تحديد المسار الحرج يضمن عدم إهدار الموارد في مهام ثانوية. نحن نركز هنا على "الدفع نحو السوق" (Market Push) في أقل من 60 يوماً.
              </p>
           </div>
           
           <div className="flex flex-col md:flex-row gap-6 w-full lg:w-auto">
              <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] text-center min-w-[200px] hover:bg-white/10 transition-all">
                 <div className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-2">Revenue Velocity</div>
                 <div className="text-3xl font-black tabular-nums">{analysis.timeToRevenue || "14 Days"}</div>
                 <div className="mt-2 text-[9px] font-black text-white/30 uppercase">To Market Entry</div>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] text-center min-w-[200px] hover:bg-white/10 transition-all">
                 <div className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mb-2">Execution Health</div>
                 <div className="text-3xl font-black tabular-nums">9.4/10</div>
                 <div className="mt-2 text-[9px] font-black text-white/30 uppercase">Consistency Index</div>
              </div>
           </div>
        </div>
     </div>

     {/* 2. GANTT & CRITICAL PATH */}
     <div className="relative group">
        <div className="absolute -inset-4 bg-emerald-500/5 rounded-[5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Charts.SmartGanttChart tasks={analysis.ganttTasks} />
     </div>

     {/* 3. ACTIVATION & TIMELINE GRID */}
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Activation Matrix Side (Sticky Impact) */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-white border border-slate-100 rounded-[3.5rem] p-10 shadow-xl shadow-slate-200/40 relative overflow-hidden h-fit lg:sticky lg:top-24">
              <div className="absolute top-0 right-0 w-full h-[6px] bg-indigo-600"></div>
              <div className="space-y-10">
                 <div className="space-y-4">
                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-[1.5rem] flex items-center justify-center shadow-inner">
                       <Lucide.Zap size={28} />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>مصفوفة التفعيل الفوري</h4>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.25em]">Cross-Platform Sync Engine</p>
                 </div>
                 
                 <div className="space-y-4">
                    <button 
                       onClick={() => window.open(analysis.activationPlan.notionExportUrl)} 
                       className="w-full flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-slate-900 hover:text-white group/btn transition-all text-[12px] font-black shadow-inner"
                    >
                       <div className="flex items-center gap-4">
                          <Lucide.FileText size={22} className="text-slate-400 group-hover/btn:text-indigo-400" />
                          <span>Export Notion Plan</span>
                       </div>
                       <Lucide.ArrowUpRight size={18} className="opacity-0 group-hover/btn:opacity-100 transition-all" />
                    </button>
                    
                    <button 
                       onClick={() => window.open(analysis.activationPlan.trelloExportUrl)} 
                       className="w-full flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-slate-900 hover:text-white group/btn transition-all text-[12px] font-black shadow-inner"
                    >
                       <div className="flex items-center gap-4">
                          <Lucide.LayoutDashboard size={22} className="text-slate-400 group-hover/btn:text-blue-400" />
                          <span>Agile Trello Board</span>
                       </div>
                       <Lucide.ArrowUpRight size={18} className="opacity-0 group-hover/btn:opacity-100 transition-all" />
                    </button>
                 </div>
                 
                 <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-[2rem] flex items-start gap-4">
                    <Lucide.Info size={20} className="text-indigo-600 shrink-0 mt-1" />
                    <p className="text-[12px] font-bold text-indigo-800 leading-relaxed italic" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                       "نصيحة المنظم: ابدأ بتصدير الخطة إلى Notion لمتابعة التفاصيل، وخصص Trello للمهام اليومية للفريق."
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* Action Phase Timeline */}
        <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[4rem] p-10 lg:p-14 shadow-2xl shadow-slate-200/40">
           <div className="flex items-center gap-6 mb-16">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner">
                 <Lucide.CalendarCheck size={28} />
              </div>
              <div>
                 <h4 className="text-2xl font-black text-slate-900 tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>التسلسل الهرمي للمراحل (Phases)</h4>
                 <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Procedural Execution Timeline</p>
              </div>
           </div>
           <Charts.ActionTimeline actionPlan={analysis.actionPlan} />
        </div>

     </div>

  </div>
);

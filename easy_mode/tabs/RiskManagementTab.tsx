import React from 'react';
import * as Lucide from 'lucide-react';
import * as Charts from '../components/AnalysisUI';

export const RiskManagementTab: React.FC<{ analysis: any }> = ({ analysis }) => (
  <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-1000">
     
     {/* 1. STRATEGIC DEFENSE HEADER */}
     <div className="flex flex-col lg:flex-row gap-10 items-end justify-between bg-white border border-slate-100 rounded-[4rem] p-12 lg:p-16 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-[4rem] opacity-50 group-hover:scale-125 transition-transform duration-1000"></div>
        <div className="relative z-10 space-y-6">
           <div className="inline-flex items-center gap-3 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em] border border-rose-100">
              <Lucide.ShieldOff size={14} className="animate-pulse" />
              Strategic Vulnerability Radar
           </div>
           <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
              منظومة الدفاع والتحصين
           </h3>
           <p className="text-slate-400 text-sm font-bold max-w-xl leading-relaxed italic">
              "الخطر ليس في وجود العقبات، بل في عدم وجود 'خطة قتل' (Kill-switch) أو مخرج طوارئ (Plan B) جاهز لكل سيناريو."
           </p>
        </div>
        <div className="relative z-10 w-full lg:w-48 bg-slate-900 p-8 rounded-[2.5rem] text-center shadow-2xl shadow-slate-200">
           <div className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-3">Overall Risk Index</div>
           <div className="text-4xl font-black text-white tabular-nums tracking-tighter">7.2 <span className="text-[10px] opacity-40">/10</span></div>
           <div className="h-1 bg-white/5 rounded-full mt-4 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-amber-500 w-[72%]"></div>
           </div>
           <div className="mt-2 text-[9px] font-black text-amber-500 uppercase">MODERATE THREAT</div>
        </div>
     </div>

     {/* 2. MAIN RISK MATRIX */}
     <div className="space-y-8">
        <div className="flex items-center gap-6 pl-6 border-l-4 border-rose-500">
           <h4 className="text-xl font-black text-slate-800 tracking-tighter uppercase" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>تحليل النواقل التهديدية (Threat Vectors)</h4>
           <div className="h-px flex-1 bg-slate-100"></div>
        </div>
        <Charts.RiskMatrix risks={analysis.risks} />
     </div>

     {/* 3. CRITICAL OBSTACLES & MITIGATION GRID */}
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-slate-900 rounded-[4rem] p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl group">
           <Lucide.ShieldAlert size={200} className="absolute -bottom-20 -right-20 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-[2000ms]" />
           <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                 <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.6em]">Shield Protocols</div>
                 <h4 className="text-3xl font-black tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>أكثر المعوقات التشغيلية حرجاً</h4>
              </div>
              <Charts.ObstaclesGrid obstacles={analysis.criticalObstacles} />
           </div>
        </div>

        <div className="lg:col-span-4 bg-white border border-slate-100 rounded-[4rem] p-12 shadow-xl shadow-slate-200/40 relative group overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-[6px] bg-rose-500"></div>
           <div className="space-y-8 h-full flex flex-col">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                 <Lucide.Crosshair size={28} />
              </div>
              <div className="flex-1 space-y-6">
                 <h4 className="text-xl font-black text-slate-900 tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>بروتوكول الاستجابة للأزمات</h4>
                 <div className="space-y-4">
                    {[
                      { l: "Redline Action", v: "تجميد الصرف الفوري (Freeze Opex)" },
                      { l: "Pivot Point", v: "تحويل النموذج إلى B2B المباشر" },
                      { l: "Exit Velocity", v: "تسييل الأصول الرقمية المتبقية" }
                    ].map((step, i) => (
                       <div key={i} className="p-5 bg-slate-50 border border-slate-100 rounded-2xl group/step">
                          <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 group-hover/step:text-rose-500 transition-colors">{step.l}</div>
                          <div className="text-[13px] font-black text-slate-800" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{step.v}</div>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="pt-6 border-t border-slate-50 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                 System Integrity Verified
              </div>
           </div>
        </div>
     </div>

  </div>
);

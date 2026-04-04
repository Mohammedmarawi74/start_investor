import React from 'react';
import * as Lucide from 'lucide-react';
import * as Charts from '../components/AnalysisUI';

export const StrategicPulseTab: React.FC<{ analysis: any }> = ({ analysis }) => (
  <div className="space-y-10 animate-in fade-in zoom-in duration-[1200ms]">
     
     {/* 1. EXECUTIVE CAPABILITY OVERVIEW */}
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-[4rem] p-10 lg:p-14 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-bl-[5rem] opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>
           <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
              <div className="space-y-4">
                 <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-600/5 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[0.4em] border border-indigo-100">
                    <Lucide.Radar size={14} className="animate-pulse" />
                    Multidimensional Capability Gap
                 </div>
                 <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}> تحليل البصمة الاستراتيجية</h3>
              </div>
              <div className="bg-slate-50 border border-slate-100 px-8 py-5 rounded-[2.5rem] text-center shadow-inner group/score">
                 <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Maturity Index</div>
                 <div className="text-3xl font-black text-slate-900 tabular-nums">{(analysis.score * 0.85).toFixed(1)}%</div>
              </div>
           </div>
           
           <div className="flex justify-center p-6 bg-slate-50/50 rounded-[3.5rem] border border-slate-50 shadow-inner">
              <Charts.StrategicRadar 
                values={[analysis.radarData.tech, analysis.radarData.market, analysis.radarData.team, analysis.radarData.financial, analysis.radarData.operations]} 
                labels={['التقنية','السوق','الفريق','المالية','العمليات']} 
              />
           </div>
        </div>

        <div className="lg:col-span-1 space-y-8 flex flex-col">
           <Charts.OpportunityCostCard data={analysis.opportunityCost} />
           <div className="flex-1 bg-indigo-600 rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-indigo-100/50 group">
              <Lucide.Lightbulb size={200} className="absolute -bottom-20 -right-20 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-[2000ms]" />
              <div className="relative z-10 space-y-6">
                 <div className="text-[11px] font-black text-indigo-200 uppercase tracking-[0.5em]">The Strategic Alpha</div>
                 <h4 className="text-2xl font-black leading-tight tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>أكبر ميزة تنافسية خفية لمشروعك؟</h4>
                 <p className="text-sm font-bold opacity-80 leading-relaxed italic" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                    "رادرك يشير إلى تفوق حاد في جانب العمليات؛ هذا يعني أن سرعتك في التنفيذ ستغطي على نقص التمويل الأولي."
                 </p>
              </div>
           </div>
        </div>
     </div>

     {/* 2. ELITE COMMAND INSIGHT SECTION */}
     <div className="bg-slate-950 rounded-[4.5rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-r-[15px] border-r-indigo-600">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
           <svg width="100%" height="100%">
              <pattern id="hq-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                 <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#hq-grid)" />
           </svg>
        </div>
        
        <div className="relative z-10 flex flex-wrap justify-between items-start gap-12 mb-12">
           <div className="space-y-6 max-w-2xl">
              <div className="flex items-center gap-5">
                 <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-indigo-500 shadow-2xl animate-pulse">
                    <Lucide.Cpu size={32} />
                 </div>
                 <div>
                    <h3 className="text-2xl font-black text-white/60 mb-1 tracking-widest uppercase">Strategic Intelligence</h3>
                    <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
                 </div>
              </div>
              <p className="text-2xl lg:text-4xl font-black text-white leading-relaxed tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                 "تحويل الموارد المتاحة حالياً إلى 'قاعدة بيانات نشطة' هو مفتاح الانتصار على المنافسين الذين يمتلكون تمويلاً أكبر ولكن حركتهم أبطأ بـ 10 أضعاف."
              </p>
           </div>
           
           <div className="flex flex-col gap-4">
              <div className="px-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] text-center backdrop-blur-xl">
                 <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Alpha Signal</div>
                 <div className="text-emerald-400 font-black text-xl uppercase italic">Market Disruption</div>
              </div>
              <div className="px-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] text-center backdrop-blur-xl">
                 <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Risk Coverage</div>
                 <div className="text-amber-400 font-black text-xl uppercase italic">84% Protected</div>
              </div>
           </div>
        </div>

        <div className="relative z-10 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em] italic">
             Generated by AI Strategy Core v4.2 | Real-time Market Modeling
           </p>
           <button className="px-10 py-4 bg-indigo-600 hover:bg-white hover:text-slate-900 rounded-[1.5rem] text-[12px] font-black transition-all shadow-2xl flex items-center gap-4">
              تصفح التقرير الاستبدالي الموجز
              <Lucide.ArrowUpRight size={18} />
           </button>
        </div>
     </div>

  </div>
);

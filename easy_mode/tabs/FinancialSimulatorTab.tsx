import React from 'react';
import * as Lucide from 'lucide-react';
import * as Charts from '../components/AnalysisUI';

export const FinancialSimulatorTab: React.FC<{ analysis: any }> = ({ analysis }) => (
  <div className="space-y-12 animate-in fade-in zoom-in duration-1000">
     
     {/* 1. FINANCIAL CORE OVERVIEW */}
     <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {[
           { label: "Revenue Velocity", value: "High-Growth", icon: Lucide.Zap, col: "text-amber-500 bg-amber-50 border-amber-100" },
           { label: "Margin Efficiency", value: "Optimized", icon: Lucide.Target, col: "text-emerald-500 bg-emerald-50 border-emerald-100" },
           { label: "Operational Integrity", value: "Secure", icon: Lucide.ShieldCheck, col: "text-indigo-500 bg-indigo-50 border-indigo-100" },
           { label: "Scaling Readiness", value: "Phase 1", icon: Lucide.Rocket, col: "text-rose-500 bg-rose-50 border-rose-100" },
        ].map((stat, i) => (
           <div key={i} className={`p-8 rounded-[2.5rem] border-2 shadow-sm flex flex-col justify-between h-48 transition-all hover:shadow-xl hover:-translate-y-2 group ${stat.col}`}>
              <div className="flex justify-between items-start">
                 <stat.icon size={28} className="group-hover:rotate-12 transition-transform" />
                 <div className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full text-[9px] font-black uppercase tracking-widest border border-current opacity-40">Live Intel</div>
              </div>
              <div>
                 <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-1">{stat.label}</div>
                 <div className="text-xl font-black">{stat.value}</div>
              </div>
           </div>
        ))}
     </div>

     {/* 2. THE SIMULATION ENGINE (FULL WIDTH) */}
     <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-slate-900/5 to-transparent rounded-[5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <Charts.SensitivitySimulator initialCac={analysis.sensitivityAnalysis.baseCac} initialChurn={analysis.sensitivityAnalysis.baseChurn} />
     </div>

     {/* 3. UNIT ECONOMICS & KPI GRID */}
     <div className="space-y-8">
        <div className="flex items-center gap-6 pl-6 border-l-4 border-indigo-600">
           <h3 className="text-2xl font-black text-slate-900 tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
              تحليل الوحدات الاقتصادية (Unit Economics)
           </h3>
           <div className="h-px flex-1 bg-slate-100 hidden lg:block"></div>
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Unit Level Performance Metrics</p>
        </div>
        
        <div className="relative">
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full blur-[60px] opacity-60"></div>
           <Charts.FinancialsGrid financials={analysis.financials} />
        </div>
     </div>

     {/* 4. STRATEGIC BURN ANALYSIS SECTION */}
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-100 rounded-[3rem] p-10 lg:p-12 shadow-xl shadow-slate-200/40 relative group overflow-hidden">
           <Lucide.History size={120} className="absolute -bottom-10 -right-10 text-slate-50 -rotate-12 group-hover:rotate-0 transition-transform duration-[1500ms]" />
           <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                 <Lucide.Timer size={24} />
              </div>
              <h4 className="text-xl font-black text-slate-900 tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>تحليل فترة الصمود (Runway Integrity)</h4>
              <p className="text-sm font-bold text-slate-500 leading-relaxed italic" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                "بناءً على التكاليف الثابتة الحالية (${analysis.financials.monthlyFixed}/شهر)، مشروعك في المنطقة الآمنة لمدة {analysis.financials.runway}. ننصح ببدء جولة تمويل Seed قبل انقضاء نصف هذه المدة."
              </p>
           </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-12 text-white shadow-2xl relative group overflow-hidden">
           <Lucide.TrendingUp size={120} className="absolute -bottom-10 -right-10 text-white/5 -rotate-6 group-hover:rotate-0 transition-transform duration-[1500ms]" />
           <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="space-y-4">
                 <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.5em]">LTV Maximization</div>
                 <h4 className="text-2xl font-black leading-tight tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>خطة تحسين الهوامش الربحية</h4>
              </div>
              <div className="space-y-4 mt-8 mb-4">
                 {[
                   "خفض الارتداد (Churn) عبر أنظمة الولاء الاستباقية",
                   "رفع قيمة متوسط الطلب (AOV) بنسبة 15%",
                   "أتمتة العمليات الأساسية لتقليص التكلفة المتغيرة"
                 ].map((t, idx) => (
                   <div key={idx} className="flex items-center gap-4 group/li">
                      <div className="w-6 h-1 bg-indigo-500 rounded-full group-hover/li:w-10 transition-all duration-500"></div>
                      <span className="text-[13px] font-bold text-slate-400 group-hover:text-white transition-colors" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{t}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
     </div>

  </div>
);

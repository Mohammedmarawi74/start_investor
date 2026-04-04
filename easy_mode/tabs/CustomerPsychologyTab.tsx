import React from 'react';
import * as Lucide from 'lucide-react';
import * as Charts from '../components/AnalysisUI';

export const CustomerPsychologyTab: React.FC<{ analysis: any }> = ({ analysis }) => (
  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
     
     {/* 1. MAIN PERSONA INTEL */}
     <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/5 to-emerald-500/5 rounded-[6rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <Charts.BehavioralPersonaCard persona={analysis.behavioralPersona} />
     </div>

     {/* 2. MARKET DIMENSION ENGINE */}
     <div className="bg-slate-900 rounded-[4rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
        {/* Abstract Background Design */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
           <svg width="100%" height="100%">
              <pattern id="market-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#market-grid)" />
           </svg>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
           <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-[0.4em] border border-indigo-500/20">
                 Market Dimensionality Engine
              </div>
              <h3 className="text-3xl lg:text-5xl font-black text-white tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                 تحليل النطاق الجغرافي والاقتصادي
              </h3>
              <p className="text-slate-500 text-sm font-bold max-w-xl leading-relaxed">
                 تحديد الحجم الحقيقي للفرصة يمر عبر تصفية السوق العالمي وصولاً إلى "حصة الميدان" التي يمكنك الهيمنة عليها في أول 12 شهراً.
              </p>
           </div>
           <div className="hidden lg:block text-right">
              <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-2">Verified Source</div>
              <div className="text-white font-black text-xs uppercase opacity-40">{analysis.marketSize.source || "Crunchbase Intel 2025"}</div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
           {[
             { 
               id: 'TAM', 
               label: 'المحيط الكلي المتاح (TAM)', 
               sub: 'Full Global Demand',
               value: analysis.marketSize.tam, 
               icon: Lucide.Globe2,
               color: 'from-slate-800/50 to-slate-800/80',
               line: 'bg-slate-700'
             },
             { 
               id: 'SAM', 
               label: 'النطاق المتاح للخدمة (SAM)', 
               sub: 'Serviceable Sector',
               value: analysis.marketSize.sam, 
               icon: Lucide.Compass,
               color: 'from-indigo-900/40 to-indigo-950/60 border-indigo-500/30',
               line: 'bg-indigo-500'
             },
             { 
               id: 'SOM', 
               label: 'حصة الميدان المستهدفة (SOM)', 
               sub: 'First 12 Months Target',
               value: analysis.marketSize.som, 
               icon: Lucide.Target,
               color: 'from-emerald-900/40 to-emerald-950/60 border-emerald-500/30',
               line: 'bg-emerald-500'
             },
           ].map(m => (
             <div key={m.id} className={`bg-gradient-to-br ${m.color} p-10 rounded-[3rem] border shadow-2xl relative overflow-hidden group/m transition-all hover:-translate-y-2`}>
                <div className={`absolute top-0 left-0 w-2 h-full ${m.line} opacity-40`}></div>
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover/m:text-white group-hover/m:rotate-12 transition-all">
                      <m.icon size={24} />
                   </div>
                   <div>
                      <div className="text-[14px] font-black text-white/90" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{m.label}</div>
                      <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{m.sub}</div>
                   </div>
                </div>
                <div className="text-4xl lg:text-5xl font-black text-white tabular-nums tracking-tighter mb-4" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{m.value}</div>
                <div className="flex items-center gap-2">
                   <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${m.line} transition-all duration-1000 delay-500`} style={{ width: m.id === 'TAM' ? '100%' : m.id === 'SAM' ? '45%' : '12%' }}></div>
                   </div>
                   <span className="text-[10px] font-black text-slate-500">{m.id === 'TAM' ? 'MAX' : m.id === 'SAM' ? 'EXP' : 'OBJ'}</span>
                </div>
             </div>
           ))}
        </div>
     </div>

     {/* 3. PSYCHOGRAPHIC MOTIVATORS */}
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[3.5rem] p-12 shadow-xl shadow-slate-200/50">
           <div className="flex items-center gap-6 mb-12">
              <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center shadow-inner">
                 <Lucide.Flame size={28} />
              </div>
              <div>
                 <h4 className="text-2xl font-black text-slate-900 tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>محركات القرار العاطفية</h4>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Emotional Conversion Triggers</p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "الحافز الأساسي (Core Motivation)", text: "الرغبة في التفرد بالأمان المالي والهروب من دوامة العمل الروتينية.", icon: Lucide.Zap },
                { title: "العتبة النفسية (Psychological Barrier)", text: "الخوف من 'المخاطرة غير المحسوبة' أو فقدان السيطرة على البيانات.", icon: Lucide.ShieldAlert }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative group/item">
                   <div className="flex items-center gap-4 mb-4">
                      <item.icon size={18} className="text-indigo-500" />
                      <span className="text-[12px] font-black text-slate-800 uppercase tracking-tight" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{item.title}</span>
                   </div>
                   <p className="text-[13px] font-bold text-slate-500 leading-relaxed italic" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                      "{item.text}"
                   </p>
                </div>
              ))}
           </div>
        </div>

        <div className="lg:col-span-4 bg-indigo-600 rounded-[3.5rem] p-12 text-white shadow-2xl shadow-indigo-100/50 relative overflow-hidden group">
           <Lucide.Magnet size={200} className="absolute -bottom-20 -right-20 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-[2000ms]" />
           <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="space-y-4">
                 <div className="text-[11px] font-black text-indigo-200 uppercase tracking-[0.5em]">Engagement Strategy</div>
                 <h4 className="text-3xl font-black leading-tight tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                    كيف يتم استقطابهم؟
                 </h4>
              </div>
              <div className="space-y-6 mt-12 mb-8">
                 {[
                   "محتوى يعتمد على الحقائق (Data-driven content)",
                   "إثبات اجتماعي من أقران حقيقيين",
                   "توفير فترة تجربة 'صفرية المخاطر'"
                 ].map((t, idx) => (
                   <div key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                         <Lucide.Check size={14} className="text-indigo-300" />
                      </div>
                      <span className="text-[13px] font-bold opacity-80" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{t}</span>
                   </div>
                 ))}
              </div>
              <div className="pt-8 border-t border-white/10 text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em] italic">
                 Predictive Conversion: High Potential
              </div>
           </div>
        </div>
     </div>

  </div>
);

import React from 'react';
import * as Lucide from 'lucide-react';

const Card: React.FC<{ children: React.ReactNode, className?: string, id?: string }> = ({ children, className = "", id }) => (
  <div id={id} className={`bg-white border border-slate-100 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-slate-200/30 relative overflow-hidden transition-all duration-500 hover:shadow-indigo-100/40 group ${className}`}>
    {children}
  </div>
);

const Badge: React.FC<{ children: React.ReactNode, type?: 'indigo' | 'emerald' | 'amber' | 'rose' | 'blue' | 'slate' }> = ({ children, type = 'indigo' }) => {
  const styles = {
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    rose: "bg-rose-50 text-rose-600 border-rose-100",
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    slate: "bg-slate-50 text-slate-500 border-slate-100"
  };
  return (
    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black border uppercase tracking-widest shadow-sm ${styles[type]}`}>
      {children}
    </span>
  );
};

// --- 1. Hybrid Innovation Card ---
export const HybridInnovationCard: React.FC<{ data: any }> = ({ data }) => (
  <div className="relative bg-slate-900 rounded-[3.5rem] p-12 lg:p-16 text-white overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.15)] mb-12">
    <div className="absolute -top-48 -right-48 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] group-hover:scale-125 transition-transform duration-[2000ms]"></div>
    <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>

    <div className="relative z-10 space-y-12">
      <div className="flex flex-wrap justify-between items-start gap-8">
        <div className="flex items-center gap-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-20 h-20 bg-white/5 border border-white/10 rounded-[2.5rem] flex items-center justify-center backdrop-blur-3xl shadow-2xl rotate-6 group-hover:rotate-0 transition-transform duration-700">
               <Lucide.Sparkles size={40} className="text-emerald-400" />
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-emerald-400 text-slate-900 rounded-full mb-3 text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-emerald-400/20">
               <Lucide.Zap size={12} strokeWidth={4} />
               Blue Ocean Innovation Model
            </div>
            <h3 className="text-3xl lg:text-5xl font-black tracking-tighter leading-tight" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>ابتكار تقاطع القطاعات الهجين</h3>
          </div>
        </div>
        
        <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-3xl backdrop-blur-md">
           <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Efficiency Delta</div>
           <div className="text-3xl font-black tabular-nums">+{data.percentage || 45}%</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-12 bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-2xl hover:border-emerald-400/30 transition-all duration-700 group/model">
           <div className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.4em] mb-6 flex items-center gap-4">
              <div className="h-1 w-10 bg-emerald-400 rounded-full group-hover/model:w-20 transition-all duration-700"></div>
              النموذج المقترح (Core Strategy)
           </div>
           <p className="text-xl lg:text-3xl font-bold leading-relaxed text-slate-100 tracking-tight" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
              {data.suggestedModel || "إطلاق منصة 'استثمار ذكي' تدمج بين موثوقية البنوك وسرعة الـ Fintech عبر أتمتة القروض العقارية للأفراد."}
           </p>
        </div>

        <div className="lg:col-span-6 bg-slate-900/50 border border-white/5 p-8 rounded-[2.5rem] group/card hover:bg-white/5 transition-all">
           <div className="flex items-center gap-3 mb-4">
              <Lucide.ShieldCheck size={18} className="text-indigo-400" />
              <div className="text-[11px] font-black text-indigo-400 uppercase tracking-widest">تحليل الجدوى (Why it works)</div>
           </div>
           <p className="text-[14px] font-bold text-slate-400 leading-relaxed italic">{data.whyItWorks || "لأن السوق السعودي يفتقر لأداة تحليلية تربط مباشرة بين بيانات هيئة العقار وبين قرارات المستثمر الصغير."}</p>
        </div>

        <div className="lg:col-span-6 bg-slate-900/50 border border-white/5 p-8 rounded-[2.5rem] group/card hover:bg-white/5 transition-all">
           <div className="flex items-center gap-3 mb-4">
              <Lucide.Compass size={18} className="text-emerald-400" />
              <div className="text-[11px] font-black text-emerald-400 uppercase tracking-widest">فجوة المحيط الأزرق؟</div>
           </div>
           <p className="text-[14px] font-bold text-slate-400 leading-relaxed italic">{data.blueOceanOpportunity || "خلق فئة 'المستشار الذكي' الآلي بدلاً من مكابس البيانات الجامدة التي يستخدمها المنافسون."}</p>
        </div>
      </div>
    </div>
  </div>
);

// --- 2. Strategic Radar ---
export const StrategicRadar: React.FC<{ labels: string[], values: number[] }> = ({ labels, values }) => {
  const size = 200;
  const center = size / 2;
  const radius = size * 0.35;
  const angleStep = (Math.PI * 2) / labels.length;

  const points = values.map((val, i) => {
    const r = (val / 100) * radius;
    const x = center + r * Math.sin(i * angleStep);
    const y = center - r * Math.cos(i * angleStep);
    return `${x},${y}`;
  }).join(' ');

  const gridPoints = [20, 40, 60, 80, 100].map(val => {
    const r = (val / 100) * radius;
    return Array.from({ length: labels.length }).map((_, i) => {
      const x = center + r * Math.sin(i * angleStep);
      const y = center - r * Math.cos(i * angleStep);
      return `${x},${y}`;
    }).join(' ');
  });

  return (
    <div className="relative w-full flex flex-col items-center justify-center p-2">
      <div className="relative group p-6 bg-slate-50/50 rounded-[3rem] border border-slate-100 shadow-inner w-full max-w-[280px] flex justify-center">
        {/* Dynamic Sonar Scan Line */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
           <div className="w-full h-full rounded-full border border-indigo-200 animate-ping duration-[5000ms]"></div>
           <div className="absolute top-1/2 left-1/2 w-[120px] h-1 bg-gradient-to-r from-indigo-500 to-transparent origin-left animate-spin duration-[8000ms] -translate-y-1/2 blur-[1px]"></div>
        </div>

        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] max-w-full h-auto overflow-visible">
          <defs>
             <radialGradient id="radarGradElite">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.5" />
             </radialGradient>
             <filter id="eliteGlowRadar" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
             </filter>
          </defs>
          
          {gridPoints.map((poly, i) => (
            <polygon key={i} points={poly} fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray={i === 4 ? "0" : "4 3"} />
          ))}
          
          {Array.from({ length: labels.length }).map((_, i) => (
            <line key={i} x1={center} y1={center} 
              x2={center + radius * Math.sin(i * angleStep)} 
              y2={center - radius * Math.cos(i * angleStep)} 
              stroke="#e2e8f0" strokeWidth="1" strokeOpacity="0.3" />
          ))}
          
          <polygon 
            points={points} 
            fill="url(#radarGradElite)" 
            stroke="#6366f1" 
            strokeWidth="4" 
            strokeLinejoin="round" 
            filter="url(#eliteGlowRadar)"
            className="animate-in fade-in zoom-in duration-[1500ms] translate-z-0" 
          />

          {labels.map((label, i) => {
               const x = center + (radius + 35) * Math.sin(i * angleStep);
               const y = center - (radius + 35) * Math.cos(i * angleStep);
               return (
                 <text key={i} x={x} y={y} className="fill-slate-500 text-[9px] font-black uppercase tracking-widest" textAnchor="middle" alignmentBaseline="middle" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                   {label}
                 </text>
               );
          })}
        </svg>
      </div>
    </div>
  );
};

// --- 3. Sensitivity Simulator ---
export const SensitivitySimulator: React.FC<{ initialCac: number, initialChurn: number }> = ({ initialCac, initialChurn }) => {
   const [cac, setCac] = React.useState(initialCac);
   const [churn, setChurn] = React.useState(initialChurn);
   const [breakEven, setBreakEven] = React.useState(6);

   React.useEffect(() => {
      const base = 5;
      const cacFactor = (cac - initialCac) / 15;
      const churnFactor = (churn - initialChurn) / 1.5;
      setBreakEven(Math.max(1, Math.round(base + cacFactor + churnFactor)));
   }, [cac, churn, initialCac, initialChurn]);

   return (
      <div className="bg-white border border-slate-100 p-12 lg:p-16 rounded-[4.5rem] shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
         <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 shadow-lg shadow-indigo-100"></div>
         
         <div className="flex flex-wrap justify-between items-center gap-10 mb-20 relative z-10">
            <div className="flex items-center gap-8">
               <div className="w-20 h-20 bg-slate-900 text-white rounded-[2rem] flex items-center justify-center shadow-2xl rotate-6 group-hover:rotate-0 transition-transform duration-[1000ms]">
                  <Lucide.Activity size={40} />
               </div>
               <div>
                  <h4 className="text-3xl font-black text-slate-900 tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>محاكي الحساسية المالية</h4>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em]">Unit Economics & Burn Sensitivity Analysis</p>
               </div>
            </div>
            <div className={`px-8 py-4 rounded-3xl text-[11px] font-black uppercase tracking-[0.2em] border transition-all duration-[800ms] shadow-inner ${breakEven > 10 ? 'bg-rose-50 text-rose-500 border-rose-100' : 'bg-emerald-50 text-emerald-500 border-emerald-100'}`}>
               Operational Status: {breakEven > 10 ? 'Unstable Burn' : 'Operational Grace'}
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 relative z-10">
            <div className="space-y-12">
               <div className="flex justify-between items-center px-2">
                  <div className="flex flex-col">
                     <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest mb-3">Target CAC (Acquisition)</span>
                     <div className="h-1.5 w-16 bg-indigo-500 rounded-full"></div>
                  </div>
                  <span className={`text-4xl font-black tabular-nums transition-colors ${cac > initialCac ? 'text-rose-600' : 'text-indigo-700'}`}>${cac}</span>
               </div>
               <div className="relative py-6">
                  <input type="range" min="10" max="500" value={cac} onChange={(e) => setCac(Number(e.target.value))} className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-500" />
                  <div className="flex justify-between mt-6 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
                     <span>Frugal J-Curve</span>
                     <span>Aggressive Scale</span>
                  </div>
               </div>
            </div>
            
            <div className="space-y-12">
               <div className="flex justify-between items-center px-2">
                  <div className="flex flex-col">
                     <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest mb-3">Retention Leak (Churn)</span>
                     <div className="h-1.5 w-16 bg-amber-500 rounded-full"></div>
                  </div>
                  <span className="text-4xl font-black tabular-nums text-slate-900">{churn}%</span>
               </div>
               <div className="relative py-6">
                  <input type="range" min="1" max="60" value={churn} onChange={(e) => setChurn(Number(e.target.value))} className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400" />
                  <div className="flex justify-between mt-6 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
                     <span>Zero-Friction</span>
                     <span>Market Attrition</span>
                  </div>
               </div>
            </div>
         </div>

         <div className="relative group/display">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-amber-500/20 rounded-[3rem] blur-xl opacity-0 group-hover/display:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative bg-slate-900 p-8 lg:p-10 rounded-[3rem] flex flex-col lg:flex-row items-center gap-10 overflow-hidden shadow-2xl border border-white/5">
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
               
               <div className="flex flex-col lg:flex-row items-center gap-8 flex-1">
                  <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center text-indigo-400 backdrop-blur-3xl shadow-inner group-hover/display:rotate-12 transition-all duration-700">
                     <Lucide.History size={40} strokeWidth={1.5} />
                  </div>
                  
                  <div className="text-center lg:text-right">
                     <div className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.4em] mb-2 opacity-60">نقطة التعادل المتوقعة (Break-even)</div>
                     <div className="text-6xl lg:text-7xl font-black text-white tracking-tighter tabular-nums flex items-baseline justify-center lg:justify-start gap-4 leading-none">
                        {breakEven} 
                        <span className="text-sm font-black text-slate-500 uppercase tracking-[0.4em]">Months</span>
                     </div>
                  </div>
               </div>

               <div className="w-full lg:w-px h-px lg:h-20 bg-white/10"></div>

               <div className="max-w-xs text-[12px] font-bold text-slate-400 leading-relaxed opacity-80 text-center lg:text-right italic border-r-2 border-indigo-500/30 pr-5" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                 "هذا المحاكي يثبت أن خفض تكلفة الاستحواذ بنسبة 20% يسرع نقطة التعادل بقرابة 3 أشهر. ركز على النمو العضوي."
               </div>
            </div>
         </div>
      </div>
   );
};

// --- 4. Behavioral Persona ---
export const BehavioralPersonaCard: React.FC<{ persona: any }> = ({ persona }) => (
   <div className="bg-white border border-slate-100 rounded-[5rem] p-16 lg:p-24 shadow-2xl shadow-slate-200/40 relative overflow-hidden group">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-50/50 rounded-full blur-[80px] -z-0"></div>
      
      <div className="relative z-10 flex flex-wrap justify-between items-start gap-12 mb-24">
         <div className="flex items-center gap-12">
            <div className="relative">
               <div className="absolute -inset-6 bg-indigo-500/15 rounded-full blur-2xl animate-pulse"></div>
               <div className="relative w-24 h-24 bg-slate-900 text-white rounded-[2.5rem] flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-[1500ms]">
                  <Lucide.Fingerprint size={48} strokeWidth={2} />
               </div>
            </div>
            <div>
               <h4 className="text-4xl font-black text-slate-900 tracking-tighter mb-2" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>سيكولوجية العميل المستهدف</h4>
               <p className="text-[12px] font-black text-slate-400 uppercase tracking-[0.5em]">Behavioral Archetype & Psychographic Mapping</p>
            </div>
         </div>
         <div className="flex flex-col items-end gap-4">
            <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest leading-none mb-3">Strategic Voice Path</span>
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-indigo-50 text-indigo-700 rounded-3xl border border-indigo-100 text-[12px] font-black shadow-2xl shadow-indigo-100/50">
               <Lucide.Speaker size={18} />
               <span>{persona.toneOfVoice || "مستشار تقني موثوق وصديق للهوية"}</span>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
         <div className="relative p-14 bg-slate-50 border border-slate-100 rounded-[3.5rem] hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-1000 group/quote">
            <Lucide.Quote size={80} className="absolute top-10 right-10 text-indigo-400 opacity-5 group-hover/quote:opacity-15 group-hover/quote:scale-125 transition-all duration-[2000ms]" />
            <div className="relative z-10">
               <div className="text-[11px] font-black text-indigo-500 uppercase tracking-[0.5rem] mb-10 flex items-center gap-4">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  The Archetype Voice
               </div>
               <p className="text-2xl font-black text-slate-700 leading-relaxed italic tracking-tight" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                 "{persona.psychographics || "مستثمر شاب طموح، يكره البيروقراطية ويفضل الحلول التي تمنحه حرية القرار بضغطة زر."}"
               </p>
            </div>
         </div>
         
         <div className="relative p-14 bg-indigo-50/50 border border-indigo-100 rounded-[3.5rem] hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-1000 group/jtbd">
            <Lucide.Target size={80} className="absolute bottom-10 left-10 text-indigo-300 opacity-5 group-hover/jtbd:opacity-15 group-hover/jtbd:rotate-12 transition-all duration-[2000ms]" />
            <div className="relative z-10">
               <div className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.5rem] mb-10 flex items-center gap-4">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                  Jobs To Be Done (JTBD)
               </div>
               <p className="text-2xl font-black text-indigo-900 leading-relaxed tracking-tight" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                 {persona.jobsToBeDone || "تحويل المدخرات الصغيرة إلى أصول عقارية مدرة للدخل دون الحاجه لزيارة بنك واحد."}
               </p>
            </div>
         </div>
      </div>

      <div className="pt-20 border-t border-slate-100 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-12 text-[12px] font-black text-slate-300 uppercase tracking-[0.6em]">
            Empathy Intelligence Network
         </div>
         
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
            {[
               { icon: Lucide.Eye, label: "ماذا يرى؟", val: persona.empathyMap.sees, col: "text-blue-500 bg-blue-50 shadow-blue-100/30" },
               { icon: Lucide.Ear, label: "ماذا يسمع؟", val: persona.empathyMap.hears, col: "text-amber-500 bg-amber-50 shadow-amber-100/30" },
               { icon: Lucide.BrainCircuit, label: "بماذا يشعر؟", val: persona.empathyMap.feels, col: "text-indigo-600 bg-indigo-50 shadow-indigo-100/30" },
               { icon: Lucide.Radiation, label: "بماذا يتألم؟", val: persona.empathyMap.pains, col: "text-rose-500 bg-rose-50 shadow-rose-100/30" }
            ].map((node, i) => (
               <div key={i} className="text-center p-12 bg-white border border-slate-50 rounded-[3rem] hover:border-indigo-200 hover:shadow-2xl hover:-translate-y-4 transition-all duration-[800ms] group/node">
                  <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto mb-10 transition-all group-hover/node:rotate-6 shadow-2xl ${node.col}`}>
                     <node.icon size={36} strokeWidth={2} />
                  </div>
                  <div className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">{node.label}</div>
                  <div className="text-[13px] font-black text-slate-800 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{node.val}</div>
               </div>
            ))}
         </div>
      </div>
   </div>
);

// --- 5. Financials Grid ---
export const FinancialsGrid: React.FC<{ financials: any }> = ({ financials }) => {
  const stats = [
    { label: "المصاريف الثابتة", sub: "Monthly Fixed", val: financials.monthlyFixed, hint: "تكاليف التشغيل الأساسية", icon: Lucide.Landmark, col: "text-amber-600 bg-amber-50" },
    { label: "تكلفة جلب العميل", sub: "Target CAC", val: financials.cac, hint: "ميزانية التسويق لكل فرد", icon: Lucide.UserPlus, col: "text-rose-600 bg-rose-50" },
    { label: "القيمة الدائمة للعميل", sub: "LTV Growth", val: financials.gem, hint: "الربح المتوقع لكل مشتري", icon: Lucide.Gem, col: "text-emerald-600 bg-emerald-50" },
    { label: "معدل العائد الربحي", sub: "LTV:CAC Ratio", val: financials.ltvCacRatio, hint: "مقياس كفاءة النمو", icon: Lucide.Activity, col: "text-indigo-600 bg-indigo-50" },
    { label: "المتطلبات التشغيلية", sub: "OpEx Detail", val: financials.package, hint: "تجهيزات العمل اللازمة", icon: Lucide.Boxes, col: "text-amber-600 bg-amber-50" },
    { label: "فترة الصمود المالي", sub: "Runway Index", val: financials.runway, hint: "مدة البقاء دون دخل", icon: Lucide.Timer, col: "text-indigo-600 bg-indigo-50" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10" dir="rtl">
       {stats.map(({ label, sub, val, hint, icon: Icon, col }) => (
          <div key={label} className="bg-white/70 backdrop-blur-md border border-slate-100 rounded-[2rem] p-6 hover:border-indigo-200 hover:shadow-xl transition-all duration-500 group relative overflow-hidden h-full flex flex-col justify-between">
            <div className="relative z-10">
               <div className="flex justify-between items-start mb-6">
                  <div className={`w-11 h-11 rounded-1.5xl flex items-center justify-center transition-all group-hover:rotate-6 shadow-lg ${col}`}>
                     <Icon size={20} strokeWidth={2.5} />
                  </div>
                  <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none mt-2">{sub}</div>
               </div>
               
               <div className="space-y-1">
                  <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{label}</div>
                  <div className="text-2xl font-black text-slate-900 tracking-tighter tabular-nums" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{val}</div>
               </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-50 relative z-10">
               <div className="text-[10px] font-bold text-slate-400 italic leading-none">{hint}</div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-slate-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
       ))}
    </div>
  );
};

// --- 6. Smart Gantt Chart ---
export const SmartGanttChart: React.FC<{ tasks: any[] }> = ({ tasks }) => {
   const totalDays = 60;
   return (
      <Card className="hover:border-indigo-100 border-t-[10px] border-t-emerald-600">
         <div className="flex flex-wrap justify-between items-center gap-8 mb-20 relative z-10">
            <div className="flex items-center gap-8">
               <div className="w-20 h-20 bg-emerald-700 text-white rounded-[2rem] flex items-center justify-center shadow-2xl rotate-3">
                  <Lucide.Combine size={40} />
               </div>
               <div>
                  <h4 className="text-3xl font-black text-slate-900 tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>خارطة طريق التنفيذ الإجرائي</h4>
                  <p className="text-[12px] font-black text-slate-400 uppercase tracking-[0.4em]">Critical Operations Lifecycle (Next 60 Days)</p>
               </div>
            </div>
            <div className="flex gap-4">
                <button className="px-8 py-5 bg-slate-900 text-white rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.2em] hover:bg-indigo-600 hover:shadow-2xl transition-all flex items-center gap-4">
                  <Lucide.Trello size={18} />
                  Export to Agile Board
                </button>
            </div>
         </div>

         <div className="space-y-12 relative z-10">
            {tasks.map((task, i) => (
               <div key={i} className="group/item flex items-center gap-12">
                  <div className="w-56 flex items-center gap-5">
                     <div className={`w-3 h-3 rounded-full ${task.isCritical ? 'bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.4)] animate-pulse' : 'bg-slate-300'}`}></div>
                     <div className="text-[14px] font-black text-slate-800 tracking-tight line-clamp-1 group-hover/item:text-indigo-600 transition-colors uppercase" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                        {task.task}
                     </div>
                  </div>
                  <div className="flex-1 h-6 bg-slate-50 rounded-full relative overflow-hidden ring-1 ring-slate-100 shadow-inner">
                     <div 
                        className={`absolute inset-y-0 right-0 rounded-full transition-all duration-[2000ms] delay-${i*100} ${task.isCritical ? 'bg-gradient-to-r from-indigo-500 to-indigo-700 shadow-2xl' : 'bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-80'}`}
                        style={{ 
                           right: `${(task.startDay / totalDays) * 100}%`, 
                           width: `${(task.duration / totalDays) * 100}%`,
                        }}
                     >
                        <div className="absolute inset-0 bg-white/25 animate-shimmer scale-x-[300%]"></div>
                     </div>
                  </div>
                  <div className="w-32 flex justify-end">
                     {task.isCritical ? (
                        <div className="px-4 py-1.5 bg-rose-50 text-rose-600 text-[10px] font-black rounded-xl uppercase tracking-widest border-2 border-rose-100 shadow-sm">Critical Path</div>
                     ) : (
                        <div className="text-[11px] font-black text-slate-400 uppercase italic opacity-50">Milestone Phase {Math.ceil(task.startDay / 15)}</div>
                     )}
                  </div>
               </div>
            ))}
         </div>
      </Card>
   );
};

// --- 7. Risk Matrix ---
export const RiskMatrix: React.FC<{ risks: any[] }> = ({ risks }) => (
  <div className="grid gap-12">
    {risks.map((r, i) => {
      const isHigh = r.probability === "high" || r.probability === "CRITICAL";
      return (
        <div key={i} className="bg-white border border-slate-100 rounded-[5rem] p-16 lg:p-20 shadow-2xl hover:shadow-indigo-100/40 transition-all duration-[1200ms] group relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-50/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative z-10 flex flex-wrap justify-between items-center mb-12">
            <div className="flex items-center gap-8">
               <div className={`w-5 h-16 rounded-full ${isHigh ? 'bg-rose-500 shadow-2xl shadow-rose-200' : 'bg-amber-500 shadow-2xl shadow-amber-200'}`}></div>
               <span className="text-3xl font-black text-slate-900 tracking-tighter group-hover:text-rose-600 transition-colors uppercase" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{r.title}</span>
            </div>
            <div className={`px-10 py-6 rounded-3xl text-[12px] font-black uppercase tracking-[0.5em] border-2 shadow-2xl ${isHigh ? 'bg-rose-50 text-rose-600 border-rose-100 shadow-rose-100/40' : 'bg-amber-50 text-amber-600 border-amber-100 shadow-amber-100/40'}`}>
               Risk Probability: {r.probability}
            </div>
          </div>
          
          <p className="relative z-10 text-[16px] font-extrabold text-slate-400 leading-relaxed mb-16 max-w-4xl italic" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
            "{r.mitigation}"
          </p>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-indigo-50/70 border border-indigo-100 p-12 rounded-[3rem] group/b hover:bg-white transition-all shadow-inner">
                 <div className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.5em] mb-8 flex items-center gap-4">
                    <Lucide.ShieldCheck size={24} className="group-hover/b:scale-125 group-hover/b:rotate-6 transition-all" />
                    Elite Response Plan B
                 </div>
                 <p className="text-[14px] font-black text-indigo-900 tracking-tight leading-relaxed uppercase" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{r.planB || "Immediate Pivot to High-Margin Enterprise License Model."}</p>
              </div>
              <div className="bg-rose-50/70 border border-rose-100 p-12 rounded-[3rem] group/k hover:bg-white transition-all shadow-inner">
                 <div className="text-[11px] font-black text-rose-400 uppercase tracking-[0.5em] mb-8 flex items-center gap-4">
                    <Lucide.Ghost size={24} className="group-hover/k:rotate-12 group-hover/k:scale-110 transition-all" />
                    Operational Kill-switch
                 </div>
                 <p className="text-[14px] font-black text-rose-900 tracking-tight leading-relaxed uppercase" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{r.killSwitch || "Immediate OpEx Freezing & Runway Preservation Protocol."}</p>
              </div>
          </div>
        </div>
      );
    })}
  </div>
);

// --- 8. Obstacles Grid ---
export const ObstaclesGrid: React.FC<{ obstacles: any[] }> = ({ obstacles }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     {obstacles.map((o, i) => (
        <div key={i} className={`group p-10 rounded-[3rem] border-2 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${o.severity === 'critical' ? 'bg-rose-50/30 border-rose-100' : 'bg-amber-50/30 border-amber-100'}`}>
           <div className={`absolute top-0 right-0 w-3 h-full ${o.severity === 'critical' ? 'bg-rose-500' : 'bg-amber-500'} opacity-20`}></div>
           <div className="flex justify-between items-start mb-8">
              <span className="text-lg font-black text-slate-900 tracking-tighter uppercase" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{o.title}</span>
              <div className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border ${o.severity === 'critical' ? 'bg-rose-100 text-rose-700 border-rose-200' : 'bg-amber-100 text-amber-700 border-amber-200'}`}>
                 {o.severity} Threat
              </div>
           </div>
           <p className="text-[12px] font-bold text-slate-600 leading-relaxed italic opacity-90 pl-6 border-l-2 border-slate-200" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{o.detail}</p>
        </div>
     ))}
  </div>
);

// --- 9. Action Timeline ---
export const ActionTimeline: React.FC<{ actionPlan: any }> = ({ actionPlan }) => {
  const phases = [
    { key: "week1", label: "الأسبوع الأول (التأسيس)", icon: Lucide.Zap, col: "text-rose-500", dot: "border-rose-500", bg: "bg-rose-50/50" },
    { key: "month1", label: "الشهر الأول (التحقق)", icon: Lucide.Target, col: "text-amber-500", dot: "border-amber-500", bg: "bg-amber-50/50" },
    { key: "month3", label: "3 أشهر (النمو)", icon: Lucide.TrendingUp, col: "text-indigo-600", dot: "border-indigo-600", bg: "bg-indigo-50/50" },
    { key: "month6", label: "6 أشهر (التوسع)", icon: Lucide.Rocket, col: "text-emerald-500", dot: "border-emerald-500", bg: "bg-emerald-50/50" },
  ];
  return (
    <div className="flex flex-col space-y-0 pr-12">
      {phases.map(({ key, label, icon: Icon, col, dot, bg }, i) => (
        <div key={key} className={`relative pb-24 border-r-4 ${i === phases.length - 1 ? 'border-transparent' : 'border-slate-100'} pr-16 group/phase`}>
           <div className={`absolute -right-[15px] top-0 w-7 h-7 rounded-full bg-white border-[6px] ${dot} z-10 shadow-2xl group-hover/phase:scale-125 transition-transform duration-700`}>
              <div className={`absolute inset-0 rounded-full animate-ping opacity-30 ${dot.replace('border-', 'bg-')}`}></div>
           </div>
           
           <div className="flex items-center gap-6 mb-12">
              <div className={`w-14 h-14 rounded-[1.5rem] flex items-center justify-center shadow-xl ${bg} ${col} rotate-6 group-hover/phase:rotate-0 transition-all`}>
                 <Icon size={28} strokeWidth={2.5} />
              </div>
              <span className={`text-xl font-black uppercase tracking-[0.2em] ${col}`} style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{label}</span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:border-indigo-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group/card relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-2 h-full opacity-30 ${dot.replace('border-', 'bg-')}`}></div>
                    <strong className="block text-md font-black text-slate-900 mb-3 tracking-tighter uppercase" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{(actionPlan?.[key] || [])[0]?.action}</strong>
                    <p className="text-[12px] font-extrabold text-slate-400 leading-relaxed italic opacity-80" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{(actionPlan?.[key] || [])[0]?.why}</p>
                 </div>
           </div>
        </div>
      ))}
    </div>
  );
};

// --- 10. Opportunity Cost ---
export const OpportunityCostCard: React.FC<{ data: any }> = ({ data }) => (
   <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-5 shadow-inner overflow-hidden flex flex-col h-full ring-1 ring-white">
      <div className="flex items-center gap-4 mb-4">
         <div className="w-10 h-10 bg-white text-indigo-600 rounded-xl flex items-center justify-center shadow-md border border-slate-100 shrink-0">
            <Lucide.Scale size={18} />
         </div>
         <div>
            <h4 className="text-sm font-black text-slate-900 tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>تكلفة الفرصة البديلة</h4>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Build vs Buy Economic</p>
         </div>
      </div>
      
      <div className="grid grid-cols-1 gap-3 flex-1 mb-4">
         <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1.5 leading-none">ميزان الإنتاج</div>
            <p className="text-[11px] font-bold text-slate-600 leading-tight" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{data.buildVsBuy}</p>
         </div>
         <div className="bg-rose-600 p-4 rounded-xl shadow-lg shadow-rose-100 flex justify-between items-center text-white">
            <div className="text-left shrink-0">
               <div className="text-[7px] font-black text-rose-100 uppercase tracking-widest opacity-80 leading-none">Monthly Loss</div>
               <div className="text-lg font-black tracking-tighter tabular-nums leading-none mt-1">{data.calculatedLoss}</div>
            </div>
            <div className="text-[8px] font-black text-rose-200 uppercase text-right leading-tight max-w-[80px]">خسارة التأخير المتوقعة</div>
         </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-xl flex items-center gap-3">
         <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Lucide.Lightbulb size={14} />
         </div>
         <p className="text-[10px] font-black text-indigo-800 leading-tight italic" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{data.strategicAdvice}</p>
      </div>
   </div>
);

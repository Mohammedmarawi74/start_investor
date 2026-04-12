
import React, { useState } from 'react';
import { 
  Activity, 
  Target, 
  Zap, 
  BrainCircuit, 
  ShieldCheck, 
  TrendingUp, 
  ArrowUpRight, 
  BarChart4, 
  Maximize2,
  AlertTriangle,
  Globe,
  Cpu,
  Layers,
  ChevronLeft,
  Sparkles
} from 'lucide-react';

interface SmartAnalyzerProps {
  data?: any; 
}

const SEGMENT_CONTENT: Record<string, any> = {
  market: {
    title: "تحليل السوق و'المحيط الأزرق'",
    description: "مشروعك ينافس في قطاع نامٍ. الاستراتيجية المقترحة هي التركيز على 'تجربة المستخدم المخصصة' لخفض تكلفة الاستحواذ بنسبة 30%.",
    confidence: 96,
    icon: <Globe size={20} />,
    actions: [
      { icon: <Target size={14} />, title: "الشريحة الذهبية", desc: "التركيز على 10% من العملاء الأكثر ربحية." },
      { icon: <Zap size={14} />, title: "النمو الفيروسي", desc: "تفعيل نظام التوصيات الرقمي." }
    ]
  },
  finance: {
    title: "المحاكاة المالية والتدفقات",
    description: "نموذج الإيرادات يظهر مرونة عالية. نقطة التعادل ممكنة خلال أول 8 أشهر من الإطلاق الفعلي.",
    confidence: 92,
    icon: <BarChart4 size={20} />,
    actions: [
      { icon: <TrendingUp size={14} />, title: "استدامة الأرباح", desc: "تحسين الهوامش عبر أتمتة التكاليف." },
      { icon: <Activity size={14} />, title: "رصد التدفقات", desc: "مراقبة السيولة اللحظية للمشروع." }
    ]
  },
  execution: {
    title: "خارطة التوسع والانتشار",
    description: "بنية مشروعك تتيح التوسع الأفقي السريع. ننصح بالبدء في المناطق ذات الكثافة العالية أولاً.",
    confidence: 89,
    icon: <Layers size={20} />,
    actions: [
      { icon: <Globe size={14} />, title: "الانتشار الجغرافي", desc: "فتح قنوات إقليمية خلال العام الأول." },
      { icon: <Zap size={14} />, title: "تطوير المنتج", desc: "إضافة ميزات تقنية مكملة." }
    ]
  },
  risks: {
    title: "إدارة المخاطر والطوارئ",
    description: "تم تحديد مخاطر السيولة والتنظيم كعوامل أساسية. لدينا بروتوكولات حماية جاهزة للتفعيل.",
    confidence: 85,
    icon: <ShieldCheck size={20} />,
    actions: [
      { icon: <AlertTriangle size={14} />, title: "خطة الطوارئ", desc: "تأمين تدفقات سيولة احتياطية." },
      { icon: <ShieldCheck size={14} />, title: "حماية الملكية", desc: "تسجيل الأصول الرقمية رسمياً." }
    ]
  }
};

export const SmartAnalyzer: React.FC<SmartAnalyzerProps> = ({ data }) => {
  const [activeSegment, setActiveSegment] = useState<string>('market');
  const readinessScore = 88;
  const content = SEGMENT_CONTENT[activeSegment];

  return (
    <div dir="rtl" className="min-h-[calc(100vh-80px)] bg-[#F8FAFC] font-['IBM_Plex_Sans_Arabic'] text-slate-900 selection:bg-blue-100 animate-in fade-in duration-500 overflow-y-auto no-scrollbar pb-10">
      
      {/* 1. COMPACT DASHBOARD HEADER */}
      <header className="relative pt-6 pb-8 px-6 lg:px-10 bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-64 h-32 bg-blue-50/50 blur-[60px] rounded-full translate-x-1/3 -translate-y-1/2 opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="text-center md:text-right flex-1">
             <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100 mb-4">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest flex items-center gap-2"><Cpu size={12} /> AI STRATEGIC COCKPIT</span>
             </div>
             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tight mb-4">المحلل الاستراتيجي <span className="text-blue-600">الذكي</span></h1>
             <p className="text-slate-500 text-sm sm:text-base font-bold opacity-80 max-w-lg mx-auto md:mx-0 leading-relaxed italic">رؤية استباقية لتحويل الأفكار إلى أصول استثمارية ناجحة باستخدام أقوى نماذج الذكاء الاصطناعي.</p>
          </div>

          <div className="relative w-36 h-36 flex items-center justify-center bg-white rounded-3xl shadow-lg border border-slate-50">
             <svg className="w-28 h-28 transform -rotate-90">
                <circle cx="56" cy="56" r="50" fill="none" stroke="#F1F5F9" strokeWidth="8" />
                <circle cx="56" cy="56" r="50" fill="none" stroke="#2563eb" strokeWidth="8" strokeDasharray="314" strokeDashoffset={314 - (314 * readinessScore) / 100} strokeLinecap="round" />
             </svg>
             <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-black text-slate-900">{readinessScore}%</span>
                <span className="text-[8px] font-black text-blue-600 uppercase tracking-wider">الجاهزية</span>
             </div>
          </div>
        </div>
      </header>

      {/* 2. CORE ANALYTICS PANEL */}
      <main className="max-w-7xl mx-auto py-6 sm:py-10 px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
           <DashMetric label="سوق TAM" value="$4.2B" icon={<Globe size={16} />} color="blue" />
           <DashMetric label="المنافسة" value="عالية" icon={<Target size={16} />} color="rose" />
           <DashMetric label="ROI متوقع" value="420%" icon={<TrendingUp size={16} />} color="emerald" />
           <DashMetric label="دقة AI" value="98%" icon={<ShieldCheck size={16} />} color="blue" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* RADAR CARD - HIGH CONTRAST & UX */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-slate-200/20 relative overflow-hidden group ring-1 ring-black/5">
            <div className="absolute -top-10 -left-10 p-20 opacity-[0.06] text-blue-600 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
               <BrainCircuit size={300} />
            </div>
            
            <div className="relative z-10 h-full flex flex-col">
               <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                  <div className="text-center sm:text-right">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-none mb-1">موازنة القوى التنافسية</h3>
                    <p className="text-slate-400 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">تحليل هندسي لتوزيع الموارد عبر الأبعاد الخمسة.</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 shadow-inner"><Maximize2 size={16} /></div>
               </div>

               <div className="flex-1 flex items-center justify-center py-6">
                  <RadarChartEnhanced />
               </div>
               
               <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-10 pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-600 shadow-lg shadow-blue-200"></div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">المؤشرات الخاصة بك</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-200 shadow-sm"></div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">متوسط السوق</span>
                  </div>
               </div>
            </div>
          </div>

          {/* AI VERDICT - COMPACT & PUNCHY */}
          <div className="lg:col-span-4 flex flex-col">
             <div className="flex-1 bg-slate-950 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-10 text-white relative overflow-hidden group shadow-2xl ring-1 ring-white/10">
                <Zap className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 text-blue-400 group-hover:rotate-12 transition-transform duration-700" />
                <div className="relative z-10 flex flex-col h-full">
                   <div className="flex items-center gap-3 mb-8">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Sparkles size={16} className="text-blue-400 animate-pulse" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">AI Strategic Verdict</span>
                   </div>
                   <h4 className="text-2xl font-black mb-4 leading-tight">حالة المشروع:<br/><span className="text-blue-400">جاهز للاستثمار</span></h4>
                   <p className="text-slate-400 font-bold leading-relaxed text-sm mb-10 opacity-80 italic">
                      "مشروعك يتمتع بميزة المحيط الأزرق. التوازن بين الكفاءة المالية وسرعة التنفيذ يجعلك الخيار الأول للمستثمرين."
                   </p>
                   <div className="mt-auto">
                      <button className="w-full py-5 bg-white text-slate-900 rounded-2xl font-black text-sm shadow-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3 active:scale-95">
                         <span>استخراج التقرير التعزيلي</span>
                         <ArrowUpRight size={18} strokeWidth={3} />
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </main>

      {/* 3. INTERACTIVE SECTION */}
      <section className="bg-white border-y border-slate-100 py-12 px-6 lg:px-12">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 mb-10 bg-slate-50 p-1.5 rounded-2xl w-fit mx-auto border border-slate-100">
               {Object.keys(SEGMENT_CONTENT).map(id => (
                  <button 
                    key={id} 
                    onClick={() => setActiveSegment(id)}
                    className={`px-6 py-2.5 rounded-xl text-[10px] font-black transition-all ${activeSegment === id ? 'bg-white text-blue-600 shadow-sm border border-slate-100' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                     {id === 'market' ? 'تحليل السوق' : id === 'finance' ? 'المحاكاة المالية' : id === 'execution' ? 'خارطة التوسع' : 'إدارة المخاطر'}
                  </button>
               ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-500" key={activeSegment}>
               <div className="bg-[#F8FAFC] border border-slate-100 rounded-[2.5rem] p-8 lg:p-10">
                  <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">{content.icon}</div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{content.title}</h3>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed mb-8 opacity-80">{content.description}</p>
                  <div className="flex items-center gap-3 pt-6 border-t border-slate-200/50">
                     <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full transition-all duration-1000" style={{ width: `${content.confidence}%` }} />
                     </div>
                     <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest shrink-0">دقة التحليل: {content.confidence}%</span>
                  </div>
               </div>

               <div className="space-y-3">
                  {content.actions.map((act: any, i: number) => (
                    <div key={i} className="bg-white border border-slate-100 p-4 rounded-xl flex items-center gap-4 hover:bg-slate-50 transition-all cursor-pointer shadow-sm">
                       <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">{act.icon}</div>
                       <div className="text-right">
                          <h4 className="text-xs font-black text-slate-900 mb-0.5">{act.title}</h4>
                          <p className="text-[10px] text-slate-500 font-bold opacity-70">{act.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

// --- Viewport Optimized Helper Components ---

const DashMetric = ({ label, value, icon, color }: any) => {
  const colorMap: any = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    rose: 'bg-rose-50 text-rose-600 border-rose-100',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  };
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-all">
       <div className={`w-8 h-8 rounded-lg ${colorMap[color] || colorMap.blue} flex items-center justify-center mb-4 border`}>{icon}</div>
       <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</div>
       <div className="text-lg font-black text-slate-900">{value}</div>
    </div>
  );
};

const RadarChartEnhanced = () => {
  const axes = [
    { label: 'المالية', x: 50, y: 10 },
    { label: 'السوق', x: 92, y: 42 },
    { label: 'الفريق', x: 75, y: 88 },
    { label: 'التقنية', x: 25, y: 88 },
    { label: 'النمو', x: 8, y: 42 }
  ];
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
       <svg className="w-full h-full text-slate-200" viewBox="0 0 100 100">
          {[20, 40, 60, 80, 100].map(r => <circle key={r} cx="50" cy="50" r={r/2} fill="none" stroke="currentColor" strokeWidth="0.8" />)}
          {axes.map((ax, i) => (
             <React.Fragment key={i}>
                <line x1="50" y1="50" x2={ax.x} y2={ax.y} stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                <text x={ax.x} y={ax.y > 50 ? ax.y + 6 : ax.y - 4} textAnchor="middle" className="text-[4.5px] font-black fill-slate-500 tracking-tighter" style={{ direction: 'rtl' }}>{ax.label}</text>
             </React.Fragment>
          ))}
          {/* Average Baseline */}
          <polygon points="50,25 80,45 65,75 35,75 20,45" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 2" />
          {/* Project Area */}
          <polygon points="50,15 90,45 75,85 25,85 10,45" fill="rgba(37,99,235,0.08)" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
          {[ [50,15], [90,45], [75,85], [25,85], [10,45] ].map((p, i) => (
             <circle key={i} cx={p[0]} cy={p[1]} r="1.5" fill="#2563eb" />
          ))}
       </svg>
    </div>
  );
};

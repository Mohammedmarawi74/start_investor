import React from 'react';
import * as Lucide from 'lucide-react';
import * as Charts from '../components/AnalysisUI';

// --- Types & Interfaces ---
interface RadarData {
  tech: number;
  market: number;
  team: number;
  financial: number;
  operations: number;
}

interface AnalysisData {
  score: number;
  opportunityCost: any;
  radarData: RadarData;
  strategicAlpha?: {
    title: string;
    insight: string;
  };
  insights?: {
    mainQuote: string;
    protectionScore: number;
    advantageSignal: string;
  };
}

interface StrategicPulseProps {
  analysis: AnalysisData;
}

/* ==========================================================================
   Shared UI Components (Design System)
   ========================================================================== */

const Card = ({ children, className = "", variant = "glass" }: any) => {
  const variants = {
    glass: "bg-white border border-slate-100 shadow-sm",
    dark: "bg-slate-950 text-white border border-slate-800 shadow-2xl",
    indigo: "bg-gradient-to-br from-indigo-600 to-indigo-800 text-white shadow-xl"
  };

  return (
    <div className={`rounded-[1.5rem] overflow-hidden transition-all duration-500 ${variants[variant as keyof typeof variants]} ${className}`}>
      {children}
    </div>
  );
};

const Badge = ({ children, variant = "indigo" }: any) => {
  const styles = {
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    amber: "bg-amber-50 joint-amber-500/10 text-amber-500 border-amber-500/20"
  };
  
  return (
    <span className={`px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-wider border ${styles[variant as keyof typeof styles]}`}>
      {children}
    </span>
  );
};

/* ==========================================================================
   Sub-Components (Downscaled)
   ========================================================================== */

// 1. Radar Analysis Section (Compact version to match others)
const RadarSection: React.FC<{ analysis: AnalysisData }> = ({ analysis }) => (
  <Card className="p-5 flex flex-col justify-between group h-full">
    <div className="space-y-3 text-right">
      <div className="flex justify-between items-start">
        <Badge>Strategic Pulse</Badge>
        <div className="bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-xl text-center">
            <div className="text-[7px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">مؤشر النضج</div>
            <div className="text-sm font-black text-indigo-600 tabular-nums leading-none">{(analysis.score * 0.85).toFixed(1)}%</div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-black text-slate-900 tracking-tight leading-tight">تحليل البصمة الاستراتيجية</h3>
        <p className="text-slate-500 text-[10px] leading-tight mt-1">توازن القوى بين المحاور الخمسة.</p>
      </div>
    </div>

    <div className="w-full flex justify-center py-2 bg-slate-50/50 rounded-2xl scale-[0.8] origin-center -my-6 transition-transform group-hover:scale-[0.85]">
        <Charts.StrategicRadar
          values={[
            analysis.radarData?.tech || 0,
            analysis.radarData?.market || 0,
            analysis.radarData?.team || 0,
            analysis.radarData?.financial || 0,
            analysis.radarData?.operations || 0,
          ]}
          labels={['التقنية', 'السوق', 'الفريق', 'المالية', 'العمليات']}
        />
    </div>
  </Card>
);

// 2. Alpha Advantage Card (Downscaled)
const AlphaCard: React.FC<{ data: any }> = ({ data }) => (
  <Card variant="indigo" className="relative p-5 group flex flex-col justify-between">
    <Lucide.Lightbulb 
      size={80} 
      className="absolute -bottom-4 -right-4 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" 
    />
    <div className="relative z-10 space-y-3">
      <div className="space-y-1.5">
        <span className="text-[9px] font-bold text-indigo-200 uppercase tracking-[0.2em]">Strategic Alpha</span>
        <h4 className="text-md font-bold">الميزة التنافسية الخفية</h4>
        <p className="text-indigo-100/80 text-[11px] italic leading-relaxed border-r-2 border-indigo-400/50 pr-3">
          "{data?.insight || "سرعتك في التنفيذ هي أصلك الاستراتيجي الأهم حالياً."}"
        </p>
      </div>
    </div>
    <div className="relative z-10 mt-auto pt-4 text-[8px] font-bold text-indigo-300/60 uppercase tracking-widest">
      System Intelligence Active
    </div>
  </Card>
);

// 3. Command Insight Section (Downscaled)
const CommandInsight: React.FC<{ insights: any }> = ({ insights }) => (
  <Card variant="dark" className="relative p-6 lg:p-8 border-r-[6px] border-indigo-500">
    <div className="absolute inset-0 opacity-10 pointer-events-none" 
         style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 0.5px, transparent 0)`, backgroundSize: '16px 16px' }}>
    </div>

    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-6">
      <div className="space-y-3 flex-1 text-right">
        <div className="flex items-center gap-2 justify-end">
          <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest">Strategic Intelligence</span>
          <div className="p-1.5 bg-indigo-500/10 rounded-lg text-indigo-400">
            <Lucide.Cpu size={16} />
          </div>
        </div>
        <blockquote className="text-md lg:text-lg font-medium text-slate-100 leading-snug italic font-arabic">
          "{insights?.mainQuote || "تحويل الموارد المتاحة إلى نظام استخباراتي نشط هو مفتاح الانتصار."}"
        </blockquote>
      </div>

      <div className="flex flex-row lg:flex-col gap-2 w-full lg:w-auto shrink-0">
        <div className="flex-1 bg-white/5 border border-white/10 px-3 py-2 rounded-xl text-center">
          <div className="text-[8px] text-slate-500 uppercase mb-0.5">إشارة التفوق</div>
          <div className="text-emerald-400 font-bold text-xs">{insights?.advantageSignal || "تعطيل المنافسة"}</div>
        </div>
        <div className="flex-1 bg-white/5 border border-white/10 px-3 py-2 rounded-xl text-center">
          <div className="text-[8px] text-slate-500 uppercase mb-0.5">تأمين المخاطر</div>
          <div className="text-amber-400 font-bold text-xs">محمي {insights?.protectionScore || 84}%</div>
        </div>
      </div>
    </div>

    <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex wrap justify-between items-center gap-4">
      <span className="text-[9px] text-slate-500 font-mono tracking-tighter">CORE_V4.2 // SECURE</span>
      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-white hover:text-slate-950 transition-all duration-300 rounded-lg text-[10px] font-bold shadow-lg group">
        تحميل التقرير
        <Lucide.ArrowDownToLine size={14} className="group-hover:translate-y-0.5 transition-transform" />
      </button>
    </div>
  </Card>
);

/* ==========================================================================
   Main Tab Component
   ========================================================================== */

export const StrategicPulseTab: React.FC<StrategicPulseProps> = ({ analysis }) => {
  if (!analysis) return null;

  return (
    <div className="max-w-[1200px] mx-auto space-y-6 p-4 animate-in fade-in slide-in-from-bottom-4 duration-1000" dir="rtl">
      
      {/* Dynamic Grid: All small cards aligned */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <RadarSection analysis={analysis} />
        
        <Charts.OpportunityCostCard data={analysis.opportunityCost} />
        
        <AlphaCard data={analysis.strategicAlpha} />
      </div>

      {/* Full Width Insights */}
      <CommandInsight insights={analysis.insights} />
      
    </div>
  );
};
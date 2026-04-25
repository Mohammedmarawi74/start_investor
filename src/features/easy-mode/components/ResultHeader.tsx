import React from "react";
import * as Lucide from "lucide-react";

interface ResultHeaderProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const TABS = [
  { id: "strategic_pulse", label: "النبض الاستراتيجي", shortLabel: "النبض", icon: Lucide.Activity },
  { id: "financial_viability", label: "التحليل المالي", shortLabel: "المالي", icon: Lucide.Coins },
  { id: "execution_path", label: "مسار التنفيذ", shortLabel: "التنفيذ", icon: Lucide.Compass },
  { id: "growth_plan", label: "خارطة النمو", shortLabel: "النمو", icon: Lucide.TrendingUp },
  { id: "revenue_acceleration", label: "خطة الانطلاق", shortLabel: "الانطلاق", icon: Lucide.Zap },
  { id: "final_decision", label: "الاستنتاج النهائي", shortLabel: "النتيجة", icon: Lucide.CheckCircle2 },
];

export const ResultHeader: React.FC<ResultHeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="result-header-wrapper w-full bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40 shadow-2xl flex-shrink-0" dir="rtl">
      <div className="tabs-container flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 px-3 sm:px-6 py-2 sm:py-3 w-full" dir="rtl">
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(i)}
            className={`tab-button flex items-center gap-1.5 sm:gap-2.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl border-2 transition-all duration-300 flex-shrink-0 min-h-[42px] sm:min-h-[48px] whitespace-nowrap relative group ${
              activeTab === i
                ? "bg-indigo-600/20 border-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                : "bg-white/5 border-transparent text-slate-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            <tab.icon size={16} strokeWidth={activeTab === i ? 3 : 2} className={`transition-transform duration-300 ${activeTab === i ? "scale-110" : "group-hover:scale-110"}`} />
            <span className="tab-label text-[11px] sm:text-sm font-black tracking-tight">
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.shortLabel}</span>
            </span>
            {activeTab === i && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

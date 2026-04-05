import React from "react";
import * as Lucide from "lucide-react";
import { TOKENS } from "../result_components/CardDesignSystem";

interface ResultHeaderProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const TABS = [
  { id: "strategic_pulse", label: "النبض الاستراتيجي", icon: "Activity" },
  { id: "financial_viability", label: "التحليل المالي", icon: "Coins" },
  { id: "execution_path", label: "مسار التنفيذ", icon: "Compass" },
  { id: "growth_plan", label: "خارطة النمو", icon: "TrendingUp" },
  { id: "revenue_acceleration", label: "خطة الانطلاق", icon: "Zap" },
  { id: "final_decision", label: "الاستنتاج النهائي", icon: "CheckCircle2" },
];

export const ResultHeader: React.FC<ResultHeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div style={{ 
      background: "#fff", 
      borderBottom: "1px solid #e2e8f0", 
      padding: "0 40px", 
      height: "80px", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ width: 40, height: 40, borderRadius: "10px", background: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
           <Lucide.LayoutDashboard size={24} />
        </div>
        <div>
          <h2 style={{ fontSize: "16px", fontWeight: 900, color: "#0f172a", margin: 0 }}>مختبر الاستثمار الذكي</h2>
          <p style={{ fontSize: "11px", color: TOKENS.colors.text.muted, margin: "2px 0 0", fontWeight: 700 }}>تحليل البيانات في الوقت الفعلي</p>
        </div>
      </div>

      <nav style={{ display: "flex", gap: "8px", height: "100%", alignItems: "center" }}>
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(i)}
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "10px", 
              padding: "10px 18px", 
              borderRadius: "12px", 
              border: "none", 
              background: activeTab === i ? "#eff6ff" : "transparent",
              color: activeTab === i ? "#3b82f6" : "#64748b",
              fontWeight: activeTab === i ? 900 : 700,
              fontSize: "13.5px",
              cursor: "pointer",
              transition: "all 0.3s",
              position: "relative"
            }}
          >
            {React.createElement((Lucide as any)[tab.icon], { size: 18, strokeWidth: activeTab === i ? 2.5 : 2 })}
            <span>{tab.label}</span>
            
            {activeTab === i && (
              <div style={{ 
                position: "absolute", 
                bottom: "-14px", 
                left: "20%", 
                right: "20%", 
                height: "3px", 
                background: "#3b82f6", 
                borderRadius: "50px 50px 0 0" 
              }} />
            )}
          </button>
        ))}
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
         <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b" }}>
            <Lucide.Bell size={18} />
         </div>
         <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b" }}>
            <Lucide.Settings size={18} />
         </div>
      </div>
    </div>
  );
};

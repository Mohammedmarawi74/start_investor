import React, { useState } from 'react';
import * as Lucide from "lucide-react";
import { ResultHeader } from "./components/ResultHeader";
import { StrategicPulseTab } from "./tabs/StrategicPulseTab";
import { FinancialViabilityTab } from "./tabs/FinancialViabilityTab";
import { ExecutionPathTab } from "./tabs/ExecutionPathTab";
import { GrowthPlanTab } from "./tabs/GrowthPlanTab";
import { RevenueAccelerationTab } from "./tabs/RevenueAccelerationTab";
import { FinalDecisionTab } from "./tabs/FinalDecisionTab";

const CHECKLIST_DATA = {
  setup: {
    id: "setup",
    label: "التجهيز والترخيص",
    icon: "🏗️",
    color: "#3b82f6",
    items: [
      { id: "s1", label: "التراخيص القانونية والسجل التجاري", category: "قانوني", days: 10 },
      { id: "s2", label: "فتح حسابات بنكية تجارية", category: "مالي", days: 5 },
      { id: "s3", label: "تأجير المساحة أو المتجر الرقمي", category: "عقاري", days: 14 }
    ]
  },
  marketing: {
    id: "marketing",
    label: "التسويق والهوية",
    icon: "📣",
    color: "#8b5cf6",
    items: [
      { id: "m1", label: "هوية بصرية متكاملة (Logo & Style)", category: "براند", days: 7 },
      { id: "m2", label: "تجهيز حملة التواصل الاجتماعي", category: "إعلان", days: 10 }
    ]
  },
  launch: {
    id: "launch",
    label: "الانطلاق والنمو",
    icon: "🚀",
    color: "#10b981",
    items: [
      { id: "l1", label: "حفل انطلاق تجريبي (Soft Launch)", category: "تشغيل", days: 3 },
      { id: "l2", label: "جمع التغذية الراجعة (Feedback)", category: "تطوير", days: 7 }
    ]
  }
};

export default function ResultPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeScenario, setActiveScenario] = useState<"optimistic" | "pessimistic">("optimistic");
  const [answers, setAnswers] = useState<any>(null);
  const [checklistStep, setChecklistStep] = useState<"setup" | "marketing" | "launch">("setup");
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});
  const [isActivating, setIsActivating] = useState(false);
  
  // 🧪 Independent generation state per laboratory
  const [generatedLabs, setGeneratedLabs] = useState<Record<string, boolean>>({});

  const handleGenerate = (vals: any) => {
    const labIds = ["strategic_pulse", "financial_viability", "execution_path", "growth_plan", "revenue_acceleration", "final_decision"];
    const currentLabId = labIds[activeTab];
    setAnswers(vals);
    setGeneratedLabs(prev => ({ ...prev, [currentLabId]: true }));
  };

  const handleActivate = () => {
    setIsActivating(true);
    setTimeout(() => {
      setIsActivating(false);
    }, 2400);
  };

  const incomeProjection = [
    { month: 'الشهر 1', realistic: 45000, target: 50000 },
    { month: 'الشهر 2', realistic: 52000, target: 60000 },
    { month: 'الشهر 3', realistic: 48000, target: 75000 },
    { month: 'الشهر 4', realistic: 61000, target: 90000 },
    { month: 'الشهر 5', realistic: 55000, target: 110000 },
    { month: 'الشهر 6', realistic: 67000, target: 130000 },
  ];

  const scenarios = {
    optimistic: { irr: "34%", payback: "14 شهر", roi: "280%", growth: "+12% شهرياً" },
    pessimistic: { irr: "12%", payback: "26 شهر", roi: "95%", growth: "+3% شهرياً" }
  };

  const uvpData = [
    { axis: 'السعر', value: 85, fullMark: 100 },
    { axis: 'الجودة', value: 92, fullMark: 100 },
    { axis: 'السرعة', value: 70, fullMark: 100 },
    { axis: 'التقنية', value: 95, fullMark: 100 },
    { axis: 'الوصول', value: 65, fullMark: 100 },
  ];

  const renderTabContent = () => {
    const isLabGenerated = (id: string) => !!generatedLabs[id];
    switch (activeTab) {
      case 0: return <StrategicPulseTab 
                        isGenerated={isLabGenerated("strategic_pulse")}
                        onGenerate={handleGenerate}
                        incomeProjection={incomeProjection}
                        activeScenario={activeScenario}
                        setActiveScenario={setActiveScenario}
                        scenarios={scenarios}
                        uvpData={uvpData}
                        checklistStep={checklistStep}
                        setChecklistStep={setChecklistStep}
                        completedItems={completedItems}
                        toggleItem={(id) => setCompletedItems(p => ({...p, [id]: !p[id]}))}
                        isActivating={isActivating}
                        handleActivate={handleActivate}
                        checklistData={CHECKLIST_DATA}
                        answers={answers}
                     />;
      case 1: return <FinancialViabilityTab 
                        isGenerated={isLabGenerated("financial_viability")}
                        onGenerate={handleGenerate}
                        incomeProjection={incomeProjection}
                     />;
      case 2: return <ExecutionPathTab 
                        isGenerated={isLabGenerated("execution_path")}
                        onGenerate={handleGenerate}
                        checklistStep={checklistStep}
                        setChecklistStep={setChecklistStep}
                        completedItems={completedItems}
                        toggleItem={(id) => setCompletedItems(p => ({...p, [id]: !p[id]}))}
                        isActivating={isActivating}
                        handleActivate={handleActivate}
                        checklistData={CHECKLIST_DATA}
                     />;
      case 3: return <GrowthPlanTab 
                        isGenerated={isLabGenerated("growth_plan")}
                        onGenerate={handleGenerate}
                     />;
      case 4: return <RevenueAccelerationTab 
                        isGenerated={isLabGenerated("revenue_acceleration")}
                        onGenerate={handleGenerate}
                     />;
      case 5: return <FinalDecisionTab 
                        isGenerated={isLabGenerated("final_decision")}
                        onGenerate={handleGenerate}
                     />;
      default: return null;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", background: "#f8fafc", overflow: "hidden" }}>
      
      {/* 🚀 Compact Intelligence Banner (Wide Header) */}
      <div style={{ 
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", 
        padding: "24px 40px", 
        width: "100%",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}>
        <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, background: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)", opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "12px" }}>
              <div style={{ 
                width: "48px", 
                height: "48px", 
                background: "rgba(99, 102, 241, 0.15)", 
                borderRadius: "15px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: "#6366f1", 
                border: "1px solid rgba(99, 102, 241, 0.3)",
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)"
              }}>
                <Lucide.Rocket size={26} fill="currentColor" />
              </div>
              <h1 style={{ fontSize: "32px", fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>مسار التنفيذ – الوضع السهل (Easy Mode)</h1>
            </div>
            <p style={{ fontSize: "15px", color: "#94a3b8", fontWeight: 600, margin: 0, maxWidth: "800px", lineHeight: "1.6" }}>
              كل خطوة مُبسطة مع تلميحات تعليمية وسهلة الاختيار لتوجيهك خطوة بخطوة نحو تنفيذ مشروعك بثقة، مع إجابات سريعة تساعد الذكاء على توليد خطة عملية واضحة.
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ 
              background: "linear-gradient(90deg, #6366f1, #8b5cf6, #d946ef)", 
              border: "1px solid rgba(255, 255, 255, 0.2)", 
              borderRadius: "100px", 
              padding: "7px 18px", 
              fontSize: "12px", 
              fontWeight: 900, 
              color: "#fff", 
              alignSelf: "center", 
              marginRight: 12,
              boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4), 0 0 20px rgba(168, 85, 247, 0.2)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "default"
            }}>
               <Lucide.Sparkles size={14} fill="currentColor" />
               <span>الوضع السهل</span>
            </div>
            <button style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "8px 18px", borderRadius: "12px", fontSize: "12px", fontWeight: 800 }}>تصدير PDF</button>
            <button style={{ background: "#6366f1", border: "none", color: "#fff", padding: "8px 22px", borderRadius: "12px", fontSize: "12px", fontWeight: 800, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.2)" }}>مشاركة التقرير</button>
          </div>
        </div>
      </div>

      <ResultHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main style={{ flex: 1, overflowY: "auto", padding: "32px 40px", position: "relative" }}>
        <div style={{ maxWidth: "1500px", margin: "0 auto" }}>
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
}

const SidebarIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
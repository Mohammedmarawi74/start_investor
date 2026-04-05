import { useState } from "react";
import React from 'react';
import { ChefHat, TrendingUp, TrendingDown, Flame, Rocket } from "lucide-react";

// Import modular components
import { DecisionMemoCard } from "./result_components/DecisionMemoCard";
import { CriticalBottleneckCard } from "./result_components/CriticalBottleneckCard";
import { KpiOverview } from "./result_components/KpiOverview";
import { RevenueAccelerationCard } from "./result_components/RevenueAccelerationCard";
import { ExecutionPathCard } from "./result_components/ExecutionPathCard";
import { NextActionCard } from "./result_components/NextActionCard";
import { IncomeProjectionSection } from "./result_components/IncomeProjectionSection";
import { ScenarioSimulatorSection } from "./result_components/ScenarioSimulatorSection";
import { GrowthChecklistSection } from "./result_components/GrowthChecklistSection";
import { UvpMapSection } from "./result_components/UvpMapSection";
import { TOKENS } from "./result_components/CardDesignSystem";

/* ─── ASSUMED USER INPUTS ───────────────────────────────────────
   القطاع     : مطعم (خدمة محلية)
   الموقع     : الرياض، السعودية
   الميزانية  : $5,000
   الوقت      : 40 ساعة/أسبوع
   المهارة    : إداري (بدون خبرة تقنية)
   الطموح     : $6,000/شهر
   المخاوف    : منافسة عالية + أزمة سيولة
   المرحلة    : بداية التلخيص
──────────────────────────────────────────────────────────────── */

const USER = {
  sector: "مطعم",
  city: "الرياض",
  budget: 5000,
  hoursPerWeek: 40,
  skill: "إداري",
  targetMonthly: 6000,
  concerns: ["منافسة عالية", "أزمة سيولة"],
  stage: "بداية التلخيص",
};

// ── بيانات المخطط: توقع الدخل الشهري الواقعي
const incomeProjection = [
  { month: "م1", realistic: 0, target: USER.targetMonthly },
  { month: "م2", realistic: 200, target: USER.targetMonthly },
  { month: "م3", realistic: 600, target: USER.targetMonthly },
  { month: "م4", realistic: 1100, target: USER.targetMonthly },
  { month: "م5", realistic: 1700, target: USER.targetMonthly },
  { month: "م6", realistic: 2100, target: USER.targetMonthly },
  { month: "م7", realistic: 2500, target: USER.targetMonthly },
  { month: "م8", realistic: 2900, target: USER.targetMonthly },
  { month: "م9", realistic: 3100, target: USER.targetMonthly },
  { month: "م10", realistic: 3200, target: USER.targetMonthly },
  { month: "م11", realistic: 3300, target: USER.targetMonthly },
  { month: "م12", realistic: 3200, target: USER.targetMonthly },
];

const UVP_DATA = [
  { name: 'السعر',   you: 85, market: 60, color: "#6366f1" },
  { name: 'الجودة',  you: 95, market: 75, color: "#16a34a" },
  { name: 'السرعة',  you: 65, market: 85, color: "#f97316" },
  { name: 'التجربة', you: 90, market: 55, color: "#e11d48" },
];

const SCENARIOS = {
  optimistic: {
    id: "optimistic",
    title: "السيناريو المتفائل (سوق نشط)",
    revenue: "+25%",
    margin: "42%",
    payback: "5.5 أشهر",
    risk: "منخفض جداً",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    desc: "في حال قبول الفكرة سريعاً في الرياض وتميزك بالجودة. الطلبات اليومية تتجاوز 45 طلباً من الشهر الأول.",
    icon: <TrendingUp size={18} />
  },
  pessimistic: {
    id: "pessimistic",
    title: "السيناريو الحذر (تحديات تشغيلية)",
    revenue: "-15%",
    margin: "28%",
    payback: "14 شهراً",
    risk: "مرتفع (يحتاج سيولة)",
    color: "#dc2626",
    bg: "#fff1f2",
    border: "#fecdd3",
    desc: "بسبب المنافسة الشديدة أو ارتفاع أسعار الموردين. ستحتاج لسيولة إضافية للبقاء في السوق بعد الشهر السادس.",
    icon: <TrendingDown size={18} />
  }
};

const CHECKLIST_DATA = {
  setup: { id: "setup", label: "التشغيل", icon: <ChefHat size={16} />, color: "#6366f1", bg: "#eef2ff", items: ["حجز الاسم التجاري والسجل (يومي 1-3)", "اعتماد المنيو والموردين (يومي 4-10)", "تجهيز الموقع والمعدات (يومي 11-25)", "استخراج التراخيص البلدية (يومي 15-30)"] },
  marketing: { id: "marketing", label: "التسويق", icon: <Flame size={16} />, color: "#f97316", bg: "#fff7ed", items: ["فتح حسابات TikTok و Instagram (يومي 2)", "تصوير كواليس التجهيز (يومي 10-20)", "حملة 'قريباً في الرياض' (يومي 21-25)", "توزيع عينات للمؤثرين المحليين (يومي 26-29)"] },
  launch: { id: "launch", label: "الإطلاق", icon: <Rocket size={16} />, color: "#16a34a", bg: "#f0fdf4", items: ["التسجيل في جاهز وهنقرستيشن (يوم 15)", "تدريب الفريق على معايير الجودة (يوم 25)", "الافتتاح التجريبي (Soft Launch) (يوم 28)", "بداية العمل الرسمي (Grand Opening) (يوم 30)"] }
};

export default function RestaurantInsightsPage() {
  const [activeScenario, setActiveScenario] = useState<"optimistic" | "pessimistic">("optimistic");
  const [checklistStep, setChecklistStep] = useState<"setup" | "marketing" | "launch">("setup");
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});
  const [isActivating, setIsActivating] = useState(false);

  const handleActivate = () => {
    setIsActivating(true);
    setTimeout(() => {
      setIsActivating(false);
      alert("تم تفعيل وضع التنفيذ! سيصلك التقرير قريباً.");
    }, 2400);
  };

  const toggleItem = (itemId: string) => {
    setCompletedItems(prev => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  return (
    <div dir="rtl" className="bg-slate-50 min-h-screen text-slate-900 overflow-y-auto no-scrollbar pb-20">
      <style>{`
        .fade-in { animation: fadeIn 0.5s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* ── HERO ── */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", padding: "36px 20px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, left: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(239,68,68,0.08)" }} />
        <div style={{ position: "absolute", bottom: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(99,102,241,0.08)" }} />
        <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 8, padding: "6px 14px", display: "flex", alignItems: "center", gap: 6 }}>
              <ChefHat size={14} color="#f87171" />
              <span style={{ color: "#f87171", fontSize: 13, fontWeight: 600 }}>مطعم · الرياض</span>
            </div>
            <div style={{ background: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.3)", borderRadius: 8, padding: "6px 14px" }}>
              <span style={{ color: "#fbbf24", fontSize: 13, fontWeight: 600 }}>ميزانية $5,000</span>
            </div>
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(22px,4vw,32px)", fontWeight: 700, lineHeight: 1.35, marginBottom: 12 }}>
            تحليل مشروعك: الصورة الكاملة قبل أول خطوة
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.8, maxWidth: 560 }}>
            بناءً على ميزانيتك، موقعك، وطموحك بـ <strong>$6,000 شهرياً</strong>، إليك تحليلنا الاستراتيجي والميداني لبدء رحلتك بنجاح.
          </p>
        </div>
      </div>

      {/* ── Main Content Container ── */}
      <div style={{ 
        maxWidth: 1000, 
        margin: "-20px auto 0", 
        padding: "0 20px", 
        display: "flex", 
        flexDirection: "column", 
        gap: TOKENS.spacing.pageGap, 
        position: "relative", 
        zIndex: 10 
      }}>
        
        {/* KPI Row */}
        <KpiOverview />

        {/* Tactical Decision */}
        <DecisionMemoCard />

        {/* Risk & Opportunity Analysis */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: TOKENS.spacing.pageGap }}>
          <CriticalBottleneckCard />
          <RevenueAccelerationCard />
        </div>

        {/* Execution Components */}
        <ExecutionPathCard />
        <NextActionCard />

        {/* Advanced Analytics Sections */}
        <IncomeProjectionSection incomeProjection={incomeProjection} />
        
        <ScenarioSimulatorSection 
          activeScenario={activeScenario} 
          setActiveScenario={setActiveScenario} 
          scenarios={SCENARIOS} 
        />

        <GrowthChecklistSection 
          checklistStep={checklistStep}
          setChecklistStep={setChecklistStep}
          completedItems={completedItems}
          toggleItem={toggleItem}
          isActivating={isActivating}
          handleActivate={handleActivate}
          checklistData={CHECKLIST_DATA}
        />

        <UvpMapSection uvpData={UVP_DATA} />

      </div>
    </div>
  );
}
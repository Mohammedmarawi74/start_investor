import React from "react";
import { DollarSign, Calendar, Zap } from "lucide-react";
import { BaseCard, TOKENS } from "./CardDesignSystem";

export const KpiOverview = () => {
  const kpis = [
    { 
      icon: <DollarSign size={20} strokeWidth={2.5} />, 
      label: "دخل متوقع بالشهر 12", 
      value: "$3,200", 
      sub: "مقابل هدفك $6/ألف", 
      color: TOKENS.colors.primary, 
      bg: "#eef2ff",
      status: "فجوة استهداف"
    },
    { 
      icon: <Calendar size={20} strokeWidth={2.5} />, 
      label: "شهر التعادل المتوقع", 
      value: "الشهر 8", 
      sub: "توقع متحفظ وآمن", 
      color: TOKENS.colors.warning, 
      bg: "#fff7ed",
      status: "أمان مالي"
    },
    { 
      icon: <Zap size={20} strokeWidth={2.5} />, 
      label: "نسبة جاهزية المشروع", 
      value: "44%", 
      sub: "تحتاج تحقق ميداني", 
      color: TOKENS.colors.secondary, 
      bg: "#f0fdfa",
      status: "مرحلة التلخيص"
    },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: TOKENS.spacing.pageGap }}>
      {kpis.map((k, i) => (
        <BaseCard 
          key={i} 
          style={{ padding: "24px 20px", borderBottom: `3px solid ${k.color}20` }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
            <div style={{ 
              width: 42, 
              height: 42, 
              borderRadius: "12px", 
              background: k.bg, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              color: k.color
            }}>
              {k.icon}
            </div>
            <div style={{ 
              fontSize: TOKENS.typography.label.size, 
              fontWeight: 900, 
              color: k.color, 
              background: `${k.color}10`, 
              padding: "4px 8px", 
              borderRadius: "6px",
              letterSpacing: TOKENS.typography.label.spacing
            }}>
              {k.status}
            </div>
          </div>
          
          <p style={{ fontSize: "11.5px", fontWeight: 700, color: TOKENS.colors.text.muted, marginBottom: 6 }}>{k.label}</p>
          <p style={{ fontSize: "24px", fontWeight: 900, color: TOKENS.colors.text.title, marginBottom: 4, letterSpacing: "-0.01em" }}>{k.value}</p>
          <p style={{ fontSize: "11px", color: TOKENS.colors.text.muted, fontWeight: 600 }}>{k.sub}</p>
        </BaseCard>
      ))}
    </div>
  );
};


import React from 'react';
import { THEME } from '../constants';
import { Badge } from './CommonUI';
import * as Lucide from 'lucide-react';

// --- Radar Chart (Light Mode Optimized) ---
export const RadarChart: React.FC<{ data: number[], labels: string[] }> = ({ data, labels }) => {
  const size = 220;
  const center = size / 2;
  const radius = size * 0.35;
  const angleStep = (Math.PI * 2) / labels.length;

  const points = data.map((val, i) => {
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
    <div style={{ position: "relative", width: "100%", height: 260, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {gridPoints.map((poly, i) => (
          <polygon key={i} points={poly} fill="none" stroke="#E2E8F0" strokeWidth="1" />
        ))}
        {Array.from({ length: labels.length }).map((_, i) => (
          <line key={i} x1={center} y1={center} 
            x2={center + radius * Math.sin(i * angleStep)} 
            y2={center - radius * Math.cos(i * angleStep)} 
            stroke="#E2E8F0" strokeWidth="1" />
        ))}
        <polygon points={points} fill="rgba(16, 185, 129, 0.12)" stroke={THEME.accent} strokeWidth="2.5" />
        {labels.map((label, i) => {
             const x = center + (radius + 28) * Math.sin(i * angleStep);
             const y = center - (radius + 28) * Math.cos(i * angleStep);
             return (
               <text key={i} x={x} y={y} fill={THEME.textMuted} fontSize="10" fontWeight="700" textAnchor="middle" alignmentBaseline="middle" fontFamily={THEME.fontDisplay}>{label}</text>
             );
        })}
      </svg>
    </div>
  );
};

// --- Doughnut Chart ---
export const DoughnutChart: React.FC<{ segments: { val: number, color: string, label: string }[] }> = ({ segments }) => {
  const size = 180;
  const radius = 65;
  const innerRadius = 45;
  const center = size / 2;
  const total = segments.reduce((acc, s) => acc + s.val, 0);
  let startAngle = 0;

  return (
    <div style={{ position: "relative", width: "100%", height: 200, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {segments.map((s, i) => {
          const angle = (s.val / total) * 360;
          const x1 = center + radius * Math.sin((startAngle * Math.PI) / 180);
          const y1 = center - radius * Math.cos((startAngle * Math.PI) / 180);
          const x2 = center + radius * Math.sin(((startAngle + angle) * Math.PI) / 180);
          const y2 = center - radius * Math.cos(((startAngle + angle) * Math.PI) / 180);
          const largeArcFlag = angle > 180 ? 1 : 0;
          const path = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
          startAngle += angle;
          return <path key={i} d={path} fill="none" stroke={s.color} strokeWidth={radius - innerRadius} strokeLinecap="butt" />;
        })}
      </svg>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center" }}>
          <div style={{ fontSize: 10, color: THEME.textMuted, fontFamily: THEME.fontBody }}>إجمالي</div>
          <div style={{ fontSize: 18, fontWeight: 900, color: THEME.text, fontFamily: THEME.fontDisplay }}>100%</div>
      </div>
    </div>
  );
};

// --- Financials Grid ---
export const FinancialsGrid: React.FC<{ financials: any }> = ({ financials }) => {
  const stats = [
   { label: "التكاليف الثابتة", val: financials.monthlyFixed, icon: Lucide.HardHat, col: THEME.amber },
   { label: "تكلفة العميل (CAC)", val: financials.cac, icon: Lucide.Target, col: THEME.red },
   { label: "قيمة العميل (LTV)", val: financials.Gem, icon: Lucide.Gem, col: THEME.accent },
   { label: "نسبة LTV:CAC", val: financials.ltvCacRatio, icon: Lucide.TrendingUp, col: '#534ab7' },
   { label: "المصاريف المتغيرة", val: financials.monthlyVariable, icon: Lucide.Package, col: THEME.amber },
   { label: "عمر الميزانية", val: financials.runway, icon: Lucide.Clock, col: THEME.accent },
 ];
 return (
   <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
      {stats.map(({ label, val, icon: Icon, col }) => (
         <div key={label} style={{ background: THEME.bgSecondary, borderRadius: 16, padding: 18, border: `1px solid ${THEME.border}` }}>
           <div style={{ padding: "6px 0", marginBottom: 12 }}><Icon size={20} color={col} /></div>
           <div style={{ fontSize: 18, fontWeight: 900, color: THEME.text, marginBottom: 4, fontFamily: THEME.fontDisplay }}>{val || financials[label] || "—"}</div>
           <div style={{ fontSize: 11, color: THEME.textMuted, fontWeight: 700, fontFamily: THEME.fontBody }}>{label}</div>
         </div>
      ))}
   </div>
 );
};

// --- Obstacles Grid ---
export const ObstaclesGrid: React.FC<{ obstacles: any[] }> = ({ obstacles }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
     {obstacles.map((o, i) => (
        <div key={i} style={{ 
          background: o.severity === 'critical' ? THEME.redDim : THEME.amberDim,
          border: `1px solid ${o.severity === 'critical' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)'}`,
          borderRadius: 16, padding: 16 
        }}>
           <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, alignItems: "center" }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: THEME.text, fontFamily: THEME.fontDisplay }}>{o.title}</span>
              <Badge type={o.severity === 'critical' ? 'red' : 'amber'}>{o.severity === 'critical' ? 'حرج' : 'عالٍ'}</Badge>
           </div>
           <p style={{ fontSize: 12, color: THEME.textMuted, lineHeight: 1.6, fontFamily: THEME.fontBody }}>{o.detail}</p>
        </div>
     ))}
  </div>
);

// --- Resources Grid ---
export const ResourcesGrid: React.FC<{ resources: any[] }> = ({ resources }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
    {resources.map((r, i) => (
      <div key={i} style={{ 
        border: `1px solid ${THEME.border}`, 
        borderRight: `4px solid ${r.urgency === 'فوري' ? THEME.red : THEME.amber}`,
        borderRadius: 16, padding: 18, background: THEME.bgCard, boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
      }}>
         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, alignItems: "center" }}>
            <span style={{ fontSize: 14, fontWeight: 800, color: THEME.text, fontFamily: THEME.fontDisplay }}>{r.title}</span>
            <span style={{ fontSize: 10, background: THEME.bgSecondary, padding: "3px 10px", borderRadius: 6, color: THEME.accent, fontWeight: 800, letterSpacing: "0.02em" }}>{r.type.toUpperCase()}</span>
         </div>
         <p style={{ fontSize: 12, color: THEME.textMuted, lineHeight: 1.6, marginBottom: 12, fontFamily: THEME.fontBody }}>{r.why}</p>
         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, fontWeight: 900, color: THEME.gold, fontFamily: THEME.fontBody }}>{r.cost}</span>
            <Badge type={r.urgency === 'فوري' ? 'red' : 'amber'}>{r.urgency}</Badge>
         </div>
      </div>
    ))}
  </div>
);

// --- Risk Matrix ---
export const RiskMatrix: React.FC<{ risks: any[] }> = ({ risks }) => (
  <div style={{ display: "grid", gap: 12 }}>
    {risks.map((r, i) => {
      const isHigh = r.probability === "high";
      return (
        <div key={i} style={{ background: THEME.bgCard, border: `1px solid ${THEME.border}`, borderRadius: 16, padding: 18, boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 800, color: THEME.text, fontFamily: THEME.fontDisplay }}>{r.title}</span>
            <Badge type={isHigh ? 'red' : 'amber'}>{r.probability.toUpperCase()}</Badge>
          </div>
          <p style={{ fontSize: 12, color: THEME.textMuted, lineHeight: 1.6, marginBottom: 10, fontFamily: THEME.fontBody }}>{r.mitigation}</p>
          <div style={{ fontSize: 11, color: isHigh ? THEME.red : THEME.amber, background: isHigh ? THEME.redDim : THEME.amberDim, borderRadius: 8, padding: "6px 12px", display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontFamily: THEME.fontBody }}>
            <Lucide.BellRing size={14} />
            <span>إشارة مبكرة: {r.earlySignal}</span>
          </div>
        </div>
      );
    })}
  </div>
);

// --- Action Timeline ---
export const ActionTimeline: React.FC<{ actionPlan: any }> = ({ actionPlan }) => {
  const phases = [
    { key: "week1", label: "الأسبوع الأول (التأسيس)", icon: Lucide.Zap, col: THEME.red },
    { key: "month1", label: "الشهر الأول (التحقق)", icon: Lucide.Target, col: THEME.amber },
    { key: "month3", label: "3 أشهر (النمو)", icon: Lucide.TrendingUp, col: THEME.accent },
    { key: "month6", label: "6 أشهر (التوسع)", icon: Lucide.Rocket, col: THEME.gold },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, paddingRight: 8 }}>
      {phases.map(({ key, label, icon: Icon, col }, i) => (
        <div key={key} style={{ position: "relative", paddingBottom: 24, borderRight: `2px solid ${i === phases.length - 1 ? 'transparent' : THEME.border}`, paddingRight: 24, marginRight: 8 }}>
           <div style={{ position: "absolute", right: -11, top: 0, width: 20, height: 20, borderRadius: "50%", background: "#FFF", border: `2px solid ${col}`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: col }} />
           </div>
           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <Icon size={16} color={col} />
              <span style={{ fontSize: 13, fontWeight: 900, color: col, fontFamily: THEME.fontDisplay }}>{label}</span>
           </div>
           <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {(actionPlan?.[key] || []).map((a: any, idx: number) => (
                 <div key={idx} style={{ 
                   fontSize: 13, color: THEME.text, padding: "12px 16px", 
                   background: THEME.bgSecondary, borderRadius: 14, 
                   lineHeight: 1.6, border: `1px solid ${THEME.border}`,
                   fontFamily: THEME.fontBody
                 }}>
                   <strong style={{ display: "block", marginBottom: 2, color: THEME.text, fontWeight: 800 }}>{a.action}</strong>
                   <span style={{ color: THEME.textMuted }}>{a.why}</span>
                 </div>
              ))}
           </div>
        </div>
      ))}
    </div>
  );
};

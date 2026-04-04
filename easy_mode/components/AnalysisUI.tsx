
import React, { useState, useMemo } from 'react';
import { THEME } from '../constants';
import { Badge } from './CommonUI';
import * as Lucide from 'lucide-react';

// --- Multidimensional Radar Chart (Tech, Market, Team, Financial, Ops) ---
export const RadarChart: React.FC<{ data: any, labels: string[] }> = ({ data, labels }) => {
  const size = 240;
  const center = size / 2;
  const radius = size * 0.35;
  const angleStep = (Math.PI * 2) / labels.length;

  // Expected labels: ['التقنية','السوق','الفريق','المالية','العمليات']
  const values = [data.tech, data.market, data.team, data.financial, data.operations];

  const points = values.map((val, i) => {
    const r = (val / 100) * radius;
    const x = center + r * Math.sin(i * angleStep);
    const y = center - r * Math.cos(i * angleStep);
    return `${x},${y}`;
  }).join(' ');

  const gridPoints = [25, 50, 75, 100].map(val => {
    const r = (val / 100) * radius;
    return Array.from({ length: labels.length }).map((_, i) => {
      const x = center + r * Math.sin(i * angleStep);
      const y = center - r * Math.cos(i * angleStep);
      return `${x},${y}`;
    }).join(' ');
  });

  return (
    <div style={{ position: "relative", width: "100%", height: 280, display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
           <radialGradient id="radarGrad">
              <stop offset="0%" stopColor={THEME.accent} stopOpacity="0.1" />
              <stop offset="100%" stopColor={THEME.accent} stopOpacity="0.4" />
           </radialGradient>
        </defs>
        {gridPoints.map((poly, i) => (
          <polygon key={i} points={poly} fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray={i === 3 ? "0" : "4 2"} />
        ))}
        {Array.from({ length: labels.length }).map((_, i) => (
          <line key={i} x1={center} y1={center} 
            x2={center + radius * Math.sin(i * angleStep)} 
            y2={center - radius * Math.cos(i * angleStep)} 
            stroke="#E2E8F0" strokeWidth="1" />
        ))}
        <polygon points={points} fill="url(#radarGrad)" stroke={THEME.accent} strokeWidth="3" strokeLinejoin="round" />
        {labels.map((label, i) => {
             const x = center + (radius + 35) * Math.sin(i * angleStep);
             const y = center - (radius + 35) * Math.cos(i * angleStep);
             return (
               <text key={i} x={x} y={y} fill={THEME.text} fontSize="11" fontWeight="900" textAnchor="middle" alignmentBaseline="middle" fontFamily={THEME.fontDisplay}>{label}</text>
             );
        })}
      </svg>
      {Math.min(...values) < 50 && (
         <div style={{ width: "100%", padding: "0 20px", marginTop: 10 }}>
            <div style={{ background: THEME.redDim, padding: 12, borderRadius: 12, fontSize: 11, border: "1px solid rgba(239, 68, 68, 0.1)", color: THEME.red, fontWeight: 700, display: "flex", gap: 8, alignItems: "center" }}>
               <Lucide.AlertCircle size={14} />
               تنبيه: يوجد خلل في التوازن الاستراتيجي؛ جانب {labels[values.indexOf(Math.min(...values))]} ضعيف جداً.
            </div>
         </div>
      )}
    </div>
  );
};

// --- Interactive Financial Sensitivity Analysis ---
export const SensitivitySimulator: React.FC<{ initialCac: number, initialChurn: number }> = ({ initialCac, initialChurn }) => {
   const [cac, setCac] = useState(initialCac);
   const [churn, setChurn] = useState(initialChurn);

   const breakEven = useMemo(() => {
      // Very simple simulation: logic proportional to churn and cac
      const base = 6; // 6 months average
      const cacFactor = (cac / initialCac);
      const churnFactor = (churn / initialChurn);
      return Math.max(1, Math.round(base * cacFactor * churnFactor));
   }, [cac, churn]);

   return (
      <div style={{ background: THEME.bgSecondary, padding: 24, borderRadius: 24, border: `1px solid ${THEME.border}` }}>
         <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
            <Lucide.Zap size={18} color={THEME.blue} />
            محاكي الحساسية المالية (Interactive)
         </div>
         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 24 }}>
            <div style={{ spaceY: 12 }}>
               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: THEME.textMuted }}>تكلفة العميل (CAC): ${cac}</span>
                  <span style={{ fontSize: 11, fontWeight: 900, color: cac > initialCac ? THEME.red : THEME.accent }}>{cac > initialCac ? '▲ مخاطرة' : '▼ تحسن'}</span>
               </div>
               <input type="range" min="10" max="200" value={cac} onChange={(e) => setCac(Number(e.target.value))} style={{ width: "100%", accentColor: THEME.blue }} />
            </div>
            <div style={{ spaceY: 12 }}>
               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: THEME.textMuted }}>معدل الارتداد (Churn): {churn}%</span>
               </div>
               <input type="range" min="1" max="25" value={churn} onChange={(e) => setChurn(Number(e.target.value))} style={{ width: "100%", accentColor: THEME.amber }} />
            </div>
         </div>
         <div style={{ background: "#FFF", padding: 20, borderRadius: 20, display: "flex", alignItems: "center", gap: 20, border: `1px solid ${THEME.border}` }}>
            <div style={{ width: 60, height: 60, borderRadius: 16, background: THEME.blueDim, display: "flex", alignItems: "center", justifyContent: "center", color: THEME.blue }}>
               <Lucide.TrendingDown size={32} />
            </div>
            <div>
               <div style={{ fontSize: 11, fontWeight: 800, color: THEME.textMuted }}>نقطة التعادل المتوقعة (Break-even)</div>
               <div style={{ fontSize: 24, fontWeight: 900, color: THEME.text }}>{breakEven} <span style={{ fontSize: 14 }}>أشهر</span></div>
            </div>
            <div style={{ marginLeft: "auto", fontSize: 11, fontWeight: 700, color: THEME.textMuted, maxWidth: 140, lineHeight: 1.5 }}>
               تغيير هذه العوامل يوضح مدى مرونة نموذج عملك المالي.
            </div>
         </div>
      </div>
   );
};

// --- AI-Driven Gantt Chart (Critical Path) ---
export const SmartGanttChart: React.FC<{ tasks: any[] }> = ({ tasks }) => {
   const totalDays = 60; // 2 month view
   const dayWidth = 100 / totalDays;

   return (
      <div style={{ background: "#FFF", borderRadius: 24, border: `1px solid ${THEME.border}`, padding: 24, overflowX: "auto" }}>
         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <div style={{ fontSize: 16, fontWeight: 900, display: "flex", alignItems: "center", gap: 10 }}>
               <Lucide.LayoutDashboard size={18} color={THEME.accent} />
               خارطة الطريق (Critical Path Chart)
            </div>
            <button style={{ padding: "8px 16px", background: THEME.bgSecondary, border: `1px solid ${THEME.border}`, borderRadius: 12, fontSize: 11, fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
               <Lucide.ExternalLink size={14} />
               تصدير إلى Trello
            </button>
         </div>

         <div style={{ minWidth: 600 }}>
            {/* Timeline header */}
            <div style={{ display: "flex", marginBottom: 12, borderBottom: `1px solid ${THEME.border}`, paddingBottom: 8 }}>
               <div style={{ width: 140 }} />
               <div style={{ flex: 1, display: "flex", justifyContent: "space-between", fontSize: 10, fontWeight: 800, color: THEME.textDim }}>
                  <span>البداية</span>
                  <span>المنتصف (30 يوم)</span>
                  <span>الإطلاق (60 يوم)</span>
               </div>
            </div>

            <div style={{ spaceY: 4 }}>
               {tasks.map((task, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                     <div style={{ width: 140, fontSize: 11, fontWeight: 800, color: THEME.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: 10 }}>
                        {task.task}
                     </div>
                     <div style={{ flex: 1, height: 14, background: "#F8FAFC", borderRadius: 4, position: "relative" }}>
                        <div style={{ 
                           position: "absolute", 
                           right: `${(task.startDay / totalDays) * 100}%`, 
                           width: `${(task.duration / totalDays) * 100}%`,
                           height: "100%",
                           background: task.isCritical ? THEME.red : THEME.accent,
                           borderRadius: 4,
                           boxShadow: task.isCritical ? `0 0 10px rgba(239, 68, 68, 0.3)` : "none",
                           opacity: 0.8
                        }}>
                           {task.isCritical && <div style={{ position: "absolute", top: -8, right: 0, fontSize: 8, background: THEME.red, color: "#FFF", padding: "1px 4px", borderRadius: 4 }}>حرج</div>}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

// --- Hybrid Innovation Model Card ---
export const HybridInnovationCard: React.FC<{ data: any }> = ({ data }) => (
   <div style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)", borderRadius: 28, padding: 32, color: "#FFF", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, background: THEME.accent, borderRadius: "50%", opacity: 0.1, blur: "40px" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
         <div style={{ width: 44, height: 44, background: THEME.accentDim, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(10px)" }}>
            <Lucide.Sparkles size={24} color={THEME.accent} />
         </div>
         <div>
            <div style={{ fontSize: 10, fontWeight: 800, color: THEME.accent, textTransform: "uppercase", letterSpacing: "0.1em" }}>ابتكار تقاطع القطاعات</div>
            <div style={{ fontSize: 18, fontWeight: 900 }}>Blue Ocean Innovation Model</div>
         </div>
      </div>
      <div style={{ spaceY: 16 }}>
         <div style={{ background: "rgba(255,255,255,0.03)", padding: 20, borderRadius: 20, border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ fontSize: 13, fontWeight: 900, color: THEME.accent, marginBottom: 6 }}>النموذج المقترح:</div>
            <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.9 }}>{data.suggestedModel}</p>
         </div>
         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ padding: 16 }}>
               <div style={{ fontSize: 11, fontWeight: 900, color: THEME.blue, marginBottom: 6 }}>لماذا سينجح؟</div>
               <p style={{ fontSize: 12, lineHeight: 1.6, opacity: 0.7 }}>{data.whyItWorks}</p>
            </div>
            <div style={{ padding: 16 }}>
               <div style={{ fontSize: 11, fontWeight: 900, color: THEME.gold, marginBottom: 6 }}>فرصة المحيط الأزرق:</div>
               <p style={{ fontSize: 12, lineHeight: 1.6, opacity: 0.7 }}>{data.blueOceanOpportunity}</p>
            </div>
         </div>
      </div>
   </div>
);

// --- Behavioral Persona Box ---
export const BehavioralPersonaCard: React.FC<{ persona: any }> = ({ persona }) => (
   <div style={{ background: "#FFF", borderRadius: 24, border: `1px solid ${THEME.border}`, padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
         <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, background: THEME.blueDim, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
               <Lucide.UserSearch size={22} color={THEME.blue} />
            </div>
            <div style={{ fontSize: 16, fontWeight: 900 }}>سيكولوجية العميل (Jobs to Be Done)</div>
         </div>
         <div style={{ background: THEME.bgSecondary, padding: "6px 16px", borderRadius: 12, fontSize: 11, fontWeight: 900, color: THEME.blue }}>
            Tone of Voice: {persona.toneOfVoice}
         </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
         <div style={{ padding: 16, background: THEME.bgSecondary, borderRadius: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: THEME.textMuted, marginBottom: 8 }}>السيكوغرافية:</div>
            <p style={{ fontSize: 13, lineHeight: 1.6, fontWeight: 600 }}>{persona.psychographics}</p>
         </div>
         <div style={{ padding: 16, background: THEME.accentDim, borderRadius: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: THEME.accent, marginBottom: 8 }}>المهمة المطلوبة (JTBD):</div>
            <p style={{ fontSize: 13, lineHeight: 1.6, fontWeight: 600 }}>{persona.jobsToBeDone}</p>
         </div>
      </div>

      <div style={{ borderTop: `1px solid ${THEME.border}`, paddingTop: 20 }}>
         <div style={{ fontSize: 12, fontWeight: 900, marginBottom: 16, color: THEME.textMuted }}>خريطة التعاطف (Empathy Map):</div>
         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {[
               { icon: Lucide.Eye, label: "يرى", val: persona.empathyMap.sees, col: THEME.blue },
               { icon: Lucide.Ear, label: "يسمع", val: persona.empathyMap.hears, col: THEME.gold },
               { icon: Lucide.Brain, label: "يشعر", val: persona.empathyMap.feels, col: THEME.accent },
               { icon: Lucide.AlertTriangle, label: "يتألم", val: persona.empathyMap.pains, col: THEME.red }
            ].map((node, i) => (
               <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: `${node.col}11`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px", color: node.col }}>
                     <node.icon size={16} />
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 900, color: THEME.textMuted, marginBottom: 4 }}>{node.label}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, lineHeight: 1.4 }}>{node.val}</div>
               </div>
            ))}
         </div>
      </div>
   </div>
);

// --- Opportunity Cost Logic ---
export const OpportunityCostCard: React.FC<{ data: any }> = ({ data }) => (
   <div style={{ background: THEME.bgSecondary, border: `1px solid ${THEME.border}`, borderRadius: 24, padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
         <div style={{ width: 44, height: 44, background: THEME.amberDim, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lucide.Scale size={22} color={THEME.amber} />
         </div>
         <h4 style={{ fontSize: 16, fontWeight: 900 }}>حساب تكلفة الفرصة البديلة (Build vs Buy)</h4>
      </div>
      <div style={{ display: "flex", gap: 24 }}>
         <div style={{ flex: 1, background: "#FFF", p: 16, borderRadius: 16, padding: 16, border: `1px dashed ${THEME.border}` }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: THEME.textMuted, marginBottom: 8 }}>مقارنة الإنتاج المباشر:</div>
            <p style={{ fontSize: 13, lineHeight: 1.6, fontWeight: 600 }}>{data.buildVsBuy}</p>
         </div>
         <div style={{ width: 140, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", background: THEME.redDim, borderRadius: 16, padding: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 900, color: THEME.red, marginBottom: 4 }}>الخسارة المحتملة:</div>
            <div style={{ fontSize: 18, fontWeight: 900, color: THEME.red }}>{data.calculatedLoss}</div>
         </div>
      </div>
      <div style={{ marginTop: 20, padding: "12px 20px", background: THEME.accentDim, borderRadius: 14, fontSize: 12, fontWeight: 700, color: THEME.accent, display: "flex", gap: 8, alignItems: "center" }}>
         <Lucide.Info size={16} />
         {data.strategicAdvice}
      </div>
   </div>
);

// --- Financials Grid (Legacy support) ---
export const FinancialsGrid: React.FC<{ financials: any }> = ({ financials }) => {
  const stats = [
    { label: "التكاليف الثابتة", val: financials.monthlyFixed, icon: Lucide.Construction, col: THEME.amber },
    { label: "تكلفة العميل (CAC)", val: financials.cac, icon: Lucide.Target, col: THEME.red },
    { label: "قيمة العميل (LTV)", val: financials.ltv, icon: Lucide.Gem, col: THEME.accent },
    { label: "نسبة LTV:CAC", val: financials.ltvCacRatio, icon: Lucide.TrendingUp, col: '#534ab7' },
    { label: "المصاريف المتغيرة", val: financials.monthlyVariable, icon: Lucide.Package, col: THEME.amber },
    { label: "عمر الميزانية", val: financials.runway, icon: Lucide.Clock, col: THEME.accent },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
       {stats.map(({ label, val, icon: Icon, col }) => (
          <div key={label} style={{ background: THEME.bgSecondary, borderRadius: 16, padding: 18, border: `1px solid ${THEME.border}` }}>
            <div style={{ padding: "6px 0", marginBottom: 12 }}><Icon size={20} color={col} /></div>
            <div style={{ fontSize: 18, fontWeight: 900, color: THEME.text, marginBottom: 4, fontFamily: THEME.fontDisplay }}>{val}</div>
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
          <p style={{ fontSize: 12, color: THEME.textMuted, lineHeight: 1.6, marginBottom: 12, fontFamily: THEME.fontBody }}>{r.mitigation}</p>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ fontSize: 11, color: THEME.accent, background: THEME.accentDim, borderRadius: 8, padding: "8px 12px", fontWeight: 800 }}>
                 Plan B: {r.planB || "توسيع قنوات الجلب"}
              </div>
              <div style={{ fontSize: 11, color: THEME.red, background: THEME.redDim, borderRadius: 8, padding: "8px 12px", fontWeight: 800 }}>
                 Kill-switch: {r.killSwitch || "توقف 20% نمو"}
              </div>
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

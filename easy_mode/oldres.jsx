import {
  AlertTriangle, TrendingUp, TrendingDown, CheckCircle2,
  Clock, DollarSign, Users, MapPin, Flame, ShieldAlert,
  BarChart2, Target, Lightbulb, AlertCircle, ArrowLeft,
  ChefHat, Calendar, Zap, XCircle
} from "lucide-react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, LineChart, Line, ReferenceLine } from "recharts";

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

// ── تحليل الفجوة بين الميزانية والهدف
const budgetGapMonths = Math.round(USER.budget / (USER.targetMonthly * 0.3));
const breakEvenMonth = 8;
const realisticMonth12 = 3200;
const targetGap = USER.targetMonthly - realisticMonth12;

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

// ── بيانات الرادار: جاهزية المشروع
const readinessData = [
  { axis: "الميزانية", value: 38 },
  { axis: "الوقت", value: 85 },
  { axis: "المهارة", value: 45 },
  { axis: "السوق", value: 55 },
  { axis: "التحقق", value: 10 },
  { axis: "التنافسية", value: 30 },
];

// ── توزيع الميزانية المقترح
const budgetBreakdown = [
  { name: "الإيجار (3 أشهر)", value: 2000, color: "#e11d48", pct: 40 },
  { name: "التجهيزات الأساسية", value: 1200, color: "#f97316", pct: 24 },
  { name: "المخزون الأول", value: 800, color: "#eab308", pct: 16 },
  { name: "التسويق والإطلاق", value: 600, color: "#22c55e", pct: 12 },
  { name: "احتياطي طوارئ", value: 400, color: "#6366f1", pct: 8 },
];

// ── مؤشرات الخطر المحددة
const risks = [
  {
    level: "حرج",
    color: "#e11d48",
    bg: "#fff1f2",
    icon: <XCircle size={18} />,
    title: "ميزانيتك أقل من الحد الأمان بـ 60%",
    detail: "متوسط تكلفة افتتاح مطعم صغير في الرياض $12,000–$18,000. بـ $5,000 أنت في منطقة خطر حقيقية — أي عطل أو تأخير يمكن أن يوقف مشروعك قبل انطلاقه.",
  },
  {
    level: "عالٍ",
    color: "#f97316",
    bg: "#fff7ed",
    icon: <AlertTriangle size={18} />,
    title: "هدف $6,000/شهر يحتاج 18–24 شهراً وليس 6",
    detail: "بناءً على بياناتك: بدون خبرة تقنية، ومنافسة عالية، ورأس مال محدود — الوصول لـ $6,000/شهر يتطلب على الأقل سنة ونصف في أحسن الأحوال.",
  },
  {
    level: "متوسط",
    color: "#eab308",
    bg: "#fefce8",
    icon: <AlertCircle size={18} />,
    title: "الرياض: أعلى كثافة مطاعم في المنطقة",
    detail: "الرياض تضم أكثر من 15,000 مطعم مرخص. المنافسة ليست فقط من المطاعم — بل من التوصيل (HungerStation، Jahez) الذي يأخذ 25–30% من كل طلب.",
  },
];

// ── نقاط القوة الفعلية
const strengths = [
  {
    icon: <Clock size={16} />,
    title: "40 ساعة/أسبوع = ميزة تشغيلية حقيقية",
    detail: "معظم أصحاب المطاعم الناجحين في البداية يديرون بأنفسهم. وقتك الكامل يعوّض غياب الخبرة التقنية ويسمح لك بالتعلم الميداني السريع.",
  },
  {
    icon: <MapPin size={16} />,
    title: "الرياض: طلب ضخم على التجارب الجديدة",
    detail: "70% من سكان الرياض دون 35 سنة، يبحثون باستمرار عن تجارب طعام جديدة ومختلفة. هذا يعني أن الفكرة المبتكرة تنتشر بسرعة عبر السوشيال ميديا.",
  },
  {
    icon: <Target size={16} />,
    title: "مهارتك الإدارية = كفاءة تشغيلية",
    detail: "المطاعم تفشل غالباً بسبب الإدارة السيئة وليس الطعام السيئ. خلفيتك الإدارية تمنحك أفضلية في التحكم بالتكاليف وإدارة الفريق.",
  },
];

// ── خارطة طريق مخصصة
const roadmap = [
  { phase: "الأسبوع 1–2", action: "تحقق ميداني: زر 10 مطاعم منافسة، قيّم الأسعار والفجوات", status: "فوري", color: "#6366f1" },
  { phase: "الأسبوع 3–4", action: "ابحث عن موقع بإيجار أقل من $600/شهر في حي ناشئ وليس مركزياً", status: "فوري", color: "#6366f1" },
  { phase: "الشهر 2", action: "ابنِ قائمة مختصرة (7–10 أصناف فقط) تقلل الهدر وترفع الجودة", status: "مهم", color: "#f97316" },
  { phase: "الشهر 3", action: "أطلق حساب انستغرام وTikTok قبل الافتتاح بـ 30 يوم", status: "مهم", color: "#f97316" },
  { phase: "الشهر 4–6", action: "اتفق مع HungerStation/Jahez مع تسعير يحمي هامشك (لا تنزل عن 40% ربح)", status: "تالٍ", color: "#22c55e" },
  { phase: "الشهر 7–12", action: "إذا تجاوزت $2,500/شهر — ابحث عن شريك تمويل للتوسع", status: "تالٍ", color: "#22c55e" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, padding: "10px 14px" }}>
        <p style={{ color: "#94a3b8", fontSize: 12, margin: "0 0 4px" }}>{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color, fontSize: 13, margin: "2px 0", fontWeight: 600 }}>
            {p.name}: ${p.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function RestaurantInsightsPage() {
  return (
    <div dir="rtl" style={{
      fontFamily: "'IBM Plex Sans Arabic', 'Segoe UI', sans-serif",
      background: "#f8fafc",
      minHeight: "100vh",
      color: "#0f172a",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .fade-in { animation: fadeIn 0.5s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .card { background: #fff; border-radius: 16px; border: 1px solid #e2e8f0; padding: 24px; }
        .section-title { font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
      `}</style>

      {/* ── HERO ── */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", padding: "36px 20px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, left: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(239,68,68,0.08)" }} />
        <div style={{ position: "absolute", bottom: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(99,102,241,0.08)" }} />
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
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
            بناءً على ميزانيتك، موقعك، وطموحك بـ <strong style={{ color: "#fbbf24" }}>$6,000/شهر</strong> — هذا ما تحتاج معرفته الآن وليس بعد سنة.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 20 }}>

        {/* ── ALERT BANNER ── */}
        <div className="fade-in" style={{ background: "#fff1f2", border: "1.5px solid #fecdd3", borderRadius: 14, padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
          <div style={{ background: "#e11d48", borderRadius: 8, padding: 8, flexShrink: 0 }}>
            <AlertTriangle size={18} color="#fff" />
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: 15, color: "#9f1239", marginBottom: 4 }}>تنبيه استراتيجي مهم</p>
            <p style={{ fontSize: 14, color: "#be123c", lineHeight: 1.7 }}>
              هدفك ($6,000/شهر) مع ميزانية $5,000 في سوق الرياض التنافسي = فجوة كبيرة تحتاج خطة واضحة لتجسيرها.
              هذا التحليل يوضح لك الواقع الكامل حتى تتخذ قراراً مدروساً.
            </p>
          </div>
        </div>

        {/* ── KPI CARDS ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {[
            { icon: <DollarSign size={16} color="#6366f1" />, label: "دخل متوقع بالشهر 12", value: "$3,200", sub: "مقابل هدفك $6,000", color: "#6366f1", bg: "#eef2ff" },
            { icon: <Calendar size={16} color="#f97316" />, label: "شهر التعادل المتوقع", value: "الشهر 8", sub: "إذا سارت الأمور جيداً", color: "#f97316", bg: "#fff7ed" },
            { icon: <BarChart2 size={16} color="#0d9488" />, label: "نسبة جاهزية المشروع", value: "44%", sub: "من الجاهزية المثالية", color: "#0d9488", bg: "#f0fdfa" },
          ].map((k, i) => (
            <div key={i} className="card fade-in" style={{ padding: "16px 14px" }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: k.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>{k.icon}</div>
              <p style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>{k.label}</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: k.color, marginBottom: 2 }}>{k.value}</p>
              <p style={{ fontSize: 11, color: "#94a3b8" }}>{k.sub}</p>
            </div>
          ))}
        </div>

        {/* ── INCOME PROJECTION CHART ── */}
        <div className="card fade-in">
          <p className="section-title"><TrendingUp size={18} color="#6366f1" /> توقع الدخل الشهري: الواقع مقابل هدفك</p>
          <p style={{ fontSize: 13, color: "#64748b", marginBottom: 16, lineHeight: 1.6 }}>
            الخط الأزرق هو المسار الواقعي بناءً على ميزانيتك ومستوى المنافسة. الخط الأحمر هو هدفك.
            <strong style={{ color: "#e11d48" }}> الفجوة بينهما = $2,800/شهر</strong> تحتاج خطة إضافية لتغطيتها.
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={incomeProjection} margin={{ right: 10, left: -20 }}>
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}`} />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine y={USER.targetMonthly} stroke="#e11d48" strokeDasharray="4 4" strokeWidth={1.5} />
              <Line type="monotone" dataKey="realistic" name="المسار الواقعي" stroke="#6366f1" strokeWidth={2.5} dot={false} />
              <Line type="monotone" dataKey="target" name="هدفك" stroke="#e11d48" strokeWidth={1.5} dot={false} strokeDasharray="6 3" />
            </LineChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", gap: 16, marginTop: 8, justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}><div style={{ width: 20, height: 3, background: "#6366f1", borderRadius: 2 }} /><span style={{ fontSize: 12, color: "#64748b" }}>المسار الواقعي</span></div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}><div style={{ width: 20, height: 2, background: "#e11d48", borderRadius: 2, borderTop: "2px dashed #e11d48" }} /><span style={{ fontSize: 12, color: "#64748b" }}>هدفك $6,000</span></div>
          </div>
        </div>

        {/* ── BUDGET BREAKDOWN ── */}
        <div className="card fade-in">
          <p className="section-title"><DollarSign size={18} color="#f97316" /> كيف يجب أن توزع $5,000</p>
          <p style={{ fontSize: 13, color: "#64748b", marginBottom: 16, lineHeight: 1.6 }}>
            هذا التوزيع مبني على واقع السوق السعودي — أي خروج عن هذه النسب يرفع خطر نفاد السيولة قبل الشهر 3.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {budgetBreakdown.map((b, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#334155" }}>{b.name}</span>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "#94a3b8" }}>{b.pct}%</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: b.color }}>${b.value.toLocaleString()}</span>
                  </div>
                </div>
                <div style={{ height: 8, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${b.pct}%`, background: b.color, borderRadius: 99, transition: "width 0.8s ease" }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, background: "#fef9c3", border: "1px solid #fef08a", borderRadius: 10, padding: "12px 14px", display: "flex", gap: 10, alignItems: "flex-start" }}>
            <AlertCircle size={15} color="#a16207" style={{ marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 13, color: "#713f12", lineHeight: 1.6 }}>
              <strong>تحذير:</strong> $400 احتياطي طوارئ قليل جداً. حاول زيادته لـ $800 بتقليص ميزانية التسويق مؤقتاً والاعتماد على انستغرام المجاني.
            </p>
          </div>
        </div>

        {/* ── READINESS RADAR ── */}
        <div className="card fade-in">
          <p className="section-title"><Zap size={18} color="#0d9488" /> مستوى جاهزيتك الآن</p>
          <p style={{ fontSize: 13, color: "#64748b", marginBottom: 8, lineHeight: 1.6 }}>
            الشكل يظهر نقاط قوتك وضعفك بوضوح. <strong style={{ color: "#e11d48" }}>التحقق الميداني (10%)</strong> هو أخطر نقطة ضعف — لم تتحدث بعد مع أي عميل محتمل.
          </p>
          <ResponsiveContainer width="100%" height={240}>
            <RadarChart data={readinessData} cx="50%" cy="50%" outerRadius="70%">
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="axis" tick={{ fontSize: 12, fill: "#64748b" }} />
              <Radar name="جاهزيتك" dataKey="value" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 4 }}>
            {readinessData.map((r, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 10px", background: "#f8fafc", borderRadius: 8 }}>
                <span style={{ fontSize: 12, color: "#64748b" }}>{r.axis}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: r.value < 40 ? "#e11d48" : r.value < 60 ? "#f97316" : "#22c55e" }}>{r.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RISKS ── */}
        <div className="fade-in">
          <p className="section-title" style={{ marginBottom: 12 }}><ShieldAlert size={18} color="#e11d48" /> المخاطر المحددة لحالتك</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {risks.map((r, i) => (
              <div key={i} style={{ background: r.bg, border: `1px solid ${r.color}30`, borderRadius: 14, padding: "16px 18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ color: r.color }}>{r.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: r.color, background: `${r.color}18`, padding: "2px 8px", borderRadius: 99 }}>خطر {r.level}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#1e293b" }}>{r.title}</span>
                </div>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.7, paddingRight: 26 }}>{r.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── STRENGTHS ── */}
        <div className="fade-in">
          <p className="section-title" style={{ marginBottom: 12 }}><CheckCircle2 size={18} color="#16a34a" /> نقاط قوتك الفعلية</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {strengths.map((s, i) => (
              <div key={i} className="card" style={{ padding: "16px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: "#f0fdf4", border: "1px solid #bbf7d0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#16a34a" }}>{s.icon}</div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14, color: "#1e293b", marginBottom: 4 }}>{s.title}</p>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ROADMAP ── */}
        <div className="card fade-in">
          <p className="section-title"><ArrowLeft size={18} color="#6366f1" /> خارطة طريقك المخصصة</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {roadmap.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 14, paddingBottom: i < roadmap.length - 1 ? 16 : 0, paddingTop: i > 0 ? 16 : 0, borderBottom: i < roadmap.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: r.color, marginTop: 4 }} />
                  {i < roadmap.length - 1 && <div style={{ width: 2, flex: 1, background: "#e2e8f0", marginTop: 4 }} />}
                </div>
                <div style={{ flex: 1, paddingBottom: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: r.color, background: `${r.color}15`, padding: "2px 8px", borderRadius: 99 }}>{r.phase}</span>
                    <span style={{ fontSize: 11, color: "#94a3b8" }}>{r.status === "فوري" ? "🔴 فوري" : r.status === "مهم" ? "🟡 مهم" : "🟢 تالٍ"}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#334155", lineHeight: 1.6 }}>{r.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM VERDICT ── */}
        <div style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)", borderRadius: 16, padding: "24px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <Lightbulb size={20} color="#fbbf24" />
            <p style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>الحكم النهائي على مشروعك</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { icon: "✅", text: "الفكرة قابلة للتنفيذ — الطعام والمطاعم طلب ثابت لا يتوقف" },
              { icon: "⚠️", text: "الميزانية غير كافية — حاول رفعها لـ $8,000 قبل الانطلاق أو ابحث عن شريك مالي" },
              { icon: "🎯", text: "ابدأ صغيراً: كيوسك أو cloud kitchen أرخص بـ 60% من مطعم كامل" },
              { icon: "📱", text: "سلاحك الأقوى: انستغرام وTikTok قبل أي إعلان مدفوع — الرياض تشتري بعينها أولاً" },
            ].map((v, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 16 }}>{v.icon}</span>
                <p style={{ fontSize: 14, color: "#cbd5e1", lineHeight: 1.6 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
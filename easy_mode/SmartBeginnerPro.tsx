
import React, { useState, useEffect, useRef, useCallback } from "react";
import { THEME, QUESTIONS } from "./constants";
import { AiAnalysisResult } from "./types";
import { analyzeWithAI } from "./services/aiService";
import { GlassCard, Badge, ProgressDots } from "./components/CommonUI";
import * as Lucide from "lucide-react";
import * as Charts from "./components/AnalysisUI";
import * as Renderers from "./components/QuestionRenderer";

export default function SmartBeginnerPro() {
  const [phase, setPhase] = useState<"landing" | "form" | "analyzing" | "results">("landing");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [tempAnswer, setTempAnswer] = useState<any>(null);
  const [analysis, setAnalysis] = useState<AiAnalysisResult | null>(null);
  const [error, setError] = useState("");
  const [loadingStep, setLoadingStep] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const loadingTimerRef = useRef<any>(null);

  const currentQ = QUESTIONS[qIndex];
  const formProgress = Math.round((qIndex / QUESTIONS.length) * 100);

  const loadingMessages = [
    "تحليل بيانات السوق العالمية...",
    "تقييم المنافسة والموقع التنافسي...",
    "حساب التوقعات المالية الواقعية...",
    "بناء خارطة العمل المخصصة...",
    "صياغة الرؤية الاستراتيجية...",
  ];

  useEffect(() => {
    if (phase !== "analyzing") return;
    let i = 0;
    loadingTimerRef.current = setInterval(() => {
      i = (i + 1) % loadingMessages.length;
      setLoadingStep(i);
    }, 1400);
    return () => clearInterval(loadingTimerRef.current);
  }, [phase]);

  const runAnalysis = useCallback(async (finalAnswers: any) => {
    setPhase("analyzing");
    setError("");
    try {
      const result = await analyzeWithAI(finalAnswers);
      setAnalysis(result);
      setPhase("results");
    } catch (e: any) {
      setError("حدث خطأ أثناء التحليل: " + e.message);
      setPhase("form");
    }
  }, []);

  const handleAnswer = useCallback((val: any) => {
    const q = QUESTIONS[qIndex];
    let newAnswers = { ...answers };
    if (["profile_builder", "resources_check", "goal_matrix"].includes(q.type)) {
       newAnswers = { ...answers, ...val };
    } else {
      newAnswers[q.id] = val;
    }
    setAnswers(newAnswers);
    setTempAnswer(null);
    if (qIndex < QUESTIONS.length - 1) {
      setQIndex(qIndex + 1);
    } else {
      runAnalysis(newAnswers);
    }
  }, [qIndex, answers, runAnalysis]);

  /* ─── RENDER PHASES ─── */

  if (phase === "landing") return (
    <div dir="rtl" style={{ minHeight: "100vh", background: THEME.bg, fontFamily: THEME.fontBody, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(#F1F5F9 1px, transparent 1px), linear-gradient(90deg, #F1F5F9 1px, transparent 1px)`, backgroundSize: "40px 40px", pointerEvents: "none" }} />
      <div style={{ maxWidth: 640, width: "100%", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: THEME.accentDim, border: `1px solid ${THEME.accent}22`, borderRadius: 30, padding: "8px 20px", marginBottom: 24, boxShadow: "0 4px 12px rgba(16, 185, 129, 0.05)" }}>
          <Lucide.Sparkles size={16} color={THEME.accent} />
          <span style={{ fontSize: 13, color: THEME.accent, fontWeight: 800, letterSpacing: "0.02em" }}>EASY MODE — SMART ADVISOR</span>
        </div>
        <h1 style={{ fontSize: 52, fontWeight: 900, color: THEME.text, lineHeight: 1.1, marginBottom: 20, fontFamily: THEME.fontDisplay }}>ابنِ خطة عمل <span style={{ color: THEME.accent }}>استثنائية</span> بلمح البصر</h1>
        <p style={{ fontSize: 18, color: THEME.textMuted, lineHeight: 1.8, marginBottom: 44, maxWidth: 520, margin: "0 auto 44px" }}>أجب عن 8 أسئلة ذكية، وسيقوم محركنا الاستراتيجي ببناء خارطة طريق واقعية لمشروعك خلال ثوانٍ معدودة.</p>
        <button onClick={() => setPhase("form")} style={{ background: THEME.text, color: "#FFF", border: "none", borderRadius: 20, padding: "20px 60px", fontSize: 18, fontWeight: 900, cursor: "pointer", boxShadow: "0 20px 40px rgba(15, 23, 42, 0.15)", display: "flex", alignItems: "center", gap: 12, margin: "0 auto" }}>
           <span>ابدأ الآن</span>
           <Lucide.ArrowLeft size={20} />
        </button>
      </div>
    </div>
  );

  if (phase === "form") return (
    <div dir="rtl" style={{ minHeight: "100vh", background: THEME.bg, fontFamily: THEME.fontBody, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${THEME.border}`, background: "#FFF", position: "sticky", top: 0, zIndex: 50 }}>
        <button onClick={() => qIndex > 0 ? setQIndex(qIndex-1) : setPhase("landing")} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", color: THEME.textMuted, cursor: "pointer", fontSize: 14, fontWeight: 700 }}>
          <Lucide.ArrowRight size={18} />
          <span>السابق</span>
        </button>
        <ProgressDots total={QUESTIONS.length} current={qIndex} />
        <div style={{ fontSize: 13, fontWeight: 800, color: THEME.textMuted }}>{qIndex + 1} / {QUESTIONS.length}</div>
      </div>
      <div style={{ height: 4, background: "#F1F5F9" }}>
        <div style={{ height: "100%", width: `${formProgress}%`, background: THEME.accent, transition: "width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" }} />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "48px 24px", overflowY: "auto" }}>
        <div style={{ maxWidth: 700, width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: 16, background: THEME.accentDim, display: "flex", alignItems: "center", justifyContent: "center", color: THEME.accent }}>
              <Charts.RadarChart data={[100]} labels={['']} /> {/* Dummy just to use the icon mapping if needed, but easier use direct */}
              {(Lucide as any)[currentQ.icon] ? React.createElement((Lucide as any)[currentQ.icon], { size: 24 }) : <Lucide.Target size={24} />}
            </div>
            <span style={{ fontSize: 12, color: THEME.accent, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", background: THEME.accentDim, padding: "4px 12px", borderRadius: 30 }}>المرحلة {currentQ.step}</span>
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: THEME.text, marginBottom: 10, lineHeight: 1.3, fontFamily: THEME.fontDisplay }}>{currentQ.label}</h2>
          <p style={{ fontSize: 15, color: THEME.textMuted, marginBottom: 36, lineHeight: 1.7 }}>{currentQ.sublabel}</p>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {currentQ.type === 'cards' && <Renderers.QuestionCards question={currentQ} onSelect={handleAnswer} selected={answers[currentQ.id]} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'textarea_choice' && <Renderers.QuestionTextAreaChoice question={currentQ} onSelect={handleAnswer} selected={answers[currentQ.id]} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'profile_builder' && <Renderers.MultiSelectionRenderer question={currentQ} items={currentQ.profiles!} fieldPrefix="customer" onSelect={handleAnswer} selected={answers} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'competition_map' && <Renderers.CompetitionMap question={currentQ} onSelect={handleAnswer} selected={answers} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'resources_check' && <Renderers.MultiSelectionRenderer question={currentQ} items={currentQ.items!} fieldPrefix="" onSelect={handleAnswer} selected={answers} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'validation_scale' && <Renderers.ValidationScale question={currentQ} onSelect={handleAnswer} selected={answers[currentQ.id]} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'goal_matrix' && <Renderers.MultiSelectionRenderer question={currentQ} items={currentQ.goals!} fieldPrefix="" onSelect={handleAnswer} selected={answers} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'fear_select' && <Renderers.FearSelect question={currentQ} onSelect={handleAnswer} selected={answers[currentQ.id]} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
          </div>
        
          {error && <div style={{ marginTop: 24, padding: 18, background: THEME.redDim, border: `1px solid rgba(239, 68, 68, 0.1)`, borderRadius: 16, color: THEME.red, fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 12 }}><Lucide.AlertCircle size={20} />{error}</div>}
        </div>
      </div>
    </div>
  );

  if (phase === "analyzing") return (
    <div dir="rtl" style={{ minHeight: "100vh", background: THEME.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
       <div style={{ textAlign: "center", maxWidth: 440 }}>
          <div style={{ width: 100, height: 100, background: THEME.accentDim, borderRadius: 30, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px", animation: "pulse 2s infinite ease-in-out" }}>
             <Lucide.Cpu size={48} color={THEME.accent} />
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: THEME.text, marginBottom: 14, fontFamily: THEME.fontDisplay }}>تحليل استراتيجي معمق...</h2>
          <p style={{ fontSize: 16, color: THEME.accent, fontWeight: 800 }}>{loadingMessages[loadingStep]}</p>
       </div>
    </div>
  );

  if (phase === "results" && analysis) return (
    <div dir="rtl" style={{ minHeight: "100vh", background: THEME.bgSecondary, fontFamily: THEME.fontBody, color: THEME.text, padding: "32px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        
        {/* Top Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, paddingBottom: 20, borderBottom: `1px solid ${THEME.border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
             <div style={{ width: 56, height: 56, background: THEME.text, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}>
                <Lucide.BarChart3 size={28} />
             </div>
             <div>
               <div style={{ fontSize: 13, color: THEME.textDim, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>خطة العمل المعتمدة</div>
               <div style={{ fontSize: 26, fontWeight: 900, color: THEME.text, fontFamily: THEME.fontDisplay }}>
                  {answers.sector === 'ecommerce' ? 'متجر إلكتروني' : 'مشروع استثماري'} — {
                    typeof answers.problem === 'object' 
                      ? (answers.problem.problem?.substring(0, 30) || 'تحليل') 
                      : (answers.problem?.substring(0, 30) || 'تحليل')
                  }
               </div>
             </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
            <Badge type="green">● تحليل مكتمل</Badge>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: THEME.textMuted, fontWeight: 700 }}><Lucide.Calendar size={14} />{new Date().toLocaleDateString("ar-SA")}</div>
          </div>
        </div>

        {/* Verdict Bar */}
        <div style={{ background: "#FFF", border: `1px solid ${THEME.border}`, borderRadius: 24, padding: 32, marginBottom: 24, display: "flex", alignItems: "center", gap: 32, boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
          <div style={{ width: 64, height: 64, background: THEME.accent, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", fontSize: 28, flexShrink: 0, boxShadow: THEME.accentGlow }}>
             <Lucide.CheckCircle2 size={32} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: THEME.text, marginBottom: 8, fontFamily: THEME.fontDisplay }}>{analysis.verdict}</div>
            <div style={{ fontSize: 15, color: THEME.textMuted, lineHeight: 1.8, fontWeight: 500 }}>{analysis.executiveSummary}</div>
          </div>
          <div style={{ flexShrink: 0, position: "relative", width: 100, height: 100 }}>
             <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#F1F5F9" strokeWidth="10"/>
                <circle cx="50" cy="50" r="42" fill="none" stroke={THEME.accent} strokeWidth="10" strokeDasharray="264" strokeDashoffset={264 - (analysis.score/100)*264} strokeLinecap="round" transform="rotate(-90 50 50)"/>
             </svg>
             <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontSize: 26, fontWeight: 900, color: THEME.text, lineHeight: 1, fontFamily: THEME.fontDisplay }}>{analysis.score}</div>
                <div style={{ fontSize: 11, color: THEME.textDim, fontWeight: 700 }}>/ 100</div>
             </div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, marginBottom: 24 }}>
          {[
            { label: "حتى أول إيراد", val: analysis.timeToRevenue, icon: Lucide.Zap, col: THEME.accent },
            { label: "نقطة التعادل", val: `${analysis.breakEvenMonths} أشهر`, icon: Lucide.PieChart, col: THEME.amber },
            { label: "تكلفة العميل", val: analysis.financials.cac, icon: Lucide.Target, col: THEME.red },
            { label: "قيمة العميل", val: analysis.financials.ltv, icon: Lucide.Gem, col: THEME.accent },
            { label: "نسبة LTV:CAC", val: analysis.financials.ltvCacRatio, icon: Lucide.TrendingUp, col: '#534ab7' },
          ].map(s => (
            <div key={s.label} style={{ background: "#FFF", border: `1px solid ${THEME.border}`, borderRadius: 20, padding: 20, textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
              <div style={{ marginBottom: 12, display: "flex", justifyContent: "center" }}><s.icon size={22} color={s.col} /></div>
              <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 4, color: THEME.text, fontFamily: THEME.fontDisplay }}>{s.val}</div>
              <div style={{ fontSize: 11, color: THEME.textMuted, fontWeight: 700 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Insight Box */}
        <div style={{ background: THEME.blueDim, border: `1px solid rgba(59, 130, 246, 0.1)`, borderRadius: 20, padding: 24, marginBottom: 30, display: "flex", gap: 20, alignItems: "flex-start" }}>
           <div style={{ width: 44, height: 44, background: "#FFF", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: THEME.blue, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.1)", flexShrink: 0 }}>
             <Lucide.Lightbulb size={24} />
           </div>
           <div>
              <div style={{ fontSize: 12, fontWeight: 900, color: THEME.blue, marginBottom: 6, letterSpacing: "0.05em" }}>رؤية استراتيجية مخصصة</div>
              <p style={{ fontSize: 15, color: THEME.text, lineHeight: 1.8, fontWeight: 500 }}>{analysis.aiInsight}</p>
           </div>
        </div>

        {/* Tabs System */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24, overflowX: "auto", padding: "4px" }}>
           {[
             { id: 'overview', label: 'نظرة عامة', icon: Lucide.LayoutDashboard },
             { id: 'market', label: 'تحليل السوق', icon: Lucide.Globe },
             { id: 'financial', label: 'النموذج المالي', icon: Lucide.DollarSign },
             { id: 'action', label: 'خطة العمل', icon: Lucide.ListChecks },
             { id: 'risks', label: 'المخاطر والعقبات', icon: Lucide.ShieldAlert },
             { id: 'resources', label: 'الأدوات والموارد', icon: Lucide.Wrench },
           ].map(t => (
             <button key={t.id} onClick={() => setActiveTab(t.id)} style={{ 
               padding: "12px 24px", fontSize: 14, fontWeight: 800, borderRadius: 14,
               color: activeTab === t.id ? "#FFF" : THEME.textMuted,
               background: activeTab === t.id ? THEME.text : "#FFF",
               border: `1px solid ${activeTab === t.id ? THEME.text : THEME.border}`,
               display: "flex", alignItems: "center", gap: 10, cursor: "pointer", transition: "all 0.3s",
               boxShadow: activeTab === t.id ? "0 10px 20px rgba(0,0,0,0.1)" : "none",
               fontFamily: THEME.fontDisplay, whiteSpace: "nowrap"
             }}>
               <t.icon size={18} />
               <span>{t.label}</span>
             </button>
           ))}
        </div>

        {/* Tab Panels */}
        <div className="tab-content transition-all">
           {activeTab === 'overview' && (
             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <GlassCard>
                   <div style={{ fontSize: 15, fontWeight: 900, marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}><Lucide.Activity size={18} color={THEME.accent} /> تفاصيل النتيجة</div>
                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                      {[
                        { k: "idea", label: "جودة الفكرة" },
                        { k: "market", label: "فرصة السوق" },
                        { k: "resources", label: "الموارد المتاحة" },
                        { k: "execution", label: "قدرة التنفيذ" }
                      ].map(({ k, label }) => {
                        const val = analysis.scoreBreakdown[k as keyof typeof analysis.scoreBreakdown] || 0;
                        const pct = (val / 25) * 100;
                        const c = pct >= 70 ? THEME.accent : THEME.amber;
                        return (
                          <div key={k}>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 8, fontWeight: 700 }}><span>{label}</span><span style={{ color: c }}>{val}/25</span></div>
                            <div style={{ height: 6, background: "#F1F5F9", borderRadius: 4, overflow: "hidden" }}><div style={{ height: "100%", width: `${pct}%`, background: c, borderRadius: 4 }} /></div>
                          </div>
                        );
                      })}
                   </div>
                </GlassCard>
                <GlassCard>
                   <div style={{ fontSize: 15, fontWeight: 900, marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}><Lucide.FlaskConical size={18} color={THEME.amber} /> اختبار الميدان الفوري</div>
                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      {[
                        { label: "الخطوة الأولى", val: analysis.validationPlan.nextStep, col: THEME.accent },
                        { label: "معيار النجاح", val: analysis.validationPlan.successMetric, col: THEME.blue },
                        { label: "المدة الزمنية", val: `${analysis.validationPlan.timeboxDays} يوم`, col: THEME.text },
                        { label: "الميزانية المرصودة", val: analysis.validationPlan.budget, col: THEME.gold }
                      ].map((item, i) => (
                        <div key={i} style={{ background: THEME.bgSecondary, padding: 16, borderRadius: 16 }}>
                          <div style={{ fontSize: 10, color: THEME.textDim, marginBottom: 6, fontWeight: 800 }}>{item.label}</div>
                          <div style={{ fontSize: 13, fontWeight: 800, color: item.col }}>{item.val}</div>
                        </div>
                      ))}
                   </div>
                </GlassCard>
                <GlassCard style={{ borderRight: `6px solid ${THEME.accent}` }}>
                   <div style={{ fontSize: 15, fontWeight: 900, marginBottom: 12, color: THEME.accent, display: "flex", alignItems: "center", gap: 8 }}><Lucide.Trophy size={18} /> قصة نجاح ملهمة</div>
                   <p style={{ fontSize: 13, color: THEME.textMuted, lineHeight: 1.8, fontWeight: 500 }}>{analysis.successStory}</p>
                </GlassCard>
                <GlassCard style={{ borderRight: `6px solid ${THEME.red}` }}>
                   <div style={{ fontSize: 15, fontWeight: 900, marginBottom: 12, color: THEME.red, display: "flex", alignItems: "center", gap: 8 }}><Lucide.AlertTriangle size={18} /> درس من إخفاق حقيقي</div>
                   <p style={{ fontSize: 13, color: THEME.textMuted, lineHeight: 1.8, fontWeight: 500 }}>{analysis.failureLesson}</p>
                </GlassCard>
             </div>
           )}

           {activeTab === 'market' && (
             <div style={{ display: "grid", gap: 20 }}>
                <GlassCard>
                   <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}><Lucide.TrendingUp size={20} color={THEME.blue} /> تقديرات حجم السوق</div>
                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                      <div style={{ padding: 24, background: THEME.bgSecondary, border: `1px solid ${THEME.border}`, borderRadius: 20 }}>
                         <div style={{ fontSize: 12, color: THEME.textDim, marginBottom: 10, fontWeight: 800 }}>TAM — إجمالي السوق</div>
                         <div style={{ fontSize: 24, fontWeight: 900 }}>{analysis.marketSize.tam}</div>
                      </div>
                      <div style={{ padding: 24, background: THEME.amberDim, border: `1px solid rgba(245, 158, 11, 0.1)`, borderRadius: 20 }}>
                         <div style={{ fontSize: 12, color: THEME.amber, marginBottom: 10, fontWeight: 900 }}>SAM — السوق المستهدف</div>
                         <div style={{ fontSize: 24, fontWeight: 900, color: THEME.amber }}>{analysis.marketSize.sam}</div>
                      </div>
                      <div style={{ padding: 24, background: THEME.accentDim, border: `1px solid rgba(16, 185, 129, 0.1)`, borderRadius: 20 }}>
                         <div style={{ fontSize: 12, color: THEME.accent, marginBottom: 10, fontWeight: 900 }}>SOM — حصتك المتوقعة</div>
                         <div style={{ fontSize: 24, fontWeight: 900, color: THEME.accent }}>{analysis.marketSize.som}</div>
                      </div>
                   </div>
                   <div style={{ marginTop: 16, fontSize: 11, color: THEME.textDim, fontWeight: 700 }}>المصدر: {analysis.marketSize.source}</div>
                </GlassCard>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                   <GlassCard>
                      <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 20, display: "flex", alignItems: "center", gap: 8, color: THEME.red }}><Lucide.Swords size={20} /> خارطة المنافسين</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                         {analysis.competitiveAnalysis.mainCompetitors.map(c => (
                            <div key={c} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: THEME.bgSecondary, borderRadius: 16, border: `1px solid ${THEME.border}` }}>
                               <span style={{ fontSize: 14, fontWeight: 800 }}>{c}</span>
                               <Badge type="amber">منافس مباشر</Badge>
                            </div>
                         ))}
                      </div>
                   </GlassCard>
                   <GlassCard>
                      <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 20, display: "flex", alignItems: "center", gap: 8, color: THEME.accent }}><Lucide.ShieldCheck size={20} /> التميز الاستراتيجي (Moat)</div>
                      <div style={{ background: THEME.accentDim, padding: 18, borderRadius: 16, marginBottom: 12 }}>
                         <div style={{ fontSize: 14, fontWeight: 900, color: THEME.accent, marginBottom: 6 }}>ميزتك التنافسية</div>
                         <p style={{ fontSize: 13, lineHeight: 1.8, fontWeight: 600 }}>{analysis.competitiveAnalysis.yourEdge}</p>
                      </div>
                      <div style={{ background: THEME.blueDim, padding: 18, borderRadius: 16 }}>
                         <div style={{ fontSize: 14, fontWeight: 900, color: THEME.blue, marginBottom: 6 }}>حصن المشروع</div>
                         <p style={{ fontSize: 13, lineHeight: 1.8, fontWeight: 600 }}>{analysis.competitiveAnalysis.moat}</p>
                      </div>
                   </GlassCard>
                </div>
             </div>
           )}

           {activeTab === 'financial' && (
             <div style={{ display: "grid", gap: 20 }}>
                <GlassCard>
                    <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}><Lucide.BarChartBig size={20} color={THEME.blue} /> مؤشرات الربحية والاستدامة</div>
                    <Charts.FinancialsGrid financials={analysis.financials} />
                </GlassCard>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                   <GlassCard>
                      <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}><Lucide.Radar size={20} color={THEME.accent} /> التقييم الشامل للسداسي</div>
                      <Charts.RadarChart data={[84, 80, 64, 68, 60, 72]} labels={['الفكرة','السوق','الموارد','التنفيذ','التحقق','التنافسية']} />
                   </GlassCard>
                   <GlassCard>
                      <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}><Lucide.PieChart size={20} color={THEME.blue} /> توزيع مصادر الإيراد المستهدفة</div>
                      <Charts.DoughnutChart segments={[
                        { val: 60, color: THEME.accent, label: "عمولة" },
                        { val: 25, color: THEME.blue, label: "اشتراك" },
                        { val: 15, color: THEME.gold, label: "إعلانات" }
                      ]} />
                   </GlassCard>
                </div>
             </div>
           )}

           {activeTab === 'action' && (
              <GlassCard>
                 <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 32, display: "flex", alignItems: "center", gap: 12, color: THEME.text }}><Lucide.Flag size={22} color={THEME.accent} /> خارطة الطريق المحكمة (6 أشهر)</div>
                 <Charts.ActionTimeline actionPlan={analysis.actionPlan} />
              </GlassCard>
           )}

           {activeTab === 'risks' && (
             <div style={{ display: "grid", gap: 20 }}>
                <GlassCard>
                   <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 24, display: "flex", alignItems: "center", gap: 12, color: THEME.red }}><Lucide.Zap size={20} /> مصفوفة العقبات الحرجة</div>
                   <Charts.ObstaclesGrid obstacles={analysis.criticalObstacles} />
                </GlassCard>
                <GlassCard>
                   <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 24, display: "flex", alignItems: "center", gap: 12, color: THEME.amber }}><Lucide.ShieldAlert size={20} /> مصفوفة إدارة المخاطر الاستباقية</div>
                   <Charts.RiskMatrix risks={analysis.risks} />
                </GlassCard>
             </div>
           )}

           {activeTab === 'resources' && (
             <GlassCard>
                <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 28, display: "flex", alignItems: "center", gap: 12, color: THEME.blue }}><Lucide.Wrench size={22} /> حقيبة أدوات رائد الأعمال البداية</div>
                <Charts.ResourcesGrid resources={analysis.resources} />
             </GlassCard>
           )}
        </div>

        <div style={{ marginTop: 60, textAlign: "center", padding: 40, background: "#FFF", borderRadius: 32, border: `1px solid ${THEME.border}` }}>
           <h3 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12, fontFamily: THEME.fontDisplay }}>هل أعجبك هذا التحليل؟</h3>
           <p style={{ fontSize: 15, color: THEME.textMuted, marginBottom: 32, fontWeight: 600 }}>يمكنك حفظ التقرير بالكامل، أو البدء في بناء خطة العمل التفصيلية الآن.</p>
           <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
              <button onClick={() => window.print()} style={{ padding: "14px 32px", borderRadius: 16, border: `1px solid ${THEME.border}`, background: "#FFF", fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
                 <Lucide.Download size={18} />
                 <span>حفظ PDF</span>
              </button>
              <button onClick={() => setPhase("landing")} style={{ padding: "14px 32px", borderRadius: 16, border: "none", background: THEME.text, color: "#FFF", fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
                 <Lucide.RefreshCcw size={18} />
                 <span>تحليل جديد</span>
              </button>
           </div>
        </div>

      </div>
    </div>
  );

  return null;
}

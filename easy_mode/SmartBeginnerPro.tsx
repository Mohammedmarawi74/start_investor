
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
    "تحليل 'تقاطع القطاعات' واكتشاف المحيط الأزرق...",
    "بناء 'خريطة التعاطف' وسيكولوجية العميل البديلة...",
    "حساب 'تكلفة الفرصة البديلة' (Build vs Buy)...",
    "توليد مخطط Gantt وتحديد المسار الحرج...",
    "صياغة مصفوفة المخاطر و 'خطة الطوارئ Plan B'...",
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
      setError("حدث خطأ أثناء التوليد الاستراتيجي: " + e.message);
      setPhase("form");
    }
  }, []);

  const handleAnswer = useCallback((val: any) => {
    const q = QUESTIONS[qIndex];
    let newAnswers = { ...answers };
    
    if (["profile_builder", "resources_check", "goal_matrix", "empathy_map"].includes(q.type)) {
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
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(#F1F5F9 1px, transparent 1px), linear-gradient(90deg, #F1F5F9 1px, transparent 1px)`, backgroundSize: "40px 40px", pointerEvents: "none", opacity: 0.5 }} />
      <div style={{ maxWidth: 720, width: "100%", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: THEME.accentDim, border: `1px solid ${THEME.accent}22`, borderRadius: 30, padding: "8px 24px", marginBottom: 32 }}>
          <Lucide.Sparkles size={16} color={THEME.accent} />
          <span style={{ fontSize: 13, color: THEME.accent, fontWeight: 900, letterSpacing: "0.05em" }}>STRATEGIC COCKPIT — GEN AI v2.5</span>
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 900, color: THEME.text, lineHeight: 1.1, marginBottom: 24, fontFamily: THEME.fontDisplay }}>ابنِ إمبراطوريتك <span style={{ color: THEME.accent }}>بذكاء استراتيجي</span> فائق</h1>
        <p style={{ fontSize: 19, color: THEME.textMuted, lineHeight: 1.8, marginBottom: 50, maxWidth: 580, margin: "0 auto 50px" }}>أجب عن 8 تساؤلات جوهرية لنقوم بتوليد نموذج عمل هجين، تحليل سيكولوجي للعميل، وخارطة طريق تنفيذية محكمة.</p>
        <button onClick={() => setPhase("form")} style={{ background: THEME.text, color: "#FFF", border: "none", borderRadius: 24, padding: "22px 64px", fontSize: 19, fontWeight: 900, cursor: "pointer", boxShadow: "0 25px 50px rgba(15, 23, 42, 0.15)", display: "flex", alignItems: "center", gap: 14, margin: "0 auto", transition: "transform 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
           <span>ابدأ الجلسة الاستشارية</span>
           <Lucide.Zap size={22} />
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

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 24px", overflowY: "auto" }}>
        <div style={{ maxWidth: 800, width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <div style={{ width: 52, height: 52, borderRadius: 18, background: THEME.accentDim, display: "flex", alignItems: "center", justifyContent: "center", color: THEME.accent }}>
              {(Lucide as any)[currentQ.icon] ? React.createElement((Lucide as any)[currentQ.icon], { size: 26 }) : <Lucide.Target size={26} />}
            </div>
            <span style={{ fontSize: 12, color: THEME.accent, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", background: THEME.accentDim, padding: "5px 14px", borderRadius: 30 }}>INPUT STEP {currentQ.step}</span>
          </div>
          <h2 style={{ fontSize: 34, fontWeight: 900, color: THEME.text, marginBottom: 12, lineHeight: 1.3, fontFamily: THEME.fontDisplay }}>{currentQ.label}</h2>
          <p style={{ fontSize: 16, color: THEME.textMuted, marginBottom: 44, lineHeight: 1.7, maxWidth: 640 }}>{currentQ.sublabel}</p>

          <div className="animate-in fade-in slide-in-from-bottom-6 duration-600">
            {currentQ.type === 'cards' && <Renderers.QuestionCards question={currentQ} onSelect={handleAnswer} selected={answers[currentQ.id]} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'textarea_choice' && <Renderers.QuestionTextAreaChoice question={currentQ} onSelect={handleAnswer} selected={answers[currentQ.id]} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'empathy_map' && <Renderers.EmpathyMapRenderer question={currentQ} onSelect={handleAnswer} selected={answers[currentQ.id]} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'profile_builder' && <Renderers.MultiSelectionRenderer question={currentQ} items={currentQ.profiles!} fieldPrefix="customer" onSelect={handleAnswer} selected={answers} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'competition_map' && <Renderers.CompetitionMap question={currentQ} onSelect={handleAnswer} selected={answers} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'resources_check' && <Renderers.MultiSelectionRenderer question={currentQ} items={currentQ.items!} fieldPrefix="" onSelect={handleAnswer} selected={answers} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'validation_scale' && <Renderers.ValidationScale question={currentQ} onSelect={handleAnswer} selected={answers[currentQ.id]} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'goal_matrix' && <Renderers.MultiSelectionRenderer question={currentQ} items={currentQ.goals!} fieldPrefix="" onSelect={handleAnswer} selected={answers} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
            {currentQ.type === 'fear_select' && <Renderers.FearSelect question={currentQ} onSelect={handleAnswer} selected={answers[currentQ.id]} tempAnswer={tempAnswer} setTempAnswer={setTempAnswer} />}
          </div>
        
          {error && <div style={{ marginTop: 32, padding: 22, background: THEME.redDim, border: `1px solid rgba(239, 68, 68, 0.1)`, borderRadius: 20, color: THEME.red, fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", gap: 14 }}><Lucide.AlertCircle size={22} />{error}</div>}
        </div>
      </div>
    </div>
  );

  if (phase === "analyzing") return (
    <div dir="rtl" style={{ minHeight: "100vh", background: THEME.bg, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
       <div style={{ textAlign: "center", maxWidth: 500, position: "relative" }}>
          <div style={{ width: 140, height: 140, background: THEME.accentDim, borderRadius: 44, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 40px", animation: "pulse 2s infinite ease-in-out", border: `2px solid ${THEME.accent}11` }}>
             <Lucide.Cpu size={64} color={THEME.accent} />
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: THEME.text, marginBottom: 18, fontFamily: THEME.fontDisplay }}>جاري التوليد الاستراتيجي العميق...</h2>
          <div style={{ background: THEME.bgSecondary, padding: "12px 24px", borderRadius: 30, display: "inline-block" }}>
             <p style={{ fontSize: 16, color: THEME.accent, fontWeight: 900, margin: 0 }}>{loadingMessages[loadingStep]}</p>
          </div>
          <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 8 }}>
             {loadingMessages.map((_, i) => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: loadingStep === i ? THEME.accent : THEME.border, transition: "all 0.3s" }} />
             ))}
          </div>
       </div>
    </div>
  );

  if (phase === "results" && analysis) return (
    <div dir="rtl" style={{ minHeight: "100vh", background: THEME.bgSecondary, fontFamily: THEME.fontBody, color: THEME.text, padding: "40px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        
        {/* TOP STATUS BAR */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
           <button onClick={() => setPhase("landing")} style={{ display: "flex", alignItems: "center", gap: 8, background: "#FFF", border: `1px solid ${THEME.border}`, padding: "10px 20px", borderRadius: 16, fontSize: 13, fontWeight: 850, color: THEME.textMuted, cursor: "pointer" }}>
              <Lucide.ArrowRight size={18} />
              تحليل جديد
           </button>
           <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => window.print()} style={{ p: 12, background: "#FFF", border: `1px solid ${THEME.border}`, borderRadius: 14, cursor: "pointer", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}><Lucide.Download size={20} /></button>
              <button style={{ p: 12, background: THEME.text, color: "#FFF", border: "none", borderRadius: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, px: 20, fontSize: 13, fontWeight: 900 }}><Lucide.Share2 size={18} /> مشاركة الخطة</button>
           </div>
        </div>

        {/* STRATEGIC DASHBOARD HEADER */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 32 }}>
           <div style={{ flex: 1, minWidth: 300 }}>
              <div style={{ fontSize: 13, color: THEME.accent, fontWeight: 900, marginBottom: 4 }}>DASHBOARD REPORT </div>
              <h2 style={{ fontSize: 42, fontWeight: 900, color: THEME.text, fontFamily: THEME.fontDisplay, lineHeight: 1.1 }}>
                 {answers.sector === 'ecommerce' ? 'مشروع المتجر الهجين' : 'نموذج المحيط الأزرق'} — {String(answers.problem?.problem || answers.problem || 'تحليل ذكي').substring(0, 40)}
              </h2>
           </div>
           <div style={{ width: 280, background: "#FFF", borderRadius: 28, p: 20, display: "flex", alignItems: "center", gap: 20, border: `1px solid ${THEME.border}`, padding: 24, boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
              <div style={{ flex: 1 }}>
                 <div style={{ fontSize: 10, fontWeight: 800, color: THEME.textDim, marginBottom: 4 }}>Verdict</div>
                 <div style={{ fontSize: 18, fontWeight: 900, color: analysis.verdictType === 'green' ? THEME.accent : THEME.amber }}>{analysis.verdict}</div>
              </div>
              <div style={{ position: "relative", width: 64, height: 64 }}>
                 <svg width="64" height="64" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" fill="none" stroke="#F1F5F9" strokeWidth="6"/>
                    <circle cx="32" cy="32" r="28" fill="none" stroke={THEME.accent} strokeWidth="6" strokeDasharray="176" strokeDashoffset={176 - (analysis.score/100)*176} strokeLinecap="round" transform="rotate(-90 32 32)"/>
                 </svg>
                 <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900 }}>{analysis.score}</div>
              </div>
           </div>
        </div>

        {/* 1. HYBRID INNOVATION FEATURE CARD */}
        <div style={{ marginBottom: 32 }}>
           <Charts.HybridInnovationCard data={analysis.hybridInnovation} />
        </div>

        {/* GRID TABS */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, overflowX: "auto", paddingBottom: 10 }}>
           {[
             { id: 'overview', label: 'الرادار والنبض الاستراتيجي', icon: Lucide.Activity },
             { id: 'behavioral', label: 'سيكولوجية العميل والتعاطف', icon: Lucide.UserSearch },
             { id: 'financial', label: 'محاكي الحساسية المالية', icon: Lucide.Calculator },
             { id: 'execution', label: 'خارطة Gantt التنفيذية', icon: Lucide.GanttChart },
             { id: 'risks', label: 'إدارة المخاطر و Plan B', icon: Lucide.ShieldAlert },
           ].map(t => (
             <button key={t.id} onClick={() => setActiveTab(t.id)} style={{ 
               padding: "14px 28px", fontSize: 14, fontWeight: 850, borderRadius: 18,
               color: activeTab === t.id ? "#FFF" : THEME.textMuted,
               background: activeTab === t.id ? THEME.text : "#FFF",
               border: `1px solid ${activeTab === t.id ? THEME.text : THEME.border}`,
               display: "flex", alignItems: "center", gap: 12, cursor: "pointer", transition: "all 0.3s",
               fontFamily: THEME.fontDisplay, whiteSpace: "nowrap"
             }}>
               <t.icon size={20} />
               {t.label}
             </button>
           ))}
        </div>

        {/* TAB PANELS */}
        <div className="animate-in fade-in duration-500">
           {activeTab === 'overview' && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                 <GlassCard>
                    <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 20, px: 2, display: "flex", gap: 10, alignItems: "center" }}><Lucide.Target size={20} color={THEME.accent} /> توازن الأبعاد (Multidimensional Radar)</div>
                    <Charts.RadarChart data={analysis.radarData} labels={['التقنية','السوق','الفريق','المالية','العمليات']} />
                 </GlassCard>
                 <Charts.OpportunityCostCard data={analysis.opportunityCost} />
                 <GlassCard style={{ borderRight: `6px solid ${THEME.accent}`, gridColumn: "span 2" }}>
                    <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 12, color: THEME.accent }}><Lucide.Lightbulb size={20} /> الخلاصة الاستراتيجية للأسبوع الأول</div>
                    <p style={{ fontSize: 15, color: THEME.text, lineHeight: 1.8, fontWeight: 600 }}>{analysis.aiInsight}</p>
                 </GlassCard>
              </div>
           )}

           {activeTab === 'behavioral' && (
              <div style={{ display: "grid", gap: 24 }}>
                 <Charts.BehavioralPersonaCard persona={analysis.behavioralPersona} />
                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
                    <div style={{ background: "#FFF", p: 16, borderRadius: 20, padding: 24, border: `1px solid ${THEME.border}` }}>
                       <div style={{ fontSize: 11, fontWeight: 900, color: THEME.textDim, mb: 10 }}>TAM</div>
                       <div style={{ fontSize: 24, fontWeight: 900, color: THEME.text }}>{analysis.marketSize.tam}</div>
                    </div>
                    <div style={{ background: THEME.blueDim, p: 16, borderRadius: 20, padding: 24, border: `1px solid ${THEME.blue}11` }}>
                       <div style={{ fontSize: 11, fontWeight: 900, color: THEME.blue, mb: 10 }}>SAM</div>
                       <div style={{ fontSize: 24, fontWeight: 900, color: THEME.blue }}>{analysis.marketSize.sam}</div>
                    </div>
                    <div style={{ background: THEME.accentDim, p: 16, borderRadius: 20, padding: 24, border: `1px solid ${THEME.accent}11` }}>
                       <div style={{ fontSize: 11, fontWeight: 900, color: THEME.accent, mb: 10 }}>SOM</div>
                       <div style={{ fontSize: 24, fontWeight: 900, color: THEME.accent }}>{analysis.marketSize.som}</div>
                    </div>
                 </div>
              </div>
           )}

           {activeTab === 'financial' && (
              <div style={{ display: "grid", gap: 24 }}>
                 <Charts.SensitivitySimulator initialCac={analysis.sensitivityAnalysis.baseCac} initialChurn={analysis.sensitivityAnalysis.baseChurn} />
                 <Charts.FinancialsGrid financials={analysis.financials} />
              </div>
           )}

           {activeTab === 'execution' && (
              <div style={{ display: "grid", gap: 24 }}>
                 <Charts.SmartGanttChart tasks={analysis.ganttTasks} />
                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 24 }}>
                    <GlassCard>
                       <div style={{ fontSize: 16, fontWeight: 900, mb: 20 }}>خطوات التنشيط الفوري</div>
                       <div style={{ spaceY: 10 }}>
                          <button onClick={() => window.open(analysis.activationPlan.notionExportUrl)} style={{ w: "100%", width: "100%", p: 14, mb: 12, border: `1px solid ${THEME.border}`, borderRadius: 16, background: "#FFF", display: "flex", alignItems: "center", gap: 12, cursor: "pointer", fontWeight: 800, fontSize: 13 }}>
                             <Lucide.FileCode size={18} /> تصدير إلى Notion
                          </button>
                          <button onClick={() => window.open(analysis.activationPlan.trelloExportUrl)} style={{ w: "100%", width: "100%", p: 14, border: `1px solid ${THEME.border}`, borderRadius: 16, background: "#FFF", display: "flex", alignItems: "center", gap: 12, cursor: "pointer", fontWeight: 800, fontSize: 13 }}>
                             <Lucide.Trello size={18} /> تصدير إلى Trello
                          </button>
                       </div>
                    </GlassCard>
                    <Charts.ActionTimeline actionPlan={analysis.actionPlan} />
                 </div>
              </div>
           )}

           {activeTab === 'risks' && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                 <Charts.RiskMatrix risks={analysis.risks} />
                 <Charts.ObstaclesGrid obstacles={analysis.criticalObstacles} />
              </div>
           )}
        </div>

        {/* FINAL ADVICE BANNER */}
        <div style={{ marginTop: 60, p: 40, background: THEME.text, borderRadius: 36, color: "#FFF", textAlign: "center", padding: 60 }}>
           <h3 style={{ fontSize: 32, fontWeight: 900, mb: 16, fontFamily: THEME.fontDisplay }}>هل أنت مستعد للتنفيذ؟</h3>
           <p style={{ fontSize: 18, opacity: 0.8, mb: 40, fontWeight: 500, maxWidth: 640, margin: "16px auto 40px" }}>بناءً على هذا التحليل الاستراتيجي، فإن فرصتك في النجاح مرتبطة بسرعة دخولك للميدان. لا تطل الانتظار في مرحلة التخطيط.</p>
           <button onClick={() => setPhase("landing")} style={{ px: 50, py: 20, background: THEME.accent, color: "#FFF", border: "none", borderRadius: 20, fontSize: 16, fontWeight: 900, cursor: "pointer", boxShadow: THEME.accentGlow }}>ابدأ بناء الخطة التفصيلية (Pro Mode)</button>
        </div>

      </div>
    </div>
  );

  return null;
}

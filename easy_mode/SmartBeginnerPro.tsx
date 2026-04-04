import React, { useState, useEffect, useRef, useCallback } from "react";
import { QUESTIONS } from "./constants";
import { AiAnalysisResult } from "./types";
import { analyzeWithAI } from "./services/aiService";
import { ProgressDots } from "./components/CommonUI";
import * as Lucide from "lucide-react";
import * as Charts from "./components/AnalysisUI";
import * as Renderers from "./components/QuestionRenderer";

// Modular Tab Components
import { StrategicPulseTab } from './tabs/StrategicPulseTab';
import { CustomerPsychologyTab } from './tabs/CustomerPsychologyTab';
import { FinancialSimulatorTab } from './tabs/FinancialSimulatorTab';
import { RoadMapTab } from './tabs/RoadMapTab';
import { RiskManagementTab } from './tabs/RiskManagementTab';

export default function SmartBeginnerPro() {
  const [phase, setPhase] = useState<"form" | "analyzing" | "results">("form");
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
    "تحليل 'تقاطع القطاعات' واكتشاف المحيط الأزرق (Blue Ocean)...",
    "بناء 'خريطة التعاطف' وسيكولوجية العميل (Behavioral Mapping)...",
    "حساب 'تكلفة الفرصة البديلة' ومعايرة الجدوى (Economic Modeling)...",
    "توليد مخطط Gantt وتحديد المسار الحرج (Critical Path)...",
    "صياغة مصفوفة المخاطر وبروتوكولات الطوارئ (Plan B Engine)...",
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
      setError("حدث خطأ في النظام الاستراتيجي: " + e.message);
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

  if (phase === "form") return (
    <div className="min-h-screen flex flex-col bg-slate-50/30 overflow-hidden" dir="rtl">
      {/* Executive Progress Header */}
      <div className="px-8 py-4 flex items-center justify-between border-b border-slate-100 bg-white/80 backdrop-blur-2xl sticky top-0 z-50 shadow-sm">
        <button 
          onClick={() => qIndex > 0 ? setQIndex(qIndex-1) : window.location.reload()} 
          className="flex items-center gap-3 text-slate-400 hover:text-slate-900 font-black text-[11px] transition-all group px-4 py-2 hover:bg-slate-50 rounded-xl"
        >
          <Lucide.ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          <span>العودة للمنصة</span>
        </button>
        <div className="hidden md:block">
           <ProgressDots 
             steps={QUESTIONS.map(q => ({ icon: q.icon, id: q.id }))} 
             current={qIndex} 
           />
        </div>
        <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200 shadow-inner">
          Intelligence Module: {qIndex + 1} / {QUESTIONS.length}
        </div>
      </div>
      
      {/* Shimmering Progress Bar */}
      <div className="h-2 bg-slate-100 overflow-hidden relative">
        <div 
          className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500 transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(79,70,229,0.5)]" 
          style={{ width: `${formProgress}%` }} 
        >
           <div className="absolute inset-0 bg-white/20 animate-shimmer scale-x-[500%]"></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center p-8 lg:p-16 overflow-y-auto no-scrollbar scroll-smooth">
        <div className="max-w-4xl w-full">
          
          {/* Question Meta Info */}
          <div className="flex items-center gap-6 mb-10">
            <div className="relative">
               <div className="absolute -inset-4 bg-indigo-500/10 rounded-full blur-2xl animate-pulse"></div>
               <div className="relative w-14 h-14 rounded-[1.5rem] bg-slate-900 text-white flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.2)] animate-in zoom-in duration-700">
                 {(Lucide as any)[currentQ.icon] ? React.createElement((Lucide as any)[currentQ.icon], { size: 28, strokeWidth: 2.5 }) : <Lucide.Target size={28} />}
               </div>
            </div>
            <div className="flex flex-col">
               <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1">Strategic Questioning Protocol</span>
               <div className="flex items-center gap-2">
                  <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
                  <div className="h-1 w-1 bg-slate-200 rounded-full"></div>
               </div>
            </div>
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 leading-[1.1] tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
            {currentQ.label}
          </h2>
          <p className="text-slate-400 font-bold text-lg mb-12 leading-relaxed max-w-3xl opacity-90" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
            {currentQ.sublabel}
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
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

          {/* Action Center (Next) */}
          <div className="mt-20 pt-10 border-t border-slate-100 flex justify-between items-center">
             <div className="text-[11px] font-black text-slate-300 uppercase tracking-widest italic opacity-60">
                You can pivot anytime after result generation.
             </div>
             <button 
               onClick={() => handleAnswer(answers[currentQ.id] || { skipped: true })}
               className="group relative flex items-center gap-4 px-12 py-6 bg-slate-900 text-white rounded-[2.5rem] font-black text-sm shadow-[0_30px_60px_rgba(0,0,0,0.25)] hover:scale-[1.03] transition-all hover:bg-indigo-600 overflow-hidden"
             >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                   {qIndex === QUESTIONS.length - 1 ? 'توليد الرؤية الاستراتيجية المطلقة' : 'الخطوة التالية (تحليل استثنائي)'}
                </span>
                <Lucide.Zap size={18} className="group-hover:text-amber-400 group-hover:scale-110 transition-all font-black" />
             </button>
          </div>
        
          {error && (
            <div className="mt-10 p-6 bg-rose-50 border-2 border-rose-100 rounded-[2rem] text-rose-600 text-[13px] font-black flex items-center gap-4 animate-in shake duration-500">
              <Lucide.AlertOctagon size={24} />
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (phase === "analyzing") return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden" dir="rtl">
       <div className="text-center max-w-xl relative animate-in zoom-in duration-[1500ms]">
          {/* Futuristic Scanner */}
          <div className="relative mb-16">
             <div className="absolute -inset-10 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse"></div>
             <div className="w-32 h-32 bg-white/5 border border-white/10 text-indigo-400 rounded-[3rem] flex items-center justify-center mx-auto shadow-2xl backdrop-blur-3xl relative overflow-hidden">
                <Lucide.Cpu size={64} className="animate-spin-slow" />
                <div className="absolute inset-0 h-1 bg-indigo-500/50 animate-scan pointer-events-none"></div>
             </div>
          </div>

          <h2 className="text-2xl lg:text-4xl font-black text-white mb-6 tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>جاري استخراج "الوعي الاستراتيجي"...</h2>
          <div className="inline-block px-10 py-5 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md shadow-2xl">
             <p className="text-[13px] text-indigo-300 font-extrabold tracking-widest uppercase italic">{loadingMessages[loadingStep]}</p>
          </div>

          <div className="mt-16 flex justify-center gap-6">
             {loadingMessages.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all duration-[800ms] ${loadingStep === i ? 'w-16 bg-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.8)]' : 'w-3 bg-white/10'}`} 
                />
             ))}
          </div>
       </div>
    </div>
  );

  if (phase === "results" && analysis) return (
    <div className="min-h-screen bg-slate-50/50 p-6 lg:p-16 overflow-x-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-[1200ms]">
        
        {/* EXECUTIVE COMMAND BAR */}
        <div className="flex flex-wrap justify-between items-center gap-6 bg-white/80 backdrop-blur-3xl p-5 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
           <button 
             onClick={() => setPhase("form")} 
             className="flex items-center gap-3 bg-slate-900 border border-slate-900 px-8 py-4 rounded-2xl text-[11px] font-black text-white hover:bg-indigo-600 hover:shadow-2xl transition-all shadow-xl group"
           >
              <Lucide.PlusCircle size={18} />
              تحليل استراتيجي جديد
           </button>
           <div className="flex gap-4">
              <button onClick={() => window.print()} className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:shadow-2xl hover:-translate-y-1 transition-all"><Lucide.Printer size={22} /></button>
              <button className="px-10 py-4 bg-emerald-600 text-white rounded-2xl flex items-center gap-4 text-[11px] font-black shadow-2xl shadow-emerald-100/40 hover:bg-emerald-500 hover:scale-105 transition-all"><Lucide.FileStack size={18} /> تصدير التقرير التنفيذي</button>
           </div>
        </div>

        {/* HERO STRATEGIC CORE */}
        <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center relative">
           <div className="lg:col-span-1 space-y-4">
              <div className="inline-flex items-center gap-3 text-indigo-600 font-black text-[10px] uppercase tracking-[0.5em] px-5 py-2.5 bg-indigo-50/80 border border-indigo-100 rounded-full shadow-sm">
                <Lucide.Globe size={14} strokeWidth={3} />
                Strategic Cockpit Dashboard
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                 {answers.sector === 'ecommerce' ? 'المتجر الاستخباراتي' : 'المشروع الهجين'} <span className="text-indigo-600 block">— {String(answers.problem?.problem || (typeof answers.problem === 'string' ? answers.problem : 'استبصار ذكي')).substring(0, 40)}...</span>
              </h2>
           </div>
           
           <div className="min-w-[320px] bg-slate-900 border border-slate-800 p-8 rounded-[3.5rem] flex items-center justify-between shadow-[0_40px_80px_rgba(0,0,0,0.15)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-indigo-500 to-rose-500 group-hover:h-2 transition-all"></div>
              <div className="flex-1">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2">Confidence Score</p>
                 <div className={`text-xl font-black italic ${analysis.verdictType === 'green' ? 'text-emerald-400' : 'text-amber-400'}`} style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>{analysis.verdict}</div>
              </div>
              <div className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-700">
                 <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6"/>
                    <circle cx="32" cy="32" r="28" fill="none" stroke={analysis.score > 80 ? '#10B981' : '#F59E0B'} strokeWidth="6" strokeDasharray="176" strokeDashoffset={176 - (analysis.score/100)*176} strokeLinecap="round" className="transition-all duration-[2000ms] delay-500" />
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center text-xl font-black text-white tabular-nums tracking-tighter">{analysis.score}%</div>
              </div>
           </div>
        </div>

        {/* FEATURED: THE HYBRID BLUE OCEAN ENGINE */}
        <Charts.HybridInnovationCard data={analysis.hybridInnovation} />

        {/* NAVIGATION TABS ELITE DESIGN */}
        <div className="flex gap-4 pb-4 overflow-x-auto no-scrollbar scroll-smooth">
           {[
             { id: 'overview', label: 'النبض الاستراتيجي', icon: Lucide.Activity },
             { id: 'behavioral', label: 'سيكولوجية العميل', icon: Lucide.UserSearch },
             { id: 'financial', label: 'المحاكي المالي', icon: Lucide.Calculator },
             { id: 'execution', label: 'خارطة الطريق', icon: Lucide.CalendarRange },
             { id: 'risks', label: 'إدارة المخاطر', icon: Lucide.ShieldCheck },
           ].map(t => (
             <button 
               key={t.id} 
               onClick={() => setActiveTab(t.id)} 
               className={`flex items-center gap-4 px-10 py-5 rounded-[2rem] text-[12px] font-black transition-all whitespace-nowrap border-2 relative overflow-hidden group ${
                 activeTab === t.id 
                   ? 'bg-slate-900 text-white border-slate-900 shadow-[0_30px_60px_rgba(0,0,0,0.15)] scale-[1.05] z-10' 
                   : 'bg-white text-slate-400 border-slate-50 hover:border-indigo-100 hover:text-slate-900 shadow-sm'
               }`}
               style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}
             >
               <t.icon size={20} className={activeTab === t.id ? 'text-indigo-400' : 'opacity-40'} />
               {t.label}
               {activeTab === t.id && (
                  <div className="absolute top-0 right-0 w-2 h-full bg-indigo-500 opacity-50"></div>
               )}
             </button>
           ))}
        </div>

        {/* DYNAMIC TAB CONTENT GRID */}
        <div className="animate-in fade-in slide-in-from-right-8 duration-[1000ms] min-h-[600px]">
           {activeTab === 'overview' && <StrategicPulseTab analysis={analysis} />}
           {activeTab === 'behavioral' && <CustomerPsychologyTab analysis={analysis} />}
           {activeTab === 'financial' && <FinancialSimulatorTab analysis={analysis} />}
           {activeTab === 'execution' && <RoadMapTab analysis={analysis} />}
           {activeTab === 'risks' && <RiskManagementTab analysis={analysis} />}
        </div>

        {/* FINAL STRATEGIC CTA ELITE MODE */}
        <div className="relative group overflow-hidden mt-24 rounded-[4rem] shadow-2xl">
           <div className="absolute inset-0 bg-slate-900 -z-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/40 via-slate-900 to-slate-900"></div>
              <Lucide.Rocket size={300} className="absolute -bottom-20 -left-20 text-white/5 -rotate-12 group-hover:translate-x-10 group-hover:translate-y-[-10px] transition-transform duration-[2000ms]" />
           </div>
           
           <div className="p-16 lg:p-24 text-center relative z-10 space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-2 border border-white/10 bg-white/5 rounded-full text-[10px] font-black text-indigo-300 uppercase tracking-[0.5em] backdrop-blur-xl">
                 Ready for Phase 2: Implementation
              </div>
              <h3 className="text-3xl lg:text-6xl font-black text-white tracking-tighter leading-tight" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                هل أنت مستعد لتحويل <br/> هذه الرؤية إلى واقع؟
              </h3>
              <p className="text-md lg:text-lg font-bold text-slate-400 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                 المخطط الاستراتيجي مكتمل. حان الوقت لتفعيل "وضع المحترف" لبناء النموذج المالي الكامل وتجهيز ملف المستثمرين.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-6">
                 <button 
                   onClick={() => setPhase("form")} 
                   className="px-12 py-5 bg-white text-slate-900 rounded-[2rem] text-[13px] font-black hover:bg-indigo-500 hover:text-white hover:scale-[1.03] transition-all shadow-2xl flex items-center gap-4 group/btn"
                   style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}
                 >
                   تفعيل وضع المحترف (Pro Mode)
                   <Lucide.ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
                 </button>
                 <button className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-[2rem] text-[12px] font-black hover:bg-white/10 transition-all backdrop-blur-xl">
                   حجز استشارة (Focus Session)
                 </button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );

  return null;
}

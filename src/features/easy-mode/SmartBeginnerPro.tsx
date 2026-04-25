import React, { useState, useEffect, useRef, useCallback } from "react";
import { QUESTIONS } from "./constants";
import { AiAnalysisResult } from "./types";
import { analyzeWithAI } from "./services/aiService";
import { ProgressDots } from "./components/CommonUI";
import * as Lucide from "lucide-react";
import * as Renderers from "./components/QuestionRenderer";
import ResultPage from "./ResultPage";

export default function SmartBeginnerPro() {
  const [phase, setPhase] = useState<"form" | "analyzing" | "results">("form");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [tempAnswer, setTempAnswer] = useState<any>(null);
  const [error, setError] = useState("");
  const [loadingStep, setLoadingStep] = useState(0);
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
       // Analysis logic is kept but results display is removed
       await analyzeWithAI(finalAnswers, (process.env as any).API_KEY);
       setPhase("results");
    } catch (e: any) {
      setError("حدث خطأ في النظام الاستراتيجي: " + (e.response?.data?.message || e.message));
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

      <div className="flex-1 flex flex-col items-center p-4 lg:p-8 overflow-y-auto no-scrollbar scroll-smooth">
        <div className="max-w-3xl w-full">
          <div key={qIndex} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-slate-900 text-white rounded-xl shadow-sm">
                {(Lucide as any)[currentQ.icon] ? React.createElement((Lucide as any)[currentQ.icon], { size: 18, strokeWidth: 2.5 }) : <Lucide.Target size={18} />}
              </div>
              <h2 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                {currentQ.label}
              </h2>
            </div>
            
            <p className="text-slate-400 font-bold text-sm mb-6 leading-relaxed max-w-3xl opacity-90" style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
              {currentQ.sublabel}
            </p>

            <div className="mt-4">
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
          </div>

          {/* Action Center (Next) */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
             <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic opacity-60">
                You can pivot anytime after result generation.
             </div>
             <button 
               onClick={() => handleAnswer(tempAnswer || answers[currentQ.id] || { skipped: true })}
               className="group relative flex items-center gap-4 px-8 py-3.5 bg-slate-900 text-white rounded-[1.5rem] font-black text-[13px] shadow-[0_30px_60px_rgba(0,0,0,0.25)] hover:scale-[1.03] transition-all hover:bg-indigo-600 overflow-hidden"
             >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}>
                   {qIndex === QUESTIONS.length - 1 ? 'توليد الرؤية الاستراتيجية' : 'الخطوة التالية'}
                </span>
                <Lucide.Zap size={16} className="group-hover:text-amber-400 group-hover:scale-110 transition-all font-black" />
             </button>
          </div>
        
          {error && (
            <div className="mt-6 p-4 bg-rose-50 border-2 border-rose-100 rounded-2xl text-rose-600 text-[12px] font-black flex items-center gap-3 animate-in shake duration-500">
              <Lucide.AlertOctagon size={20} />
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

  if (phase === "results") return <ResultPage />;

  return null;
}

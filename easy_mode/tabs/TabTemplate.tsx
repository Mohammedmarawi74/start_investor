import React, { useState, useCallback, useMemo } from 'react';
import * as Lucide from "lucide-react";
import { TOKENS, BaseCard } from "../result_components/CardDesignSystem";
import { ProgressDots } from "../components/CommonUI";
import * as Renderers from "../components/QuestionRenderer";
import { WizardGuidance } from "../components/WizardGuidance";
import { WIZARD_GUIDANCE_DATA } from "../wizardGuidanceData";

export interface TabQuestion {
  id: string;
  label: string;
  sublabel: string;
  icon: string;
  type: string;
  options?: any[];
  profiles?: any[];
  items?: any[];
  goals?: any[];
  step?: number; // Optional grouping
}

export interface TabConfig {
  id: string;
  title: string;
  subtitle: string;
  bannerTitle: string;
  bannerSubtitle: string;
  themeColor: string;
  questions: TabQuestion[];
  loadingMessages: string[];
  resultsTitle: string;
}

interface TabTemplateProps {
  config: TabConfig;
  isGenerated: boolean;
  onGenerate: (answers: any) => void;
  renderResults: (answers: any) => React.ReactNode;
}

export const TabTemplate: React.FC<TabTemplateProps> = ({ 
  config, 
  isGenerated, 
  onGenerate,
  renderResults 
}) => {
  const [answers, setAnswers] = useState<any>(null);

  const handleGenerate = (vals: any) => {
    setAnswers(vals);
    onGenerate(vals);
  };

  return (
    <div className="fade-in" style={{ display: "flex", flexDirection: "column", gap: TOKENS.spacing.pageGap, width: "100%" }}>
      {!isGenerated ? (
        <TabForm 
          config={config} 
          onFinish={handleGenerate} 
        />
      ) : (
        <div className="animate-in fade-in duration-700">
          <div style={{ 
            marginTop: "12px", 
            marginBottom: "32px", 
            display: "flex", 
            alignItems: "center", 
            gap: 16,
            padding: "0 8px"
          }}>
            <div style={{ 
              width: 44, 
              height: 44, 
              borderRadius: "14px", 
              background: `linear-gradient(135deg, ${config.themeColor} 0%, ${config.themeColor}dd 100%)`, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              color: "#fff", 
              boxShadow: `0 10px 25px ${config.themeColor}40`,
              flexShrink: 0
            }}>
              <Lucide.ShieldCheck size={24} />
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: "28px", fontWeight: 900, color: TOKENS.colors.text.title, margin: 0, letterSpacing: "-0.03em" }}>{config.resultsTitle}</h2>
            </div>
          </div>
          {renderResults(answers)}
        </div>
      )}
    </div>
  );
};

const TabForm = ({ config, onFinish }: { config: TabConfig, onFinish: (vals: any) => void }) => {
  const [currentStepNumber, setCurrentStepNumber] = useState(1);
  const [answers, setAnswers] = useState<any>({});
  const [tempAnswers, setTempAnswers] = useState<any>({}); // Changed to object for multiple questions per step
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  // Group questions by step
  const steps = useMemo(() => {
    const map = new Map<number, TabQuestion[]>();
    config.questions.forEach(q => {
      const s = q.step || 1;
      if (!map.has(s)) map.set(s, []);
      map.get(s)!.push(q);
    });
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]).map(([num, qs]) => ({ num, qs }));
  }, [config.questions]);

  const currentStep = steps.find(s => s.num === currentStepNumber) || steps[0];
  const totalSteps = steps.length;

  const handleNext = useCallback(() => {
     // Merge temp answers into permanent answers
     const newAnswers = { ...answers, ...tempAnswers };
     setAnswers(newAnswers);
     setTempAnswers({});

     if (currentStepNumber < totalSteps) {
        setCurrentStepNumber(currentStepNumber + 1);
     } else {
        setIsAnalyzing(true);
        let i = 0;
        const interval = setInterval(() => {
          i++;
          if (i < config.loadingMessages.length) setLoadingStep(i);
          else {
            clearInterval(interval);
            onFinish(newAnswers);
          }
        }, 1200);
     }
  }, [currentStepNumber, totalSteps, answers, tempAnswers, config, onFinish]);

  const setSingleAnswer = (id: string, val: any) => {
    setTempAnswers(prev => ({ ...prev, [id]: val }));
  };

  if (!config.questions || config.questions.length === 0) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <Lucide.Hammer size={48} style={{ color: config.themeColor, marginBottom: "20px" }} />
        <h3 style={{ fontSize: "20px", fontWeight: 900 }}>هذا المختبر قيد التحديث</h3>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="fade-in" style={{ 
        minHeight: "650px", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
        background: "#0f172a",
        borderRadius: TOKENS.radius.card,
        padding: "32px",
        color: "#fff"
      }}>
         <Lucide.Cpu size={48} className="animate-spin-slow" style={{ color: config.themeColor, marginBottom: "24px" }} />
         <h2 style={{ fontSize: "20px", fontWeight: 900, marginBottom: "12px" }}>جاري استخراج التحليلات الذكية...</h2>
         <div style={{ padding: "12px 24px", background: "rgba(255,255,255,0.05)", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.1)" }}>
            <p style={{ fontSize: "12px", color: config.themeColor, fontWeight: 800 }}>{config.loadingMessages[loadingStep]}</p>
         </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
      {/* Dynamic Laboratory Header */}
      <div style={{ 
        padding: "24px 32px", 
        background: "#fff", 
        borderRadius: "20px", 
        border: `1.5px solid ${config.themeColor}30`,
        display: "flex",
        alignItems: "center",
        gap: 16
      }}>
        <div style={{ background: config.themeColor, color: "#fff", width: 40, height: 40, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Lucide.Beaker size={22} />
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: "16px", fontWeight: 900, color: TOKENS.colors.text.title, margin: 0 }}>{config.bannerTitle}</h4>
          <p style={{ fontSize: "13px", color: TOKENS.colors.text.muted, margin: "2px 0 0", fontWeight: 600 }}>{config.bannerSubtitle}</p>
        </div>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "600px 600px", 
        gap: 32, 
        width: "100%",
        justifyContent: "center", // Center both cards
        alignItems: "stretch"
      }}>
        {/* Right Column - Wizard Form */}
        <BaseCard isInitiallyOpen={true} style={{ 
          display: "flex", 
          flexDirection: "column",
          border: `3px solid ${config.themeColor}`,
          boxShadow: `0 0 40px ${config.themeColor}40, 0 0 100px ${config.themeColor}15, inset 0 0 20px ${config.themeColor}05`,
          background: `linear-gradient(135deg, #ffffff, ${config.themeColor}08)`,
          position: "relative",
          overflow: "visible",
          padding: "24px",
          margin: 0,
          borderRadius: "20px",
          width: "600px", // Exact 600px width requested
          flexShrink: 0
        }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}>
                <ProgressDots 
                  steps={steps.map(s => ({ icon: s.qs[0].icon, id: s.num.toString() }))} 
                  current={currentStepNumber - 1} 
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {currentStep.qs.map((q, idx) => (
                  <div key={q.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 0.1}s` }}>
                    {/* Question Title */}
                    <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                      <div style={{ width: "34px", height: "34px", background: "#0f172a", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>
                        {React.createElement((Lucide as any)[q.icon] || Lucide.Target, { size: 18 })}
                      </div>
                      <div>
                        <h2 style={{ fontSize: "16px", fontWeight: 900, color: TOKENS.colors.text.title, marginBottom: "0px" }}>{q.label}</h2>
                        <p style={{ fontSize: "12px", color: TOKENS.colors.text.muted, fontWeight: 700 }}>{q.sublabel}</p>
                      </div>
                    </div>

                    {/* Question Content */}
                    <div style={{ minHeight: "60px" }}>
                        <RenderQuestion 
                          question={q} 
                          answer={tempAnswers[q.id] || answers[q.id]} 
                          onAnswer={(val) => setSingleAnswer(q.id, val)}
                          themeColor={config.themeColor}
                        />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "60px", paddingTop: "32px", borderTop: `1px solid ${TOKENS.colors.border}`, display: "flex", justifyContent: "space-between" }}>
              <button 
                onClick={() => currentStepNumber > 1 && setCurrentStepNumber(currentStepNumber - 1)}
                disabled={currentStepNumber === 1}
                style={{ padding: "12px 32px", borderRadius: "15px", background: "#f8fafc", border: `1px solid ${TOKENS.colors.border}`, color: TOKENS.colors.text.body, fontWeight: 900, cursor: currentStepNumber === 1 ? "not-allowed" : "pointer", opacity: currentStepNumber === 1 ? 0.3 : 1 }}
              >
                السابق
              </button>
              <button 
                onClick={handleNext}
                style={{ 
                  padding: "16px 48px", 
                  borderRadius: "18px", 
                  background: config.themeColor, 
                  color: "#fff", 
                  fontWeight: 900, 
                  fontSize: "16px", 
                  boxShadow: `0 15px 30px ${config.themeColor}30`,
                  transition: "all 0.4s",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  cursor: "pointer"
                }}
              >
                  <span>{currentStepNumber === totalSteps ? "تحليل النتائج النهائية" : "الخطوة التالية"}</span>
                  <Lucide.Zap size={20} fill="currentColor" />
              </button>
            </div>
          </div>
        </BaseCard>

        {/* Left Column - Guidance */}
        <WizardGuidance 
          currentStep={currentStepNumber}
          totalSteps={totalSteps}
          themeColor={config.themeColor}
          configId={config.id}
        />
      </div>
    </div>
  );
};

const RenderQuestion = ({ question, answer, onAnswer, themeColor }: { question: TabQuestion, answer: any, onAnswer: (val: any) => void, themeColor: string }) => {
  const handleSelect = (val: any) => {
    onAnswer(val);
  };

  switch (question.type) {
    case 'cards':
       return <Renderers.QuestionCards question={question} onSelect={handleSelect} selected={answer} tempAnswer={answer} setTempAnswer={onAnswer} themeColor={themeColor} />;
    case 'textarea_choice':
       return <Renderers.QuestionTextAreaChoice question={question} onSelect={handleSelect} selected={answer} tempAnswer={answer} setTempAnswer={onAnswer} themeColor={themeColor} />;
    case 'empathy_map':
       return <Renderers.EmpathyMapRenderer question={question} onSelect={handleSelect} selected={answer} tempAnswer={answer} setTempAnswer={onAnswer} themeColor={themeColor} />;
    case 'competition_map':
       return <Renderers.CompetitionMap question={question} onSelect={handleSelect} selected={answer} tempAnswer={answer} setTempAnswer={onAnswer} themeColor={themeColor} />;
    case 'profile_builder':
       return <Renderers.MultiSelectionRenderer question={question} items={question.profiles!} fieldPrefix="customer" onSelect={handleSelect} selected={answer} tempAnswer={answer} setTempAnswer={onAnswer} themeColor={themeColor} />;
    case 'resources_check':
       return <Renderers.MultiSelectionRenderer question={question} items={question.items!} fieldPrefix="" onSelect={handleSelect} selected={answer} tempAnswer={answer} setTempAnswer={onAnswer} themeColor={themeColor} />;
    case 'validation_scale':
       return <Renderers.ValidationScale question={question} onSelect={handleSelect} selected={answer} tempAnswer={answer} setTempAnswer={onAnswer} themeColor={themeColor} />;
    case 'goal_matrix':
       return <Renderers.MultiSelectionRenderer question={question} items={question.goals!} fieldPrefix="" onSelect={handleSelect} selected={answer} tempAnswer={answer} setTempAnswer={onAnswer} themeColor={themeColor} />;
    case 'fear_select':
       return <Renderers.FearSelect question={question} onSelect={handleSelect} selected={answer} tempAnswer={answer} setTempAnswer={onAnswer} themeColor={themeColor} />;
    default:
       return <div>Unknown Question Type: {question.type}</div>;
  }
};

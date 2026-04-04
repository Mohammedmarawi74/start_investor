
import React from 'react';
import { THEME } from '../constants';
import { Question } from '../types';
import * as Lucide from 'lucide-react';

interface RendererProps {
  question: Question;
  onSelect: (val: any) => void;
  selected: any;
  tempAnswer: any;
  setTempAnswer: (val: any) => void;
}

const LucideIcon: React.FC<{ name: string; size?: number; color?: string; fill?: string }> = ({ name, size = 20, color = THEME.text, fill = "none" }) => {
  const IconComponent = (Lucide as any)[name] || Lucide.HelpCircle;
  return <IconComponent size={size} color={color} fill={fill} strokeWidth={2} />;
};

// --- Enhanced Selection Card (Supports Multi-Selection for Cross-Sector) ---
export const QuestionCards: React.FC<RendererProps> = ({ question, onSelect, selected, tempAnswer, setTempAnswer }) => {
  const isMulti = question.multi;
  const currentSelection = isMulti ? (tempAnswer || []) : selected;

  const handleToggle = (val: string) => {
    if (isMulti) {
      if (currentSelection.includes(val)) {
        setTempAnswer(currentSelection.filter((v: string) => v !== val));
      } else {
        setTempAnswer([...currentSelection, val]);
      }
    } else {
      onSelect(val);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {question.options?.map(opt => {
          const active = isMulti ? currentSelection.includes(opt.val) : selected === opt.val;
          return (
            <button key={opt.val} onClick={() => handleToggle(opt.val)}
              style={{
                padding: "24px 20px", borderRadius: 20, border: `2px solid ${active ? THEME.accent : 'transparent'}`,
                background: active ? THEME.accentDim : THEME.bgSecondary,
                cursor: "pointer", textAlign: "right", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: active ? THEME.accentGlow : "none",
                display: "flex", flexDirection: "column", gap: 8,
              }}>
              <div style={{ 
                width: 44, height: 44, borderRadius: 12, background: active ? '#fff' : 'rgba(0,0,0,0.03)',
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <LucideIcon name={opt.icon || 'Box'} size={24} color={active ? THEME.accent : THEME.textMuted} />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: THEME.text, marginBottom: 4, fontFamily: THEME.fontDisplay }}>{opt.title}</div>
                <div style={{ fontSize: 12, color: THEME.textMuted, lineHeight: 1.6, fontFamily: THEME.fontBody }}>{opt.desc}</div>
              </div>
            </button>
          );
        })}
      </div>
      {isMulti && currentSelection.length >= 2 && (
         <button onClick={() => onSelect(currentSelection)}
           style={{ background: THEME.text, color: "#FFF", border: "none", borderRadius: 16, padding: "18px 48px", fontSize: 15, fontWeight: 800, cursor: "pointer", alignSelf: "flex-end", display: "flex", alignItems: "center", gap: 10, fontFamily: THEME.fontDisplay }}>
           <span>دمج القطاعات واستمر</span>
           <Lucide.ArrowLeft size={18} />
         </button>
      )}
    </div>
  );
};

// --- Empathy Map Renderer (2x2 Behavioral Grid) ---
export const EmpathyMapRenderer: React.FC<RendererProps> = ({ question, onSelect, tempAnswer, setTempAnswer }) => {
   const current = tempAnswer || {};
   const isDone = Object.keys(current).length >= (question.options?.length || 0);

   return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {question.options?.map((opt, i) => (
               <div key={opt.val} style={{ background: THEME.bgSecondary, borderRadius: 24, padding: 20, border: `1px solid ${current[opt.val] ? THEME.accent : THEME.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                     <LucideIcon name={i === 0 ? 'Eye' : i === 1 ? 'Ear' : i === 2 ? 'Brain' : 'AlertTriangle'} size={20} color={THEME.textMuted} />
                     <span style={{ fontSize: 12, fontWeight: 800, color: THEME.text, fontFamily: THEME.fontDisplay }}>{opt.label}</span>
                  </div>
                  <textarea 
                     placeholder="صف ملاحظتك هنا..."
                     value={current[opt.val] || ""}
                     onChange={(e) => setTempAnswer({ ...current, [opt.val]: e.target.value })}
                     style={{ width: "100%", background: "#FFF", border: `1px solid ${THEME.border}`, borderRadius: 14, padding: 12, fontSize: 13, resize: "none", height: 80, fontFamily: THEME.fontBody, outline: "none" }}
                  />
               </div>
            ))}
         </div>
         {isDone && (
            <button onClick={() => onSelect(current)}
              style={{ background: THEME.text, color: "#FFF", border: "none", borderRadius: 16, padding: "18px 48px", fontSize: 15, fontWeight: 800, cursor: "pointer", alignSelf: "flex-end", display: "flex", alignItems: "center", gap: 10, fontFamily: THEME.fontDisplay }}>
              <span>حفظ التحليل السلوكي</span>
              <Lucide.ArrowLeft size={18} />
            </button>
         )}
      </div>
   );
};

// --- Textarea + Choice ---
export const QuestionTextAreaChoice: React.FC<RendererProps> = ({ question, onSelect, tempAnswer, setTempAnswer }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    <textarea
      placeholder={question.placeholder}
      value={tempAnswer?.text || ""}
      onChange={e => setTempAnswer({ ...tempAnswer, text: e.target.value })}
      rows={5}
      style={{
        background: THEME.bgSecondary, border: `1px solid ${THEME.border}`, borderRadius: 20, padding: 20,
        color: THEME.text, fontSize: 16, lineHeight: 1.8, resize: "none", fontFamily: THEME.fontBody,
        outline: "none", width: "100%", transition: "border 0.2s",
      }}
      onFocus={(e) => e.target.style.border = `1px solid ${THEME.accent}`}
      onBlur={(e) => e.target.style.border = `1px solid ${THEME.border}`}
    />
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {question.options?.map(opt => (
        <button key={opt.val} onClick={() => onSelect({ problem: tempAnswer?.text || "", problem_type: opt.val })}
          style={{
            padding: "16px 20px", borderRadius: 16, border: `1px solid ${THEME.border}`,
            background: THEME.bgCard, cursor: "pointer", textAlign: "right",
            fontSize: 14, fontWeight: 700, color: THEME.text, display: "flex", justifyContent: "space-between",
            transition: "all 0.2s", fontFamily: THEME.fontBody, alignItems: "center"
          }}>
          <Lucide.ChevronLeft size={18} color={THEME.textDim} />
          <span>{opt.label}</span>
        </button>
      ))}
    </div>
  </div>
);

// --- Multi-Step Selectors ---
export const MultiSelectionRenderer: React.FC<RendererProps & { items: any[], fieldPrefix: string }> = ({ items, onSelect, tempAnswer, setTempAnswer, fieldPrefix }) => {
  const isDone = tempAnswer && Object.keys(tempAnswer).length >= items.length;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {items.map(item => (
        <div key={item.id}>
          <div style={{ fontSize: 12, fontWeight: 800, color: THEME.textDim, marginBottom: 12, letterSpacing: "0.05em", fontFamily: THEME.fontDisplay }}>{item.label.toUpperCase()}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {item.options.map((opt: string) => {
              const active = (tempAnswer || {})[item.id] === opt;
              return (
                <button key={opt} onClick={() => setTempAnswer({ ...(tempAnswer || {}), [item.id]: opt })}
                  style={{
                    padding: "10px 18px", borderRadius: 12, border: `1px solid ${active ? THEME.accent : THEME.border}`,
                    background: active ? THEME.accent : THEME.bgCard, cursor: "pointer",
                    fontSize: 13, color: active ? "#FFF" : THEME.text, fontWeight: 700, transition: "all 0.2s",
                    fontFamily: THEME.fontBody,
                  }}>{opt}</button>
              );
            })}
          </div>
        </div>
      ))}
      {isDone && (
        <button onClick={() => {
          const ansIndex: any = {};
          items.forEach(p => { 
            const key = fieldPrefix ? `${fieldPrefix}_${p.id}` : p.id;
            ansIndex[key] = (tempAnswer || {})[p.id]; 
          });
          onSelect(ansIndex);
        }}
          style={{ marginTop: 12, background: THEME.text, color: "#FFF", border: "none", borderRadius: 16, padding: "16px 36px", fontSize: 15, fontWeight: 800, cursor: "pointer", alignSelf: "flex-end", display: "flex", alignItems: "center", gap: 10, fontFamily: THEME.fontDisplay }}>
          <span>استمر</span>
          <Lucide.ArrowLeft size={18} />
        </button>
      )}
    </div>
  );
};

// --- Competition Map ---
export const CompetitionMap: React.FC<RendererProps> = ({ question, onSelect, tempAnswer, setTempAnswer }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {question.options?.map(opt => {
        const active = (tempAnswer || {}).competition === opt.val;
        return (
          <button key={opt.val} onClick={() => setTempAnswer({ ...(tempAnswer || {}), competition: opt.val })}
            style={{
              padding: "24px 20px", borderRadius: 20, border: `2px solid ${active ? THEME.accent : 'transparent'}`,
              background: active ? THEME.accentDim : THEME.bgSecondary,
              cursor: "pointer", textAlign: "right", transition: "all 0.3s",
              boxShadow: active ? THEME.accentGlow : "none",
            }}>
            <div style={{ 
              width: 44, height: 44, borderRadius: 12, background: active ? '#fff' : 'rgba(0,0,0,0.03)',
              display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12
            }}>
              <LucideIcon name={opt.icon || 'Layers'} size={24} color={active ? THEME.accent : THEME.textMuted} />
            </div>
            <div style={{ fontSize: 15, fontWeight: 800, color: THEME.text, marginBottom: 4, fontFamily: THEME.fontDisplay }}>{opt.title}</div>
            <div style={{ fontSize: 12, color: THEME.textMuted, fontFamily: THEME.fontBody }}>{opt.desc}</div>
          </button>
        );
      })}
    </div>
    {(tempAnswer || {}).competition && (
      <div className="animate-in fade-in duration-300" style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 12 }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: THEME.textDim, fontFamily: THEME.fontDisplay }}>{question.followup?.label}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {question.followup?.options.map(opt => {
            const active = (tempAnswer || {}).competitive_advantage === opt;
            return (
              <button key={opt} onClick={() => setTempAnswer({ ...(tempAnswer || {}), competitive_advantage: opt })}
                style={{
                  padding: "10px 18px", borderRadius: 12, border: `1px solid ${active ? THEME.gold : THEME.border}`,
                  background: active ? THEME.gold : THEME.bgCard, cursor: "pointer",
                  fontSize: 13, color: active ? "#FFF" : THEME.text, fontWeight: 700, transition: "all 0.3s",
                }}>{opt}</button>
            );
          })}
        </div>
        {(tempAnswer || {}).competitive_advantage && (
          <button onClick={() => onSelect(tempAnswer)}
            style={{ background: THEME.text, color: "#FFF", border: "none", borderRadius: 16, padding: "16px 36px", fontSize: 15, fontWeight: 800, cursor: "pointer", alignSelf: "flex-end", marginTop: 12, display: "flex", alignItems: "center", gap: 10 }}>
            <span>استمر</span>
            <Lucide.ArrowLeft size={18} />
          </button>
        )}
      </div>
    )}
  </div>
);

// --- Validation Scale ---
export const ValidationScale: React.FC<RendererProps> = ({ question, onSelect }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
    {question.options?.map(opt => (
      <button key={opt.val} onClick={() => onSelect(opt.val)}
        style={{
          padding: "20px 24px", borderRadius: 20, border: `1px solid ${THEME.border}`,
          background: THEME.bgCard, cursor: "pointer", textAlign: "right",
          display: "flex", alignItems: "center", gap: 20, transition: "all 0.3s",
          boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
        }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: THEME.accentDim, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <LucideIcon name={opt.icon || 'Check'} color={THEME.accent} size={22} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: THEME.text, marginBottom: 2, fontFamily: THEME.fontDisplay }}>{opt.title}</div>
          <div style={{ fontSize: 12, color: THEME.textMuted, fontFamily: THEME.fontBody }}>{opt.desc}</div>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i < (opt.score || 0) ? THEME.accent : '#E2E8F0' }} />
          ))}
        </div>
      </button>
    ))}
  </div>
);

// --- Fear Select (Multi-choice) ---
export const FearSelect: React.FC<RendererProps> = ({ question, onSelect, tempAnswer, setTempAnswer }) => {
  const selectedList = tempAnswer || [];
  const isDone = selectedList.length > 0;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {question.options?.map(opt => {
          const active = selectedList.includes(opt.val);
          return (
            <button key={opt.val} onClick={() => {
              if (active) setTempAnswer(selectedList.filter((v: any) => v !== opt.val));
              else setTempAnswer([...selectedList, opt.val]);
            }}
              style={{
                padding: "16px 18px", borderRadius: 16, border: `2px solid ${active ? THEME.accent : THEME.border}`,
                background: active ? THEME.accentDim : THEME.bgCard,
                cursor: "pointer", textAlign: "right", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 14,
              }}>
              <LucideIcon name={opt.icon || 'AlertTriangle'} size={20} color={active ? THEME.accent : THEME.textMuted} />
              <span style={{ fontSize: 14, color: active ? THEME.accent : THEME.text, fontWeight: 700, fontFamily: THEME.fontBody }}>{opt.label}</span>
            </button>
          );
        })}
      </div>
      {isDone && (
        <button onClick={() => onSelect(selectedList)}
          style={{ background: THEME.accent, color: "#FFF", border: "none", borderRadius: 16, padding: "18px 48px", fontSize: 16, fontWeight: 800, cursor: "pointer", alignSelf: "flex-end", marginTop: 12, boxShadow: THEME.accentGlow, display: "flex", alignItems: "center", gap: 12, fontFamily: THEME.fontDisplay }}>
          <span>بدء التوليد الاستراتيجي المحترف</span>
          <Lucide.Sparkles size={18} />
        </button>
      )}
    </div>
  );
};

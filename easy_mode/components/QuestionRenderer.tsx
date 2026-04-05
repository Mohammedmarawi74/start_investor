import React from 'react';
import * as Lucide from 'lucide-react';

interface RendererProps {
  question: any;
  onSelect: (val: any) => void;
  selected: any;
  tempAnswer: any;
  setTempAnswer: (val: any) => void;
  themeColor?: string;
}

const LucideIcon: React.FC<{ name: string; size?: number; className?: string }> = ({ name, size = 20, className = "" }) => {
  const IconComponent = (Lucide as any)[name] || Lucide.HelpCircle;
  return <IconComponent size={size} className={className} strokeWidth={2.5} />;
};

const getDynamicStyles = (active: boolean, themeColor: string) => {
  if (active) {
    return {
      background: themeColor,
      borderColor: themeColor,
      color: "#fff",
      boxShadow: `0 10px 25px ${themeColor}40`,
      transform: "scale(1.02)"
    };
  }
  return {
    background: "#fcfdfe",
    borderColor: "rgba(15, 23, 42, 0.12)", // More visible border
    color: "#0f172a"
  };
};

export const QuestionCards: React.FC<RendererProps> = ({ question, onSelect, selected, tempAnswer, setTempAnswer, themeColor = "#6366f1" }) => {
  const isMulti = question.multi;
  const currentSelection = isMulti ? (tempAnswer || []) : selected;
  const handleToggle = (val: string) => {
    if (isMulti) {
      if (currentSelection?.includes(val)) setTempAnswer(currentSelection.filter((v: string) => v !== val));
      else setTempAnswer([...(currentSelection || []), val]);
    } else {
      if (selected === val) onSelect(null);
      else onSelect(val);
    }
  };
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2.5">
        {question.options?.map((opt: any) => {
          const val = opt.val || opt.id;
          const active = isMulti ? currentSelection?.includes(val) : selected === val;
          const styles = getDynamicStyles(active, themeColor);
          return (
            <button 
              key={val} 
              onClick={() => handleToggle(val)} 
              style={{ ...styles, width: "fit-content", minWidth: "140px", maxWidth: "180px" }} 
              className="group relative flex flex-col items-start text-right p-3 rounded-[1rem] border-2 transition-all duration-500"
            >
              <div style={{ background: active ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.03)", color: active ? "#fff" : themeColor }} className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 transition-all duration-500 ${active ? 'rotate-12' : 'group-hover:scale-110'}`}>
                <LucideIcon name={opt.icon || (question.icon || 'Box')} size={16} />
              </div>
              <div className="pr-1 text-right w-full">
                <div style={{ color: active ? "#fff" : "#0f172a" }} className="text-[12px] font-black mb-0.5 tracking-tight">{opt.title || opt.label}</div>
                <div style={{ color: active ? "rgba(255,255,255,0.7)" : "rgba(15, 23, 42, 0.5)" }} className="text-[9px] font-bold leading-relaxed">{opt.desc}</div>
              </div>
              {active && <div className="absolute top-2.5 left-2.5 animate-in zoom-in"><Lucide.CheckCircle2 size={12} /></div>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const EmpathyMapRenderer: React.FC<RendererProps> = ({ question, tempAnswer, setTempAnswer, themeColor }) => {
   const current = tempAnswer || {};
   const ICONS = ['Eye', 'Ear', 'Brain', 'AlertTriangle'];
    return (
       <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
             {question.options?.map((opt: any, i: number) => (
                <div key={opt.val} className={`p-4 rounded-[1.2rem] border-2 transition-all duration-500 ${current[opt.val] ? 'bg-white border-slate-900/10' : 'bg-slate-50/50 border-slate-100 shadow-inner'}`}>
                   <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: (themeColor || "#6366f1") + "15", color: themeColor }}>
                         <LucideIcon name={ICONS[i]} size={16} />
                      </div>
                      <span className="text-[10px] font-black text-slate-900 tracking-tight">{opt.label}</span>
                   </div>
                   <textarea placeholder="صف ملاحظتك والتحليل هنا..." value={current[opt.val] || ""} onChange={(e) => setTempAnswer({ ...current, [opt.val]: e.target.value })} className="w-full bg-white border-2 border-slate-200 rounded-xl p-3 text-[10px] font-bold text-slate-900 focus:outline-none focus:ring-4 transition-all resize-none h-20 placeholder:text-slate-400 placeholder:opacity-50" />
                </div>
             ))}
          </div>
       </div>
    );
};

export const QuestionTextAreaChoice: React.FC<RendererProps> = ({ question, onSelect, selected, tempAnswer, setTempAnswer, themeColor }) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <div className="space-y-4">
      <div className={`relative group transition-all duration-700 ${focused ? 'scale-[1.01]' : 'scale-100'}`}>
        <textarea placeholder={question.placeholder} value={tempAnswer?.text || ""} onChange={e => setTempAnswer({ ...tempAnswer, text: e.target.value })} rows={4} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={{ borderColor: focused ? themeColor : "#e2e8f0" }} className="relative w-full bg-white border-2 text-slate-900 rounded-[1.5rem] p-4 text-[13px] font-bold leading-relaxed focus:outline-none transition-all shadow-xl resize-none md:text-md" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {question.options?.map((opt: any, i: number) => {
          const active = (tempAnswer || {}).type === opt.val;
          return (
            <button key={opt.val} onClick={() => setTempAnswer({ ...(tempAnswer || {}), type: active ? null : opt.val })} style={{ background: active ? themeColor : "#fff", borderColor: active ? themeColor : "#f1f5f9", color: active ? "#fff" : "#0f172a" }} className="flex items-center justify-between p-3.5 border transition-all group rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-all group-hover:scale-110" style={{ background: active ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.03)", color: active ? "#fff" : themeColor }}>
                  <LucideIcon name={opt.icon || 'Target'} size={16} />
                </div>
                <span className="text-[10px] font-black tracking-tight">{opt.label}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const MultiSelectionRenderer: React.FC<RendererProps & { items: any[], fieldPrefix: string }> = ({ items, tempAnswer, setTempAnswer, themeColor }) => {
  return (
    <div className="space-y-4">
      {items.map(item => (
        <div key={item.id} className="p-3 bg-white border border-slate-100 rounded-2xl">
          <div className="flex items-center gap-2 mb-2 opacity-60">
            {item.icon && <LucideIcon name={item.icon} size={13} />}
            <div className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">{item.label}</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.options.map((opt: string) => {
              const active = (tempAnswer || {})[item.id] === opt;
              return (
                <button key={opt} onClick={() => setTempAnswer({ ...(tempAnswer || {}), [item.id]: active ? null : opt })} style={{ background: active ? "#0f172a" : "#fff", borderColor: active ? "#0f172a" : "#f1f5f9", color: active ? "#fff" : "#64748b" }} className="px-3.5 py-2 rounded-xl text-[10px] font-black transition-all border-2"> {opt} </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export const CompetitionMap: React.FC<RendererProps> = ({ question, tempAnswer, setTempAnswer, themeColor }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {question.options?.map((opt: any) => {
        const active = (tempAnswer || {}).competition === opt.val;
        return (
          <button key={opt.val} onClick={() => setTempAnswer({ ...(tempAnswer || {}), competition: active ? null : opt.val })} style={{ background: active ? themeColor : "#fff", borderColor: active ? themeColor : "#f1f5f9", color: active ? "#fff" : "#0f172a" }} className="flex flex-col items-start text-right p-4 rounded-[1.3rem] border-2 transition-all duration-500 shadow-sm">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${active ? 'bg-white/20' : 'bg-slate-50 text-slate-300'}`}>
              <LucideIcon name={opt.icon || 'Layers'} size={18} />
            </div>
            <div className="text-xs font-black mb-1 tracking-tight">{opt.title}</div>
            <div className={`text-[9px] font-bold ${active ? 'text-indigo-100' : 'text-slate-400'}`}>{opt.desc}</div>
          </button>
        );
      })}
    </div>
  </div>
);

export const ValidationScale: React.FC<RendererProps> = ({ question, onSelect, selected, themeColor = "#6366f1" }) => (
  <div className="space-y-2.5">
    {question.options?.map((opt: any) => {
      const active = selected === opt.val;
      return (
        <button 
          key={opt.val} 
          onClick={() => onSelect(active ? null : opt.val)} 
          className="group w-full flex items-center gap-4 p-4 rounded-[1.3rem] border-2 transition-all duration-500"
          style={{ 
            background: active ? themeColor : "#fff", 
            borderColor: active ? themeColor : "rgba(15, 23, 42, 0.12)",
            color: active ? "#fff" : "#0f172a",
            boxShadow: active ? `0 8px 20px ${themeColor}20` : "none"
          }}
        >
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center`} style={{ background: active ? "rgba(255,255,255,0.2)" : (themeColor + "10"), color: active ? "#fff" : themeColor }}>
            <LucideIcon name={opt.icon || 'Check'} size={20} />
          </div>
          <div className="flex-1 text-right">
            <div className="text-[13px] font-black mb-0.5 tracking-tight">{opt.title}</div>
            <div className="text-[9px] font-bold leading-relaxed" style={{ color: active ? "rgba(255,255,255,0.7)" : "#94a3b8" }}>{opt.desc}</div>
          </div>
          <div className="flex gap-1" dir="rtl">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-all duration-700 ${i < (opt.score || 0) ? 'scale-125 shadow-lg' : ''}`} style={{ background: i < (opt.score || 0) ? (active ? "#fff" : "#10b981") : (active ? "rgba(255,255,255,0.2)" : "#f1f5f9") }} />
            ))}
          </div>
        </button>
      );
    })}
  </div>
);

export const FearSelect: React.FC<RendererProps> = ({ question, tempAnswer, setTempAnswer, themeColor }) => {
  const selectedList = tempAnswer || [];
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.options?.map((opt: any) => {
          const active = selectedList.includes(opt.val);
          return (
            <button key={opt.val} onClick={() => {
                if (active) setTempAnswer(selectedList.filter((v: any) => v !== opt.val));
                else setTempAnswer([...selectedList, opt.val]);
              }} style={{ background: active ? "#fff1f2" : "#fff", borderColor: active ? "#f43f5e" : "#f1f5f9", color: active ? "#e11d48" : "#0f172a" }} className="flex items-center gap-3.5 p-4 rounded-xl border-2 transition-all duration-300">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${active ? 'bg-rose-500 text-white shadow-lg shadow-rose-100' : 'bg-slate-50 text-slate-300'}`}>
                <LucideIcon name={opt.icon || 'AlertTriangle'} size={18} />
              </div>
              <span className="text-[11px] font-black tracking-tight">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

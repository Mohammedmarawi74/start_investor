
import React from 'react';
import * as Lucide from 'lucide-react';

interface RendererProps {
  question: any;
  onSelect: (val: any) => void;
  selected: any;
  tempAnswer: any;
  setTempAnswer: (val: any) => void;
}

const LucideIcon: React.FC<{ name: string; size?: number; className?: string }> = ({ name, size = 20, className = "" }) => {
  const IconComponent = (Lucide as any)[name] || Lucide.HelpCircle;
  return <IconComponent size={size} className={className} strokeWidth={2.5} />;
};

// --- 1. Enhanced Selection Card ---
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
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {question.options?.map((opt: any) => {
          const active = isMulti ? currentSelection.includes(opt.val) : selected === opt.val;
          return (
            <button 
              key={opt.val} 
              onClick={() => handleToggle(opt.val)}
              className={`
                group relative flex flex-col items-start text-right p-3.5 rounded-[1.1rem] border-2 transition-all duration-500
                ${active 
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-100 rotate-1 scale-[1.02]' 
                  : 'bg-white border-slate-50 text-slate-900 hover:border-slate-200 hover:shadow-lg'}
              `}
            >
              <div className={`
                w-9 h-9 rounded-xl flex items-center justify-center mb-2.5 transition-all duration-500
                ${active ? 'bg-white/20 text-white rotate-12' : 'bg-slate-50 text-slate-400 group-hover:scale-110'}
              `}>
                <LucideIcon name={opt.icon || 'Box'} size={18} />
              </div>
              <div className="pr-1">
                <div className="text-[12.5px] font-black mb-0.5 tracking-tight">{opt.title}</div>
                <div className={`text-[9.5px] font-bold leading-relaxed ${active ? 'text-indigo-100' : 'text-slate-400'}`}>
                  {opt.desc}
                </div>
              </div>
              {active && <Lucide.CheckCircle2 size={14} className="absolute top-3 left-3 animate-in zoom-in" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// --- 2. Empathy Map Renderer ---
export const EmpathyMapRenderer: React.FC<RendererProps> = ({ question, tempAnswer, setTempAnswer }) => {
   const current = tempAnswer || {};
   const ICONS = ['Eye', 'Ear', 'Brain', 'AlertTriangle'];
   const FOCUS_COLORS = ['focus:border-blue-500 focus:ring-blue-100', 'focus:border-amber-500 focus:ring-amber-100', 'focus:border-purple-500 focus:ring-purple-100', 'focus:border-rose-500 focus:ring-rose-100'];
   const ICON_COLORS = ['text-blue-500 bg-blue-50', 'text-amber-500 bg-amber-50', 'text-purple-500 bg-purple-50', 'text-rose-500 bg-rose-50'];

    return (
       <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {question.options?.map((opt: any, i: number) => (
                <div key={opt.val} className={`p-4 rounded-[1.2rem] border-2 transition-all duration-500 ${current[opt.val] ? 'bg-white border-slate-900/10' : 'bg-slate-50/50 border-slate-100 shadow-inner'}`}>
                   <div className="flex items-center gap-2.5 mb-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${ICON_COLORS[i]}`}>
                         <LucideIcon name={ICONS[i]} size={18} />
                      </div>
                      <span className="text-[11px] font-black text-slate-900 tracking-tight">{opt.label}</span>
                   </div>
                   <textarea 
                      placeholder="صف ملاحظتك والتحليل هنا..."
                      value={current[opt.val] || ""}
                      onChange={(e) => setTempAnswer({ ...current, [opt.val]: e.target.value })}
                      className={`
                         w-full bg-white border-2 border-slate-200 rounded-xl p-3 text-[10px] font-bold text-slate-900 
                         focus:outline-none focus:ring-4 transition-all resize-none h-20 
                         placeholder:text-slate-400 placeholder:opacity-50
                         ${FOCUS_COLORS[i]}
                      `}
                   />
                </div>
             ))}
          </div>
       </div>
    );
};

// --- 3. Textarea + Choice ---
export const QuestionTextAreaChoice: React.FC<RendererProps> = ({ question, onSelect, tempAnswer, setTempAnswer }) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <div className="space-y-6">
      <div className={`
        relative group transition-all duration-700
        ${focused ? 'scale-[1.01]' : 'scale-100'}
      `}>
        <div className={`
          absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-[2rem] blur opacity-0 transition-opacity duration-700
          ${focused ? 'opacity-30' : 'group-hover:opacity-20'}
        `}></div>
        <textarea
          placeholder={question.placeholder}
          value={tempAnswer?.text || ""}
          onChange={e => setTempAnswer({ ...tempAnswer, text: e.target.value })}
          rows={5}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`
            relative w-full bg-white border-2 text-slate-900 rounded-[1.5rem] p-5 text-sm font-bold leading-relaxed focus:outline-none transition-all shadow-2xl resize-none md:text-md
            ${focused ? 'border-indigo-600 shadow-indigo-100' : 'border-slate-200 shadow-slate-200/50'}
            placeholder:text-slate-400/60
          `}
        />
        <div className={`
          absolute bottom-4 left-4 p-2.5 rounded-xl transition-colors duration-500
          ${focused ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'}
        `}>
          <Lucide.PenTool size={18} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.options?.map((opt: any, i: number) => {
          const COLORS = ['text-blue-500', 'text-rose-500', 'text-amber-500', 'text-indigo-600'];
          const active = (tempAnswer || {}).type === opt.val;
          return (
            <button 
              key={opt.val} 
              onClick={() => setTempAnswer({ ...(tempAnswer || {}), type: opt.val })}
              className={`
                flex items-center justify-between p-4 border transition-all group rounded-xl
                ${active ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' : 'bg-white border-slate-100 text-slate-800 hover:border-slate-300 hover:shadow-xl'}
              `}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ${active ? 'bg-white/20 text-white' : 'bg-slate-50 ' + COLORS[i]}`}>
                  <LucideIcon name={opt.icon || 'Target'} size={18} />
                </div>
                <span className={`text-[10px] font-black tracking-tight ${active ? 'text-white' : 'text-slate-800'}`}>{opt.label}</span>
              </div>
              {active ? <Lucide.CheckCircle2 size={14} className="text-white" /> : <Lucide.ChevronLeft size={14} className="text-slate-100 group-hover:text-indigo-600 group-hover:-translate-x-1 transition-all" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// --- 4. Multi-Step Selectors ---
 export const MultiSelectionRenderer: React.FC<RendererProps & { items: any[], fieldPrefix: string }> = ({ items, tempAnswer, setTempAnswer }) => {
  return (
    <div className="space-y-6">
      {items.map(item => (
        <div key={item.id} className="p-4 bg-white border border-slate-100 rounded-2xl">
          <div className="flex items-center gap-2 mb-2 opacity-60">
            {item.icon && <LucideIcon name={item.icon} size={14} />}
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{item.label}</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.options.map((opt: string) => {
              const active = (tempAnswer || {})[item.id] === opt;
              return (
                <button 
                  key={opt} 
                  onClick={() => setTempAnswer({ ...(tempAnswer || {}), [item.id]: opt })}
                  className={`
                    px-4 py-2.5 rounded-xl text-[10.5px] font-black transition-all border-2
                    ${active 
                      ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-indigo-100 scale-105' 
                      : 'bg-white border-slate-50 text-slate-500 hover:border-slate-200 shadow-sm'}
                  `}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

// --- 5. Competition Map ---
export const CompetitionMap: React.FC<RendererProps> = ({ question, tempAnswer, setTempAnswer }) => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {question.options?.map((opt: any) => {
        const active = (tempAnswer || {}).competition === opt.val;
        return (
          <button 
            key={opt.val} 
            onClick={() => setTempAnswer({ ...(tempAnswer || {}), competition: opt.val })}
            className={`
              flex flex-col items-start text-right p-5 rounded-[1.5rem] border-2 transition-all duration-500
              ${active 
                ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-100' 
                : 'bg-white border-slate-50 text-slate-900 hover:border-slate-200 shadow-sm'}
            `}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${active ? 'bg-white/20' : 'bg-slate-50 text-slate-300'}`}>
              <LucideIcon name={opt.icon || 'Layers'} size={20} />
            </div>
            <div className="text-sm font-black mb-1 tracking-tight">{opt.title}</div>
            <div className={`text-[10px] font-bold ${active ? 'text-indigo-100' : 'text-slate-400'}`}>{opt.desc}</div>
          </button>
        );
      })}
    </div>
    
    {(tempAnswer || {}).competition && (
      <div className="space-y-6 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-4">
        <div className="flex items-center gap-2">
           <Lucide.Trophy size={16} className="text-amber-500" />
           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{question.followup?.label}</div>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {question.followup?.options.map((opt: string) => {
            const active = (tempAnswer || {}).competitive_advantage === opt;
            return (
              <button 
                key={opt} 
                onClick={() => setTempAnswer({ ...(tempAnswer || {}), competitive_advantage: opt })}
                className={`
                  px-5 py-3 rounded-xl text-[11px] font-black transition-all border-2
                  ${active 
                    ? 'bg-amber-500 border-amber-500 text-white shadow-xl' 
                    : 'bg-white border-slate-100 text-slate-500 hover:border-amber-200'}
                `}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    )}
  </div>
);

// --- 6. Validation Scale ---
export const ValidationScale: React.FC<RendererProps> = ({ question, onSelect }) => (
  <div className="space-y-3">
    {question.options?.map((opt: any) => (
      <button 
        key={opt.val} 
        onClick={() => onSelect(opt.val)}
        className="group w-full flex items-center gap-5 p-5 bg-white border border-slate-50 rounded-[1.5rem] hover:border-indigo-200 hover:shadow-xl hover:-translate-x-1 transition-all"
      >
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110">
          <LucideIcon name={opt.icon || 'Check'} size={24} />
        </div>
        <div className="flex-1 text-right">
          <div className="text-sm font-black text-slate-900 mb-0.5 tracking-tight">{opt.title}</div>
          <div className="text-[10px] font-bold text-slate-400 leading-relaxed">{opt.desc}</div>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-all duration-700 ${i < (opt.score || 0) ? 'bg-emerald-500 scale-125 shadow-lg shadow-emerald-200' : 'bg-slate-100'}`} 
            />
          ))}
        </div>
      </button>
    ))}
  </div>
);

// --- 7. Fear Select ---
export const FearSelect: React.FC<RendererProps> = ({ question, tempAnswer, setTempAnswer }) => {
  const selectedList = tempAnswer || [];
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.options?.map((opt: any) => {
          const active = selectedList.includes(opt.val);
          return (
            <button 
              key={opt.val} 
              onClick={() => {
                if (active) setTempAnswer(selectedList.filter((v: any) => v !== opt.val));
                else setTempAnswer([...selectedList, opt.val]);
              }}
              className={`
                flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300
                ${active 
                  ? 'bg-rose-50 border-rose-500 text-rose-600 shadow-xl' 
                  : 'bg-white border-slate-50 text-slate-900 hover:border-slate-200 shadow-sm'}
              `}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${active ? 'bg-rose-500 text-white shadow-lg shadow-rose-100' : 'bg-slate-50 text-slate-300'}`}>
                <LucideIcon name={opt.icon || 'AlertTriangle'} size={20} />
              </div>
              <span className="text-xs font-black tracking-tight">{opt.label}</span>
              {active && <Lucide.XCircle size={14} className="mr-auto text-rose-300" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

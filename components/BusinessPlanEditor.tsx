
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  FileText, BarChart3, Lightbulb, Target, Users, DollarSign, 
  Briefcase, BrainCircuit, Save, Edit3, Plus, X, Zap, LayoutGrid, CheckCircle2 
} from 'lucide-react';
import { PlanSection } from '../types';

// --- Configuration & Helpers ---
export const SECTION_CONFIG: Record<string, { icon: any, color: string }> = {
  'الملخص': { icon: FileText, color: 'text-blue-500' },
  'السوق': { icon: BarChart3, color: 'text-purple-500' },
  'العمل': { icon: Lightbulb, color: 'text-amber-500' },
  'التسويق': { icon: Target, color: 'text-rose-500' },
  'الهيكل': { icon: Users, color: 'text-emerald-500' },
  'المالية': { icon: DollarSign, color: 'text-cyan-500' },
  'default': { icon: Briefcase, color: 'text-slate-500' }
};

export const getSectionIcon = (title: string) => {
  const entry = Object.entries(SECTION_CONFIG).find(([key]) => title.includes(key));
  return entry ? entry[1].icon : SECTION_CONFIG.default.icon;
};

// --- Sub-components ---
const EditorHeader = ({ progress, onToggleAi, isAiOpen, setActiveTab }: { progress: number, onToggleAi: () => void, isAiOpen: boolean, setActiveTab: (tab: string) => void }) => (
  <nav className="h-auto lg:h-24 bg-white border-b border-slate-50 flex flex-col lg:flex-row items-center justify-between px-5 sm:px-10 py-4 lg:py-0 shrink-0 z-30 gap-4 lg:gap-0 sticky top-0">
    {/* Row 1: Icon, Title, AI Button (Mobile) */}
    <div className="flex items-center justify-between w-full lg:w-auto">
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Back Button for mobile */}
        <button 
          onClick={() => setActiveTab('home')}
          className="lg:hidden w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-100 active:scale-90 transition-all ml-1"
        >
          <ArrowLeft size={18} className="rotate-180" />
        </button>

        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-950 text-white rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 shrink-0">
          <Briefcase size={20} className="lg:w-6 lg:h-6" />
        </div>
        <div>
          <h1 className="text-lg lg:text-2xl font-black text-slate-950 leading-none">المحرر الاستراتيجي</h1>
          <span className="text-[9px] lg:text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-1 block">Cloud Synced</span>
        </div>
      </div>
      
      {/* AI Toggle Button - Mobile Only */}
      <button 
        onClick={onToggleAi}
        className={`lg:hidden p-2.5 rounded-xl border-2 transition-all ${
          isAiOpen ? 'bg-slate-950 text-white border-slate-950 shadow-lg' : 'bg-white border-slate-100 text-slate-400'
        }`}
      >
        <BrainCircuit size={18} />
      </button>
    </div>

    {/* Row 2: Progress & Desktop Controls */}
    <div className="flex flex-col sm:flex-row items-center justify-between lg:justify-end w-full lg:w-auto gap-3 sm:gap-4 lg:gap-6">
      <div className="flex items-center gap-4 bg-slate-50 px-4 lg:px-5 py-2.5 lg:py-3 rounded-[1rem] lg:rounded-2xl border border-slate-100 w-full lg:w-auto">
        <span className="text-[10px] lg:text-[11px] font-bold text-slate-400 whitespace-nowrap">جاهزية الاستثمار</span>
        <div className="flex-1 lg:w-32 h-1.5 lg:h-2 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 transition-all duration-700 shadow-[0_4px_10px_rgba(37,99,235,0.3)]" style={{ width: `${progress}%` }} />
        </div>
        <span className="text-[10px] lg:text-xs font-black text-slate-900">{progress}%</span>
      </div>
      
      <button 
        onClick={onToggleAi}
        className={`hidden lg:flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all shadow-sm ${
          isAiOpen ? 'bg-slate-950 text-white shadow-xl' : 'bg-white border-2 border-slate-100 text-slate-600 hover:border-slate-300'
        }`}
      >
        <BrainCircuit size={18} />
        <span className="whitespace-nowrap">ذكاء الخطة</span>
      </button>
    </div>
  </nav>
);

const AiMetric = ({ label, score, warning }: { label: string, score: number, warning?: boolean }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-[11px] font-bold">
      <span className="text-slate-500">{label}</span>
      <span className={warning ? 'text-amber-600' : 'text-slate-900'}>{score}%</span>
    </div>
    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div 
        className={`h-full transition-all duration-1000 ${warning ? 'bg-amber-400' : 'bg-blue-600'}`} 
        style={{ width: `${score}%` }} 
      />
    </div>
  </div>
);

// --- Main Component ---
interface BusinessPlanEditorProps {
  sections: PlanSection[];
  onSectionUpdate: (id: string, updates: Partial<PlanSection>) => void;
  expandedSectionId: string | null;
  onSectionExpand: (id: string | null) => void;
  setActiveTab: (tab: string) => void;
}

export const BusinessPlanEditor: React.FC<BusinessPlanEditorProps> = ({
  sections,
  onSectionUpdate,
  expandedSectionId,
  onSectionExpand,
  setActiveTab
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [isAiSidebarOpen, setIsAiSidebarOpen] = useState(true);
  const editorRef = useRef<HTMLTextAreaElement>(null);

  // حساب التقدم
  const totalProgress = useMemo(() => 
    sections.length > 0 ? Math.round((sections.filter(s => s.isCompleted).length / sections.length) * 100) : 0, 
  [sections]);

  const activeSection = useMemo(() => 
    sections.find(s => s.id === expandedSectionId) || sections[0] || { id: '0', title: 'خطة جديدة', content: '', isCompleted: false },
  [sections, expandedSectionId]);

  // التحكم في التعديل
  const startEditing = () => {
    setEditingId(activeSection.id);
    setEditContent(activeSection.content || '');
  };

  const cancelEditing = () => setEditingId(null);

  const saveContent = () => {
    onSectionUpdate(activeSection.id, { 
      content: editContent, 
      isCompleted: editContent.trim().length > 50 
    });
    setEditingId(null);
  };

  return (
    <div dir="rtl" className="h-full lg:h-[calc(100vh-64px)] flex flex-col font-['IBM_Plex_Sans_Arabic'] bg-white overflow-hidden text-slate-900 w-full max-w-full">
      
      <EditorHeader 
        progress={totalProgress} 
        onToggleAi={() => setIsAiSidebarOpen(!isAiSidebarOpen)} 
        isAiOpen={isAiSidebarOpen} 
        setActiveTab={setActiveTab}
      />

      <div className="flex-1 flex overflow-hidden w-full max-w-full">
        
        {/* الملاح الجانبي (Right) - Hidden on Mobile */}
        <aside className="hidden lg:flex w-72 border-l border-slate-100 flex flex-col bg-white shrink-0">
          <div className="p-8">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 text-right">هيكل الاستراتيجية</h4>
            <div className="space-y-1.5">
              {sections.map((section) => {
                const Icon = getSectionIcon(section.title);
                const isActive = activeSection.id === section.id;
                return (
                  <button 
                    key={section.id}
                    onClick={() => { onSectionExpand(section.id); cancelEditing(); }}
                    className={`w-full group p-4 rounded-2xl text-right transition-all flex items-center justify-between border-2 ${
                      isActive 
                        ? 'bg-blue-50/50 border-blue-600 text-blue-950 shadow-sm' 
                        : 'border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                      <span className={`text-sm ${isActive ? 'font-black' : 'font-medium'}`}>{section.title}</span>
                    </div>
                    {section.isCompleted && <CheckCircle2 size={16} className="text-emerald-500" />}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* منطقة المحرر المركزية (Center) */}
        <main className="flex-1 overflow-y-auto bg-slate-50/30 flex flex-col items-center py-6 sm:py-10 px-4 sm:px-6">
          <div className="w-full max-w-4xl flex flex-col flex-1">
            <div className="bg-white rounded-3xl sm:rounded-[2.5rem] border border-slate-200/60 shadow-sm flex-1 flex flex-col overflow-hidden">
              
              {/* ترويسة القسم الحالية */}
              <div className="px-6 sm:px-12 py-6 sm:py-8 border-b border-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 text-right">
                <div className="flex items-center gap-3 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-900 shadow-inner">
                    {React.createElement(getSectionIcon(activeSection.title), { size: 20 })}
                  </div>
                  <h2 className="text-xl sm:text-3xl font-black tracking-tight">{activeSection.title}</h2>
                </div>
              </div>

              {/* محتوى المحرر */}
              <div className="flex-1 p-6 sm:p-12 text-right">
                {editingId === activeSection.id ? (
                  <div className="h-full flex flex-col">
                    <textarea 
                      autoFocus
                      ref={editorRef}
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="w-full flex-1 text-base sm:text-xl font-medium text-slate-800 leading-relaxed outline-none border-none resize-none placeholder:text-slate-200"
                      placeholder="ابدأ بصياغة رؤيتك الاستراتيجية هنا..."
                    />
                    <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <button onClick={cancelEditing} className="text-slate-400 hover:text-rose-500 font-bold text-xs sm:text-sm transition-colors text-center">إلغاء التغييرات</button>
                      <button 
                        onClick={saveContent}
                        className="px-6 py-3.5 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                      >
                        <Save size={16} className="sm:w-[18px] sm:h-[18px]" /> حفظ المسودة الاستراتيجية
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col">
                    {activeSection.content ? (
                      <div className="flex-1">
                        <p className="text-base sm:text-xl font-medium text-slate-700 leading-normal sm:leading-[2] whitespace-pre-wrap">{activeSection.content}</p>
                        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
                          <button 
                            onClick={startEditing}
                            className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
                          >
                            <Edit3 size={16} /> تعديل النص
                          </button>
                          <button className="px-6 py-3 bg-blue-50 text-blue-600 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-100 transition-all">
                            <Zap size={16} /> تحسين بواسطة AI
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 flex flex-col items-center justify-center text-center opacity-60 py-10">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6">
                          <Plus size={24} className="sm:w-8 sm:h-8 text-slate-300" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-400 mb-6">هذا القسم ينتظر إبداعك...</h3>
                        <button 
                          onClick={startEditing}
                          className="px-8 py-3.5 sm:px-10 sm:py-4 bg-slate-950 text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:scale-105 transition-all"
                        >
                          ابدأ الكتابة الآن
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        {/* لوحة التحليل الذكي (Left) - Fixed with safe z-index */}
        {isAiSidebarOpen && (
          <aside className="fixed inset-y-0 left-0 z-[45] lg:relative lg:inset-auto w-full sm:w-80 bg-white border-r border-slate-100 flex flex-col shrink-0 animate-in slide-in-from-left duration-500 shadow-2xl lg:shadow-none">
            <div className="hidden lg:flex p-8 border-b border-slate-50 items-center justify-between text-right">
              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">تحليل الجودة اللحظي</h4>
              <button onClick={() => setIsAiSidebarOpen(false)} className="text-slate-300 hover:text-slate-900 transition-colors"><X size={18} /></button>
            </div>
            
            <div className="p-8 space-y-10 overflow-y-auto no-scrollbar text-right">
              {/* بطاقة التقييم */}
              <div className="bg-slate-950 rounded-[2rem] p-8 text-white relative overflow-hidden">
                <Zap className="absolute -bottom-10 -right-10 w-40 h-40 text-white/5 rotate-12" />
                <div className="relative z-10">
                  <span className="text-[10px] font-black text-blue-400 uppercase mb-2 block">Score الاستراتيجي</span>
                  {/* @ts-ignore */}
                  <div className="text-5xl font-black mb-4 leading-none">{activeSection.aiScore || 0}%</div>
                  <p className="text-slate-400 text-xs leading-relaxed font-medium">
                    يُنصح بزيادة التركيز على <span className="text-white font-bold">الميزة التنافسية</span> لتحسين فرص قبول الخطة.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h5 className="text-[10px] font-black text-slate-400 uppercase flex items-center gap-2">
                  <LayoutGrid size={14} /> مقاييس الأداء
                </h5>
                <div className="space-y-5">
                   {/* @ts-ignore */}
                  <AiMetric label="وضوح الرؤية" score={activeSection.aiScore || 90} />
                   {/* @ts-ignore */}
                  <AiMetric label="التحليل التنافسي" score={45} warning />
                   {/* @ts-ignore */}
                  <AiMetric label="الواقعية المالية" score={85} />
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};
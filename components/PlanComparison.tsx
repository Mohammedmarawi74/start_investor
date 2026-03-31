
import React, { useState } from 'react';
import { 
  ArrowRightLeft, 
  CheckCircle2, 
  ChevronLeft, 
  FileText, 
  LayoutGrid, 
  Search, 
  Zap, 
  BrainCircuit, 
  Info,
  ArrowUpRight,
  TrendingUp,
  X,
  Target,
  // Added Sparkles to the import list to fix the undefined reference error
  Sparkles
} from 'lucide-react';

interface Plan {
  id: string;
  title: string;
  status: 'draft' | 'completed';
  progress: number;
  chapters: number;
  lastEdited: string;
  category: string;
  aiScore: number;
}

const MOCK_PLANS: Plan[] = [
  { id: '1', title: 'خطة عمل eslam', status: 'completed', progress: 100, chapters: 7, lastEdited: 'منذ أسبوع', category: 'تقنية', aiScore: 92 },
  { id: '2', title: 'خطة عمل ورع', status: 'draft', progress: 10, chapters: 7, lastEdited: 'منذ 5 أيام', category: 'تجارة', aiScore: 45 },
  { id: '3', title: 'خطة عمل eslam eslam', status: 'draft', progress: 15, chapters: 6, lastEdited: 'منذ أسبوع', category: 'خدمات', aiScore: 30 },
  { id: '4', title: 'خطة عمل test2', status: 'completed', progress: 100, chapters: 6, lastEdited: 'منذ 3 أسابيع', category: 'صناعة', aiScore: 88 },
  { id: '5', title: 'خطة عمل qweqwe', status: 'draft', progress: 5, chapters: 6, lastEdited: 'منذ أسبوع', category: 'عقارات', aiScore: 12 },
  { id: '6', title: 'خطة عمل jdsj', status: 'draft', progress: 0, chapters: 6, lastEdited: 'منذ أسبوع', category: 'أخرى', aiScore: 0 },
];

export const PlanComparison: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isComparing, setIsComparing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSelection = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(prev => prev.filter(i => i !== id));
    } else {
      if (selectedIds.length < 4) {
        setSelectedIds(prev => [...prev, id]);
      }
    }
  };

  const selectedPlans = MOCK_PLANS.filter(p => selectedIds.includes(p.id));

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-100">
              <ArrowRightLeft size={22} strokeWidth={2.5} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">مقارنة الخطط</h1>
          </div>
          <p className="text-gray-400 font-bold text-sm">اختر خطتين أو أكثر للمقارنة وتحليل نقاط القوة والضعف.</p>
        </div>
      </div>

      {!isComparing ? (
        <>
          {/* Selection Stage */}
          <div className="bg-white/60 backdrop-blur-md p-3 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4">
             <div className="relative flex-1">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="ابحث عن خطة لاختيارها..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 bg-white border border-gray-50 rounded-xl outline-none focus:border-indigo-200 transition-all font-bold text-xs"
                />
             </div>
             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4">
               {selectedIds.length} / 4 خطط مختارة
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_PLANS.map(plan => {
              const isSelected = selectedIds.includes(plan.id);
              return (
                <div 
                  key={plan.id}
                  onClick={() => toggleSelection(plan.id)}
                  className={`group relative bg-white border rounded-[2rem] p-6 cursor-pointer transition-all duration-500 overflow-hidden ${
                    isSelected ? 'border-indigo-500 shadow-2xl shadow-indigo-100 ring-4 ring-indigo-50/50 scale-[1.02]' : 'border-gray-100 hover:border-indigo-200 hover:shadow-lg'
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-300 group-hover:bg-indigo-50 group-hover:text-indigo-400'
                    }`}>
                      <FileText size={24} />
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-gray-200'
                    }`}>
                      {isSelected && <CheckCircle2 size={14} strokeWidth={4} />}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 truncate group-hover:text-indigo-600 transition-colors">{plan.title}</h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">{plan.category}</span>
                    <span className="text-[10px] font-bold text-gray-400">{plan.chapters} فصول</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-end text-[11px] font-bold">
                      <span className="text-gray-400 uppercase tracking-tighter">التقدم</span>
                      <span className="text-indigo-600">{plan.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-50 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 transition-all duration-1000" style={{ width: `${plan.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Action Bar */}
          {selectedIds.length > 0 && (
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-10 duration-500">
               <div className="bg-gray-900 text-white px-8 py-5 rounded-[2.5rem] shadow-2xl flex items-center gap-8 border border-white/10 backdrop-blur-xl">
                  <div className="flex -space-x-3 overflow-hidden flex-row-reverse">
                    {selectedPlans.map(p => (
                      <div key={p.id} className="w-10 h-10 rounded-full bg-indigo-600 border-4 border-gray-900 flex items-center justify-center text-[10px] font-bold uppercase">
                        {p.title.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <div className="h-8 w-px bg-white/10 hidden md:block"></div>
                  <div>
                    <h4 className="text-sm font-bold whitespace-nowrap">{selectedIds.length} خطط مختارة</h4>
                    <p className="text-[10px] text-gray-400 font-bold">بحد أقصى 4 خطط للمقارنة</p>
                  </div>
                  <button 
                    disabled={selectedIds.length < 2}
                    onClick={() => setIsComparing(true)}
                    className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-2xl text-xs font-bold transition-all shadow-xl shadow-indigo-900/40 flex items-center gap-2 whitespace-nowrap"
                  >
                    <ArrowRightLeft size={16} />
                    بدء المقارنة الآن
                  </button>
                  <button onClick={() => setSelectedIds([])} className="p-2 text-gray-500 hover:text-white transition-colors">
                    <X size={20} />
                  </button>
               </div>
            </div>
          )}
        </>
      ) : (
        /* Analysis Stage */
        <div className="animate-in fade-in zoom-in-95 duration-700 space-y-8">
           <div className="flex items-center justify-between">
              <button 
                onClick={() => setIsComparing(false)}
                className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold text-xs transition-all group"
              >
                <ChevronLeft size={18} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                العودة للاختيار
              </button>
              <div className="flex gap-3">
                 <button className="px-6 py-2.5 bg-white border border-gray-100 rounded-xl text-xs font-bold text-indigo-600 shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                    <Zap size={16} />
                    تصدير تقرير المقارنة
                 </button>
                 <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-100 hover:scale-105 transition-all flex items-center gap-2">
                    <BrainCircuit size={16} />
                    تحليل ذكي للمقارنة
                 </button>
              </div>
           </div>

           <div className="bg-white border border-gray-100 rounded-[3rem] shadow-xl overflow-hidden">
              <table className="w-full text-right">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="p-8 text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] border-b border-gray-100">المؤشر الاستراتيجي</th>
                    {selectedPlans.map(plan => (
                      <th key={plan.id} className="p-8 border-b border-gray-100 text-center min-w-[200px]">
                        <div className="flex flex-col items-center gap-3">
                           <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-indigo-600">
                             <FileText size={24} />
                           </div>
                           <h4 className="text-base font-bold text-gray-900">{plan.title}</h4>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="p-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center"><TrendingUp size={16} /></div>
                        <span className="text-sm font-bold text-gray-600">نسبة الإنجاز الكلية</span>
                      </div>
                    </td>
                    {selectedPlans.map(plan => (
                      <td key={plan.id} className="p-8 text-center font-bold text-gray-900">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-xl">{plan.progress}%</span>
                          <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                             <div className="h-full bg-blue-500" style={{ width: `${plan.progress}%` }}></div>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center"><Zap size={16} /></div>
                        <span className="text-sm font-bold text-gray-600">تقييم الذكاء الاصطناعي</span>
                      </div>
                    </td>
                    {selectedPlans.map(plan => (
                      <td key={plan.id} className="p-8 text-center">
                        <span className={`text-xl font-bold ${plan.aiScore > 80 ? 'text-emerald-600' : plan.aiScore > 40 ? 'text-amber-500' : 'text-rose-500'}`}>
                          {plan.aiScore || '--'}%
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center"><LayoutGrid size={16} /></div>
                        <span className="text-sm font-bold text-gray-600">عدد الفصول المكتملة</span>
                      </div>
                    </td>
                    {selectedPlans.map(plan => (
                      <td key={plan.id} className="p-8 text-center font-bold text-gray-700 text-lg">
                        {plan.chapters} / 7
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center"><Target size={16} /></div>
                        <span className="text-sm font-bold text-gray-600">القطاع المستهدف</span>
                      </div>
                    </td>
                    {selectedPlans.map(plan => (
                      <td key={plan.id} className="p-8 text-center">
                        <span className="text-[11px] font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                          {plan.category}
                        </span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
           </div>

           {/* AI Comparative Insights */}
           <div className="bg-gradient-to-br from-gray-900 to-indigo-950 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10"><BrainCircuit size={180} strokeWidth={1} /></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                 <div className="w-20 h-20 bg-indigo-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-indigo-500/50">
                    <Sparkles size={40} className="text-white animate-pulse" />
                 </div>
                 <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">توصية المحلل الذكي</h3>
                    <p className="text-indigo-100/70 font-bold text-base leading-relaxed max-w-2xl">
                      بناءً على المقارنة، تعتبر <span className="text-white underline decoration-indigo-400">"{selectedPlans.sort((a,b) => b.aiScore - a.aiScore)[0].title}"</span> هي الأكثر نضوجاً وجاهزية للعرض الاستثماري، بفضل تكامل فصولها وقوة الصياغة اللغوية والمالية فيها.
                    </p>
                 </div>
                 <button className="px-10 py-4 bg-white text-gray-900 rounded-[1.5rem] text-sm font-bold hover:bg-indigo-50 transition-all flex items-center gap-2">
                    عرض التحليل التفصيلي
                    <ArrowUpRight size={18} />
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

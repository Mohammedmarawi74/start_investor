
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
  Sparkles,
  BarChart3,
  ShieldCheck,
  History,
  MoreVertical,
  Activity,
  Plus
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
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700 font-['IBM_Plex_Sans_Arabic']">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-50/50 text-indigo-600 rounded-2xl border border-indigo-100 shadow-sm mb-6 transition-transform hover:scale-105 cursor-default">
             <div className="p-1 px-2.5 bg-indigo-600 text-white rounded-lg shadow-lg shadow-indigo-200">
               <ArrowRightLeft size={16} strokeWidth={3} />
             </div>
             <span className="text-[11px] font-black uppercase tracking-[0.1em]">أدوات تحليلية متقدمة</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">مقارنة الخطط الاستراتيجية</h1>
          <p className="text-slate-500 font-bold text-base max-w-2xl leading-relaxed">بوابتك لتحليل أداء مشاريعك. اختر ما يصل إلى 4 خطط لاكتشاف الفوارق التنافسية وتحسين جودة العرض الاستثماري.</p>
        </div>
      </div>

      {!isComparing ? (
        <>
          {/* Selection & Search Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
             <div className="lg:col-span-8 relative group">
                <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-500" size={20} />
                <input 
                  type="text" 
                  placeholder="ابحث عن خطة عمل محددة بالاسم أو القطاع..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-16 pl-6 py-5 bg-white border-2 border-slate-100 rounded-[2rem] outline-none shadow-sm focus:border-indigo-500 focus:ring-8 focus:ring-indigo-500/5 transition-all text-sm font-bold text-slate-800 placeholder:text-slate-400"
                />
             </div>
             <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-[2rem] py-5 px-8 flex items-center justify-between">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none">الحالة</span>
                <div className="flex items-center gap-3">
                   <div className="flex -space-x-2.5 rtl:space-x-reverse h-8">
                     {selectedPlans.map((p, i) => (
                       <div key={p.id} className="w-8 h-8 rounded-full bg-indigo-600 border-4 border-slate-50 flex items-center justify-center text-[8px] font-black text-white shadow-md relative z-[10]" style={{ zIndex: 10 - i }}>
                         {p.title.charAt(0)}
                       </div>
                     ))}
                     {[...Array(4 - selectedIds.length)].map((_, i) => (
                       <div key={i} className="w-8 h-8 rounded-full bg-slate-100 border-4 border-slate-50 flex items-center justify-center text-slate-300 relative z-[0]">
                         <Plus size={12} />
                       </div>
                     ))}
                   </div>
                   <span className="text-sm font-black text-slate-900">{selectedIds.length} / 4 مختارات</span>
                </div>
             </div>
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {MOCK_PLANS.filter(p => !searchTerm || p.title.includes(searchTerm) || p.category.includes(searchTerm)).map(plan => {
              const isSelected = selectedIds.includes(plan.id);
              return (
                <div 
                  key={plan.id}
                  onClick={() => toggleSelection(plan.id)}
                  className={`group relative bg-white border-2 rounded-[2.5rem] p-8 cursor-pointer transition-all duration-500 overflow-hidden ${
                    isSelected 
                      ? 'border-indigo-600 shadow-2xl shadow-indigo-100 -translate-y-2' 
                      : 'border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {/* Selected Indicator Glow */}
                  {isSelected && (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-transparent pointer-events-none"></div>
                  )}

                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isSelected ? 'bg-indigo-600 text-white rotate-[15deg] scale-110 shadow-xl shadow-indigo-200' : 'bg-slate-50 text-slate-300 group-hover:bg-indigo-50 group-hover:text-indigo-400'
                    }`}>
                      <FileText size={28} strokeWidth={2.5} />
                    </div>
                    <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all duration-500 ${
                      isSelected ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-100 bg-slate-50/50'
                    }`}>
                      {isSelected ? <CheckCircle2 size={16} strokeWidth={3} /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-indigo-200"></div>}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-3 truncate group-hover:text-indigo-600 transition-colors">{plan.title}</h3>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-[10px] font-black text-slate-400 bg-slate-100/80 px-3 py-1.5 rounded-lg uppercase tracking-wider">{plan.category}</span>
                    <div className="h-4 w-px bg-slate-100"></div>
                    <span className="text-[10px] font-black text-slate-400">{plan.chapters} فصول مكتمـلة</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">جاهزية الخطة</span>
                      <span className={`text-sm font-black ${isSelected ? 'text-indigo-600' : 'text-slate-800'}`}>{plan.progress}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
                      <div 
                        className={`h-full rounded-full transition-all duration-[1.5s] ease-out shadow-[0_0_10px_rgba(79,70,229,0.3)] ${
                          isSelected ? 'bg-indigo-600' : 'bg-slate-300 group-hover:bg-indigo-400'
                        }`} 
                        style={{ width: `${plan.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className={`absolute -bottom-4 -right-4 w-12 h-12 rounded-full blur-2xl transition-opacity duration-500 ${isSelected ? 'bg-indigo-500/20 opacity-100' : 'opacity-0'}`}></div>
                </div>
              );
            })}
          </div>

          {/* Interactive Floating Toolbar */}
          {selectedIds.length > 0 && (
            <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[60] animate-in slide-in-from-bottom-20 duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
               <div className="bg-slate-900/90 backdrop-blur-2xl text-white px-10 py-6 rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.3)] flex items-center gap-10 border border-white/10 ring-1 ring-white/5 ring-inset">
                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <div className="flex items-center -space-x-3 rtl:space-x-reverse">
                        {selectedPlans.map((p, i) => (
                          <div key={p.id} className="w-12 h-12 rounded-2xl bg-indigo-600 border-[6px] border-slate-900 flex items-center justify-center text-[10px] font-black shadow-2xl relative" style={{ zIndex: 10 - i }}>
                            {p.title.charAt(0)}
                          </div>
                        ))}
                      </div>
                      <div className="absolute -top-2 -right-2 bg-indigo-500 text-[10px] font-black px-2 py-0.5 rounded-full border-2 border-slate-900">
                        {selectedIds.length}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-black whitespace-nowrap mb-0.5">تحليل {selectedIds.length} خطط استراتيجية</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest opacity-60">جاهز للمقارنة العميقة</p>
                    </div>
                  </div>

                  <div className="h-10 w-px bg-white/10 hidden md:block"></div>

                  <div className="flex items-center gap-3">
                    <button 
                      disabled={selectedIds.length < 2}
                      onClick={() => setIsComparing(true)}
                      className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-2xl text-sm font-black transition-all shadow-2xl shadow-indigo-900/40 flex items-center gap-3 whitespace-nowrap hover:scale-105 active:scale-95 active:shadow-inner"
                    >
                      <ArrowRightLeft size={18} strokeWidth={3} />
                      تحليل ومقارنة الخطط
                    </button>
                    <button 
                      onClick={() => setSelectedIds([])} 
                      className="p-4 text-slate-400 hover:text-white hover:bg-white/10 rounded-2xl transition-all"
                      title="إلغاء التحديد"
                    >
                      <X size={20} strokeWidth={3} />
                    </button>
                  </div>
               </div>
            </div>
          )}
        </>
      ) : (
        /* Enhanced Analysis Interface */
        <div className="animate-in fade-in zoom-in-95 duration-1000 space-y-10 pb-20">
           {/* Analysis Header */}
           <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/50 backdrop-blur-xl border border-slate-100 p-8 rounded-[3rem] shadow-sm">
              <button 
                onClick={() => setIsComparing(false)}
                className="flex items-center gap-3 text-slate-500 hover:text-indigo-600 font-black text-xs transition-all group px-4 py-2 hover:bg-indigo-50 rounded-xl"
              >
                <ChevronLeft size={20} className="rotate-180 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                العودة لمعرض الخطط
              </button>
              
              <div className="flex flex-wrap justify-center gap-4">
                 <button className="px-8 py-3.5 bg-white border-2 border-slate-100 rounded-2xl text-[11px] font-black text-slate-600 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all flex items-center gap-3 group">
                    <History size={18} className="group-hover:rotate-[-30deg] transition-transform" />
                    سجل المقارنات
                 </button>
                 <button className="px-8 py-3.5 bg-indigo-600 text-white rounded-2xl text-[11px] font-black shadow-2xl shadow-indigo-200 hover:scale-[1.03] transition-all flex items-center gap-3 group">
                    <Zap size={18} className="animate-pulse" />
                    تصدير ملف التحليل الشامل
                 </button>
              </div>
           </div>

           {/* Comparative Matrix Table */}
           <div className="bg-white border-2 border-slate-100 rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50">
                      <th className="p-10 text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] border-b-2 border-slate-100 min-w-[280px]">المصـوفة التنافسية</th>
                      {selectedPlans.map(plan => (
                        <th key={plan.id} className="p-10 border-b-2 border-slate-100 text-center min-w-[250px] relative overflow-hidden group">
                          {/* Top indicator bar matching selection */}
                          <div className="absolute top-0 left-0 right-0 h-1.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                          
                          <div className="flex flex-col items-center gap-5">
                             <div className="w-20 h-20 bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center text-indigo-600 group-hover:rotate-[-5deg] group-hover:scale-110 transition-all duration-500">
                               <FileText size={36} strokeWidth={2.5} />
                             </div>
                             <div className="text-center">
                               <h4 className="text-lg lg:text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">{plan.title}</h4>
                               <span className="text-[10px] font-black text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full uppercase tracking-widest">{plan.category}</span>
                             </div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-slate-50">
                    <tr className="hover:bg-slate-50/30 transition-colors group">
                      <td className="p-10">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform"><TrendingUp size={20} strokeWidth={2.5} /></div>
                            <span className="text-base font-black text-slate-800">مستوى نضوج الخطة</span>
                          </div>
                          <p className="text-[10px] font-bold text-slate-400 pr-13 hidden lg:block">قياس مدى اكتمال وصياغة المناهج الاستراتيجية</p>
                        </div>
                      </td>
                      {selectedPlans.map(plan => (
                        <td key={plan.id} className="p-10 text-center">
                          <div className="flex flex-col items-center gap-4">
                            <div className="relative flex items-center justify-center">
                               <span className="text-2xl font-black text-slate-900">{plan.progress}%</span>
                               {/* Mock progress circle glow or simple stat */}
                            </div>
                            <div className="w-full max-w-[160px] h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
                               <div className="h-full bg-indigo-600 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.4)]" style={{ width: `${plan.progress}%` }}></div>
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>
                    
                    <tr className="hover:bg-slate-50/30 transition-colors group">
                      <td className="p-10">
                         <div className="flex flex-col gap-2">
                           <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform"><Sparkles size={20} strokeWidth={2.5} /></div>
                            <span className="text-base font-black text-slate-800">جودة المحتوى بالـ AI</span>
                           </div>
                           <p className="text-[10px] font-bold text-slate-400 pr-13 hidden lg:block">تقييم مدعوم بالذكاء الاصطناعي لقوة الطرح المالي والفني</p>
                         </div>
                      </td>
                      {selectedPlans.map(plan => (
                        <td key={plan.id} className="p-10 text-center">
                          <div className="inline-flex flex-col items-center p-5 rounded-3xl border-2 border-slate-50 bg-slate-50 shadow-sm transition-all hover:scale-105">
                            <span className={`text-4xl font-black mb-1 ${plan.aiScore > 80 ? 'text-emerald-600' : plan.aiScore > 40 ? 'text-amber-500' : 'text-rose-500'}`}>
                              {plan.aiScore || '--'}
                            </span>
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">درجة التميز</span>
                          </div>
                        </td>
                      ))}
                    </tr>

                    <tr className="hover:bg-slate-50/30 transition-colors group">
                      <td className="p-10">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform"><LayoutGrid size={20} strokeWidth={2.5} /></div>
                            <span className="text-base font-black text-slate-800">تغطية الفصول</span>
                          </div>
                          <p className="text-[10px] font-bold text-slate-400 pr-13 hidden lg:block">عدد الأقسام الاستراتيجية التي تم صياغتها</p>
                        </div>
                      </td>
                      {selectedPlans.map(plan => (
                        <td key={plan.id} className="p-10 text-center">
                          <div className="text-2xl font-black text-slate-800">
                             {plan.chapters} <span className="text-sm font-bold text-slate-300 mx-1">/</span> <span className="text-slate-400">7</span>
                          </div>
                          <div className="flex justify-center gap-1 mt-3">
                             {[...Array(7)].map((_, i) => (
                               <div key={i} className={`w-2 h-2 rounded-full ${i < plan.chapters ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.3)]' : 'bg-slate-100'}`}></div>
                             ))}
                          </div>
                        </td>
                      ))}
                    </tr>

                    <tr className="hover:bg-slate-50/30 transition-colors group">
                      <td className="p-10">
                         <div className="flex flex-col gap-2">
                           <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform"><Target size={20} strokeWidth={2.5} /></div>
                            <span className="text-base font-black text-slate-800">القطاع والجمهور</span>
                           </div>
                           <p className="text-[10px] font-bold text-slate-400 pr-13 hidden lg:block">تصنيف نوع العمل الموجه له الخطة</p>
                         </div>
                      </td>
                      {selectedPlans.map(plan => (
                        <td key={plan.id} className="p-10 text-center">
                          <span className="inline-block px-5 py-2.5 rounded-2xl bg-indigo-50/50 text-indigo-700 text-xs font-black border border-indigo-100 shadow-sm">
                            {plan.category}
                          </span>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
           </div>

           {/* AI Comparative Insights Section - Premium Glassmorphism */}
           <div className="bg-slate-950 rounded-[4rem] p-12 text-white shadow-3xl relative overflow-hidden group">
              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-[2s]"><BrainCircuit size={280} strokeWidth={0.5} /></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>
              
              <div className="relative z-10 flex flex-col xl:flex-row items-center gap-12">
                 <div className="w-32 h-32 bg-indigo-600 rounded-[3rem] flex items-center justify-center shadow-[0_20px_50px_rgba(79,70,229,0.5)] rotate-[-10deg] shrink-0">
                    <BrainCircuit size={60} className="text-white animate-pulse" strokeWidth={1} />
                 </div>
                 
                 <div className="flex-1 text-center xl:text-right">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/10">
                       <Sparkles size={14} className="text-indigo-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-indigo-100">تحليل الذكاء الاصطناعي التوليدي</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black mb-6 leading-tight">توصية المستشار الاستراتيجي المنصة</h3>
                    <p className="text-indigo-100/70 font-bold text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto xl:mx-0">
                      بناءً على مصفوفة المقارنة، تتفوق الخطة <span className="text-white decoration-indigo-500 decoration-4 underline underline-offset-8">"{selectedPlans.sort((a,b) => b.aiScore - a.aiScore)[0].title}"</span> بجدارة استثمارية استثنائية. 
                      نوصي بالتركيز على تطوير <span className="text-indigo-400">"{selectedPlans.sort((a,b) => a.aiScore - b.aiScore)[0].title}"</span> في الجوانب المالية لتقليل الفجوة التنافسية.
                    </p>
                 </div>
                 
                 <div className="flex flex-col gap-4 w-full xl:w-72 shrink-0">
                   <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl text-sm font-black hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 group">
                      عرض التقرير المفصل
                      <ArrowUpRight size={18} strokeWidth={3} className="text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                   <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-sm font-black text-white hover:bg-white/10 transition-all text-center">
                      تحميل بصيغة PDF
                   </button>
                 </div>
              </div>

              {/* Decorative side accent */}
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
           </div>
           
           {/* Section Footer Helper */}
           <div className="flex items-center justify-center gap-3 text-slate-400">
             <Info size={14} />
             <p className="text-[11px] font-bold">يتم تحديث البيانات والإحصائيات تلقائياً عند كل تعديل تجريه على خططك</p>
           </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Sparkles, Plus, Zap, ArrowUpRight, FileText, LayoutDashboard, 
  Star, TrendingUp, BrainCircuit, Clock, CheckCircle2, ChevronLeft, 
  Crown, Cloud, Monitor, Search, Filter, Bell, AlertTriangle
} from 'lucide-react';

export const Home: React.FC<{ setActiveTab: (tab: any) => void }> = ({ setActiveTab }) => {
  const [taskFilter, setTaskFilter] = useState<'all' | 'high' | 'overdue'>('all');

  const recentPlans = [
    { id: '1', title: 'خطة عمل تطبيق تيك', progress: 85, category: 'تقنية', color: 'bg-emerald-500' },
    { id: '2', title: 'مشروع كافيه لاونج', progress: 40, category: 'تجارة', color: 'bg-amber-500' },
  ];

  const currentTasks = [
    { id: 't1', title: 'تحليل SWOT للمنافسين', project: 'تطبيق تيك', priority: 'high', dueDate: 'اليوم' },
    { id: 't2', title: 'تحديد الميزانية التشغيلية', project: 'كافيه لاونج', priority: 'medium', dueDate: 'غداً' },
    { id: 't3', title: 'إنشاء الهوية البصرية الأساسية', project: 'تطبيق تيك', priority: 'high', dueDate: 'منذ يومين' },
  ];

  const quickStats = [
    { label: 'الخطط النشطة', value: '12', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50', iconBg: 'bg-blue-100', trend: '+2 هذا الأسبوع' },
    { label: 'نقاط AI المتاحة', value: '85', icon: Zap, color: 'text-purple-600', bg: 'bg-purple-50', iconBg: 'bg-purple-100', trend: 'كافية لـ 15 خطة' },
    { label: 'مهام مكتملة', value: '24', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', iconBg: 'bg-emerald-100', trend: '+15% عن الأمس' },
  ];

  return (
    <div className="min-h-screen text-gray-900 font-sans selection:bg-primary-100" dir="rtl">

      {/* ═══════════════════════════════════════════════
          SECTION 1: HERO + STATS 
          ═══════════════════════════════════════════════ */}
      <section className="relative z-10 w-full">
        
        {/* Hero Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#171A3A] to-[#0D102A] px-6 lg:px-12 py-10 shadow-xl border-b border-white/5 w-full">
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
               <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-500 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-[1100px] mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-right space-y-5 flex-1 w-full max-w-2xl">
                  <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div>
                  متصل الآن
                </div>
                <div className="px-3 py-1 bg-white/10 rounded-full border border-white/10 text-amber-300 text-xs font-bold flex items-center gap-1.5">
                  <Crown size={14} />
                  خطة Pro النشطة
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-black text-white leading-snug">
                أهلاً بك مجدداً، <span className="text-amber-400">عبدالله.</span>
              </h1>
              
              <p className="text-gray-400 text-sm font-semibold max-w-xl">
                لديك <span className="text-white">3 مهام</span> بانتظارك في "مشروع كافيه لاونج"، هل تريد المتابعة من حيث توقفت؟
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button onClick={() => setActiveTab('new-plan')} className="h-10 px-5 bg-white text-gray-900 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <Plus size={16} />
                  خطة عمل جديدة
                </button>
                <button onClick={() => setActiveTab('editor')} className="h-10 px-5 bg-white/10 text-white rounded-xl text-xs font-bold hover:bg-white/20 transition-colors border border-white/10 flex items-center gap-2">
                  <Zap size={16} />
                  متابعة العمل الحالي
                </button>
              </div>
            </div>

            <div className="relative z-10 hidden md:flex h-32 w-32 bg-white/5 rounded-3xl border border-white/10 items-center justify-center backdrop-blur-sm shadow-inner group">
                <BrainCircuit size={50} className="text-indigo-400/80 group-hover:text-indigo-300 transition-colors" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-slate-900 text-primary-600">
                    <Sparkles size={14} />
                </div>
            </div>
            </div>
        </div>

        {/* Stats - overlapping hero bottom for depth */}
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 mt-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {quickStats.map((stat, idx) => (
              <div key={idx} className="relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all flex items-center justify-between group cursor-pointer overflow-hidden"
                style={{ boxShadow: '0 4px 24px rgba(15,23,42,0.08), 0 1px 3px rgba(15,23,42,0.04)' }}>
                {/* Subtle left accent */}
                <div className={`absolute top-3 bottom-3 right-0 w-1 rounded-full ${stat.color.replace('text-', 'bg-')} opacity-60`}></div>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${stat.iconBg} ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <stat.icon size={22} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-[10px] font-bold mb-1">{stat.label}</span>
                    <span className="text-2xl font-black text-gray-900">{stat.value}</span>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-emerald-600 text-[10px] font-bold">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2: RECENT PLANS & AI 
          Background: warm gray with subtle noise texture
          ═══════════════════════════════════════════════ */}
      <section className="relative py-16 px-6 lg:px-12 w-full mt-6"
        style={{ background: 'linear-gradient(180deg, #e2e8f0 0%, #d5dce6 100%)' }}>
        {/* Top decorative shadow for visual separation */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/[0.06] to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/[0.04] to-transparent pointer-events-none"></div>

        <div className="max-w-[1100px] mx-auto space-y-6">
          {/* Section header */}
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-3">
                 <div className="w-1.5 h-7 bg-primary-600 rounded-full"></div>
                 <h2 className="text-xl font-black text-gray-900">آخر الخطط النشطة</h2>
             </div>
             <button onClick={() => setActiveTab('my-plans')} className="text-primary-600 text-[11px] font-bold hover:text-primary-700 flex items-center gap-1 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all">
                عرض الكل
                <ChevronLeft size={14} />
             </button>
          </div>

          {/* 3 equal cards in one row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
             {/* Plan cards */}
             {recentPlans.map(plan => (
                <div key={plan.id} onClick={() => setActiveTab('editor')} className="bg-white rounded-[1.5rem] p-6 hover:shadow-2xl transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden border border-white/80"
                  style={{ boxShadow: '0 8px 32px rgba(15,23,42,0.12), 0 2px 8px rgba(15,23,42,0.06)' }}>
                   <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[1.5rem]"></div>
                   
                   <div className="flex justify-between items-start mb-6 relative z-10">
                       <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
                          <Monitor size={20} />
                       </div>
                       <span className="text-[9px] font-bold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full border border-blue-100">{plan.category}</span>
                   </div>
                   <h3 className="text-base font-black text-gray-900 mb-6 relative z-10">{plan.title}</h3>
                   <div className="mt-auto relative z-10">
                       <div className="flex justify-between items-center mb-2">
                           <span className="text-[10px] font-bold text-gray-400">نسبة الإنجاز</span>
                           <span className="text-xs font-black text-gray-900">{plan.progress}%</span>
                       </div>
                       <div className="h-2 bg-gray-100 rounded-full overflow-hidden w-full">
                           <div className="h-full bg-gradient-to-l from-primary-500 to-primary-600 rounded-full transition-all duration-1000" style={{ width: `${plan.progress}%` }}></div>
                       </div>
                   </div>
                   <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                       <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 border border-primary-100 shadow-sm">
                           <ChevronLeft size={16} />
                       </div>
                   </div>
                </div>
             ))}

             {/* AI Corner card - same size */}
             <div className="bg-white rounded-[1.5rem] p-6 hover:shadow-2xl transition-all cursor-pointer group flex flex-col relative text-center overflow-hidden border border-white/80"
               style={{ boxShadow: '0 8px 32px rgba(15,23,42,0.12), 0 2px 8px rgba(15,23,42,0.06)' }}>
                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-purple-500 to-violet-600 rounded-t-[1.5rem]"></div>
                 
                 <div className="flex justify-between items-start mb-6 relative z-10">
                     <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-purple-100 to-violet-100 text-purple-600 group-hover:scale-110 transition-transform shadow-sm">
                        <BrainCircuit size={20} />
                     </div>
                     <span className="text-[9px] font-bold bg-purple-50 text-purple-600 px-2.5 py-1 rounded-full border border-purple-100">ركن الذكاء</span>
                 </div>
                 <h3 className="text-base font-black text-gray-900 mb-3 text-right relative z-10">تحليل استراتيجي</h3>
                 <p className="text-[11px] font-semibold text-gray-500 leading-relaxed mb-6 text-right">
                     ادمج ميزة <span className="text-purple-600 font-bold">"الدفع المباشر"</span> فوراً لتعزيز قيمة مشروعك وتخفيف التكاليف. 
                 </p>
                 <div className="mt-auto border-t border-gray-100 pt-5 flex justify-between items-center">
                     <button className="text-[10px] font-bold text-purple-600 flex items-center gap-1 hover:text-purple-700">
                        <Sparkles size={12} />
                        تطبيق التوصية
                     </button>
                     <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 group-hover:bg-purple-100 transition-colors cursor-pointer">
                         <ChevronLeft size={14} />
                     </div>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3: MY TASKS 
          Background: WHITE — cards are gray-tinted
          ═══════════════════════════════════════════════ */}
      <section className="relative py-16 px-6 lg:px-12 w-full bg-white">
        <div className="max-w-[1100px] mx-auto relative z-10 space-y-6">
           <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                   <div className="w-1.5 h-7 bg-emerald-500 rounded-full"></div>
                   <h2 className="text-xl font-black text-gray-900">مهامي الحالية</h2>
                   <span className="text-[9px] font-bold bg-rose-50 text-rose-600 px-2.5 py-1 rounded-full border border-rose-100">3 مهام</span>
               </div>
               <div className="flex items-center gap-4">
                   <div className="hidden md:flex items-center bg-gray-100 rounded-full p-1">
                      <button className="px-4 py-1.5 text-[9px] font-bold rounded-full bg-white text-emerald-600 shadow-sm">الكل</button>
                      <button className="px-4 py-1.5 text-[9px] font-bold rounded-full text-gray-500 hover:text-gray-900">أولوية عالية</button>
                      <button className="px-4 py-1.5 text-[9px] font-bold rounded-full text-gray-500 hover:text-gray-900">متأخرة</button>
                   </div>
                   <button onClick={() => setActiveTab('tasks')} className="text-emerald-600 text-[11px] font-bold hover:text-emerald-700 flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 hover:shadow-md transition-all">
                      عرض الكل
                      <ChevronLeft size={14} />
                   </button>
               </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
               {currentTasks.map(task => (
                  <div key={task.id} className="relative rounded-[1.5rem] p-5 hover:shadow-2xl transition-all flex flex-col group cursor-pointer overflow-hidden border border-gray-200/60"
                    style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', boxShadow: '0 2px 12px rgba(15,23,42,0.06)' }}>
                     {/* Priority stripe */}
                     <div className={`absolute top-0 right-0 left-0 h-1 rounded-t-[1.5rem] ${task.priority === 'high' ? 'bg-gradient-to-l from-rose-400 to-rose-500' : 'bg-gradient-to-l from-amber-300 to-amber-400'}`}></div>
                     
                     <div className="flex justify-between items-start mb-5 pt-1">
                         <span className={`text-[9px] font-black px-2.5 py-1 rounded-full ${task.priority === 'high' ? 'bg-rose-50 text-rose-600 border border-rose-100' : 'bg-amber-50 text-amber-600 border border-amber-100'}`}>
                            أولوية {task.priority === 'high' ? 'عالية' : 'متوسطة'}
                         </span>
                         <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full border ${task.priority === 'high' ? 'bg-rose-50 text-rose-600 border-rose-100' : 'text-gray-400 bg-white border-gray-200'}`}>{task.dueDate}</span>
                     </div>
                     <h3 className="text-sm font-black text-gray-900 mb-2 leading-tight">{task.title}</h3>
                     <div className="flex items-center gap-1.5 text-gray-400 mb-6">
                        <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                        <p className="text-[10px] font-bold">{task.project}</p>
                     </div>
                     <button onClick={() => setActiveTab('tasks')} className="w-full mt-auto py-3 bg-white hover:bg-emerald-50 text-gray-500 hover:text-emerald-700 rounded-xl text-[10px] font-bold border border-gray-200 hover:border-emerald-200 transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                        <Plus size={12} />
                        متابعة المهمة
                     </button>
                  </div>
               ))}
           </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4: FEATURES 
          Background: GRAY — cards are white
          ═══════════════════════════════════════════════ */}
      <section className="relative py-20 px-6 lg:px-12 w-full overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #e2e8f0 0%, #d5dce6 100%)' }}>
        {/* Top/bottom edge shadows */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/[0.06] to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/[0.04] to-transparent pointer-events-none"></div>

         <div className="max-w-[1100px] mx-auto space-y-10 relative z-10">
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-500 overflow-x-auto w-full justify-center pb-2">
                   <button className="text-primary-600 border-b-2 border-primary-600 mx-2 pb-1 whitespace-nowrap">الرئيسية</button>
                   <button className="mx-2 pb-1 whitespace-nowrap hover:text-gray-900 transition-colors">مخططي</button>
                   <button className="mx-2 pb-1 whitespace-nowrap hover:text-gray-900 transition-colors">خطة مرنة</button>
                   <button className="mx-2 pb-1 whitespace-nowrap hover:text-gray-900 transition-colors">الهوية البصرية</button>
                   <button className="mx-2 pb-1 whitespace-nowrap hover:text-gray-900 transition-colors">الدعم</button>
                   <button className="mx-2 text-[10px] font-black border border-gray-300 px-3 py-1 rounded-full bg-white hover:bg-gray-50 flex items-center gap-1 text-gray-700 shadow-sm">
                       تحديث
                       <Crown size={12} className="text-amber-500"/>
                   </button>
                </div>
                <div className="flex items-center justify-center gap-3">
                   <div className="w-1.5 h-7 bg-primary-600 rounded-full"></div>
                   <h2 className="text-2xl font-black text-gray-900">مركز الميزات الحديثة</h2>
                </div>
                <p className="text-gray-500 text-sm font-semibold max-w-md">أدوات ذكاء اصطناعي متقدمة لبناء خطط عمل بمستوى عالمي</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Feature 1 */}
                <div className="bg-white rounded-[2rem] p-8 text-center flex flex-col items-center hover:shadow-2xl transition-all group cursor-pointer border border-white/80"
                  style={{ boxShadow: '0 8px 32px rgba(15,23,42,0.10), 0 2px 8px rgba(15,23,42,0.05)' }}>
                   <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 border border-purple-100 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <BrainCircuit size={24} />
                   </div>
                   <h3 className="text-base font-black text-gray-900 mb-3">المساعد الاستراتيجي 24/7</h3>
                   <p className="text-[11px] font-bold text-gray-500 leading-relaxed mb-8 max-w-[200px]">تحليل دقيق لأبعاد علامتك التنافسية في السوق المحلية.</p>
                   <button className="mt-auto px-6 py-2.5 bg-purple-600 text-white rounded-full text-[10px] font-bold hover:bg-purple-700 transition-colors w-full shadow-lg shadow-purple-600/20">جرب الآن</button>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-[2rem] p-8 text-center flex flex-col items-center hover:shadow-2xl transition-all group cursor-pointer border border-white/80"
                  style={{ boxShadow: '0 8px 32px rgba(15,23,42,0.10), 0 2px 8px rgba(15,23,42,0.05)' }}>
                   <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <TrendingUp size={24} />
                   </div>
                   <h3 className="text-base font-black text-gray-900 mb-3">التحليل المالي الدقيق</h3>
                   <p className="text-[11px] font-bold text-gray-500 leading-relaxed mb-8 max-w-[200px]">قوالب مالية ذكية تتنبأ بالأرباح والخسائر للسنوات الخمس.</p>
                   <button className="mt-auto px-6 py-2.5 bg-emerald-600 text-white rounded-full text-[10px] font-bold hover:bg-emerald-700 transition-colors w-full shadow-lg shadow-emerald-600/20">استكشف الميزة</button>
                </div>

                {/* Feature 3: Premium */}
                <div className="relative bg-gradient-to-br from-primary-500 to-violet-600 rounded-[2rem] p-8 text-center flex flex-col items-center hover:shadow-2xl transition-shadow group overflow-hidden text-white cursor-pointer"
                  style={{ boxShadow: '0 12px 40px rgba(99,102,241,0.25)' }}>
                   <div className="absolute opacity-10 -right-6 -top-6">
                      <Star size={120} />
                   </div>
                   <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/30 backdrop-blur-md group-hover:scale-110 transition-transform relative z-10 shadow-inner">
                      <Sparkles size={24} />
                   </div>
                   <h3 className="text-base font-black text-white mb-3 relative z-10">Gemini 3.0 لزيادة الإنتاجية</h3>
                   <p className="text-[11px] font-semibold text-white/70 leading-relaxed mb-8 max-w-[200px] relative z-10">نظام هوية بصرية مدمج بالذكاء الاصطناعي لتوليد علامتك.</p>
                   <button className="mt-auto px-6 py-2.5 bg-white text-indigo-900 rounded-full text-[10px] font-black hover:bg-indigo-50 transition-colors w-full shadow-xl relative z-10">تحديث</button>
                </div>
            </div>
         </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 5: EXPLORE CTA BANNER
          ═══════════════════════════════════════════════ */}
      <section className="bg-white py-16 px-6 lg:px-12 w-full flex justify-center">
         <div className="relative bg-gradient-to-l from-emerald-600 to-teal-700 rounded-[2rem] w-full max-w-[900px] p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
           style={{ boxShadow: '0 20px 60px rgba(16,185,129,0.2)' }}>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white shadow-inner backdrop-blur-sm">
                  <Zap size={20} fill="currentColor" />
               </div>
               <div>
                  <h4 className="text-base font-black text-white mb-1">استكشف الميزات الجديدة</h4>
                  <p className="text-[10px] font-bold text-white/70">أطلقنا مؤخراً نظام توليد الهوية البصرية المعتمد على طراز <span className="text-white font-extrabold uppercase bg-white/20 px-1.5 py-0.5 rounded">Gemini 3.0</span> فائق الذكاء.</p>
               </div>
            </div>

            <button onClick={() => setActiveTab('changelog')} className="relative z-10 px-6 py-2.5 bg-white text-emerald-800 rounded-full text-[11px] font-bold hover:bg-emerald-50 transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg hover:scale-105 active:scale-95">
                معرفة المزيد
                <ChevronLeft size={14} />
            </button>
         </div>
      </section>

    </div>
  );
};

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
    { label: 'الخطط النشطة', value: '12', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50', trend: '+2 هذا الأسبوع' },
    { label: 'نقاط AI المتاحة', value: '85', icon: Zap, color: 'text-purple-600', bg: 'bg-purple-50', trend: 'كافية لـ 15 خطة' },
    { label: 'مهام مكتملة', value: '24', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: '+15% عن الأمس' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary-100" dir="rtl">

      {/* SECTION 1: HERO, STATS (Pure White) */}
      <section className="bg-white pb-10 shadow-sm relative z-10 w-full rounded-b-3xl">
        
        {/* 1. Hero Banner - FULL WIDTH */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#171A3A] to-[#0D102A] px-6 lg:px-12 py-10 shadow-xl border-b border-white/5 w-full">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
               <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-500 rounded-full blur-[100px]"></div>
            </div>

            {/* Banner Content Container (Centered) */}
            <div className="max-w-[1100px] mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Right Content */}
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

            {/* Left AI Brain Box */}
            <div className="relative z-10 hidden md:flex h-32 w-32 bg-white/5 rounded-3xl border border-white/10 items-center justify-center backdrop-blur-sm shadow-inner group">
                <BrainCircuit size={50} className="text-indigo-400/80 group-hover:text-indigo-300 transition-colors" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-slate-900 text-primary-600">
                    <Sparkles size={14} />
                </div>
            </div>
            </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 pt-10 tracking-tight">
          {/* 2. Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickStats.map((stat, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-[1.5rem] p-6 hover:bg-white shadow-sm hover:shadow-md transition-all flex items-center justify-between group cursor-pointer">
                {/* Right side: text and icon */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center border border-slate-50 group-hover:scale-105 transition-transform`}>
                    <stat.icon size={22} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-[10px] font-bold mb-1">{stat.label}</span>
                    <span className="text-2xl font-black text-gray-900">{stat.value}</span>
                  </div>
                </div>
                {/* Left side: badge */}
                <div className="bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-emerald-600 text-[10px] font-bold">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>
          

        </div>
      </section>

      {/* SECTION 2: RECENT PLANS & AI (Off-White) */}
      <section className="bg-white py-16 px-6 lg:px-12 w-full">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             
             {/* Recent Plans (2 cols) */}
             <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                       <div className="w-1 h-6 bg-primary-600 rounded-full"></div>
                       <h2 className="text-xl font-black text-gray-900">آخر الخطط النشطة</h2>
                   </div>
                   <button onClick={() => setActiveTab('my-plans')} className="text-primary-600 text-[11px] font-bold hover:text-primary-700 flex items-center gap-1">
                      عرض الكل
                      <ChevronLeft size={14} />
                   </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   {recentPlans.map(plan => (
                      <div key={plan.id} onClick={() => setActiveTab('editor')} className="bg-slate-50/80 border border-slate-100 rounded-[1.5rem] p-6 hover:bg-white hover:shadow-lg transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden">
                         <div className="flex justify-between items-start mb-6">
                             <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:scale-105 transition-transform">
                                <Monitor size={20} />
                             </div>
                             <span className="text-[9px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded-full">{plan.category}</span>
                         </div>
                         <h3 className="text-base font-black text-gray-900 mb-6">{plan.title}</h3>
                         <div className="mt-auto">
                             <div className="flex justify-between items-center mb-2">
                                 <span className="text-[10px] font-bold text-gray-400">نسبة الإنجاز</span>
                                 <span className="text-xs font-black text-gray-900">{plan.progress}%</span>
                             </div>
                             <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden w-full">
                                 <div className="h-full bg-primary-600 rounded-full transition-all duration-1000" style={{ width: `${plan.progress}%` }}></div>
                             </div>
                         </div>
                         <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                             <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-primary-600 border border-slate-200">
                                 <ChevronLeft size={16} />
                             </div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             {/* AI Corner (1 col) */}
             <div className="lg:col-span-1 space-y-6">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                       <div className="w-1 h-6 bg-purple-600 rounded-full"></div>
                       <h2 className="text-xl font-black text-gray-900">ركن الذكاء</h2>
                   </div>
                </div>

                <div className="bg-purple-50/30 border border-purple-100/50 rounded-[1.5rem] p-6 hover:bg-white hover:shadow-lg transition-all cursor-pointer group flex flex-col h-full relative text-center">
                    <div className="flex justify-center mb-4">
                       <span className="text-[9px] font-bold bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-center inline-block">رؤية استراتيجية</span>
                    </div>
                    <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 group-hover:rotate-12 transition-transform">
                           <BrainCircuit size={24} />
                        </div>
                    </div>
                    <h3 className="text-base font-black text-gray-900 mb-3">تحليل استراتيجي</h3>
                    <p className="text-[11px] font-semibold text-gray-500 leading-relaxed mb-6">
                        ادمج ميزة <span className="text-purple-600 font-bold">"الدفع المباشر"</span> فوراً لتعزيز قيمة مشروعك وتخفيف التكاليف. 
                    </p>
                    <div className="mt-auto border-t border-slate-100 pt-5 flex justify-between items-center">
                        <button className="text-[10px] font-bold text-purple-600 flex items-center gap-1 hover:text-purple-700">
                           <Sparkles size={12} />
                           تطبيق التوصية
                        </button>
                        <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-purple-600 border border-slate-200 group-hover:bg-purple-50 transition-colors cursor-pointer">
                            <ChevronLeft size={14} />
                        </div>
                    </div>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: MY TASKS (White with Vertical Lines) */}
      <section className="relative bg-white py-16 px-6 lg:px-12 w-full border-y border-slate-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_left,#f8fafc_2px,transparent_2px)] bg-[size:5rem_100%] opacity-60 pointer-events-none"></div>
        <div className="max-w-[1100px] mx-auto relative z-10 space-y-6">
           <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                   <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                   <h2 className="text-xl font-black text-gray-900">مهامي الحالية</h2>
               </div>
               <div className="flex items-center gap-4">
                   <div className="hidden md:flex items-center bg-slate-50 border border-slate-200 rounded-full p-1">
                      <button className="px-4 py-1.5 text-[9px] font-bold rounded-full bg-white text-emerald-600 shadow-sm border border-slate-100">الكل</button>
                      <button className="px-4 py-1.5 text-[9px] font-bold rounded-full text-gray-500 hover:text-gray-900">أولوية عالية</button>
                      <button className="px-4 py-1.5 text-[9px] font-bold rounded-full text-gray-500 hover:text-gray-900">متأخرة</button>
                   </div>
                   <button onClick={() => setActiveTab('tasks')} className="text-emerald-600 text-[11px] font-bold hover:text-emerald-700 flex items-center gap-1">
                      عرض الكل
                      <ChevronLeft size={14} />
                   </button>
               </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
               {currentTasks.map(task => (
                  <div key={task.id} className="bg-slate-50/80 border border-slate-100 rounded-[1.5rem] p-5 hover:bg-white hover:border-emerald-200 hover:shadow-md transition-all flex flex-col group cursor-pointer shadow-sm">
                     <div className="flex justify-between items-start mb-5">
                         <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${task.priority === 'high' ? 'bg-rose-50 text-rose-600 border border-rose-100' : 'bg-amber-50 text-amber-600 border border-amber-100'}`}>
                            أولوية {task.priority === 'high' ? 'عالية' : 'متوسطة'}
                         </span>
                         <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${task.priority === 'high' ? 'bg-rose-50 text-rose-600 border-rose-100' : 'text-gray-400 bg-slate-50 border-slate-100'}`}>{task.dueDate}</span>
                     </div>
                     <h3 className="text-sm font-black text-gray-900 mb-2 leading-tight">{task.title}</h3>
                     <div className="flex items-center gap-1.5 text-gray-400 mb-6">
                        <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                        <p className="text-[10px] font-bold">{task.project}</p>
                     </div>
                     <button onClick={() => setActiveTab('tasks')} className="w-full mt-auto py-3 bg-slate-50 hover:bg-emerald-50 text-gray-500 hover:text-emerald-700 rounded-xl text-[10px] font-bold border border-slate-200 hover:border-emerald-200 transition-colors flex items-center justify-center gap-1.5">
                        <Plus size={12} />
                        متابعة المهمة
                     </button>
                  </div>
               ))}
           </div>
        </div>
      </section>

      {/* SECTION 4: FEATURES (Off-White) */}
      <section className="bg-white py-20 px-6 lg:px-12 w-full">
         <div className="max-w-[1100px] mx-auto space-y-10">
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-500 overflow-x-auto w-full justify-center pb-2">
                   <button className="text-primary-600 border-b-2 border-primary-600 mx-2 pb-1 whitespace-nowrap">الرئيسية</button>
                   <button className="mx-2 pb-1 whitespace-nowrap hover:text-gray-900">مخططي</button>
                   <button className="mx-2 pb-1 whitespace-nowrap hover:text-gray-900">خطة مرنة</button>
                   <button className="mx-2 pb-1 whitespace-nowrap hover:text-gray-900">الهوية البصرية</button>
                   <button className="mx-2 pb-1 whitespace-nowrap hover:text-gray-900">الدعم</button>
                   <button className="mx-2 text-[10px] font-black border border-slate-200 px-3 py-1 rounded-full bg-white hover:bg-gray-50 flex items-center gap-1 shadow-sm">
                       تحديث
                       <Crown size={12} className="text-amber-500"/>
                   </button>
                </div>
                <div className="flex items-center justify-center gap-2">
                   <div className="w-1 h-6 bg-primary-600 rounded-full"></div>
                   <h2 className="text-xl font-black text-gray-900">مركز الميزات الحديثة</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Feature 1 */}
                <div className="bg-purple-50/30 rounded-[2rem] p-8 border border-purple-100/50 text-center flex flex-col items-center hover:bg-white hover:shadow-xl transition-all shadow-sm group cursor-pointer">
                   <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 border border-purple-100 group-hover:rotate-12 transition-transform">
                      <BrainCircuit size={24} />
                   </div>
                   <h3 className="text-base font-black text-gray-900 mb-3">المساعد الاستراتيجي 24/7</h3>
                   <p className="text-[11px] font-bold text-gray-500 leading-relaxed mb-8 max-w-[200px]">تحليل دقيق لأبعاد علامتك التنافسية في السوق المحلية.</p>
                   <button className="mt-auto px-6 py-2.5 bg-purple-600 text-white rounded-full text-[10px] font-bold hover:bg-purple-700 transition-colors w-full shadow-md shadow-purple-600/20">جرب الآن</button>
                </div>

                {/* Feature 2 */}
                <div className="bg-emerald-50/30 rounded-[2rem] p-8 border border-emerald-100/50 text-center flex flex-col items-center hover:bg-white hover:shadow-xl transition-all shadow-sm group cursor-pointer">
                   <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:rotate-12 transition-transform">
                      <TrendingUp size={24} />
                   </div>
                   <h3 className="text-base font-black text-gray-900 mb-3">التحليل المالي الدقيق</h3>
                   <p className="text-[11px] font-bold text-gray-500 leading-relaxed mb-8 max-w-[200px]">قوالب مالية ذكية تتنبأ بالأرباح والخسائر للسنوات الخمس.</p>
                   <button className="mt-auto px-6 py-2.5 bg-emerald-600 text-white rounded-full text-[10px] font-bold hover:bg-emerald-700 transition-colors w-full shadow-md shadow-emerald-600/20">استكشف الميزة</button>
                </div>

                {/* Feature 3: Highlighted */}
                <div className="bg-gradient-to-br from-indigo-800 to-indigo-950 rounded-[2rem] p-8 border border-indigo-900 text-center flex flex-col items-center hover:shadow-xl transition-shadow shadow-lg group relative overflow-hidden text-white cursor-pointer">
                   <div className="absolute opacity-10 -right-6 -top-6">
                      <Star size={120} />
                   </div>
                   <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/20 backdrop-blur-md group-hover:scale-110 transition-transform relative z-10 shadow-inner">
                      <Sparkles size={24} />
                   </div>
                   <h3 className="text-base font-black text-white mb-3 relative z-10">Gemini 3.0 لزيادة الإنتاجية</h3>
                   <p className="text-[11px] font-semibold text-indigo-200 leading-relaxed mb-8 max-w-[200px] relative z-10">نظام هوية بصرية مدمج بالذكاء الاصطناعي لتوليد علامتك.</p>
                   <button className="mt-auto px-6 py-2.5 bg-white text-indigo-900 rounded-full text-[10px] font-black hover:bg-indigo-50 transition-colors w-full shadow-xl relative z-10">تحديث</button>
                </div>
            </div>
         </div>
      </section>

      {/* SECTION 5: EXPLORATION (Mint Green Banner) */}
      <section className="bg-white py-16 px-6 lg:px-12 w-full border-t border-slate-100 flex justify-center">
         <div className="bg-emerald-50 rounded-[2rem] w-full max-w-[900px] p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-100 shadow-sm relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-200/40 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner">
                  <Zap size={18} fill="currentColor" />
               </div>
               <div>
                  <h4 className="text-base font-black text-gray-900 mb-1">استكشف الميزات الجديدة</h4>
                  <p className="text-[10px] font-bold text-gray-500">أطلقنا مؤخراً نظام توليد الهوية البصرية المعتمد على طراز <span className="text-emerald-700 font-extrabold uppercase bg-emerald-100/50 px-1 rounded">Gemini 3.0</span> فائق الذكاء.</p>
               </div>
            </div>

            <button onClick={() => setActiveTab('changelog')} className="relative z-10 px-6 py-2.5 bg-gray-900 text-white rounded-full text-[11px] font-bold hover:bg-black transition-colors flex items-center gap-2 whitespace-nowrap shadow-md hover:scale-105 active:scale-95">
                معرفة المزيد
                <ChevronLeft size={14} />
            </button>
         </div>
      </section>

    </div>
  );
};

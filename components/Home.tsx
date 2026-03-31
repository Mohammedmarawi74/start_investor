
import React from 'react';
import { 
  Sparkles, 
  Plus, 
  Zap, 
  ArrowUpRight, 
  FileText, 
  LayoutDashboard, 
  Star, 
  TrendingUp, 
  BrainCircuit, 
  Clock,
  CheckCircle2,
  ChevronLeft,
  Crown
} from 'lucide-react';

export const Home: React.FC<{ setActiveTab: (tab: any) => void }> = ({ setActiveTab }) => {
  const recentPlans = [
    { id: '1', title: 'خطة عمل تطبيق تيك', progress: 85, category: 'تقنية', lastEdited: 'منذ ساعتين', nextStep: 'المراجعة النهائية والتصدير', color: 'bg-emerald-500' },
    { id: '2', title: 'مشروع كافيه لاونج', progress: 40, category: 'تجارة', lastEdited: 'منذ يوم', nextStep: 'إكمال هيكل التكاليف والإيرادات', color: 'bg-amber-500' },
  ];

  const currentTasks = [
    { id: 't1', title: 'تحليل SWOT للمنافسين', project: 'تطبيق تيك', priority: 'high', dueDate: 'اليوم', status: 'pending' },
    { id: 't2', title: 'تحديد الميزانية التشغيلية', project: 'كافيه لاونج', priority: 'medium', dueDate: 'غداً', status: 'pending' },
    { id: 't3', title: 'إنشاء الهوية البصرية الأساسية', project: 'تطبيق تيك', priority: 'high', dueDate: 'منذ يومين', status: 'overdue' },
  ];

  const quickStats = [
    { 
      label: 'الخطط النشطة', 
      value: '12', 
      icon: FileText, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50',
      trend: '+2 هذا الأسبوع',
      trendUp: true,
      onClick: () => setActiveTab('my-plans')
    },
    { 
      label: 'نقاط AI المتاحة', 
      value: '85', 
      icon: Zap, 
      color: 'text-purple-600', 
      bg: 'bg-purple-50',
      trend: 'كافية لـ 15 خطة',
      trendUp: true,
      onClick: () => setActiveTab('pricing')
    },
    { 
      label: 'مهام مكتملة', 
      value: '24', 
      icon: CheckCircle2, 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50',
      trend: '+15% عن الأمس',
      trendUp: true,
      onClick: () => setActiveTab('tasks')
    },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      
      {/* Hero Welcome Section - Optimized for Returning Users */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 p-6 lg:p-10 text-white shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500 rounded-full blur-[120px] animate-pulse"></div>
        </div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-right flex-1">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-primary-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <Crown size={12} className="text-amber-400" />
                خطة Pro النشطة
              </div>
              <div className="px-3 py-1 bg-emerald-500/10 backdrop-blur-md rounded-full border border-emerald-500/20 text-emerald-400 text-[10px] font-bold flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div>
                متصل الآن
              </div>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
              أهلاً بك مجدداً، <span className="text-amber-300">عبدالله.</span>
            </h1>
            
            <p className="text-gray-400 font-bold text-sm lg:text-base mb-8 max-w-lg leading-relaxed">
              لديك <span className="text-white">3 مهام</span> بانتظارك في "مشروع كافيه لاونج"، هل تريد المتابعة من حيث توقفت؟
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={() => setActiveTab('editor')}
                className="px-6 py-3.5 bg-primary-600 hover:bg-primary-500 text-white rounded-2xl font-bold text-xs shadow-xl shadow-primary-950/50 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <Zap size={18} fill="currentColor" />
                متابعة العمل الحالي
              </button>
              <button 
                onClick={() => setActiveTab('new-plan')}
                className="px-6 py-3.5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-2xl font-bold text-xs border border-white/10 transition-all flex items-center gap-2"
              >
                <Plus size={18} />
                خطة جديدة
              </button>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <div className="h-24 w-px bg-white/10"></div>
            <div className="relative group">
               <div className="w-40 h-40 bg-gradient-to-br from-primary-500/20 to-purple-600/20 rounded-[2.5rem] border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:rotate-6 group-hover:scale-110">
                  <BrainCircuit size={80} className="text-white/40" />
               </div>
               <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-2xl shadow-xl flex items-center justify-center text-primary-600 animate-bounce">
                  <Sparkles size={20} />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Quick Stats Grid - Enhanced with High-Fidelity 3D Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {quickStats.map((stat, idx) => (
          <button 
            key={idx} 
            onClick={stat.onClick}
            className="group relative bg-gradient-to-b from-white to-slate-50/50 border border-white p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(37,99,235,0.12)] transition-all duration-700 hover:translate-y-[-12px] hover:ring-[12px] hover:ring-primary-50/50 overflow-hidden text-right active:scale-95"
          >
            {/* Glossy Overlay Highlight */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <div className={`absolute -right-4 -top-4 w-32 h-32 ${stat.bg} rounded-full opacity-[0.1] group-hover:scale-[2] group-hover:opacity-[0.2] transition-all duration-1000 blur-3xl`}></div>
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-7">
                {/* 3D Icon Container */}
                <div className={`w-20 h-20 ${stat.bg} ${stat.color} rounded-[2rem] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_10px_20px_rgba(0,0,0,0.05)] border-2 border-white transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110`}>
                  <stat.icon size={40} strokeWidth={2.5} />
                </div>
                <div className="space-y-1.5 text-right">
                  <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                  <h3 className="text-5xl font-black text-gray-900 tracking-tighter leading-none">{stat.value}</h3>
                </div>
              </div>
              
              {/* Glassmorphism Trend Badge */}
              <div className={`px-4 py-2 rounded-2xl text-[10px] font-bold flex items-center gap-2.5 backdrop-blur-md border ${stat.trendUp ? 'bg-success/5 text-success border-success/20' : 'bg-danger/5 text-danger border-danger/20'} shadow-sm group-hover:shadow-md transition-all duration-500`}>
                <div className={`w-2 h-2 rounded-full ${stat.trendUp ? 'bg-success shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-danger shadow-[0_0_8px_rgba(239,68,68,0.5)]'}`}></div>
                {stat.trend}
              </div>
            </div>

            {/* Bottom Accent Glow */}
            <div className={`absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-primary-500 to-transparent`}></div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Recent Activity Section - Redesigned Cards */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
               <div className="w-2 h-8 bg-primary-600 rounded-full"></div>
               <h2 className="text-2xl font-bold text-gray-900 tracking-tight">آخر الخطط النشطة</h2>
            </div>
            <button onClick={() => setActiveTab('my-plans')} className="text-sm font-bold text-primary-600 hover:text-primary-800 transition-colors flex items-center gap-2 group">
              عرض الكل
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPlans.map(plan => (
              <div 
                key={plan.id} 
                onClick={() => setActiveTab('editor')}
                className="group bg-gradient-to-br from-white via-white to-slate-50/30 border border-white p-8 rounded-[3rem] shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_35px_70px_rgba(37,99,235,0.08)] transition-all duration-500 hover:translate-y-[-8px] cursor-pointer relative overflow-hidden"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-2 h-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-slate-50 text-primary-600 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 shadow-sm">
                    <FileText size={24} />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">آخر تعديل</span>
                    <span className="text-[11px] font-bold text-gray-500 flex items-center gap-1.5">
                      <Clock size={14} className="text-primary-400" />
                      {plan.lastEdited}
                    </span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight">{plan.title}</h4>
                
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[10px] font-bold text-primary-600 bg-primary-50 px-3 py-1.5 rounded-xl border border-primary-100/50 uppercase tracking-wider">{plan.category}</span>
                  <div className="flex-1 h-[1px] bg-slate-100"></div>
                </div>

                <div className="space-y-4 mb-8">
                   <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-400">التقدم الإجمالي</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-lg font-bold ${plan.progress > 70 ? 'text-emerald-600' : plan.progress > 30 ? 'text-amber-500' : 'text-rose-500'} leading-none`}>{plan.progress}%</span>
                      </div>
                   </div>
                   <div className="h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-white shadow-inner">
                      <div className={`h-full ${plan.progress > 70 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : plan.progress > 30 ? 'bg-gradient-to-r from-amber-400 to-amber-600' : 'bg-gradient-to-r from-rose-400 to-rose-600'} rounded-full transition-all duration-1500 ease-out`} style={{ width: `${plan.progress}%` }}></div>
                   </div>
                </div>

                <div className="bg-slate-50/50 rounded-[1.8rem] p-5 mb-8 border border-white group-hover:bg-primary-50/30 transition-colors duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={14} className="text-primary-500" />
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">الخطوة القادمة</p>
                  </div>
                  <p className="text-[13px] font-bold text-gray-700 leading-relaxed group-hover:text-primary-900 transition-colors">{plan.nextStep}</p>
                </div>

                <button className="w-full py-4 bg-white border border-slate-100 rounded-[1.5rem] text-sm font-bold text-primary-600 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 group/btn hover:bg-primary-50">
                  استكمال المشروع
                  <div className="w-6 h-6 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center group-hover/btn:bg-primary-600 group-hover/btn:text-white transition-all transform group-hover/btn:-translate-x-1">
                    <ChevronLeft size={14} strokeWidth={3} />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Corner - Balanced Design with High-Fidelity Details */}
        <div className="lg:col-span-1 space-y-8">
           <div className="flex items-center gap-4 px-4 group/title">
              <div className="w-2.5 h-10 bg-purple-600 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.4)] group-hover/title:h-12 transition-all duration-500"></div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tighter">ركن الذكاء</h2>
           </div>
           
           <div className="bg-gradient-to-b from-white to-purple-50/40 border border-purple-100 rounded-[3.5rem] p-10 shadow-[0_20px_50px_rgba(124,58,237,0.04)] hover:shadow-[0_45px_90px_rgba(124,58,237,0.12)] transition-all duration-700 relative overflow-hidden h-full flex flex-col min-h-[520px] group">
              {/* Floating Decorative Sparkle */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.04] group-hover:opacity-[0.1] transition-opacity duration-1000 group-hover:scale-125">
                 <Sparkles size={220} strokeWidth={1} className="text-purple-600" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-5 mb-10">
                   <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-[1.8rem] shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_12px_24px_rgba(147,51,234,0.15)] flex items-center justify-center group-hover:rotate-[20deg] group-hover:scale-110 transition-all duration-700 border-2 border-white">
                      <TrendingUp size={34} strokeWidth={2.5} />
                   </div>
                   <div>
                     <h4 className="text-xl font-black text-gray-900 tracking-tight">رؤية استراتيجية</h4>
                     <p className="text-xs font-bold text-purple-500 uppercase tracking-[0.25em]">تحليل فوري مخصصة</p>
                   </div>
                </div>
                
                <div className="space-y-10">
                  {/* Glossy Observation Bubble */}
                  <div className="relative p-8 bg-white/80 backdrop-blur-xl rounded-[2.8rem] border-2 border-white shadow-[0_10px_30px_rgba(0,0,0,0.02)] group-hover:shadow-[0_25px_50px_rgba(147,51,234,0.06)] transition-all duration-700 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>
                    <p className="relative z-10 text-gray-700 font-bold text-[17px] leading-relaxed text-center">
                      لاحظت أن مشروع <span className="text-purple-600 font-black relative">"تطبيق تيك" <span className="absolute bottom-0 left-0 w-full h-1.5 bg-amber-400 rounded-full opacity-60"></span></span> أصبح في مراحله النهائية.
                    </p>
                  </div>
                  
                  <div className="px-4 space-y-3">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                       <p className="text-[11px] font-bold text-gray-300 uppercase tracking-widest">توصية الخبير الذكي</p>
                    </div>
                    <p className="text-gray-500 font-bold text-[16px] leading-[1.8]">
                      "لتحسين فرص نجاح الإطلاق في السوق الخليجي، أنصحك بدمج ميزة <span className="text-gray-800 font-extrabold">**الدفع المباشر**</span> في نموذج العمل الخاص بك."
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-10">
                   <button className="w-full group/ai-btn relative flex items-center justify-center gap-4 py-5 bg-purple-600 text-white rounded-[2.2rem] text-sm font-black hover:bg-purple-700 shadow-[0_15px_35px_rgba(147,51,234,0.3)] transition-all hover:translate-y-[-6px] active:scale-95 overflow-hidden">
                      {/* Animated Gloss Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover/ai-btn:translate-x-[150%] transition-transform duration-[2000ms]"></div>
                      <Sparkles size={22} className="group-hover/ai-btn:rotate-12 transition-transform" />
                      تطبيق التوصيات الذكية
                   </button>
                </div>
              </div>

              {/* Bottom Decorative Element */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-purple-100 rounded-full opacity-50"></div>
           </div>
        </div>
      </div>

      {/* NEW: My Current Tasks Section */}
      <div className="space-y-8 animate-in slide-in-from-bottom-10 duration-1000">
         <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
               <div className="w-2.5 h-10 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]"></div>
               <h2 className="text-3xl font-black text-gray-900 tracking-tighter">مهامي الحالية</h2>
            </div>
            <div className="flex items-center gap-3">
               <span className="text-[10px] font-bold text-gray-400 bg-white border border-gray-100 px-3 py-1.5 rounded-xl">تصفية حسب: المشروع</span>
               <button onClick={() => setActiveTab('tasks')} className="text-sm font-bold text-emerald-600 hover:text-emerald-800 transition-colors">عرض كافة المهام</button>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTasks.map(task => (
               <div key={task.id} className="group bg-white border border-slate-100 rounded-[2.5rem] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(16,185,129,0.08)] transition-all duration-500 hover:translate-y-[-8px]">
                  <div className="flex items-center justify-between mb-6">
                     <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                        task.priority === 'high' ? 'bg-rose-50 text-rose-500 border border-rose-100' : 'bg-amber-50 text-amber-500 border border-amber-100'
                     }`}>
                        أولوية {task.priority === 'high' ? 'قصوى' : 'متوسطة'}
                     </div>
                     <div className={`px-3 py-1 rounded-full text-[9px] font-black ${
                        task.status === 'overdue' ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
                     }`}>
                        {task.dueDate}
                     </div>
                  </div>

                  <h5 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">{task.title}</h5>
                  <p className="text-xs font-bold text-gray-400 mb-6 flex items-center gap-2">
                     <div className="w-1 h-3 bg-slate-200 rounded-full"></div>
                     {task.project}
                  </p>

                  <button 
                     onClick={() => setActiveTab('tasks')}
                     className="w-full py-4 bg-slate-50 text-gray-500 rounded-2xl text-[11px] font-bold hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2 border border-slate-100 group-hover:border-transparent shadow-sm"
                  >
                     <Plus size={14} />
                     متابعة المهمة
                  </button>
               </div>
            ))}
         </div>
      </div>

      {/* Exploration Footer Area - Premium Redesign */}
      <div className="group bg-gradient-to-r from-emerald-50/30 via-white to-white border border-emerald-100/50 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_15px_45px_rgba(16,185,129,0.04)] hover:shadow-[0_35px_70px_rgba(16,185,129,0.1)] transition-all duration-700 hover:translate-y-[-6px] relative overflow-hidden">
         {/* Background Pulse Decor */}
         <div className="absolute -left-20 -top-20 w-64 h-64 bg-emerald-100/20 rounded-full blur-3xl animate-pulse group-hover:scale-150 transition-transform duration-1000"></div>
         
         <div className="flex items-center gap-8 relative z-10">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-[2rem] flex items-center justify-center flex-shrink-0 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_10px_20px_rgba(16,185,129,0.1)] border-2 border-white group-hover:rotate-12 transition-all duration-500">
               <Zap size={36} fill="currentColor" strokeWidth={0} className="animate-pulse" />
            </div>
            <div className="space-y-1.5">
               <h4 className="text-2xl font-black text-gray-900 tracking-tight">استكشف الميزات الجديدة</h4>
               <p className="text-gray-400 font-bold text-[15px] leading-relaxed max-w-lg">أطلقنا مؤخراً نظام توليد الهوية البصرية المعتمد على طراز <span className="text-emerald-600 font-extrabold uppercase">Gemini 3.0</span> فائق الذكاء.</p>
            </div>
         </div>
         
         <button 
           onClick={() => setActiveTab('changelog')} 
           className="relative z-10 flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-[1.8rem] text-sm font-bold hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gray-900/20 hover:shadow-gray-900/40 group/btn"
         >
            <span>ما الجديد؟</span>
            <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all transform group-hover/btn:-translate-x-1">
              <ChevronLeft size={16} strokeWidth={3} />
            </div>
         </button>
      </div>

    </div>
  );
};

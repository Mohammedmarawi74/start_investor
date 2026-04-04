
import React, { useState } from 'react';
import { 
  Sparkles, Plus, Zap, ArrowUpRight, FileText, 
  TrendingUp, BrainCircuit, Clock, CheckCircle2, 
  ChevronLeft, Crown, Layout, Search, 
  Target, Rocket, Briefcase, BarChart3,
  CircleSlash, BellRing, Layers, MousePointer2,
  Calendar, ArrowRight
} from 'lucide-react';

// --- Senior Component: Sparkline (SVG based visual) ---
const StatSparkline = ({ color }: { color: string }) => (
  <svg className="w-16 h-8 opacity-40 group-hover:opacity-100 transition-opacity duration-700" viewBox="0 0 100 40">
    <path 
      d="M0 35 Q 20 10, 40 30 T 80 5 T 100 20" 
      fill="none" 
      stroke={color} 
      strokeWidth="3" 
      strokeLinecap="round"
      className="animate-[dash_3s_ease-in-out_infinite]"
    />
  </svg>
);

export const Home: React.FC<{ setActiveTab: (tab: any) => void }> = ({ setActiveTab }) => {
  const [taskFilter, setTaskFilter] = useState<'all' | 'high' | 'overdue'>('all');

  const recentPlans = [
    { id: '1', title: 'تطبيق التوصيل الذكي', progress: 85, category: 'تقنية', color: 'bg-emerald-500', updated: 'منذ ساعتين' },
    { id: '2', title: 'مجموعة الفنادق الفاخرة', progress: 40, category: 'تجارة', color: 'bg-indigo-500', updated: 'أمس' },
  ];

  const currentTasks = [
    { id: 't1', title: 'تحليل المنافسين في السوق المحلى', project: 'مشروع تيك', priority: 'high', dueDate: 'اليوم' },
    { id: 't2', title: 'تحديث الهياكل المالية والميزانية', project: 'مشروع الفنادق', priority: 'medium', dueDate: 'غداً' },
    { id: 't3', title: 'مراجعة أهداف الربع الحالي', project: 'خطة النمو', priority: 'high', dueDate: 'منذ يومين' },
  ];

  const quickStats = [
    { label: 'الخطط النشطة', value: '12', icon: Layers, color: '#0F172A', bg: 'bg-slate-50', trend: '+2 هذا الأسبوع', sparkColor: '#0F172A' },
    { label: 'رصيد الـ AI', value: '1.2k', icon: Zap, color: '#059669', bg: 'bg-emerald-50', trend: 'باقة برو مفعلة', sparkColor: '#059669' },
    { label: 'الإنجاز الأسبوعي', value: '94%', icon: CheckCircle2, color: '#2563EB', bg: 'bg-blue-50', trend: 'نمو بنسبة 12%', sparkColor: '#2563EB' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100 pb-24 font-ibm-plex" dir="rtl">
      
      {/* ═══════════════════════════════════════════════
          SECTION 1: ADVANCED HERO (GRID & DEPTH)
          ═══════════════════════════════════════════════ */}
      <section className="relative px-6 lg:px-12 pt-12 pb-16 bg-[#F8FAFC] border-b border-slate-100 overflow-hidden">
        {/* Subtle Engineering Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white text-slate-600 rounded-2xl border border-slate-100 text-[10px] font-black tracking-tight uppercase shadow-sm">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div>
                استقرار النظام: <span className="text-emerald-600">100%</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700">
                أهلاً عبدالله، إليك <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 to-indigo-600">بوصلة النمو</span> الخاصة بك اليوم.
              </h1>
              <p className="text-slate-500 font-bold text-base leading-relaxed max-w-xl opacity-90">
                لقد حققت <span className="text-emerald-700 font-black decoration-emerald-200 underline decoration-4 underline-offset-4">تقدماً استثنائياً</span> في مشروع "تطبيق التوصيل". استمر في هذا المسار لتحقيق أهداف الربع الحالي.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button 
                  onClick={() => setActiveTab('new-plan')}
                  className="px-8 py-4 bg-slate-900 text-white rounded-[1.2rem] text-sm font-black hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 flex items-center gap-3 active:scale-95 group"
                >
                  <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                  بدء مشروع استراتيجي
                </button>
                <button 
                  onClick={() => setActiveTab('editor')}
                  className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-[1.2rem] text-sm font-black hover:bg-slate-50 transition-all flex items-center gap-3 group"
                >
                  <Rocket size={18} className="group-hover:translate-y-[-2px] transition-transform" />
                  متابعة العمل الحالي
                </button>
              </div>
            </div>

            <div className="hidden lg:block relative">
               <div className="relative w-56 h-56 bg-white border border-slate-100 rounded-[3rem] flex items-center justify-center shadow-[0_32px_64px_rgba(15,23,42,0.08)] group hover:shadow-[0_48px_80px_rgba(15,23,42,0.12)] transition-all duration-700 cursor-none">
                  <BrainCircuit size={80} className="text-slate-200 group-hover:text-emerald-500 transition-colors duration-500" strokeWidth={1} />
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white rotate-12 transition-transform group-hover:rotate-0">
                    <Crown size={20} />
                  </div>
               </div>
            </div>
          </div>

          {/* Senior Stats Deck */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {quickStats.map((stat, i) => (
              <div key={i} className="flex items-center justify-between p-7 bg-white border border-slate-100 rounded-[2rem] hover:border-emerald-200 hover:shadow-[0_24px_48px_rgba(15,23,42,0.06)] transition-all cursor-pointer group">
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 ${stat.bg} flex items-center justify-center rounded-[1.2rem] transition-transform group-hover:scale-110 duration-500`}>
                    <stat.icon size={26} color={stat.color} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-black text-slate-900">{stat.value}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 text-left">
                   <StatSparkline color={stat.sparkColor} />
                   <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2: CONTENT ARCHITECTURE (MASONRY FEEL)
          ═══════════════════════════════════════════════ */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: ACTIVE INTELLIGENCE (Projects) */}
          <div className="lg:col-span-8 space-y-10">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">المشاريع الاستراتيجية النشطة</h2>
                <p className="text-[11px] font-bold text-slate-400">آخر تعديل لخطط العمل الخاصة بك</p>
              </div>
              <button onClick={() => setActiveTab('my-plans')} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-slate-500 transition-all flex items-center gap-2 text-[11px] font-black px-4">
                عرض أرشيف المشاريع
                <ChevronLeft size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPlans.map(plan => (
                <div key={plan.id} onClick={() => setActiveTab('editor')} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:border-emerald-200 hover:shadow-[0_32px_64px_rgba(15,23,42,0.06)] transition-all group cursor-pointer relative overflow-hidden box-border">
                  <div className="absolute top-8 left-8 text-slate-50 group-hover:text-emerald-50 transition-colors">
                     <Layers size={80} strokeWidth={0.5} />
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-10">
                      <div className="w-11 h-11 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-all group-hover:bg-emerald-50">
                        <Briefcase size={20} strokeWidth={2} />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-tighter mb-0.5">{plan.category}</span>
                        <p className="text-[9px] font-bold text-slate-300 italic">{plan.updated}</p>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-black text-slate-900 mb-10 leading-tight">{plan.title}</h3>
                    <div className="mt-auto space-y-4">
                      <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase">
                        <span>جاهزية الخطة</span>
                        <span className="text-slate-900">{plan.progress}%</span>
                      </div>
                      <div className="h-2 bg-slate-50 rounded-full overflow-hidden p-0.5 border border-slate-100">
                        <div className="h-full bg-emerald-600 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(5,150,105,0.4)]" style={{ width: `${plan.progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Senior Toolset Grid */}
            <div className="pt-12 space-y-8">
              <div className="flex items-center gap-3">
                 <div className="w-1.5 h-7 bg-amber-500 rounded-full"></div>
                 <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-none">مختبر الابتكار <span className="text-slate-300 font-bold italic text-sm">(Beta)</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'تحليل المنافسين', icon: Target, desc: 'رادار ذكاء اصطناعي يحلل السوق المحلي حصرياً.', color: 'text-rose-500' },
                  { title: 'التوقعات المالية', icon: BarChart3, desc: 'توقعات دقيقة للنمو والتدفق النقدي لـ 5 سنوات.', color: 'text-emerald-500' },
                  { title: 'توليد الهوية', icon: Sparkles, desc: 'توليد علامة تجارية كاملة تتناسب مع رؤيتك.', color: 'text-purple-500' }
                ].map((tool, i) => (
                  <div key={i} className="group relative bg-[#F8FAFC] border border-slate-100 rounded-[2rem] p-7 transition-all hover:bg-white hover:border-emerald-200 hover:shadow-xl cursor-pointer">
                    <tool.icon size={26} className={tool.color} strokeWidth={1.5} />
                    <h4 className="text-sm font-black mt-6 mb-2 text-slate-900">{tool.title}</h4>
                    <p className="text-[11px] text-slate-400 font-bold leading-relaxed mb-6">{tool.desc}</p>
                    <div className="flex items-center gap-2 text-[10px] font-black text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                       ابدأ الآن
                       <ChevronLeft size={14} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: AGILITY HUB (Tasks) */}
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-center justify-between">
               <h2 className="text-2xl font-black text-slate-900 tracking-tight">سرعة التنفيذ</h2>
               <div className="w-10 h-10 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-lg">
                  <Plus size={20} />
               </div>
            </div>

            <div className="space-y-5">
              {currentTasks.map(task => (
                <div key={task.id} className="relative p-6 bg-white border border-slate-100 rounded-[2.2rem] hover:border-emerald-600/20 hover:shadow-xl hover:shadow-slate-100 transition-all group cursor-pointer overflow-hidden border-2 border-transparent">
                  <div className={`absolute top-0 right-0 w-1.5 h-full ${task.priority === 'high' ? 'bg-rose-500' : 'bg-amber-400'}`}></div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 text-[9px] font-black rounded-full ${task.priority === 'high' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600 uppercase tracking-tighter'}`}>
                      {task.priority === 'high' ? 'أولوية قصوى' : 'أولوية متوسطة'}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-300">
                       <Clock size={12} />
                       {task.dueDate}
                    </div>
                  </div>
                  <h4 className="text-[14px] font-black text-slate-900 mb-3 leading-snug group-hover:text-emerald-600 transition-colors">{task.title}</h4>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400">
                    <Briefcase size={12} />
                    {task.project}
                  </div>
                </div>
              ))}
            </div>

            {/* Senior AI Banner (Stripe-like Aesthetic) */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-10 text-white group shadow-[0_40px_80px_-15px_rgba(15,23,42,0.3)]">
               <div className="absolute inset-x-0 h-1 top-0 bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-600"></div>
               <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-[2s]"></div>
               
               <div className="relative z-10 space-y-6">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/20">
                      <Zap size={20} className="text-emerald-400" fill="currentColor" />
                   </div>
                   <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 italic">Advanced Analytics</span>
                 </div>
                 <h3 className="text-2xl font-black leading-tight">Gemini 3.5<br/><span className="text-emerald-400 italic">Ultra Intelligence</span></h3>
                 <p className="text-[11px] text-slate-400 font-bold leading-relaxed pr-2">توقع المستقبل المالي لمشروعك بأدق التفاصيل المستندة إلى بيانات السوق السعودي اللحظية.</p>
                 <button 
                  onClick={() => setActiveTab('pricing')}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs font-black transition-all shadow-xl shadow-emerald-900/40 flex items-center justify-center gap-2 group/btn"
                 >
                   ترقية للنسخة الكاملة
                   <ArrowRight size={16} className="group-hover:-translate-x-1 transition-transform rotate-180" />
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3: SYSTEM HEALTH BAR (Minimal Footer)
          ═══════════════════════════════════════════════ */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                 <span className="text-[10px] font-black text-slate-400">تشفير البيانات مفعل (SSL)</span>
              </div>
              <div className="flex items-center gap-2 border-r border-slate-100 pr-6">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                 <span className="text-[10px] font-black text-slate-400">جميع الخدمات متصلة</span>
              </div>
           </div>
           <div className="flex items-center gap-4 text-slate-300 text-[10px] font-black tracking-widest uppercase">
              <span>KHOTTA OS</span>
              <span className="text-slate-100">•</span>
              <span>VER 2.50.48</span>
           </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
        .animate-dash {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
        }
      `}} />
    </div>
  );
};

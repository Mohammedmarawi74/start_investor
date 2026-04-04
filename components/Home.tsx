import React from "react";
import {
  Sparkles,
  Plus,
  Zap,
  ChevronLeft,
  Layout,
  Target,
  Briefcase,
  BarChart3,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Activity,
  ArrowUpRight,
  BrainCircuit,
} from "lucide-react";

/* =========================
   Reusable Components
========================= */

const Card = ({ children, className = "" }: any) => (
  <div
    className={`
      bg-white/70 backdrop-blur-xl
      border border-white/40
      shadow-lg shadow-slate-200/50
      rounded-2xl p-5
      hover:shadow-xl hover:shadow-indigo-100/40
      transition-all duration-300
      ${className}
    `}
  >
    {children}
  </div>
);

const SectionHeader = ({ title, subtitle, action }: any) => (
  <div className="flex items-end justify-between mb-4">
    <div>
      <h2 className="text-xl font-black text-slate-900">{title}</h2>
      {subtitle && (
        <p className="text-xs text-slate-400 font-bold mt-1">{subtitle}</p>
      )}
    </div>
    {action}
  </div>
);

const ProgressBar = ({ value, color }: any) => (
  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
    <div
      className={`h-full rounded-full bg-gradient-to-r ${color}`}
      style={{ width: `${value}%` }}
    />
  </div>
);

/* =========================
   Data
========================= */

const stats = [
  {
    label: "الخطط النشطة",
    value: "12",
    icon: BrainCircuit,
    color: "text-indigo-600",
  },
  {
    label: "رصيد AI",
    value: "1.2k",
    icon: Zap,
    color: "text-emerald-600",
  },
  {
    label: "الإنجاز",
    value: "94%",
    icon: CheckCircle2,
    color: "text-blue-600",
  },
];

const plans = [
  {
    id: 1,
    title: "تطبيق التوصيل الذكي",
    progress: 85,
    category: "AI",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: 2,
    title: "سلسلة فنادق فاخرة",
    progress: 40,
    category: "Business",
    color: "from-indigo-500 to-purple-600",
  },
];

const tasks = [
  {
    title: "تحليل المنافسين",
    date: "اليوم",
    priority: "high",
  },
  {
    title: "تحديث الخطة المالية",
    date: "غداً",
    priority: "mid",
  },
];

/* =========================
   Main Page
========================= */

export const Home = ({ setActiveTab }: any) => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 text-slate-900"
      dir="rtl"
    >
      {/* ================= HERO ================= */}
      <section className="px-6 lg:px-12 py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
          
          {/* Text */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-600">AI ENGINE RUNNING</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              ابنِ مشروعك القادم باستخدام
              <br />
              <span className="bg-gradient-to-l from-indigo-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
                ذكاء استثماري حقيقي
              </span>
            </h1>

            <p className="text-slate-600 text-sm max-w-md leading-relaxed">
              منصتك لا تكتب خطة فقط — بل تحلل، تتوقع، وتقترح قرارات قابلة للتنفيذ
              بناءً على بيانات السوق الفعلية.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setActiveTab("new-plan")}
                className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-indigo-200 hover:scale-[1.03] active:scale-95 transition"
              >
                <Plus size={16} />
                ابدأ بناء مشروعك
              </button>

              <button
                onClick={() => setActiveTab("editor")}
                className="px-6 py-3.5 bg-white border border-slate-200 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-50"
              >
                <Activity size={16} />
                لوحة التحكم
              </button>
            </div>
          </div>

          {/* Profile */}
          <Card className="w-48 h-48 flex flex-col items-center justify-center text-center">
            <BrainCircuit className="text-indigo-600 mb-3" size={40} />
            <p className="text-xs text-slate-400">Membership</p>
            <p className="font-bold">Pro</p>
          </Card>
        </div>

        {/* Stats - Permanent Premium Contrast */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto">
          {stats.map((s, i) => (
            <Card 
              key={i} 
              className="flex items-center gap-5 group shadow-md shadow-slate-200/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-white/60 relative overflow-hidden"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm ${
                s.label.includes('نشطة') ? 'bg-indigo-100/60 text-indigo-700' : 
                s.label.includes('رصيد') ? 'bg-emerald-100/60 text-emerald-700' : 
                'bg-blue-100/60 text-blue-700'
              }`}>
                <s.icon size={24} className={s.label.includes('نشطة') ? 'animate-pulse' : ''} />
              </div>
              <div className="text-right">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{s.label}</p>
                <p className="text-2xl font-black text-slate-900 leading-none">{s.value}</p>
              </div>
              
              {/* Permanent accent line inside card for immediate distinction */}
              <div className={`absolute bottom-0 left-0 w-full h-[3px] opacity-80 bg-gradient-to-r ${
                s.label.includes('نشطة') ? 'from-indigo-500/40 to-transparent' : 
                s.label.includes('رصيد') ? 'from-emerald-500/40 to-transparent' : 
                'from-blue-500/40 to-transparent'
              }`}></div>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="px-6 lg:px-12 py-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
        
        {/* Plans */}
        <div className="lg:col-span-8 space-y-6">
          <SectionHeader
            title="المشاريع"
            subtitle="إدارة خططك"
            action={
              <button
                onClick={() => setActiveTab("my-plans")}
                className="text-indigo-600 text-sm font-bold flex items-center gap-1"
              >
                عرض الكل <ChevronLeft size={14} />
              </button>
            }
          />

          <div className="grid md:grid-cols-2 gap-5">
            {plans.map((p) => (
              <Card
                key={p.id}
                className="cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 shadow-md shadow-slate-200/40 relative overflow-hidden group pb-7"
                onClick={() => setActiveTab("editor")}
              >
                <div className="flex justify-between items-center mb-6">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${p.color} bg-opacity-10 text-white shadow-lg`}>
                    <Briefcase size={18} />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                    {p.category}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-800 mb-6 text-lg">{p.title}</h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-tight">
                    <span>معدل الإنجاز</span>
                    <span className="text-slate-900">{p.progress}%</span>
                  </div>
                  <ProgressBar value={p.progress} color={p.color} />
                </div>

                {/* Permanent accent line reflecting project color */}
                <div className={`absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r ${p.color} opacity-30`}></div>
              </Card>
            ))}
          </div>

          {/* AI Section */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl mt-3">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-emerald-400" />
              <h3 className="font-bold">مختبر AI</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "تحليل السوق", icon: Target },
                { title: "هوية بصرية", icon: Layout },
                { title: "توقع مالي", icon: BarChart3 },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-4 rounded-xl hover:bg-white/10 cursor-pointer transition"
                >
                  <item.icon className="mb-2" />
                  <p className="text-sm" style={{ lineHeight: '2.2' }}>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          
          <SectionHeader
            title="المهام"
            action={
              <button className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center">
                <Plus size={14} />
              </button>
            }
          />

          {tasks.map((t, i) => (
            <Card 
              key={i} 
              className={`relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-l-4 ${
                t.priority === "high" ? "border-l-rose-500" : "border-l-amber-500"
              } shadow-md shadow-slate-100 pb-5`}
            >
              <div className="flex justify-between items-center mb-3">
                <span
                  className={`text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-tighter ${
                    t.priority === "high" 
                      ? "bg-rose-50 text-rose-600 border border-rose-100" 
                      : "bg-amber-50 text-amber-600 border border-amber-100"
                  }`}
                >
                  {t.priority === "high" ? "أولوية قصوى" : "مهمة متوسطة"}
                </span>
                <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-50">
                  <Clock size={12} className="opacity-70" />
                  {t.date}
                </span>
              </div>

              <p className="font-extrabold text-slate-800 text-sm leading-snug group-hover:text-indigo-600 transition-colors">{t.title}</p>
            </Card>
          ))}

          {/* AI Widget */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
            <ShieldCheck className="mb-3 text-emerald-300" />
            <h3 className="font-bold mb-2">نظام التوقع</h3>
            <p className="text-xs opacity-80 mb-4">
              توقع المخاطر قبل 30 يوم
            </p>

            <button
              onClick={() => setActiveTab("pricing")}
              className="w-full bg-white text-indigo-600 py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
            >
              تفعيل <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
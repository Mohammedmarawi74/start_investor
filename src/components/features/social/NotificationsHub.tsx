
import React from 'react';
import { 
  Bell, 
  House, 
  ChevronLeft, 
  Sparkles, 
  Clock3, 
  Check, 
  Search,
  User,
  Settings
} from 'lucide-react';

export const NotificationsHub: React.FC = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-[#F8FAFC] font-['IBM_Plex_Sans_Arabic'] text-slate-900 animate-in fade-in duration-700">
      
      {/* 1. STICKY COMPACT HEADER */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 lg:px-10 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-4 lg:gap-6">
          <nav className="flex items-center gap-2 text-[10px] font-bold">
            <button className="flex items-center gap-1.5 text-slate-400 hover:text-blue-600 transition-colors">
              <House size={13} />
              <span className="hidden sm:inline">الرئيسية</span>
            </button>
            <ChevronLeft size={10} className="text-slate-300" />
            <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 animate-in fade-in slide-in-from-right-2 duration-500">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              <span>مركز التنبيهات</span>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="p-2 rounded-xl transition-all relative text-slate-400 hover:bg-slate-50">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
          <div className="relative">
            <button className="flex items-center gap-3 p-1 pr-3 border border-slate-100 rounded-full transition-all group hover:bg-slate-50">
              <span className="text-[10px] font-black transition-colors hidden sm:inline text-slate-500">عبدالله محمد</span>
              <img className="w-7 h-7 rounded-full border border-white shadow-sm" alt="Profile" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Abdullah" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. OPTIMIZED CONTENT AREA */}
      <main className="max-w-5xl mx-auto py-6 lg:py-8 px-6 lg:px-10">
        <div className="animate-in slide-in-from-bottom-4 duration-700 max-w-3xl mx-auto">
          
          <div className="mb-8 text-right">
            <h1 className="text-2xl font-black text-slate-900 mb-1">مركز التنبيهات</h1>
            <p className="text-slate-400 font-bold text-[12px]">متابعة كافة النشاطات والتحديثات المتعلقة بمشاريعك</p>
          </div>

          <div className="space-y-3">
            {/* Notification Card: AI */}
            <div className="bg-white p-5 rounded-[1.8rem] border border-slate-100 flex items-center gap-5 shadow-sm hover:shadow-md transition-all group">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 text-purple-600 bg-purple-50 border border-purple-100">
                <Sparkles size={20} />
              </div>
              <div className="flex-1 text-right">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">ai insight</span>
                  <span className="text-[10px] font-bold text-slate-400 italic">منذ 5 دقائق</span>
                </div>
                <h3 className="text-md font-black text-slate-900 mb-0.5">تحليل SWOT جاهز</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed font-medium">أكمل الذكاء الاصطناعي تحليل نقاط القوة والفرص لمشروعك الاستراتيجي.</p>
              </div>
            </div>

            {/* Notification Card: Task */}
            <div className="bg-white p-5 rounded-[1.8rem] border border-slate-100 flex items-center gap-5 shadow-sm hover:shadow-md transition-all group">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 text-amber-600 bg-amber-50 border border-amber-100">
                <Clock3 size={20} />
              </div>
              <div className="flex-1 text-right">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">deadline task</span>
                  <span className="text-[10px] font-bold text-slate-400 italic">منذ ساعة</span>
                </div>
                <h3 className="text-md font-black text-slate-900 mb-0.5">مهمة قريبة الموعد</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed font-medium">بقي 24 ساعة فقط على الموعد النهائي لتسليم خطة التسويق الرقمي.</p>
              </div>
            </div>

            {/* Notification Card: System */}
            <div className="bg-white p-5 rounded-[1.8rem] border border-slate-100 flex items-center gap-5 shadow-sm hover:shadow-md transition-all group">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 text-emerald-600 bg-emerald-50 border border-emerald-100">
                <Check size={20} />
              </div>
              <div className="flex-1 text-right">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">system billing</span>
                  <span className="text-[10px] font-bold text-slate-400 italic">منذ يوم</span>
                </div>
                <h3 className="text-md font-black text-slate-900 mb-0.5">تجديد اشتراك PRO</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed font-medium">تم تجديد اشتراكك السنوي بنجاح؛ استمتع بكامل ميزات الذكاء الاصطناعي.</p>
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="mt-8 text-center">
             <button className="px-6 py-2 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-900 rounded-full text-[11px] font-black transition-all border border-slate-100">تحميل الأرشيف الكامل</button>
          </div>
        </div>
      </main>

    </div>
  );
};

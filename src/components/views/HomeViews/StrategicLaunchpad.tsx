import React from 'react';
import { 
  Palette, 
  FileEdit, 
  Cpu, 
  ArrowRight,
  Globe,
  Layers
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   STRATEGIC WORKBENCH — "Engineering Lab"
   ═══════════════════════════════════════════════════════════════ */

const WorkbenchCard = ({ tool, onClick }: any) => {
  return (
    <div 
      onClick={() => onClick(tool.tab)}
      className="group relative cursor-pointer hover:-translate-y-2 active:scale-95 transition-all duration-300 h-full"
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-[0.05] blur-2xl transition-all duration-700 rounded-2xl pointer-events-none`} />
      
      <div className="relative h-full bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 border-b-2 border-b-transparent group-hover:border-b-indigo-500">
        
        {/* Top Accent Line */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${tool.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="p-5 sm:p-6 flex flex-col h-full min-h-[260px] lg:min-h-[220px]">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500`}>
              <tool.icon size={20} />
            </div>
            <div className={`px-2 py-0.5 rounded-md text-[7px] font-black uppercase tracking-wider ${tool.badgeBg} ${tool.badgeText} border ${tool.badgeBorder} opacity-60 group-hover:opacity-100 transition-opacity`}>
              {tool.badge}
            </div>
          </div>

          <h3 className="text-base font-black text-slate-900 mb-1.5 leading-tight">
            {tool.title}
          </h3>

          <p className="text-slate-400 font-bold text-[11px] leading-relaxed mb-4 flex-1">
            {tool.desc}
          </p>

          {/* Footer (Condensed) */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
            <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest group-hover:translate-x-[-2px] transition-transform">
              {tool.cta}
            </span>
            <div className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              <ArrowRight size={14} className="rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StrategicLaunchpad = ({ setActiveTab }: any) => {
  const tools = [
    {
      title: 'رادار اكتشاف الفرص',
      desc: 'استكشف الفجوات السوقية العالمية ورصد التوجهات الاستثمارية الحية في 14 قطاعاً.',
      icon: Globe,
      tab: 'market-discovery',
      gradient: 'from-indigo-500 to-blue-600',
      badge: 'محرك رئيسي',
      badgeBg: 'bg-indigo-50',
      badgeText: 'text-indigo-600',
      badgeBorder: 'border-indigo-100',
      cta: 'افتح الرادار',
    },
    {
      title: 'استوديو الهوية البصرية',
      desc: 'صمم روح علامتك التجارية والشعارات لتجسيد مشروعك بصرياً.',
      icon: Palette,
      tab: 'brand-identity',
      gradient: 'from-violet-500 to-purple-600',
      badge: 'تصميم',
      badgeBg: 'bg-violet-50',
      badgeText: 'text-violet-600',
      badgeBorder: 'border-violet-100',
      cta: 'افتح الاستوديو',
    },
    {
      title: 'محرر الخطط',
      desc: 'ابنِ خطة عملك الاحترافية وحول أفكارك إلى وثائق جاهزة للتنفيذ.',
      icon: FileEdit,
      tab: 'new-plan',
      gradient: 'from-rose-500 to-pink-600',
      badge: 'بناء',
      badgeBg: 'bg-rose-50',
      badgeText: 'text-rose-600',
      badgeBorder: 'border-rose-100',
      cta: 'ابدأ البناء',
    },
    {
      title: 'المحلل الذكي',
      desc: 'استخدم قوة الذكاء الاصطناعي لتحليل متانة فكرتك وحساب الجاهزية.',
      icon: Cpu,
      tab: 'smart-analyzer',
      gradient: 'from-amber-500 to-orange-600',
      badge: 'ذكاء',
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-600',
      badgeBorder: 'border-amber-100',
      cta: 'شغل المحلل',
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-5 sm:px-10 lg:px-14 bg-slate-50/50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto" dir="rtl">
        {/* Section Heading (Compact) */}
        <div className="space-y-2 sm:space-y-3 mb-8 sm:mb-10 text-right">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white text-indigo-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-slate-200 shadow-sm">
             <Layers size={12} /> منصة العمل
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
             مختبر الهندسة الاستثمارية
          </h2>
        </div>

        {/* 4-Column Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {tools.map((tool, index) => (
            <WorkbenchCard key={index} tool={tool} onClick={setActiveTab} />
          ))}
        </div>
      </div>
    </section>
  );
};

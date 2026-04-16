import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Map, 
  FileEdit, 
  Cpu, 
  ArrowRightLeft, 
  LayoutDashboard,
  ArrowRight,
  Zap,
  Globe,
  Settings
} from 'lucide-react';

const ToolCard = ({ tool, onClick }: any) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => onClick(tool.tab)}
    className="relative group cursor-pointer"
  >
    {/* Subtle Glow Effect */}
    <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500 rounded-[2.5rem]`} />
    
    <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-8 h-full flex flex-col shadow-sm group-hover:shadow-2xl group-hover:shadow-indigo-100/50 transition-all duration-500 border-b-4 border-b-slate-100 group-hover:border-b-indigo-500">
      <div className={`w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center mb-6 transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-indigo-200`}>
        <tool.icon size={28} />
      </div>

      <h3 className="text-xl font-black text-slate-900 mb-2">{tool.title}</h3>
      <p className="text-slate-400 font-bold text-xs leading-relaxed mb-8 flex-1">
        {tool.desc}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
        <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
           فتح المحرك الآن
        </span>
        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
           <ArrowRight size={16} className="rotate-180" />
        </div>
      </div>
    </div>
  </motion.div>
);

export const StrategicLaunchpad = ({ setActiveTab }: any) => {
  const tools = [
    {
      title: 'استوديو الهوية البصرية',
      desc: 'صمم روح علامتك التجارية، الشعارات، والموك اب الاحترافي لتججسيد مشروعك بصرياً.',
      icon: Palette,
      tab: 'brand-identity',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'رادار اكتشاف الفرص',
      desc: 'استكشف الفجوات السوقية العالمية ورصد التوجهات الاستثمارية في 14 قطاعاً حيوياً.',
      icon: Globe,
      tab: 'market-discovery',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'محرر الخطط الاستراتيجية',
      desc: 'ابنِ خطة عملك الاحترافية (BMC, MIT24) وحول أفكارك إلى وثائق جاهزة للتنفيذ.',
      icon: FileEdit,
      tab: 'new-plan',
      color: 'from-purple-500 to-rose-600'
    },
    {
      title: 'المحلل الاستراتيجي الذكي',
      desc: 'استخدم قوة الذكاء الاصطناعي لتحليل متانة فكرتك وحساب جاهزية المشروع للاستثمار.',
      icon: Cpu,
      tab: 'smart-analyzer',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <section className="py-[50px] px-6 sm:px-10 lg:px-14 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto" dir="rtl">
        {/* Standardized Heading */}
        <div className="space-y-4 mb-16 text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100">
             <Settings size={14} fill="currentColor" /> Strategic Workbench
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
             مختبرات الهندسة الاستثمارية
          </h2>
          <p className="text-slate-400 font-bold text-sm sm:text-base max-w-2xl leading-relaxed">
             محطات عمل متكاملة مصممة خصيصاً لتحويل الرؤى المجردة إلى مشاريع سيادية قائمة على بيانات حقيقية وبنية بصرية وصناعية صلبة.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} tool={tool} onClick={setActiveTab} />
          ))}
        </div>
      </div>
    </section>
  );
};


import React, { useState } from 'react';
import { 
  Plus, 
  Rocket, 
  ShoppingBag, 
  Utensils, 
  Briefcase, 
  Wand2, 
  Laptop, 
  Scissors, 
  GraduationCap, 
  Lightbulb,
  ChevronLeft,
  Sparkles,
  Layers,
  Zap,
  ArrowRight
} from 'lucide-react';
import SmartBeginnerPro from '../easy_mode/SmartBeginnerPro';
import { IdeaCreation } from './IdeaCreation';

interface Template {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
  color: string;
  isPopular?: boolean;
}

const TEMPLATES: Template[] = [
  {
    id: 'tech',
    title: 'شركة تقنية ناشئة',
    description: 'قالب شامل للشركات الناشئة في مجال البرمجيات والتقنية.',
    icon: Laptop,
    category: 'تقنية',
    color: 'bg-blue-500',
    isPopular: true
  },
  {
    id: 'restaurant',
    title: 'مطعم أو مقهى',
    description: 'خطة عمل تركز على التميز في الموقع وفي تجربة العميل.',
    icon: Utensils,
    category: 'أغذية ومشروبات',
    color: 'bg-orange-500',
    isPopular: true
  },
  {
    id: 'retail',
    title: 'متجر إلكتروني',
    description: 'خطة متكاملة للتجارة الإلكترونية والبيع بالتجزئة.',
    icon: ShoppingBag,
    category: 'تجارة إلكترونية',
    color: 'bg-indigo-500'
  },
  {
    id: 'consulting',
    title: 'خدمات استشارية',
    description: 'للخبراء والمستشارين الذين يقدمون خدمات مهنية.',
    icon: Briefcase,
    category: 'استشارات',
    color: 'bg-emerald-500'
  },
  {
    id: 'beauty',
    title: 'صالون تجميل',
    description: 'خطة مخصصة لمراكز العناية والجمال والخدمات الشخصية.',
    icon: Scissors,
    category: 'خدمات شخصية',
    color: 'bg-rose-500'
  },
  {
    id: 'education',
    title: 'مركز تدريب',
    description: 'للمؤسسات التعليمية ومراكز التدريب وورش العمل التعليمة.',
    icon: GraduationCap,
    category: 'تعليم',
    color: 'bg-amber-500'
  }
];

export const NewPlan: React.FC<{ onStart: (id: string) => void }> = ({ onStart }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mode, setMode] = useState<'selection' | 'easy' | 'ai'>('selection');

  if (mode === 'ai') {
    return <IdeaCreation onBack={() => setMode('selection')} />;
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-16" dir="rtl">
      
      {/* 1. COMPACT HERO */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">ابدأ خطة عملك الآن</h1>
        <p className="text-slate-400 font-bold text-sm max-w-xl mx-auto opacity-80">
          اختر المسار الأنسب للمرحلة الحالية لمشروعك الاستثماري.
        </p>
      </div>

      {/* 2. DENSE CHOICE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* EASY MODE CARD */}
        <button 
          onClick={() => onStart('easy')}
          className="group relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-[2rem] shadow-xl hover:shadow-emerald-100 transition-all duration-500 text-right text-white"
        >
          <div className="absolute top-0 left-0 p-2 opacity-10">
            <Zap size={80} />
          </div>
          <div className="flex flex-col gap-5 relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Zap size={24} strokeWidth={2.5} fill="currentColor" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-black tracking-tight">Easy Mode</h3>
                <span className="bg-white/20 text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase">الناشئ</span>
              </div>
              <p className="text-emerald-50 font-bold text-[11px] opacity-90 leading-relaxed">تحليل فكرتك وبناء خطة عمل سريعة عبر 8 أسئلة ذكية مبسطة.</p>
            </div>
          </div>
        </button>

        <button 
          onClick={() => setMode('ai')}
          className="group relative overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-600 p-6 rounded-[2rem] shadow-xl hover:shadow-purple-100 transition-all duration-500 text-right text-white"
        >
          <div className="absolute top-0 left-0 p-2 opacity-10">
            <Sparkles size={80} />
          </div>
          <div className="flex flex-col gap-5 relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Wand2 size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-lg font-black mb-1 tracking-tight">التوليد الذكي (AI)</h3>
              <p className="text-purple-100 font-bold text-[11px] opacity-90 leading-relaxed">دع الذكاء الاصطناعي يبني لك مسودة الهيكل الاستراتيجي لمشروعك آلياً.</p>
            </div>
          </div>
        </button>

        <button 
          onClick={() => onStart('scratch')}
          className="group relative overflow-hidden bg-white border border-slate-100 p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-500 text-right"
        >
          <div className="flex flex-col gap-5">
            <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-inner">
              <Plus size={24} strokeWidth={3} />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 mb-1 tracking-tight">البدء من الصفر</h3>
              <p className="text-slate-400 font-bold text-[11px] leading-relaxed">أنشئ خطة مخصصة بالكامل خطوة بخطوة بالتحكم المجهري في التفاصيل.</p>
            </div>
          </div>
        </button>
      </div>

      {/* 3. DENSE TEMPLATES SECTION */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <Layers className="text-indigo-600" size={20} />
            القوالب الاستراتيجية
          </h2>
          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">تحديثات مستمرة</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEMPLATES.map((template) => (
            <div 
              key={template.id}
              onClick={() => onStart(template.id)}
              className="group cursor-pointer relative bg-white border border-slate-100 rounded-[1.5rem] p-5 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 ${template.color} text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <template.icon size={20} />
                </div>
                {template.isPopular && (
                  <span className="bg-amber-50 text-amber-600 text-[8px] font-black px-2 py-0.5 rounded-full border border-amber-100 uppercase tracking-tight">
                    شائع
                  </span>
                )}
              </div>

              <h4 className="text-md font-black text-slate-900 mb-1.5 group-hover:text-indigo-600 transition-colors">
                {template.title}
              </h4>
              <p className="text-slate-400 font-bold text-[10px] leading-relaxed mb-6 line-clamp-2">
                {template.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{template.category}</span>
                <button className="flex items-center gap-1 text-[10px] font-black text-indigo-600 group/btn">
                  فتح القالب
                  <ChevronLeft size={12} className="group-hover/btn:-translate-x-1 transition-transform" />
                </button>
              </div>

              <div className={`absolute top-0 right-0 w-1 h-full ${template.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. COMPACT GUIDANCE */}
      <div className="bg-slate-50/50 border border-slate-100 rounded-[1.5rem] p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-right shadow-inner">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
          <Lightbulb size={20} />
        </div>
        <div className="flex-1">
          <h4 className="text-md font-black text-slate-900 mb-0.5">هل تحتاج لمساعدة الخبراء؟</h4>
          <p className="text-slate-400 font-bold text-[11px]">تواصل مع مستشار أعمالنا الذكي للحصول على ترشيح مخصص لفكرتك.</p>
        </div>
        <button className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black hover:bg-black transition-all shadow-lg whitespace-nowrap">
          استشر الخبير الآن
        </button>
      </div>

    </div>
  );
};


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
    description: 'قالب شامل للشركات الناشئة في مجال البرمجيات والتقنية المتقدمة.',
    icon: Laptop,
    category: 'تقنية',
    color: 'bg-blue-500',
    isPopular: true
  },
  {
    id: 'restaurant',
    title: 'مطعم أو مقهى',
    description: 'خطة عمل تركز على التميز في الموقع، القائمة، وتجربة العميل.',
    icon: Utensils,
    category: 'أغذية ومشروبات',
    color: 'bg-orange-500',
    isPopular: true
  },
  {
    id: 'retail',
    title: 'متجر إلكتروني',
    description: 'خطة متكاملة للتجارة الإلكترونية والبيع بالتجزئة عبر الإنترنت.',
    icon: ShoppingBag,
    category: 'تجارة إلكترونية',
    color: 'bg-indigo-500'
  },
  {
    id: 'consulting',
    title: 'خدمات استشارية',
    description: 'للخبراء والمستشارين الذين يقدمون خدمات مهنية متخصصة.',
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
    description: 'للمؤسسات التعليمية ومراكز التدريب وورش العمل.',
    icon: GraduationCap,
    category: 'تعليم',
    color: 'bg-amber-500'
  }
];

export const NewPlan: React.FC<{ onStart: (id: string) => void }> = ({ onStart }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mode, setMode] = useState<'selection' | 'easy' | 'ai'>('selection');

  if (mode === 'easy') {
    return (
      <div className="animate-in fade-in slide-in-from-left-4 duration-500">
        <button 
          onClick={() => setMode('selection')}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-gray-900 font-bold text-sm transition-all group"
        >
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          العودة لاختيار النظام
        </button>
        <div className="bg-white rounded-[3rem] border border-gray-100 overflow-hidden shadow-2xl">
          <SmartBeginnerPro />
        </div>
      </div>
    );
  }

  if (mode === 'ai') {
    return <IdeaCreation onBack={() => setMode('selection')} />;
  }

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      
      {/* Hero Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">ابدأ خطة عملك الآن</h1>
        <p className="text-gray-400 font-bold text-lg max-w-2xl mx-auto">
          اختر الطريقة التي تناسبك لبدء رحلة مشروعك القادم مع "خطة".
        </p>
      </div>

      {/* Main Choice: Scratch, AI, or EASY MODE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* EASY MODE CARD */}
        <button 
          onClick={() => setMode('easy')}
          className="group relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-[3rem] shadow-xl hover:shadow-emerald-200 transition-all duration-500 text-right text-white"
        >
          <div className="absolute top-0 left-0 p-4 opacity-10">
            <Zap size={100} />
          </div>
          <div className="flex flex-col gap-6 relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Zap size={32} strokeWidth={2.5} fill="currentColor" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-2xl font-black">Easy Mode</h3>
                <span className="bg-white/20 text-[9px] px-2 py-0.5 rounded-full font-black uppercase">ناشئ</span>
              </div>
              <p className="text-emerald-50 font-bold text-sm opacity-90">تحليل فكرتك وبناء خطة عمل في دقائق عبر 8 أسئلة ذكية ومبسطة.</p>
            </div>
          </div>
        </button>

        <button 
          onClick={() => setMode('ai')}
          className="group relative overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-[3rem] shadow-xl hover:shadow-purple-200 transition-all duration-500 text-right text-white"
        >
          <div className="absolute top-0 left-0 p-4 opacity-10">
            <Sparkles size={100} />
          </div>
          <div className="flex flex-col gap-6 relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Wand2 size={32} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-1">توليد ذكي (AI)</h3>
              <p className="text-purple-100 font-bold text-sm opacity-90">دعنا نبني لك الهيكل المخصص والمسودة الأولى لمشروعك آلياً.</p>
            </div>
          </div>
        </button>

        <button 
          onClick={() => onStart('scratch')}
          className="group relative overflow-hidden bg-white border border-gray-100 p-8 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-gray-100 transition-all duration-500 text-right"
        >
          <div className="flex flex-col gap-6">
            <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all duration-500">
              <Plus size={32} strokeWidth={3} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">البدء من الصفر</h3>
              <p className="text-gray-400 font-bold text-sm">أنشئ خطة مخصصة بالكامل خطوة بخطوة بالتحكم الكامل في التفاصيل.</p>
            </div>
          </div>
        </button>
      </div>

      {/* Templates Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <Layers className="text-primary-600" />
            القوالب الجاهزة
          </h2>
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">محدثة باستمرار</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMPLATES.map((template) => (
            <div 
              key={template.id}
              onMouseEnter={() => setHoveredId(template.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onStart(template.id)}
              className="group cursor-pointer relative bg-white border border-gray-100 rounded-[2.5rem] p-6 hover:shadow-2xl hover:shadow-gray-100 transition-all duration-500 overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 ${template.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <template.icon size={28} />
                </div>
                {template.isPopular && (
                  <span className="bg-amber-50 text-amber-600 text-[9px] font-bold px-3 py-1 rounded-full border border-amber-100 uppercase tracking-wider">
                    شائع
                  </span>
                )}
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {template.title}
              </h4>
              <p className="text-gray-400 font-bold text-xs leading-relaxed mb-8">
                {template.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{template.category}</span>
                <button className="flex items-center gap-1 text-[11px] font-bold text-primary-600 group/btn">
                  اختر القالب
                  <ChevronLeft size={14} className="group-hover/btn:-translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Decorative Accent */}
              <div className={`absolute top-0 right-0 w-1 h-full ${template.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Guidance */}
      <div className="bg-gray-50 border border-gray-100 rounded-[3rem] p-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-right shadow-inner">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
          <Lightbulb size={32} />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold text-gray-900 mb-1">هل تحتاج للمساعدة في الاختيار؟</h4>
          <p className="text-gray-400 font-bold text-sm">تواصل مع مستشار أعمالنا الذكي ليقوم بترشيح القالب الأنسب لفكرة مشروعك.</p>
        </div>
        <button className="px-8 py-3 bg-gray-900 text-white rounded-2xl text-xs font-bold hover:bg-black transition-all shadow-xl">
          تحدث مع الخبير
        </button>
      </div>

    </div>
  );
};

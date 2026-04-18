
import React, { useState, useMemo } from 'react';
import { 
  Home, Layers, BrainCircuit, ListChecks, Search, 
  Sparkles, Palette, Shield, CreditCard, Receipt, 
  Bell, Plus, Settings, 
  ExternalLink, Zap, Target, Rocket, HelpCircle,
  FileText, FileCheck, ArrowRightLeft, Compass,
  ChevronLeft, Search as SearchIcon, X, Menu,
  ChevronRight
} from 'lucide-react';

interface MobileSiteMapProps {
  setActiveTab: (tab: string) => void;
}

interface SiteMapItem {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
  color: string;
  isNew?: boolean;
}

interface SiteMapSection {
  title: string;
  description: string;
  items: SiteMapItem[];
}

export const MobileSiteMap: React.FC<MobileSiteMapProps> = ({ setActiveTab }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const sections: SiteMapSection[] = [
    {
      title: 'العمليات الأساسية',
      description: 'إدارة رحلتك الريادية من الفكرة إلى التنفيذ',
      items: [
        { id: 'home', label: 'الرئيسية', description: 'ملخص الأداء والنبض الاستراتيجي', icon: Home, color: 'text-indigo-600 bg-indigo-50' },
        { id: 'my-plans', label: 'مشاريعي', description: 'إدارة خطط العمل الحالية', icon: Layers, color: 'text-emerald-600 bg-emerald-50' },
        { id: 'new-plan', label: 'خلق فكرة', description: 'توليد أفكار مشاريع ذكية', icon: Plus, color: 'text-blue-600 bg-blue-50' },
        { id: 'editor', label: 'محرر الخطط', description: 'تعديل وتطوير خطة العمل', icon: FileText, color: 'text-slate-600 bg-slate-50' },
      ]
    },
    {
      title: 'مختبر الاستراتيجية',
      description: 'أدوات ذكية لتحليل السوق وتطوير الهوية',
      items: [
        { id: 'problem-engine', label: 'محرك الفرص', description: 'تحليل المشاكل وتحويلها لفرص', icon: Target, color: 'text-red-600 bg-red-50', isNew: true },
        { id: 'market-discovery', label: 'استكشاف السوق', description: 'رصد الاتجاهات العالمية والقطاعات', icon: Compass, color: 'text-cyan-600 bg-cyan-50' },
        { id: 'unicorn-benchmark', label: 'رادار اليونيكورن', description: 'مقارنة مع الشركات المليونية', icon: Sparkles, color: 'text-rose-600 bg-rose-50', isNew: true },
        { id: 'brand-identity', label: 'استوديو الهوية', description: 'تصميم العلامة التجارية بصرياً', icon: Palette, color: 'text-amber-600 bg-amber-50' },
        { id: 'comparison', label: 'مقارنة السيناريوهات', description: 'تحليل المسارات الاستثمارية المختلفة', icon: ArrowRightLeft, color: 'text-orange-600 bg-orange-50' },
      ]
    },
    {
      title: 'الذكاء الاصطناعي والإدارة',
      description: 'أتمتة المهام وتحليل البيانات المتقدم',
      items: [
        { id: 'smart-analyzer', label: 'المحلل الذكي', description: 'مراجعة الخطة بالذكاء الاصطناعي', icon: BrainCircuit, color: 'text-purple-600 bg-purple-50' },
        { id: 'tasks', label: 'المهام والجدولة', description: 'تتبع خطوات التنفيذ الميداني', icon: ListChecks, color: 'text-teal-600 bg-teal-50' },
        { id: 'export-templates', label: 'قوالب التصدير', description: 'تصدير الخطط بملفات احترافية', icon: FileCheck, color: 'text-slate-600 bg-slate-100' },
        { id: 'notifications', label: 'مركز التنبيهات', description: 'إشعارات النظام ورسائل الآلي', icon: Bell, color: 'text-amber-600 bg-amber-50' },
      ]
    },
    {
      title: 'الحساب والاشتراك',
      description: 'ضبط إعدادات المنصة وإدارة الفوترة',
      items: [
        { id: 'settings', label: 'الإعدادات', description: 'تعديل الملف والبيانات الشخصية', icon: Settings, color: 'text-slate-600 bg-slate-100' },
        { id: 'pricing', label: 'الباقات والأسعار', description: 'ترقية الحساب واكتشاف الميزات', icon: CreditCard, color: 'text-indigo-600 bg-indigo-50' },
      ]
    }
  ];

  const filteredSections = useMemo(() => {
    if (!searchTerm) return sections;
    return sections.map(section => ({
      ...section,
      items: section.items.filter(item => 
        item.label.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        section.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(section => section.items.length > 0);
  }, [searchTerm, sections]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-40 font-['IBM_Plex_Sans_Arabic'] rtl" dir="rtl">
      
      {/* Dynamic Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-xl px-6 pt-12 pb-8 border-b border-slate-100 rounded-b-[2.5rem] shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200 rotate-[-4deg]">
              <Rocket size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900 leading-none">خريطة المنصة</h1>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Strategic Mission Control</p>
            </div>
          </div>
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white text-[11px] font-black rounded-full shadow-lg shadow-slate-200 active:scale-90 transition-all"
          >
            <span>الرئيسية</span>
            <ChevronRight size={14} strokeWidth={3} />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative group">
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-indigo-600">
            <SearchIcon size={18} />
          </div>
          <input 
            type="text" 
            placeholder="ابحث عن أداة أو صفحة..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-12 pl-4 py-4 bg-slate-100 border-none rounded-2xl text-[13px] font-bold text-slate-800 focus:bg-white focus:ring-4 focus:ring-slate-100 transition-all placeholder:text-slate-400 outline-none"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 p-2"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Grid Content */}
      <div className="px-6 mt-10 space-y-12 relative z-10">
        {filteredSections.map((section, sIdx) => (
          <div key={sIdx} className="animate-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${sIdx * 100}ms` }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 bg-slate-900 rounded-full" />
              <div>
                <h3 className="text-base font-black text-slate-900 leading-none">{section.title}</h3>
                <p className="text-[10px] font-bold text-slate-400 mt-1">{section.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className="w-full flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-[1.5rem] shadow-sm hover:shadow-md hover:border-slate-200 transition-all active:scale-[0.97] group text-right overflow-hidden relative touch-manipulation"
                >
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shrink-0 transition-transform group-active:scale-95 shadow-sm`}>
                    <item.icon size={26} strokeWidth={2.5} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[14px] font-black text-slate-900 truncate tracking-tight">{item.label}</span>
                      {item.isNew && (
                        <span className="bg-amber-100 text-amber-700 text-[8px] font-black px-1.5 py-0.5 rounded-lg border border-amber-200 animate-pulse">جديد</span>
                      )}
                    </div>
                    <p className="text-[11px] font-bold text-slate-400 truncate opacity-80">{item.description}</p>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-slate-900 group-hover:bg-slate-100 transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
                    <ChevronLeft size={16} strokeWidth={3} />
                  </div>

                  {/* Tactile Highlight Ripple Effect (Simulated) */}
                  <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-active:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Support Section Redesigned */}
        <div className="relative overflow-hidden p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] text-white shadow-2xl animate-in slide-in-from-bottom-4 duration-700 delay-500 mb-8">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl -ml-12 -mb-12" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-xl ring-1 ring-white/20">
              <HelpCircle size={32} className="text-white" />
            </div>
            
            <h4 className="text-xl font-black mb-3">هل تواجه تحدياً تقنياً؟</h4>
            <p className="text-[12px] font-bold text-slate-400 mb-10 leading-relaxed px-2">
              فريق الخبراء متاح لمساعدتك في ضبط إعدادات المنصة وتجاوز أية عقبات استراتيجية تواجهك.
            </p>
            
            <button className="w-full py-4.5 bg-white text-slate-900 rounded-[1.5rem] text-[13px] font-black hover:bg-slate-100 transition-all active:scale-95 shadow-xl shadow-black/20 flex items-center justify-center gap-2">
              <span>تواصل مع الدعم الفني</span>
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

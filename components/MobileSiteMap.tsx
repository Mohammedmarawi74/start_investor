
import React from 'react';
import { 
  Home, Layers, BrainCircuit, Trello, Search, 
  Unicorn, Brush, Shield, CreditCard, Receipt, 
  Bell, Globe, Sparkles, Plus, Settings, 
  ExternalLink, Zap, Target, Rocket, HelpCircle
} from 'lucide-react';

interface MobileSiteMapProps {
  setActiveTab: (tab: string) => void;
}

export const MobileSiteMap: React.FC<MobileSiteMapProps> = ({ setActiveTab }) => {
  const sections = [
    {
      title: 'الرئيسية',
      items: [
        { id: 'home', label: 'لوحة التحكم', icon: Home, color: 'bg-blue-50 text-blue-600' },
        { id: 'my-plans', label: 'مشاريعي', icon: Layers, color: 'bg-emerald-50 text-emerald-600' },
        { id: 'notifications', label: 'التنبيهات', icon: Bell, color: 'bg-amber-50 text-amber-600' },
      ]
    },
    {
      title: 'الأدوات الاستراتيجية',
      items: [
        { id: 'new-plan', label: 'خلق فكرة', icon: Plus, color: 'bg-indigo-50 text-indigo-600' },
        { id: 'smart-analyzer', label: 'المحلل الذكي', icon: BrainCircuit, color: 'bg-purple-50 text-purple-600' },
        { id: 'unicorn-benchmark', label: 'رادار اليونيكورن', icon: Sparkles, color: 'bg-rose-50 text-rose-600' },
        { id: 'brand-identity', label: 'استوديو البراند', icon: Brush, color: 'bg-orange-50 text-orange-600' },
      ]
    },
    {
      title: 'الاستكشاف والبيانات',
      items: [
        { id: 'market-discovery', label: 'مركز الاستكشاف', icon: Search, color: 'bg-cyan-50 text-cyan-600' },
        { id: 'problem-engine', label: 'محرك الفرص', icon: Target, color: 'bg-red-50 text-red-600' },
        { id: 'comparison', label: 'مقارنة الخطط', icon: Zap, color: 'bg-yellow-50 text-yellow-600' },
      ]
    },
    {
      title: 'الملف الشخصي والفوترة',
      items: [
        { id: 'settings', label: 'الإعدادات', icon: Settings, color: 'bg-slate-100 text-slate-600' },
        { id: 'pricing', label: 'الباقات والأسعار', icon: Shield, color: 'bg-indigo-50 text-indigo-600' },
        { id: 'subscription', label: 'اشتراكي الحالي', icon: Receipt, color: 'bg-blue-50 text-blue-600' },
        { id: 'invoices', label: 'سجل الفواتير', icon: ExternalLink, color: 'bg-gray-50 text-gray-600' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-24 px-6 pt-10 animate-in fade-in duration-700 rtl">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-slate-950 text-white rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
          <Rocket size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-black text-slate-950 leading-none">خريطة المنصة</h1>
          <p className="text-[10px] uppercase tracking-widest font-black text-emerald-500 mt-1">Explore All Sections</p>
        </div>
      </div>

      <div className="space-y-10">
        {sections.map((section, idx) => (
          <div key={idx} className="animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
            <h3 className="text-[11px] font-black text-slate-300 uppercase tracking-[0.2em] mb-5 pr-1">
              {section.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className="flex flex-col items-start p-5 bg-white border border-slate-100 rounded-[2rem] hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/20 transition-all group active:scale-95"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                    <item.icon size={22} strokeWidth={2.5} />
                  </div>
                  <span className="text-[13px] font-black text-slate-800 leading-tight">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Support Section */}
        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 animate-in slide-in-from-bottom-4 duration-500 delay-500">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
              <HelpCircle size={20} />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900">هل تحتاج مساعدة؟</h4>
              <p className="text-[10px] font-bold text-slate-400 italic">فريق الدعم متاح 24/7</p>
            </div>
          </div>
          <button className="w-full py-3 bg-white text-slate-900 border border-slate-200 rounded-xl text-xs font-black hover:bg-slate-900 hover:text-white transition-all">
            تواصل مع الدعم الفني
          </button>
        </div>
      </div>
    </div>
  );
};

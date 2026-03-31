
import React from 'react';
import { 
  FileText, 
  Download, 
  BrainCircuit,
  BarChart3, 
  LayoutDashboard,
  Plus,
  Settings,
  ChevronLeft,
  Share2,
  Trash2,
  CreditCard,
  Bell,
  Palette,
  ListTodo,
  Home,
  ArrowRightLeft,
  Zap,
  Star
} from 'lucide-react';
import { User } from '../types';

interface SidebarProps {
  user: User;
  isOpen?: boolean;
  activeTab?: string;
  setActiveTab?: (tab: any) => void;
}

interface NavGroupProps {
  title: string;
  children: React.ReactNode;
}

const NavGroup: React.FC<NavGroupProps> = ({ title, children }) => (
  <div className="mb-8">
    <div className="px-6 mb-3 flex items-center justify-between">
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">{title}</h3>
      <div className="h-px flex-1 bg-gray-100/50 mr-4"></div>
    </div>
    <div className="space-y-1 px-3">
      {children}
    </div>
  </div>
);

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  variant?: 'default' | 'danger' | 'ai' | 'active-project';
  active?: boolean;
  onClick?: () => void;
  badge?: string | number;
  isNew?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, variant = 'default', active, onClick, badge, isNew }) => {
  const baseClasses = "w-full flex items-center gap-3 px-4 py-3 rounded-[1.2rem] text-[13px] font-bold transition-all duration-300 group relative overflow-hidden";
  
  const variants = {
    default: active 
      ? "bg-white text-primary-600 shadow-[0_10px_20px_rgba(37,99,235,0.08)] border border-primary-50" 
      : "text-gray-500 hover:bg-white hover:text-gray-900 hover:shadow-sm",
    ai: "text-purple-600 hover:bg-purple-50 hover:shadow-purple-100/20",
    danger: "text-red-400 hover:bg-red-50 hover:text-red-600",
    'active-project': "bg-primary-600 text-white shadow-lg shadow-primary-200"
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]}`}>
      {/* Active Indicator Bar */}
      {active && variant === 'default' && (
        <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-primary-600 rounded-l-full"></div>
      )}
      
      <div className={`p-2 rounded-xl transition-all duration-500 ${
        active 
          ? variant === 'active-project' ? 'bg-white/20 text-white' : 'bg-primary-50 text-primary-600' 
          : 'bg-transparent group-hover:bg-gray-50 group-hover:scale-110'
      }`}>
        <Icon size={18} strokeWidth={active ? 2.5 : 2} />
      </div>
      
      <span className={`flex-1 text-right transition-transform duration-300 ${active ? 'translate-x-[-2px]' : 'group-hover:translate-x-[-4px]'}`}>
        {label}
      </span>

      {isNew && (
        <span className="bg-amber-400 text-amber-950 text-[8px] font-bold px-1.5 py-0.5 rounded-md mr-2 animate-bounce">جديد</span>
      )}

      {badge && (
        <div className="relative mr-2">
          <span className="bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-lg shadow-red-200">
            {badge}
          </span>
          <span className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></span>
        </div>
      )}
      
      {!active && (
        <ChevronLeft size={14} className="opacity-0 translate-x-2 group-hover:opacity-40 group-hover:translate-x-0 transition-all" />
      )}
    </button>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ user, isOpen = true, activeTab, setActiveTab }) => {
  return (
    <aside className={`w-72 sidebar-glass h-screen fixed right-0 top-0 border-l border-gray-100 flex flex-col z-50 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      
      {/* Premium Branding Section */}
      <div className="p-8 pb-6">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => setActiveTab?.('home')}>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-200 transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110">
               <FileText size={26} strokeWidth={2.5} />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center">
              <Star size={8} fill="currentColor" className="text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight leading-none mb-1">خطة</h2>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Business AI Platform</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Scrollable Area */}
      <nav className="flex-1 py-4 overflow-y-auto no-scrollbar">
        <NavGroup title="المنصة الرئيسية">
          <NavItem icon={Home} label="الرئيسية" active={activeTab === 'home'} onClick={() => setActiveTab?.('home')} />
          <NavItem icon={LayoutDashboard} label="خططي الذكية" active={activeTab === 'my-plans'} onClick={() => setActiveTab?.('my-plans')} />
          <NavItem icon={Plus} label="خطة جديدة" active={activeTab === 'new-plan'} onClick={() => setActiveTab?.('new-plan')} />
          <NavItem icon={Palette} label="الهوية البصرية" active={activeTab === 'brand-identity'} onClick={() => setActiveTab?.('brand-identity')} isNew />
          <NavItem icon={ArrowRightLeft} label="مقارنة الخطط" active={activeTab === 'comparison'} onClick={() => setActiveTab?.('comparison')} />
          <NavItem icon={ListTodo} label="مهامي" active={activeTab === 'tasks'} onClick={() => setActiveTab?.('tasks')} badge={2} />
        </NavGroup>

        <NavGroup title="المشروع النشط">
           <NavItem 
             variant={activeTab === 'editor' ? 'active-project' : 'default'} 
             icon={Zap} 
             label="خطة عمل test2" 
             active={activeTab === 'editor'} 
             onClick={() => setActiveTab?.('editor')} 
           />
        </NavGroup>

        <NavGroup title="أدوات ذكية">
          <NavItem icon={BrainCircuit} label="تحليل SWOT ذكي" variant="ai" />
          <NavItem icon={BarChart3} label="إنفوجرافيك مخصص" />
          <NavItem icon={Palette} label="قوالب التصدير" active={activeTab === 'export-templates'} onClick={() => setActiveTab?.('export-templates')} />
        </NavGroup>

        <NavGroup title="الإعدادات والنظام">
          <NavItem icon={Bell} label="الإشعارات" active={activeTab === 'notifications'} onClick={() => setActiveTab?.('notifications')} badge={3} />
          <NavItem icon={CreditCard} label="الفوترة والأسعار" active={activeTab === 'pricing'} onClick={() => setActiveTab?.('pricing')} />
          <NavItem icon={Settings} label="إعدادات الحساب" active={activeTab === 'settings'} onClick={() => setActiveTab?.('settings')} />
        </NavGroup>

        <div className="px-6 py-4">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 border border-gray-200/50">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">الدعم الفني</h4>
            <p className="text-[11px] font-bold text-gray-600 mb-3 leading-relaxed">هل تحتاج لمساعدة في بناء خطتك؟</p>
            <button className="w-full py-2 bg-white border border-gray-200 rounded-xl text-[11px] font-bold text-gray-800 hover:bg-gray-900 hover:text-white transition-all shadow-sm">تحدث مع مستشار</button>
          </div>
        </div>

        <NavGroup title="أمان البيانات">
          <NavItem icon={Trash2} label="حذف المشروع" variant="danger" />
        </NavGroup>
      </nav>

      {/* Glassy User Footer Card */}
      <div className="p-4 bg-gradient-to-t from-white via-white to-transparent border-t border-gray-50">
        <div className="bg-white p-4 rounded-3xl border border-gray-100 flex items-center gap-4 mb-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all group">
          <div className="relative">
            <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-2xl border-2 border-white shadow-md object-cover transition-transform group-hover:scale-105" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-success rounded-full border-2 border-white"></div>
          </div>
          <div className="overflow-hidden">
            <h3 className="font-bold text-gray-900 text-sm truncate leading-none mb-1.5">{user.name}</h3>
            <div className="flex items-center gap-2">
              <span className="bg-primary-50 text-primary-700 text-[9px] font-bold px-2 py-0.5 rounded-lg border border-primary-100">PRO PLAN</span>
              <span className="text-[10px] font-bold text-gray-400">{user.credits} نقطة</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">الإصدار 2.5.1 • 2025</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </aside>
  );
};

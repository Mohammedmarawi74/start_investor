
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
  isCollapsed?: boolean;
  onCollapseToggle?: () => void;
  activeTab?: string;
  setActiveTab?: (tab: any) => void;
}

interface NavGroupProps {
  title: string;
  children: React.ReactNode;
}

const NavGroup: React.FC<NavGroupProps & { isCollapsed: boolean }> = ({ title, children, isCollapsed }) => (
  <div className="mb-8">
    {!isCollapsed && (
      <div className="px-6 mb-3 flex items-center justify-between animate-in fade-in duration-500">
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">{title}</h3>
        <div className="h-px flex-1 bg-gray-100/50 mr-4"></div>
      </div>
    )}
    {isCollapsed && (
      <div className="px-6 mb-4 flex justify-center">
         <div className="h-[2px] w-8 bg-slate-100 rounded-full"></div>
      </div>
    )}
    <div className={`space-y-1 ${isCollapsed ? 'px-2' : 'px-3'}`}>
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
  isCollapsed?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, variant = 'default', active, onClick, badge, isNew, isCollapsed }) => {
  const baseClasses = `w-full flex items-center ${isCollapsed ? 'justify-center p-0 h-12' : 'gap-3 px-4 py-3'} rounded-[1.2rem] text-[13px] font-bold transition-all duration-300 group relative overflow-hidden`;
  
  const variants = {
    default: active 
      ? "bg-white text-primary-600 shadow-[0_10px_20px_rgba(37,99,235,0.08)] border border-primary-50" 
      : "text-gray-500 hover:bg-white hover:text-gray-900 hover:shadow-sm",
    ai: "text-purple-600 hover:bg-purple-50 hover:shadow-purple-100/20",
    danger: "text-red-400 hover:bg-red-50 hover:text-red-600",
    'active-project': "bg-primary-600 text-white shadow-lg shadow-primary-200"
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]}`} title={isCollapsed ? label : ''}>
      {/* Active Indicator Bar */}
      {active && variant === 'default' && !isCollapsed && (
        <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-primary-600 rounded-l-full"></div>
      )}
      
      <div className={`${isCollapsed ? 'p-2' : 'p-2'} rounded-xl transition-all duration-500 ${
        active 
          ? variant === 'active-project' ? 'bg-white/20 text-white' : 'bg-primary-50 text-primary-600' 
          : 'bg-transparent group-hover:bg-gray-50 group-hover:scale-110'
      }`}>
        <Icon size={isCollapsed ? 22 : 18} strokeWidth={active ? 2.5 : 2} />
      </div>
      
      {!isCollapsed && (
        <>
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
        </>
      )}

      {isCollapsed && isNew && (
        <div className="absolute top-2 right-2 w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]"></div>
      )}
      {isCollapsed && badge && (
        <div className="absolute -top-1 -left-1 w-5 h-5 bg-red-500 text-white text-[8px] rounded-full flex items-center justify-center border-2 border-white shadow-lg shadow-red-200/50 scale-75">
           {badge}
        </div>
      )}
    </button>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ user, isOpen = true, isCollapsed = false, onCollapseToggle, activeTab, setActiveTab }) => {
  return (
    <aside className={`${isCollapsed ? 'w-24' : 'w-72'} sidebar-glass h-screen fixed right-0 top-0 border-l border-gray-100 flex flex-col z-50 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      
      {/* Collapse Toggle Button - Integrated & Premium */}
      <button 
        onClick={onCollapseToggle} 
        className={`absolute -left-4 top-10 w-9 h-9 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-[60] group ${isCollapsed ? 'rotate-180' : ''}`}
      >
        <ChevronLeft size={18} className="text-primary-600 transition-transform group-active:translate-x-[-2px]" strokeWidth={3} />
      </button>

      {/* Premium Branding Section */}
      <div className={`p-8 ${isCollapsed ? 'px-4' : 'pb-6'}`}>
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-4'} group cursor-pointer`} onClick={() => setActiveTab?.('home')}>
          <div className="relative">
            <div className={`transition-all duration-500 bg-gradient-to-br from-primary-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-200 group-hover:rotate-[15deg] group-hover:scale-110 ${isCollapsed ? 'w-10 h-10' : 'w-12 h-12'}`}>
               <FileText size={isCollapsed ? 20 : 26} strokeWidth={2.5} />
            </div>
            {!isCollapsed && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center">
                <Star size={8} fill="currentColor" className="text-white" />
              </div>
            )}
          </div>
          {!isCollapsed && (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight leading-none mb-1">خطة</h2>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Business AI Platform</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation Scrollable Area */}
      <nav className="flex-1 py-4 overflow-y-auto no-scrollbar">
        <NavGroup title="المنصة الرئيسية" isCollapsed={isCollapsed}>
          <NavItem icon={Home} label="الرئيسية" active={activeTab === 'home'} onClick={() => setActiveTab?.('home')} isCollapsed={isCollapsed} />
          <NavItem icon={LayoutDashboard} label="خططي الذكية" active={activeTab === 'my-plans'} onClick={() => setActiveTab?.('my-plans')} isCollapsed={isCollapsed} />
          <NavItem icon={Plus} label="خطة جديدة" active={activeTab === 'new-plan'} onClick={() => setActiveTab?.('new-plan')} isCollapsed={isCollapsed} />
          <NavItem icon={Palette} label="الهوية البصرية" active={activeTab === 'brand-identity'} onClick={() => setActiveTab?.('brand-identity')} isCollapsed={isCollapsed} isNew />
          <NavItem icon={ArrowRightLeft} label="مقارنة الخطط" active={activeTab === 'comparison'} onClick={() => setActiveTab?.('comparison')} isCollapsed={isCollapsed} />
          <NavItem icon={ListTodo} label="مهامي" active={activeTab === 'tasks'} onClick={() => setActiveTab?.('tasks')} isCollapsed={isCollapsed} badge={2} />
        </NavGroup>

        <NavGroup title="المشروع النشط" isCollapsed={isCollapsed}>
           <NavItem 
             variant={activeTab === 'editor' ? 'active-project' : 'default'} 
             icon={Zap} 
             label="خطة عمل test2" 
             active={activeTab === 'editor'} 
             onClick={() => setActiveTab?.('editor')} 
             isCollapsed={isCollapsed}
           />
        </NavGroup>

        <NavGroup title="أدوات ذكية" isCollapsed={isCollapsed}>
          <NavItem icon={BrainCircuit} label="تحليل SWOT ذكي" variant="ai" isCollapsed={isCollapsed} />
          <NavItem icon={BarChart3} label="إنفوجرافيك مخصص" isCollapsed={isCollapsed} />
          <NavItem icon={Palette} label="قوالب التصدير" active={activeTab === 'export-templates'} onClick={() => setActiveTab?.('export-templates')} isCollapsed={isCollapsed} />
        </NavGroup>

        <NavGroup title="الإعدادات والنظام" isCollapsed={isCollapsed}>
          <NavItem icon={Bell} label="الإشعارات" active={activeTab === 'notifications'} onClick={() => setActiveTab?.('notifications')} isCollapsed={isCollapsed} badge={3} />
          <NavItem icon={CreditCard} label="الفوترة والأسعار" active={activeTab === 'pricing'} onClick={() => setActiveTab?.('pricing')} isCollapsed={isCollapsed} />
          <NavItem icon={Settings} label="إعدادات الحساب" active={activeTab === 'settings'} onClick={() => setActiveTab?.('settings')} isCollapsed={isCollapsed} />
        </NavGroup>

        {!isCollapsed && (
          <div className="px-6 py-4 animate-in fade-in duration-500">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 border border-gray-200/50">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">الدعم الفني</h4>
              <p className="text-[11px] font-bold text-gray-600 mb-3 leading-relaxed">هل تحتاج لمساعدة في بناء خطتك؟</p>
              <button className="w-full py-2 bg-white border border-gray-200 rounded-xl text-[11px] font-bold text-gray-800 hover:bg-gray-900 hover:text-white transition-all shadow-sm">تحدث مع مستشار</button>
            </div>
          </div>
        )}

        <NavGroup title="أمان البيانات" isCollapsed={isCollapsed}>
          <NavItem icon={Trash2} label="حذف المشروع" variant="danger" isCollapsed={isCollapsed} />
        </NavGroup>
      </nav>

      {/* Glassy User Footer Card */}
      <div className={`p-4 bg-gradient-to-t from-white via-white to-transparent border-t border-gray-50 ${isCollapsed ? 'flex justify-center' : ''}`}>
        <div className={`bg-white rounded-3xl border border-gray-100 flex items-center transition-all group overflow-hidden ${isCollapsed ? 'w-14 h-14 justify-center shadow-lg' : 'p-4 gap-4 mb-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl'}`}>
          <div className="relative flex-shrink-0">
            <img src={user.avatar} alt={user.name} className={`${isCollapsed ? 'w-10 h-10' : 'w-12 h-12'} rounded-2xl border-2 border-white shadow-md object-cover transition-transform group-hover:scale-105`} />
            <div className={`absolute -bottom-1 -left-1 bg-success rounded-full border-2 border-white ${isCollapsed ? 'w-3 h-3' : 'w-4 h-4'}`}></div>
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden animate-in fade-in duration-500">
              <h3 className="font-bold text-gray-900 text-sm truncate leading-none mb-1.5">{user.name}</h3>
              <div className="flex items-center gap-2">
                <span className="bg-primary-50 text-primary-700 text-[9px] font-bold px-2 py-0.5 rounded-lg border border-primary-100">PRO PLAN</span>
                <span className="text-[10px] font-bold text-gray-400">{user.credits} نقطة</span>
              </div>
            </div>
          )}
        </div>
        {!isCollapsed && (
          <div className="flex justify-center animate-in slide-in-from-bottom-2 duration-500">
            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">الإصدار 2.5.1 • 2025</p>
          </div>
        )}
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

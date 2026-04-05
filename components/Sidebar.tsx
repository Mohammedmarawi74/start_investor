
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
  Star,
  Shield,
  Users,
  Database,
  PieChart,
  LogOut,
  Activity,
  UserCheck,
  UserX,
  FileCheck,
  Lock,
  Key,
  Mail,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Wallet,
  Receipt,
  Calculator,
  Globe,
  Languages,
  Palette as PaletteIcon,
  Image as ImageIcon,
  Cpu,
  Server,
  HardDrive,
  Cloud,
  DownloadCloud,
  UploadCloud,
  RefreshCw,
  Eye,
  EyeOff,
  Search,
  Filter,
  SortAsc,
  MessageSquareWarning,
  Flag,
  Ban,
  CheckCircle,
  XCircle,
  Clock3,
  Calendar,
  BellRing,
  Send,
  Inbox,
  Archive,
  FolderOpen,
  FileBarChart,
  LineChart,
  AreaChart,
  ScrollText,
  BookOpen,
  GraduationCap,
  Video,
  Phone,
  MessageCircle,
  LifeBuoy,
  Bug,
  Wrench,
  GitBranch,
  GitCommit,
  Terminal,
  Code,
  FileJson,
  FileCode2,
  FileCog,
  Sliders,
  ToggleLeft,
  ShieldCheck,
  ShieldAlert,
  Fingerprint,
  ScanFace,
  History,
  RotateCcw,
  Copy,
  Link,
  ExternalLink,
  QrCode,
  Tag,
  Bookmark,
  Star as StarIcon,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageSquareMore,
  Sparkles,
  Layers,
  Target,
  Rocket,
  Compass,
  Trello,
  LayoutGrid
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
  isAdminMode?: boolean;
}

const NavGroup: React.FC<NavGroupProps & { isCollapsed: boolean }> = ({ title, children, isCollapsed, isAdminMode }) => (
  <div className="mb-6">
    {!isCollapsed && (
      <div className="px-6 mb-3 flex items-center justify-between animate-in fade-in duration-500">
        <h3 className={`text-[10px] font-black ${isAdminMode ? 'text-slate-500' : 'text-gray-400'} uppercase tracking-[0.25em]`}>{title}</h3>
        <div className={`h-[1px] flex-1 ${isAdminMode ? 'bg-slate-800' : 'bg-gray-100/60'} mr-4`}></div>
      </div>
    )}
    {isCollapsed && (
      <div className="px-6 mb-4 flex justify-center">
         <div className={`h-[2px] w-6 ${isAdminMode ? 'bg-slate-700' : 'bg-slate-100'} rounded-full`}></div>
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
  isAdminMode?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, variant = 'default', active, onClick, badge, isNew, isCollapsed, isAdminMode }) => {
  const baseClasses = `w-full flex items-center ${isCollapsed ? 'justify-center p-0 h-11 w-11 mx-auto mb-1' : 'gap-3 px-4 py-2.5'} rounded-[1.1rem] text-[13px] font-bold transition-all duration-300 group relative`;
  
  const variants = {
    default: active 
      ? (isAdminMode ? "bg-amber-500 text-white shadow-lg shadow-amber-200" : "bg-primary-600 text-white shadow-lg shadow-primary-200")
      : (isAdminMode ? "text-slate-400 hover:bg-slate-800 hover:text-slate-200" : "text-gray-500 hover:bg-white hover:text-gray-900"),
    ai: active 
      ? "bg-purple-600 text-white shadow-lg shadow-purple-200" 
      : "text-purple-600 hover:bg-purple-50 hover:shadow-purple-100/20",
    danger: "text-red-400 hover:bg-red-50 hover:text-red-600",
    'active-project': "bg-primary-600 text-white shadow-lg shadow-primary-200"
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]}`} title={isCollapsed ? label : ''}>
      <div className={`${isCollapsed ? 'p-2' : 'p-2'} rounded-xl transition-all duration-500 ${
        active 
          ? 'bg-white/20 text-white' 
          : (isAdminMode ? 'bg-transparent group-hover:bg-slate-700/50 group-hover:scale-110' : 'bg-transparent group-hover:bg-gray-50 group-hover:scale-110')
      }`}>
        <Icon size={isCollapsed ? 20 : 17} strokeWidth={active ? 2.5 : 2} />
      </div>
      
      {!isCollapsed && (
        <>
          <span className={`flex-1 text-right transition-transform duration-300 ${active ? 'translate-x-[-2px]' : 'group-hover:translate-x-[-4px]'}`}>
            {label}
          </span>

          {isNew && (
            <span className="bg-amber-400 text-amber-950 text-[7px] font-black px-1.5 py-0.5 rounded-lg mr-2 animate-pulse">جديد</span>
          )}

          {badge && (
            <div className="relative mr-2">
              <span className="bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold shadow-lg shadow-red-200">
                {badge}
              </span>
            </div>
          )}
        </>
      )}

      {isCollapsed && isNew && (
        <div className="absolute top-1 right-1 w-2 h-2 bg-amber-400 rounded-full border-2 border-white shadow-sm"></div>
      )}
      {isCollapsed && badge && (
        <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[7.5px] rounded-full flex items-center justify-center border-2 border-white font-black shadow-sm ring-1 ring-red-200">
           {badge}
        </div>
      )}
    </button>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ user, isOpen = true, isCollapsed = false, onCollapseToggle, activeTab, setActiveTab }) => {
  const adminTabs = ['admin-dashboard', 'users-management', 'admin-plans', 'admin-analytics', 'admin-security'];
  const isAdminMode = adminTabs.includes(activeTab || '');
  const sidebarBg = isAdminMode 
    ? 'bg-slate-950 border-slate-900 shadow-[20px_0_40px_rgba(0,0,0,0.5)]' 
    : 'sidebar-glass border-gray-100 shadow-2xl';

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-72'} ${sidebarBg} h-screen fixed right-0 top-0 border-l flex flex-col z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      
      {/* Collapse Toggle Button - Integrated & Premium */}
      <button 
        onClick={onCollapseToggle} 
        className={`absolute -left-4 top-10 w-9 h-9 ${isAdminMode ? 'bg-slate-800 border-slate-700 text-amber-500' : 'bg-white border-gray-100 text-primary-600'} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-[60] group ${isCollapsed ? 'rotate-180' : ''}`}
      >
        <ChevronLeft size={18} className="transition-transform group-active:translate-x-[-2px]" strokeWidth={3} />
      </button>

      {/* Premium Branding Section */}
      <div className={`p-8 ${isCollapsed ? 'px-4' : 'pb-6'}`}>
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-4'} group cursor-pointer`} onClick={() => setActiveTab?.(isAdminMode ? 'admin-dashboard' : 'home')}>
          {!isCollapsed && (
            <div className="animate-in fade-in duration-500 text-right">
              <h2 className={`text-2xl font-black tracking-tight leading-none mb-1 ${isAdminMode ? 'text-white' : 'text-gray-900'}`}>{isAdminMode ? 'واجهة الإدارة' : 'خطة'}</h2>
              <div className="flex items-center gap-1 justify-end">
                <span className={`w-1.5 h-1.5 ${isAdminMode ? 'bg-amber-400' : 'bg-success'} rounded-full animate-pulse`}></span>
                <p className={`text-[9px] font-black ${isAdminMode ? 'text-slate-400' : 'text-gray-400'} uppercase tracking-widest`}>{isAdminMode ? 'System Admin' : 'Business AI Platform'}</p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg ${isAdminMode ? 'bg-amber-500' : 'bg-primary-600'}`}>
              {isAdminMode ? <Shield size={20} strokeWidth={2.5} /> : <Zap size={20} strokeWidth={2.5} />}
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation Scrollable Area */}
      <nav className="flex-1 py-1 overflow-y-auto no-scrollbar">
        {isAdminMode ? (
           <>
             {/* مجموعة الإدارة الرئيسية */}
             <NavGroup title="القلب النابض" isCollapsed={isCollapsed} isAdminMode={isAdminMode}>
               <NavItem icon={LayoutDashboard} label="نظرة بانورامية" active={activeTab === 'admin-dashboard'} onClick={() => setActiveTab?.('admin-dashboard')} isCollapsed={isCollapsed} isAdminMode={isAdminMode} />
               <NavItem icon={AreaChart} label="تحليلات المنصة" active={activeTab === 'admin-analytics'} onClick={() => setActiveTab?.('admin-analytics')} isAdminMode={isAdminMode} isCollapsed={isCollapsed} />
             </NavGroup>

             {/* إدارة المحتوى والمرونة */}
             <NavGroup title="إدارة النظام" isCollapsed={isCollapsed} isAdminMode={isAdminMode}>
               <NavItem icon={Users} label="قاعدة المستخدمين" active={activeTab === 'users-management'} onClick={() => setActiveTab?.('users-management')} isAdminMode={isAdminMode} isCollapsed={isCollapsed} badge={248} />
               <NavItem icon={FileText} label="أرشيف الخطط" active={activeTab === 'admin-plans'} onClick={() => setActiveTab?.('admin-plans')} isAdminMode={isAdminMode} isCollapsed={isCollapsed} />
               {!isCollapsed && <NavItem icon={Shield} label="بروتوكولات الأمان" active={activeTab === 'admin-security'} onClick={() => setActiveTab?.('admin-security')} isAdminMode={isAdminMode} isCollapsed={isCollapsed} />}
             </NavGroup>

             {/* Safe Logout */}
             {!isCollapsed && (
               <NavGroup title="النظام" isCollapsed={isCollapsed} isAdminMode={isAdminMode}>
                 <NavItem icon={LogOut} label="تسجيل الخروج Safe" variant="danger" isAdminMode={isAdminMode} isCollapsed={isCollapsed} />
               </NavGroup>
             )}
           </>
        ) : (
           <>
             {/* مساحة العمل النشطة */}
             <NavGroup title="القلب النابض" isCollapsed={isCollapsed}>
               <NavItem icon={Home} label="نظرة بانورامية" active={activeTab === 'home'} onClick={() => setActiveTab?.('home')} isCollapsed={isCollapsed} />
               <NavItem icon={Layers} label="مشاريعي" active={activeTab === 'my-plans'} onClick={() => setActiveTab?.('my-plans')} isCollapsed={isCollapsed} />
               <NavItem icon={Rocket} label="خلق فكرة" active={activeTab === 'new-plan'} onClick={() => setActiveTab?.('new-plan')} isCollapsed={isCollapsed} />
             </NavGroup>

             {/* مختبر الاستراتيجية المتقدم */}
             <NavGroup title="مختبر الاستراتيجية" isCollapsed={isCollapsed}>
               <NavItem icon={Globe} label="رادار اليونيكورن" active={activeTab === 'unicorn-benchmark'} onClick={() => setActiveTab?.('unicorn-benchmark')} isCollapsed={isCollapsed} isNew />
               <NavItem icon={Palette} label="استوديو الهوية" active={activeTab === 'brand-identity'} onClick={() => setActiveTab?.('brand-identity')} isCollapsed={isCollapsed} />
               {!isCollapsed && <NavItem icon={ArrowRightLeft} label="مقارنة السيناريوهات" active={activeTab === 'comparison'} onClick={() => setActiveTab?.('comparison')} isCollapsed={isCollapsed} />}
             </NavGroup>

             {!isCollapsed ? (
               <>
                 {/* التنفيذ والنمو العملي */}
                 <NavGroup title="مركز العمليات" isCollapsed={isCollapsed}>
                    <NavItem icon={FileText} label="محرر الخطط" active={activeTab === 'editor'} onClick={() => setActiveTab?.('editor')} isCollapsed={isCollapsed} variant={activeTab === 'editor' ? 'active-project' : 'default'} />
                    <NavItem icon={Trello} label="المهام والجدولة" active={activeTab === 'tasks'} onClick={() => setActiveTab?.('tasks')} isCollapsed={isCollapsed} badge={2} />
                    <NavItem icon={BrainCircuit} label="المحلل الذكي (AI)" active={activeTab === 'smart-analyzer'} onClick={() => setActiveTab?.('smart-analyzer')} variant="ai" isCollapsed={isCollapsed} />
                    <NavItem icon={FileCheck} label="قوالب التصدير" active={activeTab === 'export-templates'} onClick={() => setActiveTab?.('export-templates')} isCollapsed={isCollapsed} />
                 </NavGroup>

                 {/* المنظومة والنظام */}
                 <NavGroup title="الإدارة والضبط" isCollapsed={isCollapsed}>
                   <NavItem icon={Bell} label="التنبيهات" active={activeTab === 'notifications'} onClick={() => setActiveTab?.('notifications')} isCollapsed={isCollapsed} badge={3} />
                   <NavItem icon={CreditCard} label="الاشتراكات والأسعار" active={activeTab === 'pricing'} onClick={() => setActiveTab?.('pricing')} isCollapsed={isCollapsed} />
                   <NavItem icon={Settings} label="إعدادات المنصة" active={activeTab === 'settings'} onClick={() => setActiveTab?.('settings')} isCollapsed={isCollapsed} />
                 </NavGroup>

                 <div className="px-6 py-4 animate-in fade-in duration-500">
                   <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-5 border border-gray-200/50 relative overflow-hidden group">
                     <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary-100 rounded-full blur-2xl group-hover:bg-primary-200 transition-all opacity-40"></div>
                     <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 relative z-10">الدعم الاستراتيجي</h4>
                     <p className="text-[11px] font-bold text-gray-600 mb-3 leading-relaxed relative z-10">تحتاج لخبرة استثمارية؟</p>
                     <button className="w-full py-2.5 bg-white border border-gray-100 rounded-xl text-[11px] font-black text-gray-800 hover:bg-gray-900 hover:text-white transition-all shadow-sm relative z-10">تحدث مع مستشار</button>
                   </div>
                 </div>
               </>
             ) : (
                <div className="px-2 mt-4 space-y-4">
                   <NavItem icon={Bell} label="التنبيهات" active={activeTab === 'notifications'} onClick={() => setActiveTab?.('notifications')} isCollapsed={isCollapsed} badge={3} />
                   <NavItem icon={Settings} label="الإعدادات" active={activeTab === 'settings'} onClick={() => setActiveTab?.('settings')} isCollapsed={isCollapsed} />
                </div>
             )}
           </>
        )}
      </nav>

      {/* Glassy User Footer Card with Admin Pin */}
      <div className={`p-4 ${isAdminMode ? 'bg-slate-900 border-slate-800' : 'bg-gradient-to-t from-white via-white to-transparent border-gray-50'} border-t ${isCollapsed ? 'flex flex-col items-center' : 'flex flex-col'} gap-4 transition-colors duration-500`}>
        
        {/* Admin Pinned Button */}
        <button 
          onClick={() => setActiveTab?.(isAdminMode ? 'home' : 'admin-dashboard')}
          className={`w-full flex items-center ${isCollapsed ? 'justify-center p-3.5' : 'justify-center gap-2 py-3 px-4'} rounded-[1.2rem] text-[11px] font-black transition-all duration-300 group ${
            isAdminMode 
              ? 'bg-amber-500/10 border border-amber-500/20 text-amber-500 hover:bg-amber-500 hover:text-white shadow-sm' 
              : 'bg-white border border-amber-200 text-amber-600 hover:bg-amber-50 hover:border-amber-400 shadow-sm'
          }`}
          title={isAdminMode ? "العودة لحساب المستخدم" : "لوحة تحكم المسؤول"}
        >
          {isAdminMode ? <LogOut size={isCollapsed ? 20 : 16} className="group-hover:-translate-x-1 transition-transform" /> : <Shield size={isCollapsed ? 20 : 16} className="group-hover:scale-110 transition-transform" />}
          {!isCollapsed && (isAdminMode ? 'العودة لواجهة المستخدم' : 'لوحة تحكم الآدمن')}
        </button>

        {!isCollapsed && (
          <div className="flex justify-center animate-in slide-in-from-bottom-2 duration-500">
            <p className={`text-[10px] font-black ${isAdminMode ? 'text-slate-600' : 'text-gray-300'} uppercase tracking-[0.3em]`}>KHOTTA • ENGINE 2.5</p>
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

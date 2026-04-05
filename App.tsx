
import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { MyProjects } from './components/MyProjects';
import { NewPlan } from './components/NewPlan';
import { PlanComparison } from './components/PlanComparison';
import { UnicornBenchmarking } from './components/UnicornBenchmarking';
import { BrandIdentityStudio } from './components/BrandIdentityStudio';
import { BusinessPlanEditor } from './components/BusinessPlanEditor';
import { UsersManagement } from './components/UsersManagement';
import { AdminProjectsManagement } from './components/AdminProjectsManagement';
import { AdminAnalyticsDashboard } from './components/AdminAnalyticsDashboard';
import { AdminSecurityDashboard } from './components/AdminSecurityDashboard';
import { FloatingActions } from './components/FloatingActions';
import { AiSidekick } from './components/AiSidekick';
import { PricingPlans } from './components/PricingPlans';
import { Settings } from './components/Settings';
import { Tasks } from './components/Tasks';
import { Changelog } from './components/Changelog';
import { ExportTemplates } from './components/ExportTemplates';
import { Notifications } from './components/Notifications';
import { SmartAnalyzer } from './components/SmartAnalyzer';
import { Profile } from './components/Profile';
import { User, PlanSection, BusinessModelItem, Comment } from './types';
import { 
  ShieldCheck, 
  ArrowLeft,
  GanttChartSquare,
  LayoutGrid,
  Files,
  MessageCircle,
  Sparkles,
  LayoutDashboard,
  PanelRightClose,
  PanelRightOpen,
  Settings as SettingsIcon,
  CreditCard,
  Bell,
  History,
  BarChart3,
  Palette,
  ListTodo,
  Home as HomeIcon,
  ArrowRightLeft,
  Plus,
  Globe,
  Check,
  Zap,
  Info,
  ChevronLeft,
  Clock3,
  User as UserIcon,
  ShoppingBag,
  CreditCard as BillingIcon,
  LifeBuoy,
  LogOut,
  Layers,
  Layout,
  Briefcase
} from 'lucide-react';

const MOCK_USER: User = {
  name: 'عبدالله محمد',
  email: 'abdullah@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abdullah',
  credits: 85,
  totalCredits: 100,
};

const INITIAL_SECTIONS: PlanSection[] = [
  { id: '1', title: 'الملخص التنفيذي', content: '', isCompleted: true, lastEdited: 'منذ يومين', aiScore: 85, humanScore: 90, progress: 100 },
  { id: '2', title: 'تحليل السوق والمنافسين', content: '', isCompleted: false, lastEdited: 'أمس', aiScore: 45, humanScore: 0, progress: 20 },
  { id: '3', title: 'نموذج العمل التجاري', content: '', isCompleted: false, progress: 60, aiScore: 72, humanScore: 0 },
  { id: '4', title: 'خطة التسويق والمبيعات', content: '', isCompleted: false, progress: 30, aiScore: 64, humanScore: 0 },
  { id: '5', title: 'الهيكل التنظيمي والإداري', content: '', isCompleted: true, lastEdited: 'منذ أسبوع', aiScore: 92, humanScore: 95, progress: 100 },
  { id: '6', title: 'التوقعات المالية', content: '', isCompleted: false, progress: 10, aiScore: 50, humanScore: 0 },
];

const CANVAS_ITEMS: BusinessModelItem[] = [
  { id: 'c1', category: 'users', title: 'شرائح العملاء', content: 'الشركات الصغيرة والمتوسطة، رواد الأعمال' },
  { id: 'c2', category: 'partners', title: 'الشركاء الرئيسيون', content: 'البنوك المحلية، مزودو خدمات الكلاود' },
  { id: 'c3', category: 'value', title: 'القيمة المضافة', content: 'سهولة الاستخدام، رسوم منخفضة' },
  { id: 'c4', category: 'cost', title: 'هيكل التكاليف', content: '' },
  { id: 'c5', category: 'revenue', title: 'مصادر الإيرادات', content: 'اشتراكات شهرية، عمولة العمليات' },
];

const INITIAL_COMMENTS: Comment[] = [
  { id: '1', user: 'سارة أحمد', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara', text: 'أعتقد أننا بحاجة لتفصيل أكثر في قسم تحليل السوق وتحديد المنافسين المباشرين.', timestamp: 'منذ 2 ساعة' }
];

const App: React.FC = () => {
  // Persistence Logic: Initialize from localStorage or default to 'home'
  const [activeTab, setActiveTab] = useState<'home' | 'my-plans' | 'new-plan' | 'comparison' | 'unicorn-benchmark' | 'brand-identity' | 'editor' | 'smart-analyzer' | 'analytics' | 'tasks' | 'export-templates' | 'settings' | 'pricing' | 'notifications' | 'changelog' | 'admin-dashboard' | 'users-management' | 'admin-plans' | 'admin-analytics' | 'admin-security' | 'profile'>(() => {
    const savedTab = localStorage.getItem('khotta_active_tab');
    return (savedTab as any) || 'home';
  });

  const [sections, setSections] = useState<PlanSection[]>(INITIAL_SECTIONS);
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>('1');
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | null>('saved');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [isAiSidebarOpen, setIsAiSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Persistence Effect: Update localStorage whenever activeTab changes
  useEffect(() => {
    localStorage.setItem('khotta_active_tab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (saveStatus === 'saving') {
      const timer = setTimeout(() => setSaveStatus('saved'), 1000);
      return () => clearTimeout(timer);
    }
  }, [saveStatus]);

  const handleSectionUpdate = (id: string, updates: Partial<PlanSection>) => {
    setSaveStatus('saving');
    setSections(prev => prev.map(s => 
      s.id === id ? { ...s, ...updates, lastEdited: 'الآن' } : s
    ));
  };

  const notifications = [
    { 
      id: 1, 
      type: 'ai', 
      priority: 'high',
      title: 'تحليل SWOT جـاهز', 
      msg: 'أكمل الذكاء الاصطناعي تحليل نقاط القوة والضعف لمشروعك الاستراتيجي. يمكنك الآن مراجعة النتائج.', 
      time: 'منذ 5 دقائق', 
      icon: Sparkles, 
      color: 'text-purple-600 bg-purple-50',
      action: 'مراجعة التحليل'
    },
    { 
      id: 2, 
      type: 'task', 
      priority: 'urgent',
      title: 'مهمة قريبة الموعد', 
      msg: 'بقي أقل من 24 ساعة على الموعد النهائي لتسليم خطة التسويق الرقمي.', 
      time: 'منذ ساعة', 
      icon: Clock3, 
      color: 'text-amber-600 bg-amber-50',
      action: 'انتقل للمهام'
    },
    { 
      id: 3, 
      type: 'system', 
      priority: 'low',
      title: 'تجديد اشتراك PRO', 
      msg: 'تم تجديد اشتراكك السنوي بنجاح؛ استمتع بكامل ميزات المنصة والذكاء الاصطناعي.', 
      time: 'منذ يوم', 
      icon: Check, 
      color: 'text-emerald-600 bg-emerald-50',
      action: 'تفاصيل الفاتورة'
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F1F5F9]/80">
      <Sidebar 
        user={MOCK_USER} 
        isOpen={isSidebarOpen} 
        isCollapsed={isSidebarCollapsed}
        onCollapseToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      <main className={`flex-1 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${!isSidebarOpen ? 'mr-0' : isSidebarCollapsed ? 'mr-24' : 'mr-72'} ${activeTab === 'editor' && isAiSidebarOpen ? 'ml-96' : 'ml-0'}`}>
        {/* Superior Navigation Bar */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-6 lg:px-12 py-3 flex items-center justify-between">
           <div className="flex items-center gap-4 lg:gap-6">
              {/* Dynamic Breadcrumb UI */}
              <nav className="flex items-center gap-2 text-[10.5px] font-bold group">
                 <button 
                  onClick={() => setActiveTab('home')}
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-600 transition-colors"
                 >
                    <HomeIcon size={14} />
                    <span className="hidden sm:inline">الرئيسية</span>
                 </button>
                 
                 {activeTab !== 'home' && (
                   <>
                    <ChevronLeft size={12} className="text-gray-300" />
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-gray-700 animate-in fade-in slide-in-from-right-2 duration-500">
                       <span className="w-1 h-1 bg-primary-500 rounded-full"></span>
                       <span>
                         {activeTab === 'profile' && 'الملف الشخصي'}
                         {activeTab === 'settings' && 'إعدادات الحساب والملف الشخصي'}
                         {activeTab === 'pricing' && 'باقات الاشتراك والفوترة'}
                         {activeTab === 'my-plans' && 'مركز إدارة مشاريعي الاستثمارية'}
                         {activeTab === 'new-plan' && 'خلق فكرة جديدة'}
                         {activeTab === 'unicorn-benchmark' && 'رادار اليونيكورن'}
                         {activeTab === 'brand-identity' && 'استوديو الهوية البصرية'}
                         {activeTab === 'comparison' && 'مقارنة السيناريوهات'}
                         {activeTab === 'editor' && 'محرر خطط الأعمال الذكي'}
                         {activeTab === 'smart-analyzer' && 'المحلل الاستراتيجي المتقدم'}
                         {activeTab === 'tasks' && 'المهام والجدولة'}
                         {activeTab === 'notifications' && 'مركز التنبيهات'}
                         {activeTab === 'changelog' && 'سجل التحديثات القادم'}
                         {activeTab === 'export-templates' && 'قوالب التصدير والطباعة'}
                         {activeTab === 'admin-dashboard' && 'لوحة تحكم الإدارة'}
                         {activeTab === 'users-management' && 'إدارة قاعدة المستخدمين'}
                         {activeTab === 'admin-plans' && 'أرشيف الخطط العمومية'}
                         {activeTab === 'admin-analytics' && 'تحليلات المنصة الشاملة'}
                         {activeTab === 'admin-security' && 'بروتوكولات الأمان'}
                       </span>
                    </div>
                   </>
                 )}
              </nav>
           </div>
           
           <div className="flex items-center gap-4">
              {/* Notifications Dropdown Container */}
              <div className="relative" ref={notificationRef}>
                <button 
                  onClick={() => { setIsNotificationsOpen(!isNotificationsOpen); setIsProfileOpen(false); }}
                  className={`p-2 rounded-xl transition-all relative ${isNotificationsOpen ? 'bg-primary-50 text-primary-600' : 'text-gray-400 hover:bg-gray-100'}`}
                >
                  <Bell size={20} />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                {isNotificationsOpen && (
                  <div className="absolute left-0 mt-4 w-[380px] bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-[100] animate-in fade-in slide-in-from-top-4 duration-500 overflow-hidden rtl text-right">
                    <div className="p-6 pb-4 border-b border-slate-50 flex items-center justify-between bg-gradient-to-l from-slate-50/50 to-white">
                      <div>
                        <h3 className="font-black text-lg text-slate-900 leading-none">مركز التنبيهات</h3>
                        <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">3 تنبيهات غير مقروءة</p>
                      </div>
                      <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <SettingsIcon size={16} className="text-slate-400" />
                      </button>
                    </div>

                    <div className="max-h-[460px] overflow-y-auto no-scrollbar py-2">
                       {/* Section Header */}
                       <div className="px-6 py-2">
                          <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">الأخيرة</span>
                       </div>

                      {notifications.map((notif) => (
                        <div key={notif.id} className="mx-3 my-1 p-4 flex gap-4 hover:bg-slate-50/80 rounded-[1.8rem] transition-all cursor-pointer border border-transparent hover:border-slate-100 group">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${notif.color} group-hover:shadow-current/5`}>
                            <notif.icon size={20} strokeWidth={2.5} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-[13px] font-black text-slate-900">{notif.title}</h4>
                              <span className="text-[9px] font-black text-slate-400 opacity-60">{notif.time}</span>
                            </div>
                            <p className="text-[12px] text-slate-500 line-clamp-2 leading-relaxed font-medium mb-3">{notif.msg}</p>

                            <div className="flex items-center justify-between mt-auto">
                               <button className="text-[10px] font-black text-primary-600 bg-primary-50 px-3 py-1.5 rounded-lg hover:bg-primary-600 hover:text-white transition-all">
                                 {notif.action}
                               </button>
                               {notif.priority === 'urgent' && (
                                 <span className="flex items-center gap-1 text-[9px] font-black text-red-500 animate-pulse">
                                   <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                                   مستعجل
                                 </span>
                               )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 bg-gray-50 border-t border-gray-100 text-center">
                      <button onClick={() => { setIsNotificationsOpen(false); setActiveTab('notifications'); }} className="text-[11px] font-black text-gray-500 hover:text-primary-600 transition-colors flex items-center justify-center gap-1 mx-auto">
                        مشاهدة جميع التنبيهات
                        <ChevronLeft size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Dropdown Container */}
              <div className="relative" ref={profileRef}>
                <button 
                  onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotificationsOpen(false); }} 
                  className={`flex items-center gap-3 p-1 pr-3 border border-gray-100 rounded-full transition-all group ${isProfileOpen ? 'bg-primary-50 border-primary-100' : 'hover:bg-gray-50'}`}
                >
                  <span className={`text-[11px] font-black transition-colors hidden sm:inline ${isProfileOpen ? 'text-primary-700' : 'text-gray-500'}`}>{MOCK_USER.name}</span>
                  <img src={MOCK_USER.avatar} className="w-8 h-8 rounded-full border border-white shadow-sm" alt="Profile" />
                </button>

                {isProfileOpen && (
                  <div className="absolute left-0 mt-3 w-72 bg-white border border-gray-100 rounded-[2rem] shadow-2xl z-[100] animate-in fade-in slide-in-from-top-2 duration-300 overflow-hidden rtl text-right">
                     {/* Profile Identity Header */}
                     <div className="p-5 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
                        <div className="flex items-center gap-4 mb-3">
                           <img src={MOCK_USER.avatar} className="w-12 h-12 rounded-2xl border-2 border-white shadow-sm" alt="Avatar" />
                           <div className="min-w-0">
                               <h4 className="font-black text-sm text-gray-900 truncate">{MOCK_USER.name}</h4>
                               <p className="text-[10px] text-gray-400 truncate">{MOCK_USER.email}</p>
                           </div>
                        </div>
                        <div className="bg-primary-600 rounded-xl p-2.5 flex items-center justify-between text-white shadow-lg shadow-primary-200">
                           <div className="flex items-center gap-2">
                               <Zap size={14} fill="currentColor" />
                               <span className="text-[11px] font-black">باقة المحترفين PRO</span>
                           </div>
                           <span className="text-[10px] font-bold opacity-80">85 نقطة</span>
                        </div>
                     </div>

                     {/* Profile Menu Links */}
                     <div className="p-3 py-4">
                        <div className="space-y-1">
                           <button onClick={() => { setIsProfileOpen(false); setActiveTab('settings'); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[12px] font-bold text-gray-600 hover:bg-primary-50 hover:text-primary-700 transition-all group">
                              <UserIcon size={16} className="group-hover:scale-110 transition-transform" />
                              <span>ملفي الشخصي وإعداداتي</span>
                           </button>
                           <button onClick={() => { setIsProfileOpen(false); setActiveTab('my-plans'); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[12px] font-bold text-gray-600 hover:bg-primary-50 hover:text-primary-700 transition-all group">
                              <Briefcase size={16} className="group-hover:scale-110 transition-transform" />
                              <span>مشاريعي وخططي</span>
                           </button>
                        </div>

                        <div className="h-px bg-gray-50 my-3 mx-4"></div>

                        <div className="space-y-1">
                           <button onClick={() => { setIsProfileOpen(false); setActiveTab('pricing'); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[12px] font-bold text-gray-600 hover:bg-primary-50 hover:text-primary-700 transition-all group">
                              <CreditCard size={16} className="group-hover:scale-110 transition-transform" />
                              <span>اشتراكاتي وفواتيري</span>
                           </button>
                           {/* Account Settings removed as it is now merged with Profile */}
                        </div>

                        <div className="h-px bg-gray-50 my-3 mx-4"></div>

                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[12px] font-bold text-red-500 hover:bg-red-50 transition-all group pr-5">
                           <LogOut size={16} className="group-hover:translate-x-[-2px] transition-transform" />
                           <span>تسجيل الخروج</span>
                        </button>
                     </div>
                  </div>
                )}
              </div>
           </div>
        </div>

        <div className={`${(activeTab === 'home' || activeTab === 'admin-dashboard' || activeTab === 'new-plan') ? 'w-full pt-0 pb-0' : 'max-w-6xl mx-auto py-8 lg:py-10 px-6 lg:px-12'}`}>
          
          {(activeTab === 'home' || activeTab === 'admin-dashboard') && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Home setActiveTab={setActiveTab} />
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Profile user={MOCK_USER} />
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700 max-w-3xl mx-auto py-4">
               <div className="mb-8 text-right px-2">
                  <h1 className="text-2xl font-black text-slate-800 mb-1">مركز التنبيهات</h1>
                  <p className="text-slate-400 font-bold text-[11px] uppercase tracking-wider">متابعة النشاطات والتحديثات الاستراتيجية</p>
               </div>
               <div className="space-y-2.5">
                 {notifications.map((notif) => (
                   <div key={notif.id} className="bg-white p-4 rounded-[1.8rem] border border-slate-100 flex items-center gap-5 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${notif.color}`}>
                         <notif.icon size={22} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 text-right min-w-0">
                         <div className="flex items-center justify-between mb-0.5">
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{notif.type}</span>
                              {notif.priority === 'urgent' && <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" title="مستعجل"></span>}
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 italic italic">{notif.time}</span>
                         </div>
                         <h3 className="text-[14px] font-black text-slate-900 mb-0.5">{notif.title}</h3>
                         <p className="text-[11.5px] text-slate-500 leading-relaxed font-medium line-clamp-1">{notif.msg}</p>
                      </div>
                      <div className="pr-4 flex items-center">
                         <button className="px-5 py-1.5 bg-slate-50 hover:bg-primary-600 hover:text-white text-slate-500 rounded-xl text-[10.5px] font-black transition-all border border-slate-100/50">
                           {notif.action}
                         </button>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {activeTab === 'users-management' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <UsersManagement />
            </div>
          )}
          
          {activeTab === 'admin-plans' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <AdminProjectsManagement />
            </div>
          )}

          {activeTab === 'admin-analytics' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <AdminAnalyticsDashboard />
            </div>
          )}

          {activeTab === 'admin-security' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <AdminSecurityDashboard />
            </div>
          )}

          {activeTab === 'my-plans' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <MyProjects />
            </div>
          )}

          {activeTab === 'new-plan' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <NewPlan onStart={(id) => setActiveTab('editor')} />
            </div>
          )}

          {activeTab === 'brand-identity' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <BrandIdentityStudio />
            </div>
          )}

          {activeTab === 'unicorn-benchmark' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <UnicornBenchmarking />
            </div>
          )}

          {activeTab === 'comparison' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <PlanComparison />
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <PricingPlans />
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Settings user={MOCK_USER} />
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Tasks />
            </div>
          )}

          {activeTab === 'changelog' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Changelog />
            </div>
          )}

          {activeTab === 'export-templates' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <ExportTemplates />
            </div>
          )}

          {activeTab === 'smart-analyzer' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <SmartAnalyzer />
            </div>
          )}

          {activeTab === 'editor' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700 h-[calc(100vh-140px)]">
               <BusinessPlanEditor 
                 sections={sections} 
                 onSectionUpdate={handleSectionUpdate}
                 expandedSectionId={expandedSectionId}
                 onSectionExpand={setExpandedSectionId}
               />
            </div>
          )}
        </div>
      </main>

      <FloatingActions />
    </div>
  );
};

export default App;


import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { PlansDashboard } from './components/PlansDashboard';
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
  const [activeTab, setActiveTab] = useState<'home' | 'my-plans' | 'new-plan' | 'comparison' | 'unicorn-benchmark' | 'brand-identity' | 'editor' | 'analytics' | 'tasks' | 'export-templates' | 'settings' | 'pricing' | 'notifications' | 'changelog' | 'admin-dashboard' | 'users-management' | 'admin-plans' | 'admin-analytics' | 'admin-security' | 'profile'>('home');
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
    { id: 1, type: 'ai', title: 'تحليل SWOT جـاهز', msg: 'أكمل الذكاء الاصطناعي تحليل نقاط القوة لمشروعك.', time: 'منذ 5 دقائق', icon: Sparkles, color: 'text-purple-600 bg-purple-50' },
    { id: 2, type: 'task', title: 'مهمة قريبة الموعد', msg: 'بقي 24 ساعة على تسليم خطة التسويق.', time: 'منذ ساعة', icon: Clock3, color: 'text-amber-600 bg-amber-50' },
    { id: 3, type: 'system', title: 'اشتراك PRO', msg: 'تم تجديد اشتراكك السنوي بنجاح.', time: 'منذ يوم', icon: Check, color: 'text-green-600 bg-green-50' },
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
                         {activeTab === 'my-plans' && 'أرشيف مشاريعي'}
                         {activeTab === 'new-plan' && 'خلق فكرة جديدة'}
                         {activeTab === 'unicorn-benchmark' && 'رادار اليونيكورن'}
                         {activeTab === 'brand-identity' && 'استوديو الهوية البصرية'}
                         {activeTab === 'comparison' && 'مقارنة السيناريوهات'}
                         {activeTab === 'editor' && 'محرر خطط الأعمال الذكي'}
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
                  <div className="absolute left-0 mt-3 w-80 bg-white border border-gray-100 rounded-3xl shadow-2xl z-[100] animate-in fade-in slide-in-from-top-2 duration-300 overflow-hidden rtl text-right">
                    <div className="p-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                      <h3 className="font-black text-sm text-gray-900">التنبيهات</h3>
                      <button className="text-[10px] font-bold text-primary-600 hover:underline">Mark as read</button>
                    </div>
                    <div className="max-h-96 overflow-y-auto no-scrollbar">
                      {notifications.map((notif) => (
                        <div key={notif.id} className="p-4 flex gap-4 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50/50 last:border-0 group">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${notif.color}`}>
                            <notif.icon size={18} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-[12px] font-black text-gray-900 mb-0.5">{notif.title}</h4>
                            <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">{notif.msg}</p>
                            <span className="text-[9px] font-bold text-gray-300 mt-2 block italic">{notif.time}</span>
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

        <div className={`${(activeTab === 'home' || activeTab === 'admin-dashboard') ? 'w-full pt-0 pb-0' : 'max-w-6xl mx-auto py-8 lg:py-10 px-6 lg:px-12'}`}>
          
          {(activeTab === 'home' || activeTab === 'admin-dashboard') && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Home setActiveTab={setActiveTab} />
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto">
               <div className="mb-10 text-right">
                  <h1 className="text-3xl font-black text-gray-900 mb-2">الملف الشخصي</h1>
                  <p className="text-gray-400 font-bold text-sm">إدارة البيانات الشخصية وإعدادات الأمان</p>
               </div>
               <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm text-center">
                  <div className="relative inline-block mb-6">
                     <img src={MOCK_USER.avatar} className="w-32 h-32 rounded-[2rem] border-4 border-white shadow-xl mx-auto" alt="Large Avatar" />
                     <button className="absolute -bottom-2 -left-2 bg-primary-600 text-white p-3 rounded-2xl shadow-lg hover:scale-110 transition-transform">
                        <Plus size={20} />
                     </button>
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 mb-1">{MOCK_USER.name}</h2>
                  <p className="text-gray-400 font-bold mb-8">{MOCK_USER.email}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
                     <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">البيانات الأساسية</h4>
                        <div className="space-y-4">
                           <div>
                              <label className="block text-[11px] font-black text-gray-500 mb-2 mr-1">اسم المستخدم</label>
                              <div className="bg-white p-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-800">{MOCK_USER.name}</div>
                           </div>
                           <div>
                              <label className="block text-[11px] font-black text-gray-500 mb-2 mr-1">البريد الإلكتروني</label>
                              <div className="bg-white p-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-800">{MOCK_USER.email}</div>
                           </div>
                        </div>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">الأمان والاشتراك</h4>
                        <div className="space-y-4">
                           <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200">
                              <span className="text-[12px] font-bold text-gray-800">كلمة المرور</span>
                              <button className="text-[10px] font-black text-primary-600">تغيير</button>
                           </div>
                           <div className="flex items-center justify-between bg-primary-600 p-4 rounded-xl shadow-lg shadow-primary-100">
                              <span className="text-[12px] font-black text-white">الباقة الحالية</span>
                              <span className="text-[10px] font-black bg-white/20 text-white px-2 py-1 rounded-lg">PRO PLAN</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto">
               <div className="mb-10 text-right">
                  <h1 className="text-3xl font-black text-gray-900 mb-2">مركز التنبيهات</h1>
                  <p className="text-gray-400 font-bold text-sm">متابعة كافة النشاطات والتحديثات المتعلقة بمشاريعك</p>
               </div>
               <div className="space-y-4">
                 {notifications.map((notif) => (
                   <div key={notif.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 flex items-center gap-6 shadow-sm hover:shadow-md transition-all group">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${notif.color}`}>
                         <notif.icon size={24} />
                      </div>
                      <div className="flex-1 text-right">
                         <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{notif.type}</span>
                            <span className="text-[11px] font-bold text-gray-400 italic">{notif.time}</span>
                         </div>
                         <h3 className="text-lg font-black text-gray-900 mb-1">{notif.title}</h3>
                         <p className="text-sm text-gray-500 leading-relaxed">{notif.msg}</p>
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
               <div className="mb-10 text-right">
                  <h1 className="text-3xl font-black text-gray-900 mb-2">أرشيف المشاريع</h1>
                  <p className="text-gray-400 font-bold text-sm">إدارة وتحرير كافة خطط الأعمال النشطة</p>
               </div>
               <PlansDashboard />
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

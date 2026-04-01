
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { PlanHeader } from './components/PlanHeader';
import { SectionEditor } from './components/SectionEditor';
import { BusinessCanvas } from './components/BusinessCanvas';
import { FileUpload } from './components/FileUpload';
import { Comments } from './components/Comments';
import { FloatingActions } from './components/FloatingActions';
import { CollapsibleContainer } from './components/CollapsibleContainer';
import { AiIdentityGenerator } from './components/AiIdentityGenerator';
import { PlansDashboard } from './components/PlansDashboard';
import { Settings } from './components/Settings';
import { PricingPlans } from './components/PricingPlans';
import { Notifications } from './components/Notifications';
import { Changelog } from './components/Changelog';
import { Analytics } from './components/Analytics';
import { ExportTemplates } from './components/ExportTemplates';
import { Tasks } from './components/Tasks';
import { Home } from './components/Home';
import { PlanComparison } from './components/PlanComparison';
import { UnicornBenchmarking } from './components/UnicornBenchmarking';
import { NewPlan } from './components/NewPlan';
import { LeftAiSidebar } from './components/LeftAiSidebar';
import { BrandIdentityStudio } from './components/BrandIdentityStudio';
import { UsersManagement } from './components/UsersManagement';
import { AdminProjectsManagement } from './components/AdminProjectsManagement';
import { AdminAnalyticsDashboard } from './components/AdminAnalyticsDashboard';
import { AdminSecurityDashboard } from './components/AdminSecurityDashboard';
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
  Globe
} from 'lucide-react';

const MOCK_USER: User = {
  name: 'عبدالله محمد',
  email: 'abdullah@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abdullah',
  credits: 85,
  totalCredits: 100
};

const INITIAL_SECTIONS: PlanSection[] = [
  { id: '1', title: 'الملخص التنفيذي', content: 'تهدف الشركة إلى ريادة قطاع التقنية المالية من خلال تقديم حلول مبتكرة للمدفوعات الرقمية...', isCompleted: true, lastEdited: 'منذ ساعة', progress: 100, aiScore: 92, humanScore: 88 },
  { id: '2', title: 'وصف الشركة', content: '', isCompleted: false, progress: 15, aiScore: 0, humanScore: 0 },
  { id: '3', title: 'تحليل السوق', content: '', isCompleted: false, progress: 45, aiScore: 30, humanScore: 40 },
  { id: '4', title: 'المنتج والتكنولوجيا', content: 'نعتمد على معمارية الخدمات المصغرة (Microservices) لضمان القابلية للتوسع...', isCompleted: true, lastEdited: 'منذ يومين', progress: 80, aiScore: 85, humanScore: 90 },
  { id: '5', title: 'الاستراتيجية التسويقية', content: '', isCompleted: false, progress: 0, aiScore: 0, humanScore: 0 },
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
  const [activeTab, setActiveTab] = useState<'home' | 'my-plans' | 'new-plan' | 'comparison' | 'unicorn-benchmark' | 'brand-identity' | 'editor' | 'analytics' | 'tasks' | 'export-templates' | 'settings' | 'pricing' | 'notifications' | 'changelog' | 'admin-dashboard' | 'users-management' | 'admin-plans' | 'admin-analytics' | 'admin-security'>('home');
  const [sections, setSections] = useState<PlanSection[]>(INITIAL_SECTIONS);
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>('1');
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | null>('saved');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isAiSidebarOpen, setIsAiSidebarOpen] = useState(false);

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
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-xl text-gray-500 transition-colors"
              >
                {isSidebarOpen ? <PanelRightClose size={20} /> : <PanelRightOpen size={20} />}
              </button>

              <div className="h-5 w-px bg-gray-100 mx-1 hidden lg:block"></div>

              <div className="flex items-center bg-gray-100/50 p-1 rounded-xl overflow-x-auto max-w-[400px] sm:max-w-none no-scrollbar">
                {[
                  { id: 'home', label: 'الرئيسية', icon: HomeIcon },
                  { id: 'my-plans', label: 'خططي', icon: LayoutDashboard },
                  { id: 'new-plan', label: 'خطة جديدة', icon: Plus },
                  { id: 'brand-identity', label: 'الهوية البصرية', icon: Palette },
                  { id: 'editor', label: 'المحرر', icon: GanttChartSquare },
                  { id: 'tasks', label: 'مهامي', icon: ListTodo },
                ].map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap relative ${
                      activeTab === tab.id ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <tab.icon size={14} />
                    <span>{tab.label}</span>
                  </button>
                ))}

                <div className="relative group px-2">
                  <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold text-gray-400 hover:text-gray-600 transition-all whitespace-nowrap">
                    <LayoutGrid size={14} />
                    <span>المزيد</span>
                  </button>
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {[
                      { id: 'comparison', label: 'المقارنة', icon: ArrowRightLeft },
                      { id: 'unicorn-benchmark', label: 'رادار اليونيكورن', icon: Globe },
                      { id: 'analytics', label: 'التحليلات', icon: BarChart3 },
                      { id: 'export-templates', label: 'القوالب', icon: Palette },
                      { id: 'changelog', label: 'التحديثات', icon: History },
                      { id: 'pricing', label: 'الأسعار', icon: CreditCard }
                    ].map((subTab) => (
                      <button 
                        key={subTab.id}
                        onClick={() => setActiveTab(subTab.id as any)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs font-bold transition-all ${
                          activeTab === subTab.id ? 'bg-primary-50 text-primary-600' : 'text-gray-500 hover:bg-gray-50 hover:text-primary-600'
                        }`}
                      >
                        <subTab.icon size={14} />
                        <span>{subTab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <button 
                onClick={() => setActiveTab('notifications')}
                className={`p-2 rounded-xl transition-all relative ${activeTab === 'notifications' ? 'bg-primary-50 text-primary-600' : 'text-gray-400 hover:bg-gray-100'}`}
              >
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button onClick={() => setActiveTab('settings')} className="flex items-center gap-3 p-1 pr-3 border border-gray-100 rounded-full hover:bg-gray-50 transition-all group">
                <span className="text-[11px] font-bold text-gray-500 group-hover:text-primary-600 transition-colors hidden sm:inline">{MOCK_USER.name}</span>
                <img src={MOCK_USER.avatar} className="w-8 h-8 rounded-full border border-white shadow-sm" alt="Profile" />
              </button>
           </div>
        </div>

        <div className={`${(activeTab === 'home' || activeTab === 'admin-dashboard') ? 'w-full pt-0 pb-0' : 'max-w-6xl mx-auto py-8 lg:py-10 px-6 lg:px-12'}`}>
          
          {(activeTab === 'home' || activeTab === 'admin-dashboard') && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Home setActiveTab={setActiveTab} />
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
               <div className="mb-10">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">خطط الأعمال</h1>
                  <p className="text-gray-400 font-bold text-sm">إدارة وتحرير مشاريعك الاستراتيجية</p>
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

          {activeTab === 'comparison' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <PlanComparison />
            </div>
          )}

          {activeTab === 'unicorn-benchmark' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <UnicornBenchmarking />
            </div>
          )}

          {activeTab === 'editor' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
              <LeftAiSidebar isOpen={isAiSidebarOpen} onToggle={() => setIsAiSidebarOpen(!isAiSidebarOpen)} />
              
              <div className="flex justify-end mb-8">
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
                  {saveStatus === 'saving' ? (
                      <span className="text-amber-500 animate-pulse">جاري المزامنة...</span>
                    ) : (
                      <span className="text-success flex items-center gap-1">
                        <ShieldCheck size={12} />
                        المستند محفوظ
                      </span>
                    )}
                </div>
              </div>

              <PlanHeader />

              <CollapsibleContainer title="الفصول الاستراتيجية" icon={GanttChartSquare} badge="6 فصول">
                <div className="mt-4 space-y-4">
                  {sections.map(section => (
                    <SectionEditor 
                      key={section.id} 
                      section={section} 
                      isOpen={expandedSectionId === section.id}
                      onToggle={() => setExpandedSectionId(expandedSectionId === section.id ? null : section.id)}
                      onUpdate={(id, content) => handleSectionUpdate(id, { content })}
                      onScoreUpdate={(id, updates) => handleSectionUpdate(id, updates)}
                    />
                  ))}
                </div>
              </CollapsibleContainer>

              <CollapsibleContainer title="الهوية البصرية" icon={Sparkles} badge="AI" defaultOpen={false}>
                <AiIdentityGenerator />
              </CollapsibleContainer>

              <CollapsibleContainer title="نموذج العمل التجاري" icon={LayoutGrid} defaultOpen={false}>
                <BusinessCanvas items={CANVAS_ITEMS} hideTitle />
              </CollapsibleContainer>

              <CollapsibleContainer title="الملفات والمرفقات" icon={Files} defaultOpen={false}>
                <FileUpload hideTitle />
              </CollapsibleContainer>

              <CollapsibleContainer title="نقاش الفريق" icon={MessageCircle} defaultOpen={false} badge={INITIAL_COMMENTS.length}>
                <Comments comments={INITIAL_COMMENTS} currentUser={MOCK_USER} hideTitle />
              </CollapsibleContainer>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Tasks />
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Analytics />
            </div>
          )}

          {activeTab === 'export-templates' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <ExportTemplates />
            </div>
          )}

          {activeTab === 'changelog' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Changelog />
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <PricingPlans />
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Notifications />
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Settings user={MOCK_USER} />
            </div>
          )}

          <footer className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 opacity-50">
             <button onClick={() => setActiveTab('home')} className="flex items-center gap-3 text-gray-400 hover:text-gray-900 font-bold text-xs uppercase tracking-widest transition-all">
                <ArrowLeft size={16} />
                العودة للرئيسية
             </button>
             <p className="text-[10px] font-bold text-gray-200 tracking-[0.3em] uppercase">KHOTTA AI 2025</p>
          </footer>
        </div>
      </main>

      <FloatingActions />
    </div>
  );
};

export default App;

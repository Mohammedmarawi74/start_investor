
import React, { memo, useState } from 'react';
import {
  ShieldPlus,
  Activity,
  Home, Layers, Rocket, Globe, Palette, ArrowRightLeft, FileText, Trello, BrainCircuit,
  FileCheck, Bell, CreditCard, Settings, LayoutDashboard, AreaChart, Users, Shield, LogOut,
  X, Zap, ChevronDown, Megaphone, TrendingUp, Award, Compass, Sprout, Waves, TreePine,
  FlaskConical, Flame, Mountain, Factory, Shirt, FileBox, Building2, HardHat, Heart,
  Utensils, Armchair, Flower2, Hammer, PawPrint, Gamepad2, Briefcase, ShoppingCart,
  Handshake, Hash, PlayCircle, Coffee, Landmark, Map, Sparkles, CloudSun, Cpu, Recycle, LineChart
} from 'lucide-react';

// ─── Data Configuration ───────────────────────────────────────────────────

const MARKET_DISCOVERY_DASHBOARDS = [
  'advertising-dashboard', 'brands-leaders-dashboard', 'marketing-dashboard', 'farming-dashboard',
  'fisheries-aquaculture-dashboard', 'forestry-dashboard', 'chemical-industry-dashboard',
  'fossil-fuels-dashboard', 'mining-dashboard', 'pulp-paper-dashboard',
  'plastic-rubber-dashboard', 'petroleum-refinery-dashboard', 'apparel-shoes-dashboard',
  'non-alcoholic-beverages-dashboard', 'economy-dashboard', 'building-construction-dashboard',
  'heavy-construction-dashboard', 'cleaning-products-dashboard', 'cosmetics-personal-care-dashboard',
  'food-nutrition-dashboard', 'furniture-household-dashboard', 'garden-patio-dashboard',
  'home-improvement-dashboard', 'pet-supplies-dashboard', 'toys-dashboard',
  'b2b-ecommerce-dashboard', 'b2c-ecommerce-dashboard', 'c2c-ecommerce-dashboard',
  'digital-shopping-behaviour-dashboard', 'ecommerce-key-figures-dashboard', 'paid-content-dashboard',
  'financial-services-dashboard', 'financial-institutions-dashboard', 'investments-dashboard', 'insurance-dashboard',
  'communications-dashboard', 'international-trade-dashboard', 'politics-dashboard', 'climate-dashboard'
];


// ─── Sub-components ────────────────────────────────────────────────────────

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick: () => void;
  badge?: number;
  isNew?: boolean;
  variant?: 'default' | 'ai' | 'danger' | 'active-project';
}

const NavItem = memo(({ icon: Icon, label, active, onClick, badge, isNew, variant = 'default' }: NavItemProps) => {
  const variants = {
    default: active ? 'bg-primary-600 text-white shadow-lg shadow-primary-200' : 'text-gray-600 hover:bg-gray-50',
    ai: active ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' : 'text-purple-600 hover:bg-purple-50',
    danger: 'text-red-500 hover:bg-red-50',
    'active-project': 'bg-primary-600 text-white shadow-lg shadow-primary-200'
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-[13px] font-bold transition-all touch-manipulation active:scale-[0.98] ${variants[variant]}`}
    >
      <Icon size={18} strokeWidth={active ? 2.5 : 2} className="flex-shrink-0" />
      <span className="flex-1 text-right truncate">{label}</span>
      {isNew && (
        <span className="bg-amber-400 text-amber-950 text-[8px] font-black px-1.5 py-0.5 rounded-lg animate-pulse">جديد</span>
      )}
      {badge && (
        <span className="bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">{badge}</span>
      )}
    </button>
  );
});

const NavGroup = memo(({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-4">
    <div className="px-4 mb-2 flex items-center justify-between">
      <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{title}</h3>
      <div className="h-[1px] flex-1 bg-gray-100 mr-3"></div>
    </div>
    <div className="space-y-1 px-2">
      {children}
    </div>
  </div>
));

// ─── Main Component ───────────────────────────────────────────────────────

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  setActiveTab: (tab: any) => void;
  isAdminMode: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, activeTab, setActiveTab, isAdminMode }) => {

  if (!isOpen) return null;

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[150] lg:hidden animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div className="fixed top-0 right-0 h-full w-[85vw] max-w-[320px] bg-white shadow-2xl z-[160] lg:hidden animate-in slide-in-from-right duration-300 flex flex-col">
        {/* Header */}
        <div className="p-5 bg-gradient-to-br from-primary-600 to-primary-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Zap size={20} />
            </div>
            <div>
              <h2 className="text-lg font-black">{isAdminMode ? 'واجهة الإدارة' : 'خطة'}</h2>
              <p className="text-[9px] font-bold opacity-80">{isAdminMode ? 'System Admin' : 'Business AI Platform'}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {isAdminMode ? (
            <>
              <NavGroup title="القلب النابض">
                <NavItem icon={LayoutDashboard} label="الصفحة الرئيسية" active={activeTab === 'admin-dashboard'} onClick={() => handleNavigate('admin-dashboard')} />
                <NavItem icon={AreaChart} label="تحليلات المنصة" active={activeTab === 'admin-analytics'} onClick={() => handleNavigate('admin-analytics')} />
              </NavGroup>
              <NavGroup title="إدارة النظام">
                <NavItem icon={Users} label="قاعدة المستخدمين" active={activeTab === 'users-management'} onClick={() => handleNavigate('users-management')} badge={248} />
                <NavItem icon={FileText} label="أرشيف الخطط" active={activeTab === 'admin-plans'} onClick={() => handleNavigate('admin-plans')} />
                <NavItem icon={Shield} label="بروتوكولات الأمان" active={activeTab === 'admin-security'} onClick={() => handleNavigate('admin-security')} />
              </NavGroup>
              <NavGroup title="النظام">
                <NavItem icon={LogOut} label="تسجيل الخروج Safe" variant="danger" onClick={() => handleNavigate('home')} />
              </NavGroup>
            </>
          ) : (
            <>
              <NavGroup title="القلب النابض">
                <NavItem icon={Home} label="الصفحة الرئيسية" active={activeTab === 'home'} onClick={() => handleNavigate('home')} />
                <NavItem icon={Layers} label="مشاريعي" active={activeTab === 'my-plans'} onClick={() => handleNavigate('my-plans')} />
                <NavItem icon={Rocket} label="خلق فكرة" active={activeTab === 'new-plan'} onClick={() => handleNavigate('new-plan')} />
                <NavItem icon={LayoutDashboard} label="خارطة المنصة" active={activeTab === 'site-map'} onClick={() => handleNavigate('site-map')} isNew />
              </NavGroup>

              <NavGroup title="مختبر الاستراتيجية">
                <NavItem icon={Globe} label="رادار اليونيكورن" active={activeTab === 'unicorn-benchmark'} onClick={() => handleNavigate('unicorn-benchmark')} isNew />
                
                <NavItem 
                  icon={Compass} 
                  label="استكشاف السوق" 
                  active={activeTab === 'market-discovery' || MARKET_DISCOVERY_DASHBOARDS.includes(activeTab)} 
                  onClick={() => handleNavigate('market-discovery')} 
                  isNew
                />

                <NavItem 
                  icon={Activity} 
                  label="المشاكل والفرص" 
                  active={activeTab === 'problem-engine'} 
                  onClick={() => handleNavigate('problem-engine')} 
                  isNew
                />


                <NavItem icon={Palette} label="استوديو الهوية" active={activeTab === 'brand-identity'} onClick={() => handleNavigate('brand-identity')} />
                <NavItem icon={ArrowRightLeft} label="مقارنة السيناريوهات" active={activeTab === 'comparison'} onClick={() => handleNavigate('comparison')} />
              </NavGroup>

              <NavGroup title="مركز العمليات">
                <NavItem icon={FileText} label="محرر الخطط" active={activeTab === 'editor'} onClick={() => handleNavigate('editor')} variant={activeTab === 'editor' ? 'active-project' : 'default'} />
                <NavItem icon={Trello} label="المهام والجدولة" active={activeTab === 'tasks'} onClick={() => handleNavigate('tasks')} badge={2} />
                <NavItem icon={BrainCircuit} label="المحلل الذكي (AI)" active={activeTab === 'smart-analyzer'} onClick={() => handleNavigate('smart-analyzer')} variant="ai" />
                <NavItem icon={FileCheck} label="قوالب التصدير" active={activeTab === 'export-templates'} onClick={() => handleNavigate('export-templates')} />
              </NavGroup>

              <NavGroup title="الإدارة والضبط">
                <NavItem icon={Bell} label="التنبيهات" active={activeTab === 'notifications'} onClick={() => handleNavigate('notifications')} badge={3} />
                <NavItem icon={CreditCard} label="الاشتراكات والأسعار" active={activeTab === 'pricing'} onClick={() => handleNavigate('pricing')} />
                <NavItem icon={Settings} label="إعدادات المنصة" active={activeTab === 'settings'} onClick={() => handleNavigate('settings')} />
              </NavGroup>

              <div className="mx-2 mt-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 border border-gray-200/50">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">الدعم الاستراتيجي</h4>
                <p className="text-[11px] font-bold text-gray-600 mb-3 leading-relaxed">تحتاج لخبرة استثمارية؟</p>
                <button className="w-full py-2.5 bg-white border border-gray-100 rounded-xl text-[11px] font-black text-gray-800 hover:bg-gray-900 hover:text-white transition-all">تحدث مع مستشار</button>
              </div>
            </>
          )}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={() => handleNavigate(isAdminMode ? 'home' : 'admin-dashboard')}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[11px] font-black transition-all ${
              isAdminMode
                ? 'bg-amber-500/10 border border-amber-500/20 text-amber-500 hover:bg-amber-500 hover:text-white'
                : 'bg-white border border-amber-200 text-amber-600 hover:bg-amber-50 hover:border-amber-400'
            }`}
          >
            {isAdminMode ? <LogOut size={16} /> : <Shield size={16} />}
            {isAdminMode ? 'العودة لواجهة المستخدم' : 'لوحة تحكم الآدمن'}
          </button>
          <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.3em] text-center mt-3">KHOTTA • ENGINE 2.5</p>
        </div>
      </div>
    </>
  );
};

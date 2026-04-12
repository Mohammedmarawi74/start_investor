
import React from 'react';
import { 
  Home, 
  Layers, 
  Plus, 
  BrainCircuit, 
  Trello 
} from 'lucide-react';

interface BottomNavBarProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'الرئيسية' },
    { id: 'my-plans', icon: Layers, label: 'مشاريعي' },
    { id: 'new-plan', icon: Plus, label: 'خلق فكرة', isCenter: true },
    { id: 'smart-analyzer', icon: BrainCircuit, label: 'المحلل' },
    { id: 'tasks', icon: Trello, label: 'المهام' },
  ];

  return (
    <div className="lg:hidden fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] sm:w-[92%] max-w-[400px] sm:max-w-[440px]">
      <div className="bg-white/90 backdrop-blur-2xl border border-white/60 rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;

          if (item.isCenter) {
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="relative -top-6 sm:-top-8 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-indigo-200 border-4 border-white active:scale-90 transition-transform group touch-manipulation"
                aria-label={item.label}
              >
                <item.icon size={24} className="group-hover:rotate-90 transition-transform duration-500 sm:w-7 sm:h-7" />
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 flex flex-col items-center justify-center gap-0.5 sm:gap-1 py-1.5 sm:py-2 px-1.5 sm:px-2 rounded-2xl transition-all min-h-[48px] touch-manipulation ${isActive ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
              aria-label={item.label}
            >
              <div className={`p-1.5 sm:p-2 transition-all ${isActive ? 'bg-indigo-50 rounded-xl' : ''}`}>
                <item.icon size={isActive ? 20 : 18} strokeWidth={isActive ? 2.5 : 2} className="w-5 h-5 sm:w-5 sm:h-5" />
              </div>
              <span className={`text-[8px] sm:text-[9px] font-black tracking-tight ${isActive ? 'opacity-100' : 'opacity-0 h-0'} transition-all`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

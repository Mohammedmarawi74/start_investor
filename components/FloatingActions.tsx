import React from 'react';
import { ArrowUp, Sparkles, Wand2 } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 left-8 flex flex-col gap-3 z-50">
      <button 
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-lg shadow-purple-200 hover:scale-110 transition-transform group flex items-center justify-center relative"
        title="المساعد الذكي"
      >
        <Wand2 size={24} />
        <span className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          المساعد الذكي
        </span>
      </button>

      <button 
        onClick={scrollToTop}
        className="bg-white text-gray-600 border border-gray-200 p-3 rounded-full shadow-sm hover:shadow-md hover:text-primary-600 transition-all"
        title="أعلى الصفحة"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

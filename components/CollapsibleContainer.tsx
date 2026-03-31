
import React, { useState } from 'react';
import { ChevronDown, LucideIcon } from 'lucide-react';

interface CollapsibleContainerProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  defaultOpen?: boolean;
  badge?: string | number;
}

export const CollapsibleContainer: React.FC<CollapsibleContainerProps> = ({ 
  title, 
  icon: Icon, 
  children, 
  defaultOpen = true,
  badge
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`bg-white rounded-[2rem] border transition-all duration-500 mb-6 overflow-hidden ${
      isOpen ? 'border-primary-100 shadow-xl shadow-gray-200/40' : 'border-gray-100 shadow-sm hover:border-gray-200'
    }`}>
      {/* Header */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-6 cursor-pointer select-none bg-white"
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-2xl transition-all duration-300 ${
            isOpen ? 'bg-primary-600 text-white shadow-lg shadow-primary-200 rotate-0' : 'bg-gray-50 text-gray-400 rotate-0'
          }`}>
            <Icon size={22} strokeWidth={2.5} />
          </div>
          <div>
            <h2 className={`text-lg font-black transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-500'}`}>
              {title}
            </h2>
            {!isOpen && badge && (
              <span className="text-[10px] font-bold text-primary-500 bg-primary-50 px-2 py-0.5 rounded-full mt-1 inline-block">
                {badge}
              </span>
            )}
          </div>
        </div>

        <div className={`p-2 rounded-xl transition-all duration-300 ${
          isOpen ? 'bg-primary-50 text-primary-600 rotate-180' : 'text-gray-300'
        }`}>
          <ChevronDown size={20} strokeWidth={3} />
        </div>
      </div>

      {/* Content */}
      <div className={`transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[2000px] opacity-100 pb-8 px-8' : 'max-h-0 opacity-0'
      }`}>
        <div className="h-px bg-gradient-to-l from-transparent via-gray-100 to-transparent mb-8"></div>
        {children}
      </div>
    </div>
  );
};

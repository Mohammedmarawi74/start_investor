
import React from 'react';
import { Users, Briefcase, HeartHandshake, Coins, Wallet } from 'lucide-react';
import { BusinessModelItem } from '../types';

interface BusinessCanvasProps {
  items: BusinessModelItem[];
  hideTitle?: boolean;
}

export const BusinessCanvas: React.FC<BusinessCanvasProps> = ({ items, hideTitle = false }) => {
  const getIcon = (category: string) => {
    switch(category) {
      case 'users': return Users;
      case 'partners': return Briefcase;
      case 'value': return HeartHandshake;
      case 'cost': return Wallet;
      case 'revenue': return Coins;
      default: return Briefcase;
    }
  };

  const getColor = (category: string) => {
     switch(category) {
      case 'users': return 'text-blue-500 bg-blue-50 border-blue-100';
      case 'partners': return 'text-purple-500 bg-purple-50 border-purple-100';
      case 'value': return 'text-pink-500 bg-pink-50 border-pink-100';
      case 'cost': return 'text-orange-500 bg-orange-50 border-orange-100';
      case 'revenue': return 'text-green-500 bg-green-50 border-green-100';
      default: return 'text-gray-500 bg-gray-50 border-gray-100';
    }
  };

  return (
    <div className={hideTitle ? '' : 'my-12'}>
      {!hideTitle && (
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-primary-600 rounded-full"></span>
          نموذج العمل التجاري
        </h2>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {items.map((item) => {
          const Icon = getIcon(item.category);
          const colorClass = getColor(item.category);
          
          return (
            <div key={item.id} className="bg-white rounded-[1.5rem] border border-gray-100 p-5 flex flex-col h-full hover:shadow-lg hover:border-primary-100 transition-all group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm ${colorClass}`}>
                <Icon size={20} strokeWidth={2.5} />
              </div>
              
              <h4 className="font-bold text-gray-800 mb-2 text-sm">{item.title}</h4>
              
              <div className="flex-1">
                {item.content ? (
                   <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.content}</p>
                ) : (
                   <div className="border-2 border-dashed border-gray-50 rounded-xl p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors h-full flex items-center justify-center">
                      <span className="text-[10px] font-bold text-gray-300 group-hover:text-primary-500 uppercase tracking-wider">
                        + أضف بيانات
                      </span>
                   </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

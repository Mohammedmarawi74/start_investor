import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Activity, Globe } from 'lucide-react';
import { CountryList } from './SubComponents';

interface MinimalistCardProps {
  problem: any;
  onNavigate: () => void;
}

export const MinimalistCard: React.FC<MinimalistCardProps> = ({ problem, onNavigate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="bg-white rounded-[3rem] border border-slate-100 shadow-[0_15px_50px_-20px_rgba(0,0,0,0.02)] hover:shadow-[0_45px_100px_-30px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col group overflow-hidden h-full relative"
    >
      {/* Decorative Gradient Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-50/40 blur-[120px] rounded-full group-hover:bg-indigo-100/40 transition-colors duration-700" />

      {/* Top Bar: Strategic Context */}
      <div className="px-10 pt-10 pb-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-5">
           <div className="flex items-center gap-2 group/cat">
              <Activity size={14} className="text-slate-400 group-hover/cat:text-indigo-500 transition-colors" />
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none">قطاع {problem.sectorName}</span>
           </div>
        </div>
        <div className="flex items-center gap-3">
           <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest hidden sm:block">الانتشار الجغرافي:</span>
           <div className="p-1 bg-white border border-slate-50 rounded-full shadow-sm">
              <CountryList countryIds={problem.countries} />
           </div>
        </div>
      </div>

      {/* Main Content & Insights Section */}
      <div className="flex flex-col lg:flex-row gap-12 px-10 pb-8 relative z-10 flex-1">
        
        {/* Left: Core Intelligence */}
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-[1.15] group-hover:text-indigo-600 transition-colors duration-500">
              {problem.title}
            </h3>
            <p className="text-[15px] font-medium text-slate-500 leading-relaxed max-w-xl">
              {problem.desc}
            </p>
          </div>

        </div>

      </div>

      {/* Footer: Action */}
      <div className="px-10 py-10 mt-auto border-t border-slate-100 bg-slate-50/30 group-hover:bg-white transition-colors duration-500 flex items-center justify-center">
         <button 
           onClick={onNavigate}
           className="group/btn relative h-12 px-10 bg-slate-900 text-white rounded-2xl flex items-center gap-4 hover:bg-indigo-600 transition-all duration-500 shadow-xl overflow-hidden shrink-0"
         >
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
           <span className="text-[12px] font-black uppercase tracking-widest relative z-10">استكشاف الفرصة الكاملة</span>
           <ArrowLeft size={16} className="relative z-10 group-hover/btn:-translate-x-1 transition-transform" />
         </button>
      </div>
    </motion.div>
  );
};

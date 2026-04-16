import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, AlertCircle, Sparkles, ArrowLeft } from 'lucide-react';
import { COUNTRIES } from './constants';
import { Problem } from './types';

interface CommandCenterProps {
  isCommandOpen: boolean;
  setIsCommandOpen: (v: boolean) => void;
  cmdQuery: string;
  setCmdQuery: (v: string) => void;
  commandInputRef: React.RefObject<HTMLInputElement>;
  cmdResults: any[];
  goToOpportunity: (p: Problem, view: string) => void;
}

export const CommandCenter: React.FC<CommandCenterProps> = ({
  isCommandOpen,
  setIsCommandOpen,
  cmdQuery,
  setCmdQuery,
  commandInputRef,
  cmdResults,
  goToOpportunity
}) => {
  return (
    <AnimatePresence>
       {isCommandOpen && (
         <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[8vh] sm:pt-[12vh] px-4">
            {/* Light Glass Backdrop */}
            <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
               className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
               onClick={() => setIsCommandOpen(false)}
            />
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -20 }} transition={{ duration: 0.2 }}
               className="relative w-full max-w-3xl bg-slate-900 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden border border-slate-800 font-tajawal"
               dir="rtl"
            >
               {/* Input Area */}
               <div className="flex items-center px-6 py-5 border-b border-slate-800 bg-slate-900/50">
                  <Search size={28} className="text-indigo-400 shrink-0" strokeWidth={2.5} />
                  <input 
                    ref={commandInputRef}
                    value={cmdQuery}
                    onChange={e => setCmdQuery(e.target.value)}
                    placeholder="استكشف أي فرصة معمقة، قطاع، أو دولة..."
                    className="flex-1 bg-transparent border-none outline-none px-5 text-xl sm:text-2xl font-black text-white placeholder-slate-500"
                  />
                  <button onClick={() => setIsCommandOpen(false)} className="text-slate-500 hover:text-white transition-colors shrink-0 bg-slate-800 p-2 rounded-xl border border-slate-700">
                     <kbd className="text-[10px] font-bold font-sans">ESC</kbd>
                  </button>
               </div>

               {/* Results Area */}
               <div className="max-h-[60vh] overflow-y-auto no-scrollbar bg-slate-900 p-3 sm:p-4">
                  {cmdResults.length === 0 && cmdQuery && (
                    <div className="py-16 text-center">
                       <AlertCircle size={40} className="mx-auto mb-4 text-slate-700" />
                       <div className="text-slate-500 text-sm font-bold">لا توجد نتائج مطابقة، جرب كلمات أو فلاتر أبسط.</div>
                    </div>
                  )}
                  {cmdResults.length === 0 && !cmdQuery && (
                     <div className="py-14 sm:py-20 text-center">
                         <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-slate-700">
                            <Sparkles size={32} className="text-indigo-400" />
                         </div>
                         <h4 className="text-lg font-black text-white mb-2">البحث الاستخباراتي السريع</h4>
                         <p className="text-sm font-medium text-slate-400 max-w-md mx-auto leading-relaxed">
                            اكتب أي كلمات للبحث المتقاطع فوراً.<br/>
                            <span className="font-bold text-indigo-400">أمثلة سريعة: </span>
                            (الصحة B2B)، (السعودية منخفضة التكلفة)، أو (تقنيات التعليم).
                         </p>
                     </div>
                  )}
                  
                  {cmdResults.length > 0 && (
                     <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-3 mb-2 mt-1">أبرز الثغرات الاستثمارية المرتبطة</div>
                  )}

                  <div className="flex flex-col gap-2">
                    {cmdResults.map(p => (
                       <button 
                         key={p.id}
                         onClick={() => {
                            goToOpportunity(p, 'problems');
                            setIsCommandOpen(false);
                            setCmdQuery('');
                         }}
                         className="w-full text-right p-4 sm:p-5 hover:bg-slate-800/50 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group transition-all border border-transparent hover:border-slate-700"
                       >
                         <div className="flex-1 w-full">
                            <div className="flex flex-wrap items-center gap-2.5 mb-2">
                               <span className={`text-[9px] px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-black`}>{p.sectorName}</span>
                               <span className="text-[9px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 font-black border border-slate-700">{p.b2x}</span>
                               <div className="flex -space-x-1 rtl:space-x-reverse ml-2">
                                   {p.countries.map((cx: string) => (
                                     <div key={cx} className="w-5 h-5 rounded-full bg-slate-800 flex justify-center items-center text-[9px] border border-slate-900 shadow-sm">{COUNTRIES.find((ccc: any) => ccc.id === cx)?.flag || '🌍'}</div>
                                   ))}
                               </div>
                            </div>
                            <h4 className="text-sm sm:text-lg font-black text-white group-hover:text-indigo-400 transition-colors mb-1.5 leading-snug">{p.title}</h4>
                            <p className="text-xs text-slate-500 line-clamp-1 truncate max-w-2xl">{p.desc}</p>
                         </div>
                         <div className="hidden sm:flex items-center gap-4 border-r border-slate-800 pr-5">
                            <div className="flex flex-col items-center">
                               <span className="text-[9px] text-amber-500/50 font-black mb-1">الفجوة</span>
                               <span className="text-sm text-amber-500 font-black">{p.gap}</span>
                            </div>
                            <ArrowLeft size={20} className="text-slate-600 group-hover:text-indigo-400 group-hover:-translate-x-1.5 transition-all outline-none" />
                         </div>
                       </button>
                    ))}
                  </div>

               </div>
            </motion.div>
         </div>
       )}
    </AnimatePresence>
  );
};

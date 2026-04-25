import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, ChevronLeft, Target, AlertCircle, ArrowLeft, ChevronDown, Globe } from 'lucide-react';
import { Sector, SubSector, Problem } from '../types';
import { ScoreBadge, getPainTag, CountryTag, CountryList } from '../SubComponents';
import { MinimalistCard } from '../MinimalistCard';
import { COUNTRIES } from '../constants.tsx';

interface SectorsViewProps {
  view: string;
  filteredData: Sector[];
  selectedSector: Sector | null;
  selectedSub: SubSector | null;
  selectedCountry: string;
  setSelectedCountry: (c: string) => void;
  setSelectedSector: (s: Sector | null) => void;
  setSelectedSub: (s: SubSector | null) => void;
  setView: (v: any) => void;
  goToProblems: (sub: SubSector) => void;
  goToOpportunity: (prob: Problem, fromView: any) => void;
}

export const SectorsView: React.FC<SectorsViewProps> = ({
  view,
  filteredData,
  selectedSector,
  selectedSub,
  selectedCountry,
  setSelectedCountry,
  setSelectedSector,
  setSelectedSub,
  setView,
  goToProblems,
  goToOpportunity
}) => {
  const currentCountry = COUNTRIES.find(c => c.id === selectedCountry);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-6">
      {/* ─── Premium Light Country Selector (Gentle Dropdown) ─── */}
      {view === 'sectors' && (
        <div className="relative w-fit" ref={dropdownRef}>
           <button 
             onClick={() => setIsCountryOpen(!isCountryOpen)}
             className={`flex items-center gap-3 px-4 py-2.5 bg-white border rounded-2xl transition-all shadow-sm group/btn ${isCountryOpen ? 'border-indigo-400 ring-4 ring-indigo-50' : 'border-slate-100 hover:border-indigo-200'}`}
           >
              <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-xl border border-slate-50 shadow-inner">
                 {currentCountry?.flag || <Globe size={18} className="text-indigo-400" />}
              </div>
              <div className="text-right">
                 <p className="text-[9px] font-black text-slate-300 uppercase leading-none mb-1 tracking-widest">المجال الجغرافي</p>
                 <p className="text-xs font-black text-slate-700 leading-none flex items-center gap-2">
                    {currentCountry?.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${isCountryOpen ? 'rotate-180 text-indigo-500' : 'text-slate-300'}`} />
                 </p>
              </div>
           </button>

           {/* Gentle Floating Menu */}
           <AnimatePresence>
             {isCountryOpen && (
               <motion.div 
                 initial={{ opacity: 0, y: 10, scale: 0.95 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, y: 10, scale: 0.95 }}
                 className="absolute top-full right-0 mt-2 w-64 bg-white rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-slate-100 z-[100] p-3 overflow-hidden"
               >
                  <div className="max-h-[350px] overflow-y-auto no-scrollbar space-y-1">
                     <p className="px-4 py-2 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">اختر النطاق</p>
                     {COUNTRIES.map(c => (
                        <button 
                          key={c.id} 
                          onClick={() => {
                            setSelectedCountry(c.id);
                            setIsCountryOpen(false);
                          }} 
                          className={`w-full text-right flex items-center gap-3 p-3 rounded-2xl transition-all ${
                            selectedCountry === c.id 
                            ? 'bg-indigo-50 text-indigo-700 shadow-sm' 
                            : 'hover:bg-slate-50 text-slate-500 hover:text-slate-900'
                          }`}
                        >
                           <span className={`text-xl w-8 h-8 rounded-lg flex items-center justify-center bg-white border transition-colors ${selectedCountry === c.id ? 'border-indigo-200 shadow-sm' : 'border-slate-50 hover:border-slate-200'}`}>{c.flag}</span>
                           <span className="text-xs font-black flex-1">{c.name}</span>
                           {selectedCountry === c.id && <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-lg shadow-indigo-200" />}
                        </button>
                     ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-50 text-center">
                     <p className="text-[9px] font-bold text-slate-300 italic">ذكاء استثمارية موثق عالمياً</p>
                  </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      )}


      {/* ─── Navigation Header (Breadcrumbs) ─── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
         {/* Breadcrumbs */}
         <div className="flex items-center gap-2 text-xs font-bold text-slate-400 overflow-x-auto no-scrollbar py-2">
            <button onClick={() => { setView('sectors'); setSelectedSector(null); setSelectedSub(null); }} className="hover:text-indigo-600 transition-colors shrink-0">القطاعات الرئيسية</button>
            {selectedSector && (
               <>
                  <ChevronLeft size={12} className="shrink-0" />
                  <button onClick={() => { setView('subs'); setSelectedSub(null); }} className={`hover:text-indigo-600 transition-colors shrink-0 ${!selectedSub ? 'text-indigo-600' : ''}`}>{selectedSector.name}</button>
               </>
            )}
            {selectedSub && (
               <>
                  <ChevronLeft size={12} className="shrink-0" />
                  <span className="text-indigo-600 shrink-0">{selectedSub.name}</span>
               </>
            )}
         </div>
      </div>

      <AnimatePresence mode="wait">
        {view === 'sectors' && (
          <motion.div key="sectors" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredData.map(sector => (
              <button key={sector.id} onClick={() => { setSelectedSector(sector); setView('subs'); }}
                className="group bg-white p-6 rounded-[2rem] border border-slate-100 hover:border-indigo-200 shadow-sm hover:shadow-xl transition-all text-right flex flex-col items-center sm:items-start"
              >
                <div className={`w-12 h-12 rounded-xl bg-${sector.color}-50 text-${sector.color}-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-all border border-${sector.color}-100`}><sector.icon size={24} /></div>
                <h3 className="text-lg font-black text-slate-900 mb-1 leading-tight">{sector.name}</h3>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-lg">{sector.count} ألم مسجل</span>
              </button>
            ))}
          </motion.div>
        )}

        {view === 'subs' && selectedSector && (
          <motion.div key="subs" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedSector.subs.map(sub => (
              <button key={sub.id} onClick={() => goToProblems(sub)} className="group bg-white p-6 rounded-[1.5rem] border border-slate-100 hover:border-indigo-200 shadow-sm transition-all flex items-center gap-4 text-right">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100"><Target size={20} /></div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2"><span className="px-2 py-0.5 rounded-md text-[8px] font-black bg-indigo-50 text-indigo-600 border border-indigo-100">#ثغرة_معلنة</span></div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug">{sub.name}</h3>
                  <p className="text-[9px] font-bold text-slate-400">{sub.count} فجوة مكتشفة</p>
                </div>
                <ChevronLeft size={16} className="text-slate-200" />
              </button>
            ))}
          </motion.div>
        )}

        {view === 'problems' && selectedSub && (
          <motion.div key="problems" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {selectedSub.problems.map(problem => (
              <MinimalistCard 
                key={problem.id} 
                problem={{...problem, sectorName: selectedSub.name}} 
                onNavigate={() => goToOpportunity(problem, 'problems')} 
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

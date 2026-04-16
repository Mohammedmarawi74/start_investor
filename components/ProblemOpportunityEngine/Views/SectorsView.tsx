import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, ChevronLeft, Target, AlertCircle, ArrowLeft } from 'lucide-react';
import { Sector, SubSector, Problem } from '../types';
import { ScoreBadge, getPainTag, CountryTag } from '../SubComponents';
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

  return (
    <div className="space-y-6">
      {/* ─── Navigation Header (Dropdown + Breadcrumbs) ─── */}
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

         {/* Conditional Country Dropdown - Only on Main Sectors View */}
         {view === 'sectors' && (
           <div className="relative group shrink-0 w-full md:w-auto">
              <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-slate-100 shadow-sm cursor-pointer hover:border-indigo-200 transition-all">
                 <span className="text-xl">{currentCountry?.flag}</span>
                 <div className="text-right">
                    <p className="text-[9px] font-black text-slate-400 uppercase leading-none mb-1">تصفية حسب الدولة:</p>
                    <p className="text-xs font-black text-slate-900 leading-none">{currentCountry?.name}</p>
                 </div>
                 <ChevronLeft size={14} className="-rotate-90 text-slate-300 mr-4" />
              </div>
              
              <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2 max-h-[300px] overflow-y-auto no-scrollbar">
                 {COUNTRIES.map(c => (
                    <button key={c.id} onClick={() => setSelectedCountry(c.id)} className={`w-full text-right flex items-center gap-3 p-3 rounded-xl transition-all ${selectedCountry === c.id ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-slate-50 text-slate-600'}`}>
                       <span className="text-xl">{c.flag}</span>
                       <span className="text-sm font-black">{c.name}</span>
                    </button>
                 ))}
              </div>
           </div>
         )}
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
          <motion.div key="problems" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {selectedSub.problems.map(problem => (
              <div key={problem.id} className="bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden flex flex-col">
                <div className="flex flex-col lg:flex-row gap-6 flex-1">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-md text-[9px] font-black bg-indigo-50 text-indigo-600 border border-indigo-100">#{selectedSub.name}</span>
                      <span className={`px-2 py-0.5 rounded-md text-[9px] font-black border ${getPainTag(problem.pain).class}`}>#{getPainTag(problem.pain).label}</span>
                      <span className="px-2 py-0.5 rounded-md text-[9px] font-black bg-slate-100 text-slate-500 border border-slate-200">#{problem.b2x}</span>
                      {problem.countries.map(cId => <CountryTag key={cId} countryId={cId} />)}
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-3">{problem.title}</h3>
                    <p className="text-xs font-medium text-slate-500 mb-6">{problem.desc}</p>
                    <button onClick={() => goToOpportunity(problem, 'problems')} className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-[10px] font-black hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"><span>استكشف بيانات الفرصـة</span> <ArrowLeft size={14} /></button>
                  </div>
                  <div className="w-full lg:w-[150px] space-y-3 p-4 bg-slate-50 rounded-xl">
                    <ScoreBadge label="شدة الألم" score={problem.pain} colorClass="text-rose-500" />
                    <ScoreBadge label="الربحية" score={problem.money} colorClass="text-emerald-500" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

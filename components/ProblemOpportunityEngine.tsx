import React, { useState, useMemo, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Activity, LayoutGrid, Building2, Wallet, Globe, Search, Sparkles, ChevronDown, ArrowLeft } from 'lucide-react';

// Modules
import { Sector, SubSector, Problem } from './ProblemOpportunityEngine/types';
import { DATA, COUNTRIES, BUDGET_TIERS } from './ProblemOpportunityEngine/constants.tsx';
import { OpportunityDetail } from './ProblemOpportunityEngine/OpportunityDetail';

// Views
import { SectorsView } from './ProblemOpportunityEngine/Views/SectorsView';
import { BudgetView } from './ProblemOpportunityEngine/Views/BudgetView';
import { MarketsView } from './ProblemOpportunityEngine/Views/MarketsView';
import { B2XView } from './ProblemOpportunityEngine/Views/B2XView';

export const ProblemOpportunityEngine: React.FC = () => {
  // Navigation State
  const [exploreMode, setExploreMode] = useState<'sectors' | 'budget' | 'markets' | 'b2x'>('sectors');
  const [view, setView] = useState<any>('sectors');
  const [lastView, setLastView] = useState<any>('problems');

  // Selection State
  const [selectedCountry, setSelectedCountry] = useState('ALL');
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
  const [selectedSub, setSelectedSub] = useState<SubSector | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedB2X, setSelectedB2X] = useState<string | null>(null);
  const [selectedContinent, setSelectedContinent] = useState('middle_east');
  const [selectedMarket, setSelectedMarket] = useState<string | null>(null);

  // Filter & Search State
  const [marketSearchTerm, setMarketSearchTerm] = useState('');
  const [currentMarketPage, setCurrentMarketPage] = useState(1);
  const [cmdQuery, setCmdQuery] = useState('');
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const commandInputRef = useRef<HTMLInputElement>(null);

  const ITEMS_PER_PAGE = 5;

  // ─── Effects ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isCommandOpen) setTimeout(() => commandInputRef.current?.focus(), 100);
  }, [isCommandOpen]);

  // ─── Memoized Data ────────────────────────────────────────────────────────
  const allProblemsFlattened = useMemo(() => {
    const all: any[] = [];
    DATA.forEach(sec => sec.subs.forEach(sub => sub.problems.forEach(p => {
      const pCountriesNames = p.countries.map(cId => COUNTRIES.find(c => c.id === cId)?.name || '');
      const searchString = `${p.title} ${p.desc} ${sec.name} ${sub.name} ${pCountriesNames.join(' ')} ${p.b2x}`.toLowerCase();
      all.push({ ...p, sectorName: sec.name, sectorColor: sec.color, searchString });
    })));
    return all;
  }, []);

  const cmdResults = useMemo(() => {
    if (!cmdQuery.trim()) return [];
    const terms = cmdQuery.toLowerCase().split(' ').filter(c => c);
    return allProblemsFlattened.filter(p => terms.every(term => p.searchString.includes(term))).slice(0, 6);
  }, [cmdQuery, allProblemsFlattened]);

  const filteredData = useMemo(() => {
    return DATA.map(sector => {
      const filteredSubs = sector.subs.map(sub => {
        const filteredProblems = sub.problems.filter(p => selectedCountry === 'ALL' || p.countries.includes(selectedCountry) || p.countries.includes('ALL'));
        return { ...sub, problems: filteredProblems, count: filteredProblems.length };
      }).filter(s => s.problems.length > 0);
      return { ...sector, subs: filteredSubs, count: filteredSubs.reduce((a, b) => a + b.count, 0) };
    }).filter(s => s.subs.length > 0);
  }, [selectedCountry]);

  // ─── Handlers ─────────────────────────────────────────────────────────────
  const goToProblems = (sub: SubSector) => { setSelectedSub(sub); setView('problems'); setLastView('problems'); };
  const goToOpportunity = (prob: Problem, fromView: any) => { setSelectedProblem(prob); setView('opportunity'); setLastView(fromView); };

  // ─── Rendering ────────────────────────────────────────────────────────────
  return (
    <div className="w-full min-h-screen bg-slate-50 font-tajawal text-right p-4 sm:p-6 lg:p-10" dir="rtl">
      {/* ─── Global Header ─── */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black mb-4 border border-indigo-100">
          <Activity size={14} /> <span>بوابة استخبارات استثمارية عالمية</span>
        </motion.div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">محرك ذكاء الفرص والمشكلات</h1>
        <p className="text-slate-500 text-sm sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-8">استكشف الفجوات السوقية الموثقة عالمياً بمعايير استثمارية دقيقة.</p>
        
        {/* ─── Production-Ready Inline Contextual Search ─── */}
        <div className="max-w-2xl mx-auto mb-10 px-4 relative z-50">
           <div 
             className={`bg-white border transition-all duration-500 overflow-hidden ${
               isCommandOpen 
               ? 'rounded-[2rem] border-indigo-200 shadow-[0_30px_100px_-20px_rgba(79,70,229,0.15)]' 
               : 'rounded-[1.5rem] border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-xl hover:shadow-indigo-50/50'
             }`}
           >
              {/* Input Area */}
              <div className="py-4 px-6 flex items-center justify-between group">
                 <div className="flex items-center gap-4 flex-1">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isCommandOpen ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                    }`}>
                       <Search size={22} />
                    </div>
                    <div className="flex-1 text-right">
                       <input 
                         ref={commandInputRef}
                         type="text"
                         value={cmdQuery}
                         onChange={(e) => {
                           setCmdQuery(e.target.value);
                           if (!isCommandOpen) setIsCommandOpen(true);
                         }}
                         onFocus={() => setIsCommandOpen(true)}
                         placeholder="ابحث بالدولة، القطاع، أو الميزانية..."
                         className="w-full bg-transparent border-none outline-none text-sm font-black text-slate-900 placeholder:text-slate-300 placeholder:font-bold"
                       />
                       {!isCommandOpen && <p className="text-[10px] font-bold text-slate-300 leading-none mt-1">استخدم رادار البحث الاستخباراتي</p>}
                    </div>
                 </div>
                 <div className="flex items-center gap-2">
                    {isCommandOpen ? (
                      <button 
                        onClick={(e) => { e.stopPropagation(); setIsCommandOpen(false); setCmdQuery(''); }}
                        className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400"
                      >
                         <ChevronDown size={18} />
                      </button>
                    ) : (
                      <>
                        <kbd className="hidden sm:inline-flex px-2 py-1 bg-slate-50 border border-slate-200 rounded-md text-[10px] font-bold text-slate-400 font-sans">CTRL K</kbd>
                        <Sparkles size={18} className="text-indigo-200 group-hover:text-indigo-400 transition-colors" />
                      </>
                    )}
                  </div>
              </div>

              {/* Inline Results Dropdown */}
              <AnimatePresence>
                {isCommandOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-100 overflow-hidden"
                  >
                    <div className="max-h-[450px] overflow-y-auto no-scrollbar p-2">
                      {cmdQuery.trim() === '' ? (
                        <div className="p-8 text-center space-y-4">
                           <div className="text-[11px] font-black text-slate-300 uppercase tracking-widest">مقترحات البحث الذكي</div>
                           <div className="flex flex-wrap justify-center gap-2">
                              {['تحليل مالي', 'النمو المستدام', 'السوق السعودي', 'Healthcare'].map(tag => (
                                <button key={tag} onClick={() => setCmdQuery(tag)} className="px-4 py-2 bg-slate-50 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 rounded-xl text-xs font-black transition-all">#{tag}</button>
                              ))}
                           </div>
                        </div>
                      ) : cmdResults.length === 0 ? (
                        <div className="p-10 text-center text-slate-400 font-bold text-xs">
                           لا توجد نتائج مطابقة لـ "{cmdQuery}"
                        </div>
                      ) : (
                        <div className="p-2 space-y-1">
                           {cmdResults.map((result, idx) => (
                             <button 
                               key={idx}
                               onClick={() => {
                                 goToOpportunity(result, 'search');
                                 setIsCommandOpen(false);
                               }}
                               className="w-full flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl hover:bg-indigo-50/50 group transition-all text-right border border-transparent hover:border-indigo-100"
                             >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-indigo-500 shrink-0 group-hover:scale-110 transition-transform mt-0.5 sm:mt-0">
                                   <Globe size={18} />
                                </div>
                                <div className="flex-1 min-w-0">
                                   <h4 className="text-[13px] sm:text-sm font-black text-slate-800 line-clamp-2 sm:line-clamp-1 group-hover:text-indigo-600 leading-tight mb-1">{result.title}</h4>
                                   <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                      <span className="text-[8px] sm:text-[9px] font-black text-indigo-500 uppercase tracking-widest whitespace-nowrap">قطاع {result.sectorName}</span>
                                      <span className="hidden sm:inline text-[9px] font-bold text-slate-300">•</span>
                                      <span className="text-[10px] font-bold text-slate-400 line-clamp-1 sm:truncate">{result.desc}</span>
                                   </div>
                                </div>
                                <ArrowLeft size={16} className="text-slate-200 group-hover:text-indigo-500 group-hover:-translate-x-1 transition-all shrink-0 mt-1 sm:mt-0" />
                             </button>
                           ))}
                        </div>
                      )}
                    </div>
                    {/* Bottom Action Bar */}
                    <div className="p-4 bg-slate-50/50 border-t border-slate-50 flex justify-center mt-2">
                       <button onClick={() => setIsCommandOpen(false)} className="text-[10px] font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">إغلاق رادار البحث</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
           </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-white rounded-3xl shadow-xl border border-slate-100 w-fit mx-auto scale-90 sm:scale-100">
          {[
            { id: 'sectors', label: 'القطاعات', icon: LayoutGrid, startView: 'sectors' },
            { id: 'b2x', label: 'نموذج العمل', icon: Building2, startView: 'b2x_gateway' },
            { id: 'budget', label: 'الميزانية', icon: Wallet, startView: 'budget_tiers' },
            { id: 'markets', label: 'الأسواق', icon: Globe, startView: 'continents_gateway' },
          ].map(m => (
            <button key={m.id} onClick={() => { setExploreMode(m.id as any); setView(m.startView); }}
              className={`flex items-center gap-2 px-4 py-3 sm:py-4 rounded-2xl text-xs sm:text-sm font-black transition-all ${exploreMode === m.id ? 'bg-slate-900 text-white shadow-xl scale-105' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <m.icon size={18} /> <span>{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ─── Content Area ─── */}
      <div className="max-w-7xl mx-auto pb-20">
        <AnimatePresence mode="wait">
          {exploreMode === 'sectors' && (
            <SectorsView 
              view={view} 
              filteredData={filteredData} 
              selectedSector={selectedSector} 
              selectedSub={selectedSub}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              setSelectedSector={setSelectedSector} 
              setSelectedSub={setSelectedSub}
              setView={setView} 
              goToProblems={goToProblems} 
              goToOpportunity={goToOpportunity}
            />
          )}

          {exploreMode === 'budget' && (
            <BudgetView 
              view={view} selectedBudget={selectedBudget} setView={setView} setSelectedBudget={setSelectedBudget} goToOpportunity={goToOpportunity}
            />
          )}

          {exploreMode === 'markets' && (
            <MarketsView 
              view={view} selectedContinent={selectedContinent} selectedMarket={selectedMarket} marketSearchTerm={marketSearchTerm} currentMarketPage={currentMarketPage} ITEMS_PER_PAGE={ITEMS_PER_PAGE}
              setView={setView} setSelectedContinent={setSelectedContinent} setSelectedMarket={setSelectedMarket} setMarketSearchTerm={setMarketSearchTerm} setCurrentMarketPage={setCurrentMarketPage} goToOpportunity={goToOpportunity}
            />
          )}

          {exploreMode === 'b2x' && (
            <B2XView 
              view={view} selectedB2X={selectedB2X} setView={setView} setSelectedB2X={setSelectedB2X} goToOpportunity={goToOpportunity}
            />
          )}

          {view === 'opportunity' && selectedProblem && (
            <OpportunityDetail 
              selectedProblem={selectedProblem} selectedSector={selectedSector} selectedSub={selectedSub}
              lastView={lastView} setView={setView} goToProblems={goToProblems}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

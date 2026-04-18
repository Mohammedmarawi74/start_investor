import React, { useState, useMemo, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Activity, LayoutGrid, Building2, Wallet, Globe, Search, Sparkles, ChevronDown, ArrowLeft } from 'lucide-react';

// Modules
import { Sector, SubSector, Problem } from './ProblemOpportunityEngine/types';
import { DATA, COUNTRIES } from './ProblemOpportunityEngine/constants.tsx';
import { OpportunityDetail } from './ProblemOpportunityEngine/OpportunityDetail';

// Views
import { SectorsView } from './ProblemOpportunityEngine/Views/SectorsView';
import { BudgetView } from './ProblemOpportunityEngine/Views/BudgetView';
import { MarketsView } from './ProblemOpportunityEngine/Views/MarketsView';
import { B2XView } from './ProblemOpportunityEngine/Views/B2XView';

export const ProblemOpportunityEngine: React.FC = () => {
  // Navigation & Control State
  const [exploreMode, setExploreMode] = useState<'sectors' | 'budget' | 'markets' | 'b2x' | 'search_results'>('sectors');
  const [activeView, setActiveView] = useState<string>('sectors');
  const [lastView, setLastView] = useState<string>('problems');
  const [searchContext, setSearchContext] = useState<{ query: string; results: any[] }>({ query: '', results: [] });

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
    const handlePopState = (e: PopStateEvent) => {
      if (e.state && e.state.mode) {
        setExploreMode(e.state.mode);
        if (e.state.activeView) setActiveView(e.state.activeView);
        if (e.state.searchQuery) setCmdQuery(e.state.searchQuery);
      } else {
        setExploreMode('sectors');
        setActiveView('sectors');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
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
  const goToProblems = (sub: SubSector) => { setSelectedSub(sub); setActiveView('problems'); setLastView('problems'); };
  const goToOpportunity = (prob: Problem, fromView: any) => { setSelectedProblem(prob); setActiveView('opportunity'); setLastView(fromView); };

  const handleSearchCommit = () => {
    if (!cmdQuery.trim()) return;
    const terms = cmdQuery.toLowerCase().split(' ').filter(c => c);
    const results = allProblemsFlattened.filter(p => terms.every(term => p.searchString.includes(term)));
    setSearchContext({ query: cmdQuery, results });
    
    // Push to history for back-button support
    window.history.pushState({ mode: 'search_results', searchQuery: cmdQuery }, '');
    
    setExploreMode('search_results');
    setIsCommandOpen(false);
  };

  // ─── RENDERING BRANCH: FULL-SCREEN SEARCH RESULTS (HIGH DENSITY) ────────
  if (exploreMode === 'search_results') {
    const sectorStats = searchContext.results.reduce((acc: any, p) => {
      acc[p.sectorName] = (acc[p.sectorName] || 0) + 1;
      return acc;
    }, {});
    const total = searchContext.results.length;

    return (
      <div className="w-full min-h-screen bg-white font-tajawal text-right overflow-hidden flex flex-col" dir="rtl">
        <header className="sticky top-0 z-[100] min-h-[80px] h-auto shrink-0 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-4 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 py-4 sm:py-3 relative">
           <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-5 w-full sm:w-auto">
              <div className="flex items-center gap-3 sm:gap-5 overflow-hidden">
                 <button onClick={() => { window.history.back(); }} className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 flex items-center justify-center transition-all border border-slate-100 group shrink-0">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                 </button>
                 <div className="overflow-hidden">
                    <h1 className="text-sm sm:text-lg font-black text-slate-900 leading-tight truncate">نتائج الاستعلام الجغرافي</h1>
                    <p className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5 sm:mt-1 truncate">Intelligence Output</p>
                 </div>
              </div>
              <div className="sm:hidden w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-xl shrink-0">
                 <Activity size={16} />
              </div>
           </div>
           
           <div className="w-full sm:flex-1 max-w-xl sm:px-10">
              <div className="relative group">
                 <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-500 transition-colors" size={16} />
                 <input 
                   type="text" value={cmdQuery} onChange={(e) => setCmdQuery(e.target.value)}
                   onKeyDown={(e) => e.key === 'Enter' && handleSearchCommit()}
                   placeholder="تصفية النتائج..."
                   className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 sm:py-2.5 pr-11 pl-6 text-slate-900 text-xs font-bold focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all outline-none"
                 />
              </div>
           </div>

           <div className="hidden sm:flex items-center gap-4 shrink-0">
              <div className="px-4 py-2 bg-indigo-50 rounded-xl border border-indigo-100 hidden md:block">
                 <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Active Search Session</span>
              </div>
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-xl">
                 <Activity size={18} />
              </div>
           </div>
        </header>

        <div className="flex-1 overflow-hidden flex bg-slate-50/30">
           <aside className="w-72 shrink-0 bg-white border-l border-slate-100 p-6 hidden xl:flex flex-col gap-8 overflow-y-auto no-scrollbar shadow-sm">
              <div className="space-y-4">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ملخص البيانات</p>
                 <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="text-2xl font-black text-slate-900">{total}</div>
                    <p className="text-[10px] font-black text-slate-400 uppercase">Total Matches</p>
                 </div>
              </div>
              <div className="space-y-4 flex-1">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">توزيع القطاعات</p>
                 <div className="space-y-2">
                    {Object.entries(sectorStats).map(([name, count]: [string, any]) => (
                       <div key={name} className="p-3 bg-slate-50/50 rounded-xl border border-slate-100 flex items-center justify-between group hover:bg-white hover:border-indigo-200 transition-all">
                          <span className="text-[11px] font-black text-slate-600 group-hover:text-indigo-600">{name}</span>
                          <span className="text-[10px] font-black px-2 py-0.5 bg-white rounded-md text-slate-400 group-hover:text-indigo-500">{count}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="p-4 bg-slate-900 rounded-2xl text-center shadow-lg shadow-slate-200">
                 <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Data Integrity</p>
                 <p className="text-[10px] font-bold text-white mb-3">Verified Opportunities</p>
                 <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} className="h-full bg-indigo-500" />
                 </div>
              </div>
           </aside>

           <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 no-scrollbar">
              <div className="max-w-5xl mx-auto space-y-6">
                 <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-3 overflow-hidden">
                       <span className="text-xs font-black text-slate-400 shrink-0">تحليل معايير:</span>
                       <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] sm:text-xs font-black text-indigo-600 shadow-sm italic truncate">"{searchContext.query}"</span>
                    </div>
                    <div className="flex gap-2 shrink-0">
                       <span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded-md text-[9px] font-black uppercase">Live Output</span>
                    </div>
                 </div>

                 {searchContext.results.length === 0 ? (
                   <div className="py-32 text-center space-y-4">
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-300"><Search size={32} /></div>
                      <p className="text-slate-400 text-sm font-black">لا توجد بيانات مطابقة لهذا الاستعلام الاستخباراتي</p>
                      <button onClick={() => setExploreMode('sectors')} className="text-xs font-black text-indigo-600 underline">العودة للبحث العام</button>
                   </div>
                 ) : (
                   <div className="grid grid-cols-1 gap-4 pb-20">
                      {searchContext.results.map(p => (
                         <motion.div 
                           key={p.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                           onClick={() => goToOpportunity(p, 'search_results')}
                           className="group bg-white p-4 sm:p-5 rounded-[1.5rem] border border-slate-100 hover:border-indigo-200 shadow-sm hover:shadow-xl hover:shadow-indigo-50/30 transition-all cursor-pointer flex flex-row items-start sm:items-center gap-4 sm:gap-6"
                         >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-50 group-hover:bg-indigo-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors shrink-0">
                               <Globe size={24} />
                            </div>
                            <div className="flex-1 text-right space-y-1 overflow-hidden">
                               <div className="flex items-center justify-start gap-3 overflow-hidden">
                                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest truncate">{p.sectorName}</span>
                                  <span className="w-1 h-1 bg-slate-200 rounded-full shrink-0" />
                                  <span className="text-[10px] font-bold text-slate-400 shrink-0">#{p.id.slice(0,5)}</span>
                               </div>
                               <h3 className="text-sm sm:text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 sm:line-clamp-1 leading-tight">{p.title}</h3>
                               <p className="text-[11px] sm:text-[13px] font-medium text-slate-500 line-clamp-2 sm:line-clamp-1 opacity-80">{p.desc}</p>
                            </div>
                            <div className="shrink-0 flex items-center gap-4 self-center">
                               <div className="hidden md:flex flex-col items-end px-4 border-r border-slate-50">
                                  <span className="text-[9px] font-black text-slate-300 uppercase">Score</span>
                                  <span className="text-sm font-black text-slate-700">9.4</span>
                                </div>
                               <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 group-hover:bg-indigo-600 text-slate-400 group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                                  <ArrowLeft size={18} />
                                </div>
                            </div>
                         </motion.div>
                      ))}
                   </div>
                 )}
              </div>
           </main>
        </div>
      </div>
    );
  }

  // ─── MAIN DASHBOARD LAYOUT ────────────────────────────────────────────────
  return (
    <div className="w-full min-h-screen bg-slate-50 font-tajawal text-right p-4 sm:p-6 lg:p-10" dir="rtl">
      {/* ─── Global Header ─── */}
      <div className="max-w-7xl mx-auto mb-10 text-center border-b border-slate-100 pb-10">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black mb-4 border border-indigo-100">
          <Activity size={14} /> <span>بوابة استخبارات استثمارية عالمية</span>
        </motion.div>
        <h1 className="text-2xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">محرك ذكاء الفرص والمشكلات</h1>
        <p className="text-slate-500 text-sm sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-8">استكشف الفجوات السوقية الموثقة عالمياً بمعايير استثمارية دقيقة.</p>
        
        <div className="max-w-2xl mx-auto mb-10 px-4 relative z-50">
           <div className="bg-white border border-slate-200 rounded-[1.5rem] hover:border-indigo-300 shadow-sm hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-500 overflow-hidden">
              <div className="py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between group">
                 <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 shrink-0">
                       <Search size={20} />
                    </div>
                    <div className="flex-1 text-right overflow-hidden">
                       <input 
                         ref={commandInputRef} type="text" value={cmdQuery} onChange={(e) => setCmdQuery(e.target.value)}
                         onKeyDown={(e) => e.key === 'Enter' && handleSearchCommit()}
                         placeholder="ابحث بالدولة، القطاع، أو..."
                         className="w-full bg-transparent border-none outline-none text-xs sm:text-sm font-black text-slate-900 placeholder:text-slate-300 placeholder:font-bold"
                       />
                       <p className="text-[9px] sm:text-[10px] font-bold text-slate-300 leading-none mt-1 truncate">اضغط Enter لإجراء بحث استخباراتي شامل</p>
                    </div>
                 </div>
                 <div className="hidden sm:flex items-center gap-2 shrink-0">
                    <button onClick={() => handleSearchCommit()} className="px-4 py-2 bg-slate-900 text-white text-[10px] font-black rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">إرسال البحث</button>
                    <div className="w-px h-4 bg-slate-100 mx-2" />
                    <Sparkles size={18} className="text-indigo-200" />
                  </div>
              </div>
           </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-white rounded-3xl shadow-xl border border-slate-100 w-fit mx-auto scale-90 sm:scale-100">
          {[
            { id: 'sectors', label: 'القطاعات', icon: LayoutGrid, startView: 'sectors' },
            { id: 'b2x', label: 'نموذج العمل', icon: Building2, startView: 'b2x_gateway' },
            { id: 'budget', label: 'الميزانية', icon: Wallet, startView: 'budget_tiers' },
            { id: 'markets', label: 'الأسواق', icon: Globe, startView: 'continents_gateway' },
          ].map((m: any) => (
            <button key={m.id} onClick={() => { setExploreMode(m.id); setActiveView(m.startView); }}
              className={`flex items-center gap-2 px-4 py-3 sm:py-4 rounded-2xl text-xs sm:text-sm font-black transition-all ${exploreMode === m.id ? 'bg-slate-900 text-white shadow-xl scale-105' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <m.icon size={18} /> <span>{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto pb-20">
        <AnimatePresence mode="wait">
           {activeView === 'opportunity' && selectedProblem ? (
             <OpportunityDetail 
               selectedProblem={selectedProblem} selectedSector={selectedSector} selectedSub={selectedSub}
               lastView={lastView} setView={setActiveView} goToProblems={goToProblems}
             />
           ) : (
             <>
               {exploreMode === 'sectors' && (
                 <SectorsView 
                   view={activeView} filteredData={filteredData} selectedSector={selectedSector} selectedSub={selectedSub}
                   selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} setSelectedSector={setSelectedSector} setSelectedSub={setSelectedSub}
                   setView={setActiveView} goToProblems={goToProblems} goToOpportunity={goToOpportunity}
                 />
               )}
               {exploreMode === 'budget' && (
                 <BudgetView view={activeView} selectedBudget={selectedBudget} setView={setActiveView} setSelectedBudget={setSelectedBudget} goToOpportunity={goToOpportunity} />
               )}
               {exploreMode === 'markets' && (
                 <MarketsView 
                   view={activeView} selectedContinent={selectedContinent} selectedMarket={selectedMarket} marketSearchTerm={marketSearchTerm} currentMarketPage={currentMarketPage} ITEMS_PER_PAGE={ITEMS_PER_PAGE}
                   setView={setActiveView} setSelectedContinent={setSelectedContinent} setSelectedMarket={setSelectedMarket} setMarketSearchTerm={setMarketSearchTerm} setCurrentMarketPage={setCurrentMarketPage} goToOpportunity={goToOpportunity}
                 />
               )}
               {exploreMode === 'b2x' && (
                 <B2XView view={activeView} selectedB2X={selectedB2X} setView={setActiveView} setSelectedB2X={setSelectedB2X} goToOpportunity={goToOpportunity} />
               )}
             </>
           )}
        </AnimatePresence>
      </div>
    </div>
  );
};

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Activity, LayoutGrid, Building2, Wallet, Globe, Search, Sparkles, ChevronDown } from 'lucide-react';

// Modules
import { Sector, SubSector, Problem } from './ProblemOpportunityEngine/types';
import { DATA, COUNTRIES, BUDGET_TIERS } from './ProblemOpportunityEngine/constants.tsx';
import { OpportunityDetail } from './ProblemOpportunityEngine/OpportunityDetail';
import { CommandCenter } from './ProblemOpportunityEngine/CommandCenter';

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
        
        {/* Command Center Quick Trigger (Spotlight Style) */}
        <div className="max-w-2xl mx-auto mb-10 px-4">
           <button 
             onClick={() => setIsCommandOpen(true)}
             className="w-full bg-white border border-slate-200 rounded-[1.5rem] py-4 px-6 flex items-center justify-between group hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300 cursor-text"
           >
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                   <Search size={22} />
                </div>
                <div className="text-right">
                   <p className="text-xs sm:text-sm font-black text-slate-400 leading-none mb-1">استخدم رادار البحث الاستخباراتي</p>
                   <p className="text-[10px] font-bold text-slate-300 leading-none">ابحث بالدولة، القطاع، أو الميزانية...</p>
                </div>
             </div>
             <div className="flex items-center gap-2">
                <kbd className="hidden sm:inline-flex px-2 py-1 bg-slate-50 border border-slate-200 rounded-md text-[10px] font-bold text-slate-400 font-sans">CTRL K</kbd>
                <Sparkles size={18} className="text-indigo-200 group-hover:text-indigo-400 transition-colors" />
              </div>
           </button>
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

      {/* ─── Global Overlays ─── */}
      <CommandCenter 
        isCommandOpen={isCommandOpen} setIsCommandOpen={setIsCommandOpen} cmdQuery={cmdQuery} setCmdQuery={setCmdQuery}
        commandInputRef={commandInputRef} cmdResults={cmdResults} goToOpportunity={goToOpportunity}
      />
    </div>
  );
};

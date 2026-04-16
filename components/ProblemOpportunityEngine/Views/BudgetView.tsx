import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ChevronLeft, Target, AlertCircle, ArrowLeft } from 'lucide-react';
import { BUDGET_TIERS, DATA } from '../constants.tsx';
import { Problem } from '../types';
import { ScoreBadge, getPainTag, CountryTag } from '../SubComponents';

interface BudgetViewProps {
  view: string;
  selectedBudget: string | null;
  setView: (v: any) => void;
  setSelectedBudget: (b: any) => void;
  goToOpportunity: (prob: Problem, fromView: any) => void;
}

export const BudgetView: React.FC<BudgetViewProps> = ({
  view,
  selectedBudget,
  setView,
  setSelectedBudget,
  goToOpportunity
}) => {
  const budgetProblems = React.useMemo(() => {
    if (!selectedBudget) return [];
    const all: any[] = [];
    DATA.forEach(sec => sec.subs.forEach(sub => sub.problems.forEach(p => {
      if (p.budget === selectedBudget) {
        all.push({ ...p, sectorName: sec.name, sectorColor: sec.color, subName: sub.name });
      }
    })));
    return all;
  }, [selectedBudget]);

  if (view === 'budget_tiers') {
    return (
      <motion.div key="budget_tiers" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BUDGET_TIERS.map(tier => (
          <button key={tier.id} onClick={() => { setSelectedBudget(tier.id); setView('budget_problems'); }}
            className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 shadow-sm hover:shadow-xl transition-all text-right flex flex-col items-center sm:items-start relative overflow-hidden"
          >
            <div className={`w-14 h-14 rounded-2xl bg-${tier.color}-50 text-${tier.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-all border border-${tier.color}-100`}><tier.icon size={28} /></div>
            <h3 className="text-xl font-black text-slate-900 mb-2">{tier.title}</h3>
            <p className="text-sm font-bold text-slate-400 mb-6 leading-relaxed">{tier.desc}</p>
            <div className="mt-auto w-full pt-6 border-t border-slate-50 flex items-center justify-between">
              <span className="text-xs font-black text-slate-500">{tier.subtitle}</span>
              <ChevronLeft size={18} className="text-slate-300 group-hover:text-indigo-500 group-hover:-translate-x-1 transition-all" />
            </div>
          </button>
        ))}
      </motion.div>
    );
  }

  if (view === 'budget_problems' && selectedBudget) {
    const activeTier = BUDGET_TIERS.find(t => t.id === selectedBudget);
    return (
      <div className="space-y-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 overflow-x-auto no-scrollbar py-2 mb-2">
            <button onClick={() => { setView('budget_tiers'); setSelectedBudget(null); }} className="hover:text-indigo-600 transition-colors shrink-0">ميزانيات الاستثمار</button>
            {activeTier && (
               <>
                  <ChevronLeft size={12} className="shrink-0" />
                  <span className="text-indigo-600 shrink-0">{activeTier.title}</span>
               </>
            )}
        </div>

        <motion.div key="budget_problems" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {budgetProblems.map(problem => (
          <div key={problem.id} className="bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden flex flex-col">
            <div className="flex flex-col lg:flex-row gap-6 flex-1">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-md text-[9px] font-black bg-indigo-50 text-indigo-600 border border-indigo-100">#{problem.subName}</span>
                  <span className={`px-2 py-0.5 rounded-md text-[9px] font-black border ${getPainTag(problem.pain).class}`}>#{getPainTag(problem.pain).label}</span>
                  <span className="px-2 py-0.5 rounded-md text-[9px] font-black bg-slate-100 text-slate-500 border border-slate-200">#{problem.b2x}</span>
                  {problem.countries.map(cId => <CountryTag key={cId} countryId={cId} />)}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{problem.title}</h3>
                <p className="text-xs font-medium text-slate-500 mb-6 line-clamp-2">{problem.desc}</p>
                <button onClick={() => goToOpportunity(problem, 'budget_problems')} className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-[10px] font-black hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"><span>استكشف بيانات الفرصـة</span> <ArrowLeft size={14} /></button>
              </div>
              <div className="w-full lg:w-[150px] space-y-3 p-4 bg-slate-50 rounded-xl">
                <ScoreBadge label="شدة الألم" score={problem.pain} colorClass="text-rose-500" />
                <ScoreBadge label="الربحية" score={problem.money} colorClass="text-emerald-500" />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
    );
  }

  return null;
};

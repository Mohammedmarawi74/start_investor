import React from 'react';
import { ReadinessBreakdown } from '../types';
import { BarChart3, Briefcase, ShieldCheck, TrendingUp } from 'lucide-react';

interface InvestorReadinessScoreProps {
  breakdown: ReadinessBreakdown;
}

export const InvestorReadinessScore: React.FC<InvestorReadinessScoreProps> = ({ breakdown }) => {
  const rows = [
    { label: 'وضوح السوق', value: breakdown.marketClarity, icon: BarChart3 },
    { label: 'الصلابة المالية', value: breakdown.financialStrength, icon: TrendingUp },
    { label: 'جودة التنفيذ', value: breakdown.executionQuality, icon: Briefcase },
    { label: 'إدارة المخاطر', value: breakdown.riskControl, icon: ShieldCheck },
  ];

  return (
    <section className="glass-panel rounded-[2.5rem] p-4 sm:p-8">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-blue-400">Investor Readiness Score</p>
          <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">درجة جاهزية المستثمر</h3>
        </div>
        <div className="rounded-2xl border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-center">
          <p className="text-[10px] font-black uppercase tracking-wider text-blue-300">Overall</p>
          <p className="text-2xl font-black text-white sm:text-3xl">{breakdown.overall}</p>
        </div>
      </div>

      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {rows.map((row) => {
          const Icon = row.icon;
          return (
            <div key={row.label} className="rounded-2xl border border-white/10 bg-white/[.03] p-4">
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="flex items-center gap-2 text-sm font-black text-white">
                  <Icon size={16} className="text-blue-400" />
                  {row.label}
                </p>
                <span className="text-sm font-black text-slate-300">{row.value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-lime-400" style={{ width: `${row.value}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/35 p-4">
        <p className="mb-3 text-xs font-black uppercase tracking-widest text-slate-500">Why This Score</p>
        <ul className="space-y-2">
          {breakdown.reasons.map((reason, index) => (
            <li key={`${reason}-${index}`} className="text-sm font-semibold leading-6 sm:leading-7 text-slate-300">
              - {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

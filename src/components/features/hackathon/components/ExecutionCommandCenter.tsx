import React from 'react';
import { AlertTriangle, CalendarRange, CheckCircle2, Siren, Target } from 'lucide-react';
import { ExecutionKPI, ExecutionMilestone, PriorityAlert } from '../types';

interface ExecutionCommandCenterProps {
  unlocked: boolean;
  milestones: ExecutionMilestone[];
  kpis: ExecutionKPI[];
  alerts: PriorityAlert[];
}

export const ExecutionCommandCenter: React.FC<ExecutionCommandCenterProps> = ({ unlocked, milestones, kpis, alerts }) => {
  if (!unlocked) {
    return (
      <section className="glass-panel rounded-[2.5rem] p-4 sm:p-8">
        <p className="text-xs font-black uppercase tracking-widest text-slate-500">Execution Command Center</p>
        <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">لوحة تنفيذ 100 يوم</h3>
        <p className="mt-3 text-sm font-semibold text-slate-400">يتم فتح اللوحة تلقائيا بعد إكمال مهام اليوم الثالث، ثم تتحول الخطة إلى milestones أسبوعية قابلة للمتابعة.</p>
      </section>
    );
  }

  const statusClass: Record<ExecutionMilestone['status'], string> = {
    focus: 'text-blue-300 bg-blue-500/10 border-blue-400/30',
    stable: 'text-lime-300 bg-lime-500/10 border-lime-400/30',
    'at-risk': 'text-amber-300 bg-amber-500/10 border-amber-400/30',
  };

  return (
    <section className="glass-panel rounded-[2.5rem] p-4 sm:p-8">
      <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-blue-400">Execution Command Center</p>
          <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">لوحة تشغيل أول 100 يوم</h3>
        </div>
        <span className="rounded-2xl border border-lime-400/30 bg-lime-500/10 px-4 py-2 text-xs font-black text-lime-300">Mission Operating Mode</span>
      </div>

      <div className="mb-6 grid gap-3 sm:gap-4 lg:grid-cols-3">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-2xl border border-white/10 bg-white/[.03] p-4">
            <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400">
              <Target size={14} />
              {kpi.label}
            </p>
            <p className="text-xl font-black text-white sm:text-2xl">{kpi.current}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">Target: {kpi.target}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 rounded-2xl border border-white/10 bg-slate-950/35 p-4">
        <p className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
          <Siren size={14} />
          Priority Alerts
        </p>
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <div key={`${alert.title}-${index}`} className="rounded-xl border border-white/10 bg-white/[.03] p-3">
              <p className={`text-sm font-black ${alert.level === 'high' ? 'text-red-300' : 'text-amber-300'}`}>{alert.title}</p>
              <p className="mt-1 text-xs font-semibold leading-6 text-slate-400">{alert.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
        <p className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
          <CalendarRange size={14} />
          Weekly Milestones
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {milestones.map((milestone) => (
            <div key={`${milestone.week}-${milestone.title}`} className="rounded-xl border border-white/10 bg-white/[.03] p-4">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Week {milestone.week}</span>
                <span className={`rounded-lg border px-2 py-1 text-[10px] font-black ${statusClass[milestone.status]}`}>{milestone.status}</span>
              </div>
              <p className="text-sm font-black text-white">{milestone.title}</p>
              <p className="mt-1 text-xs font-semibold text-slate-400">Owner: {milestone.owner}</p>
              <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-slate-500">
                <CheckCircle2 size={12} />
                KPI: {milestone.kpi}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-start gap-2 text-xs font-semibold text-slate-500">
        <AlertTriangle size={14} className="mt-0.5 shrink-0" />
        يتم تحديث التوصيات تلقائيا حسب سيناريو CAC/Churn وزمن أول إيراد.
      </div>
    </section>
  );
};

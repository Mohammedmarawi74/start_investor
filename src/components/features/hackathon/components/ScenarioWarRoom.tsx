import React from 'react';
import { Activity, Gauge, ShieldAlert, Target } from 'lucide-react';
import { ScenarioState, SimulationResult } from '../types';

interface ScenarioWarRoomProps {
  scenario: ScenarioState;
  result: SimulationResult;
  unlocked: boolean;
  onChange: (next: Partial<ScenarioState>) => void;
}

interface SliderProps {
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  onChange: (value: number) => void;
}

const SliderField: React.FC<SliderProps> = ({ label, hint, value, min, max, step = 1, suffix = '', onChange }) => (
  <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
    <div className="mb-3 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <div className="min-w-0">
        <p className="text-sm font-black text-white">{label}</p>
        <p className="text-xs font-semibold text-slate-500">{hint}</p>
      </div>
      <span className="rounded-xl bg-blue-500/20 px-3 py-1 text-xs font-black text-blue-300 sm:text-sm">
        {value}
        {suffix}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-700 accent-blue-500"
    />
  </div>
);

export const ScenarioWarRoom: React.FC<ScenarioWarRoomProps> = ({ scenario, result, unlocked, onChange }) => {
  if (!unlocked) {
    return (
      <section className="glass-panel rounded-[2.5rem] border border-white/10 p-4 sm:p-8">
        <p className="text-xs font-black uppercase tracking-widest text-slate-500">Scenario War Room</p>
        <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">محاكاة القرارات اللحظية</h3>
        <p className="mt-3 text-sm font-semibold text-slate-400">يتم تفعيل غرفة السيناريو بعد اكتمال يوم الاستخبارات حتى يكون التقييم مبنيا على مدخلات حقيقية.</p>
      </section>
    );
  }

  const verdictStyles = {
    stable: 'border-lime-400/30 bg-lime-500/10 text-lime-300',
    watch: 'border-amber-400/30 bg-amber-500/10 text-amber-300',
    critical: 'border-red-400/30 bg-red-500/10 text-red-300',
  };

  const verdictText = {
    stable: 'مستقر وجاهز للتوسع',
    watch: 'يحتاج ضبطا قبل التصعيد',
    critical: 'مخاطرة عالية تستوجب تدخل فوري',
  };

  return (
    <section className="glass-panel rounded-[2.5rem] p-4 sm:p-8">
      <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-blue-400">Scenario War Room</p>
          <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">مختبر القرار الفوري</h3>
        </div>
        <span className={`rounded-2xl border px-3 py-2 text-xs font-black sm:px-4 ${verdictStyles[result.verdict]}`}>{verdictText[result.verdict]}</span>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <SliderField label="تكلفة اكتساب العميل (CAC)" hint="كم يكلف جلب عميل مدفوع واحد" value={scenario.cac} min={20} max={600} step={5} suffix="$" onChange={(value) => onChange({ cac: value })} />
        <SliderField label="معدل فقدان العملاء (Churn)" hint="النسبة الشهرية لخروج العملاء" value={scenario.churn} min={1} max={35} suffix="%" onChange={(value) => onChange({ churn: value })} />
        <SliderField label="زمن أول إيراد" hint="عدد الأشهر للوصول لأول تدفق نقدي" value={scenario.timeToRevenue} min={1} max={24} suffix="ش" onChange={(value) => onChange({ timeToRevenue: value })} />
      </div>

      <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4">
          <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400"><Gauge size={14} /> الاستدامة</p>
          <p className="text-2xl font-black text-white sm:text-3xl">{result.sustainability}%</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4">
          <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400"><Target size={14} /> فرصة النجاح</p>
          <p className="text-2xl font-black text-white sm:text-3xl">{result.successChance}%</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4">
          <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400"><ShieldAlert size={14} /> ضغط المدرج</p>
          <p className="text-2xl font-black text-white sm:text-3xl">{result.runwayStress}%</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4">
          <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400"><Activity size={14} /> LTV متوقع</p>
          <p className="text-2xl font-black text-white sm:text-3xl">${result.ltvEstimate}</p>
        </div>
      </div>
    </section>
  );
};

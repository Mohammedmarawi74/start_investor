
import React, { useState } from 'react';
import {
  Users, DollarSign, Zap, Package, Heart,
  Truck, Key, Settings, ArrowUpRight, CheckCircle2, LayoutGrid
} from 'lucide-react';

interface BmcData {
  keyPartners: string;
  keyActivities: string;
  keyResources: string;
  valuePropositions: string;
  customerRelationships: string;
  channels: string;
  customerSegments: string;
  costStructure: string;
  revenueStreams: string;
}

const INITIAL_DATA: BmcData = {
  keyPartners: '', keyActivities: '', keyResources: '',
  valuePropositions: '', customerRelationships: '', channels: '',
  customerSegments: '', costStructure: '', revenueStreams: '',
};

interface BlockProps {
  number: number;
  title: string;
  icon: React.ReactNode;
  hint: string;
  value: string;
  onChange: (v: string) => void;
  accent: string;
  indicatorColor: string;
  className?: string;
}

const Block: React.FC<BlockProps> = ({ number, title, icon, hint, value, onChange, accent, indicatorColor, className = '' }) => (
  <div className={`group relative bg-white flex flex-col p-4 sm:p-5 transition-all duration-300 hover:shadow-xl hover:border-indigo-200 border border-slate-100 rounded-3xl h-[220px] sm:h-[260px] ${className}`}>
    {/* Colored Indicator bar */}
    <div className={`absolute top-0 right-0 w-1.5 h-full ${indicatorColor} opacity-20 group-hover:opacity-100 transition-opacity rounded-r-3xl`} />
    
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-start gap-3 min-w-0">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${accent} shadow-sm shrink-0`}>
          {React.cloneElement(icon as React.ReactElement, { size: 18 })}
        </div>
        <div className="min-w-0 pt-0.5">
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-slate-300 font-mono tracking-tighter leading-none mb-1">
              BLOCK {number.toString().padStart(2,'0')}
            </span>
            <h3 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
              {title}
            </h3>
          </div>
        </div>
      </div>
      {value && (
        <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-emerald-100">
          <CheckCircle2 size={12} className="text-white" />
        </div>
      )}
    </div>

    <div className="relative flex-1 flex flex-col min-h-0">
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={hint}
        className="flex-1 w-full bg-slate-50/50 border border-transparent focus:border-indigo-50 focus:bg-white rounded-2xl p-3 text-[11px] sm:text-xs font-semibold text-slate-700 outline-none resize-none placeholder:text-slate-200 transition-all leading-relaxed"
      />
    </div>
  </div>
);

export const BusinessModelCanvas: React.FC<{
  onComplete: () => void;
}> = ({ onComplete }) => {
  const [data, setData] = useState<BmcData>(INITIAL_DATA);

  const set = (key: keyof BmcData) => (v: string) => setData(p => ({ ...p, [key]: v }));

  const filled = Object.values(data).filter(Boolean).length;
  const total = 9;
  const pct = Math.round((filled / total) * 100);

  const BLOCKS = [
    { num: 1, title: 'الشركاء الرئيسيون', v: data.keyPartners, k: 'keyPartners', acc: 'bg-violet-50 text-violet-600', ind: 'bg-violet-500', ic: <Key />, hint: 'الموردون والشركاء...' },
    { num: 2, title: 'الأنشطة الرئيسية', v: data.keyActivities, k: 'keyActivities', acc: 'bg-blue-50 text-blue-600', ind: 'bg-blue-500', ic: <Settings />, hint: 'الأعمال اليومية...' },
    { num: 3, title: 'القيمة المقدَّمة', v: data.valuePropositions, k: 'valuePropositions', acc: 'bg-indigo-50 text-indigo-600', ind: 'bg-indigo-500', ic: <Zap />, hint: 'ما الذي يجعلك فريداً؟' },
    { num: 4, title: 'علاقات العملاء', v: data.customerRelationships, k: 'customerRelationships', acc: 'bg-rose-50 text-rose-600', ind: 'bg-rose-500', ic: <Heart />, hint: 'كيف تحافظ عليهم؟' },
    { num: 5, title: 'شرائح العملاء', v: data.customerSegments, k: 'customerSegments', acc: 'bg-emerald-50 text-emerald-600', ind: 'bg-emerald-500', ic: <Users />, hint: 'من هم عملاؤك؟' },
    { num: 6, title: 'الموارد الرئيسية', v: data.keyResources, k: 'keyResources', acc: 'bg-sky-50 text-sky-600', ind: 'bg-sky-500', ic: <Package />, hint: 'الأصول اللازمة...' },
    { num: 7, title: 'قنوات التوصيل', v: data.channels, k: 'channels', acc: 'bg-teal-50 text-teal-600', ind: 'bg-teal-500', ic: <Truck />, hint: 'كيف تصل للعميل؟' },
    { num: 8, title: 'هيكل التكاليف', v: data.costStructure, k: 'costStructure', acc: 'bg-amber-50 text-amber-600', ind: 'bg-amber-500', ic: <DollarSign />, hint: 'أين تذهب الأموال؟' },
    { num: 9, title: 'مصادر الإيرادات', v: data.revenueStreams, k: 'revenueStreams', acc: 'bg-emerald-50 text-emerald-600', ind: 'bg-emerald-500', ic: <DollarSign />, hint: 'من أين تأتي الأموال؟' },
  ];

  return (
    <div dir="rtl" className="w-full max-w-7xl mx-auto h-full flex flex-col items-center px-4 sm:px-6 lg:px-12 py-6 sm:py-8 gap-6 sm:gap-8 animate-in fade-in duration-700 overflow-x-hidden">

      {/* ── Header ────────────────────────────────────────────────── */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-xl">
            <LayoutGrid size={24} />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Business Model Canvas</h2>
            <p className="text-xs font-bold text-slate-400">صياغة الهيكل التشغيلي والمالي للمشروع</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">نسبة الاكتمال</span>
              <span className="text-xs font-black text-indigo-600 font-mono">{pct}%</span>
            </div>
            <div className="w-32 h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
              <div className="h-full bg-indigo-600 transition-all duration-1000" style={{ width: `${pct}%` }} />
            </div>
          </div>
          <button
            onClick={onComplete}
            disabled={filled < 5}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-black transition-all active:scale-95 ${
              filled >= 5 ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-0.5' : 'bg-slate-100 text-slate-300 cursor-not-allowed'
            }`}
          >
            تحليل اللوحة
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* ── Grid Container ────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {BLOCKS.map(b => (
            <Block
              key={b.num}
              number={b.num}
              title={b.title}
              icon={b.ic}
              hint={b.hint}
              value={b.v as string}
              onChange={set(b.k as keyof BmcData)}
              accent={b.acc}
              indicatorColor={b.ind}
              className={b.num === 3 ? 'lg:border-2 lg:border-indigo-100 lg:shadow-md lg:ring-8 lg:ring-indigo-50/30' : ''}
            />
          ))}
          {/* Filler spacer to balance the last row if needed, or item 9 will just flow */}
        </div>
      </div>

      {/* ── Footer Info ───────────────────────────────────────────── */}
      <div className="bg-slate-50/50 p-5 rounded-[2rem] border border-slate-100 flex items-center justify-between gap-6 flex-wrap">
        <div className="flex items-center gap-8 flex-wrap">
          {[
            { color: 'bg-violet-500', label: 'الشركاء' },
            { color: 'bg-indigo-500', label: 'القيمة المضافة' },
            { color: 'bg-emerald-500', label: 'الإيرادات' },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-2.5">
              <div className={`w-3 h-3 rounded-full ${l.color} shadow-sm`} />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{l.label}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] font-bold text-slate-400 italic">يتم حفظ المسودات تلقائياً في ذاكرة المتصفح</p>
      </div>
    </div>
  );
};

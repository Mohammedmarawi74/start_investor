/// <reference types="react" />
import * as React from 'react';
import { 
  ShieldCheck, 
  AlertCircle, 
  TrendingUp, 
  Zap, 
  Lightbulb, 
  ArrowUpRight, 
  LucideIcon 
} from 'lucide-react';
import { SwotAnalysis, SwotItem } from './types';

interface SwotCardProps {
  title: string;
  items: SwotItem[];
  icon: LucideIcon;
  color: 'emerald' | 'rose' | 'amber' | 'indigo';
}

function SwotCard({ title, items, icon: Icon, color }: SwotCardProps) {
  const colorStyles = {
    emerald: {
      bg: 'bg-emerald-50/30',
      border: 'border-emerald-100/50',
      iconBg: 'bg-emerald-500',
      iconShadow: 'shadow-emerald-200',
      text: 'text-emerald-900',
      dot: 'bg-emerald-400',
      hover: 'hover:bg-emerald-50/50'
    },
    rose: {
      bg: 'bg-rose-50/30',
      border: 'border-rose-100/50',
      iconBg: 'bg-rose-500',
      iconShadow: 'shadow-rose-200',
      text: 'text-rose-900',
      dot: 'bg-rose-400',
      hover: 'hover:bg-rose-50/50'
    },
    amber: {
      bg: 'bg-amber-50/30',
      border: 'border-amber-100/50',
      iconBg: 'bg-amber-500',
      iconShadow: 'shadow-amber-200',
      text: 'text-amber-900',
      dot: 'bg-amber-400',
      hover: 'hover:bg-amber-50/50'
    },
    indigo: {
      bg: 'bg-indigo-50/30',
      border: 'border-indigo-100/50',
      iconBg: 'bg-indigo-600',
      iconShadow: 'shadow-indigo-200',
      text: 'text-indigo-900',
      dot: 'bg-indigo-400',
      hover: 'hover:bg-indigo-50/50'
    }
  };

  const s = colorStyles[color];

  return (
    <div className={`group/swot relative h-full ${s.bg} border ${s.border} rounded-[2rem] p-8 transition-all duration-300 ${s.hover}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 ${s.iconBg} text-white rounded-2xl flex items-center justify-center shadow-lg ${s.iconShadow} transition-transform duration-500 group-hover/swot:rotate-6`}>
          <Icon size={24} />
        </div>
        <h3 className={`text-xl font-black ${s.text}`}>{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-4 group/item">
            <div className={`mt-2 w-1.5 h-1.5 rounded-full ${s.dot} shrink-0 group-hover/item:scale-150 transition-transform duration-300`} />
            <span className="text-slate-600 font-bold text-sm leading-relaxed">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SwotSectionProps {
  swot: SwotAnalysis;
  title: string;
}

export function SwotSection({ swot, title }: SwotSectionProps) {
  return (
    <div 
      className="sd-section-light sd-section-card animate-in fade-in slide-in-from-bottom-8 duration-1000" 
      data-section="swot-analysis"
      style={{
        position: 'relative',
        background: '#fff',
        borderRadius: 24,
        border: '1px solid #f1f5f9',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s, border-color 0.3s',
        boxShadow: 'none',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.07)';
        el.style.borderColor = '#e2e8f0';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.boxShadow = 'none';
        el.style.borderColor = '#f1f5f9';
      }}
    >
      <div className="sd-hover-glow" style={{ position: 'absolute', top: -40, left: -40, width: 160, height: 160, borderRadius: '50%', opacity: 0, transition: 'opacity 0.5s', pointerEvents: 'none' }} />
      
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 28, direction: 'rtl' }}>
        <div style={{ position: 'relative', flexShrink: 0, width: 4 }}>
          <div className="sd-bar" style={{ width: 4, height: 52, borderRadius: 4 }} />
          <div className="sd-bar-glow" style={{ position: 'absolute', inset: 0, borderRadius: 4, filter: 'blur(4px)' }} />
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: '#0f172a', lineHeight: 1.2, letterSpacing: '-0.02em' }}>تحليل SWOT الاستراتيجي</h2>
          <p style={{ margin: '6px 0 0', fontSize: 12, fontWeight: 800, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{title}</p>
        </div>
      </div>

      <div className="sd-section-light-body" style={{ direction: 'rtl' }}>
        <div className="mb-10 text-right">
          <p className="text-gray-600 leading-relaxed font-bold text-lg">
            {swot.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <SwotCard title="نقاط القوة" items={swot.strengths} icon={ShieldCheck} color="emerald" />
          <SwotCard title="نقاط الضعف" items={swot.weaknesses} icon={AlertCircle} color="rose" />
          <SwotCard title="الفرص الواعدة" items={swot.opportunities} icon={TrendingUp} color="amber" />
          <SwotCard title="التهديدات والمخاطر" items={swot.threats} icon={Zap} color="indigo" />
        </div>

        <div className="mt-12 relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]" />
          <div className="relative bg-white border border-amber-100 rounded-[2rem] p-1 shadow-lg shadow-amber-500/5 transition-all duration-500">
            <div className="bg-amber-50/20 backdrop-blur-xl rounded-[1.8rem] p-6 md:p-8 border border-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-200/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-200/30 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-200/10 rounded-full blur-[40px] translate-y-1/2 -translate-x-1/2 group-hover:bg-yellow-200/30 transition-all duration-700" />

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-right">
                <div className="w-14 h-14 bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-2xl flex items-center justify-center shrink-0 shadow-xl shadow-amber-200 rotate-3 group-hover:rotate-12 transition-transform duration-500">
                  <Lightbulb size={28} className="text-white animate-pulse" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                    <span className="px-2.5 py-0.5 bg-amber-100 border border-amber-200 rounded-full text-[9px] font-black text-amber-700 uppercase tracking-widest">
                      SWOT SUMMARY
                    </span>
                    <div className="h-px w-8 bg-amber-200" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-2 leading-tight">
                    الملخص الذكي لتحليل SWOT
                  </h4>
                  <p className="text-slate-600 text-base font-bold leading-relaxed max-w-2xl">
                    {swot.insight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

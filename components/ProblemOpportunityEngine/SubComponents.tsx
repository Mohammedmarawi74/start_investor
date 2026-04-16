import React from 'react';
import { motion } from 'framer-motion';
import { COUNTRIES } from './constants.tsx';

export const ScoreBadge = ({ label, score, colorClass }: { label: string, score: number, colorClass: string }) => {
  const getWidth = (s: number) => `${s * 10}%`;
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between items-center mb-0.5">
        <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wide">{label}</span>
        <span className={`text-[10px] sm:text-[11px] font-black ${colorClass}`}>{score}/10</span>
      </div>
      <div className="h-1.5 w-full bg-slate-100/50 rounded-full overflow-hidden shadow-inner flex items-center">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: getWidth(score) }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full ${colorClass.replace('text-', 'bg-')} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)]`}
        />
      </div>
    </div>
  );
};

export const getPainTag = (pain: number) => {
  if (pain >= 9) return { label: 'ألم حاد 🔴', class: 'bg-rose-50 text-rose-600 border-rose-100' };
  if (pain >= 7) return { label: 'ألم مرتفع 🟠', class: 'bg-orange-50 text-orange-600 border-orange-100' };
  return { label: 'ألم متوسط 🟡', class: 'bg-amber-50 text-amber-600 border-amber-100' };
};

export const CountryTag = ({ countryId }: { countryId: string }) => {
  const country = COUNTRIES.find(c => c.id === countryId);
  if (!country || countryId === 'ALL') return null;
  return (
    <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 rounded-md text-[9px] font-black bg-slate-50 text-slate-600 border border-slate-200">
       <span className="text-[10px] sm:text-xs leading-none">{country.flag}</span>
       <span className="leading-none">{country.name}</span>
    </span>
  );
};

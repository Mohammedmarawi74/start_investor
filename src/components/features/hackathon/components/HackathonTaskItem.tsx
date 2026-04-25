import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronLeft, Download } from 'lucide-react';
import { SprintTask } from '../types';

interface HackathonTaskItemProps {
  task: SprintTask;
  isDone: boolean;
  answer: any;
  onUpdate: (val: any) => void;
  onCompleteDossier?: () => void;
  canCompleteDossier?: boolean;
}

export const HackathonTaskItem: React.FC<HackathonTaskItemProps> = ({ task, isDone, answer, onUpdate, onCompleteDossier, canCompleteDossier }) => {
  const Icon = task.icon;

  return (
    <motion.article className="group rounded-2xl border border-white/10 bg-white/[.035] p-4 transition-all hover:border-white/20 sm:p-5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
      <div className="mb-4 flex items-start gap-3 sm:mb-6 sm:gap-6">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-2xl border transition-all sm:h-14 sm:w-14 ${
            isDone ? 'border-lime-500/50 bg-lime-400/20 text-lime-400' : 'border-white/10 bg-slate-800 text-slate-400 group-hover:border-blue-500/50'
          }`}
        >
          <Icon size={20} className="sm:h-7 sm:w-7" />
        </div>

        <div className="min-w-0 flex-1 pt-0.5 sm:pt-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-black leading-tight text-white sm:text-xl">{task.title}</h3>
            {isDone ? <CheckCircle2 size={18} className="shrink-0 text-lime-400 sm:h-5 sm:w-5" /> : <ChevronLeft size={18} className="shrink-0 text-slate-600 sm:h-5 sm:w-5" />}
          </div>
          <p className="mt-1 text-xs font-medium leading-6 text-slate-500 sm:text-sm">{task.detail}</p>
        </div>
      </div>

      <div className="pl-0 sm:pl-20">
        {task.id === 'dossier' ? (
          <button
            onClick={onCompleteDossier}
            disabled={!canCompleteDossier}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-lime-500 py-4 text-base font-black text-slate-950 shadow-lg shadow-lime-500/20 transition-all hover:bg-lime-400 disabled:cursor-not-allowed disabled:opacity-30 sm:gap-3 sm:py-6 sm:text-xl"
          >
            <Download size={20} className="sm:h-6 sm:w-6" />
            توليد ملف الاستثمار النهائي
          </button>
        ) : task.type === 'swot' ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {['قوة', 'ضعف', 'فرص', 'تهديدات'].map((label) => (
              <div key={label} className="relative">
                <span className="absolute right-4 top-3 text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</span>
                <textarea
                  className="h-32 w-full resize-none rounded-2xl border border-white/10 bg-slate-950/50 p-4 pt-10 text-sm text-white transition-all focus:border-blue-500/50 focus:outline-none sm:p-5 sm:pt-10"
                  placeholder="اكتب هنا..."
                  value={answer?.[label] || ''}
                  onChange={(e) => onUpdate({ ...answer, [label]: e.target.value })}
                />
              </div>
            ))}
          </div>
        ) : task.type === 'list' || task.type === 'financial' ? (
          <textarea
            className="min-h-[150px] w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm font-semibold leading-relaxed text-white transition-all placeholder:text-slate-700 focus:border-blue-500/50 focus:outline-none sm:min-h-[160px] sm:p-6"
            placeholder={task.placeholder}
            value={answer || ''}
            onChange={(e) => onUpdate(e.target.value)}
          />
        ) : (
          <textarea
            className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm font-semibold leading-relaxed text-white transition-all placeholder:text-slate-700 focus:border-blue-500/50 focus:outline-none sm:p-6"
            placeholder={task.placeholder}
            value={answer || ''}
            onChange={(e) => onUpdate(e.target.value)}
          />
        )}
      </div>
    </motion.article>
  );
};

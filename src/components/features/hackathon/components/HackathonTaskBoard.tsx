import React from 'react';
import { MessageSquareWarning, RefreshCw } from 'lucide-react';
import { SprintDay, HackathonState } from '../types';
import { HackathonTaskItem } from './HackathonTaskItem';

interface HackathonTaskBoardProps {
  currentDay: SprintDay;
  state: HackathonState;
  mentorMessage: string;
  onUpdateAnswer: (id: any, val: any) => void;
  onCompleteDossier: () => void;
  canCompleteDossier: boolean;
  onReset: () => void;
}

export const HackathonTaskBoard: React.FC<HackathonTaskBoardProps> = ({
  currentDay,
  state,
  mentorMessage,
  onUpdateAnswer,
  onCompleteDossier,
  canCompleteDossier,
  onReset,
}) => (
  <section className="glass-panel rounded-[2.5rem] p-4 sm:p-8 lg:p-10">
    <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-12 md:flex-row md:items-center md:gap-6">
      <div>
        <div className="mb-2 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-sm font-black text-blue-400">0{currentDay.day}</span>
          <span className="text-xs font-black uppercase tracking-[0.12em] text-slate-500 sm:text-sm sm:tracking-widest">{currentDay.codename}</span>
        </div>
        <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl">{currentDay.title}</h2>
      </div>

      <div className="max-w-full rounded-3xl border border-blue-500/10 bg-blue-500/5 p-4 sm:max-w-sm sm:p-5">
        <div className="mb-2 flex items-start gap-3">
          <MessageSquareWarning size={22} className="mt-0.5 shrink-0 text-blue-400 sm:h-8 sm:w-8" />
          <p className="text-xs font-bold leading-relaxed text-slate-300">
            <span className="mb-1 block text-[10px] font-black uppercase tracking-[0.08em] text-blue-400 sm:tracking-tighter">AI Mentor Insight</span>
            {mentorMessage}
          </p>
        </div>
      </div>
    </div>

    <div className="space-y-4 sm:space-y-8">
      {currentDay.tasks.map((task) => (
        <HackathonTaskItem
          key={task.id}
          task={task}
          isDone={state.taskStatus[task.id]}
          answer={state.answers[task.id]}
          onUpdate={(val) => onUpdateAnswer(task.id, val)}
          onCompleteDossier={onCompleteDossier}
          canCompleteDossier={canCompleteDossier}
        />
      ))}
    </div>

    <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
      <div className="flex gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className={`h-3 w-3 rounded-full transition-all duration-500 ${state.currentStage === s ? 'w-8 bg-blue-500' : 'bg-slate-800'}`} />
        ))}
      </div>
      <button
        onClick={() => {
          if (confirm('هل أنت متأكد؟ سيتم حذف كل التقدم المنجز.')) onReset();
        }}
        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600 transition-colors hover:text-red-400"
      >
        <RefreshCw size={12} />
        Reset Operation
      </button>
    </div>
  </section>
);

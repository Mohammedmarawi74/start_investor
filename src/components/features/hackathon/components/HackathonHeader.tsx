import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Flame, Timer, Lock, CheckCircle2, CircleDot } from 'lucide-react';
import { HackathonState } from '../types';
import { sprintDays } from '../constants';

interface HackathonHeaderProps {
  state: HackathonState;
  remainingTime: string;
  progress: number;
  isStageComplete: (stage: number) => boolean;
  goToStage: (stage: number) => void;
}

export const HackathonHeader: React.FC<HackathonHeaderProps> = ({ state, remainingTime, progress, isStageComplete, goToStage }) => (
  <header className="mb-6 flex flex-col items-stretch gap-4 sm:mb-10 sm:gap-6 lg:flex-row">
    <div className="glass-panel flex flex-1 flex-col justify-between rounded-[2rem] p-4 sm:p-6 lg:p-8">
      <div className="mb-6 flex items-start justify-between sm:mb-8">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/20 text-blue-400 sm:h-12 sm:w-12">
            <Radio size={20} className="animate-pulse sm:h-6 sm:w-6" />
          </div>
          <div className="min-w-0">
            <h2 className="text-[11px] font-black uppercase tracking-[0.12em] text-blue-300 sm:text-sm sm:tracking-widest">Operation: Pulse Execution</h2>
            <h1 className="mt-1 text-xl font-black leading-tight text-white sm:text-3xl">غرفة العمليات الاستخباراتية</h1>
          </div>
        </div>

        <div className="hidden items-center gap-4 sm:flex">
          <div className="text-right">
            <p className="text-[10px] font-black uppercase text-slate-500">Intensity Score</p>
            <p className="text-xl font-black text-lime-400">{state.intensityScore}%</p>
          </div>
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-800">
            <svg className="h-full w-full -rotate-90 transform">
              <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-800" />
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
                className="text-lime-400"
                strokeDasharray="150"
                strokeDashoffset={150 - (150 * state.intensityScore) / 100}
              />
            </svg>
            <Flame size={20} className="absolute text-lime-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {sprintDays.map((day) => {
          const isLocked = day.day > 1 && !isStageComplete(day.day - 1);
          const isActive = state.currentStage === day.day;
          const isDone = isStageComplete(day.day);

          return (
            <button
              key={day.day}
              onClick={() => goToStage(day.day)}
              className={`rounded-2xl border p-3 text-right transition-all sm:p-5 ${
                isActive ? 'border-blue-500/50 bg-blue-600/10 neo-glow' : 'border-white/5 bg-white/5 opacity-50'
              } ${isLocked ? 'cursor-not-allowed' : 'hover:bg-white/10'}`}
            >
              <div className="mb-2 flex items-center justify-between sm:mb-3">
                <span className="hidden text-[10px] font-black uppercase text-slate-500 sm:block">{day.codename}</span>
                {isDone ? (
                  <CheckCircle2 size={16} className="text-lime-400" />
                ) : isLocked ? (
                  <Lock size={16} />
                ) : (
                  <CircleDot size={16} style={{ color: day.accent }} />
                )}
              </div>
              <h3 className="text-sm font-black text-white sm:text-lg">{day.title}</h3>
            </button>
          );
        })}
      </div>
    </div>

    <div className="glass-panel relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] p-4 sm:p-8 lg:w-[400px]">
      <div className="absolute right-0 top-0 p-4">
        <Timer size={20} className="text-red-500/50" />
      </div>
      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-red-400 sm:mb-4 sm:text-xs sm:tracking-[0.3em]">Time Remaining</p>
      <div className="timer-pulse text-4xl font-black tracking-tighter text-red-500 sm:text-6xl">{remainingTime}</div>

      <div className="mt-6 w-full sm:mt-8">
        <div className="mb-2 flex justify-between text-[10px] font-black uppercase text-slate-500">
          <span>Project Readiness</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
          <motion.div className="h-full bg-gradient-to-r from-red-500 via-blue-500 to-lime-500" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  </header>
);

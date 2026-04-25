import React, { useMemo } from 'react';
import { Crown, Eye, Medal, MessageSquareWarning, ShieldCheck, Sparkles, Trophy, Users } from 'lucide-react';
import { ParticipantRecord, TaskId } from '../types';

interface LeadershipBoardProps {
  participants: ParticipantRecord[];
  currentUserId: string;
  taskIds: TaskId[];
}

const scoreTotal = (participant: ParticipantRecord) =>
  Math.round(participant.score.idea * 0.35 + participant.score.success * 0.35 + participant.score.accuracy * 0.3);

const statusStyles: Record<ParticipantRecord['status'], string> = {
  active: 'border-lime-400/30 bg-lime-500/10 text-lime-300',
  'at-risk': 'border-amber-400/30 bg-amber-500/10 text-amber-300',
  blocked: 'border-red-400/30 bg-red-500/10 text-red-300',
};

export const LeadershipBoard: React.FC<LeadershipBoardProps> = ({ participants, currentUserId, taskIds }) => {
  const leaderboard = useMemo(() => [...participants].sort((a, b) => scoreTotal(b) - scoreTotal(a)), [participants]);
  const top3 = leaderboard.slice(0, 3);
  const currentIndex = leaderboard.findIndex((member) => member.id === currentUserId);
  const currentUser = currentIndex >= 0 ? leaderboard[currentIndex] : leaderboard[0];
  const currentProgress = Math.round((Object.values(currentUser.taskStatus).filter(Boolean).length / taskIds.length) * 100);

  return (
    <section className="glass-panel rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-xl shadow-black/20">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Leadership</p>
          <h3 className="mt-1 text-lg font-black leading-tight text-white">ترتيب الهاكاثون</h3>
        </div>
        <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/[.04] px-2 py-1 text-[10px] font-black text-slate-300">
          <Users size={12} className="text-blue-300" />
          25
        </div>
      </div>

      <div className="mb-4 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-3">
        <div className="mb-3 flex items-center gap-3">
          <img src={currentUser.avatar} alt={currentUser.name} className="h-10 w-10 rounded-full border border-blue-300/40 bg-slate-900" />
          <div className="min-w-0">
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-300">مركزك الحالي</p>
            <p className="text-base font-black text-white">#{currentIndex + 1}</p>
          </div>
        </div>
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-400">{currentUser.project}</span>
          <span className="font-black text-lime-300">{scoreTotal(currentUser)}</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-lime-400" style={{ width: `${currentProgress}%` }} />
        </div>
      </div>

      <div className="mb-4 rounded-2xl border border-white/10 bg-white/[.035] p-3">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src="https://api.dicebear.com/9.x/adventurer/svg?seed=admin-mentor" alt="المشرف" className="h-10 w-10 rounded-full border border-white/20 bg-slate-900" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-lime-400" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Admin Mentor</p>
              <p className="truncate text-sm font-black text-white">نواف الراشد</p>
            </div>
          </div>
          <span className="rounded-lg border border-lime-400/30 bg-lime-500/10 px-2 py-1 text-[10px] font-black text-lime-300">Live</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl border border-white/10 bg-slate-950/35 p-2">
            <Eye size={13} className="mx-auto mb-1 text-blue-300" />
            <p className="text-[10px] font-black text-white">يراقب</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-950/35 p-2">
            <MessageSquareWarning size={13} className="mx-auto mb-1 text-amber-300" />
            <p className="text-[10px] font-black text-white">8 ملاحظات</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-950/35 p-2">
            <ShieldCheck size={13} className="mx-auto mb-1 text-lime-300" />
            <p className="text-[10px] font-black text-white">آخر فحص 6m</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
          <Medal size={13} />
          Top 3
        </div>
        <div className="space-y-2">
          {top3.map((member, index) => {
            const RankIcon = index === 0 ? Crown : Trophy;
            return (
              <div key={member.id} className="rounded-xl border border-white/10 bg-white/[.03] p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="w-6 shrink-0 text-xs font-black text-slate-500">#{index + 1}</span>
                    <img src={member.avatar} alt={member.name} className="h-7 w-7 shrink-0 rounded-full border border-white/20 bg-slate-900" />
                    <div className="min-w-0">
                      <p className="truncate text-xs font-black text-white">{member.name}</p>
                      <p className="truncate text-[11px] font-semibold text-slate-500">{member.project}</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="text-sm font-black text-white">{scoreTotal(member)}</span>
                    <RankIcon size={14} className={index === 0 ? 'text-lime-300' : 'text-blue-300'} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-3">
        <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
          <Trophy size={13} />
          القائمة
        </div>
        <div className="custom-scrollbar max-h-[300px] space-y-2 overflow-y-auto pr-1">
          {leaderboard.map((member, index) => {
            const isCurrent = member.id === currentUser.id;
            return (
              <div key={member.id} className={`rounded-xl border p-2.5 ${isCurrent ? 'border-blue-400/40 bg-blue-500/10' : 'border-white/10 bg-white/[.03]'}`}>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="w-6 shrink-0 text-[11px] font-black text-slate-500">#{index + 1}</span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-black text-white">{member.name}</p>
                      <p className="truncate text-[10px] font-semibold text-slate-500">{member.project}</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-xs font-black text-white">{scoreTotal(member)}</p>
                    <span className={`rounded-md border px-1.5 py-0.5 text-[9px] font-black ${statusStyles[member.status]}`}>{member.status}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex items-start gap-2 text-[11px] font-semibold leading-5 text-slate-500">
        <Sparkles size={12} className="mt-1 shrink-0 text-lime-300" />
        الترتيب يتحسن مع إنجاز المهام ووضوح البيانات.
      </div>
    </section>
  );
};

import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Database, Sparkles } from 'lucide-react';
import { STORAGE_KEY, TOTAL_DURATION, sprintDays } from './constants';
import {
  ExecutionKPI,
  ExecutionMilestone,
  HackathonState,
  PriorityAlert,
  ParticipantRecord,
  ReadinessBreakdown,
  ScenarioState,
  SimulationResult,
  TaskId,
} from './types';
import { HackathonHeader } from './components/HackathonHeader';
import { HackathonTaskBoard } from './components/HackathonTaskBoard';
import { HackathonCanvas } from './components/HackathonCanvas';
import { HackathonSidebar } from './components/HackathonSidebar';
import { ScenarioWarRoom } from './components/ScenarioWarRoom';
import { InvestorReadinessScore } from './components/InvestorReadinessScore';
import { ExecutionCommandCenter } from './components/ExecutionCommandCenter';
import { LeadershipBoard } from './components/LeadershipBoard';
import { LeadershipOnboarding } from './components/LeadershipOnboarding';

type OpportunityLite = {
  id: string;
  title: string;
  desc: string;
  pain: number;
};

const OPPORTUNITIES: OpportunityLite[] = [
  { id: 'agri-smart', title: 'تحويل الصحراء إلى سلة غذاء ذكية', desc: 'الاعتماد المرتفع على الاستيراد وندرة المياه يفتح مجالا لحلول زراعة ذكية ذات كفاءة تشغيلية عالية.', pain: 9.8 },
  { id: 'cooling-chain', title: 'الجيل القادم من سلاسل التبريد السيادية', desc: 'خسائر الأغذية والأدوية الحساسة في النقل ما زالت مرتفعة بسبب ضعف المراقبة اللحظية.', pain: 9.5 },
  { id: 'arab-health-genome', title: 'فك شفرة الصحة للمستقبل العربي', desc: 'غياب قواعد بيانات جينية عربية متخصصة يقلل دقة التشخيص والعلاج في أمراض متعددة.', pain: 9.4 },
  { id: 'regional-carbon', title: 'بورصة أرصدة الكربون الإقليمية', desc: 'تزايد الضغوط التشريعية لخفض الانبعاثات يتطلب منصة تداول محلية موثوقة وشفافة.', pain: 9.0 },
  { id: 'fractional-real-estate', title: 'التملك العقاري المجزأ عبر البلوكشين', desc: 'صعوبة دخول الأفراد إلى الأصول العقارية الكبيرة تخلق فرصة لنماذج ملكية مرنة وآمنة.', pain: 9.2 },
  { id: 'additive-manufacturing', title: 'ثورة التصنيع المضاف لقطع الغيار الصناعية', desc: 'تعطل سلاسل التوريد الخارجية يرفع الحاجة لإنتاج محلي سريع لقطع الغيار الحرجة.', pain: 9.5 },
  { id: 'pilgrim-ai', title: 'المساعد الرقمي فائق الذكاء لضيف الرحمن', desc: 'رحلات الحج والعمرة تحتاج إدارة شخصية لحظية تتجاوز وظائف الحجز التقليدية.', pain: 9.2 },
  { id: 'critical-ot-security', title: 'حماية البنية التحتية الحيوية من الهجمات المادية', desc: 'أنظمة OT الحيوية تحتاج حلول أمن مخصصة تمنع توقف الخدمات الأساسية.', pain: 9.7 },
  { id: 'sme-liquidity', title: 'سد فجوة السيولة النقدية للمنشآت الصغيرة والمتوسطة', desc: 'دورات الدفع الطويلة تخلق ضغطا نقديا حادا يتطلب أدوات تمويل ذكية قائمة على التدفقات.', pain: 9.6 },
  { id: 'future-workforce-sim', title: 'محاكاة المستقبل لتأهيل القوى العاملة', desc: 'الطلب السريع على المهارات الميدانية يتجاوز سرعة التدريب التقليدي في القطاعات الضخمة.', pain: 9.4 },
];

const LEADERSHIP_ONBOARDING_KEY = 'khotta_hackathon_leadership_onboarding_seen_v3';

const TASK_IDS: TaskId[] = sprintDays.flatMap((day) => day.tasks.map((task) => task.id));

const emptyTaskStatus = (): Record<TaskId, boolean> =>
  TASK_IDS.reduce((acc, id) => {
    acc[id] = false;
    return acc;
  }, {} as Record<TaskId, boolean>);

const createInitialState = (): HackathonState => ({
  pledged: true,
  startTime: Date.now(),
  currentStage: 1,
  taskStatus: emptyTaskStatus(),
  answers: {},
  selectedOpportunityId: '',
  intensityScore: 64,
  lastActivity: Date.now(),
  accomplished: false,
  scenario: { cac: 180, churn: 11, timeToRevenue: 5 },
});

const createParticipantStatus = (completedCount: number): Record<TaskId, boolean> =>
  TASK_IDS.reduce((acc, id, index) => {
    acc[id] = index < completedCount;
    return acc;
  }, {} as Record<TaskId, boolean>);

const PARTICIPANTS: ParticipantRecord[] = Array.from({ length: 25 }, (_, index) => {
  const names = [
    'عبدالله محمد',
    'سارة خالد',
    'عمر ناصر',
    'ليان أحمد',
    'فهد العتيبي',
    'نور الحربي',
    'يوسف سالم',
    'مها راشد',
    'خالد منصور',
    'ريم سلطان',
  ];
  const projects = ['Aqua Grid', 'ColdChain OS', 'Gene Bridge', 'CarbonX', 'RealToken', 'NanoFab', 'Nusuk AI', 'OT Sentinel', 'SME Flow', 'Skill Forge'];
  const completedCount = Math.min(TASK_IDS.length, 4 + ((index * 5) % TASK_IDS.length));

  return {
    id: index === 4 ? 'current-user' : `participant-${index + 1}`,
    name: names[index % names.length],
    project: projects[index % projects.length],
    avatar: `https://api.dicebear.com/9.x/adventurer/svg?seed=hackathon-${index + 1}`,
    group: `Group ${(index % 5) + 1}`,
    lastSeen: `${(index % 8) + 1}m`,
    status: index % 9 === 0 ? 'blocked' : index % 4 === 0 ? 'at-risk' : 'active',
    taskStatus: createParticipantStatus(completedCount),
    score: {
      idea: 62 + ((index * 7) % 34),
      success: 58 + ((index * 9) % 38),
      accuracy: 60 + ((index * 5) % 36),
    },
    adminFlags: [],
  };
});

const scoreSimulation = (scenario: ScenarioState): SimulationResult => {
  const sustainability = Math.max(0, Math.min(100, Math.round(96 - scenario.cac * 0.08 - scenario.churn * 1.4 - scenario.timeToRevenue * 2.1)));
  const successChance = Math.max(0, Math.min(100, Math.round(92 - scenario.cac * 0.07 - scenario.churn * 1.7 - scenario.timeToRevenue * 2.4)));
  const runwayStress = Math.max(0, Math.min(100, Math.round(28 + scenario.cac * 0.1 + scenario.churn * 1.6 + scenario.timeToRevenue * 1.8)));
  const ltvEstimate = Math.max(120, Math.round((1400 - scenario.cac * 1.4) * (1 - scenario.churn / 100)));
  const verdict: SimulationResult['verdict'] = successChance >= 74 ? 'stable' : successChance >= 52 ? 'watch' : 'critical';
  return { sustainability, successChance, runwayStress, ltvEstimate, verdict };
};

const formatRemaining = (ms: number): string => {
  const safe = Math.max(0, ms);
  const totalSeconds = Math.floor(safe / 1000);
  const hh = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
  const mm = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
  const ss = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
};

const isAnswerFilled = (value: unknown): boolean => {
  if (typeof value === 'string') return value.trim().length > 0;
  if (value && typeof value === 'object') {
    return Object.values(value as Record<string, unknown>).some((entry) => (typeof entry === 'string' ? entry.trim().length > 0 : Boolean(entry)));
  }
  return Boolean(value);
};

const HackathonView: React.FC = () => {
  const [state, setState] = useState<HackathonState>(createInitialState);
  const [query, setQuery] = useState('');
  const [openOpportunities, setOpenOpportunities] = useState(false);
  const [showLeadershipOnboarding, setShowLeadershipOnboarding] = useState(false);
  const [leadershipOnboardingStep, setLeadershipOnboardingStep] = useState(0);
  const [clock, setClock] = useState(Date.now());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { state?: HackathonState };
      if (parsed.state) {
        setState({
          ...createInitialState(),
          ...parsed.state,
          pledged: true,
          startTime: parsed.state.startTime ?? Date.now(),
        });
      }
    } catch {
      // Ignore invalid local cache.
    }
  }, []);

  useEffect(() => {
    setShowLeadershipOnboarding(localStorage.getItem(LEADERSHIP_ONBOARDING_KEY) !== 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ state }));
  }, [state]);

  useEffect(() => {
    const timer = window.setInterval(() => setClock(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const remainingMs = useMemo(() => {
    if (!state.startTime) return TOTAL_DURATION;
    return Math.max(0, TOTAL_DURATION - (clock - state.startTime));
  }, [clock, state.startTime]);

  const remainingTime = formatRemaining(remainingMs);
  const doneCount = TASK_IDS.filter((id) => state.taskStatus[id]).length;
  const progress = Math.round((doneCount / TASK_IDS.length) * 100);

  const filteredOpportunities = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return OPPORTUNITIES;
    return OPPORTUNITIES.filter((item) => item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q));
  }, [query]);

  const isStageComplete = (stage: number): boolean => {
    const day = sprintDays.find((entry) => entry.day === stage);
    if (!day) return false;
    return day.tasks.every((task) => state.taskStatus[task.id]);
  };

  const goToStage = (stage: number) => {
    if (stage < 1 || stage > 3) return;
    if (stage === 1 || isStageComplete(stage - 1)) {
      setState((prev) => ({ ...prev, currentStage: stage }));
    }
  };

  const updateAnswer = (id: TaskId, value: unknown) => {
    setState((prev) => {
      const nextAnswers = { ...prev.answers, [id]: value };
      const done = isAnswerFilled(value);
      const nextStatus = { ...prev.taskStatus, [id]: done };
      const dayComplete = sprintDays.find((d) => d.day === prev.currentStage)?.tasks.every((task) => nextStatus[task.id]);
      const canAdvance = dayComplete && prev.currentStage < 3;
      const nextStage = canAdvance ? prev.currentStage + 1 : prev.currentStage;
      const nextIntensity = Math.max(40, Math.min(100, Math.round(52 + (Object.values(nextStatus).filter(Boolean).length / TASK_IDS.length) * 48)));

      return {
        ...prev,
        answers: nextAnswers,
        taskStatus: nextStatus,
        currentStage: nextStage,
        intensityScore: nextIntensity,
        lastActivity: Date.now(),
      };
    });
  };

  const currentDay = sprintDays.find((day) => day.day === state.currentStage) ?? sprintDays[0];
  const canCompleteDossier = sprintDays[2].tasks.filter((task) => task.id !== 'dossier').every((task) => state.taskStatus[task.id]);

  const mentorMessage = useMemo(() => {
    if (state.currentStage === 1) return 'الوضوح أهم من الحماس. إن لم يكن الألم السوقي واضحا، كل ما بعده سيكون ضجيجا.';
    if (state.currentStage === 2) return 'القرارات التقنية يجب أن تدعم الإيراد مباشرة. أي أداة بلا أثر مالي = تكلفة مقنعة.';
    return 'التنفيذ هو الحكم النهائي. الخطط الجيدة التي لا تتحول إلى أرقام أسبوعية تعتبر فشلا مؤجلا.';
  }, [state.currentStage]);

  const simulation = useMemo(() => scoreSimulation(state.scenario), [state.scenario]);

  const readiness: ReadinessBreakdown = useMemo(() => {
    const day1 = sprintDays[0].tasks.filter((task) => state.taskStatus[task.id]).length / sprintDays[0].tasks.length;
    const day2 = sprintDays[1].tasks.filter((task) => state.taskStatus[task.id]).length / sprintDays[1].tasks.length;
    const day3 = sprintDays[2].tasks.filter((task) => state.taskStatus[task.id]).length / sprintDays[2].tasks.length;

    const marketClarity = Math.round(day1 * 100);
    const financialStrength = Math.max(20, Math.round(day2 * 100 - state.scenario.cac * 0.04));
    const executionQuality = Math.round(day3 * 100);
    const riskControl = Math.max(15, Math.round(100 - state.scenario.churn * 1.6 - state.scenario.timeToRevenue * 2.4));
    const overall = Math.round(marketClarity * 0.25 + financialStrength * 0.3 + executionQuality * 0.25 + riskControl * 0.2);

    return {
      marketClarity,
      financialStrength,
      executionQuality,
      riskControl,
      overall,
      reasons: [
        `وضوح السوق يعتمد حاليا على إنجاز اليوم الأول بنسبة ${Math.round(day1 * 100)}%.`,
        `المؤشر المالي يتأثر بـ CAC=${state.scenario.cac}$ و Churn=${state.scenario.churn}%.`,
        'جاهزية التنفيذ مرتبطة بإغلاق مهام اليوم الثالث بشكل كامل.',
        `إدارة المخاطر تتحسن كلما انخفض زمن أول إيراد (${state.scenario.timeToRevenue} أشهر حاليا).`,
      ],
    };
  }, [state.taskStatus, state.scenario]);

  const milestones: ExecutionMilestone[] = useMemo(
    () => [
      { week: 1, title: 'تثبيت مشكلة السوق مع 12 مقابلة عميل', owner: 'Founder', status: 'focus', kpi: '12 ICP Calls' },
      { week: 2, title: 'إطلاق نسخة MVP داخل شريحة واحدة', owner: 'Product', status: 'focus', kpi: 'Time-to-Value < 20m' },
      { week: 4, title: 'بناء قمع اكتساب أولي وقياس CAC الحقيقي', owner: 'Growth', status: 'at-risk', kpi: 'CAC <= 220$' },
      { week: 8, title: 'تحسين الاحتفاظ وربط التنبيهات بالتسرب', owner: 'Ops', status: 'stable', kpi: 'Churn < 12%' },
      { week: 12, title: 'التفاوض على شراكة توزيع استراتيجية', owner: 'BD', status: 'focus', kpi: '1 Signed Partner' },
      { week: 14, title: 'تجهيز غرفة بيانات المستثمر (Data Room)', owner: 'Finance', status: 'stable', kpi: 'Ready for DD' },
    ],
    [],
  );

  const kpis: ExecutionKPI[] = useMemo(
    () => [
      { label: 'Revenue Run-Rate', current: '$12.4k / MRR', target: '$50k / MRR' },
      { label: 'CAC Payback', current: '6.2 Months', target: '< 4 Months' },
      { label: 'Activation', current: '34%', target: '55%' },
    ],
    [],
  );

  const alerts: PriorityAlert[] = useMemo(
    () => [
      { level: 'high', title: 'ارتفاع CAC فوق العتبة', detail: 'فعّل قنوات اكتساب أقل تكلفة خلال 72 ساعة لتجنب ضغط المدرج.' },
      { level: 'medium', title: 'تباطؤ أول إيراد', detail: 'قلّص دورة البيع عبر عرض Pilot محدد بدلا من عقود واسعة في البداية.' },
    ],
    [],
  );

  const completeDossier = () => {
    if (!canCompleteDossier) return;
    setState((prev) => ({ ...prev, taskStatus: { ...prev.taskStatus, dossier: true }, accomplished: true, lastActivity: Date.now() }));
  };

  const resetOperation = () => {
    setState(createInitialState());
    setOpenOpportunities(false);
  };

  const selectedOpportunity = OPPORTUNITIES.find((item) => item.id === state.selectedOpportunityId);

  const closeLeadershipOnboarding = () => {
    localStorage.setItem(LEADERSHIP_ONBOARDING_KEY, 'true');
    setShowLeadershipOnboarding(false);
  };

  const goNextLeadershipOnboarding = () => {
    setLeadershipOnboardingStep((current) => {
      if (current >= 3) {
        localStorage.setItem(LEADERSHIP_ONBOARDING_KEY, 'true');
        setShowLeadershipOnboarding(false);
        return current;
      }

      return current + 1;
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 pb-12 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(59,130,246,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.18)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[380px] w-[380px] rounded-full bg-lime-500/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-[1700px] px-3 pb-8 pt-4 sm:px-6 sm:pt-8 lg:px-8">
        <HackathonHeader state={state} remainingTime={remainingTime} progress={progress} isStageComplete={isStageComplete} goToStage={goToStage} />

        <div className="mb-4 flex sm:mb-6 sm:justify-end">
          <button
            onClick={() => setOpenOpportunities(true)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-black text-blue-200 transition hover:bg-blue-500/20 sm:w-auto"
          >
            <Database size={14} className="text-blue-300" />
            فرص جاهزة (اختياري)
          </button>
        </div>

        <div className="mb-4 xl:hidden">
          <LeadershipBoard participants={PARTICIPANTS} currentUserId="current-user" taskIds={TASK_IDS} />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <main className="space-y-4 sm:space-y-6">
            {selectedOpportunity && (
              <motion.div className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-blue-300">Selected Opportunity</p>
                    <p className="mt-1 text-base font-black text-white sm:text-lg">{selectedOpportunity.title}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-300">{selectedOpportunity.desc}</p>
                  </div>
                  <span className="w-fit rounded-xl bg-lime-500/20 px-3 py-2 text-sm font-black text-lime-300">Pain {selectedOpportunity.pain}</span>
                </div>
              </motion.div>
            )}

            <HackathonTaskBoard
              currentDay={currentDay}
              state={state}
              mentorMessage={mentorMessage}
              onUpdateAnswer={updateAnswer}
              onCompleteDossier={completeDossier}
              canCompleteDossier={canCompleteDossier}
              onReset={resetOperation}
            />

            <ScenarioWarRoom
              scenario={state.scenario}
              result={simulation}
              unlocked={isStageComplete(1)}
              onChange={(next) => setState((prev) => ({ ...prev, scenario: { ...prev.scenario, ...next }, lastActivity: Date.now() }))}
            />

            <InvestorReadinessScore breakdown={readiness} />
            <ExecutionCommandCenter unlocked={isStageComplete(3)} milestones={milestones} kpis={kpis} alerts={alerts} />
            <HackathonCanvas state={state} />

            {state.accomplished && (
              <motion.div className="rounded-2xl border border-lime-400/30 bg-lime-500/10 p-4 sm:p-5" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                <p className="text-xs font-black uppercase tracking-widest text-lime-300">Mission Accomplished</p>
                <p className="mt-2 text-base font-black text-white sm:text-lg">تم إغلاق التحدي بنجاح. جاهز لتحويل هذه الخطة إلى عرض استثماري تنفيذي.</p>
              </motion.div>
            )}
          </main>

          <aside className="hidden xl:sticky xl:top-6 xl:block xl:self-start">
            <LeadershipBoard participants={PARTICIPANTS} currentUserId="current-user" taskIds={TASK_IDS} />
          </aside>
        </div>
      </div>

      <AnimatePresence>
        {openOpportunities && (
          <>
            <motion.button
              type="button"
              aria-label="إغلاق لوحة الفرص"
              className="fixed inset-0 z-[209] bg-slate-950/85 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenOpportunities(false)}
            />
            <motion.div
              className="fixed inset-x-3 bottom-3 z-[210] md:inset-x-auto md:left-4 md:w-[min(420px,calc(100vw-2rem))]"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              style={{ top: 'max(84px, env(safe-area-inset-top))' }}
            >
              <HackathonSidebar
                compact
                opportunities={filteredOpportunities}
                selectedId={state.selectedOpportunityId}
                query={query}
                onQueryChange={setQuery}
                onClose={() => setOpenOpportunities(false)}
                onClearSelection={() =>
                  setState((prev) => ({
                    ...prev,
                    selectedOpportunityId: '',
                    lastActivity: Date.now(),
                  }))
                }
                onSelect={(item: OpportunityLite) =>
                  setState((prev) => ({
                    ...prev,
                    selectedOpportunityId: item.id,
                    answers: { ...prev.answers, target: `${item.title}\n\n${item.desc}` },
                    taskStatus: { ...prev.taskStatus, target: true },
                    lastActivity: Date.now(),
                  }))
                }
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLeadershipOnboarding && (
          <LeadershipOnboarding step={leadershipOnboardingStep} onNext={goNextLeadershipOnboarding} onSkip={closeLeadershipOnboarding} />
        )}
      </AnimatePresence>

      {!openOpportunities && (
        <button
          onClick={() => setOpenOpportunities(true)}
          className="fixed bottom-4 left-4 z-[205] inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 sm:bottom-6 sm:left-6 sm:h-12 sm:w-12"
          aria-label="open opportunities"
        >
          <Sparkles size={17} className="sm:h-[18px] sm:w-[18px]" />
        </button>
      )}

      {openOpportunities && (
        <button
          onClick={() => setOpenOpportunities(false)}
          className="fixed left-[min(440px,calc(100vw-1.5rem))] top-[120px] z-[215] hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-500 md:inline-flex"
          aria-label="collapse opportunities"
        >
          <ArrowLeft size={16} />
        </button>
      )}
    </div>
  );
};

export default HackathonView;


import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Search, 
  TrendingUp, 
  AlertCircle, 
  Lightbulb, 
  ChevronLeft,
  Activity,
  Zap,
  BrainCircuit,
  DollarSign,
  LayoutGrid,
  Sparkles,
  Target,
  FlaskConical,
  Sprout,
  HeartPulse,
  GraduationCap,
  Hammer,
  Wallet,
  Globe,
  Truck,
  Building2,
  Trash2,
  ChevronRight
} from 'lucide-react';

// ─── Data & Types ──────────────────────────────────────────────────────────

interface Opportunity {
  type: string;
  name: string;
  model: string;
}

interface Problem {
  id: string;
  title: string;
  desc: string;
  pain: number;
  money: number;
  freq: number;
  gap: number;
  opps: Opportunity[];
}

interface SubSector {
  id: string;
  name: string;
  count: number;
  problems: Problem[];
}

interface Sector {
  id: string;
  icon: any;
  name: string;
  count: number;
  color: string;
  subs: SubSector[];
}

const DATA: Sector[] = [
  {
    id: 'health', icon: HeartPulse, name: 'الصحة', count: 1240, color: 'rose',
    subs: [
      {
        id: 'diag', name: 'التشخيص الطبي', count: 87, problems: [
          {
            id: 'p1', title: 'تأخر حجز المواعيد الطبية', desc: 'المرضى يعانون من انتظار أسابيع لحجز موعد مع طبيب متخصص، مما يؤخر التشخيص.', pain: 9, money: 8, freq: 9, gap: 7,
            opps: [
              { type: 'SaaS', name: 'Smart Clinic Scheduler', model: 'اشتراك شهري للعيادات' },
              { type: 'Marketplace', name: 'Doctor Booking Network', model: 'عمولة لكل حجز' },
              { type: 'AI Tool', name: 'Waitlist Optimizer AI', model: 'SaaS B2B للمستشفيات' }
            ]
          },
          {
            id: 'p2', title: 'أخطاء التشخيص الأولي', desc: 'تشخيص خاطئ في الزيارة الأولى بسبب ضعف الأنظمة وقِصَر وقت الطبيب.', pain: 10, money: 9, freq: 8, gap: 9,
            opps: [
              { type: 'AI Diagnostic', name: 'MedAI Assist', model: 'لايسنس للمستشفيات' },
              { type: 'Decision Tool', name: 'Symptom Intelligence', model: 'SaaS للأطباء' }
            ]
          },
          {
            id: 'p3', title: 'غياب السجل الطبي الموحد', desc: 'كل مستشفى يملك سجله الخاص، والمريض يضطر لإعادة جميع التحاليل عند انتقاله.', pain: 8, money: 7, freq: 7, gap: 8,
            opps: [
              { type: 'Platform', name: 'Unified Health Record', model: 'اشتراك حكومي/مؤسسي' },
              { type: 'API', name: 'MedData Bridge', model: 'رسوم API لكل استعلام' }
            ]
          },
        ]
      },
      {
        id: 'mental', name: 'الصحة النفسية', count: 63, problems: [
          {
            id: 'p4', title: 'صعوبة الوصول للمعالج النفسي', desc: 'ندرة المعالجين النفسيين وارتفاع التكلفة يمنع كثيرين من الحصول على الدعم.', pain: 9, money: 7, freq: 8, gap: 8,
            opps: [
              { type: 'Telehealth', name: 'MindConnect', model: 'اشتراك مباشر للمستخدم' },
              { type: 'AI Companion', name: 'TherapyBot', model: 'Freemium + Pro' }
            ]
          },
        ]
      },
      {
        id: 'pharma', name: 'الأدوية وسلاسل التوريد', count: 45, problems: [
          {
            id: 'p5', title: 'نقص الأدوية في الصيدليات', desc: 'عدم توازن بين العرض والطلب يؤدي لأزمات دورية في توفر الأدوية الأساسية.', pain: 9, money: 9, freq: 6, gap: 7,
            opps: [
              { type: 'Supply Chain AI', name: 'PharmaFlow', model: 'SaaS للموردين والصيدليات' },
              { type: 'Marketplace', name: 'MedStock Exchange', model: 'عمولة على المعاملات' }
            ]
          },
        ]
      },
    ]
  },
  {
    id: 'edu', icon: GraduationCap, name: 'التعليم', count: 980, color: 'blue',
    subs: [
      {
        id: 'k12', name: 'التعليم الأساسي', count: 120, problems: [
          {
            id: 'p6', title: 'فجوة الفهم بين الطلاب', desc: 'معلم واحد لـ40 طالب، يستحيل تخصيص التعليم لكل مستوى على حدة.', pain: 8, money: 6, freq: 9, gap: 7,
            opps: [
              { type: 'EdTech AI', name: 'AdaptLearn', model: 'اشتراك للمدارس' },
              { type: 'Tool', name: 'Learning Gap Detector', model: 'SaaS B2B' }
            ]
          },
        ]
      },
      {
        id: 'higher', name: 'التعليم العالي', count: 95, problems: [
          {
            id: 'p7', title: 'ضعف ربط الجامعة بسوق العمل', desc: 'خريجون بمهارات لا تتطابق مع احتياجات السوق الفعلية.', pain: 8, money: 8, freq: 7, gap: 9,
            opps: [
              { type: 'Platform', name: 'SkillBridge', model: 'عمولة من الشركات' },
              { type: 'Analytics', name: 'MarketSkills AI', model: 'تقارير B2B' }
            ]
          },
        ]
      },
    ]
  },
  {
    id: 'energy', icon: Zap, name: 'الطاقة', count: 760, color: 'amber',
    subs: [
      {
        id: 'solar', name: 'الطاقة الشمسية', count: 58, problems: [
          {
            id: 'p8', title: 'ارتفاع تكلفة تركيب الألواح الشمسية', desc: 'رغم انخفاض الأسعار عالميًا، التركيب والصيانة لا يزالان مكلفَيْن للأفراد.', pain: 7, money: 9, freq: 5, gap: 7,
            opps: [
              { type: 'Financing', name: 'SolarLease', model: 'إيجار الألواح شهريًا' },
              { type: 'Marketplace', name: 'SolarConnect', model: 'عمولة على التركيب' }
            ]
          },
        ]
      },
    ]
  },
  {
    id: 'agri', icon: Sprout, name: 'الزراعة', count: 890, color: 'emerald',
    subs: [
      {
        id: 'soil', name: 'صحة التربة', count: 74, problems: [
          {
            id: 'p9', title: 'تدهور خصوبة التربة', desc: 'الاستخدام المفرط للأسمدة الكيميائية يدمر التربة على المدى البعيد.', pain: 9, money: 8, freq: 6, gap: 8,
            opps: [
              { type: 'AI SaaS', name: 'Soil Intelligence', model: 'اشتراك للمزارعين' },
              { type: 'Marketplace', name: 'Agri Input Market', model: 'عمولة على المشتريات' },
              { type: 'Analytics', name: 'Yield Predictor AI', model: 'تقارير B2B' }
            ]
          },
        ]
      },
    ]
  },
  {
    id: 'fintech', icon: Wallet, name: 'الخدمات المالية', count: 1100, color: 'indigo',
    subs: [
      {
        id: 'sme', name: 'تمويل الشركات الصغيرة', count: 88, problems: [
          {
            id: 'p10', title: 'رفض القروض البنكية للمشاريع الناشئة', desc: 'البنوك التقليدية ترفض تمويل الشركات الصغيرة لغياب الضمانات.', pain: 10, money: 10, freq: 8, gap: 8,
            opps: [
              { type: 'Fintech', name: 'AltFund', model: 'رسوم على التمويل %' },
              { type: 'Credit AI', name: 'ScoreWise', model: 'اشتراك شهري' },
              { type: 'Platform', name: 'PeerLend', model: 'عمولة بين المقرضين' }
            ]
          },
        ]
      },
    ]
  },
  {
    id: 'transport', icon: Truck, name: 'النقل واللوجستيات', count: 650, color: 'slate',
    subs: [
      {
        id: 'logistics', name: 'توصيل الميل الأخير', count: 96, problems: [
          {
            id: 'p11', title: 'عدم كفاءة التوصيل آخر ميل', desc: 'آخر كيلومتر في سلسلة التوصيل هو الأغلى والأكثر تعقيدًا.', pain: 8, money: 9, freq: 9, gap: 7,
            opps: [
              { type: 'Routing AI', name: 'LastMile AI', model: 'SaaS للشركات' },
              { type: 'Network', name: 'MicroHub Network', model: 'اشتراك + حصة' }
            ]
          },
        ]
      },
    ]
  },
  {
    id: 'govt', icon: Building2, name: 'الحكومة والبلديات', count: 540, color: 'zinc',
    subs: [
      {
        id: 'eservice', name: 'الخدمات الرقمية', count: 67, problems: [
          {
            id: 'p12', title: 'تعقيد الإجراءات الحكومية', desc: 'المواطنون يضيعون ساعات في إنجاز معاملات يمكن أتمتتها بالكامل.', pain: 8, money: 6, freq: 9, gap: 8,
            opps: [
              { type: 'GovTech', name: 'ProcedureAI', model: 'مشاريع حكومية' },
              { type: 'Platform', name: 'CitizenFlow', model: 'SaaS للبلديات' }
            ]
          },
        ]
      },
    ]
  },
  {
    id: 'climate', icon: Globe, name: 'البيئة والمناخ', count: 480, color: 'teal',
    subs: [
      {
        id: 'waste', name: 'إدارة النفايات', count: 52, problems: [
          {
            id: 'p13', title: 'غياب بنية تحتية لإعادة التدوير', desc: 'معظم النفايات القابلة للتدوير تذهب للمكبّات لغياب السلاسل اللوجستية.', pain: 7, money: 7, freq: 8, gap: 8,
            opps: [
              { type: 'CleanTech', name: 'RecycleRoute', model: 'عقود بلدية' },
              { type: 'Marketplace', name: 'ScrapConnect', model: 'عمولة على المعاملات' }
            ]
          },
        ]
      },
    ]
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const ScoreBadge = ({ label, score, colorClass }: { label: string, score: number, colorClass: string }) => {
  const getWidth = (s: number) => `${s * 10}%`;
  return (
    <div className="flex flex-col gap-1 min-w-[60px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold text-gray-400">{label}</span>
        <span className={`text-[11px] font-black ${colorClass}`}>{score}/10</span>
      </div>
      <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: getWidth(score) }}
          className={`h-full ${colorClass.replace('text-', 'bg-')}`}
        />
      </div>
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────

export const ProblemOpportunityEngine: React.FC = () => {
  const [view, setView] = useState<'sectors' | 'subs' | 'problems' | 'opportunity'>('sectors');
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
  const [selectedSub, setSelectedSub] = useState<SubSector | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const stats = useMemo(() => {
    const totalProblems = DATA.reduce((a, s) => a + s.count, 0);
    const totalOpps = DATA.reduce((a, s) => a + s.subs.reduce((b, sub) => b + sub.problems.reduce((c, p) => c + p.opps.length, 0), 0), 0);
    return {
      sectors: DATA.length,
      problems: totalProblems,
      opportunities: totalOpps
    };
  }, []);

  const resetToSectors = () => {
    setSelectedSector(null);
    setSelectedSub(null);
    setSelectedProblem(null);
    setView('sectors');
  };

  const goToSubs = (sector: Sector) => {
    setSelectedSector(sector);
    setSelectedSub(null);
    setSelectedProblem(null);
    setView('subs');
  };

  const goToProblems = (sub: SubSector) => {
    setSelectedSub(sub);
    setSelectedProblem(null);
    setView('problems');
  };

  const goToOpportunity = (problem: Problem) => {
    setSelectedProblem(problem);
    setView('opportunity');
  };

  // ─── Renderers ─────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 lg:p-8 font-tajawal">
      {/* Header & Stats */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-200">
              <BrainCircuit className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900 tracking-tight">نظام ذكاء المشاكل والفرص</h1>
              <p className="text-sm font-medium text-gray-500">من رصد الفجوات إلى بناء الحلول المربحة</p>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            <div className="bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 min-w-[140px]">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><LayoutGrid size={18} /></div>
              <div>
                <div className="text-lg font-black text-gray-900">{stats.sectors}</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">قطاعاً</div>
              </div>
            </div>
            <div className="bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 min-w-[140px]">
              <div className="p-2 bg-rose-50 text-rose-600 rounded-xl"><AlertCircle size={18} /></div>
              <div>
                <div className="text-lg font-black text-gray-900">{stats.problems.toLocaleString()}</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">مشكلة مرصودة</div>
              </div>
            </div>
            <div className="bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 min-w-[140px]">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-xl"><Sparkles size={18} /></div>
              <div>
                <div className="text-lg font-black text-gray-900">{stats.opportunities}+</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">فرصة استثمارية</div>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-8 bg-white/50 backdrop-blur-md p-2 rounded-2xl border border-white/60 w-fit">
          <button 
            onClick={resetToSectors}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${view === 'sectors' ? 'bg-primary-600 text-white shadow-md' : 'text-gray-500 hover:bg-white hover:text-primary-600'}`}
          >
            القطاعات
          </button>
          {selectedSector && (
            <>
              <ChevronLeft size={14} className="text-gray-300" />
              <button 
                onClick={() => goToSubs(selectedSector)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${view === 'subs' ? 'bg-primary-600 text-white shadow-md' : 'text-gray-500 hover:bg-white hover:text-primary-600'}`}
              >
                {selectedSector.name}
              </button>
            </>
          )}
          {selectedSub && (
            <>
              <ChevronLeft size={14} className="text-gray-300" />
              <button 
                onClick={() => goToProblems(selectedSub)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${view === 'problems' ? 'bg-primary-600 text-white shadow-md' : 'text-gray-500 hover:bg-white hover:text-primary-600'}`}
              >
                {selectedSub.name}
              </button>
            </>
          )}
          {selectedProblem && (
            <>
              <ChevronLeft size={14} className="text-gray-300" />
              <div className="px-4 py-1.5 bg-purple-600 text-white rounded-xl text-xs font-bold shadow-md">
                تحليل الفرص
              </div>
            </>
          )}
        </div>

        {/* Content Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {view === 'sectors' && (
              <motion.div 
                key="sectors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {DATA.map((sector) => (
                  <button
                    key={sector.id}
                    onClick={() => goToSubs(sector)}
                    className="group bg-white p-6 rounded-[2rem] border border-gray-100 hover:border-primary-100 shadow-sm hover:shadow-xl hover:shadow-primary-100/20 transition-all duration-300 flex flex-col items-start gap-4 text-right relative overflow-hidden"
                  >
                    <div className={`p-4 rounded-2xl bg-${sector.color}-50 text-${sector.color}-600 group-hover:scale-110 transition-transform duration-500`}>
                      <sector.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">{sector.name}</h3>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{sector.count.toLocaleString()} مشكلة مرصودة</p>
                    </div>
                    {/* Heat bar */}
                    <div className="w-full h-1.5 bg-gray-50 rounded-full mt-4 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(sector.count / 1240) * 100}%` }}
                        className={`h-full bg-${sector.color}-500/60 rounded-full`}
                      />
                    </div>
                    <ChevronLeft className="absolute bottom-8 left-8 text-gray-100 group-hover:text-primary-200 group-hover:translate-x-[-8px] transition-all" size={24} />
                  </button>
                ))}
              </motion.div>
            )}

            {view === 'subs' && selectedSector && (
              <motion.div 
                key="subs"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {selectedSector.subs.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => goToProblems(sub)}
                    className="group bg-white p-5 rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-lg transition-all flex items-center gap-4 text-right"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 group-hover:rotate-12 transition-transform">
                      <Target size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-900">{sub.name}</h3>
                      <p className="text-[11px] font-medium text-gray-400">رصد {sub.count} نقطة ألم</p>
                    </div>
                    <div className="text-primary-200 group-hover:translate-x-[-4px] transition-transform">
                      <ChevronLeft size={20} />
                    </div>
                  </button>
                ))}
              </motion.div>
            )}

            {view === 'problems' && selectedSub && (
              <motion.div 
                key="problems"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                {selectedSub.problems.map((problem) => (
                  <div
                    key={problem.id}
                    className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="p-1.5 bg-rose-50 text-rose-500 rounded-lg"><AlertCircle size={14} /></span>
                          <h3 className="text-base font-black text-gray-900">{problem.title}</h3>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">{problem.desc}</p>
                        
                        <div className="flex gap-2 flex-wrap">
                          <button 
                            onClick={() => goToOpportunity(problem)}
                            className="px-6 py-2.5 bg-primary-600 text-white rounded-xl text-xs font-bold hover:bg-primary-700 shadow-lg shadow-primary-100 transition-all flex items-center gap-2 group/btn"
                          >
                            <span>استخراج الفرص الاستثمارية</span>
                            <Sparkles size={14} className="group-hover/btn:rotate-12 transition-transform" />
                          </button>
                          <button className="px-6 py-2.5 bg-white border border-gray-100 text-gray-600 rounded-xl text-xs font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                            <span>تحليل الفجوة السوقية</span>
                            <TrendingUp size={14} />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-4 lg:min-w-[140px] p-4 lg:p-0 border-t lg:border-t-0 border-gray-50 mt-4 lg:mt-0 pt-4 lg:pt-0">
                        <ScoreBadge label="معدل الألم" score={problem.pain} colorClass="text-rose-500" />
                        <ScoreBadge label="قابلية الربح" score={problem.money} colorClass="text-emerald-500" />
                        <ScoreBadge label="تكرار المشكلة" score={problem.freq} colorClass="text-blue-500" />
                        <ScoreBadge label="فجوة الحل" score={problem.gap} colorClass="text-amber-500" />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {view === 'opportunity' && selectedProblem && (
              <motion.div 
                key="opportunity"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden"
              >
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 pb-10 border-b border-gray-50">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
                        <span>{selectedSector?.name}</span>
                        <ChevronLeft size={10} />
                        <span>{selectedSub?.name}</span>
                      </div>
                      <h2 className="text-2xl font-black text-gray-900 mb-4">{selectedProblem.title}</h2>
                      <p className="text-base text-gray-500 leading-relaxed max-w-3xl">{selectedProblem.desc}</p>
                    </div>

                    <div className="flex gap-6">
                      <ScoreBadge label="Pain" score={selectedProblem.pain} colorClass="text-rose-500" />
                      <ScoreBadge label="Profit" score={selectedProblem.money} colorClass="text-emerald-500" />
                      <ScoreBadge label="Hole" score={selectedProblem.gap} colorClass="text-amber-500" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-2 bg-primary-100 text-primary-600 rounded-xl"><Lightbulb size={20} /></div>
                      <h3 className="text-lg font-black text-gray-900">الفرص الناتجة عن تحليل الثغرات ({selectedProblem.opps.length})</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedProblem.opps.map((opp, i) => (
                        <div key={i} className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:border-primary-200 transition-all group/opp">
                          <span className="inline-block px-3 py-1 bg-white rounded-full text-[10px] font-black text-primary-600 uppercase tracking-widest mb-4 shadow-sm">{opp.type}</span>
                          <h4 className="text-lg font-black text-gray-900 mb-2">{opp.name}</h4>
                          <p className="text-xs font-medium text-gray-500 mb-6">{opp.model}</p>
                          <button className="w-full py-3.5 bg-white border border-gray-200 rounded-2xl text-xs font-black text-gray-800 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all shadow-sm flex items-center justify-center gap-2 group/btn">
                            <span>تحويل الفرصة إلى مشروع</span>
                            <ArrowRight size={14} className="group-hover/btn:translate-x-[-4px] transition-transform rotate-180" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

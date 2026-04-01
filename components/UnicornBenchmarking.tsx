
import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  Sparkles,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  Target,
  Zap,
  BrainCircuit,
  ArrowUpRight,
  RefreshCw,
  Download,
  ChevronDown,
  Info,
  Star,
  Award,
  Flame,
  Layers,
  DollarSign,
  Users,
  Activity,
  PieChart,
  Minus,
} from 'lucide-react';

// ─────────────────────────────────────────────
//  BENCHMARK DATA LIBRARY
// ─────────────────────────────────────────────
interface BenchmarkRange {
  min: number;
  avg: number;
  max: number;
  unit: string;
  higherIsBetter: boolean;
}

interface SectorBenchmark {
  sector: string;
  sectorAr: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  icon: React.ElementType;
  metrics: Record<string, BenchmarkRange>;
}

const BENCHMARK_LIBRARY: Record<string, SectorBenchmark> = {
  saas: {
    sector: 'SaaS',
    sectorAr: 'البرمجيات كخدمة',
    color: '#6366f1',
    gradientFrom: '#4f46e5',
    gradientTo: '#7c3aed',
    icon: Layers,
    metrics: {
      revenueGrowth:    { min: 20,  avg: 85,  max: 300, unit: '%/yr',  higherIsBetter: true  },
      grossMargin:      { min: 50,  avg: 72,  max: 90,  unit: '%',     higherIsBetter: true  },
      cac:              { min: 50,  avg: 300, max: 800, unit: '$',     higherIsBetter: false },
      ltv:              { min: 500, avg: 2400,max: 8000,unit: '$',     higherIsBetter: true  },
      burnRate:         { min: 30,  avg: 150, max: 500, unit: 'k$/mo', higherIsBetter: false },
      churnRate:        { min: 1,   avg: 5,   max: 12,  unit: '%/mo',  higherIsBetter: false },
      marketSize:       { min: 100, avg: 800, max: 5000,unit: '$M',    higherIsBetter: true  },
      nrrRetention:     { min: 95,  avg: 110, max: 140, unit: '%',     higherIsBetter: true  },
    },
  },
  ecommerce: {
    sector: 'E-Commerce',
    sectorAr: 'التجارة الإلكترونية',
    color: '#f59e0b',
    gradientFrom: '#d97706',
    gradientTo: '#f59e0b',
    icon: DollarSign,
    metrics: {
      revenueGrowth:    { min: 15,  avg: 55,  max: 200, unit: '%/yr',  higherIsBetter: true  },
      grossMargin:      { min: 20,  avg: 38,  max: 60,  unit: '%',     higherIsBetter: true  },
      cac:              { min: 10,  avg: 45,  max: 120, unit: '$',     higherIsBetter: false },
      ltv:              { min: 50,  avg: 250, max: 900, unit: '$',     higherIsBetter: true  },
      burnRate:         { min: 20,  avg: 100, max: 400, unit: 'k$/mo', higherIsBetter: false },
      churnRate:        { min: 5,   avg: 20,  max: 40,  unit: '%/yr',  higherIsBetter: false },
      marketSize:       { min: 200, avg: 1200,max: 8000,unit: '$M',    higherIsBetter: true  },
      nrrRetention:     { min: 80,  avg: 92,  max: 105, unit: '%',     higherIsBetter: true  },
    },
  },
  fintech: {
    sector: 'FinTech',
    sectorAr: 'التقنية المالية',
    color: '#10b981',
    gradientFrom: '#059669',
    gradientTo: '#10b981',
    icon: Activity,
    metrics: {
      revenueGrowth:    { min: 30,  avg: 100, max: 400, unit: '%/yr',  higherIsBetter: true  },
      grossMargin:      { min: 40,  avg: 60,  max: 80,  unit: '%',     higherIsBetter: true  },
      cac:              { min: 30,  avg: 180, max: 600, unit: '$',     higherIsBetter: false },
      ltv:              { min: 300, avg: 1800,max: 6000,unit: '$',     higherIsBetter: true  },
      burnRate:         { min: 50,  avg: 200, max: 700, unit: 'k$/mo', higherIsBetter: false },
      churnRate:        { min: 2,   avg: 8,   max: 18,  unit: '%/yr',  higherIsBetter: false },
      marketSize:       { min: 500, avg: 2000,max:10000,unit: '$M',    higherIsBetter: true  },
      nrrRetention:     { min: 90,  avg: 115, max: 145, unit: '%',     higherIsBetter: true  },
    },
  },
  marketplace: {
    sector: 'Marketplace',
    sectorAr: 'المنصات والسوق',
    color: '#ec4899',
    gradientFrom: '#db2777',
    gradientTo: '#ec4899',
    icon: Users,
    metrics: {
      revenueGrowth:    { min: 25,  avg: 90,  max: 350, unit: '%/yr',  higherIsBetter: true  },
      grossMargin:      { min: 30,  avg: 55,  max: 75,  unit: '%',     higherIsBetter: true  },
      cac:              { min: 20,  avg: 120, max: 400, unit: '$',     higherIsBetter: false },
      ltv:              { min: 100, avg: 800, max: 3000,unit: '$',     higherIsBetter: true  },
      burnRate:         { min: 40,  avg: 180, max: 600, unit: 'k$/mo', higherIsBetter: false },
      churnRate:        { min: 3,   avg: 10,  max: 25,  unit: '%/yr',  higherIsBetter: false },
      marketSize:       { min: 300, avg: 1500,max: 9000,unit: '$M',    higherIsBetter: true  },
      nrrRetention:     { min: 85,  avg: 105, max: 130, unit: '%',     higherIsBetter: true  },
    },
  },
};

// ─────────────────────────────────────────────
//  MOCK USER PLAN DATA (simulates AI extraction)
// ─────────────────────────────────────────────
const MOCK_PLAN_METRICS: Record<string, Record<string, number>> = {
  saas:        { revenueGrowth: 62,  grossMargin: 68,  cac: 380, ltv: 1900, burnRate: 120, churnRate: 6.5, marketSize: 450, nrrRetention: 108 },
  ecommerce:   { revenueGrowth: 40,  grossMargin: 32,  cac: 55,  ltv: 180,  burnRate: 80,  churnRate: 22,  marketSize: 800, nrrRetention: 90 },
  fintech:     { revenueGrowth: 85,  grossMargin: 55,  cac: 220, ltv: 1400, burnRate: 180, churnRate: 10,  marketSize: 1200,nrrRetention: 112 },
  marketplace: { revenueGrowth: 70,  grossMargin: 48,  cac: 150, ltv: 600,  burnRate: 140, churnRate: 12,  marketSize: 900, nrrRetention: 100 },
};

// ─────────────────────────────────────────────
//  METRIC LABELS (Arabic)
// ─────────────────────────────────────────────
const METRIC_LABELS: Record<string, { ar: string; icon: React.ElementType; color: string }> = {
  revenueGrowth: { ar: 'معدل نمو الإيرادات',    icon: TrendingUp,    color: '#6366f1' },
  grossMargin:   { ar: 'هامش الربح الإجمالي',   icon: PieChart,      color: '#10b981' },
  cac:           { ar: 'تكلفة اكتساب العميل',   icon: Target,        color: '#f59e0b' },
  ltv:           { ar: 'القيمة الدائمة للعميل', icon: Star,          color: '#ec4899' },
  burnRate:      { ar: 'معدل الحرق النقدي',      icon: Flame,         color: '#ef4444' },
  churnRate:     { ar: 'معدل تسرب العملاء',      icon: TrendingDown,  color: '#f97316' },
  marketSize:    { ar: 'حجم السوق المستهدف',     icon: Globe,         color: '#0ea5e9' },
  nrrRetention:  { ar: 'معدل الاحتجاز الصافي',  icon: Activity,      color: '#8b5cf6' },
};

// ─────────────────────────────────────────────
//  SCORE COMPUTATION
// ─────────────────────────────────────────────
const computeMetricScore = (
  value: number,
  benchmark: BenchmarkRange,
): { score: number; percentile: number; status: 'strong' | 'moderate' | 'weak' } => {
  const { min, avg, max, higherIsBetter } = benchmark;

  let normalized: number;
  if (higherIsBetter) {
    normalized = Math.min(1, Math.max(0, (value - min) / (max - min)));
  } else {
    normalized = Math.min(1, Math.max(0, (max - value) / (max - min)));
  }

  const score = Math.round(normalized * 100);
  // percentile vs avg
  let percentile: number;
  if (higherIsBetter) {
    percentile = value >= max ? 95 : value >= avg ? 50 + Math.round(((value - avg) / (max - avg)) * 45) : Math.round(((value - min) / (avg - min)) * 50);
  } else {
    percentile = value <= min ? 95 : value <= avg ? 50 + Math.round(((avg - value) / (avg - min)) * 45) : Math.round(((max - value) / (max - avg)) * 50);
  }
  percentile = Math.max(5, Math.min(95, percentile));

  const status: 'strong' | 'moderate' | 'weak' = score >= 65 ? 'strong' : score >= 35 ? 'moderate' : 'weak';
  return { score, percentile, status };
};

// ─────────────────────────────────────────────
//  RADAR CHART (pure SVG, no library)
// ─────────────────────────────────────────────
interface RadarChartProps {
  userScores: number[];
  labels: string[];
  color: string;
  animateIn: boolean;
}

const RadarChart: React.FC<RadarChartProps> = ({ userScores, labels, color, animateIn }) => {
  const size = 300;
  const cx = size / 2;
  const cy = size / 2;
  const maxRadius = 110;
  const n = labels.length;

  const toXY = (angle: number, r: number) => ({
    x: cx + r * Math.sin(angle),
    y: cy - r * Math.cos(angle),
  });

  const angleStep = (2 * Math.PI) / n;

  // Rings
  const rings = [0.25, 0.5, 0.75, 1];

  // Benchmark polygon (avg baseline = 50%)
  const benchmarkPoints = labels.map((_, i) => toXY(i * angleStep, maxRadius * 0.5));
  const benchmarkPath = benchmarkPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  // User polygon
  const userPoints = userScores.map((s, i) => toXY(i * angleStep, maxRadius * (s / 100)));
  const userPath = userPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[300px] mx-auto">
      <defs>
        <radialGradient id="userGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0.08" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Grid rings */}
      {rings.map((r, ri) => {
        const pts = labels.map((_, i) => toXY(i * angleStep, maxRadius * r));
        const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
        return (
          <path
            key={ri}
            d={path}
            fill="none"
            stroke="rgba(148,163,184,0.2)"
            strokeWidth={1}
          />
        );
      })}

      {/* Axis lines */}
      {labels.map((_, i) => {
        const outer = toXY(i * angleStep, maxRadius);
        return (
          <line
            key={i}
            x1={cx} y1={cy}
            x2={outer.x} y2={outer.y}
            stroke="rgba(148,163,184,0.2)"
            strokeWidth={1}
          />
        );
      })}

      {/* Benchmark polygon */}
      <path
        d={benchmarkPath}
        fill="rgba(148,163,184,0.06)"
        stroke="rgba(148,163,184,0.5)"
        strokeWidth={1.5}
        strokeDasharray="4 3"
      />

      {/* User polygon */}
      <path
        d={userPath}
        fill="url(#userGrad)"
        stroke={color}
        strokeWidth={2.5}
        strokeLinejoin="round"
        filter="url(#glow)"
        style={{
          transition: 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          opacity: animateIn ? 1 : 0,
          transform: animateIn ? 'scale(1)' : 'scale(0)',
          transformOrigin: `${cx}px ${cy}px`,
        }}
      />

      {/* User dots */}
      {userPoints.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={4}
          fill={color}
          stroke="white"
          strokeWidth={2}
          style={{
            transition: `all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.1}s`,
            opacity: animateIn ? 1 : 0,
          }}
        />
      ))}

      {/* Labels */}
      {labels.map((lbl, i) => {
        const pos = toXY(i * angleStep, maxRadius + 22);
        const anchor = pos.x < cx - 10 ? 'end' : pos.x > cx + 10 ? 'start' : 'middle';
        return (
          <text
            key={i}
            x={pos.x}
            y={pos.y}
            textAnchor={anchor}
            dominantBaseline="central"
            fontSize="9"
            fontWeight="700"
            fill="rgb(100,116,139)"
            fontFamily="'IBM Plex Sans Arabic', sans-serif"
          >
            {lbl}
          </text>
        );
      })}
    </svg>
  );
};

// ─────────────────────────────────────────────
//  ANIMATED COUNTER
// ─────────────────────────────────────────────
const AnimatedCounter: React.FC<{ target: number; duration?: number; suffix?: string }> = ({
  target,
  duration = 1800,
  suffix = '',
}) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.round(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <>{current}{suffix}</>;
};

// ─────────────────────────────────────────────
//  STATUS CONFIG
// ─────────────────────────────────────────────
const STATUS = {
  strong:   { label: 'قوي',       bg: 'bg-emerald-50',  text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500',  icon: CheckCircle2,    iconColor: 'text-emerald-500' },
  moderate: { label: 'متوسط',     bg: 'bg-amber-50',    text: 'text-amber-700',   border: 'border-amber-200',   dot: 'bg-amber-400',    icon: Minus,           iconColor: 'text-amber-500'   },
  weak:     { label: 'يحتاج تطوير',bg: 'bg-rose-50',    text: 'text-rose-700',    border: 'border-rose-200',    dot: 'bg-rose-500',     icon: AlertTriangle,   iconColor: 'text-rose-500'    },
};

// ─────────────────────────────────────────────
//  AI INSIGHTS GENERATOR
// ─────────────────────────────────────────────
const generateInsights = (
  sectorKey: string,
  planMetrics: Record<string, number>,
  benchmarks: Record<string, BenchmarkRange>,
) => {
  const insights: { type: 'strong' | 'moderate' | 'weak'; text: string }[] = [];

  Object.entries(planMetrics).forEach(([key, value]) => {
    const bm = benchmarks[key];
    const label = METRIC_LABELS[key]?.ar ?? key;
    const { score, percentile } = computeMetricScore(value, bm);

    if (score >= 70) {
      insights.push({ type: 'strong', text: `نماذج ${label} لديك أقوى من ${percentile}% من الشركات الناشئة في نفس القطاع — ميزة تنافسية واضحة.` });
    } else if (score <= 35) {
      insights.push({ type: 'weak', text: `${label} أدنى من المتوسط العالمي بمقدار ${Math.round(Math.abs(value - bm.avg))} ${bm.unit}. تحسين هذا المؤشر سيرفع جاذبيتك الاستثمارية بشكل مباشر.` });
    } else {
      insights.push({ type: 'moderate', text: `${label} ضمن النطاق المقبول، لكن لا يزال هناك فجوة بنسبة ${Math.round(((bm.avg - (value < bm.avg ? value : bm.avg)) / bm.avg) * 100)}% لتحقيق الأداء العالمي الأمثل.` });
    }
  });

  return insights.slice(0, 6);
};

// ─────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────
export const UnicornBenchmarking: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>('saas');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);
  const [radarAnimated, setRadarAnimated] = useState(false);
  const [expandedMetric, setExpandedMetric] = useState<string | null>(null);

  const sectorData = BENCHMARK_LIBRARY[selectedSector];
  const planMetrics = MOCK_PLAN_METRICS[selectedSector];
  const benchmarkMetrics = sectorData.metrics;
  const metricKeys = Object.keys(benchmarkMetrics);

  const metricScores = metricKeys.map(k => computeMetricScore(planMetrics[k], benchmarkMetrics[k]));
  const overallScore = Math.round(metricScores.reduce((sum, ms) => sum + ms.score, 0) / metricScores.length);
  const insights = generateInsights(selectedSector, planMetrics, benchmarkMetrics);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setHasAnalyzed(false);
    setRadarAnimated(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalyzed(true);
      setTimeout(() => setRadarAnimated(true), 300);
    }, 2200);
  };

  const scoreColor = overallScore >= 65 ? '#10b981' : overallScore >= 40 ? '#f59e0b' : '#ef4444';
  const scoreBg    = overallScore >= 65 ? 'from-emerald-500 to-emerald-600' : overallScore >= 40 ? 'from-amber-400 to-amber-500' : 'from-rose-500 to-rose-600';
  const scoreLabel = overallScore >= 65 ? 'أداء قوي' : overallScore >= 40 ? 'أداء متوسط' : 'يحتاج تطوير';

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700 font-['IBM_Plex_Sans_Arabic']" dir="rtl">

      {/* ── HEADER ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-violet-50 text-violet-600 rounded-2xl border border-violet-100 shadow-sm mb-6 transition-transform hover:scale-105 cursor-default">
            <div className="p-1 px-2.5 bg-violet-600 text-white rounded-lg shadow-lg shadow-violet-200">
              <Globe size={16} strokeWidth={3} />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.1em]">معيار اليونيكورن العالمي</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            رادار المعايرة العالمية
          </h1>
          <p className="text-slate-500 font-bold text-base max-w-2xl leading-relaxed">
            قارن خطة عملك مع المعايير العالمية المستخلصة من أنجح الشركات الناشئة في فئتك. احصل على تقرير استثماري بمستوى صناديق رأس المال المغامر.
          </p>
        </div>
      </div>

      {/* ── SECTOR SELECTOR ── */}
      <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center">
            <Layers size={20} strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-base font-black text-slate-900">اختر قطاع خطة العمل</h2>
            <p className="text-[11px] font-bold text-slate-400">يحدد النظام المعايير الدقيقة بناءً على القطاع</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(BENCHMARK_LIBRARY).map(([key, s]) => {
            const Icon = s.icon;
            const isActive = selectedSector === key;
            return (
              <button
                key={key}
                onClick={() => { setSelectedSector(key); setHasAnalyzed(false); setRadarAnimated(false); }}
                className={`group relative p-5 rounded-[1.8rem] border-2 flex flex-col items-center gap-3 transition-all duration-500 overflow-hidden ${
                  isActive
                    ? 'border-transparent shadow-2xl -translate-y-1'
                    : 'border-slate-100 hover:border-slate-200 hover:shadow-lg hover:-translate-y-0.5'
                }`}
                style={isActive ? { background: `linear-gradient(135deg, ${s.gradientFrom}, ${s.gradientTo})` } : {}}
              >
                {isActive && <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at 30% 30%, white, transparent)` }} />}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-50 group-hover:scale-110'
                }`} style={!isActive ? { color: s.color } : {}}>
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div className="text-center">
                  <p className={`text-[10px] font-black uppercase tracking-widest ${isActive ? 'text-white/60' : 'text-slate-400'}`}>{s.sector}</p>
                  <p className={`text-sm font-black mt-0.5 ${isActive ? 'text-white' : 'text-slate-800'}`}>{s.sectorAr}</p>
                </div>
                {isActive && (
                  <div className="absolute bottom-3 right-3">
                    <CheckCircle2 size={16} className="text-white/80" strokeWidth={3} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="w-full py-5 rounded-2xl text-sm font-black transition-all duration-500 flex items-center justify-center gap-3 shadow-xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          style={{
            background: `linear-gradient(135deg, ${sectorData.gradientFrom}, ${sectorData.gradientTo})`,
            boxShadow: `0 20px 60px ${sectorData.color}40`,
          }}
        >
          {isAnalyzing ? (
            <>
              <RefreshCw size={18} className="animate-spin text-white" strokeWidth={3} />
              <span className="text-white">جاري تحليل الخطة ومقارنتها...</span>
            </>
          ) : (
            <>
              <BrainCircuit size={18} className="text-white" strokeWidth={2.5} />
              <span className="text-white">تشغيل محرك المعايرة الذكي</span>
              <Zap size={16} className="text-white/70" />
            </>
          )}
        </button>
      </div>

      {/* ── ANALYZING STATE ── */}
      {isAnalyzing && (
        <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-12 flex flex-col items-center gap-6 animate-in fade-in duration-500">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-slate-100 flex items-center justify-center">
              <BrainCircuit size={40} className="animate-pulse" style={{ color: sectorData.color }} strokeWidth={1.5} />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin"
              style={{ borderColor: `${sectorData.color} transparent transparent transparent` }} />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-black text-slate-900 mb-2">محرك الذكاء يعمل...</h3>
            {['استخلاص مؤشرات الخطة', 'مقارنة مع نماذج اليونيكورن', 'حساب درجة المعايرة', 'توليد التوصيات'].map((step, i) => (
              <div key={i} className="flex items-center justify-center gap-2 py-1 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: sectorData.color }} />
                <p className="text-[11px] font-bold text-slate-400">{step}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── EMPTY STATE ── */}
      {!hasAnalyzed && !isAnalyzing && (
        <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-dashed border-slate-200 rounded-[2.5rem] p-16 flex flex-col items-center gap-6 text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center">
            <BarChart3 size={36} className="text-slate-300" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-700 mb-3">ابدأ تحليل المعايرة</h3>
            <p className="text-slate-400 font-bold text-sm max-w-md leading-relaxed">
              اختر قطاع خطة عملك من الأعلى، ثم اضغط زر التحليل للحصول على تقرير مقارنة شامل مع أحدث معايير السوق العالمية.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            {['رادار تفاعلي', 'نقاط الأداء', 'رؤى استراتيجية', 'توصيات قابلة للتنفيذ'].map((tag, i) => (
              <span key={i} className="px-3 py-1.5 bg-slate-100 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
           RESULTS SECTION
         ══════════════════════════════════════════ */}
      {hasAnalyzed && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">

          {/* ── SECTOR TAG ── */}
          <div className="flex items-center gap-4">
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl border font-black text-sm shadow-sm"
              style={{ background: `${sectorData.color}15`, borderColor: `${sectorData.color}30`, color: sectorData.color }}
            >
              <Award size={16} strokeWidth={3} />
              {sectorData.sectorAr} · نموذج المعايرة العالمي
            </div>
            <div className="h-px flex-1 bg-slate-100" />
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-[11px] font-black text-slate-500 hover:bg-slate-50 transition-all">
              <Download size={14} />
              تصدير التقرير
            </button>
          </div>

          {/* ── TOP ROW: Score Card + Radar ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* Score Card */}
            <div className="lg:col-span-2 bg-slate-950 rounded-[2.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[360px]">
              {/* BG decor */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20 blur-3xl"
                style={{ background: sectorData.color }} />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-10 blur-2xl"
                style={{ background: sectorData.gradientTo }} />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: sectorData.color }} />
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">درجة المعايرة العالمية</span>
                </div>

                {/* Big Score */}
                <div className="flex items-end gap-3 mb-3">
                  <span className="text-8xl font-black leading-none" style={{ color: scoreColor }}>
                    <AnimatedCounter target={overallScore} />
                  </span>
                  <span className="text-4xl font-black text-slate-600 mb-2">/ 100</span>
                </div>

                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-black mb-6 bg-gradient-to-r ${scoreBg}`}
                >
                  {overallScore >= 65 ? <CheckCircle2 size={14} strokeWidth={3} /> : overallScore >= 40 ? <Minus size={14} strokeWidth={3} /> : <AlertTriangle size={14} strokeWidth={3} />}
                  {scoreLabel}
                </div>

                {/* Mini metric bars */}
                <div className="space-y-2.5">
                  {metricKeys.slice(0, 4).map((k, i) => {
                    const ms = metricScores[i];
                    return (
                      <div key={k} className="flex items-center gap-3">
                        <span className="text-[9px] font-black text-slate-500 w-28 text-right truncate">{METRIC_LABELS[k]?.ar}</span>
                        <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-[1500ms] ease-out"
                            style={{ width: `${ms.score}%`, background: ms.status === 'strong' ? '#10b981' : ms.status === 'moderate' ? '#f59e0b' : '#ef4444' }}
                          />
                        </div>
                        <span className="text-[9px] font-black text-slate-400 w-8 text-left">{ms.score}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Percentile note */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/5">
                <p className="text-[10px] font-bold text-slate-500">
                  خطتك تتفوق على <span className="text-white font-black">{Math.round(overallScore * 0.9)}%</span> من الشركات الناشئة في قطاع {sectorData.sectorAr}
                </p>
              </div>
            </div>

            {/* Radar Chart */}
            <div className="lg:col-span-3 bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-black text-slate-900">رادار الأداء المقارن</h3>
                  <p className="text-[11px] font-bold text-slate-400 mt-0.5">خطتك مقابل متوسط اليونيكورن في القطاع</p>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-black text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-0.5 rounded-full" style={{ background: sectorData.color }} />
                    <span>خطتك</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-0.5 border-t-2 border-dashed border-slate-400 rounded-full" />
                    <span>المتوسط العالمي</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <RadarChart
                  userScores={metricScores.map(ms => ms.score)}
                  labels={metricKeys.map(k => METRIC_LABELS[k]?.ar?.split(' ')[0] ?? k)}
                  color={sectorData.color}
                  animateIn={radarAnimated}
                />
              </div>
            </div>
          </div>

          {/* ── METRICS GRID ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                <BarChart3 size={20} className="text-slate-500" strokeWidth={2.5} />
              </div>
              <h2 className="text-xl font-black text-slate-900">مصفوفة المؤشرات التفصيلية</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {metricKeys.map((key, idx) => {
                const bm = benchmarkMetrics[key];
                const userVal = planMetrics[key];
                const ms = metricScores[idx];
                const cfg = STATUS[ms.status];
                const MetricIcon = METRIC_LABELS[key]?.icon ?? BarChart3;
                const isExpanded = expandedMetric === key;

                return (
                  <div
                    key={key}
                    onClick={() => setExpandedMetric(isExpanded ? null : key)}
                    className={`bg-white border-2 rounded-[2rem] p-6 cursor-pointer transition-all duration-500 group hover:shadow-xl hover:-translate-y-1 ${
                      isExpanded ? 'border-slate-200 shadow-2xl -translate-y-1' : 'border-slate-100'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                        style={{ background: `${METRIC_LABELS[key]?.color}15`, color: METRIC_LABELS[key]?.color }}
                      >
                        <MetricIcon size={22} strokeWidth={2} />
                      </div>
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-[9px] font-black ${cfg.bg} ${cfg.text} ${cfg.border}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                        {cfg.label}
                      </div>
                    </div>

                    <h4 className="text-sm font-black text-slate-800 mb-4 leading-snug">{METRIC_LABELS[key]?.ar}</h4>

                    {/* Values */}
                    <div className="flex items-end justify-between mb-3">
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 mb-0.5">قيمتك</p>
                        <p className="text-2xl font-black text-slate-900">{userVal}<span className="text-xs font-bold text-slate-400 ml-1">{bm.unit}</span></p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] font-bold text-slate-400 mb-0.5">المتوسط العالمي</p>
                        <p className="text-base font-black text-slate-500">{bm.avg}<span className="text-xs font-bold text-slate-300 ml-1">{bm.unit}</span></p>
                      </div>
                    </div>

                    {/* Score bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[9px] font-bold text-slate-400">
                        <span>درجة الأداء</span>
                        <span className="font-black" style={{ color: METRIC_LABELS[key]?.color }}>{ms.score}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-[1500ms] ease-out"
                          style={{
                            width: `${ms.score}%`,
                            background: ms.status === 'strong' ? '#10b981' : ms.status === 'moderate' ? '#f59e0b' : '#ef4444',
                          }}
                        />
                      </div>
                    </div>

                    {/* Expanded: min / avg / max */}
                    {isExpanded && (
                      <div className="mt-5 pt-4 border-t border-slate-100 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">نطاق المعيار العالمي</p>
                        {[
                          { label: 'الحد الأدنى', val: bm.min, color: '#ef4444' },
                          { label: 'المتوسط', val: bm.avg, color: '#f59e0b' },
                          { label: 'الأداء المتميز', val: bm.max, color: '#10b981' },
                        ].map(row => (
                          <div key={row.label} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full" style={{ background: row.color }} />
                              <span className="text-[10px] font-bold text-slate-500">{row.label}</span>
                            </div>
                            <span className="text-[10px] font-black text-slate-700">{row.val} {bm.unit}</span>
                          </div>
                        ))}
                        <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                          <span className="text-[10px] font-bold text-slate-400">أفضل من</span>
                          <span className="text-[10px] font-black" style={{ color: sectorData.color }}>{ms.percentile}% من المنافسين</span>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-center mt-3">
                      <ChevronDown
                        size={14}
                        className={`text-slate-300 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── INSIGHTS PANEL ── */}
          <div className="bg-slate-950 rounded-[3rem] p-10 relative overflow-hidden">
            {/* BG Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <BrainCircuit size={400} strokeWidth={0.5} className="absolute -top-20 -right-20 text-white" />
            </div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-3xl opacity-20"
              style={{ background: sectorData.color }} />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{ background: `linear-gradient(135deg, ${sectorData.gradientFrom}, ${sectorData.gradientTo})` }}>
                  <Sparkles size={24} className="text-white animate-pulse" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">رؤى المستشار الاستراتيجي</h3>
                  <p className="text-slate-400 font-bold text-sm">تحليل مدعوم بالذكاء الاصطناعي بناءً على معايير السوق العالمية</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {insights.map((insight, i) => {
                  const iconMap = {
                    strong:   { Icon: CheckCircle2, color: '#10b981', bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.2)'  },
                    moderate: { Icon: Info,          color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)' },
                    weak:     { Icon: AlertTriangle, color: '#ef4444', bg: 'rgba(239,68,68,0.1)',  border: 'rgba(239,68,68,0.2)'  },
                  };
                  const cfg = iconMap[insight.type];
                  const { Icon } = cfg;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-5 rounded-2xl border"
                      style={{ background: cfg.bg, borderColor: cfg.border }}
                    >
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${cfg.color}20` }}>
                        <Icon size={16} strokeWidth={2.5} style={{ color: cfg.color }} />
                      </div>
                      <p className="text-slate-300 font-bold text-[12px] leading-relaxed">{insight.text}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 pt-6 border-t border-white/5">
                <button className="flex-1 py-4 bg-white text-slate-900 rounded-2xl text-sm font-black hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-xl">
                  عرض التقرير المفصل
                  <ArrowUpRight size={18} strokeWidth={3} className="text-indigo-600" />
                </button>
                <button className="flex-1 py-4 border border-white/10 text-white rounded-2xl text-sm font-black hover:bg-white/5 transition-all text-center">
                  تحميل بصيغة PDF
                </button>
              </div>
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <Info size={13} />
            <p className="text-[11px] font-bold">
              المعايير مستخلصة من نماذج مجردة لأكثر من 500 شركة ناشئة ناجحة عالمياً — تُحدَّث ربع سنوياً
            </p>
          </div>

        </div>
      )}
    </div>
  );
};

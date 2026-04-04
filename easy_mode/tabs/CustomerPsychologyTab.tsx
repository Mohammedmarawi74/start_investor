import React from 'react';
import * as Lucide from 'lucide-react';
import * as Charts from '../components/AnalysisUI';

/* =========================
   Shared UI System
========================= */

const GlassCard = ({ children, className = "" }: any) => (
  <div
    className={`
      bg-white/70 backdrop-blur-xl
      border border-white/40
      shadow-lg shadow-slate-200/40
      rounded-[2rem] p-6 lg:p-10
      transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/40
      ${className}
    `}
  >
    {children}
  </div>
);

const SectionTitle = ({ badge, title, desc }: any) => (
  <div className="mb-10 text-right" dir="rtl">
    {badge && (
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-100 mb-4">
        {badge}
      </div>
    )}
    <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
      {title}
    </h3>
    {desc && (
      <p className="text-slate-500 text-sm font-bold max-w-2xl leading-relaxed italic border-r-2 border-indigo-100 pr-4">
        {desc}
      </p>
    )}
  </div>
);

/* =========================
   Main Component
========================= */

export const CustomerPsychologyTab: React.FC<{ analysis: any }> = ({ analysis }) => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700" dir="rtl">

      {/* 1. PERSONA INTEL */}
      <Charts.BehavioralPersonaCard persona={analysis.behavioralPersona} />

      {/* 2. MARKET DIMENSIONS */}
      <MarketSizeCard marketSize={analysis.marketSize} />

      {/* 3. PSYCHOLOGY & STRATEGY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <PsychologyDriversCard persona={analysis.behavioralPersona} />
        <EngagementStrategyCard />
      </div>

    </div>
  );
};

/* =========================
   Market Size Analysis
========================= */

const MarketSizeCard: React.FC<{ marketSize: any }> = ({ marketSize }) => {
  return (
    <GlassCard className="relative overflow-hidden group/ms">
       {/* Abstract Design */}
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-indigo-500 to-rose-500"></div>
       
      <SectionTitle
        badge="Market Intel"
        title="أبعاد السوق والأهداف"
        desc="تحديد حجم السوق ليس مجرد أرقام، بل هو خريطة طريق تعرف من خلالها أين تبدأ وكيف تتوسع."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            id: 'TAM',
            label: 'السوق الكلي المتاح (TAM)',
            value: marketSize.tam,
            icon: Lucide.Globe2,
            progress: '100%',
            color: 'bg-slate-700',
            note: 'أقصى طموح ممكن'
          },
          {
            id: 'SAM',
            label: 'السوق الذي تخدمه (SAM)',
            value: marketSize.sam,
            icon: Lucide.Compass,
            progress: '45%',
            color: 'bg-indigo-600',
            note: 'النطاق الواقعي لبدء العمل'
          },
          {
            id: 'SOM',
            label: 'نصيبك المخطط له (SOM)',
            value: marketSize.som,
            icon: Lucide.Target,
            progress: '12%',
            color: 'bg-emerald-600',
            note: 'هدفك خلال أول 12 شهر'
          },
        ].map((item) => (
          <div
            key={item.id}
            className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group/item hover:bg-white hover:shadow-xl transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover/item:rotate-12 transition-transform">
                <item.icon size={22} className="text-slate-400 group-hover/item:text-indigo-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-black text-slate-800 leading-none">
                    {item.label}
                </span>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">{item.id}</span>
              </div>
            </div>

            <div className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter tabular-nums mb-4">{item.value}</div>

            <div className="space-y-2">
                <div className="h-1.5 bg-slate-200/50 rounded-full overflow-hidden">
                    <div
                        className={`h-full ${item.color} transition-all duration-1000 delay-300`}
                        style={{ width: item.progress }}
                    />
                </div>
                <p className="text-[10px] font-bold text-slate-400 italic text-left">{item.note}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <Lucide.Info size={14} className="text-indigo-400" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Verified Market Data</span>
         </div>
         <span className="text-[11px] font-black text-slate-900 italic">{marketSize.source || 'Intel Report 2025'}</span>
      </div>
    </GlassCard>
  );
};

/* =========================
   Psychology Drivers
========================= */

const PsychologyDriversCard: React.FC<{ persona: any }> = ({ persona }) => {
  return (
    <GlassCard className="lg:col-span-8 relative overflow-hidden group">
      <Lucide.Brain size={150} className="absolute -bottom-10 -left-10 text-slate-50 group-hover:text-indigo-50/50 group-hover:scale-110 transition-all duration-700" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-3xl bg-rose-50 text-rose-600 flex items-center justify-center shadow-inner">
                <Lucide.Flame size={28} />
            </div>
            <div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">
                    محركات القرار العاطفية
                </h4>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest uppercase">Emotional Triggers</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 transition-all group/driver">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center">
                        <Lucide.Zap size={16} className="text-indigo-600" />
                    </div>
                    <span className="text-xs font-black text-slate-800 uppercase">الحافز (الرغبة)</span>
                </div>
                <p className="text-[13px] font-bold text-slate-500 leading-relaxed italic pr-4 border-r-2 border-indigo-100">
                    "العميل يبحث عن الشعور بالتميز والأمان المالي؛ لا تبيعه مجرد منتج، بل بعه <span className="text-slate-900 underline">الحرية المالية</span>."
                </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-rose-200 transition-all group/driver">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 flex items-center justify-center">
                        <Lucide.ShieldAlert size={16} className="text-rose-600" />
                    </div>
                    <span className="text-xs font-black text-slate-800 uppercase">التخوف (العائق)</span>
                </div>
                <p className="text-[13px] font-bold text-slate-500 leading-relaxed italic pr-4 border-r-2 border-rose-100">
                    "أكبر خوف يمنعه من الشراء هو <span className="text-slate-900 underline">فقدان السيطرة</span>؛ طمئنه عبر توفير سياسات استرجاع أو تجربة مجانية."
                </p>
            </div>
        </div>
      </div>
    </GlassCard>
  );
};

/* =========================
   Engagement Strategy
========================= */

const EngagementStrategyCard: React.FC = () => {
  return (
    <div className="lg:col-span-4 relative rounded-[3rem] p-10 text-white bg-gradient-to-br from-indigo-600 to-indigo-800 overflow-hidden shadow-2xl group border-l-8 border-indigo-400">

      <Lucide.Magnet
        size={220}
        className="absolute -bottom-20 -right-20 text-white/5 group-hover:rotate-12 transition-transform duration-1000"
      />

      <div className="relative z-10 flex flex-col justify-between h-full space-y-12">
        <div>
          <p className="text-[10px] font-black uppercase text-indigo-200 tracking-[0.5em] mb-3">
             Strategic Attraction
          </p>
          <h4 className="text-3xl font-black tracking-tighter leading-tight mb-10">
            كيف تستقطب <br/>هم في 3 جولات؟
          </h4>

          <div className="space-y-6">
            {[
              { text: 'محتوى يعتمد على الحقائق والبيانات المقنعة', icon: Lucide.Database },
              { text: 'بناء جسر ثقة عبر آراء عملاء حقيقيين', icon: Lucide.Users2 },
              { text: 'توفير رحلة مستخدم "صفرية المخاطر"', icon: Lucide.ShieldCheck },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start group/li">
                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <item.icon size={12} className="text-indigo-300" />
                </div>
                <span className="text-[13px] font-bold opacity-90 leading-tight group-hover:opacity-100 transition-opacity">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-[10px] font-black text-indigo-300 uppercase tracking-widest italic leading-none">
          High Conversion Roadmap Ready
        </div>
      </div>
    </div>
  );
};
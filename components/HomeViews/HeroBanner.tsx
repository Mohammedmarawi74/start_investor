import React, { useState, useEffect } from 'react';
import { Network, Search, Zap, Crosshair, ChevronLeft, Shield } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   HERO BANNER — "Cinematic Intelligence Hub"
   ═══════════════════════════════════════════════════════════════ */

export const HeroBanner = () => {
  const [tickerOffset, setTickerOffset] = useState(0);

  useEffect(() => {
    // Smooth ticker animation
    const interval = setInterval(() => {
      setTickerOffset(prev => prev - 1);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const tickerData = [
    { flag: '🇸🇦', label: 'الرعاية الصحية الرقمية', value: '$2.4B', trend: '+18%' },
    { flag: '🇦🇪', label: 'التجارة الإلكترونية B2B', value: '$1.8B', trend: '+24%' },
    { flag: '🇪🇬', label: 'التكنولوجيا المالية', value: '$950M', trend: '+32%' },
    { flag: '🇶🇦', label: 'الخدمات اللوجستية', value: '$1.2B', trend: '+15%' },
    { flag: '🇰🇼', label: 'تطبيقات التوصيل', value: '$680M', trend: '+21%' },
    { flag: '🌍', label: 'الذكاء الاصطناعي', value: '$4.1B', trend: '+45%' },
  ];

  const stats = [
    { label: 'قطاعاً عالمياً', value: '14', icon: Network },
    { label: 'فجوة سوقية', value: '+2,400', icon: Search },
    { label: 'سوقاً مستهدفاً', value: '47', icon: Crosshair },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 border-b border-indigo-500/20" dir="rtl">
      
      {/* ── Background Overlays (Premium Mesh Gradient) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Core Glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[70%] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-600/5 blur-[100px] rounded-full" />
        
        {/* Subtle Accent Glows */}
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[40%] bg-indigo-500/5 blur-[90px] rounded-full" />
        
        {/* Top-down Light Leak */}
        <div 
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
        />
        
        {/* Grain/Noise Texture (Subtle) */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
      </div>

      {/* Grid Pattern (Ultra-fine) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
           style={{ 
             backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`, 
             backgroundSize: '80px 80px' 
           }} 
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 pt-10 sm:pt-16 lg:pt-20 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
          <div className="flex flex-col items-center text-center gap-6 sm:gap-10 relative z-20 max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-[9px] font-black text-indigo-400 uppercase tracking-widest animate-in fade-in slide-in-from-top-4 duration-700">
                <Shield size={10} /> نظام الاستخبارات النشط
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight px-2">
                مركز القيادة الاستخباراتية الاستثمارية
              </h1>
              <p className="text-[13px] sm:text-base lg:text-lg font-bold text-slate-400/80 max-w-2xl mx-auto leading-relaxed px-4">
                منصة سيادية لاستكشاف الفجوات العالمية وبناء قرارات استثمارية دقيقة باستخدام محركات الذكاء الاصطناعي الأكثر تقدماً.
              </p>
            </div>

            {/* Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-30 px-6 sm:px-0">
              <button 
                onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-sm transition-all duration-300 shadow-[0_20px_40px_-5px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_-10px_rgba(79,70,229,0.7)] flex items-center justify-center gap-3 group border border-indigo-400/30 hover:-translate-y-1"
              >
                <Zap size={18} className="fill-white/20" />
                <span>ابدأ رحلة الاستثمار</span>
                <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Live Ticker ── */}
      <div className="mt-8 border-t border-slate-800/80 bg-slate-900 overflow-hidden relative pb-1 pt-1 opacity-90 w-full max-w-full">
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="w-full max-w-full overflow-hidden py-3">
          <div className="overflow-hidden relative flex">
            {[1, 2].map((group) => (
              <div 
                key={group}
                className="flex items-center gap-8 whitespace-nowrap"
                style={{ transform: `translateX(${tickerOffset % (tickerData.length * 200)}px)` }}
              >
                {tickerData.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 px-5 py-2 bg-slate-800/80 rounded-full border border-slate-700/50 hover:bg-slate-700 transition-colors">
                    <span className="text-sm border-l border-slate-700 pl-3">{item.flag}</span>
                    <span className="text-[11px] font-bold text-slate-300">{item.label}</span>
                    <span className="text-xs font-black text-white">{item.value}</span>
                    <div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded text-[10px] font-black">
                      <TrendingUpIcon /> {item.trend}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

const TrendingUpIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

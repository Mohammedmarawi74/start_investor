
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  X, 
  Sparkles, 
  Zap, 
  Target, 
  Rocket, 
  Compass,
  CheckCircle2
} from 'lucide-react';

interface TourStep {
  targetId: string;
  title: string;
  content: string;
  position: 'left' | 'bottom' | 'center';
}

const TOUR_STEPS: TourStep[] = [
  {
    targetId: 'tour-home',
    title: 'مرحباً بك في خطة!',
    content: 'رحلتك نحو التميز تبدأ من هنا. نظرة عامة شاملة على جميع مشاريعك وأدائك الاستراتيجي في مكان واحد.',
    position: 'left'
  },
  {
    targetId: 'tour-new-plan',
    title: 'خلق فكرة جديدة',
    content: 'هنا تحول "الشرارة" الأولى لفكرة مشروعك إلى استراتيجية عمل متماسكة باستخدام نماذج الذكاء الاصطناعي المتقدمة.',
    position: 'left'
  },
  {
    targetId: 'tour-analyzer',
    title: 'المحلل الاستراتيجي',
    content: 'دع الذكاء الاصطناعي يغوص في تفاصيل فكرتك لاستخراج فجوات السوق، نقاط القوة، والفرص الذهبية المتاحة.',
    position: 'left'
  },
  {
    targetId: 'tour-unicorn',
    title: 'رادار اليونيكورن',
    content: 'قارن مشروعك مع معايير الشركات المليارية الناجحة واكتشف المسار الصحيح لتصبح "اليونيكورن" القادم.',
    position: 'left'
  },
  {
    targetId: 'tour-brand',
    title: 'استوديو الهوية البصرية',
    content: 'صمم هويتك البصرية الكاملة (شعار، ألوان، خطوط) بما يتوافق مع رؤية مشروعك بلمسة ذكاء اصطناعي سحرية.',
    position: 'left'
  },
  {
    targetId: 'tour-tasks',
    title: 'المهام والجدولة',
    content: 'مركز العمليات اليومي لإدارة المهام وتتبع التقدم في تنفيذ خطة العمل خطوة بخطوة لضمان الوصول لأهدافك.',
    position: 'left'
  }
];

interface SiteTourProps {
  onComplete: () => void;
  onSkip: () => void;
}

const SiteTour: React.FC<SiteTourProps> = ({ onComplete, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const step = TOUR_STEPS[currentStep];

  useEffect(() => {
    const updatePosition = () => {
      setIsMobile(window.innerWidth < 1024);
      const element = document.getElementById(step.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Use a short delay for scroll settling
        setTimeout(() => {
          const rect = element.getBoundingClientRect();
          setTooltipPos({ 
            top: rect.top, 
            left: rect.left, 
            width: rect.width, 
            height: rect.height 
          });
        }, 300);
      } else {
        setTooltipPos({ 
          top: window.innerHeight / 2, 
          left: window.innerWidth / 2, 
          width: 0, 
          height: 0 
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [currentStep, step.targetId]);

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isFinished) {
    return (
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-5 sm:p-6 bg-slate-950/40 backdrop-blur-sm transition-all duration-1000">
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 max-w-xl w-full text-center shadow-[0_50px_100px_rgba(0,0,0,0.2)] relative overflow-hidden border border-white">
          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-emerald-600 rounded-2xl sm:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl">
              <CheckCircle2 size={32} className="sm:w-10 sm:h-10" strokeWidth={2.5} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">تهانينا! أنت جاهز للإنطلاق</h2>
            <p className="text-slate-500 font-bold mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base text-right px-2">
              لقد أتممت الجولة التعريفية بنجاح. الآن لديك كل الأدوات اللازمة لتحويل رؤيتك إلى واقع استثماري ملموس. ابدأ رحلتك الآن!
            </p>
            <button 
              onClick={onComplete}
              className="w-full py-4 sm:py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl sm:rounded-2xl text-[14px] sm:text-[15px] font-black shadow-2xl hover:scale-[1.02] active:scale-95 transition-all outline-none"
            >
              ابدأ الاستخدام الآن
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none">
      {/* Subtle Highlight ONLY (No global dimmer) */}
      <div 
        className="absolute z-[10001] border-[3px] border-indigo-500/80 rounded-2xl transition-all duration-500 pointer-events-none shadow-[0_0_30px_rgba(79,70,229,0.3)] animate-pulse"
        style={{
          top: tooltipPos.top - 6,
          left: tooltipPos.left - 6,
          width: tooltipPos.width + 12,
          height: tooltipPos.height + 12,
          opacity: tooltipPos.width > 0 ? 1 : 0
        }}
      ></div>

      {/* Tooltip Content */}
      <div 
        ref={tooltipRef}
        className={`fixed lg:absolute z-[10002] pointer-events-auto transition-all duration-500 ${isMobile ? 'bottom-20 left-1/2 -translate-x-1/2' : ''}`}
        style={!isMobile ? {
          top: tooltipPos.top + tooltipPos.height / 2,
          left: tooltipPos.left - 24,
          transform: 'translate(-100%, -50%)',
          opacity: tooltipPos.width > 0 ? 1 : 0
        } : { 
          opacity: tooltipPos.width > 0 ? 1 : 0 
        }}
      >
        <div className="bg-white rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-8 w-[calc(100vw-32px)] lg:w-[350px] shadow-[0_30px_90px_rgba(0,0,0,0.18)] border border-slate-100 flex flex-col relative overflow-hidden backdrop-blur-xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/30 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          {/* Arrow pointing RIGHT (Desktop only) */}
          {!isMobile && (
            <div className="absolute w-5 h-5 bg-white rotate-45 -right-2 top-1/2 -translate-y-1/2 shadow-[4px_-4px_10px_rgba(0,0,0,0.02)] border-r border-t border-slate-100"></div>
          )}

          <div className="flex items-center justify-between mb-5 relative z-10 rtl text-right">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100">
                 <Sparkles size={18} />
              </div>
              <h3 className="font-black text-[15px] text-slate-800 tracking-tight">{step.title}</h3>
            </div>
            <button onClick={onSkip} className="text-slate-300 hover:text-slate-900 transition-colors bg-slate-50 p-2 rounded-full">
              <X size={16} />
            </button>
          </div>

          <p className="text-[13px] font-bold text-slate-500 leading-relaxed text-right mb-8 relative z-10 px-1">
            {step.content}
          </p>

          <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50 relative z-10">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/80 px-3 py-1.5 rounded-lg border border-slate-100/50">
              {currentStep + 1} / {TOUR_STEPS.length}
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all ${currentStep === 0 ? 'text-slate-100 bg-slate-50/50' : 'text-slate-400 bg-white border border-slate-100 hover:bg-slate-50 hover:text-slate-900 shadow-sm'}`}
              >
                <ChevronRight size={18} />
              </button>
              
              <button 
                onClick={handleNext}
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-950 text-white rounded-lg sm:rounded-xl text-[11px] sm:text-[12px] font-black flex items-center gap-2 hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 active:scale-95"
              >
                <span className="whitespace-nowrap">{currentStep === TOUR_STEPS.length - 1 ? 'فهمت، ابدأ!' : 'الخطوة التالية'}</span>
                <ChevronLeft size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteTour;

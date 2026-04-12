
import React, { useState } from 'react';
import { Check, Zap, Sparkles, Building2, User, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';

export const PricingPlans: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'مجاني',
      icon: User,
      price: 0,
      description: 'للمستخدمين الجدد الذين يريدون تجربة النظام',
      features: [
        'خطة عمل واحدة نشطة',
        '3 تصديرات شهرياً',
        'دعم عبر البريد الإلكتروني',
        'دخول للمحرر الأساسي'
      ],
      buttonText: 'ابدأ مجاناً',
      variant: 'default'
    },
    {
      name: 'المبتدئ',
      icon: Rocket,
      price: billingCycle === 'monthly' ? 49 : 39,
      description: 'للأفراد ورواد الأعمال المبتدئين',
      features: [
        '5 خطط عمل متقدمة',
        '20 تصدير شهرياً',
        'اقتراحات الذكاء الاصطناعي',
        'دعم فني سريع'
      ],
      buttonText: 'اشترك الآن',
      variant: 'primary'
    },
    {
      name: 'الاحترافي',
      icon: Zap,
      price: billingCycle === 'monthly' ? 149 : 119,
      description: 'للشركات الصغيرة والمتوسطة',
      features: [
        'خطط عمل غير محدودة',
        'تصديرات غير محدودة',
        'اقتراحات الذكاء الاصطناعي المتقدمة',
        'دعم فني ذو أولوية',
        'تقارير تحليلية مفصلة'
      ],
      buttonText: 'ابدأ التجربة الاحترافية',
      variant: 'featured',
      badge: 'الأكثر شعبية'
    },
    {
      name: 'المؤسسات',
      icon: Building2,
      price: 499,
      description: 'للمؤسسات الكبيرة والفرق الضخمة',
      features: [
        'كل ميزات الاحترافي',
        'تخصيص كامل للهوية',
        'API للتكامل البرمجي',
        'مدير حساب مخصص',
        'تدريب مباشر للفريق'
      ],
      buttonText: 'تواصل معنا',
      variant: 'dark'
    }
  ];

  return (
    <div className="py-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight uppercase">خطط الأسعار</h2>
        <p className="text-gray-400 font-bold text-sm sm:text-lg mb-10 max-w-2xl mx-auto italic opacity-80">اختر الخطة التي تناسب حجم طموحاتك ومرحلة نمو مشروعك الحالية.</p>
        
        {/* Billing Switcher */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-bold transition-colors ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}>شهرياً</span>
          <button 
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="w-16 h-8 bg-gray-100 rounded-full p-1 relative transition-all border border-gray-200"
          >
            <div className={`w-6 h-6 bg-primary-600 rounded-full shadow-lg transition-transform duration-300 ${billingCycle === 'yearly' ? '-translate-x-8' : 'translate-x-0'}`}></div>
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-bold transition-colors ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-400'}`}>سنوياً</span>
            <span className="bg-success/10 text-success text-[10px] font-bold px-2 py-0.5 rounded-lg border border-success/20 animate-bounce">وفر 20%</span>
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`
              relative flex flex-col p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 group
              ${plan.variant === 'featured' 
                ? 'bg-gradient-to-br from-primary-600 via-indigo-600 to-purple-700 text-white shadow-2xl shadow-primary-200' 
                : plan.variant === 'dark'
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-200'
                  : 'bg-white border border-gray-100 text-gray-800 shadow-xl shadow-gray-100 hover:border-primary-100'
              }
            `}
          >
            {plan.badge && (
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-6 py-1.5 bg-amber-400 text-gray-900 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg animate-pulse">
                {plan.badge}
              </div>
            )}

            <div className="mb-8">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${
                plan.variant === 'featured' ? 'bg-white/20' : 'bg-gray-50'
              }`}>
                <plan.icon size={28} className={plan.variant === 'featured' || plan.variant === 'dark' ? 'text-white' : 'text-primary-600'} />
              </div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-xs font-bold leading-relaxed opacity-70`}>{plan.description}</p>
            </div>

            <div className="mb-10 flex items-baseline gap-1">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-xs font-bold opacity-60">ر.س / {billingCycle === 'monthly' ? 'شهرياً' : 'سنوياً'}</span>
            </div>

            <div className="flex-1 space-y-4 mb-10">
              {plan.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3">
                  <div className={`p-0.5 rounded-full ${plan.variant === 'featured' || plan.variant === 'dark' ? 'bg-white/20' : 'bg-success/10 text-success'}`}>
                    <Check size={14} strokeWidth={4} />
                  </div>
                  <span className="text-[13px] font-bold opacity-90">{feature}</span>
                </div>
              ))}
            </div>

            <button className={`
              w-full py-4 rounded-2xl text-[13px] font-bold transition-all flex items-center justify-center gap-2 group/btn
              ${plan.variant === 'featured' 
                ? 'bg-white text-primary-600 hover:bg-gray-100 shadow-xl' 
                : plan.variant === 'dark'
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-50 text-gray-900 hover:bg-primary-600 hover:text-white border border-gray-100'
              }
            `}>
              <span>{plan.buttonText}</span>
              <ArrowRight size={16} className="transition-transform group-hover/btn:-translate-x-1" />
            </button>
          </div>
        ))}
      </div>

      {/* Trust Footer */}
      <div className="mt-20 p-6 sm:p-12 bg-white border border-gray-100 rounded-3xl sm:rounded-[3rem] text-center shadow-2xl shadow-slate-200/50 relative overflow-hidden ring-1 ring-black/5">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center text-success shadow-inner">
              <ShieldCheck size={36} strokeWidth={2.5} />
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-gray-900">ضمان استرداد الأموال بنسبة 100%</h4>
          </div>
          <p className="text-gray-500 font-bold text-sm sm:text-base max-w-xl mb-10 leading-relaxed italic">نحن واثقون من جودة خدماتنا. إذا لم تكن راضياً عن تجربتك خلال أول 14 يوماً، سنعيد لك مبلغ الاشتراك بالكامل دون طرح أي أسئلة.</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">
            {/* Logos placeholder */}
            <div className="font-bold text-lg">VISA</div>
            <div className="font-bold text-lg">MASTERCARD</div>
            <div className="font-bold text-lg">MADA</div>
            <div className="font-bold text-lg">APPLE PAY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

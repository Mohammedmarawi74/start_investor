import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Building2, 
  Landmark, 
  Briefcase, 
  ShieldCheck, 
  TrendingUp, 
  BarChart4, 
  PieChart, 
  LineChart, 
  DollarSign, 
  CreditCard, 
  Wallet, 
  Calculator, 
  Smartphone, 
  HeartPulse, 
  Car, 
  ShieldAlert, 
  Globe, 
  Cpu, 
  Zap, 
  Users, 
  Gem,
  ArrowUpRight,
  Anchor
} from 'lucide-react';

export const financeInsuranceOpportunities: Record<string, BusinessOpportunity[]> = {
  'financial-institutions-dashboard': [
    {
      id: 'fin-commercial',
      title: 'البنوك التجارية',
      icon: Landmark,
      examples: [
        'حسابات جارية وتوفير ذكية',
        'تمويل شركات وبطاقات ائتمان'
      ]
    },
    {
      id: 'fin-investment',
      title: 'البنوك الاستثمارية',
      icon: Building2,
      examples: [
        'الاكتتابات العامة IPO والاندماجات',
        'إدارة رؤوس الأموال الضخمة'
      ]
    },
    {
      id: 'fin-central',
      title: 'البنوك المركزية',
      icon: ShieldCheck,
      examples: [
        'السياسات النقدية وإصدار العملة',
        'استقرار النظام المالي الكلي'
      ]
    },
    {
      id: 'fin-nonbank',
      title: 'المؤسسات غير المصرفية',
      icon: Briefcase,
      examples: [
        'شركات التأجير التمويلي',
        'مؤسسات التمويل متناهي الصغر'
      ]
    }
  ],
  'investments-dashboard': [
    {
      id: 'inv-equities',
      title: 'الأسهم Equities',
      icon: TrendingUp,
      examples: [
        'تداول الأسهم في البورصات العالمية',
        'الاستثمار طويل الأجل في الشركات'
      ]
    },
    {
      id: 'inv-bonds',
      title: 'السندات Bonds',
      icon: BarChart4,
      examples: [
        'سندات حكومية وأدوات دين الشركات',
        'استثمارات الدخل الثابت المستقرة'
      ]
    },
    {
      id: 'inv-funds',
      title: 'صناديق الاستثمار',
      icon: PieChart,
      examples: [
        'صناديق المؤشرات ETFs والمشتركة',
        'صناديق التحوط البديلة'
      ]
    },
    {
      id: 'inv-derivatives',
      title: 'المشتقات المالية',
      icon: Zap,
      examples: [
        'عقود الخيارات Options والمستقبلية',
        'استراتيجيات التحوط من المخاطر'
      ]
    },
    {
      id: 'inv-alternative',
      title: 'الاستثمار البديل',
      icon: Gem,
      examples: [
        'رأس المال الجريء Venture Capital',
        'السلع (ذهب، نفط) والعقارات'
      ]
    }
  ],
  'financial-services-dashboard': [
    {
      id: 'ser-payments',
      title: 'خدمات الدفع الإلكتروني',
      icon: CreditCard,
      examples: [
        'بوابات الدفع والمحافظ الرقمية',
        'أنظمة تحويل الأموال العابرة للحدود'
      ]
    },
    {
      id: 'ser-wealth',
      title: 'إدارة الثروات',
      icon: Wallet,
      examples: [
        'إدارة المحافظ والتخطيط المالي',
        'استشارات أثرياء (Family Offices)'
      ]
    },
    {
      id: 'ser-accounting',
      title: 'الخدمات المحاسبية والمالية',
      icon: Calculator,
      examples: [
        'تدقيق الحسابات والاستشارات الضريبية',
        'إعداد الميزانيات والتقارير المالية'
      ]
    },
    {
      id: 'ser-fintech',
      title: 'التمويل الرقمي FinTech',
      icon: Smartphone,
      examples: [
        'الإقراض الرقمي والتمويل الجماعي',
        'تطبيقات مالية ذكية للبيانات الضخمة'
      ]
    },
    {
      id: 'ser-lending',
      title: 'خدمات الإقراض',
      icon: DollarSign,
      examples: [
        'قروض الشركات والتمويل الشخصي',
        'تمويل سلاسل التوريد والنمو'
      ]
    }
  ],
  'insurance-dashboard': [
    {
      id: 'ins-health',
      title: 'التأمين الصحي',
      icon: HeartPulse,
      examples: [
        'تأمين المستشفيات والعمليات',
        'خطط التأمين الطبي للأفراد والشركات'
      ]
    },
    {
      id: 'ins-life',
      title: 'التأمين على الحياة',
      icon: Users,
      examples: [
        'خطط التقاعد والادخار طويل الأجل',
        'تأمين الوفاة وحماية العائلة'
      ]
    },
    {
      id: 'ins-general',
      title: 'التأمين العام',
      icon: Car,
      examples: [
        'تأمين السيارات والممتلكات',
        'تأمين السفر واللوجستيات'
      ]
    },
    {
      id: 'ins-reinsurance',
      title: 'إعادة التأمين',
      icon: Globe,
      examples: [
        'تغطية الكوارث وتوزيع المخاطر الكبرى',
        'تأمين شركات التأمين العالمية'
      ]
    },
    {
      id: 'ins-tech',
      title: 'تكنولوجيا التأمين InsurTech',
      icon: Cpu,
      examples: [
        'التأمين الرقمي الرقمي وتسعير AI',
        'إدارة المطالبات الذكية المؤتمتة'
      ]
    }
  ]
};

import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Hotel, 
  Briefcase, 
  UtensilsCrossed, 
  Palmtree, 
  Stethoscope, 
  PlaneTakeoff, 
  Wifi, 
  MapPin, 
  Star, 
  Zap, 
  Globe, 
  Coffee, 
  Smartphone, 
  Activity, 
  ShieldCheck, 
  Smile,
  Users,
  Building2, 
  FileText, 
  Layout,
  Settings,
  Mountain,
  Languages,
  Sparkles
} from 'lucide-react';

export const travelTourismOpportunities: Record<string, BusinessOpportunity[]> = {
  'accommodation-dashboard': [
    {
      id: 'acc-hotels',
      title: 'الفنادق الفاخرة والاقتصادية',
      icon: Hotel,
      examples: [
        'فنادق فاخرة وفنادق أعمال',
        'تشغيل فنادق اقتصادية وسياحية'
      ]
    },
    {
      id: 'acc-apartments',
      title: 'الشقق الفندقية والسكنية',
      icon: Building2,
      examples: [
        'شقق مفروشة serviced apartments',
        'إقامة طويلة الأمد للاستثمار'
      ]
    },
    {
      id: 'acc-alternative',
      title: 'الضيافة البديلة و Airbnb',
      icon: MapPin,
      examples: [
        'بيوت ضيافة ونزل Hostels',
        'استضافة بنظام Airbnb-style'
      ]
    },
    {
      id: 'acc-management',
      title: 'إدارة الإقامة وأنظمة التشغيل',
      icon: Settings,
      examples: [
        'إدارة الفنادق وأنظمة الحجز',
        'خدمات التشغيل الفندقي المتكاملة'
      ]
    }
  ],
  'business-travel-dashboard': [
    {
      id: 'bus-travel',
      title: 'سفر الأعمال والمؤتمرات',
      icon: Briefcase,
      examples: [
        'رحلات الشركات والوفود التجارية',
        'تنظيم المؤتمرات الدولية الكبرى'
      ]
    },
    {
      id: 'bus-management',
      title: 'إدارة سفر الشركات والرحلات',
      icon: Activity,
      examples: [
        'تنظيم الرحلات وحجز التذاكر للشركات',
        'إدارة سفر الأعمال corporate travel'
      ]
    },
    {
      id: 'bus-support',
      title: 'خدمات الدعم والتأشيرات',
      icon: FileText,
      examples: [
        'خدمات التأشيرات وتأمين السفر',
        'الخدمات اللوجستية للمسافرين الدوليين'
      ]
    },
    {
      id: 'bus-platforms',
      title: 'منصات وأدوات سفر الأعمال',
      icon: Globe,
      examples: [
        'أنظمة الحجز وأدوات حساب التكاليف',
        'منصات السفر المؤسسية الموحدة'
      ]
    }
  ],
  'food-drink-services-dashboard': [
    {
      id: 'foo-restaurants',
      title: 'المطاعم الفاخرة والسريعة',
      icon: UtensilsCrossed,
      examples: [
        'مطاعم فاخرة ومفاهيم سريعة',
        'سلاسل مطاعم محلية وعالمية'
      ]
    },
    {
      id: 'foo-hotel-services',
      title: 'خدمات الطعام في الفنادق',
      icon: Hotel,
      examples: [
        'خدمة الغرف Room Service وبوفيهات',
        'تموين المطاعم في المنشآت السياحية'
      ]
    },
    {
      id: 'foo-cafes',
      title: 'المقاهي وسلاسل المشروبات',
      icon: Coffee,
      examples: [
        'سلاسل الكافيهات ومقاهي العصائر',
        'منافذ المشروبات والوجبات الخفيفة'
      ]
    },
    {
      id: 'foo-catering',
      title: 'شركات التموين والفعاليات',
      icon: Users,
      examples: [
        'تموين الشركات والمؤسسات والفعاليات',
        'تجهيز الطعام للمناسبات الكبرى'
      ]
    }
  ],
  'leisure-travel-dashboard': [
    {
      id: 'lei-tourism',
      title: 'السياحة الترفيهية والعائلية',
      icon: Palmtree,
      examples: [
        'رحلات شاطئية وجبلية استجمامية',
        'إجازات عائلية وباقات سياحية'
      ]
    },
    {
      id: 'lei-agencies',
      title: 'شركات ووكلاء السفر والسياحة',
      icon: PlaneTakeoff,
      examples: [
        'وكالات السفر ومنظمي الرحلات',
        'تصميم باقات العطلات الشاملة'
      ]
    },
    {
      id: 'lei-experience',
      title: 'السياحة التجريبية والمغامرات',
      icon: Mountain,
      examples: [
        'سياحة المغامرات والسياحة البيئية',
        'الجولات الثقافية والاستكشافية'
      ]
    },
    {
      id: 'lei-services',
      title: 'خدمات الرحلات والمرافقين',
      icon: Users,
      examples: [
        'حجز تذاكر ومرشدين سياحيين',
        'تنظيم الرحلات الميدانية الخاصة'
      ]
    }
  ],
  'medical-tourism-dashboard': [
    {
      id: 'med-tourism',
      title: 'السياحة العلاجية والاستشفاء',
      icon: Stethoscope,
      examples: [
        'العلاج في الخارج والعمليات الدولية',
        'مراكز العلاج والاستشفاء المتخصصة'
      ]
    },
    {
      id: 'med-hospitals',
      title: 'المستشفيات والعيادات الدولية',
      icon: Building2,
      examples: [
        'مستشفيات للمرضى الأجانب وعيادات',
        'مراكز الرعاية الصحية الدولية'
      ]
    },
    {
      id: 'med-services',
      title: 'خدمات المتابعة والترجمة الطبية',
      icon: Languages,
      examples: [
        'تنسيق السفر الطبي والمترجمين',
        'متابعة العلاج بعد العودة للوطن'
      ]
    },
    {
      id: 'med-insurance',
      title: 'التأمين الصحي الدولي للسفر',
      icon: ShieldCheck,
      examples: [
        'تأمين العلاج في الخارج والغطاء الصحي',
        'تأمين السفر الطبي المتخصص'
      ]
    }
  ],
  'travel-technology-dashboard': [
    {
      id: 'tec-booking',
      title: 'منصات وأنظمة الحجز الإلكتروني',
      icon: Globe,
      examples: [
        'أنظمة حجز الطيران والفنادق OTA',
        'منصات الحجز السياحي المتكاملة'
      ]
    },
    {
      id: 'tec-apps',
      title: 'تطبيقات السفر والخرائط الذكية',
      icon: Smartphone,
      examples: [
        'تطبيقات تخطيط الرحلات والملاحة',
        'مساعدو السفر الرقميون للمسافرين'
      ]
    },
    {
      id: 'tec-intelligence',
      title: 'الذكاء الاصطناعي في السفر',
      icon: Sparkles,
      examples: [
        'ترشيحات السفر بـ AI والتسعير الديناميكي',
        'تحليلات التنبؤ ببيانات السفر'
      ]
    },
    {
      id: 'tec-experience',
      title: 'إدارة تجربة السفر والولاء',
      icon: Layout,
      examples: [
        'منصات تجربة المستخدم وأنظمة الولاء',
        'أنظمة الـ Digital Check-in الذكية'
      ]
    }
  ]
};

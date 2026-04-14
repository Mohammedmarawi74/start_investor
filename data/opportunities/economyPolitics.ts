import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  LineChart, 
  Globe, 
  Landmark, 
  FileText, 
  ShieldAlert, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Zap, 
  Factory, 
  Ship, 
  Plane, 
  Briefcase, 
  Search, 
  Flag, 
  Users, 
  Tv, 
  Mic2, 
  Lightbulb, 
  Settings, 
  Map, 
  Cpu, 
  ShieldCheck, 
  BarChart4, 
  AlertTriangle,
  Anchor,
  Globe2
} from 'lucide-react';

export const economyPoliticsOpportunities: Record<string, BusinessOpportunity[]> = {
  'economy-dashboard': [
    {
      id: 'eco-macro',
      title: 'الاقتصاد الكلي',
      icon: LineChart,
      examples: [
        'النمو الاقتصادي GDP',
        'التضخم Inflation',
        'البطالة Unemployment',
        'أسعار الفائدة'
      ]
    },
    {
      id: 'eco-micro',
      title: 'الاقتصاد الجزئي',
      icon: PieChart,
      examples: [
        'سلوك المستهلك',
        'تسعير المنتجات',
        'العرض والطلب والمنافسة'
      ]
    },
    {
      id: 'eco-financial',
      title: 'القطاع المالي',
      icon: Landmark,
      examples: [
        'البنوك والبورصات',
        'الاستثمار والتمويل'
      ]
    },
    {
      id: 'eco-digital',
      title: 'الاقتصاد الرقمي',
      icon: Zap,
      examples: [
        'التجارة والعملات الرقمية',
        'منصات الدفع واقتصاد المنصات'
      ]
    },
    {
      id: 'eco-industrial',
      title: 'الاقتصاد الصناعي',
      icon: Factory,
      examples: [
        'الإنتاج الصناعي وسلاسل التوريد',
        'التصنيع والتصدير'
      ]
    }
  ],
  'international-trade-dashboard': [
    {
      id: 'itd-trading',
      title: 'شركات التصدير والاستيراد',
      icon: Ship,
      examples: [
        'تصدير المنتجات المحلية',
        'استيراد المواد الخام',
        'تجارة الجملة الدولية'
      ]
    },
    {
      id: 'itd-logistics',
      title: 'شركات الخدمات اللوجستية الدولية',
      icon: Anchor,
      examples: [
        'شحن بحري وجوي',
        'تخليص جمركي وتخزين دولي'
      ]
    },
    {
      id: 'itd-agreements',
      title: 'شركات الاتفاقيات التجارية',
      icon: FileText,
      examples: [
        'إدارة اتفاقيات دولية',
        'فتح أسواق جديدة'
      ]
    },
    {
      id: 'itd-supply',
      title: 'شركات سلاسل التوريد العالمية',
      icon: Globe,
      examples: [
        'إدارة التوريد بين الدول',
        'توزيع و Sourcing عالمي'
      ]
    },
    {
      id: 'itd-analysis',
      title: 'شركات تحليل التجارة العالمية',
      icon: Search,
      examples: [
        'تتبع الصادرات والواردات',
        'تحليل الأسواق العالمية والبيانات'
      ]
    }
  ],
  'politics-dashboard': [
    {
      id: 'pol-institutions',
      title: 'المؤسسات الحكومية',
      icon: Flag,
      examples: [
        'الوزارات والبلديات',
        'الهيئات التنظيمية'
      ]
    },
    {
      id: 'pol-admin',
      title: 'الإدارة العامة',
      icon: Settings,
      examples: [
        'الخدمات الحكومية الرقمية',
        'إدارة المشاريع والقوانين'
      ]
    },
    {
      id: 'pol-parties',
      title: 'الأحزاب السياسية',
      icon: Users,
      examples: [
        'الحملات الانتخابية',
        'التنظيم والعمل السياسي'
      ]
    },
    {
      id: 'pol-media',
      title: 'الإعلام السياسي',
      icon: Tv,
      examples: [
        'القنوات الإخبارية والتحليل',
        'الصحافة السياسية'
      ]
    },
    {
      id: 'pol-diplomacy',
      title: 'الدبلوماسية',
      icon: Globe2,
      examples: [
        'السفارات والعلاقات الدولية',
        'التفاوض السياسي'
      ]
    }
  ],
  'public-policy-economic-strategy-dashboard': [
    {
      id: 'pub-thinks',
      title: 'مراكز الأبحاث',
      icon: Lightbulb,
      examples: [
        'تحليل السياسات ودراسات اقتصادية',
        'توصيات استراتيجية للحكومات'
      ]
    },
    {
      id: 'pub-consulting',
      title: 'شركات الاستشارات الحكومية',
      icon: Briefcase,
      examples: [
        'تطوير السياسات والإصلاح الإداري',
        'تحسين الأداء الحكومي'
      ]
    },
    {
      id: 'pub-planning',
      title: 'التخطيط الاستراتيجي',
      icon: Map,
      examples: [
        'خطط التنمية ورؤية 2030',
        'إدارة موارد الدولة'
      ]
    },
    {
      id: 'pub-policy',
      title: 'السياسات العامة',
      icon: ShieldCheck,
      examples: [
        'سياسات التعليم والصحة والضرائب',
        'سياسات الإسكان القومي'
      ]
    },
    {
      id: 'pub-digital',
      title: 'التحول الرقمي الحكومي',
      icon: Cpu,
      examples: [
        'الحكومة الإلكترونية e-government',
        'أتمتة خدمات الدولة'
      ]
    }
  ],
  'geopolitical-risk-global-trade-analysis-dashboard': [
    {
      id: 'geo-risk',
      title: 'تحليل المخاطر الجيوسياسية',
      icon: AlertTriangle,
      examples: [
        'تحليل الحروب والاستقرار السياسي',
        'تقييم المخاطر الدولية'
      ]
    },
    {
      id: 'geo-market',
      title: 'تحليل الأسواق العالمية',
      icon: BarChart3,
      examples: [
        'تتبع وتوقع الاقتصاد العالمي',
        'تحليل الطلب الكلي'
      ]
    },
    {
      id: 'geo-intel',
      title: 'الاستخبارات الاقتصادية',
      icon: Search,
      examples: [
        'جمع البيانات الاقتصادية الدولية',
        'تقارير الأمن الاقتصادي'
      ]
    },
    {
      id: 'geo-supply',
      title: 'تحليل سلاسل الإمداد العالمية',
      icon: Globe,
      examples: [
        'مراقبة الاختناقات التجارية',
        'إدارة المخاطر اللوجستية'
      ]
    },
    {
      id: 'geo-consulting',
      title: 'الاستشارات الجيوسياسية',
      icon: ShieldAlert,
      examples: [
        'تقييم مخاطر الاستثمار العابرة للحدود',
        'استراتيجيات دخول الأسواق الناشئة'
      ]
    }
  ]
};

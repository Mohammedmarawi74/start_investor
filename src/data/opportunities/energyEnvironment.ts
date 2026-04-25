import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  CloudRain, 
  Wind, 
  Zap, 
  Leaf, 
  Trash2, 
  Droplets, 
  Sun, 
  Factory, 
  ThermometerSun, 
  BarChart3, 
  Database, 
  Activity, 
  ShieldCheck, 
  Coins, 
  Cpu, 
  Settings, 
  Battery, 
  Waves, 
  Recycle, 
  Flame, 
  Lightbulb, 
  Boxes, 
  Satellite, 
  Microscope,
  Atom,
  Building2,
  TreePine,
  Wrench
} from 'lucide-react';

export const energyEnvironmentOpportunities: Record<string, BusinessOpportunity[]> = {
  'climate-dashboard': [
    {
      id: 'cli-monitoring',
      title: 'شركات الرصد الجوي',
      icon: CloudRain,
      examples: [
        'محطات طقس أرضية متطورة',
        'أقمار صناعية للرصد المناخي',
        'خدمات توقعات الطقس الرقمية'
      ]
    },
    {
      id: 'cli-data',
      title: 'شركات بيانات المناخ',
      icon: Database,
      examples: [
        'تحليل التغير المناخي ونمذجة الطقس',
        'بنك البيانات المناخية طويلة المدى'
      ]
    },
    {
      id: 'cli-agri',
      title: 'شركات التنبؤ المناخي للزراعة',
      icon: Microscope,
      examples: [
        'توقع المواسم الزراعية وتحليل الجفاف',
        'إدارة المخاطر الزراعية المناخية'
      ]
    },
    {
      id: 'cli-business',
      title: 'شركات الطقس لقطاع الأعمال',
      icon: Activity,
      examples: [
        'خدمات الطقس للطيران والشحن البحري',
        'بيانات الطقس لشركات الطاقة المتجددة'
      ]
    }
  ],
  'emissions-dashboard': [
    {
      id: 'emi-measuring',
      title: 'شركات قياس الانبعاثات',
      icon: Activity,
      examples: [
        'قياس انبعاثات CO2 الصناعية',
        'أنظمة مراقبة انبعاثات المصانع لحظياً'
      ]
    },
    {
      id: 'emi-reduction',
      title: 'شركات تقليل الانبعاثات',
      icon: Leaf,
      examples: [
        'تحسين كفاءة المصانع الطاقية',
        'إعادة تصميم العمليات الصناعية الخضراء'
      ]
    },
    {
      id: 'emi-credits',
      title: 'شركات الكربون كريدت',
      icon: Coins,
      examples: [
        'أسواق الكربون وشهادات الانبعاث',
        'منصات تعويض الكربون للشركات'
      ]
    },
    {
      id: 'emi-digital',
      title: 'مراقبة الانبعاثات الرقمية',
      icon: Cpu,
      examples: [
        'حساسات IoT لمراقبة الهواء',
        'منصات تتبع البصمة الكربونية بالذكاء الاصطناعي'
      ]
    }
  ],
  'energy-dashboard': [
    {
      id: 'ene-traditional',
      title: 'شركات إنتاج الطاقة التقليدية',
      icon: Factory,
      examples: [
        'محطات توليد الكهرباء والغاز الطبيعي',
        'صناعات النفط والفحم التقليدية'
      ]
    },
    {
      id: 'ene-distribution',
      title: 'شركات توزيع الطاقة',
      icon: Zap,
      examples: [
        'شبكات نقل الكهرباء الذكية',
        'إدارة وتوزيع أحمال الطاقة'
      ]
    },
    {
      id: 'ene-services',
      title: 'شركات خدمات الطاقة',
      icon: Settings,
      examples: [
        'صيانة محطات الطاقة',
        'تحسين كفاءة استهلاك الطاقة للمباني'
      ]
    },
    {
      id: 'ene-storage',
      title: 'شركات تخزين الطاقة',
      icon: Battery,
      examples: [
        'البطاريات الصناعية الضخمة',
        'أنظمة تخزين الطاقة للشبكات'
      ]
    }
  ],
  'greentech-dashboard': [
    {
      id: 'gre-solutions',
      title: 'شركات التقنيات البيئية',
      icon: ShieldCheck,
      examples: [
        'حلول تقليل التلوث الصناعي',
        'أجهزة تنقية الهواء والمدن الخضراء'
      ]
    },
    {
      id: 'gre-monitoring',
      title: 'شركات المراقبة البيئية',
      icon: Activity,
      examples: [
        'حساسات جودة الهواء والتربة',
        'مختبرات التحليل البيئي السحابية'
      ]
    },
    {
      id: 'gre-economy',
      title: 'شركات الاقتصاد الأخضر',
      icon: Recycle,
      examples: [
        'مشاريع الاستدامة وكفاءة الموارد',
        'نماذج تدريب الاقتصاد الدائري'
      ]
    },
    {
      id: 'gre-innovation',
      title: 'شركات الابتكار البيئي',
      icon: Lightbulb,
      examples: [
        'تطوير بدائل البلاستيك',
        'تقنيات منخفضة الانبعاثات الحرارية'
      ]
    }
  ],
  'waste-dashboard': [
    {
      id: 'was-collection',
      title: 'شركات جمع النفايات',
      icon: Trash2,
      examples: [
        'جمع النفايات المنزلية والتجارية',
        'إدارة النفايات الصناعية للمدن'
      ]
    },
    {
      id: 'was-recycling',
      title: 'شركات إعادة التدوير',
      icon: Recycle,
      examples: [
        'إعادة تدوير البلاستيك والمعادن والورق',
        'تقنيات فرز النفايات الآلية'
      ]
    },
    {
      id: 'was-treatment',
      title: 'شركات المعالجة',
      icon: Flame,
      examples: [
        'تحويل النفايات إلى طاقة WtE',
        'معالجة النفايات الخطرة والطبية'
      ]
    },
    {
      id: 'was-smart',
      title: 'إدارة النفايات الذكية',
      icon: Satellite,
      examples: [
        'تتبع الحاويات عبر الأقمار الصناعية',
        'تحسين مسارات الجمع بالذكاء الاصطناعي'
      ]
    }
  ],
  'water-dashboard': [
    {
      id: 'wat-treatment',
      title: 'شركات معالجة المياه',
      icon: Droplets,
      examples: [
        'تنقية مياه الشرب وتحلية البحر',
        'محطات التناضح العكسي الكبرى'
      ]
    },
    {
      id: 'wat-networks',
      title: 'شركات شبكات المياه',
      icon: Settings,
      examples: [
        'بناء وصيانة بنية تحتية للمياه',
        'توزيع المياه للمدن والمناطق'
      ]
    },
    {
      id: 'wat-wastewater',
      title: 'شركات مياه الصرف الصحي',
      icon: Waves,
      examples: [
        'معالجة مياه الصرف وإعادة الاستخدام',
        'تقنيات تكرير المياه للأغراض الصناعية'
      ]
    },
    {
      id: 'wat-tech',
      title: 'شركات تقنيات المياه',
      icon: Activity,
      examples: [
        'حساسات جودة المياه الذكية',
        'أنظمة إدارة استهلاك المياه الرقمية'
      ]
    }
  ],
  'renewable-energy-infrastructure-dashboard': [
    {
      id: 'ren-building',
      title: 'بناء محطات الطاقة المتجددة',
      icon: Sun,
      examples: [
        'محطات الطاقة الشمسية ومزارع الرياح',
        'مشاريع الهيدروجين الأخضر الكبرى'
      ]
    },
    {
      id: 'ren-installation',
      title: 'شركات تركيب الأنظمة',
      icon: Wrench,
      examples: [
        'تركيب ألواح شمسية للمنازل والمنشآت',
        'تركيب توربينات الرياح وصيانتها'
      ]
    },
    {
      id: 'ren-grids',
      title: 'شركات الشبكات الذكية',
      icon: Zap,
      examples: [
        'إدارة الشبكات الذكية Smart Grids',
        'تحسين توزيع واستهلاك الطاقة المتجددة'
      ]
    },
    {
      id: 'ren-storage',
      title: 'شركات تخزين الطاقة الكبرى',
      icon: Battery,
      examples: [
        'أنظمة تخزين الطاقة للشبكات العملاقة',
        'حلول الطاقة الاحتياطية المستدامة'
      ]
    }
  ],
  'carbon-capture-climate-tech-dashboard': [
    {
      id: 'car-capture',
      title: 'شركات التقاط الكربون',
      icon: Factory,
      examples: [
        'محطات التقاط CO2 المباشر من الهواء',
        'تقنيات تخزين الكربون في باطن الأرض'
      ]
    },
    {
      id: 'car-solutions',
      title: 'شركات حلول المناخ',
      icon: ThermometerSun,
      examples: [
        'تقنيات تقليل الاحتباس الحراري',
        'إدارة البصمة الكربونية الصناعية'
      ]
    },
    {
      id: 'car-markets',
      title: 'شركات الأسواق الكربونية',
      icon: Coins,
      examples: [
        'أنظمة تداول شهادات الانبعاث',
        'منصات تعويض الكربون العالمية'
      ]
    },
    {
      id: 'car-smart',
      title: 'تقنيات المناخ الذكية',
      icon: Atom,
      examples: [
        'نماذج التنبؤ المناخي بالذكاء الاصطناعي',
        'تحليل برمجيات التغير البيئي العالمي'
      ]
    }
  ]
};

import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Plane, 
  ShieldAlert, 
  Rocket, 
  Wrench, 
  Cpu, 
  Smartphone, 
  Settings, 
  Factory, 
  Truck, 
  Anchor, 
  Car, 
  Ship, 
  Train, 
  Zap, 
  Construction, 
  Bot, 
  Activity, 
  Layers, 
  Microwave, 
  Monitor, 
  Target, 
  Waves, 
  FastForward, 
  Lightbulb, 
  Network,
  Boxes,
  Microscope,
  Box,
  Sparkles,
  Layout,
  Target as TargetIcon
} from 'lucide-react';

export const metalsElectronicsOpportunities: Record<string, BusinessOpportunity[]> = {
  'aerospace-defense-dashboard': [
    {
      id: 'aer-planes',
      title: 'تصنيع الطائرات المدنية والشحن',
      icon: Plane,
      examples: [
        'تصنيع هياكل الطائرات ومكوناتها',
        'تطوير طائرات الشحن اللوجستي'
      ]
    },
    {
      id: 'aer-defense',
      title: 'أنظمة الدفاع والمراقبة',
      icon: ShieldAlert,
      examples: [
        'أنظمة الرادار والصواريخ الدفاعية',
        'تطوير تقنيات المراقبة العسكرية'
      ]
    },
    {
      id: 'aer-space',
      title: 'مكونات الفضاء والأقمار الصناعية',
      icon: Rocket,
      examples: [
        'تصنيع الأقمار الصناعية ومركبات الفضاء',
        'أنظمة الملاحة الفضائية المتقدمة'
      ]
    },
    {
      id: 'aer-mro',
      title: 'صيانة الطيران والدفاع MRO',
      icon: Wrench,
      examples: [
        'تحديث وصيانة الطائرات والمعدات',
        'إصلاح الأنظمة الدفاعية المعقدة'
      ]
    }
  ],
  'electronics-dashboard': [
    {
      id: 'ele-consumer',
      title: 'الإلكترونيات الاستهلاكية الذكية',
      icon: Smartphone,
      examples: [
        'تصنيع الهواتف والأجهزة اللوحية',
        'أجهزة المنزل الذكي المتصلة IoT'
      ]
    },
    {
      id: 'ele-industrial',
      title: 'الإلكترونيات الصناعية والتحكم',
      icon: Settings,
      examples: [
        'أنظمة التحكم الصناعي والقياس',
        'تصنيع اللوحات الإلكترونية المعقدة'
      ]
    },
    {
      id: 'ele-design',
      title: 'تصميم الإلكترونيات والأنظمة',
      icon: Monitor,
      examples: [
        'تصميم الدوائر المتكاملة PCB Design',
        'تطوير الأنظمة المدمجة المخصصة'
      ]
    },
    {
      id: 'ele-mfg',
      title: 'خطوط تصنيع وتجميع الأجهزة',
      icon: Factory,
      examples: [
        'تجميع المكونات الإلكترونية الدقيقة',
        'أتمتة خطوط الإنتاج الإلكتروني'
      ]
    }
  ],
  'industrial-machinery-dashboard': [
    {
      id: 'ind-heavy',
      title: 'المعدات الثقيلة والإنشائية',
      icon: Construction,
      examples: [
        'تصنيع الرافعات والحفارات الضخمة',
        'معدات البناء والطرق الثقيلة'
      ]
    },
    {
      id: 'ind-machines',
      title: 'الآلات وخطوط الإنتاج الصناعي',
      icon: Settings,
      examples: [
        'ماكينات الإنتاج وخطوط التصنيع',
        'معدات التعبئة والتغليف الآلية'
      ]
    },
    {
      id: 'ind-automation',
      title: 'أنظمة الأتمتة والمصانع الذكية',
      icon: Zap,
      examples: [
        'روبوتات المصانع وأنظمة التحكم',
        'حلول الثورة الصناعية الرابعة'
      ]
    },
    {
      id: 'ind-maintenance',
      title: 'الصيانة الصناعية وقطع الغيار',
      icon: Wrench,
      examples: [
        'صيانة المعدات وإصلاح الخطوط',
        'توريد قطع الغيار الصناعية المتخصصة'
      ]
    }
  ],
  'metals-dashboard': [
    {
      id: 'met-extraction',
      title: 'استخراج وتعدين المعادن',
      icon: Layers,
      examples: [
        'تعدين الحديد والنحاس والألمنيوم',
        'استكشاف واستخراج المعادن النفيسة'
      ]
    },
    {
      id: 'met-processing',
      title: 'معالجة وصهر المعادن',
      icon: Factory,
      examples: [
        'صهر وتنقية المعادن الصناعية',
        'إعادة تدوير المعادن والخردة'
      ]
    },
    {
      id: 'met-mfg',
      title: 'تصنيع الهياكل المعدنية والفولاذ',
      icon: Boxes,
      examples: [
        'تصنيع الألواح والهياكل المعدنية',
        'منتجات المعادن الإنشائية والصناعية'
      ]
    },
    {
      id: 'met-trading',
      title: 'تـجارة المعادن والسلع',
      icon: Activity,
      examples: [
        'تصدير واستيراد المعادن عالمياً',
        'الاستثمار في أسواق السلع المعدنية'
      ]
    }
  ],
  'rolling-stock-dashboard': [
    {
      id: 'rol-trains',
      title: 'تصنيع القطارات والمترو',
      icon: Train,
      examples: [
        'تصنيع قطارات الركاب والشحن',
        'تطوير عربات المترو والسكك الحديدية'
      ]
    },
    {
      id: 'rol-components',
      title: 'مكونات السكك الحديدية',
      icon: Settings,
      examples: [
        'أنظمة الفرامل والمحركات الحديدية',
        'صناعة عربات النقل التخصصية'
      ]
    },
    {
      id: 'rol-mro',
      title: 'صيانة وتحديث القطارات',
      icon: Wrench,
      examples: [
        'إصلاح وتحديث أنظمة السكك الحديدية',
        'صيانة أسطول النقل الحديدي'
      ]
    },
    {
      id: 'rol-systems',
      title: 'أنظمة تشغيل النقل الحديدي',
      icon: FastForward,
      examples: [
        'إدارة خطوط وشبكات السكك الحديدية',
        'أنظمة الإشارات والتحكم المروري'
      ]
    }
  ],
  'shipbuilding-dashboard': [
    {
      id: 'shi-building',
      title: 'بناء وبرمجة السفن الكبرى',
      icon: Ship,
      examples: [
        'بناء سفن الشحن وناقلات النفط',
        'تطوير سفن الركاب واليخوت الفاخرة'
      ]
    },
    {
      id: 'shi-engineering',
      title: 'الهندسة البحرية والموانئ',
      icon: Anchor,
      examples: [
        'تصميم أنظمة الدفع البحري',
        'هندسة وتجهيز الموانئ العالمية'
      ]
    },
    {
      id: 'shi-repair',
      title: 'إصلاح وصيانة السفن',
      icon: Waves,
      examples: [
        'صيانة الهياكل والمحركات البحرية',
        'تطوير أنظمة الملاحة في السفن'
      ]
    },
    {
      id: 'shi-equip',
      title: 'معدات الملاحة والإنقاذ البحري',
      icon: Activity,
      examples: [
        'محركات بحرية وأنظمة ملاحية',
        'معدات السلامة والإنقاذ البحري'
      ]
    }
  ],
  'vehicle-manufacturing-dashboard': [
    {
      id: 'veh-cars',
      title: 'تصنيع السيارات والكهربائية EV',
      icon: Car,
      examples: [
        'تصنيع السيارات الكهربائية والهجينة',
        'تطوير سيارات الركاب الحديثة'
      ]
    },
    {
      id: 'veh-trucks',
      title: 'تصنيع الشاحنات والمركبات الثقيلة',
      icon: Truck,
      examples: [
        'شاحنات النقل اللوجستي الثقيلة',
        'المركبات التجارية والإنشائية'
      ]
    },
    {
      id: 'veh-small',
      title: 'الدراجات والمركبات الخفيفة',
      icon: Box,
      examples: [
        'تصنيع الدراجات النارية والـ Scooters',
        'مركبات النقل الخفيفة للمدن'
      ]
    },
    {
      id: 'veh-parts',
      title: 'تصنيع مكونات وإلكترونيات السيارات',
      icon: Cpu,
      examples: [
        'محركات وأنظمة فرامل متطورة',
        'إلكترونيات التحكم في المركبات الذكية'
      ]
    }
  ],
  'semiconductors-dashboard': [
    {
      id: 'sem-design',
      title: 'تصميم الشرائح والمعالجات',
      icon: Cpu,
      examples: [
        'Chip Design وتصميم الدوائر المتكاملة',
        'تطوير وحدات المعالجة المركزية CPU'
      ]
    },
    {
      id: 'sem-mfg',
      title: 'تصنيع الرقائق Fab Plants',
      icon: Microscope,
      examples: [
        'Wafer Production والطباعة الضوئية',
        'خطوط إنتاج أشباه الموصلات الكبرى'
      ]
    },
    {
      id: 'sem-testing',
      title: 'تغليف واختبار الشرائح دقيق',
      icon: TargetIcon,
      examples: [
        'أنظمة التغليف Packaging والاختبار',
        'مراقبة الجودة الدقيقة للرقائق'
      ]
    },
    {
      id: 'sem-equip',
      title: 'معدات آلات أشباه الموصلات',
      icon: Settings,
      examples: [
        'آلات الليزر والقياس الدقيق',
        'تطوير تكنولوجيا تصنيع الرقائق'
      ]
    }
  ],
  'advanced-robotics-manufacturing-dashboard': [
    {
      id: 'rob-industrial',
      title: 'الروبوتات الصناعية واللحام',
      icon: Bot,
      examples: [
        'روبوتات خطوط الإنتاج واللحام',
        'أتمتة التجميع في الصناعات الكبيرة'
      ]
    },
    {
      id: 'rob-smart',
      title: 'الروبوتات الذكية وخدمات AI',
      icon: Sparkles,
      examples: [
        'روبوتات الخدمة والتحرك الذاتي AMRs',
        'تطوير الروبوتات المعتمدة على AI'
      ]
    },
    {
      id: 'rob-control',
      title: 'أنظمة التحكم الروبوتي الذكية',
      icon: Layout,
      examples: [
        'برمجيات التحكم الصناعي والحساسات',
        'أنظمة الرؤية الحاسوبية للروبوتات'
      ]
    },
    {
      id: 'rob-parts',
      title: 'تصنيع مكونات الروبوتات الدقيقة',
      icon: Zap,
      examples: [
        'المحركات الدقيقة والأذرع الروبوتية',
        'تطوير الحساسات عالية الـدقة'
      ]
    }
  ]
};

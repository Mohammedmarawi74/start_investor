import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Plane, 
  Truck, 
  Bus, 
  Train, 
  Car, 
  Ship, 
  Zap, 
  Cpu, 
  Activity, 
  Map, 
  Settings, 
  Navigation, 
  Globe, 
  Package, 
  Warehouse, 
  Wifi,
  Anchor,
  Box,
  Cigarette,
  Shield,
  Fuel,
  Code2,
  Wrench
} from 'lucide-react';

export const transportationLogisticsOpportunities: Record<string, BusinessOpportunity[]> = {
  'aviation-dashboard': [
    {
      id: 'avi-commercial',
      title: 'الطيران التجاري ونقل الركاب',
      icon: Plane,
      examples: [
        'شركات الطيران وحجز الرحلات',
        'نقل الركاب والشحن الجوي العالمي'
      ]
    },
    {
      id: 'avi-airports',
      title: 'المطارات والخدمات الأرضية',
      icon: Warehouse,
      examples: [
        'تشغيل المطارات وإدارة الرحلات',
        'خدمات المناولة الأرضية واللوجستيات'
      ]
    },
    {
      id: 'avi-maintenance',
      title: 'صيانة الطائرات و MRO',
      icon: Settings,
      examples: [
        'إصلاح المحركات وفحص السلامة',
        'عقود الصيانة الدورية للطائرات'
      ]
    },
    {
      id: 'avi-private',
      title: 'الطيران الخاص ورجال الأعمال',
      icon: Zap,
      examples: [
        'تأجير الطائرات الخاصة والـ Jets',
        'خدمات كبار الشخصيات والرحلات المخصصة'
      ]
    }
  ],
  'logistics-dashboard': [
    {
      id: 'log-freight',
      title: 'الشحن والنقل المتعدد الوسائط',
      icon: Truck,
      examples: [
        'الشحن البري والبحري والجوي',
        'نقل البضائع والمهمات الثقيلة'
      ]
    },
    {
      id: 'log-supply-chain',
      title: 'إدارة سلاسل الإمداد والمخازن',
      icon: Box,
      examples: [
        'إدارة المخازن Warehousing والتوزيع',
        'التحكم في المخزون Inventory Management'
      ]
    },
    {
      id: 'log-delivery',
      title: 'خدمات التوصيل والميل الأخير',
      icon: Package,
      examples: [
        'توصيل طلبات التجارة الإلكترونية Last-mile',
        'خدمات البريد السريع والشحن الدولي'
      ]
    },
    {
      id: 'log-digital',
      title: 'اللوجستيات الرقمية والتتبع',
      icon: Navigation,
      examples: [
        'أنظمة تتبع الشحنات والبيانات الضخمة',
        'منصات تحسين المسارات اللوجستية'
      ]
    }
  ],
  'public-transport-dashboard': [
    {
      id: 'pub-transport',
      title: 'النقل العام والحضري',
      icon: Bus,
      examples: [
        'تشغيل الحافلات والمترو والترام',
        'إدارة أساطيل النقل الجماعي للمدن'
      ]
    },
    {
      id: 'pub-smart-mobility',
      title: 'خدمات التنقل الذكي Mobility',
      icon: Wifi,
      examples: [
        'تطبيقات طلب السيارات Ride-hailing',
        'منصات تشاركية ومشاركة السيارات'
      ]
    },
    {
      id: 'pub-traffic-mgmt',
      title: 'إدارة المرور والجدولة الذكية',
      icon: Activity,
      examples: [
        'أنظمة إدارة المرور الحضري المتقدمة',
        'أنظمة حجز التذاكر والجدولة الآلية'
      ]
    },
    {
      id: 'pub-infrastructure',
      title: 'البنية التحتية والمواقف',
      icon: Map,
      examples: [
        'المحطات والمواقف وأنظمة الدفع',
        'تطوير مرافق النقل العام المتكاملة'
      ]
    }
  ],
  'rail-transport-dashboard': [
    {
      id: 'rail-transport',
      title: 'النقل والقطارات السريعة',
      icon: Train,
      examples: [
        'قطارات الركاب والشحن وقطارات التعدين',
        'القطارات فائقة السرعة High-speed rail'
      ]
    },
    {
      id: 'rail-ops',
      title: 'تشغيل وإدارة السكك الحديدية',
      icon: Settings,
      examples: [
        'إدارة الجدولة والعمليات الحديدية',
        'تشغيل مشغلي الشبكات والسكك'
      ]
    },
    {
      id: 'rail-infra',
      title: 'بناء وصيانة البنية الحديدية',
      icon: Navigation,
      examples: [
        'بناء السكك وأنظمة الإشارات والتحكم',
        'إصلاح المحطات والمرافق الحديدية'
      ]
    },
    {
      id: 'rail-safety',
      title: 'صيانتها وفحص السلامة الفني',
      icon: Shield,
      examples: [
        'الصيانة الدورية وفحص سلامة الخطوط',
        'أنظمة الإصلاح والتدقيق الفني'
      ]
    }
  ],
  'vehicles-road-traffic-dashboard': [
    {
      id: 'veh-cars',
      title: 'المركبات والشاحنات والدراجات',
      icon: Car,
      examples: [
        'السيارات الخاصة والشاحنات التجارية',
        'صناعة وتوزيع المركبات الثقيلة'
      ]
    },
    {
      id: 'veh-traffic',
      title: 'إدارة المرور والإشارات الذكية',
      icon: Activity,
      examples: [
        'التحكم المروري والإشارات الذكية',
        'مراقبة الطرق بالكاميرات والمستشعرات'
      ]
    },
    {
      id: 'veh-services',
      title: 'خدمات الصيانة والوقود والورش',
      icon: Fuel,
      examples: [
        'ورش الإصلاح ومحطات الوقود المتطورة',
        'خدمات فحص المركبات وترخيصها'
      ]
    },
    {
      id: 'veh-road-infra',
      title: 'البنية التحتية للطرق والجسور',
      icon: Map,
      examples: [
        'بناء الطرق السريعة والجسور والأنفاق',
        'تطوير شبكات الطرق الوطنية الإقليمية'
      ]
    }
  ],
  'water-transport-dashboard': [
    {
      id: 'wat-marine',
      title: 'النقل البحري والسفن العملاقة',
      icon: Ship,
      examples: [
        'سفن الشحن والناقلات والعبارات',
        'النقل البحري الدولي للركاب والبضائع'
      ]
    },
    {
      id: 'wat-ports',
      title: 'إدارة الموانئ والعمليات البحرية',
      icon: Anchor,
      examples: [
        'تشغيل الموانئ ومناولة الحاويات',
        'خدمات التخليص الجمركي البحري'
      ]
    },
    {
      id: 'wat-freight',
      title: 'الشحن والخدمات اللوجستية البحرية',
      icon: Package,
      examples: [
        'وكلاء الشحن البحري والخدمات اللوجستية',
        'إدارة حاويات النقل البحري العالمي'
      ]
    },
    {
      id: 'wat-support',
      title: 'صيانة السفن والخدمات الملاحية',
      icon: Settings,
      examples: [
        'صيانة السفن وخدمات الملاحة والأقمار',
        'دعم التأمين البحري واللوجستيات'
      ]
    }
  ],
  'autonomous-vehicles-dashboard': [
    {
      id: 'aut-vehicles',
      title: 'المركبات والروبوتات ذاتية القيادة',
      icon: Cpu,
      examples: [
        'السيارات والشاحنات ذاتية القيادة',
        'روبوتات التوصيل الذكية المستقلة'
      ]
    },
    {
      id: 'aut-systems',
      title: 'أنظمة القيادة والـ LiDAR الذكية',
      icon: Activity,
      examples: [
        'مستشعرات وأنظمة الـ LiDAR المتقدمة',
        'أنظمة القيادة المدعومة بالذكاء الاصطناعي'
      ]
    },
    {
      id: 'aut-smart-infra',
      title: 'البنية التحتية والاتصال V2X',
      icon: Wifi,
      examples: [
        'الطرق الذكية وأنظمة المرور المتصلة',
        'بروتوكولات الاتصال V2X للمركبات'
      ]
    },
    {
      id: 'aut-software',
      title: 'برمجيات Autonomy والقرار الذكي',
      icon: Code2,
      examples: [
        'برمجيات القرار والتحكم المستقل للمركبات',
        'أنظمة الإدراك البصري الآلي Machine Perception'
      ]
    }
  ],
  'ev-infrastructure-dashboard': [
    {
      id: 'ev-charging',
      title: 'محطات الشحن وشبكات الـ EV',
      icon: Zap,
      examples: [
        'محطات الشحن السريع والعام والمنزلي',
        'بناء شبكات الشحن الكهربائي الوطنية'
      ]
    },
    {
      id: 'ev-grid',
      title: 'إدارة الطاقة والشبكات الذكية',
      icon: Activity,
      examples: [
        'تكامل الشبكة وإدارة أحمال الشحن',
        'أنظمة إدارة الطاقة في محطات الشحن'
      ]
    },
    {
      id: 'ev-support',
      title: 'صيانتها وبطاريات السيارات والمركبات الكهربائية',
      icon: Wrench,
      examples: [
        'صيانة محركات الـ EV وتبديل البطاريات',
        'توفير قطع الغيار الكهربائية المتطورة'
      ]
    },
    {
      id: 'ev-infra',
      title: 'بنية التوزيع الكهربائي المتجدد',
      icon: Map,
      examples: [
        'شبكات التوزيع ومحطات الطاقة الفرعية',
        'دمج الطاقة المتجددة في شحن المركبات'
      ]
    }
  ]
};

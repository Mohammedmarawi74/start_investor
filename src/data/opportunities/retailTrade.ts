import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Hammer, 
  Shirt, 
  Utensils, 
  Sofa, 
  ShoppingBag, 
  Heart, 
  Globe, 
  Briefcase, 
  Tag, 
  Cpu, 
  Users, 
  Trophy, 
  Box, 
  Truck, 
  Activity, 
  Layout, 
  Smartphone, 
  Zap, 
  Coffee, 
  Search, 
  BarChart3, 
  Gift, 
  Package, 
  Settings, 
  Store, 
  Share2, 
  MapPin, 
  ClipboardList,
  Sparkles,
  Home,
  Building2
} from 'lucide-react';

export const retailTradeOpportunities: Record<string, BusinessOpportunity[]> = {
  'diy-retail-dashboard': [
    {
      id: 'diy-tools',
      title: 'متاجر الأدوات والعدد المنزلية',
      icon: Hammer,
      examples: [
        'أدوات الإصلاح الذاتي والمعدات اليدوية',
        'معدات البناء الصغيرة والدهانات'
      ]
    },
    {
      id: 'diy-improve',
      title: 'متاجر تحسين وتجديد المنزل',
      icon: Home,
      examples: [
        'إكسسوارات الديكور والكهرباء المنزلية',
        'متاجر إصلاح الحدائق والنجارة المنزلية'
      ]
    }
  ],
  'fashion-accessories-dashboard': [
    {
      id: 'fas-clothing',
      title: 'الملابس الجاهزة والموضة السريعة',
      icon: Shirt,
      examples: [
        'ملابس يومية ورياضية ومنتجات Fast Fashion',
        'العلامات التجارية الفاخرة Luxury Brands'
      ]
    },
    {
      id: 'fas-acc',
      title: 'الساعات والمجوهرات والإكسسوارات',
      icon: Tag,
      examples: [
        'الحقائب الجلدية والساعات الفاخرة',
        'المجوهرات والمصوغات المبتكرة'
      ]
    }
  ],
  'food-beverage-retail-dashboard': [
    {
      id: 'fnb-retail',
      title: 'سوبر ماركت ومتاجر المواد الغذائية',
      icon: Store,
      examples: [
        'متاجر الأغذية العضوية والمناطق الصحية',
        'سلاسل السوبرماركت الكبرى والهايبر'
      ]
    },
    {
      id: 'fnb-chains',
      title: 'سلاسل الوجبات السريعة والمقاهي',
      icon: Coffee,
      examples: [
        'سلاسل المقاهي المتخصصة ومطاعم الوجبات',
        'خدمات التجزئة الغذائية السريعة Takeaway'
      ]
    }
  ],
  'furniture-retail-dashboard': [
    {
      id: 'fur-home',
      title: 'بيع الأثاث المنزلي والمكتبي',
      icon: Sofa,
      examples: [
        'تجهيز غرف النوم والمطابخ الحديثة',
        'أثاث المكاتب وتجهيز مقرات الشركات'
      ]
    },
    {
      id: 'fur-custom',
      title: 'الأثاث المصمم حسب الطلب',
      icon: Settings,
      examples: [
        'نجارة الأثاث الفاخر والمصمم خصيصاً',
        'منصات بيع الأثاث عبر الإنترنت'
      ]
    }
  ],
  'general-merchandise-dashboard': [
    {
      id: 'gen-mega',
      title: 'المتاجر الشاملة والهايبر ماركت',
      icon: ShoppingBag,
      examples: [
        'البيع المتعدد الفئات Hypermarkets',
        'متاجر التجزئة الضخمة والشاملة'
      ]
    },
    {
      id: 'gen-low',
      title: 'متاجر التجزئة منخفضة التكلفة',
      icon: Tag,
      examples: [
        'متاجر الخصم Discount Stores',
        'منصات البيع بالجملة للأفراد'
      ]
    }
  ],
  'health-hygiene-dashboard': [
    {
      id: 'hea-hygiene',
      title: 'منتجات النظافة الشخصية والمنزلية',
      icon: Heart,
      examples: [
        'المطهرات ومنتجات العناية بالبشرة',
        'المنتجات الصحية والمكملات الغذائية'
      ]
    },
    {
      id: 'hea-cleaning',
      title: 'أدوات ومنظفات المنزل المتقدمة',
      icon: Zap,
      examples: [
        'منظفات المنزل الصديقة للبيئة',
        'أدوات التنظيف والتعقيم الاحترافية'
      ]
    }
  ],
  'international-trade-dashboard': [
    {
      id: 'int-exp',
      title: 'التصدير والاستيراد العالمي',
      icon: Globe,
      examples: [
        'تصدير المنتجات المحلية للأسواق الدولية',
        'استيراد السلع الاستهلاكية والمواد الخام'
      ]
    },
    {
      id: 'int-chain',
      title: 'سلاسل الإمداد واللوجستيات الدولية',
      icon: Truck,
      examples: [
        'إدارة التوريد العالمي Sourcing',
        'خدمات الشحن والتخليص الجمركي'
      ]
    }
  ],
  'office-supplies-dashboard': [
    {
      id: 'off-supplies',
      title: 'مستلزمات المكاتب والشركات',
      icon: Briefcase,
      examples: [
        'أدوات الكتابة والطباعة والأوراق',
        'تجهيزات المكاتب التقنية والأثاث المكتبي'
      ]
    },
    {
      id: 'off-b2b',
      title: 'خدمات التوريد المؤسسي B2B',
      icon: Layout,
      examples: [
        'عقود التوريد السنوية للشركات',
        'خدمات إدارة مرافق المكاتب والعمل'
      ]
    }
  ],
  'private-label-dashboard': [
    {
      id: 'pri-label',
      title: 'تصنيع العلامات التجارية الخاصة',
      icon: Tag,
      examples: [
        'إنتاج منتجات تحت اسم المتجر Private Label',
        'تطوير منتجات الـ White Label للغير'
      ]
    },
    {
      id: 'pri-dev',
      title: 'تطوير الهوية والبراندينج الخاص',
      icon: Zap,
      examples: [
        'تصميم العبوات وإطلاق العلامات التجارية',
        'تصنيع السلع الاستهلاكية المتعاقد عليها'
      ]
    }
  ],
  'retail-technology-dashboard': [
    {
      id: 'ret-pos',
      title: 'أنظمة نقاط البيع POS المتطورة',
      icon: Smartphone,
      examples: [
        'إدارة المبيعات والكاشير السحابية',
        'أنظمة الدفع الذكي والتكامل المالي'
      ]
    },
    {
      id: 'ret-automation',
      title: 'أتمتة المتاجر والتقنيات الذكية',
      icon: Cpu,
      examples: [
        'أنظمة تتبع المخزون RFID والخدمة الذاتية',
        'تحسين المتاجر بالذكاء الاصطناعي'
      ]
    }
  ],
  'shopping-behavior-dashboard': [
    {
      id: 'sho-analytics',
      title: 'تحليل سلوك المستهلك ورحلة الشراء',
      icon: Users,
      examples: [
        'دراسة أنماط الشراء واتخاذ القرار',
        'تحليل جودة تجربة العميل بمتاجر التجزئة'
      ]
    },
    {
      id: 'sho-personal',
      title: 'التخصيص الشخصي المدعوم بـ AI',
      icon: Sparkles,
      examples: [
        'نظم التوصية بالمنتجات المخصصة',
        'تحليل السلوك الرقمي للمتسوقين'
      ]
    }
  ],
  'sports-leisure-retail-dashboard': [
    {
      id: 'spo-equip',
      title: 'معدات الرياضة واللياقة البدنية',
      icon: Trophy,
      examples: [
        'أجهزة الجيم والملابس الرياضية الاحترافية',
        'أدوات الأنشطة الخارجية والتخييم'
      ]
    },
    {
      id: 'spo-leisure',
      title: 'تجارة الترفيه والأنشطة البدنية',
      icon: Activity,
      examples: [
        'تجهيز النوادي الرياضية والمراكز',
        'معدات الترفيه العائلي والنشط'
      ]
    }
  ],
  'subscriptions-direct-selling-dashboard': [
    {
      id: 'sub-model',
      title: 'نماذج الاشتراكات والصناديق الشهرية',
      icon: Box,
      examples: [
        'صناديق المنتجات الاستهلاكية المتكررة',
        'نماذج العضوية والاشتراكات الرقمية'
      ]
    },
    {
      id: 'sub-direct',
      title: 'البيع المباشر للمستهلك D2C',
      icon: Share2,
      examples: [
        'البيع بدون وسيط من المصنع للعميل',
        'إدارة منصات البيع الشخصي والمباشر'
      ]
    }
  ],
  'supply-chain-dashboard': [
    {
      id: 'scm-mgmt',
      title: 'إدارة سلاسل الإمداد المتقدمة',
      icon: ClipboardList,
      examples: [
        'تخطيط الإنتاج وإدارة المخزون الذكي',
        'توزيع المنتجات وتحسين المسارات اللوجستية'
      ]
    },
    {
      id: 'scm-tracking',
      title: 'أنظمة التتبع واللوجستيات الرقمية',
      icon: MapPin,
      examples: [
        'تتبع الشحنات بالـ GPS وأنظمة RFID',
        'تحسين عمليات استلام وتسليم البضائع'
      ]
    }
  ],
  'wholesale-dashboard': [
    {
      id: 'who-market',
      title: 'أسواق وتجارة الجملة الكبرى',
      icon: Building2,
      examples: [
        'توزيع السلع الغذائية والاستهلاكية للمحلات',
        'منصات تجارة الجملة B2B الإلكترونية'
      ]
    },
    {
      id: 'who-hubs',
      title: 'مراكز التوزيع والموردين الإقليميين',
      icon: Box,
      examples: [
        'تجهيز المستودعات الضخمة Regional Hubs',
        'توزيع البضائع بكميات كبيرة لصغار التجار'
      ]
    }
  ],
  'ecommerce-logistics-fulfillment-dashboard': [
    {
      id: 'eco-fulfillment',
      title: 'تخزين وتجهيز طلبات الأونلاين',
      icon: Package,
      examples: [
        'عمليات الـ Picking والشحن السريع',
        'إدارة المرتجعات والتغليف الاحترافي'
      ]
    },
    {
      id: 'eco-lastmile',
      title: 'خدمات التوصيل النهائي Last-mile',
      icon: Truck,
      examples: [
        'شركات التوصيل السريع وخدمات البريد',
        'تتبع الطلبات اللحظي للعملاء'
      ]
    }
  ],
  'omnichannel-retail-systems-dashboard': [
    {
      id: 'omn-integration',
      title: 'دمج قنوات البيع أونلاين وأوفلاين',
      icon: Layout,
      examples: [
        'توحيد المخزون وقاعدة بيانات العملاء',
        'أنظمة البيع الموحدة Omnichannel'
      ]
    },
    {
      id: 'omn-experience',
      title: 'تـجربة العميل الموحدة والشاملة',
      icon: Smartphone,
      examples: [
        'خدمات Click & Collect واستلام الفروع',
        'برامج الولاء الموحدة عبر كافة القنوات'
      ]
    }
  ]
};

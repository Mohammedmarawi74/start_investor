import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Building2, 
  Factory, 
  Warehouse, 
  Home, 
  Couch, 
  Key, 
  Wallet, 
  Calculator, 
  ShieldCheck, 
  Layout, 
  Briefcase, 
  Smartphone, 
  Search, 
  Eye, 
  Map, 
  Zap, 
  Activity, 
  Network, 
  Cpu, 
  Box, 
  Users, 
  Landmark, 
  Building,
  TrendingUp,
  MapPin
} from 'lucide-react';

export const realEstateOpportunities: Record<string, BusinessOpportunity[]> = {
  'commercial-real-estate-dashboard': [
    {
      id: 'com-offices',
      title: 'العقارات والمكاتب الإدارية',
      icon: Building2,
      examples: [
        'مكاتب الشركات والأبراج الإدارية',
        'المساحات التجارية المخصصة للتجزئة'
      ]
    },
    {
      id: 'com-mgmt',
      title: 'إدارة المجمعات التجارية',
      icon: Layout,
      examples: [
        'إدارة مباني المكاتب والمولات',
        'عقود الإيجار التجارية طويلة الأجل'
      ]
    },
    {
      id: 'com-dev',
      title: 'تطوير المشاريع الكبرى',
      icon: Building,
      examples: [
        'بناء المولات والأبراج السحابية',
        'مشاريع المدن المتعددة الاستخدامات'
      ]
    },
    {
      id: 'com-invest',
      title: 'الاستثمار العقاري التجاري REITs',
      icon: Wallet,
      examples: [
        'صناديق الاستثمار العقاري المتداولة',
        'شراء وإعادة بيع الأصول التجارية'
      ]
    }
  ],
  'industrial-real-estate-dashboard': [
    {
      id: 'ind-warehouse',
      title: 'المستودعات والمراكز اللوجستية',
      icon: Warehouse,
      examples: [
        'مراكز التخزين الذكية Warehouses',
        'المخازن المبردة والمخصصة للشحن'
      ]
    },
    {
      id: 'ind-factories',
      title: 'المصانع والمناطق الصناعية',
      icon: Factory,
      examples: [
        'تطوير أراضي المصانع وخطوط التصنيع',
        'مناطق الإنتاج الصناعي المتكاملة'
      ]
    },
    {
      id: 'ind-logistics',
      title: 'المناطق اللوجستية والجمركية',
      icon: Box,
      examples: [
        'مراكز التوزيع و hubs الشحن العالمية',
        'تطوير البنية التحتية للمناطق الحرة'
      ]
    },
    {
      id: 'ind-infra',
      title: 'تجهيز أراضي الخدمات الصناعية',
      icon: Map,
      examples: [
        'بنية تحتية متطورة وشبكات خدمات',
        'تجهيز الأراضي للمشاريع الثقيلة'
      ]
    }
  ],
  'mortgages-financing-dashboard': [
    {
      id: 'mor-loans',
      title: 'القروض العقارية السكنية',
      icon: Home,
      examples: [
        'قروض شراء المنازل والفلل',
        'قروض بناء وترميم العقارات للاستثمار'
      ]
    },
    {
      id: 'mor-financing',
      title: 'تمويل المشاريع الكبرى',
      icon: Wallet,
      examples: [
        'إعادة التمويل Refinancing للمطورين',
        'القروض العقارية المدعومة حكومياً'
      ]
    },
    {
      id: 'mor-banking',
      title: 'خدمات التمويل والمخاطر',
      icon: ShieldCheck,
      examples: [
        'تقييم الجدارة الائتمانية العقارية',
        'إدارة مخاطر القروض والسيولة'
      ]
    },
    {
      id: 'mor-insurance',
      title: 'التأمين المرتبط بالعقارات',
      icon: Landmark,
      examples: [
        'تأمين الممتلكات والرهن العقاري',
        'تغطية المخاطر الائتمانية والإنشائية'
      ]
    }
  ],
  'property-services-dashboard': [
    {
      id: 'ser-mgmt',
      title: 'إدارة الأملاك والإيجارات',
      icon: Key,
      examples: [
        'تحصيل الإيجارات ومتابعة العقود',
        'إدارة المستأجرين والصيانة الدورية'
      ]
    },
    {
      id: 'ser-brokerage',
      title: 'الوساطة والتقييم العقاري',
      icon: Users,
      examples: [
        'خدمات السماسرة والوسطاء المعتمدين',
        'تقييم وتثمين العقارات للأفراد والشركات'
      ]
    },
    {
      id: 'ser-maintenance',
      title: 'خدمات الصيانة والتشغيل',
      icon: Layout,
      examples: [
        'صيانة الكهرباء والسباكة والترميم',
        'إدارة المرافق Facilities Management'
      ]
    },
    {
      id: 'ser-security',
      title: 'الأمن وخدمات النمط المعيشي',
      icon: ShieldCheck,
      examples: [
        'أنظمة الأمن والحراسة للمجمعات',
        'خدمات النظافة والتدبير المنزلي'
      ]
    }
  ],
  'residential-real-estate-dashboard': [
    {
      id: 'res-units',
      title: 'العقارات السكنية المتنوعة',
      icon: Home,
      examples: [
        'شقق فاخرة وفلل ومنازل مستقلة',
        'وحدات سكنية اقتصادية مسبقة الصنع'
      ]
    },
    {
      id: 'res-dev',
      title: 'التطوير السكني والضواحي',
      icon: Building,
      examples: [
        'بناء المجمعات السكنية المغلقة Compounds',
        'تطوير الضواحي والمدن الجديدة'
      ]
    },
    {
      id: 'res-rentals',
      title: 'الإيجارات السكنية المدارة',
      icon: MapPin,
      examples: [
        'إقامة سياحية وشقق مفروشة قصيرة الأجل',
        'إيجارات سكنية طويلة الأمد للعائلات'
      ]
    },
    {
      id: 'res-investment',
      title: 'الاستثمار السكني المدر للدخل',
      icon: TrendingUp,
      examples: [
        'شراء وإعادة بيع العقارات السكنية',
        'استثمار الأصول السكنية للإيجار المستمر'
      ]
    }
  ],
  'proptech-dashboard': [
    {
      id: 'pt-platforms',
      title: 'منصات العقارات الرقمية المباشرة',
      icon: Smartphone,
      examples: [
        'تطبيقات البحث والبيع والشراء أونلاين',
        'سوق العقارات العالمي Marketplaces'
      ]
    },
    {
      id: 'pt-mgmt',
      title: 'إدارة العقارات الرقمية الذكية',
      icon: Layout,
      examples: [
        'أنظمة إدارة الإيجارات والمدفوعات آلياً',
        'تتبع رحلة المستأجر الرقمية'
      ]
    },
    {
      id: 'pt-analytics',
      title: 'تحليل البيانات وتوقع الأسعار',
      icon: Search,
      examples: [
        'تقييم أسعار السوق بالذكاء الاصطناعي',
        'توقع اتجاهات الطلب العقاري المستقبلي'
      ]
    },
    {
      id: 'pt-vr',
      title: 'تقنيات الواقع الافتراضي VR',
      icon: Eye,
      examples: [
        'الجولات العقارية الافتراضية 360',
        'العرض الرقمي للمشاريع قبل بنائها'
      ]
    }
  ],
  'smart-cities-development-dashboard': [
    {
      id: 'sc-infra',
      title: 'البنية التحتية الذكية للمدن',
      icon: Network,
      examples: [
        'شبكات الطاقة والمياه والاتصالات الذكية',
        'إدارة المرور وأنظمة النقل الذاتي'
      ]
    },
    {
      id: 'sc-planning',
      title: 'التخطيط الحضري المستدام',
      icon: Map,
      examples: [
        'تصميم المدن الخضراء والمستدامة',
        'إدارة الكثافة السكانية ببيانات ضخمة'
      ]
    },
    {
      id: 'sc-transport',
      title: 'حلول النقل الحضري الذكي',
      icon: Zap,
      examples: [
        'أنظمة المترو والحافلات المؤتمتة',
        'إشارات المرور المدعومة بـ AI'
      ]
    },
    {
      id: 'sc-govt',
      title: 'إدارة الخدمات الرقمية للمدن',
      icon: Cpu,
      examples: [
        'خدمات الحكومة الإلكترونية e-government',
        'تحليل جودة الحياة في المدن الذكية'
      ]
    }
  ]
};

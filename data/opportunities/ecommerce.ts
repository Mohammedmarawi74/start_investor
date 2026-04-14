import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Building2, 
  ShoppingCart, 
  Users, 
  LineChart, 
  BarChart4, 
  PlayCircle, 
  Factory, 
  Truck, 
  Settings, 
  CreditCard, 
  Target, 
  Search, 
  MousePointer2, 
  Cpu, 
  Globe, 
  Database, 
  Video, 
  BookOpen, 
  Lock,
  Package,
  Boxes,
  Briefcase,
  Monitor,
  Zap,
  ShieldCheck,
  Layout
} from 'lucide-react';

export const ecommerceOpportunities: Record<string, BusinessOpportunity[]> = {
  'b2b-ecommerce-dashboard': [
    {
      id: 'b2b-platforms',
      title: 'منصات التجارة بين الشركات',
      icon: Building2,
      examples: [
        'أسواق الجملة الرقمية',
        'منصات المواد الخام والمعدات الصناعية',
        'توريد الشركات Wholesale'
      ]
    },
    {
      id: 'b2b-procurement',
      title: 'شركات التوريد الرقمي',
      icon: Settings,
      examples: [
        'أنظمة شراء الشركات الذكية',
        'إدارة سلاسل التوريد الرقمية',
        'أتمتة طلبات المخزون'
      ]
    },
    {
      id: 'b2b-industry',
      title: 'منصات الصناعات المتخصصة',
      icon: Factory,
      examples: [
        'منصات قطع الغيار والمواد الإنشائية',
        'المنصات الطبية B2B'
      ]
    },
    {
      id: 'b2b-logistics',
      title: 'شركات اللوجستيات B2B',
      icon: Truck,
      examples: [
        'الشحن التجاري المتقدم',
        'إدارة المستودعات والتخزين'
      ]
    },
    {
      id: 'b2b-saas',
      title: 'شركات برمجيات التجارة B2B',
      icon: Monitor,
      examples: [
        'أنظمة ERP للتجارة',
        'إدارة الفواتير والطلبات الآلية'
      ]
    }
  ],
  'b2c-ecommerce-dashboard': [
    {
      id: 'b2c-stores',
      title: 'المتاجر الإلكترونية المباشرة',
      icon: ShoppingCart,
      examples: [
        'متاجر ملابس وإلكترونيات',
        'متاجر تجميل وأغذية متخصصة'
      ]
    },
    {
      id: 'b2c-dtc',
      title: 'العلامات التجارية المباشرة DTC',
      icon: Target,
      examples: [
        'البيع المباشر من المصنع للمستهلك',
        'هوامش ربح مرتفعة بدون وسيط'
      ]
    },
    {
      id: 'b2c-marketplaces',
      title: 'منصات السوق Marketplaces',
      icon: Globe,
      examples: [
        'بيئات البيع متعددة البائعين',
        'إدارة الدفع والعملات والعمولات'
      ]
    },
    {
      id: 'b2c-payments',
      title: 'شركات الدفع الإلكتروني',
      icon: CreditCard,
      examples: [
        'بوابات الدفع والمحافظ الرقمية',
        'حلول التقسيط BNPL'
      ]
    },
    {
      id: 'b2c-marketing',
      title: 'التسويق الإلكتروني داخل التجارة',
      icon: Search,
      examples: [
        'أنظمة تحسين التحويل CRO',
        'إدارة علاقات العملاء CRM'
      ]
    }
  ],
  'c2c-ecommerce-dashboard': [
    {
      id: 'c2c-platforms',
      title: 'منصات البيع بين الأفراد',
      icon: Users,
      examples: [
        'بيع المنتجات المستعملة',
        'منصات الإعلانات المبوبة'
      ]
    },
    {
      id: 'c2c-resale',
      title: 'منصات إعادة التدوير والبيع',
      icon: Boxes,
      examples: [
        'سوق الملابس المستعملة Re-sale',
        'منصات تدريب الاقتصاد الدائري'
      ]
    },
    {
      id: 'c2c-auctions',
      title: 'منصات المزادات',
      icon: Zap,
      examples: [
        'أنظمة المزادات الإلكترونية Auction',
        'منصات المزايدة التنافسية'
      ]
    },
    {
      id: 'c2c-brokerage',
      title: 'خدمات الوساطة بين الأفراد',
      icon: ShieldCheck,
      examples: [
        'ضمان الدفع وحماية المشترين',
        'أنظمة تقييم الموثوقية'
      ]
    }
  ],
  'digital-shopping-behaviour-dashboard': [
    {
      id: 'beh-analytics',
      title: 'شركات تحليل سلوك المستهلك',
      icon: MousePointer2,
      examples: [
        'تتبع النقرات ورحلة العميل',
        'تحليل الخرائط الحرارية Heatmaps'
      ]
    },
    {
      id: 'beh-ux',
      title: 'شركات تحسين تجربة المستهلك',
      icon: Layout,
      examples: [
        'تحسين صفحات المنتج واختبارات A/B',
        'تحسين معدلات التحويل الرقمي'
      ]
    },
    {
      id: 'beh-ai',
      title: 'شركات الذكاء الاصطناعي للتجارة',
      icon: Cpu,
      examples: [
        'محركات توصية المنتجات الشخصية',
        'التسوق التنبؤي Predictive Shopping'
      ]
    },
    {
      id: 'beh-market',
      title: 'شركات بيانات السوق',
      icon: Database,
      examples: [
        'تحليل الطلب واتجاهات الشراء',
        'تحليل المنافسين الرقمي'
      ]
    }
  ],
  'ecommerce-key-figures-dashboard': [
    {
      id: 'fig-analytics',
      title: 'شركات التحليلات المتقدمة',
      icon: BarChart4,
      examples: [
        'لوحات تتبع KPIs الربحية',
        'تحليلات الإيرادات والنمو'
      ]
    },
    {
      id: 'fig-bigdata',
      title: 'شركات البيانات الضخمة',
      icon: Database,
      examples: [
        'تحليل ملايين الطلبات السحابي',
        'تقسيم العملاء المتقدم Segmentation'
      ]
    },
    {
      id: 'fig-reports',
      title: 'شركات التقارير السوقية',
      icon: BookOpen,
      examples: [
        'تقارير ذكاء السوق Market Intelligence',
        'بيانات المستهلكين الكلية'
      ]
    },
    {
      id: 'fig-financial',
      title: 'شركات تتبع الأداء المالي',
      icon: LineChart,
      examples: [
        'تحليل CAC / LTV والربحية',
        'لوحات قياس العائد على الاستثمار ROI'
      ]
    }
  ],
  'paid-content-dashboard': [
    {
      id: 'cnt-platforms',
      title: 'منصات المحتوى المدفوع',
      icon: Lock,
      examples: [
        'اشتراكات المحتوى والحصريات',
        'فيديوهات ومقالات Premium'
      ]
    },
    {
      id: 'cnt-monetization',
      title: 'شركات تسييل محتوى المبدعين',
      icon: Video,
      examples: [
        'أنظمة دعم المؤثرين واشتراكاتهم',
        'أنظمة Tipping ودعم الجمهور'
      ]
    },
    {
      id: 'cnt-courses',
      title: 'منصات الدورات الرقمية',
      icon: BookOpen,
      examples: [
        'التعليم المدفوع عبر الإنترنت',
        'منصات الويبينار Webinars'
      ]
    },
    {
      id: 'cnt-ads',
      title: 'الإعلانات المدفوعة داخل المحتوى',
      icon: PlayCircle,
      examples: [
        'المحتوى الممول Sponsored Content',
        'التسويق بالعمولة Affiliate'
      ]
    },
    {
      id: 'cnt-subscriptions',
      title: 'منصات الاشتراكات والعضويات',
      icon: Users,
      examples: [
        'أنظمة العضويات الحصرية Membership',
        'المجتمعات الرقمية المدفوعة'
      ]
    }
  ]
};

import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Building2, 
  HardHat, 
  Wrench, 
  Paintbrush, 
  BrickWall, 
  Home, 
  Construction, 
  Truck, 
  Pickaxe, 
  Cog, 
  Box, 
  Monitor, 
  Cpu, 
  Smartphone, 
  Layers, 
  Zap, 
  Layout, 
  Move, 
  Factory, 
  Settings,
  ShieldCheck,
  Search,
  Maximize,
  Package,
  Globe,
  Database,
  BarChart3,
  Dna
} from 'lucide-react';

export const constructionOpportunities: Record<string, BusinessOpportunity[]> = {
  'building-construction-dashboard': [
    {
      id: 'bld-residential',
      title: 'شركات البناء السكني والتجاري',
      icon: Building2,
      examples: [
        'بناء منازل سكنية',
        'بناء أبراج سكنية',
        'بناء مكاتب تجارية',
        'مشاريع تطوير عقاري'
      ]
    },
    {
      id: 'bld-infrastructure',
      title: 'شركات البناء الهندسي والبنية التحتية',
      icon: Construction,
      examples: [
        'الجسور والطرق والأنفاق',
        'المطارات ومحطات القطارات'
      ]
    },
    {
      id: 'bld-contracting',
      title: 'شركات المقاولات العامة',
      icon: HardHat,
      examples: [
        'إدارة مواقع البناء',
        'تنفيذ مشاريع تسليم مفتاح',
        'تنسيق الموردين والمقاولين'
      ]
    },
    {
      id: 'bld-finishing',
      title: 'شركات التشطيبات والداخلية',
      icon: Paintbrush,
      examples: [
        'الدهانات والأرضيات',
        'الإضاءة والديكور الداخلي'
      ]
    },
    {
      id: 'bld-materials',
      title: 'شركات مواد البناء',
      icon: BrickWall,
      examples: [
        'الإسمنت والحديد والطوب',
        'الزجاج والعوازل'
      ]
    },
    {
      id: 'bld-dev',
      title: 'شركات العقارات التطويرية',
      icon: Home,
      examples: [
        'تطوير مجمعات سكنية',
        'مشاريع تجارية',
        'بيع وحدات جاهزة'
      ]
    }
  ],
  'heavy-construction-dashboard': [
    {
      id: 'hvy-mega',
      title: 'شركات المشاريع الضخمة',
      icon: Factory,
      examples: [
        'السدود والموانئ',
        'المصانع الضخمة',
        'محطات الطاقة'
      ]
    },
    {
      id: 'hvy-equip',
      title: 'شركات المعدات الثقيلة',
      icon: Settings,
      examples: [
        'حفارات ورافعات',
        'بلدوزرات',
        'معدات نقل ثقيل'
      ]
    },
    {
      id: 'hvy-logistics',
      title: 'شركات النقل واللوجستيات الثقيلة',
      icon: Truck,
      examples: [
        'نقل معدات البناء',
        'نقل الخرسانة',
        'خدمات الشحن الصناعي'
      ]
    },
    {
      id: 'hvy-earth',
      title: 'شركات الحفر والأعمال الأرضية',
      icon: Pickaxe,
      examples: [
        'تسوية الأراضي',
        'الحفر العميق',
        'تجهيز المواقع'
      ]
    },
    {
      id: 'hvy-maintenance',
      title: 'شركات الصيانة الصناعية',
      icon: Wrench,
      examples: [
        'صيانة المنشآت الكبيرة',
        'إصلاح البنية التحتية',
        'تحديث المصانع'
      ]
    }
  ],
  'smart-construction-bim-dashboard': [
    {
      id: 'smt-bim',
      title: 'شركات نمذجة معلومات البناء BIM',
      icon: Monitor,
      examples: [
        'تصميم 3D للمشاريع',
        'تنسيق هندسي',
        'كشف التعارضات قبل التنفيذ'
      ]
    },
    {
      id: 'smt-mgmt',
      title: 'شركات إدارة المشاريع الرقمية',
      icon: Smartphone,
      examples: [
        'إدارة جداول البناء',
        'تتبع التكاليف',
        'إدارة فرق العمل عبر منصات رقمية'
      ]
    },
    {
      id: 'smt-twin',
      title: 'شركات التوأم الرقمي',
      icon: Cpu,
      examples: [
        'محاكاة المشاريع قبل التنفيذ',
        'مراقبة الأداء بعد البناء',
        'تحليل استهلاك الطاقة'
      ]
    },
    {
      id: 'smt-auto',
      title: 'شركات أتمتة البناء',
      icon: Zap,
      examples: [
        'روبوتات البناء',
        'طباعة خرسانة 3D',
        'أنظمة ذكية للمواقع'
      ]
    },
    {
      id: 'smt-vrar',
      title: 'شركات الواقع الافتراضي والمعزز',
      icon: Layers,
      examples: [
        'عرض المشاريع قبل البناء',
        'تدريب العمال',
        'مراجعة التصميمات'
      ]
    },
    {
      id: 'smt-data',
      title: 'شركات تحليل البيانات الإنشائية',
      icon: BarChart3,
      examples: [
        'تحليل التكلفة وتوقع التأخير',
        'تحسين الأداء الإنشائي'
      ]
    }
  ],
  'modular-prefab-construction-dashboard': [
    {
      id: 'mod-prefab',
      title: 'شركات البناء المسبق',
      icon: Layout,
      examples: [
        'جدران جاهزة',
        'غرف مسبقة الصنع',
        'وحدات بناء كاملة'
      ]
    },
    {
      id: 'mod-modular',
      title: 'شركات البناء المعياري',
      icon: Move,
      examples: [
        'وحدات فنادق',
        'وحدات سكنية جاهزة',
        'مباني قابلة للتجميع'
      ]
    },
    {
      id: 'mod-factory',
      title: 'مصانع تصنيع وحدات البناء',
      icon: Factory,
      examples: [
        'مصانع غرف جاهزة',
        'خطوط إنتاج وحدات خرسانية',
        'تصنيع هياكل فولاذية'
      ]
    },
    {
      id: 'mod-install',
      title: 'شركات النقل والتركيب',
      icon: Truck,
      examples: [
        'نقل الوحدات الجاهزة',
        'تركيب في الموقع',
        'خدمات الرفع والتثبيت'
      ]
    },
    {
      id: 'mod-design',
      title: 'شركات تصميم وحدات البناء',
      icon: Maximize,
      examples: [
        'تصميم نماذج معيارية',
        'تحسين قابلية النقل',
        'هندسة وحدات قابلة للتوسع'
      ]
    },
    {
      id: 'mod-mgmt',
      title: 'شركات إدارة مشاريع Modular',
      icon: ShieldCheck,
      examples: [
        'تنسيق المصنع والموقع',
        'إدارة سلاسل الإمداد',
        'ضبط الجودة قبل التركيب'
      ]
    }
  ]
};

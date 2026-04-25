import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Smartphone, 
  Cpu, 
  Tv, 
  Monitor, 
  Settings, 
  Code2, 
  Wifi, 
  Bot, 
  Cloud, 
  Zap, 
  Network, 
  ShieldCheck, 
  Database, 
  Layers, 
  Microwave, 
  HardDrive,
  Watch,
  Home,
  Wrench,
  Search,
  Layout,
  Globe, 
  Terminal,
  TowerControl,
  Eye,
  Activity
} from 'lucide-react';

export const technologyTelecommunicationsOpportunities: Record<string, BusinessOpportunity[]> = {
  'consumer-electronics-dashboard': [
    {
      id: 'con-electronics',
      title: 'الإلكترونيات الاستهلاكية الذكية',
      icon: Smartphone,
      examples: [
        'الهواتف الذكية والأجهزة اللوحية',
        'أجهزة التلفاز الذكية والشاشات'
      ]
    },
    {
      id: 'con-wearables',
      title: 'الأجهزة القابلة للارتداء',
      icon: Watch,
      examples: [
        'الساعات الذكية Smartwatches',
        'سماعات الأذن وأجهزة تتبع اللياقة'
      ]
    },
    {
      id: 'con-smart-home',
      title: 'أنظمة المنزل الذكي Hubs',
      icon: Home,
      examples: [
        'أنظمة التحكم عن بعد الذكية',
        'أجهزة Smart Home Hubs المتكاملة'
      ]
    },
    {
      id: 'con-mfg',
      title: 'صناعة وتجميع الإلكترونيات',
      icon: Settings,
      examples: [
        'تجميع الهواتف والأجهزة المحمولة',
        'تطوير المكونات الإلكترونية الاستهلاكية'
      ]
    }
  ],
  'hardware-dashboard': [
    {
      id: 'har-components',
      title: 'مكونات الحوسبة والمعالجات',
      icon: Cpu,
      examples: [
        'المعالجات Processors واللوحات الأم',
        'وحدات معالجة الرسوميات GPUs'
      ]
    },
    {
      id: 'har-storage',
      title: 'معدات وأنظمة التخزين',
      icon: HardDrive,
      examples: [
        'أقراص الـ SSD والـ HDD',
        'أنظمة تخزين البيانات الضخمة'
      ]
    },
    {
      id: 'har-infra',
      title: 'البنية التحتية المادية للبيانات',
      icon: Database,
      examples: [
        'الخوادم وعتاد مراكز البيانات',
        'أجهزة الشبكات والربط المادي'
      ]
    },
    {
      id: 'har-manufacturing',
      title: 'تصنيع العتاد وتجميع الرقائق',
      icon: Layers,
      examples: [
        'خطوط إنتاج وتجميع الرقائق',
        'المكونات الإلكترونية الدقيقة'
      ]
    }
  ],
  'household-appliances-dashboard': [
    {
      id: 'hou-basic',
      title: 'الأجهزة المنزلية الأساسية',
      icon: Microwave,
      examples: [
        'الثلاجات والغسالات والأفران',
        'أدوات المطبخ والمنزل الكبيرة'
      ]
    },
    {
      id: 'hou-small',
      title: 'الأجهزة المنزلية الصغيرة',
      icon: Settings,
      examples: [
        'الميكروويف والخلاطات الكهربائية',
        'المكنسة الكهربائية وأدوات التنظيف'
      ]
    },
    {
      id: 'hou-smart',
      title: 'الأجهزة المنزلية الذكية المتصلة',
      icon: Zap,
      examples: [
        'الثلاجات والإضاءة الذكية',
        'أجهزة الثرموستات الذكية IoT'
      ]
    },
    {
      id: 'hou-maintenance',
      title: 'صيانة الأجهزة وقطع الغيار',
      icon: Wrench,
      examples: [
        'خدمات الإصلاح والصيانة الدورية',
        'توفير قطع الغيار الأصلية للأجهزة'
      ]
    }
  ],
  'it-services-dashboard': [
    {
      id: 'it-services',
      title: 'إدارة ودعم تقنية المعلومات',
      icon: Database,
      examples: [
        'إدارة الأنظمة والدعم التقني المباشر',
        'إدارة الشبكات والبنية التحتية IT'
      ]
    },
    {
      id: 'it-consulting',
      title: 'الاستشارات وتصميم الهندسة التقنية',
      icon: Search,
      examples: [
        'تصميم بنية الأنظمة وتكاملها',
        'استشارات التحول الرقمي IT'
      ]
    },
    {
      id: 'it-security',
      title: 'الأمن السيبراني وحماية الأنظمة',
      icon: ShieldCheck,
      examples: [
        'اختبار الاختراق Penetration Testing',
        'مراقبة الحماية والرد على التهديدات'
      ]
    },
    {
      id: 'it-infrastructure',
      title: 'إدارة السحابة والـ DevOps',
      icon: Network,
      examples: [
        'إدارة الخوادم والـ Cloud Admin',
        'خدمات الـ DevOps وأتمتة العمليات'
      ]
    }
  ],
  'software-dashboard': [
    {
      id: 'sof-development',
      title: 'تطوير البرمجيات والتطبيقات',
      icon: Code2,
      examples: [
        'تطبيقات الويب والموبايل والديسكتاب',
        'برمجة الحلول المخصصة للأعمال'
      ]
    },
    {
      id: 'sof-enterprise',
      title: 'أنظمة المؤسسات ERP & CRM',
      icon: Layout,
      examples: [
        'أنظمة إدارة الموارد ERP',
        'أنظمة إدارة علاقات العملاء CRM'
      ]
    },
    {
      id: 'sof-saas',
      title: 'البرمجيات كخدمة SaaS',
      icon: Cloud,
      examples: [
        'منصات الـ SaaS والاشتراكات البرمجية',
        'التطبيقات السحابية الموزعة'
      ]
    },
    {
      id: 'sof-tools',
      title: 'أدوات التطوير والـ APIs',
      icon: Terminal,
      examples: [
        'إطارات العمل Frameworks وواجهات الـ API',
        'أدوات التطوير البرمجي الاحترافية'
      ]
    }
  ],
  'telecommunications-dashboard': [
    {
      id: 'tel-networks',
      title: 'شبكات الاتصال 5G والألياف',
      icon: Wifi,
      examples: [
        'شبكات الجيل الخامس 5G',
        'البنية التحتية للألياف الضوئية'
      ]
    },
    {
      id: 'tel-services',
      title: 'خدمات الهاتف والإنترنت والـ VoIP',
      icon: Globe,
      examples: [
        'خدمات الهاتف المحمول والإنترنت',
        'حلول الاتصال الصوتي عبر الإنترنت'
      ]
    },
    {
      id: 'tel-infrastructure',
      title: 'بنية الأبراج ومراكز البيانات',
      icon: TowerControl,
      examples: [
        'إدارة أبراج الاتصالات Towers',
        'مراكز البيانات والسنترالات الكبرى'
      ]
    },
    {
      id: 'tel-providers',
      title: 'مزودو الخدمات والناقلون',
      icon: Network,
      examples: [
        'مشغلو الاتصالات الصاعدون',
        'مزودو خدمات الإنترنت والربط'
      ]
    }
  ],
  'artificial-intelligence-dashboard': [
    {
      id: 'ai-learning',
      title: 'تعلم الآلة والنمذجة التنبؤية',
      icon: Zap,
      examples: [
        'التعلم العميق Deep Learning',
        'بناء النماذج التنبؤية بالبيانات'
      ]
    },
    {
      id: 'ai-nlp',
      title: 'معالجة اللغة الطبيعية والـ Chatbots',
      icon: Bot,
      examples: [
        'أنظمة الترجمة والـ Chatbots الذكية',
        'تحليل النصوص وفهم اللغات'
      ]
    },
    {
      id: 'ai-vision',
      title: 'رؤية الحاسوب والتعرف على الصور',
      icon: Eye,
      examples: [
        'التعرف على الوجوه والأشياء Vision',
        'تحليل الفيديو بالذكاء الاصطناعي'
      ]
    },
    {
      id: 'ai-apps',
      title: 'تطبيقات وأتمتة الذكاء الاصطناعي',
      icon: Activity,
      examples: [
        'أنظمة التوصية والمساعدين الذكيين',
        'أدوات الأتمتة المتقدمة للعمليات'
      ]
    }
  ],
  'cloud-services-dashboard': [
    {
      id: 'clo-infrastructure',
      title: 'البنية السحابية والتخزين',
      icon: Cloud,
      examples: [
        'خوادم السحابة وأنظمة التخزين',
        'تقنيات المحاكاة الافتراضية Virtualization'
      ]
    },
    {
      id: 'clo-computing',
      title: 'خدمات الحوسبة SaaS/IaaS',
      icon: Layers,
      examples: [
        'المنصات كخدمة PaaS والبنية كخدمة IaaS',
        'خدمات البرمجيات السحابية المتكاملة'
      ]
    },
    {
      id: 'clo-management',
      title: 'إدارة السحابة وقابلية التوسع',
      icon: Settings,
      examples: [
        'مراقبة السحابة والـ DevOps',
        'أنظمة توسيع الموارد التلقائية'
      ]
    },
    {
      id: 'clo-providers',
      title: 'مزودو الخدمات السحابية الكبرى',
      icon: Globe,
      examples: [
        'منصات شبيهة بـ AWS و Azure',
        'أنظمة Google Cloud-like المخصصة'
      ]
    }
  ]
};

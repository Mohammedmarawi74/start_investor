import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Wifi, 
  Video, 
  MessageSquare, 
  Network, 
  ShieldCheck, 
  Search, 
  Lock, 
  Database, 
  Users, 
  PieChart, 
  Smartphone, 
  Play, 
  Activity, 
  Share2, 
  MousePointer2, 
  Globe, 
  Zap, 
  Smartphone as Mobile, 
  Layout, 
  MessagesSquare, 
  Sparkles, 
  PenTool, 
  Trophy, 
  Monitor, 
  LineChart, 
  Target, 
  UserPlus
} from 'lucide-react';

export const internetOpportunities: Record<string, BusinessOpportunity[]> = {
  'communications-dashboard': [
    {
      id: 'com-isp',
      title: 'مزودي خدمات الإنترنت ISP',
      icon: Wifi,
      examples: [
        'شبكات الألياف الضوئية Fiber',
        'الإنترنت المنزلي والتجاري فائق السرعة'
      ]
    },
    {
      id: 'com-digital',
      title: 'منصات الاتصالات الرقمية',
      icon: MessageSquare,
      examples: [
        'خدمات VoIP ومكالمات الفيديو',
        'منصات الرسائل والمراسلة الفورية'
      ]
    },
    {
      id: 'com-infra',
      title: 'البنية التحتية للاتصالات',
      icon: Network,
      examples: [
        'مراكز بيانات الشبكات وأبراج الاتصال',
        'صيانة الكابلات البحرية والشبكات'
      ]
    },
    {
      id: 'com-business',
      title: 'خدمات التواصل المؤسسي',
      icon: Layout,
      examples: [
        'أدوات الاجتماعات الافتراضية',
        'منصات التعاون السحابي للشركات'
      ]
    }
  ],
  'cyber-crime-security-dashboard': [
    {
      id: 'sec-cyber',
      title: 'الأمن السيبراني وحماية الشبكات',
      icon: ShieldCheck,
      examples: [
        'جدران الحماية Firewalls وأنظمة الكشف',
        'تأمين الشبكات السحابية والمحلية'
      ]
    },
    {
      id: 'sec-pentest',
      title: 'اختبار الاختراق والتقييم',
      icon: Search,
      examples: [
        'اختبار الثغرات الأمنية ومحاكاة الهجمات',
        'تقييم أمن التطبيقات والمواقع'
      ]
    },
    {
      id: 'sec-anti',
      title: 'مكافحة الجرائم الإلكترونية',
      icon: Lock,
      examples: [
        'التحقيق الرقمي الجنائي Forensic',
        'تتبع الهجمات ومكافحة الاحتيال الرقمي'
      ]
    },
    {
      id: 'sec-data',
      title: 'أمن وتشفير البيانات',
      icon: Database,
      examples: [
        'تشفير البيانات الحساسة وإدارة الوصول',
        'حماية الخصوصية وتوافق التشريعات'
      ]
    }
  ],
  'internet-demographics-dashboard': [
    {
      id: 'dem-analytics',
      title: 'تحليل مستخدمي الإنترنت',
      icon: Users,
      examples: [
        'توزيع المستخدمين ديموغرافياً وجغرافياً',
        'تحليل سلوك وأنماط الاستخدام'
      ]
    },
    {
      id: 'dem-access',
      title: 'دراسـات النفاذ الرقمي',
      icon: Globe,
      examples: [
        'تحليل الفجوة الرقمية ومعدلات الانتشار',
        'توافر الإنترنت في المناطق النائية'
      ]
    },
    {
      id: 'dem-device',
      title: 'تحليل الأجهزة والمنصات',
      icon: Monitor,
      examples: [
        'مقارنة الموبايل مقابل الـ Desktop',
        'سرعات الاتصال وأنظمة التشغيل'
      ]
    },
    {
      id: 'dem-behavior',
      title: 'تحليل السلوك الرقمي العميق',
      icon: PieChart,
      examples: [
        'تتبع وقت الاستخدام وتفاعل المستخدمين',
        'تحليل أنماط التصفح والبحث'
      ]
    }
  ],
  'mobile-internet-apps-dashboard': [
    {
      id: 'mob-dev',
      title: 'تطوير تطبيقات الموبايل',
      icon: Mobile,
      examples: [
        'تطبيقات iOS و Android وحلول الهجين',
        'تطوير الواجهات وتجربة المستخدم'
      ]
    },
    {
      id: 'mob-store',
      title: 'متاجر ومنصات التوزيع',
      icon: Layout,
      examples: [
        'إدارة متاجر التطبيقات الخاصة',
        'منصات اكتشاف التطبيقات الجديدة'
      ]
    },
    {
      id: 'mob-infra',
      title: 'بنية تحتية للموبايل 5G',
      icon: Zap,
      examples: [
        'شبكات الجيل الخامس وتحسين التغطية',
        'مزودي إنترنت الجوال المتقدمين'
      ]
    },
    {
      id: 'mob-services',
      title: 'خدمات التطبيقات المتخصصة',
      icon: Sparkles,
      examples: [
        'تطبيقات التمويل المالي والتواصل',
        'تطبيقات التجارة والخدمات السريعة'
      ]
    }
  ],
  'online-search-dashboard': [
    {
      id: 'sea-engines',
      title: 'محركات البحث المتخصصة',
      icon: Search,
      examples: [
        'بناء محركات بحث مؤسسية',
        'محركات بحث دلالية متخصصة'
      ]
    },
    {
      id: 'sea-indexing',
      title: 'فهرسة المحتوى Crawling',
      icon: Database,
      examples: [
        'تحليل وبرمجيات الزحف الذكي',
        'بناء قواعد بيانات الويب الضخمة'
      ]
    },
    {
      id: 'sea-seo',
      title: 'تقنيات تحسين الظهور SEO',
      icon: LineChart,
      examples: [
        'خوارزميات الترتيب Ranking Systems',
        'تخصيص نتائج البحث للمستخدمين'
      ]
    },
    {
      id: 'sea-ai',
      title: 'البحث المدعوم بالذكاء الاصطناعي',
      icon: Sparkles,
      examples: [
        'البحث التحاوري والإجابات المباشرة',
        'فهم اللغة الطبيعية في البحث'
      ]
    }
  ],
  'online-video-entertainment-dashboard': [
    {
      id: 'vid-platforms',
      title: 'منصات الفيديو والبث',
      icon: Play,
      examples: [
        'منصات الفيديو حسب الطلب VOD',
        'بث الفيديو المباشر والاشتراكات'
      ]
    },
    {
      id: 'vid-prod',
      title: 'إنتاج المحتوى الرقمي المرئي',
      icon: Video,
      examples: [
        'استوديوهات إنتاج الأفلام الرقمية',
        'صناعة محتوى المبدعين واليوتيوبرز'
      ]
    },
    {
      id: 'vid-gaming',
      title: 'بث الألعاب والرياضات الإلكترونية',
      icon: Trophy,
      examples: [
        'منصات Twitch-like وبث الألعاب المباشر',
        'محتوى الـ eSports والبطولات'
      ]
    },
    {
      id: 'vid-audio',
      title: 'الترفيه الرقمي الموسيقي',
      icon: Activity,
      examples: [
        'منصات الموسيقى والبودكاست والترفيه القصير',
        'المحتوى الصوتي التفاعلي'
      ]
    }
  ],
  'reach-traffic-dashboard': [
    {
      id: 'tra-analysis',
      title: 'تحليل الزيارات والترافيك',
      icon: MousePointer2,
      examples: [
        'تحليل عدد المستخدمين ومصادر الزيارات',
        'تتبع معدل التحويل Conversion Rate'
      ]
    },
    {
      id: 'tra-tools',
      title: 'أدوات التحليل الرقمي المتطورة',
      icon: PieChart,
      examples: [
        'خرائط الحرارة Heatmaps وتتبع الأحداث',
        'برمجيات التحليل السحابي المتقدمة'
      ]
    },
    {
      id: 'tra-reach',
      title: 'تحسين الوصول Content Reach',
      icon: Share2,
      examples: [
        'توزيع المحتوى الرقمي والعلاقات العامة',
        'تحسين الظهور في المنصات العالمية'
      ]
    },
    {
      id: 'tra-mgmt',
      title: 'إدارة حملات الأداء المالي',
      icon: Target,
      examples: [
        'إعلانات الأداء Performance Marketing',
        'تتبع العائد على الإنفاق الإعلاني ROAS'
      ]
    }
  ],
  'social-media-dashboard': [
    {
      id: 'soc-platforms',
      title: 'منصات التواصل الاجتماعي الجديدة',
      icon: UserPlus,
      examples: [
        'منصات تواصل متخصصة وجديدة',
        'شبكات مهنية واجتماعية مبتكرة'
      ]
    },
    {
      id: 'soc-ugc',
      title: 'محتوى المستخدمين UGC',
      icon: PenTool,
      examples: [
        'منصات مشاركة الصور والفيديوهات القصيرة',
        'إدارة مراجعات وتعليقات المستخدمين'
      ]
    },
    {
      id: 'soc-community',
      title: 'إدارة المجتمعات الرقمية',
      icon: MessagesSquare,
      examples: [
        'أدوات إدارة المجموعات والمنتدى',
        'أنظمة الإشراف Moderator Systems'
      ]
    },
    {
      id: 'soc-influence',
      title: 'اقتصاد المؤثرين والمبدعين',
      icon: Sparkles,
      examples: [
        'منصات ربط المؤثرين بالعلامات التجارية',
        'أدوات تسييل المحتوى لصناع المحتوى'
      ]
    },
    {
      id: 'soc-mgmt',
      title: 'أدوات إدارة المحتوى الاجتماعي',
      icon: Layout,
      examples: [
        'برمجيات جدولة المنشورات والتحليلات',
        'تتبع التفاعل والنمو في المنصات'
      ]
    }
  ]
};

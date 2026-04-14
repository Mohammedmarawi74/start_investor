import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Palette, 
  Dices, 
  Smile, 
  TreePine, 
  Trophy, 
  Dumbbell, 
  Sparkles, 
  BarChart3, 
  Gamepad2, 
  Activity, 
  Music, 
  Mountain, 
  Heart, 
  Zap, 
  Bot, 
  Tv,
  Camera,
  Cpu,
  Monitor,
  Search,
  Layout, 
  Globe, 
  Wind,
  Shield,
  Users,
  Building2,
  ShoppingBag
} from 'lucide-react';

export const sportsRecreationOpportunities: Record<string, BusinessOpportunity[]> = {
  'art-culture-dashboard': [
    {
      id: 'art-visual',
      title: 'الفنون البصرية والرقمية',
      icon: Palette,
      examples: [
        'الرسم والنحت الكلاسيكي',
        'الفنون الرقمية والـ NFTs الفنية'
      ]
    },
    {
      id: 'art-cultural-ind',
      title: 'الصناعات الثقافية والمتاحف',
      icon: Layout,
      examples: [
        'المتاحف والمعارض الفنية الدولية',
        'تنظيم المهرجانات الثقافية الكبرى'
      ]
    },
      {
        id: 'art-production',
        title: 'الإنتاج الفني والمسرحي',
        icon: Music,
        examples: [
          'السينما المستقلة والمسرح',
          'الإنتاج الإبداعي وحقوق الملكية'
        ]
      },
    {
      id: 'art-economy',
      title: 'الاقتصاد الإبداعي والتبادل',
      icon: Globe,
      examples: [
        'بيع الأعمال الفنية العالمية',
        'إدارة أصول الملكية الفكرية للفنون'
      ]
    }
  ],
  'gambling-dashboard': [
    {
      id: 'gam-casinos',
      title: 'الكازينوهات وصالات الألعاب',
      icon: Dices,
      examples: [
        'ألعاب الطاولة وماكينات القمار',
        'إدارة صالات الألعاب الترفيهية المنظمة'
      ]
    },
    {
      id: 'gam-betting',
      title: 'المراهنات الرياضية والمنصات',
      icon: Activity,
      examples: [
        'توقعات المباريات وأسواق المراهنة',
        'منصات الرهان الرياضي القانونية'
      ]
    },
    {
      id: 'gam-digital',
      title: 'الألعاب الرقمية المراهنة',
      icon: Zap,
      examples: [
        'تطبيقات الـ Poker والـ Roulette الرقمية',
        'ألعاب الحظ والرهان أونلاين'
      ]
    },
    {
      id: 'gam-risk',
      title: 'إدارة المخاطر والامتثال',
      icon: Shield,
      examples: [
        'أنظمة ضبط الخسائر وتحليل الاحتمالات',
        'الامتثال القانوني والمعايير الرقابية'
      ]
    }
  ],
  'hobbies-dashboard': [
    {
      id: 'hob-individual',
      title: 'الهوايات الفردية والإبداعية',
      icon: Smile,
      examples: [
        'الرسم والقراءة والتصوير الاحترافي',
        'تنمية المهارات الشخصية والهوايات'
      ]
    },
    {
      id: 'hob-tech',
      title: 'الهوايات التقنية و DIY',
      icon: Cpu,
      examples: [
        'البرمجة والإلكترونيات المصنعة منزلياً',
        'تجميع الروبوتات والأنظمة الصغيرة'
      ]
    },
    {
      id: 'hob-collecting',
      title: 'هوايات جمع الأشياء والنوادر',
      icon: Layout,
      examples: [
        'جمع الطوابع والعملات والتحف',
        'تجارة الـ Collectibles النادرة'
      ]
    },
    {
      id: 'hob-communities',
      title: 'مجتمعات ونوادي الهواة',
      icon: Users,
      examples: [
        'منصات مشاركة الهوايات والفعاليات',
        'إدارة نوادي الهواة المتخصصة'
      ]
    }
  ],
  'parks-outdoors-dashboard': [
    {
      id: 'park-public',
      title: 'الحدائق العامة والمساحات الخضراء',
      icon: TreePine,
      examples: [
        'تطوير منتزهات المدن والمساحات المفتوحة',
        'صيانة الحدائق العامة وتخطيط المواقع'
      ]
    },
    {
      id: 'park-tourism',
      title: 'السياحة الطبيعية والبيئية',
      icon: Mountain,
      examples: [
        'استكشاف الجبال والغابات والشواطئ',
        'إدارة المحميات والمناطق الطبيعية'
      ]
    },
    {
      id: 'park-activities',
      title: 'الأنشطة المفتوحة والمغامرة',
      icon: Wind,
      examples: [
        'رياضات الـ Hiking والـ Camping',
        'ركوب الدراجات والأنشطة الخارجية'
      ]
    },
    {
      id: 'park-mgmt',
      title: 'إدارة وحماية المساحات الطبيعية',
      icon: Globe,
      examples: [
        'حماية البيئة والتخطيط المستدام',
        'نظم إدارة المواقع الطبيعية الكبري'
      ]
    }
  ],
  'professional-sports-dashboard': [
    {
      id: 'pro-clubs',
      title: 'الأندية والفرق الرياضية المحترفة',
      icon: Trophy,
      examples: [
        'أندية كرة القدم والسلة العالمية',
        'إدارة فرق الرياضات الجماعية الكبرى'
      ]
    },
    {
      id: 'pro-tournaments',
      title: 'البطولات والدوريات الاحترافية',
      icon: Tv,
      examples: [
        'تنظيم الدوريات والبطولات العالمية',
        'حقوق البث والرعاية للفعاليات'
      ]
    },
    {
      id: 'pro-athletes',
      title: 'إدارة الرياضيين والتعاقدات',
      icon: Users,
      examples: [
        'وكلاء اللاعبين وإدارة العقود والرعاية',
        'تطوير النجوم والصفقات الرياضية'
      ]
    },
    {
      id: 'pro-infra',
      title: 'البنية التحتية والاستادات',
      icon: Building2,
      examples: [
        'تطوير الاستادات ومراكز التدريب',
        'المجمعات الرياضية المتكاملة والذكية'
      ]
    }
  ],
  'sports-fitness-dashboard': [
    {
      id: 'fit-gyms',
      title: 'اللياقة البدنية والصالات الرياضية',
      icon: Dumbbell,
      examples: [
        'إدارة الـ Gyms وبرامج التدريب الشخصي',
        'برامج اللياقة الجماعية والمخصصة'
      ]
    },
    {
      id: 'fit-nutrition',
      title: 'التغذية الرياضية والمكملات',
      icon: Sparkles,
      examples: [
        'المكملات الغذائية وخطط الـ Diet الرياضي',
        'توفير الوجبات والمشروبات الصحية للرياضيين'
      ]
    },
    {
      id: 'fit-equip',
      title: 'معدات وملابس الرياضة الاحترافية',
      icon: ShoppingBag,
      examples: [
        'بيع أجهزة التمارين والملابس المتخصصة',
        'تطوير أدوات التدريب والجمباز'
      ]
    },
    {
      id: 'fit-apps',
      title: 'تطبيقات الصحة والرياضة الذكية',
      icon: Gamepad2,
      examples: [
        'تطبيقات التتبع Tracking والتمارين الذاتية',
        'الأجهزة القابلة للارتداء الذكية Wearables'
      ]
    }
  ],
  'wellness-spas-dashboard': [
    {
      id: 'wel-spas',
      title: 'مراكز الـ Spas والعناية الصحية',
      icon: Heart,
      examples: [
        'مراكز التدليك Massage والاسترخاء',
        'عيادات العناية بالبشرة والـ Wellness'
      ]
    },
    {
      id: 'wel-natural',
      title: 'العلاجات الطبيعية والمائية',
      icon: Sparkles,
      examples: [
        'العلاجات بالروائح Aromatherapy والمياه',
        'العلاجات العشبية التقليدية والمتقدمة'
      ]
    },
    {
      id: 'wel-mental',
      title: 'الصحة النفسية والاسترخاء الذهني',
      icon: Smile,
      examples: [
        'مراكز التأمل و mindfulness وفك التوتر',
        'برامج تحسين جودة الحياة النفسية'
      ]
    },
    {
      id: 'wel-tourism',
      title: 'السياحة العلاجية والمنتجعات',
      icon: Mountain,
      examples: [
        'منتجعات الـ Healing والسياحة الصحية',
        'فنادق الاسترخاء والعلاجات الطبيعية'
      ]
    }
  ],
  'sports-analytics-performance-tech-dashboard': [
    {
      id: 'ana-performance',
      title: 'تحليل الأداء الرياضي والبيانات',
      icon: BarChart3,
      examples: [
        'تتبع اللاعبين وتحليل المؤشرات Performance',
        'تحليل المباريات والبيانات اللحظية'
      ]
    },
    {
      id: 'ana-training',
      title: 'تقنيات التدريب والـ AI Coaching',
      icon: Bot,
      examples: [
        'أنظمة التدريب الذكية وتحليل الحركة',
        'مدرب الذكاء الاصطناعي الافتراضي'
      ]
    },
    {
      id: 'ana-wearables',
      title: 'أجهزة القياس والـ Wearables',
      icon: Activity,
      examples: [
        'أجهزة قياس نبضات القلب والمسافات GPS',
        'السترات الذكية لتتبع الأداء الميداني'
      ]
    },
    {
      id: 'ana-strategy',
      title: 'تحليل المباريات والنمذجة التنبؤية',
      icon: Search,
      examples: [
        'التحليل التكتيكي بالفيديو Breakdown',
        'النمذجة التنبؤية لنتائج المباريات'
      ]
    }
  ],
  'esports-gaming-industry-dashboard': [
    {
      id: 'esp-tournaments',
      title: 'بطولات ودوريات الـ eSports',
      icon: Trophy,
      examples: [
        'تنظيم بطولات الألعاب الإلكترونية الكبرى',
        'حقوق البث المباشر لفعاليات الألعاب'
      ]
    },
    {
      id: 'esp-teams',
      title: 'فرق الألعاب الاحترافية والمدربون',
      icon: Gamepad2,
      examples: [
        'إدارة أندية الألعاب وبرامج تدريب اللاعبين',
        'عقود لاعبي الـ Esports والرعاية'
      ]
    },
    {
      id: 'esp-platforms',
      title: 'منصات البث وشبكات الألعاب',
      icon: Monitor,
      examples: [
        'تطوير منصات البث لجمهور الألعاب',
        'شبكات التفاعل للألعاب التنافسية'
      ]
    },
    {
      id: 'esp-economy',
      title: 'اقتصاد الألعاب والتحصيل الرقمي',
      icon: Zap,
      examples: [
        'الاستثمار في عقود الرعاية والـ In-game shop',
        'تطوير اقتصاد الجوائز والتحصيل الرقمي'
      ]
    }
  ]
};

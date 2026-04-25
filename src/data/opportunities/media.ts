import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Music, 
  Mic2, 
  Play, 
  Settings, 
  Book, 
  FileText, 
  Type, 
  GraduationCap, 
  Newspaper, 
  Globe, 
  Search, 
  Activity, 
  Tv, 
  Film, 
  Video, 
  Monitor, 
  Gamepad2, 
  Trophy, 
  Smartphone, 
  Cloud, 
  Coins, 
  Headphones,
  Layout,
  Radio,
  Share2
} from 'lucide-react';

export const mediaOpportunities: Record<string, BusinessOpportunity[]> = {
  'audio-dashboard': [
    {
      id: 'aud-music',
      title: 'صناعة وإنتاج الموسيقى',
      icon: Music,
      examples: [
        'إنتاج الأغاني والألبومات الرقمية',
        'استوديوهات التسجيل الاحترافية'
      ]
    },
    {
      id: 'aud-streaming',
      title: 'البث الصوتي الرقمي Streaming',
      icon: Headphones,
      examples: [
        'منصات تشغيل الموسيقى حسب الطلب',
        'قوائم التشغيل الذكية والتوزيع الرقمي'
      ]
    },
    {
      id: 'aud-podcast',
      title: 'البودكاست والمحتوى الصوتي',
      icon: Mic2,
      examples: [
        'إنتاج البرامج الصوتية المتخصصة',
        'المحتوى التعليمي والترفيهي المسموع'
      ]
    },
    {
      id: 'aud-prod',
      title: 'هندسة وإنتاج الصوتيات',
      icon: Settings,
      examples: [
        'تصميم المؤثرات الصوتية للألعاب',
        'دبلجة الأفلام والمحتوى المرئي'
      ]
    }
  ],
  'books-publishing-dashboard': [
    {
      id: 'boo-print',
      title: 'النشر التقليدي والطباعة',
      icon: Book,
      examples: [
        'دور نشر الكتب والمجلات الورقية',
        'أنظمة التوزيع والطباعة الاحترافية'
      ]
    },
    {
      id: 'boo-digital',
      title: 'النشر الرقمي والكتب الإلكترونية',
      icon: Type,
      examples: [
        'منصات القراءة الرقمية eBooks',
        'تطبيقات بيع المحتوى الثقافي المكتوب'
      ]
    },
    {
      id: 'boo-press',
      title: 'الصحافة والمقالات المتخصصة',
      icon: FileText,
      examples: [
        'المجلات والمنشورات التحليلية',
        'صحافة البيانات والتقارير المعمقة'
      ]
    },
    {
      id: 'boo-edu',
      title: 'صناعة المحتوى التعليمي',
      icon: GraduationCap,
      examples: [
        'تطوير المناهج الرقمية والكتب الأكاديمية',
        'منصات نشر المحتوى التعليمي المتطور'
      ]
    }
  ],
  'news-dashboard': [
    {
      id: 'new-institutions',
      title: 'المؤسسات الإخبارية الكبرى',
      icon: Radio,
      examples: [
        'قنوات الأخبار الفضائية والرقمية',
        'وكالات الأنباء ومراكز التغطية الحية'
      ]
    },
    {
      id: 'new-digital',
      title: 'الصحافة الرقمية المستقلة',
      icon: Newspaper,
      examples: [
        'منصات الأخبار العاجلة أونلاين',
        'صحف رقمية وتطبيقات إخبارية'
      ]
    },
    {
      id: 'new-analysis',
      title: 'تحليل الأخبار والبيانات',
      icon: Search,
      examples: [
        'خدمات التحقق من الحقائق Fact-checking',
        'تحليل البيانات السياسية والاقتصادية'
      ]
    },
    {
      id: 'new-dist',
      title: 'أنظمة توزيع الأخبار الرقمية',
      icon: Share2,
      examples: [
        'تطبيقات تجميع الأخبار Aggregators',
        'أنظمة RSS وتلقيم الأخبار المؤتمتة'
      ]
    }
  ],
  'tv-video-film-dashboard': [
    {
      id: 'tvf-film',
      title: 'إنتاج الأفلام والسينما',
      icon: Film,
      examples: [
        'إنتاج الأفلام الروائية والوثائقية',
        'استوديوهات السينما المستقلة والرقمية'
      ]
    },
    {
      id: 'tvf-tv',
      title: 'صناعة التلفزيون والمسلسلات',
      icon: Tv,
      examples: [
        'إنتاج المسلسلات والبرامج الترفيهية',
        'قنوات البث التلفزيوني عبر الكابل والويب'
      ]
    },
    {
      id: 'tvf-streaming',
      title: 'منصات البث الرقمي Streaming',
      icon: Monitor,
      examples: [
        'منصات الفيديو حسب الطلب VOD',
        'خدمات البث الحي والمباشر Live'
      ]
    },
    {
      id: 'tvf-short',
      title: 'الإنتاج المرئي الرقمي القصير',
      icon: Video,
      examples: [
        'صناعة محتوى اليوتيوب والمنصات',
        'إنتاج إعلانات الفيديو الرقمية'
      ]
    }
  ],
  'video-gaming-esports-dashboard': [
    {
      id: 'gam-dev',
      title: 'تطوير الألعاب والبرمجيات',
      icon: Gamepad2,
      examples: [
        'تطوير ألعاب AAA وألعاب الموبايل',
        'استوديوهات الألعاب المستقلة Indie'
      ]
    },
    {
      id: 'gam-esports',
      title: 'الرياضات الإلكترونية eSports',
      icon: Trophy,
      examples: [
        'تنظيم البطولات والفرق الاحترافية',
        'بث وإدارة مسابقات الألعاب العالمية'
      ]
    },
    {
      id: 'gam-platform',
      title: 'منصات الألعاب والسحابية',
      icon: Cloud,
      examples: [
        'متاجر الألعاب الرقمية Cloud Gaming',
        'منصات اشتراك الألعاب الشهرية'
      ]
    },
    {
      id: 'gam-economy',
      title: 'اقتصاد الألعاب والعملات',
      icon: Coins,
      examples: [
        'بيع العناصر الرقمية Skins & Items',
        'أنظمة تسييل الألعاب Monetization'
      ]
    }
  ]
};

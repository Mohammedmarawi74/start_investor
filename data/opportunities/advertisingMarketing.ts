import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Megaphone, 
  Target, 
  Layout, 
  Zap, 
  PenTool, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Globe, 
  Search, 
  Share2, 
  Database, 
  Video,
  MousePointerClick,
  FileText,
  LineChart,
  Settings,
  UserPlus,
  Smartphone
} from 'lucide-react';

export const advertisingMarketingOpportunities: Record<string, BusinessOpportunity[]> = {
  'advertising-dashboard': [
    {
      id: 'adv-traditional',
      title: 'شركات الإعلان التقليدي',
      icon: Layout,
      examples: [
        'إعلانات الطرق واللوحات',
        'إعلانات الصحف والمجلات',
        'إعلانات الراديو والتلفزيون',
        'الإعلانات المطبوعة'
      ]
    },
    {
      id: 'adv-digital',
      title: 'شركات الإعلان الرقمي',
      icon: Target,
      examples: [
        'إعلانات Google',
        'إعلانات Meta',
        'إعلانات TikTok',
        'إعلانات YouTube'
      ]
    },
    {
      id: 'adv-design',
      title: 'شركات التصميم الإعلاني',
      icon: PenTool,
      examples: [
        'تصميم بنرات',
        'فيديوهات إعلانية',
        'موشن جرافيك',
        'تصميم هوية حملات'
      ]
    },
    {
      id: 'adv-campaign-management',
      title: 'شركات إدارة الحملات',
      icon: Megaphone,
      examples: [
        'Media Buying',
        'Audience Targeting',
        'A/B Testing',
        'تحسين الأداء'
      ]
    },
    {
      id: 'adv-analytics',
      title: 'شركات قياس الأداء والتحليلات',
      icon: BarChart3,
      examples: [
        'تتبع CTR',
        'CPA / ROAS',
        'Dashboard analytics',
        'attribution systems'
      ]
    },
    {
      id: 'adv-adtech',
      title: 'تكنولوجيا الإعلان (AdTech)',
      icon: Zap,
      examples: [
        'منصات إدارة إعلانات',
        'أدوات أتمتة',
        'AI optimization',
        'Programmatic Ads'
      ]
    }
  ],
  'brands-leaders-dashboard': [
    {
      id: 'brand-building',
      title: 'شركات بناء العلامات التجارية',
      icon: PenTool,
      examples: [
        'Brand Identity',
        'Logo systems',
        'Brand voice',
        'Visual language'
      ]
    },
    {
      id: 'brand-strategy',
      title: 'شركات استراتيجية السوق',
      icon: Globe,
      examples: [
        'Market positioning',
        'competitor mapping',
        'target audience',
        'pricing strategy'
      ]
    },
    {
      id: 'brand-reputation',
      title: 'شركات إدارة السمعة',
      icon: ShieldCheck,
      examples: [
        'PR management',
        'reputation repair',
        'crisis communication'
      ]
    },
    {
      id: 'brand-leadership',
      title: 'شركات تطوير القيادة المؤسسية',
      icon: Users,
      examples: [
        'executive coaching',
        'leadership consulting',
        'team culture systems'
      ]
    },
    {
      id: 'brand-competitive',
      title: 'شركات التحليل التنافسي',
      icon: Search,
      examples: [
        'brand benchmarking',
        'sentiment analysis',
        'market share intelligence'
      ]
    }
  ],
  'marketing-dashboard': [
    {
      id: 'mkt-strategic',
      title: 'شركات التسويق الاستراتيجي',
      icon: Database,
      examples: [
        'خطط تسويق',
        'customer journey',
        'market segmentation',
        'positioning'
      ]
    },
    {
      id: 'mkt-digital',
      title: 'شركات التسويق الرقمي',
      icon: Smartphone,
      examples: [
        'social media marketing',
        'email marketing',
        'performance marketing',
        'paid campaigns'
      ]
    },
    {
      id: 'mkt-content',
      title: 'شركات التسويق بالمحتوى',
      icon: FileText,
      examples: [
        'blog writing',
        'newsletters',
        'educational content',
        'lead magnets'
      ]
    },
    {
      id: 'mkt-research',
      title: 'شركات أبحاث السوق',
      icon: Search,
      examples: [
        'surveys',
        'focus groups',
        'behavior analytics'
      ]
    },
    {
      id: 'mkt-crm-automation',
      title: 'شركات CRM و automation',
      icon: Settings,
      examples: [
        'sales funnels',
        'customer retention',
        'automation workflows'
      ]
    }
  ],
  'influencer-marketing-dashboard': [
    {
      id: 'inf-management',
      title: 'وكالات إدارة المؤثرين',
      icon: Users,
      examples: [
        'إدارة العقود',
        'تنسيق الحملات',
        'التفاوض مع البراندات'
      ]
    },
    {
      id: 'inf-matching',
      title: 'شركات ربط البراندات بالمؤثرين',
      icon: UserPlus,
      examples: [
        'influencer marketplace',
        'campaign matching',
        'niche discovery'
      ]
    },
    {
      id: 'inf-production',
      title: 'شركات إنتاج المحتوى',
      icon: Video,
      examples: [
        'تصوير فيديو',
        'مونتاج',
        'reels production',
        'script writing'
      ]
    },
    {
      id: 'inf-analytics',
      title: 'شركات تحليل الأداء',
      icon: LineChart,
      examples: [
        'engagement analytics',
        'fake follower detection',
        'ROI measurement'
      ]
    },
    {
      id: 'inf-tech',
      title: 'منصات Influencer Tech',
      icon: Zap,
      examples: [
        'SaaS influencer platform',
        'AI creator matching',
        'campaign dashboards'
      ]
    }
  ],
  'seo-content-marketing': [
    {
      id: 'seo-core',
      title: 'شركات تحسين محركات البحث (SEO)',
      icon: Search,
      examples: [
        'keyword research',
        'technical SEO',
        'backlink building',
        'on-page SEO'
      ]
    },
    {
      id: 'seo-writing',
      title: 'شركات كتابة المحتوى',
      icon: PenTool,
      examples: [
        'مقالات',
        'landing pages',
        'blogs',
        'product descriptions'
      ]
    },
    {
      id: 'seo-strategy',
      title: 'شركات Content Strategy',
      icon: Target,
      examples: [
        'topic clusters',
        'funnel content',
        'authority building'
      ]
    },
    {
      id: 'seo-tools',
      title: 'شركات SEO tools',
      icon: Settings,
      examples: [
        'rank tracking',
        'site audit tools',
        'AI content optimization'
      ]
    },
    {
      id: 'seo-competitor',
      title: 'شركات خدمات تحليل المنافسين',
      icon: LineChart,
      examples: [
        'keyword gap analysis',
        'competitor content analysis',
        'SERP monitoring'
      ]
    }
  ]
};

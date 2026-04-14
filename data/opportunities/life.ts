import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Star, 
  Users, 
  Heart, 
  Smile, 
  Calendar, 
  Brain, 
  Activity, 
  Music, 
  Camera, 
  UserCircle, 
  Briefcase, 
  Baby, 
  Home, 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Coffee, 
  Moon, 
  Dna, 
  Dumbbell, 
  Search, 
  Gift, 
  Church, 
  Flag, 
  Lightbulb, 
  Map
} from 'lucide-react';

export const lifeOpportunities: Record<string, BusinessOpportunity[]> = {
  'celebrities-dashboard': [
    {
      id: 'cel-industry',
      title: 'صناعة المشاهير Celebrity Industry',
      icon: Star,
      examples: [
        'إدارة نجوم الفن والرياضة',
        'بناء جيل المؤثرين الرقميين'
      ]
    },
    {
      id: 'cel-talent',
      title: 'إدارة المواهب وبناء الهوية',
      icon: UserCircle,
      examples: [
        'وكالات فنية وإدارة عقود',
        'تصميم العلامة التجارية الشخصية Personal Brand'
      ]
    },
    {
      id: 'cel-media',
      title: 'الإعلام والترفيه الرقمي',
      icon: Camera,
      examples: [
        'إنتاج المحتوى لمشاهير المنصات',
        'برامج تلفزيونية وواقعية رقمية'
      ]
    },
    {
      id: 'cel-economy',
      title: 'اقتصاد الانتباه Attention Economy',
      icon: Activity,
      examples: [
        'إدارة الرعايات الإعلانية الضخمة',
        'عقود التسويق بالوجه الإعلاني'
      ]
    }
  ],
  'family-friends-dashboard': [
    {
      id: 'fam-social',
      title: 'خدمات العلاقات الاجتماعية',
      icon: Users,
      examples: [
        'منصات التواصل العائلي الخاصة',
        'تطبيقات تنظيم المهام الأسرية'
      ]
    },
    {
      id: 'fam-economy',
      title: 'الاقتصاد والحسابات الأسرية',
      icon: Briefcase,
      examples: [
        'إدارة ميزانية واستثمارات العائلة',
        'خدمات التخطيط المالي للأسرة'
      ]
    },
    {
      id: 'fam-child',
      title: 'خدمات رعاية وتعليم الأطفال',
      icon: Baby,
      examples: [
        'حضانات ذكية ودعم تربوي متطور',
        'منصات تعليم الطفولة المبكرة'
      ]
    },
    {
      id: 'fam-senior',
      title: 'خدمات رعاية كبار السن',
      icon: Home,
      examples: [
        'التمريض المنزلي والدعم الاجتماعي',
        'مراكز الرعاية والرفقاء'
      ]
    }
  ],
  'personality-behavior-dashboard': [
    {
      id: 'per-psych',
      title: 'علم النفس السلوكي والتحليل',
      icon: Brain,
      examples: [
        'اختبارات الشخصية MBTI المتقدمة',
        'دراسة وتحليل السلوك البشري'
      ]
    },
    {
      id: 'per-data',
      title: 'تحليل البيانات السلوكية',
      icon: Target,
      examples: [
        'تتبع سلوك المستخدم وتحليل القرارات',
        'برمجيات Behavioral Analytics'
      ]
    },
    {
      id: 'per-growth',
      title: 'تطوير الذات والكوتشينج',
      icon: Lightbulb,
      examples: [
        'تحسين العادات والمهارات الشخصية',
        'خدمات Coaching احترافية'
      ]
    },
    {
      id: 'per-testing',
      title: 'أنظمة تقييم الشخصية الذكية',
      icon: Search,
      examples: [
        'اختبارات ذكاء وتوافـق وظيفي',
        'التحليل النفسي الرقمي المتقدم'
      ]
    }
  ],
  'holidays-dashboard': [
    {
      id: 'hol-religious',
      title: 'الأعياد والمناسبات الدينية',
      icon: Church,
      examples: [
        'فعاليات رمضان والأعياد الكبرى',
        'خدمات تنظيم شعائر ومناسبات دينية'
      ]
    },
    {
      id: 'hol-national',
      title: 'الأعياد الوطنية والرسمية',
      icon: Flag,
      examples: [
        'احتفالات اليوم الوطني والفعاليات الرسمية',
        'تنظيم المهرجانات الوطنية الكبرى'
      ]
    },
    {
      id: 'hol-economy',
      title: 'اقتصاد المواسم والتسوق',
      icon: Gift,
      examples: [
        'عروض التسوق الموسمية والسياحية',
        'إدارة الترافيك والطلب في الأعياد'
      ]
    },
    {
      id: 'hol-events',
      title: 'إدارة الفعاليات والمهرجانات',
      icon: Map,
      examples: [
        'تنظيم المهرجانات العامة والاحتفالات',
        'خدمات الترفيه الموسمي للمدن'
      ]
    }
  ],
  'mental-health-wellbeing-economy-dashboard': [
    {
      id: 'men-services',
      title: 'خدمات الصحة النفسية المتطورة',
      icon: Brain,
      examples: [
        'علاج القلق والاكتئاب والسلوكي',
        'عيادات الصحة العقلية الحديثة'
      ]
    },
    {
      id: 'men-economy',
      title: 'اقتصاد الرفاهية Wellbeing',
      icon: Smile,
      examples: [
        'تطبيقات التأمل واليوغا ومراكز الاسترخاء',
        'إدارة التوتر وضغوط العمل وبرامج العافية'
      ]
    },
    {
      id: 'men-digital',
      title: 'الدعم النفسي الرقمي والذكاء الاصطناعي',
      icon: Sparkles,
      examples: [
        'تطبيقات العلاج النفسي Tele-therapy',
        'أدوات AI لدعم الصحة النفسية اللحظي'
      ]
    },
    {
      id: 'men-lifestyle',
      title: 'تحسين جودة الحياة والنمط المعيشي',
      icon: Coffee,
      examples: [
        'تصميم أسلوب الحياة Lifestyle Design',
        'برامج الرفاهية المؤسسية للموظفين'
      ]
    }
  ],
  'longevity-human-performance-dashboard': [
    {
      id: 'lon-science',
      title: 'علوم إطالة العمر Longevity',
      icon: Dna,
      examples: [
        'أبحاث الشيخوخة والطب التجديدي',
        'علاجات Anti-aging المتقدمة'
      ]
    },
    {
      id: 'lon-performance',
      title: 'تحسين الأداء البشري الفائق',
      icon: Dumbbell,
      examples: [
        'تغذية رياضية متقدمة ولياقة احترافية',
        'تدريبات تحسين القدرات الذهنية والبدنية'
      ]
    },
    {
      id: 'lon-prev',
      title: 'الطب الوقائي الاستباقي',
      icon: ShieldCheck,
      examples: [
        'فحوصات وراثية ومراقبة صحية ذكية',
        'إدارة الصحة الوقائية قبل ظهور الأعراض'
      ]
    },
    {
      id: 'lon-biotech',
      title: 'التكنولوجيا الحيوية البشرية',
      icon: Activity,
      examples: [
        'أبحاث الخلايا الجذعية والترميم الحيوي',
        'هندسة الجينات لتحسين جودة الحياة'
      ]
    }
  ]
};

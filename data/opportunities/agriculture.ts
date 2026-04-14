import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Sprout, 
  Warehouse, 
  Hammer, 
  Footprints, 
  Utensils, 
  Globe, 
  Zap, 
  Briefcase,
  Fish,
  Waves,
  Anchor,
  Ship,
  Trees,
  TreeDeciduous,
  Cpu,
  Smartphone,
  Dna,
  FlaskConical,
  ShieldAlert,
  Search,
  Settings,
  Activity
} from 'lucide-react';

export const agricultureOpportunities: Record<string, BusinessOpportunity[]> = {
  'farming-dashboard': [
    {
      id: 'ag-production',
      title: 'شركات الإنتاج الزراعي',
      icon: Sprout,
      examples: [
        'زراعة خضار (بندورة، خيار، خس)',
        'زراعة فواكه (تفاح، برتقال، عنب)',
        'زراعة حبوب (قمح، ذرة، شعير)',
        'زراعة نباتات طبية وعطرية',
        'زراعة عضوية (Organic)'
      ]
    },
    {
      id: 'ag-modern-house',
      title: 'شركات البيوت المحمية / الزراعة الحديثة',
      icon: Warehouse,
      examples: [
        'بيوت بلاستيكية/زجاجية',
        'زراعة مائية (Hydroponics)',
        'زراعة عمودية (Vertical)',
        'زراعة داخلية (Indoor LED)'
      ]
    },
    {
      id: 'ag-supplies',
      title: 'شركات مستلزمات زراعية',
      icon: Hammer,
      examples: [
        'بذور وأسمدة ومبيدات',
        'أنظمة ري حديثة',
        'معدات وآليات زراعية',
        'شتلات وأشجار مثمرة'
      ]
    },
    {
      id: 'ag-livestock',
      title: 'شركات تربية حيوانية',
      icon: Footprints,
      examples: [
        'مزارع أبقار وألبان',
        'مزارع دواجن وبيض',
        'تربية أغنام وماعز',
        'مزارع أسماك (Aquaculture)'
      ]
    },
    {
      id: 'ag-food-processing',
      title: 'شركات تصنيع غذائي',
      icon: Utensils,
      examples: [
        'معمل ألبان وأجبان',
        'معمل عصائر ومربات',
        'تعبئة وتغليف الخضار',
        'تجفيف وتغليف الأعشاب'
      ]
    },
    {
      id: 'ag-trading',
      title: 'شركات تصدير وتجارة',
      icon: Globe,
      examples: [
        'تصدير زيت الزيتون والتمور',
        'تصدير الفواكه الموسمية',
        'تجارة الجملة بالمحاصيل',
        'وسطاء العقود الزراعية'
      ]
    },
    {
      id: 'ag-tech',
      title: 'تكنولوجيا الزراعة (AgriTech)',
      icon: Zap,
      examples: [
        'تطبيقات لإدارة المزارع',
        'أنظمة مراقبة الري الذكية',
        'حساسات التربة والدرونز',
        'AI للتنبؤ بالإنتاج'
      ]
    },
    {
      id: 'ag-services',
      title: 'شركات خدمات زراعية',
      icon: Briefcase,
      examples: [
        'استشارات زراعية وفنية',
        'تصميم أنظمة ري',
        'صيانة البيوت المحمية',
        'مكافحة الآفات المحترفة'
      ]
    }
  ],
  'fisheries-aquaculture-dashboard': [
    {
      id: 'fish-production',
      title: 'شركات تربية الأسماك',
      icon: Fish,
      examples: [
        'مزارع أسماك مياه عذبة',
        'مزارع أسماك بحرية',
        'تربية السلمون',
        'تربية البلطي',
        'مزارع الروبيان'
      ]
    },
    {
      id: 'fish-modern',
      title: 'شركات الاستزراع المائي الحديث',
      icon: Waves,
      examples: [
        'أحواض مغلقة',
        'أنظمة تدوير المياه (RAS)',
        'أقفاص بحرية',
        'استزراع ذكي بالحساسات'
      ]
    },
    {
      id: 'fish-supplies',
      title: 'شركات مستلزمات الثروة السمكية',
      icon: Anchor,
      examples: [
        'أعلاف الأسماك',
        'أنظمة فلترة المياه',
        'مضخات وأجهزة أكسجين',
        'أحواض ومعدات'
      ]
    },
    {
      id: 'fish-shipping',
      title: 'شركات صيد وتجهيز بحري',
      icon: Ship,
      examples: [
        'شركات صيد',
        'سفن صيد',
        'معدات شبك',
        'خدمات تبريد ونقل'
      ]
    },
    {
      id: 'fish-processing',
      title: 'شركات تصنيع غذائي بحري',
      icon: Utensils,
      examples: [
        'تعليب تونة',
        'تجميد أسماك',
        'منتجات بحرية جاهزة',
        'تدخين أسماك'
      ]
    },
    {
      id: 'fish-trading',
      title: 'شركات تصدير وتجارة بحرية',
      icon: Globe,
      examples: [
        'تصدير روبيان',
        'تصدير أسماك طازجة',
        'تجارة جملة للمطاعم'
      ]
    },
    {
      id: 'fish-tech',
      title: 'شركات تكنولوجيا الثروة السمكية',
      icon: Zap,
      examples: [
        'حساسات جودة المياه',
        'AI لمراقبة النمو',
        'تطبيقات إدارة المزارع',
        'درونز بحرية'
      ]
    },
    {
      id: 'fish-services',
      title: 'شركات خدمات بحرية',
      icon: Anchor,
      examples: [
        'استشارات استزراع',
        'صيانة أحواض',
        'تحليل مياه',
        'مكافحة أمراض الأسماك'
      ]
    }
  ],
  'forestry-dashboard': [
    {
      id: 'for-production',
      title: 'شركات إنتاج الأخشاب',
      icon: Trees,
      examples: [
        'زراعة أشجار خشبية',
        'مزارع صنوبر',
        'مزارع أشجار صناعية',
        'إنتاج أخشاب بناء'
      ]
    },
    {
      id: 'for-management',
      title: 'شركات إدارة الغابات',
      icon: TreeDeciduous,
      examples: [
        'إعادة تشجير',
        'صيانة غابات',
        'مكافحة حرائق',
        'مراقبة نمو الأشجار'
      ]
    },
    {
      id: 'for-supplies',
      title: 'شركات مستلزمات الغابات',
      icon: Hammer,
      examples: [
        'شتلات أشجار',
        'أنظمة ري',
        'معدات قطع',
        'أدوات حماية'
      ]
    },
    {
      id: 'for-processing',
      title: 'شركات تصنيع خشبي',
      icon: Warehouse,
      examples: [
        'أثاث',
        'ألواح خشب',
        'أبواب',
        'ديكور داخلي'
      ]
    },
    {
      id: 'for-trading',
      title: 'شركات تجارة وتصدير أخشاب',
      icon: Globe,
      examples: [
        'تجارة أخشاب خام',
        'تصدير ألواح',
        'تجارة فحم نباتي'
      ]
    },
    {
      id: 'for-tech',
      title: 'شركات تكنولوجيا الغابات',
      icon: Zap,
      examples: [
        'درونز مراقبة',
        'AI للحرائق',
        'حساسات رطوبة',
        'satellite monitoring'
      ]
    },
    {
      id: 'for-services',
      title: 'شركات خدمات بيئية',
      icon: Sprout,
      examples: [
        'استشارات بيئية',
        'مشاريع كربون credits',
        'حماية التنوع الحيوي'
      ]
    }
  ],
  'agritech-dashboard': [
    {
      id: 'agt-software',
      title: 'شركات برمجيات زراعية',
      icon: Smartphone,
      examples: [
        'ERP للمزارع',
        'إدارة الإنتاج',
        'تطبيقات تتبع المحاصيل'
      ]
    },
    {
      id: 'agt-sensors',
      title: 'شركات حساسات وأنظمة ذكية',
      icon: Cpu,
      examples: [
        'حساسات رطوبة',
        'حرارة',
        'جودة تربة',
        'مستوى مياه'
      ]
    },
    {
      id: 'agt-drones',
      title: 'شركات درونز زراعية',
      icon: Zap,
      examples: [
        'مراقبة المحاصيل',
        'رش ذكي',
        'تصوير جوي',
        'mapping'
      ]
    },
    {
      id: 'agt-ai',
      title: 'شركات AI وتحليل إنتاج',
      icon: Activity,
      examples: [
        'التنبؤ بالممحصول',
        'اكتشاف الأمراض',
        'optimization systems'
      ]
    },
    {
      id: 'agt-automation',
      title: 'شركات أتمتة زراعية',
      icon: Settings,
      examples: [
        'روبوتات حصاد',
        'أنظمة ري ذكية',
        'آلات ذكية'
      ]
    },
    {
      id: 'agt-services',
      title: 'شركات خدمات تقنية',
      icon: Hammer,
      examples: [
        'استشارات رقمية',
        'تركيب الأنظمة',
        'صيانة software/hardware'
      ]
    }
  ],
  'seeds-crop-protection-dashboard': [
    {
      id: 'scp-seeds',
      title: 'شركات إنتاج البذور',
      icon: Dna,
      examples: [
        'بذور خضار',
        'بذور حبوب',
        'بذور فواكه',
        'بذور هجينة'
      ]
    },
    {
      id: 'scp-nurseries',
      title: 'شركات شتلات وأشجار',
      icon: Sprout,
      examples: [
        'مشاتل',
        'شتلات فواكه',
        'شتلات زينة',
        'شتلات عضوية'
      ]
    },
    {
      id: 'scp-protection',
      title: 'شركات حماية المحاصيل',
      icon: ShieldAlert,
      examples: [
        'مبيدات',
        'مكافحة آفات',
        'مبيدات فطرية',
        'حماية بيولوجية'
      ]
    },
    {
      id: 'scp-fertilizers',
      title: 'شركات أسمدة ومحسنات',
      icon: FlaskConical,
      examples: [
        'أسمدة عضوية',
        'أسمدة كيماوية',
        'محسنات تربة'
      ]
    },
    {
      id: 'scp-tech',
      title: 'تكنولوجيا حماية',
      icon: Zap,
      examples: [
        'كشف أمراض نبات',
        'AI detection',
        'sensors',
        'smart spraying'
      ]
    },
    {
      id: 'scp-services',
      title: 'شركات خدمات زراعية متخصصة',
      icon: Search,
      examples: [
        'استشارات محاصيل',
        'فحص تربة',
        'خطط حماية موسمية'
      ]
    }
  ]
};

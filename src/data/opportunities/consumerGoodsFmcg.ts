import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Beer, 
  Wine, 
  GlassWater, 
  Truck, 
  Tag, 
  Package, 
  Utensils, 
  Shirt, 
  Footprints, 
  Palette, 
  ShoppingBag, 
  Scissors, 
  Sprout, 
  FlaskConical, 
  Search, 
  Stethoscope, 
  Droplets, 
  ShieldCheck, 
  Sparkles, 
  Milk, 
  Apple, 
  Beef, 
  Vial, 
  Dna, 
  Armchair, 
  Layout, 
  Home, 
  ChefHat, 
  Flower2, 
  TreePine, 
  Shovel, 
  Paintbrush, 
  Hammer, 
  Wrench, 
  Coffee, 
  Waves, 
  Dog, 
  Bone, 
  Syringe, 
  Flame, 
  Wind, 
  Gamepad2, 
  Puzzle, 
  Users, 
  Box, 
  ThermometerSnowflake,
  Grape,
  BatteryMedium
} from 'lucide-react';

export const consumerGoodsFmcgOpportunities: Record<string, BusinessOpportunity[]> = {
  'apparel-shoes-dashboard': [
    {
      id: 'app-clothing',
      title: 'شركات تصنيع الملابس',
      icon: Shirt,
      examples: [
        'ملابس جاهزة ورياضية',
        'ملابس فاخرة وأزياء سريعة'
      ]
    },
    {
      id: 'app-shoes',
      title: 'شركات تصنيع الأحذية',
      icon: Footprints,
      examples: [
        'أحذية رياضية وجلدية',
        'أحذية عمل وأطفال'
      ]
    },
    {
      id: 'app-design',
      title: 'شركات التصميم والأزياء',
      icon: Palette,
      examples: [
        'بيوت الأزياء العالمية',
        'تطوير مجموعات موسمية'
      ]
    },
    {
      id: 'app-retail',
      title: 'شركات البيع والتجزئة',
      icon: ShoppingBag,
      examples: [
        'متاجر ملابس ومنصات إلكترونية',
        'ماركات مباشرة للمستهلك DTC'
      ]
    },
    {
      id: 'app-textiles',
      title: 'شركات النسيج والخامات',
      icon: Scissors,
      examples: [
        'أقمشة وقطن ومواد صناعية',
        'صباغة وتطريز'
      ]
    }
  ],
  'cleaning-products-dashboard': [
    {
      id: 'cln-household',
      title: 'شركات المنظفات المنزلية',
      icon: Droplets,
      examples: [
        'منظفات أرضيات وزجاج',
        'صابون سائل ومنظفات عامة'
      ]
    },
    {
      id: 'cln-industrial',
      title: 'شركات المنظفات الصناعية',
      icon: ShieldCheck,
      examples: [
        'تنظيف وشحوم المصانع',
        'مواد تعقيم صناعية قوية'
      ]
    },
    {
      id: 'cln-sanitizing',
      title: 'شركات التعقيم',
      icon: Sparkles,
      examples: [
        'مطهرات طبية',
        'تعقيم مستشفيات ومنشآت'
      ]
    },
    {
      id: 'cln-chem',
      title: 'شركات التصنيع الكيميائي',
      icon: FlaskConical,
      examples: [
        'مواد خام ومنظفات أساسية',
        'خلط وتركيب الكيماويات'
      ]
    }
  ],
  'cosmetics-personal-care-dashboard': [
    {
      id: 'cos-makeup',
      title: 'شركات مستحضرات التجميل',
      icon: Palette,
      examples: [
        'مكياج وعطور',
        'كريمات ومنتجات بشرة'
      ]
    },
    {
      id: 'cos-personal',
      title: 'شركات العناية الشخصية',
      icon: Sparkles,
      examples: [
        'شامبو وصابون ومعجون أسنان',
        'مزيلات عرق ومنتجات يومية'
      ]
    },
    {
      id: 'cos-luxury',
      title: 'شركات العطور الفاخرة',
      icon: Droplets,
      examples: [
        'براندات عطور عالمية',
        'تصنيع زيوت عطرية Niche'
      ]
    },
    {
      id: 'cos-mfg',
      title: 'شركات تصنيع وتعبئة',
      icon: Package,
      examples: [
        'تعهيد التصنيع Private Label',
        'تعبئة وتغليف مستحضرات'
      ]
    }
  ],
  'food-nutrition-dashboard': [
    {
      id: 'foo-basic',
      title: 'شركات إنتاج الغذاء الأساسي',
      icon: Milk,
      examples: [
        'ألبان ولحوم وحبوب',
        'خضار وفواكه معالجة'
      ]
    },
    {
      id: 'foo-health',
      title: 'شركات التغذية الصحية',
      icon: Apple,
      examples: [
        'مكملات غذائية وفيتامينات',
        'أغذية رياضية متخصصة'
      ]
    },
    {
      id: 'foo-organic',
      title: 'شركات الأغذية العضوية',
      icon: Sprout,
      examples: [
        'منتجات طبيعية Organic',
        'غذاء بدون إضافات صناعية'
      ]
    },
    {
      id: 'foo-mfg',
      title: 'شركات تصنيع الأغذية',
      icon: Utensils,
      examples: [
        'تعبئة وتجميد الأغذية',
        'تصنيع وجبات جاهزة'
      ]
    }
  ],
  'furniture-household-dashboard': [
    {
      id: 'fur-mfg',
      title: 'شركات تصنيع الأثاث',
      icon: Armchair,
      examples: [
        'أثاث خشبي ومعدني ومكتبي'
      ]
    },
    {
      id: 'fur-design',
      title: 'شركات التصميم الداخلي',
      icon: Layout,
      examples: [
        'ديكور وتخطيط مساحات',
        'تصميم داخلي متكامل'
      ]
    },
    {
      id: 'fur-items',
      title: 'شركات الأدوات المنزلية',
      icon: Home,
      examples: [
        'أدوات مطبخ ومستلزمات منزلية'
      ]
    },
    {
      id: 'fur-retail',
      title: 'شركات البيع والتجزئة',
      icon: ShoppingBag,
      examples: [
        'إيكيا ستايل وبيع إلكتروني'
      ]
    }
  ],
  'garden-patio-dashboard': [
    {
      id: 'gar-farming',
      title: 'شركات الزراعة المنزلية',
      icon: Flower2,
      examples: [
        'نباتات زينة وأنظمة ري صغيرة'
      ]
    },
    {
      id: 'gar-landscape',
      title: 'شركات تصميم الحدائق',
      icon: TreePine,
      examples: [
        'تنسيق وديكور خارجي Landscaping'
      ]
    },
    {
      id: 'gar-supplies',
      title: 'شركات مستلزمات الحدائق',
      icon: Shovel,
      examples: [
        'أدوات زراعة وأسمدة وأثاث خارجي'
      ]
    }
  ],
  'home-improvement-dashboard': [
    {
      id: 'imp-materials',
      title: 'شركات مواد البناء المنزلية',
      icon: Paintbrush,
      examples: [
        'دهانات وبلاط وأدوات سباكة'
      ]
    },
    {
      id: 'imp-maintenance',
      title: 'شركات الصيانة المنزلية',
      icon: Wrench,
      examples: [
        'سباكة وكهرباء وصيانة عامة'
      ]
    },
    {
      id: 'imp-renovation',
      title: 'شركات التصميم والتجديد',
      icon: Hammer,
      examples: [
        'خدمات إعادة تأهيل وتجديد المنازل'
      ]
    }
  ],
  'non-alcoholic-beverages-dashboard': [
    {
      id: 'nab-juice',
      title: 'شركات العصائر',
      icon: Grape,
      examples: [
        'عصائر طبيعية ومعلبة'
      ]
    },
    {
      id: 'nab-water',
      title: 'شركات المياه',
      icon: Waves,
      examples: [
        'مياه معدنية وغازية معبأة'
      ]
    },
    {
      id: 'nab-soft',
      title: 'شركات المشروبات الغازية',
      icon: Coffee,
      examples: [
        'مشروبات غازية وطاقة'
      ]
    }
  ],
  'pet-supplies-dashboard': [
    {
      id: 'pet-food',
      title: 'شركات غذاء الحيوانات',
      icon: Bone,
      examples: [
        'طعام قطط وكلاب وأعلاف'
      ]
    },
    {
      id: 'pet-vet',
      title: 'شركات الخدمات البيطرية',
      icon: Syringe,
      examples: [
        'عيادات وأدوية بيطرية'
      ]
    },
    {
      id: 'pet-items',
      title: 'شركات مستلزمات الحيوانات',
      icon: Dog,
      examples: [
        'ألعاب وأقفاص وأدوات عناية'
      ]
    }
  ],
  'toys-dashboard': [
    {
      id: 'toy-mfg',
      title: 'شركات تصنيع الألعاب',
      icon: Puzzle,
      examples: [
        'ألعاب أطفال وتعليمية وإلكترونية'
      ]
    },
    {
      id: 'toy-smart',
      title: 'شركات الألعاب الذكية',
      icon: Gamepad2,
      examples: [
        'ألعاب AI وتعليم البرمجة'
      ]
    },
    {
      id: 'toy-distribution',
      title: 'شركات التوزيع',
      icon: Users,
      examples: [
        'متاجر ألعاب ومنصات إلكترونية'
      ]
    }
  ],
  'packaged-foods-dashboard': [
    {
      id: 'pkg-canned',
      title: 'شركات الأغذية المعلبة',
      icon: Box,
      examples: [
        'خضار معلبة ولحوم محفوظة'
      ]
    },
    {
      id: 'pkg-ready',
      title: 'شركات الوجبات الجاهزة',
      icon: ThermometerSnowflake,
      examples: [
        'وجبات مجمدة وجاهزة للأكل'
      ]
    },
    {
      id: 'pkg-packaging',
      title: 'شركات التعبئة والتغليف الغذائي',
      icon: Package,
      examples: [
        'تغليف صحي وصناعي متطور'
      ]
    }
  ]
};

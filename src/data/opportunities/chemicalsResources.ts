import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  FlaskConical, 
  Beaker, 
  Pipette, 
  Combine, 
  Droplets, 
  Sprout, 
  Layers, 
  Leaf, 
  Flame, 
  Mountain, 
  Pickaxe, 
  Gem, 
  Zap, 
  Truck, 
  Fuel, 
  Box, 
  Recycle, 
  FileText, 
  Package,
  Factory,
  Settings,
  ShieldCheck,
  Search,
  Wrench,
  Thermometer,
  Container,
  Globe,
  Target
} from 'lucide-react';

export const chemicalsResourcesOpportunities: Record<string, BusinessOpportunity[]> = {
  'chemical-industry-dashboard': [
    {
      id: 'chem-basic',
      title: 'شركات الكيماويات الأساسية',
      icon: FlaskConical,
      examples: [
        'حمض الكبريتيك',
        'الأمونيا',
        'الصودا الكاوية',
        'الكلور',
        'الأسمدة الكيميائية'
      ]
    },
    {
      id: 'chem-specialty',
      title: 'شركات الكيماويات المتخصصة',
      icon: Beaker,
      examples: [
        'مواد الطلاء',
        'المواد اللاصقة',
        'المنظفات الصناعية',
        'إضافات البلاستيك',
        'المواد الحافظة'
      ]
    },
    {
      id: 'chem-industrial',
      title: 'شركات الكيماويات الصناعية',
      icon: Factory,
      examples: [
        'مواد تنظيف صناعية',
        'مواد معالجة المعادن',
        'كيماويات البناء',
        'مواد معالجة المياه'
      ]
    },
    {
      id: 'chem-agri',
      title: 'شركات الكيماويات الزراعية',
      icon: Sprout,
      examples: [
        'مبيدات حشرية',
        'مبيدات فطرية',
        'أسمدة نيتروجينية',
        'محفزات نمو النبات'
      ]
    },
    {
      id: 'chem-polymers',
      title: 'شركات الألياف والبوليمرات',
      icon: Layers,
      examples: [
        'بلاستيك PE / PP',
        'بوليستر',
        'نايلون',
        'مطاط صناعي',
        'PVC'
      ]
    },
    {
      id: 'chem-green',
      title: 'شركات الكيمياء المتقدمة',
      icon: Leaf,
      examples: [
        'كيماويات صديقة للبيئة',
        'مواد قابلة للتحلل',
        'إعادة تدوير كيميائي',
        'بدائل البلاستيك الحيوي'
      ]
    }
  ],
  'fossil-fuels-dashboard': [
    {
      id: 'fuel-extraction',
      title: 'شركات استخراج النفط',
      icon: Fuel,
      examples: [
        'الحفر البري',
        'الحفر البحري',
        'استخراج النفط الخام',
        'تشغيل الآبار'
      ]
    },
    {
      id: 'fuel-gas',
      title: 'شركات الغاز الطبيعي',
      icon: Flame,
      examples: [
        'استخراج الغاز',
        'نقل الغاز',
        'معالجة الغاز',
        'LNG (الغاز المسال)'
      ]
    },
    {
      id: 'fuel-coal',
      title: 'شركات الفحم والطاقة التقليدية',
      icon: Factory,
      examples: [
        'تعدين الفحم',
        'محطات توليد كهرباء',
        'معالجة الفحم'
      ]
    },
    {
      id: 'fuel-services',
      title: 'شركات الخدمات النفطية',
      icon: Wrench,
      examples: [
        'الحفر والخدمات الهندسية',
        'صيانة الآبار',
        'معدات الحفر',
        'الاستكشاف الجيولوجي'
      ]
    },
    {
      id: 'fuel-trading',
      title: 'شركات التداول والطاقة',
      icon: Globe,
      examples: [
        'تجارة النفط الخام',
        'شحن الطاقة',
        'تسويق المشتقات النفطية'
      ]
    }
  ],
  'mining-dashboard': [
    {
      id: 'min-operations',
      title: 'شركات التعدين',
      icon: Pickaxe,
      examples: [
        'استخراج الذهب',
        'استخراج النحاس',
        'استخراج الحديد',
        'استخراج الليثيوم'
      ]
    },
    {
      id: 'min-processing',
      title: 'شركات معالجة المعادن',
      icon: Thermometer,
      examples: [
        'صهر المعادن',
        'تنقية الحديد',
        'إنتاج الألمنيوم',
        'معالجة النحاس'
      ]
    },
    {
      id: 'min-precious',
      title: 'شركات المعادن الثمينة',
      icon: Gem,
      examples: [
        'الذهب والفضة',
        'البلاتين',
        'الأحجار الكريمة'
      ]
    },
    {
      id: 'min-industrial',
      title: 'شركات المعادن الصناعية',
      icon: Mountain,
      examples: [
        'الحديد والنيكل',
        'الزنك والرصاص'
      ]
    },
    {
      id: 'min-tech',
      title: 'شركات التعدين الذكي',
      icon: Zap,
      examples: [
        'روبوتات التعدين',
        'AI exploration',
        'drones للمسح الجيولوجي',
        'تحليل بيانات الأرض'
      ]
    },
    {
      id: 'min-services',
      title: 'شركات الخدمات التعدينية',
      icon: Truck,
      examples: [
        'استكشاف جيولوجي',
        'حفر وتجهيز المواقع',
        'استشارات تعدين',
        'نقل خامات'
      ]
    }
  ],
  'petroleum-refinery-dashboard': [
    {
      id: 'pet-refinery',
      title: 'شركات تكرير النفط',
      icon: Droplets,
      examples: [
        'بنزين وديزل',
        'وقود طائرات',
        'نفط صناعي'
      ]
    },
    {
      id: 'pet-chemicals',
      title: 'شركات البتروكيماويات',
      icon: FlaskConical,
      examples: [
        'الإيثيلين والبروبلين',
        'البنزين الصناعي',
        'مشتقات البلاستيك'
      ]
    },
    {
      id: 'pet-distribution',
      title: 'شركات توزيع الوقود',
      icon: Fuel,
      examples: [
        'محطات بنزين',
        'توزيع الوقود',
        'تخزين النفط',
        'النقل البترولي'
      ]
    },
    {
      id: 'pet-lubricants',
      title: 'شركات زيوت ومواد تشحيم',
      icon: Container,
      examples: [
        'زيوت محركات',
        'شحوم صناعية',
        'سوائل هيدروليك'
      ]
    },
    {
      id: 'pet-services',
      title: 'شركات الخدمات النفطية',
      icon: Settings,
      examples: [
        'تشغيل المصافي',
        'صيانة الأنابيب',
        'تنظيف خزانات'
      ]
    }
  ],
  'plastic-rubber-dashboard': [
    {
      id: 'pla-raw',
      title: 'شركات إنتاج البلاستيك الخام',
      icon: Layers,
      examples: [
        'PVC',
        'PE / PP',
        'PET'
      ]
    },
    {
      id: 'pla-products',
      title: 'شركات تصنيع المنتجات البلاستيكية',
      icon: Box,
      examples: [
        'عبوات وتغليف',
        'أنابيب بلاستيك',
        'أدوات منزلية'
      ]
    },
    {
      id: 'pla-rubber',
      title: 'شركات المطاط الصناعي',
      icon: Target,
      examples: [
        'إطارات سيارات',
        'سيور صناعية',
        'مواد عزل'
      ]
    },
    {
      id: 'pla-recycle',
      title: 'شركات إعادة التدوير',
      icon: Recycle,
      examples: [
        'إعادة تدوير البلاستيك',
        'تحويل النفايات إلى مواد خام',
        'إعادة تصنيع المطاط'
      ]
    },
    {
      id: 'pla-bio',
      title: 'شركات البلاستيك الحيوي',
      icon: Leaf,
      examples: [
        'مواد قابلة للتحلل',
        'بدائل البلاستيك التقليدي',
        'مواد تغليف صديقة للبيئة'
      ]
    }
  ],
  'pulp-paper-dashboard': [
    {
      id: 'pap-raw',
      title: 'شركات إنتاج الورق الخام',
      icon: FileText,
      examples: [
        'ورق طباعة',
        'ورق تغليف',
        'ورق صناعي'
      ]
    },
    {
      id: 'pap-recycle',
      title: 'شركات إعادة تدوير الورق',
      icon: Recycle,
      examples: [
        'جمع الورق',
        'إعادة تصنيع',
        'إنتاج ورق معاد'
      ]
    },
    {
      id: 'pap-packaging',
      title: 'شركات التغليف الورقي',
      icon: Package,
      examples: [
        'كرتون وصناديق شحن',
        'تغليف غذائي'
      ]
    },
    {
      id: 'pap-consumer',
      title: 'شركات منتجات الورق الاستهلاكية',
      icon: Box,
      examples: [
        'مناديل وورق صحي',
        'أكياس ورقية'
      ]
    },
    {
      id: 'pap-tech',
      title: 'شركات التكنولوجيا الورقية',
      icon: Zap,
      examples: [
        'تحسين إنتاج الورق',
        'تقنيات تقليل الاستهلاك',
        'مواد بديلة للورق'
      ]
    }
  ]
};

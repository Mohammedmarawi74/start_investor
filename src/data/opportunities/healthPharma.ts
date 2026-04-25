import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Heart, 
  Home, 
  Activity, 
  UserPlus, 
  Stethoscope, 
  Hospital, 
  Syringe, 
  BrainCircuit, 
  ShieldPlus, 
  Settings, 
  Smartphone, 
  Building2, 
  Cpu, 
  Microscope, 
  Zap, 
  Bot, 
  Layout, 
  FlaskConical, 
  Dna, 
  Truck, 
  ShoppingBag, 
  BarChart3, 
  Search, 
  LineChart, 
  Crosshair
} from 'lucide-react';

export const healthPharmaOpportunities: Record<string, BusinessOpportunity[]> = {
  'care-support-dashboard': [
    {
      id: 'car-home',
      title: 'خدمات الرعاية المنزلية',
      icon: Home,
      examples: [
        'رعاية كبار السن والتمريض المنزلي',
        'رعاية المرضى بعد العمليات الجراحية'
      ]
    },
    {
      id: 'car-rehab',
      title: 'مراكز إعادة التأهيل',
      icon: Activity,
      examples: [
        'العلاج الطبيعي والوظيفي',
        'التأهيل من الإصابات الرياضية'
      ]
    },
    {
      id: 'car-homes',
      title: 'دور الرعاية المتخصصة',
      icon: Heart,
      examples: [
        'مراكز رعاية طويلة الأمد',
        'دور رعاية ذوي الاحتياجات الخاصة'
      ]
    },
    {
      id: 'car-psych',
      title: 'خدمات الدعم النفسي',
      icon: UserPlus,
      examples: [
        'علاج ودعم الصحة العقلية',
        'استشارات نفسية وسلوكية'
      ]
    }
  ],
  'hospitals-health-professionals-dashboard': [
    {
      id: 'hosp-main',
      title: 'المستشفيات العامة والخاصة',
      icon: Hospital,
      examples: [
        'مستشفيات تخصصية وطوارئ',
        'مراكز طبية كبرى ذات تقنية عالية'
      ]
    },
    {
      id: 'hosp-clinics',
      title: 'العيادات الطبية التخصصية',
      icon: Stethoscope,
      examples: [
        'عيادات أسنان وجلدية وتجميل',
        'مراكز الرعاية الأولية'
      ]
    },
    {
      id: 'hosp-staff',
      title: 'خدمات الكوادر الطبية',
      icon: Syringe,
      examples: [
        'شبكات الأطباء والممرضين',
        'خدمات فنيي المختبرات والأشعة'
      ]
    },
    {
      id: 'hosp-surgery',
      title: 'المراكز الجراحية',
      icon: Crosshair,
      examples: [
        'مراكز جراحة اليوم الواحد',
        'مراكز العمليات الدقيقة والتخصصية'
      ]
    }
  ],
  'health-system-dashboard': [
    {
      id: 'sys-insurance',
      title: 'أنظمة التأمين الصحي',
      icon: ShieldPlus,
      examples: [
        'شركات التأمين الطبي الخاص',
        'أنظمة الدفع الصحي الوطنية'
      ]
    },
    {
      id: 'sys-mgmt',
      title: 'إدارة المستشفيات',
      icon: Settings,
      examples: [
        'أنظمة تشغيل المستشفيات الرقمية',
        'إدارة موارد المرضى والبيانات'
      ]
    },
    {
      id: 'sys-digital',
      title: 'الصحة الرقمية Digital Health',
      icon: Smartphone,
      examples: [
        'تطبيقات الطب عن بعد Telemedicine',
        'السجلات الطبية الإلكترونية الموحدة'
      ]
    },
    {
      id: 'sys-infra',
      title: 'البنية التحتية الصحية',
      icon: Building2,
      examples: [
        'تجهيز المستشفيات وبناء المراكز',
        'شبكات الإسعاف والخدمات اللوجستية'
      ]
    }
  ],
  'medical-technology-dashboard': [
    {
      id: 'tec-devices',
      title: 'الأجهزة الطبية المتطورة',
      icon: Microscope,
      examples: [
        'أجهزة التصوير بالرنين والمراقبة',
        'أدوات الجراحة الدقيقة والألياف'
      ]
    },
    {
      id: 'tec-diag',
      title: 'تقنيات التشخيص الطبي',
      icon: Activity,
      examples: [
        'مختبرات التحليل والنتائج الفورية',
        'أدوات الفحص السريع والمنزلي'
      ]
    },
    {
      id: 'tec-ai',
      title: 'الذكاء الاصطناعي الطبي',
      icon: BrainCircuit,
      examples: [
        'تحليل صور الأشعة بالذكاء الاصطناعي',
        'توقع المخاطر الصحية والوبائية'
      ]
    },
    {
      id: 'tec-robots',
      title: 'الروبوتات الطبية',
      icon: Bot,
      examples: [
        'الجراحة الروبوتية الدقيقة',
        'أتمتة الصيدليات والمخازن الطبية'
      ]
    },
    {
      id: 'tec-platforms',
      title: 'منصات HealthTech',
      icon: Layout,
      examples: [
        'منصات إدارة المرضى السحابية',
        'منصات الاستشارات الطبية الفورية'
      ]
    }
  ],
  'pharma-market-dashboard': [
    {
      id: 'pha-mfg',
      title: 'شركات الأدوية والتصنيع',
      icon: FlaskConical,
      examples: [
        'تصنيع الأدوية العامة والبديلة Generic',
        'الأدوية الحيوية والمتخصصة'
      ]
    },
    {
      id: 'pha-rd',
      title: 'البحث والتطوير R&D',
      icon: Dna,
      examples: [
        'تطوير العقاقير والتجارب السريرية',
        'أبحاث التكنولوجيا الحيوية'
      ]
    },
    {
      id: 'pha-dist',
      title: 'توزيع الأدوية واللوجستيات',
      icon: Truck,
      examples: [
        'توزيع الأدوية للصيدليات والمستشفيات',
        'التخزين الطبي المبرد والمتطور'
      ]
    },
    {
      id: 'pha-retail',
      title: 'أسواق الأدوية والبيع',
      icon: ShoppingBag,
      examples: [
        'سلاسل الصيدليات الكبرى',
        'منصات بيع الأدوية الرقمية'
      ]
    }
  ],
  'state-of-health-dashboard': [
    {
      id: 'sta-data',
      title: 'بيانات وإحصاءات الصحة العامة',
      icon: BarChart3,
      examples: [
        'تحليل معدلات الأمراض والوفيات',
        'بيانات ديموغرافية صحية وطنية'
      ]
    },
    {
      id: 'sta-monitor',
      title: 'مراقبة الصحة المجتمعية',
      icon: Search,
      examples: [
        'تتبع انتشار الأوبئة والأمراض',
        'حملات التوعية والوقاية القومية'
      ]
    },
    {
      id: 'sta-predict',
      title: 'أنظمة التنبؤ الصحي الذكية',
      icon: LineChart,
      examples: [
        'توقع الأزمات الصحية بالبيانات الضخمة',
        'نمذجة انتشار الأمراض المعدية'
      ]
    },
    {
      id: 'sta-policy',
      title: 'السياسات وإدارة الأزمات',
      icon: ShieldPlus,
      examples: [
        'تنظيم القطاع الصحي الحكومي',
        'خطط الاستجابة للطوارئ الصحية'
      ]
    }
  ]
};

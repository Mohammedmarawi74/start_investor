import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Shield, 
  Users, 
  GraduationCap, 
  Map, 
  History, 
  Moon, 
  Building2, 
  BarChart3,
  Gavel,
  Lock,
  Zap,
  Library,
  Network,
  Globe,
  Activity,
  UserCheck,
  ClipboardList,
  Search
} from 'lucide-react';

export const societyOpportunities: Record<string, BusinessOpportunity[]> = {
  'crime-law-enforcement-dashboard': [
    {
      id: 'crime-law-enforcement',
      title: 'إنفاذ القانون والأمن العام',
      icon: Shield,
      examples: [
        'الشرطة والتحقيقات الجنائية',
        'الأمن الداخلي ومكافحة الإرهاب'
      ]
    },
    {
      id: 'crime-justice',
      title: 'العدالة الجنائية والمحاكم',
      icon: Gavel,
      examples: [
        'المحاكم والنيابة العامة',
        'إصدار الأحكام والخدمات القانونية'
      ]
    },
    {
      id: 'crime-border',
      title: 'الأمن القومي وحماية الحدود',
      icon: Lock,
      examples: [
        'حماية الحدود والاستخبارات الداخلية',
        'تأمين المنشآت الحيوية'
      ]
    },
    {
      id: 'crime-correction',
      title: 'الخدمات الإصلاحية والتأهيل',
      icon: Users,
      examples: [
        'إدارة السجون وإعادة التأهيل',
        'برامج إعادة دمج السجناء'
      ]
    }
  ],
  'demographics-dashboard': [
    {
      id: 'dem-pop-analysis',
      title: 'تحليل السكان والنمو',
      icon: Users,
      examples: [
        'توزيع الأعمار والنمو السكاني',
        'إحصاءات الهجرة والتعداد السكاني'
      ]
    },
    {
      id: 'dem-social-data',
      title: 'البيانات الاجتماعية والدخل',
      icon: BarChart3,
      examples: [
        'مستويات الدخل والتعليم',
        'الحالة الاجتماعية والتركيبة الوطنية'
      ]
    },
    {
      id: 'dem-studies',
      title: 'دراسات التغيرات السكانية',
      icon: Activity,
      examples: [
        'التعداد السكاني الوطني',
        'توقعات التغير الديموغرافي'
      ]
    },
    {
      id: 'dem-forecasting',
      title: 'التنبؤ الديموغرافي المستقبلي',
      icon: UserCheck,
      examples: [
        'توقع النمو وشيخوخة السكان',
        'تحليل الهجرة المستقبلية'
      ]
    }
  ],
  'education-science-dashboard': [
    {
      id: 'edu-basic',
      title: 'التعليم الأساسي والمدارس',
      icon: GraduationCap,
      examples: [
        'التعليم الابتدائي والثانوي',
        'تطوير المناهج الوطنية والمدارس'
      ]
    },
    {
      id: 'edu-higher',
      title: 'التعليم العالي والأبحاث',
      icon: Library,
      examples: [
        'الجامعات والكليات الكبرى',
        'الأبحاث الأكاديمية المتخصصة'
      ]
    },
    {
      id: 'edu-science',
      title: 'البحث العلمي والمختبرات',
      icon: Search,
      examples: [
        'المختبرات العلمية والأبحاث التطبيقية',
        'النشر العلمي والابتكار التقني'
      ]
    },
    {
      id: 'edu-digital',
      title: 'التعليم الرقمي والتعلم عن بعد',
      icon: Zap,
      examples: [
        'منصات e-learning والتعليم أونلاين',
        'الدورات التقنية والتعليم التفاعلي'
      ]
    }
  ],
  'geography-nature-dashboard': [
    {
      id: 'geo-nature',
      title: 'الجغرافيا الطبيعية والتضاريس',
      icon: Map,
      examples: [
        'دراسة الجبال والأنهار والتضاريس',
        'تحليل الموارد الطبيعية والغابات'
      ]
    },
    {
      id: 'geo-resources',
      title: 'إدارة الموارد الطبيعية والمعادن',
      icon: Globe,
      examples: [
        'استكشاف المياه والمعادن والغابات',
        'الاستغلال المستدام للموارد الطبيعية'
      ]
    },
    {
      id: 'geo-environment',
      title: 'حماية البيئة والتنوع الحيوي',
      icon: Shield,
      examples: [
        'الأنظمة البيئية وحماية الطبيعة',
        'إدارة التنوع الحيوي والمحميات'
      ]
    },
    {
      id: 'geo-climate',
      title: 'دراسات المناخ والطقس',
      icon: Activity,
      examples: [
        'أبحاث تغير المناخ والطقس العالمي',
        'أنظمة الإنذار المبكر للكوارث'
      ]
    }
  ],
  'historical-data-dashboard': [
    {
      id: 'hist-archiving',
      title: 'الأرشفة التاريخية والوثائق',
      icon: Library,
      examples: [
        'وثائق تاريخية وسجلات الدول',
        'أرشيف الحضارات وجمع البيانات'
      ]
    },
    {
      id: 'hist-analysis',
      title: 'تحليل الأحداث التاريخية',
      icon: History,
      examples: [
        'تفسير التحولات التاريخية والحروب',
        'دراسة تطور النماذج السياسية'
      ]
    },
    {
      id: 'hist-long-data',
      title: 'البيانات الزمنية الطويلة',
      icon: BarChart3,
      examples: [
        'إحصاءات تاريخية للتطور الاقتصادي',
        'التطور السكاني عبر العصور'
      ]
    },
    {
      id: 'hist-digital',
      title: 'التاريخ الرقمي والرقمنة',
      icon: Map,
      examples: [
        'رقمنة الوثائق والخرائط التاريخية',
        'قواعد بيانات التراث التاريخي'
      ]
    }
  ],
  'religion-dashboard': [
    {
      id: 'rel-institutions',
      title: 'المؤسسات ودور العبادة',
      icon: Building2,
      examples: [
        'إدارة المساجد والكنائس والمعابد',
        'تنظيم المؤسسات الدينية الكبرى'
      ]
    },
    {
      id: 'rel-studies',
      title: 'الدراسات والعلوم الدينية',
      icon: Library,
      examples: [
        'الفقه واللاهوت ومقارنة الأديان',
        'البحث في التاريخ والعلوم الدينية'
      ]
    },
    {
      id: 'rel-services',
      title: 'الخدمات والإرشاد الروحي',
      icon: Moon,
      examples: [
        'التعليم الديني والإرشاد والوعظ',
        'الفعاليات الدينية والمجتمعية'
      ]
    },
    {
      id: 'rel-economy',
      title: 'الاقتصاد والسياحة الدينية',
      icon: Map,
      examples: [
        'السياحة الدينية ونشر الكتب والفعاليات',
        'إدارة المواسم التراحمية والدينية'
      ]
    }
  ],
  'urban-development-smart-cities-policy-dashboard': [
    {
      id: 'urb-planning',
      title: 'التخطيط الحضري وتصميم المدن',
      icon: Building2,
      examples: [
        'تصميم المدن وتقسيم المناطق الإدارية',
        'إدارة الأراضي والتطوير العمراني'
      ]
    },
    {
      id: 'urb-smart-policy',
      title: 'سياسات المدن الذكية والرقمنة',
      icon: Network,
      examples: [
        'إدارة المرور والبنية التحتية الرقمية',
        'تطبيق الخدمات الحكومية الذكية'
      ]
    },
    {
      id: 'urb-infrastructure',
      title: 'البنية التحتية والشبكات',
      icon: Zap,
      examples: [
        'طرق وجسور وشبكات الكهرباء والمياه',
        'تطوير المرافق العامة والخدمية'
      ]
    },
    {
      id: 'urb-sustainability',
      title: 'الاستدامة الحضرية والمدن الخضراء',
      icon: Globe,
      examples: [
        'مدن خضراء وتقليل الانبعاثات الكربونية',
        'إدارة النفايات والطاقة المستدامة'
      ]
    }
  ],
  'population-analytics-demographic-intelligence-dashboard': [
    {
      id: 'pop-intelligence',
      title: 'تحليل ودراسة البيانات السكانية',
      icon: BarChart3,
      examples: [
        'تحليل الإحصاءات والكثافة السكانية',
        'دراسة توزيع السكان الجغرافي'
      ]
    },
    {
      id: 'pop-ai-modeling',
      title: 'الذكاء الديموغرافي وAI Modeling',
      icon: UserCheck,
      examples: [
        'نمذجة النمو السكاني بالذكاء الاصطناعي',
        'توقعات الهجرة والنمو المستقبلي'
      ]
    },
    {
      id: 'pop-indicators',
      title: 'مؤشرات الولادة والوفاة والعمر',
      icon: Activity,
      examples: [
        'تتبع معدلات الولادة والوفاة والشيخوخة',
        'تحليل متوسط العمر والإنتاجية'
      ]
    },
    {
      id: 'pop-policy-analytics',
      title: 'تحليل السياسات وتوزيع الخدمات',
      icon: ClipboardList,
      examples: [
        'تحليل تأثير السياسات السكانية',
        'تخطيط الموارد وتوزيع الخدمات العامة'
      ]
    }
  ]
};

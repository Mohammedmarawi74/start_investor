import { BusinessOpportunity } from '../../components/SectorDashboardTemplate/types';
import { 
  Briefcase, 
  Users, 
  Search, 
  Gavel, 
  Wrench, 
  Hammer, 
  Settings, 
  HardHat, 
  Cpu, 
  Zap, 
  BarChart3, 
  GraduationCap, 
  Headphones, 
  Database, 
  Wallet, 
  Network,
  ClipboardCheck,
  Building2,
  FileText
} from 'lucide-react';

export const servicesOpportunities: Record<string, BusinessOpportunity[]> = {
  'business-services-dashboard': [
    {
      id: 'ser-admin',
      title: 'خدمات الأعمال والدعم الإداري',
      icon: FileText,
      examples: [
        'إدارة الشركات وخدمات السكرتارية التنفيذية',
        'دعم العمليات الإدارية والمكتبية المتكاملة'
      ]
    },
    {
      id: 'ser-consult',
      title: 'الاستشارات التجارية ودراسات الجدوى',
      icon: BarChart3,
      examples: [
        'تطوير الأعمال وتحليل الأسواق الاستثماري',
        'دراسات النمو والتوسع الاستراتيجي'
      ]
    },
    {
      id: 'ser-outsource',
      title: 'خدمات الموارد البشرية والتدقيق',
      icon: Users,
      examples: [
        'المحاسبة الخارجية والتدقيق المالي المستقل',
        'إدارة الموارد البشرية والتوظيف الاحترافي'
      ]
    },
    {
      id: 'ser-legal',
      title: 'الدعم القانوني والمؤسسي الفني',
      icon: Gavel,
      examples: [
        'الخدمات القانونية المساندة للشركات',
        'إدارة عقود العمل والامتثال المؤسسي'
      ]
    }
  ],
  'skilled-labor-dashboard': [
    {
      id: 'lab-technical',
      title: 'العمالة الفنية الماهرة والمتخصصة',
      icon: Wrench,
      examples: [
        'خدمات رخص الكهرباء والسباكة واللحام',
        'الصيانة الميكانيكية والهيكلية المتقدمة'
      ]
    },
    {
      id: 'lab-industrial',
      title: 'الحرف الصناعية والتشغيل الفني',
      icon: Hammer,
      examples: [
        'أعمال النجارة والحدادة الصناعية المعقدة',
        'تشغيل الآلات وخطوط الإنتاج في المصانع'
      ]
    },
    {
      id: 'lab-construction',
      title: 'خدمات البناء والتشطيب الاحترافي',
      icon: HardHat,
      examples: [
        'أعمال التشييد والتركيبات الفنية للأنظمة',
        'تشطيب المباني وحلول البناء الذكي'
      ]
    },
    {
      id: 'lab-maintenance',
      title: 'إصلاح وصيانة المعدات الصناعية',
      icon: Settings,
      examples: [
        'صيانة خطوط الإنتاج الآلية والحرفية',
        'إصلاح المعدات الثقيلة والحرف الصناعية'
      ]
    }
  ],
  'digital-transformation-consulting-dashboard': [
    {
      id: 'dig-consult',
      title: 'استشارات التحول الرقمي الشامل',
      icon: Cpu,
      examples: [
        'رقمنة العمليات التقليدية وتحويل الشركات',
        'تصميم استراتيجيات التحول الرقمي للنمو'
      ]
    },
    {
      id: 'dig-automation',
      title: 'أتمتة الأعمال والعمليات RPA',
      icon: Zap,
      examples: [
        'تقليل العمل اليدوي بأدوات الأتمتة الذكية',
        'تحسين الإنتاجية الرقمية وسرعة العمليات'
      ]
    },
    {
      id: 'dig-it-infra',
      title: 'استشارات التقنية وأنظمة ERP',
      icon: Network,
      examples: [
        'اختيار وبناء أنظمة إدارة الموارد المؤسسية',
        'تحسين البنية التحتية الرقمية والأمنية'
      ]
    },
    {
      id: 'dig-training',
      title: 'إدارة التغيير الرقمي والتدريب',
      icon: GraduationCap,
      examples: [
        'تدريب الكوادر على التقنيات الحديثة',
        'تحسين ثقافة العمل الرقمي والابتكار'
      ]
    }
  ],
  'bpo-dashboard': [
    {
      id: 'bpo-call',
      title: 'مراكز الاتصال ودعم العملاء',
      icon: Headphones,
      examples: [
        'خدمات مبيعات هاتفية ودعم فني دولي',
        'إدارة علاقات العملاء CRM الخارجية'
      ]
    },
    {
      id: 'bpo-admin',
      title: 'التعهيد الإداري وإدخال البيانات',
      icon: Database,
      examples: [
        'معالجة الطلبات وإدارة المستندات الرقمية',
        'إدخال البيانات الضخمة والأرشفة السحابية'
      ]
    },
    {
      id: 'bpo-finance',
      title: 'التعهيد المالي والمحاسبي BPO',
      icon: Wallet,
      examples: [
        'إدارة الرواتب والتقارير المالية للغير',
        'المحاسبة السحابية لشركات الـ SME'
      ]
    },
    {
      id: 'bpo-tech',
      title: 'تعهيد الخدمات التقنية والشبكات',
      icon: ClipboardCheck,
      examples: [
        'دعم تكنولوجيا المعلومات IT الخارجي',
        'صيانة الأنظمة وإدارة أمن الشبكات'
      ]
    }
  ]
};

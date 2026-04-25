import {
  Target,
  Layout,
  BarChart3,
  Zap,
  Cpu,
  TrendingUp,
  Route,
  ShieldCheck,
  Activity,
  FileText,
  Download,
  Users,
  Briefcase,
  Rocket,
  DollarSign,
  Search,
  Globe,
  Lock,
  Eye,
  AlertOctagon
} from 'lucide-react';
import { SprintDay } from './types';

export const STORAGE_KEY = 'khotta_revolutionary_hackathon_v4';
export const TOTAL_DURATION = 72 * 60 * 60 * 1000;

export const sprintDays: SprintDay[] = [
  {
    day: 1,
    title: 'اليوم 01: الاستخبارات والجوهر الاستراتيجي',
    codename: 'Intelligence & Core Discovery',
    accent: '#3b82f6',
    tasks: [
      {
        id: 'target',
        title: 'تحديد الهدف الاستراتيجي',
        detail: 'اختر الفرصة الأكثر إيلاماً للسوق والأعلى عائداً استثمارياً.',
        placeholder: 'اسم المشروع المقترح وسبب اختيار هذه الفرصة من ملفات الاستخبارات...',
        icon: Target,
        type: 'text'
      },
      {
        id: 'audience',
        title: 'تشريح الشريحة المستهدفة (Profiling)',
        detail: 'من هو "المستخدم الأكثر تضرراً"؟ وما هي عاداته الرقمية والشرائية؟',
        placeholder: 'العمر، المهنة، المشكلة اليومية، أين يتواجد رقمياً، كيف يحل المشكلة حالياً...',
        icon: Users,
        type: 'list'
      },
      {
        id: 'gap',
        title: 'تحليل الفجوة والزمان (Market Timing)',
        detail: 'لماذا الآن؟ ولماذا فشل الآخرون سابقاً في حل هذه المشكلة؟',
        placeholder: 'تغير التشريعات، نضج التقنية، فجوة المنافسين، لحظة الدخول القاتلة...',
        icon: BarChart3,
        type: 'text'
      },
      {
        id: 'swot',
        title: 'تحليل القوة والضعف القاطع (SWOT)',
        detail: 'حدد نقاط القوة، الضعف، الفرص، والتهديدات بصدق قاطع.',
        placeholder: 'قوة: ... ضعف: ... فرصة: ... تهديد: ...',
        icon: Layout,
        type: 'swot'
      },
      {
        id: 'advantage',
        title: 'الميزة غير العادلة (Unfair Advantage)',
        detail: 'ما الذي تمتلكه ولا يمكن للمنافسين شراءه أو تقليده بسهولة؟',
        placeholder: 'بيانات حصرية، خوارزمية نادرة، شراكات سيادية، سرعة تنفيذ أسطورية...',
        icon: Zap,
        type: 'text'
      }
    ],
  },
  {
    day: 2,
    title: 'اليوم 02: المعمارية والنموذج المالي السيادي',
    codename: 'Architecture & Capital Design',
    accent: '#84cc16',
    tasks: [
      {
        id: 'arsenal',
        title: 'هندسة الترسانة التقنية',
        detail: 'حدد التقنيات السيادية التي ستبني عليها مشروعك وقيمة كل منها.',
        placeholder: 'الذكاء الاصطناعي: ... البنية التحتية: ... الأمان والخصوصية: ...',
        icon: Cpu,
        type: 'list'
      },
      {
        id: 'revenue',
        title: 'درع الإيرادات (Revenue Streams)',
        detail: 'كيف سيتحول الكود إلى تدفق نقدي مستدام؟ حدد نماذج التسعير.',
        placeholder: 'المصدر 1: ... المصدر 2: ... المصدر 3: ... أول دولار سيأتي من...',
        icon: TrendingUp,
        type: 'financial'
      },
      {
        id: 'costs',
        title: 'هيكل التكاليف ومعدل الحرق (Burn Rate)',
        detail: 'كم ستحتاج من المال للبقاء على قيد الحياة والنمو في أول 6 أشهر؟',
        placeholder: 'سيرفرات وتقنية: ... فريق النخبة: ... تسويق هجومي: ... احتياطي طوارئ: ...',
        icon: DollarSign,
        type: 'financial'
      },
      {
        id: 'roadmap',
        title: 'خارطة طريق الاكتساح (3 Phases)',
        detail: 'من النموذج الأولي إلى الهيمنة الإقليمية في 12 شهراً.',
        placeholder: '0-3 أشهر (التأسيس): ... 3-6 أشهر (النمو): ... 6-12 شهر (التوسع): ...',
        icon: Route,
        type: 'text'
      },
      {
        id: 'team',
        title: 'تشكيل خلية النخبة (The Dream Team)',
        detail: 'ما هي الكوادر الثلاثة الأولى التي يجب توظيفها فوراً لضمان التنفيذ؟',
        placeholder: '1. مهندس بيانات... 2. خبير نمو (Growth Hacker)... 3. مدير عمليات الميدان...',
        icon: Briefcase,
        type: 'list'
      }
    ],
  },
  {
    day: 3,
    title: 'اليوم 03: الهجوم النهائي والتحول للواقع',
    codename: 'Final Assault & Execution',
    accent: '#ef4444',
    tasks: [
      {
        id: 'marketing',
        title: 'خطة الحرب التسويقية (Growth Hacking)',
        detail: 'كيف ستحصل على أول 1000 مستخدم حقيقي بأقل تكلفة وفي أسرع وقت؟',
        placeholder: 'استراتيجية الفيروسيّة... القنوات الهجومية... العرض الذي لا يُرفض...',
        icon: Rocket,
        type: 'list'
      },
      {
        id: 'risk',
        title: 'بروتوكول تحييد المخاطر القصوى',
        detail: 'حدد "الرصاصة" التي قد تقتل المشروع وكيف ستتجنبها أو تمتصها.',
        placeholder: 'الخطر الأكبر: ... الإشارات التحذيرية المبكرة: ... خطة الطوارئ (Plan B): ...',
        icon: ShieldCheck,
        type: 'text'
      },
      {
        id: 'plan100',
        title: 'خطة الـ 100 يوم الأولى (Execution Blueprint)',
        detail: 'ماذا ستفعل في الساعة الأولى بعد انتهاء الهاكاثون؟ صغ أولوياتك.',
        placeholder: 'الأسبوع 1: ... الأسبوع 2-4: ... الأسبوع 4-12: ...',
        icon: Activity,
        type: 'list'
      },
      {
        id: 'brief',
        title: 'الملخص الاستخباري النهائي (The Executive Pitch)',
        detail: 'صغ الرسالة التي ستجعل المستثمر يوقع الشيك فوراً دون تردد.',
        placeholder: 'المشكلة الحتمية... الحل الثوري... العائد الجنوني... الفريق القادر...',
        icon: FileText,
        type: 'text'
      },
      {
        id: 'dossier',
        title: 'تفعيل ملف الاستثمار السيادي',
        detail: 'حوّل الـ 72 ساعة من الجهد الذهني القاسي إلى مستند رسمي للتنفيذ.',
        placeholder: 'اضغط لتوليد ملف PDF شامل للمشروع جاهز للعرض.',
        icon: Download,
        type: 'text'
      }
    ],
  },
];

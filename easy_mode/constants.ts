
import { Question } from './types';

export const THEME = {
  bg: '#FFFFFF',
  bgCard: '#FFFFFF',
  bgSecondary: '#F8FAFC',
  bgGlass: 'rgba(241, 245, 249, 0.5)',
  border: 'rgba(0, 0, 0, 0.06)',
  borderActive: 'rgba(16, 185, 129, 0.3)', // Emerald-like
  accent: '#10B981', // Emerald 500
  accentDim: 'rgba(16, 185, 129, 0.08)',
  accentGlow: '0 10px 25px rgba(16, 185, 129, 0.1)',
  gold: '#F59E0B',
  goldDim: 'rgba(245, 158, 11, 0.08)',
  red: '#EF4444',
  redDim: 'rgba(239, 68, 68, 0.08)',
  amber: '#F59E0B',
  amberDim: 'rgba(245, 158, 11, 0.08)',
  blue: '#3B82F6',
  blueDim: 'rgba(59, 130, 246, 0.08)',
  text: '#0F172A', // Slate 900
  textMuted: '#64748B', // Slate 500
  textDim: '#94A3B8', // Slate 400
  fontDisplay: "'IBM Plex Sans Arabic', 'Tajawal', sans-serif",
  fontBody: "'IBM Plex Sans Arabic', 'Tajawal', sans-serif",
};

export const QUESTIONS: Question[] = [
  {
    id: "sector",
    step: 1,
    icon: "Layout",
    label: "ما الذي ستبنيه بالضبط؟",
    sublabel: "لا تقل \"تطبيق\" أو \"موقع\" — أخبرنا بما سيحدث فعلاً",
    type: "cards",
    options: [
      { val: "ecommerce", icon: "ShoppingBag", title: "متجر إلكتروني", desc: "بيع منتجات مادية أو رقمية عبر الإنترنت" },
      { val: "saas", icon: "Settings", title: "برمجيات SaaS", desc: "خدمة باشتراك شهري تحل مشكلة محددة" },
      { val: "marketplace", icon: "Link", title: "منصة وسيطة", desc: "ربط البائعين بالمشترين أو مقدمي الخدمة بعملائهم" },
      { val: "service", icon: "Users", title: "خدمة مهنية", desc: "استشارات، تصميم، تسويق، تطوير — بمهاراتك الشخصية" },
      { val: "content", icon: "Smartphone", title: "محتوى ومجتمع", desc: "كورسات، نيوزليتر، بودكاست، يوتيوب، عضوية" },
      { val: "food", icon: "Utensils", title: "طعام ومطبخ", desc: "مطعم، كافيه، كاتيرينج، منتجات غذائية" },
      { val: "health", icon: "Hospital", title: "صحة ورعاية", desc: "عيادة، تطبيق صحي، منتج طبي، لياقة بدنية" },
      { val: "local", icon: "MapPin", title: "خدمة محلية", desc: "أعمال تخدم منطقة جغرافية محددة مباشرةً" },
    ],
  },
  {
    id: "problem",
    step: 2,
    icon: "Target",
    label: "ما المشكلة التي تحلها بالضبط؟",
    sublabel: "أفضل الأعمال تولد من ألم حقيقي — صف المشكلة بعيون العميل",
    type: "textarea_choice",
    placeholder: "مثال: الناس يضيعون وقتاً كبيراً في البحث عن سباك موثوق...",
    options: [
      { val: "pain_solved", label: "🎯 حللت هذه المشكلة بنفسي وأريد منتجة" },
      { val: "market_gap", label: "🔍 رأيت فجوة في السوق لم يملأها أحد بعد" },
      { val: "passion", label: "❤️ شغف شخصي + طلب واضح من الناس حولي" },
      { val: "copy_improve", label: "🔄 نموذج موجود لكنني أستطيع تنفيذه أفضل" },
    ],
  },
  {
    id: "customer",
    step: 3,
    icon: "UsersCore",
    label: "صف عميلك المثالي في 3 كلمات",
    sublabel: "كلما كنت أكثر دقة، كانت توصياتنا أقوى وأدق",
    type: "profile_builder",
    profiles: [
      {
        id: "age",
        label: "الفئة العمرية للعميل",
        options: ["18-24 (جيل Z)", "25-34 (ميلينيالز)", "35-49 (جيل X)", "50+ (بيبي بومرز)", "شركات B2B"],
      },
      {
        id: "income",
        label: "قدرتهم الشرائية",
        options: ["اقتصادي (يبحث عن الأرخص)", "متوسط (يوازن السعر والجودة)", "مميز (يدفع أكثر للجودة)", "مؤسسي (ميزانيات كبيرة)"],
      },
      {
        id: "pain_level",
        label: "مدى إلحاح مشكلتهم",
        options: ["🔥 عاجلة جداً (يدفعون الآن)", "⚡ مهمة (يدفعون لو وجدوا الحل)", "💡 محتاجون لإقناع", "🌱 مشكلة مستقبلية"],
      },
    ],
  },
  {
    id: "competition",
    step: 4,
    icon: "ShieldAlert",
    label: "من منافسوك؟ وما ميزتك الفريدة؟",
    sublabel: "الإجابة الصادقة هنا تغير كل شيء في خطتك",
    type: "competition_map",
    options: [
      { val: "no_direct", icon: "Star", title: "لا منافس مباشر", desc: "أنا أول من يحل هذه المشكلة بهذه الطريقة" },
      { val: "few_big", icon: "Mountain", title: "عمالقة موجودون", desc: "منافسون كبار لكن لديهم ثغرات واضحة" },
      { val: "many_small", icon: "Waves", title: "سوق مجزأ", desc: "منافسون كثيرون صغار ولا قائد واضح" },
      { val: "traditional", icon: "Home", title: "بدائل تقليدية فقط", desc: "الناس يحلون المشكلة بطرق قديمة غير كفوءة" },
    ],
    followup: {
      label: "ما ميزتك التنافسية الفريدة؟",
      options: ["⚡ سرعة التنفيذ", "💰 سعر أقل", "🎨 تجربة أفضل", "🌍 وصول لسوق مهمل", "🤖 تقنية متقدمة", "🤝 علاقة أعمق مع العميل"],
    },
  },
  {
    id: "resources",
    step: 5,
    icon: "Briefcase",
    label: "ما الذي تمتلكه الآن فعلاً؟",
    sublabel: "كن صريحاً — هذا يحدد من أين نبدأ خطتك",
    type: "resources_check",
    items: [
      { id: "budget_range", label: "💰 الميزانية الجاهزة للإنفاق", options: ["$0 – بدون رأس مال", "$500 – $2,000", "$2,000 – $10,000", "$10,000 – $50,000", "+$50,000"] },
      { id: "time", label: "⏰ الوقت المتاح أسبوعياً", options: ["أقل من 5 ساعات", "5-15 ساعة (جانبي)", "15-30 ساعة (شبه كامل)", "40+ ساعة (كامل الوقت)"] },
      { id: "team", label: "👥 الفريق الحالي", options: ["وحدي تماماً", "شريك واحد", "2-4 أشخاص", "فريق 5+"] },
      { id: "skills", label: "🛠️ خبرتك التقنية/المهنية", options: ["لا خبرة تقنية", "خبرة أساسية", "خبير في مجاله", "مطور / تقني متقدم"] },
    ],
  },
  {
    id: "validation",
    step: 6,
    icon: "CheckCircle",
    label: "هل اختبرت فكرتك مع أحد حتى الآن؟",
    sublabel: "التحقق من السوق قبل البناء يوفر 80% من الوقت والمال",
    type: "validation_scale",
    options: [
      { val: "zero", icon: "MessageSquare", title: "فكرة في رأسي فقط", desc: "لم أتحدث مع أي عميل محتمل بعد", score: 1 },
      { val: "talked", icon: "MessageCircle", title: "تحدثت مع أناس", desc: "ناقشت الفكرة مع أصدقاء أو مهتمين لكن غير رسمي", score: 2 },
      { val: "surveyed", icon: "ClipboardList", title: "أجريت استطلاعات", desc: "جمعت بيانات رسمية من عملاء محتملين", score: 3 },
      { val: "waitlist", icon: "Mail", title: "قائمة انتظار", desc: "ناس سجلوا اهتمامهم الفعلي", score: 4 },
      { val: "paid", icon: "CreditCard", title: "عملاء دفعوا مسبقاً", desc: "حصلت على مدفوعات مسبقة أو عقود فعلية", score: 5 },
    ],
  },
  {
    id: "goal_horizon",
    step: 7,
    icon: "TrendingUp",
    label: "ما الذي يعني النجاح بالنسبة لك؟",
    sublabel: "لا إجابة خاطئة — الوضوح في الهدف يحدد كل القرارات",
    type: "goal_matrix",
    goals: [
      { id: "revenue_target", label: "🎯 الإيراد الشهري المستهدف خلال سنة", options: ["$500-$2,000 (دخل جانبي)", "$2,000-$10,000 (راتب كامل)", "$10,000-$50,000 (عمل ناجح)", "+$50,000 (نمو مؤسسي)"] },
      { id: "exit_strategy", label: "🚀 أفقك الزمني", options: ["6 أشهر — نتائج سريعة أو أتوقف", "1-2 سنة — بناء مستدام", "3-5 سنوات — شركة حقيقية", "10+ سنوات — إرث وتأثير"] },
      { id: "growth_type", label: "📈 نوع النمو المطلوب", options: ["Bootstrapped — من إيراداتي فقط", "Angel/Friends — تمويل خفيف", "VC Ready — نمو متسارع بتمويل", "Grant/NGO — منح ودعم حكومي"] },
    ],
  },
  {
    id: "biggest_fear",
    step: 8,
    icon: "Zap",
    label: "ما أكبر مخاوفك الآن؟",
    sublabel: "المشاريع تفشل لأسباب متوقعة — نحن سنعالجها مسبقاً",
    type: "fear_select",
    multi: true,
    options: [
      { val: "money", icon: "DollarSign", label: "نفاد المال قبل الربح" },
      { val: "competition", icon: "Sword", label: "المنافسون يسبقونني" },
      { val: "skills", icon: "Puzzle", label: "أحتاج مهارات لا أمتلكها" },
      { val: "customers", icon: "Target", label: "لا أعرف كيف أجد عملاء" },
      { val: "product", icon: "Tool", label: "المنتج لن يكون بالمستوى" },
      { val: "time", icon: "Clock", label: "الوقت لا يكفي مع التزاماتي" },
      { val: "idea", icon: "Lightbulb", label: "الفكرة نفسها قد تكون خاطئة" },
      { val: "legal", icon: "Gavel", label: "التراخيص والجانب القانوني" },
    ],
  },
];

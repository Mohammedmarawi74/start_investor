import React from 'react';
import SectorDashboardTemplate, { SectorDashboardProps } from '../SectorDashboardTemplate';
import { Sprout, Globe, TrendingUp, ShieldCheck, Landmark, Pill } from 'lucide-react';

const config: SectorDashboardProps = {
  title: 'صناعة القنب القانونية',
  titleEn: 'Legal Cannabis Industry',
  subtitle: 'تحليل سوق القنب الطبي والترفيهي، التغيرات التنظيمية العالمية، والشركات الرائدة في المجال',
  icon: Sprout,
  accent: 'blue',
  pdfLabel: 'تقرير سوق القنب (PDF)',

  kpis: [
    { label: 'سوق القنب القانوني العالمي', value: '43.7B', unit: 'مليار دولار أمريكي', icon: Globe },
    { label: 'نمو قطاع القنب الطبي', value: '15%', unit: 'نمو سنوي متوقع', icon: Pill },
    { label: 'حجم السوق الأمريكي المتوقع', value: '100B', unit: 'مليار دولار بحلول 2030', icon: TrendingUp },
  ],

  topMarkets: [
    { 
      label: 'أكبر سوق قانوني في العالم', 
      country: 'الولايات المتحدة', 
      note: 'تتصدر العالم في المبيعات القانونية رغم التحديات الفيدرالية، مع نضج الأسواق في ولايات مثل كاليفورنيا.',
      icon: TrendingUp
    },
    { 
      label: 'رائد التقنين الفيدرالي', 
      country: 'كندا', 
      note: 'أول دولة كبرى تشرع القنب ترفيهياً على المستوى الوطني، مما جعلها مركزاً لكبرى شركات الإنتاج العالمية.',
      icon: Globe
    },
    { 
      label: 'أكبر سوق طبي في أوروبا', 
      country: 'ألمانيا', 
      note: 'تقود التحول الأوروبي نحو القنب الطبي وتمتلك أكثر القوانين تطوراً في القارة لتنظيم الاستخدام العلاجي.',
      icon: ShieldCheck
    }
  ],

  navItems: ['نظرة عامة', 'رؤى الصناعة', 'القنب الطبي', 'التشريعات والقادة', 'التعريف'],

  sections: [
    {
      id: 'overview',
      title: 'بزوغ صناعة بمليارات الدولارات',
      subtitle: 'Rise of a Multi-Billion Dollar Industry',
      content: (
        <div className="space-y-6 text-right">
          <p>
            تحول القنب من مادة محظورة إلى صناعة عالمية منظمة بمليارات الدولارات. يعود الفضل في ذلك إلى موجة التقنين الواسعة التي بدأت في كندا والعديد من الولايات الأمريكية، مما سمح بإنشاء شركات مدرجة في البورصات العالمية.
          </p>
          <p>
             تنقسم الصناعة إلى <strong>القنب الترفيهي (Recreational)</strong> و <strong>القنب الطبي (Medicinal)</strong>، بالإضافة إلى مشتقات مثل الـ CBD التي دخلت في قطاعات الجمال والمشروبات.
          </p>
        </div>
      ),
    },
    {
      id: 'legal-landscape',
      title: 'المشهد القانوني والاستثماري',
      subtitle: 'Legal & Investment Landscape',
      content: (
        <div className="space-y-6 text-right">
          <p>
            تظل التشريعات هي المحرك الأول لهذه الصناعة. في الولايات المتحدة، يطالب المستثمرون بتعديل القوانين الفيدرالية (مثل قانون SAFE Banking) لتسهيل تمويل الشركات، بينما تفتح ألمانيا الباب أمام اقتصاد قنب ضخم في قلب أوروبا.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <Landmark className="text-blue-600 mb-2" size={20} />
                <p className="font-black text-slate-900">السياسات الحكومية</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">تعديل التصنيف القانوني (Rescheduling) هو الحافز الأكبر لتدفق رؤوس الأموال المؤسسية.</p>
            </div>
            <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <Pill className="text-blue-600 mb-2" size={20} />
                <p className="font-black text-slate-900">التطبيقات الطبية</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">الأبحاث في الألم المزمن واضطرابات النوم تفتح أسواقاً جديدة للأدوية القائمة على القنب.</p>
            </div>
          </div>
        </div>
      ),
    },
  ],

  leaders: [
    { name: 'Curaleaf Holdings', country: 'الولايات المتحدة', note: 'واحدة من أكبر شركات القنب في العالم من حيث الإيرادات' },
    { name: 'Canopy Growth', country: 'كندا', note: 'رائد الصناعة الكندي المدعوم باستثمارات ضخمة من Constellation Brands' },
    { name: 'Tilray Brands', country: 'كندا / الولايات المتحدة', note: 'شركة عالمية متنوعة في قطاع القنب والمشروبات الاستهلاكية' },
    { name: 'Green Thumb Industries', country: 'الولايات المتحدة', note: 'مشغل متعدد الولايات ذو أداء مالي قوي وتوسع مستمر' },
  ],

  definition: 'صناعة القنب القانونية تشمل زراعة ومعالجة وتجزيئة نبات القنب لأغراض طبية أو ترفيهية خاضعة للرقابة الحكومية.',

  industryInsights: [
    'الولايات المتحدة تظل أضخم سوق في العالم رغم غياب التقنين على المستوى الفيدرالي الشامل',
    'قطاع المشروبات والمأكولات المليئة بمستخلصات القنب يمثل أسرع مجالات الابتكار نمواً',
    'ألمانيا تمهد الطريق لبقية دول الاتحاد الأوروبي لتطوير نماذج تقنين اقتصادية وأمنية',
    'الاندماج والاستحواذ (M&A) هو الاستراتيجية الأبرز للشركات الكبرى للسيطرة على حصص السوق',
  ],

  tags: ['Cannabis', 'Medical Marijuana', 'CBD', 'Legalization', 'FMCG', 'Regulation'],
};

const CannabisDashboard: React.FC<any> = (props) => <SectorDashboardTemplate {...config} {...props} />;

export default CannabisDashboard;


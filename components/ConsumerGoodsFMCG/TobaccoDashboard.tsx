import React from 'react';
import SectorDashboardTemplate, { SectorDashboardProps } from '../SectorDashboardTemplate';
import { Cigarette, Globe, TrendingUp, ShieldAlert, Zap, Factory } from 'lucide-react';

const config: SectorDashboardProps = {
  title: 'صناعة التبغ والبدائل',
  titleEn: 'Tobacco Industry',
  subtitle: 'تحليل سوق السجائر التقليدية، منتجات التبغ المسخن، والتحول نحو بدائل النيكوتين منخفضة المخاطر',
  icon: Cigarette,
  accent: 'blue',
  pdfLabel: 'تقرير سوق التبغ (PDF)',

  kpis: [
    { label: 'سوق السجائر العالمي', value: '850B', unit: 'مليار دولار أمريكي', icon: Globe },
    { label: 'حصة التبغ المسخن', value: '35B', unit: 'مليار دولار وتتزايد', icon: Zap },
    { label: 'أكبر شركة في العالم', value: 'China Tobacco', unit: 'احتكار حكومي شامل', icon: Factory },
  ],

  topMarkets: [
    { 
      label: 'أكبر سوق استهلاكي وإنتاجي', 
      country: 'الصين', 
      note: 'تستحوذ شركة التبغ الصينية (China Tobacco) على احتكار كامل للسوق الأضخم عالمياً من حيث عدد المدخنين والإنتاج.',
      icon: Factory
    },
    { 
      label: 'رائد ابتكار البدائل', 
      country: 'الولايات المتحدة', 
      note: 'السوق القائد عالمياً في تطوير وتقنين منتجات الفيب (Vaping) والنيكوتين البديلة ذات التقنيات المتقدمة.',
      icon: Zap
    },
    { 
      label: 'أعلى معدلات الانتشار الإقليمي', 
      country: 'إندونيسيا', 
      note: 'تتميز بواحد من أعلى معدلات التدخين في العالم وسوق فريد لسجائر القرنفل (Kretek) التقليدية.',
      icon: Globe
    }
  ],

  navItems: ['نظرة عامة', 'التحول التقني', 'سوق البدائل', 'التشريعات والقادة', 'التعريف'],

  sections: [
    {
      id: 'overview',
      title: 'صناعة في مرحلة تحول تاريخي',
      subtitle: 'A Century-Old Industry in Transition',
      content: (
        <div className="space-y-6 text-right">
          <p>
            تعتبر صناعة التبغ واحدة من أكثر القطاعات استقراراً مالياً وربحية، لكنها تواجه تحولاً جذرياً نتيجة ضغوط الرعاية الصحية والتشريعات الصارمة. يتجه القطاع الآن بسرعة نحو "مستقبل خالٍ من الدخان" عبر الاستثمار في منتجات التبغ المسخن والسجائر الإلكترونية.
          </p>
          <p>
             على الرغم من انخفاض معدلات التدخين في الدول المتقدمة، إلا أن الأسواق الناشئة لا تزال تشهد طلباً قوياً، مما يدفع الشركات الكبرى لتنويع محافظ منتجاتها لتشمل بدائل أقل ضرراً.
          </p>
        </div>
      ),
    },
    {
      id: 'innovation',
      title: 'ثورة البدائل والنيكوتين الرقمي',
      subtitle: 'Alternatives & Digital Nicotine',
      content: (
        <div className="space-y-6 text-right">
          <p>
            أصبحت منتجات التبغ المسخن (Heat-not-Burn) والسجائر الإلكترونية (E-Cigarettes) هي المحرك الجديد للنمو. الشركات الرائدة مثل PMI وBAT تخصص مليارات الدولارات سنوياً للأبحاث والتطوير الصيدلاني والتقني لتقليل المخاطر الصحية المرتبطة بالاحتراق.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <ShieldAlert className="text-blue-600 mb-2" size={20} />
                <p className="font-black text-slate-900">الضغوط التنظيمية</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">زيادة الضرائب وحظر الإعلانات يدفع الشركات نحو قنوات التواصل المباشر مع المستهلكين والمتاجر المتخصصة.</p>
            </div>
            <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <TrendingUp className="text-blue-600 mb-2" size={20} />
                <p className="font-black text-slate-900">نمو قطاع الـ RRP</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">المنتجات ذات المخاطر المخفضة (Reduced-Risk Products) تمثل الآن نسبة متزايدة من إيرادات الشركات الكبرى.</p>
            </div>
          </div>
        </div>
      ),
    },
  ],

  leaders: [
    { name: 'China National Tobacco', country: 'الصين', note: 'المتصدر العالمي والقوة الاحتكارية الأكبر في الصناعة' },
    { name: 'Philip Morris International', country: 'الولايات المتحدة / سويسرا', note: 'الرائد في التحول نحو منتجات التبغ المسخن (IQOS)' },
    { name: 'British American Tobacco', country: 'المملكة المتحدة', note: 'حضور عالمي قوي في السجائر التقليدية وبدائل الفيب' },
    { name: 'Altria Group', country: 'الولايات المتحدة', note: 'المهيمن على السوق الأمريكي بعلامة Marlboro' },
    { name: 'Japan Tobacco', country: 'اليابان', note: 'لاعب محوري في الأسواق الآسيوية والأوروبية' },
  ],

  definition: 'تشمل صناعة التبغ كافة الأنشطة المتعلقة بزراعة وتصنيع وتوزيع السجائر ومنتجات التبغ الأخرى، بما في ذلك البدائل الحديثة والحلول التقنية للنيكوتين.',

  industryInsights: [
    'الصين تستهلك وتنتج حوالي ثلث سجائر العالم من خلال احتكار حكومي شامل',
    'التحول نحو الاستدامة وتقليل الانبعاثات الكربونية في المزارع والمصانع بات أولوية للشركات الكبرى',
    'تكنولوجيا التبغ المسخن حصلت على موافقات صحية مشروطة في عدة دول كبديل أقل ضرراً',
    'الانتشار الهائل للسجائر الإلكترونية ذات الاستخدام الواحد يمثل التحدي البيئي والتنظيمي الأكبر حالياً',
  ],

  tags: ['Tobacco', 'Cigarettes', 'Heat-not-Burn', 'Nicotine Alternatives', 'FMCG', 'Regulation'],
};

const TobaccoDashboard: React.FC<any> = (props) => <SectorDashboardTemplate {...config} {...props} />;

export default TobaccoDashboard;


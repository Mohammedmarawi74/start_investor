import React from 'react';
import SectorDashboardTemplate, { SectorDashboardProps } from '../SectorDashboardTemplate';
import { Wine, Globe, TrendingUp, ShoppingBag, GlassWater, Beer } from 'lucide-react';

const config: SectorDashboardProps = {
  title: 'المشروبات الكحولية',
  titleEn: 'Alcoholic Beverages',
  subtitle: 'تحليل سوق الجعة، النبيذ، والمشروبات الروحية الفاخرة، مع التركيز على التحول نحو المنتجات الفائقة (Premiumization)',
  icon: Wine,
  accent: 'blue',
  pdfLabel: 'تقرير المشروبات الكحولية (PDF)',

  kpis: [
    { label: 'سوق الجعة العالمي', value: '190.5M', unit: 'كيلولتر منتج سنوياً', icon: Beer },
    { label: 'العلامة التجارية الأثمن', value: 'Moutai', unit: 'الصين - المركز الأول', icon: ShoppingBag },
    { label: 'إجمالي إيرادات السوق', value: '1.6T', unit: 'تريليون دولار أمريكي', icon: Globe },
  ],

  topMarkets: [
    { 
      label: 'أكبر سوق للاستهلاك والإنتاج', 
      country: 'الصين', 
      note: 'تتصدر العالم في إنتاج واستهلاك الجعة والمشروبات الروحية التقليدية (Baijiu) بحجم هائل.',
      icon: Globe
    },
    { 
      label: 'أكبر سوق للمنتجات الفاخرة', 
      country: 'الولايات المتحدة', 
      note: 'تعد القوة الدافعة لنمو المشروبات الروحية الفاخرة وحركات الـ Craft Beer العالمية.',
      icon: TrendingUp
    },
    { 
      label: 'رائد الجودة والسمعة الدولية', 
      country: 'فرنسا', 
      note: 'تحافظ على ريادتها العالمية في قطاع النبيذ والمشروبات الروحية المرموقة من حيث القيمة والتصدير.',
      icon: GlassWater
    }
  ],

  navItems: ['نظرة عامة', 'رؤى الصناعة', 'سوق الجعة', 'النبيذ والروحيات', 'التوجهات والقادة', 'التعريف'],

  sections: [
    {
      id: 'overview',
      title: 'تحول نحو "الأقل ولكن الأفضل"',
      subtitle: 'The Shift to Premiumization',
      content: (
        <div className="space-y-6 text-right">
          <p>
            تشهد صناعة المشروبات الكحولية تحولاً جذرياً يتمثل في "النزعة نحو الفخامة" (Premiumization). يميل المستهلكون بشكل متزايد إلى شرب كميات أقل من الكحول، ولكن بجودة أعلى وسعر أغلى، مما يعزز هوامش ربح الشركات الكبرى.
          </p>
          <p>
             على الرغم من تزايد الوعي الصحي، يظل الطلب على الجعة مستقراً، بينما يشهد قطاع المشروبات الروحية (Spirits) نمواً قوياً خاصة في الأسواق الناشئة مثل الصين والهند.
          </p>
        </div>
      ),
    },
    {
      id: 'segments',
      title: 'الجعة والنبيذ والمشروبات الروحية',
      subtitle: 'Beer Leads in Volume, Spirits in Value',
      content: (
        <div className="space-y-6 text-right">
          <p>
            تظل <strong>الجعة (Beer)</strong> المشروب الأكثر استهلاكاً من حيث الحجم عالمياً، حيث يتجاوز الإنتاج السنوي 190 مليون كيلولتر. ومع ذلك، فإن قطاع <strong>المشروبات الروحية</strong> يحقق نمواً أسرع في القيمة النقدية.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <Beer className="text-blue-600 mb-2" size={20} />
                <p className="font-black text-slate-900">سوق الجعة</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">تهيمن شركة AB InBev على هذا القطاع بإنتاجية تصل إلى ثلث الجعة المستهلكة عالمياً.</p>
            </div>
            <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <GlassWater className="text-blue-600 mb-2" size={20} />
                <p className="font-black text-slate-900">المشروبات الروحية</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">تعتبر Kweichow Moutai الصينية هي الشركة الأغلى في هذا القطاع بقيمة سوقية مذهلة.</p>
            </div>
          </div>
        </div>
      ),
    },
  ],

  leaders: [
    { name: 'Anheuser-Busch InBev', country: 'بلجيكا', note: 'أكبر منتج للجعة في العالم وتمتلك علامات مثل Budweiser' },
    { name: 'Diageo plc', country: 'المملكة المتحدة', note: 'الرائد في قطاع المشروبات الروحية الفاخرة' },
    { name: 'Kweichow Moutai', country: 'الصين', note: 'أكبر قيمة سوقية لشركة مشروبات في العالم' },
    { name: 'Heineken N.V.', country: 'هولندا', note: 'ثاني أكبر منتج للجعة بحضور عالمي واسع' },
    { name: 'Pernod Ricard', country: 'فرنسا', note: 'متخصص في المشروبات الروحية والنبيذ عالي الجودة' },
  ],

  definition: 'تشمل صناعة المشروبات الكحولية الشركات العاملة في إنتاج وتسويق وتوزيع الجعة والنبيذ والمشروبات الروحية. يتأثر هذا القطاع بشدة بالتشريعات الضريبية والأنماط الثقافية المتغيرة للمستهلكين.',

  industryInsights: [
    'الصين هي أكبر منتج للجعة في العالم متجاوزة الولايات المتحدة والبرازيل بفارق كبير',
    'التحول نحو البدائل الخالية من الكحول (Non-alcoholic beer) يمثل أسرع القطاعات الناشئة نمواً',
    'الضرائب والجمارك هي العامل الأكثر تأثيراً على أسعار المنتجات في الأسواق الدولية',
    'تجارة الإلكترونية للمشروبات الفاخرة شهدت طفرة هائلة بعد الجائحة',
  ],

  tags: ['Beer', 'Wine', 'Spirits', 'Premiumization', 'FMCG', 'Consumer Habits'],
};

const AlcoholicBeveragesDashboard: React.FC<any> = (props) => <SectorDashboardTemplate {...config} {...props} />;

export default AlcoholicBeveragesDashboard;


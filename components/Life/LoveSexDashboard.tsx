import React from 'react';
import SectorDashboardTemplate, { SectorDashboardProps } from '../SectorDashboardTemplate';
import { Heart } from 'lucide-react';

const config: SectorDashboardProps = {
  title: 'الحب والعلاقات',
  titleEn: 'Love & Sex',
  subtitle: 'العلاقات العاطفية والإحصاءات الاجتماعية',
  icon: Heart,
  accent: 'slate',
  pdfLabel: 'تقرير الحب والعلاقات (PDF)',

  kpis: [
    { label: 'المؤشر الأول', value: '—', unit: 'قيد التحديث', icon: Heart },
  ],

  navItems: ['نظرة عامة', 'رؤى الصناعة', 'حجم السوق', 'قطاعات السوق', 'اتجاهات الصناعة', 'قادة الصناعة', 'تعريف الصناعة'],

  sections: [
    {
      id: 'overview',
      title: 'نظرة عامة',
      subtitle: 'Overview',
      content: <p>قيد التحديث — سيتم إضافة المحتوى التحليلي لهذا القطاع قريباً.</p>,
    },
  ],

  leaders: [],

  definition: 'سيتم إضافة تعريف هذا القطاع بعد اكتمال البحث والتحليل.',

  industryInsights: [
    'قيد التحديث — سيتم إضافة أبرز النقاط قريباً',
  ],

  tags: ['Love', '', 'Sex'],
};

const LoveSexDashboard: React.FC<any> = (props) => <SectorDashboardTemplate {...config} {...props} />;

export default LoveSexDashboard;

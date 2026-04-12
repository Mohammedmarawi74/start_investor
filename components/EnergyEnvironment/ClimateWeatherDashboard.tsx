import React from 'react';
import SectorDashboardTemplate, { SectorDashboardProps } from '../SectorDashboardTemplate';
import { CloudSun } from 'lucide-react';

const config: SectorDashboardProps = {
  title: 'المناخ والطقس',
  titleEn: 'Climate & Weather',
  subtitle: 'التغير المناخي وأنماط الطقس العالمية',
  icon: CloudSun,
  accent: 'slate',
  pdfLabel: 'تقرير المناخ والطقس (PDF)',

  kpis: [
    { label: 'المؤشر الأول', value: '—', unit: 'قيد التحديث', icon: CloudSun },
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

  tags: ['Climate', '', 'Weather'],
};

const ClimateWeatherDashboard: React.FC<any> = (props) => <SectorDashboardTemplate {...config} {...props} />;

export default ClimateWeatherDashboard;

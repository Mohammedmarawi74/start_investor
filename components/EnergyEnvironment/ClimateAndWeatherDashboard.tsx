import React from 'react';
import SectorDashboardTemplate, { SectorDashboardProps } from '../SectorDashboardTemplate';
import { Rocket } from 'lucide-react';

const config: SectorDashboardProps = {
  title: 'Climate and Weather',
  titleEn: 'Climate and Weather',
  subtitle: 'تحليل شامل لـ Climate and Weather...',
  icon: Rocket,
  accent: 'blue',
  kpis: [],
  sections: [
    {
      id: 'overview',
      title: 'نظرة عامة',
      content: 'محتوى تجريبي لـ Climate and Weather...'
    }
  ],
  leaders: [],
  definition: 'تعريف Climate and Weather...',
  industryInsights: [],
  tags: ['ClimateAndWeather']
};

const ClimateAndWeatherDashboard: React.FC<any> = (props) => <SectorDashboardTemplate {...config} {...props} />;
export default ClimateAndWeatherDashboard;

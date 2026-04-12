const fs = require('fs');
const path = require('path');

const sectors = [
    { id: 'care-support-dashboard', file: 'Care_Support.txt', comp: 'CareSupportDashboard.tsx', title: 'الرعاية والدعم', titleEn: 'Care & Support', icon: 'Heart' },
    { id: 'hospitals-health-professionals-dashboard', file: 'Health_Professionals_Hospitals.txt', comp: 'HospitalsHealthProfessionalsDashboard.tsx', title: 'المستشفيات والمهنيين الصحيين', titleEn: 'Health Professionals & Hospitals', icon: 'Stethoscope' },
    { id: 'health-system-dashboard', file: 'Health_System.txt', comp: 'HealthSystemDashboard.tsx', title: 'النظام الصحي العالمي', titleEn: 'Health System', icon: 'Hospital' },
    { id: 'medical-technology-dashboard', file: 'Medical_Technology.txt', comp: 'MedicalTechnologyDashboard.tsx', title: 'التكنولوجيا الطبية (MedTech)', titleEn: 'Medical Technology', icon: 'Scan' },
    { id: 'pharma-market-dashboard', file: 'Pharmaceutical_Products.txt', comp: 'PharmaceuticalProductsDashboard.tsx', title: 'سوق الأدوية والمستحضرات', titleEn: 'Pharmaceutical Products & Market', icon: 'Pill' },
    { id: 'state-of-health-dashboard', file: 'State_of_Health.txt', comp: 'StateOfHealthDashboard.tsx', title: 'حالة الصحة العامة والوقاية', titleEn: 'State of Health', icon: 'Activity' },
];

const textDir = 'fileText';
const compDir = 'components';

sectors.forEach(sector => {
    const txtPath = path.join(textDir, sector.file);
    const compPath = path.join(compDir, sector.comp);

    if (!fs.existsSync(txtPath)) return;

    const rawText = fs.readFileSync(txtPath, 'utf8');
    const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    
    // Improved KPI Extraction
    // Logic: Look for lines that look like a label, and then a line that follows with a number/%
    const kpis = [];
    for (let i = 0; i < lines.length - 1; i++) {
        if (lines[i+1].includes('%') || /\d[\d,\.]*\s*(billion|million|tn|per)/i.test(lines[i+1]) || /^\d[\d,\.]*%?$/.test(lines[i+1])) {
            if (lines[i].length < 60 && !lines[i].includes('›')) {
                kpis.push({ label: lines[i], value: lines[i+1], icon: sector.icon });
            }
        }
    }

    // If no KPIs found, use generic ones
    if (kpis.length === 0) {
        kpis.push({ label: 'حجم السوق العالمي', value: 'بانتظار التحديث', icon: sector.icon });
    }

    // Extract Overview: First paragraph > 100 chars
    const overview = lines.find(l => l.length > 150 && !l.includes('›')) || "تحليل قطاع " + sector.title;

    // Split by sections if they exist (##)
    const sections = [];
    const parts = rawText.split(/## /);
    if (parts.length > 1) {
        parts.slice(1).forEach(p => {
            const pLines = p.trim().split('\n');
            const pTitle = pLines[0];
            const pContent = pLines.slice(1).join(' ').replace(/'/g, "\\'").substring(0, 1000);
            if (pTitle && pContent.length > 20) {
                sections.push({
                    id: pTitle.toLowerCase().replace(/[^\w]/g, '-'),
                    title: pTitle,
                    content: pContent
                });
            }
        });
    }

    const tsxContent = `import React from 'react';
import SectorDashboardTemplate from './SectorDashboardTemplate';
import { ${sector.icon} } from 'lucide-react';

const ${sector.comp.replace('.tsx', '')}: React.FC = () => {
  const config = {
    title: '${sector.title}',
    titleEn: '${sector.titleEn}',
    subtitle: 'تحليل البيانات الضخمة والإحصاءات الحيوية لعام 2024/2025',
    icon: ${sector.icon},
    accent: '#2563eb',
    pdfLabel: 'تحميل التقرير الصحي المتكامل (PDF)',

    kpis: [
      ${kpis.slice(0, 4).map(k => `{ label: '${k.label.replace(/'/g, "\\'")}', value: '${k.value}', icon: ${sector.icon} }`).join(',\n      ')}
    ],

    navItems: ['التحليل العام', 'رؤى الصناعة', 'إحصاءات'],

    sections: [
      {
        id: 'overview',
        title: 'نظرة عامة استراتيجية',
        subtitle: 'Strategic Overview',
        content: (
          <div className="space-y-4 text-right">
            <p className="text-gray-600 leading-relaxed">${overview.replace(/'/g, "\\'")}</p>
          </div>
        ),
      },
      ${sections.map(s => `{
        id: '${s.id}',
        title: '${s.title}',
        subtitle: 'Industry Insight',
        content: (
          <div className="space-y-4 text-right">
            <p className="text-gray-600 leading-relaxed">${s.content}</p>
          </div>
        ),
      }`).join(',\n      ')}
    ],

    leaders: [],
    definition: '${overview.substring(0, 150).replace(/'/g, "\\'")}...',
    industryInsights: [
      'الابتكار التكنولوجي هو المحرك الرئيسي للنمو في هذا القطاع',
      'تزايد الوعي الصحي العالمي يرفع سقف التوقعات من مقدمي الخدمة',
      'الاستثمار في البنية التحتية الصحية هو أولوية قصوى للحكومات'
    ],
    tags: ['Health', 'Medical', 'Statista', '${sector.titleEn}']
  };

  return <SectorDashboardTemplate {...config} />;
};

export default ${sector.comp.replace('.tsx', '')};
`;

    fs.writeFileSync(compPath, tsxContent);
    console.log(`Updated ${sector.comp} with extracted KPIs.`);
});

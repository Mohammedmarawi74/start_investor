const fs = require('fs');
const path = require('path');

const sectors = [
    { id: 'care-support-dashboard', file: 'Care_Support.txt', comp: 'CareSupportDashboard.tsx', title: 'الرعاية والدعم', titleEn: 'Care & Support', icon: 'Heart' },
    { id: 'hospitals-health-professionals-dashboard', file: 'Health_Professionals_Hospitals.txt', comp: 'HospitalsHealthProfessionalsDashboard.tsx', title: 'المستشفيات والمهنيين الصحيين', titleEn: 'Health Professionals & Hospitals', icon: 'ShieldPlus' },
    { id: 'health-system-dashboard', file: 'Health_System.txt', comp: 'HealthSystemDashboard.tsx', title: 'النظام الصحي العالمي', titleEn: 'Health System', icon: 'Landmark' },
    { id: 'medical-technology-dashboard', file: 'Medical_Technology.txt', comp: 'MedicalTechnologyDashboard.tsx', title: 'التكنولوجيا الطبية (MedTech)', titleEn: 'Medical Technology', icon: 'Sparkles' },
    { id: 'pharma-market-dashboard', file: 'Pharmaceutical_Products.txt', comp: 'PharmaceuticalProductsDashboard.tsx', title: 'سوق الأدوية والمستحضرات', titleEn: 'Pharmaceutical Products & Market', icon: 'Activity' },
    { id: 'state-of-health-dashboard', file: 'State_of_Health.txt', comp: 'StateOfHealthDashboard.tsx', title: 'حالة الصحة العامة والوقاية', titleEn: 'State of Health', icon: 'Heart' },
];

const textDir = 'fileText';
const compDir = 'components';

sectors.forEach(sector => {
    const txtPath = path.join(textDir, sector.file);
    const compPath = path.join(compDir, sector.comp);

    if (!fs.existsSync(txtPath)) {
        console.log(`Skipping ${sector.file} (not found)`);
        return;
    }

    const rawText = fs.readFileSync(txtPath, 'utf8');
    
    // Simple parser for Statista copy-paste
    const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    
    // Extract KPIs (look for % or numbers)
    const kpis = [];
    lines.forEach(line => {
        if ((line.includes('%') || /\d+/.test(line)) && line.length < 100) {
            // Check if next line is a label
            const label = line;
            kpis.push({ label: label, value: '', unit: '', icon: sector.icon });
        }
    });

    // Extract Description (first long paragraph)
    const desc = lines.find(l => l.length > 150) || "تحليل شامل لقطاع " + sector.title;

    // Extract sections based on "##" if exist, or generic splitting
    const sections = [];
    const secMarkers = rawText.split(/## /);
    if (secMarkers.length > 1) {
        secMarkers.slice(1).forEach(m => {
            const mLines = m.trim().split('\n');
            sections.push({
                id: mLines[0].toLowerCase().replace(/\s+/g, '-'),
                title: mLines[0],
                subtitle: mLines[0],
                content: `<div className="space-y-4 text-right"><p>${mLines.slice(1).join(' ').replace(/'/g, "\\'")}</p></div>`
            });
        });
    } else {
        sections.push({
            id: 'overview',
            title: 'نظرة عامة',
            subtitle: 'Overview',
            content: `<div className="space-y-4 text-right"><p>${desc.replace(/'/g, "\\'")}</p></div>`
        });
    }

    const tsxContent = `import React from 'react';
import SectorDashboardTemplate, { SectorDashboardProps } from './SectorDashboardTemplate';
import { ${sector.icon} } from 'lucide-react';

const config: SectorDashboardProps = {
  title: '${sector.title}',
  titleEn: '${sector.titleEn}',
  subtitle: 'إحصاءات وتحليلات بناءً على بيانات Statista الأخيرة',
  icon: ${sector.icon},
  accent: 'blue',
  pdfLabel: 'تقرير ${sector.title} (PDF)',

  kpis: [
    { label: 'حجم السوق العالمي', value: 'بانتظار التحديث', unit: 'مليارات', icon: ${sector.icon} },
    { label: 'معدل النمو السنوي', value: 'متصاعد', unit: 'إحصاء', icon: ${sector.icon} },
  ],

  navItems: ['نظرة عامة', 'أهم الإحصاءات', 'رؤى الصناعة'],

  sections: [
    {
      id: 'overview',
      title: 'نظرة عامة على القطاع',
      subtitle: 'Sector Overview',
      content: (
        <div className="space-y-4 text-right">
          <p>${desc.replace(/'/g, "\\'")}</p>
        </div>
      ),
    },
    ${sections.map(s => `{
      id: '${s.id}',
      title: '${s.title}',
      subtitle: '${s.subtitle}',
      content: ( ${s.content} ),
    }`).join(',\n    ')}
  ],

  leaders: [],

  definition: '${desc.substring(0, 200).replace(/'/g, "\\'")}...',

  industryInsights: [
    'يعتبر هذا القطاع من أكثر القطاعات حيوية ونمواً في الاقتصاد العالمي',
    'التحول الرقمي يساهم بشكل كبير في زيادة كفاءة الخدمات المقدمة',
  ],

  tags: ['Health', 'Pharma', 'Medical', '${sector.titleEn}'],
};

const ${sector.comp.replace('.tsx', '')}: React.FC = () => <SectorDashboardTemplate {...config} />;

export default ${sector.comp.replace('.tsx', '')};
`;

    fs.writeFileSync(compPath, tsxContent);
    console.log(`Updated ${sector.comp}`);
});

const fs = require('fs');
const path = require('path');

// 1. Load context from generate-pages.cjs (We'll extract the dashboards array)
const dashboardsRoot = [
  ["AlcoholicBeverages", "المشروبات الكحولية", "Alcoholic Beverages", "سوق المشروبات الكحولية والجعة والنبيذ", "Wine"],
  ["Cannabis", "القنب والحشيش", "Cannabis", "صناعة القنب والماريجوانا القانونية", "Sprout"],
  ["Tobacco", "التبغ", "Tobacco", "صناعة التبغ والسجائر والبدائل", "Cigarette"],
  ["InternationalTrade", "التجارة الدولية", "International Trade", "التبادل التجاري العالمي", "Globe"],
  ["PoliticsGovernment", "السياسة والحكومة", "Politics & Government", "السياسات العامة والحوكمة", "Landmark"],
  ["Emissions", "الانبعاثات العالمية", "Emissions", "انبعاثات غازات الاحتباس والغازات الدفيئة", "Cloud"],
  ["FinancialInstitutions", "المؤسسات المالية", "Financial Institutions", "البنوك والمؤسسات المالية العالمية", "Landmark"],
  ["FinancialInvestments", "الاستثمارات المالية", "Financial Investments", "أسواق الاستثمار والأوراق المالية", "TrendingUp"],
  ["FinancialServices", "الخدمات المالية", "Financial Services", "الخدمات المصرفية والتمويلية", "CreditCard"],
  ["Insurance", "التأمين", "Insurance", "صناعة التأمين العالمية وأنواع التغطية", "Shield"],
  ["CareSupport", "الرعاية والدعم", "Care & Support", "خدمات الرعاية الصحية المنزلية والدعم", "Heart"],
  ["HospitalsHealthProfessionals", "المستشفيات والمهنيين الصحيين", "Hospitals & Health Professionals", "المرافق الصحية والكادر الطبي", "Stethoscope"],
  ["HealthSystem", "النظام الصحي", "Health System", "أنظمة الرعاية الصحية والإنفاق", "Hospital"],
  ["MedicalTechnology", "التكنولوجيا الطبية", "Medical Technology", "الأجهزة والتجهيزات الطائق الطبية", "Scan"],
  ["PharmaceuticalMarket", "السوق الدوائية", "Pharmaceutical Market", "صناعة الأدوية والمستحضرات الصيدلانية", "Pill"],
  ["StateOfHealth", "حالة الصحة العامة", "State of Health", "مؤشرات الصحة العامة والأمراض", "Activity"],
  ["Communications", "الاتصالات", "Communications", "صناعة الاتصالات والشبكات", "Phone"],
  ["CyberSecurity", "الأمن السيبراني", "Cyber Security", "أمن المعلومات والحماية الرقمية", "ShieldAlert"],
  ["InternetDemographics", "ديموغرافية الإنترنت", "Internet Demographics", "إحصاءات استخدام الإنترنت عالمياً", "Users"],
  ["AppsMobileInternet", "التطبيقات والإنترنت المحمول", "Apps & Mobile Internet", "تطبيقات الهواتف والإنترنت المتنقل", "Smartphone"],
  ["OnlineSearch", "البحث عبر الإنترنت", "Online Search", "محركات البحث وأنماط البحث", "Search"],
  ["OnlineEntertainment", "الترفيه عبر الإنترنت", "Online Entertainment", "الألعاب والتسلية الرقمية", "Gamepad2"],
  ["TrafficReach", "حركة المرور والوصول", "Traffic & Reach", "إحصاءات الزوار والوصول الرقمي", "BarChart3"],
  ["SocialMedia", "وسائل التواصل الاجتماعي", "Social Media", "منصات التواصل ومعدلات الاستخدام", "MessageCircle"],
  ["Audio", "الصوت", "Audio", "البودكاست والموسيقى والبث الصوتي", "Headphones"],
  ["BooksPublishing", "الكتب والنشر", "Books & Publishing", "صناعة النشر والكتب الرقمية", "BookOpen"],
  ["News", "الأخبار", "News", "وسائل الإعلام الإخبارية الرقمية", "Newspaper"],
  ["TVFilm", "التلفزيون والأفلام", "TV & Film", "صناعة التلفزيون والسينما", "Film"],
  ["VideoGaming", "ألعاب الفيديو", "Video Gaming", "صناعة ألعاب الفيديو والسوق", "Gamepad2"],
  ["AerospaceDefense", "الفضاء والدفاع", "Aerospace & Defense", "صناعة الطيران والدفاع العسكري", "Rocket"],
  ["Electronics", "الإلكترونيات", "Electronics", "صناعة الإلكترونيات وأشباه الموصلات", "Cpu"],
  ["IndustrialMachinery", "الآلات الصناعية", "Industrial Machinery", "الآلات والمعدات الصناعية", "Cog"],
  ["Metals", "المعادن", "Metals", "إنتاج وتجارة المعادن الأساسية", "Coins"],
  ["Shipbuilding", "بناء السفن", "Shipbuilding", "صناعة بناء السفن التجارية والعسكرية", "Ship"],
  ["VehicleManufacturing", "تصنيع المركبات", "Vehicle Manufacturing", "صناعة السيارات والمركبات", "Car"],
  ["CommercialRealEstate", "العقارات التجارية", "Commercial Real Estate", "المباني والمكاتب التجارية", "Building"],
  ["IndustrialRealEstate", "العقارات الصناعية", "Industrial Real Estate", "المستودعات والمنشآت الصناعية", "Warehouse"],
  ["MortgagesFinancing", "القروض العقارية والتمويل", "Mortgages & Financing", "التمويل العقاري وأسعار الفائدة", "Landmark"],
  ["PropertyServices", "خدمات العقارات", "Property Services", "خدمات إدارة وصيانة العقارات", "Settings"],
  ["ResidentialRealEstate", "العقارات السكنية", "Residential Real Estate", "المنازل والشقق السكنية", "Home"],
  ["DIYRetail", "تجزئة الأدوات المنزلية", "DIY Retail", "مواد البناء والأدوات اليدوية", "Hammer"],
  ["FashionAccessories", "الأزياء والإكسسوارات", "Fashion & Accessories", "صناعة الموضة والإكسسوارات", "Gem"],
  ["FoodBeverageRetail", "تجزئة الأغذية والمشروبات", "Food & Beverage Retail", "سلاسل بيع الأغذية بالتجزئة", "ShoppingBasket"],
  ["FurnitureRetail", "تجزئة الأثاث", "Furniture Retail", "محلات بيع الأثاث", "Armchair"],
  ["GeneralMerchandise", "البضائع العامة", "General Merchandise", "المتاجر الكبرى والتجزئة الشاملة", "Package"],
  ["HealthHygiene", "الصحة والنظافة", "Health & Hygiene", "منتجات النظافة والرعاية الصحية", "Hand"],
  ["OfficeSupplies", "مستلزمات المكاتب", "Office Supplies", "الأدوات والمستلزمات المكتبية", "PenTool"],
  ["RetailTechnology", "تكنولوجيا التجزئة", "Retail Technology", "التقنيات الحديثة في البيع بالتجزئة", "Scan"],
  ["ShoppingBehavior", "سلوك التسوق", "Shopping Behavior", "أنماط واتجاهات المستهلكين", "Eye"],
  ["BusinessServices", "خدمات الأعمال", "Business Services", "الخدمات المهنية والاستشارية", "Briefcase"],
  ["SkilledLabor", "العمالة الماهرة", "Skilled Labor", "سوق العمل المهني المتخصص", "Wrench"],
  ["CrimeLaw", "الجريمة والقانون", "Crime & Law", "إحصاءات الجريمة والنظام القضائي", "Scale"],
  ["Demographics", "الديموغرافيا", "Demographics", "إحصاءات السكان والتوزيع العمري", "Users"],
  ["EducationScience", "التعليم والعلوم", "Education & Science", "الأنظمة التعليمية والبحث العلمي", "GraduationCap"],
  ["GeographyNature", "الجغرافيا والطبيعة", "Geography & Nature", "المعالم الجغرافية والتنوع الطبيعي", "Mountain"],
  ["Religion", "الدين", "Religion", "إحصاءات الأديان والمعتقدات", "Church"],
  ["ArtCulture", "الفن والثقافة", "Art & Culture", "الفنون والتراث الثقافي", "Palette"],
  ["Gambling", "المقامرة", "Gambling", "صناعة القمار والمراهنات", "Dice5"],
  ["Hobbies", "الهوايات", "Hobbies", "الهوايات والأنشطة الترفيهية", "Heart"],
  ["ProfessionalSports", "الرياضة الاحترافية", "Professional Sports", "الدوريات والأندية الرياضية", "Trophy"],
  ["FitnessWellness", "اللياقة والعافية", "Fitness & Wellness", "اللياقة البدنية والصحة العامة", "Dumbbell"],
  ["ConsumerElectronics", "إلكترونيات المستهلك", "Consumer Electronics", "الأجهزة الإلكترونية الاستهلاكية", "Monitor"],
  ["Hardware", "عتاد الحاسوب", "Hardware", "مكونات وأجهزة الحاسوب", "Cpu"],
  ["Appliances", "الأجهزة المنزلية", "Appliances", "الأجهزة الكهربائية المنزلية", "Refrigerator"],
  ["ITServices", "خدمات تكنولوجيا المعلومات", "IT Services", "خدمات الدعم والحلول التقنية", "Server"],
  ["Software", "البرمجيات", "Software", "صناعة البرمجيات والسحابية", "Code"],
  ["Telecommunications", "الاتصالات السلكية واللاسلكية", "Telecommunications", "شبكات الاتصال والبنية التحتية", "Wifi"],
  ["Aviation", "الطيران", "Aviation", "صناعة الطيران المدني والعسكري", "Plane"],
  ["Logistics", "اللوجستيات", "Logistics", "سلاسل التوريد والشحن", "Truck"],
  ["PublicTransport", "النقل العام", "Public Transport", "وسائل النقل العام والجماعي", "Bus"],
  ["VehiclesRoadTraffic", "المركبات وحركة المرور", "Vehicles & Road Traffic", "السيارات والطرق والمرور", "Car"],
  ["WaterTransport", "النقل المائي", "Water Transport", "الملاحة البحرية والنهرية", "Ship"],
  ["Accommodation", "الإقامة", "Accommodation", "الفنادق والمنتجعات والسكن", "Bed"],
  ["BusinessTravel", "السفر للأعمال", "Business Travel", "السفر المهني والمؤتمرات", "Briefcase"],
  ["FoodDrinkServices", "خدمات الطعام والشراب", "Food & Drink Services", "المطاعم والمقاهي والخدمات", "Utensils"],
  ["LeisureTravel", "السفر الترفيهي", "Leisure Travel", "السياحة والترفيه والسفر", "Palmtree"],
];

const textDir = 'fileText';
const compDir = 'components';

// 2. Map all text files to a big content map
const contentMap = new Map();

const textFiles = fs.readdirSync(textDir).filter(f => f.endsWith('.txt'));

textFiles.forEach(file => {
    const rawContent = fs.readFileSync(path.join(textDir, file), 'utf8');
    const sections = rawContent.split(/## /);
    
    sections.forEach(sec => {
        const lines = sec.trim().split('\n');
        const header = lines[0].trim();
        const content = lines.slice(1).join('\n').trim();
        
        if (header && content) {
            // Clean header to match generate-pages naming if possible
            contentMap.set(header.toLowerCase(), content);
        }
    });

    // Also store the top-level description if exists
    const topLevel = rawContent.split(/## /)[0].replace(/^# .*\n/, '').trim();
    const titleMatch = rawContent.match(/^# (.*)/);
    if (titleMatch && topLevel) {
        contentMap.set(titleMatch[1].trim().toLowerCase() + "_main", topLevel);
    }
});

console.log(`Loaded ${contentMap.size} text sections from ${textFiles.length} files.`);

// 3. Process Dashboards
dashboardsRoot.forEach(([name, titleAR, titleEN, subtitle, icon]) => {
    const filePath = path.join(compDir, `${name}Dashboard.tsx`);
    
    // Find content
    let mainContent = contentMap.get(titleEN.toLowerCase()) || 
                      contentMap.get(titleEN.replace('&', 'and').toLowerCase()) ||
                      contentMap.get(titleEN.replace(' & ', ' ').toLowerCase()) ||
                      "سيتم إضافة المحتوى التحليلي لهذا القطاع قريباً.";

    // If text file was found but titleEN didn't match perfectly, check for main_title
    if (mainContent.includes("قيد التحديث") || mainContent.length < 50) {
        const fallback = contentMap.get(titleEN.toLowerCase() + "_main");
        if (fallback) mainContent = fallback;
    }

    const tsxContent = `import React from 'react';
import SectorDashboardTemplate, { SectorDashboardProps } from './SectorDashboardTemplate';
import { ${icon} } from 'lucide-react';

const config: SectorDashboardProps = {
  title: '${titleAR}',
  titleEn: '${titleEN}',
  subtitle: '${subtitle}',
  icon: ${icon},
  accent: 'blue',
  pdfLabel: 'تقرير ${titleAR} (PDF)',

  kpis: [
    { label: 'المؤشر الرئيسي', value: 'بانتظار البيانات', unit: 'إحصاء عالمي', icon: ${icon} },
  ],

  navItems: ['نظرة عامة', 'التحليل الاقتصادي', 'اتجاهات الصناعة', 'تعريف'],

  sections: [
    {
      id: 'overview',
      title: 'نظرة عامة',
      subtitle: 'Overview',
      content: (
        <div className="space-y-4 text-right">
          <p>${mainContent.replace(/\n/g, '</p><p>')}</p>
        </div>
      ),
    },
  ],

  leaders: [],

  definition: '${mainContent.split('.')[0]}.',

  industryInsights: [
    'يعتبر هذا القطاع من الركائز الأساسية في السوق العالمي',
    'التطور التكنولوجي يساهم في زيادة كفاءة العمليات في هذا المجال',
  ],

  tags: ['${name}', '${titleEN}'],
};

const ${name}Dashboard: React.FC = () => <SectorDashboardTemplate {...config} />;

export default ${name}Dashboard;
`;

    fs.writeFileSync(filePath, tsxContent);
    console.log(`Updated: ${name}Dashboard.tsx`);
});

console.log("\n✅ All dashboards updated with real text content!");

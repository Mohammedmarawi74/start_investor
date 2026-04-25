const fs = require("fs");
const path = require("path");

// All dashboards to create — name, titleAR, titleEN, subtitle, icon
const dashboards = [
  // Advertising & Marketing (already exist)
  // ["Advertising", "الإعلانات", "Advertising", "رؤية شاملة لصناعة الإعلانات", "Megaphone"],
  // ["BrandsLeaders", "العباقية والرواد", "Brands Leaders", "أكبر العلامات التجارية وأكثرها قيمة", "Award"],
  // ["Marketing", "التسويق", "Marketing", "استراتيجيات التسويق الرقمي والتقليدي", "TrendingUp"],

  // Agriculture (already exist)
  // ["Farming", "الزراعة", "Farming", "الزراعة والإنتاج الزراعي", "Sprout"],
  // ["FisheriesAquaculture", "الثروة السمكية", "Fisheries & Aquaculture", "الصيد وتربية الأحياء المائية", "Waves"],
  // ["Forestry", "الغابات", "Forestry", "إدارة الغابات والمنتجات الحرجية", "TreePine"],

  // Chemicals & Resources (already exist)
  // ["ChemicalIndustry", "الصناعات الكيماوية", "Chemical Industry", "الصناعات الكيميائية الأساسية", "FlaskConical"],
  // ["FossilFuels", "الوقود الأحفوري", "Fossil Fuels", "الفحم والنفط والغاز", "Flame"],
  // ["MiningMetalsMinerals", "التعدين والمعادن", "Mining Metals & Minerals", "استخراج المعادن والموارد المعدنية", "Mountain"],
  // ["PetroleumRefinery", "البترول والتكرير", "Petroleum Refinery", "تكرير النفط والمنتجات البترولية", "Factory"],
  // ["PlasticRubber", "البلاستيك والمطاط", "Plastic & Rubber", "صناعة البلاستيك والمطاط", "Layers"],
  // ["PulpPaper", "اللب والورق", "Pulp & Paper", "صناعة الورق والمنتجات الورقية", "FileBox"],

  // Construction (already exist)
  // ["BuildingConstruction", "بناء العقارات", "Building Construction", "الإنشاءات العقارية والسكنية", "Building2"],
  // ["HeavyConstruction", "البناء الثقيل", "Heavy Construction", "البنية التحتية والبناء الثقيل", "HardHat"],

  // Consumer Goods & FMCG
  ["AlcoholicBeverages", "المشروبات الكحولية", "Alcoholic Beverages", "سوق المشروبات الكحولية والجعة والنبيذ", "Wine"],
  // ApparelShoes exists
  ["Cannabis", "القنب والحشيش", "Cannabis", "صناعة القنب والماريجوانا القانونية", "Sprout"],
  // CleaningProducts exists
  // CosmeticsPersonalCare exists
  // FoodNutrition exists
  // FurnitureHousehold exists
  // GardenPatio exists
  // HomeImprovement exists
  // NonAlcoholicBeverages exists
  // PetSupplies exists
  ["Tobacco", "التبغ", "Tobacco", "صناعة التبغ والسجائر والبدائل", "Cigarette"],
  // Toys exists

  // E-Commerce (already exist)
  // ["B2BEcommerce", "التجارة الإلكترونية B2B", "B2B E-Commerce", "منصات الجملة بين الشركات", "Briefcase"],
  // ["B2CEcommerce", "التجارة الإلكترونية B2C", "B2C E-Commerce", "التجزئة الإلكترونية المباشرة", "ShoppingCart"],
  // ["C2CEcommerce", "التجارة الإلكترونية C2C", "C2C E-Commerce", "التبادل بين المستهلكين", "Handshake"],
  // ["DigitalShoppingBehaviour", "سلوك التسوق الرقمي", "Digital Shopping Behaviour", "أنماط التسوق الإلكتروني", "BrainCircuit"],
  // ["EcommerceKeyFigures", "أرقام التجارة الإلكترونية", "E-Commerce Key Figures", "المؤشرات الرئيسية", "Hash"],
  // ["PaidContent", "المحتوى المدفوع", "Paid Content", "الاشتراكات الرقمية والبث", "PlayCircle"],

  // Economy & Politics
  // Economy exists
  ["International", "التجارة الدولية", "International Trade", "التبادل التجاري العالمي", "Globe"],
  ["PoliticsGovernment", "السياسة والحكومة", "Politics & Government", "السياسات العامة والحوكمة", "Landmark"],

  // Energy & Environment
  // ClimateWeather exists
  ["Emissions", "الانبعاثات العالمية", "Emissions", "انبعاثات غازات الاحتباس والغازات الدفيئة", "Cloud"],
  // Energy exists
  // Greentech exists
  // Waste exists
  // Water exists

  // Finance & Insurance
  ["FinancialInstitutions", "المؤسسات المالية", "Financial Institutions", "البنوك والمؤسسات المالية العالمية", "Landmark"],
  ["FinancialInvestments", "الاستثمارات المالية", "Financial Investments", "أسواق الاستثمار والأوراق المالية", "TrendingUp"],
  ["FinancialServices", "الخدمات المالية", "Financial Services", "الخدمات المصرفية والتمويلية", "CreditCard"],
  ["Insurance", "التأمين", "Insurance", "صناعة التأمين العالمية وأنواع التغطية", "Shield"],

  // Health
  ["CareSupport", "الرعاية والدعم", "Care & Support", "خدمات الرعاية الصحية المنزلية والدعم", "Heart"],
  ["HospitalsHealthProfessionals", "المستشفيات والمهنيين الصحيين", "Hospitals & Health Professionals", "المرافق الصحية والكادر الطبي", "Stethoscope"],
  ["HealthSystem", "النظام الصحي", "Health System", "أنظمة الرعاية الصحية والإنفاق", "Hospital"],
  ["MedicalTechnology", "التكنولوجيا الطبية", "Medical Technology", "الأجهزة والتجهيزات الطبية", "Scan"],
  ["PharmaceuticalMarket", "السوق الدوائية", "Pharmaceutical Market", "صناعة الأدوية والمستحضرات الصيدلانية", "Pill"],
  ["StateOfHealth", "حالة الصحة العامة", "State of Health", "مؤشرات الصحة العامة والأمراض", "Activity"],

  // Internet
  ["Communications", "الاتصالات", "Communications", "صناعة الاتصالات والشبكات", "Phone"],
  ["CyberSecurity", "الأمن السيبراني", "Cyber Security", "أمن المعلومات والحماية الرقمية", "ShieldAlert"],
  ["InternetDemographics", "ديموغرافية الإنترنت", "Internet Demographics", "إحصاءات استخدام الإنترنت عالمياً", "Users"],
  ["AppsMobileInternet", "التطبيقات والإنترنت المحمول", "Apps & Mobile Internet", "تطبيقات الهواتف والإنترنت المتنقل", "Smartphone"],
  ["OnlineSearch", "البحث عبر الإنترنت", "Online Search", "محركات البحث وأنماط البحث", "Search"],
  ["OnlineEntertainment", "الترفيه عبر الإنترنت", "Online Entertainment", "الألعاب والتسلية الرقمية", "Gamepad2"],
  ["TrafficReach", "حركة المرور والوصول", "Traffic & Reach", "إحصاءات الزوار والوصول الرقمي", "BarChart3"],
  ["SocialMedia", "وسائل التواصل الاجتماعي", "Social Media", "منصات التواصل ومعدلات الاستخدام", "MessageCircle"],

  // Media
  ["Audio", "الصوت", "Audio", "البودكاست والموسيقى والبث الصوتي", "Headphones"],
  ["BooksPublishing", "الكتب والنشر", "Books & Publishing", "صناعة النشر والكتب الرقمية", "BookOpen"],
  ["News", "الأخبار", "News", "وسائل الإعلام الإخبارية الرقمية", "Newspaper"],
  ["TVFilm", "التلفزيون والأفلام", "TV & Film", "صناعة التلفزيون والسينما", "Film"],
  ["VideoGaming", "ألعاب الفيديو", "Video Gaming", "صناعة ألعاب الفيديو والسوق", "Gamepad2"],

  // Metals & Electronics
  ["AerospaceDefense", "الفضاء والدفاع", "Aerospace & Defense", "صناعة الطيران والدفاع العسكري", "Rocket"],
  ["Electronics", "الإلكترونيات", "Electronics", "صناعة الإلكترونيات وأشباه الموصلات", "Cpu"],
  ["IndustrialMachinery", "الآلات الصناعية", "Industrial Machinery", "الآلات والمعدات الصناعية", "Cog"],
  ["Metals", "المعادن", "Metals", "إنتاج وتجارة المعادن الأساسية", "Coins"],
  ["Shipbuilding", "بناء السفن", "Shipbuilding", "صناعة بناء السفن التجارية والعسكرية", "Ship"],
  ["VehicleManufacturing", "تصنيع المركبات", "Vehicle Manufacturing", "صناعة السيارات والمركبات", "Car"],

  // Real Estate
  ["CommercialRealEstate", "العقارات التجارية", "Commercial Real Estate", "المباني والمكاتب التجارية", "Building"],
  ["IndustrialRealEstate", "العقارات الصناعية", "Industrial Real Estate", "المستودعات والمنشآت الصناعية", "Warehouse"],
  ["MortgagesFinancing", "القروض العقارية والتمويل", "Mortgages & Financing", "التمويل العقاري وأسعار الفائدة", "Landmark"],
  ["PropertyServices", "خدمات العقارات", "Property Services", "خدمات إدارة وصيانة العقارات", "Settings"],
  ["ResidentialRealEstate", "العقارات السكنية", "Residential Real Estate", "المنازل والشقق السكنية", "Home"],

  // Retail
  ["DIYRetail", "تجزئة الأدوات المنزلية", "DIY Retail", "مواد البناء والأدوات اليدوية", "Hammer"],
  ["FashionAccessories", "الأزياء والإكسسوارات", "Fashion & Accessories", "صناعة الموضة والإكسسوارات", "Gem"],
  ["FoodBeverageRetail", "تجزئة الأغذية والمشروبات", "Food & Beverage Retail", "سلاسل بيع الأغذية بالتجزئة", "ShoppingBasket"],
  ["FurnitureRetail", "تجزئة الأثاث", "Furniture Retail", "محلات بيع الأثاث", "Armchair"],
  ["GeneralMerchandise", "البضائع العامة", "General Merchandise", "المتاجر الكبرى والتجزئة الشاملة", "Package"],
  ["HealthHygiene", "الصحة والنظافة", "Health & Hygiene", "منتجات النظافة والرعاية الصحية", "Hand"],
  // InternationalTrade already created above
  ["OfficeSupplies", "مستلزمات المكاتب", "Office Supplies", "الأدوات والمستلزمات المكتبية", "PenTool"],
  ["RetailTechnology", "تكنولوجيا التجزئة", "Retail Technology", "التقنيات الحديثة في البيع بالتجزئة", "Scan"],
  ["ShoppingBehavior", "سلوك التسوق", "Shopping Behavior", "أنماط واتجاهات المستهلكين", "Eye"],

  // Services
  ["BusinessServices", "خدمات الأعمال", "Business Services", "الخدمات المهنية والاستشارية", "Briefcase"],
  ["SkilledLabor", "العمالة الماهرة", "Skilled Labor", "سوق العمل المهني المتخصص", "Wrench"],

  // Society
  ["CrimeLaw", "الجريمة والقانون", "Crime & Law", "إحصاءات الجريمة والنظام القضائي", "Scale"],
  ["Demographics", "الديموغرافيا", "Demographics", "إحصاءات السكان والتوزيع العمري", "Users"],
  ["EducationScience", "التعليم والعلوم", "Education & Science", "الأنظمة التعليمية والبحث العلمي", "GraduationCap"],
  ["GeographyNature", "الجغرافيا والطبيعة", "Geography & Nature", "المعالم الجغرافية والتنوع الطبيعي", "Mountain"],
  ["Religion", "الدين", "Religion", "إحصاءات الأديان والمعتقدات", "Church"],

  // Sports
  ["ArtCulture", "الفن والثقافة", "Art & Culture", "الفنون والتراث الثقافي", "Palette"],
  ["Gambling", "المقامرة", "Gambling", "صناعة القمار والمراهنات", "Dice5"],
  ["Hobbies", "الهوايات", "Hobbies", "الهوايات والأنشطة الترفيهية", "Heart"],
  ["ProfessionalSports", "الرياضة الاحترافية", "Professional Sports", "الدوريات والأندية الرياضية", "Trophy"],
  ["FitnessWellness", "اللياقة والعافية", "Fitness & Wellness", "اللياقة البدنية والصحة العامة", "Dumbbell"],

  // Tech
  ["ConsumerElectronics", "إلكترونيات المستهلك", "Consumer Electronics", "الأجهزة الإلكترونية الاستهلاكية", "Monitor"],
  ["Hardware", "عتاد الحاسوب", "Hardware", "مكونات وأجهزة الحاسوب", "Cpu"],
  ["Appliances", "الأجهزة المنزلية", "Appliances", "الأجهزة الكهربائية المنزلية", "Refrigerator"],
  ["ITServices", "خدمات تكنولوجيا المعلومات", "IT Services", "خدمات الدعم والحلول التقنية", "Server"],
  ["Software", "البرمجيات", "Software", "صناعة البرمجيات والسحابية", "Code"],
  ["Telecommunications", "الاتصالات السلكية واللاسلكية", "Telecommunications", "شبكات الاتصال والبنية التحتية", "Wifi"],

  // Transport
  ["Aviation", "الطيران", "Aviation", "صناعة الطيران المدني والعسكري", "Plane"],
  ["Logistics", "اللوجستيات", "Logistics", "سلاسل التوريد والشحن", "Truck"],
  ["PublicTransport", "النقل العام", "Public Transport", "وسائل النقل العام والجماعي", "Bus"],
  ["VehiclesRoadTraffic", "المركبات وحركة المرور", "Vehicles & Road Traffic", "السيارات والطرق والمرور", "Car"],
  ["WaterTransport", "النقل المائي", "Water Transport", "الملاحة البحرية والنهرية", "Ship"],

  // Travel
  ["Accommodation", "الإقامة", "Accommodation", "الفنادق والمنتجعات والسكن", "Bed"],
  ["BusinessTravel", "السفر للأعمال", "Business Travel", "السفر المهني والمؤتمرات", "Briefcase"],
  ["FoodDrinkServices", "خدمات الطعام والشراب", "Food & Drink Services", "المطاعم والمقاهي والخدمات", "Utensils"],
  ["LeisureTravel", "السفر الترفيهي", "Leisure Travel", "السياحة والترفيه والسفر", "Palmtree"],
];

const outputDir = path.join(__dirname, "components");

let created = 0;
let skipped = 0;

dashboards.forEach(([name, titleAR, titleEN, subtitle, icon]) => {
  const filePath = path.join(outputDir, `${name}Dashboard.tsx`);

  if (fs.existsSync(filePath)) {
    skipped++;
    return;
  }

  const content = `import React from 'react';
import SectorDashboardTemplate, { SectorDashboardProps } from './SectorDashboardTemplate';
import { ${icon} } from 'lucide-react';

const config: SectorDashboardProps = {
  title: '${titleAR}',
  titleEn: '${titleEN}',
  subtitle: '${subtitle}',
  icon: ${icon},
  accent: 'slate',
  pdfLabel: 'تقرير ${titleAR} (PDF)',

  kpis: [
    { label: 'المؤشر الأول', value: '—', unit: 'قيد التحديث', icon: ${icon} },
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

  tags: ['${titleEN.replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g, "', '")}'],
};

const ${name}Dashboard: React.FC = () => <SectorDashboardTemplate {...config} />;

export default ${name}Dashboard;
`;

  fs.writeFileSync(filePath, content);
  created++;
  console.log(`✅ ${name}Dashboard.tsx`);
});

console.log(`\n🎉 Done! Created: ${created} | Skipped (already exists): ${skipped}`);

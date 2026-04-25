const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "components");
const textDir = path.join(__dirname, "fileText");

// Ensure directories exist
if (!fs.existsSync(textDir)) fs.mkdirSync(textDir, { recursive: true });

// All sub-sectors mapped to: [className, titleAR, titleEN, subtitle, icon, txtFilename]
const allSectors = [
  // ─── Health, Pharma & Medtech ───
  ["CareSupport", "الرعاية والدعم", "Care & Support", "خدمات الرعاية الصحية المنزلية والدعم", "Heart", "Care_Support"],
  ["HospitalsHealthProfessionals", "المستشفيات والمهنيين الصحيين", "Health Professionals & Hospitals", "المرافق الصحية والكادر الطبي", "Stethoscope", "Health_Professionals_Hospitals"],
  ["HealthSystem", "النظام الصحي", "Health System", "أنظمة الرعاية الصحية والإنفاق", "Hospital", "Health_System"],
  ["MedicalTechnology", "التكنولوجيا الطبية", "Medical Technology", "الأجهزة والتجهيزات الطبية", "Scan", "Medical_Technology"],
  ["PharmaceuticalProducts", "السوق الدوائية", "Pharmaceutical Products & Market", "صناعة الأدوية والمستحضرات الصيدلانية", "Pill", "Pharmaceutical_Products"],
  ["StateOfHealth", "حالة الصحة العامة", "State of Health", "مؤشرات الصحة العامة والأمراض", "Activity", "State_of_Health"],

  // ─── Internet ───
  ["Communications", "الاتصالات", "Communications", "صناعة الاتصالات والشبكات", "Phone", "Communications"],
  ["CyberCrimeSecurity", "الجريمة والأمن السيبراني", "Cyber Crime & Security", "التهديدات الرقمية وحماية البيانات", "ShieldAlert", "Cyber_Crime_Security"],
  ["DemographicsUse", "ديموغرافية الاستخدام", "Demographics & Use", "إحصاءات استخدام الإنترنت عالمياً", "Users", "Demographics_Use"],
  ["MobileInternetApps", "الإنترنت المحمول والتطبيقات", "Mobile Internet & Apps", "تطبيقات الهواتف والإنترنت المتنقل", "Smartphone", "Mobile_Internet_Apps"],
  ["OnlineSearch", "البحث عبر الإنترنت", "Online Search", "محركات البحث وأنماط البحث", "Search", "Online_Search"],
  ["OnlineVideoEntertainment", "الترفيه والفيديو عبر الإنترنت", "Online Video & Entertainment", "البث المباشر والمحتوى المرئي", "Play", "Online_Video_Entertainment"],
  ["ReachTraffic", "حركة المرور والوصول", "Reach & Traffic", "إحصاءات الزوار والوصول الرقمي", "BarChart3", "Reach_Traffic"],
  ["SocialMedia", "وسائل التواصل الاجتماعي", "Social Media & User-Generated Content", "منصات التواصل والمحتوى المولَّد", "MessageCircle", "Social_Media"],

  // ─── Life ───
  ["Celebrities", "المشاهير", "Celebrities", "تأثير المشاهير وثقافة الشهرة", "Star", "Celebrities"],
  ["FamilyFriends", "العائلة والأصدقاء", "Family & Friends", "العلاقات الاجتماعية والأسرية", "Users", "Family_Friends"],
  ["LoveSex", "الحب والعلاقات", "Love & Sex", "العلاقات العاطفية والإحصاءات الاجتماعية", "Heart", "Love_Sex"],
  ["PersonalityBehavior", "الشخصية والسلوك", "Personality & Behavior", "السلوك البشري وأنماط الشخصية", "Brain", "Personality_Behavior"],
  ["PublicReligiousHolidays", "العطل والأعياد", "Public and Religious Holidays", "التقويمات والأعياد العالمية", "Calendar", "Public_Religious_Holidays"],

  // ─── Media ───
  ["Audio", "الصوت", "Audio", "البودكاست والموسيقى والبث الصوتي", "Headphones", "Audio"],
  ["BooksPublishing", "الكتب والنشر", "Books & Publishing", "صناعة النشر والكتب الرقمية", "BookOpen", "Books_Publishing"],
  ["News", "الأخبار", "News", "وسائل الإعلام الإخبارية الرقمية", "Newspaper", "News"],
  ["TVVideoFilm", "التلفزيون والأفلام", "TV, Video & Film", "صناعة التلفزيون والسينما", "Film", "TV_Video_Film"],
  ["VideoGamingESports", "ألعاب الفيديو والرياضة الإلكترونية", "Video Gaming & eSports", "صناعة الألعاب والمنافسات الرقمية", "Gamepad2", "Video_Gaming_ESports"],

  // ─── Metals & Electronics ───
  ["AerospaceDefense", "الفضاء والدفاع", "Aerospace & Defense Manufacturing", "صناعة الطيران والدفاع العسكري", "Rocket", "Aerospace_Defense"],
  ["Electronics", "الإلكترونيات", "Electronics", "صناعة الإلكترونيات وأشباه الموصلات", "Cpu", "Electronics"],
  ["IndustrialMachinery", "الآلات الصناعية", "Industrial Machinery Manufacturing", "الآلات والمعدات الصناعية", "Cog", "Industrial_Machinery"],
  ["Metals", "المعادن", "Metals", "إنتاج وتجارة المعادن الأساسية", "Coins", "Metals"],
  ["RollingStock", "المركبات الحديدية", "Rolling Stock Manufacturing", "صناعة القطارات والمعدات الحديدية", "Train", "Rolling_Stock"],
  ["Shipbuilding", "بناء السفن", "Shipbuilding", "صناعة بناء السفن التجارية والعسكرية", "Ship", "Shipbuilding"],
  ["VehicleManufacturing", "تصنيع المركبات", "Vehicle Manufacturing", "صناعة السيارات والمركبات", "Car", "Vehicle_Manufacturing"],

  // ─── Real Estate ───
  ["CommercialRealEstate", "العقارات التجارية", "Commercial Real Estate", "المباني والمكاتب التجارية", "Building", "Commercial_Real_Estate"],
  ["IndustrialRealEstate", "العقارات الصناعية", "Industrial Real Estate", "المستودعات والمنشآت الصناعية", "Warehouse", "Industrial_Real_Estate"],
  ["MortgagesFinancing", "القروض العقارية", "Mortgages & Financing", "التمويل العقاري وأسعار الفائدة", "Landmark", "Mortgages_Financing"],
  ["PropertyServices", "خدمات العقارات", "Property Services", "خدمات إدارة وصيانة العقارات", "Settings", "Property_Services"],
  ["ResidentialRealEstate", "العقارات السكنية", "Residential Real Estate", "المنازل والشقق السكنية", "Home", "Residential_Real_Estate"],

  // ─── Retail & Trade ───
  ["DIYRetail", "تجزئة الأدوات المنزلية", "DIY Retail", "مواد البناء والأدوات اليدوية", "Hammer", "DIY_Retail"],
  ["FashionAccessories", "الأزياء والإكسسوارات", "Fashion & Accessories", "صناعة الموضة والإكسسوارات", "Gem", "Fashion_Accessories"],
  ["FoodBeverageRetail", "تجزئة الأغذية والمشروبات", "Food & Beverage", "سلاسل بيع الأغذية بالتجزئة", "ShoppingBasket", "Food_Beverage_Retail"],
  ["FurnitureRetail", "تجزئة الأثاث", "Furniture Retail", "محلات بيع الأثاث", "Armchair", "Furniture_Retail"],
  ["GeneralMerchandise", "البضائع العامة", "General Merchandise", "المتاجر الكبرى والتجزئة الشاملة", "Package", "General_Merchandise"],
  ["HealthHygieneRetail", "الصحة والنظافة", "Health & Hygiene", "منتجات النظافة والرعاية الصحية", "Hand", "Health_Hygiene_Retail"],
  ["InternationalTradeRetail", "التجارة الدولية", "International Trade", "التبادل التجاري العالمي", "Globe", "International_Trade_Retail"],
  ["OfficeSuppliesRetail", "مستلزمات المكاتب", "Office Supplies", "الأدوات والمستلزمات المكتبية", "PenTool", "Office_Supplies_Retail"],
  ["PrivateLabel", "العلامات الخاصة", "Private Label", "منتجات العلامات التجارية للمتاجر", "Tag", "Private_Label"],
  ["RetailTechnology", "تكنولوجيا التجزئة", "Retail Technology", "التقنيات الحديثة في البيع بالتجزئة", "Scan", "Retail_Technology"],
  ["ShoppingBehavior", "سلوك التسوق", "Shopping Behavior", "أنماط واتجاهات المستهلكين", "Eye", "Shopping_Behavior"],
  ["SportsLeisureRetail", "الرياضة والترفيه", "Sports & Leisure", "المعدات الرياضية والترفيهية", "Dumbbell", "Sports_Leisure_Retail"],
  ["SubscriptionsDirectSelling", "الاشتراكات والبيع المباشر", "Subscriptions & Direct Selling", "نماذج الاشتراك والبيع المباشر", "CreditCard", "Subscriptions_Direct_Selling"],
  ["SupplyChain", "سلاسل التوريد", "Supply Chain", "إدارة سلاسل التوريد والإمداد", "Truck", "Supply_Chain"],
  ["Wholesale", "الجملة", "Wholesale", "أسواق الجملة والتوزيع", "Briefcase", "Wholesale"],

  // ─── Services ───
  ["BusinessServices", "خدمات الأعمال", "Business Services", "الخدمات المهنية والاستشارية", "Briefcase", "Business_Services"],
  ["SkilledLabor", "العمالة الماهرة", "Skilled Labor", "سوق العمل المهني المتخصص", "Wrench", "Skilled_Labor"],

  // ─── Society ───
  ["CrimeLawEnforcement", "الجريمة وإنفاذ القانون", "Crime & Law Enforcement", "إحصاءات الجريمة والعدالة", "Scale", "Crime_Law_Enforcement"],
  ["Demographics", "الديموغرافيا", "Demographics", "إحصاءات السكان والتوزيع العمري", "Users", "Demographics"],
  ["EducationScience", "التعليم والعلوم", "Education & Science", "الأنظمة التعليمية والبحث العلمي", "GraduationCap", "Education_Science"],
  ["GeographyNature", "الجغرافيا والطبيعة", "Geography & Nature", "المعالم الجغرافية والتنوع الطبيعي", "Mountain", "Geography_Nature"],
  ["HistoricalData", "البيانات التاريخية", "Historical Data", "الاتجاهات التاريخية والمقارنات", "History", "Historical_Data"],
  ["Religion", "الدين", "Religion", "إحصاءات الأديان والمعتقدات", "Church", "Religion"],

  // ─── Sports & Recreation ───
  ["ArtCulture", "الفن والثقافة", "Art & Culture", "الفنون والتراث الثقافي", "Palette", "Art_Culture"],
  ["Gambling", "المقامرة", "Gambling", "صناعة القمار والمراهنات", "Dice5", "Gambling"],
  ["Hobbies", "الهوايات", "Hobbies", "الهوايات والأنشطة الترفيهية", "Heart", "Hobbies"],
  ["ParksOutdoors", "الحدائق والهواء الطلق", "Parks & Outdoors", "الترفيه الخارجي والأنشطة الطبيعية", "Trees", "Parks_Outdoors"],
  ["ProfessionalSports", "الرياضة الاحترافية", "Professional Sports", "الدوريات والأندية الرياضية", "Trophy", "Professional_Sports"],
  ["SportsFitness", "الرياضة واللياقة", "Sports & Fitness", "اللياقة البدنية والأنشطة الرياضية", "Dumbbell", "Sports_Fitness"],
  ["WellnessSpas", "العافية والسبا", "Wellness & Spas", "العافية والاستجمام والعلاجات", "Spa", "Wellness_Spas"],

  // ─── Technology & Telecommunications ───
  ["ConsumerElectronics", "إلكترونيات المستهلك", "Consumer Electronics", "الأجهزة الإلكترونية الاستهلاكية", "Monitor", "Consumer_Electronics"],
  ["Hardware", "عتاد الحاسوب", "Hardware", "مكونات وأجهزة الحاسوب", "Cpu", "Hardware"],
  ["HouseholdAppliances", "الأجهزة المنزلية", "Household Appliances", "الأجهزة الكهربائية المنزلية", "Refrigerator", "Household_Appliances"],
  ["ITServices", "خدمات تكنولوجيا المعلومات", "IT Services", "خدمات الدعم والحلول التقنية", "Server", "IT_Services"],
  ["Software", "البرمجيات", "Software", "صناعة البرمجيات والسحابية", "Code", "Software"],
  ["Telecommunications", "الاتصالات السلكية واللاسلكية", "Telecommunications", "شبكات الاتصال والبنية التحتية", "Wifi", "Telecommunications"],

  // ─── Transportation & Logistics ───
  ["Aviation", "الطيران", "Aviation", "صناعة الطيران المدني والعسكري", "Plane", "Aviation"],
  ["Logistics", "اللوجستيات", "Logistics", "سلاسل التوريد والشحن", "Truck", "Logistics"],
  ["PublicTransport", "النقل العام", "Public Transportation & Mobility Services", "وسائل النقل العام والجماعي", "Bus", "Public_Transport"],
  ["RailTransport", "النقل بالسكك الحديدية", "Rail Transport", "قطارات الركاب والشحن", "Train", "Rail_Transport"],
  ["VehiclesRoadTraffic", "المركبات وحركة المرور", "Vehicles & Road Traffic", "السيارات والطرق والمرور", "Car", "Vehicles_Road_Traffic"],
  ["WaterTransport", "النقل المائي", "Water Transport", "الملاحة البحرية والنهرية", "Ship", "Water_Transport"],

  // ─── Travel, Tourism & Hospitality ───
  ["Accommodation", "الإقامة", "Accommodation", "الفنادق والمنتجعات والسكن", "Bed", "Accommodation"],
  ["BusinessTravel", "السفر للأعمال", "Business Travel", "السفر المهني والمؤتمرات", "Briefcase", "Business_Travel"],
  ["FoodDrinkServices", "خدمات الطعام والشراب", "Food & Drink Services", "المطاعم والمقاهي والخدمات", "Utensils", "Food_Drink_Services"],
  ["LeisureTravel", "السفر الترفيهي", "Leisure Travel", "السياحة والترفيه والسفر", "Palmtree", "Leisure_Travel"],
];

// ─── Icon import map ───
const allIcons = [...new Set(allSectors.map(s => s[4]))].sort();

let createdTSX = 0;
let skippedTSX = 0;
let createdTXT = 0;
let skippedTXT = 0;

// ─── Generate .tsx files ───
allSectors.forEach(([className, titleAR, titleEN, subtitle, icon, txtName]) => {
  const filePath = path.join(outputDir, `${className}Dashboard.tsx`);

  if (fs.existsSync(filePath)) {
    skippedTSX++;
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

const ${className}Dashboard: React.FC = () => <SectorDashboardTemplate {...config} />;

export default ${className}Dashboard;
`;

  fs.writeFileSync(filePath, content);
  createdTSX++;
});

// ─── Generate .txt files (empty with header) ───
const categories = {
  "Health_Pharma_Medtech": allSectors.filter(s => ["Care & Support", "Health Professionals & Hospitals", "Health System", "Medical Technology", "Pharmaceutical Products & Market", "State of Health"].includes(s[2])),
  "Internet": allSectors.filter(s => ["Communications", "Cyber Crime & Security", "Demographics & Use", "Mobile Internet & Apps", "Online Search", "Online Video & Entertainment", "Reach & Traffic", "Social Media & User-Generated Content"].includes(s[2])),
  "Life": allSectors.filter(s => ["Celebrities", "Family & Friends", "Love & Sex", "Personality & Behavior", "Public and religious holidays"].includes(s[2])),
  "Media": allSectors.filter(s => ["Audio", "Books & Publishing", "News", "TV, Video & Film", "Video Gaming & eSports"].includes(s[2])),
  "Metals_Electronics": allSectors.filter(s => ["Aerospace & Defense Manufacturing", "Electronics", "Industrial Machinery Manufacturing", "Metals", "Rolling Stock Manufacturing", "Shipbuilding", "Vehicle Manufacturing"].includes(s[2])),
  "Real_Estate": allSectors.filter(s => ["Commercial Real Estate", "Industrial Real Estate", "Mortgages & Financing", "Property Services", "Residential Real Estate"].includes(s[2])),
  "Retail_Trade": allSectors.filter(s => ["DIY Retail", "Fashion & Accessories", "Food & Beverage", "Furniture Retail", "General Merchandise", "Health & Hygiene", "International Trade", "Office Supplies", "Private Label", "Retail Technology", "Shopping Behavior", "Sports & Leisure", "Subscriptions & Direct Selling", "Supply Chain", "Wholesale"].includes(s[2])),
  "Services": allSectors.filter(s => ["Business Services", "Skilled Labor"].includes(s[2])),
  "Society": allSectors.filter(s => ["Crime & Law Enforcement", "Demographics", "Education & Science", "Geography & Nature", "Historical Data", "Religion"].includes(s[2])),
  "Sports_Recreation": allSectors.filter(s => ["Art & Culture", "Gambling", "Hobbies", "Parks & Outdoors", "Professional Sports", "Sports & Fitness", "Wellness & Spas"].includes(s[2])),
  "Technology_Telecommunications": allSectors.filter(s => ["Consumer Electronics", "Hardware", "Household Appliances", "IT Services", "Software", "Telecommunications"].includes(s[2])),
  "Transportation_Logistics": allSectors.filter(s => ["Aviation", "Logistics", "Public Transportation & Mobility Services", "Rail Transport", "Vehicles & Road Traffic", "Water Transport"].includes(s[2])),
  "Travel_Tourism_Hospitality": allSectors.filter(s => ["Accommodation", "Business Travel", "Food & Drink Services", "Leisure Travel"].includes(s[2])),
};

Object.entries(categories).forEach(([catName, sectors]) => {
  const txtPath = path.join(textDir, `${catName}.txt`);

  if (sectors.length === 0) return;

  const header = `# ${catName.replace(/_/g, ' ')}\n\n`;
  const body = sectors.map(([, titleAR, titleEN]) =>
    `## ${titleEN}\n${titleAR}\n\n`
  ).join('');

  if (!fs.existsSync(txtPath)) {
    fs.writeFileSync(txtPath, header + body);
    createdTXT++;
  } else {
    skippedTXT++;
  }
});

// ─── Also create individual sub-sector .txt files ───
allSectors.forEach(([, , titleEN, , , txtName]) => {
  const safeName = txtName.replace(/[^a-zA-Z0-9_]/g, '_');
  const txtPath = path.join(textDir, `${safeName}.txt`);
  if (!fs.existsSync(txtPath)) {
    fs.writeFileSync(txtPath, `# ${titleEN}\n\n${titleEN}\n\n`);
  }
});

console.log(`\n📊 Results:`);
console.log(`  ✅ TSX dashboards created: ${createdTSX}`);
console.log(`  ⏭️  TSX skipped (exist):  ${skippedTSX}`);
console.log(`  📝 TXT files created:     ${createdTXT}`);
console.log(`  ⏭️  TXT skipped (exist):  ${skippedTXT}`);

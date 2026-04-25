const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
if (!app.includes('InvestmentsDashboard')) {
    app = app.replace("import FinancialInstitutionsDashboard from './components/FinancialInstitutionsDashboard';", "import FinancialInstitutionsDashboard from './components/FinancialInstitutionsDashboard';\nimport InvestmentsDashboard from './components/InvestmentsDashboard';");
    app = app.replace("| 'financial-institutions-dashboard'>(() => {", "| 'financial-institutions-dashboard' | 'investments-dashboard'>(() => {");
    app = app.replace("{activeTab === 'financial-institutions-dashboard' && 'المؤسسات المالية'}", "{activeTab === 'financial-institutions-dashboard' && 'المؤسسات المالية'}\n                         {activeTab === 'investments-dashboard' && 'الأدوات المالية والاستثمارات'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'investments-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <InvestmentsDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes("'investments-dashboard'")) {
    const newItem = "  { id: 'investments-dashboard', icon: LineChart, label: 'الأدوات المالية والاستثمارات' },\n];";
    sidebar = sidebar.replace(/];/, newItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes("'investments-dashboard'")) {
    const newItem = "  { id: 'investments-dashboard', icon: LineChart, label: 'الأدوات المالية والاستثمارات' },\n];";
    mobile = mobile.replace(/];/, newItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered Investments dashboard.");

const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
if (!app.includes('FinancialInstitutionsDashboard')) {
    app = app.replace("import WaterDashboard from './components/WaterDashboard';", "import WaterDashboard from './components/WaterDashboard';\nimport FinancialInstitutionsDashboard from './components/FinancialInstitutionsDashboard';");
    app = app.replace("| 'water-dashboard'>(() => {", "| 'water-dashboard' | 'financial-institutions-dashboard'>(() => {");
    app = app.replace("{activeTab === 'water-dashboard' && 'المياه والصرف الصحي'}", "{activeTab === 'water-dashboard' && 'المياه والصرف الصحي'}\n                         {activeTab === 'financial-institutions-dashboard' && 'المؤسسات المالية'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'financial-institutions-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <FinancialInstitutionsDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes("'financial-institutions-dashboard'")) {
    const newItem = "  { id: 'financial-institutions-dashboard', icon: Landmark, label: 'المؤسسات المالية' },\n];";
    sidebar = sidebar.replace(/];/, newItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes("'financial-institutions-dashboard'")) {
    const newItem = "  { id: 'financial-institutions-dashboard', icon: Landmark, label: 'المؤسسات المالية' },\n];";
    mobile = mobile.replace(/];/, newItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered Financial Institutions dashboard.");

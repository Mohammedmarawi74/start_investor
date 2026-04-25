const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
if (!app.includes('PharmaDashboard')) {
    app = app.replace("import InvestmentsDashboard from './components/InvestmentsDashboard';", "import InvestmentsDashboard from './components/InvestmentsDashboard';\nimport PharmaDashboard from './components/PharmaDashboard';");
    app = app.replace("| 'investments-dashboard'>(() => {", "| 'investments-dashboard' | 'pharma-dashboard'>(() => {");
    app = app.replace("{activeTab === 'investments-dashboard' && 'الأدوات المالية والاستثمارات'}", "{activeTab === 'investments-dashboard' && 'الأدوات المالية والاستثمارات'}\n                         {activeTab === 'pharma-dashboard' && 'المنتجات الدوائية وسوق الأدوية'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'pharma-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <PharmaDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes("'pharma-dashboard'")) {
    if (!sidebar.includes('Activity,')) {
        sidebar = sidebar.replace("import {\n", "import {\n  Activity,\n");
    }
    const newItem = "  { id: 'pharma-dashboard', icon: Activity, label: 'المنتجات الدوائية وسوق الأدوية' },\n];";
    sidebar = sidebar.replace(/];/, newItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes("'pharma-dashboard'")) {
    if (!mobile.includes('Activity,')) {
        mobile = mobile.replace("import {\n", "import {\n  Activity,\n");
    }
    const newItem = "  { id: 'pharma-dashboard', icon: Activity, label: 'المنتجات الدوائية وسوق الأدوية' },\n];";
    mobile = mobile.replace(/];/, newItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered Pharma dashboard.");

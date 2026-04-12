const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
if (!app.includes('HealthCareDashboard')) {
    app = app.replace("import PharmaDashboard from './components/PharmaDashboard';", "import PharmaDashboard from './components/PharmaDashboard';\nimport HealthCareDashboard from './components/HealthCareDashboard';");
    app = app.replace("| 'pharma-dashboard'>(() => {", "| 'pharma-dashboard' | 'healthcare-dashboard'>(() => {");
    app = app.replace("{activeTab === 'pharma-dashboard' && 'المنتجات الدوائية وسوق الأدوية'}", "{activeTab === 'pharma-dashboard' && 'المنتجات الدوائية وسوق الأدوية'}\n                         {activeTab === 'healthcare-dashboard' && 'نظام الرعاية الصحية والمستشفيات'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'healthcare-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <HealthCareDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes("'healthcare-dashboard'")) {
    if (!sidebar.includes('ShieldPlus,')) {
        sidebar = sidebar.replace("import {\n", "import {\n  ShieldPlus,\n");
    }
    const newItem = "  { id: 'healthcare-dashboard', icon: ShieldPlus, label: 'نظام الرعاية الصحية والمستشفيات' },\n];";
    sidebar = sidebar.replace(/];/, newItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes("'healthcare-dashboard'")) {
    if (!mobile.includes('ShieldPlus,')) {
        mobile = mobile.replace("import {\n", "import {\n  ShieldPlus,\n");
    }
    const newItem = "  { id: 'healthcare-dashboard', icon: ShieldPlus, label: 'نظام الرعاية الصحية والمستشفيات' },\n];";
    mobile = mobile.replace(/];/, newItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered Health Care dashboard.");

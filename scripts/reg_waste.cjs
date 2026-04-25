const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
if (!app.includes('WasteDashboard')) {
    app = app.replace("import GreentechDashboard from './components/GreentechDashboard';", "import GreentechDashboard from './components/GreentechDashboard';\nimport WasteDashboard from './components/WasteDashboard';");
    app = app.replace("| 'greentech-dashboard'>(() => {", "| 'greentech-dashboard' | 'waste-dashboard'>(() => {");
    app = app.replace("{activeTab === 'greentech-dashboard' && 'تكنولوجيا البيئة والتقنيات الخضراء'}", "{activeTab === 'greentech-dashboard' && 'تكنولوجيا البيئة والتقنيات الخضراء'}\n                         {activeTab === 'waste-dashboard' && 'إدارة النفايات العالمي'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'waste-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <WasteDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes("'waste-dashboard'")) {
    if (!sidebar.includes('Recycle,')) {
        sidebar = sidebar.replace("import {\n", "import {\n  Recycle,\n");
    }
    const newItem = "  { id: 'waste-dashboard', icon: Recycle, label: 'إدارة النفايات العالمي' },\n];";
    sidebar = sidebar.replace(/];/, newItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes("'waste-dashboard'")) {
    if (!mobile.includes('Recycle,')) {
        mobile = mobile.replace("import {\n", "import {\n  Recycle,\n");
    }
    const newItem = "  { id: 'waste-dashboard', icon: Recycle, label: 'إدارة النفايات العالمي' },\n];";
    mobile = mobile.replace(/];/, newItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered Waste dashboard.");

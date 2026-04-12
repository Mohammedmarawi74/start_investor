const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
if (!app.includes('WaterDashboard')) {
    app = app.replace("import WasteDashboard from './components/WasteDashboard';", "import WasteDashboard from './components/WasteDashboard';\nimport WaterDashboard from './components/WaterDashboard';");
    app = app.replace("| 'waste-dashboard'>(() => {", "| 'waste-dashboard' | 'water-dashboard'>(() => {");
    app = app.replace("{activeTab === 'waste-dashboard' && 'إدارة النفايات العالمي'}", "{activeTab === 'waste-dashboard' && 'إدارة النفايات العالمي'}\n                         {activeTab === 'water-dashboard' && 'المياه والصرف الصحي'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'water-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <WaterDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes("'water-dashboard'")) {
    if (!sidebar.includes('Waves,')) {
        sidebar = sidebar.replace("import {\n", "import {\n  Waves,\n");
    }
    const newItem = "  { id: 'water-dashboard', icon: Waves, label: 'المياه والصرف الصحي' },\n];";
    sidebar = sidebar.replace(/];/, newItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes("'water-dashboard'")) {
    if (!mobile.includes('Waves,')) {
        mobile = mobile.replace("import {\n", "import {\n  Waves,\n");
    }
    const newItem = "  { id: 'water-dashboard', icon: Waves, label: 'المياه والصرف الصحي' },\n];";
    mobile = mobile.replace(/];/, newItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered Water dashboard.");

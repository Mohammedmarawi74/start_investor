const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
if (!app.includes('EnergyDashboard')) {
    app = app.replace("import EmissionsDashboard from './components/EmissionsDashboard';", "import EmissionsDashboard from './components/EmissionsDashboard';\nimport EnergyDashboard from './components/EnergyDashboard';");
    app = app.replace("| 'emissions-dashboard'>(() => {", "| 'emissions-dashboard' | 'energy-dashboard'>(() => {");
    app = app.replace("{activeTab === 'emissions-dashboard' && 'الانبعاثات العالمية'}", "{activeTab === 'emissions-dashboard' && 'الانبعاثات العالمية'}\n                         {activeTab === 'energy-dashboard' && 'قطاع الطاقة العالمي'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'energy-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <EnergyDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes("'energy-dashboard'")) {
    if (!sidebar.includes('Zap,')) {
        sidebar = sidebar.replace("import {\n", "import {\n  Zap,\n");
    }
    const newItem = "  { id: 'energy-dashboard', icon: Zap, label: 'قطاع الطاقة العالمي' },\n];";
    sidebar = sidebar.replace(/];/, newItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes("'energy-dashboard'")) {
    if (!mobile.includes('Zap,')) {
        mobile = mobile.replace("import {\n", "import {\n  Zap,\n");
    }
    const newItem = "  { id: 'energy-dashboard', icon: Zap, label: 'قطاع الطاقة العالمي' },\n];";
    mobile = mobile.replace(/];/, newItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered Energy dashboard.");

const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
if (!app.includes('GreentechDashboard')) {
    app = app.replace("import EnergyDashboard from './components/EnergyDashboard';", "import EnergyDashboard from './components/EnergyDashboard';\nimport GreentechDashboard from './components/GreentechDashboard';");
    app = app.replace("| 'energy-dashboard'>(() => {", "| 'energy-dashboard' | 'greentech-dashboard'>(() => {");
    app = app.replace("{activeTab === 'energy-dashboard' && 'قطاع الطاقة العالمي'}", "{activeTab === 'energy-dashboard' && 'قطاع الطاقة العالمي'}\n                         {activeTab === 'greentech-dashboard' && 'تكنولوجيا البيئة والتقنيات الخضراء'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'greentech-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <GreentechDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes("'greentech-dashboard'")) {
    if (!sidebar.includes('Cpu,')) {
        sidebar = sidebar.replace("import {\n", "import {\n  Cpu,\n");
    }
    const newItem = "  { id: 'greentech-dashboard', icon: Cpu, label: 'تكنولوجيا البيئة والتقنيات الخضراء' },\n];";
    sidebar = sidebar.replace(/];/, newItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes("'greentech-dashboard'")) {
    if (!mobile.includes('Cpu,')) {
        mobile = mobile.replace("import {\n", "import {\n  Cpu,\n");
    }
    const newItem = "  { id: 'greentech-dashboard', icon: Cpu, label: 'تكنولوجيا البيئة والتقنيات الخضراء' },\n];";
    mobile = mobile.replace(/];/, newItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered Greentech dashboard.");

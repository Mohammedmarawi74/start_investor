const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
if (!app.includes('EmissionsDashboard')) {
    app = app.replace("import ClimateDashboard from './components/ClimateDashboard';", "import ClimateDashboard from './components/ClimateDashboard';\nimport EmissionsDashboard from './components/EmissionsDashboard';");
    app = app.replace("| 'climate-dashboard'>(() => {", "| 'climate-dashboard' | 'emissions-dashboard'>(() => {");
    app = app.replace("{activeTab === 'climate-dashboard' && 'المناخ والطقس'}", "{activeTab === 'climate-dashboard' && 'المناخ والطقس'}\n                         {activeTab === 'emissions-dashboard' && 'الانبعاثات العالمية'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'emissions-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <EmissionsDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes("'emissions-dashboard'")) {
    if (!sidebar.includes('Factory,')) {
        sidebar = sidebar.replace("import {\n", "import {\n  Factory,\n");
    }
    const newItem = "  { id: 'emissions-dashboard', icon: Factory, label: 'الانبعاثات العالمية' },\n];";
    sidebar = sidebar.replace(/];/, newItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes("'emissions-dashboard'")) {
    if (!mobile.includes('Factory,')) {
        mobile = mobile.replace("import {\n", "import {\n  Factory,\n");
    }
    const newItem = "  { id: 'emissions-dashboard', icon: Factory, label: 'الانبعاثات العالمية' },\n];";
    mobile = mobile.replace(/];/, newItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered Emissions dashboard.");

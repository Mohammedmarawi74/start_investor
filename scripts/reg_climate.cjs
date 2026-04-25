const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
if (!app.includes('ClimateDashboard')) {
    app = app.replace("import PoliticsDashboard from './components/PoliticsDashboard';", "import PoliticsDashboard from './components/PoliticsDashboard';\nimport ClimateDashboard from './components/ClimateDashboard';");
    app = app.replace("| 'politics-dashboard'>(() => {", "| 'politics-dashboard' | 'climate-dashboard'>(() => {");
    app = app.replace("{activeTab === 'politics-dashboard' && 'السياسة والحكومة'}", "{activeTab === 'politics-dashboard' && 'السياسة والحكومة'}\n                         {activeTab === 'climate-dashboard' && 'المناخ والطقس'}");
    app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'climate-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <ClimateDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
    fs.writeFileSync('App.tsx', app);
}

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes("'climate-dashboard'")) {
    // Add CloudSun to imports if missing
    if (!sidebar.includes('CloudSun,')) {
        sidebar = sidebar.replace("import {\n", "import {\n  CloudSun,\n");
    }
    const newItem = "  { id: 'climate-dashboard', icon: CloudSun, label: 'المناخ والطقس' },\n];";
    sidebar = sidebar.replace(/];/, newItem);
    fs.writeFileSync('components/Sidebar.tsx', sidebar);
}

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes("'climate-dashboard'")) {
    if (!mobile.includes('CloudSun,')) {
        mobile = mobile.replace("import {\n", "import {\n  CloudSun,\n");
    }
    const newItem = "  { id: 'climate-dashboard', icon: CloudSun, label: 'المناخ والطقس' },\n];";
    mobile = mobile.replace(/];/, newItem);
    fs.writeFileSync('components/MobileMenu.tsx', mobile);
}

console.log("Successfully registered Climate dashboard.");

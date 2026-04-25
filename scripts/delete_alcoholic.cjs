const fs = require('fs');
const path = require('path');

// 1. Delete the file
const componentPath = path.join(__dirname, 'components', 'AlcoholicBeveragesDashboard.tsx');
if (fs.existsSync(componentPath)) {
    fs.unlinkSync(componentPath);
}

// 2. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import AlcoholicBeveragesDashboard from './components/AlcoholicBeveragesDashboard';\n", "");
app = app.replace(" | 'alcoholic-beverages-dashboard'", "");
app = app.replace("                         {activeTab === 'alcoholic-beverages-dashboard' && 'المشروبات الكحولية والروحية'}\n", "");
app = app.replace(/          \{activeTab === 'alcoholic-beverages-dashboard' && \(\s*<div className="animate-in slide-in-from-bottom-4 duration-700">\s*<AlcoholicBeveragesDashboard \/>\s*<\/div>\s*\)\}\n/, "");
fs.writeFileSync('App.tsx', app);

// 3. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
sidebar = sidebar.replace(/,\s*'alcoholic-beverages-dashboard'/, "");
sidebar = sidebar.replace(/<NavItem id="alcoholic-beverages-dashboard".*?\/>\r?\n/, "");
sidebar = sidebar.replace(/\s*<NavItem id="alcoholic-beverages-dashboard".*?\/>/, "");
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 4. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
mobile = mobile.replace(/<NavItem.*label="المشروبات الكحولية والروحية".*?\/>\r?\n/, "");
mobile = mobile.replace(/\s*<NavItem.*label="المشروبات الكحولية والروحية".*?\/>/, "");
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully removed Alcoholic Beverages dashboard and its routes.");

const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import ToysDashboard from './components/ToysDashboard';", "import ToysDashboard from './components/ToysDashboard';\nimport B2BEcommerceDashboard from './components/B2BEcommerceDashboard';");
app = app.replace("| 'toys-dashboard'>(() => {", "| 'toys-dashboard' | 'b2b-ecommerce-dashboard'>(() => {");
app = app.replace("{activeTab === 'toys-dashboard' && 'الألعاب والهوايات'}", "{activeTab === 'toys-dashboard' && 'الألعاب والهوايات'}\n                         {activeTab === 'b2b-ecommerce-dashboard' && 'التجارة الإلكترونية B2B'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'b2b-ecommerce-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <B2BEcommerceDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes('Briefcase')) {
    sidebar = sidebar.replace("  Gamepad2\n}", "  Gamepad2,\n  Briefcase\n}");
    sidebar = sidebar.replace("  Gamepad2,\r\n}", "  Gamepad2,\r\n  Briefcase\r\n}");
    sidebar = sidebar.replace(/Gamepad2\r?\n\}/, "Gamepad2,\n  Briefcase\n}");
}
sidebar = sidebar.replace("'toys-dashboard'].includes", "'toys-dashboard', 'b2b-ecommerce-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"toys-dashboard\" icon={Gamepad2} label=\"الألعاب والهوايات\" active={activeTab === 'toys-dashboard'} onClick={() => setActiveTab?.('toys-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"b2b-ecommerce-dashboard\" icon={Briefcase} label=\"التجارة الإلكترونية B2B\" active={activeTab === 'b2b-ecommerce-dashboard'} onClick={() => setActiveTab?.('b2b-ecommerce-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"b2b-ecommerce-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes('Briefcase')) {
    mobile = mobile.replace("  Gamepad2\n}", "  Gamepad2,\n  Briefcase\n}");
    mobile = mobile.replace("  Gamepad2,\r\n}", "  Gamepad2,\r\n  Briefcase\r\n}");
    mobile = mobile.replace(/Gamepad2\r?\n\}/, "Gamepad2,\n  Briefcase\n}");
}
let mobileTarget = "<NavItem icon={Gamepad2} label=\"الألعاب والهوايات\" active={activeTab === 'toys-dashboard'} onClick={() => handleNavigate('toys-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={Briefcase} label=\"التجارة الإلكترونية B2B\" active={activeTab === 'b2b-ecommerce-dashboard'} onClick={() => handleNavigate('b2b-ecommerce-dashboard')} isNew />";
if (!mobile.includes("id=\"b2b-ecommerce-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully registered B2B E-commerce dashboard.");

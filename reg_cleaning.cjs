const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import HeavyConstructionDashboard from './components/HeavyConstructionDashboard';", "import HeavyConstructionDashboard from './components/HeavyConstructionDashboard';\nimport CleaningProductsDashboard from './components/CleaningProductsDashboard';");
app = app.replace("| 'heavy-construction-dashboard'>(() => {", "| 'heavy-construction-dashboard' | 'cleaning-products-dashboard'>(() => {");
app = app.replace("{activeTab === 'heavy-construction-dashboard' && 'البناء الثقيل والبنية التحتية'}", "{activeTab === 'heavy-construction-dashboard' && 'البناء الثقيل والبنية التحتية'}\n                         {activeTab === 'cleaning-products-dashboard' && 'منتجات التنظيف والعناية المنزلية'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'cleaning-products-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <CleaningProductsDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
// Sparkles is already imported in Sidebar! It's one of the default icons.
sidebar = sidebar.replace("'heavy-construction-dashboard'].includes", "'heavy-construction-dashboard', 'cleaning-products-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"heavy-construction-dashboard\" icon={HardHat} label=\"البناء الثقيل والبنية التحتية\" active={activeTab === 'heavy-construction-dashboard'} onClick={() => setActiveTab?.('heavy-construction-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"cleaning-products-dashboard\" icon={Sparkles} label=\"منتجات التنظيف والعناية المنزلية\" active={activeTab === 'cleaning-products-dashboard'} onClick={() => setActiveTab?.('cleaning-products-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"cleaning-products-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
// Sparkles is already imported in MobileMenu as well.
let mobileTarget = "<NavItem icon={HardHat} label=\"البناء الثقيل والبنية التحتية\" active={activeTab === 'heavy-construction-dashboard'} onClick={() => handleNavigate('heavy-construction-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={Sparkles} label=\"منتجات التنظيف والعناية المنزلية\" active={activeTab === 'cleaning-products-dashboard'} onClick={() => handleNavigate('cleaning-products-dashboard')} isNew />";
if (!mobile.includes("id=\"cleaning-products-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully registered Cleaning Products dashboard.");

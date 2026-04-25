const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import FurnitureHouseholdDashboard from './components/FurnitureHouseholdDashboard';", "import FurnitureHouseholdDashboard from './components/FurnitureHouseholdDashboard';\nimport GardenPatioDashboard from './components/GardenPatioDashboard';");
app = app.replace("| 'furniture-household-dashboard'>(() => {", "| 'furniture-household-dashboard' | 'garden-patio-dashboard'>(() => {");
app = app.replace("{activeTab === 'furniture-household-dashboard' && 'الأثاث والمفروشات والسلع المنزلية'}", "{activeTab === 'furniture-household-dashboard' && 'الأثاث والمفروشات والسلع المنزلية'}\n                         {activeTab === 'garden-patio-dashboard' && 'الحدائق والساحات الخارجية'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'garden-patio-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <GardenPatioDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes('Flower2')) {
    sidebar = sidebar.replace("  Armchair\n}", "  Armchair,\n  Flower2\n}");
    sidebar = sidebar.replace("  Armchair,\r\n}", "  Armchair,\r\n  Flower2\r\n}");
    sidebar = sidebar.replace(/Armchair\r?\n\}/, "Armchair,\n  Flower2\n}");
}
sidebar = sidebar.replace("'furniture-household-dashboard'].includes", "'furniture-household-dashboard', 'garden-patio-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"furniture-household-dashboard\" icon={Armchair} label=\"الأثاث والمفروشات والسلع المنزلية\" active={activeTab === 'furniture-household-dashboard'} onClick={() => setActiveTab?.('furniture-household-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"garden-patio-dashboard\" icon={Flower2} label=\"الحدائق والساحات الخارجية\" active={activeTab === 'garden-patio-dashboard'} onClick={() => setActiveTab?.('garden-patio-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"garden-patio-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes('Flower2')) {
    mobile = mobile.replace("  Armchair\n}", "  Armchair,\n  Flower2\n}");
    mobile = mobile.replace("  Armchair,\r\n}", "  Armchair,\r\n  Flower2\r\n}");
    mobile = mobile.replace(/Armchair\r?\n\}/, "Armchair,\n  Flower2\n}");
}
let mobileTarget = "<NavItem icon={Armchair} label=\"الأثاث والمفروشات والسلع المنزلية\" active={activeTab === 'furniture-household-dashboard'} onClick={() => handleNavigate('furniture-household-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={Flower2} label=\"الحدائق والساحات الخارجية\" active={activeTab === 'garden-patio-dashboard'} onClick={() => handleNavigate('garden-patio-dashboard')} isNew />";
if (!mobile.includes("id=\"garden-patio-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully registered Garden & Patio dashboard.");

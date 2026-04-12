const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import GardenPatioDashboard from './components/GardenPatioDashboard';", "import GardenPatioDashboard from './components/GardenPatioDashboard';\nimport HomeImprovementDashboard from './components/HomeImprovementDashboard';");
app = app.replace("| 'garden-patio-dashboard'>(() => {", "| 'garden-patio-dashboard' | 'home-improvement-dashboard'>(() => {");
app = app.replace("{activeTab === 'garden-patio-dashboard' && 'الحدائق والساحات الخارجية'}", "{activeTab === 'garden-patio-dashboard' && 'الحدائق والساحات الخارجية'}\n                         {activeTab === 'home-improvement-dashboard' && 'تحسين وصيانة المنازل'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'home-improvement-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <HomeImprovementDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes('Hammer')) {
    sidebar = sidebar.replace("  Flower2\n}", "  Flower2,\n  Hammer\n}");
    sidebar = sidebar.replace("  Flower2,\r\n}", "  Flower2,\r\n  Hammer\r\n}");
    sidebar = sidebar.replace(/Flower2\r?\n\}/, "Flower2,\n  Hammer\n}");
}
sidebar = sidebar.replace("'garden-patio-dashboard'].includes", "'garden-patio-dashboard', 'home-improvement-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"garden-patio-dashboard\" icon={Flower2} label=\"الحدائق والساحات الخارجية\" active={activeTab === 'garden-patio-dashboard'} onClick={() => setActiveTab?.('garden-patio-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"home-improvement-dashboard\" icon={Hammer} label=\"تحسين وصيانة المنازل\" active={activeTab === 'home-improvement-dashboard'} onClick={() => setActiveTab?.('home-improvement-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"home-improvement-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes('Hammer')) {
    mobile = mobile.replace("  Flower2\n}", "  Flower2,\n  Hammer\n}");
    mobile = mobile.replace("  Flower2,\r\n}", "  Flower2,\r\n  Hammer\r\n}");
    mobile = mobile.replace(/Flower2\r?\n\}/, "Flower2,\n  Hammer\n}");
}
let mobileTarget = "<NavItem icon={Flower2} label=\"الحدائق والساحات الخارجية\" active={activeTab === 'garden-patio-dashboard'} onClick={() => handleNavigate('garden-patio-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={Hammer} label=\"تحسين وصيانة المنازل\" active={activeTab === 'home-improvement-dashboard'} onClick={() => handleNavigate('home-improvement-dashboard')} isNew />";
if (!mobile.includes("id=\"home-improvement-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully registered Home Improvement dashboard.");

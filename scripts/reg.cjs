const fs = require('fs');

// App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import BuildingConstructionDashboard from './components/BuildingConstructionDashboard';", "import BuildingConstructionDashboard from './components/BuildingConstructionDashboard';\nimport HeavyConstructionDashboard from './components/HeavyConstructionDashboard';");
app = app.replace("| 'building-construction-dashboard'>(() => {", "| 'building-construction-dashboard' | 'heavy-construction-dashboard'>(() => {");
app = app.replace("{activeTab === 'building-construction-dashboard' && 'بناء العقارات والإنشاءات'}", "{activeTab === 'building-construction-dashboard' && 'بناء العقارات والإنشاءات'}\n                         {activeTab === 'heavy-construction-dashboard' && 'البناء الثقيل والبنية التحتية'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'heavy-construction-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <HeavyConstructionDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
sidebar = sidebar.replace("  Building2\n}", "  Building2,\n  HardHat\n}");
sidebar = sidebar.replace("  Building2,\r\n}", "  Building2,\r\n  HardHat\r\n}");
sidebar = sidebar.replace("'building-construction-dashboard'].includes", "'building-construction-dashboard', 'heavy-construction-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"building-construction-dashboard\" icon={Building2} label=\"بناء العقارات والإنشاءات\" active={activeTab === 'building-construction-dashboard'} onClick={() => setActiveTab?.('building-construction-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"heavy-construction-dashboard\" icon={HardHat} label=\"البناء الثقيل والبنية التحتية\" active={activeTab === 'heavy-construction-dashboard'} onClick={() => setActiveTab?.('heavy-construction-dashboard')} isCollapsed={isCollapsed} isNew />";
sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
mobile = mobile.replace("  Building2\n}", "  Building2,\n  HardHat\n}");
mobile = mobile.replace("  Building2,\r\n}", "  Building2,\r\n  HardHat\r\n}");
let mobileTarget = "<NavItem icon={Building2} label=\"بناء العقارات والإنشاءات\" active={activeTab === 'building-construction-dashboard'} onClick={() => handleNavigate('building-construction-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={HardHat} label=\"البناء الثقيل والبنية التحتية\" active={activeTab === 'heavy-construction-dashboard'} onClick={() => handleNavigate('heavy-construction-dashboard')} isNew />";
mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Done");

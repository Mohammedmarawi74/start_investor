const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import HomeImprovementDashboard from './components/HomeImprovementDashboard';", "import HomeImprovementDashboard from './components/HomeImprovementDashboard';\nimport PetSuppliesDashboard from './components/PetSuppliesDashboard';");
app = app.replace("| 'home-improvement-dashboard'>(() => {", "| 'home-improvement-dashboard' | 'pet-supplies-dashboard'>(() => {");
app = app.replace("{activeTab === 'home-improvement-dashboard' && 'تحسين وصيانة المنازل'}", "{activeTab === 'home-improvement-dashboard' && 'تحسين وصيانة المنازل'}\n                         {activeTab === 'pet-supplies-dashboard' && 'مستلزمات الحيوانات الأليفة'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'pet-supplies-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <PetSuppliesDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes('PawPrint')) {
    sidebar = sidebar.replace("  Hammer\n}", "  Hammer,\n  PawPrint\n}");
    sidebar = sidebar.replace("  Hammer,\r\n}", "  Hammer,\r\n  PawPrint\r\n}");
    sidebar = sidebar.replace(/Hammer\r?\n\}/, "Hammer,\n  PawPrint\n}");
}
sidebar = sidebar.replace("'home-improvement-dashboard'].includes", "'home-improvement-dashboard', 'pet-supplies-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"home-improvement-dashboard\" icon={Hammer} label=\"تحسين وصيانة المنازل\" active={activeTab === 'home-improvement-dashboard'} onClick={() => setActiveTab?.('home-improvement-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"pet-supplies-dashboard\" icon={PawPrint} label=\"مستلزمات الحيوانات الأليفة\" active={activeTab === 'pet-supplies-dashboard'} onClick={() => setActiveTab?.('pet-supplies-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"pet-supplies-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes('PawPrint')) {
    mobile = mobile.replace("  Hammer\n}", "  Hammer,\n  PawPrint\n}");
    mobile = mobile.replace("  Hammer,\r\n}", "  Hammer,\r\n  PawPrint\r\n}");
    mobile = mobile.replace(/Hammer\r?\n\}/, "Hammer,\n  PawPrint\n}");
}
let mobileTarget = "<NavItem icon={Hammer} label=\"تحسين وصيانة المنازل\" active={activeTab === 'home-improvement-dashboard'} onClick={() => handleNavigate('home-improvement-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={PawPrint} label=\"مستلزمات الحيوانات الأليفة\" active={activeTab === 'pet-supplies-dashboard'} onClick={() => handleNavigate('pet-supplies-dashboard')} isNew />";
if (!mobile.includes("id=\"pet-supplies-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully registered Pet Supplies dashboard.");

const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import PetSuppliesDashboard from './components/PetSuppliesDashboard';", "import PetSuppliesDashboard from './components/PetSuppliesDashboard';\nimport ToysDashboard from './components/ToysDashboard';");
app = app.replace("| 'pet-supplies-dashboard'>(() => {", "| 'pet-supplies-dashboard' | 'toys-dashboard'>(() => {");
app = app.replace("{activeTab === 'pet-supplies-dashboard' && 'مستلزمات الحيوانات الأليفة'}", "{activeTab === 'pet-supplies-dashboard' && 'مستلزمات الحيوانات الأليفة'}\n                         {activeTab === 'toys-dashboard' && 'الألعاب والهوايات'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'toys-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <ToysDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes('Gamepad2')) {
    sidebar = sidebar.replace("  PawPrint\n}", "  PawPrint,\n  Gamepad2\n}");
    sidebar = sidebar.replace("  PawPrint,\r\n}", "  PawPrint,\r\n  Gamepad2\r\n}");
    sidebar = sidebar.replace(/PawPrint\r?\n\}/, "PawPrint,\n  Gamepad2\n}");
}
sidebar = sidebar.replace("'pet-supplies-dashboard'].includes", "'pet-supplies-dashboard', 'toys-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"pet-supplies-dashboard\" icon={PawPrint} label=\"مستلزمات الحيوانات الأليفة\" active={activeTab === 'pet-supplies-dashboard'} onClick={() => setActiveTab?.('pet-supplies-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"toys-dashboard\" icon={Gamepad2} label=\"الألعاب والهوايات\" active={activeTab === 'toys-dashboard'} onClick={() => setActiveTab?.('toys-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"toys-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes('Gamepad2')) {
    mobile = mobile.replace("  PawPrint\n}", "  PawPrint,\n  Gamepad2\n}");
    mobile = mobile.replace("  PawPrint,\r\n}", "  PawPrint,\r\n  Gamepad2\r\n}");
    mobile = mobile.replace(/PawPrint\r?\n\}/, "PawPrint,\n  Gamepad2\n}");
}
let mobileTarget = "<NavItem icon={PawPrint} label=\"مستلزمات الحيوانات الأليفة\" active={activeTab === 'pet-supplies-dashboard'} onClick={() => handleNavigate('pet-supplies-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={Gamepad2} label=\"الألعاب والهوايات\" active={activeTab === 'toys-dashboard'} onClick={() => handleNavigate('toys-dashboard')} isNew />";
if (!mobile.includes("id=\"toys-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully registered Toys dashboard.");

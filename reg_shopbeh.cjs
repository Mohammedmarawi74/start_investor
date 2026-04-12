const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import C2CEcommerceDashboard from './components/C2CEcommerceDashboard';", "import C2CEcommerceDashboard from './components/C2CEcommerceDashboard';\nimport DigitalShoppingBehaviourDashboard from './components/DigitalShoppingBehaviourDashboard';");
app = app.replace("| 'c2c-ecommerce-dashboard'>(() => {", "| 'c2c-ecommerce-dashboard' | 'digital-shopping-behaviour-dashboard'>(() => {");
app = app.replace("{activeTab === 'c2c-ecommerce-dashboard' && 'التجارة الإلكترونية C2C'}", "{activeTab === 'c2c-ecommerce-dashboard' && 'التجارة الإلكترونية C2C'}\n                         {activeTab === 'digital-shopping-behaviour-dashboard' && 'سلوك التسوق الرقمي'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'digital-shopping-behaviour-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <DigitalShoppingBehaviourDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes('BrainCircuit')) {
    sidebar = sidebar.replace("  Handshake\n}", "  Handshake,\n  BrainCircuit\n}");
    sidebar = sidebar.replace("  Handshake,\r\n}", "  Handshake,\r\n  BrainCircuit\r\n}");
    sidebar = sidebar.replace(/Handshake\r?\n\}/, "Handshake,\n  BrainCircuit\n}");
}
sidebar = sidebar.replace("'c2c-ecommerce-dashboard'].includes", "'c2c-ecommerce-dashboard', 'digital-shopping-behaviour-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"c2c-ecommerce-dashboard\" icon={Handshake} label=\"التجارة الإلكترونية C2C\" active={activeTab === 'c2c-ecommerce-dashboard'} onClick={() => setActiveTab?.('c2c-ecommerce-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"digital-shopping-behaviour-dashboard\" icon={BrainCircuit} label=\"سلوك التسوق الرقمي\" active={activeTab === 'digital-shopping-behaviour-dashboard'} onClick={() => setActiveTab?.('digital-shopping-behaviour-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"digital-shopping-behaviour-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
// BrainCircuit is already there at line 11. I should check if it needs to be added to imports at the top.
// Wait, looking at MobileMenu.tsx view output, BrainCircuit is at line 11.
let mobileTarget = "<NavItem icon={Handshake} label=\"التجارة الإلكترونية C2C\" active={activeTab === 'c2c-ecommerce-dashboard'} onClick={() => handleNavigate('c2c-ecommerce-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={BrainCircuit} label=\"سلوك التسوق الرقمي\" active={activeTab === 'digital-shopping-behaviour-dashboard'} onClick={() => handleNavigate('digital-shopping-behaviour-dashboard')} isNew />";
if (!mobile.includes("id=\"digital-shopping-behaviour-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully registered Digital Shopping Behaviour dashboard.");

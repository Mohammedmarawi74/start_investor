const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import DigitalShoppingBehaviourDashboard from './components/DigitalShoppingBehaviourDashboard';", "import DigitalShoppingBehaviourDashboard from './components/DigitalShoppingBehaviourDashboard';\nimport ECommerceKeyFiguresDashboard from './components/ECommerceKeyFiguresDashboard';");
app = app.replace("| 'digital-shopping-behaviour-dashboard'>(() => {", "| 'digital-shopping-behaviour-dashboard' | 'ecommerce-key-figures-dashboard'>(() => {");
app = app.replace("{activeTab === 'digital-shopping-behaviour-dashboard' && 'سلوك التسوق الرقمي'}", "{activeTab === 'digital-shopping-behaviour-dashboard' && 'سلوك التسوق الرقمي'}\n                         {activeTab === 'ecommerce-key-figures-dashboard' && 'أرقام ومؤشرات التجارة الإلكترونية'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'ecommerce-key-figures-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <ECommerceKeyFiguresDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes('Hash')) {
    sidebar = sidebar.replace("  BrainCircuit\n}", "  BrainCircuit,\n  Hash\n}");
    sidebar = sidebar.replace("  BrainCircuit,\r\n}", "  BrainCircuit,\r\n  Hash\r\n}");
    sidebar = sidebar.replace(/BrainCircuit\r?\n\}/, "BrainCircuit,\n  Hash\n}");
}
sidebar = sidebar.replace("'digital-shopping-behaviour-dashboard'].includes", "'digital-shopping-behaviour-dashboard', 'ecommerce-key-figures-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"digital-shopping-behaviour-dashboard\" icon={BrainCircuit} label=\"سلوك التسوق الرقمي\" active={activeTab === 'digital-shopping-behaviour-dashboard'} onClick={() => setActiveTab?.('digital-shopping-behaviour-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"ecommerce-key-figures-dashboard\" icon={Hash} label=\"أرقام ومؤشرات التجارة الإلكترونية\" active={activeTab === 'ecommerce-key-figures-dashboard'} onClick={() => setActiveTab?.('ecommerce-key-figures-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"ecommerce-key-figures-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes('Hash')) {
    mobile = mobile.replace("  PawPrint,\n  Gamepad2,\n  Briefcase,\n  ShoppingCart,\n  Handshake\n}", "  PawPrint,\n  Gamepad2,\n  Briefcase,\n  ShoppingCart,\n  Handshake,\n  Hash\n}");
}
let mobileTarget = "<NavItem icon={BrainCircuit} label=\"سلوك التسوق الرقمي\" active={activeTab === 'digital-shopping-behaviour-dashboard'} onClick={() => handleNavigate('digital-shopping-behaviour-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={Hash} label=\"أرقام ومؤشرات التجارة الإلكترونية\" active={activeTab === 'ecommerce-key-figures-dashboard'} onClick={() => handleNavigate('ecommerce-key-figures-dashboard')} isNew />";
if (!mobile.includes("id=\"ecommerce-key-figures-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully registered E-commerce Key Figures dashboard.");

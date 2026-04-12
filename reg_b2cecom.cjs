const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import B2BEcommerceDashboard from './components/B2BEcommerceDashboard';", "import B2BEcommerceDashboard from './components/B2BEcommerceDashboard';\nimport B2CEcommerceDashboard from './components/B2CEcommerceDashboard';");
app = app.replace("| 'b2b-ecommerce-dashboard'>(() => {", "| 'b2b-ecommerce-dashboard' | 'b2c-ecommerce-dashboard'>(() => {");
app = app.replace("{activeTab === 'b2b-ecommerce-dashboard' && 'التجارة الإلكترونية B2B'}", "{activeTab === 'b2b-ecommerce-dashboard' && 'التجارة الإلكترونية B2B'}\n                         {activeTab === 'b2c-ecommerce-dashboard' && 'التجارة الإلكترونية B2C'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'b2c-ecommerce-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <B2CEcommerceDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes('ShoppingCart')) {
    sidebar = sidebar.replace("  Briefcase\n}", "  Briefcase,\n  ShoppingCart\n}");
    sidebar = sidebar.replace("  Briefcase,\r\n}", "  Briefcase,\r\n  ShoppingCart\r\n}");
    sidebar = sidebar.replace(/Briefcase\r?\n\}/, "Briefcase,\n  ShoppingCart\n}");
}
sidebar = sidebar.replace("'b2b-ecommerce-dashboard'].includes", "'b2b-ecommerce-dashboard', 'b2c-ecommerce-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"b2b-ecommerce-dashboard\" icon={Briefcase} label=\"التجارة الإلكترونية B2B\" active={activeTab === 'b2b-ecommerce-dashboard'} onClick={() => setActiveTab?.('b2b-ecommerce-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"b2c-ecommerce-dashboard\" icon={ShoppingCart} label=\"التجارة الإلكترونية B2C\" active={activeTab === 'b2c-ecommerce-dashboard'} onClick={() => setActiveTab?.('b2c-ecommerce-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"b2c-ecommerce-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes('ShoppingCart')) {
    mobile = mobile.replace("  Briefcase\n}", "  Briefcase,\n  ShoppingCart\n}");
    mobile = mobile.replace("  Briefcase,\r\n}", "  Briefcase,\r\n  ShoppingCart\r\n}");
    mobile = mobile.replace(/Briefcase\r?\n\}/, "Briefcase,\n  ShoppingCart\n}");
}
let mobileTarget = "<NavItem icon={Briefcase} label=\"التجارة الإلكترونية B2B\" active={activeTab === 'b2b-ecommerce-dashboard'} onClick={() => handleNavigate('b2b-ecommerce-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={ShoppingCart} label=\"التجارة الإلكترونية B2C\" active={activeTab === 'b2c-ecommerce-dashboard'} onClick={() => handleNavigate('b2c-ecommerce-dashboard')} isNew />";
if (!mobile.includes("id=\"b2c-ecommerce-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully registered B2C E-commerce dashboard.");

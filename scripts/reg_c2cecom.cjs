const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import B2CEcommerceDashboard from './components/B2CEcommerceDashboard';", "import B2CEcommerceDashboard from './components/B2CEcommerceDashboard';\nimport C2CEcommerceDashboard from './components/C2CEcommerceDashboard';");
app = app.replace("| 'b2c-ecommerce-dashboard'>(() => {", "| 'b2c-ecommerce-dashboard' | 'c2c-ecommerce-dashboard'>(() => {");
app = app.replace("{activeTab === 'b2c-ecommerce-dashboard' && 'التجارة الإلكترونية B2C'}", "{activeTab === 'b2c-ecommerce-dashboard' && 'التجارة الإلكترونية B2C'}\n                         {activeTab === 'c2c-ecommerce-dashboard' && 'التجارة الإلكترونية C2C'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'c2c-ecommerce-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <C2CEcommerceDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes('Handshake')) {
    sidebar = sidebar.replace("  ShoppingCart\n}", "  ShoppingCart,\n  Handshake\n}");
    sidebar = sidebar.replace("  ShoppingCart,\r\n}", "  ShoppingCart,\r\n  Handshake\r\n}");
    sidebar = sidebar.replace(/ShoppingCart\r?\n\}/, "ShoppingCart,\n  Handshake\n}");
}
sidebar = sidebar.replace("'b2c-ecommerce-dashboard'].includes", "'b2c-ecommerce-dashboard', 'c2c-ecommerce-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"b2c-ecommerce-dashboard\" icon={ShoppingCart} label=\"التجارة الإلكترونية B2C\" active={activeTab === 'b2c-ecommerce-dashboard'} onClick={() => setActiveTab?.('b2c-ecommerce-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"c2c-ecommerce-dashboard\" icon={Handshake} label=\"التجارة الإلكترونية C2C\" active={activeTab === 'c2c-ecommerce-dashboard'} onClick={() => setActiveTab?.('c2c-ecommerce-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"c2c-ecommerce-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes('Handshake')) {
    mobile = mobile.replace("  ShoppingCart\n}", "  ShoppingCart,\n  Handshake\n}");
    mobile = mobile.replace("  ShoppingCart,\r\n}", "  ShoppingCart,\r\n  Handshake\r\n}");
    mobile = mobile.replace(/ShoppingCart\r?\n\}/, "ShoppingCart,\n  Handshake\n}");
}
let mobileTarget = "<NavItem icon={ShoppingCart} label=\"التجارة الإلكترونية B2C\" active={activeTab === 'b2c-ecommerce-dashboard'} onClick={() => handleNavigate('b2c-ecommerce-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={Handshake} label=\"التجارة الإلكترونية C2C\" active={activeTab === 'c2c-ecommerce-dashboard'} onClick={() => handleNavigate('c2c-ecommerce-dashboard')} isNew />";
if (!mobile.includes("id=\"c2c-ecommerce-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully registered C2C E-commerce dashboard.");

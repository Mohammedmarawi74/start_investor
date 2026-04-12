const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import ECommerceKeyFiguresDashboard from './components/ECommerceKeyFiguresDashboard';", "import ECommerceKeyFiguresDashboard from './components/ECommerceKeyFiguresDashboard';\nimport PaidContentDashboard from './components/PaidContentDashboard';");
app = app.replace("| 'ecommerce-key-figures-dashboard'>(() => {", "| 'ecommerce-key-figures-dashboard' | 'paid-content-dashboard'>(() => {");
app = app.replace("{activeTab === 'ecommerce-key-figures-dashboard' && 'أرقام ومؤشرات التجارة الإلكترونية'}", "{activeTab === 'ecommerce-key-figures-dashboard' && 'أرقام ومؤشرات التجارة الإلكترونية'}\n                         {activeTab === 'paid-content-dashboard' && 'المحتوى الرقمي والخدمات المدفوعة'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'paid-content-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <PaidContentDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes('PlayCircle')) {
    sidebar = sidebar.replace("  Hash\n}", "  Hash,\n  PlayCircle\n}");
    sidebar = sidebar.replace("  Hash,\r\n}", "  Hash,\r\n  PlayCircle\r\n}");
    sidebar = sidebar.replace(/Hash\r?\n\}/, "Hash,\n  PlayCircle\n}");
}
sidebar = sidebar.replace("'ecommerce-key-figures-dashboard'].includes", "'ecommerce-key-figures-dashboard', 'paid-content-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"ecommerce-key-figures-dashboard\" icon={Hash} label=\"أرقام ومؤشرات التجارة الإلكترونية\" active={activeTab === 'ecommerce-key-figures-dashboard'} onClick={() => setActiveTab?.('ecommerce-key-figures-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"paid-content-dashboard\" icon={PlayCircle} label=\"المحتوى الرقمي والخدمات المدفوعة\" active={activeTab === 'paid-content-dashboard'} onClick={() => setActiveTab?.('paid-content-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"paid-content-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes('PlayCircle')) {
    mobile = mobile.replace("  Hash\n}", "  Hash,\n  PlayCircle\n}");
}
let mobileTarget = "<NavItem icon={Hash} label=\"أرقام ومؤشرات التجارة الإلكترونية\" active={activeTab === 'ecommerce-key-figures-dashboard'} onClick={() => handleNavigate('ecommerce-key-figures-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={PlayCircle} label=\"المحتوى الرقمي والخدمات المدفوعة\" active={activeTab === 'paid-content-dashboard'} onClick={() => handleNavigate('paid-content-dashboard')} isNew />";
if (!mobile.includes("id=\"paid-content-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully registered Paid Content dashboard.");

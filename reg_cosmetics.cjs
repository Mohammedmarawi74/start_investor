const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import CleaningProductsDashboard from './components/CleaningProductsDashboard';", "import CleaningProductsDashboard from './components/CleaningProductsDashboard';\nimport CosmeticsPersonalCareDashboard from './components/CosmeticsPersonalCareDashboard';");
app = app.replace("| 'cleaning-products-dashboard'>(() => {", "| 'cleaning-products-dashboard' | 'cosmetics-personal-care-dashboard'>(() => {");
app = app.replace("{activeTab === 'cleaning-products-dashboard' && 'منتجات التنظيف والعناية المنزلية'}", "{activeTab === 'cleaning-products-dashboard' && 'منتجات التنظيف والعناية المنزلية'}\n                         {activeTab === 'cosmetics-personal-care-dashboard' && 'مستحضرات التجميل والعناية الشخصية'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'cosmetics-personal-care-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <CosmeticsPersonalCareDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes('Heart,')) {
    sidebar = sidebar.replace("  Sparkles\n}", "  Sparkles,\n  Heart\n}");
    sidebar = sidebar.replace("  Sparkles,\r\n}", "  Sparkles,\r\n  Heart\r\n}");
    sidebar = sidebar.replace(/Sparkles\r?\n\}/, "Sparkles,\n  Heart\n}");
}
sidebar = sidebar.replace("'cleaning-products-dashboard'].includes", "'cleaning-products-dashboard', 'cosmetics-personal-care-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"cleaning-products-dashboard\" icon={Sparkles} label=\"منتجات التنظيف والعناية المنزلية\" active={activeTab === 'cleaning-products-dashboard'} onClick={() => setActiveTab?.('cleaning-products-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"cosmetics-personal-care-dashboard\" icon={Heart} label=\"مستحضرات التجميل والعناية الشخصية\" active={activeTab === 'cosmetics-personal-care-dashboard'} onClick={() => setActiveTab?.('cosmetics-personal-care-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"cosmetics-personal-care-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes('Heart,')) {
    mobile = mobile.replace("  Sparkles\n}", "  Sparkles,\n  Heart\n}");
    mobile = mobile.replace("  Sparkles,\r\n}", "  Sparkles,\r\n  Heart\r\n}");
    mobile = mobile.replace(/Sparkles\r?\n\}/, "Sparkles,\n  Heart\n}");
}
let mobileTarget = "<NavItem icon={Sparkles} label=\"منتجات التنظيف والعناية المنزلية\" active={activeTab === 'cleaning-products-dashboard'} onClick={() => handleNavigate('cleaning-products-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={Heart} label=\"مستحضرات التجميل والعناية الشخصية\" active={activeTab === 'cosmetics-personal-care-dashboard'} onClick={() => handleNavigate('cosmetics-personal-care-dashboard')} isNew />";
if (!mobile.includes("id=\"cosmetics-personal-care-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully registered Cosmetics & Personal Care dashboard.");

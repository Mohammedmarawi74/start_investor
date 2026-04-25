const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import CosmeticsPersonalCareDashboard from './components/CosmeticsPersonalCareDashboard';", "import CosmeticsPersonalCareDashboard from './components/CosmeticsPersonalCareDashboard';\nimport FoodNutritionDashboard from './components/FoodNutritionDashboard';");
app = app.replace("| 'cosmetics-personal-care-dashboard'>(() => {", "| 'cosmetics-personal-care-dashboard' | 'food-nutrition-dashboard'>(() => {");
app = app.replace("{activeTab === 'cosmetics-personal-care-dashboard' && 'مستحضرات التجميل والعناية الشخصية'}", "{activeTab === 'cosmetics-personal-care-dashboard' && 'مستحضرات التجميل والعناية الشخصية'}\n                         {activeTab === 'food-nutrition-dashboard' && 'الغذاء والتغذية'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'food-nutrition-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <FoodNutritionDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes('Utensils')) {
    sidebar = sidebar.replace("  Heart\n}", "  Heart,\n  Utensils\n}");
    sidebar = sidebar.replace("  Heart,\r\n}", "  Heart,\r\n  Utensils\r\n}");
}
sidebar = sidebar.replace("'cosmetics-personal-care-dashboard'].includes", "'cosmetics-personal-care-dashboard', 'food-nutrition-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"cosmetics-personal-care-dashboard\" icon={Heart} label=\"مستحضرات التجميل والعناية الشخصية\" active={activeTab === 'cosmetics-personal-care-dashboard'} onClick={() => setActiveTab?.('cosmetics-personal-care-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"food-nutrition-dashboard\" icon={Utensils} label=\"الغذاء والتغذية\" active={activeTab === 'food-nutrition-dashboard'} onClick={() => setActiveTab?.('food-nutrition-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"food-nutrition-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes('Utensils')) {
    mobile = mobile.replace("  Heart\n}", "  Heart,\n  Utensils\n}");
    mobile = mobile.replace("  Heart,\r\n}", "  Heart,\r\n  Utensils\r\n}");
}
let mobileTarget = "<NavItem icon={Heart} label=\"مستحضرات التجميل والعناية الشخصية\" active={activeTab === 'cosmetics-personal-care-dashboard'} onClick={() => handleNavigate('cosmetics-personal-care-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={Utensils} label=\"الغذاء والتغذية\" active={activeTab === 'food-nutrition-dashboard'} onClick={() => handleNavigate('food-nutrition-dashboard')} isNew />";
if (!mobile.includes("id=\"food-nutrition-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully registered Food & Nutrition dashboard.");

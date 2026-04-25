const fs = require('fs');

// 1. App.tsx
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace("import FoodNutritionDashboard from './components/FoodNutritionDashboard';", "import FoodNutritionDashboard from './components/FoodNutritionDashboard';\nimport FurnitureHouseholdDashboard from './components/FurnitureHouseholdDashboard';");
app = app.replace("| 'food-nutrition-dashboard'>(() => {", "| 'food-nutrition-dashboard' | 'furniture-household-dashboard'>(() => {");
app = app.replace("{activeTab === 'food-nutrition-dashboard' && 'الغذاء والتغذية'}", "{activeTab === 'food-nutrition-dashboard' && 'الغذاء والتغذية'}\n                         {activeTab === 'furniture-household-dashboard' && 'الأثاث والمفروشات والسلع المنزلية'}");
app = app.replace("{/* Global Dashboard Footer", "         {activeTab === 'furniture-household-dashboard' && (\n            <div className=\"animate-in slide-in-from-bottom-4 duration-700\">\n               <FurnitureHouseholdDashboard />\n            </div>\n          )}\n          {/* Global Dashboard Footer");
fs.writeFileSync('App.tsx', app);

// 2. Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes('Armchair')) {
    sidebar = sidebar.replace("  Utensils\n}", "  Utensils,\n  Armchair\n}");
    sidebar = sidebar.replace("  Utensils,\r\n}", "  Utensils,\r\n  Armchair\r\n}");
    sidebar = sidebar.replace(/Utensils\r?\n\}/, "Utensils,\n  Armchair\n}");
}
sidebar = sidebar.replace("'food-nutrition-dashboard'].includes", "'food-nutrition-dashboard', 'furniture-household-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"food-nutrition-dashboard\" icon={Utensils} label=\"الغذاء والتغذية\" active={activeTab === 'food-nutrition-dashboard'} onClick={() => setActiveTab?.('food-nutrition-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"furniture-household-dashboard\" icon={Armchair} label=\"الأثاث والمفروشات والسلع المنزلية\" active={activeTab === 'furniture-household-dashboard'} onClick={() => setActiveTab?.('furniture-household-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"furniture-household-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// 3. MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes('Armchair')) {
    mobile = mobile.replace("  Utensils\n}", "  Utensils,\n  Armchair\n}");
    mobile = mobile.replace("  Utensils,\r\n}", "  Utensils,\r\n  Armchair\r\n}");
    mobile = mobile.replace(/Utensils\r?\n\}/, "Utensils,\n  Armchair\n}");
}
let mobileTarget = "<NavItem icon={Utensils} label=\"الغذاء والتغذية\" active={activeTab === 'food-nutrition-dashboard'} onClick={() => handleNavigate('food-nutrition-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={Armchair} label=\"الأثاث والمفروشات والسلع المنزلية\" active={activeTab === 'furniture-household-dashboard'} onClick={() => handleNavigate('furniture-household-dashboard')} isNew />";
if (!mobile.includes("id=\"furniture-household-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Successfully registered Furniture & Household dashboard.");

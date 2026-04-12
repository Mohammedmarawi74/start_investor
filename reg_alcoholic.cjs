const fs = require('fs');

// Sidebar.tsx
let sidebar = fs.readFileSync('components/Sidebar.tsx', 'utf8');
if (!sidebar.includes('Wine')) {
    sidebar = sidebar.replace("  HardHat\n}", "  HardHat,\n  Wine\n}");
    sidebar = sidebar.replace("  HardHat,\r\n}", "  HardHat,\r\n  Wine\r\n}");
    sidebar = sidebar.replace(/HardHat\r?\n\}/, "HardHat,\n  Wine\n}"); // fallback
}
sidebar = sidebar.replace("'heavy-construction-dashboard'].includes", "'heavy-construction-dashboard', 'alcoholic-beverages-dashboard'].includes");

let sidebarTarget = "<NavItem id=\"heavy-construction-dashboard\" icon={HardHat} label=\"البناء الثقيل والبنية التحتية\" active={activeTab === 'heavy-construction-dashboard'} onClick={() => setActiveTab?.('heavy-construction-dashboard')} isCollapsed={isCollapsed} isNew />";
let newSidebarItem = "\n                              <NavItem id=\"alcoholic-beverages-dashboard\" icon={Wine} label=\"المشروبات الكحولية والروحية\" active={activeTab === 'alcoholic-beverages-dashboard'} onClick={() => setActiveTab?.('alcoholic-beverages-dashboard')} isCollapsed={isCollapsed} isNew />";
if (!sidebar.includes("id=\"alcoholic-beverages-dashboard\"")) {
    sidebar = sidebar.replace(sidebarTarget, sidebarTarget + newSidebarItem);
}
fs.writeFileSync('components/Sidebar.tsx', sidebar);

// MobileMenu.tsx
let mobile = fs.readFileSync('components/MobileMenu.tsx', 'utf8');
if (!mobile.includes('Wine')) {
    mobile = mobile.replace(/HardHat\r?\n\}/, "HardHat,\n  Wine\n}"); // robust
    mobile = mobile.replace("  HardHat\n}", "  HardHat,\n  Wine\n}");
    mobile = mobile.replace("  HardHat,\r\n}", "  HardHat,\r\n  Wine\r\n}");
}
let mobileTarget = "<NavItem icon={HardHat} label=\"البناء الثقيل والبنية التحتية\" active={activeTab === 'heavy-construction-dashboard'} onClick={() => handleNavigate('heavy-construction-dashboard')} isNew />";
let newMobileItem = "\n                        <NavItem icon={Wine} label=\"المشروبات الكحولية والروحية\" active={activeTab === 'alcoholic-beverages-dashboard'} onClick={() => handleNavigate('alcoholic-beverages-dashboard')} isNew />";
if (!mobile.includes("id=\"alcoholic-beverages-dashboard\"")) {
    mobile = mobile.replace(mobileTarget, mobileTarget + newMobileItem);
}
fs.writeFileSync('components/MobileMenu.tsx', mobile);

console.log("Done");
